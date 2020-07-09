/*47. Use the spread operator, along with the max function, to find the maximum of values in this array.
```
const numbers = [ 25, 65, 35, 75, 45 ];
*/

const numbers = [ 25, 65, 35, 75, 45 ];
const newarray = [ 25, 65, 35, 75, 45,77,89,908 ];
function max(...input)
{
    let Max=input[0];  
    // if use Arrow function     
    input.forEach(val=>  Max=val>Max?val:Max  );   
 
   return Max;
}

console.log(max(...numbers));
console.log(max(...newarray));