//
// clampify.min.js
//
! function (t) {
  var i = 0,
    s = 0,
    h = [],
    n = 100,
    e = function Clampify(t, s) {
      s = s || {};
      var h = ++i;
      this.t = function () {
        return h;
      }, this.i = t, this.i.clampify = this, this.s = t.innerHTML;
      var n = s.endsWith || "\u2026",
        e = s.endsWithClass || "clampify-end";
      this.h = s.removeEndChars || /[.,?!\/\\:\-\s]+$/, this.o = !s.hasOwnProperty("hideOverflowY") || !!s.hideOverflowY, this.u = !!s.appendToLastElement, this.l = !!s.lastElementDeepAppend, this.setMaxLines(s.maxLines), this.v = {
        overflowY: this.i.style.overflowY,
        maxHeight: this.i.style.maxHeight
      }, this.p(), n instanceof Node ? this.m = n.cloneNode(!0) : (this.m = document.createElement("span"), this.m.className = e, this.m.appendChild(document.createTextNode(n))), this.N = document.createElement("span"), this.g = document.createElement("span"), this.g.appendChild(this.N), s.autoUpdate && this.enableAutoUpdate();
    };
  if (e.setWindowResizeDelay = function (t) {
      n = t < 1 ? 1 : t;
    }, e.prototype.p = function () {
      if (this.A > 0) {
        var t = document.createElement("span");
        t.appendChild(document.createTextNode("\xa0")), this.i.innerHTML = "", this.i.appendChild(t);
        var i = this.i.offsetHeight || this.i.clientHeight,
          s = t.offsetHeight;
        this.M = Math.max(i, s) * this.A, this.resetContent(), this.$();
      } else this.M = this.i.offsetHeight || this.i.clientHeight;
    }, e.prototype.k = function () {
      return this.g.offsetHeight > this.M;
    }, e.prototype.$ = function () {
      this.o && (this.i.style.overflowY = "hidden"), this.i.style.maxHeight = this.M + "px";
    }, e.prototype.C = function () {
      this.i.style.overflowY = this.v.overflowY, this.i.style.maxHeight = this.v.maxHeight;
    }, e.prototype.I = function () {
      this.N.innerHTML = this.i.innerHTML, this.i.innerHTML = "", this.i.appendChild(this.g);
    }, e.prototype.L = function () {
      this.i.removeChild(this.g), this.i.innerHTML = this.N.innerHTML;
    }, e.prototype.T = function (t) {
      this.U = this.m.cloneNode(!0), this.Y = t, t.appendChild(this.U);
    }, e.prototype.H = function () {
      this.Y && this.U && this.Y.removeChild(this.U), this.O();
    }, e.prototype.O = function () {
      this.U = null, this.Y = null;
    }, e.prototype.j = function (t) {
      if (this.H(), this.u)
        if (Node.TEXT_NODE === t.nodeType) this.T(t.parentNode);
        else if (this.l) {
        for (var i = t; i.childNodes.length > 0 && Node.ELEMENT_NODE === i.lastChild.nodeType;) i = i.lastChild;
        this.T(i);
      } else this.T(t);
      else this.T(this.N);
    }, e.prototype.q = function (t) {
      return t.join(" ").replace(this.h, "");
    }, e.prototype.B = function (t) {
      if (t = t || this.N, Node.TEXT_NODE === t.nodeType) {
        var i = t.textContent.split(" ");
        for (t.textContent = this.q(i), this.j(t); this.k() && i.length > 0;) this.H(), i.pop(), t.textContent = this.q(i), this.j(t);
        if (this.H(), !t.textContent) {
          var s, h;
          t.previousSibling ? (s = t.previousSibling, t.parentNode.removeChild(t)) : (s = t.parentNode.previousSibling, (h = t.parentNode).parentNode.removeChild(h)), this.B(s);
        }
      } else {
        var n = t.cloneNode(!0);
        for (t.innerHTML = ""; n.childNodes.length > 0;) {
          var e, o = n.childNodes[0];
          if (t.appendChild(o), this.j(o), e = this.k(), this.H(), e) {
            this.B(o);
            break;
          }
        }
      }
    }, e.prototype.setMaxLines = function (t) {
      t = parseInt(t), this.A = isNaN(t) ? 0 : t;
    }, e.prototype.getMaxLines = function () {
      return this.A;
    }, e.prototype.resetContent = function () {
      this.i.innerHTML = this.s;
    }, e.prototype.truncate = function () {
      this.resetContent(), this.p(), this.I(), this.O(), this.k() && (this.B(), this.j(this.N.lastChild, this.N)), this.L();
    }, e.prototype.getId = function () {
      return this.t();
    }, e.prototype.enableAutoUpdate = function () {
      h.push(this);
    }, e.prototype.disableAutoUpdate = function () {
      for (var t = 0, i = h.length; t < i; t++)
        if (this.getId() === h[t].getId()) {
          h.splice(t, 1);
          break;
        }
    }, e.prototype.destroy = function () {
      this.disableAutoUpdate(), this.resetContent(), this.C(), delete this.i.clampify;
    }, t.addEventListener("resize", function () {
      clearTimeout(s), s = setTimeout(function () {
        for (var t = 0, i = h.length; t < i; t++) h[t].truncate();
      }, n);
    }), t.Clampify = e, t.$clampify = function $clampify(t, i) {
      return new e(t, i).truncate(), t;
    }, void 0 !== t.jQuery) {
    var o = t.jQuery,
      f = ["getId", "resetContent", "truncate", "destroy", "enableAutoUpdate", "disableAutoUpdate", "setMaxLines", "getMaxLines"];
    o.fn.clampify = function (t) {
      var i = Array.prototype.slice.apply(arguments);
      return i.shift(), o(this).each(function () {
        if ("string" == typeof t) {
          if (f.indexOf(t) > -1 && this.clampify instanceof e) return "function" == typeof this.clampify[t] && this.clampify[t].apply(this.clampify, i), o(this);
          t = {};
        }
        return this.clampify instanceof e && this.clampify.destroy(), $clampify(this, t);
      });
    };
  }
}(window);

