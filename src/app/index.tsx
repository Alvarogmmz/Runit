import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola desde mi app!</Text>
      <Link href="/perfil" style={styles.link}>Ir al perfil</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", gap: 16 },
  title: { fontSize: 24, fontWeight: "bold" },
  link: { fontSize: 18, color: "#2563eb" },
});