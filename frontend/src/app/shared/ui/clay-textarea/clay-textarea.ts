import { Component, input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-clay-textarea',
  standalone: true,
  templateUrl: './clay-textarea.html',
  styleUrl: './clay-textarea.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ClayTextarea),
      multi: true,
    },
  ],
})
export class ClayTextarea implements ControlValueAccessor {
  readonly label = input('');
  readonly placeholder = input('');
  readonly id = input(`ta-${Math.random().toString(36).slice(2, 9)}`);
  readonly error = input<string | null>(null);
  readonly required = input(false);
  readonly rows = input(5);

  value = '';
  disabled = false;

  private onChange: (v: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value ?? '';
  }
  registerOnChange(fn: (v: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const v = (event.target as HTMLTextAreaElement).value;
    this.value = v;
    this.onChange(v);
  }
  onBlur(): void {
    this.onTouched();
  }
}