import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Br  } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './reudex/Store.js'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Br>
        <Provider store={store} >
            <App />
        </Provider>
        </Br>
  </React.StrictMode>
)
