import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { Administrateur } from '../administrateur';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  email!: string;
  password!: string;
  isFormInvalid=false;
  areCredentialsInvalid =false;

  constructor( private authentificationService: AuthentificationService,
               private router: Router, private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]

    });
  }
  get formControls(){return this.loginForm.controls;}
  seConnecter(loginForm: FormGroup){
    console.log(this.loginForm.value);
  this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }

    if (!loginForm.valid){
      this.isFormInvalid=true;
      this.areCredentialsInvalid=false;
      return;
    }
    this.checkCredentials(loginForm);
  
  }

    private checkCredentials(loginForm: FormGroup){
      const administrateur=new Administrateur(loginForm.value.email, loginForm.value.password);
       if(!this.authentificationService.authentificate(administrateur)
       ){
         this.isFormInvalid=false;
         this.areCredentialsInvalid=true;
       }

    
        
  }
    
  }





