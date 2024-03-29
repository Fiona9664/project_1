(function() {
    function c(f) {
        f = f || {};
        this.settings = f;
        if (f.statusInterval == null) {
            f.statusInterval = 5000
        }
        if (f.loggingDelay == null) {
            f.loggingDelay = 20 * 1000
        }
        if (f.noProgressTimeout == null) {
            f.noProgressTimeout = Infinity
        }
        var i = [],
        d = [],
        p,
        e = Date.now();
        var m = {
            QUEUED: 0,
            WAITING: 1,
            LOADED: 2,
            ERROR: 3,
            TIMEOUT: 4
        };
        var l = function() {
            var r = Math.ceil((new Date().getTime() - p) / 1000);
            if (r > 0) {
                var q = "0-2s";
                if (r > 2 && r < 5) {
                    q = "2-5s"
                } else {
                    if (r > 5 && r < 10) {
                        q = "5-10s"
                    } else {
                        if (r > 10 && r < 15) {
                            q = "10-15s"
                        } else {
                            if (r > 15 && r < 30) {
                                q = "15-30s"
                            } else {
                                if (r > 30 && r < 60) {
                                    q = "30-60s"
                                } else {
                                    if (r > 60 && r < 120) {
                                        q = "60-120s"
                                    } else {
                                        if (r > 120 && r < 300) {
                                            q = "120-300s"
                                        } else {
                                            if (r > 300) {
                                                q = ">300s"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        var n = function(q) {
            if (q == null) {
                return []
            }
            if (Array.isArray(q)) {
                return q
            }
            return [q]
        };
        this.add = function(q) {
            q.tags = new a(q.tags);
            if (q.priority == null) {
                q.priority = Infinity
            }
            i.push({
                resource: q,
                status: m.QUEUED
            })
        };
        this.addProgressListener = function(r, q) {
            d.push({
                callback: r,
                tags: new a(q)
            })
        };
        this.addCompletionListener = function(r, q) {
            d.push({
                tags: new a(q),
                callback: function(s) {
                    if (s.completedCount === s.totalCount) {
                        r(s);
                        l()
                    }
                }
            })
        };
        var k = function(q) {
            q = n(q);
            var r = function(v) {
                var w = v.resource,
                u = Infinity;
                for (var t = 0; t < w.tags.length; t++) {
                    for (var s = 0; s < Math.min(q.length, u); s++) {
                        if (w.tags.all[t] === q[s] && s < u) {
                            u = s;
                            if (u === 0) {
                                break
                            }
                        }
                        if (u === 0) {
                            break
                        }
                    }
                }
                return u
            };
            return function(t, s) {
                var v = r(t),
                u = r(s);
                if (v < u) {
                    return - 1
                }
                if (v > u) {
                    return 1
                }
                if (t.priority < s.priority) {
                    return - 1
                }
                if (t.priority > s.priority) {
                    return 1
                }
                return 0
            }
        };
        this.start = function(r) {
            p = Date.now();
            var s = k(r);
            i.sort(s);
            for (var t = 0,
            q = i.length; t < q; t++) {
                var u = i[t];
                u.status = m.WAITING;
                u.resource.start(this)
            }
            setTimeout(g, 100)
        };
        var g = function() {
            var u = false,
            v = Date.now() - e,
            r = (v >= f.noProgressTimeout),
            s = (v >= f.loggingDelay);
            for (var t = 0,
            q = i.length; t < q; t++) {
                var w = i[t];
                if (w.status !== m.WAITING) {
                    continue
                }
                if (w.resource.checkStatus) {
                    w.resource.checkStatus()
                }
                if (w.status === m.WAITING) {
                    if (r) {
                        w.resource.onTimeout()
                    } else {
                        u = true
                    }
                }
            }
            if (s && u) {
                h()
            }
            if (u) {
                setTimeout(g, f.statusInterval)
            }
        };
        this.isBusy = function() {
            for (var r = 0,
            q = i.length; r < q; r++) {
                if (i[r].status === m.QUEUED || i[r].status === m.WAITING) {
                    return true
                }
            }
            return false
        };
        var o = function(x, u) {
            var v = null,
            t, q, r, w, s;
            for (t = 0, q = i.length; t < q; t++) {
                if (i[t].resource === x) {
                    v = i[t];
                    break
                }
            }
            if (v == null || v.status !== m.WAITING) {
                return
            }
            v.status = u;
            e = Date.now();
            r = x.tags.length;
            for (t = 0, q = d.length; t < q; t++) {
                w = d[t];
                if (w.tags.length === 0) {
                    s = true
                } else {
                    s = x.tags.intersects(w.tags)
                }
                if (s) {
                    j(v, w)
                }
            }
        };
        this.onLoad = function(q) {
            o(q, m.LOADED)
        };
        this.onError = function(q) {
            o(q, m.ERROR)
        };
        this.onTimeout = function(q) {
            o(q, m.TIMEOUT)
        };
        var j = function(r, x) {
            var u = 0,
            w = 0,
            t, q, v, s;
            for (t = 0, q = i.length; t < q; t++) {
                v = i[t];
                s = false;
                if (x.tags.length === 0) {
                    s = true
                } else {
                    s = v.resource.tags.intersects(x.tags)
                }
                if (s) {
                    w++;
                    if (v.status === m.LOADED || v.status === m.ERROR || v.status === m.TIMEOUT) {
                        u++
                    }
                }
            }
            x.callback({
                resource: r.resource,
                loaded: (r.status === m.LOADED),
                error: (r.status === m.ERROR),
                timeout: (r.status === m.TIMEOUT),
                completedCount: u,
                totalCount: w
            })
        };
        var h = this.log = function(t) {
            if (!window.console) {
                return
            }
            var s = Math.round((Date.now() - p) / 1000);
            window.console.log("PxLoader elapsed: " + s + " sec");
            for (var r = 0,
            q = i.length; r < q; r++) {
                var v = i[r];
                if (!t && v.status !== m.WAITING) {
                    continue
                }
                var u = "PxLoader: #" + r + " " + v.resource.getName();
                switch (v.status) {
                case m.QUEUED:
                    u += " (Not Started)";
                    break;
                case m.WAITING:
                    u += " (Waiting)";
                    break;
                case m.LOADED:
                    u += " (Loaded)";
                    break;
                case m.ERROR:
                    u += " (Error)";
                    break;
                case m.TIMEOUT:
                    u += " (Timeout)";
                    break
                }
                if (v.resource.tags.length > 0) {
                    u += " Tags: [" + v.resource.tags.all.join(",") + "]"
                }
                window.console.log(u)
            }
        }
    }
    function a(d) {
        this.all = [];
        this.first = null;
        this.length = 0;
        this.lookup = {};
        if (d) {
            if (Array.isArray(d)) {
                this.all = d.slice(0)
            } else {
                if (typeof d === "object") {
                    for (var f in d) {
                        if (d.hasOwnProperty(f)) {
                            this.all.push(f)
                        }
                    }
                } else {
                    this.all.push(d)
                }
            }
            this.length = this.all.length;
            if (this.length > 0) {
                this.first = this.all[0]
            }
            for (var e = 0; e < this.length; e++) {
                this.lookup[this.all[e]] = true
            }
        }
    }
    a.prototype.intersects = function(d) {
        if (this.length === 0 || d.length === 0) {
            return false
        }
        if (this.length === 1 && d.length === 1) {
            return this.first === d.first
        }
        if (d.length < this.length) {
            return d.intersects(this)
        }
        for (var e in this.lookup) {
            if (d.lookup[e]) {
                return true
            }
        }
        return false
    };
    c.prototype.addImage = function(g, f, h, e) {
        var d = new b(g, f, h, e);
        this.add(d);
        return d.img
    };
    function b(d, m, i, j) {
        var l = this,
        k = null;
        this.img = new Image();
        if (j !== undefined) {
            this.img.crossOrigin = j
        }
        this.tags = m;
        this.priority = i;
        var e = function() {
            if (l.img.readyState === "complete") {
                f();
                k.onLoad(l)
            }
        };
        var h = function() {
            f();
            k.onLoad(l)
        };
        var g = function() {
            f();
            k.onError(l)
        };
        var f = function() {
            l.unbind("load", h);
            l.unbind("readystatechange", e);
            l.unbind("error", g)
        };
        this.start = function(n) {
            k = n;
            l.bind("load", h);
            l.bind("readystatechange", e);
            l.bind("error", g);
            l.img.src = d
        };
        this.checkStatus = function() {
            if (l.img.complete) {
                f();
                k.onLoad(l)
            }
        };
        this.onTimeout = function() {
            f();
            if (l.img.complete) {
                k.onLoad(l)
            } else {
                k.onTimeout(l)
            }
        };
        this.getName = function() {
            return d
        };
        this.bind = function(n, o) {
            if (l.img.addEventListener) {
                l.img.addEventListener(n, o, false)
            } else {
                if (l.img.attachEvent) {
                    l.img.attachEvent("on" + n, o)
                }
            }
        };
        this.unbind = function(n, o) {
            if (l.img.removeEventListener) {
                l.img.removeEventListener(n, o, false)
            } else {
                if (l.img.detachEvent) {
                    l.img.detachEvent("on" + n, o)
                }
            }
        }
    }
    if (typeof define === "function" && define.amd) {
        define("PxLoader", [],
        function() {
            return c
        })
    }
    window.PxLoader = c
})();