import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import AddNoteBtn from "./AddNoteBtn";

const BottomBar = () => {
  return (
    <View style={styles.bottomBar}>
      <View style={styles.bottomIconsWrapper}>
        <Pressable
          style={styles.bottomIconBtn}
          onPress={() => router.push("/newRoute")}
        >
          <AntDesign
            style={styles.bottomBarIcons}
            name="checksquareo"
            size={24}
            color="black"
          />
        </Pressable>
        <Pressable style={styles.bottomIconBtn}>
          <Ionicons
            style={styles.bottomBarIcons}
            name="brush-sharp"
            size={24}
            color="black"
          />
        </Pressable>
        <Pressable style={styles.bottomIconBtn}>
          <Feather
            style={styles.bottomBarIcons}
            name="mic"
            size={24}
            color="black"
          />
        </Pressable>
        <Pressable style={styles.bottomIconBtn}>
          <AntDesign
            style={styles.bottomBarIcons}
            name="picture"
            size={24}
            color="black"
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
    height: 52,
    backgroundColor: "#e9f1f7",
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
