import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function DeckScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>This is deck: {id}</Text>
    </View>
  );
}
