// Escreva uma função que conte quantas vogais existem em uma string.
// Exemplo: "javascript" → 3

const contVogais = (str) => {
    const vogais = ['a', 'e', 'i', 'o', 'u']
    const arr = str.split("")
    let cont = 0

    for (const i of arr){
        if (vogais.includes(i)) {
            cont++
        }
    }
    return cont
}

console.log(contVogais("javascript"))