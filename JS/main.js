const item = [
    { Id: 101, pais: "venezuela", ciudad: "caracas", precio: 860, disponibilidad: 250 },
    { Id: 102, pais: "chile", ciudad: "santiago", precio: 350, disponibilidad: 328 },
    { Id: 103, pais: "peru", ciudad: "cuzco", precio: 475, disponibilidad: 235 },
    { Id: 104, pais: "uruguay", ciudad: "montevideo", precio: 225, disponibilidad: 500 },
    { Id: 105, pais: "colombia", ciudad: "bogota", precio: 550, disponibilidad: 388 },
    { Id: 106, pais: "miami", ciudad: "florida", precio: 872, disponibilidad: 300 },
    { Id: 107, pais: "españa", ciudad: "madrid", precio: 999, disponibilidad: 158 },
    { Id: 108, pais: "new york", ciudad: "manhatan", precio: 1050, disponibilidad: 288 },
    { Id: 109, pais: "italia", ciudad: "roma", precio: 840, disponibilidad: 542 },
];



function alertarDetalles(item) {
    alert(`
    Id: ${item.Id}
    Pais: ${item.pais}
    Ciudad: ${item.ciudad}
    Precio: $${item.precio}
    Disponibilidad: ${item.disponibilidad}
    `);
}

function filtrarPorId(id) {
    return item.filter(item => item.Id === id);
}

function filtrarPorPais(pais) {
    return item.filter(item => item.pais === pais);
}

function filtrarPorCiudad(ciudad) {
    return item.filter(item => item.ciudad === ciudad);
}

function filtrarPorPrecio(precio) {
    return item.filter(item => item.precio <= precio);
}

function agregarNuevosVuelos() {
    let cantidadNuevosVuelos = prompt("Ingrese la cantidad de nuevos vuelos:");
    cantidadNuevosVuelos = parseInt(cantidadNuevosVuelos);

    if (!isNaN(cantidadNuevosVuelos)) {
        for (let i = 0; i < cantidadNuevosVuelos; i++) {
            let nuevoId = prompt("Ingrese el Id del nuevo vuelo:");
            let nuevoPais = prompt("Ingrese el pais del nuevo vuelo:");
            let nuevaCiudad = prompt("Ingrese la ciudad del nuevo vuelo:");
            let nuevoPrecio = prompt("Ingrese el Precio del nuevo vuelo:");
            let nuevaDisponibilidad = prompt("Ingrese la disponibilidad del nuevo vuelo:");

            nuevoId = parseInt(nuevoId);
            nuevoPrecio = parseFloat(nuevoPrecio);
            nuevaDisponibilidad = parseInt(nuevaDisponibilidad);

            item.push({
                Id: nuevoId,
                pais: nuevoPais,
                ciudad: nuevaCiudad,
                precio: nuevoPrecio,
                disponibilidad: nuevaDisponibilidad
            });
        }

        item.sort((a, b) => b.disponibilidad - a.disponibilidad);

        alert(JSON.stringify(item));
    } else {
        alert("Por favor, ingrese un número válido para la cantidad de nuevos vuelos.");
    }
}

