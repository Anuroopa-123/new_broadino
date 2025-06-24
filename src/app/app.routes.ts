import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LabscontentComponent } from './labscontent/labscontent.component';
import { MenulabsComponent } from './menulabs/menulabs.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'labs/:key', component: MenulabsComponent },
  { path: 'contact_us', component: ContactComponent },
];
