# 🏃 Runit

Tu entrenador de running personal, impulsado por IA.

**Estado:** Desarrollo
**Versión:** 0.1.0
**Última actualización:** [2026-10-07]
**Responsable:** Alvaro Gomez

## 1. Visión general

### 1.1 Problema
En los últimos años han aparecido numerosas aplicaciones de running que prometen planes de entrenamiento personalizados gracias a la inteligencia artificial. Sin embargo, en la práctica, muchas de ellas se limitan a adaptar plantillas predefinidas a partir de unos pocos datos, como la distancia objetivo, la fecha de la carrera o los días disponibles. El resultado son rutinas que parecen personalizadas, pero que siguen siendo genéricas en su esencia.

Estos planes rara vez tienen en cuenta factores clave como el nivel real del corredor, su historial de lesiones, su capacidad de recuperación, la edad, el peso, la calidad del descanso o la respuesta individual de su cuerpo a la carga de entrenamiento. Dos personas con el mismo objetivo pueden necesitar enfoques completamente distintos, y tratar ambos casos de la misma forma ignora algo fundamental: cada cuerpo se adapta al esfuerzo a su propio ritmo.

### 1.2 Solución
Runit nace para resolver este problema: un entrenador basado en IA que no solo genera un plan, sino que lo ajusta continuamente según cómo responde el cuerpo de cada corredor, priorizando una progresión segura, sostenible y realmente adaptada a cada persona.

### 1.3 Público objetivo
| Perfil | Descripción | Necesidad principal |
|---|---|---|
| Principiante | [Ej.: Empieza desde cero, quiere correr 5 km] | [Progresión segura, motivación] |
| Intermedio | [Ej.: Corre 2-3 veces por semana] | [Mejorar ritmo, preparar una carrera] |
| Avanzado | [Ej.: Prepara media maratón o maratón] | [Periodización, control de carga] |

### 1.4 Propuesta de valor
- [Ej.: Planes 100 % personalizados que se ajustan cada semana]
- [Ej.: Feedback después de cada carrera]
- [Ej.: Prevención de lesiones vigilando la carga de entrenamiento]

---

## 2. Funcionalidades

### 2.1 MVP (versión mínima)
- [ ] Registro e inicio de sesión
- [ ] Onboarding: nivel, objetivos, disponibilidad, historial de lesiones
- [ ] Generación de plan de entrenamiento con IA
- [ ] Calendario semanal de sesiones
- [ ] Registro manual de entrenamientos (distancia, tiempo, sensaciones)
- [ ] Ajuste automático del plan según lo completado
- [ ] Perfil y ajustes

### 2.2 Versiones posteriores
- [ ] Seguimiento GPS en tiempo real
- [ ] Integración con Apple Health / Google Fit / Strava / Garmin
- [ ] Chat con el entrenador IA
- [ ] Guía por voz durante la carrera
- [ ] Rutinas de fuerza, movilidad y estiramientos
- [ ] Estadísticas avanzadas (VO2 máx. estimado, zonas, carga)
- [ ] Retos y logros
- [ ] Modo social / compartir carreras
- [ ] [Otra]

### 2.3 Fuera de alcance (por ahora)
- [Ej.: Planes de nutrición detallados]
- [Ej.: Diagnóstico médico de lesiones]

---

## 3. Módulo de IA

### 3.1 Objetivo de la IA
[Qué decide la IA y qué no. Ej.: Genera y ajusta planes; no da consejos médicos.]

### 3.2 Datos de entrada
| Dato | Origen | Uso |
|---|---|---|
| Nivel y experiencia | Onboarding | Punto de partida del plan |
| Objetivo (distancia, fecha, tiempo) | Usuario | Estructura y duración del plan |
| Días y horas disponibles | Usuario | Reparto de sesiones |
| Entrenamientos completados | Registro / GPS / wearables | Ajuste de carga |
| Esfuerzo percibido (RPE 1-10) | Usuario tras la sesión | Detectar fatiga |
| Frecuencia cardiaca | Wearable (opcional) | Zonas de entrenamiento |
| Lesiones / molestias | Usuario | Restricciones del plan |

