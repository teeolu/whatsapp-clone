module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/Chatpage/ChatMenu/ChatList.jsx":
/*!**************************************************!*\
  !*** ./component/Chatpage/ChatMenu/ChatList.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "c:\\Users\\olusola\\Desktop\\project\\lidstack\\NextJS\\Hacker-next\\component\\Chatpage\\ChatMenu\\ChatList.jsx";


var ChatList = function ChatList(_ref) {
  var img = _ref.img,
      name = _ref.name,
      activeChat = _ref.activeChat,
      cn = _ref.cn,
      activeChatChat = _ref.activeChatChat;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "user " + cn,
    onClick: activeChat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "user__image",
    src: img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user_info-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__info-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "user__info-right-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "user__info-right-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "last message")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__info-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "user__chat-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, new Date().getHours() + ":" + new Date().getMinutes()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "user__info-left-img",
    src: "/static/SVG/chevron-down.svg",
    alt: "",
    srcset: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatList);

/***/ }),

/***/ "./component/Chatpage/ChatMenu/index.jsx":
/*!***********************************************!*\
  !*** ./component/Chatpage/ChatMenu/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChatList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatList */ "./component/Chatpage/ChatMenu/ChatList.jsx");
/* harmony import */ var _utils_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Header */ "./component/utils/Header.jsx");
var _jsxFileName = "c:\\Users\\olusola\\Desktop\\project\\lidstack\\NextJS\\Hacker-next\\component\\Chatpage\\ChatMenu\\index.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ChatMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChatMenu, _React$Component);

  function ChatMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ChatMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ChatMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showActiveChat", function (user) {
      _this.props.activeChat(user);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderChats", function () {
      var users = _this.props.users;

      if (users) {
        return users.map(function (user, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChatList__WEBPACK_IMPORTED_MODULE_1__["default"], {
            key: i,
            cn: _this.props.user.login ? _this.props.user.login.uuid === user.login.uuid ? "active-chat" : "" : "",
            activeChat: function activeChat() {
              return _this.props.activeChat(user);
            },
            img: user.picture.thumbnail,
            name: "".concat(user.name.first, " ").concat(user.name.last),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          });
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, "loading");
      }
    });

    return _this;
  }

  _createClass(ChatMenu, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chat_menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chat_menu-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        img: "/static/images/imag1_1.jpg",
        showStatusScreen: this.props.showStatusScreen,
        svgIcons: ["spinner10", "message", "menu"],
        name: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "chat_menu-search-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/SVG/search.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "chat_menu-search-bar-input",
        placeholder: "Search or start new chat",
        type: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "chat__list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, this.renderChats()));
    }
  }]);

  return ChatMenu;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ChatMenu);

/***/ }),

/***/ "./component/Chatpage/ChatScreen/ActiveChat.jsx":
/*!******************************************************!*\
  !*** ./component/Chatpage/ChatScreen/ActiveChat.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Header */ "./component/utils/Header.jsx");
var _jsxFileName = "c:\\Users\\olusola\\Desktop\\project\\lidstack\\NextJS\\Hacker-next\\component\\Chatpage\\ChatScreen\\ActiveChat.jsx";



var ActiveChat = function ActiveChat(_ref) {
  var user = _ref.user;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "active_chat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: user.picture.thumbnail,
    svgIcons: ["search", "attachment", "menu"],
    name: "".concat(user.name.first, " ").concat(user.name.last),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "chat-screen-message-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/SVG/emoji-happy.svg",
    alt: "",
    className: "mesage_icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    placeholder: "Type your message",
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/SVG/mic.svg",
    alt: "",
    className: "mesage_icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ActiveChat);

/***/ }),

/***/ "./component/Chatpage/ChatScreen/NoActiveChat.jsx":
/*!********************************************************!*\
  !*** ./component/Chatpage/ChatScreen/NoActiveChat.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "c:\\Users\\olusola\\Desktop\\project\\lidstack\\NextJS\\Hacker-next\\component\\Chatpage\\ChatScreen\\NoActiveChat.jsx";


var NoActiveChat = function NoActiveChat() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "no_active_chat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat_screen-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat_screen-image-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "connected",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Keep your phone connected"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "brief_info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nbsp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "whatsapp_available",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "computer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "available",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "WhatsApp is available for Windows. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "get_it_here",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Get it here.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (NoActiveChat);

/***/ }),

