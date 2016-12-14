class TimerX99 {
  constructor(opts){
    if(!opts){
      opts = {};
    }
    this.ID = opts.ID?opts.ID:'';
    this.startTime = opts.startTime?opts.startTime:'';
    this.endTime = opts.endTime?opts.endTime:'';
    this.callback = opts.callback?opts.callback:'';
  }

  init(){
    //validate options
    console.log('init TimerX99');
    this.ID = this.ID?this.ID:log_UndefinedAndReturn('ID');
    this.startTime = this.startTime?this.startTime:log_UndefinedAndReturn('startTime');
    this.endTime = this.endTime?this.endTime:log_UndefinedAndReturn('endTime');
    this.callback = this.callback?this.callback:log_UndefinedAndReturn('callback');
    if (!isValidDate(this.startTime)) {
      console.log('invalid startTime date format, it must be MM/DD/YYYY');
      return;
    }
    if (!isValidDate(this.endTime)) {
      console.log('invalid endTime date format, it must be MM/DD/YYYY');
      return;
    }

    //cache options
    const ID = this.ID;
    const dom_ID = document.getElementById(ID);
    if(!dom_ID) {
      console.log('TimerX99: element with ID not found');
      return;
    }
    const startTime = this.startTime;
    const endTime = this.endTime;
    const callback = this.callback;

    //CheckStartTimer
    CheckStartTimer(ID, startTime, endTime, callback);

    function StartTimer(ID, startTime, endTime, callback){
      //dom queries
      const dom_ID = document.getElementById(ID);
      const dayV_Wrap = dom_ID.querySelector('.dayV_timerX');
      const hrV_Wrap = dom_ID.querySelector('.hrV_timerX');
      const minV_Wrap = dom_ID.querySelector('.minV_timerX');
      const secV_Wrap = dom_ID.querySelector('.secV_timerX');
      RunningTimer();
      function RunningTimer(){
        updateClock();
        const timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
          const t = getRemainingTime(endTime);
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

    function CheckStartTimer(ID, startTime, endTime, callback){
      const _startTime = startTime + ' GMT+0530';
      const _endTime = endTime + ' GMT+0530';
      const _startTime_ms = new Date(_startTime);
      const _endTime_ms = new Date(_endTime);
      const currTime_ms = new Date();
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

    function getRemainingTime (endTime) {
      let t = Date.parse(endTime) - Date.parse(new Date());
      const seconds = Math.floor((t / 1000) % 60);
      const minutes = Math.floor((t / 1000 / 60) % 60);
      const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
  }

  get_settings() {
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

}

//global helper util fns
function log_UndefinedAndReturn(prop){
  console.log(`${String(prop)} was not defined`);
  if(prop == 'callback'){
    console.log('you can define a callback. . .');
  }
  else {
    return;
  }
}

function isFunction(functionToCheck) {
  const getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

function isValidDate(date) {
  const d = date;
  const i_fSpace = d.indexOf(' ');
  const data_str = d.substr(0, i_fSpace);
  const matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(data_str);
  if (matches === null) return false;
  const d_ = matches[2];
  const m = matches[1] - 1;
  const y = matches[3];
  const composedDate = new Date(y, m, d_);
  return composedDate.getDate() == d_ && composedDate.getMonth() == m && composedDate.getFullYear() == y;
}

function findParent_firstMatchClassName(el, className) {
  while (el.parentNode) {
    el = el.parentNode;
    if (el.className === className)
      return el;
  }
  return null;
}

function Init_liveTimerOffers(data, tag){
  const liveTimerOffer_opts = get_liveTimerOffer_opts(data, tag);
  start_liveTimerOffer(liveTimerOffer_opts);

  function get_liveTimerOffer_opts(data, tag){
    const liveTimerOffer_opts = [];
    data.forEach((offer, index) =>{
      if(offer.categoryName.indexOf(tag) > -1){
        const startTimeHrs = ('0' + offer.startTimeHrs).slice(-2);
        const startTimeMin = ('0' + offer.startTimeMin).slice(-2);
        const endTimeHrs = ('0' + offer.endTimeHrs).slice(-2);
        const endTimeMin = ('0' + offer.endTimeMin).slice(-2);
        const startTime = `${getFullDate()} ${startTimeHrs}:${startTimeMin}:00`;
        const endTime = `${getFullDate()} ${endTimeHrs}:${endTimeMin}:00`;
        let timerOptions = {};
        timerOptions.categoryName = offer.categoryName;
        timerOptions.startTime = startTime;
        timerOptions.endTime = endTime;
        liveTimerOffer_opts.push(timerOptions);
      }
    });
    return liveTimerOffer_opts;
  }

  function start_liveTimerOffer(get_liveTimerOffer_opts){
    get_liveTimerOffer_opts.forEach((timerObj, i)=>{
      let newTimerName = '';
      newTimerName = `${timerObj.categoryName}_timer`;
      let _newTimerName = newTimerName;
      newTimerName = new TimerX99({
        ID: newTimerName,
        startTime: timerObj.startTime,
        endTime: timerObj.endTime,
        callback: function(){console.log(`${_newTimerName} is running`);}
      });
      newTimerName.init();
    });
  }

  function getFullDate (){
    const _d = new Date();
    let date_today = _d.getDate();
    date_today = ('0' + date_today).slice(-2);
    let month_today = _d.getMonth() + 1;
    month_today = ('0' + month_today).slice(-2);
    let year_today = _d.getFullYear();
    const today_mmddyyyy = `${month_today}/${date_today}/${year_today}`;
    return today_mmddyyyy;
  }
}

export default TimerX99;
