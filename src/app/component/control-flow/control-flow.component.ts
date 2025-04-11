import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

    isDiv1Visible: boolean= false;
    div2Visible: string ="No";
    dayname: string=""

    studentList : any [] =[
      {name: 'a',mobile:'35',city:'jamanagar',isActive:true},
      {name: 'b',mobile:'45',city:'rajkot',isActive:false},
      {name: 'c',mobile:'55',city:'pune',isActive:true},
      {name: 'd',mobile:'65',city:'thane',isActive:false}
    ]
                                                                      
    showhideDiv1(isshow:boolean){
        this.isDiv1Visible = isshow;
    }
    
}
