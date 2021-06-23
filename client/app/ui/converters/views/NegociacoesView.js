class NegociacoesView {

    constructor(negociacoes){
        this._negociacoes = $(negociacoes);
    }

    update(modelo){
        this._negociacoes.html(this.template(modelo));
    }

    template(modelo) {
        return `
            <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
            ${modelo.paraArray().map(negociacao => {
                return `
                <tr>
                <td>${DataConverter.paraTexto(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
                <td>${negociacao.volume}</td>
                </tr>
                `
            }).join('')}
            </tbody>
            
            <tfoot>
            </tfoot>
            </table>
            `;
    }

}
