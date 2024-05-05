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
import { ThemeContext } from "../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import {
  darkBarBackground,
  darkThemeBackground,
  darkThemeIcon,
  darkThemeText,
  lightBarBackground,
  lightThemeBackground,
  lightThemeIcon,
  lightThemeText,
} from "../utility/themes";
import { formattedDate, formattedTime } from "../utility/dates";

const InputBottomBar = () => {
  const { deleteNote, currentNote } = useContext(NoteContext);
  const { autoTheme } = useContext(ThemeContext);

  const { showActionSheetWithOptions } = useActionSheet();
  const navigation = useNavigation();

  let editDate = null;
  let editTime = null;
  const currentDate = formattedDate;

  if (!currentNote) {
    editDate = formattedDate;
    editTime = formattedTime;
  } else {
    const date = currentNote.editedAt;
    let newDate = date.split(",");
    editDate = newDate[0];
    editTime = newDate[1];
  }

  const backgroundTheme =
    autoTheme === "light" ? lightThemeBackground : darkThemeBackground;
  const textThemeColor =
    autoTheme === "light" ? lightThemeText.color : darkThemeText.color;
  const bottomBarWrapperTheme =
    autoTheme === "light" ? lightBarBackground : darkBarBackground;
  const iconThemeColor =
    autoTheme === "light" ? lightThemeIcon.color : darkThemeIcon.color;

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
        containerStyle: backgroundTheme,
        tintColor: textThemeColor,
        cancelButtonIndex,
        icons: [
          <AntDesign name="delete" size={20} color={textThemeColor} />,
          <MaterialIcons
            name="content-copy"
            size={20}
            color={textThemeColor}
          />,
          <Ionicons
            name="share-social-outline"
            size={20}
            color={textThemeColor}
          />,
          <MaterialIcons
            name="person-add-alt"
            size={20}
            color={textThemeColor}
          />,
          <MaterialIcons
            name="label-outline"
            size={20}
            color={textThemeColor}
          />,
          <MaterialIcons
            name="help-outline"
            size={20}
            color={textThemeColor}
          />,
        ],
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
            if (!currentNote) {
              navigation.navigate("/");
            } else {
              deleteNote(currentNote.noteId);
              navigation.navigate("/");
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
        containerStyle: backgroundTheme,
        tintColor: textThemeColor,
        cancelButtonIndex,
        icons: [
          <MaterialCommunityIcons
            name="camera-outline"
            size={22}
            color={textThemeColor}
          />,
          <MaterialCommunityIcons
            name="image-outline"
            size={22}
            color={textThemeColor}
          />,
          <Ionicons name="brush-sharp" size={22} color={textThemeColor} />,
          <Feather name="mic" size={22} color={textThemeColor} />,
          <AntDesign name="checksquareo" size={22} color={textThemeColor} />,
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

  const InputBottomColorPaletMenu = () => {
    Keyboard.dismiss();
    showActionSheetWithOptions(props);
  };

  return (
    <View style={[styles.bottomBarWrapper, bottomBarWrapperTheme]}>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={InputBottomAddNoteElementMenu}>
          <Octicons
            style={styles.leftBottomBtn}
            name="diff-added"
            size={22}
            color={iconThemeColor}
          />
        </Pressable>
        <Pressable onPress={InputBottomColorPaletMenu}>
          <MaterialCommunityIcons
            style={styles.leftBottomBtn}
            name="palette-outline"
            size={22}
            color={iconThemeColor}
          />
        </Pressable>
        <Foundation
          style={styles.leftBottomBtn}
          name="text-color"
          size={22}
          color={iconThemeColor}
        />
        <Text style={styles.editedText}>
          Edited {editDate === currentDate ? editTime : editDate}
        </Text>
      </View>
      <Pressable
        onPress={InputBottomThreeDotMenu}
        style={{ padding: 4, marginRight: 6 }}
      >
        <Entypo name="dots-three-vertical" size={18} color={iconThemeColor} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBarWrapper: {
    position: "absolute",
    bottom: 0,
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
  editedText: {
    fontSize: 12,
    marginLeft: 8,
    color: "#999",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default InputBottomBar;
