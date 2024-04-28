import { router } from "expo-router";
import React, { useContext } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { NoteContext } from "../context/NoteContext";
import uuid from 'react-native-uuid';

const AddNoteBtn = () => {

  const { setTitle, setDescription, setCurrentNote, setNoteId } = useContext(NoteContext)

  const AddingNote = () => {
    router.push("/addNote");
    setTitle("")
    setDescription("")
    setNoteId(uuid.v4())
    setCurrentNote(null)
  };

  return (
    <Pressable onPress={() => AddingNote()} style={styles.addNoteWrapper}>
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
});

export default AddNoteBtn;
