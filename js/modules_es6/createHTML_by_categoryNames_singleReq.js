
import Blazy from 'blazy';

import MobPlatformCheck from './MobPlatformCheck';
import _showAdditionalRatingOpts from './_showAdditionalRatingOpts';
import fadeIn_active from './fadeIn_active';
import fadeOut_inactive from './fadeOut_inactive';

function isISObject(obj){
  return obj && obj !== 'null' && obj !== 'undefined';
}

const createHTML_by_categoryNames = (O_O, dataForRender) => {

  //console.log('dataForRender: ', dataForRender);
  const {firstUrl} = O_O;
  const {pogIdList_arr} = O_O;
  const {nonPromise} = O_O;
  const {showSoldOut_g} = O_O;
  const {finalHTML} = O_O;
  const {dom_categoryNames} = O_O;
  dataForRender.forEach((this_innerArr, index, arr) => {
    if(!this_innerArr || this_innerArr.length <= 0){ return; }
    else {
      let categoryName = null;
      let unit_HTML;
      categoryName = this_innerArr[0].eventId;
      unit_HTML = this_innerArr.map((item) => {

        //discountinued ~ do NOT render
        if(isISObject(item.commonMinProductDetailsDTO) || item.pogId){
          if(item.commonMinProductDetailsDTO.priceInfo == null){
              console.log('discountinued pogId: ', item.pogId);
              return;
          }
        }

        //soldOut ~ do NOT render
        if(isLegit_pogId_item(item)){
          if(item.commonMinProductDetailsDTO.soldOut === true && showSoldOut_g !== true){
            //console.log('NOT SHOWING - soldOut items ~ pogId: ', item.pogId);
            return;
          }
        }
        if(categoryName.indexOf('bankOfferBannerX99') > -1 || categoryName.indexOf('FooterBannerX99') > -1){
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
    }
  });
  if(nonPromise === true){
    //console.log('finalHTML: ', finalHTML);
    finalHTML.forEach((e, i) => {
        let wrapper_dom = document.getElementById(dom_categoryNames[i]);
        wrapper_dom.innerHTML = finalHTML[i].join('');
    });

    //run lazyLoad
    setTimeout(function(){
      var blazy = new Blazy({
        loadInvisible: true
      });
    }, 100);
  }
  else {
      myFastdomX99.mutate(function() {
          finalHTML.forEach((e, i) => {
              let wrapper_dom = document.getElementById(dom_categoryNames[i]);
              wrapper_dom.innerHTML = finalHTML[i].join('');
          });
        })
        .then(function () {
          //run functions that require init after ajax success here
          var blazy = new Blazy({
              loadInvisible: true
            });
          fadeIn_active();
        })
        .catch(function (err) {
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

    if(isLegit_vendorDTO_item(item)){
      var price = item.commonMinProductDetailsDTO.priceInfo.finalPrice;
      var sdPlus = item.commonMinProductDetailsDTO.vendorDTO.sdPlus;
      if(userDefined_priceSlab && userDefined_sdPlus){
        if(!sdPlus || price > userDefined_priceSlab){
          return true;
        }
        else {
          return false;
        }
      }
      else if(userDefined_priceSlab){
        if(price > userDefined_priceSlab){
          return true;
        }
      }
      else if(userDefined_sdPlus){
        //console.log('item pogId:', item.pogId);
        if(!sdPlus){
          return true;
        }
      }
      else {
        return false;
      }
    }
  }

  function isLegit_pogId_item(item){
    if(isISObject(item.commonMinProductDetailsDTO) && isISObject(item.commonMinProductDetailsDTO.priceInfo)){
      return true;
    }
    else {
      return false;
    }
  }

  function isLegit_vendorDTO_item(item){
    if(isLegit_pogId_item(item) && isISObject(item.commonMinProductDetailsDTO.vendorDTO)){
        return true;
    }
    else {
      return false;
    }
  }

  //BannerX99
  function _setHTML_BannerX99(item) {
    //addClass ~ invisX99
    return ('<li class="invisX99 OfferUnitX99 BannerX99_unit responsiveFontSizeX99 pad06_vertical " ' +  _setDataOfferFilter_filter(item)+ '>' +
            _setHTML_offerUnit_href(item) +
            _setHTML_offerStripUnit_offerImageOnly(item) +
            _setHTML_offerUnit_href_closing() +
            '</li>');
  }

  //defaultOfferLiUnit
  function _setHTML_defaultOfferLiUnit(item) {
    if(query_sdPlus_priceSlab(item)){
      return '';
    }
    return ('<li class="invisX99 OfferUnitX99 OffersContentBoxLi ' + _setClassName_categoryName(item) + '" ' + _setID_pogId(item) +  _setDataOfferFilter_filter(item)+'>' +
      _setHTML_offerUnit_innerContWrap(item) +
        _set_SoldOUt_ModuleX99_mod(item) +
        _setHTML_offerUnit_href(item) +
          _setHTML_offerUnit_href_afterWrap() +
            _setHTML_offerUnit_offerImageOnly(item) +

              _setHTML_offerUnit_nonImgContWrap() +
                    _setHTML_offerUnit_title(item) +
                    _setHTML_offerUnit_priceTaglineDiscountWrap_rel(item) +
                    _setHTML_offerUnit_ratingWrap(item) +
                  _setHTML_offerUnit_nonImgContWrap_closing() +

          _setHTML_offerUnit_href_afterWrap_closing() +
        _setHTML_offerUnit_href_closing() +
      _setHTML_offerUnit_innerContWrap_closing() +
      '</li>');
  }

  //dodSuperDeals
  function _setHTML_dodSuperDeals(item) {
    if(query_sdPlus_priceSlab(item)){
      return;
    }
    //console.log('setHTML_superDod running!');
    return ('<li class="invisX99 OfferUnitX99 dodSuperDeal_unit offerUnits_2_2 dodSuperDealUnit_ev' + _setClassName_categoryName(item) + '"' + _setID_pogId(item) +  _setDataOfferFilter_filter(item)+ '>' +
    _setHTML_offerUnit_innerContWrap(item) +
      _set_SoldOUt_ModuleX99_mod(item) +
      _setHTML_offerUnit_href(item) +
        _setHTML_offerUnit_href_afterWrap() +
            _setHTML_offerUnit_offerImageOnly(item) +
            _setHTML_offerUnit_nonImgContWrap() +
              setHTML_wrapCenterCont() +
                setHTML_centeredContX() +
                    _setHTML_offerUnit_title(item) +
                    _setHTML_offerUnit_priceTaglineDiscountWrap_rel(item) +
                    _setHTML_offerUnit_ratingWrap(item) +
                setHTML_centeredContX_closing() +
              setHTML_wrapCenterCont_closing() +
            _setHTML_offerUnit_nonImgContWrap_closing() +
        _setHTML_offerUnit_href_afterWrap_closing() +
      _setHTML_offerUnit_href_closing(item) +
    _setHTML_offerUnit_innerContWrap_closing() +
         '</li>');
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
    var landingUrl = '';
    if(MobPlatformCheck()){
      landingUrl = item.mobileLandingUrl?item.mobileLandingUrl:item.webLandingUrl;
    }
    else {
      //console.log('use web url. . .');
      landingUrl = item.webLandingUrl;
    }
    var aLink_Wrap = '<a target="_blank" href="' + landingUrl + '" class="offerUnit_href">';
    return aLink_Wrap;
  }

  function _setHTML_offerUnit_imgWrapOnly(item) {
    if (!item.offerName || item.offerName === null) {
      item.offerName = 'Image';
    }
    let offerImageUrl;
    if(isLegit_pogId_item(item)){
        offerImageUrl = item.commonMinProductDetailsDTO.imgs[0];
    }
    else {
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
    return ('<div class="offerUnit_imgWrapOnly">' + '<img class="offerUnit_img OfferImg b-lazy" data-src="' + offerImageUrl + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="' + item.offerName + '" />' + '</div>');

  }

  function _setHTML_offerUnit_href_closing(item) {
    return '</a>';
  }

  function _setHTML_offerUnit_innerContWrap(item) {
    if(item.pogId && item.pogId !== ''|| item.pogId !== null && item.pogId !== ''){
      var i_pogId = 'i_' + item.pogId;
      return '<div class="offerUnit_innerContWrap" id="' + i_pogId + '">';
    }
    else {
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
    let offerImageUrl, userDefined_offerImageUrl;
    if(MobPlatformCheck()){
      userDefined_offerImageUrl = item.mobileOfferImageUrl;
    }
    else {
      userDefined_offerImageUrl = item.webOfferImageUrl;
    }
    offerImageUrl = userDefined_offerImageUrl;
    var blazy_img = '<img class="offerUnit_img OfferImg b-lazy" data-src="' + offerImageUrl + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="' + item.offerName + '" />' ;
    return ('<div class="offerStripUnit_offerImageOnly">' + blazy_img + '</div>');
  }

  function _setHTML_offerUnit_offerImageOnly(item) {

      if (!item.offerName || item.offerName === null) {
          item.offerName = '';
      }
      let offerImageUrl, userDefined_offerImageUrl, sdgold;
      if(MobPlatformCheck()){
        userDefined_offerImageUrl = item.mobileOfferImageUrl;
      }
      else {
        userDefined_offerImageUrl = item.webOfferImageUrl;
      }

      if(isLegit_pogId_item(item)){
          offerImageUrl = userDefined_offerImageUrl?userDefined_offerImageUrl:item.commonMinProductDetailsDTO.imgs[0];
          sdgold = item.commonMinProductDetailsDTO.vendorDTO.sdgold;
      }
      else {
          offerImageUrl = userDefined_offerImageUrl;
      }
      var sdPlusLogo = '<div class="offerUnit_sdPlusWrap_abs"></div>';
      var blazy_img = '<img class="offerUnit_img OfferImg b-lazy" data-src="' + offerImageUrl + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="' + item.offerName + '" />' ;
      var nonLazy_img =  '<img class="offerUnit_img nonLazyX99 OfferImg"' +  'src="'+offerImageUrl +'" ' +  'alt="' + item.offerName + '" />';

      if(sdgold){
        return ('<div class="offerUnit_imgWrap_sdPlusInc_rel">' + sdPlusLogo + blazy_img + '</div>');
      }
      else {
        return ('<div class="offerUnit_imgWrap_sdPlusInc_rel">' + blazy_img + '</div>');
      }
  }

  function _setHTML_offerUnit_nonImgContWrap() {
      return '<div class="offerUnit_nonImgContWrap">';
  }

  function _setHTML_offerUnit_title(item) {
    let title;
    if(isLegit_pogId_item(item)){
      title = item.offerName? item.offerName:item.commonMinProductDetailsDTO.title;
    }
    else {
      title = item.offerName;
    }
      return '<div class="offerUnit_title twoLine_TitleX99">' + title + '</div>';
  }

  function _set_SoldOUt_ModuleX99_mod(item) {
      var soldOut_Wrap = '<div class="offerUnit_Soldout"><div class="offerUnit_Soldout_btn">SOLD OUT</div></div>';
      var soldOut_Wrap_displayOn = '<div class="offerUnit_Soldout" style="display: block;"><div class="offerUnit_Soldout_btn">SOLD OUT</div></div>';
      if(isLegit_pogId_item(item)){
        const soldOut = item.commonMinProductDetailsDTO.soldOut;
          if(soldOut === true){
            //console.log('show soldOut item.pogId: ', item.pogId);
            //var id_parent_offerUnit = item.pogId;
            //var dom_id_parent_offerUnit = document.getElementById(id_parent_offerUnit);

            if(showSoldOut_g === true){
              console.log('show soldOut. . .');
                return soldOut_Wrap_displayOn;
            }
            else {
                //do not render soldOut
                return '';
            }
          }

          else {
            return '';
          }
      }
      else {
        return '';
      }
  }

  function _setHTML_offerUnit_priceTaglineDiscountWrap_rel(item) {

    //const OfferDiscount_Wrap = '<div class="offerUnit_discountWrap">' + _setHTML_discount(item) + '</div>';
    const OfferDiscount_Wrap = '<div class="offerUnit_discountWrap">' + _setHTML_discount(item) + '</div>';
    const offerUnit_priceTaglineWrap_rel = '<div class="offerUnit_priceTaglineWrap_rel">';
    const offerUnit_priceTaglineWrap_rel_closing = '</div>';

    function _setHTML_price_mrp(item) {
        const price = item.commonMinProductDetailsDTO.priceInfo.finalPrice;
        const mrp = item.commonMinProductDetailsDTO.priceInfo.mrp;
        const price_mrp_price_frags = '<div class="offerUnit_priceWrap"><span class="offerUnit_priceWrapAll"><span class="offerUnit_price">Rs. ' + mrp + '</span>' + '<span class="offerUnit_displayPrice">Rs. ' + price + '</span></span>' + '</div>';
        const price_only_frags = '<div class="offerUnit_priceWrap"><span class="offerUnit_priceWrapAll"><span class="offerUnit_displayPrice">Rs. ' + price + '</span></span>' + '</div>';

        if(price == mrp){
          return price_only_frags;
        }
        else {
          return price_mrp_price_frags;
        }
    }

    function _setHTML_discount(item) {
      //console.log('_setHTML_discount runnng. . .');
      if(!isLegit_pogId_item(item)){
        return '';
      }
      else {
        //console.log('legit pogId item. . .');
        const discount = item.commonMinProductDetailsDTO.priceInfo.discount;
        //console.log('typeof discount: ', typeof discount);
        if (!discount || discount === null || discount === 0) {
            //console.log('discount not defined. . .');
            return '';
        } else {
            //console.log('discount: ', discount);
            const offerUnit_discount = '<div class="offerUnit_discount">' + discount + '% Off </div>';

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
      const tagline = item.extraField1;
      const tagLineFragments = '<div class="offerUnit_taglineWrap"><div class="offerUnit_tagline">' + tagline + '</div></div>';
      return tagLineFragments;
    }

    if(isLegit_pogId_item(item)){
      //price & discount
      return offerUnit_priceTaglineWrap_rel + _setHTML_price_mrp(item) + OfferDiscount_Wrap + offerUnit_priceTaglineWrap_rel_closing;

      }

    else {
      //tagLine
      return offerUnit_priceTaglineWrap_rel + _setHTML_tagline(item) + offerUnit_priceTaglineWrap_rel_closing;
    }

  }

  function _setHTML_offerUnit_ratingWrap(item) {
      //console.log('_setHTML_offerUnit_ratingWrap running. . .');
      const rating_Wrap = '<div class="offerUnit_ratingWrap" '+ _setDataPogId_rating(item) +'>';
      if(!isLegit_pogId_item(item)){
        return rating_Wrap + '</div>';
      }
      else {
          return setHTML_avgRating_noOfreviews(item);
      }

      function setHTML_ratingFrags(avgRating_val) {
        return (
            '<div class="offerUnit_rating_rel">' +'<div class="ratingBG_disabled"></div>' +
            '<div class="ratingBG_active" style="width:' + avgRating_val + 'px;"></div></div>'
          );
      }

      function setHTML_noOfReviewsFrags(noOfReviews) {
        return (
            '<span class="numberRevsX">(' + noOfReviews + ')</span>'
          );
      }

      function setHTML_avgRating_noOfreviews(item) {
          if(item.commonMinProductDetailsDTO.avgRating == 'undefined' || !item.commonMinProductDetailsDTO.avgRating){
            return rating_Wrap + '</div>';
          }

          if (item.commonMinProductDetailsDTO.avgRating) {
              const avgRating = item.commonMinProductDetailsDTO.avgRating;
              const avgRating_val = setRating(avgRating);
              //console.log('avgRating_val: ', avgRating_val);
              if (item.commonMinProductDetailsDTO.noOfreviews) {
                  const noOfReviews = item.commonMinProductDetailsDTO.noOfreviews;
                  //console.log('noOfReviews: ' + noOfReviews);
                  return (rating_Wrap +  _setHTML_toolTipAddlRating() + setHTML_ratingFrags(avgRating_val) + setHTML_noOfReviewsFrags(noOfReviews) + '</div>');
              }
              return (rating_Wrap +  _setHTML_toolTipAddlRating() + setHTML_ratingFrags(avgRating_val) + '</div>');
          }
          else {
              return (rating_Wrap + '</div>');
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
        widthFactor = ((((val_Stringed / 5) * 100) / 100) * width);
        widthFactor = Math.round(widthFactor * 10) / 10;
        return widthFactor;
      }
  }

  function _setHTML_wrap_saveAmt(item) {

    const wrap_saveAmt = '<div class="wrap_saveAmt">';
    const wrap_saveAmt_closing = '</div>';

      if(!isLegit_pogId_item(item)){
        return wrap_saveAmt + wrap_saveAmt_closing;
      }


      let price, mrp;

      if(item.commonMinProductDetailsDTO.priceInfo.finalPrice){
          price = item.commonMinProductDetailsDTO.priceInfo.finalPrice;
      }
      if(item.commonMinProductDetailsDTO.priceInfo.mrp){
        mrp = item.commonMinProductDetailsDTO.priceInfo.mrp;
      }

      if(price && mrp && price < mrp){
        const saveAmt = mrp - price;
        return (wrap_saveAmt + 'You save Rs. ' + '<span>' + saveAmt + '</span>' + wrap_saveAmt_closing);
      }
      else {
          return (wrap_saveAmt + wrap_saveAmt_closing);
      }

  }

  function _setHTML_offerUnit_nonImgContWrap_closing() {
      return '</div>';
  }

  function _setHTML_offerUnit_innerContWrap_closing() {
    return '</div>';
  }

  function _setClassName_categoryName(item) {
   if(item.extraField1){
      return item.extraField1;
    }
    else {
      return '';
    }
  }

  function toArraySanitisedFilterTags (tagString){
   var regex = new RegExp(',', 'g');
   var str_sanitised = tagString.replace(regex, '');
   return str_sanitised.split(' ');
  }

  function _setDataOfferFilter_filter(item) {
   if(item.filters){
      const filterTags_array = toArraySanitisedFilterTags(item.filters);
      //console.log('filterTags_array: ', filterTags_array);
      var filters = '';
      //return item.extraField1;
      filterTags_array.forEach(e => (filters+=e+' '));
      //console.log('filters: ', filters);
      return (' data-offerfilter="' +  filters + '"');
    }
    else {
      return '';
    }
  }

  function _setID_pogId(item) {

    if(item.pogId === null || !item.pogId){

      return '';
    }
    else if(item.pogId){

      return ('id="' + item.pogId + '"');
    }
    else {
      return '';
    }
  }

  function _setDataPogId_rating(item) {
    //console.log('_setDataPogId_rating running. . .');
    if(item.pogId === null || !item.pogId){

      return '';
    }
    else if(item.pogId){

      return ('data-pogId="' + item.pogId + '"');
    }
    else {
      return '';
    }
  }

  function _setHTML_toolTipAddlRating() {
    return (`<div class="toolTip-box-outer sdTooltipWrapper col-lg-15 col-md-19 col-xs-15 infodata" ><div class="loadingX99_wrapper"><div class="loadingX99"></div></div></div>`);
  }

};

export default createHTML_by_categoryNames;
