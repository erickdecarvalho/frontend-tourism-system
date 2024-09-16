import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserStorageService } from './storage/user-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const expectedRole = next.data['expectedRole'];

    if (expectedRole === 'client' && UserStorageService.isClientLoggedIn()) {
      return true;
    }

    if (expectedRole === 'company' && UserStorageService.isCompanyLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
