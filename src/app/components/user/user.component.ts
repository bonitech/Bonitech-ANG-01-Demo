import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name:string;
  private age:number;
  private email:string;
  private address:{
    street:string,
    city:string,
    province:string,
    postcode:string
  }
  private skills:string[];

  private ToDoList:Todo[];
  private editable:boolean = true;

  constructor(private toDoService:TodoService) { 

  }

  ngOnInit() {
    this.name = "nlce";
    this.age = 24;
    this.email = "nlce@gmail.com";
    this.address = {
      street : "Ramkamheang Rd.", 
      city: "Sapansung", 
      province: "BKK", 
      postcode: "10240"
    }
    this.skills = ["Sing a song","Sleeping","Eating", "Playing Game"];

    //Call Service
    this.toDoService.getToDoList().subscribe((res)=>{
      this.ToDoList = res;
    });
  }

  addSkill(skill){
    this.skills.unshift(skill);
    return false;
  }

  removeSkill(skill){
    this.skills.forEach((element, index) => {
      if(element == skill){
        this.skills.splice(index, 1);
      }
    });
  }

  toggleEdit(){
    this.editable =! this.editable;
  }
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

