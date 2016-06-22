/*

LOOK!

WARNING!

PAY ATTENTION!

SECURITY IS AN ISSUE!

YOU WOULDN'T DOWNLOAD A CAR!

This component is a HIGHLY unsafe local authentication service.
Okay for mockups but MUST be changed before any consideration for release.

*/

import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';

/*

users login information "database", replace with whatever you're storing users in

*/

export class User {
	constructor(
		public email: string,
		public password: string) { }
}

var users = [
	new User('tarunraj@vinformaxsystems.com','vin'),
	new User('dhilip@vinformaxsystems.com','vin')
	];

/*

AuthServ should be done serverside instead of locally in Angular2.
constructor depends on a Router, an interface used to move between links.
login, logout, check -> three main parts of authentication service

*/
@Injectable()
export class AuthServ {

	constructor(
		private _router: Router) { }

	login(user){
		var authUser = users.find(u => u.email === user.email);
		if (authUser){
			localStorage.setItem("user",authUser);
			this._router.navigate(['Home']);
			return true;
		}
		return false;
	}

	logout() {
		localStorage.removeItem("user");
		this._router.navigate(['Login']);
	}

	checkCredentials(){
		if(localStorage.getItem("user") === null){
			this._router.navigate(['Login']);
		}
	}
}