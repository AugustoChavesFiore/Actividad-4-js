function obtenerPares(lista){

    let listaPares=[];
    for (let i=0; i<lista.length; i++ ){
        if(lista[i]%2===0){
            listaPares.push(lista[i])
        }
    }

    return listaPares;

}
let lista1=[1,2,3,4,5]
let lista2=[2,6,7,8,9,10]
console.log(obtenerPares(lista1))
console.log(obtenerPares(lista2))
