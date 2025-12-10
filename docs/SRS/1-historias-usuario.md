# Historias de Usuario
## Minisistema de Gestión para Spa de Mascotas

---

## FORMATO DE HISTORIA DE USUARIO

```
Como [ROL]
Quiero [FUNCIONALIDAD]
Para [BENEFICIO/OBJETIVO]

Criterios de Aceptación:
- [Criterio 1]
- [Criterio 2]
- [Criterio n]

Prioridad: Alta / Media / Baja
Módulo: [Nombre del módulo]
```

---

## MÓDULO 0: AUTENTICACIÓN Y SESIÓN

### HU-001: Acceso al Sistema mediante Login

**Como** empleado del spa  
**Quiero** ingresar al sistema con usuario y contraseña  
**Para** acceder a las funcionalidades de gestión

**Criterios de Aceptación:**
- El sistema muestra un formulario de login al cargar
- El formulario contiene campos: Usuario y Contraseña
- Existe un botón "Iniciar Sesión"
- Si ingreso credenciales correctas (admin/1234), accedo al sistema
- Si las credenciales son incorrectas, veo un mensaje de error claro
- Los campos no pueden estar vacíos al enviar
- No puedo acceder a los módulos sin estar autenticado

**Prioridad:** Alta  
**Módulo:** Autenticación

---

### HU-002: Mantener Sesión Activa

**Como** empleado autenticado  
**Quiero** que mi sesión se mantenga mientras uso el sistema  
**Para** no tener que volver a iniciar sesión constantemente

**Criterios de Aceptación:**
- Al autenticarme, mi sesión se guarda en SessionStorage
- Puedo navegar entre módulos sin perder la sesión
- Si recargo la página estando autenticado, permanezco dentro del sistema
- Si cierro el navegador, la sesión se pierde (comportamiento de SessionStorage)

**Prioridad:** Alta  
**Módulo:** Autenticación

---

### HU-003: Cerrar Sesión

**Como** empleado autenticado  
**Quiero** poder cerrar sesión de forma segura  
**Para** proteger el acceso al sistema cuando termine mi turno

**Criterios de Aceptación:**
- Veo un botón "Cerrar Sesión" visible en la barra de navegación
- Al hacer clic, se elimina la sesión de SessionStorage
- El sistema me redirige a la pantalla de login
- No puedo volver atrás sin autenticarme nuevamente

**Prioridad:** Alta  
**Módulo:** Autenticación

---

## MÓDULO 1: REGISTRO DE DUEÑOS Y MASCOTAS

### HU-004: Registrar Dueño de Mascota

**Como** empleado del spa  
**Quiero** registrar los datos de un dueño de mascota  
**Para** tener un registro de nuestros clientes

**Criterios de Aceptación:**
- El formulario contiene campos: Nombre, Teléfono, Correo
- El campo Nombre es obligatorio y no acepta solo espacios
- El campo Teléfono valida formato: +591 seguido de 8 dígitos (ej: +59171234567)
- El campo Correo valida formato de email (contiene @ y dominio)
- Al enviar el formulario, los datos se guardan en SessionStorage
- Veo un mensaje de confirmación al guardar exitosamente
- Si hay errores de validación, veo mensajes claros indicando qué corregir
- Después de guardar, el formulario se limpia para un nuevo registro

**Prioridad:** Alta  
**Módulo:** Registro

---

### HU-005: Registrar Mascota

**Como** empleado del spa  
**Quiero** registrar los datos de una mascota  
**Para** asociarla con su dueño y poder agendarle servicios

**Criterios de Aceptación:**
- El formulario contiene campos: Nombre, Especie, Raza
- Todos los campos son obligatorios
- El campo Nombre no acepta solo espacios
- La mascota se asocia con un dueño registrado previamente
- Los datos se guardan en SessionStorage con un ID único
- Veo un mensaje de confirmación al guardar
- El formulario se limpia después de guardar

**Prioridad:** Alta  
**Módulo:** Registro

---

### HU-006: Validar Campos del Formulario de Dueño

**Como** empleado del spa  
**Quiero** que el sistema valide los datos antes de guardar  
**Para** asegurar la calidad de la información registrada

**Criterios de Aceptación:**
- El teléfono debe iniciar con +591 y tener exactamente 8 dígitos después
- El correo debe contener @ y un dominio válido (ej: ejemplo.com)
- El nombre no puede estar vacío ni contener solo espacios
- Si un campo es inválido, veo un mensaje específico debajo del campo
- El botón de envío no funciona si hay campos inválidos
- Las validaciones ocurren al perder el foco del campo (blur) o al enviar

