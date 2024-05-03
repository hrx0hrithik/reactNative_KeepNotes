import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";
import NoteProvider from "../context/NoteContext";
import DrawerProvider from "../context/DrawerContext";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import ThemeProvider from "../context/ThemeContext";
import AddnoteModalProvider from "../context/AddnoteModalContext";
import { StyleSheet, useColorScheme } from "react-native";

export default function HomeLayout() {
  const colorScheme = useColorScheme();

  const colorTheme =
    colorScheme === "light" ? styles.lightTheme : styles.darkTheme;
    const DrawerTheme =
    colorScheme === "light" ? styles.lightTheme : styles.darkTheme;
  return (
    <ThemeProvider>
      <DrawerProvider>
        <ActionSheetProvider>
          <NoteProvider>
            <AddnoteModalProvider>
              <Drawer >
                <Drawer.Screen name="index" options={{ headerShown: false }} />
                {/* <Stack.Screen name="addNote" options={{ headerShown: false }} /> */}
                <Drawer.Screen
                  name="setting"
                  options={{
                    title: "Setting",
                    headerStyle: colorTheme,
                    headerTintColor: colorScheme === "light" ? "#000" : "#fff",
                  }}
                />
                <Drawer.Screen
                  name="deletedNotes"
                  options={{ headerShown: false }}
                />
                <Drawer.Screen
                  name="reminder"
                  options={{ headerShown: false }}
                />
                <Drawer.Screen
                  name="archivedNotes"
                  options={{ headerShown: false }}
                />
                <Drawer.Screen
                  name="newLabel"
                  options={{ title: "Edit labels" }}
                />
                <Drawer.Screen
                  name="helpNfeedback"
                  options={{ title: "Help" }}
                />
                <Drawer.Screen name="newRoute" />
              </Drawer>
            </AddnoteModalProvider>
          </NoteProvider>
        </ActionSheetProvider>
      </DrawerProvider>
    </ThemeProvider>
  );
}

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
