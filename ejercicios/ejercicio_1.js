function mayorOmenor(a){
        if (a===0){
            return console.log("El número es cero")
        }
        else if(a>0){
            return console.log("El número es positivo")
        }
        else{
            return console.log("El número es negativo")
        }
    }
    let numero=prompt("Ingrese un número")
    mayorOmenor(parseFloat(numero))