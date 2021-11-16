import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuracion } from 'src/app/modelo/configuracion.model';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  pemitirRegistro = false;

  constructor(
    private router: Router,
    private configuracionService: ConfiguracionService
  ) { }
  

  ngOnInit(){
    this.configuracionService.getConfiguracion().subscribe(
      (configuracion: Configuracion) => {
      this.pemitirRegistro = configuracion.permitirRegistro;
    })
  }

  guardar(){
    let configuracion = {permitirRegistro: this.pemitirRegistro};
    this.configuracionService.modificarConfiguracion(configuracion);
    this.router.navigate(['/']);

  }

}
