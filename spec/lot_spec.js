describe('lot', function() {
    var lot = require('../lot');

    describe('draw', function() {
        it('should return true or false if the argument is 2', function() {
            expect(typeof(lot.draw(2))).toBe('boolean');
        });

        it('should return true if the argument is 1', function() {
            expect(lot.draw(1)).toBe(true);
        });

        it('should return false if the argument is 0', function() {
            expect(lot.draw(0)).toBe(false);
        });

        it('should return false if the argument is -1', function() {
            expect(lot.draw(-1)).toBe(false);
        });

        xit('should return true in nearly 1/255 of the time if the argument is 255', function() {
            var t = 255;
            var i = 0, l = 10000, a = 0;
            for(; i < l; i++) {
                if(lot.draw(t)) {
                    a++;
                }
            }
            expect(100 - Math.abs(1/t*100 - a/l*100)).toBeGreaterThan(99); // 
        });
    });

    describe('Lot', function() {
        it('should return Lot object', function() {
            var l = lot.Lot(1);
            expect(l).not.toBeUndefined();
            expect(l.draw).toBe(lot.Lot.prototype.draw);
            expect(l.reset).toBe(lot.Lot.prototype.reset);
        });

        describe('constructor', function() {
            it('should return Lot object', function() {
                var l = new (lot.Lot)(1);
                expect(l).not.toBeUndefined();
                expect(l.draw).toBe(lot.Lot.prototype.draw);
                expect(l.reset).toBe(lot.Lot.prototype.reset);
            });
        });

        describe('draw', function() {
            it('should return true for the first time only if the object initialized with 1', function() {
                var l = lot.Lot(1);
                expect(l.draw()).toBe(true);
                expect(l.draw()).toBe(false);
                expect(l.draw()).toBe(false);
            });

            it('should return false if the object initialized with 0', function() {
                expect(lot.Lot(0).draw()).toBe(false);
            });

            it('should return false if the object initialized with -1', function() {
                expect(lot.Lot(-1).draw()).toBe(false);
            });
        });

        describe('reset', function() {
            it('should initialize the object again with 1', function() {
                var l = lot.Lot(1);
                expect(l.draw()).toBe(true);
                expect(l.draw()).toBe(false);
                l.reset();
                expect(l.draw()).toBe(true);
                expect(l.draw()).toBe(false);
            });

            it('should initialize the object again with 0', function() {
                var l = lot.Lot(1);
                expect(l.draw()).toBe(true);
                expect(l.draw()).toBe(false);
                l.reset();
                expect(l.draw()).toBe(true);
                expect(l.draw()).toBe(false);
            });
        });
    });
});
