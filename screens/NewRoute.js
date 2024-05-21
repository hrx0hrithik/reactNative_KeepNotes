import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import BottomBar from "../components/BottomBar";

export default function NewRoute() {
  return (
    <>
    <View style={{ flex:1 }}>
      <Text>New Route</Text>
    </View>
      <BottomBar />
    </>
  );
}

const styles = StyleSheet.create({});
