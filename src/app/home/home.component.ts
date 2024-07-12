import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  p:number = 1
  searchKey:string = ""
  allRecipes:any = []
  unFiltered:any = []
  constructor(private api:ApiService){}

  ngOnInit():void{
    this.api.getUsersApi().subscribe((result:any)=>{
      this.allRecipes = result  
      this.unFiltered = result    
    })

  }
    filterMeal(mealType:any){
      this.allRecipes = this.allRecipes.filter((dish:any)=>dish.mealType.includes(mealType))
      console.log('workin');  
    }

    Normal(){
      this.allRecipes = this.unFiltered;
    }

}


