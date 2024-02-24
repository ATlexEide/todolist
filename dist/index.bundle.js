/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --main-color: rgb(20, 17, 17);
    --card-color: rgb(0, 0, 0);
    --card-border-color: rgb(113, 71, 126);
    --gradient-sides: #7a7a7a;
    --gradient-mid: #ffffff;
}

* {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body {
    background-color: var(--main-color);
}

header {
    text-align: center;
    color: white;
}

header h1 {
    background: linear-gradient(90deg, var(--gradient-sides) 40%, var(--gradient-mid) 50%, var(--gradient-sides) 60%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

}

#project-container {
    padding: 48px;
    display: flex;
    flex-wrap: wrap;
}

#project-list {
    display: flex;
    flex-wrap: wrap;
}

ul,
li {
    padding: 0px;
    margin: 0px;
    list-style-type: none;
}


#addProjectForm {
    width: 20vw;
    height: 50vh;
    color: black;
    display: flex;
    flex-direction: column;
}

form,
dialog,
fieldset {
    background-color: var(--main-color);
    border: none;
}

label,
legend,
input,
option,
textarea {
    color: white;
}

input::placeholder,
textarea::placeholder {
    color: rgb(230, 100, 100);
}

form input,
form label,
form textarea,
form button {
    padding: .5rem;
    width: 200px;
}

textarea,
input,
select {
    background-color: rgb(26, 26, 26);
}

#addNoteBtn,
#addProjectBtn {
    border: solid 2px white;
    margin-right: auto;
}

.card {
    color: white;
    background: linear-gradient(-30deg, rgba(15, 15, 15, .9) 0%, rgb(0, 0, 0, 0.4) 55%);
    border: solid 2px;
    border-color: var(--card-border-color);
    border-radius: 7px;
    margin-left: 20px;
    padding-left: 10px;
    width: 250px;
    height: 250px;
}

.card header {
    display: flex;
    justify-content: space-between;
    padding: 4px;
}

.delete-button {
    border: solid 1px black;
    border-radius: 5px;
    aspect-ratio: 1;
    height: 48px;
}

.delete-button:hover {
    background-color: red;
}

button .card {
    display: flex;
    align-items: center;
    justify-content: center;

}

#projectInfo {
    width: 100vw;
    height: 100vh;
    border: none;
    background-color: rgb(165, 30, 113);
    background-color: var(--main-color);
    color: white;
}

#project-dialog-form {
    width: 100%;
    display: flex;
    flex-direction: column;
}

#projectInfo h2 {
    text-align: center;
}

#projectInfo h3,
h4,
h5 {
    font-size: 18px;
}

#project-dialog-form input {
    width: 400px;
    background-color: rgb(0, 0, 0, 0);
    border: none;
    font-size: 18px;
    color: white;
    font-size: 38px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

#project-note-container {
    display: flex;
}

#dialog-header {
    display: grid;
    grid-template-columns: 50px 1fr 50px;
}

#exit-button {
    width: min-content;
    height: min-content;
    background-color: rgb(0, 0, 0, 0);
    border: none;
}

#project-note-container {
    padding: 48px;
    display: flex;
    flex-wrap: wrap;
}

#note-list {
    display: flex;
    flex-wrap: wrap;
}

#addNoteDialog form {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 400px;
}

#addNoteDialog input,
#addNoteDialog textarea {
    width: 90%;
}

#addNoteDialog select {
    width: 50%;
}

