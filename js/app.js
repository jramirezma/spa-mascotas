// ===== DATOS GLOBALES =====
let usuarioAutenticado = false;

// Contadores para IDs
let contadorDueños = 1;
let contadorMascotas = 1;
let contadorCitas = 1;

// Arrays principales
let dueños = [];
let mascotas = [];
let citas = [];
let carrito = [];

// Catálogo de ejemplo
const productos = [
  { id: 1, nombre: "Baño completo", precio: 150, descripcion: "Baño con shampoo premium" },
  { id: 2, nombre: "Corte de uñas", precio: 50, descripcion: "Corte seguro y rápido" }
];

// Textos útiles
const MENSAJES = {
  LOGIN_EXITO: "Bienvenido al sistema",
  LOGIN_ERROR: "Usuario o contraseña incorrectos",
  LOGIN_CAMPOS_VACIOS: "Completa todos los campos"
};


// ===== LOGIN Y CONFIG INICIAL =====
document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('login-form');
  const errorDiv = document.getElementById('login-error');
  const passwordInput = document.getElementById('login-password');
  const toggleCheckbox = document.getElementById('toggle-password'); 

  // 1. Lógica del formulario de Login
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuario = document.getElementById('login-usuario').value.trim();
    const pass = passwordInput.value.trim(); // Usamos la referencia al input

    if (!usuario || !pass) {
      errorDiv.textContent = MENSAJES.LOGIN_CAMPOS_VACIOS;
      return;
    }

    if (usuario === "admin" && pass === "1234") {
      usuarioAutenticado = true;
      errorDiv.textContent = "";
      mostrarSistema();
      alert(MENSAJES.LOGIN_EXITO);
    } else {
      errorDiv.textContent = MENSAJES.LOGIN_ERROR;
    }
  });


  // 2. Lógica para mostrar/ocultar contraseña
  if (toggleCheckbox) {
      toggleCheckbox.addEventListener('change', () => {
          if (toggleCheckbox.checked) {
              passwordInput.type = 'text';
          } else {
              passwordInput.type = 'password';
          }
      });
  }


  // Botón cerrar sesión
  const btnCerrar = document.getElementById('cerrar-sesion');
  btnCerrar.addEventListener('click', () => {
    usuarioAutenticado = false;
    ocultarSistema();
  });


  // Navegación
  document.querySelectorAll('nav button[data-section]').forEach(btn => {
    btn.addEventListener('click', () => {
      const seccion = btn.dataset.section;
      mostrarSeccion(seccion);
    });
  });

});


// ===== MOSTRAR/OCULTAR SISTEMA =====
function mostrarSistema() {
  document.getElementById('login-section').classList.add('hidden');
  document.getElementById('main-nav').classList.remove('hidden');
  document.getElementById('main-content').classList.remove('hidden');
}

function ocultarSistema() {
  location.reload();
}


// ===== CAMBIO DE SECCIONES =====
function mostrarSeccion(nombre) {
  const main = document.getElementById('main-content');

  if (nombre === "dueños") { vistaDuenios(); return; }
  if (nombre === "mascotas") { vistaMascotas(); return; }
  if (nombre === "citas") { vistaCitas(); return; }
  if (nombre === "catalogo") { vistaCatalogo(); return; }
  if (nombre === "carrito") { vistaCarrito(); return; }

  main.innerHTML = `<h2>${nombre.toUpperCase()}</h2><p>Sección en construcción</p>`;
}

// ===== SECCIÓN: DUEÑOS =====
function vistaDuenios() {
  const main = document.getElementById('main-content');

  main.innerHTML = `
    <h2>DUEÑOS</h2>

    <form id="form-duenio" class="form-simple">
      <label>Nombre completo</label>
      <input id="duenio-nombre" type="text" required>

      <label>Teléfono</label>
      <input id="duenio-telefono" type="text" required>

      <label>Dirección</label>
      <input id="duenio-direccion" type="text" required>

      <button type="submit">Agregar dueño</button>
    </form>

    <h3>Lista de dueños</h3>
    <table class="tabla-simple">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Dirección</th>
        </tr>
      </thead>
      <tbody id="tabla-duenios"></tbody>
    </table>
  `;

  // Evento del formulario
  document.getElementById('form-duenio').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('duenio-nombre').value.trim();
    const telefono = document.getElementById('duenio-telefono').value.trim();
    const direccion = document.getElementById('duenio-direccion').value.trim();

    if (!nombre || !telefono || !direccion) {
      alert("Completá todos los campos");
      return;
    }

    const nuevo = {
      id: contadorDueños++,
      nombre,
      telefono,
      direccion
    };

    dueños.push(nuevo);
    actualizarTablaDuenios();

    // limpiar inputs
    document.getElementById('duenio-nombre').value = "";
    document.getElementById('duenio-telefono').value = "";
    document.getElementById('duenio-direccion').value = "";
  });

  actualizarTablaDuenios();
}


