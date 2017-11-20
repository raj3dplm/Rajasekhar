import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userElements = [];
  newUserName = '';
  newUserContent = '';

  onAddUser() {
    this.userElements.push({
      name: this.newUserName,
      content: this.newUserContent
    });
  }
}
