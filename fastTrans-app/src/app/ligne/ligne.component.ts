import { Component, OnInit } from '@angular/core';
import { Ligne } from '../ligne';
import { LigneService } from '../ligne.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-ligne',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.css']
})
export class LigneComponent implements OnInit {
  form: any = {};

  lignes: Ligne[] = [];
  //ptArrets: PtArret[] = [];

  constructor(private ligneService: LigneService, private router: Router) { }

  ngOnInit(): void {
    this.getLignes();
  }
  private getLignes() {
    this.ligneService.getLignes().subscribe(data => {
      this.lignes = data;
    });
  }

  public searchPtArrets(key: string): void {
    console.log(key);
    const results: Ligne[] = [];
    for (const ligne of this.lignes) {
      if (ligne.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        ligne.depart.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        ligne.terminus.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(ligne);

      }

    }
    this.lignes = results;
    if (results.length === 0 || !key) {
      this.getLignes();
    }

  }

 ligneDetails(id: number){
    this.router.navigate(['ligne-details', id]);
  }
}