import React, { useContext } from "react";
import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import {
  Octicons,
  Entypo,
  AntDesign,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { NoteContext } from "../context/NoteContext";
import { router } from "expo-router";

const InputBottomBar = () => {
  const { deleteNote, currentNote } = useContext(NoteContext);
  const { showActionSheetWithOptions } = useActionSheet();

  const onPressInputBottomMenu = () => {
    Keyboard.dismiss();
    const options = [
      "Delete",
      "Make a copy",
      "Send",
      "Collaborator",
      "Labels",
      "Help & feedback",
    ];
    const cancelButtonIndex = -1;

    showActionSheetWithOptions(
      {
        options,
        containerStyle: {
          backgroundColor: "#e9f1f7",
        },
        cancelButtonIndex,
        icons: [
          <AntDesign name="delete" size={20} color="black" />,
          <MaterialIcons name="content-copy" size={20} color="black" />,
          <Ionicons name="share-social-outline" size={20} color="black" />,
          <MaterialIcons name="person-add-alt" size={20} color="black" />,
          <MaterialIcons name="label-outline" size={20} color="black" />,
          <MaterialIcons name="help-outline" size={20} color="black" />,
        ],
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
            if(!currentNote){
              router.navigate("/")
            }else{
            deleteNote(currentNote.noteId);
            router.navigate("/")
            }
            break;
          case 1:
            console.log("Copy menu");
            break;
          case 2:
            console.log("Send menu");
            break;
          case 3:
            console.log("Collab menu");
            break;
          case 4:
            console.log("Lables menu");
            break;
          case 5:
            console.log("Help");
            break;
        }
      }
    );
  };
  return (
    <View style={styles.bottomBarWrapper}>
      <View style={{ flexDirection: "row" }}>
        <Octicons
          style={styles.leftBottomBtn}
          name="diff-added"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons
          style={styles.leftBottomBtn}
          name="palette-outline"
          size={20}
          color="black"
        />
        <Foundation
          style={styles.leftBottomBtn}
          name="text-color"
          size={20}
          color="black"
        />
        <Text style={styles.leftBottomBtn}>Edited 9:58 pm</Text>
      </View>
      <Pressable onPress={onPressInputBottomMenu} style={{ padding: 6 }}>
        <Entypo name="dots-three-vertical" size={18} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBarWrapper: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#e9f1f7",
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 4,
  },
  leftBottomBtn: {
    marginHorizontal: 6,
    padding: 4,
  },
});

export default InputBottomBar;
