// Implemente uma função que encontre o segundo maior número em um array.
// Exemplo: [5, 1, 8, 3] → 5

const secoundGreater = (arr) => {
    arr.sort(function(a, b) {
        return a - b
    })

    return arr[1]
}

console.log(secoundGreater([1, 10, 2, 21]))