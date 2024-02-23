/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --main-color: rgb(29, 29, 29);\n    --card-color: rgb(51, 51, 51);\n}\n\n* {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbody {\n    background-color: var(--main-color);\n}\n\nheader {\n    text-align: center;\n    color: white;\n}\n\n#project-container {\n    padding: 48px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n#project-list {\n    display: flex;\n    flex-wrap: wrap;\n}\n\nul,\nli {\n    padding: 0px;\n    margin: 0px;\n    list-style-type: none;\n}\n\n\n#addProjectForm {\n    width: 20vw;\n    height: 50vh;\n    color: black;\n    display: flex;\n    flex-direction: column;\n}\n\nform input,\nform label,\nform textarea,\nform button {\n    padding: .5rem;\n    width: 200px;\n}\n\n#addNoteBtn,\n#addProjectBtn {\n    border: solid 2px white;\n    margin-right: auto;\n}\n\n.card {\n    color: white;\n    background-color: var(--card-color);\n    border: solid 2px grey;\n    border-radius: 7px;\n    margin-left: 20px;\n    padding-left: 10px;\n    width: 250px;\n    height: 250px;\n}\n\nbutton .card {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n}\n\n/* #projectInfo {\n    width: 90vw;\n    height: 90vh;\n    background-color: rgb(0, 0, 0, 0.9);\n    color: white;\n} */\n#projectInfo {\n    width: 100vw;\n    height: 100vh;\n    border: none;\n    background-color: rgb(0, 0, 0, 1);\n    color: white;\n}\n\n#project-dialog-form {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n#projectInfo h2 {\n    text-align: center;\n}\n\n#projectInfo h3,\nh4,\nh5 {\n    font-size: 18px;\n}\n\n#project-dialog-form input {\n    width: 400px;\n    background-color: rgb(0, 0, 0, 0);\n    border: none;\n    font-size: 18px;\n    color: white;\n    font-size: 38px;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n#project-note-container {\n    display: flex;\n}\n\n#dialog-header {\n    display: grid;\n    grid-template-columns: 50px 1fr 50px;\n}\n\n#exit-button {\n    width: min-content;\n    height: min-content;\n    background-color: rgb(0, 0, 0, 0);\n    border: none;\n}\n\n#project-note-container {\n    padding: 48px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n#note-list {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n#addNoteDialog form {\n    display: flex;\n    flex-direction: column;\n    width: 350px;\n    height: 400px;\n}\n\n#addNoteDialog input,\n#addNoteDialog textarea {\n    width: 90%;\n}\n\n#addNoteDialog select {\n    width: 50%;\n}\n\na {\n    text-decoration: none;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayProjectDialog: () => (/* binding */ displayProjectDialog),\n/* harmony export */   displayProjectList: () => (/* binding */ displayProjectList)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/js/index.js\");\n\n\n\n// Display projects as cards on page\nfunction displayProjectList() {\n    const container = document.getElementById('project-list');\n    container.textContent = '';\n    for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {\n        const proj = document.createElement('li');\n        const a = document.createElement('a');\n        a.setAttribute('href', '#');\n        a.setAttribute('class', 'project-card');\n        a.setAttribute('id', `${i}`);\n        const div = document.createElement('div');\n        div.setAttribute('class', 'card');\n        const h3 = document.createElement('h3');\n        h3.textContent = `Title: ${_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[i].title}`;\n        const desc = document.createElement('div');\n        desc.textContent = `Description:`;\n        const p = document.createElement('p');\n        p.textContent = `${_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[i].desc}`;\n        const priority = document.createElement('div');\n        priority.setAttribute('id', 'priority')\n        priority.textContent = `Priority: ${_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[i].priority}`;\n        const due = document.createElement('div');\n        due.setAttribute('id', `${i}-due`);\n        due.textContent = `Due by ${_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[i].dueDate}`;\n        a.appendChild(div);\n        div.appendChild(h3)\n        div.appendChild(desc)\n        div.appendChild(p)\n        div.appendChild(priority)\n        div.appendChild(due)\n        proj.appendChild(a);\n        container.appendChild(proj);\n        if (!_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[i].dueDate) {\n            const due = document.getElementById(`${i}-due`);\n            due.textContent = '';\n        }\n        if (!_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[i].priority) {\n            const priority = document.getElementById(`priority`);\n            priority.textContent = '';\n        }\n    }\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getIndexOfClickedCardAndOpenModal)()\n}\n\n// Display and update content in project dialog\nfunction displayProjectDialog(index) {\n    const dialog = document.getElementById('projectInfo');\n    dialog.textContent = '';\n    const container = document.createElement('div');\n    container.setAttribute('id', 'project-dialog-container');\n    const form = document.createElement('form');\n    form.setAttribute('tabindex', '0');\n    form.setAttribute('id', 'project-dialog-form');\n    const header = document.createElement('div');\n    header.setAttribute('id', 'header');\n    const button = document.createElement('button');\n    button.setAttribute('id', 'exit-button');\n    const i = document.createElement('i');\n    i.setAttribute('style', 'color:white');\n    i.setAttribute('class', 'fa fa-angle-double-left fa-3x');\n    i.setAttribute('aria-hidden', 'true');\n    const input = document.createElement('input');\n    input.setAttribute('id', 'project-title');\n    input.setAttribute('value', `${_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[index].title}`);\n    const details = document.createElement('details');\n    const h3 = document.createElement('h3');\n    h3.textContent = `Description: ${_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[index].desc}`;\n    const h4 = document.createElement('h4');\n    h4.textContent = `Priority: ${_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[index].priority}`;\n    const h5 = document.createElement('h5');\n    h5.textContent = `Due: ${_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[index].dueDate}`;\n\n\n    const h2 = document.createElement('h2');\n    h2.textContent = 'Notes:';\n    const div = document.createElement('div');\n    div.setAttribute('id', 'project-note-container');\n    const ul = document.createElement('ul');\n    ul.setAttribute('id', 'note-list');\n    const addButton = document.createElement('button');\n    addButton.setAttribute('class', 'card');\n    addButton.setAttribute('id', 'addNoteButton');\n    const iNote = document.createElement('i');\n    iNote.setAttribute('class', 'fa-solid fa-plus fa-5x');\n\n\n\n    container.appendChild(form);\n    dialog.appendChild(container);\n    button.appendChild(i);\n    header.appendChild(button)\n    form.appendChild(input);\n    form.appendChild(header);\n    details.appendChild(h3);\n    details.appendChild(h4);\n    details.appendChild(h5);\n    form.appendChild(details)\n\n    container.appendChild(div)\n    div.appendChild(ul);\n    div.appendChild(addButton)\n    addButton.appendChild(iNote)\n\n\n    document.getElementById('exit-button').addEventListener('click', () => {\n        dialog.close()\n    })\n    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.displayNotes)()\n    dialog.showModal()\n    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawAddNoteDialog)()\n}\n\n//# sourceURL=webpack://todolist/./src/js/dom.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayNotes: () => (/* binding */ displayNotes),\n/* harmony export */   drawAddNoteDialog: () => (/* binding */ drawAddNoteDialog),\n/* harmony export */   getIndexOfClickedCardAndOpenModal: () => (/* binding */ getIndexOfClickedCardAndOpenModal),\n/* harmony export */   projects: () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/js/dom.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\n\n\nlet projects = []\n\nclass Project {\n    constructor(title, desc, priority, dueDate) {\n        this.title = title;\n        this.desc = desc;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        // ???\n        this.isDisplayed = false;\n        // ???\n        this.notes = [new Note('Test note', 'Text'), new Note('Test note 2', 'Text', 'Medium')];\n    }\n    get title() {\n        return super.title;\n    }\n    set title(title) {\n        super.title = title\n    }\n};\nclass Note {\n    constructor(title, text, priority) {\n        this.title = title;\n        this.text = text;\n        this.priority = priority;\n    }\n}\nconst projectDialog = document.getElementById('addProjectDialog');\ndocument.getElementById('addProjectBtn').addEventListener('click', () => {\n    addProjectTitle.value = '';\n    addProjectDesc.value = '';\n    addProjectPriority.value = null;\n    addProjectDueDate.value = null;\n    projectDialog.showModal()\n})\nconst submitBtn = document.getElementById('submitProjectBtn')\nsubmitBtn.addEventListener('click', () => {\n    projects.push(new Project(addProjectTitle.value, addProjectDesc.value, addProjectPriority.value, addProjectDueDate.value, false))\n    ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.displayProjectList)()\n})\n\nlet currIndex = null;\nfunction getIndexOfClickedCardAndOpenModal() {\n    const cards = document.getElementsByClassName('project-card');\n    const cardPressed = e => {\n        let index = e.currentTarget.id;  // Get ID of Clicked Element\n        currIndex = index\n        ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.displayProjectDialog)(currIndex)\n    }\n    for (let card of cards) {\n        card.addEventListener(\"click\", cardPressed);\n    }\n};\n\n\nfunction drawAddNoteDialog(currIndex) {\n    document.getElementById('addNoteButton').addEventListener('click', () => {\n        addNoteTitle.value = '';\n        addNoteText.value = '';\n        addNotePriority.value = '';\n        const d = document.getElementById('addNoteDialog')\n        d.showModal()\n\n    })\n}\nfunction addNote() {\n    projects[currIndex].notes.push(new Note(addNoteTitle.value, addNoteText.value, addNotePriority.value))\n    displayNotes()\n}\ndocument.getElementById('submitNoteBtn').addEventListener('click', () => {\n    addNote()\n})\n\nfunction displayNotes() {\n    const noteContainer = document.getElementById('note-list');\n    noteContainer.textContent = '';\n    for (const note of projects[currIndex].notes) {\n        const noteLi = document.createElement('li');\n        noteLi.setAttribute('class', 'card')\n        const h2 = document.createElement('h2');\n        h2.textContent = `${note.title}`;\n        const p = document.createElement('p');\n        p.textContent = `${note.text}`;\n        const div = document.createElement('div');\n        div.setAttribute('id', 'note-priority');\n        div.textContent = `Priority: ${note.priority}`;\n        noteLi.appendChild(h2)\n        noteLi.appendChild(p)\n        noteLi.appendChild(div)\n        noteContainer.appendChild(noteLi);\n        if (!note.priority) {\n            const notePriority = document.getElementById('note-priority');\n            notePriority.textContent = '';\n        }\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/js/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;