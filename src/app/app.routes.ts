import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DocsPageComponent } from './pages/docs-page/docs-page.component';
import { PlaygroundComponent } from './pages/playground/playground.component';

export const routes: Routes = [
    {path: "", component: HomePageComponent, pathMatch: "full"},
    {path: "docs", component: DocsPageComponent, pathMatch: "full"},
    {path: "playground", component: PlaygroundComponent, pathMatch: "full"}
];
