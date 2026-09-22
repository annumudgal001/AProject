import { Component, input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clay-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './clay-input.html',
  styleUrl: './clay-input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ClayInput),
      multi: true,
    },
  ],
})
export class ClayInput implements ControlValueAccessor {
  readonly label = input('');
  readonly type = input('text');
  readonly placeholder = input('');
  readonly id = input(`input-${Math.random().toString(36).slice(2, 9)}`);
  readonly error = input<string | null>(null);
  readonly required = input(false);
  readonly autocomplete = input<string | null>(null);

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
    const v = (event.target as HTMLInputElement).value;
    this.value = v;
    this.onChange(v);
  }
  onBlur(): void {
    this.onTouched();
  }
}