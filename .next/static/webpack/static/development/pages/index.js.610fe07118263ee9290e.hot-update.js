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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_IMALayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/IMALayout */ "./components/IMALayout.js");
/* harmony import */ var _components_IMARecentSalesChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/IMARecentSalesChart */ "./components/IMARecentSalesChart.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_forms_IMANewSaleForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/forms/IMANewSaleForm */ "./components/forms/IMANewSaleForm.js");



var _jsxFileName = "C:\\Users\\bhavi\\Documents\\Coding\\IMA-next\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

moment().format('L');

var Dashboard = function Dashboard(props) {
  return __jsx(_components_IMALayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "form to add new sale form to add new customer form to add new inventory item1", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "recent sales since 30 days ago: ", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(props.recentSalesByDateDict)), __jsx("div", {
    style: {
      height: 500 + "px",
      width: 500 + 'px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_components_IMARecentSalesChart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: getMostRecentSalesNIVO(props.recentSalesByDateDict),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))), __jsx(_components_forms_IMANewSaleForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    productList: ['Iron Sheet', 'Copper Sheet'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
};

Dashboard.getInitialProps = function _callee(ctx) {
  var res, json, mostRecentSales;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('http://localhost:3000/api/sales?daysAgo=' + 30));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(res.json());

        case 5:
          json = _context.sent;
          console.log("Show data fetched. ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(json)));
          mostRecentSales = getMostRecentSalesDict(json);
          console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(mostRecentSales[0]));
          return _context.abrupt("return", {
            recentSalesByDateDict: mostRecentSales
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

function getMostRecentSalesDict(sales) {
  var recentSales = {};
  sales.forEach(function (sale, index) {
    console.log(index + ":" + sale["date"]);
    var date = moment(sale["date"]).format("L");
    var quantities = sale["quantities"]; // console.log(JSON.stringify(quantities))

    if (recentSales[date]) {
      console.log('this date exists' + date);
      recentSales[date].forEach(function (product, index) {
        // console.log("existing product name for this day: " + product['name'])
        var sameProduct = findProductInQuantities(product["name"], quantities);
        console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(sameProduct));

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
  console.log("map:  " + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(recentSales) + "232323");
  return recentSales;
}

;

function getMostRecentSalesNIVO(recentSalesDict) {
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
      }
    }
  });

  console.log("recentNIVO: " + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(recentSales));
  return recentSales;
}

function findProductInQuantities(name, quantities) {
  var foundProduct = null;
  quantities.forEach(function (product, index) {
    console.log(name + "checking product name: " + product['name']);

    if (name == product['name']) {
      console.log('true' + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(product));
      foundProduct = product;
    }
  });
  return foundProduct;
}

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=index.js.610fe07118263ee9290e.hot-update.js.map