import React, { useContext, useState } from "react";
import { Keyboard, Pressable, StyleSheet, TextInput, View } from "react-native";
import { Ionicons, AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { DrawerContext } from "../context/DrawerContext";

const SearchBar = ({ isFullWidth, setIsFullWidth }) => {
  const [searchText, setSearchText] = useState("");

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
          <Ionicons name="menu-sharp" size={24} color="black" />
        </Pressable>
        <TextInput
          placeholder="Search your notes"
          onChangeText={() => setSearchText}
          value={searchText}
          style={styles.searchBar}
        />
      </View>
      <View style={styles.rightSearchIconWrapper}>
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
        <FontAwesome
          style={styles.rightSearchIcon}
          name="user-circle-o"
          size={24}
          color="black"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarWrapper: {
    borderRadius: 24,
    height: 45,
    marginVertical: 18,
    marginHorizontal: 12,
    backgroundColor: "#e9f1f7",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBar: {
    height: 24,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  leftSearchIconWrapper: {
    flexDirection: "row",
    marginHorizontal: 8,
  },
  rightSearchIconWrapper: {
    flexDirection: "row",
    marginHorizontal: 8,
  },
  rightSearchIcon: {
    marginHorizontal: 4,
    padding: 2,
  },
});

export default SearchBar;
