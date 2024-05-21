import { useContext, useEffect, useState } from "react";
import {
  Keyboard,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import SearchBar from "../components/SearchBar";
import BottomBar from "../components/BottomBar";
import NoteBox from "../components/NoteBox";

import * as NavigationBar from "expo-navigation-bar";

import { NoteContext } from "../context/NoteContext";
import { ThemeContext } from "../context/ThemeContext";
import SelectionModeTopBar from "../components/SelectionModeTopBar";
import { darkBarBackground, lightBarBackground } from "../utility/themes";

export default function NotesHome({ navigation }) {
  const { allNotes, noteId, deleteNote, editNote, selectedNotes, setSelectedNotes } = useContext(NoteContext);
  const { autoTheme } = useContext(ThemeContext);

  const themeContainerStyle =
    autoTheme === "light" ? styles.lightContainer : styles.darkContainer;

  const [isFullWidth, setIsFullWidth] = useState(false);
  const [selectionMode, setSelectionMode] = useState(false);

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
    // console.log(noteId)
  }, [allNotes, noteId]);

  const handleNoteOnPress = (item) => {
    if (selectionMode) {
      handleNoteSelection(item.noteId);
    } else {
      editNote(item);
      navigation.push("AddNote");
    }
  };

  const handleNoteOnLongPress = (item) => {
    Keyboard.dismiss();
    setSelectionMode(true);
    handleNoteSelection(item.noteId);
  };

  const handleNoteSelection = (noteId) => {
    setSelectedNotes((prevSelectedNotes) => {
      const newSelectedNotes = prevSelectedNotes.includes(noteId)
        ? prevSelectedNotes.filter((id) => id !== noteId)
        : [...prevSelectedNotes, noteId];

      if (newSelectedNotes.length === 0) {
        setSelectionMode(false);
      }

      return newSelectedNotes;
    });
  };

  return (
    <>
      <View style={[styles.container, themeContainerStyle]}>
        {selectionMode ? (
          <SelectionModeTopBar
            length={selectedNotes.length}
            setSelectedNotes={setSelectedNotes}
            setSelectionMode={setSelectionMode}
          />
        ) : (
          <SearchBar
            isFullWidth={isFullWidth}
            setIsFullWidth={setIsFullWidth}
            navigation={navigation}
          />
        )}
        {allNotes.length > 0 ? (
          <ScrollView style={styles.scrollViewNotes}>
            <MasonryList
              style={styles.NoteBoxWrapper}
              numColumns={isFullWidth ? 1 : 2}
              data={allNotes}
              keyExtractor={(item) => item.noteId}
              renderItem={({ item, index }) => (
                <Pressable
                  key={index}
                  onPress={() => handleNoteOnPress(item)}
                  onLongPress={() => handleNoteOnLongPress(item)}
                >
                  <NoteBox
                    key={item.noteId}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    // noteId={item.noteId}
                    isSelected={selectedNotes.includes(item.noteId)}
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
      </View>
      <StatusBar backgroundColor="taransparent" />
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
