import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
axios.defaults.headers.post["Content-Type"] = "Application/json";
axios.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
})

axios.interceptors.response.use(config => {
    return config;
}, error => {
    return Promise.reject(error)
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
