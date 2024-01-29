import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { emailPattern, firstNameAndLastnamePattern } from 'src/app/shared/components/validators/validators';
import { ValidatorsService } from 'src/app/shared/service/validator.service';
import { EmailValidatorService } from 'src/app/shared/service/validators/email-validator.service';

@Component({
  templateUrl: './register-pages.component.html',
  styles: [
  ]
})
export class RegisterPagesComponent {

  constructor(
    private fb: FormBuilder,
    private ValidatorsService: ValidatorsService
    ){}

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.ValidatorsService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.ValidatorsService.emailPattern)], [new EmailValidatorService()]],
    username: ['', [Validators.required, this.ValidatorsService.canBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  })

  isValidfield(field: string){
    return this.ValidatorsService.isValidField(this.myForm, field )
  }

  onSubmit(){
    console.log('hola');

    this.myForm.markAllAsTouched()
  }

}
