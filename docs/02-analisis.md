# Documento de Análisis de Requisitos
## Sistema Web para Spa & Tienda de Mascotas

**Versión:** 1.0  
**Fecha:** Diciembre 2025  
**Proyecto:** Sistema de Gestión para Spa y Tienda de Mascotas  
**Fase:** Análisis de Requisitos

---

## 1. Introducción

### 1.1 Propósito del Documento
Este documento presenta el análisis detallado de los requisitos elicitados para el sistema web de gestión del spa de mascotas. El análisis incluye la verificación de consistencia, completitud, factibilidad y trazabilidad de los requisitos identificados.

### 1.2 Alcance del Análisis
El análisis se enfoca en requisitos implementables en frontend puro (HTML, CSS, JavaScript) sin backend, priorizando la viabilidad técnica dentro del marco temporal de 2 semanas.

### 1.3 Referencias
- Documento de Elicitación de Requisitos v1.0
- Informe Final del Sistema Web/Móvil para Spa & Tienda de Mascotas
- SWEBOK v3.0 - Capítulo Requirements Engineering
- IEEE Std 830-1998

---

## 2. Análisis de Consistencia

### 2.1 Conflictos Identificados

#### Conflicto C-001: Persistencia vs. Restricción Técnica
**Requisitos en conflicto:**
- RNF-008: Los datos deben persistir usando localStorage
- RES-001: Solo frontend sin backend real

**Análisis:**
El uso de localStorage es compatible con la restricción de solo frontend. No hay conflicto real, pero se debe clarificar que la persistencia es limitada al navegador del usuario.

**Resolución:**
✅ Compatible. localStorage es parte del estándar del navegador y no requiere backend.

#### Conflicto C-002: Notificaciones vs. Capacidad Frontend
**Requisitos del documento original:**
- Notificaciones por correo/WhatsApp/SMS
- Restricción: Solo frontend

**Análisis:**
Las notificaciones automáticas requieren backend. El frontend solo puede generar enlaces pre-formateados.

**Resolución:**
✅ Resuelto mediante RF-011 (Pedido por mensajería): se generan enlaces que el usuario activa manualmente.

#### Conflicto C-003: Control de Inventario en Tiempo Real
**Requisitos relacionados:**
- RF-012: Descontar stock al realizar venta
- RES-004: Datos simulados mediante arrays

**Análisis:**
El descuento de stock es factible en memoria, pero se pierde al recargar sin localStorage.

**Resolución:**
✅ Implementar descuento en arrays + persistencia en localStorage. Funcionalidad limitada pero viable.

### 2.2 Ambigüedades Detectadas

#### Ambigüedad A-001: Capacidad por Groomer
**Requisito original:** "Capacidad por groomer limita el número de servicios simultáneos"

**Pregunta:** ¿Cuántos servicios simultáneos puede atender un groomer?

**Resolución:**
Se asume **1 servicio a la vez por groomer** para simplificar el MVP. Se validará solapamiento de horarios en base a duración del servicio.

#### Ambigüedad A-002: "Baño Completo" vs. Servicios
**Requisito original:** Servicios de 30, 60, 90 minutos

**Pregunta:** ¿Qué incluye cada tipo de servicio exactamente?

**Resolución:**
Se establecen 3 tipos estándar:
- **Baño Express (30 min):** baño + secado
- **Baño Completo (60 min):** baño + secado + corte de uñas + limpieza de oídos
- **Grooming Completo (90 min):** todo lo anterior + corte de pelo + perfume

#### Ambigüedad A-003: Checklist Mínimo
**Requisito RF-006:** "Debe requerir mínimo 5 items marcados para cerrar servicio"

**Pregunta:** ¿Qué sucede si el servicio contratado tiene menos de 5 items aplicables?

**Resolución:**
La validación de 5 items se aplica solo a "Grooming Completo". Para servicios más cortos, se requiere completar el 80% del checklist correspondiente.

### 2.3 Inconsistencias Resueltas

