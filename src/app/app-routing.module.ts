import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router' //(tipo TS)
import { FarmsContainerComponent } from './pages/farms-container/farms-container.component'

const routes: Routes = [
    { path: 'farms', component: FarmsContainerComponent}
]

@NgModule({
 imports: [
     RouterModule.forRoot(routes)
 ],//Componenti e Module sono blackbox -> nulla esce se non esplicitato
 exports: [
  RouterModule
 ]
}) //NGMODULES relativi ad Angular, istruiscono ESMODULE importano porzioni di codes all'interno della codebase (JS/TS)
export class AppRoutingModule {

}