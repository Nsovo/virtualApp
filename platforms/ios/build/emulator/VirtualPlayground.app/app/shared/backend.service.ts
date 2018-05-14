import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";

export class BackendService {
    static kinveyAppKey = "kid_HJOGMaTTM";
    static kinveyAppSecret = "c02417de83584331a6fa312f35a80386";
    static kinveyUsername = "admin";
    static kinveyPassword = "admin";

    static setup() {
        Kinvey.init({
            appKey: BackendService.kinveyAppKey,
            appSecret: BackendService.kinveyAppSecret
        });
    }
}
