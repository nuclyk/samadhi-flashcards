import { StyleSheet, TextInput, View } from "react-native";
import Button from "./Button";

export default function Search({ value, onChange }) {
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="search for a deck"
          onChangeText={(value) => onChange(value)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#e0e1dd",
    padding: 5,
    paddingLeft: 10,
    height: 40,
  },
});
