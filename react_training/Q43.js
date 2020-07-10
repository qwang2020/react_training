//43. Rewrite the exercise in the previous function using async-await.
const axios = require('axios');
async function getCommentersEmailIds(username) {

    // the axios get will return a promise so we can use it as a normal promise   

    //console.log('before await axios call');
    try {

        let response = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`);
       // console.log('return from get user call');
        let response2 = await axios.get(`https://jsonplaceholder.typicode.com/users/${response.data[0].id}/posts`);
       // console.log('return from get postid call');        
        resopnse3 = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${response2.data[0].id}`);
        //console.log('return from get comments by postId call'); 
        resopnse3.data.forEach(element => {
            console.log(element.email);
        });
    }
    catch (error) {
        console.log(error.message);
    }
}
getCommentersEmailIds('Bret');
