function validarNumero(){

var numPar = parseInt(prompt("Ingrese un numero entero"))
console.log("El numero es: "+numPar);

if ( numPar%2 == 0)
{
   return true;
   console.log("true"+numPar)
}
   
else 
{
    return false;
   console.log("false")
}

}
validarNumero();