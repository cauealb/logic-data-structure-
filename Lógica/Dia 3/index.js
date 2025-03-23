// Implemente uma função de busca binária em um array ordenado.

const searchBinary = (arr, target) => {
    let inicio = 0
    let fim = arr.length - 1

    while(inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2)

        if(arr[meio] === target) {
            return meio
        }
        else if (arr[meio] < target) {
            inicio = meio + 1
        }
        else {
            fim = meio - 1
        }
    }

    return -1
}

console.log(searchBinary([1, 2, 7, 9, 10, 15], 15))