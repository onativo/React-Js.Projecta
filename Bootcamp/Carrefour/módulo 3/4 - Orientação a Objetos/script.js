class contaBancaria{
    constructor(agencia, numero, tipo){
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
    }
    get saldo(){
    return this._saldo;
}
    set saldo(valor){
        this._saldo = valor;
    }
    sacar(valor){
        if (valor > this._saldo){
            return 'Operação negada'
        }
        this._saldo -= valor;
        return this._saldo
    }
    depositar(valor){
        this._saldo += valor;
        return this._saldo
    }
}

class contaCorrente extends contaBancaria{
    constructor(agencia, numero, cCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this.cCredito = cCredito;
    }
    get cCredito(){
        return this._cCredito;
    }
    set cCredito(valor){
        this._cCredito = valor;
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupanca';
    }

}

class contaUni extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    }
    sacar(valor){
        if (valor > 500){
            return 'Operação Negada!!'
        }
        this._saldo -= valor
    }
}