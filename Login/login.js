"use strict";
//import {ValidationController} from 'aurelia-validation';
//import {validateTrigger} from 'aurelia-validation';
// import {required, email} from 'aurelia-validatejs'
// @inject(NewInstance.of(ValidationController))
// export class Login
// {
// 	firstname:string
// 	lastname:string;
// email:string
// controller:any;
// constructor(controller)
// {
// 	this.controller=controller;
// 	controller.validateTrigger = validateTrigger.manual;  
// }
// 	submit()
// 	{
// let errors = this.controller.validate();
// 	//console.log(user)
// 	}
// }
// ValidationRules  
//   .ensure('firstName').required()
//   .ensure('lastName').required()
//   .ensure('email').required().email()
//   .on(Login);
var login = (function () {
    function login() {
        this.name = "sai";
        this.arriving = true;
    }
    return login;
}());
exports.login = login;