| ID | Inconsistencia | Resolución |
|---|---|---|
| I-001 | Duración ajustable por tamaño vs. slots fijos | Los slots se calculan dinámicamente: servicio base + factor de tamaño (+15-30%) |
| I-002 | "Vista operativa arrastrar/soltar" vs. alcance frontend simple | Función "arrastrar/soltar" se descarta para MVP; se implementa botón "Reprogramar" |
| I-003 | Integración con QR/POS vs. solo frontend | Se elimina integración real; se simula "registro de pago" manual |

---

## 3. Análisis de Completitud

### 3.1 Requisitos Faltantes Identificados

#### RF-019: Cancelación de Citas
**Justificación:** El sistema permite agendar pero no cancelar explícitamente.

**Descripción:** El sistema debe permitir cancelar una cita existente, liberando el slot horario y registrando el motivo de cancelación en el historial.

**Prioridad:** Should Have

#### RF-020: Búsqueda de Clientes/Mascotas
**Justificación:** Con muchos registros, será difícil encontrar clientes específicos.

**Descripción:** El sistema debe incluir campo de búsqueda para filtrar clientes por nombre, teléfono o nombre de mascota.

**Prioridad:** Should Have

#### RF-021: Validación de Datos
**Justificación:** Necesario para integridad de la información.

**Descripción:** El sistema debe validar:
- Formato de teléfono y email
- Fechas futuras para citas
- Campos obligatorios no vacíos
- Cantidades positivas en carrito

**Prioridad:** Must Have

#### RNF-009: Accesibilidad Básica
**Justificación:** Inclusión de usuarios con discapacidades.

**Descripción:** El sistema debe cumplir:
- Contraste mínimo WCAG 2.1 AA
- Navegación por teclado
- Etiquetas semánticas HTML5
- Alt text en imágenes

**Prioridad:** Should Have

### 3.2 Casos de Uso No Cubiertos

#### CU-NC-001: Edición de Cita Existente
**Descripción:** Modificar fecha, hora o servicio de una cita ya agendada.

**Solución:** Se incorpora como parte de RF-003 (extensión).

#### CU-NC-002: Notas Internas del Personal
**Descripción:** Agregar comentarios privados sobre clientes o mascotas.

**Decisión:** Se descarta para MVP. Se puede usar el campo "Observaciones" existente.

### 3.3 Matriz de Cobertura

| Caso de Uso | Requisitos que lo cubren | Estado |
|---|---|---|
| Agendar cita nueva | RF-003, RF-004, RF-013, RF-014, RF-021 | ✅ Completo |
| Realizar servicio grooming | RF-005, RF-006, RF-007, RF-008 | ✅ Completo |
| Vender producto | RF-009, RF-010, RF-012 | ✅ Completo |
| Generar pedido WhatsApp | RF-011 | ✅ Completo |
| Consultar historial | RF-015, RF-020 | ⚠️ Requiere RF-020 |
| Ver reportes | RF-016, RF-017, RF-018 | ✅ Completo |
| Cancelar cita | RF-019 | ⚠️ Requiere RF-019 |

---

## 4. Análisis de Factibilidad

### 4.1 Factibilidad Técnica

#### Evaluación por Módulo

**Módulo de Agenda (RF-001 a RF-004)**
- **Factibilidad:** ✅ Alta
- **Tecnología:** JavaScript Date API + arrays para gestión de slots
- **Complejidad:** Media
- **Riesgos:** Algoritmo de validación de solapamiento puede ser complejo
- **Estimación:** 3 días de desarrollo

**Módulo de Grooming (RF-005 a RF-008)**
- **Factibilidad:** ✅ Alta
- **Tecnología:** File API para carga de imágenes, objetos para checklist
- **Complejidad:** Media-Alta
- **Riesgos:** Almacenamiento de imágenes en localStorage (límite 5-10MB)
- **Estimación:** 3 días de desarrollo
- **Consideración:** Comprimir imágenes o limitar cantidad

**Módulo de Catálogo (RF-009 a RF-012)**
- **Factibilidad:** ✅ Alta
- **Tecnología:** Arrays para productos, cálculo de totales
- **Complejidad:** Baja-Media
- **Riesgos:** Ninguno significativo
- **Estimación:** 2 días de desarrollo

