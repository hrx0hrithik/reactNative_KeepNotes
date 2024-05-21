import "react-native-gesture-handler";
import "react-native-reanimated";
import { useContext, useEffect } from "react";
import { View, useColorScheme, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ThemeProvider, { ThemeContext } from "./context/ThemeContext";

import NotesHome from "./screens/NotesHome";
import NoteProvider from "./context/NoteContext";
import AddNote from "./screens/AddNote";
import NewRoute from "./screens/NewRoute";
import Setting from "./screens/Setting";
import Reminder from "./screens/Reminder";
import ArchivedNotes from "./screens/ArchivedNotes";
import DeletedNotes from "./screens/DeletedNotes";
import Help from "./screens/Help";
import NewLabel from "./screens/NewLabel";

import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
  activeDarkThemeBackground,
  activeLightThemeBackground,
  darkThemeBackground,
  darkThemeText,
  lightThemeBackground,
  lightThemeText,
} from "./utility/themes";
import CustomDrawerContent from "./components/LeftDrawer";
import { MenuProvider } from "react-native-popup-menu";

function EmptyScreen() {
  return <View />;
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  const rootTheme = useColorScheme();

  const { setAutoTheme } = useContext(ThemeContext);

  useEffect(() => {
    setAutoTheme(rootTheme);
  }, [rootTheme]);

  const drawerStyle = {
    width: 320,
    backgroundColor:
      rootTheme === "light"
        ? lightThemeBackground.backgroundColor
        : darkThemeBackground.backgroundColor,
  };
  const drawerActiveBackgroundColor =
    rootTheme === "light"
      ? activeLightThemeBackground.backgroundColor
      : activeDarkThemeBackground.backgroundColor;

  const IconTheme = rootTheme === "light" ? "#000" : "#fff";
  const activeIcon = rootTheme === "light" ? IconTheme : "#c2e4fc";

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle,
        drawerItemStyle: { borderRadius: 40, paddingHorizontal: 4 },
        drawerActiveTintColor: activeIcon,
        drawerActiveBackgroundColor: drawerActiveBackgroundColor,
        drawerInactiveTintColor: rootTheme === "light" ? "#000" : "#fff",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Notes"
        component={NotesHome}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => (
            <MaterialIcons
              name="lightbulb-outline"
              size={22}
              color={focused ? activeIcon : IconTheme}
              style={{ marginRight: -18 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Reminders"
        component={Reminder}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="bell-outline"
              size={22}
              color={focused ? activeIcon : IconTheme}
              style={{ marginRight: -18 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Archive"
        component={ArchivedNotes}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="archive-outline"
              size={22}
              color={focused ? activeIcon : IconTheme}
              style={{ marginRight: -18 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Deleted"
        component={DeletedNotes}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => (
            <AntDesign
              name="delete"
              size={22}
              color={focused ? activeIcon : IconTheme}
              style={{ marginRight: -18 }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  const appTheme = useColorScheme();
  const textTheme =
    appTheme === "light" ? lightThemeText.color : darkThemeText.color;
  const backgroundTheme =
    appTheme === "light" ? lightThemeBackground : darkThemeBackground;

  return (
    <ThemeProvider>
        <MenuProvider
          customStyles={{ backdrop: { backgroundColor: "#000", opacity: 0.5 } }}
        >
          <NoteProvider>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerMode: "screen",
                  headerTintColor: textTheme,
                  headerStyle: backgroundTheme,
                }}
                sceneContainerStyle={{ backgroundColor: "black" }}
              >
                <Stack.Screen
                  name="Root"
                  component={Root}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AddNote"
                  component={AddNote}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="Setting" component={Setting} />
                <Stack.Screen name="Edit Label" component={NewLabel} />
                <Stack.Screen name="Help" component={Help} />
                <Stack.Screen name="NewRoute" component={NewRoute} />
              </Stack.Navigator>
            </NavigationContainer>
            <StatusBar
              backgroundColor={appTheme === "light" ? "#fff" : "#12121a"}
              barStyle={appTheme === "light" ? "dark-content" : "light-content"}
            />
          </NoteProvider>
        </MenuProvider>
    </ThemeProvider>
  );
}

export default App;
