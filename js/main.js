//polyfill es6-promise
require('es6-promise').polyfill();
import XHR_req from './modules/XHR_req';
import axios from 'axios';
var fastdom = require('fastdom');
import userAgentCheck_nonPromise from './modules/userAgentCheck_nonPromise';
import domQuery_getIds_updateContainers from './modules/domQuery_getIds_updateContainers';
import Use_firstResponseData from './modules/Use_firstResponseData_singleReq';
import SocialShare_page from './modules/SocialShare_page';
import TimerX99 from './modules/TimerX99';
import fadeOut_inactive from './modules/fadeOut_inactive';
import {preLoader_animation} from './modules/fadeOut_inactive';
//expose
window.TimerX99 = TimerX99;

//console.log('createHTML_by_categoryNames: ', createHTML_by_categoryNames);
//global vars - expose these
const nonPromise = userAgentCheck_nonPromise();
//const nonPromise = false;
//console.log('nonPromise - :', nonPromise);
//const showSoldOut_g = false;
const finalHTML = [];
const dataForRender = [];
const dom_categoryNames = [];
const firstResponseData = [];
const secondResponseData = [];
const pogIdList_arr = [];
const dataLen = 0;
let firstUrl = '';
let Url_secondReq = '';
let myFastdom;

class AjaxPageApp {
  constructor(options){
    if(!options){
      options = {};
    }
    this.url = options.url?options.url:'';
    firstUrl = this.url;
    this.parentWrapper_id = options.parentWrapper_id?options.parentWrapper_id:'mainWrapperX_newX999';
    this.timerOfferUnits = options.timerOfferUnits?options.timerOfferUnits: false;
    this.showSoldOut_g = options.showSoldOut_g?options.showSoldOut_g: false;
    window.showSoldOut_g = this.showSoldOut_g;//global expose
  }

  init(){
    domQuery_getIds_updateContainers('offers_WrapperX99', dom_categoryNames, dataForRender, finalHTML);
    const O_O = {
      firstResponseData,
      dom_categoryNames,
      dataForRender,
      nonPromise,
      showSoldOut_g,
      finalHTML,
      pogIdList_arr,
      firstUrl,
      secondResponseData,
      dataLen,
      Url_secondReq
    };

    //XHR_req(this.url,function(data){Use_firstResponseData(data, O_O);});
    if(nonPromise){
      console.log('running raw xhr. . .');
      XHR_req(this.url,function(data){Use_firstResponseData(data, O_O);});
    }
    else {
        preLoader_animation();
        //fadeOut_inactive();
        window.myFastdomX99 = fastdom.extend(fastdomPromised);
        console.log('running axios. . .');
        axios.get(this.url)
          .then(function (response) {
            let data = response.data;
            Use_firstResponseData(data, O_O);
          })
          .catch(function (err) {
            console.log('err in axios first req: ', err);
          });
    }

  }
  get_url(){
    return this.url;
  }
  get_showSoldOut_g(){
    console.log('get_showSoldOut_g running. . .');
    return this.showSoldOut_g;
  }

}

window.AjaxPageApp = AjaxPageApp;
