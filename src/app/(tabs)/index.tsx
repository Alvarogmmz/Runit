import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Screen } from "@/components/Screen";
import { SectionTitle } from "@/components/SectionTitle";
import { colors } from "@/constants/theme";
import { actividades, rutinas } from "@/data/mock";

export default function Inicio() {
  const proximaRutina = rutinas[0];
  const kmTotales = actividades.reduce((total, a) => total + a.distanciaKm, 0);

  return (
    <Screen>
      <Text style={styles.saludo}>¡Hola, corredor! 👋</Text>
      <Text style={styles.subtitulo}>Este es tu resumen de hoy.</Text>

      <SectionTitle>Esta semana</SectionTitle>
      <View style={styles.stats}>
        <Card>
          <Text style={styles.statValor}>{kmTotales.toFixed(1)} km</Text>
          <Text style={styles.statEtiqueta}>Distancia</Text>
        </Card>
        <Card>
          <Text style={styles.statValor}>{actividades.length}</Text>
          <Text style={styles.statEtiqueta}>Salidas</Text>
        </Card>
      </View>

      <SectionTitle>Tu rutina actual</SectionTitle>
      <Card>
        <Text style={styles.rutinaNombre}>{proximaRutina.nombre}</Text>
        <Text style={styles.statEtiqueta}>
          Próxima sesión: {proximaRutina.sesiones[0].dia} — {proximaRutina.sesiones[0].descripcion}
        </Text>
      </Card>

      <Link href={{ pathname: "/rutina/[id]", params: { id: proximaRutina.id } }} asChild>
        <Button title="Ver rutina" />
      </Link>
    </Screen>
  );
}

const styles = StyleSheet.create({
  saludo: { fontSize: 26, fontWeight: "800", color: colors.text },
  subtitulo: { fontSize: 15, color: colors.textMuted },
  stats: { flexDirection: "row", gap: 12 },
  statValor: { fontSize: 22, fontWeight: "700", color: colors.primary },
  statEtiqueta: { fontSize: 14, color: colors.textMuted },
  rutinaNombre: { fontSize: 17, fontWeight: "700", color: colors.text },
});
