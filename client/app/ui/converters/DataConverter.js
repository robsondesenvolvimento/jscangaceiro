class DataConverter {

    constructor(){
        throw new Error('Esta classe não pode ser instanciada.');
    }

    static paraData(date) {

        if (!/^\d{4}-\d{2}-\d{2}$/.test(date))
            throw new Error('Data deve estar no formato aaaa-mm-dd.');

        return new Date(...date
            .split('-')
            .map((item,indice) => item - indice % 2));
    }

    static paraTexto(date) {
        return moment(date).format('DD/MM/YYYY');
    }
}