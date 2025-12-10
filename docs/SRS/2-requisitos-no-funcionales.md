# Requisitos No Funcionales
## Minisistema de Gestión para Spa de Mascotas

---

## INTRODUCCIÓN

Los requisitos no funcionales definen **cómo debe comportarse el sistema** más allá de su funcionalidad básica. Establecen estándares de calidad, rendimiento, usabilidad y mantenibilidad que el proyecto debe cumplir.

---

## 1. RENDIMIENTO

### RNF-001: Tiempo de Carga Inicial
**Descripción:** El sistema debe cargar completamente en un tiempo razonable.

**Criterios Medibles:**
- Carga inicial del HTML en menos de 2 segundos
- Archivos CSS y JS cargados en menos de 1 segundo adicional
- Interfaz interactiva en menos de 3 segundos totales

**Prioridad:** Alta

---

### RNF-002: Respuesta de Interacciones
**Descripción:** Las acciones del usuario deben tener respuesta inmediata.

**Criterios Medibles:**
- Clic en botones responde en menos de 100ms
- Validaciones de formularios en menos de 200ms
- Actualización del carrito instantánea (menos de 50ms)
- Navegación entre módulos sin demora perceptible

**Prioridad:** Alta

---

### RNF-003: Operaciones con SessionStorage
**Descripción:** Las operaciones de lectura/escritura deben ser eficientes.

**Criterios Medibles:**
- Guardar datos en SessionStorage en menos de 50ms
- Lectura de datos en menos de 30ms
- No exceder 5MB de almacenamiento total
- Serialización/deserialización JSON sin errores

**Prioridad:** Media

---

## 2. USABILIDAD Y EXPERIENCIA DE USUARIO

### RNF-004: Claridad de la Interfaz
**Descripción:** La interfaz debe ser intuitiva y fácil de usar.

**Criterios de Cumplimiento:**
- Etiquetas de formularios claras y descriptivas
- Botones con texto explicativo (no solo íconos)
- Mensajes de error comprensibles en español
- Jerarquía visual clara (títulos, subtítulos, contenido)
- Espaciado adecuado entre elementos (no aglomerado)

**Prioridad:** Alta

---

### RNF-005: Feedback Visual
**Descripción:** El usuario debe recibir retroalimentación de sus acciones.

