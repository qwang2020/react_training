// Es6-execrises: Q44
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
// use destructuring from a const object ! must use {} to fit the level of the original 'iPhone11' object level structure
const { name, manufacturer:brand ,specs:{memory:{value:ram} ,cameras:{rear:rearCamera},availableColors:[,secondColor]}} = iPhone11;

// below line logs - iPhone 11   Apple   128   12 MP Ultra Wide   Green
console.log( name, brand, ram, rearCamera, secondColor );

