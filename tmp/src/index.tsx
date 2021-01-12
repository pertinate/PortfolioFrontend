import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <FirebaseAuthProvider
            firebase={firebase}
            apiKey={process.env.REACT_APP_API_KEY || ''}
            authDomain={process.env.REACT_APP_AUTH_DOMAIN || ''}
            projectId={process.env.REACT_APP_PROJECT_ID || ''}
            storageBucket={process.env.REACT_APP_STORAGE_BUCKET || ''}
            messagingSenderId={process.env.REACT_APP_MESSAGING_SENDER_ID || ''}
            appId={process.env.REACT_APP_APP_ID || ''}
            measurementId={process.env.REACT_APP_MEASUREMENT_ID || ''}
            databaseURL={''}
        >
            <App />
        </FirebaseAuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
