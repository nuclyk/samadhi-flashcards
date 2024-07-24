import { View, Text } from "react-native";

export default function Deck({ id, name, cards }) {
  return (
    <Text>
      {name} Due Cards: {cards.due} New Cards: {cards.new} Total Cards:{" "}
      {cards.new}
    </Text>
  );
}
