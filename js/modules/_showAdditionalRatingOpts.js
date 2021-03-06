'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _MobPlatformCheck = require('./MobPlatformCheck');

var _MobPlatformCheck2 = _interopRequireDefault(_MobPlatformCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//_showAdditionalRatingOpts
function _showAdditionalRatingOpts() {
  if ((0, _MobPlatformCheck2.default)()) {
    return;
  }
  var _offerUnit_ratingWrap = document.getElementsByClassName('offerUnit_ratingWrap');
  //console.log('imported _showAdditionalRatingOpts running. . .');
  for (var i = 0; i < _offerUnit_ratingWrap.length; i++) {
    var this_offerUnit_ratingWrap = _offerUnit_ratingWrap[i];
    //console.log('this_offerUnit_ratingWrap: ', this_offerUnit_ratingWrap);
    this_offerUnit_ratingWrap.addEventListener('mouseenter', function () {
      var _this = this;
      var pogId = _this.getAttribute('data-pogId');
      var _target = _this.querySelector('.infodata');
      if (_target) {
        _target.classList.add('loading');
        _getAdditionalRatingOpts(pogId, _target);
        _target.style.display = 'block';
      }
      //localTestOnly
      /*
      var _target = _this.querySelector('.infodata');
      if (_target) {
          _target.innerHTML = _fakeServerApi();
          _target.style.display = 'block';
      }
      */
    });
    this_offerUnit_ratingWrap.addEventListener('mouseleave', function () {
      var _this = this;
      var _target = _this.querySelector('.infodata');
      if (_target) {
        _target.style.display = 'none';
      }
    });
  }
}

function _fakeServerApi() {
  console.log('_fakeServerApi running. . .');
  var _fakeData = '<div class="product_infogram"> <div class="rating-info col-xs-9"> <div class="ratetxt"> <span>3.6</span> <small class="LTgray">Out of 5</small> <div class="av-rating"> <div class="rating-stars"> <div class="grey-stars"></div> <div class="filled-stars" style="width:72.0%"></div> </div> </div> </div> </div> <div class="rating-histogram col-xs-12"> <div class="text"> <span itemprop="ratingCount" class="hidden">413</span> <h5 class="rating-histogram-header">Based on <span class="reviewCacheUpdate">413 ratings</span></h5> <div class="row reviews-true"> <span id="ratings-wrapper" class="js-pdp-nav-sec" data-link-nav="#defRevPDP" source="infogram" onclick="Snapdeal.pdpReview.displayReviewsWithRatingFilter(this,5,\'default\');" title="Read 15 reviews for 5-star ratings"> <span class="lfloat">5 Star</span> <span class="barover review-bar xola" style="width:105.00000000000001px"></span> <span>151</span> </span> </div> <div class="row reviews-true"> <span id="ratings-wrapper" class="js-pdp-nav-sec" data-link-nav="#defRevPDP" source="infogram" onclick="Snapdeal.pdpReview.displayReviewsWithRatingFilter(this,4,\'default\');" title="Read 13 reviews for 4-star ratings"> <span class="lfloat">4 Star</span> <span class="barover review-bar xola" style="width:83.14569536423842px"></span> <span>118</span> </span> </div> <div class="row" style="cursor:default" title="No reviews for 3-star ratings"> <span class="lfloat">3 Star</span> <span class="barover review-bar xola" style="width:45.397350993377486px"></span> <span>61</span> </div> <div class="row reviews-true"> <span id="ratings-wrapper" class="js-pdp-nav-sec" data-link-nav="#defRevPDP" source="infogram" onclick="Snapdeal.pdpReview.displayReviewsWithRatingFilter(this,2,\'default\');" title="Read 1 reviews for 2-star ratings"> <span class="lfloat">2 Star</span> <span class="barover review-bar xola" style="width:12.94701986754967px"></span> <span>12</span> </span> </div> <div class="row reviews-true"> <span id="ratings-wrapper" class="js-pdp-nav-sec" data-link-nav="#defRevPDP" source="infogram" onclick="Snapdeal.pdpReview.displayReviewsWithRatingFilter(this,1,\'default\');" title="Read 3 reviews for 1-star ratings"> <span class="lfloat">1 Star</span> <span class="barover review-bar xola" style="width:52.01986754966888px"></span> <span>71</span> </span> </div> </div> </div> <div class="clear"></div></div>';
  return _fakeData;
}

function _getAdditionalRatingOpts(pogId, _target) {
  var url = '/review/stats/' + pogId;
  var _url = 'https://www.snapdeal.com/review/stats/' + pogId;
  _axios2.default.get(_url).then(function (response) {
    var data = response.data;
    console.log('_getAdditionalRatingOpts data: ', data);
    _target.innerHTML = data;
  }).catch(function (err) {
    console.log('err in axios _getAdditionalRatingOpts req: ', err);
  });
}

exports.default = _showAdditionalRatingOpts;