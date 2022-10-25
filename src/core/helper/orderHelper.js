import { API } from "../../backend"

export const createOrder = (userId, token, orderData) => {
    return fetch(`${API}/order/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({order: orderData})
    })
    .then(resp => resp?.json())
    .catch(err => console.log(err))
}  

export const emptyCart = (next) => {
    if(typeof window !== undefined){
        localStorage.removeItem("cart")
        next()
    }
}