webpackJsonp([2],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotchatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_mensagem_model__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_api_ai_javascript__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_environment__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the BotchatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BotchatPage = (function () {
    function BotchatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.token = __WEBPACK_IMPORTED_MODULE_6__providers_environment__["a" /* environment */].dialogflow.angularBot;
        this.client = new __WEBPACK_IMPORTED_MODULE_4_api_ai_javascript__["a" /* ApiAiClient */]({ accessToken: this.token });
        this.conversation = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        /* let currentTimestamp: Object = firebase.database.ServerValue.TIMESTAMP;
         const botMessage = new Mensagem('Olá, eu sou a juana, você quer ser minha amiguinha?','Usuario',currentTimestamp);
         this.mensagens.push(botMessage);
       */
    }
    BotchatPage.prototype.converse = function (msg) {
        var _this = this;
        var currentTimestamp = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP;
        var userMessage = new __WEBPACK_IMPORTED_MODULE_2__models_mensagem_model__["a" /* Mensagem */](msg, 'user', currentTimestamp);
        this.update(userMessage);
        return this.client.textRequest(msg)
            .then(function (res) {
            var speech = res.result.fulfillment.speech;
            var botMessage = new __WEBPACK_IMPORTED_MODULE_2__models_mensagem_model__["a" /* Mensagem */](speech, 'bot', currentTimestamp);
            _this.update(botMessage);
            _this.scrollToBottom();
        });
    };
    BotchatPage.prototype.update = function (msg) {
        this.conversation.next([msg]);
    };
    BotchatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        });
    };
    BotchatPage.prototype.ionViewDidLoad = function () {
        this.mensagens = this.conversation.asObservable()
            .scan(function (acc, val) { return acc.concat(val); });
        console.log('ionViewDidLoad BotchatPage');
    };
    BotchatPage.prototype.sendMessage = function (newMessage) {
        if (newMessage) {
            this.converse(newMessage);
        }
    };
    return BotchatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], BotchatPage.prototype, "content", void 0);
BotchatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-botchat',template:/*ion-inline-start:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\botchat\botchat.html"*/'<!--\n  Generated template for the BotchatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>botchat</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n    <ion-list>    <div id="chatMessages">\n        <div ion-item  *ngFor="let message of mensagens | async" [class]="message.sentBy !== \'bot\' ? \'message special\' : \'message\' ">\n          <div class="innerMessage">\n            <h2 [class]="message.sentBy === \'bot\' ? \'h2\' : \'hide\'">{{message.sentBy}}</h2>\n            <h2 [class]="message.sentBy !== \'bot\' ? \'h2\' : \'hide\'">Você</h2>\n            <p class="message">{{message.content}}</p>\n          </div>\n        </div>\n      </div></ion-list>\n\n  \n  </ion-content>\n  \n  \n  <ion-footer>\n    <ion-toolbar>\n      <ion-item no-lines >\n        <ion-input type="text"  placeholder="Mensagem" (keyup.enter)="sendMessage(newMessage); newMessage = \'\'" (click)="sendMessage(newMessage); newMessage = \'\'" [(ngModel)]="newMessage"></ion-input>\n        <button ion-button item-right >\n          <ion-icon name="send"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-toolbar>\n  </ion-footer>\n  '/*ion-inline-end:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\botchat\botchat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], BotchatPage);

//# sourceMappingURL=botchat.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__(70);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ChatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ChatServiceProvider = (function (_super) {
    __extends(ChatServiceProvider, _super);
    function ChatServiceProvider(af, http) {
        var _this = _super.call(this) || this;
        _this.af = af;
        _this.http = http;
        console.log('Hello ChatProvider Provider');
        _this.setChats();
        return _this;
    }
    ChatServiceProvider.prototype.create = function (chat, userId1, userId2) {
        console.log('olocor');
        console.log(chat);
        return this.af.database.object("/chats/" + userId1 + "/" + userId2).set(chat).catch(this.handlePromiseError);
    };
    ChatServiceProvider.prototype.getDeepChat = function (userId1, userId2) {
        return this.af.database
            .object("/chats/" + userId1 + "/" + userId2)
            .catch(this.handleObservableError);
    };
    ChatServiceProvider.prototype.setChats = function () {
        var _this = this;
        this.af.auth.subscribe(function (authState) {
            if (authState) {
                _this.chats = _this.af.database.list("/chats/" + authState.auth.uid, {
                    query: {
                        orderByChild: 'timestamp'
                    }
                }).map(function (chats) {
                    return chats.reverse();
                }).catch(_this.handleObservableError);
            }
        });
    };
    ChatServiceProvider.prototype.updatePhoto = function (chat, chatPhoto, recipientUserPhoto) {
        if (chatPhoto != recipientUserPhoto) {
            return chat.update({
                photo: recipientUserPhoto
            }).then(function () {
                return true;
            }).catch(this.handlePromiseError);
        }
        return Promise.resolve(false);
    };
    return ChatServiceProvider;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));
ChatServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2__["a" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], ChatServiceProvider);

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name, username, email, photo) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.photo = photo;
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__botchat_botchat__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_signup__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profissionalLogin_profissionallogin__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clienteLogin_clientelogin__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.irCliente = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__clienteLogin_clientelogin__["a" /* ClienteLoginPage */]);
    };
    WelcomePage.prototype.irChatBot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__botchat_botchat__["a" /* BotchatPage */]);
    };
    WelcomePage.prototype.irCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage.prototype.irHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    WelcomePage.prototype.irProfissional = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profissionalLogin_profissionallogin__["a" /* ProfissionalLoginPage */]);
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\welcome\welcome.html"*/'<ion-content fullscreen padding text-center>\n\n  <img class="logo" src="assets/img/logo/spotted3.png" />\n\n\n\n\n\n  <div class="buttons">\n\n    <div class="information-slider" margin-bottom>\n\n      <ion-slides pager="true">\n\n          <ion-slide>\n\n            <p>Escute suas músicas e artistas favoritos a qualquer hora.</p>\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <p>Não precisa de cartão de crédito.</p>\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <p>Ouça música em todos os seus dispositivos.</p>\n\n          </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n    <button ion-button round class="login-button" color="spotify-light-green" (click) = "irCadastro()">Cadastre-se</button>\n\n    <p ion-text color="light">Já é usuário do Spotted?</p>\n\n    <button ion-button round class="login-button" color="light" (click) = "irCliente()">Entrar</button>\n\n    <button ion-button round class="login-button" color="light" (click) = "irHome()">Home</button>\n\n   \n\n    <!-- <button ion-button round class="login-button" color="light" (click) = "irProfissional()">Profissa</button>\n\n   -->\n\n  </div>\n\n\n\n  <video #player playsinline autoplay muted loop poster="assets/video/video-cover.jpg" id="bgvid">\n\n    <source src="assets/videos/video.mp4" type="video/mp4"> Your browser does not support the video tag.\n\n  </video>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerfilPageModule = (function () {
    function PerfilPageModule() {
    }
    return PerfilPageModule;
}());
PerfilPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */]),
        ],
    })
], PerfilPageModule);

