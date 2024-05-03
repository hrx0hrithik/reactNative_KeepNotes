import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { DrawerContext } from "../context/DrawerContext";
import { Drawer } from "react-native-drawer-layout";
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { useRouteInfo } from "expo-router/build/hooks";
import { ThemeContext } from "../context/ThemeContext";

const LeftDrawer = ({ children }) => {
  const { leftDrawerOpen, setLeftDrawerOpen } = useContext(DrawerContext);
  const { autoTheme } = useContext(ThemeContext);
  const route = useRouteInfo();

  const DrawerTheme =
    autoTheme === "light" ? styles.lightTheme : styles.darkTheme;
  const TextTheme = autoTheme === "light" ? styles.textLight : styles.textDark;
  const IconTheme = autoTheme === "light" ? "#000" : "#fff";
  const active = autoTheme === "light" ? styles.activeLight : styles.activeDark;
  const activeIcon = autoTheme === "light" ? IconTheme: "#c2e4fc"

  return (
    <Drawer
      open={leftDrawerOpen}
      drawerStyle={DrawerTheme}
      onOpen={() => setLeftDrawerOpen(true)}
      onClose={() => setLeftDrawerOpen(false)}
      renderDrawerContent={() => {
        return (
          <View style={styles.leftDrawerWrapper}>
            <Text style={[styles.drawerHeader, TextTheme]}>Google Keep</Text>
            <Pressable
              style={[
                styles.drawerListBtn,
                route.pathname === "/" ? active : null,
              ]}
              onPress={() => {
                router.navigate("/");
                setLeftDrawerOpen(false);
              }}
            >
              <MaterialIcons
                name="lightbulb-outline"
                size={22}
                color={route.pathname === "/" ? activeIcon : IconTheme}
                style={{ marginRight: 10 }}
              />
              <Text
                style={[
                  styles.textStyle,
                  TextTheme,
                  route.pathname === "/" ? active : null,
                ]}
              >
                Notes
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.drawerListBtn,
                route.pathname === "/reminder" ? active : null,
              ]}
              onPress={() => {
                setLeftDrawerOpen(false);
                router.navigate("/reminder");
              }}
            >
              <MaterialCommunityIcons
                name="bell-outline"
                style={{ marginRight: 10 }}
                size={22}
                color={route.pathname === "/reminder" ? activeIcon : IconTheme}
              />
              <Text
                style={[
                  styles.textStyle,
                  TextTheme,
                  route.pathname === "/reminder" ? active : null,
                ]}
              >
                Reminder
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.drawerListBtn,
                route.pathname === "/newLabel" ? active : null,
              ]}
              onPress={() => {
                router.push("/newLabel");
                setLeftDrawerOpen(false);
              }}
            >
              <AntDesign
                name="plus"
                size={22}
                style={{ marginRight: 10 }}
                color={IconTheme}
              />
              <Text style={[styles.textStyle, TextTheme]}>
                Create new label
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.drawerListBtn,
                route.pathname === "/archivedNotes" ? active : null,
              ]}
              onPress={() => {
                router.navigate("/archivedNotes");
                setLeftDrawerOpen(false);
              }}
            >
              <Ionicons
                style={{ marginRight: 10 }}
                name="archive-outline"
                size={22}
                color={route.pathname === "/archivedNotes" ? activeIcon : IconTheme}
              />
              <Text
                style={[
                  styles.textStyle,
                  TextTheme,
                  route.pathname === "/archivedNotes" ? active : null,
                ]}
              >
                Archive
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.drawerListBtn,
                route.pathname === "/deletedNotes" ? active : null,
              ]}
              onPress={() => {
                router.navigate("/deletedNotes");
                setLeftDrawerOpen(false);
              }}
            >
              <AntDesign
                name="delete"
                size={22}
                style={{ marginRight: 10 }}
                color={route.pathname === "/deletedNotes" ? activeIcon : IconTheme}
              />
              <Text
                style={[
                  styles.textStyle,
                  TextTheme,
                  route.pathname === "/deletedNotes" ? active : null,
                ]}
              >
                Deleted
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.drawerListBtn,
                route.pathname === "/setting" ? active : null,
              ]}
              onPress={() => {
                router.push("/setting");
                setLeftDrawerOpen(false);
              }}
            >
              <Ionicons
                name="settings-outline"
                size={22}
                style={{ marginRight: 10 }}
                color={IconTheme}
              />
              <Text style={[styles.textStyle, TextTheme]}>Setting</Text>
            </Pressable>
            <Pressable
              style={[
                styles.drawerListBtn,
                route.pathname === "/helpNfeed" ? active : null,
              ]}
              onPress={() => {
                router.push("/helpNfeedback");
                setLeftDrawerOpen(false);
              }}
            >
              <MaterialIcons
                name="help-outline"
                style={{ marginRight: 10 }}
                size={22}
                color={IconTheme}
              />
              <Text style={[styles.textStyle, TextTheme]}>Help & feedback</Text>
            </Pressable>
          </View>
        );
      }}
    >
      {children}
    </Drawer>
  );
};

export default LeftDrawer;

const styles = StyleSheet.create({
  lightTheme: {
    backgroundColor: "#e9f1f7",
  },
  darkTheme: {
    backgroundColor: "#20212e",
  },
  textLight: {
    color: "#000",
  },
  textDark: {
    color: "#fff",
  },
  textStyle: {
    fontWeight: "600",
  },
  leftDrawerWrapper: {
    marginVertical: 40,
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 6,
  },
  drawerHeader: {
    marginVertical: 8,
    padding: 8,
    fontSize: 20,
  },
  drawerListBtn: {
    flexDirection: "row",
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginVertical: 4,
    borderRadius: 40,
  },
  activeLight: {
    backgroundColor: "#c2e4fc",
    color: "#000",
  },
  activeDark: {
    backgroundColor: "#1b4469",
    color: "#c2e4fc",
  },
});
