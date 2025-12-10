# Flujos de Usuario
## Minisistema de Gestión para Spa de Mascotas

---

## INTRODUCCIÓN

Este documento describe los **flujos de usuario** completos del sistema, incluyendo caminos exitosos, alternativos y de error. Cada flujo representa una secuencia de pasos que un empleado del spa puede realizar.

---

## LEYENDA DE SÍMBOLOS

```
→  Paso siguiente
↳  Decisión o bifurcación
✓  Flujo exitoso
✗  Flujo de error
⚠  Validación o advertencia
🔄 Retorno o repetición
```

---

## FLUJO 1: ACCESO AL SISTEMA (LOGIN)

### Flujo Principal - Login Exitoso

```
INICIO
  ↓
1. Usuario abre el sistema (index.html)
  ↓
2. Sistema muestra pantalla de login
  ↓
3. Usuario ingresa credenciales:
   - Usuario: admin
   - Contraseña: 1234
  ↓
4. Usuario hace clic en "Iniciar Sesión"
  ↓
5. Sistema valida credenciales ✓
  ↓
6. Sistema guarda sesión en SessionStorage:
   {sesion: {autenticado: true, usuario: "admin"}}
  ↓
7. Sistema oculta formulario de login
  ↓
8. Sistema muestra:
   - Barra de navegación con módulos
   - Botón "Cerrar Sesión"
   - Módulo de inicio/bienvenida
  ↓
FIN (Usuario autenticado)
```

### Flujo Alternativo 1A - Credenciales Incorrectas

```
...desde paso 5 del flujo principal

5. Sistema valida credenciales ✗
  ↓
6. Sistema muestra mensaje de error:
   "Usuario o contraseña incorrectos"
  ↓
7. Formulario permanece visible
  ↓
8. Campos se mantienen con los valores ingresados
  ↓
🔄 Usuario puede reintentar desde paso 3
```

### Flujo Alternativo 1B - Campos Vacíos

```
...desde paso 4 del flujo principal

4. Usuario hace clic en "Iniciar Sesión"
  ↓
⚠ Sistema detecta campos vacíos
  ↓
5. Sistema muestra mensaje de error:
   "Por favor complete todos los campos"
  ↓
6. Se marcan visualmente los campos vacíos
  ↓
🔄 Usuario debe completar campos (volver a paso 3)
```

### Flujo Alternativo 1C - Recarga de Página con Sesión Activa

```
INICIO (sesión ya existe en SessionStorage)
  ↓
1. Usuario recarga la página (F5)
  ↓
2. Sistema verifica SessionStorage
  ↓
3. Sistema detecta sesión activa ✓
  ↓
4. Sistema omite pantalla de login
  ↓
5. Sistema muestra directamente interfaz autenticada
  ↓
FIN (Usuario permanece autenticado)
```

---

## FLUJO 2: NAVEGACIÓN ENTRE MÓDULOS

### Flujo Principal - Cambio de Módulo

```
INICIO (Usuario autenticado)
  ↓
1. Usuario ve barra de navegación con opciones:
   - Registro
   - Agenda
   - Carrito
  ↓
2. Usuario hace clic en un módulo (ej: "Registro")
  ↓
3. Sistema oculta módulo actual
  ↓
4. Sistema muestra módulo seleccionado
  ↓
5. Sistema resalta módulo activo en navegación
  ↓
6. Sistema carga datos del SessionStorage si aplica
  ↓
FIN (Usuario en nuevo módulo)
```

### Consideraciones de Navegación

- La navegación NO recarga la página (SPA behavior)
- Los datos persisten en SessionStorage entre módulos
- El módulo activo se indica visualmente
- El botón "Cerrar Sesión" siempre está visible

---

## FLUJO 3: REGISTRO DE DUEÑO Y MASCOTA

### Flujo Principal - Registro Completo

