webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"position-wrap\">\n  <div class=\"about-wrap\" *ngIf=\"about\">\n    <div class=\"about-text\">\n      <p *ngFor=\"let a of about['about.about'].value\">{{ a.text }}</p>\n    </div>\n\n    <div class=\"address\">\n      <p *ngFor=\"let p of about['about.address'].value\"> {{ p.text }}</p>\n      <p>Tel. {{ about[\"about.phone-number\"].value[\"0\"].text}} </p>\n    </div>\n\n    <div class=\"open-hours\">\n      <p>Gallery Hours</p>\n      <p *ngFor=\"let p of about['about.open-hours'].value\">\n        {{ p.text }}\n      </p>\n    </div>\n\n    <div class=\"general-contact\">\n      <p>General Contact</p>\n      <a href=\"mailto:{{ about['about.general-contact'].value['0'].text}}\">\n        {{ about[\"about.general-contact\"].value[\"0\"].text}}\n      </a>\n    </div>\n\n    <div class=\"sales-contact\">\n      <p>Sales Inquiries</p>\n      <a href=\"mailto:{{ about['about.sales-inquiries'].value['0'].text}}\">\n        {{ about[\"about.sales-inquiries\"].value[\"0\"].text}}\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.position-wrap {\n  height: 100vh;\n  width: 100vw;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .position-wrap .about-wrap {\n    overflow: scroll;\n    width: 40rem;\n    margin-left: 20%;\n    margin-top: auto;\n    margin-bottom: 25px; }\n    .position-wrap .about-wrap p {\n      font-size: 12px;\n      line-height: 20px; }\n    .position-wrap .about-wrap div {\n      margin: 2rem 0; }\n      .position-wrap .about-wrap div:last-child {\n        margin-bottom: 0; }\n\n@media (max-width: 767px) {\n  .position-wrap .about-wrap {\n    width: 100%;\n    padding: 0px 1rem;\n    margin-top: 80px;\n    margin-left: 0;\n    padding-bottom: 5rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__ = __webpack_require__("../../../../../src/app/shared/prismic.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(_feedService) {
        this._feedService = _feedService;
        this._getUrl = 'api/prismic/get/';
    }
    AboutComponent.prototype.getAbout = function (page) {
        var _this = this;
        this._feedService.getFeed('about', page)
            .subscribe(function (res) {
            _this.about = res.results["0"].data;
            console.log(_this.about);
        }, function (error) {
            console.log('there was an error in the artist feed component im very sorry');
        });
    };
    AboutComponent.prototype.ngOnInit = function () {
        this.getAbout(0);
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/animations/fade-in.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var fadeInAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('fadeInAnimation', [
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])(':enter', [
        // styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* style */])({ opacity: 0 }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.9s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* style */])({ opacity: 1 }))
    ])
]);
//# sourceMappingURL=fade-in.animation.js.map

/***/ }),

