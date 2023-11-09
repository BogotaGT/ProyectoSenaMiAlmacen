// pestaña de inicio y de registro
function validarFormulario() {
    // Validar que el usuario esté ingresado
    if (document.getElementById("Usuario").value === "") {
        alert("Debe ingresar un usuario");
        return false;
    }

    // Validar que la contraseña esté ingresada
    if (document.getElementById("Contraseña").value === "") {
        alert("Debe ingresar una contraseña");
        return false;
    }

    // Iniciar sesión
    // ...

    return true;
}

// Al hacer clic en el botón de inicio de sesión, validar el formulario
document.getElementById("Iniciar sesión").addEventListener("click", validarFormulario);



// pestaña inicio de sesion
function validarFormulario() {
    // Validar que el usuario esté ingresado
    if (document.getElementById("Usuario").value === "") {
        alert("Debe ingresar un usuario");
        return false;
    }

    // Validar que la contraseña esté ingresada
    if (document.getElementById("Contraseña").value === "") {
        alert("Debe ingresar una contraseña");
        return false;
    }

    // Iniciar sesión

    return true;
// pestaña registro nuevo material
// Variables
let botones = document.querySelectorAll(".submenu button");
let botonesTerceraFila = document.querySelectorAll(".submenu .submenu button");

// Función para abrir la ventana Excel
function abrirExcel(boton) {
  // Crear un nuevo documento de Excel
  let excel = new Excel();

  // Agregar una hoja de trabajo
  let hoja = excel.addWorksheet("Datos");

  // Agregar los encabezados a la hoja de trabajo
  hoja.getRange("A1").setValue("Nombre");
  hoja.getRange("B1").setValue("Medida");
  hoja.getRange("C1").setValue("Cantidad");
  hoja.getRange("D1").setValue("Stock");

  // Agregar los datos a la hoja de trabajo
  let datos = boton.dataset.datos;
  for (let i = 0; i < datos.length; i++) {
    hoja.getRange("A" + (i + 2)).setValue(datos[i].nombre);
    hoja.getRange("B" + (i + 2)).setValue(datos[i].medida);
    hoja.getRange("C" + (i + 2)).setValue(datos[i].cantidad);
    hoja.getRange("D" + (i + 2)).setValue(datos[i].stock);
  }

  // Abrir el documento de Excel
  excel.save("datos.xlsx");
}

// Eventos
for (let i = 0; i < botonesTerceraFila.length; i++) {
  botonesTerceraFila[i].addEventListener("click", abrirExcel);
}

