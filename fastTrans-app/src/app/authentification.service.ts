import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Administrateur } from './administrateur';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private readonly mockedUser= new Administrateur('afiwakodjo010@gmail.com', 'Soulager6');
  isAuthentificated=false;

  constructor(private router: Router) { }

  authentificate(administrateur: Administrateur):boolean{
    if(this.checkCredentials(administrateur)){
      this.isAuthentificated=true;
      this.router.navigateByUrl('/admin');
      return true;
    }
    this.isAuthentificated=false;
    return false;

  }

  private checkCredentials(administrateur: Administrateur):boolean{
    return this.checkEmail(administrateur.getEmail())&&this.checkPassword(administrateur.getPassword());


  }

  private checkEmail(email:string):boolean{
    return email===this.mockedUser.getEmail();

  }

  private checkPassword(password:string):boolean{
    return password===this.mockedUser.getPassword();
    
  }

 /* public seConnecter(_AdministrateurInfo: Administrateur){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public estConnecte(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }*/

}
