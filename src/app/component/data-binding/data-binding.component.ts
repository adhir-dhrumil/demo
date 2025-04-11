import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
    courseName : string ="Angular 19";
    nameMinLength :number = 2;

    showMessage (){
      alert("Welcome to angular")
    }
}
