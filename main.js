function preciosPasajes() {
    let valor = parseInt(prompt("Ingrese el monto de su prestamo"));
    let cuotas = parseInt(prompt("Ingrese el numero de cuotas 3, 6 ó 9 para calcular su prestamo"));
    valorFinalPrestamo = valor;


    while (valor !== 0 && cuotas !== 0) {
        switch (cuotas) {
            case 3:
                cuotas = 3
                porcentaje = (valor * 15) / 100
                valorFinalPrestamo = valor + porcentaje
                valorFinalCuotas = (valorFinalPrestamo / cuotas);
                alert(`El valor final de tu prestamo es de $ ${valorFinalPrestamo} en 3 cuotas de ${valorFinalCuotas} con interes del 15%`);
                break;
            case 6:
                cuotas = 6
                porcentaje = (valor * 30) / 100
                valorFinalPrestamo = valor + porcentaje
                valorFinalCuotas = (valorFinalPrestamo / cuotas);
                alert(`El valor final de tu prestamo es de $ ${valorFinalPrestamo} en 6 cuotas de ${valorFinalCuotas} con interes del 30%.`);
                break;

            case 9:
                cuotas = 9
                porcentaje = (valor * 45) / 100
                valorFinalPrestamo = valor + porcentaje
                valorFinalCuotas = (valorFinalPrestamo / cuotas);
                alert(`El valor final de tu prestamo es de $ ${valorFinalPrestamo} en 9 cuotas de ${valorFinalCuotas} con interes del 45%.`);
                break;

        }
        valor = parseInt(prompt("Ingrese el monto de su prestamo"));
        cuotas = parseInt(prompt("ingrese el numero de cuotas 3, 6 ó 9 para calcular su prestamo"));
    }
}
preciosPasajes()

console.log