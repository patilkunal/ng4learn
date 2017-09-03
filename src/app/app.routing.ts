import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {CategoriesComponent} from './categories/categories.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'categories', component: CategoriesComponent, children: [
        {path: 'new', component: CategoriesComponent}
    ]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
