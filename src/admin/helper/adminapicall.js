import {API} from '../../backend'

// category calls

// create category
export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

// get all categories
export const getAllCategories = () => {
    return fetch(`${API}/categories`, {
        method: 'GET',
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

// get category by id
export const getCategoryById = (categoryId) => {
    return fetch(`${API}/category/${categoryId}`, {
        method: 'GET',
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

// update category
export const updateCategory = (userId, categoryId, token, category) => {
    return fetch(`${API}/category/${categoryId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

// products calls

// create product
export const createProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

// get all products
export const getAllProducts = () => {
    return fetch(`${API}/products`, {
        method: 'GET',
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

// get a product
export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`, {
        method: 'GET',
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

// update a product
export const updateProduct = (userId, productId, token, product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

// delete product
export const deleteProduct = (productId, userId, token) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}