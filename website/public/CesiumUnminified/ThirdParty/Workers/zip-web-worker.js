!(function() {
  "use strict";
  const { Array: e, Object: t, Number: n, Math: s, Error: r, Uint8Array: i, Uint16Array: a, Uint32Array: o, Int32Array: c, Map: l, DataView: u, Promise: h, TextEncoder: f, crypto: p, postMessage: d, TransformStream: w, ReadableStream: g, WritableStream: m, CompressionStream: _, DecompressionStream: y } = self, b = void 0, S = "undefined", z = "function", k = [];
  for (let e2 = 0; 256 > e2; e2++) {
    let t2 = e2;
    for (let e3 = 0; 8 > e3; e3++) 1 & t2 ? t2 = t2 >>> 1 ^ 3988292384 : t2 >>>= 1;
    k[e2] = t2;
  }
  class v {
    constructor(e2) {
      this.crc = e2 || -1;
    }
    append(e2) {
      let t2 = 0 | this.crc;
      for (let n2 = 0, s2 = 0 | e2.length; s2 > n2; n2++) t2 = t2 >>> 8 ^ k[255 & (t2 ^ e2[n2])];
      this.crc = t2;
    }
    get() {
      return ~this.crc;
    }
  }
  class H extends w {
    constructor() {
      let e2;
      const t2 = new v();
      super({ transform(e3, n2) {
        t2.append(e3), n2.enqueue(e3);
      }, flush() {
        const n2 = new i(4);
        new u(n2.buffer).setUint32(0, t2.get()), e2.value = n2;
      } }), e2 = this;
    }
  }
  const C = { concat(e2, t2) {
    if (0 === e2.length || 0 === t2.length) return e2.concat(t2);
    const n2 = e2[e2.length - 1], s2 = C.getPartial(n2);
    return 32 === s2 ? e2.concat(t2) : C._shiftRight(t2, s2, 0 | n2, e2.slice(0, e2.length - 1));
  }, bitLength(e2) {
    const t2 = e2.length;
    if (0 === t2) return 0;
    const n2 = e2[t2 - 1];
    return 32 * (t2 - 1) + C.getPartial(n2);
  }, clamp(e2, t2) {
    if (32 * e2.length < t2) return e2;
    const n2 = (e2 = e2.slice(0, s.ceil(t2 / 32))).length;
    return t2 &= 31, n2 > 0 && t2 && (e2[n2 - 1] = C.partial(t2, e2[n2 - 1] & 2147483648 >> t2 - 1, 1)), e2;
  }, partial: (e2, t2, n2) => 32 === e2 ? t2 : (n2 ? 0 | t2 : t2 << 32 - e2) + 1099511627776 * e2, getPartial: (e2) => s.round(e2 / 1099511627776) || 32, _shiftRight(e2, t2, n2, s2) {
    for (void 0 === s2 && (s2 = []); t2 >= 32; t2 -= 32) s2.push(n2), n2 = 0;
    if (0 === t2) return s2.concat(e2);
    for (let r3 = 0; r3 < e2.length; r3++) s2.push(n2 | e2[r3] >>> t2), n2 = e2[r3] << 32 - t2;
    const r2 = e2.length ? e2[e2.length - 1] : 0, i2 = C.getPartial(r2);
    return s2.push(C.partial(t2 + i2 & 31, t2 + i2 > 32 ? n2 : s2.pop(), 1)), s2;
  } }, B = { bytes: { fromBits(e2) {
    const t2 = C.bitLength(e2) / 8, n2 = new i(t2);
    let s2;
    for (let r2 = 0; t2 > r2; r2++) 3 & r2 || (s2 = e2[r2 / 4]), n2[r2] = s2 >>> 24, s2 <<= 8;
    return n2;
  }, toBits(e2) {
    const t2 = [];
    let n2, s2 = 0;
    for (n2 = 0; n2 < e2.length; n2++) s2 = s2 << 8 | e2[n2], 3 & ~n2 || (t2.push(s2), s2 = 0);
    return 3 & n2 && t2.push(C.partial(8 * (3 & n2), s2)), t2;
  } } }, A = class {
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
      "string" == typeof e2 && (e2 = B.utf8String.toBits(e2));
      const n2 = t2._buffer = C.concat(t2._buffer, e2), s2 = t2._length, i2 = t2._length = s2 + C.bitLength(e2);
      if (i2 > 9007199254740991) throw new r("Cannot hash more than 2^53 - 1 bits");
      const a2 = new o(n2);
      let c2 = 0;
      for (let e3 = t2.blockSize + s2 - (t2.blockSize + s2 & t2.blockSize - 1); i2 >= e3; e3 += t2.blockSize) t2._block(a2.subarray(16 * c2, 16 * (c2 + 1))), c2 += 1;
      return n2.splice(0, 16 * c2), t2;
    }
    finalize() {
      const e2 = this;
      let t2 = e2._buffer;
      const n2 = e2._h;
      t2 = C.concat(t2, [C.partial(1, 1)]);
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
      const n2 = this, r2 = n2._h, i2 = e(80);
      for (let e2 = 0; 16 > e2; e2++) i2[e2] = t2[e2];
      let a2 = r2[0], o2 = r2[1], c2 = r2[2], l2 = r2[3], u2 = r2[4];
      for (let e2 = 0; 79 >= e2; e2++) {
        16 > e2 || (i2[e2] = n2._S(1, i2[e2 - 3] ^ i2[e2 - 8] ^ i2[e2 - 14] ^ i2[e2 - 16]));
        const t3 = n2._S(5, a2) + n2._f(e2, o2, c2, l2) + u2 + i2[e2] + n2._key[s.floor(e2 / 20)] | 0;
        u2 = l2, l2 = c2, c2 = n2._S(30, o2), o2 = a2, a2 = t3;
      }
      r2[0] = r2[0] + a2 | 0, r2[1] = r2[1] + o2 | 0, r2[2] = r2[2] + c2 | 0, r2[3] = r2[3] + l2 | 0, r2[4] = r2[4] + u2 | 0;
    }
  }, R = { getRandomValues(e2) {
    const t2 = new o(e2.buffer), n2 = (e3) => {
      let t3 = 987654321;
      const n3 = 4294967295;
      return () => (t3 = 36969 * (65535 & t3) + (t3 >> 16) & n3, (((t3 << 16) + (e3 = 18e3 * (65535 & e3) + (e3 >> 16) & n3) & n3) / 4294967296 + 0.5) * (s.random() > 0.5 ? 1 : -1));
    };
    for (let r2, i2 = 0; i2 < e2.length; i2 += 4) {
      const e3 = n2(4294967296 * (r2 || s.random()));
      r2 = 987654071 * e3(), t2[i2 / 4] = 4294967296 * e3() | 0;
    }
    return e2;
  } }, I = { importKey: (e2) => new I.hmacSha1(B.bytes.toBits(e2)), pbkdf2(e2, t2, n2, s2) {
    if (n2 = n2 || 1e4, 0 > s2 || 0 > n2) throw new r("invalid params to pbkdf2");
    const i2 = 1 + (s2 >> 5) << 2;
    let a2, o2, c2, l2, h2;
    const f2 = new ArrayBuffer(i2), p2 = new u(f2);
    let d2 = 0;
    const w2 = C;
    for (t2 = B.bytes.toBits(t2), h2 = 1; (i2 || 1) > d2; h2++) {
      for (a2 = o2 = e2.encrypt(w2.concat(t2, [h2])), c2 = 1; n2 > c2; c2++) for (o2 = e2.encrypt(o2), l2 = 0; l2 < o2.length; l2++) a2[l2] ^= o2[l2];
      for (c2 = 0; (i2 || 1) > d2 && c2 < a2.length; c2++) p2.setInt32(d2, a2[c2]), d2 += 4;
    }
    return f2.slice(0, s2 / 8);
  }, hmacSha1: class {
    constructor(e2) {
      const t2 = this, n2 = t2._hash = A, s2 = [[], []];
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
  } }, q = typeof p != S && typeof p.getRandomValues == z, K = "Invalid password", P = "Invalid signature", T = "zipjs-abort-check-password";
  function V(e2) {
    return q ? p.getRandomValues(e2) : R.getRandomValues(e2);
  }
  const x = 16, U = { name: "PBKDF2" }, W = t.assign({ hash: { name: "HMAC" } }, U), M = t.assign({ iterations: 1e3, hash: { name: "SHA-1" } }, U), E = ["deriveBits"], D = [8, 12, 16], L = [16, 24, 32], Z = 10, F = [0, 0, 0, 0], N = typeof p != S, O = N && p.subtle, j = N && typeof O != S, G = B.bytes, X = class {
    constructor(e2) {
      const t2 = this;
      t2._tables = [[[], [], [], [], []], [[], [], [], [], []]], t2._tables[0][0][0] || t2._precompute();
      const n2 = t2._tables[0][4], s2 = t2._tables[1], i2 = e2.length;
      let a2, o2, c2, l2 = 1;
      if (4 !== i2 && 6 !== i2 && 8 !== i2) throw new r("invalid aes key size");
      for (t2._key = [o2 = e2.slice(0), c2 = []], a2 = i2; 4 * i2 + 28 > a2; a2++) {
        let e3 = o2[a2 - 1];
        (a2 % i2 === 0 || 8 === i2 && a2 % i2 === 4) && (e3 = n2[e3 >>> 24] << 24 ^ n2[e3 >> 16 & 255] << 16 ^ n2[e3 >> 8 & 255] << 8 ^ n2[255 & e3], a2 % i2 === 0 && (e3 = e3 << 8 ^ e3 >>> 24 ^ l2 << 24, l2 = l2 << 1 ^ 283 * (l2 >> 7))), o2[a2] = o2[a2 - i2] ^ e3;
      }
      for (let e3 = 0; a2; e3++, a2--) {
        const t3 = o2[3 & e3 ? a2 : a2 - 4];
        c2[e3] = 4 >= a2 || 4 > e3 ? t3 : s2[0][n2[t3 >>> 24]] ^ s2[1][n2[t3 >> 16 & 255]] ^ s2[2][n2[t3 >> 8 & 255]] ^ s2[3][n2[255 & t3]];
      }
    }
    encrypt(e2) {
      return this._crypt(e2, 0);
    }
    decrypt(e2) {
      return this._crypt(e2, 1);
    }
    _precompute() {
      const e2 = this._tables[0], t2 = this._tables[1], n2 = e2[4], s2 = t2[4], r2 = [], i2 = [];
      let a2, o2, c2, l2;
      for (let e3 = 0; 256 > e3; e3++) i2[(r2[e3] = e3 << 1 ^ 283 * (e3 >> 7)) ^ e3] = e3;
      for (let u2 = a2 = 0; !n2[u2]; u2 ^= o2 || 1, a2 = i2[a2] || 1) {
        let i3 = a2 ^ a2 << 1 ^ a2 << 2 ^ a2 << 3 ^ a2 << 4;
        i3 = i3 >> 8 ^ 255 & i3 ^ 99, n2[u2] = i3, s2[i3] = u2, l2 = r2[c2 = r2[o2 = r2[u2]]];
        let h2 = 16843009 * l2 ^ 65537 * c2 ^ 257 * o2 ^ 16843008 * u2, f2 = 257 * r2[i3] ^ 16843008 * i3;
        for (let n3 = 0; 4 > n3; n3++) e2[n3][u2] = f2 = f2 << 24 ^ f2 >>> 8, t2[n3][i3] = h2 = h2 << 24 ^ h2 >>> 8;
      }
      for (let n3 = 0; 5 > n3; n3++) e2[n3] = e2[n3].slice(0), t2[n3] = t2[n3].slice(0);
    }
    _crypt(e2, t2) {
      if (4 !== e2.length) throw new r("invalid aes block size");
      const n2 = this._key[t2], s2 = n2.length / 4 - 2, i2 = [0, 0, 0, 0], a2 = this._tables[t2], o2 = a2[0], c2 = a2[1], l2 = a2[2], u2 = a2[3], h2 = a2[4];
      let f2, p2, d2, w2 = e2[0] ^ n2[0], g2 = e2[t2 ? 3 : 1] ^ n2[1], m2 = e2[2] ^ n2[2], _2 = e2[t2 ? 1 : 3] ^ n2[3], y2 = 4;
      for (let e3 = 0; s2 > e3; e3++) f2 = o2[w2 >>> 24] ^ c2[g2 >> 16 & 255] ^ l2[m2 >> 8 & 255] ^ u2[255 & _2] ^ n2[y2], p2 = o2[g2 >>> 24] ^ c2[m2 >> 16 & 255] ^ l2[_2 >> 8 & 255] ^ u2[255 & w2] ^ n2[y2 + 1], d2 = o2[m2 >>> 24] ^ c2[_2 >> 16 & 255] ^ l2[w2 >> 8 & 255] ^ u2[255 & g2] ^ n2[y2 + 2], _2 = o2[_2 >>> 24] ^ c2[w2 >> 16 & 255] ^ l2[g2 >> 8 & 255] ^ u2[255 & m2] ^ n2[y2 + 3], y2 += 4, w2 = f2, g2 = p2, m2 = d2;
      for (let e3 = 0; 4 > e3; e3++) i2[t2 ? 3 & -e3 : e3] = h2[w2 >>> 24] << 24 ^ h2[g2 >> 16 & 255] << 16 ^ h2[m2 >> 8 & 255] << 8 ^ h2[255 & _2] ^ n2[y2++], f2 = w2, w2 = g2, g2 = m2, m2 = _2, _2 = f2;
      return i2;
    }
  }, J = class {
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
      const r2 = C.bitLength(t2);
      for (let r3 = 0; s2 > r3; r3 += 4) {
        this.incCounter(n2);
        const s3 = e2.encrypt(n2);
        t2[r3] ^= s3[0], t2[r3 + 1] ^= s3[1], t2[r3 + 2] ^= s3[2], t2[r3 + 3] ^= s3[3];
      }
      return C.clamp(t2, r2);
    }
  }, Q = I.hmacSha1;
  let Y = N && j && typeof O.importKey == z, $ = N && j && typeof O.deriveBits == z;
  class ee extends w {
    constructor({ password: e2, rawPassword: n2, signed: s2, encryptionStrength: a2, checkPasswordOnly: o2 }) {
      super({ start() {
        t.assign(this, { ready: new h((e3) => this.resolveReady = e3), password: re(e2, n2), signed: s2, strength: a2 - 1, pending: new i() });
      }, async transform(e3, t2) {
        const n3 = this, { password: s3, strength: a3, resolveReady: c2, ready: l2 } = n3;
        s3 ? (await (async (e4, t3, n4, s4) => {
          const i2 = await se(e4, t3, n4, ae(s4, 0, D[t3])), a4 = ae(s4, D[t3]);
          if (i2[0] != a4[0] || i2[1] != a4[1]) throw new r(K);
        })(n3, a3, s3, ae(e3, 0, D[a3] + 2)), e3 = ae(e3, D[a3] + 2), o2 ? t2.error(new r(T)) : c2()) : await l2;
        const u2 = new i(e3.length - Z - (e3.length - Z) % x);
        t2.enqueue(ne(n3, e3, u2, 0, Z, true));
      }, async flush(e3) {
        const { signed: t2, ctr: n3, hmac: s3, pending: a3, ready: o3 } = this;
        if (s3 && n3) {
          await o3;
          const c2 = ae(a3, 0, a3.length - Z), l2 = ae(a3, a3.length - Z);
          let u2 = new i();
          if (c2.length) {
            const e4 = ce(G, c2);
            s3.update(e4);
            const t3 = n3.update(e4);
            u2 = oe(G, t3);
          }
          if (t2) {
            const e4 = ae(oe(G, s3.digest()), 0, Z);
            for (let t3 = 0; Z > t3; t3++) if (e4[t3] != l2[t3]) throw new r(P);
          }
          e3.enqueue(u2);
        }
      } });
    }
  }
  class te extends w {
    constructor({ password: e2, rawPassword: n2, encryptionStrength: s2 }) {
      let r2;
      super({ start() {
        t.assign(this, { ready: new h((e3) => this.resolveReady = e3), password: re(e2, n2), strength: s2 - 1, pending: new i() });
      }, async transform(e3, t2) {
        const n3 = this, { password: s3, strength: r3, resolveReady: a2, ready: o2 } = n3;
        let c2 = new i();
        s3 ? (c2 = await (async (e4, t3, n4) => {
          const s4 = V(new i(D[t3]));
          return ie(s4, await se(e4, t3, n4, s4));
        })(n3, r3, s3), a2()) : await o2;
        const l2 = new i(c2.length + e3.length - e3.length % x);
        l2.set(c2, 0), t2.enqueue(ne(n3, e3, l2, c2.length, 0));
      }, async flush(e3) {
        const { ctr: t2, hmac: n3, pending: s3, ready: a2 } = this;
        if (n3 && t2) {
          await a2;
          let o2 = new i();
          if (s3.length) {
            const e4 = t2.update(ce(G, s3));
            n3.update(e4), o2 = oe(G, e4);
          }
          r2.signature = oe(G, n3.digest()).slice(0, Z), e3.enqueue(ie(o2, r2.signature));
        }
      } }), r2 = this;
    }
  }
  function ne(e2, t2, n2, s2, r2, a2) {
    const { ctr: o2, hmac: c2, pending: l2 } = e2, u2 = t2.length - r2;
    let h2;
    for (l2.length && (t2 = ie(l2, t2), n2 = ((e3, t3) => {
      if (t3 && t3 > e3.length) {
        const n3 = e3;
        (e3 = new i(t3)).set(n3, 0);
      }
      return e3;
    })(n2, u2 - u2 % x)), h2 = 0; u2 - x >= h2; h2 += x) {
      const e3 = ce(G, ae(t2, h2, h2 + x));
      a2 && c2.update(e3);
      const r3 = o2.update(e3);
      a2 || c2.update(r3), n2.set(oe(G, r3), h2 + s2);
    }
    return e2.pending = ae(t2, h2), n2;
  }
  async function se(n2, s2, r2, a2) {
    n2.password = null;
    const o2 = await (async (e2, t2, n3, s3, r3) => {
      if (!Y) return I.importKey(t2);
      try {
        return await O.importKey("raw", t2, n3, false, r3);
      } catch {
        return Y = false, I.importKey(t2);
      }
    })(0, r2, W, 0, E), c2 = await (async (e2, t2, n3) => {
      if (!$) return I.pbkdf2(t2, e2.salt, M.iterations, n3);
      try {
        return await O.deriveBits(e2, t2, n3);
      } catch {
        return $ = false, I.pbkdf2(t2, e2.salt, M.iterations, n3);
      }
    })(t.assign({ salt: a2 }, M), o2, 8 * (2 * L[s2] + 2)), l2 = new i(c2), u2 = ce(G, ae(l2, 0, L[s2])), h2 = ce(G, ae(l2, L[s2], 2 * L[s2])), f2 = ae(l2, 2 * L[s2]);
    return t.assign(n2, { keys: { key: u2, authentication: h2, passwordVerification: f2 }, ctr: new J(new X(u2), e.from(F)), hmac: new Q(h2) }), f2;
  }
  function re(e2, t2) {
    return t2 === b ? ((e3) => {
      if (typeof f == S) {
        const t3 = new i((e3 = unescape(encodeURIComponent(e3))).length);
        for (let n2 = 0; n2 < t3.length; n2++) t3[n2] = e3.charCodeAt(n2);
        return t3;
      }
      return new f().encode(e3);
    })(e2) : t2;
  }
  function ie(e2, t2) {
    let n2 = e2;
    return e2.length + t2.length && (n2 = new i(e2.length + t2.length), n2.set(e2, 0), n2.set(t2, e2.length)), n2;
  }
  function ae(e2, t2, n2) {
    return e2.subarray(t2, n2);
  }
  function oe(e2, t2) {
    return e2.fromBits(t2);
  }
  function ce(e2, t2) {
    return e2.toBits(t2);
  }
  class le extends w {
    constructor({ password: e2, passwordVerification: n2, checkPasswordOnly: s2 }) {
      super({ start() {
        t.assign(this, { password: e2, passwordVerification: n2 }), pe(this, e2);
      }, transform(e3, t2) {
        const n3 = this;
        if (n3.password) {
          const t3 = he(n3, e3.subarray(0, 12));
          if (n3.password = null, t3.at(-1) != n3.passwordVerification) throw new r(K);
          e3 = e3.subarray(12);
        }
        s2 ? t2.error(new r(T)) : t2.enqueue(he(n3, e3));
      } });
    }
  }
  class ue extends w {
    constructor({ password: e2, passwordVerification: n2 }) {
      super({ start() {
        t.assign(this, { password: e2, passwordVerification: n2 }), pe(this, e2);
      }, transform(e3, t2) {
        const n3 = this;
        let s2, r2;
        if (n3.password) {
          n3.password = null;
          const t3 = V(new i(12));
          t3[11] = n3.passwordVerification, s2 = new i(e3.length + t3.length), s2.set(fe(n3, t3), 0), r2 = 12;
        } else s2 = new i(e3.length), r2 = 0;
        s2.set(fe(n3, e3), r2), t2.enqueue(s2);
      } });
    }
  }
  function he(e2, t2) {
    const n2 = new i(t2.length);
    for (let s2 = 0; s2 < t2.length; s2++) n2[s2] = we(e2) ^ t2[s2], de(e2, n2[s2]);
    return n2;
  }
  function fe(e2, t2) {
    const n2 = new i(t2.length);
    for (let s2 = 0; s2 < t2.length; s2++) n2[s2] = we(e2) ^ t2[s2], de(e2, t2[s2]);
    return n2;
  }
  function pe(e2, n2) {
    const s2 = [305419896, 591751049, 878082192];
    t.assign(e2, { keys: s2, crcKey0: new v(s2[0]), crcKey2: new v(s2[2]) });
    for (let t2 = 0; t2 < n2.length; t2++) de(e2, n2.charCodeAt(t2));
  }
  function de(e2, t2) {
    let [n2, r2, i2] = e2.keys;
    e2.crcKey0.append([t2]), n2 = ~e2.crcKey0.get(), r2 = me(s.imul(me(r2 + ge(n2)), 134775813) + 1), e2.crcKey2.append([r2 >>> 24]), i2 = ~e2.crcKey2.get(), e2.keys = [n2, r2, i2];
  }
  function we(e2) {
    const t2 = 2 | e2.keys[2];
    return ge(s.imul(t2, 1 ^ t2) >>> 8);
  }
  function ge(e2) {
    return 255 & e2;
  }
  function me(e2) {
    return 4294967295 & e2;
  }
  class _e extends w {
    constructor(e2, { chunkSize: t2, CompressionStreamZlib: n2, CompressionStream: s2 }) {
      super({});
      const { compressed: r2, encrypted: i2, useCompressionStream: a2, zipCrypto: o2, signed: c2, level: l2 } = e2, h2 = this;
      let f2, p2, d2 = super.readable;
      i2 && !o2 || !c2 || (f2 = new H(), d2 = ze(d2, f2)), r2 && (d2 = Se(d2, a2, { level: l2, chunkSize: t2 }, s2, n2, s2)), i2 && (o2 ? d2 = ze(d2, new ue(e2)) : (p2 = new te(e2), d2 = ze(d2, p2))), be(h2, d2, () => {
        let e3;
        i2 && !o2 && (e3 = p2.signature), i2 && !o2 || !c2 || (e3 = new u(f2.value.buffer).getUint32(0)), h2.signature = e3;
      });
    }
  }
  class ye extends w {
    constructor(e2, { chunkSize: t2, DecompressionStreamZlib: n2, DecompressionStream: s2 }) {
      super({});
      const { zipCrypto: i2, encrypted: a2, signed: o2, signature: c2, compressed: l2, useCompressionStream: h2, deflate64: f2 } = e2;
      let p2, d2, w2 = super.readable;
      a2 && (i2 ? w2 = ze(w2, new le(e2)) : (d2 = new ee(e2), w2 = ze(w2, d2))), l2 && (w2 = Se(w2, h2, { chunkSize: t2, deflate64: f2 }, s2, n2, s2)), a2 && !i2 || !o2 || (p2 = new H(), w2 = ze(w2, p2)), be(this, w2, () => {
        if ((!a2 || i2) && o2) {
          const e3 = new u(p2.value.buffer);
          if (c2 != e3.getUint32(0, false)) throw new r(P);
        }
      });
    }
  }
  function be(e2, n2, s2) {
    n2 = ze(n2, new w({ flush: s2 })), t.defineProperty(e2, "readable", { get: () => n2 });
  }
  function Se(e2, t2, n2, s2, r2, i2) {
    const a2 = t2 && s2 ? s2 : r2 || i2, o2 = n2.deflate64 ? "deflate64-raw" : "deflate-raw";
    try {
      e2 = ze(e2, new a2(o2, n2));
    } catch (s3) {
      if (!t2) throw s3;
      if (r2) e2 = ze(e2, new r2(o2, n2));
      else {
        if (!i2) throw s3;
        e2 = ze(e2, new i2(o2, n2));
      }
    }
    return e2;
  }
  function ze(e2, t2) {
    return e2.pipeThrough(t2);
  }
  const ke = "data", ve = "close";
  class He extends w {
    constructor(e2, n2) {
      super({});
      const s2 = this, { codecType: i2 } = e2;
      let a2;
      i2.startsWith("deflate") ? a2 = _e : i2.startsWith("inflate") && (a2 = ye), s2.outputSize = 0;
      let o2 = 0;
      const c2 = new a2(e2, n2), l2 = super.readable, u2 = new w({ transform(e3, t2) {
        e3 && e3.length && (o2 += e3.length, t2.enqueue(e3));
      }, flush() {
        t.assign(s2, { inputSize: o2 });
      } }), h2 = new w({ transform(t2, n3) {
        if (t2 && t2.length && (n3.enqueue(t2), s2.outputSize += t2.length, e2.outputSize !== b && s2.outputSize > e2.outputSize)) throw new r("Invalid uncompressed size");
      }, flush() {
        const { signature: e3 } = c2;
        t.assign(s2, { signature: e3, inputSize: o2 });
      } });
      t.defineProperty(s2, "readable", { get: () => l2.pipeThrough(u2).pipeThrough(c2).pipeThrough(h2) });
    }
  }
  class Ce extends w {
    constructor(e2) {
      let t2;
      super({ transform: function n2(s2, r2) {
        if (t2) {
          const e3 = new i(t2.length + s2.length);
          e3.set(t2), e3.set(s2, t2.length), s2 = e3, t2 = null;
        }
        s2.length > e2 ? (r2.enqueue(s2.slice(0, e2)), n2(s2.slice(e2), r2)) : t2 = s2;
      }, flush(e3) {
        t2 && t2.length && e3.enqueue(t2);
      } });
    }
  }
  const Be = new l(), Ae = new l();
  let Re, Ie, qe, Ke, Pe, Te = 0;
  async function Ve(e2) {
    try {
      const { options: t2, config: s2 } = e2;
      if (!t2.useCompressionStream) try {
        await self.initModule(e2.config);
      } catch {
        t2.useCompressionStream = true;
      }
      s2.CompressionStream = self.CompressionStream, s2.DecompressionStream = self.DecompressionStream;
      const r2 = { highWaterMark: 1 }, i2 = e2.readable || new g({ async pull(e3) {
        const t3 = new h((e4) => Be.set(Te, e4));
        xe({ type: "pull", messageId: Te }), Te = (Te + 1) % n.MAX_SAFE_INTEGER;
        const { value: s3, done: r3 } = await t3;
        e3.enqueue(s3), r3 && e3.close();
      } }, r2), a2 = e2.writable || new m({ async write(e3) {
        let t3;
        const s3 = new h((e4) => t3 = e4);
        Ae.set(Te, t3), xe({ type: ke, value: e3, messageId: Te }), Te = (Te + 1) % n.MAX_SAFE_INTEGER, await s3;
      } }, r2), o2 = new He(t2, s2);
      Re = new AbortController();
      const { signal: c2 } = Re;
      await i2.pipeThrough(o2).pipeThrough(new Ce(s2.chunkSize)).pipeTo(a2, { signal: c2, preventClose: true, preventAbort: true }), await a2.getWriter().close();
      const { signature: l2, inputSize: u2, outputSize: f2 } = o2;
      xe({ type: ve, result: { signature: l2, inputSize: u2, outputSize: f2 } });
    } catch (e3) {
      e3.outputSize = 0, Ue(e3);
    }
  }
  function xe(e2) {
    let { value: t2 } = e2;
    if (t2) if (t2.length) try {
      t2 = new i(t2), e2.value = t2.buffer, d(e2, [e2.value]);
    } catch {
      d(e2);
    }
    else d(e2);
    else d(e2);
  }
  function Ue(e2 = new r("Unknown error")) {
    const { message: t2, stack: n2, code: s2, name: i2, outputSize: a2 } = e2;
    d({ error: { message: t2, stack: n2, code: s2, name: i2, outputSize: a2 } });
  }
  function We(e2, t2, n2 = {}) {
    const a2 = "number" == typeof n2.level ? n2.level : -1, o2 = "number" == typeof n2.outBuffer ? n2.outBuffer : 65536, c2 = "number" == typeof n2.inBufferSize ? n2.inBufferSize : 65536;
    return new w({ start() {
      let n3;
      if (this.out = qe(o2), this.in = qe(c2), this.inBufferSize = c2, this._scratch = new i(o2), e2 ? (this._process = Ie.deflate_process, this._last_consumed = Ie.deflate_last_consumed, this._end = Ie.deflate_end, this.streamHandle = Ie.deflate_new(), n3 = "gzip" === t2 ? Ie.deflate_init_gzip(this.streamHandle, a2) : "deflate-raw" === t2 ? Ie.deflate_init_raw(this.streamHandle, a2) : Ie.deflate_init(this.streamHandle, a2)) : "deflate64-raw" === t2 ? (this._process = Ie.inflate9_process, this._last_consumed = Ie.inflate9_last_consumed, this._end = Ie.inflate9_end, this.streamHandle = Ie.inflate9_new(), n3 = Ie.inflate9_init_raw(this.streamHandle)) : (this._process = Ie.inflate_process, this._last_consumed = Ie.inflate_last_consumed, this._end = Ie.inflate_end, this.streamHandle = Ie.inflate_new(), n3 = "deflate-raw" === t2 ? Ie.inflate_init_raw(this.streamHandle) : "gzip" === t2 ? Ie.inflate_init_gzip(this.streamHandle) : Ie.inflate_init(this.streamHandle)), 0 !== n3) throw new r("init failed:" + n3);
    }, transform(t3, n3) {
      try {
        const a3 = t3, c3 = new i(Pe.buffer), l2 = this._process, u2 = this._last_consumed, h2 = this.out, f2 = this._scratch;
        let p2 = 0;
        for (; p2 < a3.length; ) {
          const t4 = s.min(a3.length - p2, 32768);
          this.in && this.inBufferSize >= t4 || (this.in && Ke && Ke(this.in), this.in = qe(t4), this.inBufferSize = t4), c3.set(a3.subarray(p2, p2 + t4), this.in);
          const i2 = l2(this.streamHandle, this.in, t4, h2, o2, 0);
          if (!e2 && 0 > i2) throw new r("process error:" + i2);
          const d2 = 16777215 & i2;
          d2 && (f2.set(c3.subarray(h2, h2 + d2), 0), n3.enqueue(f2.slice(0, d2)));
          const w2 = u2(this.streamHandle);
          if (0 === w2) break;
          p2 += w2;
        }
      } catch (e3) {
        this._end && this.streamHandle && this._end(this.streamHandle), this.in && Ke && Ke(this.in), this.out && Ke && Ke(this.out), n3.error(e3);
      }
    }, flush(t3) {
      try {
        const n3 = new i(Pe.buffer), s2 = this._process, a3 = this.out, c3 = this._scratch;
        for (; ; ) {
          const i2 = s2(this.streamHandle, 0, 0, a3, o2, 4);
          if (!e2 && 0 > i2) throw new r("process error:" + i2);
          const l2 = 16777215 & i2, u2 = i2 >> 24 & 255;
          if (l2 && (c3.set(n3.subarray(a3, a3 + l2), 0), t3.enqueue(c3.slice(0, l2))), 1 === u2 || 0 === l2) break;
        }
      } catch (e3) {
        t3.error(e3);
      } finally {
        if (this._end && this.streamHandle) {
          const e3 = this._end(this.streamHandle);
          0 !== e3 && t3.error(new r("end error:" + e3));
        }
        this.in && Ke && Ke(this.in), this.out && Ke && Ke(this.out);
      }
    } });
  }
  addEventListener("message", ({ data: e2 }) => {
    const { type: t2, messageId: n2, value: s2, done: r2 } = e2;
    try {
      if ("start" == t2 && Ve(e2), t2 == ke) {
        const e3 = Be.get(n2);
        Be.delete(n2), e3({ value: new i(s2), done: r2 });
      }
      if ("ack" == t2) {
        const e3 = Ae.get(n2);
        Ae.delete(n2), e3();
      }
      t2 == ve && Re.abort();
    } catch (e3) {
      Ue(e3);
    }
  });
  class Me {
    constructor(e2 = "deflate", t2) {
      return We(true, e2, t2);
    }
  }
  class Ee {
    constructor(e2 = "deflate", t2) {
      return We(false, e2, t2);
    }
  }
  let De = false;
  self.initModule = async (e2) => {
    try {
      const t2 = await (async (e3, { baseURI: t3 }) => {
        if (!De) {
          let n2, s2;
          try {
            try {
              s2 = new URL(e3, t3);
            } catch {
            }
            const r2 = await fetch(s2);
            n2 = await r2.arrayBuffer();
          } catch (t4) {
            if (!e3.startsWith("data:application/wasm;base64,")) throw t4;
            n2 = ((e4) => {
              const t5 = e4.split(",")[1], n3 = atob(t5), s3 = n3.length, r2 = new i(s3);
              for (let e5 = 0; s3 > e5; ++e5) r2[e5] = n3.charCodeAt(e5);
              return r2.buffer;
            })(e3);
          }
          ((e4) => {
            if (Ie = e4, { malloc: qe, free: Ke, memory: Pe } = Ie, "function" != typeof qe || "function" != typeof Ke || !Pe) throw Ie = qe = Ke = Pe = null, new r("Invalid WASM module");
          })((await WebAssembly.instantiate(n2)).instance.exports), De = true;
        }
      })(e2.wasmURI, e2);
      return e2.CompressionStreamZlib = Me, e2.DecompressionStreamZlib = Ee, t2;
    } catch {
    }
  };
})();
