let puedeConducirArray = [];
let noPuedeConducirArray = [];

function puedeConducir(edad, carnetDeConducir) {
  return edad >= 18 && carnetDeConducir.toLowerCase() === "si";
}

while (true) {
  let nombre = prompt("Ingresa tu nombre");

  if (nombre === null) {
    break;
  }

  
  if (nombre.trim() === "") {
    console.log("Por favor, ingresa un nombre válido.");
    continue;
  }

  let edadString = prompt("Ingresa tu edad");
  let edad = parseInt(edadString);
  let carnetDeConducir = prompt("¿Tienes carnet de conducir? Responde con 'si' o 'no'");
  let salir = prompt("Para salir escribe fin, sino pulsa enter para ingresar más datos");
  
  if (isNaN(edad) || isNaN(parseInt(edad)) || edad.toString() !== edadString || edadString.trim() === "" || (carnetDeConducir.toLowerCase() !== 'si' && carnetDeConducir.toLowerCase() !== 'no')) {
    console.log(nombre + " Ingresa un dato valido (edad numérica y 'si' o 'no' para el carnet de conducir)");
    if (salir.toLowerCase() === 'fin') {
      break;
    } else {
      continue;
    }
  }

  if (puedeConducir(edad, carnetDeConducir)) {
    puedeConducirArray.push({ nombre, puedeConducir: true });
    console.log(`${nombre} puede conducir`);
  } else {
    noPuedeConducirArray.push({ nombre, puedeConducir: false });
    console.log(`${nombre} no puede conducir`);
  }

  if (salir.toLowerCase() === 'fin') {
    break;
  }
}

console.log("Personas que pueden conducir:");
for (let persona of puedeConducirArray) {
  console.log(`${persona.nombre} puede conducir`);
}

console.log("Personas que no pueden conducir:");
for (let persona of noPuedeConducirArray) {
  console.log(`${persona.nombre} no puede conducir`);
}