**Prioridad:** Alta  
**Módulo:** Registro

---

### HU-007: Validar Campos del Formulario de Mascota

**Como** empleado del spa  
**Quiero** que todos los campos de mascota sean obligatorios  
**Para** tener información completa de cada animal

**Criterios de Aceptación:**
- Nombre, Especie y Raza son campos requeridos
- Ningún campo acepta solo espacios en blanco
- Veo mensajes de error claros si intento enviar campos vacíos
- Las validaciones son en tiempo real o al enviar el formulario

**Prioridad:** Media  
**Módulo:** Registro

---

## MÓDULO 2: AGENDA DE SERVICIOS

### HU-008: Agendar Servicio para Mascota

**Como** empleado del spa  
**Quiero** agendar un servicio con fecha y hora específica  
**Para** organizar los turnos de atención

**Criterios de Aceptación:**
- El formulario contiene: Fecha, Hora, Mascota, Tipo de Servicio
- Puedo seleccionar una mascota de las registradas previamente
- La fecha no puede ser anterior al día actual
- El tipo de servicio se selecciona de una lista predefinida
- Los datos se guardan en SessionStorage
- Veo confirmación al agendar exitosamente
- El formulario se limpia después de guardar

**Prioridad:** Alta  
**Módulo:** Agenda

---

### HU-009: Seleccionar Mascota Registrada

**Como** empleado del spa  
**Quiero** seleccionar una mascota de las ya registradas  
**Para** asociarle un servicio agendado

**Criterios de Aceptación:**
- Veo un selector (dropdown/select) con mascotas registradas
- Cada opción muestra: Nombre de la mascota + Nombre del dueño
- Si no hay mascotas registradas, veo un mensaje indicándolo
- Solo puedo agendar si selecciono una mascota válida

**Prioridad:** Alta  
**Módulo:** Agenda

---

### HU-010: Validar Fecha de Servicio

**Como** empleado del spa  
**Quiero** que el sistema valide que la fecha sea válida  
**Para** evitar agendar servicios en fechas pasadas

**Criterios de Aceptación:**
- No puedo seleccionar una fecha anterior a hoy
- El campo de fecha está restringido desde la fecha actual en adelante
- Si intento enviar una fecha inválida, veo un mensaje de error
- La fecha se guarda en formato estándar (YYYY-MM-DD)

**Prioridad:** Media  
**Módulo:** Agenda

---

### HU-011: Tipos de Servicio Disponibles

**Como** empleado del spa  
**Quiero** seleccionar el tipo de servicio de una lista  
**Para** estandarizar los servicios ofrecidos

**Criterios de Aceptación:**
- Veo opciones como: Baño completo, Corte de pelo, Corte de uñas, Limpieza dental
- El tipo de servicio es obligatorio
- No puedo ingresar texto libre, solo seleccionar opciones predefinidas
- El servicio seleccionado se guarda correctamente

**Prioridad:** Media  
**Módulo:** Agenda

---

## MÓDULO 3: CARRITO DE COMPRAS

### HU-012: Ver Catálogo de Productos

**Como** empleado del spa  
**Quiero** ver un catálogo de productos y servicios disponibles  
**Para** conocer lo que puedo vender a los clientes

**Criterios de Aceptación:**
- El catálogo se genera dinámicamente con JavaScript
- Cada ítem muestra: Nombre, Descripción, Precio
- Los productos se muestran en formato de tarjetas o lista
- El catálogo es responsive (se adapta a móvil y desktop)
- Los productos incluyen: servicios sin hora, comida, juguetes, etc.

**Prioridad:** Alta  
**Módulo:** Carrito

---

### HU-013: Agregar Producto al Carrito

**Como** empleado del spa  
**Quiero** agregar productos al carrito de compras  
**Para** registrar la venta al cliente

**Criterios de Aceptación:**
- Cada producto tiene un botón "Comprar" o "Agregar al carrito"
- Al hacer clic, el producto se añade al carrito
- Veo feedback visual inmediato (animación, mensaje, o actualización del carrito)
- Si agrego el mismo producto varias veces, aumenta su cantidad
- Los productos en el carrito se guardan en SessionStorage

**Prioridad:** Alta  
**Módulo:** Carrito

---

### HU-014: Visualizar Carrito de Compras

**Como** empleado del spa  
**Quiero** ver los productos que he agregado al carrito  
**Para** verificar la compra antes de finalizarla

**Criterios de Aceptación:**
- Veo una sección o página del carrito de compras
- Cada ítem muestra: Nombre, Precio unitario, Cantidad
- Puedo ver el carrito actualizado en tiempo real
- Si el carrito está vacío, veo un mensaje indicándolo
- El carrito es accesible desde cualquier parte del sistema

