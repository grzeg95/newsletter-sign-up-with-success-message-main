import {ContentChildren, Directive, HostListener, QueryList} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  standalone: true,
  selector: '[focusInvalidInput]',
})
export class FocusInvalidInputDirective {

  @ContentChildren(NgControl) formControls!: QueryList<NgControl>;

  @HostListener('submit')
  handleSubmit(formControls?: QueryList<NgControl>) {

    const controls = formControls ? formControls.toArray() : this.formControls.toArray();

    for (let field of controls) {
      if (field.invalid && typeof (field.valueAccessor as any)?.['focus'] === 'function') {
        (field.valueAccessor as any)?.['focus']();
        break;
      }
    }
  }
}
