console.log('refactored. . .');
//predefining url because app does not support window.location.href
var liveURLx = 'test-z666';
var pre_liveURLx = 'https://mobileapi.snapdeal.com/service/generic/get/getGenericOffer?landingPage=';
var post_liveURLx = '&start=0&count=100';
//var url = 'https://mobileapi.snapdeal.com/service/generic/get/getGenericOffer?landingPage=test-z666&start=0&count=100';

//final url to be consumed
var use_finalURLx = '';

var local_testURL = (window.admin && window.admin == 'true' ? '/admin' : '') + "csvData_mobileapi5.json";

var node_appNotifyX = document.getElementById('appNotifyX');
//pass local_testURL as get_use_finalURLx(local_testURL) for LOCAL TESTS
var url = get_use_finalURLx();

function get_use_finalURLx(local_testURL) {
  var landingPageUrl_offerName_nonAPP, landingPageUrl_offerName_APP;
  //if local
  if (local_testURL) {
      console.log('running on local: ', local_testURL);
      use_finalURLx = local_testURL;
      return use_finalURLx;
  }
  //web && mobile
  landingPageUrl_offerName_nonAPP = get_landingPageUrl_offerName_nonAPP();
  if (window && window.location.href) {
      if (landingPageUrl_offerName_nonAPP) {
          console.log('using derived url from live offer page. . .');
          use_finalURLx = pre_liveURLx + landingPageUrl_offerName_nonAPP + post_liveURLx;
      } else {
          console.log('local_testURL not defined, using predefined url. . .');
          use_finalURLx = pre_liveURLx + liveURLx + post_liveURLx;
      }
      console.log('running - web/mobile: ', use_finalURLx);
      return use_finalURLx;
  }
  //app
  else {
      landingPageUrl_offerName_APP = get_landingPageUrl_offerName_APP();
      node_appNotifyX.style.display = 'block';
      use_finalURLx = pre_liveURLx + landingPageUrl_offerName_APP + post_liveURLx;
      return use_finalURLx;
  }
}

function get_landingPageUrl_offerName_nonAPP() {
  var live_url = window.location.href;
  var check = '/offers/';
  var check_len = check.length;
  if (live_url.indexOf(check) > -1) {
      console.log('running live...');
      var check_index = live_url.indexOf(check) + check_len;
      var landingPageUrl = live_url.substr(check_index);
      console.log('landingPageOfferString: ', landingPageUrl);
      return landingPageUrl;
  } else {
      console.log('running on local test...');
      return undefined;
  }
}

function get_landingPageUrl_offerName_APP() {
  var live_url = document.URL || document.location;
  var check = '/offers/';
  var check_len = check.length;
  if (live_url.indexOf(check) > -1) {
      console.log('running live...');
      var check_index = live_url.indexOf(check) + check_len;
      var landingPageUrl = live_url.substr(check_index);
      console.log('landingPageOfferString: ', landingPageUrl);
      return landingPageUrl;
  } else {
      console.log('running on local test...');
      return undefined;
  }
};
