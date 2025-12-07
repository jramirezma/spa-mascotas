# Documento de Elicitación de Requisitos
## Sistema Web para Spa & Tienda de Mascotas

**Versión:** 1.0  
**Fecha:** Diciembre 2025  
**Proyecto:** Sistema de Gestión para Spa y Tienda de Mascotas  
**Alcance:** Frontend Web (MVP)

---

## 1. Información del Proyecto

### 1.1 Contexto
Sistema web frontend para gestionar operaciones de un spa de mascotas con tienda integrada. El sistema permitirá la gestión de citas, servicios de grooming, catálogo de productos y seguimiento de clientes.

### 1.2 Restricciones del Proyecto
- **Tecnología:** Solo frontend (HTML, CSS, JavaScript)
- **Almacenamiento:** Arrays y objetos en memoria (sin backend)
- **Tiempo:** 2 semanas de desarrollo
- **Despliegue:** GitHub Pages, Netlify o Vercel

---

## 2. Stakeholders Identificados

### 2.1 Stakeholders Primarios
1. **Administrador del Spa**
   - Necesita: configurar servicios, precios, horarios y groomers
   - Expectativa: control total del sistema

2. **Personal de Recepción**
   - Necesita: agendar citas, gestionar cobros, confirmar servicios
   - Expectativa: interfaz rápida y simple (2-3 clics)

3. **Groomer (Estilista)**
   - Necesita: ver su agenda, registrar servicios realizados, agregar fotos
   - Expectativa: acceso móvil, checklist claro

### 2.2 Stakeholders Secundarios
1. **Clientes del Spa**
   - Necesita: consultar disponibilidad (futura implementación)
   - Expectativa: proceso simple de agendamiento

2. **Estudiante/Desarrollador**
   - Necesita: cumplir requisitos académicos
   - Expectativa: código claro, funcional y bien documentado

---

## 3. Técnicas de Elicitación Utilizadas

### 3.1 Análisis de Documentación
- **Fuente:** Informe Final del Sistema (documento proporcionado)
- **Información obtenida:** módulos funcionales, reglas de negocio, entidades de datos

### 3.2 Análisis de Dominio
- **Sector:** Servicios de cuidado animal (pet grooming)
- **Operaciones típicas:** agendamiento, registro de servicios, venta de productos

### 3.3 Casos de Uso Implícitos
Identificados a partir del análisis del documento:
- Gestión de disponibilidad horaria
- Registro de fichas de grooming
- Proceso de compra/pedido
- Generación de reportes básicos

---

## 4. Requisitos Funcionales Elicitados

### 4.1 Módulo de Agenda y Disponibilidad

**RF-001:** Configuración de Groomers
- El sistema debe permitir registrar groomers con nombre y especialidad
- Cada groomer debe tener horario de disponibilidad configurable

**RF-002:** Gestión de Servicios
- El sistema debe permitir definir tipos de servicio (baño rápido, baño completo, etc.)
- Cada servicio debe tener duración asignada (30, 60, 90 minutos)
- Se debe poder configurar precio por servicio

**RF-003:** Agendamiento de Citas
- El sistema debe mostrar slots horarios disponibles según groomer y servicio
- Debe validar que no haya solapamiento de horarios
- Debe registrar: fecha, hora, mascota, servicio, groomer asignado

**RF-004:** Visualización de Agenda
- El sistema debe mostrar vista diaria/semanal de citas
- Debe indicar estado de cada cita (pendiente, en proceso, completada)
- Debe mostrar ocupación por groomer

### 4.2 Módulo de Gestión de Grooming

**RF-005:** Ficha de Servicio
- El sistema debe permitir crear ficha al inicio del servicio
- Debe registrar: estado inicial de la mascota, raza, tamaño, temperamento
- Debe incluir campo de observaciones

**RF-006:** Checklist de Servicio
- El sistema debe mostrar checklist estándar (baño, corte, uñas, oídos, etc.)
- Debe permitir marcar items completados
- Debe requerir mínimo 5 items marcados para cerrar servicio

