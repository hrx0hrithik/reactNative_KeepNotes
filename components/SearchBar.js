import React, { useContext, useState } from "react";
import { Keyboard, Pressable, StyleSheet, TextInput, View } from "react-native";
import { Ionicons, AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";
import { darkBarBackground, darkThemeIcon, lightBarBackground, lightThemeIcon } from "../utility/themes";

const SearchBar = ({ isFullWidth, setIsFullWidth, navigation }) => {
  const [searchText, setSearchText] = useState("");

  const { autoTheme } = useContext(ThemeContext);

  const toggleNotesView = () => {
    setIsFullWidth((prev) => !prev);
  };

  const handleOnPressDrawer = () => {
    navigation.openDrawer()
    Keyboard.dismiss();
  };

  const searchWrapperTheme =
    autoTheme === "light" ? lightBarBackground : darkBarBackground;
  const searchIconColor =
    autoTheme === "light" ? lightThemeIcon.color : darkThemeIcon.color ;
  

  return (
    <View style={[styles.searchBarWrapper, searchWrapperTheme]}>
      <View style={styles.leftSearchIconWrapper}>
        <Pressable style={{ padding: 2 }} onPress={() => handleOnPressDrawer()}>
          <Ionicons
            name="menu-sharp"
            size={24}
            color={searchIconColor}
          />
        </Pressable>
        <TextInput
          placeholder="Search your notes"
          placeholderTextColor="#aaa"
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
              color={searchIconColor}
            />
          </Pressable>
        ) : (
          <Pressable onPress={() => toggleNotesView()}>
            <Feather
              style={styles.rightSearchIcon}
              name="server"
              size={24}
              color={searchIconColor}
            />
          </Pressable>
        )}
        <FontAwesome
          style={styles.rightSearchIcon}
          name="user-circle-o"
          size={24}
          color={searchIconColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarWrapper: {
    borderRadius: 24,
    height: 50,
    marginVertical: 18,
    marginHorizontal: 12,
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
