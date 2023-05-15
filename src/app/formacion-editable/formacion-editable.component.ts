import { Component, OnInit } from '@angular/core';
import { Formacion } from '../model/formacion';
import { SFormacionService } from '../service/s-formacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formacion-editable',
  templateUrl: './formacion-editable.component.html',
  styleUrls: ['./formacion-editable.component.css']
})
export class FormacionEditableComponent implements OnInit{

  nombreF: string;
  descripcionF: string;
  forma: Formacion [] = [];

  constructor(private sFormacion: SFormacionService, private router: Router){}

  ngOnInit(): void {
    this.sFormacion.lista().subscribe(data => {this.forma = data});
  }

  onCreate(): void{
    const formacion = new Formacion(this.nombreF, this.descripcionF);
    this.sFormacion.save(formacion).subscribe (data=>{alert("Formacion añadida")})
  
  }


  navigateToEdit(id: number): void {
    this.router.navigate(['/editforma', id]);
  }

  borrar(id?: number){
    if (id != undefined){
      this.sFormacion.detele(id).subscribe(data => {alert("Formacion borrada")})
    }
}
}
