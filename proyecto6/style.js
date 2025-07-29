document.getElementById('reviewText').style.display='none';
document.getElementById('more-infoText').style.display='none';
document.getElementById('descriptionButton').style.backgroundColor="white";

function mostrar(clase){
    document.getElementById('descriptionText').style.display='none';
    document.getElementById('reviewText').style.display='none';
    document.getElementById('more-infoText').style.display='none';
    document.getElementById(clase+"Text").style.display="block";

    document.getElementById("descriptionButton").style.backgroundColor="rgb(221, 221, 221)"
    document.getElementById("reviewButton").style.backgroundColor="rgb(221, 221, 221)"
    document.getElementById("more-infoButton").style.backgroundColor="rgb(221, 221, 221)"
    document.getElementById(clase+"Button").style.backgroundColor="white";
    
}