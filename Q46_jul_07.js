/*46. Write  function ```max``` that can accept any number of arguments (assume all numbers) and returns the maximum of the numbers. 
    Make use of the rest operator to group the arguments into an array before finding and returning the maximum.
```
max( 25, 65, 35, 45 ); // 65
max( 25, 65, 35, 75, 45 ); // 75
*/
function max(...input)
{
    let Max=input[0];
   /* 
    // full style
    input.forEach(function(val,idx,arr){

        Max=val>Max?val:Max;

    });*/

    
    // if use Arrow function     
    input.forEach(val=>  Max=val>Max?val:Max  );
   
 
   return Max;
}

console.log(max( 25, 65, 35, 45 ));
console.log(max( 25, 65, 35, 75, 45 ));