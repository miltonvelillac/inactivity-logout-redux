import { SessionState, sessionReducer } from './store/reducers/inactivity-session.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    sessionState: SessionState;
}

export const appReducers: ActionReducerMap<AppState> = {
    sessionState: sessionReducer
};
