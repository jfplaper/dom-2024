// Crear elemento div
const divCard = document.createElement("div");
divCard.id = "card";
divCard.classList.add("principal card"); // Por si quiero que tenga varias clases


// Crear un párrafo y añadir al divCard
const p = document.createElement("p");
p.textContent = "Hola soy un párrafo";
divCard.appendChild(p);
const mensajeBtn = document.createElement("button");
mensajeBtn.textContent = "Mostrar mensaje";
divCard.appendChild(mensajeBtn);