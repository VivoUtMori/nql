import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello to the {{ name }} team space!</h1>
  `,
})
export class App {
  name = 'NQL';
}

bootstrapApplication(App);
