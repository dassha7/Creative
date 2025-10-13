import { Routes } from '@angular/router';
import { StartCreativity } from './start-creativity/start-creativity';
import { CreativityType } from './creativity-type/creativity-type';

export const routes: Routes = [
    {path:"start", component: StartCreativity},
    {path:"type", component: CreativityType}
];