```
INICIO (Usuario en módulo Registro)
  ↓
PARTE A: REGISTRAR DUEÑO
  ↓
1. Sistema muestra formulario de dueño con campos:
   - Nombre
   - Teléfono
   - Correo
  ↓
2. Usuario completa campo Nombre: "Juan Pérez"
  ↓
3. Usuario completa campo Teléfono: "+59171234567"
  ↓
⚠ Sistema valida formato en tiempo real:
   ✓ Comienza con +591
   ✓ Tiene 8 dígitos después
  ↓
4. Usuario completa campo Correo: "juan@mail.com"
  ↓
⚠ Sistema valida formato:
   ✓ Contiene @
   ✓ Tiene dominio válido
  ↓
5. Usuario hace clic en "Registrar Dueño"
  ↓
6. Sistema valida todos los campos ✓
  ↓
7. Sistema genera ID único para dueño (ej: 1)
  ↓
8. Sistema guarda en SessionStorage:
   {
     id: 1,
     nombre: "Juan Pérez",
     telefono: "+59171234567",
     email: "juan@mail.com"
   }
  ↓
9. Sistema muestra mensaje de éxito:
   "Dueño registrado exitosamente"
  ↓
10. Sistema limpia formulario de dueño
  ↓
PARTE B: REGISTRAR MASCOTA
  ↓
11. Sistema muestra formulario de mascota con campos:
    - Nombre
    - Especie
    - Raza
    - [Selector de dueño]
  ↓
12. Usuario completa campo Nombre: "Firulais"
  ↓
13. Usuario completa campo Especie: "Perro"
  ↓
14. Usuario completa campo Raza: "Labrador"
  ↓
15. Usuario selecciona dueño del dropdown:
    "Juan Pérez (ID: 1)"
  ↓
16. Usuario hace clic en "Registrar Mascota"
  ↓
17. Sistema valida todos los campos ✓
  ↓
18. Sistema genera ID único para mascota (ej: 1)
  ↓
19. Sistema guarda en SessionStorage:
    {
      id: 1,
      nombre: "Firulais",
      especie: "Perro",
      raza: "Labrador",
      dueñoId: 1
    }
  ↓
20. Sistema muestra mensaje de éxito:
    "Mascota registrada exitosamente"
  ↓
21. Sistema limpia formulario de mascota
  ↓
FIN (Dueño y mascota registrados)
```

### Flujo Alternativo 3A - Error en Validación de Teléfono

```
...desde paso 3 del flujo principal

3. Usuario ingresa teléfono: "71234567" (sin +591)
  ↓
⚠ Sistema valida al perder foco del campo ✗
  ↓
4. Sistema muestra mensaje debajo del campo:
   "El teléfono debe comenzar con +591 seguido de 8 dígitos"
  ↓
5. Campo se marca con borde rojo
  ↓
6. Botón "Registrar Dueño" permanece deshabilitado
  ↓
🔄 Usuario corrige el valor (volver a paso 3)
```

### Flujo Alternativo 3B - Error en Validación de Email

```
...desde paso 4 del flujo principal

4. Usuario ingresa correo: "juan.mail.com" (sin @)
  ↓
⚠ Sistema valida al perder foco ✗
  ↓
5. Sistema muestra mensaje:
   "Ingrese un correo electrónico válido"
  ↓
6. Campo se marca con borde rojo
  ↓
🔄 Usuario corrige el formato
```

### Flujo Alternativo 3C - Nombre Vacío o Solo Espacios

```
...desde paso 5 del flujo principal (al enviar)

5. Usuario hace clic en "Registrar Dueño"
  ↓
⚠ Sistema detecta campo Nombre vacío o solo espacios ✗
  ↓
6. Sistema muestra mensaje:
   "El nombre es obligatorio"
  ↓
7. Campo Nombre se marca con borde rojo
  ↓
8. Formulario no se envía
  ↓
🔄 Usuario debe completar campo (volver a paso 2)
```

