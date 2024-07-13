function comprobarEdad() {
    const edad = document.getElementById('edad').value;
    let resultado;
    if (edad >= 0 && edad <= 99) {
        resultado = edad >= 18 ? "Ya puede conducir." : "No puede conducir.";
    } else {
        resultado = "Edad inválida. Por favor ingrese una edad entre 0 y 99.";
    }
    document.getElementById('resultado1').textContent = resultado;
}

function calificarNota() {
    const nota = document.getElementById('nota').value;
    let calificacion;
    if (nota >= 0 && nota < 3) {
        calificacion = "Muy deficiente";
    } else if (nota >= 3 && nota < 5) {
        calificacion = "Insuficiente";
    } else if (nota >= 5 && nota < 6) {
        calificacion = "Suficiente";
    } else if (nota >= 6 && nota < 7) {
        calificacion = "Bien";
    } else if (nota >= 7 && nota < 9) {
        calificacion = "Notable";
    } else if (nota >= 9 && nota <= 10) {
        calificacion = "Sobresaliente";
    } else {
        calificacion = "Nota inválida";
    }
    document.getElementById('resultado2').textContent = calificacion;
}

function concatenarCadenas() {
    let cadenas = [];
    while (true) {
        let cadena = prompt("Ingrese una cadena de texto (o pulse 'Cancelar' para terminar):");
        if (cadena === null) break;
        cadenas.push(cadena);
    }
    document.getElementById('resultado3').textContent = cadenas.join("-");
}

function calcularLetraDNI() {
    const dni = document.getElementById('dni').value;
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    if (!isNaN(dni) && dni >= 0 && dni <= 99999999) {
        const letra = letras.charAt(dni % 23);
        document.getElementById('resultado4').textContent = `La letra del DNI es: ${letra}`;
    } else {
        alert("Número de DNI inválido. Inténtelo de nuevo.");
    }
}
