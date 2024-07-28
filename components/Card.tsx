import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Button from "./Button";

type Card = {
  id: number;
  question: string;
  answer: string;
  date: string;
};

export default function Card() {
  const [card, setCard] = useState<Card>({
    id: 0,
    question: "initial question",
    answer: "initial answer",
    date: new Date().toDateString(),
  });
  const [show, setShow] = useState(false);

  if (!show) {
    return (
      <View style={styles.container}>
        <Pressable onPress={() => setShow(!show)}>
          <Text>{card.question}</Text>
          <Text>Press to see answer</Text>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Pressable onPress={() => setShow(!show)}>
          <Text>Photoaxis is ...</Text>
        </Pressable>
        <Pressable onPress={() => setShow(!show)}>
          <Text>Go next...</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
