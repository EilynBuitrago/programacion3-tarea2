function Validar()
{
var numero1= prompt("Ingrese un numero ");
console.log("El primer numero es: "+ numero1);
var numero2= prompt("Ingrese un segundo numero ");
console.log("El segundo numero es: "+ numero2);

if(numero1 > numero2 || numero1 == numero2)
{
    return numero1 ;
    console.log("numero1");
}
else
{
    return numero2;
    console.log("numero2")
}

}

 console.log("El numero mayor es: "+ Validar())