import { colors } from "@/constants/Colors";
import { Pressable, View, Text, StyleSheet } from "react-native";

type Button = {
    text: string;
    onPress?: any
}

export default function Button({ text, onPress }: Button) {

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View >
                <Text>{text}</Text>
            </View>
        </Pressable>
    )
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