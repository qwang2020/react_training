//45. Write a standalone function ```printPhoneDetails``` that prints a description of the phone with discounted price as in an earlier exercise. The function is passed the iPhone11 object but it destructures to create only the required variables when accepting the object as argument.
//    ```
//    printPhoneDetails( iPhone11 ); // Logs "Apple iPhone11 is available at a 10% discounted rate of $629.1"
//    ```
//   __NOTE__: You must use destructuring when accepting the argument.

const iPhone11 = {
    name: 'iPhone 11',
    manufacturer: 'Apple',
    price: 699,
    specs: {
        color: 'White',
        memory: {
            value: 128,
            unit: 'MB'
        },
        cameras: {
            front: '12 MP Wide',
            rear: '12 MP Ultra Wide'
        },
        availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
    },
    calculateDiscoutedPrice: function( percentage ) {
        return this.price * ( 100 - percentage ) / 100;
    }
}

function printPhoneDetails(Thephone)
{
    const { name, manufacturer } = Thephone;
    //  The method calculateDiscoutedPrice use this.price
    return `${manufacturer} ${name} is available at a 10% discounted rate of ${Thephone.calculateDiscoutedPrice(10)}`;
}

console.log(printPhoneDetails(iPhone11));