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
        if (HttpClient.outbound[key]) {
          return HttpClient.outbound[key];
        }

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
/* harmony import */ var _data_ors_viewer_chapters_chapter_1_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/ors-viewer/chapters/chapter-1.jsx */ "./src/data/ors-viewer/chapters/chapter-1.jsx");
/* harmony import */ var _ocdla_lib_http_Url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ocdla/lib-http/Url.js */ "./node_modules/@ocdla/lib-http/Url.js");
/* harmony import */ var _ocdla_lib_http_HttpClient_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ocdla/lib-http/HttpClient.js */ "./node_modules/@ocdla/lib-http/HttpClient.js");
/* harmony import */ var _ocdla_ors_src_OrsChapter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ocdla/ors/src/OrsChapter.js */ "./node_modules/@ocdla/ors/src/OrsChapter.js");
/* harmony import */ var _data_ors_viewer_breadcrumbs_items_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/ors-viewer/breadcrumbs/items.json */ "./src/data/ors-viewer/breadcrumbs/items.json");
/* harmony import */ var _data_ors_viewer_sidebar_left_items_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/ors-viewer/sidebar_left/items.json */ "./src/data/ors-viewer/sidebar_left/items.json");
/* harmony import */ var _data_ors_viewer_sidebar_right_items_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/ors-viewer/sidebar_right/items.json */ "./src/data/ors-viewer/sidebar_right/items.json");
/** @jsx vNode */




// Data
/* eslint-enable */








