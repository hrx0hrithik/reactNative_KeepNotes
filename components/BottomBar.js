import React, { useContext } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import AddNoteBtn from "./AddNoteBtn";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import {
  darkBarBackground,
  darkThemeIcon,
  lightBarBackground,
  lightThemeIcon,
} from "../utility/themes";

const BottomBar = () => {
  const { autoTheme } = useContext(ThemeContext);
  const navigation = useNavigation();

  const bottomBarTheme =
    autoTheme === "light" ? lightBarBackground : darkBarBackground;
  const barIconsColor =
    autoTheme === "light" ? lightThemeIcon.color : darkThemeIcon.color;

  return (
    <View style={[styles.bottomBar, bottomBarTheme]}>
      <View style={styles.bottomIconsWrapper}>
        <Pressable
          style={styles.bottomIconBtn}
          onPress={() => navigation.push("NewRoute")}
        >
          <AntDesign
            style={styles.bottomBarIcons}
            name="checksquareo"
            size={24}
            color={barIconsColor}
          />
        </Pressable>
        <Pressable style={styles.bottomIconBtn}>
          <Ionicons
            style={styles.bottomBarIcons}
            name="brush-sharp"
            size={24}
            color={barIconsColor}
          />
        </Pressable>
        <Pressable style={styles.bottomIconBtn}>
          <Feather
            style={styles.bottomBarIcons}
            name="mic"
            size={24}
            color={barIconsColor}
          />
        </Pressable>
        <Pressable style={styles.bottomIconBtn}>
          <AntDesign
            style={styles.bottomBarIcons}
            name="picture"
            size={24}
            color={barIconsColor}
          />
        </Pressable>
      </View>
        <AddNoteBtn />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",
    bottom: 0,
    height: 54,
    width: "100%",
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  bottomIconsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    maxWidth: 190,
  },
  bottomBarIcons: {
    fontSize: 22,
  },
  bottomIconBtn: {
    padding: 6,
  },
});

export default BottomBar;
