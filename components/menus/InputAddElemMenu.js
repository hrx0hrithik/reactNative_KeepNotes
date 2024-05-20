import { Keyboard, StyleSheet, Text } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from "react-native-popup-menu";
import {
  darkBarBackground,
  darkThemeIcon,
  darkThemeText,
  lightBarBackground,
  lightThemeIcon,
  lightThemeText,
} from "../../utility/themes";
import {
  Octicons,
  AntDesign,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const InputAddElemMenu = ({ autoTheme }) => {
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
        <Octicons name="diff-added" size={22} color={iconThemeColor} />
      </MenuTrigger>
      <MenuOptions customStyles={optionsStyles}>
        <MenuOption onSelect={() => alert(`Save`)}>
          <MaterialCommunityIcons
            name="camera-outline"
            size={24}
            color={iconThemeColor}
          />
          <Text style={[textTheme, styles.optionText]}>Take photo</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Delete`)}>
          <MaterialCommunityIcons
            name="image-outline"
            size={24}
            color={iconThemeColor}
          />
          <Text style={[textTheme, styles.optionText]}>Add image</Text>
        </MenuOption>
        <MenuOption>
        <Ionicons name="brush-sharp" size={24} color={iconThemeColor} />
          <Text style={[textTheme, styles.optionText]}>Drawing</Text>
        </MenuOption>
        <MenuOption>
        <Feather name="mic" size={24} color={iconThemeColor} />
          <Text style={[textTheme, styles.optionText]}>Recording</Text>
        </MenuOption>
        <MenuOption>
        <AntDesign name="checksquareo" size={24} color={iconThemeColor} />
          <Text style={[textTheme, styles.optionText]}>Tick boxes</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

export default InputAddElemMenu;

const styles = StyleSheet.create({
  optionText: {
    fontSize: 18,
    marginLeft: 10,
  }
});