/***/ "../../../../../src/app/animations/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fade_in_animation__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-nav></app-nav>\n<router-outlet ></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__ = __webpack_require__("../../../../../src/app/shared/prismic.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_feedService) {
        this._feedService = _feedService;
        this.title = 'app';
        this._getUrl = 'api/prismic/get/';
    }
    AppComponent.prototype.getPage = function (page) {
        this._feedService.getFeed('page', page)
            .subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.log('there was an error im very sorry');
        });
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_prismic_service__ = __webpack_require__("../../../../../src/app/shared/prismic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__artist_artists_artists_component__ = __webpack_require__("../../../../../src/app/artist/artists/artists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__exhibitions_exhibition_feed_exhibition_feed_component__ = __webpack_require__("../../../../../src/app/exhibitions/exhibition-feed/exhibition-feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__artist_artist_detail_artist_detail_component__ = __webpack_require__("../../../../../src/app/artist/artist-detail/artist-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_filter_pipe_pipe__ = __webpack_require__("../../../../../src/app/shared/filter-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__exhibitions_exhibition_detail_exhibition_detail_component__ = __webpack_require__("../../../../../src/app/exhibitions/exhibition-detail/exhibition-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__happenings_happenings_component__ = __webpack_require__("../../../../../src/app/happenings/happenings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_7__artist_artists_artists_component__["a" /* ArtistsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__exhibitions_exhibition_feed_exhibition_feed_component__["a" /* ExhibitionFeedComponent */],
            __WEBPACK_IMPORTED_MODULE_11__artist_artist_detail_artist_detail_component__["a" /* ArtistDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__shared_filter_pipe_pipe__["a" /* FilterPipePipe */],
            __WEBPACK_IMPORTED_MODULE_13__exhibitions_exhibition_detail_exhibition_detail_component__["a" /* ExhibitionDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__happenings_happenings_component__["a" /* HappeningsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__about_about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                { path: 'artists', component: __WEBPACK_IMPORTED_MODULE_7__artist_artists_artists_component__["a" /* ArtistsComponent */] },
                { path: 'artists/:artist', component: __WEBPACK_IMPORTED_MODULE_11__artist_artist_detail_artist_detail_component__["a" /* ArtistDetailComponent */] },
                { path: 'exhibitions/:exhibition', component: __WEBPACK_IMPORTED_MODULE_13__exhibitions_exhibition_detail_exhibition_detail_component__["a" /* ExhibitionDetailComponent */] },
                { path: 'exhibitions', component: __WEBPACK_IMPORTED_MODULE_8__exhibitions_exhibition_feed_exhibition_feed_component__["a" /* ExhibitionFeedComponent */] },
                { path: 'happenings', component: __WEBPACK_IMPORTED_MODULE_14__happenings_happenings_component__["a" /* HappeningsComponent */] },
                { path: 'about', component: __WEBPACK_IMPORTED_MODULE_15__about_about_component__["a" /* AboutComponent */] },
                { path: '', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] }
                // { path: 'fashionweek/:id', canActivate: [ ProductDetailGuard ], component: ProductDetailComponent },
            ])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__shared_prismic_service__["a" /* PrismicService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/artist/artist-detail/artist-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-wrap\" *ngIf=\"detail\" [@fadeInAnimation]=\"true\">\n  <div class=\"bio\">\n    <p *ngFor=\"let p of detail.data['artist.description'].value\">\n      {{p.text}}\n    </p>\n    <div class=\"links\">\n      <a target=\"_blank\" *ngIf=\"detail.data['artist.artist-cv']?.value.file.url\" href=\"{{detail.data['artist.artist-cv'].value.file.url}}\" >Download CV</a>\n      <a target=\"_blank\" *ngIf=\"detail.data['artist.artist-press']?.value.file.url\" href=\"{{detail.data['artist.artist-press'].value.file.url}}\" >Press</a>\n\n    </div>\n  </div>\n  <div class=\"img-gallery\">\n    <div *ngFor=\"let img of galleryArray\">\n      <img [src]=\"img.gallery_image.value.main.url\" alt=\"\">\n      <p>{{ img.image_captions.value[\"0\"].text }}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/artist/artist-detail/artist-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.detail-wrap {\n  width: 100%;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n  .detail-wrap .img-gallery {\n    width: 45%;\n    overflow: scroll;\n    padding-top: 4rem; }\n    .detail-wrap .img-gallery div {\n      text-align: right; }\n      .detail-wrap .img-gallery div img {\n        width: 100%; }\n      .detail-wrap .img-gallery div p {\n        margin-right: 1rem; }\n  .detail-wrap .bio {\n    width: 40%;\n    padding: 0 5rem;\n    margin-top: auto;\n    margin-bottom: 1rem; }\n    .detail-wrap .bio p {\n      font-size: 11px;\n      line-height: 18px; }\n    .detail-wrap .bio .links {\n      text-transform: uppercase;\n      margin-top: 1rem; }\n      .detail-wrap .bio .links a {\n        display: inline-block;\n        margin-right: 1rem; }\n\n@media (max-width: 1280px) {\n  .detail-wrap {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: auto;\n    margin-top: 25px;\n    width: 80%;\n    margin-left: auto; }\n    .detail-wrap .img-gallery {\n      width: 100%;\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1; }\n      .detail-wrap .img-gallery div {\n        text-align: right;\n        margin-top: 2rem; }\n    .detail-wrap .bio {\n      width: 100%;\n      margin-right: auto;\n      text-align: left;\n      padding: 0 4rem;\n      padding-left: 0;\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2;\n      margin-top: 25px; } }\n\n@media (max-width: 767px) {\n  .detail-wrap {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: auto;\n    margin-top: 25px;\n    width: 100%;\n    margin-bottom: 3rem; }\n    .detail-wrap .img-gallery {\n      width: 100%;\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1; }\n      .detail-wrap .img-gallery div {\n        text-align: center;\n        margin-top: 2rem; }\n    .detail-wrap .bio {\n      width: 100%;\n      margin-right: auto;\n      text-align: left;\n      padding: 0 1rem;\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2;\n      margin-top: 25px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artist/artist-detail/artist-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__ = __webpack_require__("../../../../../src/app/shared/prismic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_index__ = __webpack_require__("../../../../../src/app/animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistDetailComponent = (function () {
    function ArtistDetailComponent(_route, _router, _feedService) {
        this._route = _route;
        this._router = _router;
        this._feedService = _feedService;
    }
    ArtistDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.params.artist;
        var type = this._route.snapshot.url["0"].path;
        this._feedService.getSingle('artist', id)
            .subscribe(function (d) {
            _this.detail = d.results[0];
            _this.galleryArray = d.results[0].data["artist.body"].value["0"].repeat;
        }, function (error) { return _this.error = error; });
    };
    return ArtistDetailComponent;
}());
ArtistDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-artist-detail',
        template: __webpack_require__("../../../../../src/app/artist/artist-detail/artist-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/artist/artist-detail/artist-detail.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_3__animations_index__["a" /* fadeInAnimation */]],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */]) === "function" && _c || Object])
], ArtistDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=artist-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/artist/artists/artists.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"artist-wrap\">\n  <div class=\"img-div\">\n    <!-- <img [src]=\"\"> -->\n  </div>\n  <div class=\"artist\" *ngFor=\"let artist of artists\">\n    <a [routerLink]=\"[artist.uid]\">\n      <h3\n        (mouseover)=\"onMouseOver(artist.data['artist.body'].value['0'].repeat['0'].gallery_image.value.main.url)\"\n        (mouseout)=\"onMouseOut(' ')\"\n      >\n        {{ artist.data[\"artist.title\"].value[\"0\"].text }}\n      </h3>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/artist/artists/artists.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.visibility {\n  opacity: 0.6 !important; }\n\n.artist-wrap {\n  width: 60%;\n  margin-left: 20%;\n  margin-top: 150px; }\n  .artist-wrap a {\n    z-index: 1000;\n    position: relative; }\n  .artist-wrap h3 {\n    font-size: 14px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    margin: .5rem 0; }\n  .artist-wrap .img-div {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: absolute;\n    left: 0;\n    top: -150px;\n    width: 100vw;\n    height: 100vh;\n    z-index: 0;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    opacity: 0;\n    transition: 3s opacity; }\n  .artist-wrap .display-block {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .artist-wrap .artist {\n    text-align: left;\n    box-sizing: border-box;\n    position: relative;\n    z-index: 1000;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .artist-wrap .artist img {\n      max-width: 100%; }\n  .artist-wrap .item:nth-of-type(3n) {\n    margin-left: 0; }\n\n@media (max-width: 1280px) {\n  .artist-wrap {\n    width: 100%;\n    margin-left: 0; }\n    .artist-wrap h3 {\n      font-size: 18px;\n      line-height: 20px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artist/artists/artists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__ = __webpack_require__("../../../../../src/app/shared/prismic.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { fadeInAnimation } from '../../animations/index';
var ArtistsComponent = (function () {
    function ArtistsComponent(_feedService) {
        this._feedService = _feedService;
        this._getUrl = 'api/prismic/get/';
    }
    ArtistsComponent.prototype.onMouseOver = function (src) {
        var imgDiv = document.querySelector('.img-div');
        imgDiv.setAttribute('style', "background-image:url('" + src + "');");
        imgDiv.classList.toggle('visibility');
    };
    ArtistsComponent.prototype.onMouseOut = function () {
        var imgDiv = document.querySelector('.img-div');
        imgDiv.classList.toggle('visibility');
    };
    ArtistsComponent.prototype.getArtists = function (page) {
        var _this = this;
        this._feedService.getFeed('artist', page)
            .subscribe(function (res) {
            _this.artists = res.results;
            console.log(_this.artists);
        }, function (error) {
            console.log('there was an error in the artist feed component im very sorry');
        });
    };
    ArtistsComponent.prototype.ngOnInit = function () {
        console.log('in artist component');
        this.getArtists(0);
    };
    return ArtistsComponent;
}());
ArtistsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-artists',
        template: __webpack_require__("../../../../../src/app/artist/artists/artists.component.html"),
        styles: [__webpack_require__("../../../../../src/app/artist/artists/artists.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */]) === "function" && _a || Object])
], ArtistsComponent);

