import React from 'react'
import ReactDOM from 'react-dom'
import './Styles.css'
import App from "./components/App";
import {Provider} from "react-redux";
import store from './components/redux/store'

import {restaurants} from "./fixtures";



ReactDOM.render(
    <Provider store = {store}>
    <App restaurants = {restaurants} />
    </Provider>,
    document.getElementById('root'))