//# sourceMappingURL=perfil.module.js.map

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		629,
		0
	],
	"../pages/perfil/perfil.module": [
		165
	],
	"../pages/welcome/welcome.module": [
		630,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
* Generated class for the SignupPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
var SignupPage = (function () {
    function SignupPage(loadingCtrl, alertCtrl, authService, userService, navCtrl, navParams, formBuilder) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.signupForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(3)]],
            username: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(3)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern(this.emailRegex)])]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(8)]]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.showLoading();
        var formUser = this.signupForm.value;
        var username = formUser.username;
        formUser.photo = '';
        //this.userService.userExists(username).take(1).subscribe(
        this.userService.userExists(username).first().subscribe(function (userExists) {
            if (!userExists) {
                _this.authService.createAuthUser({
                    email: formUser.email,
                    password: formUser.password
                }).then(function (authState) {
                    delete formUser.password;
                    var uuid = authState.auth.uid;
                    _this.userService.create(formUser, uuid).then(function () {
                        console.log('usuario cadastrado');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                        loading.dismiss();
                    }).catch(function (error) {
                        console.log(error);
                        loading.dismiss();
                        _this.showAlert(error);
                    }).catch(function (error) {
                        console.log(error);
                        loading.dismiss();
                        _this.showAlert(error);
                    });
                });
                console.log("testando form");
            }
            else {
                _this.showAlert('o username já está sendo utilizado em outra conta');
                loading.dismiss();
            }
        });
    }; //fim do método onSubmit
    SignupPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['OK']
        }).present();
    };
    SignupPage.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        return loading;
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n    <ion-navbar transparent>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n  <ion-content>\n\n    <div class="flex-container">\n\n      <h1>Criar conta</h1>\n\n<form [formGroup]="signupForm" (ngSubmit) = "onSubmit(); $event.preventDefault()">\n\n      <div class="signup-form animated fadeInRight">\n\n        <strong>Qual é o nome?</strong>\n\n        <ion-item class="input-signup">\n\n          <ion-input type="text" placeholder = "Nome" formControlName = "name"></ion-input>\n\n        </ion-item>\n\n        <p margin-bottom></p>\n\n        <strong>Qual é o seu nickname?</strong>\n\n        <ion-item class="input-signup">\n\n          <ion-input type="text" placeholder = "Username" formControlName = "username"></ion-input>\n\n        </ion-item>\n\n        <p margin-bottom></p>\n\n        <strong>Email</strong>\n\n        <ion-item class="input-signup">\n\n          <ion-input type="email" placeholder = "Email" formControlName = "email"></ion-input>\n\n        </ion-item>\n\n        <p margin-bottom>Poderá ser necessário validar este e-mail.</p>\n\n        <strong>Crie uma nova senha</strong>\n\n        <ion-item class="input-signup">\n\n          <ion-input type="password" placeholder = "Senha" formControlName = "password"></ion-input>\n\n        </ion-item>\n\n        <p>Escolha pelo menos oito caracteres.</p>\n\n      </div>\n\n      <br>\n\n      <div class="button">\n\n        <button ion-button round class="signup-button" \n\n        type = "submit" [disabled]="signupForm.invalid" >Cadastrar</button>\n\n      </div>\n\n    </form>\n\n    </div>\n\n\n\n\n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_chat_chat_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_message_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_message_model__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(menuCtrl, chatService, messageService, userService, authService, navCtrl, navParams) {
        this.menuCtrl = menuCtrl;
        this.chatService = chatService;
        this.messageService = messageService;
        this.userService = userService;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scrou = 8;
        this.podeir = 1;
    }
    /*
         <message-box  *ngFor="let m of messages | async" [message]="m" [isFromSender]="(m.userId == sender.$key)">{{m.text}}
         </message-box>
    */
    ChatPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true, 'user-menu');
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.menuCtrl.enable(false, 'user-menu');
        //   console.log('ionViewDidLoad ChatPage');
        this.recipient = this.navParams.get('recipientUser');
        this.pageTitle = this.recipient.name;
        this.userService.currentUser.first().subscribe(function (currentUser) {
            _this.sender = currentUser;
            _this.chat1 = _this.chatService.getDeepChat(_this.sender.$key, _this.recipient.$key);
            _this.chat2 = _this.chatService.getDeepChat(_this.recipient.$key, _this.sender.$key);
            _this.chat1.first().subscribe(function (chat) {
                _this.chatService.updatePhoto(_this.chat1, chat.photo, _this.recipient.photo);
            });
            var doSubscription = function () {
                _this.messages.subscribe(function (messages) {
                    _this.scrollToBottom();
                });
            };
            _this.messages = _this.messageService.getMessages(_this.sender.$key, _this.recipient.$key);
            _this.messages.first().subscribe(function (messages) {
                if (messages.length === 0) {
                    _this.messages = _this.messageService.getMessages(_this.recipient.$key, _this.sender.$key);
                    doSubscription();
                }
                else {
                    doSubscription();
                }
            });
        });
        //    this.scrou = 1;
    };
    ChatPage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    ChatPage.prototype.sendMessage = function (newMessage) {
        var _this = this;
        console.log(newMessage);
        if (newMessage) {
            console.log(newMessage);
            var currentTimestamp_1 = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database.ServerValue.TIMESTAMP;
            console.log(this.messages);
            this.messageService.create(new __WEBPACK_IMPORTED_MODULE_6__models_message_model__["a" /* Message */](this.sender.$key, newMessage, currentTimestamp_1), this.messages).
                then(function () {
                _this.chat1.update({
                    lastMessage: newMessage,
                    timestamp: currentTimestamp_1
                });
                _this.chat2.update({
                    lastMessage: newMessage,
                    timestamp: currentTimestamp_1
                });
            });
            console.log(this.messages);
        }
    };
    ChatPage.prototype.scrollToBottom = function (duration) {
        var _this = this;
        setTimeout(function () {
            if (_this.content._scroll) {
                _this.content.scrollToBottom(duration || 0);
            }
        }, 50);
    };
    ChatPage.prototype.scrollToTop = function (duration) {
        var _this = this;
        setTimeout(function () {
            if (_this.content._scroll) {
                _this.content.scrollToTop(duration || 0);
            }
        }, 50);
    };
    ChatPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll) {
            setTimeout(function () {
                _this.userService.currentUser.first().subscribe(function (currentUser) {
                    _this.sender = currentUser;
                    _this.messageService.loadMoreObjects();
                    _this.messages = _this.messageService.getMessages(_this.sender.$key, _this.recipient.$key);
                    _this.messages.first().subscribe(function (messages) {
                        if (messages.length === 0) {
                            _this.messages = _this.messageService.getMessages(_this.recipient.$key, _this.sender.$key);
                        }
                        else {
                        }
                    });
                });
                infiniteScroll.complete();
            }, 900);
        }
    };
    return ChatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Content */])
], ChatPage.prototype, "content", void 0);
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\chat\chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <custom-logged-header [user]="recipient"  [title]="pageTitle"> </custom-logged-header>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-infinite-scroll position="top" (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n  <ion-list  >\n    <div id="chatMessages">\n        <div ion-item  *ngFor="let m of messages | async" [class]="m.userId == sender.$key ? \'message special\' : \'message\' ">\n          <div class="innerMessage">\n            <h2 [class]="m.userId != sender.$key ? \'h2\' : \'hide\'">{{recipient.name}}</h2>\n            <h2 [class]="m.userId == sender.$key ? \'h2\' : \'hide\'">Você</h2>\n            <p class="message">{{m.text}}</p>\n            <p class="timestamp">{{m.timestamp | date :\'dd/MM/y H:mm\'}}</p>\n\n          </div>\n        </div>\n      </div>\n  </ion-list>\n  \n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-item no-lines>\n      <ion-input type="text" placeholder="Mensagem" (keyup.enter)="sendMessage(newMessage); newMessage = \'\'" (click)="sendMessage(newMessage); newMessage = \'\'" [(ngModel)]="newMessage"></ion-input>\n      <button ion-button item-right  >\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\chat\chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_0__providers_chat_chat_service__["a" /* ChatServiceProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_message_message_service__["a" /* MessageServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_user_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the MessageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var MessageServiceProvider = (function (_super) {
    __extends(MessageServiceProvider, _super);
    //public nbObjects: Subject<any>;
    function MessageServiceProvider(http, af) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.af = af;
        _this.nbObjects = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["BehaviorSubject"](33);
        /*    this.platform.ready().then(() => {
                  this.nbObjects.next(40);
                });
          */
        _this.nbObjects.next(_this.nbObjects.getValue() + 2);
        return _this;
    }
    MessageServiceProvider.prototype.loadMoreObjects = function () {
        this.nbObjects.next(this.nbObjects.getValue() + 15);
    };
    MessageServiceProvider.prototype.getMessages = function (userId1, userId2) {
        return this.af.database.list("/messages/" + userId1 + "-" + userId2, {
            query: {
                orderByChild: 'timestamp',
                limitToLast: this.nbObjects //limita o numero de mensagens que ira aparecer na tela
            }
        }).catch(this.handleObservableError);
    };
    MessageServiceProvider.prototype.create = function (message, listMessages) {
        return listMessages.push(message).catch(this.handlePromiseError);
    };
    return MessageServiceProvider;
}(__WEBPACK_IMPORTED_MODULE_4__base_service__["a" /* BaseService */]));
MessageServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_0_angularfire2__["a" /* AngularFire */]])
], MessageServiceProvider);

//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(userId, text, timestamp) {
        this.userId = userId;
        this.text = text;
        this.timestamp = timestamp;
    }
    return Message;
}());

