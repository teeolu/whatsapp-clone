webpackHotUpdate("static\\development\\pages\\chat.js",{

/***/ "./component/Chatpage/StatusScreen/StatusDisplay/StatusBottomInput.jsx":
/*!*****************************************************************************!*\
  !*** ./component/Chatpage/StatusScreen/StatusDisplay/StatusBottomInput.jsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var _StatusBottomInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatusBottomInput */ "./component/Chatpage/StatusScreen/StatusDisplay/StatusBottomInput.jsx");
/* harmony import */ var _StatusBottomInput__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_StatusBottomInput__WEBPACK_IMPORTED_MODULE_3__);
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
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cancel_status-screen",
    onClick: cancelStatusScreen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "X"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "status_display-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StatusDisplayHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "status_display-image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "status_display-image",
    src: userImage1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StatusBottomInput__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StatusDisplay);

/***/ })

})
//# sourceMappingURL=chat.js.a562d49c27f669d88ada.hot-update.js.map