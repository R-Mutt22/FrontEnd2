import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{

@Output() loginModal = new EventEmitter<boolean>();

@Output() closeModal = new EventEmitter<boolean>();

username?: string;
password?: string;
logged: boolean = true;

userLogin(){
  if(this.username == "admin" && this.password == "matias87"){
     this.loginModal.emit();
    } else {
      this.logged = false;
    }
    
}
cerrarModal(){
  this.closeModal.emit();
}

ngOnInit() {
    
}

constructor(){
  
}
}
