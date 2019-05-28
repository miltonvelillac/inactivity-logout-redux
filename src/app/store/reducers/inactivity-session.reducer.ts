import {
    SessionType,
    logOut,
    logIn,
    openAlertLogout,
    closeAlertLogout,
    resetInactivityTime,
    resetAlertInactivityTime
} from '../actions/inactivity-session.actions';


export interface SessionState {
    isLoggedIn: boolean;
    showAlert: boolean;
}

const initialState: SessionState = {
    isLoggedIn: true,
    showAlert: false
};


export function sessionReducer(state = initialState, action: SessionType): SessionState {
    switch (action.type) {
        case logOut: {
            return {
                ...state,
                isLoggedIn: false,
                showAlert: false
            };
        }

        case logIn: {
            return {
                ...state,
                isLoggedIn: true,
                showAlert: false
            };
        }

        case openAlertLogout: {
            return {
                ...state,
                isLoggedIn: true,
                showAlert: true
            };
        }

        case closeAlertLogout: {
            return {
                ...state,
                isLoggedIn: true,
                showAlert: false
            };
        }

        case resetAlertInactivityTime:
        case resetInactivityTime:
        default: {
            return state;
        }
    }
}
