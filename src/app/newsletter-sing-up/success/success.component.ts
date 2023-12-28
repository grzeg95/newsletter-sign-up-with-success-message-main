import {Component, signal} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ButtonComponent} from '../../core/ui/components/button/button.component';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [
    ButtonComponent,
  ],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {

  email = signal('');

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {

    const emailFromState = this.router.getCurrentNavigation()?.extras.state?.['email'];

    if (emailFromState) {
      this.email.set(emailFromState);
      this.location.replaceState(this.router.url, undefined, null);
    } else {
      this.goBack();
    }
  }

  handleClick() {
    this.goBack();
  }

  goBack() {
    this.router.navigate(['../form-page'], {
      relativeTo: this.activatedRoute
    });
  }
}
