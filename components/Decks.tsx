import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import { colors } from "../constants/Colors";
import { Link } from "expo-router";

export default function Decks({ decks, filter }) {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      // Search for a deck by the filter param
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

          {/* --------------------- EDIT BUTTON --------------------- */}

          <View>
            <Link
              push
              // asChild allows to have something different as a link than only text
              asChild
              href={{
                pathname: "/deck/[id]",
                params: { id: item.id },
              }}
            >
              <Pressable>
                <Text>EDIT</Text>
              </Pressable>
            </Link>
          </View>

          {/* --------------------- REVIEW BUTTON --------------------- */}

          <View>
            <Link
              asChild
              href={{
                pathname: "/review/",
                params: { id: item.id, deckName: item.name },
              }}
            >
              <Pressable>
                <Text>REVIEW</Text>
              </Pressable>
            </Link>
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
