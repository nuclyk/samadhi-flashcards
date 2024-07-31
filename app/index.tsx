import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import Search from "../components/Search";
import Decks from "../components/Decks";
import { initialDecks } from "../mock/data";
import ButtonLink from "@/components/ButtonLink";

export default function HomeScreen() {
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
      <View style={{ flexDirection: 'row' }}>
        <Search setQuery={setQuery} />
        <ButtonLink value='Add' path='/deck/add/' />
      </View>
      <Decks decks={decks} filter={query}></Decks>
    </SafeAreaView>
  );
}
