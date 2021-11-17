import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ConfiguracionService } from "../servicios/configuracion.service";

@Injectable()
export class ConfigurationGuard implements CanActivate {
  constructor(
      private router: Router,
      private afAuth: AngularFireAuth,
      private configuracionService: ConfiguracionService) { }

  canActivate(): Observable<boolean> {
      return this.configuracionService.getConfiguracion().pipe
      (map(configuracion => {
            if (configuracion.permitirRegistro) {
                return true;
            } else {
                this.router.navigate(['/login']);
                return false;
            }
        }
      ));
    }

}