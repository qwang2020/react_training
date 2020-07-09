/*
48. Use object spread to make a shallow copy of the following object.
* Again, use array and object spread (as required) to create a deep copy of the object.  
* Test out if making a change to name and front camera deftails on the iPhone11 object affects the shallow copy.   
* What about the deep copy? Is it affected?
```
```
*/
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
    }
}


// shallow copy so acutally iPhone11 ,it's a reference point to same data
/*console.log('-------------shallow copy !!! Do not run those 2 tests at same time ,the 1st will affect 2nd test -----------');
let shallowCopy ={ ...iPhone11};
shallowCopy.name = 'shallowCopy';
shallowCopy.specs.cameras.front = '18 MP 10x optical';
console.log(shallowCopy);
console.log(iPhone11); // memory changed, if not use {...iPhone11} , the name also modified
*/

console.log('-------------test deep copy-----------!!!comment out the 1st shallowCopy test before running 2nd test');
// deep copy
let Deepcopy = {...iPhone11,
    specs:{...iPhone11.specs,
        memory:{...iPhone11.specs.memory},
        cameras:{...iPhone11.specs.cameras},
        availableColors:[...iPhone11.specs.availableColors],
    },    
};

Deepcopy.name = 'Deep Copy';
Deepcopy.specs.cameras.front = '18 MP 8x optical';
console.log(Deepcopy);
console.log(iPhone11); // this time should all copy to xx3