import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import AddNoteBtn from "./AddNoteBtn";

const BottomBar = () => {
  return (
    <View style={styles.bottomBar}>
      <View style={styles.bottomMenuWrapper}>
        <AntDesign name="checksquareo" size={24} color="black" />
        <Ionicons name="brush-sharp" size={24} color="black" />
        <Feather name="mic" size={24} color="black" />
        <AntDesign name="picture" size={24} color="black" />
      </View>
      <AddNoteBtn />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",
    bottom: 0,
    height: 52,
    backgroundColor: "#e9f1f7",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 4,
    alignSelf: "stretch",
  },
  bottomMenuWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
  },
});

export default BottomBar;
