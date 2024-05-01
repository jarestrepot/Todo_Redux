import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { ActiveComponent } from "./pages/active/active.component";
// import { AllComponent } from "./pages/all/all.component";
// import { CompletedComponent } from "./pages/completed/completed.component";
import { HomePageComponent } from "./home-page.component";


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    // children: [
    //   {
    //     path: 'all',
    //     component: AllComponent,
    //     children: []
    //   },
    //   {
    //     path: 'active',
    //     component: ActiveComponent,
    //     children: []
    //   },
    //   {
    //     path: 'completed',
    //     component: CompletedComponent,
    //     children: [],
    //   },
    //   {
    //     path: '**',
    //     redirectTo: 'todo',
    //     pathMatch: 'full'
    //   }
    // ]
  },
  {
    path: '**',
    redirectTo: 'todo',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}

