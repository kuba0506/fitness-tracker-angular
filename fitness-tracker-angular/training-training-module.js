(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["training-training-module"],{

/***/ "./src/app/training/current-training/current-training.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/training/current-training/current-training.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"current-training\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <mat-progress-spinner mode=\"determinate\" [value]=\"progress\"></mat-progress-spinner>\n  <h1>{{progress}}%</h1>\n  <p>Keep on going, you can do it!</p>\n  <button mat-raised-button color=\"accent\" (click)=\"stopExercise()\">Stop</button>\n</section>\n"

/***/ }),

/***/ "./src/app/training/current-training/current-training.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/training/current-training/current-training.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".current-training {\n  padding: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhaW5pbmcvY3VycmVudC10cmFpbmluZy9EOi9wcm9qZWN0cy9Bbmd1bGFyL2ZpdG5lc3MtdHJhY2tlci1hbmd1bGFyL3NyYy9hcHAvdHJhaW5pbmcvY3VycmVudC10cmFpbmluZy9jdXJyZW50LXRyYWluaW5nLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC90cmFpbmluZy9jdXJyZW50LXRyYWluaW5nL2N1cnJlbnQtdHJhaW5pbmcuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90cmFpbmluZy9jdXJyZW50LXRyYWluaW5nL2N1cnJlbnQtdHJhaW5pbmcuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VycmVudC10cmFpbmluZyB7XG4gICAgcGFkZGluZzogMzBweDtcbn0iLCIuY3VycmVudC10cmFpbmluZyB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/training/current-training/current-training.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/training/current-training/current-training.component.ts ***!
  \*************************************************************************/
/*! exports provided: CurrentTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentTrainingComponent", function() { return CurrentTrainingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _stop_training_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stop-training.component */ "./src/app/training/current-training/stop-training.component.ts");
/* harmony import */ var _training_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../training.service */ "./src/app/training/training.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _training_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../training.reducer */ "./src/app/training/training.reducer.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







 // rxjs 6+
var CurrentTrainingComponent = /** @class */ (function () {
    function CurrentTrainingComponent(dialog, store, trainingService) {
        this.dialog = dialog;
        this.store = store;
        this.trainingService = trainingService;
        this.progress = 0;
    }
    CurrentTrainingComponent.prototype.ngOnInit = function () {
        this.startOrResumeExercise();
    };
    CurrentTrainingComponent.prototype.stopExercise = function () {
        var _this = this;
        // stop counting
        if (this.interval) {
            clearInterval(this.interval);
        }
        // open dialog
        var dialog = this.dialog.open(_stop_training_component__WEBPACK_IMPORTED_MODULE_3__["StopTrainingComponent"], {
            data: {
                progress: this.progress
            }
        });
        // decide upon user selction to resume or stop
        dialog.afterClosed().subscribe(function (result) {
            if (result === true) {
                _this.trainingService.cancelExercise(_this.progress);
            }
            else {
                _this.startOrResumeExercise();
            }
        });
    };
    CurrentTrainingComponent.prototype.startOrResumeExercise = function () {
        var _this = this;
        this.store.select(_training_reducer__WEBPACK_IMPORTED_MODULE_6__["getRunningExercise"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (ex) {
            var step = _this.trainingService.getRunningExercise().duration / 100 * 1000;
            _this.interval = setInterval(function () {
                _this.progress = _this.progress + 1;
                if (_this.progress >= 100) {
                    _this.trainingService.completeExercise();
                    clearInterval(_this.interval);
                }
            }, step);
        });
    };
    CurrentTrainingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-current-training',
            template: __webpack_require__(/*! ./current-training.component.html */ "./src/app/training/current-training/current-training.component.html"),
            styles: [__webpack_require__(/*! ./current-training.component.less */ "./src/app/training/current-training/current-training.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _training_service__WEBPACK_IMPORTED_MODULE_4__["TrainingService"]])
    ], CurrentTrainingComponent);
    return CurrentTrainingComponent;
}());



/***/ }),

