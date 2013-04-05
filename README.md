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
var lot = new (require('lot').Lot)(100);
lot.draw(); // Returns true in 1/100
lot.draw(); // If you've already got true, `lot` always returns false. Or else it returns true in 1/99
```
