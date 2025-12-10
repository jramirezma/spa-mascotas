# Backlog Priorizado
## Minisistema de Gestión para Spa de Mascotas

---

## INTRODUCCIÓN

Este backlog organiza todas las tareas de desarrollo en **fases incrementales**, priorizadas según valor funcional, dependencias técnicas y complejidad. Cada tarea incluye:

- **ID único** para trazabilidad
- **Descripción clara** de la tarea
- **Prioridad** (Crítica, Alta, Media, Baja)
- **Complejidad** estimada (Baja, Media, Alta)
- **Dependencias** de otras tareas
- **Módulo** al que pertenece

---

## LEYENDA

### Prioridades
- 🔴 **Crítica:** Bloquea funcionalidad esencial (MVP)
- 🟠 **Alta:** Funcionalidad core necesaria
- 🟡 **Media:** Mejora la experiencia notablemente
- 🟢 **Baja:** Nice-to-have, opcional

### Complejidad
- ⚡ **Baja:** 1-2 horas de desarrollo
- ⚡⚡ **Media:** 3-5 horas de desarrollo
- ⚡⚡⚡ **Alta:** 6+ horas de desarrollo

### Estado
- ⬜ Pendiente
- 🔄 En progreso
- ✅ Completado

---

## FASE 0: CONFIGURACIÓN INICIAL DEL PROYECTO

### T-001: Estructura de Archivos
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡ Baja  
**Dependencias:** Ninguna  
**Módulo:** Infraestructura

**Descripción:**
Crear la estructura de carpetas y archivos del proyecto según las especificaciones.

**Criterios de Aceptación:**
- Carpeta raíz con `index.html`
- Carpeta `/css` con `style.css`
- Carpeta `/js` con `app.js`
- Carpeta `/imagenes` (vacía por ahora)
- Estructura lista para desarrollo

**Tareas específicas:**
- [ ] Crear carpetas del proyecto
- [ ] Crear archivo `index.html` vacío
- [ ] Crear archivo `css/style.css` vacío
- [ ] Crear archivo `js/app.js` vacío
- [ ] Verificar estructura

**Estado:** ⬜

---

### T-002: HTML Base y Meta Tags
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡ Baja  
**Dependencias:** T-001  
**Módulo:** HTML

**Descripción:**
Configurar el documento HTML con estructura semántica básica y meta tags necesarios.

**Criterios de Aceptación:**
- DOCTYPE HTML5
- Meta charset UTF-8
- Meta viewport para responsive
- Título descriptivo
- Enlaces a CSS y JS
- Estructura semántica básica

**Tareas específicas:**
- [ ] Agregar DOCTYPE y estructura HTML básica
- [ ] Configurar `<head>` con meta tags
- [ ] Vincular `style.css`
- [ ] Vincular `app.js` con defer
- [ ] Agregar estructura `<body>` con `<main>`

**Estado:** ⬜

---

### T-003: Reset CSS y Variables Globales
**Prioridad:** 🟠 Alta  
**Complejidad:** ⚡ Baja  
**Dependencias:** T-002  
**Módulo:** CSS

**Descripción:**
Configurar reset CSS básico y definir variables CSS para colores, fuentes y espaciados.

**Criterios de Aceptación:**
- Reset de márgenes y paddings
- Box-sizing border-box global
- Variables CSS para colores principales
- Variables para fuentes y tamaños
- Variables para espaciados

**Tareas específicas:**
- [ ] Aplicar reset CSS (`* { margin: 0; padding: 0; box-sizing: border-box; }`)
- [ ] Definir `:root` con variables CSS
- [ ] Configurar fuente base del body
- [ ] Definir colores: primario, secundario, éxito, error
- [ ] Definir espaciados estándar

**Estado:** ⬜

---

## FASE 1: MÓDULO DE AUTENTICACIÓN (MVP)

### T-004: HTML - Formulario de Login
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡ Baja  
**Dependencias:** T-002  
**Módulo:** Autenticación - HTML

**Descripción:**
Crear estructura HTML del formulario de login.

**Criterios de Aceptación:**
- Contenedor principal para login
- Formulario con campos usuario y contraseña
- Labels asociados a inputs
- Botón de envío
- Área para mensajes de error

**Tareas específicas:**
- [ ] Crear `<section id="login-section">`
- [ ] Agregar `<form id="login-form">`
- [ ] Crear input usuario con label
- [ ] Crear input contraseña (type="password") con label
- [ ] Agregar botón "Iniciar Sesión"
- [ ] Agregar `<div id="login-error">` para mensajes

**Estado:** ⬜

---

### T-005: CSS - Estilos del Login
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-004  
**Módulo:** Autenticación - CSS

**Descripción:**
Estilizar el formulario de login con diseño centrado y atractivo.

**Criterios de Aceptación:**
- Formulario centrado vertical y horizontalmente
- Diseño limpio y profesional
- Inputs estilizados con bordes y padding
- Botón con estados hover y active
- Responsive en móvil

**Tareas específicas:**
- [ ] Centrar contenedor de login (flexbox)
- [ ] Estilizar formulario (fondo, sombra, padding)
- [ ] Estilizar inputs (border, padding, focus)
- [ ] Estilizar botón (colores, hover, cursor)
- [ ] Estilizar mensajes de error (color rojo)
- [ ] Verificar responsive en móvil

**Estado:** ⬜

