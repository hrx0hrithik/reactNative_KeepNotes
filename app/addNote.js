import React, { useContext, useRef } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import TopBar from "../components/TopBar";
import InputBottomBar from "../components/InputBottomBar";
import { NoteContext } from "../context/NoteContext";
import { SafeAreaView } from "react-native-safe-area-context";

const addingNote = () => {
  const ref_input2 = useRef();

  const { currentNote } = useContext(NoteContext);

  return (
    <>
      <SafeAreaView style={styles.addingNoteWrapper}>
        <TopBar />
        <ScrollView style={styles.noteInputWrapper}>
          <TextInput
            style={styles.noteTitle}
            autoCapitalize="sentences"
            placeholder="Title"
            enterKeyHint="next"
            maxLength={100}
            value={currentNote ? currentNote.title : ""}
            onSubmitEditing={() => ref_input2.current.focus()}
            blurOnSubmit={false}
          />
          <TextInput
            ref={ref_input2}
            editable
            autoFocus
            value={currentNote ? currentNote.description : ""}
            autoCapitalize="sentences"
            enterKeyHint="enter"
            multiline
            maxLength={20000}
            style={styles.noteDesc}
            placeholder="Note"
          />
        </ScrollView>
        <KeyboardAvoidingView />
        <InputBottomBar />
      </SafeAreaView>
      <StatusBar backgroundColor={"#e9f1f7"} />
    </>
  );
};

const styles = StyleSheet.create({
  addingNoteWrapper: {
    height: "100%",
  },
  noteInputWrapper: {
    marginTop: 8,
    marginHorizontal: 20,
    marginBottom: 50,
  },
  noteTitle: {
    fontSize: 24,
    marginVertical: 6,
  },
  noteDesc: {
    fontSize: 16,
    marginTop: 4,
  },
});

export default addingNote;