### Flujo Alternativo 3D - Registrar Mascota sin Dueños

```
INICIO (No hay dueños registrados)
  ↓
1. Usuario intenta registrar mascota
  ↓
2. Sistema verifica dueños en SessionStorage
  ↓
3. Sistema detecta que no hay dueños ✗
  ↓
4. Sistema muestra mensaje:
   "Primero debe registrar un dueño"
  ↓
5. Dropdown de dueños muestra opción:
   "No hay dueños registrados"
  ↓
6. Botón "Registrar Mascota" está deshabilitado
  ↓
FIN (Usuario debe registrar dueño primero)
```

---

## FLUJO 4: AGENDAR SERVICIO

### Flujo Principal - Agendamiento Exitoso

```
INICIO (Usuario en módulo Agenda)
  ↓
1. Sistema muestra formulario de agenda con:
   - Fecha
   - Hora
   - Mascota (dropdown)
   - Tipo de Servicio (dropdown)
  ↓
2. Sistema carga mascotas del SessionStorage
  ↓
3. Sistema llena dropdown con opciones:
   "Firulais (Dueño: Juan Pérez)"
   "Max (Dueño: María García)"
   ...
  ↓
4. Usuario selecciona fecha: "2025-12-15"
  ↓
⚠ Sistema valida que fecha no sea pasada ✓
  ↓
5. Usuario selecciona hora: "10:00"
  ↓
6. Usuario selecciona mascota: "Firulais (ID: 1)"
  ↓
7. Usuario selecciona servicio: "Baño completo"
  ↓
8. Usuario hace clic en "Agendar Servicio"
  ↓
9. Sistema valida todos los campos ✓
  ↓
10. Sistema genera ID único para cita (ej: 1)
  ↓
11. Sistema guarda en SessionStorage:
    {
      id: 1,
      fecha: "2025-12-15",
      hora: "10:00",
      mascotaId: 1,
      servicio: "Baño completo"
    }
  ↓
12. Sistema muestra mensaje de éxito:
    "Servicio agendado exitosamente"
  ↓
13. Sistema limpia formulario
  ↓
FIN (Servicio agendado)
```

### Flujo Alternativo 4A - No Hay Mascotas Registradas

```
INICIO (No hay mascotas en SessionStorage)
  ↓
1. Sistema verifica mascotas disponibles
  ↓
2. Sistema detecta que no hay mascotas ✗
  ↓
3. Sistema muestra mensaje:
   "No hay mascotas registradas. Registre una mascota primero."
  ↓
4. Dropdown muestra: "No hay mascotas disponibles"
  ↓
5. Botón "Agendar Servicio" está deshabilitado
  ↓
FIN (Usuario debe ir a Registro)
```

### Flujo Alternativo 4B - Fecha Pasada

```
...desde paso 4 del flujo principal

4. Usuario selecciona fecha: "2025-12-01" (fecha pasada)
  ↓
⚠ Sistema valida al perder foco ✗
  ↓
5. Sistema muestra mensaje:
   "No puede agendar servicios en fechas pasadas"
  ↓
6. Campo fecha se marca con borde rojo
  ↓
7. Botón "Agendar" permanece deshabilitado
  ↓
🔄 Usuario debe seleccionar fecha válida (desde hoy en adelante)
```

### Flujo Alternativo 4C - Campos Incompletos

```
...desde paso 8 del flujo principal

8. Usuario hace clic en "Agendar Servicio"
  ↓
⚠ Sistema detecta campos vacíos ✗
  ↓
9. Sistema marca todos los campos vacíos con borde rojo
  ↓
10. Sistema muestra mensaje:
    "Complete todos los campos requeridos"
  ↓
🔄 Usuario debe completar campos faltantes
```

---

## FLUJO 5: CARRITO DE COMPRAS

### Flujo Principal - Compra Exitosa

