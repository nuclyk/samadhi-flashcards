import { StyleSheet, SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import Card from "@/components/Card";
import { FlashList } from "@shopify/flash-list";
import { useDecks } from "@/context/DecksContext";
import { CardModel } from "@/models/CardModel";
import { useEffect, useState } from "react";
import { DeckModel } from "@/models/DeckModel";

export default function ReviewScreen() {
  const decks = useDecks();
  const { id, deckName } = useLocalSearchParams();
  const deck = decks.find((d) => d.id === parseInt(id));

  return (
    <>
      <Stack.Screen options={{ title: `Review: ${deckName} (${id})` }} />
      <SafeAreaView style={styles.container}>
        <FlashList
          data={deck.cards.filter((card: CardModel) => card.due === true)}
          estimatedItemSize={30}
          renderItem={({ item }) => <Card {...item} />}
        />
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