/***/ "./src/app/training/current-training/stop-training.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/training/current-training/stop-training.component.ts ***!
  \**********************************************************************/
/*! exports provided: StopTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopTrainingComponent", function() { return StopTrainingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var StopTrainingComponent = /** @class */ (function () {
    function StopTrainingComponent(passedData) {
        this.passedData = passedData;
    }
    StopTrainingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stop-training',
            template: "<h1 mat-dialog-title>Are you sure?</h1>\n                <p>You already got {{passedData.progress}}%</p>\n                <mat-dialog-actions>\n                    <button mat-button [mat-dialog-close]=\"true\">Yes</button>\n                    <button mat-button [mat-dialog-close]=\"false\">No</button>\n                </mat-dialog-actions>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], StopTrainingComponent);
    return StopTrainingComponent;
}());



/***/ }),

/***/ "./src/app/training/new-training/new-training.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/training/new-training/new-training.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout fxLayoutAlign=\"center\" class=\"new-training\"> \n  <form (ngSubmit)=\"startExercise(form)\" #form=\"ngForm\"> \n    <mat-card fxflex.xs=\"100%\" fxFlex=\"400px\">\n      <mat-card-title fxLayoutAlign=\"center\">Time to start a workout</mat-card-title>\n      <mat-card-content *ngIf=\"!(isPending$ | async) && (exercises$ | async)\" fxLayoutAlign=\"center\">\n        <mat-form-field>\n          <mat-select placeholder=\"Select type of training\" ngModel name=\"exercise\" required>\n            <mat-option *ngFor=\"let exercise of (exercises$ | async)\" [value]=\"exercise.id\">\n              {{exercise.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center\">\n        <button *ngIf=\"!(isPending$ | async)  && (exercises$ | async)\" type=\"submit\" mat-button [disabled]=\"form.invalid\">Start</button>\n        <button *ngIf=\"!(isPending$ | async) && !(exercises$ | async)\" type=\"button\" (ngClick)=\"getAllExercises()\" mat-button>Try again</button>\n        <mat-spinner *ngIf=\"isPending$ | async\"></mat-spinner>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</section>"

/***/ }),

/***/ "./src/app/training/new-training/new-training.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/training/new-training/new-training.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-training {\n  padding: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhaW5pbmcvbmV3LXRyYWluaW5nL0Q6L3Byb2plY3RzL0FuZ3VsYXIvZml0bmVzcy10cmFja2VyLWFuZ3VsYXIvc3JjL2FwcC90cmFpbmluZy9uZXctdHJhaW5pbmcvbmV3LXRyYWluaW5nLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC90cmFpbmluZy9uZXctdHJhaW5pbmcvbmV3LXRyYWluaW5nLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdHJhaW5pbmcvbmV3LXRyYWluaW5nL25ldy10cmFpbmluZy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctdHJhaW5pbmcge1xuICAgIHBhZGRpbmc6IDMwcHg7XG59IiwiLm5ldy10cmFpbmluZyB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/training/new-training/new-training.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/training/new-training/new-training.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTrainingComponent", function() { return NewTrainingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _training_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../training.service */ "./src/app/training/training.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _training_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../training.reducer */ "./src/app/training/training.reducer.ts");



// import { map } from 'rxjs/operators'; // rxjs 6+




var NewTrainingComponent = /** @class */ (function () {
    function NewTrainingComponent(trainingService, store) {
        this.trainingService = trainingService;
        this.store = store;
        this.subscriptionContainer = [];
    }
    NewTrainingComponent.prototype.ngOnInit = function () {
        this.isPending$ = this.store.select(src_app_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getisPending"]);
        this.exercises$ = this.store.select(_training_reducer__WEBPACK_IMPORTED_MODULE_6__["getAvailableExercises"]);
        this.getAllExercises();
        // this.subscriptionContainer.push(
        //   this.trainingService.exercisesChanged
        //     .subscribe(exercises => (this.exercises = exercises))
        // );
    };
    // ngOnDestroy() {
    //   if (this.subscriptionContainer.length > 0) {
    //     this.subscriptionContainer.forEach(sub => sub.unsubscribe());
    //   }
    // }
    NewTrainingComponent.prototype.startExercise = function (form) {
        this.trainingService.startExercise(form.value.exercise);
    };
    NewTrainingComponent.prototype.getAllExercises = function () {
        this.trainingService.getAll();
    };
    NewTrainingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-training',
            template: __webpack_require__(/*! ./new-training.component.html */ "./src/app/training/new-training/new-training.component.html"),
            styles: [__webpack_require__(/*! ./new-training.component.less */ "./src/app/training/new-training/new-training.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_training_service__WEBPACK_IMPORTED_MODULE_2__["TrainingService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], NewTrainingComponent);
    return NewTrainingComponent;
}());



/***/ }),

