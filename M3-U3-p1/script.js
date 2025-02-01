// let distancia = prompt ("ingrese la distancia que desea recorrer");

// if (distancia <= 100){
//     alert ("El transporte apropiado seria a pie");
// }else{
//     if (distancia > 1000 && distancia <= 10000){
//         alert ("El transporte apropiado seria en bicicleta");
//     }else{
//         if (distancia > 10000 && distancia <= 30000){
//             alert ("El transporte apropiado seria en colectivo");
//         }else{
//             if (distancia > 30000 && distancia <= 100000){
//                 alert ("El transporte apropiado seria en auto");
//             }else{
//                 if (distancia > 100000){
//                     alert ("El transporte apropiado seria en avion");
//                 }
//             }
//         }
//     }
// }

let numeros = [];

for (let i = 0; i < 10; i++) {
    numeros[i] = parseInt(prompt("Ingrese el número " + (i + 1)));
    // O puedes usar Number() en lugar de parseInt()
}

let numeromayor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeromayor < numeros[i]) {
        numeromayor = numeros[i];
    }
}

alert("El número mayor es: " + numeromayor);
