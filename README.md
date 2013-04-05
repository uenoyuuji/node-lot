The random functions like lot drawing.

Install
==========

```bash
npm install git://github.com/uenoyuuji/node-lot.git
```

Usage
==========

Function
----------

```JavaScript
var draw = require('lot').draw;
draw(100); // Returns true in 1/100
```

Object
----------

```JavaScript
var myLot = new (require('lot').Lot)(100);
myLot.draw(); // Returns true in 1/100
myLot.draw(); // If you've already got true, `myLot` always returns false. Or else it returns true in 1/99
myLot.reset() // Reset a state of the object `myLot`
myLot.draw(); // Returns true in 1/100
```
