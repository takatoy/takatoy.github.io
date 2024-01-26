(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const r of o)
      if (r.type === "childList")
        for (const i of r.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const r = {};
    return (
      o.integrity && (r.integrity = o.integrity),
      o.referrerPolicy && (r.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const r = n(o);
    fetch(o.href, r);
  }
})();
/**
 * @vue/shared v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Dn(e, t) {
  const n = new Set(e.split(","));
  return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s);
}
const G = {},
  ut = [],
  ye = () => {},
  sr = () => !1,
  Qt = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Vn = (e) => e.startsWith("onUpdate:"),
  ee = Object.assign,
  Un = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  or = Object.prototype.hasOwnProperty,
  H = (e, t) => or.call(e, t),
  L = Array.isArray,
  at = (e) => en(e) === "[object Map]",
  qs = (e) => en(e) === "[object Set]",
  N = (e) => typeof e == "function",
  te = (e) => typeof e == "string",
  mt = (e) => typeof e == "symbol",
  Y = (e) => e !== null && typeof e == "object",
  Xs = (e) => (Y(e) || N(e)) && N(e.then) && N(e.catch),
  Zs = Object.prototype.toString,
  en = (e) => Zs.call(e),
  rr = (e) => en(e).slice(8, -1),
  Qs = (e) => en(e) === "[object Object]",
  Kn = (e) =>
    te(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Dt = Dn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  tn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  ir = /-(\w)/g,
  pt = tn((e) => e.replace(ir, (t, n) => (n ? n.toUpperCase() : ""))),
  lr = /\B([A-Z])/g,
  _t = tn((e) => e.replace(lr, "-$1").toLowerCase()),
  eo = tn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  gn = tn((e) => (e ? `on${eo(e)}` : "")),
  Je = (e, t) => !Object.is(e, t),
  mn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  zt = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  cr = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  fr = (e) => {
    const t = te(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let ps;
const to = () =>
  ps ||
  (ps =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Wn(e) {
  if (L(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        o = te(s) ? hr(s) : Wn(s);
      if (o) for (const r in o) t[r] = o[r];
    }
    return t;
  } else if (te(e) || Y(e)) return e;
}
const ur = /;(?![^(]*\))/g,
  ar = /:([^]+)/,
  dr = /\/\*[^]*?\*\//g;
function hr(e) {
  const t = {};
  return (
    e
      .replace(dr, "")
      .split(ur)
      .forEach((n) => {
        if (n) {
          const s = n.split(ar);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function zn(e) {
  let t = "";
  if (te(e)) t = e;
  else if (L(e))
    for (let n = 0; n < e.length; n++) {
      const s = zn(e[n]);
      s && (t += s + " ");
    }
  else if (Y(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const pr =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  gr = Dn(pr);
function no(e) {
  return !!e || e === "";
}
const Fe = (e) =>
    te(e)
      ? e
      : e == null
      ? ""
      : L(e) || (Y(e) && (e.toString === Zs || !N(e.toString)))
      ? JSON.stringify(e, so, 2)
      : String(e),
  so = (e, t) =>
    t && t.__v_isRef
      ? so(e, t.value)
      : at(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, o], r) => ((n[_n(s, r) + " =>"] = o), n),
            {}
          ),
        }
      : qs(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => _n(n)) }
      : mt(t)
      ? _n(t)
      : Y(t) && !L(t) && !Qs(t)
      ? String(t)
      : t,
  _n = (e, t = "") => {
    var n;
    return mt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let we;
class mr {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = we),
      !t && we && (this.index = (we.scopes || (we.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = we;
      try {
        return (we = this), t();
      } finally {
        we = n;
      }
    }
  }
  on() {
    we = this;
  }
  off() {
    we = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function _r(e, t = we) {
  t && t.active && t.effects.push(e);
}
function yr() {
  return we;
}
let st;
class Jn {
  constructor(t, n, s, o) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 2),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      _r(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      rt();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (br(n.computed), this._dirtyLevel >= 2)) break;
      }
      this._dirtyLevel < 2 && (this._dirtyLevel = 0), it();
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 2 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = We,
      n = st;
    try {
      return (We = !0), (st = this), this._runnings++, gs(this), this.fn();
    } finally {
      ms(this), this._runnings--, (st = n), (We = t);
    }
  }
  stop() {
    var t;
    this.active &&
      (gs(this),
      ms(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1));
  }
}
function br(e) {
  return e.value;
}
function gs(e) {
  e._trackId++, (e._depsLength = 0);
}
function ms(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) oo(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function oo(e, t) {
  const n = e.get(t);
  n !== void 0 &&
    t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let We = !0,
  An = 0;
const ro = [];
function rt() {
  ro.push(We), (We = !1);
}
function it() {
  const e = ro.pop();
  We = e === void 0 ? !0 : e;
}
function Gn() {
  An++;
}
function Yn() {
  for (An--; !An && Sn.length; ) Sn.shift()();
}
function io(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && oo(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const Sn = [];
function lo(e, t, n) {
  Gn();
  for (const s of e.keys())
    if (s._dirtyLevel < t && e.get(s) === s._trackId) {
      const o = s._dirtyLevel;
      (s._dirtyLevel = t), o === 0 && ((s._shouldSchedule = !0), s.trigger());
    }
  co(e), Yn();
}
function co(e) {
  for (const t of e.keys())
    t.scheduler &&
      t._shouldSchedule &&
      (!t._runnings || t.allowRecurse) &&
      e.get(t) === t._trackId &&
      ((t._shouldSchedule = !1), Sn.push(t.scheduler));
}
const fo = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  In = new WeakMap(),
  ot = Symbol(""),
  Ln = Symbol("");
function de(e, t, n) {
  if (We && st) {
    let s = In.get(e);
    s || In.set(e, (s = new Map()));
    let o = s.get(n);
    o || s.set(n, (o = fo(() => s.delete(n)))), io(st, o);
  }
}
function Re(e, t, n, s, o, r) {
  const i = In.get(e);
  if (!i) return;
  let c = [];
  if (t === "clear") c = [...i.values()];
  else if (n === "length" && L(e)) {
    const u = Number(s);
    i.forEach((a, h) => {
      (h === "length" || (!mt(h) && h >= u)) && c.push(a);
    });
  } else
    switch ((n !== void 0 && c.push(i.get(n)), t)) {
      case "add":
        L(e)
          ? Kn(n) && c.push(i.get("length"))
          : (c.push(i.get(ot)), at(e) && c.push(i.get(Ln)));
        break;
      case "delete":
        L(e) || (c.push(i.get(ot)), at(e) && c.push(i.get(Ln)));
        break;
      case "set":
        at(e) && c.push(i.get(ot));
        break;
    }
  Gn();
  for (const u of c) u && lo(u, 2);
  Yn();
}
const xr = Dn("__proto__,__v_isRef,__isVue"),
  uo = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(mt)
  ),
  _s = vr();
function vr() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = k(this);
        for (let r = 0, i = this.length; r < i; r++) de(s, "get", r + "");
        const o = s[t](...n);
        return o === -1 || o === !1 ? s[t](...n.map(k)) : o;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        rt(), Gn();
        const s = k(this)[t].apply(this, n);
        return Yn(), it(), s;
      };
    }),
    e
  );
}
function wr(e) {
  const t = k(this);
  return de(t, "has", e), t.hasOwnProperty(e);
}
class ao {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._shallow = n);
  }
  get(t, n, s) {
    const o = this._isReadonly,
      r = this._shallow;
    if (n === "__v_isReactive") return !o;
    if (n === "__v_isReadonly") return o;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw")
      return s === (o ? (r ? Rr : mo) : r ? go : po).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const i = L(t);
    if (!o) {
      if (i && H(_s, n)) return Reflect.get(_s, n, s);
      if (n === "hasOwnProperty") return wr;
    }
    const c = Reflect.get(t, n, s);
    return (mt(n) ? uo.has(n) : xr(n)) || (o || de(t, "get", n), r)
      ? c
      : he(c)
      ? i && Kn(n)
        ? c
        : c.value
      : Y(c)
      ? o
        ? _o(c)
        : Zn(c)
      : c;
  }
}
class ho extends ao {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._shallow) {
      const u = gt(r);
      if (
        (!Jt(s) && !gt(s) && ((r = k(r)), (s = k(s))), !L(t) && he(r) && !he(s))
      )
        return u ? !1 : ((r.value = s), !0);
    }
    const i = L(t) && Kn(n) ? Number(n) < t.length : H(t, n),
      c = Reflect.set(t, n, s, o);
    return (
      t === k(o) && (i ? Je(s, r) && Re(t, "set", n, s) : Re(t, "add", n, s)), c
    );
  }
  deleteProperty(t, n) {
    const s = H(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && Re(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!mt(n) || !uo.has(n)) && de(t, "has", n), s;
  }
  ownKeys(t) {
    return de(t, "iterate", L(t) ? "length" : ot), Reflect.ownKeys(t);
  }
}
class Cr extends ao {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Tr = new ho(),
  Er = new Cr(),
  Ar = new ho(!0),
  qn = (e) => e,
  nn = (e) => Reflect.getPrototypeOf(e);
function Nt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const o = k(e),
    r = k(t);
  n || (Je(t, r) && de(o, "get", t), de(o, "get", r));
  const { has: i } = nn(o),
    c = s ? qn : n ? es : Et;
  if (i.call(o, t)) return c(e.get(t));
  if (i.call(o, r)) return c(e.get(r));
  e !== o && e.get(t);
}
function Ft(e, t = !1) {
  const n = this.__v_raw,
    s = k(n),
    o = k(e);
  return (
    t || (Je(e, o) && de(s, "has", e), de(s, "has", o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function Rt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && de(k(e), "iterate", ot), Reflect.get(e, "size", e)
  );
}
function ys(e) {
  e = k(e);
  const t = k(this);
  return nn(t).has.call(t, e) || (t.add(e), Re(t, "add", e, e)), this;
}
function bs(e, t) {
  t = k(t);
  const n = k(this),
    { has: s, get: o } = nn(n);
  let r = s.call(n, e);
  r || ((e = k(e)), (r = s.call(n, e)));
  const i = o.call(n, e);
  return (
    n.set(e, t), r ? Je(t, i) && Re(n, "set", e, t) : Re(n, "add", e, t), this
  );
}
function xs(e) {
  const t = k(this),
    { has: n, get: s } = nn(t);
  let o = n.call(t, e);
  o || ((e = k(e)), (o = n.call(t, e))), s && s.call(t, e);
  const r = t.delete(e);
  return o && Re(t, "delete", e, void 0), r;
}
function vs() {
  const e = k(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Re(e, "clear", void 0, void 0), n;
}
function $t(e, t) {
  return function (s, o) {
    const r = this,
      i = r.__v_raw,
      c = k(i),
      u = t ? qn : e ? es : Et;
    return (
      !e && de(c, "iterate", ot), i.forEach((a, h) => s.call(o, u(a), u(h), r))
    );
  };
}
function Ht(e, t, n) {
  return function (...s) {
    const o = this.__v_raw,
      r = k(o),
      i = at(r),
      c = e === "entries" || (e === Symbol.iterator && i),
      u = e === "keys" && i,
      a = o[e](...s),
      h = n ? qn : t ? es : Et;
    return (
      !t && de(r, "iterate", u ? Ln : ot),
      {
        next() {
          const { value: _, done: x } = a.next();
          return x
            ? { value: _, done: x }
            : { value: c ? [h(_[0]), h(_[1])] : h(_), done: x };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function He(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Sr() {
  const e = {
      get(r) {
        return Nt(this, r);
      },
      get size() {
        return Rt(this);
      },
      has: Ft,
      add: ys,
      set: bs,
      delete: xs,
      clear: vs,
      forEach: $t(!1, !1),
    },
    t = {
      get(r) {
        return Nt(this, r, !1, !0);
      },
      get size() {
        return Rt(this);
      },
      has: Ft,
      add: ys,
      set: bs,
      delete: xs,
      clear: vs,
      forEach: $t(!1, !0),
    },
    n = {
      get(r) {
        return Nt(this, r, !0);
      },
      get size() {
        return Rt(this, !0);
      },
      has(r) {
        return Ft.call(this, r, !0);
      },
      add: He("add"),
      set: He("set"),
      delete: He("delete"),
      clear: He("clear"),
      forEach: $t(!0, !1),
    },
    s = {
      get(r) {
        return Nt(this, r, !0, !0);
      },
      get size() {
        return Rt(this, !0);
      },
      has(r) {
        return Ft.call(this, r, !0);
      },
      add: He("add"),
      set: He("set"),
      delete: He("delete"),
      clear: He("clear"),
      forEach: $t(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      (e[r] = Ht(r, !1, !1)),
        (n[r] = Ht(r, !0, !1)),
        (t[r] = Ht(r, !1, !0)),
        (s[r] = Ht(r, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [Ir, Lr, Or, Pr] = Sr();
function Xn(e, t) {
  const n = t ? (e ? Pr : Or) : e ? Lr : Ir;
  return (s, o, r) =>
    o === "__v_isReactive"
      ? !e
      : o === "__v_isReadonly"
      ? e
      : o === "__v_raw"
      ? s
      : Reflect.get(H(n, o) && o in s ? n : s, o, r);
}
const Mr = { get: Xn(!1, !1) },
  Nr = { get: Xn(!1, !0) },
  Fr = { get: Xn(!0, !1) },
  po = new WeakMap(),
  go = new WeakMap(),
  mo = new WeakMap(),
  Rr = new WeakMap();
function $r(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Hr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $r(rr(e));
}
function Zn(e) {
  return gt(e) ? e : Qn(e, !1, Tr, Mr, po);
}
function jr(e) {
  return Qn(e, !1, Ar, Nr, go);
}
function _o(e) {
  return Qn(e, !0, Er, Fr, mo);
}
function Qn(e, t, n, s, o) {
  if (!Y(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const r = o.get(e);
  if (r) return r;
  const i = Hr(e);
  if (i === 0) return e;
  const c = new Proxy(e, i === 2 ? s : n);
  return o.set(e, c), c;
}
function dt(e) {
  return gt(e) ? dt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function gt(e) {
  return !!(e && e.__v_isReadonly);
}
function Jt(e) {
  return !!(e && e.__v_isShallow);
}
function yo(e) {
  return dt(e) || gt(e);
}
function k(e) {
  const t = e && e.__v_raw;
  return t ? k(t) : e;
}
function bo(e) {
  return zt(e, "__v_skip", !0), e;
}
const Et = (e) => (Y(e) ? Zn(e) : e),
  es = (e) => (Y(e) ? _o(e) : e);
class xo {
  constructor(t, n, s, o) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Jn(
        () => t(this._value),
        () => Vt(this, 1),
        () => this.dep && co(this.dep)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = k(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        Je(t._value, (t._value = t.effect.run())) &&
        Vt(t, 2),
      vo(t),
      t.effect._dirtyLevel >= 1 && Vt(t, 1),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function kr(e, t, n = !1) {
  let s, o;
  const r = N(e);
  return (
    r ? ((s = e), (o = ye)) : ((s = e.get), (o = e.set)),
    new xo(s, o, r || !o, n)
  );
}
function vo(e) {
  We &&
    st &&
    ((e = k(e)),
    io(
      st,
      e.dep ||
        (e.dep = fo(() => (e.dep = void 0), e instanceof xo ? e : void 0))
    ));
}
function Vt(e, t = 2, n) {
  e = k(e);
  const s = e.dep;
  s && lo(s, t);
}
function he(e) {
  return !!(e && e.__v_isRef === !0);
}
function Br(e) {
  return Dr(e, !1);
}
function Dr(e, t) {
  return he(e) ? e : new Vr(e, t);
}
class Vr {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : k(t)),
      (this._value = n ? t : Et(t));
  }
  get value() {
    return vo(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Jt(t) || gt(t);
    (t = n ? t : k(t)),
      Je(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Et(t)), Vt(this, 2));
  }
}
function Ur(e) {
  return he(e) ? e.value : e;
}
const Kr = {
  get: (e, t, n) => Ur(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return he(o) && !he(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function wo(e) {
  return dt(e) ? e : new Proxy(e, Kr);
}
/**
 * @vue/runtime-core v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ze(e, t, n, s) {
  let o;
  try {
    o = s ? e(...s) : e();
  } catch (r) {
    sn(r, t, n);
  }
  return o;
}
function be(e, t, n, s) {
  if (N(e)) {
    const r = ze(e, t, n, s);
    return (
      r &&
        Xs(r) &&
        r.catch((i) => {
          sn(i, t, n);
        }),
      r
    );
  }
  const o = [];
  for (let r = 0; r < e.length; r++) o.push(be(e[r], t, n, s));
  return o;
}
function sn(e, t, n, s = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const a = r.ec;
      if (a) {
        for (let h = 0; h < a.length; h++) if (a[h](e, i, c) === !1) return;
      }
      r = r.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      ze(u, null, 10, [e, i, c]);
      return;
    }
  }
  Wr(e, n, o, s);
}
function Wr(e, t, n, s = !0) {
  console.error(e);
}
let At = !1,
  On = !1;
const ie = [];
let Oe = 0;
const ht = [];
let Be = null,
  tt = 0;
const Co = Promise.resolve();
let ts = null;
function zr(e) {
  const t = ts || Co;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Jr(e) {
  let t = Oe + 1,
    n = ie.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      o = ie[s],
      r = St(o);
    r < e || (r === e && o.pre) ? (t = s + 1) : (n = s);
  }
  return t;
}
function ns(e) {
  (!ie.length || !ie.includes(e, At && e.allowRecurse ? Oe + 1 : Oe)) &&
    (e.id == null ? ie.push(e) : ie.splice(Jr(e.id), 0, e), To());
}
function To() {
  !At && !On && ((On = !0), (ts = Co.then(Ao)));
}
function Gr(e) {
  const t = ie.indexOf(e);
  t > Oe && ie.splice(t, 1);
}
function Yr(e) {
  L(e)
    ? ht.push(...e)
    : (!Be || !Be.includes(e, e.allowRecurse ? tt + 1 : tt)) && ht.push(e),
    To();
}
function ws(e, t, n = At ? Oe + 1 : 0) {
  for (; n < ie.length; n++) {
    const s = ie[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue;
      ie.splice(n, 1), n--, s();
    }
  }
}
function Eo(e) {
  if (ht.length) {
    const t = [...new Set(ht)].sort((n, s) => St(n) - St(s));
    if (((ht.length = 0), Be)) {
      Be.push(...t);
      return;
    }
    for (Be = t, tt = 0; tt < Be.length; tt++) Be[tt]();
    (Be = null), (tt = 0);
  }
}
const St = (e) => (e.id == null ? 1 / 0 : e.id),
  qr = (e, t) => {
    const n = St(e) - St(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Ao(e) {
  (On = !1), (At = !0), ie.sort(qr);
  try {
    for (Oe = 0; Oe < ie.length; Oe++) {
      const t = ie[Oe];
      t && t.active !== !1 && ze(t, null, 14);
    }
  } finally {
    (Oe = 0),
      (ie.length = 0),
      Eo(),
      (At = !1),
      (ts = null),
      (ie.length || ht.length) && Ao();
  }
}
function Xr(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || G;
  let o = n;
  const r = t.startsWith("update:"),
    i = r && t.slice(7);
  if (i && i in s) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: _, trim: x } = s[h] || G;
    x && (o = n.map((A) => (te(A) ? A.trim() : A))), _ && (o = n.map(cr));
  }
  let c,
    u = s[(c = gn(t))] || s[(c = gn(pt(t)))];
  !u && r && (u = s[(c = gn(_t(t)))]), u && be(u, e, 6, o);
  const a = s[c + "Once"];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[c]) return;
    (e.emitted[c] = !0), be(a, e, 6, o);
  }
}
function So(e, t, n = !1) {
  const s = t.emitsCache,
    o = s.get(e);
  if (o !== void 0) return o;
  const r = e.emits;
  let i = {},
    c = !1;
  if (!N(e)) {
    const u = (a) => {
      const h = So(a, t, !0);
      h && ((c = !0), ee(i, h));
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  return !r && !c
    ? (Y(e) && s.set(e, null), null)
    : (L(r) ? r.forEach((u) => (i[u] = null)) : ee(i, r),
      Y(e) && s.set(e, i),
      i);
}
function on(e, t) {
  return !e || !Qt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      H(e, t[0].toLowerCase() + t.slice(1)) || H(e, _t(t)) || H(e, t));
}
let ue = null,
  Io = null;
function Gt(e) {
  const t = ue;
  return (ue = e), (Io = (e && e.type.__scopeId) || null), t;
}
function Ce(e, t = ue, n) {
  if (!t || e._n) return e;
  const s = (...o) => {
    s._d && Ns(-1);
    const r = Gt(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Gt(r), s._d && Ns(1);
    }
    return i;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function yn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    props: r,
    propsOptions: [i],
    slots: c,
    attrs: u,
    emit: a,
    render: h,
    renderCache: _,
    data: x,
    setupState: A,
    ctx: j,
    inheritAttrs: P,
  } = e;
  let B, U;
  const oe = Gt(e);
  try {
    if (n.shapeFlag & 4) {
      const K = o || s,
        Z = K;
      (B = Le(h.call(Z, K, _, r, A, x, j))), (U = u);
    } else {
      const K = t;
      (B = Le(
        K.length > 1 ? K(r, { attrs: u, slots: c, emit: a }) : K(r, null)
      )),
        (U = t.props ? u : Zr(u));
    }
  } catch (K) {
    (Tt.length = 0), sn(K, e, 1), (B = D(xe));
  }
  let $ = B;
  if (U && P !== !1) {
    const K = Object.keys(U),
      { shapeFlag: Z } = $;
    K.length && Z & 7 && (i && K.some(Vn) && (U = Qr(U, i)), ($ = Ge($, U)));
  }
  return (
    n.dirs && (($ = Ge($)), ($.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs)),
    n.transition && ($.transition = n.transition),
    (B = $),
    Gt(oe),
    B
  );
}
const Zr = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Qt(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Qr = (e, t) => {
    const n = {};
    for (const s in e) (!Vn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function ei(e, t, n) {
  const { props: s, children: o, component: r } = e,
    { props: i, children: c, patchFlag: u } = t,
    a = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && u >= 0) {
    if (u & 1024) return !0;
    if (u & 16) return s ? Cs(s, i, a) : !!i;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let _ = 0; _ < h.length; _++) {
        const x = h[_];
        if (i[x] !== s[x] && !on(a, x)) return !0;
      }
    }
  } else
    return (o || c) && (!c || !c.$stable)
      ? !0
      : s === i
      ? !1
      : s
      ? i
        ? Cs(s, i, a)
        : !0
      : !!i;
  return !1;
}
function Cs(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !on(n, r)) return !0;
  }
  return !1;
}
function ti({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const ni = Symbol.for("v-ndc"),
  si = (e) => e.__isSuspense;
function oi(e, t) {
  t && t.pendingBranch
    ? L(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Yr(e);
}
const ri = Symbol.for("v-scx"),
  ii = () => Ut(ri),
  jt = {};
function bn(e, t, n) {
  return Lo(e, t, n);
}
function Lo(
  e,
  t,
  { immediate: n, deep: s, flush: o, once: r, onTrack: i, onTrigger: c } = G
) {
  if (t && r) {
    const F = t;
    t = (...ce) => {
      F(...ce), Z();
    };
  }
  const u = le,
    a = (F) => (s === !0 ? F : ft(F, s === !1 ? 1 : void 0));
  let h,
    _ = !1,
    x = !1;
  if (
    (he(e)
      ? ((h = () => e.value), (_ = Jt(e)))
      : dt(e)
      ? ((h = () => a(e)), (_ = !0))
      : L(e)
      ? ((x = !0),
        (_ = e.some((F) => dt(F) || Jt(F))),
        (h = () =>
          e.map((F) => {
            if (he(F)) return F.value;
            if (dt(F)) return a(F);
            if (N(F)) return ze(F, u, 2);
          })))
      : N(e)
      ? t
        ? (h = () => ze(e, u, 2))
        : (h = () => (A && A(), be(e, u, 3, [j])))
      : (h = ye),
    t && s)
  ) {
    const F = h;
    h = () => ft(F());
  }
  let A,
    j = (F) => {
      A = $.onStop = () => {
        ze(F, u, 4), (A = $.onStop = void 0);
      };
    },
    P;
  if (an)
    if (
      ((j = ye),
      t ? n && be(t, u, 3, [h(), x ? [] : void 0, j]) : h(),
      o === "sync")
    ) {
      const F = ii();
      P = F.__watcherHandles || (F.__watcherHandles = []);
    } else return ye;
  let B = x ? new Array(e.length).fill(jt) : jt;
  const U = () => {
    if (!(!$.active || !$.dirty))
      if (t) {
        const F = $.run();
        (s || _ || (x ? F.some((ce, M) => Je(ce, B[M])) : Je(F, B))) &&
          (A && A(),
          be(t, u, 3, [F, B === jt ? void 0 : x && B[0] === jt ? [] : B, j]),
          (B = F));
      } else $.run();
  };
  U.allowRecurse = !!t;
  let oe;
  o === "sync"
    ? (oe = U)
    : o === "post"
    ? (oe = () => ae(U, u && u.suspense))
    : ((U.pre = !0), u && (U.id = u.uid), (oe = () => ns(U)));
  const $ = new Jn(h, ye, oe),
    K = yr(),
    Z = () => {
      $.stop(), K && Un(K.effects, $);
    };
  return (
    t
      ? n
        ? U()
        : (B = $.run())
      : o === "post"
      ? ae($.run.bind($), u && u.suspense)
      : $.run(),
    P && P.push(Z),
    Z
  );
}
function li(e, t, n) {
  const s = this.proxy,
    o = te(e) ? (e.includes(".") ? Oo(s, e) : () => s[e]) : e.bind(s, s);
  let r;
  N(t) ? (r = t) : ((r = t.handler), (n = t));
  const i = Ot(this),
    c = Lo(o, r.bind(s), n);
  return i(), c;
}
function Oo(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++) s = s[n[o]];
    return s;
  };
}
function ft(e, t, n = 0, s) {
  if (!Y(e) || e.__v_skip) return e;
  if (t && t > 0) {
    if (n >= t) return e;
    n++;
  }
  if (((s = s || new Set()), s.has(e))) return e;
  if ((s.add(e), he(e))) ft(e.value, t, n, s);
  else if (L(e)) for (let o = 0; o < e.length; o++) ft(e[o], t, n, s);
  else if (qs(e) || at(e))
    e.forEach((o) => {
      ft(o, t, n, s);
    });
  else if (Qs(e)) for (const o in e) ft(e[o], t, n, s);
  return e;
}
function Xe(e, t, n, s) {
  const o = e.dirs,
    r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const c = o[i];
    r && (c.oldValue = r[i].value);
    let u = c.dir[s];
    u && (rt(), be(u, n, 8, [e.el, c, e, t]), it());
  }
}
const De = Symbol("_leaveCb"),
  kt = Symbol("_enterCb");
function ci() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Ro(() => {
      e.isMounted = !0;
    }),
    $o(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const me = [Function, Array],
  Po = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: me,
    onEnter: me,
    onAfterEnter: me,
    onEnterCancelled: me,
    onBeforeLeave: me,
    onLeave: me,
    onAfterLeave: me,
    onLeaveCancelled: me,
    onBeforeAppear: me,
    onAppear: me,
    onAfterAppear: me,
    onAppearCancelled: me,
  },
  fi = {
    name: "BaseTransition",
    props: Po,
    setup(e, { slots: t }) {
      const n = Ji(),
        s = ci();
      let o;
      return () => {
        const r = t.default && No(t.default(), !0);
        if (!r || !r.length) return;
        let i = r[0];
        if (r.length > 1) {
          for (const P of r)
            if (P.type !== xe) {
              i = P;
              break;
            }
        }
        const c = k(e),
          { mode: u } = c;
        if (s.isLeaving) return xn(i);
        const a = Ts(i);
        if (!a) return xn(i);
        const h = Pn(a, c, s, n);
        Mn(a, h);
        const _ = n.subTree,
          x = _ && Ts(_);
        let A = !1;
        const { getTransitionKey: j } = a.type;
        if (j) {
          const P = j();
          o === void 0 ? (o = P) : P !== o && ((o = P), (A = !0));
        }
        if (x && x.type !== xe && (!nt(a, x) || A)) {
          const P = Pn(x, c, s, n);
          if ((Mn(x, P), u === "out-in"))
            return (
              (s.isLeaving = !0),
              (P.afterLeave = () => {
                (s.isLeaving = !1),
                  n.update.active !== !1 && ((n.effect.dirty = !0), n.update());
              }),
              xn(i)
            );
          u === "in-out" &&
            a.type !== xe &&
            (P.delayLeave = (B, U, oe) => {
              const $ = Mo(s, x);
              ($[String(x.key)] = x),
                (B[De] = () => {
                  U(), (B[De] = void 0), delete h.delayedLeave;
                }),
                (h.delayedLeave = oe);
            });
        }
        return i;
      };
    },
  },
  ui = fi;
function Mo(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function Pn(e, t, n, s) {
  const {
      appear: o,
      mode: r,
      persisted: i = !1,
      onBeforeEnter: c,
      onEnter: u,
      onAfterEnter: a,
      onEnterCancelled: h,
      onBeforeLeave: _,
      onLeave: x,
      onAfterLeave: A,
      onLeaveCancelled: j,
      onBeforeAppear: P,
      onAppear: B,
      onAfterAppear: U,
      onAppearCancelled: oe,
    } = t,
    $ = String(e.key),
    K = Mo(n, e),
    Z = (M, Q) => {
      M && be(M, s, 9, Q);
    },
    F = (M, Q) => {
      const z = Q[1];
      Z(M, Q),
        L(M) ? M.every((re) => re.length <= 1) && z() : M.length <= 1 && z();
    },
    ce = {
      mode: r,
      persisted: i,
      beforeEnter(M) {
        let Q = c;
        if (!n.isMounted)
          if (o) Q = P || c;
          else return;
        M[De] && M[De](!0);
        const z = K[$];
        z && nt(e, z) && z.el[De] && z.el[De](), Z(Q, [M]);
      },
      enter(M) {
        let Q = u,
          z = a,
          re = h;
        if (!n.isMounted)
          if (o) (Q = B || u), (z = U || a), (re = oe || h);
          else return;
        let T = !1;
        const q = (M[kt] = (pe) => {
          T ||
            ((T = !0),
            pe ? Z(re, [M]) : Z(z, [M]),
            ce.delayedLeave && ce.delayedLeave(),
            (M[kt] = void 0));
        });
        Q ? F(Q, [M, q]) : q();
      },
      leave(M, Q) {
        const z = String(e.key);
        if ((M[kt] && M[kt](!0), n.isUnmounting)) return Q();
        Z(_, [M]);
        let re = !1;
        const T = (M[De] = (q) => {
          re ||
            ((re = !0),
            Q(),
            q ? Z(j, [M]) : Z(A, [M]),
            (M[De] = void 0),
            K[z] === e && delete K[z]);
        });
        (K[z] = e), x ? F(x, [M, T]) : T();
      },
      clone(M) {
        return Pn(M, t, n, s);
      },
    };
  return ce;
}
function xn(e) {
  if (ln(e)) return (e = Ge(e)), (e.children = null), e;
}
function Ts(e) {
  return ln(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Mn(e, t) {
  e.shapeFlag & 6 && e.component
    ? Mn(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function No(e, t = !1, n) {
  let s = [],
    o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const c = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === _e
      ? (i.patchFlag & 128 && o++, (s = s.concat(No(i.children, t, c))))
      : (t || i.type !== xe) && s.push(c != null ? Ge(i, { key: c }) : i);
  }
  if (o > 1) for (let r = 0; r < s.length; r++) s[r].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */ function rn(e, t) {
  return N(e) ? ee({ name: e.name }, t, { setup: e }) : e;
}
const wt = (e) => !!e.type.__asyncLoader,
  ln = (e) => e.type.__isKeepAlive;
