(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./training/training.module": [
		"./src/app/training/training.module.ts",
		"training-training-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");





var routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: 'training', loadChildren: './training/training.module#TrainingModule', canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n\r\n    <mat-sidenav #sidenav role=\"navigation\">\r\n        <app-sidenav-list (closeSidenav)=\"sidenav.close()\"></app-sidenav-list>\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content>\r\n        <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\r\n        <main>\r\n            <router-outlet></router-outlet>\r\n        </main>\r\n    </mat-sidenav-content>\r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container,\nmat-sidenav-content,\nmat-sidenav {\n  height: 100%;\n}\nmat-sidenav {\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDovcHJvamVjdHMvQW5ndWxhci9maXRuZXNzLXRyYWNrZXItYW5ndWxhci9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHSSxZQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lcixcbm1hdC1zaWRlbmF2LWNvbnRlbnQsXG5tYXQtc2lkZW5hdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuIiwibWF0LXNpZGVuYXYtY29udGFpbmVyLFxubWF0LXNpZGVuYXYtY29udGVudCxcbm1hdC1zaWRlbmF2IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxubWF0LXNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        // @ViewChild('sidenav');
        this.openSidenav = false;
        this.title = 'fitness-tracker-angular';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.initAuthListener();
    };
    AppComponent.prototype.sidenavToggle = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");
/* harmony import */ var _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/sidenav-list/sidenav-list.component */ "./src/app/navigation/sidenav-list/sidenav-list.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _training_training_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./training/training.service */ "./src/app/training/training.service.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _shared_ui_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/ui.service */ "./src/app/shared/ui.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.reducer */ "./src/app/app.reducer.ts");





















// import { uiReducer } from './shared/ui.reducer';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"],
                _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_12__["SidenavListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__["AngularFireStorageModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_15__["AuthModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_19__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_20__["appReducers"])
            ],
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _training_training_service__WEBPACK_IMPORTED_MODULE_14__["TrainingService"], _shared_ui_service__WEBPACK_IMPORTED_MODULE_18__["UiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.reducer.ts":
/*!********************************!*\
  !*** ./src/app/app.reducer.ts ***!
  \********************************/
/*! exports provided: appReducers, getUiState, getisPending, getAuthState, getIsLogged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUiState", function() { return getUiState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getisPending", function() { return getisPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthState", function() { return getAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLogged", function() { return getIsLogged; });
/* harmony import */ var _shared_ui_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/ui.reducer */ "./src/app/shared/ui.reducer.ts");
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.reducer */ "./src/app/auth/auth.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var appReducers = {
    ui: _shared_ui_reducer__WEBPACK_IMPORTED_MODULE_0__["uiReducer"],
    auth: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authReducer"]
};
var getUiState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('ui'); // return subreducer object = state.ui....
var getisPending = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getUiState, _shared_ui_reducer__WEBPACK_IMPORTED_MODULE_0__["getIsPending"]); // pull out isPending from ui object
var getAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('auth'); // return subreducer object = state.ui....
var getIsLogged = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getAuthState, _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getIsLogged"]); // pull out isPending from ui object


/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");





