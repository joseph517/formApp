import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator{

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value
    const httpCallObservable = new Observable<ValidationErrors | null>((subcriber)=>{
      console.log({email});
      if(email == 'alvaro@google.com'){
        subcriber.next({emailTaken: true})
        subcriber.complete()
        return
      }
      subcriber.next(null)
      subcriber.complete()

    })
    return httpCallObservable

  }



  // validate(control: AbstractControl): Observable<ValidationErrors | null> {

  //   const email = control.value
  //   console.log(email);
  //   return of({
  //     emailTaken: true
  //   })
  // }

}
