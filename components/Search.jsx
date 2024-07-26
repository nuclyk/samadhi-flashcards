import { TextInput, View } from "react-native";
import Button from "./Button";
import { Input, InputField } from "./ui/input";

export default function Search({ value, onChange }) {
  return (
    <>
      <Input
        variant="outline"
        size="xl"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          value={value}
          onChangeText={(value) => onChange(value)}
          placeholder="search for a deck..."
        />
      </Input>
    </>
  );
}
