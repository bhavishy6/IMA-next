webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/forms/IMANewSaleForm.js":
/*!********************************************!*\
  !*** ./components/forms/IMANewSaleForm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");




var _jsxFileName = "C:\\Users\\bhavi\\Documents\\Coding\\IMA-next\\components\\forms\\IMANewSaleForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-top: 1rem;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 12px;\n    color: var(--red-600);\n    width: 400px;\n    margin-top: 0.25rem;\n    &:before {\n      content: \"\u274C \";\n      font-size: 10px;\n    }\n    @media (prefers-color-scheme: dark) {\n      color: var(--red-300);\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: var(--blue);\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

moment().format('L');

var MyTextInput = function MyTextInput(_ref) {
  var label = _ref.label,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["label"]);

  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  var _useField = Object(formik__WEBPACK_IMPORTED_MODULE_5__["useField"])(props),
      _useField2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("label", {
    htmlFor: props.id || props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, label), __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: "text-input"
  }, field, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), meta.touched && meta.error ? __jsx("div", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, meta.error) : null);
};

var MyDateInput = function MyDateInput(_ref2) {
  var label = _ref2.label,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref2, ["label"]);

  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  var _useField3 = Object(formik__WEBPACK_IMPORTED_MODULE_5__["useField"])(props),
      _useField4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useField3, 2),
      field = _useField4[0],
      meta = _useField4[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("label", {
    htmlFor: props.id || props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, label), __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: "text-input"
  }, field, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), meta.touched && meta.error ? __jsx("div", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, meta.error) : null);
};

function submitNewSale() {} // Styled components ....


var StyledSelect = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].select(_templateObject());
var StyledErrorMessage = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject2());
var StyledLabel = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].label(_templateObject3());

var IMANewSaleForm = function IMANewSaleForm(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Add New Sale"), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: {
      customerName: "",
      date: "",
      customerEmail: "",
      quantities: [{}] // added for our select

    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_6__["object"]({
      customerName: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().max(15, "Must be 15 characters or less").required("Required"),
      date: yup__WEBPACK_IMPORTED_MODULE_6__["date"]().required("Required"),
      customerEmail: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().email("Invalid email address"),
      quantities: yup__WEBPACK_IMPORTED_MODULE_6__["array"]().of(yup__WEBPACK_IMPORTED_MODULE_6__["object"]().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().required('Required'),
        qty: yup__WEBPACK_IMPORTED_MODULE_6__["number"]().min(0, 'Must be atleast 1').required('Required')
      })).required('Must have products sold').min(1, 'Minimum of 1 product')
    }),
    onSubmit: function onSubmit(values, _ref3) {
      var setSubmitting = _ref3.setSubmitting;
      return submitNewSale();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, function (_ref4) {
    var values = _ref4.values,
        errors = _ref4.errors,
        touched = _ref4.touched,
        handleReset = _ref4.handleReset;
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx(MyTextInput, {
      label: "Customer Name",
      name: "customerName",
      type: "text",
      placeholder: "John Doe",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }), __jsx(MyDateInput, {
      label: "Date of Sale",
      name: "date",
      type: "date",
      placeholder: moment(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }), __jsx(MyTextInput, {
      label: "Customer Email Address",
      name: "customerEmail",
      type: "email",
      placeholder: "jane@doe.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "Add Products Bought"), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["FieldArray"], {
      name: "quantities",
      render: function render(arrayHelpers) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, values.quantities.length > 0 && values.quantities.map(function (product, index) {
          return __jsx("div", {
            className: "row",
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          }, __jsx("div", {
            className: "col",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            },
            __self: this
          }, __jsx("label", {
            htmlFor: "quantities.".concat(index, ".name"),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            },
            __self: this
          }, "Name"), __jsx(MyTextInput, {
            name: "quantities.".concat(index, ".name"),
            placeholder: "Iron Sheet",
            type: "text",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            },
            __self: this
          })), __jsx("div", {
            className: "col",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: this
          }, __jsx("label", {
            htmlFor: "quantities.".concat(index, ".qty"),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          }, " Quantity"), __jsx(MyTextInput, {
            name: "quantities.".concat(index, ".qty"),
            placeholder: "99999",
            type: "number",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 139
            },
            __self: this
          })), __jsx("div", {
            className: "col",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }, __jsx("button", {
            className: "secondary",
            type: "remove",
            onClick: function onClick() {
              return arrayHelpers.remove(index);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          }, "X")));
        }), __jsx("button", {
          type: "add",
          className: "secondary",
          onClick: function onClick() {
            return arrayHelpers.push({
              name: "",
              qty: ""
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, "Add Product"));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }), __jsx("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, "Submit"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IMANewSaleForm);

/***/ })

})
//# sourceMappingURL=index.js.cd00456b4951388bd052.hot-update.js.map