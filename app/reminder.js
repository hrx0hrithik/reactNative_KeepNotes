import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SecondaryTopBar from "../components/SecondaryTopBar";
import BottomBar from "../components/BottomBar";
import LeftDrawer from "../components/LeftDrawer";

const reminder = () => {
  const [isFullWidth, setIsFullWidth] = useState(false);

  return (
    <LeftDrawer>
    <SafeAreaView style={styles.container}>
      <SecondaryTopBar
        barTitle="Reminders"
        isFullWidth={isFullWidth}
        setIsFullWidth={setIsFullWidth}
      />
      <View style={styles.noNotesWrapper}>
        <MaterialCommunityIcons
          name="bell-outline"
          size={120}
          color="#ffc954"
          style={{ marginBottom: 16 }}
        />
        <Text>Notes with upcoming reminder appear here</Text>
      </View>
      <BottomBar />
    </SafeAreaView>
    </LeftDrawer>
  );
};

export default reminder;

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