function ai(e, t) {
  Fo(e, "a", t);
}
function di(e, t) {
  Fo(e, "da", t);
}
function Fo(e, t, n = le) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((cn(t, s, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      ln(o.parent.vnode) && hi(s, t, n, o), (o = o.parent);
  }
}
function hi(e, t, n, s) {
  const o = cn(t, e, s, !0);
  Ho(() => {
    Un(s[t], o);
  }, n);
}
function cn(e, t, n = le, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          rt();
          const c = Ot(n),
            u = be(t, n, e, i);
          return c(), it(), u;
        });
    return s ? o.unshift(r) : o.push(r), r;
  }
}
const $e =
    (e) =>
    (t, n = le) =>
      (!an || e === "sp") && cn(e, (...s) => t(...s), n),
  pi = $e("bm"),
  Ro = $e("m"),
  gi = $e("bu"),
  mi = $e("u"),
  $o = $e("bum"),
  Ho = $e("um"),
  _i = $e("sp"),
  yi = $e("rtg"),
  bi = $e("rtc");
function xi(e, t = le) {
  cn("ec", e, t);
}
function jo(e, t, n = {}, s, o) {
  if (ue.isCE || (ue.parent && wt(ue.parent) && ue.parent.isCE))
    return t !== "default" && (n.name = t), D("slot", n, s && s());
  let r = e[t];
  r && r._c && (r._d = !1), Te();
  const i = r && ko(r(n)),
    c = rs(
      _e,
      { key: n.key || (i && i.key) || `_${t}` },
      i || (s ? s() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    !o && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]),
    r && r._c && (r._d = !0),
    c
  );
}
function ko(e) {
  return e.some((t) =>
    Xt(t) ? !(t.type === xe || (t.type === _e && !ko(t.children))) : !0
  )
    ? e
    : null;
}
const Nn = (e) => (e ? (Zo(e) ? ls(e) || e.proxy : Nn(e.parent)) : null),
  Ct = ee(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Nn(e.parent),
    $root: (e) => Nn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ss(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), ns(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = zr.bind(e.proxy)),
    $watch: (e) => li.bind(e),
  }),
  vn = (e, t) => e !== G && !e.__isScriptSetup && H(e, t),
  vi = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: o,
        props: r,
        accessCache: i,
        type: c,
        appContext: u,
      } = e;
      let a;
      if (t[0] !== "$") {
        const A = i[t];
        if (A !== void 0)
          switch (A) {
            case 1:
              return s[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (vn(s, t)) return (i[t] = 1), s[t];
          if (o !== G && H(o, t)) return (i[t] = 2), o[t];
          if ((a = e.propsOptions[0]) && H(a, t)) return (i[t] = 3), r[t];
          if (n !== G && H(n, t)) return (i[t] = 4), n[t];
          Fn && (i[t] = 0);
        }
      }
      const h = Ct[t];
      let _, x;
      if (h) return t === "$attrs" && de(e, "get", t), h(e);
      if ((_ = c.__cssModules) && (_ = _[t])) return _;
      if (n !== G && H(n, t)) return (i[t] = 4), n[t];
      if (((x = u.config.globalProperties), H(x, t))) return x[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: o, ctx: r } = e;
      return vn(o, t)
        ? ((o[t] = n), !0)
        : s !== G && H(s, t)
        ? ((s[t] = n), !0)
        : H(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: o,
          propsOptions: r,
        },
      },
      i
    ) {
      let c;
      return (
        !!n[i] ||
        (e !== G && H(e, i)) ||
        vn(t, i) ||
        ((c = r[0]) && H(c, i)) ||
        H(s, i) ||
        H(Ct, i) ||
        H(o.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : H(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Es(e) {
  return L(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Fn = !0;
function wi(e) {
  const t = ss(e),
    n = e.proxy,
    s = e.ctx;
  (Fn = !1), t.beforeCreate && As(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: r,
    methods: i,
    watch: c,
    provide: u,
    inject: a,
    created: h,
    beforeMount: _,
    mounted: x,
    beforeUpdate: A,
    updated: j,
    activated: P,
    deactivated: B,
    beforeDestroy: U,
    beforeUnmount: oe,
    destroyed: $,
    unmounted: K,
    render: Z,
    renderTracked: F,
    renderTriggered: ce,
    errorCaptured: M,
    serverPrefetch: Q,
    expose: z,
    inheritAttrs: re,
    components: T,
    directives: q,
    filters: pe,
  } = t;
  if ((a && Ci(a, s, null), i))
    for (const X in i) {
      const W = i[X];
      N(W) && (s[X] = W.bind(n));
    }
  if (o) {
    const X = o.call(n, n);
    Y(X) && (e.data = Zn(X));
  }
  if (((Fn = !0), r))
    for (const X in r) {
      const W = r[X],
        Ye = N(W) ? W.bind(n, n) : N(W.get) ? W.get.bind(n, n) : ye,
        Pt = !N(W) && N(W.set) ? W.set.bind(n) : ye,
        qe = Qi({ get: Ye, set: Pt });
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => qe.value,
        set: (Ae) => (qe.value = Ae),
      });
    }
  if (c) for (const X in c) Bo(c[X], s, n, X);
  if (u) {
    const X = N(u) ? u.call(n) : u;
    Reflect.ownKeys(X).forEach((W) => {
      Li(W, X[W]);
    });
  }
  h && As(h, e, "c");
  function ne(X, W) {
    L(W) ? W.forEach((Ye) => X(Ye.bind(n))) : W && X(W.bind(n));
  }
  if (
    (ne(pi, _),
    ne(Ro, x),
    ne(gi, A),
    ne(mi, j),
    ne(ai, P),
    ne(di, B),
    ne(xi, M),
    ne(bi, F),
    ne(yi, ce),
    ne($o, oe),
    ne(Ho, K),
    ne(_i, Q),
    L(z))
  )
    if (z.length) {
      const X = e.exposed || (e.exposed = {});
      z.forEach((W) => {
        Object.defineProperty(X, W, {
          get: () => n[W],
          set: (Ye) => (n[W] = Ye),
        });
      });
    } else e.exposed || (e.exposed = {});
  Z && e.render === ye && (e.render = Z),
    re != null && (e.inheritAttrs = re),
    T && (e.components = T),
    q && (e.directives = q);
}
function Ci(e, t, n = ye) {
  L(e) && (e = Rn(e));
  for (const s in e) {
    const o = e[s];
    let r;
    Y(o)
      ? "default" in o
        ? (r = Ut(o.from || s, o.default, !0))
        : (r = Ut(o.from || s))
      : (r = Ut(o)),
      he(r)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (i) => (r.value = i),
          })
        : (t[s] = r);
  }
}
function As(e, t, n) {
  be(L(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Bo(e, t, n, s) {
  const o = s.includes(".") ? Oo(n, s) : () => n[s];
  if (te(e)) {
    const r = t[e];
    N(r) && bn(o, r);
  } else if (N(e)) bn(o, e.bind(n));
  else if (Y(e))
    if (L(e)) e.forEach((r) => Bo(r, t, n, s));
    else {
      const r = N(e.handler) ? e.handler.bind(n) : t[e.handler];
      N(r) && bn(o, r, e);
    }
}
function ss(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: o,
      optionsCache: r,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    c = r.get(t);
  let u;
  return (
    c
      ? (u = c)
      : !o.length && !n && !s
      ? (u = t)
      : ((u = {}), o.length && o.forEach((a) => Yt(u, a, i, !0)), Yt(u, t, i)),
    Y(t) && r.set(t, u),
    u
  );
}
function Yt(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Yt(e, r, n, !0), o && o.forEach((i) => Yt(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const c = Ti[i] || (n && n[i]);
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Ti = {
  data: Ss,
  props: Is,
  emits: Is,
  methods: vt,
  computed: vt,
  beforeCreate: fe,
  created: fe,
  beforeMount: fe,
  mounted: fe,
  beforeUpdate: fe,
  updated: fe,
  beforeDestroy: fe,
  beforeUnmount: fe,
  destroyed: fe,
  unmounted: fe,
  activated: fe,
  deactivated: fe,
  errorCaptured: fe,
  serverPrefetch: fe,
  components: vt,
  directives: vt,
  watch: Ai,
  provide: Ss,
  inject: Ei,
};
function Ss(e, t) {
  return t
    ? e
      ? function () {
          return ee(
            N(e) ? e.call(this, this) : e,
            N(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Ei(e, t) {
  return vt(Rn(e), Rn(t));
}
function Rn(e) {
  if (L(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function fe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function vt(e, t) {
  return e ? ee(Object.create(null), e, t) : t;
}
function Is(e, t) {
  return e
    ? L(e) && L(t)
      ? [...new Set([...e, ...t])]
      : ee(Object.create(null), Es(e), Es(t ?? {}))
    : t;
}
function Ai(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ee(Object.create(null), e);
  for (const s in t) n[s] = fe(e[s], t[s]);
  return n;
}
function Do() {
  return {
    app: null,
    config: {
      isNativeTag: sr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Si = 0;
function Ii(e, t) {
  return function (s, o = null) {
    N(s) || (s = ee({}, s)), o != null && !Y(o) && (o = null);
    const r = Do(),
      i = new WeakSet();
    let c = !1;
    const u = (r.app = {
      _uid: Si++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: tl,
      get config() {
        return r.config;
      },
      set config(a) {},
      use(a, ...h) {
        return (
          i.has(a) ||
            (a && N(a.install)
              ? (i.add(a), a.install(u, ...h))
              : N(a) && (i.add(a), a(u, ...h))),
          u
        );
      },
      mixin(a) {
        return r.mixins.includes(a) || r.mixins.push(a), u;
      },
      component(a, h) {
        return h ? ((r.components[a] = h), u) : r.components[a];
      },
      directive(a, h) {
        return h ? ((r.directives[a] = h), u) : r.directives[a];
      },
      mount(a, h, _) {
        if (!c) {
          const x = D(s, o);
          return (
            (x.appContext = r),
            _ === !0 ? (_ = "svg") : _ === !1 && (_ = void 0),
            h && t ? t(x, a) : e(x, a, _),
            (c = !0),
            (u._container = a),
            (a.__vue_app__ = u),
            ls(x.component) || x.component.proxy
          );
        }
      },
      unmount() {
        c && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, h) {
        return (r.provides[a] = h), u;
      },
      runWithContext(a) {
        qt = u;
        try {
          return a();
        } finally {
          qt = null;
        }
      },
    });
    return u;
  };
}
let qt = null;
function Li(e, t) {
  if (le) {
    let n = le.provides;
    const s = le.parent && le.parent.provides;
    s === n && (n = le.provides = Object.create(s)), (n[e] = t);
  }
}
function Ut(e, t, n = !1) {
  const s = le || ue;
  if (s || qt) {
    const o = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : qt._context.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && N(t) ? t.call(s && s.proxy) : t;
  }
}
function Oi(e, t, n, s = !1) {
  const o = {},
    r = {};
  zt(r, un, 1), (e.propsDefaults = Object.create(null)), Vo(e, t, o, r);
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
  n ? (e.props = s ? o : jr(o)) : e.type.props ? (e.props = o) : (e.props = r),
    (e.attrs = r);
}
function Pi(e, t, n, s) {
  const {
      props: o,
      attrs: r,
      vnode: { patchFlag: i },
    } = e,
    c = k(o),
    [u] = e.propsOptions;
  let a = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let _ = 0; _ < h.length; _++) {
        let x = h[_];
        if (on(e.emitsOptions, x)) continue;
        const A = t[x];
        if (u)
          if (H(r, x)) A !== r[x] && ((r[x] = A), (a = !0));
          else {
            const j = pt(x);
            o[j] = $n(u, c, j, A, e, !1);
          }
        else A !== r[x] && ((r[x] = A), (a = !0));
      }
    }
  } else {
    Vo(e, t, o, r) && (a = !0);
    let h;
    for (const _ in c)
      (!t || (!H(t, _) && ((h = _t(_)) === _ || !H(t, h)))) &&
        (u
          ? n &&
            (n[_] !== void 0 || n[h] !== void 0) &&
            (o[_] = $n(u, c, _, void 0, e, !0))
          : delete o[_]);
    if (r !== c) for (const _ in r) (!t || !H(t, _)) && (delete r[_], (a = !0));
  }
  a && Re(e, "set", "$attrs");
}
function Vo(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1,
    c;
  if (t)
    for (let u in t) {
      if (Dt(u)) continue;
      const a = t[u];
      let h;
      o && H(o, (h = pt(u)))
        ? !r || !r.includes(h)
          ? (n[h] = a)
          : ((c || (c = {}))[h] = a)
        : on(e.emitsOptions, u) ||
          ((!(u in s) || a !== s[u]) && ((s[u] = a), (i = !0)));
    }
  if (r) {
    const u = k(n),
      a = c || G;
    for (let h = 0; h < r.length; h++) {
      const _ = r[h];
      n[_] = $n(o, u, _, a[_], e, !H(a, _));
    }
  }
  return i;
}
function $n(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const c = H(i, "default");
    if (c && s === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && N(u)) {
        const { propsDefaults: a } = o;
        if (n in a) s = a[n];
        else {
          const h = Ot(o);
          (s = a[n] = u.call(null, t)), h();
        }
      } else s = u;
    }
    i[0] &&
      (r && !c ? (s = !1) : i[1] && (s === "" || s === _t(n)) && (s = !0));
  }
  return s;
}
function Uo(e, t, n = !1) {
  const s = t.propsCache,
    o = s.get(e);
  if (o) return o;
  const r = e.props,
    i = {},
    c = [];
  let u = !1;
  if (!N(e)) {
    const h = (_) => {
      u = !0;
      const [x, A] = Uo(_, t, !0);
      ee(i, x), A && c.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(h),
      e.extends && h(e.extends),
      e.mixins && e.mixins.forEach(h);
  }
  if (!r && !u) return Y(e) && s.set(e, ut), ut;
  if (L(r))
    for (let h = 0; h < r.length; h++) {
      const _ = pt(r[h]);
      Ls(_) && (i[_] = G);
    }
  else if (r)
    for (const h in r) {
      const _ = pt(h);
      if (Ls(_)) {
        const x = r[h],
          A = (i[_] = L(x) || N(x) ? { type: x } : ee({}, x));
        if (A) {
          const j = Ms(Boolean, A.type),
            P = Ms(String, A.type);
          (A[0] = j > -1),
            (A[1] = P < 0 || j < P),
            (j > -1 || H(A, "default")) && c.push(_);
        }
      }
    }
  const a = [i, c];
  return Y(e) && s.set(e, a), a;
}
function Ls(e) {
  return e[0] !== "$";
}
function Os(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Ps(e, t) {
  return Os(e) === Os(t);
}
function Ms(e, t) {
  return L(t) ? t.findIndex((n) => Ps(n, e)) : N(t) && Ps(t, e) ? 0 : -1;
}
const Ko = (e) => e[0] === "_" || e === "$stable",
  os = (e) => (L(e) ? e.map(Le) : [Le(e)]),
  Mi = (e, t, n) => {
    if (t._n) return t;
    const s = Ce((...o) => os(t(...o)), n);
    return (s._c = !1), s;
  },
  Wo = (e, t, n) => {
    const s = e._ctx;
    for (const o in e) {
      if (Ko(o)) continue;
      const r = e[o];
      if (N(r)) t[o] = Mi(o, r, s);
      else if (r != null) {
        const i = os(r);
        t[o] = () => i;
      }
    }
  },
  zo = (e, t) => {
    const n = os(t);
    e.slots.default = () => n;
  },
  Ni = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = k(t)), zt(t, "_", n)) : Wo(t, (e.slots = {}));
    } else (e.slots = {}), t && zo(e, t);
    zt(e.slots, un, 1);
  },
  Fi = (e, t, n) => {
    const { vnode: s, slots: o } = e;
    let r = !0,
      i = G;
    if (s.shapeFlag & 32) {
      const c = t._;
      c
        ? n && c === 1
          ? (r = !1)
          : (ee(o, t), !n && c === 1 && delete o._)
        : ((r = !t.$stable), Wo(t, o)),
        (i = t);
    } else t && (zo(e, t), (i = { default: 1 }));
    if (r) for (const c in o) !Ko(c) && i[c] == null && delete o[c];
  };
function Hn(e, t, n, s, o = !1) {
  if (L(e)) {
    e.forEach((x, A) => Hn(x, t && (L(t) ? t[A] : t), n, s, o));
    return;
  }
  if (wt(s) && !o) return;
  const r = s.shapeFlag & 4 ? ls(s.component) || s.component.proxy : s.el,
    i = o ? null : r,
    { i: c, r: u } = e,
    a = t && t.r,
    h = c.refs === G ? (c.refs = {}) : c.refs,
    _ = c.setupState;
  if (
    (a != null &&
      a !== u &&
      (te(a)
        ? ((h[a] = null), H(_, a) && (_[a] = null))
        : he(a) && (a.value = null)),
    N(u))
  )
    ze(u, c, 12, [i, h]);
  else {
    const x = te(u),
      A = he(u),
      j = e.f;
    if (x || A) {
      const P = () => {
        if (j) {
          const B = x ? (H(_, u) ? _[u] : h[u]) : u.value;
          o
            ? L(B) && Un(B, r)
            : L(B)
            ? B.includes(r) || B.push(r)
            : x
            ? ((h[u] = [r]), H(_, u) && (_[u] = h[u]))
            : ((u.value = [r]), e.k && (h[e.k] = u.value));
        } else
          x
            ? ((h[u] = i), H(_, u) && (_[u] = i))
            : A && ((u.value = i), e.k && (h[e.k] = i));
      };
      o || j ? P() : ((P.id = -1), ae(P, n));
    }
  }
}
const ae = oi;
function Ri(e) {
  return $i(e);
}
function $i(e, t) {
  const n = to();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: o,
      patchProp: r,
      createElement: i,
      createText: c,
      createComment: u,
      setText: a,
      setElementText: h,
      parentNode: _,
      nextSibling: x,
      setScopeId: A = ye,
      insertStaticContent: j,
    } = e,
    P = (
      l,
      f,
      d,
      p = null,
      g = null,
      b = null,
      w = void 0,
      y = null,
      v = !!f.dynamicChildren
    ) => {
      if (l === f) return;
      l && !nt(l, f) && ((p = Mt(l)), Ae(l, g, b, !0), (l = null)),
        f.patchFlag === -2 && ((v = !1), (f.dynamicChildren = null));
      const { type: m, ref: C, shapeFlag: S } = f;
      switch (m) {
        case fn:
          B(l, f, d, p);
          break;
        case xe:
          U(l, f, d, p);
          break;
        case Kt:
          l == null && oe(f, d, p, w);
          break;
        case _e:
          T(l, f, d, p, g, b, w, y, v);
          break;
        default:
          S & 1
            ? Z(l, f, d, p, g, b, w, y, v)
            : S & 6
            ? q(l, f, d, p, g, b, w, y, v)
            : (S & 64 || S & 128) && m.process(l, f, d, p, g, b, w, y, v, lt);
      }
      C != null && g && Hn(C, l && l.ref, b, f || l, !f);
    },
    B = (l, f, d, p) => {
      if (l == null) s((f.el = c(f.children)), d, p);
      else {
        const g = (f.el = l.el);
        f.children !== l.children && a(g, f.children);
      }
    },
    U = (l, f, d, p) => {
      l == null ? s((f.el = u(f.children || "")), d, p) : (f.el = l.el);
    },
    oe = (l, f, d, p) => {
      [l.el, l.anchor] = j(l.children, f, d, p, l.el, l.anchor);
    },
    $ = ({ el: l, anchor: f }, d, p) => {
      let g;
      for (; l && l !== f; ) (g = x(l)), s(l, d, p), (l = g);
      s(f, d, p);
    },
    K = ({ el: l, anchor: f }) => {
      let d;
      for (; l && l !== f; ) (d = x(l)), o(l), (l = d);
      o(f);
    },
    Z = (l, f, d, p, g, b, w, y, v) => {
      f.type === "svg" ? (w = "svg") : f.type === "math" && (w = "mathml"),
        l == null ? F(f, d, p, g, b, w, y, v) : Q(l, f, g, b, w, y, v);
    },
    F = (l, f, d, p, g, b, w, y) => {
      let v, m;
      const { props: C, shapeFlag: S, transition: E, dirs: O } = l;
      if (
        ((v = l.el = i(l.type, b, C && C.is, C)),
        S & 8
          ? h(v, l.children)
          : S & 16 && M(l.children, v, null, p, g, wn(l, b), w, y),
        O && Xe(l, null, p, "created"),
        ce(v, l, l.scopeId, w, p),
        C)
      ) {
        for (const V in C)
          V !== "value" &&
            !Dt(V) &&
            r(v, V, null, C[V], b, l.children, p, g, Me);
        "value" in C && r(v, "value", null, C.value, b),
          (m = C.onVnodeBeforeMount) && Ie(m, p, l);
      }
      O && Xe(l, null, p, "beforeMount");
      const R = Hi(g, E);
      R && E.beforeEnter(v),
        s(v, f, d),
        ((m = C && C.onVnodeMounted) || R || O) &&
          ae(() => {
            m && Ie(m, p, l), R && E.enter(v), O && Xe(l, null, p, "mounted");
          }, g);
    },
    ce = (l, f, d, p, g) => {
      if ((d && A(l, d), p)) for (let b = 0; b < p.length; b++) A(l, p[b]);
      if (g) {
        let b = g.subTree;
        if (f === b) {
          const w = g.vnode;
          ce(l, w, w.scopeId, w.slotScopeIds, g.parent);
        }
      }
    },
    M = (l, f, d, p, g, b, w, y, v = 0) => {
      for (let m = v; m < l.length; m++) {
        const C = (l[m] = y ? Ve(l[m]) : Le(l[m]));
        P(null, C, f, d, p, g, b, w, y);
      }
    },
    Q = (l, f, d, p, g, b, w) => {
      const y = (f.el = l.el);
      let { patchFlag: v, dynamicChildren: m, dirs: C } = f;
      v |= l.patchFlag & 16;
      const S = l.props || G,
        E = f.props || G;
      let O;
      if (
        (d && Ze(d, !1),
        (O = E.onVnodeBeforeUpdate) && Ie(O, d, f, l),
        C && Xe(f, l, d, "beforeUpdate"),
        d && Ze(d, !0),
        m
          ? z(l.dynamicChildren, m, y, d, p, wn(f, g), b)
          : w || W(l, f, y, null, d, p, wn(f, g), b, !1),
        v > 0)
      ) {
        if (v & 16) re(y, f, S, E, d, p, g);
        else if (
          (v & 2 && S.class !== E.class && r(y, "class", null, E.class, g),
          v & 4 && r(y, "style", S.style, E.style, g),
          v & 8)
        ) {
          const R = f.dynamicProps;
          for (let V = 0; V < R.length; V++) {
            const J = R[V],
              se = S[J],
              ve = E[J];
            (ve !== se || J === "value") &&
              r(y, J, se, ve, g, l.children, d, p, Me);
          }
        }
        v & 1 && l.children !== f.children && h(y, f.children);
      } else !w && m == null && re(y, f, S, E, d, p, g);
      ((O = E.onVnodeUpdated) || C) &&
        ae(() => {
          O && Ie(O, d, f, l), C && Xe(f, l, d, "updated");
        }, p);
    },
    z = (l, f, d, p, g, b, w) => {
      for (let y = 0; y < f.length; y++) {
        const v = l[y],
          m = f[y],
          C =
            v.el && (v.type === _e || !nt(v, m) || v.shapeFlag & 70)
              ? _(v.el)
              : d;
        P(v, m, C, null, p, g, b, w, !0);
      }
    },
    re = (l, f, d, p, g, b, w) => {
      if (d !== p) {
        if (d !== G)
          for (const y in d)
            !Dt(y) && !(y in p) && r(l, y, d[y], null, w, f.children, g, b, Me);
        for (const y in p) {
          if (Dt(y)) continue;
          const v = p[y],
            m = d[y];
          v !== m && y !== "value" && r(l, y, m, v, w, f.children, g, b, Me);
        }
        "value" in p && r(l, "value", d.value, p.value, w);
      }
    },
    T = (l, f, d, p, g, b, w, y, v) => {
      const m = (f.el = l ? l.el : c("")),
        C = (f.anchor = l ? l.anchor : c(""));
      let { patchFlag: S, dynamicChildren: E, slotScopeIds: O } = f;
      O && (y = y ? y.concat(O) : O),
        l == null
          ? (s(m, d, p), s(C, d, p), M(f.children || [], d, C, g, b, w, y, v))
          : S > 0 && S & 64 && E && l.dynamicChildren
          ? (z(l.dynamicChildren, E, d, g, b, w, y),
            (f.key != null || (g && f === g.subTree)) && Jo(l, f, !0))
          : W(l, f, d, C, g, b, w, y, v);
    },
    q = (l, f, d, p, g, b, w, y, v) => {
      (f.slotScopeIds = y),
        l == null
          ? f.shapeFlag & 512
            ? g.ctx.activate(f, d, p, w, v)
            : pe(f, d, p, g, b, w, v)
          : yt(l, f, v);
    },
    pe = (l, f, d, p, g, b, w) => {
      const y = (l.component = zi(l, p, g));
      if ((ln(l) && (y.ctx.renderer = lt), Gi(y), y.asyncDep)) {
        if ((g && g.registerDep(y, ne), !l.el)) {
          const v = (y.subTree = D(xe));
          U(null, v, f, d);
        }
      } else ne(y, l, f, d, g, b, w);
    },
    yt = (l, f, d) => {
      const p = (f.component = l.component);
      if (ei(l, f, d))
        if (p.asyncDep && !p.asyncResolved) {
          X(p, f, d);
          return;
        } else (p.next = f), Gr(p.update), (p.effect.dirty = !0), p.update();
      else (f.el = l.el), (p.vnode = f);
    },
    ne = (l, f, d, p, g, b, w) => {
      const y = () => {
          if (l.isMounted) {
            let { next: C, bu: S, u: E, parent: O, vnode: R } = l;
            {
              const ct = Go(l);
              if (ct) {
                C && ((C.el = R.el), X(l, C, w)),
                  ct.asyncDep.then(() => {
                    l.isUnmounted || y();
                  });
                return;
              }
            }
            let V = C,
              J;
            Ze(l, !1),
              C ? ((C.el = R.el), X(l, C, w)) : (C = R),
              S && mn(S),
              (J = C.props && C.props.onVnodeBeforeUpdate) && Ie(J, O, C, R),
              Ze(l, !0);
            const se = yn(l),
              ve = l.subTree;
            (l.subTree = se),
              P(ve, se, _(ve.el), Mt(ve), l, g, b),
              (C.el = se.el),
              V === null && ti(l, se.el),
              E && ae(E, g),
              (J = C.props && C.props.onVnodeUpdated) &&
                ae(() => Ie(J, O, C, R), g);
          } else {
            let C;
            const { el: S, props: E } = f,
              { bm: O, m: R, parent: V } = l,
              J = wt(f);
            if (
              (Ze(l, !1),
              O && mn(O),
              !J && (C = E && E.onVnodeBeforeMount) && Ie(C, V, f),
              Ze(l, !0),
              S && pn)
            ) {
              const se = () => {
                (l.subTree = yn(l)), pn(S, l.subTree, l, g, null);
              };
              J
                ? f.type.__asyncLoader().then(() => !l.isUnmounted && se())
                : se();
            } else {
              const se = (l.subTree = yn(l));
              P(null, se, d, p, l, g, b), (f.el = se.el);
            }
            if ((R && ae(R, g), !J && (C = E && E.onVnodeMounted))) {
              const se = f;
              ae(() => Ie(C, V, se), g);
            }
            (f.shapeFlag & 256 ||
              (V && wt(V.vnode) && V.vnode.shapeFlag & 256)) &&
              l.a &&
              ae(l.a, g),
              (l.isMounted = !0),
              (f = d = p = null);
          }
        },
        v = (l.effect = new Jn(y, ye, () => ns(m), l.scope)),
        m = (l.update = () => {
          v.dirty && v.run();
        });
      (m.id = l.uid), Ze(l, !0), m();
    },
    X = (l, f, d) => {
      f.component = l;
      const p = l.vnode.props;
      (l.vnode = f),
        (l.next = null),
        Pi(l, f.props, p, d),
        Fi(l, f.children, d),
        rt(),
        ws(l),
        it();
    },
    W = (l, f, d, p, g, b, w, y, v = !1) => {
      const m = l && l.children,
        C = l ? l.shapeFlag : 0,
        S = f.children,
        { patchFlag: E, shapeFlag: O } = f;
      if (E > 0) {
        if (E & 128) {
          Pt(m, S, d, p, g, b, w, y, v);
          return;
        } else if (E & 256) {
          Ye(m, S, d, p, g, b, w, y, v);
          return;
        }
      }
      O & 8
        ? (C & 16 && Me(m, g, b), S !== m && h(d, S))
        : C & 16
        ? O & 16
          ? Pt(m, S, d, p, g, b, w, y, v)
          : Me(m, g, b, !0)
        : (C & 8 && h(d, ""), O & 16 && M(S, d, p, g, b, w, y, v));
    },
    Ye = (l, f, d, p, g, b, w, y, v) => {
      (l = l || ut), (f = f || ut);
      const m = l.length,
        C = f.length,
        S = Math.min(m, C);
      let E;
      for (E = 0; E < S; E++) {
        const O = (f[E] = v ? Ve(f[E]) : Le(f[E]));
        P(l[E], O, d, null, g, b, w, y, v);
      }
      m > C ? Me(l, g, b, !0, !1, S) : M(f, d, p, g, b, w, y, v, S);
    },
    Pt = (l, f, d, p, g, b, w, y, v) => {
      let m = 0;
      const C = f.length;
      let S = l.length - 1,
        E = C - 1;
      for (; m <= S && m <= E; ) {
        const O = l[m],
          R = (f[m] = v ? Ve(f[m]) : Le(f[m]));
        if (nt(O, R)) P(O, R, d, null, g, b, w, y, v);
        else break;
        m++;
      }
      for (; m <= S && m <= E; ) {
        const O = l[S],
          R = (f[E] = v ? Ve(f[E]) : Le(f[E]));
        if (nt(O, R)) P(O, R, d, null, g, b, w, y, v);
        else break;
        S--, E--;
      }
      if (m > S) {
        if (m <= E) {
          const O = E + 1,
            R = O < C ? f[O].el : p;
          for (; m <= E; )
            P(null, (f[m] = v ? Ve(f[m]) : Le(f[m])), d, R, g, b, w, y, v), m++;
        }
      } else if (m > E) for (; m <= S; ) Ae(l[m], g, b, !0), m++;
      else {
        const O = m,
          R = m,
          V = new Map();
        for (m = R; m <= E; m++) {
          const ge = (f[m] = v ? Ve(f[m]) : Le(f[m]));
          ge.key != null && V.set(ge.key, m);
        }
        let J,
          se = 0;
        const ve = E - R + 1;
        let ct = !1,
          as = 0;
        const bt = new Array(ve);
        for (m = 0; m < ve; m++) bt[m] = 0;
        for (m = O; m <= S; m++) {
          const ge = l[m];
          if (se >= ve) {
            Ae(ge, g, b, !0);
            continue;
          }
          let Se;
          if (ge.key != null) Se = V.get(ge.key);
          else
            for (J = R; J <= E; J++)
              if (bt[J - R] === 0 && nt(ge, f[J])) {
                Se = J;
                break;
              }
          Se === void 0
            ? Ae(ge, g, b, !0)
            : ((bt[Se - R] = m + 1),
              Se >= as ? (as = Se) : (ct = !0),
              P(ge, f[Se], d, null, g, b, w, y, v),
              se++);
        }
        const ds = ct ? ji(bt) : ut;
        for (J = ds.length - 1, m = ve - 1; m >= 0; m--) {
          const ge = R + m,
            Se = f[ge],
            hs = ge + 1 < C ? f[ge + 1].el : p;
          bt[m] === 0
            ? P(null, Se, d, hs, g, b, w, y, v)
            : ct && (J < 0 || m !== ds[J] ? qe(Se, d, hs, 2) : J--);
        }
      }
    },
    qe = (l, f, d, p, g = null) => {
      const { el: b, type: w, transition: y, children: v, shapeFlag: m } = l;
      if (m & 6) {
        qe(l.component.subTree, f, d, p);
        return;
      }
      if (m & 128) {
        l.suspense.move(f, d, p);
        return;
      }
      if (m & 64) {
        w.move(l, f, d, lt);
        return;
      }
      if (w === _e) {
        s(b, f, d);
        for (let S = 0; S < v.length; S++) qe(v[S], f, d, p);
        s(l.anchor, f, d);
        return;
      }
      if (w === Kt) {
        $(l, f, d);
        return;
      }
      if (p !== 2 && m & 1 && y)
        if (p === 0) y.beforeEnter(b), s(b, f, d), ae(() => y.enter(b), g);
        else {
          const { leave: S, delayLeave: E, afterLeave: O } = y,
            R = () => s(b, f, d),
            V = () => {
              S(b, () => {
                R(), O && O();
              });
            };
          E ? E(b, R, V) : V();
        }
      else s(b, f, d);
    },
    Ae = (l, f, d, p = !1, g = !1) => {
      const {
        type: b,
        props: w,
        ref: y,
        children: v,
        dynamicChildren: m,
        shapeFlag: C,
        patchFlag: S,
        dirs: E,
      } = l;
      if ((y != null && Hn(y, null, d, l, !0), C & 256)) {
        f.ctx.deactivate(l);
        return;
      }
      const O = C & 1 && E,
        R = !wt(l);
      let V;
      if ((R && (V = w && w.onVnodeBeforeUnmount) && Ie(V, f, l), C & 6))
        nr(l.component, d, p);
      else {
        if (C & 128) {
          l.suspense.unmount(d, p);
          return;
        }
        O && Xe(l, null, f, "beforeUnmount"),
          C & 64
            ? l.type.remove(l, f, d, g, lt, p)
            : m && (b !== _e || (S > 0 && S & 64))
            ? Me(m, f, d, !1, !0)
            : ((b === _e && S & 384) || (!g && C & 16)) && Me(v, f, d),
          p && fs(l);
      }
      ((R && (V = w && w.onVnodeUnmounted)) || O) &&
        ae(() => {
          V && Ie(V, f, l), O && Xe(l, null, f, "unmounted");
        }, d);
    },
    fs = (l) => {
      const { type: f, el: d, anchor: p, transition: g } = l;
      if (f === _e) {
        tr(d, p);
        return;
      }
      if (f === Kt) {
        K(l);
        return;
      }
      const b = () => {
        o(d), g && !g.persisted && g.afterLeave && g.afterLeave();
      };
      if (l.shapeFlag & 1 && g && !g.persisted) {
        const { leave: w, delayLeave: y } = g,
          v = () => w(d, b);
        y ? y(l.el, b, v) : v();
      } else b();
    },
    tr = (l, f) => {
      let d;
      for (; l !== f; ) (d = x(l)), o(l), (l = d);
      o(f);
    },
    nr = (l, f, d) => {
      const { bum: p, scope: g, update: b, subTree: w, um: y } = l;
      p && mn(p),
        g.stop(),
        b && ((b.active = !1), Ae(w, l, f, d)),
        y && ae(y, f),
        ae(() => {
          l.isUnmounted = !0;
        }, f),
        f &&
          f.pendingBranch &&
          !f.isUnmounted &&
          l.asyncDep &&
          !l.asyncResolved &&
          l.suspenseId === f.pendingId &&
          (f.deps--, f.deps === 0 && f.resolve());
    },
    Me = (l, f, d, p = !1, g = !1, b = 0) => {
      for (let w = b; w < l.length; w++) Ae(l[w], f, d, p, g);
    },
    Mt = (l) =>
      l.shapeFlag & 6
        ? Mt(l.component.subTree)
        : l.shapeFlag & 128
        ? l.suspense.next()
        : x(l.anchor || l.el);
  let dn = !1;
  const us = (l, f, d) => {
      l == null
        ? f._vnode && Ae(f._vnode, null, null, !0)
        : P(f._vnode || null, l, f, null, null, null, d),
        dn || ((dn = !0), ws(), Eo(), (dn = !1)),
        (f._vnode = l);
    },
    lt = {
      p: P,
      um: Ae,
      m: qe,
      r: fs,
      mt: pe,
      mc: M,
      pc: W,
      pbc: z,
      n: Mt,
      o: e,
    };
  let hn, pn;
  return (
    t && ([hn, pn] = t(lt)), { render: us, hydrate: hn, createApp: Ii(us, hn) }
  );
}
function wn({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Ze({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Hi(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Jo(e, t, n = !1) {
  const s = e.children,
    o = t.children;
  if (L(s) && L(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let c = o[r];
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) &&
          ((c = o[r] = Ve(o[r])), (c.el = i.el)),
        n || Jo(i, c)),
        c.type === fn && (c.el = i.el);
    }
}
function ji(e) {
  const t = e.slice(),
    n = [0];
  let s, o, r, i, c;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const a = e[s];
    if (a !== 0) {
      if (((o = n[n.length - 1]), e[o] < a)) {
        (t[s] = o), n.push(s);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        (c = (r + i) >> 1), e[n[c]] < a ? (r = c + 1) : (i = c);
      a < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), (n[r] = s));
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; ) (n[r] = i), (i = t[i]);
  return n;
}
function Go(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Go(t);
}
const ki = (e) => e.__isTeleport,
  _e = Symbol.for("v-fgt"),
  fn = Symbol.for("v-txt"),
  xe = Symbol.for("v-cmt"),
  Kt = Symbol.for("v-stc"),
  Tt = [];
let Ee = null;
function Te(e = !1) {
  Tt.push((Ee = e ? null : []));
}
function Bi() {
  Tt.pop(), (Ee = Tt[Tt.length - 1] || null);
}
let It = 1;
function Ns(e) {
  It += e;
}
function Yo(e) {
  return (
    (e.dynamicChildren = It > 0 ? Ee || ut : null),
    Bi(),
    It > 0 && Ee && Ee.push(e),
    e
  );
}
function Ke(e, t, n, s, o, r) {
  return Yo(I(e, t, n, s, o, r, !0));
}
function rs(e, t, n, s, o) {
  return Yo(D(e, t, n, s, o, !0));
}
function Xt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function nt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const un = "__vInternal",
  qo = ({ key: e }) => e ?? null,
  Wt = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? te(e) || he(e) || N(e)
        ? { i: ue, r: e, k: t, f: !!n }
        : e
      : null
  );
function I(
  e,
  t = null,
  n = null,
  s = 0,
  o = null,
  r = e === _e ? 0 : 1,
  i = !1,
  c = !1
) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && qo(t),
    ref: t && Wt(t),
    scopeId: Io,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ue,
  };
  return (
    c
      ? (is(u, n), r & 128 && e.normalize(u))
      : n && (u.shapeFlag |= te(n) ? 8 : 16),
    It > 0 &&
      !i &&
      Ee &&
      (u.patchFlag > 0 || r & 6) &&
      u.patchFlag !== 32 &&
      Ee.push(u),
    u
  );
}
const D = Di;
function Di(e, t = null, n = null, s = 0, o = null, r = !1) {
  if (((!e || e === ni) && (e = xe), Xt(e))) {
    const c = Ge(e, t, !0);
    return (
      n && is(c, n),
      It > 0 &&
        !r &&
        Ee &&
        (c.shapeFlag & 6 ? (Ee[Ee.indexOf(e)] = c) : Ee.push(c)),
      (c.patchFlag |= -2),
      c
    );
  }
  if ((Zi(e) && (e = e.__vccOpts), t)) {
    t = Vi(t);
    let { class: c, style: u } = t;
    c && !te(c) && (t.class = zn(c)),
      Y(u) && (yo(u) && !L(u) && (u = ee({}, u)), (t.style = Wn(u)));
  }
  const i = te(e) ? 1 : si(e) ? 128 : ki(e) ? 64 : Y(e) ? 4 : N(e) ? 2 : 0;
  return I(e, t, n, s, o, i, r, !0);
}
function Vi(e) {
  return e ? (yo(e) || un in e ? ee({}, e) : e) : null;
}
function Ge(e, t, n = !1) {
  const { props: s, ref: o, patchFlag: r, children: i } = e,
    c = t ? Ui(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && qo(c),
    ref:
      t && t.ref ? (n && o ? (L(o) ? o.concat(Wt(t)) : [o, Wt(t)]) : Wt(t)) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== _e ? (r === -1 ? 16 : r | 16) : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ge(e.ssContent),
    ssFallback: e.ssFallback && Ge(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function Pe(e = " ", t = 0) {
  return D(fn, null, e, t);
}
function Xo(e, t) {
  const n = D(Kt, null, e);
  return (n.staticCount = t), n;
}
function jn(e = "", t = !1) {
  return t ? (Te(), rs(xe, null, e)) : D(xe, null, e);
}
function Le(e) {
  return e == null || typeof e == "boolean"
    ? D(xe)
    : L(e)
    ? D(_e, null, e.slice())
    : typeof e == "object"
    ? Ve(e)
    : D(fn, null, String(e));
}
function Ve(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ge(e);
}
function is(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (L(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), is(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(un in t)
        ? (t._ctx = ue)
        : o === 3 &&
          ue &&
          (ue.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    N(t)
      ? ((t = { default: t, _ctx: ue }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Pe(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Ui(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = zn([t.class, s.class]));
      else if (o === "style") t.style = Wn([t.style, s.style]);
      else if (Qt(o)) {
        const r = t[o],
          i = s[o];
        i &&
          r !== i &&
          !(L(r) && r.includes(i)) &&
          (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Ie(e, t, n, s = null) {
  be(e, t, 7, [n, s]);
}
const Ki = Do();
let Wi = 0;
function zi(e, t, n) {
  const s = e.type,
    o = (t ? t.appContext : e.appContext) || Ki,
    r = {
      uid: Wi++,
      vnode: e,
      type: s,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new mr(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Uo(s, o),
      emitsOptions: So(s, o),
      emit: null,
      emitted: null,
      propsDefaults: G,
      inheritAttrs: s.inheritAttrs,
      ctx: G,
      data: G,
      props: G,
      attrs: G,
      slots: G,
      refs: G,
      setupState: G,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = Xr.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let le = null;
const Ji = () => le || ue;
let Zt, kn;
{
  const e = to(),
    t = (n, s) => {
      let o;
      return (
        (o = e[n]) || (o = e[n] = []),
        o.push(s),
        (r) => {
          o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
        }
      );
    };
  (Zt = t("__VUE_INSTANCE_SETTERS__", (n) => (le = n))),
    (kn = t("__VUE_SSR_SETTERS__", (n) => (an = n)));
}
const Ot = (e) => {
    const t = le;
    return (
      Zt(e),
      e.scope.on(),
      () => {
        e.scope.off(), Zt(t);
      }
    );
  },
  Fs = () => {
    le && le.scope.off(), Zt(null);
  };
function Zo(e) {
  return e.vnode.shapeFlag & 4;
}
let an = !1;
function Gi(e, t = !1) {
  t && kn(t);
  const { props: n, children: s } = e.vnode,
    o = Zo(e);
  Oi(e, n, o, t), Ni(e, s);
  const r = o ? Yi(e, t) : void 0;
  return t && kn(!1), r;
}
function Yi(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = bo(new Proxy(e.ctx, vi)));
  const { setup: s } = n;
  if (s) {
    const o = (e.setupContext = s.length > 1 ? Xi(e) : null),
      r = Ot(e);
    rt();
    const i = ze(s, e, 0, [e.props, o]);
    if ((it(), r(), Xs(i))) {
      if ((i.then(Fs, Fs), t))
        return i
          .then((c) => {
            Rs(e, c, t);
          })
          .catch((c) => {
            sn(c, e, 0);
          });
      e.asyncDep = i;
    } else Rs(e, i, t);
  } else Qo(e, t);
}
function Rs(e, t, n) {
  N(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Y(t) && (e.setupState = wo(t)),
    Qo(e, n);
}
let $s;
function Qo(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && $s && !s.render) {
      const o = s.template || ss(e).template;
      if (o) {
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config,
          { delimiters: c, compilerOptions: u } = s,
          a = ee(ee({ isCustomElement: r, delimiters: c }, i), u);
        s.render = $s(o, a);
      }
    }
    e.render = s.render || ye;
  }
  {
    const o = Ot(e);
    rt();
    try {
      wi(e);
    } finally {
      it(), o();
    }
  }
}
function qi(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return de(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function Xi(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return qi(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function ls(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(wo(bo(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Ct) return Ct[n](e);
        },
        has(t, n) {
          return n in t || n in Ct;
        },
      }))
    );
}
function Zi(e) {
  return N(e) && "__vccOpts" in e;
}
const Qi = (e, t) => kr(e, t, an);
function el(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? Y(t) && !L(t)
      ? Xt(t)
        ? D(e, null, [t])
        : D(e, t)
      : D(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Xt(n) && (n = [n]),
      D(e, t, n));
}
const tl = "3.4.15";
/**
 * @vue/runtime-dom v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const nl = "http://www.w3.org/2000/svg",
  sl = "http://www.w3.org/1998/Math/MathML",
  Ue = typeof document < "u" ? document : null,
  Hs = Ue && Ue.createElement("template"),
  ol = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const o =
        t === "svg"
          ? Ue.createElementNS(nl, e)
          : t === "mathml"
          ? Ue.createElementNS(sl, e)
          : Ue.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          o.setAttribute("multiple", s.multiple),
        o
      );
    },
    createText: (e) => Ue.createTextNode(e),
    createComment: (e) => Ue.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ue.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, o, r) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === r || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n),
            !(o === r || !(o = o.nextSibling));

        );
      else {
        Hs.innerHTML =
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
            ? `<math>${e}</math>`
            : e;
        const c = Hs.content;
        if (s === "svg" || s === "mathml") {
          const u = c.firstChild;
          for (; u.firstChild; ) c.appendChild(u.firstChild);
          c.removeChild(u);
        }
        t.insertBefore(c, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  je = "transition",
  xt = "animation",
  Lt = Symbol("_vtc"),
  cs = (e, { slots: t }) => el(ui, rl(e), t);
cs.displayName = "Transition";
const er = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
cs.props = ee({}, Po, er);
const Qe = (e, t = []) => {
    L(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  js = (e) => (e ? (L(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function rl(e) {
  const t = {};
  for (const T in e) T in er || (t[T] = e[T]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: s,
      duration: o,
      enterFromClass: r = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: c = `${n}-enter-to`,
      appearFromClass: u = r,
      appearActiveClass: a = i,
      appearToClass: h = c,
      leaveFromClass: _ = `${n}-leave-from`,
      leaveActiveClass: x = `${n}-leave-active`,
      leaveToClass: A = `${n}-leave-to`,
    } = e,
    j = il(o),
    P = j && j[0],
    B = j && j[1],
    {
      onBeforeEnter: U,
      onEnter: oe,
      onEnterCancelled: $,
      onLeave: K,
      onLeaveCancelled: Z,
      onBeforeAppear: F = U,
      onAppear: ce = oe,
      onAppearCancelled: M = $,
    } = t,
    Q = (T, q, pe) => {
      et(T, q ? h : c), et(T, q ? a : i), pe && pe();
    },
    z = (T, q) => {
      (T._isLeaving = !1), et(T, _), et(T, A), et(T, x), q && q();
    },
    re = (T) => (q, pe) => {
      const yt = T ? ce : oe,
        ne = () => Q(q, T, pe);
      Qe(yt, [q, ne]),
        ks(() => {
          et(q, T ? u : r), ke(q, T ? h : c), js(yt) || Bs(q, s, P, ne);
        });
    };
  return ee(t, {
    onBeforeEnter(T) {
      Qe(U, [T]), ke(T, r), ke(T, i);
    },
    onBeforeAppear(T) {
      Qe(F, [T]), ke(T, u), ke(T, a);
    },
    onEnter: re(!1),
    onAppear: re(!0),
    onLeave(T, q) {
      T._isLeaving = !0;
      const pe = () => z(T, q);
      ke(T, _),
        fl(),
        ke(T, x),
        ks(() => {
          T._isLeaving && (et(T, _), ke(T, A), js(K) || Bs(T, s, B, pe));
        }),
        Qe(K, [T, pe]);
    },
    onEnterCancelled(T) {
      Q(T, !1), Qe($, [T]);
    },
    onAppearCancelled(T) {
      Q(T, !0), Qe(M, [T]);
    },
    onLeaveCancelled(T) {
      z(T), Qe(Z, [T]);
    },
  });
}
function il(e) {
  if (e == null) return null;
  if (Y(e)) return [Cn(e.enter), Cn(e.leave)];
  {
    const t = Cn(e);
    return [t, t];
  }
}
function Cn(e) {
  return fr(e);
}
function ke(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Lt] || (e[Lt] = new Set())).add(t);
}
function et(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Lt];
  n && (n.delete(t), n.size || (e[Lt] = void 0));
}
function ks(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ll = 0;
function Bs(e, t, n, s) {
  const o = (e._endId = ++ll),
    r = () => {
      o === e._endId && s();
    };
  if (n) return setTimeout(r, n);
  const { type: i, timeout: c, propCount: u } = cl(e, t);
  if (!i) return s();
  const a = i + "end";
  let h = 0;
  const _ = () => {
      e.removeEventListener(a, x), r();
    },
    x = (A) => {
      A.target === e && ++h >= u && _();
    };
  setTimeout(() => {
    h < u && _();
  }, c + 1),
    e.addEventListener(a, x);
}
function cl(e, t) {
  const n = window.getComputedStyle(e),
    s = (j) => (n[j] || "").split(", "),
    o = s(`${je}Delay`),
    r = s(`${je}Duration`),
    i = Ds(o, r),
    c = s(`${xt}Delay`),
    u = s(`${xt}Duration`),
    a = Ds(c, u);
  let h = null,
    _ = 0,
    x = 0;
  t === je
    ? i > 0 && ((h = je), (_ = i), (x = r.length))
    : t === xt
    ? a > 0 && ((h = xt), (_ = a), (x = u.length))
    : ((_ = Math.max(i, a)),
      (h = _ > 0 ? (i > a ? je : xt) : null),
      (x = h ? (h === je ? r.length : u.length) : 0));
  const A =
    h === je && /\b(transform|all)(,|$)/.test(s(`${je}Property`).toString());
  return { type: h, timeout: _, propCount: x, hasTransform: A };
}
function Ds(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => Vs(n) + Vs(e[s])));
}
function Vs(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function fl() {
  return document.body.offsetHeight;
}
function ul(e, t, n) {
  const s = e[Lt];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const al = Symbol("_vod"),
  dl = Symbol("");
function hl(e, t, n) {
  const s = e.style,
    o = s.display,
    r = te(n);
  if (n && !r) {
    if (t && !te(t)) for (const i in t) n[i] == null && Bn(s, i, "");
    for (const i in n) Bn(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[dl];
      i && (n += ";" + i), (s.cssText = n);
    }
  } else t && e.removeAttribute("style");
  al in e && (s.display = o);
}
const Us = /\s*!important$/;
function Bn(e, t, n) {
  if (L(n)) n.forEach((s) => Bn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = pl(e, t);
    Us.test(n)
      ? e.setProperty(_t(s), n.replace(Us, ""), "important")
      : (e[s] = n);
  }
}
const Ks = ["Webkit", "Moz", "ms"],
  Tn = {};
function pl(e, t) {
  const n = Tn[t];
  if (n) return n;
  let s = pt(t);
  if (s !== "filter" && s in e) return (Tn[t] = s);
  s = eo(s);
  for (let o = 0; o < Ks.length; o++) {
    const r = Ks[o] + s;
    if (r in e) return (Tn[t] = r);
  }
  return t;
}
const Ws = "http://www.w3.org/1999/xlink";
function gl(e, t, n, s, o) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Ws, t.slice(6, t.length))
      : e.setAttributeNS(Ws, t, n);
  else {
    const r = gr(t);
    n == null || (r && !no(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, r ? "" : n);
  }
}
function ml(e, t, n, s, o, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, o, r), (e[t] = n ?? "");
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && !c.includes("-")) {
    e._value = n;
    const a = c === "OPTION" ? e.getAttribute("value") : e.value,
      h = n ?? "";
    a !== h && (e.value = h), n == null && e.removeAttribute(t);
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = no(n))
      : n == null && a === "string"
      ? ((n = ""), (u = !0))
      : a === "number" && ((n = 0), (u = !0));
  }
  try {
    e[t] = n;
  } catch {}
  u && e.removeAttribute(t);
}
function _l(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function yl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const zs = Symbol("_vei");
function bl(e, t, n, s, o = null) {
  const r = e[zs] || (e[zs] = {}),
    i = r[t];
  if (s && i) i.value = s;
  else {
    const [c, u] = xl(t);
    if (s) {
      const a = (r[t] = Cl(s, o));
      _l(e, c, a, u);
    } else i && (yl(e, c, i, u), (r[t] = void 0));
  }
}
const Js = /(?:Once|Passive|Capture)$/;
function xl(e) {
  let t;
  if (Js.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Js)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : _t(e.slice(2)), t];
}
let En = 0;
const vl = Promise.resolve(),
  wl = () => En || (vl.then(() => (En = 0)), (En = Date.now()));
function Cl(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    be(Tl(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = wl()), n;
}
function Tl(e, t) {
  if (L(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (o) => !o._stopped && s && s(o))
    );
  } else return t;
}
const Gs = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  El = (e, t, n, s, o, r, i, c, u) => {
    const a = o === "svg";
    t === "class"
      ? ul(e, s, a)
      : t === "style"
      ? hl(e, n, s)
      : Qt(t)
      ? Vn(t) || bl(e, t, n, s, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Al(e, t, s, a)
        )
      ? ml(e, t, s, r, i, c, u)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        gl(e, t, s, a));
  };
function Al(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Gs(t) && N(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Gs(t) && te(n) ? !1 : t in e;
}
const Sl = ee({ patchProp: El }, ol);
let Ys;
function Il() {
  return Ys || (Ys = Ri(Sl));
}
const Ll = (...e) => {
  const t = Il().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const o = Pl(s);
      if (!o) return;
      const r = t._component;
      !N(r) && !r.render && !r.template && (r.template = o.innerHTML),
        (o.innerHTML = "");
      const i = n(o, !1, Ol(o));
      return (
        o instanceof Element &&
          (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function Ol(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Pl(e) {
  return te(e) ? document.querySelector(e) : e;
}
const Ml = "/img/portrait.jpg",
  Nl = rn({
    __name: "Accordion",
    setup(e) {
      const t = (r) => {
          r.style.height = "0";
        },
        n = (r) => {
          r.style.height = r.scrollHeight + "px";
        },
        s = (r) => {
          r.style.height = r.scrollHeight + "px";
        },
        o = (r) => {
          r.style.height = "0";
        };
      return (r, i) => (
        Te(),
        rs(
          cs,
          {
            name: "accordion",
            onBeforeEnter: t,
            onEnter: n,
            onBeforeLeave: s,
            onLeave: o,
          },
          { default: Ce(() => [jo(r.$slots, "default")]), _: 3 }
        )
      );
    },
  }),
  Fl = {
    class:
      "flex flex-col md:gap-6 md:flex-row rounded-lg px-6 py-4 bg-stone-700",
  },
  Rl = { class: "text-stone-400 w-40" },
  $l = { class: "shrink flex flex-col mt-2 md:mt-0" },
  Hl = { class: "font-bold text-xl text-white" },
  jl = ["href"],
  kl = { key: 1 },
  Bl = { key: 0, class: "ml-2 text-stone-400 text-sm" },
  Dl = { class: "text-stone-400 font-bold" },
  Vl = { key: 0, class: "flex flex-col list-disc list-outside ml-5 mt-2" },
  Ne = rn({
    __name: "WorkExperienceItem",
    props: {
      period: {},
      company: {},
      companyHref: {},
      companyNote: {},
      jobTitle: {},
    },
    setup(e) {
      const t = e;
      return (n, s) => (
        Te(),
        Ke("li", Fl, [
          I("div", Rl, Fe(t.period), 1),
          I("div", $l, [
            I("div", null, [
              I("span", Hl, [
                t.companyHref
                  ? (Te(),
                    Ke(
                      "a",
                      {
                        key: 0,
                        class: "hover:text-stone-200 hover:underline",
                        href: t.companyHref,
                        target: "_blank",
                      },
                      Fe(t.company),
                      9,
                      jl
                    ))
                  : (Te(), Ke("span", kl, Fe(t.company), 1)),
              ]),
              n.companyNote
                ? (Te(), Ke("span", Bl, Fe(n.companyNote), 1))
                : jn("", !0),
            ]),
            I("div", Dl, Fe(t.jobTitle), 1),
            n.$slots.default
              ? (Te(), Ke("ul", Vl, [jo(n.$slots, "default")]))
              : jn("", !0),
          ]),
        ])
      );
    },
  }),
  Ul = ["href"],
  Kl = { class: "font-bold text-white" },
  Wl = ["innerHTML"],
  zl = { class: "text-sm mt-3" },
  Jl = { class: "font-bold" },
  Bt = rn({
    __name: "PublicationItem",
    props: { title: {}, authors: {}, publishedAt: {}, date: {}, href: {} },
    setup(e) {
      const t = e,
        n = (s) =>
          s.replace(
            "Takato Yamazaki",
            '<span class="underline">Takato Yamazaki</span>'
          );
      return (s, o) => (
        Te(),
        Ke(
          "a",
          {
            href: t.href,
            target: "_blank",
            class:
              "flex flex-col rounded-lg px-6 py-4 bg-stone-700 hover:bg-stone-600",
          },
          [
            I("div", Kl, Fe(t.title), 1),
            I(
              "div",
              { class: "text-stone-400 text-sm mt-3", innerHTML: n(t.authors) },
              null,
              8,
              Wl
            ),
            I("div", zl, [
              I("span", Jl, Fe(t.publishedAt), 1),
              Pe(", " + Fe(t.date) + ". ", 1),
            ]),
          ],
          8,
          Ul
        )
      );
    },
  }),
  Gl = { class: "mx-auto py-12 md:pt-24 max-w-4xl px-8" },
  Yl = Xo(
    '<div class="flex flex-col gap-8 md:flex-row md:gap-12 md:items-center"><img class="rounded-full h-44 w-44 md:h-60 md:w-60 shadow-lg" src="' +
      Ml +
      '"><div class="flex flex-col"><h1 class="font-bold text-2xl text-white md:text-4xl"> Takato Yamazaki </h1><div class="text-stone-400 mt-1 md:text-lg md:mt-2"><a class="hover:text-stone-300 hover:underline" href="mailto:takato@yamazaki.dev" target="_blank">takato@yamazaki.dev</a></div><div class="mt-4 md:text-lg"> I&#39;m an engineer and researcher working at <a class="text-orange-300 hover:text-orange-200 hover:underline text-nowrap" href="https://www.lycorp.co.jp/" target="_blank">LY Corporation</a> and <a class="text-orange-300 hover:text-orange-200 hover:underline text-nowrap" href="https://www.sbintuitions.co.jp/" target="_blank">SB Intuitions Corp</a>. My research interest is in dialogue systems. </div></div></div>',
    1
  ),
  ql = { class: "relative mt-14" },
  Xl = I(
    "h2",
    {
      class:
        "py-3 md:py-4 bg-stone-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl",
    },
    [I("span", { class: "text-orange-300" }, "##"), Pe(" Work Experience ")],
    -1
  ),
  Zl = { class: "flex flex-col mt-4" },
  Ql = I(
    "li",
    null,
    "Creating instruction data for Large Language Models (LLM)",
    -1
  ),
  ec = I(
    "li",
    null,
    "Working on developing and researching dialog systems",
    -1
  ),
  tc = I(
    "li",
    null,
    "Working on full-stack development of LLM applications",
    -1
  ),
  nc = I(
    "li",
    null,
    "Worked as a Director/Engineer of the Dialogue Systems Unit",
    -1
  ),
  sc = I(
    "li",
    null,
    "Worked on full-stack development of LLM applications",
    -1
  ),
  oc = I("li", null, "Senior Engineer since September 2023", -1),
  rc = { key: 0, class: "flex flex-col gap-6 overflow-hidden" },
  ic = I(
    "li",
    null,
    " Worked as a developer in research projects (e.g. automatic annotation) ",
    -1
  ),
  lc = I(
    "li",
    null,
    "Developed an OSS Blockchain framework with TypeScript",
    -1
  ),
  cc = I("li", null, "Worked as a server-side web engineer using Java", -1),
  fc = I(
    "li",
    null,
    " Worked as a server/client-side web engineer using PHP and JavaScript ",
    -1
  ),
  uc = { class: "flex items-center mt-6" },
  ac = I("div", { class: "flex-1 h-[1px] bg-stone-600" }, null, -1),
  dc = I("div", { class: "flex-1 h-[1px] bg-stone-600" }, null, -1),
  hc = { class: "mt-16" },
  pc = I(
    "h2",
    {
      class:
        "py-3 md:py-4 bg-stone-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl",
    },
    [I("span", { class: "text-orange-300" }, "##"), Pe(" Education ")],
    -1
  ),
  gc = { class: "flex flex-col gap-6 mt-4" },
  mc = I(
    "li",
    null,
    [
      Pe(" Supervisor: "),
      I(
        "a",
        {
          class: "text-orange-300 hover:text-orange-200 hover:underline",
          href: "https://www-al.nii.ac.jp/",
        },
        "Akiko Aizawa"
      ),
    ],
    -1
  ),
  _c = I(
    "li",
    null,
    "Research Topic: Dialogue Systems, Reinforcement Learning",
    -1
  ),
  yc = I(
    "li",
    null,
    [
      Pe(" Supervisor: "),
      I(
        "a",
        {
          class: "text-orange-300 hover:text-orange-200 hover:underline",
          href: "https://www.sugawara.org/",
        },
        "Toshiharu Sugawara"
      ),
    ],
    -1
  ),
  bc = I("li", null, "Research Topic: Multi-Agent Systems", -1),
  xc = { class: "mt-16" },
  vc = I(
    "h2",
    {
      class:
        "py-3 md:py-4 bg-stone-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl",
    },
    [I("span", { class: "text-orange-300" }, "##"), Pe(" Publication ")],
    -1
  ),
  wc = I(
    "h3",
    { class: "text-lg font-bold" },
    [I("span", { class: "text-orange-300" }, "###"), Pe(" Journal ")],
    -1
  ),
  Cc = { class: "flex flex-col gap-4 mt-4" },
  Tc = I(
    "h3",
    { class: "mt-8 text-lg font-bold" },
    [
      I("span", { class: "text-orange-300" }, "###"),
      Pe(" International Conferences (Referred) "),
    ],
    -1
  ),
  Ec = { class: "flex flex-col gap-4 mt-4" },
  Ac = I(
    "h3",
    { class: "mt-8 text-lg font-bold" },
    [
      I("span", { class: "text-orange-300" }, "###"),
      Pe(" Domestic Conferences "),
    ],
    -1
  ),
  Sc = { class: "flex flex-col gap-4 mt-4" },
  Ic = Xo(
    '<div class="mt-16"><h2 class="py-3 md:py-4 bg-stone-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl"><span class="text-orange-300">##</span> Awards </h2></div><div class="mt-16"><h2 class="py-3 md:py-4 bg-stone-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl"><span class="text-orange-300">##</span> Activities </h2></div><div class="mt-16"><h2 class="py-3 md:py-4 bg-stone-800/60 backdrop-blur-sm top-0 sticky font-bold text-xl text-white md:text-2xl"><span class="text-orange-300">##</span> Skills </h2></div>',
    3
  ),
  Lc = rn({
    __name: "App",
    setup(e) {
      const t = Br(!1);
      return (n, s) => (
        Te(),
        Ke("div", Gl, [
          Yl,
          I("div", ql, [
            Xl,
            I("div", Zl, [
              D(
                Ne,
                {
                  period: "Sep. 2023 - Present",
                  company: "SB Intuitions Corp.",
                  companyNote: "(Tokyo)",
                  companyHref: "https://www.sbintuitions.co.jp/",
                  jobTitle: "Engineer",
                },
                { default: Ce(() => [Ql, ec, tc]), _: 1 }
              ),
              D(Ne, {
                class: "mt-6",
                period: "Oct. 2023 - Present",
                company: "LY Corporation",
                companyNote: "(Tokyo, formerly LINE Corporation)",
                companyHref: "https://www.lycorp.co.jp/",
                jobTitle: "Senior Engineer",
              }),
              D(
                Ne,
                {
                  class: "mt-6",
                  period: "Apr. 2021 - Oct. 2023",
                  company: "LINE Corporation",
                  companyNote: "(Tokyo)",
                  companyHref: "https://linecorp.com/",
                  jobTitle: "Senior Engineer ← Engineer",
                },
                { default: Ce(() => [nc, sc, oc]), _: 1 }
              ),
              D(Nl, null, {
                default: Ce(() => [
                  t.value
                    ? (Te(),
                      Ke("div", rc, [
                        D(
                          Ne,
                          {
                            class: "mt-6",
                            period: "Apr. 2019 - Apr. 2021",
                            company: "National Institiute of Informatics",
                            companyNote: "(Tokyo)",
                            companyHref: "https://www.nii.ac.jp/",
                            jobTitle: "Research Assistant",
                          },
                          { default: Ce(() => [ic]), _: 1 }
                        ),
                        D(
                          Ne,
                          {
                            period: "Jan. 2018 - May 2019",
                            company: "Mobile Factory Inc.",
                            companyNote: "(Tokyo)",
                            companyHref: "https://www.mobilefactory.jp/",
                            jobTitle: "Part-time Job",
                          },
                          { default: Ce(() => [lc]), _: 1 }
                        ),
                        D(
                          Ne,
                          {
                            period: "Jul. 2017 - Aug. 2017",
                            company: "Rakuten Inc.",
                            companyNote: "(Tokyo)",
                            companyHref: "https://corp.rakuten.co.jp/",
                            jobTitle: "Internship",
                          },
                          { default: Ce(() => [cc]), _: 1 }
                        ),
                        D(
                          Ne,
                          {
                            period: "Jan. 2016 - Oct. 2017",
                            company: "Diverta Inc.",
                            companyNote: "(Tokyo)",
                            companyHref: "https://www.diverta.co.jp/",
                            jobTitle: "Part-time Job",
                          },
                          { default: Ce(() => [fc]), _: 1 }
                        ),
                      ]))
                    : jn("", !0),
                ]),
                _: 1,
              }),
              I("div", uc, [
                ac,
                I(
                  "button",
                  {
                    class:
                      "text-sm mx-2 px-2 py-1 text-stone-400 hover:bg-stone-700 rounded-md",
                    onClick: s[0] || (s[0] = (o) => (t.value = !t.value)),
                  },
                  Fe(t.value ? "▲ Hide" : "▼ Show") +
                    " Internships and Part-time Jobs ",
                  1
                ),
                dc,
              ]),
            ]),
          ]),
          I("div", hc, [
            pc,
            I("div", gc, [
              D(
                Ne,
                {
                  period: "Apr. 2019 - Apr. 2021",
                  company: "Master of Information Science and Technology",
                  companyHref: "https://www.i.u-tokyo.ac.jp/",
                  jobTitle: "The University of Tokyo",
                },
                { default: Ce(() => [mc, _c]), _: 1 }
              ),
              D(
                Ne,
                {
                  period: "Apr. 2019 - Apr. 2021",
                  company: "B.E. in Computer Science and Engineering",
                  companyHref: "https://www.fse.sci.waseda.ac.jp/",
                  jobTitle: "Waseda University",
                },
                { default: Ce(() => [yc, bc]), _: 1 }
              ),
            ]),
          ]),
          I("div", xc, [
            vc,
            wc,
            I("div", Cc, [
              D(Bt, {
                title:
                  "Building a hospitable and reliable dialogue system for android robots: a scenario-based approach with large language models",
                authors:
                  "Takato Yamazaki, Katsumasa Yoshikawa, Toshiki Kawamoto, Tomoya Mizumoto, Masaya Ohagi, Toshinori Sato",
                publishedAt: "Advanced Robotics",
                date: "November 2023",
                href: "https://www.tandfonline.com/doi/full/10.1080/01691864.2023.2244554",
              }),
            ]),
            Tc,
            I("div", Ec, [
              D(Bt, {
                title:
                  "An Open-Domain Avatar Chatbot by Exploiting a Large Language Model",
                authors:
                  "Takato Yamazaki, Tomoya Mizumoto, Katsumasa Yoshikawa, Masaya Ohagi, Toshiki Kawamoto, Toshinori Sato",
                publishedAt:
                  "Proceedings of the 24th Annual Meeting of the Special Interest Group on Discourse and Dialogue (SIGDIAL)",
                date: "September 2023",
                href: "https://aclanthology.org/2023.sigdial-1.40/",
              }),
              D(Bt, {
                title:
                  "Phrase-Level Action Reinforcement Learning for Neural Dialog Response Generation",
                authors: "Takato Yamazaki, Akiko Aizawa",
                publishedAt:
                  "Findings of the Association for Computational Linguistics: ACL-IJCNLP 2021",
                date: "August 2021",
                href: "https://aclanthology.org/2021.findings-acl.446/",
              }),
            ]),
            Ac,
            I("div", Sc, [
              D(Bt, {
                title: "HyperCLOVA を用いた音声雑談対話システム",
                authors:
                  "山崎天, 川本稔己, 大萩雅也, 水本智也, 小林滉河, 吉川克正, 佐藤敏紀",
                publishedAt:
                  "人工知能学会研究会資料 言語・音声理解と対話処理研究会 第96回 (SIG-SLUD)",
                date: "December 2023",
                href: "https://www.jstage.jst.go.jp/article/jsaislud/96/0/96_22/_article/-char/ja/",
              }),
            ]),
          ]),
          Ic,
        ])
      );
    },
  });
Ll(Lc).mount("#app");