var routes = [
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.actions.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.actions.ts ***!
  \**************************************/
/*! exports provided: IS_LOGGED, IS_NOT_LOGGED, IsLogged, IsNotLogged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_LOGGED", function() { return IS_LOGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_NOT_LOGGED", function() { return IS_NOT_LOGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLogged", function() { return IsLogged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotLogged", function() { return IsNotLogged; });
var IS_LOGGED = '[AUTH] IS_LOGGED';
var IS_NOT_LOGGED = '[AUTH] IS_NOT_LOGGED';
var IsLogged = /** @class */ (function () {
    function IsLogged() {
        this.type = IS_LOGGED;
    }
    return IsLogged;
}());

var IsNotLogged = /** @class */ (function () {
    function IsNotLogged() {
        this.type = IS_NOT_LOGGED;
    }
    return IsNotLogged;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");





// import { map } from 'rxjs/operators'; // rxjs 6+
// import 'rxjs/add/operator/take';
// import { take } from 'rxjs/operators'; // rxjs 6+
// import 'rxjs/add/operator/pipe';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, store, router) {
        this.authService = authService;
        this.store = store;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        // return this.store.select(getIsLogged).pipe(take(1));
        if (this.authService.isAuth()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthGuard.prototype.canLoad = function (route) {
        if (this.authService.isAuth()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"]
            ],
            exports: []
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.reducer.ts ***!
  \**************************************/
/*! exports provided: authReducer, getIsLogged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLogged", function() { return getIsLogged; });
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/auth.actions.ts");

var initialState = {
    isLogged: false
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["IS_LOGGED"]:
            return {
                isLogged: true
            };
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["IS_NOT_LOGGED"]:
            return {
                isLogged: false
            };
        default:
            return state;
    }
}
var getIsLogged = function (state) { return state.isLogged; };


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _training_training_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../training/training.service */ "./src/app/training/training.service.ts");
/* harmony import */ var _shared_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/ui.service */ "./src/app/shared/ui.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_ui_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/ui.actions */ "./src/app/shared/ui.actions.ts");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/auth.actions.ts");









var AuthService = /** @class */ (function () {
    function AuthService(router, fireAuth, uiService, store, trainingService) {
        this.router = router;
        this.fireAuth = fireAuth;
        this.uiService = uiService;
        this.store = store;
        this.trainingService = trainingService;
        this.isLogged = false;
    }
    AuthService.prototype.initAuthListener = function () {
        var _this = this;
        this.fireAuth.authState.subscribe(function (user) {
            if (user) {
                _this.isLogged = true;
                _this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_8__["IsLogged"]());
                // this.authChange.next(true);
                _this.router.navigate(['/training']);
            }
            else {
                _this.trainingService.cancelTrainingSubscriptions();
                _this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_8__["IsNotLogged"]());
                // this.authChange.next(false);
                _this.router.navigate(['/login']);
                _this.isLogged = false;
            }
        });
    };
    AuthService.prototype.registerUser = function (authData) {
        var _this = this;
        // this.uiService.isPendingChange.next(true);
        this.store.dispatch(new _shared_ui_actions__WEBPACK_IMPORTED_MODULE_7__["StartLoading"]());
        this.fireAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
            .then(function (result) {
            // this.uiService.isPendingChange.next(false);
            _this.store.dispatch(new _shared_ui_actions__WEBPACK_IMPORTED_MODULE_7__["StopLoading"]());
            // console.log(result);
        })
            .catch(function (error) {
            // this.uiService.isPendingChange.next(false);
            _this.store.dispatch(new _shared_ui_actions__WEBPACK_IMPORTED_MODULE_7__["StopLoading"]());
            _this.uiService.showError(error.message, null, 3000);
            // console.log(error);
        });
        // this.user = {
        //   email: authData.email,
        //   userId: Math.round(Math.random() * 10000).toString()
        // };
    };
    AuthService.prototype.login = function (authData) {
        var _this = this;
        // this.uiService.isPendingChange.next(true);
        this.store.dispatch(new _shared_ui_actions__WEBPACK_IMPORTED_MODULE_7__["StartLoading"]());
        this.fireAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
            .then(function (result) {
            // this.uiService.isPendingChange.next(false);
            _this.store.dispatch(new _shared_ui_actions__WEBPACK_IMPORTED_MODULE_7__["StopLoading"]());
            console.log(result);
            // this.authUser(true, '/training');
            // this.isLogged = true;
        })
            .catch(function (error) {
            // this.uiService.isPendingChange.next(false);
            _this.store.dispatch(new _shared_ui_actions__WEBPACK_IMPORTED_MODULE_7__["StopLoading"]());
            _this.uiService.showError(error.message, null, 3000);
            console.log(error);
        });
        // this.user = {
        //   email: authData.email,
        //   userId: Math.round(Math.random() * 10000).toString()
        // };
        // this.authUser(true, '/training');
    };
    AuthService.prototype.logout = function () {
        this.fireAuth.auth.signOut();
        // this.trainingService.cancelTrainingSubscriptions();
        // this.isLogged = false;
        // this.authUser(false, '/login');
    };
    AuthService.prototype.isAuth = function () {
        return this.isLogged;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _shared_ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _training_training_service__WEBPACK_IMPORTED_MODULE_4__["TrainingService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Reactive form -->\n<section class=\"login-form\" fxLayoutAlign=\"center center\">\n  <form fxLayout=\"column\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"15px\"  \n  (ngSubmit)=\"onSubmit(loginForm)\"\n  [formGroup]=\"loginForm\">\n    <mat-form-field>\n      <input \n        type=\"email\" matInput placeholder=\"Your email\" name=\"email\"\n        formControlName=\"email\">\n        <mat-hint>Please enter your email.</mat-hint>\n        <mat-error>Invalid or missing email.</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n          <input type=\"password\" matInput placeholder=\"Your password\" name=\"password\"\n          formControlName=\"password\">\n          <mat-hint>Please enter your password.</mat-hint>\n          <mat-error>Missing password.</mat-error>\n    </mat-form-field>\n    <button *ngIf=\"!(isPending$ | async)\" type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"loginForm.invalid\">Submit</button>\n    <mat-spinner *ngIf=\"(isPending$ | async)\"></mat-spinner>\n  </form>\n</section>"

/***/ }),

/***/ "./src/app/auth/login/login.component.less":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9EOi9wcm9qZWN0cy9Bbmd1bGFyL2ZpdG5lc3MtdHJhY2tlci1hbmd1bGFyL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDMwMHB4O1xufSIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_app_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.reducer */ "./src/app/app.reducer.ts");




// import { map } from 'rxjs/operators'; // rxjs 6+



var LoginComponent = /** @class */ (function () {
    // isPending = false;
    // private subscription: Subscription;
    function LoginComponent(authService, store) {
        this.authService = authService;
        this.store = store;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isPending$ = this.store.select(src_app_app_reducer__WEBPACK_IMPORTED_MODULE_6__["getisPending"]);
        // this.isPending$ = this.store.map(state => state.ui.isPending);
        // this.subscription = this.uiservice.isPendingChange.subscribe(isPending => {
        //   this.isPending = isPending;
        // });
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] })
        });
    };
    LoginComponent.prototype.onSubmit = function (form) {
        this.authService.login({
            email: form.value.email,
            password: form.value.password
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/auth/login/login.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"signup-form\" fxLayoutAlign=\"center center\">\n  <form fxLayout=\"column\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"15px\"\n    #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n    <mat-form-field>\n      <input type=\"email\" matInput placeholder=\"Your email\" ngModel name=\"email\"\n        email\n        required\n        #emailInput=\"ngModel\">\n        <mat-error *ngIf=\"!emailInput.hasError('required')\">E-mail is invalid</mat-error>\n        <mat-error *ngIf=\"emailInput.hasError('required')\">Field must not be empty</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input type=\"password\" matInput placeholder=\"Your password\" ngModel name=\"password\"\n      required\n      minlength=\"6\"\n      #pwInput=\"ngModel\">\n      <mat-hint align=\"end\">{{pwInput.value?.length}} / 6</mat-hint>\n      <mat-error>Should be at least 6 charachters long.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput \n        placeholder=\"Your Birthdate\" \n        [matDatepicker]=\"picker\" \n        [max]=\"maxDate\"\n        ngModel\n        name=\"birthday\"\n        required>\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n    <mat-checkbox ngModel name=\"disclaimer\" required color=\"primary\">Agree to terms</mat-checkbox>\n    <button *ngIf=\"!(isPending$ | async)\" type=\"submit\" mat-raised-button color=\"primary\"\n      [disabled]=\"form.invalid\">Submit</button>\n      <mat-spinner *ngIf=\"isPending$ | async\"></mat-spinner>\n  </form>\n</section>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.less":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvRDovcHJvamVjdHMvQW5ndWxhci9maXRuZXNzLXRyYWNrZXItYW5ndWxhci9zcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAzMDBweDtcbn0iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAzMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_app_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, store) {
        this.authService = authService;
        this.store = store;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.isPending$ = this.store.select(src_app_app_reducer__WEBPACK_IMPORTED_MODULE_3__["getisPending"]);
        this.maxDate = new Date();
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    };
    SignupComponent.prototype.onSubmit = function (form) {
        this.authService.registerUser({
            email: form.value.email,
            password: form.value.password
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.less */ "./src/app/auth/signup/signup.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");




















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"]
            ],
            exports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/navigation/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/navigation/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <div fxHide.gt-xs>\n    <button (click)=\"onSidenavToggle()\" mat-icon-button>\n      <mat-icon>menu</mat-icon>\n    </button>\n  </div>\n  <div><a routerLink=\"/\">NG Fitness</a></div>\n  <div fxFlex fxLayout fxLayoutAlign=\"flex-end\" fxHide.xs>\n    <ul fxLayout fxLayoutGap=\"15px\" class=\"nav-items\">\n      <li *ngIf=\"!(isLogged$ | async)\">\n        <a routerLink=\"/signup\">Signup</a>\n      </li>\n      <li *ngIf=\"!(isLogged$ | async)\">\n        <a routerLink=\"/login\">Login</a>\n      </li>\n      <li *ngIf=\"(isLogged$ | async)\">\n        <a routerLink=\"/training\">Training</a>\n      </li>\n      <li *ngIf=\"(isLogged$ | async)\">\n        <a (click)=\"onLogout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/navigation/header/header.component.less":
/*!*********************************************************!*\
  !*** ./src/app/navigation/header/header.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: #fff;\n}\na:hover {\n  color: #e3e3e3;\n}\n.nav-items {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvRDovcHJvamVjdHMvQW5ndWxhci9maXRuZXNzLXRyYWNrZXItYW5ndWxhci9zcmMvYXBwL25hdmlnYXRpb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDQ0o7QURDSTtFQUNJLGNBQUE7QUNDUjtBREdBO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZTNlM2UzO1xuICAgIH1cbn1cblxuLm5hdi1pdGVtcyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn0iLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogI2UzZTNlMztcbn1cbi5uYXYtaXRlbXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_app_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.reducer */ "./src/app/app.reducer.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, store) {
        this.authService = authService;
        this.store = store;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // no payload
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isLogged$ = this.store.select(src_app_app_reducer__WEBPACK_IMPORTED_MODULE_4__["getIsLogged"]);
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.onSidenavToggle = function () {
        this.sidenavToggle.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "sidenavToggle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/navigation/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.less */ "./src/app/navigation/header/header.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n  <a *ngIf=\"!(isLogged$ | async)\" \n    mat-list-item routerLink=\"/signup\" (click)=\"onClose()\">\n    <mat-icon>face</mat-icon>\n    <span class=\"nav-caption\">Signup</span>\n  </a>\n  <a *ngIf=\"!(isLogged$ | async)\" \n    mat-list-item routerLink=\"/login\" (click)=\"onClose()\">\n    <mat-icon>input</mat-icon>\n    <span class=\"nav-caption\">Login</span>\n  </a>\n  <a *ngIf=\"(isLogged$ | async)\" \n    mat-list-item routerLink=\"/training\" (click)=\"onClose()\">\n    <mat-icon>fitness_center</mat-icon>\n    <span class=\"nav-caption\">Training</span>\n  </a>\n  <mat-list-item *ngIf=\"(isLogged$ | async)\">\n    <button mat-icon-button (click)=\"onLogout()\">\n      <mat-icon>eject</mat-icon>\n      <span class=\"nav-caption\">Logout</span>\n    </button>\n  </mat-list-item>\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: #fff;\n}\na:hover {\n  color: #e3e3e3;\n}\n.nav-caption {\n  display: inline-block;\n  margin-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlbmF2LWxpc3QvRDovcHJvamVjdHMvQW5ndWxhci9maXRuZXNzLXRyYWNrZXItYW5ndWxhci9zcmMvYXBwL25hdmlnYXRpb24vc2lkZW5hdi1saXN0L3NpZGVuYXYtbGlzdC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlbmF2LWxpc3Qvc2lkZW5hdi1saXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDQ0o7QURDSTtFQUNJLGNBQUE7QUNDUjtBREdBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlbmF2LWxpc3Qvc2lkZW5hdi1saXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZTNlM2UzO1xuICAgIH1cbn1cblxuLm5hdi1jYXB0aW9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn0iLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogI2UzZTNlMztcbn1cbi5uYXYtY2FwdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function() { return SidenavListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_app_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.reducer */ "./src/app/app.reducer.ts");





var SidenavListComponent = /** @class */ (function () {
    function SidenavListComponent(authService, store) {
        this.authService = authService;
        this.store = store;
        this.closeSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SidenavListComponent.prototype.ngOnInit = function () {
        this.isLogged$ = this.store.select(src_app_app_reducer__WEBPACK_IMPORTED_MODULE_4__["getIsLogged"]);
    };
    SidenavListComponent.prototype.onClose = function () {
        this.closeSidenav.emit();
    };
    SidenavListComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.onClose();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavListComponent.prototype, "closeSidenav", void 0);
    SidenavListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav-list',
            template: __webpack_require__(/*! ./sidenav-list.component.html */ "./src/app/navigation/sidenav-list/sidenav-list.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-list.component.less */ "./src/app/navigation/sidenav-list/sidenav-list.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], SidenavListComponent);
    return SidenavListComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/ui.actions.ts":
/*!**************************************!*\
  !*** ./src/app/shared/ui.actions.ts ***!
  \**************************************/
/*! exports provided: START_LOADING, STOP_LOADING, StartLoading, StopLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_LOADING", function() { return START_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_LOADING", function() { return STOP_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartLoading", function() { return StartLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopLoading", function() { return StopLoading; });
var START_LOADING = '[UI] START_LOADING';
var STOP_LOADING = '[UI] STOP_LOADING';
var StartLoading = /** @class */ (function () {
    function StartLoading() {
        this.type = START_LOADING;
    }
    return StartLoading;
}());

var StopLoading = /** @class */ (function () {
    function StopLoading() {
        this.type = STOP_LOADING;
    }
    return StopLoading;
}());



/***/ }),

/***/ "./src/app/shared/ui.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/shared/ui.reducer.ts ***!
  \**************************************/
/*! exports provided: uiReducer, getIsPending */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiReducer", function() { return uiReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsPending", function() { return getIsPending; });
/* harmony import */ var _ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.actions */ "./src/app/shared/ui.actions.ts");

var initialState = {
    isPending: false
};
function uiReducer(state, action) {
    if (state === void 0) { state = initialState; }
    // export function uiReducer(state = initialState, action: Action) {
    switch (action.type) {
        case _ui_actions__WEBPACK_IMPORTED_MODULE_0__["START_LOADING"]:
            return {
                isPending: true
            };
        case _ui_actions__WEBPACK_IMPORTED_MODULE_0__["STOP_LOADING"]:
            return {
                isPending: false
            };
        default:
            return state;
    }
}
var getIsPending = function (state) { return state.isPending; };


/***/ }),

