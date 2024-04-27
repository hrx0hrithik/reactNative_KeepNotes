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

  const { currentNote, setDescription, setTitle, title, description } =
    useContext(NoteContext);

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };
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
              value={title}
              onChangeText={handleTitleChange}
              onSubmitEditing={() => ref_input2.current.focus()}
              blurOnSubmit={false}
            />
            <TextInput
              ref={ref_input2}
              editable
              autoFocus
              value={description}
              autoCapitalize="sentences"
              enterKeyHint="enter"
              multiline
              textAlignVertical="top"
              numberOfLines={10}
              maxLength={20000}
              onChangeText={handleDescriptionChange}
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
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 50,
  },
  noteTitle: {
    fontSize: 24,
    paddingVertical: 4,
    width: "100%",
  },
  noteDesc: {
    fontSize: 16,
    marginTop: 4,
    paddingVertical: 2,
    width: "100%",
  },
});

export default addingNote;
