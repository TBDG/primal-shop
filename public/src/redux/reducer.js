const initialState = {
    count: 0
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

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

//reducer
export default function (state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {...state, count:action.payload}
        case DECREMENT:
            return {...state, count:action.payload}
        default:
            return state
    }
}
