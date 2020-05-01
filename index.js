// Add your code here
// add configuration object values to make send data through a json file
// add headers required by servers so the requests are not rejected

let formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };
   
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    // add content-type and accept headers set to json and make the json a string to make the request
    body: JSON.stringify(formData)
  };
   
  fetch("http://localhost:3000/dogs", configObj);
  // add fetch set to post to send the data to our server of choosing and it behaves like a form posting to the database