import {Component} from 'angular2/core';
import {AuthServ} from './authserv.service'

@Component({
	selector: 'login-form',
	providers: [AuthServ],
	template:
		<div class="container">
			<div class="content">
				<span>Congratulations, you have logged in!</span>
				<br />
				<a (click)="logout()" href="#">Click Here to logout</a>
			</div>
		</div>

})

export class PrivateComponent

	constructor(
		private _service:AuthServ) { }

	ngOnInit(){
		this._service.checkCredentials();
	}

	logout(){
		this._service.logout();
	}
}
