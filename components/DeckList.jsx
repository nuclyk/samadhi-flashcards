import { FlatList, Text, View, StyleSheet } from "react-native";
import Deck from "../components/Deck";
import { colors, primary } from "../constants/Colors";

export default function DeckList({ decks }) {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={decks}
        renderItem={({ item, index }) => (
          <>
            <View
              style={[
                styles.deck,
                index % 2
                  ? { backgroundColor: colors["grey-light"] }
                  : { backgroundColor: colors.white },
              ]}
            >
              <View style={styles.title}>
                <Text style={{ fontSize: 18, color: colors.background }}>{item.name}</Text>
              </View>
              <View style={styles.details}>
                <View style={[styles.square, { backgroundColor: colors.orange }]}>
                  <Text style={{color: 'white'}}>Due: {item.details.due}</Text>
                </View>
                <View style={[styles.square, { backgroundColor: colors.blue }]}>
                  <Text style={{color: 'white'}}>New: {item.details.new}</Text>
                </View>
                <View style={[styles.square, { backgroundColor: colors.purple }]}>
                  <Text style={{color: 'white'}}>Total: {item.details.total}</Text>
                </View>
              </View>
            </View>
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  deck: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors["grey-medium"]
  },
  title: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    marginBottom: 15,
  },
  details: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  square: {
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 5,
    padding: 5,
    minWidth: 25,
    marginRight: 5,
  },
});
