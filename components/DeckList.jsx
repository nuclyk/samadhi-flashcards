import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Pressable,
  Touchable,
} from "react-native";
import Deck from "../components/Deck";
import { colors, primary } from "../constants/Colors";
import { Link } from "expo-router";

export default function DeckList({ decks, filter }) {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        // Search for a deck by the filter param
        data={decks.filter((deck) => deck.name.includes(filter))}
        renderItem={({ item, index }) => (
          <Pressable
            style={[
              styles.deck,
              index % 2
                ? { backgroundColor: colors["grey-light"] }
                : { backgroundColor: colors.white },
            ]}
          >
            <View style={styles.title}>
              <Text
                style={{ fontSize: 15, color: colors.background }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                <Link href={"/deck/" + item.id}>{item.name}</Link>
              </Text>
            </View>
            <View style={styles.details}>
              <View style={[styles.square, { backgroundColor: colors.orange }]}>
                <Text style={styles.text}>Due: {item.details.due}</Text>
              </View>
              <View style={[styles.square, { backgroundColor: colors.blue }]}>
                <Text style={styles.text}>New: {item.details.new}</Text>
              </View>
              <View style={[styles.square, { backgroundColor: colors.purple }]}>
                <Text style={styles.text}>Total: {item.details.total}</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%" },
  deck: {
    backgroundColor: "white",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors["grey-medium"],
  },
  title: {
    marginBottom: 15,
  },
  details: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  square: {
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 5,
    padding: 5,
    minWidth: 25,
    marginRight: 5,
  },
  text: {
    fontSize: 12,
    color: colors.white,
  },
});
