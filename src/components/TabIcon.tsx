import { StyleSheet, Text } from "react-native";

interface TabIconProps {
  emoji: string;
  focused: boolean;
}

// Icono sencillo con emoji para no añadir dependencias de iconos todavía.
export function TabIcon({ emoji, focused }: TabIconProps) {
  return <Text style={[styles.icon, !focused && styles.inactive]}>{emoji}</Text>;
}

const styles = StyleSheet.create({
  icon: { fontSize: 20 },
  inactive: { opacity: 0.5 },
});