### 3.3 Lógica de planificación
1. **Generación inicial:** [Ej.: Plan por bloques (base → desarrollo → específico → tapering)]
2. **Ajuste semanal:** [Ej.: Si cumple >90 % y RPE bajo → +5-10 % volumen; si falla sesiones o RPE alto → mantener o reducir]
3. **Reglas de seguridad:**
   - [Ej.: No aumentar el volumen semanal más de un 10 %]
   - [Ej.: Al menos un día de descanso completo por semana]
   - [Ej.: Si reporta dolor → sustituir por descanso o actividad sin impacto y recomendar consultar a un profesional]

### 3.4 Tipos de sesión
| Tipo | Descripción | Intensidad |
|---|---|---|
| Rodaje suave | [Ritmo conversacional] | Zona 2 |
| Tirada larga | [Volumen principal de la semana] | Zona 2 |
| Series / intervalos | [Ej.: 6 × 800 m] | Zona 4-5 |
| Tempo / umbral | [Ritmo sostenido exigente] | Zona 3-4 |
| Fartlek | [Cambios de ritmo libres] | Variable |
| Fuerza / movilidad | [Complemento] | — |
| Descanso | — | — |

### 3.5 Implementación técnica
- **Modelo / proveedor:** [Ej.: API de un LLM]
- **Enfoque:** [Ej.: Reglas fijas para la seguridad + LLM para generar y explicar el plan]
- **Formato de salida:** [Ej.: JSON validado contra un esquema]
- **Prompt base:** [Enlace o ruta, ej.: `/docs/prompts/plan-generator.md`]
- **Coste estimado por usuario/mes:** [€]

### 3.6 Ejemplo de salida del plan
```json
{
  "semana": 1,
  "objetivo_semana": "Construir base aeróbica",
  "volumen_total_km": 15,
  "sesiones": [
    {
      "dia": "lunes",
      "tipo": "rodaje_suave",
      "distancia_km": 4,
      "ritmo_objetivo": "6:30-7:00 min/km",
      "notas": "Ritmo en el que puedas hablar sin esfuerzo."
    },
    {
      "dia": "miercoles",
      "tipo": "series",
      "estructura": "Calentamiento 10 min + 6 × 1 min rápido / 2 min suave + vuelta a la calma 10 min",
      "notas": "El ritmo rápido debe ser exigente pero controlado."
    },
    { "dia": "sabado", "tipo": "tirada_larga", "distancia_km": 7 }
  ]
}
```

---

## 4. Experiencia de usuario

### 4.1 Pantallas principales
| Pantalla | Propósito | Elementos clave |
|---|---|---|
| Onboarding | Recoger datos iniciales | [Preguntas, selector de objetivo] |
| Inicio / Hoy | Ver la sesión del día | [Tarjeta de sesión, botón "Empezar"] |
| Plan / Calendario | Ver la semana y el bloque | [Vista semanal, progreso] |
| Carrera en curso | Seguimiento en tiempo real | [Tiempo, distancia, ritmo, mapa] |
| Resumen post-carrera | Registrar sensaciones | [RPE, notas, feedback de la IA] |
| Estadísticas | Ver evolución | [Gráficas de volumen, ritmo, cumplimiento] |
| Coach IA | Preguntas y ajustes | [Chat] |
| Perfil | Ajustes y datos | [Objetivos, integraciones, privacidad] |

### 4.2 Flujo principal
```
Onboarding → Plan generado → Sesión del día → Carrera → Feedback → Ajuste del plan → …
```

