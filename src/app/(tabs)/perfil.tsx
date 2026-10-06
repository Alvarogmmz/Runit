import { StyleSheet, Text, View } from "react-native";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Screen } from "@/components/Screen";
import { colors } from "@/constants/theme";

export default function Perfil() {
  return (
    <Screen>
      <View style={styles.cabecera}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>🏃</Text>
        </View>
        <Text style={styles.nombre}>Usuario de Runit</Text>
        <Text style={styles.nivel}>Nivel: Principiante</Text>
      </View>

      <Card>
        <Text style={styles.etiqueta}>Objetivo actual</Text>
        <Text style={styles.valor}>Correr 5 km sin parar</Text>
      </Card>

      {/* Aquí irán los informes de progreso */}
      <Button title="Ver informes (próximamente)" variant="secondary" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  cabecera: { alignItems: "center", gap: 6 },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarTexto: { fontSize: 36 },
  nombre: { fontSize: 20, fontWeight: "700", color: colors.text },
  nivel: { fontSize: 14, color: colors.textMuted },
  etiqueta: { fontSize: 14, color: colors.textMuted },
  valor: { fontSize: 16, fontWeight: "600", color: colors.text },
});
