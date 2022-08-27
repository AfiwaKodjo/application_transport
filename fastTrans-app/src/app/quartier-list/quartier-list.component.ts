import { Component, OnInit } from '@angular/core';
import { Quartier } from '../quartier';
import { QuartierService } from '../quartier.service';


@Component({
  selector: 'app-quartier-list',
  templateUrl: './quartier-list.component.html',
  styleUrls: ['./quartier-list.component.css']
})
export class QuartierListComponent implements OnInit {

  quartiers: Quartier[] = [];
  nom!: string;

  constructor(private quartierService: QuartierService) { }

  ngOnInit(): void {
    this.getQuartiers();

  }
  private getQuartiers(){
    this.quartierService.getQuartiersList().subscribe(data => {
      this.quartiers = data;
    });
  
  }
  public searchQuartiers(key: string): void{
    console.log(key);
    const results: Quartier[]=[];
    for (const quartier of this.quartiers){
      if (quartier.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        results.push(quartier);

      }

    }
    this.quartiers = results;
    if (results.length === 0 || !key){
    this.getQuartiers();
    }
  
  }


}

