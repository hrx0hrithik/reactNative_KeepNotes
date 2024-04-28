import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SecondaryTopBar from "../components/SecondaryTopBar";
import LeftDrawer from "../components/LeftDrawer";

const deletedNotes = () => {

  return (
    <LeftDrawer>
    <SafeAreaView style={styles.container}>
      <SecondaryTopBar
        barTitle="Deleted"
        threeDotMenu={true}
      />
      <View style={styles.noNotesWrapper}>
      <AntDesign
                name="delete"
          size={120}
          color="#ffc954"
          style={{ marginBottom: 16 }}
        />
        <Text>No notes in Recycle bin</Text>
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
