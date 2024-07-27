import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import initialCards from "../../mock/cards.json";
import { initialDecks } from "@/mock/data";
import { FlashList } from "@shopify/flash-list";
import { colors } from "@/constants/Colors";
import { Stack } from "expo-router";

export default function DeckScreen() {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState(initialCards);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    function getDeck(id) {
      return initialDecks.find((deck) => deck.id == id);
    }

    setDeck(getDeck(id));
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
        data={cards}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.question}>
              <Text>Question: {item.question}</Text>
            </View>
            <View style={styles.answer}>
              <Text>Answer: {item.question}</Text>
            </View>
          </View>
        )}
        estimatedItemSize={100}
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
    flex: "auto",
    flexDirection: "row",
    justifyContent: "center",
  },
  question: {
    backgroundColor: colors["grey-medium"],
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
  },
  answer: {
    backgroundColor: colors["grey-light"],
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 10,
  },
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
});
