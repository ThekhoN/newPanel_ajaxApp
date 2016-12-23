//reqd for css transitions & animations
function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }
    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}
var transitionEvent = whichTransitionEvent();
function onCSSTransitionEndX99(el, propertyName, callbackFunct) {
    transitionEvent && el.addEventListener(transitionEvent, function(e) {
        if (e.propertyName == propertyName) {
            if (callbackFunct) {
                callbackFunct();
            } else {
                return;
            }
        } else {
            return;
        }
    });
}

//domNodes
var _ss_q_checkbox = document.getElementsByClassName('ss-q-checkbox');
var _form = document.getElementById('ss-form');
var _subsribe_text = document.getElementsByClassName('subsribe_text');
var _dealform_filed = document.getElementsByClassName('dealform_filed');
var _subthankyou_text = document.getElementsByClassName('subthankyou_text')[0];
var _divforapp = document.getElementsByClassName('divforapp')[0];
var _email = document.getElementById('entry_2056924394');
var _submitFormX99 = document.getElementsByClassName('submitFormX99')[0];
var _ss_q_checkboxInputs = document.getElementsByClassName('ss-q-checkbox');
var _formErrorLog = document.getElementsByClassName('formErrorLog')[0];

var _subthankyou_text_Wrapper = document.getElementById('subthankyou_text_Wrapper');
var _dod_innerMain = document.getElementById('dod_innerMain');
var _formErrorLogHeightDefault = _formErrorLog.style.height;
//formValidation

_submitFormX99.addEventListener('click', validateDodFormSubmit);


function resetFormError__(el) {
    console.log('running resetFormError__. . .');
    //don't run if
    if(getComputedStyle(el).opacity == 0){
      return;
    }
    if (!transitionEvent) {
        console.log('transitionEvent/CSS Transitions not supported. . .');
        el.style.opacity = 0;
        el.style.height = '0px';
        el.innerHTML = '';
        return;
    }
    el.innerHTML = '';
    el.style.opacity = 0;
    onCSSTransitionEndX99(el, 'opacity', function() {
        el.style.height = '0px';//width of innerContent
    });
}



function chainTransition_fadeInDisplay(el, callback) {
  if(getComputedStyle(el).height == '26px' && getComputedStyle(el).opacity == 1){
    callback();
    return;
  }
  if(getComputedStyle(el).height == '26px' && getComputedStyle(el).opacity == 1 && !el.innerHTML===''){
    console.log('do not run chainTransition_fadeInDisplay. . .');
    return;
  }
  //fallback
    if (!transitionEvent) {
        console.log('transitionEvent/CSS Transitions not supported. . .');
        //run style changes anyway
        console.log('run style changes anyway. . .')
        el.style.height = '26px';
        el.style.opacity = 1;
        if(callback){
          callback();
        }
        return;
    }
    console.group('first chainTransition_fadeInDisplay');
    console.log('running chainAnim. . .');

    if(callback){
      console.log('callback was defined...');
      callback();
    }
    //first transition
    el.style.opacity = '0.01';
    console.groupEnd('first chainTransition_fadeInDisplay');
    //chain to run after first transition
    onCSSTransitionEndX99(el, 'opacity', function() {
        el.style.height = '26px';//width of innerContent
        onCSSTransitionEndX99(el, 'height', function() {
            el.style.opacity = 1;
        });
    });
}


function validateEmail(email) {
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
}

function setHTMLFormError(message, DomNode){
  console.log('setHTMLFormError running . . .');
  DomNode.innerHTML = '';
  DomNode.innerHTML += ('<span class="formError">' + message + '</span>');
  console.log('setHTMLFormError success . . .');
}

for (var i = 0; i < _ss_q_checkbox.length; i++) {
    _ss_q_checkbox[i].addEventListener('click', function () {
        //resetFormError();
        resetFormError__(_formErrorLog);
    });
}

