//Bucle 4-9
for (let i = 4; i <= 9; i++) {
    console.log(i);
}
//Bucle impares 3 al 17
for (let i = 3; i <= 17; i += 2) {
    console.log(i);
}
//Array enunciado
let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];
//Array gente>25
let olderPeople = [];
for (let persona of gente) {
    if (persona.edad > 25) {
        olderPeople.push(persona);
    }
}
console.log(olderpeople)
//Array nombre empieza por J
let nombreJ = [];
for (let persona of gente) {
    if (persona.nombre.toUpperCase().startsWith('J')) {
        nombreJ.push(persona);
    }
}
console.log(nombreJ);
//Nombres de 4 letras
let cuatroLetras = [];
for (let persona of gente) {
    if (persona.nombre.length === 4) {
        cuatroLetras.push(persona);
    }
}
console.log(cuatroLetras);
//Nombre J y <40
let menosCuarenta = [];
for (let persona of gente) {
    if (persona.nombre.toUpperCase().startsWith('J') &&
        persona.edad < 40) {
        menosCuarenta.push(persona);
    }
}
console.log(menosCuarenta);

// -----------------Objetos-----------------//

// -----------------Funciones---------------//


