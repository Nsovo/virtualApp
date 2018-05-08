import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";

import { User } from "../shared/user.model";
import { UserService } from "../shared/user.service";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isLoggingIn = true;
    user: User;
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;

    constructor(private page: Page, private userService: UserService, private router: Router) {
        this.page.actionBarHidden = true;
        this.user = new User();
        // this.user.email = "foo2@foo.com";
        // this.user.password = "foo";
    }

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    submit() {
        if (!this.user.email || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }

        if (this.isLoggingIn) {
            this.login();
        }
    }

    decide(){
        if(this.user.email='admin')
            this.router.navigate(["/sales"]);
            else
        this.router.navigate(["/home"]);
    }

    login() {
        this.userService.login(this.user)
            .then(() => {
                this.decide()
            })
            .catch(() => {
                this.alert("Unfortunately we could not find your account.");
            });
    }

    forgotPassword() {
        this.alert("Contact the administrator.");
    }

    focusConfirmPassword() {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    }

    alert(message: string) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    }
}

