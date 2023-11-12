import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [AppComponent, FooterComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, ProfileModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
