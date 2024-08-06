import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import { colors } from "../constants/Colors";
import ButtonLink from "./ButtonLink";
import Button from "./Button";
import { useDecks, useDecksDispatch } from "@/context/DecksContext";

export default function DecksList({ filter }: any) {
  const decks = useDecks();
  const dispatch = useDecksDispatch();

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      // Search for a deck by the filter prop
      data={decks.filter((deck) => deck.name.includes(filter))}
      renderItem={({ item, index }) => (
        <View
          style={[
            styles.deck,
            index % 2
              ? { backgroundColor: colors["grey-light"] }
              : { backgroundColor: colors.white },
          ]}
        >
          <View style={styles.container}>
            <View style={styles.title}>
              <Text
                style={{ fontSize: 15 }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.name}
              </Text>
            </View>

            {/* --------------------- DUE, NEW, TOTAL LABELS--------------------- */}

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
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              flex: 1,
            }}
          >
            {/* --------------------- REVIEW BUTTON --------------------- */}

            <View>
              <ButtonLink
                value="Review"
                path="/review/[id]"
                params={{ id: item.id, deckName: item.name }}
              />
            </View>

            {/* --------------------- EDIT BUTTON --------------------- */}

            <View>
              <ButtonLink
                value="Edit"
                path="/deck/[id]"
                params={{ id: item.id }}
              />
            </View>

            {/* --------------------- DELETE BUTTON --------------------- */}

            <View>
              <Button
                text="Delete"
                onPress={() => dispatch({ type: "delete", id: item.id })}
              ></Button>
            </View>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deck: {
    backgroundColor: "white",
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors["grey-medium"],
    flexDirection: "row",
    alignItems: "center",
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
