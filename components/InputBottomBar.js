import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  Octicons,
  Entypo,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";

const InputBottomBar = () => {
  return (
    <View style={styles.bottomBarWrapper}>
      <View style={{ flexDirection: "row" }}>
        <Octicons
          style={styles.leftBottomBtn}
          name="diff-added"
          size={20}
          color="black"
        />
        <MaterialCommunityIcons
          style={styles.leftBottomBtn}
          name="palette-outline"
          size={20}
          color="black"
        />
        <Foundation
          style={styles.leftBottomBtn}
          name="text-color"
          size={20}
          color="black"
        />
        <Text style={styles.leftBottomBtn}>Edited 9:58 pm</Text>
      </View>
      <Pressable>
        <Entypo name="dots-three-vertical" size={18} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBarWrapper: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#e9f1f7",
    width: "100%",
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 4,
  },
  leftBottomBtn: {
    marginHorizontal: 6,
    padding: 4,
  },
});

export default InputBottomBar;
