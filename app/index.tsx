import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  TextInput,
  Pressable,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import Search from "../components/Search";
import DeckList from "../components/DeckList";
import { initialDecks } from "../mock/data";

export default function Index() {
  const [decks, setDecks] = useState(initialDecks);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function loadData() {
      setDecks(initialDecks);
    }
    loadData();
  }, [initialDecks]);

  return (
    <SafeAreaView>
      <Search setQuery={setQuery}></Search>
      <DeckList decks={decks} filter={query}></DeckList>
    </SafeAreaView>
  );
}
