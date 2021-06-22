class NegociacaoController {

    constructor(){
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new Negociacoes();
    }

    adiciona(event){
        event.preventDefault();

        let negociacao = this._criarNegociacao();

        this._negociacoes.adiciona(negociacao);
        console.log(this._negociacoes.paraArray());

        this._limparFormulario();

        //console.log(negociacao);
        //console.log(DataConverter.toText(this._inputData.val()));
        //console.log(DataConverter.toDate(this._inputData.val()));
        //console.log(moment().format('YYYY-MM-DD h:mm:ss'));
        //console.log(moment().format())
    }

    _criarNegociacao(){
        return new Negociacao(
            DataConverter.toDate(this._inputData.val()),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
    }

    _limparFormulario(){
        this._inputData.val('');
        this._inputQuantidade.val('');
        this._inputValor.val('');
    }
}