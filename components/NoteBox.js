import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const NoteBox = ({ title, description }) => {
  const { autoTheme } = useContext(ThemeContext);

  const noteWrapperTheme =
    autoTheme === "light" ? styles.lightContainer : styles.darkContainer;
  const noteTitleTheme = { color: autoTheme === "light" ? "#000" : "#fff" };
  const noteDescTheme = { color: autoTheme === "light" ? "#777" : "#bbb" };

  return (
    <View style={[styles.noteWrapper, noteWrapperTheme]}>
      <Text style={[styles.noteTitle, noteTitleTheme]}>{title}</Text>
      <Text numberOfLines={10} style={[styles.noteDesc, noteDescTheme]}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noteWrapper: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderColor: "#aaa",
  },
  noteTitle: {
    fontWeight: "600",
    marginVertical: 4,
    fontSize: 16,
  },
  noteDesc: {
    marginVertical: 4,
    fontSize: 14,
  },
  lightContainer: {
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#12121a",
  },
});

export default NoteBox;
