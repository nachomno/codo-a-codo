let url = "./js/carta.json";
let menu = [];

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        menu = data.carta
        console.log(menu)

    let cad = `<div class="row">`
       for(item of menu){
        cad += `<div class="platosClasicos">
                    <img class="fotos" src="${item.imagen}" alt="${item.nombre}">
                    <div class="pieFoto">
                    <h4>${item.nombre}</h4>
                    <p>${item.descripcion}</p>
                    <p>Precio: $${item.precio}</p>
                    </div>
                </div>`

       } 
    cad += `</div>`
        
    console.log(cad)
    document.getElementById("tarjeta").innerHTML = cad;

    }
    );





