import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlockListComponent} from './blocks/block-list/block-list.component';

const routes: Routes = [{ path: 'blocks', component: BlockListComponent },
{path:'',redirectTo:'blocks',pathMatch:'full'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
