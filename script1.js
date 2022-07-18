window.DiviPopupData = window.DiviAreaConfig = {
    "zIndex": 1000000,
    "animateSpeed": 400,
    "triggerClassPrefix": "show-popup-",
    "idAttrib": "data-popup",
    "modalIndicatorClass": "is-modal",
    "blockingIndicatorClass": "is-blocking",
    "defaultShowCloseButton": true,
    "withCloseClass": "with-close",
    "noCloseClass": "no-close",
    "triggerCloseClass": "close",
    "singletonClass": "single",
    "darkModeClass": "dark",
    "noShadowClass": "no-shadow",
    "altCloseClass": "close-alt",
    "popupSelector": ".et_pb_section.popup",
    "initializeOnEvent": "et_pb_after_init_modules",
    "popupWrapperClass": "area-outer-wrap",
    "fullHeightClass": "full-height",
    "openPopupClass": "da-overlay-visible",
    "overlayClass": "da-overlay",
    "exitIndicatorClass": "on-exit",
    "hoverTriggerClass": "on-hover",
    "clickTriggerClass": "on-click",
    "onExitDelay": 2000,
    "notMobileClass": "not-mobile",
    "notTabletClass": "not-tablet",
    "notDesktopClass": "not-desktop",
    "baseContext": "body",
    "activePopupClass": "is-open",
    "closeButtonClass": "da-close",
    "withLoaderClass": "with-loader",
    "debug": false,
    "ajaxUrl": "https:\/\/ngantenstory.co\/wp-admin\/admin-ajax.php",
    "sys": []
};
var divimode_loader = function () {
    "use strict";
    ! function (t) {
        t.DiviArea = t.DiviPopup = {
            loaded: !1
        };
        var n = t.DiviArea,
            i = n.Hooks = {},
            o = {};

        function r(t, n, i) {
            var r, e, c;
            if ("string" == typeof t)
                if (o[t]) {
                    if (n)
                        if ((r = o[t]) && i)
                            for (c = r.length; c--;)(e = r[c]).callback === n && e.context === i && (r[c] = !1);
                        else
                            for (c = r.length; c--;) r[c].callback === n && (r[c] = !1)
                } else o[t] = []
        }

        function e(t, n, i, r) {
            if ("string" == typeof t) {
                var e = {
                        callback: n,
                        priority: i,
                        context: r
                    },
                    c = o[t];
                c ? (c.push(e), c = function (t) {
                    var n, i, o, r, e = t.length;
                    for (r = 1; r < e; r++)
                        for (n = t[r], i = r; i > 0; i--)(o = t[i - 1]).priority > n.priority && (t[i] =
                            o, t[i - 1] = n);
                    return t
                }(c)) : c = [e], o[t] = c
            }
        }

        function c(t, n, i) {
            "string" == typeof n && (n = [n]);
            var r, e, c = [];
            for (r = 0; r < n.length; r++) Array.prototype.push.apply(c, o[n[r]]);
            for (e = 0; e < c.length; e++) {
                var a = void 0;
                c[e] && "function" == typeof c[e].callback && ("filter" === t ? void 0 !== (a = c[e].callback
                    .apply(c[e].context, i)) && (i[0] = a) : c[e].callback.apply(c[e].context, i))
            }
            if ("filter" === t) return i[0]
        }
        i.silent = function () {
            return i
        }, n.removeFilter = i.removeFilter = function (t, n) {
            r(t, n)
        }, n.removeAction = i.removeAction = function (t, n) {
            r(t, n)
        }, n.applyFilters = i.applyFilters = function (t) {
            for (var n = [], i = arguments.length - 1; i-- > 0;) n[i] = arguments[i + 1];
            return c("filter", t, n)
        }, n.doAction = i.doAction = function (t) {
            for (var n = [], i = arguments.length - 1; i-- > 0;) n[i] = arguments[i + 1];
            c("action", t, n)
        }, n.addFilter = i.addFilter = function (n, i, o, r) {
            e(n, i, parseInt(o || 10, 10), r || t)
        }, n.addAction = i.addAction = function (n, i, o, r) {
            e(n, i, parseInt(o || 10, 10), r || t)
        }, n.addActionOnce = i.addActionOnce = function (n, i, o, c) {
            e(n, i, parseInt(o || 10, 10), c || t), e(n, (function () {
                r(n, i)
            }), 1 + parseInt(o || 10, 10), c || t)
        }
    }(window);
    return {}
}();
