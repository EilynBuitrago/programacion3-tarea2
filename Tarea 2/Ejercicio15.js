function Validar()
{
var Palabra1= prompt("Ingrese una palabra ");
console.log("La primera palabra es: "+ Palabra1);
var Palabra2= prompt("Ingrese una segunda palabra ");
console.log("La segunda palabra es: "+ Palabra2);

if(Palabra1.length < Palabra2.length)
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
