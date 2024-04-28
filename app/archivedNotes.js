import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SecondaryTopBar from "../components/SecondaryTopBar";
import BottomBar from "../components/BottomBar";
import LeftDrawer from "../components/LeftDrawer";

const archivedNotes = () => {
  const [isFullWidth, setIsFullWidth] = useState(false);

  return (
    <LeftDrawer>
    <SafeAreaView style={styles.container}>
      <SecondaryTopBar
        barTitle="Archive"
        isFullWidth={isFullWidth}
        setIsFullWidth={setIsFullWidth}
      />
      <View style={styles.noNotesWrapper}>
        <Ionicons
          name="archive-outline"
          size={120}
          color="#ffc954"
          style={{ marginBottom: 16 }}
        />
        <Text>Your Archived notes appear here</Text>
      </View>
    </SafeAreaView>
    </LeftDrawer>
  );
};

export default archivedNotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  noNotesWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
});
