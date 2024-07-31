import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import Card from "@/components/Card";
import cards from '../../mock/cards2.json'
import { FlashList } from "@shopify/flash-list";

export default function ReviewScreen() {
  const { id, deckName } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: "Review " + deckName }} />
      <SafeAreaView style={styles.container}>
        <FlashList data={cards.filter(card => card.due === true)}
          estimatedItemSize={cards.length}
          renderItem={({ item, index }) => (
            <Card {...item} />)} />
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
