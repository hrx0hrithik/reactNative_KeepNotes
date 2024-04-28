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

const LeftDrawer = ({ children }) => {
  const { leftDrawerOpen, setLeftDrawerOpen } = useContext(DrawerContext);
  const route = useRouteInfo();

  return (
    <Drawer
      open={leftDrawerOpen}
      onOpen={() => setLeftDrawerOpen(true)}
      onClose={() => setLeftDrawerOpen(false)}
      renderDrawerContent={() => {
        return (
          <View style={styles.leftDrawerWrapper}>
            <Text style={styles.drawerHeader}>Google Keep</Text>
            <Pressable
              style={[
                styles.drawerListBtn,
                route.pathname === "/" ? styles.active : null,
              ]}
              onPress={() => {
                router.navigate("/");
                setLeftDrawerOpen(false);
              }}
            >
              <MaterialIcons
                name="lightbulb-outline"
                size={22}
                color="#000"
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontWeight: "600" }}>Notes</Text>
            </Pressable>
            <Pressable
              style={[
                styles.drawerListBtn,
                route.pathname === "/reminder" ? styles.active : null,
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
                color="black"
              />
              <Text style={{ fontWeight: "600" }}>Reminder</Text>
            </Pressable>
            <Pressable
              style={[
                styles.drawerListBtn,
                route.pathname === "/newLabel" ? styles.active : null,
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
                color="black"
              />
              <Text style={{ fontWeight: "600" }}>Create new label</Text>
            </Pressable>
            <Pressable
              style={[
                styles.drawerListBtn,
                route.pathname === "/archivedNotes" ? styles.active : null,
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
                color="black"
              />
              <Text style={{ fontWeight: "600" }}>Archive</Text>
            </Pressable>
            <Pressable
              style={[
                styles.drawerListBtn,
                route.pathname === "/deletedNotes" ? styles.active : null,
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
                color="black"
              />
              <Text style={{ fontWeight: "600" }}>Deleted</Text>
            </Pressable>
            <Pressable
              style={[
                styles.drawerListBtn,
                route.pathname === "/setting" ? styles.active : null,
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
                color="black"
              />
              <Text style={{ fontWeight: "600" }}>Setting</Text>
            </Pressable>
            <Pressable
              style={[
                styles.drawerListBtn,
                route.pathname === "/helpNfeed" ? styles.active : null,
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
                color="black"
              />
              <Text style={{ fontWeight: "600" }}>Help & feedback</Text>
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
  active: {
    backgroundColor: "#c2e4fc",
  },
});
