"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var update_dataForRender = function update_dataForRender(data, O_O) {
  var secondResponseData = O_O.secondResponseData;


  data.forEach(function (item) {
    secondResponseData.forEach(function (_item) {
      if (item.id == _item.pogId) {
        _item.displayPrice = item.displayPrice;
        _item.price = item.price;
        _item.avgRating = item.avgRating;
        _item.noOfRatings = item.noOfRatings;
        _item.discount = item.discount;
        _item.labelUrl = item.labelUrl;
        _item.sdGold = item.sdGold;
        _item.soldOut = item.soldOut;
      }
    });
  });

  var dom_categoryNames = O_O.dom_categoryNames;
  var dataForRender = O_O.dataForRender;


  secondResponseData.forEach(function (item) {
    dom_categoryNames.forEach(function (dom_categoryName, i) {
      if (item.categoryName == dom_categoryName) {
        dataForRender[i].push(item);
      }
    });
  });
};

exports.default = update_dataForRender;