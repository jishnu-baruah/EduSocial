import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{headerShown:false}}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="new" />
      <Stack.Screen name="login" />
      <Stack.Screen name="verification" />
      <Stack.Screen name="interests" />
      <Stack.Screen name="(tabs)" />

    </Stack>
  );
}
