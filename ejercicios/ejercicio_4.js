function sumaTotal(){
   let acumulador=0;
   let ingreso=prompt("Ingrese el precio del producto cuando termine escriba 'total' para la suma")
   while (ingreso.toLowerCase()!="total"){
    acumulador+=parseFloat(ingreso);
    ingreso=prompt("Ingrese el precio del producto cuando termine  escriba total para la suma")
   }
 return console.log(acumulador);
}


sumaTotal();
