import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { darkThemeBackground, lightThemeBackground } from "../utility/themes";

const NoteBox = ({ title, description }) => {
  const { autoTheme } = useContext(ThemeContext);

  const noteWrapperTheme =
    autoTheme === "light" ? lightThemeBackground : darkThemeBackground;
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
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderColor: "#aaa",
    margin: 5,
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

});

export default NoteBox;
