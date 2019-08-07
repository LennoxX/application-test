import { AuthGuard } from "./shared/guards/auth.guard";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/sign-in", pathMatch: "full" },
    { path: "browse", loadChildren: "~/app/views/browse/browse.module#BrowseModule", canActivate: [AuthGuard] },
    { path: "home", loadChildren: "~/app/views/home/home.module#HomeModule", canActivate: [AuthGuard] },
    { path: "sign-in", loadChildren: "~/app/views/sign-in/sign-in.module#SignInModule"},
    { path: "sign-up", loadChildren: "~/app/views/sign-up/sign-up.module#SignUpModule"},
    { path: "search", loadChildren: "~/app/views/search/search.module#SearchModule", canActivate: [AuthGuard] },
    { path: "featured", loadChildren: "~/app/views/featured/featured.module#FeaturedModule", canActivate: [AuthGuard] },
    { path: "settings", loadChildren: "~/app/views/settings/settings.module#SettingsModule", canActivate: [AuthGuard] }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
