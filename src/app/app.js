import React from 'react'
import { Provider } from 'react-redux'
import store from './Storage'
import Navbar from './components/navbar/Navbar.js'
import Body from './components/body/Body'

const app = () => {
    return (
        <Provider store={store}>
            <main>
                <Navbar />
                <Body />
            </main>
        </Provider>
    )
}
export default app
