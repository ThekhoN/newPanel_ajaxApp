'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _createHTML_by_categoryNames = require('./createHTML_by_categoryNames');

var _createHTML_by_categoryNames2 = _interopRequireDefault(_createHTML_by_categoryNames);

var _XHR_req = require('./XHR_req');

var _XHR_req2 = _interopRequireDefault(_XHR_req);

var _getUrl_secondRequest = require('./getUrl_secondRequest');

var _getUrl_secondRequest2 = _interopRequireDefault(_getUrl_secondRequest);

var _updated_ResponseData = require('./updated_ResponseData');

var _updated_ResponseData2 = _interopRequireDefault(_updated_ResponseData);

var _update_dataForRender = require('./update_dataForRender');

var _update_dataForRender2 = _interopRequireDefault(_update_dataForRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function updated_dataForRender_firstResponse(data, O_O) {
  var firstResponseData = O_O.firstResponseData;
  var dom_categoryNames = O_O.dom_categoryNames;
  var dataForRender = O_O.dataForRender;


  (0, _updated_ResponseData2.default)(data, firstResponseData).forEach(function (item) {
    dom_categoryNames.forEach(function (this_categoryName, index) {
      if (item.categoryName == this_categoryName) {
        dataForRender[index].push(item);
      }
    });
  });

  return dataForRender;
}

function _update_pogIdList_arr(item, pogIdList_arr) {
  if (item.pogId) {
    pogIdList_arr.push(item.pogId);
  }
}

var Use_firstResponseData = function Use_firstResponseData(data, O_O) {

  console.log('data: ', data);
  var pogIdList_arr = O_O.pogIdList_arr;
  var firstUrl = O_O.firstUrl;
  var nonPromise = O_O.nonPromise;
  var secondResponseData = O_O.secondResponseData;
  var dom_categoryNames = O_O.dom_categoryNames;
  var dataLen = O_O.dataLen;


  dataLen = data.length;
  //console.log('updated dataLen: ', dataLen);
  data.forEach(function (item) {
    if (item.pogId) {
      pogIdList_arr.push(item.pogId);
    }
  });

  O_O.firstResponseData = (0, _updated_ResponseData2.default)(data, O_O);
  O_O.secondResponseData = [].concat(_toConsumableArray(O_O.firstResponseData));

  console.log('single req n render');
  (0, _createHTML_by_categoryNames2.default)(O_O, updated_dataForRender_firstResponse(data, O_O));

  /*
  if(pogIdList_arr.length < 1){
    console.log('single req n render');
    createHTML_by_categoryNames(O_O, updated_dataForRender_firstResponse(data, O_O));
  }
  else {
    //console.log('multi req n render');
    const Url_secondReq = getUrl_secondRequest(firstUrl, pogIdList_arr);
      // +++++ second request +++++ //
    if(nonPromise){
      XHR_req(Url_secondReq, function (data) {
        console.log('O_O inside second req: ', O_O);
        const {dataForRender} = O_O;
        update_dataForRender (data, O_O);
        createHTML_by_categoryNames(O_O, dataForRender);
      });
    }
    else {
      //console.log('second req not done');
      const {dataForRender} = O_O;
      update_dataForRender (data, O_O);
      createHTML_by_categoryNames(O_O, dataForRender);
      return ;
    }
  }
  */
};

exports.default = Use_firstResponseData;