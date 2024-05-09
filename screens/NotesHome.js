import { useContext, useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import { SimpleGrid } from "react-native-super-grid";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import SearchBar from "../components/SearchBar";
import BottomBar from "../components/BottomBar";
import NoteBox from "../components/NoteBox";

import * as NavigationBar from "expo-navigation-bar";

import { NoteContext } from "../context/NoteContext";
import { ThemeContext } from "../context/ThemeContext";

export default function NotesHome({ navigation }) {
  const { allNotes, noteId, deleteNote, editNote } = useContext(NoteContext);
  const { autoTheme } = useContext(ThemeContext);

  const themeContainerStyle =
    autoTheme === "light" ? styles.lightContainer : styles.darkContainer;

  const [isFullWidth, setIsFullWidth] = useState(false);

  NavigationBar.setBackgroundColorAsync(
    autoTheme === "light" ? "#e9f1f7" : "#20212e"
  );
  NavigationBar.setButtonStyleAsync(autoTheme === "light" ? "dark" : "light");

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
    // console.log(recentNote)
  }, [allNotes]);

  const handleNoteOnPress = (item) => {
    editNote(item);
    navigation.push("AddNote");
  };

  return (
    <>
      <SafeAreaView style={[styles.container, themeContainerStyle]}>
        <SearchBar
          isFullWidth={isFullWidth}
          setIsFullWidth={setIsFullWidth}
          navigation={navigation}
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
              color={autoTheme === "light" ? "#ffc954" : "#fff"}
              style={{ marginBottom: 16 }}
            />
            <Text
              style={
                autoTheme === "light" ? { color: "#000" } : { color: "#fff" }
              }
            >
              Notes you add appear here
            </Text>
          </View>
        )}
        <BottomBar navigation={navigation} />
        {/* <AddNote /> */}
      </SafeAreaView>
      <StatusBar
        backgroundColor={autoTheme === "light" ? "#e9f1f7" : "#12121a"}
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
