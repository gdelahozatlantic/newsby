import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'newsby-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButtonComponent {
  @Input() text = '';
  @Input() buttonClasses = '';
  @Output() emitInformation: EventEmitter<string> = new EventEmitter();

  constructor() { }

  changeViewFormat(value: string): void {
    this.emitInformation.emit(value);
  }
}
