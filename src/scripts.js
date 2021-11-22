window.performance &&
  window.performance.mark &&
  window.performance.mark("shopify.content_for_header.start");

let Shopify = Shopify || {};
Shopify.shop = "persaman-new-york.myshopify.com";
Shopify.locale = "en";
Shopify.currency = { active: "USD", rate: "1.0" };
Shopify.country = "US";
Shopify.theme = {
  name: "Impulse (New)",
  id: 118198730946,
  theme_store_id: 857,
  role: "main",
};
Shopify.theme.handle = "null";
Shopify.theme.style = { id: null, handle: null };
Shopify.cdnHost = "cdn.shopify.com";
Shopify.routes = Shopify.routes || {};
Shopify.routes.root = "/";
//
!(function (o) {
  (o.Shopify = o.Shopify || {}).modules = !0;
})(window);
//
!(function (o) {
  function n() {
    var o = [];
    function n() {
      o.push(Array.prototype.slice.apply(arguments));
    }
    return (n.q = o), n;
  }
  var t = (o.Shopify = o.Shopify || {});
  (t.loadFeatures = n()), (t.autoloadFeatures = n());
})(window);
//
window.ShopifyPay = window.ShopifyPay || {};
window.ShopifyPay.apiHost = "shop.app/pay";

//

(function () {
  function asyncLoad() {
    var urls = [
      "https://cdn.hextom.com/js/quickannouncementbar.js?shop=persaman-new-york.myshopify.com",
      "./asyncload.js",
    ];
    for (var i = 0; i < urls.length; i++) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = urls[i];
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    }
  }
  if (window.attachEvent) {
    window.attachEvent("onload", asyncLoad);
  } else {
    window.addEventListener("load", asyncLoad, false);
  }
})();
//
var __st = {
  a: 6605611,
  offset: -18000,
  reqid: "989ceaf2-7d8f-46f2-a5f4-6db4bc20411f",
  pageurl: "www.persamannewyork.com/",
  u: "64124b7f57eb",
  p: "home",
};
//
window.ShopifyPaypalV4VisibilityTracking = true;
//
!(function (o) {
  o.addEventListener("DOMContentLoaded", function () {
    (window.Shopify = window.Shopify || {}),
      (window.Shopify.recaptchaV3 = window.Shopify.recaptchaV3 || {
        siteKey: "6LcCR2cUAAAAANS1Gpq_mDIJ2pQuJphsSQaUEuc9",
      });
    var t = [
      'form[action*="/contact"] input[name="form_type"][value="contact"]',
      'form[action*="/comments"] input[name="form_type"][value="new_comment"]',
      'form[action*="/account"] input[name="form_type"][value="customer_login"]',
      'form[action*="/account"] input[name="form_type"][value="recover_customer_password"]',
      'form[action*="/account"] input[name="form_type"][value="create_customer"]',
      'form[action*="/contact"] input[name="form_type"][value="customer"]',
    ].join(",");
    function n(e) {
      e = e.target;
      null == e ||
        (null !=
          (e = (function e(t, n) {
            if (null == t.parentElement) return null;
            if ("FORM" != t.parentElement.tagName) return e(t.parentElement, n);
            for (var o = t.parentElement.action, r = 0; r < n.length; r++)
              if (-1 !== o.indexOf(n[r])) return t.parentElement;
            return null;
          })(e, ["/contact", "/comments", "/account"])) &&
          null != e.querySelector(t) &&
          ((e = o.createElement("script")).setAttribute(
            "src",
            "https://cdn.shopify.com/shopifycloud/storefront-recaptcha-v3/v0.6/index.js",
            "./index.js"
          ),
          o.body.appendChild(e),
          o.removeEventListener("focus", n, !0),
          o.removeEventListener("change", n, !0),
          o.removeEventListener("click", n, !0)));
    }
    o.addEventListener("click", n, !0),
      o.addEventListener("change", n, !0),
      o.addEventListener("focus", n, !0);
  });
})(document);
//
(function () {
  if ("sendBeacon" in navigator && "performance" in window) {
    var session_token = document.cookie.match(/_shopify_s=([^;]*)/);
    function handle_abandonment_event(e) {
      var entries = performance.getEntries().filter(function (entry) {
        return /monorail-edge.shopifysvc.com/.test(entry.name);
      });
      if (!window.abandonment_tracked && entries.length === 0) {
        window.abandonment_tracked = true;
        var currentMs = Date.now();
        var navigation_start = performance.timing.navigationStart;
        var payload = {
          shop_id: 6605611,
          url: window.location.href,
          navigation_start,
          duration: currentMs - navigation_start,
          session_token:
            session_token && session_token.length === 2 ? session_token[1] : "",
          page_type: "index",
        };
        window.navigator.sendBeacon(
          "https://monorail-edge.shopifysvc.com/v1/produce",
          JSON.stringify({
            schema_id: "online_store_buyer_site_abandonment/1.1",
            payload: payload,
            metadata: {
              event_created_at_ms: currentMs,
              event_sent_at_ms: currentMs,
            },
          })
        );
      }
    }
    window.addEventListener("pagehide", handle_abandonment_event);
  }
})();
//
