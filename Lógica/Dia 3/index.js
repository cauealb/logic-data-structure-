// Escreva uma função para calcular o fatorial de um número (ex: 5! = 5 × 4 × 3 × 2 × 1).
// Exemplo: 5 → 120

const fatorial = (num) => {
    let conta = 1
    for(let i = num; i <= num; i--){
        if(i === 0) {
            return conta
        }
        conta = conta * i
    }
}

console.log(fatorial(7))