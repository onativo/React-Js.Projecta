//cons callbackfn = function(accumulator, currentValue, index, array){
    //faça algo


//array.reduce(callbackfn, initialValue)

//accumulator/preValue: acumulador de todas as chamadas de callbackFn
//currentValue: elemento atual sendo acessado pela função

/*
function somar(arr){
    return arr.reduce(function(prev, current){
        return prev + current;
    })
}

const num = [1, 2]

console.log(somar(num))
*/

const lista = [{
    name: 'chocolate',
    preco: 8
},{
    name: 'goiaba',
    preco: 2
},{
    name: 'agua',
    preco: 5
},{
    name: 'cafe',
    preco: 16
}]

const saldo = 40;

function calcSaldo(saldo, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index+1)
        console.log(prev)
        console.log(current)
        return prev - current.preco;
    }, saldo);
}

console.log(calcSaldo(saldo, lista))


