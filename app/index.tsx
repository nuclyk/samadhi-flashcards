import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import Search from "../components/Search";
import Decks from "../components/Decks";
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
      <Decks decks={decks} filter={query}></Decks>
    </SafeAreaView>
  );
}
