import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
// import { router } from "expo-router";
import { NoteContext } from "../context/NoteContext";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";

const TopBar = () => {
  const { savingNote } = useContext(NoteContext);
  const { autoTheme } = useContext(ThemeContext);

  const navigation = useNavigation()

  const handlingBack = () => {
    savingNote();
    navigation.goBack()
  };

  const topBarWrapperTheme =
    autoTheme === "light" ? styles.lightTheme : styles.darkTheme;

  return (
    <View style={[styles.topBarWrapper, topBarWrapperTheme]}>
      <Pressable onPress={() => handlingBack()} style={styles.backBtnWrapper}>
        <AntDesign
          name="arrowleft"
          size={24}
          color={autoTheme === "light" ? "#000" : "#fff"}
        />
      </Pressable>
      <View style={styles.pinAccessWrapper}>
        <MaterialCommunityIcons
          style={styles.pinAccess}
          name="pin-outline"
          size={24}
          color={autoTheme === "light" ? "#000" : "#fff"}
        />
        <MaterialCommunityIcons
          style={styles.pinAccess}
          name="bell-plus-outline"
          size={24}
          color={autoTheme === "light" ? "#000" : "#fff"}
        />
        <Ionicons
          style={styles.pinAccess}
          name="archive-outline"
          size={24}
          color={autoTheme === "light" ? "#000" : "#fff"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarWrapper: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 18,
    marginBottom: 8,
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  lightTheme: {
    backgroundColor: "#e9f1f7",
  },
  darkTheme: {
    backgroundColor: "#12121a",
  },
  backBtnWrapper: {
    padding: 4,
  },
  pinAccessWrapper: {
    flexDirection: "row",
    padding: 2,
  },
  pinAccess: {
    marginHorizontal: 6,
    padding: 2,
  },
});

export default TopBar;
