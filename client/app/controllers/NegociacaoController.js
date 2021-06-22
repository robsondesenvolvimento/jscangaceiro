class NegociacaoController {

    constructor(){
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();   
        let dataConverter = new DataConverter();

        let negociacao = new Negociacao(
            dataConverter.toDate(this._inputData.val()),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        console.log(negociacao);
        console.log(dataConverter.toText(this._inputData.val()));
        console.log(dataConverter.toDate(this._inputData.val()));
        //console.log(moment().format('YYYY-MM-DD h:mm:ss'));
        //console.log(moment().format())
    }
}