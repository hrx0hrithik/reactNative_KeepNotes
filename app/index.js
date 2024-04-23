import { useContext, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { SimpleGrid } from "react-native-super-grid";
import SearchBar from "../components/SearchBar";
import NoteBox from "../components/NoteBox";
import BottomBar from "../components/BottomBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { NoteContext } from "../context/NoteContext";
import { router } from "expo-router";

export default function App() {
  const [isFullWidth, setisFullWidth] = useState(false);

  const { allNotes, currentNote, setCurrentNote } = useContext(NoteContext);

  const editNote = (noteId) => {
    setCurrentNote(allNotes[noteId]);
    router.push("/addNote");
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.container}> */}
        <SearchBar isFullWidth={isFullWidth} setisFullWidth={setisFullWidth} />
        <ScrollView style={styles.scrollViewNotes}>
          <SimpleGrid
            style={styles.NoteBoxWrapper}
            itemDimension={isFullWidth ? 500 : 130}
            spacing={6}
            maxItemsPerRow={3}
            data={allNotes}
            keyExtractor={(item) => item.noteId}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => editNote(index)}>
                <NoteBox
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  noteId={item.noteId}
                />
              </Pressable>
            )}
          />
        </ScrollView>
        <BottomBar />
      </SafeAreaView>
      {/* </View> */}
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
});
