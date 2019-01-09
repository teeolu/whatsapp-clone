webpackHotUpdate("static\\development\\pages\\chat.js",{

/***/ "./component/Chatpage/StatusScreen/StatusDisplay/StatusDisplayHeader.jsx":
/*!*******************************************************************************!*\
  !*** ./component/Chatpage/StatusScreen/StatusDisplay/StatusDisplayHeader.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "c:\\Users\\olusola\\Desktop\\project\\lidstack\\NextJS\\Hacker-next\\component\\Chatpage\\StatusScreen\\StatusDisplay\\StatusDisplayHeader.jsx";


var StatusDisplayHeader = function StatusDisplayHeader(_ref) {
  var user = _ref.user;
  var userImage = user.picture ? user.picture.thumbnail : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat_list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat_list-item-left",
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
      backgroundImage: "url(".concat(userImage, ")"),
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, user.name ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat_list-item-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "chat_list-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "".concat(user.name.first, " ").concat(user.name.last)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "chat_list-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StatusDisplayHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatusDisplayHeader */ "./component/Chatpage/StatusScreen/StatusDisplay/StatusDisplayHeader.jsx");
var _jsxFileName = "c:\\Users\\olusola\\Desktop\\project\\lidstack\\NextJS\\Hacker-next\\component\\Chatpage\\StatusScreen\\StatusDisplay\\index.jsx";



var StatusDisplay = function StatusDisplay(_ref) {
  var user = _ref.user,
      ClassName = _ref.ClassName,
      cancelStatusScreen = _ref.cancelStatusScreen;
  var userImage = user.picture ? user.picture.thumbnail : null;
  var userImage1 = user.picture ? user.picture.large : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundImage: "url(".concat(userImage, ")"),
      zIndex: "15",
      height: "100vh",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      backgroundPosition: "center",
      backgroundSize: "cover"
    },
    className: ClassName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cancel_status-screen",
    onClick: cancelStatusScreen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "X"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "status_display-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StatusDisplayHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: userImage1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StatusDisplay);

/***/ })

})
//# sourceMappingURL=chat.js.0d858fa24d8f2ee01aad.hot-update.js.map