import React, { useContext } from "react";
import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import {
  Ionicons,
  AntDesign,
  Feather,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { DrawerContext } from "../context/DrawerContext";

const SecondaryTopBar = ({
  barTitle,
  isFullWidth,
  setIsFullWidth,
  threeDotMenu,
}) => {
  const { setLeftDrawerOpen } = useContext(DrawerContext);

  const toggleNotesView = () => {
    setIsFullWidth((prev) => !prev);
  };

  const toggleLeftDrawer = () => {
    setLeftDrawerOpen((prevOpen) => !prevOpen);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.searchBarWrapper}>
      <View style={styles.leftSearchIconWrapper}>
        <Pressable style={{ padding: 2 }} onPress={() => toggleLeftDrawer()}>
          <Ionicons
            style={styles.leftSearchIcon}
            name="menu-sharp"
            size={24}
            color="black"
          />
        </Pressable>
        <Text style={{ fontSize: 20, paddingTop: 2, marginLeft: 20 }}>
          {barTitle}
        </Text>
      </View>
      {threeDotMenu ? (
        <View style={styles.rightSearchIconWrapper}>
          <Pressable>
            <Entypo
              style={styles.rightSearchIcon}
              name="dots-three-vertical"
              size={20}
              color="black"
            />
          </Pressable>
        </View>
      ) : (
        <View style={styles.rightSearchIconWrapper}>
          <Pressable>
            <MaterialIcons
              style={styles.rightSearchIcon}
              name="search"
              size={24}
              color="black"
            />
          </Pressable>
          {isFullWidth ? (
            <Pressable onPress={() => toggleNotesView()}>
              <AntDesign
                style={styles.rightSearchIcon}
                name="appstore-o"
                size={24}
                color="black"
              />
            </Pressable>
          ) : (
            <Pressable onPress={() => toggleNotesView()}>
              <Feather
                style={styles.rightSearchIcon}
                name="server"
                size={24}
                color="black"
              />
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
};

export default SecondaryTopBar;

const styles = StyleSheet.create({
  searchBarWrapper: {
    paddingTop: 50,
    paddingBottom: 14,
    paddingHorizontal: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSearchIconWrapper: {
    flexDirection: "row",
    // marginHorizontal: 8,
  },
  rightSearchIconWrapper: {
    flexDirection: "row",
    marginHorizontal: 8,
  },
  leftSearchIcon: {
    marginHorizontal: 4,
    padding: 2,
  },
  rightSearchIcon: {
    marginHorizontal: 4,
    padding: 2,
  },
});