/***/ "./src/app/shared/ui.service.ts":
/*!**************************************!*\
  !*** ./src/app/shared/ui.service.ts ***!
  \**************************************/
/*! exports provided: UiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiService", function() { return UiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");


// import { Subject } from 'rxjs';

var UiService = /** @class */ (function () {
    function UiService(snackBar) {
        this.snackBar = snackBar;
    }
    // isPendingChange = new Subject<boolean>();
    UiService.prototype.showError = function (message, action, duration) {
        this.snackBar.open(message, action, { duration: duration });
    };
    UiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], UiService);
    return UiService;
}());



/***/ }),

/***/ "./src/app/training/training.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/training/training.actions.ts ***!
  \**********************************************/
/*! exports provided: AVAILABLE_EXERCISES, PAST_EXERCISES, START_RUNNING_EXERCISE, STOP_RUNNING_EXERCISE, AvailableExercises, PastExercises, StartRunningExercise, StopRunningExercise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVAILABLE_EXERCISES", function() { return AVAILABLE_EXERCISES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAST_EXERCISES", function() { return PAST_EXERCISES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_RUNNING_EXERCISE", function() { return START_RUNNING_EXERCISE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_RUNNING_EXERCISE", function() { return STOP_RUNNING_EXERCISE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableExercises", function() { return AvailableExercises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastExercises", function() { return PastExercises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartRunningExercise", function() { return StartRunningExercise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopRunningExercise", function() { return StopRunningExercise; });
var AVAILABLE_EXERCISES = '[TRAINING] AVAILABLE_EXERCISES';
var PAST_EXERCISES = '[TRAINING] PAST_EXERCISES';
var START_RUNNING_EXERCISE = '[TRAINING] START_RUNNING_EXERCISE';
var STOP_RUNNING_EXERCISE = '[TRAINING] STOP_RUNNING_EXERCISE';
var AvailableExercises = /** @class */ (function () {
    function AvailableExercises(payload) {
        this.payload = payload;
        this.type = AVAILABLE_EXERCISES;
    }
    return AvailableExercises;
}());

