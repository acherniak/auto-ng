import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MatSelectionListChange} from '@angular/material/list';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'Alex'; postId!: number; comms: any; newComm: any = {add:false};
	@ViewChild(MatSidenav) sideNav!: MatSidenav;
	constructor(public api: ApiService) {}
	ngOnInit() { this.api.init(); }
	selPost = (ev: MatSelectionListChange) => { let id = ev.options[0].value;
		this.postId = id;
		this.comms = this.api.data.comments.filter((c:any)=>c.postId==id)
		this.sideNav.toggle(!!this.postId); this.newComm = {add:false}; 
	}
	save = () => { let comm = { postId: this.postId, body: this.newComm.body, name: this.newComm.name, email: this.newComm.email, id: this.api.data.comments.length+1}
		this.comms.push(comm); this.api.data.comments.push(comm); this.newComm = {add:false}; 
	}
}
