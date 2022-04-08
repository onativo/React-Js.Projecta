function func(arr, num){
    try {
        if(!arr && !num)
            throw new ReferenceError('Põe um array e um numero ai meu fi')
        if(typeof arr !== 'object' )
            throw new TypeError('Num é um objeto isso')
        if(num !== 'number' )
            throw new TypeError('Num é um número isso')
        if(arr.length !== num)
            throw new RangeError('São diferente os dois')
        return arr;
    }
    catch (e) {
        if(e instanceof ReferenceError){
            console.log('This is an Reference Error');
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log('This is an TypeError');
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log('This is an RangeError');
            console.log(e.message);
        }else{
            console.log('Unkown Error' + e);
        }
    }
}

console.log(func([1,2,3,4,5], 5));