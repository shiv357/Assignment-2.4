// Generics class
var Generics = /** @class */ (function () {
    /**
     * [constructor: 1. Initialises the values of instance variables 'x' and 'y'
     *               2. Pushes the passed arguments into '_values' array]
     * @param {T} x [This is assigned to 'this.x']
     * @param {T} y [This is assigned to 'this.y']
     * no return value
     */
    function Generics(x, y) {
        this._values = [];
        this.x = x;
        this.y = y;
        this._values.push(x);
        this._values.push(y);
    }
    Object.defineProperty(Generics.prototype, "values", {
        /**
         * [get values: This function returns the contents of 'this._values' array]
         * no parameters
         * @return {T[]} ['this._values' array is returned]
         */
        get: function () {
            return this._values;
        },
        enumerable: true,
        configurable: true
    });
    return Generics;
}());
// Creating person and food objects
var person = { name: 'Sachin', age: 44 };
var food = { title: 'Veggie Burger', isVeg: true };
// Creating an instance of Generics class with type Object
var generics = new Generics(person, food);
// Getting the class array values
var items = generics.values;
// displaying the result and array values
if (items.length > 0) {
    console.log('\nThe objects have been successfully passed.\n');
    console.log(items);
}
else {
    console.log('\nThe objects have not been successfully passed.\n');
}
/*

    Note: We have to use the following command for successful compilation,

    Command: tsc --target es5 generics.ts

*/
