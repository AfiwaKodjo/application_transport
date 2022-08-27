import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ligne } from '../ligne';
import { LigneService } from '../ligne.service';

@Component({
  selector: 'app-ligne-details',
  templateUrl: './ligne-details.component.html',
  styleUrls: ['./ligne-details.component.css']
})
export class LigneDetailsComponent implements OnInit {
  form: any = {};
   id!: number;
   ligne: Ligne = new Ligne;
  constructor(private route: ActivatedRoute, private ligneService: LigneService) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];

    this.ligne= new Ligne();
    this.ligneService.getLigneById(this.id).subscribe( data =>{
      this.ligne=data;
    })



  }

}
