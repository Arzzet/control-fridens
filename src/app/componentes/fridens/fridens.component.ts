import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Friden } from 'src/app/modelo/friden.model';
import { FridenService } from 'src/app/servicios/friden.service';

@Component({
  selector: 'app-fridens',
  templateUrl: './fridens.component.html',
  styleUrls: ['./fridens.component.css']
})
export class FridensComponent implements OnInit {

  fridens: Friden[];
  friden: Friden ={
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  constructor(private fridenService: FridenService, private flashMessages: FlashMessagesService) { }

  ngOnInit(): void {
    this.fridenService.getFridens().subscribe(fridens => {
      this.fridens = fridens;
    })
  }

  getSaldoTotal() {
    let saldoTotal: number = 0;
    if(this.fridens) {
      this.fridens.forEach(friden => {
      saldoTotal += friden.saldo;
      })
    }
    return saldoTotal;
  }
  
  agregar({value, valid}: {value: Friden, valid: boolean}) {
    if(!valid) {
      this.flashMessages.show('Rellena el formulario correctamente, pavo', {
      cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      // Agregamos nuevo friden

    }

  }
}
