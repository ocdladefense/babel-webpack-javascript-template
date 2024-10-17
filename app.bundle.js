/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@ocdla/global-components/src/Contacts.jsx":
/*!****************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/Contacts.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contacts)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Defaults */ "./node_modules/@ocdla/global-components/src/Defaults.jsx");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/** @jsx vNode */
/* eslint-disable no-unused-vars */


/* eslint-enable */

function Contacts(props) {
  var className = props.className || "text-neutral-300";
  delete props.className;
  delete props.children;
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": className
  }, Object.entries(props).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      label = _ref2[0],
      href = _ref2[1];
    return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Defaults__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: href
    }, label.replaceAll("_", " ")));
  }));
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/Defaults.jsx":
/*!****************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/Defaults.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Link),
/* harmony export */   defaultButtonStyle: () => (/* binding */ defaultButtonStyle),
/* harmony export */   defaultLinkStyle: () => (/* binding */ defaultLinkStyle)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */

var defaultLinkStyle = 'hover:underline-blue-500 text-blue-400 hover:opacity-[67.5%] hover:underline hover:underline-offset-2';
var defaultButtonStyle = 'text-nowrap rounded-md border border-black bg-black px-3 py-2 font-bold text-white';
function Link(_ref) {
  var _ref$classes = _ref.classes,
    classes = _ref$classes === void 0 ? defaultLinkStyle : _ref$classes,
    extraClasses = _ref.extraClasses,
    href = _ref.href,
    children = _ref.children,
    id = _ref.id;
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("a", {
    id: id || null,
    "class": "".concat(classes).concat(extraClasses ? " ".concat(extraClasses) : ''),
    href: href || null
  }, children);
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/GoogleMaps.jsx":
/*!******************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/GoogleMaps.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoogleMaps)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */

function GoogleMaps(_ref) {
  var src = _ref.src;
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("iframe", {
    "class": "aspect-square w-full border-0 lg:w-64",
    src: src,
    allowfullscreen: true,
    referrerpolicy: "no-referrer-when-downgrade"
  });
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/Header.jsx":
/*!**************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/Header.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _navigation_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/Navigation */ "./node_modules/@ocdla/global-components/src/navigation/Navigation.jsx");
/** @jsx vNode */ /** @jsxFrag "Fragment" */


function Header(_ref) {
  var navItems = _ref.navItems,
    logo = _ref.logo,
    logoWidth = _ref.logoWidth,
    logoHeight = _ref.logoHeight;
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("header", {
    "class": "w-full mb-0 p-[10px] sticky top-0 bg-wb-black z-50"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("img", {
    style: "inline-block vertical-align:middle;",
    "class": "inline-block",
    width: logoWidth,
    height: logoHeight,
    src: logo
  }), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_navigation_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    routes: navItems
  }));
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/Legal.jsx":
/*!*************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/Legal.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Legal)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */

function Legal(_ref) {
  var className = _ref.className,
    year = _ref.year,
    association = _ref.association,
    children = _ref.children;
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": className || "text-neutral-500 text-[0.625rem] font-thin leading-[0.75rem]"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, "\xA9", year, " ", association), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", {
    "class": "size-full text-wrap"
  }, children || ""));
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/Logo.jsx":
/*!************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/Logo.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */

function Logo(_ref) {
  var className = _ref.className,
    src = _ref.src;
  // Default = 'footer'
  className = className || "flex px-4";
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("a", {
    "class": className,
    href: "/"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("img", {
    src: src
  }));
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/Sitemap.jsx":
/*!***************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/Sitemap.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sitemap)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/** @jsx vNode */


// <li class="size-full"> This was wrapping the entire return. We may need to keep size-full when using this.
// [{title: "SERVICES", links: [{href="/", label: "Membership Directory"}, {} ]}, {}]
function Sitemap(_ref) {
  var className = _ref.className,
    children = _ref.children;
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": className || "flex flex-col gap-8 text-nowrap text-[#516490] lg:flex-row lg:gap-16"
  }, children);
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/SitemapCategory.jsx":
/*!***********************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/SitemapCategory.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SitemapCategory)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _ocdla_global_components_src_Defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ocdla/global-components/src/Defaults */ "./node_modules/@ocdla/global-components/src/Defaults.jsx");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/** @jsx vNode */



// <li class="size-full"> This was wrapping the entire return. We may need to keep size-full when using this.
// [{title: "SERVICES", links: [{href="/", label: "Membership Directory"}, {} ]}, {}]
function SitemapCategory(props) {
  var title = props.title;
  var className = props.className || null;
  var path = props.path;
  delete props.title;
  delete props.className;
  delete props.path;
  delete props.children;

  // Remove trailing '/' if there is one.
  path = path.at(-1) == "/" ? path.slice(0, -1) : path;
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "flex flex-col gap-8 text-nowrap text-[#516490] lg:flex-row lg:gap-16"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "flex flex-col gap-1"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", {
    "class": "text-base font-bold ".concat(className)
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("a", {
    href: "{path}"
  }, title))), Object.entries(props).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      label = _ref2[0],
      href = _ref2[1];
    return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("a", {
      href: href[0] == "/" ? path + href : href,
      "class": className
    }, label.replaceAll("_", " ")));
  }))));
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/Social.jsx":
/*!**************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/Social.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Social)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _SocialItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialItem */ "./node_modules/@ocdla/global-components/src/SocialItem.jsx");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/** @jsx vNode */
/* eslint-disable no-unused-vars */


/* eslint-enable */

function Social(props) {
  // Remove the extra children from the original props
  delete props.children;
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "social flex items-center gap-2"
  }, Object.entries(props).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      platform = _ref2[0],
      handle = _ref2[1];
    return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_SocialItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: platform,
      handle: handle
    });
  }));
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/SocialItem.jsx":
/*!******************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/SocialItem.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SocialItem)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Defaults */ "./node_modules/@ocdla/global-components/src/Defaults.jsx");
/* harmony import */ var _images_logo_facebook_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/logo_facebook.png */ "./node_modules/@ocdla/global-components/src/images/logo_facebook.png");
/* harmony import */ var _images_logo_twitter_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/logo_twitter.png */ "./node_modules/@ocdla/global-components/src/images/logo_twitter.png");
/* harmony import */ var _images_logo_youtube_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/logo_youtube.png */ "./node_modules/@ocdla/global-components/src/images/logo_youtube.png");
/* harmony import */ var _images_fa_facebook_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/fa_facebook.png */ "./node_modules/@ocdla/global-components/src/images/fa_facebook.png");
/* harmony import */ var _images_fa_instagram_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/fa_instagram.png */ "./node_modules/@ocdla/global-components/src/images/fa_instagram.png");
/* harmony import */ var _images_fa_instagram_solid_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/fa_instagram_solid.png */ "./node_modules/@ocdla/global-components/src/images/fa_instagram_solid.png");
/** @jsx vNode */
/* eslint-disable no-unused-vars */