**Módulo de Clientes (RF-013 a RF-015, RF-020)**
- **Factibilidad:** ✅ Alta
- **Tecnología:** Arrays de objetos, filtrado con .filter()
- **Complejidad:** Baja
- **Riesgos:** Rendimiento con >100 clientes (mitigable)
- **Estimación:** 2 días de desarrollo

**Módulo de Reportes (RF-016 a RF-018)**
- **Factibilidad:** ✅ Media-Alta
- **Tecnología:** Reduce/map para agregaciones, Chart.js para gráficos
- **Complejidad:** Media
- **Riesgos:** Cálculos pueden ser costosos con muchos datos
- **Estimación:** 2 días de desarrollo

### 4.2 Factibilidad Operacional

#### Usabilidad para Usuarios Objetivo
- **Personal de recepción:** ✅ Factible - interfaz simple de 2-3 clics
- **Groomers:** ✅ Factible - checklist visual y carga de fotos desde móvil
- **Administrador:** ✅ Factible - configuración mediante formularios

#### Curva de Aprendizaje
- **Estimada:** < 30 minutos para tareas básicas
- **Soporte:** Manual de usuario + tooltips en interfaz

### 4.3 Factibilidad Temporal

**Plan de 2 Semanas (10 días laborables)**

| Día | Módulo/Actividad | Requisitos | Horas |
|---|---|---|---|
| 1-2 | Estructura base + Clientes/Mascotas | RF-013, RF-014, RF-021 | 16h |
| 3-4 | Agenda y Slots | RF-001, RF-002, RF-003, RF-004 | 16h |
| 5-6 | Ficha de Grooming | RF-005, RF-006, RF-007, RF-008 | 16h |
| 7-8 | Catálogo y Carrito | RF-009, RF-010, RF-011, RF-012 | 16h |
| 9 | Reportes Básicos | RF-016, RF-017 | 8h |
| 10 | Testing, Ajustes, Deploy | Todos | 8h |

**Evaluación:** ✅ Factible con priorización estricta de Must Have.

**Requisitos descartados para MVP:**
- RF-001 (configuración avanzada) → simplificar
- RF-018 (reportes detallados) → solo básicos
- RNF-009 (accesibilidad completa) → solo esencial

### 4.4 Factibilidad Económica

**Costos del Proyecto:**
- Desarrollo: 0 USD (proyecto académico)
- Hosting: 0 USD (GitHub Pages gratuito)
- Herramientas: 0 USD (tecnologías web nativas)

**Evaluación:** ✅ Factible - sin costos asociados.

---

## 5. Análisis de Dependencias

### 5.1 Matriz de Dependencias entre Requisitos

```
RF-003 (Agendar cita)
  ├─ DEPENDE DE → RF-013 (Gestión de clientes)
  ├─ DEPENDE DE → RF-014 (Gestión de mascotas)
  ├─ DEPENDE DE → RF-002 (Gestión de servicios)
  └─ DEPENDE DE → RF-021 (Validación de datos)

RF-005 (Ficha de servicio)
  ├─ DEPENDE DE → RF-003 (Cita existente)
  └─ REQUIERE → RF-006 (Checklist)

RF-008 (Cierre de servicio)
  ├─ DEPENDE DE → RF-006 (Checklist completado)
  └─ ACTUALIZA → RF-015 (Historial)

RF-010 (Carrito)
  ├─ DEPENDE DE → RF-009 (Catálogo de productos)
  └─ ALIMENTA A → RF-011 (Pedido mensajería)

RF-015 (Historial)
  ├─ DEPENDE DE → RF-008 (Servicios cerrados)
  └─ DEPENDE DE → RF-007 (Fotos guardadas)

RF-016, RF-017, RF-018 (Reportes)
  ├─ DEPENDEN DE → RF-003 (Datos de citas)
  └─ DEPENDEN DE → RF-010 (Datos de ventas)
```

### 5.2 Orden de Implementación Recomendado

