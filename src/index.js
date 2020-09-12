import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ErrorBoundry } from '@components';
import App from './components/App/App';

import store from './redux/store';

import '@/styles/index.scss';

ReactDOM.render( 
    <Provider store={store}>
        <Router>
            <ErrorBoundry>
                <App/>
            </ErrorBoundry>
        </Router>
    </Provider>, 
    document.querySelector('#root')
);

