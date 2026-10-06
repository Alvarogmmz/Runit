import { Link } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Screen } from "@/components/Screen";
import { SectionTitle } from "@/components/SectionTitle";
import { colors } from "@/constants/theme";
import { rutinas } from "@/data/mock";

export default function Rutinas() {
  return (
    <Screen>
      {/* Aquí irá la generación de rutinas con IA */}
      <Button title="✨ Generar rutina con IA (próximamente)" variant="secondary" />

      <SectionTitle>Mis rutinas</SectionTitle>
      {rutinas.map((rutina) => (
        <Link key={rutina.id} href={{ pathname: "/rutina/[id]", params: { id: rutina.id } }} asChild>
          <Pressable>
            <Card>
              <Text style={styles.nombre}>{rutina.nombre}</Text>
              <Text style={styles.detalle}>
                {rutina.nivel} · {rutina.semanas} semanas · {rutina.sesiones.length} sesiones/semana
              </Text>
            </Card>
          </Pressable>
        </Link>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  nombre: { fontSize: 17, fontWeight: "700", color: colors.text },
  detalle: { fontSize: 14, color: colors.textMuted },
});
