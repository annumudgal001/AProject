import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ClayInput } from '../../shared/ui/clay-input/clay-input';
import { ClayTextarea } from '../../shared/ui/clay-textarea/clay-textarea';
import { ClayButton } from '../../shared/ui/clay-button/clay-button';
import { ClayCard } from '../../shared/ui/clay-card/clay-card';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ClayInput, ClayTextarea, ClayButton, ClayCard],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly portfolio = inject(PortfolioService);

  readonly profile = this.portfolio.profile;
  readonly submitted = signal(false);
  readonly submitting = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  get nameError(): string | null {
    const c = this.form.controls.name;
    if (c.touched && c.hasError('required')) return 'Name is required';
    if (c.touched && c.hasError('minlength')) return 'Name is too short';
    return null;
  }
  get emailError(): string | null {
    const c = this.form.controls.email;
    if (c.touched && c.hasError('required')) return 'Email is required';
    if (c.touched && c.hasError('email')) return 'Enter a valid email';
    return null;
  }
  get subjectError(): string | null {
    const c = this.form.controls.subject;
    if (c.touched && c.hasError('required')) return 'Subject is required';
    if (c.touched && c.hasError('minlength')) return 'Subject is too short';
    return null;
  }
  get messageError(): string | null {
    const c = this.form.controls.message;
    if (c.touched && c.hasError('required')) return 'Message is required';
    if (c.touched && c.hasError('minlength')) return 'Message is too short';
    return null;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting.set(true);
    // Phase 1: local simulation only – no HTTP
    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
      this.form.reset();
    }, 800);
  }

  resetForm(): void {
    this.submitted.set(false);
  }
}