//# sourceMappingURL=message.model.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpottedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_spotted_spotted_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_spotted_model__ = __webpack_require__(603);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
* Generated class for the SpottedPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
var SpottedPage = (function () {
    function SpottedPage(loadingCtrl, cd, spottedService, alertCtrl, authService, userService, navCtrl, navParams, formBuilder) {
        this.loadingCtrl = loadingCtrl;
        this.cd = cd;
        this.spottedService = spottedService;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.spottedForm = this.formBuilder.group({
            titulo: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(3)]],
            conteudo: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(10)]]
        });
    }
    SpottedPage.prototype.openSpotted = function () {
    };
    SpottedPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        console.log('ionViewDidLoad SpottedPage');
    };
    SpottedPage.prototype.onSubmit = function () {
        var _this = this;
        var currentTimestamp = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database.ServerValue.TIMESTAMP;
        var photo = '';
        var loading = this.showLoading();
        var formSpotted = this.spottedForm.value;
        var usernameId = this.currentUser.$key;
        var titulo = formSpotted.titulo;
        var conteudo = formSpotted.conteudo;
        console.log("nao sei pq da erro essa merda de " + currentTimestamp);
        this.spotted = new __WEBPACK_IMPORTED_MODULE_8__models_spotted_model__["a" /* Spotted */](titulo, conteudo, photo, this.currentUser.$key, this.currentUser.name, this.currentUser.photo, 0, 0, currentTimestamp);
        //this.spotteds = this.spottedService.getSpotteds(this.currentUser.$key);
        // this.spotteds = this.spottedService.getAllSpotteds();
        //      this.spottedService.create(this.spotted,this.spotteds,usernameId).then(() => {
        this.spottedService.create(this.spotted).then(function () {
            console.log('spotted criado');
            _this.filePhoto = undefined;
            _this.uploadProgress = 0;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
            loading.dismiss();
        }).catch(function (error) {
            console.log(error);
            loading.dismiss();
            _this.showAlert(error);
        });
        console.log("testando form");
        //   this.editSpotted();
    }; //fim do método onSubmit
    SpottedPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['OK']
        }).present();
    };
    SpottedPage.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        return loading;
    };
    return SpottedPage;
}());
SpottedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'page-spotted',template:/*ion-inline-start:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\spotted\spotted.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-navbar transparent>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="flex-container">\n    <h1>Mandar Spotted</h1>\n    <form [formGroup]="spottedForm" (ngSubmit)="onSubmit(); $event.preventDefault()">\n      <div class="signup-form animated fadeInRight">\n        <strong>Título</strong>\n        <ion-item class="input-signup">\n          <ion-input type="text" placeholder="Título" formControlName="titulo">\n          </ion-input>\n        </ion-item>\n        <strong>O que vem no seu Spotted?</strong>\n        <ion-item class="input-signup">\n          <ion-textarea type="text" rows="8" formControlName="conteudo"></ion-textarea>\n        </ion-item>\n        <p>Vamos lá,capricha!</p>\n          <!-- cordova.js required for cordova apps \n\n        <ion-item>\n          <ion-icon name="image" item-left></ion-icon>\n          <input type="file" accept="image/*" (change)="onPhoto($event)">\n        </ion-item>\n        <p>manda aquela foto!</p>\n        <progress-bar *ngIf="uploadProgress" [progress]="uploadProgress">\n        </progress-bar>\n-->\n        <div class="button">\n          <button ion-button round class="signup-button" type="submit" [disabled]="spottedForm.invalid">Enviar</button>\n        </div>\n      </div>\n      <br>\n    </form>\n  </div>\n </ion-content>'/*ion-inline-end:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\spotted\spotted.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_core__["k" /* ChangeDetectorRef */],
        __WEBPACK_IMPORTED_MODULE_0__providers_spotted_spotted_service__["a" /* SpottedServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_user_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
], SpottedPage);

//# sourceMappingURL=spotted.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpottedDetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_spotted_spotted_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_comentario_model__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpottedDetalhesPage = (function () {
    function SpottedDetalhesPage(userService, navCtrl, spottedService, navParams) {
        var _this = this;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.spottedService = spottedService;
        this.navParams = navParams;
        this.headerImage = "assets/images/background-small/33.jpg";
        this.active = true;
        this.data = navParams.get('spotted');
        this.numerodecomentarios = this.data.numComentarios;
        this.userService.currentUser.first().subscribe(function (currentUser) {
            _this.chaveUsuarioAtual = currentUser.$key;
            _this.usernameAtual = currentUser.username;
            _this.photo = currentUser.photo;
            console.log(currentUser.username);
        });
        this.comentarios = this.spottedService.getComentarios(this.data.$key);
    }
    SpottedDetalhesPage.prototype.ionViewDidLoad = function () {
        this.spotted1 = this.spottedService.retornaObjetoSpotted(this.data);
    };
    SpottedDetalhesPage.prototype.comentar = function (newComentario) {
        var _this = this;
        this.numerodecomentarios++;
        console.log(newComentario);
        if (newComentario) {
            console.log(newComentario);
            var currentTimestamp_1 = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP;
            console.log(this.comentarios);
            console.log(this.photo);
            //console.log(new Comentario(this.chaveUsuarioAtual, newComentario, currentTimestamp,this.usernameAtual,this.photo));
            this.spottedService.comentar(new __WEBPACK_IMPORTED_MODULE_4__models_comentario_model__["a" /* Comentario */](this.chaveUsuarioAtual, newComentario, this.usernameAtual, this.photo, currentTimestamp_1), this.data.$key).
                then(function () {
                _this.spotted1.update({
                    lastComentario: newComentario,
                    numComentarios: _this.numerodecomentarios,
                    timestampUltimoComentario: currentTimestamp_1
                });
            });
            console.log(this.comentarios);
        }
    };
    return SpottedDetalhesPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], SpottedDetalhesPage.prototype, "content", void 0);
SpottedDetalhesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-spotted-detalhes',template:/*ion-inline-start:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\spotted-detalhes\spotted-detalhes.html"*/'<!--- Theme Parallax - News -->\n<ion-header header-ios>\n  <ion-navbar transparent >\n  </ion-navbar>\n</ion-header>\n<!--- Header Big Image-->\n<ion-content elastic-header>\n  <ion-item no-lines background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + headerImage + \')\'}">\n    <div title-block *ngIf="data != null">\n      <!--- Category -->\n      <span new-category></span>\n      <!--- Parallax Title -->\n      <h1 parallax-title text-wrap>{{data.titulo}}</h1>\n      <h2 parallax-title text-wrap>by {{data.userNome}}</h2>\n\n    </div>\n  </ion-item>\n  <ion-item *ngIf="data != null">\n      <!--- Avatar -->\n      <ion-avatar item-start>\n        <img [src]=" data.userPhoto || \'assets/images/no-photo.jpg\'" />\n      </ion-avatar>\n      <h1 item-title>{{data.userNome}}</h1>\n\n      <!-- Content Title-->\n      <!-- Content Description-->\n      <p parallax-description text-wrap>{{data.conteudo}}</p>\n      <!--- Button Share-->\n      <button item-end ion-button color="primary" button-action-shit >\n        <ion-icon name="more"></ion-icon>\n      </button>\n  </ion-item>\n  <strong text-align=center>-</strong>\n\n  <ion-list  *ngFor="let c of comentarios | async" >\n  \n    <ion-item >\n          <!--- Avatar -->\n          <ion-avatar item-start>\n            <img [src]=" c.photo || \'assets/images/no-photo.jpg\'" />\n          </ion-avatar>\n          <h1 item-title>{{c.apelido}}</h1>\n    \n          <!-- Content Title-->\n          <!-- Content Description-->\n          <p parallax-description text-wrap>{{c.text}}</p>\n          <!--- Button Share-->\n          <button item-end ion-button color="primary" button-action-shit >\n            <ion-icon name="more"></ion-icon>\n          </button>\n      </ion-item>\n    </ion-list>\n\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-item no-lines>\n        <ion-input type="text" placeholder="Digite seu comentário" (keyup.enter)="comentar(newComentario); newComentario = \'\'" (click)="comentar(newComentario); newComentario = \'\'" [(ngModel)]="newComentario"></ion-input>\n        <button ion-button item-right  >\n          <ion-icon name="send"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\spotted-detalhes\spotted-detalhes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_user_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_spotted_spotted_service__["a" /* SpottedServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], SpottedDetalhesPage);

//# sourceMappingURL=spotted-detalhes.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuario = navParams.get('usuario');
        console.log(this.usuario);
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\perfil\perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n        {{usuario.name}}\n        </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item no-lines >\n        <ion-avatar item-right>\n            <img [src] ="usuario.photo || \'assets/images/no-photo.jpg\' ">\n          </ion-avatar>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\perfil\perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfissionalLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfissionalLoginPage = (function () {
    function ProfissionalLoginPage() {
    }
    return ProfissionalLoginPage;
}());
ProfissionalLoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\profissionalLogin\profissionallogin.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n  <ion-navbar transparent>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n \n\n</ion-content>'/*ion-inline-end:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\profissionalLogin\profissionallogin.html"*/,
    })
], ProfissionalLoginPage);