var PastExercises = /** @class */ (function () {
    function PastExercises(payload) {
        this.payload = payload;
        this.type = PAST_EXERCISES;
    }
    return PastExercises;
}());

var StartRunningExercise = /** @class */ (function () {
    function StartRunningExercise(payload) {
        this.payload = payload;
        this.type = START_RUNNING_EXERCISE;
    }
    return StartRunningExercise;
}());

var StopRunningExercise = /** @class */ (function () {
    function StopRunningExercise() {
        this.type = STOP_RUNNING_EXERCISE;
    }
    return StopRunningExercise;
}());



/***/ }),

/***/ "./src/app/training/training.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/training/training.reducer.ts ***!
  \**********************************************/
/*! exports provided: trainingReducer, getTrainingState, getAvailableExercises, getPastExercises, getRunningExercise, getIsTraining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trainingReducer", function() { return trainingReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrainingState", function() { return getTrainingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableExercises", function() { return getAvailableExercises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPastExercises", function() { return getPastExercises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRunningExercise", function() { return getRunningExercise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsTraining", function() { return getIsTraining; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _training_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training.actions */ "./src/app/training/training.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var initialState = {
    availableExercises: [],
    pastExercises: [],
    runningExercise: null
};
function trainingReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _training_actions__WEBPACK_IMPORTED_MODULE_1__["AVAILABLE_EXERCISES"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { availableExercises: action.payload });
        case _training_actions__WEBPACK_IMPORTED_MODULE_1__["PAST_EXERCISES"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { pastExercises: action.payload });
        case _training_actions__WEBPACK_IMPORTED_MODULE_1__["START_RUNNING_EXERCISE"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { runningExercise: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.availableExercises.find(function (ex) { return ex.id === action.payload; })) });
        case _training_actions__WEBPACK_IMPORTED_MODULE_1__["STOP_RUNNING_EXERCISE"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { runningExercise: null });
        default:
            return state;
    }
}
var getTrainingState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('training');
var getAvailableExercises = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getTrainingState, function (state) { return state.availableExercises; });
var getPastExercises = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getTrainingState, function (state) { return state.pastExercises; });
var getRunningExercise = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getTrainingState, function (state) { return state.runningExercise; });
var getIsTraining = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getTrainingState, function (state) { return state.runningExercise != null; });


