"use strict";
(self["webpackChunkmyapp"] = self["webpackChunkmyapp"] || []).push([["src_components_pages_Home_jsx"],{

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
    "class": "fullscreen bg-sunshine laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22"
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

/***/ "./node_modules/@ocdla/global-components/src/TwoColumnPanel.jsx":
/*!**********************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/TwoColumnPanel.jsx ***!
  \**********************************************************************/
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
    _ref$order = _ref.order,
    order = _ref$order === void 0 ? "ltr" : _ref$order,
    _ref$striped = _ref.striped,
    striped = _ref$striped === void 0 ? false : _ref$striped;
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("section", {
    style: "position:relative;",
    "class": "fullscreen bg-sunshine laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "container row-span-1 laptop:mx-0"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("h3", {
    "class": "subpixel-antialiased mb-8 text-wb-cordovan text-[2rem] content-heading font-marketing"
  }, heading)), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "container-none tablet:grid laptop:container mx-auto h-full tablet:grid-cols-3 gap-6 laptop:gap-8 tablet:grid-flow-row row-span-4"
  }, order == "rtl" ? (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("Fragment", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "subpixel-antialiased col-span-2 justify-self-start"
  }, children[1]), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "col-span-1 order-first laptop:order-last laptop:flex laptop:justify-self-end"
  }, children[0])) : (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("Fragment", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "col-span-1 laptop:flex laptop:justify-self-start"
  }, children[0]), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "subpixel-antialiased col-span-2"
  }, children[1])))));
}

/***/ }),

/***/ "./src/components/pages/Home.jsx":
/*!***************************************!*\
  !*** ./src/components/pages/Home.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _ocdla_global_components_src_TwoColumnPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ocdla/global-components/src/TwoColumnPanel */ "./node_modules/@ocdla/global-components/src/TwoColumnPanel.jsx");
/* harmony import */ var _ocdla_global_components_src_ContentPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ocdla/global-components//src/ContentPanel */ "./node_modules/@ocdla/global-components/src/ContentPanel.jsx");
/** @jsx vNode */ /** @jsxFrag "Fragment" */



function Home() {
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("Fragment", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_TwoColumnPanel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    heading: "our philosophy",
    order: "ltr"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("img", {
    src: "../images/mockup/stock-photo-1.png",
    "class": "rounded pb-8 "
  }), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", {
    "class": "font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]"
  }, "Great cider starts with great ingredients. Our commitment to quality begins with sourcing the finest apples from local orchards. By partnering with growers who share our passion for sustainability and excellence, we ensure that every sip of our cider is a reflection of the rich, fertile Oregon landscape. ", (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("a", {
    href: "/growers"
  }, "Meet the Growers."))), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_TwoColumnPanel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    heading: "slow cider",
    order: "rtl",
    striped: true
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("img", {
    src: "../images/mockup/stock-photo-2.png",
    "class": "rounded pb-8 "
  }), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", {
    "class": "font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]"
  }, "Patience is at the core of our cider-making process. Unlike mass-produced ciders that rush through fermentation, we embrace a slow fermentation method that allows the natural flavors and aromas of the apples to develop fully. This careful approach results in ciders that are complex, well-balanced, and brimming with character.")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_TwoColumnPanel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    heading: "transparency",
    order: "lrt"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("img", {
    src: "../images/mockup/stock-photo-3.png",
    "class": "rounded pb-8 "
  }), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", {
    "class": "font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]"
  }, "We take pride in our transparent production practices. From apple to bottle, we invite you to see every step of our process. Whether it's detailed information on our apple varieties, or insights into our fermentation techniques, we're dedicated to being open about how our ciders are made. Transparency is not just a buzzword for us; it's a commitment to our customers and a cornerstone of our brand.")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_TwoColumnPanel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    heading: "our ciders",
    order: "rtl"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("img", {
    src: "../images/bottles/bottles.png",
    "class": "rounded pb-8 "
  }), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", {
    "class": "font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]"
  }, "Each cider we produce tells a story. From crisp, refreshing styles to rich, robust blends, our range caters to all palates. Every bottle is a testament to our dedication to craft, quality, and tradition. Explore our collection and discover your new favorite cider.")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_ContentPanel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    heading: "join our community"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", {
    "class": "font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg laptop:text-[17px]"
  }, "Stay connected with us through our social media channels. Be the first to know about new releases, special events, and exclusive offers. Join our community of cider enthusiasts and share in the journey of crafting exceptional ciders."), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", {
    "class": "font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg laptop:text-[17px]"
  }, "Thank you for choosing Waldbusser Ciderworks. Cheers to slow cider!")));
}

/***/ })

}]);
//# sourceMappingURL=src_components_pages_Home_jsx.bundle.js.map