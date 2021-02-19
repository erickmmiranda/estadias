import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
    constructor(private dataService: ApiService,private router: Router ) {}
    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    const routeurl: string = state.url;
    return  this.isLogin(routeurl);
}

    isLogin(routeurl: string): any {
        if (this.dataService.isLoggedIn()) {
            return true;
        }
        
        this.dataService.redirectUrl = routeurl;
        this.router.navigate(['/login']);

        // Codigo para al momento de logout se guarde la ruta donde se encontraba el usuario
        // y al momento de login regrese a la misma pagina donde se encontraba
        // ", {queryParams: { returnUrl: routeurl }}"
        // esto en el router.navigate de arriba , despues de los corchetes
    }
}