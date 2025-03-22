// function fibonacci(n) {
//     if(n === 0) {
//         return 0
//     }
//     if (n === 1) {
//         return 1
//     }

//     return  fibonacci(n - 1) + fibonacci(n - 2)
// }

// console.log(fibonacci(5))

function fatorial(n) {
    if(n === 0) {
        return 0
    }
    if(n === 1) {
        return 1
    }

    return n * fatorial(n - 1)
}

console.log(fatorial(5))