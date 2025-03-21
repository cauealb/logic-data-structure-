// Crie uma função que retorne os primeiros n números da sequência de Fibonacci.
// Exemplo: n = 6 → [0, 1, 1, 2, 3, 5]

// const fibonacci = (n) => {
//     let finoArray = [0, 1]
//     let ant1 = 0
//     let ant2 = 1
//     let num = 0
//     for(let i = 0; i < n; i++){
//         num += ant1 + ant2
//         ant1 = finoArray[i - 2]
//         ant2 = finoArray[i - 1]
//         finoArray.push(num)
//     }
// }

// console.log(fibonacci(6))

const fibonacci = (n) => {
    const sequencia = [0, 1]

    for(let i = 2; i < n; i++) {
        sequencia.push(sequencia[i - 1] + sequencia[i - 2])
    }

    return sequencia.slice(0, n)
}

console.log(fibonacci(6))