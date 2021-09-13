function Validar()
{
var nombre1= prompt("Ingrese su nombre ");
console.log("El primer nombre es: "+ nombre1);
var nombre2= prompt("Ingrese un segundo nombre ");
console.log("El segundo nombre es: "+ nombre2);

if(nombre1[0] == nombre2[0] || nombre1[nombre1.length-1] == nombre2[nombre2.length-1] )
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
