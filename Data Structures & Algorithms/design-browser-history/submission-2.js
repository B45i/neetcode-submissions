class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.backH = [homepage];
        this.front = [];
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.backH.push(url);
        this.front = [];
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while(steps > 0 && this.backH.length > 1) {
            this.front.push(this.backH.pop())
            steps--;
        }
        return this.backH.at(-1)
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
          while (steps > 0 && this.front.length > 0) {
            this.backH.push(this.front.pop());
            steps--;
        }
        return this.backH.at(-1)
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
