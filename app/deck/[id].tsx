import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import { DeckModel } from "@/models/DeckModel";
import { CardModel } from "@/models/CardModel";
import { useDecks } from "@/context/DecksContext";

let initialDeck: DeckModel = {
  id: 999,
  name: "Initial deck",
  details: { due: 0, new: 0, total: 0 },
  cards: [],
};

export default function DeckScreen() {
  const decks = useDecks();
  const [deck, setDeck] = useState<DeckModel>(initialDeck);
  const [cards, setCards] = useState<CardModel[]>([]);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    function getDeck(id: any): DeckModel {
      try {
        return decks.find((deck: DeckModel) => deck.id == id);
      } catch (error) {
        console.log(`The card with id ${id} does not exist.`);
      }
      return initialDeck;
    }

    const deck: DeckModel = getDeck(id);

    setCards(deck.cards);
    setDeck(deck);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: deck.name }} />
      <View style={styles.title}>
        <Text>
          <Text style={styles.h2}>Flashcards</Text>
        </Text>
      </View>
      <FlashList
        keyExtractor={(item) => item.id.toString()}
        data={cards}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.question}>
              <Text>
                {item.id}. {item.question}
              </Text>
            </View>
            <View style={styles.options}>
              <Link href="">
                <Text>Edit</Text>
              </Link>
            </View>
          </View>
        )}
        estimatedItemSize={50}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    backgroundColor: colors["grey-dark"],
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  question: {
    backgroundColor: colors["grey-medium"],
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
  },
  answer: {},
  h1: {
    fontSize: 20,
    color: colors.white,
  },
  h2: {
    fontSize: 15,
    color: colors.white,
  },
  card: {
    margin: 10,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors["grey-light"],
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 10,
  },
});
