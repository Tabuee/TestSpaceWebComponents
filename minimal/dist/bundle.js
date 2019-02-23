(function () {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {exports: {}};
                e[i][0].call(p.exports, function (r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }

        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }

    return r
})()({
    1: [function (require, module, exports) {
        "use strict";
        exports.__esModule = true;
        var ko = require("knockout");
        var SubscribeForm = /** @class */ (function () {
            function SubscribeForm() {
                this.firstName = ko.observable('testLabel');
                this.lastName = ko.observable('testLabel');
                this.email = ko.observable('');
                this.enabled = ko.observable(false);
            }

            SubscribeForm.prototype.blur = function () {
                this.enabled(this.email.peek() !== '');
            };
            SubscribeForm.prototype.submit = function () {
                alert("\n        sending: \n        firstName: " + this.firstName.peek() + "\n        lastName: " + this.lastName.peek() + "\n        email: " + this.email.peek() + "\n        ");
            };
            return SubscribeForm;
        }());
        exports.SubscribeForm = SubscribeForm;
    }, {"knockout": 3}], 2: [function (require, module, exports) {
        "use strict";
        exports.__esModule = true;
        var SubscribeForm_1 = require("./app/SubscribeForm/SubscribeForm");
        var ko = require("knockout");
        var controllers = {
            'SubscribeForm': SubscribeForm_1.SubscribeForm
        };

        function ready(fn) {
            // @ts-ignore
            if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
                fn();
            }
            else {
                document.addEventListener('DOMContentLoaded', fn);
            }
        }

        ready(function () {
            setTimeout(function () {
                var elements = document.querySelectorAll('[data-controller]');
                for (var index = 0; index < elements.length; index++) {
                    var element = elements[index];
                    //@ts-ignore
                    var ctrlName = element.dataset.controller;
                    var contrl = controllers[ctrlName];
                    var options = {
                        viewModel: contrl,
                        template: element.innerHTML,
                        name: ctrlName
                    };
                    ko.components.register(ctrlName, options);
                    element.setAttribute('data-bind', 'component: "' + ctrlName + '"');
                }
                // @ts-ignore
                ko.applyBindings();
            }, 5000);
        });
    }, {"./app/SubscribeForm/SubscribeForm": 1, "knockout": 3}], 3: [function (require, module, exports) {
        /*!
 * Knockout JavaScript library v3.5.0
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

        (function () {
            (function (p) {
                var z = this || (0, eval)("this"), w = z.document, R = z.navigator, v = z.jQuery, H = z.JSON;
                v || "undefined" === typeof jQuery || (v = jQuery);
                (function (p) {
                    "function" === typeof define && define.amd ? define(["exports", "require"], p) : "object" === typeof exports && "object" === typeof module ? p(module.exports || exports) : p(z.ko = {})
                })(function (S, T) {
                    function K(a, c) {
                        return null === a || typeof a in W ? a === c : !1
                    }

                    function X(b, c) {
                        var d;
                        return function () {
                            d || (d = a.a.setTimeout(function () {
                                d = p;
                                b()
                            }, c))
                        }
                    }

                    function Y(b, c) {
                        var d;
                        return function () {
                            clearTimeout(d);
                            d = a.a.setTimeout(b, c)
                        }
                    }

                    function Z(a, c) {
                        c && "change" !== c ? "beforeChange" === c ? this.oc(a) : this.bb(a, c) : this.pc(a)
                    }

                    function aa(a, c) {
                        null !== c && c.s && c.s()
                    }

                    function ba(a, c) {
                        var d = this.pd, e = d[t];
                        e.qa || (this.Pb && this.kb[c] ? (d.tc(c, a, this.kb[c]), this.kb[c] = null, --this.Pb) : e.F[c] || d.tc(c, a, e.G ? {da: a} : d.Zc(a)), a.Ka && a.fd())
                    }

                    var a = "undefined" !== typeof S ? S : {};
                    a.b = function (b, c) {
                        for (var d = b.split("."), e = a, f = 0; f < d.length - 1; f++) e = e[d[f]];
                        e[d[d.length - 1]] = c
                    };
                    a.J = function (a, c, d) {
                        a[c] = d
                    };
                    a.version = "3.5.0";
                    a.b("version",
                        a.version);
                    a.options = {deferUpdates: !1, useOnlyNativeEvents: !1, foreachHidesDestroyed: !1};
                    a.a = function () {
                        function b(a, b) {
                            for (var c in a) f.call(a, c) && b(c, a[c])
                        }

                        function c(a, b) {
                            if (b) for (var c in b) f.call(b, c) && (a[c] = b[c]);
                            return a
                        }

                        function d(a, b) {
                            a.__proto__ = b;
                            return a
                        }

                        function e(b, c, d, e) {
                            var k = b[c].match(n) || [];
                            a.a.C(d.match(n), function (b) {
                                a.a.Oa(k, b, e)
                            });
                            b[c] = k.join(" ")
                        }

                        var f = Object.prototype.hasOwnProperty, g = {__proto__: []} instanceof Array,
                            h = "function" === typeof Symbol, m = {}, l = {};
                        m[R && /Firefox\/2/i.test(R.userAgent) ?
                            "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
                        m.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
                        b(m, function (a, b) {
                            if (b.length) for (var c = 0, d = b.length; c < d; c++) l[b[c]] = a
                        });
                        var k = {propertychange: !0}, q = w && function () {
                            for (var a = 3, b = w.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];) ;
                            return 4 < a ? a : p
                        }(), n = /\S+/g, r;
                        return {
                            Ic: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                            C: function (a, b, c) {
                                for (var d = 0, e = a.length; d < e; d++) b.call(c, a[d], d, a)
                            }, A: "function" == typeof Array.prototype.indexOf ? function (a, b) {
                                return Array.prototype.indexOf.call(a, b)
                            } : function (a, b) {
                                for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
                                return -1
                            }, Lb: function (a, b, c) {
                                for (var d = 0, e = a.length; d < e; d++) if (b.call(c, a[d], d, a)) return a[d];
                                return p
                            }, hb: function (b, c) {
                                var d = a.a.A(b, c);
                                0 < d ? b.splice(d, 1) : 0 === d && b.shift()
                            }, vc: function (b) {
                                var c = [];
                                b && a.a.C(b, function (b) {
                                    0 > a.a.A(c, b) && c.push(b)
                                });
                                return c
                            }, Mb: function (a,
                                             b, c) {
                                var d = [];
                                if (a) for (var e = 0, k = a.length; e < k; e++) d.push(b.call(c, a[e], e));
                                return d
                            }, fb: function (a, b, c) {
                                var d = [];
                                if (a) for (var e = 0, k = a.length; e < k; e++) b.call(c, a[e], e) && d.push(a[e]);
                                return d
                            }, gb: function (a, b) {
                                if (b instanceof Array) a.push.apply(a, b); else for (var c = 0, d = b.length; c < d; c++) a.push(b[c]);
                                return a
                            }, Oa: function (b, c, d) {
                                var e = a.a.A(a.a.$b(b), c);
                                0 > e ? d && b.push(c) : d || b.splice(e, 1)
                            }, Ba: g, extend: c, setPrototypeOf: d, zb: g ? d : c, O: b, Ha: function (a, b, c) {
                                if (!a) return a;
                                var d = {}, e;
                                for (e in a) f.call(a, e) && (d[e] =
                                    b.call(c, a[e], e, a));
                                return d
                            }, Sb: function (b) {
                                for (; b.firstChild;) a.removeNode(b.firstChild)
                            }, Xb: function (b) {
                                b = a.a.la(b);
                                for (var c = (b[0] && b[0].ownerDocument || w).createElement("div"), d = 0, e = b.length; d < e; d++) c.appendChild(a.na(b[d]));
                                return c
                            }, Ca: function (b, c) {
                                for (var d = 0, e = b.length, k = []; d < e; d++) {
                                    var f = b[d].cloneNode(!0);
                                    k.push(c ? a.na(f) : f)
                                }
                                return k
                            }, ua: function (b, c) {
                                a.a.Sb(b);
                                if (c) for (var d = 0, e = c.length; d < e; d++) b.appendChild(c[d])
                            }, Wc: function (b, c) {
                                var d = b.nodeType ? [b] : b;
                                if (0 < d.length) {
                                    for (var e = d[0],
                                             k = e.parentNode, f = 0, l = c.length; f < l; f++) k.insertBefore(c[f], e);
                                    f = 0;
                                    for (l = d.length; f < l; f++) a.removeNode(d[f])
                                }
                            }, Ua: function (a, b) {
                                if (a.length) {
                                    for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;) a.splice(0, 1);
                                    for (; 1 < a.length && a[a.length - 1].parentNode !== b;) a.length--;
                                    if (1 < a.length) {
                                        var c = a[0], d = a[a.length - 1];
                                        for (a.length = 0; c !== d;) a.push(c), c = c.nextSibling;
                                        a.push(d)
                                    }
                                }
                                return a
                            }, Yc: function (a, b) {
                                7 > q ? a.setAttribute("selected", b) : a.selected = b
                            }, Cb: function (a) {
                                return null === a || a === p ? "" : a.trim ?
                                    a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                            }, Td: function (a, b) {
                                a = a || "";
                                return b.length > a.length ? !1 : a.substring(0, b.length) === b
                            }, ud: function (a, b) {
                                if (a === b) return !0;
                                if (11 === a.nodeType) return !1;
                                if (b.contains) return b.contains(1 !== a.nodeType ? a.parentNode : a);
                                if (b.compareDocumentPosition) return 16 == (b.compareDocumentPosition(a) & 16);
                                for (; a && a != b;) a = a.parentNode;
                                return !!a
                            }, Rb: function (b) {
                                return a.a.ud(b, b.ownerDocument.documentElement)
                            }, jd: function (b) {
                                return !!a.a.Lb(b, a.a.Rb)
                            }, P: function (a) {
                                return a &&
                                    a.tagName && a.tagName.toLowerCase()
                            }, zc: function (b) {
                                return a.onError ? function () {
                                    try {
                                        return b.apply(this, arguments)
                                    } catch (c) {
                                        throw a.onError && a.onError(c), c;
                                    }
                                } : b
                            }, setTimeout: function (b, c) {
                                return setTimeout(a.a.zc(b), c)
                            }, Fc: function (b) {
                                setTimeout(function () {
                                    a.onError && a.onError(b);
                                    throw b;
                                }, 0)
                            }, H: function (b, c, d) {
                                var e = a.a.zc(d);
                                d = k[c];
                                if (a.options.useOnlyNativeEvents || d || !v) if (d || "function" != typeof b.addEventListener) if ("undefined" != typeof b.attachEvent) {
                                    var f = function (a) {
                                        e.call(b, a)
                                    }, l = "on" + c;
                                    b.attachEvent(l,
                                        f);
                                    a.a.I.za(b, function () {
                                        b.detachEvent(l, f)
                                    })
                                } else throw Error("Browser doesn't support addEventListener or attachEvent"); else b.addEventListener(c, e, !1); else r || (r = "function" == typeof v(b).on ? "on" : "bind"), v(b)[r](c, e)
                            }, Fb: function (b, c) {
                                if (!b || !b.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                                var d;
                                "input" === a.a.P(b) && b.type && "click" == c.toLowerCase() ? (d = b.type, d = "checkbox" == d || "radio" == d) : d = !1;
                                if (a.options.useOnlyNativeEvents || !v || d) if ("function" == typeof w.createEvent) if ("function" ==
                                    typeof b.dispatchEvent) d = w.createEvent(l[c] || "HTMLEvents"), d.initEvent(c, !0, !0, z, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d); else throw Error("The supplied element doesn't support dispatchEvent"); else if (d && b.click) b.click(); else if ("undefined" != typeof b.fireEvent) b.fireEvent("on" + c); else throw Error("Browser doesn't support triggering events"); else v(b).trigger(c)
                            }, c: function (b) {
                                return a.N(b) ? b() : b
                            }, $b: function (b) {
                                return a.N(b) ? b.w() : b
                            }, Eb: function (b, c, d) {
                                var k;
                                c && ("object" === typeof b.classList ?
                                    (k = b.classList[d ? "add" : "remove"], a.a.C(c.match(n), function (a) {
                                        k.call(b.classList, a)
                                    })) : "string" === typeof b.className.baseVal ? e(b.className, "baseVal", c, d) : e(b, "className", c, d))
                            }, Ab: function (b, c) {
                                var d = a.a.c(c);
                                if (null === d || d === p) d = "";
                                var e = a.h.firstChild(b);
                                !e || 3 != e.nodeType || a.h.nextSibling(e) ? a.h.ua(b, [b.ownerDocument.createTextNode(d)]) : e.data = d;
                                a.a.zd(b)
                            }, Xc: function (a, b) {
                                a.name = b;
                                if (7 >= q) try {
                                    var c = a.name.replace(/[&<>'"]/g, function (a) {
                                        return "&#" + a.charCodeAt(0) + ";"
                                    });
                                    a.mergeAttributes(w.createElement("<input name='" +
                                        c + "'/>"), !1)
                                } catch (d) {
                                }
                            }, zd: function (a) {
                                9 <= q && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom))
                            }, vd: function (a) {
                                if (q) {
                                    var b = a.style.width;
                                    a.style.width = 0;
                                    a.style.width = b
                                }
                            }, Od: function (b, c) {
                                b = a.a.c(b);
                                c = a.a.c(c);
                                for (var d = [], e = b; e <= c; e++) d.push(e);
                                return d
                            }, la: function (a) {
                                for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c]);
                                return b
                            }, Da: function (a) {
                                return h ? Symbol(a) : a
                            }, Xd: 6 === q, Yd: 7 === q, W: q, Kc: function (b, c) {
                                for (var d = a.a.la(b.getElementsByTagName("input")).concat(a.a.la(b.getElementsByTagName("textarea"))),
                                         e = "string" == typeof c ? function (a) {
                                             return a.name === c
                                         } : function (a) {
                                             return c.test(a.name)
                                         }, k = [], f = d.length - 1; 0 <= f; f--) e(d[f]) && k.push(d[f]);
                                return k
                            }, Md: function (b) {
                                return "string" == typeof b && (b = a.a.Cb(b)) ? H && H.parse ? H.parse(b) : (new Function("return " + b))() : null
                            }, fc: function (b, c, d) {
                                if (!H || !H.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                                return H.stringify(a.a.c(b), c, d)
                            }, Nd: function (c, d, e) {
                                e = e || {};
                                var k = e.params || {}, f = e.includeFields || this.Ic, l = c;
                                if ("object" == typeof c && "form" === a.a.P(c)) for (var l = c.action, h = f.length - 1; 0 <= h; h--) for (var g = a.a.Kc(c, f[h]), m = g.length - 1; 0 <= m; m--) k[g[m].name] = g[m].value;
                                d = a.a.c(d);
                                var n = w.createElement("form");
                                n.style.display = "none";
                                n.action = l;
                                n.method = "post";
                                for (var q in d) c = w.createElement("input"), c.type = "hidden", c.name = q, c.value = a.a.fc(a.a.c(d[q])), n.appendChild(c);
                                b(k, function (a, b) {
                                    var c = w.createElement("input");
                                    c.type = "hidden";
                                    c.name = a;
                                    c.value = b;
                                    n.appendChild(c)
                                });
                                w.body.appendChild(n);
                                e.submitter ? e.submitter(n) : n.submit();
                                setTimeout(function () {
                                    n.parentNode.removeChild(n)
                                }, 0)
                            }
                        }
                    }();
                    a.b("utils", a.a);
                    a.b("utils.arrayForEach", a.a.C);
                    a.b("utils.arrayFirst", a.a.Lb);
                    a.b("utils.arrayFilter", a.a.fb);
                    a.b("utils.arrayGetDistinctValues", a.a.vc);
                    a.b("utils.arrayIndexOf", a.a.A);
                    a.b("utils.arrayMap", a.a.Mb);
                    a.b("utils.arrayPushAll", a.a.gb);
                    a.b("utils.arrayRemoveItem", a.a.hb);
                    a.b("utils.cloneNodes", a.a.Ca);
                    a.b("utils.createSymbolOrString",
                        a.a.Da);
                    a.b("utils.extend", a.a.extend);
                    a.b("utils.fieldsIncludedWithJsonPost", a.a.Ic);
                    a.b("utils.getFormFields", a.a.Kc);
                    a.b("utils.objectMap", a.a.Ha);
                    a.b("utils.peekObservable", a.a.$b);
                    a.b("utils.postJson", a.a.Nd);
                    a.b("utils.parseJson", a.a.Md);
                    a.b("utils.registerEventHandler", a.a.H);
                    a.b("utils.stringifyJson", a.a.fc);
                    a.b("utils.range", a.a.Od);
                    a.b("utils.toggleDomNodeCssClass", a.a.Eb);
                    a.b("utils.triggerEvent", a.a.Fb);
                    a.b("utils.unwrapObservable", a.a.c);
                    a.b("utils.objectForEach", a.a.O);
                    a.b("utils.addOrRemoveItem",
                        a.a.Oa);
                    a.b("utils.setTextContent", a.a.Ab);
                    a.b("unwrap", a.a.c);
                    Function.prototype.bind || (Function.prototype.bind = function (a) {
                        var c = this;
                        if (1 === arguments.length) return function () {
                            return c.apply(a, arguments)
                        };
                        var d = Array.prototype.slice.call(arguments, 1);
                        return function () {
                            var e = d.slice(0);
                            e.push.apply(e, arguments);
                            return c.apply(a, e)
                        }
                    });
                    a.a.g = new function () {
                        var b = 0, c = "__ko__" + (new Date).getTime(), d = {}, e, f;
                        a.a.W ? (e = function (a, e) {
                            var f = a[c];
                            if (!f || "null" === f || !d[f]) {
                                if (!e) return p;
                                f = a[c] = "ko" + b++;
                                d[f] =
                                    {}
                            }
                            return d[f]
                        }, f = function (a) {
                            var b = a[c];
                            return b ? (delete d[b], a[c] = null, !0) : !1
                        }) : (e = function (a, b) {
                            var d = a[c];
                            !d && b && (d = a[c] = {});
                            return d
                        }, f = function (a) {
                            return a[c] ? (delete a[c], !0) : !1
                        });
                        return {
                            get: function (a, b) {
                                var c = e(a, !1);
                                return c && c[b]
                            }, set: function (a, b, c) {
                                (a = e(a, c !== p)) && (a[b] = c)
                            }, Tb: function (a, b, c) {
                                a = e(a, !0);
                                return a[b] || (a[b] = c)
                            }, clear: f, Z: function () {
                                return b++ + c
                            }
                        }
                    };
                    a.b("utils.domData", a.a.g);
                    a.b("utils.domData.clear", a.a.g.clear);
                    a.a.I = new function () {
                        function b(b, c) {
                            var d = a.a.g.get(b, e);
                            d === p && c && (d = [], a.a.g.set(b, e, d));
                            return d
                        }

                        function c(c) {
                            var e = b(c, !1);
                            if (e) for (var e = e.slice(0), f = 0; f < e.length; f++) e[f](c);
                            a.a.g.clear(c);
                            a.a.I.cleanExternalData(c);
                            g[c.nodeType] && d(c.childNodes, !0)
                        }

                        function d(b, d) {
                            for (var e = [], k, f = 0; f < b.length; f++) if (!d || 8 === b[f].nodeType) if (c(e[e.length] = k = b[f]), b[f] !== k) for (; f-- && -1 == a.a.A(e, b[f]);) ;
                        }

                        var e = a.a.g.Z(), f = {1: !0, 8: !0, 9: !0}, g = {1: !0, 9: !0};
                        return {
                            za: function (a, c) {
                                if ("function" != typeof c) throw Error("Callback must be a function");
                                b(a, !0).push(c)
                            }, xb: function (c,
                                             d) {
                                var f = b(c, !1);
                                f && (a.a.hb(f, d), 0 == f.length && a.a.g.set(c, e, p))
                            }, na: function (a) {
                                f[a.nodeType] && (c(a), g[a.nodeType] && d(a.getElementsByTagName("*")));
                                return a
                            }, removeNode: function (b) {
                                a.na(b);
                                b.parentNode && b.parentNode.removeChild(b)
                            }, cleanExternalData: function (a) {
                                v && "function" == typeof v.cleanData && v.cleanData([a])
                            }
                        }
                    };
                    a.na = a.a.I.na;
                    a.removeNode = a.a.I.removeNode;
                    a.b("cleanNode", a.na);
                    a.b("removeNode", a.removeNode);
                    a.b("utils.domNodeDisposal", a.a.I);
                    a.b("utils.domNodeDisposal.addDisposeCallback", a.a.I.za);
                    a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.I.xb);
                    (function () {
                        var b = [0, "", ""], c = [1, "<table>", "</table>"],
                            d = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            e = [1, "<select multiple='multiple'>", "</select>"], f = {
                                thead: c,
                                tbody: c,
                                tfoot: c,
                                tr: [2, "<table><tbody>", "</tbody></table>"],
                                td: d,
                                th: d,
                                option: e,
                                optgroup: e
                            }, g = 8 >= a.a.W;
                        a.a.ta = function (c, d) {
                            var e;
                            if (v) if (v.parseHTML) e = v.parseHTML(c, d) || []; else {
                                if ((e = v.clean([c], d)) && e[0]) {
                                    for (var k = e[0]; k.parentNode && 11 !== k.parentNode.nodeType;) k = k.parentNode;
                                    k.parentNode && k.parentNode.removeChild(k)
                                }
                            } else {
                                (e = d) || (e = w);
                                var k = e.parentWindow || e.defaultView || z, q = a.a.Cb(c).toLowerCase(),
                                    n = e.createElement("div"), r;
                                r = (q = q.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/)) && f[q[1]] || b;
                                q = r[0];
                                r = "ignored<div>" + r[1] + c + r[2] + "</div>";
                                "function" == typeof k.innerShiv ? n.appendChild(k.innerShiv(r)) : (g && e.body.appendChild(n), n.innerHTML = r, g && n.parentNode.removeChild(n));
                                for (; q--;) n = n.lastChild;
                                e = a.a.la(n.lastChild.childNodes)
                            }
                            return e
                        };
                        a.a.Ld = function (b, c) {
                            var d = a.a.ta(b,
                                c);
                            return d.length && d[0].parentElement || a.a.Xb(d)
                        };
                        a.a.dc = function (b, c) {
                            a.a.Sb(b);
                            c = a.a.c(c);
                            if (null !== c && c !== p) if ("string" != typeof c && (c = c.toString()), v) v(b).html(c); else for (var d = a.a.ta(c, b.ownerDocument), e = 0; e < d.length; e++) b.appendChild(d[e])
                        }
                    })();
                    a.b("utils.parseHtmlFragment", a.a.ta);
                    a.b("utils.setHtml", a.a.dc);
                    a.aa = function () {
                        function b(c, e) {
                            if (c) if (8 == c.nodeType) {
                                var f = a.aa.Tc(c.nodeValue);
                                null != f && e.push({sd: c, Jd: f})
                            } else if (1 == c.nodeType) for (var f = 0, g = c.childNodes, h = g.length; f < h; f++) b(g[f],
                                e)
                        }

                        var c = {};
                        return {
                            Wb: function (a) {
                                if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()");
                                var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                                c[b] = a;
                                return "\x3c!--[ko_memo:" + b + "]--\x3e"
                            }, ad: function (a, b) {
                                var f = c[a];
                                if (f === p) throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.");
                                try {
                                    return f.apply(null, b || []), !0
                                } finally {
                                    delete c[a]
                                }
                            }, bd: function (c, e) {
                                var f =
                                    [];
                                b(c, f);
                                for (var g = 0, h = f.length; g < h; g++) {
                                    var m = f[g].sd, l = [m];
                                    e && a.a.gb(l, e);
                                    a.aa.ad(f[g].Jd, l);
                                    m.nodeValue = "";
                                    m.parentNode && m.parentNode.removeChild(m)
                                }
                            }, Tc: function (a) {
                                return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null
                            }
                        }
                    }();
                    a.b("memoization", a.aa);
                    a.b("memoization.memoize", a.aa.Wb);
                    a.b("memoization.unmemoize", a.aa.ad);
                    a.b("memoization.parseMemoText", a.aa.Tc);
                    a.b("memoization.unmemoizeDomNodeAndDescendants", a.aa.bd);
                    a.ma = function () {
                        function b() {
                            if (f) for (var b = f, c = 0, d; h < f;) if (d = e[h++]) {
                                if (h > b) {
                                    if (5E3 <=
                                        ++c) {
                                        h = f;
                                        a.a.Fc(Error("'Too much recursion' after processing " + c + " task groups."));
                                        break
                                    }
                                    b = f
                                }
                                try {
                                    d()
                                } catch (g) {
                                    a.a.Fc(g)
                                }
                            }
                        }

                        function c() {
                            b();
                            h = f = e.length = 0
                        }

                        var d, e = [], f = 0, g = 1, h = 0;
                        z.MutationObserver ? d = function (a) {
                            var b = w.createElement("div");
                            (new MutationObserver(a)).observe(b, {attributes: !0});
                            return function () {
                                b.classList.toggle("foo")
                            }
                        }(c) : d = w && "onreadystatechange" in w.createElement("script") ? function (a) {
                            var b = w.createElement("script");
                            b.onreadystatechange = function () {
                                b.onreadystatechange = null;
                                w.documentElement.removeChild(b);
                                b = null;
                                a()
                            };
                            w.documentElement.appendChild(b)
                        } : function (a) {
                            setTimeout(a, 0)
                        };
                        return {
                            scheduler: d, yb: function (b) {
                                f || a.ma.scheduler(c);
                                e[f++] = b;
                                return g++
                            }, cancel: function (a) {
                                a = a - (g - f);
                                a >= h && a < f && (e[a] = null)
                            }, resetForTesting: function () {
                                var a = f - h;
                                h = f = e.length = 0;
                                return a
                            }, Rd: b
                        }
                    }();
                    a.b("tasks", a.ma);
                    a.b("tasks.schedule", a.ma.yb);
                    a.b("tasks.runEarly", a.ma.Rd);
                    a.Ta = {
                        throttle: function (b, c) {
                            b.throttleEvaluation = c;
                            var d = null;
                            return a.$({
                                read: b, write: function (e) {
                                    clearTimeout(d);
                                    d = a.a.setTimeout(function () {
                                            b(e)
                                        },
                                        c)
                                }
                            })
                        }, rateLimit: function (a, c) {
                            var d, e, f;
                            "number" == typeof c ? d = c : (d = c.timeout, e = c.method);
                            a.Hb = !1;
                            f = "function" == typeof e ? e : "notifyWhenChangesStop" == e ? Y : X;
                            a.tb(function (a) {
                                return f(a, d, c)
                            })
                        }, deferred: function (b, c) {
                            if (!0 !== c) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
                            b.Hb || (b.Hb = !0, b.tb(function (c) {
                                var e, f = !1;
                                return function () {
                                    if (!f) {
                                        a.ma.cancel(e);
                                        e = a.ma.yb(c);
                                        try {
                                            f = !0, b.notifySubscribers(p, "dirty")
                                        } finally {
                                            f =
                                                !1
                                        }
                                    }
                                }
                            }))
                        }, notify: function (a, c) {
                            a.equalityComparer = "always" == c ? null : K
                        }
                    };
                    var W = {undefined: 1, "boolean": 1, number: 1, string: 1};
                    a.b("extenders", a.Ta);
                    a.gc = function (b, c, d) {
                        this.da = b;
                        this.kc = c;
                        this.lc = d;
                        this.Ib = !1;
                        this.ab = this.Jb = null;
                        a.J(this, "dispose", this.s);
                        a.J(this, "disposeWhenNodeIsRemoved", this.l)
                    };
                    a.gc.prototype.s = function () {
                        this.Ib || (this.ab && a.a.I.xb(this.Jb, this.ab), this.Ib = !0, this.lc(), this.da = this.kc = this.lc = this.Jb = this.ab = null)
                    };
                    a.gc.prototype.l = function (b) {
                        this.Jb = b;
                        a.a.I.za(b, this.ab = this.s.bind(this))
                    };
                    a.R = function () {
                        a.a.zb(this, D);
                        D.ob(this)
                    };
                    var D = {
                        ob: function (a) {
                            a.S = {change: []};
                            a.rc = 1
                        }, subscribe: function (b, c, d) {
                            var e = this;
                            d = d || "change";
                            var f = new a.gc(e, c ? b.bind(c) : b, function () {
                                a.a.hb(e.S[d], f);
                                e.cb && e.cb(d)
                            });
                            e.Qa && e.Qa(d);
                            e.S[d] || (e.S[d] = []);
                            e.S[d].push(f);
                            return f
                        }, notifySubscribers: function (b, c) {
                            c = c || "change";
                            "change" === c && this.Gb();
                            if (this.Wa(c)) {
                                var d = "change" === c && this.dd || this.S[c].slice(0);
                                try {
                                    a.v.wc();
                                    for (var e = 0, f; f = d[e]; ++e) f.Ib || f.kc(b)
                                } finally {
                                    a.v.end()
                                }
                            }
                        }, mb: function () {
                            return this.rc
                        },
                        Cd: function (a) {
                            return this.mb() !== a
                        }, Gb: function () {
                            ++this.rc
                        }, tb: function (b) {
                            var c = this, d = a.N(c), e, f, g, h, m;
                            c.bb || (c.bb = c.notifySubscribers, c.notifySubscribers = Z);
                            var l = b(function () {
                                c.Ka = !1;
                                d && h === c && (h = c.mc ? c.mc() : c());
                                var a = f || m && c.qb(g, h);
                                m = f = e = !1;
                                a && c.bb(g = h)
                            });
                            c.pc = function (a, b) {
                                b && c.Ka || (m = !b);
                                c.dd = c.S.change.slice(0);
                                c.Ka = e = !0;
                                h = a;
                                l()
                            };
                            c.oc = function (a) {
                                e || (g = a, c.bb(a, "beforeChange"))
                            };
                            c.qc = function () {
                                m = !0
                            };
                            c.fd = function () {
                                c.qb(g, c.w(!0)) && (f = !0)
                            }
                        }, Wa: function (a) {
                            return this.S[a] && this.S[a].length
                        },
                        Ad: function (b) {
                            if (b) return this.S[b] && this.S[b].length || 0;
                            var c = 0;
                            a.a.O(this.S, function (a, b) {
                                "dirty" !== a && (c += b.length)
                            });
                            return c
                        }, qb: function (a, c) {
                            return !this.equalityComparer || !this.equalityComparer(a, c)
                        }, toString: function () {
                            return "[object Object]"
                        }, extend: function (b) {
                            var c = this;
                            b && a.a.O(b, function (b, e) {
                                var f = a.Ta[b];
                                "function" == typeof f && (c = f(c, e) || c)
                            });
                            return c
                        }
                    };
                    a.J(D, "init", D.ob);
                    a.J(D, "subscribe", D.subscribe);
                    a.J(D, "extend", D.extend);
                    a.J(D, "getSubscriptionsCount", D.Ad);
                    a.a.Ba && a.a.setPrototypeOf(D,
                        Function.prototype);
                    a.R.fn = D;
                    a.Pc = function (a) {
                        return null != a && "function" == typeof a.subscribe && "function" == typeof a.notifySubscribers
                    };
                    a.b("subscribable", a.R);
                    a.b("isSubscribable", a.Pc);
                    a.U = a.v = function () {
                        function b(a) {
                            d.push(e);
                            e = a
                        }

                        function c() {
                            e = d.pop()
                        }

                        var d = [], e, f = 0;
                        return {
                            wc: b, end: c, ac: function (b) {
                                if (e) {
                                    if (!a.Pc(b)) throw Error("Only subscribable things can act as dependencies");
                                    e.nd.call(e.od, b, b.ed || (b.ed = ++f))
                                }
                            }, K: function (a, d, e) {
                                try {
                                    return b(), a.apply(d, e || [])
                                } finally {
                                    c()
                                }
                            }, pa: function () {
                                if (e) return e.o.pa()
                            },
                            Va: function () {
                                if (e) return e.o.Va()
                            }, rb: function () {
                                if (e) return e.rb
                            }, o: function () {
                                if (e) return e.o
                            }
                        }
                    }();
                    a.b("computedContext", a.U);
                    a.b("computedContext.getDependenciesCount", a.U.pa);
                    a.b("computedContext.getDependencies", a.U.Va);
                    a.b("computedContext.isInitial", a.U.rb);
                    a.b("computedContext.registerDependency", a.U.ac);
                    a.b("ignoreDependencies", a.Wd = a.v.K);
                    var I = a.a.Da("_latestValue");
                    a.sa = function (b) {
                        function c() {
                            if (0 < arguments.length) return c.qb(c[I], arguments[0]) && (c.xa(), c[I] = arguments[0], c.wa()), this;
                            a.v.ac(c);
                            return c[I]
                        }

                        c[I] = b;
                        a.a.Ba || a.a.extend(c, a.R.fn);
                        a.R.fn.ob(c);
                        a.a.zb(c, F);
                        a.options.deferUpdates && a.Ta.deferred(c, !0);
                        return c
                    };
                    var F = {
                        equalityComparer: K, w: function () {
                            return this[I]
                        }, wa: function () {
                            this.notifySubscribers(this[I], "spectate");
                            this.notifySubscribers(this[I])
                        }, xa: function () {
                            this.notifySubscribers(this[I], "beforeChange")
                        }
                    };
                    a.a.Ba && a.a.setPrototypeOf(F, a.R.fn);
                    var G = a.sa.Na = "__ko_proto__";
                    F[G] = a.sa;
                    a.N = function (b) {
                        if ((b = "function" == typeof b && b[G]) && b !== F[G] && b !== a.o.fn[G]) throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
                        return !!b
                    };
                    a.Ya = function (b) {
                        return "function" == typeof b && (b[G] === F[G] || b[G] === a.o.fn[G] && b.Mc)
                    };
                    a.b("observable", a.sa);
                    a.b("isObservable", a.N);
                    a.b("isWriteableObservable", a.Ya);
                    a.b("isWritableObservable", a.Ya);
                    a.b("observable.fn", F);
                    a.J(F, "peek", F.w);
                    a.J(F, "valueHasMutated", F.wa);
                    a.J(F, "valueWillMutate", F.xa);
                    a.Ia = function (b) {
                        b = b || [];
                        if ("object" != typeof b || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                        b = a.sa(b);
                        a.a.zb(b,
                            a.Ia.fn);
                        return b.extend({trackArrayChanges: !0})
                    };
                    a.Ia.fn = {
                        remove: function (b) {
                            for (var c = this.w(), d = [], e = "function" != typeof b || a.N(b) ? function (a) {
                                return a === b
                            } : b, f = 0; f < c.length; f++) {
                                var g = c[f];
                                if (e(g)) {
                                    0 === d.length && this.xa();
                                    if (c[f] !== g) throw Error("Array modified during remove; cannot remove item");
                                    d.push(g);
                                    c.splice(f, 1);
                                    f--
                                }
                            }
                            d.length && this.wa();
                            return d
                        }, removeAll: function (b) {
                            if (b === p) {
                                var c = this.w(), d = c.slice(0);
                                this.xa();
                                c.splice(0, c.length);
                                this.wa();
                                return d
                            }
                            return b ? this.remove(function (c) {
                                return 0 <=
                                    a.a.A(b, c)
                            }) : []
                        }, destroy: function (b) {
                            var c = this.w(), d = "function" != typeof b || a.N(b) ? function (a) {
                                return a === b
                            } : b;
                            this.xa();
                            for (var e = c.length - 1; 0 <= e; e--) {
                                var f = c[e];
                                d(f) && (f._destroy = !0)
                            }
                            this.wa()
                        }, destroyAll: function (b) {
                            return b === p ? this.destroy(function () {
                                return !0
                            }) : b ? this.destroy(function (c) {
                                return 0 <= a.a.A(b, c)
                            }) : []
                        }, indexOf: function (b) {
                            var c = this();
                            return a.a.A(c, b)
                        }, replace: function (a, c) {
                            var d = this.indexOf(a);
                            0 <= d && (this.xa(), this.w()[d] = c, this.wa())
                        }, sorted: function (a) {
                            var c = this().slice(0);
                            return a ? c.sort(a) : c.sort()
                        }, reversed: function () {
                            return this().slice(0).reverse()
                        }
                    };
                    a.a.Ba && a.a.setPrototypeOf(a.Ia.fn, a.sa.fn);
                    a.a.C("pop push reverse shift sort splice unshift".split(" "), function (b) {
                        a.Ia.fn[b] = function () {
                            var a = this.w();
                            this.xa();
                            this.yc(a, b, arguments);
                            var d = a[b].apply(a, arguments);
                            this.wa();
                            return d === a ? this : d
                        }
                    });
                    a.a.C(["slice"], function (b) {
                        a.Ia.fn[b] = function () {
                            var a = this();
                            return a[b].apply(a, arguments)
                        }
                    });
                    a.Oc = function (b) {
                        return a.N(b) && "function" == typeof b.remove && "function" ==
                            typeof b.push
                    };
                    a.b("observableArray", a.Ia);
                    a.b("isObservableArray", a.Oc);
                    a.Ta.trackArrayChanges = function (b, c) {
                        function d() {
                            function c() {
                                if (h) {
                                    var d = [].concat(b.w() || []);
                                    if (b.Wa("arrayChange")) {
                                        var e;
                                        if (!f || 1 < h) f = a.a.Ob(m, d, b.Nb);
                                        e = f
                                    }
                                    m = d;
                                    f = null;
                                    h = 0;
                                    e && e.length && b.notifySubscribers(e, "arrayChange")
                                }
                            }

                            e ? c() : (e = !0, l = b.notifySubscribers, b.notifySubscribers = function (a, b) {
                                b && "change" !== b || ++h;
                                return l.apply(this, arguments)
                            }, m = [].concat(b.w() || []), f = null, g = b.subscribe(c))
                        }

                        b.Nb = {};
                        c && "object" == typeof c && a.a.extend(b.Nb,
                            c);
                        b.Nb.sparse = !0;
                        if (!b.yc) {
                            var e = !1, f = null, g, h = 0, m, l, k = b.Qa, q = b.cb;
                            b.Qa = function (a) {
                                k && k.call(b, a);
                                "arrayChange" === a && d()
                            };
                            b.cb = function (a) {
                                q && q.call(b, a);
                                "arrayChange" !== a || b.Wa("arrayChange") || (l && (b.notifySubscribers = l, l = p), g && g.s(), g = null, e = !1, m = p)
                            };
                            b.yc = function (b, c, d) {
                                function k(a, b, c) {
                                    return l[l.length] = {status: a, value: b, index: c}
                                }

                                if (e && !h) {
                                    var l = [], g = b.length, q = d.length, m = 0;
                                    switch (c) {
                                        case "push":
                                            m = g;
                                        case "unshift":
                                            for (c = 0; c < q; c++) k("added", d[c], m + c);
                                            break;
                                        case "pop":
                                            m = g - 1;
                                        case "shift":
                                            g &&
                                            k("deleted", b[m], m);
                                            break;
                                        case "splice":
                                            c = Math.min(Math.max(0, 0 > d[0] ? g + d[0] : d[0]), g);
                                            for (var g = 1 === q ? g : Math.min(c + (d[1] || 0), g), q = c + q - 2, m = Math.max(g, q), U = [], L = [], p = 2; c < m; ++c, ++p) c < g && L.push(k("deleted", b[c], c)), c < q && U.push(k("added", d[p], c));
                                            a.a.Jc(L, U);
                                            break;
                                        default:
                                            return
                                    }
                                    f = l
                                }
                            }
                        }
                    };
                    var t = a.a.Da("_state");
                    a.o = a.$ = function (b, c, d) {
                        function e() {
                            if (0 < arguments.length) {
                                if ("function" === typeof f) f.apply(g.lb, arguments); else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                                return this
                            }
                            g.qa || a.v.ac(e);
                            (g.ka || g.G && e.Xa()) && e.ha();
                            return g.X
                        }

                        "object" === typeof b ? d = b : (d = d || {}, b && (d.read = b));
                        if ("function" != typeof d.read) throw Error("Pass a function that returns the value of the ko.computed");
                        var f = d.write, g = {
                            X: p,
                            ra: !0,
                            ka: !0,
                            pb: !1,
                            hc: !1,
                            qa: !1,
                            vb: !1,
                            G: !1,
                            Vc: d.read,
                            lb: c || d.owner,
                            l: d.disposeWhenNodeIsRemoved || d.l || null,
                            Sa: d.disposeWhen || d.Sa,
                            Qb: null,
                            F: {},
                            V: 0,
                            Hc: null
                        };
                        e[t] = g;
                        e.Mc = "function" === typeof f;
                        a.a.Ba || a.a.extend(e, a.R.fn);
                        a.R.fn.ob(e);
                        a.a.zb(e, C);
                        d.pure ? (g.vb = !0, g.G = !0,
                            a.a.extend(e, da)) : d.deferEvaluation && a.a.extend(e, ea);
                        a.options.deferUpdates && a.Ta.deferred(e, !0);
                        g.l && (g.hc = !0, g.l.nodeType || (g.l = null));
                        g.G || d.deferEvaluation || e.ha();
                        g.l && e.ja() && a.a.I.za(g.l, g.Qb = function () {
                            e.s()
                        });
                        return e
                    };
                    var C = {
                            equalityComparer: K, pa: function () {
                                return this[t].V
                            }, Va: function () {
                                var b = [];
                                a.a.O(this[t].F, function (a, d) {
                                    b[d.La] = d.da
                                });
                                return b
                            }, Ub: function (b) {
                                if (!this[t].V) return !1;
                                var c = this.Va();
                                return -1 !== a.a.A(c, b) ? !0 : !!a.a.Lb(c, function (a) {
                                    return a.Ub && a.Ub(b)
                                })
                            }, tc: function (a,
                                             c, d) {
                                if (this[t].vb && c === this) throw Error("A 'pure' computed must not be called recursively");
                                this[t].F[a] = d;
                                d.La = this[t].V++;
                                d.Ma = c.mb()
                            }, Xa: function () {
                                var a, c, d = this[t].F;
                                for (a in d) if (Object.prototype.hasOwnProperty.call(d, a) && (c = d[a], this.Ja && c.da.Ka || c.da.Cd(c.Ma))) return !0
                            }, Id: function () {
                                this.Ja && !this[t].pb && this.Ja(!1)
                            }, ja: function () {
                                var a = this[t];
                                return a.ka || 0 < a.V
                            }, Qd: function () {
                                this.Ka ? this[t].ka && (this[t].ra = !0) : this.Gc()
                            }, Zc: function (a) {
                                if (a.Hb) {
                                    var c = a.subscribe(this.Id, this, "dirty"),
                                        d = a.subscribe(this.Qd, this);
                                    return {
                                        da: a, s: function () {
                                            c.s();
                                            d.s()
                                        }
                                    }
                                }
                                return a.subscribe(this.Gc, this)
                            }, Gc: function () {
                                var b = this, c = b.throttleEvaluation;
                                c && 0 <= c ? (clearTimeout(this[t].Hc), this[t].Hc = a.a.setTimeout(function () {
                                    b.ha(!0)
                                }, c)) : b.Ja ? b.Ja(!0) : b.ha(!0)
                            }, ha: function (b) {
                                var c = this[t], d = c.Sa, e = !1;
                                if (!c.pb && !c.qa) {
                                    if (c.l && !a.a.Rb(c.l) || d && d()) {
                                        if (!c.hc) {
                                            this.s();
                                            return
                                        }
                                    } else c.hc = !1;
                                    c.pb = !0;
                                    try {
                                        e = this.yd(b)
                                    } finally {
                                        c.pb = !1
                                    }
                                    return e
                                }
                            }, yd: function (b) {
                                var c = this[t], d = !1, e = c.vb ? p : !c.V, d = {
                                    pd: this, kb: c.F,
                                    Pb: c.V
                                };
                                a.v.wc({od: d, nd: ba, o: this, rb: e});
                                c.F = {};
                                c.V = 0;
                                var f = this.xd(c, d);
                                c.V ? d = this.qb(c.X, f) : (this.s(), d = !0);
                                d && (c.G ? this.Gb() : this.notifySubscribers(c.X, "beforeChange"), c.X = f, this.notifySubscribers(c.X, "spectate"), !c.G && b && this.notifySubscribers(c.X), this.qc && this.qc());
                                e && this.notifySubscribers(c.X, "awake");
                                return d
                            }, xd: function (b, c) {
                                try {
                                    var d = b.Vc;
                                    return b.lb ? d.call(b.lb) : d()
                                } finally {
                                    a.v.end(), c.Pb && !b.G && a.a.O(c.kb, aa), b.ra = b.ka = !1
                                }
                            }, w: function (a) {
                                var c = this[t];
                                (c.ka && (a || !c.V) || c.G && this.Xa()) &&
                                this.ha();
                                return c.X
                            }, tb: function (b) {
                                a.R.fn.tb.call(this, b);
                                this.mc = function () {
                                    this[t].G || (this[t].ra ? this.ha() : this[t].ka = !1);
                                    return this[t].X
                                };
                                this.Ja = function (a) {
                                    this.oc(this[t].X);
                                    this[t].ka = !0;
                                    a && (this[t].ra = !0);
                                    this.pc(this, !a)
                                }
                            }, s: function () {
                                var b = this[t];
                                !b.G && b.F && a.a.O(b.F, function (a, b) {
                                    b.s && b.s()
                                });
                                b.l && b.Qb && a.a.I.xb(b.l, b.Qb);
                                b.F = p;
                                b.V = 0;
                                b.qa = !0;
                                b.ra = !1;
                                b.ka = !1;
                                b.G = !1;
                                b.l = p;
                                b.Sa = p;
                                b.Vc = p;
                                this.Mc || (b.lb = p)
                            }
                        }, da = {
                            Qa: function (b) {
                                var c = this, d = c[t];
                                if (!d.qa && d.G && "change" == b) {
                                    d.G = !1;
                                    if (d.ra ||
                                        c.Xa()) d.F = null, d.V = 0, c.ha() && c.Gb(); else {
                                        var e = [];
                                        a.a.O(d.F, function (a, b) {
                                            e[b.La] = a
                                        });
                                        a.a.C(e, function (a, b) {
                                            var e = d.F[a], m = c.Zc(e.da);
                                            m.La = b;
                                            m.Ma = e.Ma;
                                            d.F[a] = m
                                        });
                                        c.Xa() && c.ha() && c.Gb()
                                    }
                                    d.qa || c.notifySubscribers(d.X, "awake")
                                }
                            }, cb: function (b) {
                                var c = this[t];
                                c.qa || "change" != b || this.Wa("change") || (a.a.O(c.F, function (a, b) {
                                    b.s && (c.F[a] = {da: b.da, La: b.La, Ma: b.Ma}, b.s())
                                }), c.G = !0, this.notifySubscribers(p, "asleep"))
                            }, mb: function () {
                                var b = this[t];
                                b.G && (b.ra || this.Xa()) && this.ha();
                                return a.R.fn.mb.call(this)
                            }
                        },
                        ea = {
                            Qa: function (a) {
                                "change" != a && "beforeChange" != a || this.w()
                            }
                        };
                    a.a.Ba && a.a.setPrototypeOf(C, a.R.fn);
                    var N = a.sa.Na;
                    C[N] = a.o;
                    a.Nc = function (a) {
                        return "function" == typeof a && a[N] === C[N]
                    };
                    a.Ed = function (b) {
                        return a.Nc(b) && b[t] && b[t].vb
                    };
                    a.b("computed", a.o);
                    a.b("dependentObservable", a.o);
                    a.b("isComputed", a.Nc);
                    a.b("isPureComputed", a.Ed);
                    a.b("computed.fn", C);
                    a.J(C, "peek", C.w);
                    a.J(C, "dispose", C.s);
                    a.J(C, "isActive", C.ja);
                    a.J(C, "getDependenciesCount", C.pa);
                    a.J(C, "getDependencies", C.Va);
                    a.wb = function (b, c) {
                        if ("function" ===
                            typeof b) return a.o(b, c, {pure: !0});
                        b = a.a.extend({}, b);
                        b.pure = !0;
                        return a.o(b, c)
                    };
                    a.b("pureComputed", a.wb);
                    (function () {
                        function b(a, f, g) {
                            g = g || new d;
                            a = f(a);
                            if ("object" != typeof a || null === a || a === p || a instanceof RegExp || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean) return a;
                            var h = a instanceof Array ? [] : {};
                            g.save(a, h);
                            c(a, function (c) {
                                var d = f(a[c]);
                                switch (typeof d) {
                                    case "boolean":
                                    case "number":
                                    case "string":
                                    case "function":
                                        h[c] = d;
                                        break;
                                    case "object":
                                    case "undefined":
                                        var k =
                                            g.get(d);
                                        h[c] = k !== p ? k : b(d, f, g)
                                }
                            });
                            return h
                        }

                        function c(a, b) {
                            if (a instanceof Array) {
                                for (var c = 0; c < a.length; c++) b(c);
                                "function" == typeof a.toJSON && b("toJSON")
                            } else for (c in a) b(c)
                        }

                        function d() {
                            this.keys = [];
                            this.values = []
                        }

                        a.$c = function (c) {
                            if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                            return b(c, function (b) {
                                for (var c = 0; a.N(b) && 10 > c; c++) b = b();
                                return b
                            })
                        };
                        a.toJSON = function (b, c, d) {
                            b = a.$c(b);
                            return a.a.fc(b, c, d)
                        };
                        d.prototype = {
                            constructor: d, save: function (b,
                                                            c) {
                                var d = a.a.A(this.keys, b);
                                0 <= d ? this.values[d] = c : (this.keys.push(b), this.values.push(c))
                            }, get: function (b) {
                                b = a.a.A(this.keys, b);
                                return 0 <= b ? this.values[b] : p
                            }
                        }
                    })();
                    a.b("toJS", a.$c);
                    a.b("toJSON", a.toJSON);
                    a.Vd = function (b, c, d) {
                        function e(c) {
                            var e = a.wb(b, d).extend({Ga: "always"}), h = e.subscribe(function (a) {
                                a && (h.s(), c(a))
                            });
                            e.notifySubscribers(e.w());
                            return h
                        }

                        return "function" !== typeof Promise || c ? e(c.bind(d)) : new Promise(e)
                    };
                    a.b("when", a.Vd);
                    (function () {
                        a.u = {
                            L: function (b) {
                                switch (a.a.P(b)) {
                                    case "option":
                                        return !0 ===
                                        b.__ko__hasDomDataOptionValue__ ? a.a.g.get(b, a.f.options.Yb) : 7 >= a.a.W ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
                                    case "select":
                                        return 0 <= b.selectedIndex ? a.u.L(b.options[b.selectedIndex]) : p;
                                    default:
                                        return b.value
                                }
                            }, ya: function (b, c, d) {
                                switch (a.a.P(b)) {
                                    case "option":
                                        "string" === typeof c ? (a.a.g.set(b, a.f.options.Yb, p), "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__, b.value = c) : (a.a.g.set(b, a.f.options.Yb, c), b.__ko__hasDomDataOptionValue__ =
                                            !0, b.value = "number" === typeof c ? c : "");
                                        break;
                                    case "select":
                                        if ("" === c || null === c) c = p;
                                        for (var e = -1, f = 0, g = b.options.length, h; f < g; ++f) if (h = a.u.L(b.options[f]), h == c || "" === h && c === p) {
                                            e = f;
                                            break
                                        }
                                        if (d || 0 <= e || c === p && 1 < b.size) b.selectedIndex = e, 6 === a.a.W && a.a.setTimeout(function () {
                                            b.selectedIndex = e
                                        }, 0);
                                        break;
                                    default:
                                        if (null === c || c === p) c = "";
                                        b.value = c
                                }
                            }
                        }
                    })();
                    a.b("selectExtensions", a.u);
                    a.b("selectExtensions.readValue", a.u.L);
                    a.b("selectExtensions.writeValue", a.u.ya);
                    a.m = function () {
                        function b(b) {
                            b = a.a.Cb(b);
                            123 === b.charCodeAt(0) &&
                            (b = b.slice(1, -1));
                            b += "\n,";
                            var c = [], d = b.match(e), q, n = [], h = 0;
                            if (1 < d.length) {
                                for (var y = 0, A; A = d[y]; ++y) {
                                    var u = A.charCodeAt(0);
                                    if (44 === u) {
                                        if (0 >= h) {
                                            c.push(q && n.length ? {
                                                key: q,
                                                value: n.join("")
                                            } : {unknown: q || n.join("")});
                                            q = h = 0;
                                            n = [];
                                            continue
                                        }
                                    } else if (58 === u) {
                                        if (!h && !q && 1 === n.length) {
                                            q = n.pop();
                                            continue
                                        }
                                    } else if (47 === u && 1 < A.length && (47 === A.charCodeAt(1) || 42 === A.charCodeAt(1))) continue; else 47 === u && y && 1 < A.length ? (u = d[y - 1].match(f)) && !g[u[0]] && (b = b.substr(b.indexOf(A) + 1), d = b.match(e), y = -1, A = "/") : 40 === u || 123 ===
                                    u || 91 === u ? ++h : 41 === u || 125 === u || 93 === u ? --h : q || n.length || 34 !== u && 39 !== u || (A = A.slice(1, -1));
                                    n.push(A)
                                }
                                if (0 < h) throw Error("Unbalanced parentheses, braces, or brackets");
                            }
                            return c
                        }

                        var c = ["true", "false", "null", "undefined"],
                            d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                            e = RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]", "g"),
                            f = /[\])"'A-Za-z0-9_$]+$/, g = {
                                "in": 1, "return": 1,
                                "typeof": 1
                            }, h = {};
                        return {
                            Ra: [], va: h, Zb: b, ub: function (e, f) {
                                function k(b, e) {
                                    var f;
                                    if (!y) {
                                        var l = a.getBindingHandler(b);
                                        if (l && l.preprocess && !(e = l.preprocess(e, b, k))) return;
                                        if (l = h[b]) f = e, 0 <= a.a.A(c, f) ? f = !1 : (l = f.match(d), f = null === l ? !1 : l[1] ? "Object(" + l[1] + ")" + l[2] : f), l = f;
                                        l && n.push("'" + ("string" == typeof h[b] ? h[b] : b) + "':function(_z){" + f + "=_z}")
                                    }
                                    g && (e = "function(){return " + e + " }");
                                    q.push("'" + b + "':" + e)
                                }

                                f = f || {};
                                var q = [], n = [], g = f.valueAccessors, y = f.bindingParams,
                                    A = "string" === typeof e ? b(e) : e;
                                a.a.C(A, function (a) {
                                    k(a.key ||
                                        a.unknown, a.value)
                                });
                                n.length && k("_ko_property_writers", "{" + n.join(",") + " }");
                                return q.join(",")
                            }, Hd: function (a, b) {
                                for (var c = 0; c < a.length; c++) if (a[c].key == b) return !0;
                                return !1
                            }, $a: function (b, c, d, e, f) {
                                if (b && a.N(b)) !a.Ya(b) || f && b.w() === e || b(e); else if ((b = c.get("_ko_property_writers")) && b[d]) b[d](e)
                            }
                        }
                    }();
                    a.b("expressionRewriting", a.m);
                    a.b("expressionRewriting.bindingRewriteValidators", a.m.Ra);
                    a.b("expressionRewriting.parseObjectLiteral", a.m.Zb);
                    a.b("expressionRewriting.preProcessBindings", a.m.ub);
                    a.b("expressionRewriting._twoWayBindings",
                        a.m.va);
                    a.b("jsonExpressionRewriting", a.m);
                    a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.m.ub);
                    (function () {
                        function b(a) {
                            return 8 == a.nodeType && g.test(f ? a.text : a.nodeValue)
                        }

                        function c(a) {
                            return 8 == a.nodeType && h.test(f ? a.text : a.nodeValue)
                        }

                        function d(d, e) {
                            for (var f = d, g = 1, h = []; f = f.nextSibling;) {
                                if (c(f) && (a.a.g.set(f, l, !0), g--, 0 === g)) return h;
                                h.push(f);
                                b(f) && g++
                            }
                            if (!e) throw Error("Cannot find closing comment tag to match: " + d.nodeValue);
                            return null
                        }

                        function e(a, b) {
                            var c = d(a, b);
                            return c ?
                                0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null
                        }

                        var f = w && "\x3c!--test--\x3e" === w.createComment("test").text,
                            g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                            h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, m = {ul: !0, ol: !0},
                            l = "__ko_matchedEndComment__";
                        a.h = {
                            ea: {}, childNodes: function (a) {
                                return b(a) ? d(a) : a.childNodes
                            }, Ea: function (c) {
                                if (b(c)) {
                                    c = a.h.childNodes(c);
                                    for (var d = 0, e = c.length; d < e; d++) a.removeNode(c[d])
                                } else a.a.Sb(c)
                            }, ua: function (c, d) {
                                if (b(c)) {
                                    a.h.Ea(c);
                                    for (var e =
                                        c.nextSibling, f = 0, l = d.length; f < l; f++) e.parentNode.insertBefore(d[f], e)
                                } else a.a.ua(c, d)
                            }, Uc: function (a, c) {
                                b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c)
                            }, Vb: function (c, d, e) {
                                e ? b(c) ? c.parentNode.insertBefore(d, e.nextSibling) : e.nextSibling ? c.insertBefore(d, e.nextSibling) : c.appendChild(d) : a.h.Uc(c, d)
                            }, firstChild: function (a) {
                                if (b(a)) return !a.nextSibling || c(a.nextSibling) ? null : a.nextSibling;
                                if (a.firstChild && c(a.firstChild)) throw Error("Found invalid end comment, as the first child of " +
                                    a);
                                return a.firstChild
                            }, nextSibling: function (d) {
                                b(d) && (d = e(d));
                                if (d.nextSibling && c(d.nextSibling)) {
                                    var f = d.nextSibling;
                                    if (c(f) && !a.a.g.get(f, l)) throw Error("Found end comment without a matching opening comment, as child of " + d);
                                    return null
                                }
                                return d.nextSibling
                            }, Bd: b, Ud: function (a) {
                                return (a = (f ? a.text : a.nodeValue).match(g)) ? a[1] : null
                            }, Rc: function (d) {
                                if (m[a.a.P(d)]) {
                                    var f = d.firstChild;
                                    if (f) {
                                        do if (1 === f.nodeType) {
                                            var l;
                                            l = f.firstChild;
                                            var g = null;
                                            if (l) {
                                                do if (g) g.push(l); else if (b(l)) {
                                                    var h = e(l, !0);
                                                    h ? l =
                                                        h : g = [l]
                                                } else c(l) && (g = [l]); while (l = l.nextSibling)
                                            }
                                            if (l = g) for (g = f.nextSibling, h = 0; h < l.length; h++) g ? d.insertBefore(l[h], g) : d.appendChild(l[h])
                                        } while (f = f.nextSibling)
                                    }
                                }
                            }
                        }
                    })();
                    a.b("virtualElements", a.h);
                    a.b("virtualElements.allowedBindings", a.h.ea);
                    a.b("virtualElements.emptyNode", a.h.Ea);
                    a.b("virtualElements.insertAfter", a.h.Vb);
                    a.b("virtualElements.prepend", a.h.Uc);
                    a.b("virtualElements.setDomNodeChildren", a.h.ua);
                    (function () {
                        a.ga = function () {
                            this.md = {}
                        };
                        a.a.extend(a.ga.prototype, {
                            nodeHasBindings: function (b) {
                                switch (b.nodeType) {
                                    case 1:
                                        return null !=
                                            b.getAttribute("data-bind") || a.i.getComponentNameForNode(b);
                                    case 8:
                                        return a.h.Bd(b);
                                    default:
                                        return !1
                                }
                            }, getBindings: function (b, c) {
                                var d = this.getBindingsString(b, c), d = d ? this.parseBindingsString(d, c, b) : null;
                                return a.i.sc(d, b, c, !1)
                            }, getBindingAccessors: function (b, c) {
                                var d = this.getBindingsString(b, c),
                                    d = d ? this.parseBindingsString(d, c, b, {valueAccessors: !0}) : null;
                                return a.i.sc(d, b, c, !0)
                            }, getBindingsString: function (b) {
                                switch (b.nodeType) {
                                    case 1:
                                        return b.getAttribute("data-bind");
                                    case 8:
                                        return a.h.Ud(b);
                                    default:
                                        return null
                                }
                            },
                            parseBindingsString: function (b, c, d, e) {
                                try {
                                    var f = this.md, g = b + (e && e.valueAccessors || ""), h;
                                    if (!(h = f[g])) {
                                        var m, l = "with($context){with($data||{}){return{" + a.m.ub(b, e) + "}}}";
                                        m = new Function("$context", "$element", l);
                                        h = f[g] = m
                                    }
                                    return h(c, d)
                                } catch (k) {
                                    throw k.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + k.message, k;
                                }
                            }
                        });
                        a.ga.instance = new a.ga
                    })();
                    a.b("bindingProvider", a.ga);
                    (function () {
                        function b(b) {
                            var c = (b = a.a.g.get(b, B)) && b.M;
                            c && (b.M = null, c.Sc())
                        }

                        function c(c, d, e) {
                            this.node = c;
                            this.xc =
                                d;
                            this.ib = [];
                            this.T = !1;
                            d.M || a.a.I.za(c, b);
                            e && e.M && (e.M.ib.push(c), this.Kb = e)
                        }

                        function d(a) {
                            return function () {
                                return a
                            }
                        }

                        function e(a) {
                            return a()
                        }

                        function f(b) {
                            return a.a.Ha(a.v.K(b), function (a, c) {
                                return function () {
                                    return b()[c]
                                }
                            })
                        }

                        function g(b, c, e) {
                            return "function" === typeof b ? f(b.bind(null, c, e)) : a.a.Ha(b, d)
                        }

                        function h(a, b) {
                            return f(this.getBindings.bind(this, a, b))
                        }

                        function m(b, c) {
                            var d = a.h.firstChild(c);
                            if (d) {
                                var e, f = a.ga.instance, k = f.preprocessNode;
                                if (k) {
                                    for (; e = d;) d = a.h.nextSibling(e), k.call(f, e);
                                    d = a.h.firstChild(c)
                                }
                                for (; e = d;) d = a.h.nextSibling(e), l(b, e)
                            }
                            a.j.Ga(c, a.j.T)
                        }

                        function l(b, c) {
                            var d = b, e = 1 === c.nodeType;
                            e && a.h.Rc(c);
                            if (e || a.ga.instance.nodeHasBindings(c)) d = q(c, null, b).bindingContextForDescendants;
                            d && !u[a.a.P(c)] && m(d, c)
                        }

                        function k(b) {
                            var c = [], d = {}, e = [];
                            a.a.O(b, function ca(f) {
                                if (!d[f]) {
                                    var l = a.getBindingHandler(f);
                                    l && (l.after && (e.push(f), a.a.C(l.after, function (c) {
                                        if (b[c]) {
                                            if (-1 !== a.a.A(e, c)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + e.join(", "));
                                            ca(c)
                                        }
                                    }), e.length--), c.push({key: f, Lc: l}));
                                    d[f] = !0
                                }
                            });
                            return c
                        }

                        function q(b, c, d) {
                            var f = a.a.g.Tb(b, B, {}), l = f.gd;
                            if (!c) {
                                if (l) throw Error("You cannot apply bindings multiple times to the same element.");
                                f.gd = !0
                            }
                            l || (f.context = d);
                            var g;
                            if (c && "function" !== typeof c) g = c; else {
                                var q = a.ga.instance, n = q.getBindingAccessors || h, m = a.$(function () {
                                    if (g = c ? c(d, b) : n.call(q, b, d)) {
                                        if (d[r]) d[r]();
                                        if (d[A]) d[A]()
                                    }
                                    return g
                                }, null, {l: b});
                                g && m.ja() || (m = null)
                            }
                            var y = d, u;
                            if (g) {
                                var J = function () {
                                    return a.a.Ha(m ? m() : g, e)
                                }, t = m ? function (a) {
                                        return function () {
                                            return e(m()[a])
                                        }
                                    } :
                                    function (a) {
                                        return g[a]
                                    };
                                J.get = function (a) {
                                    return g[a] && e(t(a))
                                };
                                J.has = function (a) {
                                    return a in g
                                };
                                a.j.T in g && a.j.subscribe(b, a.j.T, function () {
                                    var c = (0, g[a.j.T])();
                                    if (c) {
                                        var d = a.h.childNodes(b);
                                        d.length && c(d, a.Dc(d[0]))
                                    }
                                });
                                a.j.oa in g && (y = a.j.Bb(b, d), a.j.subscribe(b, a.j.oa, function () {
                                    var c = (0, g[a.j.oa])();
                                    c && a.h.firstChild(b) && c(b)
                                }));
                                f = k(g);
                                a.a.C(f, function (c) {
                                    var d = c.Lc.init, e = c.Lc.update, f = c.key;
                                    if (8 === b.nodeType && !a.h.ea[f]) throw Error("The binding '" + f + "' cannot be used with virtual elements");
                                    try {
                                        "function" == typeof d && a.v.K(function () {
                                            var a = d(b, t(f), J, y.$data, y);
                                            if (a && a.controlsDescendantBindings) {
                                                if (u !== p) throw Error("Multiple bindings (" + u + " and " + f + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                                u = f
                                            }
                                        }), "function" == typeof e && a.$(function () {
                                            e(b, t(f), J, y.$data, y)
                                        }, null, {l: b})
                                    } catch (l) {
                                        throw l.message = 'Unable to process binding "' + f + ": " + g[f] + '"\nMessage: ' + l.message, l;
                                    }
                                })
                            }
                            f = u === p;
                            return {
                                shouldBindDescendants: f,
                                bindingContextForDescendants: f && y
                            }
                        }

                        function n(b, c) {
                            return b && b instanceof a.fa ? b : new a.fa(b, p, p, c)
                        }

                        var r = a.a.Da("_subscribable"), y = a.a.Da("_ancestorBindingInfo"),
                            A = a.a.Da("_dataDependency");
                        a.f = {};
                        var u = {script: !0, textarea: !0, template: !0};
                        a.getBindingHandler = function (b) {
                            return a.f[b]
                        };
                        var J = {};
                        a.fa = function (b, c, d, e, f) {
                            function l() {
                                var b = q ? h() : h, f = a.a.c(b);
                                c ? (a.a.extend(k, c), y in c && (k[y] = c[y])) : (k.$parents = [], k.$root = f, k.ko = a);
                                k[r] = n;
                                g ? f = k.$data : (k.$rawData = b, k.$data = f);
                                d && (k[d] = f);
                                e && e(k, c, f);
                                if (c &&
                                    c[r] && !a.U.o().Ub(c[r])) c[r]();
                                m && (k[A] = m);
                                return k.$data
                            }

                            var k = this, g = b === J, h = g ? p : b, q = "function" == typeof h && !a.N(h), n,
                                m = f && f.dataDependency;
                            f && f.exportDependencies ? l() : (n = a.wb(l), n.w(), n.ja() ? n.equalityComparer = null : k[r] = p)
                        };
                        a.fa.prototype.createChildContext = function (b, c, d, e) {
                            !e && c && "object" == typeof c && (e = c, c = e.as, d = e.extend);
                            if (c && e && e.noChildContext) {
                                var f = "function" == typeof b && !a.N(b);
                                return new a.fa(J, this, null, function (a) {
                                    d && d(a);
                                    a[c] = f ? b() : b
                                }, e)
                            }
                            return new a.fa(b, this, c, function (a, b) {
                                a.$parentContext =
                                    b;
                                a.$parent = b.$data;
                                a.$parents = (b.$parents || []).slice(0);
                                a.$parents.unshift(a.$parent);
                                d && d(a)
                            }, e)
                        };
                        a.fa.prototype.extend = function (b, c) {
                            return new a.fa(J, this, null, function (c) {
                                a.a.extend(c, "function" == typeof b ? b(c) : b)
                            }, c)
                        };
                        var B = a.a.g.Z();
                        c.prototype.Sc = function () {
                            this.Kb && this.Kb.M && this.Kb.M.rd(this.node)
                        };
                        c.prototype.rd = function (b) {
                            a.a.hb(this.ib, b);
                            !this.ib.length && this.T && this.Bc()
                        };
                        c.prototype.Bc = function () {
                            this.T = !0;
                            this.xc.M && !this.ib.length && (this.xc.M = null, a.a.I.xb(this.node, b), a.j.Ga(this.node,
                                a.j.oa), this.Sc())
                        };
                        a.j = {
                            T: "childrenComplete", oa: "descendantsComplete", subscribe: function (b, c, d, e) {
                                b = a.a.g.Tb(b, B, {});
                                b.Fa || (b.Fa = new a.R);
                                return b.Fa.subscribe(d, e, c)
                            }, Ga: function (b, c) {
                                var d = a.a.g.get(b, B);
                                if (d && (d.Fa && d.Fa.notifySubscribers(b, c), c == a.j.T)) if (d.M) d.M.Bc(); else if (d.M === p && d.Fa && d.Fa.Wa(a.j.oa)) throw Error("descendantsComplete event not supported for bindings on this node");
                            }, Bb: function (b, d) {
                                var e = a.a.g.Tb(b, B, {});
                                e.M || (e.M = new c(b, e, d[y]));
                                return d[y] == e ? d : d.extend(function (a) {
                                    a[y] =
                                        e
                                })
                            }
                        };
                        a.Sd = function (b) {
                            return (b = a.a.g.get(b, B)) && b.context
                        };
                        a.eb = function (b, c, d) {
                            1 === b.nodeType && a.h.Rc(b);
                            return q(b, c, n(d))
                        };
                        a.kd = function (b, c, d) {
                            d = n(d);
                            return a.eb(b, g(c, d, b), d)
                        };
                        a.Pa = function (a, b) {
                            1 !== b.nodeType && 8 !== b.nodeType || m(n(a), b)
                        };
                        a.uc = function (a, b, c) {
                            !v && z.jQuery && (v = z.jQuery);
                            if (2 > arguments.length) {
                                if (b = w.body, !b) throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
                            } else if (!b || 1 !== b.nodeType && 8 !== b.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                            l(n(a, c), b)
                        };
                        a.Cc = function (b) {
                            return !b || 1 !== b.nodeType && 8 !== b.nodeType ? p : a.Sd(b)
                        };
                        a.Dc = function (b) {
                            return (b = a.Cc(b)) ? b.$data : p
                        };
                        a.b("bindingHandlers", a.f);
                        a.b("bindingEvent", a.j);
                        a.b("bindingEvent.subscribe", a.j.subscribe);
                        a.b("bindingEvent.startPossiblyAsyncContentBinding", a.j.Bb);
                        a.b("applyBindings", a.uc);
                        a.b("applyBindingsToDescendants", a.Pa);
                        a.b("applyBindingAccessorsToNode", a.eb);
                        a.b("applyBindingsToNode", a.kd);
                        a.b("contextFor", a.Cc);
                        a.b("dataFor", a.Dc)
                    })();
                    (function (b) {
                        function c(c, e) {
                            var l =
                                Object.prototype.hasOwnProperty.call(f, c) ? f[c] : b, k;
                            l ? l.subscribe(e) : (l = f[c] = new a.R, l.subscribe(e), d(c, function (b, d) {
                                var e = !(!d || !d.synchronous);
                                g[c] = {definition: b, Fd: e};
                                delete f[c];
                                k || e ? l.notifySubscribers(b) : a.ma.yb(function () {
                                    l.notifySubscribers(b)
                                })
                            }), k = !0)
                        }

                        function d(a, b) {
                            e("getConfig", [a], function (c) {
                                c ? e("loadComponent", [a, c], function (a) {
                                    b(a, c)
                                }) : b(null, null)
                            })
                        }

                        function e(c, d, f, k) {
                            k || (k = a.i.loaders.slice(0));
                            var g = k.shift();
                            if (g) {
                                var n = g[c];
                                if (n) {
                                    var r = !1;
                                    if (n.apply(g, d.concat(function (a) {
                                            r ?
                                                f(null) : null !== a ? f(a) : e(c, d, f, k)
                                        })) !== b && (r = !0, !g.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                                } else e(c, d, f, k)
                            } else f(null)
                        }

                        var f = {}, g = {};
                        a.i = {
                            get: function (d, e) {
                                var f = Object.prototype.hasOwnProperty.call(g, d) ? g[d] : b;
                                f ? f.Fd ? a.v.K(function () {
                                    e(f.definition)
                                }) : a.ma.yb(function () {
                                    e(f.definition)
                                }) : c(d, e)
                            }, Ac: function (a) {
                                delete g[a]
                            }, nc: e
                        };
                        a.i.loaders = [];
                        a.b("components", a.i);
                        a.b("components.get", a.i.get);
                        a.b("components.clearCachedDefinition", a.i.Ac)
                    })();
                    (function () {
                        function b(b, c, d, e) {
                            function g() {
                                0 === --A && e(h)
                            }

                            var h = {}, A = 2, u = d.template;
                            d = d.viewModel;
                            u ? f(c, u, function (c) {
                                a.i.nc("loadTemplate", [b, c], function (a) {
                                    h.template = a;
                                    g()
                                })
                            }) : g();
                            d ? f(c, d, function (c) {
                                a.i.nc("loadViewModel", [b, c], function (a) {
                                    h[m] = a;
                                    g()
                                })
                            }) : g()
                        }

                        function c(a, b, d) {
                            if ("function" === typeof b) d(function (a) {
                                return new b(a)
                            }); else if ("function" === typeof b[m]) d(b[m]); else if ("instance" in b) {
                                var e = b.instance;
                                d(function () {
                                    return e
                                })
                            } else "viewModel" in
                            b ? c(a, b.viewModel, d) : a("Unknown viewModel value: " + b)
                        }

                        function d(b) {
                            switch (a.a.P(b)) {
                                case "script":
                                    return a.a.ta(b.text);
                                case "textarea":
                                    return a.a.ta(b.value);
                                case "template":
                                    if (e(b.content)) return a.a.Ca(b.content.childNodes)
                            }
                            return a.a.Ca(b.childNodes)
                        }

                        function e(a) {
                            return z.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType
                        }

                        function f(a, b, c) {
                            "string" === typeof b.require ? T || z.require ? (T || z.require)([b.require], c) : a("Uses require, but no AMD loader is present") : c(b)
                        }

                        function g(a) {
                            return function (b) {
                                throw Error("Component '" +
                                    a + "': " + b);
                            }
                        }

                        var h = {};
                        a.i.register = function (b, c) {
                            if (!c) throw Error("Invalid configuration for " + b);
                            if (a.i.sb(b)) throw Error("Component " + b + " is already registered");
                            h[b] = c
                        };
                        a.i.sb = function (a) {
                            return Object.prototype.hasOwnProperty.call(h, a)
                        };
                        a.i.unregister = function (b) {
                            delete h[b];
                            a.i.Ac(b)
                        };
                        a.i.Ec = {
                            getConfig: function (b, c) {
                                c(a.i.sb(b) ? h[b] : null)
                            }, loadComponent: function (a, c, d) {
                                var e = g(a);
                                f(e, c, function (c) {
                                    b(a, e, c, d)
                                })
                            }, loadTemplate: function (b, c, f) {
                                b = g(b);
                                if ("string" === typeof c) f(a.a.ta(c)); else if (c instanceof
                                    Array) f(c); else if (e(c)) f(a.a.la(c.childNodes)); else if (c.element) if (c = c.element, z.HTMLElement ? c instanceof HTMLElement : c && c.tagName && 1 === c.nodeType) f(d(c)); else if ("string" === typeof c) {
                                    var h = w.getElementById(c);
                                    h ? f(d(h)) : b("Cannot find element with ID " + c)
                                } else b("Unknown element type: " + c); else b("Unknown template value: " + c)
                            }, loadViewModel: function (a, b, d) {
                                c(g(a), b, d)
                            }
                        };
                        var m = "createViewModel";
                        a.b("components.register", a.i.register);
                        a.b("components.isRegistered", a.i.sb);
                        a.b("components.unregister",
                            a.i.unregister);
                        a.b("components.defaultLoader", a.i.Ec);
                        a.i.loaders.push(a.i.Ec);
                        a.i.cd = h
                    })();
                    (function () {
                        function b(b, e) {
                            var f = b.getAttribute("params");
                            if (f) {
                                var f = c.parseBindingsString(f, e, b, {valueAccessors: !0, bindingParams: !0}),
                                    f = a.a.Ha(f, function (c) {
                                        return a.o(c, null, {l: b})
                                    }), g = a.a.Ha(f, function (c) {
                                        var e = c.w();
                                        return c.ja() ? a.o({
                                            read: function () {
                                                return a.a.c(c())
                                            }, write: a.Ya(e) && function (a) {
                                                c()(a)
                                            }, l: b
                                        }) : e
                                    });
                                Object.prototype.hasOwnProperty.call(g, "$raw") || (g.$raw = f);
                                return g
                            }
                            return {$raw: {}}
                        }

                        a.i.getComponentNameForNode =
                            function (b) {
                                var c = a.a.P(b);
                                if (a.i.sb(c) && (-1 != c.indexOf("-") || "[object HTMLUnknownElement]" == "" + b || 8 >= a.a.W && b.tagName === c)) return c
                            };
                        a.i.sc = function (c, e, f, g) {
                            if (1 === e.nodeType) {
                                var h = a.i.getComponentNameForNode(e);
                                if (h) {
                                    c = c || {};
                                    if (c.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                                    var m = {name: h, params: b(e, f)};
                                    c.component = g ? function () {
                                        return m
                                    } : m
                                }
                            }
                            return c
                        };
                        var c = new a.ga;
                        9 > a.a.W && (a.i.register = function (a) {
                            return function (b) {
                                return a.apply(this,
                                    arguments)
                            }
                        }(a.i.register), w.createDocumentFragment = function (b) {
                            return function () {
                                var c = b(), f = a.i.cd, g;
                                for (g in f) ;
                                return c
                            }
                        }(w.createDocumentFragment))
                    })();
                    (function () {
                        function b(b, c, d) {
                            c = c.template;
                            if (!c) throw Error("Component '" + b + "' has no template");
                            b = a.a.Ca(c);
                            a.h.ua(d, b)
                        }

                        function c(a, b, c) {
                            var d = a.createViewModel;
                            return d ? d.call(a, b, c) : b
                        }

                        var d = 0;
                        a.f.component = {
                            init: function (e, f, g, h, m) {
                                function l() {
                                    var a = k && k.dispose;
                                    "function" === typeof a && a.call(k);
                                    n && n.s();
                                    q = k = n = null
                                }

                                var k, q, n, r = a.a.la(a.h.childNodes(e));
                                a.h.Ea(e);
                                a.a.I.za(e, l);
                                a.o(function () {
                                    var g = a.a.c(f()), h, u;
                                    "string" === typeof g ? h = g : (h = a.a.c(g.name), u = a.a.c(g.params));
                                    if (!h) throw Error("No component name specified");
                                    var p = a.j.Bb(e, m), B = q = ++d;
                                    a.i.get(h, function (d) {
                                        if (q === B) {
                                            l();
                                            if (!d) throw Error("Unknown component '" + h + "'");
                                            b(h, d, e);
                                            var f = c(d, u, {element: e, templateNodes: r});
                                            d = p.createChildContext(f, {
                                                extend: function (a) {
                                                    a.$component = f;
                                                    a.$componentTemplateNodes = r
                                                }
                                            });
                                            f && f.koDescendantsComplete && (n = a.j.subscribe(e, a.j.oa, f.koDescendantsComplete, f));
                                            k = f;
                                            a.Pa(d, e)
                                        }
                                    })
                                }, null, {l: e});
                                return {controlsDescendantBindings: !0}
                            }
                        };
                        a.h.ea.component = !0
                    })();
                    var V = {"class": "className", "for": "htmlFor"};
                    a.f.attr = {
                        update: function (b, c) {
                            var d = a.a.c(c()) || {};
                            a.a.O(d, function (c, d) {
                                d = a.a.c(d);
                                var g = c.indexOf(":"),
                                    g = "lookupNamespaceURI" in b && 0 < g && b.lookupNamespaceURI(c.substr(0, g)),
                                    h = !1 === d || null === d || d === p;
                                h ? g ? b.removeAttributeNS(g, c) : b.removeAttribute(c) : d = d.toString();
                                8 >= a.a.W && c in V ? (c = V[c], h ? b.removeAttribute(c) : b[c] = d) : h || (g ? b.setAttributeNS(g, c, d) : b.setAttribute(c,
                                    d));
                                "name" === c && a.a.Xc(b, h ? "" : d)
                            })
                        }
                    };
                    (function () {
                        a.f.checked = {
                            after: ["value", "attr"], init: function (b, c, d) {
                                function e() {
                                    var e = b.checked, f = g();
                                    if (!a.U.rb() && (e || !m && !a.U.pa())) {
                                        var l = a.v.K(c);
                                        if (k) {
                                            var n = q ? l.w() : l, B = r;
                                            r = f;
                                            B !== f ? e && (a.a.Oa(n, f, !0), a.a.Oa(n, B, !1)) : a.a.Oa(n, f, e);
                                            q && a.Ya(l) && l(n)
                                        } else h && (f === p ? f = e : e || (f = p)), a.m.$a(l, d, "checked", f, !0)
                                    }
                                }

                                function f() {
                                    var d = a.a.c(c()), e = g();
                                    k ? (b.checked = 0 <= a.a.A(d, e), r = e) : b.checked = h && e === p ? !!d : g() === d
                                }

                                var g = a.wb(function () {
                                    if (d.has("checkedValue")) return a.a.c(d.get("checkedValue"));
                                    if (n) return d.has("value") ? a.a.c(d.get("value")) : b.value
                                }), h = "checkbox" == b.type, m = "radio" == b.type;
                                if (h || m) {
                                    var l = c(), k = h && a.a.c(l) instanceof Array, q = !(k && l.push && l.splice),
                                        n = m || k, r = k ? g() : p;
                                    m && !b.name && a.f.uniqueName.init(b, function () {
                                        return !0
                                    });
                                    a.o(e, null, {l: b});
                                    a.a.H(b, "click", e);
                                    a.o(f, null, {l: b});
                                    l = p
                                }
                            }
                        };
                        a.m.va.checked = !0;
                        a.f.checkedValue = {
                            update: function (b, c) {
                                b.value = a.a.c(c())
                            }
                        }
                    })();
                    a.f["class"] = {
                        update: function (b, c) {
                            var d = a.a.Cb(a.a.c(c()));
                            a.a.Eb(b, b.__ko__cssValue, !1);
                            b.__ko__cssValue = d;
                            a.a.Eb(b,
                                d, !0)
                        }
                    };
                    a.f.css = {
                        update: function (b, c) {
                            var d = a.a.c(c());
                            null !== d && "object" == typeof d ? a.a.O(d, function (c, d) {
                                d = a.a.c(d);
                                a.a.Eb(b, c, d)
                            }) : a.f["class"].update(b, c)
                        }
                    };
                    a.f.enable = {
                        update: function (b, c) {
                            var d = a.a.c(c());
                            d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = !0)
                        }
                    };
                    a.f.disable = {
                        update: function (b, c) {
                            a.f.enable.update(b, function () {
                                return !a.a.c(c())
                            })
                        }
                    };
                    a.f.event = {
                        init: function (b, c, d, e, f) {
                            var g = c() || {};
                            a.a.O(g, function (g) {
                                "string" == typeof g && a.a.H(b, g, function (b) {
                                    var l, k = c()[g];
                                    if (k) {
                                        try {
                                            var q = a.a.la(arguments);
                                            e = f.$data;
                                            q.unshift(e);
                                            l = k.apply(e, q)
                                        } finally {
                                            !0 !== l && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
                                        }
                                        !1 === d.get(g + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation())
                                    }
                                })
                            })
                        }
                    };
                    a.f.foreach = {
                        Qc: function (b) {
                            return function () {
                                var c = b(), d = a.a.$b(c);
                                if (!d || "number" == typeof d.length) return {foreach: c, templateEngine: a.ba.Na};
                                a.a.c(c);
                                return {
                                    foreach: d.data,
                                    as: d.as,
                                    noChildContext: d.noChildContext,
                                    includeDestroyed: d.includeDestroyed,
                                    afterAdd: d.afterAdd,
                                    beforeRemove: d.beforeRemove,
                                    afterRender: d.afterRender,
                                    beforeMove: d.beforeMove,
                                    afterMove: d.afterMove,
                                    templateEngine: a.ba.Na
                                }
                            }
                        }, init: function (b, c) {
                            return a.f.template.init(b, a.f.foreach.Qc(c))
                        }, update: function (b, c, d, e, f) {
                            return a.f.template.update(b, a.f.foreach.Qc(c), d, e, f)
                        }
                    };
                    a.m.Ra.foreach = !1;
                    a.h.ea.foreach = !0;
                    a.f.hasfocus = {
                        init: function (b, c, d) {
                            function e(e) {
                                b.__ko_hasfocusUpdating = !0;
                                var f = b.ownerDocument;
                                if ("activeElement" in f) {
                                    var g;
                                    try {
                                        g = f.activeElement
                                    } catch (k) {
                                        g = f.body
                                    }
                                    e = g === b
                                }
                                f = c();
                                a.m.$a(f,
                                    d, "hasfocus", e, !0);
                                b.__ko_hasfocusLastValue = e;
                                b.__ko_hasfocusUpdating = !1
                            }

                            var f = e.bind(null, !0), g = e.bind(null, !1);
                            a.a.H(b, "focus", f);
                            a.a.H(b, "focusin", f);
                            a.a.H(b, "blur", g);
                            a.a.H(b, "focusout", g);
                            b.__ko_hasfocusLastValue = !1
                        }, update: function (b, c) {
                            var d = !!a.a.c(c());
                            b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(), !d && b.__ko_hasfocusLastValue && b.ownerDocument.body.focus(), a.v.K(a.a.Fb, null, [b, d ? "focusin" : "focusout"]))
                        }
                    };
                    a.m.va.hasfocus = !0;
                    a.f.hasFocus = a.f.hasfocus;
                    a.m.va.hasFocus =
                        "hasfocus";
                    a.f.html = {
                        init: function () {
                            return {controlsDescendantBindings: !0}
                        }, update: function (b, c) {
                            a.a.dc(b, c())
                        }
                    };
                    (function () {
                        function b(b, d, e) {
                            a.f[b] = {
                                init: function (b, c, h, m, l) {
                                    var k, q, n = {}, r, p, A;
                                    if (d) {
                                        m = h.get("as");
                                        var u = h.get("noChildContext");
                                        A = !(m && u);
                                        n = {as: m, noChildContext: u, exportDependencies: A}
                                    }
                                    p = (r = "render" == h.get("completeOn")) || h.has(a.j.oa);
                                    a.o(function () {
                                        var h = a.a.c(c()), m = !e !== !h, u = !q, t;
                                        if (A || m !== k) {
                                            p && (l = a.j.Bb(b, l));
                                            if (m) {
                                                if (!d || A) n.dataDependency = a.U.o();
                                                t = d ? l.createChildContext("function" ==
                                                typeof h ? h : c, n) : a.U.pa() ? l.extend(null, n) : l
                                            }
                                            u && a.U.pa() && (q = a.a.Ca(a.h.childNodes(b), !0));
                                            m ? (u || a.h.ua(b, a.a.Ca(q)), a.Pa(t, b)) : (a.h.Ea(b), r || a.j.Ga(b, a.j.T));
                                            k = m
                                        }
                                    }, null, {l: b});
                                    return {controlsDescendantBindings: !0}
                                }
                            };
                            a.m.Ra[b] = !1;
                            a.h.ea[b] = !0
                        }

                        b("if");
                        b("ifnot", !1, !0);
                        b("with", !0)
                    })();
                    a.f.let = {
                        init: function (b, c, d, e, f) {
                            c = f.extend(c);
                            a.Pa(c, b);
                            return {controlsDescendantBindings: !0}
                        }
                    };
                    a.h.ea.let = !0;
                    var Q = {};
                    a.f.options = {
                        init: function (b) {
                            if ("select" !== a.a.P(b)) throw Error("options binding applies only to SELECT elements");
                            for (; 0 < b.length;) b.remove(0);
                            return {controlsDescendantBindings: !0}
                        }, update: function (b, c, d) {
                            function e() {
                                return a.a.fb(b.options, function (a) {
                                    return a.selected
                                })
                            }

                            function f(a, b, c) {
                                var d = typeof b;
                                return "function" == d ? b(a) : "string" == d ? a[b] : c
                            }

                            function g(c, e) {
                                if (y && k) a.u.ya(b, a.a.c(d.get("value")), !0); else if (r.length) {
                                    var f = 0 <= a.a.A(r, a.u.L(e[0]));
                                    a.a.Yc(e[0], f);
                                    y && !f && a.v.K(a.a.Fb, null, [b, "change"])
                                }
                            }

                            var h = b.multiple, m = 0 != b.length && h ? b.scrollTop : null, l = a.a.c(c()),
                                k = d.get("valueAllowUnset") && d.has("value"),
                                q = d.get("optionsIncludeDestroyed");
                            c = {};
                            var n, r = [];
                            k || (h ? r = a.a.Mb(e(), a.u.L) : 0 <= b.selectedIndex && r.push(a.u.L(b.options[b.selectedIndex])));
                            l && ("undefined" == typeof l.length && (l = [l]), n = a.a.fb(l, function (b) {
                                return q || b === p || null === b || !a.a.c(b._destroy)
                            }), d.has("optionsCaption") && (l = a.a.c(d.get("optionsCaption")), null !== l && l !== p && n.unshift(Q)));
                            var y = !1;
                            c.beforeRemove = function (a) {
                                b.removeChild(a)
                            };
                            l = g;
                            d.has("optionsAfterRender") && "function" == typeof d.get("optionsAfterRender") && (l = function (b, c) {
                                g(0, c);
                                a.v.K(d.get("optionsAfterRender"), null, [c[0], b !== Q ? b : p])
                            });
                            a.a.cc(b, n, function (c, e, g) {
                                g.length && (r = !k && g[0].selected ? [a.u.L(g[0])] : [], y = !0);
                                e = b.ownerDocument.createElement("option");
                                c === Q ? (a.a.Ab(e, d.get("optionsCaption")), a.u.ya(e, p)) : (g = f(c, d.get("optionsValue"), c), a.u.ya(e, a.a.c(g)), c = f(c, d.get("optionsText"), g), a.a.Ab(e, c));
                                return [e]
                            }, c, l);
                            a.v.K(function () {
                                if (k) a.u.ya(b, a.a.c(d.get("value")), !0); else {
                                    var c;
                                    h ? c = r.length && e().length < r.length : c = r.length && 0 <= b.selectedIndex ? a.u.L(b.options[b.selectedIndex]) !==
                                        r[0] : r.length || 0 <= b.selectedIndex;
                                    c && a.a.Fb(b, "change")
                                }
                            });
                            a.a.vd(b);
                            m && 20 < Math.abs(m - b.scrollTop) && (b.scrollTop = m)
                        }
                    };
                    a.f.options.Yb = a.a.g.Z();
                    a.f.selectedOptions = {
                        after: ["options", "foreach"], init: function (b, c, d) {
                            a.a.H(b, "change", function () {
                                var e = c(), f = [];
                                a.a.C(b.getElementsByTagName("option"), function (b) {
                                    b.selected && f.push(a.u.L(b))
                                });
                                a.m.$a(e, d, "selectedOptions", f)
                            })
                        }, update: function (b, c) {
                            if ("select" != a.a.P(b)) throw Error("values binding applies only to SELECT elements");
                            var d = a.a.c(c()), e = b.scrollTop;
                            d && "number" == typeof d.length && a.a.C(b.getElementsByTagName("option"), function (b) {
                                var c = 0 <= a.a.A(d, a.u.L(b));
                                b.selected != c && a.a.Yc(b, c)
                            });
                            b.scrollTop = e
                        }
                    };
                    a.m.va.selectedOptions = !0;
                    a.f.style = {
                        update: function (b, c) {
                            var d = a.a.c(c() || {});
                            a.a.O(d, function (c, d) {
                                d = a.a.c(d);
                                if (null === d || d === p || !1 === d) d = "";
                                if (v) v(b).css(c, d); else if (/^--/.test(c)) b.style.setProperty(c, d); else {
                                    c = c.replace(/-(\w)/g, function (a, b) {
                                        return b.toUpperCase()
                                    });
                                    var g = b.style[c];
                                    b.style[c] = d;
                                    d === g || b.style[c] != g || isNaN(d) || (b.style[c] =
                                        d + "px")
                                }
                            })
                        }
                    };
                    a.f.submit = {
                        init: function (b, c, d, e, f) {
                            if ("function" != typeof c()) throw Error("The value for a submit binding must be a function");
                            a.a.H(b, "submit", function (a) {
                                var d, e = c();
                                try {
                                    d = e.call(f.$data, b)
                                } finally {
                                    !0 !== d && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                                }
                            })
                        }
                    };
                    a.f.text = {
                        init: function () {
                            return {controlsDescendantBindings: !0}
                        }, update: function (b, c) {
                            a.a.Ab(b, c())
                        }
                    };
                    a.h.ea.text = !0;
                    (function () {
                        if (z && z.navigator) {
                            var b = function (a) {
                                    if (a) return parseFloat(a[1])
                                }, c = z.navigator.userAgent,
                                d, e, f, g, h;
                            (d = z.opera && z.opera.version && parseInt(z.opera.version())) || (h = b(c.match(/Edge\/([^ ]+)$/))) || b(c.match(/Chrome\/([^ ]+)/)) || (e = b(c.match(/Version\/([^ ]+) Safari/))) || (f = b(c.match(/Firefox\/([^ ]+)/))) || (g = a.a.W || b(c.match(/MSIE ([^ ]+)/))) || (g = b(c.match(/rv:([^ )]+)/)))
                        }
                        if (8 <= g && 10 > g) var m = a.a.g.Z(), l = a.a.g.Z(), k = function (b) {
                            var c = this.activeElement;
                            (c = c && a.a.g.get(c, l)) && c(b)
                        }, q = function (b, c) {
                            var d = b.ownerDocument;
                            a.a.g.get(d, m) || (a.a.g.set(d, m, !0), a.a.H(d, "selectionchange", k));
                            a.a.g.set(b,
                                l, c)
                        };
                        a.f.textInput = {
                            init: function (b, c, l) {
                                function k(c, d) {
                                    a.a.H(b, c, d)
                                }

                                function m() {
                                    var d = a.a.c(c());
                                    if (null === d || d === p) d = "";
                                    L !== p && d === L ? a.a.setTimeout(m, 4) : b.value !== d && (x = !0, b.value = d, x = !1, v = b.value)
                                }

                                function t() {
                                    w || (L = b.value, w = a.a.setTimeout(B, 4))
                                }

                                function B() {
                                    clearTimeout(w);
                                    L = w = p;
                                    var d = b.value;
                                    v !== d && (v = d, a.m.$a(c(), l, "textInput", d))
                                }

                                var v = b.value, w, L, z = 9 == a.a.W ? t : B, x = !1;
                                g && k("keypress", B);
                                11 > g && k("propertychange", function (a) {
                                    x || "value" !== a.propertyName || z(a)
                                });
                                8 == g && (k("keyup", B), k("keydown",
                                    B));
                                q && (q(b, z), k("dragend", t));
                                (!g || 9 <= g) && k("input", z);
                                5 > e && "textarea" === a.a.P(b) ? (k("keydown", t), k("paste", t), k("cut", t)) : 11 > d ? k("keydown", t) : 4 > f ? (k("DOMAutoComplete", B), k("dragdrop", B), k("drop", B)) : h && "number" === b.type && k("keydown", t);
                                k("change", B);
                                k("blur", B);
                                a.o(m, null, {l: b})
                            }
                        };
                        a.m.va.textInput = !0;
                        a.f.textinput = {
                            preprocess: function (a, b, c) {
                                c("textInput", a)
                            }
                        }
                    })();
                    a.f.uniqueName = {
                        init: function (b, c) {
                            if (c()) {
                                var d = "ko_unique_" + ++a.f.uniqueName.qd;
                                a.a.Xc(b, d)
                            }
                        }
                    };
                    a.f.uniqueName.qd = 0;
                    a.f.using = {
                        init: function (b,
                                        c, d, e, f) {
                            var g;
                            d.has("as") && (g = {as: d.get("as"), noChildContext: d.get("noChildContext")});
                            c = f.createChildContext(c, g);
                            a.Pa(c, b);
                            return {controlsDescendantBindings: !0}
                        }
                    };
                    a.h.ea.using = !0;
                    a.f.value = {
                        after: ["options", "foreach"], init: function (b, c, d) {
                            var e = a.a.P(b), f = "input" == e;
                            if (!f || "checkbox" != b.type && "radio" != b.type) {
                                var g = ["change"], h = d.get("valueUpdate"), m = !1, l = null;
                                h && ("string" == typeof h && (h = [h]), a.a.gb(g, h), g = a.a.vc(g));
                                var k = function () {
                                    l = null;
                                    m = !1;
                                    var e = c(), f = a.u.L(b);
                                    a.m.$a(e, d, "value", f)
                                };
                                !a.a.W ||
                                !f || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.A(g, "propertychange") || (a.a.H(b, "propertychange", function () {
                                    m = !0
                                }), a.a.H(b, "focus", function () {
                                    m = !1
                                }), a.a.H(b, "blur", function () {
                                    m && k()
                                }));
                                a.a.C(g, function (c) {
                                    var d = k;
                                    a.a.Td(c, "after") && (d = function () {
                                        l = a.u.L(b);
                                        a.a.setTimeout(k, 0)
                                    }, c = c.substring(5));
                                    a.a.H(b, c, d)
                                });
                                var q;
                                q = f && "file" == b.type ? function () {
                                    var d = a.a.c(c());
                                    null === d || d === p || "" === d ? b.value = "" : a.v.K(k)
                                } : function () {
                                    var f = a.a.c(c()), g = a.u.L(b);
                                    if (null !== l &&
                                        f === l) a.a.setTimeout(q, 0); else if (f !== g || g === p) "select" === e ? (g = d.get("valueAllowUnset"), a.u.ya(b, f, g), g || f === a.u.L(b) || a.v.K(k)) : a.u.ya(b, f)
                                };
                                a.o(q, null, {l: b})
                            } else a.eb(b, {checkedValue: c})
                        }, update: function () {
                        }
                    };
                    a.m.va.value = !0;
                    a.f.visible = {
                        update: function (b, c) {
                            var d = a.a.c(c()), e = "none" != b.style.display;
                            d && !e ? b.style.display = "" : !d && e && (b.style.display = "none")
                        }
                    };
                    a.f.hidden = {
                        update: function (b, c) {
                            a.f.visible.update(b, function () {
                                return !a.a.c(c())
                            })
                        }
                    };
                    (function (b) {
                        a.f[b] = {
                            init: function (c, d, e, f, g) {
                                return a.f.event.init.call(this,
                                    c, function () {
                                        var a = {};
                                        a[b] = d();
                                        return a
                                    }, e, f, g)
                            }
                        }
                    })("click");
                    a.ca = function () {
                    };
                    a.ca.prototype.renderTemplateSource = function () {
                        throw Error("Override renderTemplateSource");
                    };
                    a.ca.prototype.createJavaScriptEvaluatorBlock = function () {
                        throw Error("Override createJavaScriptEvaluatorBlock");
                    };
                    a.ca.prototype.makeTemplateSource = function (b, c) {
                        if ("string" == typeof b) {
                            c = c || w;
                            var d = c.getElementById(b);
                            if (!d) throw Error("Cannot find template with ID " + b);
                            return new a.B.D(d)
                        }
                        if (1 == b.nodeType || 8 == b.nodeType) return new a.B.ia(b);
                        throw Error("Unknown template type: " + b);
                    };
                    a.ca.prototype.renderTemplate = function (a, c, d, e) {
                        a = this.makeTemplateSource(a, e);
                        return this.renderTemplateSource(a, c, d, e)
                    };
                    a.ca.prototype.isTemplateRewritten = function (a, c) {
                        return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, c).data("isRewritten")
                    };
                    a.ca.prototype.rewriteTemplate = function (a, c, d) {
                        a = this.makeTemplateSource(a, d);
                        c = c(a.text());
                        a.text(c);
                        a.data("isRewritten", !0)
                    };
                    a.b("templateEngine", a.ca);
                    a.ic = function () {
                        function b(b, c, d, h) {
                            b = a.m.Zb(b);
                            for (var m = a.m.Ra, l = 0; l < b.length; l++) {
                                var k = b[l].key;
                                if (Object.prototype.hasOwnProperty.call(m, k)) {
                                    var q = m[k];
                                    if ("function" === typeof q) {
                                        if (k = q(b[l].value)) throw Error(k);
                                    } else if (!q) throw Error("This template engine does not support the '" + k + "' binding within its templates");
                                }
                            }
                            d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.m.ub(b, {valueAccessors: !0}) + " } })()},'" + d.toLowerCase() + "')";
                            return h.createJavaScriptEvaluatorBlock(d) + c
                        }

                        var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                            d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                        return {
                            wd: function (b, c, d) {
                                c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function (b) {
                                    return a.ic.Kd(b, c)
                                }, d)
                            }, Kd: function (a, f) {
                                return a.replace(c, function (a, c, d, e, k) {
                                    return b(k, c, d, f)
                                }).replace(d, function (a, c) {
                                    return b(c, "\x3c!-- ko --\x3e", "#comment", f)
                                })
                            }, ld: function (b, c) {
                                return a.aa.Wb(function (d, h) {
                                    var m = d.nextSibling;
                                    m && m.nodeName.toLowerCase() === c && a.eb(m, b, h)
                                })
                            }
                        }
                    }();
                    a.b("__tr_ambtns", a.ic.ld);
                    (function () {
                        a.B = {};
                        a.B.D = function (b) {
                            if (this.D = b) {
                                var c =
                                    a.a.P(b);
                                this.Db = "script" === c ? 1 : "textarea" === c ? 2 : "template" == c && b.content && 11 === b.content.nodeType ? 3 : 4
                            }
                        };
                        a.B.D.prototype.text = function () {
                            var b = 1 === this.Db ? "text" : 2 === this.Db ? "value" : "innerHTML";
                            if (0 == arguments.length) return this.D[b];
                            var c = arguments[0];
                            "innerHTML" === b ? a.a.dc(this.D, c) : this.D[b] = c
                        };
                        var b = a.a.g.Z() + "_";
                        a.B.D.prototype.data = function (c) {
                            if (1 === arguments.length) return a.a.g.get(this.D, b + c);
                            a.a.g.set(this.D, b + c, arguments[1])
                        };
                        var c = a.a.g.Z();
                        a.B.D.prototype.nodes = function () {
                            var b = this.D;
                            if (0 == arguments.length) {
                                var e = a.a.g.get(b, c) || {},
                                    f = e.jb || (3 === this.Db ? b.content : 4 === this.Db ? b : p);
                                if (!f || e.hd) if (e = this.text()) f = a.a.Ld(e, b.ownerDocument), this.text(""), a.a.g.set(b, c, {
                                    jb: f,
                                    hd: !0
                                });
                                return f
                            }
                            a.a.g.set(b, c, {jb: arguments[0]})
                        };
                        a.B.ia = function (a) {
                            this.D = a
                        };
                        a.B.ia.prototype = new a.B.D;
                        a.B.ia.prototype.constructor = a.B.ia;
                        a.B.ia.prototype.text = function () {
                            if (0 == arguments.length) {
                                var b = a.a.g.get(this.D, c) || {};
                                b.jc === p && b.jb && (b.jc = b.jb.innerHTML);
                                return b.jc
                            }
                            a.a.g.set(this.D, c, {jc: arguments[0]})
                        };
                        a.b("templateSources", a.B);
                        a.b("templateSources.domElement", a.B.D);
                        a.b("templateSources.anonymousTemplate", a.B.ia)
                    })();
                    (function () {
                        function b(b, c, d) {
                            var e;
                            for (c = a.h.nextSibling(c); b && (e = b) !== c;) b = a.h.nextSibling(e), d(e, b)
                        }

                        function c(c, d) {
                            if (c.length) {
                                var e = c[0], f = c[c.length - 1], g = e.parentNode, h = a.ga.instance,
                                    m = h.preprocessNode;
                                if (m) {
                                    b(e, f, function (a, b) {
                                        var c = a.previousSibling, d = m.call(h, a);
                                        d && (a === e && (e = d[0] || b), a === f && (f = d[d.length - 1] || c))
                                    });
                                    c.length = 0;
                                    if (!e) return;
                                    e === f ? c.push(e) : (c.push(e, f), a.a.Ua(c,
                                        g))
                                }
                                b(e, f, function (b) {
                                    1 !== b.nodeType && 8 !== b.nodeType || a.uc(d, b)
                                });
                                b(e, f, function (b) {
                                    1 !== b.nodeType && 8 !== b.nodeType || a.aa.bd(b, [d])
                                });
                                a.a.Ua(c, g)
                            }
                        }

                        function d(a) {
                            return a.nodeType ? a : 0 < a.length ? a[0] : null
                        }

                        function e(b, e, f, h, m) {
                            m = m || {};
                            var p = (b && d(b) || f || {}).ownerDocument, A = m.templateEngine || g;
                            a.ic.wd(f, A, p);
                            f = A.renderTemplate(f, h, m, p);
                            if ("number" != typeof f.length || 0 < f.length && "number" != typeof f[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
                            p = !1;
                            switch (e) {
                                case "replaceChildren":
                                    a.h.ua(b,
                                        f);
                                    p = !0;
                                    break;
                                case "replaceNode":
                                    a.a.Wc(b, f);
                                    p = !0;
                                    break;
                                case "ignoreTargetNode":
                                    break;
                                default:
                                    throw Error("Unknown renderMode: " + e);
                            }
                            p && (c(f, h), m.afterRender && a.v.K(m.afterRender, null, [f, h[m.as || "$data"]]), "replaceChildren" == e && a.j.Ga(b, a.j.T));
                            return f
                        }

                        function f(b, c, d) {
                            return a.N(b) ? b() : "function" === typeof b ? b(c, d) : b
                        }

                        var g;
                        a.ec = function (b) {
                            if (b != p && !(b instanceof a.ca)) throw Error("templateEngine must inherit from ko.templateEngine");
                            g = b
                        };
                        a.bc = function (b, c, h, m, r) {
                            h = h || {};
                            if ((h.templateEngine || g) ==
                                p) throw Error("Set a template engine before calling renderTemplate");
                            r = r || "replaceChildren";
                            if (m) {
                                var y = d(m);
                                return a.$(function () {
                                    var g = c && c instanceof a.fa ? c : new a.fa(c, null, null, null, {exportDependencies: !0}),
                                        p = f(b, g.$data, g), g = e(m, r, p, g, h);
                                    "replaceNode" == r && (m = g, y = d(m))
                                }, null, {
                                    Sa: function () {
                                        return !y || !a.a.Rb(y)
                                    }, l: y && "replaceNode" == r ? y.parentNode : y
                                })
                            }
                            return a.aa.Wb(function (d) {
                                a.bc(b, c, h, d, "replaceNode")
                            })
                        };
                        a.Pd = function (b, d, g, h, m) {
                            function y(b, c) {
                                a.v.K(a.a.cc, null, [h, b, u, g, t, c]);
                                a.j.Ga(h, a.j.T)
                            }

                            function t(a, b) {
                                c(b, v);
                                g.afterRender && g.afterRender(b, a);
                                v = null
                            }

                            function u(a, c) {
                                v = m.createChildContext(a, {
                                    as: B,
                                    noChildContext: g.noChildContext,
                                    extend: function (a) {
                                        a.$index = c;
                                        B && (a[B + "Index"] = c)
                                    }
                                });
                                var d = f(b, a, v);
                                return e(h, "ignoreTargetNode", d, v, g)
                            }

                            var v, B = g.as,
                                w = !1 === g.includeDestroyed || a.options.foreachHidesDestroyed && !g.includeDestroyed;
                            if (w || g.beforeRemove || !a.Oc(d)) return a.$(function () {
                                var b = a.a.c(d) || [];
                                "undefined" == typeof b.length && (b = [b]);
                                w && (b = a.a.fb(b, function (b) {
                                    return b === p || null === b ||
                                        !a.a.c(b._destroy)
                                }));
                                y(b)
                            }, null, {l: h});
                            y(d.w());
                            var z = d.subscribe(function (a) {
                                y(d(), a)
                            }, null, "arrayChange");
                            z.l(h);
                            return z
                        };
                        var h = a.a.g.Z(), m = a.a.g.Z();
                        a.f.template = {
                            init: function (b, c) {
                                var d = a.a.c(c());
                                if ("string" == typeof d || d.name) a.h.Ea(b); else if ("nodes" in d) {
                                    d = d.nodes || [];
                                    if (a.N(d)) throw Error('The "nodes" option must be a plain, non-observable array.');
                                    var e = d[0] && d[0].parentNode;
                                    e && a.a.g.get(e, m) || (e = a.a.Xb(d), a.a.g.set(e, m, !0));
                                    (new a.B.ia(b)).nodes(e)
                                } else if (d = a.h.childNodes(b), 0 < d.length) e =
                                    a.a.Xb(d), (new a.B.ia(b)).nodes(e); else throw Error("Anonymous template defined, but no template content was provided");
                                return {controlsDescendantBindings: !0}
                            }, update: function (b, c, d, e, f) {
                                var g = c();
                                c = a.a.c(g);
                                d = !0;
                                e = null;
                                "string" == typeof c ? c = {} : (g = c.name, "if" in c && (d = a.a.c(c["if"])), d && "ifnot" in c && (d = !a.a.c(c.ifnot)));
                                "foreach" in c ? e = a.Pd(g || b, d && c.foreach || [], c, b, f) : d ? (d = f, "data" in c && (d = f.createChildContext(c.data, {
                                    as: c.as,
                                    noChildContext: c.noChildContext,
                                    exportDependencies: !0
                                })), e = a.bc(g || b, d, c,
                                    b)) : a.h.Ea(b);
                                f = e;
                                (c = a.a.g.get(b, h)) && "function" == typeof c.s && c.s();
                                a.a.g.set(b, h, !f || f.ja && !f.ja() ? p : f)
                            }
                        };
                        a.m.Ra.template = function (b) {
                            b = a.m.Zb(b);
                            return 1 == b.length && b[0].unknown || a.m.Hd(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                        };
                        a.h.ea.template = !0
                    })();
                    a.b("setTemplateEngine", a.ec);
                    a.b("renderTemplate", a.bc);
                    a.a.Jc = function (a, c, d) {
                        if (a.length && c.length) {
                            var e, f, g, h, m;
                            for (e = f = 0; (!d || e < d) && (h = a[f]); ++f) {
                                for (g = 0; m = c[g]; ++g) if (h.value === m.value) {
                                    h.moved =
                                        m.index;
                                    m.moved = h.index;
                                    c.splice(g, 1);
                                    e = g = 0;
                                    break
                                }
                                e += g
                            }
                        }
                    };
                    a.a.Ob = function () {
                        function b(b, d, e, f, g) {
                            var h = Math.min, m = Math.max, l = [], k, p = b.length, n, r = d.length, t = r - p || 1,
                                A = p + r + 1, u, v, w;
                            for (k = 0; k <= p; k++) for (v = u, l.push(u = []), w = h(r, k + t), n = m(0, k - 1); n <= w; n++) u[n] = n ? k ? b[k - 1] === d[n - 1] ? v[n - 1] : h(v[n] || A, u[n - 1] || A) + 1 : n + 1 : k + 1;
                            h = [];
                            m = [];
                            t = [];
                            k = p;
                            for (n = r; k || n;) r = l[k][n] - 1, n && r === l[k][n - 1] ? m.push(h[h.length] = {
                                status: e,
                                value: d[--n],
                                index: n
                            }) : k && r === l[k - 1][n] ? t.push(h[h.length] = {
                                status: f,
                                value: b[--k],
                                index: k
                            }) : (--n, --k,
                            g.sparse || h.push({status: "retained", value: d[n]}));
                            a.a.Jc(t, m, !g.dontLimitMoves && 10 * p);
                            return h.reverse()
                        }

                        return function (a, d, e) {
                            e = "boolean" === typeof e ? {dontLimitMoves: e} : e || {};
                            a = a || [];
                            d = d || [];
                            return a.length < d.length ? b(a, d, "added", "deleted", e) : b(d, a, "deleted", "added", e)
                        }
                    }();
                    a.b("utils.compareArrays", a.a.Ob);
                    (function () {
                        function b(b, c, d, h, m) {
                            var l = [], k = a.$(function () {
                                var k = c(d, m, a.a.Ua(l, b)) || [];
                                0 < l.length && (a.a.Wc(l, k), h && a.v.K(h, null, [d, k, m]));
                                l.length = 0;
                                a.a.gb(l, k)
                            }, null, {
                                l: b, Sa: function () {
                                    return !a.a.jd(l)
                                }
                            });
                            return {Y: l, $: k.ja() ? k : p}
                        }

                        var c = a.a.g.Z(), d = a.a.g.Z();
                        a.a.cc = function (e, f, g, h, m, l) {
                            function k(b) {
                                x = {Aa: b, nb: a.sa(w++)};
                                v.push(x);
                                t || F.push(x)
                            }

                            function q(b) {
                                x = r[b];
                                w !== x.nb.w() && D.push(x);
                                x.nb(w++);
                                a.a.Ua(x.Y, e);
                                v.push(x)
                            }

                            function n(b, c) {
                                if (b) for (var d = 0, e = c.length; d < e; d++) a.a.C(c[d].Y, function (a) {
                                    b(a, d, c[d].Aa)
                                })
                            }

                            f = f || [];
                            "undefined" == typeof f.length && (f = [f]);
                            h = h || {};
                            var r = a.a.g.get(e, c), t = !r, v = [], u = 0, w = 0, B = [], z = [], C = [], D = [],
                                F = [], x, I = 0;
                            if (t) a.a.C(f, k); else {
                                if (!l || r && r._countWaitingForRemove) {
                                    var E =
                                        a.a.Mb(r, function (a) {
                                            return a.Aa
                                        });
                                    l = a.a.Ob(E, f, {dontLimitMoves: h.dontLimitMoves, sparse: !0})
                                }
                                for (var E = 0, G, H, K; G = l[E]; E++) switch (H = G.moved, K = G.index, G.status) {
                                    case "deleted":
                                        for (; u < K;) q(u++);
                                        H === p && (x = r[u], x.$ && (x.$.s(), x.$ = p), a.a.Ua(x.Y, e).length && (h.beforeRemove && (v.push(x), I++, x.Aa === d ? x = null : C.push(x)), x && B.push.apply(B, x.Y)));
                                        u++;
                                        break;
                                    case "added":
                                        for (; w < K;) q(u++);
                                        H !== p ? (z.push(v.length), q(H)) : k(G.value)
                                }
                                for (; w < f.length;) q(u++);
                                v._countWaitingForRemove = I
                            }
                            a.a.g.set(e, c, v);
                            n(h.beforeMove, D);
                            a.a.C(B,
                                h.beforeRemove ? a.na : a.removeNode);
                            var M, O, P;
                            try {
                                P = e.ownerDocument.activeElement
                            } catch (N) {
                            }
                            if (z.length) for (; (E = z.shift()) != p;) {
                                x = v[E];
                                for (M = p; E;) if ((O = v[--E].Y) && O.length) {
                                    M = O[O.length - 1];
                                    break
                                }
                                for (f = 0; u = x.Y[f]; M = u, f++) a.h.Vb(e, u, M)
                            }
                            E = 0;
                            for (z = a.h.firstChild(e); x = v[E]; E++) {
                                x.Y || a.a.extend(x, b(e, g, x.Aa, m, x.nb));
                                for (f = 0; u = x.Y[f]; z = u.nextSibling, M = u, f++) u !== z && a.h.Vb(e, u, M);
                                !x.Dd && m && (m(x.Aa, x.Y, x.nb), x.Dd = !0, M = x.Y[x.Y.length - 1])
                            }
                            P && e.ownerDocument.activeElement != P && P.focus();
                            n(h.beforeRemove, C);
                            for (E =
                                     0; E < C.length; ++E) C[E].Aa = d;
                            n(h.afterMove, D);
                            n(h.afterAdd, F)
                        }
                    })();
                    a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.cc);
                    a.ba = function () {
                        this.allowTemplateRewriting = !1
                    };
                    a.ba.prototype = new a.ca;
                    a.ba.prototype.constructor = a.ba;
                    a.ba.prototype.renderTemplateSource = function (b, c, d, e) {
                        if (c = (9 > a.a.W ? 0 : b.nodes) ? b.nodes() : null) return a.a.la(c.cloneNode(!0).childNodes);
                        b = b.text();
                        return a.a.ta(b, e)
                    };
                    a.ba.Na = new a.ba;
                    a.ec(a.ba.Na);
                    a.b("nativeTemplateEngine", a.ba);
                    (function () {
                        a.Za = function () {
                            var a = this.Gd = function () {
                                if (!v ||
                                    !v.tmpl) return 0;
                                try {
                                    if (0 <= v.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2
                                } catch (a) {
                                }
                                return 1
                            }();
                            this.renderTemplateSource = function (b, e, f, g) {
                                g = g || w;
                                f = f || {};
                                if (2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                                var h = b.data("precompiled");
                                h || (h = b.text() || "", h = v.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b.data("precompiled", h));
                                b = [e.$data];
                                e = v.extend({koBindingContext: e}, f.templateOptions);
                                e = v.tmpl(h, b, e);
                                e.appendTo(g.createElement("div"));
                                v.fragments = {};
                                return e
                            };
                            this.createJavaScriptEvaluatorBlock = function (a) {
                                return "{{ko_code ((function() { return " + a + " })()) }}"
                            };
                            this.addTemplate = function (a, b) {
                                w.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>")
                            };
                            0 < a && (v.tmpl.tag.ko_code = {open: "__.push($1 || '');"}, v.tmpl.tag.ko_with = {
                                open: "with($1) {",
                                close: "} "
                            })
                        };
                        a.Za.prototype = new a.ca;
                        a.Za.prototype.constructor = a.Za;
                        var b = new a.Za;
                        0 < b.Gd && a.ec(b);
                        a.b("jqueryTmplTemplateEngine", a.Za)
                    })()
                })
            })();
        })();

    }, {}]
}, {}, [2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtaW5pbWFsL3NyYy9hcHAvU3Vic2NyaWJlRm9ybS9TdWJzY3JpYmVGb3JtLnRzIiwibWluaW1hbC9zcmMvaW5kZXgudHMiLCJub2RlX21vZHVsZXMva25vY2tvdXQvYnVpbGQvb3V0cHV0L2tub2Nrb3V0LWxhdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsNkJBQStCO0FBRS9CO0lBTUk7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLDRCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFDSSxLQUFLLENBQUMsNkNBRU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsNEJBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLHlCQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxlQUN6QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLHNDQUFhOzs7O0FDRjFCLG1FQUFnRTtBQUNoRSw2QkFBK0I7QUFFL0IsSUFBSSxXQUFXLEdBQUc7SUFDZCxlQUFlLEVBQUUsNkJBQWE7Q0FDakMsQ0FBQztBQUVGLFNBQVMsS0FBSyxDQUFDLEVBQWM7SUFDekIsYUFBYTtJQUNiLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1FBQy9GLEVBQUUsRUFBRSxDQUFDO0tBQ1I7U0FBTTtRQUNILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNyRDtBQUNMLENBQUM7QUFFRCxLQUFLLENBQUM7SUFDRixVQUFVLENBQUM7UUFDUCxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM5RCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUcsRUFBRTtZQUNuRCxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsWUFBWTtZQUNaLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQzFDLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxJQUFJLE9BQU8sR0FBRztnQkFDVixTQUFTLEVBQUUsTUFBTTtnQkFDakIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxTQUFTO2dCQUMzQixJQUFJLEVBQUUsUUFBUTthQUNqQixDQUFDO1lBQ0YsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRTFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLGNBQWMsR0FBRyxRQUFRLEdBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEU7UUFDRCxhQUFhO1FBQ2IsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztBQUNaLENBQUMsQ0FBQyxDQUFDOztBQ3BDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN1YnNjcmliZUZvcm0ge1xyXG4gICAgcHVibGljIGZpcnN0TmFtZToga28uT2JzZXJ2YWJsZTtcclxuICAgIHB1YmxpYyBsYXN0TmFtZToga28uT2JzZXJ2YWJsZTtcclxuICAgIHB1YmxpYyBlbWFpbDoga28uT2JzZXJ2YWJsZTtcclxuICAgIHB1YmxpYyBlbmFibGVkOiBrby5PYnNlcnZhYmxlO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGtvLm9ic2VydmFibGUoJ3Rlc3RMYWJlbCcpO1xyXG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBrby5vYnNlcnZhYmxlKCd0ZXN0TGFiZWwnKTtcclxuICAgICAgICB0aGlzLmVtYWlsID0ga28ub2JzZXJ2YWJsZSgnJyk7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJsdXIoKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkKHRoaXMuZW1haWwucGVlaygpICE9PSAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1Ym1pdCgpIHtcclxuICAgICAgICBhbGVydChgXHJcbiAgICAgICAgc2VuZGluZzogXHJcbiAgICAgICAgZmlyc3ROYW1lOiAke3RoaXMuZmlyc3ROYW1lLnBlZWsoKX1cclxuICAgICAgICBsYXN0TmFtZTogJHt0aGlzLmxhc3ROYW1lLnBlZWsoKX1cclxuICAgICAgICBlbWFpbDogJHt0aGlzLmVtYWlsLnBlZWsoKX1cclxuICAgICAgICBgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1N1YnNjcmliZUZvcm19IGZyb20gJy4vYXBwL1N1YnNjcmliZUZvcm0vU3Vic2NyaWJlRm9ybSc7XHJcbmltcG9ydCAqIGFzIGtvIGZyb20gJ2tub2Nrb3V0JztcclxuXHJcbmxldCBjb250cm9sbGVycyA9IHtcclxuICAgICdTdWJzY3JpYmVGb3JtJzogU3Vic2NyaWJlRm9ybVxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVhZHkoZm46ICgpID0+IHZvaWQpIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcclxuICAgICAgICBmbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5yZWFkeSgoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY29udHJvbGxlcl0nKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHMubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2luZGV4XTtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGxldCBjdHJsTmFtZSA9IGVsZW1lbnQuZGF0YXNldC5jb250cm9sbGVyO1xyXG4gICAgICAgICAgICBsZXQgY29udHJsID0gY29udHJvbGxlcnNbY3RybE5hbWVdO1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHZpZXdNb2RlbDogY29udHJsLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGVsZW1lbnQuaW5uZXJIVE1MLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogY3RybE5hbWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAga28uY29tcG9uZW50cy5yZWdpc3RlcihjdHJsTmFtZSwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1iaW5kJywgJ2NvbXBvbmVudDogXCInICsgY3RybE5hbWUrJ1wiJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBrby5hcHBseUJpbmRpbmdzKCk7XHJcbiAgICB9LDUwMDApO1xyXG59KTtcclxuIiwiLyohXG4gKiBLbm9ja291dCBKYXZhU2NyaXB0IGxpYnJhcnkgdjMuNS4wXG4gKiAoYykgVGhlIEtub2Nrb3V0LmpzIHRlYW0gLSBodHRwOi8va25vY2tvdXRqcy5jb20vXG4gKiBMaWNlbnNlOiBNSVQgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuICovXG5cbihmdW5jdGlvbigpIHsoZnVuY3Rpb24ocCl7dmFyIHo9dGhpc3x8KDAsZXZhbCkoXCJ0aGlzXCIpLHc9ei5kb2N1bWVudCxSPXoubmF2aWdhdG9yLHY9ei5qUXVlcnksSD16LkpTT047dnx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBqUXVlcnl8fCh2PWpRdWVyeSk7KGZ1bmN0aW9uKHApe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImV4cG9ydHNcIixcInJlcXVpcmVcIl0scCk6XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZT9wKG1vZHVsZS5leHBvcnRzfHxleHBvcnRzKTpwKHoua289e30pfSkoZnVuY3Rpb24oUyxUKXtmdW5jdGlvbiBLKGEsYyl7cmV0dXJuIG51bGw9PT1hfHx0eXBlb2YgYSBpbiBXP2E9PT1jOiExfWZ1bmN0aW9uIFgoYixjKXt2YXIgZDtyZXR1cm4gZnVuY3Rpb24oKXtkfHwoZD1hLmEuc2V0VGltZW91dChmdW5jdGlvbigpe2Q9cDtiKCl9LGMpKX19ZnVuY3Rpb24gWShiLGMpe3ZhciBkO3JldHVybiBmdW5jdGlvbigpe2NsZWFyVGltZW91dChkKTtcbmQ9YS5hLnNldFRpbWVvdXQoYixjKX19ZnVuY3Rpb24gWihhLGMpe2MmJlwiY2hhbmdlXCIhPT1jP1wiYmVmb3JlQ2hhbmdlXCI9PT1jP3RoaXMub2MoYSk6dGhpcy5iYihhLGMpOnRoaXMucGMoYSl9ZnVuY3Rpb24gYWEoYSxjKXtudWxsIT09YyYmYy5zJiZjLnMoKX1mdW5jdGlvbiBiYShhLGMpe3ZhciBkPXRoaXMucGQsZT1kW3RdO2UucWF8fCh0aGlzLlBiJiZ0aGlzLmtiW2NdPyhkLnRjKGMsYSx0aGlzLmtiW2NdKSx0aGlzLmtiW2NdPW51bGwsLS10aGlzLlBiKTplLkZbY118fGQudGMoYyxhLGUuRz97ZGE6YX06ZC5aYyhhKSksYS5LYSYmYS5mZCgpKX12YXIgYT1cInVuZGVmaW5lZFwiIT09dHlwZW9mIFM/Uzp7fTthLmI9ZnVuY3Rpb24oYixjKXtmb3IodmFyIGQ9Yi5zcGxpdChcIi5cIiksZT1hLGY9MDtmPGQubGVuZ3RoLTE7ZisrKWU9ZVtkW2ZdXTtlW2RbZC5sZW5ndGgtMV1dPWN9O2EuSj1mdW5jdGlvbihhLGMsZCl7YVtjXT1kfTthLnZlcnNpb249XCIzLjUuMFwiO2EuYihcInZlcnNpb25cIixcbmEudmVyc2lvbik7YS5vcHRpb25zPXtkZWZlclVwZGF0ZXM6ITEsdXNlT25seU5hdGl2ZUV2ZW50czohMSxmb3JlYWNoSGlkZXNEZXN0cm95ZWQ6ITF9O2EuYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSxiKXtmb3IodmFyIGMgaW4gYSlmLmNhbGwoYSxjKSYmYihjLGFbY10pfWZ1bmN0aW9uIGMoYSxiKXtpZihiKWZvcih2YXIgYyBpbiBiKWYuY2FsbChiLGMpJiYoYVtjXT1iW2NdKTtyZXR1cm4gYX1mdW5jdGlvbiBkKGEsYil7YS5fX3Byb3RvX189YjtyZXR1cm4gYX1mdW5jdGlvbiBlKGIsYyxkLGUpe3ZhciBrPWJbY10ubWF0Y2gobil8fFtdO2EuYS5DKGQubWF0Y2gobiksZnVuY3Rpb24oYil7YS5hLk9hKGssYixlKX0pO2JbY109ay5qb2luKFwiIFwiKX12YXIgZj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LGc9e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5LGg9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCxtPXt9LGw9e307bVtSJiYvRmlyZWZveFxcLzIvaS50ZXN0KFIudXNlckFnZW50KT9cblwiS2V5Ym9hcmRFdmVudFwiOlwiVUlFdmVudHNcIl09W1wia2V5dXBcIixcImtleWRvd25cIixcImtleXByZXNzXCJdO20uTW91c2VFdmVudHM9XCJjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiLnNwbGl0KFwiIFwiKTtiKG0sZnVuY3Rpb24oYSxiKXtpZihiLmxlbmd0aClmb3IodmFyIGM9MCxkPWIubGVuZ3RoO2M8ZDtjKyspbFtiW2NdXT1hfSk7dmFyIGs9e3Byb3BlcnR5Y2hhbmdlOiEwfSxxPXcmJmZ1bmN0aW9uKCl7Zm9yKHZhciBhPTMsYj13LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYz1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaVwiKTtiLmlubmVySFRNTD1cIlxceDNjIS0tW2lmIGd0IElFIFwiKyArK2ErXCJdPjxpPjwvaT48IVtlbmRpZl0tLVxceDNlXCIsY1swXTspO3JldHVybiA0PGE/YTpwfSgpLG49L1xcUysvZyxyO3JldHVybntJYzpbXCJhdXRoZW50aWNpdHlfdG9rZW5cIiwvXl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuKF8uKik/JC9dLFxuQzpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKWIuY2FsbChjLGFbZF0sZCxhKX0sQTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZj9mdW5jdGlvbihhLGIpe3JldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGEsYil9OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtjPGQ7YysrKWlmKGFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSxMYjpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKWlmKGIuY2FsbChjLGFbZF0sZCxhKSlyZXR1cm4gYVtkXTtyZXR1cm4gcH0saGI6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuQShiLGMpOzA8ZD9iLnNwbGljZShkLDEpOjA9PT1kJiZiLnNoaWZ0KCl9LHZjOmZ1bmN0aW9uKGIpe3ZhciBjPVtdO2ImJmEuYS5DKGIsZnVuY3Rpb24oYil7MD5hLmEuQShjLGIpJiZjLnB1c2goYil9KTtyZXR1cm4gY30sTWI6ZnVuY3Rpb24oYSxcbmIsYyl7dmFyIGQ9W107aWYoYSlmb3IodmFyIGU9MCxrPWEubGVuZ3RoO2U8aztlKyspZC5wdXNoKGIuY2FsbChjLGFbZV0sZSkpO3JldHVybiBkfSxmYjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9W107aWYoYSlmb3IodmFyIGU9MCxrPWEubGVuZ3RoO2U8aztlKyspYi5jYWxsKGMsYVtlXSxlKSYmZC5wdXNoKGFbZV0pO3JldHVybiBkfSxnYjpmdW5jdGlvbihhLGIpe2lmKGIgaW5zdGFuY2VvZiBBcnJheSlhLnB1c2guYXBwbHkoYSxiKTtlbHNlIGZvcih2YXIgYz0wLGQ9Yi5sZW5ndGg7YzxkO2MrKylhLnB1c2goYltjXSk7cmV0dXJuIGF9LE9hOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmEuQShhLmEuJGIoYiksYyk7MD5lP2QmJmIucHVzaChjKTpkfHxiLnNwbGljZShlLDEpfSxCYTpnLGV4dGVuZDpjLHNldFByb3RvdHlwZU9mOmQsemI6Zz9kOmMsTzpiLEhhOmZ1bmN0aW9uKGEsYixjKXtpZighYSlyZXR1cm4gYTt2YXIgZD17fSxlO2ZvcihlIGluIGEpZi5jYWxsKGEsZSkmJihkW2VdPVxuYi5jYWxsKGMsYVtlXSxlLGEpKTtyZXR1cm4gZH0sU2I6ZnVuY3Rpb24oYil7Zm9yKDtiLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlTm9kZShiLmZpcnN0Q2hpbGQpfSxYYjpmdW5jdGlvbihiKXtiPWEuYS5sYShiKTtmb3IodmFyIGM9KGJbMF0mJmJbMF0ub3duZXJEb2N1bWVudHx8dykuY3JlYXRlRWxlbWVudChcImRpdlwiKSxkPTAsZT1iLmxlbmd0aDtkPGU7ZCsrKWMuYXBwZW5kQ2hpbGQoYS5uYShiW2RdKSk7cmV0dXJuIGN9LENhOmZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aCxrPVtdO2Q8ZTtkKyspe3ZhciBmPWJbZF0uY2xvbmVOb2RlKCEwKTtrLnB1c2goYz9hLm5hKGYpOmYpfXJldHVybiBrfSx1YTpmdW5jdGlvbihiLGMpe2EuYS5TYihiKTtpZihjKWZvcih2YXIgZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKyliLmFwcGVuZENoaWxkKGNbZF0pfSxXYzpmdW5jdGlvbihiLGMpe3ZhciBkPWIubm9kZVR5cGU/W2JdOmI7aWYoMDxkLmxlbmd0aCl7Zm9yKHZhciBlPWRbMF0sXG5rPWUucGFyZW50Tm9kZSxmPTAsbD1jLmxlbmd0aDtmPGw7ZisrKWsuaW5zZXJ0QmVmb3JlKGNbZl0sZSk7Zj0wO2ZvcihsPWQubGVuZ3RoO2Y8bDtmKyspYS5yZW1vdmVOb2RlKGRbZl0pfX0sVWE6ZnVuY3Rpb24oYSxiKXtpZihhLmxlbmd0aCl7Zm9yKGI9OD09PWIubm9kZVR5cGUmJmIucGFyZW50Tm9kZXx8YjthLmxlbmd0aCYmYVswXS5wYXJlbnROb2RlIT09YjspYS5zcGxpY2UoMCwxKTtmb3IoOzE8YS5sZW5ndGgmJmFbYS5sZW5ndGgtMV0ucGFyZW50Tm9kZSE9PWI7KWEubGVuZ3RoLS07aWYoMTxhLmxlbmd0aCl7dmFyIGM9YVswXSxkPWFbYS5sZW5ndGgtMV07Zm9yKGEubGVuZ3RoPTA7YyE9PWQ7KWEucHVzaChjKSxjPWMubmV4dFNpYmxpbmc7YS5wdXNoKGQpfX1yZXR1cm4gYX0sWWM6ZnVuY3Rpb24oYSxiKXs3PnE/YS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLGIpOmEuc2VsZWN0ZWQ9Yn0sQ2I6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hfHxhPT09cD9cIlwiOmEudHJpbT9cbmEudHJpbSgpOmEudG9TdHJpbmcoKS5yZXBsYWNlKC9eW1xcc1xceGEwXSt8W1xcc1xceGEwXSskL2csXCJcIil9LFRkOmZ1bmN0aW9uKGEsYil7YT1hfHxcIlwiO3JldHVybiBiLmxlbmd0aD5hLmxlbmd0aD8hMTphLnN1YnN0cmluZygwLGIubGVuZ3RoKT09PWJ9LHVkOmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuITA7aWYoMTE9PT1hLm5vZGVUeXBlKXJldHVybiExO2lmKGIuY29udGFpbnMpcmV0dXJuIGIuY29udGFpbnMoMSE9PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmEpO2lmKGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24pcmV0dXJuIDE2PT0oYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhKSYxNik7Zm9yKDthJiZhIT1iOylhPWEucGFyZW50Tm9kZTtyZXR1cm4hIWF9LFJiOmZ1bmN0aW9uKGIpe3JldHVybiBhLmEudWQoYixiLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KX0samQ6ZnVuY3Rpb24oYil7cmV0dXJuISFhLmEuTGIoYixhLmEuUmIpfSxQOmZ1bmN0aW9uKGEpe3JldHVybiBhJiZcbmEudGFnTmFtZSYmYS50YWdOYW1lLnRvTG93ZXJDYXNlKCl9LHpjOmZ1bmN0aW9uKGIpe3JldHVybiBhLm9uRXJyb3I/ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIGIuYXBwbHkodGhpcyxhcmd1bWVudHMpfWNhdGNoKGMpe3Rocm93IGEub25FcnJvciYmYS5vbkVycm9yKGMpLGM7fX06Yn0sc2V0VGltZW91dDpmdW5jdGlvbihiLGMpe3JldHVybiBzZXRUaW1lb3V0KGEuYS56YyhiKSxjKX0sRmM6ZnVuY3Rpb24oYil7c2V0VGltZW91dChmdW5jdGlvbigpe2Eub25FcnJvciYmYS5vbkVycm9yKGIpO3Rocm93IGI7fSwwKX0sSDpmdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5hLnpjKGQpO2Q9a1tjXTtpZihhLm9wdGlvbnMudXNlT25seU5hdGl2ZUV2ZW50c3x8ZHx8IXYpaWYoZHx8XCJmdW5jdGlvblwiIT10eXBlb2YgYi5hZGRFdmVudExpc3RlbmVyKWlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmF0dGFjaEV2ZW50KXt2YXIgZj1mdW5jdGlvbihhKXtlLmNhbGwoYixhKX0sbD1cIm9uXCIrYztiLmF0dGFjaEV2ZW50KGwsXG5mKTthLmEuSS56YShiLGZ1bmN0aW9uKCl7Yi5kZXRhY2hFdmVudChsLGYpfSl9ZWxzZSB0aHJvdyBFcnJvcihcIkJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGFkZEV2ZW50TGlzdGVuZXIgb3IgYXR0YWNoRXZlbnRcIik7ZWxzZSBiLmFkZEV2ZW50TGlzdGVuZXIoYyxlLCExKTtlbHNlIHJ8fChyPVwiZnVuY3Rpb25cIj09dHlwZW9mIHYoYikub24/XCJvblwiOlwiYmluZFwiKSx2KGIpW3JdKGMsZSl9LEZiOmZ1bmN0aW9uKGIsYyl7aWYoIWJ8fCFiLm5vZGVUeXBlKXRocm93IEVycm9yKFwiZWxlbWVudCBtdXN0IGJlIGEgRE9NIG5vZGUgd2hlbiBjYWxsaW5nIHRyaWdnZXJFdmVudFwiKTt2YXIgZDtcImlucHV0XCI9PT1hLmEuUChiKSYmYi50eXBlJiZcImNsaWNrXCI9PWMudG9Mb3dlckNhc2UoKT8oZD1iLnR5cGUsZD1cImNoZWNrYm94XCI9PWR8fFwicmFkaW9cIj09ZCk6ZD0hMTtpZihhLm9wdGlvbnMudXNlT25seU5hdGl2ZUV2ZW50c3x8IXZ8fGQpaWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygdy5jcmVhdGVFdmVudClpZihcImZ1bmN0aW9uXCI9PVxudHlwZW9mIGIuZGlzcGF0Y2hFdmVudClkPXcuY3JlYXRlRXZlbnQobFtjXXx8XCJIVE1MRXZlbnRzXCIpLGQuaW5pdEV2ZW50KGMsITAsITAseiwwLDAsMCwwLDAsITEsITEsITEsITEsMCxiKSxiLmRpc3BhdGNoRXZlbnQoZCk7ZWxzZSB0aHJvdyBFcnJvcihcIlRoZSBzdXBwbGllZCBlbGVtZW50IGRvZXNuJ3Qgc3VwcG9ydCBkaXNwYXRjaEV2ZW50XCIpO2Vsc2UgaWYoZCYmYi5jbGljayliLmNsaWNrKCk7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5maXJlRXZlbnQpYi5maXJlRXZlbnQoXCJvblwiK2MpO2Vsc2UgdGhyb3cgRXJyb3IoXCJCcm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0cmlnZ2VyaW5nIGV2ZW50c1wiKTtlbHNlIHYoYikudHJpZ2dlcihjKX0sYzpmdW5jdGlvbihiKXtyZXR1cm4gYS5OKGIpP2IoKTpifSwkYjpmdW5jdGlvbihiKXtyZXR1cm4gYS5OKGIpP2IudygpOmJ9LEViOmZ1bmN0aW9uKGIsYyxkKXt2YXIgaztjJiYoXCJvYmplY3RcIj09PXR5cGVvZiBiLmNsYXNzTGlzdD9cbihrPWIuY2xhc3NMaXN0W2Q/XCJhZGRcIjpcInJlbW92ZVwiXSxhLmEuQyhjLm1hdGNoKG4pLGZ1bmN0aW9uKGEpe2suY2FsbChiLmNsYXNzTGlzdCxhKX0pKTpcInN0cmluZ1wiPT09dHlwZW9mIGIuY2xhc3NOYW1lLmJhc2VWYWw/ZShiLmNsYXNzTmFtZSxcImJhc2VWYWxcIixjLGQpOmUoYixcImNsYXNzTmFtZVwiLGMsZCkpfSxBYjpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5jKGMpO2lmKG51bGw9PT1kfHxkPT09cClkPVwiXCI7dmFyIGU9YS5oLmZpcnN0Q2hpbGQoYik7IWV8fDMhPWUubm9kZVR5cGV8fGEuaC5uZXh0U2libGluZyhlKT9hLmgudWEoYixbYi5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGQpXSk6ZS5kYXRhPWQ7YS5hLnpkKGIpfSxYYzpmdW5jdGlvbihhLGIpe2EubmFtZT1iO2lmKDc+PXEpdHJ5e3ZhciBjPWEubmFtZS5yZXBsYWNlKC9bJjw+J1wiXS9nLGZ1bmN0aW9uKGEpe3JldHVyblwiJiNcIithLmNoYXJDb2RlQXQoMCkrXCI7XCJ9KTthLm1lcmdlQXR0cmlidXRlcyh3LmNyZWF0ZUVsZW1lbnQoXCI8aW5wdXQgbmFtZT0nXCIrXG5jK1wiJy8+XCIpLCExKX1jYXRjaChkKXt9fSx6ZDpmdW5jdGlvbihhKXs5PD1xJiYoYT0xPT1hLm5vZGVUeXBlP2E6YS5wYXJlbnROb2RlLGEuc3R5bGUmJihhLnN0eWxlLnpvb209YS5zdHlsZS56b29tKSl9LHZkOmZ1bmN0aW9uKGEpe2lmKHEpe3ZhciBiPWEuc3R5bGUud2lkdGg7YS5zdHlsZS53aWR0aD0wO2Euc3R5bGUud2lkdGg9Yn19LE9kOmZ1bmN0aW9uKGIsYyl7Yj1hLmEuYyhiKTtjPWEuYS5jKGMpO2Zvcih2YXIgZD1bXSxlPWI7ZTw9YztlKyspZC5wdXNoKGUpO3JldHVybiBkfSxsYTpmdW5jdGlvbihhKXtmb3IodmFyIGI9W10sYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKyliLnB1c2goYVtjXSk7cmV0dXJuIGJ9LERhOmZ1bmN0aW9uKGEpe3JldHVybiBoP1N5bWJvbChhKTphfSxYZDo2PT09cSxZZDo3PT09cSxXOnEsS2M6ZnVuY3Rpb24oYixjKXtmb3IodmFyIGQ9YS5hLmxhKGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKSkuY29uY2F0KGEuYS5sYShiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGV4dGFyZWFcIikpKSxcbmU9XCJzdHJpbmdcIj09dHlwZW9mIGM/ZnVuY3Rpb24oYSl7cmV0dXJuIGEubmFtZT09PWN9OmZ1bmN0aW9uKGEpe3JldHVybiBjLnRlc3QoYS5uYW1lKX0saz1bXSxmPWQubGVuZ3RoLTE7MDw9ZjtmLS0pZShkW2ZdKSYmay5wdXNoKGRbZl0pO3JldHVybiBrfSxNZDpmdW5jdGlvbihiKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGI9YS5hLkNiKGIpKT9IJiZILnBhcnNlP0gucGFyc2UoYik6KG5ldyBGdW5jdGlvbihcInJldHVybiBcIitiKSkoKTpudWxsfSxmYzpmdW5jdGlvbihiLGMsZCl7aWYoIUh8fCFILnN0cmluZ2lmeSl0aHJvdyBFcnJvcihcIkNhbm5vdCBmaW5kIEpTT04uc3RyaW5naWZ5KCkuIFNvbWUgYnJvd3NlcnMgKGUuZy4sIElFIDwgOCkgZG9uJ3Qgc3VwcG9ydCBpdCBuYXRpdmVseSwgYnV0IHlvdSBjYW4gb3ZlcmNvbWUgdGhpcyBieSBhZGRpbmcgYSBzY3JpcHQgcmVmZXJlbmNlIHRvIGpzb24yLmpzLCBkb3dubG9hZGFibGUgZnJvbSBodHRwOi8vd3d3Lmpzb24ub3JnL2pzb24yLmpzXCIpO1xucmV0dXJuIEguc3RyaW5naWZ5KGEuYS5jKGIpLGMsZCl9LE5kOmZ1bmN0aW9uKGMsZCxlKXtlPWV8fHt9O3ZhciBrPWUucGFyYW1zfHx7fSxmPWUuaW5jbHVkZUZpZWxkc3x8dGhpcy5JYyxsPWM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGMmJlwiZm9ybVwiPT09YS5hLlAoYykpZm9yKHZhciBsPWMuYWN0aW9uLGg9Zi5sZW5ndGgtMTswPD1oO2gtLSlmb3IodmFyIGc9YS5hLktjKGMsZltoXSksbT1nLmxlbmd0aC0xOzA8PW07bS0tKWtbZ1ttXS5uYW1lXT1nW21dLnZhbHVlO2Q9YS5hLmMoZCk7dmFyIG49dy5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtuLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7bi5hY3Rpb249bDtuLm1ldGhvZD1cInBvc3RcIjtmb3IodmFyIHEgaW4gZCljPXcuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGMudHlwZT1cImhpZGRlblwiLGMubmFtZT1xLGMudmFsdWU9YS5hLmZjKGEuYS5jKGRbcV0pKSxuLmFwcGVuZENoaWxkKGMpO2IoayxmdW5jdGlvbihhLGIpe3ZhciBjPXcuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuYy50eXBlPVwiaGlkZGVuXCI7Yy5uYW1lPWE7Yy52YWx1ZT1iO24uYXBwZW5kQ2hpbGQoYyl9KTt3LmJvZHkuYXBwZW5kQ2hpbGQobik7ZS5zdWJtaXR0ZXI/ZS5zdWJtaXR0ZXIobik6bi5zdWJtaXQoKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pfSwwKX19fSgpO2EuYihcInV0aWxzXCIsYS5hKTthLmIoXCJ1dGlscy5hcnJheUZvckVhY2hcIixhLmEuQyk7YS5iKFwidXRpbHMuYXJyYXlGaXJzdFwiLGEuYS5MYik7YS5iKFwidXRpbHMuYXJyYXlGaWx0ZXJcIixhLmEuZmIpO2EuYihcInV0aWxzLmFycmF5R2V0RGlzdGluY3RWYWx1ZXNcIixhLmEudmMpO2EuYihcInV0aWxzLmFycmF5SW5kZXhPZlwiLGEuYS5BKTthLmIoXCJ1dGlscy5hcnJheU1hcFwiLGEuYS5NYik7YS5iKFwidXRpbHMuYXJyYXlQdXNoQWxsXCIsYS5hLmdiKTthLmIoXCJ1dGlscy5hcnJheVJlbW92ZUl0ZW1cIixhLmEuaGIpO2EuYihcInV0aWxzLmNsb25lTm9kZXNcIixhLmEuQ2EpO2EuYihcInV0aWxzLmNyZWF0ZVN5bWJvbE9yU3RyaW5nXCIsXG5hLmEuRGEpO2EuYihcInV0aWxzLmV4dGVuZFwiLGEuYS5leHRlbmQpO2EuYihcInV0aWxzLmZpZWxkc0luY2x1ZGVkV2l0aEpzb25Qb3N0XCIsYS5hLkljKTthLmIoXCJ1dGlscy5nZXRGb3JtRmllbGRzXCIsYS5hLktjKTthLmIoXCJ1dGlscy5vYmplY3RNYXBcIixhLmEuSGEpO2EuYihcInV0aWxzLnBlZWtPYnNlcnZhYmxlXCIsYS5hLiRiKTthLmIoXCJ1dGlscy5wb3N0SnNvblwiLGEuYS5OZCk7YS5iKFwidXRpbHMucGFyc2VKc29uXCIsYS5hLk1kKTthLmIoXCJ1dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlclwiLGEuYS5IKTthLmIoXCJ1dGlscy5zdHJpbmdpZnlKc29uXCIsYS5hLmZjKTthLmIoXCJ1dGlscy5yYW5nZVwiLGEuYS5PZCk7YS5iKFwidXRpbHMudG9nZ2xlRG9tTm9kZUNzc0NsYXNzXCIsYS5hLkViKTthLmIoXCJ1dGlscy50cmlnZ2VyRXZlbnRcIixhLmEuRmIpO2EuYihcInV0aWxzLnVud3JhcE9ic2VydmFibGVcIixhLmEuYyk7YS5iKFwidXRpbHMub2JqZWN0Rm9yRWFjaFwiLGEuYS5PKTthLmIoXCJ1dGlscy5hZGRPclJlbW92ZUl0ZW1cIixcbmEuYS5PYSk7YS5iKFwidXRpbHMuc2V0VGV4dENvbnRlbnRcIixhLmEuQWIpO2EuYihcInVud3JhcFwiLGEuYS5jKTtGdW5jdGlvbi5wcm90b3R5cGUuYmluZHx8KEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGEpe3ZhciBjPXRoaXM7aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGMuYXBwbHkoYSxhcmd1bWVudHMpfTt2YXIgZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9ZC5zbGljZSgwKTtlLnB1c2guYXBwbHkoZSxhcmd1bWVudHMpO3JldHVybiBjLmFwcGx5KGEsZSl9fSk7YS5hLmc9bmV3IGZ1bmN0aW9uKCl7dmFyIGI9MCxjPVwiX19rb19fXCIrKG5ldyBEYXRlKS5nZXRUaW1lKCksZD17fSxlLGY7YS5hLlc/KGU9ZnVuY3Rpb24oYSxlKXt2YXIgZj1hW2NdO2lmKCFmfHxcIm51bGxcIj09PWZ8fCFkW2ZdKXtpZighZSlyZXR1cm4gcDtmPWFbY109XCJrb1wiK2IrKztkW2ZdPVxue319cmV0dXJuIGRbZl19LGY9ZnVuY3Rpb24oYSl7dmFyIGI9YVtjXTtyZXR1cm4gYj8oZGVsZXRlIGRbYl0sYVtjXT1udWxsLCEwKTohMX0pOihlPWZ1bmN0aW9uKGEsYil7dmFyIGQ9YVtjXTshZCYmYiYmKGQ9YVtjXT17fSk7cmV0dXJuIGR9LGY9ZnVuY3Rpb24oYSl7cmV0dXJuIGFbY10/KGRlbGV0ZSBhW2NdLCEwKTohMX0pO3JldHVybntnZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz1lKGEsITEpO3JldHVybiBjJiZjW2JdfSxzZXQ6ZnVuY3Rpb24oYSxiLGMpeyhhPWUoYSxjIT09cCkpJiYoYVtiXT1jKX0sVGI6ZnVuY3Rpb24oYSxiLGMpe2E9ZShhLCEwKTtyZXR1cm4gYVtiXXx8KGFbYl09Yyl9LGNsZWFyOmYsWjpmdW5jdGlvbigpe3JldHVybiBiKysgK2N9fX07YS5iKFwidXRpbHMuZG9tRGF0YVwiLGEuYS5nKTthLmIoXCJ1dGlscy5kb21EYXRhLmNsZWFyXCIsYS5hLmcuY2xlYXIpO2EuYS5JPW5ldyBmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjKXt2YXIgZD1hLmEuZy5nZXQoYixlKTtcbmQ9PT1wJiZjJiYoZD1bXSxhLmEuZy5zZXQoYixlLGQpKTtyZXR1cm4gZH1mdW5jdGlvbiBjKGMpe3ZhciBlPWIoYywhMSk7aWYoZSlmb3IodmFyIGU9ZS5zbGljZSgwKSxmPTA7ZjxlLmxlbmd0aDtmKyspZVtmXShjKTthLmEuZy5jbGVhcihjKTthLmEuSS5jbGVhbkV4dGVybmFsRGF0YShjKTtnW2Mubm9kZVR5cGVdJiZkKGMuY2hpbGROb2RlcywhMCl9ZnVuY3Rpb24gZChiLGQpe2Zvcih2YXIgZT1bXSxrLGY9MDtmPGIubGVuZ3RoO2YrKylpZighZHx8OD09PWJbZl0ubm9kZVR5cGUpaWYoYyhlW2UubGVuZ3RoXT1rPWJbZl0pLGJbZl0hPT1rKWZvcig7Zi0tJiYtMT09YS5hLkEoZSxiW2ZdKTspO312YXIgZT1hLmEuZy5aKCksZj17MTohMCw4OiEwLDk6ITB9LGc9ezE6ITAsOTohMH07cmV0dXJue3phOmZ1bmN0aW9uKGEsYyl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgYyl0aHJvdyBFcnJvcihcIkNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtiKGEsITApLnB1c2goYyl9LHhiOmZ1bmN0aW9uKGMsXG5kKXt2YXIgZj1iKGMsITEpO2YmJihhLmEuaGIoZixkKSwwPT1mLmxlbmd0aCYmYS5hLmcuc2V0KGMsZSxwKSl9LG5hOmZ1bmN0aW9uKGEpe2ZbYS5ub2RlVHlwZV0mJihjKGEpLGdbYS5ub2RlVHlwZV0mJmQoYS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikpKTtyZXR1cm4gYX0scmVtb3ZlTm9kZTpmdW5jdGlvbihiKXthLm5hKGIpO2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpfSxjbGVhbkV4dGVybmFsRGF0YTpmdW5jdGlvbihhKXt2JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB2LmNsZWFuRGF0YSYmdi5jbGVhbkRhdGEoW2FdKX19fTthLm5hPWEuYS5JLm5hO2EucmVtb3ZlTm9kZT1hLmEuSS5yZW1vdmVOb2RlO2EuYihcImNsZWFuTm9kZVwiLGEubmEpO2EuYihcInJlbW92ZU5vZGVcIixhLnJlbW92ZU5vZGUpO2EuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbFwiLGEuYS5JKTthLmIoXCJ1dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrXCIsYS5hLkkuemEpO1xuYS5iKFwidXRpbHMuZG9tTm9kZURpc3Bvc2FsLnJlbW92ZURpc3Bvc2VDYWxsYmFja1wiLGEuYS5JLnhiKTsoZnVuY3Rpb24oKXt2YXIgYj1bMCxcIlwiLFwiXCJdLGM9WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxkPVszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sZT1bMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSxmPXt0aGVhZDpjLHRib2R5OmMsdGZvb3Q6Yyx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOmQsdGg6ZCxvcHRpb246ZSxvcHRncm91cDplfSxnPTg+PWEuYS5XO2EuYS50YT1mdW5jdGlvbihjLGQpe3ZhciBlO2lmKHYpaWYodi5wYXJzZUhUTUwpZT12LnBhcnNlSFRNTChjLGQpfHxbXTtlbHNle2lmKChlPXYuY2xlYW4oW2NdLGQpKSYmZVswXSl7Zm9yKHZhciBrPWVbMF07ay5wYXJlbnROb2RlJiYxMSE9PWsucGFyZW50Tm9kZS5ub2RlVHlwZTspaz1rLnBhcmVudE5vZGU7XG5rLnBhcmVudE5vZGUmJmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChrKX19ZWxzZXsoZT1kKXx8KGU9dyk7dmFyIGs9ZS5wYXJlbnRXaW5kb3d8fGUuZGVmYXVsdFZpZXd8fHoscT1hLmEuQ2IoYykudG9Mb3dlckNhc2UoKSxuPWUuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyO3I9KHE9cS5tYXRjaCgvXig/OlxceDNjIS0tLio/LS1cXHgzZVxccyo/KSo/PChbYS16XSspW1xccz5dLykpJiZmW3FbMV1dfHxiO3E9clswXTtyPVwiaWdub3JlZDxkaXY+XCIrclsxXStjK3JbMl0rXCI8L2Rpdj5cIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBrLmlubmVyU2hpdj9uLmFwcGVuZENoaWxkKGsuaW5uZXJTaGl2KHIpKTooZyYmZS5ib2R5LmFwcGVuZENoaWxkKG4pLG4uaW5uZXJIVE1MPXIsZyYmbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pKTtmb3IoO3EtLTspbj1uLmxhc3RDaGlsZDtlPWEuYS5sYShuLmxhc3RDaGlsZC5jaGlsZE5vZGVzKX1yZXR1cm4gZX07YS5hLkxkPWZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLnRhKGIsXG5jKTtyZXR1cm4gZC5sZW5ndGgmJmRbMF0ucGFyZW50RWxlbWVudHx8YS5hLlhiKGQpfTthLmEuZGM9ZnVuY3Rpb24oYixjKXthLmEuU2IoYik7Yz1hLmEuYyhjKTtpZihudWxsIT09YyYmYyE9PXApaWYoXCJzdHJpbmdcIiE9dHlwZW9mIGMmJihjPWMudG9TdHJpbmcoKSksdil2KGIpLmh0bWwoYyk7ZWxzZSBmb3IodmFyIGQ9YS5hLnRhKGMsYi5vd25lckRvY3VtZW50KSxlPTA7ZTxkLmxlbmd0aDtlKyspYi5hcHBlbmRDaGlsZChkW2VdKX19KSgpO2EuYihcInV0aWxzLnBhcnNlSHRtbEZyYWdtZW50XCIsYS5hLnRhKTthLmIoXCJ1dGlscy5zZXRIdG1sXCIsYS5hLmRjKTthLmFhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihjLGUpe2lmKGMpaWYoOD09Yy5ub2RlVHlwZSl7dmFyIGY9YS5hYS5UYyhjLm5vZGVWYWx1ZSk7bnVsbCE9ZiYmZS5wdXNoKHtzZDpjLEpkOmZ9KX1lbHNlIGlmKDE9PWMubm9kZVR5cGUpZm9yKHZhciBmPTAsZz1jLmNoaWxkTm9kZXMsaD1nLmxlbmd0aDtmPGg7ZisrKWIoZ1tmXSxcbmUpfXZhciBjPXt9O3JldHVybntXYjpmdW5jdGlvbihhKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBhKXRocm93IEVycm9yKFwiWW91IGNhbiBvbmx5IHBhc3MgYSBmdW5jdGlvbiB0byBrby5tZW1vaXphdGlvbi5tZW1vaXplKClcIik7dmFyIGI9KDQyOTQ5NjcyOTYqKDErTWF0aC5yYW5kb20oKSl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKSsoNDI5NDk2NzI5NiooMStNYXRoLnJhbmRvbSgpKXwwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO2NbYl09YTtyZXR1cm5cIlxceDNjIS0tW2tvX21lbW86XCIrYitcIl0tLVxceDNlXCJ9LGFkOmZ1bmN0aW9uKGEsYil7dmFyIGY9Y1thXTtpZihmPT09cCl0aHJvdyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYW55IG1lbW8gd2l0aCBJRCBcIithK1wiLiBQZXJoYXBzIGl0J3MgYWxyZWFkeSBiZWVuIHVubWVtb2l6ZWQuXCIpO3RyeXtyZXR1cm4gZi5hcHBseShudWxsLGJ8fFtdKSwhMH1maW5hbGx5e2RlbGV0ZSBjW2FdfX0sYmQ6ZnVuY3Rpb24oYyxlKXt2YXIgZj1cbltdO2IoYyxmKTtmb3IodmFyIGc9MCxoPWYubGVuZ3RoO2c8aDtnKyspe3ZhciBtPWZbZ10uc2QsbD1bbV07ZSYmYS5hLmdiKGwsZSk7YS5hYS5hZChmW2ddLkpkLGwpO20ubm9kZVZhbHVlPVwiXCI7bS5wYXJlbnROb2RlJiZtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobSl9fSxUYzpmdW5jdGlvbihhKXtyZXR1cm4oYT1hLm1hdGNoKC9eXFxba29fbWVtb1xcOiguKj8pXFxdJC8pKT9hWzFdOm51bGx9fX0oKTthLmIoXCJtZW1vaXphdGlvblwiLGEuYWEpO2EuYihcIm1lbW9pemF0aW9uLm1lbW9pemVcIixhLmFhLldiKTthLmIoXCJtZW1vaXphdGlvbi51bm1lbW9pemVcIixhLmFhLmFkKTthLmIoXCJtZW1vaXphdGlvbi5wYXJzZU1lbW9UZXh0XCIsYS5hYS5UYyk7YS5iKFwibWVtb2l6YXRpb24udW5tZW1vaXplRG9tTm9kZUFuZERlc2NlbmRhbnRzXCIsYS5hYS5iZCk7YS5tYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXtpZihmKWZvcih2YXIgYj1mLGM9MCxkO2g8ZjspaWYoZD1lW2grK10pe2lmKGg+Yil7aWYoNUUzPD1cbisrYyl7aD1mO2EuYS5GYyhFcnJvcihcIidUb28gbXVjaCByZWN1cnNpb24nIGFmdGVyIHByb2Nlc3NpbmcgXCIrYytcIiB0YXNrIGdyb3Vwcy5cIikpO2JyZWFrfWI9Zn10cnl7ZCgpfWNhdGNoKGcpe2EuYS5GYyhnKX19fWZ1bmN0aW9uIGMoKXtiKCk7aD1mPWUubGVuZ3RoPTB9dmFyIGQsZT1bXSxmPTAsZz0xLGg9MDt6Lk11dGF0aW9uT2JzZXJ2ZXI/ZD1mdW5jdGlvbihhKXt2YXIgYj13LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7KG5ldyBNdXRhdGlvbk9ic2VydmVyKGEpKS5vYnNlcnZlKGIse2F0dHJpYnV0ZXM6ITB9KTtyZXR1cm4gZnVuY3Rpb24oKXtiLmNsYXNzTGlzdC50b2dnbGUoXCJmb29cIil9fShjKTpkPXcmJlwib25yZWFkeXN0YXRlY2hhbmdlXCJpbiB3LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik/ZnVuY3Rpb24oYSl7dmFyIGI9dy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2Iub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7Yi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbDt3LmRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZChiKTtcbmI9bnVsbDthKCl9O3cuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGIpfTpmdW5jdGlvbihhKXtzZXRUaW1lb3V0KGEsMCl9O3JldHVybntzY2hlZHVsZXI6ZCx5YjpmdW5jdGlvbihiKXtmfHxhLm1hLnNjaGVkdWxlcihjKTtlW2YrK109YjtyZXR1cm4gZysrfSxjYW5jZWw6ZnVuY3Rpb24oYSl7YT1hLShnLWYpO2E+PWgmJmE8ZiYmKGVbYV09bnVsbCl9LHJlc2V0Rm9yVGVzdGluZzpmdW5jdGlvbigpe3ZhciBhPWYtaDtoPWY9ZS5sZW5ndGg9MDtyZXR1cm4gYX0sUmQ6Yn19KCk7YS5iKFwidGFza3NcIixhLm1hKTthLmIoXCJ0YXNrcy5zY2hlZHVsZVwiLGEubWEueWIpO2EuYihcInRhc2tzLnJ1bkVhcmx5XCIsYS5tYS5SZCk7YS5UYT17dGhyb3R0bGU6ZnVuY3Rpb24oYixjKXtiLnRocm90dGxlRXZhbHVhdGlvbj1jO3ZhciBkPW51bGw7cmV0dXJuIGEuJCh7cmVhZDpiLHdyaXRlOmZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dChkKTtkPWEuYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YihlKX0sXG5jKX19KX0scmF0ZUxpbWl0OmZ1bmN0aW9uKGEsYyl7dmFyIGQsZSxmO1wibnVtYmVyXCI9PXR5cGVvZiBjP2Q9YzooZD1jLnRpbWVvdXQsZT1jLm1ldGhvZCk7YS5IYj0hMTtmPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTpcIm5vdGlmeVdoZW5DaGFuZ2VzU3RvcFwiPT1lP1k6WDthLnRiKGZ1bmN0aW9uKGEpe3JldHVybiBmKGEsZCxjKX0pfSxkZWZlcnJlZDpmdW5jdGlvbihiLGMpe2lmKCEwIT09Yyl0aHJvdyBFcnJvcihcIlRoZSAnZGVmZXJyZWQnIGV4dGVuZGVyIG9ubHkgYWNjZXB0cyB0aGUgdmFsdWUgJ3RydWUnLCBiZWNhdXNlIGl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gdHVybiBkZWZlcnJhbCBvZmYgb25jZSBlbmFibGVkLlwiKTtiLkhifHwoYi5IYj0hMCxiLnRiKGZ1bmN0aW9uKGMpe3ZhciBlLGY9ITE7cmV0dXJuIGZ1bmN0aW9uKCl7aWYoIWYpe2EubWEuY2FuY2VsKGUpO2U9YS5tYS55YihjKTt0cnl7Zj0hMCxiLm5vdGlmeVN1YnNjcmliZXJzKHAsXCJkaXJ0eVwiKX1maW5hbGx5e2Y9XG4hMX19fX0pKX0sbm90aWZ5OmZ1bmN0aW9uKGEsYyl7YS5lcXVhbGl0eUNvbXBhcmVyPVwiYWx3YXlzXCI9PWM/bnVsbDpLfX07dmFyIFc9e3VuZGVmaW5lZDoxLFwiYm9vbGVhblwiOjEsbnVtYmVyOjEsc3RyaW5nOjF9O2EuYihcImV4dGVuZGVyc1wiLGEuVGEpO2EuZ2M9ZnVuY3Rpb24oYixjLGQpe3RoaXMuZGE9Yjt0aGlzLmtjPWM7dGhpcy5sYz1kO3RoaXMuSWI9ITE7dGhpcy5hYj10aGlzLkpiPW51bGw7YS5KKHRoaXMsXCJkaXNwb3NlXCIsdGhpcy5zKTthLkoodGhpcyxcImRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZFwiLHRoaXMubCl9O2EuZ2MucHJvdG90eXBlLnM9ZnVuY3Rpb24oKXt0aGlzLklifHwodGhpcy5hYiYmYS5hLkkueGIodGhpcy5KYix0aGlzLmFiKSx0aGlzLkliPSEwLHRoaXMubGMoKSx0aGlzLmRhPXRoaXMua2M9dGhpcy5sYz10aGlzLkpiPXRoaXMuYWI9bnVsbCl9O2EuZ2MucHJvdG90eXBlLmw9ZnVuY3Rpb24oYil7dGhpcy5KYj1iO2EuYS5JLnphKGIsdGhpcy5hYj10aGlzLnMuYmluZCh0aGlzKSl9O1xuYS5SPWZ1bmN0aW9uKCl7YS5hLnpiKHRoaXMsRCk7RC5vYih0aGlzKX07dmFyIEQ9e29iOmZ1bmN0aW9uKGEpe2EuUz17Y2hhbmdlOltdfTthLnJjPTF9LHN1YnNjcmliZTpmdW5jdGlvbihiLGMsZCl7dmFyIGU9dGhpcztkPWR8fFwiY2hhbmdlXCI7dmFyIGY9bmV3IGEuZ2MoZSxjP2IuYmluZChjKTpiLGZ1bmN0aW9uKCl7YS5hLmhiKGUuU1tkXSxmKTtlLmNiJiZlLmNiKGQpfSk7ZS5RYSYmZS5RYShkKTtlLlNbZF18fChlLlNbZF09W10pO2UuU1tkXS5wdXNoKGYpO3JldHVybiBmfSxub3RpZnlTdWJzY3JpYmVyczpmdW5jdGlvbihiLGMpe2M9Y3x8XCJjaGFuZ2VcIjtcImNoYW5nZVwiPT09YyYmdGhpcy5HYigpO2lmKHRoaXMuV2EoYykpe3ZhciBkPVwiY2hhbmdlXCI9PT1jJiZ0aGlzLmRkfHx0aGlzLlNbY10uc2xpY2UoMCk7dHJ5e2Eudi53YygpO2Zvcih2YXIgZT0wLGY7Zj1kW2VdOysrZSlmLklifHxmLmtjKGIpfWZpbmFsbHl7YS52LmVuZCgpfX19LG1iOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmN9LFxuQ2Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubWIoKSE9PWF9LEdiOmZ1bmN0aW9uKCl7Kyt0aGlzLnJjfSx0YjpmdW5jdGlvbihiKXt2YXIgYz10aGlzLGQ9YS5OKGMpLGUsZixnLGgsbTtjLmJifHwoYy5iYj1jLm5vdGlmeVN1YnNjcmliZXJzLGMubm90aWZ5U3Vic2NyaWJlcnM9Wik7dmFyIGw9YihmdW5jdGlvbigpe2MuS2E9ITE7ZCYmaD09PWMmJihoPWMubWM/Yy5tYygpOmMoKSk7dmFyIGE9Znx8bSYmYy5xYihnLGgpO209Zj1lPSExO2EmJmMuYmIoZz1oKX0pO2MucGM9ZnVuY3Rpb24oYSxiKXtiJiZjLkthfHwobT0hYik7Yy5kZD1jLlMuY2hhbmdlLnNsaWNlKDApO2MuS2E9ZT0hMDtoPWE7bCgpfTtjLm9jPWZ1bmN0aW9uKGEpe2V8fChnPWEsYy5iYihhLFwiYmVmb3JlQ2hhbmdlXCIpKX07Yy5xYz1mdW5jdGlvbigpe209ITB9O2MuZmQ9ZnVuY3Rpb24oKXtjLnFiKGcsYy53KCEwKSkmJihmPSEwKX19LFdhOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLlNbYV0mJnRoaXMuU1thXS5sZW5ndGh9LFxuQWQ6ZnVuY3Rpb24oYil7aWYoYilyZXR1cm4gdGhpcy5TW2JdJiZ0aGlzLlNbYl0ubGVuZ3RofHwwO3ZhciBjPTA7YS5hLk8odGhpcy5TLGZ1bmN0aW9uKGEsYil7XCJkaXJ0eVwiIT09YSYmKGMrPWIubGVuZ3RoKX0pO3JldHVybiBjfSxxYjpmdW5jdGlvbihhLGMpe3JldHVybiF0aGlzLmVxdWFsaXR5Q29tcGFyZXJ8fCF0aGlzLmVxdWFsaXR5Q29tcGFyZXIoYSxjKX0sdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm5cIltvYmplY3QgT2JqZWN0XVwifSxleHRlbmQ6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcztiJiZhLmEuTyhiLGZ1bmN0aW9uKGIsZSl7dmFyIGY9YS5UYVtiXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBmJiYoYz1mKGMsZSl8fGMpfSk7cmV0dXJuIGN9fTthLkooRCxcImluaXRcIixELm9iKTthLkooRCxcInN1YnNjcmliZVwiLEQuc3Vic2NyaWJlKTthLkooRCxcImV4dGVuZFwiLEQuZXh0ZW5kKTthLkooRCxcImdldFN1YnNjcmlwdGlvbnNDb3VudFwiLEQuQWQpO2EuYS5CYSYmYS5hLnNldFByb3RvdHlwZU9mKEQsXG5GdW5jdGlvbi5wcm90b3R5cGUpO2EuUi5mbj1EO2EuUGM9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWEmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEuc3Vic2NyaWJlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLm5vdGlmeVN1YnNjcmliZXJzfTthLmIoXCJzdWJzY3JpYmFibGVcIixhLlIpO2EuYihcImlzU3Vic2NyaWJhYmxlXCIsYS5QYyk7YS5VPWEudj1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSl7ZC5wdXNoKGUpO2U9YX1mdW5jdGlvbiBjKCl7ZT1kLnBvcCgpfXZhciBkPVtdLGUsZj0wO3JldHVybnt3YzpiLGVuZDpjLGFjOmZ1bmN0aW9uKGIpe2lmKGUpe2lmKCFhLlBjKGIpKXRocm93IEVycm9yKFwiT25seSBzdWJzY3JpYmFibGUgdGhpbmdzIGNhbiBhY3QgYXMgZGVwZW5kZW5jaWVzXCIpO2UubmQuY2FsbChlLm9kLGIsYi5lZHx8KGIuZWQ9KytmKSl9fSxLOmZ1bmN0aW9uKGEsZCxlKXt0cnl7cmV0dXJuIGIoKSxhLmFwcGx5KGQsZXx8W10pfWZpbmFsbHl7YygpfX0scGE6ZnVuY3Rpb24oKXtpZihlKXJldHVybiBlLm8ucGEoKX0sXG5WYTpmdW5jdGlvbigpe2lmKGUpcmV0dXJuIGUuby5WYSgpfSxyYjpmdW5jdGlvbigpe2lmKGUpcmV0dXJuIGUucmJ9LG86ZnVuY3Rpb24oKXtpZihlKXJldHVybiBlLm99fX0oKTthLmIoXCJjb21wdXRlZENvbnRleHRcIixhLlUpO2EuYihcImNvbXB1dGVkQ29udGV4dC5nZXREZXBlbmRlbmNpZXNDb3VudFwiLGEuVS5wYSk7YS5iKFwiY29tcHV0ZWRDb250ZXh0LmdldERlcGVuZGVuY2llc1wiLGEuVS5WYSk7YS5iKFwiY29tcHV0ZWRDb250ZXh0LmlzSW5pdGlhbFwiLGEuVS5yYik7YS5iKFwiY29tcHV0ZWRDb250ZXh0LnJlZ2lzdGVyRGVwZW5kZW5jeVwiLGEuVS5hYyk7YS5iKFwiaWdub3JlRGVwZW5kZW5jaWVzXCIsYS5XZD1hLnYuSyk7dmFyIEk9YS5hLkRhKFwiX2xhdGVzdFZhbHVlXCIpO2Euc2E9ZnVuY3Rpb24oYil7ZnVuY3Rpb24gYygpe2lmKDA8YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gYy5xYihjW0ldLGFyZ3VtZW50c1swXSkmJihjLnhhKCksY1tJXT1hcmd1bWVudHNbMF0sYy53YSgpKSx0aGlzO1xuYS52LmFjKGMpO3JldHVybiBjW0ldfWNbSV09YjthLmEuQmF8fGEuYS5leHRlbmQoYyxhLlIuZm4pO2EuUi5mbi5vYihjKTthLmEuemIoYyxGKTthLm9wdGlvbnMuZGVmZXJVcGRhdGVzJiZhLlRhLmRlZmVycmVkKGMsITApO3JldHVybiBjfTt2YXIgRj17ZXF1YWxpdHlDb21wYXJlcjpLLHc6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tJXX0sd2E6ZnVuY3Rpb24oKXt0aGlzLm5vdGlmeVN1YnNjcmliZXJzKHRoaXNbSV0sXCJzcGVjdGF0ZVwiKTt0aGlzLm5vdGlmeVN1YnNjcmliZXJzKHRoaXNbSV0pfSx4YTpmdW5jdGlvbigpe3RoaXMubm90aWZ5U3Vic2NyaWJlcnModGhpc1tJXSxcImJlZm9yZUNoYW5nZVwiKX19O2EuYS5CYSYmYS5hLnNldFByb3RvdHlwZU9mKEYsYS5SLmZuKTt2YXIgRz1hLnNhLk5hPVwiX19rb19wcm90b19fXCI7RltHXT1hLnNhO2EuTj1mdW5jdGlvbihiKXtpZigoYj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBiJiZiW0ddKSYmYiE9PUZbR10mJmIhPT1hLm8uZm5bR10pdGhyb3cgRXJyb3IoXCJJbnZhbGlkIG9iamVjdCB0aGF0IGxvb2tzIGxpa2UgYW4gb2JzZXJ2YWJsZTsgcG9zc2libHkgZnJvbSBhbm90aGVyIEtub2Nrb3V0IGluc3RhbmNlXCIpO1xucmV0dXJuISFifTthLllhPWZ1bmN0aW9uKGIpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGImJihiW0ddPT09RltHXXx8YltHXT09PWEuby5mbltHXSYmYi5NYyl9O2EuYihcIm9ic2VydmFibGVcIixhLnNhKTthLmIoXCJpc09ic2VydmFibGVcIixhLk4pO2EuYihcImlzV3JpdGVhYmxlT2JzZXJ2YWJsZVwiLGEuWWEpO2EuYihcImlzV3JpdGFibGVPYnNlcnZhYmxlXCIsYS5ZYSk7YS5iKFwib2JzZXJ2YWJsZS5mblwiLEYpO2EuSihGLFwicGVla1wiLEYudyk7YS5KKEYsXCJ2YWx1ZUhhc011dGF0ZWRcIixGLndhKTthLkooRixcInZhbHVlV2lsbE11dGF0ZVwiLEYueGEpO2EuSWE9ZnVuY3Rpb24oYil7Yj1ifHxbXTtpZihcIm9iamVjdFwiIT10eXBlb2YgYnx8IShcImxlbmd0aFwiaW4gYikpdGhyb3cgRXJyb3IoXCJUaGUgYXJndW1lbnQgcGFzc2VkIHdoZW4gaW5pdGlhbGl6aW5nIGFuIG9ic2VydmFibGUgYXJyYXkgbXVzdCBiZSBhbiBhcnJheSwgb3IgbnVsbCwgb3IgdW5kZWZpbmVkLlwiKTtiPWEuc2EoYik7YS5hLnpiKGIsXG5hLklhLmZuKTtyZXR1cm4gYi5leHRlbmQoe3RyYWNrQXJyYXlDaGFuZ2VzOiEwfSl9O2EuSWEuZm49e3JlbW92ZTpmdW5jdGlvbihiKXtmb3IodmFyIGM9dGhpcy53KCksZD1bXSxlPVwiZnVuY3Rpb25cIiE9dHlwZW9mIGJ8fGEuTihiKT9mdW5jdGlvbihhKXtyZXR1cm4gYT09PWJ9OmIsZj0wO2Y8Yy5sZW5ndGg7ZisrKXt2YXIgZz1jW2ZdO2lmKGUoZykpezA9PT1kLmxlbmd0aCYmdGhpcy54YSgpO2lmKGNbZl0hPT1nKXRocm93IEVycm9yKFwiQXJyYXkgbW9kaWZpZWQgZHVyaW5nIHJlbW92ZTsgY2Fubm90IHJlbW92ZSBpdGVtXCIpO2QucHVzaChnKTtjLnNwbGljZShmLDEpO2YtLX19ZC5sZW5ndGgmJnRoaXMud2EoKTtyZXR1cm4gZH0scmVtb3ZlQWxsOmZ1bmN0aW9uKGIpe2lmKGI9PT1wKXt2YXIgYz10aGlzLncoKSxkPWMuc2xpY2UoMCk7dGhpcy54YSgpO2Muc3BsaWNlKDAsYy5sZW5ndGgpO3RoaXMud2EoKTtyZXR1cm4gZH1yZXR1cm4gYj90aGlzLnJlbW92ZShmdW5jdGlvbihjKXtyZXR1cm4gMDw9XG5hLmEuQShiLGMpfSk6W119LGRlc3Ryb3k6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcy53KCksZD1cImZ1bmN0aW9uXCIhPXR5cGVvZiBifHxhLk4oYik/ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifTpiO3RoaXMueGEoKTtmb3IodmFyIGU9Yy5sZW5ndGgtMTswPD1lO2UtLSl7dmFyIGY9Y1tlXTtkKGYpJiYoZi5fZGVzdHJveT0hMCl9dGhpcy53YSgpfSxkZXN0cm95QWxsOmZ1bmN0aW9uKGIpe3JldHVybiBiPT09cD90aGlzLmRlc3Ryb3koZnVuY3Rpb24oKXtyZXR1cm4hMH0pOmI/dGhpcy5kZXN0cm95KGZ1bmN0aW9uKGMpe3JldHVybiAwPD1hLmEuQShiLGMpfSk6W119LGluZGV4T2Y6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcygpO3JldHVybiBhLmEuQShjLGIpfSxyZXBsYWNlOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9dGhpcy5pbmRleE9mKGEpOzA8PWQmJih0aGlzLnhhKCksdGhpcy53KClbZF09Yyx0aGlzLndhKCkpfSxzb3J0ZWQ6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcygpLnNsaWNlKDApO1xucmV0dXJuIGE/Yy5zb3J0KGEpOmMuc29ydCgpfSxyZXZlcnNlZDpmdW5jdGlvbigpe3JldHVybiB0aGlzKCkuc2xpY2UoMCkucmV2ZXJzZSgpfX07YS5hLkJhJiZhLmEuc2V0UHJvdG90eXBlT2YoYS5JYS5mbixhLnNhLmZuKTthLmEuQyhcInBvcCBwdXNoIHJldmVyc2Ugc2hpZnQgc29ydCBzcGxpY2UgdW5zaGlmdFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihiKXthLklhLmZuW2JdPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy53KCk7dGhpcy54YSgpO3RoaXMueWMoYSxiLGFyZ3VtZW50cyk7dmFyIGQ9YVtiXS5hcHBseShhLGFyZ3VtZW50cyk7dGhpcy53YSgpO3JldHVybiBkPT09YT90aGlzOmR9fSk7YS5hLkMoW1wic2xpY2VcIl0sZnVuY3Rpb24oYil7YS5JYS5mbltiXT1mdW5jdGlvbigpe3ZhciBhPXRoaXMoKTtyZXR1cm4gYVtiXS5hcHBseShhLGFyZ3VtZW50cyl9fSk7YS5PYz1mdW5jdGlvbihiKXtyZXR1cm4gYS5OKGIpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLnJlbW92ZSYmXCJmdW5jdGlvblwiPT1cbnR5cGVvZiBiLnB1c2h9O2EuYihcIm9ic2VydmFibGVBcnJheVwiLGEuSWEpO2EuYihcImlzT2JzZXJ2YWJsZUFycmF5XCIsYS5PYyk7YS5UYS50cmFja0FycmF5Q2hhbmdlcz1mdW5jdGlvbihiLGMpe2Z1bmN0aW9uIGQoKXtmdW5jdGlvbiBjKCl7aWYoaCl7dmFyIGQ9W10uY29uY2F0KGIudygpfHxbXSk7aWYoYi5XYShcImFycmF5Q2hhbmdlXCIpKXt2YXIgZTtpZighZnx8MTxoKWY9YS5hLk9iKG0sZCxiLk5iKTtlPWZ9bT1kO2Y9bnVsbDtoPTA7ZSYmZS5sZW5ndGgmJmIubm90aWZ5U3Vic2NyaWJlcnMoZSxcImFycmF5Q2hhbmdlXCIpfX1lP2MoKTooZT0hMCxsPWIubm90aWZ5U3Vic2NyaWJlcnMsYi5ub3RpZnlTdWJzY3JpYmVycz1mdW5jdGlvbihhLGIpe2ImJlwiY2hhbmdlXCIhPT1ifHwrK2g7cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxtPVtdLmNvbmNhdChiLncoKXx8W10pLGY9bnVsbCxnPWIuc3Vic2NyaWJlKGMpKX1iLk5iPXt9O2MmJlwib2JqZWN0XCI9PXR5cGVvZiBjJiZhLmEuZXh0ZW5kKGIuTmIsXG5jKTtiLk5iLnNwYXJzZT0hMDtpZighYi55Yyl7dmFyIGU9ITEsZj1udWxsLGcsaD0wLG0sbCxrPWIuUWEscT1iLmNiO2IuUWE9ZnVuY3Rpb24oYSl7ayYmay5jYWxsKGIsYSk7XCJhcnJheUNoYW5nZVwiPT09YSYmZCgpfTtiLmNiPWZ1bmN0aW9uKGEpe3EmJnEuY2FsbChiLGEpO1wiYXJyYXlDaGFuZ2VcIiE9PWF8fGIuV2EoXCJhcnJheUNoYW5nZVwiKXx8KGwmJihiLm5vdGlmeVN1YnNjcmliZXJzPWwsbD1wKSxnJiZnLnMoKSxnPW51bGwsZT0hMSxtPXApfTtiLnljPWZ1bmN0aW9uKGIsYyxkKXtmdW5jdGlvbiBrKGEsYixjKXtyZXR1cm4gbFtsLmxlbmd0aF09e3N0YXR1czphLHZhbHVlOmIsaW5kZXg6Y319aWYoZSYmIWgpe3ZhciBsPVtdLGc9Yi5sZW5ndGgscT1kLmxlbmd0aCxtPTA7c3dpdGNoKGMpe2Nhc2UgXCJwdXNoXCI6bT1nO2Nhc2UgXCJ1bnNoaWZ0XCI6Zm9yKGM9MDtjPHE7YysrKWsoXCJhZGRlZFwiLGRbY10sbStjKTticmVhaztjYXNlIFwicG9wXCI6bT1nLTE7Y2FzZSBcInNoaWZ0XCI6ZyYmXG5rKFwiZGVsZXRlZFwiLGJbbV0sbSk7YnJlYWs7Y2FzZSBcInNwbGljZVwiOmM9TWF0aC5taW4oTWF0aC5tYXgoMCwwPmRbMF0/ZytkWzBdOmRbMF0pLGcpO2Zvcih2YXIgZz0xPT09cT9nOk1hdGgubWluKGMrKGRbMV18fDApLGcpLHE9YytxLTIsbT1NYXRoLm1heChnLHEpLFU9W10sTD1bXSxwPTI7YzxtOysrYywrK3ApYzxnJiZMLnB1c2goayhcImRlbGV0ZWRcIixiW2NdLGMpKSxjPHEmJlUucHVzaChrKFwiYWRkZWRcIixkW3BdLGMpKTthLmEuSmMoTCxVKTticmVhaztkZWZhdWx0OnJldHVybn1mPWx9fX19O3ZhciB0PWEuYS5EYShcIl9zdGF0ZVwiKTthLm89YS4kPWZ1bmN0aW9uKGIsYyxkKXtmdW5jdGlvbiBlKCl7aWYoMDxhcmd1bWVudHMubGVuZ3RoKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZilmLmFwcGx5KGcubGIsYXJndW1lbnRzKTtlbHNlIHRocm93IEVycm9yKFwiQ2Fubm90IHdyaXRlIGEgdmFsdWUgdG8gYSBrby5jb21wdXRlZCB1bmxlc3MgeW91IHNwZWNpZnkgYSAnd3JpdGUnIG9wdGlvbi4gSWYgeW91IHdpc2ggdG8gcmVhZCB0aGUgY3VycmVudCB2YWx1ZSwgZG9uJ3QgcGFzcyBhbnkgcGFyYW1ldGVycy5cIik7XG5yZXR1cm4gdGhpc31nLnFhfHxhLnYuYWMoZSk7KGcua2F8fGcuRyYmZS5YYSgpKSYmZS5oYSgpO3JldHVybiBnLlh9XCJvYmplY3RcIj09PXR5cGVvZiBiP2Q9YjooZD1kfHx7fSxiJiYoZC5yZWFkPWIpKTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBkLnJlYWQpdGhyb3cgRXJyb3IoXCJQYXNzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUga28uY29tcHV0ZWRcIik7dmFyIGY9ZC53cml0ZSxnPXtYOnAscmE6ITAsa2E6ITAscGI6ITEsaGM6ITEscWE6ITEsdmI6ITEsRzohMSxWYzpkLnJlYWQsbGI6Y3x8ZC5vd25lcixsOmQuZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkfHxkLmx8fG51bGwsU2E6ZC5kaXNwb3NlV2hlbnx8ZC5TYSxRYjpudWxsLEY6e30sVjowLEhjOm51bGx9O2VbdF09ZztlLk1jPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBmO2EuYS5CYXx8YS5hLmV4dGVuZChlLGEuUi5mbik7YS5SLmZuLm9iKGUpO2EuYS56YihlLEMpO2QucHVyZT8oZy52Yj0hMCxnLkc9ITAsXG5hLmEuZXh0ZW5kKGUsZGEpKTpkLmRlZmVyRXZhbHVhdGlvbiYmYS5hLmV4dGVuZChlLGVhKTthLm9wdGlvbnMuZGVmZXJVcGRhdGVzJiZhLlRhLmRlZmVycmVkKGUsITApO2cubCYmKGcuaGM9ITAsZy5sLm5vZGVUeXBlfHwoZy5sPW51bGwpKTtnLkd8fGQuZGVmZXJFdmFsdWF0aW9ufHxlLmhhKCk7Zy5sJiZlLmphKCkmJmEuYS5JLnphKGcubCxnLlFiPWZ1bmN0aW9uKCl7ZS5zKCl9KTtyZXR1cm4gZX07dmFyIEM9e2VxdWFsaXR5Q29tcGFyZXI6SyxwYTpmdW5jdGlvbigpe3JldHVybiB0aGlzW3RdLlZ9LFZhOmZ1bmN0aW9uKCl7dmFyIGI9W107YS5hLk8odGhpc1t0XS5GLGZ1bmN0aW9uKGEsZCl7YltkLkxhXT1kLmRhfSk7cmV0dXJuIGJ9LFViOmZ1bmN0aW9uKGIpe2lmKCF0aGlzW3RdLlYpcmV0dXJuITE7dmFyIGM9dGhpcy5WYSgpO3JldHVybi0xIT09YS5hLkEoYyxiKT8hMDohIWEuYS5MYihjLGZ1bmN0aW9uKGEpe3JldHVybiBhLlViJiZhLlViKGIpfSl9LHRjOmZ1bmN0aW9uKGEsXG5jLGQpe2lmKHRoaXNbdF0udmImJmM9PT10aGlzKXRocm93IEVycm9yKFwiQSAncHVyZScgY29tcHV0ZWQgbXVzdCBub3QgYmUgY2FsbGVkIHJlY3Vyc2l2ZWx5XCIpO3RoaXNbdF0uRlthXT1kO2QuTGE9dGhpc1t0XS5WKys7ZC5NYT1jLm1iKCl9LFhhOmZ1bmN0aW9uKCl7dmFyIGEsYyxkPXRoaXNbdF0uRjtmb3IoYSBpbiBkKWlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkLGEpJiYoYz1kW2FdLHRoaXMuSmEmJmMuZGEuS2F8fGMuZGEuQ2QoYy5NYSkpKXJldHVybiEwfSxJZDpmdW5jdGlvbigpe3RoaXMuSmEmJiF0aGlzW3RdLnBiJiZ0aGlzLkphKCExKX0samE6ZnVuY3Rpb24oKXt2YXIgYT10aGlzW3RdO3JldHVybiBhLmthfHwwPGEuVn0sUWQ6ZnVuY3Rpb24oKXt0aGlzLkthP3RoaXNbdF0ua2EmJih0aGlzW3RdLnJhPSEwKTp0aGlzLkdjKCl9LFpjOmZ1bmN0aW9uKGEpe2lmKGEuSGIpe3ZhciBjPWEuc3Vic2NyaWJlKHRoaXMuSWQsdGhpcyxcImRpcnR5XCIpLFxuZD1hLnN1YnNjcmliZSh0aGlzLlFkLHRoaXMpO3JldHVybntkYTphLHM6ZnVuY3Rpb24oKXtjLnMoKTtkLnMoKX19fXJldHVybiBhLnN1YnNjcmliZSh0aGlzLkdjLHRoaXMpfSxHYzpmdW5jdGlvbigpe3ZhciBiPXRoaXMsYz1iLnRocm90dGxlRXZhbHVhdGlvbjtjJiYwPD1jPyhjbGVhclRpbWVvdXQodGhpc1t0XS5IYyksdGhpc1t0XS5IYz1hLmEuc2V0VGltZW91dChmdW5jdGlvbigpe2IuaGEoITApfSxjKSk6Yi5KYT9iLkphKCEwKTpiLmhhKCEwKX0saGE6ZnVuY3Rpb24oYil7dmFyIGM9dGhpc1t0XSxkPWMuU2EsZT0hMTtpZighYy5wYiYmIWMucWEpe2lmKGMubCYmIWEuYS5SYihjLmwpfHxkJiZkKCkpe2lmKCFjLmhjKXt0aGlzLnMoKTtyZXR1cm59fWVsc2UgYy5oYz0hMTtjLnBiPSEwO3RyeXtlPXRoaXMueWQoYil9ZmluYWxseXtjLnBiPSExfXJldHVybiBlfX0seWQ6ZnVuY3Rpb24oYil7dmFyIGM9dGhpc1t0XSxkPSExLGU9Yy52Yj9wOiFjLlYsZD17cGQ6dGhpcyxrYjpjLkYsXG5QYjpjLlZ9O2Eudi53Yyh7b2Q6ZCxuZDpiYSxvOnRoaXMscmI6ZX0pO2MuRj17fTtjLlY9MDt2YXIgZj10aGlzLnhkKGMsZCk7Yy5WP2Q9dGhpcy5xYihjLlgsZik6KHRoaXMucygpLGQ9ITApO2QmJihjLkc/dGhpcy5HYigpOnRoaXMubm90aWZ5U3Vic2NyaWJlcnMoYy5YLFwiYmVmb3JlQ2hhbmdlXCIpLGMuWD1mLHRoaXMubm90aWZ5U3Vic2NyaWJlcnMoYy5YLFwic3BlY3RhdGVcIiksIWMuRyYmYiYmdGhpcy5ub3RpZnlTdWJzY3JpYmVycyhjLlgpLHRoaXMucWMmJnRoaXMucWMoKSk7ZSYmdGhpcy5ub3RpZnlTdWJzY3JpYmVycyhjLlgsXCJhd2FrZVwiKTtyZXR1cm4gZH0seGQ6ZnVuY3Rpb24oYixjKXt0cnl7dmFyIGQ9Yi5WYztyZXR1cm4gYi5sYj9kLmNhbGwoYi5sYik6ZCgpfWZpbmFsbHl7YS52LmVuZCgpLGMuUGImJiFiLkcmJmEuYS5PKGMua2IsYWEpLGIucmE9Yi5rYT0hMX19LHc6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpc1t0XTsoYy5rYSYmKGF8fCFjLlYpfHxjLkcmJnRoaXMuWGEoKSkmJlxudGhpcy5oYSgpO3JldHVybiBjLlh9LHRiOmZ1bmN0aW9uKGIpe2EuUi5mbi50Yi5jYWxsKHRoaXMsYik7dGhpcy5tYz1mdW5jdGlvbigpe3RoaXNbdF0uR3x8KHRoaXNbdF0ucmE/dGhpcy5oYSgpOnRoaXNbdF0ua2E9ITEpO3JldHVybiB0aGlzW3RdLlh9O3RoaXMuSmE9ZnVuY3Rpb24oYSl7dGhpcy5vYyh0aGlzW3RdLlgpO3RoaXNbdF0ua2E9ITA7YSYmKHRoaXNbdF0ucmE9ITApO3RoaXMucGModGhpcywhYSl9fSxzOmZ1bmN0aW9uKCl7dmFyIGI9dGhpc1t0XTshYi5HJiZiLkYmJmEuYS5PKGIuRixmdW5jdGlvbihhLGIpe2IucyYmYi5zKCl9KTtiLmwmJmIuUWImJmEuYS5JLnhiKGIubCxiLlFiKTtiLkY9cDtiLlY9MDtiLnFhPSEwO2IucmE9ITE7Yi5rYT0hMTtiLkc9ITE7Yi5sPXA7Yi5TYT1wO2IuVmM9cDt0aGlzLk1jfHwoYi5sYj1wKX19LGRhPXtRYTpmdW5jdGlvbihiKXt2YXIgYz10aGlzLGQ9Y1t0XTtpZighZC5xYSYmZC5HJiZcImNoYW5nZVwiPT1iKXtkLkc9ITE7aWYoZC5yYXx8XG5jLlhhKCkpZC5GPW51bGwsZC5WPTAsYy5oYSgpJiZjLkdiKCk7ZWxzZXt2YXIgZT1bXTthLmEuTyhkLkYsZnVuY3Rpb24oYSxiKXtlW2IuTGFdPWF9KTthLmEuQyhlLGZ1bmN0aW9uKGEsYil7dmFyIGU9ZC5GW2FdLG09Yy5aYyhlLmRhKTttLkxhPWI7bS5NYT1lLk1hO2QuRlthXT1tfSk7Yy5YYSgpJiZjLmhhKCkmJmMuR2IoKX1kLnFhfHxjLm5vdGlmeVN1YnNjcmliZXJzKGQuWCxcImF3YWtlXCIpfX0sY2I6ZnVuY3Rpb24oYil7dmFyIGM9dGhpc1t0XTtjLnFhfHxcImNoYW5nZVwiIT1ifHx0aGlzLldhKFwiY2hhbmdlXCIpfHwoYS5hLk8oYy5GLGZ1bmN0aW9uKGEsYil7Yi5zJiYoYy5GW2FdPXtkYTpiLmRhLExhOmIuTGEsTWE6Yi5NYX0sYi5zKCkpfSksYy5HPSEwLHRoaXMubm90aWZ5U3Vic2NyaWJlcnMocCxcImFzbGVlcFwiKSl9LG1iOmZ1bmN0aW9uKCl7dmFyIGI9dGhpc1t0XTtiLkcmJihiLnJhfHx0aGlzLlhhKCkpJiZ0aGlzLmhhKCk7cmV0dXJuIGEuUi5mbi5tYi5jYWxsKHRoaXMpfX0sXG5lYT17UWE6ZnVuY3Rpb24oYSl7XCJjaGFuZ2VcIiE9YSYmXCJiZWZvcmVDaGFuZ2VcIiE9YXx8dGhpcy53KCl9fTthLmEuQmEmJmEuYS5zZXRQcm90b3R5cGVPZihDLGEuUi5mbik7dmFyIE49YS5zYS5OYTtDW05dPWEubzthLk5jPWZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJmFbTl09PT1DW05dfTthLkVkPWZ1bmN0aW9uKGIpe3JldHVybiBhLk5jKGIpJiZiW3RdJiZiW3RdLnZifTthLmIoXCJjb21wdXRlZFwiLGEubyk7YS5iKFwiZGVwZW5kZW50T2JzZXJ2YWJsZVwiLGEubyk7YS5iKFwiaXNDb21wdXRlZFwiLGEuTmMpO2EuYihcImlzUHVyZUNvbXB1dGVkXCIsYS5FZCk7YS5iKFwiY29tcHV0ZWQuZm5cIixDKTthLkooQyxcInBlZWtcIixDLncpO2EuSihDLFwiZGlzcG9zZVwiLEMucyk7YS5KKEMsXCJpc0FjdGl2ZVwiLEMuamEpO2EuSihDLFwiZ2V0RGVwZW5kZW5jaWVzQ291bnRcIixDLnBhKTthLkooQyxcImdldERlcGVuZGVuY2llc1wiLEMuVmEpO2Eud2I9ZnVuY3Rpb24oYixjKXtpZihcImZ1bmN0aW9uXCI9PT1cbnR5cGVvZiBiKXJldHVybiBhLm8oYixjLHtwdXJlOiEwfSk7Yj1hLmEuZXh0ZW5kKHt9LGIpO2IucHVyZT0hMDtyZXR1cm4gYS5vKGIsYyl9O2EuYihcInB1cmVDb21wdXRlZFwiLGEud2IpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSxmLGcpe2c9Z3x8bmV3IGQ7YT1mKGEpO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBhfHxudWxsPT09YXx8YT09PXB8fGEgaW5zdGFuY2VvZiBSZWdFeHB8fGEgaW5zdGFuY2VvZiBEYXRlfHxhIGluc3RhbmNlb2YgU3RyaW5nfHxhIGluc3RhbmNlb2YgTnVtYmVyfHxhIGluc3RhbmNlb2YgQm9vbGVhbilyZXR1cm4gYTt2YXIgaD1hIGluc3RhbmNlb2YgQXJyYXk/W106e307Zy5zYXZlKGEsaCk7YyhhLGZ1bmN0aW9uKGMpe3ZhciBkPWYoYVtjXSk7c3dpdGNoKHR5cGVvZiBkKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcImZ1bmN0aW9uXCI6aFtjXT1kO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjpjYXNlIFwidW5kZWZpbmVkXCI6dmFyIGs9XG5nLmdldChkKTtoW2NdPWshPT1wP2s6YihkLGYsZyl9fSk7cmV0dXJuIGh9ZnVuY3Rpb24gYyhhLGIpe2lmKGEgaW5zdGFuY2VvZiBBcnJheSl7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspYihjKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnRvSlNPTiYmYihcInRvSlNPTlwiKX1lbHNlIGZvcihjIGluIGEpYihjKX1mdW5jdGlvbiBkKCl7dGhpcy5rZXlzPVtdO3RoaXMudmFsdWVzPVtdfWEuJGM9ZnVuY3Rpb24oYyl7aWYoMD09YXJndW1lbnRzLmxlbmd0aCl0aHJvdyBFcnJvcihcIldoZW4gY2FsbGluZyBrby50b0pTLCBwYXNzIHRoZSBvYmplY3QgeW91IHdhbnQgdG8gY29udmVydC5cIik7cmV0dXJuIGIoYyxmdW5jdGlvbihiKXtmb3IodmFyIGM9MDthLk4oYikmJjEwPmM7YysrKWI9YigpO3JldHVybiBifSl9O2EudG9KU09OPWZ1bmN0aW9uKGIsYyxkKXtiPWEuJGMoYik7cmV0dXJuIGEuYS5mYyhiLGMsZCl9O2QucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpkLHNhdmU6ZnVuY3Rpb24oYixcbmMpe3ZhciBkPWEuYS5BKHRoaXMua2V5cyxiKTswPD1kP3RoaXMudmFsdWVzW2RdPWM6KHRoaXMua2V5cy5wdXNoKGIpLHRoaXMudmFsdWVzLnB1c2goYykpfSxnZXQ6ZnVuY3Rpb24oYil7Yj1hLmEuQSh0aGlzLmtleXMsYik7cmV0dXJuIDA8PWI/dGhpcy52YWx1ZXNbYl06cH19fSkoKTthLmIoXCJ0b0pTXCIsYS4kYyk7YS5iKFwidG9KU09OXCIsYS50b0pTT04pO2EuVmQ9ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGUoYyl7dmFyIGU9YS53YihiLGQpLmV4dGVuZCh7R2E6XCJhbHdheXNcIn0pLGg9ZS5zdWJzY3JpYmUoZnVuY3Rpb24oYSl7YSYmKGgucygpLGMoYSkpfSk7ZS5ub3RpZnlTdWJzY3JpYmVycyhlLncoKSk7cmV0dXJuIGh9cmV0dXJuXCJmdW5jdGlvblwiIT09dHlwZW9mIFByb21pc2V8fGM/ZShjLmJpbmQoZCkpOm5ldyBQcm9taXNlKGUpfTthLmIoXCJ3aGVuXCIsYS5WZCk7KGZ1bmN0aW9uKCl7YS51PXtMOmZ1bmN0aW9uKGIpe3N3aXRjaChhLmEuUChiKSl7Y2FzZSBcIm9wdGlvblwiOnJldHVybiEwPT09XG5iLl9fa29fX2hhc0RvbURhdGFPcHRpb25WYWx1ZV9fP2EuYS5nLmdldChiLGEuZi5vcHRpb25zLlliKTo3Pj1hLmEuVz9iLmdldEF0dHJpYnV0ZU5vZGUoXCJ2YWx1ZVwiKSYmYi5nZXRBdHRyaWJ1dGVOb2RlKFwidmFsdWVcIikuc3BlY2lmaWVkP2IudmFsdWU6Yi50ZXh0OmIudmFsdWU7Y2FzZSBcInNlbGVjdFwiOnJldHVybiAwPD1iLnNlbGVjdGVkSW5kZXg/YS51LkwoYi5vcHRpb25zW2Iuc2VsZWN0ZWRJbmRleF0pOnA7ZGVmYXVsdDpyZXR1cm4gYi52YWx1ZX19LHlhOmZ1bmN0aW9uKGIsYyxkKXtzd2l0Y2goYS5hLlAoYikpe2Nhc2UgXCJvcHRpb25cIjpcInN0cmluZ1wiPT09dHlwZW9mIGM/KGEuYS5nLnNldChiLGEuZi5vcHRpb25zLlliLHApLFwiX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX19cImluIGImJmRlbGV0ZSBiLl9fa29fX2hhc0RvbURhdGFPcHRpb25WYWx1ZV9fLGIudmFsdWU9Yyk6KGEuYS5nLnNldChiLGEuZi5vcHRpb25zLlliLGMpLGIuX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX189XG4hMCxiLnZhbHVlPVwibnVtYmVyXCI9PT10eXBlb2YgYz9jOlwiXCIpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjppZihcIlwiPT09Y3x8bnVsbD09PWMpYz1wO2Zvcih2YXIgZT0tMSxmPTAsZz1iLm9wdGlvbnMubGVuZ3RoLGg7ZjxnOysrZilpZihoPWEudS5MKGIub3B0aW9uc1tmXSksaD09Y3x8XCJcIj09PWgmJmM9PT1wKXtlPWY7YnJlYWt9aWYoZHx8MDw9ZXx8Yz09PXAmJjE8Yi5zaXplKWIuc2VsZWN0ZWRJbmRleD1lLDY9PT1hLmEuVyYmYS5hLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtiLnNlbGVjdGVkSW5kZXg9ZX0sMCk7YnJlYWs7ZGVmYXVsdDppZihudWxsPT09Y3x8Yz09PXApYz1cIlwiO2IudmFsdWU9Y319fX0pKCk7YS5iKFwic2VsZWN0RXh0ZW5zaW9uc1wiLGEudSk7YS5iKFwic2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWVcIixhLnUuTCk7YS5iKFwic2VsZWN0RXh0ZW5zaW9ucy53cml0ZVZhbHVlXCIsYS51LnlhKTthLm09ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIpe2I9YS5hLkNiKGIpOzEyMz09PWIuY2hhckNvZGVBdCgwKSYmXG4oYj1iLnNsaWNlKDEsLTEpKTtiKz1cIlxcbixcIjt2YXIgYz1bXSxkPWIubWF0Y2goZSkscSxuPVtdLGg9MDtpZigxPGQubGVuZ3RoKXtmb3IodmFyIHk9MCxBO0E9ZFt5XTsrK3kpe3ZhciB1PUEuY2hhckNvZGVBdCgwKTtpZig0ND09PXUpe2lmKDA+PWgpe2MucHVzaChxJiZuLmxlbmd0aD97a2V5OnEsdmFsdWU6bi5qb2luKFwiXCIpfTp7dW5rbm93bjpxfHxuLmpvaW4oXCJcIil9KTtxPWg9MDtuPVtdO2NvbnRpbnVlfX1lbHNlIGlmKDU4PT09dSl7aWYoIWgmJiFxJiYxPT09bi5sZW5ndGgpe3E9bi5wb3AoKTtjb250aW51ZX19ZWxzZSBpZig0Nz09PXUmJjE8QS5sZW5ndGgmJig0Nz09PUEuY2hhckNvZGVBdCgxKXx8NDI9PT1BLmNoYXJDb2RlQXQoMSkpKWNvbnRpbnVlO2Vsc2UgNDc9PT11JiZ5JiYxPEEubGVuZ3RoPyh1PWRbeS0xXS5tYXRjaChmKSkmJiFnW3VbMF1dJiYoYj1iLnN1YnN0cihiLmluZGV4T2YoQSkrMSksZD1iLm1hdGNoKGUpLHk9LTEsQT1cIi9cIik6NDA9PT11fHwxMjM9PT1cbnV8fDkxPT09dT8rK2g6NDE9PT11fHwxMjU9PT11fHw5Mz09PXU/LS1oOnF8fG4ubGVuZ3RofHwzNCE9PXUmJjM5IT09dXx8KEE9QS5zbGljZSgxLC0xKSk7bi5wdXNoKEEpfWlmKDA8aCl0aHJvdyBFcnJvcihcIlVuYmFsYW5jZWQgcGFyZW50aGVzZXMsIGJyYWNlcywgb3IgYnJhY2tldHNcIik7fXJldHVybiBjfXZhciBjPVtcInRydWVcIixcImZhbHNlXCIsXCJudWxsXCIsXCJ1bmRlZmluZWRcIl0sZD0vXig/OlskX2Etel1bJFxcd10qfCguKykoXFwuXFxzKlskX2Etel1bJFxcd10qfFxcWy4rXFxdKSkkL2ksZT1SZWdFeHAoXCJcXFwiKD86XFxcXFxcXFwufFteXFxcIl0pKlxcXCJ8Jyg/OlxcXFxcXFxcLnxbXiddKSonfGAoPzpcXFxcXFxcXC58W15gXSkqYHwvXFxcXCooPzpbXipdfFxcXFwqK1teKi9dKSpcXFxcKisvfC8vLipcXG58Lyg/OlxcXFxcXFxcLnxbXi9dKSsvdyp8W15cXFxcczosL11bXixcXFwiJ2B7fSgpLzpbXFxcXF1dKlteXFxcXHMsXFxcIidge30oKS86W1xcXFxdXXxbXlxcXFxzXVwiLFwiZ1wiKSxmPS9bXFxdKVwiJ0EtWmEtejAtOV8kXSskLyxnPXtcImluXCI6MSxcInJldHVyblwiOjEsXG5cInR5cGVvZlwiOjF9LGg9e307cmV0dXJue1JhOltdLHZhOmgsWmI6Yix1YjpmdW5jdGlvbihlLGYpe2Z1bmN0aW9uIGsoYixlKXt2YXIgZjtpZigheSl7dmFyIGw9YS5nZXRCaW5kaW5nSGFuZGxlcihiKTtpZihsJiZsLnByZXByb2Nlc3MmJiEoZT1sLnByZXByb2Nlc3MoZSxiLGspKSlyZXR1cm47aWYobD1oW2JdKWY9ZSwwPD1hLmEuQShjLGYpP2Y9ITE6KGw9Zi5tYXRjaChkKSxmPW51bGw9PT1sPyExOmxbMV0/XCJPYmplY3QoXCIrbFsxXStcIilcIitsWzJdOmYpLGw9ZjtsJiZuLnB1c2goXCInXCIrKFwic3RyaW5nXCI9PXR5cGVvZiBoW2JdP2hbYl06YikrXCInOmZ1bmN0aW9uKF96KXtcIitmK1wiPV96fVwiKX1nJiYoZT1cImZ1bmN0aW9uKCl7cmV0dXJuIFwiK2UrXCIgfVwiKTtxLnB1c2goXCInXCIrYitcIic6XCIrZSl9Zj1mfHx7fTt2YXIgcT1bXSxuPVtdLGc9Zi52YWx1ZUFjY2Vzc29ycyx5PWYuYmluZGluZ1BhcmFtcyxBPVwic3RyaW5nXCI9PT10eXBlb2YgZT9iKGUpOmU7YS5hLkMoQSxmdW5jdGlvbihhKXtrKGEua2V5fHxcbmEudW5rbm93bixhLnZhbHVlKX0pO24ubGVuZ3RoJiZrKFwiX2tvX3Byb3BlcnR5X3dyaXRlcnNcIixcIntcIituLmpvaW4oXCIsXCIpK1wiIH1cIik7cmV0dXJuIHEuam9pbihcIixcIil9LEhkOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspaWYoYVtjXS5rZXk9PWIpcmV0dXJuITA7cmV0dXJuITF9LCRhOmZ1bmN0aW9uKGIsYyxkLGUsZil7aWYoYiYmYS5OKGIpKSFhLllhKGIpfHxmJiZiLncoKT09PWV8fGIoZSk7ZWxzZSBpZigoYj1jLmdldChcIl9rb19wcm9wZXJ0eV93cml0ZXJzXCIpKSYmYltkXSliW2RdKGUpfX19KCk7YS5iKFwiZXhwcmVzc2lvblJld3JpdGluZ1wiLGEubSk7YS5iKFwiZXhwcmVzc2lvblJld3JpdGluZy5iaW5kaW5nUmV3cml0ZVZhbGlkYXRvcnNcIixhLm0uUmEpO2EuYihcImV4cHJlc3Npb25SZXdyaXRpbmcucGFyc2VPYmplY3RMaXRlcmFsXCIsYS5tLlpiKTthLmIoXCJleHByZXNzaW9uUmV3cml0aW5nLnByZVByb2Nlc3NCaW5kaW5nc1wiLGEubS51Yik7YS5iKFwiZXhwcmVzc2lvblJld3JpdGluZy5fdHdvV2F5QmluZGluZ3NcIixcbmEubS52YSk7YS5iKFwianNvbkV4cHJlc3Npb25SZXdyaXRpbmdcIixhLm0pO2EuYihcImpzb25FeHByZXNzaW9uUmV3cml0aW5nLmluc2VydFByb3BlcnR5QWNjZXNzb3JzSW50b0pzb25cIixhLm0udWIpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSl7cmV0dXJuIDg9PWEubm9kZVR5cGUmJmcudGVzdChmP2EudGV4dDphLm5vZGVWYWx1ZSl9ZnVuY3Rpb24gYyhhKXtyZXR1cm4gOD09YS5ub2RlVHlwZSYmaC50ZXN0KGY/YS50ZXh0OmEubm9kZVZhbHVlKX1mdW5jdGlvbiBkKGQsZSl7Zm9yKHZhciBmPWQsZz0xLGg9W107Zj1mLm5leHRTaWJsaW5nOyl7aWYoYyhmKSYmKGEuYS5nLnNldChmLGwsITApLGctLSwwPT09ZykpcmV0dXJuIGg7aC5wdXNoKGYpO2IoZikmJmcrK31pZighZSl0aHJvdyBFcnJvcihcIkNhbm5vdCBmaW5kIGNsb3NpbmcgY29tbWVudCB0YWcgdG8gbWF0Y2g6IFwiK2Qubm9kZVZhbHVlKTtyZXR1cm4gbnVsbH1mdW5jdGlvbiBlKGEsYil7dmFyIGM9ZChhLGIpO3JldHVybiBjP1xuMDxjLmxlbmd0aD9jW2MubGVuZ3RoLTFdLm5leHRTaWJsaW5nOmEubmV4dFNpYmxpbmc6bnVsbH12YXIgZj13JiZcIlxceDNjIS0tdGVzdC0tXFx4M2VcIj09PXcuY3JlYXRlQ29tbWVudChcInRlc3RcIikudGV4dCxnPWY/L15cXHgzYyEtLVxccyprbyg/OlxccysoW1xcc1xcU10rKSk/XFxzKi0tXFx4M2UkLzovXlxccyprbyg/OlxccysoW1xcc1xcU10rKSk/XFxzKiQvLGg9Zj8vXlxceDNjIS0tXFxzKlxcL2tvXFxzKi0tXFx4M2UkLzovXlxccypcXC9rb1xccyokLyxtPXt1bDohMCxvbDohMH0sbD1cIl9fa29fbWF0Y2hlZEVuZENvbW1lbnRfX1wiO2EuaD17ZWE6e30sY2hpbGROb2RlczpmdW5jdGlvbihhKXtyZXR1cm4gYihhKT9kKGEpOmEuY2hpbGROb2Rlc30sRWE6ZnVuY3Rpb24oYyl7aWYoYihjKSl7Yz1hLmguY2hpbGROb2RlcyhjKTtmb3IodmFyIGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspYS5yZW1vdmVOb2RlKGNbZF0pfWVsc2UgYS5hLlNiKGMpfSx1YTpmdW5jdGlvbihjLGQpe2lmKGIoYykpe2EuaC5FYShjKTtmb3IodmFyIGU9XG5jLm5leHRTaWJsaW5nLGY9MCxsPWQubGVuZ3RoO2Y8bDtmKyspZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkW2ZdLGUpfWVsc2UgYS5hLnVhKGMsZCl9LFVjOmZ1bmN0aW9uKGEsYyl7YihhKT9hLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGMsYS5uZXh0U2libGluZyk6YS5maXJzdENoaWxkP2EuaW5zZXJ0QmVmb3JlKGMsYS5maXJzdENoaWxkKTphLmFwcGVuZENoaWxkKGMpfSxWYjpmdW5jdGlvbihjLGQsZSl7ZT9iKGMpP2MucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZCxlLm5leHRTaWJsaW5nKTplLm5leHRTaWJsaW5nP2MuaW5zZXJ0QmVmb3JlKGQsZS5uZXh0U2libGluZyk6Yy5hcHBlbmRDaGlsZChkKTphLmguVWMoYyxkKX0sZmlyc3RDaGlsZDpmdW5jdGlvbihhKXtpZihiKGEpKXJldHVybiFhLm5leHRTaWJsaW5nfHxjKGEubmV4dFNpYmxpbmcpP251bGw6YS5uZXh0U2libGluZztpZihhLmZpcnN0Q2hpbGQmJmMoYS5maXJzdENoaWxkKSl0aHJvdyBFcnJvcihcIkZvdW5kIGludmFsaWQgZW5kIGNvbW1lbnQsIGFzIHRoZSBmaXJzdCBjaGlsZCBvZiBcIitcbmEpO3JldHVybiBhLmZpcnN0Q2hpbGR9LG5leHRTaWJsaW5nOmZ1bmN0aW9uKGQpe2IoZCkmJihkPWUoZCkpO2lmKGQubmV4dFNpYmxpbmcmJmMoZC5uZXh0U2libGluZykpe3ZhciBmPWQubmV4dFNpYmxpbmc7aWYoYyhmKSYmIWEuYS5nLmdldChmLGwpKXRocm93IEVycm9yKFwiRm91bmQgZW5kIGNvbW1lbnQgd2l0aG91dCBhIG1hdGNoaW5nIG9wZW5pbmcgY29tbWVudCwgYXMgY2hpbGQgb2YgXCIrZCk7cmV0dXJuIG51bGx9cmV0dXJuIGQubmV4dFNpYmxpbmd9LEJkOmIsVWQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9KGY/YS50ZXh0OmEubm9kZVZhbHVlKS5tYXRjaChnKSk/YVsxXTpudWxsfSxSYzpmdW5jdGlvbihkKXtpZihtW2EuYS5QKGQpXSl7dmFyIGY9ZC5maXJzdENoaWxkO2lmKGYpe2RvIGlmKDE9PT1mLm5vZGVUeXBlKXt2YXIgbDtsPWYuZmlyc3RDaGlsZDt2YXIgZz1udWxsO2lmKGwpe2RvIGlmKGcpZy5wdXNoKGwpO2Vsc2UgaWYoYihsKSl7dmFyIGg9ZShsLCEwKTtoP2w9XG5oOmc9W2xdfWVsc2UgYyhsKSYmKGc9W2xdKTt3aGlsZShsPWwubmV4dFNpYmxpbmcpfWlmKGw9Zylmb3IoZz1mLm5leHRTaWJsaW5nLGg9MDtoPGwubGVuZ3RoO2grKylnP2QuaW5zZXJ0QmVmb3JlKGxbaF0sZyk6ZC5hcHBlbmRDaGlsZChsW2hdKX13aGlsZShmPWYubmV4dFNpYmxpbmcpfX19fX0pKCk7YS5iKFwidmlydHVhbEVsZW1lbnRzXCIsYS5oKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMuYWxsb3dlZEJpbmRpbmdzXCIsYS5oLmVhKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMuZW1wdHlOb2RlXCIsYS5oLkVhKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMuaW5zZXJ0QWZ0ZXJcIixhLmguVmIpO2EuYihcInZpcnR1YWxFbGVtZW50cy5wcmVwZW5kXCIsYS5oLlVjKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMuc2V0RG9tTm9kZUNoaWxkcmVuXCIsYS5oLnVhKTsoZnVuY3Rpb24oKXthLmdhPWZ1bmN0aW9uKCl7dGhpcy5tZD17fX07YS5hLmV4dGVuZChhLmdhLnByb3RvdHlwZSx7bm9kZUhhc0JpbmRpbmdzOmZ1bmN0aW9uKGIpe3N3aXRjaChiLm5vZGVUeXBlKXtjYXNlIDE6cmV0dXJuIG51bGwhPVxuYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJpbmRcIil8fGEuaS5nZXRDb21wb25lbnROYW1lRm9yTm9kZShiKTtjYXNlIDg6cmV0dXJuIGEuaC5CZChiKTtkZWZhdWx0OnJldHVybiExfX0sZ2V0QmluZGluZ3M6ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLmdldEJpbmRpbmdzU3RyaW5nKGIsYyksZD1kP3RoaXMucGFyc2VCaW5kaW5nc1N0cmluZyhkLGMsYik6bnVsbDtyZXR1cm4gYS5pLnNjKGQsYixjLCExKX0sZ2V0QmluZGluZ0FjY2Vzc29yczpmdW5jdGlvbihiLGMpe3ZhciBkPXRoaXMuZ2V0QmluZGluZ3NTdHJpbmcoYixjKSxkPWQ/dGhpcy5wYXJzZUJpbmRpbmdzU3RyaW5nKGQsYyxiLHt2YWx1ZUFjY2Vzc29yczohMH0pOm51bGw7cmV0dXJuIGEuaS5zYyhkLGIsYywhMCl9LGdldEJpbmRpbmdzU3RyaW5nOmZ1bmN0aW9uKGIpe3N3aXRjaChiLm5vZGVUeXBlKXtjYXNlIDE6cmV0dXJuIGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1iaW5kXCIpO2Nhc2UgODpyZXR1cm4gYS5oLlVkKGIpO2RlZmF1bHQ6cmV0dXJuIG51bGx9fSxcbnBhcnNlQmluZGluZ3NTdHJpbmc6ZnVuY3Rpb24oYixjLGQsZSl7dHJ5e3ZhciBmPXRoaXMubWQsZz1iKyhlJiZlLnZhbHVlQWNjZXNzb3JzfHxcIlwiKSxoO2lmKCEoaD1mW2ddKSl7dmFyIG0sbD1cIndpdGgoJGNvbnRleHQpe3dpdGgoJGRhdGF8fHt9KXtyZXR1cm57XCIrYS5tLnViKGIsZSkrXCJ9fX1cIjttPW5ldyBGdW5jdGlvbihcIiRjb250ZXh0XCIsXCIkZWxlbWVudFwiLGwpO2g9ZltnXT1tfXJldHVybiBoKGMsZCl9Y2F0Y2goayl7dGhyb3cgay5tZXNzYWdlPVwiVW5hYmxlIHRvIHBhcnNlIGJpbmRpbmdzLlxcbkJpbmRpbmdzIHZhbHVlOiBcIitiK1wiXFxuTWVzc2FnZTogXCIray5tZXNzYWdlLGs7fX19KTthLmdhLmluc3RhbmNlPW5ldyBhLmdhfSkoKTthLmIoXCJiaW5kaW5nUHJvdmlkZXJcIixhLmdhKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIpe3ZhciBjPShiPWEuYS5nLmdldChiLEIpKSYmYi5NO2MmJihiLk09bnVsbCxjLlNjKCkpfWZ1bmN0aW9uIGMoYyxkLGUpe3RoaXMubm9kZT1jO3RoaXMueGM9XG5kO3RoaXMuaWI9W107dGhpcy5UPSExO2QuTXx8YS5hLkkuemEoYyxiKTtlJiZlLk0mJihlLk0uaWIucHVzaChjKSx0aGlzLktiPWUpfWZ1bmN0aW9uIGQoYSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGF9fWZ1bmN0aW9uIGUoYSl7cmV0dXJuIGEoKX1mdW5jdGlvbiBmKGIpe3JldHVybiBhLmEuSGEoYS52LksoYiksZnVuY3Rpb24oYSxjKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYigpW2NdfX0pfWZ1bmN0aW9uIGcoYixjLGUpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2YoYi5iaW5kKG51bGwsYyxlKSk6YS5hLkhhKGIsZCl9ZnVuY3Rpb24gaChhLGIpe3JldHVybiBmKHRoaXMuZ2V0QmluZGluZ3MuYmluZCh0aGlzLGEsYikpfWZ1bmN0aW9uIG0oYixjKXt2YXIgZD1hLmguZmlyc3RDaGlsZChjKTtpZihkKXt2YXIgZSxmPWEuZ2EuaW5zdGFuY2Usaz1mLnByZXByb2Nlc3NOb2RlO2lmKGspe2Zvcig7ZT1kOylkPWEuaC5uZXh0U2libGluZyhlKSxrLmNhbGwoZixlKTtcbmQ9YS5oLmZpcnN0Q2hpbGQoYyl9Zm9yKDtlPWQ7KWQ9YS5oLm5leHRTaWJsaW5nKGUpLGwoYixlKX1hLmouR2EoYyxhLmouVCl9ZnVuY3Rpb24gbChiLGMpe3ZhciBkPWIsZT0xPT09Yy5ub2RlVHlwZTtlJiZhLmguUmMoYyk7aWYoZXx8YS5nYS5pbnN0YW5jZS5ub2RlSGFzQmluZGluZ3MoYykpZD1xKGMsbnVsbCxiKS5iaW5kaW5nQ29udGV4dEZvckRlc2NlbmRhbnRzO2QmJiF1W2EuYS5QKGMpXSYmbShkLGMpfWZ1bmN0aW9uIGsoYil7dmFyIGM9W10sZD17fSxlPVtdO2EuYS5PKGIsZnVuY3Rpb24gY2EoZil7aWYoIWRbZl0pe3ZhciBsPWEuZ2V0QmluZGluZ0hhbmRsZXIoZik7bCYmKGwuYWZ0ZXImJihlLnB1c2goZiksYS5hLkMobC5hZnRlcixmdW5jdGlvbihjKXtpZihiW2NdKXtpZigtMSE9PWEuYS5BKGUsYykpdGhyb3cgRXJyb3IoXCJDYW5ub3QgY29tYmluZSB0aGUgZm9sbG93aW5nIGJpbmRpbmdzLCBiZWNhdXNlIHRoZXkgaGF2ZSBhIGN5Y2xpYyBkZXBlbmRlbmN5OiBcIitlLmpvaW4oXCIsIFwiKSk7XG5jYShjKX19KSxlLmxlbmd0aC0tKSxjLnB1c2goe2tleTpmLExjOmx9KSk7ZFtmXT0hMH19KTtyZXR1cm4gY31mdW5jdGlvbiBxKGIsYyxkKXt2YXIgZj1hLmEuZy5UYihiLEIse30pLGw9Zi5nZDtpZighYyl7aWYobCl0aHJvdyBFcnJvcihcIllvdSBjYW5ub3QgYXBwbHkgYmluZGluZ3MgbXVsdGlwbGUgdGltZXMgdG8gdGhlIHNhbWUgZWxlbWVudC5cIik7Zi5nZD0hMH1sfHwoZi5jb250ZXh0PWQpO3ZhciBnO2lmKGMmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjKWc9YztlbHNle3ZhciBxPWEuZ2EuaW5zdGFuY2Usbj1xLmdldEJpbmRpbmdBY2Nlc3NvcnN8fGgsbT1hLiQoZnVuY3Rpb24oKXtpZihnPWM/YyhkLGIpOm4uY2FsbChxLGIsZCkpe2lmKGRbcl0pZFtyXSgpO2lmKGRbQV0pZFtBXSgpfXJldHVybiBnfSxudWxsLHtsOmJ9KTtnJiZtLmphKCl8fChtPW51bGwpfXZhciB5PWQsdTtpZihnKXt2YXIgSj1mdW5jdGlvbigpe3JldHVybiBhLmEuSGEobT9tKCk6ZyxlKX0sdD1tP2Z1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlKG0oKVthXSl9fTpcbmZ1bmN0aW9uKGEpe3JldHVybiBnW2FdfTtKLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gZ1thXSYmZSh0KGEpKX07Si5oYXM9ZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW4gZ307YS5qLlQgaW4gZyYmYS5qLnN1YnNjcmliZShiLGEuai5ULGZ1bmN0aW9uKCl7dmFyIGM9KDAsZ1thLmouVF0pKCk7aWYoYyl7dmFyIGQ9YS5oLmNoaWxkTm9kZXMoYik7ZC5sZW5ndGgmJmMoZCxhLkRjKGRbMF0pKX19KTthLmoub2EgaW4gZyYmKHk9YS5qLkJiKGIsZCksYS5qLnN1YnNjcmliZShiLGEuai5vYSxmdW5jdGlvbigpe3ZhciBjPSgwLGdbYS5qLm9hXSkoKTtjJiZhLmguZmlyc3RDaGlsZChiKSYmYyhiKX0pKTtmPWsoZyk7YS5hLkMoZixmdW5jdGlvbihjKXt2YXIgZD1jLkxjLmluaXQsZT1jLkxjLnVwZGF0ZSxmPWMua2V5O2lmKDg9PT1iLm5vZGVUeXBlJiYhYS5oLmVhW2ZdKXRocm93IEVycm9yKFwiVGhlIGJpbmRpbmcgJ1wiK2YrXCInIGNhbm5vdCBiZSB1c2VkIHdpdGggdmlydHVhbCBlbGVtZW50c1wiKTtcbnRyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkJiZhLnYuSyhmdW5jdGlvbigpe3ZhciBhPWQoYix0KGYpLEoseS4kZGF0YSx5KTtpZihhJiZhLmNvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzKXtpZih1IT09cCl0aHJvdyBFcnJvcihcIk11bHRpcGxlIGJpbmRpbmdzIChcIit1K1wiIGFuZCBcIitmK1wiKSBhcmUgdHJ5aW5nIHRvIGNvbnRyb2wgZGVzY2VuZGFudCBiaW5kaW5ncyBvZiB0aGUgc2FtZSBlbGVtZW50LiBZb3UgY2Fubm90IHVzZSB0aGVzZSBiaW5kaW5ncyB0b2dldGhlciBvbiB0aGUgc2FtZSBlbGVtZW50LlwiKTt1PWZ9fSksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmYS4kKGZ1bmN0aW9uKCl7ZShiLHQoZiksSix5LiRkYXRhLHkpfSxudWxsLHtsOmJ9KX1jYXRjaChsKXt0aHJvdyBsLm1lc3NhZ2U9J1VuYWJsZSB0byBwcm9jZXNzIGJpbmRpbmcgXCInK2YrXCI6IFwiK2dbZl0rJ1wiXFxuTWVzc2FnZTogJytsLm1lc3NhZ2UsbDt9fSl9Zj11PT09cDtyZXR1cm57c2hvdWxkQmluZERlc2NlbmRhbnRzOmYsXG5iaW5kaW5nQ29udGV4dEZvckRlc2NlbmRhbnRzOmYmJnl9fWZ1bmN0aW9uIG4oYixjKXtyZXR1cm4gYiYmYiBpbnN0YW5jZW9mIGEuZmE/YjpuZXcgYS5mYShiLHAscCxjKX12YXIgcj1hLmEuRGEoXCJfc3Vic2NyaWJhYmxlXCIpLHk9YS5hLkRhKFwiX2FuY2VzdG9yQmluZGluZ0luZm9cIiksQT1hLmEuRGEoXCJfZGF0YURlcGVuZGVuY3lcIik7YS5mPXt9O3ZhciB1PXtzY3JpcHQ6ITAsdGV4dGFyZWE6ITAsdGVtcGxhdGU6ITB9O2EuZ2V0QmluZGluZ0hhbmRsZXI9ZnVuY3Rpb24oYil7cmV0dXJuIGEuZltiXX07dmFyIEo9e307YS5mYT1mdW5jdGlvbihiLGMsZCxlLGYpe2Z1bmN0aW9uIGwoKXt2YXIgYj1xP2goKTpoLGY9YS5hLmMoYik7Yz8oYS5hLmV4dGVuZChrLGMpLHkgaW4gYyYmKGtbeV09Y1t5XSkpOihrLiRwYXJlbnRzPVtdLGsuJHJvb3Q9ZixrLmtvPWEpO2tbcl09bjtnP2Y9ay4kZGF0YTooay4kcmF3RGF0YT1iLGsuJGRhdGE9Zik7ZCYmKGtbZF09Zik7ZSYmZShrLGMsZik7aWYoYyYmXG5jW3JdJiYhYS5VLm8oKS5VYihjW3JdKSljW3JdKCk7bSYmKGtbQV09bSk7cmV0dXJuIGsuJGRhdGF9dmFyIGs9dGhpcyxnPWI9PT1KLGg9Zz9wOmIscT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBoJiYhYS5OKGgpLG4sbT1mJiZmLmRhdGFEZXBlbmRlbmN5O2YmJmYuZXhwb3J0RGVwZW5kZW5jaWVzP2woKToobj1hLndiKGwpLG4udygpLG4uamEoKT9uLmVxdWFsaXR5Q29tcGFyZXI9bnVsbDprW3JdPXApfTthLmZhLnByb3RvdHlwZS5jcmVhdGVDaGlsZENvbnRleHQ9ZnVuY3Rpb24oYixjLGQsZSl7IWUmJmMmJlwib2JqZWN0XCI9PXR5cGVvZiBjJiYoZT1jLGM9ZS5hcyxkPWUuZXh0ZW5kKTtpZihjJiZlJiZlLm5vQ2hpbGRDb250ZXh0KXt2YXIgZj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBiJiYhYS5OKGIpO3JldHVybiBuZXcgYS5mYShKLHRoaXMsbnVsbCxmdW5jdGlvbihhKXtkJiZkKGEpO2FbY109Zj9iKCk6Yn0sZSl9cmV0dXJuIG5ldyBhLmZhKGIsdGhpcyxjLGZ1bmN0aW9uKGEsYil7YS4kcGFyZW50Q29udGV4dD1cbmI7YS4kcGFyZW50PWIuJGRhdGE7YS4kcGFyZW50cz0oYi4kcGFyZW50c3x8W10pLnNsaWNlKDApO2EuJHBhcmVudHMudW5zaGlmdChhLiRwYXJlbnQpO2QmJmQoYSl9LGUpfTthLmZhLnByb3RvdHlwZS5leHRlbmQ9ZnVuY3Rpb24oYixjKXtyZXR1cm4gbmV3IGEuZmEoSix0aGlzLG51bGwsZnVuY3Rpb24oYyl7YS5hLmV4dGVuZChjLFwiZnVuY3Rpb25cIj09dHlwZW9mIGI/YihjKTpiKX0sYyl9O3ZhciBCPWEuYS5nLlooKTtjLnByb3RvdHlwZS5TYz1mdW5jdGlvbigpe3RoaXMuS2ImJnRoaXMuS2IuTSYmdGhpcy5LYi5NLnJkKHRoaXMubm9kZSl9O2MucHJvdG90eXBlLnJkPWZ1bmN0aW9uKGIpe2EuYS5oYih0aGlzLmliLGIpOyF0aGlzLmliLmxlbmd0aCYmdGhpcy5UJiZ0aGlzLkJjKCl9O2MucHJvdG90eXBlLkJjPWZ1bmN0aW9uKCl7dGhpcy5UPSEwO3RoaXMueGMuTSYmIXRoaXMuaWIubGVuZ3RoJiYodGhpcy54Yy5NPW51bGwsYS5hLkkueGIodGhpcy5ub2RlLGIpLGEuai5HYSh0aGlzLm5vZGUsXG5hLmoub2EpLHRoaXMuU2MoKSl9O2Euaj17VDpcImNoaWxkcmVuQ29tcGxldGVcIixvYTpcImRlc2NlbmRhbnRzQ29tcGxldGVcIixzdWJzY3JpYmU6ZnVuY3Rpb24oYixjLGQsZSl7Yj1hLmEuZy5UYihiLEIse30pO2IuRmF8fChiLkZhPW5ldyBhLlIpO3JldHVybiBiLkZhLnN1YnNjcmliZShkLGUsYyl9LEdhOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmcuZ2V0KGIsQik7aWYoZCYmKGQuRmEmJmQuRmEubm90aWZ5U3Vic2NyaWJlcnMoYixjKSxjPT1hLmouVCkpaWYoZC5NKWQuTS5CYygpO2Vsc2UgaWYoZC5NPT09cCYmZC5GYSYmZC5GYS5XYShhLmoub2EpKXRocm93IEVycm9yKFwiZGVzY2VuZGFudHNDb21wbGV0ZSBldmVudCBub3Qgc3VwcG9ydGVkIGZvciBiaW5kaW5ncyBvbiB0aGlzIG5vZGVcIik7fSxCYjpmdW5jdGlvbihiLGQpe3ZhciBlPWEuYS5nLlRiKGIsQix7fSk7ZS5NfHwoZS5NPW5ldyBjKGIsZSxkW3ldKSk7cmV0dXJuIGRbeV09PWU/ZDpkLmV4dGVuZChmdW5jdGlvbihhKXthW3ldPVxuZX0pfX07YS5TZD1mdW5jdGlvbihiKXtyZXR1cm4oYj1hLmEuZy5nZXQoYixCKSkmJmIuY29udGV4dH07YS5lYj1mdW5jdGlvbihiLGMsZCl7MT09PWIubm9kZVR5cGUmJmEuaC5SYyhiKTtyZXR1cm4gcShiLGMsbihkKSl9O2Eua2Q9ZnVuY3Rpb24oYixjLGQpe2Q9bihkKTtyZXR1cm4gYS5lYihiLGcoYyxkLGIpLGQpfTthLlBhPWZ1bmN0aW9uKGEsYil7MSE9PWIubm9kZVR5cGUmJjghPT1iLm5vZGVUeXBlfHxtKG4oYSksYil9O2EudWM9ZnVuY3Rpb24oYSxiLGMpeyF2JiZ6LmpRdWVyeSYmKHY9ei5qUXVlcnkpO2lmKDI+YXJndW1lbnRzLmxlbmd0aCl7aWYoYj13LmJvZHksIWIpdGhyb3cgRXJyb3IoXCJrby5hcHBseUJpbmRpbmdzOiBjb3VsZCBub3QgZmluZCBkb2N1bWVudC5ib2R5OyBoYXMgdGhlIGRvY3VtZW50IGJlZW4gbG9hZGVkP1wiKTt9ZWxzZSBpZighYnx8MSE9PWIubm9kZVR5cGUmJjghPT1iLm5vZGVUeXBlKXRocm93IEVycm9yKFwia28uYXBwbHlCaW5kaW5nczogZmlyc3QgcGFyYW1ldGVyIHNob3VsZCBiZSB5b3VyIHZpZXcgbW9kZWw7IHNlY29uZCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgRE9NIG5vZGVcIik7XG5sKG4oYSxjKSxiKX07YS5DYz1mdW5jdGlvbihiKXtyZXR1cm4hYnx8MSE9PWIubm9kZVR5cGUmJjghPT1iLm5vZGVUeXBlP3A6YS5TZChiKX07YS5EYz1mdW5jdGlvbihiKXtyZXR1cm4oYj1hLkNjKGIpKT9iLiRkYXRhOnB9O2EuYihcImJpbmRpbmdIYW5kbGVyc1wiLGEuZik7YS5iKFwiYmluZGluZ0V2ZW50XCIsYS5qKTthLmIoXCJiaW5kaW5nRXZlbnQuc3Vic2NyaWJlXCIsYS5qLnN1YnNjcmliZSk7YS5iKFwiYmluZGluZ0V2ZW50LnN0YXJ0UG9zc2libHlBc3luY0NvbnRlbnRCaW5kaW5nXCIsYS5qLkJiKTthLmIoXCJhcHBseUJpbmRpbmdzXCIsYS51Yyk7YS5iKFwiYXBwbHlCaW5kaW5nc1RvRGVzY2VuZGFudHNcIixhLlBhKTthLmIoXCJhcHBseUJpbmRpbmdBY2Nlc3NvcnNUb05vZGVcIixhLmViKTthLmIoXCJhcHBseUJpbmRpbmdzVG9Ob2RlXCIsYS5rZCk7YS5iKFwiY29udGV4dEZvclwiLGEuQ2MpO2EuYihcImRhdGFGb3JcIixhLkRjKX0pKCk7KGZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoYyxlKXt2YXIgbD1cbk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmLGMpP2ZbY106YixrO2w/bC5zdWJzY3JpYmUoZSk6KGw9ZltjXT1uZXcgYS5SLGwuc3Vic2NyaWJlKGUpLGQoYyxmdW5jdGlvbihiLGQpe3ZhciBlPSEoIWR8fCFkLnN5bmNocm9ub3VzKTtnW2NdPXtkZWZpbml0aW9uOmIsRmQ6ZX07ZGVsZXRlIGZbY107a3x8ZT9sLm5vdGlmeVN1YnNjcmliZXJzKGIpOmEubWEueWIoZnVuY3Rpb24oKXtsLm5vdGlmeVN1YnNjcmliZXJzKGIpfSl9KSxrPSEwKX1mdW5jdGlvbiBkKGEsYil7ZShcImdldENvbmZpZ1wiLFthXSxmdW5jdGlvbihjKXtjP2UoXCJsb2FkQ29tcG9uZW50XCIsW2EsY10sZnVuY3Rpb24oYSl7YihhLGMpfSk6YihudWxsLG51bGwpfSl9ZnVuY3Rpb24gZShjLGQsZixrKXtrfHwoaz1hLmkubG9hZGVycy5zbGljZSgwKSk7dmFyIGc9ay5zaGlmdCgpO2lmKGcpe3ZhciBuPWdbY107aWYobil7dmFyIHI9ITE7aWYobi5hcHBseShnLGQuY29uY2F0KGZ1bmN0aW9uKGEpe3I/XG5mKG51bGwpOm51bGwhPT1hP2YoYSk6ZShjLGQsZixrKX0pKSE9PWImJihyPSEwLCFnLnN1cHByZXNzTG9hZGVyRXhjZXB0aW9ucykpdGhyb3cgRXJyb3IoXCJDb21wb25lbnQgbG9hZGVycyBtdXN0IHN1cHBseSB2YWx1ZXMgYnkgaW52b2tpbmcgdGhlIGNhbGxiYWNrLCBub3QgYnkgcmV0dXJuaW5nIHZhbHVlcyBzeW5jaHJvbm91c2x5LlwiKTt9ZWxzZSBlKGMsZCxmLGspfWVsc2UgZihudWxsKX12YXIgZj17fSxnPXt9O2EuaT17Z2V0OmZ1bmN0aW9uKGQsZSl7dmFyIGY9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGcsZCk/Z1tkXTpiO2Y/Zi5GZD9hLnYuSyhmdW5jdGlvbigpe2UoZi5kZWZpbml0aW9uKX0pOmEubWEueWIoZnVuY3Rpb24oKXtlKGYuZGVmaW5pdGlvbil9KTpjKGQsZSl9LEFjOmZ1bmN0aW9uKGEpe2RlbGV0ZSBnW2FdfSxuYzplfTthLmkubG9hZGVycz1bXTthLmIoXCJjb21wb25lbnRzXCIsYS5pKTthLmIoXCJjb21wb25lbnRzLmdldFwiLGEuaS5nZXQpO1xuYS5iKFwiY29tcG9uZW50cy5jbGVhckNhY2hlZERlZmluaXRpb25cIixhLmkuQWMpfSkoKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsYyxkLGUpe2Z1bmN0aW9uIGcoKXswPT09LS1BJiZlKGgpfXZhciBoPXt9LEE9Mix1PWQudGVtcGxhdGU7ZD1kLnZpZXdNb2RlbDt1P2YoYyx1LGZ1bmN0aW9uKGMpe2EuaS5uYyhcImxvYWRUZW1wbGF0ZVwiLFtiLGNdLGZ1bmN0aW9uKGEpe2gudGVtcGxhdGU9YTtnKCl9KX0pOmcoKTtkP2YoYyxkLGZ1bmN0aW9uKGMpe2EuaS5uYyhcImxvYWRWaWV3TW9kZWxcIixbYixjXSxmdW5jdGlvbihhKXtoW21dPWE7ZygpfSl9KTpnKCl9ZnVuY3Rpb24gYyhhLGIsZCl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpZChmdW5jdGlvbihhKXtyZXR1cm4gbmV3IGIoYSl9KTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiW21dKWQoYlttXSk7ZWxzZSBpZihcImluc3RhbmNlXCJpbiBiKXt2YXIgZT1iLmluc3RhbmNlO2QoZnVuY3Rpb24oKXtyZXR1cm4gZX0pfWVsc2VcInZpZXdNb2RlbFwiaW5cbmI/YyhhLGIudmlld01vZGVsLGQpOmEoXCJVbmtub3duIHZpZXdNb2RlbCB2YWx1ZTogXCIrYil9ZnVuY3Rpb24gZChiKXtzd2l0Y2goYS5hLlAoYikpe2Nhc2UgXCJzY3JpcHRcIjpyZXR1cm4gYS5hLnRhKGIudGV4dCk7Y2FzZSBcInRleHRhcmVhXCI6cmV0dXJuIGEuYS50YShiLnZhbHVlKTtjYXNlIFwidGVtcGxhdGVcIjppZihlKGIuY29udGVudCkpcmV0dXJuIGEuYS5DYShiLmNvbnRlbnQuY2hpbGROb2Rlcyl9cmV0dXJuIGEuYS5DYShiLmNoaWxkTm9kZXMpfWZ1bmN0aW9uIGUoYSl7cmV0dXJuIHouRG9jdW1lbnRGcmFnbWVudD9hIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudDphJiYxMT09PWEubm9kZVR5cGV9ZnVuY3Rpb24gZihhLGIsYyl7XCJzdHJpbmdcIj09PXR5cGVvZiBiLnJlcXVpcmU/VHx8ei5yZXF1aXJlPyhUfHx6LnJlcXVpcmUpKFtiLnJlcXVpcmVdLGMpOmEoXCJVc2VzIHJlcXVpcmUsIGJ1dCBubyBBTUQgbG9hZGVyIGlzIHByZXNlbnRcIik6YyhiKX1mdW5jdGlvbiBnKGEpe3JldHVybiBmdW5jdGlvbihiKXt0aHJvdyBFcnJvcihcIkNvbXBvbmVudCAnXCIrXG5hK1wiJzogXCIrYik7fX12YXIgaD17fTthLmkucmVnaXN0ZXI9ZnVuY3Rpb24oYixjKXtpZighYyl0aHJvdyBFcnJvcihcIkludmFsaWQgY29uZmlndXJhdGlvbiBmb3IgXCIrYik7aWYoYS5pLnNiKGIpKXRocm93IEVycm9yKFwiQ29tcG9uZW50IFwiK2IrXCIgaXMgYWxyZWFkeSByZWdpc3RlcmVkXCIpO2hbYl09Y307YS5pLnNiPWZ1bmN0aW9uKGEpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaCxhKX07YS5pLnVucmVnaXN0ZXI9ZnVuY3Rpb24oYil7ZGVsZXRlIGhbYl07YS5pLkFjKGIpfTthLmkuRWM9e2dldENvbmZpZzpmdW5jdGlvbihiLGMpe2MoYS5pLnNiKGIpP2hbYl06bnVsbCl9LGxvYWRDb21wb25lbnQ6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlPWcoYSk7ZihlLGMsZnVuY3Rpb24oYyl7YihhLGUsYyxkKX0pfSxsb2FkVGVtcGxhdGU6ZnVuY3Rpb24oYixjLGYpe2I9ZyhiKTtpZihcInN0cmluZ1wiPT09dHlwZW9mIGMpZihhLmEudGEoYykpO2Vsc2UgaWYoYyBpbnN0YW5jZW9mXG5BcnJheSlmKGMpO2Vsc2UgaWYoZShjKSlmKGEuYS5sYShjLmNoaWxkTm9kZXMpKTtlbHNlIGlmKGMuZWxlbWVudClpZihjPWMuZWxlbWVudCx6LkhUTUxFbGVtZW50P2MgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDpjJiZjLnRhZ05hbWUmJjE9PT1jLm5vZGVUeXBlKWYoZChjKSk7ZWxzZSBpZihcInN0cmluZ1wiPT09dHlwZW9mIGMpe3ZhciBoPXcuZ2V0RWxlbWVudEJ5SWQoYyk7aD9mKGQoaCkpOmIoXCJDYW5ub3QgZmluZCBlbGVtZW50IHdpdGggSUQgXCIrYyl9ZWxzZSBiKFwiVW5rbm93biBlbGVtZW50IHR5cGU6IFwiK2MpO2Vsc2UgYihcIlVua25vd24gdGVtcGxhdGUgdmFsdWU6IFwiK2MpfSxsb2FkVmlld01vZGVsOmZ1bmN0aW9uKGEsYixkKXtjKGcoYSksYixkKX19O3ZhciBtPVwiY3JlYXRlVmlld01vZGVsXCI7YS5iKFwiY29tcG9uZW50cy5yZWdpc3RlclwiLGEuaS5yZWdpc3Rlcik7YS5iKFwiY29tcG9uZW50cy5pc1JlZ2lzdGVyZWRcIixhLmkuc2IpO2EuYihcImNvbXBvbmVudHMudW5yZWdpc3RlclwiLFxuYS5pLnVucmVnaXN0ZXIpO2EuYihcImNvbXBvbmVudHMuZGVmYXVsdExvYWRlclwiLGEuaS5FYyk7YS5pLmxvYWRlcnMucHVzaChhLmkuRWMpO2EuaS5jZD1ofSkoKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsZSl7dmFyIGY9Yi5nZXRBdHRyaWJ1dGUoXCJwYXJhbXNcIik7aWYoZil7dmFyIGY9Yy5wYXJzZUJpbmRpbmdzU3RyaW5nKGYsZSxiLHt2YWx1ZUFjY2Vzc29yczohMCxiaW5kaW5nUGFyYW1zOiEwfSksZj1hLmEuSGEoZixmdW5jdGlvbihjKXtyZXR1cm4gYS5vKGMsbnVsbCx7bDpifSl9KSxnPWEuYS5IYShmLGZ1bmN0aW9uKGMpe3ZhciBlPWMudygpO3JldHVybiBjLmphKCk/YS5vKHtyZWFkOmZ1bmN0aW9uKCl7cmV0dXJuIGEuYS5jKGMoKSl9LHdyaXRlOmEuWWEoZSkmJmZ1bmN0aW9uKGEpe2MoKShhKX0sbDpifSk6ZX0pO09iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChnLFwiJHJhd1wiKXx8KGcuJHJhdz1mKTtyZXR1cm4gZ31yZXR1cm57JHJhdzp7fX19YS5pLmdldENvbXBvbmVudE5hbWVGb3JOb2RlPVxuZnVuY3Rpb24oYil7dmFyIGM9YS5hLlAoYik7aWYoYS5pLnNiKGMpJiYoLTEhPWMuaW5kZXhPZihcIi1cIil8fFwiW29iamVjdCBIVE1MVW5rbm93bkVsZW1lbnRdXCI9PVwiXCIrYnx8OD49YS5hLlcmJmIudGFnTmFtZT09PWMpKXJldHVybiBjfTthLmkuc2M9ZnVuY3Rpb24oYyxlLGYsZyl7aWYoMT09PWUubm9kZVR5cGUpe3ZhciBoPWEuaS5nZXRDb21wb25lbnROYW1lRm9yTm9kZShlKTtpZihoKXtjPWN8fHt9O2lmKGMuY29tcG9uZW50KXRocm93IEVycm9yKCdDYW5ub3QgdXNlIHRoZSBcImNvbXBvbmVudFwiIGJpbmRpbmcgb24gYSBjdXN0b20gZWxlbWVudCBtYXRjaGluZyBhIGNvbXBvbmVudCcpO3ZhciBtPXtuYW1lOmgscGFyYW1zOmIoZSxmKX07Yy5jb21wb25lbnQ9Zz9mdW5jdGlvbigpe3JldHVybiBtfTptfX1yZXR1cm4gY307dmFyIGM9bmV3IGEuZ2E7OT5hLmEuVyYmKGEuaS5yZWdpc3Rlcj1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGEuYXBwbHkodGhpcyxcbmFyZ3VtZW50cyl9fShhLmkucmVnaXN0ZXIpLHcuY3JlYXRlRG9jdW1lbnRGcmFnbWVudD1mdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1iKCksZj1hLmkuY2QsZztmb3IoZyBpbiBmKTtyZXR1cm4gY319KHcuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCkpfSkoKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsYyxkKXtjPWMudGVtcGxhdGU7aWYoIWMpdGhyb3cgRXJyb3IoXCJDb21wb25lbnQgJ1wiK2IrXCInIGhhcyBubyB0ZW1wbGF0ZVwiKTtiPWEuYS5DYShjKTthLmgudWEoZCxiKX1mdW5jdGlvbiBjKGEsYixjKXt2YXIgZD1hLmNyZWF0ZVZpZXdNb2RlbDtyZXR1cm4gZD9kLmNhbGwoYSxiLGMpOmJ9dmFyIGQ9MDthLmYuY29tcG9uZW50PXtpbml0OmZ1bmN0aW9uKGUsZixnLGgsbSl7ZnVuY3Rpb24gbCgpe3ZhciBhPWsmJmsuZGlzcG9zZTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSYmYS5jYWxsKGspO24mJm4ucygpO3E9az1uPW51bGx9dmFyIGsscSxuLHI9YS5hLmxhKGEuaC5jaGlsZE5vZGVzKGUpKTtcbmEuaC5FYShlKTthLmEuSS56YShlLGwpO2EubyhmdW5jdGlvbigpe3ZhciBnPWEuYS5jKGYoKSksaCx1O1wic3RyaW5nXCI9PT10eXBlb2YgZz9oPWc6KGg9YS5hLmMoZy5uYW1lKSx1PWEuYS5jKGcucGFyYW1zKSk7aWYoIWgpdGhyb3cgRXJyb3IoXCJObyBjb21wb25lbnQgbmFtZSBzcGVjaWZpZWRcIik7dmFyIHA9YS5qLkJiKGUsbSksQj1xPSsrZDthLmkuZ2V0KGgsZnVuY3Rpb24oZCl7aWYocT09PUIpe2woKTtpZighZCl0aHJvdyBFcnJvcihcIlVua25vd24gY29tcG9uZW50ICdcIitoK1wiJ1wiKTtiKGgsZCxlKTt2YXIgZj1jKGQsdSx7ZWxlbWVudDplLHRlbXBsYXRlTm9kZXM6cn0pO2Q9cC5jcmVhdGVDaGlsZENvbnRleHQoZix7ZXh0ZW5kOmZ1bmN0aW9uKGEpe2EuJGNvbXBvbmVudD1mO2EuJGNvbXBvbmVudFRlbXBsYXRlTm9kZXM9cn19KTtmJiZmLmtvRGVzY2VuZGFudHNDb21wbGV0ZSYmKG49YS5qLnN1YnNjcmliZShlLGEuai5vYSxmLmtvRGVzY2VuZGFudHNDb21wbGV0ZSxmKSk7XG5rPWY7YS5QYShkLGUpfX0pfSxudWxsLHtsOmV9KTtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6ITB9fX07YS5oLmVhLmNvbXBvbmVudD0hMH0pKCk7dmFyIFY9e1wiY2xhc3NcIjpcImNsYXNzTmFtZVwiLFwiZm9yXCI6XCJodG1sRm9yXCJ9O2EuZi5hdHRyPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuYyhjKCkpfHx7fTthLmEuTyhkLGZ1bmN0aW9uKGMsZCl7ZD1hLmEuYyhkKTt2YXIgZz1jLmluZGV4T2YoXCI6XCIpLGc9XCJsb29rdXBOYW1lc3BhY2VVUklcImluIGImJjA8ZyYmYi5sb29rdXBOYW1lc3BhY2VVUkkoYy5zdWJzdHIoMCxnKSksaD0hMT09PWR8fG51bGw9PT1kfHxkPT09cDtoP2c/Yi5yZW1vdmVBdHRyaWJ1dGVOUyhnLGMpOmIucmVtb3ZlQXR0cmlidXRlKGMpOmQ9ZC50b1N0cmluZygpOzg+PWEuYS5XJiZjIGluIFY/KGM9VltjXSxoP2IucmVtb3ZlQXR0cmlidXRlKGMpOmJbY109ZCk6aHx8KGc/Yi5zZXRBdHRyaWJ1dGVOUyhnLGMsZCk6Yi5zZXRBdHRyaWJ1dGUoYyxcbmQpKTtcIm5hbWVcIj09PWMmJmEuYS5YYyhiLGg/XCJcIjpkKX0pfX07KGZ1bmN0aW9uKCl7YS5mLmNoZWNrZWQ9e2FmdGVyOltcInZhbHVlXCIsXCJhdHRyXCJdLGluaXQ6ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGUoKXt2YXIgZT1iLmNoZWNrZWQsZj1nKCk7aWYoIWEuVS5yYigpJiYoZXx8IW0mJiFhLlUucGEoKSkpe3ZhciBsPWEudi5LKGMpO2lmKGspe3ZhciBuPXE/bC53KCk6bCxCPXI7cj1mO0IhPT1mP2UmJihhLmEuT2EobixmLCEwKSxhLmEuT2EobixCLCExKSk6YS5hLk9hKG4sZixlKTtxJiZhLllhKGwpJiZsKG4pfWVsc2UgaCYmKGY9PT1wP2Y9ZTplfHwoZj1wKSksYS5tLiRhKGwsZCxcImNoZWNrZWRcIixmLCEwKX19ZnVuY3Rpb24gZigpe3ZhciBkPWEuYS5jKGMoKSksZT1nKCk7az8oYi5jaGVja2VkPTA8PWEuYS5BKGQsZSkscj1lKTpiLmNoZWNrZWQ9aCYmZT09PXA/ISFkOmcoKT09PWR9dmFyIGc9YS53YihmdW5jdGlvbigpe2lmKGQuaGFzKFwiY2hlY2tlZFZhbHVlXCIpKXJldHVybiBhLmEuYyhkLmdldChcImNoZWNrZWRWYWx1ZVwiKSk7XG5pZihuKXJldHVybiBkLmhhcyhcInZhbHVlXCIpP2EuYS5jKGQuZ2V0KFwidmFsdWVcIikpOmIudmFsdWV9KSxoPVwiY2hlY2tib3hcIj09Yi50eXBlLG09XCJyYWRpb1wiPT1iLnR5cGU7aWYoaHx8bSl7dmFyIGw9YygpLGs9aCYmYS5hLmMobClpbnN0YW5jZW9mIEFycmF5LHE9IShrJiZsLnB1c2gmJmwuc3BsaWNlKSxuPW18fGsscj1rP2coKTpwO20mJiFiLm5hbWUmJmEuZi51bmlxdWVOYW1lLmluaXQoYixmdW5jdGlvbigpe3JldHVybiEwfSk7YS5vKGUsbnVsbCx7bDpifSk7YS5hLkgoYixcImNsaWNrXCIsZSk7YS5vKGYsbnVsbCx7bDpifSk7bD1wfX19O2EubS52YS5jaGVja2VkPSEwO2EuZi5jaGVja2VkVmFsdWU9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe2IudmFsdWU9YS5hLmMoYygpKX19fSkoKTthLmZbXCJjbGFzc1wiXT17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLkNiKGEuYS5jKGMoKSkpO2EuYS5FYihiLGIuX19rb19fY3NzVmFsdWUsITEpO2IuX19rb19fY3NzVmFsdWU9ZDthLmEuRWIoYixcbmQsITApfX07YS5mLmNzcz17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmMoYygpKTtudWxsIT09ZCYmXCJvYmplY3RcIj09dHlwZW9mIGQ/YS5hLk8oZCxmdW5jdGlvbihjLGQpe2Q9YS5hLmMoZCk7YS5hLkViKGIsYyxkKX0pOmEuZltcImNsYXNzXCJdLnVwZGF0ZShiLGMpfX07YS5mLmVuYWJsZT17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmMoYygpKTtkJiZiLmRpc2FibGVkP2IucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik6ZHx8Yi5kaXNhYmxlZHx8KGIuZGlzYWJsZWQ9ITApfX07YS5mLmRpc2FibGU9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe2EuZi5lbmFibGUudXBkYXRlKGIsZnVuY3Rpb24oKXtyZXR1cm4hYS5hLmMoYygpKX0pfX07YS5mLmV2ZW50PXtpbml0OmZ1bmN0aW9uKGIsYyxkLGUsZil7dmFyIGc9YygpfHx7fTthLmEuTyhnLGZ1bmN0aW9uKGcpe1wic3RyaW5nXCI9PXR5cGVvZiBnJiZhLmEuSChiLGcsZnVuY3Rpb24oYil7dmFyIGwsaz1jKClbZ107XG5pZihrKXt0cnl7dmFyIHE9YS5hLmxhKGFyZ3VtZW50cyk7ZT1mLiRkYXRhO3EudW5zaGlmdChlKTtsPWsuYXBwbHkoZSxxKX1maW5hbGx5eyEwIT09bCYmKGIucHJldmVudERlZmF1bHQ/Yi5wcmV2ZW50RGVmYXVsdCgpOmIucmV0dXJuVmFsdWU9ITEpfSExPT09ZC5nZXQoZytcIkJ1YmJsZVwiKSYmKGIuY2FuY2VsQnViYmxlPSEwLGIuc3RvcFByb3BhZ2F0aW9uJiZiLnN0b3BQcm9wYWdhdGlvbigpKX19KX0pfX07YS5mLmZvcmVhY2g9e1FjOmZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBjPWIoKSxkPWEuYS4kYihjKTtpZighZHx8XCJudW1iZXJcIj09dHlwZW9mIGQubGVuZ3RoKXJldHVybntmb3JlYWNoOmMsdGVtcGxhdGVFbmdpbmU6YS5iYS5OYX07YS5hLmMoYyk7cmV0dXJue2ZvcmVhY2g6ZC5kYXRhLGFzOmQuYXMsbm9DaGlsZENvbnRleHQ6ZC5ub0NoaWxkQ29udGV4dCxpbmNsdWRlRGVzdHJveWVkOmQuaW5jbHVkZURlc3Ryb3llZCxhZnRlckFkZDpkLmFmdGVyQWRkLFxuYmVmb3JlUmVtb3ZlOmQuYmVmb3JlUmVtb3ZlLGFmdGVyUmVuZGVyOmQuYWZ0ZXJSZW5kZXIsYmVmb3JlTW92ZTpkLmJlZm9yZU1vdmUsYWZ0ZXJNb3ZlOmQuYWZ0ZXJNb3ZlLHRlbXBsYXRlRW5naW5lOmEuYmEuTmF9fX0saW5pdDpmdW5jdGlvbihiLGMpe3JldHVybiBhLmYudGVtcGxhdGUuaW5pdChiLGEuZi5mb3JlYWNoLlFjKGMpKX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyxkLGUsZil7cmV0dXJuIGEuZi50ZW1wbGF0ZS51cGRhdGUoYixhLmYuZm9yZWFjaC5RYyhjKSxkLGUsZil9fTthLm0uUmEuZm9yZWFjaD0hMTthLmguZWEuZm9yZWFjaD0hMDthLmYuaGFzZm9jdXM9e2luaXQ6ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGUoZSl7Yi5fX2tvX2hhc2ZvY3VzVXBkYXRpbmc9ITA7dmFyIGY9Yi5vd25lckRvY3VtZW50O2lmKFwiYWN0aXZlRWxlbWVudFwiaW4gZil7dmFyIGc7dHJ5e2c9Zi5hY3RpdmVFbGVtZW50fWNhdGNoKGspe2c9Zi5ib2R5fWU9Zz09PWJ9Zj1jKCk7YS5tLiRhKGYsXG5kLFwiaGFzZm9jdXNcIixlLCEwKTtiLl9fa29faGFzZm9jdXNMYXN0VmFsdWU9ZTtiLl9fa29faGFzZm9jdXNVcGRhdGluZz0hMX12YXIgZj1lLmJpbmQobnVsbCwhMCksZz1lLmJpbmQobnVsbCwhMSk7YS5hLkgoYixcImZvY3VzXCIsZik7YS5hLkgoYixcImZvY3VzaW5cIixmKTthLmEuSChiLFwiYmx1clwiLGcpO2EuYS5IKGIsXCJmb2N1c291dFwiLGcpO2IuX19rb19oYXNmb2N1c0xhc3RWYWx1ZT0hMX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9ISFhLmEuYyhjKCkpO2IuX19rb19oYXNmb2N1c1VwZGF0aW5nfHxiLl9fa29faGFzZm9jdXNMYXN0VmFsdWU9PT1kfHwoZD9iLmZvY3VzKCk6Yi5ibHVyKCksIWQmJmIuX19rb19oYXNmb2N1c0xhc3RWYWx1ZSYmYi5vd25lckRvY3VtZW50LmJvZHkuZm9jdXMoKSxhLnYuSyhhLmEuRmIsbnVsbCxbYixkP1wiZm9jdXNpblwiOlwiZm9jdXNvdXRcIl0pKX19O2EubS52YS5oYXNmb2N1cz0hMDthLmYuaGFzRm9jdXM9YS5mLmhhc2ZvY3VzO2EubS52YS5oYXNGb2N1cz1cblwiaGFzZm9jdXNcIjthLmYuaHRtbD17aW5pdDpmdW5jdGlvbigpe3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19LHVwZGF0ZTpmdW5jdGlvbihiLGMpe2EuYS5kYyhiLGMoKSl9fTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsZCxlKXthLmZbYl09e2luaXQ6ZnVuY3Rpb24oYixjLGgsbSxsKXt2YXIgayxxLG49e30scixwLEE7aWYoZCl7bT1oLmdldChcImFzXCIpO3ZhciB1PWguZ2V0KFwibm9DaGlsZENvbnRleHRcIik7QT0hKG0mJnUpO249e2FzOm0sbm9DaGlsZENvbnRleHQ6dSxleHBvcnREZXBlbmRlbmNpZXM6QX19cD0ocj1cInJlbmRlclwiPT1oLmdldChcImNvbXBsZXRlT25cIikpfHxoLmhhcyhhLmoub2EpO2EubyhmdW5jdGlvbigpe3ZhciBoPWEuYS5jKGMoKSksbT0hZSE9PSFoLHU9IXEsdDtpZihBfHxtIT09ayl7cCYmKGw9YS5qLkJiKGIsbCkpO2lmKG0pe2lmKCFkfHxBKW4uZGF0YURlcGVuZGVuY3k9YS5VLm8oKTt0PWQ/bC5jcmVhdGVDaGlsZENvbnRleHQoXCJmdW5jdGlvblwiPT1cbnR5cGVvZiBoP2g6YyxuKTphLlUucGEoKT9sLmV4dGVuZChudWxsLG4pOmx9dSYmYS5VLnBhKCkmJihxPWEuYS5DYShhLmguY2hpbGROb2RlcyhiKSwhMCkpO20/KHV8fGEuaC51YShiLGEuYS5DYShxKSksYS5QYSh0LGIpKTooYS5oLkVhKGIpLHJ8fGEuai5HYShiLGEuai5UKSk7az1tfX0sbnVsbCx7bDpifSk7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOiEwfX19O2EubS5SYVtiXT0hMTthLmguZWFbYl09ITB9YihcImlmXCIpO2IoXCJpZm5vdFwiLCExLCEwKTtiKFwid2l0aFwiLCEwKX0pKCk7YS5mLmxldD17aW5pdDpmdW5jdGlvbihiLGMsZCxlLGYpe2M9Zi5leHRlbmQoYyk7YS5QYShjLGIpO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19fTthLmguZWEubGV0PSEwO3ZhciBRPXt9O2EuZi5vcHRpb25zPXtpbml0OmZ1bmN0aW9uKGIpe2lmKFwic2VsZWN0XCIhPT1hLmEuUChiKSl0aHJvdyBFcnJvcihcIm9wdGlvbnMgYmluZGluZyBhcHBsaWVzIG9ubHkgdG8gU0VMRUNUIGVsZW1lbnRzXCIpO1xuZm9yKDswPGIubGVuZ3RoOyliLnJlbW92ZSgwKTtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6ITB9fSx1cGRhdGU6ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGUoKXtyZXR1cm4gYS5hLmZiKGIub3B0aW9ucyxmdW5jdGlvbihhKXtyZXR1cm4gYS5zZWxlY3RlZH0pfWZ1bmN0aW9uIGYoYSxiLGMpe3ZhciBkPXR5cGVvZiBiO3JldHVyblwiZnVuY3Rpb25cIj09ZD9iKGEpOlwic3RyaW5nXCI9PWQ/YVtiXTpjfWZ1bmN0aW9uIGcoYyxlKXtpZih5JiZrKWEudS55YShiLGEuYS5jKGQuZ2V0KFwidmFsdWVcIikpLCEwKTtlbHNlIGlmKHIubGVuZ3RoKXt2YXIgZj0wPD1hLmEuQShyLGEudS5MKGVbMF0pKTthLmEuWWMoZVswXSxmKTt5JiYhZiYmYS52LksoYS5hLkZiLG51bGwsW2IsXCJjaGFuZ2VcIl0pfX12YXIgaD1iLm11bHRpcGxlLG09MCE9Yi5sZW5ndGgmJmg/Yi5zY3JvbGxUb3A6bnVsbCxsPWEuYS5jKGMoKSksaz1kLmdldChcInZhbHVlQWxsb3dVbnNldFwiKSYmZC5oYXMoXCJ2YWx1ZVwiKSxcbnE9ZC5nZXQoXCJvcHRpb25zSW5jbHVkZURlc3Ryb3llZFwiKTtjPXt9O3ZhciBuLHI9W107a3x8KGg/cj1hLmEuTWIoZSgpLGEudS5MKTowPD1iLnNlbGVjdGVkSW5kZXgmJnIucHVzaChhLnUuTChiLm9wdGlvbnNbYi5zZWxlY3RlZEluZGV4XSkpKTtsJiYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGwubGVuZ3RoJiYobD1bbF0pLG49YS5hLmZiKGwsZnVuY3Rpb24oYil7cmV0dXJuIHF8fGI9PT1wfHxudWxsPT09Ynx8IWEuYS5jKGIuX2Rlc3Ryb3kpfSksZC5oYXMoXCJvcHRpb25zQ2FwdGlvblwiKSYmKGw9YS5hLmMoZC5nZXQoXCJvcHRpb25zQ2FwdGlvblwiKSksbnVsbCE9PWwmJmwhPT1wJiZuLnVuc2hpZnQoUSkpKTt2YXIgeT0hMTtjLmJlZm9yZVJlbW92ZT1mdW5jdGlvbihhKXtiLnJlbW92ZUNoaWxkKGEpfTtsPWc7ZC5oYXMoXCJvcHRpb25zQWZ0ZXJSZW5kZXJcIikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGQuZ2V0KFwib3B0aW9uc0FmdGVyUmVuZGVyXCIpJiYobD1mdW5jdGlvbihiLGMpe2coMCxjKTtcbmEudi5LKGQuZ2V0KFwib3B0aW9uc0FmdGVyUmVuZGVyXCIpLG51bGwsW2NbMF0sYiE9PVE/YjpwXSl9KTthLmEuY2MoYixuLGZ1bmN0aW9uKGMsZSxnKXtnLmxlbmd0aCYmKHI9IWsmJmdbMF0uc2VsZWN0ZWQ/W2EudS5MKGdbMF0pXTpbXSx5PSEwKTtlPWIub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO2M9PT1RPyhhLmEuQWIoZSxkLmdldChcIm9wdGlvbnNDYXB0aW9uXCIpKSxhLnUueWEoZSxwKSk6KGc9ZihjLGQuZ2V0KFwib3B0aW9uc1ZhbHVlXCIpLGMpLGEudS55YShlLGEuYS5jKGcpKSxjPWYoYyxkLmdldChcIm9wdGlvbnNUZXh0XCIpLGcpLGEuYS5BYihlLGMpKTtyZXR1cm5bZV19LGMsbCk7YS52LksoZnVuY3Rpb24oKXtpZihrKWEudS55YShiLGEuYS5jKGQuZ2V0KFwidmFsdWVcIikpLCEwKTtlbHNle3ZhciBjO2g/Yz1yLmxlbmd0aCYmZSgpLmxlbmd0aDxyLmxlbmd0aDpjPXIubGVuZ3RoJiYwPD1iLnNlbGVjdGVkSW5kZXg/YS51LkwoYi5vcHRpb25zW2Iuc2VsZWN0ZWRJbmRleF0pIT09XG5yWzBdOnIubGVuZ3RofHwwPD1iLnNlbGVjdGVkSW5kZXg7YyYmYS5hLkZiKGIsXCJjaGFuZ2VcIil9fSk7YS5hLnZkKGIpO20mJjIwPE1hdGguYWJzKG0tYi5zY3JvbGxUb3ApJiYoYi5zY3JvbGxUb3A9bSl9fTthLmYub3B0aW9ucy5ZYj1hLmEuZy5aKCk7YS5mLnNlbGVjdGVkT3B0aW9ucz17YWZ0ZXI6W1wib3B0aW9uc1wiLFwiZm9yZWFjaFwiXSxpbml0OmZ1bmN0aW9uKGIsYyxkKXthLmEuSChiLFwiY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgZT1jKCksZj1bXTthLmEuQyhiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwib3B0aW9uXCIpLGZ1bmN0aW9uKGIpe2Iuc2VsZWN0ZWQmJmYucHVzaChhLnUuTChiKSl9KTthLm0uJGEoZSxkLFwic2VsZWN0ZWRPcHRpb25zXCIsZil9KX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyl7aWYoXCJzZWxlY3RcIiE9YS5hLlAoYikpdGhyb3cgRXJyb3IoXCJ2YWx1ZXMgYmluZGluZyBhcHBsaWVzIG9ubHkgdG8gU0VMRUNUIGVsZW1lbnRzXCIpO3ZhciBkPWEuYS5jKGMoKSksZT1iLnNjcm9sbFRvcDtcbmQmJlwibnVtYmVyXCI9PXR5cGVvZiBkLmxlbmd0aCYmYS5hLkMoYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm9wdGlvblwiKSxmdW5jdGlvbihiKXt2YXIgYz0wPD1hLmEuQShkLGEudS5MKGIpKTtiLnNlbGVjdGVkIT1jJiZhLmEuWWMoYixjKX0pO2Iuc2Nyb2xsVG9wPWV9fTthLm0udmEuc2VsZWN0ZWRPcHRpb25zPSEwO2EuZi5zdHlsZT17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmMoYygpfHx7fSk7YS5hLk8oZCxmdW5jdGlvbihjLGQpe2Q9YS5hLmMoZCk7aWYobnVsbD09PWR8fGQ9PT1wfHwhMT09PWQpZD1cIlwiO2lmKHYpdihiKS5jc3MoYyxkKTtlbHNlIGlmKC9eLS0vLnRlc3QoYykpYi5zdHlsZS5zZXRQcm9wZXJ0eShjLGQpO2Vsc2V7Yz1jLnJlcGxhY2UoLy0oXFx3KS9nLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX0pO3ZhciBnPWIuc3R5bGVbY107Yi5zdHlsZVtjXT1kO2Q9PT1nfHxiLnN0eWxlW2NdIT1nfHxpc05hTihkKXx8KGIuc3R5bGVbY109XG5kK1wicHhcIil9fSl9fTthLmYuc3VibWl0PXtpbml0OmZ1bmN0aW9uKGIsYyxkLGUsZil7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgYygpKXRocm93IEVycm9yKFwiVGhlIHZhbHVlIGZvciBhIHN1Ym1pdCBiaW5kaW5nIG11c3QgYmUgYSBmdW5jdGlvblwiKTthLmEuSChiLFwic3VibWl0XCIsZnVuY3Rpb24oYSl7dmFyIGQsZT1jKCk7dHJ5e2Q9ZS5jYWxsKGYuJGRhdGEsYil9ZmluYWxseXshMCE9PWQmJihhLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTphLnJldHVyblZhbHVlPSExKX19KX19O2EuZi50ZXh0PXtpbml0OmZ1bmN0aW9uKCl7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOiEwfX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyl7YS5hLkFiKGIsYygpKX19O2EuaC5lYS50ZXh0PSEwOyhmdW5jdGlvbigpe2lmKHomJnoubmF2aWdhdG9yKXt2YXIgYj1mdW5jdGlvbihhKXtpZihhKXJldHVybiBwYXJzZUZsb2F0KGFbMV0pfSxjPXoubmF2aWdhdG9yLnVzZXJBZ2VudCxcbmQsZSxmLGcsaDsoZD16Lm9wZXJhJiZ6Lm9wZXJhLnZlcnNpb24mJnBhcnNlSW50KHoub3BlcmEudmVyc2lvbigpKSl8fChoPWIoYy5tYXRjaCgvRWRnZVxcLyhbXiBdKykkLykpKXx8YihjLm1hdGNoKC9DaHJvbWVcXC8oW14gXSspLykpfHwoZT1iKGMubWF0Y2goL1ZlcnNpb25cXC8oW14gXSspIFNhZmFyaS8pKSl8fChmPWIoYy5tYXRjaCgvRmlyZWZveFxcLyhbXiBdKykvKSkpfHwoZz1hLmEuV3x8YihjLm1hdGNoKC9NU0lFIChbXiBdKykvKSkpfHwoZz1iKGMubWF0Y2goL3J2OihbXiApXSspLykpKX1pZig4PD1nJiYxMD5nKXZhciBtPWEuYS5nLlooKSxsPWEuYS5nLlooKSxrPWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMuYWN0aXZlRWxlbWVudDsoYz1jJiZhLmEuZy5nZXQoYyxsKSkmJmMoYil9LHE9ZnVuY3Rpb24oYixjKXt2YXIgZD1iLm93bmVyRG9jdW1lbnQ7YS5hLmcuZ2V0KGQsbSl8fChhLmEuZy5zZXQoZCxtLCEwKSxhLmEuSChkLFwic2VsZWN0aW9uY2hhbmdlXCIsaykpO2EuYS5nLnNldChiLFxubCxjKX07YS5mLnRleHRJbnB1dD17aW5pdDpmdW5jdGlvbihiLGMsbCl7ZnVuY3Rpb24gayhjLGQpe2EuYS5IKGIsYyxkKX1mdW5jdGlvbiBtKCl7dmFyIGQ9YS5hLmMoYygpKTtpZihudWxsPT09ZHx8ZD09PXApZD1cIlwiO0whPT1wJiZkPT09TD9hLmEuc2V0VGltZW91dChtLDQpOmIudmFsdWUhPT1kJiYoeD0hMCxiLnZhbHVlPWQseD0hMSx2PWIudmFsdWUpfWZ1bmN0aW9uIHQoKXt3fHwoTD1iLnZhbHVlLHc9YS5hLnNldFRpbWVvdXQoQiw0KSl9ZnVuY3Rpb24gQigpe2NsZWFyVGltZW91dCh3KTtMPXc9cDt2YXIgZD1iLnZhbHVlO3YhPT1kJiYodj1kLGEubS4kYShjKCksbCxcInRleHRJbnB1dFwiLGQpKX12YXIgdj1iLnZhbHVlLHcsTCx6PTk9PWEuYS5XP3Q6Qix4PSExO2cmJmsoXCJrZXlwcmVzc1wiLEIpOzExPmcmJmsoXCJwcm9wZXJ0eWNoYW5nZVwiLGZ1bmN0aW9uKGEpe3h8fFwidmFsdWVcIiE9PWEucHJvcGVydHlOYW1lfHx6KGEpfSk7OD09ZyYmKGsoXCJrZXl1cFwiLEIpLGsoXCJrZXlkb3duXCIsXG5CKSk7cSYmKHEoYix6KSxrKFwiZHJhZ2VuZFwiLHQpKTsoIWd8fDk8PWcpJiZrKFwiaW5wdXRcIix6KTs1PmUmJlwidGV4dGFyZWFcIj09PWEuYS5QKGIpPyhrKFwia2V5ZG93blwiLHQpLGsoXCJwYXN0ZVwiLHQpLGsoXCJjdXRcIix0KSk6MTE+ZD9rKFwia2V5ZG93blwiLHQpOjQ+Zj8oayhcIkRPTUF1dG9Db21wbGV0ZVwiLEIpLGsoXCJkcmFnZHJvcFwiLEIpLGsoXCJkcm9wXCIsQikpOmgmJlwibnVtYmVyXCI9PT1iLnR5cGUmJmsoXCJrZXlkb3duXCIsdCk7ayhcImNoYW5nZVwiLEIpO2soXCJibHVyXCIsQik7YS5vKG0sbnVsbCx7bDpifSl9fTthLm0udmEudGV4dElucHV0PSEwO2EuZi50ZXh0aW5wdXQ9e3ByZXByb2Nlc3M6ZnVuY3Rpb24oYSxiLGMpe2MoXCJ0ZXh0SW5wdXRcIixhKX19fSkoKTthLmYudW5pcXVlTmFtZT17aW5pdDpmdW5jdGlvbihiLGMpe2lmKGMoKSl7dmFyIGQ9XCJrb191bmlxdWVfXCIrICsrYS5mLnVuaXF1ZU5hbWUucWQ7YS5hLlhjKGIsZCl9fX07YS5mLnVuaXF1ZU5hbWUucWQ9MDthLmYudXNpbmc9e2luaXQ6ZnVuY3Rpb24oYixcbmMsZCxlLGYpe3ZhciBnO2QuaGFzKFwiYXNcIikmJihnPXthczpkLmdldChcImFzXCIpLG5vQ2hpbGRDb250ZXh0OmQuZ2V0KFwibm9DaGlsZENvbnRleHRcIil9KTtjPWYuY3JlYXRlQ2hpbGRDb250ZXh0KGMsZyk7YS5QYShjLGIpO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19fTthLmguZWEudXNpbmc9ITA7YS5mLnZhbHVlPXthZnRlcjpbXCJvcHRpb25zXCIsXCJmb3JlYWNoXCJdLGluaXQ6ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEuYS5QKGIpLGY9XCJpbnB1dFwiPT1lO2lmKCFmfHxcImNoZWNrYm94XCIhPWIudHlwZSYmXCJyYWRpb1wiIT1iLnR5cGUpe3ZhciBnPVtcImNoYW5nZVwiXSxoPWQuZ2V0KFwidmFsdWVVcGRhdGVcIiksbT0hMSxsPW51bGw7aCYmKFwic3RyaW5nXCI9PXR5cGVvZiBoJiYoaD1baF0pLGEuYS5nYihnLGgpLGc9YS5hLnZjKGcpKTt2YXIgaz1mdW5jdGlvbigpe2w9bnVsbDttPSExO3ZhciBlPWMoKSxmPWEudS5MKGIpO2EubS4kYShlLGQsXCJ2YWx1ZVwiLGYpfTshYS5hLld8fFxuIWZ8fFwidGV4dFwiIT1iLnR5cGV8fFwib2ZmXCI9PWIuYXV0b2NvbXBsZXRlfHxiLmZvcm0mJlwib2ZmXCI9PWIuZm9ybS5hdXRvY29tcGxldGV8fC0xIT1hLmEuQShnLFwicHJvcGVydHljaGFuZ2VcIil8fChhLmEuSChiLFwicHJvcGVydHljaGFuZ2VcIixmdW5jdGlvbigpe209ITB9KSxhLmEuSChiLFwiZm9jdXNcIixmdW5jdGlvbigpe209ITF9KSxhLmEuSChiLFwiYmx1clwiLGZ1bmN0aW9uKCl7bSYmaygpfSkpO2EuYS5DKGcsZnVuY3Rpb24oYyl7dmFyIGQ9azthLmEuVGQoYyxcImFmdGVyXCIpJiYoZD1mdW5jdGlvbigpe2w9YS51LkwoYik7YS5hLnNldFRpbWVvdXQoaywwKX0sYz1jLnN1YnN0cmluZyg1KSk7YS5hLkgoYixjLGQpfSk7dmFyIHE7cT1mJiZcImZpbGVcIj09Yi50eXBlP2Z1bmN0aW9uKCl7dmFyIGQ9YS5hLmMoYygpKTtudWxsPT09ZHx8ZD09PXB8fFwiXCI9PT1kP2IudmFsdWU9XCJcIjphLnYuSyhrKX06ZnVuY3Rpb24oKXt2YXIgZj1hLmEuYyhjKCkpLGc9YS51LkwoYik7aWYobnVsbCE9PWwmJlxuZj09PWwpYS5hLnNldFRpbWVvdXQocSwwKTtlbHNlIGlmKGYhPT1nfHxnPT09cClcInNlbGVjdFwiPT09ZT8oZz1kLmdldChcInZhbHVlQWxsb3dVbnNldFwiKSxhLnUueWEoYixmLGcpLGd8fGY9PT1hLnUuTChiKXx8YS52LksoaykpOmEudS55YShiLGYpfTthLm8ocSxudWxsLHtsOmJ9KX1lbHNlIGEuZWIoYix7Y2hlY2tlZFZhbHVlOmN9KX0sdXBkYXRlOmZ1bmN0aW9uKCl7fX07YS5tLnZhLnZhbHVlPSEwO2EuZi52aXNpYmxlPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuYyhjKCkpLGU9XCJub25lXCIhPWIuc3R5bGUuZGlzcGxheTtkJiYhZT9iLnN0eWxlLmRpc3BsYXk9XCJcIjohZCYmZSYmKGIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIil9fTthLmYuaGlkZGVuPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXthLmYudmlzaWJsZS51cGRhdGUoYixmdW5jdGlvbigpe3JldHVybiFhLmEuYyhjKCkpfSl9fTsoZnVuY3Rpb24oYil7YS5mW2JdPXtpbml0OmZ1bmN0aW9uKGMsZCxlLGYsZyl7cmV0dXJuIGEuZi5ldmVudC5pbml0LmNhbGwodGhpcyxcbmMsZnVuY3Rpb24oKXt2YXIgYT17fTthW2JdPWQoKTtyZXR1cm4gYX0sZSxmLGcpfX19KShcImNsaWNrXCIpO2EuY2E9ZnVuY3Rpb24oKXt9O2EuY2EucHJvdG90eXBlLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoXCJPdmVycmlkZSByZW5kZXJUZW1wbGF0ZVNvdXJjZVwiKTt9O2EuY2EucHJvdG90eXBlLmNyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9jaz1mdW5jdGlvbigpe3Rocm93IEVycm9yKFwiT3ZlcnJpZGUgY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrXCIpO307YS5jYS5wcm90b3R5cGUubWFrZVRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKGIsYyl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpe2M9Y3x8dzt2YXIgZD1jLmdldEVsZW1lbnRCeUlkKGIpO2lmKCFkKXRocm93IEVycm9yKFwiQ2Fubm90IGZpbmQgdGVtcGxhdGUgd2l0aCBJRCBcIitiKTtyZXR1cm4gbmV3IGEuQi5EKGQpfWlmKDE9PWIubm9kZVR5cGV8fDg9PWIubm9kZVR5cGUpcmV0dXJuIG5ldyBhLkIuaWEoYik7XG50aHJvdyBFcnJvcihcIlVua25vd24gdGVtcGxhdGUgdHlwZTogXCIrYik7fTthLmNhLnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZT1mdW5jdGlvbihhLGMsZCxlKXthPXRoaXMubWFrZVRlbXBsYXRlU291cmNlKGEsZSk7cmV0dXJuIHRoaXMucmVuZGVyVGVtcGxhdGVTb3VyY2UoYSxjLGQsZSl9O2EuY2EucHJvdG90eXBlLmlzVGVtcGxhdGVSZXdyaXR0ZW49ZnVuY3Rpb24oYSxjKXtyZXR1cm4hMT09PXRoaXMuYWxsb3dUZW1wbGF0ZVJld3JpdGluZz8hMDp0aGlzLm1ha2VUZW1wbGF0ZVNvdXJjZShhLGMpLmRhdGEoXCJpc1Jld3JpdHRlblwiKX07YS5jYS5wcm90b3R5cGUucmV3cml0ZVRlbXBsYXRlPWZ1bmN0aW9uKGEsYyxkKXthPXRoaXMubWFrZVRlbXBsYXRlU291cmNlKGEsZCk7Yz1jKGEudGV4dCgpKTthLnRleHQoYyk7YS5kYXRhKFwiaXNSZXdyaXR0ZW5cIiwhMCl9O2EuYihcInRlbXBsYXRlRW5naW5lXCIsYS5jYSk7YS5pYz1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjLGQsaCl7Yj1hLm0uWmIoYik7XG5mb3IodmFyIG09YS5tLlJhLGw9MDtsPGIubGVuZ3RoO2wrKyl7dmFyIGs9YltsXS5rZXk7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0saykpe3ZhciBxPW1ba107aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIHEpe2lmKGs9cShiW2xdLnZhbHVlKSl0aHJvdyBFcnJvcihrKTt9ZWxzZSBpZighcSl0aHJvdyBFcnJvcihcIlRoaXMgdGVtcGxhdGUgZW5naW5lIGRvZXMgbm90IHN1cHBvcnQgdGhlICdcIitrK1wiJyBiaW5kaW5nIHdpdGhpbiBpdHMgdGVtcGxhdGVzXCIpO319ZD1cImtvLl9fdHJfYW1idG5zKGZ1bmN0aW9uKCRjb250ZXh0LCRlbGVtZW50KXtyZXR1cm4oZnVuY3Rpb24oKXtyZXR1cm57IFwiK2EubS51YihiLHt2YWx1ZUFjY2Vzc29yczohMH0pK1wiIH0gfSkoKX0sJ1wiK2QudG9Mb3dlckNhc2UoKStcIicpXCI7cmV0dXJuIGguY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrKGQpK2N9dmFyIGM9Lyg8KFthLXpdK1xcZCopKD86XFxzKyg/IWRhdGEtYmluZFxccyo9XFxzKilbYS16MC05XFwtXSsoPzo9KD86XFxcIlteXFxcIl0qXFxcInxcXCdbXlxcJ10qXFwnfFtePl0qKSk/KSpcXHMrKWRhdGEtYmluZFxccyo9XFxzKihbXCInXSkoW1xcc1xcU10qPylcXDMvZ2ksXG5kPS9cXHgzYyEtLVxccyprb1xcYlxccyooW1xcc1xcU10qPylcXHMqLS1cXHgzZS9nO3JldHVybnt3ZDpmdW5jdGlvbihiLGMsZCl7Yy5pc1RlbXBsYXRlUmV3cml0dGVuKGIsZCl8fGMucmV3cml0ZVRlbXBsYXRlKGIsZnVuY3Rpb24oYil7cmV0dXJuIGEuaWMuS2QoYixjKX0sZCl9LEtkOmZ1bmN0aW9uKGEsZil7cmV0dXJuIGEucmVwbGFjZShjLGZ1bmN0aW9uKGEsYyxkLGUsayl7cmV0dXJuIGIoayxjLGQsZil9KS5yZXBsYWNlKGQsZnVuY3Rpb24oYSxjKXtyZXR1cm4gYihjLFwiXFx4M2MhLS0ga28gLS1cXHgzZVwiLFwiI2NvbW1lbnRcIixmKX0pfSxsZDpmdW5jdGlvbihiLGMpe3JldHVybiBhLmFhLldiKGZ1bmN0aW9uKGQsaCl7dmFyIG09ZC5uZXh0U2libGluZzttJiZtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1jJiZhLmViKG0sYixoKX0pfX19KCk7YS5iKFwiX190cl9hbWJ0bnNcIixhLmljLmxkKTsoZnVuY3Rpb24oKXthLkI9e307YS5CLkQ9ZnVuY3Rpb24oYil7aWYodGhpcy5EPWIpe3ZhciBjPVxuYS5hLlAoYik7dGhpcy5EYj1cInNjcmlwdFwiPT09Yz8xOlwidGV4dGFyZWFcIj09PWM/MjpcInRlbXBsYXRlXCI9PWMmJmIuY29udGVudCYmMTE9PT1iLmNvbnRlbnQubm9kZVR5cGU/Mzo0fX07YS5CLkQucHJvdG90eXBlLnRleHQ9ZnVuY3Rpb24oKXt2YXIgYj0xPT09dGhpcy5EYj9cInRleHRcIjoyPT09dGhpcy5EYj9cInZhbHVlXCI6XCJpbm5lckhUTUxcIjtpZigwPT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLkRbYl07dmFyIGM9YXJndW1lbnRzWzBdO1wiaW5uZXJIVE1MXCI9PT1iP2EuYS5kYyh0aGlzLkQsYyk6dGhpcy5EW2JdPWN9O3ZhciBiPWEuYS5nLlooKStcIl9cIjthLkIuRC5wcm90b3R5cGUuZGF0YT1mdW5jdGlvbihjKXtpZigxPT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gYS5hLmcuZ2V0KHRoaXMuRCxiK2MpO2EuYS5nLnNldCh0aGlzLkQsYitjLGFyZ3VtZW50c1sxXSl9O3ZhciBjPWEuYS5nLlooKTthLkIuRC5wcm90b3R5cGUubm9kZXM9ZnVuY3Rpb24oKXt2YXIgYj10aGlzLkQ7XG5pZigwPT1hcmd1bWVudHMubGVuZ3RoKXt2YXIgZT1hLmEuZy5nZXQoYixjKXx8e30sZj1lLmpifHwoMz09PXRoaXMuRGI/Yi5jb250ZW50OjQ9PT10aGlzLkRiP2I6cCk7aWYoIWZ8fGUuaGQpaWYoZT10aGlzLnRleHQoKSlmPWEuYS5MZChlLGIub3duZXJEb2N1bWVudCksdGhpcy50ZXh0KFwiXCIpLGEuYS5nLnNldChiLGMse2piOmYsaGQ6ITB9KTtyZXR1cm4gZn1hLmEuZy5zZXQoYixjLHtqYjphcmd1bWVudHNbMF19KX07YS5CLmlhPWZ1bmN0aW9uKGEpe3RoaXMuRD1hfTthLkIuaWEucHJvdG90eXBlPW5ldyBhLkIuRDthLkIuaWEucHJvdG90eXBlLmNvbnN0cnVjdG9yPWEuQi5pYTthLkIuaWEucHJvdG90eXBlLnRleHQ9ZnVuY3Rpb24oKXtpZigwPT1hcmd1bWVudHMubGVuZ3RoKXt2YXIgYj1hLmEuZy5nZXQodGhpcy5ELGMpfHx7fTtiLmpjPT09cCYmYi5qYiYmKGIuamM9Yi5qYi5pbm5lckhUTUwpO3JldHVybiBiLmpjfWEuYS5nLnNldCh0aGlzLkQsYyx7amM6YXJndW1lbnRzWzBdfSl9O1xuYS5iKFwidGVtcGxhdGVTb3VyY2VzXCIsYS5CKTthLmIoXCJ0ZW1wbGF0ZVNvdXJjZXMuZG9tRWxlbWVudFwiLGEuQi5EKTthLmIoXCJ0ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGVcIixhLkIuaWEpfSkoKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsYyxkKXt2YXIgZTtmb3IoYz1hLmgubmV4dFNpYmxpbmcoYyk7YiYmKGU9YikhPT1jOyliPWEuaC5uZXh0U2libGluZyhlKSxkKGUsYil9ZnVuY3Rpb24gYyhjLGQpe2lmKGMubGVuZ3RoKXt2YXIgZT1jWzBdLGY9Y1tjLmxlbmd0aC0xXSxnPWUucGFyZW50Tm9kZSxoPWEuZ2EuaW5zdGFuY2UsbT1oLnByZXByb2Nlc3NOb2RlO2lmKG0pe2IoZSxmLGZ1bmN0aW9uKGEsYil7dmFyIGM9YS5wcmV2aW91c1NpYmxpbmcsZD1tLmNhbGwoaCxhKTtkJiYoYT09PWUmJihlPWRbMF18fGIpLGE9PT1mJiYoZj1kW2QubGVuZ3RoLTFdfHxjKSl9KTtjLmxlbmd0aD0wO2lmKCFlKXJldHVybjtlPT09Zj9jLnB1c2goZSk6KGMucHVzaChlLGYpLGEuYS5VYShjLFxuZykpfWIoZSxmLGZ1bmN0aW9uKGIpezEhPT1iLm5vZGVUeXBlJiY4IT09Yi5ub2RlVHlwZXx8YS51YyhkLGIpfSk7YihlLGYsZnVuY3Rpb24oYil7MSE9PWIubm9kZVR5cGUmJjghPT1iLm5vZGVUeXBlfHxhLmFhLmJkKGIsW2RdKX0pO2EuYS5VYShjLGcpfX1mdW5jdGlvbiBkKGEpe3JldHVybiBhLm5vZGVUeXBlP2E6MDxhLmxlbmd0aD9hWzBdOm51bGx9ZnVuY3Rpb24gZShiLGUsZixoLG0pe209bXx8e307dmFyIHA9KGImJmQoYil8fGZ8fHt9KS5vd25lckRvY3VtZW50LEE9bS50ZW1wbGF0ZUVuZ2luZXx8ZzthLmljLndkKGYsQSxwKTtmPUEucmVuZGVyVGVtcGxhdGUoZixoLG0scCk7aWYoXCJudW1iZXJcIiE9dHlwZW9mIGYubGVuZ3RofHwwPGYubGVuZ3RoJiZcIm51bWJlclwiIT10eXBlb2YgZlswXS5ub2RlVHlwZSl0aHJvdyBFcnJvcihcIlRlbXBsYXRlIGVuZ2luZSBtdXN0IHJldHVybiBhbiBhcnJheSBvZiBET00gbm9kZXNcIik7cD0hMTtzd2l0Y2goZSl7Y2FzZSBcInJlcGxhY2VDaGlsZHJlblwiOmEuaC51YShiLFxuZik7cD0hMDticmVhaztjYXNlIFwicmVwbGFjZU5vZGVcIjphLmEuV2MoYixmKTtwPSEwO2JyZWFrO2Nhc2UgXCJpZ25vcmVUYXJnZXROb2RlXCI6YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcihcIlVua25vd24gcmVuZGVyTW9kZTogXCIrZSk7fXAmJihjKGYsaCksbS5hZnRlclJlbmRlciYmYS52LksobS5hZnRlclJlbmRlcixudWxsLFtmLGhbbS5hc3x8XCIkZGF0YVwiXV0pLFwicmVwbGFjZUNoaWxkcmVuXCI9PWUmJmEuai5HYShiLGEuai5UKSk7cmV0dXJuIGZ9ZnVuY3Rpb24gZihiLGMsZCl7cmV0dXJuIGEuTihiKT9iKCk6XCJmdW5jdGlvblwiPT09dHlwZW9mIGI/YihjLGQpOmJ9dmFyIGc7YS5lYz1mdW5jdGlvbihiKXtpZihiIT1wJiYhKGIgaW5zdGFuY2VvZiBhLmNhKSl0aHJvdyBFcnJvcihcInRlbXBsYXRlRW5naW5lIG11c3QgaW5oZXJpdCBmcm9tIGtvLnRlbXBsYXRlRW5naW5lXCIpO2c9Yn07YS5iYz1mdW5jdGlvbihiLGMsaCxtLHIpe2g9aHx8e307aWYoKGgudGVtcGxhdGVFbmdpbmV8fGcpPT1cbnApdGhyb3cgRXJyb3IoXCJTZXQgYSB0ZW1wbGF0ZSBlbmdpbmUgYmVmb3JlIGNhbGxpbmcgcmVuZGVyVGVtcGxhdGVcIik7cj1yfHxcInJlcGxhY2VDaGlsZHJlblwiO2lmKG0pe3ZhciB5PWQobSk7cmV0dXJuIGEuJChmdW5jdGlvbigpe3ZhciBnPWMmJmMgaW5zdGFuY2VvZiBhLmZhP2M6bmV3IGEuZmEoYyxudWxsLG51bGwsbnVsbCx7ZXhwb3J0RGVwZW5kZW5jaWVzOiEwfSkscD1mKGIsZy4kZGF0YSxnKSxnPWUobSxyLHAsZyxoKTtcInJlcGxhY2VOb2RlXCI9PXImJihtPWcseT1kKG0pKX0sbnVsbCx7U2E6ZnVuY3Rpb24oKXtyZXR1cm4heXx8IWEuYS5SYih5KX0sbDp5JiZcInJlcGxhY2VOb2RlXCI9PXI/eS5wYXJlbnROb2RlOnl9KX1yZXR1cm4gYS5hYS5XYihmdW5jdGlvbihkKXthLmJjKGIsYyxoLGQsXCJyZXBsYWNlTm9kZVwiKX0pfTthLlBkPWZ1bmN0aW9uKGIsZCxnLGgsbSl7ZnVuY3Rpb24geShiLGMpe2Eudi5LKGEuYS5jYyxudWxsLFtoLGIsdSxnLHQsY10pO2Euai5HYShoLGEuai5UKX1cbmZ1bmN0aW9uIHQoYSxiKXtjKGIsdik7Zy5hZnRlclJlbmRlciYmZy5hZnRlclJlbmRlcihiLGEpO3Y9bnVsbH1mdW5jdGlvbiB1KGEsYyl7dj1tLmNyZWF0ZUNoaWxkQ29udGV4dChhLHthczpCLG5vQ2hpbGRDb250ZXh0Omcubm9DaGlsZENvbnRleHQsZXh0ZW5kOmZ1bmN0aW9uKGEpe2EuJGluZGV4PWM7QiYmKGFbQitcIkluZGV4XCJdPWMpfX0pO3ZhciBkPWYoYixhLHYpO3JldHVybiBlKGgsXCJpZ25vcmVUYXJnZXROb2RlXCIsZCx2LGcpfXZhciB2LEI9Zy5hcyx3PSExPT09Zy5pbmNsdWRlRGVzdHJveWVkfHxhLm9wdGlvbnMuZm9yZWFjaEhpZGVzRGVzdHJveWVkJiYhZy5pbmNsdWRlRGVzdHJveWVkO2lmKHd8fGcuYmVmb3JlUmVtb3ZlfHwhYS5PYyhkKSlyZXR1cm4gYS4kKGZ1bmN0aW9uKCl7dmFyIGI9YS5hLmMoZCl8fFtdO1widW5kZWZpbmVkXCI9PXR5cGVvZiBiLmxlbmd0aCYmKGI9W2JdKTt3JiYoYj1hLmEuZmIoYixmdW5jdGlvbihiKXtyZXR1cm4gYj09PXB8fG51bGw9PT1ifHxcbiFhLmEuYyhiLl9kZXN0cm95KX0pKTt5KGIpfSxudWxsLHtsOmh9KTt5KGQudygpKTt2YXIgej1kLnN1YnNjcmliZShmdW5jdGlvbihhKXt5KGQoKSxhKX0sbnVsbCxcImFycmF5Q2hhbmdlXCIpO3oubChoKTtyZXR1cm4gen07dmFyIGg9YS5hLmcuWigpLG09YS5hLmcuWigpO2EuZi50ZW1wbGF0ZT17aW5pdDpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5jKGMoKSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGR8fGQubmFtZSlhLmguRWEoYik7ZWxzZSBpZihcIm5vZGVzXCJpbiBkKXtkPWQubm9kZXN8fFtdO2lmKGEuTihkKSl0aHJvdyBFcnJvcignVGhlIFwibm9kZXNcIiBvcHRpb24gbXVzdCBiZSBhIHBsYWluLCBub24tb2JzZXJ2YWJsZSBhcnJheS4nKTt2YXIgZT1kWzBdJiZkWzBdLnBhcmVudE5vZGU7ZSYmYS5hLmcuZ2V0KGUsbSl8fChlPWEuYS5YYihkKSxhLmEuZy5zZXQoZSxtLCEwKSk7KG5ldyBhLkIuaWEoYikpLm5vZGVzKGUpfWVsc2UgaWYoZD1hLmguY2hpbGROb2RlcyhiKSwwPGQubGVuZ3RoKWU9XG5hLmEuWGIoZCksKG5ldyBhLkIuaWEoYikpLm5vZGVzKGUpO2Vsc2UgdGhyb3cgRXJyb3IoXCJBbm9ueW1vdXMgdGVtcGxhdGUgZGVmaW5lZCwgYnV0IG5vIHRlbXBsYXRlIGNvbnRlbnQgd2FzIHByb3ZpZGVkXCIpO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19LHVwZGF0ZTpmdW5jdGlvbihiLGMsZCxlLGYpe3ZhciBnPWMoKTtjPWEuYS5jKGcpO2Q9ITA7ZT1udWxsO1wic3RyaW5nXCI9PXR5cGVvZiBjP2M9e306KGc9Yy5uYW1lLFwiaWZcImluIGMmJihkPWEuYS5jKGNbXCJpZlwiXSkpLGQmJlwiaWZub3RcImluIGMmJihkPSFhLmEuYyhjLmlmbm90KSkpO1wiZm9yZWFjaFwiaW4gYz9lPWEuUGQoZ3x8YixkJiZjLmZvcmVhY2h8fFtdLGMsYixmKTpkPyhkPWYsXCJkYXRhXCJpbiBjJiYoZD1mLmNyZWF0ZUNoaWxkQ29udGV4dChjLmRhdGEse2FzOmMuYXMsbm9DaGlsZENvbnRleHQ6Yy5ub0NoaWxkQ29udGV4dCxleHBvcnREZXBlbmRlbmNpZXM6ITB9KSksZT1hLmJjKGd8fGIsZCxjLFxuYikpOmEuaC5FYShiKTtmPWU7KGM9YS5hLmcuZ2V0KGIsaCkpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBjLnMmJmMucygpO2EuYS5nLnNldChiLGgsIWZ8fGYuamEmJiFmLmphKCk/cDpmKX19O2EubS5SYS50ZW1wbGF0ZT1mdW5jdGlvbihiKXtiPWEubS5aYihiKTtyZXR1cm4gMT09Yi5sZW5ndGgmJmJbMF0udW5rbm93bnx8YS5tLkhkKGIsXCJuYW1lXCIpP251bGw6XCJUaGlzIHRlbXBsYXRlIGVuZ2luZSBkb2VzIG5vdCBzdXBwb3J0IGFub255bW91cyB0ZW1wbGF0ZXMgbmVzdGVkIHdpdGhpbiBpdHMgdGVtcGxhdGVzXCJ9O2EuaC5lYS50ZW1wbGF0ZT0hMH0pKCk7YS5iKFwic2V0VGVtcGxhdGVFbmdpbmVcIixhLmVjKTthLmIoXCJyZW5kZXJUZW1wbGF0ZVwiLGEuYmMpO2EuYS5KYz1mdW5jdGlvbihhLGMsZCl7aWYoYS5sZW5ndGgmJmMubGVuZ3RoKXt2YXIgZSxmLGcsaCxtO2ZvcihlPWY9MDsoIWR8fGU8ZCkmJihoPWFbZl0pOysrZil7Zm9yKGc9MDttPWNbZ107KytnKWlmKGgudmFsdWU9PT1tLnZhbHVlKXtoLm1vdmVkPVxubS5pbmRleDttLm1vdmVkPWguaW5kZXg7Yy5zcGxpY2UoZywxKTtlPWc9MDticmVha31lKz1nfX19O2EuYS5PYj1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixkLGUsZixnKXt2YXIgaD1NYXRoLm1pbixtPU1hdGgubWF4LGw9W10sayxwPWIubGVuZ3RoLG4scj1kLmxlbmd0aCx0PXItcHx8MSxBPXArcisxLHUsdix3O2ZvcihrPTA7azw9cDtrKyspZm9yKHY9dSxsLnB1c2godT1bXSksdz1oKHIsayt0KSxuPW0oMCxrLTEpO248PXc7bisrKXVbbl09bj9rP2Jbay0xXT09PWRbbi0xXT92W24tMV06aCh2W25dfHxBLHVbbi0xXXx8QSkrMTpuKzE6aysxO2g9W107bT1bXTt0PVtdO2s9cDtmb3Iobj1yO2t8fG47KXI9bFtrXVtuXS0xLG4mJnI9PT1sW2tdW24tMV0/bS5wdXNoKGhbaC5sZW5ndGhdPXtzdGF0dXM6ZSx2YWx1ZTpkWy0tbl0saW5kZXg6bn0pOmsmJnI9PT1sW2stMV1bbl0/dC5wdXNoKGhbaC5sZW5ndGhdPXtzdGF0dXM6Zix2YWx1ZTpiWy0ta10saW5kZXg6a30pOigtLW4sLS1rLFxuZy5zcGFyc2V8fGgucHVzaCh7c3RhdHVzOlwicmV0YWluZWRcIix2YWx1ZTpkW25dfSkpO2EuYS5KYyh0LG0sIWcuZG9udExpbWl0TW92ZXMmJjEwKnApO3JldHVybiBoLnJldmVyc2UoKX1yZXR1cm4gZnVuY3Rpb24oYSxkLGUpe2U9XCJib29sZWFuXCI9PT10eXBlb2YgZT97ZG9udExpbWl0TW92ZXM6ZX06ZXx8e307YT1hfHxbXTtkPWR8fFtdO3JldHVybiBhLmxlbmd0aDxkLmxlbmd0aD9iKGEsZCxcImFkZGVkXCIsXCJkZWxldGVkXCIsZSk6YihkLGEsXCJkZWxldGVkXCIsXCJhZGRlZFwiLGUpfX0oKTthLmIoXCJ1dGlscy5jb21wYXJlQXJyYXlzXCIsYS5hLk9iKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsYyxkLGgsbSl7dmFyIGw9W10saz1hLiQoZnVuY3Rpb24oKXt2YXIgaz1jKGQsbSxhLmEuVWEobCxiKSl8fFtdOzA8bC5sZW5ndGgmJihhLmEuV2MobCxrKSxoJiZhLnYuSyhoLG51bGwsW2QsayxtXSkpO2wubGVuZ3RoPTA7YS5hLmdiKGwsayl9LG51bGwse2w6YixTYTpmdW5jdGlvbigpe3JldHVybiFhLmEuamQobCl9fSk7XG5yZXR1cm57WTpsLCQ6ay5qYSgpP2s6cH19dmFyIGM9YS5hLmcuWigpLGQ9YS5hLmcuWigpO2EuYS5jYz1mdW5jdGlvbihlLGYsZyxoLG0sbCl7ZnVuY3Rpb24gayhiKXt4PXtBYTpiLG5iOmEuc2EodysrKX07di5wdXNoKHgpO3R8fEYucHVzaCh4KX1mdW5jdGlvbiBxKGIpe3g9cltiXTt3IT09eC5uYi53KCkmJkQucHVzaCh4KTt4Lm5iKHcrKyk7YS5hLlVhKHguWSxlKTt2LnB1c2goeCl9ZnVuY3Rpb24gbihiLGMpe2lmKGIpZm9yKHZhciBkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKWEuYS5DKGNbZF0uWSxmdW5jdGlvbihhKXtiKGEsZCxjW2RdLkFhKX0pfWY9Znx8W107XCJ1bmRlZmluZWRcIj09dHlwZW9mIGYubGVuZ3RoJiYoZj1bZl0pO2g9aHx8e307dmFyIHI9YS5hLmcuZ2V0KGUsYyksdD0hcix2PVtdLHU9MCx3PTAsQj1bXSx6PVtdLEM9W10sRD1bXSxGPVtdLHgsST0wO2lmKHQpYS5hLkMoZixrKTtlbHNle2lmKCFsfHxyJiZyLl9jb3VudFdhaXRpbmdGb3JSZW1vdmUpe3ZhciBFPVxuYS5hLk1iKHIsZnVuY3Rpb24oYSl7cmV0dXJuIGEuQWF9KTtsPWEuYS5PYihFLGYse2RvbnRMaW1pdE1vdmVzOmguZG9udExpbWl0TW92ZXMsc3BhcnNlOiEwfSl9Zm9yKHZhciBFPTAsRyxILEs7Rz1sW0VdO0UrKylzd2l0Y2goSD1HLm1vdmVkLEs9Ry5pbmRleCxHLnN0YXR1cyl7Y2FzZSBcImRlbGV0ZWRcIjpmb3IoO3U8SzspcSh1KyspO0g9PT1wJiYoeD1yW3VdLHguJCYmKHguJC5zKCkseC4kPXApLGEuYS5VYSh4LlksZSkubGVuZ3RoJiYoaC5iZWZvcmVSZW1vdmUmJih2LnB1c2goeCksSSsrLHguQWE9PT1kP3g9bnVsbDpDLnB1c2goeCkpLHgmJkIucHVzaC5hcHBseShCLHguWSkpKTt1Kys7YnJlYWs7Y2FzZSBcImFkZGVkXCI6Zm9yKDt3PEs7KXEodSsrKTtIIT09cD8oei5wdXNoKHYubGVuZ3RoKSxxKEgpKTprKEcudmFsdWUpfWZvcig7dzxmLmxlbmd0aDspcSh1KyspO3YuX2NvdW50V2FpdGluZ0ZvclJlbW92ZT1JfWEuYS5nLnNldChlLGMsdik7bihoLmJlZm9yZU1vdmUsRCk7YS5hLkMoQixcbmguYmVmb3JlUmVtb3ZlP2EubmE6YS5yZW1vdmVOb2RlKTt2YXIgTSxPLFA7dHJ5e1A9ZS5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnR9Y2F0Y2goTil7fWlmKHoubGVuZ3RoKWZvcig7KEU9ei5zaGlmdCgpKSE9cDspe3g9dltFXTtmb3IoTT1wO0U7KWlmKChPPXZbLS1FXS5ZKSYmTy5sZW5ndGgpe009T1tPLmxlbmd0aC0xXTticmVha31mb3IoZj0wO3U9eC5ZW2ZdO009dSxmKyspYS5oLlZiKGUsdSxNKX1FPTA7Zm9yKHo9YS5oLmZpcnN0Q2hpbGQoZSk7eD12W0VdO0UrKyl7eC5ZfHxhLmEuZXh0ZW5kKHgsYihlLGcseC5BYSxtLHgubmIpKTtmb3IoZj0wO3U9eC5ZW2ZdO3o9dS5uZXh0U2libGluZyxNPXUsZisrKXUhPT16JiZhLmguVmIoZSx1LE0pOyF4LkRkJiZtJiYobSh4LkFhLHguWSx4Lm5iKSx4LkRkPSEwLE09eC5ZW3guWS5sZW5ndGgtMV0pfVAmJmUub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50IT1QJiZQLmZvY3VzKCk7bihoLmJlZm9yZVJlbW92ZSxDKTtmb3IoRT1cbjA7RTxDLmxlbmd0aDsrK0UpQ1tFXS5BYT1kO24oaC5hZnRlck1vdmUsRCk7bihoLmFmdGVyQWRkLEYpfX0pKCk7YS5iKFwidXRpbHMuc2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZ1wiLGEuYS5jYyk7YS5iYT1mdW5jdGlvbigpe3RoaXMuYWxsb3dUZW1wbGF0ZVJld3JpdGluZz0hMX07YS5iYS5wcm90b3R5cGU9bmV3IGEuY2E7YS5iYS5wcm90b3R5cGUuY29uc3RydWN0b3I9YS5iYTthLmJhLnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZVNvdXJjZT1mdW5jdGlvbihiLGMsZCxlKXtpZihjPSg5PmEuYS5XPzA6Yi5ub2Rlcyk/Yi5ub2RlcygpOm51bGwpcmV0dXJuIGEuYS5sYShjLmNsb25lTm9kZSghMCkuY2hpbGROb2Rlcyk7Yj1iLnRleHQoKTtyZXR1cm4gYS5hLnRhKGIsZSl9O2EuYmEuTmE9bmV3IGEuYmE7YS5lYyhhLmJhLk5hKTthLmIoXCJuYXRpdmVUZW1wbGF0ZUVuZ2luZVwiLGEuYmEpOyhmdW5jdGlvbigpe2EuWmE9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLkdkPWZ1bmN0aW9uKCl7aWYoIXZ8fFxuIXYudG1wbClyZXR1cm4gMDt0cnl7aWYoMDw9di50bXBsLnRhZy50bXBsLm9wZW4udG9TdHJpbmcoKS5pbmRleE9mKFwiX19cIikpcmV0dXJuIDJ9Y2F0Y2goYSl7fXJldHVybiAxfSgpO3RoaXMucmVuZGVyVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oYixlLGYsZyl7Zz1nfHx3O2Y9Znx8e307aWYoMj5hKXRocm93IEVycm9yKFwiWW91ciB2ZXJzaW9uIG9mIGpRdWVyeS50bXBsIGlzIHRvbyBvbGQuIFBsZWFzZSB1cGdyYWRlIHRvIGpRdWVyeS50bXBsIDEuMC4wcHJlIG9yIGxhdGVyLlwiKTt2YXIgaD1iLmRhdGEoXCJwcmVjb21waWxlZFwiKTtofHwoaD1iLnRleHQoKXx8XCJcIixoPXYudGVtcGxhdGUobnVsbCxcInt7a29fd2l0aCAkaXRlbS5rb0JpbmRpbmdDb250ZXh0fX1cIitoK1wie3sva29fd2l0aH19XCIpLGIuZGF0YShcInByZWNvbXBpbGVkXCIsaCkpO2I9W2UuJGRhdGFdO2U9di5leHRlbmQoe2tvQmluZGluZ0NvbnRleHQ6ZX0sZi50ZW1wbGF0ZU9wdGlvbnMpO2U9di50bXBsKGgsYixlKTtlLmFwcGVuZFRvKGcuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG52LmZyYWdtZW50cz17fTtyZXR1cm4gZX07dGhpcy5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2s9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ7e2tvX2NvZGUgKChmdW5jdGlvbigpIHsgcmV0dXJuIFwiK2ErXCIgfSkoKSkgfX1cIn07dGhpcy5hZGRUZW1wbGF0ZT1mdW5jdGlvbihhLGIpe3cud3JpdGUoXCI8c2NyaXB0IHR5cGU9J3RleHQvaHRtbCcgaWQ9J1wiK2ErXCInPlwiK2IrXCJcXHgzYy9zY3JpcHQ+XCIpfTswPGEmJih2LnRtcGwudGFnLmtvX2NvZGU9e29wZW46XCJfXy5wdXNoKCQxIHx8ICcnKTtcIn0sdi50bXBsLnRhZy5rb193aXRoPXtvcGVuOlwid2l0aCgkMSkge1wiLGNsb3NlOlwifSBcIn0pfTthLlphLnByb3RvdHlwZT1uZXcgYS5jYTthLlphLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hLlphO3ZhciBiPW5ldyBhLlphOzA8Yi5HZCYmYS5lYyhiKTthLmIoXCJqcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmVcIixhLlphKX0pKCl9KX0pKCk7fSkoKTtcbiJdfQ==
