import { Stack } from "expo-router";
import NoteProvider from "../context/NoteContext";

export default function HomeLayout() {
  return (
    <NoteProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="addNote" options={{ headerShown: false }} />
      </Stack>
    </NoteProvider>
  );
}
