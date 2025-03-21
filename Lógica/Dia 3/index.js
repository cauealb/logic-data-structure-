const fibonacci = (n) => {
    const sequencia = [0, 1]

    for(let i = 2; i < n; i++) {
        sequencia.push(sequencia[i - 2] + sequencia[i - 1])
    }

    return sequencia
}

console.log(fibonacci(6))