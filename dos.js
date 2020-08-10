/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/
function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let respuesta;
  let acumuladorPeso = 0;
  let liquidoMasCaro = 0;
  let marcaLiquidoMasCaro = "";
  let flagSolido = 0;
  let solidoMasBarato = 0;
  let marcaSolidoMasBarato = "";

  do
  {
    marca = prompt("Ingrese la marca:");
    precio = parseInt(prompt("Ingrese el precio:"));
    peso = parseInt(prompt("Ingrese el peso:"));

    do
		{
			tipo = prompt("Ingrese el tipo : solido/liquido");
		}while(tipo != "solido" && tipo != "liquido");

    acumuladorPeso = acumuladorPeso + peso; 

    switch(tipo)
		{
			case "liquido":
        if(precio > liquidoMasCaro)
				{
          liquidoMasCaro = precio;
          marcaLiquidoMasCaro = marca;
        }
        break;
			case "solido":
        if(flagSolido == 0 || solidoMasBarato > precio)
				{
					precioAlcoholbarato = precio;
					marcaSolidoMasBarato = marca;
					flagSolido = 1;
				}
        break;
    }

    respuesta = prompt("Quiere seguir ingresando? si/no");
  }while(respuesta == "si");


  alert("El peso total es: " + acumuladorPeso); // A)
  alert("La marca mas cara de los liquidos es: " + marcaLiquidoMasCaro); // B)
  alert("La marca mas barata de los solidos es: " + marcaSolidoMasBarato); // C)
}
