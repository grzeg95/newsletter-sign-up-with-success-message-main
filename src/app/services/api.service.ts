import {Injectable} from '@angular/core';
import {map, of} from 'rxjs';

@Injectable()
export class ApiService {

  constructor() {}

  postNewsletterSingUp(email: string) {
    return of(email.trim()).pipe(map(() => {
      return {email};
    }))
  }
}
