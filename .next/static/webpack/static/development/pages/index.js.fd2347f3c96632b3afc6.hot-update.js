webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_IMALayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/IMALayout */ "./components/IMALayout.js");
/* harmony import */ var _components_IMARecentSalesChart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/IMARecentSalesChart */ "./components/IMARecentSalesChart.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_forms_IMANewSaleForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/forms/IMANewSaleForm */ "./components/forms/IMANewSaleForm.js");










var _jsxFileName = "C:\\Users\\bhavi\\Documents\\Coding\\IMA-next\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;






var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

moment().format('L');

var Dashboard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Dashboard, _Component);

  function Dashboard() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Dashboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Dashboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      productList: [],
      recentSalesByDateDict: [],
      isLoading: true
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Dashboard, [{
    key: "fetchInventory",
    value: function fetchInventory() {
      var inventory, inventoryjson;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function fetchInventory$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()('http://localhost:3000/api/inventory'));

            case 2:
              inventory = _context.sent;
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(inventory.json());

            case 5:
              inventoryjson = _context.sent;
              return _context.abrupt("return", inventoryjson);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "fetchRecentSales",
    value: function fetchRecentSales(daysAgo) {
      var sales, salesjson;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function fetchRecentSales$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()('http://localhost:3000/api/sales?daysAgo=' + daysAgo));

            case 2:
              sales = _context2.sent;
              _context2.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(sales.json());

            case 5:
              salesjson = _context2.sent;
              return _context2.abrupt("return", salesjson);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var salesDict, _asyncMostRecentSales, productList, _asyncInventory;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function componentDidMount$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              salesDict = [];
              _asyncMostRecentSales = this.fetchRecentSales(30).then(function (externalData) {
                salesDict = _this2.getMostRecentSalesDict(externalData);

                _this2.setState({
                  recentSalesByDateDict: _this2.getMostRecentSalesNIVO(salesDict)
                });
              });
              console.log("cdm mrs" + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(salesDict));
              productList = [];
              _asyncInventory = this.fetchInventory().then(function (externalData) {
                productList = externalData;
              });
              this.setState({
                productList: productList,
                recentSalesByDateDict: salesDict
              });

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getMostRecentSalesDict",
    value: function getMostRecentSalesDict(sales) {
      var _this3 = this;

      console.log("mrd" + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(sales));
      var recentSales = {};
      sales.forEach(function (sale, index) {
        var date = moment(sale["date"]).format("L");
        console.log("checking dateL : " + date);
        var quantities = sale["quantities"];

        if (recentSales[date]) {
          console.log('this date exists' + date);
          recentSales[date].forEach(function (product, index) {
            var sameProduct = _this3.findProductInQuantities(product["name"], quantities);

            if (sameProduct === null) {} else {
              product["qty"] += sameProduct["qty"];
            }
          }, recentSales[date]);
        } else {
          //this date does not yet exist in recentSales
          recentSales[date] = sale["quantities"];
        }
      });
      console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(recentSales));
      return recentSales;
    }
  }, {
    key: "getMostRecentSalesNIVO",
    value: function getMostRecentSalesNIVO(recentSalesDict) {
      console.log("nivo" + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(recentSalesDict));
      var recentSales = [];

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(recentSalesDict).forEach(function (date, index) {
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

            case 'Free Product':
              recentSales[index]['Free ProductColor'] = "hsl(150, 70%, 50%)";
              break;
          }
        }
      });

      this.setState({
        'isLoading': false
      });
      return recentSales;
    }
  }, {
    key: "findProductInQuantities",
    value: function findProductInQuantities(name, quantities) {
      var foundProduct = null;
      quantities.forEach(function (product, index) {
        console.log(name + "checking product name: " + product['name']);

        if (name == product['name']) {
          foundProduct = product;
        }
      });
      return foundProduct;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          recentSalesByDateDict = _this$state.recentSalesByDateDict;
      console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(recentSalesByDateDict));
      return __jsx(_components_IMALayout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "form to add new sale form to add new customer form to add new inventory item1", isLoading ? __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Loading...") : __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "recent sales since 30 days ago: ", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(recentSalesByDateDict)), __jsx("div", {
        style: {
          height: 500 + "px",
          width: 500 + 'px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx(_components_IMARecentSalesChart__WEBPACK_IMPORTED_MODULE_12__["default"], {
        data: recentSalesByDateDict,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      })))), __jsx(_components_forms_IMANewSaleForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
        productList: this.state.productList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=index.js.fd2347f3c96632b3afc6.hot-update.js.map