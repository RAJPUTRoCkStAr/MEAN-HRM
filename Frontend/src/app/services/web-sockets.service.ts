import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class WebSocketsService {
//   private socket: SocketIOClient.Socket;

//   constructor() {
//     this.socket = io.connect('https://hrms-web.herokuapp.com/');
//   }

//   listen(eventname: string): Observable<any> {
//     return new Observable((subscriber) => {
//       this.socket.on(eventname, (data: any) => {
//         subscriber.next(data);
//       })
//     })
//   }

//   emit(eventname: string, data: any) {
//     this.socket.emit(eventname, data);
//   }
// }
