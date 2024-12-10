
class PriceService {

    #roundPriceToCents(p) {
        let price = String(Math.round(100 * Number(p)) / 100);
        if (!price.split(".")[1]) {
            price += ".";
        }
        while (price.split(".")[1].length < 2) {
            price += "0";
        }
        return price;
    }

    getDiscountPrice(price, discount) {
        return this.#roundPriceToCents(price * (1.0 - (discount / 100)));
    }

    getPaymentPlanPrice(price, discount, numMonths) {
        const actualPrice = Number(this.getDiscountPrice(price, discount));
        return this.#roundPriceToCents(actualPrice / numMonths);
    }


}


export const priceService = new PriceService()