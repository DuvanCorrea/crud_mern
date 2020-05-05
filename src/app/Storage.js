import { createStore } from 'redux'

const initialState = [
    {
        title: "title",
        description: "description"
    }
]

const reducerTask = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK": {
            action.event.preventDefault();
        }
            break;

        default:
            break;
    }
    return state;
}

export default createStore(reducerTask);