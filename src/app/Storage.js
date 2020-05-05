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
            fetch("/task", {
                method: "POST",
                body: JSON.stringify(action.task),
                header: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then(res => console.log(res)).catch(err => console.log(err))
            action.event.preventDefault();
        }
            break;

        default:
            break;
    }
    return state;
}

export default createStore(reducerTask);