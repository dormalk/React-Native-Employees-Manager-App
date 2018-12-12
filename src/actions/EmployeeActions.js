import { 
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FATCH_SUCCESS,
    EMPLOYEES_SAVE_SUCCESS,
    EMPLOYEES_DELETE_SUCCESS
} from './types';
import { Actions } from 'react-native-router-flux';
import firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/auth';


export const employeeUpdate = ({prop,value}) => {
    return{
        type:EMPLOYEE_UPDATE,
        payload: {prop,value}
    };
};

export const employeeCreate = ({name,phone,shift}) => {
    const {currentUser} = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
        .push({name,phone,shift})
        .then(() => {
            dispatch({type:EMPLOYEE_CREATE})
            Actions.employeeList({type:'reset'});
        });
    }
}

export const employeesFatch = () => {
    const {currentUser} = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
        .on('value',snapshot => {
            dispatch({type:EMPLOYEES_FATCH_SUCCESS,payload:snapshot.val()})
        });
    }
}

export const employeeSave = ({name,phone,shift,uid}) => {
    const {currentUser} = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
        .set({name,phone,shift})
        .then(() =>{
            dispatch({type:EMPLOYEES_SAVE_SUCCESS});
            Actions.employeeList({type: 'reset'});
        })
    }
}

export const employeeDelete = ({uid}) => {
    const {currentUser} = firebase.auth();
    return(dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                dispatch({type:EMPLOYEES_DELETE_SUCCESS});
                Actions.employeeList({type: 'reset'});
            })
    };
};