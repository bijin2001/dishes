import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allRecipes: any[], searchKey: string): any[] {
    const result:any = []
    if(!allRecipes && searchKey==""){
      return allRecipes
    }else{
      allRecipes.forEach((item:any)=>{
        if(item['name'].toLowerCase().includes(searchKey.toLowerCase())||item['cuisine'].toLowerCase().includes(searchKey.toLowerCase())){
          result.push(item)
        }
      })
    }
    return result;
  }

}
