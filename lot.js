/**
 * Returns true if you won.
 * @param {Number} total
 * @return {Boolean} true if you won
 * @example
 * require('lot').draw(10); // returns true 1/10 of the time.
 */
exports.draw = function(total) {
    return total > 0 ? Math.floor((total) * Math.random()) === 0 : false;
};

/**
 * @param {Number} total
 * @example
 * var lot = Lot(100);
 * for(var i = 0; i < 100; i++) {
 *     if(lot.draw()) {
 *         console.log('' + i + ' loses and win');
 *         break;
 *     }
 * }
 */
exports.Lot = function(total) {
    var F = function() {};
    F.prototype = exports.Lot.prototype;
    var f = new F;

    if(total < 0) {
        total = 0;
    }
    Object.defineProperty(f, "total", {
        value: total
    });
    Object.defineProperty(f, "array", {
        value: [],
        writable: true
    });
    f.reset();

    return f;
};
exports.Lot.prototype = {
    /**
     * Returns true if you won. But if you already drew a winning ticket from the lot, it always returns false.
     * @return {Boolean} true if you won
     */
    draw: function() {
        return this.array.length > 0 ? !!this.array.splice(Math.floor(this.array.length * Math.random()), 1)[0] : false;
    },
    reset: function() {
        this.array = new Array(this.total);
        if(this.total > 0) {
            this.array[Math.floor(this.array.length * Math.random())] = true;
        }
    }
};