**RF-007:** Galería de Fotos
- El sistema debe permitir cargar fotos antes/después del servicio
- Las fotos deben quedar asociadas a la mascota
- Debe mostrar historial fotográfico por mascota

**RF-008:** Cierre de Servicio
- El sistema debe registrar recomendaciones post-servicio
- Debe actualizar historial de la mascota
- Debe cambiar estado de cita a "completada"

### 4.3 Módulo de Catálogo y Ventas

**RF-009:** Gestión de Productos
- El sistema debe permitir registrar productos con categorías
- Debe soportar variantes simples (tamaño, peso, fragancia)
- Debe incluir precio y stock disponible

**RF-010:** Carrito de Compras
- El sistema debe permitir agregar productos al carrito
- Debe calcular subtotal automáticamente
- Debe mostrar resumen de items seleccionados

**RF-011:** Pedido por Mensajería
- El sistema debe generar mensaje preformateado con items y total
- Debe crear enlace para WhatsApp o Telegram
- El mensaje debe incluir detalle de productos y cantidades

**RF-012:** Control de Inventario
- El sistema debe descontar stock al realizar venta
- Debe mostrar alerta cuando stock sea bajo (< 5 unidades)
- Debe evitar venta sin stock disponible

### 4.4 Módulo de Clientes y Mascotas

**RF-013:** Gestión de Clientes
- El sistema debe registrar datos del cliente (nombre, teléfono, email)
- Debe permitir consultar historial del cliente
- Debe mostrar todas las mascotas asociadas

**RF-014:** Gestión de Mascotas
- El sistema debe registrar datos de mascota (nombre, raza, edad, tamaño)
- Debe incluir información médica relevante (alergias, vacunas)
- Debe asociar mascota con dueño/cliente

**RF-015:** Historial de Servicios
- El sistema debe mantener registro de servicios realizados
- Debe mostrar fechas, servicios, groomers y observaciones
- Debe incluir galería de fotos históricas

### 4.5 Módulo de Reportes

**RF-016:** Reporte de Citas
- El sistema debe generar reporte diario de citas por groomer
- Debe mostrar cantidad de citas por tipo de servicio
- Debe permitir filtrar por fecha

**RF-017:** Reporte de Ocupación
- El sistema debe calcular % de ocupación por groomer
- Debe mostrar franjas horarias más utilizadas
- Debe comparar capacidad vs. citas agendadas

**RF-018:** Reporte de Ventas
- El sistema debe mostrar ticket promedio por día
- Debe listar productos más vendidos
- Debe calcular ingresos estimados (servicios + productos)

---

## 5. Requisitos No Funcionales Elicitados

### 5.1 Usabilidad

**RNF-001:** Interfaz Intuitiva
- El flujo para agendar una cita no debe exceder 3 pasos
- Los botones principales deben ser claramente identificables
- El sistema debe proporcionar retroalimentación visual de acciones

**RNF-002:** Diseño Responsive
- La interfaz debe adaptarse a dispositivos móviles, tabletas y escritorio
- Los elementos interactivos deben ser táctiles en móviles
- Las fuentes deben ser legibles en pantallas pequeñas

### 5.2 Rendimiento

**RNF-003:** Tiempo de Carga
- La página principal debe cargar en menos de 2 segundos
- Las transiciones entre secciones deben ser fluidas
- La búsqueda de elementos debe responder instantáneamente

**RNF-004:** Gestión de Datos
- El sistema debe manejar hasta 100 clientes sin degradación
- Debe soportar hasta 50 productos en catálogo
- Debe mantener historial de últimos 30 días

### 5.3 Compatibilidad

**RNF-005:** Navegadores Soportados
- Debe funcionar en Chrome, Firefox, Safari y Edge (últimas 2 versiones)
- Debe ser compatible con dispositivos iOS y Android

### 5.4 Mantenibilidad

**RNF-006:** Código Limpio
- El código JavaScript debe estar modularizado
- Las funciones deben tener nombres descriptivos
- El CSS debe usar metodología BEM o similar

**RNF-007:** Documentación
- El código debe incluir comentarios explicativos
- Debe existir archivo README con instrucciones de uso
- Las funciones principales deben estar documentadas

### 5.5 Persistencia

