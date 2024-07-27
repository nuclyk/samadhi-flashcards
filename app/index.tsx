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

const initialDecks = [
  {
    id: 1,
    name: "RRboticsRboticsRboticsRboticsRboticsRboticsRboticsRboticsRboticsRboticsRboticsRboticsRboticsRboticsbotics",
    details: { due: 5, new: 10, total: 15 },
    cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    id: 2,
    name: "Networking",
    details: { due: 7, new: 5, total: 12 },
    cards: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
  },
  {
    id: 3,
    name: "Operating System",
    details: { due: 0, new: 4, total: 5 },
    cards: [28, 29, 30, 31, 32],
  },
  {
    id: 4,
    name: "Robotics",
    details: { due: 5, new: 10, total: 15 },
    cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    id: 5,
    name: "Networking",
    details: { due: 7, new: 5, total: 12 },
    cards: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
  },
  {
    id: 6,
    name: "Operating System",
    details: { due: 0, new: 4, total: 5 },
    cards: [28, 29, 30, 31, 32],
  },
  {
    id: 7,
    name: "Robotics",
    details: { due: 5, new: 10, total: 15 },
    cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    id: 8,
    name: "Networking",
    details: { due: 7, new: 5, total: 12 },
    cards: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
  },
  {
    id: 9,
    name: "Operating System",
    details: { due: 0, new: 4, total: 5 },
    cards: [28, 29, 30, 31, 32],
  },
];