// Render de la tabla
function actualizarTablaDuenios() {
  const tbody = document.getElementById('tabla-duenios');
  if (!tbody) return;

  tbody.innerHTML = dueños.map(d => `
    <tr>
      <td>${d.id}</td>
      <td>${d.nombre}</td>
      <td>${d.telefono}</td>
      <td>${d.direccion}</td>
    </tr>
  `).join("");
}


// ===== SECCIÓN: MASCOTAS =====
function vistaMascotas() {
  const main = document.getElementById('main-content');

  // HTML dinámico
  main.innerHTML = `
    <h2>MASCOTAS</h2>

    <form id="form-mascota" class="form-simple">
      <label>Nombre</label>
      <input id="mascota-nombre" type="text" required>

      <label>Especie</label>
      <input id="mascota-especie" type="text" required>

      <label>Raza</label>
      <input id="mascota-raza" type="text" required>

      <label>Dueño</label>
      <select id="mascota-duenio" required></select>

      <button type="submit">Agregar mascota</button>
    </form>

    <h3>Lista de mascotas</h3>
    <table class="tabla-simple">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Especie</th>
          <th>Raza</th>
          <th>Dueño</th>
        </tr>
      </thead>
      <tbody id="tabla-mascotas"></tbody>
    </table>
  `;

  cargarSelectDuenios();
  actualizarTablaMascotas();

  // Evento del form
  document.getElementById('form-mascota').addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('mascota-nombre').value.trim();
    const especie = document.getElementById('mascota-especie').value.trim();
    const raza = document.getElementById('mascota-raza').value.trim();
    const duenioID = document.getElementById('mascota-duenio').value;

    if (!nombre || !especie || !raza || !duenioID) {
      alert("Completá todos los campos");
      return;
    }

    const nuevo = {
      id: contadorMascotas++,
      nombre,
      especie,
      raza,
      duenioID: parseInt(duenioID)
    };

    mascotas.push(nuevo);
    actualizarTablaMascotas();

    // limpiar
    document.getElementById('form-mascota').reset();
  });
}


// Llenar el select de dueños
function cargarSelectDuenios() {
  const select = document.getElementById('mascota-duenio');
  if (!select) return;

  if (dueños.length === 0) {
    select.innerHTML = `<option value="">No hay dueños cargados</option>`;
    return;
  }

  select.innerHTML = dueños.map(d =>
    `<option value="${d.id}">${d.nombre}</option>`
  ).join("");
}


// Render tabla mascotas
function actualizarTablaMascotas() {
  const tbody = document.getElementById('tabla-mascotas');
  if (!tbody) return;

  tbody.innerHTML = mascotas.map(m => {
    const duenio = dueños.find(d => d.id === m.duenioID);
    return `
      <tr>
        <td>${m.id}</td>
        <td>${m.nombre}</td>
        <td>${m.especie}</td>
        <td>${m.raza}</td>
        <td>${duenio ? duenio.nombre : "—"}</td>
      </tr>
    `;
  }).join("");
}

