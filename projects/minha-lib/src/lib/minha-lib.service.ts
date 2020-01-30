import { Injectable } from '@angular/core';
import { isNumber } from 'util';

@Injectable({
  providedIn: 'root'
})
export class MinhaLibService {

  constructor() { }

  realizaSomaDeDoisNumeros(x: number, y: number) {

    if (isNumber(x) && isNumber(y)) {
      return x + y;
    } else {
      console.warn('Algum dos valores nao são númericos');
    }
  }

}
