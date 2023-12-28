import {Routes} from '@angular/router';
import {FormPageComponent} from './newsletter-sing-up/form-page/form-page.component';
import {NewsletterSingUpComponent} from './newsletter-sing-up/newsletter-sing-up.component';
import {SuccessComponent} from './newsletter-sing-up/success/success.component';

export const routes: Routes = [
  {
    path: 'newsletter-sing-up',
    redirectTo: 'newsletter-sing-up/form-page'
  },
  {
    path: 'newsletter-sing-up',
    component: NewsletterSingUpComponent,
    children: [
      {
        path: 'form-page',
        component: FormPageComponent
      },
      {
        path: 'success',
        component: SuccessComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'newsletter-sing-up/form-page'
  }
];
