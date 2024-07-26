import { FlatList, Text, View, StyleSheet } from "react-native";
import Deck from "../components/Deck";
import { colors, primary } from "../constants/Colors";

export default function DeckList({ decks }) {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={decks}
        renderItem={({ item }) => (
          <>
            <View style={styles.deck}>
              <View style={styles.title}>
                <Text style={{fontSize: 20}}>{item.name}</Text>
              </View>
              <View style={styles.details}>
                <Text>Due: {item.details.due}</Text>
                <Text>New: {item.details.new}</Text>
                <Text>Total: {item.details.total}</Text>
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
    justifyContent: 'center',
    alignContent: 'center',
  },
  deck: {
    flex:1,
    borderColor: colors.primary["color-500"],
    borderWidth: 1,
    margin: 10,
    padding: 20,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 5
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 15
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center'
  }
});
