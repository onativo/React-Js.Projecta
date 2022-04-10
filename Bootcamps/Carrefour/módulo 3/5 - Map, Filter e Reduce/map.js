//array.map(callback, thisArg)
//callback = função a ser executada em cada elemento
//this é opcional dentro da funçã ode callback

//usando o map
//const arr1 = [1, 2, 3, 4, 5];
//const retorno1 = arr1.map((item) => item * 2);
//console.log(retorno1);
//retorna [2, 4, 6, 8, 10]

//---

//usando o forEach
//const arr2 = [1, 2, 3, 4, 5];
//const retorno = arr2.forEach((item) => item * 2);
//console.log(retorno)
//retorna undefined(?)

const goiaba = {
    value: 2,
}

/*const orange = {
    value: 3,
}

function mapThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg)
}

const nums = [1, 2]

console.log('this -> goiaba', mapThis(nums, goiaba));
console.log('this -> orange', mapThis(nums, goiaba));
*/

function mapS(arr){
    return arr.map(function(item){
        return item * 2
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapS(nums))