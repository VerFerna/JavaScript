const item = [
    { Id: 101, país: "Venezuela", ciudad: "Caracas", Precio: 860 USD, existencias: 250 },
    { Id: 102, país: "Chile", ciudad: "Santiago", Precio: 350 USD, existencias: 328 },
    { Id: 103, país: "Peru", ciudad: "Cuzco", Precio: 475 USD, existencias: 235 },
    { Id: 104, país: "Uruguay", ciudad: "Montevideo", Precio: 225 USD, existencias: 500 },
    { Id: 105, país: "Colombia", ciudad: "Bogota", Precio: 550 USD, existencias: 388 },
    { Id: 106, país: "Miami", ciudad: "Florida", Precio: 872 USD, existencias: 300 },
    { Id: 107, país: "España", ciudad: "Madrid", Precio: 999 USD, existencias: 158 },
    { Id: 108, país: "New York", ciudad: "Manhatan", Precio: 1050 USD, existencias: 288 },
    { Id: 109, país: "Italia", ciudad: "Roma", Precio: 840 USD, existencias: 542 },
];

alert("PreEntrega2 Verushka Fernandez Stock de pasajes");

let busqueda;
let filtrar = "";

do {
    busqueda = prompt("Ingrese una de las siguientes opciones: \n- ID \n- País \n- Ciudad \n- Precio \n- Adm (acceso empleado)").toLowerCase();
} while (busqueda !== "id" && busqueda !== "país" && busqueda !== "ciudad" && busqueda !== "precio" && busqueda !== "adm");

switch (busqueda) {
    case "id":
        let itemId = Number(prompt("Ingrese un ID entre 101 y 109"));
        while (itemId < 101 || itemId > 109 || isNaN(itemId)) {
            itemId = Number(prompt("Ingrese un ID válido entre 101 y 109"));
        }
        filtrar = item.filter(item => item.Id === itemId);
        while (filtrar.length === 0) {
            itemId = Number(prompt("ID no encontrado. Ingrese un ID entre 101 y 109"));
            filtrar = item.filter(item => item.Id === itemId);
        }
        break;

    case "pais":
        let itemPaís = prompt("Ingrese el país de su preferencia: \n- Venezuela \n- Chile \n- Peru \n- Uruguay \n- Colombia \n- Miami \n- España \n- New York \n- Italia").toLowerCase();
        while (!["Venezuela", "Chile", "Peru", "Uruguay", "Colombia", "Miami", "España", "New York", "Italia"].includes(itemPaís)) {
            itemPaís = prompt("Ingrese un nombre de país válido: \n- Venezuela \n- Chile \n- Peru \n- Uruguay \n- Colombia \n- Miami \n- España \n- New York \n- Italia").toLowerCase();
        }
        filtrar = item.filter(item => item.país === itemPaís);
        while (filtrar.length === 0) {
            itemPaís = prompt("Ningún país hallado con el nombre ingresado. Ingrese un país válido: n- Venezuela \n- Chile \n- Peru \n- Usuguay \n- Colombia \n- Miami \n- España \n- New York \n- Italia").toLowerCase();
            filtrar = item.filter(item => item.país === itemPaís);
        }
        break;

    case "ciudad":
        let itemCiudad = prompt("Ingrese una de las siguientes ciudades: \n- Caracas \n- Santiago \n- Cuzco \n- Montevideo \n- Bogota \n- Florida \n- Madrid \n- Manhatan \n- Roma").toLowerCase();
        while (!["Caracas", "Santiago", "Cuzco", "Montevideo", "Bogota", "Florida", "Madrid", "Manhatan", "Roma"].includes(itemCiudad)) {
            itemCiudad = prompt("Ingrese una ciudad válida: \n- Caracas \n- Santiago \n- Cuzco \n- Montevideo \n- Bogota \n- Florida \n- Madrid \n- Manhatan \n- Roma").toLowerCase();
        }
        filtrar = item.filter(item => item.ciudad === itemCiudad);
        while (filtrar.length === 0) {
            itemCiudad = prompt("Ninguna ciudad coincide con la ingresada. Ingrese una ciudad válida:  \n- Caracas \n- Santiago \n- Cuzco \n- Montevideo \n- Bogota \n- Florida \n- Madrid \n- Manhatan \n- Roma").toLowerCase();
            filtrar = item.filter(item => item.categoria === itemCategoria);
        }

        break;

    case "precio":
        let itemPrice = Number(prompt("Ingrese el valor de su presupuesto"));
        while (isNaN(itemPrice) || itemPrice < 0) {
            itemPrice = Number(prompt("Ingrese un presupuesto mayor a 0"));
        }
        filtrar = item.filter(item => item.Precio <= itemPrice);
        while (filtrar.length === 0) {
            itemPrice = Number(prompt("No hay productos que entren en su presupuesto, por favor ingrese un presupuesto mayor a u$d220"));
            filtrar = item.filter(item => item.Precio <= itemPrice);
        }
        break;

    case "adm":
        let usrAdm = prompt("Indique su necesiadad: Stock / Reposicion").toLowerCase();
        let stock = "";
        let reorder = "";
        while (usrAdm !== "salir") {
            if (usrAdm === "stock") {
                stock = item.sort((a, b) => a.existencias - b.existencias);
                alert(JSON.stringify(stock));
            } else if (usrAdm === "reposicion") {
                reposicion = item.sort((a, b) => b.existencias - a.existencias);
                alert(JSON.stringify(reposicion));
            } else {
                alert("Indique su necesiadad: Stock / Reposicion o Salir para finalizar");
            }
            usrAdm = prompt("Indique su necesiadad: Stock / Reposicion o Salir para finalizar").toLowerCase();
        }
        break;

    default:
        alert("Ingrese una de las siguientes opciones: \n- ID \n- País \n- Ciudad \n- Precio \n- Adm (acceso empleado)").toLowerCase();
        while (busqueda !== "id" && busqueda !== "país" && busqueda !== "ciudad" && busqueda !== "precio" && busqueda !== "adm") {
            busqueda = prompt("Ingrese una de las siguientes opciones: \n- ID \n- País \n- Ciudad \n- Precio \n- Adm (acceso empleado)").toLowerCase();
        }
        break;
}

if (filtrar.length > 0) {
    filtrar.forEach((item) => {
        alert(`
    id: ${item.Id}
    país: ${item.país}
    ciudad: ${item.ciudad}
    precio: $${item.Precio}
    stock: ${item.existencias}
    `);
    });
}