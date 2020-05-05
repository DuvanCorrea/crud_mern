import { createStore } from 'redux'

const initialState = [
    {
        title: "title",
        description: "description"
    }
]

const reducerTask = (state = initialState, action) => {

    console.log(action)

    return state;
}

export default createStore(reducerTask);