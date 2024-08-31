import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AuthProvider from './providers/AuthProvider.tsx';
import { store } from './redux/store.ts';

import App from './App.tsx';

import './assets/styles/main.scss';

const root = createRoot(document.getElementById('root')!);

root.render(
    <StrictMode>
        <AuthProvider>
            <Router>
                <Provider store={store}>
                    <App />
                </Provider>
            </Router>
        </AuthProvider>
    </StrictMode>
);
