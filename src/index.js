import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ProductProvider } from './context';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

// ReactDOM.render(
//   <ProductProvider>
//     <React.StrictMode>
//       <Router>
//         <App />
//       </Router>
//     </React.StrictMode>
//   </ProductProvider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <ProductProvider>
    <React.StrictMode>
      <Router>
        <Route component={App} />
      </Router>
    </React.StrictMode>
  </ProductProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
