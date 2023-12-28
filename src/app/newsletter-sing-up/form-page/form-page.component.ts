import {JsonPipe} from '@angular/common';
import {Component, ElementRef} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ButtonComponent} from '../../core/ui/components/button/button.component';
import {InputComponent} from '../../core/ui/components/input/input.component';
import {FocusInvalidInputDirective} from '../../core/ui/directives/focus-invalid-input.directive';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    ReactiveFormsModule,
    JsonPipe,
    FocusInvalidInputDirective
  ],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.scss'
})
export class FormPageComponent {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private el: ElementRef
  ) {
  }

  handleSubmit() {

    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();

    if (!this.form.valid) {
      return;
    }

    const email = this.form.get('email')?.value as string;

    this.apiService.postNewsletterSingUp(email).subscribe((respond) => {
      this.router.navigate(['../success'], {
        relativeTo: this.activatedRoute,
        state: {
          email: respond.email
        }
      });
    });
  }
}
