//promisses
//objeto de processamento assíncrono
    //inicialmente seu valor é desconhecido,
    //ela pode então ser resolvida ou rejeitada
//tem 3 estágios:
    //pending
    //fulfilled
    //rejected


const prom = new Promise((resolve, reject) =>{
    window.setTimeout(() =>{
        resolve(console.log('Resolvida'));
    }, 2000)
});

await prom
    .then((result) => result + 'passando pelo then')
    .then((result) => result + '...cabô')
    .catch((err) => result + console.log(err.message));


async function resolve(){
    const prom = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida')
        }, 3000);
    });
    const resolved = await prom
        .then((result) => result + 'passando pelo then')
        .then((result) => result + 'passando pelo then')
        .catch((err) => result + console.log(err.message))
    return resolved;
}