/***/ "./src/app/training/past-training/past-training.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/training/past-training/past-training.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center center\">\n    <mat-form-field fxFlex=\"40%\">\n        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"filter\">\n    </mat-form-field>\n</div>\n\n<mat-table [dataSource]=\"dataSource\" matSort>\n    <ng-container matColumnDef=\"date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{element.date.toDate() | date}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{element.name}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"calories\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Calories</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{element.calories | number}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"duration\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Duration</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{element.duration | number}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"state\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>State</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{element.state}}</mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n\n<mat-paginator [pageSizeOptions]=\"[1, 5, 10]\" [pageSize]=\"10\"></mat-paginator>"

/***/ }),

/***/ "./src/app/training/past-training/past-training.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/training/past-training/past-training.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWluaW5nL3Bhc3QtdHJhaW5pbmcvcGFzdC10cmFpbmluZy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/training/past-training/past-training.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/training/past-training/past-training.component.ts ***!
  \*******************************************************************/
/*! exports provided: PastTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastTrainingComponent", function() { return PastTrainingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _training_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../training.service */ "./src/app/training/training.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _training_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../training.reducer */ "./src/app/training/training.reducer.ts");






var PastTrainingComponent = /** @class */ (function () {
    function PastTrainingComponent(trainingService, store) {
        this.trainingService = trainingService;
        this.store = store;
        this.displayedColumns = ['date', 'name', 'calories', 'duration', 'state'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    PastTrainingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trainingService.getPastExercises();
        this.store.select(_training_reducer__WEBPACK_IMPORTED_MODULE_5__["getPastExercises"]).subscribe(function (exercises) {
            _this.dataSource.data = exercises;
        });
    };
    PastTrainingComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.pagination;
    };
    PastTrainingComponent.prototype.doFilter = function (query) {
        this.dataSource.filter = query.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], PastTrainingComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], PastTrainingComponent.prototype, "pagination", void 0);
    PastTrainingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-past-training',
            template: __webpack_require__(/*! ./past-training.component.html */ "./src/app/training/past-training/past-training.component.html"),
            styles: [__webpack_require__(/*! ./past-training.component.less */ "./src/app/training/past-training/past-training.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_training_service__WEBPACK_IMPORTED_MODULE_2__["TrainingService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], PastTrainingComponent);
    return PastTrainingComponent;
}());



/***/ }),

/***/ "./src/app/training/training-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/training/training-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TrainingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingRoutingModule", function() { return TrainingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _training_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./training.component */ "./src/app/training/training.component.ts");




var routes = [
    { path: '', component: _training_component__WEBPACK_IMPORTED_MODULE_3__["TrainingComponent"] }
];
var TrainingRoutingModule = /** @class */ (function () {
    function TrainingRoutingModule() {
    }
    TrainingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TrainingRoutingModule);
    return TrainingRoutingModule;
}());



/***/ }),

