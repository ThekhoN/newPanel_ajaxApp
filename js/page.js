//var url = (window.admin && window.admin == 'true' ? '/admin' : '') + "csvData_newP.json";
var url = (window.admin && window.admin == 'true' ? '/admin' : '') + "csvData_filter_new.json";
//var url = (window.admin && window.admin == 'true' ? '/admin' : '') + "csvData_noPogId_new.json";
//var url = (window.admin && window.admin == 'true' ? '/admin' : '') + '/get/offers/jsonList/' + mktName.value;

var _AjaxApp = new AjaxPageApp ({
  url:url
});

_AjaxApp.init();