a {
    text-decoration: none;
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,0BAA0B;IAC1B,sCAAsC;IACtC,yBAAyB;IACzB,uBAAuB;AAC3B;;AAEA;IACI,gDAAgD;AACpD;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,iHAAiH;IACjH,6BAA6B;IAC7B,oCAAoC;;AAExC;;AAEA;IACI,aAAa;IACb,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,qBAAqB;AACzB;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;;IAGI,mCAAmC;IACnC,YAAY;AAChB;;AAEA;;;;;IAKI,YAAY;AAChB;;AAEA;;IAEI,yBAAyB;AAC7B;;AAEA;;;;IAII,cAAc;IACd,YAAY;AAChB;;AAEA;;;IAGI,iCAAiC;AACrC;;AAEA;;IAEI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,mFAAmF;IACnF,iBAAiB;IACjB,sCAAsC;IACtC,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;AAE3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,mCAAmC;IACnC,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;;IAGI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,iCAAiC;IACjC,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,aAAa;AACjB;;AAEA;;IAEI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":[":root {\n    --main-color: rgb(20, 17, 17);\n    --card-color: rgb(0, 0, 0);\n    --card-border-color: rgb(113, 71, 126);\n    --gradient-sides: #7a7a7a;\n    --gradient-mid: #ffffff;\n}\n\n* {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbody {\n    background-color: var(--main-color);\n}\n\nheader {\n    text-align: center;\n    color: white;\n}\n\nheader h1 {\n    background: linear-gradient(90deg, var(--gradient-sides) 40%, var(--gradient-mid) 50%, var(--gradient-sides) 60%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n\n}\n\n#project-container {\n    padding: 48px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n#project-list {\n    display: flex;\n    flex-wrap: wrap;\n}\n\nul,\nli {\n    padding: 0px;\n    margin: 0px;\n    list-style-type: none;\n}\n\n\n#addProjectForm {\n    width: 20vw;\n    height: 50vh;\n    color: black;\n    display: flex;\n    flex-direction: column;\n}\n\nform,\ndialog,\nfieldset {\n    background-color: var(--main-color);\n    border: none;\n}\n\nlabel,\nlegend,\ninput,\noption,\ntextarea {\n    color: white;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n    color: rgb(230, 100, 100);\n}\n\nform input,\nform label,\nform textarea,\nform button {\n    padding: .5rem;\n    width: 200px;\n}\n\ntextarea,\ninput,\nselect {\n    background-color: rgb(26, 26, 26);\n}\n\n#addNoteBtn,\n#addProjectBtn {\n    border: solid 2px white;\n    margin-right: auto;\n}\n\n.card {\n    color: white;\n    background: linear-gradient(-30deg, rgba(15, 15, 15, .9) 0%, rgb(0, 0, 0, 0.4) 55%);\n    border: solid 2px;\n    border-color: var(--card-border-color);\n    border-radius: 7px;\n    margin-left: 20px;\n    padding-left: 10px;\n    width: 250px;\n    height: 250px;\n}\n\n.card header {\n    display: flex;\n    justify-content: space-between;\n    padding: 4px;\n}\n\n.delete-button {\n    border: solid 1px black;\n    border-radius: 5px;\n    aspect-ratio: 1;\n    height: 48px;\n}\n\n.delete-button:hover {\n    background-color: red;\n}\n\nbutton .card {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n}\n\n#projectInfo {\n    width: 100vw;\n    height: 100vh;\n    border: none;\n    background-color: rgb(165, 30, 113);\n    background-color: var(--main-color);\n    color: white;\n}\n\n#project-dialog-form {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n#projectInfo h2 {\n    text-align: center;\n}\n\n#projectInfo h3,\nh4,\nh5 {\n    font-size: 18px;\n}\n\n#project-dialog-form input {\n    width: 400px;\n    background-color: rgb(0, 0, 0, 0);\n    border: none;\n    font-size: 18px;\n    color: white;\n    font-size: 38px;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n#project-note-container {\n    display: flex;\n}\n\n#dialog-header {\n    display: grid;\n    grid-template-columns: 50px 1fr 50px;\n}\n\n#exit-button {\n    width: min-content;\n    height: min-content;\n    background-color: rgb(0, 0, 0, 0);\n    border: none;\n}\n\n#project-note-container {\n    padding: 48px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n#note-list {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n#addNoteDialog form {\n    display: flex;\n    flex-direction: column;\n    width: 350px;\n    height: 400px;\n}\n\n#addNoteDialog input,\n#addNoteDialog textarea {\n    width: 90%;\n}\n\n#addNoteDialog select {\n    width: 50%;\n}\n\na {\n    text-decoration: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayNotes: () => (/* binding */ displayNotes),
/* harmony export */   displayProjectDialog: () => (/* binding */ displayProjectDialog),
/* harmony export */   displayProjectList: () => (/* binding */ displayProjectList)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/js/index.js");



// Display projects as cards on page
function displayProjectList() {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)()
    const container = document.getElementById('project-list');
    container.textContent = '';
    for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {
        const proj = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', '#');
        a.setAttribute('class', 'project-card');
        a.setAttribute('id', `${i}`);
        const header = document.createElement('header');
        const div = document.createElement('div');
        div.setAttribute('class', 'card');
        const h3 = document.createElement('h3');
        h3.textContent = `${_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[i].title}`;
        const desc = document.createElement('div');
        desc.textContent = `Description:`;
        const p = document.createElement('p');
        p.textContent = `${_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[i].desc}`;
        const priority = document.createElement('div');
        priority.setAttribute('id', 'priority')
        priority.textContent = `Priority: ${_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[i].priority}`;
        const due = document.createElement('div');
        due.setAttribute('id', `${i}-due`);
        due.textContent = `Due by ${_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[i].dueDate}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'delete-button');
        const deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class', 'fa fa-trash');
        deleteIcon.setAttribute('aria-hidden', 'true');
        a.appendChild(div);
        header.appendChild(h3)
        div.appendChild(header)
        div.appendChild(desc)
        div.appendChild(p)
        div.appendChild(priority)
        div.appendChild(due)
        proj.appendChild(a);

        header.appendChild(deleteBtn);
        deleteBtn.appendChild(deleteIcon);

        container.appendChild(proj);
        if (!_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[i].dueDate) {
            const due = document.getElementById(`${i}-due`);
            due.textContent = '';
        }
        if (!_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[i].priority) {
            const priority = document.getElementById(`priority`);
            priority.textContent = '';
        }
    }
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getIndexOfClickedCardAndOpenModal)()
}
// Display and update content in project dialog
function displayProjectDialog(index) {
    const dialog = document.getElementById('projectInfo');
    dialog.textContent = '';
    const container = document.createElement('div');
    container.setAttribute('id', 'project-dialog-container');
    const form = document.createElement('form');
    form.setAttribute('tabindex', '0');
    form.setAttribute('id', 'project-dialog-form');
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    const button = document.createElement('button');
    button.setAttribute('id', 'exit-button');
    const i = document.createElement('i');
    i.setAttribute('style', 'color:white');
    i.setAttribute('class', 'fa fa-angle-double-left fa-3x');
    i.setAttribute('aria-hidden', 'true');
    const input = document.createElement('input');
    input.setAttribute('id', 'project-title');
    input.setAttribute('value', `${_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[index].title}`);
    const details = document.createElement('details');
    const h3 = document.createElement('h3');
    h3.textContent = `Description: ${_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[index].desc}`;
    const h4 = document.createElement('h4');
    h4.textContent = `Priority: ${_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[index].priority}`;
    const h5 = document.createElement('h5');
    h5.textContent = `Due: ${_index_js__WEBPACK_IMPORTED_MODULE_0__.projects[index].dueDate}`;


    const h2 = document.createElement('h2');
    h2.textContent = 'Notes:';
    const div = document.createElement('div');
    div.setAttribute('id', 'project-note-container');
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'note-list');
    const addButton = document.createElement('button');
    addButton.setAttribute('class', 'card');
    addButton.setAttribute('id', 'addNoteButton');
    const iNote = document.createElement('i');
    iNote.setAttribute('class', 'fa-solid fa-plus fa-5x');



    container.appendChild(form);
    dialog.appendChild(container);
    button.appendChild(i);
    header.appendChild(button)
    form.appendChild(input);
    form.appendChild(header);
    details.appendChild(h3);
    details.appendChild(h4);
    details.appendChild(h5);
    form.appendChild(details)

    container.appendChild(div)
    div.appendChild(ul);
    div.appendChild(addButton)
    addButton.appendChild(iNote)


    document.getElementById('exit-button').addEventListener('click', () => {
        dialog.close()
        ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.checkForTitleChange)(index)
    })
    displayNotes()
    dialog.showModal()
    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.drawAddNoteDialog)()
}

function displayNotes() {
    const noteContainer = document.getElementById('note-list');
    noteContainer.textContent = '';
    for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.projects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currIndex].notes.length; i++) {
        const header = document.createElement('header');
        const note = _index_js__WEBPACK_IMPORTED_MODULE_0__.projects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currIndex].notes[i];
        const noteLi = document.createElement('li');
        noteLi.setAttribute('class', 'card')
        const h2 = document.createElement('h2');
        h2.textContent = `${note.title}`;
        const p = document.createElement('p');
        p.textContent = `${note.text}`;
        const div = document.createElement('div');
        div.setAttribute('id', 'note-priority');
        div.textContent = `Priority: ${note.priority}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'delete-button');
        const deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class', 'fa fa-trash');
        deleteIcon.setAttribute('aria-hidden', 'true');
        deleteBtn.appendChild(deleteIcon)
        header.appendChild(h2)
        header.appendChild(deleteBtn)
        noteLi.appendChild(header)
        noteLi.appendChild(p)
        noteLi.appendChild(div)
        noteContainer.appendChild(noteLi);
        if (!note.priority) {
            const notePriority = document.getElementById('note-priority');
            notePriority.textContent = '';
        }
    }
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkForTitleChange: () => (/* binding */ checkForTitleChange),
/* harmony export */   currIndex: () => (/* binding */ currIndex),
/* harmony export */   drawAddNoteDialog: () => (/* binding */ drawAddNoteDialog),
/* harmony export */   getFromLocalStorage: () => (/* binding */ getFromLocalStorage),
/* harmony export */   getIndexOfClickedCardAndOpenModal: () => (/* binding */ getIndexOfClickedCardAndOpenModal),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/js/dom.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");



let projects = [];


class Project {
    constructor(title, desc, priority, dueDate) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = [];
    }
    get title() {
        return super.title;
    }
    set title(title) {
        super.title = title
    }
};
class Note {
    constructor(title, text, priority) {
        this.title = title;
        this.text = text;
        this.priority = priority;
    }
}
(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.displayProjectList)()
const projectDialog = document.getElementById('addProjectDialog');
document.getElementById('addProjectBtn').addEventListener('click', () => {
    addProjectTitle.value = '';
    addProjectDesc.value = '';
    addProjectPriority.value = 'none';
    addProjectDueDate.value = null;
    projectDialog.showModal()
})
const submitBtn = document.getElementById('submitProjectBtn')
submitBtn.addEventListener('click', () => {
    const newProject = new Project(addProjectTitle.value, addProjectDesc.value, addProjectPriority.value, addProjectDueDate.value)
    const title = newProject.title
    addToLocalStorage(title, newProject)
    ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.displayProjectList)()
})