//# sourceMappingURL=profissionallogin.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ClienteLoginPage = (function () {
    function ClienteLoginPage(loadingCtrl, alertCtrl, authService, formBuilder, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.signinForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(emailRegex)])]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8)]]
        });
    }
    ClienteLoginPage.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.showLoading();
        this.authService.signinWithEmail(this.signinForm.value).then(function (isLogged) {
            if (isLogged) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                loading.dismiss();
            }
        }).catch(function (error) {
            loading.dismiss();
            _this.showAlert(error);
        });
    };
    ClienteLoginPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['OK']
        }).present();
    };
    ClienteLoginPage.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        return loading;
    };
    ClienteLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    ClienteLoginPage.prototype.onHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]).then(function (hasAccess) {
            console.log('Autorizado : ', hasAccess);
        }).catch(function (err) {
            console.log('Não Autorizado : ', err);
        });
    };
    ClienteLoginPage.prototype.onLogout = function () {
        this.authService.logout();
    };
    return ClienteLoginPage;
}());
ClienteLoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\clienteLogin\clientelogin.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n  <ion-navbar transparent>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <form [formGroup]="signinForm" (ngSubmit) = "onSubmit(); $event.preventDefault()">\n\n\n\n  <div class="flex-container">\n\n    <h1>Entrar</h1>\n\n\n\n    <div class="login-form animated fadeInRight">\n\n      <strong>Nome de usuário ou e-mail</strong>\n\n      <ion-item margin-bottom class="input-login">\n\n        <ion-input type="text" formControlName = "email"></ion-input>\n\n      </ion-item>\n\n\n\n\n\n      <strong>Senha</strong>\n\n      <ion-item class="input-login">\n\n        <ion-input type="password" formControlName = "password"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n\n\n    <div class="button">\n\n      <button ion-button round class="login-button"  type = "submit" [disabled]="signinForm.invalid">Entrar</button>\n\n      <p>Esqueceu sua senha?</p>\n\n    </div>\n\n  </div>\n\n \n\n\n\n\n\n\n\n</form>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\clienteLogin\clientelogin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */]])
], ClienteLoginPage);

//# sourceMappingURL=clientelogin.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__(70);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthServiceProvider = (function (_super) {
    __extends(AuthServiceProvider, _super);
    function AuthServiceProvider(auth, http) {
        var _this = _super.call(this) || this;
        _this.auth = auth;
        _this.http = http;
        _this.authenticatedref = _this.auth;
        console.log('Hello AuthProvider Provider');
        return _this;
    }
    AuthServiceProvider.prototype.createAuthUser = function (user) {
        return this.auth.createUser(user).catch(this.handlePromiseError);
    };
    AuthServiceProvider.prototype.signinWithEmail = function (user) {
        return this.auth.login(user).then(function (authState) {
            return authState != null;
        }).catch(this.handlePromiseError);
    };
    AuthServiceProvider.prototype.logout = function () {
        return this.auth.logout();
    };
    Object.defineProperty(AuthServiceProvider.prototype, "authenticated", {
        get: function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                console.log(_this.auth);
                _this.auth
                    .first().
                    subscribe(function (authState) {
                    (authState) ? resolve(true) : reject(false);
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    return AuthServiceProvider;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2__["b" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], AuthServiceProvider);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_user_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the UserProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserProfilePage = (function () {
    function UserProfilePage(menuCtrl, cd, authService, userService, navCtrl, navParams) {
        this.menuCtrl = menuCtrl;
        this.cd = cd;
        this.authService = authService;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.canEdit = false;
    }
    UserProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.menuCtrl.enable(false, 'user-menu');
        this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        console.log('ionViewDidLoad UserProfilePage');
    };
    UserProfilePage.prototype.onPhoto = function (event) {
        this.filePhoto = event.target.files[0];
    };
    UserProfilePage.prototype.editUser = function (photoUrl) {
        var _this = this;
        this.userService.edit({
            name: this.currentUser.name, username: this.currentUser.username, photo: photoUrl || '' ||
                this.currentUser.photo
        }).then(function () {
            _this.canEdit = false;
            _this.filePhoto = undefined;
            _this.uploadProgress = 0;
        });
    };
    UserProfilePage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true, 'user-menu');
    };
    UserProfilePage.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.filePhoto) {
            var uploadTask_1 = this.userService.uploadPhoto(this.filePhoto, this.currentUser.$key);
            uploadTask_1.on('state_changed', function (snapshot) {
                _this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                _this.cd.detectChanges();
            }, function (error) {
            }, function () {
                _this.editUser(uploadTask_1.snapshot.downloadURL);
            });
        }
        else {
            this.editUser();
        }
    };
    return UserProfilePage;
}());
UserProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-user-profile',template:/*ion-inline-start:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\user-profile\user-profile.html"*/'<!--\n  Generated template for the UserProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <custom-logged-header [title] = "\'Perfil\'"> </custom-logged-header>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<user-info [user] = "currentUser"></user-info>\n<button ion-button block (click) = "canEdit =!canEdit">\n  Editar\n</button> \n<form (ngSubmit)="onSubmit($event)" *ngIf="canEdit" #profileForm="ngForm" >\n<ion-item>\n  <ion-icon name="person" item-left></ion-icon>\n  <ion-input type="text" placeholder="Nome" name="name" [(ngModel)]="currentUser.name" required minLength="3">\n  </ion-input>\n</ion-item>\n<ion-item>\n    <ion-icon name="at" item-left></ion-icon>\n    <ion-input type="text" placeholder="Apelido" name="username" [(ngModel)]="currentUser.username" required minLength="3">\n    </ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-icon name="image" item-left></ion-icon>\n<input type="file" accept="image/*" (change) = "onPhoto($event)">\n  </ion-item>\n  <progress-bar *ngIf="uploadProgress" [progress]="uploadProgress">\n  </progress-bar>\n  <br>\n<button ion-button block type="submit" [disabled]="profileForm.form.invalid">Salvar</button>\n</form>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\user-profile\user-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_user_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */]])
], UserProfilePage);

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_welcome_welcome__ = __webpack_require__(154);

var BaseComponent = (function () {
    function BaseComponent(alertCtrl, authService, app, menuCtrl) {
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.app = app;
        this.menuCtrl = menuCtrl;
    }
    BaseComponent.prototype.ngOnInit = function () {
        this.navCtrl = this.app.getActiveNav();
    };
    BaseComponent.prototype.onLogout = function () {
        var _this = this;
        this.alertCtrl.create({
            message: 'Deseja sair?',
            buttons: [
                {
                    text: 'Sim',
                    handler: function () {
                        _this.authService.logout().then(function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_welcome_welcome__["a" /* WelcomePage */]);
                            _this.menuCtrl.enable(false, 'user-menu');
                        });
                    }
                },
                { text: 'Não' }
            ]
        }).present();
    };
    return BaseComponent;
}());

//# sourceMappingURL=base.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(295);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_perfil_perfil_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_botchat_botchat__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_progress_bar_progress_bar__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_user_profile_user_profile__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_message_message_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_capitalize_capitalize__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_custom_logged_header_custom_logged_header__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_clienteLogin_clientelogin__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_spotted_detalhes_spotted_detalhes__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_user_user_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_profissionalLogin_profissionallogin__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_chat_chat_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_message_box_message_box__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_user_menu_user_menu__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_user_info_user_info__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_spotted_spotted__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_spotted_spotted_service__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var firebaseAppConfig = {
    apiKey: "AIzaSyDBQl4HG_lqovYTg-ATndA3Co4JnUdoyiM",
    authDomain: "spottedagrvai.firebaseapp.com",
    databaseURL: "https://spottedagrvai.firebaseio.com",
    // projectId: "spottedagrvai",
    storageBucket: "spottedagrvai.appspot.com",
    messagingSenderId: "832356265521"
};
var firebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_20_angularfire2__["e" /* AuthProviders */].Custom,
    method: __WEBPACK_IMPORTED_MODULE_20_angularfire2__["d" /* AuthMethods */].Password
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_13__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__pages_user_profile_user_profile__["a" /* UserProfilePage */], __WEBPACK_IMPORTED_MODULE_1__pages_botchat_botchat__["a" /* BotchatPage */], __WEBPACK_IMPORTED_MODULE_28__pages_spotted_spotted__["a" /* SpottedPage */], __WEBPACK_IMPORTED_MODULE_2__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */], __WEBPACK_IMPORTED_MODULE_25__components_message_box_message_box__["a" /* MessageBoxComponent */], __WEBPACK_IMPORTED_MODULE_27__components_user_info_user_info__["a" /* UserInfoComponent */], __WEBPACK_IMPORTED_MODULE_26__components_user_menu_user_menu__["a" /* UserMenuComponent */], __WEBPACK_IMPORTED_MODULE_7__components_custom_logged_header_custom_logged_header__["a" /* CustomLoggedHeaderComponent */], __WEBPACK_IMPORTED_MODULE_6__pipes_capitalize_capitalize__["a" /* CapitalizePipe */], __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__["a" /* ChatPage */], __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_9__pages_clienteLogin_clientelogin__["a" /* ClienteLoginPage */], __WEBPACK_IMPORTED_MODULE_21__pages_spotted_detalhes_spotted_detalhes__["a" /* SpottedDetalhesPage */], __WEBPACK_IMPORTED_MODULE_23__pages_profissionalLogin_profissionallogin__["a" /* ProfissionalLoginPage */], __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__pages_perfil_perfil_module__["PerfilPageModule"],
            __WEBPACK_IMPORTED_MODULE_20_angularfire2__["c" /* AngularFireModule */].initializeApp(firebaseAppConfig, firebaseAuthConfig),
            __WEBPACK_IMPORTED_MODULE_14_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_28__pages_spotted_spotted__["a" /* SpottedPage */], __WEBPACK_IMPORTED_MODULE_21__pages_spotted_detalhes_spotted_detalhes__["a" /* SpottedDetalhesPage */], __WEBPACK_IMPORTED_MODULE_1__pages_botchat_botchat__["a" /* BotchatPage */], __WEBPACK_IMPORTED_MODULE_3__pages_user_profile_user_profile__["a" /* UserProfilePage */], __WEBPACK_IMPORTED_MODULE_9__pages_clienteLogin_clientelogin__["a" /* ClienteLoginPage */], __WEBPACK_IMPORTED_MODULE_23__pages_profissionalLogin_profissionallogin__["a" /* ProfissionalLoginPage */], __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */], __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__["a" /* ChatPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_13__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_14_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_22__providers_user_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_message_message_service__["a" /* MessageServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_24__providers_chat_chat_service__["a" /* ChatServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_29__providers_spotted_spotted_service__["a" /* SpottedServiceProvider */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mensagem; });
