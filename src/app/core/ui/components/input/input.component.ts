import {CommonModule} from '@angular/common';
import {Component, ElementRef, forwardRef, HostListener, Input, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {InputFocus} from '../../models/input-focus';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ]
})
export class InputComponent implements ControlValueAccessor, InputFocus {

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  @Input({required: true}) label = '';
  @Input({required: true}) placeholder = '';
  @Input() error: string = '';

  isDisabled = false;
  value = '';

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(value);
  }

  public registerOnChange(fn: (value: string | null) => string): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public onChange = (value: string | null): string | null => value;

  public onTouched = (): void => {};

  public setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  handleOnInput($event: Event) {
    this.writeValue(($event.target as HTMLInputElement).value);
  }

  focus() {
    this.input.nativeElement.focus();
  }
}
