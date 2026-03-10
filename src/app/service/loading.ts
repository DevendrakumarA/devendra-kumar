import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Loading {
  setProgress(setLoading: (value: number) => void) {

    let percent = 0;

    let interval = setInterval(() => {

      if (percent <= 50) {

        percent += Math.round(Math.random() * 5);

        setLoading(percent);

      } else {

        clearInterval(interval);

        interval = setInterval(() => {

          percent += Math.round(Math.random());

          setLoading(percent);

          if (percent > 91) {
            clearInterval(interval);
          }

        }, 2000)

      }

    }, 100)

  }

  private loadingSubject = new BehaviorSubject<boolean>(true);
  private percentSubject = new BehaviorSubject<number>(0);

  isLoading$ = this.loadingSubject.asObservable();
  percent$ = this.percentSubject.asObservable();

  setIsLoading(state: boolean) {
    this.loadingSubject.next(state);
  }

  setLoading(percent: number) {
    this.percentSubject.next(percent);
  }
}
