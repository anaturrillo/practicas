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

clone.a.b.c = 5;

console.log(obj.a.b.c) // 2
