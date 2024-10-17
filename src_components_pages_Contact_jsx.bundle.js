"use strict";
(self["webpackChunkmyapp"] = self["webpackChunkmyapp"] || []).push([["src_components_pages_Contact_jsx"],{

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

/***/ "./src/components/pages/Contact.jsx":
/*!******************************************!*\
  !*** ./src/components/pages/Contact.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _ocdla_global_components_src_Social__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ocdla/global-components/src/Social */ "./node_modules/@ocdla/global-components/src/Social.jsx");
/* harmony import */ var _ocdla_global_components_src_ContentPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ocdla/global-components/src/ContentPanel */ "./node_modules/@ocdla/global-components/src/ContentPanel.jsx");
/** @jsx vNode */ /** @jsxFrag "Fragment" */



function Contact() {
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("Fragment", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_ContentPanel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    heading: "contact us"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", {
    "class": "text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]"
  }, "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus senectus leo leo tristique integer curabitur elementum ex. Erat sed inceptos sapien facilisi auctor eleifend senectus inceptos. Himenaeos potenti condimentum inceptos vulputate ultrices egestas posuere. Libero porta platea scelerisque taciti nostra duis quisque nulla. Posuere a ex fringilla eros nascetur pretium mi. Posuere potenti placerat auctor cras arcu ut facilisis sem at. Litora penatibus laoreet conubia fusce sapien habitasse.")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("section", {
    "class": "mb-8 container mx-auto flex flex-row justify-between gap-8"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "flex-1"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("h3", {
    "class": "subpixel-antialiased mb-8 text-wb-cordovan text-[2rem] content-heading font-default-heading"
  }, "send us a message"), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("form", {
    "class": "form flex flex-col w-full font-default-heading"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "py-4"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("label", {
    "class": "block"
  }, "Name"), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("input", {
    type: "text",
    size: "45"
  })), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "py-4"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("label", {
    "class": "block"
  }, "Email"), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("input", {
    type: "text",
    size: "45"
  })), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "py-4"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("label", {
    "class": "block"
  }, "Message"), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("textarea", {
    rows: "10",
    cols: "45"
  })), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "py-4"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("button", {
    type: "submit",
    "class": "mt-8 border-2 border-wb-cordovan bg-wb-cordovan text-wb-white w-40 rounded p-2"
  }, "Submit")))), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "flex-1 hidden tablet:block"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("img", {
    src: "../images/logos/Waldbusser Ciderworks - Logo Cordovan.png"
  }))), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("section", {
    "class": "mb-8 container mx-auto"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("h3", {
    "class": "subpixel-antialiased mb-8 text-wb-cordovan text-[2rem] content-heading font-default-heading"
  }, "SOCIAL MEDIA"), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_Social__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "instagram-solid": "/"
  })), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("section", {
    "class": "mb-8 container mx-auto"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("h3", {
    "class": "subpixel-antialiased mb-8 text-wb-cordovan text-[2rem] content-heading font-default-heading"
  }, "OUR LOCATIONS"), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "text-base"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, "Waldbusser Ciderworks"), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, "4473 SE 3rd St."), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, "Corvallis, OR  97333"), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("a", {
    href: "http://ciderworks.ocdla.org/",
    "class": "hover:text-wb-lime"
  }, "waldbusserciderworks.com")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("a", {
    href: "tel:+14106101726",
    "class": "hover:text-wb-lime"
  }, "(410) 610-1726")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("a", {
    href: "mailto:info@waldbusserciderworks.com",
    "class": "hover:text-wb-lime"
  }, "info@waldbusserciderworks.com")))));
}

/***/ })

}]);
//# sourceMappingURL=src_components_pages_Contact_jsx.bundle.js.map