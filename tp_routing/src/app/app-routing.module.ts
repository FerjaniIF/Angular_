import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';

import { CatsComponent } from './cats/cats.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';

import { DogsComponent } from './dogs/dogs.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';

const routes : Routes=[
  {path: 'cats', component: CatsComponent},
  {path: 'details/:id', component: CatDetailsComponent},
  {path: '', redirectTo:'/cats', pathMatch: 'full'},
  {path: 'dogs', component: DogsComponent},
  {path: 'details/:id', component: DogDetailsComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
