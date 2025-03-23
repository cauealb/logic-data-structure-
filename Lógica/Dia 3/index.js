// Implemente uma função que ordene um array de números em ordem crescente.

const order = (arr) => {
    return arr.sort((a, b) => {
        return a - b
    })
}


console.log(order([3, 5, 7, 1, 2]))
// [3, 5, 7, 1, 2] = []