/***/ }),

/***/ "./src/app/training/training.service.ts":
/*!**********************************************!*\
  !*** ./src/app/training/training.service.ts ***!
  \**********************************************/
/*! exports provided: TrainingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingService", function() { return TrainingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/ui.service */ "./src/app/shared/ui.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_ui_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/ui.actions */ "./src/app/shared/ui.actions.ts");
/* harmony import */ var _training_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./training.actions */ "./src/app/training/training.actions.ts");
/* harmony import */ var _training_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./training.reducer */ "./src/app/training/training.reducer.ts");





// import 'rxjs/add/operator/take';
 // rxjs 6+
// import 'rxjs/add/operator/pipe';





var TrainingService = /** @class */ (function () {
    function TrainingService(fireDB, store, uiService) {
        this.fireDB = fireDB;
        this.store = store;
        this.uiService = uiService;
        this.exerciseChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.exercisesChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pastExercises = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.counter = 0;
        this.fireSubsubscriptions = [];
        this.availableExercises = [];
    }
    TrainingService.prototype.getAll = function () {
        var _this = this;
        this.store.dispatch(new _shared_ui_actions__WEBPACK_IMPORTED_MODULE_8__["StartLoading"]());
        // this.uiService.isPendingChange.next(true);
        this.fireSubsubscriptions.push(this.fireDB
            .collection('availableExercises')
            // .valueChanges() // receive just data
            .snapshotChanges() // receive data and metadata
            .map(function (data) {
            return data.map(function (doc) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: doc.payload.doc.id }, doc.payload.doc.data());
            });
        })
            .subscribe(function (exercises) {
            _this.availableExercises = exercises;
            _this.store.dispatch(new _shared_ui_actions__WEBPACK_IMPORTED_MODULE_8__["StopLoading"]());
            _this.store.dispatch(new _training_actions__WEBPACK_IMPORTED_MODULE_9__["AvailableExercises"](exercises));
            // this.exercisesChanged.next([...this.availableExercises]);
            // this.uiService.isPendingChange.next(false);
        }, function (e) {
            console.error(e);
            // add some error notification
            _this.uiService.showError('Fetching exercises failed', null, 3000);
            _this.store.dispatch(new _shared_ui_actions__WEBPACK_IMPORTED_MODULE_8__["StopLoading"]());
            _this.store.dispatch(new _training_actions__WEBPACK_IMPORTED_MODULE_9__["AvailableExercises"](null));
            // this.uiService.isPendingChange.next(false);
            // this.exercisesChanged.next(null);
        }));
    };
    TrainingService.prototype.getRunningExercise = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.runningExercise);
    };
    TrainingService.prototype.getPastExercises = function () {
        var _this = this;
        this.fireSubsubscriptions.push(this.fireDB.collection('pastExercises')
            .valueChanges()
            .subscribe(function (exercises) {
            _this.store.dispatch(new _training_actions__WEBPACK_IMPORTED_MODULE_9__["PastExercises"](exercises));
            // this.pastExercises.next(exercises);
            // console.log('past exercises', exercises);
        }, function (e) { return console.error(e); }));
    };
    TrainingService.prototype.startExercise = function (exerciseID) {
        this.fireDB.doc('availableExercises/' + exerciseID)
            .update({ lastSelected: new Date() }); // last selected from dropdown
        this.runningExercise = this.availableExercises.find(function (ex) { return ex.id === exerciseID; });
        this.store.dispatch(new _training_actions__WEBPACK_IMPORTED_MODULE_9__["StartRunningExercise"](exerciseID));
        // this.exerciseChanged.next({ ...this.runningExercise });
    };
    TrainingService.prototype.completeExercise = function () {
        var _this = this;
        this.store.select(_training_reducer__WEBPACK_IMPORTED_MODULE_10__["getRunningExercise"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (ex) {
            _this.addExerciseToDB(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, ex, { date: new Date(), state: 'completed' }));
            _this.runningExercise = null;
            _this.store.dispatch(new _training_actions__WEBPACK_IMPORTED_MODULE_9__["StopRunningExercise"]());
            // this.exerciseChanged.next(null);
        });
    };
    TrainingService.prototype.cancelExercise = function (progress) {
        var _this = this;
        this.store.select(_training_reducer__WEBPACK_IMPORTED_MODULE_10__["getRunningExercise"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (ex) {
            _this.addExerciseToDB(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, ex, { date: new Date(), state: 'cancelled', duration: ex.duration * (progress / 100), calories: ex.calories * (progress / 100) }));
            _this.runningExercise = null;
            _this.store.dispatch(new _training_actions__WEBPACK_IMPORTED_MODULE_9__["StopRunningExercise"]());
        });
        // this.exerciseChanged.next(null);
    };
    TrainingService.prototype.cancelTrainingSubscriptions = function () {
        this.fireSubsubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    TrainingService.prototype.addExerciseToDB = function (exercise) {
        // console.log('exercise to be added', exercise)
        this.fireDB.collection('pastExercises')
            .add(exercise);
    };
    TrainingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"],
            _shared_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"]])
    ], TrainingService);
    return TrainingService;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome\" fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"50px\" fxLayoutAlign=\"center center\">\n  <section>\n    <h1>ACTIVITY</h1>\n    <p>Stay active and enjoy better health and more fun!</p>\n  </section>\n  <section>\n    <h1>COMMUNITY</h1>\n    <p>Get to know other people who share your passion!</p>\n  </section>\n  <section>\n    <h1>CHALLENGES</h1>\n    <p>Never stop! Dive into new challenges every day.</p>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.less":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9EOi9wcm9qZWN0cy9Bbmd1bGFyL2ZpdG5lc3MtdHJhY2tlci1hbmd1bGFyL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIud2VsY29tZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.less */ "./src/app/welcome/welcome.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBSZoDEdcZ19m2SR7npMbva1Zqsoyyrpp8',
        authDomain: 'fitness-tracker-d2c5b.firebaseapp.com',
        databaseURL: 'https://fitness-tracker-d2c5b.firebaseio.com',
        projectId: 'fitness-tracker-d2c5b',
        storageBucket: 'fitness-tracker-d2c5b.appspot.com',
        messagingSenderId: '996442630814'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\Angular\fitness-tracker-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map