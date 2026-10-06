import type { ReactNode } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { colors, spacing } from "@/constants/theme";

interface ScreenProps {
  children: ReactNode;
}

/** Contenedor base de cada pantalla: fondo, márgenes y scroll. */
export function Screen({ children }: ScreenProps) {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, gap: spacing.md },
});
