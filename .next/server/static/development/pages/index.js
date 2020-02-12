module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/IMAHeader.js":
/*!*********************************!*\
  !*** ./components/IMAHeader.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\bhavi\\Documents\\Coding\\IMA-next\\components\\IMAHeader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const linkStyle = {
  marginRight: 15
};

const IMAHeader = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/sales",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Sales")));

/* harmony default export */ __webpack_exports__["default"] = (IMAHeader);

/***/ }),

/***/ "./components/IMALayout.js":
/*!*********************************!*\
  !*** ./components/IMALayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IMAHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IMAHeader */ "./components/IMAHeader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global */ "./styles/global.js");
var _jsxFileName = "C:\\Users\\bhavi\\Documents\\Coding\\IMA-next\\components\\IMALayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const IMALayout = props => __jsx("div", {
  className: "page-layout",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: _styles_global__WEBPACK_IMPORTED_MODULE_3__["default"].__hash,
  __self: undefined
}, _styles_global__WEBPACK_IMPORTED_MODULE_3__["default"]), __jsx(_IMAHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), props.children);

/* harmony default export */ __webpack_exports__["default"] = (IMALayout);

/***/ }),

/***/ "./components/IMARecentSalesChart.js":
/*!*******************************************!*\
  !*** ./components/IMARecentSalesChart.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nivo/bar */ "@nivo/bar");
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nivo_bar__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\bhavi\\Documents\\Coding\\IMA-next\\components\\IMARecentSalesChart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const IMARecentSalesChart = ({
  data
  /* see data tab */

}) => __jsx(_nivo_bar__WEBPACK_IMPORTED_MODULE_1__["ResponsiveBar"], {
  data: data,
  keys: ['Iron Sheet', 'Copper Sheet'],
  indexBy: "date",
  margin: {
    top: 50,
    right: 130,
    bottom: 50,
    left: 60
  },
  padding: 0.3,
  colors: {
    scheme: 'nivo'
  },
  defs: [{
    id: 'dots',
    type: 'patternDots',
    background: 'inherit',
    color: '#38bcb2',
    size: 4,
    padding: 1,
    stagger: true
  }, {
    id: 'lines',
    type: 'patternLines',
    background: 'inherit',
    color: '#eed312',
    rotation: -45,
    lineWidth: 6,
    spacing: 10
  }],
  fill: [{
    match: {
      id: 'fries'
    },
    id: 'dots'
  }, {
    match: {
      id: 'sandwich'
    },
    id: 'lines'
  }],
  borderColor: {
    from: 'color',
    modifiers: [['darker', 1.6]]
  },
  axisTop: null,
  axisRight: null,
  axisBottom: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Date',
    legendPosition: 'middle',
    legendOffset: 32
  },
  axisLeft: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Quantity Sold',
    legendPosition: 'middle',
    legendOffset: -40
  },
  labelSkipWidth: 12,
  labelSkipHeight: 12,
  labelTextColor: {
    from: 'color',
    modifiers: [['darker', 1.6]]
  },
  legends: [{
    dataFrom: 'keys',
    anchor: 'bottom-right',
    direction: 'column',
    justify: false,
    translateX: 120,
    translateY: 0,
    itemsSpacing: 2,
    itemWidth: 100,
    itemHeight: 20,
    itemDirection: 'left-to-right',
    itemOpacity: 0.85,
    symbolSize: 20,
    effects: [{
      on: 'hover',
      style: {
        itemOpacity: 1
      }
    }]
  }],
  animate: true,
  motionStiffness: 90,
  motionDamping: 15,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (IMARecentSalesChart);

/***/ }),

/***/ "./components/forms/IMANewSaleForm.js":
/*!********************************************!*\
  !*** ./components/forms/IMANewSaleForm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\bhavi\\Documents\\Coding\\IMA-next\\components\\forms\\IMANewSaleForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var moment = __webpack_require__(/*! moment */ "moment");

moment().format('L');

const MyTextInput = (_ref) => {
  let {
    label
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label"]);

  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(props);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("label", {
    htmlFor: props.id || props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, label), __jsx("input", _extends({
    className: "text-input"
  }, field, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), meta.touched && meta.error ? __jsx("div", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, meta.error) : null);
};

const MySelect = (_ref2) => {
  let {
    label
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["label"]);

  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(props);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(StyledLabel, {
    htmlFor: props.id || props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, label), __jsx(StyledSelect, _extends({}, field, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  })), meta.touched && meta.error ? __jsx(StyledErrorMessage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, meta.error) : null);
};

const MyDateInput = (_ref3) => {
  let {
    label
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["label"]);

  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(props);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("label", {
    htmlFor: props.id || props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, label), __jsx("input", _extends({
    className: "text-input"
  }, field, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  })), meta.touched && meta.error ? __jsx("div", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, meta.error) : null);
};

function submitNewSale(productList, values) {
  var totalPrice = 0;
  values.quantities.forEach((product, index) => {
    var productPrice = getProductFromProductList(productList, product.name).price;
    product.price = productPrice;
    totalPrice += product.price * product.qty;
  }, values.quantities);
  values.totalPrice = totalPrice;
  console.log(JSON.stringify(values));
  insertSaleIntoSales(values); //check if customer already exists by Name. if not add new with email if exists.

  values['quantities'].forEach((product, index) => {
    updateProductInInventory(product['name'], product['qty']);
  });
}

function getProductFromProductList(productList, productName) {
  var ret = null;
  productList.forEach((product, index) => {
    if (product.name === productName) {
      ret = product;
    }
  });
  return ret;
}

const updateProductInInventory = async (name, incrementAmt) => {
  const res = await fetch('http://localhost:3000/api/inventoryUpdate', {
    method: 'post',
    body: JSON.stringify({
      name: name,
      incrementAmt: incrementAmt
    })
  });
};

const insertSaleIntoSales = async sale => {
  const rest = await fetch('http://localhost:3000/api/sales', {
    method: 'post',
    body: JSON.stringify(sale)
  });
}; // Styled components ....


const StyledSelect = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default.a.select`
    color: var(--blue);
  `;
const StyledErrorMessage = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default.a.div`
    font-size: 12px;
    color: var(--red-600);
    width: 400px;
    margin-top: 0.25rem;
    &:before {
      content: "❌ ";
      font-size: 10px;
    }
    @media (prefers-color-scheme: dark) {
      color: var(--red-300);
    }
  `;
