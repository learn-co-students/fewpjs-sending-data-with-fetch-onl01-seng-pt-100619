let docBody = document.querySelector("body");
function submitData(userName, userEmail) {

let configurationObject = {
  method: "POST",
  headers: {
    "Content-Type":"application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name: userName,
    email: userEmail
  })
};
return fetch("http://localhost:3000/users", configurationObject)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    let idOfObject = document.createTextNode(`${object.id}`);
    docBody.appendChild(idOfObject);
  })
  .catch(function(error) {
    let errorMessage = document.createTextNode(`${error.message}`);
    docBody.appendChild(errorMessage);
  });
}