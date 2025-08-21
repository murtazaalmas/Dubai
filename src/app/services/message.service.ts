import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject = new BehaviorSubject<string | null>(null);
  message$: Observable<string | null> = this.messageSubject.asObservable();

  showMessage(message: string) {
    this.messageSubject.next(message);
    setTimeout(() => {
      this.messageSubject.next(null);
    }, 5000);
  }
}
