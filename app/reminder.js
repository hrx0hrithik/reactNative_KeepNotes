import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const reminder = () => {
  return (
    <View style={styles.noNotesWrapper}>
      <MaterialCommunityIcons
        name="bell-outline"
        size={120}
        color="#ffc954"
        style={{ marginBottom: 16 }}
      />
      <Text>Notes you add appear here</Text>
    </View>
  );
};

export default reminder;

const styles = StyleSheet.create({
  noNotesWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
    backgroundColor: "#fff"
  },
});
