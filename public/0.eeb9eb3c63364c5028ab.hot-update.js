webpackHotUpdate(0,{

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(140); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(140);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _missionsList = __webpack_require__(310);
	
	var _missionsList2 = _interopRequireDefault(_missionsList);
	
	var _createMission = __webpack_require__(317);
	
	var _createMission2 = _interopRequireDefault(_createMission);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// const missions = [
	// {
	//     task: 'Example Mission',
	//     date: 'date',
	//     isCompleted: false
	// },
	// {
	//     task: 'Example Mission',
	//     date: 'date',
	//     isCompleted: false
	// }
	// ];
	
	var MissionMain = function (_Component) {
	    _inherits(MissionMain, _Component);
	
	    function MissionMain(props) {
	        _classCallCheck(this, MissionMain);
	
	        var _this = _possibleConstructorReturn(this, (MissionMain.__proto__ || Object.getPrototypeOf(MissionMain)).call(this, props));
	
	        _this.state = {
	            missions: []
	        };
	        return _this;
	    }
	    // MISSION (tasks CRUD):
	
	
	    _createClass(MissionMain, [{
	        key: 'createMiss',
	        value: function createMiss(description) {
	            var _this2 = this;
	
	            console.log("description is " + description);
	            var missions = this.state.missions;
	
	            var newMiss = {
	                description: description
	            };
	            console.log(newMiss);
	            fetch('/mission/create', {
	                method: 'post',
	                body: JSON.stringify(newMiss),
	                headers: {
	                    'content-type': 'application/json'
	                }
	            }).then(function (response) {
	                return response.json();
	            }).then(function (results) {
	                console.log("results are " + results);
	                _this2.setState({
	                    missions: missions.concat(results)
	                });
	            });
	        }
	        //     createMission(text) {
	        //     const { missions } = this.state;
	        //     const newMission = {
	        //         description: text.description
	        //     }
	        //     this.state.missions.push({
	        //         task,
	        //         date,
	        //         isCompleted: false
	        //     });
	        //     this.setState({ isCompleted: false });
	        //     console.log(missions);
	        // },
	
	    }, {
	        key: 'toggleTask',
	        value: function toggleTask(task) {
	            var foundtask = _.find(this.state.missions, function (mission) {
	                return mission.task === task;
	            });
	            foundtask.isCompleted = !foundtask.isCompleted;
	            this.setState({ missions: this.state.missions });
	        }
	    }, {
	        key: 'saveTask',
	        value: function saveTask(oldTask, newTask, oldDate, newDate) {
	            var foundtask = _.find(this.state.missions, function (mission) {
	                return mission.task === oldTask;
	            });
	            foundtask.task = newTask;
	            foundtask.date = newDate;
	            this.setState({ missions: this.state.missions });
	        }
	    }, {
	        key: 'deleteTask',
	        value: function deleteTask(taskDelete) {
	            var removeTask = _.remove(this.state.missions, function (mission) {
	                return mission.task === taskDelete;
	            });
	            this.setState({ missions: this.state.missions });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Missions Home'
	                ),
	                _react2.default.createElement(_createMission2.default, {
	                    missions: this.props.missions,
	                    createMiss: this.createMiss.bind(this)
	                }),
	                (0, _react.cloneElement)(this.props.children, {
	
	                    missions: this.state.missions,
	                    toggleTask: this.toggleTask.bind(this),
	                    saveTask: this.saveTask.bind(this),
	                    deleteTask: this.deleteTask.bind(this)
	
	                })
	            );
	        }
	    }]);
	
	    return MissionMain;
	}(_react.Component);
	
	exports.default = MissionMain;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(313); if (makeExportsHot(module, __webpack_require__(140))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "missionmain.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9taXNzaW9ubWFpbi5qc3g/ZWQyNyJdLCJuYW1lcyI6WyJNaXNzaW9uTWFpbiIsInByb3BzIiwic3RhdGUiLCJtaXNzaW9ucyIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsIm5ld01pc3MiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHRzIiwic2V0U3RhdGUiLCJjb25jYXQiLCJ0YXNrIiwiZm91bmR0YXNrIiwiXyIsImZpbmQiLCJtaXNzaW9uIiwiaXNDb21wbGV0ZWQiLCJvbGRUYXNrIiwibmV3VGFzayIsIm9sZERhdGUiLCJuZXdEYXRlIiwiZGF0ZSIsInRhc2tEZWxldGUiLCJyZW1vdmVUYXNrIiwicmVtb3ZlIiwiY3JlYXRlTWlzcyIsImJpbmQiLCJjaGlsZHJlbiIsInRvZ2dsZVRhc2siLCJzYXZlVGFzayIsImRlbGV0ZVRhc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQUVNQSxXOzs7QUFDRiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLCtIQUNUQSxLQURTOztBQUVmLGVBQUtDLEtBQUwsR0FBYTtBQUNUQyx1QkFBVTtBQURELFVBQWI7QUFGZTtBQUtsQjtBQUNBOzs7OztvQ0FDVUMsVyxFQUFhO0FBQUE7O0FBQ3BCQyxxQkFBUUMsR0FBUixDQUFZLG9CQUFvQkYsV0FBaEM7QUFEb0IsaUJBRVpELFFBRlksR0FFQyxLQUFLRCxLQUZOLENBRVpDLFFBRlk7O0FBR3BCLGlCQUFNSSxVQUFVO0FBQ1pIO0FBRFksY0FBaEI7QUFHQUMscUJBQVFDLEdBQVIsQ0FBWUMsT0FBWjtBQUNBQyxtQkFBTSxpQkFBTixFQUF5QjtBQUNyQkMseUJBQVEsTUFEYTtBQUVyQkMsdUJBQU1DLEtBQUtDLFNBQUwsQ0FBZUwsT0FBZixDQUZlO0FBR3JCTSwwQkFBUztBQUNMLHFDQUFnQjtBQURYO0FBSFksY0FBekIsRUFNR0MsSUFOSCxDQU1RLFVBQUNDLFFBQUQ7QUFBQSx3QkFBY0EsU0FBU0MsSUFBVCxFQUFkO0FBQUEsY0FOUixFQU9LRixJQVBMLENBT1UsVUFBQ0csT0FBRCxFQUFhO0FBQ25CWix5QkFBUUMsR0FBUixDQUFZLGlCQUFpQlcsT0FBN0I7QUFDQSx3QkFBS0MsUUFBTCxDQUFjO0FBQ1ZmLCtCQUFVQSxTQUFTZ0IsTUFBVCxDQUFnQkYsT0FBaEI7QUFEQSxrQkFBZDtBQUdILGNBWkQ7QUFhSDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O29DQUNXRyxJLEVBQU07QUFDYixpQkFBTUMsWUFBV0MsRUFBRUMsSUFBRixDQUFPLEtBQUtyQixLQUFMLENBQVdDLFFBQWxCLEVBQTRCO0FBQUEsd0JBQVdxQixRQUFRSixJQUFSLEtBQWlCQSxJQUE1QjtBQUFBLGNBQTVCLENBQWpCO0FBQ0FDLHVCQUFVSSxXQUFWLEdBQXdCLENBQUNKLFVBQVVJLFdBQW5DO0FBQ0Esa0JBQUtQLFFBQUwsQ0FBYyxFQUFFZixVQUFVLEtBQUtELEtBQUwsQ0FBV0MsUUFBdkIsRUFBZDtBQUNIOzs7a0NBQ1F1QixPLEVBQVNDLE8sRUFBU0MsTyxFQUFTQyxPLEVBQVM7QUFDekMsaUJBQU1SLFlBQVVDLEVBQUVDLElBQUYsQ0FBTyxLQUFLckIsS0FBTCxDQUFXQyxRQUFsQixFQUE0QjtBQUFBLHdCQUFVcUIsUUFBUUosSUFBUixLQUFnQk0sT0FBMUI7QUFBQSxjQUE1QixDQUFoQjtBQUNBTCx1QkFBVUQsSUFBVixHQUFlTyxPQUFmO0FBQ0FOLHVCQUFVUyxJQUFWLEdBQWVELE9BQWY7QUFDQSxrQkFBS1gsUUFBTCxDQUFjLEVBQUNmLFVBQVUsS0FBS0QsS0FBTCxDQUFXQyxRQUF0QixFQUFkO0FBQ0g7OztvQ0FDVTRCLFUsRUFBWTtBQUNuQixpQkFBTUMsYUFBV1YsRUFBRVcsTUFBRixDQUFTLEtBQUsvQixLQUFMLENBQVdDLFFBQXBCLEVBQThCO0FBQUEsd0JBQVVxQixRQUFRSixJQUFSLEtBQWdCVyxVQUExQjtBQUFBLGNBQTlCLENBQWpCO0FBQ0Esa0JBQUtiLFFBQUwsQ0FBYyxFQUFDZixVQUFVLEtBQUtELEtBQUwsQ0FBV0MsUUFBdEIsRUFBZDtBQUNIOzs7a0NBQ1E7QUFDTCxvQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBRUk7QUFDSSwrQkFBVSxLQUFLRixLQUFMLENBQVdFLFFBRHpCO0FBRUksaUNBQVksS0FBSytCLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCO0FBRmhCLG1CQUZKO0FBT1EsMENBQWEsS0FBS2xDLEtBQUwsQ0FBV21DLFFBQXhCLEVBQWtDOztBQUU5QmpDLCtCQUFVLEtBQUtELEtBQUwsQ0FBV0MsUUFGUztBQUc5QmtDLGlDQUFZLEtBQUtBLFVBQUwsQ0FBZ0JGLElBQWhCLENBQXFCLElBQXJCLENBSGtCO0FBSTlCRywrQkFBVSxLQUFLQSxRQUFMLENBQWNILElBQWQsQ0FBbUIsSUFBbkIsQ0FKb0I7QUFLOUJJLGlDQUFZLEtBQUtBLFVBQUwsQ0FBZ0JKLElBQWhCLENBQXFCLElBQXJCOztBQUxrQixrQkFBbEM7QUFQUixjQURKO0FBbUJIOzs7Ozs7bUJBR1VuQyxXIiwiZmlsZSI6IjAuZWViOWViM2M2MzM2NGM1MDI4YWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1pc3Npb25zTGlzdCBmcm9tICcuL21pc3Npb25zLWxpc3QnO1xyXG5pbXBvcnQgQ3JlYXRlbWlzc2lvbiBmcm9tICcuL2NyZWF0ZS1taXNzaW9uJztcclxuXHJcbi8vIGNvbnN0IG1pc3Npb25zID0gW1xyXG4vLyB7XHJcbi8vICAgICB0YXNrOiAnRXhhbXBsZSBNaXNzaW9uJyxcclxuLy8gICAgIGRhdGU6ICdkYXRlJyxcclxuLy8gICAgIGlzQ29tcGxldGVkOiBmYWxzZVxyXG4vLyB9LFxyXG4vLyB7XHJcbi8vICAgICB0YXNrOiAnRXhhbXBsZSBNaXNzaW9uJyxcclxuLy8gICAgIGRhdGU6ICdkYXRlJyxcclxuLy8gICAgIGlzQ29tcGxldGVkOiBmYWxzZVxyXG4vLyB9XHJcbi8vIF07XHJcblxyXG5jbGFzcyBNaXNzaW9uTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBtaXNzaW9uczogW11cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgIC8vIE1JU1NJT04gKHRhc2tzIENSVUQpOlxyXG4gICAgY3JlYXRlTWlzcyhkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVzY3JpcHRpb24gaXMgXCIgKyBkZXNjcmlwdGlvbik7XHJcbiAgICAgICAgY29uc3QgeyBtaXNzaW9ucyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBuZXdNaXNzID0ge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdNaXNzKTtcclxuICAgICAgICBmZXRjaCgnL21pc3Npb24vY3JlYXRlJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3TWlzcyksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0cyBhcmUgXCIgKyByZXN1bHRzKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBtaXNzaW9uczogbWlzc2lvbnMuY29uY2F0KHJlc3VsdHMpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gICAgIGNyZWF0ZU1pc3Npb24odGV4dCkge1xyXG4gICAgLy8gICAgIGNvbnN0IHsgbWlzc2lvbnMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAvLyAgICAgY29uc3QgbmV3TWlzc2lvbiA9IHtcclxuICAgIC8vICAgICAgICAgZGVzY3JpcHRpb246IHRleHQuZGVzY3JpcHRpb25cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5zdGF0ZS5taXNzaW9ucy5wdXNoKHtcclxuICAgIC8vICAgICAgICAgdGFzayxcclxuICAgIC8vICAgICAgICAgZGF0ZSxcclxuICAgIC8vICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzQ29tcGxldGVkOiBmYWxzZSB9KTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhtaXNzaW9ucyk7XHJcbiAgICAvLyB9LFxyXG4gICAgdG9nZ2xlVGFzayh0YXNrKSB7XHJcbiAgICAgICAgY29uc3QgZm91bmR0YXNrPSBfLmZpbmQodGhpcy5zdGF0ZS5taXNzaW9ucywgbWlzc2lvbiA9PiBtaXNzaW9uLnRhc2sgPT09IHRhc2spO1xyXG4gICAgICAgIGZvdW5kdGFzay5pc0NvbXBsZXRlZCA9ICFmb3VuZHRhc2suaXNDb21wbGV0ZWQ7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1pc3Npb25zOiB0aGlzLnN0YXRlLm1pc3Npb25zfSk7XHJcbiAgICB9XHJcbiAgICBzYXZlVGFzayhvbGRUYXNrLCBuZXdUYXNrLCBvbGREYXRlLCBuZXdEYXRlKSB7XHJcbiAgICAgICAgY29uc3QgZm91bmR0YXNrPV8uZmluZCh0aGlzLnN0YXRlLm1pc3Npb25zLCBtaXNzaW9uPT4gbWlzc2lvbi50YXNrID09PW9sZFRhc2spO1xyXG4gICAgICAgIGZvdW5kdGFzay50YXNrPW5ld1Rhc2s7XHJcbiAgICAgICAgZm91bmR0YXNrLmRhdGU9bmV3RGF0ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttaXNzaW9uczogdGhpcy5zdGF0ZS5taXNzaW9uc30pO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlVGFzayh0YXNrRGVsZXRlKSB7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlVGFzaz1fLnJlbW92ZSh0aGlzLnN0YXRlLm1pc3Npb25zLCBtaXNzaW9uPT4gbWlzc2lvbi50YXNrID09PXRhc2tEZWxldGUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21pc3Npb25zOiB0aGlzLnN0YXRlLm1pc3Npb25zfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5NaXNzaW9ucyBIb21lPC9oMT5cclxuICAgICAgICAgICAgICAgIDxDcmVhdGVtaXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgbWlzc2lvbnM9e3RoaXMucHJvcHMubWlzc2lvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTWlzcz17dGhpcy5jcmVhdGVNaXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbiwge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWlzc2lvbnM6IHRoaXMuc3RhdGUubWlzc2lvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRhc2s6IHRoaXMudG9nZ2xlVGFzay5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlVGFzazogdGhpcy5zYXZlVGFzay5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVUYXNrOiB0aGlzLmRlbGV0ZVRhc2suYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWlzc2lvbk1haW47XHJcbiAgICBcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9taXNzaW9ubWFpbi5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9