```
INICIO (Usuario en módulo Carrito)
  ↓
1. Sistema muestra catálogo de productos dinámicamente:
   - Baño completo - Bs. 150
   - Corte de pelo - Bs. 200
   - Corte de uñas - Bs. 50
   - Limpieza dental - Bs. 180
   - Alimento premium - Bs. 350
   - Juguete de goma - Bs. 80
  ↓
2. Usuario navega por el catálogo
  ↓
3. Usuario hace clic en "Agregar al Carrito" en "Baño completo"
  ↓
4. Sistema verifica si producto ya está en carrito
  ↓
  ↳ SI está: incrementa cantidad en 1
  ↳ NO está: agrega nuevo item con cantidad 1
  ↓
5. Sistema guarda/actualiza en SessionStorage:
   carrito: [
     {
       id: 1,
       nombre: "Baño completo",
       precio: 150,
       cantidad: 1
     }
   ]
  ↓
6. Sistema muestra feedback visual:
   - Animación en botón "Agregado ✓"
   - O mensaje flotante "Producto agregado"
  ↓
7. Sistema actualiza vista del carrito en tiempo real
  ↓
8. Sistema calcula automáticamente:
   - Subtotal: 150 × 1 = Bs. 150
   - Total: Bs. 150
  ↓
9. Usuario hace clic en "Agregar al Carrito" en "Corte de pelo"
  ↓
10. Sistema agrega segundo producto:
    carrito: [
      {id: 1, nombre: "Baño completo", precio: 150, cantidad: 1},
      {id: 2, nombre: "Corte de pelo", precio: 200, cantidad: 1}
    ]
  ↓
11. Sistema recalcula totales:
    - Subtotal 1: Bs. 150
    - Subtotal 2: Bs. 200
    - Total: Bs. 350
  ↓
12. Sistema actualiza vista del carrito
  ↓
FIN (Productos en carrito)
```

### Flujo Alternativo 5A - Aumentar Cantidad de Producto Existente

```
...desde paso 3 del flujo principal

3. Usuario hace clic en "Agregar al Carrito" en "Baño completo"
   (Baño completo ya está en el carrito con cantidad: 1)
  ↓
4. Sistema detecta producto existente
  ↓
5. Sistema incrementa cantidad:
   cantidad: 1 → 2
  ↓
6. Sistema actualiza SessionStorage
  ↓
7. Sistema recalcula subtotal:
   150 × 2 = Bs. 300
  ↓
8. Sistema actualiza total general
  ↓
9. Sistema muestra feedback:
   "Cantidad actualizada: Baño completo (2)"
  ↓
FIN (Cantidad incrementada)
```

### Flujo Alternativo 5B - Modificar Cantidad Manualmente

```
INICIO (Carrito tiene productos)
  ↓
1. Usuario ve producto en carrito:
   "Baño completo - Bs. 150 × 2 = Bs. 300"
  ↓
2. Usuario ve controles: [-] [2] [+]
  ↓
3. Usuario hace clic en [+]
  ↓
4. Sistema incrementa cantidad: 2 → 3
  ↓
5. Sistema actualiza SessionStorage
  ↓
6. Sistema recalcula:
   - Subtotal: 150 × 3 = Bs. 450
   - Total general actualizado
  ↓
7. Cambio se refleja instantáneamente
  ↓
8. Usuario hace clic en [-]
  ↓
9. Sistema decrementa cantidad: 3 → 2
  ↓
10. Sistema actualiza cálculos en tiempo real
  ↓
FIN (Cantidad modificada)
```

### Flujo Alternativo 5C - Eliminar Producto del Carrito

```
INICIO (Carrito tiene productos)
  ↓
1. Usuario ve producto con cantidad 1
  ↓
2. Usuario hace clic en [-] (decrementar)
  ↓
3. Sistema detecta que cantidad llegaría a 0
  ↓
4. Sistema elimina producto del carrito
  ↓
5. Sistema actualiza SessionStorage
  ↓
6. Sistema recalcula total general
  ↓
7. Sistema muestra mensaje:
   "Producto eliminado del carrito"
  ↓
8. Producto desaparece de la vista del carrito
  ↓
FIN (Producto eliminado)
```

