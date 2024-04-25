import { useContext, useState } from "react";
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SimpleGrid } from "react-native-super-grid";
import SearchBar from "../components/SearchBar";
import NoteBox from "../components/NoteBox";
import BottomBar from "../components/BottomBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons';
import { NoteContext } from "../context/NoteContext";
import { router } from "expo-router";

export default function App() {
  const [isFullWidth, setisFullWidth] = useState(false);

  const { allNotes, setCurrentNote } = useContext(NoteContext);

  const editNote = (noteId) => {
    setCurrentNote(allNotes[noteId]);
    router.push("/addNote");
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <SearchBar isFullWidth={isFullWidth} setisFullWidth={setisFullWidth} />
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
                <Pressable key={index} onPress={() => editNote(index)}>
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
            <MaterialIcons name="lightbulb-outline" size={120} color="#ffc954" style={{marginBottom: 16}} />
            <Text>Notes you add appear here</Text>
          </View>
        )}
        <BottomBar />
      </SafeAreaView>
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
  }
});
