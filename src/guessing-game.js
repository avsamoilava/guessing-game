class GuessingGame {
    constructor() {
        this.l = 0;
        this.r = 0;
        this.m = 0;
    }

    setRange(min, max) {
        this.r = max;
        this.l = min;
    }

    guess() {
        this.m = Math.ceil((this.l + this.r) / 2); /* //* так же работает и через Math.round() */
        return this.m;
    }

    lower() {
        this.setRange(this.l, this.m)
    }

    greater() {
        this.setRange(this.m, this.r)
    }
}

module.exports = GuessingGame;