---

### T-006: JS - Lógica de Validación de Login
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-004  
**Módulo:** Autenticación - JavaScript

**Descripción:**
Implementar validación de credenciales y manejo del formulario de login.

**Criterios de Aceptación:**
- Capturar evento submit del formulario
- Validar que campos no estén vacíos
- Comparar con credenciales hardcodeadas (admin/1234)
- Mostrar mensajes de error apropiados
- Prevenir envío si hay errores

**Tareas específicas:**
- [ ] Crear función `validarLogin()`
- [ ] Capturar evento `submit` del formulario
- [ ] Validar campos no vacíos
- [ ] Comparar usuario === "admin" y password === "1234"
- [ ] Mostrar mensaje si credenciales incorrectas
- [ ] Prevenir comportamiento default del form

**Estado:** ⬜

---

### T-007: JS - Gestión de Sesión con SessionStorage
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-006  
**Módulo:** Autenticación - JavaScript

**Descripción:**
Implementar sistema de sesión usando SessionStorage.

**Criterios de Aceptación:**
- Guardar sesión al login exitoso
- Verificar sesión al cargar página
- Funciones para obtener/eliminar sesión
- Redirección según estado de sesión

**Tareas específicas:**
- [ ] Crear función `guardarSesion()` - guarda en SessionStorage
- [ ] Crear función `verificarSesion()` - retorna true/false
- [ ] Crear función `eliminarSesion()` - limpia SessionStorage
- [ ] Llamar `guardarSesion()` después de login exitoso
- [ ] Llamar `verificarSesion()` al cargar página
- [ ] Mostrar/ocultar secciones según sesión activa

**Estado:** ⬜

---

### T-008: HTML - Barra de Navegación
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡ Baja  
**Dependencias:** T-002  
**Módulo:** Navegación - HTML

**Descripción:**
Crear estructura HTML de la barra de navegación principal.

**Criterios de Aceptación:**
- Elemento `<nav>` semántico
- Logo o título del sistema
- Enlaces a cada módulo
- Botón de cerrar sesión
- Inicialmente oculta (mostrar después de login)

**Tareas específicas:**
- [ ] Crear `<nav id="main-nav" class="hidden">`
- [ ] Agregar logo/título del spa
- [ ] Crear enlaces: Registro, Agenda, Carrito
- [ ] Agregar botón "Cerrar Sesión"
- [ ] Agregar clase `.hidden { display: none; }`

**Estado:** ⬜

---

### T-009: CSS - Estilos de Navegación
**Prioridad:** 🟠 Alta  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-008  
**Módulo:** Navegación - CSS

**Descripción:**
Estilizar barra de navegación responsive.

**Criterios de Aceptación:**
- Barra horizontal en desktop
- Menú hamburguesa en móvil (<768px)
- Enlaces con hover y estado activo
- Botón cerrar sesión destacado
- Diseño limpio y profesional

**Tareas específicas:**
- [ ] Estilizar nav (flexbox, background, padding)
- [ ] Estilizar enlaces (espaciado, hover)
- [ ] Crear clase `.active` para módulo actual
- [ ] Implementar menú hamburguesa con media query
- [ ] Estilizar botón cerrar sesión (esquina derecha)
- [ ] Verificar responsive

**Estado:** ⬜

---

### T-010: JS - Funcionalidad de Cerrar Sesión
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡ Baja  
**Dependencias:** T-007, T-008  
**Módulo:** Autenticación - JavaScript

**Descripción:**
Implementar funcionalidad de logout.

**Criterios de Aceptación:**
- Botón cerrar sesión funcional
- Elimina datos de SessionStorage
- Oculta navegación y módulos
- Muestra login nuevamente
- Limpia formularios

**Tareas específicas:**
- [ ] Capturar clic en botón "Cerrar Sesión"
- [ ] Llamar función `eliminarSesion()`
- [ ] Ejecutar `sessionStorage.clear()`
- [ ] Ocultar nav y módulos
- [ ] Mostrar sección de login
- [ ] Limpiar formulario de login

**Estado:** ⬜

---

## FASE 2: MÓDULO DE REGISTRO

### T-011: HTML - Formulario de Dueño
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡ Baja  
**Dependencias:** T-002  
**Módulo:** Registro - HTML

**Descripción:**
Crear formulario HTML para registro de dueños.

**Criterios de Aceptación:**
- Sección del módulo Registro
- Formulario con 3 campos: Nombre, Teléfono, Correo
- Labels descriptivos y obligatorios marcados (*)
- Placeholders con ejemplos
- Botón de envío
- Área para mensajes

**Tareas específicas:**
- [ ] Crear `<section id="registro-section" class="hidden">`
- [ ] Agregar título "Registro de Dueños y Mascotas"
- [ ] Crear `<form id="form-dueño">`
- [ ] Crear input nombre (required)
- [ ] Crear input teléfono (placeholder: "+59171234567")
- [ ] Crear input email (type="email")
- [ ] Agregar botón "Registrar Dueño"
- [ ] Agregar div para mensajes de validación

**Estado:** ⬜

---

### T-012: HTML - Formulario de Mascota
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡ Baja  
**Dependencias:** T-011  
**Módulo:** Registro - HTML

**Descripción:**
Crear formulario HTML para registro de mascotas.

