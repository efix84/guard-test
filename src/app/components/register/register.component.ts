import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CallapiService, User } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup

  constructor(private capi : CallapiService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      vorname: new FormControl(''),
      nachname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  onSubmit(){
    console.log(this.registerForm.value)
    this.capi.insertUser(this.registerForm.value).subscribe()
  }

}
