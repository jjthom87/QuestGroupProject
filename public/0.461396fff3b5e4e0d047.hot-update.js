webpackHotUpdate(0,{

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(140); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(140);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(245);
	
	var _missionmain = __webpack_require__(309);
	
	var _missionmain2 = _interopRequireDefault(_missionmain);
	
	var _questmain = __webpack_require__(318);
	
	var _questmain2 = _interopRequireDefault(_questmain);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import Footer from "../components/layout/Footer";
	// import Nav from "../components/layout/Nav";
	
	
	var Layout = function (_React$Component) {
	  _inherits(Layout, _React$Component);
	
	  function Layout() {
	    _classCallCheck(this, Layout);
	
	    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
	  }
	
	  _createClass(Layout, [{
	    key: "render",
	    value: function render() {
	      var containerStyle = {
	        marginTop: "60px"
	      };
	      console.log("layout.js component");
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "header",
	          null,
	          _react2.default.createElement(
	            "nav",
	            { className: "navbar-default navbar-fixed-top clearfix", id: "mainNav" },
	            _react2.default.createElement(
	              "div",
	              { className: "navbar-header" },
	              _react2.default.createElement(
	                "a",
	                { href: "", className: "navbar-brand" },
	                _react2.default.createElement("img", { src: "#", alt: "#", className: "img-responsive" })
	              ),
	              _react2.default.createElement(
	                "h1",
	                { id: "siteName", className: "navbar" },
	                "Bubo"
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "navbar-right", id: "signButtons" },
	              _react2.default.createElement(
	                "button",
	                { type: "", className: "btn btn-primary" },
	                "Sign Up"
	              ),
	              _react2.default.createElement(
	                "button",
	                { type: "", className: "btn btn-primary" },
	                "Login"
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "container clearfix", style: containerStyle, id: "layoutContain" },
	          _react2.default.createElement(
	            "div",
	            { className: "row" },
	            _react2.default.createElement(
	              "div",
	              { className: "col-lg-12" },
	              _react2.default.createElement("hr", null),
	              this.props.children,
	              _react2.default.createElement("hr", null),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: "missionshome" },
	                " Missions Home |"
	              ),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: "questshome" },
	                " Quests Home "
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Layout;
	}(_react2.default.Component);
	
	exports.default = Layout;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(313); if (makeExportsHot(module, __webpack_require__(140))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "layout.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGF5b3V0LmpzP2E1NWMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY29udGFpbmVyU3R5bGUiLCJtYXJnaW5Ub3AiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOzs7S0FNcUJBLE07Ozs7Ozs7Ozs7OzhCQUVWO0FBQ1AsV0FBTUMsaUJBQWlCO0FBQ3JCQyxvQkFBVztBQURVLFFBQXZCO0FBR0FDLGVBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBLGNBQ0U7QUFBQTtBQUFBO0FBRUU7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGVBQUssV0FBVSwwQ0FBZixFQUEwRCxJQUFHLFNBQTdEO0FBQ0U7QUFBQTtBQUFBLGlCQUFLLFdBQVUsZUFBZjtBQUNVO0FBQUE7QUFBQSxtQkFBRyxNQUFLLEVBQVIsRUFBVyxXQUFVLGNBQXJCO0FBQW9DLHdEQUFLLEtBQUksR0FBVCxFQUFhLEtBQUksR0FBakIsRUFBcUIsV0FBVSxnQkFBL0I7QUFBcEMsZ0JBRFY7QUFFVTtBQUFBO0FBQUEsbUJBQUksSUFBRyxVQUFQLEVBQWtCLFdBQVUsUUFBNUI7QUFBQTtBQUFBO0FBRlYsY0FERjtBQUtJO0FBQUE7QUFBQSxpQkFBSyxXQUFVLGNBQWYsRUFBNkIsSUFBRyxhQUFoQztBQUNJO0FBQUE7QUFBQSxtQkFBUSxNQUFLLEVBQWIsRUFBZ0IsV0FBVSxpQkFBMUI7QUFBQTtBQUFBLGdCQURKO0FBRUk7QUFBQTtBQUFBLG1CQUFRLE1BQUssRUFBYixFQUFnQixXQUFVLGlCQUExQjtBQUFBO0FBQUE7QUFGSjtBQUxKO0FBREosVUFGRjtBQWVFO0FBQUE7QUFBQSxhQUFLLFdBQVUsb0JBQWYsRUFBb0MsT0FBT0gsY0FBM0MsRUFBMkQsSUFBRyxlQUE5RDtBQUNFO0FBQUE7QUFBQSxlQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxpQkFBSyxXQUFVLFdBQWY7QUFFRSx3REFGRjtBQUdHLG9CQUFLSSxLQUFMLENBQVdDLFFBSGQ7QUFLRSx3REFMRjtBQU1FO0FBQUE7QUFBQSxtQkFBTSxJQUFHLGNBQVQ7QUFBQTtBQUFBLGdCQU5GO0FBT0U7QUFBQTtBQUFBLG1CQUFNLElBQUcsWUFBVDtBQUFBO0FBQUE7QUFQRjtBQURGO0FBREY7QUFmRixRQURGO0FBa0NEOzs7O0dBekNpQyxnQkFBTUMsUzs7bUJBQXJCUCxNIiwiZmlsZSI6IjAuNDYxMzk2ZmZmM2I1ZTRlMGQwNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IE1pc3Npb25NYWluIGZyb20gJy4uL2NvbXBvbmVudHMvbWlzc2lvbm1haW4nO1xyXG5pbXBvcnQgUXVlc3RNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvcXVlc3RtYWluJztcclxuXHJcbi8vIGltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3RlclwiO1xyXG4vLyBpbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9OYXZcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xyXG4gICAgICBtYXJnaW5Ub3A6IFwiNjBweFwiXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coXCJsYXlvdXQuanMgY29tcG9uZW50XCIpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXItZGVmYXVsdCBuYXZiYXItZml4ZWQtdG9wIGNsZWFyZml4XCIgaWQ9XCJtYWluTmF2XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj48aW1nIHNyYz1cIiNcIiBhbHQ9XCIjXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgaWQ9XCJzaXRlTmFtZVwiIGNsYXNzTmFtZT1cIm5hdmJhclwiPkJ1Ym88L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1yaWdodCdpZD1cInNpZ25CdXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2lnbiBVcDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cIlwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2xlYXJmaXhcIiBzdHlsZT17Y29udGFpbmVyU3R5bGV9IGlkPVwibGF5b3V0Q29udGFpblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG5cclxuICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwibWlzc2lvbnNob21lXCI+IE1pc3Npb25zIEhvbWUgfDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cInF1ZXN0c2hvbWVcIj4gUXVlc3RzIEhvbWUgPC9MaW5rPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3BhZ2VzL2xheW91dC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=