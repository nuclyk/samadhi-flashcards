import { StyleSheet, TextInput, View } from "react-native";
import ButtonLink from "./ButtonLink";
import { colors } from "@/constants/Colors";

export default function Search({ setQuery }: any) {
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
    flex: 1,
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
