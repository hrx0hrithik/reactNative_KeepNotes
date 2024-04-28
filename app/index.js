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
import LeftDrawer from "../components/LeftDrawer";

import { NoteContext } from "../context/NoteContext";

export default function App() {
  const [isFullWidth, setisFullWidth] = useState(false);

  const { allNotes, noteId, deleteNote, editNote } = useContext(NoteContext);

  useEffect(() => {
    const recentNote = allNotes.find((n) => n.noteId === noteId);
    // console.log(recentNote, "recent note");
    // console.log(recentNote?.title,"recent note title")
    // console.log(recentNote?.description,"recent note desc")

    if (recentNote) {
      const isTitleEmpty =
        !recentNote.title || recentNote.title.trim().length === 0;
      const isDescriptionEmpty =
        !recentNote.description || recentNote.description.trim().length === 0;

      // console.log("Is title empty?", isTitleEmpty);
      // console.log("Is description empty?", isDescriptionEmpty);

      if (isTitleEmpty && isDescriptionEmpty) {
        ToastAndroid.show("Empty note discarded", ToastAndroid.LONG);
        deleteNote(noteId);
      }
    }
  }, [allNotes]);

  return (
    <>
      <LeftDrawer>
        <SafeAreaView style={styles.container}>
          <SearchBar
            isFullWidth={isFullWidth}
            setisFullWidth={setisFullWidth}
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
                  <Pressable key={index} onPress={() => editNote(item)}>
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
                color="#ffc954"
                style={{ marginBottom: 16 }}
              />
              <Text>Notes you add appear here</Text>
            </View>
          )}
          <BottomBar />
        </SafeAreaView>
      </LeftDrawer>
      <StatusBar backgroundColor={"#e9f1f7"} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: 0,
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
    height: "80%",
  },
});
