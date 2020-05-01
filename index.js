// Add your code here
// add configuration object values to make send data through a json file

configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
      }
  };

fetch(destinationURL, configurationObject);
