import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import Card from "@/components/Card";

export default function ReviewScreen() {
  const { id, deckName } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: "Review " + deckName }} />
      <SafeAreaView style={styles.container}>
        <Card />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
