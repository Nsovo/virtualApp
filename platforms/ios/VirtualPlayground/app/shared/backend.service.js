"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var BackendService = (function () {
    function BackendService() {
    }
    BackendService.setup = function () {
        kinvey_nativescript_sdk_1.Kinvey.init({
            apiHostname: 'https://baas.kinvey.com',
            micHostname: 'https://auth.kinvey.com',
            appKey: BackendService.kinveyAppKey,
            appSecret: BackendService.kinveyAppSecret
        });
        /*  Kinvey.init({
              appKey: BackendService.kinveyAppKey,
              appSecret: BackendService.kinveyAppSecret
          }); */
    };
    BackendService.kinveyAppKey = "kid_HJOGMaTTM";
    BackendService.kinveyAppSecret = "c02417de83584331a6fa312f35a80386";
    BackendService.kinveyUsername = "admin";
    BackendService.kinveyPassword = "admin";
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbUVBQWlEO0FBRWpEO0lBQUE7SUFvQkEsQ0FBQztJQWRVLG9CQUFLLEdBQVo7UUFFSSxnQ0FBTSxDQUFDLElBQUksQ0FBQztZQUNSLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxNQUFNLEVBQUcsY0FBYyxDQUFDLFlBQVk7WUFDcEMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxlQUFlO1NBQzVDLENBQUMsQ0FBQTtRQUVKOzs7Z0JBR1E7SUFDVixDQUFDO0lBbEJNLDJCQUFZLEdBQUcsZUFBZSxDQUFDO0lBQy9CLDhCQUFlLEdBQUcsa0NBQWtDLENBQUM7SUFDckQsNkJBQWMsR0FBRyxPQUFPLENBQUM7SUFDekIsNkJBQWMsR0FBRyxPQUFPLENBQUM7SUFnQnBDLHFCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xuICAgIHN0YXRpYyBraW52ZXlBcHBLZXkgPSBcImtpZF9ISk9HTWFUVE1cIjtcbiAgICBzdGF0aWMga2ludmV5QXBwU2VjcmV0ID0gXCJjMDI0MTdkZTgzNTg0MzMxYTZmYTMxMmYzNWE4MDM4NlwiO1xuICAgIHN0YXRpYyBraW52ZXlVc2VybmFtZSA9IFwiYWRtaW5cIjtcbiAgICBzdGF0aWMga2ludmV5UGFzc3dvcmQgPSBcImFkbWluXCI7XG5cbiAgICBzdGF0aWMgc2V0dXAoKSB7XG5cbiAgICAgICAgS2ludmV5LmluaXQoe1xuICAgICAgICAgICAgYXBpSG9zdG5hbWU6ICdodHRwczovL2JhYXMua2ludmV5LmNvbScsXG4gICAgICAgICAgICBtaWNIb3N0bmFtZTogJ2h0dHBzOi8vYXV0aC5raW52ZXkuY29tJyxcbiAgICAgICAgICAgIGFwcEtleTogIEJhY2tlbmRTZXJ2aWNlLmtpbnZleUFwcEtleSAgLFxuICAgICAgICAgICAgYXBwU2VjcmV0OiBCYWNrZW5kU2VydmljZS5raW52ZXlBcHBTZWNyZXRcbiAgICAgICAgfSlcblxuICAgICAgLyogIEtpbnZleS5pbml0KHtcbiAgICAgICAgICAgIGFwcEtleTogQmFja2VuZFNlcnZpY2Uua2ludmV5QXBwS2V5LFxuICAgICAgICAgICAgYXBwU2VjcmV0OiBCYWNrZW5kU2VydmljZS5raW52ZXlBcHBTZWNyZXRcbiAgICAgICAgfSk7ICovXG4gICAgfVxufVxuIl19