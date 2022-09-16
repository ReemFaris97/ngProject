import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string , limit?:number): any { // ? is optional
    
    if(!value) return null;
    let actualLimit = (limit) ? limit : 10;
    return value.substr(0,actualLimit) + '.....';
  }

}