const StyledLabel = _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default.a.label`
    margin-top: 1rem;
  `;

const IMANewSaleForm = props => {
  console.log(JSON.stringify(props.productList.map(function (val, index) {
    return {
      name: val.name
    };
  })));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "Add New Sale"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      customerName: "",
      date: "",
      customerEmail: "",
      quantities: [{}] // added for our select

    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]({
      customerName: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().max(15, "Must be 15 characters or less").required("Required"),
      date: yup__WEBPACK_IMPORTED_MODULE_2__["date"]().required("Required"),
      customerEmail: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email("Invalid email address"),
      quantities: yup__WEBPACK_IMPORTED_MODULE_2__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('Required'),
        qty: yup__WEBPACK_IMPORTED_MODULE_2__["number"]().min(0, 'Must be atleast 1').required('Required')
      })).required('Must have products sold').min(1, 'Minimum of 1 product')
    }),
    onSubmit: (values, {
      setSubmitting,
      resetForm
    }) => {
      console.log("submitted" + JSON.stringify(values));
      resetForm({});
      setTimeout(() => {
        submitNewSale(props.productList, values);
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, ({
    values,
    errors,
    touched,
    handleReset,
    setFieldValue
  }) => {
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: undefined
    }, __jsx(MyTextInput, {
      label: "Customer Name",
      name: "customerName",
      type: "text",
      placeholder: "John Doe",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: undefined
    }), __jsx(MyDateInput, {
      label: "Date of Sale",
      name: "date",
      type: "date",
      placeholder: moment(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: undefined
    }), __jsx(MyTextInput, {
      label: "Customer Email Address",
      name: "customerEmail",
      type: "email",
      placeholder: "jane@doe.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: undefined
    }), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: undefined
    }, "Add Products Bought"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["FieldArray"], {
      name: "quantities",
      render: arrayHelpers => __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: undefined
      }, values.quantities.length > 0 && values.quantities.map((product, index) => __jsx("div", {
        className: "row",
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: undefined
      }, __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: undefined
      }, __jsx("label", {
        htmlFor: `quantities.${index}.name`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: undefined
      }, "Name"), __jsx(MySelect, {
        label: "Product Name",
        name: `quantities.${index}.name`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: undefined
      }, __jsx("option", {
        selected: "selected",
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: undefined
      }, "Select a product"), props.productList.map(product => __jsx("option", {
        key: product.name,
        value: product.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: undefined
      }, product.name + " ($" + product.price + ")")))), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: undefined
      }, __jsx("label", {
        htmlFor: `quantities.${index}.qty`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: undefined
      }, " Quantity"), __jsx(MyTextInput, {
        name: `quantities.${index}.qty`,
        placeholder: "99999",
        type: "number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: undefined
      })), __jsx("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: undefined
      }, __jsx("button", {
        className: "secondary",
        type: "remove",
        onClick: () => arrayHelpers.remove(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: undefined
      }, "X")))), __jsx("button", {
        type: "add",
        className: "secondary",
        onClick: () => arrayHelpers.push({
          name: "",
          qty: ""
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: undefined
      }, "Add Product")),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: undefined
    }), __jsx("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: undefined
    }, "Submit"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IMANewSaleForm);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_IMALayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/IMALayout */ "./components/IMALayout.js");
/* harmony import */ var _components_IMARecentSalesChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/IMARecentSalesChart */ "./components/IMARecentSalesChart.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_forms_IMANewSaleForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/forms/IMANewSaleForm */ "./components/forms/IMANewSaleForm.js");
var _jsxFileName = "C:\\Users\\bhavi\\Documents\\Coding\\IMA-next\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var moment = __webpack_require__(/*! moment */ "moment");

moment().format('L');

