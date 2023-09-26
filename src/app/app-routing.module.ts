import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { RatingComponent } from './rating/rating.component';


const routes: Routes = [
  { path: '', component: RatingComponent }, 
  { path: 'thank-you', component: ThankyouComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }








