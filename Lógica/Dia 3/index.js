// let varText = "2";
// let varNumber = 2;
// let varBoolen = true;
// let varNull = null;
// let varUndefined = undefined;

let palavra = "Geovanna"
let arr = palavra.split("")

let newArray = []
for(let i = 0; i < arr.length; i++){
    newArray.unshift(arr[i])
}

let newPalavra = ""
for(let i = 0; i < newArray.length; i++){
    newPalavra += newArray[i]
}

console.log(newPalavra)