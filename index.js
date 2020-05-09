// Add your code here
const pageBody = document.querySelector("body");
function submitData(userName, userEmail){

    let userObject = {
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    }      

     return fetch("http://localhost:3000/users", userObject)
     .then(function(response){
         return response.json()
        })
     .then(function(object) {  
         let textNode = document.createTextNode(`${object.id}`)          
            pageBody.appendChild(textNode)
            
        })
        .catch(function(error){
            let textNode = document.createTextNode(error.message)
            pageBody.appendChild(textNode)
        })
    
}


