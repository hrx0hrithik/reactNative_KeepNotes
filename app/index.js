import { useContext, useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  useColorScheme,
  View,
} from "react-native";
import { SimpleGrid } from "react-native-super-grid";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

// import AddNote from "./AddNote";
import SearchBar from "../components/SearchBar";
import BottomBar from "../components/BottomBar";
import NoteBox from "../components/NoteBox";
import LeftDrawer from "../components/LeftDrawer";

import * as NavigationBar from "expo-navigation-bar";

import { NoteContext } from "../context/NoteContext";
import { ThemeContext } from "../context/ThemeContext";
import { AddnoteModalContext } from "../context/AddnoteModalContext";

export default function App() {
  const colorScheme = useColorScheme();

  const { allNotes, noteId, deleteNote, editNote } = useContext(NoteContext);
  const { setAutoTheme } = useContext(ThemeContext);
  const { setOpenModal } = useContext(AddnoteModalContext);

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const [isFullWidth, setIsFullWidth] = useState(false);

  NavigationBar.setBackgroundColorAsync(
    colorScheme === "light" ? "#e9f1f7" : "#20212e"
  );
  NavigationBar.setButtonStyleAsync(colorScheme === "light" ? "dark" : "light")

  useEffect(() => {
    const recentNote = allNotes.find((n) => n.noteId === noteId);

    if (recentNote) {
      const isTitleEmpty =
        !recentNote.title || recentNote.title.trim().length === 0;
      const isDescriptionEmpty =
        !recentNote.description || recentNote.description.trim().length === 0;

      if (isTitleEmpty && isDescriptionEmpty) {
        ToastAndroid.show("Empty note discarded", ToastAndroid.LONG);
        deleteNote(noteId);
      }
    }
  }, [allNotes]);

  useEffect(() => {
    setAutoTheme(colorScheme);
  }, [colorScheme]);

  const handleNoteOnPress = (item) => {
    editNote(item);
    setOpenModal(true)
  }

  return (
    <>
      <LeftDrawer>
        <SafeAreaView style={[styles.container, themeContainerStyle]}>
          <SearchBar
            isFullWidth={isFullWidth}
            setIsFullWidth={setIsFullWidth}
          />
          {allNotes.length > 0 ? (
            <ScrollView style={styles.scrollViewNotes}>
              <SimpleGrid
                style={styles.NoteBoxWrapper}
                itemDimension={isFullWidth ? 500 : 130}
                spacing={6}
                maxItemsPerRow={3}
                data={allNotes}
                keyExtractor={(item) => item.noteId}
                renderItem={({ item, index }) => (
                  <Pressable key={index} onPress={() => handleNoteOnPress(item)}>
                    <NoteBox
                      key={item.noteId}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                      noteId={item.noteId}
                    />
                  </Pressable>
                )}
              />
            </ScrollView>
          ) : (
            <View style={styles.noNotesWrapper}>
              <MaterialIcons
                name="lightbulb-outline"
                size={120}
                color={colorScheme === "light" ? "#ffc954" : "#fff" }
                style={{ marginBottom: 16 }}
              />
              <Text
                style={
                  colorScheme === "light"
                    ? { color: "#000" }
                    : { color: "#fff" }
                }
              >
                Notes you add appear here
              </Text>
            </View>
          )}
          <BottomBar />
          {/* <AddNote /> */}
        </SafeAreaView>
      </LeftDrawer>
      <StatusBar
        backgroundColor={colorScheme === "light" ? "#e9f1f7" : "#12121a"}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 0,
  },
  lightContainer: {
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#12121a",
  },
  scrollViewNotes: {
    marginBottom: 50,
    paddingHorizontal: 6,
  },
  NoteBoxWrapper: {
    paddingBottom: 2,
  },
  noNotesWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "75%",
  },
});
