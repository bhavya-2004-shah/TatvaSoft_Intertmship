import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DemoComponent,DirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  CollegeName = 'LDCE';
  CollegeAddress = 'Ahmedabad, Gujarat, India';
  isAdmin = false;
  isDisabled = false;

  onClick(){
    console.log('button clicked');
  }
}