**Fase 1 - Base (Días 1-2):**
1. RF-021 (Validación)
2. RF-013 (Clientes)
3. RF-014 (Mascotas)
4. RNF-008 (Persistencia localStorage)

**Fase 2 - Agenda (Días 3-4):**
5. RF-002 (Servicios)
6. RF-004 (Visualización de agenda)
7. RF-003 (Agendamiento)
8. RF-019 (Cancelación)

**Fase 3 - Grooming (Días 5-6):**
9. RF-005 (Ficha de servicio)
10. RF-006 (Checklist)
11. RF-007 (Fotos)
12. RF-008 (Cierre)
13. RF-015 (Historial)

**Fase 4 - Tienda (Días 7-8):**
14. RF-009 (Catálogo)
15. RF-010 (Carrito)
16. RF-011 (Pedido mensajería)
17. RF-012 (Control de inventario)

**Fase 5 - Reportes (Día 9):**
18. RF-016 (Reporte de citas)
19. RF-017 (Reporte de ocupación)

**Fase 6 - Finalización (Día 10):**
20. RF-020 (Búsqueda)
21. Testing integral
22. Ajustes de UI/UX
23. Deploy

---

## 6. Análisis de Riesgos Técnicos

### 6.1 Riesgos Críticos

#### RT-001: Límite de localStorage
**Descripción:** localStorage tiene límite de 5-10MB según navegador.

**Probabilidad:** Alta  
**Impacto:** Alto (bloquea carga de fotos extensiva)

**Mitigación:**
- Comprimir imágenes a max 200KB antes de guardar
- Limitar a 2 fotos por servicio
- Implementar alerta cuando se alcance 80% del límite
- Ofrecer botón "Exportar datos" para liberar espacio

**Estado:** ⚠️ Requiere implementación cuidadosa

#### RT-002: Validación de Solapamiento de Horarios
**Descripción:** Algoritmo complejo para evitar doble booking.

**Probabilidad:** Media  
**Impacto:** Alto (puede permitir sobreagendamiento)

**Mitigación:**
- Función dedicada para validar disponibilidad
- Testing exhaustivo de casos límite
- Usar librería date-fns o Luxon si es necesario

**Estado:** ⚠️ Prioridad en testing

#### RT-003: Pérdida de Datos en Producción
**Descripción:** El usuario puede borrar caché y perder todo.

**Probabilidad:** Baja-Media  
**Impacto:** Crítico

**Mitigación:**
- Función "Exportar a JSON" visible y accesible
- Advertencia al borrar datos desde la interfaz
- Cargar datos de ejemplo al inicio si localStorage está vacío

**Estado:** ✅ Mitigable

### 6.2 Riesgos Moderados

#### RT-004: Rendimiento con Muchos Datos
**Probabilidad:** Media  
**Impacto:** Medio

**Mitigación:**
- Paginación en listas largas
- Lazy loading de imágenes
- Índices en memoria para búsquedas

#### RT-005: Compatibilidad con Navegadores Antiguos
**Probabilidad:** Baja  
**Impacto:** Medio

**Mitigación:**
- Usar polyfills para APIs modernas
- Declarar requisitos mínimos (Chrome 90+, Firefox 88+, Safari 14+)

### 6.3 Matriz de Riesgos

| ID | Riesgo | Prob. | Impacto | Prioridad | Mitigación |
|---|---|---|---|---|---|
| RT-001 | Límite localStorage | Alta | Alto | 🔴 Crítica | Compresión + límites |
| RT-002 | Algoritmo solapamiento | Media | Alto | 🟠 Alta | Testing + validación |
| RT-003 | Pérdida de datos | Media | Crítico | 🔴 Crítica | Exportación + backup |
| RT-004 | Rendimiento | Media | Medio | 🟡 Media | Paginación + lazy load |
| RT-005 | Compatibilidad | Baja | Medio | 🟢 Baja | Polyfills + requisitos |

---

## 7. Modelo Conceptual

### 7.1 Entidades Principales

