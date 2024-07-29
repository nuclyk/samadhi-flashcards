import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import initialCards from "../../mock/cards2.json";
import { initialDecks } from "@/mock/data";
import { FlashList } from "@shopify/flash-list";
import { colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { Link } from "expo-router";

type Deck = {
  id: number;
  name: string;
  details: {
    due: number;
    new: number;
    total: number;
  };
  cards: number[];
};

type Card = {
  id: number;
  question: string;
  answer: string;
  due: boolean;
  date: string;
};

export default function DeckScreen() {
  const [deck, setDeck] = useState<Deck | object>({});
  const [cards, setCards] = useState<Card[]>([]);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    function getDeck(id: any) {
      return initialDecks.find((deck) => deck.id == id);
    }

    const deck = getDeck(id);
    let fc = deck?.cards;

    let list = initialCards.filter((card, index) => {
      return fc?.includes(card.id);
    });

    setCards(list);
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