### Flujo Alternativo 5D - Carrito Vacío

```
INICIO (Sin productos en carrito)
  ↓
1. Sistema verifica SessionStorage.carrito
  ↓
2. Sistema detecta carrito vacío o no existe
  ↓
3. Sistema muestra mensaje:
   "El carrito está vacío"
   "Agregue productos desde el catálogo"
  ↓
4. Totales muestran:
   - Subtotal: Bs. 0.00
   - Total: Bs. 0.00
  ↓
FIN (Vista de carrito vacío)
```

---

## FLUJO 6: CERRAR SESIÓN

### Flujo Principal - Logout Exitoso

```
INICIO (Usuario autenticado en cualquier módulo)
  ↓
1. Usuario hace clic en botón "Cerrar Sesión"
  ↓
2. Sistema elimina sesión de SessionStorage:
   - sessionStorage.removeItem('sesion')
   - O sessionStorage.clear() para limpiar todo
  ↓
3. Sistema oculta:
   - Barra de navegación
   - Todos los módulos
   - Botón "Cerrar Sesión"
  ↓
4. Sistema muestra pantalla de login nuevamente
  ↓
5. Formulario de login está limpio (sin datos previos)
  ↓
FIN (Usuario desautenticado)
```

### Consideraciones Importantes

- Al cerrar sesión, se puede optar por:
  - **Opción A:** Eliminar TODO el SessionStorage (incluye dueños, mascotas, citas, carrito)
  - **Opción B:** Solo eliminar flag de autenticación, mantener datos

- Para proyecto educativo, se recomienda **Opción A** (limpiar todo)

---

## FLUJO 7: PERSISTENCIA DE DATOS

### Flujo - Datos Persisten Durante la Sesión

```
INICIO (Usuario autenticado)
  ↓
1. Usuario registra dueño "Juan Pérez"
  ↓
2. Sistema guarda en SessionStorage
  ↓
3. Usuario navega a módulo Agenda
  ↓
4. Sistema carga datos desde SessionStorage
  ↓
5. Dropdown muestra mascotas de "Juan Pérez" ✓
  ↓
6. Usuario navega a módulo Carrito
  ↓
7. Carrito mantiene productos agregados anteriormente ✓
  ↓
8. Usuario recarga página (F5)
  ↓
9. Sistema detecta sesión activa
  ↓
10. Sistema carga todos los datos desde SessionStorage
  ↓
11. Dueños, mascotas, citas y carrito siguen disponibles ✓
  ↓
FIN (Datos persisten durante sesión)
```

### Flujo - Pérdida de Datos al Cerrar Navegador

```
INICIO (Usuario autenticado con datos registrados)
  ↓
1. Usuario cierra navegador/pestaña
  ↓
2. Navegador elimina SessionStorage automáticamente
  ↓
3. Usuario vuelve a abrir el sistema
  ↓
4. SessionStorage está vacío
  ↓
5. Sistema muestra pantalla de login
  ↓
6. No hay sesión activa
  ↓
7. No hay datos previos (dueños, mascotas, citas, carrito)
  ↓
FIN (Sistema reiniciado)
```

---

## MAPA DE NAVEGACIÓN DEL SISTEMA

