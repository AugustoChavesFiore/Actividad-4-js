function numeroPrimo (a){
    if (numero>1){
        if (a == 0 || a == 1 || a == 4) {
            console.log("No es primo")}
        for (let i = 2; i < a / 2; i++){
            if (a % i == 0) {
                    return console.log("No es primo");
                }
        } 
        return console.log("Es primo");
    }
    else{
        return console.log("No es primo")   
    }
}

numeroPrimo(parseInt(numero))