var _a;
//# sourceMappingURL=artists.component.js.map

/***/ }),

/***/ "../../../../../src/app/exhibitions/exhibition-detail/exhibition-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-wrap\" *ngIf=\"data\" [@fadeInAnimation]=\"true\">\n  <div class=\"text\">\n    <h3>{{ data[\"exhibition.title\"].value[\"0\"].text }}</h3>\n    <div class=\"dates\">\n      <p> {{ data[\"exhibition.start-date\"].value | date }} - {{ data[\"exhibition.end-date\"].value | date }}</p>\n    </div>\n    <div class=\"artist-names\">\n      <p *ngFor=\"let name of data['exhibition.artist-names'].value; let i = index\">\n        {{ name.artist.value[\"0\"].text }}\n        <!-- <span *ngIf=\"i < data['exhibition.artist-names'].value.length - 1\">/</span> -->\n      </p>\n    </div>\n    <a (click)=\"scrollToAnchor('press')\"><h3>PRESS RELEASE</h3></a>\n  </div>\n  <div class=\"details\">\n    <div class=\"img-gallery\">\n      <div *ngFor=\"let img of data['exhibition.body'].value['0'].repeat\">\n        <img [src]=\"img.gallery_image.value.main.url\" alt=\"\">\n        <p>{{ img.image_captions?.value[\"0\"].text }}</p>\n      </div>\n    </div>\n\n    <a name=\"press\">\n      <div id=\"press\" class=\"press-release\">\n        <p *ngFor=\"let p of data['exhibition.press-release'].value\">\n          {{p.text}}\n        </p>\n      </div>\n    </a>\n\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/exhibitions/exhibition-detail/exhibition-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\nh3 {\n  font-family: \"Work Sans\", sans-serif; }\n\n.in {\n  background-color: red; }\n\n.detail-wrap {\n  width: 60%;\n  margin-left: 40%;\n  height: 100vh;\n  scroll-behavior: smooth; }\n  .detail-wrap .img-gallery {\n    overflow: scroll;\n    padding-top: 4rem;\n    text-align: right; }\n    .detail-wrap .img-gallery div {\n      margin-top: 25px;\n      text-align: right; }\n      .detail-wrap .img-gallery div img {\n        width: 100%; }\n      .detail-wrap .img-gallery div p {\n        margin-right: 1rem; }\n  .detail-wrap .text {\n    width: 20rem;\n    top: calc(4em + 25px);\n    left: 11rem;\n    position: fixed;\n    text-align: right; }\n    .detail-wrap .text div {\n      margin: 1rem 0; }\n    .detail-wrap .text p {\n      font-size: 12px;\n      line-height: 16px; }\n    .detail-wrap .text a > h3 {\n      color: #CC00FF; }\n    .detail-wrap .text .links {\n      text-transform: uppercase;\n      margin-top: 1rem; }\n      .detail-wrap .text .links a {\n        display: inline-block;\n        margin-right: 1rem;\n        font-size: 1rem; }\n  .detail-wrap .press-release {\n    margin-top: 150px;\n    margin-bottom: 150px; }\n    .detail-wrap .press-release p {\n      font-size: 12px;\n      line-height: 16px;\n      font-family: \"Work Sans\";\n      letter-spacing: 1px;\n      margin: 1rem 0;\n      width: 80%;\n      margin-left: 0; }\n\n@media (max-width: 1280px) {\n  .detail-wrap {\n    width: 60%;\n    margin-left: 40%;\n    height: 100vh;\n    scroll-behavior: smooth; }\n    .detail-wrap .img-gallery {\n      overflow: scroll;\n      padding-top: 4rem;\n      text-align: right; }\n      .detail-wrap .img-gallery div {\n        margin-top: 25px;\n        text-align: right; }\n        .detail-wrap .img-gallery div img {\n          width: 100%; }\n        .detail-wrap .img-gallery div p {\n          margin-right: 1rem; }\n    .detail-wrap .text {\n      left: 2rem;\n      position: fixed;\n      text-align: left;\n      margin-right: 1rem;\n      top: auto;\n      width: auto;\n      margin-top: calc(4rem + 25px); }\n      .detail-wrap .text div {\n        margin: 1rem 0; }\n      .detail-wrap .text p {\n        font-size: 12px;\n        line-height: 16px; }\n      .detail-wrap .text a > h3 {\n        color: #CC00FF; }\n      .detail-wrap .text .links {\n        text-transform: uppercase;\n        margin-top: 1rem; }\n        .detail-wrap .text .links a {\n          display: inline-block;\n          margin-right: 1rem;\n          font-size: 1rem; }\n    .detail-wrap .press-release {\n      margin-top: 150px;\n      margin-bottom: 150px; }\n      .detail-wrap .press-release p {\n        font-size: 12px;\n        line-height: 16px;\n        font-family: \"Work Sans\";\n        letter-spacing: 1px;\n        margin: 1rem 0;\n        width: 80%;\n        margin-left: 0; } }\n\n@media (max-width: 1280px) and (max-width: 767px) {\n  .detail-wrap {\n    width: 100%;\n    margin-left: 0;\n    height: auto;\n    margin-top: 150px; }\n    .detail-wrap .img-gallery {\n      padding: 0; }\n      .detail-wrap .img-gallery div {\n        text-align: center; }\n        .detail-wrap .img-gallery div p {\n          margin: 0; }\n    .detail-wrap .text {\n      position: inherit;\n      text-align: center;\n      width: 100%; }\n    .detail-wrap .press-release {\n      margin-top: 25px; }\n      .detail-wrap .press-release p {\n        width: 90%;\n        margin-left: 5%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exhibitions/exhibition-detail/exhibition-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_prismic_service__ = __webpack_require__("../../../../../src/app/shared/prismic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_index__ = __webpack_require__("../../../../../src/app/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExhibitionDetailComponent = (function () {
    function ExhibitionDetailComponent(_route, _router, _feedService) {
        this._route = _route;
        this._router = _router;
        this._feedService = _feedService;
    }
    ExhibitionDetailComponent.prototype.scrollToAnchor = function (aid) {
        var aTag = __WEBPACK_IMPORTED_MODULE_4_jquery__("a[name='" + aid + "']");
        __WEBPACK_IMPORTED_MODULE_4_jquery__('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
    };
    ExhibitionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.params.exhibition;
        console.log('this id is ' + id);
        this._feedService.getSingle('exhibition', id)
            .subscribe(function (d) {
            _this.detail = d.results[0];
            _this.data = d.results[0].data;
            console.log(_this.data);
        }, function (error) { return _this.error = error; });
    };
    return ExhibitionDetailComponent;
}());
ExhibitionDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-exhibition-detail',
        template: __webpack_require__("../../../../../src/app/exhibitions/exhibition-detail/exhibition-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exhibitions/exhibition-detail/exhibition-detail.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_3__animations_index__["a" /* fadeInAnimation */]],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_prismic_service__["a" /* PrismicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_prismic_service__["a" /* PrismicService */]) === "function" && _c || Object])
], ExhibitionDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=exhibition-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/exhibitions/exhibition-feed/exhibition-feed.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"exhibition-wrap\" *ngIf=\"exhibitions\" [@fadeInAnimation]=\"true\">\n  <div class=\"current\">\n      <li *ngFor=\"let c of current\">\n        <a [routerLink]=\"[c.uid]\">\n          <div class=\"text\">\n            <h2>CURRENT</h2>\n            <h3>{{ c.data['exhibition.title'].value[0].text}}</h3>\n            <div class=\"dates\">\n              <p> {{ c.data[\"exhibition.start-date\"].value | date }}</p>\n            </div>\n            <div class=\"artist-names\">\n              <span *ngFor=\"let name of c.data['exhibition.artist-names'].value; let i = index\">\n                {{ name.artist.value[\"0\"].text }}\n                <span *ngIf=\"i < c.data['exhibition.artist-names'].value.length - 1\">/</span>\n              </span>\n            </div>\n          </div>\n          <img [src]=\"c.data['exhibition.body'].value['0'].repeat['0'].gallery_image.value.main.url\" >\n        </a>\n      </li>\n  </div>\n\n  <div class=\"upcoming\">\n    <li *ngFor=\"let f of future\">\n      <a [routerLink]=\"[f.uid]\">\n        <div class=\"text\">\n          <h2>FORTHCOMING</h2>\n          <h3>{{ f.data['exhibition.title']?.value[0].text}}</h3>\n          <div class=\"dates\">\n            <p> {{ f.data[\"exhibition.start-date\"]?.value | date  }} - {{ f.data[\"exhibition.end-date\"]?.value | date }}</p>\n          </div>\n          <div class=\"artist-names\">\n            <span *ngFor=\"let name of f.data['exhibition.artist-names']?.value; let i = index\">\n              {{ name.artist.value[\"0\"].text }}\n              <span *ngIf=\"i < f.data['exhibition.artist-names'].value.length - 1\">/</span>\n            </span>\n          </div>\n        </div>\n        <img [src]=\"f.data['exhibition.body'].value['0'].repeat['0'].gallery_image.value.main.url\" >\n      </a>\n    </li>\n  </div>\n\n  <div class=\"past\">\n    <li *ngFor=\"let p of past\">\n        <a [routerLink]=\"p.uid\" >\n          <div class=\"text\">\n            <h2>PAST</h2>\n            <h3>{{ p.data['exhibition.title'].value[0].text}}</h3>\n            <div class=\"dates\">\n              <p> {{ p.data[\"exhibition.start-date\"].value | date  }} - {{ p.data[\"exhibition.end-date\"]?.value | date  }}</p>\n            </div>\n            <div class=\"artist-names\">\n              <span *ngFor=\"let name of p.data['exhibition.artist-names']?.value; let i = index\">\n                {{ name.artist.value[\"0\"].text }}\n                <span *ngIf=\"i < p.data['exhibition.artist-names'].value.length - 1\">/</span>\n              </span>\n            </div>\n          </div>\n          <img [src]=\"p.data['exhibition.body'].value['0'].repeat['0'].gallery_image.value.main.url\" >\n        </a>\n    </li>\n  </div>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/exhibitions/exhibition-feed/exhibition-feed.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.exhibition-wrap {\n  width: 100%;\n  margin-top: 150px;\n  margin-bottom: 150px;\n  text-align: left;\n  overflow: scroll; }\n  .exhibition-wrap h2 {\n    font-size: 18px; }\n  .exhibition-wrap div li {\n    width: 100%;\n    margin-top: 25px; }\n    .exhibition-wrap div li a {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: start; }\n    .exhibition-wrap div li:last-child {\n      margin-bottom: 150px; }\n    .exhibition-wrap div li img {\n      display: inline-block;\n      text-align: right;\n      width: 60%; }\n    .exhibition-wrap div li div.text {\n      display: inline-block;\n      text-align: right;\n      margin-top: auto;\n      margin-left: auto;\n      margin-right: 2rem;\n      width: 15rem; }\n      .exhibition-wrap div li div.text .artist-names {\n        line-height: 16px; }\n      .exhibition-wrap div li div.text .exhibition-description {\n        text-align: left;\n        margin-top: 15px; }\n        .exhibition-wrap div li div.text .exhibition-description p {\n          line-height: 12px;\n          font-size: 11px; }\n\n@media (max-width: 767px) {\n  .exhibition-wrap {\n    margin: 80px 0; }\n    .exhibition-wrap div li:last-child {\n      margin-bottom: 80px; }\n    .exhibition-wrap div li a {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n    .exhibition-wrap div li img {\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1;\n      width: 100%; }\n    .exhibition-wrap div li div.text {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2;\n      text-align: center;\n      width: 100%;\n      padding: 0 1rem;\n      margin-left: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exhibitions/exhibition-feed/exhibition-feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitionFeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__ = __webpack_require__("../../../../../src/app/shared/prismic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_index__ = __webpack_require__("../../../../../src/app/animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExhibitionFeedComponent = (function () {
    function ExhibitionFeedComponent(_feedService) {
        this._feedService = _feedService;
        this._getUrl = 'api/prismic/get/';
    }
    ExhibitionFeedComponent.prototype.getExhibitions = function (page) {
        var _this = this;
        this._feedService.getExhibitions('exhibition', page)
            .subscribe(function (res) {
            _this.exhibitions = res.results;
            console.log(_this.exhibitions);
            var current = [];
            var past = [];
            var future = [];
            var today = Date.now();
            if (res.results.length) {
                _this.current = res.results.filter(function (item) {
                    var startDateString = item.data["exhibition.start-date"].value;
                    var endDateString = item.data["exhibition.end-date"].value;
                    var startDate = new Date(startDateString);
                    var endDate = new Date(endDateString);
                    var title = item.data["exhibition.title"].value["0"].text;
                    // current
                    // ... start date less than current date,
                    // ... end date greater than current date
                    if (Number(today) > Number(startDate) && Number(today) < Number(endDate)) {
                        return item;
                    }
                }),
                    _this.past = res.results.filter(function (item) {
                        // let today = Date.now();
                        var startDateString = item.data["exhibition.start-date"].value;
                        var endDateString = item.data["exhibition.end-date"].value;
                        var startDate = new Date(startDateString);
                        var endDate = new Date(endDateString);
                        var title = item.data["exhibition.title"].value["0"].text;
                        // current
                        // ... start date less than current date,
                        // ... end date greater than current date
                        if (Number(today) > Number(startDate) && Number(today) > Number(endDate)) {
                            return item;
                        }
                    }),
                    _this.future = res.results.filter(function (item) {
                        // let today = Date.now();
                        var startDateString = item.data["exhibition.start-date"].value;
                        var endDateString = item.data["exhibition.end-date"].value;
                        var startDate = new Date(startDateString);
                        var endDate = new Date(endDateString);
                        var title = item.data["exhibition.title"].value["0"].text;
                        if (Number(today) < Number(startDate)) {
                            return item;
                        }
                    });
            }
        }, function (error) {
            console.log('there was an error with exhibitions');
        });
    };
    ExhibitionFeedComponent.prototype.ngOnInit = function () {
        this.getExhibitions(0);
    };
    return ExhibitionFeedComponent;
}());
ExhibitionFeedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-exhibition-feed',
        template: __webpack_require__("../../../../../src/app/exhibitions/exhibition-feed/exhibition-feed.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exhibitions/exhibition-feed/exhibition-feed.component.scss")],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations_index__["a" /* fadeInAnimation */]],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */]) === "function" && _a || Object])
], ExhibitionFeedComponent);

