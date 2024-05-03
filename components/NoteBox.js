import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const NoteBox = ({ title, description }) => {
  const { autoTheme } = useContext(ThemeContext);

  const noteWrapperTheme =
  autoTheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.noteWrapper, noteWrapperTheme]}>
      <Text style={[styles.noteTitle, noteWrapperTheme]}>{title}</Text>
      <Text numberOfLines={10} style={[styles.noteDesc, noteWrapperTheme]}>
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
    backgroundColor: "#fff",
    borderColor: "#ccc",
  },
  noteTitle: {
    color: "#000",
    fontWeight: "600",
    marginVertical: 4,
    fontSize: 18,
  },
  noteDesc: {
    color: "#777",
    marginVertical: 4,
    fontSize: 14,
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

export default NoteBox;
