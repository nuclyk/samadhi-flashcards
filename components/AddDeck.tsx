import { useDecksDispatch } from "@/context/DecksContext"
import { StyleSheet, Pressable, View, Text } from "react-native";
import { colors } from "@/constants/Colors";

export default function AddDeck({ width, deckName, text }: any) {
    const dispatch = useDecksDispatch()
    return (
        <Pressable style={[styles.container, { width: width }]} onPress={() => dispatch({ type: 'added', name: deckName })}>
            <View >
                <Text style={{ color: colors.white }}>{text}</Text>
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