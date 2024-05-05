import React, { useContext } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { NoteContext } from "../context/NoteContext";
import uuid from "react-native-uuid";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { darkBarBackground, lightBarBackground } from "../utility/themes";

const AddNoteBtn = () => {
  const navigation = useNavigation();
  const { setTitle, setDescription, setCurrentNote, setNoteId } =
    useContext(NoteContext);
  const { autoTheme } = useContext(ThemeContext);

  const AddingNote = () => {
    navigation.push("AddNote");
    setTitle("");
    setDescription("");
    setNoteId(uuid.v4());
    setCurrentNote(null);
  };

  const addNoteWrapperTheme = {
    backgroundColor:
      autoTheme === "light"
        ? lightBarBackground.backgroundColor
        : darkBarBackground.backgroundColor,
  };

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
