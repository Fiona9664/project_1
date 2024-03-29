var Zepto = function() {
    function L(t) {
        return null == t ? String(t) : j[S.call(t)] || "object"
    }
    function Z(t) {
        return "function" == L(t)
    }
    function $(t) {
        return null != t && t == t.window
    }
    function _(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }
    function D(t) {
        return "object" == L(t)
    }
    function R(t) {
        return D(t) && !$(t) && Object.getPrototypeOf(t) == Object.prototype
    }
    function M(t) {
        return "number" == typeof t.length
    }
    function k(t) {
        return s.call(t,
        function(t) {
            return null != t
        })
    }
    function z(t) {
        return t.length > 0 ? n.fn.concat.apply([], t) : t
    }
    function F(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function q(t) {
        return t in f ? f[t] : f[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }
    function H(t, e) {
        return "number" != typeof e || c[F(t)] ? e: e + "px"
    }
    function I(t) {
        var e, n;
        return u[t] || (e = a.createElement(t), a.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), u[t] = n),
        u[t]
    }
    function V(t) {
        return "children" in t ? o.call(t.children) : n.map(t.childNodes,
        function(t) {
            return 1 == t.nodeType ? t: void 0
        })
    }
    function B(n, i, r) {
        for (e in i) r && (R(i[e]) || A(i[e])) ? (R(i[e]) && !R(n[e]) && (n[e] = {}), A(i[e]) && !A(n[e]) && (n[e] = []), B(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e])
    }
    function U(t, e) {
        return null == e ? n(t) : n(t).filter(e)
    }
    function J(t, e, n, i) {
        return Z(e) ? e.call(t, n, i) : e
    }
    function X(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }
    function W(e, n) {
        var i = e.className,
        r = i && i.baseVal !== t;
        return n === t ? r ? i.baseVal: i: void(r ? i.baseVal = n: e.className = n)
    }
    function Y(t) {
        var e;
        try {
            return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null: /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? n.parseJSON(t) : t: e) : t
        } catch(i) {
            return t
        }
    }
    function G(t, e) {
        e(t);
        for (var n = 0,
        i = t.childNodes.length; i > n; n++) G(t.childNodes[n], e)
    }
    var t, e, n, i, C, N, r = [],
    o = r.slice,
    s = r.filter,
    a = window.document,
    u = {},
    f = {},
    c = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    },
    l = /^\s*<(\w+|!)[^>]*>/,
    h = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    d = /^(?:body|html)$/i,
    m = /([A-Z])/g,
    g = ["val", "css", "html", "text", "data", "width", "height", "offset"],
    v = ["after", "prepend", "before", "append"],
    y = a.createElement("table"),
    x = a.createElement("tr"),
    b = {
        tr: a.createElement("tbody"),
        tbody: y,
        thead: y,
        tfoot: y,
        td: x,
        th: x,
        "*": a.createElement("div")
    },
    w = /complete|loaded|interactive/,
    E = /^[\w-]*$/,
    j = {},
    S = j.toString,
    T = {},
    O = a.createElement("div"),
    P = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    },
    A = Array.isArray ||
    function(t) {
        return t instanceof Array
    };
    return T.matches = function(t, e) {
        if (!e || !t || 1 !== t.nodeType) return ! 1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n) return n.call(t, e);
        var i, r = t.parentNode,
        o = !r;
        return o && (r = O).appendChild(t),
        i = ~T.qsa(r, e).indexOf(t),
        o && O.removeChild(t),
        i
    },
    C = function(t) {
        return t.replace(/-+(.)?/g,
        function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    },
    N = function(t) {
        return s.call(t,
        function(e, n) {
            return t.indexOf(e) == n
        })
    },
    T.fragment = function(e, i, r) {
        var s, u, f;
        return h.test(e) && (s = n(a.createElement(RegExp.$1))),
        s || (e.replace && (e = e.replace(p, "<$1></$2>")), i === t && (i = l.test(e) && RegExp.$1), i in b || (i = "*"), f = b[i], f.innerHTML = "" + e, s = n.each(o.call(f.childNodes),
        function() {
            f.removeChild(this)
        })),
        R(r) && (u = n(s), n.each(r,
        function(t, e) {
            g.indexOf(t) > -1 ? u[t](e) : u.attr(t, e)
        })),
        s
    },
    T.Z = function(t, e) {
        return t = t || [],
        t.__proto__ = n.fn,
        t.selector = e || "",
        t
    },
    T.isZ = function(t) {
        return t instanceof T.Z
    },
    T.init = function(e, i) {
        var r;
        if (!e) return T.Z();
        if ("string" == typeof e) if (e = e.trim(), "<" == e[0] && l.test(e)) r = T.fragment(e, RegExp.$1, i),
        e = null;
        else {
            if (i !== t) return n(i).find(e);
            r = T.qsa(a, e)
        } else {
            if (Z(e)) return n(a).ready(e);
            if (T.isZ(e)) return e;
            if (A(e)) r = k(e);
            else if (D(e)) r = [e],
            e = null;
            else if (l.test(e)) r = T.fragment(e.trim(), RegExp.$1, i),
            e = null;
            else {
                if (i !== t) return n(i).find(e);
                r = T.qsa(a, e)
            }
        }
        return T.Z(r, e)
    },
    n = function(t, e) {
        return T.init(t, e)
    },
    n.extend = function(t) {
        var e, n = o.call(arguments, 1);
        return "boolean" == typeof t && (e = t, t = n.shift()),
        n.forEach(function(n) {
            B(t, n, e)
        }),
        t
    },
    T.qsa = function(t, e) {
        var n, i = "#" == e[0],
        r = !i && "." == e[0],
        s = i || r ? e.slice(1) : e,
        a = E.test(s);
        return _(t) && a && i ? (n = t.getElementById(s)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : o.call(a && !i ? r ? t.getElementsByClassName(s) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    },
    n.contains = a.documentElement.contains ?
    function(t, e) {
        return t !== e && t.contains(e)
    }: function(t, e) {
        for (; e && (e = e.parentNode);) if (e === t) return ! 0;
        return ! 1
    },
    n.type = L,
    n.isFunction = Z,
    n.isWindow = $,
    n.isArray = A,
    n.isPlainObject = R,
    n.isEmptyObject = function(t) {
        var e;
        for (e in t) return ! 1;
        return ! 0
    },
    n.inArray = function(t, e, n) {
        return r.indexOf.call(e, t, n)
    },
    n.camelCase = C,
    n.trim = function(t) {
        return null == t ? "": String.prototype.trim.call(t)
    },
    n.uuid = 0,
    n.support = {},
    n.expr = {},
    n.map = function(t, e) {
        var n, r, o, i = [];
        if (M(t)) for (r = 0; r < t.length; r++) n = e(t[r], r),
        null != n && i.push(n);
        else for (o in t) n = e(t[o], o),
        null != n && i.push(n);
        return z(i)
    },
    n.each = function(t, e) {
        var n, i;
        if (M(t)) {
            for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t
        } else for (i in t) if (e.call(t[i], i, t[i]) === !1) return t;
        return t
    },
    n.grep = function(t, e) {
        return s.call(t, e)
    },
    window.JSON && (n.parseJSON = JSON.parse),
    n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(t, e) {
        j["[object " + e + "]"] = e.toLowerCase()
    }),
    n.fn = {
        forEach: r.forEach,
        reduce: r.reduce,
        push: r.push,
        sort: r.sort,
        indexOf: r.indexOf,
        concat: r.concat,
        map: function(t) {
            return n(n.map(this,
            function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return n(o.apply(this, arguments))
        },
        ready: function(t) {
            return w.test(a.readyState) && a.body ? t(n) : a.addEventListener("DOMContentLoaded",
            function() {
                t(n)
            },
            !1),
            this
        },
        get: function(e) {
            return e === t ? o.call(this) : this[e >= 0 ? e: e + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(t) {
            return r.every.call(this,
            function(e, n) {
                return t.call(e, n, e) !== !1
            }),
            this
        },
        filter: function(t) {
            return Z(t) ? this.not(this.not(t)) : n(s.call(this,
            function(e) {
                return T.matches(e, t)
            }))
        },
        add: function(t, e) {
            return n(N(this.concat(n(t, e))))
        },
        is: function(t) {
            return this.length > 0 && T.matches(this[0], t)
        },
        not: function(e) {
            var i = [];
            if (Z(e) && e.call !== t) this.each(function(t) {
                e.call(this, t) || i.push(this)
            });
            else {
                var r = "string" == typeof e ? this.filter(e) : M(e) && Z(e.item) ? o.call(e) : n(e);
                this.forEach(function(t) {
                    r.indexOf(t) < 0 && i.push(t)
                })
            }
            return n(i)
        },
        has: function(t) {
            return this.filter(function() {
                return D(t) ? n.contains(this, t) : n(this).find(t).size()
            })
        },
        eq: function(t) {
            return - 1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function() {
            var t = this[0];
            return t && !D(t) ? t: n(t)
        },
        last: function() {
            var t = this[this.length - 1];
            return t && !D(t) ? t: n(t)
        },
        find: function(t) {
            var e, i = this;
            return e = t ? "object" == typeof t ? n(t).filter(function() {
                var t = this;
                return r.some.call(i,
                function(e) {
                    return n.contains(e, t)
                })
            }) : 1 == this.length ? n(T.qsa(this[0], t)) : this.map(function() {
                return T.qsa(this, t)
            }) : []
        },
        closest: function(t, e) {
            var i = this[0],
            r = !1;
            for ("object" == typeof t && (r = n(t)); i && !(r ? r.indexOf(i) >= 0 : T.matches(i, t));) i = i !== e && !_(i) && i.parentNode;
            return n(i)
        },
        parents: function(t) {
            for (var e = [], i = this; i.length > 0;) i = n.map(i,
            function(t) {
                return (t = t.parentNode) && !_(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
            });
            return U(e, t)
        },
        parent: function(t) {
            return U(N(this.pluck("parentNode")), t)
        },
        children: function(t) {
            return U(this.map(function() {
                return V(this)
            }), t)
        },
        contents: function() {
            return this.map(function() {
                return o.call(this.childNodes)
            })
        },
        siblings: function(t) {
            return U(this.map(function(t, e) {
                return s.call(V(e.parentNode),
                function(t) {
                    return t !== e
                })
            }), t)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(t) {
            return n.map(this,
            function(e) {
                return e[t]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = ""),
                "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = I(this.nodeName))
            })
        },
        replaceWith: function(t) {
            return this.before(t).remove()
        },
        wrap: function(t) {
            var e = Z(t);
            if (this[0] && !e) var i = n(t).get(0),
            r = i.parentNode || this.length > 1;
            return this.each(function(o) {
                n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i)
            })
        },
        wrapAll: function(t) {
            if (this[0]) {
                n(this[0]).before(t = n(t));
                for (var e; (e = t.children()).length;) t = e.first();
                n(t).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            var e = Z(t);
            return this.each(function(i) {
                var r = n(this),
                o = r.contents(),
                s = e ? t.call(this, i) : t;
                o.length ? o.wrapAll(s) : r.append(s)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n(this).replaceWith(n(this).children())
            }),
            this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(e) {
            return this.each(function() {
                var i = n(this); (e === t ? "none" == i.css("display") : e) ? i.show() : i.hide()
            })
        },
        prev: function(t) {
            return n(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function(t) {
            return n(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var i = this.innerHTML;
                n(this).empty().append(J(this, t, e, i))
            }) : 0 in this ? this[0].innerHTML: null
        },
        text: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var n = J(this, t, e, this.textContent);
                this.textContent = null == n ? "": "" + n
            }) : 0 in this ? this[0].textContent: null
        },
        attr: function(n, i) {
            var r;
            return "string" != typeof n || 1 in arguments ? this.each(function(t) {
                if (1 === this.nodeType) if (D(n)) for (e in n) X(this, e, n[e]);
                else X(this, n, J(this, i, t, this.getAttribute(n)))
            }) : this.length && 1 === this[0].nodeType ? !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r: t
        },
        removeAttr: function(t) {
            return this.each(function() {
                1 === this.nodeType && X(this, t)
            })
        },
        prop: function(t, e) {
            return t = P[t] || t,
            1 in arguments ? this.each(function(n) {
                this[t] = J(this, e, n, this[t])
            }) : this[0] && this[0][t]
        },
        data: function(e, n) {
            var i = "data-" + e.replace(m, "-$1").toLowerCase(),
            r = 1 in arguments ? this.attr(i, n) : this.attr(i);
            return null !== r ? Y(r) : t
        },
        val: function(t) {
            return 0 in arguments ? this.each(function(e) {
                this.value = J(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function(t) {
            if (t) return this.each(function(e) {
                var i = n(this),
                r = J(this, t, e, i.offset()),
                o = i.offsetParent().offset(),
                s = {
                    top: r.top - o.top,
                    left: r.left - o.left
                };
                "static" == i.css("position") && (s.position = "relative"),
                i.css(s)
            });
            if (!this.length) return null;
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function(t, i) {
            if (arguments.length < 2) {
                var r = this[0],
                o = getComputedStyle(r, "");
                if (!r) return;
                if ("string" == typeof t) return r.style[C(t)] || o.getPropertyValue(t);
                if (A(t)) {
                    var s = {};
                    return n.each(A(t) ? t: [t],
                    function(t, e) {
                        s[e] = r.style[C(e)] || o.getPropertyValue(e)
                    }),
                    s
                }
            }
            var a = "";
            if ("string" == L(t)) i || 0 === i ? a = F(t) + ":" + H(t, i) : this.each(function() {
                this.style.removeProperty(F(t))
            });
            else for (e in t) t[e] || 0 === t[e] ? a += F(e) + ":" + H(e, t[e]) + ";": this.each(function() {
                this.style.removeProperty(F(e))
            });
            return this.each(function() {
                this.style.cssText += ";" + a
            })
        },
        index: function(t) {
            return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(t) {
            return t ? r.some.call(this,
            function(t) {
                return this.test(W(t))
            },
            q(t)) : !1
        },
        addClass: function(t) {
            return t ? this.each(function(e) {
                i = [];
                var r = W(this),
                o = J(this, t, e, r);
                o.split(/\s+/g).forEach(function(t) {
                    n(this).hasClass(t) || i.push(t)
                },
                this),
                i.length && W(this, r + (r ? " ": "") + i.join(" "))
            }) : this
        },
        removeClass: function(e) {
            return this.each(function(n) {
                return e === t ? W(this, "") : (i = W(this), J(this, e, n, i).split(/\s+/g).forEach(function(t) {
                    i = i.replace(q(t), " ")
                }), void W(this, i.trim()))
            })
        },
        toggleClass: function(e, i) {
            return e ? this.each(function(r) {
                var o = n(this),
                s = J(this, e, r, W(this));
                s.split(/\s+/g).forEach(function(e) { (i === t ? !o.hasClass(e) : i) ? o.addClass(e) : o.removeClass(e)
                })
            }) : this
        },
        scrollTop: function(e) {
            if (this.length) {
                var n = "scrollTop" in this[0];
                return e === t ? n ? this[0].scrollTop: this[0].pageYOffset: this.each(n ?
                function() {
                    this.scrollTop = e
                }: function() {
                    this.scrollTo(this.scrollX, e)
                })
            }
        },
        scrollLeft: function(e) {
            if (this.length) {
                var n = "scrollLeft" in this[0];
                return e === t ? n ? this[0].scrollLeft: this[0].pageXOffset: this.each(n ?
                function() {
                    this.scrollLeft = e
                }: function() {
                    this.scrollTo(e, this.scrollY)
                })
            }
        },
        position: function() {
            if (this.length) {
                var t = this[0],
                e = this.offsetParent(),
                i = this.offset(),
                r = d.test(e[0].nodeName) ? {
                    top: 0,
                    left: 0
                }: e.offset();
                return i.top -= parseFloat(n(t).css("margin-top")) || 0,
                i.left -= parseFloat(n(t).css("margin-left")) || 0,
                r.top += parseFloat(n(e[0]).css("border-top-width")) || 0,
                r.left += parseFloat(n(e[0]).css("border-left-width")) || 0,
                {
                    top: i.top - r.top,
                    left: i.left - r.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || a.body; t && !d.test(t.nodeName) && "static" == n(t).css("position");) t = t.offsetParent;
                return t
            })
        }
    },
    n.fn.detach = n.fn.remove,
    ["width", "height"].forEach(function(e) {
        var i = e.replace(/./,
        function(t) {
            return t[0].toUpperCase()
        });
        n.fn[e] = function(r) {
            var o, s = this[0];
            return r === t ? $(s) ? s["inner" + i] : _(s) ? s.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function(t) {
                s = n(this),
                s.css(e, J(this, r, t, s[e]()))
            })
        }
    }),
    v.forEach(function(t, e) {
        var i = e % 2;
        n.fn[t] = function() {
            var t, o, r = n.map(arguments,
            function(e) {
                return t = L(e),
                "object" == t || "array" == t || null == e ? e: T.fragment(e)
            }),
            s = this.length > 1;
            return r.length < 1 ? this: this.each(function(t, u) {
                o = i ? u: u.parentNode,
                u = 0 == e ? u.nextSibling: 1 == e ? u.firstChild: 2 == e ? u: null;
                var f = n.contains(a.documentElement, o);
                r.forEach(function(t) {
                    if (s) t = t.cloneNode(!0);
                    else if (!o) return n(t).remove();
                    o.insertBefore(t, u),
                    f && G(t,
                    function(t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        },
        n.fn[i ? t + "To": "insert" + (e ? "Before": "After")] = function(e) {
            return n(e)[t](this),
            this
        }
    }),
    T.Z.prototype = n.fn,
    T.uniq = N,
    T.deserializeValue = Y,
    n.zepto = T,
    n
} ();
window.Zepto = Zepto,
void 0 === window.$ && (window.$ = Zepto),
function(t) {
    function l(t) {
        return t._zid || (t._zid = e++)
    }
    function h(t, e, n, i) {
        if (e = p(e), e.ns) var r = d(e.ns);
        return (s[l(t)] || []).filter(function(t) {
            return ! (!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i)
        })
    }
    function p(t) {
        var e = ("" + t).split(".");
        return {
            e: e[0],
            ns: e.slice(1).sort().join(" ")
        }
    }
    function d(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }
    function m(t, e) {
        return t.del && !u && t.e in f || !!e
    }
    function g(t) {
        return c[t] || u && f[t] || t
    }
    function v(e, i, r, o, a, u, f) {
        var h = l(e),
        d = s[h] || (s[h] = []);
        i.split(/\s/).forEach(function(i) {
            if ("ready" == i) return t(document).ready(r);
            var s = p(i);
            s.fn = r,
            s.sel = a,
            s.e in c && (r = function(e) {
                var n = e.relatedTarget;
                return ! n || n !== this && !t.contains(this, n) ? s.fn.apply(this, arguments) : void 0
            }),
            s.del = u;
            var l = u || r;
            s.proxy = function(t) {
                if (t = j(t), !t.isImmediatePropagationStopped()) {
                    t.data = o;
                    var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
                    return i === !1 && (t.preventDefault(), t.stopPropagation()),
                    i
                }
            },
            s.i = d.length,
            d.push(s),
            "addEventListener" in e && e.addEventListener(g(s.e), s.proxy, m(s, f))
        })
    }
    function y(t, e, n, i, r) {
        var o = l(t); (e || "").split(/\s/).forEach(function(e) {
            h(t, e, n, i).forEach(function(e) {
                delete s[o][e.i],
                "removeEventListener" in t && t.removeEventListener(g(e.e), e.proxy, m(e, r))
            })
        })
    }
    function j(e, i) {
        return (i || !e.isDefaultPrevented) && (i || (i = e), t.each(E,
        function(t, n) {
            var r = i[t];
            e[t] = function() {
                return this[n] = x,
                r && r.apply(i, arguments)
            },
            e[n] = b
        }), (i.defaultPrevented !== n ? i.defaultPrevented: "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = x)),
        e
    }
    function S(t) {
        var e, i = {
            originalEvent: t
        };
        for (e in t) w.test(e) || t[e] === n || (i[e] = t[e]);
        return j(i, t)
    }
    var n, e = 1,
    i = Array.prototype.slice,
    r = t.isFunction,
    o = function(t) {
        return "string" == typeof t
    },
    s = {},
    a = {},
    u = "onfocusin" in window,
    f = {
        focus: "focusin",
        blur: "focusout"
    },
    c = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    a.click = a.mousedown = a.mouseup = a.mousemove = "MouseEvents",
    t.event = {
        add: v,
        remove: y
    },
    t.proxy = function(e, n) {
        var s = 2 in arguments && i.call(arguments, 2);
        if (r(e)) {
            var a = function() {
                return e.apply(n, s ? s.concat(i.call(arguments)) : arguments)
            };
            return a._zid = l(e),
            a
        }
        if (o(n)) return s ? (s.unshift(e[n], e), t.proxy.apply(null, s)) : t.proxy(e[n], e);
        throw new TypeError("expected function")
    },
    t.fn.bind = function(t, e, n) {
        return this.on(t, e, n)
    },
    t.fn.unbind = function(t, e) {
        return this.off(t, e)
    },
    t.fn.one = function(t, e, n, i) {
        return this.on(t, e, n, i, 1)
    };
    var x = function() {
        return ! 0
    },
    b = function() {
        return ! 1
    },
    w = /^([A-Z]|returnValue$|layer[XY]$)/,
    E = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    t.fn.delegate = function(t, e, n) {
        return this.on(e, t, n)
    },
    t.fn.undelegate = function(t, e, n) {
        return this.off(e, t, n)
    },
    t.fn.live = function(e, n) {
        return t(document.body).delegate(this.selector, e, n),
        this
    },
    t.fn.die = function(e, n) {
        return t(document.body).undelegate(this.selector, e, n),
        this
    },
    t.fn.on = function(e, s, a, u, f) {
        var c, l, h = this;
        return e && !o(e) ? (t.each(e,
        function(t, e) {
            h.on(t, s, a, e, f)
        }), h) : (o(s) || r(u) || u === !1 || (u = a, a = s, s = n), (r(a) || a === !1) && (u = a, a = n), u === !1 && (u = b), h.each(function(n, r) {
            f && (c = function(t) {
                return y(r, t.type, u),
                u.apply(this, arguments)
            }),
            s && (l = function(e) {
                var n, o = t(e.target).closest(s, r).get(0);
                return o && o !== r ? (n = t.extend(S(e), {
                    currentTarget: o,
                    liveFired: r
                }), (c || u).apply(o, [n].concat(i.call(arguments, 1)))) : void 0
            }),
            v(r, e, u, a, s, l || c)
        }))
    },
    t.fn.off = function(e, i, s) {
        var a = this;
        return e && !o(e) ? (t.each(e,
        function(t, e) {
            a.off(t, i, e)
        }), a) : (o(i) || r(s) || s === !1 || (s = i, i = n), s === !1 && (s = b), a.each(function() {
            y(this, e, s, i)
        }))
    },
    t.fn.trigger = function(e, n) {
        return e = o(e) || t.isPlainObject(e) ? t.Event(e) : j(e),
        e._args = n,
        this.each(function() {
            "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
        })
    },
    t.fn.triggerHandler = function(e, n) {
        var i, r;
        return this.each(function(s, a) {
            i = S(o(e) ? t.Event(e) : e),
            i._args = n,
            i.target = a,
            t.each(h(a, e.type || e),
            function(t, e) {
                return r = e.proxy(i),
                i.isImmediatePropagationStopped() ? !1 : void 0
            })
        }),
        r
    },
    "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
        t.fn[e] = function(t) {
            return t ? this.bind(e, t) : this.trigger(e)
        }
    }),
    ["focus", "blur"].forEach(function(e) {
        t.fn[e] = function(t) {
            return t ? this.bind(e, t) : this.each(function() {
                try {
                    this[e]()
                } catch(t) {}
            }),
            this
        }
    }),
    t.Event = function(t, e) {
        o(t) || (e = t, t = e.type);
        var n = document.createEvent(a[t] || "Events"),
        i = !0;
        if (e) for (var r in e)"bubbles" == r ? i = !!e[r] : n[r] = e[r];
        return n.initEvent(t, i, !0),
        j(n)
    }
} (Zepto),
function(t) {
    function l(e, n, i) {
        var r = t.Event(n);
        return t(e).trigger(r, i),
        !r.isDefaultPrevented()
    }
    function h(t, e, i, r) {
        return t.global ? l(e || n, i, r) : void 0
    }
    function p(e) {
        e.global && 0 === t.active++&&h(e, null, "ajaxStart")
    }
    function d(e) {
        e.global && !--t.active && h(e, null, "ajaxStop")
    }
    function m(t, e) {
        var n = e.context;
        return e.beforeSend.call(n, t, e) === !1 || h(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void h(e, n, "ajaxSend", [t, e])
    }
    function g(t, e, n, i) {
        var r = n.context,
        o = "success";
        n.success.call(r, t, o, e),
        i && i.resolveWith(r, [t, o, e]),
        h(n, r, "ajaxSuccess", [e, n, t]),
        y(o, e, n)
    }
    function v(t, e, n, i, r) {
        var o = i.context;
        i.error.call(o, n, e, t),
        r && r.rejectWith(o, [n, e, t]),
        h(i, o, "ajaxError", [n, i, t || e]),
        y(e, n, i)
    }
    function y(t, e, n) {
        var i = n.context;
        n.complete.call(i, e, t),
        h(n, i, "ajaxComplete", [e, n]),
        d(n)
    }
    function x() {}
    function b(t) {
        return t && (t = t.split(";", 2)[0]),
        t && (t == f ? "html": t == u ? "json": s.test(t) ? "script": a.test(t) && "xml") || "text"
    }
    function w(t, e) {
        return "" == e ? t: (t + "&" + e).replace(/[&?]{1,2}/, "?")
    }
    function E(e) {
        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)),
        !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = w(e.url, e.data), e.data = void 0)
    }
    function j(e, n, i, r) {
        return t.isFunction(n) && (r = i, i = n, n = void 0),
        t.isFunction(i) || (r = i, i = void 0),
        {
            url: e,
            data: n,
            success: i,
            dataType: r
        }
    }
    function T(e, n, i, r) {
        var o, s = t.isArray(n),
        a = t.isPlainObject(n);
        t.each(n,
        function(n, u) {
            o = t.type(u),
            r && (n = i ? r: r + "[" + (a || "object" == o || "array" == o ? n: "") + "]"),
            !r && s ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? T(e, u, i, n) : e.add(n, u)
        })
    }
    var i, r, e = 0,
    n = window.document,
    o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    s = /^(?:text|application)\/javascript/i,
    a = /^(?:text|application)\/xml/i,
    u = "application/json",
    f = "text/html",
    c = /^\s*$/;
    t.active = 0,
    t.ajaxJSONP = function(i, r) {
        if (! ("type" in i)) return t.ajax(i);
        var f, h, o = i.jsonpCallback,
        s = (t.isFunction(o) ? o() : o) || "jsonp" + ++e,
        a = n.createElement("script"),
        u = window[s],
        c = function(e) {
            t(a).triggerHandler("error", e || "abort")
        },
        l = {
            abort: c
        };
        return r && r.promise(l),
        t(a).on("load error",
        function(e, n) {
            clearTimeout(h),
            t(a).off().remove(),
            "error" != e.type && f ? g(f[0], l, i, r) : v(null, n || "error", l, i, r),
            window[s] = u,
            f && t.isFunction(u) && u(f[0]),
            u = f = void 0
        }),
        m(l, i) === !1 ? (c("abort"), l) : (window[s] = function() {
            f = arguments
        },
        a.src = i.url.replace(/\?(.+)=\?/, "?$1=" + s), n.head.appendChild(a), i.timeout > 0 && (h = setTimeout(function() {
            c("timeout")
        },
        i.timeout)), l)
    },
    t.ajaxSettings = {
        type: "GET",
        beforeSend: x,
        success: x,
        error: x,
        complete: x,
        context: null,
        global: !0,
        xhr: function() {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: u,
            xml: "application/xml, text/xml",
            html: f,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    },
    t.ajax = function(e) {
        var n = t.extend({},
        e || {}),
        o = t.Deferred && t.Deferred();
        for (i in t.ajaxSettings) void 0 === n[i] && (n[i] = t.ajaxSettings[i]);
        p(n),
        n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host),
        n.url || (n.url = window.location.toString()),
        E(n);
        var s = n.dataType,
        a = /\?.+=\?/.test(n.url);
        if (a && (s = "jsonp"), n.cache !== !1 && (e && e.cache === !0 || "script" != s && "jsonp" != s) || (n.url = w(n.url, "_=" + Date.now())), "jsonp" == s) return a || (n.url = w(n.url, n.jsonp ? n.jsonp + "=?": n.jsonp === !1 ? "": "callback=?")),
        t.ajaxJSONP(n, o);
        var j, u = n.accepts[s],
        f = {},
        l = function(t, e) {
            f[t.toLowerCase()] = [t, e]
        },
        h = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1: window.location.protocol,
        d = n.xhr(),
        y = d.setRequestHeader;
        if (o && o.promise(d), n.crossDomain || l("X-Requested-With", "XMLHttpRequest"), l("Accept", u || "*/*"), (u = n.mimeType || u) && (u.indexOf(",") > -1 && (u = u.split(",", 2)[0]), d.overrideMimeType && d.overrideMimeType(u)), (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && l("Content-Type", n.contentType || "application/x-www-form-urlencoded"), n.headers) for (r in n.headers) l(r, n.headers[r]);
        if (d.setRequestHeader = l, d.onreadystatechange = function() {
            if (4 == d.readyState) {
                d.onreadystatechange = x,
                clearTimeout(j);
                var e, i = !1;
                if (d.status >= 200 && d.status < 300 || 304 == d.status || 0 == d.status && "file:" == h) {
                    s = s || b(n.mimeType || d.getResponseHeader("content-type")),
                    e = d.responseText;
                    try {
                        "script" == s ? (1, eval)(e) : "xml" == s ? e = d.responseXML: "json" == s && (e = c.test(e) ? null: t.parseJSON(e))
                    } catch(r) {
                        i = r
                    }
                    i ? v(i, "parsererror", d, n, o) : g(e, d, n, o)
                } else v(d.statusText || null, d.status ? "error": "abort", d, n, o)
            }
        },
        m(d, n) === !1) return d.abort(),
        v(null, "abort", d, n, o),
        d;
        if (n.xhrFields) for (r in n.xhrFields) d[r] = n.xhrFields[r];
        var S = "async" in n ? n.async: !0;
        d.open(n.type, n.url, S, n.username, n.password);
        for (r in f) y.apply(d, f[r]);
        return n.timeout > 0 && (j = setTimeout(function() {
            d.onreadystatechange = x,
            d.abort(),
            v(null, "timeout", d, n, o)
        },
        n.timeout)),
        d.send(n.data ? n.data: null),
        d
    },
    t.get = function() {
        return t.ajax(j.apply(null, arguments))
    },
    t.post = function() {
        var e = j.apply(null, arguments);
        return e.type = "POST",
        t.ajax(e)
    },
    t.getJSON = function() {
        var e = j.apply(null, arguments);
        return e.dataType = "json",
        t.ajax(e)
    },
    t.fn.load = function(e, n, i) {
        if (!this.length) return this;
        var a, r = this,
        s = e.split(/\s/),
        u = j(e, n, i),
        f = u.success;
        return s.length > 1 && (u.url = s[0], a = s[1]),
        u.success = function(e) {
            r.html(a ? t("<div>").html(e.replace(o, "")).find(a) : e),
            f && f.apply(r, arguments)
        },
        t.ajax(u),
        this
    };
    var S = encodeURIComponent;
    t.param = function(t, e) {
        var n = [];
        return n.add = function(t, e) {
            this.push(S(t) + "=" + S(e))
        },
        T(n, t, e),
        n.join("&").replace(/%20/g, "+")
    }
} (Zepto),
function(t) {
    t.fn.serializeArray = function() {
        var n, e = [];
        return t([].slice.call(this.get(0).elements)).each(function() {
            n = t(this);
            var i = n.attr("type");
            "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && e.push({
                name: n.attr("name"),
                value: n.val()
            })
        }),
        e
    },
    t.fn.serialize = function() {
        var t = [];
        return this.serializeArray().forEach(function(e) {
            t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
        }),
        t.join("&")
    },
    t.fn.submit = function(e) {
        if (e) this.bind("submit", e);
        else if (this.length) {
            var n = t.Event("submit");
            this.eq(0).trigger(n),
            n.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
} (Zepto),
function(t) {
    "__proto__" in {} || t.extend(t.zepto, {
        Z: function(e, n) {
            return e = e || [],
            t.extend(e, t.fn),
            e.selector = n || "",
            e.__Z = !0,
            e
        },
        isZ: function(e) {
            return "array" === t.type(e) && "__Z" in e
        }
    });
    try {
        getComputedStyle(void 0)
    } catch(e) {
        var n = getComputedStyle;
        window.getComputedStyle = function(t) {
            try {
                return n(t)
            } catch(e) {
                return null
            }
        }
    }
} (Zepto); !
function(t) {
    var i = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global;
    "function" == typeof define && define.amd ? define(["exports"],
    function(e) {
        i.C3D = t(i, e)
    }) : "undefined" != typeof exports ? t(i, exports) : i.C3D = t(i, {})
} (function(t, i) {
    function e(t) {
        return Math.round(t)
    }
    function s(t) {
        return t.replace(/\b(\w)|\s(\w)/g,
        function(t) {
            return t.toUpperCase()
        })
    }
    function n(t) {
        var e;
        switch (t.type) {
        case "sprite":
            e = new i.Sprite(t.el ? {
                el: t.el
            }: void 0);
            break;
        case "plane":
            e = new i.Plane(t.el ? {
                el: t.el
            }: void 0);
            break;
        case "cube":
            e = new i.Cube(t.el ? {
                el: t.el
            }: void 0)
        }
        if (void 0 != t.size && e.size.apply(e, t.size), void 0 != t.position && e.position.apply(e, t.position), void 0 != t.rotation && e.rotation.apply(e, t.rotation), void 0 != t.scale && e.scale.apply(e, t.scale), void 0 != t.origin && e.origin.apply(e, t.origin), void 0 != t.visibility && e.visibility.apply(e, t.visibility), void 0 != t.material && e.material.apply(e, t.material), void 0 != t.filter && e.filter.apply(e, t.filter), void 0 != t.name && e.name.apply(e, [t.name]), e.update(), t.children) for (var s = 0,
        r = t.children.length; r > s; s++) {
            var h = t.children[s],
            a = n(h);
            e.addChild(a)
        }
        return e
    }
    var r = function(t) {
        var i = [];
        for (var e in t) i.push(e);
        return i
    },
    h = function(t) {
        var i = arguments.length;
        if (2 > i || null == t) return t;
        for (var e = 1; i > e; e++) for (var s = arguments[e], n = r(s), h = n.length, a = 0; h > a; a++) {
            var o = n[a];
            t[o] = s[o]
        }
        return t
    },
    a = function(t, i) {
        var e, s = this;
        e = t && Object.prototype.hasOwnProperty.call(t, "constructor") ? t.constructor: function() {
            return s.apply(this, arguments)
        },
        h(e, s, i);
        var n = function() {
            this.constructor = e
        };
        return n.prototype = s.prototype,
        e.prototype = new n,
        t && h(e.prototype, t),
        e.__super__ = s.prototype,
        e
    },
    o = "";
    return function() {
        var t = document.createElement("div"),
        i = ["Webkit", "Moz", "Ms", "O"];
        for (var e in i) if (i[e] + "Transform" in t.style) {
            o = i[e];
            break
        }
    } (),
    i.getRandomColor = function() {
        return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).slice( - 6)
    },
    i.rgb2hex = function(t, i, e) {
        return (t << 16 | i << 8 | e).toString(16)
    },
    i.hex2rgb = function(t) {
        var i = Math.floor("0x" + t),
        e = i >> 16 & 255,
        s = i >> 8 & 255,
        n = 255 & i;
        return [e, s, n]
    },
    i.Object = function() {
        this.initialize.apply(this, arguments)
    },
    h(i.Object.prototype, {
        x: 0,
        y: 0,
        z: 0,
        position: function(t, i, e) {
            switch (arguments.length) {
            case 1:
                this.x = t,
                this.y = t,
                this.z = t;
                break;
            case 2:
                this.x = t,
                this.y = i;
                break;
            case 3:
                this.x = t,
                this.y = i,
                this.z = e
            }
            return this
        },
        move: function(t, i, e) {
            switch (arguments.length) {
            case 1:
                this.x += t,
                this.y += t,
                this.z += t;
                break;
            case 2:
                this.x += t,
                this.y += i;
                break;
            case 3:
                this.x += t,
                this.y += i,
                this.z += e
            }
            return this
        },
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        rotation: function(t, i, e) {
            switch (arguments.length) {
            case 1:
                this.rotationX = t,
                this.rotationY = t,
                this.rotationZ = t;
                break;
            case 2:
                this.rotationX = t,
                this.rotationY = i;
                break;
            case 3:
                this.rotationX = t,
                this.rotationY = i,
                this.rotationZ = e
            }
            return this
        },
        rotate: function(t, i, e) {
            switch (arguments.length) {
            case 1:
                this.rotationX += t,
                this.rotationY += t,
                this.rotationZ += t;
                break;
            case 2:
                this.rotationX += t,
                this.rotationY += i;
                break;
            case 3:
                this.rotationX += t,
                this.rotationY += i,
                this.rotationZ += e
            }
            return this
        },
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        scale: function(t, i, e) {
            switch (arguments.length) {
            case 1:
                this.scaleX = t,
                this.scaleY = t,
                this.scaleZ = t;
                break;
            case 2:
                this.scaleX = t,
                this.scaleY = i;
                break;
            case 3:
                this.scaleX = t,
                this.scaleY = i,
                this.scaleZ = e
            }
            return this
        },
        width: 0,
        height: 0,
        depth: 0,
        size: function(t, i, e) {
            switch (arguments.length) {
            case 1:
                this.width = t,
                this.height = t,
                this.depth = t;
                break;
            case 2:
                this.width = t,
                this.height = i;
                break;
            case 3:
                this.width = t,
                this.height = i,
                this.depth = e
            }
            return this
        },
        originX: 0,
        originY: 0,
        originZ: 0,
        _orgO: {
            x: 0,
            y: 0,
            z: 0
        },
        _orgT: {
            x: 0,
            y: 0,
            z: 0
        },
        _orgF: {
            x: 0,
            y: 0,
            z: 0
        },
        origin: function(t, i, e) {
            switch (arguments.length) {
            case 1:
                this.originX = t,
                this.originY = t,
                this.originZ = t;
                break;
            case 2:
                this.originX = t,
                this.originY = i;
                break;
            case 3:
                this.originX = t,
                this.originY = i,
                this.originZ = e
            }
            return this
        },
        _name: "",
        name: function(t) {
            return this._name = t,
            "" == t ? delete this.el.dataset.name: this.el.dataset.name = t,
            this
        },
        initialize: function() {
            this.x = 0,
            this.y = 0,
            this.z = 0,
            this.rotationX = 0,
            this.rotationY = 0,
            this.rotationZ = 0,
            this.scaleX = 1,
            this.scaleY = 1,
            this.scaleZ = 1,
            this.width = 0,
            this.height = 0,
            this.depth = 0,
            this.originX = "50%",
            this.originY = "50%",
            this.originZ = "0px",
            this._orgO = {
                x: "50%",
                y: "50%",
                z: "0px"
            },
            this._orgT = {
                x: "-50%",
                y: "-50%",
                z: "0px"
            },
            this._orgF = {
                x: 0,
                y: 0,
                z: 0
            },
            this.children = [],
            this._name = ""
        },
        parent: null,
        children: null,
        addChild: function(t) {
            if (null != t.parent && t.parent.removeChild(t), "" != t._name) {
                if (void 0 !== this[t._name]) throw t._name + " already exist!";
                this[t._name] = t
            }
            return this.children.push(t),
            t.parent = this,
            this
        },
        removeChild: function(t) {
            for (var i = this.children.length - 1; i >= 0; i--) if (this.children[i] === t) return "" != t._name && delete this[t._name],
            this.children.splice(i, 1),
            t.parent = null,
            this;
            return this
        },
        removeAllChild: function() {
            for (var t = this.children.length - 1; t >= 0; t--) {
                var i = this.children[t];
                "" != i._name && delete this[i._name],
                i.parent = null
            }
            return this.children = [],
            this
        },
        remove: function() {
            return null != this.parent && this.parent.removeChild(this),
            this
        }
    }),
    i.Object.extend = a,
    i.Sprite = i.Object.extend({
        el: null,
        alpha: 1,
        visible: !0,
        mat: null,
        initialize: function(t) {
            i.Sprite.__super__.initialize.apply(this, [t]),
            this.alpha = 1,
            this.visible = !0;
            var e;
            if (t && t.el) switch (typeof t.el) {
            case "string":
                e = document.createElement("div"),
                e.innerHTML = t.el;
                break;
            case "object":
                1 === t.el.nodeType && (e = t.el)
            }
            e || (e = document.createElement("div")),
            e.style.position = "absolute",
            e.style[o + "Transform"] = "translateZ(0px)",
            e.style[o + "TransformStyle"] = "preserve-3d",
            this.el = e,
            e.le = this
        },
        update: function() {
            return this.updateS(),
            this.updateM(),
            this.updateO(),
            this.updateT(),
            this.updateV(),
            this
        },
        updateS: function() {
            return this
        },
        updateM: function() {
            if (!this.mat) return this;
            for (var t in this.mat) switch (t) {
            case "bothsides":
                this.el.style[o + "BackfaceVisibility"] = this.mat[t] ? "visible": "hidden";
                break;
            case "image":
                this.el.style["background" + s(t)] = "" !== this.mat[t] ? "url(" + this.mat[t] + ")": "";
                break;
            default:
                this.el.style["background" + s(t)] = this.mat[t]
            }
            return this
        },
        updateO: function() {
            if ("number" == typeof this.originX) {
                var t = this.originX - this._orgF.x;
                this._orgO.x = t + "px",
                this._orgT.x = -t + "px"
            } else this._orgO.x = this.originX,
            this._orgT.x = "-" + this.originX;
            if ("number" == typeof this.originY) {
                var i = this.originY - this._orgF.y;
                this._orgO.y = i + "px",
                this._orgT.y = -i + "px"
            } else this._orgO.y = this.originY,
            this._orgT.y = "-" + this.originY;
            if ("number" == typeof this.originZ) {
                var e = this.originZ - this._orgF.z;
                this._orgO.z = e + "px",
                this._orgT.z = -e + "px"
            } else this._orgO.z = this._orgT.z = "0px";
            return this.el.style[o + "TransformOrigin"] = this._orgO.x + " " + this._orgO.y + " " + this._orgO.z,
            this
        },
        updateT: function() {
            return this.el.style[o + "Transform"] = "translate3d(" + this._orgT.x + ", " + this._orgT.y + ", " + this._orgT.z + ") translate3d(" + this.x + "px," + this.y + "px," + this.z + "px) rotateX(" + this.rotationX % 360 + "deg) rotateY(" + this.rotationY % 360 + "deg) rotateZ(" + this.rotationZ % 360 + "deg) scale3d(" + this.scaleX + ", " + this.scaleY + ", " + this.scaleZ + ") ",
            this
        },
        updateV: function() {
            return this.el.style.opacity = this.alpha,
            this.el.style.display = this.visible ? "block": "none",
            this
        },
        addChild: function(t) {
            return i.Sprite.__super__.addChild.apply(this, [t]),
            this.el && t.el && this.el.appendChild(t.el),
            this
        },
        removeChild: function(t) {
            for (var i = this.children.length - 1; i >= 0; i--) if (this.children[i] === t) return "" != t._name && delete this[t._name],
            this.children.splice(i, 1),
            t.parent = null,
            this.el.removeChild(t.el),
            this;
            return this
        },
        removeAllChild: function() {
            for (var t = this.children.length - 1; t >= 0; t--) {
                var i = this.children[t];
                "" != i._name && delete this[i._name],
                i.parent = null,
                this.el.removeChild(i.el)
            }
            return this.children = [],
            this
        },
        on: function(t) {
            if ("object" == typeof t) for (var i in t) this.el.addEventListener(i, t[i], !1);
            else 2 === arguments.length ? this.el.addEventListener(arguments[0], arguments[1], !1) : 3 === arguments.length && this.el.addEventListener(arguments[0], arguments[1], arguments[2]);
            return this
        },
        off: function(t) {
            if ("object" == typeof t) for (var i in t) this.el.removeEventListener(i, t[i], !1);
            else 2 === arguments.length && this.el.removeEventListener(arguments[0], arguments[1], !1);
            return this
        },
        buttonMode: function(t) {
            return this.el.style.cursor = t ? "pointer": "auto",
            this
        },
        material: function(t) {
            return this.mat = t,
            this
        },
        visibility: function(t) {
            return void 0 !== t.visible && (this.visible = t.visible),
            void 0 !== t.alpha && (this.alpha = t.alpha),
            this
        }
    }),
    i.Stage = i.Sprite.extend({
        camera: null,
        fov: null,
        __rfix: null,
        __pfix: null,
        initialize: function(t) {
            i.Stage.__super__.initialize.apply(this, [t]),
            t && t.el || (this.el.style.top = "0px", this.el.style.left = "0px", this.el.style.width = "0px", this.el.style.height = "0px"),
            this.el.style[o + "Perspective"] = "800px",
            this.el.style[o + "TransformStyle"] = "flat",
            this.el.style[o + "Transform"] = "",
            this.el.style.overflow = "hidden",
            this.__rfix = new i.Sprite,
            this.el.appendChild(this.__rfix.el),
            this.__pfix = new i.Sprite,
            this.__rfix.el.appendChild(this.__pfix.el),
            this.setCamera(new i.Camera)
        },
        updateS: function() {
            return this.el.style.width = e(this.width) + "px",
            this.el.style.height = e(this.height) + "px",
            this
        },
        updateT: function() {
            return this.fov = e(.5 / Math.tan(.5 * this.camera.fov / 180 * Math.PI) * this.height),
            this.el.style[o + "Perspective"] = this.fov + "px",
            this.__rfix.position(e(this.width / 2), e(this.height / 2), this.fov).rotation( - this.camera.rotationX, -this.camera.rotationY, -this.camera.rotationZ).updateT(),
            this.__pfix.position( - this.camera.x, -this.camera.y, -this.camera.z).updateT(),
            this
        },
        addChild: function(t) {
            return this.__pfix.addChild(t),
            this
        },
        removeChild: function(t) {
            return this.__pfix.removeChild(t),
            this
        },
        setCamera: function(t) {
            return this.camera && (this.camera.stage = null),
            this.camera = t,
            this.camera.stage = this,
            this
        }
    }),
    i.Camera = i.Object.extend({
        fov: null,
        stage: null,
        initialize: function(t) {
            i.Camera.__super__.initialize.apply(this, [t]),
            this.fov = 75
        },
        update: function() {
            return this.updateT(),
            this
        },
        updateS: function() {
            return this
        },
        updateM: function() {
            return this
        },
        updateT: function() {
            return this.stage && this.stage.updateT(),
            this
        },
        updateV: function() {
            return this
        }
    }),
    i.Plane = i.Sprite.extend({
        flt: null,
        initialize: function(t) {
            i.Plane.__super__.initialize.apply(this, [t])
        },
        update: function() {
            return i.Plane.__super__.update.apply(this),
            this.updateF(),
            this
        },
        updateS: function() {
            return this.el.style.width = e(this.width) + "px",
            this.el.style.height = e(this.height) + "px",
            this
        },
        updateF: function() {
            if (!this.flt) return this;
            var t = "";
            for (var i in this.flt) t += "" !== this.flt[i] ? i + "(" + this.flt[i].join(",") + ")": "";
            return "" !== t && (this.el.style[o + "Filter"] = t),
            this
        },
        filter: function(t) {
            return this.flt = t,
            this
        }
    }),
    i.Cube = i.Sprite.extend({
        front: null,
        back: null,
        left: null,
        right: null,
        up: null,
        down: null,
        flt: null,
        initialize: function(t) {
            i.Cube.__super__.initialize.apply(this, [t]),
            this.front = new i.Plane,
            this.addChild(this.front),
            this.back = new i.Plane,
            this.addChild(this.back),
            this.left = new i.Plane,
            this.addChild(this.left),
            this.right = new i.Plane,
            this.addChild(this.right),
            this.up = new i.Plane,
            this.addChild(this.up),
            this.down = new i.Plane,
            this.addChild(this.down)
        },
        update: function() {
            return i.Cube.__super__.update.apply(this),
            this.updateF(),
            this
        },
        updateS: function() {
            var t = e(this.width),
            i = e(this.height),
            s = e(this.depth);
            return this._orgF.x = this.width / 2,
            this._orgF.y = this.height / 2,
            this._orgF.z = this.depth / 2,
            this.front.size(t, i, 0).position(0, 0, -s / 2).rotation(0, 0, 0).updateS().updateT(),
            this.back.size(t, i, 0).position(0, 0, s / 2).rotation(0, 180, 0).updateS().updateT(),
            this.left.size(s, i, 0).position( - t / 2, 0, 0).rotation(0, 90, 0).updateS().updateT(),
            this.right.size(s, i, 0).position(t / 2, 0, 0).rotation(0, -90, 0).updateS().updateT(),
            this.up.size(t, s, 0).position(0, -i / 2, 0).rotation( - 90, 0, 0).updateS().updateT(),
            this.down.size(t, s, 0).position(0, i / 2, 0).rotation(90, 0, 0).updateS().updateT(),
            this
        },
        updateM: function() {
            if (!this.mat) return this;
            for (var t in this.mat) switch (t) {
            case "front":
            case "back":
            case "left":
            case "right":
            case "up":
            case "down":
                this[t].material({
                    image:
                    this.mat[t]
                }).updateM();
                break;
            default:
                this.front.material(this.mat).updateM(),
                this.back.material(this.mat).updateM(),
                this.left.material(this.mat).updateM(),
                this.right.material(this.mat).updateM(),
                this.up.material(this.mat).updateM(),
                this.down.material(this.mat).updateM()
            }
            return this
        },
        updateF: function() {
            return this.flt ? (this.front.filter(this.flt).updateF(), this.back.filter(this.flt).updateF(), this.left.filter(this.flt).updateF(), this.right.filter(this.flt).updateF(), this.up.filter(this.flt).updateF(), this.down.filter(this.flt).updateF(), this) : this
        },
        filter: function(t) {
            return this.flt = t,
            this
        }
    }),
    i.create = function(t) {
        var i;
        switch (typeof t) {
        case "array":
            i = {
                type: "sprite",
                children: t
            };
            break;
        case "object":
            i = t;
            break;
        default:
            return
        }
        return n(i)
    },
    i
}); !
function(t) {
    var n = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global;
    "function" == typeof define && define.amd ? define(["exports"],
    function(e) {
        n.JT = t(n, e)
    }) : "undefined" != typeof exports ? t(n, exports) : n.JT = t(n, {})
} (function(t, n) {
    function e(t, n) {
        for (var e in n) t[e] = n[e]
    }
    function r(t, n) {
        if ("function" == typeof t) n.call(t, 0, t);
        else if (void 0 === t.length) n.call(t, 0, t);
        else for (var e = 0; e < t.length; e++) n.call(t[e], e, t[e])
    }
    function i(t) {
        return t.replace(/([A-Z])/g, "-$1").toLowerCase()
    }
    function a(t) {
        return t.replace(/\b(\w)|\s(\w)/g,
        function(t) {
            return t.toUpperCase()
        })
    }
    function o(t) {
        return Math.round(1e3 * t) / 1e3
    }
    function u(t) {
        return t ? D + a(t) : D
    }
    function s(t) {
        if (!t) throw "target is undefined, can't tween!!!";
        return "string" == typeof t ? "undefined" == typeof document ? t: document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t
    }
    function l(t, n) {
        return "rotation" == n || "scale" == n ? n: void 0 !== t._jt_obj[n] ? n: void 0 !== t.style[n] ? n: (n = u(n), void 0 !== t.style[n] ? n: void 0)
    }
    function c(t, n, e, r) {
        var i = {};
        if (n instanceof Array) {
            i.num = [];
            for (var a in n) {
                var o = f(t, n[a]);
                i.num[a] = o.num,
                i.unit = o.unit
            }
            void 0 != e && (r ? i.num.push(e.num) : i.num.unshift(e.num))
        } else i = f(t, n);
        return i
    }
    function f(t, n) {
        var e = p(n);
        "rem" == t.unit && "rem" != e.unit ? (w(), t.num = o(t.num * Z), t.unit = "px") : "rem" != t.unit && "rem" == e.unit && (w(), t.num = o(t.num / Z), t.unit = "rem");
        var r;
        switch (e.ext) {
        case "+=":
            r = t.num + e.num;
            break;
        case "-=":
            r = t.num - e.num;
            break;
        default:
            r = e.num
        }
        return {
            num: r,
            unit: e.unit || t.unit
        }
    }
    function h(t) {
        void 0 == t._jt_obj && (t._jt_obj = {
            x: 0,
            y: 0,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
            skewX: 0,
            skewY: 0
        })
    }
    function p(t) {
        var n = /(\+=|-=|)(-|)(\d+\.\d+|\d+)(e[+-]?[0-9]{0,2}|)(rem|px|)/i,
        e = n.exec(t);
        return e ? {
            num: o(e[2] + e[3] + e[4]),
            unit: e[5],
            ext: e[1]
        }: {
            num: 0,
            unit: "px",
            ext: ""
        }
    }
    function d(t) {
        var n = /\S\s+\S/g;
        return n.test(t)
    }
    function m(t, n) {
        switch (n) {
        case "x":
        case "y":
        case "z":
        case "rotationX":
        case "rotationY":
        case "rotationZ":
        case "scaleX":
        case "scaleY":
        case "scaleZ":
        case "skewX":
        case "skewY":
            return t._jt_obj[n];
        case "rotation":
            return t._jt_obj.rotationZ;
        case "scale":
            return t._jt_obj.scaleX;
        default:
            return v(t, n)
        }
    }
    function v(t, n) {
        if (t.style[n]) return t.style[n];
        if (document.defaultView && document.defaultView.getComputedStyle) {
            var e = i(n),
            r = document.defaultView.getComputedStyle(t, "");
            return r && r.getPropertyValue(e)
        }
        return t.currentStyle ? t.currentStyle[n] : null
    }
    function y(t, n, e) {
        switch (n) {
        case "x":
        case "y":
        case "z":
        case "rotationX":
        case "rotationY":
        case "rotationZ":
        case "scaleX":
        case "scaleY":
        case "scaleZ":
        case "skewX":
        case "skewY":
            return t._jt_obj[n] = e,
            !0;
        case "rotation":
            return t._jt_obj.rotationZ = e,
            !0;
        case "scale":
            return t._jt_obj.scaleX = e,
            t._jt_obj.scaleY = e,
            !0;
        default:
            return g(t, n, e),
            !1
        }
    }
    function g(t, n, e) {
        t.style[n] = e
    }
    function _(t) {
        return "object" == typeof t && 1 === t.nodeType
    }
    function j(t) {
        var n = ""; (t._jt_obj.x || t._jt_obj.y || t._jt_obj.z) && (n += "translate3d(" + b(t._jt_obj.x) + "," + b(t._jt_obj.y) + "," + b(t._jt_obj.z) + ") "),
        t._jt_obj.rotationX && (n += "rotateX(" + t._jt_obj.rotationX % 360 + "deg) "),
        t._jt_obj.rotationY && (n += "rotateY(" + t._jt_obj.rotationY % 360 + "deg) "),
        t._jt_obj.rotationZ && (n += "rotateZ(" + t._jt_obj.rotationZ % 360 + "deg) "),
        (1 != t._jt_obj.scaleX || 1 != t._jt_obj.scaleY || 1 != t._jt_obj.scaleZ) && (n += "scale3d(" + t._jt_obj.scaleX + ", " + t._jt_obj.scaleY + ", " + t._jt_obj.scaleZ + ") "),
        (t._jt_obj.skewX || t._jt_obj.skewY) && (n += "skew(" + t._jt_obj.skewX + "deg," + t._jt_obj.skewY + "deg) "),
        t.style[u("transform")] = n
    }
    function b(t) {
        return t + ("number" == typeof t ? "px": "")
    }
    function w() {
        C || (C = document.createElement("div"), C.style.cssText = "border:0 solid; position:absolute; line-height:0px;"),
        z || (z = document.getElementsByTagName("body")[0]),
        z.appendChild(C),
        C.style.borderLeftWidth = "1rem",
        Z = parseFloat(C.offsetWidth),
        z.removeChild(C)
    }
    function P() {
        B = !0;
        var t, n, e = V.length,
        r = L.length;
        if (0 === e && 0 === r) return void(B = !1);
        var i = Y(),
        a = i - F;
        for (F = i, t = e - 1; t >= 0; t--) if (V[t] && !V[t]._update(a)) {
            var o = V.splice(t, 1)[0];
            o.onUpdate && o.onUpdate.apply(o, o.onUpdateParams),
            o.onEnd && o.onEnd.apply(o, o.onEndParams),
            o.target = null
        }
        for (n = r - 1; n >= 0; n--) if (L[n] && !L[n]._update(a)) {
            var u = L.splice(n, 1)[0];
            u.onEnd && u.onEnd.apply(u, u.onEndParams)
        }
        q(P)
    }
    function M() {
        this.initialize.apply(this, arguments)
    }
    function E(t, n) {
        var e = s(t),
        i = V.length;
        r(e,
        function(t, e) {
            for (var r = i - 1; r >= 0; r--) {
                var a = V[r];
                a.target === e && a[n]()
            }
        })
    }
    function T(t) {
        for (var n = V.length,
        e = n - 1; e >= 0; e--) {
            var r = V[e];
            r[t]()
        }
    }
    function I() {
        this.initialize.apply(this, arguments)
    }
    function x(t, n) {
        var e = t,
        i = L.length;
        r(e,
        function(t, e) {
            for (var r = i - 1; r >= 0; r--) {
                var a = L[r];
                a.onEnd === e && a[n]()
            }
        })
    }
    function O(t) {
        for (var n = L.length,
        e = n - 1; e >= 0; e--) {
            var r = L[e];
            r[t]()
        }
    }
    function k(t) {
        t.bezier && (R(t, t.bezier), t.interpolation = A, delete t.bezier),
        t.through && (R(t, t.through), t.interpolation = X, delete t.through),
        t.linear && (R(t, t.linear), t.interpolation = S, delete t.linear)
    }
    function R(t, n) {
        for (var e in n) for (var r in n[e]) 0 == e ? t[r] = [n[e][r]] : t[r].push(n[e][r])
    }
    function S(t, n) {
        var e = t.length - 1,
        r = e * n,
        i = Math.floor(r),
        a = N.Linear;
        return 0 > n ? a(t[0], t[1], r) : n > 1 ? a(t[e], t[e - 1], e - r) : a(t[i], t[i + 1 > e ? e: i + 1], r - i)
    }
    function A(t, n) {
        var e, r = 0,
        i = t.length - 1,
        a = Math.pow,
        o = N.Bernstein;
        for (e = 0; i >= e; e++) r += a(1 - n, i - e) * a(n, e) * t[e] * o(i, e);
        return r
    }
    function X(t, n) {
        var e = t.length - 1,
        r = e * n,
        i = Math.floor(r),
        a = N.Through;
        return t[0] === t[e] ? (0 > n && (i = Math.floor(r = e * (1 + n))), a(t[(i - 1 + e) % e], t[i], t[(i + 1) % e], t[(i + 2) % e], r - i)) : 0 > n ? t[0] - (a(t[0], t[0], t[1], t[1], -r) - t[0]) : n > 1 ? t[e] - (a(t[e], t[e], t[e - 1], t[e - 1], r - e) - t[e]) : a(t[i ? i - 1 : 0], t[i], t[i + 1 > e ? e: i + 1], t[i + 2 > e ? e: i + 2], r - i)
    }
    Date.now = Date.now ||
    function() {
        return (new Date).getTime()
    };
    var U = Date.now(),
    Y = function() {
        return Date.now() - U
    },
    D = ""; !
    function() {
        var t = document.createElement("div"),
        n = ["Webkit", "Moz", "Ms", "O"];
        for (var e in n) if (n[e] + "Transform" in t.style) {
            D = n[e];
            break
        }
    } ();
    var z, C, Z, q = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(t) {
        window.setTimeout(t, 1e3 / 60)
    },
    V = [],
    B = !1,
    F = 0;
    e(M.prototype, {
        initialize: function(t, e, r, i, a) {
            this.fromVars = r,
            this.curVars = {},
            this.toVars = i,
            this.target = t,
            this.duration = 1e3 * Math.max(e, 0),
            this.ease = i.ease || n.Linear.None,
            this.delay = 1e3 * Math.max(i.delay || 0, 0),
            this.yoyo = i.yoyo || !1,
            this.repeat = this.curRepeat = Math.floor(i.repeat || 0),
            this.repeatDelay = 1e3 * Math.max(i.repeatDelay || 0, 0),
            this.onStart = i.onStart || null,
            this.onStartParams = i.onStartParams || [],
            this.onRepeat = i.onRepeat || null,
            this.onRepeatParams = i.onRepeatParams || [],
            this.onEnd = i.onEnd || null,
            this.onEndParams = i.onEndParams || [],
            this.onUpdate = i.onUpdate || null,
            this.onUpdateParams = i.onUpdateParams || [],
            this.isPlaying = i.isPlaying || !0,
            this.interpolation = i.interpolation || null,
            this.isReverse = !1,
            this.isDom = a,
            this.curTime = 0,
            this.isStart = !1,
            this.startTime = this.delay,
            this.endTime = this.startTime + this.repeatDelay + this.duration,
            0 != this.delay && (this._updateProp(), this.onUpdate && this.onUpdate.apply(this, this.onUpdateParams)),
            V.push(this),
            B || (F = Y(), P())
        },
        _update: function(t) {
            if (!this.isPlaying) return ! 0;
            if (this.curTime += t, this.curTime < this.startTime) return ! 0;
            if (this.isStart || (this.isStart = !0, this.onStart && this.onStart.apply(this, this.onStartParams), this.repeat == this.curRepeat && (this.curTime += this.repeatDelay)), this.curTime < this.startTime + this.repeatDelay) return ! 0;
            if (this.curTime < this.endTime) this._updateProp(),
            this.onUpdate && this.onUpdate.apply(this, this.onUpdateParams);
            else {
                if (0 == this.curRepeat) return this._updateProp(),
                !1;
                this.yoyo && (this.isReverse = !this.isReverse);
                var n = (this.curTime - this.endTime) % (this.duration + this.repeatDelay);
                0 == this.repeatDelay ? (this.curTime = this.startTime + n, this._updateProp()) : (this._updateProp(), this.curTime = this.startTime + n),
                this.onUpdate && this.onUpdate.apply(this, this.onUpdateParams),
                this.onRepeat && this.onRepeat.apply(this, this.onRepeatParams),
                this.curRepeat > 0 && this.curRepeat--
            }
            return ! 0
        },
        _updateProp: function() {
            var t = 0 == this.duration ? 1 : (this.curTime - this.startTime - this.repeatDelay) / this.duration;
            t = Math.max(0, Math.min(1, t)),
            this.isReverse && (t = 1 - t);
            var n = this.ease(t),
            e = !1;
            for (var r in this.fromVars) {
                var i, a = this.fromVars[r],
                u = this.toVars[r];
                i = u.num instanceof Array ? this.interpolation(u.num, n) : a.num + (u.num - a.num) * n,
                i = o(i),
                this.curVars[r] = {
                    num: i,
                    unit: u.unit
                },
                this.isDom ? (Math.abs(u.num - a.num) > 20 && (i = Math.round(i)), y(this.target, r, i + (u.unit || 0)) && (e = !0)) : this.target[r] = i + (u.unit || 0)
            }
            e && j(this.target)
        },
        play: function() {
            this.target && (this.isPlaying = !0)
        },
        pause: function() {
            this.target && (this.isPlaying = !1)
        },
        destroy: function(t) {
            if (this.target) {
                var n = V.indexOf(this);
                if ( - 1 !== n) {
                    var e = V.splice(n, 1)[0];
                    t && e.onEnd && e.onEnd.apply(e, e.onEndParams),
                    this.target = null
                }
            }
        }
    }),
    e(n, {
        get: function(t, n) {
            var e = s(t);
            if (void 0 !== e.length && (e = e[0]), _(e)) {
                h(e);
                var r = l(e, n);
                return r ? m(e, r) : null
            }
            return e[n]
        },
        set: function(t, n) {
            var e = s(t);
            r(e,
            function(t, e) {
                if (_(e)) {
                    h(e);
                    var r = !1;
                    for (var i in n) {
                        var a = l(e, i);
                        if (a) if (d(n[i])) y(e, a, n[i]);
                        else {
                            var o = c(p(m(e, a)), n[i]);
                            y(e, a, o.num + (o.unit || 0)) && (r = !0)
                        }
                    }
                    r && j(e)
                } else for (var u in n) {
                    var o = c(p(e[u]), n[u]);
                    e[u] = o.num + (o.unit || 0)
                }
            })
        },
        fromTo: function(t, n, e, i) {
            k(i);
            var a = s(t),
            o = [];
            return r(a,
            function(t, r) {
                var a = {},
                u = {},
                s = _(r);
                if (s) {
                    h(r);
                    for (var f in i) {
                        var d = l(r, f);
                        if (d) {
                            var v = p(m(r, d));
                            a[d] = c(v, e[f]),
                            u[d] = c(v, i[f], a[d], !1)
                        } else u[f] = i[f]
                    }
                } else for (var f in i) if (void 0 !== r[f]) {
                    var v = p(r[f]);
                    a[f] = c(v, e[f]),
                    u[f] = c(v, i[f], a[f], !1)
                } else u[f] = i[f];
                var y = new M(r, n, a, u, s);
                o.push(y)
            }),
            1 == o.length ? o[0] : o
        },
        from: function(t, n, e) {
            k(e);
            var i = s(t),
            a = [];
            return r(i,
            function(t, r) {
                var i = {},
                o = {},
                u = _(r);
                if (u) {
                    h(r);
                    for (var s in e) {
                        var f = l(r, s);
                        if (f) {
                            var d = p(m(r, f));
                            i[f] = c(d, e[s], d, !0),
                            o[f] = d
                        } else o[s] = e[s]
                    }
                } else for (var s in e) if (void 0 !== r[s]) {
                    var d = p(r[s]);
                    i[s] = c(d, e[s], d, !0),
                    o[s] = d
                } else o[s] = e[s];
                var v = new M(r, n, i, o, u);
                a.push(v)
            }),
            1 == a.length ? a[0] : a
        },
        to: function(t, n, e) {
            k(e);
            var i = s(t),
            a = [];
            return r(i,
            function(t, r) {
                var i = {},
                o = {},
                u = _(r);
                if (u) {
                    h(r);
                    for (var s in e) {
                        var f = l(r, s);
                        if (f) {
                            var d = p(m(r, f));
                            i[f] = d,
                            o[f] = c(d, e[s], d, !1)
                        } else o[s] = e[s]
                    }
                } else for (var s in e) if (void 0 !== r[s]) {
                    var d = p(r[s]);
                    i[s] = d,
                    o[s] = c(d, e[s], d, !1)
                } else o[s] = e[s];
                var v = new M(r, n, i, o, u);
                a.push(v)
            }),
            1 == a.length ? a[0] : a
        },
        kill: function(t, n) {
            var e = s(t);
            r(e,
            function(t, e) {
                for (var r = V.length,
                i = r - 1; i >= 0; i--) {
                    var a = V[i];
                    a.target === e && (V.splice(i, 1), n && a.onEnd && a.onEnd.apply(a, a.onEndParams), a.target = null)
                }
            })
        },
        killAll: function(t) {
            if (!t) return void(V = []);
            for (var n = V.length,
            e = n - 1; e >= 0; e--) {
                var r = V.splice(e, 1);
                t && r.onEnd && r.onEnd.apply(r, r.onEndParams),
                r.target = null
            }
        },
        play: function(t) {
            E(t, "play")
        },
        playAll: function() {
            T("play")
        },
        pause: function(t) {
            E(t, "pause")
        },
        pauseAll: function() {
            T("pause")
        },
        isTweening: function(t) {
            var n = s(t);
            n = n[0] || n;
            for (var e = V.length,
            r = e - 1; r >= 0; r--) {
                var i = V[r];
                if (i.target === n) return ! 0
            }
            return ! 1
        }
    });
    var L = [];
    e(I.prototype, {
        initialize: function(t, n, e, r) {
            this.delay = 1e3 * t,
            this.onEnd = n || null,
            this.onEndParams = e || [],
            this.curTime = 0,
            this.endTime = this.delay,
            this.isPlaying = r || !0,
            L.push(this),
            B || (F = Y(), P())
        },
        _update: function(t) {
            return this.isPlaying ? (this.curTime += t, this.curTime < this.endTime ? !0 : !1) : !0
        },
        play: function() {
            this.isPlaying = !0
        },
        pause: function() {
            this.isPlaying = !1
        },
        destroy: function(t) {
            var n = L.indexOf(this);
            if ( - 1 !== n) {
                var e = L.splice(n, 1)[0];
                t && e.onEnd && e.onEnd.apply(e, e.onEndParams)
            }
        }
    }),
    e(n, {
        call: function(t, n, e) {
            return new I(t, n, e)
        },
        killCall: function(t, n) {
            var e = t,
            i = L.length;
            r(e,
            function(t, e) {
                for (var r = i - 1; r >= 0; r--) {
                    var a = L[r];
                    a.onEnd === e && (L.splice(r, 1), n && a.onEnd && a.onEnd.apply(a, a.onEndParams))
                }
            })
        },
        killAllCalls: function(t) {
            if (!t) return void(L = []);
            for (var n = L.length,
            e = n - 1; e >= 0; e--) {
                var r = L.splice(e, 1);
                t && r.onEnd && r.onEnd.apply(r, r.onEndParams)
            }
        },
        playCall: function(t) {
            x(t, "play")
        },
        playAllCalls: function() {
            O("play")
        },
        pauseCall: function(t) {
            x(t, "pause")
        },
        pauseAllCalls: function() {
            O("pause")
        }
    }),
    e(n, {
        path: function(t) {
            k(t);
            for (var e, r = t.ease || n.Linear.None,
            i = t.step || 1,
            a = [], o = 0; i >= o; o++) {
                e = r(o / i);
                var u = {};
                for (var s in t) t[s] instanceof Array && (u[s] = t.interpolation(t[s], e));
                a.push(u)
            }
            return a
        }
    });
    var N = {
        Linear: function(t, n, e) {
            return (n - t) * e + t
        },
        Bernstein: function(t, n) {
            var e = N.Factorial;
            return e(t) / e(n) / e(t - n)
        },
        Factorial: function() {
            var t = [1];
            return function(n) {
                var e, r = 1;
                if (t[n]) return t[n];
                for (e = n; e > 1; e--) r *= e;
                return t[n] = r
            }
        } (),
        Through: function(t, n, e, r, i) {
            var a = .5 * (e - t),
            o = .5 * (r - n),
            u = i * i,
            s = i * u;
            return (2 * n - 2 * e + a + o) * s + ( - 3 * n + 3 * e - 2 * a - o) * u + a * i + n
        }
    };
    return e(n, {
        Linear: {
            None: function(t) {
                return t
            }
        },
        Quad: {
            In: function(t) {
                return t * t
            },
            Out: function(t) {
                return t * (2 - t)
            },
            InOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t: -.5 * (--t * (t - 2) - 1)
            }
        },
        Cubic: {
            In: function(t) {
                return t * t * t
            },
            Out: function(t) {
                return--t * t * t + 1
            },
            InOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t: .5 * ((t -= 2) * t * t + 2)
            }
        },
        Quart: {
            In: function(t) {
                return t * t * t * t
            },
            Out: function(t) {
                return 1 - --t * t * t * t
            },
            InOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t: -.5 * ((t -= 2) * t * t * t - 2)
            }
        },
        Quint: {
            In: function(t) {
                return t * t * t * t * t
            },
            Out: function(t) {
                return--t * t * t * t * t + 1
            },
            InOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t: .5 * ((t -= 2) * t * t * t * t + 2)
            }
        },
        Sine: {
            In: function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            Out: function(t) {
                return Math.sin(t * Math.PI / 2)
            },
            InOut: function(t) {
                return.5 * (1 - Math.cos(Math.PI * t))
            }
        },
        Expo: {
            In: function(t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            },
            Out: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            InOut: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * ( - Math.pow(2, -10 * (t - 1)) + 2)
            }
        },
        Circ: {
            In: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            Out: function(t) {
                return Math.sqrt(1 - --t * t)
            },
            InOut: function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }
        },
        Elastic: {
            In: function(t) {
                var n, e = .1,
                r = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!e || 1 > e ? (e = 1, n = r / 4) : n = r * Math.asin(1 / e) / (2 * Math.PI), -(e * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - n) * Math.PI / r)))
            },
            Out: function(t) {
                var n, e = .1,
                r = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!e || 1 > e ? (e = 1, n = r / 4) : n = r * Math.asin(1 / e) / (2 * Math.PI), e * Math.pow(2, -10 * t) * Math.sin(2 * (t - n) * Math.PI / r) + 1)
            },
            InOut: function(t) {
                var n, e = .1,
                r = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!e || 1 > e ? (e = 1, n = r / 4) : n = r * Math.asin(1 / e) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * e * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - n) * Math.PI / r) : e * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - n) * Math.PI / r) * .5 + 1)
            }
        },
        Back: {
            In: function(t) {
                var n = 1.70158;
                return t * t * ((n + 1) * t - n)
            },
            Out: function(t) {
                var n = 1.70158;
                return--t * t * ((n + 1) * t + n) + 1
            },
            InOut: function(t) {
                var n = 2.5949095;
                return (t *= 2) < 1 ? .5 * t * t * ((n + 1) * t - n) : .5 * ((t -= 2) * t * ((n + 1) * t + n) + 2)
            }
        },
        Bounce: {
            In: function(t) {
                return 1 - n.Bounce.Out(1 - t)
            },
            Out: function(t) {
                return 1 / 2.75 > t ? 7.5625 * t * t: 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            InOut: function(t) {
                return.5 > t ? .5 * n.Bounce.In(2 * t) : .5 * n.Bounce.Out(2 * t - 1) + .5
            }
        }
    }),
    n.now = Y,
    n
}); !
function(i) {
    var t = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global;
    "function" == typeof define && define.amd ? define(["exports"],
    function(a) {
        t.Orienter = i(t, a)
    }) : "undefined" != typeof exports ? i(t, exports) : t.Orienter = i(t, {})
} (function(i, t) {
    function a(i, t) {
        for (var a in t) i[a] = t[a]
    }
    return t = function() {
        this.initialize.apply(this, arguments)
    },
    a(t.prototype, {
        lon: 0,
        lat: 0,
        direction: 0,
        fix: 0,
        os: "",
        initialize: function() {
            switch (this.lon = 0, this.lat = 0, this.direction = window.orientation || 0, this.direction) {
            case 0:
                this.fix = 0;
                break;
            case 90:
                this.fix = -270;
                break;
            case - 90 : this.fix = -90
            }
            this.os = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? "ios": navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Linux") ? "android": ""
        },
        init: function() {
            this._orient = this.orientHandler.bind(this),
            window.addEventListener("deviceorientation", this._orient, !1),
            this._change = this.changeHandler.bind(this),
            window.addEventListener("orientationchange", this._change, !1)
        },
        destroy: function() {
            window.removeEventListener("deviceorientation", this._orient, !1),
            window.removeEventListener("orientationchange", this._change, !1)
        },
        changeHandler: function() {
            this.direction = window.orientation
        },
        orientHandler: function(i) {
            switch (this.os) {
            case "ios":
                switch (this.direction) {
                case 0:
                    this.lon = i.alpha + i.gamma,
                    i.beta > 0 && (this.lat = i.beta - 90);
                    break;
                case 90:
                    this.lon = i.gamma < 0 ? i.alpha - 90 : i.alpha - 270,
                    this.lat = i.gamma > 0 ? 90 - i.gamma: -90 - i.gamma;
                    break;
                case - 90 : this.lon = i.gamma < 0 ? i.alpha - 90 : i.alpha - 270,
                    this.lat = i.gamma < 0 ? 90 + i.gamma: -90 + i.gamma
                }
                break;
            case "android":
                switch (this.direction) {
                case 0:
                    this.lon = i.alpha + i.gamma + 30,
                    this.lat = i.gamma > 90 ? 90 - i.beta: i.beta - 90;
                    break;
                case 90:
                    this.lon = i.alpha - 230,
                    this.lat = i.gamma > 0 ? 270 - i.gamma: -90 - i.gamma;
                    break;
                case - 90 : this.lon = i.alpha - 180,
                    this.lat = -90 + i.gamma
                }
            }
            this.lon += this.fix,
            this.lon %= 360,
            this.lon < 0 && (this.lon += 360),
            this.lon = Math.round(this.lon),
            this.lat = Math.round(this.lat),
            this.handler && this.handler.apply(this, [{
                a: Math.round(i.alpha),
                b: Math.round(i.beta),
                g: Math.round(i.gamma),
                lon: this.lon,
                lat: this.lat,
                dir: this.direction
            }])
        }
    }),
    t
}); !
function(e) {
    var i = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global;
    if ("function" == typeof define && define.amd) define(["jstween", "exports"],
    function(t, n) {
        i.JTL = e(i, n, t)
    });
    else if ("undefined" != typeof exports) {
        var t = require("jstween");
        e(i, exports, t)
    } else i.JTL = e(i, {},
    i.JT)
} (function(e, i, t) {
    function n(e, i) {
        for (var t in i) e[t] = i[t]
    }
    function s(e) {
        var i = /(^[a-zA-Z]\w*|)(\+=|-=|)(\d*\.\d*|\d*)/,
        t = i.exec(e);
        return {
            label: t[1],
            ext: t[2],
            num: parseFloat(t[3])
        }
    }
    function a() {
        l = !0;
        var e = h.length;
        if (0 === e) return void(l = !1);
        var i = t.now(),
        n = i - f;
        f = i;
        for (var s = e - 1; s >= 0; s--) h[s]._update(n);
        o(a)
    }
    function r() {
        this.initialize.apply(this, arguments)
    }
    var o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(e) {
        window.setTimeout(e, 1e3 / 60)
    },
    h = [],
    l = !1,
    f = 0;
    return n(r.prototype, {
        initialize: function() {
            this.labels = [],
            this.labelTime = 0,
            this.anchors = [],
            this.anchorId = 0,
            this.tweens = [],
            this.isPlaying = !1,
            this.curTime = 0
        },
        _update: function(e) {
            return this.isPlaying ? (this.curTime += e, void this._checkHandler()) : !0
        },
        _addSelf: function() {
            h.push(this),
            l || (f = t.now(), a())
        },
        _removeSelf: function() {
            var e = h.indexOf(this); - 1 !== e && h.splice(e, 1)
        },
        _checkHandler: function() {
            var e = this.anchors.length;
            if (! (this.anchorId >= e)) {
                var i = this.anchors[this.anchorId];
                this.curTime >= 1e3 * i.time && (this.anchorId == e - 1 ? (this._removeSelf(), this.isPlaying = !1, i.handler.apply()) : (i.handler.apply(), this.anchorId++, this._checkHandler()))
            }
        },
        _parseTweenTime: function(e, i, t) {
            var n = Math.max(e, 0),
            s = Math.max(i.delay || 0, 0),
            a = Math.max(0, Math.floor(i.repeat || 0)),
            r = Math.max(i.repeatDelay || 0, 0),
            o = s + n + (r + n) * a,
            h = this._parsePosition(t);
            return this.labelTime = Math.max(this.labelTime, h + o),
            h
        },
        _parsePosition: function(e) {
            if (void 0 == e) return this.labelTime;
            var i = s(e),
            t = 0;
            if (i.label) switch (t = this.getLabelTime(i.label), i.ext) {
            case "+=":
                t += i.num;
                break;
            case "-=":
                t -= i.num
            } else t = i.num;
            return t
        },
        _addAnchor: function(e, i) {
            var t = this.anchors.length;
            if (0 == t) return void this.anchors.push({
                time: i,
                handler: e
            });
            if (t > 0) for (var n = t - 1; n >= 0; n--) {
                var s = this.anchors[n];
                if (i >= s.time) return void this.anchors.splice(n + 1, 0, {
                    time: i,
                    handler: e
                })
            }
        },
        _addTween: function(e) {
            if (void 0 != e.length) for (var i in e) this.tweens.push(e[i]);
            else this.tweens.push(e)
        },
        _removeTween: function(e) {
            var i = this.tweens.indexOf(e); - 1 !== i && this.tweens.splice(i, 1)
        },
        fromTo: function(e, i, n, s, a) {
            var r = this,
            o = s.onEnd;
            s.onEnd = function(e) {
                r._removeTween(this),
                o && o.apply(this, e)
            };
            var h = function() {
                var a = t.fromTo(e, i, n, s);
                r._addTween(a)
            },
            l = this._parseTweenTime(i, s, a);
            return this._addAnchor(h, l),
            this
        },
        from: function(e, i, n, s) {
            var a = this,
            r = n.onEnd;
            n.onEnd = function(e) {
                a._removeTween(this),
                r && r.apply(this, e)
            };
            var o = function() {
                var s = t.from(e, i, n);
                a._addTween(s)
            },
            h = this._parseTweenTime(i, n, s);
            return this._addAnchor(o, h),
            this
        },
        to: function(e, i, n, s) {
            var a = this,
            r = n.onEnd;
            n.onEnd = function(e) {
                a._removeTween(this),
                r && r.apply(this, e)
            };
            var o = function() {
                var s = t.to(e, i, n);
                a._addTween(s)
            },
            h = this._parseTweenTime(i, n, s);
            return this._addAnchor(o, h),
            this
        },
        kill: function(e, i) {
            var n = function() {
                t.kill(e, !0)
            },
            s = this._parseTweenTime(0, {},
            i);
            return this._addAnchor(n, s),
            this
        },
        add: function(e, i) {
            var t = this._parsePosition(i);
            switch (typeof e) {
            case "function":
                this._addAnchor(e, t);
                break;
            case "string":
                this.addLabel(e, t);
                break;
            default:
                throw "add action is wrong!!!"
            }
            return this
        },
        addLabel: function(e, i) {
            this.removeLabel(e);
            var t = this._parsePosition(i);
            return this.labels.push({
                name: e,
                time: t
            }),
            this
        },
        removeLabel: function(e) {
            for (var i = this.labels.length,
            t = i - 1; t >= 0; t--) {
                var n = this.labels[t];
                if (e == n.name) return this.labels.splice(t, 1),
                this
            }
            return this
        },
        getLabelTime: function(e) {
            for (var i = this.labels.length,
            t = i - 1; t >= 0; t--) {
                var n = this.labels[t];
                if (e == n.name) return n.time
            }
            return this.labelTime
        },
        totalTime: function() {
            return this.labelTime
        },
        play: function(e) {
            if (!this.isPlaying) {
                for (var i = this.tweens.length,
                t = i - 1; t >= 0; t--) this.tweens[t].play();
                this._addSelf(),
                this.isPlaying = !0,
                void 0 !== e && this.seek(e)
            }
        },
        pause: function() {
            if (this.isPlaying) {
                for (var e = this.tweens.length,
                i = e - 1; i >= 0; i--) this.tweens[i].pause();
                this._removeSelf(),
                this.isPlaying = !1
            }
        },
        seek: function(e) {
            var i = this._parsePosition(e);
            this.curTime = 1e3 * i;
            for (var t = this.anchors.length,
            n = 0; t > n; n++) {
                var s = this.anchors[n];
                if (1e3 * s.time >= this.curTime) return void(this.anchorId = n)
            }
        },
        clear: function() {
            for (var e = this.tweens.length,
            i = e - 1; i >= 0; i--) this.tweens[i].kill();
            this.tweens = [],
            this.curTime = 0,
            this.labels = [],
            this.labelTime = 0,
            this.anchors = [],
            this.anchorId = 0
        }
    }),
    n(i, {
        create: function() {
            return new r
        },
        kill: function(e) {
            e.destroy()
        }
    }),
    i
});
var simpScroller = (function() {
    var c = !((window.DocumentTouch && document instanceof window.DocumentTouch) || "ontouchstart" in window) * 1,
    b = {
        start: ["touchstart", "mousedown"][c],
        move: ["touchmove", "mousemove"][c],
        end: ["touchend", "mouseup"][c]
    };
    var a = function(e, l, f) {
        var n = "top",
        o = "Top",
        p = "height",
        g = "Height",
        d = "pageY";
        if (l == "horizontal") {
            n = "left";
            o = "Left";
            p = "width";
            g = "Width";
            d = "pageX"
        }
        var i = null;
        if (f.hideScrollBar == false) {
            i = document.createElement("div");
            i.className = "scroller_" + l;
            f.container.appendChild(i)
        }
        var m = e["client" + g],
        h = 0;
        var j = function() {
            if (i == null) {
                return
            }
            var r = i.style[p].replace("px", ""),
            q = e["scroll" + o] / (h - m) * (m - r);
            if (m - r - q <= 0) {
                q = m - r
            }
            i.style[n] = q + "px"
        };
        var k = {};
        e.addEventListener(b.start,
        function(q) {
            h = this["scroll" + g];
            k[d] = q.touches ? q.touches[0][d] : q[d];
            k[n] = this["scroll" + o];
            document.moveFollow = true;
            if (i && h > m) {
                i.style.opacity = 1;
                i.style[p] = (m * m / h) + "px";
                j()
            }
            c && q.preventDefault()
        });
        e.addEventListener(b.move,
        function(q) {
            if (c == false || (document.moveFollow == true)) {
                this["scroll" + o] = k[n] + (k[d] - (q.touches ? q.touches[0][d] : q[d]));
                j();
                f.onScroll.call(this, q)
            }
            q.preventDefault()
        });
        e.addEventListener(b.end,
        function(q) {
            i && (i.style.opacity = 0)
        });
        if (c == true) {
            document.addEventListener("mouseup",
            function() {
                this.moveFollow = false
            })
        }
    };
    return function(d, f) {
        f = f || {};
        var j = new Object({
            verticalScroll: true,
            horizontalScroll: false,
            hideScrollBar: false,
            onScroll: function() {}
        }),
        g;
        for (g in f) {
            j[g] = f[g]
        }
        if (window.getComputedStyle(d).position == "static") {
            d.style.position = "relative"
        }
        var i = d.childNodes,
        e = document.createDocumentFragment(); [].slice.call(i).forEach(function(k) {
            e.appendChild(k)
        });
        var h = document.createElement("div");
        h.style.height = "100%";
        h.style.width = "100%";
        h.style.overflow = "hidden";
        d.appendChild(h);
        h.appendChild(e);
        j.container = d;
        if (j.verticalScroll == true) {
            a(h, "vertical", j)
        }
        if (j.horizontalScroll == true) {
            a(h, "horizontal", j)
        }
    }
})();