// ===== SECCIÓN: CITAS =====
function vistaCitas() {
  const main = document.getElementById('main-content');

  main.innerHTML = `
    <h2>CITAS</h2>

    <form id="form-cita" class="form-simple">

      <label>Dueño</label>
      <select id="cita-duenio" required></select>

      <label>Mascota</label>
      <select id="cita-mascota" required></select>

      <label>Servicio</label>
      <select id="cita-servicio" required></select>

      <label>Fecha y hora</label>
      <input id="cita-fecha" type="datetime-local" required>

      <button type="submit">Agregar cita</button>
    </form>

    <h3>Lista de citas</h3>
    <table class="tabla-simple">
      <thead>
        <tr>
          <th>ID</th>
          <th>Dueño</th>
          <th>Mascota</th>
          <th>Servicio</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody id="tabla-citas"></tbody>
    </table>
  `;

  cargarSelectsCitas();
  actualizarTablaCitas();

  // Evento del form
  document.getElementById('form-cita').addEventListener('submit', (e) => {
    e.preventDefault();

    const duenioID = parseInt(document.getElementById('cita-duenio').value);
    const mascotaID = parseInt(document.getElementById('cita-mascota').value);
    const servicioID = parseInt(document.getElementById('cita-servicio').value);
    const fecha = document.getElementById('cita-fecha').value;

    if (!duenioID || !mascotaID || !servicioID || !fecha) {
      alert("Completá todos los campos");
      return;
    }

    const nueva = {
      id: contadorCitas++,
      duenioID,
      mascotaID,
      servicioID,
      fecha
    };

    citas.push(nueva);
    actualizarTablaCitas();

    document.getElementById('form-cita').reset();
  });
}


// ===== Cargar selects =====
function cargarSelectsCitas() {

  // Dueños
  const selD = document.getElementById('cita-duenio');
  if (!dueños.length) {
    selD.innerHTML = `<option value="">No hay dueños</option>`;
  } else {
    selD.innerHTML = dueños.map(d =>
      `<option value="${d.id}">${d.nombre}</option>`
    ).join("");
  }

  // Servicios (del catálogo)
  const selS = document.getElementById('cita-servicio');
  selS.innerHTML = productos.map(p =>
    `<option value="${p.id}">${p.nombre} - Bs${p.precio}</option>`
  ).join("");

  // Mascotas
  const selM = document.getElementById('cita-mascota');
  actualizarSelectMascotasPorDueño();

  // actualizar mascotas cada vez que el dueño cambia
  selD.addEventListener('change', actualizarSelectMascotasPorDueño);
}


// ===== Mascotas según dueño =====
function actualizarSelectMascotasPorDueño() {
  const duenioID = parseInt(document.getElementById('cita-duenio').value);
  const selM = document.getElementById('cita-mascota');

  const filtradas = mascotas.filter(m => m.duenioID === duenioID);

  if (!filtradas.length) {
    selM.innerHTML = `<option value="">Este dueño no tiene mascotas</option>`;
    return;
  }

  selM.innerHTML = filtradas.map(m =>
    `<option value="${m.id}">${m.nombre} (${m.especie})</option>`
  ).join("");
}


// ===== Tabla de citas =====
function actualizarTablaCitas() {
  const tbody = document.getElementById('tabla-citas');
  if (!tbody) return;

  tbody.innerHTML = citas.map(c => {
    const duenio = dueños.find(d => d.id === c.duenioID);
    const mascota = mascotas.find(m => m.id === c.mascotaID);
    const servicio = productos.find(p => p.id === c.servicioID);

    return `
      <tr>
        <td>${c.id}</td>
        <td>${duenio ? duenio.nombre : "—"}</td>
        <td>${mascota ? mascota.nombre : "—"}</td>
        <td>${servicio ? servicio.nombre : "—"}</td>
        <td>${c.fecha}</td>
      </tr>
    `;
  }).join("");
}

// ===== SECCIÓN: CATÁLOGO =====
function vistaCatalogo() {
  const main = document.getElementById('main-content');

  main.innerHTML = `
    <h2>CATÁLOGO DE SERVICIOS / PRODUCTOS</h2>

    <form id="form-producto" class="form-simple">
      <label>Nombre</label>
      <input id="prod-nombre" type="text" required>

      <label>Precio</label>
      <input id="prod-precio" type="number" min="1" required>

      <label>Descripción</label>
      <input id="prod-desc" type="text" required>

      <button type="submit">Agregar producto</button>
    </form>

    <h3>Lista de productos</h3>
    <table class="tabla-simple">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody id="tabla-productos"></tbody>
    </table>
  `;

  actualizarTablaProductos();

  // Evento del formulario
  document.getElementById('form-producto').addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('prod-nombre').value.trim();
    const precio = parseFloat(document.getElementById('prod-precio').value);
    const desc = document.getElementById('prod-desc').value.trim();

    if (!nombre || !precio || !desc) {
      alert("Completá todos los campos");
      return;
    }

    const nuevo = {
      id: productos.length ? productos[productos.length - 1].id + 1 : 1,
      nombre,
      precio,
      descripcion: desc
    };

    productos.push(nuevo);
    actualizarTablaProductos();

    // limpiar
    document.getElementById('form-producto').reset();
  });
}


