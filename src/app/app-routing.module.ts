import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentPageComponent } from './content-page/content-page.component';
import { DataCollectionPageComponent } from './data-collection-page/data-collection-page.component';
import { GatedTestComponent } from './gated-test/gated-test.component';
import { PollTemplateComponent } from './poll-template/poll-template.component';
const routes: Routes = [
  {path: 'form', component: DataCollectionPageComponent},
  {path: '', redirectTo: '/form', pathMatch: 'full'},
  {path: 'content', component: ContentPageComponent},
  {path: 'poll', component: PollTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