```
Cliente {
  id: string
  nombre: string
  telefono: string
  email: string
  fechaRegistro: Date
  mascotas: [Mascota]
}

Mascota {
  id: string
  nombre: string
  raza: string
  edad: number
  tamaño: "pequeño" | "mediano" | "grande"
  temperamento: string
  alergias: [string]
  vacunas: [string]
  clienteId: string
  historial: [ServicioRealizado]
  fotos: [Foto]
}

Groomer {
  id: string
  nombre: string
  especialidad: string
  horarioInicio: string (HH:mm)
  horarioFin: string (HH:mm)
  diasLaborables: [number] (0=Dom, 1=Lun...)
}

Servicio {
  id: string
  nombre: string
  duracion: number (minutos)
  precio: number
  checklist: [string]
}

Cita {
  id: string
  fecha: Date
  horaInicio: string
  mascotaId: string
  servicioId: string
  groomerId: string
  estado: "pendiente" | "en_proceso" | "completada" | "cancelada"
  fichaServicio?: FichaServicio
}

FichaServicio {
  citaId: string
  estadoInicial: string
  observaciones: string
  checklistCompletado: [boolean]
  fotos: [Foto]
  recomendaciones: string
  fechaCierre: Date
}

Producto {
  id: string
  nombre: string
  categoria: string
  precio: number
  stock: number
  variantes: [Variante]
  imagen?: string
}

Variante {
  nombre: string (ej: "1kg", "Lavanda")
  precioExtra: number
}

ItemCarrito {
  productoId: string
  varianteSeleccionada?: string
  cantidad: number
  subtotal: number
}

Venta {
  id: string
  fecha: Date
  items: [ItemCarrito]
  total: number
  metodoPago: string
}
```

### 7.2 Relaciones Clave

```
Cliente 1 ──< N Mascota
Mascota 1 ──< N Cita
Mascota 1 ──< N ServicioRealizado
Cita N ──> 1 Servicio
Cita N ──> 1 Groomer
Cita 1 ──< 1 FichaServicio (opcional)
Producto 1 ──< N ItemCarrito
```

### 7.3 Reglas de Negocio Derivadas

**RN-001: Validación de Disponibilidad**
```
PARA cada cita nueva:
  1. Obtener duración del servicio
  2. Calcular factor de tamaño de mascota (pequeño: +0%, mediano: +15%, grande: +30%)
  3. Duración total = duración base × (1 + factor tamaño)
  4. Validar que groomer no tenga otra cita en ese rango horario
  5. Validar que esté dentro del horario laboral del groomer
```

**RN-002: Cierre de Ficha**
```
SI servicio es "Grooming Completo":
  Requerir mínimo 5 items del checklist marcados
SINO SI servicio es "Baño Completo":
  Requerir mínimo 4 items marcados
SINO:
  Requerir mínimo 2 items marcados

SIEMPRE:
  - Guardar recomendaciones en historial de mascota
  - Actualizar estado de cita a "completada"
  - Registrar fecha y hora de cierre
```

**RN-003: Control de Stock**
```
AL agregar producto al carrito:
  VALIDAR stock disponible >= cantidad solicitada

AL finalizar venta:
  PARA cada item del carrito:
    producto.stock -= item.cantidad
    SI producto.stock < 5:
      MOSTRAR alerta "Stock bajo"
```

**RN-004: Cálculo de Ocupación**
```
Ocupación del groomer = (Horas ocupadas / Horas disponibles) × 100

Horas ocupadas = Σ (duración de cada cita completada o en proceso)
Horas disponibles = (horarioFin - horarioInicio) × días laborables
```

---

## 8. Trazabilidad

### 8.1 Matriz de Trazabilidad Requisitos → Funcionalidades

