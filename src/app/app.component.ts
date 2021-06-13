import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getValues(val) {
    console.warn(val);
  }
  toNotify() {
    alert('Your resposne has been recorded successfully');
  }
}
