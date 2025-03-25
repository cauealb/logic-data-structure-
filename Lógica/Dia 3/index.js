// Escreva uma função que some os dígitos de um número (ex: 123 → 6).

const soma = (num) => {
    const arrString = String(num).split("")
    let soma = 0

    for(const elementos of arrString) {
        const convert = Number(elementos)

        soma += convert
    }

    return soma
}

console.log(soma(123))