//domNodes
var _ss_q_checkbox = document.getElementsByClassName('ss-q-checkbox');
var _form = document.getElementById('ss-form');
var _subsribe_text = document.getElementsByClassName('subsribe_text');
var _dealform_filed = document.getElementsByClassName('dealform_filed');
var _subthankyou_text = document.getElementsByClassName('subthankyou_text')[0];
var _divforapp = document.getElementsByClassName('divforapp')[0];
var _email = document.getElementById('entry_2056924394');

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
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  _email.addEventListener('click', function () {
      divforapp.style.display = 'block';
      var mobgetemail = getCookie('eid');
      if (getCookie('eid')) {
          _email.value = mobgetemail.split('"').join('');
      }
  });
}
 else {
  var mobgetemail = getCookie('eid');
  _email.value = mobgetemail.split('"').join('');
}
var _ss_q_checkboxInputs = document.getElementsByClassName('ss-q-checkbox');
for (var j = 0; j < _ss_q_checkboxInputs.length; j++) {
  var this_ss_q_checkboxInputs = _ss_q_checkboxInputs[j];
  if (this_ss_q_checkboxInputs.checked) {
      this_ss_q_checkboxInputs.removeAttrubute('required');
  }
}

/// form validation///
