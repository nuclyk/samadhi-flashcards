import Button from "@/components/Button";
import { colors } from "@/constants/Colors";
import { useReducer, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

export default function AddDeckScreen() {
  const [deckName, setDeckName] = useState("");
  const [deck, setDeck] = useState({});

  function addNewDeck() {
    let deck = {
      id: 1,
      name: deckName,
      details: { due: 0, new: 0, total: 0 },
      cards: [],
    };
    setDeck(deck);
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="name of the deck"
        onChangeText={(value) => setDeckName(value)}
      />
      <Button onPress={addNewDeck} text="Add new deck" width={200}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors["grey-medium"],
    padding: 10,
  },
});
