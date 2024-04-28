import { Stack } from "expo-router";
import NoteProvider from "../context/NoteContext";
import DrawerProvider from "../context/DrawerContext";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function HomeLayout() {
  return (
    <DrawerProvider>
      <ActionSheetProvider>
        <NoteProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="addNote" options={{ headerShown: false }} />
            <Stack.Screen name="setting" options={{ title: "Setting" }} />
            <Stack.Screen name="deletedNotes" options={{ headerShown: false }} />
            <Stack.Screen name="reminder" options={{ headerShown: false }} />
            <Stack.Screen name="archivedNotes" options={{ headerShown: false }} />
            <Stack.Screen name="newLabel" options={{ title: "Edit labels" }} />
            <Stack.Screen name="helpNfeedback" options={{ title: "Help" }} />
            <Stack.Screen name="newRoute" />
          </Stack>
        </NoteProvider>
      </ActionSheetProvider>
    </DrawerProvider>
  );
}