function ejecutarBusqueda(opcion) {
    let filtrar = [];

    switch (opcion) {
        case "id":
            let itemId = Number(prompt("Ingrese un ID entre 101 y 109"));
            while (itemId < 101 || itemId > 109 || isNaN(itemId)) {
                itemId = Number(prompt("Ingrese un ID válido entre 101 y 109"));
            }
            filtrar = filtrarPorId(itemId);
            while (filtrar.length === 0) {
                itemId = Number(prompt("ID no encontrado. Ingrese un ID entre 101 y 109"));
                filtrar = filtrarPorId(itemId);
            }
            break;

        case "pais":
            let itemPais = prompt("Ingrese el nombre del país: \n- Venezuela \n- Chile \n- Peru \n- Uruguay \n- Colombia \n- Florida \n- España \n- New York \n- Italia").toLowerCase();
            while (!["venezuela", "chile", "peru", "uruguay", "colombia", "florida", "españa", "new york", "italia"].includes(itemPais)) {
                itemPais = prompt("Ingrese un país valido: \n- Venezuela \n- Chile \n- Peru \n- Uruguay \n- Colombia \n- Florida \n- España \n- New York \n- Italia").toLowerCase();
            }
            filtrar = filtrarPorPais(itemPais);
            while (filtrar.length === 0) {
                itemPais = prompt("Ningún país hallado con el nombre ingresado. Ingrese un país válido: \n- Venezuela \n- Chile \n- Peru \n- Uruguay \n- Colombia \n- Florida \n- España \n- New York \n- Italia").toLowerCase();
                filtrar = filtrarPorPais(itemPais);
            }
            break;

        case "ciudad":
            let itemCiudad = prompt("Ingrese una ciudad: \n- Caracas \n- Santiago \n- Cuzco \n- Montevideo \n- Bogota \n- Miami \n- Madrid \n- Manhatan \n- Roma").toLowerCase();
            while (!["caracas", "santiago", "cuzco", "montevideo", "bogota", "miami", "madrid", "manhatan", "roma"].includes(itemCiudad)) {
                itemCiudad = prompt("Ingrese una ciudad válida: \n- Caracas \n- Santiago \n- Cuzco \n- Montevideo \n- Bogota \n- Miami \n- Madrid \n- Manhatan \n- Roma").toLowerCase();
            }
            filtrar = filtrarPorCiudad(itemCiudad);
            while (filtrar.length === 0) {
                itemCiudad = prompt("Ninguna ciudad coincide con la ingresada. Ingrese una ciudad válida: \n- Caracas \n- Santiago \n- Cuzco \n- Montevideo \n- Bogota \n- Miami \n- Madrid \n- Manhatan \n- Roma").toLowerCase();
                filtrar = filtrarPorCiudad(itemCiudad);
            }
            break;

        case "precio":
            let itemPrecio = Number(prompt("Ingrese su presupuesto"));
            while (isNaN(itemPrecio) || itemPrecio < 0) {
                itemPrecio = Number(prompt("Ingrese un presupuesto mayor a 0"));
            }
            filtrar = filtrarPorPrecio(itemPrecio);
            while (filtrar.length === 0) {
                itemPrecio = Number(prompt("No hay vuelos que entren en su presupuesto, por favor ingrese un presupuesto mayor a u$d 220"));
                filtrar = filtrarPorPrecio(itemPrecio);
            }
            break;

        case "agencias":
            let usrAgencias = prompt("Indique su operación: Stock / Nuevos Vuelos").toLowerCase();
            while (usrAgencias !== "salir") {
                if (usrAgencias === "stock") {
                    item.sort((a, b) => a.disponibilidad - b.disponibilidad);
                    alert(JSON.stringify(item));
                } else if (usrAgencias === "nuevos vuelos") {
                    agregarNuevosVuelos();
                } else {
                    alert("Indique su necesidad: Stock / Nuevos Vuelos o Salir para finalizar");
                }
                usrAgencias = prompt("Indique su necesidad: Stock / Nuevos Vuelos o Salir para finalizar").toLowerCase();
            }
            break;

        default:
            alert("Ingrese una opción válida");
            break;
    }

    if (filtrar.length > 0) {
        filtrar.forEach(alertarDetalles);
    }
}

alert("Control de disponibilidad de pasajes PreEntrega N2 Verushka Fernandez");

do {
    busqueda = prompt("Ingrese una opción: \n- ID \n- Pais \n- Ciudad \n- Precio \n- Agencias").toLowerCase();
} while (!["id", "pais", "ciudad", "precio", "agencias"].includes(busqueda));

ejecutarBusqueda(busqueda);
