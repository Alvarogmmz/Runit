// Datos de ejemplo. Más adelante vendrán de una API / Supabase / IA.
import type { Actividad, Rutina } from "@/types";

export const rutinas: Rutina[] = [
  {
    id: "1",
    nombre: "Mis primeros 5K",
    objetivo: "Correr 5 km sin parar",
    nivel: "Principiante",
    semanas: 8,
    sesiones: [
      { dia: "Lunes", descripcion: "Caminar 5 min + 6x (1 min correr / 2 min caminar)" },
      { dia: "Miércoles", descripcion: "Caminar 5 min + 6x (1 min correr / 2 min caminar)" },
      { dia: "Sábado", descripcion: "Caminar 5 min + 8x (1 min correr / 1 min caminar)" },
    ],
  },
  {
    id: "2",
    nombre: "Bajar de 50' en 10K",
    objetivo: "Mejorar ritmo en 10 km",
    nivel: "Intermedio",
    semanas: 10,
    sesiones: [
      { dia: "Martes", descripcion: "Series: 6x 800 m a ritmo 4:45/km" },
      { dia: "Jueves", descripcion: "Rodaje suave 40 min" },
      { dia: "Domingo", descripcion: "Tirada larga 12 km" },
    ],
  },
];

export const actividades: Actividad[] = [
  { id: "a1", fecha: "05/10/2026", distanciaKm: 6.2, duracionMin: 34, tipo: "Rodaje" },
  { id: "a2", fecha: "03/10/2026", distanciaKm: 4.0, duracionMin: 21, tipo: "Series" },
  { id: "a3", fecha: "01/10/2026", distanciaKm: 10.5, duracionMin: 58, tipo: "Tirada larga" },
];
