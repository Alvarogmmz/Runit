export type Nivel = "Principiante" | "Intermedio" | "Avanzado";

export interface Sesion {
  dia: string;
  descripcion: string;
}

export interface Rutina {
  id: string;
  nombre: string;
  objetivo: string;
  nivel: Nivel;
  semanas: number;
  sesiones: Sesion[];
}

export interface Actividad {
  id: string;
  fecha: string;
  distanciaKm: number;
  duracionMin: number;
  tipo: string;
}
