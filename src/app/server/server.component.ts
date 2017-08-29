import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent{
  // se si vuole anche specificare il tipo
  // serverId: number = 10;
  // serverStatus: string = 'offline';

  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