```
┌─────────────────────────────────────────────────────────────┐
│                      PANTALLA DE LOGIN                      │
│                                                             │
│  [Usuario: ___________]                                     │
│  [Contraseña: ________]                                     │
│  [Iniciar Sesión]                                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ (Autenticación exitosa)
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              SISTEMA AUTENTICADO                            │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  [Inicio] [Registro] [Agenda] [Carrito] [Cerrar Sesión]│ │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   REGISTRO   │  │    AGENDA    │  │   CARRITO    │     │
│  │              │  │              │  │              │     │
│  │ - Dueños     │  │ - Agendar    │  │ - Catálogo   │     │
│  │ - Mascotas   │  │ - Selección  │  │ - Carrito    │     │
│  │              │  │   mascota    │  │ - Totales    │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

---

## CASOS DE USO RESUMIDOS

### CU-01: Iniciar Sesión
- **Actor:** Empleado del spa
- **Precondición:** Sistema cargado
- **Postcondición:** Usuario autenticado con acceso a módulos
- **Flujo normal:** Login → Validación → Acceso
- **Flujos alternativos:** Credenciales incorrectas, campos vacíos

### CU-02: Registrar Cliente (Dueño)
- **Actor:** Empleado del spa
- **Precondición:** Usuario autenticado
- **Postcondición:** Dueño guardado en SessionStorage
- **Flujo normal:** Completar formulario → Validar → Guardar
- **Flujos alternativos:** Validaciones de teléfono/email fallidas

### CU-03: Registrar Mascota
- **Actor:** Empleado del spa
- **Precondición:** Usuario autenticado, al menos 1 dueño registrado
- **Postcondición:** Mascota asociada a dueño en SessionStorage
- **Flujo normal:** Completar formulario → Asociar dueño → Guardar
- **Flujos alternativos:** No hay dueños, campos vacíos

### CU-04: Agendar Servicio
- **Actor:** Empleado del spa
- **Precondición:** Usuario autenticado, al menos 1 mascota registrada
- **Postcondición:** Cita guardada en SessionStorage
- **Flujo normal:** Seleccionar mascota → Definir fecha/hora/servicio → Guardar
- **Flujos alternativos:** Fecha pasada, no hay mascotas, campos incompletos

### CU-05: Gestionar Carrito de Compras
- **Actor:** Empleado del spa
- **Precondición:** Usuario autenticado
- **Postcondición:** Productos en carrito con total calculado
- **Flujo normal:** Ver catálogo → Agregar productos → Ver total
- **Flujos alternativos:** Modificar cantidades, eliminar productos

### CU-06: Cerrar Sesión
- **Actor:** Empleado del spa
- **Precondición:** Usuario autenticado
- **Postcondición:** Sesión eliminada, retorno a login
- **Flujo normal:** Clic en cerrar sesión → Limpiar datos → Mostrar login
- **Flujos alternativos:** Ninguno

---

## ESCENARIOS DE PRUEBA SUGERIDOS

### Escenario 1: Flujo Completo Feliz
1. Login con credenciales correctas
2. Registrar dueño "Juan Pérez"
3. Registrar mascota "Firulais" asociada a Juan
4. Agendar baño para Firulais el 15/12/2025
5. Agregar productos al carrito
6. Verificar que totales son correctos
7. Cerrar sesión
8. Verificar que datos se eliminaron

### Escenario 2: Validaciones
1. Intentar login con campos vacíos
2. Intentar login con contraseña incorrecta
3. Registrar dueño con teléfono sin +591
4. Registrar dueño con email sin @
5. Intentar agendar con fecha pasada
6. Intentar registrar mascota sin dueños

### Escenario 3: Persistencia
1. Login y registro de datos
2. Navegar entre módulos
3. Recargar página (F5)
4. Verificar que datos persisten
5. Cerrar navegador
6. Abrir nuevamente
7. Verificar que datos se eliminaron

### Escenario 4: Carrito
1. Agregar producto por primera vez
2. Agregar mismo producto (incrementar cantidad)
3. Modificar cantidad manualmente
4. Reducir cantidad a 0 (eliminar)
5. Verificar recálculo de totales en tiempo real

---

**Total de Flujos Documentados:** 7 flujos principales  
**Total de Casos de Uso:** 6 casos de uso  
**Total de Escenarios de Prueba:** 4 escenarios  
**Última actualización:** 09/12/2025
