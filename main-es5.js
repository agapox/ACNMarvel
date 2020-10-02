function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hero-profile/hero-profile.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hero-profile/hero-profile.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeroProfileHeroProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"heroe\">\n  <h1 class=\"text-center\">{{heroe.name}}</h1>\n  <a class=\"goback\" (click)=\"goBack()\">Atrás</a>\n  <div class=\"container\">\n    <div class=\"row\" class=\"heroe-profile\">\n\n      <div class=\"col-xs-12 col-sm-6 col-md-4\">\n        <img [src]=\"heroe.thumbnail.path + '.' + heroe.thumbnail.extension\" [alt]=\"heroe.name\">\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-8\">\n        <h3>Descripción</h3>\n        <p>{{heroe.description}}</p>\n        <p class=\"modified\">{{heroe.modified | date:'fullDate'}}, {{heroe.modified | date:'shortTime'}}</p>\n        <p><button type=\"button\" class=\"btn btn-primary\" (click)=\"launchModal()\">Clasificar</button></p>\n        <p *ngIf=\"team!=undefined && team!=''\">\n          Acabas de clasificar a tu heroe en el equipo\n          <strong [style.color]=\"heroesService.group_colors[team]\">{{team}}</strong>\n        </p>\n      </div>\n    </div>\n  </div>\n  <app-modal-poll (setTeam)=\"getTeam($event)\" [title_modal]=\"question_modal\" [team_selected]=\"team\" #modal></app-modal-poll>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/listado-de-heroes/listado-de-heroes.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listado-de-heroes/listado-de-heroes.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListadoDeHeroesListadoDeHeroesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"text-center\">{{title}}</h1>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form (ngSubmit)=\"submitSearch()\">\r\n        <div class=\"form-group col-xs-12\">\r\n          <input type=\"text\" [(ngModel)]=\"searchString\" name=\"searchString\" class=\"form-control\" id=\"search\" placeholder=\"Búsqueda de super-héroe\">\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-6 col-md-3 heroe__item\" *ngFor=\"let heroe of heroes\">\r\n      <a [routerLink]=\"'/heroe/' + heroe.id\" class=\"hero-entry\" [style.border-color]=\"heroesService['group_colors'][heroe.teamColor]\" [style.background-image]=\"'url(' + heroe.thumbnail.path + '.' + heroe.thumbnail.extension + ')'\">\r\n        <span [style.background-color]=\"heroesService['group_colors'][heroe.teamColor]\">{{heroe.name}}</span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"paginator col-xs-12\">\r\n      <a class=\"paginator-prev\" (click)=\"prevPage()\" *ngIf=\"page > 0\">Prev</a>\r\n      Página {{page + 1}} de {{totalPages}}\r\n      <a class=\"paginator-next\" (click)=\"nextPage()\" *ngIf=\"page < totalPages - 1\">Next</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-poll/modal-poll.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-poll/modal-poll.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalPollModalPollComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-modal\" *ngIf=\"show_modal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <!-- Title -->\n          <div *ngIf=\"title_modal!=''\" class=\"modal-header\">\n              <button type=\"button\" class=\"close\" (click)=\"toggle_modal()\" aria-hidden=\"true\">\n                  &times;\n              </button>\n              <h4 class=\"modal-title\">{{title_modal}}</h4>\n          </div>\n          <!-- Content -->\n          <div class=\"modal-body bg-white\">\n              <div class=\"width-100\">\n                  <div class=\"no-margin\">\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 red-row\"></div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 blue-row\"></div>\n                      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 yellow-row\"></div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center\">\n                      <div class=\"group bg-blue to_the_left\" [ngClass]=\"{'selected': team_selected=='azul'}\" (click)=\"send_team('azul')\">Azul</div>\n                    </div>\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center\">\n                      <div class=\"group bg-violet\" [ngClass]=\"{'selected': team_selected=='violeta'}\" (click)=\"send_team('violeta')\">Violeta</div>\n                    </div>\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center\">\n                      <div class=\"group bg-orange to_the_left\" [ngClass]=\"{'selected': team_selected=='naranjo'}\" (click)=\"send_team('naranjo')\">Naranjo</div>\n                    </div>\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center\">\n                      <div class=\"group bg-green\" [ngClass]=\"{'selected': team_selected=='verde'}\" (click)=\"send_team('verde')\">Verde</div>\n                    </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _hero_profile_hero_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./hero-profile/hero-profile.component */
    "./src/app/hero-profile/hero-profile.component.ts");
    /* harmony import */


    var _listado_de_heroes_listado_de_heroes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./listado-de-heroes/listado-de-heroes.component */
    "./src/app/listado-de-heroes/listado-de-heroes.component.ts");
    /* harmony import */


    var _modal_poll_modal_poll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-poll/modal-poll.component */
    "./src/app/modal-poll/modal-poll.component.ts");

    var routes = [{
      path: 'listado-heroes',
      component: _listado_de_heroes_listado_de_heroes_component__WEBPACK_IMPORTED_MODULE_4__["ListadoDeHeroesComponent"]
    }, {
      path: 'heroe/:id',
      component: _hero_profile_hero_profile_component__WEBPACK_IMPORTED_MODULE_3__["HeroProfileComponent"]
    }, {
      path: 'modal-poll',
      component: _modal_poll_modal_poll_component__WEBPACK_IMPORTED_MODULE_5__["ModalPollComponent"]
    }, {
      path: '**',
      redirectTo: '/listado-heroes'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ACNMarvel';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _listado_de_heroes_listado_de_heroes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./listado-de-heroes/listado-de-heroes.component */
    "./src/app/listado-de-heroes/listado-de-heroes.component.ts");
    /* harmony import */


    var _hero_profile_hero_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./hero-profile/hero-profile.component */
    "./src/app/hero-profile/hero-profile.component.ts");
    /* harmony import */


    var _modal_poll_modal_poll_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./modal-poll/modal-poll.component */
    "./src/app/modal-poll/modal-poll.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _listado_de_heroes_listado_de_heroes_component__WEBPACK_IMPORTED_MODULE_7__["ListadoDeHeroesComponent"], _hero_profile_hero_profile_component__WEBPACK_IMPORTED_MODULE_8__["HeroProfileComponent"], _modal_poll_modal_poll_component__WEBPACK_IMPORTED_MODULE_9__["ModalPollComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
      providers: [],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/hero-profile/hero-profile.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/hero-profile/hero-profile.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeroProfileHeroProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .goback {\n  float: left;\n  background-color: #003aff;\n  padding: 10px;\n  color: #ffffff;\n  font-size: 20px;\n  border: 1px solid #ffffff;\n  transform: rotate(8deg);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1wcm9maWxlL0M6XFxCYW5jb0VzdGFkb1xccHJ1ZWJhc1xcQUNOTWFydmVsL3NyY1xcYXBwXFxoZXJvLXByb2ZpbGVcXGhlcm8tcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVyby1wcm9maWxlL2hlcm8tcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9oZXJvLXByb2ZpbGUvaGVyby1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5nb2JhY2sge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzYWZmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDhkZWcpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCAuZ29iYWNrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDNhZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKDhkZWcpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/hero-profile/hero-profile.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/hero-profile/hero-profile.component.ts ***!
    \********************************************************/

  /*! exports provided: HeroProfileComponent */

  /***/
  function srcAppHeroProfileHeroProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroProfileComponent", function () {
      return HeroProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_services_heroes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/heroes.service */
    "./src/app/shared/services/heroes.service.ts");

    var HeroProfileComponent = /*#__PURE__*/function () {
      function HeroProfileComponent(route, heroesService, _location) {
        _classCallCheck(this, HeroProfileComponent);

        this.route = route;
        this.heroesService = heroesService;
        this._location = _location;
        this.team = "";
      }

      _createClass(HeroProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.subscribe(function (params) {
            _this.id = params.id;

            _this.heroesService.getHeroe(_this.id).subscribe(function (data) {
              var temp = data.data.results[0];
              _this.heroe = {
                id: temp.id,
                name: temp.name,
                description: temp.description,
                modified: temp.modified,
                thumbnail: temp.thumbnail,
                resourceURI: temp.resourceURI,
                teamColor: _this.heroesService.getTeamColor(temp.id)
              };
              _this.team = _this.heroe.teamColor;
            });
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this._location.back();
        }
      }, {
        key: "launchModal",
        value: function launchModal() {
          this.question_modal = "¿En cual grupo quieres colocar a tu súper héroe?";
          this.modal.toggle_modal();
        }
      }, {
        key: "getTeam",
        value: function getTeam(team) {
          this.team = team;
          this.heroesService.teams.set(this.heroe.id, this.team);
        }
      }]);

      return HeroProfileComponent;
    }();

    HeroProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _shared_services_heroes_service__WEBPACK_IMPORTED_MODULE_4__["HeroesService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal', {
      "static": false
    })], HeroProfileComponent.prototype, "modal", void 0);
    HeroProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hero-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hero-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hero-profile/hero-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hero-profile.component.scss */
      "./src/app/hero-profile/hero-profile.component.scss"))["default"]]
    })], HeroProfileComponent);
    /***/
  },

  /***/
  "./src/app/listado-de-heroes/listado-de-heroes.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/listado-de-heroes/listado-de-heroes.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListadoDeHeroesListadoDeHeroesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .form-group {\n  margin: 4rem auto 5rem auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGFkby1kZS1oZXJvZXMvQzpcXEJhbmNvRXN0YWRvXFxwcnVlYmFzXFxBQ05NYXJ2ZWwvc3JjXFxhcHBcXGxpc3RhZG8tZGUtaGVyb2VzXFxsaXN0YWRvLWRlLWhlcm9lcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGlzdGFkby1kZS1oZXJvZXMvbGlzdGFkby1kZS1oZXJvZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSwyQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbGlzdGFkby1kZS1oZXJvZXMvbGlzdGFkby1kZS1oZXJvZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luOiA0cmVtIGF1dG8gNXJlbSBhdXRvO1xyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbjogNHJlbSBhdXRvIDVyZW0gYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/listado-de-heroes/listado-de-heroes.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/listado-de-heroes/listado-de-heroes.component.ts ***!
    \******************************************************************/

  /*! exports provided: ListadoDeHeroesComponent */

  /***/
  function srcAppListadoDeHeroesListadoDeHeroesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListadoDeHeroesComponent", function () {
      return ListadoDeHeroesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_heroes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/heroes.service */
    "./src/app/shared/services/heroes.service.ts");

    var ListadoDeHeroesComponent = /*#__PURE__*/function () {
      function ListadoDeHeroesComponent(heroesService) {
        _classCallCheck(this, ListadoDeHeroesComponent);

        this.heroesService = heroesService;
        this.title = 'Tutorial de Angular - Héroes de Marvel';
        this.heroes = [];
        this.page = 0;
        this.totalPages = 0;
      }

      _createClass(ListadoDeHeroesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getHeroes();
        }
      }, {
        key: "submitSearch",
        value: function submitSearch() {
          this.getHeroes(this.searchString);
        }
      }, {
        key: "prevPage",
        value: function prevPage() {
          this.getHeroes(this.searchString, this.page - 1);
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.getHeroes(this.searchString, this.page + 1);
        }
      }, {
        key: "getHeroes",
        value: function getHeroes(searchHeroe, page) {
          var _this2 = this;

          this.heroesService.getHeroes(searchHeroe, page).subscribe(function (data) {
            console.log(data);
            _this2.heroes = data;
            _this2.page = _this2.heroesService.page;
            _this2.totalPages = _this2.heroesService.total;
          });
        }
      }]);

      return ListadoDeHeroesComponent;
    }();

    ListadoDeHeroesComponent.ctorParameters = function () {
      return [{
        type: _shared_services_heroes_service__WEBPACK_IMPORTED_MODULE_2__["HeroesService"]
      }];
    };

    ListadoDeHeroesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-listado-de-heroes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./listado-de-heroes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/listado-de-heroes/listado-de-heroes.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./listado-de-heroes.component.scss */
      "./src/app/listado-de-heroes/listado-de-heroes.component.scss"))["default"]]
    })], ListadoDeHeroesComponent);
    /***/
  },

  /***/
  "./src/app/modal-poll/modal-poll.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/modal-poll/modal-poll.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalPollModalPollComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLXBvbGwvbW9kYWwtcG9sbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modal-poll/modal-poll.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/modal-poll/modal-poll.component.ts ***!
    \****************************************************/

  /*! exports provided: ModalPollComponent */

  /***/
  function srcAppModalPollModalPollComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPollComponent", function () {
      return ModalPollComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ModalPollComponent = /*#__PURE__*/function () {
      function ModalPollComponent() {
        _classCallCheck(this, ModalPollComponent);

        this.show_modal = false;
        this.setTeam = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ModalPollComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggle_modal",
        value: function toggle_modal() {
          this.show_modal = !this.show_modal;
        }
      }, {
        key: "send_team",
        value: function send_team(team) {
          this.setTeam.emit(team);
          this.toggle_modal();
        }
      }]);

      return ModalPollComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalPollComponent.prototype, "title_modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ModalPollComponent.prototype, "setTeam", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalPollComponent.prototype, "team_selected", void 0);
    ModalPollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-poll',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-poll.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-poll/modal-poll.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-poll.component.scss */
      "./src/app/modal-poll/modal-poll.component.scss"))["default"]]
    })], ModalPollComponent);
    /***/
  },

  /***/
  "./src/app/shared/services/heroes.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/heroes.service.ts ***!
    \***************************************************/

  /*! exports provided: HeroesService */

  /***/
  function srcAppSharedServicesHeroesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroesService", function () {
      return HeroesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var HeroesService = /*#__PURE__*/function () {
      function HeroesService(http) {
        _classCallCheck(this, HeroesService);

        this.http = http;
        this.protocol = 'https:';
        this.ApiUrl = '//gateway.marvel.com:443/v1/public/';
        this.APIKEY = '56d2cc44b1c84eb7c6c9673565a9eb4b';
        this.page = 0;
        this.step = 20;
        this.total = 0;
        this.group_colors = {
          "azul": "#1f8ff7",
          "violeta": "#a43de3",
          "naranjo": "#df5c0f",
          "verde": "#0ea521"
        };
        this.teams = new Map();
      }

      _createClass(HeroesService, [{
        key: "getHeroe",
        value: function getHeroe(id) {
          var url = "".concat(this.protocol).concat(this.ApiUrl, "characters/").concat(id, "?apikey=").concat(this.APIKEY);
          return this.http.get(url);
        }
      }, {
        key: "getHeroes",
        value: function getHeroes(nameStartsWith, page) {
          var _this3 = this;

          if (page || page === 0) {
            this.page = page;
          }

          return this.getHeroesRequest(nameStartsWith, page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this3.total = Math.ceil(data.data.total / _this3.step);
            return data.data.results.map(function (result) {
              return {
                id: result.id,
                name: result.name,
                description: result.description,
                modified: result.modified,
                thumbnail: result.thumbnail,
                resourceURI: result.resourceURI,
                teamColor: _this3.getTeamColor(result.id)
              };
            });
          }));
        }
      }, {
        key: "getPage",
        value: function getPage() {
          return this.page;
        }
      }, {
        key: "getTotalPages",
        value: function getTotalPages() {
          return this.total;
        }
      }, {
        key: "getHeroesRequest",
        value: function getHeroesRequest(nameStartsWith, page) {
          var url = "".concat(this.protocol).concat(this.ApiUrl, "characters?apikey=").concat(this.APIKEY, "&offset=").concat(this.page * this.step).concat(nameStartsWith ? '&nameStartsWith=' + nameStartsWith : '');
          return this.http.get(url);
        }
      }, {
        key: "getHeroesArr",
        value: function getHeroesArr() {
          return this.heroes;
        }
      }, {
        key: "resetPager",
        value: function resetPager() {
          this.page = 0;
        }
      }, {
        key: "getTeamColor",
        value: function getTeamColor(id) {
          if (this.teams.get(id) != undefined) {
            return this.teams.get(id);
          } else {
            return "";
          }
        }
      }]);

      return HeroesService;
    }();

    HeroesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    HeroesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], HeroesService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\BancoEstado\pruebas\ACNMarvel\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map