var Mensagem = (function () {
    function Mensagem(content, sentBy, timestamp) {
        this.content = content;
        this.sentBy = sentBy;
        this.timestamp = timestamp;
    }
    return Mensagem;
}());

//# sourceMappingURL=mensagem.model.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    dialogflow: {
        angularBot: '7a97da1eee1d4be1a2a15473d43dd98d'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(129);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







//import * as firebase from 'firebase';
/*
  Generated class for the UserProvider provider.
 
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var UserServiceProvider = (function (_super) {
    __extends(UserServiceProvider, _super);
    function UserServiceProvider(af, geolocation, platform, 
        /*@Inject(FirebaseApp) public firebaseApp: firebase.app.App*/
        firebaseApp, http) {
        var _this = _super.call(this) || this;
        _this.af = af;
        _this.geolocation = geolocation;
        _this.platform = platform;
        _this.firebaseApp = firebaseApp;
        _this.http = http;
        // nao precisa mais   this.users = this.af.database.list(`/users`);
        _this.listenAuthState();
        return _this;
    }
    UserServiceProvider.prototype.listenAuthState = function () {
        var _this = this;
        this.af.auth.subscribe(function (authState) {
            if (authState) {
                _this.currentUser = _this.af.database.object("/users/" + authState.auth.uid);
                // this.setUsersPerto(this.arrayUsuariosDistantes);
                console.log("usersprovider");
                _this.setUsers(authState.auth.uid);
            }
        });
    };
    UserServiceProvider.prototype.setUsers = function (uidToExclude) {
        this.users = this.af.database.list("users", {
            query: {
                orderByChild: 'name'
            }
        }).map(function (users) {
            return users.filter(function (user) { return user.$key !== uidToExclude; });
        });
    };
    UserServiceProvider.prototype.get = function (userId) {
        return this.af.database.object("/users/" + userId)
            .catch(this.handleObservableError);
    };
    UserServiceProvider.prototype.create = function (user, uuid) {
        //   return this.af.database.list(`/users`).push(user);
        //return this.users.push(user); 
        return this.af.database.object("/users/" + uuid).set(user).catch(this.handlePromiseError);
    };
    UserServiceProvider.prototype.edit = function (user) {
        return this.currentUser.update(user).catch(this.handlePromiseError);
    };
    UserServiceProvider.prototype.uploadPhoto = function (file, userId) {
        return this.firebaseApp.storage().ref().child("/users/" + userId).put(file);
    };
    /* // OUTRO MODO DE FAZER
    ref = firebase.database().ref('users/');
    
    create(user:User) {
     let newData = this.ref.push();
     newData.set(user);
    }
    
    
    */
    UserServiceProvider.prototype.userExists = function (username) {
        return this.af.database.list("/users", {
            query: {
                orderByChild: 'username',
                equalTo: username
            }
        }).map(function (users) {
            return users.length > 0;
        }).catch(this.handleObservableError);
    };
    return UserServiceProvider;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));
UserServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4_angularfire2__["f" /* FirebaseApp */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFire */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* Platform */]) === "function" && _c || Object, Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _d || Object])
], UserServiceProvider);

var _a, _b, _c, _d;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
var Chat = (function () {
    function Chat(lastMessage, timestamp, title, photo) {
        this.lastMessage = lastMessage;
        this.timestamp = timestamp;
        this.title = title;
        this.photo = photo;
    }
    return Chat;
}());

//# sourceMappingURL=chat.model.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spotted; });
var Spotted = (function () {
    function Spotted(titulo, conteudo, photo, userId, userNome, userPhoto, numComentarios, numLikes, timestamp) {
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.photo = photo;
        this.userId = userId;
        this.userNome = userNome;
        this.userPhoto = userPhoto;
        this.numComentarios = numComentarios;
        this.numLikes = numLikes;
        this.timestamp = timestamp;
    }
    return Spotted;
}());

//# sourceMappingURL=spotted.model.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comentario; });
var Comentario = (function () {
    function Comentario(userId, text, apelido, photo, timestamp) {
        this.userId = userId;
        this.text = text;
        this.apelido = apelido;
        this.photo = photo;
        this.timestamp = timestamp;
    }
    return Comentario;
}());

//# sourceMappingURL=comentario.model.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_spotted_spotted_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__botchat_botchat__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_chat_model__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_user_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_first__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__spotted_spotted__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__spotted_detalhes_spotted_detalhes__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__perfil_perfil__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_geofire__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_geofire__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















//import { errorHandler } from '@angular/platform-browser';