var _a;
//# sourceMappingURL=exhibition-feed.component.js.map

/***/ }),

/***/ "../../../../../src/app/happenings/happenings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"feed-wrap\">\n  <div class=\"happening-wrap\">\n    <div class=\"happening\" *ngFor=\"let happening of happenings\">\n      <div\n      (mouseover)=\"onMouseOver(happening.data['happenings.image'].value.main.url)\"\n      (mouseout)=\"onMouseOut()\">\n        <h2>{{ happening.data[\"happenings.title\"].value[\"0\"].text }} </h2>\n        <!-- <h3> {{ happening.data[\"happenings.subtitle\"].value[\"0\"].text }} </h3> -->\n        <p> {{ happening.data[\"happenings.start-date\"].value | date }} </p>\n        <div class=\"description\">\n          <p *ngFor='let p of happening.data[\"happenings.description\"].value'>\n            {{ p.text }}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"img-div\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/happenings/happenings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.visibility {\n  opacity: 0.6 !important; }\n\n.feed-wrap {\n  width: 100%;\n  margin-top: 150px;\n  height: 100%; }\n  .feed-wrap .happening-wrap {\n    overflow: scroll;\n    height: 100%; }\n  .feed-wrap .img-div {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 0;\n    left: 0;\n    top: 0;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    opacity: 0;\n    transition: 3s opacity; }\n  .feed-wrap .happening {\n    margin: 3rem 0rem;\n    text-align: left;\n    width: 30rem;\n    margin-left: 20rem;\n    position: relative;\n    z-index: 1000; }\n    .feed-wrap .happening h2 {\n      font-size: 18px;\n      line-height: 20px; }\n    .feed-wrap .happening h3 {\n      margin-top: .5rem; }\n    .feed-wrap .happening p {\n      font-size: 10px;\n      line-height: 18px;\n      font-family: \"Work Sans\";\n      letter-spacing: 1px;\n      margin-top: .5rem; }\n\n@media (max-width: 1024px) {\n  .feed-wrap {\n    width: 100%;\n    margin-top: 150px; }\n    .feed-wrap .img-div {\n      position: fixed;\n      left: 0;\n      top: 0;\n      width: 100vw;\n      height: 100vh;\n      z-index: 0;\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: cover;\n      opacity: 0;\n      transition: 3s opacity; }\n    .feed-wrap .happening {\n      margin-left: auto;\n      margin-right: auto;\n      width: 45%; } }\n\n@media (max-width: 767px) {\n  .feed-wrap {\n    margin-top: 80px; }\n    .feed-wrap .happening {\n      width: 90%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/happenings/happenings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HappeningsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__ = __webpack_require__("../../../../../src/app/shared/prismic.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HappeningsComponent = (function () {
    function HappeningsComponent(_feedService) {
        this._feedService = _feedService;
        this._getUrl = 'api/prismic/get/';
    }
    HappeningsComponent.prototype.getHappenings = function (page) {
        var _this = this;
        this._feedService.getFeed('happenings', page)
            .subscribe(function (res) {
            _this.happenings = res.results;
            console.log(_this.happenings);
        }, function (error) {
            console.log('there was an error in the artist feed component im very sorry');
        });
    };
    HappeningsComponent.prototype.onMouseOver = function (src) {
        var imgDiv = document.querySelector('.img-div');
        imgDiv.setAttribute('style', "background-image:url('" + src + "');");
        imgDiv.classList.toggle('visibility');
        console.log('mouse in');
    };
    HappeningsComponent.prototype.onMouseOut = function () {
        var imgDiv = document.querySelector('.img-div');
        imgDiv.classList.toggle('visibility');
        console.log('mouse out');
    };
    HappeningsComponent.prototype.ngOnInit = function () {
        this.getHappenings(0);
    };
    return HappeningsComponent;
}());
HappeningsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-happenings',
        template: __webpack_require__("../../../../../src/app/happenings/happenings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/happenings/happenings.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */]) === "function" && _a || Object])
], HappeningsComponent);

