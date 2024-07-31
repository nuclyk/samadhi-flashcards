import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Button from "./ButtonLink";
import { colors } from "@/constants/Colors";

type Card = {
  id: number;
  question: string;
  answer: string;
  date: string;
  due: boolean
};

export default function Card({ id, question, answer, due, date }: Card) {
  const [show, setShow] = useState(false);

  if (!show) {
    return (
      <View style={styles.container}>
        <Pressable onPress={() => setShow(!show)}>
          <View style={styles.questionBox}>
            <Text style={styles.h1}>{question}</Text>
            <Text style={styles.h2}>Press to see answer</Text>
          </View>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={[styles.container, { flexDirection: "column" }]}>
        <Pressable onPress={() => setShow(!show)}>
          <View style={styles.answerBox}>
            <Text style={styles.h1}>{answer}</Text>
          </View>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            justifyContent: "space-between",
          }}
        >
          <Pressable
            style={[styles.button, { backgroundColor: colors.blue }]}
            onPress={() => setShow(!show)}
          >
            <Text style={{ color: colors.white, fontWeight: 900 }}>Easy</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: colors.orange }]}
            onPress={() => setShow(!show)}
          >
            <Text style={{ color: colors.white, fontWeight: 900 }}>Hard</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: colors.red }]}
            onPress={() => setShow(!show)}
          >
            <Text style={{ color: colors.white, fontWeight: 900 }}>
              Very Hard
            </Text>
          </Pressable>
        </View>
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
  questionBox: {
    width: 300,
    height: 300,
    backgroundColor: colors["grey-dark"],
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  answerBox: {
    width: 300,
    height: "80%",
    backgroundColor: colors["grey-dark"],
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  h1: {
    fontSize: 30,
    color: colors.white,
  },
  h2: {
    fontSize: 20,
    color: colors["grey-light"],
  },
  button: {
    backgroundColor: colors["grey-dark"],
    minWidth: 100,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
