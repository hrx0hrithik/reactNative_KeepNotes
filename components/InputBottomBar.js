import React, { useContext } from "react";
import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import {
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";
import { NoteContext } from "../context/NoteContext";
import { ThemeContext } from "../context/ThemeContext";
import {
  darkBarBackground,
  darkThemeIcon,
  lightBarBackground,
  lightThemeIcon,
} from "../utility/themes";
import { formattedDate, formattedTime } from "../utility/dates";
import InputThreeDotMenu from "./menus/InputThreeDotMenu";
import InputAddElemMenu from "./menus/InputAddElemMenu";

const InputBottomBar = () => {
  const { deleteNote, currentNote } = useContext(NoteContext);
  const { autoTheme } = useContext(ThemeContext);

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

  const bottomBarWrapperTheme =
    autoTheme === "light" ? lightBarBackground : darkBarBackground;
  const iconThemeColor =
    autoTheme === "light" ? lightThemeIcon.color : darkThemeIcon.color;

  const InputBottomColorPaletMenu = () => {
    Keyboard.dismiss();
    // showActionSheetWithOptions(props);
  };

  return (
    <View style={[styles.bottomBarWrapper, bottomBarWrapperTheme]}>
      <View style={{ flexDirection: "row" }}>
        {/* <Pressable onPress={InputBottomAddNoteElementMenu}>
          <Octicons
            style={styles.leftBottomBtn}
            name="diff-added"
            size={22}
            color={iconThemeColor}
          />
        </Pressable> */}
        <InputAddElemMenu autoTheme={autoTheme} />
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
        <Text
          style={[
            styles.editedText,
            { color: autoTheme === "light" ? "#444" : "#ccc" },
          ]}
        >
          Edited {editDate === currentDate ? editTime : editDate}
        </Text>
      </View>
      {/* <Pressable
        onPress={InputBottomThreeDotMenu}
        style={{ padding: 4, marginRight: 6 }}
      >
        <Entypo name="dots-three-vertical" size={18} color={iconThemeColor} />
      </Pressable> */}
      <InputThreeDotMenu />
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
    fontSize: 14,
    marginLeft: 12,
    color: "#000",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default InputBottomBar;
