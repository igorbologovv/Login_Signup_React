import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="auth/Login" options={{ title: "Login" }} />
      <Stack.Screen name="auth/signup" options={{ title: "Sign Up" }} />
    </Stack>
  );
}
