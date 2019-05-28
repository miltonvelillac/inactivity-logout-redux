import { Directive, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { ResetInactivityTime, ResetAlertInactivityTime } from '../store/actions/inactivity-session.actions';

@Directive({
  selector: '[appListenHtmlDom]'
})
export class ListenHtmlDomDirective {

  constructor(private store: Store<AppState>) { }

  @HostListener('touchmove')
  @HostListener('touchend')
  @HostListener('mouseover')
  @HostListener('keypress')
  @HostListener('click')
  onMouseOver() {
    this.store.dispatch(new ResetInactivityTime());
    this.store.dispatch(new ResetAlertInactivityTime());
  }

}