//
// scrollreveal.min.js
//
! function () {
  "use strict";

  function e(n) {
    return "undefined" == typeof this || Object.getPrototypeOf(this) !== e.prototype ? new e(n) : (O = this, O.version = "3.4.0", O.tools = new E, O.isSupported() ? (O.tools.extend(O.defaults, n || {}), O.defaults.container = t(O.defaults), O.store = {
      elements: {},
      containers: []
    }, O.sequences = {}, O.history = [], O.uid = 0, O.initialized = !1) : "undefined" != typeof console && null !== console, O);
  }

  function t(e) {
    if (e && e.container) {
      if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container);
      if (O.tools.isNode(e.container)) return e.container;
    }
    return O.defaults.container;
  }

  function n(e, t) {
    return "string" == typeof e ? Array.prototype.slice.call(t.querySelectorAll(e)) : O.tools.isNode(e) ? [e] : O.tools.isNodeList(e) ? Array.prototype.slice.call(e) : Array.isArray(e) ? e.filter(O.tools.isNode) : [];
  }

  function i() {
    return ++O.uid;
  }

  function o(e, t, n) {
    t.container && (t.container = n), e.config ? e.config = O.tools.extendClone(e.config, t) : e.config = O.tools.extendClone(O.defaults, t), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X";
  }

  function r(e) {
    var t = window.getComputedStyle(e.domEl);
    e.styles || (e.styles = {
      transition: {},
      transform: {},
      computed: {}
    }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" !== t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = s(e, 0), e.styles.transition.delayed = s(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", a(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", a(e);
  }

  function s(e, t) {
    var n = e.config;
    return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; ";
  }

  function a(e) {
    var t, n = e.config,
      i = e.styles.transform;
    t = "top" === n.origin || "left" === n.origin ? /^-/.test(n.distance) ? n.distance.substr(1) : "-" + n.distance : n.distance, parseInt(n.distance) && (i.initial += " translate" + n.axis + "(" + t + ")", i.target += " translate" + n.axis + "(0)"), n.scale && (i.initial += " scale(" + n.scale + ")", i.target += " scale(1)"), n.rotate.x && (i.initial += " rotateX(" + n.rotate.x + "deg)", i.target += " rotateX(0)"), n.rotate.y && (i.initial += " rotateY(" + n.rotate.y + "deg)", i.target += " rotateY(0)"), n.rotate.z && (i.initial += " rotateZ(" + n.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + n.opacity + ";", i.target += "; opacity: " + e.styles.computed.opacity + ";";
  }

  function l(e) {
    var t = e.config.container;
    t && O.store.containers.indexOf(t) === -1 && O.store.containers.push(e.config.container), O.store.elements[e.id] = e;
  }

  function c(e, t, n) {
    var i = {
      target: e,
      config: t,
      interval: n
    };
    O.history.push(i);
  }

  function f() {
    if (O.isSupported()) {
      y();
      for (var e = 0; e < O.store.containers.length; e++) O.store.containers[e].addEventListener("scroll", d), O.store.containers[e].addEventListener("resize", d);
      O.initialized || (window.addEventListener("scroll", d), window.addEventListener("resize", d), O.initialized = !0);
    }
    return O;
  }

  function d() {
    A(y);
  }

  function u() {
    var e, t, n, i;
    O.tools.forOwn(O.sequences, function (o) {
      i = O.sequences[o], e = !1;
      for (var r = 0; r < i.elemIds.length; r++) n = i.elemIds[r], t = O.store.elements[n], q(t) && !e && (e = !0);
      i.active = e;
    });
  }

  function y() {
    var e, t;
    u(), O.tools.forOwn(O.store.elements, function (n) {
      t = O.store.elements[n], e = w(t), g(t) ? (t.config.beforeReveal(t.domEl), e ? t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed) : t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant), p("reveal", t, e), t.revealing = !0, t.seen = !0, t.sequence && m(t, e)) : v(t) && (t.config.beforeReset(t.domEl), t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant), p("reset", t), t.revealing = !1);
    });
  }

  function m(e, t) {
    var n = 0,
      i = 0,
      o = O.sequences[e.sequence.id];
    o.blocked = !0, t && "onload" === e.config.useDelay && (i = e.config.delay), e.sequence.timer && (n = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = {
      started: new Date
    }, e.sequence.timer.clock = window.setTimeout(function () {
      o.blocked = !1, e.sequence.timer = null, d();
    }, Math.abs(o.interval) + i - n);
  }

  function p(e, t, n) {
    var i = 0,
      o = 0,
      r = "after";
    switch (e) {
      case "reveal":
        o = t.config.duration, n && (o += t.config.delay), r += "Reveal";
        break;
      case "reset":
        o = t.config.duration, r += "Reset";
    }
    t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = {
      started: new Date
    }, t.timer.clock = window.setTimeout(function () {
      t.config[r](t.domEl), t.timer = null;
    }, o - i);
  }

  function g(e) {
    if (e.sequence) {
      var t = O.sequences[e.sequence.id];
      return t.active && !t.blocked && !e.revealing && !e.disabled;
    }
    return q(e) && !e.revealing && !e.disabled;
  }

  function w(e) {
    var t = e.config.useDelay;
    return "always" === t || "onload" === t && !O.initialized || "once" === t && !e.seen;
  }

  function v(e) {
    if (e.sequence) {
      var t = O.sequences[e.sequence.id];
      return !t.active && e.config.reset && e.revealing && !e.disabled;
    }
    return !q(e) && e.config.reset && e.revealing && !e.disabled;
  }

  function b(e) {
    return {
      width: e.clientWidth,
      height: e.clientHeight
    };
  }

  function h(e) {
    if (e && e !== window.document.documentElement) {
      var t = x(e);
      return {
        x: e.scrollLeft + t.left,
        y: e.scrollTop + t.top
      };
    }
    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }

  function x(e) {
    var t = 0,
      n = 0,
      i = e.offsetHeight,
      o = e.offsetWidth;
    do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), e = e.offsetParent; while (e);
    return {
      top: t,
      left: n,
      height: i,
      width: o
    };
  }

  function q(e) {
    function t() {
      var t = c + a * s,
        n = f + l * s,
        i = d - a * s,
        y = u - l * s,
        m = r.y + e.config.viewOffset.top,
        p = r.x + e.config.viewOffset.left,
        g = r.y - e.config.viewOffset.bottom + o.height,
        w = r.x - e.config.viewOffset.right + o.width;
      return t < g && i > m && n < w && y > p;
    }

    function n() {
      return "fixed" === window.getComputedStyle(e.domEl).position;
    }
    var i = x(e.domEl),
      o = b(e.config.container),
      r = h(e.config.container),
      s = e.config.viewFactor,
      a = i.height,
      l = i.width,
      c = i.top,
      f = i.left,
      d = c + a,
      u = f + l;
    return t() || n();
  }

  function E() {}
  var O, A;
  e.prototype.defaults = {
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay: 0,
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    opacity: 0,
    scale: 0.9,
    easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
    container: window.document.documentElement,
    mobile: !0,
    reset: !1,
    useDelay: "always",
    viewFactor: 0.2,
    viewOffset: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    beforeReveal: function (e) {},
    beforeReset: function (e) {},
    afterReveal: function (e) {},
    afterReset: function (e) {}
  }, e.prototype.isSupported = function () {
    var e = document.documentElement.style;
    return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e;
  }, e.prototype.reveal = function (e, s, a, d) {
    var u, y, m, p, g, w;
    if (void 0 !== s && "number" == typeof s ? (a = s, s = {}) : void 0 !== s && null !== s || (s = {}), u = t(s), y = n(e, u), !y.length) return O;
    a && "number" == typeof a && (w = i(), g = O.sequences[w] = {
      id: w,
      interval: a,
      elemIds: [],
      active: !1
    });
    for (var v = 0; v < y.length; v++) p = y[v].getAttribute("data-sr-id"), p ? m = O.store.elements[p] : (m = {
      id: i(),
      domEl: y[v],
      seen: !1,
      revealing: !1
    }, m.domEl.setAttribute("data-sr-id", m.id)), g && (m.sequence = {
      id: g.id,
      index: g.elemIds.length
    }, g.elemIds.push(m.id)), o(m, s, u), r(m), l(m), O.tools.isMobile() && !m.config.mobile || !O.isSupported() ? (m.domEl.setAttribute("style", m.styles.inline), m.disabled = !0) : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial);
    return !d && O.isSupported() && (c(e, s, a), O.initTimeout && window.clearTimeout(O.initTimeout), O.initTimeout = window.setTimeout(f, 0)), O;
  }, e.prototype.sync = function () {
    if (O.history.length && O.isSupported()) {
      for (var e = 0; e < O.history.length; e++) {
        var t = O.history[e];
        O.reveal(t.target, t.config, t.interval, !0);
      }
      f();
    }
    return O;
  }, E.prototype.isObject = function (e) {
    return null !== e && "object" == typeof e && e.constructor === Object;
  }, E.prototype.isNode = function (e) {
    return "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName;
  }, E.prototype.isNodeList = function (e) {
    var t = Object.prototype.toString.call(e),
      n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
    return "object" == typeof window.NodeList ? e instanceof window.NodeList : e && "object" == typeof e && n.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0]));
  }, E.prototype.forOwn = function (e, t) {
    if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".');
    for (var n in e) e.hasOwnProperty(n) && t(n);
  }, E.prototype.extend = function (e, t) {
    return this.forOwn(t, function (n) {
      this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n];
    }.bind(this)), e;
  }, E.prototype.extendClone = function (e, t) {
    return this.extend(this.extend({}, e), t);
  }, E.prototype.isMobile = function () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }, A = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
    window.setTimeout(e, 1e3 / 60);
  }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
    return e;
  }) : "undefined" != typeof module && module.exports ? module.exports = e : window.ScrollReveal = e;
}();

