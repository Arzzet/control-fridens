import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Friden } from 'src/app/modelo/friden.model';
import { FridenService } from 'src/app/servicios/friden.service';

@Component({
  selector: 'app-editar-friden',
  templateUrl: './editar-friden.component.html',
  styleUrls: ['./editar-friden.component.css']
})
export class EditarFridenComponent implements OnInit {

  friden: Friden ={
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  id:string;

  constructor(private fridenService: FridenService, 
    private flashMessages: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fridenService.getFriden(this.id).subscribe(friden => {
      this.friden = friden;
    });
  }

  guardar({value, valid}: {value: Friden, valid: boolean}){
    if(!valid){
      this.flashMessages.show('Por favor, llena el formulario correctamente. Pavo', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }else{
      value.id = this.id;
      this.fridenService.modificarFriden(value);
      this.router.navigate(['/']);
    }
  }

  eliminar(){
    if(confirm('¿Estás seguro de eliminar este friden?')){
      this.fridenService.eliminarFriden(this.friden);
      this.router.navigate(['/']);
    }
  }



}
