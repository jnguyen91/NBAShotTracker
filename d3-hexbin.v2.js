// https://github.com/d3/d3-hexbin Version 0.2.2. Copyright 2017 Mike Bostock.
!function (n, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(n.d3 = n.d3 || {}) }(this, function (n) { "use strict"; function t(n) { return n[0] } function r(n) { return n[1] } var e = Math.PI / 3, u = [0, e, 2 * e, 3 * e, 4 * e, 5 * e], o = function () { function n(n) { var t, r = {}, e = [], u = n.length; for (t = 0; t < u; ++t)if (!isNaN(i = +d.call(null, o = n[t], t, n)) && !isNaN(c = +p.call(null, o, t, n))) { var o, i, c, s = Math.round(c /= f), h = Math.round(i = i / a - (1 & s) / 2), l = c - s; if (3 * Math.abs(l) > 1) { var v = i - h, M = h + (i < h ? -1 : 1) / 2, x = s + (c < s ? -1 : 1), g = i - M, m = c - x; v * v + l * l > g * g + m * m && (h = M + (1 & s ? 1 : -1) / 2, s = x) } var y = h + "-" + s, j = r[y]; j ? j.push(o) : (e.push(j = r[y] = [o]), j.x = (h + (1 & s) / 2) * a, j.y = s * f) } return e } function o(n) { var t = 0, r = 0; return u.map(function (e) { var u = Math.sin(e) * n, o = -Math.cos(e) * n, i = u - t, a = o - r; return t = u, r = o, [i, a] }) } var i, a, f, c = 0, s = 0, h = 1, l = 1, d = t, p = r; return n.hexagon = function (n) { return "m" + o(null == n ? i : +n).join("l") + "z" }, n.centers = function () { for (var n = [], t = Math.round(s / f), r = Math.round(c / a), e = t * f; e < l + i; e += f, ++t)for (var u = r * a + (1 & t) * a / 2; u < h + a / 2; u += a)n.push([u, e]); return n }, n.mesh = function () { var t = o(i).slice(0, 4).join("l"); return n.centers().map(function (n) { return "M" + n + "m" + t }).join("") }, n.x = function (t) { return arguments.length ? (d = t, n) : d }, n.y = function (t) { return arguments.length ? (p = t, n) : p }, n.radius = function (t) { return arguments.length ? (i = +t, a = 2 * i * Math.sin(e), f = 1.5 * i, n) : i }, n.size = function (t) { return arguments.length ? (c = s = 0, h = +t[0], l = +t[1], n) : [h - c, l - s] }, n.extent = function (t) { return arguments.length ? (c = +t[0][0], s = +t[0][1], h = +t[1][0], l = +t[1][1], n) : [[c, s], [h, l]] }, n.radius(1) }; n.hexbin = o, Object.defineProperty(n, "__esModule", { value: !0 }) });