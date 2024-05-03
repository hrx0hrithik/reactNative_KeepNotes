import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import AddNoteBtn from "./AddNoteBtn";
import { ThemeContext } from "../context/ThemeContext";

const BottomBar = ({ setShowModal }) => {
  const { autoTheme } = useContext(ThemeContext);

  const bottomBarTheme =
  autoTheme === "light" ? styles.lightTheme : styles.darkTheme;

  return (
    <View style={[styles.bottomBar, bottomBarTheme]}>
      <View style={styles.bottomIconsWrapper}>
        <Pressable
          style={styles.bottomIconBtn}
          onPress={() => router.push("/newRoute")}
        >
          <AntDesign
            style={styles.bottomBarIcons}
            name="checksquareo"
            size={24}
            color={autoTheme === "light" ? "#000" : "#fff"}
          />
        </Pressable>
        <Pressable style={styles.bottomIconBtn}>
          <Ionicons
            style={styles.bottomBarIcons}
            name="brush-sharp"
            size={24}
            color={autoTheme === "light" ? "#000" : "#fff"}
          />
        </Pressable>
        <Pressable style={styles.bottomIconBtn}>
          <Feather
            style={styles.bottomBarIcons}
            name="mic"
            size={24}
            color={autoTheme === "light" ? "#000" : "#fff"}
          />
        </Pressable>
        <Pressable style={styles.bottomIconBtn}>
          <AntDesign
            style={styles.bottomBarIcons}
            name="picture"
            size={24}
            color={autoTheme === "light" ? "#000" : "#fff"}
          />
        </Pressable>
      </View>
      <AddNoteBtn setShowModal={setShowModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",
    bottom: 0,
    height: 52,
    width: "100%",
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  lightTheme: {
    backgroundColor: "#e9f1f7",
  },
  darkTheme: {
    backgroundColor: "#20212e",
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