// ===== Renderizar tabla de productos =====
function actualizarTablaProductos() {
  const tbody = document.getElementById('tabla-productos');
  if (!tbody) return;

  tbody.innerHTML = productos.map(p => `
    <tr>
      <td>${p.id}</td>
      <td>${p.nombre}</td>
      <td>Bs${p.precio}</td>
      <td>${p.descripcion}</td>
    </tr>
  `).join("");
}

// ===== SECCIÓN: CARRITO =====
function vistaCarrito() {
  const main = document.getElementById('main-content');

  main.innerHTML = `
    <h2>CARRITO</h2>

    <div style="margin-bottom:20px;">
      <label>Agregar producto del catálogo</label>
      <select id="carrito-producto"></select>
      <button id="btn-agregar-carrito">Agregar</button>
    </div>

    <h3>Items en el carrito</h3>
    <table class="tabla-simple">
      <thead>
        <tr>
          <th>ID</th>
          <th>Producto</th>
          <th>Precio</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tabla-carrito"></tbody>
    </table>

    <div id="carrito-totales" style="margin-top:20px; font-size:18px;"></div>

    <div style="margin-top:20px; display:flex; gap:10px;">
      <button id="btn-vaciar-carrito">Vaciar carrito</button>
      <button id="btn-confirmar-carrito">Confirmar compra</button>
    </div>
  `;

  cargarSelectCarrito();
  actualizarCarrito();

  // Agregar producto al carrito
  document.getElementById('btn-agregar-carrito').addEventListener('click', () => {
    const id = parseInt(document.getElementById('carrito-producto').value);
    const prod = productos.find(p => p.id === id);
    if (!prod) return;

    carrito.push({
      id: carrito.length ? carrito[carrito.length - 1].id + 1 : 1,
      productoID: prod.id
    });

    actualizarCarrito();
  });

  // Vaciar carrito
  document.getElementById('btn-vaciar-carrito').addEventListener('click', () => {
    carrito = [];
    actualizarCarrito();
  });

  // Confirmar compra
  document.getElementById('btn-confirmar-carrito').addEventListener('click', () => {
    if (carrito.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    alert("Compra confirmada. ¡Gracias!");
    carrito = [];
    actualizarCarrito();
  });
}


// ===== Select para agregar productos =====
function cargarSelectCarrito() {
  const sel = document.getElementById('carrito-producto');

  if (!productos.length) {
    sel.innerHTML = `<option value="">No hay productos cargados</option>`;
    return;
  }

  sel.innerHTML = productos.map(p =>
    `<option value="${p.id}">${p.nombre} - Bs${p.precio}</option>`
  ).join("");
}


// ===== Render del carrito =====
function actualizarCarrito() {
  const tbody = document.getElementById('tabla-carrito');
  if (!tbody) return;

  tbody.innerHTML = carrito.map(item => {
    const p = productos.find(prod => prod.id === item.productoID);

    return `
      <tr>
        <td>${item.id}</td>
        <td>${p.nombre}</td>
        <td>Bs${p.precio}</td>
        <td>
          <button onclick="eliminarItemCarrito(${item.id})">X</button>
        </td>
      </tr>
    `;
  }).join("");

  actualizarTotalesCarrito();
}


// ===== Eliminar item =====
function eliminarItemCarrito(id) {
  carrito = carrito.filter(i => i.id !== id);
  actualizarCarrito();
}


// ===== Totales =====
function actualizarTotalesCarrito() {
  const div = document.getElementById('carrito-totales');
  if (!div) return;

  let subtotal = 0;

  carrito.forEach(item => {
    const p = productos.find(prod => prod.id === item.productoID);
    subtotal += p.precio;
  });

  const total = subtotal; 

  div.innerHTML = `
    <p>Subtotal: Bs${subtotal}</p>
    <p>Total: <strong>Bs${total}</strong></p>
  `;
}