**Prioridad:** Alta  
**Módulo:** Carrito

---

### HU-015: Calcular Subtotal y Total Automáticamente

**Como** empleado del spa  
**Quiero** que el sistema calcule automáticamente el total de la compra  
**Para** conocer el monto a cobrar sin hacer cálculos manuales

**Criterios de Aceptación:**
- El subtotal de cada producto se calcula: Precio × Cantidad
- El total general suma todos los subtotales
- Los cálculos se actualizan en tiempo real al agregar productos
- Los montos se muestran con formato de moneda (Bs. o $)
- Los cálculos son precisos (sin errores de redondeo)

**Prioridad:** Alta  
**Módulo:** Carrito

---

### HU-016: Actualizar Cantidad de Productos en Carrito

**Como** empleado del spa  
**Quiero** poder modificar la cantidad de un producto en el carrito  
**Para** ajustar la compra según las necesidades del cliente

**Criterios de Aceptación:**
- Cada producto en el carrito tiene controles para aumentar/disminuir cantidad
- Al cambiar la cantidad, el subtotal se recalcula automáticamente
- Si la cantidad llega a 0, el producto se elimina del carrito
- Los cambios se reflejan inmediatamente en el total

**Prioridad:** Media  
**Módulo:** Carrito

---

## REQUISITOS TRANSVERSALES

### HU-017: Navegación entre Módulos

**Como** empleado autenticado  
**Quiero** navegar fácilmente entre los diferentes módulos  
**Para** acceder rápidamente a cualquier funcionalidad

**Criterios de Aceptación:**
- Veo una barra de navegación visible en todo momento
- La barra contiene enlaces a: Registro, Agenda, Carrito
- El módulo activo se resalta visualmente
- La navegación funciona sin recargar la página
- Puedo volver al inicio desde cualquier módulo

**Prioridad:** Alta  
**Módulo:** Transversal

---

### HU-018: Diseño Responsive en Móvil

**Como** empleado del spa que usa dispositivos móviles  
**Quiero** que el sistema se adapte a pantallas pequeñas  
**Para** poder usarlo desde mi teléfono o tablet

**Criterios de Aceptación:**
- El sistema funciona correctamente en resoluciones desde 320px
- La navegación se convierte en menú hamburguesa en móvil
- Los formularios se apilan verticalmente
- El catálogo se ajusta a una columna en móvil
- No hay scroll horizontal innecesario
- Los textos son legibles sin hacer zoom

**Prioridad:** Alta  
**Módulo:** Transversal

---

### HU-019: Feedback Visual de Acciones

**Como** empleado del spa  
**Quiero** recibir confirmación visual de mis acciones  
**Para** saber que el sistema procesó correctamente mi solicitud

**Criterios de Aceptación:**
- Veo mensajes de éxito al guardar datos (color verde)
- Veo mensajes de error si algo falla (color rojo)
- Los botones tienen efecto hover y active
- Los formularios muestran estados de validación (correcto/incorrecto)
- Los mensajes son claros y específicos

**Prioridad:** Media  
**Módulo:** Transversal

---

### HU-020: Persistencia Durante la Sesión

**Como** empleado del spa  
**Quiero** que mis datos se mantengan mientras uso el sistema  
**Para** no perder información al navegar entre módulos

**Criterios de Aceptación:**
- Todos los datos se guardan en SessionStorage
- Los datos persisten al navegar entre módulos
- Los datos persisten al recargar la página (si la sesión está activa)
- Al cerrar el navegador, todos los datos se eliminan
- No hay conflictos entre diferentes tipos de datos

**Prioridad:** Alta  
**Módulo:** Transversal

---

## RESUMEN DE PRIORIDADES

### Prioridad Alta (Debe implementarse)
- HU-001 a HU-006: Autenticación y Registro completo
- HU-008, HU-009: Agenda básica
- HU-012 a HU-015: Carrito funcional
- HU-017, HU-018, HU-020: Navegación y persistencia

### Prioridad Media (Deseable)
- HU-007: Validaciones adicionales de mascota
- HU-010, HU-011: Validaciones de agenda
- HU-016: Modificación de cantidad en carrito
- HU-019: Feedback visual mejorado

### Prioridad Baja (Opcional para mejora)
- Funcionalidades adicionales no especificadas

---

**Total de Historias de Usuario:** 20  
**Módulos cubiertos:** 4 (Autenticación, Registro, Agenda, Carrito)  
**Última actualización:** 09/12/2025
