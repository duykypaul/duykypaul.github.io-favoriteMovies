(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");






var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'movies', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_2__["MoviesComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    { path: 'detail/:id', component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_1__["MovieDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  color: MediumSeaGreen;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 150%;\r\n}\r\n\r\nnav a {\r\n  padding: 0.3125em 0.625em;\r\n  text-decoration: none;\r\n  margin-top: 0.625em;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 0.25em;\r\n  margin-right: 1em;\r\n}\r\n\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\n\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\n\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICBjb2xvcjogTWVkaXVtU2VhR3JlZW47XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG5uYXYgYSB7XHJcbiAgcGFkZGluZzogMC4zMTI1ZW0gMC42MjVlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMC42MjVlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbm5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XHJcbiAgY29sb3I6ICM2MDdEOEI7XHJcbn1cclxuXHJcbm5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogIzAzOWJlNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xyXG59XHJcblxyXG5uYXYgYS5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMDM5YmU1O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    {{ title }}!\n  </h1>\n  <nav>\n    <a routerLink=\"/dashboard\">Dashboard</a>\n    <a routerLink=\"/movies\">Movies</a>\n  </nav>\n  <!-- <app-movies> </app-movies>\n  <app-messages></app-messages> -->\n  <router-outlet></router-outlet>\n</div>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'This is my Angular 5 tutorials series';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./movie-search/movie-search.component */ "./src/app/movie-search/movie-search.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__["MoviesComponent"],
                _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_8__["MovieDetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_13__["MovieSearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            providers: [
                _services_movie_service__WEBPACK_IMPORTED_MODULE_9__["MovieService"],
                _services_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-1-4 {\r\n  float: left;\r\n  width: 25%;\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n[class*='col-']:last-of-type {\r\n  padding-right: 0;\r\n}\r\n\r\n.movie-box {\r\n  padding: 20px;\r\n  background: #339987;\r\n  color: white;\r\n  text-align: center;\r\n  border-radius: 20px;\r\n  max-height: 120px;\r\n  min-width: 120px;\r\n}\r\n\r\n.movie-box:hover {\r\n  background: green;\r\n  cursor: pointer;\r\n}\r\n\r\napp-movie-search {\r\n\r\n  margin-top: 3em;\r\n}\r\n\r\n*, *::after, *::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBR0E7O0VBRUUsZUFBZTtBQUNqQjs7QUFDQTtFQUdFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtMS00IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbltjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5tb3ZpZS1ib3gge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzMzOTk4NztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLm1vdmllLWJveDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuYXBwLW1vdmllLXNlYXJjaCB7XHJcblxyXG4gIG1hcmdpbi10b3A6IDNlbTtcclxufVxyXG4qLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Top 4 movies</h3>\n <div>\n  <a *ngFor=\"let movie of movies\" class=\"col-1-4\"\n    style=\"text-decoration: none;\"\n    routerLink=\"/detail/{{movie.id}}\"\n    >\n    <div class=\"movie-box\">\n      <h4>{{movie.name}}</h4>\n    </div>\n  </a>\n</div>\n<app-movie-search></app-movie-search>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/services/movie.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(movieService) {
        this.movieService = movieService;
        this.movies = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    DashboardComponent.prototype.getMovies = function () {
        var _this = this;
        this.movieService.getMovies().subscribe(function (movies) { return _this.movies = movies.slice(1, 5); });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.clear{\r\n  background: #339987;\r\n  color: white;\r\n  border: none;\r\n  padding: 0.3em;\r\n  border-radius: 0.4em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLmNsZWFye1xyXG4gIGJhY2tncm91bmQ6ICMzMzk5ODc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwLjNlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjRlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div\n  *ngIf=\"messageService.messages.length\"\n    style=\"text-align: left\" >\n  <h4>\n    Messages\n  </h4>\n  <button\n    class=\"clear\"\n    (click)=\"messageService.deleteAllMessages()\">\n              Delete all messages\n  </button>\n  <div *ngFor= 'let message of messageService.messages'>{{message}}</div>\n</div>\n -->\n<div *ngIf=\"messageService.messages.length\" style=\"text-align:left;\">\n  <h4>Messages</h4>\n  <button class=\"clear\" (click)=\"messageService.deleteAllMessages()\">Delete all messages</button>\n  <div *ngFor='let message of messageService.messages'> {{message}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details {\r\n  background: mediumseagreen;\r\n  color: white;\r\n  padding: 0.5em;\r\n  margin: 1em;\r\n  max-width: 18em;\r\n  text-align: left;\r\n  font-size: 0.875em;\r\n}\r\n\r\n.btn {\r\n  display: flex;\r\n  justify-content:space-evenly;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWRldGFpbC9tb3ZpZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzIHtcclxuICBiYWNrZ3JvdW5kOiBtZWRpdW1zZWFncmVlbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC41ZW07XHJcbiAgbWFyZ2luOiAxZW07XHJcbiAgbWF4LXdpZHRoOiAxOGVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movie\" class=\"details\">\n  <h3>You selected: {{movie.name}}. <br> Details:</h3>\n  <table style=\"width: 100%\">\n    <tr>\n      <td>Name:</td>\n      <td>\n        <input [(ngModel)]=\"movie.name\" placeholder=\"Name\">\n      </td>\n    </tr>\n    <tr>\n      <td>release year:</td>\n      <td><input [(ngModel)]=\"movie.releaseYear\" placeholder=\"ReleaseYear\"></td>\n    </tr>\n  </table>\n  <div class=\"btn\">\n    <button (click)=\"goBack()\">go back</button>\n    <button (click)=\"save()\">save</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.ts ***!
  \********************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/movie */ "./src/models/movie.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(route, movieService, location) {
        this.route = route;
        this.movieService = movieService;
        this.location = location;
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        this.getMovieFromRoute();
    };
    MovieDetailComponent.prototype.getMovieFromRoute = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        console.log("this.route.snapshot.paramMap = " + JSON.stringify(this.route.snapshot.paramMap));
        this.movieService.getMovieFromId(id).subscribe(function (movie) { return _this.movie = movie; });
    };
    MovieDetailComponent.prototype.save = function () {
        var _this = this;
        this.movieService.updateMovie(this.movie).subscribe(function () { return _this.goBack(); });
    };
    MovieDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_movie__WEBPACK_IMPORTED_MODULE_3__["Movie"])
    ], MovieDetailComponent.prototype, "movie", void 0);
    MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! ./movie-detail.component.html */ "./src/app/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__(/*! ./movie-detail.component.css */ "./src/app/movie-detail/movie-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());



/***/ }),

