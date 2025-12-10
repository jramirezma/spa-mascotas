# Documento de Visión del Proyecto
## Minisistema de Gestión para Spa de Mascotas

---

### 1. INFORMACIÓN GENERAL

**Nombre del Proyecto:** Minisistema de Gestión para Spa de Mascotas  
**Tipo:** Frontend Educativo - Proyecto Académico Primer Semestre  
**Versión:** 1.0  
**Fecha:** Diciembre 2025  
**Stack Tecnológico:** HTML5 + CSS3 + JavaScript Vanilla (ES6+)

---

### 2. PROPÓSITO DEL PROYECTO

#### 2.1 Objetivo Académico
Desarrollar un sistema frontend funcional que demuestre el dominio de competencias fundamentales en desarrollo web:

- Estructuración semántica con HTML5
- Diseño responsive con CSS3
- Manipulación del DOM con JavaScript
- Validación de formularios
- Gestión de datos en SessionStorage
- Implementación de sesiones simples
- Organización modular de código

#### 2.2 Objetivo Funcional
Simular un sistema de gestión interno para empleados de un spa de mascotas, permitiendo:

- Control de acceso mediante login
- Registro de clientes (dueños) y sus mascotas
- Agendamiento de servicios con fecha y hora
- Gestión de compras de productos y servicios
- Cálculo automático de totales

---

### 3. ALCANCE DEL PROYECTO

#### 3.1 Dentro del Alcance ✅

**Módulo de Autenticación**
- Login con validación de credenciales
- Gestión de sesión activa
- Cierre de sesión

**Módulo de Registro**
- Formulario de dueños (nombre, teléfono, email)
- Formulario de mascotas (nombre, especie, raza)
- Relación dueño-mascota
- Almacenamiento en SessionStorage

**Módulo de Agenda**
- Formulario de agendamiento de servicios
- Selección de fecha y hora
- Asignación de mascota y tipo de servicio
- Persistencia de citas

**Módulo de Carrito**
- Catálogo dinámico de productos/servicios
- Agregar ítems al carrito
- Visualización de carrito con subtotales
- Cálculo automático del total

**Requisitos Transversales**
- Navegación entre módulos
- Diseño responsive (desktop y móvil)
- Validaciones de formularios en tiempo real
- Feedback visual de acciones

#### 3.2 Fuera del Alcance ❌

- Backend o base de datos real
- Integración con servicios externos
- Sistema de pagos real
- Envío de notificaciones
- Reportes o dashboards
- Impresión de documentos
- Edición o eliminación de registros
- Sistema de usuarios múltiples con roles
- Recuperación de contraseña

---

### 4. USUARIOS DEL SISTEMA

#### 4.1 Actor Principal
**Empleado del Spa**
- **Descripción:** Personal autorizado del establecimiento
- **Acceso:** Mediante credenciales predefinidas
- **Tareas principales:**
  - Registrar nuevos clientes y mascotas
  - Agendar servicios
  - Gestionar compras de productos

#### 4.2 Actores Secundarios (No interactúan directamente)
- Dueños de mascotas (datos registrados por empleados)
- Mascotas (entidades gestionadas)

---

### 5. RESTRICCIONES DEL PROYECTO

#### 5.1 Restricciones Técnicas
- **Solo tecnologías nativas:** HTML, CSS, JavaScript (sin frameworks, librerías o preprocesadores)
- **Ejecución en navegador:** Todo el sistema debe funcionar localmente
- **Sin backend:** No se permite servidor, APIs externas o bases de datos
- **Persistencia limitada:** SessionStorage únicamente

#### 5.2 Restricciones Académicas
- Debe demostrar conocimientos de primer semestre
- Código legible y bien organizado
- Separación de responsabilidades (HTML/CSS/JS)

---

### 6. SUPUESTOS Y DEPENDENCIAS

#### 6.1 Supuestos
- El navegador tiene habilitado JavaScript
- SessionStorage está disponible y funcional
- El sistema se usa en un solo dispositivo (no compartido)
- Los datos no necesitan persistir entre sesiones
- Un solo empleado usa el sistema por sesión

#### 6.2 Dependencias
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Resolución mínima de pantalla: 320px (móvil)
- Conexión a internet no requerida (después de cargar)

---

### 7. CRITERIOS DE ÉXITO

El proyecto será considerado exitoso si cumple:

1. ✅ **Funcionalidad Completa:** Los 4 módulos funcionan según requisitos
2. ✅ **Validaciones Operativas:** Todos los formularios validan correctamente
3. ✅ **Persistencia Funcional:** Los datos se mantienen durante la sesión
4. ✅ **Responsividad:** El sistema se adapta a móvil y desktop
5. ✅ **Código Organizado:** Archivos separados y código limpio
6. ✅ **Sin Errores de Consola:** JavaScript ejecuta sin errores críticos

---

### 8. RIESGOS IDENTIFICADOS

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Pérdida de datos al cerrar navegador | Alta | Medio | Documentar uso de SessionStorage claramente |
| Complejidad en validaciones | Media | Bajo | Implementar validaciones simples pero efectivas |
| Problemas de responsive | Media | Medio | Usar Mobile-First approach |
| Confusión entre carrito y agenda | Baja | Alto | Separar claramente ambos módulos |

---

### 9. ENTREGABLES DEL PROYECTO

#### Archivos Requeridos
```
proyecto-spa/
├── index.html          # Estructura principal
├── css/
│   └── style.css       # Todos los estilos
├── js/
│   └── app.js          # Toda la lógica
└── imagenes/           # Recursos visuales
    ├── logo.png
    └── [otros recursos]
```

#### Documentación Complementaria
- README con instrucciones de uso
- Comentarios en código cuando sea necesario
- Credenciales de acceso documentadas

---

### 10. CRONOGRAMA SUGERIDO

**Fase 1 - Estructura (20%)**
- HTML completo de todos los módulos
- Navegación básica

**Fase 2 - Estilos (20%)**
- CSS base y responsive
- Formularios estilizados

**Fase 3 - Lógica de Sesión (15%)**
- Login funcional
- SessionStorage configurado

**Fase 4 - Módulos Funcionales (35%)**
- Registro operativo
- Agenda funcional
- Carrito dinámico

**Fase 5 - Validaciones y Pulido (10%)**
- Validaciones completas
- Pruebas finales
- Ajustes de UX

---

### 11. CONTACTO Y APROBACIONES

**Analista de Requisitos:** BA-Prime  
**Stakeholder Académico:** [Docente/Institución]  
**Equipo de Desarrollo:** [Estudiante(s)]

---

**Última actualización:** 09/12/2025  
**Estado del documento:** ✅ Aprobado para desarrollo
