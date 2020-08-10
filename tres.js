/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let sexo;
	let lugar;
	let temporada;
	let personas;
	let respuesta;
	let contadorBariloche = 0;
	let contadorCataratas = 0;
	let contadorSalta = 0;
	let sexoConMasPasajeros;
	let mayorCantidadDePasajeros = 0;
	let acumuladorPersonas = 0;
	let viajesInvierno = 0;
	let promedioInvierno = 0;
	

	do {



		do {
			sexo = prompt("Ingrese su sexo: ");
		} while (sexo != "f" && sexo != "m");

		do {
			lugar = prompt("Ingrese el destino: ");
		} while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta");

		do {
			temporada = prompt("Ingrese la temporada: ");
		} while (temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera");

		personas = parseInt(prompt("Ingrese la cantidad de personas: "));




		switch (lugar) {
			case "bariloche":
				contadorBariloche++;
				break;

			case "cataratas":
				contadorCataratas++;
				break;

			case "salta":
				contadorSalta++;
				break;
		}





		if (mayorCantidadDePasajeros < personas) {
			mayorCantidadDePasajeros = personas;
			sexoConMasPasajeros = sexo;
		}

		if (temporada == "invierno") {
			acumuladorPersonas = acumuladorPersonas + personas;
			viajesInvierno++;
		}

		respuesta = prompt("Quiere ingresar otra? si/no");

	} while (respuesta == "si");


	promedioInvierno = acumuladorPersonas / viajesInvierno;



    // A)
	if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta) {
		alert("El lugar mas visitado es Bariloche");
	}
	else if (contadorCataratas > contadorBariloche && contadorCataratas > contadorSalta) {
		alert("El lugar mas visitado es Cataratas");
	}
	else {
		alert("El destino mas visitado es Salta");
	}



	alert("El sexo del titular con mas pasajeros es " + sexoConMasPasajeros); // B)
	alert("El promedio de personas que viajan en invierno es de: " + promedioInvierno);// C)
}