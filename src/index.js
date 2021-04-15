import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import store from "./redux/store";
import store from "./redux/redux-store";

const rerenderAllTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderAllTree();
console.log(store)
store.subscribe(rerenderAllTree);

reportWebVitals();

