import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './components/app';
import ErrorBoundries from './components/errorBoundries';
import BooksstoreService from './services/booksStoreService';
import {Provider as BooksstoreServiceProvider} from './components/serviceContext';

import store from './store';

const bookstoreService = new BooksstoreService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundries>
            <BooksstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BooksstoreServiceProvider>
        </ErrorBoundries>
    </Provider>
    , document.getElementById('root'))