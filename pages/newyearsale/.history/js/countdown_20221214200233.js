! function(a, b, c) {
    function d() { G !== window.innerWidth && (G = window.innerWidth, g()) }

    function e(a, b, c, d) { var e = parseInt(getComputedStyle(document.documentElement).fontSize, 10) / 16,
            f = parseInt(getComputedStyle(b).fontSize, 10) / 16 / e,
            g = d / b.scrollWidth,
            h = g * f; return 4 > h ? (a.style.fontSize = "", c.redraw(), !1) : (a.style.fontSize = h + "rem", a.setAttribute("data-scale-rounded", Math.round(h).toString()), c.redraw(), !0) }

    function f(a, b) { if (!A.isSlow()) { for (var c, d, f = window.getComputedStyle(a.parentNode), g = parseInt(f.getPropertyValue("padding-left"), 10), h = parseInt(f.getPropertyValue("padding-right"), 10), i = a.parentNode.clientWidth - g - h, j = a.getAttribute("data-scale-max"), k = a.getAttribute("data-scale-hide"), l = j ? H.indexOf(j) : I, m = a.querySelectorAll(".soon-group-sub"), n = 0, o = m.length, p = a.querySelector(".soon-group"); o > n; n++) m[n].style.display = ""; if ("fit" === j || "fill" === j) { if (e(a, p, b, i)) return;
                l = 0 }
            c = l;
            do a.setAttribute("data-scale", H[c]), c++; while (p.scrollWidth > i && H[c]); if (c !== l && b.redraw(), !(p.scrollWidth <= i || "none" === k)) { n = 0, d = !1;
                do { if ("0" !== m[n].getAttribute("data-value")) break;
                    m[n].style.display = "none", d = !0, n++ } while (p.scrollWidth > i && o > n); if (d && b.redraw(), "empty" !== k) { n = o - 1, d = !1;
                    do m[n].style.display = "none", d = !0, n--; while (p.scrollWidth > i && n > 0);
                    d && b.redraw() } } } }

    function g() { for (var a = J.length - 1; a >= 0; a--) f(J[a].node, J[a].presenter) }

    function h(a) { for (var b = 0, c = J.length; c > b; b++)
            if (J[b].node === a) return b;
        return null }

    function i(a) { for (var b = 0, c = K.length; c > b; b++)
            if (K[b].node === a) return b;
        return null }

    function j(a) { var b = h(a); return null === b ? null : J[b] }

    function k(a) {-1 === a.className.indexOf("soon") && (a.className += " soon"), A.supportsAnimation() || (a.className += " soon-no-animation"); var b = a.getAttribute("data-layout");
        (!b || -1 === b.indexOf("group") && -1 === b.indexOf("line")) && (b || (b = ""), a.setAttribute("data-layout", b + " group")), A.isSlow() && (a.removeAttribute("data-visual"), a.setAttribute("data-view", "text"), a.className += " soon-slow-browser") }

    function l(a, b, c) { b[c] && !a.getAttribute("data-" + c) && a.setAttribute("data-" + c, b[c]) }

    function m(a, b) { return a.getAttribute("data-" + b) }

    function n(a, b) { var c = null !== a.due || null !== a.since,
            d = null; return c ? d = a.since ? C.chain(function(b) { return a.now ? -b : b }, C.offset(a.now ? a.now.getTime() : (new Date).getTime()), C.diff(a.since.getTime()), function(a) { return Math.abs(a) }, function(a) { return Math.max(0, a) }, function(b) { return a.callback.onTick(b, a.since), b }, C.event(function(a) { return 0 === a }, b), C.duration(a.format, a.cascade)) : C.chain(C.offset(a.now.getTime()), C.diff(a.due.getTime()), function(a) { return Math.max(0, a) }, function(b) { return a.callback.onTick(b, a.due), b }, C.event(function(a) { return 0 >= a }, b), C.duration(a.format, a.cascade)) : (d = function() { var a = new Date; return [a.getHours(), a.getMinutes(), a.getSeconds()] }, a.format = ["h", "m", "s"], a.separator = ":"), d }

    function o(a, b) { for (var c, d, e, f, g, h, i, j = null !== a.due || null !== a.since, k = n(a, b), l = { type: "group", options: { transform: k, presenters: [] } }, m = [], o = a.format.length, r = 0; o > r; r++) h = a.format[r], i = r, c = { type: "group", options: { className: "soon-group-sub", presenters: [] } }, a.visual && (c.options.presenters.push(p(a, h)), a.reflect && c.options.presenters.push(p(a, h, "soon-reflection"))), d = { type: "text", options: { className: "soon-label" } }, d.options.transform = a.singular ? C.plural(a.label[h], a.label[h + "_s"]) : function(b) { return function() { return a.label[b + "_s"] } }(h), e = q(a, h), f = null, a.reflect && !a.visual && (f = q(a, h, "soon-reflection")), c.options.presenters.push(e), f && c.options.presenters.push(f), j && c.options.presenters.push(d), a.separator && (g = { type: "group", options: { className: "soon-group-separator", presenters: [c] } }, 0 !== i && (a.reflect && g.options.presenters.unshift({ type: "text", options: { className: "soon-separator soon-reflection", transform: function() { return a.separator } } }), g.options.presenters.unshift({ type: "text", options: { className: "soon-separator", transform: function() { return a.separator } } })), c = g), m.push(c); return l.options.presenters = m, l }

    function p(a, b, c) { var d = a.visual.split(" "),
            e = d[0]; return d.shift(), { type: e, options: { className: "soon-visual " + (c || ""), transform: C.chain(C.progress(A.MAX[b]), C.cap()), modifiers: d, animate: "ms" !== b } } }

    function q(a, b, c) { return a.chars ? { type: "repeater", options: { delay: "text" === a.view ? 0 : 50, className: "soon-value " + (c || ""), transform: C.chain(C.pad(a.padding[b]), C.chars()), presenter: { type: a.view } } } : { type: "group", options: { className: "soon-group-sub-sub soon-value " + (c || ""), transform: C.pad(a.padding[b]), presenters: [{ type: a.view }] } } }

    function r(a, b, c) { J.push({ node: a, ticker: b, presenter: c }) }

    function s(a) { return new(t(a.type))(a.options || {}) }

    function t(a) { return B[a.charAt(0).toUpperCase() + a.slice(1)] }

    function u(a, b) { var c = a.getElementsByClassName ? a.getElementsByClassName("soon-placeholder") : a.querySelectorAll("soon-placeholder");
        c.length && (c[0].innerHTML = "", a = c[0]); var d = s(b); return a.appendChild(d.getElement()), d }

    function v(a, b, c) { var d = new E(function(a) { b.setValue(a) }, { rate: c }); return r(a, d, b), d.start(), f(a, b), d }

    function w(a) { var b, c, d = ["labels", "padding"],
            e = 2,
            f = { since: m(a, "since"), due: m(a, "due"), now: m(a, "now"), face: m(a, "face"), visual: m(a, "visual"), format: m(a, "format"), singular: "true" === m(a, "singular"), reflect: "true" === m(a, "reflect"), scaleMax: m(a, "scale-max"), scaleHide: m(a, "scale-hide"), separateChars: !("false" === m(a, "separate-chars")), cascade: !("false" === m(a, "cascade")), separator: m(a, "separator"), padding: !("false" === m(a, "padding")), eventComplete: m(a, "event-complete"), eventTick: m(a, "event-tick") }; for (var g in L)
            if (L.hasOwnProperty(g))
                for (b = L[g], c = 0; e > c; c++) f[d[c] + b.option] = m(a, d[c] + "-" + b.option.toLowerCase());
        return z.create(a, f) }

    function x(a) { var b; if (0 === a.indexOf("in ")) { var c = a.match(M),
                d = parseInt(c[1], 10),
                e = c[2]; return b = new Date, -1 !== e.indexOf("hour") ? b.setHours(b.getHours() + d) : -1 !== e.indexOf("minute") ? b.setMinutes(b.getMinutes() + d) : -1 !== e.indexOf("second") && b.setSeconds(b.getSeconds() + d), b } if (-1 !== a.indexOf("at ")) { b = new Date; var f = b.getTime(),
                g = -1 !== a.indexOf("reset");
            a = a.replace("reset ", ""); var h = a.split("at "),
                i = h[1].match(N),
                j = parseInt(i[1], 10),
                k = i[2] ? parseInt(i[2], 10) : 0,
                l = i[3] ? parseInt(i[3], 10) : 0,
                m = h[1].split(" zone "); if (m && (m = m[1]), h[0].length) { var n = A.getDayIndex(h[0]),
                    o = (n + 7 - b.getDay()) % 7;
                b.setDate(b.getDate() + o) }
            b.setHours(j), b.setMinutes(k), b.setSeconds(l), b.setMilliseconds(0), g && f >= b.getTime() && b.setHours(j + (h[0].length ? 168 : 24)); var p = A.pad,
                q = b.getFullYear() + "-" + p(b.getMonth() + 1) + "-" + p(b.getDate()),
                r = p(b.getHours()) + ":" + p(b.getMinutes()) + ":" + p(b.getSeconds());
            a = q + "T" + r + (m || "") } return A.isoToDate(a) }

    function y(a, b) { if (0 === b.indexOf(a)) return ""; if ("w" === a && -1 !== b.indexOf("M")) return ""; if ("d" === a) { if (-1 !== b.indexOf("w")) return ""; if (-1 !== b.indexOf("M")) return "00" } return null }
    if (document.querySelectorAll && !a.Soon) {
        var z = {},
            A = {},
            B = {},
            C = {},
            D = { timer: 0, cbs: [], register: function(a) { D.cbs.push(a) }, deregister: function(a) { for (var b = D.cbs.length - 1; b >= 0; b--) D.cbs[b] === a && D.cbs.splice(b, 1) }, onresize: function() { clearTimeout(D.timer), D.timer = setTimeout(function() { D.resize() }, 100) }, resize: function() { for (var a = 0, b = D.cbs.length; b > a; a++) D.cbs[a]() }, init: function() { a.addEventListener && a.addEventListener("resize", D.onresize, !1) } };
        Function.prototype.bind || (Function.prototype.bind = function(a) { if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable"); var b = Array.prototype.slice.call(arguments, 1),
                    c = this,
                    d = function() {},
                    e = function() { return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments))) }; return d.prototype = this.prototype, e.prototype = new d, e }), Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) { var c; if (null == this) throw new TypeError('"this" is null or not defined'); var d = Object(this),
                    e = d.length >>> 0; if (0 === e) return -1; var f = +b || 0; if (1 / 0 === Math.abs(f) && (f = 0), f >= e) return -1; for (c = Math.max(f >= 0 ? f : e - Math.abs(f), 0); e > c;) { if (c in d && d[c] === a) return c;
                    c++ } return -1 }),
            function() {
                function a(a) { this.el = a; for (var b = a.className.replace(/^\s+|\s+$/g, "").split(/\s+/), c = 0; c < b.length; c++) d.call(this, b[c]) }

                function b(a, b, c) { Object.defineProperty ? Object.defineProperty(a, b, { get: c }) : a.__defineGetter__(b, c) } if (!("undefined" == typeof window.Element || "classList" in document.documentElement)) { var c = Array.prototype,
                        d = c.push,
                        e = c.splice,
                        f = c.join;
                    a.prototype = { add: function(a) { this.contains(a) || (d.call(this, a), this.el.className = this.toString()) }, contains: function(a) { return -1 != this.el.className.indexOf(a) }, item: function(a) { return this[a] || null }, remove: function(a) { if (this.contains(a)) { for (var b = 0; b < this.length && this[b] != a; b++);
                                e.call(this, b, 1), this.el.className = this.toString() } }, toString: function() { return f.call(this, " ") }, toggle: function(a) { return this.contains(a) ? this.remove(a) : this.add(a), this.contains(a) } }, window.DOMTokenList = a, b(Element.prototype, "classList", function() { return new a(this) }) } }(),
            function() { for (var a = 0, b = ["webkit", "moz"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(b) { var c = (new Date).getTime(),
                        d = Math.max(0, 16 - (c - a)),
                        e = window.setTimeout(function() { b(c + d) }, d); return a = c + d, e }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) { clearTimeout(a) }) }(), A = function() {
                function a() { if (!window.getComputedStyle) return !1; var a, b = document.createElement("div"),
                        d = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
                    document.body.insertBefore(b, null); for (var e in d) b.style[e] !== c && (b.style[e] = "translate3d(1px,1px,1px)", a = window.getComputedStyle(b).getPropertyValue(d[e])); return document.body.removeChild(b), a !== c && a.length > 0 && "none" !== a }

                function b() { var a = !1,
                        b = "animation",
                        d = "",
                        e = "Webkit Moz O ms Khtml".split(" "),
                        f = "",
                        g = 0,
                        h = document.body,
                        i = e.length; if (h.style.animationName !== c && (a = !0), a === !1)
                        for (; i > g; g++)
                            if (h.style[e[g] + "AnimationName"] !== c) { f = e[g], b = f + "Animation", d = "-" + f.toLowerCase() + "-", a = !0; break }
                    return a } var d, e, f = function(a) { var b, c, d = /^(\d{4}\-\d\d\-\d\d([tT ][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/,
                            e = d.exec(a) || []; if (e[1]) { b = e[1].split(/\D/); for (var f = 0, g = b.length; g > f; f++) b[f] = parseInt(b[f], 10) || 0; return b[1] -= 1, b = new Date(Date.UTC.apply(Date, b)), b.getDate() ? (e[5] && (c = 60 * parseInt(e[5], 10), e[6] && (c += parseInt(e[6], 10)), "+" == e[4] && (c *= -1), c && b.setUTCMinutes(b.getUTCMinutes() + c)), b) : Number.NaN } return Number.NaN },
                    g = new Date("2015-01-01T12:00:00.123+01:00"),
                    h = isNaN(g) ? function(a) { return f(a) } : function(a) { return new Date(a) }; "undefined" != typeof document.hidden ? (e = "hidden", d = "visibilitychange") : "undefined" != typeof document.mozHidden ? (e = "mozHidden", d = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (e = "msHidden", d = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (e = "webkitHidden", d = "webkitvisibilitychange"); var i = !1,
                    j = 1,
                    k = 1e3 * j,
                    l = 60 * k,
                    m = 60 * l,
                    n = 24 * m,
                    o = 365 / 52 * n,
                    p = 365 / 12 * n,
                    q = 365 * n,
                    r = { MAX: { y: 100, M: 12, w: 52, d: 365, h: 24, m: 60, s: 60, ms: 1e3 }, AMOUNT: { y: q, M: p, w: o, d: n, h: m, m: l, s: k, ms: j }, CIRC: 2 * Math.PI, QUART: .5 * Math.PI, DAYS: ["su", "mo", "tu", "we", "th", "fr", "sa"], setText: null, documentVisibilityEvent: d, pad: function(a) { return ("00" + a).slice(-2) }, getDayIndex: function(a) { return this.DAYS.indexOf(a.substr(0, 2)) }, isSlow: function() { return !("textContent" in document.body) }, supportsAnimation: function() { return i = b() && a(), r.supportsAnimation = function() { return i }, i }, toArray: function(a) { return Array.prototype.slice.call(a) }, toBoolean: function(a) { return "string" == typeof a ? "true" === a : a }, isoToDate: function(a) { if (a.match(/(Z)|([+\-][0-9]{2}:?[0-9]*$)/g)) return h(a);
                            a += -1 !== a.indexOf("T") ? "Z" : ""; var b = h(a); return this.dateToLocal(b) }, dateToLocal: function(a) { return new Date(a.getTime() + 6e4 * a.getTimezoneOffset()) }, prefix: function() { for (var a, b = ["webkit", "Moz", "ms", "O"], c = 0, d = b.length, e = document.createElement("div").style; d > c; c++)
                                if (a = b[c] + "Transform", a in e) return b[c];
                            return null }(), setTransform: function(a, b) { a.style[this.prefix + "Transform"] = b, a.style.transform = b }, setTransitionDelay: function(a, b) { a.style[this.prefix + "TransitionDelay"] = b + "," + b + "," + b, a.style.TransitionDelay = b + "," + b + "," + b }, getShadowProperties: function(a) { if (a = a ? a.match(/(-?\d+px)|(rgba\(.+\))|(rgb\(.+\))|(#[abcdef\d]+)/g) : null, !a) return null; for (var b, c = 0, d = a.length, e = []; d > c; c++) - 1 !== a[c].indexOf("px") ? e.push(parseInt(a[c], 10)) : b = a[c]; return e.push(b), 5 === e.length && e.splice(3, 1), e }, getDevicePixelRatio: function() { return window.devicePixelRatio || 1 }, isDocumentHidden: function() { return e ? document[e] : !1 }, triggerAnimation: function(a, b) { a.classList.remove(b), window.requestAnimationFrame(function() { a.offsetLeft, a.classList.add(b) }) }, getBackingStoreRatio: function(a) { return a.webkitBackingStorePixelRatio || a.mozBackingStorePixelRatio || a.msBackingStorePixelRatio || a.oBackingStorePixelRatio || a.backingStorePixelRatio || 1 }, setShadow: function(a, b, c, d, e) { a.shadowOffsetX = b, a.shadowOffsetY = c, a.shadowBlur = d, a.shadowColor = e }, getColorBetween: function(a, b, c) {
                            function d(a, b) { return a + Math.round((b - a) * c) }

                            function e(a) { a = Math.min(a, 255), a = Math.max(a, 0); var b = a.toString(16); return b.length < 2 && (b = "0" + b), b } return "#" + e(d(a.r, b.r)) + e(d(a.g, b.g)) + e(d(a.b, b.b)) }, getGradientColors: function(a, b, c) { for (var d = [], e = 0, f = c, g = 1 / (f - 1), h = 0; f > e; e++) d[e] = this.getColorBetween(a, b, h), h += g; return d }, hexToRgb: function(a) { var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a); return b ? { r: parseInt(b[1], 16), g: parseInt(b[2], 16), b: parseInt(b[3], 16) } : null }, drawGradientArc: function(a, b, c, d, e, f, g, h, i, j, k, l, m) { if (!(g > h)) { l && this.drawArc(a, b, c, d, e, f, g, h, i, "transparent", l, m); for (var n, o, p, q, r, s, t, u = this.hexToRgb(j), v = this.hexToRgb(k), w = this.hexToRgb(this.getColorBetween(u, v, (g - e) / f)), x = this.hexToRgb(this.getColorBetween(u, v, (h - e) / f)), y = h - g, z = Math.ceil(30 * y), A = this.getGradientColors(w, x, z), B = -this.QUART + this.CIRC * g, C = A.length, D = 0, E = this.CIRC * y / C; C > D; D++) o = A[D], p = A[D + 1] || o, q = b + Math.cos(B) * d, s = b + Math.cos(B + E) * d, r = c + Math.sin(B) * d, t = c + Math.sin(B + E) * d, a.beginPath(), n = a.createLinearGradient(q, r, s, t), n.addColorStop(0, o), n.addColorStop(1, p), a.lineCap = m, a.strokeStyle = n, a.arc(b, c, d, B - .005, B + E + .005), a.lineWidth = i, a.stroke(), a.closePath(), B += E } }, drawArc: function(a, b, c, d, e, f, g, h, i, j, k, l) { if (!(g > h)) { if (null !== j.gradient.colors && "follow" === j.gradient.type) return void this.drawGradientArc(a, b, c, d, e, f, g, h, i, j.gradient.colors[0], j.gradient.colors[1], k, l); if (k) { var m = "transparent" === j.fill ? 9999 : 0;
                                    a.save(), a.translate(m, 0), this.setShadow(a, k[0] - m, k[1], k[2], k[3]) } if (a.beginPath(), a.lineWidth = i, a.arc(b, c, d, -this.QUART + this.CIRC * g, -this.QUART + this.CIRC * h, !1), j.gradient.colors) { var n = "horizontal" === j.gradient.type ? a.createLinearGradient(0, d, 2 * d, d) : a.createLinearGradient(d, 0, d, 2 * d);
                                    n.addColorStop(0, j.gradient.colors[0]), n.addColorStop(1, j.gradient.colors[1]), a.strokeStyle = n } else a.strokeStyle = "transparent" === j.fill ? "#000" : j.fill;
                                a.lineCap = l, a.stroke(), k && a.restore() } }, drawRing: function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) { d + e > 1 && (d -= -1 + d + e, c += .5 * e); var q = c,
                                r = c + d,
                                s = b * d,
                                t = .5 - Math.abs(-.5 + b),
                                u = c + (s - t * e),
                                v = c + (s + (1 - t) * e);
                            (g || k) && (p ? (this.drawArc(a, f, f, g, c, d, v, r, h, i, j, o), this.drawArc(a, f, f, k, c, d, q, u, l, m, n, o)) : (this.drawArc(a, f, f, g, c, d, q, u, h, i, j, o), this.drawArc(a, f, f, k, c, d, v, r, l, m, n, o))) }, setTextContent: function(a, b) { "textContent" in document.body ? (a.textContent = b, r.setTextContent = function(a, b) { a.textContent = b }) : (a.innerText = b, r.setTextContent = function(a, b) { a.innerText = b }) } }; return r }(), C.cap = function(a, b) { return a = a || 0, b = b || 1,
                    function(c) { return Math.min(Math.max(c, a), b) } }, C.chain = function(a) { return function() { var b, c = a.toArray(arguments),
                        d = c.length; return function(a) { for (b = 0; d > b; b++) a = c[b](a); return a } } }(A), C.chars = function() { return function(a) { return (a + "").split("") } }, C.diff = function(a) { return function(b) { return a - b } }, C.duplicate = function(a) { var b, c = new Array(a); return function(d) { for (b = a; b--;) c[b] = d; return c } }, C.duration = function(a) { var b = ["y", "M", "w", "d", "h", "m", "s", "ms"],
                    c = b.length; return function(d, e) { return function(f) { for (var g, h, i, j = 0, k = [], l = f; c > j; j++) h = b[j], i = a.AMOUNT[h], g = Math.floor(l / i), -1 !== d.indexOf(h) ? (l %= i, k.push(Math.max(0, g))) : e || (l %= i); return k } } }(A), C.event = function(a, b) { return function(c) { return a(c) && b(), c } }, C.modulate = function(a) { return function(b) { return parseInt(b, 10) % 2 === 0 ? a : "" } }, C.now = function() { return function() { return (new Date).getTime() } }, C.offset = function(a) { return function(b) { return a + b } }, C.pad = function(a) { return a = a || "",
                    function(b) { return (a + b).slice(-a.length) } }, C.plural = function(a, b) { return function(c) { return 1 === parseInt(c, 10) ? a : b } }, C.progress = function(a, b) { return function(c) { return c = parseInt(c, 10), b > a ? c / b : (a - c) / a } }, B.Console = function() { var a = function(a) { this._transform = a.transform || function(a) { return a } }; return a.prototype = { redraw: function() {}, destroy: function() { return null }, getElement: function() { return null }, setValue: function(a) { console.log(this._transform(a)) } }, a }(), B.Fill = function(a) { var b = function(a) { this._wrapper = document.createElement("span"), this._wrapper.className = "soon-fill " + (a.className || ""), this._transform = a.transform || function(a) { return a }, this._direction = "to-top"; for (var b = 0, c = a.modifiers.length; c > b; b++)
                        if (0 === a.modifiers[b].indexOf("to-")) { this._direction = a.modifiers[b]; break }
                    this._fill = document.createElement("span"), this._fill.className = "soon-fill-inner", this._progress = document.createElement("span"), this._progress.className = "soon-fill-progress", this._fill.appendChild(this._progress), this._wrapper.appendChild(this._fill) }; return b.prototype = { redraw: function() {}, destroy: function() { return this._wrapper }, getElement: function() { return this._wrapper }, setValue: function(b) { var c, d = this._transform(b); switch (this._direction) {
                            case "to-top":
                                c = "translateY(" + (100 - 100 * d) + "%)"; break;
                            case "to-top-right":
                                c = "scale(1.45) rotateZ(-45deg) translateX(" + (-100 + 100 * d) + "%)"; break;
                            case "to-top-left":
                                c = "scale(1.45) rotateZ(45deg) translateX(" + (100 - 100 * d) + "%)"; break;
                            case "to-left":
                                c = "translateX(" + (100 - 100 * d) + "%)"; break;
                            case "to-right":
                                c = "translateX(" + (-100 + 100 * d) + "%)"; break;
                            case "to-bottom-right":
                                c = "scale(1.45) rotateZ(45deg) translateX(" + (-100 + 100 * d) + "%)"; break;
                            case "to-bottom-left":
                                c = "scale(1.45) rotateZ(-45deg) translateX(" + (100 - 100 * d) + "%)"; break;
                            case "to-bottom":
                                c = "translateY(" + (-100 + 100 * d) + "%)" }
                        a.setTransform(this._progress, c) } }, b }(A), B.Flip = function(a) { var b = function(b) { this._wrapper = document.createElement("span"), this._wrapper.className = "soon-flip " + (b.className || ""), this._transform = b.transform || function(a) { return a }, this._inner = document.createElement("span"), this._inner.className = "soon-flip-inner", this._card = document.createElement("span"), this._card.className = "soon-flip-card", a.supportsAnimation() ? (this._front = document.createElement("span"), this._front.className = "soon-flip-front soon-flip-face", this._back = document.createElement("span"), this._back.className = "soon-flip-back soon-flip-face", this._card.appendChild(this._front), this._card.appendChild(this._back), this._top = document.createElement("span"), this._top.className = "soon-flip-top soon-flip-face", this._card.appendChild(this._top), this._bottom = document.createElement("span"), this._bottom.className = "soon-flip-bottom soon-flip-face", this._card.appendChild(this._bottom)) : (this._fallback = document.createElement("span"), this._fallback.className = "soon-flip-fallback", this._card.appendChild(this._fallback)), this._bounding = document.createElement("span"), this._bounding.className = "soon-flip-bounding", this._card.appendChild(this._bounding), this._inner.appendChild(this._card), this._wrapper.appendChild(this._inner), this._frontValue = null, this._backValue = null, this._boundingLength = 0 }; return b.prototype = { redraw: function() {}, _setBoundingForValue: function(a) { var b = (a + "").length; if (b !== this._boundingLength) { this._boundingLength = b; for (var c = "", d = 0; b > d; d++) c += "8";
                            this._bounding.textContent = c; var e = parseInt(getComputedStyle(this._card).fontSize, 10),
                                f = this._bounding.offsetWidth / e;
                            this._inner.style.width = f + .1 * (b - 1) + "em" } }, destroy: function() { return this._wrapper }, getElement: function() { return this._wrapper }, setValue: function(b) { return b = this._transform(b), a.supportsAnimation() ? this._frontValue ? void(this._backValue && this._backValue === b || this._frontValue === b || (this._backValue && (this._bottom.textContent = this._backValue, this._front.textContent = this._backValue, this._frontValue = this._backValue), this._setBoundingForValue(b), this._top.textContent = b, this._back.textContent = b, this._backValue = b, a.triggerAnimation(this._inner, "soon-flip-animate"))) : (this._bottom.textContent = b, this._front.textContent = b, this._frontValue = b, void this._setBoundingForValue(b)) : (this._fallback.textContent = b, void this._setBoundingForValue(b)) } }, b }(A), B.Group = function(a) { var b = function(a) { this._wrapper = document.createElement("span"), this._wrapper.className = "soon-group " + (a.className || ""), this._inner = document.createElement("span"), this._inner.className = "soon-group-inner", this._wrapper.appendChild(this._inner), this._transform = a.transform || function(a) { return a }, this._presenters = a.presenters, this._presenterStorage = [] }; return b.prototype = { redraw: function() { for (var a = this._presenterStorage.length - 1; a >= 0; a--) this._presenterStorage[a].redraw() }, destroy: function() { for (var a = this._presenterStorage.length - 1; a >= 0; a--) this._presenterStorage[a].destroy(); return this._wrapper }, getElement: function() { return this._wrapper }, setValue: function(b) { this._wrapper.setAttribute("data-value", b), b = this._transform(b); for (var c, d = 0, e = b instanceof Array, f = e ? b.length : this._presenters.length; f > d; d++) c = this._presenterStorage[d], c || (c = a(this._presenters[d]), this._inner.appendChild(c.getElement()), this._presenterStorage[d] = c), c.setValue(e ? b[d] : b) } }, b }(s), B.Matrix = function() { for (var a, b = { " ": [
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0]
                        ], 0: [
                            [0, 1, 1, 1, 0],
                            [1, 1, 0, 1, 1],
                            [1, 1, 0, 1, 1],
                            [1, 1, 0, 1, 1],
                            [1, 1, 0, 1, 1],
                            [1, 1, 0, 1, 1],
                            [0, 1, 1, 1, 0]
                        ], 1: [
                            [0, 0, 1, 1, 0],
                            [0, 1, 1, 1, 0],
                            [0, 0, 1, 1, 0],
                            [0, 0, 1, 1, 0],
                            [0, 0, 1, 1, 0],
                            [0, 0, 1, 1, 0],
                            [0, 1, 1, 1, 1]
                        ], 2: [
                            [0, 1, 1, 1, 0],
                            [1, 1, 0, 1, 1],
                            [0, 0, 0, 1, 1],
                            [0, 0, 1, 1, 0],
                            [0, 1, 1, 0, 0],
                            [1, 1, 0, 0, 0],
                            [1, 1, 1, 1, 1]
                        ], 3: [
                            [0, 1, 1, 1, 0],
                            [1, 1, 0, 1, 1],
                            [0, 0, 0, 1, 1],
                            [0, 0, 1, 1, 0],
                            [0, 0, 0, 1, 1],
                            [1, 1, 0, 1, 1],
                            [0, 1, 1, 1, 0]
                        ], 4: [
                            [0, 0, 1, 1, 1],
                            [0, 1, 0, 1, 1],
                            [1, 1, 0, 1, 1],
                            [1, 1, 1, 1, 1],
                            [0, 0, 0, 1, 1],
                            [0, 0, 0, 1, 1],
                            [0, 0, 0, 1, 1]
                        ], 5: [
                            [1, 1, 1, 1, 1],
                            [1, 1, 0, 0, 0],
                            [1, 1, 0, 0, 0],
                            [1, 1, 1, 1, 0],
                            [0, 0, 0, 1, 1],
                            [1, 1, 0, 1, 1],
                            [0, 1, 1, 1, 0]
                        ], 6: [
                            [0, 1, 1, 1, 0],
                            [1, 1, 0, 0, 0],
                            [1, 1, 1, 1, 0],
                            [1, 1, 0, 1, 1],
                            [1, 1, 0, 1, 1],
                            [1, 1, 0, 1, 1],
                            [0, 1, 1, 1, 0]
                        ], 7: [
                            [1, 1, 1, 1, 1],
                            [0, 0, 0, 1, 1],
                            [0, 0, 0, 1, 1],
                            [0, 0, 1, 1, 0],
                            [0, 1, 1, 0, 0],
                            [1, 1, 0, 0, 0],
                            [1, 1, 0, 0, 0]
                        ], 8: [
                            [0, 1, 1, 1, 0],
                            [1, 1, 0, 1, 1],
                            [1, 1, 0, 1, 1],
                            [0, 1, 1, 1, 0],
                            [1, 1, 0, 1, 1],
                            [1, 1, 0, 1, 1],
                            [0, 1, 1, 1, 0]
                        ], 9: [
                            [0, 1, 1, 1, 0],
                            [1, 1, 0, 1, 1],
                            [1, 1, 0, 1, 1],
                            [1, 1, 0, 1, 1],
                            [0, 1, 1, 1, 1],
                            [0, 0, 0, 1, 1],
                            [0, 1, 1, 1, 0]
                        ] }, c = b[0].length, d = b[0][0].length, e = 0, f = ""; c > e; e++) { for (f += '<span class="soon-matrix-row">', a = 0; d > a; a++) f += '<span class="soon-matrix-dot"></span>';
                    f += "</span>" } var g = function(a) { this._wrapper = document.createElement("span"), this._wrapper.className = "soon-matrix " + (a.className || ""), this._inner = document.createElement("span"), this._inner.className = "soon-matrix-inner", this._wrapper.appendChild(this._inner), this._transform = a.transform || function(a) { return a }, this._value = [] }; return g.prototype = { redraw: function() {}, destroy: function() { return this._wrapper }, getElement: function() { return this._wrapper }, _addChar: function() { var a = document.createElement("span"); return a.className = "soon-matrix-char", a.innerHTML = f, { node: a, ref: [] } }, _updateChar: function(a, e) { var f, g = b[e],
                            h = 0,
                            i = a.ref; if (!i.length)
                            for (var j = a.node.getElementsByClassName("soon-matrix-dot"); c > h; h++)
                                for (i[h] = [], f = 0; d > f; f++) i[h][f] = j[h * d + f]; for (; c > h; h++)
                            for (f = 0; d > f; f++) i[h][f].setAttribute("data-state", 1 === g[h][f] ? "1" : "0") }, setValue: function(a) { a = this._transform(a), a += "", a = a.split(""); for (var b = 0, c = a.length; c > b; b++) { var d = this._value[b];
                            d || (d = this._addChar(), this._inner.appendChild(d.node), this._value[b] = d), this._updateChar(d, a[b]) } } }, g }(), B.Repeater = function(a) { var b = function(b) { this._wrapper = document.createElement("span"), this._wrapper.className = "soon-repeater " + (b.className || ""), this._delay = b.delay || 0, this._transform = b.transform || function(a) { return a }, this._destroyed = !1, this._presenter = b.presenter, this._Presenter = a(this._presenter.type), this._prepend = "undefined" == typeof b.prepend ? !0 : b.prepend, this._presenterStorage = [] }; return b.prototype = { redraw: function() { for (var a = this._presenterStorage.length - 1; a >= 0; a--) this._presenterStorage[a].redraw() }, destroy: function() { this._destroyed = !0; for (var a = this._presenterStorage.length - 1; a >= 0; a--) this._presenterStorage[a].destroy(); return this._wrapper }, getElement: function() { return this._wrapper }, setValue: function(a) { a = this._transform(a), a = a instanceof Array ? a : [a], this._prepend && a.reverse(); for (var b, c, d, e = 0, f = a.length, g = 0, h = a.length !== this._wrapper.children.length; f > e; e++) b = this._presenterStorage[e], b || (b = new this._Presenter(this._presenter.options || {}), 0 !== this._wrapper.children.length && this._prepend ? this._wrapper.insertBefore(b.getElement(), this._wrapper.firstChild) : this._wrapper.appendChild(b.getElement()), this._presenterStorage[e] = b, this._delay && (g -= this._delay)), this._delay && !h ? (this._setValueDelayed(b, a[e], g), g += this._delay) : this._setValue(b, a[e], h); for (f = this._wrapper.children.length, d = e; f > e; e++) b = this._presenterStorage[e], c = b.destroy(), c.parentNode.removeChild(c), this._presenterStorage[e] = null;
                        this._presenterStorage.length = d }, _setValueDelayed: function(a, b, c, d) { var e = this;
                        setTimeout(function() { e._setValue(a, b, d) }, c) }, _setValue: function(a, b, c) { c && a.setValue(" "), a.setValue(b) } }, b }(t), B.Ring = function(a, b) { var c = function(b) { this._wrapper = document.createElement("span"), this._wrapper.className = "soon-ring " + (b.className || ""), this._transform = b.transform || function(a) { return a }, this._modifiers = b.modifiers, this._animate = b.animate, this._canvas = document.createElement("canvas"), this._wrapper.appendChild(this._canvas), this._style = document.createElement("span"), this._style.className = "soon-ring-progress", this._style.style.visibility = "hidden", this._style.style.position = "absolute", this._wrapper.appendChild(this._style), this._current = 0, this._target = null, this._destroyed = !1, this._lastTick = 0, this._styles = null; var c = this;
                    a.supportsAnimation() && window.requestAnimationFrame(function(a) { c._tick(a) }) }; return c.prototype = { destroy: function() { return this._destroyed = !0, b.deregister(this._resizeBind), this._wrapper }, getElement: function() { return this._wrapper }, _getModifier: function(a) { for (var b = 0, c = this._modifiers.length, d = null; c > b; b++)
                            if (-1 !== this._modifiers[b].indexOf(a)) { d = this._modifiers[b]; break }
                        if (!d) return null; if (-1 === d.indexOf("-")) return !0; var e = d.split("-"); if (-1 !== e[1].indexOf("_")) { var f = e[1].split("_"); return f[0] = "#" + f[0], f[1] = "#" + f[1], f } var g = parseFloat(e[1]); return isNaN(g) ? e[1] : g / 100 }, redraw: function() { var b = window.getComputedStyle(this._style);
                        this._styles = { offset: this._getModifier("offset") || 0, gap: this._getModifier("gap") || 0, length: this._getModifier("length") || 1, flip: this._getModifier("flip") || !1, invert: this._getModifier("invert") || null, align: "center", size: 0, radius: 0, padding: parseInt(b.getPropertyValue("padding-bottom"), 10) || 0, cap: 0 === parseInt(b.getPropertyValue("border-top-right-radius"), 10) ? "butt" : "round", progressColor: { fill: b.getPropertyValue("color") || "#000", gradient: { colors: this._getModifier("progressgradient") || null, type: this._getModifier("progressgradienttype") || "follow" } }, progressWidth: parseInt(b.getPropertyValue("border-top-width"), 10) || 2, progressShadow: a.getShadowProperties(b.getPropertyValue("text-shadow")), ringColor: { fill: b.getPropertyValue("background-color") || "#fff", gradient: { colors: this._getModifier("ringgradient") || null, type: this._getModifier("ringgradienttype") || "follow" } }, ringWidth: parseInt(b.getPropertyValue("border-bottom-width"), 10) || 2, ringShadow: a.getShadowProperties(b.getPropertyValue("box-shadow")) }; var c = this._canvas.getContext("2d"),
                            d = this._canvas.parentNode.clientWidth,
                            e = a.getDevicePixelRatio(),
                            f = a.getBackingStoreRatio(c),
                            g = e / f,
                            h = 125 > d ? Math.min(1, .005 * d) : 1; if (this._styles.ringWidth = Math.ceil(this._styles.ringWidth * h), this._styles.progressWidth = Math.ceil(this._styles.progressWidth * h), "transparent" === this._styles.ringColor.fill && (this._styles.ringColor.fill = "rgba(0,0,0,0)"), "transparent" === this._styles.progressColor.fill && (this._styles.progressColor.fill = "rgba(0,0,0,0)"), "round" === this._styles.cap && -1 === this._modifiers.join("").indexOf("gap-") && (this._styles.gap = .5 * (this._styles.ringWidth + this._styles.progressWidth) * .005), d) { e !== f ? (this._canvas.width = d * g, this._canvas.height = d * g, this._canvas.style.width = d + "px", this._canvas.style.height = d + "px", c.scale(g, g)) : (this._canvas.width = d, this._canvas.height = d), this._styles.size = .5 * d; var i = this._styles.size - this._styles.padding;
                            this._styles.ringRadius = i - .5 * this._styles.ringWidth, this._styles.progressRadius = i - .5 * this._styles.progressWidth, this._styles.progressWidth === this._styles.ringWidth ? this._styles.progressRadius = this._styles.ringRadius : this._styles.progressWidth < this._styles.ringWidth ? -1 !== this._modifiers.indexOf("align-center") ? this._styles.progressRadius = this._styles.ringRadius : -1 !== this._modifiers.indexOf("align-bottom") ? this._styles.progressRadius = i - (this._styles.ringWidth - .5 * this._styles.progressWidth) : -1 !== this._modifiers.indexOf("align-inside") && (this._styles.progressRadius = i - (this._styles.ringWidth + .5 * this._styles.progressWidth)) : -1 !== this._modifiers.indexOf("align-center") ? this._styles.ringRadius = this._styles.progressRadius : -1 !== this._modifiers.indexOf("align-bottom") ? this._styles.ringRadius = i - (this._styles.progressWidth - .5 * this._styles.ringWidth) : -1 !== this._modifiers.indexOf("align-inside") && (this._styles.ringRadius = i - (this._styles.progressWidth + .5 * this._styles.ringWidth)), -1 !== this._modifiers.indexOf("glow-progress") && this._styles.progressShadow && (this._styles.progressShadow[this._styles.progressShadow.length - 1] = null !== this._styles.progressColor.gradient.colors ? this._styles.progressColor.gradient.colors[0] : this._styles.progressColor.fill), -1 !== this._modifiers.indexOf("glow-background") && this._styles.ringShadow && (this._styles.ringShadow[this._styles.ringShadow.length - 1] = null !== this._styles.ringColor.gradient.colors ? this._styles.ringColor.gradient.colors[0] : this._styles.ringColor.fill), this._current = null } }, _tick: function(a) { if (!this._destroyed) { null !== this._target && this._draw(a); var b = this;
                            window.requestAnimationFrame(function(a) { b._tick(a) }) } }, _draw: function(b) { if (this._animate) { var c = b - this._lastTick,
                                d = 250 > c ? 1e3 / c : 30; if (this._lastTick = b, this._current === this._target) return;
                            this._current += (this._target - this._current) / (d / 3), Math.abs(this._current - this._target) <= .001 && (this._current = this._target) } else this._current = this._target; var e = this._canvas.getContext("2d");
                        e.clearRect(0, 0, this._canvas.width, this._canvas.height); var f = this._styles.flip ? 1 - this._current : this._current;
                        a.drawRing(e, f, this._styles.offset, this._styles.length, this._styles.gap, this._styles.size, this._styles.ringRadius, this._styles.ringWidth, this._styles.ringColor, this._styles.ringShadow, this._styles.progressRadius, this._styles.progressWidth, this._styles.progressColor, this._styles.progressShadow, this._styles.cap, this._styles.invert) }, setValue: function(b) { this._styles || this.redraw(), b = this._transform(b), this._target !== b && (this._target = b), a.supportsAnimation() || (this._current = this._target, this._draw()) } }, c }(A, D), B.Slot = function(a) {
                var b = function(a) { this._forceReplace = "undefined" == typeof a.forceReplace ? !1 : a.forceReplace, this._wrapper = document.createElement("span"), this._wrapper.className = "soon-slot " + (a.className || ""), this._transform = a.transform || function(a) { return a }, this._new = document.createElement("span"), this._new.className = "soon-slot-new", this._old = document.createElement("span"), this._old.className = "soon-slot-old", this._bounding = document.createElement("span"), this._bounding.className = "soon-slot-bounding", this._inner = document.createElement("span"), this._inner.className = "soon-slot-inner soon-slot-animate", this._inner.appendChild(this._old), this._inner.appendChild(this._new), this._inner.appendChild(this._bounding), this._wrapper.appendChild(this._inner), this._newValue = "", this._oldValue = "", this._boundingLength = 0 };
                return b.prototype = {
                    redraw: function() {},
                    destroy: function() { return this._wrapper },
                    getElement: function() {
                        return this._wrapper
                    },
                    _isEmpty: function() { return !this._newValue },
                    _isSame: function(a) { return this._newValue === a },
                    _setBoundingForValue: function(a) { var b = (a + "").length; if (b !== this._boundingLength) { this._boundingLength = b; for (var c = "", d = 0; b > d; d++) c += "8";
                            this._bounding.textContent = c; var e = parseInt(getComputedStyle(this._wrapper).fontSize, 10),
                                f = this._bounding.offsetWidth / e;
                            this._inner.style.width = f + .1 * (b - 1) + "em" } },
                    _setNewValue: function(a) { this._newValue = a, this._new.textContent = a },
                    _setOldValue: function(a) { this._oldValue = a, this._old.textContent = a },
                    setValue: function(b) { b = this._transform(b), this._isEmpty() ? (this._setNewValue(b), this._setBoundingForValue(b), a.triggerAnimation(this._inner, "soon-slot-animate")) : this._isSame(b) && !this._forceReplace || (this._newValue.length && this._setOldValue(this._newValue), this._setNewValue(b), this._setBoundingForValue(b), a.triggerAnimation(this._inner, "soon-slot-animate")) }
                }, b
            }(A), B.Text = function(a) { var b = function(a) { this._wrapper = document.createElement("span"), this._wrapper.className = "soon-text " + (a.className || ""), this._transform = a.transform || function(a) { return a } }; return b.prototype = { redraw: function() {}, destroy: function() { return this._wrapper }, getElement: function() { return this._wrapper }, setValue: function(b) { a.setTextContent(this._wrapper, this._transform(b)) } }, b }(A);
        var E = function(a, b) { var c = function(a, c) { c = c || {}, this._rate = c.rate || 1e3, this._offset = null, this._time = 0, this._paused = !1, this._nextTickReference = null, this._tickBind = this._tick.bind(this), this._onTick = a || function() {}, document.addEventListener(b.documentVisibilityEvent, this) }; return c.prototype = { handleEvent: function() { b.isDocumentHidden() ? this._lock() : this._unlock() }, isRunning: function() { return null !== this._offset }, isPaused: function() { return this.isRunning() && this._paused }, start: function() { this.isRunning() || this.reset() }, getTime: function() { return this._time }, reset: function() { this.pause(), this._offset = (new Date).getTime(), this._time = 0, this.resume() }, stop: function() { var a = this;
                        setTimeout(function() { a._clearTimer(), a._offset = null }, 0) }, pause: function() { this._paused = !0, this._clearTimer() }, resume: function() { if (this.isPaused()) { this._paused = !1; var a = (new Date).getTime();
                            this._time += a - this._offset, this._offset = a, this._tick() } }, _clearTimer: function() { clearTimeout(this._nextTickReference), this._nextTickReference = null }, _lock: function() { this._clearTimer() }, _unlock: function() { this.isPaused() || (this.pause(), this.resume()) }, _tick: function() { this._onTick(this._time), this._offset += this._rate, this._time += this._rate, this._nextTickReference = a.setTimeout(this._tickBind, this._offset - (new Date).getTime()) } }, c }(this, A),
            F = 0,
            G = 0,
            H = ["xxl", "xl", "l", "m", "s", "xs", "xxs"],
            I = 3,
            J = (H.length, []),
            K = [],
            L = { y: { labels: "Year,Years", option: "Years", padding: "" }, M: { labels: "Month,Months", option: "Months", padding: "00" }, w: { labels: "Week,Weeks", option: "Weeks", padding: "00" }, d: { labels: "Day,Days", option: "Days", padding: "000" }, h: { labels: "Hour,Hours", option: "Hours", padding: "00" }, m: { labels: "Minute,Minutes", option: "Minutes", padding: "00" }, s: { labels: "Second,Seconds", option: "Seconds", padding: "00" }, ms: { labels: "Millisecond,Milliseconds", option: "Milliseconds", padding: "000" } };
        D.register(d);
        var M = /([\d]+)[\s]+([a-z]+)/i,
            N = /([\d]+)[:]*([\d]{2})*[:]*([\d]{2})*/;
        z.parse = function(a) { w(a) }, z.redraw = function(a) { a ? f(a) : g() }, z.reset = function(a) { var b = j(a);
            b && b.ticker.reset() }, z.freeze = function(a) { var b = j(a);
            b && b.ticker.pause() }, z.unfreeze = function(a) { var b = j(a);
            b && b.ticker.resume() }, z.destroy = function(a) { var b = h(a); if (null !== b) { var c = i(a);
                null !== c && K.splice(c, 1); var d = J[b];
                d.ticker && d.ticker.stop(), d.presenter.destroy(), d.node.removeChild(d.node.querySelector(".soon-group")), a.removeAttribute("data-initialized"), J.splice(b, 1) } }, z.create = function(a, b) { if (!b) return w(a); if ("true" === a.getAttribute("data-initialized")) return null; if (a.setAttribute("data-initialized", "true"), b.due && -1 !== b.due.indexOf("reset") && (!b.eventComplete || b.eventComplete && -1 === b.eventComplete.indexOf("__soon_automated_callback_"))) { var c = "__soon_automated_callback_" + F++;
                window[c] = function(c) { return function() { c && window[c](), z.destroy(a), z.create(a, b) } }(b.eventComplete), b.eventComplete = c }
            l(a, b, "layout"), l(a, b, "face"), l(a, b, "visual"), l(a, b, "format"), b.scaleMax && a.setAttribute("data-scale-max", b.scaleMax), b.scaleHide && a.setAttribute("data-scale-hide", b.scaleHide); var d, e, f, g = (b.format || "d,h,m,s").split(","),
                h = -1 === g.indexOf("ms") ? 1e3 : 24,
                i = {}; for (d in L) L.hasOwnProperty(d) && (e = L[d], f = (b["labels" + e.option] || e.labels).split(","), i[d] = f[0], i[d + "_s"] = f[1] || f[0]); var j = "undefined" == typeof b.padding ? !0 : b.padding,
                m = {}; for (d in L) L.hasOwnProperty(d) && (e = L[d], j ? (m[d] = y(d, g), null === m[d] && (m[d] = e.padding), b["padding" + e.option] && (m[d] = b["padding" + e.option])) : m[d] = ""); var n = (b.face || "text ").split(" ")[0],
                p = b.due ? x(b.due) : null,
                q = b.since ? A.isoToDate(b.since) : null,
                r = b.now ? A.isoToDate(b.now) : q ? null : new Date,
                s = { due: p, since: q, now: r, view: n, visual: b.visual || null, format: g, separator: b.separator || null, cascade: "undefined" == typeof b.cascade ? !0 : A.toBoolean(b.cascade), singular: b.singular, reflect: b.reflect || !1, chars: "undefined" == typeof b.separateChars ? !0 : A.toBoolean(b.separateChars), label: i, padding: m, callback: { onComplete: "string" == typeof b.eventComplete ? window[b.eventComplete] : function() {}, onTick: "string" == typeof b.eventTick ? window[b.eventTick] : function() {} } };
            A.isSlow() && (s.view = "text", s.reflect = !1, s.visual = null); var t = null,
                B = o(s, function() { t && t.stop(), s.callback.onComplete() });
            k(a); var C = u(a, B); return t = v(a, C, h) };
        var O;
        ! function(a) { O = a() }(function(a) {
            function b(a) { for (n = 1; a = d.shift();) a() } var c, d = [],
                e = !1,
                f = document,
                g = f.documentElement,
                h = g.doScroll,
                i = "DOMContentLoaded",
                j = "addEventListener",
                k = "onreadystatechange",
                l = "readyState",
                m = h ? /^loaded|^c/ : /^loaded|c/,
                n = m.test(f[l]); return f[j] && f[j](i, c = function() { f.removeEventListener(i, c, e), b() }, e), h && f.attachEvent(k, c = function() { /^c/.test(f[l]) && (f.detachEvent(k, c), b()) }), a = h ? function(b) { self != top ? n ? b() : d.push(b) : function() { try { g.doScroll("left") } catch (c) { return setTimeout(function() { a(b) }, 50) }
                    b() }() } : function(a) { n ? a() : d.push(a) } }), O(function() { D.init(); var a = document.querySelector("script[src*=soon]"); if (!a || "false" !== a.getAttribute("data-auto"))
                    for (var b = document.getElementsByClassName ? document.getElementsByClassName("soon") : document.querySelectorAll(".soon"), c = 0, d = b.length; d > c; c++) w(b[c]) }),
            function(a, b) { b && (b.fn.soon = function(b) { return b = b || {}, this.each(function() { a.create(this, b) }) }, b.fn.soon.destroy = function() { return this.each(function() { a.destroy(this) }) }, b.fn.soon.reset = function() { return this.each(function() { a.reset(this) }) }, b.fn.soon.resize = function() { return this.each(function() { a.resize(this) }) }, b.fn.soon.freeze = function() { return this.each(function() { a.freeze(this) }) }, b.fn.soon.unfreeze = function() { return this.each(function() { a.unfreeze(this) }) }) }(z, b), "undefined" != typeof module && module.exports ? module.exports = z : "function" == typeof define && define.amd ? define(function() { return z }) : a.Soon = z
    }
}(window, window.jQuery);