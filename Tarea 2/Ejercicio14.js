function Validar()
{
var cadena= prompt("Ingrese un texto");
console.log("El texto es: "+ cadena)
console.log(cadena.length);

if(cadena.length % 2 == 0)
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