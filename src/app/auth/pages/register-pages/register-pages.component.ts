import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { emailPattern, firstNameAndLastnamePattern } from 'src/app/shared/components/validators/validators';
import { ValidatorsService } from 'src/app/shared/service/validator.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
@Component({
  templateUrl: './register-pages.component.html',
  styles: [
  ]
})
export class RegisterPagesComponent {

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidatorService: EmailValidatorService
    ){}

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    // email: ['', [Validators.required, Validators.pattern(this.ValidatorsService.emailPattern)], [new EmailValidatorService()]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidatorService]],

    username: ['', [Validators.required, this.validatorsService.canBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  },{
    validators: [
      this.validatorsService.isFieldOneEquealFieldTwo('password', 'password2')
    ]
  })

  isValidfield(field: string){
    return this.validatorsService.isValidField(this.myForm, field )
  }

  onSubmit(){
    console.log('hola');

    this.myForm.markAllAsTouched()
  }

}
