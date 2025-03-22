// Crie uma função que capitalize a primeira letra de cada palavra em uma string.
// Exemplo: "hello world" → "Hello World"

const capitalize = (str) => {
    let arrStr = str.split("")
    let upper = true
    let varUpper = ''

    for(let i = 0; i < arrStr.length; i++) {
        if (upper) {
            varUpper = arrStr[i]
            arrStr.splice(i, 1)
            arrStr.splice(i, 0, varUpper.toUpperCase())
            upper = false
        }
        else if (arrStr[i] === ' ') {
            upper = true
        }
    }

    return arrStr.join("")
    
}

console.log(capitalize("  hoje  tem  café  da  manhã"))