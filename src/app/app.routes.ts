import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'aboutus', component: AboutusComponent },
];
