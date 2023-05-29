import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  showToast = false;
  toastTitle: string = '';
  toastMessage: string = '';
  icon: string = '';
  typeAlert: string = '';

  constructor() { }

  showCustomToast(title: string, message: string, type: string = 'alert-success', icon: string = 'bi-check-circle'): void {
    this.icon = icon;
    this.toastTitle = title;
    this.toastMessage = message;
    this.typeAlert = type;
    this.showToast = true;

    setTimeout(() => {
      this.hideCustomToast();
    }, 3000);
  }

  hideCustomToast(): void {
    this.showToast = false;
  }
}
