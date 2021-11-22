var hextom_qab = function () {
  var e,
    a,
    t,
    i,
    n,
    r,
    o,
    s,
    d = "//qab.hextom.com/",
    c = "https://cdn.hextom.com/",
    p =
      ".ht-animated{-webkit-animation-duration:4s;animation-duration:4s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-delay:1s;animation-delay:1s}.ht-animated.ht-infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes ht-emitting{13%{box-shadow:0 0 5px 5px rgba(0,0,0,.8)}100%,25%{box-shadow:0 0 0 0 rgba(0,0,0,.8)}}@keyframes ht-emitting{13%{box-shadow:0 0 5px 5px rgba(0,0,0,.8)}100%,25%{box-shadow:0 0 0 0 rgba(0,0,0,.8)}}.ht-emitting{-webkit-animation-name:ht-emitting;animation-name:ht-emitting;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes ht-bounce{13%,20%,25%,5%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}10%,12%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}17%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}23%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}@keyframes ht-bounce{13%,20%,25%,5%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}10%,12%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}17%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}23%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}.ht-bounce{-webkit-animation-name:ht-bounce;animation-name:ht-bounce;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes ht-flash{12%,6%,from,to{opacity:1}3%,9%{opacity:0}}@keyframes ht-flash{12%,6%,from,to{opacity:1}3%,9%{opacity:0}}.ht-flash{-webkit-animation-name:ht-flash;animation-name:ht-flash}@-webkit-keyframes ht-rubberBand{25%,from,to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}7%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}10%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}12%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}16%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}18%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}}@keyframes ht-rubberBand{25%,from,to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}7%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}10%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}12%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}16%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}18%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}}.ht-rubberBand{-webkit-animation-name:ht-rubberBand;animation-name:ht-rubberBand}@-webkit-keyframes ht-swing{5%{-webkit-transform:rotate3d(0,0,1,15deg);transform:rotate3d(0,0,1,15deg)}10%{-webkit-transform:rotate3d(0,0,1,-10deg);transform:rotate3d(0,0,1,-10deg)}15%{-webkit-transform:rotate3d(0,0,1,5deg);transform:rotate3d(0,0,1,5deg)}20%{-webkit-transform:rotate3d(0,0,1,-5deg);transform:rotate3d(0,0,1,-5deg)}25%,to{-webkit-transform:rotate3d(0,0,1,0deg);transform:rotate3d(0,0,1,0deg)}}@keyframes ht-swing{5%{-webkit-transform:rotate3d(0,0,1,15deg);transform:rotate3d(0,0,1,15deg)}10%{-webkit-transform:rotate3d(0,0,1,-10deg);transform:rotate3d(0,0,1,-10deg)}15%{-webkit-transform:rotate3d(0,0,1,5deg);transform:rotate3d(0,0,1,5deg)}20%{-webkit-transform:rotate3d(0,0,1,-5deg);transform:rotate3d(0,0,1,-5deg)}25%,to{-webkit-transform:rotate3d(0,0,1,0deg);transform:rotate3d(0,0,1,0deg)}}.ht-swing{-webkit-transform-origin:top center;transform-origin:top center;-webkit-animation-name:ht-swing;animation-name:ht-swing}@-webkit-keyframes ht-tada{25%,from,to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}2%,5%{-webkit-transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg);transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)}12%,17%,22%,7%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}10%,15%,20%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}}@keyframes ht-tada{25%,from,to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}2%,5%{-webkit-transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg);transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)}12%,17%,22%,7%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}10%,15%,20%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}}.ht-tada{-webkit-animation-name:ht-tada;animation-name:ht-tada}@-webkit-keyframes ht-wobble{25%,from,to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}3%{-webkit-transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg);transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}7%{-webkit-transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg);transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}11%{-webkit-transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg);transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}15%{-webkit-transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg);transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}18%{-webkit-transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg);transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}}@keyframes ht-wobble{25%,from,to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}3%{-webkit-transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg);transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}7%{-webkit-transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg);transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}11%{-webkit-transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg);transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}15%{-webkit-transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg);transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}18%{-webkit-transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg);transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}}.ht-wobble{-webkit-animation-name:ht-wobble;animation-name:ht-wobble}@-webkit-keyframes ht-jello{5.6%,50%,from,to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}11.1%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}16.6%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}22.2%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}27.7%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}33.3%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}38.8%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}44.4%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes ht-jello{5.6%,50%,from,to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}11.1%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}16.6%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}22.2%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}27.7%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}33.3%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}38.8%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}44.4%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.ht-jello{-webkit-animation-name:ht-jello;animation-name:ht-jello;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes ht-flip{from{-webkit-transform:perspective(400px) rotate3d(0,1,0,-360deg);transform:perspective(400px) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}5%{-webkit-transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}6%{-webkit-transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}10%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}12%,to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes ht-flip{from{-webkit-transform:perspective(400px) rotate3d(0,1,0,-360deg);transform:perspective(400px) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}5%{-webkit-transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}6%{-webkit-transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}10%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}12%,to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}.ht-flip{-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:ht-flip;animation-name:ht-flip}";
  if ("undefined" == typeof jQuery) {
    var l = document.getElementsByTagName("head")[0],
      h = document.createElement("script");
    (h.type = "text/javascript"),
      (h.src =
        "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"),
      (h.onload = m),
      l.appendChild(h);
  } else setTimeout(m, 100);
  function m() {
    if (
      ((qab_already_run = "yes"),
      (e = -1),
      (a = -1),
      (t = []),
      (i = !1),
      (n = "Serif,Helvetica,Verdana,Courier"),
      (r = ""),
      (o = !1),
      (s = 0),
      (d = window.location.hostname),
      (c = window.location.pathname),
      -1 === d.indexOf("checkout.shopify.com") &&
        (-1 === c.indexOf("checkout") || -1 === c.indexOf("thank_you")))
    ) {
      var d, c;
      jQuery("head").append("<style>" + p + "</style>");
      var l,
        h,
        m,
        f = window.location.pathname,
        y = k("qab_previous_pathname");
      v("qab_previous_pathname", window.location.pathname),
        f == y || null == y
          ? ((m = "qab_close_clicked"),
            (document.cookie =
              m + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"),
            b())
          : ((l = (function (e) {
              try {
                return sessionStorage.getItem(e);
              } catch (e) {
                return null;
              }
            })("qab_payload")),
            (h = JSON.parse(l))
              ? "yes" == h.shop_active && ((t = h.bars), (i = h.record), u())
              : b());
    }
  }
  function b() {
    jQuery.ajax({
      url: d + "qab_get_bars?shop=" + _(),
      method: "GET",
      dataType: "json",
      success: function (e) {
        !(function (e, a) {
          try {
            sessionStorage.setItem(e, a);
          } catch (e) {
            return;
          }
        })("qab_payload", JSON.stringify(e)),
          "yes" == e.shop_active && ((t = e.bars), (i = e.record), u());
      },
    });
  }
  function u() {
    if (
      (jQuery("#qab_placeholder").css("transition", "height 0ms linear 300ms"),
      "yes" !== k("qab_close_clicked"))
    )
      if (k("qab_cool_down_seconds")) {
        jQuery("#qab_placeholder").length > 0 &&
          jQuery("#qab_placeholder").html(""),
          jQuery("#qab_container").html(""),
          a > -1 &&
            (jQuery("#qab_placeholder").length > 0 &&
            "inserted" === t[a].position
              ? jQuery("#qab_placeholder").css("paddingBottom", 0)
              : jQuery("#qab_placeholder").length > 0 &&
                "inserted_sticky" === t[a].position
              ? jQuery("#qab_placeholder").css("paddingBottom", 0)
              : "top_push" === t[a].position ||
                "top_push_sticky" === t[a].position ||
                ("top_cover" === t[a].position
                  ? jQuery("#qab_container").css("display", "none")
                  : "top_cover_nonsticky" === t[a].position
                  ? jQuery("#qab_container").css("display", "none")
                  : "bottom_cover" === t[a].position &&
                    jQuery("body").css("paddingBottom", 0)));
        var e = parseFloat(k("qab_cool_down_seconds"));
        setTimeout(f, 1e3 * e);
      } else f();
  }
  function f() {
    if (!o)
      for (var i = 0; i < t.length; i++)
        (t[i].score = y(t[i])), t[i].score > s && (s = t[i].score);
    if (0 != s) {
      for (var d = a, c = 0; ; ) {
        if (((d += 1), (c += 1) > t.length)) return;
        if ((d >= t.length && (d = 0), !(y(t[d]) < s))) {
          if (a == d)
            return (
              jQuery("#qab_background").animate(
                { opacity: 0 },
                1e3 * t[a].animation_time,
                "linear",
                function () {
                  jQuery("#qab_placeholder").length > 0 &&
                    jQuery("#qab_placeholder").html(""),
                    jQuery("#qab_container").html("");
                }
              ),
              void (
                a > -1 &&
                (jQuery("#qab_placeholder").length > 0 &&
                "inserted" === t[a].position
                  ? setTimeout(function () {
                      jQuery("#qab_placeholder").css("paddingBottom", 0);
                    }, 1e3 * t[a].animation_time)
                  : jQuery("#qab_placeholder").length > 0 &&
                    "inserted_sticky" === t[a].position
                  ? setTimeout(function () {
                      jQuery("#qab_placeholder").css("paddingBottom", 0);
                    }, 1e3 * t[a].animation_time)
                  : "top_push" === t[a].position
                  ? setTimeout(function () {
                      jQuery("body").css("paddingTop", 0);
                    }, 1e3 * t[a].animation_time)
                  : "top_push_sticky" === t[a].position
                  ? setTimeout(function () {
                      jQuery("body").css("paddingTop", 0);
                    }, 1e3 * t[a].animation_time)
                  : "top_cover" === t[a].position
                  ? jQuery("#qab_container").css("display", "none")
                  : "top_cover_nonsticky" === t[a].position
                  ? jQuery("#qab_container").css("display", "none")
                  : "bottom_cover" === t[a].position &&
                    setTimeout(function () {
                      jQuery("body").css("paddingBottom", 0);
                    }, 1e3 * t[a].animation_time))
              )
            );
          (e = a), (a = d);
          break;
        }
      }
      !(function () {
        if (n.indexOf(t[a].font) > -1) g();
        else if (r.indexOf(t[a].font) > -1) g();
        else {
          r += "," + t[a].font;
          var e = document.createElement("link"),
            i = document.getElementsByTagName("head")[0];
          e.setAttribute(
            "href",
            "https://fonts.googleapis.com/css?family=" +
              t[a].font.replace(/ /g, "+")
          ),
            e.setAttribute("type", "text/css"),
            e.setAttribute("rel", "stylesheet"),
            (e.onload = g),
            i.insertBefore(e, i.firstChild);
        }
      })();
    }
  }
  function y(e) {
    var a = 1;
    if ("all" != e.target_device) {
      if ("desktop" == e.target_device && j()) return 0;
      if ("mobile" == e.target_device && !j()) return 0;
    }
    if ("any" != e.source_page && ":" != e.source_page.charAt(0)) {
      var t = (function () {
        if (k("qab_source")) return k("qab_source");
        var e = document.referrer,
          a = document.location.hostname;
        return e.length > 0 && -1 == e.indexOf(a)
          ? (v("qab_source", e, 28800), e)
          : (v("qab_source", "", 28800), "");
      })();
      if (t.indexOf("facebook") > -1 && e.source_page.indexOf("facebook") > -1)
        a += 1e3;
      else if (
        t.indexOf("pinterest") > -1 &&
        window.location.href.indexOf("utm") > -1 &&
        (window.location.href.indexOf("Pinterest") > -1 ||
          window.location.href.indexOf("pinterest") > -1)
      )
        a += 1e3;
      else {
        if (-1 == t.indexOf(e.source_page)) return 0;
        a += 1e3;
      }
    }
    if (":" === e.source_page.charAt(0)) {
      for (
        var i = e.source_page.substring(1, e.source_page.length).split(","),
          n = !1,
          r = 0;
        r < i.length;

      ) {
        if (!0 === w(i[r].trim())) {
          n = !0;
          break;
        }
        r += 1;
      }
      if (!0 !== n) return 0;
      a += 1e3;
    }
    if (e.schedule_enabled) {
      var o = Date.parse(e.start_on),
        s = Date.parse(e.end_on),
        d = Date.now();
      if (d > s) return 0;
      if (d < o) return 0;
      a += 1e3;
    } else !1 === e.schedule_enabled && (a += 1e3);
    if (("" != e.countries && (a += 100), e.display_page)) {
      var c = window.location.pathname,
        p = window.location.href;
      if ("home" == e.display_page && "home" != meta.page.pageType) return 0;
      if ("/" == e.display_page.charAt(0) && e.display_page != c) return 0;
      if (":" == e.display_page.charAt(0)) {
        for (
          var l = e.display_page.substring(1, e.display_page.length).split(","),
            h = !1,
            m = 0;
          m < l.length;

        ) {
          if (p.indexOf(l[m].trim()) > -1) {
            h = !0;
            break;
          }
          m += 1;
        }
        if (!0 !== h) return 0;
        a += 10;
      } else a += 10;
    }
    if (e.exclude_page) {
      (c = window.location.pathname), (p = window.location.href);
      if ("home" === e.exclude_page && "home" === meta.page.pageType) return 0;
      if ("/" === e.exclude_page.charAt(0) && e.exclude_page === c) return 0;
      if (":" == e.exclude_page.charAt(0)) {
        for (
          l = e.exclude_page.substring(1, e.exclude_page.length).split(","),
            h = !1,
            m = 0;
          m < l.length;

        ) {
          if (p.indexOf(l[m].trim()) > -1) {
            h = !0;
            break;
          }
          m += 1;
        }
        if (!0 === h) return 0;
        a += 10;
      } else a += 10;
    }
    if ("tag" === e.selected_products_type) {
      if (
        !(
          (function () {
            var e = window.hextom_qab_meta || {};
            if (!e.hasOwnProperty("p1")) return [];
            var a = e.p1;
            if (!a) return [];
            var t = [];
            return (
              a.forEach(function (e, a) {
                t[a] = e.split("").reverse().join("");
              }, t),
              t
            );
          })().indexOf(e.selected_products_tag) > -1
        )
      )
        return 0;
      a += 10;
    }
    if ("tag" === e.selected_customers_type) {
      if (
        !(
          (function () {
            var e = window.hextom_qab_meta || {};
            if (!e.hasOwnProperty("p2")) return [];
            var a = e.p2.v2;
            if (!a) return [];
            var t = [];
            return (
              a.forEach(function (e, a) {
                t[a] = e.split("").reverse().join("");
              }, t),
              t
            );
          })().indexOf(e.selected_customers_tag) > -1
        )
      )
        return 0;
      a += 10;
    }
    if ("spent" === e.selected_customers_type) {
      var b = (function () {
        var e = 0,
          a = window.hextom_qab_meta || {};
        if (!a.hasOwnProperty("p2")) return e;
        var t = a.p2.v3 || "0,0";
        return (e =
          7 * parseFloat(t.split(",")[0]) + parseFloat(t.split(",")[1]));
      })();
      if (!(parseFloat(b) >= e.selected_customers_spent)) return 0;
      a += 10;
    }
    return a;
  }
  function g() {
    var i,
      n,
      r,
      o,
      s = window.innerWidth || document.body.clientWidth,
      d =
        ((i = window.location.pathname.split("/")),
        (n = /^[a-zA-Z]{2}$/),
        (r = /^[a-zA-Z]{2}-[a-zA-Z]{2}$/),
        null === (o = (i = i.splice(1, i.length))[0].match(n) || i[0].match(r))
          ? ("object" == typeof Shopify &&
              Shopify.hasOwnProperty("locale") &&
              (o = Shopify.locale.match(n) || Shopify.locale.match(r)),
            null === o ? null : o[0].toLowerCase())
          : o[0].toLowerCase());
    if (0 == jQuery("#qab_container").length) {
      var p =
        '<div id="qab_container" style="transition: height 0ms linear 300ms;"></div>';
      if ("top_push" === t[a].position) {
        var l = [
          '.header-container.drawer__header-container .header-wrapper:not([data-section-id="header"]):not(.wrapper-fluid)',
          ".fadeout-overlay + #shopify-section-header",
          "#shopify-section-header.header-wrapper",
          ".site-header.is-moved-by-drawer",
          ".site-header__wrapper:not(.site-header__wrapper--with-menu):not([data-site-header-wrapper])",
          ".site-header.full--w",
          ".PageContainer #shopify-section-announcement",
          "nav.cbp-spmenu + .wrapper-container",
          "#header > #headerWrapper",
          "#PageContainer:not(.page-container)",
          ".header-wrapper.header-wrapper--sticky",
          'div[data-section-type="header-section"] .header-wrapper.header-wrapper--overlay',
          ".page__container.page__container--secondary",
          "#shopify-section-static-header .header",
          ".off-canvas--viewport .off-canvas--main-content",
          "#shopify-section-announcement .announcement--root",
          ".header.sticky .relative",
          'body[class^="kagami--"] .page__container',
          "body > #page",
          "#page-wrap-content .container + #content",
          "#shopify-section-side-nav + .page-container",
          "#pageheader.pageheader.nav-shift",
          ".bodywrap.cf #shopify-section-header + #content",
          ".header.mm-fixed-top",
          "#content_wrapper #header.mm-fixed-top ~ .header",
          ".has-vertical-header .is-beside-vertical-header",
          "#header-sticky-wrapper #header",
          '#shopify-section-header-classic div[data-enable_sticky="false"] #header',
          "#mobile-header-sticky-wrapper #mobile-header",
          "#shopify-section-header__top-bar",
          "#shopify-section-announcement-bar",
          "body > #shopify-section-announcement",
          ".header-container.drawer__header-container",
          "body > .dbtfy ~ #PageContainer.page-container > #shopify-section-announcement",
          ".body-cont #shopify-section-header > .cont-header.header-fixed-true",
          "#shopify-section-header",
          "#shopify-section-side-nav + .page-container",
          "body.boxed",
          'body[class*="maxmin_"]',
          ".page-wrapper",
          "#content-holder #content",
          "#shopify-section-static-header + .page-body-content",
          ".header_wrap_icon_cart header.main_header.locked",
          "#header-ontop.header-ontop + #header.header",
          "body",
          '[data-section-id="header"]',
        ];
        s < 500 &&
          l.unshift(
            ".page__container #header.header.header--absolute + #main.main"
          ),
          s < 650 && l.unshift("#SiteContainer #MainContent.main-content"),
          s < 740 &&
            l.unshift(
              "body.shifter-enabled .shifter-page.is-moved-by-drawer > #content",
              "#upper-content"
            ),
          s < 798 &&
            l.unshift(
              "body.mobile_nav-fixed--true #header.mobile_nav-fixed--true",
              'div[data-enable_sticky="false"] #mobile-header'
            ),
          s < 1e3 && l.unshift(".bodywrap.cf #shopify-section-header"),
          s > 767 && l.unshift("#page-wrap #page-wrap-content");
        for (var h = 0; h < l.length; h++) {
          var m = jQuery(l[h]);
          if (m.length) break;
        }
        m.prepend(p);
      } else if ("top_push_sticky" === t[a].position) {
        var b = [
          '.header-container.drawer__header-container .header-wrapper:not([data-section-id="header"]):not(.wrapper):not(.wrapper-fluid)',
          ".fadeout-overlay + #shopify-section-header",
          "#shopify-section-header.header-wrapper",
          ".site-header.is-moved-by-drawer",
          ".site-header.full--w",
          'div[data-section-type="header-section"] .header-wrapper.header-wrapper--sticky',
          'div[data-section-type="header-section"] .header-wrapper.header-wrapper--overlay',
          "nav.cbp-spmenu + .wrapper-container",
          "#header-ontop.header-ontop + #header.header",
          ".header.container-fluid.perma-sticky",
          ".header-section.sticky-header .header-section--wrapper.overlay-header-wrapper",
          "#PageContainer div:not(.header-sticky-wrapper) > #HeaderWrapper",
          "#PageContainer:not(.drawer-page-content)",
          'body[class^="trademark--"]',
          "header#top.header.header--fluid",
          "#shopify-section-static-header .header",
          ".off-canvas--viewport .off-canvas--main-content",
          "#shopify-section-announcement .announcement--root",
          ".header.sticky .relative",
          'body[class^="kagami--"] .page__container',
          "body > #page",
          "#page-wrap",
          "#shopify-section-side-nav + .page-container",
          "#pageheader.pageheader.nav-shift",
          ".header.default-header.mm-fixed-top",
          "#main-body.slideout-panel",
          "#PageContainer.drawer-page-content:not(.page-container)",
          "body.fixed-header.fixed-header--all",
          "body.has-vertical-header.announcement-bar--hidden",
          "#header-sticky-wrapper #header",
          "#mobile-header-sticky-wrapper #mobile-header",
          "#shopify-section-sidebar + #content-holder",
          "#shopify-section-announcement-bar",
          "body > #shopify-section-announcement",
          "#shopify-section-header:not(.d-none)",
          ".header_wrap_icon_cart header.main_header.locked",
          "body",
        ];
        s < 800 &&
          b.unshift(
            "#content_wrapper.mm-page.mm-slideout #shopify-section-header",
            ".mm-page.mm-slideout #content_wrapper #shopify-section-header"
          ),
          s <= 740 &&
            b.unshift(
              "body.gridlock.shifter.shifter-enabled",
              "#upper-content"
            ),
          s < 798 &&
            b.unshift('div[data-enable_sticky="false"] #mobile-header'),
          s < 992 &&
            b.unshift(
              "#site-content #shopify-section-header-mobile.header-mobile__placeholder"
            );
        for (var f = 0; f < b.length; f++) {
          var y = jQuery(b[f]);
          if (y.length) break;
        }
        y.prepend(p);
      } else jQuery("body").append(p);
    }
    a > -1 &&
      e > -1 &&
      e != a &&
      t[a].position != t[e].position &&
      (jQuery("#qab_placeholder").length > 0 && "inserted" === t[e].position
        ? jQuery("#qab_placeholder").css("paddingBottom", 0)
        : jQuery("#qab_placeholder").length > 0 &&
          "inserted_sticky" === t[e].position
        ? jQuery("#qab_placeholder").css("paddingBottom", 0)
        : "top_push" === t[e].position
        ? jQuery("body").css("paddingTop", 0)
        : "top_push_sticky" === t[e].position
        ? jQuery("body").css("paddingTop", 0)
        : "top_cover" === t[a].position
        ? jQuery("#qab_container").css("display", "none")
        : "top_cover_nonsticky" === t[a].position
        ? jQuery("#qab_container").css("display", "none")
        : "bottom_cover" === t[e].position &&
          jQuery("body").css("paddingBottom", 0));
    var g = "";
    (g =
      !0 === t[a].button_disable && !0 === t[a].entire_bar_clickable
        ? !0 === t[a].close_option
          ? '<div id="qab_background" onclick="qab_button_on_click(event)" style="opacity: 0; margin: 0; padding: 0; left: 0; height: auto; width: 100%; z-index: 1000000; position: relative; cursor: pointer;"><div id="qab_bar" style="text-align: center; margin: 0; padding: 10px; left: 0; height: auto; width: 100%; box-sizing: border-box; border: none;"><div id="qab_content" style="text-align:center; display: inline-block;"><span id="qab_message" style="color:inherit;"></span> </div></div><div><a id="qab_close" style="position:absolute; right:8px; top:50%; transform:translateY(-50%); font-family:Helvetica, Arial, sans-serif; font-weight:bold; font-size:18px; text-decoration: none;" href="#" onclick="qab_close_on_click(event)">X</a></div></div>'
          : '<div id="qab_background" onclick="qab_button_on_click(event)" style="opacity: 0; margin: 0; padding: 0; left: 0; height: auto; width: 100%; z-index: 1000000; position: relative; cursor: pointer;"><div id="qab_bar" style="text-align: center; margin: 0; padding: 10px; left: 0; height: auto; width: 100%; box-sizing: border-box; border: none;"><div id="qab_content" style="text-align:center; display: inline-block;"><span id="qab_message" style="color:inherit;"></span> </div></div></div>'
        : !1 === t[a].button_disable && !1 === t[a].entire_bar_clickable
        ? !0 === t[a].close_option
          ? '<div id="qab_background" style="opacity: 0; margin: 0; padding: 0; left: 0; height: auto; width: 100%; z-index: 1000000; position: relative;"><div id="qab_bar" style="text-align: center; margin: 0; padding: 10px; left: 0; height: auto; width: 100%; box-sizing: border-box; border: none;"><div id="qab_content" style="text-align:center; display: inline-block;"><span id="qab_message" style="color:inherit;"></span> <span style="display:inline-block;"><a id="qab_button" style="outline:none; border:none;line-height: 2em; padding: 0 1em; margin: 0 0 0 1em; display: inline-block; border-radius:.25em; cursor: pointer; width: auto; height: inherit; font-family: inherit; font-size: 0.875em; text-align: center; text-decoration: none; -webkit-appearance: none; appearance:none;" type="button" href="#" onclick="qab_button_on_click(event)"></a></span></div></div><div><a id="qab_close" style="position:absolute; right:8px; top:50%; transform:translateY(-50%); font-family:Helvetica, Arial, sans-serif; font-weight:bold; font-size:18px; text-decoration: none;" href="#" onclick="qab_close_on_click(event)">X</a></div></div>'
          : '<div id="qab_background" style="opacity: 0; margin: 0; padding: 0; left: 0; height: auto; width: 100%; z-index: 1000000; position: relative"><div id="qab_bar" style="text-align: center; margin: 0; padding: 10px; left: 0; height: auto; width: 100%; box-sizing: border-box; border: none;"><div id="qab_content" style="text-align:center; display: inline-block;"><span id="qab_message" style="color:inherit;"></span> <span style="display:inline-block;"><a id="qab_button" style="outline:none; border:none;line-height: 2em; padding: 0 1em; margin: 0 0 0 1em; display: inline-block; border-radius:.25em; cursor: pointer; width: auto; height: inherit; font-family: inherit; font-size: 0.875em; text-align: center; text-decoration: none; -webkit-appearance: none; appearance:none;" type="button" href="#" onclick="qab_button_on_click(event)"></a></span></div></div></div>'
        : !0 === t[a].close_option
        ? '<div id="qab_background" style="opacity: 0; margin: 0; padding: 0; left: 0; height: auto; width: 100%; z-index: 1000000; position:relative;"><div id="qab_bar" style="text-align: center; margin: 0; padding: 10px; left: 0; height: auto; width: 100%; box-sizing: border-box; border: none;"><div id="qab_content" style="text-align:center; display: inline-block;"><span id="qab_message" style="color:inherit;"></span> </div></div><div><a id="qab_close" style="position:absolute; right:8px; top:50%; transform:translateY(-50%); font-family:Helvetica, Arial, sans-serif; font-weight:bold; font-size:18px; text-decoration: none;" href="#" onclick="qab_close_on_click(event)">X</a></div></div>'
        : '<div id="qab_background" style="opacity: 0; margin: 0; padding: 0; left: 0; height: auto; width: 100%; z-index: 1000000; position:relative;"><div id="qab_bar" style="text-align: center; margin: 0; padding: 10px; left: 0; height: auto; width: 100%; box-sizing: border-box; border: none;"><div id="qab_content" style="text-align:center; display: inline-block;"><span id="qab_message" style="color:inherit;"></span> </div></div></div>'),
      jQuery("#qab_placeholder").length > 0 &&
        jQuery("#qab_placeholder").html(""),
      jQuery("#qab_container").html(""),
      jQuery("#qab_container").css("display", "block"),
      jQuery("#qab_container").css("color", "inherit"),
      jQuery("#qab_placeholder").length > 0 &&
      ("inserted" === t[a].position || "inserted_sticky" === t[a].position)
        ? jQuery("#qab_placeholder").append(g)
        : jQuery("#qab_container").html(g);
    var _ = window.innerWidth > 0 ? window.innerWidth : screen.width,
      w = parseFloat(t[a].font_size),
      k = parseFloat(t[a].bar_padding);
    "all" == t[a].target_device &&
      (_ <= 736 && w > 14
        ? ((k = (14 * k) / w), (w = 14), k > 8 && (k = 8))
        : _ > 736 &&
          _ <= 770 &&
          w > 16 &&
          ((k = (16 * k) / w), (w = 16), k > 10 && (k = 10)));
    var j = t[a].background_color,
      Q =
        "rgba(" +
        parseInt(j.slice(-6, -4), 16) +
        "," +
        parseInt(j.slice(-4, -2), 16) +
        "," +
        parseInt(j.slice(-2), 16) +
        "," +
        t[a].opacity +
        ")";
    if (
      (jQuery("#qab_bar").css("backgroundColor", Q),
      jQuery("#qab_bar").css("color", t[a].text_color),
      jQuery("#qab_bar").css("fontSize", w + "px"),
      jQuery("#qab_bar").css("lineHeight", 1.25 * w + "px"),
      jQuery("#qab_bar").css("paddingTop", k + "px"),
      jQuery("#qab_bar").css("paddingBottom", k + "px"),
      jQuery("#qab_bar").css("fontFamily", t[a].font),
      jQuery("#qab_content").css("fontSize", w + "px"),
      jQuery("#qab_close").css("color", t[a].text_color),
      w < 18 && jQuery("#qab_close").css("fontSize", w + "px"),
      t[a].background_pic &&
        jQuery("#qab_background").css(
          "backgroundImage",
          "url(" + c + t[a].background_pic + ")"
        ),
      jQuery("#qab_message").css("fontSize", w + "px"),
      null !== d && t[a].locales.indexOf(d) > -1)
    ) {
      if (
        null != t[a].translation[d].message &&
        t[a].translation[d].message.trim().length > 0 &&
        null != t[a].translation[d].message
      )
        var z = t[a].translation[d].message;
      else z = t[a].message;
      if (
        null != t[a].translation[d].button_text &&
        t[a].translation[d].button_text.trim().length > 0 &&
        null != t[a].translation[d].button_text
      )
        var T = t[a].translation[d].button_text;
      else T = t[a].button_text;
    } else (z = t[a].message), (T = t[a].button_text);
    if (
      (jQuery("#qab_message").html(z.replace("{{button}}", "")),
      !1 === t[a].button_disable && !1 === t[a].entire_bar_clickable)
    ) {
      if (
        (jQuery("#qab_button").css("color", t[a].button_text_color),
        jQuery("#qab_button").css(
          "backgroundColor",
          t[a].button_background_color
        ),
        "ht-emitting" === t[a].button_animation)
      ) {
        var B = (function (e) {
          e = e.replace("#", "");
          var a = parseInt(e.substring(0, 2), 16),
            t = parseInt(e.substring(2, 4), 16),
            i = parseInt(e.substring(4, 6), 16);
          return "rgba(" + a + "," + t + "," + i + ",0.8)";
        })(t[a].button_background_color);
        jQuery("<style>")
          .prop("type", "text/css")
          .html(
            "@-webkit-keyframes ht-emitting {13% {box-shadow: 0 0 5px 5px " +
              B +
              ";}25%,100% {box-shadow: 0 0 0 0 " +
              B +
              ";}}@keyframes ht-emitting {13% {box-shadow: 0 0 5px 5px " +
              B +
              ";}25%,100% {box-shadow: 0 0 0 0 " +
              B +
              ";}}"
          )
          .appendTo("head");
      }
      if ("" !== t[a].button_animation) {
        var X = "ht-animated ht-infinite " + t[a].button_animation;
        jQuery("#qab_button").addClass(X);
      }
      jQuery("#qab_button").html(T);
    } else jQuery("#qab_button").css("display", "none");
    0 == jQuery("#qab_custom_code").length &&
      jQuery("body").append('<div id="qab_custom_code"></div>'),
      jQuery("#qab_custom_code").html(t[a].custom_code),
      jQuery("#qab_placeholder").length > 0 && "inserted" === t[a].position
        ? (jQuery("#qab_background").css("position", "relative"),
          jQuery("#qab_background").animate(
            { opacity: 1 },
            1e3 * t[a].animation_time,
            "linear"
          ))
        : jQuery("#qab_placeholder").length > 0 &&
          "inserted_sticky" === t[a].position
        ? (jQuery("#qab_background").css("position", "fixed"),
          jQuery("#qab_background").animate(
            { opacity: 1 },
            1e3 * t[a].animation_time,
            "linear"
          ))
        : "top_push" === t[a].position
        ? jQuery("#qab_background").animate(
            { opacity: 1 },
            1e3 * t[a].animation_time,
            "linear"
          )
        : "top_push_sticky" === t[a].position
        ? (jQuery("#qab_background").css("top", 0),
          jQuery("#qab_background").css("position", "fixed"),
          jQuery("#qab_background").animate(
            { opacity: 1 },
            1e3 * t[a].animation_time,
            "linear"
          ))
        : "top_cover" === t[a].position
        ? (jQuery("#qab_background").css("top", 0),
          jQuery("#qab_background").css("position", "fixed"),
          jQuery("#qab_background").animate(
            { opacity: 1 },
            1e3 * t[a].animation_time,
            "linear"
          ))
        : "top_cover_nonsticky" === t[a].position
        ? (jQuery("#qab_background").css("top", 0),
          jQuery("#qab_background").css("position", "absolute"),
          jQuery("#qab_background").animate(
            { opacity: 1 },
            1e3 * t[a].animation_time,
            "linear"
          ))
        : "bottom_cover" === t[a].position &&
          (jQuery("#qab_background").css("bottom", 0),
          jQuery("#qab_background").css("position", "fixed"),
          jQuery("#qab_background").animate(
            { opacity: 1 },
            1e3 * t[a].animation_time,
            "linear"
          ));
    var Y = document.getElementById("qab_bar");
    setTimeout(function () {
      try {
        (Y.hidden = !0), Y.offsetHeight, (Y.hidden = !1);
      } catch (e) {}
    }, 0),
      setTimeout(function () {
        !(function () {
          var e = parseInt(jQuery("#qab_bar").outerHeight(!0));
          jQuery("#qab_placeholder").length > 0 && "inserted" === t[a].position
            ? jQuery("#qab_placeholder").css("height", e)
            : jQuery("#qab_placeholder").length > 0 &&
              "inserted_sticky" === t[a].position
            ? (jQuery("#qab_placeholder").css("height", e),
              jQuery("#qab_placeholder").css("paddingBottom", e))
            : "top_push" === t[a].position ||
              ("top_push_sticky" === t[a].position
                ? setTimeout(function () {
                    jQuery("#qab_container").css("height", e);
                  }, 0)
                : "top_cover" === t[a].position
                ? jQuery("#qab_background").css("height", e)
                : "top_cover_nonsticky" === t[a].position
                ? jQuery("#qab_background").css("height", e)
                : "bottom_cover" === t[a].position &&
                  (jQuery("#qab_background").css("height", e),
                  jQuery("body").css("paddingBottom", e)));
          !(function (e) {
            var i = window.innerWidth || document.body.clientWidth,
              n = [],
              r = [],
              o = [];
            if ("top_push" === t[a].position)
              (r = [
                ".site-header.page-element:not(.is-moved-by-drawer)",
                ".nav-mobile",
                ".ajaxify-drawer",
                "#MobileNav:not(.site-header__drawer)",
                ".header__close.fixed",
                ".site-header.headroom.headroom--top",
                "header.hero-active .hero-image-header-wrap",
                "#nav .wsmenu",
                "body:not(.scrolled-down) #site-control.site-control",
                ".nav-shift #page-banner.banner-under-header",
                ".nav-shift .container #main",
                "#shopify-section-general-header .main-header-wrapper:not(.sticky-header-scrolled) + .header-drawer",
                ".mobile_nav-fixed--true .page-banner",
                ".mobile_nav-fixed--true .page_banner",
                ".mobile_nav-fixed--false .page_banner",
                ".tt-desctop-parent-search .tt-dropdown-menu",
                ".header__search-bar-wrapper.is-fixed",
                "header#top.scroll-to-fixed-fixed:not(.js-header-sticky--fixed)",
                ".site-header.has-scrolled",
                ".site-header#header.header--has-scrolled",
                ".site-header#header.header--is-standard.header--standard",
                ".site-header#header.header--is-hamburger.header--standard",
                ".pageWrap #shopify-section-header nav.nav-hamburger.nav-main",
                "nav#header-menu.header__drawer.caps.drawer--visible .drawer__content",
              ]),
                (o = [
                  "body:not(.mobile-drawer--open) .page-wrapper.page-element",
                  ".site-header.is-standard.shift--alert",
                  ".large--hide.medium-down--show.sticky-header:not(.ui)",
                  "#shopify-section-static-header.site-header-sticky--open:not(.visible)",
                  "body:not(.site-header-sticky--scrolled) .site-navigation-wrapper + .site-mobile-nav .mobile-nav-panel",
                  "body:not(.js-drawer-open) .sticky-header.offset-by-announcement-bar",
                  "#announcement-bar.table",
                  'a#pagecontent[name="pagecontent"]',
                  ".header.header-fixed--true.is-absolute",
                  ".mobile_nav-fixed--false.is-active #header",
                  ".site-header-main-content .live-search--takeover .live-search-form",
                  "#shopify-section-header + .index-sections .slideshow-section",
                  "#shopify-section-header + .main_content_area .index-sections .slideshow-section",
                  "#shopify-section-header + .index-sections .banner-section",
                ]),
                i <= 1080 && r.push(".navigation.navigation-has-mega-nav"),
                i > 720 &&
                  r.push(
                    "#shopify-section-general-header .main-header-wrapper:not(.sticky-header-scrolled)"
                  ),
                i >= 800 &&
                  o.push(
                    "#site-wrap #header #shopify-section-header > .row.clearfix",
                    "#site-wrap #header #shopify-section-header + .curr-switcher.js"
                  );
            else if ("top_push_sticky" === t[a].position) {
              (n = [
                "#page header.util + #shopify-section-header.header",
                ".sticky-header #PageContainer #shopify-section-header.header-section",
              ]),
                (r = [
                  ".site-header--fixed",
                  ".site-header.site-header--homepage.site-header--transparent",
                  "#mobileNavBar",
                  "#StickyBar.sticky--active",
                  ".js-sticky-action-bar .action-area",
                  ".site-header.page-element:not(.is-moved-by-drawer)",
                  ".nav-mobile",
                  ".ajaxify-drawer",
                  ".sticky-navigation-container.sticky.stuck",
                  "#MobileNav:not(.site-header__drawer)",
                  ".header__close.fixed",
                  "#shopify-section-toolbar.toolbar-section",
                  ".site-header-sticky .site-header--stuck",
                  ".nav-container.nav-sticky",
                  "#navbarStickyDesktop.nav-sticky",
                  ".site-header.has-scrolled",
                  ".site-header#header.header--has-scrolled",
                  ".site-header#header.header--is-standard.header--standard",
                  ".site-header#header.header--is-hamburger.header--standard",
                  ".pageWrap #shopify-section-header nav.nav-hamburger.nav-main",
                  ".site-header.headroom",
                  'body > article.header__section-wrapper[role="banner"] #shopify-section-header.section-header',
                  "#site-header.site-header",
                  'body[class^="trademark--"] .shopify-section__header',
                  '[data-header-sidebar="true"] .main-sidebar',
                  ".ui.sticky.top",
                  "header.hero-active .hero-image-header-wrap",
                  ".header.sticky .bar.fixed",
                  'body[class^="kagami--"] #shopify-section-header',
                  "#page header.util",
                  "body:not(.show-mobile-nav) #toolbar.docked",
                  "body.show-mobile-nav #mobile-nav .inner",
                  "body.sticky-header .header .header-main-content[data-header-content]",
                  "#nav .wsmenu",
                  ".header_bot.enabled-sticky-menu.sticky",
                  ".transition-body #shopify-section-header #NavDrawer.drawer.drawer--is-open",
                  ".transition-body #shopify-section-header #CartDrawer.drawer.drawer--is-open",
                  "#StickyHeaderWrap #SiteHeader.site-header--stuck",
                  ".header__mobile-nav",
                  ".searching .search-bar-wrapper",
                  "#shopify-section-header .coverheader",
                  '#shopify-section-header header.header-section.scrolling[data-sticky="true"]',
                  "#header.mobile-sticky-header--true",
                  "#header.mm-fixed-top.mobile-header.mm-slideout",
                  "#mm-0.mm-page.mm-slideout #header.mobile-header.mobile-sticky-header--false",
                  "#site-control.site-control",
                  ".nav-shift #page-banner.banner-under-header",
                  ".nav-shift .container #main",
                  "#shopify-section-general-header .main-header-wrapper + .header-drawer",
                  "#shopify-section-general-header.main-header-section",
                  "#shopify-section-general-header nav.drawer-nav.allow-scroll-while-locked[data-drawer-nav]",
                  ".header-section .stuckMenu.isStuck",
                  "#shopify-section-mobile-navigation .shifter-navigation",
                  ".header-wrapper .sticky-header-wrapper.sticky",
                  "#mobile-header #mobile-nav.mobile-nav",
                  "header.is-sticky.st-visible",
                  'header#top.header:not([role="banner"])',
                  "header#velaHeader.velaHeader",
                  "body.fixed-header.fixed-header--all > header",
                  ".have-fixed .nav-bar",
                  ".header-bottom.on .header-panel",
                  ".have-fixed .nav-search",
                  ".mb-fixed .hd_mobile",
                  ".open-mn .hd_mobile .icon-menu, .open-user .close_user",
                  "html.open-mn .mn_mobile nav, html.open-user .mobile_customer nav",
                  "#sticky-wrapper.sticky-wrapper.is-sticky .wrapper-header-bt",
                  "#sticky-wrapper.sticky-wrapper.is-sticky .header-bottom[data-sticky-mb]",
                  ".header__search-bar-wrapper.is-fixed",
                  ".sticky-header.header-clone.act-scroll",
                  ".mobile_nav-fixed--false .page_banner",
                  ".header-container.sticky-header",
                  ".tt-stuck-nav.stuck",
                  ".tt-mobile-header-inline-stuck.stuck",
                  "header#top.scroll-to-fixed-fixed",
                  "header#header .header__content--sticky",
                  ".header--sticky.is-sticky .header__content",
                  ".stickyNav",
                  "#header-phantom.sticky-header.fixed-header",
                  "#sticky-info-product-template",
                  ".sticky-wrapper.is-sticky .header-sticky",
                  ".header__mobile.is-fixed",
                  "#shopify-section-header-sticky.header-sticky__placeholder",
                  "header#header-header.site-header",
                  "#shopify-section-pxs-announcement-bar + #shopify-section-header .main-header-wrapper",
                  ".sticky-header #PageContainer #shopify-section-header.header-section",
                  ".header-content .header-container.header-fixed .header-main",
                  ".header-content .header-container.header-mobile-fixed .header-main",
                  "body.site-header-sticky .site-header.site-header-sticky--scrolled",
                  "body.site-header-sticky .site-header",
                  "#app-header.sticky-on.sticky",
                  ".mm-page.mm-slideout #content_wrapper + .mobile-search",
                  ".docked-navigation-container .docked-navigation-container__inner",
                  ".docked-mobile-navigation-container .docked-mobile-navigation-container__inner",
                  'nav.navigation--sticky.navigation[aria-label="Primary Navigation"]',
                  ".site-header .header-bottom .header-mb.fixed",
                  ".kalles_2-0 #ntheader.live_stuck .ntheader_wrapper",
                  "#header.jsheader_sticky.menu_scroll_v1",
                  ".contentbody .menu_moblie.menu_mobilescroll",
                  ".site-header-wrapper.site-header--sticky",
                  ".body-cont #shopify-section-header > .cont-header.header-fixed-true",
                  "body.cc-animate-enabled[data-cc-animate-timeout] > #shopify-section-header.section-header",
                  "body.cc-animate-enabled[data-cc-animate-timeout].reveal-mobile-nav > .mobile-navigation-drawer",
                  "body.cc-animate-enabled[data-cc-animate-timeout].show-search #main-search.main-search",
                  'body.has-sticky-header .header__wrapper.js__header__stuck[data-header-sticky="sticky"]',
                  ".header__drawer.drawer--visible[data-drawer] .drawer__content .drawer__inner[data-drawer-inner]",
                  "#shopify-section-header.shopify-section-header-sticky sticky-header.header-wrapper",
                  'div.navbar.w-nav[data-w-id][role="banner"]',
                  '.w-nav-overlay nav.nav-menu.w-nav-menu[data-nav-menu-open][role="navigation"]',
                  "body > .page > #shopify-section-header.header__outer-wrapper",
                ]),
                (o = [
                  "body:not(.page-move--cart.mobile-drawer--open) #ajaxifyDrawer.is-visible",
                  "header.site-header.sticky:not(.ui)",
                  ".header.sticky-header--true",
                  ".header.sticky-header--false.is-absolute",
                  "#shopify-section-header.header header.sticky:not(.ui)",
                  "body:not(.mobile-drawer--open) .page-wrapper.page-element",
                  ".site-header.is-standard.shift--alert",
                  ".large--hide.medium-down--show.sticky-header:not(.ui)",
                  "#shopify-section-static-header.site-header-sticky--open",
                  "#shopify-section-static-header.visible",
                  ".site-navigation-wrapper + .site-mobile-nav .mobile-nav-panel",
                  ".site-header-main-content .live-search--takeover .live-search-form",
                  "body.colors--body-n-button-match .off-canvas--viewport .off-canvas--main-content",
                  "body:not(.js-drawer-open) .sticky-header.squished-header",
                  "#announcement-bar.table",
                  "body.meta-fixed #meta",
                  "header.main-header-wrap.main-header--minimal-sticky",
                  "#site-wrap #header #shopify-section-header + .curr-switcher.js",
                  ".main_nav_wrapper.sticky_nav.sticky_nav--stick",
                  ".main-nav__wrapper.sticky_nav.sticky_nav--stick",
                  ".header.header-fixed--true.is-absolute",
                  "#header.mobile_nav-fixed--true",
                  'body.mobile_nav-fixed--false a#pagecontent[name="pagecontent"]',
                  ".mobile_nav-fixed--false.is-active #header",
                  "body.mobile_nav-fixed--true .shopify-section--slideshow.under-menu",
                  "body.mobile_nav-fixed--true .shopify-section--image-with-text-overlay.under-menu",
                  '.mono-produit-true [class^="mobile-type-header"] nav.nav-bar',
                  ".wrap-all #headerApp",
                  ".group-header.sticky-menu.active",
                  "nav#page-menu.theme-modal > .inner",
                  ".body-cont #shopify-section-header > .cont-header.header-fixed-true nav.nav-bar",
                  ".halo-collection-content .toolbar.toolbar-fix",
                ]),
                i <= 480 && r.push("#ajaxifyModal"),
                i < 650 &&
                  r.push(
                    "#shopify-section-header #header.header__wrapper .header__content"
                  ),
                i <= 720 &&
                  r.push(
                    "body.is-mobile header.main-header.no-border[data-header]"
                  ),
                i <= 768 && o.push("#navBar.nav-bar:not(.opened)"),
                i <= 840 &&
                  o.push("body:not(.js-drawer-open) .medium-down--fixed"),
                i <= 948 &&
                  (r.push("#shopify-section-sidebar main-sidebar.sidebar"),
                  o.push("#content-holder #content")),
                i <= 1080 && r.push(".navigation.navigation-has-mega-nav"),
                i > 720 &&
                  o.push(
                    "body:not(.js-drawer-open) .sticky-header.main-header-wrapper"
                  ),
                i > 748 &&
                  o.push(
                    "#sidebar-holder #sidebar",
                    "#content-holder #content",
                    "#shopify-section-sidebar .sidebar__container-holder",
                    "#shopify-section-sidebar .sidebar__cart-handle"
                  ),
                i >= 800 &&
                  (r.push("#nav + #content_wrapper.mm-page .content.container"),
                  o.push(
                    ".mm-page.mm-slideout #content_wrapper #shopify-section-header + .index-sections .slideshow-section",
                    ".mm-page.mm-slideout #content_wrapper #shopify-section-header + .main_content_area .index-sections .slideshow-section",
                    ".mm-page.mm-slideout #content_wrapper #shopify-section-header + .index-sections .banner-section"
                  )),
                i > 1e3 &&
                  (r.push(".bodywrap.cf .page-header.cf"),
                  o.push(
                    ".bodywrap.cf .page-header.cf + #navbar.nav-style-out"
                  ));
              var s = document.querySelector(
                'body[class^="warehouse"] #shopify-section-header'
              );
              if (null != s) {
                var d = getComputedStyle(s).position,
                  c = "sticky" === d;
                c && r.push('body[class^="warehouse"] #shopify-section-header');
              }
            }
            for (var p = 0, l = 0; l < n.length; l++) {
              var h = document.querySelector(n[l]);
              if (h) {
                p = parseFloat(h.style.top);
                break;
              }
            }
            var m = "";
            n.length && (m = n.join() + "{top:" + (e + p) + "px !important;}");
            var b = "";
            r.length && (b = r.join() + "{top:" + e + "px !important;}");
            var u = "";
            o.length && (u = o.join() + "{margin-top:" + e + "px;}");
            jQuery("body").append(
              '<div id="qab_theme_integration_styles"><style>' +
                m +
                b +
                u +
                "</style></div>"
            );
          })(e);
        })();
      }, 0);
    var S = parseFloat(t[a].interval_time);
    S > 0 &&
      v(
        "qab_cool_down_seconds",
        S,
        parseFloat(t[a].interval_time) + parseFloat(t[a].show_time)
      );
    t[a].show_time > 0 &&
      setTimeout(function () {
        u(),
          jQuery("#qab_placeholder").trigger("qab_fully_unloaded", [
            t[a].position,
          ]),
          jQuery("#qab_container").trigger("qab_fully_unloaded", [
            t[a].position,
          ]),
          x(),
          (1 === t.length ||
            (t[a + 1] && t[a].countries !== t[a + 1].countries)) &&
            q();
      }, 1e3 * t[a].show_time);
    var O = 1e6,
      C = [
        "#announcement-bar.table[data-parallax]",
        "#PageContainer > .shopify-section.header-section.sticky-header",
        'body > article.header__section-wrapper[role="banner"] #shopify-section-header.section-header',
        "#NavDrawer",
        ".drawer + .drawer__close",
        ".search-popdown",
        '.drawer:not(".search-bar")',
        "#slideout-search-sidebar",
        "#navBar",
        ".header-toolbar.open-container",
        ".navigation__container",
        ".mobileMenu__overlay",
        ".SidebarMenu.Drawer",
        "#pushy-menu",
        ".nav-container.nav-main",
        "#site-overlay",
        ".mobilenav-overlay",
        ".mobile-menu-overlay",
        ".site-header-wrapper",
        ".ajaxcart-draw",
        ".overnav-overlay",
        ".mobilemenu.dblclick",
        "header.sticky",
        ".nav.side-nav",
        'body[class^="kagami--"] .page__overlay',
        'body[class^="focal--"] .page__overlay',
        "#sidebar #menu",
        "#nav .dropdown-menu",
        "#mobile-nav-return.mobile-nav-toggle",
        ".main-header-wrap .main-header .mobile-dropdown",
        ".page-header.cf + #navbar.nav-style-out",
        ".header-cart.slide",
        ".moTab-navigation",
        ".cart-popup-wrapper",
        ".mobile-nav-close",
        ".mobile-nav-wrapper",
        "#velaMenuMobile",
        'a[href="/cart"].dropdown_link + .cart_content',
        ".basel-close-side",
        ".mobile-nav-overlay",
        ".panel-menu.mobile-main-menu",
        "body > .page > #shopify-section-header.header__outer-wrapper",
        "#shopify-section-popup .popup",
        "#shopify-section-footer + .popup.js-popup",
        ".wrap-all>.overlay",
        "#shopify-section-header-vertical #mobile-header .mobile-header__content .mobile-menu",
        'aside[data-section-id="header-mobile"] .mobile-menu-container',
        ".unero-off-canvas-layer",
        ".site-header .mobile-navigation",
        ".menu-mobile.navbar",
        "#slide-side-menu",
        ".translate-header #dropdown-cart",
        "header .wrapper-navigation > .main-menu.jas-mb-style",
        ".wrapper-header #shopify-section-navigation .wrapper-navigation",
        ".mask-overlay",
        ".box_contentmenu_background",
        "#search-overlay.search-overlay",
        "nav.main-nav-bar",
      ];
    s < 650 && C.unshift("#SiteContainer #header.header__wrapper"),
      s < 768 && C.unshift(".cbp-spmenu.cbp-spmenu-vertical"),
      s < 992 &&
        C.unshift(".mobile__widget.mobile-header__nav .mobile__menu-wrapper"),
      s < 1024 && C.unshift('.mono-produit-true [class^="mobile-type-header"]');
    for (var A = 0; A < C.length; A++) {
      var P = jQuery(C[A]);
      if (P.length) {
        var F =
          "auto" === P.css("z-index") || P.css("z-index") <= 1
            ? 99999
            : P.css("z-index");
        (O = parseFloat(F) - 1), jQuery("#qab_background").css("z-index", O);
        break;
      }
    }
    jQuery("#qab_placeholder").trigger("qab_fully_loaded", [t[a].position]),
      jQuery("#qab_container").trigger("qab_fully_loaded", [t[a].position]);
  }
  function _() {
    if ("object" == typeof Shopify && Shopify.hasOwnProperty("shop"))
      return Shopify.shop;
    for (
      var e = document.getElementsByTagName("script"), a = 0;
      a < e.length;
      a++
    ) {
      if (
        e[a].hasAttribute("src") &&
        e[a].src.indexOf("quickannouncementbar") > -1
      )
        return e[a].src.substring(
          e[a].src.indexOf("shop=") + 5,
          e[a].src.length
        );
    }
    return document.domain;
  }
  function w(e) {
    if (k("qab_utm") === e) return !0;
    var a = document.location.href;
    return (
      a.length > 0 &&
      a.toLowerCase().indexOf(e.toLowerCase()) > 0 &&
      (v("qab_utm", e, 28800), !0)
    );
  }
  function k(e) {
    var a = ("; " + document.cookie).split("; " + e + "=");
    if (2 == a.length) return a.pop().split(";").shift();
  }
  function v(e, a, t) {
    if (t) {
      var i = new Date();
      i.setTime(i.getTime() + 1e3 * t);
      var n = "; expires=" + i.toGMTString();
    } else n = "";
    document.cookie = e + "=" + a + n + "; path=/";
  }
  function x() {
    var e = document.getElementById("qab_theme_integration_styles");
    e && e.parentNode.removeChild(e);
  }
  function q() {
    var e = document.getElementById("qab_container");
    e && parseFloat(e.style.height) > 0 && (e.style.height = "0");
    var a = document.getElementById("qab_placeholder");
    a && parseFloat(a.style.height) > 0 && (a.style.height = "0");
  }
  function j() {
    var e = !1;
    return (
      (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          navigator.userAgent.substr(0, 4)
        )) &&
        (e = !0),
      e
    );
  }
  return {
    qab_button_on_click: function (e) {
      e.preventDefault(),
        e.stopPropagation(),
        i &&
          jQuery.ajax({
            url:
              d +
              "qab_record_bar?shop=" +
              _() +
              "&bar_id=" +
              t[a].bar_id +
              "&event=click",
            method: "GET",
            dataType: "json",
            success: function (e) {
              v("qab_clicked_" + t[a].bar_id, "yes");
            },
          }),
        t[a].new_tab
          ? window.open(t[a].button_link, "_blank")
          : (window.location = t[a].button_link);
    },
    qab_close_on_click: function (e) {
      e.preventDefault(),
        e.stopPropagation(),
        jQuery("#qab_placeholder").trigger("qab_fully_unloaded", [
          t[a].position,
        ]),
        jQuery("#qab_container").trigger("qab_fully_unloaded", [t[a].position]),
        jQuery("#qab_placeholder").length > 0 &&
          setTimeout(function () {
            jQuery("#qab_placeholder").html("");
          }, 100),
        setTimeout(function () {
          jQuery("#qab_container").html("");
        }, 100),
        jQuery("#qab_placeholder").length > 0 && "inserted" === t[a].position
          ? jQuery("#qab_placeholder").css("paddingBottom", 0)
          : jQuery("#qab_placeholder").length > 0 &&
            "inserted_sticky" === t[a].position
          ? jQuery("#qab_placeholder").css("paddingBottom", 0)
          : "top_push" === t[a].position ||
            "top_push_sticky" === t[a].position ||
            ("top_cover" === t[a].position
              ? jQuery("#qab_container").css("display", "none")
              : "top_cover_nonsticky" === t[a].position
              ? jQuery("#qab_container").css("display", "none")
              : "bottom_cover" === t[a].position &&
                jQuery("body").css("paddingBottom", 0)),
        x(),
        q(),
        v("qab_close_clicked", "yes");
    },
  };
};
if (!hextom_qab_instance) var hextom_qab_instance = hextom_qab();
function qab_button_on_click(e) {
  hextom_qab_instance.qab_button_on_click(e);
}
function qab_close_on_click(e) {
  hextom_qab_instance.qab_close_on_click(e);
}
