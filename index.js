// Add your code here
function submitData(name, email) {
    const response = fetch("http://localhost:3000/users", { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({name: name, email: email})
    })
    .then(response => response.json())
    .then(function(data) {
        let body = document.querySelector('body').innerHTML = data.id
      })
      .catch(function(error) {
        document.querySelector('body').innerHTML = "Unauthorized Access"
      })
      return response
}

