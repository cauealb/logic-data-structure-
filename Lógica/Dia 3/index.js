// Se o número é múltiplo de 3 → "Fizz"

// Se é múltiplo de 5 → "Buzz"

// Se é múltiplo de ambos → "FizzBuzz"

// Caso contrário → retorna o próprio número.
// Exemplo: 15 → ["1", "2", "Fizz", ..., "14", "FizzBuzz"]

const FizzBuzz = (n) => {
    let arr = []
    for(let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("FizzBuzz")
        }
        else if (i % 3 === 0) {
            arr.push("Fizz")
        }
        else if (i % 5 === 0) {
            arr.push("Buzz")
        }
        else {
            arr.push(i)
        }
    }
    return arr
}

console.log(FizzBuzz(15))