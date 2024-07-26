import { useState } from "react";
import { TextInput, View } from "react-native";
import Button from "../components/Button";

export default function Input({ value, onChange }) {
  return (
    <>
      <View style={{ backgroundColor: "red", width: 200 }}>
        <TextInput
          placeholder="Testing things out "
          value={value}
          onChangeText={(value) => onChange(value)}
        />
      </View>
      <Button value={"Add"}></Button>
    </>
  );
}
