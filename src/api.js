export const serverLogin = async(email, password) => {
    return fetch(`https://loft-taxi.glitch.me/auth`, { 
        method: 'POST',
        body: JSON.stringify({
            email: email, 
            password: password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data.success)
}

export const serverCheckin = async(email, firstName, lastName, password) => {
    return fetch(`https://loft-taxi.glitch.me/register`, { 
        method: 'POST',
        body: JSON.stringify({
            email: email, 
            password: password, 
            name: firstName, 
            surname: lastName, 
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data.success)
}
