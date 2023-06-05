function temperatura(temperatura,unidad){
    let resultado;
    if(unidad==="f"){ //cilcius a fahrenheit
      return resultado= (temperatura*(9/5))+32;
    }
    else if(unidad==="c"){//fahrenheit a cilcius 
      return resultado=(temperatura-32)*(5/9);

    } 
}

let temp=parseFloat(prompt("Ingrese Temperatura"))
let uni=prompt("Ingrese a que unidad quiere pasar(F/C)")

console.log(temperatura(temp,uni))