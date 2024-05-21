import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  darkBarBackground,
  darkThemeIcon,
  darkThemeText,
  lightBarBackground,
  lightThemeIcon,
  lightThemeText,
} from "../utility/themes";
import SelectionModeThreeDotMenu from "./menus/SelectionModeThreeDotMenu";

const SelectionModeTopBar = ({ length, setSelectionMode, setSelectedNotes }) => {
  const { autoTheme } = useContext(ThemeContext);

  const searchBarWrapperTheme =
    autoTheme === "light" ? lightBarBackground : darkBarBackground;
  const barIconColor =
    autoTheme === "light" ? lightThemeIcon.color : darkThemeIcon.color;
  const barTextTheme = autoTheme === "light" ? lightThemeText : darkThemeText;

  const closeSelectionMode = () => {
    setSelectionMode(false)
    setSelectedNotes([])
  }

  return (
    <View style={[styles.searchBarWrapper, searchBarWrapperTheme]}>
      <View style={styles.leftSearchIconWrapper}>
        <Pressable
          style={{ padding: 2 }}
          onPress={() => closeSelectionMode()}
        >
          <AntDesign
            style={styles.leftSearchIcon}
            name="close"
            size={24}
            color={barIconColor}
          />
        </Pressable>
        <Text
          style={[
            { fontSize: 20, paddingTop: 2, marginLeft: 20 },
            barTextTheme,
          ]}
        >
          {length}
        </Text>
      </View>
      <View style={styles.rightIconWrapper}>
        <Pressable>
        <MaterialCommunityIcons
          style={styles.rightSearchIcon}
          name="pin-outline"
          size={24}
          color={barIconColor}
        />
        </Pressable>
        <Pressable>
        <MaterialCommunityIcons
          style={styles.rightSearchIcon}
          name="bell-plus-outline"
          size={24}
          color={barIconColor}
        />
        </Pressable>
        <Pressable>
          <MaterialCommunityIcons
            style={styles.rightSearchIcon}
            name="palette-outline"
            size={24}
            color={barIconColor}
          />
        </Pressable>
        <Pressable>
          <MaterialIcons
            name="label-outline"
            style={styles.rightSearchIcon}
            size={24}
            color={barIconColor}
          />
        </Pressable>
        {/* <Pressable>
          <Entypo
            style={styles.rightSearchIcon}
            name="dots-three-vertical"
            size={20}
            color={barIconColor}
          />
        </Pressable> */}
        <SelectionModeThreeDotMenu autoTheme={autoTheme} setSelectionMode={setSelectionMode} />
      </View>
    </View>
  );
};

export default SelectionModeTopBar;

const styles = StyleSheet.create({
  searchBarWrapper: {
    paddingTop: 16,
    paddingBottom: 18,
    paddingHorizontal: 2,
    marginBottom: 20,
    marginTop: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSearchIconWrapper: {
    flexDirection: "row",
  },
  rightIconWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
    minWidth: 200,
    maxWidth: "40%"
  },
  leftSearchIcon: {
    marginHorizontal: 4,
    padding: 2,
  },
  rightSearchIcon: {
    marginHorizontal: 2,
    padding: 2,
  },
});