| Requisito | Módulo UI | Función JS Principal | Entidades |
|---|---|---|---|
| RF-003 | FormularioAgendamiento | crearCita() | Cita, Mascota, Servicio, Groomer |
| RF-004 | CalendarioSemanal | obtenerCitasPorFecha() | Cita, Groomer |
| RF-006 | ChecklistServicio | actualizarChecklist() | FichaServicio, Servicio |
| RF-007 | GaleriaFotos | subirFoto(), comprimirImagen() | Foto, Mascota |
| RF-010 | Carrito | agregarAlCarrito(), calcularTotal() | ItemCarrito, Producto |
| RF-011 | BotonWhatsApp | generarMensajeWhatsApp() | ItemCarrito |
| RF-013 | FormularioCliente | crearCliente(), buscarCliente() | Cliente |
| RF-016 | Dashboard | generarReporteCitas() | Cita, Servicio |
| RF-021 | Validador | validarEmail(), validarTelefono() | Todas |

### 8.2 Trazabilidad Requisitos → Casos de Uso

| Caso de Uso | Requisitos Involucrados |
|---|---|
| CU-01: Registrar Cliente Nuevo | RF-013, RF-014, RF-021, RNF-008 |
| CU-02: Agendar Cita | RF-003, RF-004, RF-002, RF-021, RN-001 |
| CU-03: Realizar Servicio Grooming | RF-005, RF-006, RF-007, RF-008, RN-002 |
| CU-04: Vender Producto | RF-009, RF-010, RF-012, RF-021, RN-003 |
| CU-05: Enviar Pedido WhatsApp | RF-011, RF-010 |
| CU-06: Consultar Historial | RF-015, RF-020, RF-013, RF-014 |
| CU-07: Ver Reporte de Ocupación | RF-017, RF-004, RN-004 |
| CU-08: Cancelar Cita | RF-019, RF-003, RF-015 |

---

## 9. Criterios de Aceptación Refinados

### 9.1 Módulo de Agenda

**CA-001: Validación de Solapamiento**
```
DADO que existe una cita de 60 min a las 10:00
CUANDO intento agendar otra cita para el mismo groomer a las 10:30
ENTONCES el sistema debe rechazar la cita
Y mostrar mensaje "El groomer no está disponible en ese horario"
```

**CA-002: Ajuste por Tamaño de Mascota**
```
DADO un servicio de "Baño Completo" con duración base de 60 min
CUANDO selecciono una mascota de tamaño "grande"
ENTONCES la duración calculada debe ser 78 minutos (60 × 1.30)
Y debe bloquear slots hasta las HH:mm + 78 minutos
```

### 9.2 Módulo de Grooming

**CA-003: Checklist Obligatorio**
```
DADO un servicio "Grooming Completo" con checklist de 8 items
CUANDO intento cerrar la ficha con solo 3 items marcados
ENTONCES el sistema debe bloquear el cierre
Y mostrar mensaje "Debe completar al menos 5 items del checklist"
```

**CA-004: Compresión de Imágenes**
```
DADO que subo una foto de 2MB
CUANDO la imagen se procesa
ENTONCES debe comprimirse automáticamente a menos de 200KB
Y mostrarse la imagen comprimida en la galería
```

### 9.3 Módulo de Catálogo

**CA-005: Control de Stock**
```
DADO un producto con stock de 3 unidades
CUANDO intento agregar 5 unidades al carrito
ENTONCES el sistema debe rechazar la acción
Y mostrar mensaje "Stock insuficiente (disponible: 3)"
```

**CA-006: Generación de Mensaje WhatsApp**
```
DADO un carrito con 2 productos: "Alimento 3kg" (2 unid.) y "Shampoo Lavanda" (1 unid.)
CUANDO presiono "Enviar pedido por WhatsApp"
ENTONCES debe generarse un enlace con formato:
"https://wa.me/?text=*Pedido Spa Mascotas*%0A
- Alimento 3kg (x2): Bs. 120.00%0A
- Shampoo Lavanda (x1): Bs. 35.00%0A
*Total: Bs. 155.00*"
```

### 9.4 Módulo de Reportes

**CA-007: Cálculo de Ocupación**
```
DADO un groomer con horario 9:00-18:00 (9 horas) en un día
Y tiene 3 citas: 60 min, 90 min, 30 min (total: 180 min = 3 horas)
CUANDO genero el reporte de ocupación
ENTONCES debe mostrar: "33.33% de ocupación (3/9 horas)"
```

