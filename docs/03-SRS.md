# Especificación de Requisitos Software (SRS)
## Sistema Web para Spa & Tienda de Mascotas

**Versión:** 1.0  
**Fecha:** Diciembre 2025  
**Estado:** Aprobado  
**Clasificación:** Proyecto Académico - Público

---

## Control de Versiones

| Versión | Fecha | Autor | Descripción de Cambios |
|---------|-------|-------|------------------------|
| 1.0 | Dic 2025 | Equipo de Desarrollo | Versión inicial aprobada |

---

## Tabla de Contenido

1. [Introducción](#1-introducción)
2. [Descripción General](#2-descripción-general)
3. [Requisitos de Interfaces Externas](#3-requisitos-de-interfaces-externas)
4. [Requisitos Funcionales](#4-requisitos-funcionales)
5. [Requisitos No Funcionales](#5-requisitos-no-funcionales)
6. [Otros Requisitos](#6-otros-requisitos)
7. [Apéndices](#7-apéndices)

---

## 1. Introducción

### 1.1 Propósito

Este documento especifica los requisitos software para el Sistema Web de Gestión de Spa y Tienda de Mascotas. Está dirigido a:

- **Desarrolladores:** Para guiar la implementación
- **Evaluadores:** Para validar el cumplimiento de requisitos
- **Usuarios finales:** Como referencia de funcionalidades esperadas
- **Mantenedores:** Para futuras extensiones del sistema

### 1.2 Alcance del Producto

**Nombre del Sistema:** Sistema Web Spa Mascotas (SWSM)

**Descripción:**
El SWSM es una aplicación web frontend que permite gestionar las operaciones diarias de un spa de mascotas con tienda integrada. El sistema incluye:

- Gestión de agenda con disponibilidad por groomer
- Registro detallado de servicios de grooming con checklist y fotos
- Catálogo de productos con carrito de compras
- Gestión de clientes y mascotas con historial completo
- Generación de reportes de ocupación y ventas

**Beneficios esperados:**
- Reducción de 60% en tiempo de coordinación de citas
- Estandarización del servicio mediante checklists
- Mejora del 25% en ticket promedio mediante venta cruzada
- Disponibilidad de reportes en tiempo real

**Objetivos:**
- Digitalizar la gestión de agenda y servicios
- Centralizar información de clientes y mascotas
- Facilitar ventas de productos con pedidos por mensajería
- Proporcionar métricas de ocupación y rendimiento

### 1.3 Definiciones, Acrónimos y Abreviaciones

| Término | Definición |
|---------|------------|
| **Groomer** | Profesional especializado en estética y cuidado de mascotas |
| **Slot** | Intervalo de tiempo disponible en la agenda para agendar un servicio |
| **Checklist** | Lista de verificación de procedimientos realizados en un servicio |
| **Ficha de servicio** | Documento digital que registra el servicio completo realizado a una mascota |
| **localStorage** | API de almacenamiento persistente del navegador (límite ~5-10MB) |
| **SPA** | Single Page Application (no confundir con Spa de mascotas) |
| **PWA** | Progressive Web App - aplicación web con características nativas |
| **MVP** | Minimum Viable Product - producto mínimo viable |
| **RF** | Requisito Funcional |
| **RNF** | Requisito No Funcional |
| **RN** | Regla de Negocio |
| **CA** | Criterio de Aceptación |
| **SWSM** | Sistema Web Spa Mascotas |

### 1.4 Referencias

- Documento de Elicitación de Requisitos v1.0
- Documento de Análisis de Requisitos v1.0
- IEEE Std 830-1998 - Recommended Practice for Software Requirements Specifications
- SWEBOK v3.0 - Software Requirements Chapter
- ISO/IEC/IEEE 29148:2018 - Requirements Engineering
- W3C Web Storage API Specification
- WCAG 2.1 - Web Content Accessibility Guidelines

### 1.5 Visión General del Documento

Este documento está organizado según el estándar IEEE 830-1998:

- **Sección 2:** Describe el contexto general del producto, restricciones, supuestos y dependencias
- **Sección 3:** Define requisitos de interfaces (usuario, hardware, software, comunicaciones)
- **Sección 4:** Especifica requisitos funcionales detallados organizados por módulos
- **Sección 5:** Especifica requisitos no funcionales (rendimiento, seguridad, calidad)
- **Sección 6:** Cubre requisitos adicionales (legales, culturales, etc.)
- **Sección 7:** Incluye apéndices con información complementaria

---

## 2. Descripción General

### 2.1 Perspectiva del Producto

El SWSM es un sistema **autónomo** desarrollado como aplicación web frontend que opera completamente en el navegador del usuario. 

**Contexto del sistema:**

```
┌─────────────────────────────────────────┐
│         Navegador Web Moderno           │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │    Sistema Web Spa Mascotas      │  │
│  │         (Frontend)               │  │
│  │                                   │  │
│  │  ┌──────────┐  ┌──────────┐     │  │
│  │  │   HTML   │  │   CSS    │     │  │
│  │  └──────────┘  └──────────┘     │  │
│  │  ┌──────────────────────────┐   │  │
│  │  │     JavaScript           │   │  │
│  │  │  (Lógica de negocio)     │   │  │
│  │  └──────────────────────────┘   │  │
│  │                                   │  │
│  └──────────────┬───────────────────┘  │
│                 │                       │
│     ┌───────────▼──────────┐           │
│     │   localStorage       │           │
│     │  (Persistencia)      │           │
│     └──────────────────────┘           │
└─────────────────────────────────────────┘
           │
           ▼
  ┌─────────────────────┐
  │  WhatsApp/Telegram  │
  │   (Enlaces web)     │
  └─────────────────────┘
```

**Características principales:**
- No requiere servidor backend
- Todos los datos se almacenan localmente en el navegador
- Opera completamente offline después de la carga inicial
- Genera enlaces para compartir información por mensajería

### 2.2 Funciones del Producto

El sistema proporciona las siguientes funciones principales:

**F1. Gestión de Agenda**
- Configuración de groomers y disponibilidad horaria
- Creación y visualización de citas
- Validación automática de conflictos de horario
- Reprogramación y cancelación de citas

**F2. Gestión de Servicios de Grooming**
- Apertura de ficha de servicio con estado inicial
- Checklist interactivo de procedimientos
- Carga de fotos antes/después
- Registro de observaciones y recomendaciones
- Cierre de servicio con validaciones

**F3. Gestión de Catálogo y Ventas**
- Administración de productos con categorías y variantes
- Carrito de compras con cálculo automático
- Generación de pedidos para WhatsApp/Telegram
- Control de inventario con alertas

**F4. Gestión de Clientes y Mascotas**
- Registro de clientes con datos de contacto
- Registro de mascotas con información médica
- Historial completo de servicios realizados
- Galería fotográfica por mascota

**F5. Reportes y Métricas**
- Reporte diario de citas por groomer
- Cálculo de ocupación porcentual
- Análisis de servicios y productos más solicitados
- Estimación de ingresos

### 2.3 Características de los Usuarios

**Perfil 1: Personal de Recepción**
- **Nivel técnico:** Básico-Intermedio
- **Experiencia:** Uso habitual de computadoras y navegadores
- **Frecuencia de uso:** Diaria (6-8 horas)
- **Funciones principales:** Agendar citas, registrar clientes, procesar ventas
- **Necesidades especiales:** Interfaz rápida, flujo simple de 2-3 pasos

**Perfil 2: Groomer (Estilista)**
- **Nivel técnico:** Básico
- **Experiencia:** Uso de smartphone/tablet
- **Frecuencia de uso:** Múltiples veces al día (5-10 servicios)
- **Funciones principales:** Ver agenda, completar checklist, tomar fotos
- **Necesidades especiales:** Interfaz táctil amigable, botones grandes

**Perfil 3: Administrador del Spa**
- **Nivel técnico:** Intermedio
- **Experiencia:** Manejo de software de gestión
- **Frecuencia de uso:** Diaria (1-2 horas)
- **Funciones principales:** Configurar servicios/precios, ver reportes, gestionar inventario
- **Necesidades especiales:** Visualización clara de métricas

### 2.4 Restricciones

**Restricciones Técnicas:**

**RT-001:** El sistema debe desarrollarse exclusivamente con tecnologías web estándar:
- HTML5
- CSS3
- JavaScript (vanilla, sin frameworks)

**RT-002:** No se puede implementar backend o base de datos servidor.

**RT-003:** El almacenamiento está limitado a localStorage del navegador (~5-10MB).

**RT-004:** Las imágenes deben comprimirse a máximo 200KB cada una.

**RT-005:** El sistema debe ser compatible con:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Restricciones de Tiempo:**

**RTM-001:** El desarrollo completo no debe exceder 2 semanas (10 días laborables).

**RTM-002:** La implementación debe seguir el cronograma establecido:
- Días 1-2: Estructura base + Clientes/Mascotas
- Días 3-4: Agenda y slots
- Días 5-6: Ficha de grooming
- Días 7-8: Catálogo y carrito
- Día 9: Reportes
- Día 10: Testing y deploy

**Restricciones de Despliegue:**

**RD-001:** El sistema debe ser desplegable en plataformas gratuitas (GitHub Pages, Netlify o Vercel).

**RD-002:** El repositorio debe ser público en GitHub.

**RD-003:** La estructura debe incluir: /css, /js, /imagenes, index.html.

**Restricciones Operacionales:**

**RO-001:** El sistema está diseñado para uso en un único dispositivo/navegador por spa.

**RO-002:** No hay sincronización multi-dispositivo.

**RO-003:** Los datos no se respaldan automáticamente en la nube.

### 2.5 Supuestos y Dependencias

**Supuestos:**

**SUP-001:** Los usuarios tienen acceso a un dispositivo con navegador web moderno.

**SUP-002:** Existe conexión a internet para la carga inicial del sistema (luego puede operar offline).

**SUP-003:** El personal recibirá capacitación básica de 30 minutos para usar el sistema.

**SUP-004:** El volumen de datos será manejable (< 100 clientes, < 500 citas históricas).

**SUP-005:** Las fotos de mascotas no excederán 5MB en tamaño original.

**SUP-006:** Los usuarios realizarán respaldos manuales periódicos de los datos.

**Dependencias:**

**DEP-001:** Navegador con soporte completo de:
- localStorage API
- File API (para carga de imágenes)
- Canvas API (para compresión de imágenes)
- Fetch API o similar

**DEP-002:** GitHub para hosting del repositorio y código fuente.

**DEP-003:** Plataforma de despliegue gratuita (GitHub Pages, Netlify o Vercel).

**DEP-004:** WhatsApp o Telegram instalado en el dispositivo del cliente para recibir pedidos.

### 2.6 Requisitos Pospuestos

Las siguientes funcionalidades se excluyen del MVP y quedarán para versiones futuras:

**RP-001:** Sistema de autenticación de usuarios con roles diferenciados.

**RP-002:** Notificaciones automáticas por correo electrónico o SMS.

**RP-003:** Integración real con APIs de WhatsApp Business o Telegram Bot.

**RP-004:** Sistema de pagos online con pasarelas de pago.

**RP-005:** Sincronización en tiempo real entre múltiples dispositivos.

**RP-006:** Backend con base de datos persistente en servidor.

**RP-007:** Módulo de facturación electrónica con impresora fiscal.

**RP-008:** Sistema de reservas online para clientes finales.

**RP-009:** Integración con sistemas de contabilidad externos.

**RP-010:** Aplicación móvil nativa (iOS/Android).

---

## 3. Requisitos de Interfaces Externas

### 3.1 Interfaces de Usuario

**IU-001: Pantalla Principal (Dashboard)**

**Descripción:** Página de inicio con acceso rápido a todas las funciones.

**Contenido:**
- Menú de navegación principal
- Resumen de citas del día actual
- Accesos directos: "Nueva Cita", "Nuevo Cliente", "Vender Producto"
- Widget de ocupación del día

**Layout responsive:**
- Desktop (>1024px): vista en grid de 3 columnas
- Tablet (768-1024px): vista en grid de 2 columnas
- Mobile (<768px): vista en columna única

**IU-002: Módulo de Agenda**

**Descripción:** Calendario interactivo para gestión de citas.

**Componentes:**
- Selector de fecha (date picker)
- Vista diaria con slots de 30 minutos (8:00 - 20:00)
- Indicadores de estado: libre (verde), ocupado (rojo), en proceso (amarillo)
- Panel lateral con detalles de cita seleccionada
- Botones: "Nueva Cita", "Reprogramar", "Cancelar"

**Interacciones:**
- Click en slot libre → abrir formulario de nueva cita
- Click en cita existente → ver detalles y opciones
- Filtro por groomer

**IU-003: Formulario de Nueva Cita**

**Campos obligatorios:**
- Cliente (autocompletar)
- Mascota (dropdown según cliente)
- Servicio (dropdown)
- Groomer (dropdown con disponibilidad)
- Fecha y hora

**Campos calculados automáticamente:**
- Duración estimada (según servicio + tamaño mascota)
- Hora de finalización estimada
- Precio del servicio

**Validaciones en tiempo real:**
- Verificación de disponibilidad del groomer
- Alerta si la mascota tiene alergias registradas
- Confirmación si es la primera visita

**IU-004: Ficha de Servicio de Grooming**

**Secciones:**

1. **Encabezado:**
   - Nombre mascota, raza, edad
   - Nombre cliente, teléfono
   - Groomer asignado, fecha/hora

2. **Estado Inicial:**
   - Campo de texto: condición del pelaje
   - Checkboxes: nudos, pulgas, heridas, otros
   - Nivel de temperamento: tranquilo / nervioso / agresivo

3. **Checklist de Procedimientos:**
   - [ ] Baño
   - [ ] Corte de pelo
   - [ ] Corte de uñas
   - [ ] Limpieza de oídos
   - [ ] Limpieza de glándulas
   - [ ] Perfume
   - [ ] Desenredado
   - [ ] Secado
   - Campo adicional de observaciones por item

4. **Galería de Fotos:**
   - Botón "Agregar foto ANTES"
   - Botón "Agregar foto DESPUÉS"
   - Previsualización de imágenes cargadas
   - Indicador de tamaño (máx. 200KB c/u)

5. **Cierre:**
   - Campo de recomendaciones
   - Fecha/hora de cierre automática
   - Botón "Cerrar Servicio" (valida checklist mínimo)

**IU-005: Módulo de Catálogo de Productos**

**Vista de lista:**
- Cards de productos con imagen, nombre, precio, stock
- Filtro por categoría
- Búsqueda por nombre
- Ordenamiento: A-Z, precio, stock

**Cada producto muestra:**
- Imagen (o placeholder si no tiene)
- Nombre
- Categoría
- Precio base
- Stock disponible (con alerta si < 5)
- Selector de variante (si aplica)
- Botón "Agregar al carrito"

**IU-006: Carrito de Compras**

**Contenido:**
- Lista de items agregados
- Por cada item:
  - Nombre del producto
  - Variante seleccionada
  - Precio unitario
  - Cantidad (con +/- para ajustar)
  - Subtotal
  - Botón eliminar
- Subtotal general
- Botones:
  - "Enviar pedido por WhatsApp"
  - "Enviar pedido por Telegram"
  - "Vaciar carrito"

**IU-007: Gestión de Clientes y Mascotas**

**Vista de lista de clientes:**
- Tabla con: nombre, teléfono, email, # de mascotas
- Buscador por nombre/teléfono
- Botón "Nuevo Cliente"

**Detalle de cliente:**
- Datos personales
- Lista de mascotas asociadas
- Historial de servicios (últimos 10)
- Botón "Agregar Mascota"

**Formulario de mascota:**
- Nombre, raza, edad, peso
- Tamaño: pequeño / mediano / grande
- Temperamento
- Alergias (tags)
- Vacunas al día: sí / no
- Restricciones especiales

**IU-008: Módulo de Reportes**

**Selector de período:**
- Hoy
- Última semana
- Último mes
- Rango personalizado

**Visualizaciones:**

1. **Reporte de Citas:**
   - Total de citas por estado
   - Tabla: fecha, cliente, mascota, servicio, groomer, estado
   - Gráfico de barras: citas por groomer

2. **Reporte de Ocupación:**
   - % de ocupación por groomer
   - Gráfico de líneas: ocupación por día
   - Tabla: horas trabajadas vs. disponibles

3. **Reporte de Ventas:**
   - Total de ingresos estimados
   - Ticket promedio
   - Top 5 servicios más solicitados
   - Top 5 productos más vendidos

**Estándares de UI:**

- **Fuente:** Sans-serif (ej: Inter, Roboto)
- **Tamaño base:** 16px
- **Colores principales:**
  - Primario: #3B82F6 (azul)
  - Secundario: #10B981 (verde)
  - Peligro: #EF4444 (rojo)
  - Advertencia: #F59E0B (amarillo)
  - Fondo: #F9FAFB (gris claro)
- **Espaciado:** Sistema de 8px (8, 16, 24, 32...)
- **Bordes:** Radio de 8px para cards, 4px para inputs
- **Sombras:** Sutiles para profundidad

### 3.2 Interfaces de Hardware

**IH-001:** El sistema debe funcionar en cualquier dispositivo con pantalla táctil o mouse/teclado.

**Requisitos mínimos:**
- **Desktop:** Monitor 1366×768 px o superior
- **Tablet:** 768×1024 px o superior
- **Mobile:** 320×568 px o superior
- **Memoria RAM:** 2GB mínimo
- **Almacenamiento:** 50MB disponibles para caché del navegador

**IH-002:** Para carga de fotos, el dispositivo debe tener:
- Cámara integrada, o
- Capacidad de conectar USB/SD para transferir imágenes

### 3.3 Interfaces de Software

**IS-001: Navegador Web**

El sistema requiere navegador con soporte de:
- **HTML5:** semántica, formularios, validación
- **CSS3:** flexbox, grid, media queries, animations
- **JavaScript ES6+:** arrow functions, promises, async/await, modules
- **Web APIs:**
  - localStorage (almacenamiento persistente)
  - File API (lectura de archivos)
  - Canvas API (manipulación de imágenes)
  - Date API (manejo de fechas)

**Navegadores soportados (últimas 2 versiones):**
- Google Chrome 90+
- Mozilla Firefox 88+
- Safari 14+
- Microsoft Edge 90+

**IS-002: Plataforma de Despliegue**

Compatible con servicios de hosting estático:
- **GitHub Pages:** github.io
- **Netlify:** netlify.app
- **Vercel:** vercel.app

**Requisitos:** Soporte de SPA (Single Page Application) con redirección de rutas.

### 3.4 Interfaces de Comunicación

**IC-001: Protocolo HTTP/HTTPS**

- Carga inicial del sistema mediante HTTPS
- Todos los assets (HTML, CSS, JS, imágenes) servidos por HTTPS
- Certificado SSL proporcionado por la plataforma de hosting

**IC-002: Enlaces de WhatsApp**

Formato del enlace generado:
```
https://wa.me/?text={mensaje_codificado}
```

Donde `{mensaje_codificado}` incluye:
- Título del pedido
- Lista de productos con cantidades
- Subtotal por item
- Total general
- Texto codificado en URL encoding (%20 para espacios, %0A para saltos de línea)

**Ejemplo:**
```
https://wa.me/?text=*Pedido%20Spa%20Mascotas*%0A
-%20Alimento%203kg%20(x2):%20Bs.%20120.00%0A
-%20Shampoo%20Lavanda%20(x1):%20Bs.%2035.00%0A
*Total:%20Bs.%20155.00*
```

**IC-003: Enlaces de Telegram**

Formato del enlace generado:
```
https://t.me/share/url?url={link}&text={mensaje_codificado}
```

Similar al formato de WhatsApp, adaptado a la API de Telegram.

**IC-004: Exportación de Datos**

El sistema genera archivos JSON descargables:

**Formato de exportación:**
```json
{
  "version": "1.0",
  "fecha_exportacion": "2025-12-06T10:30:00Z",
  "clientes": [...],
  "mascotas": [...],
  "citas": [...],
  "productos": [...],
  "ventas": [...]
}
```

**Tipo MIME:** `application/json`  
**Nombre de archivo:** `swsm_backup_YYYY-MM-DD.json`

---

## 4. Requisitos Funcionales

Los requisitos funcionales están organizados por módulos y ordenados por prioridad.

### 4.1 Módulo de Gestión de Clientes y Mascotas

#### RF-001: Registrar Cliente

**Prioridad:** Alta (Must Have)  
**Identificador:** RF-001

**Descripción:**
El sistema debe permitir registrar un nuevo cliente con sus datos personales y de contacto.

**Entradas:**
- Nombre completo (obligatorio, texto, 3-100 caracteres)
- Teléfono (obligatorio, numérico, 8-15 dígitos)
- Email (opcional, formato email válido)
- Dirección (opcional, texto, máx. 200 caracteres)
- Notas (opcional, texto, máx. 500 caracteres)

**Procesamiento:**
1. Validar formato de datos ingresados
2. Verificar que no exista cliente con mismo teléfono
3. Generar ID único (timestamp + random)
4. Crear objeto cliente con fecha de registro
5. Guardar en array de clientes en localStorage

**Salidas:**
- Cliente registrado exitosamente
- Mensaje de confirmación
- Redirección a detalle del cliente

**Validaciones:**
- Nombre: no vacío, sin números, longitud válida
- Teléfono: solo dígitos, longitud 8-15
- Email: formato válido (regex) si se proporciona
- Teléfono único en el sistema

**Criterios de aceptación:**
```gherkin
DADO que accedo al formulario de nuevo cliente
CUANDO ingreso: nombre="Juan Pérez", teléfono="70123456", email="juan@mail.com"
Y presiono "Guardar"
ENTONCES el cliente debe guardarse con ID único
Y debo ver mensaje "Cliente registrado exitosamente"
Y debo ser redirigido a la página de detalle del cliente
```

#### RF-002: Registrar Mascota

**Prioridad:** Alta (Must Have)  
**Identificador:** RF-002

**Descripción:**
El sistema debe permitir registrar una mascota asociada a un cliente existente.

**Entradas:**
- Cliente (obligatorio, selección de lista existente)
- Nombre (obligatorio, texto, 2-50 caracteres)
- Raza (obligatorio, texto, 2-50 caracteres)
- Edad (obligatorio, número, 0-30 años)
- Peso (opcional, decimal, 0.1-100 kg)
- Tamaño (obligatorio, selección: pequeño / mediano / grande)
- Temperamento (opcional, selección: tranquilo / nervioso / agresivo / juguetón)
- Alergias (opcional, lista de textos)
- Vacunas al día (obligatorio, booleano: sí / no)
- Restricciones (opcional, texto, máx. 500 caracteres)

**Procesamiento:**
1. Validar datos ingresados
2. Generar ID único para mascota
3. Crear objeto mascota con fecha de registro
4. Asociar mascota con cliente (clienteId)
5. Inicializar historial vacío y array de fotos vacío
6. Guardar en array de mascotas en localStorage
7. Actualizar array de mascotasIds en el objeto cliente

**Salidas:**
- Mascota registrada exitosamente
- Mascota visible en el perfil del cliente
- Mensaje de confirmación

**Reglas de negocio:**
- Una mascota debe estar asociada a exactamente un cliente
- El tamaño de la mascota afectará la duración de servicios:
  - Pequeño: +0% duración base
  - Mediano: +15% duración base
  - Grande: +30% duración base

**Criterios de aceptación:**
```gherkin
DADO un cliente existente con ID="C001"
CUANDO registro una mascota con: nombre="Max", raza="Golden Retriever", edad=3, tamaño="grande"
ENTONCES la mascota debe guardarse con factor de tamaño = 1.30
Y debe aparecer en la lista de mascotas del cliente "C001"
Y el historial de la mascota debe estar vacío inicialmente
```

#### RF-003: Buscar Cliente/Mascota

**Prioridad:** Media (Should Have)  
**Identificador:** RF-003

**Descripción:**
El sistema debe permitir buscar clientes por nombre, teléfono o nombre de mascota.

**Entradas:**
- Término de búsqueda (texto, mín. 2 caracteres)

**Procesamiento:**
1. Al escribir en el campo de búsqueda (con debounce de 300ms)
2. Filtrar array de clientes donde:
   - Nombre del cliente contenga el término (case-insensitive), o
   - Teléfono contenga el término, o
   - Alguna mascota del cliente tenga nombre que contenga el término
3. Ordenar resultados por relevancia (coincidencia exacta primero)
4. Limitar a primeros 20 resultados

**Salidas:**
- Lista de clientes coincidentes
- Por cada resultado mostrar:
  - Nombre del cliente
  - Teléfono
  - Nombres de mascotas
  - Indicador si la coincidencia fue por mascota

**Criterios de aceptación:**
```gherkin
DADO que existen clientes: "Juan Pérez" (tel: 70123456, mascota: "Max") y "María López" (tel: 70987654, mascota: "Luna")
CUANDO escribo "Max" en el buscador
ENTONCES debo ver "Juan Pérez" en los resultados
Y debe indicar "Coincidencia en mascota: Max"
```

#### RF-004: Ver Historial de Mascota

**Prioridad:** Media (Should Have)  
**Identificador:** RF-004

**Descripción:**
El sistema debe mostrar el historial completo de servicios realizados a una mascota.

**Entradas:**
- ID de mascota

**Procesamiento:**
1. Obtener array de servicios realizados de la mascota
2. Ordenar por fecha descendente (más reciente primero)
3. Para cada servicio obtener:
   - Fecha y hora
   - Tipo de servicio
   - Groomer que atendió
   - Observaciones
   - Recomendaciones
   - Fotos antes/después
4. Calcular estadísticas:
   - Total de servicios realizados
   - Última visita
   - Servicio más frecuente

**Salidas:**
- Lista cronológica de servicios
- Galería de fotos acumulada
- Estadísticas resumidas

**Criterios de aceptación:**
```gherkin
DADO una mascota "Max" con 3 servicios realizados: (1) Baño completo el 01/11/2025, (2) Grooming completo el 15/11/2025, (3) Baño express el 01/12/2025
CUANDO accedo al historial
ENTONCES debo ver los servicios en orden: 01/12, 15/11, 01/11
Y debo ver estadísticas: "Total: 3 servicios", "Última visita: 01/12/2025"
Y debo ver "Servicio más frecuente: Baño completo"
```

### 4.2 Módulo de Gestión de Agenda

#### RF-005: Configurar Groomer

**Prioridad:** Alta (Must Have)  
**Identificador:** RF-005

**Descripción:**
El sistema debe permitir configurar un groomer con su nombre y horario de disponibilidad.

**Entradas:**
- Nombre (obligatorio, texto, 3-50 caracteres)
- Especialidad (opcional, texto, máx. 100 caracteres)
- Hora inicio (obligatorio, formato HH:mm, ej: 09:00)
- Hora fin (obligatorio, formato HH:mm, ej: 18:00)
- Días laborables (obligatorio, array de números 0-6, donde 0=Domingo, 1=Lunes...)

**Procesamiento:**
1. Validar formato de horas (HH:mm)
2. Validar que hora fin > hora inicio
3. Validar que al menos un día laboral esté seleccionado
4. Generar ID único
5. Crear objeto groomer
6. Guardar en array de groomers en localStorage

**Salidas:**
- Groomer configurado exitosamente
- Disponible para asignación en citas

**Criterios de aceptación:**
```gherkin
DADO que accedo a configuración de groomers
CUANDO registro groomer: nombre="Ana García", horaInicio="09:00", horaFin="18:00", dias=[1,2,3,4,5]
ENTONCES el groomer debe guardarse
Y debe estar disponible de lunes a viernes de 9:00 a 18:00
```

#### RF-006: Configurar Servicio

**Prioridad:** Alta (Must Have)  
**Identificador:** RF-006

**Descripción:**
El sistema debe permitir definir tipos de servicios con duración y precio.

**Entradas:**
- Nombre (obligatorio, texto, 3-50 caracteres)
- Duración base en minutos (obligatorio, número, múltiplo de 15, rango: 15-180)
- Precio (obligatorio, decimal, > 0)
- Checklist de procedimientos (obligatorio, array de strings, mín. 3 items)

**Procesamiento:**
1. Validar datos ingresados
2. Generar ID único
3. Crear objeto servicio
4. Guardar en array de servicios en localStorage

**Salidas:**
- Servicio configurado exitosamente
- Disponible para agendar citas

**Servicios predefinidos:**
1. **Baño Express**: 30 min, checklist: [Baño, Secado]
2. **Baño Completo**: 60 min, checklist: [Baño, Secado, Corte de uñas, Limpieza de oídos]
3. **Grooming Completo**: 90 min, checklist: [Baño, Corte de pelo, Corte de uñas, Limpieza de oídos, Limpieza de glándulas, Perfume, Secado]

**Criterios de aceptación:**
```gherkin
DADO que configuro un servicio "Baño Completo"
CUANDO ingreso duración=60, precio=80, checklist=["Baño","Secado","Corte uñas","Limpieza oídos"]
ENTONCES el servicio debe guardarse con 4 items en checklist
Y debe estar disponible para agendar
```

#### RF-007: Crear Cita

**Prioridad:** Alta (Must Have)  
**Identificador:** RF-007

**Descripción:**
El sistema debe permitir agendar una cita validando disponibilidad del groomer.

**Entradas:**
- Cliente (obligatorio, selección)
- Mascota (obligatorio, selección según cliente)
- Servicio (obligatorio, selección)
- Groomer (obligatorio, selección)
- Fecha (obligatorio, date, no puede ser pasada)
- Hora inicio (obligatorio, formato HH:mm)

**Procesamiento:**
1. Validar que la fecha sea presente o futura
2. Obtener tamaño de la mascota
3. Calcular duración total:
   ```
   factorTamaño = {pequeño: 1.0, mediano: 1.15, grande: 1.30}
   duracionTotal = servicio.duracion × factorTamaño[mascota.tamaño]
   horaFin = horaInicio + duracionTotal
   ```
4. Validar disponibilidad del groomer (RF-008)
5. Si válido, generar ID de cita
6. Crear objeto cita con estado="pendiente"
7. Guardar en array de citas en localStorage

**Salidas:**
- Cita creada exitosamente
- Slot bloqueado en agenda
- Mensaje con detalles: hora fin estimada

**Regla de negocio RN-001:**
```
PARA validar disponibilidad:
  1. Obtener todas las citas del groomer en la fecha seleccionada
  2. PARA cada cita existente:
     SI (nuevaHoraInicio >= citaHoraInicio AND nuevaHoraInicio < citaHoraFin) 
        O (nuevaHoraFin > citaHoraInicio AND nuevaHoraFin <= citaHoraFin)
        O (nuevaHoraInicio <= citaHoraInicio AND nuevaHoraFin >= citaHoraFin):
       RECHAZAR cita (hay solapamiento)
  3. Validar que esté dentro del horario laboral del groomer
  4. SI todo válido: ACEPTAR cita
```

**Criterios de aceptación:**
```gherkin
DADO un groomer "Ana" disponible 09:00-18:00
Y una cita existente de 10:00 a 11:00
CUANDO intento agendar cita de 10:30 a 11:30
ENTONCES el sistema debe rechazar con mensaje "El groomer no está disponible"

DADO un groomer "Ana" sin citas
Y una mascota "grande" para servicio de 60 min
CUANDO agendo cita a las 10:00
ENTONCES la duración debe ser 78 minutos (60 × 1.30)
Y la hora fin debe ser 11:18
```

#### RF-008: Visualizar Agenda

**Prioridad:** Alta (Must Have)  
**Identificador:** RF-008

**Descripción:**
El sistema debe mostrar la agenda diaria con slots horarios y citas agendadas.

**Entradas:**
- Fecha (por defecto: hoy)
- Filtro por groomer (opcional)

**Procesamiento:**
1. Generar slots de 30 minutos entre 08:00 y 20:00
2. Obtener citas de la fecha seleccionada
3. Marcar slots según estado:
   - Libre (sin cita)
   - Ocupado (cita pendiente o completada)
   - En proceso (cita con ficha abierta)
4. Si hay filtro, mostrar solo citas del groomer seleccionado

**Salidas:**
- Vista de calendario con slots coloreados
- Por cada cita mostrar:
  - Hora
  - Nombre mascota
  - Tipo de servicio
  - Estado (icono)
  - Groomer

**Interacciones:**
- Click en slot libre → abrir formulario nueva cita con hora pre-seleccionada
- Click en cita → mostrar panel con opciones (ver detalles, reprogramar, cancelar, iniciar servicio)

**Criterios de aceptación:**
```gherkin
DADO que es 06/12/2025
Y existen citas: (1) 10:00-11:00 pendiente, (2) 14:00-15:30 completada
CUANDO accedo a la agenda del día
ENTONCES debo ver slot 10:00-11:00 en amarillo (pendiente)
Y debo ver slot 14:00-15:30 en verde (completada)
Y debo ver slots 09:00, 11:30, 16:00 en gris (libres)
```

#### RF-009: Reprogramar Cita

**Prioridad:** Media (Should Have)  
**Identificador:** RF-009

**Descripción:**
El sistema debe permitir cambiar la fecha/hora de una cita existente.

**Entradas:**
- ID de cita a reprogramar
- Nueva fecha
- Nueva hora inicio
- (Opcional) Nuevo groomer

**Procesamiento:**
1. Validar que la cita esté en estado "pendiente"
2. Calcular nueva duración (si cambió groomer o datos de mascota)
3. Validar disponibilidad en nueva fecha/hora (usar RN-001)
4. Si válido, actualizar objeto cita
5. Guardar cambios en localStorage

**Salidas:**
- Cita reprogramada exitosamente
- Mensaje de confirmación

**Restricciones:**
- Solo citas en estado "pendiente" pueden reprogramarse
- No se puede reprogramar a fechas pasadas
- No se puede reprogramar cita con servicio iniciado (ficha abierta)

**Criterios de aceptación:**
```gherkin
DADO una cita pendiente el 10/12 a las 10:00
CUANDO la reprogramo para el 12/12 a las 14:00
Y el nuevo horario está disponible
ENTONCES la cita debe actualizarse
Y debe liberarse el slot 10/12 10:00
Y debe ocuparse el slot 12/12 14:00
```

#### RF-010: Cancelar Cita

**Prioridad:** Media (Should Have)  
**Identificador:** RF-010

**Descripción:**
El sistema debe permitir cancelar una cita registrando el motivo.

**Entradas:**
- ID de cita
- Motivo de cancelación (opcional, texto, máx. 200 caracteres)

**Procesamiento:**
1. Validar que la cita no esté completada
2. Cambiar estado a "cancelada"
3. Registrar motivo y fecha/hora de cancelación
4. Mantener registro en historial (no eliminar)
5. Guardar en localStorage

**Salidas:**
- Cita cancelada exitosamente
- Slot liberado en agenda
- Registro en historial de la mascota

**Criterios de aceptación:**
```gherkin
DADO una cita pendiente con ID="CITA001"
CUANDO la cancelo con motivo="Cliente no disponible"
ENTONCES el estado debe cambiar a "cancelada"
Y el slot debe quedar libre en la agenda
Y debe aparecer en el historial de la mascota como "Cancelada"
```

### 4.3 Módulo de Gestión de Grooming

#### RF-011: Abrir Ficha de Servicio

**Prioridad:** Alta (Must Have)  
**Identificador:** RF-011

**Descripción:**
El sistema debe permitir iniciar un servicio abriendo la ficha correspondiente.

**Entradas:**
- ID de cita
- Estado inicial de la mascota (texto, máx. 500 caracteres)
- Checkboxes de condiciones: nudos, pulgas, heridas, otros
- Temperamento observado (selección)

**Procesamiento:**
1. Validar que la cita esté en estado "pendiente"
2. Cambiar estado de cita a "en_proceso"
3. Crear objeto FichaServicio asociado a la cita
4. Registrar fecha/hora de inicio
5. Inicializar checklist con items del servicio, todos desmarcados
6. Guardar en localStorage

**Salidas:**
- Ficha creada y abierta para edición
- Estado de cita actualizado a "en proceso"
- Acceso a checklist y funciones de fotos

**Criterios de aceptación:**
```gherkin
DADO una cita pendiente para "Grooming Completo" (8 items checklist)
CUANDO abro la ficha e ingreso estado="Pelaje con nudos leves"
ENTONCES la ficha debe crearse con 8 items desmarcados
Y el estado de la cita debe cambiar a "en_proceso"
Y debe registrarse hora de inicio
```

#### RF-012: Completar Checklist

**Prioridad:** Alta (Must Have)  
**Identificador:** RF-012

**Descripción:**
El sistema debe permitir marcar items del checklist y agregar observaciones.

**Entradas:**
- ID de ficha de servicio
- Item del checklist (índice)
- Acción: marcar / desmarcar
- Observación por item (opcional, texto, máx. 200 caracteres)

**Procesamiento:**
1. Obtener ficha de servicio
2. Actualizar estado del item (true/false)
3. Si se proporciona observación, guardarla asociada al item
4. Calcular % de completitud del checklist
5. Guardar cambios en localStorage

**Salidas:**
- Checklist actualizado en tiempo real
- Indicador visual de progreso (ej: "5/8 completados")

**Criterios de aceptación:**
```gherkin
DADO una ficha con checklist de 8 items
CUANDO marco 3 items como completados
ENTONCES debo ver indicador "3/8 completados (37.5%)"
Y los items marcados deben mostrar checkmark verde
```

#### RF-013: Cargar Fotos

**Prioridad:** Alta (Must Have)  
**Identificador:** RF-013

**Descripción:**
El sistema debe permitir cargar máximo 2 fotos (antes/después) comprimiéndolas automáticamente.

**Entradas:**
- ID de ficha de servicio
- Archivo de imagen (JPEG, PNG, WEBP)
- Tipo: "antes" o "después"

**Procesamiento:**
1. Validar formato de imagen
2. Validar que no exceda 5MB (tamaño original)
3. Validar que no existan ya 2 fotos del mismo tipo
4. Cargar imagen en Canvas
5. Redimensionar a máximo 800×600px manteniendo aspecto
6. Comprimir a JPEG calidad 0.7
7. Convertir a base64
8. Validar que resultado sea < 200KB
9. Guardar en array de fotos de la ficha
10. Actualizar localStorage

**Salidas:**
- Foto cargada y visible en galería
- Indicador de tamaño final
- Previsualización en miniatura

**Manejo de errores:**
- Si imagen no comprime a < 200KB: rechazar y mostrar mensaje "La imagen es muy compleja, intente con otra"
- Si ya hay 2 fotos: mostrar mensaje "Máximo 2 fotos por servicio"

**Criterios de aceptación:**
```gherkin
DADO una ficha de servicio sin fotos
CUANDO cargo una imagen JPEG de 2MB como "antes"
ENTONCES debe comprimirse a < 200KB
Y debe mostrarse en la sección "Fotos ANTES"
Y debe quedar almacenada en base64 en la ficha
```

#### RF-014: Cerrar Servicio

**Prioridad:** Alta (Must Have)  
**Identificador:** RF-014

**Descripción:**
El sistema debe permitir cerrar un servicio validando que se cumpla el mínimo del checklist.

**Entradas:**
- ID de ficha de servicio
- Recomendaciones (opcional, texto, máx. 500 caracteres)

**Procesamiento:**
1. Obtener ficha de servicio
2. Contar items del checklist marcados
3. Aplicar Regla de Negocio RN-002:
   ```
   SI servicio es "Grooming Completo":
     REQUERIR mínimo 5 items marcados
   SINO SI servicio es "Baño Completo":
     REQUERIR mínimo 4 items marcados
   SINO:
     REQUERIR mínimo 2 items marcados
   ```
4. Si no cumple: bloquear cierre y mostrar mensaje
5. Si cumple:
   - Cambiar estado de cita a "completada"
   - Registrar fecha/hora de cierre
   - Guardar recomendaciones
   - Agregar servicio al historial de la mascota
   - Si hay fotos, agregar al historial fotográfico
6. Guardar en localStorage

**Salidas:**
- Servicio cerrado exitosamente
- Cita marcada como "completada"
- Historial de mascota actualizado
- Slot liberado en agenda

**Criterios de aceptación:**
```gherkin
DADO una ficha de "Grooming Completo" con 3 items marcados
CUANDO intento cerrar el servicio
ENTONCES debe rechazarse con mensaje "Debe completar mínimo 5 items"
Y el servicio debe permanecer abierto

DADO una ficha de "Baño Express" con 2 items marcados
CUANDO cierro el servicio con recomendaciones="Próxima cita en 3 semanas"
ENTONCES debe cerrarse exitosamente
Y las recomendaciones deben guardarse en historial
```

### 4.4 Módulo de Catálogo y Ventas

#### RF-015: Gestionar Productos

**Prioridad:** Alta (Must Have)  
**Identificador:** RF-015

**Descripción:**
El sistema debe permitir registrar productos con categorías, variantes y stock.

**Entradas:**
- Nombre (obligatorio, texto, 3-100 caracteres)
- Categoría (obligatorio, selección: Alimento, Accesorios, Shampoo, Juguetes, Otros)
- Precio base (obligatorio, decimal, > 0)
- Stock (obligatorio, entero, >= 0)
- Variantes (opcional, array):
  - Nombre variante (ej: "1kg", "3kg", "Lavanda")
  - Precio extra (decimal, puede ser 0)
- Imagen (opcional, base64, máx 100KB)
- Descripción (opcional, texto, máx. 300 caracteres)

**Procesamiento:**
1. Validar datos ingresados
2. Generar ID único
3. Crear objeto producto
4. Si hay variantes, crear array de variantes
5. Guardar en array de productos en localStorage

**Salidas:**
- Producto registrado exitosamente
- Visible en catálogo

**Criterios de aceptación:**
```gherkin
DADO que registro producto "Alimento Premium"
CON categoría="Alimento", precio=45, stock=20
Y variantes=["1kg" (precio +0), "3kg" (precio +40)]
ENTONCES debe guardarse con 2 variantes
Y precio final de "1kg" debe ser 45
Y precio final de "3kg" debe ser 85
```

#### RF-016: Agregar Producto al Carrito

**Prioridad:** Alta (Must Have)  
**Identificador:** RF-016

**Descripción:**
El sistema debe permitir agregar productos al carrito validando stock disponible.

**Entradas:**
- ID de producto
- Variante seleccionada (si aplica)
- Cantidad (obligatorio, entero, > 0)

**Procesamiento:**
1. Validar que cantidad <= stock disponible
2. Calcular precio según variante:
   ```
   precioFinal = producto.precioBase + variante.precioExtra
   subtotal = precioFinal × cantidad
   ```
3. Si el producto ya está en carrito (mismo ID y variante):
   - Incrementar cantidad
   - Recalcular subtotal
4. Sino, agregar nuevo ItemCarrito
5. Actualizar total del carrito
6. Guardar carrito en localStorage

**Salidas:**
- Producto agregado al carrito
- Contador de carrito actualizado
- Indicador visual de confirmación

**Validaciones:**
- Si cantidad > stock: mostrar "Stock insuficiente (disponible: X)"
- Si cantidad < 1: rechazar

**Criterios de aceptación:**
```gherkin
DADO un producto "Alimento 3kg" con stock=10, precio=85
CUANDO agrego 3 unidades al carrito
ENTONCES el subtotal debe ser 255 (85 × 3)
Y el stock disponible debe seguir mostrando 10 (no se descuenta hasta venta)

DADO un producto con stock=2
CUANDO intento agregar 5 unidades
ENTONCES debe rechazarse con mensaje "Stock insuficiente (disponible: 2)"
```

#### RF-017: Generar Pedido por WhatsApp

**Prioridad:** Alta (Must Have)  
**Identificador:** RF-017

**Descripción:**
El sistema debe generar un enlace de WhatsApp con el detalle del pedido.

**Entradas:**
- Carrito actual con items

**Procesamiento:**
1. Validar que el carrito no esté vacío
2. Construir mensaje con formato:
   ```
   *Pedido Spa Mascotas*
   
   - [Producto 1] ([Variante]) (x[cant]): Bs. [subtotal]
   - [Producto 2] ([Variante]) (x[cant]): Bs. [subtotal]
   ...
   
   *Total: Bs. [total]*
   
   Link: [URL del sistema]
   ```
3. Codificar mensaje en URL encoding
4. Generar enlace: `https://wa.me/?text={mensaje_codificado}`
5. Abrir enlace en nueva ventana/tab

**Salidas:**
- WhatsApp Web/App se abre con mensaje pre-llenado
- Usuario puede enviar a su propio número o al del spa

**Nota:** El carrito NO se vacía automáticamente (el usuario decide si completó la venta)

**Criterios de aceptación:**
```gherkin
DADO un carrito con: "Alimento 3kg" (x2, Bs. 170) y "Shampoo Lavanda" (x1, Bs. 35)
CUANDO presiono "Enviar pedido por WhatsApp"
ENTONCES debe generarse enlace con texto:
"*Pedido Spa Mascotas*
- Alimento 3kg (x2): Bs. 170.00
- Shampoo Lavanda (x1): Bs. 35.00
*Total: Bs. 205.00*"
Y debe abrirse WhatsApp Web
```

#### RF-018: Registrar Venta

**Prioridad:** Media (Should Have)  
**Identificador:** RF-018

**Descripción:**
El sistema debe registrar una venta y descontar stock automáticamente.

**Entradas:**
- Carrito actual
- Método de pago (selección: Efectivo, QR, Transferencia)

**Procesamiento:**
1. Validar que carrito no esté vacío
2. Validar stock disponible para cada item
3. Crear objeto Venta con:
   - ID único
   - Fecha/hora actual
   - Array de items (copia del carrito)
   - Total
   - Método de pago
4. PARA cada item en el carrito:
   - Restar cantidad del stock del producto
   - Si stock resultante < 5: marcar para alerta
5. Guardar venta en array de ventas
6. Vaciar carrito
7. Actualizar productos con nuevo stock
8. Guardar todo en localStorage

**Salidas:**
- Venta registrada exitosamente
- Stock actualizado
- Comprobante en pantalla (opcional: imprimir)
- Alerta si algún producto quedó con stock bajo

**Regla de negocio RN-003:**
```
AL finalizar venta:
  PARA cada item:
    producto.stock -= item.cantidad
    SI producto.stock < 5:
      AGREGAR a lista de alertas
  
  SI hay alertas:
    MOSTRAR mensaje "Stock bajo en: [productos]"
```

**Criterios de aceptación:**
```gherkin
DADO un carrito con "Alimento 3kg" (x3) y producto tiene stock=10
CUANDO registro la venta
ENTONCES el stock debe quedar en 7
Y la venta debe guardarse con ID único
Y el carrito debe vaciarse

DADO que tras una venta el producto queda con stock=3
ENTONCES debe mostrarse alerta "Stock bajo en: Alimento 3kg (quedan 3 unidades)"
```

### 4.5 Módulo de Reportes

#### RF-019: Reporte de Citas

**Prioridad:** Media (Should Have)  
**Identificador:** RF-019

**Descripción:**
El sistema debe generar reporte de citas por día, groomer y servicio.

**Entradas:**
- Período (selección: Hoy, Última semana, Último mes, Rango personalizado)
- Filtro por groomer (opcional)

**Procesamiento:**
1. Obtener citas del período seleccionado
2. Aplicar filtro de groomer si existe
3. Agrupar por:
   - Estado (pendiente, completada, cancelada)
   - Groomer
   - Tipo de servicio
4. Calcular:
   - Total de citas por estado
   - Citas por groomer
   - Servicios más solicitados
5. Generar visualización (tabla + gráfico)

**Salidas:**
- Tabla con detalle de citas
- Gráfico de barras: citas por groomer
- Gráfico de torta: distribución por tipo de servicio
- Resumen numérico

**Criterios de aceptación:**
```gherkin
DADO 10 citas en el último mes: 7 completadas, 2 pendientes, 1 cancelada
Y 6 citas fueron de "Baño Completo", 4 de "Grooming Completo"
CUANDO genero reporte del último mes
ENTONCES debo ver:
- "Total: 10 citas"
- "Completadas: 7 (70%)"
- "Servicio más solicitado: Baño Completo (60%)"
```

#### RF-020: Reporte de Ocupación

**Prioridad:** Media (Should Have)  
**Identificador:** RF-020

**Descripción:**
El sistema debe calcular el porcentaje de ocupación por groomer.

**Entradas:**
- Período (selección)
- Groomer (opcional, para detalle individual)

**Procesamiento:**
1. Obtener citas completadas del período
2. PARA cada groomer:
   ```
   horasDisponibles = (horaFin - horaInicio) × díasLaborables
   horasOcupadas = Σ(duración de cada cita completada) / 60
   ocupación = (horasOcupadas / horasDisponibles) × 100
   ```
3. Calcular ocupación promedio del spa
4. Identificar franjas horarias más/menos ocupadas

**Salidas:**
- % de ocupación por groomer
- Gráfico de líneas: ocupación día a día
- Tabla: horas trabajadas vs. disponibles
- Recomendaciones (ej: "Baja ocupación los lunes")

**Regla de negocio RN-004:**
```
Ocupación = (Horas ocupadas / Horas disponibles) × 100

Donde:
- Horas ocupadas = Σ(duración real de cada cita completada) en horas
- Horas disponibles = (horarioFin - horarioInicio) × días laborables
```

**Criterios de aceptación:**
```gherkin
DADO un groomer con horario 09:00-18:00 (9 horas/día) en 5 días
Y completó 3 citas: 60 min, 90 min, 30 min (total 180 min = 3 horas)
CUANDO genero reporte de ocupación semanal
ENTONCES debo ver:
- "Horas disponibles: 45 horas"
- "Horas trabajadas: 3 horas"
- "Ocupación: 6.67%"
```

#### RF-021: Reporte de Ventas

**Prioridad:** Baja (Could Have)  
**Identificador:** RF-021

**Descripción:**
El sistema debe mostrar estadísticas de ventas y productos más vendidos.

**Entradas:**
- Período (selección)

**Procesamiento:**
1. Obtener ventas del período
2. Calcular:
   - Total de ventas (cantidad)
   - Ingresos totales
   - Ticket promedio = ingresos / cantidad
3. Agrupar productos vendidos y contar
4. Ordenar por cantidad vendida (top 5)

**Salidas:**
- Total de ventas e ingresos
- Ticket promedio
- Tabla: top 5 productos más vendidos
- Gráfico de barras: productos por categoría

**Criterios de aceptación:**
```gherkin
DADO 5 ventas en el mes: Bs. 100, Bs. 200, Bs. 150, Bs. 80, Bs. 120
CUANDO genero reporte de ventas del mes
ENTONCES debo ver:
- "Total ventas: 5"
- "Ingresos: Bs. 650.00"
- "Ticket promedio: Bs. 130.00"
```

### 4.6 Requisitos Transversales

#### RF-022: Validación de Datos

**Prioridad:** Alta (Must Have)  
**Identificador:** RF-022

**Descripción:**
El sistema debe validar todos los datos ingresados por el usuario.

**Validaciones implementadas:**

**Formato de Email:**
```regex
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```

**Formato de Teléfono:**
```regex
^[0-9]{8,15}$
```

**Formato de Hora:**
```regex
^([01][0-9]|2[0-3]):[0-5][0-9]$
```

**Validaciones generales:**
- Campos obligatorios no vacíos
- Longitudes mínimas/máximas respetadas
- Números positivos donde aplique
- Fechas futuras para agendamiento
- Valores dentro de rangos permitidos

**Comportamiento:**
- Validación en tiempo real (al perder foco del campo)
- Mensajes de error claros y específicos
- Indicadores visuales (rojo para error, verde para válido)
- Bloqueo de submit mientras haya errores

**Criterios de aceptación:**
```gherkin
DADO un campo email con valor "juan@invalido"
CUANDO pierdo el foco del campo
ENTONCES debe mostrarse mensaje "Email inválido" en rojo
Y el botón "Guardar" debe estar deshabilitado
```

#### RF-023: Persistencia de Datos

**Prioridad:** Alta (Must Have)  
**Identificador:** RF-023

**Descripción:**
El sistema debe guardar automáticamente todos los datos en localStorage.

**Datos persistidos:**
- Clientes (array)
- Mascotas (array)
- Groomers (array)
- Servicios (array)
- Citas (array)
- Fichas de servicio (array)
- Productos (array)
- Ventas (array)
- Configuraciones del sistema

**Procesamiento:**
1. Después de cada operación de escritura:
   - Serializar datos a JSON
   - Guardar en localStorage con clave específica
   - Verificar éxito de escritura
2. Al cargar la aplicación:
   - Recuperar datos de localStorage
   - Parsear JSON
   - Validar integridad básica
   - Si no existen datos: cargar dataset de ejemplo

**Manejo de errores:**
- Si localStorage está lleno: mostrar alerta "Almacenamiento lleno. Exporte y limpie datos antiguos"
- Si datos corruptos: ofrecer restaurar a valores por defecto

**Criterios de aceptación:**
```gherkin
DADO que registro un cliente nuevo
CUANDO cierro y reabro el navegador
ENTONCES el cliente debe seguir visible en el sistema
```

#### RF-024: Exportar/Importar Datos

**Prioridad:** Media (Should Have)  
**Identificador:** RF-024

**Descripción:**
El sistema debe permitir exportar todos los datos a un archivo JSON y reimportarlos.

**Exportación:**

**Entradas:**
- Botón "Exportar datos"

**Procesamiento:**
1. Obtener todos los datos de localStorage
2. Crear objeto con estructura:
   ```json
   {
     "version": "1.0",
     "fecha_exportacion": "ISO 8601 datetime",
     "clientes": [...],
     "mascotas": [...],
     "citas": [...],
     "productos": [...],
     "ventas": [...]
   }
   ```
3. Convertir a JSON string con formato legible
4. Crear Blob con tipo application/json
5. Generar enlace de descarga
6. Nombre archivo: `swsm_backup_YYYY-MM-DD.json`

**Salidas:**
- Archivo JSON descargado automáticamente

**Importación:**

**Entradas:**
- Archivo JSON (del formato de exportación)

**Procesamiento:**
1. Leer archivo
2. Parsear JSON
3. Validar estructura y versión
4. Advertir que se reemplazarán datos actuales
5. Solicitar confirmación
6. Si confirma:
   - Sobrescribir datos en localStorage
   - Recargar aplicación
7. Si falla validación: mostrar error específico

**Salidas:**
- Datos restaurados exitosamente
- Mensaje de confirmación

**Criterios de aceptación:**
```gherkin
DADO que tengo 10 clientes registrados
CUANDO exporto los datos
ENTONCES debe descargarse archivo JSON
Y al importarlo en un navegador limpio
DEBO recuperar los 10 clientes intactos
```

---

## 5. Requisitos No Funcionales

### 5.1 Requisitos de Rendimiento

#### RNF-001: Tiempo de Carga Inicial

**Prioridad:** Alta  
**Identificador:** RNF-001

**Descripción:**
La aplicación debe cargar completamente en menos de 2 segundos en condiciones normales de red.

**Métricas:**
- First Contentful Paint (FCP): < 1.2 segundos
- Time to Interactive (TTI): < 2 segundos
- Total Blocking Time (TBT): < 300 ms

**Condiciones de medición:**
- Red 4G (4 Mbps download)
- Dispositivo gama media (4 cores, 4GB RAM)
- Sin caché

**Estrategias:**
- Minificación de CSS y JS
- Lazy loading de imágenes
- Compresión gzip/brotli en servidor
- CSS crítico inline

#### RNF-002: Tiempo de Respuesta de Operaciones

**Prioridad:** Alta  
**Identificador:** RNF-002

**Descripción:**
Las operaciones del usuario deben completarse en tiempos perceptiblemente instantáneos.

**Métricas por operación:**

| Operación | Tiempo máximo |
|-----------|---------------|
| Búsqueda de cliente/mascota | 200 ms |
| Agregar producto al carrito | 100 ms |
| Guardar formulario simple | 300 ms |
| Cambiar entre secciones | 150 ms |
| Cargar agenda del día | 400 ms |
| Generar reporte básico | 500 ms |
| Comprimir y guardar foto | 2000 ms |

**Nota:** Para operaciones > 500ms, mostrar indicador de carga.

#### RNF-003: Capacidad de Datos

**Prioridad:** Media  
**Identificador:** RNF-003

**Descripción:**
El sistema debe manejar volúmenes de datos específicos sin degradación notable.

**Capacidades garantizadas:**

| Entidad | Cantidad mínima | Rendimiento |
|---------|-----------------|-------------|
| Clientes | 100 | Sin degradación |
| Mascotas | 150 | Sin degradación |
| Citas (historial total) | 500 | Búsqueda < 500ms |
| Productos | 50 | Sin degradación |
| Fotos (total) | 100 (200KB c/u) | Galería < 1s |
| Ventas (historial) | 200 | Reporte < 1s |

**Límites técnicos:**
- localStorage: ~5-10 MB (varía por navegador)
- Fotos: máximo 2 por servicio, 200KB cada una

#### RNF-004: Escalabilidad de Búsquedas

**Prioridad:** Media  
**Identificador:** RNF-004

**Descripción:**
Las búsquedas deben mantener rendimiento aceptable con la cantidad máxima de datos.

**Estrategias de optimización:**
- Implementar debounce de 300ms en búsquedas en tiempo real
- Limitar resultados a primeros 20 matches
- Usar índices en memoria para búsquedas frecuentes
- Algoritmo de búsqueda eficiente (ej: búsqueda binaria para IDs)

### 5.2 Requisitos de Seguridad

#### RNF-005: Protección de Datos en Navegador

**Prioridad:** Media  
**Identificador:** RNF-005

**Descripción:**
Los datos almacenados localmente deben tener protección básica contra acceso no autorizado.

**Medidas implementadas:**
- localStorage es accesible solo desde el mismo origen (same-origin policy)
- No almacenar información sensible (contraseñas, números de tarjetas)
- Advertir al usuario sobre la naturaleza local de los datos

**Limitaciones conocidas:**
- Cualquier persona con acceso físico al dispositivo puede acceder a localStorage
- No hay cifrado de datos en reposo (limitación de MVP frontend-only)

**Recomendaciones al usuario:**
- Usar el sistema en dispositivo privado o protegido
- No dejar sesión abierta en dispositivos compartidos
- Realizar respaldos periódicos

#### RNF-006: Validación y Sanitización

**Prioridad:** Alta  
**Identificador:** RNF-006

**Descripción:**
Todos los inputs del usuario deben ser validados y sanitizados para prevenir inyecciones.

**Medidas:**
- Escape de caracteres especiales HTML en renders dinámicos
- Validación de tipos de datos
- Sanitización de strings antes de almacenar
- No usar `eval()` o `innerHTML` con datos del usuario

**Prevención de XSS:**
- Usar textContent en lugar de innerHTML para datos del usuario
- Validar URLs antes de abrir (para WhatsApp/Telegram)

#### RNF-007: Transmisión Segura

**Prioridad:** Alta  
**Identificador:** RNF-007

**Descripción:**
La aplicación debe servirse exclusivamente por HTTPS.

**Requisitos:**
- Certificado SSL/TLS válido
- Redirección automática de HTTP a HTTPS
- HSTS (HTTP Strict Transport Security) habilitado

**Nota:** Esto es responsabilidad de la plataforma de hosting (GitHub Pages, Netlify, Vercel proporcionan HTTPS automáticamente).

### 5.3 Requisitos de Usabilidad

#### RNF-008: Accesibilidad Básica

**Prioridad:** Media  
**Identificador:** RNF-008

**Descripción:**
El sistema debe cumplir con criterios básicos de accesibilidad WCAG 2.1 nivel A.

**Criterios implementados:**

**Contraste:**
- Ratio mínimo 4.5:1 para texto normal
- Ratio mínimo 3:1 para texto grande (18pt+)

**Navegación por teclado:**
- Todos los elementos interactivos accesibles con Tab
- Orden de tabulación lógico
- Indicadores visuales de foco claros
- Shortcuts de teclado para acciones frecuentes

**Semántica HTML:**
- Uso correcto de etiquetas semánticas (<nav>, <main>, <section>, <article>)
- Labels asociados a inputs
- Roles ARIA donde sea necesario
- Alt text descriptivo en imágenes funcionales

**Formularios:**
- Labels visibles y asociados
- Mensajes de error claros y accesibles
- Instrucciones en lenguaje simple

#### RNF-009: Curva de Aprendizaje

**Prioridad:** Alta  
**Identificador:** RNF-009

**Descripción:**
Un usuario nuevo debe poder realizar las tareas básicas en menos de 30 minutos de capacitación.

**Tareas básicas:**
1. Agendar una cita
2. Registrar un cliente nuevo
3. Completar checklist de servicio
4. Agregar producto al carrito

**Ayudas implementadas:**
- Tooltips explicativos en funciones complejas
- Mensajes de confirmación claros
- Wizards paso a paso para procesos complejos
- Datos de ejemplo pre-cargados para exploración

#### RNF-010: Feedback Visual

**Prioridad:** Alta  
**Identificador:** RNF-010

**Descripción:**
Todas las acciones del usuario deben tener retroalimentación visual inmediata.

**Tipos de feedback:**

**Estados de botones:**
- Hover: cambio de color/sombra
- Active: efecto de presión
- Disabled: opacidad reducida + cursor not-allowed
- Loading: spinner + texto "Procesando..."

**Notificaciones:**
- Toast messages para éxitos (verde, auto-cierra en 3s)
- Alertas para advertencias (amarillo, requiere confirmación)
- Errores (rojo, permanente hasta acción del usuario)

**Transiciones:**
- Cambio entre secciones: fade in/out (200ms)
- Aparición de modales: scale + fade (150ms)
- Carga de listas: skeleton screens

#### RNF-011: Diseño Responsive

**Prioridad:** Alta  
**Identificador:** RNF-011

**Descripción:**
La interfaz debe adaptarse fluidamente a diferentes tamaños de pantalla.

**Breakpoints:**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

**Adaptaciones por dispositivo:**

**Mobile:**
- Menú hamburguesa colapsable
- Formularios en una columna
- Botones grandes (mín 44×44 px para táctil)
- Agenda en vista de lista (no grid)

**Tablet:**
- Menú lateral fijo
- Formularios en 2 columnas
- Agenda en grid reducido

**Desktop:**
- Menú superior + sidebar
- Aprovechamiento de espacio horizontal
- Multi-columna para dashboards

#### RNF-012: Consistencia Visual

**Prioridad:** Media  
**Identificador:** RNF-012

**Descripción:**
La interfaz debe mantener consistencia en colores, tipografía y componentes.

**Sistema de diseño:**

**Colores:**
- Primario: #3B82F6 (azul) - acciones principales
- Secundario: #10B981 (verde) - éxitos, confirmaciones
- Peligro: #EF4444 (rojo) - errores, eliminaciones
- Advertencia: #F59E0B (amarillo) - alertas
- Neutral: #6B7280 (gris) - textos secundarios
- Fondo: #F9FAFB (gris muy claro)

**Tipografía:**
- Familia: Inter, Roboto, o system font stack
- Tamaño base: 16px
- Escala: 12px, 14px, 16px, 18px, 20px, 24px, 32px
- Peso: 400 (normal), 500 (medium), 700 (bold)

**Espaciado:**
- Sistema basado en 8px: 8, 16, 24, 32, 40, 48, 64
- Padding de contenedores: 16px (mobile), 24px (desktop)
- Gap entre elementos: 8-16px

**Componentes reutilizables:**
- Botones (primary, secondary, danger, text)
- Cards (con header, body, footer)
- Forms (inputs, selects, checkboxes)
- Modals (con overlay, header, body, footer)
- Alerts (success, warning, error, info)

### 5.4 Requisitos de Portabilidad

#### RNF-013: Compatibilidad de Navegadores

**Prioridad:** Alta  
**Identificador:** RNF-013

**Descripción:**
El sistema debe funcionar correctamente en los navegadores especificados.

**Navegadores soportados:**

| Navegador | Versión mínima | Plataforma |
|-----------|----------------|------------|
| Chrome | 90+ | Windows, macOS, Linux, Android |
| Firefox | 88+ | Windows, macOS, Linux, Android |
| Safari | 14+ | macOS, iOS |
| Edge | 90+ | Windows, macOS |

**Funcionalidades críticas a testear:**
- localStorage API
- File API (carga de imágenes)
- Canvas API (compresión)
- CSS Grid y Flexbox
- ES6+ JavaScript

**Testing requerido:**
- Pruebas manuales en al menos 3 navegadores diferentes
- Verificación en mobile (iOS y Android)

#### RNF-014: Independencia de Plataforma

**Prioridad:** Alta  
**Identificador:** RNF-014

**Descripción:**
El sistema debe funcionar en cualquier sistema operativo con navegador moderno.

**Plataformas soportadas:**
- Windows 10/11
- macOS 10.15+
- Linux (distribuciones populares)
- iOS 14+
- Android 8+

**No dependencias de:**
- Plugins específicos de navegador
- Características exclusivas de un SO
- Componentes nativos del sistema

### 5.5 Requisitos de Mantenibilidad

#### RNF-015: Código Limpio y Documentado

**Prioridad:** Alta  
**Identificador:** RNF-015

**Descripción:**
El código fuente debe ser legible, mantenible y bien documentado.

**Estándares de código:**

**JavaScript:**
- Nomenclatura: camelCase para variables/funciones, PascalCase para clases
- Funciones: máximo 50 líneas
- Archivos: máximo 300 líneas
- Comentarios: en español, explicar el "por qué" no el "qué"
- ESLint rules aplicadas

**CSS:**
- Metodología BEM (Block Element Modifier)
- Variables CSS para colores y espaciados
- Nombres descriptivos en español

**HTML:**
- Indentación consistente (2 espacios)
- Atributos en orden: class, id, data-*, aria-*
- Semántica correcta

**Documentación requerida:**
- README.md con:
  - Descripción del proyecto
  - Instrucciones de instalación
  - Estructura de carpetas
  - Cómo usar el sistema
  - Decisiones técnicas importantes
- Comentarios en funciones complejas
- JSDoc para funciones públicas principales

#### RNF-016: Estructura Modular

**Prioridad:** Alta  
**Identificador:** RNF-016

**Descripción:**
El código debe estar organizado en módulos lógicos y reutilizables.

**Estructura de archivos:**
```
/
├── index.html
├── css/
│   ├── styles.css (estilos principales)
│   ├── components.css (componentes reutilizables)
│   └── responsive.css (media queries)
├── js/
│   ├── app.js (punto de entrada)
│   ├── clientes.js (gestión de clientes)
│   ├── mascotas.js (gestión de mascotas)
│   ├── agenda.js (gestión de agenda)
│   ├── grooming.js (servicios de grooming)
│   ├── productos.js (catálogo y ventas)
│   ├── reportes.js (generación de reportes)
│   ├── storage.js (persistencia localStorage)
│   ├── utils.js (funciones auxiliares)
│   └── validaciones.js (validaciones de datos)
├── imagenes/
│   ├── logo.png
│   ├── placeholder-mascota.png
│   └── icons/ (iconos SVG)
└── README.md
```

**Principios:**
- Separación de responsabilidades
- Funciones puras cuando sea posible
- Evitar variables globales (usar módulos ES6)
- DRY (Don't Repeat Yourself)

#### RNF-017: Facilidad de Extensión

**Prioridad:** Media  
**Identificador:** RNF-017

**Descripción:**
El sistema debe permitir agregar nuevas funcionalidades sin romper las existentes.

**Patrones aplicados:**
- Objetos de configuración para servicios, groomers, productos
- Eventos custom para comunicación entre módulos
- Hooks para extensiones futuras

**Puntos de extensión:**
- Agregar nuevos tipos de servicios (solo configuración)
- Agregar nuevas categorías de productos (solo configuración)
- Agregar nuevos campos a formularios (modificación mínima)

### 5.6 Requisitos de Disponibilidad

#### RNF-018: Funcionamiento Offline

**Prioridad:** Media  
**Identificador:** RNF-018

**Descripción:**
El sistema debe funcionar completamente offline después de la carga inicial.

**Capacidades offline:**
- Todas las funcionalidades CRUD
- Generación de reportes
- Exportación de datos

**Limitaciones offline:**
- No se pueden generar enlaces de WhatsApp/Telegram (requieren red)
- No se pueden cargar recursos externos (si los hubiera)

**Implementación:**
- Todos los assets servidos estáticamente
- No dependencias de CDNs externos para funcionalidad crítica
- localStorage como fuente de datos única

#### RNF-019: Recuperación de Errores

**Prioridad:** Alta  
**Identificador:** RNF-019

**Descripción:**
El sistema debe recuperarse adecuadamente de errores comunes.

**Manejo de errores:**

**localStorage lleno:**
1. Detectar error al intentar guardar
2. Mostrar mensaje: "Almacenamiento lleno. Exporte datos y limpie registros antiguos."
3. Ofrecer botón "Exportar ahora"
4. No perder datos en memoria
5. Permitir continuar trabajando (sin persistencia)

**Datos corruptos:**
1. Detectar error al parsear JSON
2. Mostrar advertencia: "Los datos están dañados."
3. Ofrecer opciones:
   - Cargar respaldo (si existe)
   - Reiniciar con datos de ejemplo
   - Intentar recuperación parcial

**Error de carga de imagen:**
1. Mostrar placeholder
2. Log de error en consola
3. Permitir reintentar carga

**Criterio:**
- Ningún error debe hacer crash de la aplicación completa
- Siempre ofrecer camino de recuperación

---

## 6. Otros Requisitos

### 6.1 Requisitos Legales y de Cumplimiento

#### REQ-LEG-001: Privacidad de Datos

**Descripción:**
El sistema maneja datos personales de clientes (nombres, teléfonos, emails) que deben protegerse según legislación aplicable.

**Consideraciones:**
- Advertir al usuario que los datos se almacenan localmente
- No transmitir datos personales a terceros
- Proporcionar función de exportación/eliminación
- No requiere consentimiento explícito (sistema interno, no público)

**Nota:** Como sistema interno sin transmisión de datos, no aplican regulaciones GDPR/LOPD estrictas, pero se siguen principios de protección de datos.

#### REQ-LEG-002: Propiedad del Código

**Descripción:**
El código fuente es propiedad del desarrollador/estudiante y se comparte bajo licencia de código abierto.

**Licencia sugerida:** MIT License

**Atribución:**
- Incluir archivo LICENSE en repositorio
- Incluir header de copyright en archivos principales

### 6.2 Requisitos Culturales e Internacionalización

#### REQ-CULT-001: Idioma

**Descripción:**
El sistema está completamente en español (interfaz, mensajes, documentación).

**Regiones objetivo:**
- España
- Latinoamérica

**Formatos locales:**
- Moneda: Bs. (Bolivianos) con 2 decimales
- Fecha: DD/MM/YYYY
- Hora: formato 24 horas (HH:mm)

#### REQ-CULT-002: Terminología del Dominio

**Descripción:**
Usar terminología estándar de la industria de cuidado de mascotas en español.

**Términos específicos:**
- "Groomer" (no "peluquero canino")
- "Grooming" (no "estética")
- "Baño" (no "lavado")
- "Checklist" (no "lista de verificación")
- "Spa" (no "centro de estética")

### 6.3 Requisitos de Entrega

#### REQ-ENT-001: Repositorio en GitHub

**Descripción:**
El código debe estar en repositorio público de GitHub.

**Contenido del repositorio:**
- Código fuente completo
- Archivo README.md con instrucciones
- Estructura de carpetas especificada
- Commits con mensajes descriptivos
- .gitignore apropiado

**Nombre sugerido del repo:** `spa-mascotas-sistema`

#### REQ-ENT-002: Despliegue en Hosting Gratuito

**Descripción:**
La aplicación debe estar desplegada y accesible públicamente.

**Plataformas aceptadas:**
- GitHub Pages (username.github.io/repo-name)
- Netlify (app-name.netlify.app)
- Vercel (app-name.vercel.app)

**Requisitos:**
- HTTPS habilitado
- URL funcional y estable
- Acceso sin autenticación

#### REQ-ENT-003: Documentación de Usuario

**Descripción:**
Incluir manual básico de usuario en README.md.

**Contenido mínimo:**
1. Cómo acceder al sistema
2. Funcionalidades principales
3. Flujo de uso recomendado
4. Cómo hacer respaldo de datos
5. Limitaciones conocidas
6. Créditos y licencia

---

## 7. Apéndices

### Apéndice A: Modelo de Datos Completo

#### Estructura de Cliente
```javascript
{
  id: string,              // UUID o timestamp
  nombre: string,          // 3-100 caracteres
  telefono: string,        // 8-15 dígitos
  email: string,           // opcional, formato email
  direccion: string,       // opcional, max 200 chars
  notas: string,           // opcional, max 500 chars
  fechaRegistro: string,   // ISO 8601 datetime
  mascotasIds: [string]    // array de IDs de mascotas
}
```

#### Estructura de Mascota
```javascript
{
  id: string,
  clienteId: string,
  nombre: string,
  raza: string,
  edad: number,
  peso: number,            // opcional, en kg
  tamaño: string,          // "pequeño" | "mediano" | "grande"
  temperamento: string,    // "tranquilo" | "nervioso" | "agresivo" | "juguetón"
  alergias: [string],
  vacunasAlDia: boolean,
  restricciones: string,   // opcional
  fechaRegistro: string,
  historialServicios: [string],  // array de IDs de fichas
  fotos: [
    {
      url: string,         // base64 data URL
      fecha: string,
      tipo: string         // "antes" | "después"
    }
  ]
}
```

#### Estructura de Groomer
```javascript
{
  id: string,
  nombre: string,
  especialidad: string,    // opcional
  horaInicio: string,      // "HH:mm"
  horaFin: string,         // "HH:mm"
  diasLaborables: [number] // [0-6], 0=Domingo
}
```

#### Estructura de Servicio
```javascript
{
  id: string,
  nombre: string,
  duracionBase: number,    // minutos
  precio: number,
  checklist: [string]      // array de procedimientos
}
```

#### Estructura de Cita
```javascript
{
  id: string,
  fecha: string,           // "YYYY-MM-DD"
  horaInicio: string,      // "HH:mm"
  horaFin: string,         // calculada automáticamente
  duracionTotal: number,   // minutos, ajustada por tamaño
  mascotaId: string,
  servicioId: string,
  groomerId: string,
  estado: string,          // "pendiente" | "en_proceso" | "completada" | "cancelada"
  fichaServicioId: string, // nullable
  fechaCreacion: string,
  fechaCancelacion: string, // nullable
  motivoCancelacion: string // nullable
}
```

#### Estructura de FichaServicio
```javascript
{
  id: string,
  citaId: string,
  estadoInicial: string,
  condiciones: {
    nudos: boolean,
    pulgas: boolean,
    heridas: boolean,
    otros: string        // opcional
  },
  temperamentoObservado: string,
  checklist: [
    {
      item: string,
      completado: boolean,
      observacion: string  // opcional
    }
  ],
  fotos: [
    {
      url: string,         // base64
      tipo: string,        // "antes" | "después"
      tamaño: number       // bytes
    }
  ],
  recomendaciones: string,
  fechaInicio: string,
  fechaCierre: string      // nullable
}
```

#### Estructura de Producto
```javascript
{
  id: string,
  nombre: string,
  categoria: string,       // "Alimento" | "Accesorios" | "Shampoo" | "Juguetes" | "Otros"
  precioBase: number,
  stock: number,
  variantes: [
    {
      nombre: string,      // ej: "1kg", "Lavanda"
      precioExtra: number
    }
  ],
  imagen: string,          // base64 data URL, opcional
  descripcion: string,     // opcional
  fechaRegistro: string
}
```

#### Estructura de ItemCarrito
```javascript
{
  productoId: string,
  varianteSeleccionada: string, // nullable
  cantidad: number,
  precioUnitario: number,  // con variante aplicada
  subtotal: number
}
```

#### Estructura de Venta
```javascript
{
  id: string,
  fecha: string,           // ISO 8601 datetime
  items: [ItemCarrito],
  subtotal: number,
  total: number,
  metodoPago: string,      // "Efectivo" | "QR" | "Transferencia"
  fechaRegistro: string
}
```

### Apéndice B: Casos de Uso Detallados

#### CU-01: Registrar y Agendar Primera Cita

**Actor:** Personal de recepción

**Precondiciones:**
- El sistema está cargado y funcionando
- Hay al menos un groomer y un servicio configurados

**Flujo principal:**
1. Usuario hace click en "Nueva Cita"
2. Sistema muestra formulario de agendamiento
3. Usuario hace click en "Nuevo Cliente" (cliente no existe)
4. Sistema muestra formulario de cliente
5. Usuario ingresa: nombre, teléfono
6. Usuario hace click en "Guardar y continuar"
7. Sistema valida datos, guarda cliente, muestra formulario de mascota
8. Usuario ingresa: nombre mascota, raza, edad, tamaño
9. Usuario hace click en "Guardar y continuar"
10. Sistema guarda mascota, vuelve a formulario de cita con cliente/mascota pre-seleccionados
11. Usuario selecciona: servicio, groomer, fecha, hora
12. Sistema calcula duración ajustada por tamaño
13. Sistema valida disponibilidad
14. Usuario hace click en "Confirmar cita"
15. Sistema guarda cita, muestra confirmación con detalles

**Postcondiciones:**
- Cliente registrado en el sistema
- Mascota registrada y asociada al cliente
- Cita agendada con estado "pendiente"
- Slot bloqueado en agenda del groomer

**Flujo alternativo 3a:** Cliente ya existe
- En paso 3, usuario busca y selecciona cliente existente
- Sistema muestra mascotas del cliente
- Si mascota ya existe, usuario la selecciona
- Si mascota no existe, usuario hace click en "Nueva mascota" y continúa desde paso 7

**Flujo alternativo 13a:** Horario no disponible
- Sistema detecta conflicto de horarios
- Sistema muestra mensaje: "El groomer no está disponible en ese horario"
- Sistema sugiere horarios alternativos cercanos
- Usuario selecciona nuevo horario o cancela

#### CU-02: Realizar Servicio Completo de Grooming

**Actor:** Groomer

**Precondiciones:**
- Existe una cita agendada con estado "pendiente"

**Flujo principal:**
1. Groomer accede a la agenda del día
2. Groomer hace click en la cita correspondiente
3. Sistema muestra panel de detalles de la cita
4. Groomer hace click en "Iniciar servicio"
5. Sistema abre formulario de ficha de servicio
6. Groomer ingresa estado inicial y condiciones observadas
7. Groomer hace click en "Abrir ficha"
8. Sistema crea ficha, cambia estado a "en_proceso", muestra checklist
9. Groomer toma foto ANTES con su dispositivo
10. Groomer carga la foto en el sistema
11. Sistema comprime imagen y la guarda
12. Groomer realiza los procedimientos del servicio
13. A medida que completa, va marcando items del checklist
14. Sistema actualiza porcentaje de completitud
15. Al finalizar, groomer toma foto DESPUÉS
16. Groomer carga la foto en el sistema
17. Groomer ingresa recomendaciones para el dueño
18. Groomer hace click en "Cerrar servicio"
19. Sistema valida que se cumple mínimo del checklist
20. Sistema cierra ficha, actualiza estado de cita a "completada"
21. Sistema actualiza historial de la mascota
22. Sistema muestra confirmación

**Postcondiciones:**
- Ficha de servicio cerrada con fecha/hora
- Cita en estado "completada"
- Fotos guardadas en historial de mascota
- Recomendaciones registradas
- Slot liberado en agenda

**Flujo alternativo 19a:** Checklist incompleto
- Sistema detecta menos items marcados del mínimo requerido
- Sistema muestra mensaje: "Debe completar al menos X items del checklist"
- Sistema bloquea botón "Cerrar servicio"
- Groomer completa items faltantes o cancela cierre

#### CU-03: Vender Productos con Pedido por WhatsApp

**Actor:** Personal de recepción

**Precondiciones:**
- Existen productos registrados en el catálogo
- El cliente tiene WhatsApp instalado

**Flujo principal:**
1. Usuario accede al módulo "Tienda"
2. Sistema muestra catálogo de productos
3. Usuario busca producto específico por categoría o nombre
4. Usuario hace click en producto deseado
5. Sistema muestra detalle del producto
6. Si hay variantes, usuario selecciona variante
7. Usuario ingresa cantidad
8. Usuario hace click en "Agregar al carrito"
9. Sistema valida stock disponible
10. Sistema agrega producto al carrito
11. Sistema muestra notificación: "Producto agregado"
12. Usuario repite pasos 3-11 para otros productos
13. Usuario hace click en ícono del carrito
14. Sistema muestra resumen del carrito con total
15. Usuario hace click en "Enviar pedido por WhatsApp"
16. Sistema genera mensaje formateado con items y total
17. Sistema crea enlace de WhatsApp con mensaje pre-llenado
18. Sistema abre WhatsApp Web en nueva ventana
19. Cliente visualiza mensaje y confirma envío
20. Usuario regresa al sistema
21. Usuario hace click en "Registrar venta"
22. Sistema descuenta stock de productos
23. Sistema registra venta
24. Sistema vacía carrito
25. Sistema muestra alertas si algún producto quedó con stock bajo

**Postcondiciones:**
- Venta registrada en el sistema
- Stock actualizado
- Carrito vacío
- Mensaje enviado por WhatsApp

**Flujo alternativo 9a:** Stock insuficiente
- Sistema detecta cantidad solicitada > stock
- Sistema muestra mensaje: "Stock insuficiente (disponible: X)"
- Sistema no agrega el producto
- Usuario ajusta cantidad o cancela

**Flujo alternativo 15a:** Cliente prefiere Telegram
- Usuario hace click en "Enviar pedido por Telegram"
- Sistema genera enlace de Telegram en lugar de WhatsApp
- Continúa desde paso 17

### Apéndice C: Reglas de Validación Completas

#### Validaciones de Cliente

| Campo | Regla | Mensaje de Error |
|-------|-------|------------------|
| Nombre | No vacío, 3-100 chars, sin números | "Nombre inválido (3-100 caracteres, sin números)" |
| Teléfono | Solo dígitos, 8-15 chars, único | "Teléfono inválido (8-15 dígitos)" o "Este teléfono ya está registrado" |
| Email | Formato email válido (si se proporciona) | "Email inválido" |
| Dirección | Máximo 200 chars | "Dirección muy larga (máx. 200 caracteres)" |

#### Validaciones de Mascota

| Campo | Regla | Mensaje de Error |
|-------|-------|------------------|
| Nombre | No vacío, 2-50 chars | "Nombre inválido (2-50 caracteres)" |
| Raza | No vacío, 2-50 chars | "Raza inválida (2-50 caracteres)" |
| Edad | Número 0-30 | "Edad inválida (0-30 años)" |
| Peso | Decimal 0.1-100 (si se proporciona) | "Peso inválido (0.1-100 kg)" |
| Tamaño | Valor de lista: pequeño/mediano/grande | "Seleccione un tamaño válido" |

#### Validaciones de Cita

| Campo | Regla | Mensaje de Error |
|-------|-------|------------------|
| Fecha | No pasada, formato YYYY-MM-DD | "Fecha inválida (debe ser presente o futura)" |
| Hora | Formato HH:mm, dentro horario groomer | "Hora inválida" o "Fuera del horario del groomer" |
| Cliente | Seleccionado | "Debe seleccionar un cliente" |
| Mascota | Seleccionada | "Debe seleccionar una mascota" |
| Servicio | Seleccionado | "Debe seleccionar un servicio" |
| Groomer | Seleccionado, disponible en horario | "Debe seleccionar un groomer" o "Groomer no disponible" |

#### Validaciones de Producto

| Campo | Regla | Mensaje de Error |
|-------|-------|------------------|
| Nombre | No vacío, 3-100 chars | "Nombre inválido (3-100 caracteres)" |
| Precio | Decimal > 0 | "Precio debe ser mayor a 0" |
| Stock | Entero >= 0 | "Stock inválido (debe ser 0 o mayor)" |
| Cantidad (carrito) | Entero > 0, <= stock | "Cantidad inválida" o "Stock insuficiente" |

#### Validaciones de Foto

| Aspecto | Regla | Mensaje de Error |
|---------|-------|------------------|
| Formato | JPEG, PNG, WEBP | "Formato no soportado (use JPEG, PNG o WEBP)" |
| Tamaño original | < 5 MB | "Imagen muy grande (máx. 5MB)" |
| Tamaño comprimido | < 200 KB | "La imagen es muy compleja, intente con otra" |
| Cantidad | Máx. 2 por tipo (antes/después) | "Máximo 2 fotos por servicio" |

### Apéndice D: Algoritmos Clave

#### Algoritmo de Validación de Disponibilidad

```javascript
function validarDisponibilidad(groomer, fecha, horaInicio, duracion) {
  // 1. Validar que sea día laboral del groomer
  const diaSemana = new Date(fecha).getDay();
  if (!groomer.diasLaborables.includes(diaSemana)) {
    return { valido: false, mensaje: "El groomer no trabaja este día" };
  }
  
  // 2. Calcular hora fin
  const horaFin = sumarMinutos(horaInicio, duracion);
  
  // 3. Validar que esté dentro del horario laboral
  if (horaInicio < groomer.horaInicio || horaFin > groomer.horaFin) {
    return { valido: false, mensaje: "Fuera del horario del groomer" };
  }
  
  // 4. Obtener citas existentes del groomer en esa fecha
  const citasExistentes = obtenerCitas(groomer.id, fecha);
  
  // 5. Validar solapamiento con cada cita
  for (const cita of citasExistentes) {
    if (cita.estado === "cancelada") continue;
    
    const inicioNueva = horaInicio;
    const finNueva = horaFin;
    const inicioExistente = cita.horaInicio;
    const finExistente = cita.horaFin;
    
    // Condiciones de solapamiento
    if (
      (inicioNueva >= inicioExistente && inicioNueva < finExistente) ||
      (finNueva > inicioExistente && finNueva <= finExistente) ||
      (inicioNueva <= inicioExistente && finNueva >= finExistente)
    ) {
      return { 
        valido: false, 
        mensaje: "El groomer no está disponible en ese horario",
        sugerencias: generarHorariosAlternativos(groomer, fecha, duracion)
      };
    }
  }
  
  // 6. Todo válido
  return { valido: true };
}
```

#### Algoritmo de Compresión de Imágenes

```javascript
async function comprimirImagen(archivo) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // Calcular nuevas dimensiones manteniendo aspecto
        let width = img.width;
        let height = img.height;
        const maxWidth = 800;
        const maxHeight = 600;
        
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = width * ratio;
          height = height * ratio;
        }
        
        // Crear canvas y redimensionar
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        
        // Comprimir a JPEG calidad 0.7
        const dataURL = canvas.toDataURL('image/jpeg', 0.7);
        
        // Validar tamaño
        const tamañoBytes = Math.round((dataURL.length * 3) / 4);
        const tamañoKB = tamañoBytes / 1024;
        
        if (tamañoKB > 200) {
          reject(new Error('La imagen es muy compleja, intente con otra'));
        } else {
          resolve({
            dataURL: dataURL,
            tamaño: tamañoBytes
          });
        }
      };
      img.src = e.target.result;
    };
    
    reader.onerror = () => reject(new Error('Error al leer archivo'));
    reader.readAsDataURL(archivo);
  });
}
```

#### Algoritmo de Cálculo de Ocupación

```javascript
function calcularOcupacion(groomer, fechaInicio, fechaFin) {
  // 1. Obtener citas completadas del período
  const citas = obtenerCitasCompletadas(groomer.id, fechaInicio, fechaFin);
  
  // 2. Calcular horas ocupadas
  let minutosOcupados = 0;
  for (const cita of citas) {
    minutosOcupados += cita.duracionTotal;
  }
  const horasOcupadas = minutosOcupados / 60;
  
  // 3. Calcular horas disponibles
  const diasLaborables = contarDiasLaborables(
    fechaInicio, 
    fechaFin, 
    groomer.diasLaborables
  );
  
  const horasPorDia = calcularHorasDiarias(
    groomer.horaInicio, 
    groomer.horaFin
  );
  
  const horasDisponibles = diasLaborables * horasPorDia;
  
  // 4. Calcular porcentaje
  const porcentajeOcupacion = (horasOcupadas / horasDisponibles) * 100;
  
  return {
    horasOcupadas: horasOcupadas.toFixed(2),
    horasDisponibles: horasDisponibles.toFixed(2),
    porcentaje: porcentajeOcupacion.toFixed(2)
  };
}
```

### Apéndice E: Matriz de Trazabilidad Completa

| Requisito | Caso de Uso | Módulo UI | Función JS | Test |
|-----------|-------------|-----------|------------|------|
| RF-001 | CU-01 | FormularioCliente | crearCliente() | TEST-001 |
| RF-002 | CU-01 | FormularioMascota | crearMascota() | TEST-002 |
| RF-003 | CU-01 | BuscadorCliente | buscarCliente() | TEST-003 |
| RF-004 | CU-06 | HistorialMascota | obtenerHistorial() | TEST-004 |
| RF-005 | - | ConfigGroomer | crearGroomer() | TEST-005 |
| RF-006 | - | ConfigServicio | crearServicio() | TEST-006 |
| RF-007 | CU-01, CU-02 | FormularioCita | crearCita() | TEST-007 |
| RF-008 | CU-01, CU-02 | CalendarioAgenda | renderizarAgenda() | TEST-008 |
| RF-009 | - | ModalReprogramar | reprogramarCita() | TEST-009 |
| RF-010 | - | ModalCancelar | cancelarCita() | TEST-010 |
| RF-011 | CU-02 | FichaServicio | abrirFicha() | TEST-011 |
| RF-012 | CU-02 | Checklist | actualizarChecklist() | TEST-012 |
| RF-013 | CU-02 | CargadorFotos | cargarFoto() | TEST-013 |
| RF-014 | CU-02 | FichaServicio | cerrarServicio() | TEST-014 |
| RF-015 | - | FormularioProducto | crearProducto() | TEST-015 |
| RF-016 | CU-03 | CardProducto | agregarAlCarrito() | TEST-016 |
| RF-017 | CU-03 | Carrito | generarWhatsApp() | TEST-017 |
| RF-018 | CU-03 | Carrito | registrarVenta() | TEST-018 |
| RF-019 | - | ReporteCitas | generarReporte() | TEST-019 |
| RF-020 | - | ReporteOcupacion | calcularOcupacion() | TEST-020 |
| RF-021 | - | ReporteVentas | generarReporte() | TEST-021 |
| RF-022 | Todos | Validador | validar*() | TEST-022 |
| RF-023 | Todos | Storage | guardar/cargar() | TEST-023 |
| RF-024 | - | Export/Import | exportar/importar() | TEST-024 |

### Apéndice F: Glosario Extendido

| Término | Definición | Sinónimos | Contexto de Uso |
|---------|------------|-----------|-----------------|
| **Agenda** | Calendario con disponibilidad horaria de groomers | Calendario | "Ver agenda del día" |
| **Carrito** | Contenedor temporal de productos antes de venta | Cesta | "Agregar al carrito" |
| **Checklist** | Lista de procedimientos del servicio | Lista de verificación | "Completar checklist" |
| **Ficha** | Documento digital del servicio realizado | Ficha de servicio | "Abrir ficha" |
| **Groomer** | Profesional de estética animal | Estilista | "Asignar groomer" |
| **Grooming** | Servicio de cuidado estético de mascotas | Estética animal | "Servicio de grooming" |
| **localStorage** | Almacenamiento persistente del navegador | Storage local | Contexto técnico |
| **Mascota** | Animal de compañía cliente del spa | Pet | "Registrar mascota" |
| **Slot** | Intervalo de tiempo en la agenda | Espacio horario | "Slot disponible" |
| **Stock** | Cantidad disponible de un producto | Inventario | "Consultar stock" |
| **Variante** | Versión alternativa de un producto | Presentación | "Seleccionar variante" |

### Apéndice G: Referencias y Estándares

**Estándares Aplicados:**

1. **IEEE Std 830-1998** - Recommended Practice for Software Requirements Specifications
   - Estructura del documento
   - Clasificación de requisitos
   - Criterios de calidad de requisitos

2. **SWEBOK v3.0** - Software Engineering Body of Knowledge
   - Chapter 1: Software Requirements
   - Técnicas de elicitación
   - Proceso de análisis

3. **ISO/IEC/IEEE 29148:2018** - Requirements Engineering
   - Principios de RE
   - Atributos de requisitos
   - Gestión de requisitos

4. **W3C Web Standards**
   - HTML5 Specification
   - CSS3 Specification
   - Web Storage API
   - File API

5. **WCAG 2.1** - Web Content Accessibility Guidelines
   - Nivel A compliance
   - Contraste de colores
   - Navegación por teclado

**Documentación de Referencia:**

- MDN Web Docs: https://developer.mozilla.org
- Can I Use: https://caniuse.com (compatibilidad de navegadores)
- W3C Validator: https://validator.w3.org
- Google Lighthouse (performance y accesibilidad)

### Apéndice H: Plan de Pruebas Resumido

#### Pruebas Funcionales

**Módulo de Agenda:**
- TEST-007a: Crear cita con horario disponible → Éxito
- TEST-007b: Crear cita con solapamiento → Rechazo
- TEST-007c: Crear cita fuera de horario → Rechazo
- TEST-009a: Reprogramar cita pendiente → Éxito
- TEST-010a: Cancelar cita completada → Rechazo

**Módulo de Grooming:**
- TEST-011a: Abrir ficha de cita pendiente → Éxito
- TEST-012a: Marcar 5/8 items de checklist → 62.5% completitud
- TEST-013a: Cargar foto 2MB → Comprime a <200KB
- TEST-014a: Cerrar con checklist incompleto → Rechazo
- TEST-014b: Cerrar con checklist completo → Éxito

**Módulo de Ventas:**
- TEST-016a: Agregar producto con stock suficiente → Éxito
- TEST-016b: Agregar producto sin stock → Rechazo
- TEST-017a: Generar enlace WhatsApp → Formato correcto
- TEST-018a: Registrar venta → Descuenta stock

#### Pruebas No Funcionales

**Rendimiento:**
- PERF-001: Carga inicial < 2s (3G, sin caché)
- PERF-002: Búsqueda de 100 clientes < 200ms
- PERF-003: Guardar en localStorage < 100ms

**Usabilidad:**
- USA-001: Usuario nuevo agenda cita en < 5 min
- USA-002: Navegación por teclado funcional
- USA-003: Responsive en 320px-1920px

**Compatibilidad:**
- COMP-001: Funcional en Chrome 90+
- COMP-002: Funcional en Firefox 88+
- COMP-003: Funcional en Safari 14+
- COMP-004: Funcional en iOS y Android

---

## Aprobaciones

### Firma de Aprobación

| Rol | Nombre | Firma | Fecha |
|-----|--------|-------|-------|
| Desarrollador | [Nombre] | _______ | ___/___/2025 |
| Evaluador | [Nombre] | _______ | ___/___/2025 |

---

## Historial de Cambios

| Versión | Fecha | Cambios Realizados | Autor |
|---------|-------|-------------------|-------|
| 1.0 | Dic 2025 | Versión inicial completa | Equipo de desarrollo |

---

**FIN DEL DOCUMENTO SRS**

---

**Documento elaborado conforme a:**
- IEEE Std 830-1998 - Software Requirements Specifications
- SWEBOK v3.0 - Software Engineering Body of Knowledge
- ISO/IEC/IEEE 29148:2018 - Requirements Engineering

**Clasificación:** Público  
**Estado:** Aprobado  
**Versión:** 1.0  
**Fecha:** Diciembre 2025
