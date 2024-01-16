import { Component, NgModuleFactory, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switch-page.component.html',
  styles: [
  ]
})
export class SwitchPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  })

  public person = {
    gender: 'F',
    wantNotifications: false
  }

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.myForm.reset(this.person)
  }

  isValidTermsAndConditions(): boolean | null{
    return this.myForm.controls['termsAndConditions'].errors && this.myForm.controls['termsAndConditions'].touched
  }

  onSave(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return
    }

    const {termsAndConditions, ... newPerson} = this.myForm.value

    this.person = newPerson
  }

}