/***/ "./component/Chatpage/ChatScreen/index.jsx":
/*!*************************************************!*\
  !*** ./component/Chatpage/ChatScreen/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NoActiveChat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoActiveChat */ "./component/Chatpage/ChatScreen/NoActiveChat.jsx");
/* harmony import */ var _ActiveChat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActiveChat */ "./component/Chatpage/ChatScreen/ActiveChat.jsx");
var _jsxFileName = "c:\\Users\\olusola\\Desktop\\project\\lidstack\\NextJS\\Hacker-next\\component\\Chatpage\\ChatScreen\\index.jsx";




var ChatScreen = function ChatScreen(_ref) {
  var user = _ref.user;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat_screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, !user.gender ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NoActiveChat__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActiveChat__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatScreen);

/***/ }),

/***/ "./component/Chatpage/StatusScreen/OwnersStatus.jsx":
/*!**********************************************************!*\
  !*** ./component/Chatpage/StatusScreen/OwnersStatus.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "c:\\Users\\olusola\\Desktop\\project\\lidstack\\NextJS\\Hacker-next\\component\\Chatpage\\StatusScreen\\OwnersStatus.jsx";


var OwnersStatus = function OwnersStatus(_ref) {
  var cancelStatusScreen = _ref.cancelStatusScreen,
      handleStatusClick = _ref.handleStatusClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "status_screen-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cancel_status-screen",
    onClick: cancelStatusScreen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "X"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "status_screen-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "status_screen-right-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "owners_status-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "View your updates"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "owners_status-image",
    onClick: handleStatusClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "owners_status-views",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "91"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "owners_status-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "yesterday at 11:51"))));
};

/* harmony default export */ __webpack_exports__["default"] = (OwnersStatus);

/***/ }),

/***/ "./component/Chatpage/StatusScreen/StatusDisplay/StatusBottomInput.jsx":
/*!*****************************************************************************!*\
  !*** ./component/Chatpage/StatusScreen/StatusDisplay/StatusBottomInput.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "c:\\Users\\olusola\\Desktop\\project\\lidstack\\NextJS\\Hacker-next\\component\\Chatpage\\StatusScreen\\StatusDisplay\\StatusBottomInput.jsx";


var StatusBottomInput = function StatusBottomInput() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "status_bottom-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "status_display-emoji",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "\u263A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "Type your reply",
    className: "status_display-text-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "status_display-enter-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "\u27A3"));
};

/* harmony default export */ __webpack_exports__["default"] = (StatusBottomInput);

/***/ }),

/***/ "./component/Chatpage/StatusScreen/StatusDisplay/StatusDisplayHeader.jsx":
/*!*******************************************************************************!*\
  !*** ./component/Chatpage/StatusScreen/StatusDisplay/StatusDisplayHeader.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "c:\\Users\\olusola\\Desktop\\project\\lidstack\\NextJS\\Hacker-next\\component\\Chatpage\\StatusScreen\\StatusDisplay\\StatusDisplayHeader.jsx";


var StatusDisplayHeader = function StatusDisplayHeader(_ref) {
  var user = _ref.user,
      onClick = _ref.onClick;
  var userImage = user.picture ? user.picture.thumbnail : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "status_display-header clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "status_display-header-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "status_header-back-arrow",
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "\u2190"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat_list-item-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "chat_list-item-svg",
    width: "48",
    height: "48",
    viewBox: "0 0 104 104",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    className: "svg-circle",
    cx: "52",
    cy: "52",
    r: "50",
    fill: "black",
    "stroke-linecap": "round",
    "stroke-width": "4",
    "stroke-dashoffset": "387.69908169872417",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chats_status-img",
    style: {
      backgroundImage: "url(".concat(userImage, ")"),
      height: "40px",
      width: "40px",
      borderRadius: "50%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, user.name ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat_list-item-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "chat_list-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "".concat(user.name.first, " ").concat(user.name.last)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "chat_list-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "today at ", new Date().getHours() + ":" + new Date().getMinutes())) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (StatusDisplayHeader);

/***/ }),

/***/ "./component/Chatpage/StatusScreen/StatusDisplay/index.jsx":
/*!*****************************************************************!*\
  !*** ./component/Chatpage/StatusScreen/StatusDisplay/index.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StatusDisplayHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatusDisplayHeader */ "./component/Chatpage/StatusScreen/StatusDisplay/StatusDisplayHeader.jsx");