/* eslint-enable */
// import abc from './images';






function SocialItem(_ref) {
  var type = _ref.type,
    handle = _ref.handle,
    src = _ref.src;
  // require.context('./', true, /\.(svg|png)$/gim);

  var domain;
  var alt;
  handle = handle || "";

  // console.log(abc);

  switch (type) {
    case "facebook":
    case "meta":
      domain = "https://facebook.com/";
      src = src || _images_logo_facebook_png__WEBPACK_IMPORTED_MODULE_2__;
      alt = "Facebook logo";
      break;
    case "fa-facebook":
    case "fa-meta":
      domain = "https://facebook.com/";
      src = src || _images_fa_facebook_png__WEBPACK_IMPORTED_MODULE_5__;
      alt = "Facebook logo";
      break;
    case "instagram":
    case "fa-instagram":
      domain = "https://instagram.com/";
      src = src || _images_fa_instagram_png__WEBPACK_IMPORTED_MODULE_6__;
      alt = "Instagram logo";
      break;
    case "instagram-solid":
      domain = "https://instagram.com/";
      src = src || _images_fa_instagram_solid_png__WEBPACK_IMPORTED_MODULE_7__;
      alt = "Instagram logo";
      break;
    case "twitter":
    case "x":
      domain = "https://x.com/";
      src = src || _images_logo_twitter_png__WEBPACK_IMPORTED_MODULE_3__;
      alt = "Twitter logo";
      break;
    case "youtube":
      domain = "https://youtube.com/@";
      // Temp
      src = src || _images_logo_youtube_png__WEBPACK_IMPORTED_MODULE_4__;
      alt = "YouTube logo";
      break;
    case "reddit":
      domain = "https://reddit.com/r/";
      // TBD
      src = src || _images_logo_twitter_png__WEBPACK_IMPORTED_MODULE_3__;
      alt = "Reddit logo";
      break;
  }
  var href = domain + handle;
  // const src = './images/' + type + '.png';

  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Defaults__WEBPACK_IMPORTED_MODULE_1__["default"], {
    classes: "hover:opacity-[67.5%]",
    href: href
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("img", {
    "class": "w-8",
    src: src,
    alt: alt
  })));
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/navigation/Hamburger.jsx":
/*!****************************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/navigation/Hamburger.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hamburger)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/** @jsx vNode */ /** @jsxFrag "Fragment" */

function Hamburger() {
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    style: "float:right; margin-right:15px;",
    id: "toggle-menu",
    "class": "tablet:hidden mx-auto inline-block cursor-pointer leading-8"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "hamburgler inline-block w-3 h-1 bg-menu rounded-full transition-all duration-150 before:content-[''] before:absolute before:w-5 before:h-1 before:bg-menu before:rounded-full before:-translate-y-2 before:transition-all before:duration-150 after:content-[''] after:absolute after:w-4 after:h-1 after:bg-menu after:rounded-full after:translate-y-2 after:transition-all after:duration-150"
  }));
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/navigation/Navigation.jsx":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/navigation/Navigation.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hamburger */ "./node_modules/@ocdla/global-components/src/navigation/Hamburger.jsx");
/** @jsx vNode */ /** @jsxFrag "Fragment" */


function Navigation(_ref) {
  var routes = _ref.routes;
  var top = routes.map(function (item) {
    var phoneDisplay = !!item.hidden ? "hidden phone:hidden tablet:inline-block" : "phone:inline-block";
    return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", {
      "class": "hidden ".concat(phoneDisplay, " p-2")
    }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("a", {
      href: item.url
    }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("button", {
      "class": "font-marketing text-base subpixel-antialiased hover:text-wb-cordovan"
    }, item.label)));
  });
  var all = routes.map(function (item) {
    // let phoneDisplay = !!item.hidden ? "hidden phone:hidden tablet:inline-block" : "phone:inline-block";
    return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", {
      "class": "p-2 text-center"
    }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("a", {
      href: item.url
    }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("button", {
      "class": "text-center font-marketing text-base subpixel-antialiased hover:text-wb-cordovan"
    }, item.label)));
  });
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("Fragment", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("nav", {
    "class": "ml-4 inline-block tablet:px-8"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "inline-block"
  }, top)), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hamburger__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("nav", {
    id: "mobile-menu",
    "class": "block hidden min-h-[100vh] pt-[15vh]"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", null, all)));
}

/***/ }),

/***/ "./node_modules/@ocdla/lib-routing/src/Router.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ocdla/lib-routing/src/Router.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _routes = /*#__PURE__*/new WeakMap();
var _defaultPage = /*#__PURE__*/new WeakMap();
var _notFoundCallback = /*#__PURE__*/new WeakMap();
/**
 * @classdesc Router class to handle routing logic for a web application.
 */
var Router = /*#__PURE__*/function () {
  function Router(routes) {
    _classCallCheck(this, Router);
    _defineProperty(this, "basePath", "/");
    /**
     * @private
     * @type {Object}
     */
    _classPrivateFieldInitSpec(this, _routes, []);
    /**
     * @private
     * @type {string}
     */
    _classPrivateFieldInitSpec(this, _defaultPage, void 0);
    /**
     * Creates an instance of Router.
     * @constructor
     * @param {Object} routes - An object mapping route names to page components.
     */

    _classPrivateFieldInitSpec(this, _notFoundCallback, void 0);
    _classPrivateFieldSet(_routes, this, routes || []);
  }
  return _createClass(Router, [{
    key: "setComponentPath",
    value: function setComponentPath(path) {
      Router.componentPath = path;
    }
  }, {
    key: "setNotFoundCallback",
    value: function setNotFoundCallback(callback) {
      _classPrivateFieldSet(_notFoundCallback, this, callback);
    }
  }, {
    key: "match",
    value: function match(_path) {
      // Leave the root path alone; compensate for any trailing slashes.
      var normalized = _path === '/' ? '/' : _path.replace(/\/+$/, '');
      var parts = normalized.split('/');
      var _var = parts.length > 2 ? parts[parts.length - 2] : null;
      var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(_routes, this).reverse()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var r = _step.value;
          var path = r.path,
            callback = r.callback,
            params = r.params;
          path = path.replaceAll('/', '\\/');

          // May need to add in modifiers / flags.
          var re = new RegExp(path);
          var matches = _path.match(re);

          // If matches is null, then this didn't match.
          if (!matches) continue;
          if (null !== _var) {
            params[_var] = matches[1];
          }
          return [callback, params];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return [_classPrivateFieldGet(_notFoundCallback, this), {}];
    }
  }, {
    key: "setBasePath",
    value: function setBasePath(path) {
      this.basePath = path;
    }

    /**
     * Gets the current location from the URL.
     * @returns {string} The current location.
     */
  }, {
    key: "getLocation",
    value: function getLocation() {
      return window.location.href.split("/").at(-1).toLowerCase();
    }

    /**
     * Sets the default page to be used when no route matches.
     * @param {string} page - The default page component.
     */
  }, {
    key: "setDefaultPage",
    value: function setDefaultPage(page) {
      _classPrivateFieldSet(_defaultPage, this, page);
    }
  }, {
    key: "addRoute",
    value: function addRoute(path, callback) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var routeExists = _classPrivateFieldGet(_routes, this).find(function (r) {
        return r.route === path;
      });
      if (routeExists) {
        routeExists.id = id;
        routeExists.callback = callback;
      } else _classPrivateFieldGet(_routes, this).push({
        path: path,
        callback: callback,
        params: params
      });
    }

    /**
     * Gets the current route from the URL.
     * @returns {string} The current route.
     */
  }, {
    key: "getRoute",
    value: function getRoute() {
      return window.location.href.split("/").at(-1).toLowerCase();
    }
  }]);
}();
/**
 * The default path to look for when loading components.
 */
