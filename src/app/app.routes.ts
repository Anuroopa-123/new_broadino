import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
// import { LabscontentComponent } from './labscontent/labscontent.component';
import { MenulabsComponent } from './menulabs/menulabs.component';
import { ContactComponent } from './contact/contact.component';
import { MediapageComponent } from './mediapage/mediapage.component';
import { STEMBrochureComponent } from './stem-brochure/stem-brochure.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'labs/:labKey', component: MenulabsComponent },
  { path: 'contact_us', component: ContactComponent },
  { path: 'labs', component: MenulabsComponent },
  { path: 'stem', component: STEMBrochureComponent},
  { path: 'media', component: MediapageComponent },
];
