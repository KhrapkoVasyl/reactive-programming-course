import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-while',
  template: `<p *while="condition">Перший параграф</p>
    <p *while="!condition">Другий параграф</p>`,
})
export class TaskWhileComponent {
  @Input() condition!: boolean;
}
