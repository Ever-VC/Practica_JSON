const datosEscuadron = (datos) => {
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");

    h1.textContent = datos["squadName"];
    h2.textContent = datos["secretBase"];

    const header = document.querySelector("[data-escuadron]");

    header.appendChild(h1);
    header.appendChild(h2);
}

export default datosEscuadron;