**Criterios de Aceptación:**
- Formulario dentro de sección Registro
- Campos: Nombre, Especie, Raza
- Dropdown para seleccionar dueño
- Botón de envío
- Área para mensajes

**Tareas específicas:**
- [ ] Crear `<form id="form-mascota">` después del form dueño
- [ ] Crear input nombre mascota (required)
- [ ] Crear input especie (required)
- [ ] Crear input raza (required)
- [ ] Crear `<select id="select-dueño">` vacío
- [ ] Agregar botón "Registrar Mascota"
- [ ] Agregar div para mensajes

**Estado:** ⬜

---

### T-013: CSS - Estilos de Formularios de Registro
**Prioridad:** 🟠 Alta  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-011, T-012  
**Módulo:** Registro - CSS

**Descripción:**
Estilizar formularios de registro con diseño consistente.

**Criterios de Aceptación:**
- Formularios organizados verticalmente
- Inputs con borde, padding y focus visible
- Labels claros con asteriscos rojos para obligatorios
- Botones atractivos con hover
- Mensajes de error/éxito estilizados
- Responsive en móvil

**Tareas específicas:**
- [ ] Estilizar contenedores de formularios
- [ ] Estilizar labels (font-weight, spacing)
- [ ] Estilizar inputs y selects (border, padding, focus)
- [ ] Crear clases para mensajes (.error, .success)
- [ ] Estilizar botones con estados hover/active
- [ ] Agregar separación visual entre formularios
- [ ] Verificar responsive

**Estado:** ⬜

---

### T-014: JS - Validación de Teléfono (+591)
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-011  
**Módulo:** Registro - JavaScript

**Descripción:**
Implementar validación de formato de teléfono boliviano.

**Criterios de Aceptación:**
- Validar formato: +591 seguido de 8 dígitos
- Usar expresión regular
- Validar en tiempo real (blur event)
- Mostrar mensaje de error claro
- Marcar campo visualmente si inválido

**Tareas específicas:**
- [ ] Crear función `validarTelefono(valor)`
- [ ] Implementar regex: `/^\+591\d{8}$/`
- [ ] Capturar evento `blur` del input teléfono
- [ ] Mostrar/ocultar mensaje según validación
- [ ] Agregar clase `.invalid` al input si error
- [ ] Retornar true/false

**Estado:** ⬜

---

### T-015: JS - Validación de Email
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡ Baja  
**Dependencias:** T-011  
**Módulo:** Registro - JavaScript

**Descripción:**
Implementar validación de formato de correo electrónico.

**Criterios de Aceptación:**
- Validar que contenga @ y dominio
- Usar regex estándar de email
- Validar en tiempo real (blur)
- Mostrar mensaje si inválido
- Marcar campo visualmente

**Tareas específicas:**
- [ ] Crear función `validarEmail(valor)`
- [ ] Implementar regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- [ ] Capturar evento `blur` del input email
- [ ] Mostrar/ocultar mensaje según validación
- [ ] Agregar clase `.invalid` si error
- [ ] Retornar true/false

**Estado:** ⬜

---

### T-016: JS - Guardar Dueño en SessionStorage
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-014, T-015  
**Módulo:** Registro - JavaScript

**Descripción:**
Implementar lógica para guardar dueños en SessionStorage.

**Criterios de Aceptación:**
- Capturar submit del formulario
- Validar todos los campos
- Generar ID único autoincremental
- Guardar en SessionStorage como array de objetos
- Limpiar formulario después de guardar
- Mostrar mensaje de éxito

**Tareas específicas:**
- [ ] Crear función `guardarDueño()`
- [ ] Capturar evento submit del form-dueño
- [ ] Ejecutar todas las validaciones
- [ ] Si válido, crear objeto dueño con ID único
- [ ] Obtener array existente de SessionStorage o crear nuevo
- [ ] Agregar nuevo dueño al array
- [ ] Guardar array actualizado: `sessionStorage.setItem('dueños', JSON.stringify(array))`
- [ ] Limpiar formulario con `form.reset()`
- [ ] Mostrar mensaje "Dueño registrado exitosamente"

**Estado:** ⬜

---

### T-017: JS - Cargar Dueños en Dropdown
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-016  
**Módulo:** Registro - JavaScript

**Descripción:**
Llenar dinámicamente el select de dueños al registrar mascota.

**Criterios de Aceptación:**
- Leer dueños de SessionStorage
- Crear opciones del select dinámicamente
- Mostrar nombre e ID del dueño
- Manejar caso de sin dueños registrados
- Actualizar dropdown después de cada registro

**Tareas específicas:**
- [ ] Crear función `cargarDueñosEnSelect()`
- [ ] Leer `sessionStorage.getItem('dueños')`
- [ ] Si no hay dueños, mostrar "No hay dueños registrados"
- [ ] Iterar array y crear `<option>` para cada dueño
- [ ] Formato: "Nombre del dueño (ID: X)"
- [ ] Limpiar select antes de llenar
- [ ] Llamar función después de guardar dueño

**Estado:** ⬜

---

### T-018: JS - Guardar Mascota en SessionStorage
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-017  
**Módulo:** Registro - JavaScript

**Descripción:**
Implementar lógica para guardar mascotas con asociación a dueño.

**Criterios de Aceptación:**
- Capturar submit del formulario mascota
- Validar campos obligatorios
- Obtener ID del dueño seleccionado
- Generar ID único para mascota
- Guardar en SessionStorage
- Limpiar formulario

