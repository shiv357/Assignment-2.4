// Person interface for creating person object
interface Person {
    name: string;
    age: number;
}

// Food interface for creating food object
interface Food {
    title: string;
    isVeg: boolean;
}

// Generics class
class Generics<T> {

    x: T;
    y: T;
    _values: T[] = [];

    /**
     * [constructor: 1. Initialises the values of instance variables 'x' and 'y'
     *               2. Pushes the passed arguments into '_values' array]
     * @param {T} x [This is assigned to 'this.x'] 
     * @param {T} y [This is assigned to 'this.y']
     * no return value 
     */
    constructor ( x: T, y: T ) {

        this.x = x;
        this.y = y;

        this._values.push ( x );
        this._values.push ( y );

    }

    /**
     * [get values: This function returns the contents of 'this._values' array]
     * no parameters
     * @return {T[]} ['this._values' array is returned]
     */
    get values(): T[] {

        return this._values;

    }

}

// Creating person and food objects
let person: Person = { name: 'Sachin', age: 44 };
let food: Food = { title: 'Veggie Burger', isVeg: true };

// Creating an instance of Generics class with type Object
let generics = new Generics<Object> ( person, food );

// Getting the class array values
let items: Object[] = generics.values;

// displaying the result and array values
if ( items.length > 0 ) {

    console.log ( '\nThe objects have been successfully passed.\n' );
    console.log ( items );

} else {

    console.log ( '\nThe objects have not been successfully passed.\n' );

}

/*

    Note: We have to use the following command for successful compilation,

    Command: tsc --target es5 generics.ts

*/
