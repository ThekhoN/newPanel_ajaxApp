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

var _formErrorLogHeightDefault = _formErrorLog.style.height;
//formValidation

_submitFormX99.addEventListener('click', validateDodFormSubmit);

function resetFormError() {
    console.log('running reset. . .');
    _formErrorLog.style.height = _formErrorLogHeightDefault;
    _formErrorLog.style.opacity = 0;
    _formErrorLog.innerHTML = '';
}

function validateEmail(email) {
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
}

function appendFormError(ele, message, DomNode){
  var newEle = document.createElement(ele);
  newEle.innerHTML = message;
  DomNode.appendChild(newEle);
}

for (var i = 0; i < _ss_q_checkbox.length; i++) {
    _ss_q_checkbox[i].addEventListener('click', function () {
        resetFormError();
    });
}

function validateDodFormSubmit(e) {
    e.preventDefault();

    if(_formErrorLog.children.length > 0){
        _formErrorLog.innerHTML = '';
    }

  var _current_formErrorLogHeight = _formErrorLog.style.height;
 _formErrorLogHeight = (_current_formErrorLogHeight > _formErrorLogHeightDefault) ? _current_formErrorLogHeight: _formErrorLogHeightDefault;

  function animate_formErrorLog() {
    _formErrorLog.style.height = '16px' + _formErrorLogHeight;
    _formErrorLog.onCSSTransitionEnd(function(){
      _formErrorLog.style.opacity = 1;
    });
  }

  var checkedContainerX99 = [];
  var categorySelected = false;

  //console.log('running validateDodFormSubmit. . .');
  for (var i = 0; i < _ss_q_checkbox.length; i++) {
      if (_ss_q_checkbox[i].checked) {
          categorySelected = true;
          checkedContainerX99.push(i);
      }
  }
  //console.log('categorySelected: ', categorySelected);
  //console.log('checked inputs: ', checkedContainerX99.length);
  if(checkedContainerX99.length < 1 || categorySelected === false){
    var checkboxErrMssg = 'please choose a category. . .';
    animate_formErrorLog();
    appendFormError('span', checkboxErrMssg, _formErrorLog);
    return;
  }

  if(_email.value === ''){
    var emailUndefinedErrMssg = 'please enter your email. . .';
    animate_formErrorLog();
    appendFormError('span', emailUndefinedErrMssg, _formErrorLog);
    return;
  }
  if(!validateEmail(_email.value)){
    var emailSyntaxErrMssg = 'please enter a valid email. . .';
    animate_formErrorLog();
    appendFormError('span', emailSyntaxErrMssg, _formErrorLog);
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

  //todo
  /*
  _subthankyou_text.style.display = 'block';
  _subthankyou_text.style.transform = 'translate3d(10px,0px,0px)';
  _subthankyou_text.style.webkitTransform = 'translate3d(10px,0px,0px)';
  //_subthankyou_text.style.opacity = 1;
  _subthankyou_text.onCSSTransitionEnd(function () {
      _subthankyou_text.style.opacity = 1;
  });
*/
  // /todo

  //previous
  _subthankyou_text.style.display = 'block';
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
    resetFormError();
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


//  +++++ transitionEnd +++++ //
;( function ( document, window, index )
{
	var s = document.body || document.documentElement, s = s.style, prefixAnimation = '', prefixTransition = '';

	if( s.WebkitAnimation == '' )	prefixAnimation	 = '-webkit-';
	if( s.MozAnimation == '' )		prefixAnimation	 = '-moz-';
	if( s.OAnimation == '' )		prefixAnimation	 = '-o-';

	if( s.WebkitTransition == '' )	prefixTransition = '-webkit-';
	if( s.MozTransition == '' )		prefixTransition = '-moz-';
	if( s.OTransition == '' )		prefixTransition = '-o-';

	Object.prototype.onCSSAnimationEnd = function( callback )
	{
		var runOnce = function( e ){ callback(); e.target.removeEventListener( e.type, runOnce ); };
		this.addEventListener( 'webkitAnimationEnd', runOnce );
		this.addEventListener( 'mozAnimationEnd', runOnce );
		this.addEventListener( 'oAnimationEnd', runOnce );
		this.addEventListener( 'oanimationend', runOnce );
		this.addEventListener( 'animationend', runOnce );
		if( ( prefixAnimation == '' && !( 'animation' in s ) ) || getComputedStyle( this )[ prefixAnimation + 'animation-duration' ] == '0s' ) callback();
		return this;
	};

	Object.prototype.onCSSTransitionEnd = function( callback )
	{
		var runOnce = function( e ){ callback(); e.target.removeEventListener( e.type, runOnce ); };
		this.addEventListener( 'webkitTransitionEnd', runOnce );
		this.addEventListener( 'mozTransitionEnd', runOnce );
		this.addEventListener( 'oTransitionEnd', runOnce );
		this.addEventListener( 'transitionend', runOnce );
		this.addEventListener( 'transitionend', runOnce );
		if( ( prefixTransition == '' && !( 'transition' in s ) ) || getComputedStyle( this )[ prefixTransition + 'transition-duration' ] == '0s' ) callback();
		return this;
	};
}( document, window, 0 ));
