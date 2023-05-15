import { Component, OnInit } from '@angular/core';
import { Formacion } from '../model/formacion';
import { SFormacionService } from '../service/s-formacion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nueva-formacion',
  templateUrl: './nueva-formacion.component.html',
  styleUrls: ['./nueva-formacion.component.css']
})
export class NuevaFormacionComponent implements OnInit{

  forma: Formacion;

  constructor(private sFormacion: SFormacionService, private activatedRouter: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sFormacion.detail(id).subscribe(data => {this.forma = data;})

  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sFormacion.update(id, this.forma).subscribe( data=> {alert("Formacion editada")})
  }

}