**Criterios de Cumplimiento:**
- Estados hover en botones y enlaces
- Estados activos/focus visibles
- Mensajes de éxito en color verde (#28a745 o similar)
- Mensajes de error en color rojo (#dc3545 o similar)
- Indicadores de carga si una operación tarda más de 500ms
- Cambios visuales al agregar productos al carrito

**Prioridad:** Alta

---

### RNF-006: Navegación Intuitiva
**Descripción:** El usuario debe poder moverse por el sistema sin confusión.

**Criterios de Cumplimiento:**
- Barra de navegación visible en todo momento
- Indicador visual del módulo activo
- Breadcrumbs o título de sección visible
- No más de 3 clics para llegar a cualquier funcionalidad
- Botón de "Cerrar Sesión" siempre accesible

**Prioridad:** Alta

---

### RNF-007: Prevención de Errores
**Descripción:** El sistema debe ayudar a prevenir errores del usuario.

**Criterios de Cumplimiento:**
- Campos requeridos marcados con asterisco (*)
- Placeholders con ejemplos de formato correcto
- Validación en tiempo real (al perder foco del campo)
- Botones deshabilitados si hay errores de validación
- Confirmación antes de acciones irreversibles

**Prioridad:** Media

---

## 3. COMPATIBILIDAD Y ACCESIBILIDAD

### RNF-008: Compatibilidad con Navegadores
**Descripción:** El sistema debe funcionar en navegadores modernos.

**Navegadores Soportados:**
- Google Chrome 90+
- Mozilla Firefox 88+
- Microsoft Edge 90+
- Safari 14+

**Criterios de Cumplimiento:**
- Uso de JavaScript ES6+ soportado nativamente
- CSS compatible con navegadores listados
- Sin dependencias de características experimentales
- Pruebas funcionales en al menos 2 navegadores

**Prioridad:** Alta

---

### RNF-009: Diseño Responsive
**Descripción:** El sistema debe adaptarse a diferentes tamaños de pantalla.

**Breakpoints Definidos:**
- Móvil pequeño: 320px - 480px
- Móvil: 481px - 767px
- Tablet: 768px - 1024px
- Desktop: 1025px en adelante

**Criterios de Cumplimiento:**
- Layout fluido usando % o flexbox/grid
- Menú hamburguesa en resoluciones menores a 768px
- Formularios apilados verticalmente en móvil
- Catálogo de productos en 1 columna (móvil), 2-3 (tablet), 3-4 (desktop)
- Textos legibles sin zoom (mínimo 14px en móvil)
- Sin scroll horizontal innecesario

**Prioridad:** Alta

---

### RNF-010: Accesibilidad Básica
**Descripción:** El sistema debe ser accesible para la mayoría de usuarios.

**Criterios WCAG 2.1 Nivel A (mínimo):**
- Labels asociados a todos los inputs (atributo `for`)
- Contraste de texto mínimo 4.5:1 con el fondo
- Navegación posible usando solo teclado (Tab, Enter)
- Atributos `alt` en todas las imágenes
- Estructura semántica HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`)
- Mensajes de error asociados a campos mediante `aria-describedby`

**Prioridad:** Media

---

### RNF-011: Tamaño de Fuente y Legibilidad
**Descripción:** El texto debe ser legible en todos los dispositivos.

**Criterios de Cumplimiento:**
- Fuente base mínima: 16px en desktop, 14px en móvil
- Títulos principales (h1): 28-32px
- Subtítulos (h2-h3): 20-24px
- Interlineado mínimo: 1.5 para párrafos
- Fuente sans-serif legible (Arial, Helvetica, Roboto, Open Sans)

**Prioridad:** Media

---

## 4. SEGURIDAD Y PRIVACIDAD

### RNF-012: Validación de Datos
**Descripción:** Todos los datos de entrada deben ser validados.

**Criterios de Cumplimiento:**
- Validación de formato de email con regex
- Validación de teléfono: +591 + 8 dígitos
- Sanitización de inputs (trim, eliminación de caracteres especiales si aplica)
- No permitir inyección de código (sanitizar < > en textos libres)
- Validación tanto en cliente (JS) como antes de guardar

**Prioridad:** Alta

---

### RNF-013: Protección de Sesión
**Descripción:** La sesión debe estar protegida contra acceso no autorizado.

**Criterios de Cumplimiento:**
- Credenciales no visibles en código frontend expuesto al usuario
- Sesión se elimina completamente al cerrar sesión
- No guardar contraseñas en SessionStorage (solo flag de autenticación)
- Redirección a login si no hay sesión activa
- SessionStorage (no LocalStorage) para datos temporales

**Prioridad:** Media

---

### RNF-014: Manejo de Datos Sensibles
**Descripción:** Los datos personales deben manejarse adecuadamente.

**Criterios de Cumplimiento:**
- No exponer datos innecesariamente en consola del navegador
- Limpiar SessionStorage al cerrar sesión
- No transmitir datos a servidores externos (cumplido por naturaleza del proyecto)
- Mensajes de error genéricos en login (no "usuario incorrecto" vs "contraseña incorrecta")

**Prioridad:** Baja

---

## 5. MANTENIBILIDAD Y CÓDIGO

### RNF-015: Organización del Código
**Descripción:** El código debe estar organizado y ser fácil de mantener.

**Estructura de Archivos:**
```
proyecto-spa/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── imagenes/
    └── [recursos]
```

**Criterios de Cumplimiento:**
- Separación clara: HTML (estructura), CSS (presentación), JS (lógica)
- No usar CSS inline (en atributos style)
- No usar JS inline (en atributos onclick)
- Código identado correctamente (2 o 4 espacios)
- Nombres de archivos en minúsculas sin espacios

**Prioridad:** Alta

---

### RNF-016: Legibilidad del Código
**Descripción:** El código debe ser comprensible por otros desarrolladores.

**Criterios de Cumplimiento:**
- Variables y funciones con nombres descriptivos en español o inglés consistente
- Comentarios en secciones complejas o no obvias
- Funciones pequeñas y con responsabilidad única
- Evitar código duplicado (principio DRY)
- Máximo 50-80 líneas por función

**Prioridad:** Media

---

### RNF-017: Buenas Prácticas JavaScript
**Descripción:** El código JS debe seguir estándares modernos.

**Criterios de Cumplimiento:**
- Usar `const` y `let`, evitar `var`
- Arrow functions cuando sea apropiado
- Template literals para concatenación de strings
- Manejo de errores con try-catch en operaciones críticas
- No usar `eval()` ni `innerHTML` con datos del usuario
- EventListeners en lugar de atributos onclick

**Prioridad:** Media

---

### RNF-018: Buenas Prácticas CSS
**Descripción:** El CSS debe ser mantenible y escalable.

**Criterios de Cumplimiento:**
- Uso de clases descriptivas (`.btn-primary`, `.form-group`)
- Evitar selectores demasiado específicos o con !important
- Organizar CSS por secciones (reset, layout, componentes, utilidades)
- Uso de variables CSS para colores principales si es posible
- Mobile-first approach (media queries con min-width)

**Prioridad:** Media

---

## 6. ESTÁNDARES TÉCNICOS

### RNF-019: HTML Semántico
**Descripción:** El HTML debe usar etiquetas semánticas apropiadas.

**Criterios de Cumplimiento:**
- Uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Formularios con `<form>`, `<label>`, `<input>`, `<button>`
- Listas con `<ul>`, `<ol>`, `<li>` cuando sea apropiado
- Un solo `<h1>` por página
- Jerarquía de encabezados lógica (h1 → h2 → h3)

**Prioridad:** Media

---

### RNF-020: Validación de HTML y CSS
**Descripción:** El código debe ser válido según estándares W3C.

**Criterios de Cumplimiento:**
- HTML válido según W3C Validator
- CSS válido según W3C CSS Validator
- Sin errores críticos de sintaxis
- Advertencias (warnings) son aceptables si están justificadas

**Prioridad:** Baja

---

### RNF-021: Sin Errores de Consola
**Descripción:** El navegador no debe mostrar errores JavaScript.

**Criterios de Cumplimiento:**
- Cero errores en consola del navegador
- Advertencias (warnings) permitidas si no afectan funcionalidad
- Console.log() solo para debugging (eliminar o comentar en versión final)
- Manejo apropiado de excepciones

**Prioridad:** Alta

---

## 7. DATOS Y PERSISTENCIA

### RNF-022: Estructura de Datos Consistente
**Descripción:** Los datos en SessionStorage deben tener estructura predecible.

**Estructura JSON Propuesta:**
```json
{
  "sesion": {
    "autenticado": true,
    "usuario": "admin"
  },
  "dueños": [
    {
      "id": 1,
      "nombre": "Juan Pérez",
      "telefono": "+59171234567",
      "email": "juan@mail.com"
    }
  ],
  "mascotas": [
    {
      "id": 1,
      "nombre": "Firulais",
      "especie": "Perro",
      "raza": "Labrador",
      "dueñoId": 1
    }
  ],
  "citas": [
    {
      "id": 1,
      "fecha": "2025-12-15",
      "hora": "10:00",
      "mascotaId": 1,
      "servicio": "Baño completo"
    }
  ],
  "carrito": [
    {
      "id": 1,
      "nombre": "Baño completo",
      "precio": 150,
      "cantidad": 1
    }
  ]
}
```

**Criterios de Cumplimiento:**
- Cada entidad tiene un ID único autoincrementable
- Fechas en formato ISO (YYYY-MM-DD)
- Relaciones mediante IDs (mascotaId, dueñoId)
- Precios como números (no strings)

**Prioridad:** Alta

---

### RNF-023: Integridad de Datos
**Descripción:** Los datos deben mantener consistencia y coherencia.

**Criterios de Cumplimiento:**
- No permitir duplicados de IDs
- Validar que exista el dueño antes de crear mascota
- Validar que exista la mascota antes de crear cita
- No permitir datos huérfanos (mascota sin dueño)
- Eliminar datos relacionados si se elimina un padre (opcional en este proyecto)

**Prioridad:** Media

---

## 8. DOCUMENTACIÓN

### RNF-024: README del Proyecto
**Descripción:** El proyecto debe incluir documentación básica.

**Contenido Mínimo del README:**
- Nombre y descripción del proyecto
- Tecnologías utilizadas
- Instrucciones de instalación/ejecución
- Credenciales de acceso (admin/1234)
- Estructura de archivos
- Funcionalidades principales
- Autoría y fecha

**Prioridad:** Media

---

### RNF-025: Comentarios en Código
**Descripción:** Las secciones complejas deben estar comentadas.

**Criterios de Cumplimiento:**
- Comentario al inicio de cada archivo con su propósito
- Comentarios en funciones complejas explicando qué hacen
- Comentarios en validaciones regex explicando el patrón
- No sobre-comentar código obvio
- Comentarios en español para consistencia con el proyecto

**Prioridad:** Baja

---

## RESUMEN DE PRIORIDADES

### Prioridad Alta (8 requisitos)
- RNF-001, RNF-002: Rendimiento
- RNF-004, RNF-005, RNF-006: Usabilidad
- RNF-008, RNF-009: Compatibilidad
- RNF-012: Validación
- RNF-015: Organización
- RNF-021: Sin errores
- RNF-022: Estructura de datos

### Prioridad Media (12 requisitos)
- RNF-003: SessionStorage
- RNF-007: Prevención de errores
- RNF-010, RNF-011: Accesibilidad
- RNF-013: Protección de sesión
- RNF-016, RNF-017, RNF-018: Código limpio
- RNF-019: HTML semántico
- RNF-023: Integridad
- RNF-024: README

### Prioridad Baja (5 requisitos)
- RNF-014: Datos sensibles
- RNF-020: Validación W3C
- RNF-025: Comentarios

---

## CHECKLIST DE CUMPLIMIENTO

Para verificar que el proyecto cumple con los requisitos no funcionales:

### Rendimiento
- [ ] El sistema carga en menos de 3 segundos
- [ ] Las interacciones responden inmediatamente
- [ ] SessionStorage funciona sin demoras

### Usabilidad
- [ ] La interfaz es clara e intuitiva
- [ ] Hay feedback visual en todas las acciones
- [ ] La navegación es simple y directa
- [ ] Los errores se previenen y manejan bien

### Compatibilidad
- [ ] Funciona en Chrome, Firefox, Edge
- [ ] Es responsive en móvil, tablet y desktop
- [ ] Cumple accesibilidad básica (WCAG A)
- [ ] Las fuentes son legibles

### Seguridad
- [ ] Todas las entradas están validadas
- [ ] La sesión está protegida apropiadamente
- [ ] No hay código inseguro

### Código
- [ ] Los archivos están organizados correctamente
- [ ] El código es legible y mantenible
- [ ] Sigue buenas prácticas de JS y CSS
- [ ] Usa HTML semántico

### Datos
- [ ] La estructura de datos es consistente
- [ ] Los datos mantienen integridad
- [ ] SessionStorage funciona correctamente

### Documentación
- [ ] Existe un README completo
- [ ] El código tiene comentarios donde es necesario

---

**Total de Requisitos No Funcionales:** 25  
**Última actualización:** 09/12/2025