_defineProperty(Router, "componentPath", "/src/components");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url["default"] : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _ocdla_global_components_src_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ocdla/global-components/src/Header */ "./node_modules/@ocdla/global-components/src/Header.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.jsx");
/* harmony import */ var _data_routes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/routes.js */ "./src/data/routes.js");
/* harmony import */ var _ocdla_lib_routing_src_Router_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ocdla/lib-routing/src/Router.js */ "./node_modules/@ocdla/lib-routing/src/Router.js");
/* harmony import */ var _images_logos_logo_header_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/logos/logo-header.svg */ "./src/images/logos/logo-header.svg");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/** @jsx vNode */ /** @jsxFrag "Fragment" */






var router = new _ocdla_lib_routing_src_Router_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
router.setBasePath("/");
router.setDefaultPage("Home");
router.setNotFoundCallback("Home");
// router.setComponentPath("../../../../src/components/pages");
_data_routes_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(function (route) {
  router.addRoute(route.path, route.callback);
});

// component = NotFound

// let Page = await router.getPage();
var _router$match = router.match(window.location.pathname),
  _router$match2 = _slicedToArray(_router$match, 1),
  componentName = _router$match2[0];
var module = await __webpack_require__("./src/components/pages lazy recursive ^\\.\\/.*$")("./".concat(componentName));
var Page = module["default"];
var HeaderTwo;
if (["Home", ""].includes(router.getRoute())) {
  var h = await __webpack_require__.e(/*! import() */ "src_components_HomeHeader_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./components/HomeHeader */ "./src/components/HomeHeader.jsx"));
  HeaderTwo = h["default"];
}
console.log(Page, HeaderTwo);
var location = router.getLocation();
function App() {
  var items = [{
    url: "/",
    label: "home"
  }, {
    url: "/ciders",
    label: "ciders"
  }, {
    url: "/growers",
    label: "growers",
    hidden: true
  }, {
    url: "/drink",
    label: "drink",
    hidden: false
  }, {
    url: "/how-its-made",
    label: "how it's made",
    hidden: true
  }, {
    url: "/about",
    label: "about",
    hidden: true
  }, {
    url: "/contact",
    label: "contact us",
    hidden: true
  }, {
    url: "/order-progress",
    label: "orders",
    hidden: true
  }];
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("Fragment", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    navItems: items,
    logo: _images_logos_logo_header_svg__WEBPACK_IMPORTED_MODULE_5__,
    logoWidth: "40",
    logoHeight: "40"
  }), typeof HeaderTwo === "function" ? (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(HeaderTwo, null) : (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("Fragment", null), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("main", {
    "class": "grow overflow-x-hidden font-default-paragraph ".concat(location)
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("i", null, "No module provided."), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(Page, null)), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/components/Footer.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _ocdla_global_components_src_Legal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ocdla/global-components/src/Legal */ "./node_modules/@ocdla/global-components/src/Legal.jsx");
/* harmony import */ var _ocdla_global_components_src_Sitemap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ocdla/global-components/src/Sitemap */ "./node_modules/@ocdla/global-components/src/Sitemap.jsx");
/* harmony import */ var _ocdla_global_components_src_SitemapCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ocdla/global-components/src/SitemapCategory */ "./node_modules/@ocdla/global-components/src/SitemapCategory.jsx");
/* harmony import */ var _ocdla_global_components_src_Social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ocdla/global-components/src/Social */ "./node_modules/@ocdla/global-components/src/Social.jsx");
/* harmony import */ var _ocdla_global_components_src_Contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ocdla/global-components/src/Contacts */ "./node_modules/@ocdla/global-components/src/Contacts.jsx");
/* harmony import */ var _ocdla_global_components_src_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ocdla/global-components/src/Logo */ "./node_modules/@ocdla/global-components/src/Logo.jsx");
/* harmony import */ var _ocdla_global_components_src_GoogleMaps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ocdla/global-components/src/GoogleMaps */ "./node_modules/@ocdla/global-components/src/GoogleMaps.jsx");
/** @jsx vNode */ /** @jsxFrag "Fragment" */








function Footer() {
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("footer", {
    "class": "text-slate-200 bg-wb-black p-8 tablet:p-16 laptop:p-32 laptop:pt-16"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "container text-slate-200 text-center text-4xl mb-20",
    style: "line-height:1.0rem;"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("span", {
    "class": "allura-regular text-slate-300 inline-block"
  }, "Slow"), "\xA0", (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("span", {
    "class": "font-marketing text-xl text-slate-300 inline-block"
  }, "cider"), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("span", {
    "class": "pl-8 allura-regular text-slate-300 inline-block"
  }, "Made"), "\xA0", (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("span", {
    "class": "font-marketing text-xl text-slate-300 inline-block"
  }, "dry")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "container tablet:grid tablet:grid-cols-6"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "col-start-1 pb-8"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("a", {
    href: "/"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("img", {
    src: "../images/logos/logo.svg"
  }))), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "col-start-3 pb-8"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("h3", {
    "class": "text-wb-red text-lg"
  }, "Contact"), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "text-slate-400"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, "George Waldbusser"), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("a", {
    href: "http://ciderworks.ocdla.org/",
    "class": "hover:text-wb-lime"
  }, "waldbusserciderworks.com")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("a", {
    href: "tel:+14106101726",
    "class": "hover:text-wb-lime"
  }, "(410) 610-1726")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("a", {
    href: "mailto:info@waldbusserciderworks.com",
    "class": "hover:text-wb-lime"
  }, "info@waldbusserciderworks.com"))), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_Social__WEBPACK_IMPORTED_MODULE_4__["default"], {
    instagram: "waldbusserciderworks"
  })), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_Sitemap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "col-start-5 text-nowrap text-stone-400 pb-8",
    style: "font-weight:200;"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_SitemapCategory__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Waldbusser Ciderworks",
    path: "/",
    className: "hover:text-stone-500",
    Home: "/",
    About: "/about",
    How_Its_Made: "/how-its-made",
    Growers: "/growers",
    Where_To_Buy: "/where-to-buy",
    Order_Progress: "/order-progress",
    Contact_Us: "/contact"
  }))));
}