/***/ "./src/app/movie-search/movie-search.component.css":
/*!*********************************************************!*\
  !*** ./src/app/movie-search/movie-search.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#movies {\r\n  float: left;\r\n}\r\n\r\n.movies {\r\n  background: white;\r\n  padding: 0.5em 1em 0.5em 1.5em;\r\n  margin: 1em;\r\n  max-width: 16em;\r\n}\r\n\r\n.movies .movieListItem {\r\n  font-size: 0.875em;\r\n  /* 14px/16=0.875em */\r\n  font-family: Georgia, Serif;\r\n  background: #cce5ff;\r\n  padding: 0.3em;\r\n  margin: 0.2em;\r\n  text-align: center;\r\n  list-style: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtc2VhcmNoL21vdmllLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZS1zZWFyY2gvbW92aWUtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbW92aWVzIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLm1vdmllcyB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMC41ZW0gMWVtIDAuNWVtIDEuNWVtO1xyXG4gIG1hcmdpbjogMWVtO1xyXG4gIG1heC13aWR0aDogMTZlbTtcclxufVxyXG5cclxuLm1vdmllcyAubW92aWVMaXN0SXRlbSB7XHJcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gIC8qIDE0cHgvMTY9MC44NzVlbSAqL1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBTZXJpZjtcclxuICBiYWNrZ3JvdW5kOiAjY2NlNWZmO1xyXG4gIHBhZGRpbmc6IDAuM2VtO1xyXG4gIG1hcmdpbjogMC4yZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/movie-search/movie-search.component.html":
