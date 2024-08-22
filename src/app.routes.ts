import { BuffCalculatorComponent } from "./app/calculators/buff-calculator/buff-calculator.component";
import { HomeComponent } from "./app/home/home.component";
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'buff-calculator', component: BuffCalculatorComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];