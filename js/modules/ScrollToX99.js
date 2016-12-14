'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollToX99 = function () {
    function ScrollToX99(opts) {
        _classCallCheck(this, ScrollToX99);

        if (!opts) {
            opts = {};
        }
        this.navClass = opts.navClass ? opts.navClass : 'navX99';
        this.dataTarget = opts.dataTarget ? opts.dataTarget : 'data-target';
        this.activeClass = opts.activeClass ? opts.activeClass : 'activeX99';
        this.offset = opts.offset ? opts.offset : '0';
        this.easing = opts.easing ? opts.easing : 'linear';
        this.duration = opts.duration ? opts.duration : 700;
    }

    _createClass(ScrollToX99, [{
        key: 'init',
        value: function init() {
            console.log('ScrollToX99 is running. . .');

            var navClass = this.navClass;
            var dataTarget = this.dataTarget;
            var activeClass = this.activeClass;
            var offset = this.offset;
            var easing = this.easing;
            var duration = this.duration;

            // opts validation
            if (typeof offset !== 'string') {
                console.log('offset must be of type string');return;
            }

            var dom_navClass = document.getElementsByClassName(navClass);

            //inner vars
            var targetId = void 0,
                dom_targetId = void 0,
                target_topOffset = void 0;

            dom_navClass.forEach(function (nav, i) {
                nav.addEventListener('click', function (e) {
                    var clicked_navClass = getClick_navClass_elem(e.target, navClass);
                    if (!clicked_navClass || clicked_navClass === null) {
                        console.log('clicked_navClass not found!');
                        return;
                    }
                    //toggleClass
                    dom_navClass.forEach(function (_nav, _i) {
                        _nav.classList.remove(activeClass);
                    });
                    clicked_navClass.classList.add(activeClass);

                    //scrollTo
                    if (!clicked_navClass.hasAttribute(dataTarget)) {
                        console.log('clicked_navClass does not have attribute', dataTarget);
                        return;
                    }
                    e.preventDefault();
                    e.stopPropagation();

                    targetId = clicked_navClass.getAttribute(dataTarget);
                    dom_targetId = document.getElementById(targetId);
                    if (!dom_targetId) {
                        console.log('element with this id not found in dom');return;
                    } else {
                        target_topOffset = dom_targetId.offsetTop;
                        if (offset) {
                            if (offset.indexOf('-')) {
                                target_topOffset = target_topOffset - Number(offset);
                            } else {
                                target_topOffset = target_topOffset + Number(offset);
                            }
                        }
                        //run scrollTo
                        scrollTo_Y({
                            scrollTargetY: 0,
                            speed: duration,
                            easing: easing
                        });
                    }
                }, false);
            });
        }
    }]);

    return ScrollToX99;
}();

function getClick_navClass_elem(elem, navClass) {
    if (elem.classList.contains(navClass)) {
        return elem;
    } else {
        return findParentWithClass(elem, navClass);
    }
}

function findParentWithClass(el, className) {
    while (el.parentNode) {
        el = el.parentNode;
        if (el.className === className) return el;
    }
    return null;
}

window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
}();

var scrollTo_Y = function scrollTo_Y() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    //internal opts
    var scrollTargetY = opts.scrollTarget ? opts.scrollTarget : 0;
    var speed = opts.speed ? opts.speed : 2000;
    var easing = opts.easing ? opts.easing : 'easeOutSine';

    //internal vars
    var scrollY = window.scrollY || document.documentElement.scrollTop;
    var currentTime = 0;
    var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));
    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var easingEquations = {
        linear: function linear(pos) {
            return pos;
        },
        easeOutSine: function easeOutSine(pos) {
            return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: function easeInOutSine(pos) {
            return -0.5 * (Math.cos(Math.PI * pos) - 1);
        },
        easeInOutQuint: function easeInOutQuint(pos) {
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 5);
            }
            return 0.5 * (Math.pow(pos - 2, 5) + 2);
        }
    };

    var tick = function tick() {
        currentTime += 1 / 60;
        var p = currentTime / time;
        var t = easingEquations[easing](p);
        if (p < 1) {
            requestAnimFrame(tick);
            window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
        } else {
            //console.log('scroll done');
            window.scrollTo(0, scrollTargetY);
        }
    };
    tick();
};