import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './componentes/board/board.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { EditarFridenComponent } from './componentes/editar-friden/editar-friden.component';
import { LoginComponent } from './componentes/login/login.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AuthGuard } from './guardians/auth.guard';

const routes: Routes = [
  {path: '', component: BoardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component: RegistroComponent},
  {path: 'configuracion', component: ConfiguracionComponent, canActivate: [AuthGuard]},
  {path: 'friden/editar/:id', component: EditarFridenComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
