import React, { useContext, useEffect, useRef } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
} from "react-native";
import TopBar from "../components/TopBar";
import InputBottomBar from "../components/InputBottomBar";
import { NoteContext } from "../context/NoteContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "../context/ThemeContext";
import { AddnoteModalContext } from "../context/AddnoteModalContext";

const AddNote = () => {
  const ref_input2 = useRef();

  const { savingNote, setDescription, setTitle, title, description } =
    useContext(NoteContext);
  const { autoTheme } = useContext(ThemeContext);
  const { openModal, setOpenModal } = useContext(AddnoteModalContext);

  const themeContainerStyle =
    autoTheme === "light" ? styles.lightContainer : styles.darkContainer; 

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const handlingBack = () => {
    savingNote();
    setOpenModal(false);
  };

  return (
    <>
      {/* <Modal
        visible={openModal}
        animationType="fade"
        onRequestClose={handlingBack}
        style={{ zIndex: 2 }}
      > */}
        <SafeAreaView style={[styles.addingNoteWrapper, themeContainerStyle]}>
          <TopBar />
          <ScrollView style={styles.noteInputWrapper}>
            <TextInput
              style={[styles.noteTitle, themeContainerStyle]}
              autoCapitalize="sentences"
              placeholder="Title"
              placeholderTextColor={autoTheme === "light" ? "#000" : "#fff"}
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
              style={[styles.noteDesc, themeContainerStyle]}
              placeholder="Note"
              placeholderTextColor={autoTheme === "light" ? "#000" : "#fff"}
            />
          </ScrollView>
          <KeyboardAvoidingView />
          <InputBottomBar />
        </SafeAreaView>
      {/* </Modal> */}
      <StatusBar
        backgroundColor={autoTheme === "light" ? "#e9f1f7" : "#12121a"}
      />
    </>
  );
};
export default AddNote;

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
  lightContainer: {
    backgroundColor: "#fff",
    color: "#000",
  },
  darkContainer: {
    backgroundColor: "#12121a",
    color: "#fff",
  },
});
