import { StyleSheet, Text, View } from "react-native";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Screen } from "@/components/Screen";
import { SectionTitle } from "@/components/SectionTitle";
import { colors } from "@/constants/theme";
import { actividades } from "@/data/mock";

export default function Actividad() {
  return (
    <Screen>
      {/* Aquí irá el formulario para registrar una actividad */}
      <Button title="+ Registrar actividad (próximamente)" />

      <SectionTitle>Historial</SectionTitle>
      {actividades.map((actividad) => {
        const ritmo = actividad.duracionMin / actividad.distanciaKm;
        return (
          <Card key={actividad.id}>
            <View style={styles.fila}>
              <Text style={styles.tipo}>{actividad.tipo}</Text>
              <Text style={styles.fecha}>{actividad.fecha}</Text>
            </View>
            <Text style={styles.detalle}>
              {actividad.distanciaKm} km · {actividad.duracionMin} min · {ritmo.toFixed(2)} min/km
            </Text>
          </Card>
        );
      })}
    </Screen>
  );
}

const styles = StyleSheet.create({
  fila: { flexDirection: "row", justifyContent: "space-between" },
  tipo: { fontSize: 16, fontWeight: "700", color: colors.text },
  fecha: { fontSize: 14, color: colors.textMuted },
  detalle: { fontSize: 14, color: colors.textMuted },
});
