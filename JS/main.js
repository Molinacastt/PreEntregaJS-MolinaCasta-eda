// Datos del usuario
let estrato = parseInt(prompt("Ingrese su estrato:\n\n- 1\n- 2\n- 3"));
let tieneTarjetaPremium = prompt("¿Tiene tarjeta Premium? (Sí/No)").toLowerCase() === "si" || "sí";

// Tarifas y descuentos
let tarifaBase = 100;
let descuentoEstrato = 0;
let descuentoPremium = 0;

// Definir la lista de estratos y sus descuentos correspondientes
let listaEstratos = [
  { estrato: 1, descuento: 30 },
  { estrato: 2, descuento: 15 },
  { estrato: 3, descuento: 8 }
];

// Buscar el descuento por estrato en la lista
let i = 0;
while (i < listaEstratos.length && listaEstratos[i].estrato !== estrato) {
  i++;
}

// Si se encontró el descuento correspondiente al estrato, asignarlo
if (i < listaEstratos.length) {
  descuentoEstrato = listaEstratos[i].descuento;
}

// Calcular el descuento por tarjeta Premium
if (tieneTarjetaPremium) {
  descuentoPremium = 15;
}

// Calcular la tarifa final
let tarifaFinal = tarifaBase - descuentoEstrato - descuentoPremium;

// Rsultado de costo de la tarifa con descuentos incluidos segun el caso
alert("Tarifa Base: $" + tarifaBase + "\n" +
      "Descuento por estrato: $" + descuentoEstrato + "\n" +
      "Descuento por tarjeta Premium: $" + descuentoPremium + "\n" +
      "Tarifa Final: $" + tarifaFinal);