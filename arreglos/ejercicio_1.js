let lista1=[1,2,3,4,5]
let lista2=[2,6,7,8,9,10]

function   obtenerSuma(lista){
    let suma=0
    for (let i=0; i<lista.length; i++ ){
        suma+=  lista[i];
    }
    return suma
}
console.log(obtenerSuma(lista1))
console.log(obtenerSuma(lista2))