var _a;
//# sourceMappingURL=happenings.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrap\">\n  <img src=\"https://prismic-io.s3.amazonaws.com/gavin%2F515dfc30-0e4c-4dd3-b5e4-dc748b04d465_home.jpg\" alt=\"\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.home-wrap {\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .home-wrap img {\n    height: 400px; }\n\n@media (max-width: 767px) {\n  .home-wrap {\n    width: auto;\n    height: auto;\n    margin-top: 5rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a [routerLink]=\"['/']\">\n      <h3>Palm Reader Projects</h3>\n    </a>\n</div>\n\n<div class=\"mobile-menu\" (click)=\"toggleState()\">\n  <h3>MENU</h3>\n</div>\n\n<nav class=\"nav\" [ngClass]=\"{ 'active-nav': isIn }\">\n  <ul class=\"nav-ul\">\n    <li class=\"nav-li\">\n      <a class=\"nav-a a-hover\" (click)=\"toggleState()\" [routerLink]=\"['/artists']\">Artists</a>\n    </li>\n    <li class=\"nav-li\">\n      <a class=\"nav-a a-hover\"  (click)=\"toggleState()\" [routerLink]=\"['/exhibitions']\">Exhibitions</a>\n    </li>\n    <li class=\"nav-li\">\n      <a class=\"nav-a a-hover\" (click)=\"toggleState()\" [routerLink]=\"['/happenings']\"> Happenings</a>\n    </li>\n    <li class=\"nav-li\">\n      <a class=\"nav-a a-hover\" (click)=\"toggleState()\" [routerLink]=\"['/about']\">About</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.logo {\n  position: fixed;\n  top: 25px;\n  right: 25px;\n  z-index: 1000; }\n  .logo a {\n    font-size: 18px;\n    line-height: 30px;\n    font-family: \"Work Sans\", sans-serif;\n    letter-spacing: 1px;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n    @media only screen and (min-width: 0px) and (max-width: 767px) {\n      .logo a {\n        font-size: 18px;\n        line-height: 20px; } }\n\n.nav {\n  position: fixed;\n  bottom: 25px;\n  left: 25px;\n  width: 100px;\n  z-index: 5000; }\n\n.mobile-menu {\n  display: none;\n  z-index: 5000; }\n\n.nav-ul {\n  width: 100%;\n  display: block;\n  height: auto;\n  position: relative; }\n  .nav-ul .nav-li {\n    width: 100px;\n    position: relative; }\n    .nav-ul .nav-li a {\n      width: 100%;\n      display: block;\n      height: 100%;\n      font-size: 14px;\n      line-height: 24px;\n      vertical-align: middle;\n      transition: margin 0.5s ease;\n      -webkit-transition: margin 0.5s ease;\n      -moz-transition: margin 0.5s ease;\n      -ms-transition: margin 0.5s ease;\n      -o-transition: margin 0.5s ease; }\n      .nav-ul .nav-li a:hover {\n        margin-left: 5px; }\n      .nav-ul .nav-li a.nav_active {\n        margin-left: 5px !important; }\n\n@media (max-width: 767px) {\n  .active-nav {\n    background-color: red;\n    bottom: 0px !important;\n    transition: bottom 0.4s ease-in-out; }\n  .logo {\n    top: 25px;\n    text-align: center;\n    width: 100%;\n    right: 0; }\n  .mobile-menu {\n    display: block;\n    margin-top: auto;\n    width: 100vw;\n    background-color: white;\n    position: fixed;\n    height: 3rem;\n    line-height: 3rem;\n    text-align: center;\n    bottom: 0;\n    z-index: 5000; }\n  .nav {\n    display: block;\n    background-color: white;\n    border-top: 1px solid black;\n    height: auto;\n    width: 100vw;\n    text-align: center;\n    padding: 3rem 0;\n    left: 0;\n    margin-bottom: 3rem;\n    bottom: -500px;\n    z-index: 4000;\n    transition: bottom 0.4s ease-in-out; }\n    .nav .nav-ul {\n      margin: 0 auto; }\n      .nav .nav-ul .nav-li {\n        margin: 0 auto; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__ = __webpack_require__("../../../../../src/app/shared/prismic.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(prismicService) {
        this.prismicService = prismicService;
        this._getUrl = 'api/prismic/get/';
        this.isIn = false;
    }
    NavComponent.prototype.toggleState = function () {
        // click handler
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
        console.log('in toggle state');
    };
    NavComponent.prototype.ngOnInit = function () {
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/nav.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */]) === "function" && _a || Object])
], NavComponent);

