var edad=  parseInt(prompt("Ingrese su edad"))
console.log("Su edad es: "+ edad);
var ArtComprados= parseInt(prompt("Ingrese cuantos Articulos ha comprado"));
console.log("El numero de Articulos Comprados es: "+ ArtComprados);

function Validar()
{
if(edad>=18 && ArtComprados >1)
{
    return true;
    console.log("true");
}
else
{
    return false;
    console.log("false")
}

}

Validar()