**Tareas específicas:**
- [ ] Crear función `guardarMascota()`
- [ ] Capturar evento submit del form-mascota
- [ ] Validar que todos los campos tengan valor
- [ ] Validar que se haya seleccionado un dueño
- [ ] Crear objeto mascota con ID único y dueñoId
- [ ] Obtener/crear array de mascotas
- [ ] Agregar mascota al array
- [ ] Guardar: `sessionStorage.setItem('mascotas', JSON.stringify(array))`
- [ ] Limpiar formulario
- [ ] Mostrar mensaje de éxito

**Estado:** ⬜

---

## FASE 3: MÓDULO DE AGENDA

### T-019: HTML - Formulario de Agenda
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡ Baja  
**Dependencias:** T-002  
**Módulo:** Agenda - HTML

**Descripción:**
Crear formulario para agendar servicios.

**Criterios de Aceptación:**
- Sección de módulo Agenda
- Campos: Fecha, Hora, Mascota (select), Servicio (select)
- Botón enviar
- Área para mensajes

**Tareas específicas:**
- [ ] Crear `<section id="agenda-section" class="hidden">`
- [ ] Agregar título "Agenda de Servicios"
- [ ] Crear `<form id="form-agenda">`
- [ ] Crear input fecha (type="date", min=hoy)
- [ ] Crear input hora (type="time")
- [ ] Crear select mascotas (vacío, se llena con JS)
- [ ] Crear select servicios con opciones predefinidas
- [ ] Agregar botón "Agendar Servicio"
- [ ] Agregar div para mensajes

**Estado:** ⬜

---

### T-020: CSS - Estilos de Formulario de Agenda
**Prioridad:** 🟠 Alta  
**Complejidad:** ⚡ Baja  
**Dependencias:** T-019  
**Módulo:** Agenda - CSS

**Descripción:**
Estilizar formulario de agenda consistentemente.

**Criterios de Aceptación:**
- Diseño similar a formularios de registro
- Inputs de fecha/hora estilizados
- Selects estilizados
- Responsive

**Tareas específicas:**
- [ ] Aplicar estilos consistentes con otros formularios
- [ ] Estilizar inputs date y time
- [ ] Estilizar selects
- [ ] Estilizar botón de envío
- [ ] Verificar responsive

**Estado:** ⬜

---

### T-021: JS - Cargar Mascotas en Select de Agenda
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-018, T-019  
**Módulo:** Agenda - JavaScript

**Descripción:**
Llenar select de mascotas con datos de SessionStorage.

**Criterios de Aceptación:**
- Leer mascotas y dueños de SessionStorage
- Mostrar "Nombre Mascota (Dueño: Nombre Dueño)"
- Manejar caso sin mascotas
- Deshabilitar formulario si no hay mascotas

**Tareas específicas:**
- [ ] Crear función `cargarMascotasEnAgenda()`
- [ ] Leer mascotas de SessionStorage
- [ ] Leer dueños para obtener nombres
- [ ] Si no hay mascotas, mostrar mensaje
- [ ] Crear options combinando info de mascota y dueño
- [ ] Llamar función al mostrar módulo Agenda

**Estado:** ⬜

---

### T-022: JS - Validar Fecha No Pasada
**Prioridad:** 🟠 Alta  
**Complejidad:** ⚡ Baja  
**Dependencias:** T-019  
**Módulo:** Agenda - JavaScript

**Descripción:**
Validar que la fecha seleccionada no sea anterior a hoy.

**Criterios de Aceptación:**
- Comparar fecha seleccionada con fecha actual
- Mostrar error si fecha es pasada
- Permitir fecha de hoy en adelante
- Validar al cambiar valor (change event)

**Tareas específicas:**
- [ ] Crear función `validarFecha(valor)`
- [ ] Obtener fecha actual con `new Date()`
- [ ] Comparar fecha seleccionada
- [ ] Si es menor que hoy, retornar false
- [ ] Capturar evento change del input fecha
- [ ] Mostrar mensaje si inválida

**Estado:** ⬜

---

### T-023: JS - Guardar Cita en SessionStorage
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-021, T-022  
**Módulo:** Agenda - JavaScript

**Descripción:**
Implementar guardado de citas agendadas.

**Criterios de Aceptación:**
- Capturar submit del formulario
- Validar todos los campos
- Generar ID único
- Guardar en SessionStorage
- Limpiar formulario
- Mostrar confirmación

**Tareas específicas:**
- [ ] Crear función `guardarCita()`
- [ ] Capturar evento submit del form-agenda
- [ ] Validar fecha, hora, mascota y servicio
- [ ] Crear objeto cita con ID único
- [ ] Obtener/crear array de citas
- [ ] Agregar cita al array
- [ ] Guardar: `sessionStorage.setItem('citas', JSON.stringify(array))`
- [ ] Limpiar formulario
- [ ] Mostrar mensaje "Servicio agendado exitosamente"

**Estado:** ⬜

---

## FASE 4: MÓDULO DE CARRITO

### T-024: HTML - Estructura del Carrito
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡ Baja  
**Dependencias:** T-002  
**Módulo:** Carrito - HTML

**Descripción:**
Crear estructura HTML para catálogo y carrito de compras.

**Criterios de Aceptación:**
- Sección del módulo Carrito
- Contenedor para catálogo (se llena con JS)
- Contenedor para productos en carrito
- Área de totales

