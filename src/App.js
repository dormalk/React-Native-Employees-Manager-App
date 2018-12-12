import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import  ReduxThunk  from 'redux-thunk';
import Reducers from './reducers';
import firebase from '@firebase/app';
import '@firebase/auth';
import Router from './Router';

class App extends Component{
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyAHLiu3RKU4b6XlVwIqUmdvjABnTsaUJKU",
            authDomain: "manager-a979d.firebaseapp.com",
            databaseURL: "https://manager-a979d.firebaseio.com",
            projectId: "manager-a979d",
            storageBucket: "",
            messagingSenderId: "236076857667"
        };
        firebase.initializeApp(config);
    }

    render(){
        const store = createStore(Reducers,{},applyMiddleware(ReduxThunk));

        return(
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    };
};

export default App;