// An HTTP fragment, also known as a URI fragment, is a string of characters in a URL that identifies a specific location within a resource. The fragment identifier introduced by a hash mark (#) is the optional last part of a URL for a document. It is typically used to identify a portion of that document. The generic syntax is specified in RFC 3986. The hash mark separator in URIs does not belong to the fragment identifier.
var url = new _ocdla_lib_http_Url_js__WEBPACK_IMPORTED_MODULE_4__["default"]('https://appdev.ocdla.org/books-online/index.php');
url.buildQuery('chapter', '1');
var req = new Request(url.toString());
var client = new _ocdla_lib_http_HttpClient_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
var resp = await client.send(req);
var msword = await _ocdla_ors_src_OrsChapter_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromResponse(resp);
msword.chapterNum = 1;
var xml = _ocdla_ors_src_OrsChapter_js__WEBPACK_IMPORTED_MODULE_6__["default"].toStructuredChapter(msword);

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
  crumbs: _data_ors_viewer_breadcrumbs_items_json__WEBPACK_IMPORTED_MODULE_7__,
  sidebarFirstItems: _data_ors_viewer_sidebar_left_items_json__WEBPACK_IMPORTED_MODULE_8__,
  sidebarSecondItems: _data_ors_viewer_sidebar_right_items_json__WEBPACK_IMPORTED_MODULE_9__
}, (0,_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_1__.vNode)(_data_ors_viewer_chapters_chapter_1_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
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
! tailwindcss v3.4.7 | MIT License | https://tailwindcss.com
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
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline {
  outline-style: solid;
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
`, "",{"version":3,"sources":["webpack://./src/css/input.css"],"names":[],"mappings":"AAAA;;CAAc,CAAd;;;CAAc;;AAAd;;;EAAA,sBAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,mBAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,gBAAc;AAAA;;AAAd;;;;;;;;CAAc;;AAAd;;EAAA,gBAAc,EAAd,MAAc;EAAd,8BAAc,EAAd,MAAc;EAAd,gBAAc,EAAd,MAAc;EAAd,cAAc;KAAd,WAAc,EAAd,MAAc;EAAd,4IAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,+BAAc,EAAd,MAAc;EAAd,wCAAc,EAAd,MAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,yCAAc;UAAd,iCAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;EAAA,kBAAc;EAAd,oBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;EAAd,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,mBAAc;AAAA;;AAAd;;;;;CAAc;;AAAd;;;;EAAA,+GAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,+BAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,cAAc;EAAd,cAAc;EAAd,kBAAc;EAAd,wBAAc;AAAA;;AAAd;EAAA,eAAc;AAAA;;AAAd;EAAA,WAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;EAAd,yBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;EAAA,oBAAc,EAAd,MAAc;EAAd,8BAAc,EAAd,MAAc;EAAd,gCAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,uBAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,SAAc,EAAd,MAAc;EAAd,UAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,oBAAc;AAAA;;AAAd;;;CAAc;;AAAd;;;;EAAA,0BAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,aAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,YAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,6BAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,0BAAc,EAAd,MAAc;EAAd,aAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,kBAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;;;;;;;;EAAA,SAAc;AAAA;;AAAd;EAAA,SAAc;EAAd,UAAc;AAAA;;AAAd;EAAA,UAAc;AAAA;;AAAd;;;EAAA,gBAAc;EAAd,SAAc;EAAd,UAAc;AAAA;;AAAd;;CAAc;AAAd;EAAA,UAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;AAAA;;AAAd;;CAAc;AAAd;EAAA,eAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;;;;EAAA,cAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;EAAd,YAAc;AAAA;;AAAd,wEAAc;AAAd;EAAA,aAAc;AAAA;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,8BAAc;EAAd,6BAAc;EAAd,4BAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,sCAAc;EAAd,kCAAc;EAAd,2BAAc;EAAd,sBAAc;EAAd,8BAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd,sBAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd;AAAc;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,8BAAc;EAAd,6BAAc;EAAd,4BAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,sCAAc;EAAd,kCAAc;EAAd,2BAAc;EAAd,sBAAc;EAAd,8BAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd,sBAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd;AAAc;AACd;EAAA;AAAoB;AAApB;;EAAA;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;AAAA;AACpB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,WAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,wBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,yBAAmB;KAAnB,sBAAmB;UAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,gCAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,0EAAmB;EAAnB,8FAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,0BAAmB;EAAnB;AAAmB;AAAnB;EAAA,yBAAmB;EAAnB;AAAmB;AAAnB;EAAA,0BAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAFnB;EAAA,sBAGA;EAHA;AAGA;AAHA;EAAA,sBAGA;EAHA;AAGA;AAHA;EAAA,kBAGA;EAHA;AAGA;AAHA;EAAA,kBAGA;EAHA;AAGA;AAHA;EAAA,oBAGA;EAHA;AAGA;AAHA;EAAA,oBAGA;EAHA;AAGA;AAHA;EAAA,oBAGA;EAHA;AAGA;AAHA;EAAA;AAGA;AAHA;EAAA;AAGA;AAHA;EAAA;AAGA;AAHA;EAAA;AAGA;AAHA;EAAA;AAGA;AAHA;EAAA,oBAGA;EAHA;AAGA;AAHA;;EAAA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA,sBAGA;IAHA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA;EAGA;;EAHA;IAAA,gBAGA;IAHA;EAGA;;EAHA;IAAA,iBAGA;IAHA;EAGA;;EAHA;IAAA;EAGA;AAAA","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./node_modules/@ocdla/view/cache.js":
/*!*******************************************!*\
  !*** ./node_modules/@ocdla/view/cache.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CACHE: () => (/* binding */ CACHE),
/* harmony export */   HISTORY: () => (/* binding */ HISTORY)
/* harmony export */ });

var CACHE = {};
var HISTORY = {};
var vNodeHistory = [];
CACHE.set = function (key, value) {
  CACHE[key] = value;
};
CACHE.get = function (key) {
  return CACHE[key];
};
HISTORY.set = function (index, vNode) {
  vNodeHistory[index] = vNode;
};
HISTORY.add = function (newVnode) {
  vNodeHistory.push(newVnode);
};
HISTORY.clear = function () {
  vNodeHistory = [];
};
HISTORY.getRecent = function (backwardsIndex) {
  return vNodeHistory[vNodeHistory.length - (1 + backwardsIndex)];
};
HISTORY.getLast = function () {
  return vNodeHistory[vNodeHistory.length - 1];
};
HISTORY.getLength = function () {
  return vNodeHistory.length;
};

/***/ }),

/***/ "./node_modules/@ocdla/view/view.js":
/*!******************************************!*\
  !*** ./node_modules/@ocdla/view/view.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   View: () => (/* binding */ View),
/* harmony export */   VirtualDom: () => (/* binding */ VirtualDom),
/* harmony export */   vNode: () => (/* binding */ vNode)
/* harmony export */ });
/* harmony import */ var _cache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache.js */ "./node_modules/@ocdla/view/cache.js");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * @ocdladefense/view
 *
 * @description Here is my description.
 *
 *
 *
 */



var VirtualDom = function () {
  return {
    Fragment: "Fragment"
  };
}();

/** 
 * @class View
 * 
 * This is a description of the View class.
 */
var View = function () {
  var myEvents = {};
  var myAfterEvents = {};
  var domEvents = {};
  var CACHE = {};
  var HISTORY = {};
  var vNodeHistory = [];
  var historyUserIndex = 0; //IW - to keep track of what part of the history the user is in, in case they want to go back or forward?

  var NODE_CHANGED_STATES = ["NODE_NO_COMPARISON", "NODE_DIFFERENT_TYPE", "NODE_NOT_EQUAL", "NODE_DIFFERENT_ELEMENT", "NODE_PROPS_CHANGED", "TEXT_NODES_NOT_EQUAL"];

  //IW - to store stuff throughout the history so that you can access it at any point
  CACHE.set = function (key, value) {
    CACHE[key] = value;
  };
  CACHE.get = function (key) {
    return CACHE[key];
  };

  //IW - this one shouldnt be used because it would just replace the one at the index
  HISTORY.set = function (index, vNode) {
    vNodeHistory[index] = vNode;
  };

  //IW - The main function for adding things to the history
  HISTORY.add = function (newVnode) {
    vNodeHistory.push(newVnode);
  };

  //IW - if you dont want the user to be able to go back
  HISTORY.clear = function () {
    vNodeHistory = [];
  };

  //IW - if backwardsIndex is 0 it is the most recent history (the one already rendered)
  HISTORY.getRecent = function (backwardsIndex) {
    return vNodeHistory[vNodeHistory.length - (1 + backwardsIndex)];
  };

  //IW - the preveous function but it only returns the previous history
  HISTORY.getLast = function () {
    return vNodeHistory[vNodeHistory.length - 1];
  };

  //IW - Im not sure the use case for this one
  HISTORY.getLength = function () {
    return vNodeHistory.length;
  };
  function preRenderEventHelper(selector, eventType, callback) {
    var selectorType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "class";
    if (domEvents[selector] == null) {
      domEvents[selector] = {};
    }
    domEvents[selector][eventType.substring(2)] = {
      callback: callback,
      selectorType: selectorType
    };
  }
  function getEvents() {
    return domEvents;
  }
  function postRenderEventHelper() {
    //IW - goes through all dom objects that have an even, then goes through each event for that object, like if it had an onclick and an onchange(, then adds it to all its children?)
    for (var selector in domEvents) {
      var eventsArray = domEvents[selector];
      for (var eventType in eventsArray) {
        var event = eventsArray[eventType];
        //eventsArray.forEach(event => {
        //let eventType = event.eventType;
        //eventType = eventType.substring(2);
        var callback = event.callback;
        var selectorType = event.selectorType;
        var domSelector = selectorType == "class" ? "." + selector : "#" + selector;
        var containers = document.querySelectorAll(domSelector);
        for (var i = 0; i < containers.length; i++) {
          containers[i].addEventListener(eventType, callback);
        }
      }
      ;
    }
  }

  //IW - might be left over from what view.js was before
  function objectCombiner(obj1, obj2) {
    var newObj = {};
    for (var prop in obj1) {
      newObj[prop] = obj1[prop];
    }
    for (var prop in obj2) {
      newObj[prop] = obj2[prop];
    }
    return newObj;
  }

  /**
   * @memberof View
   * @method render
   * @instance
   * @description Perform an initial paint of a virtual node structure.
   * @param {Object} vNode A virtual node structure.
   */
  function render(vNode) {
    // let $parent = this.root;

    //let renderer = createElement.bind(this);

    this.currentTree = vNode;
    var $newNode = createElement(vNode);
    this.root.innerHTML = "";
    this.root.appendChild($newNode);

    // $parent.replaceChild($clone, this.root);
    // postRenderEventHelper(); //@jbernal

    // this.root = $clone;
    // this.root.addEventListener("click", myAppEventHandler);
    //BACKTO
    // HISTORY.add($parent); //might not be the correct one to add, also might not be correct using add instead of starting new
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

    // Not obvious, but text nodes don't have a type and should
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

  //IW - not used?
  function props(props) {
    var p = {};
    for (var i = 0; i < props.length; i++) {
      var attr = props.item(i);
      p["class" == attr.nodeName ? "className" : attr.nodeName] = attr.nodeValue;
      // console.log(props.item(i));
    }
    return p;
  }

  // Main event handler for any view application.
  function myAppEventHandler(e) {
    //console.log(e);
    e.preventDefault(); //added to prevent a link from taking you somewhere

    var target, actions, action, virtualNodes, currentVnodeState, details;
    target = e.target;
    actions = getDefinedActions();
    details = e.frameworkDetail;
    action = details.action;
    if (!actions.includes(action)) {
      return false;
    }
    currentVnodeState = HISTORY.getRecent(0); //BACKTO

    virtualNodes = myEvents[action](details);
    if (virtualNodes) {
      try {
        //to remove error if a nonpromise is returned because you just want to detect if something is clicked without rendering anything
        //could maybe make it so other related errors dont pop up in debugger?
        return virtualNodes.then(function (vNodes) {
          HISTORY.add(vNodes);
          updateElement(root, vNodes, currentVnodeState);
          myAfterEvents[action]();
        });
      } catch (_unused) {
        //console.log("non promise event was called");
        return false;
      }
    }
  }
  function getDefinedActions() {
    return Object.getOwnPropertyNames(myEvents);
  }
  function addEvent(key, result) {
    var afterRenderEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    //console.log(this.root); //using the root here might not work if it gets changed
    //this.root.addEventListener("click", myAppEventHandler);

    myEvents[key] = result;
    myAfterEvents[key] = afterRenderEvent;
  }

  /**
   * @constructs View
   * @param root
   */
  function View(root) {
    this.root = root;
    //document.getElementById("order-history-main").addEventListener("click", myAppEventHandler);
    //root.addEventListener("click", myAppEventHandler);
  }
  View.prototype = _defineProperty({
    render: render,
    update: update,
    addEvent: addEvent,
    preRenderEventHelper: preRenderEventHelper,
    createElement: createElement,
    getEvents: getEvents
  }, "getEvents", getEvents);
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
      // this.preRenderEventHelper(theEventKey, prop, vnode.props[prop]);
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
;
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