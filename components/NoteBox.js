import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const NoteBox = ({ title, description, noteId }) => {
  const selectNoteBox = () => {
    
  }

  return (
    <View style={styles.noteWrapper}>
      <Text style={styles.noteTitle}>{title}</Text>
      <Text numberOfLines={10} style={styles.noteDesc}>
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
    fontSize: 16,
  },
  noteDesc: {
    color: "#777",
    marginVertical: 4,
    fontSize: 14,
  },
});

export default NoteBox;
