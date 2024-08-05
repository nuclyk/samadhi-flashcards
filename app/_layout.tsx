import { DecksProvider } from "@/context/DecksContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ title: "Home" }} />;

}