---

## 10. Restricciones y Limitaciones Aceptadas

### 10.1 Limitaciones Técnicas Conocidas

**L-001: Pérdida de Datos**
Si el usuario borra el caché del navegador, se pierden todos los datos. Se mitiga con función de exportación, pero no se garantiza persistencia total.

**L-002: Sin Sincronización Multi-dispositivo**
Los datos están locales al navegador. Un usuario en dos dispositivos verá información diferente.

**L-003: Sin Notificaciones Automáticas**
No se enviarán recordatorios automáticos. El personal debe usar los enlaces generados manualmente.

**L-004: Sin Integración Real con WhatsApp API**
Solo se generan enlaces `wa.me` que abren WhatsApp Web/App con mensaje pre-llenado. El usuario debe confirmar el envío.

**L-005: Capacidad Limitada de Imágenes**
Máximo 2 fotos por servicio debido a límites de localStorage.

### 10.2 Simplificaciones Asumidas

**S-001: Un Groomer = Un Servicio Simultáneo**
No se permite que un groomer atienda múltiples mascotas al mismo tiempo.

**S-002: Sin Autenticación Real**
No hay login/logout. Cualquiera con acceso al navegador puede modificar datos.

**S-003: Horarios Fijos**
El horario del groomer no varía por día de la semana (simplificación del MVP).

**S-004: Sin Sistema de Roles**
No se distingue entre administrador, recepción y groomer en la interfaz (todos ven todo).

### 10.3 Supuestos Aceptados

**A-001:** El personal usará el sistema desde un único dispositivo compartido (computadora de recepción).

**A-002:** El volumen de datos será manejable (< 100 clientes, < 500 citas históricas).

**A-003:** Las fotos serán tomadas desde móvil y transferidas manualmente al sistema.

**A-004:** Los precios y servicios no cambiarán frecuentemente.

---

## 11. Conclusiones del Análisis

### 11.1 Estado de los Requisitos

- **Total de requisitos analizados:** 21 (18 funcionales + 3 no funcionales principales)
- **Requisitos factibles:** 21 (100%)
- **Requisitos con dependencias críticas:** 8
- **Riesgos críticos identificados:** 3
- **Conflictos resueltos:** 3
- **Ambigüedades clarificadas:** 3

### 11.2 Recomendaciones para la Implementación

**R-001: Priorizar Persistencia Robusta**
Implementar localStorage desde el día 1 con función de exportación/importación JSON. Es crítico para la viabilidad del sistema.

**R-002: Testing Exhaustivo de Algoritmo de Slots**
Dedicar tiempo extra (4-6 horas) para probar validación de horarios con casos límite: medianoche, servicios que cruzan día, cambios de horario de verano, etc.

**R-003: Implementar Compresión de Imágenes**
Usar Canvas API para redimensionar fotos a 800×600 px máximo y comprimir a JPEG 0.7 calidad antes de guardar en localStorage.

**R-004: Diseño Mobile-First**
Dado que groomers usarán desde tablet/móvil, diseñar primero para pantallas pequeñas y luego escalar a desktop.

**R-005: Datos de Demostración**
Incluir dataset de ejemplo (5 clientes, 10 mascotas, 3 groomers, 15 productos, 20 citas) para facilitar pruebas y demostración.

### 11.3 Riesgos No Mitigados

**RNM-001: Concurrencia**
Si dos usuarios usan el sistema simultáneamente en diferentes navegadores, no habrá sincronización. Solo es viable para uso de un único equipo/navegador.

**Recomendación:** Documentar claramente esta limitación y sugerir uso de un solo dispositivo compartido.

**RNM-002: Límite de Datos a Largo Plazo**
Después de 6-12 meses, el localStorage puede llenarse. 

**Recomendación:** Implementar función "Archivar datos antiguos" que exporte y elimine registros de más de 6 meses.

### 11.4 Métricas de Éxito

Para considerar el proyecto exitoso, debe cumplir:

