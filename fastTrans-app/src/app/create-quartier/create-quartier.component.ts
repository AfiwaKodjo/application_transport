import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quartier } from '../quartier';
import { QuartierService } from '../quartier.service';


@Component({
  selector: 'app-create-quartier',
  templateUrl: './create-quartier.component.html',
  styleUrls: ['./create-quartier.component.css']
})
export class CreateQuartierComponent implements OnInit {
  quartier: Quartier = new Quartier();

  constructor(private quartierService: QuartierService, private router: Router) { }

  ngOnInit(): void {
  }

  saveQuartier(){
    
    this.quartierService.createQuartier(this.quartier).subscribe({
      next: (data)=> console.log(data),
      error:(error)=> console.error(error),
      complete: ()=> console.info('complete')

    });
    this.goToQuartierList();
  }

  goToQuartierList(){
    this.router.navigateByUrl('/admin');
    this.saveQuartier();

  }
 
  onSubmit(){
    console.log(this.quartier);
  }
}
