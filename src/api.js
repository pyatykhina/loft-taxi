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
        .then(data => data.token)
}

export const serverCheckin = async(email, firstName, lastName, password) => {
    return fetch(`https://loft-taxi.glitch.me/register`, { 
        method: 'POST',
        body: JSON.stringify({
            email: email, 
            password: password, 
            name: firstName, 
            surname: lastName 
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data.token)
}

export const serverSetCard = async(cardNumber, expiryDate, cardName, cvc, token) => {
    return fetch(`https://loft-taxi.glitch.me/card`, { 
        method: 'POST',
        body: JSON.stringify({
            cardNumber: cardNumber, 
            expiryDate: expiryDate, 
            cardName: cardName, 
            cvc: cvc, 
            token: token
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data.success)
}

export const serverGetCard = async(token) => {
    return fetch(`https://loft-taxi.glitch.me/card?token=${token}`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data)
}

export const serverGetAddress = async() => {
    return fetch('https://loft-taxi.glitch.me/addressList')
        .then(res => res.json())
        .then(data => data)
}

export const serverGetRoute = async(address1, address2) => {
    return fetch(`https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`)
        .then(res => res.json())
        .then(data => data)
}
