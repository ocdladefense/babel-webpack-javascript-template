"use strict";
(self["webpackChunkmyapp"] = self["webpackChunkmyapp"] || []).push([["src_components_pages_About_jsx"],{

/***/ "./node_modules/@ocdla/global-components/src/ContentPanel.jsx":
/*!********************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/ContentPanel.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TwoColumnPanel)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/** @jsx vNode */ /** @jsxFrag "Fragment" */

function TwoColumnPanel(_ref) {
  var heading = _ref.heading,
    children = _ref.children,
    _ref$striped = _ref.striped,
    striped = _ref$striped === void 0 ? false : _ref$striped;
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("section", {
    style: "position:relative;",
    "class": "fullscreen bg-default-background laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "container row-span-1 laptop:mx-0"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("h3", {
    "class": "subpixel-antialiased mb-8 text-wb-cordovan text-[2rem] content-heading font-marketing"
  }, heading)), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "laptop:container mb-32 laptop:mb-16 row-span-4"
  }, children)));
}

/***/ }),

/***/ "./src/components/pages/About.jsx":
/*!****************************************!*\
  !*** ./src/components/pages/About.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _ocdla_global_components_src_ContentPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ocdla/global-components/src/ContentPanel */ "./node_modules/@ocdla/global-components/src/ContentPanel.jsx");
/** @jsx vNode */ /** @jsxFrag "Fragment" */


function About() {
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("Fragment", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_ContentPanel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    heading: "mission"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", {
    "class": "font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]"
  }, "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus senectus leo leo tristique integer curabitur elementum ex. Erat sed inceptos sapien facilisi auctor eleifend senectus inceptos. Himenaeos potenti condimentum inceptos vulputate ultrices egestas posuere. Libero porta platea scelerisque taciti nostra duis quisque nulla. Posuere a ex fringilla eros nascetur pretium mi. Posuere potenti placerat auctor cras arcu ut facilisis sem at. Litora penatibus laoreet conubia fusce sapien habitasse.")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_ContentPanel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    heading: "our story",
    striped: true
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", {
    "class": "font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]"
  }, "Ornare fermentum nisl conubia nam feugiat commodo. Sagittis eleifend ipsum platea fringilla condimentum habitasse faucibus. Blandit enim porta felis taciti mauris molestie. Scelerisque ullamcorper euismod in tempus id; at cursus. Maecenas sed suscipit massa diam fusce donec elementum neque. Platea lectus luctus ipsum luctus, placerat porta. Iaculis maximus pharetra etiam odio euismod. Dapibus dui scelerisque ante suscipit amet ornare.")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_ContentPanel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    heading: "services"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", {
    "class": "font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]"
  }, "Himenaeos sodales lectus vulputate est curabitur massa. Class lobortis inceptos, sagittis pharetra semper vel. Proin elementum netus condimentum enim cubilia dapibus nunc aptent. Netus tellus tortor metus aliquam platea quisque dictumst facilisi imperdiet. Primis primis congue faucibus velit; egestas neque maecenas. Sed conubia quis ex mi varius; id efficitur placerat non. Ligula maximus suscipit non morbi erat vitae pellentesque aenean.")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_ContentPanel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    heading: "testimonials"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", {
    "class": "font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]"
  }, "Himenaeos sodales lectus vulputate est curabitur massa. Class lobortis inceptos, sagittis pharetra semper vel. Proin elementum netus condimentum enim cubilia dapibus nunc aptent. Netus tellus tortor metus aliquam platea quisque dictumst facilisi imperdiet. Primis primis congue faucibus velit; egestas neque maecenas. Sed conubia quis ex mi varius; id efficitur placerat non. Ligula maximus suscipit non morbi erat vitae pellentesque aenean.")));
}

/***/ })

}]);
//# sourceMappingURL=src_components_pages_About_jsx.bundle.js.map