**RNF-008:** Almacenamiento Local
- Los datos deben persistir usando localStorage
- Debe haber función de respaldo/exportación de datos
- Los datos deben sobrevivir al cierre del navegador

---

## 6. Restricciones Técnicas

### 6.1 Restricciones de Implementación
- **RES-001:** Solo frontend (HTML, CSS, JavaScript vanilla)
- **RES-002:** No se utilizará framework JavaScript (React, Vue, Angular)
- **RES-003:** No se implementará backend real
- **RES-004:** Datos simulados mediante arrays y objetos

### 6.2 Restricciones de Despliegue
- **RES-005:** Debe ser desplegable en GitHub Pages
- **RES-006:** Debe incluir repositorio público en GitHub
- **RES-007:** Estructura de carpetas: /css, /js, /imagenes + index.html

### 6.3 Restricciones de Tiempo
- **RES-008:** Desarrollo máximo de 2 semanas
- **RES-009:** Priorización: agenda > grooming > catálogo > reportes

---

## 7. Suposiciones y Dependencias

### 7.1 Suposiciones
- **SUP-001:** El personal tiene acceso a computadora o tablet
- **SUP-002:** Existe conexión a internet para despliegue
- **SUP-003:** Los usuarios tienen conocimientos básicos de navegación web
- **SUP-004:** No se requiere autenticación real en esta versión

### 7.2 Dependencias
- **DEP-001:** Navegador web moderno con soporte de localStorage
- **DEP-002:** GitHub para hosting del repositorio
- **DEP-003:** Plataforma de despliegue gratuita (GitHub Pages/Netlify/Vercel)

---

## 8. Riesgos Identificados

### 8.1 Riesgos Técnicos
- **RISK-001:** Pérdida de datos al no tener backend real
  - *Mitigación:* Implementar localStorage y función de exportación

- **RISK-002:** Limitaciones de rendimiento con muchos datos
  - *Mitigación:* Optimizar algoritmos de búsqueda y filtrado

### 8.2 Riesgos de Alcance
- **RISK-003:** Funcionalidades muy complejas para 2 semanas
  - *Mitigación:* Priorizar MVP con funciones esenciales

- **RISK-004:** Expectativas de integración real con WhatsApp
  - *Mitigación:* Clarificar que solo genera enlaces predefinidos

---

## 9. Priorización de Requisitos (MoSCoW)

### 9.1 Must Have (Debe tener)
- RF-003: Agendamiento de citas
- RF-004: Visualización de agenda
- RF-006: Checklist de servicio
- RF-013: Gestión de clientes
- RF-014: Gestión de mascotas
- RF-009: Gestión de productos
- RF-010: Carrito de compras

### 9.2 Should Have (Debería tener)
- RF-005: Ficha de servicio completa
- RF-007: Galería de fotos
- RF-011: Pedido por mensajería
- RF-015: Historial de servicios
- RF-016: Reporte de citas
- RF-017: Reporte de ocupación

### 9.3 Could Have (Podría tener)
- RF-001: Configuración avanzada de groomers
- RF-012: Control automático de inventario
- RF-018: Reportes detallados de ventas

### 9.4 Won't Have (No tendrá en esta versión)
- Autenticación de usuarios
- Integración real con APIs externas
- Sistema de pagos online
- Notificaciones automáticas (correo/SMS)
- Base de datos real

---

## 10. Conclusiones de la Elicitación

### 10.1 Resumen
Se han identificado 18 requisitos funcionales y 8 requisitos no funcionales para el sistema MVP. El enfoque está en crear una herramienta funcional de gestión operativa para el spa de mascotas, con énfasis en usabilidad y simplicidad de implementación.

### 10.2 Próximos Pasos
1. Análisis detallado de requisitos
2. Elaboración de especificación SRS
3. Diseño de arquitectura frontend
4. Planificación de sprint de desarrollo

---

**Documento elaborado conforme a:**
- IEEE Std 830-1998 (Software Requirements Specifications)
- SWEBOK v3.0 (Software Engineering Body of Knowledge)
- ISO/IEC/IEEE 29148:2018 (Requirements Engineering)
