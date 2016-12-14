'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimerX99 = function () {
  function TimerX99(opts) {
    _classCallCheck(this, TimerX99);

    if (!opts) {
      opts = {};
    }
    this.ID = opts.ID ? opts.ID : '';
    this.startTime = opts.startTime ? opts.startTime : '';
    this.endTime = opts.endTime ? opts.endTime : '';
    this.callback = opts.callback ? opts.callback : '';
  }

  _createClass(TimerX99, [{
    key: 'init',
    value: function init() {
      //validate options
      console.log('init TimerX99');
      this.ID = this.ID ? this.ID : log_UndefinedAndReturn('ID');
      this.startTime = this.startTime ? this.startTime : log_UndefinedAndReturn('startTime');
      this.endTime = this.endTime ? this.endTime : log_UndefinedAndReturn('endTime');
      this.callback = this.callback ? this.callback : log_UndefinedAndReturn('callback');
      if (!isValidDate(this.startTime)) {
        console.log('invalid startTime date format, it must be MM/DD/YYYY');
        return;
      }
      if (!isValidDate(this.endTime)) {
        console.log('invalid endTime date format, it must be MM/DD/YYYY');
        return;
      }

      //cache options
      var ID = this.ID;
      var dom_ID = document.getElementById(ID);
      if (!dom_ID) {
        console.log('TimerX99: element with ID not found');
        return;
      }
      var startTime = this.startTime;
      var endTime = this.endTime;
      var callback = this.callback;

      //CheckStartTimer
      CheckStartTimer(ID, startTime, endTime, callback);

      function StartTimer(ID, startTime, endTime, callback) {
        //dom queries
        var dom_ID = document.getElementById(ID);
        var dayV_Wrap = dom_ID.querySelector('.dayV_timerX');
        var hrV_Wrap = dom_ID.querySelector('.hrV_timerX');
        var minV_Wrap = dom_ID.querySelector('.minV_timerX');
        var secV_Wrap = dom_ID.querySelector('.secV_timerX');
        RunningTimer();
        function RunningTimer() {
          updateClock();
          var timeInterval = setInterval(updateClock, 1000);

          function updateClock() {
            var t = getRemainingTime(endTime);
            dayV_Wrap.innerHTML = ('0' + t.days).slice(-2);
            hrV_Wrap.innerHTML = ('0' + t.hours).slice(-2);
            minV_Wrap.innerHTML = ('0' + t.minutes).slice(-2);
            secV_Wrap.innerHTML = ('0' + t.seconds).slice(-2);
            if (t.total <= 0) {
              clearInterval(timeInterval);
              console.log('timer was completed. . .');
              window.location.reload(true);
            }
          }
        }
      }

      function CheckStartTimer(ID, startTime, endTime, callback) {
        var _startTime = startTime + ' GMT+0530';
        var _endTime = endTime + ' GMT+0530';
        var _startTime_ms = new Date(_startTime);
        var _endTime_ms = new Date(_endTime);
        var currTime_ms = new Date();
        if (_startTime_ms > _endTime_ms) {
          console.log('error in startDate, startDate is more than end Date');
        }
        if (_endTime_ms > currTime_ms && currTime_ms >= _startTime_ms) {
          StartTimer(ID, startTime, endTime, callback);
          if (callback) {
            if (!isFunction(callback)) {
              console.log('callback must be a function declaration like this:' + '\n' + 'function (){ //do something }');
              return;
            } else {
              console.log('running callback:');
              callback();
            }
          }
        }
      }

      function getRemainingTime(endTime) {
        var t = Date.parse(endTime) - Date.parse(new Date());
        var seconds = Math.floor(t / 1000 % 60);
        var minutes = Math.floor(t / 1000 / 60 % 60);
        var hours = Math.floor(t / (1000 * 60 * 60) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }
    }
  }, {
    key: 'get_settings',
    value: function get_settings() {
      console.log('GET PROPS PLEASE: ');
      console.log('ID: ', this.ID);
      console.log('startTime: ', this.startTime);
      console.log('endTime: ', this.endTime);
      console.log('callback: ', this.callback);
      return {
        id: this.ID,
        startTime: this.startTime,
        endTime: this.endTime,
        callback: this.callback
      };
    }
  }]);

  return TimerX99;
}();

//global helper util fns


function log_UndefinedAndReturn(prop) {
  console.log(String(prop) + ' was not defined');
  if (prop == 'callback') {
    console.log('you can define a callback. . .');
  } else {
    return;
  }
}

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

function isValidDate(date) {
  var d = date;
  var i_fSpace = d.indexOf(' ');
  var data_str = d.substr(0, i_fSpace);
  var matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(data_str);
  if (matches === null) return false;
  var d_ = matches[2];
  var m = matches[1] - 1;
  var y = matches[3];
  var composedDate = new Date(y, m, d_);
  return composedDate.getDate() == d_ && composedDate.getMonth() == m && composedDate.getFullYear() == y;
}

function findParent_firstMatchClassName(el, className) {
  while (el.parentNode) {
    el = el.parentNode;
    if (el.className === className) return el;
  }
  return null;
}

function Init_liveTimerOffers(data, tag) {
  var liveTimerOffer_opts = get_liveTimerOffer_opts(data, tag);
  start_liveTimerOffer(liveTimerOffer_opts);

  function get_liveTimerOffer_opts(data, tag) {
    var liveTimerOffer_opts = [];
    data.forEach(function (offer, index) {
      if (offer.categoryName.indexOf(tag) > -1) {
        var startTimeHrs = ('0' + offer.startTimeHrs).slice(-2);
        var startTimeMin = ('0' + offer.startTimeMin).slice(-2);
        var endTimeHrs = ('0' + offer.endTimeHrs).slice(-2);
        var endTimeMin = ('0' + offer.endTimeMin).slice(-2);
        var startTime = getFullDate() + ' ' + startTimeHrs + ':' + startTimeMin + ':00';
        var endTime = getFullDate() + ' ' + endTimeHrs + ':' + endTimeMin + ':00';
        var timerOptions = {};
        timerOptions.categoryName = offer.categoryName;
        timerOptions.startTime = startTime;
        timerOptions.endTime = endTime;
        liveTimerOffer_opts.push(timerOptions);
      }
    });
    return liveTimerOffer_opts;
  }

  function start_liveTimerOffer(get_liveTimerOffer_opts) {
    get_liveTimerOffer_opts.forEach(function (timerObj, i) {
      var newTimerName = '';
      newTimerName = timerObj.categoryName + '_timer';
      var _newTimerName = newTimerName;
      newTimerName = new TimerX99({
        ID: newTimerName,
        startTime: timerObj.startTime,
        endTime: timerObj.endTime,
        callback: function callback() {
          console.log(_newTimerName + ' is running');
        }
      });
      newTimerName.init();
    });
  }

  function getFullDate() {
    var _d = new Date();
    var date_today = _d.getDate();
    date_today = ('0' + date_today).slice(-2);
    var month_today = _d.getMonth() + 1;
    month_today = ('0' + month_today).slice(-2);
    var year_today = _d.getFullYear();
    var today_mmddyyyy = month_today + '/' + date_today + '/' + year_today;
    return today_mmddyyyy;
  }
}

exports.default = TimerX99;