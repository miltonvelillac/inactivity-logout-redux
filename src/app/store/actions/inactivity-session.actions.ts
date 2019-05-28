import { Action } from '@ngrx/store';

// ============================ Constants Action ==================================
export const openAlertLogout = '[Session] Open alert logout';
export const closeAlertLogout = '[Session] Close alert logout';

export const logIn = '[Application] Log In';
export const logOut = '[Application] Log out';
export const resetAlertInactivityTime = '[Application] Reset time for show modal info';
export const resetInactivityTime = '[Application] Reset inactivity time';

// ==================================== Actions ====================================
export class OpenAlertLogout implements Action { readonly type = openAlertLogout; }
export class CloseAlertLogout implements Action { readonly type = closeAlertLogout; }

export class LogIn implements Action { readonly type = logIn; }
export class LogOut implements Action { readonly type = logOut; }
export class ResetAlertInactivityTime implements Action { readonly type = resetAlertInactivityTime; }
export class ResetInactivityTime implements Action { readonly type = resetInactivityTime; }

// =================================== Actions Type ================================
export type SessionType = OpenAlertLogout |
                          CloseAlertLogout |
                          LogIn |
                          LogOut |
                          ResetAlertInactivityTime |
                          ResetInactivityTime;
