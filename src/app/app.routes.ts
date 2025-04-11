import { Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { AdminComponent } from './component/admin/admin.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { ControlFlowComponent } from './component/control-flow/control-flow.component';
import { GetAPIComponent } from './component/get-api/get-api.component';
import { VideosComponent } from './component/videos/videos.component';

export const routes: Routes = [
    {
        path:"user",
        component:UserComponent
    },
    {
        path:"admin",
        component:AdminComponent
    },
    {
        path:"data-binding",
        component:DataBindingComponent
    },
    {
        path:"control-flow",
        component:ControlFlowComponent
    },
    {
        path:"get-api",
        component:GetAPIComponent
    },
    {
        path:"videos",
        component:VideosComponent
    }
];
