const initialState = {
    count: 0,
    categories: [],
    products: []
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_CATEGORIES = 'ADD_CATEGORIES';
const ADD_PRODUCTS = 'ADD_PRODUCTS';

//actions
export const increment = (count) => {
    return {
        type: INCREMENT,
        payload: count + 1
    }
}

export const decrement = (count) => {
    return {
        type: DECREMENT,
        payload: count - 1
    }
}

export const addCategories = (categories) => {
    return {
        type: ADD_CATEGORIES,
        payload: categories,
    }
}

export const addProducts = (products) => {
    return {
        type: ADD_PRODUCTS,
        payload: products,
    }
}

//reducer
export default function (state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: action.payload}
        case DECREMENT:
            return {...state, count: action.payload}
        case ADD_CATEGORIES:
            return {...state, categories: action.payload}
        case ADD_PRODUCTS:
            return {...state, products: action.payload}
        default:
            return state
    }
}
