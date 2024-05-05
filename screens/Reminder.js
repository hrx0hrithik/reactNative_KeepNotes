import React, { useContext, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SecondaryTopBar from "../components/SecondaryTopBar";
import BottomBar from "../components/BottomBar";
// import LeftDrawer from "../components/LeftDrawer";
import { ThemeContext } from "../context/ThemeContext";

const Reminder = () => {
  const { autoTheme } = useContext(ThemeContext);

  const [isFullWidth, setIsFullWidth] = useState(false);

  const themeContainerStyle =
    autoTheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    // <LeftDrawer>
      <SafeAreaView style={[styles.container, themeContainerStyle]}>
        <SecondaryTopBar
          barTitle="Reminders"
          isFullWidth={isFullWidth}
          setIsFullWidth={setIsFullWidth}
        />
        <View style={styles.noNotesWrapper}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={120}
            color={autoTheme === "light" ? "#ffc954" : "#fff"}
            style={{ marginBottom: 16 }}
          />
          <Text
            style={
              autoTheme === "light" ? { color: "#000" } : { color: "#fff" }
            }
          >
            Notes with upcoming reminder appear here
          </Text>
        </View>
        <BottomBar />
      </SafeAreaView>
    // </LeftDrawer>
  );
};

export default Reminder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
