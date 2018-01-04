import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {MyAccountComponent} from './components/my-account/my-account.component';
import {MyProfileComponent} from './components/my-profile/my-profile.component';
import {SubmitCarAddComponent} from './components/submit-car-add/submit-car-add.component';
import {CaradListComponent} from './components/carad-list/carad-list.component';
import {CaradDetailComponent} from './components/carad-detail/carad-detail.component';
const appRoutes : Routes = [

  {
		path : '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
{
	path : 'home',
	component:  HomeComponent
},
{
	path:'myAccount',
	component:MyAccountComponent

},
{
	path:'myProfile',
	component:MyProfileComponent

},
{
	path:'submitCaradd',
	component:SubmitCarAddComponent
},
{
	path:'caradList',
	component:CaradListComponent
},
{
	path:'caradDetail/:id',
	component:CaradDetailComponent
}
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);