/*!**********************************************************!*\
  !*** ./src/app/movie-search/movie-search.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"movies\">\n  <h4>Movie Search</h4>\n  <div class=\"box\">\n    <input #searchBox (keyup)=\"search(searchBox.value)\">\n    <ul class=\"movies\">\n      <li class=\"movieListItem\" *ngFor=\"let movie of movies$ | async\">\n        <a routerLink='/detail/{{movie.id}}'>\n          {{movie.name}}\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/movie-search/movie-search.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie-search/movie-search.component.ts ***!
  \********************************************************/
/*! exports provided: MovieSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieSearchComponent", function() { return MovieSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/services/movie.service.ts");





var MovieSearchComponent = /** @class */ (function () {
    function MovieSearchComponent(movieService) {
        this.movieService = movieService;
        this.searchedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    MovieSearchComponent.prototype.search = function (searchedString) {
        console.log("searchedString = " + searchedString);
        this.searchedSubject.next(searchedString);
    };
    MovieSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movies$ = this.searchedSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), // wait 300ms after each keystroke before considering the searched string
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), // ignore new string if same as previous string
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (searchedString) { return _this.movieService.searchMovies(searchedString); }));
    };
    MovieSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-search',
            template: __webpack_require__(/*! ./movie-search.component.html */ "./src/app/movie-search/movie-search.component.html"),
            styles: [__webpack_require__(/*! ./movie-search.component.css */ "./src/app/movie-search/movie-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"]])
    ], MovieSearchComponent);
    return MovieSearchComponent;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\r\n  background: mediumseagreen !important;\r\n  color: white;\r\n}\r\n\r\n.parent {\r\n  display: flex;\r\n}\r\n\r\n.parent .movies {\r\n  background: #3399ff;\r\n  padding: 0.5em 1em 0.5em 1.5em;\r\n  margin: 1em;\r\n  max-width: 90%;\r\n  /* min-width: 17em; */\r\n}\r\n\r\n.parent .movies li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.parent .movies .movieListItem {\r\n  font-size: 0.875em;\r\n  /* 14px/16=0.875em */\r\n  font-family: Georgia, Serif;\r\n  background: #cce5ff;\r\n  padding: 0.3em;\r\n  margin: 0.2em;\r\n  text-align: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQXFDO0VBQ3JDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kOiBtZWRpdW1zZWFncmVlbiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBhcmVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnBhcmVudCAubW92aWVzIHtcclxuICBiYWNrZ3JvdW5kOiAjMzM5OWZmO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDFlbSAwLjVlbSAxLjVlbTtcclxuICBtYXJnaW46IDFlbTtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICAvKiBtaW4td2lkdGg6IDE3ZW07ICovXHJcbn1cclxuXHJcbi5wYXJlbnQgLm1vdmllcyBsaSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5wYXJlbnQgLm1vdmllcyAubW92aWVMaXN0SXRlbSB7XHJcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gIC8qIDE0cHgvMTY9MC44NzVlbSAqL1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBTZXJpZjtcclxuICBiYWNrZ3JvdW5kOiAjY2NlNWZmO1xyXG4gIHBhZGRpbmc6IDAuM2VtO1xyXG4gIG1hcmdpbjogMC4yZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>My favorite movies</h2>\n<div style=\"text-align: left;\">\n    <table style=\"width: 300px\">\n        <tr>\n            <td>New movie's name:</td>\n            <td>\n                <input #movieName placeholder=\"name\">\n            </td>\n        </tr>\n        <tr>\n            <td>release year: </td>\n            <input #releaseYear placeholder=\"release year\">\n        </tr>\n        <tr>\n            <button (click)=\"add(movieName.value, releaseYear.value); movieName.value=''; releaseYear.value=''\">\n                add\n            </button>\n        </tr>\n    </table>\n</div>\n<div class=\"parent\">\n    <ol class=\"movies\">\n        <li class=\"movieListItem\" *ngFor=\"let eachMovie of movies\">\n            <a routerLink=\"/detail/{{eachMovie.id}}\" style=\"text-decoration: none;\">\n                {{eachMovie.name}} - {{eachMovie.releaseYear}}\n            </a>\n            <button (click)=\"delete(eachMovie.id)\" style=\"height: 120%\">X</button>\n        </li>\n    </ol>\n    <!-- <app-movie-detail [movie]=\"selectedMovie\"></app-movie-detail> -->\n</div>\n"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/movie */ "./src/models/movie.ts");




// import { fakeMovies } from '../fake-movies';
var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(movieService) {
        this.movieService = movieService;
    }
    MoviesComponent.prototype.getMoviesFromService = function () {
        var _this = this;
        this.movieService.getMovies().subscribe(function (updatedMovies) { return _this.movies = updatedMovies; });
    };
    MoviesComponent.prototype.ngOnInit = function () {
        this.getMoviesFromService();
    };
    MoviesComponent.prototype.add = function (name, releaseYear) {
        var _this = this;
        name = name.trim();
        if (Number.isNaN(Number(releaseYear)) || !name || Number(releaseYear) === 0) {
            alert('Name must not be blank, Release year must be a number');
            return;
        }
        var newMovie = new _models_movie__WEBPACK_IMPORTED_MODULE_3__["Movie"]();
        newMovie.name = name;
        newMovie.releaseYear = Number(releaseYear);
        this.movieService.addMovie(newMovie)
            .subscribe(function (insertedMovie) {
            _this.movies.push(insertedMovie);
        });
    };
    MoviesComponent.prototype.delete = function (id) {
        var _this = this;
        this.movieService.deleteMovie(id).subscribe(function (_) {
            _this.movies = _this.movies.filter(function (eachMovie) { return eachMovie.id !== id; });
        });
    };
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.deleteAllMessages = function () {
        this.messages = [];
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/movie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/movie */ "./src/models/movie.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





//Get data asynchronously with Observable


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MovieService = /** @class */ (function () {
    function MovieService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.moviesURL = 'http://5c89d21841fb3f001434be46.mockapi.io/api/movies';
    }
    MovieService.prototype.getMovies = function () {
        // this.messageService.add(`${new Date().toLocaleString()}. Get movie list`);
        // return of(fakeMovies);
        return this.http.get(this.moviesURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (receivedMovies) { return console.log("receivedMovies = " + JSON.stringify(receivedMovies)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]); }));
    };
    MovieService.prototype.getMovieFromId = function (id) {
        // return of(fakeMovies.find(movie => movie.id === id));
        var url = this.moviesURL + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (selectedMovies) { return console.log("Selected movies = " + JSON.stringify(selectedMovies)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _models_movie__WEBPACK_IMPORTED_MODULE_3__["Movie"]()); }));
    };
    MovieService.prototype.updateMovie = function (movie) {
        // return of(fakeMovies.find(movie => movie.id === id));
        return this.http.put(this.moviesURL + "/" + movie.id, movie, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (updateMovie) { return console.log("Update movie = " + JSON.stringify(updateMovie)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _models_movie__WEBPACK_IMPORTED_MODULE_3__["Movie"]()); }));
    };
    MovieService.prototype.addMovie = function (newMovie) {
        return this.http.post(this.moviesURL, newMovie, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (movie) { return console.log("inserted movie = " + JSON.stringify(movie)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _models_movie__WEBPACK_IMPORTED_MODULE_3__["Movie"]()); }));
    };
    MovieService.prototype.deleteMovie = function (id) {
        // return of(fakeMovies.find(movie => movie.id === id));
        var url = this.moviesURL + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (_) { return console.log("Deleted movie with id = " + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null); }));
    };
    MovieService.prototype.searchMovies = function (typedString) {
        if (!typedString.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        }
        return this.http.get(this.moviesURL + "?name_like=" + typedString).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (foundedMovies) { return console.log("foundedMovies = " + JSON.stringify(foundedMovies)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null); }));
    };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], MovieService);
    return MovieService;
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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/models/movie.ts":
/*!*****************************!*\
  !*** ./src/models/movie.ts ***!
  \*****************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\duyky\web\angular\angular5\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map