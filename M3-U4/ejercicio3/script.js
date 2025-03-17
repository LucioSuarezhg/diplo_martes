var alumnos = [
    { nombre: 'Juan Gomez', nota: 7 },
    { nombre: 'Pedro Rodriguez', nota: 4 },
    { nombre: 'Roxana García', nota: 8 },
    { nombre: 'Luciano Lopez', nota: 5 },
    { nombre: 'Fernanda Gimenez', nota: 6 },
    { nombre: 'Florencia Martinez', nota: 10 },
    { nombre: 'Raul Sanchez', nota: 7 },
    { nombre: 'Sandra Figueroa', nota: 8 }
];


var aprobados = alumnos.filter(alumno => alumno.nota >= 7);

// var aprobados = [];
// for (var i = 0; i < alumnos.length; i++) {
//     if (alumnos[i].nota >= 7) {
//         aprobados.push(alumnos[i]);
//     }
// }


var lista = document.getElementById('aprobados');
aprobados.forEach(alumno => {
    var li = document.createElement('li');
    li.textContent = `${alumno.nombre} - Nota: ${alumno.nota}`;
    lista.appendChild(li);
});