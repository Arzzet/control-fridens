import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule, SETTINGS} from '@angular/fire/compat/firestore/';
// import { FirestoreSettingsToken } from '@angular/fire/compat/firestore/';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BoardComponent } from './componentes/board/board.component';
import { FridensComponent } from './componentes/fridens/fridens.component';
import { EditarFridenComponent } from './componentes/editar-friden/editar-friden.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FridenService } from './servicios/friden.service';
import { LoginService } from './servicios/login.service';
import { AuthGuard } from './guardians/auth.guard';
import { ConfiguracionService } from './servicios/configuracion.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    FridensComponent,
    EditarFridenComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'control-fridens'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [FridenService, 
    LoginService, 
    AuthGuard, 
    ConfiguracionService,
    { provide: SETTINGS, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
