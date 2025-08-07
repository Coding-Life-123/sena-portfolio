function uploadToStorage(index){
    
    localStorage.setItem("index", JSON.stringify(index));
}

document.addEventListener('DOMContentLoaded', async() => {
    let res = await axios.get("./lugares.json");
    console.log(res);

    res.data.forEach((item, i) => {
        document.getElementById('main').innerHTML += `
        <div id="lugarContainer${i}" class="lugar-container">
            <img class="logo" src="${item.url_imagen}">
            <div class="contenido">
                <div class="textos">
                    <h2>${item.nombre}</h2>
                    <p class="ubicacion">${item.ciudad}, ${item.pais}</p>
                    <p>${item.descripcion}</p>
                </div>            
                <button onclick="uploadToStorage(${i})"><a href="./lugar/lugardesc.html">Ver más...</a></button>
            </div>
        </div>`    
        document.getElementById(`lugarContainer${i}`).style.background = `linear-gradient(120deg, ${item.categoria.colorPrimario+"dd"}, ${item.categoria.colorSecundario+"dd"})`
    });
    
})

