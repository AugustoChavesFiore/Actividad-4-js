function obeteberMaximo(lista){
    max=-9999999;
    for (let i=0; i<lista.length; i++ ){

            if(lista[i]>max){
                max=lista[i]
            }
        
        }
    return max
}
lista1=[1,2,79,3,4,5,25]
console.log(obeteberMaximo(lista1))