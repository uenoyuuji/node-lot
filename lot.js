/**
 * Returns true if you won.
 * @param {String} total
 * @return {Boolean} true if you won
 * @example
 * require('lot').draw(10); // returns true 1/10 of the time.
 */
exports.draw = function(total) {
    return total > 0 ? Math.floor((total) * Math.random()) === 0 : false;
};

/**
 * @param {String} total
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

    f.total = total;
    f.reset();

    return f;
};
exports.Lot.prototype = {
    current: null,
    total: null,
    /**
     * Returns true if you won. But if you already drew a winning ticket from the lot, it always returns false.
     * @return {Boolean} true if you won
     */
    draw: function() {
        var win = exports.draw(this.current);
        if(this.current > 0) {
            this.current--;
        }
        return win;
    },
    reset: function() {
        this.current = this.total;
    }
};
