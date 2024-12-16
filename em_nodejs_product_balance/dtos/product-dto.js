module.exports = class ProductDto {
    plu;
    productName;

    constructor(model) {
        this.plu = model.product_name;
        this.productName = model.product_plu;
    }
}