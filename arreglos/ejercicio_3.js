function obtenerPromedioPonderado(lista, listapeso){
    
    let suma=0
        for (let i=0; i<lista.length; i++ ){
            suma+=  lista[i];
        }
        return suma/lista.length
    }

lista1=[1,2,3,4,5]
listap=[80,75,50,60,75]
console.log(obtenerPromedioPonderado(lista1, listap))