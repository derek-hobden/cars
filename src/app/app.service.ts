import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  alertSassy(message: string): void{
    alert(`And then she was like "${message}", and I was like "Oh no she didn't"`);
  }
}
