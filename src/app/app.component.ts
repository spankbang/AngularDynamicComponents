import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isItTrue:boolean= false
  title = 'AngularDynamicComponents';
  error = "fuck this shit !"

  clicked() {
    this.isItTrue = !this.isItTrue
    console.log(this.isItTrue)
  }

}
