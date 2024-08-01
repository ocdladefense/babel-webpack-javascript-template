/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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





const CACHE = {};

const HISTORY = {};

let vNodeHistory = [];




CACHE.set = function (key, value) {
    CACHE[key] = value;
}

CACHE.get = function (key) {
    return CACHE[key];
}




HISTORY.set = function (index, vNode) {
    vNodeHistory[index] = vNode;
}

HISTORY.add = function (newVnode) {
    vNodeHistory.push(newVnode);
};

HISTORY.clear = function () {
    vNodeHistory = [];
}

HISTORY.getRecent = function (backwardsIndex) {
    return vNodeHistory[vNodeHistory.length - (1 + backwardsIndex)];
}

HISTORY.getLast = function () {
    return vNodeHistory[vNodeHistory.length - 1];
}

HISTORY.getLength = function () {
    return vNodeHistory.length;
}













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
/**
 * @ocdladefense/view
 *
 * @description Here is my description.
 *
 *
 *
 */



  

const VirtualDom = (function() {
    return {
        Fragment: "Fragment"
    };
})();


/** 
 * @class View
 * 
 * This is a description of the View class.
 */
const View = (function() {

    
    const myEvents = {};

    const myAfterEvents = {};
    
    const domEvents = {};
    
    const CACHE = {};

    const HISTORY = {};
    
    let vNodeHistory = [];

    let historyUserIndex = 0; //IW - to keep track of what part of the history the user is in, in case they want to go back or forward?

    const NODE_CHANGED_STATES = ["NODE_NO_COMPARISON", "NODE_DIFFERENT_TYPE", "NODE_NOT_EQUAL", "NODE_DIFFERENT_ELEMENT", "NODE_PROPS_CHANGED", "TEXT_NODES_NOT_EQUAL"];
    
    //IW - to store stuff throughout the history so that you can access it at any point
    CACHE.set = function (key, value) {
        CACHE[key] = value;
    }
    
    CACHE.get = function (key) {
        return CACHE[key];
    }

    //IW - this one shouldnt be used because it would just replace the one at the index
    HISTORY.set = function (index, vNode) {
        vNodeHistory[index] = vNode;
    }
    
    //IW - The main function for adding things to the history
    HISTORY.add = function (newVnode) {
        vNodeHistory.push(newVnode);
    };
    
    //IW - if you dont want the user to be able to go back
    HISTORY.clear = function () {
        vNodeHistory = [];
    }
    
    //IW - if backwardsIndex is 0 it is the most recent history (the one already rendered)
    HISTORY.getRecent = function (backwardsIndex) {
        return vNodeHistory[vNodeHistory.length - (1 + backwardsIndex)];
    }
    
    //IW - the preveous function but it only returns the previous history
    HISTORY.getLast = function () {
        return vNodeHistory[vNodeHistory.length - 1];
    }
    
    //IW - Im not sure the use case for this one
    HISTORY.getLength = function () {
        return vNodeHistory.length;
    }
    
    
    
    
    


    
    function preRenderEventHelper(selector, eventType, callback, selectorType="class") {
        if (domEvents[selector] == null) {
            domEvents[selector] = {};
        }

        domEvents[selector][eventType.substring(2)] = {callback: callback, selectorType: selectorType};
    }


    function getEvents() {
        return domEvents;
    }
    
    
    function postRenderEventHelper() {
    
        //IW - goes through all dom objects that have an even, then goes through each event for that object, like if it had an onclick and an onchange(, then adds it to all its children?)
        for (var selector in domEvents) {
            let eventsArray = domEvents[selector];
            for (var eventType in eventsArray) {
                let event = eventsArray[eventType];
            //eventsArray.forEach(event => {
                //let eventType = event.eventType;
                //eventType = eventType.substring(2);
                let callback = event.callback;
                let selectorType = event.selectorType;
                let domSelector = selectorType == "class" ? ("." + selector) : ("#" + selector);
                let containers = document.querySelectorAll(domSelector);
                for (let i = 0; i < containers.length; i++) {
                    containers[i].addEventListener(eventType, callback);
                }
            };
        }
    }
    
    
    
    
    //IW - might be left over from what view.js was before
    function objectCombiner(obj1, obj2) {
        let newObj = {};
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
        let $newNode = createElement(vNode);

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
    function updateElement($parent, newNode, oldNode, index = 0) {

        let state = getChangeState(newNode, oldNode);

        // Whether to use replaceChild to swap nodes.
        let shouldSwapNodes = changed(state);

        // Whether this current evaluation is a synthetic node.
        let isSynthetic = newNode && typeof newNode.type === "function";

        if($parent.nodeType == 3) {
            return;
        }
        

        if(!oldNode) {
            let n = View.createElement(newNode);
            $parent.appendChild(n);
        }


        else if(!newNode) {
            if (!$parent.children[index]) {
                $parent.removeChild($parent.children[$parent.children.length-1]);
            } else {
                $parent.removeChild($parent.children[index]);
            }
        }


        else if(isSynthetic) {
            if(newNode.type && newNode.type.prototype && newNode.type.prototype.render) {
                let obj = new newNode.type(newNode.props);
                newNode = obj.render();
            } else {
                newNode = typeof newNode.type === "function" ? newNode.type(newNode.props) : newNode;
            }

            if(oldNode.type && oldNode.type.prototype && oldNode.type.prototype.render) {
                let obj = new oldNode.type(oldNode.props);
                oldNode = obj.render();
            }
            
            else oldNode = typeof oldNode.type === "function" ? oldNode.type(oldNode.props) : oldNode;
            updateElement($parent, newNode, oldNode, index);
        }


        else if(!isSynthetic && shouldSwapNodes) {
            let n = createElement(newNode);

            if(newNode.type) {
                $parent.replaceChild(n, $parent.childNodes[index]); 
            } else {
                $parent.replaceChild(n, $parent.childNodes[index]);
            }
            
        }

        // Not obvious, but text nodes don't have a type and should
        // have been handled before this block executes.
        else if(newNode.type && newNode.children) {

            const newLength = newNode.children.length;
            const oldLength = oldNode.children.length;

            for (let i = 0; i < newLength || i < oldLength; i++) {


                let nextParent = $parent.childNodes[index];
                let revisedNode = newNode.children[i];
                let expiredNode = oldNode.children[i];
                let equal = revisedNode == expiredNode;
                if(equal) continue;

                updateElement(
                    nextParent,
                    revisedNode,
                    expiredNode,
                    i
                );
            }
        }
    }
    



    function getChangeState(n1, n2) {

        if(n1 && !n2) return "NODE_NO_COMPARISON";

        if(n1 == n2) return "NODE_NO_CHANGE";

        // Comparing two text nodes that are obviously different.
        if(typeof n1 === "string" && typeof n2 === "string" && n1 !== n2) {
            return "TEXT_NODES_NOT_EQUAL";
        }

        if(typeof n1 !== typeof n2) {
            return "NODE_DIFFERENT_TYPE";
        }
        
        if(n1.type !== n2.type) {
            return "NODE_DIFFERENT_ELEMENT";
        }

        if(propsChanged(n1, n2)) {
            return "NODE_PROPS_CHANGED";
        }

        if(n1 != n2) {
            return "NODE_RECURSIVE_EVALUATE";
        }
        
        return "NODE_NO_CHANGE";
    }


    function changed(state) {

        return NODE_CHANGED_STATES.includes(state);
    }

    function propsChanged(node1, node2) {

        let node1Props = node1.props;
        let node2Props = node2.props;
    
        if (typeof node1Props != typeof node2Props) {
            return true;
        }
    
        if (!node1Props && !node2Props) {
            return false;
        }
    
        let aProps = Object.getOwnPropertyNames(node1Props);
        let bProps = Object.getOwnPropertyNames(node2Props);
    
        
        if (aProps.length != bProps.length) {
            return true;
        }
    
        for (let i = 0; i < aProps.length; i++) {
            let propName = aProps[i];
    
            if (node1Props[propName] !== node2Props[propName]) {
                return true;
            }
        }

        return false;
    }



    
    //IW - not used?
    function props(props){
        var p = {};
        for(var i = 0; i<props.length; i++){
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
    
        let target, actions, action, virtualNodes, currentVnodeState, details;
    
    
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
                return virtualNodes.then(function(vNodes) {
                    HISTORY.add(vNodes);
                    updateElement(root, vNodes, currentVnodeState);
                    myAfterEvents[action]();
                });
            }
            catch {
                //console.log("non promise event was called");
                return false;
            }
        }
    
    
    
    }
    
    
    
    
    function getDefinedActions() {
        return Object.getOwnPropertyNames(myEvents);
    }
    
    function addEvent(key, result, afterRenderEvent = function() {}) {
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

    View.prototype = {
        render: render,
        update: update,
        addEvent: addEvent,
        preRenderEventHelper: preRenderEventHelper,
        createElement: createElement,
        getEvents, getEvents
    };
    

    return View;
})();



/**
 * Return a View instance from the given DOM element or selector.
 * 
 * @param {string} selector 
 * @returns {View}
 */
View.createRoot = function(selector) {
    let elem = typeof selector == "string" ? document.querySelector(selector) : selector;
    let root = elem.cloneNode(false);
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
    
    if(typeof vnode === "string" || typeof vnode === "number") {
        return document.createTextNode(vnode.toString());
    }
    if(vnode.type == "text") {
        return document.createTextNode(vnode.children);
    }
    //first check to see if component references a class name
    if(typeof vnode.type == "function" && vnode.type.prototype && vnode.type.prototype.render) {
        console.log("vNode is a class reference");
        let obj = new vnode.type(vnode.props);
        let render = obj.render();
        let node = createElement(render);
        //BACKTO
        // Let the component know about its own root.
        // obj.setRoot(node);
        return node;
    }
    if(typeof vnode.type == "function") {
        let fn = vnode.type(vnode.props);
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
    for(var prop in vnode.props) {
        var html5 = "className" == prop ? "class" : prop;
        if("children" == prop) continue;
        if (prop.indexOf("on") === 0) {
            // this.preRenderEventHelper(theEventKey, prop, vnode.props[prop]);
            $el.addEventListener(prop.substring(2), vnode.props[prop]);
            continue;
        }
        else if (vnode.props[prop] === null) {
            continue;
        }
        else {
            $el.setAttribute(html5,vnode.props[prop]);
        }
    }
    
    if(null != vnode.children) {
        vnode.children.map(createElement)
            .forEach($el.appendChild.bind($el));
    }
    
    return $el;
};

View.createElement = createElement;

/** 
 * JSX parsing function.
 */
function vNode(name,attributes,...children) {
    attributes = attributes || {};
    let joined = [];
    if(children.length == 0 || null == children[0] || typeof children[0] == "undefined") {
        joined = [];
    } else if(children.length == 1 && typeof children[0] == "string") {
        joined = children;
    } else {
        for(var i = 0; i<children.length; i++) {
            if(Array.isArray(children[i])) {
                joined = joined.concat(children[i]);
            } else {
                joined.push(children[i]);
            }
        }
    }


    attributes.children = joined;
            
    var vnode =  {    
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@ocdla/view/view.js */ "./node_modules/@ocdla/view/view.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var _marked = /*#__PURE__*/_regeneratorRuntime().mark(changeNames);
/** @jsx vNode */

console.log("Loaded index.js");
var Profile = function Profile(props) {
  return (0,_node_modules_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.vNode)("h2", null, "Hello, First Name: ", (0,_node_modules_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.vNode)("span", {
    "class": "first-name"
  }, props.firstName), " Last Name: ", (0,_node_modules_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.vNode)("span", {
    "class": "last-name"
  }, props.lastName));
};
var js_root = _node_modules_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.View.createRoot("#app");
js_root.render((0,_node_modules_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.vNode)(Profile, {
  firstName: "Jos\xE9",
  lastName: "Bernal"
}));
function changeNames() {
  var firsts, i;
  return _regeneratorRuntime().wrap(function changeNames$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        firsts = ["Autumn", "Juan", "Pedro"];
        i = 0;
      case 2:
        if (!(i < firsts.length)) {
          _context.next = 9;
          break;
        }
        console.log("yielding", firsts[i]);
        _context.next = 6;
        return firsts[i];
      case 6:
        i++;
        _context.next = 2;
        break;
      case 9:
      case "end":
        return _context.stop();
    }
  }, _marked);
}
var changer = changeNames();
var intId = window.setInterval(function () {
  var first = changer.next().value;
  if (!first) {
    window.clearInterval(intId);
    return;
  }
  js_root.update((0,_node_modules_ocdla_view_view_js__WEBPACK_IMPORTED_MODULE_0__.vNode)(Profile, {
    firstName: first,
    lastName: "Bernal"
  }));
}, 1000);
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map