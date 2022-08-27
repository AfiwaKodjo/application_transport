import { Component, OnInit } from '@angular/core';
import { PtArret } from '../pt-arret';
import { PtArretService } from '../pt-arret.service';

@Component({
  selector: 'app-pt-arret',
  templateUrl: './pt-arret.component.html',
  styleUrls: ['./pt-arret.component.css']
})
export class PtArretComponent implements OnInit {

  public ptArrets: PtArret[] = [];

  constructor(private ptArretService: PtArretService) { }

  ngOnInit(): void {
    this.getPtArrets();

  }
  private getPtArrets() {
    this.ptArretService.getPtArrets().subscribe(data => {
      this.ptArrets = data;
    });
  }

  public searchPtArrets(key: string): void {
    console.log(key);
    const results: PtArret[] = [];
    for (const ptArret of this.ptArrets) {
      if (ptArret.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        ptArret.quartier.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(ptArret);

      }

    }
    this.ptArrets = results;
    if (results.length === 0 || !key) {
      this.getPtArrets();
    }

  }

}
