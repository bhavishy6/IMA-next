webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/IMARecentSalesChart.js":
/*!*******************************************!*\
  !*** ./components/IMARecentSalesChart.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nivo/bar */ "./node_modules/@nivo/bar/dist/nivo-bar.esm.js");
var _jsxFileName = "C:\\Users\\bhavi\\Documents\\Coding\\IMA-next\\components\\IMARecentSalesChart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

var IMARecentSalesChart = function IMARecentSalesChart(_ref) {
  var data = _ref.data;
  return __jsx(_nivo_bar__WEBPACK_IMPORTED_MODULE_1__["ResponsiveBar"], {
    data: data,
    keys: ['Iron Sheet', 'Copper Sheet', 'Free Product'],
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
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (IMARecentSalesChart);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
false

})
//# sourceMappingURL=index.js.b1d9d6a43c147a6e7541.hot-update.js.map