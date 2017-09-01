webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\"></div>\r\n      <h3>I'm in the App component</h3>\r\n      <hr>\r\n      <!-- <app-servers></app-servers> -->\r\n      <!-- <div app-servers></div> -->\r\n      <app-servers></app-servers>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        //styleUrls: ['./app.component.css']
        styles: ["\n    h3 {\n      color: dodgerblue;\n    }\n  "]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__server_server_component__ = __webpack_require__("../../../../../src/app/server/server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servers_servers_component__ = __webpack_require__("../../../../../src/app/servers/servers.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__server_server_component__["a" /* ServerComponent */],
            __WEBPACK_IMPORTED_MODULE_5__servers_servers_component__["a" /* ServersComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/server/server.component.html":
/***/ (function(module, exports) {

module.exports = "<p\r\n  [ngStyle]=\"{backgroundColor: getColor()}\"\r\n  [ngClass]=\"{online: serverStatus === 'online'}\">\r\n  {{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/server/server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerComponent = (function () {
    function ServerComponent() {
        // se si vuole anche specificare il tipo
        // serverId: number = 10;
        // serverStatus: string = 'offline';
        this.serverId = 10;
        this.serverStatus = 'offline';
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    ServerComponent.prototype.getServerStatus = function () {
        return this.serverStatus;
    };
    ServerComponent.prototype.getColor = function () {
        return this.serverStatus === 'online' ? 'green' : 'red';
    };
    return ServerComponent;
}());
ServerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-server',
        template: __webpack_require__("../../../../../src/app/server/server.component.html"),
        styles: ["\n    .online {\n      color: blue;\n    }\n    "]
    }),
    __metadata("design:paramtypes", [])
], ServerComponent);

//# sourceMappingURL=server.component.js.map

/***/ }),

/***/ "../../../../../src/app/servers/servers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/servers/servers.component.html":
/***/ (function(module, exports) {

module.exports = "<label>Server Name</label>\n<!-- <input\n  type=\"text\"\n  class=\"form-control\"\n  (input)=\"onUpdateServerName($event)\"> -->\n  <input\n    type=\"text\"\n    class=\"form-control\"\n    [(ngModel)]=\"serverName\">\n<button\n  class=\"btn btn-primary\"\n  [disabled]=\"!allowNewServer\"\n  (click)=\"onCreateServer()\">Add Server</button>\n<!-- <p [innerText]=\"allowNewServer\"></p> -->\n<!-- <p>{{ serverCreationStatus }}</p> -->\n<p *ngIf=\"serverCreated\">Server was created, server is {{serverName}}</p>\n<!-- <p *ngIf=\"serverCreated; else noServer\">Server was created, server is {{serverName}}</p>\n<ng-template #noServer>\n  <p>\n    No server was created!\n  </p>\n</ng-template> -->\n<app-server *ngFor=\"let server of servers\"></app-server>\n"

/***/ }),

/***/ "../../../../../src/app/servers/servers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServersComponent = (function () {
    function ServersComponent() {
        var _this = this;
        this.allowNewServer = false;
        this.serverCreationStatus = "No server was created!";
        this.serverName = '';
        this.serverCreated = false;
        this.servers = ['Testserver', 'Testserver 2'];
        setTimeout(function () {
            _this.allowNewServer = true;
        }, 2000);
    }
    ServersComponent.prototype.ngOnInit = function () {
    };
    ServersComponent.prototype.onCreateServer = function () {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = "Server " + this.serverName + " was created";
    };
    // onUpdateServerName(event:any){
    //   this.serverName = event.target.value;
    // }
    ServersComponent.prototype.onUpdateServerName = function (event) {
        this.serverName = event.target.value;
    };
    return ServersComponent;
}());
ServersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-servers',
        // selector: '[app-servers]',
        // selector: '.app-servers',
        template: __webpack_require__("../../../../../src/app/servers/servers.component.html"),
        // template: `
        //   <app-server></app-server>
        //   <app-server></app-server>`,
        //template: '<app-server></app-server><app-server></app-server>',
        styles: [__webpack_require__("../../../../../src/app/servers/servers.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ServersComponent);

//# sourceMappingURL=servers.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map