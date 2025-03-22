function somaArray(arr) {
    if(arr.length === 0) {
        return 0
    }
    return arr[0] + somaArray(arr.slice(1))
}

console.log(somaArray([1, 2, 3, 4]))