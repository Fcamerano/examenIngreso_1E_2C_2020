/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let respuesta;




  do
  {
    marca = prompt("Ingrese la marca:");
    precio = parseInt(prompt("Ingrese el precio:"));




    respuesta = prompt("Quiere seguir ingresando? si/no");
  }while(respuesta == "si");










}
