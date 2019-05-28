import { SessionState } from './store/reducers/inactivity-session.reducer';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inactivity-redux-logout';

  constructor(private store: Store<AppState>) {
    this.listenAlertTimeOut();
  }

  listenAlertTimeOut() {
    this.store.select(state => state.sessionState).pipe(
      map((sessionState: SessionState) => {
        if (sessionState.showAlert) {
          console.log('Alert Time out....');
        }

        if (!sessionState.isLoggedIn) {
          console.log('Log out.....');
        }
      })
    ).subscribe();
  }
}