1. ✅ **Funcionalidad Core:** Agendar, realizar servicio, vender producto (RF-003, RF-006, RF-010)
2. ✅ **Usabilidad:** Completar agendamiento en máximo 3 clics
3. ✅ **Persistencia:** Datos sobreviven al cierre del navegador
4. ✅ **Responsive:** Funciona correctamente en móvil (320px+), tablet y desktop
5. ✅ **Desempeño:** Carga inicial < 2 segundos, búsquedas instantáneas
6. ✅ **Código:** Modular, comentado, funciones < 50 líneas

### 11.5 Plan de Validación

**Validación de Requisitos Funcionales:**
- Testing manual de cada caso de uso
- Pruebas con datos de ejemplo
- Validación de cálculos (ocupación, totales)

**Validación de Requisitos No Funcionales:**
- Test de rendimiento con 100+ registros
- Test en 3 navegadores diferentes
- Test en 3 tamaños de pantalla

**Criterios de Rechazo:**
- Pérdida de datos sin advertencia
- Permitir doble booking
- Interfaz no responsive
- Cálculos erróneos en totales/reportes

---

## 12. Aprobación y Próximos Pasos

### 12.1 Cambios vs. Elicitación

| Aspecto | Elicitación Original | Análisis Refinado |
|---|---|---|
| Notificaciones automáticas | Incluidas | Excluidas (solo enlaces manuales) |
| Múltiples servicios/groomer | Mencionado | Simplificado a 1 servicio/vez |
| Sistema de roles | 3 roles definidos | Simplificado a vista única |
| Fotos ilimitadas | Sin límite | Máximo 2 por servicio |
| Arrastrar/soltar agenda | Incluido | Excluido (botón reprogramar) |

### 12.2 Artefactos Generados

1. ✅ Modelo conceptual de entidades
2. ✅ Reglas de negocio formalizadas
3. ✅ Matriz de dependencias
4. ✅ Criterios de aceptación refinados
5. ✅ Plan de mitigación de riesgos
6. ✅ Matriz de trazabilidad

### 12.3 Documentos Pendientes

- ⏳ Especificación de Requisitos Software (SRS) → Siguiente fase
- ⏳ Diseño de arquitectura frontend
- ⏳ Wireframes de interfaz de usuario
- ⏳ Plan de testing detallado

### 12.4 Aprobación

Este documento de análisis de requisitos ha sido elaborado siguiendo:
- ✅ SWEBOK v3.0 - Software Requirements Analysis
- ✅ IEEE Std 830-1998 - Software Requirements Specifications
- ✅ ISO/IEC/IEEE 29148:2018 - Requirements Engineering

**Estado:** APROBADO para proceder a fase de Especificación (SRS)

**Fecha de análisis:** Diciembre 2025  
**Analista:** Sistema de Ingeniería de Requisitos  
**Revisión:** v1.0

---

## Anexo A: Glosario de Términos

| Término | Definición |
|---|---|
| **Groomer** | Profesional que realiza servicios de estética y cuidado de mascotas |
| **Slot** | Espacio de tiempo disponible en la agenda para agendar un servicio |
| **Checklist** | Lista de verificación de tareas a realizar durante el servicio |
| **localStorage** | API del navegador para almacenar datos persistentes localmente |
| **PWA** | Progressive Web App - aplicación web con capacidades de app nativa |
| **MVP** | Minimum Viable Product - producto mínimo viable |
| **MoSCoW** | Técnica de priorización (Must/Should/Could/Won't have) |
| **RN** | Regla de Negocio |
| **CA** | Criterio de Aceptación |

## Anexo B: Referencias

1. SWEBOK v3.0 - Chapter 1: Software Requirements
2. IEEE Std 830-1998 - IEEE Recommended Practice for Software Requirements Specifications
3. ISO/IEC/IEEE 29148:2018 - Systems and software engineering - Life cycle processes - Requirements engineering
4. BABOK v3 - Business Analysis Body of Knowledge
5. MDN Web Docs - Web Storage API
6. W3C - Web Content Accessibility Guidelines (WCAG) 2.1

---

**FIN DEL DOCUMENTO DE ANÁLISIS DE REQUISITOS**