### 4.3 Estilo visual
- **Colores:** [Primario #____ / Secundario #____]
- **Tipografía:** [Fuente]
- **Tono de los textos:** [Ej.: Cercano, motivador, sin culpabilizar]

---

## 5. Arquitectura técnica

### 5.1 Stack
| Capa | Tecnología | Notas |
|---|---|---|
| App móvil | [Ej.: React Native + Expo] | [Permite compilar para iOS sin Mac con EAS Build] |
| Backend | [Ej.: Node.js / Supabase / Firebase] | |
| Base de datos | [Ej.: PostgreSQL] | |
| Autenticación | [Ej.: Supabase Auth / Firebase Auth / Sign in with Apple] | |
| IA | [Proveedor + modelo] | |
| Mapas / GPS | [Ej.: expo-location + mapa] | |
| Salud / wearables | [Ej.: HealthKit, Health Connect, API de Strava] | |
| Notificaciones | [Ej.: Expo Notifications] | |
| Analítica | [Herramienta] | |

### 5.2 Diagrama
```
[App móvil] ──► [API backend] ──► [Base de datos]
                     │
                     ├──► [Servicio de IA]
                     └──► [Integraciones: Strava / HealthKit / …]
```

### 5.3 Modelo de datos (borrador)
```
Usuario
  id, nombre, email, fecha_nacimiento, peso, altura, nivel, lesiones[]

Objetivo
  id, usuario_id, tipo (5k/10k/21k/42k/salud), fecha_objetivo, tiempo_objetivo

Plan
  id, usuario_id, objetivo_id, fecha_inicio, fecha_fin, estado

Sesion
  id, plan_id, fecha, tipo, descripcion, distancia_objetivo, ritmo_objetivo, estado

Entrenamiento
  id, usuario_id, sesion_id?, fecha, distancia, duracion, ritmo_medio,
  fc_media?, rpe, notas, ruta_gps?
```

### 5.4 Endpoints principales
| Método | Ruta | Descripción |
|---|---|---|
| POST | `/plans/generate` | Genera un plan nuevo con IA |
| GET | `/plans/:id` | Obtiene un plan |
| POST | `/plans/:id/adjust` | Ajusta el plan según el progreso |
| GET | `/sessions/today` | Sesión del día |
| POST | `/workouts` | Registra un entrenamiento |
| POST | `/coach/chat` | Mensaje al coach IA |

---

## 6. Privacidad, seguridad y aspectos legales
- [ ] Cumplimiento del RGPD (los datos de salud son categoría especial)
- [ ] Consentimiento explícito para datos de salud y ubicación
- [ ] Posibilidad de exportar y borrar todos los datos
- [ ] Aviso legal: la app no sustituye el consejo médico
- [ ] Política de privacidad y términos de uso
- [ ] Cumplir las normas de la App Store sobre HealthKit
- [ ] [Otros]

---

## 7. Modelo de negocio
| Plan | Precio | Incluye |
|---|---|---|
| Gratis | 0 € | [Ej.: Plan básico, registro manual] |
| Premium | [€/mes] | [Ej.: Ajuste con IA ilimitado, coach, integraciones] |

---

## 8. Métricas de éxito
| Métrica | Objetivo |
|---|---|
| Usuarios activos semanales | [Nº] |
| % de sesiones completadas | [%] |
| Retención a 30 días | [%] |
| Conversión a premium | [%] |
| Valoración en la App Store | [≥ 4,5] |

---

## 9. Hoja de ruta
| Fase | Fechas | Entregables |
|---|---|---|
| 0. Investigación | [Fechas] | [Entrevistas, análisis de competencia] |
| 1. Diseño | [Fechas] | [Wireframes, prototipo] |
| 2. MVP | [Fechas] | [Funciones de la sección 2.1] |
| 3. Beta cerrada | [Fechas] | [TestFlight, feedback] |
| 4. Lanzamiento | [Fechas] | [Publicación en App Store / Google Play] |
| 5. Iteración | [Fechas] | [Funciones de la sección 2.2] |

---

## 10. Competencia
| App | Puntos fuertes | Puntos débiles | Nuestra diferencia |
|---|---|---|---|
| [App 1] | | | |
| [App 2] | | | |
| [App 3] | | | |

---

## 11. Riesgos
| Riesgo | Impacto | Mitigación |
|---|---|---|
| La IA recomienda una carga excesiva | Alto | Reglas de seguridad fijas por encima de la IA |
| Coste de la API de IA | Medio | Cachear planes, ajustar solo una vez por semana |
| Precisión del GPS | Medio | Permitir edición manual |
| [Otro] | | |

---

## 12. Instalación y desarrollo
```bash
# Clonar el repositorio
git clone [url-del-repo]
cd [nombre-proyecto]

# Instalar dependencias
npm install

# Variables de entorno
cp .env.example .env
# Rellenar: API_KEY_IA, DATABASE_URL, …

# Arrancar en desarrollo
npx expo start
```

### Variables de entorno
| Variable | Descripción |
|---|---|
| `AI_API_KEY` | Clave del proveedor de IA |
| `DATABASE_URL` | Conexión a la base de datos |
| `[OTRA]` | [Descripción] |

---

## 13. Notas y decisiones
| Fecha | Decisión | Motivo |
|---|---|---|
| [AAAA-MM-DD] | [Ej.: Usar Expo] | [Compilar para iOS sin Mac] |

---

## 14. Recursos
- [Enlace a diseños]
- [Enlace al tablero de tareas]
- [Documentación del proveedor de IA]
- [Referencias sobre metodologías de entrenamiento]