/* harmony import */ var _StatusBottomInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatusBottomInput */ "./component/Chatpage/StatusScreen/StatusDisplay/StatusBottomInput.jsx");
var _jsxFileName = "c:\\Users\\olusola\\Desktop\\project\\lidstack\\NextJS\\Hacker-next\\component\\Chatpage\\StatusScreen\\StatusDisplay\\index.jsx";




var StatusDisplay = function StatusDisplay(_ref) {
  var user = _ref.user,
      ClassName = _ref.ClassName,
      cancelStatusScreen = _ref.cancelStatusScreen;
  var userImage = user.picture ? user.picture.thumbnail : null;
  var userImage1 = user.picture ? user.picture.large : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ClassName,
    style: {
      backgroundImage: "linear-gradient(rgba(0,0,0, .4), rgba(0, 0, 0, .4)),url(".concat(userImage, ")"),
      zIndex: "15",
      height: "100vh",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      backgroundPosition: "center",
      backgroundSize: "cover"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cancel_status-screen",
    onClick: cancelStatusScreen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "X"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "status_display-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StatusDisplayHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    user: user,
    onClick: cancelStatusScreen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "status_display-image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "status_display-image",
    src: userImage1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StatusBottomInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StatusDisplay);

/***/ }),

/***/ "./component/Chatpage/StatusScreen/StatusList.jsx":
/*!********************************************************!*\
  !*** ./component/Chatpage/StatusScreen/StatusList.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "c:\\Users\\olusola\\Desktop\\project\\lidstack\\NextJS\\Hacker-next\\component\\Chatpage\\StatusScreen\\StatusList.jsx";


var StatusList = function StatusList(_ref) {
  var className = _ref.className,
      handleStatusClick = _ref.handleStatusClick,
      user = _ref.user;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    onClick: function onClick() {
      return handleStatusClick();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat_list-item-left clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "chat_list-item-svg",
    width: "48",
    height: "48",
    viewBox: "0 0 104 104",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    className: "svg-circle",
    cx: "52",
    cy: "52",
    r: "50",
    fill: "black",
    "stroke-linecap": "round",
    "stroke-width": "4",
    "stroke-dashoffset": "387.69908169872417",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chats_status-img",
    style: {
      backgroundImage: "url(".concat(user.picture.thumbnail, ")"),
      height: "40px",
      width: "40px",
      borderRadius: "50%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat_list-item-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "chat_list-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "".concat(user.name.first, " ").concat(user.name.last)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "chat_list-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "today at ", new Date().getHours() + ":" + new Date().getMinutes())));
};

/* harmony default export */ __webpack_exports__["default"] = (StatusList);

/***/ }),

/***/ "./component/Chatpage/StatusScreen/index.jsx":
/*!***************************************************!*\
  !*** ./component/Chatpage/StatusScreen/index.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StatusList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatusList */ "./component/Chatpage/StatusScreen/StatusList.jsx");
/* harmony import */ var _StatusDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatusDisplay */ "./component/Chatpage/StatusScreen/StatusDisplay/index.jsx");
/* harmony import */ var _OwnersStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OwnersStatus */ "./component/Chatpage/StatusScreen/OwnersStatus.jsx");
var _jsxFileName = "c:\\Users\\olusola\\Desktop\\project\\lidstack\\NextJS\\Hacker-next\\component\\Chatpage\\StatusScreen\\index.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var StatusScreen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StatusScreen, _React$Component);

  function StatusScreen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StatusScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StatusScreen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activeStatus: {},
      displayStatus: "hide"
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleStatusClick", function (user) {
      _this.setState({
        activeStatus: user,
        displayStatus: "unhide"
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hideDisplayStatus", function () {
      _this.setState({
        displayStatus: "hide"
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderStatus", function () {
      return _this.props.users.map(function (user, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StatusList__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: i,
          className: "chat_list-item",
          handleStatusClick: function handleStatusClick() {
            return _this.handleStatusClick(user);
          },
          user: user,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        });
      });
    });

    return _this;
  }

  _createClass(StatusScreen, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var owner = {
        picture: {
          thumbnail: "/static/images/imag1_1.jpg",
          large: "/static/images/imag1_1.jpg"
        },
        name: {
          first: "My",
          last: "status"
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "status-screen_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.props.statusScreenClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "status_screen-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "status_screen-left-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "owner_status-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StatusList__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "chat_list-item",
        handleStatusClick: function handleStatusClick() {
          return _this2.handleStatusClick(owner);
        },
        user: owner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "status_screen-left-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "RECENT"), this.renderStatus())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OwnersStatus__WEBPACK_IMPORTED_MODULE_3__["default"], {
        handleStatusClick: function handleStatusClick() {
          return _this2.handleStatusClick(owner);
        },
        cancelStatusScreen: this.props.changeStatusScreenClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StatusDisplay__WEBPACK_IMPORTED_MODULE_2__["default"], {
        user: this.state.activeStatus,
        ClassName: this.state.displayStatus,
        cancelStatusScreen: this.hideDisplayStatus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }));
    }
  }]);

  return StatusScreen;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StatusScreen);

