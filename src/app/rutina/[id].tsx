import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text } from "react-native";

import { Card } from "@/components/Card";
import { Screen } from "@/components/Screen";
import { SectionTitle } from "@/components/SectionTitle";
import { colors } from "@/constants/theme";
import { rutinas } from "@/data/mock";

// Ruta dinámica: /rutina/1, /rutina/2... El id llega por la URL.
export default function DetalleRutina() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const rutina = rutinas.find((r) => r.id === id);

  if (!rutina) {
    return (
      <Screen>
        <Text style={styles.texto}>No se ha encontrado la rutina.</Text>
      </Screen>
    );
  }

  return (
    <Screen>
      <Stack.Screen options={{ title: rutina.nombre }} />

      <Card>
        <Text style={styles.texto}>🎯 {rutina.objetivo}</Text>
        <Text style={styles.secundario}>
          {rutina.nivel} · {rutina.semanas} semanas
        </Text>
      </Card>

      <SectionTitle>Sesiones semanales</SectionTitle>
      {rutina.sesiones.map((sesion) => (
        <Card key={sesion.dia}>
          <Text style={styles.dia}>{sesion.dia}</Text>
          <Text style={styles.secundario}>{sesion.descripcion}</Text>
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  texto: { fontSize: 16, color: colors.text },
  secundario: { fontSize: 14, color: colors.textMuted },
  dia: { fontSize: 16, fontWeight: "700", color: colors.primary },
});
