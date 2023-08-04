import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavigationService } from '../services/navigation.service';

export const authGuard = () => {
    const authService = inject(AuthService);
    const navigationService: NavigationService = inject(NavigationService);

    if (authService.isLoggedIn()) {
        return true;
    }
    navigationService.navigateToLogin();
    return false;
};
