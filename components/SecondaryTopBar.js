import React, { useContext } from "react";
import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import {
  Ionicons,
  AntDesign,
  Feather,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { darkThemeBackground, darkThemeIcon, darkThemeText, lightThemeBackground, lightThemeIcon, lightThemeText } from "../utility/themes";

const SecondaryTopBar = ({
  barTitle,
  isFullWidth,
  setIsFullWidth,
  threeDotMenu,
}) => {
  const { autoTheme } = useContext(ThemeContext);

  const navigation = useNavigation()

  const searchBarWrapperTheme =
  autoTheme === "light" ? lightThemeBackground : darkThemeBackground;
  const barIconColor =
  autoTheme === "light" ? lightThemeIcon.color : darkThemeIcon.color;
  const barTextTheme = autoTheme === "light" ? lightThemeText : darkThemeText

  const toggleNotesView = () => {
    setIsFullWidth((prev) => !prev);
  };

  return (
    <View style={[styles.searchBarWrapper, searchBarWrapperTheme]}>
      <View style={styles.leftSearchIconWrapper}>
        <Pressable style={{ padding: 2 }} onPress={() => navigation.openDrawer() }>
          <Ionicons
            style={styles.leftSearchIcon}
            name="menu-sharp"
            size={24}
            color={barIconColor}
          />
        </Pressable>
        <Text style={[{ fontSize: 20, paddingTop: 2, marginLeft: 20 }, barTextTheme]}>
          {barTitle}
        </Text>
      </View>
      {threeDotMenu ? (
        <View style={styles.rightSearchIconWrapper}>
          <Pressable>
            <Entypo
              style={styles.rightSearchIcon}
              name="dots-three-vertical"
              size={20}
              color={barIconColor}
            />
          </Pressable>
        </View>
      ) : (
        <View style={styles.rightSearchIconWrapper}>
          <Pressable>
            <MaterialIcons
              style={styles.rightSearchIcon}
              name="search"
              size={24}
              color={barIconColor}
            />
          </Pressable>
          {isFullWidth ? (
            <Pressable onPress={() => toggleNotesView()}>
              <AntDesign
                style={styles.rightSearchIcon}
                name="appstore-o"
                size={24}
                color={barIconColor}
              />
            </Pressable>
          ) : (
            <Pressable onPress={() => toggleNotesView()}>
              <Feather
                style={styles.rightSearchIcon}
                name="server"
                size={24}
                color={barIconColor}
              />
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
};

export default SecondaryTopBar;

const styles = StyleSheet.create({
  searchBarWrapper: {
    paddingTop: 10,
    paddingBottom: 14,
    paddingHorizontal: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSearchIconWrapper: {
    flexDirection: "row",
  },
  rightSearchIconWrapper: {
    flexDirection: "row",
    marginHorizontal: 8,
  },
  leftSearchIcon: {
    marginHorizontal: 4,
    padding: 2,
  },
  rightSearchIcon: {
    marginHorizontal: 4,
    padding: 2,
  },
});
