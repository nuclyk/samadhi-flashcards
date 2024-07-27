import { StyleSheet, TextInput, View } from "react-native";
import Button from "./Button";
import { colors } from "@/constants/Colors";

export default function Search({ setQuery }) {
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="search for a deck"
          onChangeText={(value) => {
            setQuery(value);
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    justifyContent: "center",
    backgroundColor: colors["grey-dark"],
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 5,
    paddingLeft: 10,
    height: 40,
  },
});