/***/ "./src/app/training/training.component.html":
/*!**************************************************!*\
  !*** ./src/app/training/training.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group *ngIf=\"!(ongoingTraining$ | async)\">\n  <mat-tab label=\"New Exercise\">\n    <app-new-training></app-new-training>\n  </mat-tab>\n  <mat-tab label=\"Past Exercises\">\n    <app-past-training></app-past-training>\n  </mat-tab>\n</mat-tab-group>\n\n<app-current-training *ngIf=\"(ongoingTraining$ | async)\"></app-current-training>"

/***/ }),

/***/ "./src/app/training/training.component.less":
/*!**************************************************!*\
  !*** ./src/app/training/training.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWluaW5nL3RyYWluaW5nLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/training/training.component.ts":
/*!************************************************!*\
  !*** ./src/app/training/training.component.ts ***!
  \************************************************/
/*! exports provided: TrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingComponent", function() { return TrainingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _training_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training.service */ "./src/app/training/training.service.ts");
/* harmony import */ var _training_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./training.reducer */ "./src/app/training/training.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");





var TrainingComponent = /** @class */ (function () {
    // ongoingTraining = false;
    function TrainingComponent(trainingService, store) {
        this.trainingService = trainingService;
        this.store = store;
    }
    TrainingComponent.prototype.ngOnInit = function () {
        this.ongoingTraining$ = this.store.select(_training_reducer__WEBPACK_IMPORTED_MODULE_3__["getIsTraining"]);
        // this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(exercise => {
        //   if (exercise) {
        //     this.ongoingTraining = true;
        //   } else {
        //     this.ongoingTraining = false;
        //   }
        // });
    };
    TrainingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-training',
            template: __webpack_require__(/*! ./training.component.html */ "./src/app/training/training.component.html"),
            styles: [__webpack_require__(/*! ./training.component.less */ "./src/app/training/training.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_training_service__WEBPACK_IMPORTED_MODULE_2__["TrainingService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], TrainingComponent);
    return TrainingComponent;
}());



/***/ }),

/***/ "./src/app/training/training.module.ts":
/*!*********************************************!*\
  !*** ./src/app/training/training.module.ts ***!
  \*********************************************/
/*! exports provided: TrainingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingModule", function() { return TrainingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _training_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training.component */ "./src/app/training/training.component.ts");
/* harmony import */ var _current_training_current_training_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./current-training/current-training.component */ "./src/app/training/current-training/current-training.component.ts");
/* harmony import */ var _new_training_new_training_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-training/new-training.component */ "./src/app/training/new-training/new-training.component.ts");
/* harmony import */ var _past_training_past_training_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./past-training/past-training.component */ "./src/app/training/past-training/past-training.component.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _current_training_stop_training_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./current-training/stop-training.component */ "./src/app/training/current-training/stop-training.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _training_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./training-routing.module */ "./src/app/training/training-routing.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _training_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./training.reducer */ "./src/app/training/training.reducer.ts");












var TrainingModule = /** @class */ (function () {
    function TrainingModule() {
    }
    TrainingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _training_component__WEBPACK_IMPORTED_MODULE_2__["TrainingComponent"],
                _current_training_current_training_component__WEBPACK_IMPORTED_MODULE_3__["CurrentTrainingComponent"],
                _new_training_new_training_component__WEBPACK_IMPORTED_MODULE_4__["NewTrainingComponent"],
                _past_training_past_training_component__WEBPACK_IMPORTED_MODULE_5__["PastTrainingComponent"],
                _current_training_stop_training_component__WEBPACK_IMPORTED_MODULE_7__["StopTrainingComponent"]
            ],
            imports: [
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _training_routing_module__WEBPACK_IMPORTED_MODULE_9__["TrainingRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature('training', _training_reducer__WEBPACK_IMPORTED_MODULE_11__["trainingReducer"]) // like in appReducer
            ],
            entryComponents: [_current_training_stop_training_component__WEBPACK_IMPORTED_MODULE_7__["StopTrainingComponent"]]
        })
    ], TrainingModule);
    return TrainingModule;
}());



/***/ })

}]);
//# sourceMappingURL=training-training-module.js.map