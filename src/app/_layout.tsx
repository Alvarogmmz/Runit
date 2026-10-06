import { Stack } from "expo-router";

// Navegador raíz: las pestañas van dentro, y las pantallas de detalle
// (como /rutina/[id]) se apilan encima de ellas.
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="rutina/[id]" options={{ title: "Rutina" }} />
    </Stack>
  );
}