**Tareas específicas:**
- [ ] Crear `<section id="carrito-section" class="hidden">`
- [ ] Agregar título "Carrito de Compras"
- [ ] Crear `<div id="catalogo-productos">`
- [ ] Crear `<div id="lista-carrito">`
- [ ] Crear `<div id="totales-carrito">`
- [ ] Agregar elementos para Subtotal y Total

**Estado:** ⬜

---

### T-025: CSS - Estilos de Catálogo y Carrito
**Prioridad:** 🟠 Alta  
**Complejidad:** ⚡⚡⚡ Alta  
**Dependencias:** T-024  
**Módulo:** Carrito - CSS

**Descripción:**
Estilizar catálogo en grid responsive y carrito como lista.

**Criterios de Aceptación:**
- Catálogo en grid (3-4 columnas desktop, 1 móvil)
- Tarjetas de producto atractivas
- Carrito como tabla o lista
- Totales destacados
- Botones visibles y accesibles

**Tareas específicas:**
- [ ] Crear grid para catálogo con CSS Grid
- [ ] Estilizar tarjetas de producto (sombra, padding, hover)
- [ ] Estilizar lista de carrito (tabla o flexbox)
- [ ] Estilizar área de totales (bold, tamaño grande)
- [ ] Agregar media queries para responsive
- [ ] Verificar en móvil (1 columna)

**Estado:** ⬜

---

### T-026: JS - Generar Catálogo Dinámicamente
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-024  
**Módulo:** Carrito - JavaScript

**Descripción:**
Crear array de productos y renderizar catálogo dinámicamente.

**Criterios de Aceptación:**
- Array de productos con: id, nombre, precio, descripción
- Función que crea HTML de cada producto
- Botón "Agregar al Carrito" en cada producto
- Renderizar al cargar módulo

**Tareas específicas:**
- [ ] Crear array `productos` con al menos 6 items
- [ ] Crear función `renderizarCatalogo()`
- [ ] Iterar productos y crear HTML para cada uno
- [ ] Incluir nombre, precio, descripción
- [ ] Agregar botón "Agregar" con data-id del producto
- [ ] Insertar HTML en `#catalogo-productos`
- [ ] Llamar función al mostrar módulo Carrito

**Estado:** ⬜

---

### T-027: JS - Agregar Producto al Carrito
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡⚡⚡ Alta  
**Dependencias:** T-026  
**Módulo:** Carrito - JavaScript

**Descripción:**
Implementar lógica para agregar productos al carrito.

**Criterios de Aceptación:**
- Capturar clic en botón "Agregar"
- Si producto existe en carrito, incrementar cantidad
- Si no existe, agregar con cantidad 1
- Guardar en SessionStorage
- Actualizar vista del carrito
- Mostrar feedback visual

**Tareas específicas:**
- [ ] Capturar clics en botones de agregar (event delegation)
- [ ] Obtener ID del producto desde data-id
- [ ] Leer carrito actual de SessionStorage
- [ ] Buscar si producto ya está en carrito
- [ ] Si existe: incrementar cantidad
- [ ] Si no existe: agregar nuevo con cantidad 1
- [ ] Guardar: `sessionStorage.setItem('carrito', JSON.stringify(array))`
- [ ] Llamar función `actualizarVistaCarrito()`
- [ ] Mostrar feedback ("Producto agregado")

**Estado:** ⬜

---

### T-028: JS - Renderizar Productos en Carrito
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-027  
**Módulo:** Carrito - JavaScript

**Descripción:**
Mostrar productos del carrito con cantidad y subtotales.

**Criterios de Aceptación:**
- Leer carrito de SessionStorage
- Mostrar cada producto con: nombre, precio, cantidad, subtotal
- Mostrar controles para modificar cantidad
- Manejar carrito vacío
- Actualizar en tiempo real

**Tareas específicas:**
- [ ] Crear función `actualizarVistaCarrito()`
- [ ] Leer carrito de SessionStorage
- [ ] Si vacío, mostrar "Carrito vacío"
- [ ] Si tiene productos, iterar y crear HTML
- [ ] Mostrar: nombre, precio unitario, cantidad, subtotal
- [ ] Agregar botones [-] y [+] para cantidad
- [ ] Insertar en `#lista-carrito`
- [ ] Llamar después de cada cambio en carrito

**Estado:** ⬜

---

### T-029: JS - Calcular Totales Automáticamente
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-028  
**Módulo:** Carrito - JavaScript

**Descripción:**
Calcular y mostrar subtotales y total general.

**Criterios de Aceptación:**
- Calcular subtotal por producto: precio × cantidad
- Sumar todos los subtotales para total
- Mostrar con formato de moneda
- Actualizar en tiempo real
- Mostrar Bs. 0.00 si carrito vacío

**Tareas específicas:**
- [ ] Crear función `calcularTotales()`
- [ ] Iterar productos del carrito
- [ ] Calcular subtotal de cada uno
- [ ] Sumar todos los subtotales
- [ ] Formatear números: `toFixed(2)`
- [ ] Agregar símbolo de moneda "Bs."
- [ ] Mostrar en `#totales-carrito`
- [ ] Llamar después de cada cambio

**Estado:** ⬜

---

### T-030: JS - Modificar Cantidad de Producto
**Prioridad:** 🟠 Alta  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-028  
**Módulo:** Carrito - JavaScript