const Dashboard = props => {
  return __jsx(_components_IMALayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "form to add new sale form to add new customer form to add new inventory item1", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "recent sales since 30 days ago: ", JSON.stringify(props.recentSalesByDateDict)), __jsx("div", {
    style: {
      height: 500 + "px",
      width: 500 + 'px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_components_IMARecentSalesChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: getMostRecentSalesNIVO(props.recentSalesByDateDict),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }))), __jsx(_components_forms_IMANewSaleForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    productList: props.productList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }));
};

Dashboard.getInitialProps = async ctx => {
  const sales = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:3000/api/sales?daysAgo=' + 30);
  const salesjson = await sales.json();
  console.log(`Show data fetched. ${JSON.stringify(salesjson)}`);
  var mostRecentSales = getMostRecentSalesDict(salesjson);
  const inventory = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:3000/api/inventory');
  const inventoryjson = await inventory.json();
  console.log(`Show data fetched. prod list ${JSON.stringify(inventoryjson)}`);
  var productList = inventoryjson;
  return {
    productList: productList,
    recentSalesByDateDict: mostRecentSales
  };
};

function getMostRecentSalesDict(sales) {
  var recentSales = {};
  sales.forEach((sale, index) => {
    console.log(index + ":" + sale["date"]);
    var date = moment(sale["date"]).format("L");
    var quantities = sale["quantities"]; // console.log(JSON.stringify(quantities))

    if (recentSales[date]) {
      console.log('this date exists' + date);
      recentSales[date].forEach((product, index) => {
        // console.log("existing product name for this day: " + product['name'])
        var sameProduct = findProductInQuantities(product["name"], quantities);
        console.log(JSON.stringify(sameProduct));

        if (sameProduct === null) {} else {
          // console.log("found same product: " + JSON.stringify(product) + product['qty'] +"+\n " + JSON.stringify(sameProduct))
          product["qty"] += sameProduct["qty"];
        }
      }, recentSales[date]);
    } else {
      //this date does not yet exist in recentSales
      recentSales[date] = sale["quantities"];
    }
  });
  console.log("map:  " + JSON.stringify(recentSales) + "232323");
  return recentSales;
}

;

function getMostRecentSalesNIVO(recentSalesDict) {
  var recentSales = [];
  Object.keys(recentSalesDict).forEach(function (date, index) {
    var salesOnDate = recentSalesDict[date];
    recentSales.push({});
    recentSales[index]['date'] = date;

    for (var i = 0; i < salesOnDate.length; i++) {
      recentSales[index][salesOnDate[i]['name']] = salesOnDate[i]['qty'];

      switch (salesOnDate[i]['name']) {
        case 'Iron Sheet':
          recentSales[index]['Iron SheetColor'] = "hsl(129, 70%, 50%)";
          break;

        case 'Copper Sheet':
          recentSales[index]['Copper SheetColor'] = "hsl(77, 70%, 50%)";
          break;
      }
    }
  });
  console.log("recentNIVO: " + JSON.stringify(recentSales));
  return recentSales;
}

function findProductInQuantities(name, quantities) {
  var foundProduct = null;
  quantities.forEach((product, index) => {
    console.log(name + "checking product name: " + product['name']);

    if (name == product['name']) {
      console.log('true' + JSON.stringify(product));
      foundProduct = product;
    }
  });
  return foundProduct;
}

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./styles/global.js":
/*!**************************!*\
  !*** ./styles/global.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _defaultExport = new String("*{box-sizing:border-box;margin:0;padding:0;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;}html{font-size:16px;font-family:-apple-system,BlinkMacSystemFont,\"avenir next\",avenir, \"helvetica neue\",helvetica,ubuntu,roboto,noto,\"segoe ui\",arial, sans-serif;margin:0;padding:0;-webkit-text-decoration-skip-ink:\"auto\";text-decoration-skip-ink:\"auto\";}:root{--gray-900:#1a202c;--gray-800:#2d3748;--gray-700:#4a5568;--gray-600:#718096;--gray-500:#a0aec0;--gray-400:#cbd5e0;--gray-300:#e2e8f0;--gray-200:#edf2f7;--gray-100:#f7fafc;--red-100:#fff5f5;--red-200:#fed7d7;--red-300:#feb2b2;--red-400:#fc8181;--red-500:#f56565;--red-600:#e53e3e;--red-700:#c53030;--red-800:#9b2c2c;--red-900:#742a2a;--blue-100:#ebf8ff;--blue-200:#bee3f8;--blue-300:#90cdf4;--blue-400:#63b3ed;--blue-500:#4299e1;--blue-600:#3182ce;--blue-700:#2b6cb0;--blue-800:#2c5282;--blue-900:#2a4365;--white:white;--red:#f56565;--text-decoration-color:var(--gray-400);--text-color:var(--gray-800);--focus-ring-color:var(--blue-500);}body{padding:0;margin:calc((100vh / 25) * 1.563) calc((100vw / 25) * 1.563);background-color:white;font-weight:400;line-height:1.563;color:var(--text-color);caret-color:var(--text-color);}@media (prefers-color-scheme:dark){body{color:white;background-color:var(--gray-900);caret-color:white;}}h1,h2,h3,h4,h5,h6{margin-bottom:1rem;margin-top:1em;font-weight:bold;}h1{font-size:3.052rem;-webkit-letter-spacing:-0.15rem;-moz-letter-spacing:-0.15rem;-ms-letter-spacing:-0.15rem;letter-spacing:-0.15rem;line-height:1;}h2{font-size:2.441rem;-webkit-letter-spacing:-0.12rem;-moz-letter-spacing:-0.12rem;-ms-letter-spacing:-0.12rem;letter-spacing:-0.12rem;line-height:1.2;}h3{font-size:1.953rem;-webkit-letter-spacing:-0.09rem;-moz-letter-spacing:-0.09rem;-ms-letter-spacing:-0.09rem;letter-spacing:-0.09rem;line-height:1.2;}h4{font-size:1.563rem;-webkit-letter-spacing:-0.06rem;-moz-letter-spacing:-0.06rem;-ms-letter-spacing:-0.06rem;letter-spacing:-0.06rem;line-height:1.3;}h5{font-size:1.25rem;-webkit-letter-spacing:-0.03rem;-moz-letter-spacing:-0.03rem;-ms-letter-spacing:-0.03rem;letter-spacing:-0.03rem;line-height:1.4;}h6{font-size:1rem;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;line-height:1.5;}p{margin-bottom:1.563rem;}p>*:last-child{margin-bottom:0;}a{color:inherit;-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration-color:var(--text-decoration-color);text-decoration-color:var(--text-decoration-color);-webkit-text-decoration-color:var(--text-decoration-color);border-radius:5px;text-underline-offset:2px;-webkit-text-decoration-thickness:2px;text-decoration-thickness:2px;}@media (hover:hover){a:hover{-webkit-text-decoration-color:var(--gray-800);text-decoration-color:var(--gray-800);}}@media (hover:hover) and (prefers-color-scheme:dark){a:hover{-webkit-text-decoration-color:white;text-decoration-color:white;}}@media (prefers-color-scheme:dark){a{-webkit-text-decoration-color:var(--gray-700);text-decoration-color:var(--gray-700);-webkit-text-decoration-color:var(--gray-700);}}a:focus-visible{box-shadow:0 0 0 2px var(--focus-ring-color);outline:none;}small{font-size:0.888rem;}hr{border:1px solid var(--gray-700);margin:3.052rem 0;}label{font-weight:bold;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}input[type=\"email\"],input[type=\"text\"],input[type=\"date\"],input[type=\"number\"]{padding:0.65rem 0.5rem;font-size:1rem;border:2px solid var(--gray-200);background-color:var(--gray-100);color:var(--gray-800);border-radius:10px;-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;}@media (prefers-color-scheme:dark){input[type=\"email\"],input[type=\"text\"],input[type=\"number\"]{background-color:var(--gray-800);border-color:var(--gray-700);color:white;}input[type=\"email\"]::-webkit-input-placeholder,input[type=\"text\"]::-webkit-input-placeholder,input[type=\"number\"]::-webkit-input-placeholder,select,textarea{color:var(--gray-500);}input[type=\"email\"]::-moz-placeholder,input[type=\"text\"]::-moz-placeholder,input[type=\"number\"]::-moz-placeholder,select,textarea{color:var(--gray-500);}input[type=\"email\"]:-ms-input-placeholder,input[type=\"text\"]:-ms-input-placeholder,input[type=\"number\"]:-ms-input-placeholder,select,textarea{color:var(--gray-500);}input[type=\"email\"]::placeholder,input[type=\"text\"]::placeholder,input[type=\"number\"]::placeholder,select,textarea{color:var(--gray-500);}}input[type=\"email\"],input[type=\"text\"],input[type=\"number\"],textarea,select{width:400px;}select{margin:0;-webkit-appearance:none;box-sizing:border-box;padding:0.65rem 0.5rem;font-size:1rem;border:2px solid var(--gray-200);border-radius:10px;color:var(--gray-700);height:auto;background-color:var(--gray-100);background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 125.304 125.304\"><path d=\"M62.652 103.895L0 21.41h125.304\" fill=\"%23343334\"/></svg>');background-repeat:no-repeat;background-size:1rem;background-position:center right 0.5rem;}@media (prefers-color-scheme:dark){select{background-color:var(--gray-800);background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 125.304 125.304\"><path d=\"M62.652 103.895L0 21.41h125.304\" fill=\"%23ffffff\"/></svg>');border-color:var(--gray-700);color:white;}}textarea{-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:1rem;border:2px solid var(--gray-200);color:var(--gray-700);border-radius:10px;resize:vertical;background-color:var(--gray-100);box-sizing:border-box;padding:0.65rem 0.5rem;font-family:-apple-system,BlinkMacSystemFont,\"avenir next\",avenir, \"helvetica neue\",helvetica,ubuntu,roboto,noto,\"segoe ui\",arial, sans-serif;}@media (prefers-color-scheme:dark){textarea{background-color:var(--gray-800);border-color:var(--gray-700);color:white;}}input:focus,select:focus,textarea:focus{outline:none;border:2px solid var(--focus-ring-color);}input:invalid,select:invalid,textarea:invalid{border:2px solid #ff7d87;box-shadow:none;}input[type=\"checkbox\"]{display:inline-block;height:1rem;font-size:1rem;border-radius:5px;-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:2px solid var(--gray-300);width:1rem;background-color:white;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin-right:0.5rem;}@media (prefers-color-scheme:dark){input[type=\"checkbox\"]{background-color:var(--gray-800);border-color:var(--gray-600);}}input[type=\"checkbox\"]:hover{cursor:pointer;}input[type=\"checkbox\"]:checked{background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"78.369\" height=\"78.369\" viewBox=\"0 0 78.369 78.369\"><path fill=\"white\" d=\"M78.05 19.015l-48.592 48.59c-.428.43-1.12.43-1.548 0L.32 40.016c-.427-.426-.427-1.12 0-1.547l6.704-6.704c.428-.427 1.12-.427 1.548 0l20.113 20.112 41.113-41.113c.43-.427 1.12-.427 1.548 0l6.703 6.704c.427.427.427 1.12 0 1.548z\"/></svg>');background-size:contain;background-color:var(--gray-700);border:2px solid var(--gray-700);}input[type=\"checkbox\"]:focus-visible,input[type=\"checkbox\"]:checked:focus-visible{border-color:var(--focus-ring-color);}@media (prefers-color-scheme:dark){input[type=\"checkbox\"]:checked{background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"78.369\" height=\"78.369\" viewBox=\"0 0 78.369 78.369\"><path fill=\"%23343434\" d=\"M78.05 19.015l-48.592 48.59c-.428.43-1.12.43-1.548 0L.32 40.016c-.427-.426-.427-1.12 0-1.547l6.704-6.704c.428-.427 1.12-.427 1.548 0l20.113 20.112 41.113-41.113c.43-.427 1.12-.427 1.548 0l6.703 6.704c.427.427.427 1.12 0 1.548z\"/></svg>');background-color:white;border:2px solid white;}}input[type=\"radio\"]{-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:50%;border:2px solid var(--gray-300);height:1rem;width:1rem;margin-right:0.5rem;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media (prefers-color-scheme:dark){input[type=\"radio\"]{border:2px solid white;}}@media (hover:hover){input[type=\"radio\"]:hover{cursor:pointer;}}input[type=\"radio\"]:checked{border:2px solid var(--gray-700);}input[type=\"radio\"]:focus-visible,input[type=\"radio\"]:checked:focus-visible{border-color:var(--focus-ring-color);}@media (prefers-color-scheme:dark){input[type=\"radio\"]:checked{border:2px solid white;}}input[type=\"radio\"]:checked::before{content:\"\";width:calc(100% - 4px);height:calc(100% - 4px);background-color:var(--gray-700);-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-radius:50%;}@media (prefers-color-scheme:dark){input[type=\"radio\"]:checked::before{background-color:white;}}input[type=\"submit\"],input[type=\"reset\"],input[type=\"button\"],button{padding:0.5rem 1.25rem;font-size:1rem;border-radius:10px;background-color:var(--gray-700);border:2px solid var(--gray-700);color:white;-webkit-text-decoration:none;text-decoration:none;font-weight:bold;margin-bottom:1rem;-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-block;line-height:initial;-webkit-transition:background-color 200ms ease-in-out,border 200ms ease-in-out, -webkit-transform 200ms ease-in-out;-webkit-transition:background-color 200ms ease-in-out,border 200ms ease-in-out, transform 200ms ease-in-out;transition:background-color 200ms ease-in-out,border 200ms ease-in-out, transform 200ms ease-in-out;-webkit-touch-callout:none;-webkit-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}@media (prefers-color-scheme:dark){input[type=\"submit\"],input[type=\"reset\"],input[type=\"button\"],button{background-color:white;border:2px solid white;color:var(--gray-800);}}@media (hover:hover){input[type=\"submit\"]:hover,input[type=\"reset\"]:hover,input[type=\"button\"]:hover,button:hover{cursor:pointer;background-color:var(--gray-800);}}@media (hover:hover) and (prefers-color-scheme:dark){input[type=\"submit\"]:hover,input[type=\"reset\"]:hover,input[type=\"button\"]:hover,button:hover{cursor:pointer;background-color:var(--gray-300);}}button:focus-visible,input[type=\"submit\"]:focus-visible,input[type=\"reset\"]:focus-visible,input[type=\"button\"]:focus-visible{border-color:var(--focus-ring-color);outline:none;}table{width:100%;border-spacing:0;margin-bottom:1.563rem;font-variant-numeric:tabular-nums;}th,td{padding:0.5rem 0.5rem 0.5rem 0;margin:0;}th{font-weight:bold;text-align:left;border-bottom:2px solid var(--gray-300);color:var(--gray-300);}@media (prefers-color-scheme:dark){th{border-color:var(--gray-700);color:var(--gray-700);}}td{border-bottom:2px solid var(--gray-300);}@media (prefers-color-scheme:dark){td{border-color:var(--gray-700);}}code{font-family:\"SFMono-Regular\",Consolas,\"Liberation Mono\",Menlo,Courier, monospace;font-size:0.8rem;white-space:nowrap;background:var(--gray-100);padding:0 0.328rem;display:inline-block;vertical-align:middle;border-radius:10px;}@media (prefers-color-scheme:dark){code{background-color:var(--gray-700);}}p>code{white-space:normal;}pre>code{line-height:1.563em;display:block;padding:1rem;white-space:pre;margin-bottom:1.563rem;overflow:scroll;}pre>code::after{content:\" \";}blockquote{border-left:0.25rem solid var(--gray-100);padding:0 1rem;margin-bottom:1.563rem;}@media (prefers-color-scheme:dark){blockquote{border-left:0.25rem solid var(--gray-700);}}ul{margin:0;padding:0 1px;list-style:disc outside;font-variant-numeric:tabular-nums;}ol{list-style:decimal outside;}ol,ul{padding-left:0;margin-top:0;margin-bottom:1.563rem;}li{list-style-position:inside;}kbd{display:inline-block;padding:0 0.328rem;font-family:\"SFMono-Regular\",Consolas,\"Liberation Mono\",Menlo,Courier, monospace;font-size:0.64rem;color:var(--gray-700);vertical-align:middle;background-color:var(--gray-100);border:solid 1px var(--gray-300);border-bottom:solid 2px var(--gray-500);border-radius:5px;}abbr{-webkit-text-decoration:none;text-decoration:none;border-bottom:2px dashed var(--gray-600);}@media (hover:hover){abbr:hover{cursor:help;}}.error{font-size:12px;color:var(--red-600);margin-top:0.25rem;}@media (prefers-color-scheme:dark){.error{color:var(--red-400);}}button:disabled{opacity:0.5;cursor:not-allowed !important;}button+button{margin-left:0.5rem;}button.secondary,button[type=\"reset\"]{background-color:var(--gray-300);border:2px solid var(--gray-300);color:var(--gray-900);}button.secondary,button[type=\"remove\"]{background-color:var(--gray-500);border:1px solid var(--gray-500);color:var(--gray-900);}button.secondary,button[type=\"add\"]{background-color:var(--gray-600);border:1px solid var(--gray-600);color:var(--gray-900);}button.secondary:hover,button[type=\"reset\"]:hover{background-color:var(--gray-400);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYmhhdmlcXERvY3VtZW50c1xcQ29kaW5nXFxJTUEtbmV4dFxcc3R5bGVzXFxnbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRXlCLEFBRzJCLEFBVVAsQUFVSSxBQW1DVCxBQVdJLEFBZUssQUFNQSxBQU1BLEFBTUEsQUFNQSxBQU1ELEFBTUgsQUFNUSxBQUlQLEFBSUYsQUFXMEIsQUFNVixBQU1VLEFBTUssQUFLMUIsQUFJYyxBQU9oQixBQVFNLEFBZVksQUFVWCxBQVNaLEFBSUgsQUFrQjBCLEFBUVgsQUFrQlcsQUFTdEIsQUFPWSxBQUtKLEFBZ0JjLEFBTXBCLEFBSXNZLEFBUWhYLEFBS3NYLEFBT25ZLEFBZ0JDLEFBTVIsQUFLZ0IsQUFLSSxBQUtaLEFBS2QsQUFVYyxBQVFGLEFBMEJFLEFBV1IsQUFVQSxBQVNvQixBQU8xQixBQVFvQixBQUtkLEFBUWMsQUFNUyxBQUtULEFBUXBCLEFBWXdCLEFBS2hCLEFBSUMsQUFVUixBQU04QixBQU9FLEFBT25DLEFBT2tCLEFBS1osQUFNWSxBQU1OLEFBZ0JBLEFBTVAsQUFLQyxBQU9RLEFBS1gsQUFLTyxBQUtjLEFBT0EsQUFPQSxBQU9BLFNBbGFULEFBcVVWLENBNWUrQyxDQWdVdEMsQUFpRk4sQ0F0WWtCLEFBd0pyQyxBQXFUQSxBQWtFRSxBQWlCOEIsQ0EvVVcsQ0FoSmYsQ0F2SGQsQUF5R0ssQUFnTW5CLEFBOENFLEFBMkVtQyxBQVVBLEFBdUh0QixBQXVDUSxDQXZkdkIsQ0FpRGUsQUFxU0csQ0F0V1EsQ0EzRkwsQUE2REosQUFNUyxBQU1BLEFBTUEsQUFNQSxBQTREMUIsQUE0VkEsQUFzR0EsQ0FsR2dCLENBdE9GLEFBNFJPLEFBa0NuQixDQTdsQlMsQUFpTlQsQ0F0RkYsQUE2RGlCLEFBcUtmLEFBcUJBLEFBZUEsQUFRZSxBQTBCVSxBQWlJRCxDQTVTSCxBQXFGQSxDQW5ETCxFQWdSbEIsQUFXQSxDQTVHeUIsQUF1R0EsQ0FuRkMsQUFXeEIsRUF2ZVUsQUErY0QsRUF2U1MsQUE4QmEsQUF3QlQsQUFpQnFLLEFBMEI1SixBQXNCaEIsQUFlZ0IsQUF5RGpDLEFBOEcwQyxBQXNDeEMsQUFnSGlDLEFBT0EsQUFPQSxBQU9uQyxDQS9pQm1CLEFBc1NPLEFBOElYLEVBaUZNLENBdFJyQixBQTRDQSxBQW9GZSxDQTVhTSxBQW9LYyxBQWlOZCxFQXVFckIsQUFrQkEsQUEwRmEsQ0EzakJ1QixBQXlScEMsQ0EwUGlCLEFBT2YsQUF1RUYsR0FoaUJzQixBQTZGUCxBQXlGRyxBQXFGQSxDQXNGUSxDQW1HUixBQThCa0IsQ0FwUWhCLEFBOElsQixBQVVBLEVBU0YsQUF5STJDLENBeGYzQyxBQXVGQSxBQWdTb0MsQUFvQmxDLEFBbUZGLEdBN1JBLENBcER5QixBQXdYekIsRUFsa0JxQixBQXFYYyxBQTJJVixDQXJYekIsQUF3Tm1DLElBakxuQixBQW1FQSxBQXFDZCxDQTVPQSxBQW9jdUIsQ0FwWHZCLEVBOEl3QixBQTJVRixBQU9BLEFBT0EsRUF0TnRCLEdBN1d1QixBQWtJVSxFQTZSWCxDQW5WNkIsQUFxRW5ELEFBbUVBLENBelFtQyxDQW9CaEIsRUEwTUosRUFzVGpCLENBdkNtQixBQXNEbkIsR0F4WkUsQUFZZ0QsQ0FpVGxELENBOERrQixFQXFHbEIsQUFPQSxBQU9BLEVBelZ1QixBQXlHWSxDQTNObkMsQUF5TW9CLEFBa05wQixFQTFXbUMsQ0F6S2pCLENBakNHLEFBZ2NyQixHQXlCcUIsRUEzWEgsRUFvWmxCLEVBL1V3QixFQStEUCxBQXFGRyxJQTNVZ0IsQUFzRGhCLENBME9GLEdBM1FHLEVBOEZyQixDQTJYNkIsSUF2UE0sQUFtVWYsRUFqTE4sQ0E3RHFCLEVBcEpkLEFBdUNBLEVBeEtLLEVBZ0d4QixDQTNDZ0IsQ0F4QkYsQUFNRSxBQU1BLEFBTUEsQ0FoRkcsRUFvWEUsSUFpTEMsS0ExakJrQixBQThlckIsQ0F0VEssQUF1Q0YsQ0EzSXhCLENBd0JBLENBbEJBLEFBTUEsQUFNQSxJQWhGcUIsQUFpQ1csRUFnTVIsR0EvT2IsQUFvVUcsSUErT1UsQ0FyTUosQ0F5SEcsR0F0ZVgsQ0F1TkUsRUF2Q1MsQUFvSlYsRUF0VE8sQ0F5UWUsSUF0UkQsQUE4T2IsR0F2QmMsQ0E2R2IsQUF5Q3RCLEVBL1RBLENBb2dCbUMsQ0EzakJuQyxBQStINkQsQUFnWHJDLENBdEdMLElBbFhDLENBa0tGLEtBK0RBLEtBc0ZFLEVBNERDLEdBMUdSLENBZ05RLENBeGRELElBaU9lLENBeEJ3SixJQWdFbEssQUEyUlUsRUFqVkYsR0FnS1AsSUFsWE4sQUF3ZHBCLGNBL01vQixJQXhRQSxBQXNHQSxDQTBISSxDQWtKRCxFQWhLUCxDQWxPaEIsQ0FtakIwQyxFQW5ZMUMsUUFtREUsRUFsTmtCLEFBc0dRLEtBMEhILEFBa0pQLEtBOURPLFFBblRMLFFBc0dZLEVBNEhsQixBQWdVTSxRQWppQkEsVUFraUJwQixHQTVSc0IsS0FyUUYsWUFnWEcsR0ExR3ZCLEdBclFxQixlQWdYQyxJQS9XRCxHQW1HckIsYUE4UStCLEVBakVYLENBL1NDLGlCQWdUTixFQS9TTSxPQWdNUyxRQWlGSixJQWhSTCxBQTZSTSxnQkE3RkosR0EvTEYsQ0FnUmMsRUFyRG5DLENBa0UyQixjQTdGZSxDQS9MckIsUUE2Um5CLE9BYmlDLEFBNkJuQyxJQTVTcUIsbUJBQ0EsQ0E4THJCLFNBaUZBLFNBOVFnQixjQUNBLGNBQzBCLHdDQUNYLDZCQUNNLG1DQUNyQyx3REFxVzZCLDJCQUNGLHlCQUNSLHFGQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXGJoYXZpXFxEb2N1bWVudHNcXENvZGluZ1xcSU1BLW5leHRcXHN0eWxlc1xcZ2xvYmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzcy5nbG9iYWxgXHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcImF2ZW5pciBuZXh0XCIsIGF2ZW5pcixcclxuICAgICAgXCJoZWx2ZXRpY2EgbmV1ZVwiLCBoZWx2ZXRpY2EsIHVidW50dSwgcm9ib3RvLCBub3RvLCBcInNlZ29lIHVpXCIsIGFyaWFsLFxyXG4gICAgICBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogXCJhdXRvXCI7XHJcbiAgfVxyXG4gIFxyXG4gIDpyb290IHtcclxuICAgIC0tZ3JheS05MDA6ICMxYTIwMmM7XHJcbiAgICAtLWdyYXktODAwOiAjMmQzNzQ4O1xyXG4gICAgLS1ncmF5LTcwMDogIzRhNTU2ODtcclxuICAgIC0tZ3JheS02MDA6ICM3MTgwOTY7XHJcbiAgICAtLWdyYXktNTAwOiAjYTBhZWMwO1xyXG4gICAgLS1ncmF5LTQwMDogI2NiZDVlMDtcclxuICAgIC0tZ3JheS0zMDA6ICNlMmU4ZjA7XHJcbiAgICAtLWdyYXktMjAwOiAjZWRmMmY3O1xyXG4gICAgLS1ncmF5LTEwMDogI2Y3ZmFmYztcclxuICAgIC0tcmVkLTEwMDogI2ZmZjVmNTtcclxuICAgIC0tcmVkLTIwMDogI2ZlZDdkNztcclxuICAgIC0tcmVkLTMwMDogI2ZlYjJiMjtcclxuICAgIC0tcmVkLTQwMDogI2ZjODE4MTtcclxuICAgIC0tcmVkLTUwMDogI2Y1NjU2NTtcclxuICAgIC0tcmVkLTYwMDogI2U1M2UzZTtcclxuICAgIC0tcmVkLTcwMDogI2M1MzAzMDtcclxuICAgIC0tcmVkLTgwMDogIzliMmMyYztcclxuICAgIC0tcmVkLTkwMDogIzc0MmEyYTtcclxuICAgIC0tYmx1ZS0xMDA6ICNlYmY4ZmY7XHJcbiAgICAtLWJsdWUtMjAwOiAjYmVlM2Y4O1xyXG4gICAgLS1ibHVlLTMwMDogIzkwY2RmNDtcclxuICAgIC0tYmx1ZS00MDA6ICM2M2IzZWQ7XHJcbiAgICAtLWJsdWUtNTAwOiAjNDI5OWUxO1xyXG4gICAgLS1ibHVlLTYwMDogIzMxODJjZTtcclxuICAgIC0tYmx1ZS03MDA6ICMyYjZjYjA7XHJcbiAgICAtLWJsdWUtODAwOiAjMmM1MjgyO1xyXG4gICAgLS1ibHVlLTkwMDogIzJhNDM2NTtcclxuICAgIC0td2hpdGU6IHdoaXRlO1xyXG4gICAgLS1yZWQ6ICNmNTY1NjU7XHJcbiAgICAtLXRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tZ3JheS00MDApO1xyXG4gICAgLS10ZXh0LWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XHJcbiAgICAtLWZvY3VzLXJpbmctY29sb3I6IHZhcigtLWJsdWUtNTAwKTtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiBjYWxjKCgxMDB2aCAvIDI1KSAqIDEuNTYzKSBjYWxjKCgxMDB2dyAvIDI1KSAqIDEuNTYzKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU2MztcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIGNhcmV0LWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgYm9keSB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS05MDApO1xyXG4gICAgICBjYXJldC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFR5cG9ncmFwaHlcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICBcclxuICBoMSxcclxuICBoMixcclxuICBoMyxcclxuICBoNCxcclxuICBoNSxcclxuICBoNiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMy4wNTJyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcbiAgXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAyLjQ0MXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgfVxyXG4gIFxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS45NTNyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDlyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIH1cclxuICBcclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDEuNTYzcmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA2cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICB9XHJcbiAgXHJcbiAgaDUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICB9XHJcbiAgXHJcbiAgaDYge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNTYzcmVtO1xyXG4gIH1cclxuICBcclxuICBwID4gKjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tdGV4dC1kZWNvcmF0aW9uLWNvbG9yKTtcclxuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS10ZXh0LWRlY29yYXRpb24tY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XHJcbiAgICBhOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICBhOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tZ3JheS03MDApO1xyXG4gICAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tZ3JheS03MDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBhOmZvY3VzLXZpc2libGUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLWZvY3VzLXJpbmctY29sb3IpO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAwLjg4OHJlbTtcclxuICB9XHJcbiAgXHJcbiAgaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheS03MDApO1xyXG4gICAgbWFyZ2luOiAzLjA1MnJlbSAwO1xyXG4gIH1cclxuICBcclxuICAvKiBGb3JtXHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgaW5wdXRbdHlwZT1cImRhdGVcIl0sXHJcbiAgaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XHJcbiAgICBwYWRkaW5nOiAwLjY1cmVtIDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMTAwKTtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWdyYXktNzAwKTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW5wdXRbdHlwZT1cImVtYWlsXCJdOjpwbGFjZWhvbGRlcixcclxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOjpwbGFjZWhvbGRlcixcclxuICAgIGlucHV0W3R5cGU9XCJudW1iZXJcIl06OnBsYWNlaG9sZGVyLFxyXG4gICAgc2VsZWN0LFxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICBjb2xvcjogdmFyKC0tZ3JheS01MDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcclxuICB0ZXh0YXJlYSxcclxuICBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuICBcclxuICBzZWxlY3Qge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAuNjVyZW0gMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwMCk7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTEwMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTI1LjMwNCAxMjUuMzA0XCI+PHBhdGggZD1cIk02Mi42NTIgMTAzLjg5NUwwIDIxLjQxaDEyNS4zMDRcIiBmaWxsPVwiJTIzMzQzMzM0XCIvPjwvc3ZnPicpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMXJlbTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodCAwLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgIHNlbGVjdCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktODAwKTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEyNS4zMDQgMTI1LjMwNFwiPjxwYXRoIGQ9XCJNNjIuNjUyIDEwMy44OTVMMCAyMS40MWgxMjUuMzA0XCIgZmlsbD1cIiUyM2ZmZmZmZlwiLz48L3N2Zz4nKTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmF5LTcwMCk7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMTAwKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwLjY1cmVtIDAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiYXZlbmlyIG5leHRcIiwgYXZlbmlyLFxyXG4gICAgICBcImhlbHZldGljYSBuZXVlXCIsIGhlbHZldGljYSwgdWJ1bnR1LCByb2JvdG8sIG5vdG8sIFwic2Vnb2UgdWlcIiwgYXJpYWwsXHJcbiAgICAgIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWdyYXktNzAwKTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1cyxcclxuICBzZWxlY3Q6Zm9jdXMsXHJcbiAgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvY3VzLXJpbmctY29sb3IpO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDppbnZhbGlkLFxyXG4gIHNlbGVjdDppbnZhbGlkLFxyXG4gIHRleHRhcmVhOmludmFsaWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmN2Q4NztcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheS0zMDApO1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JheS02MDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNzguMzY5XCIgaGVpZ2h0PVwiNzguMzY5XCIgdmlld0JveD1cIjAgMCA3OC4zNjkgNzguMzY5XCI+PHBhdGggZmlsbD1cIndoaXRlXCIgZD1cIk03OC4wNSAxOS4wMTVsLTQ4LjU5MiA0OC41OWMtLjQyOC40My0xLjEyLjQzLTEuNTQ4IDBMLjMyIDQwLjAxNmMtLjQyNy0uNDI2LS40MjctMS4xMiAwLTEuNTQ3bDYuNzA0LTYuNzA0Yy40MjgtLjQyNyAxLjEyLS40MjcgMS41NDggMGwyMC4xMTMgMjAuMTEyIDQxLjExMy00MS4xMTNjLjQzLS40MjcgMS4xMi0uNDI3IDEuNTQ4IDBsNi43MDMgNi43MDRjLjQyNy40MjcuNDI3IDEuMTIgMCAxLjU0OHpcIi8+PC9zdmc+Jyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTcwMCk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmF5LTcwMCk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cy12aXNpYmxlLFxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkOmZvY3VzLXZpc2libGUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1mb2N1cy1yaW5nLWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNzguMzY5XCIgaGVpZ2h0PVwiNzguMzY5XCIgdmlld0JveD1cIjAgMCA3OC4zNjkgNzguMzY5XCI+PHBhdGggZmlsbD1cIiUyMzM0MzQzNFwiIGQ9XCJNNzguMDUgMTkuMDE1bC00OC41OTIgNDguNTljLS40MjguNDMtMS4xMi40My0xLjU0OCAwTC4zMiA0MC4wMTZjLS40MjctLjQyNi0uNDI3LTEuMTIgMC0xLjU0N2w2LjcwNC02LjcwNGMuNDI4LS40MjcgMS4xMi0uNDI3IDEuNTQ4IDBsMjAuMTEzIDIwLjExMiA0MS4xMTMtNDEuMTEzYy40My0uNDI3IDEuMTItLjQyNyAxLjU0OCAwbDYuNzAzIDYuNzA0Yy40MjcuNDI3LjQyNyAxLjEyIDAgMS41NDh6XCIvPjwvc3ZnPicpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheS0zMDApO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XHJcbiAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl06aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyYXktNzAwKTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmZvY3VzLXZpc2libGUsXHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQ6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWZvY3VzLXJpbmctY29sb3IpO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNHB4KTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktNzAwKTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxyXG4gIGlucHV0W3R5cGU9XCJyZXNldFwiXSxcclxuICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTcwMCk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmF5LTcwMCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0LCBib3JkZXIgMjAwbXMgZWFzZS1pbi1vdXQsXHJcbiAgICAgIHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuICAgIGlucHV0W3R5cGU9XCJyZXNldFwiXSxcclxuICAgIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XHJcbiAgICBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyLFxyXG4gICAgaW5wdXRbdHlwZT1cInJlc2V0XCJdOmhvdmVyLFxyXG4gICAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlcixcclxuICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS04MDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcixcclxuICAgIGlucHV0W3R5cGU9XCJyZXNldFwiXTpob3ZlcixcclxuICAgIGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsXHJcbiAgICBidXR0b246aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMzAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uOmZvY3VzLXZpc2libGUsXHJcbiAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpmb2N1cy12aXNpYmxlLFxyXG4gIGlucHV0W3R5cGU9XCJyZXNldFwiXTpmb2N1cy12aXNpYmxlLFxyXG4gIGlucHV0W3R5cGU9XCJidXR0b25cIl06Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWZvY3VzLXJpbmctY29sb3IpO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogVGFibGVzXHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNTYzcmVtO1xyXG4gICAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcclxuICB9XHJcbiAgXHJcbiAgdGgsXHJcbiAgdGQge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwLjVyZW0gMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgdGgge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWdyYXktMzAwKTtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTMwMCk7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgIHRoIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmF5LTcwMCk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHRkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ncmF5LTMwMCk7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgIHRkIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmF5LTcwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENvZGVcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICBjb2RlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNGTW9uby1SZWd1bGFyXCIsIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBNZW5sbywgQ291cmllcixcclxuICAgICAgbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0xMDApO1xyXG4gICAgcGFkZGluZzogMCAwLjMyOHJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICBjb2RlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS03MDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBwID4gY29kZSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuICBcclxuICBwcmUgPiBjb2RlIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU2M2VtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNTYzcmVtO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB9XHJcbiAgXHJcbiAgLyogRm9yY2VzIGEgbmV3LWxpbmUgYXQgdGhlIGVuZCBvZiBhIGNvZGUgYmxvY2sgZm9yIGxheW91dCBwdXJwb3Nlcy4gKi9cclxuICBwcmUgPiBjb2RlOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICB9XHJcbiAgXHJcbiAgLyogQmxvY2txdW90ZVxyXG4gIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG4gIGJsb2NrcXVvdGUge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDAuMjVyZW0gc29saWQgdmFyKC0tZ3JheS0xMDApO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjNyZW07XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgIGJsb2NrcXVvdGUge1xyXG4gICAgICBib3JkZXItbGVmdDogMC4yNXJlbSBzb2xpZCB2YXIoLS1ncmF5LTcwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIExpc3RcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwIDFweDtcclxuICAgIGxpc3Qtc3R5bGU6IGRpc2Mgb3V0c2lkZTtcclxuICAgIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XHJcbiAgfVxyXG4gIFxyXG4gIG9sIHtcclxuICAgIGxpc3Qtc3R5bGU6IGRlY2ltYWwgb3V0c2lkZTtcclxuICB9XHJcbiAgXHJcbiAgb2wsXHJcbiAgdWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNTYzcmVtO1xyXG4gIH1cclxuICBcclxuICBsaSB7XHJcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEtleWJvYXJkXHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAga2JkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMC4zMjhyZW07XHJcbiAgICBmb250LWZhbWlseTogXCJTRk1vbm8tUmVndWxhclwiLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgTWVubG8sIENvdXJpZXIsXHJcbiAgICAgIG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMC42NHJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwMCk7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0xMDApO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tZ3JheS0zMDApO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLWdyYXktNTAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQWJicmV2aWF0aW9uXHJcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcbiAgYWJiciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHZhcigtLWdyYXktNjAwKTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAgIGFiYnI6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IGhlbHA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogdmFyKC0tcmVkLTYwMCk7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICAuZXJyb3Ige1xyXG4gICAgICBjb2xvcjogdmFyKC0tcmVkLTQwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbiArIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIH1cclxuICBcclxuICBidXR0b24uc2Vjb25kYXJ5LFxyXG4gIGJ1dHRvblt0eXBlPVwicmVzZXRcIl0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0zMDApO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheS0zMDApO1xyXG4gICAgY29sb3I6IHZhcigtLWdyYXktOTAwKTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5zZWNvbmRhcnksXHJcbiAgYnV0dG9uW3R5cGU9XCJyZW1vdmVcIl0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS01MDApO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheS01MDApO1xyXG4gICAgY29sb3I6IHZhcigtLWdyYXktOTAwKTtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uLnNlY29uZGFyeSxcclxuICBidXR0b25bdHlwZT1cImFkZFwiXSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTYwMCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTYwMCk7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JheS05MDApO1xyXG4gIH1cclxuICBcclxuICBidXR0b24uc2Vjb25kYXJ5OmhvdmVyLFxyXG4gIGJ1dHRvblt0eXBlPVwicmVzZXRcIl06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS00MDApO1xyXG4gIH1cclxuICBcclxuYCJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\bhavi\\\\Documents\\\\Coding\\\\IMA-next\\\\styles\\\\global.js */");

_defaultExport.__hash = "3695985268";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bhavi\Documents\Coding\IMA-next\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "@nivo/bar":
/*!****************************!*\
  !*** external "@nivo/bar" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nivo/bar");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map