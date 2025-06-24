import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'contact_us', component: ContactComponent },
];
