import { colors } from "@/constants/Colors";
import { useDecksDispatch } from "@/context/DecksContext";
import { Pressable, View, Text, StyleSheet } from "react-native";

type Button = {
  text: string;
  onPress?: any;
  width?: number;
};

export default function Button({ text, onPress, width }: Button) {
  const dispatch = useDecksDispatch();

  return (
    <Pressable style={[styles.container, { width: width }]} onPress={onPress}>
      <View>
        <Text style={{ color: colors.white }}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors["grey-dark"],
    borderRadius: 10,
    padding: 10,
  },
});
