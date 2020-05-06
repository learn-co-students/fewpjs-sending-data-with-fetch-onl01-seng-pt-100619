// Add your code here
function submitData(name, email) {
    let formData = {
         name,
         email
      };
       
      let configObj = {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };

      
       
      return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
            objectManipulation(object);
        })
        .catch(function(error) {
          alertDisplay(error);
        });

        function alertDisplay(error) {
            const bodyContainer = document.querySelector('body');
            bodyContainer.innerHTML = error.message
        }

        function objectManipulation(object) {
            const bodyContainer = document.querySelector('body');
            bodyContainer.innerHTML = object.id
          }
}

