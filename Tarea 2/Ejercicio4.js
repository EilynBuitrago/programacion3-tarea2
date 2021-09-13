var cantidadKilometros= prompt("Ingrese la cantidad de Kilometros recorridos por su motocicleta");
console.log("La cantidad de Kilometros recorridos es: " + cantidadKilometros);
var cantidadLitrosGasolina= prompt("Ingresar la catidad de litros de gasolina consumidos");
console.log("Ingrese la cantidad combustible que se consumio es: "+ cantidadLitrosGasolina);
var division= parseFloat(cantidadKilometros) / parseFloat(cantidadLitrosGasolina);
console.log ("El consumo de Combustible es: "+ division);