var HomePage = (function () {
    function HomePage(menuCtrl, geolocation, platform, spottedService, chatService, authService, userService, navCtrl, navParams) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.geolocation = geolocation;
        this.platform = platform;
        this.spottedService = spottedService;
        this.chatService = chatService;
        this.authService = authService;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.headerImage = "assets/images/background/22.jpg";
        this.view = 'spotteds';
        this.hits = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"]([]);
        this.referencia = spottedService.metodoretornareferencia().$ref;
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_17_geofire__(this.referencia);
        this.platform.ready().then(function () {
            var options = {
                timeout: 5000
            };
            geolocation.getCurrentPosition(options).then(function (resp) {
                _this.lat = resp.coords.latitude;
                _this.long = resp.coords.longitude;
                _this.arraydelocalizacao = [_this.lat, _this.long];
                console.log("array dentro do metodo getCurrentPosition" + _this.arraydelocalizacao);
                _this.userService.currentUser.first().subscribe(function (currentUser) {
                    _this.chave = currentUser.$key;
                });
                _this.setLocation(_this.chave, _this.arraydelocalizacao);
                console.log("yey");
                console.log(_this.getLocationUsers(1200, 100, _this.arraydelocalizacao));
            }).catch(function () {
                //erro
            });
        });
    }
    HomePage.prototype.getLocationUsers = function (radius, raioUsuario, coords) {
        var _this = this;
        var usuarioLoc = {};
        var usuariosPerto = [];
        var usuarioFinal = {};
        this.geoFire.query({
            center: coords,
            radius: radius
        })
            .on('key_entered', function (key, location, distance) {
            var hit = {
                location: location,
                distance: distance
            };
            usuarioLoc = {
                id: key,
                distancia: distance.toFixed(0),
                localizacao: location
            };
            var distancia_final;
            if (usuarioLoc['distancia'] < 1) {
                distancia_final = "< 1km";
            }
            else {
                distancia_final = usuarioLoc['distancia'] + "km";
            }
            _this.userService.get(key).subscribe(function (user) {
                usuarioFinal = {
                    id: key,
                    name: user.name,
                    photo: user.photo,
                    distancia: distancia_final,
                    localizacao: location
                };
                if (distance > raioUsuario) {
                    usuariosPerto.push(usuarioFinal);
                    _this.users = _this.users.map(function (users) {
                        return users.filter(function (user) {
                            return (user.$key !== key);
                        });
                    });
                }
            });
            var currentHits = _this.hits.value;
            currentHits.push(hit);
            _this.hits.next(currentHits);
        });
        this.geoFire.query({
            center: coords,
            radius: radius
        }).on('key_moved', function (key, location, distance) {
            var hit = {
                location: location,
                distance: distance
            };
            var currentHits = _this.hits.value;
            currentHits.push(hit);
            _this.hits.next(currentHits);
        });
        usuariosPerto.push(usuarioFinal);
        return usuariosPerto;
    };
    HomePage.prototype.setLocation = function (key, coords) {
        this.geoFire.set(key, coords);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.chats = this.chatService.chats;
        this.users = this.userService.users;
        this.spotteds = this.spottedService.spotteds;
        this.menuCtrl.enable(true, 'user-menu');
    };
    HomePage.prototype.onChatCreate = function (recipientUser) {
        var _this = this;
        this.userService.currentUser.first().subscribe(function (currentUser) { return _this.chatService.getDeepChat(currentUser.$key, recipientUser.$key).
            first().subscribe(function (chat) {
            if (chat.hasOwnProperty("$value")) {
                var timestamp = __WEBPACK_IMPORTED_MODULE_11_firebase___default.a.database.ServerValue.TIMESTAMP;
                var chat1 = new __WEBPACK_IMPORTED_MODULE_4__models_chat_model__["a" /* Chat */]('', timestamp, recipientUser.name, '');
                _this.chatService.create(chat1, currentUser.$key, recipientUser.$key);
                var chat2 = new __WEBPACK_IMPORTED_MODULE_4__models_chat_model__["a" /* Chat */]('', timestamp, currentUser.name, '');
                _this.chatService.create(chat1, recipientUser.$key, currentUser.$key);
            }
        }); });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */], {
            recipientUser: recipientUser
        });
    };
    HomePage.prototype.onLogout = function () {
        this.authService.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* WelcomePage */]);
    };
    HomePage.prototype.openPerfil = function (userId) {
        var _this = this;
        this.userService.get(userId).first().subscribe(function (user) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__perfil_perfil__["a" /* PerfilPage */], {
                usuario: user
            });
        });
    };
    HomePage.prototype.openSpotted = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__spotted_spotted__["a" /* SpottedPage */]);
    };
    HomePage.prototype.openChatBot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__botchat_botchat__["a" /* BotchatPage */]);
    };
    HomePage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    HomePage.prototype.deuLike = function (currentspotted) {
        var _this = this;
        var user = this.userService.currentUser;
        this.userService.currentUser.first().subscribe(function (currentUser) {
            _this.chaveUsuarioAtual = currentUser.$key;
        });
        this.spottedService.darLike(currentspotted, this.chaveUsuarioAtual);
        this.spottedService.atualizaLike(currentspotted, this.chaveUsuarioAtual);
    };
    HomePage.prototype.irParaPageDetalhesSpotted = function (spotted) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__spotted_detalhes_spotted_detalhes__["a" /* SpottedDetalhesPage */], { spotted: spotted });
    };
    HomePage.prototype.filterItems = function (event) {
        var searchTerm = event.target.value;
        this.chats = this.chatService.chats;
        this.users = this.userService.users;
        this.spotteds = this.spottedService.spotteds;
        if (searchTerm) {
            switch (this.view) {
                case 'chats':
                    this.chats = this.chats.map(function (chats) {
                        return chats.filter(function (chat) {
                            return (chat.title.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1);
                        });
                    });
                    break;
                case 'users':
                    this.users = this.users.map(function (users) {
                        return users.filter(function (user) {
                            return (user.name.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1);
                        });
                    });
                    break;
                case 'spotteds':
                    this.spotteds = this.spotteds.map(function (spotteds) {
                        return spotteds.filter(function (spotted) {
                            return (spotted.conteudo.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1);
                        });
                    });
                    break;
            }
        }
    };
    HomePage.prototype.onChatOpen = function (chat) {
        var _this = this;
        var recipientUserId = chat.$key;
        this.userService.get(recipientUserId).first().subscribe(function (user) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */], {
                recipientUser: user
            });
        });
    };
    HomePage.prototype.onSpottedOpen = function (spotted) {
        var _this = this;
        var recipientUserId = spotted.$key;
        this.userService.get(recipientUserId).first().subscribe(function (user) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */], {
                recipientUser: user
            });
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\home\home.html"*/'<ion-header>\n <custom-logged-header [title] = "view | capitalize : true"> </custom-logged-header>\n\n <ion-toolbar>\n  <ion-segment [(ngModel)] = "view">\n      <ion-segment-button value = "spotteds">\n          <ion-icon  name="home" color="primary"></ion-icon>\n              </ion-segment-button>\n    <ion-segment-button value = "chats">\n        <ion-icon  name="chatboxes" color="primary"></ion-icon>\n      </ion-segment-button>\n    <ion-segment-button value = "users">\n        <ion-icon  name="people" color="primary"></ion-icon>\n      </ion-segment-button>\n  </ion-segment>\n  <ion-searchbar  (ionInput)="filterItems($event)">\n    </ion-searchbar>\n</ion-toolbar>\n            <!--toolbar\n\n<ion-toolbar>\n    <ion-searchbar  (ionInput)="filterItems($event)">\n    </ion-searchbar>\n      \n  </ion-toolbar>\n-->\n  </ion-header>\n \n  \n  <ion-content  elastic-header>\n  \n    <div [ngSwitch] = "view">\n        <div *ngSwitchCase = "\'spotteds\'" background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + headerImage + \')\'}">\n            <!--Parallax Header Top-->\n            <div parallax-header *ngSwitchCase = "\'spotteds\'" >\n              <!--Parallax Subtitle -->\n              <h2 no-margin parallax-subtitle *ngSwitchCase = "\'spotteds\'"></h2>\n              <!--Parallax Title -->\n              <h2 no-margin parallax-title *ngSwitchCase = "\'spotteds\'">mais recentes</h2>\n            </div>\n          </div>\n  <ion-list *ngSwitchCase="\'spotteds\'">\n      <!--     COMENTARIO       -->\n      <!--     COMENTARIO            <img  round [src]="spotted.userId.photo || \'assets/images/no-photo.jpg\'">\n                    --> \n                  <ion-row>\n  \n                    <ion-row >\n            <ion-col *ngFor="let spotted of spotteds | async ">\n                <ion-card >  \n                    <p></p>\n              \n                    <ion-item >\n                      <ion-avatar item-start>\n                      <!--     COMENTARIO            <img  round [src]="spotted.userId.photo || \'assets/images/no-photo.jpg\'">\n                      -->\n                      <img  round  [src]="spotted.userPhoto || \'assets/images/no-photo.jpg\'">\n                    </ion-avatar>\n                      <h2 (click)="openPerfil(spotted.userId)">{{spotted.userNome}}</h2>\n                      <p>   {{spotted.timestamp | date : \'dd/MM/y H:mm\'  }} </p>\n                    </ion-item>\n                    <ion-item *ngIf ="spotted.userPhoto">\n                        <strong>{{spotted.titulo}}</strong>\n                      </ion-item>\n    \n                  <!--     COMENTARIO     || amTimeAgo        <img padding [src]="spotted.photo  ||  \'assets/images/download.jpg\'">\n                   -->        <img   *ngIf ="spotted.photo === \'\' " [src]=" \'assets/images/download.jpg\'">\n                   <div class = "card_title"    (click)="irParaPageDetalhesSpotted(spotted)" *ngIf ="spotted.photo === \'\' ">{{spotted.titulo}}</div>\n                 <br>\n                 <div class="card_subtitle" (click)="irParaPageDetalhesSpotted(spotted)" *ngIf ="spotted.photo === \'\' ">\n                   {{spotted.conteudo}}\n                  </div>\n                    <ion-card-content  (click)="irParaPageDetalhesSpotted(spotted)" *ngIf ="spotted.photo" >\n                      <p>{{spotted.conteudo}}</p>\n                    </ion-card-content>\n                  \n                    <ion-row>\n                      <ion-col>\n                        <button ion-button icon-left clear small (click)="deuLike(spotted,false)">\n                          <ion-icon name="thumbs-up"></ion-icon>\n                          <div  *ngIf="spotted.numLikes === 1 ; else customLikes">{{spotted.numLikes}} like</div>\n                          <ng-template #customLikes>\n                            <div>{{spotted.numLikes}} likes</div>\n                              </ng-template>\n                        </button>\n                      </ion-col>\n                      <ion-col>\n                        <button ion-button icon-left clear small>\n                          <ion-icon name="text"></ion-icon>\n                          <div *ngIf="spotted.numComentarios === 1 ; else customComentarios" (click)="irParaPageDetalhesSpotted(spotted)" >{{spotted.numComentarios}} comentário</div>\n                          <ng-template #customComentarios >\n                            <div (click)="irParaPageDetalhesSpotted(spotted)">{{spotted.numComentarios}} comentários</div>\n                              </ng-template>\n                        </button>\n                      </ion-col>\n                      <ion-col center text-center>\n                        <ion-note><strong>\n                        {{spotted.timestamp | date : \'dd/MM/y H:mm\'  }}   </strong>\n                        </ion-note>\n                      </ion-col>\n                    </ion-row>\n                  </ion-card>\n            </ion-col>\n    \n          </ion-row>\n  \n        </ion-row>\n  \n  \n      </ion-list>\n      <!-- Parallax Big Image -->\n      <div *ngSwitchCase = "\'chats\'" background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + headerImage + \')\'}">\n        <!--Parallax Header Top-->\n        <div parallax-header *ngSwitchCase = "\'chats\'" >\n          <!--Parallax Subtitle -->\n          <h2 no-margin parallax-subtitle *ngSwitchCase = "\'chats\'">a galera que você troca idéia</h2>\n          <!--Parallax Title -->\n          <h2 no-margin parallax-title *ngSwitchCase = "\'chats\'">Conversas</h2>\n        </div>\n      </div>\n      <!--Content-->\n      <ion-grid no-padding *ngSwitchCase = "\'chats\'">\n        <ion-row >\n          <ion-col col-12>\n            <ion-list no-margin>\n                          <!--eh aqui q vai o ngfor dos itens-->\n              <ion-item item-bcg border no-lines *ngFor = "let chat of chats | async" (click)="onChatOpen(chat)">\n                <!--Content Avatar-->\n                <ion-thumbnail item-start>\n                  <img [src]="chat.photo || \'assets/images/no-photo.jpg\'" alt="legenda">\n                </ion-thumbnail>\n                <!--Content Title-->\n                <h2 no-margin item-title>    {{chat.title}}                </h2>\n                <!--Content Subtitle-->\n                <h3 item-subtitle text-wrap *ngIf="chat.lastMessage ; else customMessage">  \n                    {{chat.timestamp | date : \'dd/MM/y H:mm\'}} - {{chat.lastMessage}} \n                </h3>\n                <ng-template #customMessage>\n                    <h3 item-subtitle text-wrap>\n                      Não há mensagens\n                    </h3>\n                      </ng-template>\n                <!--Content Badge-->\n                <ion-badge class="badge-light" item-end>online</ion-badge>\n              </ion-item>\n              <ion-item item-bcg border no-lines  (click)="openChatBot()">\n                  <!--Content Avatar-->\n                  <ion-thumbnail item-start>\n                    <img [src]="\'assets/images/no-photo.jpg\'" alt="legenda">\n                  </ion-thumbnail>\n                  <!--Content Title-->\n                  <h2 no-margin item-title>Robô</h2>\n                  <!--Content Subtitle-->\n                  <h3 item-subtitle text-wrap >  \n  Vem falar comigo\n                  </h3>\n                  \n                  <!--Content Badge-->\n                  <ion-badge class="badge-light" item-end>online</ion-badge>\n                </ion-item>\n                \n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n  <div *ngSwitchCase = "\'users\'" background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + headerImage + \')\'}">\n        <!--Parallax Header Top-->\n        <div parallax-header *ngSwitchCase = "\'users\'" >\n          <!--Parallax Subtitle -->\n          <h2 no-margin parallax-subtitle *ngSwitchCase = "\'users\'">a galera que você pode conhecer</h2>\n          <!--Parallax Title -->\n          <h2 no-margin parallax-title *ngSwitchCase = "\'users\'">Pessoas</h2>\n        </div>\n      </div>\n      <!--Content-->\n      <ion-grid no-padding *ngSwitchCase = "\'users\'">\n        <ion-row >\n          <ion-col col-12>\n            <ion-list no-margin>\n              <ion-item item-bcg border no-lines *ngFor = "let user of users | async" (click)="onChatCreate(user)">\n                <!--Content Avatar-->\n                <ion-thumbnail item-start>\n                  <img [src]="user.photo || \'assets/images/no-photo.jpg\'" alt="legenda">\n                </ion-thumbnail>\n                <!--Content Title-->\n                <h2 no-margin item-title>     {{user.name}}\n                  </h2>\n                  <h3 item-subtitle text-wrap >  \n                      {{user.username}}\n                                      </h3>\n                <!--Content Badge-->\n                <ion-badge class="badge-light" item-end>online</ion-badge>\n              </ion-item>\n             \n                \n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n\n  \n</div>\n\n<ion-fab left bottom>\n    <button ion-fab color="primary"\n      (click)="openSpotted()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab> \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["i" /* MenuController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["m" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__providers_spotted_spotted_service__["a" /* SpottedServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_spotted_spotted_service__["a" /* SpottedServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat_service__["a" /* ChatServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat_service__["a" /* ChatServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth_service__["a" /* AuthServiceProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10__providers_user_user_service__["a" /* UserServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__providers_user_user_service__["a" /* UserServiceProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["k" /* NavController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["l" /* NavParams */]) === "function" && _j || Object])
], HomePage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    return ProgressBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], ProgressBarComponent.prototype, "progress", void 0);
ProgressBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'progress-bar',template:/*ion-inline-start:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\components\progress-bar\progress-bar.html"*/'<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n    {{progress}}%\n  </div>\n</div>'/*ion-inline-end:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\components\progress-bar\progress-bar.html"*/
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, onlyFirst) {
        if (onlyFirst)
            return value.charAt(0).toUpperCase() + value.substr(1);
        var words = value.split(' ');
        var output = '';
        words.forEach(function (value, index, words) {
            output += value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() + ' ';
        });
        return output;
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'capitalize'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], CapitalizePipe);

