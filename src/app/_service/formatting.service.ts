import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormattingService {

  constructor() { }

  public capitalizeFirstLetter(word: string){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
