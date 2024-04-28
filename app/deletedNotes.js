import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SecondaryTopBar from "../components/SecondaryTopBar";
import LeftDrawer from "../components/LeftDrawer";

const deletedNotes = () => {
  const [isFullWidth, setIsFullWidth] = useState(false);

  return (
    <LeftDrawer>
    <SafeAreaView style={styles.container}>
      <SecondaryTopBar
        barTitle="Deleted"
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

export default deletedNotes;

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
