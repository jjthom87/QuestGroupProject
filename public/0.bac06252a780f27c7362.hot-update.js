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
	                console.log(results);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9taXNzaW9ubWFpbi5qc3g/ZWQyNyJdLCJuYW1lcyI6WyJNaXNzaW9uTWFpbiIsInByb3BzIiwic3RhdGUiLCJtaXNzaW9ucyIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsIm5ld01pc3MiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHRzIiwic2V0U3RhdGUiLCJjb25jYXQiLCJ0YXNrIiwiZm91bmR0YXNrIiwiXyIsImZpbmQiLCJtaXNzaW9uIiwiaXNDb21wbGV0ZWQiLCJvbGRUYXNrIiwibmV3VGFzayIsIm9sZERhdGUiLCJuZXdEYXRlIiwiZGF0ZSIsInRhc2tEZWxldGUiLCJyZW1vdmVUYXNrIiwicmVtb3ZlIiwiY3JlYXRlTWlzcyIsImJpbmQiLCJjaGlsZHJlbiIsInRvZ2dsZVRhc2siLCJzYXZlVGFzayIsImRlbGV0ZVRhc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQUVNQSxXOzs7QUFDRiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLCtIQUNUQSxLQURTOztBQUVmLGVBQUtDLEtBQUwsR0FBYTtBQUNUQyx1QkFBVTtBQURELFVBQWI7QUFGZTtBQUtsQjtBQUNBOzs7OztvQ0FDVUMsVyxFQUFhO0FBQUE7O0FBQ3BCQyxxQkFBUUMsR0FBUixDQUFZLG9CQUFvQkYsV0FBaEM7QUFEb0IsaUJBRVpELFFBRlksR0FFQyxLQUFLRCxLQUZOLENBRVpDLFFBRlk7O0FBR3BCRSxxQkFBUUMsR0FBUixDQUFZQyxPQUFaO0FBQ0FDLG1CQUFNLGlCQUFOLEVBQXlCO0FBQ3JCQyx5QkFBUSxNQURhO0FBRXJCQyx1QkFBTUMsS0FBS0MsU0FBTCxDQUFlTCxPQUFmLENBRmU7QUFHckJNLDBCQUFTO0FBQ0wscUNBQWdCO0FBRFg7QUFIWSxjQUF6QixFQU1HQyxJQU5ILENBTVEsVUFBQ0MsUUFBRDtBQUFBLHdCQUFjQSxTQUFTQyxJQUFULEVBQWQ7QUFBQSxjQU5SLEVBT0tGLElBUEwsQ0FPVSxVQUFDRyxPQUFELEVBQWE7QUFDbkJaLHlCQUFRQyxHQUFSLENBQVlXLE9BQVo7QUFDQSx3QkFBS0MsUUFBTCxDQUFjO0FBQ1ZmLCtCQUFVQSxTQUFTZ0IsTUFBVCxDQUFnQkYsT0FBaEI7QUFEQSxrQkFBZDtBQUdILGNBWkQ7QUFhSDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O29DQUNXRyxJLEVBQU07QUFDYixpQkFBTUMsWUFBV0MsRUFBRUMsSUFBRixDQUFPLEtBQUtyQixLQUFMLENBQVdDLFFBQWxCLEVBQTRCO0FBQUEsd0JBQVdxQixRQUFRSixJQUFSLEtBQWlCQSxJQUE1QjtBQUFBLGNBQTVCLENBQWpCO0FBQ0FDLHVCQUFVSSxXQUFWLEdBQXdCLENBQUNKLFVBQVVJLFdBQW5DO0FBQ0Esa0JBQUtQLFFBQUwsQ0FBYyxFQUFFZixVQUFVLEtBQUtELEtBQUwsQ0FBV0MsUUFBdkIsRUFBZDtBQUNIOzs7a0NBQ1F1QixPLEVBQVNDLE8sRUFBU0MsTyxFQUFTQyxPLEVBQVM7QUFDekMsaUJBQU1SLFlBQVVDLEVBQUVDLElBQUYsQ0FBTyxLQUFLckIsS0FBTCxDQUFXQyxRQUFsQixFQUE0QjtBQUFBLHdCQUFVcUIsUUFBUUosSUFBUixLQUFnQk0sT0FBMUI7QUFBQSxjQUE1QixDQUFoQjtBQUNBTCx1QkFBVUQsSUFBVixHQUFlTyxPQUFmO0FBQ0FOLHVCQUFVUyxJQUFWLEdBQWVELE9BQWY7QUFDQSxrQkFBS1gsUUFBTCxDQUFjLEVBQUNmLFVBQVUsS0FBS0QsS0FBTCxDQUFXQyxRQUF0QixFQUFkO0FBQ0g7OztvQ0FDVTRCLFUsRUFBWTtBQUNuQixpQkFBTUMsYUFBV1YsRUFBRVcsTUFBRixDQUFTLEtBQUsvQixLQUFMLENBQVdDLFFBQXBCLEVBQThCO0FBQUEsd0JBQVVxQixRQUFRSixJQUFSLEtBQWdCVyxVQUExQjtBQUFBLGNBQTlCLENBQWpCO0FBQ0Esa0JBQUtiLFFBQUwsQ0FBYyxFQUFDZixVQUFVLEtBQUtELEtBQUwsQ0FBV0MsUUFBdEIsRUFBZDtBQUNIOzs7a0NBQ1E7QUFDTCxvQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBRUk7QUFDSSwrQkFBVSxLQUFLRixLQUFMLENBQVdFLFFBRHpCO0FBRUksaUNBQVksS0FBSytCLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCO0FBRmhCLG1CQUZKO0FBT1EsMENBQWEsS0FBS2xDLEtBQUwsQ0FBV21DLFFBQXhCLEVBQWtDOztBQUU5QmpDLCtCQUFVLEtBQUtELEtBQUwsQ0FBV0MsUUFGUztBQUc5QmtDLGlDQUFZLEtBQUtBLFVBQUwsQ0FBZ0JGLElBQWhCLENBQXFCLElBQXJCLENBSGtCO0FBSTlCRywrQkFBVSxLQUFLQSxRQUFMLENBQWNILElBQWQsQ0FBbUIsSUFBbkIsQ0FKb0I7QUFLOUJJLGlDQUFZLEtBQUtBLFVBQUwsQ0FBZ0JKLElBQWhCLENBQXFCLElBQXJCOztBQUxrQixrQkFBbEM7QUFQUixjQURKO0FBbUJIOzs7Ozs7bUJBR1VuQyxXIiwiZmlsZSI6IjAuYmFjMDYyNTJhNzgwZjI3YzczNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1pc3Npb25zTGlzdCBmcm9tICcuL21pc3Npb25zLWxpc3QnO1xyXG5pbXBvcnQgQ3JlYXRlbWlzc2lvbiBmcm9tICcuL2NyZWF0ZS1taXNzaW9uJztcclxuXHJcbi8vIGNvbnN0IG1pc3Npb25zID0gW1xyXG4vLyB7XHJcbi8vICAgICB0YXNrOiAnRXhhbXBsZSBNaXNzaW9uJyxcclxuLy8gICAgIGRhdGU6ICdkYXRlJyxcclxuLy8gICAgIGlzQ29tcGxldGVkOiBmYWxzZVxyXG4vLyB9LFxyXG4vLyB7XHJcbi8vICAgICB0YXNrOiAnRXhhbXBsZSBNaXNzaW9uJyxcclxuLy8gICAgIGRhdGU6ICdkYXRlJyxcclxuLy8gICAgIGlzQ29tcGxldGVkOiBmYWxzZVxyXG4vLyB9XHJcbi8vIF07XHJcblxyXG5jbGFzcyBNaXNzaW9uTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBtaXNzaW9uczogW11cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgIC8vIE1JU1NJT04gKHRhc2tzIENSVUQpOlxyXG4gICAgY3JlYXRlTWlzcyhkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVzY3JpcHRpb24gaXMgXCIgKyBkZXNjcmlwdGlvbik7XHJcbiAgICAgICAgY29uc3QgeyBtaXNzaW9ucyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdNaXNzKTtcclxuICAgICAgICBmZXRjaCgnL21pc3Npb24vY3JlYXRlJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3TWlzcyksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG1pc3Npb25zOiBtaXNzaW9ucy5jb25jYXQocmVzdWx0cylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyAgICAgY3JlYXRlTWlzc2lvbih0ZXh0KSB7XHJcbiAgICAvLyAgICAgY29uc3QgeyBtaXNzaW9ucyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIC8vICAgICBjb25zdCBuZXdNaXNzaW9uID0ge1xyXG4gICAgLy8gICAgICAgICBkZXNjcmlwdGlvbjogdGV4dC5kZXNjcmlwdGlvblxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLnN0YXRlLm1pc3Npb25zLnB1c2goe1xyXG4gICAgLy8gICAgICAgICB0YXNrLFxyXG4gICAgLy8gICAgICAgICBkYXRlLFxyXG4gICAgLy8gICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2VcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgaXNDb21wbGV0ZWQ6IGZhbHNlIH0pO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG1pc3Npb25zKTtcclxuICAgIC8vIH0sXHJcbiAgICB0b2dnbGVUYXNrKHRhc2spIHtcclxuICAgICAgICBjb25zdCBmb3VuZHRhc2s9IF8uZmluZCh0aGlzLnN0YXRlLm1pc3Npb25zLCBtaXNzaW9uID0+IG1pc3Npb24udGFzayA9PT0gdGFzayk7XHJcbiAgICAgICAgZm91bmR0YXNrLmlzQ29tcGxldGVkID0gIWZvdW5kdGFzay5pc0NvbXBsZXRlZDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWlzc2lvbnM6IHRoaXMuc3RhdGUubWlzc2lvbnN9KTtcclxuICAgIH1cclxuICAgIHNhdmVUYXNrKG9sZFRhc2ssIG5ld1Rhc2ssIG9sZERhdGUsIG5ld0RhdGUpIHtcclxuICAgICAgICBjb25zdCBmb3VuZHRhc2s9Xy5maW5kKHRoaXMuc3RhdGUubWlzc2lvbnMsIG1pc3Npb249PiBtaXNzaW9uLnRhc2sgPT09b2xkVGFzayk7XHJcbiAgICAgICAgZm91bmR0YXNrLnRhc2s9bmV3VGFzaztcclxuICAgICAgICBmb3VuZHRhc2suZGF0ZT1uZXdEYXRlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21pc3Npb25zOiB0aGlzLnN0YXRlLm1pc3Npb25zfSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVUYXNrKHRhc2tEZWxldGUpIHtcclxuICAgICAgICBjb25zdCByZW1vdmVUYXNrPV8ucmVtb3ZlKHRoaXMuc3RhdGUubWlzc2lvbnMsIG1pc3Npb249PiBtaXNzaW9uLnRhc2sgPT09dGFza0RlbGV0ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWlzc2lvbnM6IHRoaXMuc3RhdGUubWlzc2lvbnN9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPk1pc3Npb25zIEhvbWU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZW1pc3Npb25cclxuICAgICAgICAgICAgICAgICAgICBtaXNzaW9ucz17dGhpcy5wcm9wcy5taXNzaW9uc31cclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVNaXNzPXt0aGlzLmNyZWF0ZU1pc3MuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaXNzaW9uczogdGhpcy5zdGF0ZS5taXNzaW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVGFzazogdGhpcy50b2dnbGVUYXNrLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVUYXNrOiB0aGlzLnNhdmVUYXNrLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2s6IHRoaXMuZGVsZXRlVGFzay5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaXNzaW9uTWFpbjtcclxuICAgIFxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL21pc3Npb25tYWluLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=