class CartService {
  constructor() {
    this.content = this.#readFromLocalStorage();
  }

  #readFromLocalStorage() {
    return JSON.parse(localStorage.getItem("cart")) || {};
  }

  #writeToLocalStorage(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  clear() {
    this.content = {};
    this.#writeToLocalStorage(this.content);
  }

  getItems() {
    return this.content;
  }

  getNumItems() {
    let count = 0;
    for (const key in this.content) {
      count += this.content[key];
    }
    return count;
  }

  getSubtotal(products) {
    let cost = 0;
    products.forEach((p) => {
      cost +=
        Math.round(
          100 * p.price * (1 - p.discountPercentage * 0.01) * this.content[p.id]
        ) / 100;
    });
    return cost;
  }

  update(id, count) {
    if (id in this.content) {
      this.content[id] += count;
    } else {
      this.content[id] = count;
    }
    if (this.content[id] <= 0) {
      delete this.content[id];
    }
    this.#writeToLocalStorage(this.content);
    return this.content;
  }
}

export const cartService = new CartService();
