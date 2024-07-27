import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import initialCards from "../../mock/cards.json";
import { initialDecks } from "@/mock/data";
import { FlashList } from "@shopify/flash-list";

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
    <View style={styles.container}>
      <Text>Deck name: {deck.name}</Text>
      <Text>Card: {cards[0].answer}</Text>
      <FlashList
        data={cards}
        renderItem={({ item }) => (
          <View>
            <Text>{item.question}</Text>
            <Text>{item.answer}</Text>
          </View>
        )}
        estimatedItemSize={100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
