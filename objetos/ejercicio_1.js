
function calcularTotal(pro){

   return pro.cantidad*pro.precio;
}

const producto={
    nombre:"Cepita",
    precio:400,
    cantidad:5
}

console.log(calcularTotal(producto))