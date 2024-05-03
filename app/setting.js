import React, { useContext, useState } from "react";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const setting = () => {
  const { autoTheme } = useContext(ThemeContext);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeContainerStyle =
  autoTheme === "light" ? styles.lightContainer : styles.darkContainer;

  const themeTextStyle =
  autoTheme === "light" ? styles.lightText : styles.darkText;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Text style={[{ fontSize: 26 }, themeTextStyle]}>Display options</Text>
      <View>
        <Pressable
          style={styles.toggleListWrapper}
          onPress={() => setIsDarkMode((prev) => !prev)}
        >
          <Text style={[styles.toggleBtnItem, themeTextStyle]}>Dark Theme</Text>
          <Switch style={styles.toggleBtnItem} value={isDarkMode} onValueChange={setIsDarkMode} />
        </Pressable>
      </View>
    </View>
  );
};

export default setting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    lightContainer: {
      backgroundColor: "#e9f1f7",
    },
    darkContainer: {
      backgroundColor: "#12121a",
    },
    lightText:{
      color: "#000",
    },
    darkText:{
      color: "#fff",
    },
    toggleListWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    toggleBtnItem: {
        fontSize: 16,
    }
});