let currIndex = null;
function getIndexOfClickedCardAndOpenModal() {
    const cards = document.getElementsByClassName('project-card');
    const cardPressed = e => {
        let index = e.currentTarget.id;  // Get ID of Clicked Element
        currIndex = index
        ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.displayProjectDialog)(currIndex)
    }
    for (let card of cards) {
        card.addEventListener("click", cardPressed);
    }
};


function drawAddNoteDialog(currIndex) {
    document.getElementById('addNoteButton').addEventListener('click', () => {
        addNoteTitle.value = '';
        addNoteText.value = '';
        addNotePriority.value = 'none';
        const d = document.getElementById('addNoteDialog')
        d.showModal()

    })
}
function addNote() {
    projects[currIndex].notes.push(new Note(addNoteTitle.value, addNoteText.value, addNotePriority.value))
    ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.displayNotes)()
}
document.getElementById('submitNoteBtn').addEventListener('click', () => {
    addNote()
})


function checkForTitleChange(index) {
    const titleInput = document.getElementById('project-title');
    if (titleInput.value !== projects[currIndex].title) {
        const keyToRemove = projects[currIndex].title;
        projects[index].title = titleInput.value;
        addToLocalStorage(`${projects[index].title}`, projects[index])
        localStorage.removeItem(`${keyToRemove}`)
        ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.displayProjectList)()
        console.log('at titlechange: ', localStorage)
    }
}

function addToLocalStorage(title, project) {
    localStorage.setItem(`${title}`, JSON.stringify(project))
}
function getFromLocalStorage() {
    projects = [];
    for (let i = 0; i < localStorage.length; i++) {
        projects.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    console.log('at add to local: ', localStorage)
}

// export function listenForDelete() {
//     document.getElementsByClassName('delete-button').addEventListener('click', () => { console.log('yipp') })
// }

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
//# sourceMappingURL=index.bundle.js.map