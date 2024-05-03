import React, { useContext, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SecondaryTopBar from "../components/SecondaryTopBar";
import LeftDrawer from "../components/LeftDrawer";
import { ThemeContext } from "../context/ThemeContext";

const deletedNotes = () => {
  const { autoTheme } = useContext(ThemeContext);

  const themeContainerStyle =
  autoTheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <LeftDrawer>
    <SafeAreaView style={[styles.container, themeContainerStyle]}>
      <SecondaryTopBar
        barTitle="Deleted"
        threeDotMenu={true}
      />
      <View style={styles.noNotesWrapper}>
      <AntDesign
                name="delete"
          size={120}
          color={autoTheme === "light" ? "#ffc954" : "#fff"}
          style={{ marginBottom: 16 }}
        />
        <Text style={
              autoTheme === "light" ? { color: "#000" } : { color: "#fff" }
            }>No notes in Recycle bin</Text>
      </View>
    </SafeAreaView>
    </LeftDrawer>
  );
};

export default deletedNotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  lightContainer: {
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#12121a",
  },
  noNotesWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
});
