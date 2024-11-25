import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DocsPageComponent } from './pages/docs-page/docs-page.component';

export const routes: Routes = [
    {path: "", component: HomePageComponent, pathMatch: "full"},
    {path: "docs", component: DocsPageComponent, children:[]}
];