**Descripción:**
Permitir incrementar/decrementar cantidad de productos en carrito.

**Criterios de Aceptación:**
- Botones [+] y [-] funcionales
- Incrementar aumenta cantidad en 1
- Decrementar reduce cantidad en 1
- Si cantidad llega a 0, eliminar producto
- Actualizar SessionStorage
- Recalcular totales

**Tareas específicas:**
- [ ] Capturar clics en botones [+] y [-]
- [ ] Obtener ID del producto
- [ ] Leer carrito actual
- [ ] Buscar producto y modificar cantidad
- [ ] Si cantidad = 0, eliminar del array
- [ ] Guardar carrito actualizado
- [ ] Llamar `actualizarVistaCarrito()`
- [ ] Llamar `calcularTotales()`

**Estado:** ⬜

---

## FASE 5: NAVEGACIÓN Y UX

### T-031: JS - Sistema de Navegación entre Módulos
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-008, T-011, T-019, T-024  
**Módulo:** Navegación - JavaScript

**Descripción:**
Implementar navegación SPA entre módulos sin recargar página.

**Criterios de Aceptación:**
- Capturar clics en enlaces de navegación
- Ocultar todos los módulos
- Mostrar módulo seleccionado
- Actualizar clase active en nav
- Cargar datos del módulo si es necesario

**Tareas específicas:**
- [ ] Crear función `mostrarModulo(idModulo)`
- [ ] Capturar clics en enlaces del nav
- [ ] Prevenir comportamiento default de enlaces
- [ ] Ocultar todas las secciones (agregar clase hidden)
- [ ] Mostrar sección seleccionada (quitar hidden)
- [ ] Actualizar clase `.active` en nav
- [ ] Si módulo = Agenda, cargar mascotas
- [ ] Si módulo = Carrito, renderizar catálogo y carrito

**Estado:** ⬜

---

### T-032: JS - Inicializar Sistema al Cargar
**Prioridad:** 🔴 Crítica  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-007, T-031  
**Módulo:** Infraestructura - JavaScript

**Descripción:**
Configurar inicialización del sistema al cargar página.

**Criterios de Aceptación:**
- Verificar sesión al cargar
- Mostrar login si no hay sesión
- Mostrar sistema si hay sesión activa
- Configurar event listeners
- Cargar datos iniciales

**Tareas específicas:**
- [ ] Crear función `inicializarSistema()`
- [ ] Ejecutar al cargar: `document.addEventListener('DOMContentLoaded', inicializarSistema)`
- [ ] Llamar `verificarSesion()`
- [ ] Si no hay sesión, mostrar login
- [ ] Si hay sesión, mostrar nav y módulo por defecto
- [ ] Configurar todos los event listeners
- [ ] Cargar datos de SessionStorage

**Estado:** ⬜

---

### T-033: CSS - Estados Hover y Focus
**Prioridad:** 🟡 Media  
**Complejidad:** ⚡ Baja  
**Dependencias:** T-003  
**Módulo:** CSS - UX

**Descripción:**
Agregar estados interactivos a todos los elementos clickeables.

**Criterios de Aceptación:**
- Todos los botones tienen hover
- Todos los inputs tienen focus visible
- Enlaces tienen hover
- Transiciones suaves
- Cursor pointer en clickeables

**Tareas específicas:**
- [ ] Agregar `:hover` a todos los botones
- [ ] Agregar `:focus` a inputs con outline visible
- [ ] Agregar `:hover` a enlaces de nav
- [ ] Agregar `cursor: pointer` a clickeables
- [ ] Agregar `transition` para suavizar cambios
- [ ] Probar todos los elementos

**Estado:** ⬜

---

### T-034: JS - Mensajes de Feedback Visual
**Prioridad:** 🟡 Media  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-016, T-018, T-023, T-027  
**Módulo:** UX - JavaScript

**Descripción:**
Mostrar mensajes de éxito/error temporales.

**Criterios de Aceptación:**
- Función reutilizable para mostrar mensajes
- Mensajes con colores según tipo (éxito/error)
- Desaparecen automáticamente después de 3 segundos
- Pueden cerrarse manualmente
- Posicionados de forma visible

**Tareas específicas:**
- [ ] Crear función `mostrarMensaje(texto, tipo)`
- [ ] Crear elemento div con el mensaje
- [ ] Agregar clase según tipo (.success, .error)
- [ ] Insertar en el DOM (top o bottom)
- [ ] Configurar setTimeout para ocultar después de 3s
- [ ] Agregar botón × para cerrar manualmente
- [ ] Estilizar mensajes flotantes
- [ ] Usar en todas las operaciones CRUD

**Estado:** ⬜

---

## FASE 6: VALIDACIONES Y PULIDO

### T-035: JS - Validación Global de Formularios
**Prioridad:** 🟡 Media  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-014, T-015  
**Módulo:** Validaciones - JavaScript

**Descripción:**
Reforzar validaciones en todos los formularios.

**Criterios de Aceptación:**
- Validar campos vacíos
- Validar formatos específicos
- Sanitizar inputs (trim)
- Prevenir envío si hay errores
- Mostrar errores claramente

