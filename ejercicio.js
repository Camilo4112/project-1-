// Creamos una lista de contactos con datos predefinidos
let contactos = [
  "Juan Solorzano",
  "Maria Hernandez",
  "Pedro Rodriguez"
];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(nombreCompleto) {
  contactos.push(nombreCompleto);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(nombreCompleto) {
  let index = contactos.indexOf(nombreCompleto);
  if (index !== -1) {
    contactos.splice(index, 1);
  }
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  console.log(contactos);
}

// Ejemplo de uso
agregarContacto("Ana Lopez");
imprimirContactos(); // ["Juan Perez", "Maria Hernandez", "Pedro Rodriguez", "Ana Lopez"]

borrarContacto("Maria Hernandez");
imprimirContactos(); // ["Juan Perez", "Pedro Rodriguez", "Ana Lopez"]