var _a;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/filter-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipePipe = (function () {
    function FilterPipePipe() {
    }
    FilterPipePipe.prototype.transform = function (pages, _a) {
        var key = _a[0];
        return pages.filter(function (page) {
            return page.data['exhibition.title'].value[0].text === key; // <------
        });
    };
    return FilterPipePipe;
}());
FilterPipePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filterPipe'
    })
], FilterPipePipe);

//# sourceMappingURL=filter-pipe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/prismic.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrismicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Feed} from './feed';




var PrismicService = (function () {
    function PrismicService(_http) {
        this._http = _http;
        this._getUrl = 'api/prismic/get/';
    }
    PrismicService.prototype.getArtists = function (type, page) {
        console.log(type, page);
        return this._http.get(this._getUrl + 'all?page=' + page + '&type=' + type)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    PrismicService.prototype.getExhibitions = function (type, page) {
        console.log(type, page);
        return this._http.get(this._getUrl + 'all?page=' + page + '&type=' + type)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    PrismicService.prototype.getFeed = function (type, page) {
        console.log(type, page);
        return this._http.get(this._getUrl + 'all?page=' + page + '&type=' + type)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    PrismicService.prototype.getSingle = function (type, uid) {
        return this._http.get(this._getUrl + 'single?type=' + type + '&uid=' + uid)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    PrismicService.prototype.getImgGallery = function (type, uid) {
        return this._http.get(this._getUrl + 'single?type=' + type + '&uid=' + uid)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    PrismicService.prototype.handleError = function (error) {
        console.log("error", error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return PrismicService;
}());
PrismicService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PrismicService);

var _a;
//# sourceMappingURL=prismic.service.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map