**Tareas específicas:**
- [ ] Crear función `validarCampoVacio(valor)`
- [ ] Crear función `sanitizarTexto(valor)` con trim
- [ ] Aplicar validaciones en todos los forms
- [ ] Deshabilitar botones si hay errores
- [ ] Agregar clases visuales (.valid, .invalid)
- [ ] Probar todos los casos de error

**Estado:** ⬜

---

### T-036: CSS - Mejoras de Responsive
**Prioridad:** 🟡 Media  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** T-005, T-013, T-025  
**Módulo:** CSS - Responsive

**Descripción:**
Optimizar diseño responsive en todos los breakpoints.

**Criterios de Aceptación:**
- Probar en 320px, 480px, 768px, 1024px
- Textos legibles sin zoom
- Botones accesibles con dedos
- Formularios usables en móvil
- Grid de catálogo adaptativo

**Tareas específicas:**
- [ ] Probar en Chrome DevTools (diferentes dispositivos)
- [ ] Ajustar tamaños de fuente en móvil
- [ ] Ajustar padding/margins en móvil
- [ ] Verificar que botones tengan min-height: 44px
- [ ] Ajustar grid del catálogo por breakpoint
- [ ] Probar menú hamburguesa funcional
- [ ] Eliminar scroll horizontal

**Estado:** ⬜

---

### T-037: Accesibilidad - Atributos ARIA y Semántica
**Prioridad:** 🟢 Baja  
**Complejidad:** ⚡ Baja  
**Dependencias:** T-002  
**Módulo:** HTML - Accesibilidad

**Descripción:**
Mejorar accesibilidad con atributos ARIA y HTML semántico.

**Criterios de Aceptación:**
- Todos los inputs tienen labels asociados
- Imágenes tienen alt
- Mensajes de error tienen aria-describedby
- Navegación con teclado funcional
- Roles ARIA donde sea apropiado

**Tareas específicas:**
- [ ] Verificar que todos los labels tengan `for`
- [ ] Agregar `alt` a imágenes (si existen)
- [ ] Agregar `aria-describedby` a campos con errores
- [ ] Agregar `role="navigation"` al nav
- [ ] Probar navegación con Tab
- [ ] Verificar que focus sea visible

**Estado:** ⬜

---

### T-038: Testing - Pruebas Funcionales
**Prioridad:** 🟠 Alta  
**Complejidad:** ⚡⚡ Media  
**Dependencias:** Todas las anteriores  
**Módulo:** Testing

**Descripción:**
Ejecutar pruebas manuales de todos los flujos del sistema.

**Criterios de Aceptación:**
- Todos los flujos principales funcionan
- Validaciones operativas
- SessionStorage funciona correctamente
- No hay errores en consola
- Sistema responsive

**Tareas específicas:**
- [ ] Probar flujo completo de login
- [ ] Probar registro de dueños y mascotas
- [ ] Probar agendamiento de servicios
- [ ] Probar carrito completo (agregar, modificar, eliminar)
- [ ] Probar navegación entre módulos
- [ ] Probar cierre de sesión
- [ ] Probar persistencia con F5
- [ ] Probar pérdida de datos al cerrar navegador
- [ ] Verificar en diferentes navegadores
- [ ] Verificar en móvil

**Estado:** ⬜

---

### T-039: Documentación - README
**Prioridad:** 🟡 Media  
**Complejidad:** ⚡ Baja  
**Dependencias:** T-038  
**Módulo:** Documentación

**Descripción:**
Crear archivo README.md con información del proyecto.

**Criterios de Aceptación:**
- Título y descripción
- Tecnologías usadas
- Instrucciones de instalación
- Credenciales de acceso
- Estructura de archivos
- Funcionalidades principales
- Autoría

**Tareas específicas:**
- [ ] Crear archivo `README.md` en raíz
- [ ] Agregar título y descripción del proyecto
- [ ] Listar tecnologías: HTML5, CSS3, JavaScript ES6
- [ ] Explicar cómo ejecutar (abrir index.html)
- [ ] Documentar credenciales: admin / 1234
- [ ] Listar funcionalidades principales
- [ ] Agregar captura de pantalla (opcional)
- [ ] Incluir nombre del autor y fecha

**Estado:** ⬜

---

### T-040: Optimización - Limpieza de Código
**Prioridad:** 🟢 Baja  
**Complejidad:** ⚡ Baja  
**Dependencias:** T-038  
**Módulo:** Calidad de Código

**Descripción:**
Limpiar código, eliminar console.logs y optimizar.

**Criterios de Aceptación:**
- Sin console.log en producción
- Código comentado donde sea necesario
- Variables con nombres descriptivos
- Funciones pequeñas y enfocadas
- Sin código duplicado

**Tareas específicas:**
- [ ] Eliminar o comentar console.log de debugging
- [ ] Agregar comentarios en secciones complejas
- [ ] Verificar nombres de variables descriptivos
- [ ] Refactorizar código duplicado
- [ ] Verificar indentación consistente
- [ ] Eliminar código muerto (no usado)

**Estado:** ⬜

---

## RESUMEN DEL BACKLOG

### Por Fase

