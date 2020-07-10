/**
 * 42. Given the following APIs
* Retrieve users with a particular username (in the example below, username is Bret)
```
https://jsonplaceholder.typicode.com/users?username=Bret
```
* Retrieve posts by a user with given id (in the example below, user id is 1)
```
https://jsonplaceholder.typicode.com/users/1/posts'
```
* Retrieve comments for post with given id (in the example below, post id is 1)
```
https://jsonplaceholder.typicode.com/comments?postId=1
```
Write a function that accepts the username and returns a promise that resolves with the email ids of people who have commented on the first post of the first user matching the given username.
```
function getCommentersEmailIds( username ) {
}
```
For example, if username = Bret, then first user matching username Bret has id = 1 (user whose name is "Leanne Graham" and username is "Bret"). The first post by this user has id = 1. The list of people who commented on this post are 
[ "Eliseo@gardner.biz", "Jayne_Kuhic@sydney.com", "Nikita@garfield.biz", "Lew@alysha.tv", "Hayden@althea.biz" ] test your function out, for example by passing username as 'Bret' */


function getCommentersEmailIds(username) {

    const axios = require('axios');
    // the axios get will return a promise so we can use it as a normal promise
    axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`)
        .then(response => {           
            return axios.get(`https://jsonplaceholder.typicode.com/users/${response.data[0].id}/posts`);
        })
        .then(response => {            
            return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${response.data[0].id}`);
        })
        .then(response => {
            //console.log(response.data); 
            response.data.forEach(element => {
                console.log(element.email); 
            }); 

        })
        .catch(error => {
            console.log(error.message);  
        })
}
getCommentersEmailIds('Bret');