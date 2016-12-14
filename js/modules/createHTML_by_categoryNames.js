'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blazy = require('blazy');

var _blazy2 = _interopRequireDefault(_blazy);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _getUrl_secondRequest = require('./getUrl_secondRequest');

var _getUrl_secondRequest2 = _interopRequireDefault(_getUrl_secondRequest);

var _update_dataForRender = require('./update_dataForRender');

var _update_dataForRender2 = _interopRequireDefault(_update_dataForRender);

var _userAgentCheck_android = require('./userAgentCheck_android442');

var _userAgentCheck_android2 = _interopRequireDefault(_userAgentCheck_android);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createHTML_by_categoryNames = function createHTML_by_categoryNames(O_O, dataForRender) {
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
        categoryName = this_innerArr[0].categoryName;
        unit_HTML = this_innerArr.map(function (item) {

          if (item.soldOut === true && showSoldOut_g !== true) {
            return;
          }
          if (categoryName.indexOf('BannerX99') > -1) {
            return setHTML_BannerX99(item);
          } else {
            return setHTML_defaultOfferLiUnit(item);
          }
        }).join('');
        finalHTML[index].push(unit_HTML);
      })();
    }
  });
  if (nonPromise === true) {
    finalHTML.forEach(function (e, i) {
      var wrapper_dom = document.getElementById(dom_categoryNames[i]);
      wrapper_dom.innerHTML = finalHTML[i].join('');
    });
  } else {
    myFastdomX99.mutate(function () {
      finalHTML.forEach(function (e, i) {
        var wrapper_dom = document.getElementById(dom_categoryNames[i]);
        wrapper_dom.innerHTML = finalHTML[i].join('');
      });
    }).then(function () {
      var blazy = new _blazy2.default({
        loadInvisible: true
      });
      if (pogIdList_arr.length < 1) {
        return;
      } else {
        var Url_secondReq = (0, _getUrl_secondRequest2.default)(firstUrl, pogIdList_arr);
        if ((0, _userAgentCheck_android2.default)()) {
          Url_secondReq = 'https://m.snapdeal.com/acors/json/getProductById?pogIds=' + pogIdList_arr.join(',');
        }
        _axios2.default.get(Url_secondReq).then(function (response) {
          var data = response.data;
          data.forEach(function (item) {
            var pogId = item.id;
            var append_target = 'i_' + pogId;
            setHTMLContentAll_fastdomPromised(append_target, item);
          });
        }).catch(function (err) {
          console.log('err in axios second req: ', err);
        });
      }
    }).catch(function (err) {
      console.log('error in fastdom setHTML: ', err);
    });
  }

  //run lazyLoad
  setTimeout(function () {
    var blazy = new _blazy2.default({
      loadInvisible: true
    });
  }, 100);

  //template
  //setHTML utils
  //BannerX99
  function setHTML_BannerX99(item) {
    return '<li class="BannerX99_unit responsiveFontSizeX99 pad06_vertical ">' + setHTML_offerUnit_href(item) + setHTML_offerUnit_imgWrapOnly(item) + setHTML_offerUnit_href_closing(item) + '</li>';
  }

  //defaultOfferLiUnit
  function setHTML_defaultOfferLiUnit(item) {
    //console.log('setHTML_defaultOfferLiUnit running!');
    return '<li class=" OffersContentBoxLi ' + setClassName_categoryName(item) + ' ' + setClassName_filterTag(item) + '"' + setID_pogId(item) + '>' + setHTML_offerUnit_innerContWrap(item) + set_SoldOUt_ModuleX99_mod(item) + setHTML_offerUnit_href(item) + setHTML_offerUnit_href_afterWrap() + setHTML_offerUnit_offerImageOnly(item) + setHTML_offerUnit_nonImgContWrap() + setHTML_offerUnit_title(item) + setHTML_offerUnit_priceTaglineDiscountWrap_rel(item) + setHTML_offerUnit_ratingWrap(item) +
    //saveAmt
    setHTML_wrap_saveAmt(item) + setHTML_offerUnit_nonImgContWrap_closing() + setHTML_offerUnit_href_afterWrap_closing() + setHTML_offerUnit_href_closing(item) + setHTML_offerUnit_innerContWrap_closing() + '</li>';
  }

  //setHTML frags
  function setHTML_offerUnit_href(item) {
    if (!item) {
      return;
    }
    var aLink_Wrap = '<a target="_blank" href="' + item.offerPageUrl + '" class="offerUnit_href">';
    if (item.offerPageUrl) {
      return aLink_Wrap;
    } else {
      return '';
    }
  }

  function setHTML_offerUnit_imgWrapOnly(item) {
    if (!item.offerName || item.offerName === null) {
      item.offerName = 'Image';
    }
    if (nonPromise === true) {
      return '<div class="offerUnit_imgWrapOnly">' + '<img class="offerUnit_img nonLazyX99 OfferImg" src="' + item.offerImageUrl + '" alt="' + item.offerName + '" />' + '</div>';
    } else {
      return '<div class="offerUnit_imgWrapOnly">' + '<img class="offerUnit_img OfferImg b-lazy" data-src="' + item.offerImageUrl + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="' + item.offerName + '" />' + '</div>';
    }
  }

  function setHTML_offerUnit_href_closing(item) {
    if (item.offerPageUrl) {
      return '</a>';
    } else {
      return '';
    }
  }

  function setHTML_offerUnit_innerContWrap(item) {
    //console.log('setHTML_offerUnit_innerContWrap is running!');
    if (item.pogId && item.pogId !== '' || item.pogId !== null && item.pogId !== '') {
      var i_pogId = 'i_' + item.pogId;
      return '<div class="offerUnit_innerContWrap" id="' + i_pogId + '">';
    } else {
      return '<div class="offerUnit_innerContWrap ">';
    }
  }

  function setHTML_offerUnit_href_afterWrap() {
    return '<div class="offerUnit_href_afterWrap">';
  }

  function setHTML_offerUnit_href_afterWrap_closing() {
    return '</div>';
  }

  function setHTML_offerUnit_offerImageOnly(item) {

    if (!item.offerName || item.offerName === null) {
      item.offerName = '';
    }

    var sdPlusLogo = '<div class="offerUnit_sdPlusWrap_abs"></div>';
    var blazy_img = '<img class="offerUnit_img OfferImg b-lazy" data-src="' + item.offerImageUrl + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="' + item.offerName + '" />';
    var nonLazy_img = '<img class="offerUnit_img nonLazyX99 OfferImg"' + 'src="' + item.offerImageUrl + '" ' + 'alt="' + item.offerName + '" />';

    if (nonPromise === true) {
      if (item.sdGold === true) {
        return '<div class="offerUnit_imgWrap_sdPlusInc_rel">' + sdPlusLogo + nonLazy_img + '</div>';
      } else {
        return '<div class="offerUnit_imgWrap_sdPlusInc_rel">' + nonLazy_img + '</div>';
      }
    } else {
      if (item.sdGold === true) {
        return '<div class="offerUnit_imgWrap_sdPlusInc_rel">' + sdPlusLogo + blazy_img + '</div>';
      } else {
        return '<div class="offerUnit_imgWrap_sdPlusInc_rel">' + blazy_img + '</div>';
      }
    }
  }

  function setHTML_offerUnit_nonImgContWrap() {
    return '<div class="offerUnit_nonImgContWrap">';
  }

  function setHTML_offerUnit_title(item) {
    return '<div class="offerUnit_title twoLine_TitleX99">' + item.offerName + '</div>';
  }

  function set_SoldOUt_ModuleX99_mod(item) {
    var soldOut_Wrap = '<div class="offerUnit_Soldout"><div class="offerUnit_Soldout_btn">SOLD OUT</div></div>';
    var soldOut_Wrap_displayOn = '<div class="offerUnit_Soldout" style="display: block;"><div class="offerUnit_Soldout_btn">SOLD OUT</div></div>';
    if (item.pogId) {

      if (nonPromise === true) {
        if (item.soldOut === true) {
          console.log('soldOut item.pogId: ', item.pogId);
          var id_parent_offerUnit = item.pogId;
          var dom_id_parent_offerUnit = document.getElementById(id_parent_offerUnit);
          //console.log('dom_id_parent_offerUnit: ', dom_id_parent_offerUnit);

          if (showSoldOut_g === true) {
            return soldOut_Wrap_displayOn;
          } else {
            //do not render soldOut
            return '';
          }
        } else {
          return '';
        }
      } else {
        return soldOut_Wrap;
      }
    } else {
      return '';
    }
  }

  function setHTML_offerUnit_priceTaglineDiscountWrap_rel(item) {
    //console.log('setHTML_offerUnit_priceTaglineDiscountWrap_rel is running!');
    //console.log('item inside: ', item);
    var OfferDiscount_Wrap = '<div class="offerUnit_discountWrap">' + setHTMLContent_offerUnit_discount_nonPromise(item) + '</div>';
    var offerUnit_priceTaglineWrap_rel = '<div class="offerUnit_priceTaglineWrap_rel">';
    var tagLineFragments = '<div class="offerUnit_taglineWrap"><div class="offerUnit_tagline">' + item.tagLine + '</div></div>';
    var priceContXFragments = '<div class="offerUnit_priceWrap"><span class="offerUnit_priceWrapAll"><span class="offerUnit_price">' + set_Rs_Price(item) + '</span>' + '<span class="offerUnit_displayPrice">' + set_Rs_displayPrice(item) + '</span></span>' + '</div>';
    var displayPriceOnlyFragments = '<div class="offerUnit_priceWrap"><span class="offerUnit_priceWrapAll"><span class="offerUnit_displayPrice">' + set_Rs_displayPrice(item) + '</span></span>' + '</div>';

    var _priceContXFragments = '<div class="offerUnit_priceWrap"><span class="offerUnit_priceWrapAll"><span class="offerUnit_price">' + '</span>' + '<span class="offerUnit_displayPrice">' + '</span></span>' + '</div>';
    var _displayPriceOnlyFragments = '<div class="offerUnit_priceWrap"><span class="offerUnit_priceWrapAll"><span class="offerUnit_displayPrice">' + '</span></span>' + '</div>';
    var _OfferDiscount_Wrap = '<div class="offerUnit_discountWrap">' + '</div>';

    function setHTMLContent_offerUnit_discount_nonPromise(item) {

      var discount = item.discount;
      var item_priceSlab;

      if (item.priceSlab) {
        item_priceSlab = item.priceSlab.toLowerCase();
      }
      if (!discount || discount === null || discount === 0) {
        return '';
      } else {
        var offerUnit_discount = '<div class="offerUnit_discount">' + discount + '% Off </div>';

        if (discount < 10) {
          if (updateDiscount_IfMatchX(item) || item_priceSlab == "true") {
            return offerUnit_discount;
          } else {
            return '';
          }
        } else {
          return offerUnit_discount;
        }
      }
    }

    function priceOrTagline_dom(item) {
      if (!item.pogId) {
        //console.log('pogId not defined!');
        if (item.tagLine) {
          return offerUnit_priceTaglineWrap_rel + tagLineFragments + '</div>';
        } else {
          return offerUnit_priceTaglineWrap_rel + '</div>';
        }
      } else {
        return offerUnit_priceTaglineWrap_rel + priceContXFragments + OfferDiscount_Wrap + '</div>';
      }
    }

    function _priceOrTagline_dom(item) {
      if (!item.pogId) {
        //console.log('pogId not defined!');
        if (item.tagLine) {
          return offerUnit_priceTaglineWrap_rel + tagLineFragments + '</div>';
        } else {
          return offerUnit_priceTaglineWrap_rel + '</div>';
        }
      } else {
        return offerUnit_priceTaglineWrap_rel + _priceContXFragments + _OfferDiscount_Wrap + '</div>';
      }
    }

    if (nonPromise === true) {
      return priceOrTagline_dom(item);
    } else {
      return _priceOrTagline_dom(item);
    }
  }

  function updateDiscount_IfMatchX(item) {
    if (!item) {
      return false;
    }
    var labelUrl = item._labelUrl;
    if (!labelUrl) {
      return false;
    }
    if (labelUrl.match(/refurbished|mobiles-mobile-phones|mobiles-tablets/g)) {
      return true;
    }
  }

  function setHTML_offerUnit_ratingWrap(item) {
    //console.log('setHTML_offerUnit_ratingWrap running!');
    //console.log('item: ', item);
    var ifRatingDefined_dom_V = ifRatingDefined_dom(item);
    var setRating_V = setRating(item);
    var rating_Wrap = '<div class="offerUnit_ratingWrap">';
    var ratingFragments = '<div class="offerUnit_rating_rel"><div class="ratingBG_disabled"></div>' + '<div class="ratingBG_active" style="width:' + setRating_V + 'px;"></div></div>';
    var reviewsFragments = '<span class="numberRevsX">(' + item._noOfReviews + ')</span>';

    function ifRatingDefined_dom(item) {
      if (item.avgRating) {
        //console.log('item.avgRating: ', item.avgRating);
        if (item._noOfReviews) {
          ratingFragments += reviewsFragments;
        }
        return rating_Wrap + ratingFragments + '</div>';
      } else {
        return rating_Wrap + '</div>';
      }
    }

    function setRating(item) {
      if (item.avgRating) {
        var val = item.avgRating,
            val_Stringed = val.toString(),
            widthFactor = 0,
            width = 70;
        if (val < 1 || val > 5) {
          return false;
        }
        widthFactor = val_Stringed / 5 * 100 / 100 * width;
        widthFactor = Math.round(widthFactor * 10) / 10;
        return widthFactor;
      } else {
        return;
      }
    }
    if (nonPromise === true) {
      return ifRatingDefined_dom(item);
    } else {
      return rating_Wrap + '</div>';
    }

    //
    //set_StarRatings_and_Reviews_ModuleX99
  }

  function setHTML_wrap_saveAmt(item) {
    //console.log('item: ', item);
    var wrap_saveAmt = '<div class="wrap_saveAmt">';
    var wrap_saveAmt_closing = '</div>';
    if (item.displayPrice < item.price) {
      var saveAmt = item.price - item.displayPrice;
      return wrap_saveAmt + 'You save Rs. ' + '<span>' + saveAmt + '</span>' + wrap_saveAmt_closing;
    } else {
      return wrap_saveAmt + wrap_saveAmt_closing;
    }
  }

  function setHTML_offerUnit_nonImgContWrap_closing() {
    return '</div>';
  }

  function setHTML_offerUnit_innerContWrap_closing() {
    return '</div>';
  }

  function setClassName_categoryName(item) {
    if (item.categoryName) {
      return item.categoryName;
    } else {
      return '';
    }
  }

  function setClassName_filterTag(item) {
    if (item.highlights) {
      return item.highlights;
    } else {
      return '';
    }
  }

  function setID_pogId(item) {
    //console.log('setID_pogId running');
    if (item.pogId === null || !item.pogId) {
      //console.log('pogId not found, do not run setID_pogId!');
      return '';
    } else if (item.pogId) {
      //console.log('running setID_pogId');
      //console.log('item.pogId: ', item.pogId);
      return 'id="' + item.pogId + '"';
    } else {
      return '';
    }
  }

  function set_Rs_Price(item) {
    //console.log('set_Rs_Price running!');
    if (!item) {
      return '';
    }
    if (item.price) {
      //console.log('item.price: ', item.price);
      if (item.price === 'null') {
        console.log(item.pogId, ': has price as null');
        return '';
      }

      return 'Rs. ' + item.price;
    } else {
      return '';
    }
  }

  function set_Rs_displayPrice(item) {
    //console.log('set_Rs_displayPrice running!');
    if (!item) {
      return '';
    }
    if (item.displayPrice) {
      if (item.displayPrice === 'null') {
        console.log(item.pogId, ': has price as null');
        return '';
      }

      return 'Rs. ' + item.displayPrice;
    } else {
      return '';
    }
  }

  // +++++ setHTMLContent_promises +++++ //

  // +++++ setHTMLContentMain +++++ //
  function setHTML_fastdom(target, htmlContent) {
    if (!target) {
      console.log('setHTML_fastdom method: target not found or undefined!');
      return;
    }
    fastdom.mutate(function () {
      target.innerHTML = htmlContent;
    });
  }

  //price
  function setHTMLContent_price(DOM_append_target, item) {
    //data
    var displayPrice = item.displayPrice;
    var price = item.price;
    //dom selectors
    var dom_offerUnit_price = DOM_append_target.querySelector('.offerUnit_price');
    var dom_offerUnit_displayPrice = DOM_append_target.querySelector('.offerUnit_displayPrice');

    //functions
    var price_html = set_Rs_Price(item);
    var displayPrice_html = set_Rs_displayPrice(item);

    //console.log('item.price: ', item.price);
    //console.log('item.displayPrice: ', item.price);
    //console.log('dom_offerUnit_price: ', dom_offerUnit_price);


    setHTML_fastdom(dom_offerUnit_price, price_html);
    setHTML_fastdom(dom_offerUnit_displayPrice, displayPrice_html);

    if (price == displayPrice || price < displayPrice) {
      if (dom_offerUnit_price) {
        dom_offerUnit_price.style.display = 'none';
      }
      if (dom_offerUnit_displayPrice) {
        dom_offerUnit_displayPrice.style.float = 'left';
      }
    }
  }

  //discount
  function setHTMLContent_discount(DOM_append_target, item) {
    //console.log('setHTMLContent_discount running!');
    //data
    var discount = item.discount;
    var item_priceSlab;
    var dom_offerUnit_discountWrap = DOM_append_target.querySelector('.offerUnit_discountWrap');
    //console.log('dom_offerUnit_discountWrap: ', dom_offerUnit_discountWrap);

    if (item.priceSlab) {
      item_priceSlab = item.priceSlab.toLowerCase();
    }
    if (!discount || discount === null || discount === 0) {
      return;
    } else {
      var offerUnit_discount = '<div class="offerUnit_discount">' + discount + '% Off </div>';

      if (discount < 10) {
        if (updateDiscount_IfMatchX(item) || item_priceSlab == "true") {
          setHTML_fastdom(dom_offerUnit_discountWrap, offerUnit_discount);
        } else {
          return;
        }
      } else {
        setHTML_fastdom(dom_offerUnit_discountWrap, offerUnit_discount);
      }
    }
  }

  //rating
  function setHTMLContent_rating(DOM_append_target, item) {
    //console.log('setHTMLContent_price running!');
    //data
    var rating = item.avgRating;
    var noOfRatingsOrReviews = '';
    if (rating === 0) {
      //console.log('avgRating was 0 for: ' + item.id);
      return;
    }
    if (item.noOfReviews) {
      noOfRatingsOrReviews = item.noOfReviews;
    } else if (item.noOfRatings) {
      noOfRatingsOrReviews = item.noOfRatings;
    }

    //dom selectors
    var dom_offerUnit_ratingWrap = DOM_append_target.querySelector('.offerUnit_ratingWrap');

    //functions
    function setRating(item) {
      if (item.avgRating) {
        var val = item.avgRating,
            val_Stringed = val.toString(),
            widthFactor = 0,
            width = 70;
        if (val < 1 || val > 5) {
          return false;
        }
        widthFactor = val_Stringed / 5 * 100 / 100 * width;
        widthFactor = Math.round(widthFactor * 10) / 10;
        return widthFactor;
      } else {
        return;
      }
    }
    //set data
    var setRating_V = setRating(item);
    //console.log('setRating_V: ', setRating_V);
    var ratingFragments = '<div class="offerUnit_rating_rel"><div class="ratingBG_disabled"></div>' + '<div class="ratingBG_active" style="width:' + setRating_V + 'px;"></div></div>';
    var reviewsFragments = '<span class="numberRevsX">(' + noOfRatingsOrReviews + ')</span>';

    if (rating > 0 || rating !== null) {
      if (noOfRatingsOrReviews > 0 || noOfRatingsOrReviews !== null || noOfRatingsOrReviews !== '') {
        var rating_reviews_html = ratingFragments + reviewsFragments;
        setHTML_fastdom(dom_offerUnit_ratingWrap, rating_reviews_html);
      } else {
        setHTML_fastdom(dom_offerUnit_ratingWrap, ratingFragments);
      }
    }
  }

  //saveAmt
  function setHTMLContent_saveAmt(DOM_append_target, item) {
    //console.log('setHTMLContent_saveAmt is running!');
    var dom_offerUnit_discountWrap = DOM_append_target.querySelector('.wrap_saveAmt');

    if (item.price && item.displayPrice) {
      var saveAmt = item.price - item.displayPrice;
      var saveAmt_html = 'You save Rs. ' + '<span>' + saveAmt + '</span>';
      if (saveAmt > 0) {
        setHTML_fastdom(dom_offerUnit_discountWrap, saveAmt_html);
      } else {
        return;
      }
    } else {
      return;
    }
  }

  //sdGold
  function setHTMLContent_sdGold(DOM_append_target, item) {
    //console.log('setHTMLContent_sdGold is running!');
    var dom_offerUnit_imgWrap_sdPlusInc_rel = DOM_append_target.querySelector('.offerUnit_imgWrap_sdPlusInc_rel');
    //console.log('dom_offerUnit_imgWrap_sdPlusInc_rel: ', dom_offerUnit_imgWrap_sdPlusInc_rel);

    if (item.sdGold === true) {
      //console.log('sdGold is true for: ', item.id);
      var sdElem = document.createElement('div');
      sdElem.setAttribute('class', 'offerUnit_sdPlusWrap_abs');
      dom_offerUnit_imgWrap_sdPlusInc_rel.appendChild(sdElem);
    } else {
      return;
    }
  }

  //ignore JSHint Error
  function setHTMLContent_soldOut(DOM_append_target, item) {
    //console.log('showSoldOut_g inside setHTMLContent_soldOut: ', showSoldOut_g);
    var dom_offerUnit_Soldout = DOM_append_target.querySelector('.offerUnit_Soldout');
    var dom_offerUnit_href = DOM_append_target.querySelector('offerUnit_href');
    var id_parent_offerUnit = item.id;
    var dom_id_parent_offerUnit = document.getElementById(id_parent_offerUnit);

    if (showSoldOut_g === true) {
      // +++++ show soldOut if soldOut +++++ //
      if (item.soldOut === true) {
        //disable hoverStyleX99 && set soldOutX99
        if (dom_id_parent_offerUnit) {
          dom_id_parent_offerUnit.classList.remove('hoverStyleX99');
          dom_id_parent_offerUnit.classList.add('soldOutX99');
        }
        //show soldOut
        if (dom_offerUnit_Soldout) {
          dom_offerUnit_Soldout.style.display = 'block';
        } else {
          console.log('.offerUnit_Soldout not found for ' + item.id);
        }
      }
      // +++++ /show soldOut if soldOut +++++ //
    } else {
      if (item.soldOut === true) {
        // +++++ removeSoldOutParentUnit +++++ //
        if (dom_id_parent_offerUnit) {
          dom_id_parent_offerUnit.parentNode.removeChild(dom_id_parent_offerUnit);
        }
        //console.log(item.id + ' was sold out');
        //if dod
        if (document.getElementsByClassName('superDeals_centered')) {
          var dom_superDeals_centered = document.getElementsByClassName('superDeals_centered');
          for (var i = 0; i < dom_superDeals_centered.length; i++) {
            var this_dom_superDeals_centered = dom_superDeals_centered[i];
            //element.children.length > 0
            if (this_dom_superDeals_centered.children.length < 1) {
              console.log('no child elements found!');
              //var parentOfThisEmptyOne = this_dom_superDeals_centered
              var parentOfThisEmptyOne = getClick_targetClass_elem(this_dom_superDeals_centered, 'dodSuperDealUnit_ev');
              //console.log('parentOfThisEmptyOne was found and removed: ', parentOfThisEmptyOne);
              parentOfThisEmptyOne.parentNode.removeChild(parentOfThisEmptyOne);
              if (!parentOfThisEmptyOne || parentOfThisEmptyOne === null) {
                console.log('parentOfThisEmptyOne not found: ', parentOfThisEmptyOne);
                return;
              }
            }
          }
        }
        // +++++ /removeSoldOutParentUnit +++++ //
      }
    }
  }

  function setHTMLContentAll_fastdomPromised(append_target, item) {
    //console.log('setHTMLContentAll_fastdomPromised running!');
    var DOM_append_target = document.getElementById(append_target);

    //console.log('DOM_append_target: ', DOM_append_target);
    if (!DOM_append_target || DOM_append_target == 'null') {
      console.log('DOM_append_target was not found, check to ensure templates are correctly defined!');
      return;
    }
    //settingRender
    setHTMLContent_price(DOM_append_target, item);
    setHTMLContent_discount(DOM_append_target, item);
    setHTMLContent_rating(DOM_append_target, item);
    setHTMLContent_saveAmt(DOM_append_target, item);
    setHTMLContent_sdGold(DOM_append_target, item);
    setHTMLContent_soldOut(DOM_append_target, item);
  }

  // +++++ /setHTMLContent_promises +++++ //
};

//TODO
/*
ensure same conditions are followed for setting data
nonPromise / !nonPromise
*/

exports.default = createHTML_by_categoryNames;