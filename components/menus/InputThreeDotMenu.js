import { Keyboard, StyleSheet, Text } from "react-native";
import React from "react";

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from "react-native-popup-menu";
import {
  Entypo,
  AntDesign,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import {
  darkBarBackground,
  darkThemeIcon,
  darkThemeText,
  lightBarBackground,
  lightThemeIcon,
  lightThemeText,
} from "../../utility/themes";
import { useNavigation } from "@react-navigation/native";

const InputThreeDotMenu = ({ autoTheme, currentNote }) => {
  const navigation = useNavigation()
  const iconThemeColor =
    autoTheme === "light" ? lightThemeIcon.color : darkThemeIcon.color;
  const backgroundThemeColor =
    autoTheme === "light"
      ? lightBarBackground.backgroundColor
      : darkBarBackground.backgroundColor;
  const textTheme = autoTheme === "light" ? lightThemeText : darkThemeText;

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
  };

  const handleDeleteNote = () => {
    if (!currentNote) {
      navigation.goBack();
    } else {
      deleteNote(currentNote.noteId);
      navigation.goBack();
    }
  }
  
  return (
    <Menu renderer={renderers.SlideInMenu}>
      <MenuTrigger
        onPress={() => Keyboard.dismiss()}
        customStyles={{
          triggerWrapper: {
            marginHorizontal: 6,
            padding: 4,
          },
        }}
      >
        <Entypo name="dots-three-vertical" size={18} color={iconThemeColor} />
      </MenuTrigger>
      <MenuOptions customStyles={optionsStyles}>
        <MenuOption onSelect={() => handleDeleteNote()}>
          <AntDesign name="delete" size={24} color={iconThemeColor} />
          <Text style={[textTheme, styles.optionText]}>Delete</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Delete`)}>
          <MaterialIcons name="content-copy" size={24} color={iconThemeColor} />
          <Text style={[textTheme, styles.optionText]}>Make a copy</Text>
        </MenuOption>
        <MenuOption>
          <Ionicons
            name="share-social-outline"
            size={24}
            color={iconThemeColor}
          />
          <Text style={[textTheme, styles.optionText]}>Send</Text>
        </MenuOption>
        <MenuOption>
          <MaterialIcons
            name="person-add-alt"
            size={24}
            color={iconThemeColor}
          />
          <Text style={[textTheme, styles.optionText]}>Collaborator</Text>
        </MenuOption>
        <MenuOption>
          <MaterialIcons
            name="label-outline"
            size={24}
            color={iconThemeColor}
          />
          <Text style={[textTheme, styles.optionText]}>Labels</Text>
        </MenuOption>
        <MenuOption>
          <MaterialIcons name="help-outline" size={24} color={iconThemeColor} />
          <Text style={[textTheme, styles.optionText]}>Help & feedback</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

export default InputThreeDotMenu;

const styles = StyleSheet.create({
  optionText: {
    fontSize: 18,
    marginLeft: 10,
  },
});
