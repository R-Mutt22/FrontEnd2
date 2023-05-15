import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  title: String = 'portfolio-matias';
  logged: boolean = false;
  abrirLog: boolean;

  openLogin(){
    this.abrirLog = true;
  }

  cerrarModal(){
    this.abrirLog = false;
  }

  logOk(){
    this.logged = true;
    this.abrirLog = false;

  }








  ngOnInit() {
    
  }
}


