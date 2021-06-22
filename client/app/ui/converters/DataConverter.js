class DataConverter {
    toDate(date) {
        return new Date(...date
            .split('-')
            .map((item,indice) => item - indice % 2));
    }

    toText(date) {
        return moment(date).format('DD/MM/YYYY');
    }
}