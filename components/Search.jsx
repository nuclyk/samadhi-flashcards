import { TextInput, View } from "react-native";
import Button from "./Button";

export default function Search({ value, onChange }) {
  return (
    <>
    <View>
      <TextInput placeholder="search for a deck" onChangeText={(value) => onChange(value) }></TextInput>
    </View>
    </>
  );
}
