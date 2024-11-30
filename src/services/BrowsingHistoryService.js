
class BrowsingHistoryService {
    static bufferLength = 12;

    constructor() {
        this.history = this.#readFromLocalStorage(); // Array of product ids in a fifo queue
    }

    #readFromLocalStorage() {
        return JSON.parse(localStorage.getItem("history")) || [];
      }
    
    #writeToLocalStorage() {
        localStorage.setItem("history", JSON.stringify(this.history));
      }

    getHistory() {
        return this.history.reverse();
    }

    clear() {
        this.history = [];
        this.#writeToLocalStorage(); 
    }

    addProductToHistory(id) { 
        this.history = this.history.filter((item) => item !== id);
        this.history.push(id);
        if (this.history.length > BrowsingHistoryService.bufferLength) {
            this.history.shift();
        }
        this.#writeToLocalStorage(this.history);
    }

}

export const browsingHistoryService = new BrowsingHistoryService();