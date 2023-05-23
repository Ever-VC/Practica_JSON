const mostrarHeroes = (datos) => {
    let heroes = datos["members"];//Almacena la lista de heroes
    const container = document.querySelector("[data-heroes]");//Permite tener control del contenedor
    container.setAttribute("class", "container");//Le asigna la clase "container" para hacer uso de bootstrap

    for (let i = 0; i < (heroes.length / 3); i++) {//Por si existen más de 3 registros, se divide entre 3 para optener la cantidad de filas

        const row = document.createElement("div");//Crea la fila
        row.setAttribute("class", "row");//Le asigna la clase "row"

        for (let j = 0; j < 3; j++) {//Permite crear solamente 3 columnas

            //Crea una lista con todad las clases a asignar
            let classCard = ["card border-dark mb-3", "card-header", "card-body", "card-title", "card-text"];

            //Crea los elementos necesarios y les asigna la clase correspondiente 
            const col = document.createElement("article");
            col.setAttribute("class", "col");

            const card = document.createElement("div");
            card.setAttribute("class", classCard[0]);

            const header = document.createElement("div");
            header.classList.add(classCard[1]);
            header.textContent = "Nombre: " + heroes[j]['name'];//Le asigna el nombre del heroe

            const cardBody = document.createElement("div");
            cardBody.classList.add(classCard[2]);

            let powers = heroes[j]['powers'];//Almacena los poderes de cada heroe
            let nPowers = "";//Almacenara la lista de heroes corregida con "," y el "." al final
            for (let k = 0; k < powers.length; k++) {
                
                if (k === (powers.length - 1)) {//Si el es ultimo elemento le asigna el "."
                    nPowers += powers[k] + ".";
                } else {
                    nPowers += powers[k] + ", ";//Si es un elemento diferente del ultimo le asigna la ","
                }
                
            }
            let bodyCard = `<h5 class="card-title">Identidad secreta: ${heroes[j]['secretIdentity']}</h5>`;
            bodyCard += `<hr> <p class="card-text"><span>Edad:</span> ${heroes[j]['age']}. <br> <span>Poderes:</span> ${nPowers}</p>`;
            
            cardBody.innerHTML = bodyCard;

            card.appendChild(header);
            card.appendChild(cardBody);

            col.appendChild(card)
            row.appendChild(col);
            container.appendChild(row);
        }
        
    }
}

export default mostrarHeroes;