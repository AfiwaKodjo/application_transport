import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService} from '../authentification.service';
import { Quartier } from '../quartier';
import { QuartierService } from '../quartier.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  quartiers: Quartier[] = [];

  constructor(private authentificationService: AuthentificationService, private router: Router, private quartierService: QuartierService) { }

  ngOnInit(): void {
    this.getQuartiers();
  }

  private getQuartiers(){
    this.quartierService.getQuartiersList().subscribe(data => {
      this.quartiers = data;
    });
  
  }
  
}
