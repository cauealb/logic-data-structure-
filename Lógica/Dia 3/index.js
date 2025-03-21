// Implemente uma função que remova elementos duplicados de um array.
// Exemplo: [1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]

const removeRepet = (arr) => {
    let newArray = []

    for(const i of arr) {
        if (!newArray.includes(i)) {
            newArray.push(i)
        }
    }

    return newArray
}

console.log(removeRepet([76, 54, 2, 4, 6, 4, 22, 76, 54, 2, 1, 6, 7, 22]))