//# sourceMappingURL=capitalize.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomLoggedHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__(153);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomLoggedHeaderComponent = (function (_super) {
    __extends(CustomLoggedHeaderComponent, _super);
    function CustomLoggedHeaderComponent(alertCtrl, authService, app, menuCtrl) {
        var _this = _super.call(this, alertCtrl, authService, app, menuCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.authService = authService;
        _this.app = app;
        _this.menuCtrl = menuCtrl;
        return _this;
    }
    return CustomLoggedHeaderComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_component__["a" /* BaseComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CustomLoggedHeaderComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */])
], CustomLoggedHeaderComponent.prototype, "user", void 0);
CustomLoggedHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'custom-logged-header',template:/*ion-inline-start:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\components\custom-logged-header\custom-logged-header.html"*/'<ion-navbar>\n  <ion-title>\n<ion-item color="transparent" detail-none no-lines *ngIf="user ; else titleTemplate">\n<ion-avatar item-right>\n  <img [src] ="user.photo || \'assets/images/no-photo.jpg\' ">\n</ion-avatar>\n{{title}}\n</ion-item>\n<ng-template #titleTemplate>\n  {{title}}\n</ng-template>\n  </ion-title>\n\n<ion-buttons end>\n  <button ion-button menuToggle="user-menu">\n    <ion-icon name="menu"></ion-icon>\n  </button>\n</ion-buttons>\n</ion-navbar>'/*ion-inline-end:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\components\custom-logged-header\custom-logged-header.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */]])
], CustomLoggedHeaderComponent);

//# sourceMappingURL=custom-logged-header.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
const config = {
  apiKey: "AIzaSyDBQl4HG_lqovYTg-ATndA3Co4JnUdoyiM",
  authDomain: "spottedagrvai.firebaseapp.com",
  databaseURL: "https://spottedagrvai.firebaseio.com",
  projectId: "spottedagrvai",
  storageBucket: "spottedagrvai.appspot.com",
  messagingSenderId: "832356265521"
};
 */
var MyApp = (function () {
    function MyApp(authService, userService, platform, statusBar, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'WelcomePage';
        authService.auth.subscribe(function (authState) {
            if (authState) {
                userService.currentUser.subscribe(function (user) {
                    _this.currentUser = user;
                });
            }
        });
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: 'HomePage' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\app\app.html"*/'<ion-menu persistent="true" side="right" [content]="content" enabled="false" id="user-menu">\n\n  <user-menu [user]="currentUser"></user-menu>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_auth_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_user_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_message_model__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MessageBoxComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var MessageBoxComponent = (function () {
    function MessageBoxComponent() {
    }
    return MessageBoxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__models_message_model__["a" /* Message */])
], MessageBoxComponent.prototype, "message", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], MessageBoxComponent.prototype, "isFromSender", void 0);
MessageBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'message-box',template:/*ion-inline-start:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\components\message-box\message-box.html"*/'<div padding class="text" [ngClass] = "{\'sender-background\' : isFromSender}">\n  <p>{{message.text}}\n  </p>\n  <p class="timestamp">{{message.timestamp | date :\'dd/MM/y H:mm\'}}</p>\n</div>\n<br>'/*ion-inline-end:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\components\message-box\message-box.html"*/,
        host: {
            '[style.justify-content]': '((!isFromSender) ? "flex-start" : "flex-end")',
            '[style.text-align]': '((!isFromSender) ? "left" : "right")'
        }
    }),
    __metadata("design:paramtypes", [])
], MessageBoxComponent);

