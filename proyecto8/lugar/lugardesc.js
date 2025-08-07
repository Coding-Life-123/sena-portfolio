document.addEventListener('DOMContentLoaded', async() => {

    let i = parseInt(localStorage.getItem('index'));
    console.log(i);
    
    let JSON = await axios.get('../lugares.json');
    let data = JSON.data[i];
    console.log(data);
    console.log(data.categoria.colorPrimario, data.categoria.colorSecundario);

    document.getElementById('mainElement').innerHTML=`
        <h1>${data.nombre}</h1>
        <img class="image" src="${data.url_imagen}">
        <div class="location">
            <h2>${data.ciudad}, ${data.pais}</h2>
        </div>
        <hr>
        <div class="group-container">
            <h2>Descripcion</h2>
            <div>
                <p>${data.descripcion}</p>
            </div>
        </div>
        <hr>
        <div class="group-container">
            <h2>Actividades Recomendadas</h2>
            <div>
                <p>${data.actividadesRecomendadas[0]}</p>
                <p>${data.actividadesRecomendadas[1]}</p>
                <p>${data.actividadesRecomendadas[2]}</p>
            </div>
        </div>
        <hr>
        <div class="group-container">
            <h2>Datos Interesantes</h2>
            <div>
                <p>${data.datosInteresantes[0].titulo}: ${data.datosInteresantes[0].valor}</p>
                <p>${data.datosInteresantes[1].titulo}: ${data.datosInteresantes[1].valor}</p>
                <p>${data.datosInteresantes[2].titulo}: ${data.datosInteresantes[2].valor}</p>
            </div>
        </div>
        <hr>
        <div class="group-container">
            <h2>Coordenadas</h2>
            <div>
                <p>Latitud: ${data.coordenadas.latitud}</p>
                <p>Longitud: ${data.coordenadas.longitud}</p>
            </div>
        </div>
    `;

    document.getElementById('centerElement').style.background = `linear-gradient(160deg, ${data.categoria.colorPrimario+"fa"} 20%, ${data.categoria.colorSecundario+"fa"} 100%`
})