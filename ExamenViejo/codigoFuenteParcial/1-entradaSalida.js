//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var lado
    var perímetro

    lado=parseFloat(document.getElementById("lado").value);
    perímetro = lado*3
    

    alert("El Perímetro es "+perímetro.toFixed(2)+" cm");

	
}

