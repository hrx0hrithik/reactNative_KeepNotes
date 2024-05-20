import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { darkThemeBackground, lightThemeBackground } from "../utility/themes";

const NoteBox = ({ title, description, isSelected }) => {
  const { autoTheme } = useContext(ThemeContext);

  const noteWrapperTheme =
    autoTheme === "light" ? lightThemeBackground : darkThemeBackground;
  const noteTitleTheme = { color: autoTheme === "light" ? "#000" : "#fff" };
  const noteDescTheme = { color: autoTheme === "light" ? "#777" : "#bbb" };
  const noteWrapperBorder = isSelected
    ? {
        borderWidth: 2,
        borderColor: "blue",
      }
    : {
        borderWidth: 1,
        borderColor: "#aaa",
      };

  return (
    <View style={[styles.noteWrapper, noteWrapperTheme, noteWrapperBorder]}>
      <Text style={[styles.noteTitle, noteTitleTheme]}>{title}</Text>
      <Text numberOfLines={10} style={[styles.noteDesc, noteDescTheme]}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noteWrapper: {
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    margin: 5,
    // borderWidth: 1,
    // borderColor: "#aaa",
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
