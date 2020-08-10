/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contadorMujeres = 0;
	let contadorEdad = 0;
	let acumuladorEdad = 0;
	let promedioEdad = 0;
	let mayorPeso = 0;
	let hombreMasPesado = 0;


	for(let i=1 ; i<=5 ; i++)
	{
	
		nombre = prompt("Ingrese nombre: ");
		peso = parseInt(prompt("Ingrese su peso: "));

		do {
			edad = parseInt(prompt("Ingrese la edad: "));
		} while (isNaN(edad));

		do {
			sexo = prompt("Ingrese su sexo: f/m");
		} while (sexo != "f" && sexo != "m");

		if (sexo == "m")
		{
			contadorMujeres++;
		}

		contadorEdad++;
		acumuladorEdad = acumuladorEdad + edad;

		if (mayorPeso < peso)
		{
			mayorPeso = peso;
			hombreMasPesado = nombre;
		}
	}

	promedioEdad = acumuladorEdad / contadorEdad;

	console.log("La cantidad de mujeres son: " + contadorMujeres);
	//alert("La cantidad de mujeres son: " + contadorMujeres);
	console.log("El promedio de edad es: " + promedioEdad);
	//alert("El promedio de edad es: " + promedioEdad);
	console.log("El hombre mas pesado es: " + hombreMasPesado);
	//alert("El hombre mas pesado es: " + hombreMasPesado);
}
