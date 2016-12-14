'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _createHTML_by_categoryNames_singleReq = require('./createHTML_by_categoryNames_singleReq');

var _createHTML_by_categoryNames_singleReq2 = _interopRequireDefault(_createHTML_by_categoryNames_singleReq);

var _XHR_req = require('./XHR_req');

var _XHR_req2 = _interopRequireDefault(_XHR_req);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updated_dataForRender_firstResponse(data, O_O) {
  var firstResponseData = O_O.firstResponseData;
  var dom_categoryNames = O_O.dom_categoryNames;
  var dataForRender = O_O.dataForRender;


  updated_ResponseData(data, firstResponseData).forEach(function (item) {
    dom_categoryNames.forEach(function (this_categoryName, index) {
      if (item.categoryName == this_categoryName) {
        dataForRender[index].push(item);
      }
    });
  });

  return dataForRender;
}

var Use_firstResponseData = function Use_firstResponseData(response, O_O) {
  var data = response.genericOfferItems;
  //console.log('firstResponseData: ', data);

  //const {pogIdList_arr} = O_O;
  var firstUrl = O_O.firstUrl;
  var nonPromise = O_O.nonPromise;
  var dataForRender = O_O.dataForRender;
  //const {secondResponseData} = O_O;

  var dom_categoryNames = O_O.dom_categoryNames;
  var dataLen = O_O.dataLen;

  dataLen = data.length;

  //console.log('dataLen: ', dataLen);
  //console.log('dom_categoryNames: ', dom_categoryNames);

  //update dataForRender
  data.forEach(function (offer) {
    dom_categoryNames.forEach(function (this_categoryName, index) {
      //console.log('offer.eventId: ', offer.eventId);
      if (offer.eventId == this_categoryName) {

        dataForRender[index].push(offer);
      }
    });
  });
  //console.log('updated dataForRender: ', dataForRender);
  //console.log('single req n render');
  (0, _createHTML_by_categoryNames_singleReq2.default)(O_O, dataForRender);

  //createHTML_by_categoryNames(O_O, updated_dataForRender_firstResponse(data, O_O));
};

exports.default = Use_firstResponseData;