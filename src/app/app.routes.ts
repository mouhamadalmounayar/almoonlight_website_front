import { Routes } from '@angular/router';
import {HomeComponent} from "../components/home/home.component";
import {ProjectsComponent} from "../components/projects/projects.component";
import {BlogComponent} from "../components/blog/blog.component";
import {ContactComponent} from "../components/contact/contact.component";

export const routes: Routes = [
  {path : '' , component : HomeComponent} ,
  {path : 'Home' , component : HomeComponent},
  {path : 'Projects' , component : ProjectsComponent},
  {path : 'Blog' , component : BlogComponent},
  {path : 'Contact' , component: ContactComponent}
];