| Fase | Tareas | Prioridad | Tiempo Estimado |
|------|--------|-----------|-----------------|
| Fase 0: Configuración | T-001 a T-003 | Crítica | 2-3 horas |
| Fase 1: Autenticación | T-004 a T-010 | Crítica | 6-8 horas |
| Fase 2: Registro | T-011 a T-018 | Crítica | 8-10 horas |
| Fase 3: Agenda | T-019 a T-023 | Crítica | 5-7 horas |
| Fase 4: Carrito | T-024 a T-030 | Crítica | 8-10 horas |
| Fase 5: Navegación | T-031 a T-034 | Alta/Media | 4-5 horas |
| Fase 6: Pulido | T-035 a T-040 | Media/Baja | 4-6 horas |

**TOTAL ESTIMADO:** 37-49 horas de desarrollo

---

### Por Prioridad

- 🔴 **Crítica (MVP):** 26 tareas
- 🟠 **Alta:** 6 tareas
- 🟡 **Media:** 6 tareas
- 🟢 **Baja:** 2 tareas

---

### Por Complejidad

- ⚡ **Baja:** 13 tareas
- ⚡⚡ **Media:** 24 tareas
- ⚡⚡⚡ **Alta:** 3 tareas

---

## ORDEN DE IMPLEMENTACIÓN RECOMENDADO

### Sprint 1 - Fundamentos (10-12 horas)
1. T-001, T-002, T-003: Configuración inicial
2. T-004, T-005, T-006, T-007: Login básico
3. T-008, T-009, T-010: Navegación y logout
4. T-032: Inicialización del sistema

**Entregable:** Sistema con login funcional

---

### Sprint 2 - Registro (8-10 horas)
5. T-011, T-012, T-013: Formularios HTML/CSS
6. T-014, T-015: Validaciones
7. T-016, T-017, T-018: Lógica de guardado

**Entregable:** Módulo de registro funcional

---

### Sprint 3 - Agenda (5-7 horas)
8. T-019, T-020: Formulario HTML/CSS
9. T-021, T-022, T-023: Lógica de agendamiento

**Entregable:** Módulo de agenda funcional

---

### Sprint 4 - Carrito (10-12 horas)
10. T-024, T-025: Estructura HTML/CSS
11. T-026, T-027, T-028: Catálogo y agregar
12. T-029, T-030: Cálculos y modificación

**Entregable:** Módulo de carrito funcional

---

### Sprint 5 - Integración y Pulido (8-10 horas)
13. T-031: Navegación completa
14. T-033, T-034: UX mejorada
15. T-035, T-036: Validaciones y responsive
16. T-037: Accesibilidad
17. T-038: Testing completo
18. T-039, T-040: Documentación y limpieza

**Entregable:** Sistema completo y probado

---

## CHECKLIST DE VERIFICACIÓN FINAL

### Funcionalidad ✅
- [ ] Login con validación funciona
- [ ] Registro de dueños con validaciones
- [ ] Registro de mascotas asociadas
- [ ] Agendamiento de servicios con validaciones
- [ ] Catálogo dinámico renderizado
- [ ] Agregar productos al carrito funciona
- [ ] Modificar cantidad de productos
- [ ] Calcular totales automáticamente
- [ ] Navegación entre módulos sin recargar
- [ ] Cerrar sesión limpia SessionStorage

### Validaciones ✅
- [ ] Teléfono: +591 + 8 dígitos
- [ ] Email: formato válido
- [ ] Campos obligatorios no vacíos
- [ ] Fecha no pasada en agenda
- [ ] No agendar sin mascotas
- [ ] No registrar mascota sin dueños

### Persistencia ✅
- [ ] Datos persisten durante sesión
- [ ] Datos persisten con F5 (recarga)
- [ ] Datos se eliminan al cerrar navegador
- [ ] Datos se eliminan al cerrar sesión

### Diseño y UX ✅
- [ ] Diseño responsive en móvil y desktop
- [ ] Menú hamburguesa en móvil
- [ ] Hover y focus visibles
- [ ] Mensajes de error/éxito claros
- [ ] Sin errores en consola
- [ ] Textos legibles (mínimo 14px móvil)

### Código ✅
- [ ] Archivos separados (HTML/CSS/JS)
- [ ] No CSS inline ni JS inline
- [ ] Código indentado y legible
- [ ] Variables con nombres descriptivos
- [ ] Sin código duplicado significativo
- [ ] Sin console.log en versión final

### Documentación ✅
- [ ] README.md completo
- [ ] Comentarios en código complejo
- [ ] Credenciales documentadas

---

## NOTAS FINALES

### Consejos para Implementación

1. **Trabaja incrementalmente:** Completa cada fase antes de pasar a la siguiente
2. **Prueba constantemente:** No esperes al final para probar
3. **Usa Git:** Haz commits frecuentes con mensajes descriptivos
4. **Consulta documentación:** MDN es tu mejor amigo
5. **No te compliques:** Si algo es muy difícil, simplifica

### Recursos Útiles

- **HTML/CSS/JS:** MDN Web Docs (developer.mozilla.org)
- **Flexbox:** CSS-Tricks Flexbox Guide
- **Grid:** CSS-Tricks Grid Guide
- **SessionStorage:** MDN SessionStorage API
- **Validaciones:** MDN Form Validation

### Criterios de Evaluación Sugeridos

- **Funcionalidad (40%):** Todos los requisitos implementados
- **Código (25%):** Organizado, limpio, buenas prácticas
- **Diseño (20%):** Responsive, atractivo, usable
- **Validaciones (15%):** Todas operativas y efectivas

---

**Total de Tareas:** 40  
**Última actualización:** 09/12/2025  
**Versión:** 1.0
