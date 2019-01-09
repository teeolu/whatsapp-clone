webpackHotUpdate("static\\development\\pages\\chat.js",{

/***/ "./component/Chatpage/StatusScreen/index.jsx":
/*!***************************************************!*\
  !*** ./component/Chatpage/StatusScreen/index.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
            lineNumber: 20
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
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.props.statusScreenClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "status_screen-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "status_screen-left-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "owner_status-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
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
          lineNumber: 47
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "status_screen-left-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "RECENT"), this.renderStatus())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OwnersStatus__WEBPACK_IMPORTED_MODULE_3__["default"], {
        handleStatusClick: function handleStatusClick() {
          return _this2.handleStatusClick(owner);
        },
        cancelStatusScreen: this.props.changeStatusScreenClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StatusDisplay__WEBPACK_IMPORTED_MODULE_2__["default"], {
        user: this.state.activeStatus,
        ClassName: this.state.displayStatus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }));
    }
  }]);

  return StatusScreen;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StatusScreen);

/***/ })

})
//# sourceMappingURL=chat.js.f473163256d699d44dfb.hot-update.js.map