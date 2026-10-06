import { StyleSheet, Text } from "react-native";

import { colors } from "@/constants/theme";

interface SectionTitleProps {
  children: string;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: "700", color: colors.text },
});
