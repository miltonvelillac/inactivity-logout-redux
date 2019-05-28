import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { LogOut, OpenAlertLogout, resetInactivityTime, resetAlertInactivityTime } from '../actions/inactivity-session.actions';


@Injectable()
export class TimeOutEffects {

    constructor( private actions$: Actions ) {}

    alertTimeOut = 7000;
    appTimeOut = 10000;

    @Effect()
    alertTimeOut$ = this.actions$.pipe(
        ofType(resetAlertInactivityTime),
        switchMap( ( action: Action ) => of(action) ),
        debounceTime(this.alertTimeOut),
        map(() => new OpenAlertLogout())
    );

    @Effect()
    timeOut$ = this.actions$.pipe(
        ofType(resetInactivityTime),
        switchMap( ( action: Action ) => of(action) ),
        debounceTime(this.appTimeOut),
        map(() => new LogOut())
    );


    // @Effect()
    // extendApplicationTimeout$ = this.actions$.pipe(
    //     switchMap( ( action: Action ) => of(action) ),
    //     debounceTime(this.appTimeOut),
    //     map(() => new LogOut())
    // );

}
