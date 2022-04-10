//const frutas = ['maçã', 'goiaba vermelha', 'abacaxi', 'goiaba branca'];
//frutas.filter((fruta) => frutas.includes('goiaba'))

//deve retornar 'goiaba branca' e 'goiaba vermelha

function filPar(arr){
    return arr.filter(callback)
}


function callback(item){
    return item % 2 !== 0;
}

const nums = [2,3,4,5,6,9,2,1,8,7,3,2]

console.log(filPar(nums))
//retorna apenas os números pares