/***/ }),

/***/ "./src/data/routes.js":
/*!****************************!*\
  !*** ./src/data/routes.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var routes = [{
  path: "/about",
  callback: "About"
}, {
  path: "/contact",
  callback: "Contact"
}, {
  path: "/growers",
  callback: "Growers"
}, {
  path: "/ciders",
  callback: "Ciders"
}, {
  path: "/how-its-made",
  callback: "HowItsMade"
}, {
  path: "/drink",
  callback: "WhereToBuy"
}, {
  path: "/order-progress",
  callback: "OrderProgress"
}, {
  path: "/whats-brewing",
  callback: "OrderProgress"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _css_input_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/input.css */ "./src/css/input.css");
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App.jsx */ "./src/App.jsx");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_App_jsx__WEBPACK_IMPORTED_MODULE_2__]);
_App_jsx__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/** @jsx vNode */ /** @jsxFrag "Fragment" */



if (false) {}else {
  if (true) {}
  var $root = document.getElementById("root");
  var root = _ocdla_view__WEBPACK_IMPORTED_MODULE_0__.View.createRoot($root);
  root.render((0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_App_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  var toggle = document.querySelector("#toggle-menu");
  var menu = document.querySelector("#mobile-menu");
  toggle.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    // menu.classList.toggle("flex");
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/input.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/input.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/fonts/smoothy-sans-regular.ttf */ "./src/fonts/smoothy-sans-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/images/logos/logo-white.png */ "./src/images/logos/logo-white.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/images/mockup/slow-cider.png */ "./src/images/mockup/slow-cider.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.14 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: Open Sans, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}

[type='text'],input:where(:not([type])),[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, input:where(:not([type])):focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #2563eb;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6b7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6b7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
  text-align: inherit;
}

::-webkit-datetime-edit {
  display: inline-flex;
}

::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {
  padding-top: 0;
  padding-bottom: 0;
}

select {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
}

[multiple],[size]:where(select:not([size="1"])) {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@media (forced-colors: active)  {

  [type='checkbox']:checked {
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='radio']:checked {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

@media (forced-colors: active)  {

  [type='radio']:checked {
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='checkbox']:indeterminate {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

@media (forced-colors: active)  {

  [type='checkbox']:indeterminate {
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px solid ButtonText;
  outline: 1px auto -webkit-focus-ring-color;
}
.container {
  width: 100%;
}
@media (min-width: 320px) {

  .container {
    max-width: 320px;
  }
}
@media (min-width: 480px) {

  .container {
    max-width: 480px;
  }
}
@media (min-width: 800px) {

  .container {
    max-width: 800px;
  }
}
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.left-\\[-1rem\\] {
  left: -1rem;
}
.right-0 {
  right: 0px;
}
.top-0 {
  top: 0px;
}
.top-\\[calc\\(100\\%\\+0\\.5rem\\)\\] {
  top: calc(100% + 0.5rem);
}
.z-10 {
  z-index: 10;
}
.z-50 {
  z-index: 50;
}
.order-first {
  order: -9999;
}
.col-span-1 {
  grid-column: span 1 / span 1;
}
.col-span-2 {
  grid-column: span 2 / span 2;
}
.col-start-1 {
  grid-column-start: 1;
}
.col-start-3 {
  grid-column-start: 3;
}
.col-start-5 {
  grid-column-start: 5;
}
.row-span-1 {
  grid-row: span 1 / span 1;
}
.row-span-4 {
  grid-row: span 4 / span 4;
}
.m-4 {
  margin: 1rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.mb-0 {
  margin-bottom: 0px;
}
.mb-16 {
  margin-bottom: 4rem;
}
.mb-20 {
  margin-bottom: 5rem;
}
.mb-32 {
  margin-bottom: 8rem;
}
.mb-8 {
  margin-bottom: 2rem;
}
.ml-4 {
  margin-left: 1rem;
}
.mt-8 {
  margin-top: 2rem;
}
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.flex {
  display: flex;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.size-fit {
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
}
.size-full {
  width: 100%;
  height: 100%;
}
.h-1 {
  height: 0.25rem;
}
.h-16 {
  height: 4rem;
}
.h-\\[34px\\] {
  height: 34px;
}
.h-\\[87\\.5vh\\] {
  height: 87.5vh;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.min-h-\\[100vh\\] {
  min-height: 100vh;
}
.w-3 {
  width: 0.75rem;
}
.w-40 {
  width: 10rem;
}
.w-8 {
  width: 2rem;
}
.w-\\[34px\\] {
  width: 34px;
}
.w-full {
  width: 100%;
}
.flex-1 {
  flex: 1 1 0%;
}
.grow {
  flex-grow: 1;
}
.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.cursor-pointer {
  cursor: pointer;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.list-none {
  list-style-type: none;
}
.flex-row {
  flex-direction: row;
}
.flex-row-reverse {
  flex-direction: row-reverse;
}
.flex-col {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.items-start {
  align-items: flex-start;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-0 {
  gap: 0px;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-4 {
  gap: 1rem;
}
.gap-6 {
  gap: 1.5rem;
}
.gap-8 {
  gap: 2rem;
}
.justify-self-start {
  justify-self: start;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.whitespace-pre {
  white-space: pre;
}
.text-wrap {
  text-wrap: wrap;
}
.text-nowrap {
  text-wrap: nowrap;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-l-md {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}
.rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.border {
  border-width: 1px;
}
.border-0 {
  border-width: 0px;
}
.border-2 {
  border-width: 2px;
}
.border-x {
  border-left-width: 1px;
  border-right-width: 1px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-b-0 {
  border-bottom-width: 0px;
}
.border-l {
  border-left-width: 1px;
}
.border-t-0 {
  border-top-width: 0px;
}
.border-black {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
}
.border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(37 99 235 / var(--tw-border-opacity));
}
.border-neutral-300 {
  --tw-border-opacity: 1;
  border-color: rgb(212 212 212 / var(--tw-border-opacity));
}
.border-wb-cordovan {
  --tw-border-opacity: 1;
  border-color: rgb(125 79 82 / var(--tw-border-opacity));
}
.bg-\\[\\#516490\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(81 100 144 / var(--tw-bg-opacity));
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}
.bg-default-background {
  --tw-bg-opacity: 1;
  background-color: rgb(247 224 170 / var(--tw-bg-opacity));
}
.bg-menu {
  background-color: rgba(255, 255, 255, 0.6);
}
.bg-neutral-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 250 250 / var(--tw-bg-opacity));
}
.bg-wb-black {
  --tw-bg-opacity: 1;
  background-color: rgb(47 42 42 / var(--tw-bg-opacity));
}
.bg-wb-cordovan {
  --tw-bg-opacity: 1;
  background-color: rgb(125 79 82 / var(--tw-bg-opacity));
}
.bg-wb-gray {
  --tw-bg-opacity: 1;
  background-color: rgb(245 246 248 / var(--tw-bg-opacity));
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.p-2 {
  padding: 0.5rem;
}
.p-32 {
  padding: 8rem;
}
.p-4 {
  padding: 1rem;
}
.p-8 {
  padding: 2rem;
}
.p-\\[10px\\] {
  padding: 10px;
}
.px-12 {
  padding-left: 3rem;
  padding-right: 3rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-20 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.pb-1 {
  padding-bottom: 0.25rem;
}
.pb-16 {
  padding-bottom: 4rem;
}
.pb-32 {
  padding-bottom: 8rem;
}
.pb-8 {
  padding-bottom: 2rem;
}
.pl-8 {
  padding-left: 2rem;
}
.pt-\\[15vh\\] {
  padding-top: 15vh;
}
.text-center {
  text-align: center;
}
.font-default-heading {
  font-family: Open Sans, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.font-default-paragraph {
  font-family: Tienne;
}
.font-marketing {
  font-family: Marketing, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
.text-7xl {
  font-size: 4.5rem;
  line-height: 1;
}
.text-\\[0\\.625rem\\] {
  font-size: 0.625rem;
}
.text-\\[2rem\\] {
  font-size: 2rem;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.font-black {
  font-weight: 900;
}
.font-bold {
  font-weight: 700;
}
.font-light {
  font-weight: 300;
}
.font-thin {
  font-weight: 100;
}
.capitalize {
  text-transform: capitalize;
}
.leading-8 {
  line-height: 2rem;
}
.leading-\\[0\\.75rem\\] {
  line-height: 0.75rem;
}
.tracking-tighter {
  letter-spacing: -0.05em;
}
.text-\\[\\#516490\\] {
  --tw-text-opacity: 1;
  color: rgb(81 100 144 / var(--tw-text-opacity));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
.text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(96 165 250 / var(--tw-text-opacity));
}
.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
}
.text-default-paragraph-black {
  color: rgba(35, 35, 35, 0.8);
}
.text-neutral-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity));
}
.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity));
}
.text-slate-200 {
  --tw-text-opacity: 1;
  color: rgb(226 232 240 / var(--tw-text-opacity));
}
.text-slate-300 {
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}
.text-slate-400 {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}
.text-stone-300 {
  --tw-text-opacity: 1;
  color: rgb(214 211 209 / var(--tw-text-opacity));
}
.text-stone-400 {
  --tw-text-opacity: 1;
  color: rgb(168 162 158 / var(--tw-text-opacity));
}
.text-wb-black {
  --tw-text-opacity: 1;
  color: rgb(47 42 42 / var(--tw-text-opacity));
}
.text-wb-cordovan {
  --tw-text-opacity: 1;
  color: rgb(125 79 82 / var(--tw-text-opacity));
}
.text-wb-red {
  --tw-text-opacity: 1;
  color: rgb(208 55 92 / var(--tw-text-opacity));
}
.text-wb-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.subpixel-antialiased {
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.brightness-50 {
  --tw-brightness: brightness(.5);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.contrast-\\[0\\] {
  --tw-contrast: contrast(0);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.saturate-0 {
  --tw-saturate: saturate(0);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-150 {
  transition-duration: 150ms;
}
@tailwind forms;



.allura-regular {
  font-family: "Allura", cursive;
  font-weight: 400;
  font-style: normal;
}


@font-face {
    font-family: 'Smoothy Cursive';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('truetype');
}



@media screen and (min-width:1024px) {
    section div.container {
        max-width: 70%;
    }
    /*
    main:not(.ciders, .drink, .order-progress) {
        max-width: 90%;
        margin: 0 auto;
    }*/
}

@media screen and (min-width:1200px) {
    /*
    main:not(.ciders, .drink, .order-progress) {
        max-width: 80%;
        margin: 0 auto;
    }*/
}




    section.fullscreen {
        margin-bottom:0px;
    }


  @font-face {
    font-family: 'Marketing';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('truetype');
  }


.font-smoothy {
  font-family: var(--font-family-smoothy);
}

nav .col-span-1 {
    display: inline-block;
    padding: 10px 15px;
    vertical-align:middle;
}


nav .text-base {
    font-size: 0.9rem;
    line-height: 1.5rem;
    color: rgba(255, 255, 255, 0.6);
}


.panel-striped {
    background-color: rgb(225 215 220);
    /* margin: 0px -25px 45px -25px;
    padding: 15px 25px; */
}


section div p {
    margin-bottom: 1.5rem;
}

.content-heading {
    text-transform: uppercase;
}

.callout {

    /* margin-top: -112px; */
    
    font-size: 1.0rem;
    font-weight: 200;
    margin: 0 auto;
    margin-top: -25px;
}

.callout p {
    font-size: 1.0rem;
}

.hero-image {
  position: relative;
  background-position: center;
}

.overlay-logo {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  background-size:contain;
  background-position: center;
  -o-object-fit:contain;
     object-fit:contain;
  background-repeat: no-repeat;
  z-index: 1;
}
.overlay-slow-cider {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  background-size:contain;
  background-position: center;
  -o-object-fit:contain;
     object-fit:contain;
  background-repeat: no-repeat;
  z-index: 1;
}


ul.social img {
    padding: 3px;
    margin-left: -5px;
    opacity: 0.6;
}


.hamburgler {
    margin-left: 60px;
}


@media (min-width: 1024px) {

  .laptop\\:container {
    width: 100%;
  }

  @media (min-width: 320px) {

    .laptop\\:container {
      max-width: 320px;
    }
  }

  @media (min-width: 480px) {

    .laptop\\:container {
      max-width: 480px;
    }
  }

  @media (min-width: 800px) {

    .laptop\\:container {
      max-width: 800px;
    }
  }

  @media (min-width: 1024px) {

    .laptop\\:container {
      max-width: 1024px;
    }
  }

  @media (min-width: 1280px) {

    .laptop\\:container {
      max-width: 1280px;
    }
  }
}


.before\\:absolute::before {
  content: var(--tw-content);
  position: absolute;
}


.before\\:h-1::before {
  content: var(--tw-content);
  height: 0.25rem;
}


.before\\:w-5::before {
  content: var(--tw-content);
  width: 1.25rem;
}


.before\\:-translate-y-2::before {
  content: var(--tw-content);
  --tw-translate-y: -0.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}


.before\\:rounded-full::before {
  content: var(--tw-content);
  border-radius: 9999px;
}


.before\\:bg-menu::before {
  content: var(--tw-content);
  background-color: rgba(255, 255, 255, 0.6);
}


.before\\:transition-all::before {
  content: var(--tw-content);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}


.before\\:duration-150::before {
  content: var(--tw-content);
  transition-duration: 150ms;
}


.before\\:content-\\[\\'\\'\\]::before {
  --tw-content: '';
  content: var(--tw-content);
}


.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}


.after\\:h-1::after {
  content: var(--tw-content);
  height: 0.25rem;
}


.after\\:w-4::after {
  content: var(--tw-content);
  width: 1rem;
}


.after\\:translate-y-2::after {
  content: var(--tw-content);
  --tw-translate-y: 0.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}


.after\\:rounded-full::after {
  content: var(--tw-content);
  border-radius: 9999px;
}


.after\\:bg-menu::after {
  content: var(--tw-content);
  background-color: rgba(255, 255, 255, 0.6);
}


.after\\:transition-all::after {
  content: var(--tw-content);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}


.after\\:duration-150::after {
  content: var(--tw-content);
  transition-duration: 150ms;
}


.after\\:content-\\[\\'\\'\\]::after {
  --tw-content: '';
  content: var(--tw-content);
}


.focus-within\\:opacity-\\[67\\.5\\%\\]:focus-within {
  opacity: 67.5%;
}


.hover\\:border-neutral-200:hover {
  --tw-border-opacity: 1;
  border-color: rgb(229 229 229 / var(--tw-border-opacity));
}


.hover\\:bg-neutral-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
}


.hover\\:text-neutral-600:hover {
  --tw-text-opacity: 1;
  color: rgb(82 82 82 / var(--tw-text-opacity));
}


.hover\\:text-stone-500:hover {
  --tw-text-opacity: 1;
  color: rgb(120 113 108 / var(--tw-text-opacity));
}


.hover\\:text-wb-cordovan:hover {
  --tw-text-opacity: 1;
  color: rgb(125 79 82 / var(--tw-text-opacity));
}


.hover\\:text-wb-lime:hover {
  --tw-text-opacity: 1;
  color: rgb(181 225 121 / var(--tw-text-opacity));
}


.hover\\:underline:hover {
  text-decoration-line: underline;
}


.hover\\:underline-offset-2:hover {
  text-underline-offset: 2px;
}


.hover\\:opacity-\\[67\\.5\\%\\]:hover {
  opacity: 67.5%;
}


.focus\\:border-neutral-200:focus {
  --tw-border-opacity: 1;
  border-color: rgb(229 229 229 / var(--tw-border-opacity));
}


.group:hover .group-hover\\:text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}


.group:hover .group-hover\\:opacity-\\[67\\.5\\%\\] {
  opacity: 67.5%;
}


.peer:focus-within ~ .peer-focus-within\\:flex {
  display: flex;
}


@media (min-width: 320px) {

  .phone\\:inline-block {
    display: inline-block;
  }

  .phone\\:hidden {
    display: none;
  }
}


@media (min-width: 480px) {

  .tablet-portrait\\:max-w-\\[90\\%\\] {
    max-width: 90%;
  }
}


@media (min-width: 800px) {

  .tablet\\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .tablet\\:mb-16 {
    margin-bottom: 4rem;
  }

  .tablet\\:block {
    display: block;
  }

  .tablet\\:inline-block {
    display: inline-block;
  }

  .tablet\\:grid {
    display: grid;
  }

  .tablet\\:hidden {
    display: none;
  }

  .tablet\\:max-w-\\[90\\%\\] {
    max-width: 90%;
  }

  .tablet\\:grid-flow-row {
    grid-auto-flow: row;
  }

  .tablet\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .tablet\\:grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .tablet\\:place-items-start {
    place-items: start;
  }

  .tablet\\:p-16 {
    padding: 4rem;
  }

  .tablet\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}


@media (min-width: 1024px) {

  .laptop\\:order-last {
    order: 9999;
  }

  .laptop\\:mx-0 {
    margin-left: 0px;
    margin-right: 0px;
  }

  .laptop\\:mb-16 {
    margin-bottom: 4rem;
  }

  .laptop\\:flex {
    display: flex;
  }

  .laptop\\:w-full {
    width: 100%;
  }

  .laptop\\:min-w-\\[800px\\] {
    min-width: 800px;
  }

  .laptop\\:max-w-\\[80\\%\\] {
    max-width: 80%;
  }

  .laptop\\:gap-8 {
    gap: 2rem;
  }

  .laptop\\:justify-self-start {
    justify-self: start;
  }

  .laptop\\:justify-self-end {
    justify-self: end;
  }

  .laptop\\:p-32 {
    padding: 8rem;
  }

  .laptop\\:pt-16 {
    padding-top: 4rem;
  }

  .laptop\\:text-\\[17px\\] {
    font-size: 17px;
  }
}


.\\[\\&_\\*\\]\\:mb-4 * {
  margin-bottom: 1rem;
}
`, "",{"version":3,"sources":["webpack://./src/css/input.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n@tailwind forms;\n\n\n\n.allura-regular {\n  font-family: \"Allura\", cursive;\n  font-weight: 400;\n  font-style: normal;\n}\n\n\n@font-face {\n    font-family: 'Smoothy Cursive';\n    src: url(/src/fonts/smoothy-sans-regular.ttf) format('truetype');\n}\n\n\n\n@media screen and (min-width:1024px) {\n    section div.container {\n        max-width: 70%;\n    }\n    /*\n    main:not(.ciders, .drink, .order-progress) {\n        max-width: 90%;\n        margin: 0 auto;\n    }*/\n}\n\n@media screen and (min-width:1200px) {\n    /*\n    main:not(.ciders, .drink, .order-progress) {\n        max-width: 80%;\n        margin: 0 auto;\n    }*/\n}\n\n\n\n\n    section.fullscreen {\n        margin-bottom:0px;\n    }\n\n\n  @font-face {\n    font-family: 'Marketing';\n    font-style: normal;\n    font-weight: 400;\n    font-display: swap;\n    src: url(/src/fonts/smoothy-sans-regular.ttf) format('truetype');\n  }\n\n\n.font-smoothy {\n  font-family: var(--font-family-smoothy);\n}\n\nnav .col-span-1 {\n    display: inline-block;\n    padding: 10px 15px;\n    vertical-align:middle;\n}\n\n\nnav .text-base {\n    font-size: 0.9rem;\n    line-height: 1.5rem;\n    color: rgba(255, 255, 255, 0.6);\n}\n\n\n.panel-striped {\n    background-color: rgb(225 215 220);\n    /* margin: 0px -25px 45px -25px;\n    padding: 15px 25px; */\n}\n\n\nsection div p {\n    margin-bottom: 1.5rem;\n}\n\n.content-heading {\n    text-transform: uppercase;\n}\n\n.callout {\n\n    /* margin-top: -112px; */\n    \n    font-size: 1.0rem;\n    font-weight: 200;\n    margin: 0 auto;\n    margin-top: -25px;\n}\n\n.callout p {\n    font-size: 1.0rem;\n}\n\n.hero-image {\n  @apply relative;\n  background-position: center;\n}\n\n.overlay-logo {\n  background-image: url('/src/images/logos/logo-white.png');\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 60%;\n  height: 60%;\n  background-size:contain;\n  background-position: center;\n  object-fit:contain;\n  background-repeat: no-repeat;\n  z-index: 1;\n}\n.overlay-slow-cider {\n  background-image: url('/src/images/mockup/slow-cider.png');\n   position: absolute;\n  position: absolute;\n  top: 85%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 50%;\n  height: 50%;\n  background-size:contain;\n  background-position: center;\n  object-fit:contain;\n  background-repeat: no-repeat;\n  z-index: 1;\n}\n\n\nul.social img {\n    padding: 3px;\n    margin-left: -5px;\n    opacity: 0.6;\n}\n\n\n.hamburgler {\n    margin-left: 60px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/input.css":
/*!***************************!*\
  !*** ./src/css/input.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./input.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/input.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/pages lazy recursive ^\\.\\/.*$":
/*!**************************************************************!*\
  !*** ./src/components/pages/ lazy ^\.\/.*$ namespace object ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./About": [
		"./src/components/pages/About.jsx",
		"src_components_pages_About_jsx"
	],
	"./About.jsx": [
		"./src/components/pages/About.jsx",
		"src_components_pages_About_jsx"
	],
	"./Contact": [
		"./src/components/pages/Contact.jsx",
		"src_components_pages_Contact_jsx"
	],
	"./Contact.jsx": [
		"./src/components/pages/Contact.jsx",
		"src_components_pages_Contact_jsx"
	],
	"./Home": [
		"./src/components/pages/Home.jsx",
		"src_components_pages_Home_jsx"
	],
	"./Home.jsx": [
		"./src/components/pages/Home.jsx",
		"src_components_pages_Home_jsx"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/components/pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e":
/*!***************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e";

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/images/fa_facebook.png":
/*!**************************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/images/fa_facebook.png ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/fa_facebook.png";

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/images/fa_instagram.png":
/*!***************************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/images/fa_instagram.png ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/fa_instagram.png";

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/images/fa_instagram_solid.png":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/images/fa_instagram_solid.png ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/fa_instagram_solid.png";

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/images/logo_facebook.png":
/*!****************************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/images/logo_facebook.png ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logo_facebook.png";

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/images/logo_twitter.png":
/*!***************************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/images/logo_twitter.png ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logo_twitter.png";

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/images/logo_youtube.png":
/*!***************************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/images/logo_youtube.png ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logo_youtube.png";

/***/ }),

/***/ "./src/fonts/smoothy-sans-regular.ttf":
/*!********************************************!*\
  !*** ./src/fonts/smoothy-sans-regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/smoothy-sans-regular.ttf";

/***/ }),

/***/ "./src/images/logos/logo-header.svg":
/*!******************************************!*\
  !*** ./src/images/logos/logo-header.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logo-header.svg";

/***/ }),

/***/ "./src/images/logos/logo-white.png":
/*!*****************************************!*\
  !*** ./src/images/logos/logo-white.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logo-white.png";

/***/ }),

/***/ "./src/images/mockup/slow-cider.png":
/*!******************************************!*\
  !*** ./src/images/mockup/slow-cider.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/slow-cider.png";

/***/ }),

/***/ "./node_modules/@ocdla/view/view.js":
/*!******************************************!*\
  !*** ./node_modules/@ocdla/view/view.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   View: () => (/* binding */ View),
/* harmony export */   getEffects: () => (/* binding */ getEffects),
/* harmony export */   useEffect: () => (/* binding */ useEffect),
/* harmony export */   vNode: () => (/* binding */ vNode)
/* harmony export */ });
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/**
 * @ocdladefense/view
 *
 * @description Here is my description.
 *
 *
 *
 */

var effects = [];

// import { CACHE, HISTORY } from "./cache.js";

function useEffect(fn, deps) {
  effects.push({
    fn: fn,
    deps: deps
  });
}
function getEffects() {
  return effects;
}

/**
 * @class View
 *
 * This is a description of the View class.
 */
var View = function () {
  function refresh() {
    return _refresh.apply(this, arguments);
  }
  function _refresh() {
    _refresh = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var hash, params, _parseHash, _parseHash2, tree, c, elem;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _parseHash = parseHash(window.location.hash);
            _parseHash2 = _slicedToArray(_parseHash, 2);
            hash = _parseHash2[0];
            params = _parseHash2[1];
            elem = document.querySelector("#job-container");
            if (elem) {
              elem.removeEventListener("click", this.currentComponent);
            }
            if (hash == "" || hash == "#") {
              c = new JobList();
            } else if (hash == "#new") {
              c = new JobForm();
            } else if (hash.startsWith("#edit")) {
              c = new JobForm(params.id);
            } else if (hash.startsWith("#details")) {
              c = new JobSearch(params.id);
            }
            c.listenTo("click", "#job-container");
            /*
            Listen for submit events
            c.listenTo("submit", "#record-form");
            */
            if (!c.loadData) {
              _context.next = 11;
              break;
            }
            _context.next = 11;
            return c.loadData();
          case 11:
            tree = c.render();
            this.view.render(tree);
            this.currentComponent = c;
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    return _refresh.apply(this, arguments);
  }
  var NODE_CHANGED_STATES = ["NODE_NO_COMPARISON", "NODE_DIFFERENT_TYPE", "NODE_NOT_EQUAL", "NODE_DIFFERENT_ELEMENT", "NODE_PROPS_CHANGED", "TEXT_NODES_NOT_EQUAL"];

  /**
   * @constructs View
   * @param root
   */
  function View(root) {
    this.root = root;
    //document.getElementById("order-history-main").addEventListener("click", myAppEventHandler);
    //root.addEventListener("click", myAppEventHandler);
  }

  /**
   * @memberof View
   * @method render
   * @instance
   * @description Perform an initial paint of a virtual node structure.
   * @param {Object} vNode A virtual node structure.
   */
  function render(vNode) {
    this.currentTree = vNode;
    var $newNode = createElement(vNode);
    this.root.innerHTML = "";
    this.root.appendChild($newNode);
  }
  function update(newNode) {
    updateElement(this.root, newNode, this.currentTree);
    this.currentTree = newNode;
  }

  /**
   * @memberof View
   * @method updateElement
   * @instance
   * @description Perform an initial paint of a virtual node structure.
   * @param {DOMNode} $parent
   * @param {vNode} newNode Then new virtual node tree to be rendered.
   * @param {vNode} oldNode The old virtual node tree to be diffed.
   * @param {Integer} index The current index of a recursive structure.
   */
  function updateElement($parent, newNode, oldNode) {
    var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var state = getChangeState(newNode, oldNode);

    // Whether to use replaceChild to swap nodes.
    var shouldSwapNodes = changed(state);

    // Whether this current evaluation is a synthetic node.
    var isSynthetic = newNode && typeof newNode.type === "function";
    if ($parent.nodeType == 3) {
      return;
    }
    if (!oldNode) {
      var n = View.createElement(newNode);
      $parent.appendChild(n);
    } else if (!newNode) {
      if (!$parent.children[index]) {
        $parent.removeChild($parent.children[$parent.children.length - 1]);
      } else {
        $parent.removeChild($parent.children[index]);
      }
    } else if (isSynthetic) {
      if (newNode.type && newNode.type.prototype && newNode.type.prototype.render) {
        var obj = new newNode.type(newNode.props);
        newNode = obj.render();
      } else {
        newNode = typeof newNode.type === "function" ? newNode.type(newNode.props) : newNode;
      }
      if (oldNode.type && oldNode.type.prototype && oldNode.type.prototype.render) {
        var _obj = new oldNode.type(oldNode.props);
        oldNode = _obj.render();
      } else oldNode = typeof oldNode.type === "function" ? oldNode.type(oldNode.props) : oldNode;
      updateElement($parent, newNode, oldNode, index);
    } else if (!isSynthetic && shouldSwapNodes) {
      var _n = createElement(newNode);
      if (newNode.type) {
        $parent.replaceChild(_n, $parent.childNodes[index]);
      } else {
        $parent.replaceChild(_n, $parent.childNodes[index]);
      }
    }

    // Not obvious, but text nodes don"t have a type and should
    // have been handled before this block executes.
    else if (newNode.type && newNode.children) {
      var newLength = newNode.children.length;
      var oldLength = oldNode.children.length;
      for (var i = 0; i < newLength || i < oldLength; i++) {
        var nextParent = $parent.childNodes[index];
        var revisedNode = newNode.children[i];
        var expiredNode = oldNode.children[i];
        var equal = revisedNode == expiredNode;
        if (equal) continue;
        updateElement(nextParent, revisedNode, expiredNode, i);
      }
    }
  }
  function getChangeState(n1, n2) {
    if (n1 && !n2) return "NODE_NO_COMPARISON";
    if (n1 == n2) return "NODE_NO_CHANGE";

    // Comparing two text nodes that are obviously different.
    if (typeof n1 === "string" && typeof n2 === "string" && n1 !== n2) {
      return "TEXT_NODES_NOT_EQUAL";
    }
    if (_typeof(n1) !== _typeof(n2)) {
      return "NODE_DIFFERENT_TYPE";
    }
    if (n1.type !== n2.type) {
      return "NODE_DIFFERENT_ELEMENT";
    }
    if (propsChanged(n1, n2)) {
      return "NODE_PROPS_CHANGED";
    }
    if (n1 != n2) {
      return "NODE_RECURSIVE_EVALUATE";
    }
    return "NODE_NO_CHANGE";
  }
  function changed(state) {
    return NODE_CHANGED_STATES.includes(state);
  }
  function propsChanged(node1, node2) {
    var node1Props = node1.props;
    var node2Props = node2.props;
    if (_typeof(node1Props) != _typeof(node2Props)) {
      return true;
    }
    if (!node1Props && !node2Props) {
      return false;
    }
    var aProps = Object.getOwnPropertyNames(node1Props);
    var bProps = Object.getOwnPropertyNames(node2Props);
    if (aProps.length != bProps.length) {
      return true;
    }
    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];
      if (node1Props[propName] !== node2Props[propName]) {
        return true;
      }
    }
    return false;
  }
  View.prototype = {
    render: render,
    update: update,
    createElement: createElement
  };
  return View;
}();

/**
 * Return a View instance from the given DOM element or selector.
 *
 * @param {string} selector
 * @returns {View}
 */
View.createRoot = function (selector) {
  var elem = typeof selector == "string" ? document.querySelector(selector) : selector;
  var root = elem.cloneNode(false);
  elem.parentElement.replaceChild(root, elem);
  return new View(root);
};

/**
 * @memberof View
 * @method createElement
 * @description Recursively transform a virtual node structure into a DOM node tree.
 * @param {Object} vnode A virtual node structure.
 * @returns DOMElement
 */
function createElement(vnode) {
  if (typeof vnode === "string" || typeof vnode === "number") {
    return document.createTextNode(vnode.toString());
  }
  if (vnode.type == "text") {
    return document.createTextNode(vnode.children);
  }
  //first check to see if component references a class name
  if (typeof vnode.type == "function" && vnode.type.prototype && vnode.type.prototype.render) {
    console.log("vNode is a class reference");
    var obj = new vnode.type(vnode.props);
    var render = obj.render();
    var node = createElement(render);
    //BACKTO
    // Let the component know about its own root.
    // obj.setRoot(node);
    return node;
  }
  if (typeof vnode.type == "function") {
    var fn = vnode.type(vnode.props);
    return createElement(fn);
  }
  var $el = vnode.type == "Fragment" ? document.createDocumentFragment() : document.createElement(vnode.type);
  var theClassNames;
  var theEventKey;
  if (vnode.props) {
    //var html5 = "className" == prop ? "class" : prop;
    theClassNames = vnode.props["class"];
    if (theClassNames) {
      theClassNames = theClassNames.split(" "); //hack, get better way of obtaining names, this one only gets the first
      // theEventKey = theClassNames[0];
    }
  }

  //BACKTO
  for (var prop in vnode.props) {
    var html5 = "className" == prop ? "class" : prop;
    if ("children" == prop) continue;
    if (prop.indexOf("on") === 0) {
      $el.addEventListener(prop.substring(2), vnode.props[prop]);
      continue;
    } else if (vnode.props[prop] === null) {
      continue;
    } else {
      $el.setAttribute(html5, vnode.props[prop]);
    }
  }
  if (null != vnode.children) {
    vnode.children.map(createElement).forEach($el.appendChild.bind($el));
  }
  return $el;
}
View.createElement = createElement;

/**
 * JSX parsing function.
 */
function vNode(name, attributes) {
  attributes = attributes || {};
  var joined = [];
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  if (children.length == 0 || null == children[0] || typeof children[0] == "undefined") {
    joined = [];
  } else if (children.length == 1 && typeof children[0] == "string") {
    joined = children;
  } else {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        joined = joined.concat(children[i]);
      } else {
        joined.push(children[i]);
      }
    }
  }
  attributes.children = joined;
  var vnode = {
    type: name,
    props: attributes,
    children: joined
  };
  return vnode;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "myapp:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmyapp"] = self["webpackChunkmyapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map