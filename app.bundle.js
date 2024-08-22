/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@ocdla/global-components/src/components/BreadcrumbItem.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/components/BreadcrumbItem.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BreadcrumbItem)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _Hyperlink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hyperlink */ "./node_modules/@ocdla/global-components/src/components/Hyperlink.jsx");
/** @jsx vNode */
/* eslint-disable no-unused-vars */


/* eslint-enable */

function BreadcrumbItem(_ref) {
  var text = _ref.text,
    href = _ref.href,
    type = _ref.type;
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: text,
    href: href,
    type: type
  }));
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/components/Breadcrumbs.jsx":
/*!******************************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/components/Breadcrumbs.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Breadcrumbs)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _lib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib.js */ "./node_modules/@ocdla/global-components/src/lib.js");
/* harmony import */ var _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BreadcrumbItem */ "./node_modules/@ocdla/global-components/src/components/BreadcrumbItem.jsx");
/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable no-unused-vars */



/* eslint-enable */

function Breadcrumbs(_ref) {
  var items = _ref.items,
    separator = _ref.separator;
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("section", {
    "class": "container mx-auto flex items-center border border-t-0 p-4 text-black lg:h-16"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "flex flex-wrap items-center whitespace-pre"
  }, (0,_lib_js__WEBPACK_IMPORTED_MODULE_1__.interleave)(items.map(function (item) {
    return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_2__["default"], item);
  }), separator)));
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/components/Footer.jsx":
/*!*************************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/components/Footer.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _Hyperlink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hyperlink */ "./node_modules/@ocdla/global-components/src/components/Hyperlink.jsx");
/** @jsx vNode */
/* eslint-disable no-unused-vars */


/* eslint-enable */

function Footer() {
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("footer", {
    "class": "container mx-auto flex flex-col gap-4 border border-b-0 p-4 pb-16 lg:flex-row lg:gap-0 lg:p-8 lg:pb-16"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "flex h-max flex-col gap-8 lg:flex-row lg:gap-32"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "flex items-center gap-4"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", {
    "class": "flex"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "brand",
    href: "https://oregon.public.law/",
    text: (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
      "class": "flex items-center"
    }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("img", {
      "class": "h-16",
      src: "https://www.ocdla.org/wp-content/uploads/2019/10/cropped-ocdla-logo.png"
    }))
  })), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "flex flex-col"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "flex gap-2"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "footer-social",
    href: "https://www.facebook.com/OregonCriminalDefenseLawyersAssociation/",
    text: (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("img", {
      "class": "size-8",
      src: "https://www.ocdla.org/wp-content/themes/wireframe/assets/images/default-facebook-icon.png"
    })
  })), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "footer-social",
    href: "https://twitter.com/oregondefense?lang=en",
    text: (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("img", {
      "class": "size-8",
      src: "https://www.ocdla.org/wp-content/themes/wireframe/assets/images/default-twitter-icon.png"
    })
  }))))))), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "text-[0.625rem] font-thin leading-[0.75rem]"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, "\xA9 2024 Oregon Criminal Defense Lawyers Association"), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, "Oregon Criminal Defense Lawyers Association is a 501(c)(3) nonprofit educational association. Contributions to OCDLA may be tax deductible - check with your tax advisor. Electronic downloads are for the sole use of the purchasing member. Files may not be distributed to others.")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "text-neutral-300"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "standard",
    href: "https://ocdla.org",
    text: "ocdla.org"
  }), ' ', "|", ' ', (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "standard",
    href: "https://maps.app.goo.gl/7dCYKBEyJbmo8tzS7",
    text: "101 East 14th Ave, Eugene, OR 97401 "
  }), ' ', "|", ' ', (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "standard",
    href: "mailto:info@ocdla.org",
    text: "info@ocdla.org"
  }), ' ', "|", ' ', (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "standard",
    href: "tel:541-686-8716",
    text: "541-686-8716"
  }))), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", {
    "class": "text-nowrap"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "flex flex-col gap-2"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("strong", null, "Services")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "standard",
    href: "https://pubs.ocdla.org/directory/members",
    text: "Membership Directory"
  })), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "standard",
    href: "https://pubs.ocdla.org/directory/experts",
    text: "Expert Directory"
  })), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "standard",
    href: "/",
    text: "Online store"
  })))))), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", {
    "class": "text-nowrap"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "flex flex-col gap-2"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("strong", null, "Research")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "standard",
    href: "https://pubs.ocdla.org/car/list",
    text: "Research Criminal Appellate Review"
  })), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "standard",
    href: "https://lod.ocdla.org/",
    text: "Library of Defense"
  })), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "standard",
    href: "https://lod.ocdla.org/Public:Subscriptions",
    text: "Books Online"
  })))))), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", {
    "class": "text-nowrap"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "flex flex-col gap-2"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("strong", null, "Resources")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "standard",
    href: "/",
    text: "CLEs"
  })), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "standard",
    href: "/",
    text: "Videos"
  })), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "standard",
    href: "/",
    text: "Seminars & Events"
  }))))))));
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/components/Hyperlink.jsx":
/*!****************************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/components/Hyperlink.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hyperlink)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */

function Hyperlink(_ref) {
  var text = _ref.text,
    href = _ref.href,
    _ref$extraClasses = _ref.extraClasses,
    extraClasses = _ref$extraClasses === void 0 ? '' : _ref$extraClasses,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'standard' : _ref$type;
  var baseStyle = 'hover:underline-blue-500 text-blue-400 hover:opacity-[67.5%] hover:underline hover:underline-offset-2';
  var classes;
  switch (type) {
    case 'standard':
      classes = baseStyle;
      break;
    case 'navbar-link':
      classes = 'text-nowrap text-neutral-500 hover:opacity-[67.5%] hover:underline hover:underline-offset-2 -ms-4 lg:m-0 px-4 py-8';
      break;
    case 'navbar-dropdown':
      classes = 'border border-t-0 hover:border-neutral-200 bg-neutral-50 px-12 py-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-600';
      break;
    case 'navbar-brand':
      classes = 'p-4 lg:py-8 -m-4';
      break;
    case 'navbar-button-feedback':
      classes = 'bg-neutral-100 hover:bg-neutral-50 text-neutral-500 hover:text-neutral-400 border border-neutral-300 hover:border-neutral-400 px-4 py-2 rounded-md';
      break;
    case 'body-button':
      classes = 'border border-blue-600 hover:opacity-[67.5%] text-blue-600 px-4 py-2 rounded-md contrast-[0] saturate-0';
      break;
    case 'sidebar_right':
      classes = "px-4 py-2 flex border-b ".concat(baseStyle);
      break;
    case 'footer-social':
      classes = 'hover:opacity-[67.5%]';
      break;
  }
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("a", {
    "class": "".concat(classes).concat(extraClasses),
    href: href
  }, text);
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/components/Navbar.jsx":
/*!*************************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/components/Navbar.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _Hyperlink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hyperlink */ "./node_modules/@ocdla/global-components/src/components/Hyperlink.jsx");
/** @jsx vNode */
/* eslint-disable no-unused-vars */


/* eslint-enable */

function Navbar() {
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("nav", {
    "class": "flex items-center lg:h-16 lg:p-0"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("menu", {
    "class": "container mx-auto flex flex-col gap-4 border border-t-0 p-4 pt-0 lg:h-16 lg:flex-row lg:items-center lg:gap-0 lg:py-0"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "flex flex-col gap-4 lg:me-auto lg:flex-row lg:items-center lg:gap-0"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", {
    "class": "flex items-center text-white"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "navbar-brand",
    href: "https://oregon.public.law/",
    text: (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
      "class": "flex items-center"
    }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("img", {
      "class": "h-16",
      src: "https://www.ocdla.org/wp-content/uploads/2019/10/cropped-ocdla-logo.png"
    }))
  })), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "navbar-link",
    href: "https://oregon.public.law/rules",
    text: "Oregon Administrative Rules"
  })), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", {
    "class": "font-bold"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "navbar-link",
    href: "https://oregon.public.law/statutes",
    text: "Oregon Revised Statutes"
  }))), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("hr", {
    "class": "block lg:hidden"
  }), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "flex flex-row-reverse items-center gap-2 lg:flex-row"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", {
    "class": "group relative ms-auto lg:m-0"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("button", {
    "class": "peer flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#516490] p-2 text-white hover:opacity-[67.5%] group-focus-within:opacity-[67.5%]"
  }, "G"), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "absolute left-[50%] top-full z-10 mt-[15px] hidden -translate-x-1/2 flex-col text-nowrap shadow group-focus-within:flex"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "navbar-dropdown",
    href: "https://oregon.public.law/users/sign_in",
    text: "Login"
  }))), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", {
    "class": "hidden text-neutral-300 lg:block"
  }, "|"), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "navbar-button-feedback",
    href: "/",
    text: "Give Feedback"
  }), ' '))));
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/components/SectionEntry.jsx":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/components/SectionEntry.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SectionEntry)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable-next-line no-unused-vars */

function SectionEntry(_ref) {
  var text = _ref.text,
    heading = _ref.heading,
    href = _ref.href,
    _ref$active = _ref.active,
    active = _ref$active === void 0 ? false : _ref$active,
    children = _ref.children;
  // Determine appropriate classes based on active state.
  var a = active ? 'text-white border-black bg-black' : 'group hover:bg-neutral-100';
  var h1 = active ? '' : 'text-blue-400 group-hover:text-blue-500';
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("a", {
    "class": "flex flex-col gap-2 border-b px-4 py-2 ".concat(a),
    href: href
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("h1", {
    "class": "font-bold ".concat(h1)
  }, heading), children));
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/components/Sidebar.jsx":
/*!**************************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/components/Sidebar.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _SidebarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarItem */ "./node_modules/@ocdla/global-components/src/components/SidebarItem.jsx");
/* harmony import */ var _SectionEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionEntry */ "./node_modules/@ocdla/global-components/src/components/SectionEntry.jsx");
/** @jsx vNode */
/* eslint-disable no-unused-vars */



/* eslint-enable */

function Sidebar(_ref) {
  var items = _ref.items;
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("aside", {
    "class": "hidden h-[87.5vh] overflow-scroll lg:block"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", null, items.map(function (item) {
    return (
      // <SidebarItem {...item} />
      (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_SectionEntry__WEBPACK_IMPORTED_MODULE_2__["default"], item, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", {
        "class": item.active ? 'text-white' : ''
      }, item.text))
    );
  })));
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/components/SidebarItem.jsx":
/*!******************************************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/components/SidebarItem.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarItem)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _Hyperlink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hyperlink */ "./node_modules/@ocdla/global-components/src/components/Hyperlink.jsx");
/** @jsx vNode */
/* eslint-disable no-unused-vars */


/* eslint-enable */

function SidebarItem(_ref) {
  var text = _ref.text,
    href = _ref.href,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'standard' : _ref$type;
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)(_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: text,
    href: href,
    type: type
  }));
}

/***/ }),

/***/ "./node_modules/@ocdla/global-components/src/lib.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ocdla/global-components/src/lib.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interleave: () => (/* binding */ interleave)
/* harmony export */ });
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var interleave = function interleave(arr, thing) {
  var _ref;
  return (_ref = []).concat.apply(_ref, _toConsumableArray(arr.map(function (n) {
    return [n, thing];
  }))).slice(0, -1);
};


/***/ }),

/***/ "./node_modules/@ocdla/lib-http/HttpClient.js":
/*!****************************************************!*\
  !*** ./node_modules/@ocdla/lib-http/HttpClient.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HttpClient)
/* harmony export */ });
/* harmony import */ var _caches_HttpCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caches/HttpCache.js */ "./node_modules/@ocdla/lib-http/caches/HttpCache.js");
/* harmony import */ var _caches_LocalStorageCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caches/LocalStorageCache.js */ "./node_modules/@ocdla/lib-http/caches/LocalStorageCache.js");
/* harmony import */ var _Url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Url.js */ "./node_modules/@ocdla/lib-http/Url.js");
/* harmony import */ var _HttpHeader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HttpHeader.js */ "./node_modules/@ocdla/lib-http/HttpHeader.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




console.log("I am local HTTP module");
var HttpClient = /*#__PURE__*/function () {
  /**
   * 
   * @param {Request} req 
   * @returns Response
   */

  /*
  @param cacheOptions - Object with two keys: 'cache' and 'params'. Constructor is the name of our cache implementation. Params is an object that will be passed to that constructor.
  */
  function HttpClient() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, HttpClient);
    // Turns on and off hashing
    this.debug = config.debug || false;
    var cache = config['cacheOptions'] || null;
    this.cache = cache ? new cache['cache'](cache['params']) : null; // Dynamically instantiate our cache service from the config. Leave null to use browser cache.
  }
  return _createClass(HttpClient, [{
    key: "send",
    value: function send(req) {
      var _this = this;
      if (navigator.onLine == false) {
        throw new Error("Network offline.");
      }

      // Will hold any reference to a mocking class for the request.
      var mock;

      // Will hold a reference to the cached response, if there is one.
      var cached;

      // Reference to the pending outbound request.
      var pending;

      // Key for our cache. If we are debugging, don't hash it. Otherwise, hash it.
      var key = this.debug ? req.method + req.url : HttpClient.cyrb53(req.method + req.url);

      // Get the cache control from our request headers. If there is no cache control, use an empty string.
      var cacheHeader = req.headers.get("cache-control") || "";
      var cacheControl = new _HttpHeader_js__WEBPACK_IMPORTED_MODULE_3__["default"]("cache-control", cacheHeader);

      // Store our complex condition in a variable. If the request is a GET, we have a caching solution, and the cache control doesn't specify no-cache.
      var usingCaching = req.method == "GET" && this.cache && !cacheControl.hasValue("no-cache");
      try {
        mock = this.getMock(req);
        if (mock) {
          return mock.getResponse(req);
        }

        // Check the cache for a response.
        if (usingCaching) {
          // cached = HttpCache.get(req);
          // check the cache for a matching response;
          // if nothing's there we return null.
          cached = this.cache.match(key);
          // Prefer a completed response, if one already happens to be in the cache.
          if (cached) return cached;
        }

        // If there is a pending request to the same URL, return it.
        if (false) {}

        // If we've made it this far, we need to go to the network to get the resource.
        pending = fetch(req).then(function (resp) {
          // Remove the pending request, as we've now fulfilled it.
          delete HttpClient.outbound[key];

          // If we are using caching, store the response in the cache.
          if (usingCaching) {
            _this.cache.put(key, resp.clone());
          }
          return resp;
        });

        // Store the pending request.
        // This will prevent multiple unfulfilled requests to the same URL.
        HttpClient.outbound[key] = pending;
        return pending;
      } catch (e) {
        console.error(e);
        if (req.headers.get("Accept") == "application/json") {
          return Response.json({
            success: false,
            error: true,
            code: e.cause,
            message: e.message
          }, {
            status: 500
          });
        } else return new Response(e.message, {
          status: 500
        });
      }
    }
  }, {
    key: "getMock",
    value: function getMock(req) {
      var url = new _Url_js__WEBPACK_IMPORTED_MODULE_2__["default"](req.url);
      var domain = url.getDomain();
      return HttpClient.mocks[domain];
    }
  }], [{
    key: "register",
    value: function register(domain, mock) {
      var url = new _Url_js__WEBPACK_IMPORTED_MODULE_2__["default"](domain);
      domain = url.getDomain();
      HttpClient.mocks[domain] = mock;
    }
  }, {
    key: "cyrb53",
    value: function cyrb53(str) {
      var seed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var h1 = 0xdeadbeef ^ seed,
        h2 = 0x41c6ce57 ^ seed;
      for (var i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
      }
      h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507);
      h1 ^= Math.imul(h2 ^ h2 >>> 13, 3266489909);
      h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507);
      h2 ^= Math.imul(h1 ^ h1 >>> 13, 3266489909);
      return 4294967296 * (2097151 & h2) + (h1 >>> 0);
    }
  }]);
}();
// Store references to mocking classes.
// Mocking classes are registered against domains.
_defineProperty(HttpClient, "mocks", {});
// For performance reasons, store outbound requests.
// This enables what would otherwise be multiple requests to
// the same URL to resolve to the same fetch request.
_defineProperty(HttpClient, "outbound", {});


/***/ }),

/***/ "./node_modules/@ocdla/lib-http/HttpHeader.js":
/*!****************************************************!*\
  !*** ./node_modules/@ocdla/lib-http/HttpHeader.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HttpHeader)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HttpHeader = /*#__PURE__*/function () {
  function HttpHeader(name, value) {
    _classCallCheck(this, HttpHeader);
    this.name = name;
    this.values = HttpHeader.parseValues(value);
  }

  // 1. theres 1 value, no commas: pass
  // 2. theres multiple value, commas: pass
  // 3. some of those values are parameters, semicolons and commas: 
  // 4. some of those parameters have values, semicolons, commas, and equals:
  return _createClass(HttpHeader, [{
    key: "hasValue",
    value:
    /**
    * 
    * @returns {bool}
    */
    function hasValue(v) {
      // if v doesn't exist, it returns undefined which is falsy
      return this.values.hasOwnProperty(v);
    }
  }, {
    key: "getParameter",
    value: function getParameter(k) {
      return this.values[k];
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }], [{
    key: "parseValues",
    value: function parseValues(value) {
      var map = {};
      var values = value.split(",");
      for (var i = 0; i < values.length; i++) {
        var current = values[i].trim();
        var _current$split = current.split("="),
          _current$split2 = _slicedToArray(_current$split, 2),
          k = _current$split2[0],
          v = _current$split2[1]; // at index 0, when no "=", k = current, v = undefined
        map[k] = v;
      }
      return map;
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/@ocdla/lib-http/HttpMock.js":
/*!**************************************************!*\
  !*** ./node_modules/@ocdla/lib-http/HttpMock.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HttpMock)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Mocking classes should extend this.
var HttpMock = /*#__PURE__*/function () {
  function HttpMock() {
    _classCallCheck(this, HttpMock);
  }

  /**
   * 
   * @param {Request} req 
   */
  return _createClass(HttpMock, [{
    key: "getResponse",
    value: function getResponse(req) {
      switch (req.method) {
        case "GET":
          return this.get(req);
        case "POST":
          return this.post(req);
        case "PUT":
          return this.put(req);
        case "DELETE":
          return this["delete"](req);
        default:
          return Response.error();
      }
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/@ocdla/lib-http/Url.js":
/*!*********************************************!*\
  !*** ./node_modules/@ocdla/lib-http/Url.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Url)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var URL_SCHEME_SEPARATOR = "://";
var URL_PATH_SEPARATOR = "/";
var URL_QUERYSTRING_SEPARATOR = "?";
var URL_FRAGMENT_SEPARATOR = "#";
var SCHEME_HTTP = "http";
var SCHEME_HTTPS = "https";
var SCHEME_FILE = "file";
var Url = /*#__PURE__*/function () {
  function Url(url) {
    _classCallCheck(this, Url);
    _defineProperty(this, "url", null);
    _defineProperty(this, "scheme", SCHEME_HTTP);
    _defineProperty(this, "domain", null);
    _defineProperty(this, "path", "");
    _defineProperty(this, "query", {});
    this.url = url;
    var re = /:\/\/|\?/gi;
    var parts = this.url.split(re);
    this.scheme = parts.shift();
    var qs;
    if (parts.length == 2) {
      qs = parts.pop();
    }
    var d = parts[0];
    parts = d.split(URL_PATH_SEPARATOR);
    this.domain = parts.shift();
    this.path = URL_PATH_SEPARATOR + parts.join(URL_PATH_SEPARATOR);
    if (qs != null) {
      this.query = Url.parseQueryString(qs);
    }
  }
  return _createClass(Url, [{
    key: "getLastPathSegment",
    value: function getLastPathSegment() {
      var parts = this.path.split("/");
      var last = parts.pop();
      return last;
    }
  }, {
    key: "getDomain",
    value: function getDomain() {
      return this.domain;
    }
  }, {
    key: "getScheme",
    value: function getScheme() {
      return this.scheme;
    }
  }, {
    key: "getPath",
    value: function getPath() {
      return this.path;
    }
  }, {
    key: "getQuery",
    value: function getQuery() {
      return this.query;
    }
  }, {
    key: "buildQuery",
    value: function buildQuery(key, value) {
      this.query[key] = value;
    }
  }, {
    key: "toString",
    value: function toString() {
      var queryString = "";
      var fragment = "";
      var kvpa = [];
      // start with our query object and build a string
      for (var prop in this.query) {
        var value = this.query[prop];
        var kvp = !value ? prop : prop + "=" + this.query[prop];
        kvpa.push(kvp);
      }
      queryString = !kvpa.length ? "" : URL_QUERYSTRING_SEPARATOR + kvpa.join("&");
      return this.scheme + URL_SCHEME_SEPARATOR + this.domain + this.path + queryString + fragment;
    }
  }], [{
    key: "parseQueryString",
    value: function parseQueryString(qs) {
      var queryParts = qs.split("&");
      var query = {};
      for (var i = 0; i < queryParts.length; i++) {
        var kvp = queryParts[i];
        var parts = kvp.split("=");
        var key = parts[0];
        var value = parts[1];
        query[key] = value;
      }
      return query;
    }
  }, {
    key: "formatQueryString",
    value: function formatQueryString(obj) {
      var params = [];
      for (var prop in obj) {
        var kvp = void 0;
        kvp = prop + "=" + obj[prop];
        params.push(kvp);
      }
      ;
      return params.join("&");
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/@ocdla/lib-http/caches/HttpCache.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ocdla/lib-http/caches/HttpCache.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HttpCache)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HttpCache = /*#__PURE__*/function () {
  function HttpCache() {
    _classCallCheck(this, HttpCache);
  }
  return _createClass(HttpCache, [{
    key: "put",
    value: function put(key, resp) {
      HttpCache.cache[key] = resp;
    }
  }, {
    key: "get",
    value: function get(key) {
      return HttpCache.cache[key] || null;
    }

    // Stay compatible with other cache interfaces.
  }, {
    key: "match",
    value: function match(key) {
      return this.get(key);
    }
  }]);
}();
_defineProperty(HttpCache, "cache", {});


/***/ }),

/***/ "./node_modules/@ocdla/lib-http/caches/LocalStorage/LocalStorage.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ocdla/lib-http/caches/LocalStorage/LocalStorage.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStorage)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LocalStorage = /*#__PURE__*/function () {
  function LocalStorage() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, LocalStorage);
    // Define the default string keys to access the local storage. Expects JSON object with string keys and default value types.
    // EX. {"news": {lastFetch: new Date(), stories: null},  "favorites": new Array()}
    if (config.defaults !== undefined) LocalStorage.DEFAULTS = config.defaults;
  }

  // Using the string key, return from local storage the value stored. If it is undefined, search on the defaults object for a base structure
  return _createClass(LocalStorage, [{
    key: "getValue",
    value: function getValue(key) {
      return localStorage[key] === undefined ? LocalStorage.DEFAULTS[key] : JSON.parse(localStorage[key]);
    }

    // Using the string key, set local storage to the passed value
  }, {
    key: "setValue",
    value: function setValue(key, value) {
      if (value !== undefined) localStorage[key] = JSON.stringify(value);
    }

    // Clear all local storage
  }, {
    key: "clearAll",
    value: function clearAll() {
      // TODO: This should really be constrained to the keys that it accesses.
      localStorage.clear();
    }
  }]);
}();
// JSON Object that holds default string key names and default values if no values exist
_defineProperty(LocalStorage, "DEFAULTS", {});


/***/ }),

/***/ "./node_modules/@ocdla/lib-http/caches/LocalStorage/LocalStorageResponse.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ocdla/lib-http/caches/LocalStorage/LocalStorageResponse.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStorageResponse)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LocalStorageResponse = /*#__PURE__*/function () {
  function LocalStorageResponse(body, headers, expires) {
    _classCallCheck(this, LocalStorageResponse);
    _defineProperty(this, "headers", {});
    _defineProperty(this, "body", null);
    _defineProperty(this, "expires", null);
    this.body = body;
    this.headers = headers || this.headers;
    this.expires = expires || this.expires;
  }
  return _createClass(LocalStorageResponse, [{
    key: "addHeader",
    value: function addHeader(k, v) {
      this.headers[k] = v;
    }
  }, {
    key: "getHeaders",
    value: function getHeaders() {
      return this.headers;
    }
  }, {
    key: "getBody",
    value: function getBody() {
      return this.body;
    }
  }, {
    key: "toString",
    value: function toString() {
      return JSON.stringify(this);
    }

    /*
     Convert this object to a standard JavaScript Response object.
    */
  }, {
    key: "toResponse",
    value: function toResponse() {
      return Response.json(JSON.parse(this.body), {
        headers: this.headers
      });
    }

    // Convert stored JSON in the format '{"headers":{"h1":"h1","h2":"h2","h3":"h3"},"body":"{"prop1":"val1"}"}'.
  }], [{
    key: "fromJson",
    value: function fromJson(cachedJson) {
      var _JSON$parse = JSON.parse(cachedJson),
        body = _JSON$parse.body,
        headers = _JSON$parse.headers,
        expires = _JSON$parse.expires;
      return new LocalStorageResponse(body, headers, expires);
    }

    // Convert an instance JavaScript Response to an instance of this class.
  }, {
    key: "fromHttpResponse",
    value: function fromHttpResponse(httpResp) {
      var expires = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var headers = new Headers(httpResp.headers);
      return httpResp.text().then(function (body) {
        return new LocalStorageResponse(body, headers, expires);
      });
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/@ocdla/lib-http/caches/LocalStorageCache.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ocdla/lib-http/caches/LocalStorageCache.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStorageCache)
/* harmony export */ });
/* harmony import */ var _LocalStorage_LocalStorageResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalStorage/LocalStorageResponse.js */ "./node_modules/@ocdla/lib-http/caches/LocalStorage/LocalStorageResponse.js");
/* harmony import */ var _LocalStorage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalStorage/LocalStorage.js */ "./node_modules/@ocdla/lib-http/caches/LocalStorage/LocalStorage.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var LocalStorageCache = /*#__PURE__*/function () {
  // @params: refresh - If refresh is specified, the cache will be refreshed every refresh seconds.
  function LocalStorageCache() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, LocalStorageCache);
    this.refreshTime = config.refresh || null;
  }
  return _createClass(LocalStorageCache, [{
    key: "put",
    value: function put(key, httpResp) {
      var expires = this.refreshTime >= 0 ? Date.now() + this.refreshTime * 1000 : false;
      var resp = _LocalStorage_LocalStorageResponse_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromHttpResponse(httpResp, expires);
      resp.then(function (resp) {
        var localStorage = new _LocalStorage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        localStorage.setValue(key, resp.toString());
      });
    }
  }, {
    key: "get",
    value: function get(key) {
      var localStorageParams = {
        defaults: _defineProperty({}, key, null)
      };

      // We get the value of the key. If there is nothing, we expect to get back null.
      var localStorage = new _LocalStorage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"](localStorageParams);
      var json = localStorage.getValue(key);
      if (json) {
        var cachedResp;
        cachedResp = _LocalStorage_LocalStorageResponse_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJson(json);
        if (LocalStorageCache.isResponseFresh(cachedResp)) return cachedResp.toResponse();
      }
      return null;
    }
  }, {
    key: "match",
    value: function match(key) {
      return this.get(key);
    }

    // Returns true if the cached response is fresh: i.e. not stale.
  }], [{
    key: "isResponseFresh",
    value: function isResponseFresh(entry) {
      var expires = entry.expires;
      if (!expires) return true;
      return Date.now() < new Date(expires).getTime();
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/components/App.jsx":
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view/view.js */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _ocdla_global_components_src_components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ocdla/global-components/src/components/Navbar */ "./node_modules/@ocdla/global-components/src/components/Navbar.jsx");
/* harmony import */ var _ocdla_global_components_src_components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ocdla/global-components/src/components/Breadcrumbs */ "./node_modules/@ocdla/global-components/src/components/Breadcrumbs.jsx");
/* harmony import */ var _ocdla_global_components_src_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ocdla/global-components/src/components/Sidebar */ "./node_modules/@ocdla/global-components/src/components/Sidebar.jsx");
/* harmony import */ var _ocdla_global_components_src_components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ocdla/global-components/src/components/Footer */ "./node_modules/@ocdla/global-components/src/components/Footer.jsx");
/** @jsx vNode */ /** @jsxFrag "Fragment" */




// import Body from '@ocdla/global-components/src/components/Body';

function App(_ref) {
  var view = _ref.view,
    children = _ref.children,
    crumbs = _ref.crumbs,
    sidebarFirstItems = _ref.sidebarFirstItems,
    sidebarSecondItems = _ref.sidebarSecondItems;
  return (0,_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.vNode)("Fragment", null, (0,_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "group absolute right-0 m-4 flex gap-2 lg:left-0 lg:m-2"
  }, (0,_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.vNode)("button", {
    "class": "select-none whitespace-pre font-bold",
    onclick: function onclick() {
      view.render("foo");
    }
  })), (0,_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.vNode)("header", {
    "class": "flex flex-col lg:h-32"
  }, (0,_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: crumbs,
    separator: "/"
  })), (0,_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "container mx-auto border-x"
  }, (0,_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "lg:grid lg:grid-cols-6"
  }, (0,_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: sidebarFirstItems
  }), (0,_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.vNode)("main", {
    "class": "flex w-full flex-col gap-4 p-4 lg:col-span-4 lg:col-start-2 lg:me-auto lg:border-x lg:p-8"
  }, children), (0,_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: sidebarSecondItems
  }))), (0,_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.vNode)(_ocdla_global_components_src_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}

/***/ }),

/***/ "./src/data/ors-viewer/chapters/chapter-1.jsx":
/*!****************************************************!*\
  !*** ./src/data/ors-viewer/chapters/chapter-1.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Chapter)
/* harmony export */ });
/* harmony import */ var _ocdla_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/view */ "./node_modules/@ocdla/view/view.js");
/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable no-unused-vars */

function Chapter() {
  var styleTabActive = 'tab-btn rounded-t-md border border-b-transparent p-4';
  var styleTabInactive = 'tab-btn rounded-t-md border border-transparent border-b-inherit p-4 text-blue-400 hover:text-blue-500 hover:underline hover:underline-offset-2';
  var toggleTabs = function toggleTabs() {
    console.log('toggleTabs');
  };
  return (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("Fragment", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("h1", {
    "class": "text-4xl font-bold"
  }, "ORS 1.001"), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", {
    "class": "text-3xl font-thin"
  }, "State policy for courts")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("div", {
    "class": "flex flex-col gap-4"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("ul", {
    "class": "flex"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("button", {
    id: "tab-btn-1",
    "class": styleTabActive,
    onclick: toggleTabs
  }, "Text")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("button", {
    id: "tab-btn-2",
    "class": styleTabInactive,
    onclick: toggleTabs
  }, "Annotations")), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("li", {
    "class": "w-full border border-transparent border-b-inherit p-4"
  }, "\xA0"))), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", {
    id: "tab-body-1",
    "class": "tab-body flex flex-col gap-4"
  }, "The Legislative Assembly hereby declares that, as a matter of statewide concern, it is in the best interests of the people of this state that the judicial branch of state government, including the appellate, tax and circuit courts, be funded and operated at the state level. The Legislative Assembly finds that state funding and operation of the judicial branch can provide for best statewide allocation of governmental resources according to the actual needs of the people and of the judicial branch by establishing an accountable, equitably funded and uniformly administered system of justice for all the people of this state. [1981 s.s. c.3 \xA71]", (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("hr", null), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("small", null, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("i", null, "Source: Section 1.001 \u2014 State policy for courts,", ' ', (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("a", {
    href: "https://\xADoregonlegislature.\xADgov/bills_laws/ors/ors001.\xADhtml"
  }, "https://\xADoregonlegislature.\xADgov/bills_laws/ors/ors001.\xADhtml")))), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", {
    id: "tab-body-2",
    "class": "tab-body flex flex-col gap-4"
  }, (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", null, "Law Review Citations"), (0,_ocdla_view__WEBPACK_IMPORTED_MODULE_0__.vNode)("p", null, "50 WLR 291 (2014)")));
}

/***/ }),

/***/ "./src/js/BonMock.js":
/*!***************************!*\
  !*** ./src/js/BonMock.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BonMock)
/* harmony export */ });
/* harmony import */ var _ocdla_lib_http_HttpMock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ocdla/lib-http/HttpMock.js */ "./node_modules/@ocdla/lib-http/HttpMock.js");
/* harmony import */ var _data_books_online_fsm_chapter_1_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/books-online/fsm/chapter-1.html */ "./src/data/books-online/fsm/chapter-1.html");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var BonMock = /*#__PURE__*/function (_HttpMock) {
  function BonMock() {
    _classCallCheck(this, BonMock);
    return _callSuper(this, BonMock);
  }
  _inherits(BonMock, _HttpMock);
  return _createClass(BonMock, [{
    key: "getResponse",
    value: function getResponse(req) {
      return new Response(_data_books_online_fsm_chapter_1_html__WEBPACK_IMPORTED_MODULE_1__["default"], {
        headers: {
          'Content-Type': 'text/html'
        }
      });
    }
  }]);
}(_ocdla_lib_http_HttpMock_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_input_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/input.css */ "./src/css/input.css");
/* harmony import */ var _ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ocdla/view/view.js */ "./node_modules/@ocdla/view/view.js");
/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/App.jsx */ "./src/components/App.jsx");
/* harmony import */ var _ocdla_lib_http_Url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ocdla/lib-http/Url.js */ "./node_modules/@ocdla/lib-http/Url.js");
/* harmony import */ var _ocdla_lib_http_HttpClient_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ocdla/lib-http/HttpClient.js */ "./node_modules/@ocdla/lib-http/HttpClient.js");
/* harmony import */ var _ocdla_ors_src_OrsChapter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ocdla/ors/src/OrsChapter.js */ "./node_modules/@ocdla/ors/src/OrsChapter.js");
/* harmony import */ var _data_ors_viewer_breadcrumbs_items_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/ors-viewer/breadcrumbs/items.json */ "./src/data/ors-viewer/breadcrumbs/items.json");
/* harmony import */ var _data_ors_viewer_sidebar_left_items_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/ors-viewer/sidebar_left/items.json */ "./src/data/ors-viewer/sidebar_left/items.json");
/* harmony import */ var _data_ors_viewer_sidebar_right_items_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/ors-viewer/sidebar_right/items.json */ "./src/data/ors-viewer/sidebar_right/items.json");
/* harmony import */ var _data_ors_viewer_chapters_chapter_1_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/ors-viewer/chapters/chapter-1.jsx */ "./src/data/ors-viewer/chapters/chapter-1.jsx");
/* harmony import */ var _BonMock_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BonMock.js */ "./src/js/BonMock.js");
/** @jsx vNode */




// Data
/* eslint-enable */







// Mock data


if (true) {
  _ocdla_lib_http_HttpClient_js__WEBPACK_IMPORTED_MODULE_4__["default"].register('https://pubs.ocdla.org', new _BonMock_js__WEBPACK_IMPORTED_MODULE_10__["default"]());
}
window.HttpClient = _ocdla_lib_http_HttpClient_js__WEBPACK_IMPORTED_MODULE_4__["default"];

// An HTTP fragment, also known as a URI fragment, is a string of characters in a URL that identifies a specific location within a resource. The fragment identifier introduced by a hash mark (#) is the optional last part of a URL for a document. It is typically used to identify a portion of that document. The generic syntax is specified in RFC 3986. The hash mark separator in URIs does not belong to the fragment identifier.
var url = new _ocdla_lib_http_Url_js__WEBPACK_IMPORTED_MODULE_3__["default"]('https://appdev.ocdla.org/books-online/index.php');
url.buildQuery('chapter', '1');
var req = new Request(url.toString());
var client = new _ocdla_lib_http_HttpClient_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
var resp = await client.send(req);
var msword = await _ocdla_ors_src_OrsChapter_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromResponse(resp);
msword.chapterNum = 1;
var xml = _ocdla_ors_src_OrsChapter_js__WEBPACK_IMPORTED_MODULE_5__["default"].toStructuredChapter(msword);

/*
    Inspect the available properties for use in building section outline (left nav) and content.
    section outline (left nav) is listed in sectionTitles property.
    xml.doc contains the entire document.
    xml.toString() will return the entire document as an HTML string for use with innerHTML.
*/

console.log(xml);
console.log(xml.doc);
console.log('Loaded index.js');
var root = _ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_1__.View.createRoot('#app');
root.render((0,_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_1__.vNode)(_components_App_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
  crumbs: _data_ors_viewer_breadcrumbs_items_json__WEBPACK_IMPORTED_MODULE_6__,
  sidebarFirstItems: _data_ors_viewer_sidebar_left_items_json__WEBPACK_IMPORTED_MODULE_7__,
  sidebarSecondItems: _data_ors_viewer_sidebar_right_items_json__WEBPACK_IMPORTED_MODULE_8__
}, (0,_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_1__.vNode)(_data_ors_viewer_chapters_chapter_1_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/input.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/input.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
! tailwindcss v3.4.10 | MIT License | https://tailwindcss.com
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
  font-family: "Open Sans", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
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
[hidden] {
  display: none;
}

*, ::before, ::after {
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
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .container {
    max-width: 768px;
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
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.left-\\[50\\%\\] {
  left: 50%;
}
.right-0 {
  right: 0px;
}
.top-full {
  top: 100%;
}
.isolate {
  isolation: isolate;
}
.z-10 {
  z-index: 10;
}
.-m-4 {
  margin: -1rem;
}
.m-4 {
  margin: 1rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.-ms-4 {
  margin-inline-start: -1rem;
}
.ms-auto {
  margin-inline-start: auto;
}
.mt-\\[15px\\] {
  margin-top: 15px;
}
.block {
  display: block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.grid {
  display: grid;
}
.contents {
  display: contents;
}
.hidden {
  display: none;
}
.size-8 {
  width: 2rem;
  height: 2rem;
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
.h-max {
  height: -moz-max-content;
  height: max-content;
}
.w-\\[34px\\] {
  width: 34px;
}
.w-full {
  width: 100%;
}
.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
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
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-4 {
  gap: 1rem;
}
.gap-8 {
  gap: 2rem;
}
.overflow-scroll {
  overflow: scroll;
}
.whitespace-pre {
  white-space: pre;
}
.text-nowrap {
  text-wrap: nowrap;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-t-md {
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
}
.border {
  border-width: 1px;
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
.border-transparent {
  border-color: transparent;
}
.border-b-inherit {
  border-bottom-color: inherit;
}
.border-b-transparent {
  border-bottom-color: transparent;
}
.bg-\\[\\#516490\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(81 100 144 / var(--tw-bg-opacity));
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}
.bg-neutral-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
}
.bg-neutral-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 250 250 / var(--tw-bg-opacity));
}
.p-2 {
  padding: 0.5rem;
}
.p-4 {
  padding: 1rem;
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
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.pb-16 {
  padding-bottom: 4rem;
}
.pt-0 {
  padding-top: 0px;
}
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
.text-\\[0\\.625rem\\] {
  font-size: 0.625rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.font-bold {
  font-weight: 700;
}
.font-thin {
  font-weight: 100;
}
.uppercase {
  text-transform: uppercase;
}
.leading-\\[0\\.75rem\\] {
  line-height: 0.75rem;
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
.text-neutral-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity));
}
.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.underline {
  text-decoration-line: underline;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline {
  outline-style: solid;
}
.ring {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.contrast-\\[0\\] {
  --tw-contrast: contrast(0);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.invert {
  --tw-invert: invert(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.saturate-0 {
  --tw-saturate: saturate(0);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.hover\\:border-neutral-200:hover {
  --tw-border-opacity: 1;
  border-color: rgb(229 229 229 / var(--tw-border-opacity));
}
.hover\\:border-neutral-400:hover {
  --tw-border-opacity: 1;
  border-color: rgb(163 163 163 / var(--tw-border-opacity));
}
.hover\\:bg-neutral-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
}
.hover\\:bg-neutral-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(250 250 250 / var(--tw-bg-opacity));
}
.hover\\:text-blue-500:hover {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}
.hover\\:text-neutral-400:hover {
  --tw-text-opacity: 1;
  color: rgb(163 163 163 / var(--tw-text-opacity));
}
.hover\\:text-neutral-600:hover {
  --tw-text-opacity: 1;
  color: rgb(82 82 82 / var(--tw-text-opacity));
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
.group:focus-within .group-focus-within\\:flex {
  display: flex;
}
.group:focus-within .group-focus-within\\:opacity-\\[67\\.5\\%\\] {
  opacity: 67.5%;
}
.group:hover .group-hover\\:text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}
@media (min-width: 1024px) {

  .lg\\:left-0 {
    left: 0px;
  }

  .lg\\:col-span-4 {
    grid-column: span 4 / span 4;
  }

  .lg\\:col-start-2 {
    grid-column-start: 2;
  }

  .lg\\:m-0 {
    margin: 0px;
  }

  .lg\\:m-2 {
    margin: 0.5rem;
  }

  .lg\\:me-auto {
    margin-inline-end: auto;
  }

  .lg\\:block {
    display: block;
  }

  .lg\\:grid {
    display: grid;
  }

  .lg\\:hidden {
    display: none;
  }

  .lg\\:h-16 {
    height: 4rem;
  }

  .lg\\:h-32 {
    height: 8rem;
  }

  .lg\\:grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .lg\\:flex-row {
    flex-direction: row;
  }

  .lg\\:items-center {
    align-items: center;
  }

  .lg\\:gap-0 {
    gap: 0px;
  }

  .lg\\:gap-32 {
    gap: 8rem;
  }

  .lg\\:rounded-lg {
    border-radius: 0.5rem;
  }

  .lg\\:border-x {
    border-left-width: 1px;
    border-right-width: 1px;
  }

  .lg\\:p-0 {
    padding: 0px;
  }

  .lg\\:p-8 {
    padding: 2rem;
  }

  .lg\\:py-0 {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .lg\\:py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .lg\\:pb-16 {
    padding-bottom: 4rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/input.css"],"names":[],"mappings":"AAAA;;CAAc,CAAd;;;CAAc;;AAAd;;;EAAA,sBAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,mBAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,gBAAc;AAAA;;AAAd;;;;;;;;CAAc;;AAAd;;EAAA,gBAAc,EAAd,MAAc;EAAd,8BAAc,EAAd,MAAc;EAAd,gBAAc,EAAd,MAAc;EAAd,cAAc;KAAd,WAAc,EAAd,MAAc;EAAd,4IAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,+BAAc,EAAd,MAAc;EAAd,wCAAc,EAAd,MAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,yCAAc;UAAd,iCAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;EAAA,kBAAc;EAAd,oBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;EAAd,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,mBAAc;AAAA;;AAAd;;;;;CAAc;;AAAd;;;;EAAA,+GAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,+BAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,cAAc;EAAd,cAAc;EAAd,kBAAc;EAAd,wBAAc;AAAA;;AAAd;EAAA,eAAc;AAAA;;AAAd;EAAA,WAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;EAAd,yBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;EAAA,oBAAc,EAAd,MAAc;EAAd,8BAAc,EAAd,MAAc;EAAd,gCAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,uBAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,SAAc,EAAd,MAAc;EAAd,UAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,oBAAc;AAAA;;AAAd;;;CAAc;;AAAd;;;;EAAA,0BAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,aAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,YAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,6BAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,0BAAc,EAAd,MAAc;EAAd,aAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,kBAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;;;;;;;;EAAA,SAAc;AAAA;;AAAd;EAAA,SAAc;EAAd,UAAc;AAAA;;AAAd;EAAA,UAAc;AAAA;;AAAd;;;EAAA,gBAAc;EAAd,SAAc;EAAd,UAAc;AAAA;;AAAd;;CAAc;AAAd;EAAA,UAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;AAAA;;AAAd;;CAAc;AAAd;EAAA,eAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;;;;EAAA,cAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;EAAd,YAAc;AAAA;;AAAd,wEAAc;AAAd;EAAA,aAAc;AAAA;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,8BAAc;EAAd,6BAAc;EAAd,4BAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,sCAAc;EAAd,kCAAc;EAAd,2BAAc;EAAd,sBAAc;EAAd,8BAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd,sBAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd;AAAc;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,8BAAc;EAAd,6BAAc;EAAd,4BAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,sCAAc;EAAd,kCAAc;EAAd,2BAAc;EAAd,sBAAc;EAAd,8BAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd,sBAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd;AAAc;AACd;EAAA;AAAoB;AAApB;;EAAA;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;AAAA;AACpB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,WAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,wBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,yBAAmB;KAAnB,sBAAmB;UAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,gCAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,0EAAmB;EAAnB,8FAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,2GAAmB;EAAnB,yGAAmB;EAAnB;AAAmB;AAAnB;EAAA,0BAAmB;EAAnB;AAAmB;AAAnB;EAAA,yBAAmB;EAAnB;AAAmB;AAAnB;EAAA,0BAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAFnB;EAAA,sBAGA;EAHA;AAGA;AAHA;EAAA,sBAGA;EAHA;AAGA;AAHA;EAAA,kBAGA;EAHA;AAGA;AAHA;EAAA,kBAGA;EAHA;AAGA;AAHA;EAAA,oBAGA;EAHA;AAGA;AAHA;EAAA,oBAGA;EAHA;AAGA;AAHA;EAAA,oBAGA;EAHA;AAGA;AAHA;EAAA;AAGA;AAHA;EAAA;AAGA;AAHA;EAAA;AAGA;AAHA;EAAA;AAGA;AAHA;EAAA;AAGA;AAHA;EAAA,oBAGA;EAHA;AAGA;AAHA;;EAAA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA,sBAGA;IAHA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA,gBAGA;IAHA;EAGA;;EAHA;IAAA,iBAGA;IAHA;EAGA;;EAHA;IAAA;EAGA;AAAA","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/data/books-online/fsm/chapter-1.html":
/*!**************************************************!*\
  !*** ./src/data/books-online/fsm/chapter-1.html ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div class="document">

    <!-- Template://breadcrumb -->

    <div class="breadcrumb">

        <ul>
            <li>Books Online</li>
            <li>Felony Sentencing in Oregon</li>
        </ul>
    </div>

    <div class="chapter">

        <!-- Template://title -->





        <!-- Template://breadcrumb -->
        <!-- <div class="breadcrumb"><ul><li>Books Online</li><li>DUII Notebook</li></ul></div> -->

        <!-- Template://title -->
        <h1 class="chapter-title">Felony Sentencing in Oregon: Guidelines, Statutes, Cases<i
                class="fa-sharp fa-regular fa-bookmark"
                aria-hidden="true"
            ></i></h1>

        <p>2019 edition — Includes June 2023 updates by Jennelle Meeks Barton</p>

        <!-- <table class="toc-2">
    <tbody>
        <tr>
            <td>
                <div id="toctitle">
                    <h2>Contents</h2>
                    <span class="toctoggle">&nbsp;[<a href="#" class="internal" id="togglelink">hide</a>]&nbsp;
                    </span>
                </div>
                <ul>
                    <li class="toclevel-1 tocsection-3">
                        <a href="#Part_1_Misdemeanor_DUII"><span class="tocnumber">2</span> <span class="toctext">Part 1 - Misdemeanor DUII</span></a>
                    </li>
                    <li class="toclevel-1 tocsection-11">
                        <a href="#Part_2_Felony_DUII"><span class="tocnumber">3</span> <span class="toctext"><b>Part 2 - Felony DUII</b></span></a>
                    </li>
                    <li class="toclevel-1 tocsection-24">
                        <a href="#Part_3_Boats.2C_Bikes_and_Other_Vehicles"><span class="tocnumber">4</span> <span class="toctext">Part 3 - Boats, Bikes and Other Vehicles</span></a>
                    </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
-->



        <h1>Chapter 1 - Introduction</h1>
        <!-- Template://author(s) 
TODO: these should be linked to the appropirate directory entires.
-->

        <div class="authors">
            <i
                class="fa-solid fa-pen"
                aria-hidden="true"
            ></i>
            <span class="author">Jesse Wm. Barton</span>
        </div>

        <div class="tools">

            <div class="tool">
                <a onclick="return loadToc();">
                    <i
                        class="fa-solid fa-folder"
                        aria-hidden="true"
                    ></i>&nbsp; Chapters
                </a>
            </div>

            <div class="tool">
                <a onclick="return loadReferences();">
                    <i
                        class="fa-solid fa-folder"
                        aria-hidden="true"
                    ></i>&nbsp; References
                </a>
            </div>
        </div>


        <!-- <p id="case-refs" class="references">Cases referenced in this section:</p> -->

        <!-- <p id="book-refs" class="references">Books referenced in this section:</p> -->

        <!-- <p id="statutory-refs" class="references">Statutes referenced in this section:</p> -->

        <p
            id="all-refs"
            style="display:none; "
            class="references"
        ><strong>References in this chapter:</strong>

        <ul>
            <li><a
                    class="reference"
                    href="#null"
                >ORS 138.005(5)(a)-(b)</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Trice</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Davis</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >213-002-0001</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Kinkel</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Baker</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Guthrie</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Parsons</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Woodin</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Carr</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Davis</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Johnson</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Haydon</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >null</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Davis</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >United States v. Craig</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Reid</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Wilson</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Lavert</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >ORS 182.515(4)(a)</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Shumway</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >ORS 182.515(3)</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >ORS 182.515(5)</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Marrington</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >null</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >Farmer v. Brennan</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >United States v. Georgia</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. McLain</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Little</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Morgan</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Tallman</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Ferguson</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Shumway</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >State v. Spinney</a></li>
            <li><a
                    class="reference"
                    href="#null"
                >Black Lives Matter: Reducing Racial Disparities In Oregon’s Criminal Justice System Via Sentencing &amp; Jury Reform</a></li>
        </ul>
        </p>






        <!-- https://www.courts.oregon.gov/courts/appellate/rules/pages/orap.aspx -->
        <!-- https://www.courts.oregon.gov/publications/Documents/UpdatedStyleManual2002.pdf -->
        <!-- https://law.lclark.edu/live/files/18620-compiling-oregon-legislative-history-2016-update -->
        <!-- https://www.oregonlegislature.gov/bills_laws/ors/1987.pdf -->

        <p>In 1977, the Oregon Legislature adopted the state’s indeterminate (parole matrix) sentencing system. Effective November 1, 1989, the legislature replaced that system with the Oregon Sentencing Guidelines, a determinate sentencing system. The differences between indeterminate and determinate sentencing systems are discussed later in this chapter. Under either system:</p>

        <webc-ors
            references="ORS 138.005(5)(a)-(b)"
            target="_new"
        >

            <p>“(5) ‘Sentence’ means all legal consequences established or imposed by the trial court after conviction of an offense, including but not limited to:</p>

            <p>“(a) Forfeiture, imprisonment, cancellation of license, removal from office, monetary obligation, probation, conditions of probation, discharge, restitution and community service; and</p>

            <p>“(b) Suspension of imposition or execution of any part of a sentence, extension of a period of probation, imposition of a new or modified condition of probation or of sentence suspension, and imposition or execution of a sentence upon revocation of probation or sentence suspension.”</p>
        </webc-ors>

        <p>
            <em>See also</em> <span><a
                    class="cite"
                    references="State v. Trice, 146 Or App 15, 19, 933 P2d 345, rev den, 325 Or 280 (1997)"
                    href="https://scholar.google.com/scholar_case?case=17885442907828993295&amp;q=146+Or+App+15&amp;hl=en&amp;as_sdt=6,38"
                    target="_new"
                    title="View State v. Trice in Google Scholar"
                    id="StatevTrice"
                >State v. Trice</a>, 146 Or App 15, 19, 933 P2d 345, rev den, 325 Or 280 (1997)</span> (“[t]he term ‘sentence’ is generally defined as ‘the judgment passed by a court or judge on a person on trial as a criminal or offender’ and as an ‘order by which a court or judge imposes punishment or penalty upon a person found guilty’”; quoting <em>Webster’s Third New International Dictionary</em> 2068[sic] (unabridged ed 1993)).
        </p>

        <p>Although the legislature and the Oregon electorate, subsequent to the adoption of the guidelines, approved additional felony sentencing systems, these additional systems supplement, rather than replace, the guidelines. Consequently, this manual primarily focuses on the guidelines.</p>

        <p>This chapter discusses the guidelines’ stated principles and purposes, including “[t]he centerpiece of the sentencing guidelines”—the “Sentencing Guidelines Grid.” <span><a
                    class="cite"
                    references="State v. Davis, 315 Or 484, 487, 847 P2d 834 (1993)"
                    href="http://scholar.google.com/scholar_case?q=State+v.+Davis,+315+Or+484&amp;hl=en&amp;as_sdt=2,38&amp;as_vis=1&amp;case=17866389964872013717&amp;scilh=0"
                    target="_new"
                    title="View State v. Davis in Google Scholar"
                    id="StatevDavis"
                >State v. Davis</a>, 315 Or 484, 487, 847 P2d 834 (1993)</span>. The chapter then discusses the guidelines’ historical development and the manner in which they may be amended. The chapter also provides a summary of the categories of crimes and defendants to which the guidelines apply. Following that are analyses of the guidelines’ stated definitions and the various rules used in construing the guidelines. Finally, the chapter discusses certain questions regarding the guidelines’ constitutionality and trial court authority to impose money judgments in guidelines cases.</p>
        <style type="text/css">



        </style>



        <h1 id="oar_213_002_0001_statement_of_purposes_and_principles.">
            <strong>§ 1-1. OAR 213-002-0001 STATEMENT OF PURPOSES AND PRINCIPLES.</strong>
        </h1>


        <webc-oar
            references="213-002-0001"
            chapter="213"
            division="002"
            rule="0001"
            target="_new"
        >

            <p>OAR 213-002-0001 states the guidelines’ principles and purposes:</p>

            <p>(1) The primary objectives of sentencing are to punish each offender appropriately, and to insure the security of the people in person and property, within the limits of correctional resources provided by the Legislative Assembly, local governments and the people.</p>

            <p>(2) Sentencing guidelines are intended to forward the objectives described in section (1) by defining presumptive punishments for felony convictions, subject to judicial discretion to deviate for substantial and compelling reasons; and presumptive punishments for post-prison or probation supervision violations, again subject to deviation.</p>

            <p>(3) The basic principles which underlie these guidelines are:</p>

            <p>(a) The response of the corrections system to crime, and to violation of post-prison and probation supervision, must reflect the resources available for that response. A corrections system that overruns its resources is a system that cannot deliver its threatened punishment or its rehabilitative impact. This undermines the system’s credibility with the public and the offender, and vitiates the objectives of prevention of recidivism and reformation of the offender. A corrections system that overruns its resources can produce costly litigation and the threat of loss of system control to the federal judiciary. A corrections system that overruns its resources can increase the risk to life and property within the system and to the public.</p>

            <p>(b) Oregon’s current sentencing system combines indeterminate sentences with a parole matrix. Although many citizens believe the indeterminate sentence sets the length of imprisonment, that sentence only sets an offender’s maximum period of incarceration and the matrix controls actual length of stay. The frequent disparity between the indeterminate sentence length and time served under the matrix confuses and angers the public and damages the corrections system’s credibility with the public. Sentences of imprisonment should represent the time an offender will actually serve, subject only to any reduction authorized by law.</p>

            <p>(c) Under sentencing guidelines the response to many crimes will be state imprisonment. Other crimes will be punished by local penalties and restrictions imposed as part of probation. All offenders released from prison will be under post-prison supervision for a period of time. The ability of the corrections system to enforce swiftly and sternly the conditions of both probation and post-prison supervision, including by imprisonment, is crucial. Use of state institutions as the initial punishment for crime must, therefore, leave enough institutional capacity to permit imprisonment, when appropriate, for violation of probation and post-prison supervision conditions.</p>

            <p>(d) Subject to the discretion of the sentencing judge to deviate and impose a different sentence in recognition of aggravating and mitigating circumstances, the appropriate punishment for a felony conviction should depend on the seriousness of the crime of conviction when compared to all other crimes and the offender’s criminal history.</p>

            <p>(e) Subject to the sentencing judge’s discretion to deviate in recognition of aggravating and mitigating circumstances, the corrections system should seek to respond in a consistent way to like crimes combined with like criminal histories; and in a consistent way to like violations of probation and post-prison supervision conditions.</p>
        </webc-oar>


        <h2 id="intent_of_provision.">
            <strong>§ 1-1.1. Intent of Provision.</strong>
        </h2>

        <p>The commentary to this provision states: “The purposes of sentencing in Oregon and the principles that guide sentencing practices to achieve those purposes are legislative issues. This provision states the State Sentencing Guidelines Board’s understanding of those purposes and principles as provided in the guidelines enabling legislation, Chapter 619, Oregon Laws 1987 (1987 legislation).” Sentencing Guidelines Implementation Manual 6 (1989) (hereafter Implementation Manual).</p>

        <p>Regardless of what the legislature declared are the purposes and principles of sentencing, the Oregon Constitution states its own set of principles: “Laws for the punishment of crime shall be founded on these principles: protection of society, personal responsibility, and accountability for one’s actions and reformation.” Or Const, Art I, § 15. <em>See also</em> <span><a
                    class="cite"
                    references="State v. Kinkel, 184 Or App 277, 287, 56 P3d 463, 469"
                    href="http://scholar.google.com/scholar_case?q=State+v.+Kinkel&amp;hl=en&amp;as_sdt=2,38&amp;as_vis=1&amp;case=13303335512445438123&amp;scilh=0"
                    target="_new"
                    title="View State v. Kinkel in Google Scholar"
                    id="StatevKinkel"
                >State v. Kinkel</a>, 184 Or App 277, 287, 56 P3d 463, 469</span>, <em>rev den</em>, 335 Or 142 (2002) (“[t]o the extent that the four criteria [of Article I, section 15] can be applied on the level of individualized sentencing, their particular significance must vary depending on the circumstances of the crime or crimes being sentenced”). It is noteworthy that although “reformation” is a constitutionally based sentencing principle, the legislative purposes and principles do not mention it. To the extent the principles set by legislature conflict with those set by the constitution, the constitutional principles control. <em>See, e.g.</em>, <span><a
                    class="cite"
                    references="State v. Baker, 328 Or 355, 364, 976 P2d 1132 (1999)"
                    href="http://scholar.google.com/scholar_case?q=State+v.+Baker&amp;hl=en&amp;scisbd=2&amp;as_sdt=4,38&amp;as_ylo=1998&amp;as_yhi=1999&amp;as_vis=1&amp;case=16865013857854825510&amp;scilh=0"
                    target="_new"
                    title="View State v. Baker in Google Scholar"
                    id="StatevBaker"
                >State v. Baker</a>, 328 Or 355, 364, 976 P2d 1132 (1999)</span>. </p>


        <div class="update update-2023 update-2023-june">

            <div class="practice-tip">
                <span class="label">Practice Tip</span> The terms “reformation” and “rehabilitation” are interchangeable. When relying on Article I, section 15’s reformation principle, defense counsel should cite to Pope Francis’s address to United States Congress. He said, “A just and necessary punishment must never exclude the dimension of hope and the goal of rehabilitation.” “Visit to the Joint Session of the United States Congress: ‘Address of the Holy Father,’” U.S. Capitol, Washington, D.C., Sept. 24, 2015.

                <p></p>
            </div>
        </div>


        <h2 id="punishment_and_public_safety.">
            <strong>§ 1-1.2. Punishment and Public Safety.</strong>
        </h2>

        <p>OAR 213-002-0001(1) reflects what the 1987 Legislature identified as the main purpose for sentencing, <em>i.e.</em>, “to punish each criminal offender appropriately and insure the security of the public in person and property[.]” Or Laws 1987, ch 619, § 2(2). <em>See also</em> Or Const, Art I, § 15 (“Laws for the punishment of crime shall be founded on these principles: protection of society, personal responsibility, and accountability for one’s actions and reformation.”). Certain appellate decisions rely on this objective in interpreting the guidelines. <em>See, e.g.</em>, <span><a
                    class="cite"
                    references="State v. Guthrie, 112 Or App 102, 105-06, 828 P2d 462 (1992)"
                    href="http://scholar.google.com/scholar_case?q=State+v.+Guthrie+1992&amp;hl=en&amp;scisbd=2&amp;as_sdt=4,38&amp;as_vis=1&amp;case=8432203935641603254&amp;scilh=0"
                    target="_new"
                    title="View State v. Guthrie in Google Scholar"
                    id="StatevGuthrie"
                >State v. Guthrie</a>, 112 Or App 102, 105-06, 828 P2d 462 (1992)</span> (one of the principal policies underlying the guidelines “is that ranking crime seriousness provides protection from personal assault for individuals”). </p>


        <h2 id="presumptive_punishments.">
            <strong>§ 1-1.3. Presumptive Punishments.</strong>
        </h2>

        <p>Guidelines’ commentary explains that OAR 213-002-0001(2)</p>

        <p>“states the role of sentencing guidelines to define presumptive punishments subject to judicial authority to depart for substantial and compelling reasons. The enabling legislation directs the creation of guidelines which provide for ‘a sentence within the range of sanctions provided by law for the crime or crimes involved.’ [Or Laws 1987, ch 619, § 2(1).] The 1987 legislation also provides that the court ‘may impose a sentence outside the presumptive sentence or sentence range . . . if it finds, considering the purposes of this 1987 Act, there are substantial and compelling reasons justifying a deviation from the presumptive sentence.’ [<a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="671"
                data-subsection="(1)"
            >ORS 137.671(1)</a>].”</p>

        <p><em>Implementation Manual</em> at 6.</p>

        <p>For felony defendants, the guidelines create “presumptive” sentences, <em>i.e.</em>, sentences the law presumes are the appropriate sentences in specific cases. <em>See</em> <span><a
                    class="cite"
                    references="State v. Parsons, 135 Or App 188, 191, 897 P2d 1197, rev den, 322 Or 168 (1995)"
                    href="http://scholar.google.com/scholar_case?q=State+v.+Parsons+1995&amp;hl=en&amp;scisbd=2&amp;as_sdt=4,38&amp;as_vis=1&amp;case=3344305791195113512&amp;scilh=0"
                    target="_new"
                    title="View State v. Parsons in Google Scholar"
                    id="StatevParsons"
                >State v. Parsons</a>, 135 Or App 188, 191, 897 P2d 1197, rev den, 322 Or 168 (1995)</span> (guidelines presume that most defendants will be sentenced to presumptive terms); <span><a
                    references="State v. Woodin, 131 Or App 171, 175-76, 883 P2d 1332 (1994)"
                    class="cite"
                    href="http://scholar.google.com/scholar_case?q=State+v.+Woodin&amp;hl=en&amp;scisbd=2&amp;as_sdt=4,38&amp;as_vis=1&amp;case=7691503509296557371&amp;scilh=0"
                    target="_new"
                    title="View State v. Woodin in Google Scholar"
                    id="StatevWoodin"
                >State v. Woodin</a>, 131 Or App 171, 175-76, 883 P2d 1332 (1994)</span> (“[u]nder the guidelines, the maximum sentence is the presumptive sentence, unless the court finds substantial and compelling reasons to impose a departure”). </p>

        <p>OAR 213-003-0001(16) defines the term “presumptive sentence.” It states: “‘Presumptive sentence’ means the sentence provided in a grid block for an offender classified in that grid block by the combined effect of the crime seriousness ranking of the current crime of conviction and the offender’s criminal history or a sentence designated as a presumptive sentence by statute.” <em>Id</em>. Thus, presumptive sentences generally are found in the guidelines grid, but sometimes are found in special statutes. Chapter 4 discusses statutes that designate “presumptive” sentences found outside the grid.</p>

        <p>In exceptional cases, the guidelines allow the sentencing court to depart (deviate) from the presumptive sentence. <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="671"
                data-subsection=""
            >ORS 137.671</a>. Departure sentences are discussed in Chapter 7. The sentencing court also may impose non-presumptive sentences in cases where supplemental sentencing schemes apply. These schemes also are discussed in Chapter 4.</p>


        <h2 id="basic_guidelines_principles.">
            <strong>§ 1-1.4. Basic Guidelines Principles.</strong>
        </h2>

        <p>The guidelines’ basic principles are set out at OAR 213-002-0001(3)(a)-(e). They may be summarized as economy, veracity, vindication, public safety, and consistency. These principles should be treated as context, in construing the state’s sentencing laws. <em>See, e.g.</em>, <span><a
                    class="cite"
                    references="State v. Carr, 319 Or 408, 411-12, 877 P2d 1192 (1994)"
                    href="http://scholar.google.com/scholar_case?case=16377253580917487200&amp;q=319+Or+408&amp;hl=en&amp;as_sdt=2,38"
                    target="_new"
                    title="View State v. Carr in Google Scholar"
                    id="StatevCarr"
                >State v. Carr</a>, 319 Or 408, 411-12, 877 P2d 1192 (1994)</span> (context includes other statutes on the same general subject). The principles are discussed below.</p>

        <h3 id="economy_principle.">
            <strong>§ 1-1.4.1. Economy Principle.</strong>
        </h3>

        <p>Guidelines commentary explains that under the economy principle, set out at OAR 213-002-0001(3)(a), “the guidelines must conform corrections practices to available resources.” <em>Implementation Manual</em> at 6 (emphasis added). Various appellate decisions have relied on this principle to interpret the guidelines. <em>See</em> <span><a
                    class="cite"
                    references="State v. Davis, 113 Or App 118, 121, 830 P2d 620 (1992)"
                    href="http://scholar.google.com/scholar_case?q=State+v.+Davis,+113&amp;hl=en&amp;as_sdt=4,38&amp;case=6511027437962818099"
                    target="_new"
                    title="View State v. Davis in Google Scholar"
                    id="StatevDavis"
                >State v. Davis</a>, 113 Or App 118, 121, 830 P2d 620 (1992)</span> (resolving an ambiguous sentencing law consistent with defendant’s proposed construction, for that construction “comport[ed] with the policy underlying the guidelines to allocate punishment ‘within the limits of correctional resources’” (quoting <em>former</em> OAR 253-02-001(1))), <em>aff’d</em>, 315 Or 484, 847 P2d 834 (1993). <em>See also</em> <span><a
                    class="cite"
                    references="State v. Johnson, 125 Or App 655, 659, 866 P2d 1245 (1994)"
                    href="https://scholar.google.com/scholar_case?case=1466781010388466555&amp;q=125+or.+app.+655&amp;hl=en&amp;as_sdt=4,38"
                    target="_new"
                    title="View State v. Johnson in Google Scholar"
                    id="StatevJohnson"
                >State v. Johnson</a>, 125 Or App 655, 659, 866 P2d 1245 (1994)</span> (construing felony sentencing law in accord with <em>Davis</em> and the economy principle); <span><a
                    class="cite"
                    references="State v. Haydon, 116 Or App 347, 354-55, 842 P2d 410 (1992)"
                    href="https://scholar.google.com/scholar_case?case=11291437116060245907&amp;q=116+or.+app.+347&amp;hl=en&amp;as_sdt=4,38"
                    target="_new"
                    title="View State v. Haydon in Google Scholar"
                    id="StatevHaydon"
                >State v. Haydon</a>, 116 Or App 347, 354-55, 842 P2d 410 (1992)</span> (same); <span><a
                    class="cite"
                    href="https://scholar.google.com/scholar?hl=en&amp;as_sdt=4,38,60,156&amp;q=113 Or App 700"
                    target="_new"
                    title="View State v. Seals in Google Scholar"
                    references="State v. Seals, 113 Or App 700, 704, 833 P2d 1344 (1992)"
                    id="StatevSeals"
                >State v. Seals</a>, 113 Or App 700, 704, 833 P2d 1344 (1992)</span> (same). </p>



        <div class="update update-2023 update-2023-june">

            <div class="update-label">June 2023 update</div>

            <p>House Bill 5004 (enrolled as Oregon Laws 2021, chapter 468) is the 2021 Legislature’s primary measure appropriating funds to the Department of Corrections (DOC) for the 2021-23 biennium. The bill’s Section 1 appropriates from the general fund \$1,974,379,412. Of that amount, \$207,918,693 is for administrative-type functions. The Community Corrections Division’s portion of the total is \$290,147,396, which is about 14.7% of the total general fund appropriation. Assuming 14.7% of the administrative-type functions are for the Community Corrections portion, the total cost for Community Corrections is \$290,147,396 + (\$207,918,693 x 14.7%) = \$320,605,604. That leaves a total of \$1,626,773,808 of the DOC’s general fund appropriation for imprisonment.</p>

            <p>Section 2 of HB 5004 specifies a non-general fund appropriation of \$78,516,562. Of that amount, \$53,240,720 is for administrative-type functions. The Community Corrections Division’s portion of the total is \$6,441,863, which is about 8.2% of the total non-general fund appropriation. Assuming 8.2% of the administrative-type functions are for the Community Corrections portion, the total cost for Community Corrections is \$6,441,863 + (\$53,240,720 x 8.2%) = \$10,807,602. That leaves a total of \$67,708,960 of the DOC’s non-general fund appropriation for imprisonment.</p>

            <p>Accordingly, the combined general and non-general fund appropriations for imprisonment, for the 2021-23 biennium, is: \$1,626,773,808 + 67,708,960 = \$1,694,482,768. On April 1, 2022, the state Office of Economic Analysis (OEA) projected that as of July 1, 2022, the DOC would have 12,138 prison inmates. Because July 1, 2022 is the midpoint of the biennium, the DOC on average should have 12,138 prison inmates throughout the biennium.<a
                    href="#fn1"
                    class="footnote-ref"
                    id="fnref1"
                    role="doc-noteref"
                ><sup>1</sup></a> This means that during the current biennium, the annual average per-inmate cost of imprisonment is <strong>\$69,801</strong> [\$1,694,482,768 ÷ 12,138 inmates ÷ 2 yrs. = \$<strong>69,801</strong>].</p>
        </div>


        <div class="update update-2024 update-2024-jan">

            <div class="update-label">Jan 2024 update</div>

            <p>House Bill 5004 (enrolled as Oregon Laws 2021, chapter 468) is the 2021 Legislature’s primary measure appropriating funds to the Department of Corrections (DOC) for the 2021-23 biennium. The bill’s Section 1 appropriates from the general fund \$1,974,379,412. Of that amount, \$207,918,693 is for administrative-type functions. The Community Corrections Division’s portion of the total is \$290,147,396, which is about 14.7% of the total general fund appropriation. Assuming 14.7% of the administrative-type functions are for the Community Corrections portion, the total cost for Community Corrections is \$290,147,396 + (\$207,918,693 x 14.7%) = \$320,605,604. That leaves a total of \$1,626,773,808 of the DOC’s general fund appropriation for imprisonment.</p>

            <p>Section 2 of HB 5004 specifies a non-general fund appropriation of \$78,516,562. Of that amount, \$53,240,720 is for administrative-type functions. The Community Corrections Division’s portion of the total is \$6,441,863, which is about 8.2% of the total non-general fund appropriation. Assuming 8.2% of the administrative-type functions are for the Community Corrections portion, the total cost for Community Corrections is \$6,441,863 + (\$53,240,720 x 8.2%) = \$10,807,602. That leaves a total of \$67,708,960 of the DOC’s non-general fund appropriation for imprisonment.</p>

            <p>Accordingly, the combined general and non-general fund appropriations for imprisonment, for the 2021-23 biennium, is: \$1,626,773,808 + 67,708,960 = \$1,694,482,768. On April 1, 2022, the state Office of Economic Analysis (OEA) projected that as of July 1, 2022, the DOC would have 12,138 prison inmates. Because July 1, 2022 is the midpoint of the biennium, the DOC on average should have 12,138 prison inmates throughout the biennium.<a
                    href="#fn1"
                    class="footnote-ref"
                    id="fnref1"
                    role="doc-noteref"
                ><sup>1</sup></a> This means that during the current biennium, the annual average per-inmate cost of imprisonment is <strong>\$69,801</strong> [\$1,694,482,768 ÷ 12,138 inmates ÷ 2 yrs. = \$<strong>69,801</strong>].</p>
        </div>


        <p>Defense counsel may rely on the economy principle, along with the <a
                references="State v. Davis"
                href="https://scholar.google.com/scholar_case?q=State+v.+Davis,+113&amp;hl=en&amp;as_sdt=4,38&amp;case=6511027437962818099"
                target="_new"
            >Davis</a> line of cases, not only to seek favorable constructions of statutes as means of seeking favorable sentences, but as a means of seeking favorable sentences directly. <span><a
                    class="cite"
                    references="United States v. Craig, 703 F3d 1001 (7th Cir 2012) (Posner, J., concurring)"
                    href="https://scholar.google.com/scholar_case?case=7137107705936889733&amp;q=703+F.3d+1001&amp;hl=en&amp;as_sdt=3,38"
                    target="_new"
                    title="View United States v. Craig in Google Scholar"
                    id="UnitedStatesvCraig"
                >United States v. Craig</a>, 703 F3d 1001 (7th Cir 2012) (Posner, J., concurring)</span>. The prosecution likely would counter with the well-worn theory that increasing the length of incarceration incapacitates the defendant longer. Because this limits his ability to commit more crimes, the theory goes, lengthier incarceration is what is cost effective.</p>

        <p>But this rebuttal almost certainly would be based on generalizations, rather than on anything specific to the particular defendant. Defense counsel may meet the rebuttal by arguing that because counsel’s argument is specific to the defendant, in that it is based on the length of the prison term that the prosecution recommends for the defendant specifically, counsel’s argument should supersede the prosecution’s generalization. <em>Accord</em> <span><a
                    class="cite"
                    references="State v. Reid, 140 Or App 293, 296, 915 P2d 453 (1996)"
                    href="https://scholar.google.com/scholar_case?case=6855680331174499880&amp;q=State+v.+Reid,+140+Or.+App.+293&amp;hl=en&amp;as_sdt=4,38&amp;as_ylo=1996&amp;as_yhi=1999&amp;as_vis=1"
                    target="_new"
                    title="View State v. Reid in Google Scholar"
                    id="StatevReid"
                >State v. Reid</a>, 140 Or App 293, 296, 915 P2d 453 (1996)</span> (a “departure may not be predicated on [a] general sociological statement”; citing <span><a
                    class="cite"
                    references="State v. Wilson, 111 Or App 147, 152, 826 P2d 1010 (1992))"
                    href="http://scholar.google.com/scholar_case?case=14793830931348502728&amp;q=111+Or+App+147&amp;hl=en&amp;as_sdt=2,38"
                    target="_new"
                    title="View State v. Wilson in Google Scholar"
                    id="StatevWilson"
                >State v. Wilson</a>, 111 Or App 147, 152, 826 P2d 1010 (1992))</span>. <em>See also</em> <span><a
                    class="cite"
                    references="State v. Lavert, 164 Or App 280, 286-87, 991 P2d 1067 (1999)"
                    href="https://scholar.google.com/scholar?hl=en&amp;as_sdt=4,38,60,156&amp;q=164 Or App 280"
                    target="_new"
                    title="View State v. Lavert in Google Scholar"
                    id="StatevLavert"
                >State v. Lavert</a>, 164 Or App 280, 286-87, 991 P2d 1067 (1999)</span> (because state failed to provide appellate court sufficient record to review trial court ruling that imposing a Measure 11 minimum would be unconstitutionally disproportionate, Court of Appeals affirmed trial court ruling).</p>

        <p>The economy principle assumed even greater significance in 2003 when the legislature passed Senate Bill 267 (enrolled as 2003 Oregon Laws, chapter 669; partially codified at <a
                href="#"
                data-action="show-ors"
                data-chapter="182"
                data-section="515"
                data-subsection=""
            >ORS 182.515</a> and 182.525). SB 267 now requires that various state agencies, including the DOC, the Oregon Youth Authority, and the Criminal Justice Commission, spend “at least 75 percent of state moneys” the agencies receive on “evidence-based programs.” <a
                href="#"
                data-action="show-ors"
                data-chapter="182"
                data-section="525"
                data-subsection="(1)"
            >ORS 182.525(1)</a>.</p>

        <p>The statutory scheme defines “program” as</p>

        <webc-ors
            references="ORS 182.515(4)(a)"
            target="_new"
        >

            <p>“a treatment or intervention program or service that is intended to:</p>

            <p>“(A) Reduce the propensity of a person to commit crimes;</p>

            <p>“(B) Improve the mental health of a person with the result of reducing the likelihood that the person will commit a crime[.]”</p>

        </webc-ors>

        <p>Article I, section 15, of the Oregon Constitution mandates that “[l]aws for the punishment of crime shall be founded on four principles[.]” These principles include “reformation,” <em>id.</em>, which pertains to reducing the propensity, or the likelihood, that a person will commit crimes. Imprisonment seeks to serve the reformation principle. <span><a
                    class="cite"
                    references="State v. Shumway, 291 Or 153, 630 P2d 796 (1981)"
                    href="https://scholar.google.com/scholar_case?case=12498319768823710840&amp;q=291+Or+153&amp;hl=en&amp;as_sdt=6,38"
                    target="_new"
                    title="View State v. Shumway in Google Scholar"
                    id="StatevShumway"
                >State v. Shumway</a>, 291 Or 153, 630 P2d 796 (1981)</span>. <em>See generally</em> Arthur W. Campbell, <em>Law of Sentencing</em> § 2:4 (3d ed. 2004) (hereafter Campbell).</p>

        <p>Therefore, under <a
                href="#"
                data-action="show-ors"
                data-chapter="182"
                data-section="515"
                data-subsection="(a)"
            >ORS 182.515(a)</a>’s definition, imprisonment is a “program.” To ensure that the DOC meets its evidence-based program statutory mandate, a Court should impose a “program” of an extended term of imprisonment, only if that extended term is “evidence-based.”</p>

        <p>An “[e]vidence-based program” is</p>

        <webc-ors
            references="ORS 182.515(3)"
            target="_new"
        >

            <p>“a program that:</p>

            <p>“(a) Incorporates significant and relevant practices based on scientifically based re search; and</p>

            <p>“(b) Is cost-effective.”</p>

            <p><a
                    href="#"
                    data-action="show-ors"
                    data-chapter="182"
                    data-section="515"
                    data-subsection="(3)"
                >ORS 182.515(3)</a>.</p>
        </webc-ors>


        <p><a
                href="#"
                data-action="show-ors"
                data-chapter="182"
                data-section="515"
                data-subsection="(5)"
            >ORS 182.515(5)</a> defines the first part of the “evidence-based program” definition:</p>

        <webc-ors
            references="ORS 182.515(5)"
            target="_new"
        >

            <p>“‘Scientifically based research’ means research that obtains reliable and valid knowledge by:</p>

            <p>“(a) Employing systematic, empirical methods that draw on observation or experiment;</p>

            <p>“(b) Involving rigorous data analyses that are adequate to test the stated hypotheses and justify the general conclusions drawn;</p>

            <p>“(c) Relying on measurements or observational methods that provide reliable and valid data across evaluators and observers, across multiple measurements and observations and across studies by the same or different investigators; and</p>

            <p>“(d) Utilizing randomized controlled trials when possible and appropriate.”</p>

            <p>(Emphasis added.)</p>
        </webc-ors>



        <p><a
                href="#"
                data-action="show-ors"
                data-chapter="182"
                data-section="515"
                data-subsection="(2)"
            >ORS 182.515(2)</a> defines the second part of the “evidence-based program” definition: “Cost-effective” means that “cost savings realized over a reasonable period of time are greater than [its] costs.”</p>

        <p>Scientifically based research, in the form of sociological studies, demonstrates that a “program” of extended incarceration is not “evidence-based.” This is because such a program is as likely to increase persons’ propensity to commit crimes as it is to reduce it. This scientifically based research further shows that extended incarceration can have the effect of degenerating persons’ mental health, thereby increasing their likelihood of committing crimes. Because a program of extended incarceration has the likelihood of increasing persons’ propensity to commit crimes, including by worsening their mental health, a program of extended incarceration cannot be “cost-effective.”</p>

        <p>Consider the meta-analysis of David Roodman, <em>The Impacts of Incarceration on Crime</em> at 7, Open Philanthropy Project, Sept 2017. He explains:</p>

        <p>“[T]he question of the net impact of incarceration on crime must be brought to the data. Having reviewed and revisited published analyses in unprecedented depth, my best estimate is that the best estimate of the impact of additional incarceration on crime in the United States today is zero. And, while that estimate is not certain, there is as much reason overall to believe that <span class="underline">incarceration increases crime as decreases it</span>.”</p>

        <p>(Boldface in original; underscore added.)</p>

        <p>Dr. Oliver Roeder, <em>et al.</em>, <em>What Caused the Crime Decline?</em>, Brennan Center for Justice (2015) concur. They agree that lengthy prison sentences are as likely to fail as they are to succeed in reducing crime rates:</p>

        <p>“In 2006, sociologist Bruce Western examined how incarceration influenced crime through rehabilitation, incapacitation, and deterrence. Using data through 2000, Western estimated that about 10 percent of the 1990s crime drop could be attributed to increased incarceration. To isolate the effects of incarceration, he controlled for other variables, including: spending on police, various indicators of unemployment, income inequality, racial demographics, sentencing guidelines and practices, and political parties in power. Western also made adjustments for the effect of prison on crime, which includes how prison can actually increase crime (<em>i.e.</em> upon release from prison, research shows, many individuals become more likely to commit more crime). (This effect is often referred to as the “criminogenic” effect of prison. The phenomenon of two variables that simultaneously affect one another is called a ‘simultaneity effect’ in economic analysis. * * *)”</p>

        <p><em>What Caused the Crime Decline?</em> <em>Id</em>. at 20 (footnotes omitted; emphasis added).</p>

        <p>Roeder, <em>et al</em>. explain the source of this criminogenic effect of prison: “Once an individual enters prison, they are surrounded by other prisoners who have often committed more serious and violent offenses. Upon release, they often have trouble finding employment and reintegrating into society due to both legal barriers and social stigma.” <em>Id</em>. at 25 (footnotes omitted).</p>

        <p>In sum, scientifically based research (sociological studies) establishes that a program of extended incarceration is not “evidence based.” <em>See also</em> Marc Mauer, <em>The Race to Incarcerate</em> 92-112 (2d ed 2006). Defense counsel should argue that, to the extent possible, courts should avoid imposing sentences that would force the DOC to violate its evidence-based program requirements under <a
                href="#"
                data-action="show-ors"
                data-chapter="182"
                data-section="525"
                data-subsection="(1)"
            >ORS 182.525(1)</a>.</p>

        <p>Furthermore, <a
                href="#"
                data-action="show-ors"
                data-chapter="182"
                data-section="515"
                data-subsection=""
            >ORS 182.515</a>’s definition of “scientifically based research” tracks with the definition of “scientific” evidence that is used in determining whether evidence is admissible under OEC 702. <em>See, e.g.</em>, <span><a
                    class="cite"
                    references="State v. Marrington, 335 Or 555, 73 P3d 911 (2003)"
                    href="https://scholar.google.com/scholar_case?case=10154162156262782119&amp;q=335+or.+555&amp;hl=en&amp;as_sdt=6,38"
                    target="_new"
                    title="View State v. Marrington in Google Scholar"
                    id="StatevMarrington"
                >State v. Marrington</a>, 335 Or 555, 73 P3d 911 (2003)</span>. Consequently, defense counsel may argue that although the evidence code generally does not apply in sentencing hearings, OEC 101(4)(d), owing to <a
                href="#"
                data-action="show-ors"
                data-chapter="182"
                data-section="515"
                data-subsection=""
            >ORS 182.515</a>, OEC 702-type principles do apply and regulate the prosecution’s proof.</p>


        <div class="practice-tip">
            <span class="label">Practice Tip</span> With great regularity, defense counsel represent clients at sentencing who suffer from various forms of physical and psychological disabilities that are subject to the requirements of the federal Americans with Disabilities Act (ADA). If these clients are sentenced to prison, the ADA will require the DOC to accommodate the clients’ disabilities. <span><a
                    class="cite"
                    case="Pennsylvania Dept. Correction v. Yeskey"
                    vol="524"
                    reporter="US"
                    page="206"
                    href="https://scholar.google.com/scholar?hl=en&amp;as_sdt=4,38,60,156&amp;q=118 S Ct 1952"
                    target="_new"
                    title="View Pennsylvania Dept. Correction v. Yeskey in Google Scholar"
                    references="Pennsylvania Dept. Correction v. Yeskey, 118 S Ct 1952, 141 L Ed 2d 215 (1998)"
                    id="PennsylvaniaDeptCorrectionvYeskey"
                >Pennsylvania Dept. Correction v. Yeskey</a>, 118 S Ct 1952, 141 L Ed 2d 215 (1998)</span>. <em>See also</em> <span><a
                    class="cite"
                    references="Farmer v. Brennan, 511 US 825, 114 S Ct 1970, 128 L Ed 2d 811 (1994)"
                    href="http://scholar.google.com/scholar_case?case=2417836767044325448&amp;q=511+us+825&amp;hl=en&amp;as_sdt=6,38"
                    target="_new"
                    title="View Farmer v. Brennan in Google Scholar"
                    id="FarmervBrennan"
                >Farmer v. Brennan</a>, 511 US 825, 114 S Ct 1970, 128 L Ed 2d 811 (1994)</span> (deliberate indifference to inmate’s serious medical needs may violate Eighth Amendment). Indeed, the client may sue the DOC for monetary damages if it fails to accommodate the client’s disability. <span><a
                    class="cite"
                    references="United States v. Georgia, 546 US 151, 126 S Ct 877, 163 L Ed 2d 650 (2006)"
                    href="http://scholar.google.com/scholar_case?case=5079223862968251341&amp;q=546+us+151&amp;hl=en&amp;as_sdt=6,38"
                    target="_new"
                    title="View United States v. Georgia in Google Scholar"
                    id="UnitedStatesvGeorgia"
                >United States v. Georgia</a>, 546 US 151, 126 S Ct 877, 163 L Ed 2d 650 (2006)</span>. Thus, when representing clients with disabilities, defense counsel, in addition to relying on a general application of the economy principle, should consider specifically relying on the potential costs to the DOC of accommodation under the ADA and the Eighth Amendment, as well as the possibility of DOC liability for violating the ADA, to try to persuade the court to sentence leniently.

            <p></p>
        </div>



        <h3 id="veracity_principle_determinate_sentencing.">
            <strong>§ 1-1.4.2. Veracity Principle (Determinate Sentencing).</strong>
        </h3>

        <p>The veracity principle is set out at OAR 213-002-0001(3)(b). It is grounded on a “need for a sentencing system which provides truth-in-sentencing. Under the guidelines system, the sentence imposed will not be shortened by parole. The only term reductions permitted under the guidelines system will be those expressly provided by statute.” <em>Implementation Manual</em> at 7.</p>

        <p>This principle recognizes that the guidelines represented a fundamental change in sentencing policies. The former parole matrix system is an “indeterminate sentencing” system, <em>i.e.</em>, a system in which the sentencing court</p>

        <p>“a minimum and a maximum incarceration term, allowing the possibility of release on parole between the expiration of those terms; the date and conditions of release before the maximum term is generally determined by a board of parole.</p>

        <p>“This statutory system originated in the 19th Century and rests upon the rehabilitative rationale. Since the amount of time needed to rehabilitate an offender varies with each individual and cannot be known precisely at the time of sentencing, indeterminate terms give offenders an incentive to cooperate in their rehabilitation by promising them freedom when sufficiently improved.”</p>

        <p>Campbell, § 4:2, p 105 (footnotes omitted).</p>

        <p>During the pre-guidelines era, the Board of Parole and Post-Prison Supervision (then, simply called the “Parole Board”) could, and regularly did, release defendants long before they completed serving their judicially imposed maximum terms. These early releases carried a terrific political liability, which itself prompted the legislature to adopt the guidelines and to finance prison construction.</p>

        <p>Professor Kirkpatrick explains that granting early releases “created a public backlash against both the Parole Board and its matrix as defendants sentenced to prison soon reappeared in the community after serving only a fraction of their prison sentences. Thus, these early release programs gave the state corrections system the image of being a ‘revolving door.’” Laird C. Kirkpatrick, <em>Mandatory Felony Sentencing Guidelines: The Oregon Model</em>, 25 UC Davis L Rev 695, 697 (1992) (hereafter Kirkpatrick). <em>See also</em> Kathleen M. Bogan, <em>Constructing Felony Sentencing Guidelines in an Already Crowded State: Oregon Breaks New Ground</em>, 36 Crime &amp; Delinquency 467, 474 (1990) (hereafter Bogan) (“preguidelines lengths of stay were, on the average, 24% of the judicial sentence imposed”). </p>

        <p>The guidelines system is the converse of the parole matrix system. It is a “determinate sentencing” system—one in which the court imposes sentences</p>

        <p>“whose length can be measured with relative certainty at the time they are imposed. Only credit for time served, good time, and work time can reduce the term decreed on sentencing day. * * *</p>

        <p>“Although different species abound * * * , there are two features common to all determinate sentences. First, the sentencing judge imposes a single term (instead of a minimum and maximum term as under an indeterminate system). Second, there is no subsequent parole-board decision (as with indeterminate systems) to release the prisoner earlier than the imposed term.”</p>

        <p>Campbell, § 4:3, at 110-11 (footnotes omitted).</p>

        <p>When the legislature adopted the guidelines, it simultaneously disabled the Parole Board from paroling defendants who receive guidelines sentences. Or Laws 1989, ch 790, § 28. The only exceptions are for guidelines-era murder defendants, <em>see</em> Or Laws 1999, ch 782, § 2 (overturning <span><a
                    class="cite"
                    references="State v. McLain, 158 Or App 419, 974 P2d 727 (1999)"
                    href="https://scholar.google.com/scholar_case?case=12397698261094005102&amp;q=158+or.+app.+419&amp;hl=en&amp;as_sdt=6,38"
                    target="_new"
                    title="View State v. McLain in Google Scholar"
                    id="StatevMcLain"
                >State v. McLain</a>, 158 Or App 419, 974 P2d 727 (1999)</span>), and defendants who incurred “dangerous offender” sentences. <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="725"
                data-subsection="(1)"
            >ORS 161.725(1)</a>. The legislature thereby ensured that subject to these two exceptions, the guidelines would be a determinate sentencing system. Some appellate decisions accurately recognize this fundamental change in sentencing systems. <span><a
                    class="cite"
                    references="State v. Little, 116 Or App 322, 324-25, 842 P2d 414 (1992)"
                    href="https://scholar.google.com/scholar_case?case=10649655547922454765&amp;q=116+or.+app.+322&amp;hl=en&amp;as_sdt=6,38"
                    target="_new"
                    title="View State v. Little in Google Scholar"
                    id="StatevLittle"
                >State v. Little</a>, 116 Or App 322, 324-25, 842 P2d 414 (1992)</span>. Other appellate decisions have not been so accurate. <em>See</em> <span><a
                    class="cite"
                    references="State v. Morgan, 316 Or 553, 557-58, 856 P2d 612 (1993)"
                    href="https://scholar.google.com/scholar_case?case=1265419013725577119&amp;q=316+or.+553&amp;hl=en&amp;as_sdt=6,38"
                    target="_new"
                    title="View State v. Morgan in Google Scholar"
                    id="StatevMorgan"
                >State v. Morgan</a>, 316 Or 553, 557-58, 856 P2d 612 (1993)</span> (misconstruing the meaning of the phrase “determinate sentence”).</p>

        <p>A corollary of the guidelines determinate sentencing principle—that court-imposed sentences must be served—is that the court may not suspend sentence. Instead, the court must actually impose and execute the defendant’s sentence. See, e.g., <span><a
                    class="cite"
                    references="State v. Tallman, 190 Or App 245, 251, 78 P3d 141 (2003)"
                    href="https://scholar.google.com/scholar_case?case=11928593174076170052&amp;q=190+or.+app.+245&amp;hl=en&amp;as_sdt=6,38"
                    target="_new"
                    title="View State v. Tallman in Google Scholar"
                    id="StatevTallman"
                >State v. Tallman</a>, 190 Or App 245, 251, 78 P3d 141 (2003)</span>; <span><a
                    class="cite"
                    references="State v. Ferguson, 175 Or App 278, 279, 27 P3d 176 (2001)"
                    href="https://scholar.google.com/scholar_case?case=6783641004245929333&amp;q=175+or.+app.+278&amp;hl=en&amp;as_sdt=6,38"
                    target="_new"
                    title="View State v. Ferguson in Google Scholar"
                    id="StatevFerguson"
                >State v. Ferguson</a>, 175 Or App 278, 279, 27 P3d 176 (2001)</span>.</p>



        <h3 id="vindication_and_public_safety_principles.">
            <strong>§ 1-1.4.3. Vindication and Public Safety Principles.</strong>
        </h3>

        <p>OAR 213-002-0001(3)(c) and (d) set out the guidelines’ vindication and public safety principles. OAR 213-002-0001(3)(c) recognizes the principle of maintaining</p>

        <p>“enough state institutional capacity to enforce conditions of post-prison and probation supervision with prison sanctions when appropriate. This principle is inferred from (1) the 1987 legislation’s directive to include ‘the revocation of probation and subsequent incarceration’ within the scope of sentencing guidelines, [Or Laws 1987, ch 619, § 2(1)]; and (2) the obvious need to establish effective controls over the many offenders who are supervised in the community.”</p>

        <p><em>Implementation Manual</em> at 7.</p>

        <p>Similarly, OAR 213-002-0001(3)(d) recognizes</p>

        <p>“the principle that presumptive punishments should be based on the seriousness of the crime of conviction and the offender’s criminal history. This principle recognizes that the legislature selected, from the many relevant factors cited in the 1987 legislation, ‘just deserts’ and ‘public safety’ as the primary purposes of sentencing for Oregon’s criminal justice system.”</p>

        <p><em>Implementation Manual</em> at 7 (quoting Or Laws 1987, ch 619, § 2(a)).</p>


        <h3 id="consistency_principle.">
            <strong>§ 1-1.4.4. Consistency Principle.</strong>
        </h3>

        <p>OAR 213-002-0001(3)(e) sets out the guidelines’ consistency principle. It recognizes the need to “reduce disparity in the corrections system’s response to crime and supervision violations. The legislature stated its concern that ‘within the present system it is impossible to insure that the sentencing decisions of judges result in reasonably uniform and proportional use of state and local correctional resources.’” <em>Implementation Manual</em> at 7 (quoting Or Laws 1987, ch 691, preamble).</p>

        <p>This principle could be considered a codification of the state constitutional requirement of proportionate sentences. Or Const, Art I, § 16 (“all penalties shall be proportioned to the offense”). <em>See, e.g.</em>, <span><a
                    class="cite"
                    references="State v. Shumway, "
                    href="http://scholar.google.com/scholar_case?q=State+v.+Shumway&amp;hl=en&amp;scisbd=2&amp;as_sdt=4,38&amp;as_vis=1&amp;case=12498319768823710840&amp;scilh=0"
                    target="_new"
                    title="View State v. Shumway in Google Scholar"
                    id="StatevShumway"
                >State v. Shumway</a>, </span> (applying proportionality requirement). In <span><a
                    class="cite"
                    references="State v. Spinney, 109 Or App 573, 577-78, 820 P2d 854 (1991)"
                    href="http://scholar.google.com/scholar_case?q=State+v.+Spinney&amp;hl=en&amp;scisbd=2&amp;as_sdt=4,38&amp;as_vis=1&amp;case=12126674581988236550&amp;scilh=0"
                    target="_new"
                    title="View State v. Spinney in Google Scholar"
                    id="StatevSpinney"
                >State v. Spinney</a>, 109 Or App 573, 577-78, 820 P2d 854 (1991)</span>, <em>rev dismissed</em>, 313 Or 75 (1992), the Court of Appeals held that the guidelines comport with the proportionality requirement of Article I, section 16.</p>



        <div class="update update-2023 update-2023-june">

            <div class="update-label">June 2023 update</div>

            <div class="practice-tip">
                <span class="label">Practice Tip</span> The consistency principle recognizes the need to “reduce disparity in the corrections system’s response to crime and supervision violations. The legislature stated its concern that ‘within the present system it is impossible to insure that the sentencing decisions of judges result in reasonably uniform and <strong>proportional use of state</strong> and local correctional resources.’” <em>Implementation Manual</em> at 7 (quoting Or Laws 1987, ch 691, preamble; emphasis added). Accordingly, a thorough sentencing memorandum would include a survey of sentences previously imposed in similar cases, and would recommend a sentence that is consistent with the sentences imposed in the prior cases.<br> <br>     Moreover, in cases involving racial and ethnic-minority defendants, a     thorough sentencing memorandum would describe and recommend a sentence     that avoids exacerbating the racial and ethnic disparities in Oregon’s     prison system. As The Sentencing Project explains, “sentencing advocacy     has the potential of offering prosecutors and courts an opportunity     through sentencing to offset or correct the cumulative impact of     incremental racial, ethnic or cultural disparities introduced as a     result of disparities in policing, prosecutorial charging practices, or     early court processes such as the setting of bond.” <em>The Ten Principles of Sentencing Advocacy</em> (The Sentencing Project Dec. 2003), at 6-7.<br> <br>     For comprehensive information on using racial disparities to seek     favorable sentencing decisions for African American clients, see Jesse Wm. Barton <a
                    references="Black Lives Matter: Reducing Racial Disparities In Oregon’s Criminal Justice System Via Sentencing &amp; Jury Reform"
                    href="https://libraryofdefense.ocdla.org/Webinars_and_Podcasts"
                    target="_new"
                >Black Lives Matter: Reducing Racial Disparities In Oregon’s Criminal Justice System Via Sentencing &amp; Jury Reform</a> (OCDLA CLE July 10, 2020). <em>See also</em> Marcia G. Shein, Cultural Issues in Sentencing, in <em>Cultural Issues in Criminal Defense</em> 925 (Linda Friedman Ramirez ed., 3d ed 2010).

                <p></p>
            </div>



            <h3 id="selective_vs._collective_incapacitation.">
                <strong>§ 1-1.4.5. Selective vs. Collective Incapacitation.</strong>
            </h3>

            <p>Mass incarceration is a consequence; specifically, it is a consequence of criminal justice system policies and practices. These <strong>policies</strong> predominantly include the application of “<strong>collective</strong> incapacitation” sentencing schemes, as opposed to “<strong>selective</strong> incapacitation” schemes. </p>

            <p>“Incapacitation” is perhaps the primary rationale for incarcerating criminal defendants. <em>See, e.g.</em>, Arthur W. Campbell, <em>Law of Sentencing</em>, § 2:3 (3d ed 2004). The rationale is thought to serve the “protection of society,” which in Oregon is a foundational principle “for the punishment of crime[.]” Or Const, Art I, § 15. That principle also is found in the guidelines, whose “primary objectives of sentencing” include “insur[ing] the security of the people.” OAR 213-002-0001(1).</p>

            <p>The incapacitation rationale is grounded on the theory that “society need not fear offenders who are rendered physically incapable of committing crime.” Campbell, <em>Law of Sentencing</em>, § 2:3 at 42. “Few prisoners escape; there are few offenses which they can commit inside; and their victims are usually their fellow prisoners or custodians.” Nigel Walker, <em>Sentencing in a Rational Society</em> 164 (1972), <em>quoted in</em> Campbell, § 2:3 at 42. But owing to the “criminogenic effect of prison,” Dr. Oliver Roeder, <em>et al.</em>, <em>What Caused the Crime Decline?</em> at 20, Brennan Center for Justice (2015), in the long run, <strong>extended</strong> incapacitation may be as likely to fail, as it is to achieve, its desired goal of societal protection. </p>

            <p>As mentioned, there are two, polar-opposite types of incapacitation: selective and collective. <strong>Selective</strong> incapacitation puts incarceration to “the most efficient use,” by “restrict[ing the incapacitation] rationale to justifying imprisonment for only the most dangerous offenders, and recogniz[ing] the need for more accurate presentence studies to diagnose those types.” Campbell, § 2:3 at 43. “‘Selective incapacitation strategies offer the possibility of achieving greater reductions in crime at considerably smaller costs in prison resources[.]’” Campbell, § 2:3 at 44 n 13 (quoting Jacqueline Cohen, <em>Incapacitating Criminals: Recent Research Findings</em>, National Institute of Justice (Dec. 1983)). <em>See also</em> Ben Vollaard, <em>Preventing Crime Through Selective Incapacitation</em>, 123 The Economic Journal 262 (2013). </p>

            <p>For example, consider that an estimated “70 percent of all serious criminal offenses are committed by roughly 7 percent of offenders, a group commonly referred to as career criminals.” David W. Neubauer &amp; Henry F. Fradella, <em>America’s Courts &amp; the Criminal Justice System</em> 223 (11th ed 2014) (citing Matthew G. Vaughn &amp; Matt DeLisi, <em>Were Wolfgang’s Chronic Offenders Psychopaths: On the Convergent Validity Between Psychopathy &amp; Career Criminality</em>, 36 Journal of Criminal Justice 33-42 (2008) and Matt DeLisi, Career Criminals in Society (2005)). Theoretically, a selective-incapacitation system that unerringly targets the 7% could reduce the serious crime rate by 70%. The cost of incapacitating only that 7% would be low, but its crime-rate reductions wouldf dr be massive. Such a system would be so efficient that its inventor should be worthy of a Nobel Prize in economics.</p>

            <p><strong>Collective</strong> incapacitation is the polar opposite of selective incapacitation. It applies indiscriminately, and to far more defendants than does selective incapacitation. It is insouciant to defendants’ personal characteristics and the characteristics of their individual crimes. By imposing incarceration sentences indiscriminately, collective-incapacitation schemes lump together those who are unlikely to recidivate with the 7% who offend so frequently they account for 70% of all serious crimes.<a
                    href="#fn2"
                    class="footnote-ref"
                    id="fnref2"
                    role="doc-noteref"
                ><sup>2</sup></a></p>

            <p>“[C]ollective incapacitation policies have only modest impacts on crime but can cause enormous increases in prison populations.” Campbell, § 2:3 at 44 n 13 (quoting Cohen, <em>Incapacitating Criminals</em>). Such policies are problematic in other ways:</p>

            <p>“[O]ffenders are incapacitated only as long as their confinement lasts. Thus advocates of incapacitating prison sentences must logically endorse extremely long terms at enormous taxpayer expense. This, in turn, exposes another flaw: extended incarceration causes prolonged <strong>harm to prison inmates</strong>,[<a
                    href="#fn3"
                    class="footnote-ref"
                    id="fnref3"
                    role="doc-noteref"
                ><sup>3</sup></a>] especially non-dangerous ones, as it continues to drain public funds.” </p>

            <p>Campbell, § 2:3 at 43 (footnote omitted; emphasis added).</p>

            <p>Literature from the criminology discipline is sharply critical of collective incapacitation. The theory “cannot provide any standards about how long a sentence should be.” Neubauer &amp; Fradella, <em>America’s Courts &amp; the Criminal Justice System</em> at 374. “[C]ritics argue that the costs of imprisonment typically exceed the benefits gained from preventing certain criminals from recidivating by keeping them incapacitated.” <em>Id</em>. at 375 (citing Argan A.J. Blockland &amp; Paul Nieubeerta, <em>Selectively Incapacitating Frequent Offenders: Costs &amp; Benefits of Various Penal Scenarios</em>, 23 Journal of Quantitative Criminology 327 (2007)). <em>See also</em> Avinash Singh Bhati, <em>Estimating the Number of Crimes Averted by Incapacitation: An Information Theoretic Approach</em>, 23 Journal of Quantitative Criminology 255 (2007). “Because recidivism rates decline markedly with age, lengthy prison sentences, unless they specifically target very high-rate <strong>or</strong> <strong>extremely dangerous offenders</strong>,<a
                    href="#fn4"
                    class="footnote-ref"
                    id="fnref4"
                    role="doc-noteref"
                ><sup>4</sup></a> are an inefficient approach to preventing crime by incapacitation.” National Research Council, <em>The Growth of Incarceration in the United States: Exploring Causes and Consequences at 5</em> (2014) (emphasis added). </p>

            <p>Mass incarceration is part of a social movement that began in the United States in the 1980s, in response to significant but transitory crime-rate increases. Oregon fully joined the movement in 1989, when the legislature replaced its <strong>in</strong>determinate, <strong>rehabilitation</strong>-based parole matrix system with its <strong>de</strong>terminate, <strong>retribution</strong>-based (“just desserts”) Felony Sentencing Guidelines. Subsequent to that adoption, the state adopted a series of additional mass-incarceration schemes (most significantly, Ballot Measure 11 (1994) (enrolled as Or Laws 1995, ch 1; codified at <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="137"
                    data-section="700"
                    data-subsection=""
                >ORS 137.700</a> and <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="137"
                    data-section="707"
                    data-subsection=""
                >ORS 137.707</a>)). </p>

            <div class="practice-tip">
                <span class="label">Practice Tip</span> Defense counsel should rely on criminological literature, to oppose maximized sentences based on collective incapacitation. Counsel instead should argue in support of minimizing sentences based on selective incapacitation construction. Moreover, this minimizing will increase economic efficiency and will reduce racially insidious externalities.

                <p></p>
            </div>
        </div>


        <!-- start section-2 -->
        <h1 id="oar_213_004_0001_sentencing_guidelines_grid."><strong>§ 1-2. OAR 213-004-0001 SENTENCING GUIDELINES GRID.</strong></h1>

        <p>OAR 213-004-0001 incorporates the guidelines grid:</p>

        <p>(1) The sentencing guidelines grid is a two-dimensional classification tool. The vertical axis is the Crime Seriousness Scale which classifies current crimes of conviction. The horizontal axis is the Criminal History Scale which classifies criminal histories.</p>

        <p>(2) Each grid block states the presumptive sentence for an offender whose crime of conviction and criminal history place him or her in that grid block. The solid black line dividing the grid blocks is the dispositional line. The grid is set forth as Appendix 1.</p>
        <h2 id="intent_of_provision._1"><strong>§ 1-2.1. Intent of Provision.</strong></h2>

        <p>The guidelines grid is included as an appendix to Chapter 10. In <a href="http://scholar.google.com/scholar_case?q=State+v.+Davis,+315+Or+484&amp;hl=en&amp;as_sdt=2,38&amp;as_vis=1&amp;case=17866389964872013717&amp;scilh=0">State v. Davis</a>, the Supreme Court explained:</p>

        <p>“The centerpiece of the sentencing guidelines is the 99-block Sentencing Guidelines Grid. [Citation omitted.] A ‘Crime Seriousness Scale’ serves as the vertical axis of the grid. Most felonies fall within one of the 11 categories on the Crime Seriousness Scale. A [nine-category] ‘Criminal History Scale’ serves as the horizontal axis of the grid. * * * The appropriate sentence for a given felony conviction is determined by (1) locating the appropriate category for the crime of conviction on the Crime Seriousness Scale; (2) locating the appropriate category for the convicted offender on the Criminal History Scale; and (3) locating the grid block where the two categories intersect. Each grid block contains what is called a ‘presumptive sentence[.]’”</p>

        <p>Davis, 315 Or at 487 (footnote omitted).</p>

        <p>Just as the grid is the centerpiece of the guidelines, a defendant’s grid block is the centerpiece of his sentencing. The Court of Appeals effectively has held that to provide adequate assistance at sentencing, defense counsel must be aware of the defendant’s correct grid block. <a href="http://scholar.google.com/scholar_case?q=Dejac+v.+Baldwin&amp;hl=en&amp;scisbd=2&amp;as_sdt=4,38&amp;as_vis=1&amp;case=1454590842279402617&amp;scilh=0">Dejac v. Baldwin</a>, 136 Or App 388, 391, 902 P2d 125 (1995). <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=1317309518761802252&amp;q=206+or.+app.+217&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1">Johnson v. Babcock</a>, 206 Or App 217, 136 P3d 77, <em>rev den</em>, 341 Or 450 (2006) (where defendant in legal malpractice action was sued for failing to object to 30-year sentence imposed on former client whose maximum sentence was only 80 months, and where error was not corrected (consequent to federal <em>habeas corpus</em> action) until after former client had served more than the 80 months, Court of Appeals reversed trial court’s grant of summary judgment in favor of malpractice defendant).</p>

        <p>Since their inception, the guidelines have been criticized for their effect of restraining judicial discretion in favor of adhering to predetermined grid-blocks (in the vernacular, for “treating defendants as grid-blocks”). Judge Bennett of the federal Northern District of Iowa offers suggestions that could imbue more active judicial discretion, by overcoming judges being subconsciously “anchored” to defendants’ presumptive sentencing ranges. Mark W. Bennett, <em>Confronting Cognitive ‘Anchoring Effect’ &amp; ‘Blind Spot’ Biases in Federal Sentencing: A Modest Solution for Reforming a Fundamental Flaw</em>, 104 J of Crim Law &amp; Criminology 489 (2014).</p><!-- begin section 3 -->
        <h1 id="history_of_the_guidelines."><strong>§ 1-3. HISTORY OF THE GUIDELINES.</strong></h1>

        <p>The legislature’s main reason for adopting the guidelines was to link “the current and future capacity of state and local correctional facilities, serving as an instrument to measure and forecast the need for additional correctional resources.” Kirkpatrick at 695 (citing Or Laws 1987, ch 619, § 2(2)(b) (in developing guidelines, “[f]actors relevant to appropriate sentencing * * * include effective capacity of state and local corrections facilities and other sentencing sanctions available”)). Kirkpatrick further explained that the legislature</p>

        <p>“viewed sentencing guidelines as a comprehensive and effective management tool for the state’s corrections system because the guidelines could regulate the utilization of all aspects of the system. To the extent the guidelines were keyed to available institutional capacity, proponents argued that the guidelines could reduce current prison overcrowding and prevent future overcrowding.”</p>

        <p>Id. at 697.</p>

        <p>The need to link felony sentences to prison capacity arose from the fact that “[b]etween 1977 and 1987, Oregon’s prison population more than doubled, with no proportionate increase in institutional capacity. Thus, prison overcrowding reached critical proportions.” Kirkpatrick at 697. When Oregon began work on developing the guidelines, its “prison system was operating at 125% of capacity[.]” Bogan at 470.</p>

        <p>The 1985 Legislature created the Criminal Justice Council. Or Laws 1985, ch 558, § 2. The legislature “charged the * * * Council with a variety of oversight responsibilities involving the state criminal justice system.” Kirkpatrick at 698-99. In 1987, Oregon had a “newly elected governor who “had committed himself to a substantial prison expansion program.” <em>Id.</em> at 697. Taking its lead from the governor, the 1987 “[L]egislature approved a bill authorizing the Council to develop mandatory sentencing guidelines for felony cases.” <em>Id</em>. at 699. But </p>

        <p>“[t]o avoid possible violation of the separation-of-powers provision of the state constitution, the legislature gave final authority to promulgate the rules to a subgroup of the Council, the Sentencing Guidelines Board. The Board consisted of members of the Council other than those who were members of the legislative or judicial branches of government. The legislature thus established the Board as an executive agency and gave its guidelines the status of administrative rules.”</p>
        <blockquote>

            <p><em>Id</em>. (citing Or Laws 1987, ch 619, § 4(1)).</p>
        </blockquote>

        <p>Kirkpatrick explains,</p>

        <p>“The legislature viewed sentencing guidelines as a rational mechanism to help assess the extent of immediate need for additional prison capacity as well as to forecast future demand for correctional resources. It also viewed sentencing guidelines as a comprehensive and effective management tool for the state’s correctional system because the guidelines could regulate the utilization of all aspects of the system. To the extent the guidelines were keyed to available institutional capacity, proponents argued that the guidelines could reduce prison overcrowding and prevent future overcrowding.”</p>

        <p>Id. at 697 (emphasis added).</p>

        <p>Once developed, the guidelines “would become effective on September 1, 1989, without further legislative action unless the legislature voted to modify or reject them or provided a different effective date.” <em>Id</em>. at 699 n 11. Ultimately, the legislature took further action. During its 1989 session, </p>

        <p>“some members, particularly those new legislators who had not previously had a chance to vote on the sentencing guidelines, objected to the ‘automatic enactment’ provision. Some members also felt that the guidelines should not become law without explicit legislative action. Responding to these concerns, the 1989 Oregon Legislative Assembly took action, officially approving the guidelines as promulgated by the State Sentencing Guidelines Board.”</p>

        <p><em>Id</em>. at 700.</p>

        <p>But first the legislature changed the guidelines’ effective date to November 1, 1989. Or Laws 1989, ch 790, § 6 (codified at <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="010"
                data-subsection="(1)"
            >ORS 137.010(1)</a>). In addition, the legislature instructed the board to substantively amend some of the proposed provisions in specified ways, and to do so not later than the guidelines’ effective date. Or Laws 1989, ch 790, §§ 96, 98, and 101. After mandating these changes the legislature formally approved the guidelines. Or Laws 1989, ch 790, § 87 (legislature “approves the sentencing guidelines as developed by the State Sentencing Guidelines Board”).</p>

        <p>Because the legislature affirmatively adopted the guidelines, they do not have the status of administrative rules; instead, they have “the authority of statutory law.” <a href="https://scholar.google.com/scholar_case?case=6507668465684286200&amp;q=330+or.+72&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1">State v. Langdon</a>, 330 Or 72, 74, 999 P2d 1127 (2000). <em>See also</em> <a href="http://scholar.google.com/scholar_case?q=State+v.+Dilts+II&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1&amp;case=10581544603438958486&amp;scilh=0">State v. Dilts II</a>, 337 Or 645, 651 n 6, 103 P3d 95 (2004) (“although the Oregon Criminal Justice Council created the sentencing guidelines as administrative rules, the legislature approved them in 1989, and they have the authority of statutory law”). The 2003 Legislature confirmed this by adopting the then-extant guidelines in their complete text. HB 2174 (2003) (enrolled as Or Laws 2003, ch 453).</p>
        <h2 id="guidelines_amendments."><strong>§ 1-3.1. Guidelines Amendments.</strong></h2>
        <h2 id="june_2023_update_3"><strong>June 2023 Update</strong></h2>

        <p>When it adopted the Guidelines, the legislature reserved to itself the final authority on Guidelines amendments. <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="667"
                data-subsection=""
            >ORS 137.667</a> provides this authority. It states:</p>
        <blockquote>

            <p>“(1) The Oregon Criminal Justice Commission shall review all new legislation that creates new crimes or modifies existing crimes. The commission shall adopt by rule any necessary modifications to the crime seriousness scale of the guidelines to reflect the actions of the Legislative Assembly and may classify offenses as person felonies or person misdemeanors for purposes of the rules.</p>

            <p>“(2) The commission may adopt by majority vote of all of its members who are eligible to vote amendments to the sentencing guidelines approved by section 87, chapter 790, Oregon Laws 1989. The commission shall submit the amendments to the Legislative Assembly for its approval. <strong>The amendments do not become effective unless approved by the Legislative Assembly by law.</strong> The effective date of the amendments is the date specified by the Legislative Assembly in the law approving the amendments or, if the Legislative Assembly does not specify a date, the effective date of the law approving the amendments. The Legislative Assembly may by law amend, repeal or supplement any of the amendments.</p>

            <p>“(3) The provisions of subsection (2) of this section do not apply to amendments to the guidelines adopted by the commission that:</p>

            <p>“(a) Are required to implement enactments of the Legislative Assembly;</p>

            <p>“(b) Are required under <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="421"
                    data-section="512"
                    data-subsection="(2)"
                >ORS 421.512(2)</a> or subsection (1) of this section; or</p>

            <p>“(c)(A) Renumber rules or parts of rules, change internal references to agree with statute or rule numbers, delete references to repealed statutes or rules, substitute statute references for chapter numbers, change capitalization and spelling for the purpose of uniformity or correct manifest clerical, grammatical or typographical errors; and</p>

            <p>“(B) Do not alter the sense, meaning, effect or substance of the rule amended.</p>

            <p>“(4) <strong>If a rule adopted under subsection (1) of this section is not approved by the next regular Legislative Assembly following the adoption of the rule, the rule is repealed on January 1 following adjournment sine die of that Legislative Assembly.</strong>”</p>
        </blockquote>

        <p><em>Id.</em> (emphasis added).</p>

        <p>Under <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="667"
                data-subsection="(2)"
            >ORS 137.667(2)</a>, the Criminal Justice Commission, on its own initiative, may adopt Guidelines amendments. The commission does this pursuant to the Administrative Procedure Act (APA). But under <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="667"
                data-subsection="(2)"
            >ORS 137.667(2)</a>, the commission’s amendments do not take effect pursuant to APA provisions. Instead, the commission must present its initiated amendments for legislative approval. <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="667"
                data-subsection="(2)"
            >ORS 137.667(2)</a>. The legislature then “may by law amend, repeal or supplement any of the amendments.” <em>Id.</em> But if the legislature fails to approve the amendments, the amendments are automatically “repealed on January 1 following adjournment sine die of that Legislative Assembly.” <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="667"
                data-subsection="(4)"
            >ORS 137.667(4)</a>. </p>

        <p>But in the following situations, the commission may adopt <strong>temporary</strong> rule amendments, rather than have to await legislative approval, that may take effect pursuant to APA provisions: </p>
        <blockquote>

            <p>• The amendments are necessary to effectuate legislative enactments. <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="137"
                    data-section="667"
                    data-subsection="(a)"
                >ORS 137.667(a)</a>.</p>

            <p>• The amendments address new crimes or modifications of preexisting crimes. <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="137"
                    data-section="667"
                    data-subsection="(1)"
                >ORS 137.667(1)</a> and (3)(b).</p>

            <p><em>•</em> The amendments are of form, not of substance, as described in <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="137"
                    data-section="667"
                    data-subsection="(c)"
                >ORS 137.667(c)</a>.</p>
        </blockquote>

        <p><strong>[End Update]</strong></p>

        <p>Starting in 1993, and in most every legislative session since then, the legislature approved guidelines amendments proposed by the Criminal Justice Commission (or by its predecessor agency, the Criminal Justice Council). But the legislative bills adopting the amendments usually did not set out the texts of the amended provisions, and did not reflect how the provisions were to be amended. An example is the 1995 Legislature’s Senate Bill 429 (enrolled as Or Laws 1995, ch 520). Its Section 1 merely stated, “The Sixty-eighth Legislative Assembly approves the amendments to OAR 253-03-001[.]”</p>

        <p>To the extent the bills did not set out the texts of the amended provisions, they may have been crafted in violation of Article IV, section 22, of the Oregon Constitution, which states in relevant part states: “No act shall ever be revised, or amended by mere reference to its title, but the act revised, or section amended shall be set forth, and published at full length. in adopting the amendments.” If the bills were crafted in violation of Article IV, section 22, the amendments the legislature approved, by passing the bills, are void.</p>

        <p>The Court of Appeals rejected this type of claim in <a href="https://scholar.google.com/scholar_case?case=15388383326484722255&amp;q=188+or.+app.+318&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1">State v. Norris</a>, 188 Or App 318, 72 P3d 103, rev den, 336 Or 126 (2003). The guidelines, the court held, “were promulgated as administrative rules, and administrative rules they remained, notwithstanding the legislature’s approval of them.” 188 Or App at 343. <em>But see</em> <a href="http://scholar.google.com/scholar_case?q=234+Or+App+637&amp;hl=en&amp;as_sdt=2,38&amp;case=16508867296458521816&amp;scilh=0">State v. Davilla</a>, 234 Or App 637, 230 P3d 22 (2010) (after holding that because the legislature’s delegation of authority to develop sentencing guidelines to an administrative body is constitutionally permissible, in that the legislature provided standards directing the development of the guidelines, ensured that its policy directives would be followed, and actually certified that those guidelines served its requisite standards, court relied on legislative approval of guidelines to reject the defendant’s claims that the guidelines constitute an unconstitutional delegation of authority by the legislative branch to the judicial branch, and that aggravating factors identified in the guidelines are unconstitutionally vague).</p>

        <p>Nevertheless, <em>Norris</em> provides a useful survey of Article IV, section 22 case law. Moreover, the 2003 Legislature’s HB 2174, which adopted the then-extant guidelines in their complete text, did not apply in <em>Norris</em>, because it was enacted after Norris’s sentencing. Furthermore, the Court of Appeals decided <em>Norris</em> before the Supreme Court in <a href="https://scholar.google.com/scholar_case?q=State+v.+Dilts+II&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1&amp;case=10581544603438958486&amp;scilh=0">Dilts II</a> repeated its statement from <a href="http://scholar.google.com/scholar_case?q=State+v.+Langdon&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1&amp;case=6507668465684286200&amp;scilh=0">Langdon</a>, that the guidelines have the authority of statutory law. Consequently, <em>Norris</em> may be distinguished, and the Article IV, section 22 challenge to guidelines amendments may be relitigated in cases arising after the HB 2174’s effective date. </p>

        <p>Moreover, the <em>Norris</em> court itself identified an open question under Article IV, section 22:</p>

        <p>“An interesting question arises when the legislature actually amends the guidelines by statute and then later amends by statute that earlier amendment. Arguably, the latter statutory amendment would be required to satisfy the publication requirement of Article IV, section 22. We need not address that issue in this case, however, because neither of the two rules at issue was amended by statute and then amended again.”</p>

        <p>188 Or App at 343-44.</p>

        <p>This open question became larger subsequent to passage of HB 2174, given that bill’s enactment of the then-extant guidelines provisions in their entirety.</p>

        <p><a href="http://scholar.google.com/scholar_case?q=226+Or+App+285&amp;hl=en&amp;as_sdt=2,38&amp;case=17548498041734591144&amp;scilh=0">State v. Pemberton</a>, 226 Or App 285, 203 P3d 326 (2009), suggests that the guidelines in are statutes. Relying on HB 2174, the court reiterated the principle that any guidelines provision “is part of the Oregon Sentencing Guidelines, has been approved by the legislature, and therefore has the force of statutory law.” <a href="https://scholar.google.com/scholar_case?q=226+Or+App+285&amp;hl=en&amp;as_sdt=2,38&amp;case=17548498041734591144&amp;scilh=0">Pemberton</a>, 226 Or at 288 (emphasis added; citing <em>inter alia</em> Or Laws 2003, ch 453, § 2). The court then relied on that principle as part (but not all) of its basis for holding that a specific <span class="underline">guidelines provision</span> controls over a general <span class="underline">statute</span>. <em>Id</em>. This is greatly significant, because administrative law principles hold that when an administrative rule conflicts with a statute, the statute controls. <em>E.g.</em>, <a href="https://scholar.google.com/scholar_case?case=18013360349138473557&amp;q=306+Or+134&amp;hl=en&amp;as_sdt=6,38">Cook v. Workers’ Compensation Dept.</a>, 306 Or 134, 138, 758 P2d 854 (1988). Thus, <em>Pemberton</em> provides the basis for renewed, Article IV, section 22-based attacks on guidelines amendments that were approved subsequent to the 2003 Legislature’s passage of HB 2174. <em>But see</em> <a href="http://scholar.google.com/scholar_case?case=3676236913400728150">State v. Newell</a>, 238 Or App 385, 390-92, 242 P3d 709 (2010) (rejecting state’s claim that guidelines are statutes, but doing so without considering court’s prior analysis in <a href="https://scholar.google.com/scholar_case?q=226+Or+App+285&amp;hl=en&amp;as_sdt=2,38&amp;case=17548498041734591144&amp;scilh=0">Pemberton</a> or the effects of HB 2174). <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=12315891853165138951&amp;q=359+or.+668&amp;hl=en&amp;as_sdt=6,38">State v. Althouse</a>, 359 Or 668, 670-78, 375 P3d 475 (2016) (failing to consider effects of HB 2174). </p>
        <h3 id="june_2023_update_4"><strong>June 2023 UPDATE</strong></h3>

        <p>Still, both <a href="https://scholar.google.ca/scholar_case?case=17599742142828415170&amp;q=357+or+619&amp;hl=en&amp;as_sdt=6,38">State v. Lane</a>, 357 Or 619, 355 P3d 914 (2015) and <em>State v. LaCoe</em>, 323 Or App 74, 522 P3d 18 (2022), stated that “guidelines are administrative rules, of which the legislature has expressed approval, although without formally adopting them as statutes.” <em>Lane</em>, 357 Or at 624. <em>See also LaCoe</em>, 323 Or App at 78 n 2 (“[t]he legislature has since expressed approval of those guidelines, which are codified as administrative rules, although it has not formally adopted them as statutes”). But the 2003 Legislature’s House Bill 2174 adopted in full the Felony Sentencing Guidelines, which established them as Oregon Session Laws. So they are <strong>not</strong> administrative rules; instead, they are Oregon Laws—<em>i.e.</em>, laws enacted by the legislature. Therefore, amending the Guidelines must be done in accordance with Article IV, section 22, of the Oregon Constitution. Amendments done out of compliance with Article IV, section 22 are void.</p>

        <p><strong>[End Update]</strong></p>
        <h2 id="oar_213_001_0000_notice_rule_for_rulemaking."><strong>§ 1-3.2. OAR 213-001-0000 Notice Rule for Rulemaking.</strong></h2>

        <p>OAR 213-001-0000 sets out the notice requirements for guidelines amendments:</p>

        <p>Prior to the adoption, amendment or repeal of any permanent rule, the chairperson of the Criminal Justice Commission or designee shall give notice of the proposed action:</p>

        <p>(1) In the Secretary of State’s Bulletin referred to in <a
                href="#"
                data-action="show-ors"
                data-chapter="183"
                data-section="360"
                data-subsection=""
            >ORS 183.360</a> at least 21 days prior to the effective date of the proposed rule.</p>

        <p>(2) By furnishing a copy of the notice to persons on the Criminal Justice Commission mailing list established pursuant to <a
                href="#"
                data-action="show-ors"
                data-chapter="183"
                data-section="335"
                data-subsection="(7)"
            >ORS 183.335(7)</a> at least 28 days prior to the effective date of the proposed rule.</p>

        <p>(3) By furnishing a copy of the notice to the legislators specified in <a
                href="#"
                data-action="show-ors"
                data-chapter="183"
                data-section="335"
                data-subsection="(15)"
            >ORS 183.335(15)</a> at least 49 days prior to the effective date of the proposed rule.</p>

        <p>(4) By furnishing a copy of the notice at least 28 days prior to the effective date of the proposed rule to:</p>

        <p>(a) Associated Press;</p>

        <p>(b) The Oregonian, Portland, Oregon;</p>

        <p>(c) East Oregonian, Pendleton, Oregon;</p>

        <p>(d) Statesman Journal, Salem, Oregon;</p>

        <p>(e) Medford Mail Tribune, Medford, Oregon;</p>

        <p>(f) The Register Guard, Eugene, Oregon;</p>

        <p>(g) The Bulletin, Bend, Oregon;</p>

        <p>(h) Oregon State Bar Bulletin;</p>

        <p>(i) Chief Justice, Oregon Supreme Court;</p>

        <p>(j) Chief Judge, Oregon Court of Appeals;</p>

        <p>(k) Oregon Circuit Judges Association;</p>

        <p>(l) Office of the Attorney General;</p>

        <p>(m) State Court Administrator;</p>

        <p>(n) American Civil Liberties Union;</p>

        <p>(o) Association of Oregon Counties;</p>

        <p>(p) Crime Victims United;</p>

        <p>(q) Oregon Association Chiefs of Police;</p>

        <p>(r) Oregon Community Corrections Directors Association;</p>

        <p>(s) Oregon Criminal Defense Lawyers Association;</p>

        <p>(t) Oregon District Attorneys Association;</p>

        <p>(u) Oregon State Sheriffs Association;</p>

        <p>(v) Office of Public Defense Services;</p>

        <p>(w) Rules Coordinator, Department of Corrections;</p>

        <p>(x) Association of Municipal Court Judges;</p>

        <p>(y) Justices of the Peace Association; and</p>

        <p>(z) Board of Parole and Post-Prison Supervision.</p>
        <h2 id="oar_213_001_0005_rulemaking_procedure."><strong>§ 1-3.3. OAR 213-001-0005 Rulemaking Procedure.</strong></h2>

        <p>OAR 213-001-0005 requires that guidelines amendments be promulgated in accordance with the state Administrative Procedure Act (APA):</p>

        <p>(1) All new and revised rules will be adopted in accordance with the provisions of ORS Chapter 183 and the Model Rules of Procedure adopted by the Oregon Attorney General.</p>

        <p>(2) Amendments to the following divisions take effect on January 1, 2004: OAR 213-001-0000 and 0005; 213-003-0001(14), (15), (16); 213-005-0001, 0004, and 0007; 213-011-0003; 213-017-0001, 0002, 0003, 0004, 0005, 0006, 0007, 0008, 0009, 0010, and 0011, and 213-018-0038, 0050, and 0090; and 213-019-0007, 0008, 0010, 0011, 0012, and 0015.</p>

        <p>(3) Adoption of rules OAR 213-018-0047 and 0048 take effect on January 1, 2004.</p>
        <h3 id="intent_of_provision._2"><strong>§ 1-3.3.1. Intent of Provision.</strong></h3>

        <p>OAR 213-001-0005(1) suggests that the guidelines should be accorded the force and effect of administrative rules. <em>See also</em> Kirkpatrick at 699 (the legislature gave the “guidelines the status of administrative rules”); <em>Implementation Manual</em> at 149 (although “the guidelines have been approved by the legislature, they retain their status as administrative rules”; when they “conflict with statutes, the statutory provisions control”). But as explained in Section 1-3.1, notwithstanding the Court of Appeals’ decision in <a href="http://scholar.google.com/scholar_case?q=State+v.+Norris&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1&amp;case=15388383326484722255&amp;scilh=0">Norris</a>, given the method of the guidelines’ adoption and maintenance, and the 2003 Legislature’s passage of HB 2174, the guidelines should be accorded “the authority of statutory law,” rather than mere administrative rules. <a href="https://scholar.google.com/scholar_case?case=6507668465684286200&amp;q=330+or.+72&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1">Langdon</a>, 330 Or at 74. <em>See also</em> <a href="http://scholar.google.com/scholar_case?q=State+v.+Dilts+II&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1&amp;case=10581544603438958486&amp;scilh=0">Dilts II</a>, 337 Or at 651 n 6 (the guidelines “have the authority of statutory law”); <a href="http://scholar.google.com/scholar_case?q=226+Or+App+285&amp;hl=en&amp;as_sdt=2,38&amp;case=17548498041734591144&amp;scilh=0">Pemberton</a>, 226 Or at 288 (relying on HB 2174 and the principle that the guidelines “have the authority of statutory law” to hold that a specific guidelines provision controls over a general statute). Starting with the effective date HB 2174 (2003), to the extent legislative bills that purported to amend the guidelines did not comply with the full text requirements of Article IV, section 22, the amendments may be void. </p><!-- start section 4-->
        <h1 id="oar_213_020_0001_application_of_guidelines."><strong>§ 1-4. OAR 213-020-0001 APPLICATION OF GUIDELINES.</strong></h1>

        <p>OAR 213-020-0001 states:</p>

        <p>As provided by Section 90, Chapter 790, Oregon Laws 1989, the rules of divisions 2 to 13 become effective on November 1, 1989.</p>
        <h2 id="intent_of_provision._3"><strong>§ 1-4.1 Intent of Provision.</strong></h2>

        <p>OAR 213-020-0001 must be read in conjunction with two statutes. The first is <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="669"
                data-subsection=""
            >ORS 137.669</a>, which in pertinent part states: “The guidelines adopted under <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="667"
                data-subsection=""
            >ORS 137.667</a>, together with any amendments, supplements or repealing provisions, shall control the sentences for all crimes committed after the effective date of such guidelines.” <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="669"
                data-subsection=""
            >ORS 137.669</a> (emphasis added). The second statute is <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="010"
                data-subsection="(1)"
            >ORS 137.010(1)</a>, which provides: “The statutes that define offenses impose a duty upon the court having jurisdiction to pass sentence * * * for felonies committed on or after November 1, 1989, in accordance with rules of the Oregon Criminal Justice Commission unless otherwise specifically provided by law.”</p>

        <p>As <a href="http://scholar.google.com/scholar_case?q=State+v.+Adams&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1&amp;case=2577704468307031491&amp;scilh=0">State v. Adams</a>, 315 Or 359, 361, 847 P2d 397 (1993) recognizes, under OAR 213-020-0001, <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="669"
                data-subsection=""
            >ORS 137.669</a>, and <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="010"
                data-subsection="(1)"
            >ORS 137.010(1)</a>, “[t]he sentencing guidelines apply to convictions for felonies committed on or after November 1, 1989[.]” They do not apply to misdemeanors, <a href="http://scholar.google.com/scholar_case?q=State+v.+Lyons&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1&amp;case=11413891231613562532&amp;scilh=0">State v. Lyons</a>, 124 Or App 598, 611, 863 P2d 1303 (1993); <a href="http://scholar.google.com/scholar_case?q=State+v.+Shaffer&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1&amp;case=6830255636585251605&amp;scilh=0">State v. Shaffer</a>, 121 Or App 131, 134, 854 P2d 482 (1993); <a href="https://scholar.google.com/scholar_case?case=855257803933845809&amp;q=114+or.+app.+235&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1">State v. Miller</a>, 114 Or App 235, 237, 835 P2d 131 (1992), and they “do not apply retroactively” to felonies committed before November 1, 1989. <em>Lyons</em>, 124 Or App at 611. </p>

        <p>It should be mentioned, however, that certain provisions of the guidelines replicate criminal code provisions, making the criminal code provisions applicable in misdemeanor cases. For example, the military service mitigating factor, OAR 213-008-0002(1)(a)(J), replicates <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="090"
                data-subsection="(a)"
            >ORS 137.090(a)</a>. Because the criminal code provision applies generally, <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="090"
                data-subsection="(a)"
            >ORS 137.090(a)</a> is available for use in both misdemeanor and felony cases.</p>
        <h2 id="date_of_felony_uncertain."><strong>§ 1-4.2. Date of Felony Uncertain.</strong></h2>

        <p>In a case where it has not or cannot be determined whether the crime was committed before, on, or after the guidelines’ effective date, the guidelines mandate imposition of a pre-guidelines sentence. <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="010"
                data-subsection="(2)"
            >ORS 137.010(2)</a> (“[i]f it cannot be determined whether the felony was committed on or after November 1, 1989, the defendant shall be sentenced as if the felony had been committed prior to November 1, 1989”). This convention is consistent with the general principle that amendments to the criminal code apply prospectively only. <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="035"
                data-subsection="(4)"
            >ORS 161.035(4)</a>. Moreover, the convention avoids potential <em>ex post facto</em> violations. US Const, Art I, § 10; Or Const, Art I, § 21. <em>See also</em> <a href="http://scholar.google.com/scholar_case?case=10134054068095713649&amp;q=133+S+Ct+2072&amp;hl=en&amp;as_sdt=6,38">Peugh v. United States</a>, 569 US 530, 133 S Ct 2072, 186 L Ed 2d 84 (2013) (use of advisory presumptive range, created after date of defendant’s crime and that was greater than range in effect at time of crime, violated <em>ex post facto</em> prohibition); <a href="http://scholar.google.com/scholar_case?q=Miller+v.+Florida&amp;hl=en&amp;as_sdt=3,38&amp;as_vis=1&amp;case=4932975680107030323&amp;scilh=0">Miller v. Florida</a>, 482 US 423, 107 S Ct 2446, 96 L Ed 2d 351 (1987) (retroactive application of amendment increasing presumptive sentencing range is <em>ex post facto</em>).</p>

        <p>In 1991, staff of the Criminal Justice Commission’s predecessor agency, the Criminal Justice Council, issued an advisory opinion on the application of <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="010"
                data-subsection="(2)"
            >ORS 137.010(2)</a>. The opinion addressed whether a felony committed sometime between June 1989 and July 1990 would be sentenced under the guidelines. Staff advised:</p>

        <p>“No. See <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="010"
                data-subsection="(2)"
            >ORS 137.010(2)</a>; ‘If it cannot be determined whether the felony was committed on or after November 1, 1989, the defendant shall be sentenced as if the felony had been committed prior to November 1, 1989.’ A district attorney could avoid the problem by drafting an indictment with dates pre or post-guidelines depending on how the sentence is to be structured. (Advisory #3, September 23, 1991).”</p>

        <p><em>Supplement Sentencing Guidelines Implementation Manual</em> 1 (1992) (hereafter <em>Supplement Manual</em>).</p>
        <h2 id="oar_213_009_0002_defendants_found_guilty_except_for_insanity."><strong>§ 1-4.3. OAR 213-009-0002 Defendants Found Guilty Except for Insanity.</strong></h2>

        <p>OAR 213-009-0002 states:</p>

        <p>The rules of the Criminal Justice Commission shall not apply to any offender found guilty except for insanity pursuant to <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="295"
                data-subsection=""
            >ORS 161.295</a>. The disposition of such an offender shall be as provided by the provisions of <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="295"
                data-subsection=""
            >ORS 161.295</a> to 161.400.</p>
        <h3 id="intent_of_provision._4"><strong>§ 1-4.3.1 Intent of Provision.</strong></h3>

        <p>The commentary to this provision states: “The State Sentencing Guidelines Board expressly provided that the sentencing guidelines do not apply to individuals who have been found guilty except for insanity pursuant to <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="295"
                data-subsection=""
            >ORS 161.295</a>-.403. This exception to the guidelines system is recognized by OAR [213-009-0002].” <em>Implementation Manual</em> at 152.</p>

        <p>A 1990 Staff Advisory further explained that the guidelines do not apply to defendants found guilty except insane. In relevant part the advisory states:</p>

        <p>“While the statutory language at <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="319"
                data-subsection=""
            >ORS 161.319</a>, relating to verdict and judgment on these cases, has changed over the years from ‘not guilty by reason of insanity’ to the current ‘guilty except for insanity,’ these judgments are not considered ‘convictions.’ The guidelines criminal history scale scores ‘convictions.’ The official commentary to [OAR 213-004-0006], Criminal History Scale, provides that ‘a conviction . . . should be considered to have occurred upon the pronouncement of sentence in open court.’[] (Page 51, 1989 <em>Guidelines Implementation Manual</em>) PSRB offenders are not ‘sentenced,’ but are ordered to be placed under the jurisdiction of the PSRB pursuant to <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="327"
                data-subsection=""
            >ORS 161.327</a>. (Advisory #1, May 18, 1990).”</p>

        <p><em>Supplement Manual</em> at 8.</p>

        <p>In <a href="http://scholar.google.com/scholar_case?q=State+v.+Nelson,+191+Or+App+133&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1&amp;case=3154429980886221734&amp;scil">State v. Nelson</a>, 191 Or App 133, 80 P3d 543 (2003) (<em>per curiam</em>), the Court of Appeals expressly held that the guidelines do not apply in the disposition of persons found guilty except insane. <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=6361331353826103394&amp;q=195+or.+app.+357&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1">State v. Saunders</a>, 195 Or App 357, 97 P3d 1261 (2004) (in prosecution for felony public indecency, trial court properly excluded evidence of defendant’s prior adjudication of guilty except for insanity of public indecency). </p>

        <p>Furthermore, a person found guilty except insane does not receive a “sentence,” <em>per se</em>. Instead, the person is placed under the jurisdiction of the Psychiatric Security Review Board (PSRB) for a period of time “equal to the maximum sentence provided by statute for the crime for which the person was found guilty except for insanity.” <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="327"
                data-subsection="(1)"
            >ORS 161.327(1)</a>. This leads to a secondary issue: May PSRB terms run consecutively to each other and to criminal sentences. In <a href="http://scholar.google.com/scholar_case?q=State+v.+Brooks&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1&amp;case=11199153305058522411&amp;scilh=0">State v. Brooks</a>, 187 Or App 388, 67 P3d 426, <em>rev den</em>, 335 Or 578 (2003), the court held that to the same extent <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="123"
                data-subsection=""
            >ORS 137.123</a> authorizes trial courts to impose consecutive sentences, it authorizes trial courts to impose consecutive PSRB terms.</p>
        <h2 id="juvenile_defendants."><strong>§ 1-4.4. Juvenile Defendants.</strong></h2>

        <p>The guidelines do not explicitly address the question of whether juveniles remanded to adult court and convicted of felonies are sentenced under the guidelines. But they do apply to such defendants. <a href="http://scholar.google.com/scholar_case?q=State+v.+Davilla&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1&amp;case=9740954150643055747&amp;scilh=0">State v. Davilla</a>, 157 Or App 639, 645, 972 P2d 902 (1998), <em>rev den</em>, 334 Or 76 (2002). On the other hand, the guidelines do not apply to juveniles over whom the juvenile court retains jurisdiction. <a href="https://scholar.google.com/scholar_case?case=13727333495035540910&amp;q=168+or.+app.+81&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1">State ex rel Juvenile Dept. v. Johnson</a>, 168 Or App 81, 7 P3d 529 (2000).</p><!-- start section 5 -->
        <h1 id="oar_213_003_0001_definitions."><strong>§ 1-5. OAR 213-003-0001 DEFINITIONS.</strong></h1>

        <p>OAR 213-003-0001 sets out the guidelines’ definitions:</p>

        <p><em>As used in these rules:</em></p>

        <p>(1) “Bench probation” means a probationary sentence, which directs the probationer to remain under the supervision and control of the sentencing judge.</p>

        <p>(2) “Board” means the State Board of Parole and Post-Prison Supervision.</p>

        <p>(3) “Correctional supervision status” means any form of incarcerative or non-incarcerative supervision which is served by an offender as part of a sentence for a criminal conviction.</p>

        <p>(4) “Department” means the Department of Corrections.</p>

        <p>(5) “Departure” means a sentence, except an optional probationary sentence, which is inconsistent with the presumptive sentence for an offender.</p>

        <p>(6) “Dispositional departure” means a sentence which imposes probation when the presumptive sentence is prison or prison when the presumptive sentence is probation. An optional probationary sentence is not a dispositional departure.</p>

        <p>(7) “Dispositional line” means the solid black line on the Sentencing Guidelines Grid (Appendix 1) which separates the grid blocks in which the presumptive sentence is a term of imprisonment and post-prison supervision from the grid blocks in which the presumptive sentence is probation which may include local custodial sanctions.</p>

        <p>(8) “Durational departure” means a sentence which is inconsistent with the presumptive sentence as to term of incarceration, term of supervised probation or number of sanction units which may be imposed as a condition of probation.</p>

        <p>(9) “Grid” means the Sentencing Guidelines Grid set forth as Appendix 1.</p>

        <p>(10) “Grid block” means a box on the grid formed by the intersection of the crime seriousness ranking of a current crime of conviction and an offender’s criminal history classification.</p>

        <p>(11) “Juvenile adjudication” means a formal adjudication or finding by a court that the juvenile has committed an act, which, if committed by an adult, would be punishable as a felony.</p>

        <p>(12) “Non-person felonies” are any felonies not defined as a person felony in section (14) of this rule.</p>

        <p>(13) “Optional probationary sentence” means any probationary sentence imposed pursuant to OAR 213-005-0006.</p>

        <p>(14) “Person felonies” are in numerical statutory order: <a
                href="#"
                data-action="show-ors"
                data-chapter="97"
                data-section="981"
                data-subsection=""
            >ORS 97.981</a> Purchase or Sale of a Body Part for Transplantation or Therapy; <a
                href="#"
                data-action="show-ors"
                data-chapter="97"
                data-section="982"
                data-subsection=""
            >ORS 97.982</a> Alteration of a Document of Gift; <a
                href="#"
                data-action="show-ors"
                data-chapter="162"
                data-section="165"
                data-subsection=""
            >ORS 162.165</a> Escape I; <a
                href="#"
                data-action="show-ors"
                data-chapter="162"
                data-section="185"
                data-subsection=""
            >ORS 162.185</a> Supplying Contraband as defined in Crime Categories 6 and 7 (OAR 213-018-0070(1) and (2)); <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="095"
                data-subsection=""
            >ORS 163.095</a> Aggravated Murder; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="115"
                data-subsection=""
            >ORS 163.115</a> Murder; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="115"
                data-subsection=""
            >ORS 163.115</a> Felony Murder; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="118"
                data-subsection=""
            >ORS 163.118</a> Manslaughter I; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="125"
                data-subsection=""
            >ORS 163.125</a> Manslaughter II; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="145"
                data-subsection=""
            >ORS 163.145</a> Negligent Homicide; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="149"
                data-subsection=""
            >ORS 163.149</a> Aggravated Vehicular Homicide; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="160"
                data-subsection="(3)"
            >ORS 163.160(3)</a> Felony Assault; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="165"
                data-subsection=""
            >ORS 163.165</a> Assault III; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="175"
                data-subsection=""
            >ORS 163.175</a> Assault II; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="185"
                data-subsection=""
            >ORS 163.185</a> Assault I; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="187"
                data-subsection="(4)"
            >ORS 163.187(4)</a> Felony Strangulation; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="192"
                data-subsection=""
            >ORS 163.192</a> Endangering Person Protected by FAPA Order; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="196"
                data-subsection=""
            >ORS 163.196</a> Aggravated Driving While Suspended or Revoked; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="205"
                data-subsection=""
            >ORS 163.205</a> Criminal Mistreatment I; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="207"
                data-subsection=""
            >ORS 163.207</a> Female Genital Mutilation; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="208"
                data-subsection=""
            >ORS 163.208</a> Assaulting a Public Safety Officer; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="213"
                data-subsection=""
            >ORS 163.213</a> Use of Stun Gun, Tear Gas, Mace I; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="225"
                data-subsection=""
            >ORS 163.225</a> Kidnapping II; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="235"
                data-subsection=""
            >ORS 163.235</a> Kidnapping I; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="263"
                data-subsection=""
            >ORS 163.263</a> Subjecting Another Person to Involuntary Servitude II; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="264"
                data-subsection=""
            >ORS 163.264</a> Subjecting Another Person to Involuntary Servitude I; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="266"
                data-subsection=""
            >ORS 163.266</a> Trafficking in Persons; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="275"
                data-subsection=""
            >ORS 163.275</a> Coercion as defined in Crime Category 7 (OAR 213-018-0035(1)); <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="355"
                data-subsection=""
            >ORS 163.355</a> Rape III; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="365"
                data-subsection=""
            >ORS 163.365</a> Rape II; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="375"
                data-subsection=""
            >ORS 163.375</a> Rape I; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="385"
                data-subsection=""
            >ORS 163.385</a> Sodomy III; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="395"
                data-subsection=""
            >ORS 163.395</a> Sodomy II; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="405"
                data-subsection=""
            >ORS 163.405</a> Sodomy I; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="408"
                data-subsection=""
            >ORS 163.408</a> Sexual Penetration II; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="411"
                data-subsection=""
            >ORS 163.411</a> Sexual Penetration I; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="413"
                data-subsection=""
            >ORS 163.413</a> Purchasing Sex With a Minor; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="425"
                data-subsection=""
            >ORS 163.425</a> Sexual Abuse II; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="427"
                data-subsection=""
            >ORS 163.427</a> Sexual Abuse I; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="432"
                data-subsection=""
            >ORS 163.432</a> Online Sexual Corruption of a Child II; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="433"
                data-subsection=""
            >ORS 163.433</a> Online Sexual Corruption of a Child I; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="452"
                data-subsection=""
            >ORS 163.452</a> Custodial Sexual Misconduct in the First Degree; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="465"
                data-subsection=""
            >ORS 163.465</a> Felony Public Indecency; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="472"
                data-subsection=""
            >ORS 163.472</a> Unlawful Dissemination of Intimate Image; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="479"
                data-subsection=""
            >ORS 163.479</a> Unlawful Contact with a Child; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="525"
                data-subsection=""
            >ORS 163.525</a> Incest; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="535"
                data-subsection=""
            >ORS 163.535</a> Abandon Child; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="537"
                data-subsection=""
            >ORS 163.537</a> Buying/Selling Custody of a Minor; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="547"
                data-subsection=""
            >ORS 163.547</a> Child Neglect I; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="670"
                data-subsection=""
            >ORS 163.670</a> Using Child In Display of Sexual Conduct; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="684"
                data-subsection=""
            >ORS 163.684</a> Encouraging Child Sex Abuse I; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="686"
                data-subsection=""
            >ORS 163.686</a> Encouraging Child Sex Abuse II; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="688"
                data-subsection=""
            >ORS 163.688</a>, Possession of Material Depicting Sexually Explicit Conduct of Child I; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="689"
                data-subsection=""
            >ORS 163.689</a>, Possession of Material Depicting Sexually Explicit Conduct of Child II; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="701"
                data-subsection=""
            >ORS 163.701</a> Invasion of Personal Privacy I; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="732"
                data-subsection=""
            >ORS 163.732</a> Stalking; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="750"
                data-subsection=""
            >ORS 163.750</a> Violation of Court’s Stalking Order; <a
                href="#"
                data-action="show-ors"
                data-chapter="164"
                data-section="075"
                data-subsection=""
            >ORS 164.075</a> Extortion as defined in Crime Category 7 (OAR 213-018-0075(1)); <a
                href="#"
                data-action="show-ors"
                data-chapter="164"
                data-section="225"
                data-subsection=""
            >ORS 164.225</a> Burglary I as defined in Crime Categories 8 and 9 (OAR 213-018-0025(1) and (2)); <a
                href="#"
                data-action="show-ors"
                data-chapter="164"
                data-section="325"
                data-subsection=""
            >ORS 164.325</a> Arson I; <a
                href="#"
                data-action="show-ors"
                data-chapter="164"
                data-section="342"
                data-subsection=""
            >ORS 164.342</a> Arson Incident to the Manufacture of a Controlled Substance I; <a
                href="#"
                data-action="show-ors"
                data-chapter="164"
                data-section="377"
                data-subsection="(c)"
            >ORS 164.377(c)</a> Computer Crime—Theft of an Intimate Image; <a
                href="#"
                data-action="show-ors"
                data-chapter="164"
                data-section="395"
                data-subsection=""
            >ORS 164.395</a> Robbery III; <a
                href="#"
                data-action="show-ors"
                data-chapter="164"
                data-section="405"
                data-subsection=""
            >ORS 164.405</a> Robbery II; <a
                href="#"
                data-action="show-ors"
                data-chapter="164"
                data-section="415"
                data-subsection=""
            >ORS 164.415</a> Robbery I; <a
                href="#"
                data-action="show-ors"
                data-chapter="164"
                data-section="886"
                data-subsection="(3)"
            >ORS 164.886(3)</a> Tree Spiking (Injury); <a
                href="#"
                data-action="show-ors"
                data-chapter="166"
                data-section="070"
                data-subsection=""
            >ORS 166.070</a> Aggravated Harassment; <a
                href="#"
                data-action="show-ors"
                data-chapter="166"
                data-section="087"
                data-subsection=""
            >ORS 166.087</a> Abuse of Corpse I; <a
                href="#"
                data-action="show-ors"
                data-chapter="166"
                data-section="165"
                data-subsection=""
            >ORS 166.165</a> Intimidation I; <a
                href="#"
                data-action="show-ors"
                data-chapter="166"
                data-section="220"
                data-subsection=""
            >ORS 166.220</a> Unlawful Use of a Weapon; <a
                href="#"
                data-action="show-ors"
                data-chapter="166"
                data-section="275"
                data-subsection=""
            >ORS 166.275</a> Inmate In Possession of Weapon; <a
                href="#"
                data-action="show-ors"
                data-chapter="166"
                data-section="385"
                data-subsection="(3)"
            >ORS 166.385(3)</a> Felony Possession of a Hoax Destructive Device; <a
                href="#"
                data-action="show-ors"
                data-chapter="166"
                data-section="643"
                data-subsection=""
            >ORS 166.643</a> Unlawful Possession of Soft Body Armor as defined in Crime Category 6 (OAR 213-018-0090(1)); <a
                href="#"
                data-action="show-ors"
                data-chapter="167"
                data-section="012"
                data-subsection=""
            >ORS 167.012</a> Promoting Prostitution; <a
                href="#"
                data-action="show-ors"
                data-chapter="167"
                data-section="017"
                data-subsection=""
            >ORS 167.017</a> Compelling Prostitution; <a
                href="#"
                data-action="show-ors"
                data-chapter="167"
                data-section="057"
                data-subsection=""
            >ORS 167.057</a> Luring a Minor; <a
                href="#"
                data-action="show-ors"
                data-chapter="167"
                data-section="320"
                data-subsection="(4)"
            >ORS 167.320(4)</a> Felony Animal Abuse I; <a
                href="#"
                data-action="show-ors"
                data-chapter="167"
                data-section="322"
                data-subsection=""
            >ORS 167.322</a> Aggravated Animal Abuse I; <a
                href="#"
                data-action="show-ors"
                data-chapter="468"
                data-section="951"
                data-subsection=""
            >ORS 468.951</a> Environmental Endangerment; <a
                href="#"
                data-action="show-ors"
                data-chapter="475"
                data-section="752"
                data-subsection="(a)"
            >ORS 475.752(a)</a> Manufacturing or Delivering a Schedule IV Controlled Substance Thereby Causing Death to a Person; <a
                href="#"
                data-action="show-ors"
                data-chapter="475"
                data-section="908"
                data-subsection=""
            >ORS 475.908</a> Causing Another to Ingest a Controlled Substance as defined in Crime Categories 8 and 9 (OAR 213-019-0007 and 0008); <a
                href="#"
                data-action="show-ors"
                data-chapter="475"
                data-section="910"
                data-subsection=""
            >ORS 475.910</a> Unlawful Administration of a Controlled Substance as defined in Crime Categories 5, 8, and 9 (OAR 213-019-0007, -0008, and -0011); ORS 475B.359 Arson Incident to Manufacture of Cannabinoid Extract I; ORS 475B. 367 Causing Another Person to Ingest Marijuana; ORS 475B.371 Administration to Another Person Under 18 Years of Age; <a
                href="#"
                data-action="show-ors"
                data-chapter="609"
                data-section="990"
                data-subsection="(b)"
            >ORS 609.990(b)</a> Maintaining Dangerous Dog; <a
                href="#"
                data-action="show-ors"
                data-chapter="811"
                data-section="705"
                data-subsection=""
            >ORS 811.705</a> Hit and Run Vehicle (Injury); <a
                href="#"
                data-action="show-ors"
                data-chapter="813"
                data-section="010"
                data-subsection="(5)"
            >ORS 813.010(5)</a> Felony Driving Under the Influence of Intoxicants (as provided in OAR 213-004-0009); <a
                href="#"
                data-action="show-ors"
                data-chapter="830"
                data-section="475"
                data-subsection="(2)"
            >ORS 830.475(2)</a> Hit and Run Boat; <a
                href="#"
                data-action="show-ors"
                data-chapter="837"
                data-section="365"
                data-subsection="(b)"
            >ORS 837.365(b)</a> and (c) Unlawful Operation of Weaponized Unmanned Aircraft System; and attempts or solicitations to commit any Class A or Class B person felonies as defined herein.</p>
        <h3 id="june_2023_update_5"><strong>June 2023 Update</strong></h3>

        <p>Senate Bill 186 (enrolled as Oregon Laws 2021, chapter 76) made permanent a temporary rule the Criminal Justice Commission approved in 2020. The amendment added<em>first- and second-degree murder</em>, and changed the name of first- and second degree intimidation to<em>first- and second-degree bias crime</em>, to OAR 213-003-0001(14)’s definition of “person crimes.”''</p>

        <p><strong>[End Update]</strong></p>

        <p>(15) “Person Class A misdemeanors” are in numerical statutory order: <a
                href="#"
                data-action="show-ors"
                data-chapter="162"
                data-section="315"
                data-subsection=""
            >ORS 162.315</a> Resisting Arrest; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="160"
                data-subsection=""
            >ORS 163.160</a> Assault IV; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="187"
                data-subsection=""
            >ORS 163.187</a> Strangulation; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="190"
                data-subsection=""
            >ORS 163.190</a> Menacing; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="195"
                data-subsection=""
            >ORS 163.195</a> Recklessly Endanger Another; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="200"
                data-subsection=""
            >ORS 163.200</a> Criminal Mistreatment II; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="212"
                data-subsection=""
            >ORS 163.212</a> Use of Stun Gun, Tear Gas, Mace II; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="415"
                data-subsection=""
            >ORS 163.415</a> Sexual Abuse III; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="454"
                data-subsection=""
            >ORS 163.454</a> Custodial Sexual Misconduct in the Second Degree; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="465"
                data-subsection=""
            >ORS 163.465</a> Public Indecency; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="467"
                data-subsection=""
            >ORS 163.467</a> Private Indecency; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="472"
                data-subsection=""
            >ORS 163.472</a> Unlawful Dissemination of Intimate Image; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="476"
                data-subsection=""
            >ORS 163.476</a> Unlawfully Being in a Location Where Children Regularly Congregate; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="545"
                data-subsection=""
            >ORS 163.545</a> Child Neglect II; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="575"
                data-subsection=""
            >ORS 163.575</a> Endanger Welfare of Minor; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="687"
                data-subsection=""
            >ORS 163.687</a> Encouraging Child Sex Abuse III; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="700"
                data-subsection=""
            >ORS 163.700</a> Invasion of Personal Privacy II; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="709"
                data-subsection=""
            >ORS 163.709</a> Unlawfully Directing a Laser Pointer; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="732"
                data-subsection="(1)"
            >ORS 163.732(1)</a> Stalking; <a
                href="#"
                data-action="show-ors"
                data-chapter="163"
                data-section="750"
                data-subsection="(1)"
            >ORS 163.750(1)</a> Violating Court’s Stalking Order; <a
                href="#"
                data-action="show-ors"
                data-chapter="165"
                data-section="572"
                data-subsection=""
            >ORS 165.572</a> Interfering with Making a Police Report; <a
                href="#"
                data-action="show-ors"
                data-chapter="166"
                data-section="065"
                data-subsection="(4)"
            >ORS 166.065(4)</a> Harassment/Offensive Sexual Contact; <a
                href="#"
                data-action="show-ors"
                data-chapter="166"
                data-section="155"
                data-subsection=""
            >ORS 166.155</a> Intimidation II; <a
                href="#"
                data-action="show-ors"
                data-chapter="166"
                data-section="385"
                data-subsection="(2)"
            >ORS 166.385(2)</a> Misdemeanor Possession of a Hoax Destructive Device; <a
                href="#"
                data-action="show-ors"
                data-chapter="167"
                data-section="054"
                data-subsection=""
            >ORS 167.054</a> Furnishing Sexually Explicit Material to a Child; <a
                href="#"
                data-action="show-ors"
                data-chapter="475"
                data-section="910"
                data-subsection="(4)"
            >ORS 475.910(4)</a> Unlawful Administration of a Controlled Substance; <a
                href="#"
                data-action="show-ors"
                data-chapter="609"
                data-section="990"
                data-subsection="(a)"
            >ORS 609.990(a)</a> Maintaining Dangerous Dog; <a
                href="#"
                data-action="show-ors"
                data-chapter="811"
                data-section="060"
                data-subsection=""
            >ORS 811.060</a> Vehicular Assault; <a
                href="#"
                data-action="show-ors"
                data-chapter="813"
                data-section="010"
                data-subsection=""
            >ORS 813.010</a>, Driving Under the Influence of Intoxicants (as provided in OAR 213-004-0009); SB 1567 (2016) Criminal Impersonation; and attempts or solicitations to commit any Class C person felonies as defined in section (14) of this rule.</p>
        <h2 id="june_2023_update_6"><strong>June 2023 Update</strong></h2>

        <p>SB 186 made permanent a temporary rule the Criminal Justice Commission approved in 2020. The amendment added<em>unlawful interference with aircraft</em>to OAR 213-003-0001(15)’s definition of “misdemeanor crimes.”''</p>

        <p><strong>[End Update]</strong></p>

        <p>(16) “Presumptive sentence” means the sentence provided in a grid block for an offender classified in that grid block by the combined effect of the crime seriousness ranking of the current crime of conviction and the offender’s criminal history or a sentence designated as a presumptive sentence by statute.</p>

        <p>(17) “Primary offense” means the offense of conviction with the highest crime seriousness ranking. If more than one offense of conviction is classified in the same crime category, the sentencing judge shall designate which offense is the primary offense.</p>

        <p>(18) “Supervisory agent” means the local community corrections agency responsible for supervising the offender.</p>

        <p>(19) “Supervisory authority” means the state and local corrections agency or official designated in each county by that county’s Board of County Commissioners or county court to operate corrections supervision services, custodial facilities or both.</p>

        <p>(20) “Straight jail” means a sentence of jail imposed instead of a presumptive probationary sentence that is not followed by a term of post-prison supervision defined in OAR 213-005-0002.</p>
        <h2 id="intent_of_provision._5"><strong>§ 1-5.1. Intent of Provision.</strong></h2>

        <p>The guidelines’ commentary explains that “the State Sentencing Guidelines Board [adopted the definitions of OAR 213-003-0001] to clarify the appropriate use of these terms within the sentencing guidelines system.” <em>Implementation Manual</em> at 203. The definitions should be considered part of the context of provisions using defined terms, so should be used in the first level of analysis in construing the provisions. <a href="http://scholar.google.com/scholar_case?q=317+Or+606&amp;hl=en&amp;as_sdt=2,38&amp;case=5450306107264830888&amp;scilh=0">PGE v. Bureau of Labor &amp; Industries</a>, 317 Or 606, 611, 859 P2d 1143 (1993). For example, in <a href="https://scholar.google.com/scholar_case?case=5236420131704969440&amp;q=357+Or+145&amp;hl=en&amp;as_sdt=6,38">State v. Lykins</a>, 357 Or 145, 154, 163, 348 P3d 231 (2015), the court construed Aggravating Factor B, particularly vulnerable victim, OAR 213-008-0002(1)(b)(B). The court relied on the fact that OAR 213-003-0001(14) does not include witness tampering, <a
                href="#"
                data-action="show-ors"
                data-chapter="162"
                data-section="285"
                data-subsection=""
            >ORS 162.285</a>, in its definition of “person felonies,” to conclude that the case’s witness was not a “victim” for purposes of Factor B.</p><!-- start section 6 -->
        <h1 id="rules_of_construction."><strong>§ 1-6. RULES OF CONSTRUCTION.</strong></h1>

        <p>Regardless of whether the guidelines should be accorded the force and effect of statutes or of administrative rules, <em>see</em> Section 1-3.1, the judiciary construes them in accordance with the <em>PGE</em> template, 317 Or at 612 n 4 (principles of statutory construction apply to construction of administrative rules), as modified by the 2001 Legislature’s House Bill 3677 (codified at <a
                href="#"
                data-action="show-ors"
                data-chapter="174"
                data-section="020"
                data-subsection=""
            >ORS 174.020</a>). Under this modified template, the judicial function is to construe the statute in accordance with the legislative intent. <em>PGE</em>, 317 Or at 610. But to do this, the court looks first not only to the text and context of the statute, but also to its legislative history. <a href="http://scholar.google.com/scholar_case?q=346+Or+160&amp;hl=en&amp;as_sdt=2,38&amp;case=8192627478814485188&amp;sci">State v. Gaines</a>, 346 Or 160, 171-72, 206 P3d 1043 (2009). <em>See also</em> <a
                href="#"
                data-action="show-ors"
                data-chapter="174"
                data-section="020"
                data-subsection="(3)"
            >ORS 174.020(3)</a> (the court “shall give the weight to the legislative history that the court considers to be appropriate”).</p>

        <p>In examining the provision’s context, the court may rely on maxims of construction “bear[ing] directly on how to read the text.” <em>PGE</em>, 317 Or at 611. But the court may not rely on maxims of construction that do not “bear directly on how to read the text,” unless the court determines that the statute’s text, context, and legislative history leave the statute ambiguous. <a href="http://scholar.google.com/scholar_case?q=346+Or+160&amp;hl=en&amp;as_sdt=2,38&amp;case=8192627478814485188&amp;scilh=0">Gaines</a>, 346 Or at 171-72.</p>

        <p>The appellate courts seemingly have recognized the guidelines’ principles and purposes as part of the guidelines’ context, for they have relied on the principles and purposes to construe guidelines provisions. For example, the Court of Appeals has held that it may resolve an ambiguous provision in favor of the construction which best “provides [the public] protection from personal assault[.]” <a href="http://scholar.google.com/scholar_case?q=State+v.+Guthrie+1992&amp;hl=en&amp;scisbd=2&amp;as_sdt=4,38&amp;as_vis=1&amp;case=8432203935641603254&amp;scilh">Guthrie</a>, 112 Or App at 105-006. Recognizing the legislative intent that the guidelines be used to avoid prison overcrowding, the Court of Appeals has held that it may resolve an ambiguity in favor of the construction which best “comports with the policy underlying the guidelines to allocate punishment ‘within the limits of correctional resources[.]” <a href="http://scholar.google.com/scholar_case?q=State+v.+Davis,+315+Or+484&amp;hl=en&amp;as_sdt=2,38&amp;as_vis=1&amp;case=17866389964872013717&amp;scilh=0">Davis</a>, 113 Or App at 121 (quoting OAR 213-002-0001(1)). <em>See also</em> <a href="http://scholar.google.com/scholar_case?q=State+v.+Johnson+1994&amp;hl=en&amp;scisbd=2&amp;as_sdt=4,38&amp;as_ylo=1993&amp;as_yhi=1995&amp;as_vis=1&amp;case=1466781010388466555&amp;scilh=0">Johnson</a>, 125 Or App at 659 (following <em>Davis</em>); <a href="https://scholar.google.com/scholar_case?case=11291437116060245907&amp;q=State+v.+Haydon&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1">Haydon</a>, 116 Or App at 354-55 (same); <a href="https://scholar.google.com/scholar_case?case=5688442103556921038&amp;q=State+v.+Seals&amp;hl=en&amp;as_sdt=4,38">Seals</a>, 113 Or App at 704 (same).</p>

        <p>If Oregon models a statute after another state’s statute, reported decisions construing the other state’s statute issued before Oregon adopted its law are persuasive in interpreting the Oregon law. <a href="http://scholar.google.com/scholar_case?q=Joseph+v.+Lowery&amp;hl=en&amp;as_sdt=2,38&amp;case=11616111750373454884&amp;scilh=0">Joseph v. Lowery</a>, 261 Or 545, 550, 495 P2d 273 (1972). This would appear to be among the maxims which “bear directly on how to read the text” of a provision, so should be used in the contextual level of analysis. <a href="http://scholar.google.com/scholar_case?q=317+Or+606&amp;hl=en&amp;as_sdt=2,38&amp;case=5450306107264830888&amp;scilh=0">PGE</a>, 317 Or at 611. Thus, constructions of another state’s guidelines provision may “provide guidance in some instances,” but not when the other state’s provision did not serve as a model for an ambiguous Oregon provision. <a href="https://scholar.google.com/scholar_case?case=6895831086547302220&amp;q=113+or.+app.+134&amp;hl=en&amp;as_sdt=6,38">State v. Kennedy</a>, 113 Or App 134, 137, 831 P2d 712 (1992). For example, because certain of the guidelines’ departure-sentence provisions were modeled after the Washington guidelines’ provisions, “Washington * * * guidelines sentencing appellate decisions [may] function as guidance in interpreting the Oregon provision.” <a href="http://scholar.google.com/scholar_case?case=14793830931348502728&amp;q=111+Or+App+147&amp;hl=en&amp;as_sdt=2,38">Wilson</a>, 111 Or App at 151 n 5 (citing Washington cases).</p>
        <h2 id="effect_of_guidelines_commentary_and_staff_advisories."><strong>§ 1-6.1. Effect of Guidelines’ Commentary and Staff Advisories.</strong></h2>

        <p>On several occasions, the appellate courts have grappled with the question of what effect to give commentary found in the <em>Implementation Manual</em>, or commentary and staff advisories found in the <em>Supplement Manual</em>. Although the courts have not identified where the commentary and advisories fit into the constructional template, they would appear to be part of the guidelines’ legislative history. <a href="https://scholar.google.com/scholar_case?case=8538935301342032864&amp;q=325+Or.+370&amp;hl=en&amp;as_sdt=6,38">Cf. State v. Chakerian</a>, 325 Or 370, 378-79, 938 P2d 756 (1997) (commentary to Criminal Code is part of code’s legislative history). As the Supreme Court has explained: </p>

        <p>“Authored by the Oregon Criminal Justice Council, the <em>Oregon Sentencing Guidelines Implementation Manual is a ‘training tool’ and ‘reference manual’ that ‘describes for criminal justice professionals the</em> proper application of the guidelines.’ <em>Guidelines Manual</em>, supra, at 1. The <em>Guidelines Manual</em> also contains the State Sentencing Guidelines Board’s official commentary to each of the rules comprising the guidelines.”</p>

        <p><a href="http://scholar.google.com/scholar_case?q=315+Or+484&amp;hl=en&amp;as_sdt=2,38&amp;case=17866389964872013717&amp;scilh=0">Davis</a>, 315 Or at 493 (emphasis added). <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=5236420131704969440&amp;q=357+Or+145&amp;">Lykins</a>, 357 Or at 155 (explaining that the <em>Implementation Manual</em> “contains the official commentary to the Guidelines and provides important legislative history to aid our interpretation of the relevant Guidelines provisions”).</p>

        <p>In its first guidelines decision the Court of Appeals rejected certain commentary as non-authoritative. <a href="http://scholar.google.com/scholar_case?q=State+v.+Moeller&amp;hl=en&amp;as_sdt=4,38&amp;case=15844362449789357852&amp;scilh=0">State v. Moeller</a>, 105 Or App 434, 806 P2d 130, <em>rev dismissed</em>, 312 Or 76 (1991). <em>See also</em> <a href="http://scholar.goog">State v. Anderson</a>, 111 Or App 294, 297, 826 P2d 66 (1992) (rejecting commentary’s interpretation of a guidelines provision); <a href="https://scholar.google.com/scholar_case?case=10419599312741548509&amp;q=110+or.+app.+426&amp;hl=en&amp;as_sdt=4,38">State v. Holliday</a>, 110 Or App 426, 430, 824 P2d 1148, <em>rev den</em>, 313 Or 211 (1992) (same). The <em>Moeller</em> court explained that one of the reasons it was free to reject the commentary was that “[t]he commentary does not have, or purport to have, authoritative status.” 105 Or App at 440 n 4. <em>See also</em> <a href="http://scholar.google.com/scholar_case?q=State+v.+Golden&amp;hl=en&amp;as_sdt=4,38&amp;case=14890302967868373199&amp;scilh=0">State v. Golden</a>, 112 Or App 302, 306, 829 P2d 88 (1992) (same). Similarly, in <a href="http://scholar.google.com/scholar_case?q=State+v.+Bucholz&amp;hl=en&amp;as_sdt=4,38&amp;case=11305463448088777337&amp;scilh=0">State v. Bucholz</a>, 317 Or 309, 855 P2d 1100 (1993), the Supreme Court rejected a staff advisory. The court explained that the advisory was written after the guidelines’ adoption, so was not determinative of legislative intent. 317 Or at 318-19.</p>

        <p>But the Court of Appeals also has deemed commentary persuasive if “it accurately reflects the legislative intent.” <a href="http://scholar.google.com/scholar_case?q=State+v.+Seals&amp;hl=en&amp;scisbd=2&amp;as_sdt=4,38&amp;as_vis=1&amp;case=5688442103556921038&amp;scilh=0">Seals</a>, 113 Or App at 703. For example, in <a href="https://scholar.google.com/scholar_case?case=12367500311627806760&amp;q=125+or.+app.+238&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1">State v. Plourd</a>, 125 Or App 238, 242-43, 864 P2d 1367 (1993), the Court of Appeals conferred authoritative status on commentary that accurately reflected certain law that pre-existed the guidelines, and that the guidelines did not change. Although they have yet to say so, it stands to reason that the appellate courts would say the same things about accurate staff advisories.</p>

        <p>In <a href="https://scholar.google.com/scholar_case?case=3632527630714810225&amp;q=255+or.+app.+328&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1">Hostetter v. Bd. of Parole &amp; Post-Prison Supervision</a>, 255 Or App 328, 296 P3d 664 (2013), the court construed certain provisions of the guidelines as they were produced in 1989 by the now-defunct Sentencing Guidelines Board. Reflecting on the pertinent commentary, the court noted:</p>

        <p>“The board’s interpretation of the rules at issue is entitled to no deference, as [that] standard * * * applies ‘only when the body interpreting the rule also is the body that promulgated it.’ <em>OR-OSHA v. Don Whitaker Logging, Inc.</em>, 329 Or 256, 262 n 7, 985 P2d 1272 (1999). That is not the case here, as the rules at issue were promulgated by the Oregon Criminal Justice Council (since renamed the Oregon Criminal Justice Commission) in connection with the Felony Sentencing Guidelines. <em>See State v. Langdon</em>, 330 Or 72, 74, 999 P2d 1127 (2000) (‘Although the sentencing guidelines were created as administrative rules, the legislature approved them in 1989, giving them the authority of statutory law.’ (citing Or Laws 1989, ch 790, § 87)).”</p>

        <p>255 Or App at 332 n 3.</p>

        <p>Although this note correctly states that the now-defunct Sentencing Guidelines Board authored the guidelines, the note wrongly says the Criminal Justice Commission’s predecessor agency, the Criminal Justice Council, authored the commentary, with that commentary being the “interpretation” of the guidelines that the note references. As previously explained, <a href="http://scholar.google.com/scholar_case?q=315+Or+484&amp;hl=en&amp;as_sdt=2,38&amp;case=17866389964872013717&amp;scilh=0">Davis</a> states that the <em>Implementation Manual</em> “contains the State Sentencing Guidelines Board’s official commentary to each of the rules comprising the guidelines.” 315 Or at 487 (emphasis added). Thus, <a href="https://scholar.google.com/scholar_case?case=3632527630714810225&amp;q=255+or.+app.+328&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1">Hostetter</a> ascribed authorship of the commentary to the wrong agency.</p>

        <p>Later, in <a href="https://scholar.google.com/scholar_case?case=18115686869222433932&amp;q=259+or.+app.+410&amp;hl=en&amp;as_sdt=6,38">State v. Burns</a>, 259 Or App 410, 314 P3d 288 (2013), <em>appeal dismissed on other grounds</em>, 261 Or App 113, 323 P3d 275 (2014), the court acknowledged the commentary’s source. Citing <em>Davis</em>, the <em>Burns</em> court stated: “Authored by the council, the <em>Oregon Sentencing Guidelines Implementation Manual</em> contains the board’s official commentary to each of the rules comprising the guidelines.” 259 Or App at 415 n 3 (emphasis added). <strong>July 2021 Update:</strong> The corrected completed citation for<strong>State v. McFerrin</strong>is: <strong><em>rev dismissed</em></strong>, 365 Or 194 (2019). <strong>End July 2021 Update.</strong><br>     Finally, in <a href="https://scholar.google.com/scholar_case?case=5236420131704969440&amp;q=357+Or+145&amp;hl=en&amp;as_sdt=6,38">State v. Lykins</a> the Supreme Court foreclosed any further debate about the persuasive authority that should be given the commentary. There the court reaffirmed <em>Davis</em> when it explained that the <em>Implementation Manual</em> “contains the official commentary to the Guidelines and provides important legislative history to aid our interpretation of the relevant guidelines provisions.” <a href="https://scholar.google.com/scholar_case?case=5236420131704969440&amp;q=357+Or+145&amp;hl=en&amp;as_sdt=6,38">Lykins</a>, 357 Or at 155. But it should be recognized that because the “sentencing guidelines * * * have been approved by the legislature,” the board’s interpretations of its guidelines are not entitled to the deference that ordinarily is given to agencies’ interpretations of their own rules. <a href="https://scholar.google.com/scholar_case?case=1073409039863099538&amp;q=289+Or.+App.+96&amp;hl=en&amp;as_sdt=6,38">State v. McFerrin</a>, 289 Or App 96, 99-100 n 3, 408 P3d 263 (2017), <em>rev allowed</em>, 362 Or 794 (2018). </p><!-- start section 7 -->
        <h1 id="constitutional_issues."><strong>§ 1-7. CONSTITUTIONAL ISSUES.</strong></h1>

        <p>Constitutional challenges may be approached in either of two ways: (1) by attacking the sentencing system generally, or (2) by attacking the system’s application in specific cases. The general attacks are discussed below, as are certain specific attacks. Other specific attacks are peculiar to the topics discussed in other chapters, so are discussed in those chapters.</p>

        <p>For a thorough discussion of the extent to which constitutional rights do and do not apply at sentencing, see Alan C. Michaels, <em>Trial Rights at Sentencing</em>, 81 NCL Rev 1771 (2003). </p>
        <h2 id="general_attacks."><strong>§ 1-7.1. General Attacks.</strong></h2>

        <p>As previously discussed, in 1991, the guidelines survived general challenges that they violate the reformation and proportionality requirements of former Article I, sections 15 and 16, of the Oregon Constitution. <a href="https://scholar.google.com/scholar_case?case=12126674581988236550&amp;q=State+v.+Spinney&amp;hl=en&amp;as_sdt=4,38">Spinney</a>, 109 Or App at 576-78. <em>See also</em> <a href="http://scholar.google.com/scholar_case?q=Roy+v.+Palmateer&amp;hl=en&amp;as_sdt=4,38&amp;case=4345795996920196060&amp;scilh=0">Roy v. Palmateer</a>, 205 Or App 1, 7-8, 132 P3d 56 (2006) (holding that the “reformation” requirement of <em>former</em> Article I, section 15 of the Oregon Constitution might require an inmate’s immediate release from prison if a “permanent reformation” finding is made). The guidelines also survived a general challenge that they violate the separation of powers requirement of Article III, section 1. <a href="http://scholar.google.com/scholar_case?q=State+v.+Spinney&amp;hl=en&amp;scisbd=2&amp;as_sdt=4,38&amp;as_vis=1&amp;case=12126674581988236550&amp;scilh=0"><em>Spinney</em></a>, 109 Or App at 578-79.</p>

        <p>The Supreme Court dismissed review of <em>Spinney</em>, so the general constitutional attacks have not necessarily been resolved. But it is worth noting that in <a href="https://scholar.google.com/scholar_case?case=14923224682831621001&amp;q=324+or.+597&amp;hl=en&amp;as_sdt=4,38">State ex rel Huddleston v. Sawyer</a>, 324 Or 597, 612-17, 932 P2d 1145, <em>cert den</em>, 522 US 994 (1997), the Supreme Court rejected essentially the same reformation and separation of powers challenges to Measure 11 that the Court of Appeals rejected in <em>Spinney</em>. </p>
        <h2 id="specific_attacksjury_trial_rights."><strong>§ 1-7.2. Specific Attacks—Jury Trial Rights.</strong></h2>

        <p>In the context of the Oregon’s numerous sentence enhancement schemes discussed in this and other chapters, the question repeatedly arises: Who may serve as the trier of fact? The jury or, even without a jury waiver, the trial court? State and federal constitutional law provide subtly different answers.</p>

        <p><a href="https://scholar.google.com/scholar_case?case=2306117308590703371&amp;q=293+or.+598&amp;hl=en&amp;as_sdt=4,38">State v. Wedge</a>, 293 Or 598, 607, 652 P2d 773 (1982) holds that under the state constitution’s jury trial clause, “facts which go to the criminal acts for which a defendant is to be punished”—offense-specific facts—“must be proved to a jury’s satisfaction unless admitted or waived.” This rule prohibits basing sentence enhancement on offense-specific facts, as opposed to facts that pertain to the defendant himself—offender-specific facts—unless the offense-specific facts were pled and found by the jury beyond a reasonable doubt (unless the defendant waived jury or admitted to the facts).</p>

        <p>Dangerous offender sentencing, <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="725"
                data-subsection=""
            >ORS 161.725</a> to 161.737, provides an example. The factors that must be proven, in order to impose a dangerous offender sentence are a particular type of aggravated-departure factor. <em>See</em> <a href="http://scholar.google.com/scholar_case?q=State+v.+Davis,+315+Or+484&amp;hl=en&amp;as_sdt=2,38&amp;as_vis=1&amp;case=17866389964872013717&amp;scilh=0">Davis</a>, 315 Or at 490 (a dangerous-offender sentence is a guidelines departure sentence); <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="737"
                data-subsection="(1)"
            >ORS 161.737(1)</a> (dangerous-offender factors constitute the substantial and compelling reasons for the departure). In <a href="https://scholar.google.com/scholar_case?case=6874244376999941604&amp;q=84+or.+app.+452&amp;hl=en&amp;as_sdt=4,38">State v. Mitchell</a>, 84 Or App 452, 456-67, 734 P2d 379 (1987), the Court of Appeals held that the <a href="https://scholar.google.com/scholar_case?case=2306117308590703371&amp;q=293+or.+598&amp;hl=en&amp;as_sdt=4,38">Wedge</a> rule applies to the offense-specific dangerous offender factor that must be proven in Class B and C felony cases—that the offense “seriously endangered the life or safety of another.” <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="725"
                data-subsection="(b)"
            >ORS 161.725(b)</a>. </p>

        <p>The rule from <a href="https://scholar.google.com/scholar_case?case=4053038751252355308&amp;q=530+U.S.+466&amp;hl=en&amp;as_sdt=3,38">Apprendi v. New Jersey</a>, 530 US 466, 120 S Ct 2348, 147 L Ed 2d 435 (2000)—<em>i.e.</em>, the “<em>Apprendi</em> rule”—states a federal constitutional principle similar to but broader than the <em>Wedge</em> rule. The <em>Apprendi</em> rule states: “Other than the fact of a prior conviction, any fact that increases the penalty for a crime beyond the prescribed statutory maximum must be submitted to a jury, and proved beyond a reasonable doubt.” 530 US at 490. The <em>Wedge</em> rule applies to offense-specific factors, but not to offender-specific factors. The <em>Apprendi</em> rule applies to all types of factors, except for those that are based exclusively on the defendant’s record of prior convictions.</p>

        <p>The <em>Apprendi</em> rule’s prior-conviction exception applies only to adult convictions. As discussed in Chapter 3, the guidelines authorize using adult corrections, along with certain juvenile adjudications, in setting defendant’s criminal history scores. But because juvenile adjudications are not convictions per se, they fall outside the <em>Apprendi</em> rule’s prior-conviction exception, so fall inside the heart of the rule. <a href="https://scholar.google.com/scholar_case?q=State+v.+Harris&amp;hl=en&amp;as_sdt=4,38&amp;as_ylo=2005&amp;as_yhi=2007&amp;as_vis=1&amp;case=2549740787986417177&amp;scilh=0">State v. Harris</a>, 339 Or 157, 118 P3d 236 (2005). Consequently, in order to use juvenile adjudications in criminal-history scoring, the state must prove their existence in compliance with the <em>Apprendi</em> rule, as well as with the procedural requirements of <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="760"
                data-subsection=""
            >ORS 136.760</a> to 136.792, which are discussed below.</p>

        <p>The <a href="https://scholar.google.com/scholar_case?case=4053038751252355308&amp;q=apprendi+v+new+jersey&amp;hl=en&amp;as_sdt=3,38">Apprendi</a> rule is most often applied in the context of aggravated-departure sentencing, which is discussed in Chapter 7. Starting with the Court of Appeals decision in <a href="https://scholar.google.com/scholar_case?case=5459884975907004791&amp;q=195+or+app+159&amp;hl=en&amp;as_sdt=6,38">State v. Sawatzky</a>, 195 Or App 159, 96 P3d 1288 (2004), the appellate courts have reversed numerous aggravated-departure sentences that trial courts based on “non-juried” findings, <em>i.e.</em>, on findings the courts made in the absence of valid jury waivers or the defendants’ admissions. <em>See, e.g.</em>, <a href="http://scholar.google.com/scholar_case?q=State+v.+Dilts+II&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1&amp;case=10581544603438958486&amp;scilh=0">Dilts II</a>, 337 Or at 651-52; <a href="https://scholar.google.com/scholar_case?case=1146337304266805056&amp;q=207+Or.+App.+643&amp;hl=en&amp;as_sdt=4,38">State v. Lopez-Daniel</a>, 207 Or App 643, 142 P3d 552, <em>rev den</em>, 342 Or 117 (2006) (<em>per curiam</em>) (trial court erred in basing departure on its own findings that the victim’s injury was more aggravated than charged, and that the defendant could have been charged with additional crimes); <a href="http://scholar.google.com/scholar_case?q=State+v.+Etter&amp;hl=en&amp;as_sdt=4,38&amp;case=17295860555509627084&amp;">State v. Etter</a>, 200 Or App 52, 112 P3d 472 (2005) (trial court erred in basing aggravated departure on finding that defendant committed his crime while another county had charges pending against him); <a href="http://scholar.google.com/scholar_case?q=State+v.+Dickerson&amp;hl=en&amp;as_sdt=4,38&amp;case=12142123486596133380&amp;scilh=0">State v. Dickerson</a>, 197 Or App 8, 11, 104 P3d 638 (2005), <em>former disposition withdrawn</em>, 207 Or 297, 140 P3d 1144, <em>rev den</em>, 341 Or 450 (2006) (basing an aggravated departure “on conduct for which a defendant has not been convicted * * * cannot, by any logic, be deemed to be based on the ‘fact of prior conviction,’” so violates <em>Apprendi</em>). </p>

        <p>The impetus for these numerous reversals was <a href="https://scholar.google.com/scholar_case?case=16163203473167624369&amp;q=542+US+296&amp;hl=en&amp;as_sdt=3,38">Blakely v. Washington</a>, 542 US 296, 124 S Ct 2531, 159 L Ed 2d 403 (2004). <a href="https://scholar.google.com/scholar_case?case=16163203473167624369&amp;q=542+US+296&amp;hl=en&amp;as_sdt=3,38">Blakely</a> reaffirmed the <a href="https://scholar.google.com/scholar_case?q=530+US+466&amp;hl=en&amp;as_sdt=2,38&amp;case=4053038751252355308&amp;scilh=0#r%5B11%5D">Apprendi</a> rule—<em>i.e.</em>, that for Sixth Amendment purposes, the “statutory maximum” is “the maximum [the defendant] would receive if punished according to the facts reflected in the jury verdict alone.” 530 US at 483. <em>See Blakely</em>, 542 US at 304 (restating <em>Apprendi</em>). <em>Blakely</em> thus held that because the trial court based an aggravated-departure on non-juried findings, the court violated the defendant’s Sixth Amendment rights. <em>Id</em>. at 301. <em>See also</em> <a href="http://scholar.google.com/scholar_case?case=12405283445912662603&amp;q=See+Alleyne,+133+S+Ct+at+2160+n+1&amp;hl=en&amp;as_sdt=6,38">Alleyne v. United States</a>, 570 US 99,133 S Ct 2151, 186 L Ed 2d 314 (2013) (where statute mandated five-year minimum for possession of a firearm, which jury found, and seven-year minimum for “brandishing” firearm, which jury did not find, trial court violated <em>Apprendi</em> rule by relying on its own non-juried finding of “brandishing,” to impose seven-year minimum); <a href="https://scholar.google.com/scholar_case?case=5846616548232649269&amp;q=549+US+270&amp;hl=en&amp;as_sdt=3,38">Cunningham v. California</a>, 549 US 270, 127 S Ct 856, 166 L Ed 2d 856 (2007) (sentencing scheme which imposed presumptive term of 12 years, but allowed court to impose aggravated sentence of 16 years upon finding both aggravating factors by preponderance of evidence and that aggravators outweighed any mitigating factors also found, violated <em>Apprendi</em> rule). </p>

        <p>The <em>Apprendi</em> rule does not apply only in cases where the defendants were tried by juries. For example, in a guilty or no-contest plea case, where the defendant did not expressly waive his <em>Apprendi</em> rights, “the maximum penalty for a crime” is the maximum sentence that may be imposed based “solely on * * * the facts admitted in the * * * plea.” <em>Blakely</em>, 542 US at 304. </p>

        <p>The fact that other counts were dismissed in a plea case is irrelevant in determining whether a constitutional violation occurred. <em>Apprendi</em>, 530 US at 474. But where the indictment alleged a sentencing factor that was subject to the <a href="http://scholar.google.com/scholar_case?q=530+US+466&amp;hl=en&amp;as_sdt=2,38&amp;case=4053038751252355308&amp;scilh=0">Apprendi</a> rule, the defendant’s guilty or no-contest plea to the indictment is an admission to the factor; hence, the factor may be used to sentence the defendant regardless of the lack of a jury finding of the factor. <a href="https://scholar.google.com/scholar_case?case=9066629844966349983&amp;q=209+Or+App+600&amp;hl=en&amp;as_sdt=4,38">State v. Gordian</a>, 209 Or App 600, 149 P3d 190 (2006) (<em>per curiam</em>). <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=17913821532157586620&amp;q=255+Or.+App.+765&amp;hl=en&amp;as_sdt=4,38">State v. Engerseth</a>, 255 Or App 765, 299 P3d 567, <em>rev den</em>, 353 Or 868 (2013) (trial court did not obtain jury waiver from defendant; nevertheless, court did not err in relying on non-juried enhancement fact to impose aggravated departure, for defendant stipulated to fact). </p>

        <p>Before the <a href="http://scholar.google.com/scholar_case?q=Blakely+v.+Washington&amp;hl=en&amp;as_sdt=3,38&amp;case=16163203473167624369&amp;scilh=0">Blakely</a> decision, both the United States Supreme Court and the Oregon Court of Appeals held that courts could base sentence aggravation on facts the jury rejected using the reasonable-doubt standard, so long as the sentencing court found the facts by a preponderance of the evidence. <a href="http://scholar.google.com/scholar_case?q=United+States+v.+Watts&amp;hl=en&amp;as_sdt=3,38&amp;case=14361790926035714988&amp;scilh=0">United States v. Watts</a>, 519 US 148, 117 S Ct 633, 136 L Ed 2d 554 (1997) (<em>per curiam</em>); <a href="https://scholar.google.com/scholar_case?case=14811260190541174945&amp;q=146+Or.+App.+338&amp;hl=en&amp;as_sdt=4,38">State v. Watkins</a>, 146 Or App 338, 932 P2d 107, <em>rev den</em>, 325 Or 438 (1997). The only possible exception was cases where “the tail * * * wag[ged] the dog of the substantive offense,” <em>i.e.</em>, where the sentence would be based more on the jury-rejected facts than on the crime of conviction. <a href="http://scholar.google.com/scholar_case?q=McMillan+v.+Pennsylvania&amp;hl=en&amp;as_sdt=3,38&amp;case=14074842437230094280&amp;sc">McMillan v. Pennsylvania</a>, 477 US 79, 88, 106 S Ct 2411, 91 L Ed 2d 67 (1986). Regardless of the holdings in <em>Watts</em> and <em>Watkins</em>, the <em>Apprendi</em> rule prohibits the use of jury-rejected facts to support imposing aggravated sentences. <em>Blakely</em>, 542 US at 303-04; <em>Dickerson</em>, 197 Or App at 11. </p>

        <p>Cases such as <a href="http://scholar.google.com/scholar_case?q=State+v.+Mack&amp;hl=en&amp;as_sdt=4,38&amp;case=15466068832178742283&amp;scilh=0">State v. Mack</a>, 108 Or App 643, 646, 817 P2d 1321 (1991), <em>rev den</em>, 313 Or 300 (1992) show that also before the <em>Blakely</em> decision, Oregon’s trial courts uniformly allowed only bench trials on aggravating factors (where presumably the reasonable-doubt standard was not used), and the appellate courts countenanced that practice. In <a href="https://scholar.google.com/scholar_case?case=9590772109734549803&amp;q=339+Or.+673&amp;hl=en&amp;as_sdt=4,38">State v. Upton</a>, 339 Or 673, 679, 125 P3d 713 (2005), the Supreme Court held that even as it was originally created, the aggravated-departure scheme did not “place any limitation on the use of a jury to make the factual findings necessary to support the imposition of an enhanced sentence.” Moreover, the court said, nothing prohibited a trial court from instructing the jury that it must use the reasonable doubt standard to determine whether the state proved aggravating factors. 339 Or at 680.</p>

        <p>The <em>Upton</em> court thus held that even as it was originally created in 1989, trial courts could have administered the aggravated-departure scheme in compliance with the <em>Apprendi</em> rule. They just didn’t know they could do it that way.</p>

        <p>In response to the new sentencing era wrought by <em>Blakely’s</em> clarification of the <em>Apprendi</em> rule, the 2005 Legislature adopted Senate Bill 528 (enrolled as Oregon Laws 2005, chapter 463). It created a mostly comprehensive scheme for regulating jury trials on what the bill generically calls “enhancement facts,” <em>i.e.</em>, “a fact that is constitutionally required to be found by a jury in order to increase the sentence that may be imposed upon conviction of a crime,” <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="760"
                data-subsection="(2)"
            >ORS 136.760(2)</a>, and that must be found “beyond a reasonable doubt.” <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="785"
                data-subsection="(2)"
            >ORS 136.785(2)</a>. The bill used this generic term, because the legislature intended the bill’s scheme to apply whenever a court concludes that a sentence-aggravation scheme is subject to the <a href="https://scholar.google.com/scholar_case?case=4053038751252355308&amp;q=apprendi+v+new+jersey&amp;hl=en&amp;as_sdt=3,38">Apprendi</a> rule’s jury-trial and reasonable-doubt requirements.</p>

        <p>By virtue of its emergency clause, the bill took effect when the governor signed it on July 7, 2005. Or Laws 2005, ch 463, § 24. The scheme requires the state to give reasonable pretrial notice of any enhancement facts it intends to prove, either in the accusatory instrument, <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="765"
                data-subsection="(1)"
            >ORS 136.765(1)</a>, or by a less formal notice of intent to prove enhancement facts. <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="765"
                data-subsection="(2)"
            >ORS 136.765(2)</a>. If the less formal notice is used, it must be given “no later than 60 days after the defendant is arraigned on an indictment, waives indictment or is held to answer following a preliminary hearing, or 14 days before trial, whichever occurs earlier, unless the parties agree otherwise or the court authorizes a later date for good cause shown.” <em>Id.</em><a
                href="#fn5"
                class="footnote-ref"
                id="fnref5"
                role="doc-noteref"
            ><sup>5</sup></a></p>

        <p>“All evidence received during the trial phase of a criminal proceeding may be considered by the jury or, if the defendant waives the right to a jury trial, by the court during the sentencing phase of the proceeding.” <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="780"
                data-subsection=""
            >ORS 136.780</a>. Moreover, the evidence code applies during trials on enhancement facts. OEC 101(4)(d).</p>

        <p>Absent a valid jury waiver, the jury must find enhancement facts beyond a reasonable doubt before they may be used to aggravate a sentence. But in order to assert his <em>Apprendi</em> rights, a defendant is not required to have asked the court to empanel a jury to find enhancement facts. Seeking such an empanelment is the state’s burden. To assert his <em>Apprendi</em> rights, a defendant is required only to object to the use of non-juried enhancement facts. <a href="http://scholar.google.com/scholar_case?q=223+Or+App+261&amp;hl=en&amp;as_sdt=2,38&amp;case=16770798341115798323&amp;scilh=0">State v. Bighouse</a>, 223 Or App 261, 196 P3d 538 (2008) (<em>en banc</em>), <em>rev den</em>, 346 Or 10, <em>former disposition withdrawn on other grounds</em>, 228 Or 528, 209 P3d 356 (2009) (<em>en banc</em>). </p>

        <p>In <a href="http://scholar.google.com/scholar_case?q=240+Or+App+564&amp;hl=en&amp;as_sdt=2,38&amp;case=8950828698630834960&amp;scilh=0">State v. Lafferty</a>, 240 Or App 564, 247 P3d 1266 (2011), the court addressed <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="776"
                data-subsection=""
            >ORS 136.776</a>’s jury-waiver provision. In pertinent part, that statute provides, “When a defendant waives the right to a jury trial on the issue of guilt or innocence, the waiver constitutes a written waiver of the right to a jury trial on all enhancement facts[.]” <em>Id</em>. In <em>Lafferty</em>, the defendant had waived his right to jury trial on the crimes charged in the indictment, but he had not expressly waived jury on the enhancement fact that the prosecution previously had notified him of its intent to use. At sentencing the defendant objected to use of that enhancement fact, because (i) he had not waived jury on it, and (ii) no jury had found the fact beyond a reasonable doubt. The trial court agreed that it could not use the enhancement fact to impose sentence, and the state appealed.</p>

        <p>On appeal the state claimed that when the defendant waived jury on the charges, by operation of <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="776"
                data-subsection=""
            >ORS 136.776</a> he automatically waived jury on the enhancement fact. The Court of Appeals rejected the claim. It explained that “for certain fundamental rights, the defendant must personally make an informed waiver. The waiver of a right to jury trial—including a waiver on sentencing enhancement facts—is one of those fundamental rights.” <a href="http://scholar.google.com/scholar_case?q=240+Or+App+564&amp;hl=en&amp;as_sdt=2,38&amp;case=8950828698630834960&amp;scilh=0">Lafferty</a>, 240 Or App at 578 (internal quotation and citation omitted). In the face of the defendant’s objections, the Court of Appeals said, construing <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="776"
                data-subsection=""
            >ORS 136.776</a> as establishing an implied waiver would create a constitutional infirmity that the court must avoid:</p>

        <p>“To construe the statute the way the state suggests would be to say that it overrides the constitutional mandate that a waiver of a jury trial on sentencing enhancement facts be an ‘intentional’ waiver of a ‘known’ right. That, of course, a statute may not do.</p>

        <p>“The plausible reading of <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="776"
                data-subsection=""
            >ORS 136.776</a> that does not create that constitutional infirmity is that the statute requires that a defendant, in order to waive his constitutional right to a jury trial on the question of guilt or innocence, must also make a knowing and intentional waiver of his right to a jury trial on sentencing enhancement facts, and must do so in writing. Read in that manner, <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="776"
                data-subsection=""
            >ORS 136.776</a> instructs courts and litigants as to the form that a waiver of jury trial rights must take. Failure to abide by the statute and secure such a waiver—in writing—as to both guilt or innocence and sentencing enhancement facts is just that, a failure to comply with the statute.”</p>

        <p><em>Lafferty</em>, 240 Or App at 584–85 (emphasis added). <em>But see</em> <a href="https://scholar.google.com/scholar_case?case=13630837401754392267&amp;q=263+Or.+App.+407&amp;hl=en&amp;as_sdt=6,38">State v. Fernaays</a>, 263 Or App 407, 328 P3d 792, <em>rev den</em>, 356 Or 397 (2014) (ruling that trial court committed similar, but harmless error).</p>

        <p>SB 528 also draws a distinction between offense-specific and offender-specific enhancement facts. Offense-specific facts generally are to be proved during the “trial” (guilt) phase of a defendant’s trial, <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="770"
                data-subsection="(1)"
            >ORS 136.770(1)</a>, whereas offender-specific facts always are to be proved during the “sentencing” (penalty) phase, if there is one (<em>i.e.</em>, if the defendant is convicted of any underlying felonies). <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="770"
                data-subsection="(1)"
            >ORS 136.770(1)</a>. However, trial on offense-specific enhancement facts may be deferred to the “sentencing” phase. <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="770"
                data-subsection="(a)"
            >ORS 136.770(a)</a>; <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="770"
                data-subsection="(4)"
            >ORS 136.770(4)</a>. Uniform Criminal Jury Instructions (OSB 2009 rev with 2010-2017 supps) provide suggested jury instructions, which cover both offense- and offender-specific enhancement facts in “trial”- and “sentencing”-phase situations.”</p>

        <p>SB 528 contains three retroactivity clauses. The first clause applies the bill to prosecutions commenced before the bill’s effective date, even if the alleged criminal conduct was committed before the effective date. Or Laws 2005, ch 463, § 21(1). The second clause applies the bill to cases that have never been sentenced, but were pending at the time the bill took effect. Or Laws 2005, ch 463, § 21(2). The third clause makes the bill retroactive to cases that the appellate courts reversed and remanded for resentencing. Or Laws 2005, ch 463, § 21(3). <em>See also</em> Section 1-7.2.3. The Oregon Supreme Court has held that this retroactive application is not <em>ex post facto</em>. <a href="https://scholar.google.com/scholar_case?case=9590772109734549803&amp;q=State+v.+Upton&amp;hl=en&amp;as_sdt=4,38"><em>Upton</em></a>, 339 Or at 682-83.</p>

        <p>PRACTICE TIP: Aggravating factors are just as susceptible to pretrial challenges such as demurrers, and to trial challenges such as motions for judgment of acquittal, as are any other matters on which the jury would be instructed. Furthermore, just because aggravating factors may have been found in compliance with constitutional requirements does not necessarily mean they may be used to depart. Pre-<a href="http://scholar.google.com/scholar_case?q=Blakely+v.+Washington&amp;hl=en&amp;as_sdt=3,38&amp;case=16163203473167624369&amp;scilh=0">Blakely</a> case law recognizes a wide array of limitations, discussed in Chapter 7, on basing aggravated departures on factors found by the appropriate trier of fact—then, the trial court. Those limitations apply post-<em>Blakely</em> every bit as much as they did pre-<em>Blakely</em>.</p>

        <p>Finally, <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="785"
                data-subsection="(3)"
            >ORS 136.785(3)</a> creates certain requirements for jury trials on enhancement facts:</p>

        <p>“An enhancement fact that is tried to a jury is not proven unless:</p>

        <p>“(a) The number of jurors who find that the state has met its burden of proof with regard to the enhancement fact is equal to or greater than the number of jurors that was required to find the defendant guilty of the crime; and</p>

        <p>“(b) Of the jurors who find that the state has met its burden of proof, at least the minimum number of jurors required by this subsection to prove an enhancement fact are also jurors who found the defendant guilty of the crime or alternate jurors as provided by <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="773"
                data-subsection="(5)"
            >ORS 136.773(5)</a>.”</p>

        <p>This statute imposes two requirements. First, however many juror votes were required to convict a defendant of the underlying felony equals the number of votes required to convict on an enhancement fact. <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="785"
                data-subsection="(a)"
            >ORS 136.785(a)</a>. Second, only the votes of those jurors who voted to convict on the underlying felony, or alternative jurors selected in the event one or more jurors who voted to convict cannot continue, may be used to convict on an enhancement fact. <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="785"
                data-subsection="(b)"
            >ORS 136.785(b)</a>.</p>

        <p>EXAMPLE: A jury convicts on the charged felony by a 10-2 vote, with jurors Able and Baker voting to acquit. But then, one of the 10 jurors who voted guilty on the underlying felony votes to acquit on an alleged enhancement fact. This leaves a nine-vote majority, which is insufficient to convict. Even if Able and/or Baker decided to “switch sides” and vote to convict on the enhancement fact, <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="785"
                data-subsection="(b)"
            >ORS 136.785(b)</a> prohibits using their guilty votes to achieve the 10-vote majority needed to convict on the enhancement fact.</p>

        <p>As seen, in cases involving enhancement-fact allegations, it is crucially important that defense counsel poll the jury to ensure that its conviction on any alleged enhancement facts meets <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="785"
                data-subsection="(b)"
            >ORS 136.785(b)</a>’s requirement.</p>

        <p><a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="785"
                data-subsection="(3)"
            >ORS 136.785(3)</a>’s statement that “[a]n enhancement fact that is tried to a jury is not proven unless,” also is unique. By its terms, it establishes that any vote of less than what is required for a conviction disproves the enhancement fact. This disproval should constitute an acquittal of the enhancement fact. Under this construction, there can be no “hung jury” mistrials on enhancement facts. Either the state proves them in the manner required by <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="785"
                data-subsection="(3)"
            >ORS 136.785(3)</a>, or there is an acquittal on them, with nothing in between.</p>
        <h2 id="june_2023_update_7"><strong>June 2023 Update</strong></h2>

        <p>For a time, Sixth Amendment principles did not apply to factors used to impose aggravated-departure sentences, <em>see</em> Chapter 7, if those sentences served as minimum terms imposed in conjunction with greater, maximum terms. This was the holding in <a href="https://scholar.google.com/scholar_case?case=8039199293870837752&amp;q=223+Or+App+644&amp;hl=en&amp;as_s">Harris v. United States</a>, 536 US 545, 122 S Ct 2406, 153 L Ed 2d 524 (2002).</p>

        <p>In <a href="https://scholar.google.com/scholar_case?case=17164154724438163848&amp;q=223+Or+App+644&amp;hl=en&amp;as_sdt=6,38">State v. Stephens</a>, 223 Or App 644, 198 P3d 423 (2008), <em>rev den</em>, 346 Or 11 (2009), the Court of Appeals applied <em>Harris</em>. There, the trial court imposed 30-year indeterminate dangerous-offender sentences on multiple counts. In conjunction with each of those sentences, the court imposed aggravated-departure sentences as minimum terms. The court relied on non-juried aggravating factors to impose the minimums. The defendant argued that the trial court’s reliance on the non-juried factors violated Sixth Amendment principles. Relying on <em>Harris</em>, the Court of Appeals held that Sixth Amendment principles did not apply to the aggravating factors, because the departure sentences, as minimums, did not “exceed the prescribed [30-year] statutory maximum sentence for [each] crime.” <em>Stephens</em>, 223 Or App at 651. </p>

        <p>But four years after the decision in <em>Stephens</em>, the United States Supreme Court decided <a href="https://scholar.google.com/scholar_case?case=12405283445912662603&amp;q=See+Alleyne,+133+S+Ct+at+2160+n+1&amp;hl=en&amp;as_sdt=6,38">Alleyne v. United States</a>, 570 US 99,133 S Ct 2151, 186 L Ed 2d 314 (2013). There, the trial court had imposed a life sentence. In conjunction with the life sentence, the court imposed an enhanced, seven-year minimum, instead of the presumptive five-year minimum. The court relied on non-juried findings to impose the enhanced minimum. The Supreme Court reversed, and did so by expressly overruling <em>Harris</em>. The Court stated:</p>

        <p>“<em>Harris</em> drew a distinction between facts that increase the statutory maximum and facts that increase only the mandatory minimum. We conclude that this distinction is inconsistent with our decision in <em>Apprendi v. New Jersey</em>, 530 US 466, 120 S Ct 2348, 147 L Ed 2d 435 (2000), and with the original meaning of the Sixth Amendment. Any fact that, by law, increases the penalty for a crime is an ‘element’ that must be submitted to the jury and found beyond a reasonable doubt. <em>See id.</em>, at 483, n. 10, 490. Mandatory minimum sentences increase the penalty for a crime. It follows, then, that any fact that increases the mandatory minimum is an ‘element’ that must be submitted to the jury. Accordingly, <em>Harris</em> is overruled.” </p>

        <p><em>Alleyne</em>, 570 US at 103.</p>

        <p>There should be no question that <em>Alleyne</em> overruled <em>Stephens sub silentio</em>. That means that under <em>Alleyne</em>, the aggravating factors on which a trial court might rely, to impose an aggravated departure as the minimum component of a longer, dangerous-offender sentence, are subject to Sixth Amendment principles—that is, the aggravating factors are subject to the <a href="https://scholar.google.com/scholar_case?case=4053038751252355308&amp;q=530+U.S.+466&amp;hl=en&amp;as_sdt=3,38">Apprendi</a> rule. </p>

        <p><strong>[End Update]</strong></p>

        <p>Finally, in <a href="https://scholar.google.com/scholar_case?case=15066571860288158725&amp;q=250+Or.+App.+656&amp;hl=en&amp;as_sdt=4,38">State v. Ibarra-Ruiz</a>, 250 Or App 656, 282 P3d 934 (2012), the court, without citation of authority, held that the <a href="http://scholar.google.com/scholar_case?case=4053038751252355308&amp;q=530+US+466&amp;hl=en&amp;as_sdt=2,38">Apprendi</a> rule does not apply to considerations that serve as the basis for ranking crimes that the guidelines leave unranked. For further information about this, including the recommendation that counsel continue to argue that the <em>Apprendi</em> rule and, by extension, the principles of <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="760"
                data-subsection=""
            >ORS 136.760</a> to 136.792, apply to ranking decisions (just as they apply in the ranking of subclassified crimes), see Chapter 2.</p>
        <h3 id="specific_attacksjury_trial_rightsmitigating_factors."><strong>§ 1-7.2.1. Specific Attacks—Jury Trial Rights—Mitigating Factors.</strong></h3>

        <p>The Upton court’s holding that nothing in the guidelines, as originally written, prohibited jury trials on aggravating factors might seem to leave intact <a href="http://scholar.google.com/scholar_case?q=State+v.+Mack&amp;hl=en&amp;as_sdt=4,38&amp;case=15466068832178742283&amp;scilh=0">State v. Mack</a>. That case held that the departure scheme mandates bench trials, so prohibits jury trials, on mitigating factors. <em>Mack</em>, 108 Or App at 646.</p>

        <p>But <em>Upton</em> should not be so read. The court addressed a series of challenges to SB 528. These included the claim that the bill “creates a procedure under which a jury determines aggravating or enhancing factors, but does not do the same for mitigating factors, [so] it is a ‘one-sided’ rule of the type that the United States Supreme Court held to be impermissible in” <a href="https://scholar.google.com/scholar_case?case=4161923522219213499&amp;q=412+US+470&amp;hl=en&amp;as_sdt=3,38">Wardius v. Oregon</a>, 412 US 470, 475, 93 S Ct 2208, 37 L Ed 2d 82 (1973) (pro-prosecution, one-sided discovery statute violates due process). <em>Upton</em>, 339 Or at 686. <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=5676629902054312770&amp;q=388+US+14&amp;hl=en&amp;as_sdt=3,38">Washington v. Texas</a>, 388 US 14, 25, 87 S Ct 1920, 18 L Ed 2d 1019 (1967) (Harlan, J., concurring) (pro-prosecution, one-sided witness competency statute violates due process). The court rejected this due process claim, stating: “[N]othing in SB 528 precludes a defendant from fully litigating any issue of fact properly before the jury.” <em>Upton</em>, 339 Or at 687. </p>

        <p>Thus, if a defendant shows that mitigation is an “issue of fact properly before the jury,” he must be allowed to “fully litigat[e]” it before the jury. This should include not only presenting mitigation evidence, but also securing jury instructions on appropriate mitigating factors. <em>See</em> <a href="http://scholar.google.com/scholar_case?q=Penry+v.+Lynaugh&amp;hl=en&amp;as_sdt=3,38&amp;case=8575965776794689824&amp;scilh=0">Penry v. Lynaugh</a>, 492 US 302, 109 S Ct 2934, 106 L Ed 2d 256 (1989) (in capital case, Eighth Amendment’s Cruel and Unusual Punishment Clause requires introduction of defense evidence and jury instructions on mitigating factor).</p>
        <h3 id="specific_attacksjury_trial_rightscollateral_review."><strong>§ 1-7.2.2. Specific Attacks—Jury Trial Rights—Collateral Review.</strong></h3>

        <p>The federal constitutional requirements of <a href="https://scholar.google.com/scholar?hl=en&amp;as_sdt=3%2C38&amp;q=apprendi+v+new+jersey&amp;oq=Apprendi">Apprendi</a> are fully retroactive to cases still at trial or on direct appeal. <a href="https://scholar.google.com/scholar_case?case=10858659869332197708&amp;q=479+US+314&amp;hl=en&amp;as_sdt=3,38">Griffith v. Kentucky</a>, 479 US 314, 322-23, 107 S Ct 708, 93 L Ed 2d 649 (1987). The same should be true about the state constitutional requirements of <a href="https://scholar.google.com/scholar_case?case=2306117308590703371&amp;q=State+v.+Wedge&amp;hl=en&amp;as_sdt=4,38">Wedge</a>. <a href="http://scholar.google.com/scholar_case?q=State+v.+Fair&amp;hl=en&amp;as_sdt=4,38&amp;case=10778229955226517396&amp;scilh=0">State v. Fair</a>, 263 Or 383, 502 P2d 1150 (1972). SB 528’s retroactivity provisions, Or Laws 2005, ch 463, § 21, effectively codify the requirements of <em>Griffith</em> and <em>Fair</em>. </p>

        <p>The more difficult question that SB 528 did not address is whether the requirements are retroactive in collateral proceedings such as post-conviction relief (PCR). Thus far, litigation has focused on whether the <em>Apprendi</em> rule is retroactive. Those cases are not necessarily determinative of whether <em>Wedge</em> is retroactive. That issue will have to be litigated separately, under state constitutional retroactivity principles.</p>

        <p>Regarding the <a href="http://scholar.google.com/scholar_case?q=530+US+466&amp;hl=en&amp;as_sdt=2,38&amp;case=4053038751252355308&amp;scilh=0">Apprendi</a> rule, in the post-conviction case of <a href="https://scholar.google.com/scholar_case?case=2862423368180289226&amp;q=340+Or+1&amp;hl=en&amp;as_sdt=4,38">Miller v. Lampert</a>, 340 Or 1, 125 P3d 1260 (2006), the court rejected an <em>Apprendi</em>-based attack on dangerous-offender factors found under the pre-SB 528 statutory scheme. The court held that in collateral proceedings such as post-conviction, <em>Apprendi</em> does not apply retroactively to judgments of conviction and sentence that were final before <em>Apprendi</em>’s June 26, 2000 date of decision. <a href="http://scholar.google.com/scholar_case?q=184+Or+App+577&amp;hl=en&amp;as_sdt=2,38&amp;case=2366881415337518076&amp;scilh=">Teague v. Palmateer</a>, 184 Or App 577, 57 P3d 176 (2002) (<em>en</em> <em>banc</em>). </p>

        <p>The basis for the <em>Miller</em> court’s decision was that in applying the federal rule from <em>Apprendi</em>, the Supremacy Clause requires state courts to follow the federal rule from <a href="http://scholar.google.com/scholar_case?q=489+US+288&amp;hl=en&amp;as_sdt=2,38&amp;case=9178485170219770923&amp;scilh=0">Teague v. Lane</a>, 489 US 288, 109 S Ct 1060, 103 L Ed 2d 334 (1989). That rule is used to determine whether new, federal rules of decision may be applied retroactively in collateral proceedings. The <em>Miller</em> court held that under <em>Teague v. Lane</em>, the <em>Apprendi</em> rule may not be applied retroactively to judgments that were final before <em>Apprendi</em>’s date of decision. <em>See also</em> <a href="http://scholar.google.com/scholar_case?case=9236378392139374560&amp;q=136+S+Ct+718&amp;hl=en&amp;as_sdt=6,38">Montgomery v. Louisiana</a>, 577 US 460, 136 S Ct 718, 193 L Ed 2d 599 (2016) (Court applied <a href="http://scholar.google.com/scholar_case?q=489+US+288&amp;hl=en&amp;as_sdt=2,38&amp;case=9178485170219770923&amp;scilh=0">Teague v. Lane</a> principles to hold that <a href="http://scholar.google.com/scholar_case?case=6291421178853922648&amp;q=miller+v.+alabama&amp;hl=en&amp;as_sdt=6,38">Miller v. Alabama</a>, 567 US 460, 132 S Ct 2455, 183 L Ed 2d 407 (2012), which generally prohibits imposing life without parole (“true life”) sentences on juvenile defendants, applies retroactively in collateral proceedings). <a
                href="#fn6"
                class="footnote-ref"
                id="fnref6"
                role="doc-noteref"
            ><sup>6</sup></a></p>
        <h2 id="june_2023_update_8"><strong>June 2023 Update</strong></h2>

        <p>2 In <a href="https://scholar.google.com/scholar_case?case=15840060407060192124&amp;q=Miller+v.+Alabama,+567+US+460,+132+S+Ct+2455,+183+L+Ed+2d+407+(2012),+&amp;hl=en&amp;as_sdt=3,48">Miller v. Alabama</a>, 567 US 460, 132 S Ct 2455, 183 L Ed 2d 407 (2012), the Court held that imposing life without parole (“true-life”) sentences on juveniles prosecuted as adults, who were not found to be “permanently incorrigible,” constituted cruel and unusual punishment under the Eighth Amendment. But in <a href="https://scholar.google.com/scholar_case?case=13968548909193919689&amp;q=141+S+Ct+1307&amp;hl=en&amp;as_sdt=3,48">Jones v. Mississippi</a>, 593 US ___, 141 S Ct 1307, 209 L Ed 2d 390 (2021), the Court—without admitting as much—overruled <em>Miller</em>. The <em>Jones</em> Court held that so long as a sentencing court has discretionary authority to impose a true-life sentence, the court may impose such a sentence without the necessity of making a permanently incorrigible determination. (At the time of the <em>Jones</em> Court’s decision, defendant Miller’s case was pending before the sentencing court. Five days after the Court’s decision, <a href="https://www.msn.com/en-us/news/crime/alabama-judge-resentences-evan-miller-the-youngest-person-ever-given-life-without-parole/ar-BB1g7phB">the sentencing court resentenced Miller to true life</a>.) </p>

        <p>Nevertheless, the 2019 Legislature amended the aggravated murder statutes to bring them into compliance with <em>Miller</em>. As explained in the Chapter 4 Update, the statutes, as amended, prohibit imposing true-life sentences on juveniles prosecuted as adults.</p>

        <p>[<strong>End Update</strong>]</p>

        <p>But in <a href="http://scholar.google.com/scholar_case?q=128+S+Ct+1029&amp;hl=en&amp;as_sdt=2,38&amp;case=16815679881665298152&amp;scilh=0">Danforth v. Minnesota</a>, 552 US 264, 128 S Ct 1029, 169 L Ed 2d 859 (2008), the Court held that states need not follow the <em>Teague</em> rule in deciding whether new rules of decision on federal law apply retroactively in state collateral proceedings such as post-conviction relief. Instead, the Court held, states are free to develop and apply their own rules for determining such retroactivity.</p>

        <p>In light of <em>Danforth</em>, the Oregon Supreme Court wrongly decided <a href="http://scholar.google.com/scholar_case?q=Miller+v.+Lampert&amp;hl=en&amp;as_sdt=4,38&amp;case=2862423368180">Miller v. Lampert</a>, as well as the case that <em>Miller</em> reaffirmed, <a href="http://scholar.google.com/scholar_case?q=336+Or+379&amp;hl=en&amp;as_sdt=2,38&amp;case=3925206049191109574&amp;scilh=0">Page v. Palmateer</a>, 336 Or 379, 84 P3d 133, <em>cert den</em>, 543 US 866 (2004)<em>. See Danforth</em>, 552 US at 274 n 14 (characterizing <em>Page</em> as a “misguided” decision). <em>Miller</em> and <em>Page</em> are not <em>stare decisis</em> in state courts and should be reconsidered. <em>See</em> <a href="https://scholar.google.com/scholar_case?case=13491379537872799485&amp;q=State+v.+Sawatzky&amp;hl=en&amp;as_sdt=4,38">Sawatzky</a>, 195 Or App at 171-72 (declining to follow Oregon Supreme Court decision on federal question that was inconsistent with United States Supreme Court decision on same question). </p>

        <p>This reconsideration eventually did occur, during the course of which Judge Haselton’s dissenting opinion in <a href="http://scholar.google.com/scholar_case?q=184+Or+App+577&amp;hl=en&amp;as_sdt=2,38&amp;case=2366881415337518076&amp;scilh=">Teague v. Palmateer</a> became controlling law.</p>

        <p>In <a href="http://scholar.google.com/scholar_case?q=184+Or+App+577&amp;hl=en&amp;as_sdt=2,38&amp;case=2366881415337518076&amp;scilh=0">Teague v. Palmateer</a>, the Court of Appeals majority, like the Supreme Court in <a href="http://scholar.google.com/scholar_case?q=Miller+v.+Lampert&amp;hl=en&amp;as_sdt=4,38&amp;case=2862423368180">Miller v. Lampert</a>, erroneously held that state courts must follow the federal rule announced in <a href="http://scholar.google.com/scholar_case?q=489+US+288&amp;hl=en&amp;as_sdt=2,38&amp;case=9178485170219770923&amp;sc">Teague</a> v. Lane to determine whether new, federal rules of decision may be applied retroactively in collateral proceedings (although the Court of Appeals based its ruling on comity principles, rather than the Supremacy Clause). Judge Haselton disagreed. Cassandra-like, he argued exactly consistently with the United States Supreme Court’s later decision in Danforth “that the <a href="http://scholar.google.com/scholar_case?q=489+US+288&amp;hl=en&amp;as_sdt=2,38&amp;case=9178485170219770923&amp;scilh=0">Teague</a> retroactivity analysis does not govern whether relief for federal constitutional violations is available in state post-conviction proceedings.” <a href="http://scholar.google.com/scholar_case?q=184+Or+App+577&amp;hl=en&amp;as_sdt=2,38&amp;case=2366881415337518076&amp;sci">Teague v. Palmateer</a>, 184 Or App at 594.</p>

        <p>“Rather,” Haselton continued, “our state’s post-conviction statutes themselves, and related Oregon appellate decisions, govern when, or whether, such ‘retroactive’ relief is available in Oregon courts.” <em>Id</em>. at 599. That body of law “indicates that post-conviction relief is, in fact, available ‘where the right subsequently sought to be asserted was not generally recognized to be in existence at the time of trial.’” <em>Id.</em> at 602 (quoting <a href="https://scholar.google.com/scholar_case?case=1796398796015045301&amp;q=318+Or.+352&amp;hl=en&amp;as_sdt=4,38">Palmer v. State</a>, 318 Or 352, 357, 867 P2d 1368 (1994), but omitting certain internal quotations). </p>

        <p>For example, Haselton explained, “[W]hen a new constitutional principle has been articulated between the time of a petitioner’s direct appeal and the post-conviction proceeding, a claim based on the new constitutional principle will be considered in the post-conviction proceeding.” <a href="http://scholar.google.com/scholar_case?q=184+Or+App+577&amp;hl=en&amp;as_sdt=2,38&amp;case=2366881415337518076&amp;sci">Id</a><a href="http://scholar.google.com/s">.</a> at 602-03 (internal quotations and emphasis omitted). Haselton thus concluded that retroactively raised “<a href="https://scholar.google.com/scholar_case?case=4053038751252355308&amp;q=apprendi+v+new+jersey&amp;hl=en&amp;as_sdt=3,38">Apprendi</a>-based claims are cognizable” on post-conviction relief. <em>Id</em>. at 603.</p>

        <p>In <a href="https://scholar.google.com/scholar_case?case=6294580522111407328&amp;q=357+Or.+553&amp;hl=en&amp;as_sdt=4,38">Gonzalez Verduzco v. State</a>, 357 Or 553, 355 P3d 902 (2015), the Supreme Court essentially agreed with Haselton’s dissent in <a href="http://scholar.google.com/scholar_case?q=184+Or+App+577&amp;hl=en&amp;as_sdt=2,38&amp;case=2366881415337518076&amp;scilh=0">Teague v. Palmateer</a>. The court stated:</p>

        <p>“Considering the text, context, and history of <a
                href="#"
                data-action="show-ors"
                data-chapter="138"
                data-section="550"
                data-subsection=""
            >ORS 138.550</a>, we conclude, as the Court of Appeals did in <em>Long v. Armenakis</em>, 166 Or App 94, 97, 999 P2d 461 (2000), that ‘whether an issue reasonably could be anticipated and raised does not depend—at least not in a <em>per se</em> way—on whether the issue has been definitively resolved by the courts.’ Rather, the question whether a claim reasonably could have been raised earlier will vary with the facts and circumstances of each claim. As the Court of Appeals explained in <em>Long</em>: </p>
        <blockquote>

            <p>“‘The touchstone is not whether a particular question is settled, but whether it reasonably is to be anticipated so that it can be raised and settled accordingly. The more settled and familiar a constitutional or other principle on which a claim is based, the more likely the claim reasonably should have been anticipated and raised. Conversely, if the constitutional principle is a new one, or if its extension to a particular statute, circumstance, or setting is novel, unprecedented, or surprising, then the more likely the conclusion that the claim reasonably could not have been raised.’</p>
        </blockquote>

        <p><em>“Id</em>. at 101 (emphasis in original; citations omitted). We cannot improve on the Court of Appeals’ summary of those general principles and adopt its summary as our own.”</p>

        <p>357 Or at 571.</p>

        <p>On the other hand, if a defendant’s judgment became final on or after <em>Apprendi’s</em> date of decision, he would be seeking prospective, not retroactive benefit, so he should be able to make out a claim under the <em>Apprendi</em>. B<em>ut see</em> <a href="https://scholar.google.com/scholar_case?case=6985980333210561951&amp;q=414+F.3d+1025&amp;hl=en&amp;as_sdt=3,38">Schardt v. Payne</a>, 414 F3d 1025 (9th Cir 2005) (the June 24, 2004 date of decision of <a href="https://scholar.google.com/scholar_case?case=16163203473167624369&amp;q=Blakley+v.+Washington&amp;hl=en&amp;as_sdt=3,38">Blakely v. Washington</a> is used to determine whether defendant seeks retroactive benefit of Apprendi); <a href="http://scholar.google.com/scholar_case?q=158+Wash+2d+731&amp;hl=en&amp;as_sdt=2,38&amp;case=7672816365507751711&amp;">In re VanDelft</a>, 158 Wash 2d 731, 147 P3d 573 (2006), <em>cert den</em>, 550 US 980 (2007) (holding that on collateral review, judgment must become final after <em>Blakely</em> in order for defendant to claim benefit of <em>Apprendi</em> rule). </p>

        <p>But starting with its decision in <a href="http://scholar.google.com/scholar_case?q=State+v.+Harris&amp;hl=en&amp;as_sdt=4,38&amp;as_ylo=2005&amp;as_yhi=2007&amp;as_vis=1&amp;case=2549740787986417177&amp;scilh=0">State v. Harris</a>, the Oregon Supreme Court’s post-<em>Blakely</em> decisions scarcely mention <em>Blakely</em> and instead discuss exactly what should be discussed, that being the <em>Apprendi</em> rule. The decisions recognize that <em>Blakely</em> does not say anything that <em>Apprendi</em> did not already say, and that instead, <em>Blakely</em> merely clarifies the <em>Apprendi</em> rule. For example, in <a href="https://scholar.google.com/scholar_case?case=2272997100696732751&amp;q=340+Or.+310&amp;hl=en&amp;as_sdt=4,38">State v. Perez</a>, 340 Or 310, 314-15, 130 P3d 780 (2006), the court stated: “In <em>Blakely</em>, the Court clarified the meaning of the phrase ‘prescribed statutory maximum’ from Apprendi[.]” (Emphasis added.) <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=8133800666919340592&amp;q=343+or.+248&amp;hl=en&amp;as_sdt=4,38">State v. Ice</a>, 343 Or 248, 254 n 1, 170 P3d 1049 (2007) (<em>Apprendi</em> “was not fully clarified until the Supreme Court explained it four years later in <em>Blakely</em>”), <em>rev’d on other grounds sub nom Oregon v. Ice</em>, 555 US 160, 129 S Ct 711, 172 L Ed 2d 517 (2009); <a href="http://scholar.google.com/scholar_case?q=State+v.+Gornick&amp;hl=en&amp;as_sdt=4,38&amp;as_ylo=2005&amp;as_yhi=2007&amp;as_vis=1&amp;case=6212034654455276455&amp;scilh=0">State v. Gornick</a>, 340 Or 160, 164, 130 P3d 780 (2006) (describing Blakely as “clarifying Sixth Amendment principles” announced in <em>Apprendi</em>). </p>

        <p>Because <em>Blakely</em> merely clarified a preexisting rule of law—<em>i.e.</em>, the <em>Apprendi</em> rule—<em>Blakely</em> does not announce a new rule of law. Only <em>Apprendi</em> announces a new rule. Because, as <em>Harris</em>, <em>Perez</em>, and <em>Gornick</em> all say, <em>Blakely</em> merely clarifies the <em>Apprendi</em> rule, limitations on the retroactive application of new rules of law in collateral proceedings do not apply to <em>Blakely</em>. The limitations apply only to <em>Apprendi</em>. That would mean that even if <em>Miller</em> is right, and <em>Apprendi</em> is not retroactive, under this clarification theory, <em>Blakely</em> is fully retroactive to <em>Apprendi’</em>s June 26, 2000 date of decision. <a href="http://scholar.google.com/scholar_case?q=Accord+Frazer+v.+South+Carolina,+430+F3d+696&amp;hl=en&amp;scisbd=2&amp;as_sdt=3,38&amp;as_ylo=2005&amp;as_yhi=2005&amp;as_vis=1&amp;case=7993903902711739891&amp;scilh=0">Accord Frazer v. South Carolina</a>, 430 F3d 696, 704-05 (4th Cir 2005) (<a href="http://scholar.google.com/scholar_case?q=Roe+v.+Flores-Ortega&amp;hl=en&amp;as_sdt=3,38&amp;as_vis=1&amp;case=1104241309018568427&amp;scilh=0">Roe v. Flores-Ortega</a>, 528 US 470, 120 S Ct 1029, 145 L Ed 2d 985 (2000) merely clarifies rule of law first announced in <a href="http://scholar.google.com/scholar_case?q=Strickland+v.+Washington&amp;hl=en&amp;as_sdt=3,38&amp;as_vis=1&amp;case=16585781351150334057&amp;scilh=0">Strickland v. Washington</a>, 466 US 668, 104 S Ct 2052, 80 L Ed 2d 462 (1984), so applies retroactively in collateral proceedings); <a href="http://scholar.google.com/scholar_case?q=Lewis+v.+Johnson&amp;hl=en&amp;as_sdt=3,38&amp;as_vis=1&amp;case=4453134877265396346&amp;scilh=0">Lewis v. Johnson</a>, 359 F3d 646, 654-57 (3rd Cir 2004) (same). </p>

        <p>Regardless of whether Apprendi and <a href="https://scholar.google.com/scholar_case?case=2306117308590703371&amp;q=State+v.+Wedge&amp;hl=en&amp;as_sdt=4,38">Wedge</a> are fully retroactive in PCR, there are independent questions about whether an attorney’s failure to assert appropriate objections constitutes inadequate or ineffective assistance of counsel.</p>

        <p>In cases involving offense-specific “enhancement facts,” post-conviction counsel may claim that an attorney’s failure to make <em>Wedge</em> objections to offense-specific enhancement facts constitutes inadequate assistance under the state constitution. <a href="https://scholar.google.com/scholar_case?case=673340974705931866&amp;q=159+Or.+App.+158&amp;hl=en&amp;as_sdt=4,38">Lovelace v. Zenon</a>, 159 Or App 158, 976 P2d 575 (1999) (De Muniz, J.). The <em>Lovelace</em> court held that trial counsel’s failure to make a <em>Wedge</em> objection to an offense-specific dangerous-offender factor was inadequate assistance of counsel. 159 Or App at 162. </p>

        <p>Unlike claims based on the state constitution, there is a substantial body of case law addressing whether an attorney’s failure to assert <em>Apprendi</em> objections constitutes ineffective assistance of counsel under the federal constitution. </p>

        <p>For example, in <a href="http://scholar.google.com/scholar_case?q=Peralta-Basilio+v.+Hill&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1&amp;case=2611410440398246566&amp;scilh=0">Peralta-Basilio v. Hill</a>, 203 Or App 449, 454-55, 126 P3d 1 (2005), the Court of Appeals held that trial counsel did not provide ineffective assistance of counsel by failing to make an <em>Apprendi</em> objection to non-juried aggravating factors, where the defendant was sentenced while the controlling law in Oregon was the Court of Appeals decision in <a href="http://scholar.google.com/scholar_case?q=State+v.+Dilts+I&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1&amp;case=879858918885214203&amp;scilh=0">State v. Dilts I</a>, 179 Or App 238, 39 P3d 276 (2002), <em>aff’d</em>, 336 Or 158, 82 P3d 593 (2003), <em>vacated sub nom</em>, <em>Dilts v. Oregon</em>, 542 US 934 (2004) (mem), which, as was later determined, erroneously rejected an <a href="http://scholar.google.com/scholar_case?q=530+US+466&amp;hl=en&amp;as_sdt=2,38&amp;case=4053038751252355308&amp;scilh=0">Apprendi</a>-based attack on a non-juried aggravating factor.</p>

        <p>On the other hand, in <a href="http://scholar.google.com/scholar_case?q=Miller+v.+Lampert&amp;hl=en&amp;as_sdt=4,38&amp;case=2862423368180289226&amp;scilh=0">Miller v. Lampert</a>, the Supreme Court rejected claims that trial counsel provided inadequate and ineffective assistance by failing to assert what would have been meritorious <em>Apprendi</em> objections. The court grounded its decision on the fact that the defendant was sentenced not only before the date of decision of <em>Apprendi</em>, <em>see</em> <a href="http://scholar.google.com/scholar_case?q=Miller+v.+Lampert&amp;hl=en&amp;as_sdt=4,38&amp;case=2862423368180289226&amp;scilh=0">Miller</a>, 340 Or at 14-17, but also before the date of decision of <em>Apprendi’</em>s progenitor, <a href="https://scholar.google.com/scholar_case?case=15035002282262379891&amp;q=526+US+227&amp;hl=en&amp;as_sdt=3,38">Jones v. United States</a>, 526 US 227, 119 S Ct 1215, 143 L Ed 2d 311 (1999). <em>See Miller</em>, 340 Or at 13 n 5. <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=10949880998876543471&amp;q=214+Or.+App.+39&amp;hl=en&amp;as_sdt=4,38">Buffa v. Belleque</a>, 214 Or App 39, 162 P3d 376 (2007) (trial counsel did not provide ineffective assistance of counsel by failing to make an <em>Apprendi</em> objection where defendant was sentenced before <em>Apprendi</em>). </p>

        <p>Thus, <em>Peralta-Basilio</em> may be wrong. It may be that under <em>Miller</em>, a defendant may be able to make out an <em>Apprendi</em> claim if he were sentenced on or after the date of decision of <em>Jones</em>, and even more so if he were sentenced on or after the date of decision of <em>Apprendi</em>. <em>See</em> <a href="http://scholar.google.com/scholar_case?q=Ware+v.+Hall&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1&amp;case=7957085214521701529&amp;scilh=0">Ware v. Hall</a>, 342 Or 444, 154 P3d 118 (2007) (trial court erred in entering <em>sua spon</em>te dismissal with prejudice of successive post-conviction petition raising <em>Apprendi</em> claim against judgment of conviction and sentence that became final after <em>Apprendi</em> but before <em>Blakely</em>). But a defendant would have an even stronger ineffective assistance claim if he were sentenced on or after the June 24, 2002 date of decision of the Court’s first case holding that <a href="http://scholar.google.com/scholar_case?q=530+US+466&amp;hl=en&amp;as_sdt=2,38&amp;case=4053038751252355308&amp;scilh=0">Apprendi</a> means what it says, <a href="https://scholar.google.com/scholar_case?case=13989927396342823081&amp;q=536+US+584&amp;hl=en&amp;as_sdt=6,38">Ring v. Arizona</a>, 536 US 584, 122 S Ct 2428, 153 L Ed 2d 556 (2002). His claim would be strongest of all if he were sentenced on or after the June 24, 2004 date of the Court’s clarification decision in <a href="http://scholar.google.com/scholar_case?q=Blakely+v.+Washington&amp;hl=en&amp;as_sdt=3,38&amp;case=16163203473167624369&amp;scilh=0">Blakely</a>. </p>
        <h3 id="specific_attacksjury_trial_rightsresentencings."><strong>§ 1-7.2.3. Specific Attacks—Jury Trial Rights—Resentencings.</strong></h3>

        <p>In cases that reviewing courts have remanded for resentencing, SB 528 allows resentencing trials solely on enhancement facts—even if the defendant was convicted of the underlying charges by trial, as opposed to plea. <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="792"
                data-subsection="(1)"
            >ORS 136.792(1)</a>. This is consistent with the Supreme Court’s decision in <a href="http://scholar.google.com/scholar_case?q=State+v.+Boots+II&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1&amp;case=2814486650249173839&amp;scilh=0">State v. Boots II</a>, 315 Or 572, 578-79, 848 P2d 76, <em>cert den</em>, 510 US 1013 (1993). But there are various problems with this provision in SB 528, the first of which starts with the <a href="http://scholar.google.com/scholar_case?q=State+v.+Upton&amp;hl=en&amp;as_sdt=4,38&amp;case=9590772109734549803&amp;scilh=0">Upton</a> court’s holding that “each aggravating or enhancing factor is a new ‘material element’ of the charged offense[.]” 339 Or at 681.</p>

        <p>Because of the sluggishness of processes such as appellate review, by the time of the remand proceeding, a new charging instrument may be beyond the statute of limitations. <em>See</em> <a
                href="#"
                data-action="show-ors"
                data-chapter="131"
                data-section="105"
                data-subsection=""
            >ORS 131.105</a> and 131.125. Because the limitations period tolls (for no more than three years, <em>see</em> <a
                href="#"
                data-action="show-ors"
                data-chapter="131"
                data-section="155"
                data-subsection=""
            >ORS 131.155</a>) only when the defendant is residing outside the state or is hiding to prevent service of process, <em>see</em> <a
                href="#"
                data-action="show-ors"
                data-chapter="131"
                data-section="145"
                data-subsection="(2)"
            >ORS 131.145(2)</a>, it does not toll merely because the case is on appeal or on some other form of review. <em>See</em> <a href="http://scholar.google.com/scholar_case?case=16306391569685463381&amp;hl=en&amp;as_sdt=2&amp;as_vis=1&amp;oi=scholarr">State v. Davids</a>, 193 Or App 178, 182, 90 P3d 1 (2004), <em>aff’d,</em> 339 Or 96, 116 P3d 894 (2005) (if an appellate court dismisses without prejudice, “there appears to be no reason why the statute of limitations would not bar reprosecution” on remand). Consequently, to the extent a notice under <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="790"
                data-subsection=""
            >ORS 136.790</a> alleges enhancement facts not previously alleged, it may be time barred. <em>See</em> <a href="https://scholar.google.com/scholar_case?case=6683257749144312521&amp;q=345+Or.+479&amp;hl=en&amp;as_sdt=4,38">State v. Kuznetsov</a>, 345 Or 479, 484, 199 P3d 311 (2008) (state may not avoid statute of limitations by issuing new charging instrument that relates back to time of original instrument); <a href="https://scholar.google.com/scholar_case?case=15330058335447092081&amp;q=178+Or.+App.+289&amp;hl=en&amp;as_sdt=4,38">Abbott v. Baldwin</a>, 178 Or App 289, 296-301, 36 P3d 516 (2001), <em>rev den</em>, 334 Or 75, <em>cert den</em>, 537 US 901 (2002) (where matter was resubmitted to grand jury and new indictment was issued under different case number prior to dismissal of identical earlier indictment, new indictment did not relate back to dismissed indictment); <a href="https://scholar.google.com/scholar_case?case=13618445445000771509&amp;q=76+Or.+App.+572&amp;hl=en&amp;as_sdt=4,38">State v. Bovee</a>, 76 Or App 572, 575, 710 P2d 786 (1985), <em>rev den</em>, 300 Or 605 (1986) (where “resubmitted indictment * * * contain[ed] two dates on which it was purportedly returned, one within the Statute of Limitations and one not * * * it does not show on its face that prosecution was commenced within the statutory period” so it was time barred). </p>

        <p>The second problem with allowing jury resentencing trials arises where the state seeks to prove offense-specific enhancement facts. Only new offender-specific enhancement facts may be tried during a sentencing phase. This is because nothing in <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="790"
                data-subsection=""
            >ORS 136.790</a> and <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="792"
                data-subsection=""
            >ORS 136.792</a> authorizes sentencing trials on offense-specific enhancement facts.<a
                href="#fn7"
                class="footnote-ref"
                id="fnref7"
                role="doc-noteref"
            ><sup>7</sup></a></p>

        <p>It should be noted, however, that when imposing sentence at the sentencing hearing, the court may use offense- and offender-specific facts found during the case’s earlier “trial” and “sentencing” phases.</p>

        <p>Next, on remand defense counsel also should argue that double jeopardy prohibits any sort of sentencing trial on enhancement facts. Under this theory, the only enhancement facts available for the court’s use would be those that the state proved during the original trial.</p>

        <p>Under the Fifth Amendment’s Double Jeopardy Clause, a conviction of a lesser-included offense precludes a subsequent prosecution on the associated greater offense. <a href="https://scholar.google.com/scholar_case?case=12211303413294355049&amp;q=398+US+323&amp;hl=en&amp;as_sdt=6,38">Price v. Georgia</a>, 398 US 323, 329, 90 S Ct 1757, 26 L Ed 2d 300 (1970).</p>

        <p>Moreover, in <a href="http://scholar.google.com/scholar_case?case=8739308841323559824&amp;q=537+US+101&amp;hl=en&amp;as_sdt=2,38">Sattazahn v. Pennsylvania</a>, 537 US 101, 111, 123 S Ct 732, 154 L Ed 2d 588 (2003), the Court held that factual findings subject to the <em>Apprendi</em> rule—so enhancement facts—are crime elements for purposes of double jeopardy analyses. The Court said, </p>

        <p>“Our decision in <em>Apprendi</em> * * * clarified what constitutes an ‘element’ of an offense for purposes of the Sixth Amendment’s jury trial guarantee. Put simply, if the existence of any fact (other than a prior conviction) increases the maximum punishment that may be imposed on a defendant, that fact—no matter how the State labels it—constitutes an element, and must be found by a jury beyond a reasonable doubt.</p>

        <p>“ * * * * *</p>

        <p>“We can think of no principled reason to distinguish, in this context, between what constitutes an offense for purposes of the Sixth Amendment’s jury trial guarantee and what constitutes an ‘offence’ for purposes of the Fifth Amendment’s Double Jeopardy Clause.”</p>

        <p>537 US at 111.<a
                href="#fn8"
                class="footnote-ref"
                id="fnref8"
                role="doc-noteref"
            ><sup>8</sup></a></p>

        <p>PRACTICE TIP: Defense counsel should rely on <em>Price</em> and <em>Sattazahn</em> to argue that when the prosecution secures a valid guilty verdict on the underlying felony, but fails to secure valid guilty verdicts on any enhancement facts, what the prosecution has secured is a valid guilty verdict on a lesser-included offense, with the lesser-included being the underlying felony. The associated greater offense is the underlying felony aggravated by any enhancement facts on which the state failed to secure valid guilty verdicts. Any resentencing trial on enhancement facts, or any effort to reopen the “trial” phase to try offense-specific enhancement facts (as was done in <em>Morris</em>), should be barred, because conviction on the lesser-included offense creates a double-jeopardy bar to subsequent prosecution for the greater offense. </p>

        <p>There is one last aspect of the resentencing authority, purportedly conferred by <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="792"
                data-subsection=""
            >ORS 136.792</a>, which should be addressed. The 2005 Legislature created that statute when it passed Senate Bill 528 (2005) (enrolled as Oregon Laws, chapter 463; codified at <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="760"
                data-subsection=""
            >ORS 136.760</a> to 136.792). At that time, hundreds of cases were on appeal that potentially could be reversed and remanded because prosecutors relied on the then-prevailing law, e.g., <a href="http://scholar.google.com/scholar_case?case=6575003508109610240&amp;q=336+Or+158&amp;hl=en&amp;as_sdt=2,38">State v. Dilts I</a>, 336 Or 158, 82 P3d 593 (2003), vacated sub nom, Dilts v. Oregon, 542 US 934 (2004) (mem.), which wrongly held that the <a href="http://scholar.google.com/scholar_case?case=4053038751252355308&amp;q=530+US+466&amp;hl=en&amp;as_sdt=2,38">Apprendi</a> rule did not apply to aggravated-departure factors. <a href="https://scholar.google.com/scholar_case?case=9590772109734549803&amp;q=State+v.+Upton&amp;hl=en&amp;as_sdt=4,38"><em>Upton</em></a>, 339 Or at 678, establishes that even before the Court’s <em>Apprendi</em>-clarification decision in <a href="http://scholar.google.com/scholar_case?q=Blakely+v.+Washington&amp;hl=en&amp;as_sdt=3,38&amp;case=16163203473167624369&amp;scilh=0">Blakely</a>, prosecutors could have secured jury trials on aggravating factors (presumably using the reasonable-doubt standard). Nevertheless, pre-<em>Blakely</em>, prosecutors could have reasonably relied on cases such as <em>Dilts I</em>, by waiting until sentencing hearings to seek to prove aggravating factors. The 2005 Legislature thus could have concluded that in all fairness, it should allow prosecutors, who relied on cases such as <em>Dilts I</em>, a post-<em>Blakely</em> opportunity on remand to prove aggravating factors consistent with <em>Apprendi</em>-rule requirements. </p>

        <p>But in cases originally sentenced after the Court’s decision in <em>Blakely</em>, prosecutors could not reasonably have relied on <em>Dilts I</em>—particularly because just four days after deciding <em>Blakely</em>, the Court vacated <em>Dilts I</em>. Since <em>Blakely</em>, prosecutors have been well aware of the application of the Apprendi rule and its requirements—including those imposed by SB 528. In cases that originally were sentenced after the Court’s decision in <em>Blakely</em>, and then were reversed and remanded for resentencing owing to violations of the Apprendi rule and its requirements, defense counsel should argue that <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="790"
                data-subsection=""
            >ORS 136.790</a> and 136.792 should be construed as precluding a “second bite at the apple” for prosecutors who, at original sentencing, could have and should have complied with <em>Apprendi</em>-rule requirements, but violated the rule anyway. </p>
        <h2 id="specific_attacksdue_process."><strong>§ 1-7.3. Specific Attacks—Due Process.</strong></h2>

        <p>Several due process principles apply in sentencing hearings. With respect to the defendant: “Due process * * * requires that [1] he be present [2] with counsel, [3] have an opportunity to be heard, [4] be confronted with the witnesses against him, [5] have the right to cross-examine, and [6] to offer evidence of his own. And [7] there must be findings adequate to make meaningful any appeal that is allowed.” <a href="https://scholar.google.com/scholar_case?case=3723552257968594646&amp;q=386+US+605&amp;hl=en&amp;as_sdt=3,38">Specht v. Patterson</a>, 386 US 605, 610, 87 S Ct 1209, 18 L Ed 2d 326 (1967).</p>

        <p>Oregon law appears to meet these due process requirements. For example:</p>

        <p>• The test for adequacy of notice is whether the notice was “‘reasonably calculated, under all the circumstances, to apprise interested parties of the pendency of the action and afford them an opportunity to present their objections.’” <a href="https://scholar.google.com/scholar_case?case=6026890540367791777&amp;q=534+US+161&amp;hl=en&amp;as_sdt=3,38">Dusenbery v. United States</a>, 534 US 161, 168, 122 S Ct 694, 151 L Ed 2d 597 (2002) (quoting <a href="https://scholar.google.com/scholar_case?case=7655817448479468134&amp;q=339+US+306&amp;hl=en&amp;as_sdt=3,38">Mullane v. Central Hanover Bank &amp; Trust Co.</a>, 339 US 306, 314, 70 S Ct 652, 95 L Ed 865 (1950)). Under SB 528, the state must give defendants reasonable notice of what the bill generically calls sentence “enhancement facts,” <em>i.e.</em>, facts that are subject to constitutional jury-trial requirements. <em>See</em> <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="760"
                data-subsection="(2)"
            >ORS 136.760(2)</a>. Moreover, OAR 213-013-0010(5) requires that any presentence investigation report (PSI) provide factual information regarding the defendant’s criminal history, and aggravating factors on which a departure sentence could be based. A PSI must be filed at least five judicial days before sentencing. <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="079"
                data-subsection="(1)"
            >ORS 137.079(1)</a>.</p>

        <p>• <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="030"
                data-subsection=""
            >ORS 137.030</a> requires the defendant’s presence at a felony sentencing. If a trial court wishes to amend a defendant’s sentence substantively, as opposed to making administrative amendments (<em>i.e.</em>, amendments made to correct technical sentencing errors in the judgment), the court must do so in open court with the defendant and defense counsel present. See Chapter 9.</p>
        <h2 id="june_2023_update_9"><strong>June 2023 Update</strong></h2>

        <p><em>See</em> <a href="https://scholar.google.com/scholar_case?case=10874516840185577520&amp;q=325+Or+App+574&amp;hl=en&amp;as_sdt=4,38&amp;as_vis=1">State v. Priester</a>, 325 Or App 574, 584, ___ P3d ___ (2023) (“[b]ecause [a condition of probation] was not made clear—either in the record prior to sentencing or as presented in open court—that * * * condition was imposed for the first time in the judgment,” the Court of Appeals “remand[ed] for resentencing”). [<strong>End Update</strong>]</p>

        <p>• Article I, section 11 of the Oregon Constitution entitles the defendant to adequate assistance of counsel at sentencing (at public expense if necessary). <a href="https://scholar.google.com/scholar_case?case=17458053645659494670&amp;q=293+Or.+312&amp;hl=en&amp;as_sdt=4,38">State ex rel. Russell v. Jones</a>, 293 Or 312, 315, 647 P2d 904 (1982). <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=13230265256853016840&amp;q=283+Or.+App.+444&amp;hl=en&amp;as_sdt=4,38">State v. Haines</a>, 283 Or App 444, 453-54, 388 P3d 365 (2017) (trial court committed reversible error by allowing defendant to proceed unrepresented at sentencing, without first ensuring he understood the risks of self-representation and knowingly waived counsel). </p>

        <p>• The defendant has the right to be heard (allocution) at sentencing, and he has the right to offer relevant evidence. <em>See</em> DeAngelo v. Schiedler, 306 Or 91, 94-95, 757 P2d 1355 (1988) (citing Or Const, Art I, § 11); <a href="https://scholar.google.com/scholar_case?case=16337675952591549735&amp;q=172+Or.+App.+634&amp;hl=en&amp;as_sdt=4,38">State v. Southards</a>, 172 Or App 634, 21 P3d 123 (2001); <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="100"
                data-subsection=""
            >ORS 137.100</a>. <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=3900238886600042852&amp;q=342+F.3d+911&amp;hl=en&amp;as_sdt=3,38">Gill v. Ayers</a>, 342 F3d 911, 919-20 (9th Cir 2003) (trial court’s refusal to allow defendant to explain incriminating statements he made in PSI interview years beforehand in different case, which prior case was used as a “strike” under state’s “three-strikes” sentencing law, violated defendant’s due process rights). </p>

        <p>• The defendant has the right to adequate findings of fact. <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="671"
                data-subsection="(2)"
            >ORS 137.671(2)</a>; OAR 213-008-0001.</p>

        <p>• The exclusionary rule of Article I, section 9, of the Oregon Constitution applies in sentencing hearings. <a href="http://scholar.google.com/scholar_case?q=State+v.+Swartzendruber&amp;hl=en&amp;as_sdt=4,38&amp;case=17190678634246604135&amp;scilh=0">State v. Swartzendruber</a>, 120 Or App 552, 557-58, 853 P2d 842 (1993).</p>

        <p>• <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="090"
                data-subsection="(c)"
            >ORS 137.090(c)</a> declares that evidence is admissible only if the court finds that it is “trustworthy and reliable.” This appears to be a codification of constitutional confrontation clause requirements, for the phrase “trustworthy and reliable” often is used as a shorthand description of the confrontation-clause test. <em>See</em> Section 1-7.7.</p>

        <p><a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="020"
                data-subsection="(a)"
            >ORS 137.020(a)</a> bears on the first two bulleted items above:</p>

        <p>“The time appointed shall be at least two calendar days after the plea or verdict if the court intends to remain in session so long. If the court does not intend to remain in session at least two calendar days, the time appointed may be sooner than two calendar days, but shall be as remote a time as can reasonably be allowed. However, in the latter case, the judgment shall not be given less than six hours after the plea or verdict, except with the consent of the defendant.”</p>

        <p>The Court of Appeals explained that the purpose of this statute</p>

        <p>“is ‘to give the defendant time for such further proceedings as may be deemed necessary to protect his rights, including the right to file a motion for new trial or in arrest of judgment.’ <em>Boykin v. State</em>, 190 P2d 471, 472 (Okla Crim App 1948). In a similar vein, the Kentucky Court of Appeals described the purpose of that state’s parallel statute as follows:</p>
        <blockquote>

            <p>“‘[I]t contains a most solemn and vital right of the accused. Its meaning is upon the surface. It requires no reflection to understand it. It was enacted for the express purpose of giving the accused time in which to show cause against the sentence about to be passed upon him.’</p>
        </blockquote>

        <p>“<em>Powers v. Commonwealth</em>, 83 SW 146, 148 (Ky App 1904).</p>

        <p>“Thus, for example, a defendant might rely on the statutory right in order to (1) consider calling witnesses or adducing other mitigating evidence at sentencing; (2) prepare for his or her allocution; and (3) prepare motions—such as defendant’s motion to challenge one of his previous DUII convictions in this case—relating to the duration, terms, and conditions of the sentence, where uncertain issues of law may be implicated.”</p>

        <p><a href="https://scholar.google.com/scholar_case?case=2878080622500178375&amp;q=252+Or.+App.+85&amp;hl=en&amp;as_sdt=4,38">State v. Dawson</a>, 252 Or App 85, 91, 284 P3d 1272 (2012).</p>

        <p>In <em>Dawson</em>, the trial court erroneously denied the defendant’s request for a two-calendar-day delay. Instead, the court allowed him only a 30-second delay. 252 Or App at 87. Rejecting the state’s claim that the defendant had not shown that he was prejudiced by the error, the Court of Appeals reversed. It explained:</p>

        <p>“[T]here also is another, more subtle, purpose instinct [<em>sic</em>] in statutes like <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="020"
                data-subsection="(a)"
            >ORS 137.020(a)</a>; that is, to create a measure of distance between the sentencing proceeding and the momentum to pronounce final judgment that often exists in the wake of a criminal trial.</p>

        <p>“That concern is manifest in this case. The trial judge acknowledged that the case had had an emotional impact on him; on at least two occasions, he expressed strong contempt for defendant as a perjurer and dangerous individual. The issue before us is not whether the court’s assessment of defendant’s character was accurate. Nor is the issue whether, given more time to reflect, the court would have imposed the same or a different sentence. Rather, our focus is on the court’s disregard of an important statutory right that has existed in this state for more than a century and a half and whose purpose, in part, is to ensure the deliberate and carefully considered pronouncement of judgment in criminal cases. On the record before us, the court’s error prejudiced defendant with respect to a substantial right.”</p>

        <p><a href="https://scholar.google.com/scholar_case?case=2878080622500178375&amp;q=252+Or.+App.+85&amp;hl=en&amp;as_sdt=4,38">Id</a>. at 91-92 (citations omitted).</p>

        <p>Finally, it is well worth recognizing that sentencing laws may be challenged under due process vagueness principles. For example, in <a href="https://www.supremecourt.gov/opinions/14pdf/13-7120_p86b.pdf">Johnson v. United States</a>, 576 US ___, 135 S Ct 2551, 192 L Ed 2d 569 (2015), the Court answered a due process vagueness challenge to the so-called “residual clause” of the federal Armed Career Criminal Act. That clause applies to any felony that “involves conduct that presents a serious potential risk of physical injury to another.” The lower courts applied the clause to the defendant’s prior conviction for unlawful possession of a sawed-off shotgun. The Supreme Court reversed on the grounds that (i) the clause ties the judicial assessment of risk to a judicially imagined “ordinary case” of a crime, rather than to real-world facts or statutory elements; and (ii) the clause leaves grave uncertainty about how to estimate the risk posed by a crime.</p>
        <h2 id="specific_attacksnotice_of_intent_to_prove_enhancement_facts."><strong>§ 1-7.4. Specific Attacks—Notice of Intent to Prove Enhancement Facts.</strong></h2>

        <p>Felony cases subject to SB 528’s requirements for proving “enhancement facts” frequently present a serious pleading problem. In a case where the defendant awaits original sentencing, the bill originally authorized the state to notify a defendant of its intent to prove enhancement facts either by “[p]leading the enhancement fact in the accusatory instrument,” or, “[w]ithin a reasonable time after filing the accusatory instrument, providing written notice to the defendant of the enhancement fact[.]” <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="765"
                data-subsection="(2)"
            >ORS 136.765(2)</a>.</p>

        <p>Similar to pre-sentencing cases, in a case where the defendant is awaiting a resentencing ordered by a reviewing court, the bill authorizes the state to notify a defendant of its intent to prove enhancement facts by providing, “within a reasonable time before resentencing, * * * written notice to the defendant of the enhancement fact and the state’s intention to rely on it.” <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="790"
                data-subsection=""
            >ORS 136.790</a>.</p>

        <p>The 2011 Legislature amended <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="765"
                data-subsection="(2)"
            >ORS 136.765(2)</a>, but not <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="790"
                data-subsection=""
            >ORS 136.790</a>. As amended, <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="765"
                data-subsection="(2)"
            >ORS 136.765(2)</a> provides that the prosecution must give notice of its intent to prove enhancement facts “no later than 60 days after the defendant is arraigned on an indictment, waives indictment or is held to answer following a preliminary hearing, or 14 days before trial, whichever occurs earlier, unless the parties agree otherwise or the court authorizes a later date for good cause shown.” The bill took effect on June 7, 2011, and applies “to criminal prosecutions commenced on or after [its] effective date[.]” Or Laws 2011, ch 267, § 2.</p>

        <p>Pre-amendment case law should provide guidance on what constitutes “good cause shown” under <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="765"
                data-subsection="(2)"
            >ORS 136.765(2)</a>, and provides guidance on what constitutes “a reasonable time before resentencing,” as <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="790"
                data-subsection=""
            >ORS 136.790</a> still requires. For example, the Court of Appeals held that where the state gave notice of intent several months after indictment, but promptly after SB 528 took effect, the timing was reasonable. <a href="http://scholar.google.com/scholar_case?q=State+v.+Wick&amp;hl=en&amp;as_sdt=4,38&amp;case=6546075416969416320&amp;scilh=0">State v. Wick</a>, 216 Or App 404, 410–11, 173 P3d 1231 (2007).</p>

        <p>Moreover, in <a href="http://scholar.google.com/scholar_case?q=231+Or+App+263&amp;hl=en&amp;as_sdt=2,38&amp;case=8386834660787049611&amp;scilh=0">State v. Roberts</a>, 231 Or App 263, 273, 219 P3d 41 (2009), the court</p>

        <p>“conclude[d] that the requirement of <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="765"
                data-subsection=""
            >ORS 136.765</a> that the state provide a defendant with notice of its intention to rely on enhancement facts ‘[w]ithin a reasonable time’ is intended to be time sufficient to allow the defendant to prepare a defense against those particular enhancement facts.&nbsp;Whether a time is adequate for a defendant to prepare a defense will depend on the circumstances in each case.&nbsp;One of those circumstances is whether the enhancement fact is one that will be submitted at the guilt phase or at the sentencing phase of the criminal proceeding.”</p>

        <p>In <em>Roberts</em>, the day before trial the state gave the defendant notice of its intent to seek two enhancement facts. Both</p>

        <p>“enhancement facts related to defendant[, <em>i.e.</em>, were offender specific,] and would not be tried until the sentencing phase of defendant’s criminal proceeding.&nbsp;<em>See</em> <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="773"
                data-subsection=""
            >ORS 136.773</a>.&nbsp;There is no indication in the text of <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="765"
                data-subsection=""
            >ORS 136.765</a> or in its legislative history that the legislature intended the guilt phase of the criminal proceeding to be the deadline for notice of all enhancement facts, whether they be related to the offense or related to the defendant.</p>

        <p>“Instead, the question before us is whether defendant had an adequate time to prepare his defense against the enhancement facts alleged in this case—that is, the facts that he was on post-prison supervision when he committed the offenses and that he has been persistently involved in similar offenses.&nbsp;The answer to that question is straightforward in this case, especially in light of the fact that defendant has made no assertion to the contrary.&nbsp;Regardless, we conclude that he had ample time to prepare a defense.&nbsp;After the guilty verdict, defendant requested one week to prepare for sentencing; the court scheduled the sentencing hearing nearly two weeks out.&nbsp;The enhancement facts at issue in this case—that defendant was on post-prison supervision when he committed the offenses and that he had been persistently involved in similar offenses—are straightforward allegations for which nearly two weeks is sufficient time to prepare a defense, particularly in the absence of any contrary contention by the defendant.”</p>

        <p><em>Roberts</em>, 231 Or App at 273 (court’s emphasis).</p>

        <p>PRACTICE TIP: The <a href="http://scholar.google.com/scholar_case?q=231+Or+App+263&amp;hl=en&amp;as_sdt=2,38&amp;case=8386834660787049611&amp;scilh=0">Roberts</a> court may well have decided the case differently if the case had involved offense-specific enhancement facts, because then the facts most likely would had to have been tried in guilt phase, rather than in the penalty phase. Had that been the situation, the defendant would have had only one day before trial to prepare an adequate defense to the enhancement facts. Consequently, Roberts provides no real guidance guidance on the meaning of the phrase, “[w]ithin a reasonable time,” in the context of notices of intent to prove offense-specific enhancement facts.</p>

        <p>In <a href="https://scholar.google.com/scholar_case?case=5244680610375180009&amp;q=236+Or.+App.+350&amp;hl=en&amp;as_sdt=4,38">State v. Boitz</a>, 236 Or App 350, 236 P3d 766 (2010), the state submitted a notice of intent to prove enhancement facts, alleging that the defendant was on release pending criminal charges when he committed his crime. But at that time the defendant was on probation for prior convictions, and no charges were pending against him. He moved for judgment of acquittal on the alleged enhancement fact, and then appealed the trial court’s denial of his motion. The state then</p>

        <p>“argue[d] that the trial court correctly determined that defendant’s probationary status established that defendant was on release status from pending criminal charges. In addition, the state argue[d] that, even if proof that defendant was on probation is not proof that he was on release from ‘pending criminal charges,’ that variance was ‘not a material aspect of the allegation and was surplusage.’”</p>

        <p><em>Boitz</em>, 236 Or App at 353.</p>

        <p>The Court of Appeals rejected these arguments. It explained,</p>

        <p>“The state’s written notice provided defendant with notice of an enhancement fact that alleged that defendant committed the crimes while he was on release from ‘pending criminal charges.’ We agree with defendant that proof that he was on probation is not proof that he was on release from ‘pending criminal charges.’ Consequently, the state did not prove the enhancement fact as alleged in its notice.”</p>

        <p><em>Id</em>. at 354.</p>

        <p>With regards to the state’s alternative argument, that the variance between its proof and the allegation in its notice of intent was “not a material aspect of the allegation and was surplusage,” the court explained that the argument presents</p>

        <p>“an issue of first impression: whether a trial court could permissibly find a sentencing enhancement fact that varies in some manner from the enhancement fact alleged in the state’s notice pursuant to <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="765"
                data-subsection=""
            >ORS 136.765</a>.</p>

        <p>“A defendant’s decision whether to elect to have a jury or the court determine the facts alleged in the state’s sentencing enhancement fact notice implicates similar concerns as those confronted by a defendant deciding whether to have a jury or the trial court determine the facts alleged in an accusatory instrument.”</p>

        <p><em>Id</em>. at 355.</p>

        <p>The court “[c]onclude[d] that any variance between the allegations in the sentencing enhancement fact notice and the proof at sentencing may be permissible only if it satisfies the test described in [<a href="http://scholar.google.com/scholar_case?q=179+Or+App+1&amp;hl=en&amp;as_sdt=2,38&amp;case=16203122264413544179&amp;scilh=0">State v. Newman</a>, 179 Or App 1, 7, 39 P3d 874 (2002)].” <a href="http://scholar.google.com/scholar_case?q=236+Or+App+350&amp;hl=en&amp;as_sdt=2,38&amp;case=5244680610375180009&amp;scilh=0">Id</a>. Applying that conclusion, the court held:</p>

        <p>“Under [the <em>Newman</em>] test, the variance here is not permissible. We need not decide whether the phrase ‘pending criminal charges’ is material to the state’s allegation of a sentencing enhancement fact because, even if the state is correct that the phrase does not relate to a ‘material element’ of the sentencing enhancement fact, the second prong of the test—whether the variance between the allegation and the proof caused prejudice to defendant’s defense of this case—controls the outcome of this case. Whether a variance is prejudicial depends on the specific theories under which a case is argued. Specifically, where an amendment would require a defendant to develop a different argument, the amendment is prejudicial to defendant.</p>

        <p>“Here, defendant defended against the second enhancement fact on the theory that he did not commit this offense while criminal charges were pending. Accordingly, because defendant believed that he could defeat the second enhancement fact on that theory, the amendment of the notice to excise that phrase would have required defendant to develop a different theory to refute that enhancement fact. Thus, such an amendment would have been prejudicial in this case.[]</p>

        <p>“The fact that defendant had notice that his probationary status was at issue under the first enhancement fact is immaterial to our conclusion. The issue is not whether defendant could have presented alternative theories to defeat a different enhancement fact; the issue is whether defendant would be prejudiced by a finding that differed from the language in the notice.”</p>

        <p><em>Id</em>. at 356.</p>

        <p>Finally, in <a href="http://scholar.google.com/scholar_case?case=2146171932880182182&amp;q=255+Or+App+594&amp;hl=en&amp;as_sdt=2,38">State v. Alexander</a>, 255 Or App 594, 298 P3d 55 (2013), the notice of intent listed 18 potential aggravating factors and, without specifying any particular factor on which the prosecution intended to rely, told the defendant only that the state “may” seek an aggravated-departure sentence. Given this lack of specificity, the Court of Appeals held that the notice did not meet the requirements of <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="765"
                data-subsection="(2)"
            >ORS 136.765(2)</a>, and invalidated the aggravated departure the trial court subsequently imposed. The court explained:</p>
        <blockquote>

            <p>“Given the statutory text in the totality of its context, it is patent that the legislature intended an ‘enhancement fact’ to be a specific thing and not—as the state would have it—an entire constellation of unspecified possible things. Accordingly, a ‘notice’ that the state ‘may’ rely on any of individual departure factors (including some ineffable ‘[o]ther’)—or any combination thereof5—is the functional equivalent of ‘That’s for us to know and you to find out.’ It is no notice at all.<br>         ____________<br>         “5 In the abstract, and without accounting for the unrestrictive nature         of ‘[o]ther,’ the State’s position embraces at least 262,143 possible         combinations of sentencing factors.”</p>
        </blockquote>

        <p><a href="http://scholar.google.com/scholar_case?case=2146171932880182182&amp;">Alexander</a>, 255 Or App at 599-600.</p>

        <p>In a somewhat similar vein, in <a href="https://scholar.google.com/scholar_case?case=646127219315602444&amp;q=278+Or+App+812&amp;hl=en&amp;as_sdt=6,48">State v. Teeters</a>, 278 Or App 812, 379 P3d 839 (2016) (<em>per curiam</em>), the defendant challenged the trial court’s imposition of an aggravated departure on multiple grounds, including that the court relied on one or more enhancement facts the state had not included in its notice of intent. The Court of Appeals agreed that “the sentencing court erred to the extent it relied on any enhancement fact other than those [contained in the state’s notice] to increase [the] sentence.” 278 Or App at 814. <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=17047576215171544442&amp;q=280+Or+App+43&amp;hl=en&amp;as_sdt=6,48">State v. Davilla</a>, 280 Or App 43, 65, 380 P3d 1003 (2016) (where it was unclear whether trial court, in imposing departure sentence, relied on enhancement facts other than those on which the state gave notice of intent, Court of Appeals concluded that it “must remand for resentencing”).</p>

        <p>But there remains a fundamental constitutional problem with notices of intent to prove enhancement facts. In almost all felony cases, the accusatory instrument is an indictment. Indictments are returned by the grand jury, not by a state prosecutor. <em>See</em> <a href="http://scholar.google.com/scholar_case?q=State+v.+Gonzales&amp;hl=en&amp;as_sdt=4,38&amp;case=7212687640111209177&amp;scilh=0">State v. Gonzales</a>, 56 Or App 17, 20-21, 641 P2d 42, <em>rev den</em>, 293 Or 104 (1982) (rather than being “an investigative tool of the prosecutor,” the grand jury “is part of the judicial branch”). If the state pleads enhancement facts in a separate notice of intent, the defendant may argue that the enhancement facts may not be submitted to the jury. This is because “each aggravating or enhancing factor is a new ‘material element’ of the charged offense[.]” <a href="http://scholar.google.com/scholar_case?q=State+v.+Upton&amp;hl=en&amp;as_sdt=4,38&amp;case=9590772109734549803&amp;scilh=0">Upton</a>, 339 Or at 681. Indeed, in rejecting the government’s argument that the <a href="http://scholar.google.com/scholar_case?q=530+US+466&amp;hl=en&amp;as_sdt=2,38&amp;case=4053038751252355308&amp;scilh=0">Apprendi</a> rule does not apply to factual findings required to impose a fine upon conviction, the United States Supreme Court observed: </p>

        <p>“This argument has two defects. First, it rests on an assumption that <a href="http://scholar.google.com/scholar_case?q=530+US+466&amp;hl=en&amp;as_sdt=2,38&amp;case=4053038751252355308&amp;scilh=0">Apprendi</a> and its progeny have uniformly rejected: that in determining the maximum punishment for an offense, there is a constitutionally significant difference between a fact that is an ‘element’ of the offense and one that is a ‘sentencing factor.’ <em>See, e.g.</em>, 530 US at 478; <a href="https://scholar.google.com/scholar_case?case=13989927396342823081&amp;q=ring+v+arizona&amp;hl=en&amp;as_sdt=6,48">Ring</a>, 536 US at 605.” </p>

        <p><a href="http://www.supremecourt.gov/opinions/11pdf/11-94a1b2.pdf">Southern Union Co. v. United States</a>, 567 US 343, 358-59, 132 S Ct 2344, 183 L Ed 2d 318 (2012).</p>

        <p>This is consistent with well established law that where the imposition of [a] higher sentence may be justified because of aggravation, the aggravation relied upon as calling for the higher sentence must be charged in the indictment.” <a href="http://scholar.google.com/scholar_case?q=Merrill+v.+Gladden&amp;hl=en&amp;as_sdt=4,38&amp;case=13909438341101730735&amp;scilh=0">Merrill v. Gladden</a>, 216 Or 460, 468, 337 P2d 774 (1959) (citing sources).</p>

        <p>A notice of intent will not have been issued by the grand jury; instead, it will have been issued by the district attorney. The addition of material elements such as enhancement facts substantively amends the indictment. <em>See</em> <a href="https://scholar.google.com/scholar_case?case=1788930374753749549&amp;q=255+F3d+714&amp;hl=en&amp;as_sdt=6,48">United States v. Antonakeas</a>, 255 F3d 714, 721 (9th Cir 2001) (citing <a href="http://scholar.google.com/scholar_case?q=United+States+v.+Miller&amp;hl=en&amp;as_sdt=3,38&amp;case=7616798149539712156&amp;s">United States v. Miller</a>, 471 US 130, 144-45, 105 S Ct 1811, 85 L Ed 2d 99 (1985); and holding that when the jury considers a charge that is so altered that it charges a different offense from that found in the indictment, the indictment has been constructively amended). “[A]n indictment must be resubmitted to the grand jury if it is to be amended substantively.” <a href="http://scholar.google.com/scholar_case?q=State+v.+Dinsmore+II&amp;hl=en&amp;as_sdt=4,38&amp;case=4669974170051790903&amp;scilh=0">State v. Dinsmore II</a>, 200 Or App 432, 437, 116 P3d 226 (2005), aff’d, 342 Or 1, 147 P3d 1146 (2006).</p>

        <p>Because a notice of intent is not issued by the grand jury, but instead is issued by the district attorney, the only charging instrument it possibly may be is a district attorney’s information. So although a notice of intent is not labeled an information, it serves the same function as an information, so may be labeled an “information-in-fact.” The defendant may be tried on the allegations of an information, or an information-in-fact, only if (a) he waives his right to grand jury indictment on the allegations, Or Const, Art VII (Amended), § 5(3), or (b) he is afforded a preliminary hearing on the allegations, or (c) he waives both grand jury and preliminary hearing on the allegations. Or Const, Art VII (Amended), § 5(4) and (5).</p>

        <p>It is important to recognize the fundamental significance of Article VII (Amended), section 5. District attorneys initiate prosecutions, but not without judicial review (or the defendant’s waiver of his right to judicial review). If a district attorney wishes to proceed to trial on an information in a felony case, then assuming no waiver by the defendant, the judiciary checks the charging decision by conducting a preliminary hearing. Or Const, Art VII (Amended), § 5(5). Otherwise, and again assuming no waiver by the defendant, the judiciary checks the charging decision by requiring the district attorney to present his case to the grand jury. Or Const, Art VII (Amended), § 5(3). <em>See also</em> <a href="http://scholar.google.com/scholar_case?q=State+v.+Gonzales&amp;hl=en&amp;as_sdt=4,38&amp;case=7212687640111209177&amp;scilh=0">Gonzales</a>, 56 Or App at 20-21 (the grand jury “is part of the judicial branch”).</p>

        <p>Thus, Article VII (Amended), section 5 establishes that judicial review of district attorneys’ charging decisions is part of the checks and balances inherent within the state constitution’s separation of powers. As the Supreme Court has explained:</p>

        <p>“Subsection (6) of Article VII (Amended), section 5, addresses the amendment of those accusatory instruments and provides that the state may file an amended ‘indictment or information’ when a court rules that that instrument is ‘defective in form.’ Although that text is permissive, this court has long recognized that we must read it in conjunction with subsections (3) to (5) of section 5 and that, when read together, those provisions impose limits on the power of the prosecutor. The constitutionally required roles of the grand jury and the magistrate in felony cases operate as a check on the power of the district attorney and serve a critical function in protecting individual liberties. <em>See</em> [<a href="http://scholar.google.com/scholar_case?q=344+Or+482&amp;hl=en&amp;as_sdt=2,38&amp;case=5669116807655308146&amp;scilh=0">State v. Pachmayr</a>, 344 Or 482, 495, 185 P3d 1103 (2008)]; <a href="http://scholar.google.com/scholar_case?q=State+v.+Burleson&amp;hl=en&amp;as_sdt=4,38&amp;case=5773620502103617300&amp;scilh=0">State v. Burleson</a>, 342 Or 697, 703, 160 P3d 624 (2007) (discussing role of grand jury); <em>see also</em> <a href="https://scholar.google.com/scholar_case?case=14678438841309438881&amp;q=State+v.+Freeland+Oregon&amp;hl=en&amp;as_sdt=6,48">State v. Freeland</a>, 295 Or 367, 369, 667 P2d (1983) (discussing role of magistrate). Thus, this court has held that, although Article VII (Amended), section 5(6), permits district attorneys to file amended accusatory instruments to correct defects that are purely matters of form, the state must return to the grand jury or a magistrate if it wishes to make substantive amendments to felony indictments or informations.” </p>

        <p><a href="http://scholar.google.com/scholar_case?q=345+Or+479&amp;hl=en&amp;as_sdt=2,38&amp;case=6683257749144312521&amp;scilh=0">Kuznetsov</a>, 345 Or at 484.</p>

        <p>These separation of powers principles support the claim that to the extent SB 528 authorizes district attorneys to avoid judicial review of their decisions to charge “enhancement facts,” by pleading them in informations-in-fact that are exempt from preliminary hearings, the bill violates the state constitution’s separation of powers. Or Const, Art III, § 1.</p>

        <p>Finally, it must be recognized that despite these various arguments that pleading enhancement facts in a “notice of intent” without a preliminary hearing is unconstitutional, in <a href="https://scholar.google.com/scholar_case?case=2315520676881622046&amp;q=354+Or+98&amp;hl=en&amp;as_sdt=6,48"><em>State v. Reinke</em></a>, 354 Or 98, 309 P3d 1059, <em>adh’d to as modified on recons</em>, 354 Or 570, 316 P3d 286 (2013), the court held that such pleading is constitutional. The crux of the <em>Reinke</em> court’s decision is that the Oregon Constitution requires the grand jury to find and plead only the elements of the crime as defined by the legislature. According to <em>Reinke</em>, the legislature has not defined sentence-enhancement facts as elements of a crime; therefore, prosecutors may use notices of intent, without preliminary hearings, as an alternative means of notifying defendants of sentence enhancements facts.</p>
        <h2 id="june_2023_update_10"><strong>June 2023 Update</strong></h2>

        <p>Most recently, in <a href="https://scholar.google.com/scholar?hl=en&amp;as_sdt=4%2C38&amp;q=State+v.+Newkirk%2C+319+Or+App+131%2C+___+P3d+___+%282022%29&amp;btnG=">State v. Newkirk</a>, 319 Or App 131, 509 P3d 757 (2022), the Court of Appeals relied on <em>Reinke</em> and <a href="https://scholar.google.com/scholar_case?case=1776527263855738233&amp;q=110+US+516&amp;hl=en&amp;as_sdt=6,38">Hurtado v. California</a>, 110 US 516, 4 S Ct 111, 28 L Ed 232 (1884) and held that the trial court did not err by relying on enhancement factors that were not approved by a grand jury or through a preliminary hearing. This was, however, a baffling decision. <em>Hurtado</em> held that an information followed by preliminary hearing is an acceptable substitute for indictment and meets due process requirements. 110 US at 538. Thus, one type of proceeding or the other <strong>may</strong> be used, but one or the other type <strong>must</strong> be used. Yet the <em>Newkirk</em> court wrote in violation of due process, because that court claimed that <em>Hurtado</em> allows ignoring <strong>both</strong> types of proceedings. </p>

        <p>[<strong>End Update</strong>]</p>

        <p>But the <em>Reinke</em> court failed to recognize and address the fact that its decision conflicts with the court’s earlier decision in Upton. There, the indictment alleged two enhancement facts: Aggravating Factor B, particularly vulnerable victim, OAR 213-008-0002(1)(b)(B), and Aggravating Factor D, persistent involvement in similar offenses, OAR 213-008-0002(1)(b)(D)). 339 Or at 676. Relying on the then-extant version of <a
                href="#"
                data-action="show-ors"
                data-chapter="132"
                data-section="540"
                data-subsection="(2)"
            >ORS 132.540(2)</a>, defendant Upton demurred to the Factor D allegation. The statute stated: “The indictment shall not contain allegations that the defendant has previously been convicted of the violation of any statute which may subject the defendant to enhanced penalties, except where the conviction constitutes a material element of the crime charged.” <em>Id.</em> (emphasis added). The trial court sustained the demurrer the Factor D allegation. <em>Upton</em>, 339 Or at 687.</p>

        <p>On mandamus review, the Supreme Court accepted the state’s argument that “any fact that supports an enhanced sentence is, in effect, a ‘material element’ of the charged offense, which a criminal defendant can require the state to prove to a jury beyond a reasonable doubt.” <em>Upton</em>, 339 Or at 681. Moreover, the court explained, SB 528 “now permits the pleading of an ‘enhancement fact’ in an accusatory instrument. As a result, despite <a
                href="#"
                data-action="show-ors"
                data-chapter="132"
                data-section="540"
                data-subsection="(2)"
            >ORS 132.540(2)</a>, the indictment in this case properly makes reference to defendant’s alleged prior convictions.” <em>Upton</em>, 339 Or at 688. <em>Accord</em> <a href="https://scholar.google.com/scholar_case?case=11725739818668781775&amp;q=183+Or+App+245&amp;hl=en&amp;as_sdt=6,48">State v. Reynolds</a>, 183 Or App 245, 51 P3d 684 (2002) (trial court erred in granting demurrer to portion of a felony fourth-degree assault indictment alleging a predicate, prior-assault conviction, for predicate conviction was not merely a penalty enhancer but instead was a material element of the crime). </p>
        <h2 id="june_2023_update_11"><strong>June 2023 Update</strong></h2>

        <p>Moreover, Sixth Amendment case law <strong>absolutely</strong> establishes that matters subject to the <em>Apprendi</em> rule <strong>are crime elements</strong>. <a href="https://scholar.google.com/scholar_case?case=2106370146029758456&amp;q=136+S+Ct+616&amp;hl=en&amp;as_sdt=6,48">Hurst v. Florida</a>, 577 US 92, 97–98, 136 S Ct 616, 193 L Ed 2d 504 (2016); <em>Alleyne</em>, 570 US at 103; <a href="https://scholar.google.com/scholar_case?case=13989927396342823081&amp;q=536+US+584&amp;hl=en&amp;as_sdt=6,48">Ring v. Arizona</a>, 536 US 584, 605, 122 S Ct 2428, 153 L Ed 2d 556 (2002); <em>Apprendi</em>, 530 US at 478. </p>

        <p><strong>PRACTICE TIP</strong>: <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="095"
                data-subsection="(2)"
            >ORS 161.095(2)</a> states: “Except as provided in <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="105"
                data-subsection=""
            >ORS 161.105</a>, a person is not guilty of an offense unless the person acts with a culpable mental state with respect to each material element of the offense that necessarily requires a culpable mental state.” The <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="105"
                data-subsection=""
            >ORS 161.105</a> exceptions apply to offenses within the criminal code but are “violations” rather than “crimes,” and to crimes defined outside the criminal code. Aggravating factors typically are attached to crimes defined within the criminal code. Consequently, under the cases cited above, defense counsel should argue that because aggravating factors are attached to crimes within the criminal code, the factors are material elements carrying culpable mental states. <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="095"
                data-subsection="(2)"
            >ORS 161.095(2)</a>.<a
                href="#fn9"
                class="footnote-ref"
                id="fnref9"
                role="doc-noteref"
            ><sup>9</sup></a><em><br> <br> </em>The same argument may be made with respect to subclassification factors discussed in Chapter 2. Such factors are used to increase crime seriousness levels.</p>

        <p>Nearly 30 years worth of case law holds that subclassification factors do not carry mental state requirements. Section 2-1.2. But <a href="https://scholar.google.com/scholar_case?case=12618102844565582188&amp;q=288+Or+App+364&amp;hl=en&amp;as_sdt=4,38">State v. Morris</a>, 288 Or App 364, 372-75, 404 P3d 951 (2017) holds that like aggravating factors, subclassification factors are “enhancement facts”—<em>i.e.</em>, they are facts that are subject to the <em>Apprendi</em> rule, in that they are “constitutionally required to be found by a jury in order to increase the sentence that may be imposed upon conviction of a crime.” <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="760"
                data-subsection="(2)"
            >ORS 136.760(2)</a>. Consequently, under the cases cited above, defense counsel should argue that because subclassification factors are attached to crimes within the criminal code, the factors are material elements carrying culpable mental states. <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="095"
                data-subsection="(2)"
            >ORS 161.095(2)</a>. </p>

        <p><strong>[End Update]</strong></p>

        <p>Finally, the court concluded:</p>

        <p>“The trial court in this case did, as a matter of law, have the authority to submit the alleged ‘persistent involvement’ and ‘vulnerable victim’ enhancement factors to a jury in compliance with the [defendant’s] constitutional jury trial right * * * . Consequently, the trial court’s ruling that it did not have the authority to submit the alleged enhancing factors to the jury at defendant’s trial was error.”</p>

        <p><em>Upton</em>, 339 Or at 688.</p>

        <p>This part of the <em>Upton</em> court’s opinion mischaracterizes the trial court’s ruling. The trial court never ruled that it lacked “the authority to submit the alleged enhancing factors to the jury”; it only ruled—albeit erroneously—that the indictment alleged Aggravating Factor D in the violation of the then-extant version of <a
                href="#"
                data-action="show-ors"
                data-chapter="132"
                data-section="540"
                data-subsection="(2)"
            >ORS 132.540(2)</a>. That ruling left the state free to submit the indictment’s other alleged enhancement fact, Aggravating Factor B. Moreover, the <em>Upton</em> court failed to consider <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="765"
                data-subsection="(2)"
            >ORS 136.765(2)</a>, which necessarily was at issue in the case, and which, by its terms, authorized submitting Aggravating Factor D to the jury, by allowing the state to allege it in a notice of intent.</p>

        <p>In any event, as mentioned, the <em>Upton</em> court decided the case by exercising the “extraordinary remedy” of granting mandamus relief. <em>See, e.g.</em>, <a href="https://scholar.google.com/scholar_case?case=7113876950529889849&amp;q=326+Or+607&amp;hl=en&amp;as_sdt=6,48">State ex rel Carlile v. Frost</a>, 326 Or 607, 620, 956 P2d 202 (1998). This implicates <a
                href="#"
                data-action="show-ors"
                data-chapter="34"
                data-section="110"
                data-subsection=""
            >ORS 34.110</a>, which states: </p>

        <p>“A writ of mandamus may be issued to any inferior court * * * to compel the performance of an act which the law specially enjoins, as a duty resulting from an office, trust or station; but though the writ may require such court * * * to exercise judgment, or proceed to the discharge of any functions, it shall not control judicial discretion.”</p>

        <p>(Emphasis added.)</p>

        <p>Thus, the Supreme Court may not exercise mandamus jurisdiction to tell a lower court how to exercise discretion within its permissible range. It may exercise mandamus jurisdiction only to compel the exercise of a judicial function the court is legally obliged to perform, including by reining in a court that has acted outside its permissible range of discretion. <em>See, e.g.</em>, <a href="http://scholar.google.com/scholar_case?case=15088792834699755160&amp;q=317+Or+615&amp;hl=en&amp;as_sdt=4,38">State ex rel Keisling v. Norblad</a>, 317 Or 615, 623, 860 P2d 241 (1993).</p>

        <p>This means that when the <em>Upton</em> court granted mandamus relief, it necessarily concluded—as a matter of law—that enhancement facts, such as aggravating factors, are “material elements” whose inclusion in indictments is not just allowed, but is required. After all, the only issue actually before the court was the validity of the trial court’s order sustaining the defendant’s demurrer to the indictment’s allegation of Aggravating Factor D. If an indictment’s allegation of enhancement facts was merely allowed, rather than required, the trial court’s decision to sustain the demurrer would have been within its range of discretion. The Supreme Court would have lacked mandamus jurisdiction to address the matter, and to issue a decision reversing the trial court’s order sustaining the demurrer.</p>

        <p>In sum, <em>Reinke</em> and <em>Upton</em> addressed the exact same question—are enhancement facts “material elements” that must be alleged by indictment (or by information followed by a preliminary hearing)? <em>Reinke</em> says no, but <em>Upton</em>, despite its mischaracterization of the trial court’s order, says yes. Thus, the court answered the same question in polar opposite ways. </p>

        <p>The parties in <em>Reinke</em> did not address <em>Upton</em> in their briefing. Likewise, the <em>Reinke</em> court did not address <em>Upton</em> in its decision. This necessarily means that <em>Reinke</em> is not stare decisis on the question of whether <em>Reinke</em> should be reconsidered in light of <em>Upton</em> and in favor of holding that enhancement facts must be pled in the indictment (or in an information followed by preliminary hearing). <em>See</em> <a href="https://scholar.google.com/scholar_case?case=16116926811622477424&amp;q=331+Or+38&amp;hl=en&amp;as_sdt=6,48">Stranahan v. Fred Meyer, Inc.</a>, 331 Or 38, 54, 11 P3d 228 (2000) (describing scope of <em>stare decisis</em> doctrine). Defense counsel should feel free to seek such reconsideration. </p>
        <h2 id="specific_attacksright_against_self_incrimination."><strong>§ 1-7.5. Specific Attacks—Right Against Self-Incrimination.</strong></h2>

        <p>In <a href="https://scholar.google.com/scholar_case?case=12775750995573865720&amp;q=526+US+314&amp;hl=en&amp;as_sdt=6,48">Mitchell v. United States</a>, 526 US 314, 327-28, 119 S Ct 1307, 143 L Ed 2d 424 (1999), the Court reiterated, “The normal rule in a criminal case is that no negative inference from the defendant’s failure to testify is permitted.” In accordance with that rule, the Court “decline[d] to adopt an exception for the sentencing phase of a criminal case with regard to factual determinations respecting the circumstances and details of the crime.” 526 US at 328. Moreover, the Court held that where a sentence has yet to be imposed, entry of a guilty plea does not extinguish the right against self-incrimination (unless, pursuant to the plea petition, the defendant knowingly, intelligently, and voluntarily waived the right). <em>Id.</em> at 325. <em>See generally</em> David S. Rudolf &amp; Thomas K. Maher, <em>Behind Closed Doors,</em> The Champion, June 1999, at 29-32 (discussing case law, including <em>Mitchell</em>, explaining that the right against self-incrimination applies at sentencing). <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=817504197673326694&amp;q=329+Or+210&amp;hl=en&amp;as_sdt=6,48">State v. Barone</a>, 329 Or 210, 231, 986 P2d 5 (1999) (right against self-incrimination continues until after person has “been convicted and [his appeal or] his time for appeal [has] run”).</p>

        <p><a href="http://scholar.google.com/scholar_case?case=4989070518157463871&amp;q=730+f3d+963&amp;hl=en&amp;as_sdt=6,38">United States v. Bahr</a>, 730 F3d 963 (9th Cir 2013) is similar. In his sentencing hearing, the defendant raised Fifth Amendment objections to the court’s consideration of statements he made during sex-evaluation treatments he was ordered to undergo as a consequence of a state conviction for a sexual offense. The defendant argued the statements were inadmissible, because they were given under compulsion—the threat that if he did not fully disclose his past sexual history, he would fail the program and his probation (or supervised release) would be revoked. Relying on <a href="http://scholar.google.com/scholar_case?q=395+F3d+1128+&amp;hl=en&amp;as_sdt=2,38&amp;case=11974151542831798607&amp;scilh=0">United States</a> <a href="http://scholar.google.com/scholar_case?q=395+F3d+1128+&amp;hl=en&amp;as_">v. Antelope</a>, 395 F3d 1128 (9th Cir 2005), the <em>Bahr</em> court agreed with the defendant and held that the statements could not be used to determine the defendant’s “sentence in a later, unrelated criminal proceeding.” 730 F3d at 965.</p>
        <h2 id="specific_attacksdouble_counting."><strong>§ 1-7.6. Specific Attacks—Double Counting.</strong></h2>

        <p>In two circumstances, certain sentencing schemes could be construed as permitting the use of the same set of facts to aggravate a defendant’s sentence twice for the same crime. Such a construction is ripe for constitutional challenge. The two circumstances are:</p>

        <p>1. Using the facts first to increase the crime classification, and then using the same facts to increase the crime’s subclassification under the guidelines. For example, burglary may be increased from second- to first-degree in any of four ways: (i) by proving that the defendant burglarized a dwelling, (ii) by proving that the defendant burglarized a mere building while armed with a deadly weapon, (iii) by proving that the defendant burglarized a mere building and caused or attempted to cause physical injury, or (iv) by proving that the defendant burglarized a mere building but used or threatened to use a dangerous weapon. <a
                href="#"
                data-action="show-ors"
                data-chapter="164"
                data-section="225"
                data-subsection="(1)"
            >ORS 164.225(1)</a>. First-degree burglary is increased from seriousness level 7 to 9 by proving that the defendant was armed with a deadly weapon or caused or threatened physical injury. OAR 213-018-0025(1). If a defendant burglarized a mere building while armed with a pistol, he would be convicted of first-degree rather than second-degree burglary. <a
                href="#"
                data-action="show-ors"
                data-chapter="164"
                data-section="225"
                data-subsection="(a)"
            >ORS 164.225(a)</a>. The state then could argue that the guidelines authorize using the defendant’s possession of the same pistol to enhance punishment for the same crime a second time, by increasing his crime’s subclassification from seriousness level 7 to level 9. OAR 213-018-0025(1)(a). <em>See also</em> <a href="http://scholar.google.com/scholar_case?q=State+v.+Minter&amp;hl=en&amp;as_sdt=4,38&amp;case=3172456014458146109&amp;scilh=0">State v. Minter</a>, 146 Or App 643, 934 P2d 585 (1997).</p>

        <p>2. Using the facts first to increase the crime classification, and then using the same facts to increase the defendant’s criminal-history score. <em>See</em> Chapter 3. An example of this is felony driving under the influence of intoxicants (DUII). A defendant’s first two DUII convictions within the previous 10-year period are misdemeanors; subsequent convictions within that period are felonies. <a
                href="#"
                data-action="show-ors"
                data-chapter="813"
                data-section="011"
                data-subsection=""
            >ORS 813.011</a>. Proving two or more prior DUIIs within the 10-year period increases the crime from a misdemeanor to a felony. The state then will argue that the guidelines authorize using the prior DUIIs to enhance punishment a second time for the same crime, by increasing the defendant’s criminal-history score.</p>

        <p>In each of these situations, the double use of the same facts to increase a defendant’s punishment twice for the same crime is grounds for a double jeopardy challenge. <a href="http://scholar.google.com/scholar_case?q=Witte+v.+United+States&amp;hl=en&amp;as_sdt=2,38&amp;case=5421751169894487412&amp;scilh=0">Witte v. United States</a>, 515 US 389, 391, 115 S Ct 2199 132 L Ed 2d 351 (1995) (“the Double Jeopardy Clause of the Fifth Amendment to the United States Constitution prohibits successive prosecution or multiple punishment for ‘the same offence.’”); <a href="https://scholar.google.com/scholar_case?case=462285863734240427&amp;q=286+Or+579&amp;hl=en&amp;as_sdt=6,48">State v. Cloutier,</a> 286 Or 579, 585, 596 P2d 1278 (1979) (double jeopardy may prohibit multiple punishments for the same offense). <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=8544763684711958830&amp;q=39+Or+App+283&amp;hl=en&amp;as_sdt=6,48">State v. Shipley</a>, 39 Or App 283, 286, 592 P2d 237 (1979) (where defendant was convicted of attempted first-degree burglary under use of firearm alternative, court erred in enhancing defendant’s sentence under former firearms enhancement statute). Double use of the same facts to increase a defendant’s punishment twice for the same crime also is ripe for a substantive due process challenge on the ground that the double use is irrational. <a href="https://scholar.google.com/scholar_case?case=5788419212324531915&amp;q=711+F2d+497&amp;hl=en&amp;as_sdt=6,48"><em>Alessi v. Quinlan</em></a>, 711 F2d 497 (2d Cir 1983). <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=7909448759035108013&amp;q=26+Or+App+743&amp;hl=en&amp;as_sdt=6,48">State v. Howe</a>, 26 Or App 743, 747, 554 P2d 605, <em>rev den</em>, 276 Or 555 (1976).</p>

        <p>In <a href="https://scholar.google.com/scholar_case?case=1012976920634309065&amp;q=190+Or+App+532&amp;hl=en&amp;as_sdt=6,48">State v. McCoin</a>, 190 Or App 532, 79 P3d 342 (2003), <em>rev den</em>, 336 Or 422 (2004), the Court of Appeals rejected the double-jeopardy argument in the second of the circumstances described above. The court held that the felony DUII statutory scheme “unambiguously” authorizes basing a defendant’s criminal-history score on the same prior DUII convictions that were used as predicates to prove the current felony DUII charge, and rejected the claim that such double use violates double jeopardy. 190 Or App at 538. But arguably the statutory scheme in fact prohibits double use. This is because the prior DUIIs used to prove the felony element of the current felony DUII charge by necessity stem from the same criminal episode as the current charge. As explained in Chapter 3, crimes stemming from the same criminal episode may not be used to increase one another’s criminal history scores.</p>

        <p>Because the prior DUIIs are elements of the felony DUII charge, at least arguably the priors stem from the same criminal episode as the current DUII charge. This establishes that the statutory scheme at best is ambiguous about whether it prohibits or requires double use of the priors. Because the scheme at best is ambiguous, it does not make “crystal clear” that it requires double use. Therefore, construing and applying the scheme to achieve double use violates double jeopardy. <em>See</em> <a href="http://scholar.google.com/scholar_case?q=Missouri+v.+Hunter&amp;hl=en&amp;as_sdt=3,38&amp;case=7184672996136280692&amp;scilh=0">Missouri v. Hunter</a>, 459 US 359, 368, 103 S Ct 673, 74 L Ed 2d 535 (1983) (double use under statutory scheme is double jeopardy unless the legislature has “made its intent” to require double use “crystal clear”). <em>McCoin</em>’s contrary <em>dicta</em>, that “double jeopardy precludes the multiple use of the same facts to prove an element of the current offense and to enhance the defendant’s sentence for that offense only if the legislature intended to prohibit such double usage,” 190 Or App at 540, is erroneous, for it states the polar opposite of the double jeopardy principle from <em>Hunter</em>. </p>

        <p>Finally, even if the McCoin court was right about the felony DUII statutory scheme, that decision does not necessarily defeat the other double-jeopardy-based attack summarized above, involving first degree burglary. Moreover, <em>McCoin</em> does not at all address the due process principle at all, 190 Or App at 534 n 3, so that issue is ripe for litigation in both scenarios.</p>
        <h2 id="specific_attacksconfrontation."><strong>§ 1-7.7. Specific Attacks—Confrontation.</strong></h2>

        <p>In <a href="http://scholar.google.com/scholar_case?q=State+v.+Deck&amp;hl=en&amp;as_sdt=4,38&amp;case=11031069290783994870&amp;scilh=0">State v. Deck</a>, 84 Or App 725, 735 P2d 637 (1987) (<em>in banc</em>), the Court of Appeals held that the evidence code’s hearsay rules applied in sentencing hearings under <em>former</em> <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="090"
                data-subsection=""
            >ORS 137.090</a> (1987 ed.). The 1989 Legislature amended the statute to overturn the court’s decision. But in a specially concurring opinion in <em>Deck</em>, Judge Warden disagreed with the court’s holding about the former statute, but concluded that a defendant’s confrontation rights apply in sentencing hearings. 84 Or App at 735. <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=3723552257968594646&amp;q=386+US+at+610&amp;hl=en&amp;as_sdt=6,48">Specht</a>, 386 US at 610 (“[d]ue process * * * requires that” sentencing must * * * have an opportunity to be heard,” and to “be confronted with the witnesses against him”).</p>

        <p>As amended, <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="090"
                data-subsection=""
            >ORS 137.090</a> appears to codify Judge Warden’s view and <em>Specht</em>. It states in pertinent part: “In determining aggravation or mitigation, the court shall consider * * * evidence relevant to aggravation or mitigation that the court finds trustworthy and reliable.” <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="090"
                data-subsection="(c)"
            >ORS 137.090(c)</a>. The phrase “trustworthy and reliable” seemingly is a codification of constitutional confrontation clause requirements, for the phrase previously was used as a shorthand description of the confrontation-clause test. <em>See, e.g.</em>, <a href="http://scholar.google.com/scholar_case?q=State+v.+Cornell&amp;hl=en&amp;as_sdt=4,38&amp;case=8780934179529470012&amp;scilh=0">State v. Cornell</a>, 314 Or 673, 682-83 &amp; n 14, 842 P2d 394 (1992). </p>

        <p>In <a href="https://scholar.google.com/scholar_case?case=10236371961031815742&amp;q=134+Or+App+240&amp;hl=en&amp;as_sdt=6,48">State v. Balkin</a>, 134 Or App 240, 242, 895 P2d 311, <em>rev den</em>, 321 Or 397 (1995), the court relied on <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="090"
                data-subsection="(c)"
            >ORS 137.090(c)</a> and held there was no error in basing an aggravated departure on hearsay, for the hearsay was trustworthy and reliable. But assuming either that <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="090"
                data-subsection="(c)"
            >ORS 137.090(c)</a> imports confrontation principles into sentencing hearings, and/or that as a matter of constitutional law, confrontation principles apply in sentencing hearings, the evidence admitted in <em>Balkin</em> may not have met the confrontation requirements the United States Supreme Court set out in <a href="http://scholar.google.com/scholar_case?q=Crawford+v.+Washington&amp;hl=en&amp;as_sdt=3,38&amp;case=7792517891204110362&amp;scilh=0">Crawford v. Washington</a>, 541 US 36, 124 S Ct 1354, 158 L Ed 2d 177 (2004). That is, if as a matter of statutory or constitutional law Sixth Amendment confrontation principles apply in sentencing hearings, then the principles announced in <em>Crawford</em> could apply in sentencing hearings. If so, then to the extent <em>Balkin</em> allowed the admission of “testimonial” hearsay, it would be wrong. <em>But see</em> <a href="http://scholar.google.com/scholar_case?case=12266540106441709406&amp;q=206+Or+App+655&amp;hl=en&amp;as_sdt=6,38">McDonald v. Belleque</a>, 206 Or App 655, 659, 138 P3d 895, <em>rev den</em>, 341 Or 392 (2006) (confrontation principles of <a href="http://scholar.google.com/scholar_case?q=Crawford+v.+Washington&amp;hl=en&amp;as_sdt=3,38&amp;case=7792517891204110362&amp;scilh=0">Crawford</a> do not apply in sentencing proceedings). </p>

        <p>Even if the federal principles announced in <em>Crawford</em> do not apply in an Oregon sentencing hearing, the state confrontation principles announced in <a href="http://scholar.google.com/scholar_case?q=State+v.+Moore&amp;hl=en&amp;as_sdt=4,38&amp;case=12256749275543318001&amp;scilh=0">State v. Moore</a>, 334 Or 328, 49 P3d 785 (2002) could apply. If <a href="http://scholar.google.com/scholar_case?q=Crawford+v.+Washington&amp;hl=en&amp;as_sdt=3,38&amp;case=7792517891204110362&amp;scilh=0">Crawford</a>, <a href="http://scholar.google.com/scholar_case?q=State+v.+Moore&amp;hl=en&amp;as_sdt=4,38&amp;case=12256749275543318001&amp;scilh=0">Moore</a>, or both apply, the manner in which sentencing hearings traditionally have been conducted will be dramatically changed. </p>

        <p>For example, in <a href="http://scholar.google.com/scholar_case?q=State+v.+McNeil&amp;hl=en&amp;as_sdt=4,38&amp;case=1997628232218793517&amp;scilh=0">State v. McNeil</a>, 170 Or App 407, 412, 12 P3d 992 (2000), the court held that a sentencing court could rely on factual representations by counsel to determine whether a limitation on consecutive sentencing applied. As explained in Chapter 8, consecutive sentences deviate from the statutory norm, that being concurrent sentences. Under <em>McNeil</em>, the state could argue that a court may rely on the district attorney’s factual representations to determine whether consecutive sentences or an aggravated departure sentence should be imposed. But if those representations are hearsay, <em>Crawford</em> and/or <em>Moore</em> could prohibit their consideration.</p>
        <h2 id="specific_attacksrecord_of_prior_convictions."><strong>§ 1-7.8. Specific Attacks—Record of Prior Convictions.</strong></h2>

        <p>Applying the principle that “a crime committed by an offender with a prior conviction ‘is considered to be an aggravated offense because a repetitive one,’” <a href="http://scholar.google.com/scholar_case?q=witte+515&amp;hl=en&amp;as_sdt=3,38&amp;case=5421751169894487412&amp;scilh=0">Witte</a>, 515 US at 403 (quoting <a href="https://scholar.google.com/scholar_case?case=10229866156480998197&amp;q=334+US+728&amp;hl=en&amp;as_sdt=6,48">Gryger v. Burke</a>, 334 US 728, 732, 68 S Ct 1256, 92 L Ed 1683 (1948)), Oregon has adopted several recidivist statutory schemes, discussed in later chapters of this manual, that use the defendant’s record of prior convictions, or even juvenile adjudications, as “predicates” for sentence aggravation under the recidivist schemes. Although the recidivist schemes themselves are constitutional, <em>see, e.g.,</em> <a href="https://scholar.google.com/scholar_case?case=16833700527979484137&amp;q=358+US+576&amp;hl=en&amp;as_sdt=6,48">Williams v. Oklahoma</a>, 358 US 576, 586, 79 S Ct 421, 3 L Ed 2d 516 (1959), their use of certain priors may be subject to constitutional attack.</p>

        <p>In <a href="https://scholar.google.com/scholar_case?case=9555252316886211562&amp;q=344+Or+181&amp;hl=en&amp;as_sdt=6,48">State v. Jacob</a>, 344 Or 181, 180 P3d 6 (2008), the court affirmed the Court of Appeals holding that a defendant could not collaterally attack a prior-conviction predicate on the ground that he had invalidly waived his constitutional right to trial by jury. But the Supreme Court went further than did the Court of Appeals. The Supreme Court effectively overruled decades’ worth of case law by holding that in state courts, a defendant’s exclusive remedy for collaterally attacking prior-conviction predicates lies in post-conviction relief. The court explained:</p>

        <p>“[A] defendant [possibly may] assert that the use of a valid conviction in a later sentencing proceeding is impermissible. * * * However, where a defendant makes an argument in a later unrelated criminal proceeding that a prior conviction is constitutionally invalid, * * * [no] statute provides a basis to obtain a collateral declaration of invalidity.”</p>

        <p><a href="http://scholar.google.com/scholar_case?q=344+Or+181&amp;hl=en&amp;as_sdt=2,38&amp;case=9555252316886211562&amp;scilh=0">Jacob</a>, 344 Or at 192 (court’s emphasis).</p>

        <p>Still, there may be a means of collaterally attacking priors that would be used as predicates, that being on the ground the prior was obtained in violation of the defendant’s constitutional right to counsel.</p>

        <p><a href="http://scholar.google.com/scholar_case?q=511+US+485&amp;hl=en&amp;as_sdt=2,38&amp;case=8801393066246902030&amp;scilh=0">Custis v. United States</a>, 511 US 485, 114 S Ct 1732, 128 L Ed 2d 517 (1994) is viewed as recognizing an historical right to use a sentencing proceeding as a vehicle to collaterally attack prior conviction-predicates on the ground that they were obtained in violation of the constitutional right to counsel (in particular, the right recognized in Gideon v. Wainwright, 372 US 335, 83 S Ct 792, 9 L Ed 2d 799 (1963)). Thus, defense counsel should argue that the Oregon Supreme Court’s decision in <em>Jacob</em> must be harmonized with <em>Custis</em>, so as to allow defendants, at sentencing, to collaterally attack prior-conviction predicates on the ground that they were obtained in violation of the right to counsel (in particular, the right recognized in <em>Gideon</em>). <em>But see</em> <a href="https://scholar.google.com/scholar_case?case=14682989879011704579&amp;q=363+Or+264&amp;hl=en&amp;as_sdt=6,38">State v. Hamann</a>, 363 Or 264, 422 P3d 193 (2018) (where uncounseled conviction was used to impose civil liability of permanent revocation of driving privileges, such use allowed). </p>

        <p>Apart from attacking priors on the ground that they were unconstitutionally obtained, the recidivist schemes typically allow bench trials using the preponderance standard, rather than jury trials using the reasonable doubt standard, on the existence of priors that would be used to aggravate sentences. <em>E.g</em>., <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="079"
                data-subsection="(5)"
            >ORS 137.079(5)</a>; OAR 213-004-0013. In cases where the defendant neither waived jury nor admitted to the existence of the priors when he pled to the indictment, these schemes are subject to attack under the Sixth Amendment principle discussed in Section 1-7.2.</p>

        <p>To be sure, the <a href="http://scholar.google.com/scholar_case?q=530+US+466&amp;hl=en&amp;as_sdt=2,38&amp;case=4053038751252355308&amp;scilh=0">Apprendi</a> rule states: “Other than the fact of a prior conviction, any fact that increases the penalty for a crime beyond the prescribed statutory maximum must be submitted to a jury, and proved beyond a reasonable doubt.” 530 US at 490 (emphasis added). The emphasized text expressly states a prior-conviction exception that purports to exempt from the <em>Apprendi</em> rule the finding of prior convictions that recidivist schemes would use as predicates to enhance punishment. Consequently, the exception would allow trial courts, even without a jury waiver, to find the existence of prior convictions, and to do so while using only the preponderance standard. But for the following reasons, the prior-conviction exception is subject to federal constitutional attack. </p>

        <p>The <em>Apprendi</em> Court based the prior-conviction exception on its 5-4 decision in <a href="https://scholar.google.com/scholar_case?case=17682294789548162371&amp;q=523+US+224&amp;hl=en&amp;as_sdt=6,48">Almendarez-Torres v. United States</a>, 523 US 224, 118 S Ct 1219, 140 L Ed 2d 350 (1998). But in <em>Apprendi</em>, a “hate crimes” sentence aggravator was at issue; aggravation through prior convictions and a recidivist scheme was not. <em>See</em> <a href="http://scholar.google.com/scholar_case?q=530+US+466&amp;hl=en&amp;as_sdt=2,38&amp;case=4053038751252355308&amp;scilh=0">Id.</a> at 468. The Court’s statement about a prior-conviction exception to the <em>Apprendi</em> rule thus is <em>dictum</em>, and <em>dictum</em> are not <em>stare decisis</em>. <em>See</em> <a href="http://scholar.google.com/scholar_case?q=Stranahan+v.+Fred+Meyer,+Inc.&amp;hl=en&amp;as_sdt=4,38&amp;case=16116926811622477424&amp;scilh=0">Stranahan</a>, 331 Or at 54 (rulings only on matters necessary to court’s decision are <em>stare decisis</em>). </p>

        <p>Furthermore, the <a href="http://scholar.google.com/scholar_case?q=530+US+466&amp;hl=en&amp;as_sdt=2,38&amp;case=4053038751252355308&amp;scilh=0">Apprendi</a> Court itself explained that the prior-conviction exception is “at best an exceptional departure from the historic practice [of the right to jury trial] that we have described.” 530 US at 487. <em>See also</em> <a href="http://scholar.google.com/scholar_case?q=Johnson+v.+United+States&amp;hl=en&amp;as_sdt=2,38&amp;case=12270770707094022014">Johnson v. United States</a>, 544 US 295, 306-07, 125 S Ct 1571, 161 L Ed 2d 542 (2005); <em>Apprendi</em>, 530 US at 489 and n 15. The <em>Apprendi</em> majority was comprised of the four justices who joined in Justice Scalia’s dissent in <a href="https://scholar.google.com/scholar_case?case=17682294789548162371&amp;q=523+US+224&amp;hl=en&amp;as_sdt=6,48">Almendarez-Torres</a>, plus Justice Thomas who was in the bare majority in <em>Almendarez-Torres</em>. In his concurring opinion in <em>Apprendi</em>, Thomas essentially embraced Justice Scalia’s dissent from <em>Almendarez-Torres</em> and indicated he would switch sides on the issue if given another chance. <em>Apprendi</em>, 530 US at 500-01, 520-21 (Thomas, J., concurring). With Thomas still on the Court, it is possible that a majority might form that would disavow the <em>Apprendi</em> <em>dicta</em>. <em>See</em> <a href="http://scholar.google.com/scholar_case?case=12405283445912662603&amp;q=See+Alleyne,+133+S+Ct+at+2160+n+1&amp;hl=en&amp;as_sdt=6,38">Alleyne</a>, 133 S Ct at 2160 n 1 (suggesting that the validity of <em>Apprendi’</em>s prior-conviction dicta remains an open question). <em>But see</em> <a href="https://scholar.google.com/scholar_case?case=2427041473749885795&amp;q=550+US+192&amp;hl=en&amp;as_sdt=6,48">James v. United States</a>, 550 US 192, 214 n 8, 127 S Ct 1586, 167 L Ed 2d 532 (2007) (in <em>dicta</em>, Court relies on prior-conviction exception). </p>
        <h3 id="specific_attacksrecord_of_prior_convictionscharacteristics."><strong>§ 1-7.8.1. Specific Attacks—Record of Prior Convictions—Characteristics.</strong></h3>

        <p>Regardless of the validity of the <em>Apprendi</em> rule’s prior-conviction exception, the exception has an exception.</p>

        <p>Some recidivist schemes allow use of prior convictions, and even juvenile adjudications, as predicates only if the state proves those priors have specified characteristics. The <em>Apprendi</em> rule applies to proof of those characteristics. <em>See</em> <a href="https://scholar.google.com/scholar_case?case=1569729417920761849&amp;q=544+US+13&amp;hl=en&amp;as_sdt=6,48">Shepard v. United States</a>, 544 US 13, 24–26, 125 S Ct 1254, 161 L Ed 2d 205 (2005) (<em>Apprendi</em> rule applies to proof of characteristics of prior conviction that must be proved in order to use prior to aggravate punishment for current crime, and Sixth Amendment jury trial principles limit proof to court documents from the prior proceedings such as the transcript, the charging instrument, and the plea petition).</p>

        <p><a href="https://scholar.google.com/scholar_case?case=7370112933527027740&amp;q=342+Or+711&amp;hl=en&amp;as_sdt=6,48">State v. Bray</a>, 342 Or 711, 724, 168 P3d 983 (2007) provides an example. There, the trial court relied on a non-juried finding of Aggravating Factor D, persistent involvement in similar offenses, to impose a departure. The finding was grounded on the defendant’s record of prior convictions. But the factor could be used only if the priors had certain characteristics—specifically, that the priors, in juxtaposition to the defendant’s current crimes, reflected “persistent involvement in similar offenses.” The finding of that characteristic was non-juried, so the trial court’s use of Factor D to impose an aggravated departure violated the <em>Apprendi</em> rule.</p>

        <p>Thus, Aggravating Factor D is a sentencing law that contains a recidivist system that requires proof of predicates’ characteristics, which are subject to the <em>Apprendi</em> rule. Oregon has several other sentencing laws that contain recidivist systems that, at least arguably, require proof of predicates’ characteristics. These other laws include:</p>

        <p>• <span class="underline">Felony driving under the influence of intoxicants (DUII)</span>, <a
                href="#"
                data-action="show-ors"
                data-chapter="813"
                data-section="011"
                data-subsection="(1)"
            >ORS 813.011(1)</a>: out-of-state conviction may be used if based on a “statutory counterpart” to the Oregon crime of DUII.</p>

        <p>• <span class="underline">Major Felony Sex Offender</span>, <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="690"
                data-subsection=""
            >ORS 137.690</a>c.: “[A] conviction for the statutory counterpart of a major felony sex crime in any jurisdiction” may be used as a predicate.</p>

        <p>• <span class="underline">Repeat Property Offender</span>, <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="717"
                data-subsection="(B)"
            >ORS 137.717(B)</a>: Out-of-state convictions based on “comparable offenses” to Oregon crimes may be used as predicates.</p>

        <p>• <span class="underline">Repeat Felony Sex Offender</span>, <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="719"
                data-subsection="(B)"
            >ORS 137.719(B)</a>: An out-of-state conviction based on a “comparable offense” to an Oregon crime may be used.</p>

        <p>• <span class="underline">Repeat Class A Felony Sex Offender</span>, <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="725"
                data-subsection="(d)"
            >ORS 137.725(d)</a> and (e): An “equivalent” out-of-state conviction may be used.</p>

        <p>• <span class="underline">Dangerous Offender for Class B &amp; C felonies</span>, <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="725"
                data-subsection="(b)"
            >ORS 161.725(b)</a> and (c): This statute contains multiple characteristics of prior convictions that must be proved in order to use the priors as predicates.</p>

        <p>• <span class="underline">Repeat Drug-Crime Offender</span>, <a
                href="#"
                data-action="show-ors"
                data-chapter="475"
                data-section="934"
                data-subsection="(5)"
            >ORS 475.934(5)</a>: Out-of-state convictions may be used if based on “comparable offenses” to Oregon crimes.</p>

        <p>• <span class="underline">Repeat Methamphetamine Offender</span>, <a
                href="#"
                data-action="show-ors"
                data-chapter="475"
                data-section="935"
                data-subsection="(b)"
            >ORS 475.935(b)</a>: Out-of-state convictions may be used if based on “comparable offenses” to Oregon crimes.</p>

        <p>• <span class="underline">Criminal-history scoring—Felony DUII</span>, OAR 213-004-0009(1): “Every two prior convictions for misdemeanor [DUII] or comparable statutory offense or ordinance violation in the offender’s criminal history shall be counted as one conviction of felony [DUII].”</p>

        <p>• <span class="underline">Criminal-history scoring—generally</span>: “An out-of-state” (i) “adult conviction shall be used to classify the offender’s criminal history if the elements of the offense would have constituted a felony or Class A misdemeanor under current Oregon law,” OAR 213-004-0011(1); and (ii) “juvenile adjudication[] shall be used to classify the offender’s criminal history if the elements of the offense would have constituted a felony under current Oregon law if committed by an adult.” OAR 213-004-0011(2).</p>
        <h2 id="june_2023_update_12"><strong>June 2023 Update</strong></h2>

        <p>In <a href="https://scholar.google.com/scholar_case?case=16805967388600797672&amp;q=366+Or+18&amp;hl=en&amp;as_sdt=6,38">State v. Guzman/Heckler</a>, 366 Or 18, 455 P3d 485 (2019), which involved felony DUII prosecutions, <a
                href="#"
                data-action="show-ors"
                data-chapter="813"
                data-section="011"
                data-subsection=""
            >ORS 813.011</a>, the trial courts had deemed the defendants’ Kansas and Colorado convictions were “statutory counterparts” to the Oregon crime of DUII, <a
                href="#"
                data-action="show-ors"
                data-chapter="813"
                data-section="010"
                data-subsection=""
            >ORS 813.010</a>, so used those foreign (out-of-state) convictions as predicates to enhance the DUII charge from misdemeanor to felony. The defendants argued that because the determination of whether foreign convictions are statutory counterparts “increases the maximum punishment available for the offense,” that determination “must be submitted to a jury unless it falls within the [<em>Apprendi</em> rule’s] prior conviction exception.” <em>Guzman</em>, 366 Or at 35. </p>

        <p>The Supreme Court generally rejected the theory that determining whether a foreign conviction is a statutory counterpart falls outside the <em>Apprendi</em> rule’s “prior conviction” exception so is a jury question. Relying on federal precedents, the court explained,</p>
        <blockquote>

            <p>“The only facts that must be found, to elevate a misdemeanor DUII to a felony under <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="813"
                    data-section="011"
                    data-subsection=""
                >ORS 813.011</a>, concern which prior convictions a defendant possesses, and the statutory elements of those offenses that are conclusively established by the record of conviction—not the conduct underlying that conviction. Whether those elements are the same as or nearly the same as the elements of <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="813"
                    data-section="010"
                    data-subsection="(1)"
                >ORS 813.010(1)</a>, is a legal question, not an additional factual inquiry.”</p>
        </blockquote>

        <p><em>Id.</em> at 36 (citations and in ternal quotations omitted). <em>Cf.</em> <a href="https://scholar.google.com/scholar_case?case=10339143797100984224&amp;q=State+v.+Renfro,+320&amp;hl=en&amp;as_sdt=4,38">State v. Renfro</a>, 320 Or App 72, 73-74, 511 P3d 451 (2022) (<em>per curiam</em>) (whereas California creates a rebuttable presumption that a person commits DUII if they have a blood-alcohol content over .08 percent within three hours of driving, but Oregon provides that a person commits DUII if they drive a vehicle while having a blood-alcohol content of over 0.08 percent, the defendant’s California conviction could not be used as a statutory counterpart to impose a permanent license revocation). </p>

        <p>As seen, this generalized ruling establishes that—with one exception—the recidivist schemes (enumerated on pages 1-61 to -62), which permit using as predicates out-of-state convictions that are comparable or are counterparts to Oregon laws, do not fall under the “characteristics” requirements of <a href="https://scholar.google.com/scholar_case?case=2427041473749885795&amp;q=550+US+192&amp;hl=en&amp;as_sdt=6,48">Shepard v. United States</a>, 544 US 13, 24–26, 125 S Ct 1254, 161 L Ed 2d 205 (2005). The sole exception is the Dangerous Offender Law, when it applies to Class B and C felonies. <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="725"
                data-subsection="(b)"
            >ORS 161.725(b)</a> and (c).<a
                href="#fn10"
                class="footnote-ref"
                id="fnref10"
                role="doc-noteref"
            ><sup>10</sup></a></p>

        <p>Nevertheless, <a href="https://scholar.google.com/scholar_case?case=16805967388600797672&amp;q=366+Or+18&amp;hl=en&amp;as_sdt=6,38">Guzman/Heckler</a>’s generalized ruling left open the question of whether <strong>the existence</strong> of “prior qualifying convictions [must be] submitted to the jury[.]” 366 Or at 35 n 6. Certainly if a recidivist scheme uses juvenile adjudications as “qualifying” predicates, <strong>the existence</strong> of the adjudications must be “submitted to the jury[.]” <em>Id</em>. As the court held, “[T]he Sixth Amendment requires that when [a juvenile] adjudication is offered as an enhancement factor to increase a criminal sentence, <strong>its existence must either be proved to a trier of fact or be admitted by a defendant</strong> for sentencing purposes following an informed and knowing waiver.” <a href="https://scholar.google.com/scholar_case?q=harris+339&amp;hl=en&amp;as_sdt=4,38&amp;case=2549740787986417177&amp;scilh=0">State v. Harris</a>, 339 Or 157, 175, 118 P3d 236 (2005) (emphasis added).</p>

        <p>The same should be true about prior qualifying <strong>convictions</strong>. Consider the felony driving under the influence of intoxicants (DUII) recidivist scheme. It requires the use of prior DUII convictions as predicates. Consistent with <a href="https://scholar.google.com/scholar_case?case=14966781063535213924&amp;q=397+US+358&amp;hl=en&amp;as_sdt=3,38">In re Winship</a>, 397 US 358, 90 S Ct 1068, 25 L Ed 2d 368 (1970), which holds that crime elements are for the jury using the reasonable doubt standard, UCrJI 2704A explains that in felony DUII prosecutions, prior conviction predicates are crime elements, for they are what are used to prove the felony element of the felony DUII charge. Because prior convictions are used as predicates to prove the application of any of the recidivist schemes, arguably, <strong>the existence</strong> of those convictions “must either be proved to a trier of fact or be admitted by a defendant for sentencing purposes following an informed and knowing waiver.” <em>Harris</em>, 339 Or at 175. </p>

        <p>[<strong>End Update</strong>]</p>
        <h2 id="specific_attacksseparate_criminal_episode_findings."><strong>§ 1-7.9. Specific Attacks—Separate Criminal Episode Findings.</strong></h2>

        <p>Oregon has several sentencing schemes that aggravate punishment in the form of sentence enhancements or multiple convictions, based on findings that certain convictions were committed in “separate criminal episodes” from the crime to which the aggravation scheme would apply. Crimes stem from separate episodes if they were not committed during the phrase “same criminal episode”—a phrase which is synonymous with the phrase “same continuous and uninterrupted course of conduct.” <em>See</em> <a href="http://scholar.google.com/scholar_case?case=12518298256310522930&amp;q=271+Or+558&amp;hl=en&amp;as_sdt=2,38">State v. Boyd</a>, 271 Or 558, 565-66, 533 P2d 795 (1975). Crimes stem from the same criminal episode if they: </p>

        <p>1. Are “cross related”—<em>i.e.</em>, are so closely linked in time, place, and circumstance that a complete account of one charge cannot be related without relating details of the other charge, <em>e.g.</em>, <a href="https://scholar.google.com/scholar_case?case=14733960523135553940&amp;q=250+or.+app.+316&amp;hl=en&amp;as_sdt=6,48">State v. Witherspoon</a>, 250 Or App 316, 322, 280 P3d 1004 (2012) (the “complete account” test); or</p>

        <p>2. Are “directed toward the same criminal objective,” <em>e.g.</em>, <a href="http://scholar.google.com/scholar_case?q=kautz+179&amp;hl=en&amp;as_sdt=4,38&amp;case=9074102115537718602&amp;scilh=0">State v. Kautz</a>, 179 Or App 458, 466-67, 39 P3d 937, <em>rev den</em>, 334 Or 327 (2002) (“criminal objective” test); or </p>

        <p>3. Involve the possession of multiple pieces of contraband (even if of different types) “at the same place and time, constitute[s]” the same criminal episode. <em>Boyd</em>, 271 Or at 570 (stolen television and drugs). <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=12381599467810448628&amp;q=363+Or+647&amp;hl=en&amp;as_sdt=6,48">State v. Dulfu</a>, 363 Or 647, 659-63, 426 P3d 641 (2018) (child pornography).</p>

        <p>Examples of cases where crimes fell within one of these definitions include <a href="https://scholar.google.com/scholar_case?case=5006882425118349077&amp;q=293+Or+App+460&amp;hl=en&amp;as_sdt=6,48">State v. Taylor</a>, 293 Or App 460, 428 P3d 939 (2018). There, the court relied on the same criminal objective test to hold that three counts of coercion and one count of domestic violence fourth-degree assault stemmed from the same episode. In <a href="https://scholar.google.com/scholar_case?case=14777737973073343384&amp;q=287+Or+App+526&amp;hl=en&amp;as_sdt=6,48">State v. Ortega-Gonsalez</a>, 287 Or App 526, 536-37, 404 P3d 1081 (2017), the trial court erred by “reconstituting” criminal-history scores based on predicate offenses sentenced consecutive to racketeering conviction, for predicate offenses necessarily stem from the same criminal episode as the racketeering conviction. In <a href="https://scholar.google.com/scholar_case?case=14680647335230038150&amp;q=259+Or.+App.+141&amp;hl=en&amp;as_sdt=6,48">State v. Flores</a>, 259 Or App 141, 313 P3d 378 (2013), <em>rev den</em>, 354 Or 735 (2014), the court held that convictions for felon in possession of a firearm and unlawful use of a weapon (the same firearm) merge, because they stem from the same criminal episode. In <em>Witherspoon</em>, 250 Or App at 323–26, the court held that crimes of misdemeanor assault and menacing, committed essentially contemporaneously with the commission of felony assault, were part of same criminal episode. In <a href="http://scholar.google.com/scholar_case?q=State+v.+Norman&amp;hl=en&amp;as_sdt=4,38&amp;case=6573262868617514343&amp;scilh=0">State v. Norman</a>, 216 Or App 475, 490, 174 P3d 598 (2007), <em>vac’d in part on other grounds</em>, 345 Or 319, 207 P3d 423 (2008); the court held that where the defendant committed an attempted assault on a police officer within a few seconds of his simultaneous commission of attempted assaults on two other officers, the crimes stemmed from the same episode. In <a href="http://scholar.google.com/scholar_case?q=kautz+179&amp;hl=en&amp;as_sdt=4,38&amp;case=9074102115537718602&amp;scilh=0">Kautz</a>, 179 Or App at 466-67, the court held that a burglary and a robbery were part of same criminal episode where the defendant, in the course of committing the burglary, threatened the victim with a firearm. <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=12390437242774583914&amp;q=187+Or+App+192&amp;hl=en&amp;as_sdt=6,48">State v. Thomas</a>, 187 Or App 192, 195, 66 P3d 570 (2003); <a href="http://scholar.google.com/scholar_case?q=allen+151&amp;hl=en&amp;as_sdt=4,38&amp;case=15019900920369969127&amp;scilh=0">State v. Allen</a>, 151 Or App 281, 190-91, 948 P2d 745 (1997); <a href="http://scholar.google.com/scholar_case?q=plourd+125&amp;hl=en&amp;as_sdt=4,38&amp;case=12367500311627806760&amp;scilh=0">Plourd</a>, 125 Or App at 242-43. </p>

        <p>But if the crimes meet none of these definitions, then they stem from separate criminal episodes. Examples of cases where crimes stemmed from separate episodes include <a href="http://scholar.google.com/scholar_case?q=knight+160&amp;hl=en&amp;as_sdt=4,38&amp;case=7698114979016606753&amp;scilh=0">State v. Knight</a>, 160 Or App 395, 403-05, 981 P2d 819 (1999). There, the court held that two burglaries of the same residence committed two hours apart stemmed from separate criminal episodes. 160 Or App at 403-05. <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=13001691214343785420&amp;q=82+Or+App+509&amp;hl=en&amp;as_sdt=6,48">State v. Hathaway</a>, 82 Or App 509, 515, 728 P2d 908 (1986), <em>rev den</em>, 302 Or 594 (1987) (in affirming trial court’s rejection of former jeopardy motion to dismiss, holding that two drug deliveries to the same undercover agent, but a few hours apart, constituted separate criminal episodes). </p>

        <p>It should be noted that the joinder of counts and indictments theory, found at <a
                href="#"
                data-action="show-ors"
                data-chapter="132"
                data-section="560"
                data-subsection="(B)"
            >ORS 132.560(B)</a>, applies to crimes that stem from the same criminal episode. It is a mandatory joinder theory, because if the crimes are not joined, trial on some of the counts may create a former jeopardy bar to a subsequent trial on any of the other counts. <em>See</em> <a
                href="#"
                data-action="show-ors"
                data-chapter="131"
                data-section="515"
                data-subsection="(2)"
            >ORS 131.515(2)</a>. In <a href="https://scholar.google.com/scholar_case?case=18118992523436245909&amp;q=265+Or+App+30&amp;hl=en&amp;as_sdt=6,48">State v. Tooley</a>, 265 Or App 30, 333 P3d 348, rev den, 356 Or 575 (2014), the Court of Appeals applied this joinder theory, and announced a same-criminal-episode concept more expansively than ever before seen. </p>

        <p>The case involved an aggravated murder prosecution under the theory that the defendant committed two murders “in the same criminal episode.” <em>See Tooley</em>, 265 Or App at 31. The two killings took place about 12 hours apart. Preexisting case law, <em>e.g.</em>, <em>Knight</em>, typically holds that crimes having that sort of temporal separation stem from separate episodes. The defendant sought judgment of acquittal of the “aggravated” element. He argued “that his objective, to ‘advanc[e] his criminal career,’ was too broad,’ ‘distant,’ and abstract—not discrete enough—to be considered singular. Defendant argue[d], additionally, that the gap in time between the murders forecloses the conclusion that his conduct was ‘continuous and uninterrupted.’” <a href="https://scholar.google.com/scholar_case?case=18118992523436245909&amp;q=265+Or+App+30&amp;hl=en&amp;as_sdt=6,48">Id</a>. at 38. </p>

        <p>The court rejected these arguments. The court instead favored the state’s theory, which urged the jury to “find that defendant spent the time in between the killings engaged in conduct that he had calculated was necessary to successfully complete, and escape culpability for, the second killing and thereby accomplish his overall objective.” <em>Id.</em> at 44. </p>

        <p>Although the court’s ruling disfavored defendant Tooley, the court’s embracement of the state’s theory would support similar defense arguments in favor of same-episode findings in cases where such findings would preclude using sentence-enhancement schemes—usually recidivist schemes—that apply only when crimes stem from separate criminal episodes.</p>

        <p>Further regarding the joinder of counts and indictments, the theories found at <a
                href="#"
                data-action="show-ors"
                data-chapter="132"
                data-section="560"
                data-subsection="(A)"
            >ORS 132.560(A)</a> and (C), apply to crimes that do not stem from the same criminal episode, so apply to crimes that stem from separate episodes. Because former jeopardy principles to not apply to these joinder theories, these are permissive joinder theories.</p>

        <p>In <a href="https://scholar.google.com/scholar_case?case=13385997525429503324&amp;q=277+Or+App+137&amp;hl=en&amp;as_sdt=6,38">State v. Poston</a>, 277 Or App 137, 370 P3d 904 (2016), <em>adh’d to on recons</em>, <a href="https://scholar.google.com/scholar_case?case=3923397099180909585&amp;q=285+Or.+App.+750&amp;hl=en&amp;as_sdt=6,48">285 Or App 750</a>, 399 P3d 488, <em>rev den</em>, 361 Or 886 (2017), the defendant demurred to a multiple-count indictment on the ground that it failed to state allegations demonstrating the authority to join the counts. In both its original and reconsideration opinions, the Court of Appeals agreed that multiple-count charging instruments must state such allegations, so reversed the trial court’s denial of the defendant’s demurrer.</p>

        <p>More recently, in the separate case of <a href="https://scholar.google.com/scholar_case?case=11652570505987944204&amp;q=364+Or+105&amp;hl=en&amp;as_sdt=6,48">State v. Warren</a>, 364 Or 105, 430 P3d 1036 (2018), the Supreme Court endorsed the <em>Poston</em> court’s decision. The <em>Warren</em> court held: “Based on the text and context of the joinder statute, <a
                href="#"
                data-action="show-ors"
                data-chapter="132"
                data-section="560"
                data-subsection=""
            >ORS 132.560</a>, and in keeping with our prior cases, we hold that an indictment that charges more than one offense must allege the basis for joining the charges.” 364 Or at 133 (emphasis added). But the court further held, “[E]ven assuming that the indictment in this case failed to satisfy that requirement, we hold that any error in the indictment in this case did not affect defendant’s substantial rights.” <em>Id</em>. Therefore, charging errors of this sort are subject to harmless-error analyses.</p>

        <p>Thus, when an indictment joins counts, or when the state moves to join indictments, the indictment must allege one or more of the <a
                href="#"
                data-action="show-ors"
                data-chapter="132"
                data-section="5601"
                data-subsection=""
            >ORS 132.5601</a>)(b)’s joinder-of-counts theories. But if the indictment pleads that the crimes stemmed from the same episode, that allegation is not binding on the sentencing court (unless equitable or judicial estoppel requires adhering to the language). <em>See</em> <a href="http://scholar.google.com/scholar_case?q=174+Or+App+280&amp;hl=en&amp;as_sdt=2,38&amp;case=2754310330806841439&amp;scilh=0">State v. Bush</a>, 174 Or App 280, 25 P3d 368 (2001).</p>
        <h2 id="june_2023_update_13"><strong>June 2023 Update</strong></h2>

        <p>Finally, case law establishes that (with the exception of the criminal history scoring and the repeat felony sex offender schemes) non-traditional recidivist schemes allow using current crimes as predicates <strong>if</strong> they stem from separate episodes from crimes sentenced later in the same hearing. <a href="https://scholar.google.com/scholar_case?case=1569729417920761849&amp;q=544+US+13&amp;hl=en&amp;as_sdt=6,48">Shepard v. United States</a> establishes that separate episodes is a “characteristic” the prosecution must prove in compliance with the <a href="https://scholar.google.com/scholar_case?q=530+US+466&amp;hl=en&amp;as_sdt=2,38&amp;case=4053038751252355308&amp;scilh=0">Apprendi</a> rule and the state’s enhancement fact scheme, <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="760"
                data-subsection=""
            >ORS 136.760</a>, <em>et seq. See</em> <a href="https://scholar.google.com/scholar_case?case=16103028354310051564&amp;q=State+v.+Thornsberry&amp;hl=en&amp;as_sdt=6,227,228">State v. Thornsberry</a><em>,</em> 315 Or App 287, 501 P3d 1 (2021) (trial court erred in applying major felony sex offender law, because prosecution failed to comply with <em>Apprendi</em> rule in proving current crime predicates stemmed from separate episodes). The prosecution must plead the characteristic in the charging instrument, <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="765"
                data-subsection="(1)"
            >ORS 136.765(1)</a>, <strong>or</strong> in a notice of intent to prove the characteristic <strong>either</strong> pretrial, <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="765"
                data-subsection="(2)"
            >ORS 136.765(2)</a>, <strong>or</strong> on remand for resentencing. <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="790"
                data-subsection=""
            >ORS 136.790</a>.<a
                href="#fn11"
                class="footnote-ref"
                id="fnref11"
                role="doc-noteref"
            ><sup>11</sup></a> </p>

        <p>Moreover, the purported predicates’ separate criminal episodes characteristic “relates to an offense charged in the charging instrument,” <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="770"
                data-subsection="(1)"
            >ORS 136.770(1)</a>, so is an offen<strong>se</strong>-specific enhancement fact.<a
                href="#fn12"
                class="footnote-ref"
                id="fnref12"
                role="doc-noteref"
            ><sup>12</sup></a> Because the characteristic is offen<strong>se</strong>-specific, “the court shall submit the enhancement fact to the jury during the trial [‘guilt’] phase of the criminal proceeding[.]” <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="770"
                data-subsection="(1)"
            >ORS 136.770(1)</a>.<a
                href="#fn13"
                class="footnote-ref"
                id="fnref13"
                role="doc-noteref"
            ><sup>13</sup></a> That means that the prosecution must “submit[] to [the] jury” permissible documents for determining, “beyond a reasonable doubt,” whether the purported predicates stem from separate criminal episodes. <em>Apprendi</em>, 530 US at 490. </p>

        <p>Moreover, the prosecution should be required to submit a special verdict form, which would state along these lines:</p>

        <p>Do you find that <strong>[insert pertinent convictions]</strong> stem from separate criminal episodes?</p>

        <p>But a special verdict form is not the full extent of the instructions the prosecution should be required to submit. It also should be required to submit an instruction on the “judicial interpretation” of the phrase “separate criminal episodes.” <em>See</em> <a href="https://scholar.google.com/scholar_case?case=7306155306787329924&amp;q=309+Or+523&amp;hl=en&amp;as_sdt=4,38">State v. Nefstad</a><em>,</em> 309 Or 523, 540, 789 P2d 1326 (1990) (a statutorily undefined word is to be defined in terms of its common understanding only if “[n]othing in either the legislative history * * * or in its judicial interpretation suggests that [the word] has any statutory meaning that departs from the common understanding of the word” (emphasis added)). A definition along the lines of “’[s]eparate criminal episodes’ means that the crimes were not part of the same continuous and uninterrupted course of conduct” would not do, for that is not a definition at all. It is only a synonym for the phrase needing definition. <em>See</em> <a href="https://scholar.google.com/scholar_case?case=12518298256310522930&amp;q=271+Or+558&amp;hl=en&amp;as_sdt=4,38">State v. Boyd</a><em>,</em> 271 Or 558, 565-66, 533 P2d 795 (1975).</p>

        <p>To reflect the “judicial interpretation” of the phrase, <em>Nefstad</em>, 309 Or at 540, the definitional instruction should state the converse of the definition of the phrase “same criminal episode.” An appropriate definition should state along the lines of: </p>
        <blockquote>

            <p>The phrase “separate criminal episode” means crimes that (i) are not so closely linked in time, place, and circumstance that a complete account of one charge may not be related without relating details of the other charge; (ii) are not directed toward the same criminal objective; and (iii) do not involve the possession of multiple pieces of contraband, even if of different types, at the same place and time.</p>
        </blockquote>

        <p>But the defense is free to move for judgment of acquittal on the separate-episode allegation. If case law supports the separate-episode allegation, the trial court likely will deny the defense motion. But the court still must give the special verdict instruction and the definitional instruction. The court may not refuse to do so on the ground that controlling case law establishes that the convictions stem from separate episodes, for that would constitute an impermissible, directed verdict on the allegation. <em>See, e.g.</em>, <a href="https://scholar.google.com/scholar_case?case=2814486650249173839&amp;q=315+Or+572&amp;hl=en&amp;as_sdt=4,38">State v. Boots</a>, 315 Or 572, 593, 848 P2d 76 (1993).</p>

        <p>Moreover, even if well settled case law supports the prosecution’s argument for a “Yes” answer to the special verdict instruction, “’the jury has the power to bring in a verdict in the teeth of both the law and the facts.’” <a href="https://scholar.google.com/scholar_case?case=16449436700053353870&amp;q=253+Or+235&amp;hl=en&amp;as_sdt=4,38">State v. Turner</a><em>,</em> 253 Or 235, 242-43, 453 P2d 910 (1969) (quoting <a href="https://scholar.google.com/scholar_case?case=33921605022407942&amp;q=253+Or+235&amp;hl=en&amp;as_sdt=4,38">Horning v. Dist. of Columbia</a><em>,</em> 254 US 135, 138, 41 S Ct 53, 65 L Ed 185 (1920) (Holmes, J.)). So despite the case law, the jury would be free to return a verdict of “No.” Moreover, double jeopardy would prohibit the prosecution from appealing a “No” answer. <a href="https://scholar.google.com/scholar_case?case=14547606783431368553&amp;q=Smalis+v.+Pennsylvania&amp;hl=en&amp;as_sdt=4,38">Smalis v. Pennsylvania</a><em>,</em> 476 US 140, 106 S Ct 1745, 90 L Ed 2d 116 (1986). </p>

        <p>Thus, case law adverse to the defendant does not control the jury’s answer to the special verdict instruction. This means that notwithstanding RPC 3.3(a)(2), defense counsel is free to argue for a “No” answer. In other words, even if case law would dictate a “Yes” answer, defense counsel is free to argue to the jury that the counts stem from the <strong>same</strong> criminal episode.</p>

        <p>[<strong>End Update</strong>]</p>
        <h3 id="specific_attacksseparate_criminal_episode_findings_for_application_of_non_traditional_recidivist_schemes."> <strong>§ 1-7.9.1. Specific Attacks—Separate Criminal Episode Findings for Application of “Non-Traditional” Recidivist Schemes.</strong></h3>

        <p>In <a href="http://scholar.google.com/scholar_case?q=Witte+v.+United+States&amp;hl=en&amp;as_sdt=2,38&amp;case=5421751169894487412&amp;scilh=0">Witte v. United States</a>, one of the defendant’s prior convictions, which he incurred before committing his current crime of conviction, was used to enhance his punishment for his current conviction. He challenged that enhancement, by arguing that using his prior conviction in this manner punished him a second time for his prior conviction, in violation of his rights against double jeopardy. The Court rejected that argument. Relying on the recidivist theory, the Court explained, “[A] crime committed by an offender with a prior conviction”—<em>i.e.</em>, an incorrigible offender, because his prior conviction failed to deter his new criminal conduct—“‘is considered to be an aggravated offense because a repetitive one.’” 515 US at 403 (quoting <a href="http://scholar.google.com/scholar_case?case=10229866156480998197&amp;q=334+US+728&amp;h">Gryger</a>, 334 US at 732).</p>

        <p><em>Witte</em> thus held that the defendant was not punished a second time for his prior conviction. Instead, his punishment for his current crime of conviction was being enhanced because, as evidenced by the fact he reoffended after incurring his prior conviction, his prior had no specific deterrent effect on him. This lack of specific deterrent effect established him as incorrigible, so deserving of enhanced punishment relative to, for example, a first-time offender.</p>

        <p>Recidivist schemes such as that at issue in <em>Witte</em>, which use as predicates prior convictions, and even juvenile adjudications, incurred before the defendant’s commission of his current crime are “traditional” recidivist schemes. Oregon has a handful of traditional schemes. They include:</p>

        <p>• <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="635"
                data-subsection=""
            >ORS 137.635</a>;</p>

        <p>• The second time Class A felony sex offender statute, <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="725"
                data-subsection=""
            >ORS 137.725</a>;</p>

        <p>• The felony DUII statutes, <a
                href="#"
                data-action="show-ors"
                data-chapter="813"
                data-section="010"
                data-subsection="(5)"
            >ORS 813.010(5)</a>; <a
                href="#"
                data-action="show-ors"
                data-chapter="813"
                data-section="011"
                data-subsection=""
            >ORS 813.011</a>; and</p>

        <p>• The firearm-minimum statute. <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="610"
                data-subsection="(b)"
            >ORS 161.610(b)</a> and (c).</p>

        <p>But Oregon has many more “non-traditional” recidivist schemes. These non-traditional schemes also use as predicates current crimes of conviction incurred to enhance punishment for other current crimes of conviction. These non-traditional schemes include:</p>

        <p>• Guidelines criminal-history scoring (<em>i.e.</em>, “reconstituting” criminal history), OAR 213-004-0006;</p>

        <p>• Major felony sex offender, <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="690"
                data-subsection=""
            >ORS 137.690</a>;</p>

        <p>• Repeat property offender, <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="717"
                data-subsection=""
            >ORS 137.717</a>;</p>

        <p>• Repeat felony sex offender, <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="719"
                data-subsection=""
            >ORS 137.719</a>;</p>

        <p>• Repeat drug-crime offender, <a
                href="#"
                data-action="show-ors"
                data-chapter="475"
                data-section="934"
                data-subsection=""
            >ORS 475.934</a>;</p>

        <p>• Separate convictions for crimes that otherwise would merge. <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="067"
                data-subsection=""
            >ORS 161.067</a>.</p>

        <p>• Repeat methamphetamine offender, <a
                href="#"
                data-action="show-ors"
                data-chapter="475"
                data-section="935"
                data-subsection=""
            >ORS 475.935</a>;</p>

        <p>• Dangerous offender (in Class B and C felony cases), <a
                href="#"
                data-action="show-ors"
                data-chapter="161"
                data-section="725"
                data-subsection="(b)"
            >ORS 161.725(b)</a> and (c); and</p>

        <p>• Guidelines consecutive-sentence limitations (shift-to-I, 200%, 400% rules). OAR 213-012-0020.</p>
        <h2 id="june_2023_update_14"><strong>June 2023 Update</strong></h2>

        <p>The list of non-traditional recidivist schemes includes the repeat drug-crime offender law. <a
                href="#"
                data-action="show-ors"
                data-chapter="475"
                data-section="934"
                data-subsection=""
            >ORS 475.934</a>. But that statute does not become operative until July 1, 2023, and will apply only to crimes committed on or after that date. Or Laws 2013, ch 649, § 12.</p>

        <p><strong>[End Update]</strong></p>

        <p>Of major significance, the incorrigibility concept—failure of specific deterrence—which is used in traditional recidivist schemes is inapplicable in non-traditional schemes. The prior conviction could not possibly have deterred the defendant from committing the subsequent crime, because the defendant will have committed the “subsequent” crime before incurring the “prior conviction.”</p>

        <p>PRACTICE TIP: The incorrigibility concept, which saved the traditional recidivist scheme at issue in <em>Witte</em> from a double jeopardy attack, plays no role in non-traditional recidivist schemes. Because of that, defense counsel should rely on <em>Witte</em>, and <em>Gryger v. Burke</em>, to argue that non-traditional schemes’ use of current crimes as predicates violates double jeopardy. Counsel also should rely on <em>Alessi v. Quinlan</em> and <em>State v. Howe</em> to argue that non-traditional schemes’ use of current crimes as predicates is irrational, so violates substantive due process. </p>

        <p>Defendant counsel also should be aware of <a href="https://scholar.google.com/scholar_case?case=3667663101840199273&amp;q=210+Or+">State v. Rhoades</a>, 210 Or App 280, 149 P3d 1259 (2006). There, the defendant was sentenced under one of the state’s non-traditional recidivist schemes, the repeat felony sex offender law. <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="719"
                data-subsection=""
            >ORS 137.719</a>. That law establishes life without parole (“true life”) for persons convicted of a felony sex crime, with the predicates being the defendant having been sentenced at least two times before for felony sex crimes (so a type of “three strikes” law). The defendant had two such predicates, but they were for crimes committed “in a single course of criminal conduct with the same victim, within a short time frame, and within a limited geographical area.” <em>Rhoades</em>, 210 Or App at 288. The court exercised its authority to create nonenumerated mitigating factors, to treat the rather singular nature of the predicates as “a substantial and compelling reason to depart from the presumptive life sentence,” and to impose a mitigated (downward) departure of 60 months. <em>Id</em>. at 282, 288. The Court of Appeals upheld that factor, stating: “[T]he particular circumstances here may be considered mitigating circumstances in determining if there are substantial and compelling reasons to depart from the presumptive life sentence.” <em>Id</em>. at 289.</p>

        <p>PRACTICE TIP: Under <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="719"
                data-subsection="(a)"
            >ORS 137.719(a)</a>, “[s]entences for two or more convictions that are imposed in the same sentencing proceeding are considered to be one sentence[.]” Defendant Rhoades had been sentenced in separate criminal proceedings twice before, for felony sex offenses. But the crimes were of such a nature that they could have been joined in a single proceeding. <em>See</em> <a
                href="#"
                data-action="show-ors"
                data-chapter="132"
                data-section="560"
                data-subsection=""
            >ORS 132.560</a> (authorizing joinder of counts). Had they been joined, <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="719"
                data-subsection="(a)"
            >ORS 137.719(a)</a> would have prohibited application of the presumptive sentence of “true life.” This created the “particular circumstances” on which the Court of Appeals relied, to uphold the trial court’s nonenumerated mitigating factor. When possible in cases involving non-traditional recidivist schemes, defense counsel should rely on the nonenumerated factor from <em>Rhoades</em> to try to mitigate punishment.</p>
        <h2 id="ad_hoc_application_of_sentencing_schemes."><strong>§ 1-7.10. Ad Hoc Application of Sentencing Schemes.</strong></h2>

        <p>In <a href="http://scholar.google.com/scholar_case?case=14321947009412222632&amp;q=354+Or+64&amp;hl=en&amp;as_sdt=6,38">State v. Savastano</a>, 354 Or 64, 309 P3d 1083 (2013), the Supreme Court reversed the Court of Appeals decision, by overruling its by then 30-year-old decision in <a href="https://scholar.google.com/scholar_case?case=14678438841309438881&amp;q=295+Or+367&amp;hl=en&amp;as_sdt=6,48">State v. Freeland</a>, 295 Or 367, 375, 667 P2d 509 (1983), which held that under the equal privileges and immunities clause of Article I, section 20, of the Oregon Constitution, the prosecution must adhere to a “coherent, systematic policy” (<em>i.e.</em>, legitimate criteria consistently applied) in making discretionary decisions.</p>

        <p>The Supreme Court explained that to prevail on an Article I, section 20 claim, a defendant must initially show that the government in fact denied the individual defendant an equal privilege or immunity afforded other, similarly situated citizens. An executive agency’s or official’s decision will comply with Article I, section 20 so long as no discriminatory practice or illegitimate motive is shown, and the use of discretion has a defensible explanation in the individual case. The decision will be “defensible” when there is a rational explanation for the differential treatment that is reasonably related to the agency’s or official’s task, or to the person’s individual situation. The court further acknowledged that statutes or policies providing consistent guidelines for charging decisions may be useful in guiding prosecutorial discretion and limiting the potential for treating similarly situated individuals differently. But the court concluded that the failure to adopt or to adhere to such policies did not violate Article I, section 20.</p>

        <p>In <a href="http://scholar.google.com/scholar_case?case=14321947009412222632&amp;q=354+Or+64&amp;hl=en&amp;as_sdt=6,38">Savastano</a>, the defendant claimed that the prosecutor had treated her arbitrarily when he aggregated numerous theft transactions month by month. In rejecting the defendant’s section 20 claim, the Supreme Court held that the prosecutor’s explanation, that he had aggregated the theft transactions for purposes of jury clarity, was reasonable and permissible, and satisfied the requirements of Article I, section 20.</p>
        <h2 id="specific_attacksspeedy_trial"><strong>§ 1-7.11. Specific Attacks—Speedy Trial</strong></h2>

        <p>In pertinent part, Article I, section 10, of the Oregon Constitution states: “[J]ustice shall be administered, openly and without purchase, completely and without delay[.]” This constitutional right applies to sentencing component of criminal prosecutions. <em>See, e.g.</em>, <a href="https://scholar.google.com/scholar_case?case=554973298282375963&amp;q=249+Or+App+480&amp;hl=en&amp;as_sdt=6,48">State v. Lewis</a>, 249 Or App 480, 492, 278 P3d 51(2012) (“[a] defendant’s constitutional right to the administration of justice without delay is not extinguished after a jury returns its verdict, but extends to every component of the prosecution, including imposition of a sentence in accordance with applicable law”; citing <a href="http://scholar.google.com/scholar_case?case=1328923367946889640&amp;q=343+Or+557&amp;hl=en&amp;as_sdt=2,38">State v. McDonnell</a>, 343 Or 557, 572, 176 P3d 1236 (2007), <em>cert den</em>, 555 US 904 (2008)). <em>Accord</em> <a href="http://scholar.google.com/scholar_case?case=3551542191854124437&amp;q=123+Or+App+288&amp;hl=en&amp;as_sdt=2,38">State v. Dunn</a>, 123 Or App 288, 859 P2d 1169, <em>rev den</em>, 318 Or 459 (1994) (speedy-trial principles apply in context of probation-violation proceedings). Likewise, federal constitutional speedy-trial principles also apply to the sentencing component. <em>See also</em> <a href="http://scholar.google.com/scholar_case?case=8278270407139395816&amp;q=951+F2d+1431+&amp;hl=en&amp;as_sdt=2,38">Burkett v. Fulcomer</a>, 951 F2d 1431 (3d Cir 1987), <em>cert den sub nom</em>, <em>Haberstroh v. Burkett</em>, 505 US 1229 (1992); <a href="http://scholar.google.com/scholar_case?case=6244569396127136807&amp;q=718+F2d+308&amp;hl=en&amp;as_sdt=2,38">Tinghitella v. California</a>, 718 F2d 308, 313 (9th Cir 1983) (<em>per curiam</em>) (citing <a href="http://scholar.google.com/scholar_case?case=16063243386318217426&amp;q=352+US+354&amp;hl=en&amp;as_sdt=2,38">Pollard v. United States</a>, 352 US 354, 361, 77 S Ct 481, 1 L Ed2d 393 (1957)); <a href="https://scholar.google.com/scholar_case?case=6922017712383515899&amp;q=496+F2d+190&amp;hl=en&amp;as_sdt=6,48">Juarez-Casares v. United States</a>, 496 F2d 190 (5th Cir 1974); <a href="https://scholar.google.com/scholar_case?case=554973298282375963&amp;q=249+Or+App+480&amp;hl=en&amp;as_sdt=6,48">Lewis</a>, 249 Or App at 497; <a href="http://scholar.google.com/scholar_case?case=13411120002652988411&amp;q=405+A2d+706+&amp;hl=en&amp;as_sdt=2,38">State v. Cunningham</a>, 405 A2d 706 (Del Super Ct 1979). </p>

        <p>If a defendant’s constitutional speedy trial right is violated during the sentencing component of his prosecution, the remedy is dismissal of the sentencing component. In effect, this dismissal would result in the defendant incurring a sentence of discharge (discussed in Chapter 4). <em>See also</em> <a href="http://scholar.google.com/scholar_case?q=496+F2d+190+&amp;hl=en&amp;as_sdt=2,38&amp;case=6922017712383515899&amp;scilh=0">Juarez-Casares</a>, 496 F2d at 193 (“proper remedy” for violation of speedy sentencing right “is to vacate the sentence and release the defendant from custody”). </p>

        <p>But defense counsel must recognize that a defendant may face a sentencing phase trial that is bifurcated from the trial phase (<em>i.e.</em>, his trial on the underlying crimes and, generally, on offense-specific enhancement facts, <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="770"
                data-subsection=""
            >ORS 136.770</a>). The sentencing trial would address only any offender-specific enhancement facts, <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="773"
                data-subsection=""
            >ORS 136.773</a>, and offense-specific enhancement facts that were deferred to the sentencing phase under <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="770"
                data-subsection="(a)"
            >ORS 136.770(a)</a> and (4). Or in a case that another court has remanded for resentencing, under <a
                href="#"
                data-action="show-ors"
                data-chapter="136"
                data-section="790"
                data-subsection=""
            >ORS 136.790</a> and 136.792, the sentencing phase trial could address the types of enhancement facts discussed in Section 1-7.2.3.</p>

        <p>But no matter the procedural posture of the sentencing trial, it is part of the defendant’s trial. As such, <a
                href="#"
                data-action="show-ors"
                data-chapter="135"
                data-section="747"
                data-subsection=""
            >ORS 135.747</a>’s statutory speedy trial requirements arguably apply to the sentencing component. Because a statutory dismissal does not require a demonstration of prejudice, as is required for a constitutional dismissal, in cases of prosecution-caused unreasonable delays in sentencing trials, defense counsel should not hesitate to move to dismiss on statutory grounds as well as, when appropriate, constitutional grounds.</p>
        <h2 id="specific_attacksspecial_state_constitutional_provisions."><strong>§ 1-7.12. Specific Attacks—Special State Constitutional Provisions.</strong></h2>

        <p>The Oregon Constitution’s Bill of Rights has two sections that restrict trial court sentencing authority. Ordinarily defendants use these sections in an effort to avoid application of the state’s various, mandatory sentencing laws. But the Bill of Rights sections may be used as a means to avoid application of any of the state’s sentencing laws, mandatory or otherwise.</p>

        <p>The first of the Bill of Rights sections (previously discussed in Section 1-1.1), states: “Laws for the punishment of crime shall be founded on these principles: protection of society, personal responsibility, and accountability for one’s actions and reformation.” Or Const, Art I, § 15. In <a href="http://scholar.google.com/scholar_case?q=184+Or+App+277&amp;hl=en&amp;as_sdt=2,38&amp;case=13303335512445438123&amp;scilh=0">State v. Kinkel</a>, the court confronted the claim that the effectively “true-life” sentence—a “string” of consecutive, mandatory sentences totaling about 112 years that the trial court imposed on a defendant who was 15-years-old and suffered from multiple, untreated or improperly treated mental illnesses when he committed his crimes but who was demonstrably amenable to rehabilitation if he received proper treatment—was unconstitutional under the principles that section 15 enumerates. The court rejected the claim, stating: “To the extent that the four criteria [of Article I, section 15] can be applied on the level of individualized sentencing, their particular significance must vary depending on the circumstances of the crime or crimes being sentenced.” <a href="http://scholar.google.com/scholar_case?q=184+Or+App+277&amp;hl=en&amp;as_sdt=2,38&amp;case=13303335512445438123&amp;scilh=0">Kinkel</a>, 184 Or App at 287. </p>

        <p>The second of the Bill of Rights sections states in pertinent part: “Cruel and unusual punishments shall not be inflicted, but all penalties shall be proportioned to the offense.” Or Const, Art I, ß 16. This provision lends itself to three types of challenges, the first of which parallels an Eighth Amendment-type challenge, which defendants base on national and even international comparisons of sentences for specific criminal behavior to determine whether a jurisdiction’s sentence for that crime is so far beyond the norm that imposing it would be constitutionally impermissible. <em>See, e.g.</em> <a href="https://scholar.google.com/scholar_case?case=11619441780737591071&amp;q=554+US+407&amp;hl=en&amp;as_sdt=6,48">Kennedy v. Louisiana</a>, 554 US 407, 128 S Ct 2641, 171 S Ct 525 (2008) (death penalty for rape of a child violates Eighth Amendment’s Cruel and Unusual Punishment Clause). <em>See also</em> <a href="http://scholar.google.com/scholar_case?q=551+F3d+875&amp;hl=en&amp;as_sdt=2,38&amp;case=9727484140801145759&amp;scilh=0">Gonzales v. Duncan</a>, 551 F3d 875, 889 (9th Cir 2008) (“third-strike” sentence of 28 years to life, for failure to update sex-offender registration, grossly disproportionate so violated the Eighth Amendment’s prohibition of cruel and unusual punishment).</p>

        <p>In the context of an Article I, section 16 challenge, a sentence would be constitutionally impermissible if the sentence “is so disproportionate to the offense as to shock the moral sense of all reasonable persons as to what is right and proper.” <a href="http://scholar.google.com/scholar_case?q=313+Or+391&amp;hl=en&amp;as_sdt=2,38&amp;case=5915077737758307140&amp;scilh=0">State v. Isom</a>, 313 Or 391, 401, 837 P2d 491 (1992). Moreover, in <a href="http://scholar.google.com/scholar_case?q=166+Or+App+564&amp;hl=en&amp;as_sdt=2,38&amp;case=9817147989863100061&amp;scilh=0">State v. Thorp</a>, 166 Or App 564, 2 P3d 903 (2000) (<em>en banc</em>), <em>rev dismissed</em>, 332 Or 559 (2001), the Court of Appeals said that in determining whether application of a sentence “is so disproportionate to the offense as to shock the moral sense of all reasonable persons,” Oregon courts use the three-part Eighth Amendment test stated in <a href="https://scholar.google.com/scholar_case?case=2766729709200544869&amp;q=463+US+277&amp;hl=en&amp;as_sdt=6,48">Solem v. Helm</a>, 463 US 277, 103 S Ct 3001, 77 L Ed 2d 637 (1983). Under that test, the court considers: “(1) the gravity of the offense and the harshness of the penalty; (2) the sentences imposed on other criminals in the same jurisdiction; and (3) the sentences imposed for commission of the same crime in other jurisdictions.” <em>Thorp</em>, 166 Or App at 571. The <em>Thorp</em> court further indicated that within that three-part test, the court considers the defendant’s background, including his criminal history (if any). <em>See Id</em>. at 578. </p>

        <p>The analysis for whether a penalty violates the “cruel and unusual” clause is not dependent on historical antecedents, such as whether cutting off a hand for theft was cruel and unusual punishment in 1776. Because morality and ethics are not static, and instead evolve through time, the federal clause looks to “the evolving standards of decency that mark the progress of a maturing society.” <a href="https://scholar.google.com/scholar_case?case=5709058278308728322&amp;q=130+S+Ct+2011&amp;hl=en&amp;as_sdt=6,48">Graham v. Florida</a>, 560 US 48, 130 S Ct 2011, 2021, 176 L Ed 3d 825 (2010). Personal characteristics of the defendant that bear on his responsibility for the crime may factor into the analysis. <em>See</em> 130 S Ct at 2022. <em>Cf</em>. <a href="http://scholar.google.com/scholar_case?case=10766850373338538153&amp;q=156+Or+App+241&amp;hl=en&amp;as_sdt=2,38">State v. Gee</a>, 156 Or App 241, 243-44, 965 P2d 462 (1998) (because health conditions that motivated defendant to commit crime were “self-induced,” conditions could not factor into a state constitutional analysis). For example, in <a href="https://scholar.google.com/scholar_case?case=8004291912972413894&amp;q=361+Or+602&amp;hl=en&amp;as_sdt=6,48">State v. Ryan</a>, 361 Or 602, 621, 396 P3d 1012 (2017), the court held: “[A] sentencing court must consider an offender’s intellectual disability in comparing the gravity of the offense and the severity of a mandatory prison sentence on such an offender in a proportionality analysis under [<a href="https://scholar.google.com/scholar_case?case=15869527206720165540&amp;q=347+Or+46&amp;hl=en&amp;as_sdt=6,48">State v. Rodriguez/Buck</a>, 347 Or 46, 217 P3d 659 (2009)].”</p>
        <h2 id="june_2023_update_15"><strong>June 2023 Update</strong></h2>

        <p><a href="https://scholar.google.com/scholar_case?case=3308291696405649256&amp;q=363+Or+1&amp;hl=en&amp;as_sdt=6,48">Kinkel v. Persson</a>, 363 Or 1, 24, 417 P3d 401 (2018) (court must consider the transience of a juvenile defendant’s youth); <a href="https://scholar.google.com/scholar_case?case=13682898138899853445&amp;q=305+Or+App+750&amp;hl=en&amp;as_sdt=6,38">State v. Ryan</a>, 305 Or App 750, 473 P3d 90 (2020) (notwithstanding that defendant was found competent to stand trial and was not found guilty except for insanity, trial court erred in imposing 75-month mandatory prison sentence by failing to consider whether defendant’s intellectual disability was permanent);</p>

        <p><strong>[End Update]</strong></p>

        <p><em>See also</em> <a href="https://scholar.google.com/scholar_case?case=8035680975258117574&amp;q=276+Or+App+574&amp;hl=en&amp;as_sdt=6,48">State v. Sanderlin</a>, 276 Or App 574, 368 P3d 74 (2016) (because trial court refused to account for defendant’s diminished mental capacity, court erred in rejecting defendant’s claim against 300-month sentence); <a href="http://scholar.google.com/scholar_case?case=14520824417850762997&amp;q=243+Or+App+464&amp;hl=en&amp;as_sdt=2,38">State v. Wilson</a>, 243 Or App 464, 468, 259 P3d 1004 (2011) (“[w]e agree with the parties that the trial court can take into account a defendant’s mental capacity when determining whether a Measure 11 sentence violates Article I, section 16”).</p>
        <h2 id="june_2023_update_16"><strong>June 2023 Update</strong></h2>

        <p>'But see'' <a href="https://scholar.google.com/scholar_case?case=7644161378352903078&amp;q=303+Or+App+504&amp;hl=en&amp;as_sdt=6,38">State v. Rideout</a>, 303 Or App 504, 523, 465 P3d 255 (2020) (because “defendant’s conduct involved physically invasive violent sexual assaults against two vulnerable victims,” and that although he was “repeatedly confronted about the wrongfulness of his conduct, defendant persisted in his predatory behavior towards the victims,” the trial court erred in ruling that Article I, section 16 prohibited imposing the 25-year minimum prison term mandated by <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="690"
                data-subsection=""
            >ORS 137.690</a>). Also, there is an open question of whether the severity of a sentence is determined solely by reference to the length of incarceration—a quantitative assessment—or whether the analysis also permits consideration of the subjective experiences of the defendant while incarcerated—a qualitative assessment. <a href="https://scholar.google.com/scholar_case?case=1452805564339575239&amp;q=297+Or+App+862&amp;hl=en&amp;as_sdt=6,48">State v. Cook</a>, 297 Or App 862, 872-74, 445 P3d 343 (2019).</p>

        <p><strong>But most significantly</strong>, in <a href="https://scholar.google.com/scholar_case?case=10390988179175704571&amp;q=State+v.+Bartol&amp;hl=en&amp;as_sdt=6,38">State v. Bartol</a>, 368 Or 598, 496 P3d 2013 (2021) (Duncan, J.), the court came exceedingly close to abolishing the state’s capital punishment system. The court applied proportionality principles of Article I, section 16, of the Oregon Constitution. The court did so by mirroring the Eighth Amendment principle, which applies the “evolving standards of decency with specific marks on the way to full progress and mature judgment means that resort to the penalty must be reserved for the worst of crimes and limited in its instances of application.” <a href="https://scholar.google.com/scholar_case?case=11619441780737591071&amp;q=554+US+407&amp;hl=en&amp;as_sdt=6,38">Kennedy v. Louisiana</a>, 554 US 407, 446-47, 128 S Ct 2641, 171 L Ed 2d 525 (2008) (quoted in <a href="https://scholar.google.com/scholar_case?case=10390988179175704571&amp;q=State+v.+Bartol&amp;hl=en&amp;as_sdt=6,38">Bartol</a>, 368 Or at 622).</p>

        <p>The foundation of the <em>Bartol</em> court’s decision is the 2019 Legislature’s Senate Bill 1013 (enrolled as Oregon Laws 2019, chapter 635). That bill severely restricted the scope of the state’s capital punishment scheme. “[A]lthough the legislature did not make SB 1013 retroactive as to sentences imposed before its effective date, maintaining defendant’s death sentence would violate Article I, section 16. Therefore, we * * * reverse his death sentence and remand the case for resentencing.” <em>Bartol,</em> 368 Or at 600.</p>

        <p>In so holding, the court effectively made SB 1013 retroactive to defendant Bartol’s sentence imposed before the bill’s effective date. The court explained:</p>
        <blockquote>

            <p>“[T]he enactment of the bill itself reflects a judgment that conduct that was previously classified as ‘aggravated murder’ does not fall within the narrow category of conduct that can be punished by death, as opposed to lesser sentences, including life imprisonment. Consequently, maintaining defendant’s death sentence in this case would violate two special proportionality requirements that, under Article I, section 16, apply to the death penalty: [1] the requirement that the death penalty be limited to those offenders who commit a narrow category of the most serious crimes and whose extreme culpability makes them the most deserving of execution, and [2] the requirement that there be a fundamental, moral distinction between crimes that are punishable by death and those that are not. Maintaining his death sentence would allow the execution of a person for conduct that the legislature has determined no longer justifies that unique and ultimate punishment, and it would allow the execution of a person for conduct that the legislature has determined is no more culpable than conduct that should not result in death. Therefore, in light of the legislature’s enactment of SB 1013, we conclude that defendant’s sentence violates Article I, section 16.”</p>
        </blockquote>

        <p><em>Id.</em> at 625 (internal quotations and citations omitted). <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=9378686359099387344&amp;q=368+Or+695&amp;hl=en&amp;as_sdt=4,38">State v. Rogers</a>, 368 Or 695, 499 P3d 45 (2021) (relying on <em>Bartol</em> to vacate death sentence). </p>

        <p>Interestingly, the <em>Bartol</em> decision could be used in support of arguing that other legislation, which reduces sentences but does not include a retroactivity clause, nevertheless apply retroactively to sentences imposed before the legislation’s effective date. It is true that United States domestic (state and federal) law maintains that legislation that reduces sentences, but contains no retroactivity clause, applies prospectively only.<a
                href="#fn14"
                class="footnote-ref"
                id="fnref14"
                role="doc-noteref"
            ><sup>14</sup></a> But because the <em>Bartol</em> decision is grounded on the state constitution’s Article I, section 16, the defense is free to argue that the <em>Bartol</em> principle supersedes the domestic law and requires applying the legislation retroactively. </p>

        <p>Finally, the Supreme Court allowed review of <em>State v. Blackburn</em>, 319 Or App 121, 507 P3d 274 (2022) (affirmed without opinion), the defendant’s</p>
        <blockquote>

            <p>“convictions and sentences for the following first-degree crimes: rape, sodomy, unlawful sexual penetration, sexual abuse, attempted rape, and burglary.</p>

            <p>“On review, the issues are:</p>

            <p>“(1) Under the proportionality clause of Article I, section 16, of the Oregon Constitution, may a trial court consider the aggregate sentence imposed upon a defendant?</p>

            <p>“(2) Under the Eighth Amendment to the United States Constitution, may a trial court consider the aggregate sentence imposed upon a defendant in a proportionality analysis?</p>

            <p>“(3) Is a 75-year aggregate sentence a de facto life sentence that is constitutionally disproportionate as applied to a defendant with an IQ of between 63 and 71, and who was 17 years old when the offenses began?”</p>
        </blockquote>

        <p><strong>[End Update]</strong></p>
        <h3 id="june_2023_update_17"><strong>JUNE 2023 UPDATE</strong></h3>

        <p>Finally, the Supreme Court allowed review of <em>State v. Blackburn</em>, 319 Or App 121, 507 P3d 274 (2022) (affirmed without opinion), the defendant’s</p>

        <p>“convictions and sentences for the following first-degree crimes: rape, sodomy, unlawful sexual penetration, sexual abuse, attempted rape, and burglary.</p>

        <p>“On review, the issues are:</p>

        <p>“(1) Under the proportionality clause of Article I, section 16, of the Oregon Constitution, may a trial court consider the aggregate sentence imposed upon a defendant?</p>

        <p>“(2) Under the Eighth Amendment to the United States Constitution, may a trial court consider the aggregate sentence imposed upon a defendant in a proportionality analysis?</p>

        <p>“(3) Is a 75-year aggregate sentence a de facto life sentence that is constitutionally disproportionate as applied to a defendant with an IQ of between 63 and 71, and who was 17 years old when the offenses began?”</p>

        <p><strong>[End Update]</strong></p>

        <p>The second means for bringing a section 16 challenge is through a “vertical” comparison of sentences under Oregon law, <em>i.e.</em>, comparing the sentence for a lesser-included offense with the sentence for the greater offense. Under <a href="http://scholar.google.com/scholar_case?q=291+Or+153&amp;hl=en&amp;as_sdt=2,38&amp;case=12498319768823710840&amp;scilh=0">State v. Shumway</a>, if the sentence for the lesser-included exceeds the sentence for the greater offense, the sentence for the lesser-included may violate section 16. <em>See</em> <a href="https://scholar.google.com/scholar_case?case=13486734721687430013&amp;q=254+Or+App+106&amp;hl=en&amp;as_sdt=6,48">State v. Barajas</a>, 254 Or App 106, 111, 292 P3d 636 (2012), <em>rev den</em>, 353 Or 747 (2013) (if the sentence for the lesser-included exceeds the maximum sentence for the greater offense, the sentence for the lesser-included violates section 16). <em>See also</em> <a href="http://scholar.google.com/scholar_case?q=158+Or+App+419&amp;hl=en&amp;as_sdt=2,38&amp;case=12397698261094005102&amp;scilh=0">State v. McLain</a>, 158 Or App 419, 974 P2d 727 (1999) (relying on <em>Shumway</em> to hold that where mandatory sentence for lesser-included offense of murder exceeded permissible sentence for greater offense of aggravated murder, sentencing scheme for lesser-included offense violated section 16 so was unenforceable). “‘Vertical proportionality’ is measured by the sentences that are available for the conduct at issue, not on what any individual defendant actually receives.” <a href="http://scholar.google.com/scholar_case?q=State+v.+Simonson&amp;hl=en&amp;scisbd=2&amp;as_sdt=4,38&amp;case=16411196389150338552&amp;scilh=0">State v. Simonson</a>, 243 Or App 535, 542 n 8, 259 P3d 962 (2011) (trial court erred in ranking convictions for lesser-included offense at level 7, when convictions for greater offense would have been ranked at level 6). </p>

        <p>Until recently in state history, successful challenges under section 16 have been strictly limited to vertical analyses. That changed when the Supreme Court decided <a href="http://scholar.google.com/scholar_case?q=347+Or+46&amp;hl=en&amp;as_sdt=2,38&amp;case=15869527206720165540&amp;scilh=0">State v. Rodriguez/Buck</a>. There, the courts confronted the claim that section 16 prohibited imposing 75-month minimum sentences state sentencing law mandated for the defendants’ first-degree sexual abuse convictions. The trial courts accepted the defendants’ claims, and imposed lesser, presumptive guidelines sentences. The Court of Appeals reversed. On a 4-3 vote, the Supreme Court&nbsp;reversed the Court of Appeals and affirmed the trial courts’ decisions. <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=5661259847214360651&amp;q=360+Or+370&amp;hl=en&amp;as_sdt=6,48">State v. Davidson</a>, 360 Or 370, 380 P3d 963 (2016) (where defendant, previously convicted of multiple, felony-grade public indecency convictions, incurred “true-life” sentences for two more felony-grade public indecency convictions, the court, after considering defendant’s criminal history for only low level offenses and comparing defendant’s crime to far more serious crimes that carry true-life sentences, held that imposing true-life sentences on defendant was unconstitutionally disproportionate); <a href="https://scholar.google.com/scholar_case?case=5703588097461991550&amp;q=293+Or+App+611&amp;hl=en&amp;as_sdt=6,48">State v. Carey-Martin</a>, 293 Or App 611, 430 P3d 98 (2018) (<em>en banc</em>) (imposition of 25-year sentence for “sexting,” committed over a one a half year period while a teenager, including some “sexts” sent while underage, disproportionate under <em>Rodriguez/Buck</em>).</p>

        <p>The <em>Rodriguez/Buck</em> court established the third means for bringing a section 16 challenge. The court explained that to decide section 16 proportionality claims, the court “examines [i] the relationship between the severity of the penalty and the gravity of the offense, including consideration of the particular conduct of the defendant that constituted the offense.&nbsp;We also consider [ii] the penalties imposed for other crimes and [iii] the defendant’s criminal history.” <em>Rodriguez/Buck</em>, 347 Or at 79 (emphasis added).</p>

        <p>Addressing the first consideration, the court explained that both defendants’ convictions were based on facts that were “at the outer edge of” the type of conduct required for first-degree sexual abuse convictions. <a href="http://scholar.google.com/scholar_case?q=347+Or+46&amp;hl=en&amp;as_sdt=2,38&amp;case=15869527206720165540&amp;scilh=0">Id.</a> at 75. Regarding the third consideration, neither defendant had any criminal history. <em>Id</em>. at 73-78.</p>

        <p>But perhaps the most significant feature of the court’s opinion is found in the phrase emphasized above, “for other crimes.” For the first time, the court did not base a favorable proportionality decision strictly on a “vertical” comparison of sentences. Instead, the court also based its decisions on a type of “horizontal” comparison, by considering the Measure 11 minimum for first-degree sexual abuse against “the penalties imposed for other crimes that have similar characteristics to the crime at issue”; specifically, the second-degree versions of rape, sodomy, and sexual abuse. <em>Id.</em> at 75. The court explained:</p>

        <p>“[N]othing in the concept of proportionality in criminal sentencing suggests that the only ‘proportion’ that should be considered is the relationship between the crime for which the defendant was convicted and the punishment for that crime.&nbsp;Indeed, a standard that considers the offense and the penalty at issue in the context of related offenses and penalties provides a closer connection to the manner in which the substantive criminal laws and the sentencing statutes work together—and to what would, or would not, ‘shock the moral sense’ of reasonable people—than the purely abstract comparison of any single offense and the penalty for that offense.”</p>

        <p><em>Id.</em> at 64-65.</p>

        <p>However, this part of the analysis does not involve comparing aggregate sentences—consecutive sentences for multiple convictions—with the sentence for a single crime. Thus, the court rejected the defendant’s claim, which he based on a comparison of his consecutive 119-month “sentence for 10 counts of first-degree encouraging child sex abuse to the [100-month] sentence for [the] single related crime” of first-degree rape. <a href="https://scholar.google.com/scholar_case?case=1717903224985581240&amp;q=259+Or+App+547&amp;hl=en&amp;as_sdt=6,38">State v. Parker</a>, 259 Or App 547, 553, 314 P3d 980 (2013), <em>rev den</em>, 355 Or 380 (2014). After conducting the appropriate examination, the court concluded that the “considerations” that guide proportionality analyses</p>

        <p>“lead us * * * to conclude that these cases present the rare circumstance in which the statutorily prescribed penalty is so disproportionate to the offenses committed by these defendants that it ‘shocks the moral sense’ of reasonable people.&nbsp;Accordingly, 75-month sentences, as applied to defendants here, would violate Article I, section 16, of the Oregon Constitution.”</p>

        <p><em>Id.</em> at 79.</p>

        <p>In <a href="http://scholar.google.com/scholar_case?q=231+Or+App+11&amp;hl=en&amp;as_sdt=2,38&amp;case=17493697063374674828&amp;scilh=0">State v. Alwinger</a>, 231 Or App 11, 217 P3d (2009), <em>on recons</em>, 236 Or App 240, 236 P3d 755 (2010), the defendant brought a proportionality claim against the 25-year mandatory minimum for a sexual offense committed against a child, specified by <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="700"
                data-subsection="(D)"
            >ORS 137.700(D)</a>-(F). Among other things, the defendant based his claim on the fact that his mandatory minimum for a non-homicide offense was equal to the mandatory minimum for murder. <em>See</em> <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="700"
                data-subsection="(A)"
            >ORS 137.700(A)</a>.</p>

        <p>In its original opinion, the Court of Appeals rejected that claim on the ground that it was impermissibly based on a “horizontal” comparison. After the Supreme Court held in <a href="http://scholar.google.com/scholar_case?q=347+Or+46&amp;hl=en&amp;as_sdt=2,38&amp;case=15869527206720165540&amp;scilh=0">Rodriguez/Buck</a> that such comparisons are permissible, the Court of Appeals concluded that it must reconsider its original decision. <em>See Alwinger,</em> 236 Or App at 242. The court reaffirmed that decision on the ground that although the minimum terms for murder and certain child-sex offenses might be equal, unlike the child-sex offenses, murder carries a mandatory indeterminate term of life, which the Board of Parole &amp; Post-Prison Supervision might not set aside after the murderer completes his 25-year minimum. <em>See Id.</em> at 246.</p>

        <p>Alwinger thus establishes that how a defendant will be treated later, while he is in prison serving his sentence, may be considered in a proportionality analysis. This provides the possibility of relying on the expected nature of a defendant’s imprisonment as the basis for a renewed proportionality claim against the 25-year mandatory minimum for certain child sex offenses.</p>

        <p>Publications such as Ethan Hoffman &amp; John McCoy, <em>Concrete Mama: Prison Profiles from Walla Walla</em> (1986), provide insight into the likely nature of how pedophiles will be treated in prison. They regularly are victims of extortion. For example, fellow inmates may require them to pay “taxes” just to survive in general population in relative safety. Not infrequently, fellow inmates will assault, and even sexually assault, pedophiles. Sometimes pedophiles will feel compelled to “marry” fellow inmates who will protect them from other inmates. Although that requires a pedophile to become his fellow inmate’s “herm” (her + him), the idea is that it is better to be sexually assaulted by one inmate, rather than by several. To avoid the deplorable treatment that pedophiles receive at the hands of fellow inmates, pedophiles often check into protective custody where they live in mind-crushing isolation. Not surprisingly, pedophiles have high rates of suicide. Even if they do survive their time in prison, they leave broken beyond repair, so have little or no life left anyway.</p>

        <p>A record made in reliance on the Court of Appeals reconsideration opinion in <em>Alwinger</em>, documenting how a pedophile will be treated while in prison, could persuade the courts that notwithstanding the indeterminate life sentence that accompanies a 25-year minimum for murder, a child-sex offender’s 25-year sentence is far worse than a murder sentence. Indeed, owing to the high suicide rate among pedophiles, it could be argued that the treatment that pedophiles endure while in prison establishes that a 25-year mandatory minimum is a “fate worse than death.” If successful, this argument would establish that the sentence for the non-homicide crime actually is worse than a homicide crime.</p>

        <p>Thus, creating a record that demonstrates the nature of imprisonment for murder offenders, as opposed to pedophiles, could serve as the basis for a renewed proportionality attack against the 25-year mandatory minimum for certain child-sex offenses.</p>


        <!-- start sectioni 8 -->
        <h1 id="oar_213_009_0003_other_sanctions."><strong>§ 1-8. OAR 213-009-0003 OTHER SANCTIONS.</strong></h1>

        <p>OAR 213-009-0003 authorizes sentencing courts to impose other sanctions, namely, monetary sanctions, in guidelines cases:</p>

        <p>In addition to the presumptive or departure sentence, the sentencing judge may impose any restitution, fine, fee or other monetary payment authorized or required by law.</p>
        <h2 id="limitations_on_money_judgments."><strong>§ 1-8.1. Limitations on Money Judgments.</strong></h2>

        <p>The commentary to this provision states: “This rule confirms that sentencing guidelines do not supersede the provisions of current law (<em>e.g.</em>, <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="540"
                data-subsection=""
            >ORS 137.540</a>, 161.625, 137.101-.109) as to restitution, fines, fees, or other monetary payments imposed as part of a sentence.” <em>Implementation Manual</em> at 157. </p>
        <h2 id="june_2023_update_18"><strong>June 2023 Update</strong></h2>

        <p>In <a href="https://scholar.google.com/scholar_case?case=2041810995556198363&amp;q=State+v.+Morales,+367+Or+222,+476+P3d+954+(2020)&amp;hl=en&amp;as_sdt=4,38">State v. Morales</a><em>,</em> 367 Or 222, 476 P3d 954 (2020), the Oregon Supreme Court stated the basic principles a trial court must apply, to determine whether the defendant is able to pay financial obligations, and, thus, whether the court may impose financial obligations on the defendant:</p>
        <blockquote>

            <p>“[T]he ability to pay inquiry requires two steps: the court first determines whether the defendant ‘is or may be able to pay’ costs under <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="161"
                    data-section="665"
                    data-subsection="(4)"
                >ORS 161.665(4)</a>; if the answer is yes, then the court determines a reasonable amount to impose. If, however, the answer to the first question is ‘no’—that the defendant does not have the ability to pay—the inquiry ends, and the court is not permitted to impose costs. A trial court may not determine that a defendant has no ability to pay costs under <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="161"
                    data-section="665"
                    data-subsection="(4)"
                >ORS 161.665(4)</a> and then, despite that finding, impose fees under <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="161"
                    data-section="665"
                    data-subsection="(1)"
                >ORS 161.665(1)</a> based solely on security deposit funds <strong>that do not belong to the defendant</strong>.</p>

            <p>“As discussed, we need not decide whether funds deposited by a third party as security never may be used to satisfy a defendant’s obligations. When funds deposited by a third party nevertheless belong to a defendant, they may be used to satisfy the defendant’s financial obligations. Without the presumption that security funds belong to a defendant, however, funds paid by and belonging to a third party <strong>cannot be</strong> the sole basis for a finding that a defendant has the ‘ability to pay’ court-ordered costs.” </p>
        </blockquote>

        <p>367 Or at 234-35 (emphasis added). <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=8750289459635620375&amp;q=313+Or+App+440&amp;hl=en&amp;as_sdt=4,38">State v. Geddeda</a>, 313 Or App 440, 493 P3d 1112 (2021) (the trial court erred in imposing attorney fees, because there was insufficient evidence to find that he “is or may be able to pay” them; neither defendant’s security-release agreement nor defendant’s vague prospect of employment was sufficient to support the state’s burden to establish that defendant had the ability to pay attorney fees).</p>

        <p><strong>[ End Update ]</strong></p>

        <p>Practitioners should be familiar with the limitations on the imposition of these other types of sanctions. For crimes committed before January 1, 2004 and for all hit-and-run cases, the main limitation is that a court must consider whether the defendant has a present and a future ability to pay before imposing any type of monetary payment. <em>E.g.</em>, <a href="http://scholar.google.com/scholar_case?q=State+v.+Lewis&amp;hl=en&amp;as_sdt=4,38&amp;case=7691435609312204307&amp;scilh=0">State v. Lewis</a>, 123 Or App 476, 479, 860 P2d 306 (1993). <em>See also</em> <a href="http://scholar.google.com/scholar_case?q=State+v.+Hart&amp;hl=en&amp;as_sdt=4,38&amp;case=3973014501694066102&amp;scilh=0">State v. Hart</a>, 329 Or 140, 985 P2d 1260 (1999); <a href="https://scholar.google.com/scholar_case?case=1428879674687660645&amp;q=329+Or+127&amp;hl=en&amp;as_sdt=4,38">State v. Edson</a>, 329 Or 127, 985 P2d 1253 (1999). </p>

        <p>For other than hit-and-run convictions for crimes committed on or after January 1, 2004, the court is not required to consider a defendant’s ability to pay. Or Laws 2003, ch 670. For those cases, the law specifies in relevant part that the</p>

        <p>“court may delay the enforcement of the monetary sanctions, including restitution, only if the defendant alleges and establishes to the satisfaction of the court the defendant’s inability to pay the judgment in full at the time the judgment is entered. If the court finds that the defendant is unable to pay, the court may establish or allow an appropriate supervising authority to establish a payment schedule, taking into consideration the financial resources of the defendant and the burden that payment of restitution will impose, with due regard to the other obligations of the defendant.”</p>

        <p><a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="106"
                data-subsection="(4)"
            >ORS 137.106(4)</a>.</p>

        <p>When it determines whether a defendant has established that he “is unable to pay” restitution, a court must be mindful of Article I, section 19 of the Oregon Constitution, which precludes “imprisonment for debt, except in the case of fraud or absconding debtors.” The court also must be mindful of the mandate of the Equal Protection Clause, that criminal judgment debtors be afforded the same protections as civil judgment debtors. <a href="https://scholar.google.com/scholar_case?case=9543590519617312467&amp;q=407+US+128&amp;hl=en&amp;as_sdt=3,38">James v. Strange</a>, 407 US 128, 142, 92 S Ct 2027, 32 L Ed 2d 600 (1972); <a href="http://scholar.google.com/scholar_case?q=Fuller+v.+Oregon&amp;hl=en&amp;as_sdt=3,38&amp;case=7411364463072248175&amp;scilh=0">Fuller v. Oregon</a>, 417 US 40, 47-48, 94 S Ct 2116, 40 L Ed 2d 2116 (1974).</p>
        <h2 id="june_2023_update_19"><strong>June 2023 Update</strong></h2>

        <p>Further regarding restitution, in <a href="https://scholar.google.com/scholar_case?case=16593249533112697817&amp;q=State+v.+Nichols,+306&amp;hl=en&amp;as_sdt=4,38">State v. Nichols</a>, 306 Or App 189, 201, 473 P3d 1145 (2020), the trial court erred in imposing restitution based on lost wages, where the victim voluntarily chose to attend pretrial hearings rather than go to work. But the court did not err imposing restitution for lost wages, when the victim appeared voluntarily at the defendant’s sentencing hearing and the victim had a state constitutional right to appear at that hearing. 306 Or App at 201.</p>

        <p>Defense counsel also should be aware of <a href="https://scholar.google.com/scholar_case?case=1518066971132534616&amp;q=State+v.+Andrews,+366+Or+65&amp;hl=en&amp;as_sdt=4,38">State v. Andrews</a>, 366 Or 65, 77, 456 P3d 261 (2020). There, the court held:</p>
        <blockquote>

            <p>“We conclude that, when a criminal case is submitted to a jury and the jury convicts the defendant of a crime, the trial court is not authorized to award restitution under <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="137"
                    data-section="106"
                    data-subsection=""
                >ORS 137.106</a> unless it can determine from the record and the defendant’s conviction that the jury necessarily found that the defendant committed the criminal act that permits restitution.”</p>
        </blockquote>

        <p>In <em>Andrews</em>, the defendant was charged with (i) fourth-degree assault, for punching the victim and knocking out his tooth bridge; and (ii) harassment, for spitting on the victim. The jury acquitted the defendant of the assault charge, but convicted him of the harassment charge. Notwithstanding the jury’s acquittal on the assault charge, the trial court imposed restitution for the cost of replacing the tooth bridge. The Supreme Court reversed, saying,</p>
        <blockquote>

            <p>“[T]he trial court could not determine from the record and defendant’s conviction for harassment that the jury necessarily found that defendant delivered the punch that resulted in damage to the victim’s tooth bridge. The jury could have based its decision on the spitting evidence alone. Therefore, the trial court did not have authority under <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="137"
                    data-section="106"
                    data-subsection=""
                >ORS 137.106</a> to award restitution for damages that were caused solely by the punch.”</p>
        </blockquote>

        <p>366 Or at 77.</p>

        <p>Case law consistent with <em>Andrews</em> includes: <a href="https://scholar.google.com/scholar_case?case=17141861408633595958&amp;q=309+Or+App+288&amp;hl=en&amp;as_sdt=6,38">State v. Skeen</a>, 309 Or App 288, 481 P3d 403 (2021) (restitution was proper for lost wages, travel, lodging, and food expenses for victim’s family members to give victim impact statements, but improper for lost wages and expenses for meeting with the prosecutor and attending hearings where family members did not participate); <a href="https://scholar.google.com/scholar_case?case=10301778587048111604&amp;q=308+Or+App+808+&amp;hl=en&amp;as_sdt=6,38">State v. Jensen</a>, 308 Or App 808, 480 P3d 296 (2021) (trial court properly imposed joint and several restitution for entire amount of victim’s damages when defendant and two others assaulted victim).</p>

        <p>Also consistent with <em>Andrews</em> is <a href="https://scholar.google.com/scholar_case?case=12423609212466395288&amp;q=367+Or+614&amp;hl=en&amp;as_sdt=4,38">State v. Aguirre-Rodriguez</a>, 367 Or 614, 482 P3d 62 (2021). There, the Oregon Supreme Court reversed the decision of the Court of Appeals, and held that the combination of a paid automobile repair bill, Blue Book value, a detailed repair estimate, and photographs of damage supported reasonableness of the restitution award.</p>

        <p>Along similar lines, in <a href="https://scholar.google.com/scholar_case?case=15491833652805433792&amp;q=304+Or+App+163&amp;hl=en&amp;as_sdt=6,38">State v. De Verteuil</a>, 304 Or App 163, 467 P3d 80 (2020), the trial court awarded restitution for the defendant’s destruction of the victim’s car seat and roof rack. The trial court based the restitution amount on what the victim had originally paid for those items in new condition. The Court of Appeals reversed. It held that the trial court “incorrectly award[ed] the original purchase price of the items as new items without any depreciation for their value at the time and place that defendant’s criminal conduct destroyed those items.” 304 Or App at 170.</p>

        <p>In <a href="https://scholar.google.com/scholar_case?case=9885123118141155100&amp;q=370+or+456&amp;hl=en&amp;as_sdt=6,38">State v. Fox</a>, 370 Or 456, 521 P3d 151 (2022), the Supreme Court affirmed (effectively without opinion) the Court of Appeals’s ruling that the trial court erred in imposing medical services expenses that were based solely on the testimony of a third party with no medical expertise and who represented an agency that paid the bill. But the Supreme Court expressly addressed whether the trial court validly imposed restitution for costs incurred by the victim to hire a civil attorney to represent the victim during the state’s prosecution of a defendant in a criminal trial.</p>

        <p>The Supreme Court explained:</p>
        <blockquote>

            <p>“Under the American Rule, if a victim of a crime were to file a civil action to recover for the injuries and resulting economic damages that the victim suffered at the hands of the criminal defendant, the victim would not be entitled to recover the attorney fees incurred in that civil proceeding unless permitted by statute or contract.”</p>
        </blockquote>

        <p>370 Or at 468.</p>

        <p>The court then “conclude[d] that the legislature did not intend to permit courts to award, as ‘economic damages,’ the attorney fees that a victim chooses to incur in a criminal case to protect their interest in obtaining an award of restitution.” <em>Id</em>. at 469. The court then “conclude[d] that, in this case, the trial court erred in awarding the resulting attorney fees as restitution.” <em>Id.</em> at 470.</p>

        <p>In <a href="https://scholar.google.com/scholar_case?case=15218936043503501854&amp;q=318+Or+App+454+&amp;hl=en&amp;as_sdt=6,38">State v. Gastiaburu</a>, 318 Or App 454, 508 P3d 592 (2022), the defendant appealed a supplemental judgment ordering her to pay restitution for medical expenses to the victim’s health insurer and Oregon Department of Justice Crime Victims’ Compensation (CVC). At the restitution hearing, the state presented evidence that the health insurer and CVC paid for various medical expenses at an amount less than they were billed. On appeal, defendant challenged the restitution awards, contending that the evidence was legally insufficient that the medical expenses were reasonable. The Court of Appeals held that the trial court erred. The evidence was legally insufficient to support the restitution awards to the victim’s health insurer and CVC, because the evidence did not demonstrate how the amounts paid by the health insurer and CVC corresponded to market rates and, therefore, did not demonstrate that the amounts paid by the health insurer and CVC were at or below market rates. The Court of Appeals reversed the supplemental judgment in part and remanded for resentencing.</p>

        <p>Practitioners also should be mindful of the state constitutional exception to the timing requirements that <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="106"
                data-subsection=""
            >ORS 137.106</a> imposes on ordering restitution. In relevant part, <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="106"
                data-subsection="(a)"
            >ORS 137.106(a)</a> provides:</p>
        <blockquote>

            <p>“When a person is convicted of a crime, or a violation as described in <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="153"
                    data-section="008"
                    data-subsection=""
                >ORS 153.008</a>, that has resulted in economic damages, the district attorney shall investigate and present to the court, at the time of sentencing or within 90 days after entry of the judgment, evidence of the nature and amount of the damages. The court may extend the time by which the presentation must be made for good cause.”</p>
        </blockquote>

        <p>In <a href="https://scholar.google.com/scholar_case?case=14515735596572685738&amp;q=302+Or+App+613&amp;hl=en&amp;as_sdt=6,38">State v. Rieker</a>, 302 Or App 613, 461 P3d 1083 (2020), the trial court imposed restitution outside the 90-day limit without making a finding of good cause. Relying on Article I, section 42(1)(d), of the Oregon Constitution, which states that a crime victim has “[t]he right to receive prompt restitution from the convicted criminal who caused the victim’s loss or injury,” the Court of Appeals affirmed. It explained,</p>
        <blockquote>

            <p>“[T]he right of a victim to receive compensation is not ‘purely statutory’ because the statutory scheme itself does not create the right of a victim to receive prompt restitution. Thus, when a court is acting to remedy a victim’s constitutional right to restitution, * * * <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="137"
                    data-section="106"
                    data-subsection=""
                >ORS 137.106</a> does not prevent a trial court from imposing restitution beyond the statutory deadline. * * * Therefore, we conclude that the trial court did not err in declining to consider “good cause” because it had constitutional authority to remedy a violation of the victim’s rights and impose restitution beyond the 90-day deadline.”</p>
        </blockquote>

        <p>302 Or App at 616 (internal quotations and citations omitted). <em>But see</em> <a href="https://scholar.google.com/scholar_case?case=10623239983122666522&amp;q=305+or+app+122&amp;hl=en&amp;as_sdt=6,48">State v. Lynch</a>, 305 Or App 122, 469 P3d 800 (2020) (90-day limit negotiated as part of plea agreement prevented trial court from reopening sentencing for restitution).<a
                href="#fn15"
                class="footnote-ref"
                id="fnref15"
                role="doc-noteref"
            ><sup>15</sup></a> Thus, Article I, section 42(1)(d) effectively negates <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="106"
                data-subsection="(a)"
            >ORS 137.106(a)</a>’s 90-day and good-cause limitations. </p>

        <p>However, in <a href="https://scholar.google.com/scholar_case?case=18299344424420832652&amp;q=313+Or+App+699&amp;hl=en&amp;as_sdt=4,38">State v. Castillo</a>, 313 Or App 699, 705-06, 495 P3d 191 (2021), the Court of Appeals explained that</p>
        <blockquote>

            <p>“in <em>Rieker</em>, we declined to consider the defendant’s argument that the trial court erred in imposing restitution without considering the procedures set forth in <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="147"
                    data-section="500"
                    data-subsection=""
                >ORS 147.500</a> to 147.550, because we concluded that the defendant had not preserved that argument for appeal. <em>Id</em>. at 617. Here, the parties agree that defendant preserved his argument under <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="147"
                    data-section="500"
                    data-subsection=""
                >ORS 147.500</a> to 147.550. <em>Rieker</em> is, therefore, inapposite.” </p>
        </blockquote>

        <p>The <em>Castillo</em> court held:</p>
        <blockquote>

            <p>“The state did not meet the time limitations of ORS chapters 137 or 147. It admits the former and, as to the latter, it is clear that, whether T [the victim] knew or should have known that her right to prompt restitution had been violated when she appeared for sentencing * * * or when she brought the sentencing omission to the district attorney’s attention shortly after that hearing, the date on which the state filed T’s constitutional claim was well beyond the 30-day limit imposed by <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="147"
                    data-section="515"
                    data-subsection="(1)"
                >ORS 147.515(1)</a>. Her claim was time-barred, and <a
                    href="#"
                    data-action="show-ors"
                    data-chapter="147"
                    data-section="504"
                    data-subsection="(2)"
                >ORS 147.504(2)</a> did not empower the district attorney to file that claim for T when T was barred from filing it herself.”</p>
        </blockquote>

        <p><a href="https://scholar.google.com/scholar_case?case=18299344424420832652&amp;q=State+v.+Castillo,+313+Or+App+699&amp;hl=en&amp;as_sdt=4,38">Castillo</a>, 313 Or App at 707. <em>See also</em> <a href="https://scholar.google.com/scholar_case?case=5159246274410454610&amp;q=State+v.+Halfmoon&amp;hl=en&amp;as_sdt=4,38">State v. Halfmoon</a>, 316 Or App 69, 74, 501 P3d 1126 (2021) (“[b]ecause the victim’s <strong>constitutional</strong> right to restitution is a separate issue from the <strong>statutory</strong> ‘good cause’ analysis, the trial court erred in considering them together” (emphasis added)).</p>

        <p><strong>[End Update ]</strong></p>

        <p>Another limitation on the imposition of monetary sanctions is that a trial court may not impose a money judgment on a person found guilty except insane. State v. Gile, 161 Or App 146, 985 P2d 199 (1999). Also, expenses the state incurs in apprehending an escapee “are not recoverable under any theory of civil liability”; therefore, “the trial court lack[s] authority to impose restitution” for recovery of those expenses. <a href="http://scholar.google.com/scholar_case?q=State+v.+Wilson,+193&amp;hl=en&amp;as_sdt=4,38&amp;case=10440417730321477371&amp;scilh=0">State v. Wilson</a>, 193 Or App 506, 511, 92 P3d 729 (2004).</p>

        <p>Money-judgment components are a type of sentence. <em>See</em> <a href="http://scholar.google.com/scholar_case?q=State+v.+Edson&amp;hl=en&amp;as_sdt=4,38&amp;case=1428879674687660645&amp;scilh=0">Edson</a>, 329 Or at 130 n 1. To the extent such components require additional findings, those findings may be subject to the <a href="http://scholar.google.com/scholar_case?q=530+US+466&amp;hl=en&amp;as_sdt=2,38&amp;case=4053038751252355308&amp;scilh=0">Apprendi</a> rule. That is certainly true of fines that require findings, <em>see</em>, <em>e.g.</em>, <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="101"
                data-subsection=""
            >ORS 137.101</a> (compensatory fine); <a
                href="#"
                data-action="show-ors"
                data-chapter="813"
                data-section="010"
                data-subsection="(d)"
            >ORS 813.010(d)</a> (enhanced fine for “high blow” DUII convictions), given that the criminal code includes fines as a form of punishment (the sentence) that may be imposed consequent to a conviction. <a
                href="#"
                data-action="show-ors"
                data-chapter="137"
                data-section="010"
                data-subsection="(7)"
            >ORS 137.010(7)</a>. In reversing a trial court’s imposition of a fine, whose amount the court based on non-juried findings, the United States Supreme Court explained: </p>

        <p>“In all such cases [in which the amount of a fine is calculated by reference to particular facts], requiring juries to find beyond a reasonable doubt facts that determine the fine’s maximum amount is necessary to implement <em>Apprendi</em>’s “animating principle”: the “preservation of the jury’s historic role as a bulwark between the State and the accused at the trial for an alleged offense.” [<a href="https://scholar.google.com/scholar_case?case=6895464573491298301&amp;q=555+U.S.+160&amp;hl=en&amp;as_sdt=3,38">Oregon v. Ice</a>, 555 US 160, 168, 129 S Ct 711, 172 L Ed 2d 517 (2009)]. In stating <em>Apprendi</em>’s rule, we have never distinguished one form of punishment from another. Instead, our decisions broadly prohibit judicial factfinding that increases maximum criminal ‘sentence[s],’ ‘penalties,’ or ‘punishment[s]’—terms that each undeniably embrace fines. <em>E.g.</em>, <a href="https://scholar.google.com/scholar_case?case=16163203473167624369&amp;q=blakely+v+washington&amp;hl=en&amp;as_sdt=3,38">Blakely</a>, 542 US at 304; <a href="http://scholar.google.com/scholar_case?q=530+US+466&amp;hl=en&amp;as_sdt=2,38&amp;case=4053038751252355308&amp;scilh=0">Apprendi</a>, 530 US at 490; Ring, 536 US at 589.”</p>

        <p><a href="http://www.supremecourt.gov/opinions/11pdf/11-94a1b2.pdf">Southern Union Co.</a>, 567 US at 350.</p>

        <p>Whether the principle from <em>Southern Union</em> will apply to other money judgments that require fact finding, such as restitution, remains to be seen. <em>See</em> <a href="http://scholar.google.com/scholar_case?q=State+v.+Mendez&amp;hl=en&amp;as_sdt=4,38&amp;case=12424584753937515628&amp;scilh=0">State v. Mendez</a>, 211 Or App 311, 155 P3d 54 (2007) (where jury found defendant guilty of criminal mischief, by causing damage of no more than \$1,000.00, trial court did not violate Article VII (Amended), section 3, of the Oregon Constitution by imposing restitution of \$1,665.59). <em>But see</em> <a href="https://scholar.google.com/scholar_case?case=11917902093835186099&amp;q=277+Or+App+288&amp;hl=en&amp;as_sdt=4,38">State v. Deslaurier</a>, 277 Or App 288, 371 P3d 505 (2016) (because the restitution scheme does not allow the court to increase the penalty for a crime beyond its statutory maximum, the <a href="http://scholar.google.com/scholar_case?q=530+US+466&amp;hl=en&amp;as_sdt=2,38&amp;case=4053038751252355308&amp;scilh=0">Apprendi</a> rule does not require a jury determination of the facts needed to impose restitution). </p>
    </div>



</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/css/input.css":
/*!***************************!*\
  !*** ./src/css/input.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/@ocdla/ors/src/OrsChapter.js":
/*!***************************************************!*\
  !*** ./node_modules/@ocdla/ors/src/OrsChapter.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrsChapter)
/* harmony export */ });
/* harmony import */ var _Outline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Outline.js */ "./node_modules/@ocdla/ors/src/Outline.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var gSubRe = /^\(([0-9a-zA-Z]+)\)(.*)/gm;
var subRe = /^\(([0-9a-zA-Z]+)\)(.*)/;

// Fetches the contents of the original ORS chapter from the Oregon Legislature web site.
// Transforms it in to a well-formed HTML document.
var OrsChapter = /*#__PURE__*/function () {
  function OrsChapter(chapterNum) {
    _classCallCheck(this, OrsChapter);
    // The chapter number.
    _defineProperty(this, "chapterNum", null);
    // Title of this chapter - must be a string.
    _defineProperty(this, "title", void 0);
    // The chapter's underlying XML document.
    _defineProperty(this, "doc", null);
    // Parsed title of each section of this chapter.
    _defineProperty(this, "sectionTitles", {});
    // Contains references to DOM node <b> elements.
    // Might be unused.
    _defineProperty(this, "sectionHeadings", {});
    this.chapterNum = chapterNum;
    this.doc = new Document();
  }

  // Convert one unstructured chapter into a structured chapter.
  // Use the anchors in the unstructured chapter to build a structured chapter
  // where each section and subsection(s) are grouped and wrapped in the appropriate node hierarchy.
  return _createClass(OrsChapter, [{
    key: "injectAnchors",
    value:
    // Inserts anchors as <div> tags in the doc.
    // Note: this affects the underlying structure
    //  of the XML document.
    function injectAnchors() {
      for (var prop in this.sectionTitles) {
        var _headingDiv = this.doc.createElement('div');
        _headingDiv.setAttribute('id', 'section-' + prop);
        _headingDiv.setAttribute('class', 'ocdla-heading');
        _headingDiv.setAttribute('data-chapter', this.chapterNum);
        _headingDiv.setAttribute('data-section', prop);
        var target = this.sectionHeadings[prop];
        target.parentNode.insertBefore(_headingDiv, target);
      }
      var subset = this.doc.querySelector('.WordSection1');
      var headingDiv = this.doc.createElement('div');
      headingDiv.setAttribute('class', 'ocdla-heading');
      headingDiv.setAttribute('id', 'end');
      subset.appendChild(headingDiv);
    }

    /**
     *
     * @param {String} id
     * @returns DOMNode
     */
  }, {
    key: "getSection",
    value: function getSection(id) {
      return this.doc.getElementById('section-' + id);
    }

    /**
     *
     * @param {String} id
     * @returns DOMNode
     */
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(references) {
      var nodes = [];
      console.log('references length is: ', references);
      for (var i = 0; i < references.length; i++) {
        var reference = references[i];
        var chapter = void 0,
          section = void 0,
          subsection = void 0;
        var rangeStart = void 0,
          rangeEnd = void 0;
        var _reference$split = reference.split('-');
        var _reference$split2 = _slicedToArray(_reference$split, 2);
        rangeStart = _reference$split2[0];
        rangeEnd = _reference$split2[1];
        console.log('Ranges', rangeStart, rangeEnd);
        var _OrsChapter$parseRefe = OrsChapter.parseReference(rangeStart);
        var _OrsChapter$parseRefe2 = _slicedToArray(_OrsChapter$parseRefe, 3);
        chapter = _OrsChapter$parseRefe2[0];
        section = _OrsChapter$parseRefe2[1];
        subsection = _OrsChapter$parseRefe2[2];
        console.log(chapter, section, subsection);
        var ids = subsection ? [parseInt(section), subsection].join('-') : parseInt(section);
        ids = '#section-' + ids;
        console.log(ids);
        var node = this.docTwo.querySelector(ids);
        if (null == node) return null;

        // If the selector specifies a range of subsections retrieve only those.
        if (rangeEnd) {
          console.log('RANGE DETECTED!');
          node = node.parentNode.cloneNode(true);
          node = OrsChapter.extractRange(node, rangeStart, rangeEnd);
        }
        nodes.push(node);
        console.log(nodes);
      }
      return nodes;
    }
  }, {
    key: "retrievePTags",
    value:
    // there are exceptions!!!
    // such as (5)(a).
    // it will find the 5, and put subsection level to 0.
    // HOWEVER, we are actually supposed to be on (a).
    // the level is supposed to be 1.
    // the next subsection in the list is (A).
    // this is ONLY EXPECTED when level is 1. Not when level is 0.
    // so it breaks. Hurray!

    function retrievePTags(section) {
      var text = '';
      var pTags = section.children;
      var fn = function fn(match, p1, offset, original) {
        var duo = match.split(')(');
        return duo.join(')\n(');
      };
      var header = pTags[0].querySelector('b');
      header = pTags[0].removeChild(header);
      header = header.innerText;
      for (var index in pTags) {
        var child = pTags[index];
        var childText = '';
        if (child != null) {
          childText = child.innerText;
        }
        if (childText == null || childText == '') {
          continue;
        }
        childText = childText.trim().replaceAll('\n', ' ');
        text += childText + '\n';
      }
      var matches = text.replaceAll(/(^\([0-9a-zA-Z]+\)\([0-9a-zA-Z]+\))/gm, fn);
      matches = matches.match(gSubRe);
      return matches === null ? [header, text] : [header, matches];
    }
  }, {
    key: "iterateMatches",
    value: function iterateMatches(matches, currentIndex, parent, sectionNumber) {
      var lastLevel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '0';
      //if we leave off at a roman numeral then

      //console.log(matches);
      // console.log(sectionNumber);
      if (sectionNumber == 555) {
        console.log(matches);
      }
      if (currentIndex >= matches.length) {
        return parent;
      }

      //for (var i = currentIndex; i < matches.length; i++) {
      // let match = fun(matches, currentIndex);
      var match = matches[currentIndex].match(subRe);
      var nextMatch = matches[currentIndex + 1];
      var id, divId, text, level;
      if (match == null) {
        // not a subsection
        // what do?
        // nothing. we shouldn't handle this case, this is either descriptive text or not..?
        // maybe handle for single section text like 701.002.
        id = 'description';
        text = matches[currentIndex];
        level = '0';
        return;
      } else {
        id = match[1];
        text = '(' + id + ')' + match[2];
        level = _Outline_js__WEBPACK_IMPORTED_MODULE_0__["default"].findLevel(id, nextMatch);
      }

      //console.log(match);
      // 0 should be full text?
      // 1 is id
      // 2 is text without subsection

      if (level > lastLevel) {
        parent = parent.lastChild;
      } else if (level < lastLevel) {
        if (lastLevel - level == 1) {
          parent = parent.parentNode;
        } else if (lastLevel - level == 2) {
          parent = parent.parentNode.parentNode;
        } else if (lastLevel - level == 3) {
          parent = parent.parentNode.parentNode.parentNode;
        }
      }
      if (parent == null) {
        console.warn('Parent is null');
        console.log(matches, sectionNumber);
        return;
      }
      divId = parent.getAttribute('id') + '-' + id;
      var element = _Outline_js__WEBPACK_IMPORTED_MODULE_0__["default"].buildSection(this.doc, id, divId, text, level);
      parent.appendChild(element);
      // identify subsections
      // build subsection grouping elements

      this.iterateMatches(matches, ++currentIndex, parent, sectionNumber, level);
    }
  }, {
    key: "removeNodes",
    value: function removeNodes(selector) {
      var nodes = this.doc.querySelectorAll(selector);
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        node.parentNode.removeChild(node);
      }
    }
  }, {
    key: "buildToc",
    value: function buildToc() {
      var toc = [];
      for (var key in this.sectionTitles) {
        var val = this.sectionTitles[key];
        toc.push("<li><span class=\"section-number\">".concat(this.chapterNum, ".").concat(key, "</span><a data-action=\"view-section\" data-section=\"").concat(key, "\" href=\"#\">").concat(val, "</a></li>"));
      }
      var joinedToc = toc.join(' ');
      return joinedToc;
    }

    // Highlights a selected section on the page
  }, {
    key: "highlight",
    value: function highlight(section, endSection) {
      console.log(this.chapterNum);
      console.log(section);
      console.log(endSection);
      var range = this.doc.createRange();
      var firstNode = this.doc.getElementById(section);
      console.log(firstNode);
      var secondNode = this.doc.getElementById(endSection);
      console.log(secondNode);
      range.setStartBefore(firstNode);
      range.setEnd(secondNode.parentNode, secondNode.parentNode.childNodes.length);
      console.log(range);
      var newParent = this.doc.createElement('div');
      newParent.setAttribute('style', 'background-color:yellow;');
      var contents = range.extractContents();
      console.log(contents);
    }
  }, {
    key: "cloneFromIds",
    value: function cloneFromIds(startId, endId) {
      var startNode = this.doc.getElementById(startId);
      if (null == startNode) {
        throw new Error('NODE_NOT_FOUND_ERROR: (#' + startId + ')');
      }
      var endNode = this.doc.getElementById(endId);
      if (null == startNode) {
        throw new Error('NODE_NOT_FOUND_ERROR: (#' + endId + ')');
      }
      return this.clone(startNode, endNode);
    }

    // Clones the contents inside a range.
  }, {
    key: "clone",
    value: function clone(startNode, endNode) {
      var range = document.createRange();
      range.setStartBefore(startNode);
      range.setEndBefore(endNode);
      var contents = range.cloneContents();
      var spans = contents.querySelectorAll('span');
      // remove styling from each span
      for (var elements in spans) {
        var element = spans[elements];
        if (element.style) {
          element.style = null;
        }
      }
      // console.log(contents);
      return contents;
    }

    // Given a valid section number,
    // returns the next section in this ORS chapter.
    // Used for building ranges.
  }, {
    key: "getNextSectionId",
    value: function getNextSectionId(sectionNum) {
      var headings = this.doc.querySelectorAll('.ocdla-heading');
      var section = this.doc.getElementById(sectionNum);
      if (null == section) {
        throw new Error('NODE_NOT_FOUND_ERROR: Could not locate ' + sectionNum);
      }
      for (var i = 0; i < headings.length; i++) {
        if (headings.item(i) == section) {
          var nextSection = headings.item(i + 1);
          return nextSection.getAttribute('id');
        }
      }
    }

    // Outputs the document as an HTML string
  }, {
    key: "toString",
    value: function toString() {
      var serializer = new XMLSerializer();
      var subset = this.doc.querySelector('.WordSection1');
      return serializer.serializeToString(subset);
    }
  }], [{
    key: "toStructuredChapter",
    value: function toStructuredChapter(chapter) {
      var ch = new OrsChapter(chapter.chapterNum);
      var doc = ch.doc;
      ch.chapterTitle = chapter.chapterTitle;
      ch.sectionTitles = chapter.sectionTitles;
      var wordSection = doc.createElement('div');
      wordSection.setAttribute('class', 'WordSection1');
      for (var prop in chapter.sectionTitles) {
        // Create a new section element.
        var section = doc.createElement('div');
        section.setAttribute('id', 'section-' + prop);

        // console.log(prop);
        var startId = 'section-' + parseInt(prop);
        var endId = chapter.getNextSectionId(startId);
        var clonedSection = chapter.cloneFromIds(startId, endId);
        var _chapter$retrievePTag = chapter.retrievePTags(clonedSection),
          _chapter$retrievePTag2 = _slicedToArray(_chapter$retrievePTag, 2),
          header = _chapter$retrievePTag2[0],
          matches = _chapter$retrievePTag2[1];

        // If matches are returned as just a string which means no subsections exist for that section then you just build the element with the text that is stored in matches and append it to the section
        if (typeof matches == 'string') {
          var element = _Outline_js__WEBPACK_IMPORTED_MODULE_0__["default"].buildSection(doc, 'description', 'section-' + prop + '-description', matches, 0);
          section.appendChild(element);
        } else {
          chapter.iterateMatches(matches, 0, section, prop);
        }
        wordSection.appendChild(section);
      }
      doc.appendChild(wordSection);
      return ch;
    }
  }, {
    key: "fromResponse",
    value: function fromResponse(resp, chapterNum) {
      return resp.arrayBuffer().then(function (buffer) {
        var decoder = new TextDecoder('iso-8859-1');
        return decoder.decode(buffer);
      }).then(function (html) {
        var parser = new DOMParser();
        var chapter = new OrsChapter(chapterNum);
        // Tell the parser to look for html
        chapter.doc = parser.parseFromString(html, 'text/html');
        var _OrsOutline$retrieveS = _Outline_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveSectionTitles(chapter.doc),
          _OrsOutline$retrieveS2 = _slicedToArray(_OrsOutline$retrieveS, 2),
          sectionTitles = _OrsOutline$retrieveS2[0],
          sectionHeadings = _OrsOutline$retrieveS2[1];
        chapter.sectionTitles = sectionTitles;
        chapter.sectionHeadings = sectionHeadings;
        chapter.injectAnchors();
        return chapter;
      });
    }
  }, {
    key: "extractRange",
    value: function extractRange(node, startRef, endRef) {
      console.log(node, startRef, endRef);
      // check node.children
      // match (1)(a)(A)(i) etc.

      var start = OrsChapter.parseSubsections(startRef);
      var end = OrsChapter.parseSubsections(endRef);
      var remove = [];
      var regEx, regStart, regEnd;
      regStart = start.pop();
      regEnd = end.pop();
      regEx = new RegExp('[' + regStart + '-' + regEnd + ']');
      var children = node.children;
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        var id = child.getAttribute('id');
        if (!id) continue;
        var parts = id.split('-');
        var compare = parts.pop();
        console.log('Comparing ', compare, regEx);
        if (!compare.match(regEx)) {
          console.log('match not found');
          remove.push(child);
        } else {
          console.log('match found');
        }
      }
      for (var _i = 0, _remove = remove; _i < _remove.length; _i++) {
        var n = _remove[_i];
        node.removeChild(n);
      }
      return node;
    }
  }, {
    key: "parseSubsections",
    value: function parseSubsections(reference) {
      var subs = reference.match(/(?<=\()([0-9a-zA-Z]+)(?=\))/g);
      console.log('parseSubsections()', subs);
      return subs;
    }
  }, {
    key: "parseReference",
    value: function parseReference(reference) {
      var chapter, section, subsection;
      var parts = reference.match(/([0-9a-zA-Z]+)/g);
      chapter = parts.shift();
      section = parts.shift();

      // Parse a range of subsections.
      // Parse a comma-delimitted series of subsections.
      //this.references = reference.split(",");
      subsection = parts.length > 0 ? parts.join('-') : null;
      return [chapter, section, subsection];
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/@ocdla/ors/src/Outline.js":
/*!************************************************!*\
  !*** ./node_modules/@ocdla/ors/src/Outline.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrsOutline)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @class OrsOutline
 * @description This class is used to create an outline of the ORS chapter.
 */
var OrsOutline = /*#__PURE__*/function () {
  function OrsOutline() {
    _classCallCheck(this, OrsOutline);
  }
  return _createClass(OrsOutline, null, [{
    key: "retrieveSectionTitles",
    value:
    /**
     * In an ORS chapter, the section titles are bolded.
     * This method retrieves the section titles and their corresponding section numbers.
     */
    function retrieveSectionTitles(doc) {
      // Createa nodeList of all the <b> elements in the body
      var headings = doc.querySelectorAll('b');
      var titles = [],
        elems = [];
      for (var i = 0; i < headings.length; i++) {
        var boldParent = headings[i];
        var trimmed = headings[i].textContent.trim();
        if (trimmed.indexOf('Note') === 0) continue;
        var strings = trimmed.split('\n');
        var chapter = void 0,
          section = void 0,
          key = void 0,
          val = void 0;

        // If array has only one element,
        // Then we know this doesn't follow the regular statute pattern.
        if (strings.length === 1) {
          key = strings[0];
          val = boldParent.nextSibling ? boldParent.nextSibling.textContent : '';
        } else {
          // otherwise our normal case.
          key = strings[0];
          val = strings[1];
          var numbers = key.split('.');
          chapter = numbers[0];
          section = numbers[1];
        }

        // Might need to change this one to remove parseInt
        titles[parseInt(section)] = val;
        elems[parseInt(section)] = boldParent;
      }
      return [titles, elems];
    }
  }, {
    key: "findLevel",
    value: function findLevel(text, nextMatch) {
      var subNumRe = /^[0-9]+/;
      var subUpperRe = /^[A-Z]+/;
      var subRe = /^\(([0-9a-zA-Z]+)\)(.*)/;
      var nextId;
      if (nextMatch != null) {
        nextId = nextMatch.match(subRe)[1];
      }
      if (text.match(subNumRe)) {
        return '0';
      } else if (!OrsOutline.isRomanNumeral(text, nextId) && !text.match(subUpperRe)) {
        return '1';
      } else if (text.match(subUpperRe)) {
        return '2';
      } else if (OrsOutline.isRomanNumeral(text, nextId)) {
        return '3';
      }
    }
  }, {
    key: "isRomanNumeral",
    value: function isRomanNumeral(text, nextText) {
      var romanReg = /^[ivx]+/;
      if (nextText == null) {
        return text.match(romanReg);
      }
      return text.match(romanReg) && (nextText.match(romanReg) || text.length > 1);
    }
  }, {
    key: "buildSection",
    value: function buildSection(doc, id, divId, text, level) {
      var sub = doc.createElement('div');
      sub.setAttribute('id', divId);
      sub.setAttribute('class', 'level-' + level);
      var span = doc.createElement('span');
      span.setAttribute('class', 'subsection');
      if (id !== 'description') {
        span.innerText = '(' + id + ')';
      }
      var theText = doc.createTextNode(text);
      sub.appendChild(span);
      sub.appendChild(theText);
      return sub;
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/@ocdla/view/view.js":
/*!******************************************!*\
  !*** ./node_modules/@ocdla/view/view.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
    _refresh = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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

/***/ }),

/***/ "./src/data/ors-viewer/breadcrumbs/items.json":
/*!****************************************************!*\
  !*** ./src/data/ors-viewer/breadcrumbs/items.json ***!
  \****************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"type":"standard","href":"https://oregon.public.law/statutes","text":"ORS"},{"type":"standard","href":"https://oregon.public.law/statutes/ors_volume_1","text":"Vol. 1"},{"type":"standard","href":"https://oregon.public.law/statutes/ors_title_1","text":"Title 1"},{"type":"standard","href":"https://oregon.public.law/statutes/ors_chapter_1","text":"Chap. 1. Courts & Judicial Officers Generally"},{"type":"standard","href":"/","text":"§ 1.001"}]');

/***/ }),

/***/ "./src/data/ors-viewer/sidebar_left/items.json":
/*!*****************************************************!*\
  !*** ./src/data/ors-viewer/sidebar_left/items.json ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"active":true,"href":"https://oregon.public.law/statutes/ors_1.001","heading":"1.001","text":"State policy for courts"},{"href":"https://oregon.public.law/statutes/ors_1.002","heading":"1.002","text":"Supreme Court"},{"href":"https://oregon.public.law/statutes/ors_1.003","heading":"1.003","text":"Chief Justice’s powers to appoint Chief Judge and presiding judges"},{"href":"https://oregon.public.law/statutes/ors_1.004","heading":"1.004","text":"Supreme Court rules governing coordination of class actions"},{"href":"https://oregon.public.law/statutes/ors_1.005","heading":"1.005","text":"Credit card transactions for fees, security deposits, fines and other court-imposed obligations"},{"href":"https://oregon.public.law/statutes/ors_1.006","heading":"1.006","text":"Supreme Court rules"},{"href":"https://oregon.public.law/statutes/ors_1.007","heading":"1.007","text":"Judicial Department Revolving Account"},{"href":"https://oregon.public.law/statutes/ors_1.008","heading":"1.008","text":"Personnel plan, fiscal plan and property plan"},{"href":"https://oregon.public.law/statutes/ors_1.009","heading":"1.009","text":"Judicial Department Operating Account"},{"href":"https://oregon.public.law/statutes/ors_1.010","heading":"1.010","text":"Powers of courts in administration of court business and proceedings"},{"href":"https://oregon.public.law/statutes/ors_1.012","heading":"1.012","text":"State Court Technology Fund"},{"href":"https://oregon.public.law/statutes/ors_1.020","heading":"1.020","text":"Contempt punishment"},{"href":"https://oregon.public.law/statutes/ors_1.025","heading":"1.025","text":"Duty of court and court officers to require performance of duties relating to administration of justice"},{"href":"https://oregon.public.law/statutes/ors_1.030","heading":"1.030","text":"Seal"},{"href":"https://oregon.public.law/statutes/ors_1.040","heading":"1.040","text":"Sittings of court to be public"},{"href":"https://oregon.public.law/statutes/ors_1.050","heading":"1.050","text":"Time for decision on submitted questions"},{"href":"https://oregon.public.law/statutes/ors_1.060","heading":"1.060","text":"Days for transaction of judicial business"},{"href":"https://oregon.public.law/statutes/ors_1.070","heading":"1.070","text":"When court deemed appointed for next judicial day"},{"href":"https://oregon.public.law/statutes/ors_1.080","heading":"1.080","text":"Place of holding court"},{"href":"https://oregon.public.law/statutes/ors_1.085","heading":"1.085","text":"Chief Justice to designate principal location for sitting of courts"},{"href":"https://oregon.public.law/statutes/ors_1.090","heading":"1.090","text":"Trial elsewhere than at usual location on agreement of parties"},{"href":"https://oregon.public.law/statutes/ors_1.110","heading":"1.110","text":"Adjournment when judge does not attend"},{"href":"https://oregon.public.law/statutes/ors_1.120","heading":"1.120","text":"Proceedings unaffected by vacancy in office"},{"href":"https://oregon.public.law/statutes/ors_1.130","heading":"1.130","text":"Power to adjourn proceedings"},{"href":"https://oregon.public.law/statutes/ors_1.140","heading":"1.140","text":"Manner of addressing application or proceeding to court or judge"},{"href":"https://oregon.public.law/statutes/ors_1.150","heading":"1.150","text":"Proceedings to be in English"},{"href":"https://oregon.public.law/statutes/ors_1.160","heading":"1.160","text":"Means to carry jurisdiction into effect"},{"href":"https://oregon.public.law/statutes/ors_1.171","heading":"1.171","text":"Powers and duties of presiding judge for judicial district"},{"href":"https://oregon.public.law/statutes/ors_1.175","heading":"1.175","text":"Docket priorities"},{"href":"https://oregon.public.law/statutes/ors_1.176","heading":"1.176","text":"Capital improvements to county courthouses"},{"href":"https://oregon.public.law/statutes/ors_1.177","heading":"1.177","text":"State plan for security, emergency preparedness and business continuity for court facilities"},{"href":"https://oregon.public.law/statutes/ors_1.178","heading":"1.178","text":"State Court Facilities and Security Account"},{"href":"https://oregon.public.law/statutes/ors_1.180","heading":"1.180","text":"Advisory committees on court security and emergency preparedness"},{"href":"https://oregon.public.law/statutes/ors_1.182","heading":"1.182","text":"Court facilities security accounts"},{"href":"https://oregon.public.law/statutes/ors_1.185","heading":"1.185","text":"County to provide courtrooms, offices and jury rooms"},{"href":"https://oregon.public.law/statutes/ors_1.187","heading":"1.187","text":"State to provide supplies and personal property for courts"},{"href":"https://oregon.public.law/statutes/ors_1.188","heading":"1.188","text":"Surcharge on fines for courthouse"},{"href":"https://oregon.public.law/statutes/ors_1.189","heading":"1.189","text":"Courthouse surcharge accounts"},{"href":"https://oregon.public.law/statutes/ors_1.194","heading":"1.194","text":"Definitions for ORS 1.194 to 1.200"},{"href":"https://oregon.public.law/statutes/ors_1.195","heading":"1.195","text":"Reports on liquidated and delinquent accounts of state courts"},{"href":"https://oregon.public.law/statutes/ors_1.196","heading":"1.196","text":"Agreement for reciprocal offsets"},{"href":"https://oregon.public.law/statutes/ors_1.197","heading":"1.197","text":"Assignment of liquidated and delinquent accounts to collection agencies"},{"href":"https://oregon.public.law/statutes/ors_1.198","heading":"1.198","text":"Exemptions from requirements of ORS 1.197"},{"href":"https://oregon.public.law/statutes/ors_1.199","heading":"1.199","text":"Policies and procedures for exempting accounts from requirements of ORS 1.197 and for ceasing collection efforts"},{"href":"https://oregon.public.law/statutes/ors_1.200","heading":"1.200","text":"Effect of ORS 1.194 to 1.200 on authority of judge"},{"href":"https://oregon.public.law/statutes/ors_1.202","heading":"1.202","text":"Fee for establishing and administering account for judgment that includes monetary obligation"},{"href":"https://oregon.public.law/statutes/ors_1.210","heading":"1.210","text":"Judicial officer defined"},{"href":"https://oregon.public.law/statutes/ors_1.212","heading":"1.212","text":"Oath of office for judges"},{"href":"https://oregon.public.law/statutes/ors_1.220","heading":"1.220","text":"Judicial officer or partner acting as attorney"},{"href":"https://oregon.public.law/statutes/ors_1.230","heading":"1.230","text":"Powers of a judge out of court"},{"href":"https://oregon.public.law/statutes/ors_1.240","heading":"1.240","text":"Powers of judicial officers"},{"href":"https://oregon.public.law/statutes/ors_1.250","heading":"1.250","text":"Punishment for contempt"},{"href":"https://oregon.public.law/statutes/ors_1.260","heading":"1.260","text":"Powers of judges of Supreme Court, Court of Appeals, Oregon Tax Court and circuit courts"},{"href":"https://oregon.public.law/statutes/ors_1.270","heading":"1.270","text":"Powers of other judicial officers"},{"href":"https://oregon.public.law/statutes/ors_1.290","heading":"1.290","text":"Leaves of absence"},{"href":"https://oregon.public.law/statutes/ors_1.300","heading":"1.300","text":"Senior judge"},{"href":"https://oregon.public.law/statutes/ors_1.303","heading":"1.303","text":"Disability of judge"},{"href":"https://oregon.public.law/statutes/ors_1.305","heading":"1.305","text":"Commencement of judicial term of office"},{"href":"https://oregon.public.law/statutes/ors_1.310","heading":"1.310","text":"Involuntary retirement of judges for disability"},{"href":"https://oregon.public.law/statutes/ors_1.410","heading":"1.410","text":"Commission on Judicial Fitness and Disability"},{"href":"https://oregon.public.law/statutes/ors_1.415","heading":"1.415","text":"Powers and duties of commission"},{"href":"https://oregon.public.law/statutes/ors_1.420","heading":"1.420","text":"Investigation"},{"href":"https://oregon.public.law/statutes/ors_1.425","heading":"1.425","text":"Commission proceedings upon receipt of complaint of disability"},{"href":"https://oregon.public.law/statutes/ors_1.430","heading":"1.430","text":"Supreme Court review"},{"href":"https://oregon.public.law/statutes/ors_1.440","heading":"1.440","text":"Status of records of proceedings under ORS 1.420 or 1.425"},{"href":"https://oregon.public.law/statutes/ors_1.450","heading":"1.450","text":"Status of testimony in proceedings under ORS 1.420 or 1.425"},{"href":"https://oregon.public.law/statutes/ors_1.460","heading":"1.460","text":"Judge not to participate in proceedings involving self except in defense"},{"href":"https://oregon.public.law/statutes/ors_1.470","heading":"1.470","text":"Service of process"},{"href":"https://oregon.public.law/statutes/ors_1.475","heading":"1.475","text":"Procedure when process not obeyed"},{"href":"https://oregon.public.law/statutes/ors_1.480","heading":"1.480","text":"Officers"},{"href":"https://oregon.public.law/statutes/ors_1.525","heading":"1.525","text":"Uniform citation and petition forms for certain offenses"},{"href":"https://oregon.public.law/statutes/ors_1.550","heading":"1.550","text":"Private counsel for judges"},{"href":"https://oregon.public.law/statutes/ors_1.560","heading":"1.560","text":"Procedure for employment of private counsel"},{"href":"https://oregon.public.law/statutes/ors_1.570","heading":"1.570","text":"Claims for compensation of private counsel"},{"href":"https://oregon.public.law/statutes/ors_1.600","heading":"1.600","text":"Appointment pro tempore to Supreme Court or Court of Appeals"},{"href":"https://oregon.public.law/statutes/ors_1.605","heading":"1.605","text":"Compensation and expenses for judges under ORS 1.600"},{"href":"https://oregon.public.law/statutes/ors_1.615","heading":"1.615","text":"Appointment pro tempore to tax court or circuit court"},{"href":"https://oregon.public.law/statutes/ors_1.625","heading":"1.625","text":"Compensation and expenses for judges under ORS 1.615"},{"href":"https://oregon.public.law/statutes/ors_1.635","heading":"1.635","text":"Appointment pro tempore of eligible person to tax court or circuit court"},{"href":"https://oregon.public.law/statutes/ors_1.645","heading":"1.645","text":"Transfer, challenge, disqualification, supervision of person appointed under ORS 1.635"},{"href":"https://oregon.public.law/statutes/ors_1.655","heading":"1.655","text":"Extension and termination of appointment under ORS 1.635"},{"href":"https://oregon.public.law/statutes/ors_1.665","heading":"1.665","text":"Compensation and expenses of persons appointed under ORS 1.635"},{"href":"https://oregon.public.law/statutes/ors_1.675","heading":"1.675","text":"Judge pro tempore ineligible to participate in selection or removal of Chief Justice, Chief Judge or presiding judge"},{"href":"https://oregon.public.law/statutes/ors_1.725","heading":"1.725","text":"Legislative findings"},{"href":"https://oregon.public.law/statutes/ors_1.730","heading":"1.730","text":"Council on Court Procedures"},{"href":"https://oregon.public.law/statutes/ors_1.735","heading":"1.735","text":"Rules of procedure"},{"href":"https://oregon.public.law/statutes/ors_1.740","heading":"1.740","text":"Employment of staff"},{"href":"https://oregon.public.law/statutes/ors_1.745","heading":"1.745","text":"Laws on civil pleading, practice and procedure deemed rules of court until changed"},{"href":"https://oregon.public.law/statutes/ors_1.750","heading":"1.750","text":"Legislative Counsel to publish rules"},{"href":"https://oregon.public.law/statutes/ors_1.755","heading":"1.755","text":"Gifts, grants and donations"},{"href":"https://oregon.public.law/statutes/ors_1.760","heading":"1.760","text":"Legislative advisory committee"},{"href":"https://oregon.public.law/statutes/ors_1.810","heading":"1.810","text":"Judicial conference"},{"href":"https://oregon.public.law/statutes/ors_1.820","heading":"1.820","text":"Function of conference"},{"href":"https://oregon.public.law/statutes/ors_1.830","heading":"1.830","text":"Meetings"},{"href":"https://oregon.public.law/statutes/ors_1.840","heading":"1.840","text":"Annual report"},{"href":"https://oregon.public.law/statutes/ors_1.851","heading":"1.851","text":"Local criminal justice advisory councils"},{"href":"https://oregon.public.law/statutes/ors_1.855","heading":"1.855","text":"State Court Administrator to establish registry of justice and municipal courts"},{"href":"https://oregon.public.law/statutes/ors_1.860","heading":"1.860","text":"Reports relating to municipal courts and justice courts"}]');

/***/ }),

/***/ "./src/data/ors-viewer/sidebar_right/items.json":
/*!******************************************************!*\
  !*** ./src/data/ors-viewer/sidebar_right/items.json ***!
  \******************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"type":"sidebar_right","href":"/","text":"Current through early 202"},{"type":"sidebar_right","href":"https://oregonlegislature.gov/bills_laws/ors/ors001.html","text":"§ 1.001’s source a oregon​.gov"}]');

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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