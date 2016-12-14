'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blazy = require('blazy');

var _blazy2 = _interopRequireDefault(_blazy);

var _MobPlatformCheck = require('./MobPlatformCheck');

var _MobPlatformCheck2 = _interopRequireDefault(_MobPlatformCheck);

var _showAdditionalRatingOpts2 = require('./_showAdditionalRatingOpts');

var _showAdditionalRatingOpts3 = _interopRequireDefault(_showAdditionalRatingOpts2);

var _fadeIn_active = require('./fadeIn_active');

var _fadeIn_active2 = _interopRequireDefault(_fadeIn_active);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import fadeOut_inactive from './fadeOut_inactive';

function isISObject(obj) {
  return obj && obj !== 'null' && obj !== 'undefined';
}

var _w_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var createHTML_by_categoryNames = function createHTML_by_categoryNames(O_O, dataForRender) {

  //console.log('dataForRender: ', dataForRender);
  var firstUrl = O_O.firstUrl;
  var pogIdList_arr = O_O.pogIdList_arr;
  var nonPromise = O_O.nonPromise;
  var showSoldOut_g = O_O.showSoldOut_g;
  var finalHTML = O_O.finalHTML;
  var dom_categoryNames = O_O.dom_categoryNames;

  dataForRender.forEach(function (this_innerArr, index, arr) {
    if (!this_innerArr || this_innerArr.length <= 0) {
      return;
    } else {
      (function () {
        var categoryName = null;
        var unit_HTML = void 0;
        categoryName = this_innerArr[0].eventId;
        unit_HTML = this_innerArr.map(function (item) {
          //const soldOut = item.commonMinProductDetailsDTO.soldOut;

          if (isLegit_pogId_item(item)) {
            if (item.commonMinProductDetailsDTO.soldOut === true && showSoldOut_g !== true) {
              //console.log('NOT SHOWING - soldOut items ~ pogId: ', item.pogId);
              return;
            }
          }
          if (categoryName.indexOf('bankOfferBannerX99') > -1) {
            return _setHTML_BannerX99(item);
          }
          if (categoryName.indexOf('DealofDayOffers') > -1) {
            return _setHTML_defaultOfferLiUnit(item);
          }
          if (categoryName.indexOf('superDod') > -1) {
            return _setHTML_dodSuperDeals(item);
          }
        }).join('');
        finalHTML[index].push(unit_HTML);
      })();
    }
  });
  if (nonPromise === true) {
    //console.log('finalHTML: ', finalHTML);
    finalHTML.forEach(function (e, i) {
      var wrapper_dom = document.getElementById(dom_categoryNames[i]);
      wrapper_dom.innerHTML = finalHTML[i].join('');
    });

    //run lazyLoad
    setTimeout(function () {
      var blazy = new _blazy2.default({
        loadInvisible: true
      });
    }, 100);
  } else {
    myFastdomX99.mutate(function () {

      finalHTML.forEach(function (e, i) {
        var wrapper_dom = document.getElementById(dom_categoryNames[i]);
        wrapper_dom.innerHTML = finalHTML[i].join('');
      });
    }).then(function () {
      //run functions that require init after ajax success here
      //fook
      var blazy = new _blazy2.default({
        loadInvisible: true
      });
      if (!(0, _MobPlatformCheck2.default)()) {//only on web
        //_showAdditionalRatingOpts();
      }
    }).then(function () {
      //fadeOut_inactive();
      setTimeout(function () {
        (0, _fadeIn_active2.default)();
      }, 10);
    }).catch(function (err) {
      console.log('error in fastdom setHTML: ', err);
    });
  }
  //template
  //setHTML utils

  //pre conditions prior to render
  //pogId item
  //priceSlab ~ item.extraField2
  //sdPlus State ~ item.extraField3
  function query_sdPlus_priceSlab(item) {
    //console.log('query_sdPlus_priceSlab running. . .');
    var userDefined_priceSlab = parseInt(item.extraField2);
    var userDefined_sdPlus = item.extraField3;

    if (isLegit_vendorDTO_item(item)) {
      var price = item.commonMinProductDetailsDTO.priceInfo.finalPrice;
      var sdPlus = item.commonMinProductDetailsDTO.vendorDTO.sdPlus;
      if (userDefined_priceSlab && userDefined_sdPlus) {
        if (!sdPlus || price > userDefined_priceSlab) {
          return true;
        } else {
          return false;
        }
      } else if (userDefined_priceSlab) {
        if (price > userDefined_priceSlab) {
          return true;
        }
      } else if (userDefined_sdPlus) {
        //console.log('item pogId:', item.pogId);
        if (!sdPlus) {
          return true;
        }
      } else {
        return false;
      }
    }
  }

  function isLegit_pogId_item(item) {
    if (isISObject(item.commonMinProductDetailsDTO) && isISObject(item.commonMinProductDetailsDTO.priceInfo)) {
      return true;
    } else {
      return false;
    }
  }

  function isLegit_vendorDTO_item(item) {
    if (isLegit_pogId_item(item) && isISObject(item.commonMinProductDetailsDTO.vendorDTO)) {
      return true;
    } else {
      return false;
    }
  }

  //BannerX99
  function _setHTML_BannerX99(item) {
    return '<li class="invisX99 OfferUnitX99 BannerX99_unit responsiveFontSizeX99 pad06_vertical ">' + _setHTML_offerUnit_href(item) + _setHTML_offerStripUnit_offerImageOnly(item) + _setHTML_offerUnit_href_closing() + '</li>';
  }

  //defaultOfferLiUnit
  function _setHTML_defaultOfferLiUnit(item) {
    if (query_sdPlus_priceSlab(item)) {
      return '';
    }
    return '<li class="invisX99 OfferUnitX99 OffersContentBoxLi ' + _setClassName_categoryName(item) + '" ' + _setID_pogId(item) + '>' + _setHTML_offerUnit_innerContWrap(item) + _set_SoldOUt_ModuleX99_mod(item) + _setHTML_offerUnit_href(item) + _setHTML_offerUnit_href_afterWrap() + _setHTML_offerUnit_offerImageOnly(item) + _setHTML_offerUnit_nonImgContWrap() + _setHTML_offerUnit_title(item) + _setHTML_offerUnit_priceTaglineDiscountWrap_rel(item) + _setHTML_offerUnit_ratingWrap(item) + _setHTML_wrap_saveAmt(item) + _setHTML_offerUnit_nonImgContWrap_closing() + _setHTML_offerUnit_href_afterWrap_closing() + _setHTML_offerUnit_href_closing() + _setHTML_offerUnit_innerContWrap_closing() + '</li>';
  }

  //dodSuperDeals
  function _setHTML_dodSuperDeals(item) {
    if (query_sdPlus_priceSlab(item)) {
      return;
    }
    //console.log('setHTML_superDod running!');
    return '<li class="invisX99 OfferUnitX99 dodSuperDeal_unit offerUnits_2_2 dodSuperDealUnit_ev' + _setClassName_categoryName(item) + '"' + _setID_pogId(item) + '>' + _setHTML_offerUnit_innerContWrap(item) + _set_SoldOUt_ModuleX99_mod(item) + _setHTML_offerUnit_href(item) + _setHTML_offerUnit_href_afterWrap() + _setHTML_offerUnit_offerImageOnly(item) + _setHTML_offerUnit_nonImgContWrap() + setHTML_wrapCenterCont() + setHTML_centeredContX() + _setHTML_offerUnit_title(item) + _setHTML_offerUnit_priceTaglineDiscountWrap_rel(item) + _setHTML_offerUnit_ratingWrap(item) + _setHTML_wrap_saveAmt(item) + setHTML_centeredContX_closing() + setHTML_wrapCenterCont_closing() + _setHTML_offerUnit_nonImgContWrap_closing() + _setHTML_offerUnit_href_afterWrap_closing() + _setHTML_offerUnit_href_closing(item) + _setHTML_offerUnit_innerContWrap_closing() + '</li>';
  }

  //setHTML frags
  function setHTML_wrapCenterCont() {
    return '<div class="wrapCenterCont">';
  }

  function setHTML_wrapCenterCont_closing() {
    return '</div>';
  }

  function setHTML_centeredContX() {
    return '<div class="centeredContX">';
  }

  function setHTML_centeredContX_closing() {
    return '</div>';
  }

  function _setHTML_offerUnit_href(item) {
    if (!item) {
      return;
    }
    var aLink_Wrap = '<a target="_blank" href="' + item.webLandingUrl + '" class="offerUnit_href">';
    if (item.webLandingUrl) {
      return aLink_Wrap;
    } else {
      return '';
    }
  }

  function _setHTML_offerUnit_imgWrapOnly(item) {
    if (!item.offerName || item.offerName === null) {
      item.offerName = 'Image';
    }
    var offerImageUrl = void 0;
    if (isLegit_pogId_item(item)) {
      offerImageUrl = item.commonMinProductDetailsDTO.imgs[0];
    } else {
      offerImageUrl = item.webOfferImageUrl;
    }

    /*
    if(nonPromise === true){
      return ('<div class="offerUnit_imgWrapOnly">' + '<img class="offerUnit_img nonLazyX99 OfferImg" src="' + offerImageUrl + '" alt="' + item.offerName + '" />' + '</div>');
    }
    else {
      return ('<div class="offerUnit_imgWrapOnly">' + '<img class="offerUnit_img OfferImg b-lazy" data-src="' + offerImageUrl + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="' + item.offerName + '" />' + '</div>');
    }
    */
    return '<div class="offerUnit_imgWrapOnly">' + '<img class="offerUnit_img OfferImg b-lazy" data-src="' + offerImageUrl + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="' + item.offerName + '" />' + '</div>';
  }

  function _setHTML_offerUnit_href_closing(item) {
    return '</a>';
  }

  function _setHTML_offerUnit_innerContWrap(item) {
    if (item.pogId && item.pogId !== '' || item.pogId !== null && item.pogId !== '') {
      var i_pogId = 'i_' + item.pogId;
      return '<div class="offerUnit_innerContWrap" id="' + i_pogId + '">';
    } else {
      return '<div class="offerUnit_innerContWrap ">';
    }
  }

  function _setHTML_offerUnit_href_afterWrap() {
    return '<div class="offerUnit_href_afterWrap">';
  }

  function _setHTML_offerUnit_href_afterWrap_closing() {
    return '</div>';
  }

  //bankStrips, Banners
  function _setHTML_offerStripUnit_offerImageOnly(item) {
    if (!item.offerName || item.offerName === null) {
      item.offerName = '';
    }
    var offerImageUrl = void 0,
        userDefined_offerImageUrl = void 0;
    if ((0, _MobPlatformCheck2.default)()) {
      userDefined_offerImageUrl = item.mobileOfferImageUrl;
    } else {
      userDefined_offerImageUrl = item.webOfferImageUrl;
    }
    offerImageUrl = userDefined_offerImageUrl;
    var blazy_img = '<img class="offerUnit_img OfferImg b-lazy" data-src="' + offerImageUrl + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="' + item.offerName + '" />';
    return '<div class="offerStripUnit_offerImageOnly">' + blazy_img + '</div>';
  }

  function _setHTML_offerUnit_offerImageOnly(item) {

    if (!item.offerName || item.offerName === null) {
      item.offerName = '';
    }
    var offerImageUrl = void 0,
        userDefined_offerImageUrl = void 0,
        sdgold = void 0;
    if ((0, _MobPlatformCheck2.default)()) {
      userDefined_offerImageUrl = item.mobileOfferImageUrl;
    } else {
      userDefined_offerImageUrl = item.webOfferImageUrl;
    }

    if (isLegit_pogId_item(item)) {
      offerImageUrl = userDefined_offerImageUrl ? userDefined_offerImageUrl : item.commonMinProductDetailsDTO.imgs[0];
      sdgold = item.commonMinProductDetailsDTO.vendorDTO.sdgold;
    } else {
      offerImageUrl = userDefined_offerImageUrl;
    }
    var sdPlusLogo = '<div class="offerUnit_sdPlusWrap_abs"></div>';
    var blazy_img = '<img class="offerUnit_img OfferImg b-lazy" data-src="' + offerImageUrl + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="' + item.offerName + '" />';
    var nonLazy_img = '<img class="offerUnit_img nonLazyX99 OfferImg"' + 'src="' + offerImageUrl + '" ' + 'alt="' + item.offerName + '" />';

    if (sdgold) {
      return '<div class="offerUnit_imgWrap_sdPlusInc_rel">' + sdPlusLogo + blazy_img + '</div>';
    } else {
      return '<div class="offerUnit_imgWrap_sdPlusInc_rel">' + blazy_img + '</div>';
    }
    /*
    if(nonPromise === true){
      if(sdgold){
        return ('<div class="offerUnit_imgWrap_sdPlusInc_rel">' + sdPlusLogo + nonLazy_img + '</div>');
      }
      else {
        return ('<div class="offerUnit_imgWrap_sdPlusInc_rel">' + nonLazy_img + '</div>');
      }
    }
    else {
      if(sdgold){
        return ('<div class="offerUnit_imgWrap_sdPlusInc_rel">' + sdPlusLogo + blazy_img + '</div>');
      }
      else {
        return ('<div class="offerUnit_imgWrap_sdPlusInc_rel">' + blazy_img + '</div>');
      }
    }
    */
  }

  function _setHTML_offerUnit_nonImgContWrap() {
    return '<div class="offerUnit_nonImgContWrap">';
  }

  function _setHTML_offerUnit_title(item) {
    var title = void 0;
    if (isLegit_pogId_item(item)) {
      title = item.offerName ? item.offerName : item.commonMinProductDetailsDTO.title;
    } else {
      title = item.offerName;
    }
    return '<div class="offerUnit_title twoLine_TitleX99">' + title + '</div>';
  }

  function _set_SoldOUt_ModuleX99_mod(item) {
    var soldOut_Wrap = '<div class="offerUnit_Soldout"><div class="offerUnit_Soldout_btn">SOLD OUT</div></div>';
    var soldOut_Wrap_displayOn = '<div class="offerUnit_Soldout" style="display: block;"><div class="offerUnit_Soldout_btn">SOLD OUT</div></div>';
    if (isLegit_pogId_item(item)) {
      var soldOut = item.commonMinProductDetailsDTO.soldOut;
      if (soldOut === true) {
        //console.log('show soldOut item.pogId: ', item.pogId);
        //var id_parent_offerUnit = item.pogId;
        //var dom_id_parent_offerUnit = document.getElementById(id_parent_offerUnit);

        if (showSoldOut_g === true) {
          console.log('show soldOut. . .');
          return soldOut_Wrap_displayOn;
        } else {
          //do not render soldOut
          return '';
        }
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  function _setHTML_offerUnit_priceTaglineDiscountWrap_rel(item) {

    //const OfferDiscount_Wrap = '<div class="offerUnit_discountWrap">' + _setHTML_discount(item) + '</div>';
    var OfferDiscount_Wrap = '<div class="offerUnit_discountWrap">' + _setHTML_discount(item) + '</div>';
    var offerUnit_priceTaglineWrap_rel = '<div class="offerUnit_priceTaglineWrap_rel">';
    var offerUnit_priceTaglineWrap_rel_closing = '</div>';

    function _setHTML_price_mrp(item) {
      var price = item.commonMinProductDetailsDTO.priceInfo.finalPrice;
      var mrp = item.commonMinProductDetailsDTO.priceInfo.mrp;
      var price_mrp_price_frags = '<div class="offerUnit_priceWrap"><span class="offerUnit_priceWrapAll"><span class="offerUnit_price">Rs. ' + mrp + '</span>' + '<span class="offerUnit_displayPrice">Rs. ' + price + '</span></span>' + '</div>';
      var price_only_frags = '<div class="offerUnit_priceWrap"><span class="offerUnit_priceWrapAll"><span class="offerUnit_displayPrice">Rs. ' + price + '</span></span>' + '</div>';

      if (price == mrp) {
        return price_only_frags;
      } else {
        return price_mrp_price_frags;
      }
    }

    function _setHTML_discount(item) {
      //console.log('_setHTML_discount runnng. . .');
      if (!isLegit_pogId_item(item)) {
        return '';
      } else {
        //console.log('legit pogId item. . .');
        var discount = item.commonMinProductDetailsDTO.priceInfo.discount;
        //console.log('typeof discount: ', typeof discount);
        if (!discount || discount === null || discount === 0) {
          //console.log('discount not defined. . .');
          return '';
        } else {
          //console.log('discount: ', discount);
          var offerUnit_discount = '<div class="offerUnit_discount">' + discount + '% Off </div>';

          if (discount > 10) {
            //return offerUnit_discount;
            return offerUnit_discount;
          } else {
            return '';
          }
        }
      }
    }

    function _setHTML_tagline(item) {
      var tagline = item.extraField1;
      var tagLineFragments = '<div class="offerUnit_taglineWrap"><div class="offerUnit_tagline">' + tagline + '</div></div>';
      return tagLineFragments;
    }

    if (isLegit_pogId_item(item)) {
      //price & discount
      return offerUnit_priceTaglineWrap_rel + _setHTML_price_mrp(item) + OfferDiscount_Wrap + offerUnit_priceTaglineWrap_rel_closing;
    } else {
      //tagLine
      return offerUnit_priceTaglineWrap_rel + _setHTML_tagline(item) + offerUnit_priceTaglineWrap_rel_closing;
    }
  }

  function _setHTML_offerUnit_ratingWrap(item) {
    //console.log('_setHTML_offerUnit_ratingWrap running. . .');
    var rating_Wrap = '<div class="offerUnit_ratingWrap" ' + _setDataPogId_rating(item) + '>';
    if (!isLegit_pogId_item(item)) {
      return rating_Wrap + '</div>';
    } else {
      return setHTML_avgRating_noOfreviews(item);
    }

    function setHTML_ratingFrags(avgRating_val) {
      return '<div class="offerUnit_rating_rel">' + '<div class="ratingBG_disabled"></div>' + '<div class="ratingBG_active" style="width:' + avgRating_val + 'px;"></div></div>';
    }

    function setHTML_noOfReviewsFrags(noOfReviews) {
      return '<span class="numberRevsX">(' + noOfReviews + ')</span>';
    }

    function setHTML_avgRating_noOfreviews(item) {
      if (item.commonMinProductDetailsDTO.avgRating == 'undefined' || !item.commonMinProductDetailsDTO.avgRating) {
        return rating_Wrap + '</div>';
      }

      if (item.commonMinProductDetailsDTO.avgRating) {
        var avgRating = item.commonMinProductDetailsDTO.avgRating;
        var avgRating_val = setRating(avgRating);
        //console.log('avgRating_val: ', avgRating_val);
        if (item.commonMinProductDetailsDTO.noOfreviews) {
          var noOfReviews = item.commonMinProductDetailsDTO.noOfreviews;
          //console.log('noOfReviews: ' + noOfReviews);
          return rating_Wrap + _setHTML_toolTipAddlRating() + setHTML_ratingFrags(avgRating_val) + setHTML_noOfReviewsFrags(noOfReviews) + '</div>';
        }
        return rating_Wrap + _setHTML_toolTipAddlRating() + setHTML_ratingFrags(avgRating_val) + '</div>';
      } else {
        return rating_Wrap + '</div>';
      }
    }

    function setRating(rating) {
      //console.log('setRating is running . . .');
      var val = rating,
          val_Stringed = val.toString(),
          widthFactor = 0,
          width = 70;
      if (val < 1 || val > 5) {
        return false;
      }
      widthFactor = val_Stringed / 5 * 100 / 100 * width;
      widthFactor = Math.round(widthFactor * 10) / 10;
      return widthFactor;
    }
  }

  function _setHTML_wrap_saveAmt(item) {

    var wrap_saveAmt = '<div class="wrap_saveAmt">';
    var wrap_saveAmt_closing = '</div>';

    if (!isLegit_pogId_item(item)) {
      return wrap_saveAmt + wrap_saveAmt_closing;
    }

    var price = void 0,
        mrp = void 0;

    if (item.commonMinProductDetailsDTO.priceInfo.finalPrice) {
      price = item.commonMinProductDetailsDTO.priceInfo.finalPrice;
    }
    if (item.commonMinProductDetailsDTO.priceInfo.mrp) {
      mrp = item.commonMinProductDetailsDTO.priceInfo.mrp;
    }

    if (price && mrp && price < mrp) {
      var saveAmt = mrp - price;
      return wrap_saveAmt + 'You save Rs. ' + '<span>' + saveAmt + '</span>' + wrap_saveAmt_closing;
    } else {
      return wrap_saveAmt + wrap_saveAmt_closing;
    }
  }

  function _setHTML_offerUnit_nonImgContWrap_closing() {
    return '</div>';
  }

  function _setHTML_offerUnit_innerContWrap_closing() {
    return '</div>';
  }

  function _setClassName_categoryName(item) {
    if (item.extraField1) {
      return item.extraField1;
    } else {
      return '';
    }
  }

  function _setID_pogId(item) {

    if (item.pogId === null || !item.pogId) {

      return '';
    } else if (item.pogId) {

      return 'id="' + item.pogId + '"';
    } else {
      return '';
    }
  }

  function _setDataPogId_rating(item) {
    //console.log('_setDataPogId_rating running. . .');
    if (item.pogId === null || !item.pogId) {

      return '';
    } else if (item.pogId) {

      return 'data-pogId="' + item.pogId + '"';
    } else {
      return '';
    }
  }

  function _setHTML_toolTipAddlRating() {
    return '<div class="toolTip-box-outer sdTooltipWrapper col-lg-15 col-md-19 col-xs-15 infodata" ><div class="loadingX99_wrapper"><div class="loadingX99"></div></div></div>';
  }
};

exports.default = createHTML_by_categoryNames;