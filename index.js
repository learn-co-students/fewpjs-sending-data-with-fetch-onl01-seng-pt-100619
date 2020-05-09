function submitData(name, email){

    let formData = {
        name: name,
        email: email
    }

    let configObj = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
    
    const body = document.querySelector("body")

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json()
        }) 
        .then(function(object) {
            const newObjId = document.createTextNode(`${object.id}`)
            body.appendChild(newObjId)
        })
        .catch(function(error) {
            const errorMessage = document.createTextNode(`${error.message}`)
            body.appendChild(errorMessage)
        })
}
