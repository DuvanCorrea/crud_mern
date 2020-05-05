import React from 'react'
import { Provider } from 'react-redux'
import store from './Storage'

const app = () => {
    return (
        <Provider store={store}>
            <main>
                hola mundo cruel
            </main>
        </Provider>
    )
}
export default app
