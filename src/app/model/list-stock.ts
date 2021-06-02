import { Stock } from "./stock";

export class ListStock {

    stockPrices: Array<Stock>;
    maxStockPrice: number;
    minStockPrice: number;
    avgStockPrice: number;

    constructor() {
        this.stockPrices = [];
        this.maxStockPrice = 0;
        this.minStockPrice = 0;
        this.avgStockPrice = 0;
    }
}
