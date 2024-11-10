/** ENUNCIADO
 * 
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * 
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

/** PSEUDOCÓDIGO
 * 
 * Ordenaré las letras de cada palabra recibida en la función -> sort()
 * 
 * Para ordenar las letras de una palabra necesitaré pasarlas a un array -> split()
 * 
 * Después las volveré a unir de array a string -> join("")
 * 
 * De últimas compararé una palabra contra la otra
 * 
 * Posibles casos que podrían darse:
 * Tomemos de ejemplo las palabras "salta" y "atlas"
 * 
 * "altas" puede darse como:
 * "AtLAs" -> toLowerCase()
 * "A tlàs" -> sanear los acentos u otros caracteres
 * 
 * Una vez todo eso haremos las comprovaciones para mostrarlas en el front
 */

/**
 * Sanea la palabra de tipo String
 * 
 * 1) Convierte la cadena a minúsculas y elimina espacios.
 * 2) Reemplaza caracteres acentuados por sus equivalentes no acentuados.
 * 3) Convierte el resultado a un array de caracteres para su ordenación.
 *  */
function sanitizeWord() {
    return this.toLowerCase().replaceAll(" ", "") // 'this' se refiere al objeto String que invoca el método sanitizeString()
        .replaceAll("à", "a")
        .replaceAll("á", "a")
        .replaceAll("é", "e")
        .replaceAll("è", "e")
        .replaceAll("ó", "o")
        .replaceAll("ò", "o")
        .replaceAll("í", "i")
        .replaceAll("ï", "i")
        .replaceAll("ú", "u")
        .replaceAll("ü", "u")
        .split("")
        .sort()
        .join("")
}

/* Crear el prototipo para poder usarlo con Strings */
String.prototype.sanitizeString = sanitizeWord // Invocación del método

/* Verifica si las palabras que le pasamos son o no anagramas y las muestra en el front */
function anagrama(p1, p2) {
    console.log("Palabra 1 saneada:", p1.sanitizeString());
    console.log("Palabra 2 saneada:", p2.sanitizeString());

    const result = document.querySelector(".result");
    const text = document.createElement("p");
    const resultat = document.createElement("span");

    result.innerHTML = '';

    if (p1 === p2) {
        console.log("Las palabras son exactamente iguales.");

        result.classList.remove("hidden", "anagrama");
        result.appendChild(text);
        text.textContent = "Las palabras son exactamente iguales, ";
        text.appendChild(resultat);
        resultat.textContent = "no son anagramas.";
        return
    } else if (p1.sanitizeString() === p2.sanitizeString()) {
        console.log("Las palabras son anagramas.");

        result.classList.remove("hidden");
        result.classList.add("anagrama");
        result.appendChild(text);
        text.textContent = "Las palabras que has elegido son, ";
        text.appendChild(resultat);
        resultat.textContent = " ¡anagramas!.";
        return
    } else {
        console.log("Las palabras no son anagramas.");

        result.classList.remove("hidden", "anagrama");
        result.appendChild(text);
        text.textContent = "Las palabras que has elegido, ";
        text.appendChild(resultat);
        resultat.textContent = " ¡No son anagramas...!";
        return
    }
}


const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const palabra1 = document.getElementById("palabra1").value;
    const palabra2 = document.getElementById("palabra2").value;

    anagrama(palabra1, palabra2)
})
