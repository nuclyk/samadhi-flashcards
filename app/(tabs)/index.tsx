import { View, StyleSheet, SafeAreaView } from "react-native";
import Search from "@/components/Search";
import AddDeck from "@/components/AddDeck";
import DecksList from "@/components/DecksList";
import { useState } from "react";

export default function Tab() {
  const [query, setQuery] = useState("");
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row" }}>
        <Search setQuery={setQuery} />
        <AddDeck text="Add" deckName={query} />
      </View>
      <DecksList filter={query} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
