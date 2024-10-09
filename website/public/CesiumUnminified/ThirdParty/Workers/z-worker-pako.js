!function() {
  "use strict";
  const { Array: e, Object: t, Number: n, Math: s, Error: r, Uint8Array: a, Uint16Array: o, Uint32Array: i, Int32Array: c, Map: l, DataView: u, Promise: h, TextEncoder: f, crypto: p, postMessage: d, TransformStream: g, ReadableStream: w, WritableStream: y, CompressionStream: m, DecompressionStream: _ } = self, b = void 0, S = "undefined", v = "function";
  class k {
    constructor(e2) {
      return class extends g {
        constructor(t2, n2) {
          const s2 = new e2(n2);
          super({ transform(e3, t3) {
            t3.enqueue(s2.append(e3));
          }, flush(e3) {
            const t3 = s2.flush();
            t3 && e3.enqueue(t3);
          } });
        }
      };
    }
  }
  const z = [];
  for (let e2 = 0; 256 > e2; e2++) {
    let t2 = e2;
    for (let e3 = 0; 8 > e3; e3++) 1 & t2 ? t2 = t2 >>> 1 ^ 3988292384 : t2 >>>= 1;
    z[e2] = t2;
  }
  class D {
    constructor(e2) {
      this.crc = e2 || -1;
    }
    append(e2) {
      let t2 = 0 | this.crc;
      for (let n2 = 0, s2 = 0 | e2.length; s2 > n2; n2++) t2 = t2 >>> 8 ^ z[255 & (t2 ^ e2[n2])];
      this.crc = t2;
    }
    get() {
      return ~this.crc;
    }
  }
  class C extends g {
    constructor() {
      let e2;
      const t2 = new D();
      super({ transform(e3, n2) {
        t2.append(e3), n2.enqueue(e3);
      }, flush() {
        const n2 = new a(4);
        new u(n2.buffer).setUint32(0, t2.get()), e2.value = n2;
      } }), e2 = this;
    }
  }
  const I = { concat(e2, t2) {
    if (0 === e2.length || 0 === t2.length) return e2.concat(t2);
    const n2 = e2[e2.length - 1], s2 = I.getPartial(n2);
    return 32 === s2 ? e2.concat(t2) : I._shiftRight(t2, s2, 0 | n2, e2.slice(0, e2.length - 1));
  }, bitLength(e2) {
    const t2 = e2.length;
    if (0 === t2) return 0;
    const n2 = e2[t2 - 1];
    return 32 * (t2 - 1) + I.getPartial(n2);
  }, clamp(e2, t2) {
    if (32 * e2.length < t2) return e2;
    const n2 = (e2 = e2.slice(0, s.ceil(t2 / 32))).length;
    return t2 &= 31, n2 > 0 && t2 && (e2[n2 - 1] = I.partial(t2, e2[n2 - 1] & 2147483648 >> t2 - 1, 1)), e2;
  }, partial: (e2, t2, n2) => 32 === e2 ? t2 : (n2 ? 0 | t2 : t2 << 32 - e2) + 1099511627776 * e2, getPartial: (e2) => s.round(e2 / 1099511627776) || 32, _shiftRight(e2, t2, n2, s2) {
    for (void 0 === s2 && (s2 = []); t2 >= 32; t2 -= 32) s2.push(n2), n2 = 0;
    if (0 === t2) return s2.concat(e2);
    for (let r3 = 0; r3 < e2.length; r3++) s2.push(n2 | e2[r3] >>> t2), n2 = e2[r3] << 32 - t2;
    const r2 = e2.length ? e2[e2.length - 1] : 0, a2 = I.getPartial(r2);
    return s2.push(I.partial(t2 + a2 & 31, t2 + a2 > 32 ? n2 : s2.pop(), 1)), s2;
  } }, A = { bytes: { fromBits(e2) {
    const t2 = I.bitLength(e2) / 8, n2 = new a(t2);
    let s2;
    for (let r2 = 0; t2 > r2; r2++) 3 & r2 || (s2 = e2[r2 / 4]), n2[r2] = s2 >>> 24, s2 <<= 8;
    return n2;
  }, toBits(e2) {
    const t2 = [];
    let n2, s2 = 0;
    for (n2 = 0; n2 < e2.length; n2++) s2 = s2 << 8 | e2[n2], 3 & ~n2 || (t2.push(s2), s2 = 0);
    return 3 & n2 && t2.push(I.partial(8 * (3 & n2), s2)), t2;
  } } }, q = class {
    constructor(e2) {
      const t2 = this;
      t2.blockSize = 512, t2._init = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], t2._key = [1518500249, 1859775393, 2400959708, 3395469782], e2 ? (t2._h = e2._h.slice(0), t2._buffer = e2._buffer.slice(0), t2._length = e2._length) : t2.reset();
    }
    reset() {
      const e2 = this;
      return e2._h = e2._init.slice(0), e2._buffer = [], e2._length = 0, e2;
    }
    update(e2) {
      const t2 = this;
      "string" == typeof e2 && (e2 = A.utf8String.toBits(e2));
      const n2 = t2._buffer = I.concat(t2._buffer, e2), s2 = t2._length, a2 = t2._length = s2 + I.bitLength(e2);
      if (a2 > 9007199254740991) throw new r("Cannot hash more than 2^53 - 1 bits");
      const o2 = new i(n2);
      let c2 = 0;
      for (let e3 = t2.blockSize + s2 - (t2.blockSize + s2 & t2.blockSize - 1); a2 >= e3; e3 += t2.blockSize) t2._block(o2.subarray(16 * c2, 16 * (c2 + 1))), c2 += 1;
      return n2.splice(0, 16 * c2), t2;
    }
    finalize() {
      const e2 = this;
      let t2 = e2._buffer;
      const n2 = e2._h;
      t2 = I.concat(t2, [I.partial(1, 1)]);
      for (let e3 = t2.length + 2; 15 & e3; e3++) t2.push(0);
      for (t2.push(s.floor(e2._length / 4294967296)), t2.push(0 | e2._length); t2.length; ) e2._block(t2.splice(0, 16));
      return e2.reset(), n2;
    }
    _f(e2, t2, n2, s2) {
      return e2 > 19 ? e2 > 39 ? e2 > 59 ? e2 > 79 ? void 0 : t2 ^ n2 ^ s2 : t2 & n2 | t2 & s2 | n2 & s2 : t2 ^ n2 ^ s2 : t2 & n2 | ~t2 & s2;
    }
    _S(e2, t2) {
      return t2 << e2 | t2 >>> 32 - e2;
    }
    _block(t2) {
      const n2 = this, r2 = n2._h, a2 = e(80);
      for (let e2 = 0; 16 > e2; e2++) a2[e2] = t2[e2];
      let o2 = r2[0], i2 = r2[1], c2 = r2[2], l2 = r2[3], u2 = r2[4];
      for (let e2 = 0; 79 >= e2; e2++) {
        16 > e2 || (a2[e2] = n2._S(1, a2[e2 - 3] ^ a2[e2 - 8] ^ a2[e2 - 14] ^ a2[e2 - 16]));
        const t3 = n2._S(5, o2) + n2._f(e2, i2, c2, l2) + u2 + a2[e2] + n2._key[s.floor(e2 / 20)] | 0;
        u2 = l2, l2 = c2, c2 = n2._S(30, i2), i2 = o2, o2 = t3;
      }
      r2[0] = r2[0] + o2 | 0, r2[1] = r2[1] + i2 | 0, r2[2] = r2[2] + c2 | 0, r2[3] = r2[3] + l2 | 0, r2[4] = r2[4] + u2 | 0;
    }
  }, R = { getRandomValues(e2) {
    const t2 = new i(e2.buffer), n2 = (e3) => {
      let t3 = 987654321;
      const n3 = 4294967295;
      return () => (t3 = 36969 * (65535 & t3) + (t3 >> 16) & n3, (((t3 << 16) + (e3 = 18e3 * (65535 & e3) + (e3 >> 16) & n3) & n3) / 4294967296 + 0.5) * (s.random() > 0.5 ? 1 : -1));
    };
    for (let r2, a2 = 0; a2 < e2.length; a2 += 4) {
      const e3 = n2(4294967296 * (r2 || s.random()));
      r2 = 987654071 * e3(), t2[a2 / 4] = 4294967296 * e3() | 0;
    }
    return e2;
  } }, H = { importKey: (e2) => new H.hmacSha1(A.bytes.toBits(e2)), pbkdf2(e2, t2, n2, s2) {
    if (n2 = n2 || 1e4, 0 > s2 || 0 > n2) throw new r("invalid params to pbkdf2");
    const a2 = 1 + (s2 >> 5) << 2;
    let o2, i2, c2, l2, h2;
    const f2 = new ArrayBuffer(a2), p2 = new u(f2);
    let d2 = 0;
    const g2 = I;
    for (t2 = A.bytes.toBits(t2), h2 = 1; (a2 || 1) > d2; h2++) {
      for (o2 = i2 = e2.encrypt(g2.concat(t2, [h2])), c2 = 1; n2 > c2; c2++) for (i2 = e2.encrypt(i2), l2 = 0; l2 < i2.length; l2++) o2[l2] ^= i2[l2];
      for (c2 = 0; (a2 || 1) > d2 && c2 < o2.length; c2++) p2.setInt32(d2, o2[c2]), d2 += 4;
    }
    return f2.slice(0, s2 / 8);
  }, hmacSha1: class {
    constructor(e2) {
      const t2 = this, n2 = t2._hash = q, s2 = [[], []];
      t2._baseHash = [new n2(), new n2()];
      const r2 = t2._baseHash[0].blockSize / 32;
      e2.length > r2 && (e2 = new n2().update(e2).finalize());
      for (let t3 = 0; r2 > t3; t3++) s2[0][t3] = 909522486 ^ e2[t3], s2[1][t3] = 1549556828 ^ e2[t3];
      t2._baseHash[0].update(s2[0]), t2._baseHash[1].update(s2[1]), t2._resultHash = new n2(t2._baseHash[0]);
    }
    reset() {
      const e2 = this;
      e2._resultHash = new e2._hash(e2._baseHash[0]), e2._updated = false;
    }
    update(e2) {
      this._updated = true, this._resultHash.update(e2);
    }
    digest() {
      const e2 = this, t2 = e2._resultHash.finalize(), n2 = new e2._hash(e2._baseHash[1]).update(t2).finalize();
      return e2.reset(), n2;
    }
    encrypt(e2) {
      if (this._updated) throw new r("encrypt on already updated hmac called!");
      return this.update(e2), this.digest(e2);
    }
  } }, P = typeof p != S && typeof p.getRandomValues == v, B = "Invalid password", K = "Invalid signature", T = "zipjs-abort-check-password";
  function V(e2) {
    return P ? p.getRandomValues(e2) : R.getRandomValues(e2);
  }
  const x = 16, E = { name: "PBKDF2" }, U = t.assign({ hash: { name: "HMAC" } }, E), W = t.assign({ iterations: 1e3, hash: { name: "SHA-1" } }, E), M = ["deriveBits"], N = [8, 12, 16], O = [16, 24, 32], L = 10, F = [0, 0, 0, 0], j = typeof p != S, G = j && p.subtle, X = j && typeof G != S, J = A.bytes, Q = class {
    constructor(e2) {
      const t2 = this;
      t2._tables = [[[], [], [], [], []], [[], [], [], [], []]], t2._tables[0][0][0] || t2._precompute();
      const n2 = t2._tables[0][4], s2 = t2._tables[1], a2 = e2.length;
      let o2, i2, c2, l2 = 1;
      if (4 !== a2 && 6 !== a2 && 8 !== a2) throw new r("invalid aes key size");
      for (t2._key = [i2 = e2.slice(0), c2 = []], o2 = a2; 4 * a2 + 28 > o2; o2++) {
        let e3 = i2[o2 - 1];
        (o2 % a2 == 0 || 8 === a2 && o2 % a2 == 4) && (e3 = n2[e3 >>> 24] << 24 ^ n2[e3 >> 16 & 255] << 16 ^ n2[e3 >> 8 & 255] << 8 ^ n2[255 & e3], o2 % a2 == 0 && (e3 = e3 << 8 ^ e3 >>> 24 ^ l2 << 24, l2 = l2 << 1 ^ 283 * (l2 >> 7))), i2[o2] = i2[o2 - a2] ^ e3;
      }
      for (let e3 = 0; o2; e3++, o2--) {
        const t3 = i2[3 & e3 ? o2 : o2 - 4];
        c2[e3] = 4 >= o2 || 4 > e3 ? t3 : s2[0][n2[t3 >>> 24]] ^ s2[1][n2[t3 >> 16 & 255]] ^ s2[2][n2[t3 >> 8 & 255]] ^ s2[3][n2[255 & t3]];
      }
    }
    encrypt(e2) {
      return this._crypt(e2, 0);
    }
    decrypt(e2) {
      return this._crypt(e2, 1);
    }
    _precompute() {
      const e2 = this._tables[0], t2 = this._tables[1], n2 = e2[4], s2 = t2[4], r2 = [], a2 = [];
      let o2, i2, c2, l2;
      for (let e3 = 0; 256 > e3; e3++) a2[(r2[e3] = e3 << 1 ^ 283 * (e3 >> 7)) ^ e3] = e3;
      for (let u2 = o2 = 0; !n2[u2]; u2 ^= i2 || 1, o2 = a2[o2] || 1) {
        let a3 = o2 ^ o2 << 1 ^ o2 << 2 ^ o2 << 3 ^ o2 << 4;
        a3 = a3 >> 8 ^ 255 & a3 ^ 99, n2[u2] = a3, s2[a3] = u2, l2 = r2[c2 = r2[i2 = r2[u2]]];
        let h2 = 16843009 * l2 ^ 65537 * c2 ^ 257 * i2 ^ 16843008 * u2, f2 = 257 * r2[a3] ^ 16843008 * a3;
        for (let n3 = 0; 4 > n3; n3++) e2[n3][u2] = f2 = f2 << 24 ^ f2 >>> 8, t2[n3][a3] = h2 = h2 << 24 ^ h2 >>> 8;
      }
      for (let n3 = 0; 5 > n3; n3++) e2[n3] = e2[n3].slice(0), t2[n3] = t2[n3].slice(0);
    }
    _crypt(e2, t2) {
      if (4 !== e2.length) throw new r("invalid aes block size");
      const n2 = this._key[t2], s2 = n2.length / 4 - 2, a2 = [0, 0, 0, 0], o2 = this._tables[t2], i2 = o2[0], c2 = o2[1], l2 = o2[2], u2 = o2[3], h2 = o2[4];
      let f2, p2, d2, g2 = e2[0] ^ n2[0], w2 = e2[t2 ? 3 : 1] ^ n2[1], y2 = e2[2] ^ n2[2], m2 = e2[t2 ? 1 : 3] ^ n2[3], _2 = 4;
      for (let e3 = 0; s2 > e3; e3++) f2 = i2[g2 >>> 24] ^ c2[w2 >> 16 & 255] ^ l2[y2 >> 8 & 255] ^ u2[255 & m2] ^ n2[_2], p2 = i2[w2 >>> 24] ^ c2[y2 >> 16 & 255] ^ l2[m2 >> 8 & 255] ^ u2[255 & g2] ^ n2[_2 + 1], d2 = i2[y2 >>> 24] ^ c2[m2 >> 16 & 255] ^ l2[g2 >> 8 & 255] ^ u2[255 & w2] ^ n2[_2 + 2], m2 = i2[m2 >>> 24] ^ c2[g2 >> 16 & 255] ^ l2[w2 >> 8 & 255] ^ u2[255 & y2] ^ n2[_2 + 3], _2 += 4, g2 = f2, w2 = p2, y2 = d2;
      for (let e3 = 0; 4 > e3; e3++) a2[t2 ? 3 & -e3 : e3] = h2[g2 >>> 24] << 24 ^ h2[w2 >> 16 & 255] << 16 ^ h2[y2 >> 8 & 255] << 8 ^ h2[255 & m2] ^ n2[_2++], f2 = g2, g2 = w2, w2 = y2, y2 = m2, m2 = f2;
      return a2;
    }
  }, Y = class {
    constructor(e2, t2) {
      this._prf = e2, this._initIv = t2, this._iv = t2;
    }
    reset() {
      this._iv = this._initIv;
    }
    update(e2) {
      return this.calculate(this._prf, e2, this._iv);
    }
    incWord(e2) {
      if (255 & ~(e2 >> 24)) e2 += 1 << 24;
      else {
        let t2 = e2 >> 16 & 255, n2 = e2 >> 8 & 255, s2 = 255 & e2;
        255 === t2 ? (t2 = 0, 255 === n2 ? (n2 = 0, 255 === s2 ? s2 = 0 : ++s2) : ++n2) : ++t2, e2 = 0, e2 += t2 << 16, e2 += n2 << 8, e2 += s2;
      }
      return e2;
    }
    incCounter(e2) {
      0 === (e2[0] = this.incWord(e2[0])) && (e2[1] = this.incWord(e2[1]));
    }
    calculate(e2, t2, n2) {
      let s2;
      if (!(s2 = t2.length)) return [];
      const r2 = I.bitLength(t2);
      for (let r3 = 0; s2 > r3; r3 += 4) {
        this.incCounter(n2);
        const s3 = e2.encrypt(n2);
        t2[r3] ^= s3[0], t2[r3 + 1] ^= s3[1], t2[r3 + 2] ^= s3[2], t2[r3 + 3] ^= s3[3];
      }
      return I.clamp(t2, r2);
    }
  }, Z = H.hmacSha1;
  let $ = j && X && typeof G.importKey == v, ee = j && X && typeof G.deriveBits == v;
  class te extends g {
    constructor({ password: e2, rawPassword: n2, signed: s2, encryptionStrength: o2, checkPasswordOnly: i2 }) {
      super({ start() {
        t.assign(this, { ready: new h((e3) => this.resolveReady = e3), password: ae(e2, n2), signed: s2, strength: o2 - 1, pending: new a() });
      }, async transform(e3, t2) {
        const n3 = this, { password: s3, strength: o3, resolveReady: c2, ready: l2 } = n3;
        s3 ? (await (async (e4, t3, n4, s4) => {
          const a2 = await re(e4, t3, n4, ie(s4, 0, N[t3])), o4 = ie(s4, N[t3]);
          if (a2[0] != o4[0] || a2[1] != o4[1]) throw new r(B);
        })(n3, o3, s3, ie(e3, 0, N[o3] + 2)), e3 = ie(e3, N[o3] + 2), i2 ? t2.error(new r(T)) : c2()) : await l2;
        const u2 = new a(e3.length - L - (e3.length - L) % x);
        t2.enqueue(se(n3, e3, u2, 0, L, true));
      }, async flush(e3) {
        const { signed: t2, ctr: n3, hmac: s3, pending: o3, ready: i3 } = this;
        if (s3 && n3) {
          await i3;
          const c2 = ie(o3, 0, o3.length - L), l2 = ie(o3, o3.length - L);
          let u2 = new a();
          if (c2.length) {
            const e4 = le(J, c2);
            s3.update(e4);
            const t3 = n3.update(e4);
            u2 = ce(J, t3);
          }
          if (t2) {
            const e4 = ie(ce(J, s3.digest()), 0, L);
            for (let t3 = 0; L > t3; t3++) if (e4[t3] != l2[t3]) throw new r(K);
          }
          e3.enqueue(u2);
        }
      } });
    }
  }
  class ne extends g {
    constructor({ password: e2, rawPassword: n2, encryptionStrength: s2 }) {
      let r2;
      super({ start() {
        t.assign(this, { ready: new h((e3) => this.resolveReady = e3), password: ae(e2, n2), strength: s2 - 1, pending: new a() });
      }, async transform(e3, t2) {
        const n3 = this, { password: s3, strength: r3, resolveReady: o2, ready: i2 } = n3;
        let c2 = new a();
        s3 ? (c2 = await (async (e4, t3, n4) => {
          const s4 = V(new a(N[t3]));
          return oe(s4, await re(e4, t3, n4, s4));
        })(n3, r3, s3), o2()) : await i2;
        const l2 = new a(c2.length + e3.length - e3.length % x);
        l2.set(c2, 0), t2.enqueue(se(n3, e3, l2, c2.length, 0));
      }, async flush(e3) {
        const { ctr: t2, hmac: n3, pending: s3, ready: o2 } = this;
        if (n3 && t2) {
          await o2;
          let i2 = new a();
          if (s3.length) {
            const e4 = t2.update(le(J, s3));
            n3.update(e4), i2 = ce(J, e4);
          }
          r2.signature = ce(J, n3.digest()).slice(0, L), e3.enqueue(oe(i2, r2.signature));
        }
      } }), r2 = this;
    }
  }
  function se(e2, t2, n2, s2, r2, o2) {
    const { ctr: i2, hmac: c2, pending: l2 } = e2, u2 = t2.length - r2;
    let h2;
    for (l2.length && (t2 = oe(l2, t2), n2 = ((e3, t3) => {
      if (t3 && t3 > e3.length) {
        const n3 = e3;
        (e3 = new a(t3)).set(n3, 0);
      }
      return e3;
    })(n2, u2 - u2 % x)), h2 = 0; u2 - x >= h2; h2 += x) {
      const e3 = le(J, ie(t2, h2, h2 + x));
      o2 && c2.update(e3);
      const r3 = i2.update(e3);
      o2 || c2.update(r3), n2.set(ce(J, r3), h2 + s2);
    }
    return e2.pending = ie(t2, h2), n2;
  }
  async function re(n2, s2, r2, o2) {
    n2.password = null;
    const i2 = await (async (e2, t2, n3, s3, r3) => {
      if (!$) return H.importKey(t2);
      try {
        return await G.importKey("raw", t2, n3, false, r3);
      } catch (e3) {
        return $ = false, H.importKey(t2);
      }
    })(0, r2, U, 0, M), c2 = await (async (e2, t2, n3) => {
      if (!ee) return H.pbkdf2(t2, e2.salt, W.iterations, n3);
      try {
        return await G.deriveBits(e2, t2, n3);
      } catch (s3) {
        return ee = false, H.pbkdf2(t2, e2.salt, W.iterations, n3);
      }
    })(t.assign({ salt: o2 }, W), i2, 8 * (2 * O[s2] + 2)), l2 = new a(c2), u2 = le(J, ie(l2, 0, O[s2])), h2 = le(J, ie(l2, O[s2], 2 * O[s2])), f2 = ie(l2, 2 * O[s2]);
    return t.assign(n2, { keys: { key: u2, authentication: h2, passwordVerification: f2 }, ctr: new Y(new Q(u2), e.from(F)), hmac: new Z(h2) }), f2;
  }
  function ae(e2, t2) {
    return t2 === b ? ((e3) => {
      if (typeof f == S) {
        const t3 = new a((e3 = unescape(encodeURIComponent(e3))).length);
        for (let n2 = 0; n2 < t3.length; n2++) t3[n2] = e3.charCodeAt(n2);
        return t3;
      }
      return new f().encode(e3);
    })(e2) : t2;
  }
  function oe(e2, t2) {
    let n2 = e2;
    return e2.length + t2.length && (n2 = new a(e2.length + t2.length), n2.set(e2, 0), n2.set(t2, e2.length)), n2;
  }
  function ie(e2, t2, n2) {
    return e2.subarray(t2, n2);
  }
  function ce(e2, t2) {
    return e2.fromBits(t2);
  }
  function le(e2, t2) {
    return e2.toBits(t2);
  }
  class ue extends g {
    constructor({ password: e2, passwordVerification: n2, checkPasswordOnly: s2 }) {
      super({ start() {
        t.assign(this, { password: e2, passwordVerification: n2 }), de(this, e2);
      }, transform(e3, t2) {
        const n3 = this;
        if (n3.password) {
          const t3 = fe(n3, e3.subarray(0, 12));
          if (n3.password = null, t3[11] != n3.passwordVerification) throw new r(B);
          e3 = e3.subarray(12);
        }
        s2 ? t2.error(new r(T)) : t2.enqueue(fe(n3, e3));
      } });
    }
  }
  class he extends g {
    constructor({ password: e2, passwordVerification: n2 }) {
      super({ start() {
        t.assign(this, { password: e2, passwordVerification: n2 }), de(this, e2);
      }, transform(e3, t2) {
        const n3 = this;
        let s2, r2;
        if (n3.password) {
          n3.password = null;
          const t3 = V(new a(12));
          t3[11] = n3.passwordVerification, s2 = new a(e3.length + t3.length), s2.set(pe(n3, t3), 0), r2 = 12;
        } else s2 = new a(e3.length), r2 = 0;
        s2.set(pe(n3, e3), r2), t2.enqueue(s2);
      } });
    }
  }
  function fe(e2, t2) {
    const n2 = new a(t2.length);
    for (let s2 = 0; s2 < t2.length; s2++) n2[s2] = we(e2) ^ t2[s2], ge(e2, n2[s2]);
    return n2;
  }
  function pe(e2, t2) {
    const n2 = new a(t2.length);
    for (let s2 = 0; s2 < t2.length; s2++) n2[s2] = we(e2) ^ t2[s2], ge(e2, t2[s2]);
    return n2;
  }
  function de(e2, n2) {
    const s2 = [305419896, 591751049, 878082192];
    t.assign(e2, { keys: s2, crcKey0: new D(s2[0]), crcKey2: new D(s2[2]) });
    for (let t2 = 0; t2 < n2.length; t2++) ge(e2, n2.charCodeAt(t2));
  }
  function ge(e2, t2) {
    let [n2, r2, a2] = e2.keys;
    e2.crcKey0.append([t2]), n2 = ~e2.crcKey0.get(), r2 = me(s.imul(me(r2 + ye(n2)), 134775813) + 1), e2.crcKey2.append([r2 >>> 24]), a2 = ~e2.crcKey2.get(), e2.keys = [n2, r2, a2];
  }
  function we(e2) {
    const t2 = 2 | e2.keys[2];
    return ye(s.imul(t2, 1 ^ t2) >>> 8);
  }
  function ye(e2) {
    return 255 & e2;
  }
  function me(e2) {
    return 4294967295 & e2;
  }
  const _e = "deflate-raw";
  class be extends g {
    constructor(e2, { chunkSize: t2, CompressionStream: n2, CompressionStreamNative: s2 }) {
      super({});
      const { compressed: r2, encrypted: a2, useCompressionStream: o2, zipCrypto: i2, signed: c2, level: l2 } = e2, h2 = this;
      let f2, p2, d2 = ve(super.readable);
      a2 && !i2 || !c2 || (f2 = new C(), d2 = De(d2, f2)), r2 && (d2 = ze(d2, o2, { level: l2, chunkSize: t2 }, s2, n2)), a2 && (i2 ? d2 = De(d2, new he(e2)) : (p2 = new ne(e2), d2 = De(d2, p2))), ke(h2, d2, () => {
        let e3;
        a2 && !i2 && (e3 = p2.signature), a2 && !i2 || !c2 || (e3 = new u(f2.value.buffer).getUint32(0)), h2.signature = e3;
      });
    }
  }
  class Se extends g {
    constructor(e2, { chunkSize: t2, DecompressionStream: n2, DecompressionStreamNative: s2 }) {
      super({});
      const { zipCrypto: a2, encrypted: o2, signed: i2, signature: c2, compressed: l2, useCompressionStream: h2 } = e2;
      let f2, p2, d2 = ve(super.readable);
      o2 && (a2 ? d2 = De(d2, new ue(e2)) : (p2 = new te(e2), d2 = De(d2, p2))), l2 && (d2 = ze(d2, h2, { chunkSize: t2 }, s2, n2)), o2 && !a2 || !i2 || (f2 = new C(), d2 = De(d2, f2)), ke(this, d2, () => {
        if ((!o2 || a2) && i2) {
          const e3 = new u(f2.value.buffer);
          if (c2 != e3.getUint32(0, false)) throw new r(K);
        }
      });
    }
  }
  function ve(e2) {
    return De(e2, new g({ transform(e3, t2) {
      e3 && e3.length && t2.enqueue(e3);
    } }));
  }
  function ke(e2, n2, s2) {
    n2 = De(n2, new g({ flush: s2 })), t.defineProperty(e2, "readable", { get: () => n2 });
  }
  function ze(e2, t2, n2, s2, r2) {
    try {
      e2 = De(e2, new (t2 && s2 ? s2 : r2)(_e, n2));
    } catch (s3) {
      if (!t2) return e2;
      try {
        e2 = De(e2, new r2(_e, n2));
      } catch (t3) {
        return e2;
      }
    }
    return e2;
  }
  function De(e2, t2) {
    return e2.pipeThrough(t2);
  }
  const Ce = "data", Ie = "close";
  class Ae extends g {
    constructor(e2, n2) {
      super({});
      const s2 = this, { codecType: r2 } = e2;
      let a2;
      r2.startsWith("deflate") ? a2 = be : r2.startsWith("inflate") && (a2 = Se);
      let o2 = 0, i2 = 0;
      const c2 = new a2(e2, n2), l2 = super.readable, u2 = new g({ transform(e3, t2) {
        e3 && e3.length && (i2 += e3.length, t2.enqueue(e3));
      }, flush() {
        t.assign(s2, { inputSize: i2 });
      } }), h2 = new g({ transform(e3, t2) {
        e3 && e3.length && (o2 += e3.length, t2.enqueue(e3));
      }, flush() {
        const { signature: e3 } = c2;
        t.assign(s2, { signature: e3, outputSize: o2, inputSize: i2 });
      } });
      t.defineProperty(s2, "readable", { get: () => l2.pipeThrough(u2).pipeThrough(c2).pipeThrough(h2) });
    }
  }
  class qe extends g {
    constructor(e2) {
      let t2;
      super({ transform: function n2(s2, r2) {
        if (t2) {
          const e3 = new a(t2.length + s2.length);
          e3.set(t2), e3.set(s2, t2.length), s2 = e3, t2 = null;
        }
        s2.length > e2 ? (r2.enqueue(s2.slice(0, e2)), n2(s2.slice(e2), r2)) : t2 = s2;
      }, flush(e3) {
        t2 && t2.length && e3.enqueue(t2);
      } });
    }
  }
  const Re = new l(), He = new l();
  let Pe, Be = 0, Ke = true;
  async function Te(e2) {
    try {
      const { options: t2, scripts: s2, config: r2 } = e2;
      if (s2 && s2.length) try {
        Ke ? importScripts.apply(b, s2) : await Ve(s2);
      } catch (e3) {
        Ke = false, await Ve(s2);
      }
      self.initCodec && self.initCodec(), r2.CompressionStreamNative = self.CompressionStream, r2.DecompressionStreamNative = self.DecompressionStream, self.Deflate && (r2.CompressionStream = new k(self.Deflate)), self.Inflate && (r2.DecompressionStream = new k(self.Inflate));
      const a2 = { highWaterMark: 1 }, o2 = e2.readable || new w({ async pull(e3) {
        const t3 = new h((e4) => Re.set(Be, e4));
        xe({ type: "pull", messageId: Be }), Be = (Be + 1) % n.MAX_SAFE_INTEGER;
        const { value: s3, done: r3 } = await t3;
        e3.enqueue(s3), r3 && e3.close();
      } }, a2), i2 = e2.writable || new y({ async write(e3) {
        let t3;
        const s3 = new h((e4) => t3 = e4);
        He.set(Be, t3), xe({ type: Ce, value: e3, messageId: Be }), Be = (Be + 1) % n.MAX_SAFE_INTEGER, await s3;
      } }, a2), c2 = new Ae(t2, r2);
      Pe = new AbortController();
      const { signal: l2 } = Pe;
      await o2.pipeThrough(c2).pipeThrough(new qe(r2.chunkSize)).pipeTo(i2, { signal: l2, preventClose: true, preventAbort: true }), await i2.getWriter().close();
      const { signature: u2, inputSize: f2, outputSize: p2 } = c2;
      xe({ type: Ie, result: { signature: u2, inputSize: f2, outputSize: p2 } });
    } catch (e3) {
      Ee(e3);
    }
  }
  async function Ve(e2) {
    for (const t2 of e2) await import(t2);
  }
  function xe(e2) {
    let { value: t2 } = e2;
    if (t2) if (t2.length) try {
      t2 = new a(t2), e2.value = t2.buffer, d(e2, [e2.value]);
    } catch (t3) {
      d(e2);
    }
    else d(e2);
    else d(e2);
  }
  function Ee(e2 = new r("Unknown error")) {
    const { message: t2, stack: n2, code: s2, name: a2 } = e2;
    d({ error: { message: t2, stack: n2, code: s2, name: a2 } });
  }
  function Ue(e2, n2, s2) {
    return class {
      constructor(r3) {
        const o2 = this;
        var i2, c2;
        i2 = r3, c2 = "level", (typeof t.hasOwn === v ? t.hasOwn(i2, c2) : i2.hasOwnProperty(c2)) && r3.level === b && delete r3.level, o2.codec = new e2(t.assign({}, n2, r3)), s2(o2.codec, (e3) => {
          if (o2.pendingData) {
            const t2 = o2.pendingData;
            o2.pendingData = new a(t2.length + e3.length);
            const { pendingData: n3 } = o2;
            n3.set(t2, 0), n3.set(e3, t2.length);
          } else o2.pendingData = new a(e3);
        });
      }
      append(e3) {
        return this.codec.push(e3), r2(this);
      }
      flush() {
        return this.codec.push(new a(), true), r2(this);
      }
    };
    function r2(e3) {
      if (e3.pendingData) {
        const t2 = e3.pendingData;
        return e3.pendingData = null, t2;
      }
      return new a();
    }
  }
  addEventListener("message", ({ data: e2 }) => {
    const { type: t2, messageId: n2, value: s2, done: r2 } = e2;
    try {
      if ("start" == t2 && Te(e2), t2 == Ce) {
        const e3 = Re.get(n2);
        Re.delete(n2), e3({ value: new a(s2), done: r2 });
      }
      if ("ack" == t2) {
        const e3 = He.get(n2);
        He.delete(n2), e3();
      }
      t2 == Ie && Pe.abort();
    } catch (e3) {
      Ee(e3);
    }
  }), self.initCodec = () => {
    const { Deflate: e2, Inflate: t2 } = ((e3, t3 = {}, n2) => ({ Deflate: Ue(e3.Deflate, t3.deflate, n2), Inflate: Ue(e3.Inflate, t3.inflate, n2) }))(pako, { deflate: { raw: true }, inflate: { raw: true } }, (e3, t3) => e3.onData = t3);
    self.Deflate = e2, self.Inflate = t2;
  };
}();
