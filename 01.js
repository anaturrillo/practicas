/*
ENUNCIADO
clonar el objeto 'obj' de manera tal que si realizo
clonDeObj.a.b.c = 3

al loguear 'obj.a.b.c' el resultado sea 2

*/

const obj = {
    a: {
        b: {
            c: 2
        }
    },
    d:  {
        e: {
            f: 6
        }
    }
}

function cloneThis (obj) {
    const clone = {};

    for (key in obj) {
        const value = obj[key];
        const valueIsObject = !!value && !Array.isArray(value) && typeof value === 'object'
        
        if (valueIsObject) {
            clone[key] = cloneThis(value);
        } else {
            clone[key] = obj[key]
        }
        
    }

    return clone;
}

const clone = cloneThis(obj);

clone.a.b.c = 3;

console.log(obj.a.b.c) // 2
