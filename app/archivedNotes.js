import React, { useContext, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SecondaryTopBar from "../components/SecondaryTopBar";
import LeftDrawer from "../components/LeftDrawer";
import BottomBar from "../components/BottomBar";
import { ThemeContext } from "../context/ThemeContext";

const archivedNotes = () => {
  const { autoTheme } = useContext(ThemeContext);

  const [isFullWidth, setIsFullWidth] = useState(false);

  const themeContainerStyle =
    autoTheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <LeftDrawer>
      <SafeAreaView style={[styles.container, themeContainerStyle]}>
        <SecondaryTopBar
          barTitle="Archive"
          isFullWidth={isFullWidth}
          setIsFullWidth={setIsFullWidth}
        />
        <View style={styles.noNotesWrapper}>
          <Ionicons
            name="archive-outline"
            size={120}
            color={autoTheme === "light" ? "#ffc954" : "#fff"}
            style={{ marginBottom: 16 }}
          />
          <Text
            style={
              autoTheme === "light" ? { color: "#000" } : { color: "#fff" }
            }
          >
            Your Archived notes appear here
          </Text>
        </View>
        <BottomBar />
      </SafeAreaView>
    </LeftDrawer>
  );
};

export default archivedNotes;

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
