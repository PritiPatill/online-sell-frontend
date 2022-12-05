import { API } from "../../backend";


export const getToken = (userId, token) => {
    return fetch(`${API}/payment/getToken/${userId}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    }).then(resp => {
        return resp.json();
    }).catch(err => console.log(err))
}

export const processPayment = (userId, token, payload) => {
    return fetch(`${API}/payment/braintree/${userId}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    }).then(resp => {
        return resp.json();
    }).catch(err => console.log(err))
}