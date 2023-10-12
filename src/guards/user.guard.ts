import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class UserGuard implements CanActivate {
  constructor(private route: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (localStorage.getItem('isAdmin') === "true") {

      // For access the client list route you need set isAdmin: true in local storage.
      return true
    }
    this.route.navigate(['login'])
    return false
  }

}
