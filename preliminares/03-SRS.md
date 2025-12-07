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
