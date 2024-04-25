import React, { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { NoteContext } from "../context/NoteContext";

const TopBar = ({ title, description }) => {
  const [newNote, setNewNote] = useState(null);

  const { allNotes } = useContext(NoteContext);

  useEffect(() => {
    if (title || description) {
      setNewNote({
        title: title,
        description: description,
        noteId: allNotes.length + 1,
      });
    }
  }, [title, description]);

  const savingNewNote = () => {
    newNote && allNotes.unshift(newNote);
    router.navigate("/");
    // console.log(allNotes)
    console.log(newNote);
  };

  return (
    <View style={styles.topBarWrapper}>
      <Pressable onPress={() => savingNewNote()} style={styles.backBtnWrapper}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
      <View style={styles.pinAccessWrapper}>
        <MaterialCommunityIcons
          style={styles.pinAccess}
          name="pin-outline"
          size={24}
          color="black"
        />
        <MaterialCommunityIcons
          style={styles.pinAccess}
          name="bell-plus-outline"
          size={24}
          color="black"
        />
        <Ionicons
          style={styles.pinAccess}
          name="archive-outline"
          size={24}
          color="black"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarWrapper: {
    flexDirection: "row",
    backgroundColor: "#e9f1f7",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 18,
    marginBottom: 8,
    marginHorizontal: 4,
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  backBtnWrapper: {
    padding: 4,
  },
  pinAccessWrapper: {
    flexDirection: "row",
    padding: 2,
  },
  pinAccess: {
    marginHorizontal: 6,
    padding: 2,
  },
});

export default TopBar;
