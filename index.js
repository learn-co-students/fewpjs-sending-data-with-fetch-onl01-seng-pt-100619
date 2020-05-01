// Add your code here
// add configuration object values to make send data through a json file
// add headers required by servers so the requests are not rejected
configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"

      }
  };

fetch(destinationURL, configurationObject);
