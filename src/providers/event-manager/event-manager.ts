import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the EventManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventManagerProvider {

  isLoading = new Subject<boolean>();
  msToast= new Subject<string>();

  constructor(public http: HttpClient) {
    console.log('Hello EventManagerProvider Provider');
  }

  setIsLoading( loading: boolean){
    this.isLoading.next(loading);
  }

  getIsLoading(){
    return this.isLoading.asObservable();
  }

  serMsgToast( message: string){
    this.msToast.next(message);
  }

  getMsgtoast(){
    return this.msToast.asObservable();
  }
}