//
// sammy-timeline.js
//
$(function () {
  'use strict';
  //
  // Get values when page is ready
  // ==================================================
  var my_card_image_height = 0; // height
  var my_card_text_col_padding = 0; // padding-top + padding-bottom
  var my_card_text_title_height = 0; // heigth + margin-bottom
  var my_card_text_subtitle_height = 0; // heigth + margin-bottom
  var my_card_text_content_margin_bottom = 0; // margin-bootom
  var my_card_text_content_height = 0; // heigth
  //
  // Get card image height value
  // --------------------------------------------------
  my_card_image_height = parseFloat($('.my-card-image').css('height'));
  //
  // Get card text col padding value
  // --------------------------------------------------
  my_card_text_col_padding = parseFloat($('.my-card-text-col').css('padding-top')) + parseFloat($('.my-card-text-col').css('padding-bottom'));
  //
  // Get card text title height value
  // --------------------------------------------------
  my_card_text_title_height = parseFloat($('.my-card-text-title').css('height')) + parseFloat($('.my-card-text-title').css('margin-bottom'));
  //
  // Get card text subtitle height value
  // --------------------------------------------------
  my_card_text_subtitle_height = parseFloat($('.my-card-text-subtitle').css('height')) + parseFloat($('.my-card-text-subtitle').css('margin-bottom'));
  //
  // Get card text content margin-bottom value
  // --------------------------------------------------
  my_card_text_content_margin_bottom = parseFloat($('.my-card-text-content').css('margin-bottom'));
  //
  // Match text maximum height with image minimum height
  // --------------------------------------------------
  my_card_text_content_height = my_card_image_height - my_card_text_col_padding - my_card_text_title_height - my_card_text_subtitle_height - my_card_text_content_margin_bottom;

  $('.my-card-text-content').css('max-height', my_card_text_content_height + 'px');

  //
  // Get values when page is resize
  // ==================================================
  $(window).resize(function () {
    my_card_image_height = parseFloat($('.my-card-image').css('height'));
    my_card_text_col_padding = parseFloat($('.my-card-text-col').css('padding-top')) + parseFloat($('.my-card-text-col').css('padding-bottom'));
    my_card_text_title_height = parseFloat($('.my-card-text-title').css('height')) + parseFloat($('.my-card-text-title').css('margin-bottom'));
    my_card_text_subtitle_height = parseFloat($('.my-card-text-subtitle').css('height')) + parseFloat($('.my-card-text-subtitle').css('margin-bottom'));
    my_card_text_content_margin_bottom = parseFloat($('.my-card-text-content').css('margin-bottom'));

    my_card_text_content_height = my_card_image_height - my_card_text_col_padding - my_card_text_title_height - my_card_text_subtitle_height - my_card_text_content_margin_bottom - 16;
    // last value (16) is for compensate missing dimensions, I'm to lazzy now for micro-management
    // maybe you need to change for beter view on browsers or add missing dimenssion like margins, borders or paddings (top/bottom) for elements 

    $('.my-card-text-content').css('max-height', my_card_text_content_height + 'px');

  });

  $('.my-card-text-title').clampify({
    maxLines: 1,
    autoUpdate: true,
  });

  $('.my-card-text-subtitle').clampify({
    maxLines: 1,
    autoUpdate: true,
  });

  $('.my-card-text-content').clampify({
    maxLines: 0,
    autoUpdate: true,
  });

  window.sr = ScrollReveal({
    reset: true
  });

  if ($(window).width() < 768) {

    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  } else {

    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  }

  sr.reveal('.js--fadeInLeft', {
    origin: 'left',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  });

  sr.reveal('.js--fadeInRight', {
    origin: 'right',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  });

});
