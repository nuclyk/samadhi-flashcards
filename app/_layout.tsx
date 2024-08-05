import { DecksProvider } from '@/context/DecksContext';
import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <DecksProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </DecksProvider>
  );
}