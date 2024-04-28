import React, { useContext } from "react";
import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import {
  Octicons,
  Entypo,
  AntDesign,
  MaterialIcons,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { NoteContext } from "../context/NoteContext";
import { router } from "expo-router";

const InputBottomBar = () => {
  const { deleteNote, currentNote } = useContext(NoteContext);
  const { showActionSheetWithOptions } = useActionSheet();

  let date = null;
  const currentDate = new Date().toLocaleDateString()

  if (!currentNote) {
    date = new Date();
  } else {
    date = currentNote.editedAt;
  }
  const editDate = date.toLocaleDateString();
  const editTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const InputBottomThreeDotMenu = () => {
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
            if (!currentNote) {
              router.navigate("/");
            } else {
              deleteNote(currentNote.noteId);
              router.navigate("/");
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

  const InputBottomAddNoteElementMenu = () => {
    Keyboard.dismiss();
    const options = [
      "Take photo",
      "Add image",
      "Drawing",
      "Recording",
      "Tick boxes",
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
          <MaterialCommunityIcons
            name="camera-outline"
            size={20}
            color="black"
          />,
          <MaterialCommunityIcons
            name="image-outline"
            size={20}
            color="black"
          />,
          <Ionicons name="brush-sharp" size={20} color="black" />,
          <Feather name="mic" size={20} color="black" />,
          <AntDesign name="checksquareo" size={20} color="black" />,
        ],
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
            // Open Camera and add image to note
            break;
          case 1:
            // Open gallery and add image to note
            break;
          case 2:
            // Open a drawing canvas
            break;
          case 3:
            // recording audio as note
            break;
          case 4:
          // give a check list (tick box)
        }
      }
    );
  };

  return (
    <View style={styles.bottomBarWrapper}>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={InputBottomAddNoteElementMenu}>
          <Octicons
            style={styles.leftBottomBtn}
            name="diff-added"
            size={22}
            color="black"
          />
        </Pressable>
        <Pressable>
        <MaterialCommunityIcons
          style={styles.leftBottomBtn}
          name="palette-outline"
          size={22}
          color="black"
        />
        </Pressable>
        <Foundation
          style={styles.leftBottomBtn}
          name="text-color"
          size={22}
          color="black"
        />
        <Text style={styles.leftBottomBtn}>Edited { (editDate === currentDate) ? editTime : editDate}</Text>
      </View>
      <Pressable
        onPress={InputBottomThreeDotMenu}
        style={{ padding: 4, marginRight: 6 }}
      >
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
    paddingHorizontal: 4,
    paddingBottom: 4,
  },
  leftBottomBtn: {
    marginHorizontal: 6,
    padding: 4,
  },
});

export default InputBottomBar;