/***/ }),

/***/ "./component/Chatpage/index.jsx":
/*!**************************************!*\
  !*** ./component/Chatpage/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChatScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatScreen */ "./component/Chatpage/ChatScreen/index.jsx");
/* harmony import */ var _ChatMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatMenu */ "./component/Chatpage/ChatMenu/index.jsx");
/* harmony import */ var _StatusScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatusScreen */ "./component/Chatpage/StatusScreen/index.jsx");
var _jsxFileName = "c:\\Users\\olusola\\Desktop\\project\\lidstack\\NextJS\\Hacker-next\\component\\Chatpage\\index.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ChatPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChatPage, _React$Component);

  function ChatPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ChatPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ChatPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      users: [],
      activeChat: {},
      statusScreenClass: "hide"
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateStatusScreenClass", function (ClassName) {
      _this.setState({
        statusScreenClass: ClassName
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateActiveChat", function (user) {
      _this.setState({
        activeChat: user
      });
    });

    return _this;
  }

  _createClass(ChatPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("https://randomuser.me/api/?results=15").then(function (response) {
        return response.json();
      }).then(function (resp) {
        return _this2.setState({
          users: resp.results
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          users = _this$state.users,
          activeChat = _this$state.activeChat,
          statusScreenClass = _this$state.statusScreenClass;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: statusScreenClass === "status_screen" ? "hide" : "chatpage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChatMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
        users: users,
        user: activeChat,
        showStatusScreen: function showStatusScreen() {
          return _this3.updateStatusScreenClass("status_screen");
        },
        activeChat: function activeChat(user) {
          return _this3.updateActiveChat(user);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChatScreen__WEBPACK_IMPORTED_MODULE_1__["default"], {
        user: activeChat,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StatusScreen__WEBPACK_IMPORTED_MODULE_3__["default"], {
        changeStatusScreenClass: function changeStatusScreenClass() {
          return _this3.updateStatusScreenClass("hide");
        },
        statusScreenClass: statusScreenClass,
        users: users,
        user: activeChat,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }));
    }
  }]);

  return ChatPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ChatPage);

/***/ }),

/***/ "./component/utils/Header.jsx":
/*!************************************!*\
  !*** ./component/utils/Header.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "c:\\Users\\olusola\\Desktop\\project\\lidstack\\NextJS\\Hacker-next\\component\\utils\\Header.jsx";


var Header = function Header(_ref) {
  var img = _ref.img,
      svgIcons = _ref.svgIcons,
      name = _ref.name,
      showStatusScreen = _ref.showStatusScreen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat_header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat_header_name_image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "header_image",
    src: img,
    alt: name + " image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat_header-chatlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "header_svg-icon-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, svgIcons.map(function (svgIcon, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      onClick: svgIcon === "spinner10" ? function () {
        return showStatusScreen();
      } : function () {
        return null;
      },
      className: "header_svg-icon",
      key: i,
      src: "/static/SVG/".concat(svgIcon, ".svg"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/chat.jsx":
/*!************************!*\
  !*** ./pages/chat.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Chatpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Chatpage */ "./component/Chatpage/index.jsx");
var _jsxFileName = "c:\\Users\\olusola\\Desktop\\project\\lidstack\\NextJS\\Hacker-next\\pages\\chat.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Chat =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Chat, _React$Component);

  function Chat() {
    _classCallCheck(this, Chat);

    return _possibleConstructorReturn(this, _getPrototypeOf(Chat).apply(this, arguments));
  }

  _createClass(Chat, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/style.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Chatpage__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }));
    }
  }]);

  return Chat;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/chat.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/chat.jsx */"./pages/chat.jsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=chat.js.map