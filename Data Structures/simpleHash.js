var assert = require('assert');
var addMethodSolution = function (key, val) {
    var theHash = hash(key);
    if (!this.collection.hasOwnProperty(theHash)) {
        this.collection[theHash] = {};
    }
    this.collection[theHash][key] = val;
}

var called = 0;
var hash = string => {
    called++;
    var hashed = 0;
    for (var i = 0; i < string.length; i++) {
        hashed += string.charCodeAt(i);
    }
    return hashed;
};
var HashTable = function () {
    this.collection = {};
    // Only change code below this line
    this.add = function (key, value) {
        let index = hash(key)
        if (!this.collection[index]) {
            this.collection[index] = {}
        }
        // this.collection[index][key]={"value":value}
        this.collection[index][key] = { value }
    }

    this.lookup = function (value) {
        let index = hash(value)
        return this.collection[index][value].value
    }

    this.remove = function (value) {
        let index = hash(value)
        // return delete this.collection[index]
        if (Object.keys(this.collection[index]).length > 1) {
            return delete this.collection[index][value]
        }
        if (Object.keys(this.collection[index])[0] === value) {
            return delete this.collection[index]
        }

    }

    // Only change code above this line
};
let t = new HashTable()
t.add('abe', 78933)
t.add('bea', 78000)
t.add('mike', 19)
console.log(t.collection)
console.log('\n')
t.remove('aeb')
console.log(t.collection)

assert(
    (function () {
        var test = false;
        var hashValue = hash('key');
        if (typeof HashTable !== 'undefined') {
            test = new HashTable();
        }
        test.add = addMethodSolution;
        test.add('key', 'value');
        test.remove('key');
        return !test.collection.hasOwnProperty(hashValue);
    })()
);
