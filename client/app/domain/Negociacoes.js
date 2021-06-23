class Negociacoes {


    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    paraArray(){
        //Programação defensiva
        return [].concat(this._negociacoes);
    }

}