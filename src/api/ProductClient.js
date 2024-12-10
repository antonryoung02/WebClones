import { productSchema } from "./ProductSchema";
import {categorySchema } from "./CategorySchema";
const Ajv = require("ajv");

class ProductClient {
  static apiUrl = "https://dummyjson.com";
  static limit = 10;

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
      return data;
    } catch {
      console.log(`error fetching product with id ${id}`);
    }
  }

  async getProducts(offset, searchQuery, category) {
    // API only supports search by query OR search by category
    let queryString = "";
    if (category) {
      queryString = "/category/" + category + "?limit=" + ProductClient.limit + "&skip=" + (offset * ProductClient.limit); 
    } else {
      queryString = "/search?q=" + searchQuery + "&limit=" + ProductClient.limit + "&skip=" + (offset * ProductClient.limit); 
    }
    const requestUrl = ProductClient.apiUrl + "/products" + queryString;
    const response = await fetch(requestUrl);
    const data = await this.#validateResponse(response, productSchema);
    return data;
  }

  async getCategories() {
    const requestUrl = ProductClient.apiUrl + '/products/category-list';
    const response = await fetch(requestUrl);
    const data = await this.#validateResponse(response, categorySchema);
    return data;
  }

  async getProductsWithTags(tags) {
  
    const productPromises = tags.map(async (tag) => {
      const requestUrl = `${ProductClient.apiUrl}/products/category/${tag}`;
      const response = await fetch(requestUrl);
      const data = await this.#validateResponse(response, productSchema);
      return data.products; 
    });
  
    const allProducts = (await Promise.all(productPromises)).flat();
    return allProducts;
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
