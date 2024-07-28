import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Card from "@/components/Card";

export default function Review() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
