// Crie uma função que verifique se uma string é um palíndromo (lê-se igual de trás para frente).
// Exemplo: "arara" → true

const palindromo = (str) => {
    let strInvert = str.split("").reverse("").join("")
    if (strInvert === str){
        return true
    }
    return false
}

console.log(palindromo("arara"))