//# sourceMappingURL=message-box.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_user_model__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_user_profile_user_profile__ = __webpack_require__(286);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UserMenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var UserMenuComponent = (function (_super) {
    __extends(UserMenuComponent, _super);
    function UserMenuComponent(alertCtrl, authService, app, menuCtrl) {
        var _this = _super.call(this, alertCtrl, authService, app, menuCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.authService = authService;
        _this.app = app;
        _this.menuCtrl = menuCtrl;
        return _this;
    }
    UserMenuComponent.prototype.onProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_user_profile_user_profile__["a" /* UserProfilePage */]);
    };
    return UserMenuComponent;
}(__WEBPACK_IMPORTED_MODULE_2__base_component__["a" /* BaseComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('user'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__models_user_model__["a" /* User */])
], UserMenuComponent.prototype, "currentUser", void 0);
UserMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'user-menu',template:/*ion-inline-start:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\components\user-menu\user-menu.html"*/'<ion-content>\n  <user-info [user]="currentUser" [isMenu]="true"></user-info>\n  <ion-list no-lines>\n    <button ion-item icon-right detail-nome menuClose="user-menu" (click) = "onProfile()">\n      Perfil\n      <ion-icon name="person" item-end></ion-icon>\n    </button>\n    <button ion-item icon-right detail-nome menuClose="user-menu" (click) = "onLogout()">\n        Sair\n        <ion-icon name="log-out" item-end></ion-icon>\n      </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\components\user-menu\user-menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* MenuController */]])
], UserMenuComponent);

//# sourceMappingURL=user-menu.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UserInfoComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var UserInfoComponent = (function () {
    function UserInfoComponent() {
        this.isMenu = false;
    }
    return UserInfoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */])
], UserInfoComponent.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], UserInfoComponent.prototype, "isMenu", void 0);
UserInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'user-info',template:/*ion-inline-start:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\components\user-info\user-info.html"*/'<div *ngIf="user">\n  <ion-avatar [ngClass] = "{\'custom-background\' : isMenu}">\n    <div class="round2" >\n    <img class = "round" [src] = "user.photo || \'assets/images/no-photo.jpg\'">\n    </div>\n  </ion-avatar>\n\n  <h2 text-center>{{user.name}}</h2>\n  <p text-center>@{{user.username}}</p>\n</div>'/*ion-inline-end:"C:\Users\Samsung\Downloads\geolocabackup\backupcomentariocompleto\novo2\ionic-spotify-theme\src\components\user-info\user-info.html"*/
    }),
    __metadata("design:paramtypes", [])
], UserInfoComponent);

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);


var extractError = function (error) {
    // In a real world app, we might use a remote logging infrastructure
    var errMsg;
    if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
        var body = error.json() || '';
        var err = body.error || JSON.stringify(body);
        errMsg = error.status + " - " + (error.statusText || '') + " " + err;
    }
    else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return errMsg;
};
var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.handlePromiseError = function (error) {
        return Promise.reject(extractError(error));
    };
    BaseService.prototype.handleObservableError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(extractError(error));
    };
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpottedServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_first__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








/*
  Generated class for the SpottedProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var SpottedServiceProvider = (function (_super) {
    __extends(SpottedServiceProvider, _super);
    function SpottedServiceProvider(af, http, firebaseApp) {
        var _this = _super.call(this) || this;
        _this.af = af;
        _this.http = http;
        _this.firebaseApp = firebaseApp;
        _this.nbObjects = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["BehaviorSubject"](33);
        console.log('Hello SpottedProvider Provider');
        _this.setSpotteds();
        return _this;
        //this.dbRef = this.af.database.list(`/spotteds/`);
        //  this.geoFire = new Geofire(this.dbRef.$ref);
    }
    SpottedServiceProvider.prototype.metodoretornareferencia = function () {
        return this.af.database.list("/localizacaoUsuarios");
    };
    SpottedServiceProvider.prototype.createLocationArr = function (lat, lng) {
        var location = [lat, lng];
        return location;
    };
    SpottedServiceProvider.prototype.getAllSpotteds = function () {
        return this.af.database.list("spotteds", {
            query: {
                orderByChild: 'timestamp',
            }
        }).catch(this.handleObservableError);
    };
    SpottedServiceProvider.prototype.setChats = function () {
        this.spotteds = this.af.database.list("spotteds", {
            query: {
                orderByChild: 'timestamp'
            }
        }).map(function (spotteds) {
            return spotteds.reverse();
        }).catch(this.handleObservableError);
    };
    SpottedServiceProvider.prototype.getSpotteds = function (userId1) {
        return this.af.database.list("/spotteds/" + userId1, {
            query: {
                orderByChild: 'timestamp',
            }
        }).catch(this.handleObservableError);
    };
    /*
    create(spotted : Spotted, listMessages : FirebaseListObservable<Spotted[]>,userId:string): firebase.Promise<void>{
      return listMessages.push(spotted).catch(this.handlePromiseError);
    }
*/
    SpottedServiceProvider.prototype.create = function (spotted) {
        return this.af.database.list("/spotteds/").push(spotted).catch(this.handlePromiseError);
    };
    SpottedServiceProvider.prototype.darLike = function (spotted, userId) {
        var item = this.retornaObjetoSpottedLike(spotted, userId);
        var itemRef = this.af.database.object("/spotteds/" + spotted.$key + "/" + userId).subscribe(function (snapshot) {
            console.log("qual q eh " + snapshot.usuarioDeuLike);
            if (snapshot.usuarioDeuLike == true) {
            }
            else {
                spotted.numLikes++;
                console.log("agr tem mais olha ,ja sao " + spotted.numLikes);
            }
        });
        return this.af.database.object("/spotteds/" + spotted.$key).set(spotted).catch(this.handlePromiseError);
    };
    SpottedServiceProvider.prototype.retornaObjetoSpotted = function (spotted) {
        return this.af.database.object("/spotteds/" + spotted.$key);
    };
    SpottedServiceProvider.prototype.retornaObjetoSpottedLike = function (spotted, userId) {
        return this.af.database.object("/spotteds/" + spotted.$key + "/" + userId);
    };
    SpottedServiceProvider.prototype.atualizaLike = function (spotted, userId) {
        var item = this.retornaObjetoSpottedLike(spotted, userId);
        return item.update({ usuarioDeuLike: true });
    };
    SpottedServiceProvider.prototype.getComentarios = function (spottedId) {
        return this.af.database.list("/comentarios/" + spottedId, {
            query: {
                orderByChild: 'timestamp',
                limitToLast: this.nbObjects //limita o numero de mensagens que ira aparecer na tela
            }
        }).catch(this.handleObservableError);
    };
    SpottedServiceProvider.prototype.loadMoreObjects = function () {
        this.nbObjects.next(this.nbObjects.getValue() + 15);
    };
    SpottedServiceProvider.prototype.comentar = function (comentario, spottedId) {
        return this.af.database.list("/comentarios/" + spottedId + "/").push(comentario).catch(this.handlePromiseError);
    };
    //  create(spotted: Spotted, userId: string): firebase.Promise<void> {
    //return this.af.database.object(`/chats/${userId1}/${userId2}`).set(chat).catch(this.handlePromiseError);
    //    return this.af.database.object(`/spotteds/${userId}`).set(spotted).catch(this.handlePromiseError);
    // }
    SpottedServiceProvider.prototype.edit = function (spotted) {
        return this.currentSpotted.update(spotted).catch(this.handlePromiseError);
    };
    SpottedServiceProvider.prototype.delete = function (spotted) {
        return this.af.database.object("/spotteds/" + spotted.$key).remove().catch(this.handlePromiseError);
    };
    SpottedServiceProvider.prototype.uploadPhoto = function (file, userId) {
        return this.firebaseApp.storage().ref().child("/spotteds/" + userId).put(file);
    };
    /*
    getDeepSpotted(userId1: string): FirebaseObjectObservable<Spotted> {
      return <FirebaseObjectObservable<Spotted>>this.af.database
        .object(`/spotteds/${userId1}/${userId2}`)
        .catch(this.handleObservableError);
    }
    */
    SpottedServiceProvider.prototype.setSpotteds = function () {
        var _this = this;
        this.af.auth.subscribe(function (authState) {
            if (authState) {
                _this.spotteds = _this.af.database.list("/spotteds", {
                    query: {
                        orderByChild: 'timestamp'
                    }
                }).map(function (spotteds) {
                    return spotteds.reverse();
                }).catch(_this.handleObservableError);
            }
        });
    };
    SpottedServiceProvider.prototype.updatePhoto = function (spotted, spottedPhoto, recipientUserPhoto) {
        if (spottedPhoto != recipientUserPhoto) {
            return spotted.update({
                photo: recipientUserPhoto
            }).then(function () {
                return true;
            }).catch(this.handlePromiseError);
        }
        return Promise.resolve(false);
    };
    return SpottedServiceProvider;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));
SpottedServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4_angularfire2__["f" /* FirebaseApp */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], Object])
], SpottedServiceProvider);

//# sourceMappingURL=spotted.service.js.map

/***/ })

},[290]);
//# sourceMappingURL=main.js.map