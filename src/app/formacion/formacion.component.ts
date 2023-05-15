import { Component, OnInit } from '@angular/core';
import { Formacion } from '../model/formacion';
import { SFormacionService } from '../service/s-formacion.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit{

  forma: Formacion [] = [];


  constructor(private sForma: SFormacionService){
  }

  cargarFormacion(): void{
    this.sForma.lista().subscribe(data => {this.forma = data});

  }


  ngOnInit (): void {
    this.cargarFormacion();


  }

}