function validateDodFormSubmit(e) {
    e.preventDefault();

    if(_formErrorLog.children.length > 0){
        _formErrorLog.innerHTML = '';
    }

  var _current_formErrorLogHeight = _formErrorLog.style.height;
 _formErrorLogHeight = (_current_formErrorLogHeight > _formErrorLogHeightDefault) ? _current_formErrorLogHeight: _formErrorLogHeightDefault;

  var checkedContainerX99 = [];
  var categorySelected = false;
  for (var i = 0; i < _ss_q_checkbox.length; i++) {
      if (_ss_q_checkbox[i].checked) {
          categorySelected = true;
          checkedContainerX99.push(i);
      }
  }

  if(checkedContainerX99.length < 1 || categorySelected === false){
    var checkboxErrMssg = 'please choose a category. . .';
    console.log('checkboxErrMssg: ', checkboxErrMssg);
    chainTransition_fadeInDisplay(_formErrorLog, function () {
        setHTMLFormError(checkboxErrMssg, _formErrorLog);
    });
    return;
  }

  if(_email.value === ''){
    var emailUndefinedErrMssg = 'please enter your email. . .';
    console.log('emailUndefinedErrMssg: ', emailUndefinedErrMssg);
    chainTransition_fadeInDisplay(_formErrorLog, function(){
      setHTMLFormError(emailUndefinedErrMssg, _formErrorLog);
    });
    return;
  }
  if(!validateEmail(_email.value)){
    var emailSyntaxErrMssg = 'please enter a valid email. . .';
    chainTransition_fadeInDisplay(_formErrorLog, function(){
      setHTMLFormError(emailSyntaxErrMssg, _formErrorLog);
    });
    return;
  }
  yoloKR();
}

function yoloKR() {
  var glob = [];
  for (var i = 0; i < _ss_q_checkbox.length; i++) {
      var this_ss_q_checkbox = _ss_q_checkbox[i];

      if (this_ss_q_checkbox.checked) {
          glob.push(this_ss_q_checkbox.value);
      }
  }
  console.log('updated glob: ', glob);
  sweep(glob);
  setTimeout(function() {
      _form.reset();
  }, 500);
  for (var n = 0; n < _subsribe_text.length; n++) {
      _subsribe_text[n].style.display = 'none';
  }
  for (var k = 0; k < _dealform_filed.length; k++) {
      _dealform_filed[k].style.display = 'none';
  }
  _divforapp.style.display = 'none';
  _dod_innerMain.style.display='none';
  toggleClassX99(_subthankyou_text_Wrapper, 'hiddenX99');
  //previous
  //_subthankyou_text.style.display = 'block';
}


function toggleClassX99(el, className) {
    if (el.classList) {
        el.classList.toggle(className);
    } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf(className);
        if (existingIndex >= 0) classes.splice(existingIndex, 1);
        else classes.push(className);
        el.className = classes.join(' ');
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function sweep(glob) {
  var emailx = _email.value;
  var xdata = '{"sweepstakeFormId": "DODSweep1", "sweepstakeQs":["' + glob + '"], "sweepstakeAs":[], "alertEmail":"' + emailx + '"}';
  var podata = JSON.parse(xdata);
  console.log('podata' + JSON.stringify(podata));
  var url = '/sweepstakesDPCall';
  var params = JSON.stringify(podata);
  xhr_POST(url, params);
}
function xhr_POST(url, params) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
          console.log('xhr_POST state change. . .', xhr.responseText);
      }
  };
  xhr.onerror = function(err) {
      console.log('there was an error with the POST: ', err);
  };
  xhr.send(params);
}

_email.addEventListener('click', function () {
    //resetFormError();
    var mobgetemail = getCookie('eid');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      divforapp.style.display = 'block';
    }
    if (mobgetemail) {
        _email.value = mobgetemail.split('"').join('');
    }
});


for (var j = 0; j < _ss_q_checkboxInputs.length; j++) {
  var this_ss_q_checkboxInputs = _ss_q_checkboxInputs[j];
  if (this_ss_q_checkboxInputs.checked) {
      this_ss_q_checkboxInputs.removeAttrubute('required');
  }
}

/// form validation///
