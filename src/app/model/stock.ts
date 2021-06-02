export class Stock {

    stockId: string;
    stockPrice: string;
    stockCreatedDate: Date;
    companyCode: string;

    constructor() {
        this.stockId = '';
        this.stockPrice = '';
        this.stockCreatedDate = new Date();
        this.companyCode = '';
    }
}
