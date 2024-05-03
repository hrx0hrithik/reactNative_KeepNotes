import { router } from "expo-router";
import React, { useContext } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { NoteContext } from "../context/NoteContext";
import uuid from "react-native-uuid";
import { ThemeContext } from "../context/ThemeContext";
import { AddnoteModalContext } from "../context/AddnoteModalContext";

const AddNoteBtn = () => {
  const { setTitle, setDescription, setCurrentNote, setNoteId } =
    useContext(NoteContext);
  const { autoTheme } = useContext(ThemeContext);
  const { openModal, setOpenModal } = useContext(AddnoteModalContext);

  const AddingNote = () => {
    router.push("/addNote");
    setOpenModal(true)
    setTitle("");
    setDescription("");
    setNoteId(uuid.v4());
    setCurrentNote(null);
  };

  const addNoteWrapperTheme =
    autoTheme === "light" ? styles.lightTheme : styles.darkTheme;

  return (
    <Pressable
      onPress={() => AddingNote()}
      style={[styles.addNoteWrapper, addNoteWrapperTheme]}
    >
      <View>
        <Image
          source={require("../assets/plus-icon.png")}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  addNoteWrapper: {
    backgroundColor: "#e9f1f7",
    width: 60,
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 60,
    right: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  lightTheme: {
    backgroundColor: "#e9f1f7",
  },
  darkTheme: {
    backgroundColor: "#20212e",
  },
});

export default AddNoteBtn;
