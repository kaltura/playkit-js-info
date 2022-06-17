!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('playkit-js-info', [], e)
    : 'object' == typeof exports
    ? (exports['playkit-js-info'] = e())
    : ((t.KalturaPlayer = t.KalturaPlayer || {}),
      (t.KalturaPlayer.plugins = t.KalturaPlayer.plugins || {}),
      (t.KalturaPlayer.plugins['playkit-js-info'] = e()));
})(window, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = {i: r, l: !1, exports: {}});
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r});
      }),
      (n.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
          Object.defineProperty(t, '__esModule', {value: !0});
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if ((n.r(r), Object.defineProperty(r, 'default', {enumerable: !0, value: t}), 2 & e && 'string' != typeof t))
          for (var o in t)
            n.d(
              r,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, 'a', e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ''),
      n((n.s = 5))
    );
  })([
    function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'render', function () {
          return B;
        }),
        n.d(e, 'hydrate', function () {
          return D;
        }),
        n.d(e, 'createElement', function () {
          return v;
        }),
        n.d(e, 'h', function () {
          return v;
        }),
        n.d(e, 'Fragment', function () {
          return m;
        }),
        n.d(e, 'createRef', function () {
          return y;
        }),
        n.d(e, 'isValidElement', function () {
          return o;
        }),
        n.d(e, 'Component', function () {
          return b;
        }),
        n.d(e, 'cloneElement', function () {
          return F;
        }),
        n.d(e, 'createContext', function () {
          return U;
        }),
        n.d(e, 'toChildArray', function () {
          return O;
        }),
        n.d(e, '_unmount', function () {
          return L;
        }),
        n.d(e, 'options', function () {
          return r;
        });
      var r,
        o,
        i,
        a,
        s,
        c,
        u,
        l,
        p = {},
        f = [],
        d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
      function h(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function _(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function v(t, e, n) {
        var r,
          o = arguments,
          i = {};
        for (r in e) 'key' !== r && 'ref' !== r && (i[r] = e[r]);
        if (arguments.length > 3) for (n = [n], r = 3; r < arguments.length; r++) n.push(o[r]);
        if ((null != n && (i.children = n), 'function' == typeof t && null != t.defaultProps))
          for (r in t.defaultProps) void 0 === i[r] && (i[r] = t.defaultProps[r]);
        return g(t, i, e && e.key, e && e.ref, null);
      }
      function g(t, e, n, o, i) {
        var a = {type: t, props: e, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: i};
        return null == i && (a.__v = a), r.vnode && r.vnode(a), a;
      }
      function y() {
        return {};
      }
      function m(t) {
        return t.children;
      }
      function b(t, e) {
        (this.props = t), (this.context = e);
      }
      function x(t, e) {
        if (null == e) return t.__ ? x(t.__, t.__.__k.indexOf(t) + 1) : null;
        for (var n; e < t.__k.length; e++) if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
        return 'function' == typeof t.type ? x(t) : null;
      }
      function w(t) {
        var e, n;
        if (null != (t = t.__) && null != t.__c) {
          for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
            if (null != (n = t.__k[e]) && null != n.__e) {
              t.__e = t.__c.base = n.__e;
              break;
            }
          return w(t);
        }
      }
      function C(t) {
        ((!t.__d && (t.__d = !0) && i.push(t) && !a++) || c !== r.debounceRendering) && ((c = r.debounceRendering) || s)(P);
      }
      function P() {
        for (var t; (a = i.length); )
          (t = i.sort(function (t, e) {
            return t.__v.__b - e.__v.__b;
          })),
            (i = []),
            t.some(function (t) {
              var e, n, r, o, i, a, s;
              t.__d &&
                ((a = (i = (e = t).__v).__e),
                (s = e.__P) &&
                  ((n = []),
                  ((r = h({}, i)).__v = r),
                  (o = A(s, i, r, e.__n, void 0 !== s.ownerSVGElement, null, n, null == a ? x(i) : a)),
                  E(n, i),
                  o != a && w(i)));
            });
      }
      function S(t, e, n, r, o, i, a, s, c) {
        var u,
          l,
          d,
          h,
          v,
          g,
          y,
          m = (n && n.__k) || f,
          b = m.length;
        if (
          (s == p && (s = null != i ? i[0] : b ? x(n, 0) : null),
          (u = 0),
          (e.__k = O(e.__k, function (n) {
            if (null != n) {
              if (((n.__ = e), (n.__b = e.__b + 1), null === (d = m[u]) || (d && n.key == d.key && n.type === d.type))) m[u] = void 0;
              else
                for (l = 0; l < b; l++) {
                  if ((d = m[l]) && n.key == d.key && n.type === d.type) {
                    m[l] = void 0;
                    break;
                  }
                  d = null;
                }
              if (
                ((h = A(t, n, (d = d || p), r, o, i, a, s, c)),
                (l = n.ref) && d.ref != l && (y || (y = []), d.ref && y.push(d.ref, null, n), y.push(l, n.__c || h, n)),
                null != h)
              ) {
                var f;
                if ((null == g && (g = h), void 0 !== n.__d)) (f = n.__d), (n.__d = void 0);
                else if (i == d || h != s || null == h.parentNode) {
                  t: if (null == s || s.parentNode !== t) t.appendChild(h), (f = null);
                  else {
                    for (v = s, l = 0; (v = v.nextSibling) && l < b; l += 2) if (v == h) break t;
                    t.insertBefore(h, s), (f = s);
                  }
                  'option' == e.type && (t.value = '');
                }
                (s = void 0 !== f ? f : h.nextSibling), 'function' == typeof e.type && (e.__d = s);
              } else s && d.__e == s && s.parentNode != t && (s = x(d));
            }
            return u++, n;
          })),
          (e.__e = g),
          null != i && 'function' != typeof e.type)
        )
          for (u = i.length; u--; ) null != i[u] && _(i[u]);
        for (u = b; u--; ) null != m[u] && L(m[u], m[u]);
        if (y) for (u = 0; u < y.length; u++) I(y[u], y[++u], y[++u]);
      }
      function O(t, e, n) {
        if ((null == n && (n = []), null == t || 'boolean' == typeof t)) e && n.push(e(null));
        else if (Array.isArray(t)) for (var r = 0; r < t.length; r++) O(t[r], e, n);
        else
          n.push(
            e
              ? e(
                  'string' == typeof t || 'number' == typeof t
                    ? g(null, t, null, null, t)
                    : null != t.__e || null != t.__c
                    ? g(t.type, t.props, t.key, null, t.__v)
                    : t
                )
              : t
          );
        return n;
      }
      function k(t, e, n) {
        '-' === e[0] ? t.setProperty(e, n) : (t[e] = 'number' == typeof n && !1 === d.test(e) ? n + 'px' : null == n ? '' : n);
      }
      function T(t, e, n, r, o) {
        var i, a, s, c, u;
        if ((o ? 'className' === e && (e = 'class') : 'class' === e && (e = 'className'), 'style' === e))
          if (((i = t.style), 'string' == typeof n)) i.cssText = n;
          else {
            if (('string' == typeof r && ((i.cssText = ''), (r = null)), r)) for (c in r) (n && c in n) || k(i, c, '');
            if (n) for (u in n) (r && n[u] === r[u]) || k(i, u, n[u]);
          }
        else
          'o' === e[0] && 'n' === e[1]
            ? ((a = e !== (e = e.replace(/Capture$/, ''))),
              (s = e.toLowerCase()),
              (e = (s in t ? s : e).slice(2)),
              n ? (r || t.addEventListener(e, j, a), ((t.l || (t.l = {}))[e] = n)) : t.removeEventListener(e, j, a))
            : 'list' !== e && 'tagName' !== e && 'form' !== e && 'type' !== e && 'size' !== e && !o && e in t
            ? (t[e] = null == n ? '' : n)
            : 'function' != typeof n &&
              'dangerouslySetInnerHTML' !== e &&
              (e !== (e = e.replace(/^xlink:?/, ''))
                ? null == n || !1 === n
                  ? t.removeAttributeNS('http://www.w3.org/1999/xlink', e.toLowerCase())
                  : t.setAttributeNS('http://www.w3.org/1999/xlink', e.toLowerCase(), n)
                : null == n || (!1 === n && !/^ar/.test(e))
                ? t.removeAttribute(e)
                : t.setAttribute(e, n));
      }
      function j(t) {
        this.l[t.type](r.event ? r.event(t) : t);
      }
      function A(t, e, n, o, i, a, s, c, u) {
        var l,
          p,
          f,
          d,
          _,
          v,
          g,
          y,
          x,
          w,
          C = e.type;
        if (void 0 !== e.constructor) return null;
        (l = r.__b) && l(e);
        try {
          t: if ('function' == typeof C) {
            if (
              ((y = e.props),
              (x = (l = C.contextType) && o[l.__c]),
              (w = l ? (x ? x.props.value : l.__) : o),
              n.__c
                ? (g = (p = e.__c = n.__c).__ = p.__E)
                : ('prototype' in C && C.prototype.render
                    ? (e.__c = p = new C(y, w))
                    : ((e.__c = p = new b(y, w)), (p.constructor = C), (p.render = R)),
                  x && x.sub(p),
                  (p.props = y),
                  p.state || (p.state = {}),
                  (p.context = w),
                  (p.__n = o),
                  (f = p.__d = !0),
                  (p.__h = [])),
              null == p.__s && (p.__s = p.state),
              null != C.getDerivedStateFromProps && (p.__s == p.state && (p.__s = h({}, p.__s)), h(p.__s, C.getDerivedStateFromProps(y, p.__s))),
              (d = p.props),
              (_ = p.state),
              f)
            )
              null == C.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(),
                null != p.componentDidMount && p.__h.push(p.componentDidMount);
            else {
              if (
                (null == C.getDerivedStateFromProps && y !== d && null != p.componentWillReceiveProps && p.componentWillReceiveProps(y, w),
                (!p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(y, p.__s, w)) || (e.__v === n.__v && !p.__))
              ) {
                for (
                  p.props = y,
                    p.state = p.__s,
                    e.__v !== n.__v && (p.__d = !1),
                    p.__v = e,
                    e.__e = n.__e,
                    e.__k = n.__k,
                    p.__h.length && s.push(p),
                    l = 0;
                  l < e.__k.length;
                  l++
                )
                  e.__k[l] && (e.__k[l].__ = e);
                break t;
              }
              null != p.componentWillUpdate && p.componentWillUpdate(y, p.__s, w),
                null != p.componentDidUpdate &&
                  p.__h.push(function () {
                    p.componentDidUpdate(d, _, v);
                  });
            }
            (p.context = w),
              (p.props = y),
              (p.state = p.__s),
              (l = r.__r) && l(e),
              (p.__d = !1),
              (p.__v = e),
              (p.__P = t),
              (l = p.render(p.props, p.state, p.context)),
              (e.__k = null != l && l.type == m && null == l.key ? l.props.children : Array.isArray(l) ? l : [l]),
              null != p.getChildContext && (o = h(h({}, o), p.getChildContext())),
              f || null == p.getSnapshotBeforeUpdate || (v = p.getSnapshotBeforeUpdate(d, _)),
              S(t, e, n, o, i, a, s, c, u),
              (p.base = e.__e),
              p.__h.length && s.push(p),
              g && (p.__E = p.__ = null),
              (p.__e = !1);
          } else null == a && e.__v === n.__v ? ((e.__k = n.__k), (e.__e = n.__e)) : (e.__e = M(n.__e, e, n, o, i, a, s, u));
          (l = r.diffed) && l(e);
        } catch (t) {
          (e.__v = null), r.__e(t, e, n);
        }
        return e.__e;
      }
      function E(t, e) {
        r.__c && r.__c(e, t),
          t.some(function (e) {
            try {
              (t = e.__h),
                (e.__h = []),
                t.some(function (t) {
                  t.call(e);
                });
            } catch (t) {
              r.__e(t, e.__v);
            }
          });
      }
      function M(t, e, n, r, o, i, a, s) {
        var c,
          u,
          l,
          d,
          h,
          _ = n.props,
          v = e.props;
        if (((o = 'svg' === e.type || o), null != i))
          for (c = 0; c < i.length; c++)
            if (null != (u = i[c]) && ((null === e.type ? 3 === u.nodeType : u.localName === e.type) || t == u)) {
              (t = u), (i[c] = null);
              break;
            }
        if (null == t) {
          if (null === e.type) return document.createTextNode(v);
          (t = o ? document.createElementNS('http://www.w3.org/2000/svg', e.type) : document.createElement(e.type, v.is && {is: v.is})),
            (i = null),
            (s = !1);
        }
        if (null === e.type) _ !== v && t.data != v && (t.data = v);
        else {
          if (
            (null != i && (i = f.slice.call(t.childNodes)), (l = (_ = n.props || p).dangerouslySetInnerHTML), (d = v.dangerouslySetInnerHTML), !s)
          ) {
            if (_ === p) for (_ = {}, h = 0; h < t.attributes.length; h++) _[t.attributes[h].name] = t.attributes[h].value;
            (d || l) && ((d && l && d.__html == l.__html) || (t.innerHTML = (d && d.__html) || ''));
          }
          (function (t, e, n, r, o) {
            var i;
            for (i in n) 'children' === i || 'key' === i || i in e || T(t, i, null, n[i], r);
            for (i in e)
              (o && 'function' != typeof e[i]) ||
                'children' === i ||
                'key' === i ||
                'value' === i ||
                'checked' === i ||
                n[i] === e[i] ||
                T(t, i, e[i], n[i], r);
          })(t, v, _, o, s),
            d ? (e.__k = []) : ((e.__k = e.props.children), S(t, e, n, r, 'foreignObject' !== e.type && o, i, a, p, s)),
            s ||
              ('value' in v && void 0 !== (c = v.value) && c !== t.value && T(t, 'value', c, _.value, !1),
              'checked' in v && void 0 !== (c = v.checked) && c !== t.checked && T(t, 'checked', c, _.checked, !1));
        }
        return t;
      }
      function I(t, e, n) {
        try {
          'function' == typeof t ? t(e) : (t.current = e);
        } catch (t) {
          r.__e(t, n);
        }
      }
      function L(t, e, n) {
        var o, i, a;
        if (
          (r.unmount && r.unmount(t),
          (o = t.ref) && ((o.current && o.current !== t.__e) || I(o, null, e)),
          n || 'function' == typeof t.type || (n = null != (i = t.__e)),
          (t.__e = t.__d = void 0),
          null != (o = t.__c))
        ) {
          if (o.componentWillUnmount)
            try {
              o.componentWillUnmount();
            } catch (t) {
              r.__e(t, e);
            }
          o.base = o.__P = null;
        }
        if ((o = t.__k)) for (a = 0; a < o.length; a++) o[a] && L(o[a], e, n);
        null != i && _(i);
      }
      function R(t, e, n) {
        return this.constructor(t, n);
      }
      function B(t, e, n) {
        var o, i, a;
        r.__ && r.__(t, e),
          (i = (o = n === u) ? null : (n && n.__k) || e.__k),
          (t = v(m, null, [t])),
          (a = []),
          A(
            e,
            ((o ? e : n || e).__k = t),
            i || p,
            p,
            void 0 !== e.ownerSVGElement,
            n && !o ? [n] : i ? null : f.slice.call(e.childNodes),
            a,
            n || p,
            o
          ),
          E(a, t);
      }
      function D(t, e) {
        B(t, e, u);
      }
      function F(t, e) {
        var n, r;
        for (r in ((e = h(h({}, t.props), e)), arguments.length > 2 && (e.children = f.slice.call(arguments, 2)), (n = {}), e))
          'key' !== r && 'ref' !== r && (n[r] = e[r]);
        return g(t.type, n, e.key || t.key, e.ref || t.ref, null);
      }
      function U(t) {
        var e = {},
          n = {
            __c: '__cC' + l++,
            __: t,
            Consumer: function (t, e) {
              return t.children(e);
            },
            Provider: function (t) {
              var r,
                o = this;
              return (
                this.getChildContext ||
                  ((r = []),
                  (this.getChildContext = function () {
                    return (e[n.__c] = o), e;
                  }),
                  (this.shouldComponentUpdate = function (t) {
                    o.props.value !== t.value &&
                      r.some(function (e) {
                        (e.context = t.value), C(e);
                      });
                  }),
                  (this.sub = function (t) {
                    r.push(t);
                    var e = t.componentWillUnmount;
                    t.componentWillUnmount = function () {
                      r.splice(r.indexOf(t), 1), e && e.call(t);
                    };
                  })),
                t.children
              );
            }
          };
        return (n.Consumer.contextType = n), (n.Provider.__ = n), n;
      }
      (r = {
        __e: function (t, e) {
          for (var n, r; (e = e.__); )
            if ((n = e.__c) && !n.__)
              try {
                if (
                  (n.constructor &&
                    null != n.constructor.getDerivedStateFromError &&
                    ((r = !0), n.setState(n.constructor.getDerivedStateFromError(t))),
                  null != n.componentDidCatch && ((r = !0), n.componentDidCatch(t)),
                  r)
                )
                  return C((n.__E = n));
              } catch (e) {
                t = e;
              }
          throw t;
        }
      }),
        (o = function (t) {
          return null != t && void 0 === t.constructor;
        }),
        (b.prototype.setState = function (t, e) {
          var n;
          (n = this.__s !== this.state ? this.__s : (this.__s = h({}, this.state))),
            'function' == typeof t && (t = t(n, this.props)),
            t && h(n, t),
            null != t && this.__v && (e && this.__h.push(e), C(this));
        }),
        (b.prototype.forceUpdate = function (t) {
          this.__v && ((this.__e = !0), t && this.__h.push(t), C(this));
        }),
        (b.prototype.render = m),
        (i = []),
        (a = 0),
        (s = 'function' == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
        (u = p),
        (l = 0);
    },
    function (t, e, n) {
      'use strict';
      t.exports = function (t) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var n = (function (t, e) {
                var n = t[1] || '',
                  r = t[3];
                if (!r) return n;
                if (e && 'function' == typeof btoa) {
                  var o =
                      ((a = r),
                      '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                        btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                        ' */'),
                    i = r.sources.map(function (t) {
                      return '/*# sourceURL=' + r.sourceRoot + t + ' */';
                    });
                  return [n].concat(i).concat([o]).join('\n');
                }
                var a;
                return [n].join('\n');
              })(e, t);
              return e[2] ? '@media ' + e[2] + '{' + n + '}' : n;
            }).join('');
          }),
          (e.i = function (t, n) {
            'string' == typeof t && (t = [[null, t, '']]);
            for (var r = {}, o = 0; o < this.length; o++) {
              var i = this[o][0];
              null != i && (r[i] = !0);
            }
            for (o = 0; o < t.length; o++) {
              var a = t[o];
              (null != a[0] && r[a[0]]) || (n && !a[2] ? (a[2] = n) : n && (a[2] = '(' + a[2] + ') and (' + n + ')'), e.push(a));
            }
          }),
          e
        );
      };
    },
    function (t, e, n) {
      var r,
        o,
        i = {},
        a =
          ((r = function () {
            return window && document && document.all && !window.atob;
          }),
          function () {
            return void 0 === o && (o = r.apply(this, arguments)), o;
          }),
        s = function (t, e) {
          return e ? e.querySelector(t) : document.querySelector(t);
        },
        c = (function (t) {
          var e = {};
          return function (t, n) {
            if ('function' == typeof t) return t();
            if (void 0 === e[t]) {
              var r = s.call(this, t, n);
              if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                try {
                  r = r.contentDocument.head;
                } catch (t) {
                  r = null;
                }
              e[t] = r;
            }
            return e[t];
          };
        })(),
        u = null,
        l = 0,
        p = [],
        f = n(17);
      function d(t, e) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n],
            o = i[r.id];
          if (o) {
            o.refs++;
            for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
            for (; a < r.parts.length; a++) o.parts.push(m(r.parts[a], e));
          } else {
            var s = [];
            for (a = 0; a < r.parts.length; a++) s.push(m(r.parts[a], e));
            i[r.id] = {id: r.id, refs: 1, parts: s};
          }
        }
      }
      function h(t, e) {
        for (var n = [], r = {}, o = 0; o < t.length; o++) {
          var i = t[o],
            a = e.base ? i[0] + e.base : i[0],
            s = {css: i[1], media: i[2], sourceMap: i[3]};
          r[a] ? r[a].parts.push(s) : n.push((r[a] = {id: a, parts: [s]}));
        }
        return n;
      }
      function _(t, e) {
        var n = c(t.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = p[p.length - 1];
        if ('top' === t.insertAt)
          r ? (r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e)) : n.insertBefore(e, n.firstChild), p.push(e);
        else if ('bottom' === t.insertAt) n.appendChild(e);
        else {
          if ('object' != typeof t.insertAt || !t.insertAt.before)
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
            );
          var o = c(t.insertAt.before, n);
          n.insertBefore(e, o);
        }
      }
      function v(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = p.indexOf(t);
        e >= 0 && p.splice(e, 1);
      }
      function g(t) {
        var e = document.createElement('style');
        if ((void 0 === t.attrs.type && (t.attrs.type = 'text/css'), void 0 === t.attrs.nonce)) {
          var r = (function () {
            0;
            return n.nc;
          })();
          r && (t.attrs.nonce = r);
        }
        return y(e, t.attrs), _(t, e), e;
      }
      function y(t, e) {
        Object.keys(e).forEach(function (n) {
          t.setAttribute(n, e[n]);
        });
      }
      function m(t, e) {
        var n, r, o, i;
        if (e.transform && t.css) {
          if (!(i = 'function' == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () {};
          t.css = i;
        }
        if (e.singleton) {
          var a = l++;
          (n = u || (u = g(e))), (r = w.bind(null, n, a, !1)), (o = w.bind(null, n, a, !0));
        } else
          t.sourceMap &&
          'function' == typeof URL &&
          'function' == typeof URL.createObjectURL &&
          'function' == typeof URL.revokeObjectURL &&
          'function' == typeof Blob &&
          'function' == typeof btoa
            ? ((n = (function (t) {
                var e = document.createElement('link');
                return void 0 === t.attrs.type && (t.attrs.type = 'text/css'), (t.attrs.rel = 'stylesheet'), y(e, t.attrs), _(t, e), e;
              })(e)),
              (r = P.bind(null, n, e)),
              (o = function () {
                v(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = g(e)),
              (r = C.bind(null, n)),
              (o = function () {
                v(n);
              }));
        return (
          r(t),
          function (e) {
            if (e) {
              if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
              r((t = e));
            } else o();
          }
        );
      }
      t.exports = function (t, e) {
        if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
          throw new Error('The style-loader cannot be used in a non-browser environment');
        ((e = e || {}).attrs = 'object' == typeof e.attrs ? e.attrs : {}),
          e.singleton || 'boolean' == typeof e.singleton || (e.singleton = a()),
          e.insertInto || (e.insertInto = 'head'),
          e.insertAt || (e.insertAt = 'bottom');
        var n = h(t, e);
        return (
          d(n, e),
          function (t) {
            for (var r = [], o = 0; o < n.length; o++) {
              var a = n[o];
              (s = i[a.id]).refs--, r.push(s);
            }
            t && d(h(t, e), e);
            for (o = 0; o < r.length; o++) {
              var s;
              if (0 === (s = r[o]).refs) {
                for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                delete i[s.id];
              }
            }
          }
        );
      };
      var b,
        x =
          ((b = []),
          function (t, e) {
            return (b[t] = e), b.filter(Boolean).join('\n');
          });
      function w(t, e, n, r) {
        var o = n ? '' : r.css;
        if (t.styleSheet) t.styleSheet.cssText = x(e, o);
        else {
          var i = document.createTextNode(o),
            a = t.childNodes;
          a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
        }
      }
      function C(t, e) {
        var n = e.css,
          r = e.media;
        if ((r && t.setAttribute('media', r), t.styleSheet)) t.styleSheet.cssText = n;
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(n));
        }
      }
      function P(t, e, n) {
        var r = n.css,
          o = n.sourceMap,
          i = void 0 === e.convertToAbsoluteUrls && o;
        (e.convertToAbsoluteUrls || i) && (r = f(r)),
          o && (r += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + ' */');
        var a = new Blob([r], {type: 'text/css'}),
          s = t.href;
        (t.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
      }
    },
    function (t, e, n) {
      window,
        (t.exports = (function (t) {
          var e = {};
          function n(r) {
            if (e[r]) return e[r].exports;
            var o = (e[r] = {i: r, l: !1, exports: {}});
            return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, r) {
              n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r});
            }),
            (n.r = function (t) {
              'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
                Object.defineProperty(t, '__esModule', {value: !0});
            }),
            (n.t = function (t, e) {
              if ((1 & e && (t = n(t)), 8 & e)) return t;
              if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
              var r = Object.create(null);
              if ((n.r(r), Object.defineProperty(r, 'default', {enumerable: !0, value: t}), 2 & e && 'string' != typeof t))
                for (var o in t)
                  n.d(
                    r,
                    o,
                    function (e) {
                      return t[e];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return n.d(e, 'a', e), e;
            }),
            (n.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ''),
            n((n.s = 63))
          );
        })([
          function (t, e, n) {
            (function (e) {
              var n = function (t) {
                return t && t.Math == Math && t;
              };
              t.exports =
                n('object' == typeof globalThis && globalThis) ||
                n('object' == typeof window && window) ||
                n('object' == typeof self && self) ||
                n('object' == typeof e && e) ||
                Function('return this')();
            }.call(this, n(67)));
          },
          function (t, e, n) {
            var r = n(0),
              o = n(18),
              i = n(41),
              a = n(71),
              s = r.Symbol,
              c = o('wks');
            t.exports = function (t) {
              return c[t] || (c[t] = (a && s[t]) || (a ? s : i)('Symbol.' + t));
            };
          },
          function (t, e, n) {
            var r = n(8);
            t.exports = function (t) {
              if (!r(t)) throw TypeError(String(t) + ' is not an object');
              return t;
            };
          },
          function (t, e, n) {
            var r = n(6),
              o = n(11),
              i = n(19);
            t.exports = r
              ? function (t, e, n) {
                  return o.f(t, e, i(1, n));
                }
              : function (t, e, n) {
                  return (t[e] = n), t;
                };
          },
          function (t, e) {
            t.exports = function (t) {
              try {
                return !!t();
              } catch (t) {
                return !0;
              }
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(30).f,
              i = n(3),
              a = n(10),
              s = n(24),
              c = n(74),
              u = n(49);
            t.exports = function (t, e) {
              var n,
                l,
                p,
                f,
                d,
                h = t.target,
                _ = t.global,
                v = t.stat;
              if ((n = _ ? r : v ? r[h] || s(h, {}) : (r[h] || {}).prototype))
                for (l in e) {
                  if (
                    ((f = e[l]), (p = t.noTargetGet ? (d = o(n, l)) && d.value : n[l]), !u(_ ? l : h + (v ? '.' : '#') + l, t.forced) && void 0 !== p)
                  ) {
                    if (typeof f == typeof p) continue;
                    c(f, p);
                  }
                  (t.sham || (p && p.sham)) && i(f, 'sham', !0), a(n, l, f, t);
                }
            };
          },
          function (t, e, n) {
            var r = n(4);
            t.exports = !r(function () {
              return (
                7 !=
                Object.defineProperty({}, 'a', {
                  get: function () {
                    return 7;
                  }
                }).a
              );
            });
          },
          function (t, e) {
            var n = {}.hasOwnProperty;
            t.exports = function (t, e) {
              return n.call(t, e);
            };
          },
          function (t, e) {
            t.exports = function (t) {
              return 'object' == typeof t ? null !== t : 'function' == typeof t;
            };
          },
          function (t, e, n) {
            var r = n(21),
              o = n(0),
              i = function (t) {
                return 'function' == typeof t ? t : void 0;
              };
            t.exports = function (t, e) {
              return arguments.length < 2 ? i(r[t]) || i(o[t]) : (r[t] && r[t][e]) || (o[t] && o[t][e]);
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(18),
              i = n(3),
              a = n(7),
              s = n(24),
              c = n(40),
              u = n(14),
              l = u.get,
              p = u.enforce,
              f = String(c).split('toString');
            o('inspectSource', function (t) {
              return c.call(t);
            }),
              (t.exports = function (t, e, n, o) {
                var c = !!o && !!o.unsafe,
                  u = !!o && !!o.enumerable,
                  l = !!o && !!o.noTargetGet;
                'function' == typeof n &&
                  ('string' != typeof e || a(n, 'name') || i(n, 'name', e), (p(n).source = f.join('string' == typeof e ? e : ''))),
                  t !== r ? (c ? !l && t[e] && (u = !0) : delete t[e], u ? (t[e] = n) : i(t, e, n)) : u ? (t[e] = n) : s(e, n);
              })(Function.prototype, 'toString', function () {
                return ('function' == typeof this && l(this).source) || c.call(this);
              });
          },
          function (t, e, n) {
            var r = n(6),
              o = n(38),
              i = n(2),
              a = n(39),
              s = Object.defineProperty;
            e.f = r
              ? s
              : function (t, e, n) {
                  if ((i(t), (e = a(e, !0)), i(n), o))
                    try {
                      return s(t, e, n);
                    } catch (t) {}
                  if ('get' in n || 'set' in n) throw TypeError('Accessors not supported');
                  return 'value' in n && (t[e] = n.value), t;
                };
          },
          function (t, e) {
            t.exports = function (t) {
              if ('function' != typeof t) throw TypeError(String(t) + ' is not a function');
              return t;
            };
          },
          function (t, e) {
            t.exports = !1;
          },
          function (t, e, n) {
            var r,
              o,
              i,
              a = n(69),
              s = n(0),
              c = n(8),
              u = n(3),
              l = n(7),
              p = n(26),
              f = n(27),
              d = s.WeakMap;
            if (a) {
              var h = new d(),
                _ = h.get,
                v = h.has,
                g = h.set;
              (r = function (t, e) {
                return g.call(h, t, e), e;
              }),
                (o = function (t) {
                  return _.call(h, t) || {};
                }),
                (i = function (t) {
                  return v.call(h, t);
                });
            } else {
              var y = p('state');
              (f[y] = !0),
                (r = function (t, e) {
                  return u(t, y, e), e;
                }),
                (o = function (t) {
                  return l(t, y) ? t[y] : {};
                }),
                (i = function (t) {
                  return l(t, y);
                });
            }
            t.exports = {
              set: r,
              get: o,
              has: i,
              enforce: function (t) {
                return i(t) ? o(t) : r(t, {});
              },
              getterFor: function (t) {
                return function (e) {
                  var n;
                  if (!c(e) || (n = o(e)).type !== t) throw TypeError('Incompatible receiver, ' + t + ' required');
                  return n;
                };
              }
            };
          },
          function (t, e) {
            var n = {}.toString;
            t.exports = function (t) {
              return n.call(t).slice(8, -1);
            };
          },
          function (t, e) {
            t.exports = {};
          },
          function (t, e, n) {
            'use strict';
            var r = n(12),
              o = function (t) {
                var e, n;
                (this.promise = new t(function (t, r) {
                  if (void 0 !== e || void 0 !== n) throw TypeError('Bad Promise constructor');
                  (e = t), (n = r);
                })),
                  (this.resolve = r(e)),
                  (this.reject = r(n));
              };
            t.exports.f = function (t) {
              return new o(t);
            };
          },
          function (t, e, n) {
            var r = n(13),
              o = n(68);
            (t.exports = function (t, e) {
              return o[t] || (o[t] = void 0 !== e ? e : {});
            })('versions', []).push({version: '3.3.5', mode: r ? 'pure' : 'global', copyright: '© 2019 Denis Pushkarev (zloirock.ru)'});
          },
          function (t, e) {
            t.exports = function (t, e) {
              return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e};
            };
          },
          function (t, e, n) {
            var r = n(45),
              o = n(29);
            t.exports = function (t) {
              return r(o(t));
            };
          },
          function (t, e, n) {
            t.exports = n(0);
          },
          function (t, e, n) {
            var r = n(2),
              o = n(91),
              i = n(47),
              a = n(54),
              s = n(92),
              c = n(93),
              u = function (t, e) {
                (this.stopped = t), (this.result = e);
              };
            (t.exports = function (t, e, n, l, p) {
              var f,
                d,
                h,
                _,
                v,
                g,
                y,
                m = a(e, n, l ? 2 : 1);
              if (p) f = t;
              else {
                if ('function' != typeof (d = s(t))) throw TypeError('Target is not iterable');
                if (o(d)) {
                  for (h = 0, _ = i(t.length); _ > h; h++) if ((v = l ? m(r((y = t[h]))[0], y[1]) : m(t[h])) && v instanceof u) return v;
                  return new u(!1);
                }
                f = d.call(t);
              }
              for (g = f.next; !(y = g.call(f)).done; ) if ('object' == typeof (v = c(f, m, y.value, l)) && v && v instanceof u) return v;
              return new u(!1);
            }).stop = function (t) {
              return new u(!0, t);
            };
          },
          function (t, e) {
            t.exports = function (t) {
              try {
                return {error: !1, value: t()};
              } catch (t) {
                return {error: !0, value: t};
              }
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(3);
            t.exports = function (t, e) {
              try {
                o(r, t, e);
              } catch (n) {
                r[t] = e;
              }
              return e;
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(8),
              i = r.document,
              a = o(i) && o(i.createElement);
            t.exports = function (t) {
              return a ? i.createElement(t) : {};
            };
          },
          function (t, e, n) {
            var r = n(18),
              o = n(41),
              i = r('keys');
            t.exports = function (t) {
              return i[t] || (i[t] = o(t));
            };
          },
          function (t, e) {
            t.exports = {};
          },
          function (t, e) {
            var n = Math.ceil,
              r = Math.floor;
            t.exports = function (t) {
              return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
            };
          },
          function (t, e) {
            t.exports = function (t) {
              if (null == t) throw TypeError("Can't call method on " + t);
              return t;
            };
          },
          function (t, e, n) {
            var r = n(6),
              o = n(44),
              i = n(19),
              a = n(20),
              s = n(39),
              c = n(7),
              u = n(38),
              l = Object.getOwnPropertyDescriptor;
            e.f = r
              ? l
              : function (t, e) {
                  if (((t = a(t)), (e = s(e, !0)), u))
                    try {
                      return l(t, e);
                    } catch (t) {}
                  if (c(t, e)) return i(!o.f.call(t, e), t[e]);
                };
          },
          function (t, e) {
            t.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
          },
          function (t, e, n) {
            var r = n(7),
              o = n(33),
              i = n(26),
              a = n(80),
              s = i('IE_PROTO'),
              c = Object.prototype;
            t.exports = a
              ? Object.getPrototypeOf
              : function (t) {
                  return (
                    (t = o(t)),
                    r(t, s)
                      ? t[s]
                      : 'function' == typeof t.constructor && t instanceof t.constructor
                      ? t.constructor.prototype
                      : t instanceof Object
                      ? c
                      : null
                  );
                };
          },
          function (t, e, n) {
            var r = n(29);
            t.exports = function (t) {
              return Object(r(t));
            };
          },
          function (t, e, n) {
            var r = n(2),
              o = n(81),
              i = n(31),
              a = n(27),
              s = n(51),
              c = n(25),
              u = n(26)('IE_PROTO'),
              l = function () {},
              p = function () {
                var t,
                  e = c('iframe'),
                  n = i.length;
                for (
                  e.style.display = 'none',
                    s.appendChild(e),
                    e.src = String('javascript:'),
                    (t = e.contentWindow.document).open(),
                    t.write('<script>document.F=Object</script>'),
                    t.close(),
                    p = t.F;
                  n--;

                )
                  delete p.prototype[i[n]];
                return p();
              };
            (t.exports =
              Object.create ||
              function (t, e) {
                var n;
                return null !== t ? ((l.prototype = r(t)), (n = new l()), (l.prototype = null), (n[u] = t)) : (n = p()), void 0 === e ? n : o(n, e);
              }),
              (a[u] = !0);
          },
          function (t, e, n) {
            var r = n(46),
              o = n(31);
            t.exports =
              Object.keys ||
              function (t) {
                return r(t, o);
              };
          },
          function (t, e, n) {
            var r = n(11).f,
              o = n(7),
              i = n(1)('toStringTag');
            t.exports = function (t, e, n) {
              t && !o((t = n ? t : t.prototype), i) && r(t, i, {configurable: !0, value: e});
            };
          },
          function (t, e, n) {
            var r = n(9);
            t.exports = r('navigator', 'userAgent') || '';
          },
          function (t, e, n) {
            var r = n(6),
              o = n(4),
              i = n(25);
            t.exports =
              !r &&
              !o(function () {
                return (
                  7 !=
                  Object.defineProperty(i('div'), 'a', {
                    get: function () {
                      return 7;
                    }
                  }).a
                );
              });
          },
          function (t, e, n) {
            var r = n(8);
            t.exports = function (t, e) {
              if (!r(t)) return t;
              var n, o;
              if (e && 'function' == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
              if ('function' == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o;
              if (!e && 'function' == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
              throw TypeError("Can't convert object to primitive value");
            };
          },
          function (t, e, n) {
            var r = n(18);
            t.exports = r('native-function-to-string', Function.toString);
          },
          function (t, e) {
            var n = 0,
              r = Math.random();
            t.exports = function (t) {
              return 'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++n + r).toString(36);
            };
          },
          function (t, e, n) {
            var r = n(15),
              o = n(1)('toStringTag'),
              i =
                'Arguments' ==
                r(
                  (function () {
                    return arguments;
                  })()
                );
            t.exports = function (t) {
              var e, n, a;
              return void 0 === t
                ? 'Undefined'
                : null === t
                ? 'Null'
                : 'string' ==
                  typeof (n = (function (t, e) {
                    try {
                      return t[e];
                    } catch (t) {}
                  })((e = Object(t)), o))
                ? n
                : i
                ? r(e)
                : 'Object' == (a = r(e)) && 'function' == typeof e.callee
                ? 'Arguments'
                : a;
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(79),
              i = n(32),
              a = n(52),
              s = n(36),
              c = n(3),
              u = n(10),
              l = n(1),
              p = n(13),
              f = n(16),
              d = n(50),
              h = d.IteratorPrototype,
              _ = d.BUGGY_SAFARI_ITERATORS,
              v = l('iterator'),
              g = function () {
                return this;
              };
            t.exports = function (t, e, n, l, d, y, m) {
              o(n, e, l);
              var b,
                x,
                w,
                C = function (t) {
                  if (t === d && T) return T;
                  if (!_ && t in O) return O[t];
                  switch (t) {
                    case 'keys':
                    case 'values':
                    case 'entries':
                      return function () {
                        return new n(this, t);
                      };
                  }
                  return function () {
                    return new n(this);
                  };
                },
                P = e + ' Iterator',
                S = !1,
                O = t.prototype,
                k = O[v] || O['@@iterator'] || (d && O[d]),
                T = (!_ && k) || C(d),
                j = ('Array' == e && O.entries) || k;
              if (
                (j &&
                  ((b = i(j.call(new t()))),
                  h !== Object.prototype &&
                    b.next &&
                    (p || i(b) === h || (a ? a(b, h) : 'function' != typeof b[v] && c(b, v, g)), s(b, P, !0, !0), p && (f[P] = g))),
                'values' == d &&
                  k &&
                  'values' !== k.name &&
                  ((S = !0),
                  (T = function () {
                    return k.call(this);
                  })),
                (p && !m) || O[v] === T || c(O, v, T),
                (f[e] = T),
                d)
              )
                if (((x = {values: C('values'), keys: y ? T : C('keys'), entries: C('entries')}), m))
                  for (w in x) (!_ && !S && w in O) || u(O, w, x[w]);
                else r({target: e, proto: !0, forced: _ || S}, x);
              return x;
            };
          },
          function (t, e, n) {
            'use strict';
            var r = {}.propertyIsEnumerable,
              o = Object.getOwnPropertyDescriptor,
              i = o && !r.call({1: 2}, 1);
            e.f = i
              ? function (t) {
                  var e = o(this, t);
                  return !!e && e.enumerable;
                }
              : r;
          },
          function (t, e, n) {
            var r = n(4),
              o = n(15),
              i = ''.split;
            t.exports = r(function () {
              return !Object('z').propertyIsEnumerable(0);
            })
              ? function (t) {
                  return 'String' == o(t) ? i.call(t, '') : Object(t);
                }
              : Object;
          },
          function (t, e, n) {
            var r = n(7),
              o = n(20),
              i = n(77).indexOf,
              a = n(27);
            t.exports = function (t, e) {
              var n,
                s = o(t),
                c = 0,
                u = [];
              for (n in s) !r(a, n) && r(s, n) && u.push(n);
              for (; e.length > c; ) r(s, (n = e[c++])) && (~i(u, n) || u.push(n));
              return u;
            };
          },
          function (t, e, n) {
            var r = n(28),
              o = Math.min;
            t.exports = function (t) {
              return t > 0 ? o(r(t), 9007199254740991) : 0;
            };
          },
          function (t, e) {
            e.f = Object.getOwnPropertySymbols;
          },
          function (t, e, n) {
            var r = n(4),
              o = /#|\.prototype\./,
              i = function (t, e) {
                var n = s[a(t)];
                return n == u || (n != c && ('function' == typeof e ? r(e) : !!e));
              },
              a = (i.normalize = function (t) {
                return String(t).replace(o, '.').toLowerCase();
              }),
              s = (i.data = {}),
              c = (i.NATIVE = 'N'),
              u = (i.POLYFILL = 'P');
            t.exports = i;
          },
          function (t, e, n) {
            'use strict';
            var r,
              o,
              i,
              a = n(32),
              s = n(3),
              c = n(7),
              u = n(1),
              l = n(13),
              p = u('iterator'),
              f = !1;
            [].keys && ('next' in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (r = o) : (f = !0)),
              null == r && (r = {}),
              l ||
                c(r, p) ||
                s(r, p, function () {
                  return this;
                }),
              (t.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: f});
          },
          function (t, e, n) {
            var r = n(9);
            t.exports = r('document', 'documentElement');
          },
          function (t, e, n) {
            var r = n(2),
              o = n(82);
            t.exports =
              Object.setPrototypeOf ||
              ('__proto__' in {}
                ? (function () {
                    var t,
                      e = !1,
                      n = {};
                    try {
                      (t = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set).call(n, []), (e = n instanceof Array);
                    } catch (t) {}
                    return function (n, i) {
                      return r(n), o(i), e ? t.call(n, i) : (n.__proto__ = i), n;
                    };
                  })()
                : void 0);
          },
          function (t, e, n) {
            var r = n(0);
            t.exports = r.Promise;
          },
          function (t, e, n) {
            var r = n(12);
            t.exports = function (t, e, n) {
              if ((r(t), void 0 === e)) return t;
              switch (n) {
                case 0:
                  return function () {
                    return t.call(e);
                  };
                case 1:
                  return function (n) {
                    return t.call(e, n);
                  };
                case 2:
                  return function (n, r) {
                    return t.call(e, n, r);
                  };
                case 3:
                  return function (n, r, o) {
                    return t.call(e, n, r, o);
                  };
              }
              return function () {
                return t.apply(e, arguments);
              };
            };
          },
          function (t, e, n) {
            var r = n(2),
              o = n(12),
              i = n(1)('species');
            t.exports = function (t, e) {
              var n,
                a = r(t).constructor;
              return void 0 === a || null == (n = r(a)[i]) ? e : o(n);
            };
          },
          function (t, e, n) {
            var r,
              o,
              i,
              a = n(0),
              s = n(4),
              c = n(15),
              u = n(54),
              l = n(51),
              p = n(25),
              f = n(37),
              d = a.location,
              h = a.setImmediate,
              _ = a.clearImmediate,
              v = a.process,
              g = a.MessageChannel,
              y = a.Dispatch,
              m = 0,
              b = {},
              x = function (t) {
                if (b.hasOwnProperty(t)) {
                  var e = b[t];
                  delete b[t], e();
                }
              },
              w = function (t) {
                return function () {
                  x(t);
                };
              },
              C = function (t) {
                x(t.data);
              },
              P = function (t) {
                a.postMessage(t + '', d.protocol + '//' + d.host);
              };
            (h && _) ||
              ((h = function (t) {
                for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
                return (
                  (b[++m] = function () {
                    ('function' == typeof t ? t : Function(t)).apply(void 0, e);
                  }),
                  r(m),
                  m
                );
              }),
              (_ = function (t) {
                delete b[t];
              }),
              'process' == c(v)
                ? (r = function (t) {
                    v.nextTick(w(t));
                  })
                : y && y.now
                ? (r = function (t) {
                    y.now(w(t));
                  })
                : g && !/(iphone|ipod|ipad).*applewebkit/i.test(f)
                ? ((i = (o = new g()).port2), (o.port1.onmessage = C), (r = u(i.postMessage, i, 1)))
                : !a.addEventListener || 'function' != typeof postMessage || a.importScripts || s(P)
                ? (r =
                    'onreadystatechange' in p('script')
                      ? function (t) {
                          l.appendChild(p('script')).onreadystatechange = function () {
                            l.removeChild(this), x(t);
                          };
                        }
                      : function (t) {
                          setTimeout(w(t), 0);
                        })
                : ((r = P), a.addEventListener('message', C, !1))),
              (t.exports = {set: h, clear: _});
          },
          function (t, e, n) {
            var r = n(2),
              o = n(8),
              i = n(17);
            t.exports = function (t, e) {
              if ((r(t), o(e) && e.constructor === t)) return e;
              var n = i.f(t);
              return (0, n.resolve)(e), n.promise;
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(12),
              i = n(17),
              a = n(23),
              s = n(22);
            r(
              {target: 'Promise', stat: !0},
              {
                allSettled: function (t) {
                  var e = this,
                    n = i.f(e),
                    r = n.resolve,
                    c = n.reject,
                    u = a(function () {
                      var n = o(e.resolve),
                        i = [],
                        a = 0,
                        c = 1;
                      s(t, function (t) {
                        var o = a++,
                          s = !1;
                        i.push(void 0),
                          c++,
                          n.call(e, t).then(
                            function (t) {
                              s || ((s = !0), (i[o] = {status: 'fulfilled', value: t}), --c || r(i));
                            },
                            function (t) {
                              s || ((s = !0), (i[o] = {status: 'rejected', reason: t}), --c || r(i));
                            }
                          );
                      }),
                        --c || r(i);
                    });
                  return u.error && c(u.value), n.promise;
                }
              }
            );
          },
          function (t, e, n) {
            'use strict';
            function r(t) {
              var e = t.kalturaPlayer,
                n = t.loggerName,
                r = e ? e.getLogger : KalturaPlayer.ui.utils.getLogger;
              if (!r) return null;
              var o = r(n);
              return (function (t) {
                return t && 'setLevel' in t;
              })(o)
                ? o
                : null;
            }
            Object.defineProperty(e, '__esModule', {value: !0});
            var o = (function () {
              function t() {}
              return (
                (t.prototype.debug = function (t, e) {}),
                (t.prototype.info = function (t, e) {}),
                (t.prototype.trace = function (t, e) {}),
                (t.prototype.warn = function (t, e) {}),
                (t.prototype.error = function (t, e) {}),
                t
              );
            })();
            e.NoopLogger = o;
            var i = r({}),
              a = new o(),
              s = (function () {
                function t(t, e) {
                  (this._logger = t), (this._defaultOptions = e);
                }
                return (
                  (t.prototype._log = function (t, e, n, r) {
                    if (this._logger.enabledFor(e)) {
                      var o = r.class || this._defaultOptions.class || '_',
                        i = this._defaultOptions.module || '',
                        a = r.method ? '.' + r.method + '()' : '',
                        s =
                          '[' +
                          i +
                          '::' +
                          o +
                          '(' +
                          (this._defaultOptions.context ? "'" + this._defaultOptions.context + "'" : '') +
                          ')' +
                          a +
                          '] ' +
                          n;
                      r.data ? this._logger[t](s, r.data) : this._logger[t](s);
                    }
                  }),
                  (t.prototype.debug = function (t, e) {
                    i && this._log('debug', i.DEBUG, t, e);
                  }),
                  (t.prototype.info = function (t, e) {
                    i && this._log('info', i.INFO, t, e);
                  }),
                  (t.prototype.trace = function (t, e) {
                    i && this._log('trace', i.TRACE, t, e);
                  }),
                  (t.prototype.warn = function (t, e) {
                    i && this._log('warn', i.WARN, t, e);
                  }),
                  (t.prototype.error = function (t, e) {
                    i && this._log('error', i.ERROR, t, e);
                  }),
                  t
                );
              })();
            (e.ProxyLogger = s),
              (e.getContribLogger = function (t) {
                void 0 === t && (t = {});
                var e = t.kalturaPlayer,
                  n = r({kalturaPlayer: e, loggerName: (e ? e._playerId : 'global') + '_contrib'});
                return n ? new s(n, t) : a;
              }),
              (e.enableLogIfNeeded = function () {
                try {
                  if (-1 !== document.URL.indexOf('debugKalturaPlayer')) {
                    var t = r({});
                    if (!t) return;
                    t.setLevel(t.TRACE);
                  }
                } catch (t) {}
              });
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = n(113),
              o = n(115),
              i = (function () {
                function t() {}
                return (
                  (t.uuidV1 = function () {
                    return r();
                  }),
                  (t.uuidV5 = function (t, e) {
                    return o(t, e);
                  }),
                  (t.numberedUuidV1 = function () {
                    for (var e = t.uuidV1(), n = '', r = 0; r < e.length; r++) {
                      var o = e.charAt(r);
                      n += Number.isNaN(+o) ? o.charCodeAt(0) : o;
                    }
                    return n;
                  }),
                  t
                );
              })();
            e.UUID = i;
          },
          function (t, e) {
            for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
            t.exports = function (t, e) {
              var r = e || 0,
                o = n;
              return [
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                '-',
                o[t[r++]],
                o[t[r++]],
                '-',
                o[t[r++]],
                o[t[r++]],
                '-',
                o[t[r++]],
                o[t[r++]],
                '-',
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                o[t[r++]]
              ].join('');
            };
          },
          function (t, e, n) {
            'use strict';
            var r =
              (this && this.__assign) ||
              function () {
                return (r =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t;
                  }).apply(this, arguments);
              };
            Object.defineProperty(e, '__esModule', {value: !0});
            var o = (function () {
              function t() {}
              return (
                (t.copyDeep = function (e) {
                  var n;
                  return (
                    Array.isArray(e)
                      ? (n = e.length > 0 ? e.slice(0) : []).forEach(function (e, r) {
                          (('object' == typeof e && e !== {}) || (Array.isArray(e) && e.length > 0)) && (n[r] = t.copyDeep(e));
                        })
                      : 'object' == typeof e
                      ? ((n = Object.assign({}, e)),
                        Object.keys(n).forEach(function (e) {
                          (('object' == typeof n[e] && n[e] !== {}) || (Array.isArray(n[e]) && n[e].length > 0)) && (n[e] = t.copyDeep(n[e]));
                        }))
                      : (n = e),
                    n
                  );
                }),
                (t.isObject = function (t) {
                  return t && 'object' == typeof t && !Array.isArray(t);
                }),
                (t.mergeDeep = function (e, n, r) {
                  var o, i;
                  if (!n.length) return e;
                  var a = (r ? r.explicitMerge : null) || [],
                    s = n.shift();
                  if (t.isObject(e) && t.isObject(s))
                    for (var c in s)
                      t.isObject(s[c])
                        ? (e[c] || Object.assign(e, (((o = {})[c] = {}), o)),
                          -1 !== a.indexOf(c) ? (e[c] = t.explicitFlatMerge(e[c], s[c])) : t.mergeDeep(e[c], [s[c]], r))
                        : Object.assign(e, (((i = {})[c] = s[c]), i));
                  return t.mergeDeep(e, n, r);
                }),
                (t.mergeDefaults = function (e, n, r) {
                  return t.mergeDeep({}, [n, e], r);
                }),
                (t.explicitFlatMerge = function (t, e) {
                  var n = r({}, t);
                  return (
                    Object.keys(e).forEach(function (t) {
                      null === e[t] || 0 === Object.keys(e[t]).length ? delete n[t] : (n[t] = e[t]);
                    }),
                    n
                  );
                }),
                (t.get = function (t, e, n) {
                  for (
                    var r = (function (t) {
                        var e = [];
                        return (
                          t.split('.').forEach(function (t) {
                            t.split(/\[([^}]+)\]/g).forEach(function (t) {
                              t.length > 0 && e.push(t);
                            });
                          }),
                          e
                        );
                      })(e),
                      o = t,
                      i = 0;
                    i < r.length;
                    i++
                  ) {
                    if (!o[r[i]]) return n;
                    o = o[r[i]];
                  }
                  return o;
                }),
                t
              );
            })();
            e.ObjectUtils = o;
          },
          function (t, e, n) {
            'use strict';
            function r(t) {
              for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
            }
            Object.defineProperty(e, '__esModule', {value: !0}),
              n(64),
              n(103),
              n(107),
              (Number.isNaN =
                Number.isNaN ||
                function (t) {
                  return null !== t && (t != t || +t != t);
                }),
              r(n(110)),
              r(n(111)),
              r(n(112)),
              r(n(118)),
              r(n(59)),
              r(n(60)),
              r(n(119)),
              r(n(62)),
              r(n(120)),
              r(n(121));
          },
          function (t, e, n) {
            (t.exports = n(65)), n(99), n(100), n(101), n(102);
          },
          function (t, e, n) {
            n(66), n(72), n(83), n(87), n(58), n(98);
            var r = n(21);
            t.exports = r.Promise;
          },
          function (t, e, n) {
            var r = n(10),
              o = n(70),
              i = Object.prototype;
            o !== i.toString && r(i, 'toString', o, {unsafe: !0});
          },
          function (t, e) {
            var n;
            n = (function () {
              return this;
            })();
            try {
              n = n || new Function('return this')();
            } catch (t) {
              'object' == typeof window && (n = window);
            }
            t.exports = n;
          },
          function (t, e, n) {
            var r = n(0),
              o = n(24),
              i = r['__core-js_shared__'] || o('__core-js_shared__', {});
            t.exports = i;
          },
          function (t, e, n) {
            var r = n(0),
              o = n(40),
              i = r.WeakMap;
            t.exports = 'function' == typeof i && /native code/.test(o.call(i));
          },
          function (t, e, n) {
            'use strict';
            var r = n(42),
              o = {};
            (o[n(1)('toStringTag')] = 'z'),
              (t.exports =
                '[object z]' !== String(o)
                  ? function () {
                      return '[object ' + r(this) + ']';
                    }
                  : o.toString);
          },
          function (t, e, n) {
            var r = n(4);
            t.exports =
              !!Object.getOwnPropertySymbols &&
              !r(function () {
                return !String(Symbol());
              });
          },
          function (t, e, n) {
            'use strict';
            var r = n(73).charAt,
              o = n(14),
              i = n(43),
              a = o.set,
              s = o.getterFor('String Iterator');
            i(
              String,
              'String',
              function (t) {
                a(this, {type: 'String Iterator', string: String(t), index: 0});
              },
              function () {
                var t,
                  e = s(this),
                  n = e.string,
                  o = e.index;
                return o >= n.length ? {value: void 0, done: !0} : ((t = r(n, o)), (e.index += t.length), {value: t, done: !1});
              }
            );
          },
          function (t, e, n) {
            var r = n(28),
              o = n(29),
              i = function (t) {
                return function (e, n) {
                  var i,
                    a,
                    s = String(o(e)),
                    c = r(n),
                    u = s.length;
                  return c < 0 || c >= u
                    ? t
                      ? ''
                      : void 0
                    : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343
                    ? t
                      ? s.charAt(c)
                      : i
                    : t
                    ? s.slice(c, c + 2)
                    : a - 56320 + ((i - 55296) << 10) + 65536;
                };
              };
            t.exports = {codeAt: i(!1), charAt: i(!0)};
          },
          function (t, e, n) {
            var r = n(7),
              o = n(75),
              i = n(30),
              a = n(11);
            t.exports = function (t, e) {
              for (var n = o(e), s = a.f, c = i.f, u = 0; u < n.length; u++) {
                var l = n[u];
                r(t, l) || s(t, l, c(e, l));
              }
            };
          },
          function (t, e, n) {
            var r = n(9),
              o = n(76),
              i = n(48),
              a = n(2);
            t.exports =
              r('Reflect', 'ownKeys') ||
              function (t) {
                var e = o.f(a(t)),
                  n = i.f;
                return n ? e.concat(n(t)) : e;
              };
          },
          function (t, e, n) {
            var r = n(46),
              o = n(31).concat('length', 'prototype');
            e.f =
              Object.getOwnPropertyNames ||
              function (t) {
                return r(t, o);
              };
          },
          function (t, e, n) {
            var r = n(20),
              o = n(47),
              i = n(78),
              a = function (t) {
                return function (e, n, a) {
                  var s,
                    c = r(e),
                    u = o(c.length),
                    l = i(a, u);
                  if (t && n != n) {
                    for (; u > l; ) if ((s = c[l++]) != s) return !0;
                  } else for (; u > l; l++) if ((t || l in c) && c[l] === n) return t || l || 0;
                  return !t && -1;
                };
              };
            t.exports = {includes: a(!0), indexOf: a(!1)};
          },
          function (t, e, n) {
            var r = n(28),
              o = Math.max,
              i = Math.min;
            t.exports = function (t, e) {
              var n = r(t);
              return n < 0 ? o(n + e, 0) : i(n, e);
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(50).IteratorPrototype,
              o = n(34),
              i = n(19),
              a = n(36),
              s = n(16),
              c = function () {
                return this;
              };
            t.exports = function (t, e, n) {
              var u = e + ' Iterator';
              return (t.prototype = o(r, {next: i(1, n)})), a(t, u, !1, !0), (s[u] = c), t;
            };
          },
          function (t, e, n) {
            var r = n(4);
            t.exports = !r(function () {
              function t() {}
              return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
            });
          },
          function (t, e, n) {
            var r = n(6),
              o = n(11),
              i = n(2),
              a = n(35);
            t.exports = r
              ? Object.defineProperties
              : function (t, e) {
                  i(t);
                  for (var n, r = a(e), s = r.length, c = 0; s > c; ) o.f(t, (n = r[c++]), e[n]);
                  return t;
                };
          },
          function (t, e, n) {
            var r = n(8);
            t.exports = function (t) {
              if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + ' as a prototype');
              return t;
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(84),
              i = n(85),
              a = n(3),
              s = n(1),
              c = s('iterator'),
              u = s('toStringTag'),
              l = i.values;
            for (var p in o) {
              var f = r[p],
                d = f && f.prototype;
              if (d) {
                if (d[c] !== l)
                  try {
                    a(d, c, l);
                  } catch (t) {
                    d[c] = l;
                  }
                if ((d[u] || a(d, u, p), o[p]))
                  for (var h in i)
                    if (d[h] !== i[h])
                      try {
                        a(d, h, i[h]);
                      } catch (t) {
                        d[h] = i[h];
                      }
              }
            }
          },
          function (t, e) {
            t.exports = {
              CSSRuleList: 0,
              CSSStyleDeclaration: 0,
              CSSValueList: 0,
              ClientRectList: 0,
              DOMRectList: 0,
              DOMStringList: 0,
              DOMTokenList: 1,
              DataTransferItemList: 0,
              FileList: 0,
              HTMLAllCollection: 0,
              HTMLCollection: 0,
              HTMLFormElement: 0,
              HTMLSelectElement: 0,
              MediaList: 0,
              MimeTypeArray: 0,
              NamedNodeMap: 0,
              NodeList: 1,
              PaintRequestList: 0,
              Plugin: 0,
              PluginArray: 0,
              SVGLengthList: 0,
              SVGNumberList: 0,
              SVGPathSegList: 0,
              SVGPointList: 0,
              SVGStringList: 0,
              SVGTransformList: 0,
              SourceBufferList: 0,
              StyleSheetList: 0,
              TextTrackCueList: 0,
              TextTrackList: 0,
              TouchList: 0
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(20),
              o = n(86),
              i = n(16),
              a = n(14),
              s = n(43),
              c = a.set,
              u = a.getterFor('Array Iterator');
            (t.exports = s(
              Array,
              'Array',
              function (t, e) {
                c(this, {type: 'Array Iterator', target: r(t), index: 0, kind: e});
              },
              function () {
                var t = u(this),
                  e = t.target,
                  n = t.kind,
                  r = t.index++;
                return !e || r >= e.length
                  ? ((t.target = void 0), {value: void 0, done: !0})
                  : 'keys' == n
                  ? {value: r, done: !1}
                  : 'values' == n
                  ? {value: e[r], done: !1}
                  : {value: [r, e[r]], done: !1};
              },
              'values'
            )),
              (i.Arguments = i.Array),
              o('keys'),
              o('values'),
              o('entries');
          },
          function (t, e, n) {
            var r = n(1),
              o = n(34),
              i = n(3),
              a = r('unscopables'),
              s = Array.prototype;
            null == s[a] && i(s, a, o(null)),
              (t.exports = function (t) {
                s[a][t] = !0;
              });
          },
          function (t, e, n) {
            'use strict';
            var r,
              o,
              i,
              a,
              s = n(5),
              c = n(13),
              u = n(0),
              l = n(9),
              p = n(53),
              f = n(10),
              d = n(88),
              h = n(36),
              _ = n(89),
              v = n(8),
              g = n(12),
              y = n(90),
              m = n(15),
              b = n(22),
              x = n(94),
              w = n(55),
              C = n(56).set,
              P = n(95),
              S = n(57),
              O = n(96),
              k = n(17),
              T = n(23),
              j = n(14),
              A = n(49),
              E = n(1),
              M = n(97),
              I = E('species'),
              L = 'Promise',
              R = j.get,
              B = j.set,
              D = j.getterFor(L),
              F = p,
              U = u.TypeError,
              N = u.document,
              z = u.process,
              V = l('fetch'),
              K = k.f,
              H = K,
              W = 'process' == m(z),
              q = !!(N && N.createEvent && u.dispatchEvent),
              G = A(L, function () {
                if (66 === M) return !0;
                if (!W && 'function' != typeof PromiseRejectionEvent) return !0;
                if (c && !F.prototype.finally) return !0;
                if (M >= 51 && /native code/.test(F)) return !1;
                var t = F.resolve(1),
                  e = function (t) {
                    t(
                      function () {},
                      function () {}
                    );
                  };
                return ((t.constructor = {})[I] = e), !(t.then(function () {}) instanceof e);
              }),
              Y =
                G ||
                !x(function (t) {
                  F.all(t).catch(function () {});
                }),
              J = function (t) {
                var e;
                return !(!v(t) || 'function' != typeof (e = t.then)) && e;
              },
              $ = function (t, e, n) {
                if (!e.notified) {
                  e.notified = !0;
                  var r = e.reactions;
                  P(function () {
                    for (var o = e.value, i = 1 == e.state, a = 0; r.length > a; ) {
                      var s,
                        c,
                        u,
                        l = r[a++],
                        p = i ? l.ok : l.fail,
                        f = l.resolve,
                        d = l.reject,
                        h = l.domain;
                      try {
                        p
                          ? (i || (2 === e.rejection && tt(t, e), (e.rejection = 1)),
                            !0 === p ? (s = o) : (h && h.enter(), (s = p(o)), h && (h.exit(), (u = !0))),
                            s === l.promise ? d(U('Promise-chain cycle')) : (c = J(s)) ? c.call(s, f, d) : f(s))
                          : d(o);
                      } catch (t) {
                        h && !u && h.exit(), d(t);
                      }
                    }
                    (e.reactions = []), (e.notified = !1), n && !e.rejection && X(t, e);
                  });
                }
              },
              Z = function (t, e, n) {
                var r, o;
                q
                  ? (((r = N.createEvent('Event')).promise = e), (r.reason = n), r.initEvent(t, !1, !0), u.dispatchEvent(r))
                  : (r = {promise: e, reason: n}),
                  (o = u['on' + t]) ? o(r) : 'unhandledrejection' === t && O('Unhandled promise rejection', n);
              },
              X = function (t, e) {
                C.call(u, function () {
                  var n,
                    r = e.value;
                  if (
                    Q(e) &&
                    ((n = T(function () {
                      W ? z.emit('unhandledRejection', r, t) : Z('unhandledrejection', t, r);
                    })),
                    (e.rejection = W || Q(e) ? 2 : 1),
                    n.error)
                  )
                    throw n.value;
                });
              },
              Q = function (t) {
                return 1 !== t.rejection && !t.parent;
              },
              tt = function (t, e) {
                C.call(u, function () {
                  W ? z.emit('rejectionHandled', t) : Z('rejectionhandled', t, e.value);
                });
              },
              et = function (t, e, n, r) {
                return function (o) {
                  t(e, n, o, r);
                };
              },
              nt = function (t, e, n, r) {
                e.done || ((e.done = !0), r && (e = r), (e.value = n), (e.state = 2), $(t, e, !0));
              },
              rt = function (t, e, n, r) {
                if (!e.done) {
                  (e.done = !0), r && (e = r);
                  try {
                    if (t === n) throw U("Promise can't be resolved itself");
                    var o = J(n);
                    o
                      ? P(function () {
                          var r = {done: !1};
                          try {
                            o.call(n, et(rt, t, r, e), et(nt, t, r, e));
                          } catch (n) {
                            nt(t, r, n, e);
                          }
                        })
                      : ((e.value = n), (e.state = 1), $(t, e, !1));
                  } catch (n) {
                    nt(t, {done: !1}, n, e);
                  }
                }
              };
            G &&
              ((F = function (t) {
                y(this, F, L), g(t), r.call(this);
                var e = R(this);
                try {
                  t(et(rt, this, e), et(nt, this, e));
                } catch (t) {
                  nt(this, e, t);
                }
              }),
              ((r = function (t) {
                B(this, {type: L, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0});
              }).prototype = d(F.prototype, {
                then: function (t, e) {
                  var n = D(this),
                    r = K(w(this, F));
                  return (
                    (r.ok = 'function' != typeof t || t),
                    (r.fail = 'function' == typeof e && e),
                    (r.domain = W ? z.domain : void 0),
                    (n.parent = !0),
                    n.reactions.push(r),
                    0 != n.state && $(this, n, !1),
                    r.promise
                  );
                },
                catch: function (t) {
                  return this.then(void 0, t);
                }
              })),
              (o = function () {
                var t = new r(),
                  e = R(t);
                (this.promise = t), (this.resolve = et(rt, t, e)), (this.reject = et(nt, t, e));
              }),
              (k.f = K =
                function (t) {
                  return t === F || t === i ? new o(t) : H(t);
                }),
              c ||
                'function' != typeof p ||
                ((a = p.prototype.then),
                f(
                  p.prototype,
                  'then',
                  function (t, e) {
                    var n = this;
                    return new F(function (t, e) {
                      a.call(n, t, e);
                    }).then(t, e);
                  },
                  {unsafe: !0}
                ),
                'function' == typeof V &&
                  s(
                    {global: !0, enumerable: !0, forced: !0},
                    {
                      fetch: function (t) {
                        return S(F, V.apply(u, arguments));
                      }
                    }
                  ))),
              s({global: !0, wrap: !0, forced: G}, {Promise: F}),
              h(F, L, !1, !0),
              _(L),
              (i = l(L)),
              s(
                {target: L, stat: !0, forced: G},
                {
                  reject: function (t) {
                    var e = K(this);
                    return e.reject.call(void 0, t), e.promise;
                  }
                }
              ),
              s(
                {target: L, stat: !0, forced: c || G},
                {
                  resolve: function (t) {
                    return S(c && this === i ? F : this, t);
                  }
                }
              ),
              s(
                {target: L, stat: !0, forced: Y},
                {
                  all: function (t) {
                    var e = this,
                      n = K(e),
                      r = n.resolve,
                      o = n.reject,
                      i = T(function () {
                        var n = g(e.resolve),
                          i = [],
                          a = 0,
                          s = 1;
                        b(t, function (t) {
                          var c = a++,
                            u = !1;
                          i.push(void 0),
                            s++,
                            n.call(e, t).then(function (t) {
                              u || ((u = !0), (i[c] = t), --s || r(i));
                            }, o);
                        }),
                          --s || r(i);
                      });
                    return i.error && o(i.value), n.promise;
                  },
                  race: function (t) {
                    var e = this,
                      n = K(e),
                      r = n.reject,
                      o = T(function () {
                        var o = g(e.resolve);
                        b(t, function (t) {
                          o.call(e, t).then(n.resolve, r);
                        });
                      });
                    return o.error && r(o.value), n.promise;
                  }
                }
              );
          },
          function (t, e, n) {
            var r = n(10);
            t.exports = function (t, e, n) {
              for (var o in e) r(t, o, e[o], n);
              return t;
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(9),
              o = n(11),
              i = n(1),
              a = n(6),
              s = i('species');
            t.exports = function (t) {
              var e = r(t),
                n = o.f;
              a &&
                e &&
                !e[s] &&
                n(e, s, {
                  configurable: !0,
                  get: function () {
                    return this;
                  }
                });
            };
          },
          function (t, e) {
            t.exports = function (t, e, n) {
              if (!(t instanceof e)) throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
              return t;
            };
          },
          function (t, e, n) {
            var r = n(1),
              o = n(16),
              i = r('iterator'),
              a = Array.prototype;
            t.exports = function (t) {
              return void 0 !== t && (o.Array === t || a[i] === t);
            };
          },
          function (t, e, n) {
            var r = n(42),
              o = n(16),
              i = n(1)('iterator');
            t.exports = function (t) {
              if (null != t) return t[i] || t['@@iterator'] || o[r(t)];
            };
          },
          function (t, e, n) {
            var r = n(2);
            t.exports = function (t, e, n, o) {
              try {
                return o ? e(r(n)[0], n[1]) : e(n);
              } catch (e) {
                var i = t.return;
                throw (void 0 !== i && r(i.call(t)), e);
              }
            };
          },
          function (t, e, n) {
            var r = n(1)('iterator'),
              o = !1;
            try {
              var i = 0,
                a = {
                  next: function () {
                    return {done: !!i++};
                  },
                  return: function () {
                    o = !0;
                  }
                };
              (a[r] = function () {
                return this;
              }),
                Array.from(a, function () {
                  throw 2;
                });
            } catch (t) {}
            t.exports = function (t, e) {
              if (!e && !o) return !1;
              var n = !1;
              try {
                var i = {};
                (i[r] = function () {
                  return {
                    next: function () {
                      return {done: (n = !0)};
                    }
                  };
                }),
                  t(i);
              } catch (t) {}
              return n;
            };
          },
          function (t, e, n) {
            var r,
              o,
              i,
              a,
              s,
              c,
              u,
              l,
              p = n(0),
              f = n(30).f,
              d = n(15),
              h = n(56).set,
              _ = n(37),
              v = p.MutationObserver || p.WebKitMutationObserver,
              g = p.process,
              y = p.Promise,
              m = 'process' == d(g),
              b = f(p, 'queueMicrotask'),
              x = b && b.value;
            x ||
              ((r = function () {
                var t, e;
                for (m && (t = g.domain) && t.exit(); o; ) {
                  (e = o.fn), (o = o.next);
                  try {
                    e();
                  } catch (t) {
                    throw (o ? a() : (i = void 0), t);
                  }
                }
                (i = void 0), t && t.enter();
              }),
              m
                ? (a = function () {
                    g.nextTick(r);
                  })
                : v && !/(iphone|ipod|ipad).*applewebkit/i.test(_)
                ? ((s = !0),
                  (c = document.createTextNode('')),
                  new v(r).observe(c, {characterData: !0}),
                  (a = function () {
                    c.data = s = !s;
                  }))
                : y && y.resolve
                ? ((u = y.resolve(void 0)),
                  (l = u.then),
                  (a = function () {
                    l.call(u, r);
                  }))
                : (a = function () {
                    h.call(p, r);
                  })),
              (t.exports =
                x ||
                function (t) {
                  var e = {fn: t, next: void 0};
                  i && (i.next = e), o || ((o = e), a()), (i = e);
                });
          },
          function (t, e, n) {
            var r = n(0);
            t.exports = function (t, e) {
              var n = r.console;
              n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
            };
          },
          function (t, e, n) {
            var r,
              o,
              i = n(0),
              a = n(37),
              s = i.process,
              c = s && s.versions,
              u = c && c.v8;
            u ? (o = (r = u.split('.'))[0] + r[1]) : a && (r = a.match(/Chrome\/(\d+)/)) && (o = r[1]), (t.exports = o && +o);
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(13),
              i = n(53),
              a = n(9),
              s = n(55),
              c = n(57),
              u = n(10);
            r(
              {target: 'Promise', proto: !0, real: !0},
              {
                finally: function (t) {
                  var e = s(this, a('Promise')),
                    n = 'function' == typeof t;
                  return this.then(
                    n
                      ? function (n) {
                          return c(e, t()).then(function () {
                            return n;
                          });
                        }
                      : t,
                    n
                      ? function (n) {
                          return c(e, t()).then(function () {
                            throw n;
                          });
                        }
                      : t
                  );
                }
              }
            ),
              o || 'function' != typeof i || i.prototype.finally || u(i.prototype, 'finally', a('Promise').prototype.finally);
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(6),
              i = n(32),
              a = n(52),
              s = n(34),
              c = n(11),
              u = n(19),
              l = n(22),
              p = n(3),
              f = n(2),
              d = n(14),
              h = d.set,
              _ = d.getterFor('AggregateError'),
              v = function (t, e) {
                var n = this;
                if (!(n instanceof v)) return new v(t, e);
                a && (n = a(new Error(e), i(n)));
                var r = [];
                return l(t, r.push, r), o ? h(n, {errors: r, type: 'AggregateError'}) : (n.errors = r), void 0 !== e && p(n, 'message', String(e)), n;
              };
            (v.prototype = s(Error.prototype, {
              constructor: u(5, v),
              message: u(5, ''),
              name: u(5, 'AggregateError'),
              toString: u(5, function () {
                var t = f(this).name;
                t = void 0 === t ? 'AggregateError' : String(t);
                var e = this.message;
                return t + ': ' + (void 0 === e ? '' : String(e));
              })
            })),
              o &&
                c.f(v.prototype, 'errors', {
                  get: function () {
                    return _(this).errors;
                  },
                  configurable: !0
                }),
              r({global: !0}, {AggregateError: v});
          },
          function (t, e, n) {
            n(58);
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(17),
              i = n(23);
            r(
              {target: 'Promise', stat: !0},
              {
                try: function (t) {
                  var e = o.f(this),
                    n = i(t);
                  return (n.error ? e.reject : e.resolve)(n.value), e.promise;
                }
              }
            );
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(12),
              i = n(9),
              a = n(17),
              s = n(23),
              c = n(22);
            r(
              {target: 'Promise', stat: !0},
              {
                any: function (t) {
                  var e = this,
                    n = a.f(e),
                    r = n.resolve,
                    u = n.reject,
                    l = s(function () {
                      var n = o(e.resolve),
                        a = [],
                        s = 0,
                        l = 1,
                        p = !1;
                      c(t, function (t) {
                        var o = s++,
                          c = !1;
                        a.push(void 0),
                          l++,
                          n.call(e, t).then(
                            function (t) {
                              c || p || ((p = !0), r(t));
                            },
                            function (t) {
                              c || p || ((c = !0), (a[o] = t), --l || u(new (i('AggregateError'))(a, 'No one promise resolved')));
                            }
                          );
                      }),
                        --l || u(new (i('AggregateError'))(a, 'No one promise resolved'));
                    });
                  return l.error && u(l.value), n.promise;
                }
              }
            );
          },
          function (t, e, n) {
            t.exports = n(104);
          },
          function (t, e, n) {
            n(105);
            var r = n(21);
            t.exports = r.Object.assign;
          },
          function (t, e, n) {
            var r = n(5),
              o = n(106);
            r({target: 'Object', stat: !0, forced: Object.assign !== o}, {assign: o});
          },
          function (t, e, n) {
            'use strict';
            var r = n(6),
              o = n(4),
              i = n(35),
              a = n(48),
              s = n(44),
              c = n(33),
              u = n(45),
              l = Object.assign;
            t.exports =
              !l ||
              o(function () {
                var t = {},
                  e = {},
                  n = Symbol();
                return (
                  (t[n] = 7),
                  'abcdefghijklmnopqrst'.split('').forEach(function (t) {
                    e[t] = t;
                  }),
                  7 != l({}, t)[n] || 'abcdefghijklmnopqrst' != i(l({}, e)).join('')
                );
              })
                ? function (t, e) {
                    for (var n = c(t), o = arguments.length, l = 1, p = a.f, f = s.f; o > l; )
                      for (var d, h = u(arguments[l++]), _ = p ? i(h).concat(p(h)) : i(h), v = _.length, g = 0; v > g; )
                        (d = _[g++]), (r && !f.call(h, d)) || (n[d] = h[d]);
                    return n;
                  }
                : l;
          },
          function (t, e, n) {
            t.exports = n(108);
          },
          function (t, e, n) {
            n(109);
            var r = n(21);
            t.exports = r.Object.keys;
          },
          function (t, e, n) {
            var r = n(5),
              o = n(33),
              i = n(35);
            r(
              {
                target: 'Object',
                stat: !0,
                forced: n(4)(function () {
                  i(1);
                })
              },
              {
                keys: function (t) {
                  return i(o(t));
                }
              }
            );
          },
          function (t, e, n) {
            'use strict';
            var r =
              (this && this.__spreadArrays) ||
              function () {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                var r = Array(t),
                  o = 0;
                for (e = 0; e < n; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                return r;
              };
            Object.defineProperty(e, '__esModule', {value: !0});
            var o,
              i = n(59);
            !(function (t) {
              (t.Show = 'show'), (t.Hide = 'hide');
            })(o || (o = {}));
            var a = i.getContribLogger({module: 'contrib-common', class: 'CuepointEngine'}),
              s = (function () {
                function t(t, e) {
                  (this.isFirstTime = !0),
                    (this.enabled = !0),
                    (this.lastHandledTime = null),
                    (this.lastHandledTimeIndex = null),
                    (this.nextTimeToHandle = null),
                    (this.cuepointChanges = []),
                    a.debug('executed', {method: 'ctor'}),
                    (this.reasonableSeekThreshold = Math.max(2e3, (e && e.reasonableSeekThreshold) || 0)),
                    (this._cuepoints = t),
                    this.prepareCuepoint();
                }
                return (
                  Object.defineProperty(t.prototype, 'cuepoints', {
                    get: function () {
                      return r(this._cuepoints);
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.getSnapshot = function (t) {
                    var e = this.findClosestLastIndexByTime(t);
                    return (
                      a.debug('create snapshot based on time ' + t, {method: 'getSnapshot', data: {timeIndex: e}}), this.createCuepointSnapshot(e)
                    );
                  }),
                  (t.prototype.updateTime = function (t, e, n) {
                    void 0 === e && (e = !1);
                    var r = this.isFirstTime,
                      o = this.lastHandledTime,
                      i = this.nextTimeToHandle;
                    if (0 === this.cuepointChanges.length)
                      return (
                        r && (a.info('cuepoint list empty. will always return empty snapshot', {method: 'updateTime'}), (this.isFirstTime = !1)),
                        {snapshot: []}
                      );
                    var s = !r && null !== o && null !== i && (o > t || t - i > this.reasonableSeekThreshold),
                      c =
                        r ||
                        (null !== this.lastHandledTime && this.lastHandledTime > t) ||
                        (null != this.nextTimeToHandle && t >= this.nextTimeToHandle),
                      u = this.findClosestLastIndexByTime(t),
                      l = u < 0 ? 0 : this.cuepointChanges[u].time;
                    if (!c) return e ? {snapshot: this.createCuepointSnapshot(u, n)} : {delta: this.createEmptyDelta()};
                    if (
                      (a.debug('has changes to handle. check if need to return snapshot instead of delta based on provided new time', {
                        method: 'updateTime',
                        data: {currentTime: t, closestChangeIndex: u, closestChangeTime: l, lastHandledTime: o, nextTimeToHandle: i, isFirstTime: r}
                      }),
                      r || e || s)
                    ) {
                      a.debug("some conditions doesn't allow returning delta, return snapshot instead", {
                        method: 'updateTime',
                        data: {isFirstTime: r, userSeeked: s, forceSnapshot: e}
                      });
                      var p = this.createCuepointSnapshot(u, n);
                      return this.updateInternals(l, u), {snapshot: p};
                    }
                    var f = this.createCuepointDelta(u, n);
                    return this.updateInternals(l, u), {delta: f};
                  }),
                  (t.prototype.getCurrentCuepointSnapshot = function () {
                    return this.lastHandledTimeIndex ? this.createCuepointSnapshot(this.lastHandledTimeIndex) : [];
                  }),
                  (t.prototype.createCuepointSnapshot = function (t, e) {
                    if (!this.enabled || t < 0 || !this.cuepointChanges || 0 === this.cuepointChanges.length)
                      return (
                        a.debug('resulted with empty snapshot', {
                          method: 'createCuepointSnapshot',
                          data: {targetIndex: t, enabled: this.enabled, cuepointCount: (this.cuepointChanges || []).length}
                        }),
                        []
                      );
                    for (var n = [], r = 0; r <= t; r++) {
                      var i = this.cuepointChanges[r],
                        s = n.indexOf(i.cuePoint);
                      i.type === o.Show ? -1 === s && n.push(i.cuePoint) : -1 !== s && n.splice(s, 1);
                    }
                    return a.debug('resulted snapshot', {method: 'createCuepointSnapshot', data: {snapshot: n}}), e && (n = n.filter(e)), n;
                  }),
                  (t.prototype.createCuepointDelta = function (t, e) {
                    if (!this.enabled || !this.cuepointChanges || 0 === this.cuepointChanges.length)
                      return (
                        a.debug('resulted with empty delta', {
                          method: 'createCuepointDelta',
                          data: {enabled: this.enabled, cuepointCount: (this.cuepointChanges || []).length}
                        }),
                        this.createEmptyDelta()
                      );
                    var n = this.lastHandledTimeIndex;
                    if (null === n)
                      return a.debug('invalid internal state. resulted with empty delta', {method: 'createCuepointDelta'}), this.createEmptyDelta();
                    var r = [],
                      i = [];
                    a.info('find cuepoint that were added or removed', {method: 'createCuepointDelta'});
                    for (var s = n + 1; s <= t; s++) {
                      var c = this.cuepointChanges[s],
                        u = r.indexOf(c.cuePoint);
                      c.type === o.Show
                        ? -1 === u && r.push(c.cuePoint)
                        : -1 !== u
                        ? (a.info(
                            'cuepoint was marked with type ' + c.type + ' at ' + c.time + ". remove from new cuepoint list as it wasn't visible yet",
                            {method: 'createCuepointDelta', data: {cuepoint: c.cuePoint}}
                          ),
                          r.splice(u, 1))
                        : -1 === i.indexOf(c.cuePoint) &&
                          (a.info('cuepoint was marked with type ' + c.type + ' at ' + c.time + '. add to removed cuepoint list', {
                            method: 'createCuepointDelta',
                            data: {cuepoint: c.cuePoint}
                          }),
                          i.push(c.cuePoint));
                    }
                    return (
                      a.debug('resulted delta', {method: 'createCuepointDelta', data: {newCuepoint: r, removedCuepoint: i}}),
                      e && ((r = r.filter(e)), (i = i.filter(e))),
                      {show: r, hide: i}
                    );
                  }),
                  (t.prototype.updateInternals = function (t, e) {
                    var n = this.cuepointChanges;
                    if (n && 0 !== n.length) {
                      var r = e >= n.length - 1,
                        o = null === e;
                      (this.lastHandledTime = t),
                        (this.lastHandledTimeIndex = e),
                        (this.nextTimeToHandle = o ? n[0].time : r ? n[n.length - 1].time : n[e + 1].time),
                        (this.isFirstTime = !1);
                    }
                  }),
                  (t.prototype.createEmptyDelta = function () {
                    return {show: [], hide: []};
                  }),
                  (t.prototype.binarySearch = function (t, e) {
                    if (!t || 0 === t.length) return null;
                    if (e < t[0].time) return -1;
                    if (e > t[t.length - 1].time) return t.length - 1;
                    for (var n = 0, r = t.length - 1; n <= r; ) {
                      var o = Math.floor((r + n + 1) / 2);
                      if (e < t[o].time) r = o - 1;
                      else {
                        if (!(e > t[o].time)) return o;
                        n = o + 1;
                      }
                    }
                    return Math.min(n, r);
                  }),
                  (t.prototype.findClosestLastIndexByTime = function (t) {
                    var e = this.cuepointChanges,
                      n = this.binarySearch(e, t);
                    if (null === n) return -1;
                    for (var r = e.length; n < r - 1 && e[n + 1].time === t; ) n++;
                    return n;
                  }),
                  (t.prototype.prepareCuepoint = function () {
                    var t = this;
                    (this._cuepoints || []).forEach(function (e) {
                      null !== e.startTime &&
                        void 0 !== e.startTime &&
                        e.startTime >= 0 &&
                        t.cuepointChanges.push({time: e.startTime, type: o.Show, cuePoint: e}),
                        null !== e.endTime &&
                          void 0 !== e.endTime &&
                          e.endTime >= 0 &&
                          t.cuepointChanges.push({time: e.endTime, type: o.Hide, cuePoint: e});
                    }),
                      this.cuepointChanges.sort(function (t, e) {
                        return t.time < e.time ? -1 : t.time === e.time ? 0 : 1;
                      }),
                      a.debug('tracking ' + this.cuepointChanges.length + ' changes', {
                        method: 'prepareCuepoint',
                        data: {changes: this.cuepointChanges}
                      });
                  }),
                  t
                );
              })();
            e.CuepointEngine = s;
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = (function () {
              function t() {
                this._cache = {};
              }
              return (
                (t.get = function (e) {
                  return (e.__contrib__ = e.__contrib__ || {}), (e.__contrib__.services = e.__contrib__.services || new t()), e.__contrib__.services;
                }),
                (t.prototype.get = function (t) {
                  var e = this._cache[t];
                  if (!e) throw new Error('cannot find resource with token ' + t);
                  return e;
                }),
                (t.prototype.register = function (t, e) {
                  var n = this._cache[t];
                  return n || (n = this._cache[t] = {instance: e()}), n.instance;
                }),
                t
              );
            })();
            e.PlayerContribRegistry = r;
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = n(60),
              o = (function () {
                function t() {}
                return (
                  (t.getAnonymousUserId = function (e) {
                    return 'undefined' == typeof Storage
                      ? t._generateAnonymousUserId(e)
                      : ((n = localStorage.getItem('anonymousUserId')) ||
                          ((n = t._generateAnonymousUserId(e)), localStorage.setItem('anonymousUserId', n)),
                        n);
                    var n;
                  }),
                  (t._generateAnonymousUserId = function (t) {
                    return '##' + t + 'HashSeparator' + r.UUID.numberedUuidV1() + '##';
                  }),
                  t
                );
              })();
            e.KalturaLiveServices = o;
          },
          function (t, e, n) {
            var r,
              o,
              i = n(114),
              a = n(61),
              s = 0,
              c = 0;
            t.exports = function (t, e, n) {
              var u = (e && n) || 0,
                l = e || [],
                p = (t = t || {}).node || r,
                f = void 0 !== t.clockseq ? t.clockseq : o;
              if (null == p || null == f) {
                var d = i();
                null == p && (p = r = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]), null == f && (f = o = 16383 & ((d[6] << 8) | d[7]));
              }
              var h = void 0 !== t.msecs ? t.msecs : new Date().getTime(),
                _ = void 0 !== t.nsecs ? t.nsecs : c + 1,
                v = h - s + (_ - c) / 1e4;
              if ((v < 0 && void 0 === t.clockseq && (f = (f + 1) & 16383), (v < 0 || h > s) && void 0 === t.nsecs && (_ = 0), _ >= 1e4))
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
              (s = h), (c = _), (o = f);
              var g = (1e4 * (268435455 & (h += 122192928e5)) + _) % 4294967296;
              (l[u++] = (g >>> 24) & 255), (l[u++] = (g >>> 16) & 255), (l[u++] = (g >>> 8) & 255), (l[u++] = 255 & g);
              var y = ((h / 4294967296) * 1e4) & 268435455;
              (l[u++] = (y >>> 8) & 255),
                (l[u++] = 255 & y),
                (l[u++] = ((y >>> 24) & 15) | 16),
                (l[u++] = (y >>> 16) & 255),
                (l[u++] = (f >>> 8) | 128),
                (l[u++] = 255 & f);
              for (var m = 0; m < 6; ++m) l[u + m] = p[m];
              return e || a(l);
            };
          },
          function (t, e) {
            var n =
              ('undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
              ('undefined' != typeof msCrypto && 'function' == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto));
            if (n) {
              var r = new Uint8Array(16);
              t.exports = function () {
                return n(r), r;
              };
            } else {
              var o = new Array(16);
              t.exports = function () {
                for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), (o[e] = (t >>> ((3 & e) << 3)) & 255);
                return o;
              };
            }
          },
          function (t, e, n) {
            var r = n(116),
              o = n(117);
            t.exports = r('v5', 80, o);
          },
          function (t, e, n) {
            var r = n(61);
            t.exports = function (t, e, n) {
              var o = function (t, o, i, a) {
                var s = (i && a) || 0;
                if (
                  ('string' == typeof t &&
                    (t = (function (t) {
                      t = unescape(encodeURIComponent(t));
                      for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
                      return e;
                    })(t)),
                  'string' == typeof o &&
                    (o = (function (t) {
                      var e = [];
                      return (
                        t.replace(/[a-fA-F0-9]{2}/g, function (t) {
                          e.push(parseInt(t, 16));
                        }),
                        e
                      );
                    })(o)),
                  !Array.isArray(t))
                )
                  throw TypeError('value must be an array of bytes');
                if (!Array.isArray(o) || 16 !== o.length) throw TypeError('namespace must be uuid string or an Array of 16 byte values');
                var c = n(o.concat(t));
                if (((c[6] = (15 & c[6]) | e), (c[8] = (63 & c[8]) | 128), i)) for (var u = 0; u < 16; ++u) i[s + u] = c[u];
                return i || r(c);
              };
              try {
                o.name = t;
              } catch (t) {}
              return (o.DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'), (o.URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8'), o;
            };
          },
          function (t, e, n) {
            'use strict';
            function r(t, e, n, r) {
              switch (t) {
                case 0:
                  return (e & n) ^ (~e & r);
                case 1:
                  return e ^ n ^ r;
                case 2:
                  return (e & n) ^ (e & r) ^ (n & r);
                case 3:
                  return e ^ n ^ r;
              }
            }
            function o(t, e) {
              return (t << e) | (t >>> (32 - e));
            }
            t.exports = function (t) {
              var e = [1518500249, 1859775393, 2400959708, 3395469782],
                n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
              if ('string' == typeof t) {
                var i = unescape(encodeURIComponent(t));
                t = new Array(i.length);
                for (var a = 0; a < i.length; a++) t[a] = i.charCodeAt(a);
              }
              t.push(128);
              var s = t.length / 4 + 2,
                c = Math.ceil(s / 16),
                u = new Array(c);
              for (a = 0; a < c; a++) {
                u[a] = new Array(16);
                for (var l = 0; l < 16; l++)
                  u[a][l] = (t[64 * a + 4 * l] << 24) | (t[64 * a + 4 * l + 1] << 16) | (t[64 * a + 4 * l + 2] << 8) | t[64 * a + 4 * l + 3];
              }
              for (
                u[c - 1][14] = (8 * (t.length - 1)) / Math.pow(2, 32),
                  u[c - 1][14] = Math.floor(u[c - 1][14]),
                  u[c - 1][15] = (8 * (t.length - 1)) & 4294967295,
                  a = 0;
                a < c;
                a++
              ) {
                for (var p = new Array(80), f = 0; f < 16; f++) p[f] = u[a][f];
                for (f = 16; f < 80; f++) p[f] = o(p[f - 3] ^ p[f - 8] ^ p[f - 14] ^ p[f - 16], 1);
                var d = n[0],
                  h = n[1],
                  _ = n[2],
                  v = n[3],
                  g = n[4];
                for (f = 0; f < 80; f++) {
                  var y = Math.floor(f / 20),
                    m = (o(d, 5) + r(y, h, _, v) + g + e[y] + p[f]) >>> 0;
                  (g = v), (v = _), (_ = o(h, 30) >>> 0), (h = d), (d = m);
                }
                (n[0] = (n[0] + d) >>> 0), (n[1] = (n[1] + h) >>> 0), (n[2] = (n[2] + _) >>> 0), (n[3] = (n[3] + v) >>> 0), (n[4] = (n[4] + g) >>> 0);
              }
              return [
                (n[0] >> 24) & 255,
                (n[0] >> 16) & 255,
                (n[0] >> 8) & 255,
                255 & n[0],
                (n[1] >> 24) & 255,
                (n[1] >> 16) & 255,
                (n[1] >> 8) & 255,
                255 & n[1],
                (n[2] >> 24) & 255,
                (n[2] >> 16) & 255,
                (n[2] >> 8) & 255,
                255 & n[2],
                (n[3] >> 24) & 255,
                (n[3] >> 16) & 255,
                (n[3] >> 8) & 255,
                255 & n[3],
                (n[4] >> 24) & 255,
                (n[4] >> 16) & 255,
                (n[4] >> 8) & 255,
                255 & n[4]
              ];
            };
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = (function () {
              function t() {
                (this._eventListeners = {}), (this._wildcardEventListeners = []);
              }
              return (
                (t.prototype.on = function (t, e) {
                  '*' !== t ? (this._eventListeners[t] || (this._eventListeners[t] = [])).push(e) : this._wildcardEventListeners.push(e);
                }),
                (t.prototype.off = function (t, e) {
                  if ('*' !== t) {
                    var n = this._eventListeners[t];
                    n && n.splice(n.indexOf(e) >>> 0, 1);
                  } else this._wildcardEventListeners.splice(this._wildcardEventListeners.indexOf(e) >>> 0, 1);
                }),
                (t.prototype.emit = function (t) {
                  (this._eventListeners[t.type] || []).slice().map(function (e) {
                    e(t);
                  }),
                    this._wildcardEventListeners.slice().map(function (e) {
                      e(t);
                    });
                }),
                t
              );
            })();
            e.EventsManager = r;
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0}),
              (e.debounce = function (t, e, n) {
                var r;
                return (
                  void 0 === e && (e = 50),
                  void 0 === n && (n = {isImmediate: !1}),
                  function () {
                    for (var o = this, i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
                    var s = function () {
                        (r = void 0), n.isImmediate || t.apply(o, i);
                      },
                      c = n.isImmediate && void 0 === r;
                    void 0 !== r && clearTimeout(r), (r = setTimeout(s, e)), c && t.apply(this, i);
                  }
                );
              });
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = n(62),
              o = (function () {
                function t() {}
                return (
                  (t.getPlayerConfig = function (t, e, n, o) {
                    var i = r.ObjectUtils.get(t.config, e, {});
                    return r.ObjectUtils.mergeDefaults(i, n, o);
                  }),
                  t
                );
              })();
            e.KalturaPlayerUtils = o;
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = (function () {
              function t() {}
              return (
                (t.findIndex = function (t, e) {
                  for (var n = 0; n < t.length; ) {
                    if (e(t[n])) return n;
                    n++;
                  }
                  return -1;
                }),
                t
              );
            })();
            e.ArrayUtils = r;
          }
        ]));
    },
    function (t, e, n) {
      'use strict';
      t.exports = function (t, e) {
        return 'string' != typeof t
          ? t
          : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
            /["'() \t\n]/.test(t) || e ? '"' + t.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"' : t);
      };
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}), n(6);
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0});
      var r = n(0),
        o = n(7),
        i = n(11),
        a = n(3),
        s = n(13),
        c = n(23),
        u = a.getContribLogger({class: 'PlaykitJsInfoPlugin', module: 'info-plugin'}),
        l = a.ObjectUtils.get,
        p = (function () {
          function t(t, e, n) {
            var o = this;
            (this._corePlugin = t),
              (this._contribServices = e),
              (this._configs = n),
              (this._upperBarItem = null),
              (this._infoOverlay = null),
              (this._getBroadcastedDate = function () {
                if (o._corePlugin.player.isLive()) return 'Live Now';
                var t = l(o, '_corePlugin.player._config.sources.metadata.StartTime', null);
                return null === t ? '' : i.timeSince(new Date(1e3 * Number(t)));
              }),
              (this._toggleInfo = function () {
                if (o._infoOverlay) return o._contribServices.overlayManager.remove(o._infoOverlay), void (o._infoOverlay = null);
                o._infoOverlay = o._contribServices.overlayManager.add({
                  label: 'info-overlay',
                  position: i.OverlayPositions.PlayerArea,
                  renderContent: function () {
                    return r.h(s.Info, {
                      onClick: o._toggleInfo,
                      entryName: l(o, '_corePlugin.player._config.sources.metadata.name', ''),
                      description: l(o, '_corePlugin.player._config.sources.metadata.description', ''),
                      broadcastedDate: o._getBroadcastedDate()
                    });
                  }
                });
              });
          }
          return (
            (t.prototype.onMediaLoad = function () {
              u.trace('Info plugin loaded', {method: 'onMediaLoad'}), this._addPluginIcon();
            }),
            (t.prototype.onMediaUnload = function () {
              this._upperBarItem && (this._contribServices.upperBarManager.remove(this._upperBarItem), (this._upperBarItem = null)),
                this._infoOverlay && this._toggleInfo();
            }),
            (t.prototype._addPluginIcon = function () {
              this._upperBarItem = this._contribServices.upperBarManager.add({
                label: 'Info',
                onClick: this._toggleInfo,
                renderItem: function () {
                  return r.h(c.PluginButton, null);
                }
              });
            }),
            t
          );
        })();
      (e.PlaykitJsInfoPlugin = p),
        o.ContribPluginManager.registerPlugin(
          'playkit-js-info',
          function (t) {
            return new p(t.corePlugin, t.contribServices, t.configs);
          },
          {defaultConfig: {}}
        );
    },
    function (t, e, n) {
      var r, o;
      window,
        (t.exports =
          ((r = n(8)),
          (o = n(9)),
          (function (t) {
            var e = {};
            function n(r) {
              if (e[r]) return e[r].exports;
              var o = (e[r] = {i: r, l: !1, exports: {}});
              return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
            }
            return (
              (n.m = t),
              (n.c = e),
              (n.d = function (t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r});
              }),
              (n.r = function (t) {
                'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
                  Object.defineProperty(t, '__esModule', {value: !0});
              }),
              (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
                var r = Object.create(null);
                if ((n.r(r), Object.defineProperty(r, 'default', {enumerable: !0, value: t}), 2 & e && 'string' != typeof t))
                  for (var o in t)
                    n.d(
                      r,
                      o,
                      function (e) {
                        return t[e];
                      }.bind(null, o)
                    );
                return r;
              }),
              (n.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return n.d(e, 'a', e), e;
              }),
              (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (n.p = ''),
              n((n.s = 6))
            );
          })([
            function (t, e) {
              t.exports = r;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (e.hasOnRegisterPresetsComponents = function (t) {
                  return 'onRegisterPresetsComponents' in t;
                }),
                (e.hasOnPluginSetup = function (t) {
                  return 'onPluginSetup' in t;
                }),
                (e.hasOnPluginDestroy = function (t) {
                  return 'OnPluginDestroy' in t;
                }),
                (e.hasOnMediaLoad = function (t) {
                  return 'onMediaLoad' in t;
                }),
                (e.hasOnMediaUnload = function (t) {
                  return 'onMediaUnload' in t;
                });
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = (function (t) {
                  function e() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var r = t.apply(this, e) || this;
                    return (r._wasSetupExecuted = !1), (r._wasSetupFailed = !1), r;
                  }
                  return (
                    o(e, t),
                    (e.isValid = function (t) {
                      return !0;
                    }),
                    (e.prototype.setContribContext = function (t) {
                      (this._contribPlugin = t.contribPlugin), (this._contribServices = t.contribServices);
                    }),
                    (e.prototype.getUIComponents = function () {
                      if (i.hasOnRegisterPresetsComponents(this._contribPlugin))
                        try {
                          this._contribPlugin.onRegisterPresetsComponents(this._contribServices.presetManager);
                        } catch (t) {
                          console.error('failed to register contrib presets components', {error: t.message});
                        }
                      return this._contribServices.presetManager.registerComponents();
                    }),
                    (e.prototype.loadMedia = function () {
                      var t = this;
                      this.eventManager.listenOnce(this.player, this.player.Event.MEDIA_LOADED, function () {
                        if (!t._wasSetupExecuted) {
                          if (i.hasOnPluginSetup(t._contribPlugin))
                            try {
                              t._contribPlugin.onPluginSetup();
                            } catch (e) {
                              (t._wasSetupFailed = !0), console.error('failed to execute plugin setup, suspend plugin', {error: e.message});
                            }
                          t._wasSetupExecuted = !0;
                        }
                        if (!t._wasSetupFailed && i.hasOnMediaLoad(t._contribPlugin))
                          try {
                            t._contribPlugin.onMediaLoad();
                          } catch (t) {
                            console.error('failure during media load ', {error: t.message});
                          }
                      });
                    }),
                    (e.prototype.destroy = function () {
                      if ((this.reset(), this.eventManager.destroy(), i.hasOnPluginDestroy(this._contribPlugin)))
                        try {
                          this._contribPlugin.onPluginDestroy();
                        } catch (t) {
                          console.error('failure during plugin destroy', {error: t.message});
                        }
                    }),
                    (e.prototype.reset = function () {
                      if (i.hasOnMediaUnload(this._contribPlugin))
                        try {
                          this._contribPlugin.onMediaUnload();
                        } catch (t) {
                          console.error('failure during media unload', {error: t.message});
                        }
                    }),
                    (e.defaultConfig = {}),
                    e
                  );
                })(KalturaPlayer.core.BasePlugin);
              e.CorePlugin = a;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = (function () {
                function t() {}
                return (t.factories = {}), t;
              })();
              e.ContribPluginFactories = r;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(0),
                o = n(9);
              n(0).enableLogIfNeeded();
              var i = (function () {
                function t(t, e) {
                  (this._playerContribRegistry = t), (this._options = e), this._initialize(), this._addListeners();
                }
                return (
                  (t.get = function (e) {
                    var n,
                      o = ((n = e.kalturaPlayer), r.PlayerContribRegistry.get(n));
                    return o.register('ContribServices', function () {
                      return new t(o, e);
                    });
                  }),
                  (t.prototype._addListeners = function () {
                    console.log('>> add listeners');
                    var t = this._options.kalturaPlayer;
                    t.addEventListener(t.Event.PLAYER_RESET, this.reset), t.addEventListener(t.Event.PLAYER_DESTROY, this._removeListeners);
                  }),
                  (t.prototype._removeListeners = function () {
                    console.log('>> remove listeners');
                    var t = this._options.kalturaPlayer;
                    t.removeEventListener(t.Event.PLAYER_RESET, this.reset), t.removeEventListener(t.Event.PLAYER_DESTROY, this._removeListeners);
                  }),
                  (t.prototype._initialize = function () {
                    var t = this._options.kalturaPlayer,
                      e = new o.PresetManager({kalturaPlayer: t}),
                      n = new o.FontManager({kalturaPlayer: t}),
                      r = new o.UpperBarManager({kalturaPlayer: t, presetManager: e}),
                      i = new o.FloatingManager({kalturaPlayer: t, presetManager: e}),
                      a = new o.OverlayManager({presetManager: e, kalturaPlayer: t}),
                      s = new o.BannerManager({kalturaPlayer: t, floatingManager: i}),
                      c = new o.ToastManager({floatingManager: i}),
                      u = new o.KitchenSinkManager({kalturaPlayer: t, presetManager: e, upperBarManager: r});
                    n.loadFont(),
                      (this._toastManager = c),
                      (this._overlayManager = a),
                      (this._bannerManager = s),
                      (this._floatingManager = i),
                      (this._kitchenSinkManager = u),
                      (this._upperBarManager = r),
                      (this._presetManager = e),
                      (this._fontManager = n);
                  }),
                  Object.defineProperty(t.prototype, 'presetManager', {
                    get: function () {
                      return this._presetManager;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, 'upperBarManager', {
                    get: function () {
                      return this._upperBarManager;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, 'kitchenSinkManager', {
                    get: function () {
                      return this._kitchenSinkManager;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, 'floatingManager', {
                    get: function () {
                      return this._floatingManager;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, 'overlayManager', {
                    get: function () {
                      return this._overlayManager;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, 'bannerManager', {
                    get: function () {
                      return this._bannerManager;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, 'toastManager', {
                    get: function () {
                      return this._toastManager;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, 'fontManager', {
                    get: function () {
                      return this._fontManager;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.reset = function () {
                    console.log('>> reset'),
                      this._toastManager.reset(),
                      this._overlayManager.reset(),
                      this._bannerManager.reset(),
                      this._floatingManager.reset(),
                      this._kitchenSinkManager.reset(),
                      this._upperBarManager.reset();
                  }),
                  (t.prototype.getPlayerKS = function () {
                    var t = this._options.kalturaPlayer.config.session;
                    return t && t.ks ? t.ks : null;
                  }),
                  t
                );
              })();
              e.ContribServices = i;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = (function () {
                function t(t, e) {
                  (this._player = t), (this._corePlugin = e);
                }
                return (
                  Object.defineProperty(t.prototype, 'playerConfig', {
                    get: function () {
                      return this._player.config;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, 'pluginConfig', {
                    get: function () {
                      return this._corePlugin.config;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  t
                );
              })();
              e.ContribPluginConfigs = r;
            },
            function (t, e, n) {
              'use strict';
              function r(t) {
                for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
              }
              Object.defineProperty(e, '__esModule', {value: !0}), r(n(1)), r(n(2)), r(n(7)), r(n(4)), r(n(5));
            },
            function (t, e, n) {
              'use strict';
              var r =
                (this && this.__spreadArrays) ||
                function () {
                  for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                  var r = Array(t),
                    o = 0;
                  for (e = 0; e < n; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                  return r;
                };
              Object.defineProperty(e, '__esModule', {value: !0});
              var o = n(3),
                i = n(8),
                a = n(2);
              function s() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new (a.CorePlugin.bind.apply(a.CorePlugin, r([void 0], t)))();
              }
              var c = (function () {
                function t() {}
                return (
                  (t.registerPlugin = function (t, e, n) {
                    (o.ContribPluginFactories.factories[t] = {
                      contribPluginFactory: e,
                      corePluginFactory: (n ? n.corePluginFactory : null) || s,
                      defaultConfig: (n ? n.defaultConfig : null) || {}
                    }),
                      KalturaPlayer.core.registerPlugin(t, i.CorePluginProxy);
                  }),
                  t
                );
              })();
              e.ContribPluginManager = c;
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(3),
                a = n(4),
                s = n(0),
                c = n(5),
                u = s.getContribLogger({module: 'contrib-plugin', class: 'core-plugin-proxy'}),
                l = (function (t) {
                  function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                  }
                  return (
                    o(e, t),
                    (e.isValid = function (t) {
                      return !0;
                    }),
                    (e.createPlugin = function (t, e, n) {
                      var r = i.ContribPluginFactories.factories[t];
                      if (!r)
                        throw (
                          (u.error('cannot find requested contrib plugin', {data: {pluginName: t}}),
                          new Error("cannot find contrib plugin factory named '" + t))
                        );
                      try {
                        var o = KalturaPlayer.core.utils.Object.mergeDeep({}, r.defaultConfig || {}, n),
                          s = a.ContribServices.get({kalturaPlayer: e}),
                          l = r.corePluginFactory(t, e, o),
                          p = r.contribPluginFactory({corePlugin: l, contribServices: s, configs: new c.ContribPluginConfigs(e, l), player: e});
                        return (
                          l.setContribContext({contribPlugin: p, contribServices: s}), u.info('created contrib plugin', {data: {pluginName: t}}), l
                        );
                      } catch (e) {
                        throw (u.error('failed to create contrib plugin', {data: {pluginName: t, error: e}}), e);
                      }
                    }),
                    (e.prototype.setPluginContext = function (t) {
                      this._contribPlugin = t;
                    }),
                    e
                  );
                })(KalturaPlayer.core.BasePlugin);
              e.CorePluginProxy = l;
            },
            function (t, e) {
              t.exports = o;
            }
          ])));
    },
    function (t, e, n) {
      window,
        (t.exports = (function (t) {
          var e = {};
          function n(r) {
            if (e[r]) return e[r].exports;
            var o = (e[r] = {i: r, l: !1, exports: {}});
            return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, r) {
              n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r});
            }),
            (n.r = function (t) {
              'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
                Object.defineProperty(t, '__esModule', {value: !0});
            }),
            (n.t = function (t, e) {
              if ((1 & e && (t = n(t)), 8 & e)) return t;
              if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
              var r = Object.create(null);
              if ((n.r(r), Object.defineProperty(r, 'default', {enumerable: !0, value: t}), 2 & e && 'string' != typeof t))
                for (var o in t)
                  n.d(
                    r,
                    o,
                    function (e) {
                      return t[e];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return n.d(e, 'a', e), e;
            }),
            (n.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ''),
            n((n.s = 63))
          );
        })([
          function (t, e, n) {
            (function (e) {
              var n = function (t) {
                return t && t.Math == Math && t;
              };
              t.exports =
                n('object' == typeof globalThis && globalThis) ||
                n('object' == typeof window && window) ||
                n('object' == typeof self && self) ||
                n('object' == typeof e && e) ||
                Function('return this')();
            }.call(this, n(67)));
          },
          function (t, e, n) {
            var r = n(0),
              o = n(18),
              i = n(41),
              a = n(71),
              s = r.Symbol,
              c = o('wks');
            t.exports = function (t) {
              return c[t] || (c[t] = (a && s[t]) || (a ? s : i)('Symbol.' + t));
            };
          },
          function (t, e, n) {
            var r = n(8);
            t.exports = function (t) {
              if (!r(t)) throw TypeError(String(t) + ' is not an object');
              return t;
            };
          },
          function (t, e, n) {
            var r = n(6),
              o = n(11),
              i = n(19);
            t.exports = r
              ? function (t, e, n) {
                  return o.f(t, e, i(1, n));
                }
              : function (t, e, n) {
                  return (t[e] = n), t;
                };
          },
          function (t, e) {
            t.exports = function (t) {
              try {
                return !!t();
              } catch (t) {
                return !0;
              }
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(30).f,
              i = n(3),
              a = n(10),
              s = n(24),
              c = n(74),
              u = n(49);
            t.exports = function (t, e) {
              var n,
                l,
                p,
                f,
                d,
                h = t.target,
                _ = t.global,
                v = t.stat;
              if ((n = _ ? r : v ? r[h] || s(h, {}) : (r[h] || {}).prototype))
                for (l in e) {
                  if (
                    ((f = e[l]), (p = t.noTargetGet ? (d = o(n, l)) && d.value : n[l]), !u(_ ? l : h + (v ? '.' : '#') + l, t.forced) && void 0 !== p)
                  ) {
                    if (typeof f == typeof p) continue;
                    c(f, p);
                  }
                  (t.sham || (p && p.sham)) && i(f, 'sham', !0), a(n, l, f, t);
                }
            };
          },
          function (t, e, n) {
            var r = n(4);
            t.exports = !r(function () {
              return (
                7 !=
                Object.defineProperty({}, 'a', {
                  get: function () {
                    return 7;
                  }
                }).a
              );
            });
          },
          function (t, e) {
            var n = {}.hasOwnProperty;
            t.exports = function (t, e) {
              return n.call(t, e);
            };
          },
          function (t, e) {
            t.exports = function (t) {
              return 'object' == typeof t ? null !== t : 'function' == typeof t;
            };
          },
          function (t, e, n) {
            var r = n(21),
              o = n(0),
              i = function (t) {
                return 'function' == typeof t ? t : void 0;
              };
            t.exports = function (t, e) {
              return arguments.length < 2 ? i(r[t]) || i(o[t]) : (r[t] && r[t][e]) || (o[t] && o[t][e]);
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(18),
              i = n(3),
              a = n(7),
              s = n(24),
              c = n(40),
              u = n(14),
              l = u.get,
              p = u.enforce,
              f = String(c).split('toString');
            o('inspectSource', function (t) {
              return c.call(t);
            }),
              (t.exports = function (t, e, n, o) {
                var c = !!o && !!o.unsafe,
                  u = !!o && !!o.enumerable,
                  l = !!o && !!o.noTargetGet;
                'function' == typeof n &&
                  ('string' != typeof e || a(n, 'name') || i(n, 'name', e), (p(n).source = f.join('string' == typeof e ? e : ''))),
                  t !== r ? (c ? !l && t[e] && (u = !0) : delete t[e], u ? (t[e] = n) : i(t, e, n)) : u ? (t[e] = n) : s(e, n);
              })(Function.prototype, 'toString', function () {
                return ('function' == typeof this && l(this).source) || c.call(this);
              });
          },
          function (t, e, n) {
            var r = n(6),
              o = n(38),
              i = n(2),
              a = n(39),
              s = Object.defineProperty;
            e.f = r
              ? s
              : function (t, e, n) {
                  if ((i(t), (e = a(e, !0)), i(n), o))
                    try {
                      return s(t, e, n);
                    } catch (t) {}
                  if ('get' in n || 'set' in n) throw TypeError('Accessors not supported');
                  return 'value' in n && (t[e] = n.value), t;
                };
          },
          function (t, e) {
            t.exports = function (t) {
              if ('function' != typeof t) throw TypeError(String(t) + ' is not a function');
              return t;
            };
          },
          function (t, e) {
            t.exports = !1;
          },
          function (t, e, n) {
            var r,
              o,
              i,
              a = n(69),
              s = n(0),
              c = n(8),
              u = n(3),
              l = n(7),
              p = n(26),
              f = n(27),
              d = s.WeakMap;
            if (a) {
              var h = new d(),
                _ = h.get,
                v = h.has,
                g = h.set;
              (r = function (t, e) {
                return g.call(h, t, e), e;
              }),
                (o = function (t) {
                  return _.call(h, t) || {};
                }),
                (i = function (t) {
                  return v.call(h, t);
                });
            } else {
              var y = p('state');
              (f[y] = !0),
                (r = function (t, e) {
                  return u(t, y, e), e;
                }),
                (o = function (t) {
                  return l(t, y) ? t[y] : {};
                }),
                (i = function (t) {
                  return l(t, y);
                });
            }
            t.exports = {
              set: r,
              get: o,
              has: i,
              enforce: function (t) {
                return i(t) ? o(t) : r(t, {});
              },
              getterFor: function (t) {
                return function (e) {
                  var n;
                  if (!c(e) || (n = o(e)).type !== t) throw TypeError('Incompatible receiver, ' + t + ' required');
                  return n;
                };
              }
            };
          },
          function (t, e) {
            var n = {}.toString;
            t.exports = function (t) {
              return n.call(t).slice(8, -1);
            };
          },
          function (t, e) {
            t.exports = {};
          },
          function (t, e, n) {
            'use strict';
            var r = n(12),
              o = function (t) {
                var e, n;
                (this.promise = new t(function (t, r) {
                  if (void 0 !== e || void 0 !== n) throw TypeError('Bad Promise constructor');
                  (e = t), (n = r);
                })),
                  (this.resolve = r(e)),
                  (this.reject = r(n));
              };
            t.exports.f = function (t) {
              return new o(t);
            };
          },
          function (t, e, n) {
            var r = n(13),
              o = n(68);
            (t.exports = function (t, e) {
              return o[t] || (o[t] = void 0 !== e ? e : {});
            })('versions', []).push({version: '3.3.5', mode: r ? 'pure' : 'global', copyright: '© 2019 Denis Pushkarev (zloirock.ru)'});
          },
          function (t, e) {
            t.exports = function (t, e) {
              return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e};
            };
          },
          function (t, e, n) {
            var r = n(45),
              o = n(29);
            t.exports = function (t) {
              return r(o(t));
            };
          },
          function (t, e, n) {
            t.exports = n(0);
          },
          function (t, e, n) {
            var r = n(2),
              o = n(91),
              i = n(47),
              a = n(54),
              s = n(92),
              c = n(93),
              u = function (t, e) {
                (this.stopped = t), (this.result = e);
              };
            (t.exports = function (t, e, n, l, p) {
              var f,
                d,
                h,
                _,
                v,
                g,
                y,
                m = a(e, n, l ? 2 : 1);
              if (p) f = t;
              else {
                if ('function' != typeof (d = s(t))) throw TypeError('Target is not iterable');
                if (o(d)) {
                  for (h = 0, _ = i(t.length); _ > h; h++) if ((v = l ? m(r((y = t[h]))[0], y[1]) : m(t[h])) && v instanceof u) return v;
                  return new u(!1);
                }
                f = d.call(t);
              }
              for (g = f.next; !(y = g.call(f)).done; ) if ('object' == typeof (v = c(f, m, y.value, l)) && v && v instanceof u) return v;
              return new u(!1);
            }).stop = function (t) {
              return new u(!0, t);
            };
          },
          function (t, e) {
            t.exports = function (t) {
              try {
                return {error: !1, value: t()};
              } catch (t) {
                return {error: !0, value: t};
              }
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(3);
            t.exports = function (t, e) {
              try {
                o(r, t, e);
              } catch (n) {
                r[t] = e;
              }
              return e;
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(8),
              i = r.document,
              a = o(i) && o(i.createElement);
            t.exports = function (t) {
              return a ? i.createElement(t) : {};
            };
          },
          function (t, e, n) {
            var r = n(18),
              o = n(41),
              i = r('keys');
            t.exports = function (t) {
              return i[t] || (i[t] = o(t));
            };
          },
          function (t, e) {
            t.exports = {};
          },
          function (t, e) {
            var n = Math.ceil,
              r = Math.floor;
            t.exports = function (t) {
              return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
            };
          },
          function (t, e) {
            t.exports = function (t) {
              if (null == t) throw TypeError("Can't call method on " + t);
              return t;
            };
          },
          function (t, e, n) {
            var r = n(6),
              o = n(44),
              i = n(19),
              a = n(20),
              s = n(39),
              c = n(7),
              u = n(38),
              l = Object.getOwnPropertyDescriptor;
            e.f = r
              ? l
              : function (t, e) {
                  if (((t = a(t)), (e = s(e, !0)), u))
                    try {
                      return l(t, e);
                    } catch (t) {}
                  if (c(t, e)) return i(!o.f.call(t, e), t[e]);
                };
          },
          function (t, e) {
            t.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
          },
          function (t, e, n) {
            var r = n(7),
              o = n(33),
              i = n(26),
              a = n(80),
              s = i('IE_PROTO'),
              c = Object.prototype;
            t.exports = a
              ? Object.getPrototypeOf
              : function (t) {
                  return (
                    (t = o(t)),
                    r(t, s)
                      ? t[s]
                      : 'function' == typeof t.constructor && t instanceof t.constructor
                      ? t.constructor.prototype
                      : t instanceof Object
                      ? c
                      : null
                  );
                };
          },
          function (t, e, n) {
            var r = n(29);
            t.exports = function (t) {
              return Object(r(t));
            };
          },
          function (t, e, n) {
            var r = n(2),
              o = n(81),
              i = n(31),
              a = n(27),
              s = n(51),
              c = n(25),
              u = n(26)('IE_PROTO'),
              l = function () {},
              p = function () {
                var t,
                  e = c('iframe'),
                  n = i.length;
                for (
                  e.style.display = 'none',
                    s.appendChild(e),
                    e.src = String('javascript:'),
                    (t = e.contentWindow.document).open(),
                    t.write('<script>document.F=Object</script>'),
                    t.close(),
                    p = t.F;
                  n--;

                )
                  delete p.prototype[i[n]];
                return p();
              };
            (t.exports =
              Object.create ||
              function (t, e) {
                var n;
                return null !== t ? ((l.prototype = r(t)), (n = new l()), (l.prototype = null), (n[u] = t)) : (n = p()), void 0 === e ? n : o(n, e);
              }),
              (a[u] = !0);
          },
          function (t, e, n) {
            var r = n(46),
              o = n(31);
            t.exports =
              Object.keys ||
              function (t) {
                return r(t, o);
              };
          },
          function (t, e, n) {
            var r = n(11).f,
              o = n(7),
              i = n(1)('toStringTag');
            t.exports = function (t, e, n) {
              t && !o((t = n ? t : t.prototype), i) && r(t, i, {configurable: !0, value: e});
            };
          },
          function (t, e, n) {
            var r = n(9);
            t.exports = r('navigator', 'userAgent') || '';
          },
          function (t, e, n) {
            var r = n(6),
              o = n(4),
              i = n(25);
            t.exports =
              !r &&
              !o(function () {
                return (
                  7 !=
                  Object.defineProperty(i('div'), 'a', {
                    get: function () {
                      return 7;
                    }
                  }).a
                );
              });
          },
          function (t, e, n) {
            var r = n(8);
            t.exports = function (t, e) {
              if (!r(t)) return t;
              var n, o;
              if (e && 'function' == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
              if ('function' == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o;
              if (!e && 'function' == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
              throw TypeError("Can't convert object to primitive value");
            };
          },
          function (t, e, n) {
            var r = n(18);
            t.exports = r('native-function-to-string', Function.toString);
          },
          function (t, e) {
            var n = 0,
              r = Math.random();
            t.exports = function (t) {
              return 'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++n + r).toString(36);
            };
          },
          function (t, e, n) {
            var r = n(15),
              o = n(1)('toStringTag'),
              i =
                'Arguments' ==
                r(
                  (function () {
                    return arguments;
                  })()
                );
            t.exports = function (t) {
              var e, n, a;
              return void 0 === t
                ? 'Undefined'
                : null === t
                ? 'Null'
                : 'string' ==
                  typeof (n = (function (t, e) {
                    try {
                      return t[e];
                    } catch (t) {}
                  })((e = Object(t)), o))
                ? n
                : i
                ? r(e)
                : 'Object' == (a = r(e)) && 'function' == typeof e.callee
                ? 'Arguments'
                : a;
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(79),
              i = n(32),
              a = n(52),
              s = n(36),
              c = n(3),
              u = n(10),
              l = n(1),
              p = n(13),
              f = n(16),
              d = n(50),
              h = d.IteratorPrototype,
              _ = d.BUGGY_SAFARI_ITERATORS,
              v = l('iterator'),
              g = function () {
                return this;
              };
            t.exports = function (t, e, n, l, d, y, m) {
              o(n, e, l);
              var b,
                x,
                w,
                C = function (t) {
                  if (t === d && T) return T;
                  if (!_ && t in O) return O[t];
                  switch (t) {
                    case 'keys':
                    case 'values':
                    case 'entries':
                      return function () {
                        return new n(this, t);
                      };
                  }
                  return function () {
                    return new n(this);
                  };
                },
                P = e + ' Iterator',
                S = !1,
                O = t.prototype,
                k = O[v] || O['@@iterator'] || (d && O[d]),
                T = (!_ && k) || C(d),
                j = ('Array' == e && O.entries) || k;
              if (
                (j &&
                  ((b = i(j.call(new t()))),
                  h !== Object.prototype &&
                    b.next &&
                    (p || i(b) === h || (a ? a(b, h) : 'function' != typeof b[v] && c(b, v, g)), s(b, P, !0, !0), p && (f[P] = g))),
                'values' == d &&
                  k &&
                  'values' !== k.name &&
                  ((S = !0),
                  (T = function () {
                    return k.call(this);
                  })),
                (p && !m) || O[v] === T || c(O, v, T),
                (f[e] = T),
                d)
              )
                if (((x = {values: C('values'), keys: y ? T : C('keys'), entries: C('entries')}), m))
                  for (w in x) (!_ && !S && w in O) || u(O, w, x[w]);
                else r({target: e, proto: !0, forced: _ || S}, x);
              return x;
            };
          },
          function (t, e, n) {
            'use strict';
            var r = {}.propertyIsEnumerable,
              o = Object.getOwnPropertyDescriptor,
              i = o && !r.call({1: 2}, 1);
            e.f = i
              ? function (t) {
                  var e = o(this, t);
                  return !!e && e.enumerable;
                }
              : r;
          },
          function (t, e, n) {
            var r = n(4),
              o = n(15),
              i = ''.split;
            t.exports = r(function () {
              return !Object('z').propertyIsEnumerable(0);
            })
              ? function (t) {
                  return 'String' == o(t) ? i.call(t, '') : Object(t);
                }
              : Object;
          },
          function (t, e, n) {
            var r = n(7),
              o = n(20),
              i = n(77).indexOf,
              a = n(27);
            t.exports = function (t, e) {
              var n,
                s = o(t),
                c = 0,
                u = [];
              for (n in s) !r(a, n) && r(s, n) && u.push(n);
              for (; e.length > c; ) r(s, (n = e[c++])) && (~i(u, n) || u.push(n));
              return u;
            };
          },
          function (t, e, n) {
            var r = n(28),
              o = Math.min;
            t.exports = function (t) {
              return t > 0 ? o(r(t), 9007199254740991) : 0;
            };
          },
          function (t, e) {
            e.f = Object.getOwnPropertySymbols;
          },
          function (t, e, n) {
            var r = n(4),
              o = /#|\.prototype\./,
              i = function (t, e) {
                var n = s[a(t)];
                return n == u || (n != c && ('function' == typeof e ? r(e) : !!e));
              },
              a = (i.normalize = function (t) {
                return String(t).replace(o, '.').toLowerCase();
              }),
              s = (i.data = {}),
              c = (i.NATIVE = 'N'),
              u = (i.POLYFILL = 'P');
            t.exports = i;
          },
          function (t, e, n) {
            'use strict';
            var r,
              o,
              i,
              a = n(32),
              s = n(3),
              c = n(7),
              u = n(1),
              l = n(13),
              p = u('iterator'),
              f = !1;
            [].keys && ('next' in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (r = o) : (f = !0)),
              null == r && (r = {}),
              l ||
                c(r, p) ||
                s(r, p, function () {
                  return this;
                }),
              (t.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: f});
          },
          function (t, e, n) {
            var r = n(9);
            t.exports = r('document', 'documentElement');
          },
          function (t, e, n) {
            var r = n(2),
              o = n(82);
            t.exports =
              Object.setPrototypeOf ||
              ('__proto__' in {}
                ? (function () {
                    var t,
                      e = !1,
                      n = {};
                    try {
                      (t = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set).call(n, []), (e = n instanceof Array);
                    } catch (t) {}
                    return function (n, i) {
                      return r(n), o(i), e ? t.call(n, i) : (n.__proto__ = i), n;
                    };
                  })()
                : void 0);
          },
          function (t, e, n) {
            var r = n(0);
            t.exports = r.Promise;
          },
          function (t, e, n) {
            var r = n(12);
            t.exports = function (t, e, n) {
              if ((r(t), void 0 === e)) return t;
              switch (n) {
                case 0:
                  return function () {
                    return t.call(e);
                  };
                case 1:
                  return function (n) {
                    return t.call(e, n);
                  };
                case 2:
                  return function (n, r) {
                    return t.call(e, n, r);
                  };
                case 3:
                  return function (n, r, o) {
                    return t.call(e, n, r, o);
                  };
              }
              return function () {
                return t.apply(e, arguments);
              };
            };
          },
          function (t, e, n) {
            var r = n(2),
              o = n(12),
              i = n(1)('species');
            t.exports = function (t, e) {
              var n,
                a = r(t).constructor;
              return void 0 === a || null == (n = r(a)[i]) ? e : o(n);
            };
          },
          function (t, e, n) {
            var r,
              o,
              i,
              a = n(0),
              s = n(4),
              c = n(15),
              u = n(54),
              l = n(51),
              p = n(25),
              f = n(37),
              d = a.location,
              h = a.setImmediate,
              _ = a.clearImmediate,
              v = a.process,
              g = a.MessageChannel,
              y = a.Dispatch,
              m = 0,
              b = {},
              x = function (t) {
                if (b.hasOwnProperty(t)) {
                  var e = b[t];
                  delete b[t], e();
                }
              },
              w = function (t) {
                return function () {
                  x(t);
                };
              },
              C = function (t) {
                x(t.data);
              },
              P = function (t) {
                a.postMessage(t + '', d.protocol + '//' + d.host);
              };
            (h && _) ||
              ((h = function (t) {
                for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
                return (
                  (b[++m] = function () {
                    ('function' == typeof t ? t : Function(t)).apply(void 0, e);
                  }),
                  r(m),
                  m
                );
              }),
              (_ = function (t) {
                delete b[t];
              }),
              'process' == c(v)
                ? (r = function (t) {
                    v.nextTick(w(t));
                  })
                : y && y.now
                ? (r = function (t) {
                    y.now(w(t));
                  })
                : g && !/(iphone|ipod|ipad).*applewebkit/i.test(f)
                ? ((i = (o = new g()).port2), (o.port1.onmessage = C), (r = u(i.postMessage, i, 1)))
                : !a.addEventListener || 'function' != typeof postMessage || a.importScripts || s(P)
                ? (r =
                    'onreadystatechange' in p('script')
                      ? function (t) {
                          l.appendChild(p('script')).onreadystatechange = function () {
                            l.removeChild(this), x(t);
                          };
                        }
                      : function (t) {
                          setTimeout(w(t), 0);
                        })
                : ((r = P), a.addEventListener('message', C, !1))),
              (t.exports = {set: h, clear: _});
          },
          function (t, e, n) {
            var r = n(2),
              o = n(8),
              i = n(17);
            t.exports = function (t, e) {
              if ((r(t), o(e) && e.constructor === t)) return e;
              var n = i.f(t);
              return (0, n.resolve)(e), n.promise;
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(12),
              i = n(17),
              a = n(23),
              s = n(22);
            r(
              {target: 'Promise', stat: !0},
              {
                allSettled: function (t) {
                  var e = this,
                    n = i.f(e),
                    r = n.resolve,
                    c = n.reject,
                    u = a(function () {
                      var n = o(e.resolve),
                        i = [],
                        a = 0,
                        c = 1;
                      s(t, function (t) {
                        var o = a++,
                          s = !1;
                        i.push(void 0),
                          c++,
                          n.call(e, t).then(
                            function (t) {
                              s || ((s = !0), (i[o] = {status: 'fulfilled', value: t}), --c || r(i));
                            },
                            function (t) {
                              s || ((s = !0), (i[o] = {status: 'rejected', reason: t}), --c || r(i));
                            }
                          );
                      }),
                        --c || r(i);
                    });
                  return u.error && c(u.value), n.promise;
                }
              }
            );
          },
          function (t, e, n) {
            'use strict';
            function r(t) {
              var e = t.kalturaPlayer,
                n = t.loggerName,
                r = e ? e.getLogger : KalturaPlayer.ui.utils.getLogger;
              if (!r) return null;
              var o = r(n);
              return (function (t) {
                return t && 'setLevel' in t;
              })(o)
                ? o
                : null;
            }
            Object.defineProperty(e, '__esModule', {value: !0});
            var o = (function () {
              function t() {}
              return (
                (t.prototype.debug = function (t, e) {}),
                (t.prototype.info = function (t, e) {}),
                (t.prototype.trace = function (t, e) {}),
                (t.prototype.warn = function (t, e) {}),
                (t.prototype.error = function (t, e) {}),
                t
              );
            })();
            e.NoopLogger = o;
            var i = r({}),
              a = new o(),
              s = (function () {
                function t(t, e) {
                  (this._logger = t), (this._defaultOptions = e);
                }
                return (
                  (t.prototype._log = function (t, e, n, r) {
                    if (this._logger.enabledFor(e)) {
                      var o = r.class || this._defaultOptions.class || '_',
                        i = this._defaultOptions.module || '',
                        a = r.method ? '.' + r.method + '()' : '',
                        s =
                          '[' +
                          i +
                          '::' +
                          o +
                          '(' +
                          (this._defaultOptions.context ? "'" + this._defaultOptions.context + "'" : '') +
                          ')' +
                          a +
                          '] ' +
                          n;
                      r.data ? this._logger[t](s, r.data) : this._logger[t](s);
                    }
                  }),
                  (t.prototype.debug = function (t, e) {
                    i && this._log('debug', i.DEBUG, t, e);
                  }),
                  (t.prototype.info = function (t, e) {
                    i && this._log('info', i.INFO, t, e);
                  }),
                  (t.prototype.trace = function (t, e) {
                    i && this._log('trace', i.TRACE, t, e);
                  }),
                  (t.prototype.warn = function (t, e) {
                    i && this._log('warn', i.WARN, t, e);
                  }),
                  (t.prototype.error = function (t, e) {
                    i && this._log('error', i.ERROR, t, e);
                  }),
                  t
                );
              })();
            (e.ProxyLogger = s),
              (e.getContribLogger = function (t) {
                void 0 === t && (t = {});
                var e = t.kalturaPlayer,
                  n = r({kalturaPlayer: e, loggerName: (e ? e._playerId : 'global') + '_contrib'});
                return n ? new s(n, t) : a;
              }),
              (e.enableLogIfNeeded = function () {
                try {
                  if (-1 !== document.URL.indexOf('debugKalturaPlayer')) {
                    var t = r({});
                    if (!t) return;
                    t.setLevel(t.TRACE);
                  }
                } catch (t) {}
              });
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = n(113),
              o = n(115),
              i = (function () {
                function t() {}
                return (
                  (t.uuidV1 = function () {
                    return r();
                  }),
                  (t.uuidV5 = function (t, e) {
                    return o(t, e);
                  }),
                  (t.numberedUuidV1 = function () {
                    for (var e = t.uuidV1(), n = '', r = 0; r < e.length; r++) {
                      var o = e.charAt(r);
                      n += Number.isNaN(+o) ? o.charCodeAt(0) : o;
                    }
                    return n;
                  }),
                  t
                );
              })();
            e.UUID = i;
          },
          function (t, e) {
            for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
            t.exports = function (t, e) {
              var r = e || 0,
                o = n;
              return [
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                '-',
                o[t[r++]],
                o[t[r++]],
                '-',
                o[t[r++]],
                o[t[r++]],
                '-',
                o[t[r++]],
                o[t[r++]],
                '-',
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                o[t[r++]]
              ].join('');
            };
          },
          function (t, e, n) {
            'use strict';
            var r =
              (this && this.__assign) ||
              function () {
                return (r =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t;
                  }).apply(this, arguments);
              };
            Object.defineProperty(e, '__esModule', {value: !0});
            var o = (function () {
              function t() {}
              return (
                (t.copyDeep = function (e) {
                  var n;
                  return (
                    Array.isArray(e)
                      ? (n = e.length > 0 ? e.slice(0) : []).forEach(function (e, r) {
                          (('object' == typeof e && e !== {}) || (Array.isArray(e) && e.length > 0)) && (n[r] = t.copyDeep(e));
                        })
                      : 'object' == typeof e
                      ? ((n = Object.assign({}, e)),
                        Object.keys(n).forEach(function (e) {
                          (('object' == typeof n[e] && n[e] !== {}) || (Array.isArray(n[e]) && n[e].length > 0)) && (n[e] = t.copyDeep(n[e]));
                        }))
                      : (n = e),
                    n
                  );
                }),
                (t.isObject = function (t) {
                  return t && 'object' == typeof t && !Array.isArray(t);
                }),
                (t.mergeDeep = function (e, n, r) {
                  var o, i;
                  if (!n.length) return e;
                  var a = (r ? r.explicitMerge : null) || [],
                    s = n.shift();
                  if (t.isObject(e) && t.isObject(s))
                    for (var c in s)
                      t.isObject(s[c])
                        ? (e[c] || Object.assign(e, (((o = {})[c] = {}), o)),
                          -1 !== a.indexOf(c) ? (e[c] = t.explicitFlatMerge(e[c], s[c])) : t.mergeDeep(e[c], [s[c]], r))
                        : Object.assign(e, (((i = {})[c] = s[c]), i));
                  return t.mergeDeep(e, n, r);
                }),
                (t.mergeDefaults = function (e, n, r) {
                  return t.mergeDeep({}, [n, e], r);
                }),
                (t.explicitFlatMerge = function (t, e) {
                  var n = r({}, t);
                  return (
                    Object.keys(e).forEach(function (t) {
                      null === e[t] || 0 === Object.keys(e[t]).length ? delete n[t] : (n[t] = e[t]);
                    }),
                    n
                  );
                }),
                (t.get = function (t, e, n) {
                  for (
                    var r = (function (t) {
                        var e = [];
                        return (
                          t.split('.').forEach(function (t) {
                            t.split(/\[([^}]+)\]/g).forEach(function (t) {
                              t.length > 0 && e.push(t);
                            });
                          }),
                          e
                        );
                      })(e),
                      o = t,
                      i = 0;
                    i < r.length;
                    i++
                  ) {
                    if (!o[r[i]]) return n;
                    o = o[r[i]];
                  }
                  return o;
                }),
                t
              );
            })();
            e.ObjectUtils = o;
          },
          function (t, e, n) {
            'use strict';
            function r(t) {
              for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
            }
            Object.defineProperty(e, '__esModule', {value: !0}),
              n(64),
              n(103),
              n(107),
              (Number.isNaN =
                Number.isNaN ||
                function (t) {
                  return null !== t && (t != t || +t != t);
                }),
              r(n(110)),
              r(n(111)),
              r(n(112)),
              r(n(118)),
              r(n(59)),
              r(n(60)),
              r(n(119)),
              r(n(62)),
              r(n(120)),
              r(n(121));
          },
          function (t, e, n) {
            (t.exports = n(65)), n(99), n(100), n(101), n(102);
          },
          function (t, e, n) {
            n(66), n(72), n(83), n(87), n(58), n(98);
            var r = n(21);
            t.exports = r.Promise;
          },
          function (t, e, n) {
            var r = n(10),
              o = n(70),
              i = Object.prototype;
            o !== i.toString && r(i, 'toString', o, {unsafe: !0});
          },
          function (t, e) {
            var n;
            n = (function () {
              return this;
            })();
            try {
              n = n || new Function('return this')();
            } catch (t) {
              'object' == typeof window && (n = window);
            }
            t.exports = n;
          },
          function (t, e, n) {
            var r = n(0),
              o = n(24),
              i = r['__core-js_shared__'] || o('__core-js_shared__', {});
            t.exports = i;
          },
          function (t, e, n) {
            var r = n(0),
              o = n(40),
              i = r.WeakMap;
            t.exports = 'function' == typeof i && /native code/.test(o.call(i));
          },
          function (t, e, n) {
            'use strict';
            var r = n(42),
              o = {};
            (o[n(1)('toStringTag')] = 'z'),
              (t.exports =
                '[object z]' !== String(o)
                  ? function () {
                      return '[object ' + r(this) + ']';
                    }
                  : o.toString);
          },
          function (t, e, n) {
            var r = n(4);
            t.exports =
              !!Object.getOwnPropertySymbols &&
              !r(function () {
                return !String(Symbol());
              });
          },
          function (t, e, n) {
            'use strict';
            var r = n(73).charAt,
              o = n(14),
              i = n(43),
              a = o.set,
              s = o.getterFor('String Iterator');
            i(
              String,
              'String',
              function (t) {
                a(this, {type: 'String Iterator', string: String(t), index: 0});
              },
              function () {
                var t,
                  e = s(this),
                  n = e.string,
                  o = e.index;
                return o >= n.length ? {value: void 0, done: !0} : ((t = r(n, o)), (e.index += t.length), {value: t, done: !1});
              }
            );
          },
          function (t, e, n) {
            var r = n(28),
              o = n(29),
              i = function (t) {
                return function (e, n) {
                  var i,
                    a,
                    s = String(o(e)),
                    c = r(n),
                    u = s.length;
                  return c < 0 || c >= u
                    ? t
                      ? ''
                      : void 0
                    : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343
                    ? t
                      ? s.charAt(c)
                      : i
                    : t
                    ? s.slice(c, c + 2)
                    : a - 56320 + ((i - 55296) << 10) + 65536;
                };
              };
            t.exports = {codeAt: i(!1), charAt: i(!0)};
          },
          function (t, e, n) {
            var r = n(7),
              o = n(75),
              i = n(30),
              a = n(11);
            t.exports = function (t, e) {
              for (var n = o(e), s = a.f, c = i.f, u = 0; u < n.length; u++) {
                var l = n[u];
                r(t, l) || s(t, l, c(e, l));
              }
            };
          },
          function (t, e, n) {
            var r = n(9),
              o = n(76),
              i = n(48),
              a = n(2);
            t.exports =
              r('Reflect', 'ownKeys') ||
              function (t) {
                var e = o.f(a(t)),
                  n = i.f;
                return n ? e.concat(n(t)) : e;
              };
          },
          function (t, e, n) {
            var r = n(46),
              o = n(31).concat('length', 'prototype');
            e.f =
              Object.getOwnPropertyNames ||
              function (t) {
                return r(t, o);
              };
          },
          function (t, e, n) {
            var r = n(20),
              o = n(47),
              i = n(78),
              a = function (t) {
                return function (e, n, a) {
                  var s,
                    c = r(e),
                    u = o(c.length),
                    l = i(a, u);
                  if (t && n != n) {
                    for (; u > l; ) if ((s = c[l++]) != s) return !0;
                  } else for (; u > l; l++) if ((t || l in c) && c[l] === n) return t || l || 0;
                  return !t && -1;
                };
              };
            t.exports = {includes: a(!0), indexOf: a(!1)};
          },
          function (t, e, n) {
            var r = n(28),
              o = Math.max,
              i = Math.min;
            t.exports = function (t, e) {
              var n = r(t);
              return n < 0 ? o(n + e, 0) : i(n, e);
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(50).IteratorPrototype,
              o = n(34),
              i = n(19),
              a = n(36),
              s = n(16),
              c = function () {
                return this;
              };
            t.exports = function (t, e, n) {
              var u = e + ' Iterator';
              return (t.prototype = o(r, {next: i(1, n)})), a(t, u, !1, !0), (s[u] = c), t;
            };
          },
          function (t, e, n) {
            var r = n(4);
            t.exports = !r(function () {
              function t() {}
              return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
            });
          },
          function (t, e, n) {
            var r = n(6),
              o = n(11),
              i = n(2),
              a = n(35);
            t.exports = r
              ? Object.defineProperties
              : function (t, e) {
                  i(t);
                  for (var n, r = a(e), s = r.length, c = 0; s > c; ) o.f(t, (n = r[c++]), e[n]);
                  return t;
                };
          },
          function (t, e, n) {
            var r = n(8);
            t.exports = function (t) {
              if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + ' as a prototype');
              return t;
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(84),
              i = n(85),
              a = n(3),
              s = n(1),
              c = s('iterator'),
              u = s('toStringTag'),
              l = i.values;
            for (var p in o) {
              var f = r[p],
                d = f && f.prototype;
              if (d) {
                if (d[c] !== l)
                  try {
                    a(d, c, l);
                  } catch (t) {
                    d[c] = l;
                  }
                if ((d[u] || a(d, u, p), o[p]))
                  for (var h in i)
                    if (d[h] !== i[h])
                      try {
                        a(d, h, i[h]);
                      } catch (t) {
                        d[h] = i[h];
                      }
              }
            }
          },
          function (t, e) {
            t.exports = {
              CSSRuleList: 0,
              CSSStyleDeclaration: 0,
              CSSValueList: 0,
              ClientRectList: 0,
              DOMRectList: 0,
              DOMStringList: 0,
              DOMTokenList: 1,
              DataTransferItemList: 0,
              FileList: 0,
              HTMLAllCollection: 0,
              HTMLCollection: 0,
              HTMLFormElement: 0,
              HTMLSelectElement: 0,
              MediaList: 0,
              MimeTypeArray: 0,
              NamedNodeMap: 0,
              NodeList: 1,
              PaintRequestList: 0,
              Plugin: 0,
              PluginArray: 0,
              SVGLengthList: 0,
              SVGNumberList: 0,
              SVGPathSegList: 0,
              SVGPointList: 0,
              SVGStringList: 0,
              SVGTransformList: 0,
              SourceBufferList: 0,
              StyleSheetList: 0,
              TextTrackCueList: 0,
              TextTrackList: 0,
              TouchList: 0
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(20),
              o = n(86),
              i = n(16),
              a = n(14),
              s = n(43),
              c = a.set,
              u = a.getterFor('Array Iterator');
            (t.exports = s(
              Array,
              'Array',
              function (t, e) {
                c(this, {type: 'Array Iterator', target: r(t), index: 0, kind: e});
              },
              function () {
                var t = u(this),
                  e = t.target,
                  n = t.kind,
                  r = t.index++;
                return !e || r >= e.length
                  ? ((t.target = void 0), {value: void 0, done: !0})
                  : 'keys' == n
                  ? {value: r, done: !1}
                  : 'values' == n
                  ? {value: e[r], done: !1}
                  : {value: [r, e[r]], done: !1};
              },
              'values'
            )),
              (i.Arguments = i.Array),
              o('keys'),
              o('values'),
              o('entries');
          },
          function (t, e, n) {
            var r = n(1),
              o = n(34),
              i = n(3),
              a = r('unscopables'),
              s = Array.prototype;
            null == s[a] && i(s, a, o(null)),
              (t.exports = function (t) {
                s[a][t] = !0;
              });
          },
          function (t, e, n) {
            'use strict';
            var r,
              o,
              i,
              a,
              s = n(5),
              c = n(13),
              u = n(0),
              l = n(9),
              p = n(53),
              f = n(10),
              d = n(88),
              h = n(36),
              _ = n(89),
              v = n(8),
              g = n(12),
              y = n(90),
              m = n(15),
              b = n(22),
              x = n(94),
              w = n(55),
              C = n(56).set,
              P = n(95),
              S = n(57),
              O = n(96),
              k = n(17),
              T = n(23),
              j = n(14),
              A = n(49),
              E = n(1),
              M = n(97),
              I = E('species'),
              L = 'Promise',
              R = j.get,
              B = j.set,
              D = j.getterFor(L),
              F = p,
              U = u.TypeError,
              N = u.document,
              z = u.process,
              V = l('fetch'),
              K = k.f,
              H = K,
              W = 'process' == m(z),
              q = !!(N && N.createEvent && u.dispatchEvent),
              G = A(L, function () {
                if (66 === M) return !0;
                if (!W && 'function' != typeof PromiseRejectionEvent) return !0;
                if (c && !F.prototype.finally) return !0;
                if (M >= 51 && /native code/.test(F)) return !1;
                var t = F.resolve(1),
                  e = function (t) {
                    t(
                      function () {},
                      function () {}
                    );
                  };
                return ((t.constructor = {})[I] = e), !(t.then(function () {}) instanceof e);
              }),
              Y =
                G ||
                !x(function (t) {
                  F.all(t).catch(function () {});
                }),
              J = function (t) {
                var e;
                return !(!v(t) || 'function' != typeof (e = t.then)) && e;
              },
              $ = function (t, e, n) {
                if (!e.notified) {
                  e.notified = !0;
                  var r = e.reactions;
                  P(function () {
                    for (var o = e.value, i = 1 == e.state, a = 0; r.length > a; ) {
                      var s,
                        c,
                        u,
                        l = r[a++],
                        p = i ? l.ok : l.fail,
                        f = l.resolve,
                        d = l.reject,
                        h = l.domain;
                      try {
                        p
                          ? (i || (2 === e.rejection && tt(t, e), (e.rejection = 1)),
                            !0 === p ? (s = o) : (h && h.enter(), (s = p(o)), h && (h.exit(), (u = !0))),
                            s === l.promise ? d(U('Promise-chain cycle')) : (c = J(s)) ? c.call(s, f, d) : f(s))
                          : d(o);
                      } catch (t) {
                        h && !u && h.exit(), d(t);
                      }
                    }
                    (e.reactions = []), (e.notified = !1), n && !e.rejection && X(t, e);
                  });
                }
              },
              Z = function (t, e, n) {
                var r, o;
                q
                  ? (((r = N.createEvent('Event')).promise = e), (r.reason = n), r.initEvent(t, !1, !0), u.dispatchEvent(r))
                  : (r = {promise: e, reason: n}),
                  (o = u['on' + t]) ? o(r) : 'unhandledrejection' === t && O('Unhandled promise rejection', n);
              },
              X = function (t, e) {
                C.call(u, function () {
                  var n,
                    r = e.value;
                  if (
                    Q(e) &&
                    ((n = T(function () {
                      W ? z.emit('unhandledRejection', r, t) : Z('unhandledrejection', t, r);
                    })),
                    (e.rejection = W || Q(e) ? 2 : 1),
                    n.error)
                  )
                    throw n.value;
                });
              },
              Q = function (t) {
                return 1 !== t.rejection && !t.parent;
              },
              tt = function (t, e) {
                C.call(u, function () {
                  W ? z.emit('rejectionHandled', t) : Z('rejectionhandled', t, e.value);
                });
              },
              et = function (t, e, n, r) {
                return function (o) {
                  t(e, n, o, r);
                };
              },
              nt = function (t, e, n, r) {
                e.done || ((e.done = !0), r && (e = r), (e.value = n), (e.state = 2), $(t, e, !0));
              },
              rt = function (t, e, n, r) {
                if (!e.done) {
                  (e.done = !0), r && (e = r);
                  try {
                    if (t === n) throw U("Promise can't be resolved itself");
                    var o = J(n);
                    o
                      ? P(function () {
                          var r = {done: !1};
                          try {
                            o.call(n, et(rt, t, r, e), et(nt, t, r, e));
                          } catch (n) {
                            nt(t, r, n, e);
                          }
                        })
                      : ((e.value = n), (e.state = 1), $(t, e, !1));
                  } catch (n) {
                    nt(t, {done: !1}, n, e);
                  }
                }
              };
            G &&
              ((F = function (t) {
                y(this, F, L), g(t), r.call(this);
                var e = R(this);
                try {
                  t(et(rt, this, e), et(nt, this, e));
                } catch (t) {
                  nt(this, e, t);
                }
              }),
              ((r = function (t) {
                B(this, {type: L, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0});
              }).prototype = d(F.prototype, {
                then: function (t, e) {
                  var n = D(this),
                    r = K(w(this, F));
                  return (
                    (r.ok = 'function' != typeof t || t),
                    (r.fail = 'function' == typeof e && e),
                    (r.domain = W ? z.domain : void 0),
                    (n.parent = !0),
                    n.reactions.push(r),
                    0 != n.state && $(this, n, !1),
                    r.promise
                  );
                },
                catch: function (t) {
                  return this.then(void 0, t);
                }
              })),
              (o = function () {
                var t = new r(),
                  e = R(t);
                (this.promise = t), (this.resolve = et(rt, t, e)), (this.reject = et(nt, t, e));
              }),
              (k.f = K =
                function (t) {
                  return t === F || t === i ? new o(t) : H(t);
                }),
              c ||
                'function' != typeof p ||
                ((a = p.prototype.then),
                f(
                  p.prototype,
                  'then',
                  function (t, e) {
                    var n = this;
                    return new F(function (t, e) {
                      a.call(n, t, e);
                    }).then(t, e);
                  },
                  {unsafe: !0}
                ),
                'function' == typeof V &&
                  s(
                    {global: !0, enumerable: !0, forced: !0},
                    {
                      fetch: function (t) {
                        return S(F, V.apply(u, arguments));
                      }
                    }
                  ))),
              s({global: !0, wrap: !0, forced: G}, {Promise: F}),
              h(F, L, !1, !0),
              _(L),
              (i = l(L)),
              s(
                {target: L, stat: !0, forced: G},
                {
                  reject: function (t) {
                    var e = K(this);
                    return e.reject.call(void 0, t), e.promise;
                  }
                }
              ),
              s(
                {target: L, stat: !0, forced: c || G},
                {
                  resolve: function (t) {
                    return S(c && this === i ? F : this, t);
                  }
                }
              ),
              s(
                {target: L, stat: !0, forced: Y},
                {
                  all: function (t) {
                    var e = this,
                      n = K(e),
                      r = n.resolve,
                      o = n.reject,
                      i = T(function () {
                        var n = g(e.resolve),
                          i = [],
                          a = 0,
                          s = 1;
                        b(t, function (t) {
                          var c = a++,
                            u = !1;
                          i.push(void 0),
                            s++,
                            n.call(e, t).then(function (t) {
                              u || ((u = !0), (i[c] = t), --s || r(i));
                            }, o);
                        }),
                          --s || r(i);
                      });
                    return i.error && o(i.value), n.promise;
                  },
                  race: function (t) {
                    var e = this,
                      n = K(e),
                      r = n.reject,
                      o = T(function () {
                        var o = g(e.resolve);
                        b(t, function (t) {
                          o.call(e, t).then(n.resolve, r);
                        });
                      });
                    return o.error && r(o.value), n.promise;
                  }
                }
              );
          },
          function (t, e, n) {
            var r = n(10);
            t.exports = function (t, e, n) {
              for (var o in e) r(t, o, e[o], n);
              return t;
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(9),
              o = n(11),
              i = n(1),
              a = n(6),
              s = i('species');
            t.exports = function (t) {
              var e = r(t),
                n = o.f;
              a &&
                e &&
                !e[s] &&
                n(e, s, {
                  configurable: !0,
                  get: function () {
                    return this;
                  }
                });
            };
          },
          function (t, e) {
            t.exports = function (t, e, n) {
              if (!(t instanceof e)) throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
              return t;
            };
          },
          function (t, e, n) {
            var r = n(1),
              o = n(16),
              i = r('iterator'),
              a = Array.prototype;
            t.exports = function (t) {
              return void 0 !== t && (o.Array === t || a[i] === t);
            };
          },
          function (t, e, n) {
            var r = n(42),
              o = n(16),
              i = n(1)('iterator');
            t.exports = function (t) {
              if (null != t) return t[i] || t['@@iterator'] || o[r(t)];
            };
          },
          function (t, e, n) {
            var r = n(2);
            t.exports = function (t, e, n, o) {
              try {
                return o ? e(r(n)[0], n[1]) : e(n);
              } catch (e) {
                var i = t.return;
                throw (void 0 !== i && r(i.call(t)), e);
              }
            };
          },
          function (t, e, n) {
            var r = n(1)('iterator'),
              o = !1;
            try {
              var i = 0,
                a = {
                  next: function () {
                    return {done: !!i++};
                  },
                  return: function () {
                    o = !0;
                  }
                };
              (a[r] = function () {
                return this;
              }),
                Array.from(a, function () {
                  throw 2;
                });
            } catch (t) {}
            t.exports = function (t, e) {
              if (!e && !o) return !1;
              var n = !1;
              try {
                var i = {};
                (i[r] = function () {
                  return {
                    next: function () {
                      return {done: (n = !0)};
                    }
                  };
                }),
                  t(i);
              } catch (t) {}
              return n;
            };
          },
          function (t, e, n) {
            var r,
              o,
              i,
              a,
              s,
              c,
              u,
              l,
              p = n(0),
              f = n(30).f,
              d = n(15),
              h = n(56).set,
              _ = n(37),
              v = p.MutationObserver || p.WebKitMutationObserver,
              g = p.process,
              y = p.Promise,
              m = 'process' == d(g),
              b = f(p, 'queueMicrotask'),
              x = b && b.value;
            x ||
              ((r = function () {
                var t, e;
                for (m && (t = g.domain) && t.exit(); o; ) {
                  (e = o.fn), (o = o.next);
                  try {
                    e();
                  } catch (t) {
                    throw (o ? a() : (i = void 0), t);
                  }
                }
                (i = void 0), t && t.enter();
              }),
              m
                ? (a = function () {
                    g.nextTick(r);
                  })
                : v && !/(iphone|ipod|ipad).*applewebkit/i.test(_)
                ? ((s = !0),
                  (c = document.createTextNode('')),
                  new v(r).observe(c, {characterData: !0}),
                  (a = function () {
                    c.data = s = !s;
                  }))
                : y && y.resolve
                ? ((u = y.resolve(void 0)),
                  (l = u.then),
                  (a = function () {
                    l.call(u, r);
                  }))
                : (a = function () {
                    h.call(p, r);
                  })),
              (t.exports =
                x ||
                function (t) {
                  var e = {fn: t, next: void 0};
                  i && (i.next = e), o || ((o = e), a()), (i = e);
                });
          },
          function (t, e, n) {
            var r = n(0);
            t.exports = function (t, e) {
              var n = r.console;
              n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
            };
          },
          function (t, e, n) {
            var r,
              o,
              i = n(0),
              a = n(37),
              s = i.process,
              c = s && s.versions,
              u = c && c.v8;
            u ? (o = (r = u.split('.'))[0] + r[1]) : a && (r = a.match(/Chrome\/(\d+)/)) && (o = r[1]), (t.exports = o && +o);
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(13),
              i = n(53),
              a = n(9),
              s = n(55),
              c = n(57),
              u = n(10);
            r(
              {target: 'Promise', proto: !0, real: !0},
              {
                finally: function (t) {
                  var e = s(this, a('Promise')),
                    n = 'function' == typeof t;
                  return this.then(
                    n
                      ? function (n) {
                          return c(e, t()).then(function () {
                            return n;
                          });
                        }
                      : t,
                    n
                      ? function (n) {
                          return c(e, t()).then(function () {
                            throw n;
                          });
                        }
                      : t
                  );
                }
              }
            ),
              o || 'function' != typeof i || i.prototype.finally || u(i.prototype, 'finally', a('Promise').prototype.finally);
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(6),
              i = n(32),
              a = n(52),
              s = n(34),
              c = n(11),
              u = n(19),
              l = n(22),
              p = n(3),
              f = n(2),
              d = n(14),
              h = d.set,
              _ = d.getterFor('AggregateError'),
              v = function (t, e) {
                var n = this;
                if (!(n instanceof v)) return new v(t, e);
                a && (n = a(new Error(e), i(n)));
                var r = [];
                return l(t, r.push, r), o ? h(n, {errors: r, type: 'AggregateError'}) : (n.errors = r), void 0 !== e && p(n, 'message', String(e)), n;
              };
            (v.prototype = s(Error.prototype, {
              constructor: u(5, v),
              message: u(5, ''),
              name: u(5, 'AggregateError'),
              toString: u(5, function () {
                var t = f(this).name;
                t = void 0 === t ? 'AggregateError' : String(t);
                var e = this.message;
                return t + ': ' + (void 0 === e ? '' : String(e));
              })
            })),
              o &&
                c.f(v.prototype, 'errors', {
                  get: function () {
                    return _(this).errors;
                  },
                  configurable: !0
                }),
              r({global: !0}, {AggregateError: v});
          },
          function (t, e, n) {
            n(58);
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(17),
              i = n(23);
            r(
              {target: 'Promise', stat: !0},
              {
                try: function (t) {
                  var e = o.f(this),
                    n = i(t);
                  return (n.error ? e.reject : e.resolve)(n.value), e.promise;
                }
              }
            );
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(12),
              i = n(9),
              a = n(17),
              s = n(23),
              c = n(22);
            r(
              {target: 'Promise', stat: !0},
              {
                any: function (t) {
                  var e = this,
                    n = a.f(e),
                    r = n.resolve,
                    u = n.reject,
                    l = s(function () {
                      var n = o(e.resolve),
                        a = [],
                        s = 0,
                        l = 1,
                        p = !1;
                      c(t, function (t) {
                        var o = s++,
                          c = !1;
                        a.push(void 0),
                          l++,
                          n.call(e, t).then(
                            function (t) {
                              c || p || ((p = !0), r(t));
                            },
                            function (t) {
                              c || p || ((c = !0), (a[o] = t), --l || u(new (i('AggregateError'))(a, 'No one promise resolved')));
                            }
                          );
                      }),
                        --l || u(new (i('AggregateError'))(a, 'No one promise resolved'));
                    });
                  return l.error && u(l.value), n.promise;
                }
              }
            );
          },
          function (t, e, n) {
            t.exports = n(104);
          },
          function (t, e, n) {
            n(105);
            var r = n(21);
            t.exports = r.Object.assign;
          },
          function (t, e, n) {
            var r = n(5),
              o = n(106);
            r({target: 'Object', stat: !0, forced: Object.assign !== o}, {assign: o});
          },
          function (t, e, n) {
            'use strict';
            var r = n(6),
              o = n(4),
              i = n(35),
              a = n(48),
              s = n(44),
              c = n(33),
              u = n(45),
              l = Object.assign;
            t.exports =
              !l ||
              o(function () {
                var t = {},
                  e = {},
                  n = Symbol();
                return (
                  (t[n] = 7),
                  'abcdefghijklmnopqrst'.split('').forEach(function (t) {
                    e[t] = t;
                  }),
                  7 != l({}, t)[n] || 'abcdefghijklmnopqrst' != i(l({}, e)).join('')
                );
              })
                ? function (t, e) {
                    for (var n = c(t), o = arguments.length, l = 1, p = a.f, f = s.f; o > l; )
                      for (var d, h = u(arguments[l++]), _ = p ? i(h).concat(p(h)) : i(h), v = _.length, g = 0; v > g; )
                        (d = _[g++]), (r && !f.call(h, d)) || (n[d] = h[d]);
                    return n;
                  }
                : l;
          },
          function (t, e, n) {
            t.exports = n(108);
          },
          function (t, e, n) {
            n(109);
            var r = n(21);
            t.exports = r.Object.keys;
          },
          function (t, e, n) {
            var r = n(5),
              o = n(33),
              i = n(35);
            r(
              {
                target: 'Object',
                stat: !0,
                forced: n(4)(function () {
                  i(1);
                })
              },
              {
                keys: function (t) {
                  return i(o(t));
                }
              }
            );
          },
          function (t, e, n) {
            'use strict';
            var r =
              (this && this.__spreadArrays) ||
              function () {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                var r = Array(t),
                  o = 0;
                for (e = 0; e < n; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                return r;
              };
            Object.defineProperty(e, '__esModule', {value: !0});
            var o,
              i = n(59);
            !(function (t) {
              (t.Show = 'show'), (t.Hide = 'hide');
            })(o || (o = {}));
            var a = i.getContribLogger({module: 'contrib-common', class: 'CuepointEngine'}),
              s = (function () {
                function t(t, e) {
                  (this.isFirstTime = !0),
                    (this.enabled = !0),
                    (this.lastHandledTime = null),
                    (this.lastHandledTimeIndex = null),
                    (this.nextTimeToHandle = null),
                    (this.cuepointChanges = []),
                    a.debug('executed', {method: 'ctor'}),
                    (this.reasonableSeekThreshold = Math.max(2e3, (e && e.reasonableSeekThreshold) || 0)),
                    (this._cuepoints = t),
                    this.prepareCuepoint();
                }
                return (
                  Object.defineProperty(t.prototype, 'cuepoints', {
                    get: function () {
                      return r(this._cuepoints);
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.getSnapshot = function (t) {
                    var e = this.findClosestLastIndexByTime(t);
                    return (
                      a.debug('create snapshot based on time ' + t, {method: 'getSnapshot', data: {timeIndex: e}}), this.createCuepointSnapshot(e)
                    );
                  }),
                  (t.prototype.updateTime = function (t, e, n) {
                    void 0 === e && (e = !1);
                    var r = this.isFirstTime,
                      o = this.lastHandledTime,
                      i = this.nextTimeToHandle;
                    if (0 === this.cuepointChanges.length)
                      return (
                        r && (a.info('cuepoint list empty. will always return empty snapshot', {method: 'updateTime'}), (this.isFirstTime = !1)),
                        {snapshot: []}
                      );
                    var s = !r && null !== o && null !== i && (o > t || t - i > this.reasonableSeekThreshold),
                      c =
                        r ||
                        (null !== this.lastHandledTime && this.lastHandledTime > t) ||
                        (null != this.nextTimeToHandle && t >= this.nextTimeToHandle),
                      u = this.findClosestLastIndexByTime(t),
                      l = u < 0 ? 0 : this.cuepointChanges[u].time;
                    if (!c) return e ? {snapshot: this.createCuepointSnapshot(u, n)} : {delta: this.createEmptyDelta()};
                    if (
                      (a.debug('has changes to handle. check if need to return snapshot instead of delta based on provided new time', {
                        method: 'updateTime',
                        data: {currentTime: t, closestChangeIndex: u, closestChangeTime: l, lastHandledTime: o, nextTimeToHandle: i, isFirstTime: r}
                      }),
                      r || e || s)
                    ) {
                      a.debug("some conditions doesn't allow returning delta, return snapshot instead", {
                        method: 'updateTime',
                        data: {isFirstTime: r, userSeeked: s, forceSnapshot: e}
                      });
                      var p = this.createCuepointSnapshot(u, n);
                      return this.updateInternals(l, u), {snapshot: p};
                    }
                    var f = this.createCuepointDelta(u, n);
                    return this.updateInternals(l, u), {delta: f};
                  }),
                  (t.prototype.getCurrentCuepointSnapshot = function () {
                    return this.lastHandledTimeIndex ? this.createCuepointSnapshot(this.lastHandledTimeIndex) : [];
                  }),
                  (t.prototype.createCuepointSnapshot = function (t, e) {
                    if (!this.enabled || t < 0 || !this.cuepointChanges || 0 === this.cuepointChanges.length)
                      return (
                        a.debug('resulted with empty snapshot', {
                          method: 'createCuepointSnapshot',
                          data: {targetIndex: t, enabled: this.enabled, cuepointCount: (this.cuepointChanges || []).length}
                        }),
                        []
                      );
                    for (var n = [], r = 0; r <= t; r++) {
                      var i = this.cuepointChanges[r],
                        s = n.indexOf(i.cuePoint);
                      i.type === o.Show ? -1 === s && n.push(i.cuePoint) : -1 !== s && n.splice(s, 1);
                    }
                    return a.debug('resulted snapshot', {method: 'createCuepointSnapshot', data: {snapshot: n}}), e && (n = n.filter(e)), n;
                  }),
                  (t.prototype.createCuepointDelta = function (t, e) {
                    if (!this.enabled || !this.cuepointChanges || 0 === this.cuepointChanges.length)
                      return (
                        a.debug('resulted with empty delta', {
                          method: 'createCuepointDelta',
                          data: {enabled: this.enabled, cuepointCount: (this.cuepointChanges || []).length}
                        }),
                        this.createEmptyDelta()
                      );
                    var n = this.lastHandledTimeIndex;
                    if (null === n)
                      return a.debug('invalid internal state. resulted with empty delta', {method: 'createCuepointDelta'}), this.createEmptyDelta();
                    var r = [],
                      i = [];
                    a.info('find cuepoint that were added or removed', {method: 'createCuepointDelta'});
                    for (var s = n + 1; s <= t; s++) {
                      var c = this.cuepointChanges[s],
                        u = r.indexOf(c.cuePoint);
                      c.type === o.Show
                        ? -1 === u && r.push(c.cuePoint)
                        : -1 !== u
                        ? (a.info(
                            'cuepoint was marked with type ' + c.type + ' at ' + c.time + ". remove from new cuepoint list as it wasn't visible yet",
                            {method: 'createCuepointDelta', data: {cuepoint: c.cuePoint}}
                          ),
                          r.splice(u, 1))
                        : -1 === i.indexOf(c.cuePoint) &&
                          (a.info('cuepoint was marked with type ' + c.type + ' at ' + c.time + '. add to removed cuepoint list', {
                            method: 'createCuepointDelta',
                            data: {cuepoint: c.cuePoint}
                          }),
                          i.push(c.cuePoint));
                    }
                    return (
                      a.debug('resulted delta', {method: 'createCuepointDelta', data: {newCuepoint: r, removedCuepoint: i}}),
                      e && ((r = r.filter(e)), (i = i.filter(e))),
                      {show: r, hide: i}
                    );
                  }),
                  (t.prototype.updateInternals = function (t, e) {
                    var n = this.cuepointChanges;
                    if (n && 0 !== n.length) {
                      var r = e >= n.length - 1,
                        o = null === e;
                      (this.lastHandledTime = t),
                        (this.lastHandledTimeIndex = e),
                        (this.nextTimeToHandle = o ? n[0].time : r ? n[n.length - 1].time : n[e + 1].time),
                        (this.isFirstTime = !1);
                    }
                  }),
                  (t.prototype.createEmptyDelta = function () {
                    return {show: [], hide: []};
                  }),
                  (t.prototype.binarySearch = function (t, e) {
                    if (!t || 0 === t.length) return null;
                    if (e < t[0].time) return -1;
                    if (e > t[t.length - 1].time) return t.length - 1;
                    for (var n = 0, r = t.length - 1; n <= r; ) {
                      var o = Math.floor((r + n + 1) / 2);
                      if (e < t[o].time) r = o - 1;
                      else {
                        if (!(e > t[o].time)) return o;
                        n = o + 1;
                      }
                    }
                    return Math.min(n, r);
                  }),
                  (t.prototype.findClosestLastIndexByTime = function (t) {
                    var e = this.cuepointChanges,
                      n = this.binarySearch(e, t);
                    if (null === n) return -1;
                    for (var r = e.length; n < r - 1 && e[n + 1].time === t; ) n++;
                    return n;
                  }),
                  (t.prototype.prepareCuepoint = function () {
                    var t = this;
                    (this._cuepoints || []).forEach(function (e) {
                      null !== e.startTime &&
                        void 0 !== e.startTime &&
                        e.startTime >= 0 &&
                        t.cuepointChanges.push({time: e.startTime, type: o.Show, cuePoint: e}),
                        null !== e.endTime &&
                          void 0 !== e.endTime &&
                          e.endTime >= 0 &&
                          t.cuepointChanges.push({time: e.endTime, type: o.Hide, cuePoint: e});
                    }),
                      this.cuepointChanges.sort(function (t, e) {
                        return t.time < e.time ? -1 : t.time === e.time ? 0 : 1;
                      }),
                      a.debug('tracking ' + this.cuepointChanges.length + ' changes', {
                        method: 'prepareCuepoint',
                        data: {changes: this.cuepointChanges}
                      });
                  }),
                  t
                );
              })();
            e.CuepointEngine = s;
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = (function () {
              function t() {
                this._cache = {};
              }
              return (
                (t.get = function (e) {
                  return (e.__contrib__ = e.__contrib__ || {}), (e.__contrib__.services = e.__contrib__.services || new t()), e.__contrib__.services;
                }),
                (t.prototype.get = function (t) {
                  var e = this._cache[t];
                  if (!e) throw new Error('cannot find resource with token ' + t);
                  return e;
                }),
                (t.prototype.register = function (t, e) {
                  var n = this._cache[t];
                  return n || (n = this._cache[t] = {instance: e()}), n.instance;
                }),
                t
              );
            })();
            e.PlayerContribRegistry = r;
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = n(60),
              o = (function () {
                function t() {}
                return (
                  (t.getAnonymousUserId = function (e) {
                    return 'undefined' == typeof Storage
                      ? t._generateAnonymousUserId(e)
                      : ((n = localStorage.getItem('anonymousUserId')) ||
                          ((n = t._generateAnonymousUserId(e)), localStorage.setItem('anonymousUserId', n)),
                        n);
                    var n;
                  }),
                  (t._generateAnonymousUserId = function (t) {
                    return '##' + t + 'HashSeparator' + r.UUID.numberedUuidV1() + '##';
                  }),
                  t
                );
              })();
            e.KalturaLiveServices = o;
          },
          function (t, e, n) {
            var r,
              o,
              i = n(114),
              a = n(61),
              s = 0,
              c = 0;
            t.exports = function (t, e, n) {
              var u = (e && n) || 0,
                l = e || [],
                p = (t = t || {}).node || r,
                f = void 0 !== t.clockseq ? t.clockseq : o;
              if (null == p || null == f) {
                var d = i();
                null == p && (p = r = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]), null == f && (f = o = 16383 & ((d[6] << 8) | d[7]));
              }
              var h = void 0 !== t.msecs ? t.msecs : new Date().getTime(),
                _ = void 0 !== t.nsecs ? t.nsecs : c + 1,
                v = h - s + (_ - c) / 1e4;
              if ((v < 0 && void 0 === t.clockseq && (f = (f + 1) & 16383), (v < 0 || h > s) && void 0 === t.nsecs && (_ = 0), _ >= 1e4))
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
              (s = h), (c = _), (o = f);
              var g = (1e4 * (268435455 & (h += 122192928e5)) + _) % 4294967296;
              (l[u++] = (g >>> 24) & 255), (l[u++] = (g >>> 16) & 255), (l[u++] = (g >>> 8) & 255), (l[u++] = 255 & g);
              var y = ((h / 4294967296) * 1e4) & 268435455;
              (l[u++] = (y >>> 8) & 255),
                (l[u++] = 255 & y),
                (l[u++] = ((y >>> 24) & 15) | 16),
                (l[u++] = (y >>> 16) & 255),
                (l[u++] = (f >>> 8) | 128),
                (l[u++] = 255 & f);
              for (var m = 0; m < 6; ++m) l[u + m] = p[m];
              return e || a(l);
            };
          },
          function (t, e) {
            var n =
              ('undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
              ('undefined' != typeof msCrypto && 'function' == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto));
            if (n) {
              var r = new Uint8Array(16);
              t.exports = function () {
                return n(r), r;
              };
            } else {
              var o = new Array(16);
              t.exports = function () {
                for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), (o[e] = (t >>> ((3 & e) << 3)) & 255);
                return o;
              };
            }
          },
          function (t, e, n) {
            var r = n(116),
              o = n(117);
            t.exports = r('v5', 80, o);
          },
          function (t, e, n) {
            var r = n(61);
            t.exports = function (t, e, n) {
              var o = function (t, o, i, a) {
                var s = (i && a) || 0;
                if (
                  ('string' == typeof t &&
                    (t = (function (t) {
                      t = unescape(encodeURIComponent(t));
                      for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
                      return e;
                    })(t)),
                  'string' == typeof o &&
                    (o = (function (t) {
                      var e = [];
                      return (
                        t.replace(/[a-fA-F0-9]{2}/g, function (t) {
                          e.push(parseInt(t, 16));
                        }),
                        e
                      );
                    })(o)),
                  !Array.isArray(t))
                )
                  throw TypeError('value must be an array of bytes');
                if (!Array.isArray(o) || 16 !== o.length) throw TypeError('namespace must be uuid string or an Array of 16 byte values');
                var c = n(o.concat(t));
                if (((c[6] = (15 & c[6]) | e), (c[8] = (63 & c[8]) | 128), i)) for (var u = 0; u < 16; ++u) i[s + u] = c[u];
                return i || r(c);
              };
              try {
                o.name = t;
              } catch (t) {}
              return (o.DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'), (o.URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8'), o;
            };
          },
          function (t, e, n) {
            'use strict';
            function r(t, e, n, r) {
              switch (t) {
                case 0:
                  return (e & n) ^ (~e & r);
                case 1:
                  return e ^ n ^ r;
                case 2:
                  return (e & n) ^ (e & r) ^ (n & r);
                case 3:
                  return e ^ n ^ r;
              }
            }
            function o(t, e) {
              return (t << e) | (t >>> (32 - e));
            }
            t.exports = function (t) {
              var e = [1518500249, 1859775393, 2400959708, 3395469782],
                n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
              if ('string' == typeof t) {
                var i = unescape(encodeURIComponent(t));
                t = new Array(i.length);
                for (var a = 0; a < i.length; a++) t[a] = i.charCodeAt(a);
              }
              t.push(128);
              var s = t.length / 4 + 2,
                c = Math.ceil(s / 16),
                u = new Array(c);
              for (a = 0; a < c; a++) {
                u[a] = new Array(16);
                for (var l = 0; l < 16; l++)
                  u[a][l] = (t[64 * a + 4 * l] << 24) | (t[64 * a + 4 * l + 1] << 16) | (t[64 * a + 4 * l + 2] << 8) | t[64 * a + 4 * l + 3];
              }
              for (
                u[c - 1][14] = (8 * (t.length - 1)) / Math.pow(2, 32),
                  u[c - 1][14] = Math.floor(u[c - 1][14]),
                  u[c - 1][15] = (8 * (t.length - 1)) & 4294967295,
                  a = 0;
                a < c;
                a++
              ) {
                for (var p = new Array(80), f = 0; f < 16; f++) p[f] = u[a][f];
                for (f = 16; f < 80; f++) p[f] = o(p[f - 3] ^ p[f - 8] ^ p[f - 14] ^ p[f - 16], 1);
                var d = n[0],
                  h = n[1],
                  _ = n[2],
                  v = n[3],
                  g = n[4];
                for (f = 0; f < 80; f++) {
                  var y = Math.floor(f / 20),
                    m = (o(d, 5) + r(y, h, _, v) + g + e[y] + p[f]) >>> 0;
                  (g = v), (v = _), (_ = o(h, 30) >>> 0), (h = d), (d = m);
                }
                (n[0] = (n[0] + d) >>> 0), (n[1] = (n[1] + h) >>> 0), (n[2] = (n[2] + _) >>> 0), (n[3] = (n[3] + v) >>> 0), (n[4] = (n[4] + g) >>> 0);
              }
              return [
                (n[0] >> 24) & 255,
                (n[0] >> 16) & 255,
                (n[0] >> 8) & 255,
                255 & n[0],
                (n[1] >> 24) & 255,
                (n[1] >> 16) & 255,
                (n[1] >> 8) & 255,
                255 & n[1],
                (n[2] >> 24) & 255,
                (n[2] >> 16) & 255,
                (n[2] >> 8) & 255,
                255 & n[2],
                (n[3] >> 24) & 255,
                (n[3] >> 16) & 255,
                (n[3] >> 8) & 255,
                255 & n[3],
                (n[4] >> 24) & 255,
                (n[4] >> 16) & 255,
                (n[4] >> 8) & 255,
                255 & n[4]
              ];
            };
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = (function () {
              function t() {
                (this._eventListeners = {}), (this._wildcardEventListeners = []);
              }
              return (
                (t.prototype.on = function (t, e) {
                  '*' !== t ? (this._eventListeners[t] || (this._eventListeners[t] = [])).push(e) : this._wildcardEventListeners.push(e);
                }),
                (t.prototype.off = function (t, e) {
                  if ('*' !== t) {
                    var n = this._eventListeners[t];
                    n && n.splice(n.indexOf(e) >>> 0, 1);
                  } else this._wildcardEventListeners.splice(this._wildcardEventListeners.indexOf(e) >>> 0, 1);
                }),
                (t.prototype.emit = function (t) {
                  (this._eventListeners[t.type] || []).slice().map(function (e) {
                    e(t);
                  }),
                    this._wildcardEventListeners.slice().map(function (e) {
                      e(t);
                    });
                }),
                t
              );
            })();
            e.EventsManager = r;
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0}),
              (e.debounce = function (t, e, n) {
                var r;
                return (
                  void 0 === e && (e = 50),
                  void 0 === n && (n = {isImmediate: !1}),
                  function () {
                    for (var o = this, i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
                    var s = function () {
                        (r = void 0), n.isImmediate || t.apply(o, i);
                      },
                      c = n.isImmediate && void 0 === r;
                    void 0 !== r && clearTimeout(r), (r = setTimeout(s, e)), c && t.apply(this, i);
                  }
                );
              });
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = n(62),
              o = (function () {
                function t() {}
                return (
                  (t.getPlayerConfig = function (t, e, n, o) {
                    var i = r.ObjectUtils.get(t.config, e, {});
                    return r.ObjectUtils.mergeDefaults(i, n, o);
                  }),
                  t
                );
              })();
            e.KalturaPlayerUtils = o;
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = (function () {
              function t() {}
              return (
                (t.findIndex = function (t, e) {
                  for (var n = 0; n < t.length; ) {
                    if (e(t[n])) return n;
                    n++;
                  }
                  return -1;
                }),
                t
              );
            })();
            e.ArrayUtils = r;
          }
        ]));
    },
    function (t, e, n) {
      var r, o;
      window,
        (t.exports =
          ((r = n(10)),
          (o = n(0)),
          (function (t) {
            var e = {};
            function n(r) {
              if (e[r]) return e[r].exports;
              var o = (e[r] = {i: r, l: !1, exports: {}});
              return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
            }
            return (
              (n.m = t),
              (n.c = e),
              (n.d = function (t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r});
              }),
              (n.r = function (t) {
                'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
                  Object.defineProperty(t, '__esModule', {value: !0});
              }),
              (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
                var r = Object.create(null);
                if ((n.r(r), Object.defineProperty(r, 'default', {enumerable: !0, value: t}), 2 & e && 'string' != typeof t))
                  for (var o in t)
                    n.d(
                      r,
                      o,
                      function (e) {
                        return t[e];
                      }.bind(null, o)
                    );
                return r;
              }),
              (n.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return n.d(e, 'a', e), e;
              }),
              (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (n.p = ''),
              n((n.s = 30))
            );
          })([
            function (t, e) {
              t.exports = r;
            },
            function (t, e) {
              t.exports = o;
            },
            function (t, e, n) {
              'use strict';
              var r = n(19),
                o = n(80),
                i = Object.prototype.toString;
              function a(t) {
                return '[object Array]' === i.call(t);
              }
              function s(t) {
                return null !== t && 'object' == typeof t;
              }
              function c(t) {
                return '[object Function]' === i.call(t);
              }
              function u(t, e) {
                if (null != t)
                  if (('object' != typeof t && (t = [t]), a(t))) for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
                  else for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t);
              }
              t.exports = {
                isArray: a,
                isArrayBuffer: function (t) {
                  return '[object ArrayBuffer]' === i.call(t);
                },
                isBuffer: o,
                isFormData: function (t) {
                  return 'undefined' != typeof FormData && t instanceof FormData;
                },
                isArrayBufferView: function (t) {
                  return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
                    ? ArrayBuffer.isView(t)
                    : t && t.buffer && t.buffer instanceof ArrayBuffer;
                },
                isString: function (t) {
                  return 'string' == typeof t;
                },
                isNumber: function (t) {
                  return 'number' == typeof t;
                },
                isObject: s,
                isUndefined: function (t) {
                  return void 0 === t;
                },
                isDate: function (t) {
                  return '[object Date]' === i.call(t);
                },
                isFile: function (t) {
                  return '[object File]' === i.call(t);
                },
                isBlob: function (t) {
                  return '[object Blob]' === i.call(t);
                },
                isFunction: c,
                isStream: function (t) {
                  return s(t) && c(t.pipe);
                },
                isURLSearchParams: function (t) {
                  return 'undefined' != typeof URLSearchParams && t instanceof URLSearchParams;
                },
                isStandardBrowserEnv: function () {
                  return (
                    ('undefined' == typeof navigator ||
                      ('ReactNative' !== navigator.product && 'NativeScript' !== navigator.product && 'NS' !== navigator.product)) &&
                    'undefined' != typeof window &&
                    'undefined' != typeof document
                  );
                },
                forEach: u,
                merge: function t() {
                  var e = {};
                  function n(n, r) {
                    'object' == typeof e[r] && 'object' == typeof n ? (e[r] = t(e[r], n)) : (e[r] = n);
                  }
                  for (var r = 0, o = arguments.length; r < o; r++) u(arguments[r], n);
                  return e;
                },
                deepMerge: function t() {
                  var e = {};
                  function n(n, r) {
                    'object' == typeof e[r] && 'object' == typeof n ? (e[r] = t(e[r], n)) : (e[r] = 'object' == typeof n ? t({}, n) : n);
                  }
                  for (var r = 0, o = arguments.length; r < o; r++) u(arguments[r], n);
                  return e;
                },
                extend: function (t, e, n) {
                  return (
                    u(e, function (e, o) {
                      t[o] = n && 'function' == typeof e ? r(e, n) : e;
                    }),
                    t
                  );
                },
                trim: function (t) {
                  return t.replace(/^\s*/, '').replace(/\s*$/, '');
                }
              };
            },
            function (t, e, n) {
              'use strict';
              t.exports = function (t) {
                var e = [];
                return (
                  (e.toString = function () {
                    return this.map(function (e) {
                      var n = (function (t, e) {
                        var n,
                          r,
                          o,
                          i = t[1] || '',
                          a = t[3];
                        if (!a) return i;
                        if (e && 'function' == typeof btoa) {
                          var s =
                              ((n = a),
                              (r = btoa(unescape(encodeURIComponent(JSON.stringify(n))))),
                              (o = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(r)),
                              '/*# '.concat(o, ' */')),
                            c = a.sources.map(function (t) {
                              return '/*# sourceURL='.concat(a.sourceRoot || '').concat(t, ' */');
                            });
                          return [i].concat(c).concat([s]).join('\n');
                        }
                        return [i].join('\n');
                      })(e, t);
                      return e[2] ? '@media '.concat(e[2], ' {').concat(n, '}') : n;
                    }).join('');
                  }),
                  (e.i = function (t, n, r) {
                    'string' == typeof t && (t = [[null, t, '']]);
                    var o = {};
                    if (r)
                      for (var i = 0; i < this.length; i++) {
                        var a = this[i][0];
                        null != a && (o[a] = !0);
                      }
                    for (var s = 0; s < t.length; s++) {
                      var c = [].concat(t[s]);
                      (r && o[c[0]]) || (n && (c[2] ? (c[2] = ''.concat(n, ' and ').concat(c[2])) : (c[2] = n)), e.push(c));
                    }
                  }),
                  e
                );
              };
            },
            function (t, e, n) {
              var r,
                o,
                i = {},
                a =
                  ((r = function () {
                    return window && document && document.all && !window.atob;
                  }),
                  function () {
                    return void 0 === o && (o = r.apply(this, arguments)), o;
                  }),
                s = function (t, e) {
                  return e ? e.querySelector(t) : document.querySelector(t);
                },
                c = (function (t) {
                  var e = {};
                  return function (t, n) {
                    if ('function' == typeof t) return t();
                    if (void 0 === e[t]) {
                      var r = s.call(this, t, n);
                      if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                        try {
                          r = r.contentDocument.head;
                        } catch (t) {
                          r = null;
                        }
                      e[t] = r;
                    }
                    return e[t];
                  };
                })(),
                u = null,
                l = 0,
                p = [],
                f = n(38);
              function d(t, e) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n],
                    o = i[r.id];
                  if (o) {
                    o.refs++;
                    for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
                    for (; a < r.parts.length; a++) o.parts.push(m(r.parts[a], e));
                  } else {
                    var s = [];
                    for (a = 0; a < r.parts.length; a++) s.push(m(r.parts[a], e));
                    i[r.id] = {id: r.id, refs: 1, parts: s};
                  }
                }
              }
              function h(t, e) {
                for (var n = [], r = {}, o = 0; o < t.length; o++) {
                  var i = t[o],
                    a = e.base ? i[0] + e.base : i[0],
                    s = {css: i[1], media: i[2], sourceMap: i[3]};
                  r[a] ? r[a].parts.push(s) : n.push((r[a] = {id: a, parts: [s]}));
                }
                return n;
              }
              function _(t, e) {
                var n = c(t.insertInto);
                if (!n)
                  throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var r = p[p.length - 1];
                if ('top' === t.insertAt)
                  r ? (r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e)) : n.insertBefore(e, n.firstChild), p.push(e);
                else if ('bottom' === t.insertAt) n.appendChild(e);
                else {
                  if ('object' != typeof t.insertAt || !t.insertAt.before)
                    throw new Error(
                      "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
                    );
                  var o = c(t.insertAt.before, n);
                  n.insertBefore(e, o);
                }
              }
              function v(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var e = p.indexOf(t);
                e >= 0 && p.splice(e, 1);
              }
              function g(t) {
                var e = document.createElement('style');
                if ((void 0 === t.attrs.type && (t.attrs.type = 'text/css'), void 0 === t.attrs.nonce)) {
                  var r = n.nc;
                  r && (t.attrs.nonce = r);
                }
                return y(e, t.attrs), _(t, e), e;
              }
              function y(t, e) {
                Object.keys(e).forEach(function (n) {
                  t.setAttribute(n, e[n]);
                });
              }
              function m(t, e) {
                var n, r, o, i;
                if (e.transform && t.css) {
                  if (!(i = 'function' == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () {};
                  t.css = i;
                }
                if (e.singleton) {
                  var a = l++;
                  (n = u || (u = g(e))), (r = w.bind(null, n, a, !1)), (o = w.bind(null, n, a, !0));
                } else
                  t.sourceMap &&
                  'function' == typeof URL &&
                  'function' == typeof URL.createObjectURL &&
                  'function' == typeof URL.revokeObjectURL &&
                  'function' == typeof Blob &&
                  'function' == typeof btoa
                    ? ((n = (function (t) {
                        var e = document.createElement('link');
                        return void 0 === t.attrs.type && (t.attrs.type = 'text/css'), (t.attrs.rel = 'stylesheet'), y(e, t.attrs), _(t, e), e;
                      })(e)),
                      (r = P.bind(null, n, e)),
                      (o = function () {
                        v(n), n.href && URL.revokeObjectURL(n.href);
                      }))
                    : ((n = g(e)),
                      (r = C.bind(null, n)),
                      (o = function () {
                        v(n);
                      }));
                return (
                  r(t),
                  function (e) {
                    if (e) {
                      if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                      r((t = e));
                    } else o();
                  }
                );
              }
              t.exports = function (t, e) {
                if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
                  throw new Error('The style-loader cannot be used in a non-browser environment');
                ((e = e || {}).attrs = 'object' == typeof e.attrs ? e.attrs : {}),
                  e.singleton || 'boolean' == typeof e.singleton || (e.singleton = a()),
                  e.insertInto || (e.insertInto = 'head'),
                  e.insertAt || (e.insertAt = 'bottom');
                var n = h(t, e);
                return (
                  d(n, e),
                  function (t) {
                    for (var r = [], o = 0; o < n.length; o++) {
                      var a = n[o];
                      (s = i[a.id]).refs--, r.push(s);
                    }
                    for (t && d(h(t, e), e), o = 0; o < r.length; o++) {
                      var s;
                      if (0 === (s = r[o]).refs) {
                        for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                        delete i[s.id];
                      }
                    }
                  }
                );
              };
              var b,
                x =
                  ((b = []),
                  function (t, e) {
                    return (b[t] = e), b.filter(Boolean).join('\n');
                  });
              function w(t, e, n, r) {
                var o = n ? '' : r.css;
                if (t.styleSheet) t.styleSheet.cssText = x(e, o);
                else {
                  var i = document.createTextNode(o),
                    a = t.childNodes;
                  a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
                }
              }
              function C(t, e) {
                var n = e.css,
                  r = e.media;
                if ((r && t.setAttribute('media', r), t.styleSheet)) t.styleSheet.cssText = n;
                else {
                  for (; t.firstChild; ) t.removeChild(t.firstChild);
                  t.appendChild(document.createTextNode(n));
                }
              }
              function P(t, e, n) {
                var r = n.css,
                  o = n.sourceMap,
                  i = void 0 === e.convertToAbsoluteUrls && o;
                (e.convertToAbsoluteUrls || i) && (r = f(r)),
                  o && (r += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + ' */');
                var a = new Blob([r], {type: 'text/css'}),
                  s = t.href;
                (t.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
              }
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(0);
              e.getContribConfig = function (t, e, n, o) {
                return r.KalturaPlayerUtils.getPlayerConfig(t, 'contrib.' + e, n, o);
              };
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
                })(n(53));
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(0).getContribLogger({module: 'contrib-ui', class: 'PresetsUtils'}),
                o = (function () {
                  function t() {}
                  return (
                    (t.groupPresetAreasByType = function (t) {
                      var e = t.presetAreasMapping,
                        n = t.acceptableTypes,
                        o = {};
                      return (
                        n.forEach(function (t) {
                          return (o[t] = {});
                        }),
                        Object.keys(e).forEach(function (t) {
                          Object.keys(e[t]).forEach(function (i) {
                            -1 === n.indexOf(i)
                              ? r.warn(
                                  "Unknown preset area type '" +
                                    i +
                                    "' provided, ignoring specific type mapping. Acceptable values are '" +
                                    n.join(', '),
                                  {}
                                )
                              : (o[i][t] = e[t][i]);
                          });
                        }),
                        o
                      );
                    }),
                    t
                  );
                })();
              e.PresetsUtils = o;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  (t.MediaLoaded = 'MediaLoaded'), (t.OnDemand = 'OnDemand'), (t.Immediate = 'Immediate'), (t.FirstPlay = 'FirstPlay');
                })(e.FloatingUIModes || (e.FloatingUIModes = {})),
                (function (t) {
                  (t.VideoArea = 'VideoArea'), (t.PresetArea = 'PresetArea'), (t.InteractiveArea = 'InteractiveArea');
                })(e.FloatingPositions || (e.FloatingPositions = {}));
            },
            function (t, e, n) {
              'use strict';
              t.exports = function (t, e) {
                return (
                  e || (e = {}),
                  'string' != typeof (t = t && t.__esModule ? t.default : t)
                    ? t
                    : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
                      e.hash && (t += e.hash),
                      /["'() \t\n]/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"') : t)
                );
              };
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  (t.AlongSideTheVideo = 'AlongSideTheVideo'), (t.Hidden = 'Hidden'), (t.OverTheVideo = 'OverTheVideo');
                })(e.KitchenSinkExpandModes || (e.KitchenSinkExpandModes = {})),
                (function (t) {
                  (t.Top = 'top'), (t.Left = 'left'), (t.Right = 'right'), (t.Bottom = 'bottom');
                })(e.KitchenSinkPositions || (e.KitchenSinkPositions = {}));
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (e.getPlayerSize = function (t) {
                  return t ? t.dimensions : {width: 0, height: 0};
                }),
                (e.getVideoSize = function (t) {
                  if (!t) return {width: 0, height: 0};
                  var e = t.getActiveTracks().video;
                  return e ? {width: e.width, height: e.height} : {width: 0, height: 0};
                });
            },
            function (t, e, n) {
              'use strict';
              var r =
                  (this && this.__assign) ||
                  function () {
                    return (r =
                      Object.assign ||
                      function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                          for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t;
                      }).apply(this, arguments);
                  },
                o =
                  (this && this.__rest) ||
                  function (t, e) {
                    var n = {};
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
                      var o = 0;
                      for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
                        e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
                    }
                    return n;
                  };
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(0),
                a = n(8),
                s = n(45),
                c = n(1);
              !(function (t) {
                (t.Info = 'Info'), (t.Success = 'Success'), (t.Warn = 'Warn'), (t.Error = 'Error');
              })(e.ToastSeverity || (e.ToastSeverity = {}));
              var u = (function () {
                function t(t) {
                  var e = this;
                  (this.options = t),
                    (this._toasts = []),
                    (this._floatingItem = null),
                    (this._remove = function (t) {
                      var n = e._findToastIndexById(t);
                      -1 !== n &&
                        (clearTimeout(e._toasts[n].timerSubscription),
                        e._toasts.splice(n, 1),
                        e._updateToastsUI(),
                        0 === e._toasts.length && e._removeToastsContainer());
                    }),
                    (this._options = t);
                }
                return (
                  (t.prototype.add = function (t) {
                    var e = t.duration,
                      n = o(t, ['duration']);
                    this._floatingItem || this._addToastsContainer();
                    var a = {toastProps: r(r({}, n), {id: i.UUID.uuidV1(), onClose: this._remove}), duration: e, timerSubscription: null};
                    this._toasts.push(a), this._updateToastsUI(), this._startDurationTimer(a);
                  }),
                  (t.prototype.reset = function () {
                    var t = this;
                    this._toasts.forEach(function (e) {
                      t._remove(e.toastProps.id);
                    });
                  }),
                  (t.prototype._startDurationTimer = function (t) {
                    var e = this;
                    t.timerSubscription = setTimeout(function () {
                      e._remove(t.toastProps.id);
                    }, t.duration);
                  }),
                  (t.prototype._addToastsContainer = function () {
                    var t = this;
                    this._floatingItem = this._options.floatingManager.add({
                      label: 'Toasts',
                      mode: a.FloatingUIModes.Immediate,
                      position: a.FloatingPositions.InteractiveArea,
                      renderContent: function () {
                        return c.h(s.ToastsContainer, {
                          toasts: t._toasts.map(function (t) {
                            return t.toastProps;
                          })
                        });
                      }
                    });
                  }),
                  (t.prototype._removeToastsContainer = function () {
                    this._floatingItem && (this._options.floatingManager.remove(this._floatingItem), (this._floatingItem = null));
                  }),
                  (t.prototype._updateToastsUI = function () {
                    this._floatingItem && this._floatingItem.update();
                  }),
                  (t.prototype._findToastIndexById = function (t) {
                    for (var e = 0; e < this._toasts.length; ) {
                      if (this._toasts[e].toastProps.id === t) return e;
                      e++;
                    }
                    return -1;
                  }),
                  t
                );
              })();
              e.ToastManager = u;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(1),
                o = n(0),
                i = n(8),
                a = n(6),
                s = (function () {
                  function t(t) {
                    var e = this;
                    (this._destroyed = !1),
                      (this._isShown = !1),
                      (this._componentRef = null),
                      (this.remove = function () {
                        e._logger.info('remove item from player', {method: 'remove'}), (e._isShown = !1), e._componentRef && e._componentRef.update();
                      }),
                      (this.add = function () {
                        e._logger.info('add item to player', {method: 'add'}), (e._isShown = !0), e._componentRef && e._componentRef.update();
                      }),
                      (this._handleMediaLoaded = function () {
                        var t = e._options.kalturaPlayer;
                        t.removeEventListener(t.Event.MEDIA_LOADED, e._handleMediaLoaded), e.add();
                      }),
                      (this._handleFirstPlay = function () {
                        var t = e._options.kalturaPlayer;
                        t.removeEventListener(t.Event.FIRST_PLAY, e._handleFirstPlay), e.add();
                      }),
                      (this._options = t),
                      (this._logger = o.getContribLogger({module: 'contrib-ui', class: 'FloatingItem', context: t.data.label})),
                      this._logger.debug('executed', {method: 'constructor', data: {options: t}}),
                      this._logger.info('created item ' + t.data.label, {method: 'constructor'}),
                      this._addPlayerBindings();
                  }
                  return (
                    Object.defineProperty(t.prototype, 'data', {
                      get: function () {
                        return this._options.data;
                      },
                      enumerable: !0,
                      configurable: !0
                    }),
                    (t.prototype.update = function () {
                      this._componentRef && this._componentRef.update();
                    }),
                    (t.prototype.destroy = function () {
                      this._logger.info('destroy item', {method: 'destroy'}), (this._destroyed = !0), this.remove();
                    }),
                    (t.prototype.renderFloatingChild = function (t) {
                      var e = this,
                        n = this._options.data.label;
                      return r.h(a.ManagedComponent, {
                        label: n,
                        renderChildren: function () {
                          return e._options.data.renderContent(t);
                        },
                        isShown: function () {
                          return e._isShown;
                        },
                        ref: function (t) {
                          return (e._componentRef = t);
                        }
                      });
                    }),
                    (t.prototype._addPlayerBindings = function () {
                      var t = this._options,
                        e = t.kalturaPlayer,
                        n = t.data;
                      n.mode === i.FloatingUIModes.MediaLoaded && e.addEventListener(e.Event.MEDIA_LOADED, this._handleMediaLoaded),
                        n.mode === i.FloatingUIModes.FirstPlay && e.addEventListener(e.Event.FIRST_PLAY, this._handleFirstPlay),
                        n.mode === i.FloatingUIModes.Immediate && this.add();
                    }),
                    t
                  );
                })();
              e.FloatingItem = s;
            },
            function (t, e, n) {
              'use strict';
              var r =
                (this && this.__spreadArrays) ||
                function () {
                  for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                  var r = Array(t),
                    o = 0;
                  for (e = 0; e < n; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                  return r;
                };
              Object.defineProperty(e, '__esModule', {value: !0});
              var o,
                i = n(1),
                a = n(57),
                s = n(0),
                c = n(61),
                u = n(7),
                l = n(5);
              !(function (t) {
                (t.PresetResizeEvent = 'PresetResizeEvent'), (t.VideoResizeEvent = 'VideoResizeEvent');
              })((o = e.PresetManagerEventTypes || (e.PresetManagerEventTypes = {})));
              var p = ['PlayerArea'],
                f = {presetAreasMapping: {Playback: {PlayerArea: 'PlayerArea'}, Live: {PlayerArea: 'PlayerArea'}}},
                d = (function () {
                  function t(t) {
                    var e = this;
                    (this._events = new s.EventsManager()),
                      (this._isLocked = !1),
                      (this._items = []),
                      (this._pendingItems = []),
                      (this._registerToPlayer = function (t) {
                        t.addEventListener(KalturaPlayer.ui.EventType.UI_PRESET_RESIZE, e._notifyUIPresetResize),
                          t.addEventListener(KalturaPlayer.ui.EventType.VIDEO_RESIZE, e._notifyVideoResize);
                      }),
                      (this._notifyVideoResize = function () {
                        e._events.emit({type: o.VideoResizeEvent});
                      }),
                      (this._notifyUIPresetResize = function () {
                        e._events.emit({type: o.PresetResizeEvent});
                      }),
                      (this._unregisterToPlayer = function (t) {
                        t.removeEventListener(KalturaPlayer.ui.EventType.UI_PRESET_RESIZE, e._notifyUIPresetResize),
                          t.removeEventListener(KalturaPlayer.ui.EventType.VIDEO_RESIZE, e._notifyVideoResize);
                      }),
                      (this.on = this._events.on.bind(this._events)),
                      (this.off = this._events.off.bind(this._events)),
                      (this._options = t),
                      (this._presetConfig = l.getContribConfig(this._options.kalturaPlayer, 'ui.preset', f, {explicitMerge: ['presetAreasMapping']}));
                    var n = u.PresetsUtils.groupPresetAreasByType({presetAreasMapping: this._presetConfig.presetAreasMapping, acceptableTypes: p});
                    this.add({
                      label: 'preset-manager',
                      presetAreas: n.PlayerArea,
                      shareAdvancedPlayerAPI: !0,
                      renderChild: function () {
                        return i.h(c.UIPlayerAdapter, {onMount: e._registerToPlayer, onUnmount: e._unregisterToPlayer});
                      }
                    });
                  }
                  return (
                    (t.prototype.add = function (t) {
                      if (this._isLocked) return console.warn("cannot add new preset items once player completed its' setup phase"), null;
                      var e = new a.PresetItem({kalturaPlayer: this._options.kalturaPlayer, data: t});
                      this._pendingItems.push(e);
                    }),
                    (t.prototype.lockManager = function () {
                      this._isLocked = !0;
                    }),
                    (t.prototype.registerComponents = function () {
                      var t = [];
                      return (
                        this._pendingItems.forEach(function (e) {
                          t = r(t, e.playerConfig);
                        }),
                        (this._items = r(this._items, this._pendingItems)),
                        (this._pendingItems = []),
                        t.filter(Boolean)
                      );
                    }),
                    t
                  );
                })();
              e.PresetManager = d;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  (t.Playback = 'Playback'), (t.Live = 'Live');
                })(e.ReservedPresetNames || (e.ReservedPresetNames = {})),
                (function (t) {
                  (t.PresetFloating = 'PresetFloating'),
                    (t.BottomBarLeftControls = 'BottomBarLeftControls'),
                    (t.BottomBarRightControls = 'BottomBarRightControls'),
                    (t.TopBarLeftControls = 'TopBarLeftControls'),
                    (t.TopBarRightControls = 'TopBarRightControls'),
                    (t.SidePanelTop = 'SidePanelTop'),
                    (t.SidePanelLeft = 'SidePanelLeft'),
                    (t.SidePanelRight = 'SidePanelRight'),
                    (t.SidePanelBottom = 'SidePanelBottom'),
                    (t.PresetArea = 'PresetArea'),
                    (t.InteractiveArea = 'InteractiveArea'),
                    (t.PlayerArea = 'PlayerArea'),
                    (t.VideoArea = 'VideoArea');
                })(e.ReservedPresetAreas || (e.ReservedPresetAreas = {})),
                (function (t) {
                  (t.Before = 'Before'), (t.After = 'After'), (t.Replace = 'Replace');
                })(e.RelativeToTypes || (e.RelativeToTypes = {}));
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(1),
                o = n(0);
              e.UpperBarItem = function (t) {
                var e = this;
                (this.renderChild = function (t) {
                  var n = e._options.data,
                    o = n.onClick,
                    i = n.renderItem,
                    a = (n.label, i(t));
                  return r.h('div', {onClick: o, className: 'icon--clickable'}, a);
                }),
                  (this._options = t),
                  (this._logger = o.getContribLogger({module: 'contrib-ui', class: 'PresetItem', context: t.data.label})),
                  this._logger.debug('executed', {method: 'constructor', data: {options: t}}),
                  this._logger.info('created item ' + t.data.label, {method: 'constructor'});
              };
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(1),
                o = n(0),
                i = n(6),
                a = n(18),
                s = n(73),
                c = (function () {
                  function t(t) {
                    var e = this;
                    (this._componentRef = null),
                      (this._destroyed = !1),
                      (this._activationStateChange = function (t) {
                        var n = t.item;
                        e === n && e.update();
                      }),
                      (this.renderContentChild = function (t) {
                        if (!e._isDestroyed()) {
                          var n = e._options.data,
                            o = n.renderContent,
                            a = n.label,
                            c = e._options.kitchenSinkConfig;
                          return r.h(i.ManagedComponent, {
                            label: a,
                            fillContainer: !1,
                            renderChildren: function () {
                              return r.h(s.KitchenSink, {children: o(t), isActive: e.isActive(), kitchenSinkConfig: c});
                            },
                            isShown: function () {
                              return !e._destroyed;
                            },
                            ref: function (t) {
                              return (e._componentRef = t);
                            }
                          });
                        }
                      }),
                      (this._options = t),
                      (this._logger = o.getContribLogger({module: 'contrib-ui', class: 'KitchenSinkItem', context: t && t.data && t.data.label})),
                      this._logger.debug('executed', {method: 'constructor', data: {options: t}}),
                      this._logger.info('created item ' + t.data.label, {method: 'constructor'}),
                      this._options.eventManager.on(a.KitchenSinkEventTypes.ItemActiveStateChangeEvent, this._activationStateChange);
                  }
                  return (
                    Object.defineProperty(t.prototype, 'data', {
                      get: function () {
                        if (!this._isDestroyed()) return this._options.data;
                      },
                      enumerable: !0,
                      configurable: !0
                    }),
                    Object.defineProperty(t.prototype, 'displayName', {
                      get: function () {
                        if (!this._isDestroyed()) return this._options.data.label;
                      },
                      enumerable: !0,
                      configurable: !0
                    }),
                    (t.prototype.update = function () {
                      this._isDestroyed() || (this._componentRef && this._componentRef.update());
                    }),
                    (t.prototype.isActive = function () {
                      if (!this._isDestroyed()) return this._options.isActive(this);
                    }),
                    (t.prototype.activate = function () {
                      this._isDestroyed() || this._options.activate(this);
                    }),
                    (t.prototype.deactivate = function () {
                      this._isDestroyed() || this._options.deactivate(this);
                    }),
                    (t.prototype._destroy = function () {
                      this._isDestroyed() ||
                        (this._options.eventManager.off(a.KitchenSinkEventTypes.ItemActiveStateChangeEvent, this._activationStateChange),
                        this.update(),
                        (this._componentRef = null),
                        (this._options = null),
                        (this._destroyed = !0));
                    }),
                    (t.prototype._isDestroyed = function () {
                      return !!this._destroyed && (this._logger.warn("can't perform requested call, item was marked as destroyed", {}), !0);
                    }),
                    t
                  );
                })();
              e.KitchenSinkItem = c;
            },
            function (t, e, n) {
              'use strict';
              var r =
                (this && this.__spreadArrays) ||
                function () {
                  for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                  var r = Array(t),
                    o = 0;
                  for (e = 0; e < n; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                  return r;
                };
              Object.defineProperty(e, '__esModule', {value: !0});
              var o,
                i,
                a = n(1),
                s = n(10),
                c = n(17),
                u = n(0),
                l = n(68),
                p = n(71),
                f = n(6),
                d = n(7),
                h = n(5),
                _ = ['PlayerArea', 'SidePanelRight', 'SidePanelBottom'];
              !(function (t) {
                (t.Active = 'Active'), (t.InActive = 'InActive');
              })((o = e.ItemActiveStates || (e.ItemActiveStates = {}))),
                (function (t) {
                  t.ItemActiveStateChangeEvent = 'ItemActiveStateChangeEvent';
                })((i = e.KitchenSinkEventTypes || (e.KitchenSinkEventTypes = {})));
              var v = {
                  theme: {backgroundColor: 'rgba(0, 0, 0, .7)', blur: '10px'},
                  presetAreasMapping: {
                    Playback: {PlayerArea: 'PlayerArea', SidePanelRight: 'SidePanelRight', SidePanelBottom: 'SidePanelBottom'},
                    Live: {PlayerArea: 'PlayerArea', SidePanelRight: 'SidePanelRight', SidePanelBottom: 'SidePanelBottom'}
                  }
                },
                g = (function () {
                  function t(t) {
                    var e,
                      n = this;
                    (this.options = t),
                      (this._events = new u.EventsManager()),
                      (this._panels =
                        (((e = {})[s.KitchenSinkPositions.Bottom] = {ref: null, items: [], activeItem: null}),
                        (e[s.KitchenSinkPositions.Right] = {ref: null, items: [], activeItem: null}),
                        (e[s.KitchenSinkPositions.Top] = {ref: null, items: [], activeItem: null}),
                        (e[s.KitchenSinkPositions.Left] = {ref: null, items: [], activeItem: null}),
                        e)),
                      (this._kitchenSinkAdapterRef = null),
                      (this.on = this._events.on.bind(this._events)),
                      (this.off = this._events.off.bind(this._events)),
                      (this._toggle = function (t) {
                        n._isActive(t) ? n._deactivateItem(t) : n._activateItem(t);
                      }),
                      (this._activateItem = function (t) {
                        var e = t.data,
                          r = e.position,
                          a = e.expandMode,
                          s = n._panels[r];
                        s.activeItem !== t &&
                          (s.activeItem && n._events.emit({type: i.ItemActiveStateChangeEvent, state: o.InActive, item: s.activeItem}),
                          (s.activeItem = t),
                          n._events.emit({type: i.ItemActiveStateChangeEvent, state: o.Active, item: t}),
                          n._expand(r, a));
                      }),
                      (this._deactivateItem = function (t) {
                        var e = t.data.position,
                          r = n._panels[e];
                        r.activeItem === t &&
                          (n._collapse(e),
                          n._events.emit({type: i.ItemActiveStateChangeEvent, state: o.InActive, item: r.activeItem}),
                          (r.activeItem = null));
                      }),
                      (this._isActive = function (t) {
                        return n._panels[t.data.position].activeItem === t;
                      }),
                      (this._expand = function (t, e) {
                        n._kitchenSinkAdapterRef && n._kitchenSinkAdapterRef.expand(t, e);
                      }),
                      (this._renderChild = function (t) {
                        return a.h(f.ManagedComponent, {
                          label: 'kitchen-sink-manager',
                          renderChildren: function () {
                            return n._renderKitchenSink(t);
                          },
                          isShown: function () {
                            return !0;
                          },
                          ref: function (e) {
                            return (n._panels[t].ref = e);
                          }
                        });
                      }),
                      (this._setRef = function (t) {
                        n._kitchenSinkAdapterRef = t || null;
                      }),
                      (this._options = t),
                      (this._kitchenSinkConfig = h.getContribConfig(this._options.kalturaPlayer, 'ui.kitchenSink', v, {
                        explicitMerge: ['presetAreasMapping']
                      }));
                    var r = d.PresetsUtils.groupPresetAreasByType({
                      presetAreasMapping: this._kitchenSinkConfig.presetAreasMapping,
                      acceptableTypes: _
                    });
                    this.options.presetManager.add({
                      label: 'kitchen-sink-right',
                      fillContainer: !0,
                      presetAreas: r.SidePanelRight,
                      renderChild: this._renderChild.bind(this, s.KitchenSinkPositions.Right)
                    }),
                      this.options.presetManager.add({
                        label: 'kitchen-sink-bottom',
                        fillContainer: !0,
                        presetAreas: r.SidePanelBottom,
                        renderChild: this._renderChild.bind(this, s.KitchenSinkPositions.Bottom)
                      }),
                      this.options.presetManager.add({
                        label: 'kitchen-sink-adapter',
                        shareAdvancedPlayerAPI: !0,
                        presetAreas: r.PlayerArea,
                        renderChild: function () {
                          return a.h(p.KitchenSinkAdapter, {ref: n._setRef});
                        }
                      });
                  }
                  return (
                    (t.prototype.add = function (t) {
                      var e = this,
                        n = {
                          data: t,
                          isActive: this._isActive,
                          activate: this._activateItem,
                          deactivate: this._deactivateItem,
                          eventManager: this._events,
                          kitchenSinkConfig: this._kitchenSinkConfig
                        },
                        r = this._panels[t.position],
                        o = new c.KitchenSinkItem(n),
                        i = this.options.upperBarManager.add({
                          label: t.label,
                          renderItem: t.renderIcon,
                          onClick: function () {
                            return e._toggle(o);
                          }
                        });
                      return r.items.push({kitchenSinkItem: o, upperBarItem: i}), r.ref && r.ref.update(), o;
                    }),
                    (t.prototype.remove = function (t) {
                      var e = this._panels[t.data.position],
                        n = u.ArrayUtils.findIndex(e.items, function (e) {
                          var n = e.kitchenSinkItem;
                          return t === n;
                        });
                      if (-1 !== n) {
                        this._deactivateItem(t);
                        var r = e.items[n].upperBarItem;
                        t._destroy(), this.options.upperBarManager.remove(r), e.items.splice(n, 1), e.ref && e.ref.update();
                      }
                    }),
                    (t.prototype._collapse = function (t) {
                      this._kitchenSinkAdapterRef && this._kitchenSinkAdapterRef.collapse(t);
                    }),
                    (t.prototype._renderKitchenSink = function (t) {
                      var e = this,
                        n = this._panels[t].items.map(function (t) {
                          var n = t.kitchenSinkItem,
                            r = {onClose: e._deactivateItem.bind(e, n)};
                          return n.renderContentChild(r);
                        });
                      return a.h(l.KitchenSinkContainer, null, n);
                    }),
                    (t.prototype.reset = function () {
                      var t = this;
                      r(
                        this._panels[s.KitchenSinkPositions.Bottom].items,
                        this._panels[s.KitchenSinkPositions.Left].items,
                        this._panels[s.KitchenSinkPositions.Top].items,
                        this._panels[s.KitchenSinkPositions.Right].items
                      ).forEach(function (e) {
                        var n = e.kitchenSinkItem;
                        t.remove(n);
                      });
                    }),
                    t
                  );
                })();
              e.KitchenSinkManager = g;
            },
            function (t, e, n) {
              'use strict';
              t.exports = function (t, e) {
                return function () {
                  for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                  return t.apply(e, n);
                };
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(2);
              function o(t) {
                return encodeURIComponent(t)
                  .replace(/%40/gi, '@')
                  .replace(/%3A/gi, ':')
                  .replace(/%24/g, '$')
                  .replace(/%2C/gi, ',')
                  .replace(/%20/g, '+')
                  .replace(/%5B/gi, '[')
                  .replace(/%5D/gi, ']');
              }
              t.exports = function (t, e, n) {
                if (!e) return t;
                var i;
                if (n) i = n(e);
                else if (r.isURLSearchParams(e)) i = e.toString();
                else {
                  var a = [];
                  r.forEach(e, function (t, e) {
                    null != t &&
                      (r.isArray(t) ? (e += '[]') : (t = [t]),
                      r.forEach(t, function (t) {
                        r.isDate(t) ? (t = t.toISOString()) : r.isObject(t) && (t = JSON.stringify(t)), a.push(o(e) + '=' + o(t));
                      }));
                  }),
                    (i = a.join('&'));
                }
                if (i) {
                  var s = t.indexOf('#');
                  -1 !== s && (t = t.slice(0, s)), (t += (-1 === t.indexOf('?') ? '?' : '&') + i);
                }
                return t;
              };
            },
            function (t, e, n) {
              'use strict';
              t.exports = function (t) {
                return !(!t || !t.__CANCEL__);
              };
            },
            function (t, e, n) {
              'use strict';
              (function (e) {
                var r = n(2),
                  o = n(86),
                  i = {'Content-Type': 'application/x-www-form-urlencoded'};
                function a(t, e) {
                  !r.isUndefined(t) && r.isUndefined(t['Content-Type']) && (t['Content-Type'] = e);
                }
                var s,
                  c = {
                    adapter:
                      (((void 0 !== e && '[object process]' === Object.prototype.toString.call(e)) || 'undefined' != typeof XMLHttpRequest) &&
                        (s = n(23)),
                      s),
                    transformRequest: [
                      function (t, e) {
                        return (
                          o(e, 'Accept'),
                          o(e, 'Content-Type'),
                          r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t)
                            ? t
                            : r.isArrayBufferView(t)
                            ? t.buffer
                            : r.isURLSearchParams(t)
                            ? (a(e, 'application/x-www-form-urlencoded;charset=utf-8'), t.toString())
                            : r.isObject(t)
                            ? (a(e, 'application/json;charset=utf-8'), JSON.stringify(t))
                            : t
                        );
                      }
                    ],
                    transformResponse: [
                      function (t) {
                        if ('string' == typeof t)
                          try {
                            t = JSON.parse(t);
                          } catch (t) {}
                        return t;
                      }
                    ],
                    timeout: 0,
                    xsrfCookieName: 'XSRF-TOKEN',
                    xsrfHeaderName: 'X-XSRF-TOKEN',
                    maxContentLength: -1,
                    validateStatus: function (t) {
                      return t >= 200 && t < 300;
                    },
                    headers: {common: {Accept: 'application/json, text/plain, */*'}}
                  };
                r.forEach(['delete', 'get', 'head'], function (t) {
                  c.headers[t] = {};
                }),
                  r.forEach(['post', 'put', 'patch'], function (t) {
                    c.headers[t] = r.merge(i);
                  }),
                  (t.exports = c);
              }.call(this, n(85)));
            },
            function (t, e, n) {
              'use strict';
              var r = n(2),
                o = n(87),
                i = n(20),
                a = n(89),
                s = n(90),
                c = n(24);
              t.exports = function (t) {
                return new Promise(function (e, u) {
                  var l = t.data,
                    p = t.headers;
                  r.isFormData(l) && delete p['Content-Type'];
                  var f = new XMLHttpRequest();
                  if (t.auth) {
                    var d = t.auth.username || '',
                      h = t.auth.password || '';
                    p.Authorization = 'Basic ' + btoa(d + ':' + h);
                  }
                  if (
                    (f.open(t.method.toUpperCase(), i(t.url, t.params, t.paramsSerializer), !0),
                    (f.timeout = t.timeout),
                    (f.onreadystatechange = function () {
                      if (f && 4 === f.readyState && (0 !== f.status || (f.responseURL && 0 === f.responseURL.indexOf('file:')))) {
                        var n = 'getAllResponseHeaders' in f ? a(f.getAllResponseHeaders()) : null,
                          r = {
                            data: t.responseType && 'text' !== t.responseType ? f.response : f.responseText,
                            status: f.status,
                            statusText: f.statusText,
                            headers: n,
                            config: t,
                            request: f
                          };
                        o(e, u, r), (f = null);
                      }
                    }),
                    (f.onabort = function () {
                      f && (u(c('Request aborted', t, 'ECONNABORTED', f)), (f = null));
                    }),
                    (f.onerror = function () {
                      u(c('Network Error', t, null, f)), (f = null);
                    }),
                    (f.ontimeout = function () {
                      u(c('timeout of ' + t.timeout + 'ms exceeded', t, 'ECONNABORTED', f)), (f = null);
                    }),
                    r.isStandardBrowserEnv())
                  ) {
                    var _ = n(91),
                      v = (t.withCredentials || s(t.url)) && t.xsrfCookieName ? _.read(t.xsrfCookieName) : void 0;
                    v && (p[t.xsrfHeaderName] = v);
                  }
                  if (
                    ('setRequestHeader' in f &&
                      r.forEach(p, function (t, e) {
                        void 0 === l && 'content-type' === e.toLowerCase() ? delete p[e] : f.setRequestHeader(e, t);
                      }),
                    t.withCredentials && (f.withCredentials = !0),
                    t.responseType)
                  )
                    try {
                      f.responseType = t.responseType;
                    } catch (e) {
                      if ('json' !== t.responseType) throw e;
                    }
                  'function' == typeof t.onDownloadProgress && f.addEventListener('progress', t.onDownloadProgress),
                    'function' == typeof t.onUploadProgress && f.upload && f.upload.addEventListener('progress', t.onUploadProgress),
                    t.cancelToken &&
                      t.cancelToken.promise.then(function (t) {
                        f && (f.abort(), u(t), (f = null));
                      }),
                    void 0 === l && (l = null),
                    f.send(l);
                });
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(88);
              t.exports = function (t, e, n, o, i) {
                var a = new Error(t);
                return r(a, e, n, o, i);
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(2);
              t.exports = function (t, e) {
                e = e || {};
                var n = {};
                return (
                  r.forEach(['url', 'method', 'params', 'data'], function (t) {
                    void 0 !== e[t] && (n[t] = e[t]);
                  }),
                  r.forEach(['headers', 'auth', 'proxy'], function (o) {
                    r.isObject(e[o])
                      ? (n[o] = r.deepMerge(t[o], e[o]))
                      : void 0 !== e[o]
                      ? (n[o] = e[o])
                      : r.isObject(t[o])
                      ? (n[o] = r.deepMerge(t[o]))
                      : void 0 !== t[o] && (n[o] = t[o]);
                  }),
                  r.forEach(
                    [
                      'baseURL',
                      'transformRequest',
                      'transformResponse',
                      'paramsSerializer',
                      'timeout',
                      'withCredentials',
                      'adapter',
                      'responseType',
                      'xsrfCookieName',
                      'xsrfHeaderName',
                      'onUploadProgress',
                      'onDownloadProgress',
                      'maxContentLength',
                      'validateStatus',
                      'maxRedirects',
                      'httpAgent',
                      'httpsAgent',
                      'cancelToken',
                      'socketPath'
                    ],
                    function (r) {
                      void 0 !== e[r] ? (n[r] = e[r]) : void 0 !== t[r] && (n[r] = t[r]);
                    }
                  ),
                  n
                );
              };
            },
            function (t, e, n) {
              'use strict';
              function r(t) {
                this.message = t;
              }
              (r.prototype.toString = function () {
                return 'Cancel' + (this.message ? ': ' + this.message : '');
              }),
                (r.prototype.__CANCEL__ = !0),
                (t.exports = r);
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (e.scaleVideo = function (t, e, n, r, o) {
                  var i = {width: 0, height: 0, left: 0, top: 0, scaleToTargetWidth: !0};
                  if (t <= 0 || e <= 0 || n <= 0 || r <= 0) return i;
                  var a = n,
                    s = (e * n) / t,
                    c = (t * r) / e,
                    u = r,
                    l = c > n;
                  return (
                    (l = l ? o : !o)
                      ? ((i.width = Math.abs(a)), (i.height = Math.abs(s)), (i.scaleToTargetWidth = !0))
                      : ((i.width = Math.abs(c)), (i.height = Math.abs(u)), (i.scaleToTargetWidth = !1)),
                    (i.left = Math.abs((n - i.width) / 2)),
                    (i.top = Math.abs((r - i.height) / 2)),
                    i
                  );
                });
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(0),
                o = (function () {
                  function t(t) {
                    (this._destroyed = !1),
                      (this._options = t),
                      (this._logger = r.getContribLogger({module: 'contrib-ui', class: 'OverlayItem', context: t.data.label})),
                      this._logger.debug('executed', {method: 'constructor', data: {options: t}}),
                      this._logger.info('created item ' + t.data.label, {method: 'constructor'});
                  }
                  return (
                    Object.defineProperty(t.prototype, 'data', {
                      get: function () {
                        return this._options.data;
                      },
                      enumerable: !0,
                      configurable: !0
                    }),
                    (t.prototype.destroy = function () {
                      this._logger.info('destroy item', {method: 'destroy'}), (this._destroyed = !0);
                    }),
                    (t.prototype.renderOverlayChild = function (t) {
                      return this._destroyed ? null : this._options.data.renderContent(t);
                    }),
                    t
                  );
                })();
              e.OverlayItem = o;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  t.PlayerArea = 'PlayerArea';
                })(e.OverlayPositions || (e.OverlayPositions = {}));
            },
            function (t, e, n) {
              'use strict';
              function r(t) {
                for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
              }
              Object.defineProperty(e, '__esModule', {value: !0}),
                r(n(31)),
                r(n(12)),
                r(n(13)),
                r(n(8)),
                r(n(56)),
                r(n(16)),
                r(n(63)),
                r(n(17)),
                r(n(10)),
                r(n(18)),
                r(n(14)),
                r(n(77)),
                r(n(15)),
                r(n(7)),
                r(n(27)),
                r(n(96)),
                r(n(6)),
                r(n(97)),
                r(n(98)),
                r(n(28)),
                r(n(29)),
                r(n(103));
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r,
                o = n(8),
                i = n(1),
                a = n(32),
                s = n(39),
                c = n(11),
                u = n(5);
              !(function (t) {
                (t.VISIBLE = 'VISIBLE'), (t.HIDDEN = 'HIDDEN');
              })((r = e.VisibilityMode || (e.VisibilityMode = {})));
              var l = {theme: {backgroundColor: 'rgba(0, 0, 0, .7)', blur: '10px'}},
                p = (function () {
                  function t(t) {
                    (this.options = t),
                      (this._floatingItem = null),
                      (this._timerSubscription = void 0),
                      (this._options = t),
                      (this._bannerConfig = u.getContribConfig(this._options.kalturaPlayer, 'ui.banner', l));
                  }
                  return (
                    (t.prototype.add = function (t) {
                      return (
                        this._floatingItem && this.remove(),
                        (this._floatingItem = this._options.floatingManager.add({
                          label: 'Banner',
                          mode: o.FloatingUIModes.Immediate,
                          position: o.FloatingPositions.InteractiveArea,
                          renderContent: this._createRenderBanner(t, {onClose: this._handleCloseEvent.bind(this), theme: this._bannerConfig.theme})
                        })),
                        t.autoClose && this._startDurationTimer(t.duration),
                        this._getState()
                      );
                    }),
                    (t.prototype.remove = function () {
                      this._floatingItem &&
                        (this._timerSubscription && clearTimeout(this._timerSubscription),
                        this._options.floatingManager.remove(this._floatingItem),
                        (this._floatingItem = null));
                    }),
                    (t.prototype.reset = function () {
                      this.remove();
                    }),
                    (t.prototype._createRenderBanner = function (t, e) {
                      var n = t.content,
                        r = t.renderContent,
                        o = e.onClose,
                        c = e.theme;
                      return function (t) {
                        return i.h(s.BannerContainer, {onClose: o, theme: c}, r ? r(n, t) : i.h(a.Banner, {content: n}));
                      };
                    }),
                    (t.prototype._handleCloseEvent = function () {
                      this.remove();
                    }),
                    (t.prototype._startDurationTimer = function (t) {
                      void 0 === t && (t = 6e4), (this._timerSubscription = setTimeout(this.remove.bind(this), Math.max(5e3, t)));
                    }),
                    (t.prototype._getState = function () {
                      var t = c.getPlayerSize(this._options.kalturaPlayer);
                      return {visibilityMode: !t || t.width < 480 ? r.HIDDEN : r.VISIBLE};
                    }),
                    t
                  );
                })();
              e.BannerManager = p;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(33);
              e.Banner = r.Banner;
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(0),
                s = n(34),
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._logger = a.getContribLogger({module: 'contrib-ui', class: 'Banner'})), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.componentDidMount = function () {
                      this._logger.info('mount component', {method: 'componentDidMount'});
                    }),
                    (e.prototype.componentWillUnmount = function () {
                      this._logger.info('unmount component', {method: 'componentWillUnmount'});
                    }),
                    (e.prototype.render = function (t) {
                      var e = t.content,
                        n = e.text,
                        r = e.title,
                        o = void 0 === r ? 'Audience asks:' : r,
                        a = e.icon,
                        c = void 0 === a ? this._defaultIcon() : a;
                      return (
                        this._logger.trace('render component', {method: 'render'}),
                        i.h(
                          'div',
                          {className: s.defaultBannerRoot + ' ' + s.bannerWrapper},
                          i.h('div', {className: s.iconContainer}, i.h('div', {className: s.iconWrapper}, c)),
                          i.h('div', {className: s.bannerBody}, i.h('div', {className: s.title}, o), i.h('div', {className: s.text}, n))
                        )
                      );
                    }),
                    (e.prototype._defaultIcon = function () {
                      return i.h('div', {className: s.iconImage});
                    }),
                    e
                  );
                })(i.Component);
              e.Banner = c;
            },
            function (t, e, n) {
              var r = n(35);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              var r = n(3),
                o = n(9),
                i = n(36),
                a = n(37);
              e = r(!1);
              var s = o(i),
                c = o(a);
              e.push([
                t.i,
                '.contrib_banner__defaultBannerRoot___22jmV{display:flex;max-width:100%;height:100%;transition:all .5s ease;text-align:left}.contrib_banner__bannerWrapper___mb_YB{padding:18px 17px 17px 16px}.contrib_banner__iconContainer___267WI{height:100%;width:64px}.contrib_banner__iconWrapper___37APD{position:relative;height:48px;width:48px;background-color:rgba(255,255,255,0.14);border-radius:50%;transition:all .5s ease}.contrib_banner__iconImage___1V15L{position:absolute;width:32px;height:32px;left:calc(50% - 16px);top:calc(50% - 16px);background-image:url(' +
                  s +
                  ');background-repeat:no-repeat;transition:all .5s ease}.contrib_banner__bannerBody___2zn-E{height:100%;flex:1 1 auto}.contrib_banner__title___2ANuc{opacity:0.9;font-size:14px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:normal;color:#ebebeb}.contrib_banner__text___ZE1kf{opacity:0.9;font-size:24px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1.21;letter-spacing:normal;color:#ffffff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all .5s ease}.playkit-size-md .contrib_banner__bannerWrapper___mb_YB{padding:14px 16px 14px}.playkit-size-md .contrib_banner__iconContainer___267WI{width:44px}.playkit-size-md .contrib_banner__iconWrapper___37APD{height:32px;width:32px}.playkit-size-md .contrib_banner__iconImage___1V15L{width:20px;height:20px;left:calc(50% - 10px);top:calc(50% - 10px);background-image:url(' +
                  c +
                  ')}.playkit-size-md .contrib_banner__bannerBody___2zn-E{flex:1 1 auto}.playkit-size-md .contrib_banner__title___2ANuc{font-size:12px;font-weight:bold;line-height:1.17}.playkit-size-md .contrib_banner__text___ZE1kf{font-size:15px;line-height:1.27}\n',
                ''
              ]),
                (e.locals = {
                  defaultBannerRoot: 'contrib_banner__defaultBannerRoot___22jmV',
                  bannerWrapper: 'contrib_banner__bannerWrapper___mb_YB',
                  iconContainer: 'contrib_banner__iconContainer___267WI',
                  iconWrapper: 'contrib_banner__iconWrapper___37APD',
                  iconImage: 'contrib_banner__iconImage___1V15L',
                  bannerBody: 'contrib_banner__bannerBody___2zn-E',
                  title: 'contrib_banner__title___2ANuc',
                  text: 'contrib_banner__text___ZE1kf'
                }),
                (t.exports = e);
            },
            function (t, e) {
              t.exports =
                "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='32px' height='32px' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 57.1 (83088) - https://sketch.com --%3E %3Ctitle%3EIcons/32/Someone asks%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='Icons/32/Someone-asks' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Group' transform='translate(4.000000, 5.000000)' fill='%23B2D238'%3E %3Cellipse id='Oval' cx='12' cy='5.5' rx='6' ry='5.5'%3E%3C/ellipse%3E %3Cpath d='M12,13 C7.995,13 0,15.01 0,19 L0,20.5 C0,21.325 0.675,22 1.5,22 L22.5,22 C23.325,22 24,21.325 24,20.5 L24,19 C24,15.01 16.005,13 12,13 Z' id='Path'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E";
            },
            function (t, e) {
              t.exports =
                "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 57.1 (83088) - https://sketch.com --%3E %3Ctitle%3EIcons/20/Someone asks%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='Icons/20/Someone-asks' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Group' transform='translate(2.000000, 2.000000)' fill='%23B2D238'%3E %3Ccircle id='Oval' cx='8' cy='4' r='4'%3E%3C/circle%3E %3Cpath d='M8,9 C5.33,9 0,10.5633333 0,13.6666667 L0,14.8333333 C0,15.475 0.45,16 1,16 L15,16 C15.55,16 16,15.475 16,14.8333333 L16,13.6666667 C16,10.5633333 10.67,9 8,9 Z' id='Path'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E";
            },
            function (t, e) {
              t.exports = function (t) {
                var e = 'undefined' != typeof window && window.location;
                if (!e) throw new Error('fixUrls requires window.location');
                if (!t || 'string' != typeof t) return t;
                var n = e.protocol + '//' + e.host,
                  r = n + e.pathname.replace(/\/[^\/]*$/, '/');
                return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
                  var o,
                    i = e
                      .trim()
                      .replace(/^"(.*)"$/, function (t, e) {
                        return e;
                      })
                      .replace(/^'(.*)'$/, function (t, e) {
                        return e;
                      });
                  return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)
                    ? t
                    : ((o = 0 === i.indexOf('//') ? i : 0 === i.indexOf('/') ? n + i : r + i.replace(/^\.\//, '')), 'url(' + JSON.stringify(o) + ')');
                });
              };
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(40);
              e.BannerContainer = r.BannerContainer;
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(0),
                s = n(41),
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._logger = a.getContribLogger({module: 'contrib-ui', class: 'BannerContainer'})), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.componentDidMount = function () {
                      this._logger.info('mount component', {method: 'componentDidMount'});
                    }),
                    (e.prototype.componentWillUnmount = function () {
                      this._logger.info('unmount component', {method: 'componentWillUnmount'});
                    }),
                    (e.prototype.render = function (t) {
                      this._logger.trace('render component', {method: 'render'});
                      var e = this.props.theme,
                        n = e.backgroundColor,
                        r = e.blur;
                      return i.h(
                        'div',
                        {className: s.bannerContainerRoot},
                        i.h(
                          'div',
                          {
                            style: '\n                background-color:' + n + '; \n                backdrop-filter: blur(' + r + ');\n             ',
                            className: s.bannerContainer
                          },
                          i.h('button', {className: s.closeButton, onClick: t.onClose}),
                          this.props.children
                        )
                      );
                    }),
                    e
                  );
                })(i.Component);
              e.BannerContainer = c;
            },
            function (t, e, n) {
              var r = n(42);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              var r = n(3),
                o = n(9),
                i = n(43),
                a = n(44);
              e = r(!1);
              var s = o(i),
                c = o(a);
              e.push([
                t.i,
                '.contrib_banner-container__bannerContainerRoot___2IoYf{position:absolute;max-width:100%;min-width:270px;padding:0 16px 8px;height:88px;bottom:0;left:0;transition:all .5s ease}.contrib_banner-container__bannerContainer___1Ikih{position:relative;width:100%;height:100%;border-radius:4px;transition:all .5s ease}.contrib_banner-container__closeButton___2Ogus{position:absolute;background-color:transparent;padding:0;border:none;top:0;right:0;width:32px;height:32px;background-image:url(' +
                  s +
                  ');background-repeat:no-repeat}.contrib_banner-container__closeButton___2Ogus:hover,.contrib_banner-container__closeButton___2Ogus:active{cursor:pointer}.playkit-size-md .contrib_banner-container__bannerContainerRoot___2IoYf{height:68px;min-width:230px}.playkit-size-md .contrib_banner-container__closeButton___2Ogus{top:8px;right:8px;width:10px;height:10px;background-image:url(' +
                  c +
                  ')}.playkit-size-sm .contrib_banner-container__bannerContainerRoot___2IoYf,.playkit-size-xs .contrib_banner-container__bannerContainerRoot___2IoYf,.playkit-size-ty .contrib_banner-container__bannerContainerRoot___2IoYf{display:none;width:0;height:0}\n',
                ''
              ]),
                (e.locals = {
                  bannerContainerRoot: 'contrib_banner-container__bannerContainerRoot___2IoYf',
                  bannerContainer: 'contrib_banner-container__bannerContainer___1Ikih',
                  closeButton: 'contrib_banner-container__closeButton___2Ogus'
                }),
                (t.exports = e);
            },
            function (t, e) {
              t.exports =
                "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='32px' height='32px' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 57.1 (83088) - https://sketch.com --%3E %3Ctitle%3EIcons/32x32/Menu Player Close%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='Icons/32x32/Menu-Player-Close' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cpath d='M17.4142136,16 L22.363961,20.9497475 C22.7544853,21.3402718 22.7544853,21.9734367 22.363961,22.363961 C21.9734367,22.7544853 21.3402718,22.7544853 20.9497475,22.363961 L16,17.4142136 L11.0502525,22.363961 C10.6597282,22.7544853 10.0265633,22.7544853 9.63603897,22.363961 C9.24551468,21.9734367 9.24551468,21.3402718 9.63603897,20.9497475 L14.5857864,16 L9.63603897,11.0502525 C9.24551468,10.6597282 9.24551468,10.0265633 9.63603897,9.63603897 C10.0265633,9.24551468 10.6597282,9.24551468 11.0502525,9.63603897 L16,14.5857864 L20.9497475,9.63603897 C21.3402718,9.24551468 21.9734367,9.24551468 22.363961,9.63603897 C22.7544853,10.0265633 22.7544853,10.6597282 22.363961,11.0502525 L17.4142136,16 Z' id='Path' fill='%23FFFFFF'%3E%3C/path%3E %3C/g%3E %3C/svg%3E";
            },
            function (t, e) {
              t.exports =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E %3Cpath fill='%23FFF' fill-rule='evenodd' d='M5.956 5l3.348-3.348A.674.674 0 0 0 9.3.7a.672.672 0 0 0-.952-.004L5 4.044 1.652.696A.674.674 0 0 0 .7.7a.672.672 0 0 0-.004.952L4.044 5 .696 8.348A.674.674 0 0 0 .7 9.3c.265.266.69.266.952.004L5 5.956l3.348 3.348c.262.262.689.26.952-.004a.672.672 0 0 0 .004-.952L5.956 5z' opacity='.9'/%3E %3C/svg%3E";
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(46);
              e.ToastsContainer = r.ToastsContainer;
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  }),
                i =
                  (this && this.__assign) ||
                  function () {
                    return (i =
                      Object.assign ||
                      function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                          for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t;
                      }).apply(this, arguments);
                  };
              Object.defineProperty(e, '__esModule', {value: !0});
              var a = n(1),
                s = n(47),
                c = n(51),
                u = (function (t) {
                  function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                  }
                  return (
                    o(e, t),
                    (e.prototype.render = function () {
                      return a.h(
                        'div',
                        {className: c.toastsContainer},
                        this.props.toasts.map(function (t) {
                          return a.h('div', {className: c.toastRow, key: t.id}, a.h(s.Toast, i({}, t)));
                        })
                      );
                    }),
                    e
                  );
                })(a.Component);
              e.ToastsContainer = u;
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(48),
                s = n(12),
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (
                      (e.state = {isShown: !0}),
                      (e._onClick = function (t) {
                        e.props.onClick(), e._onClose(t);
                      }),
                      (e._onClose = function (t) {
                        t.stopPropagation(), e.setState({isShown: !1}), e.props.onClose(e.props.id);
                      }),
                      e
                    );
                  }
                  return (
                    o(e, t),
                    (e.prototype._getToastSeverityClass = function () {
                      switch (this.props.severity) {
                        case s.ToastSeverity.Success:
                          return a.successToast;
                        case s.ToastSeverity.Warn:
                          return a.warnToast;
                        case s.ToastSeverity.Error:
                          return a.errorToast;
                        default:
                          return a.infoToast;
                      }
                    }),
                    (e.prototype.render = function () {
                      var t = this.props,
                        e = t.text,
                        n = t.title,
                        r = t.icon;
                      return i.h(
                        'div',
                        {className: a.toastWrapper + ' ' + this._getToastSeverityClass(), onClick: this._onClick},
                        i.h('button', {className: a.closeButton, onClick: this._onClose}),
                        i.h('div', {className: a.title}, n),
                        i.h(
                          'div',
                          {className: a.toastBody},
                          i.h('div', {className: a.iconContainer}, i.h('div', {className: a.iconWrapper}, r)),
                          i.h('div', {className: a.text}, e)
                        )
                      );
                    }),
                    e
                  );
                })(i.Component);
              e.Toast = c;
            },
            function (t, e, n) {
              var r = n(49);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              var r = n(3),
                o = n(9),
                i = n(50);
              e = r(!1);
              var a = o(i);
              e.push([
                t.i,
                '.contrib_toast__toastWrapper___13nwj{position:relative;min-width:120px;max-width:264px;height:100%;border-radius:4px;background-color:#222222;border-left-style:solid;border-left-width:4px;text-align:left}.contrib_toast__infoToast___wbiMt{border-left-color:#01ACCD}.contrib_toast__successToast___3qUoL{border-left-color:#009E48}.contrib_toast__warnToast___2YCj0{border-left-color:#F9A71B}.contrib_toast__errorToast___1HkI7{border-left-color:#E7585D}.contrib_toast__closeButton___2OCRS{position:absolute;background-color:transparent;top:0;right:0;width:16px;height:16px;object-fit:contain;background-repeat:no-repeat;border:none;background-image:url(' +
                  a +
                  ')}.contrib_toast__closeButton___2OCRS:hover{cursor:pointer}.contrib_toast__title___2sa8e{font-size:12px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1.17;letter-spacing:normal;color:#cccccc;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-top:4px;padding-right:16px;padding-left:12px}.contrib_toast__toastBody___2JmKS{position:relative;width:100%;padding:2px 16px 5px 12px}.contrib_toast__iconContainer___3jews{position:relative;height:16px;width:16px;float:left;margin-right:7px}.contrib_toast__iconWrapper___hk-61{height:16px;width:16px}.contrib_toast__text___3T2jm{font-size:14px;font-weight:bold;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#cccccc;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n',
                ''
              ]),
                (e.locals = {
                  toastWrapper: 'contrib_toast__toastWrapper___13nwj',
                  infoToast: 'contrib_toast__infoToast___wbiMt',
                  successToast: 'contrib_toast__successToast___3qUoL',
                  warnToast: 'contrib_toast__warnToast___2YCj0',
                  errorToast: 'contrib_toast__errorToast___1HkI7',
                  closeButton: 'contrib_toast__closeButton___2OCRS',
                  title: 'contrib_toast__title___2sa8e',
                  toastBody: 'contrib_toast__toastBody___2JmKS',
                  iconContainer: 'contrib_toast__iconContainer___3jews',
                  iconWrapper: 'contrib_toast__iconWrapper___hk-61',
                  text: 'contrib_toast__text___3T2jm'
                }),
                (t.exports = e);
            },
            function (t, e) {
              t.exports =
                "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 57.1 (83088) - https://sketch.com --%3E %3Ctitle%3EIcons/16/Close%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='Icons/16/Close' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cpath d='M8.8497789,8 L11.824005,10.9742261 C12.058665,11.2088861 12.058665,11.5893451 11.824005,11.824005 C11.5893451,12.058665 11.2088861,12.058665 10.9742261,11.824005 L8,8.8497789 L5.02577387,11.824005 C4.7911139,12.058665 4.41065493,12.058665 4.17599497,11.824005 C3.94133501,11.5893451 3.94133501,11.2088861 4.17599497,10.9742261 L7.1502211,8 L4.17599497,5.02577387 C3.94133501,4.7911139 3.94133501,4.41065493 4.17599497,4.17599497 C4.41065493,3.94133501 4.7911139,3.94133501 5.02577387,4.17599497 L8,7.1502211 L10.9742261,4.17599497 C11.2088861,3.94133501 11.5893451,3.94133501 11.824005,4.17599497 C12.058665,4.41065493 12.058665,4.7911139 11.824005,5.02577387 L8.8497789,8 Z' id='Path' fill='%23cccccc'%3E%3C/path%3E %3C/g%3E %3C/svg%3E";
            },
            function (t, e, n) {
              var r = n(52);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              (e = n(3)(!1)).push([
                t.i,
                '.contrib_toasts-container__toastsContainer___3_pjR{position:absolute;right:0;top:0;padding:8px 16px 0;min-width:120px;max-width:264px;display:flex;flex-direction:column}.contrib_toasts-container__toastRow___1Bvvu{height:42px;min-width:120px;max-width:264px;margin-bottom:8px;overflow:hidden;overflow-wrap:break-word;text-overflow:ellipsis;align-self:flex-end}\n',
                ''
              ]),
                (e.locals = {
                  toastsContainer: 'contrib_toasts-container__toastsContainer___3_pjR',
                  toastRow: 'contrib_toasts-container__toastRow___1Bvvu'
                }),
                (t.exports = e);
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(0),
                s = n(54),
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._logger = null), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.update = function () {
                      this.setState(function (t) {
                        return {toggler: !t.toggler};
                      });
                    }),
                    (e.prototype.componentDidMount = function () {
                      (this._logger = a.getContribLogger({module: 'contrib-ui', class: 'ManagedComponent', context: this.props.label})),
                        this._logger.info('mount component', {method: 'componentDidMount'}),
                        this.setState({toggler: !1});
                    }),
                    (e.prototype.render = function () {
                      var t = this.props,
                        e = t.fillContainer;
                      return (0, t.isShown)()
                        ? (this._logger && this._logger.trace('render component', {method: 'render'}),
                          i.h('div', {'data-contrib-item': this.props.label, className: e ? s.fillContainer : ''}, this.props.renderChildren()))
                        : null;
                    }),
                    (e.defaultProps = {fillContainer: !1}),
                    e
                  );
                })(i.Component);
              e.ManagedComponent = c;
            },
            function (t, e, n) {
              var r = n(55);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              (e = n(3)(!1)).push([t.i, '.contrib_managed-component__fill-container___YAWro{width:100%;height:100%}\n', '']),
                (e.locals = {
                  'fill-container': 'contrib_managed-component__fill-container___YAWro',
                  fillContainer: 'contrib_managed-component__fill-container___YAWro'
                }),
                (t.exports = e);
            },
            function (t, e, n) {
              'use strict';
              var r =
                  (this && this.__assign) ||
                  function () {
                    return (r =
                      Object.assign ||
                      function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                          for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t;
                      }).apply(this, arguments);
                  },
                o =
                  (this && this.__spreadArrays) ||
                  function () {
                    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                    var r = Array(t),
                      o = 0;
                    for (e = 0; e < n; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                    return r;
                  };
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(13),
                a = n(8),
                s = n(14),
                c = n(1),
                u = n(11),
                l = n(6),
                p = n(7),
                f = n(5),
                d = {
                  presetAreasMapping: {
                    Playback: {VideoArea: 'VideoArea', PresetArea: 'PresetArea', InteractiveArea: 'InteractiveArea'},
                    Live: {VideoArea: 'VideoArea', PresetArea: 'PresetArea', InteractiveArea: 'InteractiveArea'}
                  }
                },
                h = ['VideoArea', 'PresetArea', 'InteractiveArea'],
                _ = (function () {
                  function t(t) {
                    var e,
                      n,
                      r = this;
                    (this._options = t),
                      (this._items =
                        (((e = {})[a.FloatingPositions.VideoArea] = []),
                        (e[a.FloatingPositions.InteractiveArea] = []),
                        (e[a.FloatingPositions.PresetArea] = []),
                        e)),
                      (this._componentRef =
                        (((n = {})[a.FloatingPositions.InteractiveArea] = null),
                        (n[a.FloatingPositions.VideoArea] = null),
                        (n[a.FloatingPositions.PresetArea] = null),
                        n)),
                      (this._cache = {canvas: {playerSize: {width: 0, height: 0}, videoSize: {width: 0, height: 0}}}),
                      (this._renderItems = function (t) {
                        var e = r._getRendererProps({});
                        return r._items[t].map(function (t) {
                          return t.renderFloatingChild(e);
                        });
                      }),
                      (this._renderChild = function (t) {
                        return c.h(l.ManagedComponent, {
                          label: 'floating-manager',
                          renderChildren: function () {
                            return r._renderItems(t);
                          },
                          isShown: function () {
                            return !0;
                          },
                          ref: function (e) {
                            return (r._componentRef[t] = e);
                          }
                        });
                      }),
                      (this._floatingConfig = f.getContribConfig(this._options.kalturaPlayer, 'ui.floating', d, {
                        explicitMerge: ['presetAreasMapping']
                      }));
                    var o = p.PresetsUtils.groupPresetAreasByType({presetAreasMapping: this._floatingConfig.presetAreasMapping, acceptableTypes: h});
                    Object.keys(o).forEach(function (t) {
                      r._options.presetManager.add({
                        label: 'floating-manager',
                        presetAreas: o[t],
                        renderChild: function () {
                          return r._renderChild(a.FloatingPositions[t]);
                        }
                      });
                    }),
                      this._addPlayerBindings(),
                      this._updateCachedCanvas();
                  }
                  return (
                    (t.prototype.add = function (t) {
                      var e = this._options.presetManager,
                        n = r(r({presetManager: e}, this._options), {data: t}),
                        o = new i.FloatingItem(n);
                      return this._items[t.position].push(o), o;
                    }),
                    (t.prototype.remove = function (t) {
                      var e = this._items[t.data.position],
                        n = e.indexOf(t);
                      n > -1 ? (e[n].destroy(), e.splice(n, 1)) : console.warn("couldn't remove " + t + " since it wasn't found");
                    }),
                    (t.prototype.reset = function () {
                      o(this._items.VideoArea, this._items.InteractiveArea, this._items.PresetArea).forEach(function (t) {
                        try {
                          t.destroy();
                        } catch (t) {
                          console.warn(t);
                        }
                      }),
                        (this._items.VideoArea = []),
                        (this._items.PresetArea = []),
                        (this._items.InteractiveArea = []);
                    }),
                    (t.prototype._getRendererProps = function (t) {
                      var e = this._options.kalturaPlayer;
                      return {currentTime: void 0 !== t.currentTime ? t.currentTime : 1e3 * e.currentTime, canvas: this._cache.canvas};
                    }),
                    (t.prototype._updateCachedCanvas = function () {
                      this._cache.canvas = {
                        playerSize: u.getPlayerSize(this._options.kalturaPlayer),
                        videoSize: u.getVideoSize(this._options.kalturaPlayer)
                      };
                    }),
                    (t.prototype._updateComponents = function () {
                      this._componentRef.InteractiveArea && this._componentRef.InteractiveArea.update(),
                        this._componentRef.PresetArea && this._componentRef.PresetArea.update(),
                        this._componentRef.VideoArea && this._componentRef.VideoArea.update();
                    }),
                    (t.prototype._addPlayerBindings = function () {
                      var t = this,
                        e = this._options.kalturaPlayer;
                      e.addEventListener(e.Event.TIME_UPDATE, function () {
                        t._updateComponents();
                      }),
                        e.addEventListener(e.Event.MEDIA_LOADED, function () {
                          t._updateCachedCanvas(), t._updateComponents();
                        }),
                        this._options.presetManager.on(s.PresetManagerEventTypes.VideoResizeEvent, function () {
                          t._updateCachedCanvas(), t._updateComponents();
                        }),
                        this._options.presetManager.on(s.PresetManagerEventTypes.PresetResizeEvent, function () {
                          t._updateCachedCanvas(), t._updateComponents();
                        });
                    }),
                    t
                  );
                })();
              e.FloatingManager = _;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(0),
                o = n(15),
                i = n(58),
                a = n(1),
                s = KalturaPlayer.ui.preact.h,
                c = (function () {
                  function t(t) {
                    var e = this;
                    (this._element = null),
                      (this._render = function () {
                        if (e._options.data.shareAdvancedPlayerAPI) return e._options.data.renderChild();
                        var t = e._options.data,
                          n = t.label,
                          r = t.fillContainer;
                        return s(i.InjectedComponent, {label: n, fillContainer: r || !1, onCreate: e._onCreate, onDestroy: e._onDestroy});
                      }),
                      (this._onDestroy = function (t) {
                        t.parent
                          ? e._element
                            ? (e._logger.info('remove injected contrib preset component', {method: '_onDestroy'}),
                              (e._element = a.render(null, t.parent)))
                            : e._logger.warn('missing injected component reference, aborting element removal', {method: '_onDestroy'})
                          : e._logger.warn('missing parent argument, aborting element removal', {method: '_onDestroy'});
                      }),
                      (this._onCreate = function (t) {
                        try {
                          if (!t.parent) return void e._logger.warn('missing parent argument, aborting element creation', {method: '_create'});
                          var n = e._options.data.renderChild();
                          if (!n)
                            return void e._logger.warn('child renderer result is invalid, expected element got undefined|null', {method: '_create'});
                          e._logger.info('inject contrib preset component', {method: '_create'}), (e._element = a.render(n, t.parent));
                        } catch (t) {
                          e._logger.error('failed to create injected component.', {method: '_onCreate'});
                        }
                      }),
                      (this._options = t),
                      (this._logger = r.getContribLogger({module: 'contrib-ui', class: 'PresetItem', context: t.data.label})),
                      this._logger.debug('executed', {method: 'constructor', data: {options: t}}),
                      this._logger.info('created item ' + t.data.label, {method: 'constructor'});
                  }
                  return (
                    Object.defineProperty(t.prototype, 'playerConfig', {
                      get: function () {
                        var t = [];
                        for (var e in this._options.data.presetAreas) {
                          var n = this._options.data.presetAreas[e],
                            r = this._options.data.relativeTo;
                          if (n) {
                            var i = {label: this._options.data.label, presets: [e], container: n, get: this._render};
                            if (r)
                              switch (r.type) {
                                case o.RelativeToTypes.After:
                                  i.afterComponent = r.name;
                                  break;
                                case o.RelativeToTypes.Before:
                                  i.beforeComponent = r.name;
                                  break;
                                case o.RelativeToTypes.Replace:
                                  i.replaceComponent = r.name;
                              }
                            t.push(i);
                          } else
                            this._logger.warn(
                              'Cannot register component to core player using the preset manager for preset ' +
                                e +
                                '. preset area name is missing. Ignoring this request.',
                              {method: 'playerConfig'}
                            );
                        }
                        return t;
                      },
                      enumerable: !0,
                      configurable: !0
                    }),
                    t
                  );
                })();
              e.PresetItem = c;
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(59),
                a = n(0).getContribLogger({module: 'contrib-ui', class: 'InjectedComponent'}),
                s = KalturaPlayer.ui.preact.h,
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._root = null), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.shouldComponentUpdate = function () {
                      return !1;
                    }),
                    (e.prototype.componentDidMount = function () {
                      var t = this.props,
                        e = t.onCreate,
                        n = t.label;
                      if (e) {
                        var r = this._root;
                        r
                          ? (a.debug('inject component', {data: {label: n}}), e({parent: r}))
                          : a.warn('Cannot inject item, ailed to create parent component', {data: {label: n}});
                      } else a.warn("Cannot inject item, missing 'onCreate' method", {data: {label: n}});
                    }),
                    (e.prototype.componentWillUnmount = function () {
                      var t = this.props,
                        e = t.onDestroy,
                        n = t.label,
                        r = this._root;
                      r && e && (e({parent: r}), a.debug('destroy injected component', {data: {label: n}}));
                    }),
                    (e.prototype.render = function () {
                      var t = this,
                        e = this.props,
                        n = e.label,
                        r = e.fillContainer ? i.fillContainer : '';
                      return s('div', {
                        'data-contrib-injected': n,
                        className: r,
                        ref: function (e) {
                          return (t._root = e);
                        }
                      });
                    }),
                    e
                  );
                })(KalturaPlayer.ui.preact.Component);
              e.InjectedComponent = c;
            },
            function (t, e, n) {
              var r = n(60);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              (e = n(3)(!1)).push([t.i, '.contribinjected-component__fill-container___8St9r{width:100%;height:100%;overflow:hidden}\n', '']),
                (e.locals = {
                  'fill-container': 'contribinjected-component__fill-container___8St9r',
                  fillContainer: 'contribinjected-component__fill-container___8St9r'
                }),
                (t.exports = e);
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
                })(n(62));
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  }),
                i =
                  (this && this.__decorate) ||
                  function (t, e, n, r) {
                    var o,
                      i = arguments.length,
                      a = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else for (var s = t.length - 1; s >= 0; s--) (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a;
                  };
              Object.defineProperty(e, '__esModule', {value: !0});
              var a = n(0),
                s =
                  (KalturaPlayer.ui.preact.h,
                  (function (t) {
                    function e() {
                      var e = (null !== t && t.apply(this, arguments)) || this;
                      return (e._logger = null), e;
                    }
                    return (
                      o(e, t),
                      (e.prototype.componentDidMount = function () {
                        (this._logger = a.getContribLogger({module: 'contrib-ui', class: 'UIPlayerAdapter'})),
                          this._logger.info('mount component', {method: 'componentDidMount'}),
                          this.props.onMount(this.props.player);
                      }),
                      (e.prototype.componentWillUnmount = function () {
                        this.props.onUnmount(this.props.player),
                          this._logger && this._logger.info('unmount component', {method: 'componentWillUnmount'});
                      }),
                      (e.prototype.render = function (t) {
                        return null;
                      }),
                      (e.defaultProps = {player: null}),
                      i([KalturaPlayer.ui.components.withPlayer], e)
                    );
                  })(KalturaPlayer.ui.preact.Component));
              e.UIPlayerAdapter = s;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(1),
                o = n(16),
                i = n(64),
                a = n(0),
                s = n(6),
                c = n(7),
                u = n(5),
                l = {
                  presetAreasMapping: {Playback: {TopBarRightControls: 'TopBarRightControls'}, Live: {TopBarRightControls: 'TopBarRightControls'}}
                },
                p = ['TopBarRightControls'],
                f = (function () {
                  function t(t) {
                    var e = this;
                    (this._items = []),
                      (this._renderChild = function () {
                        return r.h(s.ManagedComponent, {
                          label: 'upper-bar-manager',
                          renderChildren: function () {
                            return e._renderItems();
                          },
                          isShown: function () {
                            return !0;
                          },
                          ref: function (t) {
                            return (e._rootElement = t);
                          }
                        });
                      }),
                      (this._renderItems = function () {
                        var t = e._items.map(function (t) {
                          return t.renderChild({});
                        });
                        return r.h(i.UpperBar, null, t);
                      }),
                      (this._options = t),
                      (this._upperBarConfig = u.getContribConfig(this._options.kalturaPlayer, 'ui.upperBar', l, {
                        explicitMerge: ['presetAreasMapping']
                      }));
                    var n = c.PresetsUtils.groupPresetAreasByType({presetAreasMapping: this._upperBarConfig.presetAreasMapping, acceptableTypes: p});
                    this._options.presetManager.add({label: 'upper-bar-manager', presetAreas: n.TopBarRightControls, renderChild: this._renderChild});
                  }
                  return (
                    (t.prototype.add = function (t) {
                      var e = {kalturaPlayer: this._options.kalturaPlayer, data: t},
                        n = new o.UpperBarItem(e);
                      return this._items.push(n), this._rootElement && this._rootElement.update(), n;
                    }),
                    (t.prototype.remove = function (t) {
                      var e = a.ArrayUtils.findIndex(this._items, function (e) {
                        return e === t;
                      });
                      -1 !== e && (this._items.splice(e, 1), this._rootElement && this._rootElement.update());
                    }),
                    (t.prototype.reset = function () {
                      var t = this;
                      this._items.forEach(function (e) {
                        t.remove(e);
                      });
                    }),
                    t
                  );
                })();
              e.UpperBarManager = f;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(65);
              e.UpperBar = r.UpperBar;
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(66),
                s = n(0),
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._logger = null), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.componentDidMount = function () {
                      (this._logger = s.getContribLogger({module: 'contrib-ui', class: 'UpperBar'})),
                        this._logger.info('mount component', {method: 'componentDidMount'});
                    }),
                    (e.prototype.componentWillUnmount = function () {
                      this._logger && this._logger.info('unmount component', {method: 'componentWillUnmount'});
                    }),
                    (e.prototype.render = function (t) {
                      return (
                        this._logger && this._logger.trace('render component', {method: 'render'}),
                        i.h('div', {className: a.root}, this.props.children)
                      );
                    }),
                    e
                  );
                })(i.Component);
              e.UpperBar = c;
            },
            function (t, e, n) {
              var r = n(67);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              (e = n(3)(!1)).push([
                t.i,
                '.contrib_upper-bar__root___3mSFN{display:flex;flex-direction:row}.contrib_upper-bar__root___3mSFN .icon--clickable{cursor:pointer}.contrib_upper-bar__root___3mSFN>*{margin-left:10px}\n',
                ''
              ]),
                (e.locals = {root: 'contrib_upper-bar__root___3mSFN'}),
                (t.exports = e);
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(69),
                s = n(0),
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._logger = null), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.componentDidMount = function () {
                      (this._logger = s.getContribLogger({module: 'contrib-ui', class: 'KitchenSinkContainer'})),
                        this._logger.info('mount component', {method: 'componentDidMount'});
                    }),
                    (e.prototype.componentWillUnmount = function () {
                      this._logger && this._logger.info('unmount component', {method: 'componentWillUnmount'});
                    }),
                    (e.prototype.render = function (t) {
                      return (
                        this._logger && this._logger.trace('render component', {method: 'render'}),
                        i.h('div', {className: a.root}, this.props.children)
                      );
                    }),
                    (e.defaultProps = {updateSidePanelMode: function () {}}),
                    e
                  );
                })(i.Component);
              e.KitchenSinkContainer = c;
            },
            function (t, e, n) {
              var r = n(70);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              (e = n(3)(!1)).push([
                t.i,
                '.contrib_kitchen-sink-container__root___24sro{width:100%;height:100%}.playkit-side-panel-content>div{width:100%;height:100%}\n',
                ''
              ]),
                (e.locals = {root: 'contrib_kitchen-sink-container__root___24sro'}),
                (t.exports = e);
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
                })(n(72));
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  }),
                i =
                  (this && this.__decorate) ||
                  function (t, e, n, r) {
                    var o,
                      i = arguments.length,
                      a = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else for (var s = t.length - 1; s >= 0; s--) (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a;
                  };
              Object.defineProperty(e, '__esModule', {value: !0});
              var a,
                s,
                c = n(0),
                u = n(10);
              KalturaPlayer.ui.preact.h,
                (function (t) {
                  (t.Left = 'LEFT'), (t.Top = 'TOP'), (t.Bottom = 'BOTTOM'), (t.Right = 'RIGHT');
                })((a = e.SidePanelPositions || (e.SidePanelPositions = {}))),
                (function (t) {
                  (t.AlongSideTheVideo = 'ALONG_SIDE_THE_VIDEO'), (t.Hidden = 'HIDDEN'), (t.OverTheVideo = 'OVER_THE_VIDEO');
                })((s = e.SidePanelModes || (e.SidePanelModes = {})));
              var l = function (t) {
                  return {sidePanelsModes: t.shell.sidePanelsModes};
                },
                p = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._logger = null), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.componentDidMount = function () {
                      (this._logger = c.getContribLogger({module: 'contrib-ui', class: 'KitchenSinkAdapter'})),
                        this._logger.info('mount component', {method: 'componentDidMount'});
                    }),
                    (e.prototype.componentWillUnmount = function () {
                      this._logger && this._logger.info('unmount component', {method: 'componentWillUnmount'});
                    }),
                    (e.prototype.expand = function (t, e) {
                      this.props.updateSidePanelMode(this._convertToAdapterPositionEnum(t), this._convertToAdapterModeEnum(e));
                    }),
                    (e.prototype.getSidePanelMode = function (t) {
                      return this.props.sidePanelsModes
                        ? this._convertToKitchenSinkModeEnum(this.props.sidePanelsModes[this._convertToAdapterPositionEnum(t)])
                        : u.KitchenSinkExpandModes.Hidden;
                    }),
                    (e.prototype.collapse = function (t) {
                      this.props.updateSidePanelMode(this._convertToAdapterPositionEnum(t), s.Hidden);
                    }),
                    (e.prototype.render = function (t) {
                      return null;
                    }),
                    (e.prototype._convertToAdapterPositionEnum = function (t) {
                      return t === u.KitchenSinkPositions.Top
                        ? a.Top
                        : t === u.KitchenSinkPositions.Bottom
                        ? a.Bottom
                        : t === u.KitchenSinkPositions.Right
                        ? a.Right
                        : a.Left;
                    }),
                    (e.prototype._convertToAdapterModeEnum = function (t) {
                      return t === u.KitchenSinkExpandModes.AlongSideTheVideo
                        ? s.AlongSideTheVideo
                        : t === u.KitchenSinkExpandModes.OverTheVideo
                        ? s.OverTheVideo
                        : s.Hidden;
                    }),
                    (e.prototype._convertToKitchenSinkModeEnum = function (t) {
                      return t === s.AlongSideTheVideo
                        ? u.KitchenSinkExpandModes.AlongSideTheVideo
                        : t === s.OverTheVideo
                        ? u.KitchenSinkExpandModes.OverTheVideo
                        : u.KitchenSinkExpandModes.Hidden;
                    }),
                    (e.defaultProps = {updateSidePanelMode: function () {}}),
                    i(
                      [
                        KalturaPlayer.ui.redux.connect(l, KalturaPlayer.ui.utils.bindActions(KalturaPlayer.ui.reducers.shell.actions), null, {
                          forwardRef: !0
                        })
                      ],
                      e
                    )
                  );
                })(KalturaPlayer.ui.preact.Component);
              e.KitchenSinkAdapter = p;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
                })(n(74));
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(0),
                s = n(75),
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._logger = null), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.componentDidMount = function () {
                      (this._logger = a.getContribLogger({module: 'contrib-ui', class: 'KitchenSink'})),
                        this._logger.info('mount component', {method: 'componentDidMount'});
                    }),
                    (e.prototype.componentWillUnmount = function () {
                      this._logger && this._logger.info('unmount component', {method: 'componentWillUnmount'});
                    }),
                    (e.prototype.render = function (t) {
                      this._logger && this._logger.trace('render component', {method: 'render'});
                      var e = this.props.kitchenSinkConfig.theme,
                        n = e.backgroundColor,
                        r = e.blur;
                      return i.h(
                        'div',
                        {className: this._getClass()},
                        i.h('div', {
                          className: s.backgroundLayout,
                          style: '\n                background-color:' + n + '; \n                backdrop-filter: blur(' + r + ');\n             '
                        }),
                        i.h('div', {className: s.children}, this.props.children)
                      );
                    }),
                    (e.prototype._getClass = function () {
                      return s.root + ' ' + (this.props.isActive ? s.active : '');
                    }),
                    (e.defaultProps = {isActive: !1}),
                    e
                  );
                })(i.Component);
              e.KitchenSink = c;
            },
            function (t, e, n) {
              var r = n(76);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              (e = n(3)(!1)).push([
                t.i,
                '.contrib_kitchen-sink__root___3XOC-{position:absolute;top:0;left:0;overflow:hidden;width:100%;height:100%;transition:opacity 500ms ease-in-out;opacity:0;z-index:0}.contrib_kitchen-sink__root___3XOC-.contrib_kitchen-sink__active___7g-Qt{opacity:1;z-index:1}.contrib_kitchen-sink__children___u6ez8{position:absolute;top:0;left:0;overflow:hidden;width:100%;height:100%}.contrib_kitchen-sink__background-layout___3Itev{width:100%;height:100%}\n',
                ''
              ]),
                (e.locals = {
                  root: 'contrib_kitchen-sink__root___3XOC-',
                  active: 'contrib_kitchen-sink__active___7g-Qt',
                  children: 'contrib_kitchen-sink__children___u6ez8',
                  'background-layout': 'contrib_kitchen-sink__background-layout___3Itev',
                  backgroundLayout: 'contrib_kitchen-sink__background-layout___3Itev'
                }),
                (t.exports = e);
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(78),
                o = n(0),
                i = n(5),
                a = o.getContribLogger({module: 'ui', class: 'FontManager'}),
                s = {
                  fontFamily: 'Lato, sans-serif',
                  testingFont: {text: 'abcdefghiiiiiiiiijklmnopqrstuvwwwwwwwwwwxyz0123456789', size: 72, fontName: 'monospace'}
                },
                c = '',
                u = (function () {
                  function t(t) {
                    this._fontConfig = i.getContribConfig(t.kalturaPlayer, 'ui.fonts', s);
                  }
                  return (
                    (t.prototype.loadFont = function () {
                      if (!this._isFontLoaded()) {
                        var t = this._fontConfig.fontFamily;
                        try {
                          this._overrideCorePlayerFontStyles(), (c = t), this._handleFontDownloadProcess();
                        } catch (e) {
                          a.warn('Failed to load font and override core player style with ' + t, {method: 'loadFont', data: {error: e}});
                        }
                      }
                    }),
                    (t.prototype.reset = function () {}),
                    (t.prototype._overrideCorePlayerFontStyles = function () {
                      var t = this._fontConfig.fontFamily,
                        e =
                          '.kaltura-player-container {\n                font-family: inherit;\n            }         \n            .playkit-player {\n                font-family: ' +
                          t +
                          ';\n            }\n            .playkit-player .playkit-player-gui  {\n                font-family: ' +
                          t +
                          ';\n            }\n            button, textarea {\n                font-family: inherit;\n            }',
                        n = (document.head || document.getElementsByTagName('head')[0]).lastElementChild,
                        r = document.createElement('style');
                      n.parentNode.insertBefore(r, n.nextSibling),
                        r.appendChild(document.createTextNode(e)),
                        a.info('Overridden Core player font-family style with: ' + t, {method: '_overrideCorePlayerFontStyles'});
                    }),
                    (t.prototype._handleFontDownloadProcess = function () {
                      var t = this,
                        e = this._fontConfig,
                        n = e.downloadData,
                        r = e.testingFont;
                      n &&
                        (n.name && n.url
                          ? this._checkFontExistence(n.name, r)
                            ? a.info('Font ' + n.name + ' already exists, no need to reload it', {method: 'loadFont'})
                            : this._downloadAndCacheFont(n.name, n.url).then(function (e) {
                                e && t._injectFontRawStyle(n.name, e);
                              })
                          : a.warn(
                              'Configuration provided for contrib.ui.fonts.downloadData is invalid (did you remember to provide both url and name?).',
                              {method: 'loadFont'}
                            ));
                    }),
                    (t.prototype._checkFontExistence = function (t, e) {
                      try {
                        var n = document.createElement('canvas').getContext('2d'),
                          r = e.text,
                          o = e.size + 'px';
                        n.font = o + ' ' + e.fontName;
                        var i = n.measureText(r).width;
                        return (n.font = o + ' ' + t + ',' + e.fontName), n.measureText(r).width !== i;
                      } catch (e) {
                        return (
                          a.warn('Failed to determine if font ' + t + ' exists in the system.', {method: '_checkFontExistence', data: {error: e}}), !1
                        );
                      }
                    }),
                    (t.prototype._downloadAndCacheFont = function (t, e) {
                      var n = this,
                        o = this._loadFontFromLocalStorage(t);
                      return o && '' !== o
                        ? Promise.resolve(o)
                        : r.default
                            .get(e)
                            .then(function (e) {
                              return e.data && 'string' == typeof e.data && '' !== e.data
                                ? (a.info('font ' + t + ' was downloaded successfully', {method: '_downloadAndCacheFont'}),
                                  n._saveFontToLocalStorage('' + t, e.data),
                                  e.data)
                                : (a.warn('failed to downloaded font ' + t + ' due to an unexpected font data', {
                                    method: '_downloadAndCacheFont',
                                    data: {error: e.data ? e.data : 'empty font data'}
                                  }),
                                  null);
                            })
                            .catch(function (e) {
                              return a.warn('Failed to download font ' + t, {method: '_downloadFont', data: {error: e}}), null;
                            });
                    }),
                    (t.prototype._injectFontRawStyle = function (t, e) {
                      try {
                        var n = document.createElement('style');
                        (n.innerHTML = e),
                          (document.head || document.getElementsByTagName('head')[0]).appendChild(n),
                          a.info('font "' + t + '" raw data style was injected', {method: '_injectFontRawStyle'});
                      } catch (e) {
                        a.warn('Failed to inject font ' + t + ' data to core player style.', {method: '_injectFontRawStyle', data: {error: e}});
                      }
                    }),
                    (t.prototype._loadFontFromLocalStorage = function (t) {
                      try {
                        return localStorage.getItem('contrib-plugins-font-' + t);
                      } catch (e) {
                        return (
                          a.warn('Failed to load font "' + t + '" data, key: contrib-plugins-font-' + t + ' from localStorage', {
                            method: '_loadFontFromLocalStorage',
                            data: {error: e}
                          }),
                          null
                        );
                      }
                    }),
                    (t.prototype._saveFontToLocalStorage = function (t, e) {
                      try {
                        localStorage.setItem('contrib-plugins-font-' + t, e),
                          a.info('font "' + t + '" was cached into localStorage', {method: '_saveFontToLocalStorage'});
                      } catch (e) {
                        a.warn('Failed to cache font "' + t + '" into localStorage', {method: '_saveFontToLocalStorage', data: {error: e}});
                      }
                    }),
                    (t.prototype._isFontLoaded = function () {
                      return (
                        '' !== c &&
                        (c !== this._fontConfig.fontFamily &&
                          a.warn(
                            'This request for loading font will be ignored since\n                 an earlier call for loading ' +
                              this._fontConfig.fontFamily +
                              ' was made.',
                            {method: '_isFontLoaded'}
                          ),
                        !0)
                      );
                    }),
                    t
                  );
                })();
              e.FontManager = u;
            },
            function (t, e, n) {
              t.exports = n(79);
            },
            function (t, e, n) {
              'use strict';
              var r = n(2),
                o = n(19),
                i = n(81),
                a = n(25);
              function s(t) {
                var e = new i(t),
                  n = o(i.prototype.request, e);
                return r.extend(n, i.prototype, e), r.extend(n, e), n;
              }
              var c = s(n(22));
              (c.Axios = i),
                (c.create = function (t) {
                  return s(a(c.defaults, t));
                }),
                (c.Cancel = n(26)),
                (c.CancelToken = n(94)),
                (c.isCancel = n(21)),
                (c.all = function (t) {
                  return Promise.all(t);
                }),
                (c.spread = n(95)),
                (t.exports = c),
                (t.exports.default = c);
            },
            function (t, e) {
              /*!
               * Determine if an object is a Buffer
               *
               * @author   Feross Aboukhadijeh <https://feross.org>
               * @license  MIT
               */
              t.exports = function (t) {
                return null != t && null != t.constructor && 'function' == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(2),
                o = n(20),
                i = n(82),
                a = n(83),
                s = n(25);
              function c(t) {
                (this.defaults = t), (this.interceptors = {request: new i(), response: new i()});
              }
              (c.prototype.request = function (t) {
                'string' == typeof t ? ((t = arguments[1] || {}).url = arguments[0]) : (t = t || {}),
                  ((t = s(this.defaults, t)).method = t.method ? t.method.toLowerCase() : 'get');
                var e = [a, void 0],
                  n = Promise.resolve(t);
                for (
                  this.interceptors.request.forEach(function (t) {
                    e.unshift(t.fulfilled, t.rejected);
                  }),
                    this.interceptors.response.forEach(function (t) {
                      e.push(t.fulfilled, t.rejected);
                    });
                  e.length;

                )
                  n = n.then(e.shift(), e.shift());
                return n;
              }),
                (c.prototype.getUri = function (t) {
                  return (t = s(this.defaults, t)), o(t.url, t.params, t.paramsSerializer).replace(/^\?/, '');
                }),
                r.forEach(['delete', 'get', 'head', 'options'], function (t) {
                  c.prototype[t] = function (e, n) {
                    return this.request(r.merge(n || {}, {method: t, url: e}));
                  };
                }),
                r.forEach(['post', 'put', 'patch'], function (t) {
                  c.prototype[t] = function (e, n, o) {
                    return this.request(r.merge(o || {}, {method: t, url: e, data: n}));
                  };
                }),
                (t.exports = c);
            },
            function (t, e, n) {
              'use strict';
              var r = n(2);
              function o() {
                this.handlers = [];
              }
              (o.prototype.use = function (t, e) {
                return this.handlers.push({fulfilled: t, rejected: e}), this.handlers.length - 1;
              }),
                (o.prototype.eject = function (t) {
                  this.handlers[t] && (this.handlers[t] = null);
                }),
                (o.prototype.forEach = function (t) {
                  r.forEach(this.handlers, function (e) {
                    null !== e && t(e);
                  });
                }),
                (t.exports = o);
            },
            function (t, e, n) {
              'use strict';
              var r = n(2),
                o = n(84),
                i = n(21),
                a = n(22),
                s = n(92),
                c = n(93);
              function u(t) {
                t.cancelToken && t.cancelToken.throwIfRequested();
              }
              t.exports = function (t) {
                return (
                  u(t),
                  t.baseURL && !s(t.url) && (t.url = c(t.baseURL, t.url)),
                  (t.headers = t.headers || {}),
                  (t.data = o(t.data, t.headers, t.transformRequest)),
                  (t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {})),
                  r.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (e) {
                    delete t.headers[e];
                  }),
                  (t.adapter || a.adapter)(t).then(
                    function (e) {
                      return u(t), (e.data = o(e.data, e.headers, t.transformResponse)), e;
                    },
                    function (e) {
                      return (
                        i(e) || (u(t), e && e.response && (e.response.data = o(e.response.data, e.response.headers, t.transformResponse))),
                        Promise.reject(e)
                      );
                    }
                  )
                );
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(2);
              t.exports = function (t, e, n) {
                return (
                  r.forEach(n, function (n) {
                    t = n(t, e);
                  }),
                  t
                );
              };
            },
            function (t, e) {
              var n,
                r,
                o = (t.exports = {});
              function i() {
                throw new Error('setTimeout has not been defined');
              }
              function a() {
                throw new Error('clearTimeout has not been defined');
              }
              function s(t) {
                if (n === setTimeout) return setTimeout(t, 0);
                if ((n === i || !n) && setTimeout) return (n = setTimeout), setTimeout(t, 0);
                try {
                  return n(t, 0);
                } catch (e) {
                  try {
                    return n.call(null, t, 0);
                  } catch (e) {
                    return n.call(this, t, 0);
                  }
                }
              }
              !(function () {
                try {
                  n = 'function' == typeof setTimeout ? setTimeout : i;
                } catch (t) {
                  n = i;
                }
                try {
                  r = 'function' == typeof clearTimeout ? clearTimeout : a;
                } catch (t) {
                  r = a;
                }
              })();
              var c,
                u = [],
                l = !1,
                p = -1;
              function f() {
                l && c && ((l = !1), c.length ? (u = c.concat(u)) : (p = -1), u.length && d());
              }
              function d() {
                if (!l) {
                  var t = s(f);
                  l = !0;
                  for (var e = u.length; e; ) {
                    for (c = u, u = []; ++p < e; ) c && c[p].run();
                    (p = -1), (e = u.length);
                  }
                  (c = null),
                    (l = !1),
                    (function (t) {
                      if (r === clearTimeout) return clearTimeout(t);
                      if ((r === a || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(t);
                      try {
                        r(t);
                      } catch (e) {
                        try {
                          return r.call(null, t);
                        } catch (e) {
                          return r.call(this, t);
                        }
                      }
                    })(t);
                }
              }
              function h(t, e) {
                (this.fun = t), (this.array = e);
              }
              function _() {}
              (o.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                u.push(new h(t, e)), 1 !== u.length || l || s(d);
              }),
                (h.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (o.title = 'browser'),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ''),
                (o.versions = {}),
                (o.on = _),
                (o.addListener = _),
                (o.once = _),
                (o.off = _),
                (o.removeListener = _),
                (o.removeAllListeners = _),
                (o.emit = _),
                (o.prependListener = _),
                (o.prependOnceListener = _),
                (o.listeners = function (t) {
                  return [];
                }),
                (o.binding = function (t) {
                  throw new Error('process.binding is not supported');
                }),
                (o.cwd = function () {
                  return '/';
                }),
                (o.chdir = function (t) {
                  throw new Error('process.chdir is not supported');
                }),
                (o.umask = function () {
                  return 0;
                });
            },
            function (t, e, n) {
              'use strict';
              var r = n(2);
              t.exports = function (t, e) {
                r.forEach(t, function (n, r) {
                  r !== e && r.toUpperCase() === e.toUpperCase() && ((t[e] = n), delete t[r]);
                });
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(24);
              t.exports = function (t, e, n) {
                var o = n.config.validateStatus;
                !o || o(n.status) ? t(n) : e(r('Request failed with status code ' + n.status, n.config, null, n.request, n));
              };
            },
            function (t, e, n) {
              'use strict';
              t.exports = function (t, e, n, r, o) {
                return (
                  (t.config = e),
                  n && (t.code = n),
                  (t.request = r),
                  (t.response = o),
                  (t.isAxiosError = !0),
                  (t.toJSON = function () {
                    return {
                      message: this.message,
                      name: this.name,
                      description: this.description,
                      number: this.number,
                      fileName: this.fileName,
                      lineNumber: this.lineNumber,
                      columnNumber: this.columnNumber,
                      stack: this.stack,
                      config: this.config,
                      code: this.code
                    };
                  }),
                  t
                );
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(2),
                o = [
                  'age',
                  'authorization',
                  'content-length',
                  'content-type',
                  'etag',
                  'expires',
                  'from',
                  'host',
                  'if-modified-since',
                  'if-unmodified-since',
                  'last-modified',
                  'location',
                  'max-forwards',
                  'proxy-authorization',
                  'referer',
                  'retry-after',
                  'user-agent'
                ];
              t.exports = function (t) {
                var e,
                  n,
                  i,
                  a = {};
                return t
                  ? (r.forEach(t.split('\n'), function (t) {
                      if (((i = t.indexOf(':')), (e = r.trim(t.substr(0, i)).toLowerCase()), (n = r.trim(t.substr(i + 1))), e)) {
                        if (a[e] && o.indexOf(e) >= 0) return;
                        a[e] = 'set-cookie' === e ? (a[e] ? a[e] : []).concat([n]) : a[e] ? a[e] + ', ' + n : n;
                      }
                    }),
                    a)
                  : a;
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(2);
              t.exports = r.isStandardBrowserEnv()
                ? (function () {
                    var t,
                      e = /(msie|trident)/i.test(navigator.userAgent),
                      n = document.createElement('a');
                    function o(t) {
                      var r = t;
                      return (
                        e && (n.setAttribute('href', r), (r = n.href)),
                        n.setAttribute('href', r),
                        {
                          href: n.href,
                          protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
                          host: n.host,
                          search: n.search ? n.search.replace(/^\?/, '') : '',
                          hash: n.hash ? n.hash.replace(/^#/, '') : '',
                          hostname: n.hostname,
                          port: n.port,
                          pathname: '/' === n.pathname.charAt(0) ? n.pathname : '/' + n.pathname
                        }
                      );
                    }
                    return (
                      (t = o(window.location.href)),
                      function (e) {
                        var n = r.isString(e) ? o(e) : e;
                        return n.protocol === t.protocol && n.host === t.host;
                      }
                    );
                  })()
                : function () {
                    return !0;
                  };
            },
            function (t, e, n) {
              'use strict';
              var r = n(2);
              t.exports = r.isStandardBrowserEnv()
                ? {
                    write: function (t, e, n, o, i, a) {
                      var s = [];
                      s.push(t + '=' + encodeURIComponent(e)),
                        r.isNumber(n) && s.push('expires=' + new Date(n).toGMTString()),
                        r.isString(o) && s.push('path=' + o),
                        r.isString(i) && s.push('domain=' + i),
                        !0 === a && s.push('secure'),
                        (document.cookie = s.join('; '));
                    },
                    read: function (t) {
                      var e = document.cookie.match(new RegExp('(^|;\\s*)(' + t + ')=([^;]*)'));
                      return e ? decodeURIComponent(e[3]) : null;
                    },
                    remove: function (t) {
                      this.write(t, '', Date.now() - 864e5);
                    }
                  }
                : {
                    write: function () {},
                    read: function () {
                      return null;
                    },
                    remove: function () {}
                  };
            },
            function (t, e, n) {
              'use strict';
              t.exports = function (t) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
              };
            },
            function (t, e, n) {
              'use strict';
              t.exports = function (t, e) {
                return e ? t.replace(/\/+$/, '') + '/' + e.replace(/^\/+/, '') : t;
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(26);
              function o(t) {
                if ('function' != typeof t) throw new TypeError('executor must be a function.');
                var e;
                this.promise = new Promise(function (t) {
                  e = t;
                });
                var n = this;
                t(function (t) {
                  n.reason || ((n.reason = new r(t)), e(n.reason));
                });
              }
              (o.prototype.throwIfRequested = function () {
                if (this.reason) throw this.reason;
              }),
                (o.source = function () {
                  var t;
                  return {
                    token: new o(function (e) {
                      t = e;
                    }),
                    cancel: t
                  };
                }),
                (t.exports = o);
            },
            function (t, e, n) {
              'use strict';
              t.exports = function (t) {
                return function (e) {
                  return t.apply(null, e);
                };
              };
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i,
                a = n(27),
                s = n(0),
                c = n(0);
              !(function (t) {
                (t.Show = 'show'), (t.Hide = 'hide');
              })(i || (i = {}));
              var u = c.getContribLogger({module: 'contrib-ui', class: 'CuepointFloatingEngine'}),
                l = (function (t) {
                  function e(e) {
                    var n = t.call(this, e) || this;
                    return (n.playerSize = null), (n.videoSize = null), n;
                  }
                  return (
                    o(e, t),
                    (e.prototype.updateLayout = function (t, e) {
                      return (this.videoSize = e), (this.playerSize = t), this.recalculateCuepointLayout(), this.getCurrentCuepointSnapshot();
                    }),
                    (e.prototype._calculateLayout = function (t, e) {
                      var n = t.rawLayout;
                      return {
                        x: e.left + n.relativeX * e.width,
                        y: e.top + n.relativeY * e.height,
                        width: n.relativeWidth * e.width,
                        height: n.relativeHeight * e.height
                      };
                    }),
                    (e.prototype.recalculateCuepointLayout = function () {
                      var t = this;
                      if (
                        (u.debug('calculating cuepoint layout based on video/player sizes', {method: 'recalculateCuepointLayout'}),
                        !this.playerSize || !this.videoSize)
                      )
                        return (
                          u.warn('missing video/player sizes, hide all cuepoint', {method: 'recalculateCuepointLayout'}), void (this.enabled = !1)
                        );
                      var e = this.playerSize,
                        n = e.width,
                        r = e.height,
                        o = this.videoSize,
                        i = o.width,
                        s = o.height;
                      if (!(n && r && i && s))
                        return (
                          u.warn('missing video/player sizes, hide all cuepoint', {method: 'recalculateCuepointLayout'}), void (this.enabled = !1)
                        );
                      var c = a.scaleVideo(i, s, n, r, !0);
                      u.debug('recalculate cuepoint layout based on new sizes', {method: 'recalculateCuepointLayout', data: {scaleCalculation: c}}),
                        (this.cuepoints || []).forEach(function (e) {
                          e.layout = t._calculateLayout(e, c);
                        }),
                        (this.enabled = !0);
                    }),
                    e
                  );
                })(s.CuepointEngine);
              e.CuepointFloatingEngine = l;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (e.downloadContent = function (t, e) {
                  var n = new Blob([t], {type: 'text/plain;charset=utf-8;'}),
                    r = document.createElement('a');
                  window.navigator.msSaveBlob
                    ? window.navigator.msSaveOrOpenBlob(n, e)
                    : (-1 !== navigator.userAgent.search('Firefox')
                        ? ((r.style.display = 'none'), r.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(t)))
                        : r.setAttribute('href', URL.createObjectURL(n)),
                      r.setAttribute('target', '_blank'),
                      r.setAttribute('download', e),
                      r.click(),
                      r.remove());
                }),
                (e.printContent = function (t) {
                  var e = window.open('', '', 'width=400,height=600');
                  e && (e.document.write(t), e.document.close(), e.focus(), e.print(), e.close());
                }),
                (e.timeSince = function (t) {
                  'object' != typeof t && (t = new Date(t));
                  var e,
                    n = new Date(),
                    r = Math.floor((n - t) / 1e3),
                    o = Math.floor(r / 31536e3);
                  return (
                    o >= 1
                      ? (e = 'year')
                      : (o = Math.floor(r / 2592e3)) >= 1
                      ? (e = 'month')
                      : (o = Math.floor(r / 86400)) >= 1
                      ? (e = 'day')
                      : (o = Math.floor(r / 3600)) >= 1
                      ? (e = 'hour')
                      : (o = Math.floor(r / 60)) >= 1
                      ? (e = 'minute')
                      : ((o = -1), (e = 'a moment')),
                    (o > 1 || 0 === o) && (e += 's'),
                    (o >= 0 ? o : '') + ' ' + e + ' ago'
                  );
                });
            },
            function (t, e, n) {
              'use strict';
              var r =
                  (this && this.__assign) ||
                  function () {
                    return (r =
                      Object.assign ||
                      function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                          for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t;
                      }).apply(this, arguments);
                  },
                o =
                  (this && this.__spreadArrays) ||
                  function () {
                    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                    var r = Array(t),
                      o = 0;
                    for (e = 0; e < n; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                    return r;
                  };
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(28),
                s = n(29),
                c = n(6),
                u = n(99),
                l = n(7),
                p = n(5),
                f = {presetAreasMapping: {Playback: {PlayerArea: 'PlayerArea'}, Live: {PlayerArea: 'PlayerArea'}}},
                d = ['PlayerArea'],
                h = (function () {
                  function t(t) {
                    var e,
                      n,
                      r = this;
                    (this.options = t),
                      (this._items = (((e = {})[s.OverlayPositions.PlayerArea] = []), e)),
                      (this._componentRef = (((n = {})[s.OverlayPositions.PlayerArea] = null), n)),
                      (this._renderItems = function (t) {
                        return 0 === r._items[t].length
                          ? null
                          : i.h(u.OverlayItemContainer, {
                              renderContent: function () {
                                return r._items[t][0].renderOverlayChild({});
                              }
                            });
                      }),
                      (this._renderChild = function (t) {
                        return i.h(c.ManagedComponent, {
                          label: 'overlay-manager',
                          renderChildren: function () {
                            return r._renderItems(t);
                          },
                          isShown: function () {
                            return !0;
                          },
                          ref: function (e) {
                            return (r._componentRef[t] = e);
                          }
                        });
                      }),
                      (this._options = t),
                      (this._overlayConfig = p.getContribConfig(this._options.kalturaPlayer, 'ui.overlay', f, {
                        explicitMerge: ['presetAreasMapping']
                      }));
                    var o = l.PresetsUtils.groupPresetAreasByType({presetAreasMapping: this._overlayConfig.presetAreasMapping, acceptableTypes: d});
                    this.options.presetManager.add({
                      label: 'overlay-manager',
                      fillContainer: !0,
                      presetAreas: o.PlayerArea,
                      renderChild: function () {
                        return r._renderChild(s.OverlayPositions.PlayerArea);
                      }
                    });
                  }
                  return (
                    (t.prototype.add = function (t) {
                      var e = this._options.presetManager,
                        n = r(r({presetManager: e}, this.options), {data: t}),
                        o = new a.OverlayItem(n);
                      return this._items[t.position].unshift(o), this._updateComponents(t.position), o;
                    }),
                    (t.prototype.remove = function (t) {
                      var e = this._items[t.data.position],
                        n = e.indexOf(t);
                      n > -1
                        ? (e[n].destroy(), e.splice(n, 1), 0 === n && this._updateComponents(t.data.position))
                        : console.warn("couldn't remove " + t + " since it wasn't found");
                    }),
                    (t.prototype.reset = function () {
                      o(this._items.PlayerArea).forEach(function (t) {
                        try {
                          t.destroy();
                        } catch (t) {
                          console.warn(t);
                        }
                      }),
                        (this._items.PlayerArea = []);
                    }),
                    (t.prototype._updateComponents = function (t) {
                      !this._componentRef.PlayerArea || (t && t !== s.OverlayPositions.PlayerArea) || this._componentRef.PlayerArea.update();
                    }),
                    t
                  );
                })();
              e.OverlayManager = h;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(100);
              e.OverlayItemContainer = r.OverlayItemContainer;
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(0),
                s = n(101),
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._logger = a.getContribLogger({module: 'contrib-ui', class: 'OverlayContainer'})), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.componentDidMount = function () {
                      this._logger.info('mount component', {method: 'componentDidMount'});
                    }),
                    (e.prototype.componentWillUnmount = function () {
                      this._logger.info('unmount component', {method: 'componentWillUnmount'});
                    }),
                    (e.prototype.render = function () {
                      this._logger.trace('render component', {method: 'render'});
                      var t = this.props.renderContent();
                      return t ? i.h('div', {className: s.overlayItemContainer}, t) : null;
                    }),
                    e
                  );
                })(i.Component);
              e.OverlayItemContainer = c;
            },
            function (t, e, n) {
              var r = n(102);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              (e = n(3)(!1)).push([
                t.i,
                '.contrib_overlay-item-container__overlayItemContainer___NxNoV{position:absolute;z-index:6;top:0;bottom:0;left:0;right:0;width:100%;height:100%}\n',
                ''
              ]),
                (e.locals = {overlayItemContainer: 'contrib_overlay-item-container__overlayItemContainer___NxNoV'}),
                (t.exports = e);
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
                })(n(104));
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  }),
                i =
                  (this && this.__assign) ||
                  function () {
                    return (i =
                      Object.assign ||
                      function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                          for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t;
                      }).apply(this, arguments);
                  };
              Object.defineProperty(e, '__esModule', {value: !0});
              var a,
                s,
                c,
                u,
                l = n(1),
                p = n(105);
              !(function (t) {
                (t.Top = 'top'), (t.Bottom = 'bottom');
              })((a = e.PopoverVerticalPositions || (e.PopoverVerticalPositions = {}))),
                (function (t) {
                  (t.Left = 'left'), (t.Right = 'right');
                })((s = e.PopoverHorizontalPositions || (e.PopoverHorizontalPositions = {}))),
                (function (t) {
                  (t.Click = 'click'), (t.Hover = 'hover');
                })((c = e.PopoverTriggerMode || (e.PopoverTriggerMode = {}))),
                (function (t) {
                  (t[(t.Esc = 27)] = 'Esc'), (t[(t.Enter = 13)] = 'Enter');
                })((u = e.KeyboardKeys || (e.KeyboardKeys = {})));
              var f = {
                  verticalPosition: a.Top,
                  horizontalPosition: s.Left,
                  triggerMode: c.Click,
                  className: 'popover',
                  closeOnEsc: !0,
                  closeOnClick: !0
                },
                d = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (
                      (e._closeTimeout = null),
                      (e._controlElement = null),
                      (e.state = {open: !1}),
                      (e._clearTimeout = function () {
                        clearTimeout(e._closeTimeout), (e._closeTimeout = null);
                      }),
                      (e._handleMouseEvent = function (t) {
                        !e._controlElement.contains(t.target) && e.props.closeOnClick && e._closePopover();
                      }),
                      (e._handleKeyboardEvent = function (t) {
                        (e._controlElement.contains(t.target) && t.keyCode === u.Enter) ||
                          (((e.props.closeOnEsc && t.keyCode === u.Esc) || t.keyCode === u.Enter) && e._closePopover());
                      }),
                      (e._openPopover = function () {
                        var t = e.props.onOpen;
                        e._clearTimeout(),
                          e.setState({open: !0}, function () {
                            e._addListeners(), t && t();
                          });
                      }),
                      (e._closePopover = function () {
                        var t = e.props.onClose;
                        e._clearTimeout(),
                          e.setState({open: !1}, function () {
                            e._removeListeners(), t && t();
                          });
                      }),
                      (e._togglePopover = function (t) {
                        e.state.open ? e._closePopover() : e._openPopover();
                      }),
                      (e._handleMouseEnter = function () {
                        e.state.open || e._openPopover();
                      }),
                      (e._handleMouseLeave = function () {
                        e._closeTimeout = setTimeout(e._closePopover, 500);
                      }),
                      (e._handleHoverOnPopover = function () {
                        e.state.open && e._closeTimeout ? e._clearTimeout() : e._closePopover();
                      }),
                      (e._addListeners = function () {
                        document.addEventListener('click', e._handleMouseEvent), document.addEventListener('keydown', e._handleKeyboardEvent);
                      }),
                      (e._removeListeners = function () {
                        document.removeEventListener('click', e._handleMouseEvent), document.removeEventListener('keydown', e._handleKeyboardEvent);
                      }),
                      (e._getHoverEvents = function () {
                        return e.props.triggerMode === c.Hover
                          ? {
                              targetEvents: {onMouseEnter: e._handleMouseEnter, onMouseLeave: e._handleMouseLeave},
                              popoverEvents: {onMouseEnter: e._handleHoverOnPopover, onMouseLeave: e._handleHoverOnPopover}
                            }
                          : {targetEvents: {onClick: e._togglePopover}, popoverEvents: {}};
                      }),
                      e
                    );
                  }
                  return (
                    o(e, t),
                    (e.prototype.componentWillUnmount = function () {
                      this._removeListeners();
                    }),
                    (e.prototype.render = function (t) {
                      var e = this;
                      if (!t.content || !t.children) return null;
                      var n = this._getHoverEvents(),
                        r = n.targetEvents,
                        o = n.popoverEvents;
                      return l.h(
                        'div',
                        {className: p.popoverContainer},
                        l.h(
                          'div',
                          i(
                            {
                              className: 'popover-anchor-container',
                              ref: function (t) {
                                e._controlElement = t;
                              }
                            },
                            r
                          ),
                          t.children
                        ),
                        this.state.open &&
                          l.h(
                            'div',
                            i(
                              {
                                'aria-expanded': 'true',
                                className: [t.className, p.popoverComponent, p[t.verticalPosition], p[t.horizontalPosition]].join(' ')
                              },
                              o
                            ),
                            t.content
                          )
                      );
                    }),
                    (e.defaultProps = i({}, f)),
                    e
                  );
                })(l.Component);
              e.Popover = d;
            },
            function (t, e, n) {
              var r = n(106);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              (e = n(3)(!1)).push([
                t.i,
                '.contribpopover__popover-container___BSJYT{position:relative}.contribpopover__popover-container___BSJYT .contribpopover__popover-component___KA0bA{background-color:#222222;border-radius:4px;position:absolute;right:0px;font-size:15px;display:block}.contribpopover__popover-container___BSJYT .contribpopover__popover-component___KA0bA.contribpopover__visible___PihhQ{visibility:visible;opacity:1;z-index:10}.contribpopover__popover-container___BSJYT .contribpopover__popover-component___KA0bA.contribpopover__top___2YQjI{bottom:100%;margin-bottom:6px}.contribpopover__popover-container___BSJYT .contribpopover__popover-component___KA0bA.contribpopover__bottom___2F_dJ{top:100%;margin-top:6px}.contribpopover__popover-container___BSJYT .contribpopover__popover-component___KA0bA.contribpopover__right___2hAeY{left:0px}.contribpopover__popover-container___BSJYT .contribpopover__popover-component___KA0bA.contribpopover__left___3jgXH{right:0px}\n',
                ''
              ]),
                (e.locals = {
                  'popover-container': 'contribpopover__popover-container___BSJYT',
                  popoverContainer: 'contribpopover__popover-container___BSJYT',
                  'popover-component': 'contribpopover__popover-component___KA0bA',
                  popoverComponent: 'contribpopover__popover-component___KA0bA',
                  visible: 'contribpopover__visible___PihhQ',
                  top: 'contribpopover__top___2YQjI',
                  bottom: 'contribpopover__bottom___2F_dJ',
                  right: 'contribpopover__right___2hAeY',
                  left: 'contribpopover__left___3jgXH'
                }),
                (t.exports = e);
            }
          ])));
    },
    function (t, e, n) {
      window,
        (t.exports = (function (t) {
          var e = {};
          function n(r) {
            if (e[r]) return e[r].exports;
            var o = (e[r] = {i: r, l: !1, exports: {}});
            return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, r) {
              n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r});
            }),
            (n.r = function (t) {
              'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
                Object.defineProperty(t, '__esModule', {value: !0});
            }),
            (n.t = function (t, e) {
              if ((1 & e && (t = n(t)), 8 & e)) return t;
              if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
              var r = Object.create(null);
              if ((n.r(r), Object.defineProperty(r, 'default', {enumerable: !0, value: t}), 2 & e && 'string' != typeof t))
                for (var o in t)
                  n.d(
                    r,
                    o,
                    function (e) {
                      return t[e];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return n.d(e, 'a', e), e;
            }),
            (n.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ''),
            n((n.s = 63))
          );
        })([
          function (t, e, n) {
            (function (e) {
              var n = function (t) {
                return t && t.Math == Math && t;
              };
              t.exports =
                n('object' == typeof globalThis && globalThis) ||
                n('object' == typeof window && window) ||
                n('object' == typeof self && self) ||
                n('object' == typeof e && e) ||
                Function('return this')();
            }.call(this, n(67)));
          },
          function (t, e, n) {
            var r = n(0),
              o = n(18),
              i = n(41),
              a = n(71),
              s = r.Symbol,
              c = o('wks');
            t.exports = function (t) {
              return c[t] || (c[t] = (a && s[t]) || (a ? s : i)('Symbol.' + t));
            };
          },
          function (t, e, n) {
            var r = n(8);
            t.exports = function (t) {
              if (!r(t)) throw TypeError(String(t) + ' is not an object');
              return t;
            };
          },
          function (t, e, n) {
            var r = n(6),
              o = n(11),
              i = n(19);
            t.exports = r
              ? function (t, e, n) {
                  return o.f(t, e, i(1, n));
                }
              : function (t, e, n) {
                  return (t[e] = n), t;
                };
          },
          function (t, e) {
            t.exports = function (t) {
              try {
                return !!t();
              } catch (t) {
                return !0;
              }
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(30).f,
              i = n(3),
              a = n(10),
              s = n(24),
              c = n(74),
              u = n(49);
            t.exports = function (t, e) {
              var n,
                l,
                p,
                f,
                d,
                h = t.target,
                _ = t.global,
                v = t.stat;
              if ((n = _ ? r : v ? r[h] || s(h, {}) : (r[h] || {}).prototype))
                for (l in e) {
                  if (
                    ((f = e[l]), (p = t.noTargetGet ? (d = o(n, l)) && d.value : n[l]), !u(_ ? l : h + (v ? '.' : '#') + l, t.forced) && void 0 !== p)
                  ) {
                    if (typeof f == typeof p) continue;
                    c(f, p);
                  }
                  (t.sham || (p && p.sham)) && i(f, 'sham', !0), a(n, l, f, t);
                }
            };
          },
          function (t, e, n) {
            var r = n(4);
            t.exports = !r(function () {
              return (
                7 !=
                Object.defineProperty({}, 'a', {
                  get: function () {
                    return 7;
                  }
                }).a
              );
            });
          },
          function (t, e) {
            var n = {}.hasOwnProperty;
            t.exports = function (t, e) {
              return n.call(t, e);
            };
          },
          function (t, e) {
            t.exports = function (t) {
              return 'object' == typeof t ? null !== t : 'function' == typeof t;
            };
          },
          function (t, e, n) {
            var r = n(21),
              o = n(0),
              i = function (t) {
                return 'function' == typeof t ? t : void 0;
              };
            t.exports = function (t, e) {
              return arguments.length < 2 ? i(r[t]) || i(o[t]) : (r[t] && r[t][e]) || (o[t] && o[t][e]);
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(18),
              i = n(3),
              a = n(7),
              s = n(24),
              c = n(40),
              u = n(14),
              l = u.get,
              p = u.enforce,
              f = String(c).split('toString');
            o('inspectSource', function (t) {
              return c.call(t);
            }),
              (t.exports = function (t, e, n, o) {
                var c = !!o && !!o.unsafe,
                  u = !!o && !!o.enumerable,
                  l = !!o && !!o.noTargetGet;
                'function' == typeof n &&
                  ('string' != typeof e || a(n, 'name') || i(n, 'name', e), (p(n).source = f.join('string' == typeof e ? e : ''))),
                  t !== r ? (c ? !l && t[e] && (u = !0) : delete t[e], u ? (t[e] = n) : i(t, e, n)) : u ? (t[e] = n) : s(e, n);
              })(Function.prototype, 'toString', function () {
                return ('function' == typeof this && l(this).source) || c.call(this);
              });
          },
          function (t, e, n) {
            var r = n(6),
              o = n(38),
              i = n(2),
              a = n(39),
              s = Object.defineProperty;
            e.f = r
              ? s
              : function (t, e, n) {
                  if ((i(t), (e = a(e, !0)), i(n), o))
                    try {
                      return s(t, e, n);
                    } catch (t) {}
                  if ('get' in n || 'set' in n) throw TypeError('Accessors not supported');
                  return 'value' in n && (t[e] = n.value), t;
                };
          },
          function (t, e) {
            t.exports = function (t) {
              if ('function' != typeof t) throw TypeError(String(t) + ' is not a function');
              return t;
            };
          },
          function (t, e) {
            t.exports = !1;
          },
          function (t, e, n) {
            var r,
              o,
              i,
              a = n(69),
              s = n(0),
              c = n(8),
              u = n(3),
              l = n(7),
              p = n(26),
              f = n(27),
              d = s.WeakMap;
            if (a) {
              var h = new d(),
                _ = h.get,
                v = h.has,
                g = h.set;
              (r = function (t, e) {
                return g.call(h, t, e), e;
              }),
                (o = function (t) {
                  return _.call(h, t) || {};
                }),
                (i = function (t) {
                  return v.call(h, t);
                });
            } else {
              var y = p('state');
              (f[y] = !0),
                (r = function (t, e) {
                  return u(t, y, e), e;
                }),
                (o = function (t) {
                  return l(t, y) ? t[y] : {};
                }),
                (i = function (t) {
                  return l(t, y);
                });
            }
            t.exports = {
              set: r,
              get: o,
              has: i,
              enforce: function (t) {
                return i(t) ? o(t) : r(t, {});
              },
              getterFor: function (t) {
                return function (e) {
                  var n;
                  if (!c(e) || (n = o(e)).type !== t) throw TypeError('Incompatible receiver, ' + t + ' required');
                  return n;
                };
              }
            };
          },
          function (t, e) {
            var n = {}.toString;
            t.exports = function (t) {
              return n.call(t).slice(8, -1);
            };
          },
          function (t, e) {
            t.exports = {};
          },
          function (t, e, n) {
            'use strict';
            var r = n(12),
              o = function (t) {
                var e, n;
                (this.promise = new t(function (t, r) {
                  if (void 0 !== e || void 0 !== n) throw TypeError('Bad Promise constructor');
                  (e = t), (n = r);
                })),
                  (this.resolve = r(e)),
                  (this.reject = r(n));
              };
            t.exports.f = function (t) {
              return new o(t);
            };
          },
          function (t, e, n) {
            var r = n(13),
              o = n(68);
            (t.exports = function (t, e) {
              return o[t] || (o[t] = void 0 !== e ? e : {});
            })('versions', []).push({version: '3.3.5', mode: r ? 'pure' : 'global', copyright: '© 2019 Denis Pushkarev (zloirock.ru)'});
          },
          function (t, e) {
            t.exports = function (t, e) {
              return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e};
            };
          },
          function (t, e, n) {
            var r = n(45),
              o = n(29);
            t.exports = function (t) {
              return r(o(t));
            };
          },
          function (t, e, n) {
            t.exports = n(0);
          },
          function (t, e, n) {
            var r = n(2),
              o = n(91),
              i = n(47),
              a = n(54),
              s = n(92),
              c = n(93),
              u = function (t, e) {
                (this.stopped = t), (this.result = e);
              };
            (t.exports = function (t, e, n, l, p) {
              var f,
                d,
                h,
                _,
                v,
                g,
                y,
                m = a(e, n, l ? 2 : 1);
              if (p) f = t;
              else {
                if ('function' != typeof (d = s(t))) throw TypeError('Target is not iterable');
                if (o(d)) {
                  for (h = 0, _ = i(t.length); _ > h; h++) if ((v = l ? m(r((y = t[h]))[0], y[1]) : m(t[h])) && v instanceof u) return v;
                  return new u(!1);
                }
                f = d.call(t);
              }
              for (g = f.next; !(y = g.call(f)).done; ) if ('object' == typeof (v = c(f, m, y.value, l)) && v && v instanceof u) return v;
              return new u(!1);
            }).stop = function (t) {
              return new u(!0, t);
            };
          },
          function (t, e) {
            t.exports = function (t) {
              try {
                return {error: !1, value: t()};
              } catch (t) {
                return {error: !0, value: t};
              }
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(3);
            t.exports = function (t, e) {
              try {
                o(r, t, e);
              } catch (n) {
                r[t] = e;
              }
              return e;
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(8),
              i = r.document,
              a = o(i) && o(i.createElement);
            t.exports = function (t) {
              return a ? i.createElement(t) : {};
            };
          },
          function (t, e, n) {
            var r = n(18),
              o = n(41),
              i = r('keys');
            t.exports = function (t) {
              return i[t] || (i[t] = o(t));
            };
          },
          function (t, e) {
            t.exports = {};
          },
          function (t, e) {
            var n = Math.ceil,
              r = Math.floor;
            t.exports = function (t) {
              return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
            };
          },
          function (t, e) {
            t.exports = function (t) {
              if (null == t) throw TypeError("Can't call method on " + t);
              return t;
            };
          },
          function (t, e, n) {
            var r = n(6),
              o = n(44),
              i = n(19),
              a = n(20),
              s = n(39),
              c = n(7),
              u = n(38),
              l = Object.getOwnPropertyDescriptor;
            e.f = r
              ? l
              : function (t, e) {
                  if (((t = a(t)), (e = s(e, !0)), u))
                    try {
                      return l(t, e);
                    } catch (t) {}
                  if (c(t, e)) return i(!o.f.call(t, e), t[e]);
                };
          },
          function (t, e) {
            t.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
          },
          function (t, e, n) {
            var r = n(7),
              o = n(33),
              i = n(26),
              a = n(80),
              s = i('IE_PROTO'),
              c = Object.prototype;
            t.exports = a
              ? Object.getPrototypeOf
              : function (t) {
                  return (
                    (t = o(t)),
                    r(t, s)
                      ? t[s]
                      : 'function' == typeof t.constructor && t instanceof t.constructor
                      ? t.constructor.prototype
                      : t instanceof Object
                      ? c
                      : null
                  );
                };
          },
          function (t, e, n) {
            var r = n(29);
            t.exports = function (t) {
              return Object(r(t));
            };
          },
          function (t, e, n) {
            var r = n(2),
              o = n(81),
              i = n(31),
              a = n(27),
              s = n(51),
              c = n(25),
              u = n(26)('IE_PROTO'),
              l = function () {},
              p = function () {
                var t,
                  e = c('iframe'),
                  n = i.length;
                for (
                  e.style.display = 'none',
                    s.appendChild(e),
                    e.src = String('javascript:'),
                    (t = e.contentWindow.document).open(),
                    t.write('<script>document.F=Object</script>'),
                    t.close(),
                    p = t.F;
                  n--;

                )
                  delete p.prototype[i[n]];
                return p();
              };
            (t.exports =
              Object.create ||
              function (t, e) {
                var n;
                return null !== t ? ((l.prototype = r(t)), (n = new l()), (l.prototype = null), (n[u] = t)) : (n = p()), void 0 === e ? n : o(n, e);
              }),
              (a[u] = !0);
          },
          function (t, e, n) {
            var r = n(46),
              o = n(31);
            t.exports =
              Object.keys ||
              function (t) {
                return r(t, o);
              };
          },
          function (t, e, n) {
            var r = n(11).f,
              o = n(7),
              i = n(1)('toStringTag');
            t.exports = function (t, e, n) {
              t && !o((t = n ? t : t.prototype), i) && r(t, i, {configurable: !0, value: e});
            };
          },
          function (t, e, n) {
            var r = n(9);
            t.exports = r('navigator', 'userAgent') || '';
          },
          function (t, e, n) {
            var r = n(6),
              o = n(4),
              i = n(25);
            t.exports =
              !r &&
              !o(function () {
                return (
                  7 !=
                  Object.defineProperty(i('div'), 'a', {
                    get: function () {
                      return 7;
                    }
                  }).a
                );
              });
          },
          function (t, e, n) {
            var r = n(8);
            t.exports = function (t, e) {
              if (!r(t)) return t;
              var n, o;
              if (e && 'function' == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
              if ('function' == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o;
              if (!e && 'function' == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
              throw TypeError("Can't convert object to primitive value");
            };
          },
          function (t, e, n) {
            var r = n(18);
            t.exports = r('native-function-to-string', Function.toString);
          },
          function (t, e) {
            var n = 0,
              r = Math.random();
            t.exports = function (t) {
              return 'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++n + r).toString(36);
            };
          },
          function (t, e, n) {
            var r = n(15),
              o = n(1)('toStringTag'),
              i =
                'Arguments' ==
                r(
                  (function () {
                    return arguments;
                  })()
                );
            t.exports = function (t) {
              var e, n, a;
              return void 0 === t
                ? 'Undefined'
                : null === t
                ? 'Null'
                : 'string' ==
                  typeof (n = (function (t, e) {
                    try {
                      return t[e];
                    } catch (t) {}
                  })((e = Object(t)), o))
                ? n
                : i
                ? r(e)
                : 'Object' == (a = r(e)) && 'function' == typeof e.callee
                ? 'Arguments'
                : a;
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(79),
              i = n(32),
              a = n(52),
              s = n(36),
              c = n(3),
              u = n(10),
              l = n(1),
              p = n(13),
              f = n(16),
              d = n(50),
              h = d.IteratorPrototype,
              _ = d.BUGGY_SAFARI_ITERATORS,
              v = l('iterator'),
              g = function () {
                return this;
              };
            t.exports = function (t, e, n, l, d, y, m) {
              o(n, e, l);
              var b,
                x,
                w,
                C = function (t) {
                  if (t === d && T) return T;
                  if (!_ && t in O) return O[t];
                  switch (t) {
                    case 'keys':
                    case 'values':
                    case 'entries':
                      return function () {
                        return new n(this, t);
                      };
                  }
                  return function () {
                    return new n(this);
                  };
                },
                P = e + ' Iterator',
                S = !1,
                O = t.prototype,
                k = O[v] || O['@@iterator'] || (d && O[d]),
                T = (!_ && k) || C(d),
                j = ('Array' == e && O.entries) || k;
              if (
                (j &&
                  ((b = i(j.call(new t()))),
                  h !== Object.prototype &&
                    b.next &&
                    (p || i(b) === h || (a ? a(b, h) : 'function' != typeof b[v] && c(b, v, g)), s(b, P, !0, !0), p && (f[P] = g))),
                'values' == d &&
                  k &&
                  'values' !== k.name &&
                  ((S = !0),
                  (T = function () {
                    return k.call(this);
                  })),
                (p && !m) || O[v] === T || c(O, v, T),
                (f[e] = T),
                d)
              )
                if (((x = {values: C('values'), keys: y ? T : C('keys'), entries: C('entries')}), m))
                  for (w in x) (!_ && !S && w in O) || u(O, w, x[w]);
                else r({target: e, proto: !0, forced: _ || S}, x);
              return x;
            };
          },
          function (t, e, n) {
            'use strict';
            var r = {}.propertyIsEnumerable,
              o = Object.getOwnPropertyDescriptor,
              i = o && !r.call({1: 2}, 1);
            e.f = i
              ? function (t) {
                  var e = o(this, t);
                  return !!e && e.enumerable;
                }
              : r;
          },
          function (t, e, n) {
            var r = n(4),
              o = n(15),
              i = ''.split;
            t.exports = r(function () {
              return !Object('z').propertyIsEnumerable(0);
            })
              ? function (t) {
                  return 'String' == o(t) ? i.call(t, '') : Object(t);
                }
              : Object;
          },
          function (t, e, n) {
            var r = n(7),
              o = n(20),
              i = n(77).indexOf,
              a = n(27);
            t.exports = function (t, e) {
              var n,
                s = o(t),
                c = 0,
                u = [];
              for (n in s) !r(a, n) && r(s, n) && u.push(n);
              for (; e.length > c; ) r(s, (n = e[c++])) && (~i(u, n) || u.push(n));
              return u;
            };
          },
          function (t, e, n) {
            var r = n(28),
              o = Math.min;
            t.exports = function (t) {
              return t > 0 ? o(r(t), 9007199254740991) : 0;
            };
          },
          function (t, e) {
            e.f = Object.getOwnPropertySymbols;
          },
          function (t, e, n) {
            var r = n(4),
              o = /#|\.prototype\./,
              i = function (t, e) {
                var n = s[a(t)];
                return n == u || (n != c && ('function' == typeof e ? r(e) : !!e));
              },
              a = (i.normalize = function (t) {
                return String(t).replace(o, '.').toLowerCase();
              }),
              s = (i.data = {}),
              c = (i.NATIVE = 'N'),
              u = (i.POLYFILL = 'P');
            t.exports = i;
          },
          function (t, e, n) {
            'use strict';
            var r,
              o,
              i,
              a = n(32),
              s = n(3),
              c = n(7),
              u = n(1),
              l = n(13),
              p = u('iterator'),
              f = !1;
            [].keys && ('next' in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (r = o) : (f = !0)),
              null == r && (r = {}),
              l ||
                c(r, p) ||
                s(r, p, function () {
                  return this;
                }),
              (t.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: f});
          },
          function (t, e, n) {
            var r = n(9);
            t.exports = r('document', 'documentElement');
          },
          function (t, e, n) {
            var r = n(2),
              o = n(82);
            t.exports =
              Object.setPrototypeOf ||
              ('__proto__' in {}
                ? (function () {
                    var t,
                      e = !1,
                      n = {};
                    try {
                      (t = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set).call(n, []), (e = n instanceof Array);
                    } catch (t) {}
                    return function (n, i) {
                      return r(n), o(i), e ? t.call(n, i) : (n.__proto__ = i), n;
                    };
                  })()
                : void 0);
          },
          function (t, e, n) {
            var r = n(0);
            t.exports = r.Promise;
          },
          function (t, e, n) {
            var r = n(12);
            t.exports = function (t, e, n) {
              if ((r(t), void 0 === e)) return t;
              switch (n) {
                case 0:
                  return function () {
                    return t.call(e);
                  };
                case 1:
                  return function (n) {
                    return t.call(e, n);
                  };
                case 2:
                  return function (n, r) {
                    return t.call(e, n, r);
                  };
                case 3:
                  return function (n, r, o) {
                    return t.call(e, n, r, o);
                  };
              }
              return function () {
                return t.apply(e, arguments);
              };
            };
          },
          function (t, e, n) {
            var r = n(2),
              o = n(12),
              i = n(1)('species');
            t.exports = function (t, e) {
              var n,
                a = r(t).constructor;
              return void 0 === a || null == (n = r(a)[i]) ? e : o(n);
            };
          },
          function (t, e, n) {
            var r,
              o,
              i,
              a = n(0),
              s = n(4),
              c = n(15),
              u = n(54),
              l = n(51),
              p = n(25),
              f = n(37),
              d = a.location,
              h = a.setImmediate,
              _ = a.clearImmediate,
              v = a.process,
              g = a.MessageChannel,
              y = a.Dispatch,
              m = 0,
              b = {},
              x = function (t) {
                if (b.hasOwnProperty(t)) {
                  var e = b[t];
                  delete b[t], e();
                }
              },
              w = function (t) {
                return function () {
                  x(t);
                };
              },
              C = function (t) {
                x(t.data);
              },
              P = function (t) {
                a.postMessage(t + '', d.protocol + '//' + d.host);
              };
            (h && _) ||
              ((h = function (t) {
                for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
                return (
                  (b[++m] = function () {
                    ('function' == typeof t ? t : Function(t)).apply(void 0, e);
                  }),
                  r(m),
                  m
                );
              }),
              (_ = function (t) {
                delete b[t];
              }),
              'process' == c(v)
                ? (r = function (t) {
                    v.nextTick(w(t));
                  })
                : y && y.now
                ? (r = function (t) {
                    y.now(w(t));
                  })
                : g && !/(iphone|ipod|ipad).*applewebkit/i.test(f)
                ? ((i = (o = new g()).port2), (o.port1.onmessage = C), (r = u(i.postMessage, i, 1)))
                : !a.addEventListener || 'function' != typeof postMessage || a.importScripts || s(P)
                ? (r =
                    'onreadystatechange' in p('script')
                      ? function (t) {
                          l.appendChild(p('script')).onreadystatechange = function () {
                            l.removeChild(this), x(t);
                          };
                        }
                      : function (t) {
                          setTimeout(w(t), 0);
                        })
                : ((r = P), a.addEventListener('message', C, !1))),
              (t.exports = {set: h, clear: _});
          },
          function (t, e, n) {
            var r = n(2),
              o = n(8),
              i = n(17);
            t.exports = function (t, e) {
              if ((r(t), o(e) && e.constructor === t)) return e;
              var n = i.f(t);
              return (0, n.resolve)(e), n.promise;
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(12),
              i = n(17),
              a = n(23),
              s = n(22);
            r(
              {target: 'Promise', stat: !0},
              {
                allSettled: function (t) {
                  var e = this,
                    n = i.f(e),
                    r = n.resolve,
                    c = n.reject,
                    u = a(function () {
                      var n = o(e.resolve),
                        i = [],
                        a = 0,
                        c = 1;
                      s(t, function (t) {
                        var o = a++,
                          s = !1;
                        i.push(void 0),
                          c++,
                          n.call(e, t).then(
                            function (t) {
                              s || ((s = !0), (i[o] = {status: 'fulfilled', value: t}), --c || r(i));
                            },
                            function (t) {
                              s || ((s = !0), (i[o] = {status: 'rejected', reason: t}), --c || r(i));
                            }
                          );
                      }),
                        --c || r(i);
                    });
                  return u.error && c(u.value), n.promise;
                }
              }
            );
          },
          function (t, e, n) {
            'use strict';
            function r(t) {
              var e = t.kalturaPlayer,
                n = t.loggerName,
                r = e ? e.getLogger : KalturaPlayer.ui.utils.getLogger;
              if (!r) return null;
              var o = r(n);
              return (function (t) {
                return t && 'setLevel' in t;
              })(o)
                ? o
                : null;
            }
            Object.defineProperty(e, '__esModule', {value: !0});
            var o = (function () {
              function t() {}
              return (
                (t.prototype.debug = function (t, e) {}),
                (t.prototype.info = function (t, e) {}),
                (t.prototype.trace = function (t, e) {}),
                (t.prototype.warn = function (t, e) {}),
                (t.prototype.error = function (t, e) {}),
                t
              );
            })();
            e.NoopLogger = o;
            var i = r({}),
              a = new o(),
              s = (function () {
                function t(t, e) {
                  (this._logger = t), (this._defaultOptions = e);
                }
                return (
                  (t.prototype._log = function (t, e, n, r) {
                    if (this._logger.enabledFor(e)) {
                      var o = r.class || this._defaultOptions.class || '_',
                        i = this._defaultOptions.module || '',
                        a = r.method ? '.' + r.method + '()' : '',
                        s =
                          '[' +
                          i +
                          '::' +
                          o +
                          '(' +
                          (this._defaultOptions.context ? "'" + this._defaultOptions.context + "'" : '') +
                          ')' +
                          a +
                          '] ' +
                          n;
                      r.data ? this._logger[t](s, r.data) : this._logger[t](s);
                    }
                  }),
                  (t.prototype.debug = function (t, e) {
                    i && this._log('debug', i.DEBUG, t, e);
                  }),
                  (t.prototype.info = function (t, e) {
                    i && this._log('info', i.INFO, t, e);
                  }),
                  (t.prototype.trace = function (t, e) {
                    i && this._log('trace', i.TRACE, t, e);
                  }),
                  (t.prototype.warn = function (t, e) {
                    i && this._log('warn', i.WARN, t, e);
                  }),
                  (t.prototype.error = function (t, e) {
                    i && this._log('error', i.ERROR, t, e);
                  }),
                  t
                );
              })();
            (e.ProxyLogger = s),
              (e.getContribLogger = function (t) {
                void 0 === t && (t = {});
                var e = t.kalturaPlayer,
                  n = r({kalturaPlayer: e, loggerName: (e ? e._playerId : 'global') + '_contrib'});
                return n ? new s(n, t) : a;
              }),
              (e.enableLogIfNeeded = function () {
                try {
                  if (-1 !== document.URL.indexOf('debugKalturaPlayer')) {
                    var t = r({});
                    if (!t) return;
                    t.setLevel(t.TRACE);
                  }
                } catch (t) {}
              });
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = n(113),
              o = n(115),
              i = (function () {
                function t() {}
                return (
                  (t.uuidV1 = function () {
                    return r();
                  }),
                  (t.uuidV5 = function (t, e) {
                    return o(t, e);
                  }),
                  (t.numberedUuidV1 = function () {
                    for (var e = t.uuidV1(), n = '', r = 0; r < e.length; r++) {
                      var o = e.charAt(r);
                      n += Number.isNaN(+o) ? o.charCodeAt(0) : o;
                    }
                    return n;
                  }),
                  t
                );
              })();
            e.UUID = i;
          },
          function (t, e) {
            for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
            t.exports = function (t, e) {
              var r = e || 0,
                o = n;
              return [
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                '-',
                o[t[r++]],
                o[t[r++]],
                '-',
                o[t[r++]],
                o[t[r++]],
                '-',
                o[t[r++]],
                o[t[r++]],
                '-',
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                o[t[r++]]
              ].join('');
            };
          },
          function (t, e, n) {
            'use strict';
            var r =
              (this && this.__assign) ||
              function () {
                return (r =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t;
                  }).apply(this, arguments);
              };
            Object.defineProperty(e, '__esModule', {value: !0});
            var o = (function () {
              function t() {}
              return (
                (t.copyDeep = function (e) {
                  var n;
                  return (
                    Array.isArray(e)
                      ? (n = e.length > 0 ? e.slice(0) : []).forEach(function (e, r) {
                          (('object' == typeof e && e !== {}) || (Array.isArray(e) && e.length > 0)) && (n[r] = t.copyDeep(e));
                        })
                      : 'object' == typeof e
                      ? ((n = Object.assign({}, e)),
                        Object.keys(n).forEach(function (e) {
                          (('object' == typeof n[e] && n[e] !== {}) || (Array.isArray(n[e]) && n[e].length > 0)) && (n[e] = t.copyDeep(n[e]));
                        }))
                      : (n = e),
                    n
                  );
                }),
                (t.isObject = function (t) {
                  return t && 'object' == typeof t && !Array.isArray(t);
                }),
                (t.mergeDeep = function (e, n, r) {
                  var o, i;
                  if (!n.length) return e;
                  var a = (r ? r.explicitMerge : null) || [],
                    s = n.shift();
                  if (t.isObject(e) && t.isObject(s))
                    for (var c in s)
                      t.isObject(s[c])
                        ? (e[c] || Object.assign(e, (((o = {})[c] = {}), o)),
                          -1 !== a.indexOf(c) ? (e[c] = t.explicitFlatMerge(e[c], s[c])) : t.mergeDeep(e[c], [s[c]], r))
                        : Object.assign(e, (((i = {})[c] = s[c]), i));
                  return t.mergeDeep(e, n, r);
                }),
                (t.mergeDefaults = function (e, n, r) {
                  return t.mergeDeep({}, [n, e], r);
                }),
                (t.explicitFlatMerge = function (t, e) {
                  var n = r({}, t);
                  return (
                    Object.keys(e).forEach(function (t) {
                      null === e[t] || 0 === Object.keys(e[t]).length ? delete n[t] : (n[t] = e[t]);
                    }),
                    n
                  );
                }),
                (t.get = function (t, e, n) {
                  for (
                    var r = (function (t) {
                        var e = [];
                        return (
                          t.split('.').forEach(function (t) {
                            t.split(/\[([^}]+)\]/g).forEach(function (t) {
                              t.length > 0 && e.push(t);
                            });
                          }),
                          e
                        );
                      })(e),
                      o = t,
                      i = 0;
                    i < r.length;
                    i++
                  ) {
                    if (!o[r[i]]) return n;
                    o = o[r[i]];
                  }
                  return o;
                }),
                t
              );
            })();
            e.ObjectUtils = o;
          },
          function (t, e, n) {
            'use strict';
            function r(t) {
              for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
            }
            Object.defineProperty(e, '__esModule', {value: !0}),
              n(64),
              n(103),
              n(107),
              (Number.isNaN =
                Number.isNaN ||
                function (t) {
                  return null !== t && (t != t || +t != t);
                }),
              r(n(110)),
              r(n(111)),
              r(n(112)),
              r(n(118)),
              r(n(59)),
              r(n(60)),
              r(n(119)),
              r(n(62)),
              r(n(120)),
              r(n(121));
          },
          function (t, e, n) {
            (t.exports = n(65)), n(99), n(100), n(101), n(102);
          },
          function (t, e, n) {
            n(66), n(72), n(83), n(87), n(58), n(98);
            var r = n(21);
            t.exports = r.Promise;
          },
          function (t, e, n) {
            var r = n(10),
              o = n(70),
              i = Object.prototype;
            o !== i.toString && r(i, 'toString', o, {unsafe: !0});
          },
          function (t, e) {
            var n;
            n = (function () {
              return this;
            })();
            try {
              n = n || new Function('return this')();
            } catch (t) {
              'object' == typeof window && (n = window);
            }
            t.exports = n;
          },
          function (t, e, n) {
            var r = n(0),
              o = n(24),
              i = r['__core-js_shared__'] || o('__core-js_shared__', {});
            t.exports = i;
          },
          function (t, e, n) {
            var r = n(0),
              o = n(40),
              i = r.WeakMap;
            t.exports = 'function' == typeof i && /native code/.test(o.call(i));
          },
          function (t, e, n) {
            'use strict';
            var r = n(42),
              o = {};
            (o[n(1)('toStringTag')] = 'z'),
              (t.exports =
                '[object z]' !== String(o)
                  ? function () {
                      return '[object ' + r(this) + ']';
                    }
                  : o.toString);
          },
          function (t, e, n) {
            var r = n(4);
            t.exports =
              !!Object.getOwnPropertySymbols &&
              !r(function () {
                return !String(Symbol());
              });
          },
          function (t, e, n) {
            'use strict';
            var r = n(73).charAt,
              o = n(14),
              i = n(43),
              a = o.set,
              s = o.getterFor('String Iterator');
            i(
              String,
              'String',
              function (t) {
                a(this, {type: 'String Iterator', string: String(t), index: 0});
              },
              function () {
                var t,
                  e = s(this),
                  n = e.string,
                  o = e.index;
                return o >= n.length ? {value: void 0, done: !0} : ((t = r(n, o)), (e.index += t.length), {value: t, done: !1});
              }
            );
          },
          function (t, e, n) {
            var r = n(28),
              o = n(29),
              i = function (t) {
                return function (e, n) {
                  var i,
                    a,
                    s = String(o(e)),
                    c = r(n),
                    u = s.length;
                  return c < 0 || c >= u
                    ? t
                      ? ''
                      : void 0
                    : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343
                    ? t
                      ? s.charAt(c)
                      : i
                    : t
                    ? s.slice(c, c + 2)
                    : a - 56320 + ((i - 55296) << 10) + 65536;
                };
              };
            t.exports = {codeAt: i(!1), charAt: i(!0)};
          },
          function (t, e, n) {
            var r = n(7),
              o = n(75),
              i = n(30),
              a = n(11);
            t.exports = function (t, e) {
              for (var n = o(e), s = a.f, c = i.f, u = 0; u < n.length; u++) {
                var l = n[u];
                r(t, l) || s(t, l, c(e, l));
              }
            };
          },
          function (t, e, n) {
            var r = n(9),
              o = n(76),
              i = n(48),
              a = n(2);
            t.exports =
              r('Reflect', 'ownKeys') ||
              function (t) {
                var e = o.f(a(t)),
                  n = i.f;
                return n ? e.concat(n(t)) : e;
              };
          },
          function (t, e, n) {
            var r = n(46),
              o = n(31).concat('length', 'prototype');
            e.f =
              Object.getOwnPropertyNames ||
              function (t) {
                return r(t, o);
              };
          },
          function (t, e, n) {
            var r = n(20),
              o = n(47),
              i = n(78),
              a = function (t) {
                return function (e, n, a) {
                  var s,
                    c = r(e),
                    u = o(c.length),
                    l = i(a, u);
                  if (t && n != n) {
                    for (; u > l; ) if ((s = c[l++]) != s) return !0;
                  } else for (; u > l; l++) if ((t || l in c) && c[l] === n) return t || l || 0;
                  return !t && -1;
                };
              };
            t.exports = {includes: a(!0), indexOf: a(!1)};
          },
          function (t, e, n) {
            var r = n(28),
              o = Math.max,
              i = Math.min;
            t.exports = function (t, e) {
              var n = r(t);
              return n < 0 ? o(n + e, 0) : i(n, e);
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(50).IteratorPrototype,
              o = n(34),
              i = n(19),
              a = n(36),
              s = n(16),
              c = function () {
                return this;
              };
            t.exports = function (t, e, n) {
              var u = e + ' Iterator';
              return (t.prototype = o(r, {next: i(1, n)})), a(t, u, !1, !0), (s[u] = c), t;
            };
          },
          function (t, e, n) {
            var r = n(4);
            t.exports = !r(function () {
              function t() {}
              return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
            });
          },
          function (t, e, n) {
            var r = n(6),
              o = n(11),
              i = n(2),
              a = n(35);
            t.exports = r
              ? Object.defineProperties
              : function (t, e) {
                  i(t);
                  for (var n, r = a(e), s = r.length, c = 0; s > c; ) o.f(t, (n = r[c++]), e[n]);
                  return t;
                };
          },
          function (t, e, n) {
            var r = n(8);
            t.exports = function (t) {
              if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + ' as a prototype');
              return t;
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(84),
              i = n(85),
              a = n(3),
              s = n(1),
              c = s('iterator'),
              u = s('toStringTag'),
              l = i.values;
            for (var p in o) {
              var f = r[p],
                d = f && f.prototype;
              if (d) {
                if (d[c] !== l)
                  try {
                    a(d, c, l);
                  } catch (t) {
                    d[c] = l;
                  }
                if ((d[u] || a(d, u, p), o[p]))
                  for (var h in i)
                    if (d[h] !== i[h])
                      try {
                        a(d, h, i[h]);
                      } catch (t) {
                        d[h] = i[h];
                      }
              }
            }
          },
          function (t, e) {
            t.exports = {
              CSSRuleList: 0,
              CSSStyleDeclaration: 0,
              CSSValueList: 0,
              ClientRectList: 0,
              DOMRectList: 0,
              DOMStringList: 0,
              DOMTokenList: 1,
              DataTransferItemList: 0,
              FileList: 0,
              HTMLAllCollection: 0,
              HTMLCollection: 0,
              HTMLFormElement: 0,
              HTMLSelectElement: 0,
              MediaList: 0,
              MimeTypeArray: 0,
              NamedNodeMap: 0,
              NodeList: 1,
              PaintRequestList: 0,
              Plugin: 0,
              PluginArray: 0,
              SVGLengthList: 0,
              SVGNumberList: 0,
              SVGPathSegList: 0,
              SVGPointList: 0,
              SVGStringList: 0,
              SVGTransformList: 0,
              SourceBufferList: 0,
              StyleSheetList: 0,
              TextTrackCueList: 0,
              TextTrackList: 0,
              TouchList: 0
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(20),
              o = n(86),
              i = n(16),
              a = n(14),
              s = n(43),
              c = a.set,
              u = a.getterFor('Array Iterator');
            (t.exports = s(
              Array,
              'Array',
              function (t, e) {
                c(this, {type: 'Array Iterator', target: r(t), index: 0, kind: e});
              },
              function () {
                var t = u(this),
                  e = t.target,
                  n = t.kind,
                  r = t.index++;
                return !e || r >= e.length
                  ? ((t.target = void 0), {value: void 0, done: !0})
                  : 'keys' == n
                  ? {value: r, done: !1}
                  : 'values' == n
                  ? {value: e[r], done: !1}
                  : {value: [r, e[r]], done: !1};
              },
              'values'
            )),
              (i.Arguments = i.Array),
              o('keys'),
              o('values'),
              o('entries');
          },
          function (t, e, n) {
            var r = n(1),
              o = n(34),
              i = n(3),
              a = r('unscopables'),
              s = Array.prototype;
            null == s[a] && i(s, a, o(null)),
              (t.exports = function (t) {
                s[a][t] = !0;
              });
          },
          function (t, e, n) {
            'use strict';
            var r,
              o,
              i,
              a,
              s = n(5),
              c = n(13),
              u = n(0),
              l = n(9),
              p = n(53),
              f = n(10),
              d = n(88),
              h = n(36),
              _ = n(89),
              v = n(8),
              g = n(12),
              y = n(90),
              m = n(15),
              b = n(22),
              x = n(94),
              w = n(55),
              C = n(56).set,
              P = n(95),
              S = n(57),
              O = n(96),
              k = n(17),
              T = n(23),
              j = n(14),
              A = n(49),
              E = n(1),
              M = n(97),
              I = E('species'),
              L = 'Promise',
              R = j.get,
              B = j.set,
              D = j.getterFor(L),
              F = p,
              U = u.TypeError,
              N = u.document,
              z = u.process,
              V = l('fetch'),
              K = k.f,
              H = K,
              W = 'process' == m(z),
              q = !!(N && N.createEvent && u.dispatchEvent),
              G = A(L, function () {
                if (66 === M) return !0;
                if (!W && 'function' != typeof PromiseRejectionEvent) return !0;
                if (c && !F.prototype.finally) return !0;
                if (M >= 51 && /native code/.test(F)) return !1;
                var t = F.resolve(1),
                  e = function (t) {
                    t(
                      function () {},
                      function () {}
                    );
                  };
                return ((t.constructor = {})[I] = e), !(t.then(function () {}) instanceof e);
              }),
              Y =
                G ||
                !x(function (t) {
                  F.all(t).catch(function () {});
                }),
              J = function (t) {
                var e;
                return !(!v(t) || 'function' != typeof (e = t.then)) && e;
              },
              $ = function (t, e, n) {
                if (!e.notified) {
                  e.notified = !0;
                  var r = e.reactions;
                  P(function () {
                    for (var o = e.value, i = 1 == e.state, a = 0; r.length > a; ) {
                      var s,
                        c,
                        u,
                        l = r[a++],
                        p = i ? l.ok : l.fail,
                        f = l.resolve,
                        d = l.reject,
                        h = l.domain;
                      try {
                        p
                          ? (i || (2 === e.rejection && tt(t, e), (e.rejection = 1)),
                            !0 === p ? (s = o) : (h && h.enter(), (s = p(o)), h && (h.exit(), (u = !0))),
                            s === l.promise ? d(U('Promise-chain cycle')) : (c = J(s)) ? c.call(s, f, d) : f(s))
                          : d(o);
                      } catch (t) {
                        h && !u && h.exit(), d(t);
                      }
                    }
                    (e.reactions = []), (e.notified = !1), n && !e.rejection && X(t, e);
                  });
                }
              },
              Z = function (t, e, n) {
                var r, o;
                q
                  ? (((r = N.createEvent('Event')).promise = e), (r.reason = n), r.initEvent(t, !1, !0), u.dispatchEvent(r))
                  : (r = {promise: e, reason: n}),
                  (o = u['on' + t]) ? o(r) : 'unhandledrejection' === t && O('Unhandled promise rejection', n);
              },
              X = function (t, e) {
                C.call(u, function () {
                  var n,
                    r = e.value;
                  if (
                    Q(e) &&
                    ((n = T(function () {
                      W ? z.emit('unhandledRejection', r, t) : Z('unhandledrejection', t, r);
                    })),
                    (e.rejection = W || Q(e) ? 2 : 1),
                    n.error)
                  )
                    throw n.value;
                });
              },
              Q = function (t) {
                return 1 !== t.rejection && !t.parent;
              },
              tt = function (t, e) {
                C.call(u, function () {
                  W ? z.emit('rejectionHandled', t) : Z('rejectionhandled', t, e.value);
                });
              },
              et = function (t, e, n, r) {
                return function (o) {
                  t(e, n, o, r);
                };
              },
              nt = function (t, e, n, r) {
                e.done || ((e.done = !0), r && (e = r), (e.value = n), (e.state = 2), $(t, e, !0));
              },
              rt = function (t, e, n, r) {
                if (!e.done) {
                  (e.done = !0), r && (e = r);
                  try {
                    if (t === n) throw U("Promise can't be resolved itself");
                    var o = J(n);
                    o
                      ? P(function () {
                          var r = {done: !1};
                          try {
                            o.call(n, et(rt, t, r, e), et(nt, t, r, e));
                          } catch (n) {
                            nt(t, r, n, e);
                          }
                        })
                      : ((e.value = n), (e.state = 1), $(t, e, !1));
                  } catch (n) {
                    nt(t, {done: !1}, n, e);
                  }
                }
              };
            G &&
              ((F = function (t) {
                y(this, F, L), g(t), r.call(this);
                var e = R(this);
                try {
                  t(et(rt, this, e), et(nt, this, e));
                } catch (t) {
                  nt(this, e, t);
                }
              }),
              ((r = function (t) {
                B(this, {type: L, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0});
              }).prototype = d(F.prototype, {
                then: function (t, e) {
                  var n = D(this),
                    r = K(w(this, F));
                  return (
                    (r.ok = 'function' != typeof t || t),
                    (r.fail = 'function' == typeof e && e),
                    (r.domain = W ? z.domain : void 0),
                    (n.parent = !0),
                    n.reactions.push(r),
                    0 != n.state && $(this, n, !1),
                    r.promise
                  );
                },
                catch: function (t) {
                  return this.then(void 0, t);
                }
              })),
              (o = function () {
                var t = new r(),
                  e = R(t);
                (this.promise = t), (this.resolve = et(rt, t, e)), (this.reject = et(nt, t, e));
              }),
              (k.f = K =
                function (t) {
                  return t === F || t === i ? new o(t) : H(t);
                }),
              c ||
                'function' != typeof p ||
                ((a = p.prototype.then),
                f(
                  p.prototype,
                  'then',
                  function (t, e) {
                    var n = this;
                    return new F(function (t, e) {
                      a.call(n, t, e);
                    }).then(t, e);
                  },
                  {unsafe: !0}
                ),
                'function' == typeof V &&
                  s(
                    {global: !0, enumerable: !0, forced: !0},
                    {
                      fetch: function (t) {
                        return S(F, V.apply(u, arguments));
                      }
                    }
                  ))),
              s({global: !0, wrap: !0, forced: G}, {Promise: F}),
              h(F, L, !1, !0),
              _(L),
              (i = l(L)),
              s(
                {target: L, stat: !0, forced: G},
                {
                  reject: function (t) {
                    var e = K(this);
                    return e.reject.call(void 0, t), e.promise;
                  }
                }
              ),
              s(
                {target: L, stat: !0, forced: c || G},
                {
                  resolve: function (t) {
                    return S(c && this === i ? F : this, t);
                  }
                }
              ),
              s(
                {target: L, stat: !0, forced: Y},
                {
                  all: function (t) {
                    var e = this,
                      n = K(e),
                      r = n.resolve,
                      o = n.reject,
                      i = T(function () {
                        var n = g(e.resolve),
                          i = [],
                          a = 0,
                          s = 1;
                        b(t, function (t) {
                          var c = a++,
                            u = !1;
                          i.push(void 0),
                            s++,
                            n.call(e, t).then(function (t) {
                              u || ((u = !0), (i[c] = t), --s || r(i));
                            }, o);
                        }),
                          --s || r(i);
                      });
                    return i.error && o(i.value), n.promise;
                  },
                  race: function (t) {
                    var e = this,
                      n = K(e),
                      r = n.reject,
                      o = T(function () {
                        var o = g(e.resolve);
                        b(t, function (t) {
                          o.call(e, t).then(n.resolve, r);
                        });
                      });
                    return o.error && r(o.value), n.promise;
                  }
                }
              );
          },
          function (t, e, n) {
            var r = n(10);
            t.exports = function (t, e, n) {
              for (var o in e) r(t, o, e[o], n);
              return t;
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(9),
              o = n(11),
              i = n(1),
              a = n(6),
              s = i('species');
            t.exports = function (t) {
              var e = r(t),
                n = o.f;
              a &&
                e &&
                !e[s] &&
                n(e, s, {
                  configurable: !0,
                  get: function () {
                    return this;
                  }
                });
            };
          },
          function (t, e) {
            t.exports = function (t, e, n) {
              if (!(t instanceof e)) throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
              return t;
            };
          },
          function (t, e, n) {
            var r = n(1),
              o = n(16),
              i = r('iterator'),
              a = Array.prototype;
            t.exports = function (t) {
              return void 0 !== t && (o.Array === t || a[i] === t);
            };
          },
          function (t, e, n) {
            var r = n(42),
              o = n(16),
              i = n(1)('iterator');
            t.exports = function (t) {
              if (null != t) return t[i] || t['@@iterator'] || o[r(t)];
            };
          },
          function (t, e, n) {
            var r = n(2);
            t.exports = function (t, e, n, o) {
              try {
                return o ? e(r(n)[0], n[1]) : e(n);
              } catch (e) {
                var i = t.return;
                throw (void 0 !== i && r(i.call(t)), e);
              }
            };
          },
          function (t, e, n) {
            var r = n(1)('iterator'),
              o = !1;
            try {
              var i = 0,
                a = {
                  next: function () {
                    return {done: !!i++};
                  },
                  return: function () {
                    o = !0;
                  }
                };
              (a[r] = function () {
                return this;
              }),
                Array.from(a, function () {
                  throw 2;
                });
            } catch (t) {}
            t.exports = function (t, e) {
              if (!e && !o) return !1;
              var n = !1;
              try {
                var i = {};
                (i[r] = function () {
                  return {
                    next: function () {
                      return {done: (n = !0)};
                    }
                  };
                }),
                  t(i);
              } catch (t) {}
              return n;
            };
          },
          function (t, e, n) {
            var r,
              o,
              i,
              a,
              s,
              c,
              u,
              l,
              p = n(0),
              f = n(30).f,
              d = n(15),
              h = n(56).set,
              _ = n(37),
              v = p.MutationObserver || p.WebKitMutationObserver,
              g = p.process,
              y = p.Promise,
              m = 'process' == d(g),
              b = f(p, 'queueMicrotask'),
              x = b && b.value;
            x ||
              ((r = function () {
                var t, e;
                for (m && (t = g.domain) && t.exit(); o; ) {
                  (e = o.fn), (o = o.next);
                  try {
                    e();
                  } catch (t) {
                    throw (o ? a() : (i = void 0), t);
                  }
                }
                (i = void 0), t && t.enter();
              }),
              m
                ? (a = function () {
                    g.nextTick(r);
                  })
                : v && !/(iphone|ipod|ipad).*applewebkit/i.test(_)
                ? ((s = !0),
                  (c = document.createTextNode('')),
                  new v(r).observe(c, {characterData: !0}),
                  (a = function () {
                    c.data = s = !s;
                  }))
                : y && y.resolve
                ? ((u = y.resolve(void 0)),
                  (l = u.then),
                  (a = function () {
                    l.call(u, r);
                  }))
                : (a = function () {
                    h.call(p, r);
                  })),
              (t.exports =
                x ||
                function (t) {
                  var e = {fn: t, next: void 0};
                  i && (i.next = e), o || ((o = e), a()), (i = e);
                });
          },
          function (t, e, n) {
            var r = n(0);
            t.exports = function (t, e) {
              var n = r.console;
              n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
            };
          },
          function (t, e, n) {
            var r,
              o,
              i = n(0),
              a = n(37),
              s = i.process,
              c = s && s.versions,
              u = c && c.v8;
            u ? (o = (r = u.split('.'))[0] + r[1]) : a && (r = a.match(/Chrome\/(\d+)/)) && (o = r[1]), (t.exports = o && +o);
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(13),
              i = n(53),
              a = n(9),
              s = n(55),
              c = n(57),
              u = n(10);
            r(
              {target: 'Promise', proto: !0, real: !0},
              {
                finally: function (t) {
                  var e = s(this, a('Promise')),
                    n = 'function' == typeof t;
                  return this.then(
                    n
                      ? function (n) {
                          return c(e, t()).then(function () {
                            return n;
                          });
                        }
                      : t,
                    n
                      ? function (n) {
                          return c(e, t()).then(function () {
                            throw n;
                          });
                        }
                      : t
                  );
                }
              }
            ),
              o || 'function' != typeof i || i.prototype.finally || u(i.prototype, 'finally', a('Promise').prototype.finally);
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(6),
              i = n(32),
              a = n(52),
              s = n(34),
              c = n(11),
              u = n(19),
              l = n(22),
              p = n(3),
              f = n(2),
              d = n(14),
              h = d.set,
              _ = d.getterFor('AggregateError'),
              v = function (t, e) {
                var n = this;
                if (!(n instanceof v)) return new v(t, e);
                a && (n = a(new Error(e), i(n)));
                var r = [];
                return l(t, r.push, r), o ? h(n, {errors: r, type: 'AggregateError'}) : (n.errors = r), void 0 !== e && p(n, 'message', String(e)), n;
              };
            (v.prototype = s(Error.prototype, {
              constructor: u(5, v),
              message: u(5, ''),
              name: u(5, 'AggregateError'),
              toString: u(5, function () {
                var t = f(this).name;
                t = void 0 === t ? 'AggregateError' : String(t);
                var e = this.message;
                return t + ': ' + (void 0 === e ? '' : String(e));
              })
            })),
              o &&
                c.f(v.prototype, 'errors', {
                  get: function () {
                    return _(this).errors;
                  },
                  configurable: !0
                }),
              r({global: !0}, {AggregateError: v});
          },
          function (t, e, n) {
            n(58);
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(17),
              i = n(23);
            r(
              {target: 'Promise', stat: !0},
              {
                try: function (t) {
                  var e = o.f(this),
                    n = i(t);
                  return (n.error ? e.reject : e.resolve)(n.value), e.promise;
                }
              }
            );
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(12),
              i = n(9),
              a = n(17),
              s = n(23),
              c = n(22);
            r(
              {target: 'Promise', stat: !0},
              {
                any: function (t) {
                  var e = this,
                    n = a.f(e),
                    r = n.resolve,
                    u = n.reject,
                    l = s(function () {
                      var n = o(e.resolve),
                        a = [],
                        s = 0,
                        l = 1,
                        p = !1;
                      c(t, function (t) {
                        var o = s++,
                          c = !1;
                        a.push(void 0),
                          l++,
                          n.call(e, t).then(
                            function (t) {
                              c || p || ((p = !0), r(t));
                            },
                            function (t) {
                              c || p || ((c = !0), (a[o] = t), --l || u(new (i('AggregateError'))(a, 'No one promise resolved')));
                            }
                          );
                      }),
                        --l || u(new (i('AggregateError'))(a, 'No one promise resolved'));
                    });
                  return l.error && u(l.value), n.promise;
                }
              }
            );
          },
          function (t, e, n) {
            t.exports = n(104);
          },
          function (t, e, n) {
            n(105);
            var r = n(21);
            t.exports = r.Object.assign;
          },
          function (t, e, n) {
            var r = n(5),
              o = n(106);
            r({target: 'Object', stat: !0, forced: Object.assign !== o}, {assign: o});
          },
          function (t, e, n) {
            'use strict';
            var r = n(6),
              o = n(4),
              i = n(35),
              a = n(48),
              s = n(44),
              c = n(33),
              u = n(45),
              l = Object.assign;
            t.exports =
              !l ||
              o(function () {
                var t = {},
                  e = {},
                  n = Symbol();
                return (
                  (t[n] = 7),
                  'abcdefghijklmnopqrst'.split('').forEach(function (t) {
                    e[t] = t;
                  }),
                  7 != l({}, t)[n] || 'abcdefghijklmnopqrst' != i(l({}, e)).join('')
                );
              })
                ? function (t, e) {
                    for (var n = c(t), o = arguments.length, l = 1, p = a.f, f = s.f; o > l; )
                      for (var d, h = u(arguments[l++]), _ = p ? i(h).concat(p(h)) : i(h), v = _.length, g = 0; v > g; )
                        (d = _[g++]), (r && !f.call(h, d)) || (n[d] = h[d]);
                    return n;
                  }
                : l;
          },
          function (t, e, n) {
            t.exports = n(108);
          },
          function (t, e, n) {
            n(109);
            var r = n(21);
            t.exports = r.Object.keys;
          },
          function (t, e, n) {
            var r = n(5),
              o = n(33),
              i = n(35);
            r(
              {
                target: 'Object',
                stat: !0,
                forced: n(4)(function () {
                  i(1);
                })
              },
              {
                keys: function (t) {
                  return i(o(t));
                }
              }
            );
          },
          function (t, e, n) {
            'use strict';
            var r =
              (this && this.__spreadArrays) ||
              function () {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                var r = Array(t),
                  o = 0;
                for (e = 0; e < n; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                return r;
              };
            Object.defineProperty(e, '__esModule', {value: !0});
            var o,
              i = n(59);
            !(function (t) {
              (t.Show = 'show'), (t.Hide = 'hide');
            })(o || (o = {}));
            var a = i.getContribLogger({module: 'contrib-common', class: 'CuepointEngine'}),
              s = (function () {
                function t(t, e) {
                  (this.isFirstTime = !0),
                    (this.enabled = !0),
                    (this.lastHandledTime = null),
                    (this.lastHandledTimeIndex = null),
                    (this.nextTimeToHandle = null),
                    (this.cuepointChanges = []),
                    a.debug('executed', {method: 'ctor'}),
                    (this.reasonableSeekThreshold = Math.max(2e3, (e && e.reasonableSeekThreshold) || 0)),
                    (this._cuepoints = t),
                    this.prepareCuepoint();
                }
                return (
                  Object.defineProperty(t.prototype, 'cuepoints', {
                    get: function () {
                      return r(this._cuepoints);
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.getSnapshot = function (t) {
                    var e = this.findClosestLastIndexByTime(t);
                    return (
                      a.debug('create snapshot based on time ' + t, {method: 'getSnapshot', data: {timeIndex: e}}), this.createCuepointSnapshot(e)
                    );
                  }),
                  (t.prototype.updateTime = function (t, e, n) {
                    void 0 === e && (e = !1);
                    var r = this.isFirstTime,
                      o = this.lastHandledTime,
                      i = this.nextTimeToHandle;
                    if (0 === this.cuepointChanges.length)
                      return (
                        r && (a.info('cuepoint list empty. will always return empty snapshot', {method: 'updateTime'}), (this.isFirstTime = !1)),
                        {snapshot: []}
                      );
                    var s = !r && null !== o && null !== i && (o > t || t - i > this.reasonableSeekThreshold),
                      c =
                        r ||
                        (null !== this.lastHandledTime && this.lastHandledTime > t) ||
                        (null != this.nextTimeToHandle && t >= this.nextTimeToHandle),
                      u = this.findClosestLastIndexByTime(t),
                      l = u < 0 ? 0 : this.cuepointChanges[u].time;
                    if (!c) return e ? {snapshot: this.createCuepointSnapshot(u, n)} : {delta: this.createEmptyDelta()};
                    if (
                      (a.debug('has changes to handle. check if need to return snapshot instead of delta based on provided new time', {
                        method: 'updateTime',
                        data: {currentTime: t, closestChangeIndex: u, closestChangeTime: l, lastHandledTime: o, nextTimeToHandle: i, isFirstTime: r}
                      }),
                      r || e || s)
                    ) {
                      a.debug("some conditions doesn't allow returning delta, return snapshot instead", {
                        method: 'updateTime',
                        data: {isFirstTime: r, userSeeked: s, forceSnapshot: e}
                      });
                      var p = this.createCuepointSnapshot(u, n);
                      return this.updateInternals(l, u), {snapshot: p};
                    }
                    var f = this.createCuepointDelta(u, n);
                    return this.updateInternals(l, u), {delta: f};
                  }),
                  (t.prototype.getCurrentCuepointSnapshot = function () {
                    return this.lastHandledTimeIndex ? this.createCuepointSnapshot(this.lastHandledTimeIndex) : [];
                  }),
                  (t.prototype.createCuepointSnapshot = function (t, e) {
                    if (!this.enabled || t < 0 || !this.cuepointChanges || 0 === this.cuepointChanges.length)
                      return (
                        a.debug('resulted with empty snapshot', {
                          method: 'createCuepointSnapshot',
                          data: {targetIndex: t, enabled: this.enabled, cuepointCount: (this.cuepointChanges || []).length}
                        }),
                        []
                      );
                    for (var n = [], r = 0; r <= t; r++) {
                      var i = this.cuepointChanges[r],
                        s = n.indexOf(i.cuePoint);
                      i.type === o.Show ? -1 === s && n.push(i.cuePoint) : -1 !== s && n.splice(s, 1);
                    }
                    return a.debug('resulted snapshot', {method: 'createCuepointSnapshot', data: {snapshot: n}}), e && (n = n.filter(e)), n;
                  }),
                  (t.prototype.createCuepointDelta = function (t, e) {
                    if (!this.enabled || !this.cuepointChanges || 0 === this.cuepointChanges.length)
                      return (
                        a.debug('resulted with empty delta', {
                          method: 'createCuepointDelta',
                          data: {enabled: this.enabled, cuepointCount: (this.cuepointChanges || []).length}
                        }),
                        this.createEmptyDelta()
                      );
                    var n = this.lastHandledTimeIndex;
                    if (null === n)
                      return a.debug('invalid internal state. resulted with empty delta', {method: 'createCuepointDelta'}), this.createEmptyDelta();
                    var r = [],
                      i = [];
                    a.info('find cuepoint that were added or removed', {method: 'createCuepointDelta'});
                    for (var s = n + 1; s <= t; s++) {
                      var c = this.cuepointChanges[s],
                        u = r.indexOf(c.cuePoint);
                      c.type === o.Show
                        ? -1 === u && r.push(c.cuePoint)
                        : -1 !== u
                        ? (a.info(
                            'cuepoint was marked with type ' + c.type + ' at ' + c.time + ". remove from new cuepoint list as it wasn't visible yet",
                            {method: 'createCuepointDelta', data: {cuepoint: c.cuePoint}}
                          ),
                          r.splice(u, 1))
                        : -1 === i.indexOf(c.cuePoint) &&
                          (a.info('cuepoint was marked with type ' + c.type + ' at ' + c.time + '. add to removed cuepoint list', {
                            method: 'createCuepointDelta',
                            data: {cuepoint: c.cuePoint}
                          }),
                          i.push(c.cuePoint));
                    }
                    return (
                      a.debug('resulted delta', {method: 'createCuepointDelta', data: {newCuepoint: r, removedCuepoint: i}}),
                      e && ((r = r.filter(e)), (i = i.filter(e))),
                      {show: r, hide: i}
                    );
                  }),
                  (t.prototype.updateInternals = function (t, e) {
                    var n = this.cuepointChanges;
                    if (n && 0 !== n.length) {
                      var r = e >= n.length - 1,
                        o = null === e;
                      (this.lastHandledTime = t),
                        (this.lastHandledTimeIndex = e),
                        (this.nextTimeToHandle = o ? n[0].time : r ? n[n.length - 1].time : n[e + 1].time),
                        (this.isFirstTime = !1);
                    }
                  }),
                  (t.prototype.createEmptyDelta = function () {
                    return {show: [], hide: []};
                  }),
                  (t.prototype.binarySearch = function (t, e) {
                    if (!t || 0 === t.length) return null;
                    if (e < t[0].time) return -1;
                    if (e > t[t.length - 1].time) return t.length - 1;
                    for (var n = 0, r = t.length - 1; n <= r; ) {
                      var o = Math.floor((r + n + 1) / 2);
                      if (e < t[o].time) r = o - 1;
                      else {
                        if (!(e > t[o].time)) return o;
                        n = o + 1;
                      }
                    }
                    return Math.min(n, r);
                  }),
                  (t.prototype.findClosestLastIndexByTime = function (t) {
                    var e = this.cuepointChanges,
                      n = this.binarySearch(e, t);
                    if (null === n) return -1;
                    for (var r = e.length; n < r - 1 && e[n + 1].time === t; ) n++;
                    return n;
                  }),
                  (t.prototype.prepareCuepoint = function () {
                    var t = this;
                    (this._cuepoints || []).forEach(function (e) {
                      null !== e.startTime &&
                        void 0 !== e.startTime &&
                        e.startTime >= 0 &&
                        t.cuepointChanges.push({time: e.startTime, type: o.Show, cuePoint: e}),
                        null !== e.endTime &&
                          void 0 !== e.endTime &&
                          e.endTime >= 0 &&
                          t.cuepointChanges.push({time: e.endTime, type: o.Hide, cuePoint: e});
                    }),
                      this.cuepointChanges.sort(function (t, e) {
                        return t.time < e.time ? -1 : t.time === e.time ? 0 : 1;
                      }),
                      a.debug('tracking ' + this.cuepointChanges.length + ' changes', {
                        method: 'prepareCuepoint',
                        data: {changes: this.cuepointChanges}
                      });
                  }),
                  t
                );
              })();
            e.CuepointEngine = s;
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = (function () {
              function t() {
                this._cache = {};
              }
              return (
                (t.get = function (e) {
                  return (e.__contrib__ = e.__contrib__ || {}), (e.__contrib__.services = e.__contrib__.services || new t()), e.__contrib__.services;
                }),
                (t.prototype.get = function (t) {
                  var e = this._cache[t];
                  if (!e) throw new Error('cannot find resource with token ' + t);
                  return e;
                }),
                (t.prototype.register = function (t, e) {
                  var n = this._cache[t];
                  return n || (n = this._cache[t] = {instance: e()}), n.instance;
                }),
                t
              );
            })();
            e.PlayerContribRegistry = r;
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = n(60),
              o = (function () {
                function t() {}
                return (
                  (t.getAnonymousUserId = function (e) {
                    return 'undefined' == typeof Storage
                      ? t._generateAnonymousUserId(e)
                      : ((n = localStorage.getItem('anonymousUserId')) ||
                          ((n = t._generateAnonymousUserId(e)), localStorage.setItem('anonymousUserId', n)),
                        n);
                    var n;
                  }),
                  (t._generateAnonymousUserId = function (t) {
                    return '##' + t + 'HashSeparator' + r.UUID.numberedUuidV1() + '##';
                  }),
                  t
                );
              })();
            e.KalturaLiveServices = o;
          },
          function (t, e, n) {
            var r,
              o,
              i = n(114),
              a = n(61),
              s = 0,
              c = 0;
            t.exports = function (t, e, n) {
              var u = (e && n) || 0,
                l = e || [],
                p = (t = t || {}).node || r,
                f = void 0 !== t.clockseq ? t.clockseq : o;
              if (null == p || null == f) {
                var d = i();
                null == p && (p = r = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]), null == f && (f = o = 16383 & ((d[6] << 8) | d[7]));
              }
              var h = void 0 !== t.msecs ? t.msecs : new Date().getTime(),
                _ = void 0 !== t.nsecs ? t.nsecs : c + 1,
                v = h - s + (_ - c) / 1e4;
              if ((v < 0 && void 0 === t.clockseq && (f = (f + 1) & 16383), (v < 0 || h > s) && void 0 === t.nsecs && (_ = 0), _ >= 1e4))
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
              (s = h), (c = _), (o = f);
              var g = (1e4 * (268435455 & (h += 122192928e5)) + _) % 4294967296;
              (l[u++] = (g >>> 24) & 255), (l[u++] = (g >>> 16) & 255), (l[u++] = (g >>> 8) & 255), (l[u++] = 255 & g);
              var y = ((h / 4294967296) * 1e4) & 268435455;
              (l[u++] = (y >>> 8) & 255),
                (l[u++] = 255 & y),
                (l[u++] = ((y >>> 24) & 15) | 16),
                (l[u++] = (y >>> 16) & 255),
                (l[u++] = (f >>> 8) | 128),
                (l[u++] = 255 & f);
              for (var m = 0; m < 6; ++m) l[u + m] = p[m];
              return e || a(l);
            };
          },
          function (t, e) {
            var n =
              ('undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
              ('undefined' != typeof msCrypto && 'function' == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto));
            if (n) {
              var r = new Uint8Array(16);
              t.exports = function () {
                return n(r), r;
              };
            } else {
              var o = new Array(16);
              t.exports = function () {
                for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), (o[e] = (t >>> ((3 & e) << 3)) & 255);
                return o;
              };
            }
          },
          function (t, e, n) {
            var r = n(116),
              o = n(117);
            t.exports = r('v5', 80, o);
          },
          function (t, e, n) {
            var r = n(61);
            t.exports = function (t, e, n) {
              var o = function (t, o, i, a) {
                var s = (i && a) || 0;
                if (
                  ('string' == typeof t &&
                    (t = (function (t) {
                      t = unescape(encodeURIComponent(t));
                      for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
                      return e;
                    })(t)),
                  'string' == typeof o &&
                    (o = (function (t) {
                      var e = [];
                      return (
                        t.replace(/[a-fA-F0-9]{2}/g, function (t) {
                          e.push(parseInt(t, 16));
                        }),
                        e
                      );
                    })(o)),
                  !Array.isArray(t))
                )
                  throw TypeError('value must be an array of bytes');
                if (!Array.isArray(o) || 16 !== o.length) throw TypeError('namespace must be uuid string or an Array of 16 byte values');
                var c = n(o.concat(t));
                if (((c[6] = (15 & c[6]) | e), (c[8] = (63 & c[8]) | 128), i)) for (var u = 0; u < 16; ++u) i[s + u] = c[u];
                return i || r(c);
              };
              try {
                o.name = t;
              } catch (t) {}
              return (o.DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'), (o.URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8'), o;
            };
          },
          function (t, e, n) {
            'use strict';
            function r(t, e, n, r) {
              switch (t) {
                case 0:
                  return (e & n) ^ (~e & r);
                case 1:
                  return e ^ n ^ r;
                case 2:
                  return (e & n) ^ (e & r) ^ (n & r);
                case 3:
                  return e ^ n ^ r;
              }
            }
            function o(t, e) {
              return (t << e) | (t >>> (32 - e));
            }
            t.exports = function (t) {
              var e = [1518500249, 1859775393, 2400959708, 3395469782],
                n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
              if ('string' == typeof t) {
                var i = unescape(encodeURIComponent(t));
                t = new Array(i.length);
                for (var a = 0; a < i.length; a++) t[a] = i.charCodeAt(a);
              }
              t.push(128);
              var s = t.length / 4 + 2,
                c = Math.ceil(s / 16),
                u = new Array(c);
              for (a = 0; a < c; a++) {
                u[a] = new Array(16);
                for (var l = 0; l < 16; l++)
                  u[a][l] = (t[64 * a + 4 * l] << 24) | (t[64 * a + 4 * l + 1] << 16) | (t[64 * a + 4 * l + 2] << 8) | t[64 * a + 4 * l + 3];
              }
              for (
                u[c - 1][14] = (8 * (t.length - 1)) / Math.pow(2, 32),
                  u[c - 1][14] = Math.floor(u[c - 1][14]),
                  u[c - 1][15] = (8 * (t.length - 1)) & 4294967295,
                  a = 0;
                a < c;
                a++
              ) {
                for (var p = new Array(80), f = 0; f < 16; f++) p[f] = u[a][f];
                for (f = 16; f < 80; f++) p[f] = o(p[f - 3] ^ p[f - 8] ^ p[f - 14] ^ p[f - 16], 1);
                var d = n[0],
                  h = n[1],
                  _ = n[2],
                  v = n[3],
                  g = n[4];
                for (f = 0; f < 80; f++) {
                  var y = Math.floor(f / 20),
                    m = (o(d, 5) + r(y, h, _, v) + g + e[y] + p[f]) >>> 0;
                  (g = v), (v = _), (_ = o(h, 30) >>> 0), (h = d), (d = m);
                }
                (n[0] = (n[0] + d) >>> 0), (n[1] = (n[1] + h) >>> 0), (n[2] = (n[2] + _) >>> 0), (n[3] = (n[3] + v) >>> 0), (n[4] = (n[4] + g) >>> 0);
              }
              return [
                (n[0] >> 24) & 255,
                (n[0] >> 16) & 255,
                (n[0] >> 8) & 255,
                255 & n[0],
                (n[1] >> 24) & 255,
                (n[1] >> 16) & 255,
                (n[1] >> 8) & 255,
                255 & n[1],
                (n[2] >> 24) & 255,
                (n[2] >> 16) & 255,
                (n[2] >> 8) & 255,
                255 & n[2],
                (n[3] >> 24) & 255,
                (n[3] >> 16) & 255,
                (n[3] >> 8) & 255,
                255 & n[3],
                (n[4] >> 24) & 255,
                (n[4] >> 16) & 255,
                (n[4] >> 8) & 255,
                255 & n[4]
              ];
            };
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = (function () {
              function t() {
                (this._eventListeners = {}), (this._wildcardEventListeners = []);
              }
              return (
                (t.prototype.on = function (t, e) {
                  '*' !== t ? (this._eventListeners[t] || (this._eventListeners[t] = [])).push(e) : this._wildcardEventListeners.push(e);
                }),
                (t.prototype.off = function (t, e) {
                  if ('*' !== t) {
                    var n = this._eventListeners[t];
                    n && n.splice(n.indexOf(e) >>> 0, 1);
                  } else this._wildcardEventListeners.splice(this._wildcardEventListeners.indexOf(e) >>> 0, 1);
                }),
                (t.prototype.emit = function (t) {
                  (this._eventListeners[t.type] || []).slice().map(function (e) {
                    e(t);
                  }),
                    this._wildcardEventListeners.slice().map(function (e) {
                      e(t);
                    });
                }),
                t
              );
            })();
            e.EventsManager = r;
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0}),
              (e.debounce = function (t, e, n) {
                var r;
                return (
                  void 0 === e && (e = 50),
                  void 0 === n && (n = {isImmediate: !1}),
                  function () {
                    for (var o = this, i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
                    var s = function () {
                        (r = void 0), n.isImmediate || t.apply(o, i);
                      },
                      c = n.isImmediate && void 0 === r;
                    void 0 !== r && clearTimeout(r), (r = setTimeout(s, e)), c && t.apply(this, i);
                  }
                );
              });
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = n(62),
              o = (function () {
                function t() {}
                return (
                  (t.getPlayerConfig = function (t, e, n, o) {
                    var i = r.ObjectUtils.get(t.config, e, {});
                    return r.ObjectUtils.mergeDefaults(i, n, o);
                  }),
                  t
                );
              })();
            e.KalturaPlayerUtils = o;
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = (function () {
              function t() {}
              return (
                (t.findIndex = function (t, e) {
                  for (var n = 0; n < t.length; ) {
                    if (e(t[n])) return n;
                    n++;
                  }
                  return -1;
                }),
                t
              );
            })();
            e.ArrayUtils = r;
          }
        ]));
    },
    function (t, e, n) {
      var r, o;
      window,
        (t.exports =
          ((r = n(12)),
          (o = n(0)),
          (function (t) {
            var e = {};
            function n(r) {
              if (e[r]) return e[r].exports;
              var o = (e[r] = {i: r, l: !1, exports: {}});
              return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
            }
            return (
              (n.m = t),
              (n.c = e),
              (n.d = function (t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r});
              }),
              (n.r = function (t) {
                'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
                  Object.defineProperty(t, '__esModule', {value: !0});
              }),
              (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
                var r = Object.create(null);
                if ((n.r(r), Object.defineProperty(r, 'default', {enumerable: !0, value: t}), 2 & e && 'string' != typeof t))
                  for (var o in t)
                    n.d(
                      r,
                      o,
                      function (e) {
                        return t[e];
                      }.bind(null, o)
                    );
                return r;
              }),
              (n.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return n.d(e, 'a', e), e;
              }),
              (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (n.p = ''),
              n((n.s = 30))
            );
          })([
            function (t, e) {
              t.exports = r;
            },
            function (t, e) {
              t.exports = o;
            },
            function (t, e, n) {
              'use strict';
              var r = n(19),
                o = n(80),
                i = Object.prototype.toString;
              function a(t) {
                return '[object Array]' === i.call(t);
              }
              function s(t) {
                return null !== t && 'object' == typeof t;
              }
              function c(t) {
                return '[object Function]' === i.call(t);
              }
              function u(t, e) {
                if (null != t)
                  if (('object' != typeof t && (t = [t]), a(t))) for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
                  else for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t);
              }
              t.exports = {
                isArray: a,
                isArrayBuffer: function (t) {
                  return '[object ArrayBuffer]' === i.call(t);
                },
                isBuffer: o,
                isFormData: function (t) {
                  return 'undefined' != typeof FormData && t instanceof FormData;
                },
                isArrayBufferView: function (t) {
                  return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
                    ? ArrayBuffer.isView(t)
                    : t && t.buffer && t.buffer instanceof ArrayBuffer;
                },
                isString: function (t) {
                  return 'string' == typeof t;
                },
                isNumber: function (t) {
                  return 'number' == typeof t;
                },
                isObject: s,
                isUndefined: function (t) {
                  return void 0 === t;
                },
                isDate: function (t) {
                  return '[object Date]' === i.call(t);
                },
                isFile: function (t) {
                  return '[object File]' === i.call(t);
                },
                isBlob: function (t) {
                  return '[object Blob]' === i.call(t);
                },
                isFunction: c,
                isStream: function (t) {
                  return s(t) && c(t.pipe);
                },
                isURLSearchParams: function (t) {
                  return 'undefined' != typeof URLSearchParams && t instanceof URLSearchParams;
                },
                isStandardBrowserEnv: function () {
                  return (
                    ('undefined' == typeof navigator ||
                      ('ReactNative' !== navigator.product && 'NativeScript' !== navigator.product && 'NS' !== navigator.product)) &&
                    'undefined' != typeof window &&
                    'undefined' != typeof document
                  );
                },
                forEach: u,
                merge: function t() {
                  var e = {};
                  function n(n, r) {
                    'object' == typeof e[r] && 'object' == typeof n ? (e[r] = t(e[r], n)) : (e[r] = n);
                  }
                  for (var r = 0, o = arguments.length; r < o; r++) u(arguments[r], n);
                  return e;
                },
                deepMerge: function t() {
                  var e = {};
                  function n(n, r) {
                    'object' == typeof e[r] && 'object' == typeof n ? (e[r] = t(e[r], n)) : (e[r] = 'object' == typeof n ? t({}, n) : n);
                  }
                  for (var r = 0, o = arguments.length; r < o; r++) u(arguments[r], n);
                  return e;
                },
                extend: function (t, e, n) {
                  return (
                    u(e, function (e, o) {
                      t[o] = n && 'function' == typeof e ? r(e, n) : e;
                    }),
                    t
                  );
                },
                trim: function (t) {
                  return t.replace(/^\s*/, '').replace(/\s*$/, '');
                }
              };
            },
            function (t, e, n) {
              'use strict';
              t.exports = function (t) {
                var e = [];
                return (
                  (e.toString = function () {
                    return this.map(function (e) {
                      var n = (function (t, e) {
                        var n,
                          r,
                          o,
                          i = t[1] || '',
                          a = t[3];
                        if (!a) return i;
                        if (e && 'function' == typeof btoa) {
                          var s =
                              ((n = a),
                              (r = btoa(unescape(encodeURIComponent(JSON.stringify(n))))),
                              (o = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(r)),
                              '/*# '.concat(o, ' */')),
                            c = a.sources.map(function (t) {
                              return '/*# sourceURL='.concat(a.sourceRoot || '').concat(t, ' */');
                            });
                          return [i].concat(c).concat([s]).join('\n');
                        }
                        return [i].join('\n');
                      })(e, t);
                      return e[2] ? '@media '.concat(e[2], ' {').concat(n, '}') : n;
                    }).join('');
                  }),
                  (e.i = function (t, n, r) {
                    'string' == typeof t && (t = [[null, t, '']]);
                    var o = {};
                    if (r)
                      for (var i = 0; i < this.length; i++) {
                        var a = this[i][0];
                        null != a && (o[a] = !0);
                      }
                    for (var s = 0; s < t.length; s++) {
                      var c = [].concat(t[s]);
                      (r && o[c[0]]) || (n && (c[2] ? (c[2] = ''.concat(n, ' and ').concat(c[2])) : (c[2] = n)), e.push(c));
                    }
                  }),
                  e
                );
              };
            },
            function (t, e, n) {
              var r,
                o,
                i = {},
                a =
                  ((r = function () {
                    return window && document && document.all && !window.atob;
                  }),
                  function () {
                    return void 0 === o && (o = r.apply(this, arguments)), o;
                  }),
                s = function (t, e) {
                  return e ? e.querySelector(t) : document.querySelector(t);
                },
                c = (function (t) {
                  var e = {};
                  return function (t, n) {
                    if ('function' == typeof t) return t();
                    if (void 0 === e[t]) {
                      var r = s.call(this, t, n);
                      if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                        try {
                          r = r.contentDocument.head;
                        } catch (t) {
                          r = null;
                        }
                      e[t] = r;
                    }
                    return e[t];
                  };
                })(),
                u = null,
                l = 0,
                p = [],
                f = n(38);
              function d(t, e) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n],
                    o = i[r.id];
                  if (o) {
                    o.refs++;
                    for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
                    for (; a < r.parts.length; a++) o.parts.push(m(r.parts[a], e));
                  } else {
                    var s = [];
                    for (a = 0; a < r.parts.length; a++) s.push(m(r.parts[a], e));
                    i[r.id] = {id: r.id, refs: 1, parts: s};
                  }
                }
              }
              function h(t, e) {
                for (var n = [], r = {}, o = 0; o < t.length; o++) {
                  var i = t[o],
                    a = e.base ? i[0] + e.base : i[0],
                    s = {css: i[1], media: i[2], sourceMap: i[3]};
                  r[a] ? r[a].parts.push(s) : n.push((r[a] = {id: a, parts: [s]}));
                }
                return n;
              }
              function _(t, e) {
                var n = c(t.insertInto);
                if (!n)
                  throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var r = p[p.length - 1];
                if ('top' === t.insertAt)
                  r ? (r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e)) : n.insertBefore(e, n.firstChild), p.push(e);
                else if ('bottom' === t.insertAt) n.appendChild(e);
                else {
                  if ('object' != typeof t.insertAt || !t.insertAt.before)
                    throw new Error(
                      "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
                    );
                  var o = c(t.insertAt.before, n);
                  n.insertBefore(e, o);
                }
              }
              function v(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var e = p.indexOf(t);
                e >= 0 && p.splice(e, 1);
              }
              function g(t) {
                var e = document.createElement('style');
                if ((void 0 === t.attrs.type && (t.attrs.type = 'text/css'), void 0 === t.attrs.nonce)) {
                  var r = n.nc;
                  r && (t.attrs.nonce = r);
                }
                return y(e, t.attrs), _(t, e), e;
              }
              function y(t, e) {
                Object.keys(e).forEach(function (n) {
                  t.setAttribute(n, e[n]);
                });
              }
              function m(t, e) {
                var n, r, o, i;
                if (e.transform && t.css) {
                  if (!(i = 'function' == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () {};
                  t.css = i;
                }
                if (e.singleton) {
                  var a = l++;
                  (n = u || (u = g(e))), (r = w.bind(null, n, a, !1)), (o = w.bind(null, n, a, !0));
                } else
                  t.sourceMap &&
                  'function' == typeof URL &&
                  'function' == typeof URL.createObjectURL &&
                  'function' == typeof URL.revokeObjectURL &&
                  'function' == typeof Blob &&
                  'function' == typeof btoa
                    ? ((n = (function (t) {
                        var e = document.createElement('link');
                        return void 0 === t.attrs.type && (t.attrs.type = 'text/css'), (t.attrs.rel = 'stylesheet'), y(e, t.attrs), _(t, e), e;
                      })(e)),
                      (r = P.bind(null, n, e)),
                      (o = function () {
                        v(n), n.href && URL.revokeObjectURL(n.href);
                      }))
                    : ((n = g(e)),
                      (r = C.bind(null, n)),
                      (o = function () {
                        v(n);
                      }));
                return (
                  r(t),
                  function (e) {
                    if (e) {
                      if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                      r((t = e));
                    } else o();
                  }
                );
              }
              t.exports = function (t, e) {
                if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
                  throw new Error('The style-loader cannot be used in a non-browser environment');
                ((e = e || {}).attrs = 'object' == typeof e.attrs ? e.attrs : {}),
                  e.singleton || 'boolean' == typeof e.singleton || (e.singleton = a()),
                  e.insertInto || (e.insertInto = 'head'),
                  e.insertAt || (e.insertAt = 'bottom');
                var n = h(t, e);
                return (
                  d(n, e),
                  function (t) {
                    for (var r = [], o = 0; o < n.length; o++) {
                      var a = n[o];
                      (s = i[a.id]).refs--, r.push(s);
                    }
                    for (t && d(h(t, e), e), o = 0; o < r.length; o++) {
                      var s;
                      if (0 === (s = r[o]).refs) {
                        for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                        delete i[s.id];
                      }
                    }
                  }
                );
              };
              var b,
                x =
                  ((b = []),
                  function (t, e) {
                    return (b[t] = e), b.filter(Boolean).join('\n');
                  });
              function w(t, e, n, r) {
                var o = n ? '' : r.css;
                if (t.styleSheet) t.styleSheet.cssText = x(e, o);
                else {
                  var i = document.createTextNode(o),
                    a = t.childNodes;
                  a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
                }
              }
              function C(t, e) {
                var n = e.css,
                  r = e.media;
                if ((r && t.setAttribute('media', r), t.styleSheet)) t.styleSheet.cssText = n;
                else {
                  for (; t.firstChild; ) t.removeChild(t.firstChild);
                  t.appendChild(document.createTextNode(n));
                }
              }
              function P(t, e, n) {
                var r = n.css,
                  o = n.sourceMap,
                  i = void 0 === e.convertToAbsoluteUrls && o;
                (e.convertToAbsoluteUrls || i) && (r = f(r)),
                  o && (r += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + ' */');
                var a = new Blob([r], {type: 'text/css'}),
                  s = t.href;
                (t.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
              }
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(0);
              e.getContribConfig = function (t, e, n, o) {
                return r.KalturaPlayerUtils.getPlayerConfig(t, 'contrib.' + e, n, o);
              };
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
                })(n(53));
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(0).getContribLogger({module: 'contrib-ui', class: 'PresetsUtils'}),
                o = (function () {
                  function t() {}
                  return (
                    (t.groupPresetAreasByType = function (t) {
                      var e = t.presetAreasMapping,
                        n = t.acceptableTypes,
                        o = {};
                      return (
                        n.forEach(function (t) {
                          return (o[t] = {});
                        }),
                        Object.keys(e).forEach(function (t) {
                          Object.keys(e[t]).forEach(function (i) {
                            -1 === n.indexOf(i)
                              ? r.warn(
                                  "Unknown preset area type '" +
                                    i +
                                    "' provided, ignoring specific type mapping. Acceptable values are '" +
                                    n.join(', '),
                                  {}
                                )
                              : (o[i][t] = e[t][i]);
                          });
                        }),
                        o
                      );
                    }),
                    t
                  );
                })();
              e.PresetsUtils = o;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  (t.MediaLoaded = 'MediaLoaded'), (t.OnDemand = 'OnDemand'), (t.Immediate = 'Immediate'), (t.FirstPlay = 'FirstPlay');
                })(e.FloatingUIModes || (e.FloatingUIModes = {})),
                (function (t) {
                  (t.VideoArea = 'VideoArea'), (t.PresetArea = 'PresetArea'), (t.InteractiveArea = 'InteractiveArea');
                })(e.FloatingPositions || (e.FloatingPositions = {}));
            },
            function (t, e, n) {
              'use strict';
              t.exports = function (t, e) {
                return (
                  e || (e = {}),
                  'string' != typeof (t = t && t.__esModule ? t.default : t)
                    ? t
                    : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
                      e.hash && (t += e.hash),
                      /["'() \t\n]/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"') : t)
                );
              };
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  (t.AlongSideTheVideo = 'AlongSideTheVideo'), (t.Hidden = 'Hidden'), (t.OverTheVideo = 'OverTheVideo');
                })(e.KitchenSinkExpandModes || (e.KitchenSinkExpandModes = {})),
                (function (t) {
                  (t.Top = 'top'), (t.Left = 'left'), (t.Right = 'right'), (t.Bottom = 'bottom');
                })(e.KitchenSinkPositions || (e.KitchenSinkPositions = {}));
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (e.getPlayerSize = function (t) {
                  return t ? t.dimensions : {width: 0, height: 0};
                }),
                (e.getVideoSize = function (t) {
                  if (!t) return {width: 0, height: 0};
                  var e = t.getActiveTracks().video;
                  return e ? {width: e.width, height: e.height} : {width: 0, height: 0};
                });
            },
            function (t, e, n) {
              'use strict';
              var r =
                  (this && this.__assign) ||
                  function () {
                    return (r =
                      Object.assign ||
                      function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                          for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t;
                      }).apply(this, arguments);
                  },
                o =
                  (this && this.__rest) ||
                  function (t, e) {
                    var n = {};
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
                      var o = 0;
                      for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
                        e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
                    }
                    return n;
                  };
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(0),
                a = n(8),
                s = n(45),
                c = n(1);
              !(function (t) {
                (t.Info = 'Info'), (t.Success = 'Success'), (t.Warn = 'Warn'), (t.Error = 'Error');
              })(e.ToastSeverity || (e.ToastSeverity = {}));
              var u = (function () {
                function t(t) {
                  var e = this;
                  (this.options = t),
                    (this._toasts = []),
                    (this._floatingItem = null),
                    (this._remove = function (t) {
                      var n = e._findToastIndexById(t);
                      -1 !== n &&
                        (clearTimeout(e._toasts[n].timerSubscription),
                        e._toasts.splice(n, 1),
                        e._updateToastsUI(),
                        0 === e._toasts.length && e._removeToastsContainer());
                    }),
                    (this._options = t);
                }
                return (
                  (t.prototype.add = function (t) {
                    var e = t.duration,
                      n = o(t, ['duration']);
                    this._floatingItem || this._addToastsContainer();
                    var a = {toastProps: r(r({}, n), {id: i.UUID.uuidV1(), onClose: this._remove}), duration: e, timerSubscription: null};
                    this._toasts.push(a), this._updateToastsUI(), this._startDurationTimer(a);
                  }),
                  (t.prototype.reset = function () {
                    var t = this;
                    this._toasts.forEach(function (e) {
                      t._remove(e.toastProps.id);
                    });
                  }),
                  (t.prototype._startDurationTimer = function (t) {
                    var e = this;
                    t.timerSubscription = setTimeout(function () {
                      e._remove(t.toastProps.id);
                    }, t.duration);
                  }),
                  (t.prototype._addToastsContainer = function () {
                    var t = this;
                    this._floatingItem = this._options.floatingManager.add({
                      label: 'Toasts',
                      mode: a.FloatingUIModes.Immediate,
                      position: a.FloatingPositions.InteractiveArea,
                      renderContent: function () {
                        return c.h(s.ToastsContainer, {
                          toasts: t._toasts.map(function (t) {
                            return t.toastProps;
                          })
                        });
                      }
                    });
                  }),
                  (t.prototype._removeToastsContainer = function () {
                    this._floatingItem && (this._options.floatingManager.remove(this._floatingItem), (this._floatingItem = null));
                  }),
                  (t.prototype._updateToastsUI = function () {
                    this._floatingItem && this._floatingItem.update();
                  }),
                  (t.prototype._findToastIndexById = function (t) {
                    for (var e = 0; e < this._toasts.length; ) {
                      if (this._toasts[e].toastProps.id === t) return e;
                      e++;
                    }
                    return -1;
                  }),
                  t
                );
              })();
              e.ToastManager = u;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(1),
                o = n(0),
                i = n(8),
                a = n(6),
                s = (function () {
                  function t(t) {
                    var e = this;
                    (this._destroyed = !1),
                      (this._isShown = !1),
                      (this._componentRef = null),
                      (this.remove = function () {
                        e._logger.info('remove item from player', {method: 'remove'}), (e._isShown = !1), e._componentRef && e._componentRef.update();
                      }),
                      (this.add = function () {
                        e._logger.info('add item to player', {method: 'add'}), (e._isShown = !0), e._componentRef && e._componentRef.update();
                      }),
                      (this._handleMediaLoaded = function () {
                        var t = e._options.kalturaPlayer;
                        t.removeEventListener(t.Event.MEDIA_LOADED, e._handleMediaLoaded), e.add();
                      }),
                      (this._handleFirstPlay = function () {
                        var t = e._options.kalturaPlayer;
                        t.removeEventListener(t.Event.FIRST_PLAY, e._handleFirstPlay), e.add();
                      }),
                      (this._options = t),
                      (this._logger = o.getContribLogger({module: 'contrib-ui', class: 'FloatingItem', context: t.data.label})),
                      this._logger.debug('executed', {method: 'constructor', data: {options: t}}),
                      this._logger.info('created item ' + t.data.label, {method: 'constructor'}),
                      this._addPlayerBindings();
                  }
                  return (
                    Object.defineProperty(t.prototype, 'data', {
                      get: function () {
                        return this._options.data;
                      },
                      enumerable: !0,
                      configurable: !0
                    }),
                    (t.prototype.update = function () {
                      this._componentRef && this._componentRef.update();
                    }),
                    (t.prototype.destroy = function () {
                      this._logger.info('destroy item', {method: 'destroy'}), (this._destroyed = !0), this.remove();
                    }),
                    (t.prototype.renderFloatingChild = function (t) {
                      var e = this,
                        n = this._options.data.label;
                      return r.h(a.ManagedComponent, {
                        label: n,
                        renderChildren: function () {
                          return e._options.data.renderContent(t);
                        },
                        isShown: function () {
                          return e._isShown;
                        },
                        ref: function (t) {
                          return (e._componentRef = t);
                        }
                      });
                    }),
                    (t.prototype._addPlayerBindings = function () {
                      var t = this._options,
                        e = t.kalturaPlayer,
                        n = t.data;
                      n.mode === i.FloatingUIModes.MediaLoaded && e.addEventListener(e.Event.MEDIA_LOADED, this._handleMediaLoaded),
                        n.mode === i.FloatingUIModes.FirstPlay && e.addEventListener(e.Event.FIRST_PLAY, this._handleFirstPlay),
                        n.mode === i.FloatingUIModes.Immediate && this.add();
                    }),
                    t
                  );
                })();
              e.FloatingItem = s;
            },
            function (t, e, n) {
              'use strict';
              var r =
                (this && this.__spreadArrays) ||
                function () {
                  for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                  var r = Array(t),
                    o = 0;
                  for (e = 0; e < n; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                  return r;
                };
              Object.defineProperty(e, '__esModule', {value: !0});
              var o,
                i = n(1),
                a = n(57),
                s = n(0),
                c = n(61),
                u = n(7),
                l = n(5);
              !(function (t) {
                (t.PresetResizeEvent = 'PresetResizeEvent'), (t.VideoResizeEvent = 'VideoResizeEvent');
              })((o = e.PresetManagerEventTypes || (e.PresetManagerEventTypes = {})));
              var p = ['PlayerArea'],
                f = {presetAreasMapping: {Playback: {PlayerArea: 'PlayerArea'}, Live: {PlayerArea: 'PlayerArea'}}},
                d = (function () {
                  function t(t) {
                    var e = this;
                    (this._events = new s.EventsManager()),
                      (this._isLocked = !1),
                      (this._items = []),
                      (this._pendingItems = []),
                      (this._registerToPlayer = function (t) {
                        t.addEventListener(KalturaPlayer.ui.EventType.UI_PRESET_RESIZE, e._notifyUIPresetResize),
                          t.addEventListener(KalturaPlayer.ui.EventType.VIDEO_RESIZE, e._notifyVideoResize);
                      }),
                      (this._notifyVideoResize = function () {
                        e._events.emit({type: o.VideoResizeEvent});
                      }),
                      (this._notifyUIPresetResize = function () {
                        e._events.emit({type: o.PresetResizeEvent});
                      }),
                      (this._unregisterToPlayer = function (t) {
                        t.removeEventListener(KalturaPlayer.ui.EventType.UI_PRESET_RESIZE, e._notifyUIPresetResize),
                          t.removeEventListener(KalturaPlayer.ui.EventType.VIDEO_RESIZE, e._notifyVideoResize);
                      }),
                      (this.on = this._events.on.bind(this._events)),
                      (this.off = this._events.off.bind(this._events)),
                      (this._options = t),
                      (this._presetConfig = l.getContribConfig(this._options.kalturaPlayer, 'ui.preset', f, {explicitMerge: ['presetAreasMapping']}));
                    var n = u.PresetsUtils.groupPresetAreasByType({presetAreasMapping: this._presetConfig.presetAreasMapping, acceptableTypes: p});
                    this.add({
                      label: 'preset-manager',
                      presetAreas: n.PlayerArea,
                      shareAdvancedPlayerAPI: !0,
                      renderChild: function () {
                        return i.h(c.UIPlayerAdapter, {onMount: e._registerToPlayer, onUnmount: e._unregisterToPlayer});
                      }
                    });
                  }
                  return (
                    (t.prototype.add = function (t) {
                      if (this._isLocked) return console.warn("cannot add new preset items once player completed its' setup phase"), null;
                      var e = new a.PresetItem({kalturaPlayer: this._options.kalturaPlayer, data: t});
                      this._pendingItems.push(e);
                    }),
                    (t.prototype.lockManager = function () {
                      this._isLocked = !0;
                    }),
                    (t.prototype.registerComponents = function () {
                      var t = [];
                      return (
                        this._pendingItems.forEach(function (e) {
                          t = r(t, e.playerConfig);
                        }),
                        (this._items = r(this._items, this._pendingItems)),
                        (this._pendingItems = []),
                        t.filter(Boolean)
                      );
                    }),
                    t
                  );
                })();
              e.PresetManager = d;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  (t.Playback = 'Playback'), (t.Live = 'Live');
                })(e.ReservedPresetNames || (e.ReservedPresetNames = {})),
                (function (t) {
                  (t.PresetFloating = 'PresetFloating'),
                    (t.BottomBarLeftControls = 'BottomBarLeftControls'),
                    (t.BottomBarRightControls = 'BottomBarRightControls'),
                    (t.TopBarLeftControls = 'TopBarLeftControls'),
                    (t.TopBarRightControls = 'TopBarRightControls'),
                    (t.SidePanelTop = 'SidePanelTop'),
                    (t.SidePanelLeft = 'SidePanelLeft'),
                    (t.SidePanelRight = 'SidePanelRight'),
                    (t.SidePanelBottom = 'SidePanelBottom'),
                    (t.PresetArea = 'PresetArea'),
                    (t.InteractiveArea = 'InteractiveArea'),
                    (t.PlayerArea = 'PlayerArea'),
                    (t.VideoArea = 'VideoArea');
                })(e.ReservedPresetAreas || (e.ReservedPresetAreas = {})),
                (function (t) {
                  (t.Before = 'Before'), (t.After = 'After'), (t.Replace = 'Replace');
                })(e.RelativeToTypes || (e.RelativeToTypes = {}));
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(1),
                o = n(0);
              e.UpperBarItem = function (t) {
                var e = this;
                (this.renderChild = function (t) {
                  var n = e._options.data,
                    o = n.onClick,
                    i = n.renderItem,
                    a = (n.label, i(t));
                  return r.h('div', {onClick: o, className: 'icon--clickable'}, a);
                }),
                  (this._options = t),
                  (this._logger = o.getContribLogger({module: 'contrib-ui', class: 'PresetItem', context: t.data.label})),
                  this._logger.debug('executed', {method: 'constructor', data: {options: t}}),
                  this._logger.info('created item ' + t.data.label, {method: 'constructor'});
              };
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(1),
                o = n(0),
                i = n(6),
                a = n(18),
                s = n(73),
                c = (function () {
                  function t(t) {
                    var e = this;
                    (this._componentRef = null),
                      (this._destroyed = !1),
                      (this._activationStateChange = function (t) {
                        var n = t.item;
                        e === n && e.update();
                      }),
                      (this.renderContentChild = function (t) {
                        if (!e._isDestroyed()) {
                          var n = e._options.data,
                            o = n.renderContent,
                            a = n.label,
                            c = e._options.kitchenSinkConfig;
                          return r.h(i.ManagedComponent, {
                            label: a,
                            fillContainer: !1,
                            renderChildren: function () {
                              return r.h(s.KitchenSink, {children: o(t), isActive: e.isActive(), kitchenSinkConfig: c});
                            },
                            isShown: function () {
                              return !e._destroyed;
                            },
                            ref: function (t) {
                              return (e._componentRef = t);
                            }
                          });
                        }
                      }),
                      (this._options = t),
                      (this._logger = o.getContribLogger({module: 'contrib-ui', class: 'KitchenSinkItem', context: t && t.data && t.data.label})),
                      this._logger.debug('executed', {method: 'constructor', data: {options: t}}),
                      this._logger.info('created item ' + t.data.label, {method: 'constructor'}),
                      this._options.eventManager.on(a.KitchenSinkEventTypes.ItemActiveStateChangeEvent, this._activationStateChange);
                  }
                  return (
                    Object.defineProperty(t.prototype, 'data', {
                      get: function () {
                        if (!this._isDestroyed()) return this._options.data;
                      },
                      enumerable: !0,
                      configurable: !0
                    }),
                    Object.defineProperty(t.prototype, 'displayName', {
                      get: function () {
                        if (!this._isDestroyed()) return this._options.data.label;
                      },
                      enumerable: !0,
                      configurable: !0
                    }),
                    (t.prototype.update = function () {
                      this._isDestroyed() || (this._componentRef && this._componentRef.update());
                    }),
                    (t.prototype.isActive = function () {
                      if (!this._isDestroyed()) return this._options.isActive(this);
                    }),
                    (t.prototype.activate = function () {
                      this._isDestroyed() || this._options.activate(this);
                    }),
                    (t.prototype.deactivate = function () {
                      this._isDestroyed() || this._options.deactivate(this);
                    }),
                    (t.prototype._destroy = function () {
                      this._isDestroyed() ||
                        (this._options.eventManager.off(a.KitchenSinkEventTypes.ItemActiveStateChangeEvent, this._activationStateChange),
                        this.update(),
                        (this._componentRef = null),
                        (this._options = null),
                        (this._destroyed = !0));
                    }),
                    (t.prototype._isDestroyed = function () {
                      return !!this._destroyed && (this._logger.warn("can't perform requested call, item was marked as destroyed", {}), !0);
                    }),
                    t
                  );
                })();
              e.KitchenSinkItem = c;
            },
            function (t, e, n) {
              'use strict';
              var r =
                (this && this.__spreadArrays) ||
                function () {
                  for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                  var r = Array(t),
                    o = 0;
                  for (e = 0; e < n; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                  return r;
                };
              Object.defineProperty(e, '__esModule', {value: !0});
              var o,
                i,
                a = n(1),
                s = n(10),
                c = n(17),
                u = n(0),
                l = n(68),
                p = n(71),
                f = n(6),
                d = n(7),
                h = n(5),
                _ = ['PlayerArea', 'SidePanelRight', 'SidePanelBottom'];
              !(function (t) {
                (t.Active = 'Active'), (t.InActive = 'InActive');
              })((o = e.ItemActiveStates || (e.ItemActiveStates = {}))),
                (function (t) {
                  t.ItemActiveStateChangeEvent = 'ItemActiveStateChangeEvent';
                })((i = e.KitchenSinkEventTypes || (e.KitchenSinkEventTypes = {})));
              var v = {
                  theme: {backgroundColor: 'rgba(0, 0, 0, .7)', blur: '10px'},
                  presetAreasMapping: {
                    Playback: {PlayerArea: 'PlayerArea', SidePanelRight: 'SidePanelRight', SidePanelBottom: 'SidePanelBottom'},
                    Live: {PlayerArea: 'PlayerArea', SidePanelRight: 'SidePanelRight', SidePanelBottom: 'SidePanelBottom'}
                  }
                },
                g = (function () {
                  function t(t) {
                    var e,
                      n = this;
                    (this.options = t),
                      (this._events = new u.EventsManager()),
                      (this._panels =
                        (((e = {})[s.KitchenSinkPositions.Bottom] = {ref: null, items: [], activeItem: null}),
                        (e[s.KitchenSinkPositions.Right] = {ref: null, items: [], activeItem: null}),
                        (e[s.KitchenSinkPositions.Top] = {ref: null, items: [], activeItem: null}),
                        (e[s.KitchenSinkPositions.Left] = {ref: null, items: [], activeItem: null}),
                        e)),
                      (this._kitchenSinkAdapterRef = null),
                      (this.on = this._events.on.bind(this._events)),
                      (this.off = this._events.off.bind(this._events)),
                      (this._toggle = function (t) {
                        n._isActive(t) ? n._deactivateItem(t) : n._activateItem(t);
                      }),
                      (this._activateItem = function (t) {
                        var e = t.data,
                          r = e.position,
                          a = e.expandMode,
                          s = n._panels[r];
                        s.activeItem !== t &&
                          (s.activeItem && n._events.emit({type: i.ItemActiveStateChangeEvent, state: o.InActive, item: s.activeItem}),
                          (s.activeItem = t),
                          n._events.emit({type: i.ItemActiveStateChangeEvent, state: o.Active, item: t}),
                          n._expand(r, a));
                      }),
                      (this._deactivateItem = function (t) {
                        var e = t.data.position,
                          r = n._panels[e];
                        r.activeItem === t &&
                          (n._collapse(e),
                          n._events.emit({type: i.ItemActiveStateChangeEvent, state: o.InActive, item: r.activeItem}),
                          (r.activeItem = null));
                      }),
                      (this._isActive = function (t) {
                        return n._panels[t.data.position].activeItem === t;
                      }),
                      (this._expand = function (t, e) {
                        n._kitchenSinkAdapterRef && n._kitchenSinkAdapterRef.expand(t, e);
                      }),
                      (this._renderChild = function (t) {
                        return a.h(f.ManagedComponent, {
                          label: 'kitchen-sink-manager',
                          renderChildren: function () {
                            return n._renderKitchenSink(t);
                          },
                          isShown: function () {
                            return !0;
                          },
                          ref: function (e) {
                            return (n._panels[t].ref = e);
                          }
                        });
                      }),
                      (this._setRef = function (t) {
                        n._kitchenSinkAdapterRef = t || null;
                      }),
                      (this._options = t),
                      (this._kitchenSinkConfig = h.getContribConfig(this._options.kalturaPlayer, 'ui.kitchenSink', v, {
                        explicitMerge: ['presetAreasMapping']
                      }));
                    var r = d.PresetsUtils.groupPresetAreasByType({
                      presetAreasMapping: this._kitchenSinkConfig.presetAreasMapping,
                      acceptableTypes: _
                    });
                    this.options.presetManager.add({
                      label: 'kitchen-sink-right',
                      fillContainer: !0,
                      presetAreas: r.SidePanelRight,
                      renderChild: this._renderChild.bind(this, s.KitchenSinkPositions.Right)
                    }),
                      this.options.presetManager.add({
                        label: 'kitchen-sink-bottom',
                        fillContainer: !0,
                        presetAreas: r.SidePanelBottom,
                        renderChild: this._renderChild.bind(this, s.KitchenSinkPositions.Bottom)
                      }),
                      this.options.presetManager.add({
                        label: 'kitchen-sink-adapter',
                        shareAdvancedPlayerAPI: !0,
                        presetAreas: r.PlayerArea,
                        renderChild: function () {
                          return a.h(p.KitchenSinkAdapter, {ref: n._setRef});
                        }
                      });
                  }
                  return (
                    (t.prototype.add = function (t) {
                      var e = this,
                        n = {
                          data: t,
                          isActive: this._isActive,
                          activate: this._activateItem,
                          deactivate: this._deactivateItem,
                          eventManager: this._events,
                          kitchenSinkConfig: this._kitchenSinkConfig
                        },
                        r = this._panels[t.position],
                        o = new c.KitchenSinkItem(n),
                        i = this.options.upperBarManager.add({
                          label: t.label,
                          renderItem: t.renderIcon,
                          onClick: function () {
                            return e._toggle(o);
                          }
                        });
                      return r.items.push({kitchenSinkItem: o, upperBarItem: i}), r.ref && r.ref.update(), o;
                    }),
                    (t.prototype.remove = function (t) {
                      var e = this._panels[t.data.position],
                        n = u.ArrayUtils.findIndex(e.items, function (e) {
                          var n = e.kitchenSinkItem;
                          return t === n;
                        });
                      if (-1 !== n) {
                        this._deactivateItem(t);
                        var r = e.items[n].upperBarItem;
                        t._destroy(), this.options.upperBarManager.remove(r), e.items.splice(n, 1), e.ref && e.ref.update();
                      }
                    }),
                    (t.prototype._collapse = function (t) {
                      this._kitchenSinkAdapterRef && this._kitchenSinkAdapterRef.collapse(t);
                    }),
                    (t.prototype._renderKitchenSink = function (t) {
                      var e = this,
                        n = this._panels[t].items.map(function (t) {
                          var n = t.kitchenSinkItem,
                            r = {onClose: e._deactivateItem.bind(e, n)};
                          return n.renderContentChild(r);
                        });
                      return a.h(l.KitchenSinkContainer, null, n);
                    }),
                    (t.prototype.reset = function () {
                      var t = this;
                      r(
                        this._panels[s.KitchenSinkPositions.Bottom].items,
                        this._panels[s.KitchenSinkPositions.Left].items,
                        this._panels[s.KitchenSinkPositions.Top].items,
                        this._panels[s.KitchenSinkPositions.Right].items
                      ).forEach(function (e) {
                        var n = e.kitchenSinkItem;
                        t.remove(n);
                      });
                    }),
                    t
                  );
                })();
              e.KitchenSinkManager = g;
            },
            function (t, e, n) {
              'use strict';
              t.exports = function (t, e) {
                return function () {
                  for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                  return t.apply(e, n);
                };
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(2);
              function o(t) {
                return encodeURIComponent(t)
                  .replace(/%40/gi, '@')
                  .replace(/%3A/gi, ':')
                  .replace(/%24/g, '$')
                  .replace(/%2C/gi, ',')
                  .replace(/%20/g, '+')
                  .replace(/%5B/gi, '[')
                  .replace(/%5D/gi, ']');
              }
              t.exports = function (t, e, n) {
                if (!e) return t;
                var i;
                if (n) i = n(e);
                else if (r.isURLSearchParams(e)) i = e.toString();
                else {
                  var a = [];
                  r.forEach(e, function (t, e) {
                    null != t &&
                      (r.isArray(t) ? (e += '[]') : (t = [t]),
                      r.forEach(t, function (t) {
                        r.isDate(t) ? (t = t.toISOString()) : r.isObject(t) && (t = JSON.stringify(t)), a.push(o(e) + '=' + o(t));
                      }));
                  }),
                    (i = a.join('&'));
                }
                if (i) {
                  var s = t.indexOf('#');
                  -1 !== s && (t = t.slice(0, s)), (t += (-1 === t.indexOf('?') ? '?' : '&') + i);
                }
                return t;
              };
            },
            function (t, e, n) {
              'use strict';
              t.exports = function (t) {
                return !(!t || !t.__CANCEL__);
              };
            },
            function (t, e, n) {
              'use strict';
              (function (e) {
                var r = n(2),
                  o = n(86),
                  i = {'Content-Type': 'application/x-www-form-urlencoded'};
                function a(t, e) {
                  !r.isUndefined(t) && r.isUndefined(t['Content-Type']) && (t['Content-Type'] = e);
                }
                var s,
                  c = {
                    adapter:
                      (((void 0 !== e && '[object process]' === Object.prototype.toString.call(e)) || 'undefined' != typeof XMLHttpRequest) &&
                        (s = n(23)),
                      s),
                    transformRequest: [
                      function (t, e) {
                        return (
                          o(e, 'Accept'),
                          o(e, 'Content-Type'),
                          r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t)
                            ? t
                            : r.isArrayBufferView(t)
                            ? t.buffer
                            : r.isURLSearchParams(t)
                            ? (a(e, 'application/x-www-form-urlencoded;charset=utf-8'), t.toString())
                            : r.isObject(t)
                            ? (a(e, 'application/json;charset=utf-8'), JSON.stringify(t))
                            : t
                        );
                      }
                    ],
                    transformResponse: [
                      function (t) {
                        if ('string' == typeof t)
                          try {
                            t = JSON.parse(t);
                          } catch (t) {}
                        return t;
                      }
                    ],
                    timeout: 0,
                    xsrfCookieName: 'XSRF-TOKEN',
                    xsrfHeaderName: 'X-XSRF-TOKEN',
                    maxContentLength: -1,
                    validateStatus: function (t) {
                      return t >= 200 && t < 300;
                    },
                    headers: {common: {Accept: 'application/json, text/plain, */*'}}
                  };
                r.forEach(['delete', 'get', 'head'], function (t) {
                  c.headers[t] = {};
                }),
                  r.forEach(['post', 'put', 'patch'], function (t) {
                    c.headers[t] = r.merge(i);
                  }),
                  (t.exports = c);
              }.call(this, n(85)));
            },
            function (t, e, n) {
              'use strict';
              var r = n(2),
                o = n(87),
                i = n(20),
                a = n(89),
                s = n(90),
                c = n(24);
              t.exports = function (t) {
                return new Promise(function (e, u) {
                  var l = t.data,
                    p = t.headers;
                  r.isFormData(l) && delete p['Content-Type'];
                  var f = new XMLHttpRequest();
                  if (t.auth) {
                    var d = t.auth.username || '',
                      h = t.auth.password || '';
                    p.Authorization = 'Basic ' + btoa(d + ':' + h);
                  }
                  if (
                    (f.open(t.method.toUpperCase(), i(t.url, t.params, t.paramsSerializer), !0),
                    (f.timeout = t.timeout),
                    (f.onreadystatechange = function () {
                      if (f && 4 === f.readyState && (0 !== f.status || (f.responseURL && 0 === f.responseURL.indexOf('file:')))) {
                        var n = 'getAllResponseHeaders' in f ? a(f.getAllResponseHeaders()) : null,
                          r = {
                            data: t.responseType && 'text' !== t.responseType ? f.response : f.responseText,
                            status: f.status,
                            statusText: f.statusText,
                            headers: n,
                            config: t,
                            request: f
                          };
                        o(e, u, r), (f = null);
                      }
                    }),
                    (f.onabort = function () {
                      f && (u(c('Request aborted', t, 'ECONNABORTED', f)), (f = null));
                    }),
                    (f.onerror = function () {
                      u(c('Network Error', t, null, f)), (f = null);
                    }),
                    (f.ontimeout = function () {
                      u(c('timeout of ' + t.timeout + 'ms exceeded', t, 'ECONNABORTED', f)), (f = null);
                    }),
                    r.isStandardBrowserEnv())
                  ) {
                    var _ = n(91),
                      v = (t.withCredentials || s(t.url)) && t.xsrfCookieName ? _.read(t.xsrfCookieName) : void 0;
                    v && (p[t.xsrfHeaderName] = v);
                  }
                  if (
                    ('setRequestHeader' in f &&
                      r.forEach(p, function (t, e) {
                        void 0 === l && 'content-type' === e.toLowerCase() ? delete p[e] : f.setRequestHeader(e, t);
                      }),
                    t.withCredentials && (f.withCredentials = !0),
                    t.responseType)
                  )
                    try {
                      f.responseType = t.responseType;
                    } catch (e) {
                      if ('json' !== t.responseType) throw e;
                    }
                  'function' == typeof t.onDownloadProgress && f.addEventListener('progress', t.onDownloadProgress),
                    'function' == typeof t.onUploadProgress && f.upload && f.upload.addEventListener('progress', t.onUploadProgress),
                    t.cancelToken &&
                      t.cancelToken.promise.then(function (t) {
                        f && (f.abort(), u(t), (f = null));
                      }),
                    void 0 === l && (l = null),
                    f.send(l);
                });
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(88);
              t.exports = function (t, e, n, o, i) {
                var a = new Error(t);
                return r(a, e, n, o, i);
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(2);
              t.exports = function (t, e) {
                e = e || {};
                var n = {};
                return (
                  r.forEach(['url', 'method', 'params', 'data'], function (t) {
                    void 0 !== e[t] && (n[t] = e[t]);
                  }),
                  r.forEach(['headers', 'auth', 'proxy'], function (o) {
                    r.isObject(e[o])
                      ? (n[o] = r.deepMerge(t[o], e[o]))
                      : void 0 !== e[o]
                      ? (n[o] = e[o])
                      : r.isObject(t[o])
                      ? (n[o] = r.deepMerge(t[o]))
                      : void 0 !== t[o] && (n[o] = t[o]);
                  }),
                  r.forEach(
                    [
                      'baseURL',
                      'transformRequest',
                      'transformResponse',
                      'paramsSerializer',
                      'timeout',
                      'withCredentials',
                      'adapter',
                      'responseType',
                      'xsrfCookieName',
                      'xsrfHeaderName',
                      'onUploadProgress',
                      'onDownloadProgress',
                      'maxContentLength',
                      'validateStatus',
                      'maxRedirects',
                      'httpAgent',
                      'httpsAgent',
                      'cancelToken',
                      'socketPath'
                    ],
                    function (r) {
                      void 0 !== e[r] ? (n[r] = e[r]) : void 0 !== t[r] && (n[r] = t[r]);
                    }
                  ),
                  n
                );
              };
            },
            function (t, e, n) {
              'use strict';
              function r(t) {
                this.message = t;
              }
              (r.prototype.toString = function () {
                return 'Cancel' + (this.message ? ': ' + this.message : '');
              }),
                (r.prototype.__CANCEL__ = !0),
                (t.exports = r);
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (e.scaleVideo = function (t, e, n, r, o) {
                  var i = {width: 0, height: 0, left: 0, top: 0, scaleToTargetWidth: !0};
                  if (t <= 0 || e <= 0 || n <= 0 || r <= 0) return i;
                  var a = n,
                    s = (e * n) / t,
                    c = (t * r) / e,
                    u = r,
                    l = c > n;
                  return (
                    (l = l ? o : !o)
                      ? ((i.width = Math.abs(a)), (i.height = Math.abs(s)), (i.scaleToTargetWidth = !0))
                      : ((i.width = Math.abs(c)), (i.height = Math.abs(u)), (i.scaleToTargetWidth = !1)),
                    (i.left = Math.abs((n - i.width) / 2)),
                    (i.top = Math.abs((r - i.height) / 2)),
                    i
                  );
                });
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(0),
                o = (function () {
                  function t(t) {
                    (this._destroyed = !1),
                      (this._options = t),
                      (this._logger = r.getContribLogger({module: 'contrib-ui', class: 'OverlayItem', context: t.data.label})),
                      this._logger.debug('executed', {method: 'constructor', data: {options: t}}),
                      this._logger.info('created item ' + t.data.label, {method: 'constructor'});
                  }
                  return (
                    Object.defineProperty(t.prototype, 'data', {
                      get: function () {
                        return this._options.data;
                      },
                      enumerable: !0,
                      configurable: !0
                    }),
                    (t.prototype.destroy = function () {
                      this._logger.info('destroy item', {method: 'destroy'}), (this._destroyed = !0);
                    }),
                    (t.prototype.renderOverlayChild = function (t) {
                      return this._destroyed ? null : this._options.data.renderContent(t);
                    }),
                    t
                  );
                })();
              e.OverlayItem = o;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  t.PlayerArea = 'PlayerArea';
                })(e.OverlayPositions || (e.OverlayPositions = {}));
            },
            function (t, e, n) {
              'use strict';
              function r(t) {
                for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
              }
              Object.defineProperty(e, '__esModule', {value: !0}),
                r(n(31)),
                r(n(12)),
                r(n(13)),
                r(n(8)),
                r(n(56)),
                r(n(16)),
                r(n(63)),
                r(n(17)),
                r(n(10)),
                r(n(18)),
                r(n(14)),
                r(n(77)),
                r(n(15)),
                r(n(7)),
                r(n(27)),
                r(n(96)),
                r(n(6)),
                r(n(97)),
                r(n(98)),
                r(n(28)),
                r(n(29)),
                r(n(103));
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r,
                o = n(8),
                i = n(1),
                a = n(32),
                s = n(39),
                c = n(11),
                u = n(5);
              !(function (t) {
                (t.VISIBLE = 'VISIBLE'), (t.HIDDEN = 'HIDDEN');
              })((r = e.VisibilityMode || (e.VisibilityMode = {})));
              var l = {theme: {backgroundColor: 'rgba(0, 0, 0, .7)', blur: '10px'}},
                p = (function () {
                  function t(t) {
                    (this.options = t),
                      (this._floatingItem = null),
                      (this._timerSubscription = void 0),
                      (this._options = t),
                      (this._bannerConfig = u.getContribConfig(this._options.kalturaPlayer, 'ui.banner', l));
                  }
                  return (
                    (t.prototype.add = function (t) {
                      return (
                        this._floatingItem && this.remove(),
                        (this._floatingItem = this._options.floatingManager.add({
                          label: 'Banner',
                          mode: o.FloatingUIModes.Immediate,
                          position: o.FloatingPositions.InteractiveArea,
                          renderContent: this._createRenderBanner(t, {onClose: this._handleCloseEvent.bind(this), theme: this._bannerConfig.theme})
                        })),
                        t.autoClose && this._startDurationTimer(t.duration),
                        this._getState()
                      );
                    }),
                    (t.prototype.remove = function () {
                      this._floatingItem &&
                        (this._timerSubscription && clearTimeout(this._timerSubscription),
                        this._options.floatingManager.remove(this._floatingItem),
                        (this._floatingItem = null));
                    }),
                    (t.prototype.reset = function () {
                      this.remove();
                    }),
                    (t.prototype._createRenderBanner = function (t, e) {
                      var n = t.content,
                        r = t.renderContent,
                        o = e.onClose,
                        c = e.theme;
                      return function (t) {
                        return i.h(s.BannerContainer, {onClose: o, theme: c}, r ? r(n, t) : i.h(a.Banner, {content: n}));
                      };
                    }),
                    (t.prototype._handleCloseEvent = function () {
                      this.remove();
                    }),
                    (t.prototype._startDurationTimer = function (t) {
                      void 0 === t && (t = 6e4), (this._timerSubscription = setTimeout(this.remove.bind(this), Math.max(5e3, t)));
                    }),
                    (t.prototype._getState = function () {
                      var t = c.getPlayerSize(this._options.kalturaPlayer);
                      return {visibilityMode: !t || t.width < 480 ? r.HIDDEN : r.VISIBLE};
                    }),
                    t
                  );
                })();
              e.BannerManager = p;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(33);
              e.Banner = r.Banner;
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(0),
                s = n(34),
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._logger = a.getContribLogger({module: 'contrib-ui', class: 'Banner'})), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.componentDidMount = function () {
                      this._logger.info('mount component', {method: 'componentDidMount'});
                    }),
                    (e.prototype.componentWillUnmount = function () {
                      this._logger.info('unmount component', {method: 'componentWillUnmount'});
                    }),
                    (e.prototype.render = function (t) {
                      var e = t.content,
                        n = e.text,
                        r = e.title,
                        o = void 0 === r ? 'Audience asks:' : r,
                        a = e.icon,
                        c = void 0 === a ? this._defaultIcon() : a;
                      return (
                        this._logger.trace('render component', {method: 'render'}),
                        i.h(
                          'div',
                          {className: s.defaultBannerRoot + ' ' + s.bannerWrapper},
                          i.h('div', {className: s.iconContainer}, i.h('div', {className: s.iconWrapper}, c)),
                          i.h('div', {className: s.bannerBody}, i.h('div', {className: s.title}, o), i.h('div', {className: s.text}, n))
                        )
                      );
                    }),
                    (e.prototype._defaultIcon = function () {
                      return i.h('div', {className: s.iconImage});
                    }),
                    e
                  );
                })(i.Component);
              e.Banner = c;
            },
            function (t, e, n) {
              var r = n(35);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              var r = n(3),
                o = n(9),
                i = n(36),
                a = n(37);
              e = r(!1);
              var s = o(i),
                c = o(a);
              e.push([
                t.i,
                '.contrib_banner__defaultBannerRoot___22jmV{display:flex;max-width:100%;height:100%;transition:all .5s ease;text-align:left}.contrib_banner__bannerWrapper___mb_YB{padding:18px 17px 17px 16px}.contrib_banner__iconContainer___267WI{height:100%;width:64px}.contrib_banner__iconWrapper___37APD{position:relative;height:48px;width:48px;background-color:rgba(255,255,255,0.14);border-radius:50%;transition:all .5s ease}.contrib_banner__iconImage___1V15L{position:absolute;width:32px;height:32px;left:calc(50% - 16px);top:calc(50% - 16px);background-image:url(' +
                  s +
                  ');background-repeat:no-repeat;transition:all .5s ease}.contrib_banner__bannerBody___2zn-E{height:100%;flex:1 1 auto}.contrib_banner__title___2ANuc{opacity:0.9;font-size:14px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:normal;color:#ebebeb}.contrib_banner__text___ZE1kf{opacity:0.9;font-size:24px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1.21;letter-spacing:normal;color:#ffffff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all .5s ease}.playkit-size-md .contrib_banner__bannerWrapper___mb_YB{padding:14px 16px 14px}.playkit-size-md .contrib_banner__iconContainer___267WI{width:44px}.playkit-size-md .contrib_banner__iconWrapper___37APD{height:32px;width:32px}.playkit-size-md .contrib_banner__iconImage___1V15L{width:20px;height:20px;left:calc(50% - 10px);top:calc(50% - 10px);background-image:url(' +
                  c +
                  ')}.playkit-size-md .contrib_banner__bannerBody___2zn-E{flex:1 1 auto}.playkit-size-md .contrib_banner__title___2ANuc{font-size:12px;font-weight:bold;line-height:1.17}.playkit-size-md .contrib_banner__text___ZE1kf{font-size:15px;line-height:1.27}\n',
                ''
              ]),
                (e.locals = {
                  defaultBannerRoot: 'contrib_banner__defaultBannerRoot___22jmV',
                  bannerWrapper: 'contrib_banner__bannerWrapper___mb_YB',
                  iconContainer: 'contrib_banner__iconContainer___267WI',
                  iconWrapper: 'contrib_banner__iconWrapper___37APD',
                  iconImage: 'contrib_banner__iconImage___1V15L',
                  bannerBody: 'contrib_banner__bannerBody___2zn-E',
                  title: 'contrib_banner__title___2ANuc',
                  text: 'contrib_banner__text___ZE1kf'
                }),
                (t.exports = e);
            },
            function (t, e) {
              t.exports =
                "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='32px' height='32px' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 57.1 (83088) - https://sketch.com --%3E %3Ctitle%3EIcons/32/Someone asks%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='Icons/32/Someone-asks' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Group' transform='translate(4.000000, 5.000000)' fill='%23B2D238'%3E %3Cellipse id='Oval' cx='12' cy='5.5' rx='6' ry='5.5'%3E%3C/ellipse%3E %3Cpath d='M12,13 C7.995,13 0,15.01 0,19 L0,20.5 C0,21.325 0.675,22 1.5,22 L22.5,22 C23.325,22 24,21.325 24,20.5 L24,19 C24,15.01 16.005,13 12,13 Z' id='Path'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E";
            },
            function (t, e) {
              t.exports =
                "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 57.1 (83088) - https://sketch.com --%3E %3Ctitle%3EIcons/20/Someone asks%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='Icons/20/Someone-asks' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Group' transform='translate(2.000000, 2.000000)' fill='%23B2D238'%3E %3Ccircle id='Oval' cx='8' cy='4' r='4'%3E%3C/circle%3E %3Cpath d='M8,9 C5.33,9 0,10.5633333 0,13.6666667 L0,14.8333333 C0,15.475 0.45,16 1,16 L15,16 C15.55,16 16,15.475 16,14.8333333 L16,13.6666667 C16,10.5633333 10.67,9 8,9 Z' id='Path'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E";
            },
            function (t, e) {
              t.exports = function (t) {
                var e = 'undefined' != typeof window && window.location;
                if (!e) throw new Error('fixUrls requires window.location');
                if (!t || 'string' != typeof t) return t;
                var n = e.protocol + '//' + e.host,
                  r = n + e.pathname.replace(/\/[^\/]*$/, '/');
                return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
                  var o,
                    i = e
                      .trim()
                      .replace(/^"(.*)"$/, function (t, e) {
                        return e;
                      })
                      .replace(/^'(.*)'$/, function (t, e) {
                        return e;
                      });
                  return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)
                    ? t
                    : ((o = 0 === i.indexOf('//') ? i : 0 === i.indexOf('/') ? n + i : r + i.replace(/^\.\//, '')), 'url(' + JSON.stringify(o) + ')');
                });
              };
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(40);
              e.BannerContainer = r.BannerContainer;
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(0),
                s = n(41),
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._logger = a.getContribLogger({module: 'contrib-ui', class: 'BannerContainer'})), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.componentDidMount = function () {
                      this._logger.info('mount component', {method: 'componentDidMount'});
                    }),
                    (e.prototype.componentWillUnmount = function () {
                      this._logger.info('unmount component', {method: 'componentWillUnmount'});
                    }),
                    (e.prototype.render = function (t) {
                      this._logger.trace('render component', {method: 'render'});
                      var e = this.props.theme,
                        n = e.backgroundColor,
                        r = e.blur;
                      return i.h(
                        'div',
                        {className: s.bannerContainerRoot},
                        i.h(
                          'div',
                          {
                            style: '\n                background-color:' + n + '; \n                backdrop-filter: blur(' + r + ');\n             ',
                            className: s.bannerContainer
                          },
                          i.h('button', {className: s.closeButton, onClick: t.onClose}),
                          this.props.children
                        )
                      );
                    }),
                    e
                  );
                })(i.Component);
              e.BannerContainer = c;
            },
            function (t, e, n) {
              var r = n(42);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              var r = n(3),
                o = n(9),
                i = n(43),
                a = n(44);
              e = r(!1);
              var s = o(i),
                c = o(a);
              e.push([
                t.i,
                '.contrib_banner-container__bannerContainerRoot___2IoYf{position:absolute;max-width:100%;min-width:270px;padding:0 16px 8px;height:88px;bottom:0;left:0;transition:all .5s ease}.contrib_banner-container__bannerContainer___1Ikih{position:relative;width:100%;height:100%;border-radius:4px;transition:all .5s ease}.contrib_banner-container__closeButton___2Ogus{position:absolute;background-color:transparent;padding:0;border:none;top:0;right:0;width:32px;height:32px;background-image:url(' +
                  s +
                  ');background-repeat:no-repeat}.contrib_banner-container__closeButton___2Ogus:hover,.contrib_banner-container__closeButton___2Ogus:active{cursor:pointer}.playkit-size-md .contrib_banner-container__bannerContainerRoot___2IoYf{height:68px;min-width:230px}.playkit-size-md .contrib_banner-container__closeButton___2Ogus{top:8px;right:8px;width:10px;height:10px;background-image:url(' +
                  c +
                  ')}.playkit-size-sm .contrib_banner-container__bannerContainerRoot___2IoYf,.playkit-size-xs .contrib_banner-container__bannerContainerRoot___2IoYf,.playkit-size-ty .contrib_banner-container__bannerContainerRoot___2IoYf{display:none;width:0;height:0}\n',
                ''
              ]),
                (e.locals = {
                  bannerContainerRoot: 'contrib_banner-container__bannerContainerRoot___2IoYf',
                  bannerContainer: 'contrib_banner-container__bannerContainer___1Ikih',
                  closeButton: 'contrib_banner-container__closeButton___2Ogus'
                }),
                (t.exports = e);
            },
            function (t, e) {
              t.exports =
                "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='32px' height='32px' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 57.1 (83088) - https://sketch.com --%3E %3Ctitle%3EIcons/32x32/Menu Player Close%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='Icons/32x32/Menu-Player-Close' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cpath d='M17.4142136,16 L22.363961,20.9497475 C22.7544853,21.3402718 22.7544853,21.9734367 22.363961,22.363961 C21.9734367,22.7544853 21.3402718,22.7544853 20.9497475,22.363961 L16,17.4142136 L11.0502525,22.363961 C10.6597282,22.7544853 10.0265633,22.7544853 9.63603897,22.363961 C9.24551468,21.9734367 9.24551468,21.3402718 9.63603897,20.9497475 L14.5857864,16 L9.63603897,11.0502525 C9.24551468,10.6597282 9.24551468,10.0265633 9.63603897,9.63603897 C10.0265633,9.24551468 10.6597282,9.24551468 11.0502525,9.63603897 L16,14.5857864 L20.9497475,9.63603897 C21.3402718,9.24551468 21.9734367,9.24551468 22.363961,9.63603897 C22.7544853,10.0265633 22.7544853,10.6597282 22.363961,11.0502525 L17.4142136,16 Z' id='Path' fill='%23FFFFFF'%3E%3C/path%3E %3C/g%3E %3C/svg%3E";
            },
            function (t, e) {
              t.exports =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E %3Cpath fill='%23FFF' fill-rule='evenodd' d='M5.956 5l3.348-3.348A.674.674 0 0 0 9.3.7a.672.672 0 0 0-.952-.004L5 4.044 1.652.696A.674.674 0 0 0 .7.7a.672.672 0 0 0-.004.952L4.044 5 .696 8.348A.674.674 0 0 0 .7 9.3c.265.266.69.266.952.004L5 5.956l3.348 3.348c.262.262.689.26.952-.004a.672.672 0 0 0 .004-.952L5.956 5z' opacity='.9'/%3E %3C/svg%3E";
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(46);
              e.ToastsContainer = r.ToastsContainer;
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  }),
                i =
                  (this && this.__assign) ||
                  function () {
                    return (i =
                      Object.assign ||
                      function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                          for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t;
                      }).apply(this, arguments);
                  };
              Object.defineProperty(e, '__esModule', {value: !0});
              var a = n(1),
                s = n(47),
                c = n(51),
                u = (function (t) {
                  function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                  }
                  return (
                    o(e, t),
                    (e.prototype.render = function () {
                      return a.h(
                        'div',
                        {className: c.toastsContainer},
                        this.props.toasts.map(function (t) {
                          return a.h('div', {className: c.toastRow, key: t.id}, a.h(s.Toast, i({}, t)));
                        })
                      );
                    }),
                    e
                  );
                })(a.Component);
              e.ToastsContainer = u;
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(48),
                s = n(12),
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (
                      (e.state = {isShown: !0}),
                      (e._onClick = function (t) {
                        e.props.onClick(), e._onClose(t);
                      }),
                      (e._onClose = function (t) {
                        t.stopPropagation(), e.setState({isShown: !1}), e.props.onClose(e.props.id);
                      }),
                      e
                    );
                  }
                  return (
                    o(e, t),
                    (e.prototype._getToastSeverityClass = function () {
                      switch (this.props.severity) {
                        case s.ToastSeverity.Success:
                          return a.successToast;
                        case s.ToastSeverity.Warn:
                          return a.warnToast;
                        case s.ToastSeverity.Error:
                          return a.errorToast;
                        default:
                          return a.infoToast;
                      }
                    }),
                    (e.prototype.render = function () {
                      var t = this.props,
                        e = t.text,
                        n = t.title,
                        r = t.icon;
                      return i.h(
                        'div',
                        {className: a.toastWrapper + ' ' + this._getToastSeverityClass(), onClick: this._onClick},
                        i.h('button', {className: a.closeButton, onClick: this._onClose}),
                        i.h('div', {className: a.title}, n),
                        i.h(
                          'div',
                          {className: a.toastBody},
                          i.h('div', {className: a.iconContainer}, i.h('div', {className: a.iconWrapper}, r)),
                          i.h('div', {className: a.text}, e)
                        )
                      );
                    }),
                    e
                  );
                })(i.Component);
              e.Toast = c;
            },
            function (t, e, n) {
              var r = n(49);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              var r = n(3),
                o = n(9),
                i = n(50);
              e = r(!1);
              var a = o(i);
              e.push([
                t.i,
                '.contrib_toast__toastWrapper___13nwj{position:relative;min-width:120px;max-width:264px;height:100%;border-radius:4px;background-color:#222222;border-left-style:solid;border-left-width:4px;text-align:left}.contrib_toast__infoToast___wbiMt{border-left-color:#01ACCD}.contrib_toast__successToast___3qUoL{border-left-color:#009E48}.contrib_toast__warnToast___2YCj0{border-left-color:#F9A71B}.contrib_toast__errorToast___1HkI7{border-left-color:#E7585D}.contrib_toast__closeButton___2OCRS{position:absolute;background-color:transparent;top:0;right:0;width:16px;height:16px;object-fit:contain;background-repeat:no-repeat;border:none;background-image:url(' +
                  a +
                  ')}.contrib_toast__closeButton___2OCRS:hover{cursor:pointer}.contrib_toast__title___2sa8e{font-size:12px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1.17;letter-spacing:normal;color:#cccccc;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-top:4px;padding-right:16px;padding-left:12px}.contrib_toast__toastBody___2JmKS{position:relative;width:100%;padding:2px 16px 5px 12px}.contrib_toast__iconContainer___3jews{position:relative;height:16px;width:16px;float:left;margin-right:7px}.contrib_toast__iconWrapper___hk-61{height:16px;width:16px}.contrib_toast__text___3T2jm{font-size:14px;font-weight:bold;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#cccccc;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n',
                ''
              ]),
                (e.locals = {
                  toastWrapper: 'contrib_toast__toastWrapper___13nwj',
                  infoToast: 'contrib_toast__infoToast___wbiMt',
                  successToast: 'contrib_toast__successToast___3qUoL',
                  warnToast: 'contrib_toast__warnToast___2YCj0',
                  errorToast: 'contrib_toast__errorToast___1HkI7',
                  closeButton: 'contrib_toast__closeButton___2OCRS',
                  title: 'contrib_toast__title___2sa8e',
                  toastBody: 'contrib_toast__toastBody___2JmKS',
                  iconContainer: 'contrib_toast__iconContainer___3jews',
                  iconWrapper: 'contrib_toast__iconWrapper___hk-61',
                  text: 'contrib_toast__text___3T2jm'
                }),
                (t.exports = e);
            },
            function (t, e) {
              t.exports =
                "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 57.1 (83088) - https://sketch.com --%3E %3Ctitle%3EIcons/16/Close%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='Icons/16/Close' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cpath d='M8.8497789,8 L11.824005,10.9742261 C12.058665,11.2088861 12.058665,11.5893451 11.824005,11.824005 C11.5893451,12.058665 11.2088861,12.058665 10.9742261,11.824005 L8,8.8497789 L5.02577387,11.824005 C4.7911139,12.058665 4.41065493,12.058665 4.17599497,11.824005 C3.94133501,11.5893451 3.94133501,11.2088861 4.17599497,10.9742261 L7.1502211,8 L4.17599497,5.02577387 C3.94133501,4.7911139 3.94133501,4.41065493 4.17599497,4.17599497 C4.41065493,3.94133501 4.7911139,3.94133501 5.02577387,4.17599497 L8,7.1502211 L10.9742261,4.17599497 C11.2088861,3.94133501 11.5893451,3.94133501 11.824005,4.17599497 C12.058665,4.41065493 12.058665,4.7911139 11.824005,5.02577387 L8.8497789,8 Z' id='Path' fill='%23cccccc'%3E%3C/path%3E %3C/g%3E %3C/svg%3E";
            },
            function (t, e, n) {
              var r = n(52);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              (e = n(3)(!1)).push([
                t.i,
                '.contrib_toasts-container__toastsContainer___3_pjR{position:absolute;right:0;top:0;padding:8px 16px 0;min-width:120px;max-width:264px;display:flex;flex-direction:column}.contrib_toasts-container__toastRow___1Bvvu{height:42px;min-width:120px;max-width:264px;margin-bottom:8px;overflow:hidden;overflow-wrap:break-word;text-overflow:ellipsis;align-self:flex-end}\n',
                ''
              ]),
                (e.locals = {
                  toastsContainer: 'contrib_toasts-container__toastsContainer___3_pjR',
                  toastRow: 'contrib_toasts-container__toastRow___1Bvvu'
                }),
                (t.exports = e);
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(0),
                s = n(54),
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._logger = null), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.update = function () {
                      this.setState(function (t) {
                        return {toggler: !t.toggler};
                      });
                    }),
                    (e.prototype.componentDidMount = function () {
                      (this._logger = a.getContribLogger({module: 'contrib-ui', class: 'ManagedComponent', context: this.props.label})),
                        this._logger.info('mount component', {method: 'componentDidMount'}),
                        this.setState({toggler: !1});
                    }),
                    (e.prototype.render = function () {
                      var t = this.props,
                        e = t.fillContainer;
                      return (0, t.isShown)()
                        ? (this._logger && this._logger.trace('render component', {method: 'render'}),
                          i.h('div', {'data-contrib-item': this.props.label, className: e ? s.fillContainer : ''}, this.props.renderChildren()))
                        : null;
                    }),
                    (e.defaultProps = {fillContainer: !1}),
                    e
                  );
                })(i.Component);
              e.ManagedComponent = c;
            },
            function (t, e, n) {
              var r = n(55);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              (e = n(3)(!1)).push([t.i, '.contrib_managed-component__fill-container___YAWro{width:100%;height:100%}\n', '']),
                (e.locals = {
                  'fill-container': 'contrib_managed-component__fill-container___YAWro',
                  fillContainer: 'contrib_managed-component__fill-container___YAWro'
                }),
                (t.exports = e);
            },
            function (t, e, n) {
              'use strict';
              var r =
                  (this && this.__assign) ||
                  function () {
                    return (r =
                      Object.assign ||
                      function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                          for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t;
                      }).apply(this, arguments);
                  },
                o =
                  (this && this.__spreadArrays) ||
                  function () {
                    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                    var r = Array(t),
                      o = 0;
                    for (e = 0; e < n; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                    return r;
                  };
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(13),
                a = n(8),
                s = n(14),
                c = n(1),
                u = n(11),
                l = n(6),
                p = n(7),
                f = n(5),
                d = {
                  presetAreasMapping: {
                    Playback: {VideoArea: 'VideoArea', PresetArea: 'PresetArea', InteractiveArea: 'InteractiveArea'},
                    Live: {VideoArea: 'VideoArea', PresetArea: 'PresetArea', InteractiveArea: 'InteractiveArea'}
                  }
                },
                h = ['VideoArea', 'PresetArea', 'InteractiveArea'],
                _ = (function () {
                  function t(t) {
                    var e,
                      n,
                      r = this;
                    (this._options = t),
                      (this._items =
                        (((e = {})[a.FloatingPositions.VideoArea] = []),
                        (e[a.FloatingPositions.InteractiveArea] = []),
                        (e[a.FloatingPositions.PresetArea] = []),
                        e)),
                      (this._componentRef =
                        (((n = {})[a.FloatingPositions.InteractiveArea] = null),
                        (n[a.FloatingPositions.VideoArea] = null),
                        (n[a.FloatingPositions.PresetArea] = null),
                        n)),
                      (this._cache = {canvas: {playerSize: {width: 0, height: 0}, videoSize: {width: 0, height: 0}}}),
                      (this._renderItems = function (t) {
                        var e = r._getRendererProps({});
                        return r._items[t].map(function (t) {
                          return t.renderFloatingChild(e);
                        });
                      }),
                      (this._renderChild = function (t) {
                        return c.h(l.ManagedComponent, {
                          label: 'floating-manager',
                          renderChildren: function () {
                            return r._renderItems(t);
                          },
                          isShown: function () {
                            return !0;
                          },
                          ref: function (e) {
                            return (r._componentRef[t] = e);
                          }
                        });
                      }),
                      (this._floatingConfig = f.getContribConfig(this._options.kalturaPlayer, 'ui.floating', d, {
                        explicitMerge: ['presetAreasMapping']
                      }));
                    var o = p.PresetsUtils.groupPresetAreasByType({presetAreasMapping: this._floatingConfig.presetAreasMapping, acceptableTypes: h});
                    Object.keys(o).forEach(function (t) {
                      r._options.presetManager.add({
                        label: 'floating-manager',
                        presetAreas: o[t],
                        renderChild: function () {
                          return r._renderChild(a.FloatingPositions[t]);
                        }
                      });
                    }),
                      this._addPlayerBindings(),
                      this._updateCachedCanvas();
                  }
                  return (
                    (t.prototype.add = function (t) {
                      var e = this._options.presetManager,
                        n = r(r({presetManager: e}, this._options), {data: t}),
                        o = new i.FloatingItem(n);
                      return this._items[t.position].push(o), o;
                    }),
                    (t.prototype.remove = function (t) {
                      var e = this._items[t.data.position],
                        n = e.indexOf(t);
                      n > -1 ? (e[n].destroy(), e.splice(n, 1)) : console.warn("couldn't remove " + t + " since it wasn't found");
                    }),
                    (t.prototype.reset = function () {
                      o(this._items.VideoArea, this._items.InteractiveArea, this._items.PresetArea).forEach(function (t) {
                        try {
                          t.destroy();
                        } catch (t) {
                          console.warn(t);
                        }
                      }),
                        (this._items.VideoArea = []),
                        (this._items.PresetArea = []),
                        (this._items.InteractiveArea = []);
                    }),
                    (t.prototype._getRendererProps = function (t) {
                      var e = this._options.kalturaPlayer;
                      return {currentTime: void 0 !== t.currentTime ? t.currentTime : 1e3 * e.currentTime, canvas: this._cache.canvas};
                    }),
                    (t.prototype._updateCachedCanvas = function () {
                      this._cache.canvas = {
                        playerSize: u.getPlayerSize(this._options.kalturaPlayer),
                        videoSize: u.getVideoSize(this._options.kalturaPlayer)
                      };
                    }),
                    (t.prototype._updateComponents = function () {
                      this._componentRef.InteractiveArea && this._componentRef.InteractiveArea.update(),
                        this._componentRef.PresetArea && this._componentRef.PresetArea.update(),
                        this._componentRef.VideoArea && this._componentRef.VideoArea.update();
                    }),
                    (t.prototype._addPlayerBindings = function () {
                      var t = this,
                        e = this._options.kalturaPlayer;
                      e.addEventListener(e.Event.TIME_UPDATE, function () {
                        t._updateComponents();
                      }),
                        e.addEventListener(e.Event.MEDIA_LOADED, function () {
                          t._updateCachedCanvas(), t._updateComponents();
                        }),
                        this._options.presetManager.on(s.PresetManagerEventTypes.VideoResizeEvent, function () {
                          t._updateCachedCanvas(), t._updateComponents();
                        }),
                        this._options.presetManager.on(s.PresetManagerEventTypes.PresetResizeEvent, function () {
                          t._updateCachedCanvas(), t._updateComponents();
                        });
                    }),
                    t
                  );
                })();
              e.FloatingManager = _;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(0),
                o = n(15),
                i = n(58),
                a = n(1),
                s = KalturaPlayer.ui.preact.h,
                c = (function () {
                  function t(t) {
                    var e = this;
                    (this._element = null),
                      (this._render = function () {
                        if (e._options.data.shareAdvancedPlayerAPI) return e._options.data.renderChild();
                        var t = e._options.data,
                          n = t.label,
                          r = t.fillContainer;
                        return s(i.InjectedComponent, {label: n, fillContainer: r || !1, onCreate: e._onCreate, onDestroy: e._onDestroy});
                      }),
                      (this._onDestroy = function (t) {
                        t.parent
                          ? e._element
                            ? (e._logger.info('remove injected contrib preset component', {method: '_onDestroy'}),
                              (e._element = a.render(null, t.parent)))
                            : e._logger.warn('missing injected component reference, aborting element removal', {method: '_onDestroy'})
                          : e._logger.warn('missing parent argument, aborting element removal', {method: '_onDestroy'});
                      }),
                      (this._onCreate = function (t) {
                        try {
                          if (!t.parent) return void e._logger.warn('missing parent argument, aborting element creation', {method: '_create'});
                          var n = e._options.data.renderChild();
                          if (!n)
                            return void e._logger.warn('child renderer result is invalid, expected element got undefined|null', {method: '_create'});
                          e._logger.info('inject contrib preset component', {method: '_create'}), (e._element = a.render(n, t.parent));
                        } catch (t) {
                          e._logger.error('failed to create injected component.', {method: '_onCreate'});
                        }
                      }),
                      (this._options = t),
                      (this._logger = r.getContribLogger({module: 'contrib-ui', class: 'PresetItem', context: t.data.label})),
                      this._logger.debug('executed', {method: 'constructor', data: {options: t}}),
                      this._logger.info('created item ' + t.data.label, {method: 'constructor'});
                  }
                  return (
                    Object.defineProperty(t.prototype, 'playerConfig', {
                      get: function () {
                        var t = [];
                        for (var e in this._options.data.presetAreas) {
                          var n = this._options.data.presetAreas[e],
                            r = this._options.data.relativeTo;
                          if (n) {
                            var i = {label: this._options.data.label, presets: [e], container: n, get: this._render};
                            if (r)
                              switch (r.type) {
                                case o.RelativeToTypes.After:
                                  i.afterComponent = r.name;
                                  break;
                                case o.RelativeToTypes.Before:
                                  i.beforeComponent = r.name;
                                  break;
                                case o.RelativeToTypes.Replace:
                                  i.replaceComponent = r.name;
                              }
                            t.push(i);
                          } else
                            this._logger.warn(
                              'Cannot register component to core player using the preset manager for preset ' +
                                e +
                                '. preset area name is missing. Ignoring this request.',
                              {method: 'playerConfig'}
                            );
                        }
                        return t;
                      },
                      enumerable: !0,
                      configurable: !0
                    }),
                    t
                  );
                })();
              e.PresetItem = c;
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(59),
                a = n(0).getContribLogger({module: 'contrib-ui', class: 'InjectedComponent'}),
                s = KalturaPlayer.ui.preact.h,
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._root = null), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.shouldComponentUpdate = function () {
                      return !1;
                    }),
                    (e.prototype.componentDidMount = function () {
                      var t = this.props,
                        e = t.onCreate,
                        n = t.label;
                      if (e) {
                        var r = this._root;
                        r
                          ? (a.debug('inject component', {data: {label: n}}), e({parent: r}))
                          : a.warn('Cannot inject item, ailed to create parent component', {data: {label: n}});
                      } else a.warn("Cannot inject item, missing 'onCreate' method", {data: {label: n}});
                    }),
                    (e.prototype.componentWillUnmount = function () {
                      var t = this.props,
                        e = t.onDestroy,
                        n = t.label,
                        r = this._root;
                      r && e && (e({parent: r}), a.debug('destroy injected component', {data: {label: n}}));
                    }),
                    (e.prototype.render = function () {
                      var t = this,
                        e = this.props,
                        n = e.label,
                        r = e.fillContainer ? i.fillContainer : '';
                      return s('div', {
                        'data-contrib-injected': n,
                        className: r,
                        ref: function (e) {
                          return (t._root = e);
                        }
                      });
                    }),
                    e
                  );
                })(KalturaPlayer.ui.preact.Component);
              e.InjectedComponent = c;
            },
            function (t, e, n) {
              var r = n(60);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              (e = n(3)(!1)).push([t.i, '.contribinjected-component__fill-container___8St9r{width:100%;height:100%;overflow:hidden}\n', '']),
                (e.locals = {
                  'fill-container': 'contribinjected-component__fill-container___8St9r',
                  fillContainer: 'contribinjected-component__fill-container___8St9r'
                }),
                (t.exports = e);
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
                })(n(62));
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  }),
                i =
                  (this && this.__decorate) ||
                  function (t, e, n, r) {
                    var o,
                      i = arguments.length,
                      a = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else for (var s = t.length - 1; s >= 0; s--) (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a;
                  };
              Object.defineProperty(e, '__esModule', {value: !0});
              var a = n(0),
                s =
                  (KalturaPlayer.ui.preact.h,
                  (function (t) {
                    function e() {
                      var e = (null !== t && t.apply(this, arguments)) || this;
                      return (e._logger = null), e;
                    }
                    return (
                      o(e, t),
                      (e.prototype.componentDidMount = function () {
                        (this._logger = a.getContribLogger({module: 'contrib-ui', class: 'UIPlayerAdapter'})),
                          this._logger.info('mount component', {method: 'componentDidMount'}),
                          this.props.onMount(this.props.player);
                      }),
                      (e.prototype.componentWillUnmount = function () {
                        this.props.onUnmount(this.props.player),
                          this._logger && this._logger.info('unmount component', {method: 'componentWillUnmount'});
                      }),
                      (e.prototype.render = function (t) {
                        return null;
                      }),
                      (e.defaultProps = {player: null}),
                      i([KalturaPlayer.ui.components.withPlayer], e)
                    );
                  })(KalturaPlayer.ui.preact.Component));
              e.UIPlayerAdapter = s;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(1),
                o = n(16),
                i = n(64),
                a = n(0),
                s = n(6),
                c = n(7),
                u = n(5),
                l = {
                  presetAreasMapping: {Playback: {TopBarRightControls: 'TopBarRightControls'}, Live: {TopBarRightControls: 'TopBarRightControls'}}
                },
                p = ['TopBarRightControls'],
                f = (function () {
                  function t(t) {
                    var e = this;
                    (this._items = []),
                      (this._renderChild = function () {
                        return r.h(s.ManagedComponent, {
                          label: 'upper-bar-manager',
                          renderChildren: function () {
                            return e._renderItems();
                          },
                          isShown: function () {
                            return !0;
                          },
                          ref: function (t) {
                            return (e._rootElement = t);
                          }
                        });
                      }),
                      (this._renderItems = function () {
                        var t = e._items.map(function (t) {
                          return t.renderChild({});
                        });
                        return r.h(i.UpperBar, null, t);
                      }),
                      (this._options = t),
                      (this._upperBarConfig = u.getContribConfig(this._options.kalturaPlayer, 'ui.upperBar', l, {
                        explicitMerge: ['presetAreasMapping']
                      }));
                    var n = c.PresetsUtils.groupPresetAreasByType({presetAreasMapping: this._upperBarConfig.presetAreasMapping, acceptableTypes: p});
                    this._options.presetManager.add({label: 'upper-bar-manager', presetAreas: n.TopBarRightControls, renderChild: this._renderChild});
                  }
                  return (
                    (t.prototype.add = function (t) {
                      var e = {kalturaPlayer: this._options.kalturaPlayer, data: t},
                        n = new o.UpperBarItem(e);
                      return this._items.push(n), this._rootElement && this._rootElement.update(), n;
                    }),
                    (t.prototype.remove = function (t) {
                      var e = a.ArrayUtils.findIndex(this._items, function (e) {
                        return e === t;
                      });
                      -1 !== e && (this._items.splice(e, 1), this._rootElement && this._rootElement.update());
                    }),
                    (t.prototype.reset = function () {
                      var t = this;
                      this._items.forEach(function (e) {
                        t.remove(e);
                      });
                    }),
                    t
                  );
                })();
              e.UpperBarManager = f;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(65);
              e.UpperBar = r.UpperBar;
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(66),
                s = n(0),
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._logger = null), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.componentDidMount = function () {
                      (this._logger = s.getContribLogger({module: 'contrib-ui', class: 'UpperBar'})),
                        this._logger.info('mount component', {method: 'componentDidMount'});
                    }),
                    (e.prototype.componentWillUnmount = function () {
                      this._logger && this._logger.info('unmount component', {method: 'componentWillUnmount'});
                    }),
                    (e.prototype.render = function (t) {
                      return (
                        this._logger && this._logger.trace('render component', {method: 'render'}),
                        i.h('div', {className: a.root}, this.props.children)
                      );
                    }),
                    e
                  );
                })(i.Component);
              e.UpperBar = c;
            },
            function (t, e, n) {
              var r = n(67);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              (e = n(3)(!1)).push([
                t.i,
                '.contrib_upper-bar__root___3mSFN{display:flex;flex-direction:row}.contrib_upper-bar__root___3mSFN .icon--clickable{cursor:pointer}.contrib_upper-bar__root___3mSFN>*{margin-left:10px}\n',
                ''
              ]),
                (e.locals = {root: 'contrib_upper-bar__root___3mSFN'}),
                (t.exports = e);
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(69),
                s = n(0),
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._logger = null), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.componentDidMount = function () {
                      (this._logger = s.getContribLogger({module: 'contrib-ui', class: 'KitchenSinkContainer'})),
                        this._logger.info('mount component', {method: 'componentDidMount'});
                    }),
                    (e.prototype.componentWillUnmount = function () {
                      this._logger && this._logger.info('unmount component', {method: 'componentWillUnmount'});
                    }),
                    (e.prototype.render = function (t) {
                      return (
                        this._logger && this._logger.trace('render component', {method: 'render'}),
                        i.h('div', {className: a.root}, this.props.children)
                      );
                    }),
                    (e.defaultProps = {updateSidePanelMode: function () {}}),
                    e
                  );
                })(i.Component);
              e.KitchenSinkContainer = c;
            },
            function (t, e, n) {
              var r = n(70);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              (e = n(3)(!1)).push([
                t.i,
                '.contrib_kitchen-sink-container__root___24sro{width:100%;height:100%}.playkit-side-panel-content>div{width:100%;height:100%}\n',
                ''
              ]),
                (e.locals = {root: 'contrib_kitchen-sink-container__root___24sro'}),
                (t.exports = e);
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
                })(n(72));
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  }),
                i =
                  (this && this.__decorate) ||
                  function (t, e, n, r) {
                    var o,
                      i = arguments.length,
                      a = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else for (var s = t.length - 1; s >= 0; s--) (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a;
                  };
              Object.defineProperty(e, '__esModule', {value: !0});
              var a,
                s,
                c = n(0),
                u = n(10);
              KalturaPlayer.ui.preact.h,
                (function (t) {
                  (t.Left = 'LEFT'), (t.Top = 'TOP'), (t.Bottom = 'BOTTOM'), (t.Right = 'RIGHT');
                })((a = e.SidePanelPositions || (e.SidePanelPositions = {}))),
                (function (t) {
                  (t.AlongSideTheVideo = 'ALONG_SIDE_THE_VIDEO'), (t.Hidden = 'HIDDEN'), (t.OverTheVideo = 'OVER_THE_VIDEO');
                })((s = e.SidePanelModes || (e.SidePanelModes = {})));
              var l = function (t) {
                  return {sidePanelsModes: t.shell.sidePanelsModes};
                },
                p = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._logger = null), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.componentDidMount = function () {
                      (this._logger = c.getContribLogger({module: 'contrib-ui', class: 'KitchenSinkAdapter'})),
                        this._logger.info('mount component', {method: 'componentDidMount'});
                    }),
                    (e.prototype.componentWillUnmount = function () {
                      this._logger && this._logger.info('unmount component', {method: 'componentWillUnmount'});
                    }),
                    (e.prototype.expand = function (t, e) {
                      this.props.updateSidePanelMode(this._convertToAdapterPositionEnum(t), this._convertToAdapterModeEnum(e));
                    }),
                    (e.prototype.getSidePanelMode = function (t) {
                      return this.props.sidePanelsModes
                        ? this._convertToKitchenSinkModeEnum(this.props.sidePanelsModes[this._convertToAdapterPositionEnum(t)])
                        : u.KitchenSinkExpandModes.Hidden;
                    }),
                    (e.prototype.collapse = function (t) {
                      this.props.updateSidePanelMode(this._convertToAdapterPositionEnum(t), s.Hidden);
                    }),
                    (e.prototype.render = function (t) {
                      return null;
                    }),
                    (e.prototype._convertToAdapterPositionEnum = function (t) {
                      return t === u.KitchenSinkPositions.Top
                        ? a.Top
                        : t === u.KitchenSinkPositions.Bottom
                        ? a.Bottom
                        : t === u.KitchenSinkPositions.Right
                        ? a.Right
                        : a.Left;
                    }),
                    (e.prototype._convertToAdapterModeEnum = function (t) {
                      return t === u.KitchenSinkExpandModes.AlongSideTheVideo
                        ? s.AlongSideTheVideo
                        : t === u.KitchenSinkExpandModes.OverTheVideo
                        ? s.OverTheVideo
                        : s.Hidden;
                    }),
                    (e.prototype._convertToKitchenSinkModeEnum = function (t) {
                      return t === s.AlongSideTheVideo
                        ? u.KitchenSinkExpandModes.AlongSideTheVideo
                        : t === s.OverTheVideo
                        ? u.KitchenSinkExpandModes.OverTheVideo
                        : u.KitchenSinkExpandModes.Hidden;
                    }),
                    (e.defaultProps = {updateSidePanelMode: function () {}}),
                    i(
                      [
                        KalturaPlayer.ui.redux.connect(l, KalturaPlayer.ui.utils.bindActions(KalturaPlayer.ui.reducers.shell.actions), null, {
                          forwardRef: !0
                        })
                      ],
                      e
                    )
                  );
                })(KalturaPlayer.ui.preact.Component);
              e.KitchenSinkAdapter = p;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
                })(n(74));
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(0),
                s = n(75),
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._logger = null), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.componentDidMount = function () {
                      (this._logger = a.getContribLogger({module: 'contrib-ui', class: 'KitchenSink'})),
                        this._logger.info('mount component', {method: 'componentDidMount'});
                    }),
                    (e.prototype.componentWillUnmount = function () {
                      this._logger && this._logger.info('unmount component', {method: 'componentWillUnmount'});
                    }),
                    (e.prototype.render = function (t) {
                      this._logger && this._logger.trace('render component', {method: 'render'});
                      var e = this.props.kitchenSinkConfig.theme,
                        n = e.backgroundColor,
                        r = e.blur;
                      return i.h(
                        'div',
                        {className: this._getClass()},
                        i.h('div', {
                          className: s.backgroundLayout,
                          style: '\n                background-color:' + n + '; \n                backdrop-filter: blur(' + r + ');\n             '
                        }),
                        i.h('div', {className: s.children}, this.props.children)
                      );
                    }),
                    (e.prototype._getClass = function () {
                      return s.root + ' ' + (this.props.isActive ? s.active : '');
                    }),
                    (e.defaultProps = {isActive: !1}),
                    e
                  );
                })(i.Component);
              e.KitchenSink = c;
            },
            function (t, e, n) {
              var r = n(76);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              (e = n(3)(!1)).push([
                t.i,
                '.contrib_kitchen-sink__root___3XOC-{position:absolute;top:0;left:0;overflow:hidden;width:100%;height:100%;transition:opacity 500ms ease-in-out;opacity:0;z-index:0}.contrib_kitchen-sink__root___3XOC-.contrib_kitchen-sink__active___7g-Qt{opacity:1;z-index:1}.contrib_kitchen-sink__children___u6ez8{position:absolute;top:0;left:0;overflow:hidden;width:100%;height:100%}.contrib_kitchen-sink__background-layout___3Itev{width:100%;height:100%}\n',
                ''
              ]),
                (e.locals = {
                  root: 'contrib_kitchen-sink__root___3XOC-',
                  active: 'contrib_kitchen-sink__active___7g-Qt',
                  children: 'contrib_kitchen-sink__children___u6ez8',
                  'background-layout': 'contrib_kitchen-sink__background-layout___3Itev',
                  backgroundLayout: 'contrib_kitchen-sink__background-layout___3Itev'
                }),
                (t.exports = e);
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(78),
                o = n(0),
                i = n(5),
                a = o.getContribLogger({module: 'ui', class: 'FontManager'}),
                s = {
                  fontFamily: 'Lato, sans-serif',
                  testingFont: {text: 'abcdefghiiiiiiiiijklmnopqrstuvwwwwwwwwwwxyz0123456789', size: 72, fontName: 'monospace'}
                },
                c = '',
                u = (function () {
                  function t(t) {
                    this._fontConfig = i.getContribConfig(t.kalturaPlayer, 'ui.fonts', s);
                  }
                  return (
                    (t.prototype.loadFont = function () {
                      if (!this._isFontLoaded()) {
                        var t = this._fontConfig.fontFamily;
                        try {
                          this._overrideCorePlayerFontStyles(), (c = t), this._handleFontDownloadProcess();
                        } catch (e) {
                          a.warn('Failed to load font and override core player style with ' + t, {method: 'loadFont', data: {error: e}});
                        }
                      }
                    }),
                    (t.prototype.reset = function () {}),
                    (t.prototype._overrideCorePlayerFontStyles = function () {
                      var t = this._fontConfig.fontFamily,
                        e =
                          '.kaltura-player-container {\n                font-family: inherit;\n            }         \n            .playkit-player {\n                font-family: ' +
                          t +
                          ';\n            }\n            .playkit-player .playkit-player-gui  {\n                font-family: ' +
                          t +
                          ';\n            }\n            button, textarea {\n                font-family: inherit;\n            }',
                        n = (document.head || document.getElementsByTagName('head')[0]).lastElementChild,
                        r = document.createElement('style');
                      n.parentNode.insertBefore(r, n.nextSibling),
                        r.appendChild(document.createTextNode(e)),
                        a.info('Overridden Core player font-family style with: ' + t, {method: '_overrideCorePlayerFontStyles'});
                    }),
                    (t.prototype._handleFontDownloadProcess = function () {
                      var t = this,
                        e = this._fontConfig,
                        n = e.downloadData,
                        r = e.testingFont;
                      n &&
                        (n.name && n.url
                          ? this._checkFontExistence(n.name, r)
                            ? a.info('Font ' + n.name + ' already exists, no need to reload it', {method: 'loadFont'})
                            : this._downloadAndCacheFont(n.name, n.url).then(function (e) {
                                e && t._injectFontRawStyle(n.name, e);
                              })
                          : a.warn(
                              'Configuration provided for contrib.ui.fonts.downloadData is invalid (did you remember to provide both url and name?).',
                              {method: 'loadFont'}
                            ));
                    }),
                    (t.prototype._checkFontExistence = function (t, e) {
                      try {
                        var n = document.createElement('canvas').getContext('2d'),
                          r = e.text,
                          o = e.size + 'px';
                        n.font = o + ' ' + e.fontName;
                        var i = n.measureText(r).width;
                        return (n.font = o + ' ' + t + ',' + e.fontName), n.measureText(r).width !== i;
                      } catch (e) {
                        return (
                          a.warn('Failed to determine if font ' + t + ' exists in the system.', {method: '_checkFontExistence', data: {error: e}}), !1
                        );
                      }
                    }),
                    (t.prototype._downloadAndCacheFont = function (t, e) {
                      var n = this,
                        o = this._loadFontFromLocalStorage(t);
                      return o && '' !== o
                        ? Promise.resolve(o)
                        : r.default
                            .get(e)
                            .then(function (e) {
                              return e.data && 'string' == typeof e.data && '' !== e.data
                                ? (a.info('font ' + t + ' was downloaded successfully', {method: '_downloadAndCacheFont'}),
                                  n._saveFontToLocalStorage('' + t, e.data),
                                  e.data)
                                : (a.warn('failed to downloaded font ' + t + ' due to an unexpected font data', {
                                    method: '_downloadAndCacheFont',
                                    data: {error: e.data ? e.data : 'empty font data'}
                                  }),
                                  null);
                            })
                            .catch(function (e) {
                              return a.warn('Failed to download font ' + t, {method: '_downloadFont', data: {error: e}}), null;
                            });
                    }),
                    (t.prototype._injectFontRawStyle = function (t, e) {
                      try {
                        var n = document.createElement('style');
                        (n.innerHTML = e),
                          (document.head || document.getElementsByTagName('head')[0]).appendChild(n),
                          a.info('font "' + t + '" raw data style was injected', {method: '_injectFontRawStyle'});
                      } catch (e) {
                        a.warn('Failed to inject font ' + t + ' data to core player style.', {method: '_injectFontRawStyle', data: {error: e}});
                      }
                    }),
                    (t.prototype._loadFontFromLocalStorage = function (t) {
                      try {
                        return localStorage.getItem('contrib-plugins-font-' + t);
                      } catch (e) {
                        return (
                          a.warn('Failed to load font "' + t + '" data, key: contrib-plugins-font-' + t + ' from localStorage', {
                            method: '_loadFontFromLocalStorage',
                            data: {error: e}
                          }),
                          null
                        );
                      }
                    }),
                    (t.prototype._saveFontToLocalStorage = function (t, e) {
                      try {
                        localStorage.setItem('contrib-plugins-font-' + t, e),
                          a.info('font "' + t + '" was cached into localStorage', {method: '_saveFontToLocalStorage'});
                      } catch (e) {
                        a.warn('Failed to cache font "' + t + '" into localStorage', {method: '_saveFontToLocalStorage', data: {error: e}});
                      }
                    }),
                    (t.prototype._isFontLoaded = function () {
                      return (
                        '' !== c &&
                        (c !== this._fontConfig.fontFamily &&
                          a.warn(
                            'This request for loading font will be ignored since\n                 an earlier call for loading ' +
                              this._fontConfig.fontFamily +
                              ' was made.',
                            {method: '_isFontLoaded'}
                          ),
                        !0)
                      );
                    }),
                    t
                  );
                })();
              e.FontManager = u;
            },
            function (t, e, n) {
              t.exports = n(79);
            },
            function (t, e, n) {
              'use strict';
              var r = n(2),
                o = n(19),
                i = n(81),
                a = n(25);
              function s(t) {
                var e = new i(t),
                  n = o(i.prototype.request, e);
                return r.extend(n, i.prototype, e), r.extend(n, e), n;
              }
              var c = s(n(22));
              (c.Axios = i),
                (c.create = function (t) {
                  return s(a(c.defaults, t));
                }),
                (c.Cancel = n(26)),
                (c.CancelToken = n(94)),
                (c.isCancel = n(21)),
                (c.all = function (t) {
                  return Promise.all(t);
                }),
                (c.spread = n(95)),
                (t.exports = c),
                (t.exports.default = c);
            },
            function (t, e) {
              /*!
               * Determine if an object is a Buffer
               *
               * @author   Feross Aboukhadijeh <https://feross.org>
               * @license  MIT
               */
              t.exports = function (t) {
                return null != t && null != t.constructor && 'function' == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(2),
                o = n(20),
                i = n(82),
                a = n(83),
                s = n(25);
              function c(t) {
                (this.defaults = t), (this.interceptors = {request: new i(), response: new i()});
              }
              (c.prototype.request = function (t) {
                'string' == typeof t ? ((t = arguments[1] || {}).url = arguments[0]) : (t = t || {}),
                  ((t = s(this.defaults, t)).method = t.method ? t.method.toLowerCase() : 'get');
                var e = [a, void 0],
                  n = Promise.resolve(t);
                for (
                  this.interceptors.request.forEach(function (t) {
                    e.unshift(t.fulfilled, t.rejected);
                  }),
                    this.interceptors.response.forEach(function (t) {
                      e.push(t.fulfilled, t.rejected);
                    });
                  e.length;

                )
                  n = n.then(e.shift(), e.shift());
                return n;
              }),
                (c.prototype.getUri = function (t) {
                  return (t = s(this.defaults, t)), o(t.url, t.params, t.paramsSerializer).replace(/^\?/, '');
                }),
                r.forEach(['delete', 'get', 'head', 'options'], function (t) {
                  c.prototype[t] = function (e, n) {
                    return this.request(r.merge(n || {}, {method: t, url: e}));
                  };
                }),
                r.forEach(['post', 'put', 'patch'], function (t) {
                  c.prototype[t] = function (e, n, o) {
                    return this.request(r.merge(o || {}, {method: t, url: e, data: n}));
                  };
                }),
                (t.exports = c);
            },
            function (t, e, n) {
              'use strict';
              var r = n(2);
              function o() {
                this.handlers = [];
              }
              (o.prototype.use = function (t, e) {
                return this.handlers.push({fulfilled: t, rejected: e}), this.handlers.length - 1;
              }),
                (o.prototype.eject = function (t) {
                  this.handlers[t] && (this.handlers[t] = null);
                }),
                (o.prototype.forEach = function (t) {
                  r.forEach(this.handlers, function (e) {
                    null !== e && t(e);
                  });
                }),
                (t.exports = o);
            },
            function (t, e, n) {
              'use strict';
              var r = n(2),
                o = n(84),
                i = n(21),
                a = n(22),
                s = n(92),
                c = n(93);
              function u(t) {
                t.cancelToken && t.cancelToken.throwIfRequested();
              }
              t.exports = function (t) {
                return (
                  u(t),
                  t.baseURL && !s(t.url) && (t.url = c(t.baseURL, t.url)),
                  (t.headers = t.headers || {}),
                  (t.data = o(t.data, t.headers, t.transformRequest)),
                  (t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {})),
                  r.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (e) {
                    delete t.headers[e];
                  }),
                  (t.adapter || a.adapter)(t).then(
                    function (e) {
                      return u(t), (e.data = o(e.data, e.headers, t.transformResponse)), e;
                    },
                    function (e) {
                      return (
                        i(e) || (u(t), e && e.response && (e.response.data = o(e.response.data, e.response.headers, t.transformResponse))),
                        Promise.reject(e)
                      );
                    }
                  )
                );
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(2);
              t.exports = function (t, e, n) {
                return (
                  r.forEach(n, function (n) {
                    t = n(t, e);
                  }),
                  t
                );
              };
            },
            function (t, e) {
              var n,
                r,
                o = (t.exports = {});
              function i() {
                throw new Error('setTimeout has not been defined');
              }
              function a() {
                throw new Error('clearTimeout has not been defined');
              }
              function s(t) {
                if (n === setTimeout) return setTimeout(t, 0);
                if ((n === i || !n) && setTimeout) return (n = setTimeout), setTimeout(t, 0);
                try {
                  return n(t, 0);
                } catch (e) {
                  try {
                    return n.call(null, t, 0);
                  } catch (e) {
                    return n.call(this, t, 0);
                  }
                }
              }
              !(function () {
                try {
                  n = 'function' == typeof setTimeout ? setTimeout : i;
                } catch (t) {
                  n = i;
                }
                try {
                  r = 'function' == typeof clearTimeout ? clearTimeout : a;
                } catch (t) {
                  r = a;
                }
              })();
              var c,
                u = [],
                l = !1,
                p = -1;
              function f() {
                l && c && ((l = !1), c.length ? (u = c.concat(u)) : (p = -1), u.length && d());
              }
              function d() {
                if (!l) {
                  var t = s(f);
                  l = !0;
                  for (var e = u.length; e; ) {
                    for (c = u, u = []; ++p < e; ) c && c[p].run();
                    (p = -1), (e = u.length);
                  }
                  (c = null),
                    (l = !1),
                    (function (t) {
                      if (r === clearTimeout) return clearTimeout(t);
                      if ((r === a || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(t);
                      try {
                        r(t);
                      } catch (e) {
                        try {
                          return r.call(null, t);
                        } catch (e) {
                          return r.call(this, t);
                        }
                      }
                    })(t);
                }
              }
              function h(t, e) {
                (this.fun = t), (this.array = e);
              }
              function _() {}
              (o.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                u.push(new h(t, e)), 1 !== u.length || l || s(d);
              }),
                (h.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (o.title = 'browser'),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ''),
                (o.versions = {}),
                (o.on = _),
                (o.addListener = _),
                (o.once = _),
                (o.off = _),
                (o.removeListener = _),
                (o.removeAllListeners = _),
                (o.emit = _),
                (o.prependListener = _),
                (o.prependOnceListener = _),
                (o.listeners = function (t) {
                  return [];
                }),
                (o.binding = function (t) {
                  throw new Error('process.binding is not supported');
                }),
                (o.cwd = function () {
                  return '/';
                }),
                (o.chdir = function (t) {
                  throw new Error('process.chdir is not supported');
                }),
                (o.umask = function () {
                  return 0;
                });
            },
            function (t, e, n) {
              'use strict';
              var r = n(2);
              t.exports = function (t, e) {
                r.forEach(t, function (n, r) {
                  r !== e && r.toUpperCase() === e.toUpperCase() && ((t[e] = n), delete t[r]);
                });
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(24);
              t.exports = function (t, e, n) {
                var o = n.config.validateStatus;
                !o || o(n.status) ? t(n) : e(r('Request failed with status code ' + n.status, n.config, null, n.request, n));
              };
            },
            function (t, e, n) {
              'use strict';
              t.exports = function (t, e, n, r, o) {
                return (
                  (t.config = e),
                  n && (t.code = n),
                  (t.request = r),
                  (t.response = o),
                  (t.isAxiosError = !0),
                  (t.toJSON = function () {
                    return {
                      message: this.message,
                      name: this.name,
                      description: this.description,
                      number: this.number,
                      fileName: this.fileName,
                      lineNumber: this.lineNumber,
                      columnNumber: this.columnNumber,
                      stack: this.stack,
                      config: this.config,
                      code: this.code
                    };
                  }),
                  t
                );
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(2),
                o = [
                  'age',
                  'authorization',
                  'content-length',
                  'content-type',
                  'etag',
                  'expires',
                  'from',
                  'host',
                  'if-modified-since',
                  'if-unmodified-since',
                  'last-modified',
                  'location',
                  'max-forwards',
                  'proxy-authorization',
                  'referer',
                  'retry-after',
                  'user-agent'
                ];
              t.exports = function (t) {
                var e,
                  n,
                  i,
                  a = {};
                return t
                  ? (r.forEach(t.split('\n'), function (t) {
                      if (((i = t.indexOf(':')), (e = r.trim(t.substr(0, i)).toLowerCase()), (n = r.trim(t.substr(i + 1))), e)) {
                        if (a[e] && o.indexOf(e) >= 0) return;
                        a[e] = 'set-cookie' === e ? (a[e] ? a[e] : []).concat([n]) : a[e] ? a[e] + ', ' + n : n;
                      }
                    }),
                    a)
                  : a;
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(2);
              t.exports = r.isStandardBrowserEnv()
                ? (function () {
                    var t,
                      e = /(msie|trident)/i.test(navigator.userAgent),
                      n = document.createElement('a');
                    function o(t) {
                      var r = t;
                      return (
                        e && (n.setAttribute('href', r), (r = n.href)),
                        n.setAttribute('href', r),
                        {
                          href: n.href,
                          protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
                          host: n.host,
                          search: n.search ? n.search.replace(/^\?/, '') : '',
                          hash: n.hash ? n.hash.replace(/^#/, '') : '',
                          hostname: n.hostname,
                          port: n.port,
                          pathname: '/' === n.pathname.charAt(0) ? n.pathname : '/' + n.pathname
                        }
                      );
                    }
                    return (
                      (t = o(window.location.href)),
                      function (e) {
                        var n = r.isString(e) ? o(e) : e;
                        return n.protocol === t.protocol && n.host === t.host;
                      }
                    );
                  })()
                : function () {
                    return !0;
                  };
            },
            function (t, e, n) {
              'use strict';
              var r = n(2);
              t.exports = r.isStandardBrowserEnv()
                ? {
                    write: function (t, e, n, o, i, a) {
                      var s = [];
                      s.push(t + '=' + encodeURIComponent(e)),
                        r.isNumber(n) && s.push('expires=' + new Date(n).toGMTString()),
                        r.isString(o) && s.push('path=' + o),
                        r.isString(i) && s.push('domain=' + i),
                        !0 === a && s.push('secure'),
                        (document.cookie = s.join('; '));
                    },
                    read: function (t) {
                      var e = document.cookie.match(new RegExp('(^|;\\s*)(' + t + ')=([^;]*)'));
                      return e ? decodeURIComponent(e[3]) : null;
                    },
                    remove: function (t) {
                      this.write(t, '', Date.now() - 864e5);
                    }
                  }
                : {
                    write: function () {},
                    read: function () {
                      return null;
                    },
                    remove: function () {}
                  };
            },
            function (t, e, n) {
              'use strict';
              t.exports = function (t) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
              };
            },
            function (t, e, n) {
              'use strict';
              t.exports = function (t, e) {
                return e ? t.replace(/\/+$/, '') + '/' + e.replace(/^\/+/, '') : t;
              };
            },
            function (t, e, n) {
              'use strict';
              var r = n(26);
              function o(t) {
                if ('function' != typeof t) throw new TypeError('executor must be a function.');
                var e;
                this.promise = new Promise(function (t) {
                  e = t;
                });
                var n = this;
                t(function (t) {
                  n.reason || ((n.reason = new r(t)), e(n.reason));
                });
              }
              (o.prototype.throwIfRequested = function () {
                if (this.reason) throw this.reason;
              }),
                (o.source = function () {
                  var t;
                  return {
                    token: new o(function (e) {
                      t = e;
                    }),
                    cancel: t
                  };
                }),
                (t.exports = o);
            },
            function (t, e, n) {
              'use strict';
              t.exports = function (t) {
                return function (e) {
                  return t.apply(null, e);
                };
              };
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i,
                a = n(27),
                s = n(0),
                c = n(0);
              !(function (t) {
                (t.Show = 'show'), (t.Hide = 'hide');
              })(i || (i = {}));
              var u = c.getContribLogger({module: 'contrib-ui', class: 'CuepointFloatingEngine'}),
                l = (function (t) {
                  function e(e) {
                    var n = t.call(this, e) || this;
                    return (n.playerSize = null), (n.videoSize = null), n;
                  }
                  return (
                    o(e, t),
                    (e.prototype.updateLayout = function (t, e) {
                      return (this.videoSize = e), (this.playerSize = t), this.recalculateCuepointLayout(), this.getCurrentCuepointSnapshot();
                    }),
                    (e.prototype._calculateLayout = function (t, e) {
                      var n = t.rawLayout;
                      return {
                        x: e.left + n.relativeX * e.width,
                        y: e.top + n.relativeY * e.height,
                        width: n.relativeWidth * e.width,
                        height: n.relativeHeight * e.height
                      };
                    }),
                    (e.prototype.recalculateCuepointLayout = function () {
                      var t = this;
                      if (
                        (u.debug('calculating cuepoint layout based on video/player sizes', {method: 'recalculateCuepointLayout'}),
                        !this.playerSize || !this.videoSize)
                      )
                        return (
                          u.warn('missing video/player sizes, hide all cuepoint', {method: 'recalculateCuepointLayout'}), void (this.enabled = !1)
                        );
                      var e = this.playerSize,
                        n = e.width,
                        r = e.height,
                        o = this.videoSize,
                        i = o.width,
                        s = o.height;
                      if (!(n && r && i && s))
                        return (
                          u.warn('missing video/player sizes, hide all cuepoint', {method: 'recalculateCuepointLayout'}), void (this.enabled = !1)
                        );
                      var c = a.scaleVideo(i, s, n, r, !0);
                      u.debug('recalculate cuepoint layout based on new sizes', {method: 'recalculateCuepointLayout', data: {scaleCalculation: c}}),
                        (this.cuepoints || []).forEach(function (e) {
                          e.layout = t._calculateLayout(e, c);
                        }),
                        (this.enabled = !0);
                    }),
                    e
                  );
                })(s.CuepointEngine);
              e.CuepointFloatingEngine = l;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (e.downloadContent = function (t, e) {
                  var n = new Blob([t], {type: 'text/plain;charset=utf-8;'}),
                    r = document.createElement('a');
                  window.navigator.msSaveBlob
                    ? window.navigator.msSaveOrOpenBlob(n, e)
                    : (-1 !== navigator.userAgent.search('Firefox')
                        ? ((r.style.display = 'none'), r.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(t)))
                        : r.setAttribute('href', URL.createObjectURL(n)),
                      r.setAttribute('target', '_blank'),
                      r.setAttribute('download', e),
                      r.click(),
                      r.remove());
                }),
                (e.printContent = function (t) {
                  var e = window.open('', '', 'width=400,height=600');
                  e && (e.document.write(t), e.document.close(), e.focus(), e.print(), e.close());
                }),
                (e.timeSince = function (t) {
                  'object' != typeof t && (t = new Date(t));
                  var e,
                    n = new Date(),
                    r = Math.floor((n - t) / 1e3),
                    o = Math.floor(r / 31536e3);
                  return (
                    o >= 1
                      ? (e = 'year')
                      : (o = Math.floor(r / 2592e3)) >= 1
                      ? (e = 'month')
                      : (o = Math.floor(r / 86400)) >= 1
                      ? (e = 'day')
                      : (o = Math.floor(r / 3600)) >= 1
                      ? (e = 'hour')
                      : (o = Math.floor(r / 60)) >= 1
                      ? (e = 'minute')
                      : ((o = -1), (e = 'a moment')),
                    (o > 1 || 0 === o) && (e += 's'),
                    (o >= 0 ? o : '') + ' ' + e + ' ago'
                  );
                });
            },
            function (t, e, n) {
              'use strict';
              var r =
                  (this && this.__assign) ||
                  function () {
                    return (r =
                      Object.assign ||
                      function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                          for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t;
                      }).apply(this, arguments);
                  },
                o =
                  (this && this.__spreadArrays) ||
                  function () {
                    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                    var r = Array(t),
                      o = 0;
                    for (e = 0; e < n; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                    return r;
                  };
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(28),
                s = n(29),
                c = n(6),
                u = n(99),
                l = n(7),
                p = n(5),
                f = {presetAreasMapping: {Playback: {PlayerArea: 'PlayerArea'}, Live: {PlayerArea: 'PlayerArea'}}},
                d = ['PlayerArea'],
                h = (function () {
                  function t(t) {
                    var e,
                      n,
                      r = this;
                    (this.options = t),
                      (this._items = (((e = {})[s.OverlayPositions.PlayerArea] = []), e)),
                      (this._componentRef = (((n = {})[s.OverlayPositions.PlayerArea] = null), n)),
                      (this._renderItems = function (t) {
                        return 0 === r._items[t].length
                          ? null
                          : i.h(u.OverlayItemContainer, {
                              renderContent: function () {
                                return r._items[t][0].renderOverlayChild({});
                              }
                            });
                      }),
                      (this._renderChild = function (t) {
                        return i.h(c.ManagedComponent, {
                          label: 'overlay-manager',
                          renderChildren: function () {
                            return r._renderItems(t);
                          },
                          isShown: function () {
                            return !0;
                          },
                          ref: function (e) {
                            return (r._componentRef[t] = e);
                          }
                        });
                      }),
                      (this._options = t),
                      (this._overlayConfig = p.getContribConfig(this._options.kalturaPlayer, 'ui.overlay', f, {
                        explicitMerge: ['presetAreasMapping']
                      }));
                    var o = l.PresetsUtils.groupPresetAreasByType({presetAreasMapping: this._overlayConfig.presetAreasMapping, acceptableTypes: d});
                    this.options.presetManager.add({
                      label: 'overlay-manager',
                      fillContainer: !0,
                      presetAreas: o.PlayerArea,
                      renderChild: function () {
                        return r._renderChild(s.OverlayPositions.PlayerArea);
                      }
                    });
                  }
                  return (
                    (t.prototype.add = function (t) {
                      var e = this._options.presetManager,
                        n = r(r({presetManager: e}, this.options), {data: t}),
                        o = new a.OverlayItem(n);
                      return this._items[t.position].unshift(o), this._updateComponents(t.position), o;
                    }),
                    (t.prototype.remove = function (t) {
                      var e = this._items[t.data.position],
                        n = e.indexOf(t);
                      n > -1
                        ? (e[n].destroy(), e.splice(n, 1), 0 === n && this._updateComponents(t.data.position))
                        : console.warn("couldn't remove " + t + " since it wasn't found");
                    }),
                    (t.prototype.reset = function () {
                      o(this._items.PlayerArea).forEach(function (t) {
                        try {
                          t.destroy();
                        } catch (t) {
                          console.warn(t);
                        }
                      }),
                        (this._items.PlayerArea = []);
                    }),
                    (t.prototype._updateComponents = function (t) {
                      !this._componentRef.PlayerArea || (t && t !== s.OverlayPositions.PlayerArea) || this._componentRef.PlayerArea.update();
                    }),
                    t
                  );
                })();
              e.OverlayManager = h;
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0});
              var r = n(100);
              e.OverlayItemContainer = r.OverlayItemContainer;
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, '__esModule', {value: !0});
              var i = n(1),
                a = n(0),
                s = n(101),
                c = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._logger = a.getContribLogger({module: 'contrib-ui', class: 'OverlayContainer'})), e;
                  }
                  return (
                    o(e, t),
                    (e.prototype.componentDidMount = function () {
                      this._logger.info('mount component', {method: 'componentDidMount'});
                    }),
                    (e.prototype.componentWillUnmount = function () {
                      this._logger.info('unmount component', {method: 'componentWillUnmount'});
                    }),
                    (e.prototype.render = function () {
                      this._logger.trace('render component', {method: 'render'});
                      var t = this.props.renderContent();
                      return t ? i.h('div', {className: s.overlayItemContainer}, t) : null;
                    }),
                    e
                  );
                })(i.Component);
              e.OverlayItemContainer = c;
            },
            function (t, e, n) {
              var r = n(102);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              (e = n(3)(!1)).push([
                t.i,
                '.contrib_overlay-item-container__overlayItemContainer___NxNoV{position:absolute;z-index:6;top:0;bottom:0;left:0;right:0;width:100%;height:100%}\n',
                ''
              ]),
                (e.locals = {overlayItemContainer: 'contrib_overlay-item-container__overlayItemContainer___NxNoV'}),
                (t.exports = e);
            },
            function (t, e, n) {
              'use strict';
              Object.defineProperty(e, '__esModule', {value: !0}),
                (function (t) {
                  for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
                })(n(104));
            },
            function (t, e, n) {
              'use strict';
              var r,
                o =
                  (this && this.__extends) ||
                  ((r = function (t, e) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({__proto__: []} instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                  }),
                i =
                  (this && this.__assign) ||
                  function () {
                    return (i =
                      Object.assign ||
                      function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                          for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t;
                      }).apply(this, arguments);
                  };
              Object.defineProperty(e, '__esModule', {value: !0});
              var a,
                s,
                c,
                u,
                l = n(1),
                p = n(105);
              !(function (t) {
                (t.Top = 'top'), (t.Bottom = 'bottom');
              })((a = e.PopoverVerticalPositions || (e.PopoverVerticalPositions = {}))),
                (function (t) {
                  (t.Left = 'left'), (t.Right = 'right');
                })((s = e.PopoverHorizontalPositions || (e.PopoverHorizontalPositions = {}))),
                (function (t) {
                  (t.Click = 'click'), (t.Hover = 'hover');
                })((c = e.PopoverTriggerMode || (e.PopoverTriggerMode = {}))),
                (function (t) {
                  (t[(t.Esc = 27)] = 'Esc'), (t[(t.Enter = 13)] = 'Enter');
                })((u = e.KeyboardKeys || (e.KeyboardKeys = {})));
              var f = {
                  verticalPosition: a.Top,
                  horizontalPosition: s.Left,
                  triggerMode: c.Click,
                  className: 'popover',
                  closeOnEsc: !0,
                  closeOnClick: !0
                },
                d = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (
                      (e._closeTimeout = null),
                      (e._controlElement = null),
                      (e.state = {open: !1}),
                      (e._clearTimeout = function () {
                        clearTimeout(e._closeTimeout), (e._closeTimeout = null);
                      }),
                      (e._handleMouseEvent = function (t) {
                        !e._controlElement.contains(t.target) && e.props.closeOnClick && e._closePopover();
                      }),
                      (e._handleKeyboardEvent = function (t) {
                        (e._controlElement.contains(t.target) && t.keyCode === u.Enter) ||
                          (((e.props.closeOnEsc && t.keyCode === u.Esc) || t.keyCode === u.Enter) && e._closePopover());
                      }),
                      (e._openPopover = function () {
                        var t = e.props.onOpen;
                        e._clearTimeout(),
                          e.setState({open: !0}, function () {
                            e._addListeners(), t && t();
                          });
                      }),
                      (e._closePopover = function () {
                        var t = e.props.onClose;
                        e._clearTimeout(),
                          e.setState({open: !1}, function () {
                            e._removeListeners(), t && t();
                          });
                      }),
                      (e._togglePopover = function (t) {
                        e.state.open ? e._closePopover() : e._openPopover();
                      }),
                      (e._handleMouseEnter = function () {
                        e.state.open || e._openPopover();
                      }),
                      (e._handleMouseLeave = function () {
                        e._closeTimeout = setTimeout(e._closePopover, 500);
                      }),
                      (e._handleHoverOnPopover = function () {
                        e.state.open && e._closeTimeout ? e._clearTimeout() : e._closePopover();
                      }),
                      (e._addListeners = function () {
                        document.addEventListener('click', e._handleMouseEvent), document.addEventListener('keydown', e._handleKeyboardEvent);
                      }),
                      (e._removeListeners = function () {
                        document.removeEventListener('click', e._handleMouseEvent), document.removeEventListener('keydown', e._handleKeyboardEvent);
                      }),
                      (e._getHoverEvents = function () {
                        return e.props.triggerMode === c.Hover
                          ? {
                              targetEvents: {onMouseEnter: e._handleMouseEnter, onMouseLeave: e._handleMouseLeave},
                              popoverEvents: {onMouseEnter: e._handleHoverOnPopover, onMouseLeave: e._handleHoverOnPopover}
                            }
                          : {targetEvents: {onClick: e._togglePopover}, popoverEvents: {}};
                      }),
                      e
                    );
                  }
                  return (
                    o(e, t),
                    (e.prototype.componentWillUnmount = function () {
                      this._removeListeners();
                    }),
                    (e.prototype.render = function (t) {
                      var e = this;
                      if (!t.content || !t.children) return null;
                      var n = this._getHoverEvents(),
                        r = n.targetEvents,
                        o = n.popoverEvents;
                      return l.h(
                        'div',
                        {className: p.popoverContainer},
                        l.h(
                          'div',
                          i(
                            {
                              className: 'popover-anchor-container',
                              ref: function (t) {
                                e._controlElement = t;
                              }
                            },
                            r
                          ),
                          t.children
                        ),
                        this.state.open &&
                          l.h(
                            'div',
                            i(
                              {
                                'aria-expanded': 'true',
                                className: [t.className, p.popoverComponent, p[t.verticalPosition], p[t.horizontalPosition]].join(' ')
                              },
                              o
                            ),
                            t.content
                          )
                      );
                    }),
                    (e.defaultProps = i({}, f)),
                    e
                  );
                })(l.Component);
              e.Popover = d;
            },
            function (t, e, n) {
              var r = n(106);
              'string' == typeof r && (r = [[t.i, r, '']]),
                n(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}),
                r.locals && (t.exports = r.locals);
            },
            function (t, e, n) {
              (e = n(3)(!1)).push([
                t.i,
                '.contribpopover__popover-container___BSJYT{position:relative}.contribpopover__popover-container___BSJYT .contribpopover__popover-component___KA0bA{background-color:#222222;border-radius:4px;position:absolute;right:0px;font-size:15px;display:block}.contribpopover__popover-container___BSJYT .contribpopover__popover-component___KA0bA.contribpopover__visible___PihhQ{visibility:visible;opacity:1;z-index:10}.contribpopover__popover-container___BSJYT .contribpopover__popover-component___KA0bA.contribpopover__top___2YQjI{bottom:100%;margin-bottom:6px}.contribpopover__popover-container___BSJYT .contribpopover__popover-component___KA0bA.contribpopover__bottom___2F_dJ{top:100%;margin-top:6px}.contribpopover__popover-container___BSJYT .contribpopover__popover-component___KA0bA.contribpopover__right___2hAeY{left:0px}.contribpopover__popover-container___BSJYT .contribpopover__popover-component___KA0bA.contribpopover__left___3jgXH{right:0px}\n',
                ''
              ]),
                (e.locals = {
                  'popover-container': 'contribpopover__popover-container___BSJYT',
                  popoverContainer: 'contribpopover__popover-container___BSJYT',
                  'popover-component': 'contribpopover__popover-component___KA0bA',
                  popoverComponent: 'contribpopover__popover-component___KA0bA',
                  visible: 'contribpopover__visible___PihhQ',
                  top: 'contribpopover__top___2YQjI',
                  bottom: 'contribpopover__bottom___2F_dJ',
                  right: 'contribpopover__right___2hAeY',
                  left: 'contribpopover__left___3jgXH'
                }),
                (t.exports = e);
            }
          ])));
    },
    function (t, e, n) {
      window,
        (t.exports = (function (t) {
          var e = {};
          function n(r) {
            if (e[r]) return e[r].exports;
            var o = (e[r] = {i: r, l: !1, exports: {}});
            return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, r) {
              n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r});
            }),
            (n.r = function (t) {
              'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
                Object.defineProperty(t, '__esModule', {value: !0});
            }),
            (n.t = function (t, e) {
              if ((1 & e && (t = n(t)), 8 & e)) return t;
              if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
              var r = Object.create(null);
              if ((n.r(r), Object.defineProperty(r, 'default', {enumerable: !0, value: t}), 2 & e && 'string' != typeof t))
                for (var o in t)
                  n.d(
                    r,
                    o,
                    function (e) {
                      return t[e];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return n.d(e, 'a', e), e;
            }),
            (n.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ''),
            n((n.s = 63))
          );
        })([
          function (t, e, n) {
            (function (e) {
              var n = function (t) {
                return t && t.Math == Math && t;
              };
              t.exports =
                n('object' == typeof globalThis && globalThis) ||
                n('object' == typeof window && window) ||
                n('object' == typeof self && self) ||
                n('object' == typeof e && e) ||
                Function('return this')();
            }.call(this, n(67)));
          },
          function (t, e, n) {
            var r = n(0),
              o = n(18),
              i = n(41),
              a = n(71),
              s = r.Symbol,
              c = o('wks');
            t.exports = function (t) {
              return c[t] || (c[t] = (a && s[t]) || (a ? s : i)('Symbol.' + t));
            };
          },
          function (t, e, n) {
            var r = n(8);
            t.exports = function (t) {
              if (!r(t)) throw TypeError(String(t) + ' is not an object');
              return t;
            };
          },
          function (t, e, n) {
            var r = n(6),
              o = n(11),
              i = n(19);
            t.exports = r
              ? function (t, e, n) {
                  return o.f(t, e, i(1, n));
                }
              : function (t, e, n) {
                  return (t[e] = n), t;
                };
          },
          function (t, e) {
            t.exports = function (t) {
              try {
                return !!t();
              } catch (t) {
                return !0;
              }
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(30).f,
              i = n(3),
              a = n(10),
              s = n(24),
              c = n(74),
              u = n(49);
            t.exports = function (t, e) {
              var n,
                l,
                p,
                f,
                d,
                h = t.target,
                _ = t.global,
                v = t.stat;
              if ((n = _ ? r : v ? r[h] || s(h, {}) : (r[h] || {}).prototype))
                for (l in e) {
                  if (
                    ((f = e[l]), (p = t.noTargetGet ? (d = o(n, l)) && d.value : n[l]), !u(_ ? l : h + (v ? '.' : '#') + l, t.forced) && void 0 !== p)
                  ) {
                    if (typeof f == typeof p) continue;
                    c(f, p);
                  }
                  (t.sham || (p && p.sham)) && i(f, 'sham', !0), a(n, l, f, t);
                }
            };
          },
          function (t, e, n) {
            var r = n(4);
            t.exports = !r(function () {
              return (
                7 !=
                Object.defineProperty({}, 'a', {
                  get: function () {
                    return 7;
                  }
                }).a
              );
            });
          },
          function (t, e) {
            var n = {}.hasOwnProperty;
            t.exports = function (t, e) {
              return n.call(t, e);
            };
          },
          function (t, e) {
            t.exports = function (t) {
              return 'object' == typeof t ? null !== t : 'function' == typeof t;
            };
          },
          function (t, e, n) {
            var r = n(21),
              o = n(0),
              i = function (t) {
                return 'function' == typeof t ? t : void 0;
              };
            t.exports = function (t, e) {
              return arguments.length < 2 ? i(r[t]) || i(o[t]) : (r[t] && r[t][e]) || (o[t] && o[t][e]);
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(18),
              i = n(3),
              a = n(7),
              s = n(24),
              c = n(40),
              u = n(14),
              l = u.get,
              p = u.enforce,
              f = String(c).split('toString');
            o('inspectSource', function (t) {
              return c.call(t);
            }),
              (t.exports = function (t, e, n, o) {
                var c = !!o && !!o.unsafe,
                  u = !!o && !!o.enumerable,
                  l = !!o && !!o.noTargetGet;
                'function' == typeof n &&
                  ('string' != typeof e || a(n, 'name') || i(n, 'name', e), (p(n).source = f.join('string' == typeof e ? e : ''))),
                  t !== r ? (c ? !l && t[e] && (u = !0) : delete t[e], u ? (t[e] = n) : i(t, e, n)) : u ? (t[e] = n) : s(e, n);
              })(Function.prototype, 'toString', function () {
                return ('function' == typeof this && l(this).source) || c.call(this);
              });
          },
          function (t, e, n) {
            var r = n(6),
              o = n(38),
              i = n(2),
              a = n(39),
              s = Object.defineProperty;
            e.f = r
              ? s
              : function (t, e, n) {
                  if ((i(t), (e = a(e, !0)), i(n), o))
                    try {
                      return s(t, e, n);
                    } catch (t) {}
                  if ('get' in n || 'set' in n) throw TypeError('Accessors not supported');
                  return 'value' in n && (t[e] = n.value), t;
                };
          },
          function (t, e) {
            t.exports = function (t) {
              if ('function' != typeof t) throw TypeError(String(t) + ' is not a function');
              return t;
            };
          },
          function (t, e) {
            t.exports = !1;
          },
          function (t, e, n) {
            var r,
              o,
              i,
              a = n(69),
              s = n(0),
              c = n(8),
              u = n(3),
              l = n(7),
              p = n(26),
              f = n(27),
              d = s.WeakMap;
            if (a) {
              var h = new d(),
                _ = h.get,
                v = h.has,
                g = h.set;
              (r = function (t, e) {
                return g.call(h, t, e), e;
              }),
                (o = function (t) {
                  return _.call(h, t) || {};
                }),
                (i = function (t) {
                  return v.call(h, t);
                });
            } else {
              var y = p('state');
              (f[y] = !0),
                (r = function (t, e) {
                  return u(t, y, e), e;
                }),
                (o = function (t) {
                  return l(t, y) ? t[y] : {};
                }),
                (i = function (t) {
                  return l(t, y);
                });
            }
            t.exports = {
              set: r,
              get: o,
              has: i,
              enforce: function (t) {
                return i(t) ? o(t) : r(t, {});
              },
              getterFor: function (t) {
                return function (e) {
                  var n;
                  if (!c(e) || (n = o(e)).type !== t) throw TypeError('Incompatible receiver, ' + t + ' required');
                  return n;
                };
              }
            };
          },
          function (t, e) {
            var n = {}.toString;
            t.exports = function (t) {
              return n.call(t).slice(8, -1);
            };
          },
          function (t, e) {
            t.exports = {};
          },
          function (t, e, n) {
            'use strict';
            var r = n(12),
              o = function (t) {
                var e, n;
                (this.promise = new t(function (t, r) {
                  if (void 0 !== e || void 0 !== n) throw TypeError('Bad Promise constructor');
                  (e = t), (n = r);
                })),
                  (this.resolve = r(e)),
                  (this.reject = r(n));
              };
            t.exports.f = function (t) {
              return new o(t);
            };
          },
          function (t, e, n) {
            var r = n(13),
              o = n(68);
            (t.exports = function (t, e) {
              return o[t] || (o[t] = void 0 !== e ? e : {});
            })('versions', []).push({version: '3.3.5', mode: r ? 'pure' : 'global', copyright: '© 2019 Denis Pushkarev (zloirock.ru)'});
          },
          function (t, e) {
            t.exports = function (t, e) {
              return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e};
            };
          },
          function (t, e, n) {
            var r = n(45),
              o = n(29);
            t.exports = function (t) {
              return r(o(t));
            };
          },
          function (t, e, n) {
            t.exports = n(0);
          },
          function (t, e, n) {
            var r = n(2),
              o = n(91),
              i = n(47),
              a = n(54),
              s = n(92),
              c = n(93),
              u = function (t, e) {
                (this.stopped = t), (this.result = e);
              };
            (t.exports = function (t, e, n, l, p) {
              var f,
                d,
                h,
                _,
                v,
                g,
                y,
                m = a(e, n, l ? 2 : 1);
              if (p) f = t;
              else {
                if ('function' != typeof (d = s(t))) throw TypeError('Target is not iterable');
                if (o(d)) {
                  for (h = 0, _ = i(t.length); _ > h; h++) if ((v = l ? m(r((y = t[h]))[0], y[1]) : m(t[h])) && v instanceof u) return v;
                  return new u(!1);
                }
                f = d.call(t);
              }
              for (g = f.next; !(y = g.call(f)).done; ) if ('object' == typeof (v = c(f, m, y.value, l)) && v && v instanceof u) return v;
              return new u(!1);
            }).stop = function (t) {
              return new u(!0, t);
            };
          },
          function (t, e) {
            t.exports = function (t) {
              try {
                return {error: !1, value: t()};
              } catch (t) {
                return {error: !0, value: t};
              }
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(3);
            t.exports = function (t, e) {
              try {
                o(r, t, e);
              } catch (n) {
                r[t] = e;
              }
              return e;
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(8),
              i = r.document,
              a = o(i) && o(i.createElement);
            t.exports = function (t) {
              return a ? i.createElement(t) : {};
            };
          },
          function (t, e, n) {
            var r = n(18),
              o = n(41),
              i = r('keys');
            t.exports = function (t) {
              return i[t] || (i[t] = o(t));
            };
          },
          function (t, e) {
            t.exports = {};
          },
          function (t, e) {
            var n = Math.ceil,
              r = Math.floor;
            t.exports = function (t) {
              return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
            };
          },
          function (t, e) {
            t.exports = function (t) {
              if (null == t) throw TypeError("Can't call method on " + t);
              return t;
            };
          },
          function (t, e, n) {
            var r = n(6),
              o = n(44),
              i = n(19),
              a = n(20),
              s = n(39),
              c = n(7),
              u = n(38),
              l = Object.getOwnPropertyDescriptor;
            e.f = r
              ? l
              : function (t, e) {
                  if (((t = a(t)), (e = s(e, !0)), u))
                    try {
                      return l(t, e);
                    } catch (t) {}
                  if (c(t, e)) return i(!o.f.call(t, e), t[e]);
                };
          },
          function (t, e) {
            t.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
          },
          function (t, e, n) {
            var r = n(7),
              o = n(33),
              i = n(26),
              a = n(80),
              s = i('IE_PROTO'),
              c = Object.prototype;
            t.exports = a
              ? Object.getPrototypeOf
              : function (t) {
                  return (
                    (t = o(t)),
                    r(t, s)
                      ? t[s]
                      : 'function' == typeof t.constructor && t instanceof t.constructor
                      ? t.constructor.prototype
                      : t instanceof Object
                      ? c
                      : null
                  );
                };
          },
          function (t, e, n) {
            var r = n(29);
            t.exports = function (t) {
              return Object(r(t));
            };
          },
          function (t, e, n) {
            var r = n(2),
              o = n(81),
              i = n(31),
              a = n(27),
              s = n(51),
              c = n(25),
              u = n(26)('IE_PROTO'),
              l = function () {},
              p = function () {
                var t,
                  e = c('iframe'),
                  n = i.length;
                for (
                  e.style.display = 'none',
                    s.appendChild(e),
                    e.src = String('javascript:'),
                    (t = e.contentWindow.document).open(),
                    t.write('<script>document.F=Object</script>'),
                    t.close(),
                    p = t.F;
                  n--;

                )
                  delete p.prototype[i[n]];
                return p();
              };
            (t.exports =
              Object.create ||
              function (t, e) {
                var n;
                return null !== t ? ((l.prototype = r(t)), (n = new l()), (l.prototype = null), (n[u] = t)) : (n = p()), void 0 === e ? n : o(n, e);
              }),
              (a[u] = !0);
          },
          function (t, e, n) {
            var r = n(46),
              o = n(31);
            t.exports =
              Object.keys ||
              function (t) {
                return r(t, o);
              };
          },
          function (t, e, n) {
            var r = n(11).f,
              o = n(7),
              i = n(1)('toStringTag');
            t.exports = function (t, e, n) {
              t && !o((t = n ? t : t.prototype), i) && r(t, i, {configurable: !0, value: e});
            };
          },
          function (t, e, n) {
            var r = n(9);
            t.exports = r('navigator', 'userAgent') || '';
          },
          function (t, e, n) {
            var r = n(6),
              o = n(4),
              i = n(25);
            t.exports =
              !r &&
              !o(function () {
                return (
                  7 !=
                  Object.defineProperty(i('div'), 'a', {
                    get: function () {
                      return 7;
                    }
                  }).a
                );
              });
          },
          function (t, e, n) {
            var r = n(8);
            t.exports = function (t, e) {
              if (!r(t)) return t;
              var n, o;
              if (e && 'function' == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
              if ('function' == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o;
              if (!e && 'function' == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
              throw TypeError("Can't convert object to primitive value");
            };
          },
          function (t, e, n) {
            var r = n(18);
            t.exports = r('native-function-to-string', Function.toString);
          },
          function (t, e) {
            var n = 0,
              r = Math.random();
            t.exports = function (t) {
              return 'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++n + r).toString(36);
            };
          },
          function (t, e, n) {
            var r = n(15),
              o = n(1)('toStringTag'),
              i =
                'Arguments' ==
                r(
                  (function () {
                    return arguments;
                  })()
                );
            t.exports = function (t) {
              var e, n, a;
              return void 0 === t
                ? 'Undefined'
                : null === t
                ? 'Null'
                : 'string' ==
                  typeof (n = (function (t, e) {
                    try {
                      return t[e];
                    } catch (t) {}
                  })((e = Object(t)), o))
                ? n
                : i
                ? r(e)
                : 'Object' == (a = r(e)) && 'function' == typeof e.callee
                ? 'Arguments'
                : a;
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(79),
              i = n(32),
              a = n(52),
              s = n(36),
              c = n(3),
              u = n(10),
              l = n(1),
              p = n(13),
              f = n(16),
              d = n(50),
              h = d.IteratorPrototype,
              _ = d.BUGGY_SAFARI_ITERATORS,
              v = l('iterator'),
              g = function () {
                return this;
              };
            t.exports = function (t, e, n, l, d, y, m) {
              o(n, e, l);
              var b,
                x,
                w,
                C = function (t) {
                  if (t === d && T) return T;
                  if (!_ && t in O) return O[t];
                  switch (t) {
                    case 'keys':
                    case 'values':
                    case 'entries':
                      return function () {
                        return new n(this, t);
                      };
                  }
                  return function () {
                    return new n(this);
                  };
                },
                P = e + ' Iterator',
                S = !1,
                O = t.prototype,
                k = O[v] || O['@@iterator'] || (d && O[d]),
                T = (!_ && k) || C(d),
                j = ('Array' == e && O.entries) || k;
              if (
                (j &&
                  ((b = i(j.call(new t()))),
                  h !== Object.prototype &&
                    b.next &&
                    (p || i(b) === h || (a ? a(b, h) : 'function' != typeof b[v] && c(b, v, g)), s(b, P, !0, !0), p && (f[P] = g))),
                'values' == d &&
                  k &&
                  'values' !== k.name &&
                  ((S = !0),
                  (T = function () {
                    return k.call(this);
                  })),
                (p && !m) || O[v] === T || c(O, v, T),
                (f[e] = T),
                d)
              )
                if (((x = {values: C('values'), keys: y ? T : C('keys'), entries: C('entries')}), m))
                  for (w in x) (!_ && !S && w in O) || u(O, w, x[w]);
                else r({target: e, proto: !0, forced: _ || S}, x);
              return x;
            };
          },
          function (t, e, n) {
            'use strict';
            var r = {}.propertyIsEnumerable,
              o = Object.getOwnPropertyDescriptor,
              i = o && !r.call({1: 2}, 1);
            e.f = i
              ? function (t) {
                  var e = o(this, t);
                  return !!e && e.enumerable;
                }
              : r;
          },
          function (t, e, n) {
            var r = n(4),
              o = n(15),
              i = ''.split;
            t.exports = r(function () {
              return !Object('z').propertyIsEnumerable(0);
            })
              ? function (t) {
                  return 'String' == o(t) ? i.call(t, '') : Object(t);
                }
              : Object;
          },
          function (t, e, n) {
            var r = n(7),
              o = n(20),
              i = n(77).indexOf,
              a = n(27);
            t.exports = function (t, e) {
              var n,
                s = o(t),
                c = 0,
                u = [];
              for (n in s) !r(a, n) && r(s, n) && u.push(n);
              for (; e.length > c; ) r(s, (n = e[c++])) && (~i(u, n) || u.push(n));
              return u;
            };
          },
          function (t, e, n) {
            var r = n(28),
              o = Math.min;
            t.exports = function (t) {
              return t > 0 ? o(r(t), 9007199254740991) : 0;
            };
          },
          function (t, e) {
            e.f = Object.getOwnPropertySymbols;
          },
          function (t, e, n) {
            var r = n(4),
              o = /#|\.prototype\./,
              i = function (t, e) {
                var n = s[a(t)];
                return n == u || (n != c && ('function' == typeof e ? r(e) : !!e));
              },
              a = (i.normalize = function (t) {
                return String(t).replace(o, '.').toLowerCase();
              }),
              s = (i.data = {}),
              c = (i.NATIVE = 'N'),
              u = (i.POLYFILL = 'P');
            t.exports = i;
          },
          function (t, e, n) {
            'use strict';
            var r,
              o,
              i,
              a = n(32),
              s = n(3),
              c = n(7),
              u = n(1),
              l = n(13),
              p = u('iterator'),
              f = !1;
            [].keys && ('next' in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (r = o) : (f = !0)),
              null == r && (r = {}),
              l ||
                c(r, p) ||
                s(r, p, function () {
                  return this;
                }),
              (t.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: f});
          },
          function (t, e, n) {
            var r = n(9);
            t.exports = r('document', 'documentElement');
          },
          function (t, e, n) {
            var r = n(2),
              o = n(82);
            t.exports =
              Object.setPrototypeOf ||
              ('__proto__' in {}
                ? (function () {
                    var t,
                      e = !1,
                      n = {};
                    try {
                      (t = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set).call(n, []), (e = n instanceof Array);
                    } catch (t) {}
                    return function (n, i) {
                      return r(n), o(i), e ? t.call(n, i) : (n.__proto__ = i), n;
                    };
                  })()
                : void 0);
          },
          function (t, e, n) {
            var r = n(0);
            t.exports = r.Promise;
          },
          function (t, e, n) {
            var r = n(12);
            t.exports = function (t, e, n) {
              if ((r(t), void 0 === e)) return t;
              switch (n) {
                case 0:
                  return function () {
                    return t.call(e);
                  };
                case 1:
                  return function (n) {
                    return t.call(e, n);
                  };
                case 2:
                  return function (n, r) {
                    return t.call(e, n, r);
                  };
                case 3:
                  return function (n, r, o) {
                    return t.call(e, n, r, o);
                  };
              }
              return function () {
                return t.apply(e, arguments);
              };
            };
          },
          function (t, e, n) {
            var r = n(2),
              o = n(12),
              i = n(1)('species');
            t.exports = function (t, e) {
              var n,
                a = r(t).constructor;
              return void 0 === a || null == (n = r(a)[i]) ? e : o(n);
            };
          },
          function (t, e, n) {
            var r,
              o,
              i,
              a = n(0),
              s = n(4),
              c = n(15),
              u = n(54),
              l = n(51),
              p = n(25),
              f = n(37),
              d = a.location,
              h = a.setImmediate,
              _ = a.clearImmediate,
              v = a.process,
              g = a.MessageChannel,
              y = a.Dispatch,
              m = 0,
              b = {},
              x = function (t) {
                if (b.hasOwnProperty(t)) {
                  var e = b[t];
                  delete b[t], e();
                }
              },
              w = function (t) {
                return function () {
                  x(t);
                };
              },
              C = function (t) {
                x(t.data);
              },
              P = function (t) {
                a.postMessage(t + '', d.protocol + '//' + d.host);
              };
            (h && _) ||
              ((h = function (t) {
                for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
                return (
                  (b[++m] = function () {
                    ('function' == typeof t ? t : Function(t)).apply(void 0, e);
                  }),
                  r(m),
                  m
                );
              }),
              (_ = function (t) {
                delete b[t];
              }),
              'process' == c(v)
                ? (r = function (t) {
                    v.nextTick(w(t));
                  })
                : y && y.now
                ? (r = function (t) {
                    y.now(w(t));
                  })
                : g && !/(iphone|ipod|ipad).*applewebkit/i.test(f)
                ? ((i = (o = new g()).port2), (o.port1.onmessage = C), (r = u(i.postMessage, i, 1)))
                : !a.addEventListener || 'function' != typeof postMessage || a.importScripts || s(P)
                ? (r =
                    'onreadystatechange' in p('script')
                      ? function (t) {
                          l.appendChild(p('script')).onreadystatechange = function () {
                            l.removeChild(this), x(t);
                          };
                        }
                      : function (t) {
                          setTimeout(w(t), 0);
                        })
                : ((r = P), a.addEventListener('message', C, !1))),
              (t.exports = {set: h, clear: _});
          },
          function (t, e, n) {
            var r = n(2),
              o = n(8),
              i = n(17);
            t.exports = function (t, e) {
              if ((r(t), o(e) && e.constructor === t)) return e;
              var n = i.f(t);
              return (0, n.resolve)(e), n.promise;
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(12),
              i = n(17),
              a = n(23),
              s = n(22);
            r(
              {target: 'Promise', stat: !0},
              {
                allSettled: function (t) {
                  var e = this,
                    n = i.f(e),
                    r = n.resolve,
                    c = n.reject,
                    u = a(function () {
                      var n = o(e.resolve),
                        i = [],
                        a = 0,
                        c = 1;
                      s(t, function (t) {
                        var o = a++,
                          s = !1;
                        i.push(void 0),
                          c++,
                          n.call(e, t).then(
                            function (t) {
                              s || ((s = !0), (i[o] = {status: 'fulfilled', value: t}), --c || r(i));
                            },
                            function (t) {
                              s || ((s = !0), (i[o] = {status: 'rejected', reason: t}), --c || r(i));
                            }
                          );
                      }),
                        --c || r(i);
                    });
                  return u.error && c(u.value), n.promise;
                }
              }
            );
          },
          function (t, e, n) {
            'use strict';
            function r(t) {
              var e = t.kalturaPlayer,
                n = t.loggerName,
                r = e ? e.getLogger : KalturaPlayer.ui.utils.getLogger;
              if (!r) return null;
              var o = r(n);
              return (function (t) {
                return t && 'setLevel' in t;
              })(o)
                ? o
                : null;
            }
            Object.defineProperty(e, '__esModule', {value: !0});
            var o = (function () {
              function t() {}
              return (
                (t.prototype.debug = function (t, e) {}),
                (t.prototype.info = function (t, e) {}),
                (t.prototype.trace = function (t, e) {}),
                (t.prototype.warn = function (t, e) {}),
                (t.prototype.error = function (t, e) {}),
                t
              );
            })();
            e.NoopLogger = o;
            var i = r({}),
              a = new o(),
              s = (function () {
                function t(t, e) {
                  (this._logger = t), (this._defaultOptions = e);
                }
                return (
                  (t.prototype._log = function (t, e, n, r) {
                    if (this._logger.enabledFor(e)) {
                      var o = r.class || this._defaultOptions.class || '_',
                        i = this._defaultOptions.module || '',
                        a = r.method ? '.' + r.method + '()' : '',
                        s =
                          '[' +
                          i +
                          '::' +
                          o +
                          '(' +
                          (this._defaultOptions.context ? "'" + this._defaultOptions.context + "'" : '') +
                          ')' +
                          a +
                          '] ' +
                          n;
                      r.data ? this._logger[t](s, r.data) : this._logger[t](s);
                    }
                  }),
                  (t.prototype.debug = function (t, e) {
                    i && this._log('debug', i.DEBUG, t, e);
                  }),
                  (t.prototype.info = function (t, e) {
                    i && this._log('info', i.INFO, t, e);
                  }),
                  (t.prototype.trace = function (t, e) {
                    i && this._log('trace', i.TRACE, t, e);
                  }),
                  (t.prototype.warn = function (t, e) {
                    i && this._log('warn', i.WARN, t, e);
                  }),
                  (t.prototype.error = function (t, e) {
                    i && this._log('error', i.ERROR, t, e);
                  }),
                  t
                );
              })();
            (e.ProxyLogger = s),
              (e.getContribLogger = function (t) {
                void 0 === t && (t = {});
                var e = t.kalturaPlayer,
                  n = r({kalturaPlayer: e, loggerName: (e ? e._playerId : 'global') + '_contrib'});
                return n ? new s(n, t) : a;
              }),
              (e.enableLogIfNeeded = function () {
                try {
                  if (-1 !== document.URL.indexOf('debugKalturaPlayer')) {
                    var t = r({});
                    if (!t) return;
                    t.setLevel(t.TRACE);
                  }
                } catch (t) {}
              });
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = n(113),
              o = n(115),
              i = (function () {
                function t() {}
                return (
                  (t.uuidV1 = function () {
                    return r();
                  }),
                  (t.uuidV5 = function (t, e) {
                    return o(t, e);
                  }),
                  (t.numberedUuidV1 = function () {
                    for (var e = t.uuidV1(), n = '', r = 0; r < e.length; r++) {
                      var o = e.charAt(r);
                      n += Number.isNaN(+o) ? o.charCodeAt(0) : o;
                    }
                    return n;
                  }),
                  t
                );
              })();
            e.UUID = i;
          },
          function (t, e) {
            for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
            t.exports = function (t, e) {
              var r = e || 0,
                o = n;
              return [
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                '-',
                o[t[r++]],
                o[t[r++]],
                '-',
                o[t[r++]],
                o[t[r++]],
                '-',
                o[t[r++]],
                o[t[r++]],
                '-',
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                o[t[r++]],
                o[t[r++]]
              ].join('');
            };
          },
          function (t, e, n) {
            'use strict';
            var r =
              (this && this.__assign) ||
              function () {
                return (r =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t;
                  }).apply(this, arguments);
              };
            Object.defineProperty(e, '__esModule', {value: !0});
            var o = (function () {
              function t() {}
              return (
                (t.copyDeep = function (e) {
                  var n;
                  return (
                    Array.isArray(e)
                      ? (n = e.length > 0 ? e.slice(0) : []).forEach(function (e, r) {
                          (('object' == typeof e && e !== {}) || (Array.isArray(e) && e.length > 0)) && (n[r] = t.copyDeep(e));
                        })
                      : 'object' == typeof e
                      ? ((n = Object.assign({}, e)),
                        Object.keys(n).forEach(function (e) {
                          (('object' == typeof n[e] && n[e] !== {}) || (Array.isArray(n[e]) && n[e].length > 0)) && (n[e] = t.copyDeep(n[e]));
                        }))
                      : (n = e),
                    n
                  );
                }),
                (t.isObject = function (t) {
                  return t && 'object' == typeof t && !Array.isArray(t);
                }),
                (t.mergeDeep = function (e, n, r) {
                  var o, i;
                  if (!n.length) return e;
                  var a = (r ? r.explicitMerge : null) || [],
                    s = n.shift();
                  if (t.isObject(e) && t.isObject(s))
                    for (var c in s)
                      t.isObject(s[c])
                        ? (e[c] || Object.assign(e, (((o = {})[c] = {}), o)),
                          -1 !== a.indexOf(c) ? (e[c] = t.explicitFlatMerge(e[c], s[c])) : t.mergeDeep(e[c], [s[c]], r))
                        : Object.assign(e, (((i = {})[c] = s[c]), i));
                  return t.mergeDeep(e, n, r);
                }),
                (t.mergeDefaults = function (e, n, r) {
                  return t.mergeDeep({}, [n, e], r);
                }),
                (t.explicitFlatMerge = function (t, e) {
                  var n = r({}, t);
                  return (
                    Object.keys(e).forEach(function (t) {
                      null === e[t] || 0 === Object.keys(e[t]).length ? delete n[t] : (n[t] = e[t]);
                    }),
                    n
                  );
                }),
                (t.get = function (t, e, n) {
                  for (
                    var r = (function (t) {
                        var e = [];
                        return (
                          t.split('.').forEach(function (t) {
                            t.split(/\[([^}]+)\]/g).forEach(function (t) {
                              t.length > 0 && e.push(t);
                            });
                          }),
                          e
                        );
                      })(e),
                      o = t,
                      i = 0;
                    i < r.length;
                    i++
                  ) {
                    if (!o[r[i]]) return n;
                    o = o[r[i]];
                  }
                  return o;
                }),
                t
              );
            })();
            e.ObjectUtils = o;
          },
          function (t, e, n) {
            'use strict';
            function r(t) {
              for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
            }
            Object.defineProperty(e, '__esModule', {value: !0}),
              n(64),
              n(103),
              n(107),
              (Number.isNaN =
                Number.isNaN ||
                function (t) {
                  return null !== t && (t != t || +t != t);
                }),
              r(n(110)),
              r(n(111)),
              r(n(112)),
              r(n(118)),
              r(n(59)),
              r(n(60)),
              r(n(119)),
              r(n(62)),
              r(n(120)),
              r(n(121));
          },
          function (t, e, n) {
            (t.exports = n(65)), n(99), n(100), n(101), n(102);
          },
          function (t, e, n) {
            n(66), n(72), n(83), n(87), n(58), n(98);
            var r = n(21);
            t.exports = r.Promise;
          },
          function (t, e, n) {
            var r = n(10),
              o = n(70),
              i = Object.prototype;
            o !== i.toString && r(i, 'toString', o, {unsafe: !0});
          },
          function (t, e) {
            var n;
            n = (function () {
              return this;
            })();
            try {
              n = n || new Function('return this')();
            } catch (t) {
              'object' == typeof window && (n = window);
            }
            t.exports = n;
          },
          function (t, e, n) {
            var r = n(0),
              o = n(24),
              i = r['__core-js_shared__'] || o('__core-js_shared__', {});
            t.exports = i;
          },
          function (t, e, n) {
            var r = n(0),
              o = n(40),
              i = r.WeakMap;
            t.exports = 'function' == typeof i && /native code/.test(o.call(i));
          },
          function (t, e, n) {
            'use strict';
            var r = n(42),
              o = {};
            (o[n(1)('toStringTag')] = 'z'),
              (t.exports =
                '[object z]' !== String(o)
                  ? function () {
                      return '[object ' + r(this) + ']';
                    }
                  : o.toString);
          },
          function (t, e, n) {
            var r = n(4);
            t.exports =
              !!Object.getOwnPropertySymbols &&
              !r(function () {
                return !String(Symbol());
              });
          },
          function (t, e, n) {
            'use strict';
            var r = n(73).charAt,
              o = n(14),
              i = n(43),
              a = o.set,
              s = o.getterFor('String Iterator');
            i(
              String,
              'String',
              function (t) {
                a(this, {type: 'String Iterator', string: String(t), index: 0});
              },
              function () {
                var t,
                  e = s(this),
                  n = e.string,
                  o = e.index;
                return o >= n.length ? {value: void 0, done: !0} : ((t = r(n, o)), (e.index += t.length), {value: t, done: !1});
              }
            );
          },
          function (t, e, n) {
            var r = n(28),
              o = n(29),
              i = function (t) {
                return function (e, n) {
                  var i,
                    a,
                    s = String(o(e)),
                    c = r(n),
                    u = s.length;
                  return c < 0 || c >= u
                    ? t
                      ? ''
                      : void 0
                    : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343
                    ? t
                      ? s.charAt(c)
                      : i
                    : t
                    ? s.slice(c, c + 2)
                    : a - 56320 + ((i - 55296) << 10) + 65536;
                };
              };
            t.exports = {codeAt: i(!1), charAt: i(!0)};
          },
          function (t, e, n) {
            var r = n(7),
              o = n(75),
              i = n(30),
              a = n(11);
            t.exports = function (t, e) {
              for (var n = o(e), s = a.f, c = i.f, u = 0; u < n.length; u++) {
                var l = n[u];
                r(t, l) || s(t, l, c(e, l));
              }
            };
          },
          function (t, e, n) {
            var r = n(9),
              o = n(76),
              i = n(48),
              a = n(2);
            t.exports =
              r('Reflect', 'ownKeys') ||
              function (t) {
                var e = o.f(a(t)),
                  n = i.f;
                return n ? e.concat(n(t)) : e;
              };
          },
          function (t, e, n) {
            var r = n(46),
              o = n(31).concat('length', 'prototype');
            e.f =
              Object.getOwnPropertyNames ||
              function (t) {
                return r(t, o);
              };
          },
          function (t, e, n) {
            var r = n(20),
              o = n(47),
              i = n(78),
              a = function (t) {
                return function (e, n, a) {
                  var s,
                    c = r(e),
                    u = o(c.length),
                    l = i(a, u);
                  if (t && n != n) {
                    for (; u > l; ) if ((s = c[l++]) != s) return !0;
                  } else for (; u > l; l++) if ((t || l in c) && c[l] === n) return t || l || 0;
                  return !t && -1;
                };
              };
            t.exports = {includes: a(!0), indexOf: a(!1)};
          },
          function (t, e, n) {
            var r = n(28),
              o = Math.max,
              i = Math.min;
            t.exports = function (t, e) {
              var n = r(t);
              return n < 0 ? o(n + e, 0) : i(n, e);
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(50).IteratorPrototype,
              o = n(34),
              i = n(19),
              a = n(36),
              s = n(16),
              c = function () {
                return this;
              };
            t.exports = function (t, e, n) {
              var u = e + ' Iterator';
              return (t.prototype = o(r, {next: i(1, n)})), a(t, u, !1, !0), (s[u] = c), t;
            };
          },
          function (t, e, n) {
            var r = n(4);
            t.exports = !r(function () {
              function t() {}
              return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
            });
          },
          function (t, e, n) {
            var r = n(6),
              o = n(11),
              i = n(2),
              a = n(35);
            t.exports = r
              ? Object.defineProperties
              : function (t, e) {
                  i(t);
                  for (var n, r = a(e), s = r.length, c = 0; s > c; ) o.f(t, (n = r[c++]), e[n]);
                  return t;
                };
          },
          function (t, e, n) {
            var r = n(8);
            t.exports = function (t) {
              if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + ' as a prototype');
              return t;
            };
          },
          function (t, e, n) {
            var r = n(0),
              o = n(84),
              i = n(85),
              a = n(3),
              s = n(1),
              c = s('iterator'),
              u = s('toStringTag'),
              l = i.values;
            for (var p in o) {
              var f = r[p],
                d = f && f.prototype;
              if (d) {
                if (d[c] !== l)
                  try {
                    a(d, c, l);
                  } catch (t) {
                    d[c] = l;
                  }
                if ((d[u] || a(d, u, p), o[p]))
                  for (var h in i)
                    if (d[h] !== i[h])
                      try {
                        a(d, h, i[h]);
                      } catch (t) {
                        d[h] = i[h];
                      }
              }
            }
          },
          function (t, e) {
            t.exports = {
              CSSRuleList: 0,
              CSSStyleDeclaration: 0,
              CSSValueList: 0,
              ClientRectList: 0,
              DOMRectList: 0,
              DOMStringList: 0,
              DOMTokenList: 1,
              DataTransferItemList: 0,
              FileList: 0,
              HTMLAllCollection: 0,
              HTMLCollection: 0,
              HTMLFormElement: 0,
              HTMLSelectElement: 0,
              MediaList: 0,
              MimeTypeArray: 0,
              NamedNodeMap: 0,
              NodeList: 1,
              PaintRequestList: 0,
              Plugin: 0,
              PluginArray: 0,
              SVGLengthList: 0,
              SVGNumberList: 0,
              SVGPathSegList: 0,
              SVGPointList: 0,
              SVGStringList: 0,
              SVGTransformList: 0,
              SourceBufferList: 0,
              StyleSheetList: 0,
              TextTrackCueList: 0,
              TextTrackList: 0,
              TouchList: 0
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(20),
              o = n(86),
              i = n(16),
              a = n(14),
              s = n(43),
              c = a.set,
              u = a.getterFor('Array Iterator');
            (t.exports = s(
              Array,
              'Array',
              function (t, e) {
                c(this, {type: 'Array Iterator', target: r(t), index: 0, kind: e});
              },
              function () {
                var t = u(this),
                  e = t.target,
                  n = t.kind,
                  r = t.index++;
                return !e || r >= e.length
                  ? ((t.target = void 0), {value: void 0, done: !0})
                  : 'keys' == n
                  ? {value: r, done: !1}
                  : 'values' == n
                  ? {value: e[r], done: !1}
                  : {value: [r, e[r]], done: !1};
              },
              'values'
            )),
              (i.Arguments = i.Array),
              o('keys'),
              o('values'),
              o('entries');
          },
          function (t, e, n) {
            var r = n(1),
              o = n(34),
              i = n(3),
              a = r('unscopables'),
              s = Array.prototype;
            null == s[a] && i(s, a, o(null)),
              (t.exports = function (t) {
                s[a][t] = !0;
              });
          },
          function (t, e, n) {
            'use strict';
            var r,
              o,
              i,
              a,
              s = n(5),
              c = n(13),
              u = n(0),
              l = n(9),
              p = n(53),
              f = n(10),
              d = n(88),
              h = n(36),
              _ = n(89),
              v = n(8),
              g = n(12),
              y = n(90),
              m = n(15),
              b = n(22),
              x = n(94),
              w = n(55),
              C = n(56).set,
              P = n(95),
              S = n(57),
              O = n(96),
              k = n(17),
              T = n(23),
              j = n(14),
              A = n(49),
              E = n(1),
              M = n(97),
              I = E('species'),
              L = 'Promise',
              R = j.get,
              B = j.set,
              D = j.getterFor(L),
              F = p,
              U = u.TypeError,
              N = u.document,
              z = u.process,
              V = l('fetch'),
              K = k.f,
              H = K,
              W = 'process' == m(z),
              q = !!(N && N.createEvent && u.dispatchEvent),
              G = A(L, function () {
                if (66 === M) return !0;
                if (!W && 'function' != typeof PromiseRejectionEvent) return !0;
                if (c && !F.prototype.finally) return !0;
                if (M >= 51 && /native code/.test(F)) return !1;
                var t = F.resolve(1),
                  e = function (t) {
                    t(
                      function () {},
                      function () {}
                    );
                  };
                return ((t.constructor = {})[I] = e), !(t.then(function () {}) instanceof e);
              }),
              Y =
                G ||
                !x(function (t) {
                  F.all(t).catch(function () {});
                }),
              J = function (t) {
                var e;
                return !(!v(t) || 'function' != typeof (e = t.then)) && e;
              },
              $ = function (t, e, n) {
                if (!e.notified) {
                  e.notified = !0;
                  var r = e.reactions;
                  P(function () {
                    for (var o = e.value, i = 1 == e.state, a = 0; r.length > a; ) {
                      var s,
                        c,
                        u,
                        l = r[a++],
                        p = i ? l.ok : l.fail,
                        f = l.resolve,
                        d = l.reject,
                        h = l.domain;
                      try {
                        p
                          ? (i || (2 === e.rejection && tt(t, e), (e.rejection = 1)),
                            !0 === p ? (s = o) : (h && h.enter(), (s = p(o)), h && (h.exit(), (u = !0))),
                            s === l.promise ? d(U('Promise-chain cycle')) : (c = J(s)) ? c.call(s, f, d) : f(s))
                          : d(o);
                      } catch (t) {
                        h && !u && h.exit(), d(t);
                      }
                    }
                    (e.reactions = []), (e.notified = !1), n && !e.rejection && X(t, e);
                  });
                }
              },
              Z = function (t, e, n) {
                var r, o;
                q
                  ? (((r = N.createEvent('Event')).promise = e), (r.reason = n), r.initEvent(t, !1, !0), u.dispatchEvent(r))
                  : (r = {promise: e, reason: n}),
                  (o = u['on' + t]) ? o(r) : 'unhandledrejection' === t && O('Unhandled promise rejection', n);
              },
              X = function (t, e) {
                C.call(u, function () {
                  var n,
                    r = e.value;
                  if (
                    Q(e) &&
                    ((n = T(function () {
                      W ? z.emit('unhandledRejection', r, t) : Z('unhandledrejection', t, r);
                    })),
                    (e.rejection = W || Q(e) ? 2 : 1),
                    n.error)
                  )
                    throw n.value;
                });
              },
              Q = function (t) {
                return 1 !== t.rejection && !t.parent;
              },
              tt = function (t, e) {
                C.call(u, function () {
                  W ? z.emit('rejectionHandled', t) : Z('rejectionhandled', t, e.value);
                });
              },
              et = function (t, e, n, r) {
                return function (o) {
                  t(e, n, o, r);
                };
              },
              nt = function (t, e, n, r) {
                e.done || ((e.done = !0), r && (e = r), (e.value = n), (e.state = 2), $(t, e, !0));
              },
              rt = function (t, e, n, r) {
                if (!e.done) {
                  (e.done = !0), r && (e = r);
                  try {
                    if (t === n) throw U("Promise can't be resolved itself");
                    var o = J(n);
                    o
                      ? P(function () {
                          var r = {done: !1};
                          try {
                            o.call(n, et(rt, t, r, e), et(nt, t, r, e));
                          } catch (n) {
                            nt(t, r, n, e);
                          }
                        })
                      : ((e.value = n), (e.state = 1), $(t, e, !1));
                  } catch (n) {
                    nt(t, {done: !1}, n, e);
                  }
                }
              };
            G &&
              ((F = function (t) {
                y(this, F, L), g(t), r.call(this);
                var e = R(this);
                try {
                  t(et(rt, this, e), et(nt, this, e));
                } catch (t) {
                  nt(this, e, t);
                }
              }),
              ((r = function (t) {
                B(this, {type: L, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0});
              }).prototype = d(F.prototype, {
                then: function (t, e) {
                  var n = D(this),
                    r = K(w(this, F));
                  return (
                    (r.ok = 'function' != typeof t || t),
                    (r.fail = 'function' == typeof e && e),
                    (r.domain = W ? z.domain : void 0),
                    (n.parent = !0),
                    n.reactions.push(r),
                    0 != n.state && $(this, n, !1),
                    r.promise
                  );
                },
                catch: function (t) {
                  return this.then(void 0, t);
                }
              })),
              (o = function () {
                var t = new r(),
                  e = R(t);
                (this.promise = t), (this.resolve = et(rt, t, e)), (this.reject = et(nt, t, e));
              }),
              (k.f = K =
                function (t) {
                  return t === F || t === i ? new o(t) : H(t);
                }),
              c ||
                'function' != typeof p ||
                ((a = p.prototype.then),
                f(
                  p.prototype,
                  'then',
                  function (t, e) {
                    var n = this;
                    return new F(function (t, e) {
                      a.call(n, t, e);
                    }).then(t, e);
                  },
                  {unsafe: !0}
                ),
                'function' == typeof V &&
                  s(
                    {global: !0, enumerable: !0, forced: !0},
                    {
                      fetch: function (t) {
                        return S(F, V.apply(u, arguments));
                      }
                    }
                  ))),
              s({global: !0, wrap: !0, forced: G}, {Promise: F}),
              h(F, L, !1, !0),
              _(L),
              (i = l(L)),
              s(
                {target: L, stat: !0, forced: G},
                {
                  reject: function (t) {
                    var e = K(this);
                    return e.reject.call(void 0, t), e.promise;
                  }
                }
              ),
              s(
                {target: L, stat: !0, forced: c || G},
                {
                  resolve: function (t) {
                    return S(c && this === i ? F : this, t);
                  }
                }
              ),
              s(
                {target: L, stat: !0, forced: Y},
                {
                  all: function (t) {
                    var e = this,
                      n = K(e),
                      r = n.resolve,
                      o = n.reject,
                      i = T(function () {
                        var n = g(e.resolve),
                          i = [],
                          a = 0,
                          s = 1;
                        b(t, function (t) {
                          var c = a++,
                            u = !1;
                          i.push(void 0),
                            s++,
                            n.call(e, t).then(function (t) {
                              u || ((u = !0), (i[c] = t), --s || r(i));
                            }, o);
                        }),
                          --s || r(i);
                      });
                    return i.error && o(i.value), n.promise;
                  },
                  race: function (t) {
                    var e = this,
                      n = K(e),
                      r = n.reject,
                      o = T(function () {
                        var o = g(e.resolve);
                        b(t, function (t) {
                          o.call(e, t).then(n.resolve, r);
                        });
                      });
                    return o.error && r(o.value), n.promise;
                  }
                }
              );
          },
          function (t, e, n) {
            var r = n(10);
            t.exports = function (t, e, n) {
              for (var o in e) r(t, o, e[o], n);
              return t;
            };
          },
          function (t, e, n) {
            'use strict';
            var r = n(9),
              o = n(11),
              i = n(1),
              a = n(6),
              s = i('species');
            t.exports = function (t) {
              var e = r(t),
                n = o.f;
              a &&
                e &&
                !e[s] &&
                n(e, s, {
                  configurable: !0,
                  get: function () {
                    return this;
                  }
                });
            };
          },
          function (t, e) {
            t.exports = function (t, e, n) {
              if (!(t instanceof e)) throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
              return t;
            };
          },
          function (t, e, n) {
            var r = n(1),
              o = n(16),
              i = r('iterator'),
              a = Array.prototype;
            t.exports = function (t) {
              return void 0 !== t && (o.Array === t || a[i] === t);
            };
          },
          function (t, e, n) {
            var r = n(42),
              o = n(16),
              i = n(1)('iterator');
            t.exports = function (t) {
              if (null != t) return t[i] || t['@@iterator'] || o[r(t)];
            };
          },
          function (t, e, n) {
            var r = n(2);
            t.exports = function (t, e, n, o) {
              try {
                return o ? e(r(n)[0], n[1]) : e(n);
              } catch (e) {
                var i = t.return;
                throw (void 0 !== i && r(i.call(t)), e);
              }
            };
          },
          function (t, e, n) {
            var r = n(1)('iterator'),
              o = !1;
            try {
              var i = 0,
                a = {
                  next: function () {
                    return {done: !!i++};
                  },
                  return: function () {
                    o = !0;
                  }
                };
              (a[r] = function () {
                return this;
              }),
                Array.from(a, function () {
                  throw 2;
                });
            } catch (t) {}
            t.exports = function (t, e) {
              if (!e && !o) return !1;
              var n = !1;
              try {
                var i = {};
                (i[r] = function () {
                  return {
                    next: function () {
                      return {done: (n = !0)};
                    }
                  };
                }),
                  t(i);
              } catch (t) {}
              return n;
            };
          },
          function (t, e, n) {
            var r,
              o,
              i,
              a,
              s,
              c,
              u,
              l,
              p = n(0),
              f = n(30).f,
              d = n(15),
              h = n(56).set,
              _ = n(37),
              v = p.MutationObserver || p.WebKitMutationObserver,
              g = p.process,
              y = p.Promise,
              m = 'process' == d(g),
              b = f(p, 'queueMicrotask'),
              x = b && b.value;
            x ||
              ((r = function () {
                var t, e;
                for (m && (t = g.domain) && t.exit(); o; ) {
                  (e = o.fn), (o = o.next);
                  try {
                    e();
                  } catch (t) {
                    throw (o ? a() : (i = void 0), t);
                  }
                }
                (i = void 0), t && t.enter();
              }),
              m
                ? (a = function () {
                    g.nextTick(r);
                  })
                : v && !/(iphone|ipod|ipad).*applewebkit/i.test(_)
                ? ((s = !0),
                  (c = document.createTextNode('')),
                  new v(r).observe(c, {characterData: !0}),
                  (a = function () {
                    c.data = s = !s;
                  }))
                : y && y.resolve
                ? ((u = y.resolve(void 0)),
                  (l = u.then),
                  (a = function () {
                    l.call(u, r);
                  }))
                : (a = function () {
                    h.call(p, r);
                  })),
              (t.exports =
                x ||
                function (t) {
                  var e = {fn: t, next: void 0};
                  i && (i.next = e), o || ((o = e), a()), (i = e);
                });
          },
          function (t, e, n) {
            var r = n(0);
            t.exports = function (t, e) {
              var n = r.console;
              n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
            };
          },
          function (t, e, n) {
            var r,
              o,
              i = n(0),
              a = n(37),
              s = i.process,
              c = s && s.versions,
              u = c && c.v8;
            u ? (o = (r = u.split('.'))[0] + r[1]) : a && (r = a.match(/Chrome\/(\d+)/)) && (o = r[1]), (t.exports = o && +o);
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(13),
              i = n(53),
              a = n(9),
              s = n(55),
              c = n(57),
              u = n(10);
            r(
              {target: 'Promise', proto: !0, real: !0},
              {
                finally: function (t) {
                  var e = s(this, a('Promise')),
                    n = 'function' == typeof t;
                  return this.then(
                    n
                      ? function (n) {
                          return c(e, t()).then(function () {
                            return n;
                          });
                        }
                      : t,
                    n
                      ? function (n) {
                          return c(e, t()).then(function () {
                            throw n;
                          });
                        }
                      : t
                  );
                }
              }
            ),
              o || 'function' != typeof i || i.prototype.finally || u(i.prototype, 'finally', a('Promise').prototype.finally);
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(6),
              i = n(32),
              a = n(52),
              s = n(34),
              c = n(11),
              u = n(19),
              l = n(22),
              p = n(3),
              f = n(2),
              d = n(14),
              h = d.set,
              _ = d.getterFor('AggregateError'),
              v = function (t, e) {
                var n = this;
                if (!(n instanceof v)) return new v(t, e);
                a && (n = a(new Error(e), i(n)));
                var r = [];
                return l(t, r.push, r), o ? h(n, {errors: r, type: 'AggregateError'}) : (n.errors = r), void 0 !== e && p(n, 'message', String(e)), n;
              };
            (v.prototype = s(Error.prototype, {
              constructor: u(5, v),
              message: u(5, ''),
              name: u(5, 'AggregateError'),
              toString: u(5, function () {
                var t = f(this).name;
                t = void 0 === t ? 'AggregateError' : String(t);
                var e = this.message;
                return t + ': ' + (void 0 === e ? '' : String(e));
              })
            })),
              o &&
                c.f(v.prototype, 'errors', {
                  get: function () {
                    return _(this).errors;
                  },
                  configurable: !0
                }),
              r({global: !0}, {AggregateError: v});
          },
          function (t, e, n) {
            n(58);
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(17),
              i = n(23);
            r(
              {target: 'Promise', stat: !0},
              {
                try: function (t) {
                  var e = o.f(this),
                    n = i(t);
                  return (n.error ? e.reject : e.resolve)(n.value), e.promise;
                }
              }
            );
          },
          function (t, e, n) {
            'use strict';
            var r = n(5),
              o = n(12),
              i = n(9),
              a = n(17),
              s = n(23),
              c = n(22);
            r(
              {target: 'Promise', stat: !0},
              {
                any: function (t) {
                  var e = this,
                    n = a.f(e),
                    r = n.resolve,
                    u = n.reject,
                    l = s(function () {
                      var n = o(e.resolve),
                        a = [],
                        s = 0,
                        l = 1,
                        p = !1;
                      c(t, function (t) {
                        var o = s++,
                          c = !1;
                        a.push(void 0),
                          l++,
                          n.call(e, t).then(
                            function (t) {
                              c || p || ((p = !0), r(t));
                            },
                            function (t) {
                              c || p || ((c = !0), (a[o] = t), --l || u(new (i('AggregateError'))(a, 'No one promise resolved')));
                            }
                          );
                      }),
                        --l || u(new (i('AggregateError'))(a, 'No one promise resolved'));
                    });
                  return l.error && u(l.value), n.promise;
                }
              }
            );
          },
          function (t, e, n) {
            t.exports = n(104);
          },
          function (t, e, n) {
            n(105);
            var r = n(21);
            t.exports = r.Object.assign;
          },
          function (t, e, n) {
            var r = n(5),
              o = n(106);
            r({target: 'Object', stat: !0, forced: Object.assign !== o}, {assign: o});
          },
          function (t, e, n) {
            'use strict';
            var r = n(6),
              o = n(4),
              i = n(35),
              a = n(48),
              s = n(44),
              c = n(33),
              u = n(45),
              l = Object.assign;
            t.exports =
              !l ||
              o(function () {
                var t = {},
                  e = {},
                  n = Symbol();
                return (
                  (t[n] = 7),
                  'abcdefghijklmnopqrst'.split('').forEach(function (t) {
                    e[t] = t;
                  }),
                  7 != l({}, t)[n] || 'abcdefghijklmnopqrst' != i(l({}, e)).join('')
                );
              })
                ? function (t, e) {
                    for (var n = c(t), o = arguments.length, l = 1, p = a.f, f = s.f; o > l; )
                      for (var d, h = u(arguments[l++]), _ = p ? i(h).concat(p(h)) : i(h), v = _.length, g = 0; v > g; )
                        (d = _[g++]), (r && !f.call(h, d)) || (n[d] = h[d]);
                    return n;
                  }
                : l;
          },
          function (t, e, n) {
            t.exports = n(108);
          },
          function (t, e, n) {
            n(109);
            var r = n(21);
            t.exports = r.Object.keys;
          },
          function (t, e, n) {
            var r = n(5),
              o = n(33),
              i = n(35);
            r(
              {
                target: 'Object',
                stat: !0,
                forced: n(4)(function () {
                  i(1);
                })
              },
              {
                keys: function (t) {
                  return i(o(t));
                }
              }
            );
          },
          function (t, e, n) {
            'use strict';
            var r =
              (this && this.__spreadArrays) ||
              function () {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                var r = Array(t),
                  o = 0;
                for (e = 0; e < n; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                return r;
              };
            Object.defineProperty(e, '__esModule', {value: !0});
            var o,
              i = n(59);
            !(function (t) {
              (t.Show = 'show'), (t.Hide = 'hide');
            })(o || (o = {}));
            var a = i.getContribLogger({module: 'contrib-common', class: 'CuepointEngine'}),
              s = (function () {
                function t(t, e) {
                  (this.isFirstTime = !0),
                    (this.enabled = !0),
                    (this.lastHandledTime = null),
                    (this.lastHandledTimeIndex = null),
                    (this.nextTimeToHandle = null),
                    (this.cuepointChanges = []),
                    a.debug('executed', {method: 'ctor'}),
                    (this.reasonableSeekThreshold = Math.max(2e3, (e && e.reasonableSeekThreshold) || 0)),
                    (this._cuepoints = t),
                    this.prepareCuepoint();
                }
                return (
                  Object.defineProperty(t.prototype, 'cuepoints', {
                    get: function () {
                      return r(this._cuepoints);
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.getSnapshot = function (t) {
                    var e = this.findClosestLastIndexByTime(t);
                    return (
                      a.debug('create snapshot based on time ' + t, {method: 'getSnapshot', data: {timeIndex: e}}), this.createCuepointSnapshot(e)
                    );
                  }),
                  (t.prototype.updateTime = function (t, e, n) {
                    void 0 === e && (e = !1);
                    var r = this.isFirstTime,
                      o = this.lastHandledTime,
                      i = this.nextTimeToHandle;
                    if (0 === this.cuepointChanges.length)
                      return (
                        r && (a.info('cuepoint list empty. will always return empty snapshot', {method: 'updateTime'}), (this.isFirstTime = !1)),
                        {snapshot: []}
                      );
                    var s = !r && null !== o && null !== i && (o > t || t - i > this.reasonableSeekThreshold),
                      c =
                        r ||
                        (null !== this.lastHandledTime && this.lastHandledTime > t) ||
                        (null != this.nextTimeToHandle && t >= this.nextTimeToHandle),
                      u = this.findClosestLastIndexByTime(t),
                      l = u < 0 ? 0 : this.cuepointChanges[u].time;
                    if (!c) return e ? {snapshot: this.createCuepointSnapshot(u, n)} : {delta: this.createEmptyDelta()};
                    if (
                      (a.debug('has changes to handle. check if need to return snapshot instead of delta based on provided new time', {
                        method: 'updateTime',
                        data: {currentTime: t, closestChangeIndex: u, closestChangeTime: l, lastHandledTime: o, nextTimeToHandle: i, isFirstTime: r}
                      }),
                      r || e || s)
                    ) {
                      a.debug("some conditions doesn't allow returning delta, return snapshot instead", {
                        method: 'updateTime',
                        data: {isFirstTime: r, userSeeked: s, forceSnapshot: e}
                      });
                      var p = this.createCuepointSnapshot(u, n);
                      return this.updateInternals(l, u), {snapshot: p};
                    }
                    var f = this.createCuepointDelta(u, n);
                    return this.updateInternals(l, u), {delta: f};
                  }),
                  (t.prototype.getCurrentCuepointSnapshot = function () {
                    return this.lastHandledTimeIndex ? this.createCuepointSnapshot(this.lastHandledTimeIndex) : [];
                  }),
                  (t.prototype.createCuepointSnapshot = function (t, e) {
                    if (!this.enabled || t < 0 || !this.cuepointChanges || 0 === this.cuepointChanges.length)
                      return (
                        a.debug('resulted with empty snapshot', {
                          method: 'createCuepointSnapshot',
                          data: {targetIndex: t, enabled: this.enabled, cuepointCount: (this.cuepointChanges || []).length}
                        }),
                        []
                      );
                    for (var n = [], r = 0; r <= t; r++) {
                      var i = this.cuepointChanges[r],
                        s = n.indexOf(i.cuePoint);
                      i.type === o.Show ? -1 === s && n.push(i.cuePoint) : -1 !== s && n.splice(s, 1);
                    }
                    return a.debug('resulted snapshot', {method: 'createCuepointSnapshot', data: {snapshot: n}}), e && (n = n.filter(e)), n;
                  }),
                  (t.prototype.createCuepointDelta = function (t, e) {
                    if (!this.enabled || !this.cuepointChanges || 0 === this.cuepointChanges.length)
                      return (
                        a.debug('resulted with empty delta', {
                          method: 'createCuepointDelta',
                          data: {enabled: this.enabled, cuepointCount: (this.cuepointChanges || []).length}
                        }),
                        this.createEmptyDelta()
                      );
                    var n = this.lastHandledTimeIndex;
                    if (null === n)
                      return a.debug('invalid internal state. resulted with empty delta', {method: 'createCuepointDelta'}), this.createEmptyDelta();
                    var r = [],
                      i = [];
                    a.info('find cuepoint that were added or removed', {method: 'createCuepointDelta'});
                    for (var s = n + 1; s <= t; s++) {
                      var c = this.cuepointChanges[s],
                        u = r.indexOf(c.cuePoint);
                      c.type === o.Show
                        ? -1 === u && r.push(c.cuePoint)
                        : -1 !== u
                        ? (a.info(
                            'cuepoint was marked with type ' + c.type + ' at ' + c.time + ". remove from new cuepoint list as it wasn't visible yet",
                            {method: 'createCuepointDelta', data: {cuepoint: c.cuePoint}}
                          ),
                          r.splice(u, 1))
                        : -1 === i.indexOf(c.cuePoint) &&
                          (a.info('cuepoint was marked with type ' + c.type + ' at ' + c.time + '. add to removed cuepoint list', {
                            method: 'createCuepointDelta',
                            data: {cuepoint: c.cuePoint}
                          }),
                          i.push(c.cuePoint));
                    }
                    return (
                      a.debug('resulted delta', {method: 'createCuepointDelta', data: {newCuepoint: r, removedCuepoint: i}}),
                      e && ((r = r.filter(e)), (i = i.filter(e))),
                      {show: r, hide: i}
                    );
                  }),
                  (t.prototype.updateInternals = function (t, e) {
                    var n = this.cuepointChanges;
                    if (n && 0 !== n.length) {
                      var r = e >= n.length - 1,
                        o = null === e;
                      (this.lastHandledTime = t),
                        (this.lastHandledTimeIndex = e),
                        (this.nextTimeToHandle = o ? n[0].time : r ? n[n.length - 1].time : n[e + 1].time),
                        (this.isFirstTime = !1);
                    }
                  }),
                  (t.prototype.createEmptyDelta = function () {
                    return {show: [], hide: []};
                  }),
                  (t.prototype.binarySearch = function (t, e) {
                    if (!t || 0 === t.length) return null;
                    if (e < t[0].time) return -1;
                    if (e > t[t.length - 1].time) return t.length - 1;
                    for (var n = 0, r = t.length - 1; n <= r; ) {
                      var o = Math.floor((r + n + 1) / 2);
                      if (e < t[o].time) r = o - 1;
                      else {
                        if (!(e > t[o].time)) return o;
                        n = o + 1;
                      }
                    }
                    return Math.min(n, r);
                  }),
                  (t.prototype.findClosestLastIndexByTime = function (t) {
                    var e = this.cuepointChanges,
                      n = this.binarySearch(e, t);
                    if (null === n) return -1;
                    for (var r = e.length; n < r - 1 && e[n + 1].time === t; ) n++;
                    return n;
                  }),
                  (t.prototype.prepareCuepoint = function () {
                    var t = this;
                    (this._cuepoints || []).forEach(function (e) {
                      null !== e.startTime &&
                        void 0 !== e.startTime &&
                        e.startTime >= 0 &&
                        t.cuepointChanges.push({time: e.startTime, type: o.Show, cuePoint: e}),
                        null !== e.endTime &&
                          void 0 !== e.endTime &&
                          e.endTime >= 0 &&
                          t.cuepointChanges.push({time: e.endTime, type: o.Hide, cuePoint: e});
                    }),
                      this.cuepointChanges.sort(function (t, e) {
                        return t.time < e.time ? -1 : t.time === e.time ? 0 : 1;
                      }),
                      a.debug('tracking ' + this.cuepointChanges.length + ' changes', {
                        method: 'prepareCuepoint',
                        data: {changes: this.cuepointChanges}
                      });
                  }),
                  t
                );
              })();
            e.CuepointEngine = s;
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = (function () {
              function t() {
                this._cache = {};
              }
              return (
                (t.get = function (e) {
                  return (e.__contrib__ = e.__contrib__ || {}), (e.__contrib__.services = e.__contrib__.services || new t()), e.__contrib__.services;
                }),
                (t.prototype.get = function (t) {
                  var e = this._cache[t];
                  if (!e) throw new Error('cannot find resource with token ' + t);
                  return e;
                }),
                (t.prototype.register = function (t, e) {
                  var n = this._cache[t];
                  return n || (n = this._cache[t] = {instance: e()}), n.instance;
                }),
                t
              );
            })();
            e.PlayerContribRegistry = r;
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = n(60),
              o = (function () {
                function t() {}
                return (
                  (t.getAnonymousUserId = function (e) {
                    return 'undefined' == typeof Storage
                      ? t._generateAnonymousUserId(e)
                      : ((n = localStorage.getItem('anonymousUserId')) ||
                          ((n = t._generateAnonymousUserId(e)), localStorage.setItem('anonymousUserId', n)),
                        n);
                    var n;
                  }),
                  (t._generateAnonymousUserId = function (t) {
                    return '##' + t + 'HashSeparator' + r.UUID.numberedUuidV1() + '##';
                  }),
                  t
                );
              })();
            e.KalturaLiveServices = o;
          },
          function (t, e, n) {
            var r,
              o,
              i = n(114),
              a = n(61),
              s = 0,
              c = 0;
            t.exports = function (t, e, n) {
              var u = (e && n) || 0,
                l = e || [],
                p = (t = t || {}).node || r,
                f = void 0 !== t.clockseq ? t.clockseq : o;
              if (null == p || null == f) {
                var d = i();
                null == p && (p = r = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]), null == f && (f = o = 16383 & ((d[6] << 8) | d[7]));
              }
              var h = void 0 !== t.msecs ? t.msecs : new Date().getTime(),
                _ = void 0 !== t.nsecs ? t.nsecs : c + 1,
                v = h - s + (_ - c) / 1e4;
              if ((v < 0 && void 0 === t.clockseq && (f = (f + 1) & 16383), (v < 0 || h > s) && void 0 === t.nsecs && (_ = 0), _ >= 1e4))
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
              (s = h), (c = _), (o = f);
              var g = (1e4 * (268435455 & (h += 122192928e5)) + _) % 4294967296;
              (l[u++] = (g >>> 24) & 255), (l[u++] = (g >>> 16) & 255), (l[u++] = (g >>> 8) & 255), (l[u++] = 255 & g);
              var y = ((h / 4294967296) * 1e4) & 268435455;
              (l[u++] = (y >>> 8) & 255),
                (l[u++] = 255 & y),
                (l[u++] = ((y >>> 24) & 15) | 16),
                (l[u++] = (y >>> 16) & 255),
                (l[u++] = (f >>> 8) | 128),
                (l[u++] = 255 & f);
              for (var m = 0; m < 6; ++m) l[u + m] = p[m];
              return e || a(l);
            };
          },
          function (t, e) {
            var n =
              ('undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
              ('undefined' != typeof msCrypto && 'function' == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto));
            if (n) {
              var r = new Uint8Array(16);
              t.exports = function () {
                return n(r), r;
              };
            } else {
              var o = new Array(16);
              t.exports = function () {
                for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), (o[e] = (t >>> ((3 & e) << 3)) & 255);
                return o;
              };
            }
          },
          function (t, e, n) {
            var r = n(116),
              o = n(117);
            t.exports = r('v5', 80, o);
          },
          function (t, e, n) {
            var r = n(61);
            t.exports = function (t, e, n) {
              var o = function (t, o, i, a) {
                var s = (i && a) || 0;
                if (
                  ('string' == typeof t &&
                    (t = (function (t) {
                      t = unescape(encodeURIComponent(t));
                      for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
                      return e;
                    })(t)),
                  'string' == typeof o &&
                    (o = (function (t) {
                      var e = [];
                      return (
                        t.replace(/[a-fA-F0-9]{2}/g, function (t) {
                          e.push(parseInt(t, 16));
                        }),
                        e
                      );
                    })(o)),
                  !Array.isArray(t))
                )
                  throw TypeError('value must be an array of bytes');
                if (!Array.isArray(o) || 16 !== o.length) throw TypeError('namespace must be uuid string or an Array of 16 byte values');
                var c = n(o.concat(t));
                if (((c[6] = (15 & c[6]) | e), (c[8] = (63 & c[8]) | 128), i)) for (var u = 0; u < 16; ++u) i[s + u] = c[u];
                return i || r(c);
              };
              try {
                o.name = t;
              } catch (t) {}
              return (o.DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'), (o.URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8'), o;
            };
          },
          function (t, e, n) {
            'use strict';
            function r(t, e, n, r) {
              switch (t) {
                case 0:
                  return (e & n) ^ (~e & r);
                case 1:
                  return e ^ n ^ r;
                case 2:
                  return (e & n) ^ (e & r) ^ (n & r);
                case 3:
                  return e ^ n ^ r;
              }
            }
            function o(t, e) {
              return (t << e) | (t >>> (32 - e));
            }
            t.exports = function (t) {
              var e = [1518500249, 1859775393, 2400959708, 3395469782],
                n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
              if ('string' == typeof t) {
                var i = unescape(encodeURIComponent(t));
                t = new Array(i.length);
                for (var a = 0; a < i.length; a++) t[a] = i.charCodeAt(a);
              }
              t.push(128);
              var s = t.length / 4 + 2,
                c = Math.ceil(s / 16),
                u = new Array(c);
              for (a = 0; a < c; a++) {
                u[a] = new Array(16);
                for (var l = 0; l < 16; l++)
                  u[a][l] = (t[64 * a + 4 * l] << 24) | (t[64 * a + 4 * l + 1] << 16) | (t[64 * a + 4 * l + 2] << 8) | t[64 * a + 4 * l + 3];
              }
              for (
                u[c - 1][14] = (8 * (t.length - 1)) / Math.pow(2, 32),
                  u[c - 1][14] = Math.floor(u[c - 1][14]),
                  u[c - 1][15] = (8 * (t.length - 1)) & 4294967295,
                  a = 0;
                a < c;
                a++
              ) {
                for (var p = new Array(80), f = 0; f < 16; f++) p[f] = u[a][f];
                for (f = 16; f < 80; f++) p[f] = o(p[f - 3] ^ p[f - 8] ^ p[f - 14] ^ p[f - 16], 1);
                var d = n[0],
                  h = n[1],
                  _ = n[2],
                  v = n[3],
                  g = n[4];
                for (f = 0; f < 80; f++) {
                  var y = Math.floor(f / 20),
                    m = (o(d, 5) + r(y, h, _, v) + g + e[y] + p[f]) >>> 0;
                  (g = v), (v = _), (_ = o(h, 30) >>> 0), (h = d), (d = m);
                }
                (n[0] = (n[0] + d) >>> 0), (n[1] = (n[1] + h) >>> 0), (n[2] = (n[2] + _) >>> 0), (n[3] = (n[3] + v) >>> 0), (n[4] = (n[4] + g) >>> 0);
              }
              return [
                (n[0] >> 24) & 255,
                (n[0] >> 16) & 255,
                (n[0] >> 8) & 255,
                255 & n[0],
                (n[1] >> 24) & 255,
                (n[1] >> 16) & 255,
                (n[1] >> 8) & 255,
                255 & n[1],
                (n[2] >> 24) & 255,
                (n[2] >> 16) & 255,
                (n[2] >> 8) & 255,
                255 & n[2],
                (n[3] >> 24) & 255,
                (n[3] >> 16) & 255,
                (n[3] >> 8) & 255,
                255 & n[3],
                (n[4] >> 24) & 255,
                (n[4] >> 16) & 255,
                (n[4] >> 8) & 255,
                255 & n[4]
              ];
            };
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = (function () {
              function t() {
                (this._eventListeners = {}), (this._wildcardEventListeners = []);
              }
              return (
                (t.prototype.on = function (t, e) {
                  '*' !== t ? (this._eventListeners[t] || (this._eventListeners[t] = [])).push(e) : this._wildcardEventListeners.push(e);
                }),
                (t.prototype.off = function (t, e) {
                  if ('*' !== t) {
                    var n = this._eventListeners[t];
                    n && n.splice(n.indexOf(e) >>> 0, 1);
                  } else this._wildcardEventListeners.splice(this._wildcardEventListeners.indexOf(e) >>> 0, 1);
                }),
                (t.prototype.emit = function (t) {
                  (this._eventListeners[t.type] || []).slice().map(function (e) {
                    e(t);
                  }),
                    this._wildcardEventListeners.slice().map(function (e) {
                      e(t);
                    });
                }),
                t
              );
            })();
            e.EventsManager = r;
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0}),
              (e.debounce = function (t, e, n) {
                var r;
                return (
                  void 0 === e && (e = 50),
                  void 0 === n && (n = {isImmediate: !1}),
                  function () {
                    for (var o = this, i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
                    var s = function () {
                        (r = void 0), n.isImmediate || t.apply(o, i);
                      },
                      c = n.isImmediate && void 0 === r;
                    void 0 !== r && clearTimeout(r), (r = setTimeout(s, e)), c && t.apply(this, i);
                  }
                );
              });
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = n(62),
              o = (function () {
                function t() {}
                return (
                  (t.getPlayerConfig = function (t, e, n, o) {
                    var i = r.ObjectUtils.get(t.config, e, {});
                    return r.ObjectUtils.mergeDefaults(i, n, o);
                  }),
                  t
                );
              })();
            e.KalturaPlayerUtils = o;
          },
          function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', {value: !0});
            var r = (function () {
              function t() {}
              return (
                (t.findIndex = function (t, e) {
                  for (var n = 0; n < t.length; ) {
                    if (e(t[n])) return n;
                    n++;
                  }
                  return -1;
                }),
                t
              );
            })();
            e.ArrayUtils = r;
          }
        ]));
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}),
        (function (t) {
          for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
        })(n(14));
    },
    function (t, e, n) {
      'use strict';
      var r,
        o =
          (this && this.__extends) ||
          ((r = function (t, e) {
            return (r =
              Object.setPrototypeOf ||
              ({__proto__: []} instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(t, e);
          }),
          function (t, e) {
            function n() {
              this.constructor = t;
            }
            r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
          });
      Object.defineProperty(e, '__esModule', {value: !0});
      var i = n(0),
        a = n(15),
        s = n(3),
        c = n(18),
        u = s.getContribLogger({class: 'Info', module: 'info-plugin'}),
        l = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            o(e, t),
            (e.prototype.componentDidMount = function () {
              u.trace('Info plugin mount', {method: 'componentDidMount'});
            }),
            (e.prototype.render = function (t) {
              var e = t.onClick,
                n = t.entryName,
                r = t.description,
                o = t.broadcastedDate;
              return i.h(
                'div',
                {className: [a.root, 'kaltura-info__root'].join(' ')},
                i.h(c.CloseButton, {onClick: e}),
                i.h('div', {className: [a.broadcastDate, 'kaltura-info__broadcast-date', o ? '' : 'hidden'].join(' ')}, o),
                i.h('div', {className: [a.entryName, 'kaltura-info__entry-name'].join(' ')}, n),
                i.h('div', {className: [a.entryDescription, 'kaltura-info__entry-description'].join(' '), dangerouslySetInnerHTML: {__html: r}})
              );
            }),
            e
          );
        })(i.Component);
      e.Info = l;
    },
    function (t, e, n) {
      var r = n(16);
      'string' == typeof r && (r = [[t.i, r, '']]);
      var o = {hmr: !0, transform: void 0, insertInto: void 0};
      n(2)(r, o);
      r.locals && (t.exports = r.locals);
    },
    function (t, e, n) {
      (e = t.exports = n(1)(!1)).push([
        t.i,
        '.src-components-info-info__body--1eEr7::-webkit-scrollbar{width:4px}.src-components-info-info__body--1eEr7::-webkit-scrollbar-track{background:rgba(33,33,33,0.9)}.src-components-info-info__body--1eEr7::-webkit-scrollbar-thumb{border-radius:3px;background-color:rgba(255,255,255,0.3)}.src-components-info-info__root--3J1Ps{position:absolute;height:100%;width:100%;display:flex;flex-direction:column;justify-content:flex-start;padding:60px 32px 32px 32px;color:#fff;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);background-color:rgba(0,0,0,0.7)}.src-components-info-info__root--3J1Ps .src-components-info-info__broadcast-date--1RTJm{margin-bottom:8px;font-size:12px;font-weight:bold;text-transform:uppercase}.src-components-info-info__root--3J1Ps .src-components-info-info__broadcast-date--1RTJm.src-components-info-info__hidden--1OQgw{display:none}.src-components-info-info__root--3J1Ps .src-components-info-info__entry-name--2QBoM{margin-bottom:16px;min-height:29px;font-size:24px;font-weight:bold;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.src-components-info-info__root--3J1Ps .src-components-info-info__entry-description--35nCN{opacity:0.7;line-height:1.6;font-size:15px;overflow-y:auto}.src-components-info-info__root--3J1Ps .src-components-info-info__entry-description--35nCN a{color:#01ACCD}.playkit-player.playkit-size-sm .kaltura-info__close-button,.playkit-player.playkit-size-xs .kaltura-info__close-button{top:10px;right:16px}.playkit-player.playkit-size-sm .kaltura-info__root,.playkit-player.playkit-size-xs .kaltura-info__root{padding:16px}.playkit-player.playkit-size-sm .kaltura-info__root .kaltura-info__broadcast-date,.playkit-player.playkit-size-xs .kaltura-info__root .kaltura-info__broadcast-date{font-size:10px}.playkit-player.playkit-size-sm .kaltura-info__root .kaltura-info__broadcast-date.hidden,.playkit-player.playkit-size-xs .kaltura-info__root .kaltura-info__broadcast-date.hidden{display:block;height:0;margin-bottom:18px}.playkit-player.playkit-size-sm .kaltura-info__root .kaltura-info__entry-name,.playkit-player.playkit-size-xs .kaltura-info__root .kaltura-info__entry-name{margin-bottom:8px;min-height:19px;font-size:16px}.playkit-player.playkit-size-sm .kaltura-info__root .kaltura-info__entry-description,.playkit-player.playkit-size-xs .kaltura-info__root .kaltura-info__entry-description{font-size:12px}.playkit-player.playkit-size-ty .kaltura-info__root{display:none}\n',
        ''
      ]),
        (e.locals = {
          body: 'src-components-info-info__body--1eEr7',
          root: 'src-components-info-info__root--3J1Ps',
          'broadcast-date': 'src-components-info-info__broadcast-date--1RTJm',
          broadcastDate: 'src-components-info-info__broadcast-date--1RTJm',
          hidden: 'src-components-info-info__hidden--1OQgw',
          'entry-name': 'src-components-info-info__entry-name--2QBoM',
          entryName: 'src-components-info-info__entry-name--2QBoM',
          'entry-description': 'src-components-info-info__entry-description--35nCN',
          entryDescription: 'src-components-info-info__entry-description--35nCN'
        });
    },
    function (t, e) {
      t.exports = function (t) {
        var e = 'undefined' != typeof window && window.location;
        if (!e) throw new Error('fixUrls requires window.location');
        if (!t || 'string' != typeof t) return t;
        var n = e.protocol + '//' + e.host,
          r = n + e.pathname.replace(/\/[^\/]*$/, '/');
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
          var o,
            i = e
              .trim()
              .replace(/^"(.*)"$/, function (t, e) {
                return e;
              })
              .replace(/^'(.*)'$/, function (t, e) {
                return e;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)
            ? t
            : ((o = 0 === i.indexOf('//') ? i : 0 === i.indexOf('/') ? n + i : r + i.replace(/^\.\//, '')), 'url(' + JSON.stringify(o) + ')');
        });
      };
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}),
        (function (t) {
          for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
        })(n(19));
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0});
      var r = n(0),
        o = n(20);
      e.CloseButton = function (t) {
        return r.h('div', {className: [o.closeButton, 'kaltura-info__close-button'].join(' '), role: 'button', tabIndex: 1, onClick: t.onClick});
      };
    },
    function (t, e, n) {
      var r = n(21);
      'string' == typeof r && (r = [[t.i, r, '']]);
      var o = {hmr: !0, transform: void 0, insertInto: void 0};
      n(2)(r, o);
      r.locals && (t.exports = r.locals);
    },
    function (t, e, n) {
      e = t.exports = n(1)(!1);
      var r = n(4)(n(22));
      e.push([
        t.i,
        '.src-components-close-button-close-button__close-button--17elP{position:absolute;top:32px;right:32px;width:32px;height:32px;min-width:32px;cursor:pointer;background-image:url(' +
          r +
          ')}\n',
        ''
      ]),
        (e.locals = {
          'close-button': 'src-components-close-button-close-button__close-button--17elP',
          closeButton: 'src-components-close-button-close-button__close-button--17elP'
        });
    },
    function (t, e) {
      t.exports =
        "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='32px' height='32px' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 57.1 (83088) - https://sketch.com --%3E %3Ctitle%3EIcons/32/Close%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='Icons/32/Close' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Crect id='Bounds' x='0' y='0' width='32' height='32'%3E%3C/rect%3E %3Cpath d='M17.9113162,16 L24.6072325,9.30408374 C25.1313645,8.77995172 25.1287183,7.92687249 24.6009229,7.3990771 C24.0694478,6.86760201 23.220227,6.86845682 22.6959163,7.39276754 L16,14.0886838 L9.30408374,7.39276754 C8.77995172,6.86863552 7.92687249,6.8712817 7.3990771,7.3990771 C6.86760201,7.93055219 6.86845682,8.77977302 7.39276754,9.30408374 L14.0886838,16 L7.39276754,22.6959163 C6.86863552,23.2200483 6.8712817,24.0731275 7.3990771,24.6009229 C7.93055219,25.132398 8.77977302,25.1315432 9.30408374,24.6072325 L16,17.9113162 L22.6959163,24.6072325 C23.2200483,25.1313645 24.0731275,25.1287183 24.6009229,24.6009229 C25.132398,24.0694478 25.1315432,23.220227 24.6072325,22.6959163 L17.9113162,16 Z' id='Close' fill='rgba(255,255,255,0.8)'%3E%3C/path%3E %3C/g%3E %3C/svg%3E";
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0}),
        (function (t) {
          for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
        })(n(24));
    },
    function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {value: !0});
      var r = n(0),
        o = n(25);
      e.PluginButton = function () {
        return r.h('div', {className: o.infoIcon, role: 'button', tabIndex: 1});
      };
    },
    function (t, e, n) {
      var r = n(26);
      'string' == typeof r && (r = [[t.i, r, '']]);
      var o = {hmr: !0, transform: void 0, insertInto: void 0};
      n(2)(r, o);
      r.locals && (t.exports = r.locals);
    },
    function (t, e, n) {
      e = t.exports = n(1)(!1);
      var r = n(4)(n(27));
      e.push([
        t.i,
        '.src-components-plugin-button-plugin-button__info-icon--1Se35{background-image:url(' +
          r +
          ');width:32px;height:32px;opacity:0.8;cursor:pointer}.src-components-plugin-button-plugin-button__info-icon--1Se35:hover,.src-components-plugin-button-plugin-button__info-icon--1Se35:focus{opacity:1}\n',
        ''
      ]),
        (e.locals = {
          'info-icon': 'src-components-plugin-button-plugin-button__info-icon--1Se35',
          infoIcon: 'src-components-plugin-button-plugin-button__info-icon--1Se35'
        });
    },
    function (t, e) {
      t.exports =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='33' viewBox='0 0 32 33'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath d='M0 0h32v32H0z'/%3E %3Cpath fill='%23FFF' d='M16 4c6.627 0 12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4zm0 2C10.477 6 6 10.477 6 16s4.477 10 10 10 10-4.477 10-10S21.523 6 16 6zm0 9a1 1 0 0 1 1 .99v4.02a.992.992 0 0 1-.883.983L16 21a1 1 0 0 1-1-.99v-4.02c0-.507.383-.926.883-.983L16 15zm0-4.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z' opacity='.8'/%3E %3C/g%3E %3C/svg%3E";
    }
  ]);
});
//# sourceMappingURL=playkit-js-info.js.map
