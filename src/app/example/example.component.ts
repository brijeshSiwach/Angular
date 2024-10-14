import { Component, inject } from '@angular/core';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  template: `
    <button (click)="logmessage()">Log Message</button>
  `,
  styles: ``
})
export class ExampleComponent {
  constructor(private logger: LoggerService) {}
  logmessage():void {
    // const logger = inject(LoggerService);
    this.logger.log('This Should log a message')
  }
}
