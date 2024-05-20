import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import InputAddElemMenu from "../components/menus/InputAddElemMenu";

export default function NewRoute() {
  return (
    <View>
      <Text>New Route</Text>
      <InputAddElemMenu />
    </View>
  );
}

const styles = StyleSheet.create({});
