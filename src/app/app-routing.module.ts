import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'project-detail/:id', component: ProjectDetailComponent},
  { path: 'projects/:id', component: ProjectsComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
