import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Material } from './material';

import { AppComponent } from './app.component';
import { BotonComponent } from '../boton/boton.component';
import { MenuComponent } from '../menu/menu.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';

@NgModule({
   declarations: [
      AppComponent,
      BotonComponent,
      MenuComponent,
      FormularioComponent,
      FooterComponent,
      CardComponent
   ],
   imports: [
      BrowserModule,
      Material
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
