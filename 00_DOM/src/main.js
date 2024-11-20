// -------- Inicio de la aplicación --------

// -------- Relación de ejercicios 1

// -------- Ejercicio 1

document.addEventListener("DOMContentLoaded", () => {
    // 1. Selecciona el elemento h1 por su id
    const elementDiv = document.getElementById("contenedorPrincipal");
    const elementH1 = elementDiv.querySelector("h1");
    console.log(elementH1);
    console.log(elementH1.textContent);
    const elementH1version2 = document.getElementById("contenedorPrincipal").querySelector("h1");
    console.log(elementH1version2);
});

// -------- Ejercicio 2

const parrafosDiv = document.querySelectorAll("#contenedorPrincipal .parrafo");
console.log(parrafosDiv);

// --------- Ejercicio 3

const elementImg = document.querySelector('img[src="imagen.png"]');
console.log(elementImg);

// --------- Ejercicio 4

const elementsSpan = document.querySelectorAll("#contenedorSecundario span");
console.log(elementsSpan);

// --------- Ejercicio 5

const primerParrafoImportante = document.querySelector(".parrafo.importante");
console.log(primerParrafoImportante);

// --------- Ejercicio 6

const parrafosContenedorPrincipal = document.querySelectorAll("#contenedorPrincipal p");
console.log(parrafosContenedorPrincipal);

// --------- Ejercicio 7

const elementosConAtributo = document.querySelectorAll("[data-atributo='valor1']");
console.log(elementosConAtributo);

// --------- Ejercicio 8

const parrafosImportante = document.querySelectorAll(".parrafo.importante");
parrafosImportante.length > 1 ? console.log(parrafosImportante[1]) : null;
// Otra manera más profesional: return parrafosImportante.length > 1 ? parrafosImportante[1] : null;

// --------- Ejercicio 9

const spanDentroContenedores = document.querySelectorAll("#contendorSecundario span");
console.log(spanDentroContenedores);

// --------- Ejercicio 10

const parrafoContenedorPrincipal = document.querySelectorAll("#contenedorPrincipal .parrafo");
const tercerParrafo = parrafoContenedorPrincipal.length > 2 ? parrafoContenedorPrincipal[2] : null;
console.log(tercerParrafo);
//*Nota: tercerParrafo, parrafosImportante del ejer 8... no son array, son list (¡Cuidado!)



// -------- Relación de ejercicios 2

// --- Declaración

const handlerDobleClickParrafo = (event) => {
    const parrafo = event.target;
    alert(parrafo.textContent);
};

const handlerKeyEnter = (event) => {
    if (event.key == "Enter") {
        document.querySelectorAll("#contenedorSecundario p").forEach((parrafo) => {
            parrafo.textContent = "Has pulsado Enter";
            //parrafo.innerText = "Has pulsado Enter2";
            //parrafo.innerHTML = "<strong>Has pulsado Enter3</strong>";
        });
    }
};

const handlerClickImg = (event) => {
    if (event.target == img) {
        document.querySelectorAll("#contenedorPrincipal p").forEach((parrafo) => {
            const tamanoActual = window.getComputedStyle(parrafo).fontSize;
            parrafo.style.fontSize = `${parseInt(tamanoActual) * 2}px`;
        });
    };
}
    

// --- Inicio del programa

document.addEventListener("DOMContentLoaded", function() {
    // -------- Ejercicio 1
    document.querySelectorAll("#contenedorSecundario span").forEach(span => {
        // Tengo que asignar un evento al click de ese span
        span.addEventListener("click", () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16); // Pasa a string y hexadecimal
            // Cambio el estilo inline de color
            span.style.backgroundColor = `#${randomColor}`;
        });
    });

    // -------- Ejercicio 2
    document.querySelectorAll(".parrafo").forEach(parrafo => {
        parrafo.addEventListener("dblclick", handlerDobleClickParrafo);
    });

    // -------- Ejercicio 4
    document.addEventListener("keydown", handlerKeyEnter);

    // -------- Ejercicio 5
    document.querySelectorAll(".etiqueta").forEach((etiqueta) => {
        etiqueta.addEventListener("click", () => {
            etiqueta.remove();
        });
    });

    // -------- Ejercicio 6
    document.querySelectorAll("#contenedorSecundario span").forEach((span) => {
        // Cuando me posicione encima con el ratón
        span.addEventListener("mouseover", () => {
            span.style.color = "blue";
        });
        span.addEventListener("mouseout", () => {
            //span.style.color = "black";
            span.style.color = ""; // Lo pone en el color que tuviera antes (mejor así)
        });
    });

    // -------- Ejercicio 8
    document.querySelector("#contendorPrincipal img").addEventListener("click", handlerClickImg);
});
