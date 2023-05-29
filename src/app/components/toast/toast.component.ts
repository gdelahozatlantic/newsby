import { Component, Input } from '@angular/core';

@Component({
  selector: 'newsby-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() typeAlert: string = '';
  @Input() showToast: boolean = false;
}
