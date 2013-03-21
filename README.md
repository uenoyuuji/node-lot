The random functions like lot drawing.

Install
==========

```bash
npm install git://github.com/uenoyuuji/node-lot.git
```

Usage
==========

Object
----------

```JavaScript
var lot = new (require('lot').Lot)(100); // 1 true and 99 false,
for(var i = 1; i < lot.total; i++) {
    if(lot.draw()) {
        break;
    }
}
```

Function
----------

```JavaScript
var draw = require('lot').draw;
draw(100);
```
