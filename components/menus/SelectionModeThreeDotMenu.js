import { Keyboard, StyleSheet, Text } from "react-native";
import React, { useContext } from "react";

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { Entypo } from "@expo/vector-icons";
import {
  darkBarBackground,
  darkThemeText,
  lightBarBackground,
  lightThemeText,
} from "../../utility/themes";
import { NoteContext } from "../../context/NoteContext";

const SelectionModeThreeDotMenu = ({ autoTheme, setSelectionMode }) => {

  const { deleteSelectedNotes } = useContext(NoteContext)

  const backgroundThemeColor =
    autoTheme === "light"
      ? lightBarBackground.backgroundColor
      : darkBarBackground.backgroundColor;
  const textThemeColor = autoTheme === "light" ? lightThemeText.color : darkThemeText.color;

  const optionsStyles = {
    optionsContainer: {
      backgroundColor: backgroundThemeColor,
      padding: 5,
    },
    optionsWrapper: {
      margin: 5,
    },
    optionWrapper: {
      flexDirection: "row",
      padding: 10,
    },
    optionTouchable: {
      activeOpacity: 70,
    },
    optionText: {
        color: textThemeColor
    },
  };

  const deleteOnSelect = () => {
    setSelectionMode(false);
    deleteSelectedNotes()
  }

  return (
    <Menu>
      <MenuTrigger
        customStyles={{
          triggerWrapper: {
            marginTop: 2,
            padding: 2,
          },
        }}
      >
        <Entypo name="dots-three-vertical" size={20} color={textThemeColor} />
      </MenuTrigger>
      <MenuOptions customStyles={optionsStyles}>
        <MenuOption text="Archive" />
        <MenuOption text="Delete" onSelect={() => deleteOnSelect()}/>
        <MenuOption text="Make a copy" />
        <MenuOption text="Send" />
        <MenuOption text="Copy to Google Docs" />

      </MenuOptions>
    </Menu>
  );
};

export default SelectionModeThreeDotMenu;

const styles = StyleSheet.create({});
