import { CanActivateFn } from '@angular/router';

export const myGuardGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem('signup') === 'true') {
    return true;
  }
  return false;
};
