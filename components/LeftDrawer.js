import { StyleSheet, Text } from "react-native";
import React, { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import {
  MaterialIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

import { ThemeContext } from "../context/ThemeContext";
import { darkThemeText, lightThemeText } from "../utility/themes";

export default function CustomDrawerContent(props) {
  const { autoTheme } = useContext(ThemeContext);

  const TextTheme = autoTheme === "light" ? lightThemeText : darkThemeText;
  const IconTheme =
    autoTheme === "light" ? lightThemeText.color : darkThemeText.color;
  const activeIcon = autoTheme === "light" ? IconTheme : "#c2e4fc";

  const handleSettingOnPress = () => {
    props.navigation.closeDrawer();
    props.navigation.push("Setting");
  };

  const handleNewLabelOnPress = () => {
    props.navigation.closeDrawer();
    props.navigation.push("Edit Label");
  };
  const handleHelpOnPress = () => {
    props.navigation.closeDrawer();
    props.navigation.push("Help");
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerWrapper}
    >
      <Text style={[styles.drawerHeader, TextTheme]}>Keep Notes</Text>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        labelStyle={styles.textDark}
        label="NotesHome"
        onPress={() => props.navigation.navigate('NotesHome')}
      />
      <DrawerItem
        labelStyle={styles.textDark}
        label="Reminder"
        onPress={() => props.navigation.navigate('Reminder')}
      /> */}
      <DrawerItem
        labelStyle={TextTheme}
        label="Create new label"
        icon={() => (
          <AntDesign
            name="plus"
            size={22}
            color={props.navigation.pathname === "/" ? activeIcon : IconTheme}
            style={{ marginRight: -18 }}
          />
        )}
        onPress={handleNewLabelOnPress}
      />
      {/* <DrawerItem
        labelStyle={styles.textDark}
        label="Archive"
        onPress={() => props.navigation.navigate('Archive')}
      />
      <DrawerItem
        labelStyle={styles.textDark}
        label="Deleted"
        onPress={() => props.navigation.navigate('Deleted')}
      /> */}
      <DrawerItem
        labelStyle={TextTheme}
        label="Setting"
        icon={() => (
          <Ionicons
            name="settings-outline"
            size={22}
            style={{ marginRight: -18 }}
            color={IconTheme}
          />
        )}
        onPress={handleSettingOnPress}
      />
      <DrawerItem
        labelStyle={TextTheme}
        label="Help & feedback"
        icon={() => (
          <MaterialIcons
            name="help-outline"
            style={{ marginRight: -18 }}
            size={22}
            color={IconTheme}
          />
        )}
        onPress={() => handleHelpOnPress()}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "600",
  },
  drawerWrapper: {
    marginTop: 16,
  },
  drawerHeader: {
    marginLeft: 18,
    marginBottom: 10,
    fontSize: 20,
  },
});
