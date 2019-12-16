import { Injectable } from '@angular/core';
declare let alertify:any

@Injectable()
export class AlertifyjsService {

  constructor() { }

  success(message){
    alertify.set('notifier','position','top-right')
    alertify.success(message)
  }

  error(message){
    
    alertify.error(message);
  }
}
