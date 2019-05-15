/*
Dado:
const a = function (x) {
    this.x = x
}

const b = function(x, y) {
    this.y = y
}

const newB = new b('x', 'y');

newB.getX();
newB.getY();

Modificar el codigo de manera que al ejecutar las últimas dos lineas
se logueen por consola 'x' e 'y' respectivamente.
(Usando la funcion a)

*/


const a = function (x) {
    this.x = x
}


const b = function(x, y) {
    this.y = y
    this.setX = a

    this.setX(x)
    // tambien puede ser a.call(this, x) pero me gusta mas de la otra forma

    this.getX = function() {
        console.log(this.x)
    }
    this.getY = function () {
        console.log(this.y)
    }
}

const newB = new b('x', 'y');

newB.getX();
newB.getY();

