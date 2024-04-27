import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";

const setting = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26 }}>Display options</Text>
      <View>
        <Pressable
          style={styles.toggleListWrapper}
          onPress={() => setIsDarkMode((prev) => !prev)}
        >
          <Text style={styles.toggleBtnItem}>Theme</Text>
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
        marginTop: 10,
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
