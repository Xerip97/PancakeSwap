import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router' //(tipo TS)
import { FarmsContainerComponent } from './pages/farms-container/farms-container.component'
import { TestComponent } from "./test/test.component";

const routes: Routes = [
    { path: 'farms', component: FarmsContainerComponent },
    { path: 'test', component: TestComponent}
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