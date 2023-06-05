function esPalindromo(x){
    let lista1=x.split('');
    let lista2= lista1.reverse()
    z=lista2.join('')
    if (x===z){
        return true;
    }
    else{
        return false;
    }

}

console.log(esPalindromo("radar"))