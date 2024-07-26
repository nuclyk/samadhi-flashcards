import { Pressable, StyleSheet, View, Text } from "react-native";

export default function Button({ value, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Text>{value}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 100,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    backgroundColor: "grey",
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
  },
});
