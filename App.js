import "react-native-gesture-handler";
import { useContext, useEffect } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Keyboard,
  StatusBar,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ThemeProvider, { ThemeContext } from "./context/ThemeContext";

import NotesHome from "./screens/NotesHome";
import NoteProvider from "./context/NoteContext";
import AddNote from "./screens/AddNote";
import NewRoute, { ConnectedActionSheetButton } from "./screens/NewRoute";
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
  activeDarkThemeText,
  activeLightThemeBackground,
  activeLightThemeText,
  darkBarBackground,
  darkThemeBackground,
  darkThemeText,
  lightBarBackground,
  lightThemeBackground,
  lightThemeText,
} from "./utility/themes";
import CustomDrawerContent from "./components/LeftDrawer";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

function EmptyScreen() {
  return <View />;
}

function Feed({ navigation }) {
  const { autoTheme } = useContext(ThemeContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Feed Screen {`autoTheme -> ${autoTheme}`}</Text>
      <Button title="Go to Root" onPress={() => navigation.navigate("Root")} />
      <Button
        title="Go to Root, Profile"
        onPress={() => navigation.navigate("Root", { screen: "Profile" })}
      />
    </View>
  );
}

function Home({ navigation }) {
  const { autoTheme } = useContext(ThemeContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen {`autoTheme -> ${autoTheme}`}</Text>
      <Button title="Go to Feed" onPress={() => navigation.navigate("Feed")} />
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

// function CustomDrawerContent(props) {
//   const handleSettingOnPress = () => {
//     props.navigation.closeDrawer()
//     props.navigation.push("Setting")
//   }

//   const handleNewLabelOnPress = () => {
//     props.navigation.closeDrawer()
//   }

//   return (
//     <DrawerContentScrollView {...props}>
//       <Text style={styles.drawerHeading}>Keep Notes</Text>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         labelStyle={{ color: "#fff"}}
//         label="Create new lable"
//         onPress={() => handleNewLabelOnPress()}
//       />
//       <DrawerItem
//         labelStyle={{ color: "#fff"}}
//         label="Setting"
//         onPress={() => handleSettingOnPress()}
//       />
//       <DrawerItem
//         labelStyle={{ color: "#fff"}}
//         label="Help & feedback"
//         // onPress={() => handleOnPress()}
//       />
//     </DrawerContentScrollView>
//   );
// }

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  const rootTheme = useColorScheme();

  const { setAutoTheme } = useContext(ThemeContext);

  useEffect(() => {
    setAutoTheme(rootTheme);
  }, [rootTheme]);

  const drawerStyle = {
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
        name="NotesHome"
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
      <ActionSheetProvider>
        <NoteProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerMode: "screen",
                headerTintColor: textTheme,
                headerStyle: backgroundTheme,
              }}
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
          <StatusBar backgroundColor={backgroundTheme.color} />
        </NoteProvider>
      </ActionSheetProvider>
    </ThemeProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  lightTheme: {
    backgroundColor: "#e9f1f7",
  },
  darkTheme: {
    backgroundColor: "#20212e",
  },
});
