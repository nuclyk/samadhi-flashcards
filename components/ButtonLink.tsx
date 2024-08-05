import { colors } from "@/constants/Colors";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";

type Button = {
  value: string;
  path: string;
  params?: any;
  width?: number;
};

export default function ButtonLink({ value, path, params }: Button) {
  return (
    <Link
      push
      asChild
      href={{
        pathname: path,
        params: params,
      }}
    >
      <Pressable style={styles.container}>
        <Text style={{ color: colors["grey-light"] }}>{value}</Text>
      </Pressable>
    </Link>
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
