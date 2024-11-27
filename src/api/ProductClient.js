import { productSchema } from "./ProductSchema";
const Ajv = require("ajv");

class ProductClient {
  static apiUrl = "https://dummyjson.com";

  constructor() {
    this.responseValidator = new Ajv();
  }

  async getProductWithId(id) {
    const requestUrl = ProductClient.apiUrl + "/products/" + id;
    const response = await fetch(requestUrl);
    try {
      const data = await this.#validateResponse(
        response,
        productSchema.properties.products.items
      );
      console.log(` got product with id ${id}: ${JSON.stringify(data)}`);
      return data;
    } catch {
      console.log(`error fetching product with id ${id}`);
    }
  }

  async getProducts() {
    const requestUrl = ProductClient.apiUrl + "/products";
    const response = await fetch(requestUrl);
    const data = await this.#validateResponse(response, productSchema);
    return data;
  }

  async getProductsWithTag(tag) {
    const requestUrl = ProductClient.apiUrl + "/products/category/" + tag;
    const response = await fetch(requestUrl);
    const data = await this.#validateResponse(response, productSchema);
    return data.products;
  }

  async #validateResponse(response, schema) {
    if (!response.ok) {
      throw new Error(`Error with request!: ${response.status}`);
    }
    const data = await response.json();
    if (!this.responseValidator.validate(schema, data)) {
      throw new Error(
        `schema ${JSON.stringify(schema)} does not match data: ${JSON.stringify(
          this.responseValidator.errors
        )}`
      );
    }
    return data;
  }

}

export const productClient = new ProductClient();
