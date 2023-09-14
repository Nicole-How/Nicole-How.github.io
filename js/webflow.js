/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var s = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Mi = s(() => {
    window.tram = (function (e) {
      function t(l, v) {
        var y = new P.Bare();
        return y.init(l, v);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (v) {
          return "-" + v.toLowerCase();
        });
      }
      function n(l) {
        var v = parseInt(l.slice(1), 16),
          y = (v >> 16) & 255,
          O = (v >> 8) & 255,
          C = 255 & v;
        return [y, O, C];
      }
      function o(l, v, y) {
        return (
          "#" + ((1 << 24) | (l << 16) | (v << 8) | y).toString(16).slice(1)
        );
      }
      function i() {}
      function a(l, v) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof v + "] " + v);
      }
      function u(l, v, y) {
        f("Units do not match [" + l + "]: " + v + ", " + y);
      }
      function c(l, v, y) {
        if ((v !== void 0 && (y = v), l === void 0)) return y;
        var O = y;
        return (
          je.test(l) || !Et.test(l)
            ? (O = parseInt(l, 10))
            : Et.test(l) && (O = 1e3 * parseFloat(l)),
          0 > O && (O = 0),
          O === O ? O : y
        );
      }
      function f(l) {
        se.debug && window && window.console.warn(l);
      }
      function g(l) {
        for (var v = -1, y = l ? l.length : 0, O = []; ++v < y; ) {
          var C = l[v];
          C && O.push(C);
        }
        return O;
      }
      var h = (function (l, v, y) {
          function O(J) {
            return typeof J == "object";
          }
          function C(J) {
            return typeof J == "function";
          }
          function N() {}
          function Y(J, Ee) {
            function H() {
              var De = new oe();
              return C(De.init) && De.init.apply(De, arguments), De;
            }
            function oe() {}
            Ee === y && ((Ee = J), (J = Object)), (H.Bare = oe);
            var ae,
              me = (N[l] = J[l]),
              nt = (oe[l] = H[l] = new N());
            return (
              (nt.constructor = H),
              (H.mixin = function (De) {
                return (oe[l] = H[l] = Y(H, De)[l]), H;
              }),
              (H.open = function (De) {
                if (
                  ((ae = {}),
                  C(De) ? (ae = De.call(H, nt, me, H, J)) : O(De) && (ae = De),
                  O(ae))
                )
                  for (var br in ae) v.call(ae, br) && (nt[br] = ae[br]);
                return C(nt.init) || (nt.init = J), H;
              }),
              H.open(Ee)
            );
          }
          return Y;
        })("prototype", {}.hasOwnProperty),
        E = {
          ease: [
            "ease",
            function (l, v, y, O) {
              var C = (l /= O) * l,
                N = C * l;
              return (
                v +
                y * (-2.75 * N * C + 11 * C * C + -15.5 * N + 8 * C + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, v, y, O) {
              var C = (l /= O) * l,
                N = C * l;
              return v + y * (-1 * N * C + 3 * C * C + -3 * N + 2 * C);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, v, y, O) {
              var C = (l /= O) * l,
                N = C * l;
              return (
                v +
                y * (0.3 * N * C + -1.6 * C * C + 2.2 * N + -1.8 * C + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, v, y, O) {
              var C = (l /= O) * l,
                N = C * l;
              return v + y * (2 * N * C + -5 * C * C + 2 * N + 2 * C);
            },
          ],
          linear: [
            "linear",
            function (l, v, y, O) {
              return (y * l) / O + v;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, v, y, O) {
              return y * (l /= O) * l + v;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, v, y, O) {
              return -y * (l /= O) * (l - 2) + v;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, v, y, O) {
              return (l /= O / 2) < 1
                ? (y / 2) * l * l + v
                : (-y / 2) * (--l * (l - 2) - 1) + v;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, v, y, O) {
              return y * (l /= O) * l * l + v;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, v, y, O) {
              return y * ((l = l / O - 1) * l * l + 1) + v;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, v, y, O) {
              return (l /= O / 2) < 1
                ? (y / 2) * l * l * l + v
                : (y / 2) * ((l -= 2) * l * l + 2) + v;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, v, y, O) {
              return y * (l /= O) * l * l * l + v;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, v, y, O) {
              return -y * ((l = l / O - 1) * l * l * l - 1) + v;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, v, y, O) {
              return (l /= O / 2) < 1
                ? (y / 2) * l * l * l * l + v
                : (-y / 2) * ((l -= 2) * l * l * l - 2) + v;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, v, y, O) {
              return y * (l /= O) * l * l * l * l + v;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, v, y, O) {
              return y * ((l = l / O - 1) * l * l * l * l + 1) + v;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, v, y, O) {
              return (l /= O / 2) < 1
                ? (y / 2) * l * l * l * l * l + v
                : (y / 2) * ((l -= 2) * l * l * l * l + 2) + v;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, v, y, O) {
              return -y * Math.cos((l / O) * (Math.PI / 2)) + y + v;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, v, y, O) {
              return y * Math.sin((l / O) * (Math.PI / 2)) + v;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, v, y, O) {
              return (-y / 2) * (Math.cos((Math.PI * l) / O) - 1) + v;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, v, y, O) {
              return l === 0 ? v : y * Math.pow(2, 10 * (l / O - 1)) + v;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, v, y, O) {
              return l === O
                ? v + y
                : y * (-Math.pow(2, (-10 * l) / O) + 1) + v;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, v, y, O) {
              return l === 0
                ? v
                : l === O
                ? v + y
                : (l /= O / 2) < 1
                ? (y / 2) * Math.pow(2, 10 * (l - 1)) + v
                : (y / 2) * (-Math.pow(2, -10 * --l) + 2) + v;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, v, y, O) {
              return -y * (Math.sqrt(1 - (l /= O) * l) - 1) + v;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, v, y, O) {
              return y * Math.sqrt(1 - (l = l / O - 1) * l) + v;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, v, y, O) {
              return (l /= O / 2) < 1
                ? (-y / 2) * (Math.sqrt(1 - l * l) - 1) + v
                : (y / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + v;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, v, y, O, C) {
              return (
                C === void 0 && (C = 1.70158),
                y * (l /= O) * l * ((C + 1) * l - C) + v
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, v, y, O, C) {
              return (
                C === void 0 && (C = 1.70158),
                y * ((l = l / O - 1) * l * ((C + 1) * l + C) + 1) + v
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, v, y, O, C) {
              return (
                C === void 0 && (C = 1.70158),
                (l /= O / 2) < 1
                  ? (y / 2) * l * l * (((C *= 1.525) + 1) * l - C) + v
                  : (y / 2) *
                      ((l -= 2) * l * (((C *= 1.525) + 1) * l + C) + 2) +
                    v
              );
            },
          ],
        },
        I = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        x = document,
        b = window,
        q = "bkwld-tram",
        R = /[\-\.0-9]/g,
        w = /[A-Z]/,
        T = "number",
        F = /^(rgb|#)/,
        G = /(em|cm|mm|in|pt|pc|px)$/,
        L = /(em|cm|mm|in|pt|pc|px|%)$/,
        W = /(deg|rad|turn)$/,
        k = "unitless",
        K = /(all|none) 0s ease 0s/,
        te = /^(width|height)$/,
        $ = " ",
        M = x.createElement("a"),
        _ = ["Webkit", "Moz", "O", "ms"],
        D = ["-webkit-", "-moz-", "-o-", "-ms-"],
        X = function (l) {
          if (l in M.style) return { dom: l, css: l };
          var v,
            y,
            O = "",
            C = l.split("-");
          for (v = 0; v < C.length; v++)
            O += C[v].charAt(0).toUpperCase() + C[v].slice(1);
          for (v = 0; v < _.length; v++)
            if (((y = _[v] + O), y in M.style))
              return { dom: y, css: D[v] + l };
        },
        V = (t.support = {
          bind: Function.prototype.bind,
          transform: X("transform"),
          transition: X("transition"),
          backface: X("backface-visibility"),
          timing: X("transition-timing-function"),
        });
      if (V.transition) {
        var z = V.timing.dom;
        if (((M.style[z] = E["ease-in-back"][0]), !M.style[z]))
          for (var Z in I) E[Z][0] = I[Z];
      }
      var ce = (t.frame = (function () {
          var l =
            b.requestAnimationFrame ||
            b.webkitRequestAnimationFrame ||
            b.mozRequestAnimationFrame ||
            b.oRequestAnimationFrame ||
            b.msRequestAnimationFrame;
          return l && V.bind
            ? l.bind(b)
            : function (v) {
                b.setTimeout(v, 16);
              };
        })()),
        Se = (t.now = (function () {
          var l = b.performance,
            v = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return v && V.bind
            ? v.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        p = h(function (l) {
          function v(Q, ue) {
            var _e = g(("" + Q).split($)),
              de = _e[0];
            ue = ue || {};
            var Me = B[de];
            if (!Me) return f("Unsupported property: " + de);
            if (!ue.weak || !this.props[de]) {
              var ze = Me[0],
                Ve = this.props[de];
              return (
                Ve || (Ve = this.props[de] = new ze.Bare()),
                Ve.init(this.$el, _e, Me, ue),
                Ve
              );
            }
          }
          function y(Q, ue, _e) {
            if (Q) {
              var de = typeof Q;
              if (
                (ue ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                de == "number" && ue)
              )
                return (
                  (this.timer = new Pe({
                    duration: Q,
                    context: this,
                    complete: N,
                  })),
                  void (this.active = !0)
                );
              if (de == "string" && ue) {
                switch (Q) {
                  case "hide":
                    H.call(this);
                    break;
                  case "stop":
                    Y.call(this);
                    break;
                  case "redraw":
                    oe.call(this);
                    break;
                  default:
                    v.call(this, Q, _e && _e[1]);
                }
                return N.call(this);
              }
              if (de == "function") return void Q.call(this, this);
              if (de == "object") {
                var Me = 0;
                nt.call(
                  this,
                  Q,
                  function (Oe, iI) {
                    Oe.span > Me && (Me = Oe.span), Oe.stop(), Oe.animate(iI);
                  },
                  function (Oe) {
                    "wait" in Oe && (Me = c(Oe.wait, 0));
                  }
                ),
                  me.call(this),
                  Me > 0 &&
                    ((this.timer = new Pe({ duration: Me, context: this })),
                    (this.active = !0),
                    ue && (this.timer.complete = N));
                var ze = this,
                  Ve = !1,
                  un = {};
                ce(function () {
                  nt.call(ze, Q, function (Oe) {
                    Oe.active && ((Ve = !0), (un[Oe.name] = Oe.nextStyle));
                  }),
                    Ve && ze.$el.css(un);
                });
              }
            }
          }
          function O(Q) {
            (Q = c(Q, 0)),
              this.active
                ? this.queue.push({ options: Q })
                : ((this.timer = new Pe({
                    duration: Q,
                    context: this,
                    complete: N,
                  })),
                  (this.active = !0));
          }
          function C(Q) {
            return this.active
              ? (this.queue.push({ options: Q, args: arguments }),
                void (this.timer.complete = N))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function N() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var Q = this.queue.shift();
              y.call(this, Q.options, !0, Q.args);
            }
          }
          function Y(Q) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ue;
            typeof Q == "string"
              ? ((ue = {}), (ue[Q] = 1))
              : (ue = typeof Q == "object" && Q != null ? Q : this.props),
              nt.call(this, ue, De),
              me.call(this);
          }
          function J(Q) {
            Y.call(this, Q), nt.call(this, Q, br, rI);
          }
          function Ee(Q) {
            typeof Q != "string" && (Q = "block"), (this.el.style.display = Q);
          }
          function H() {
            Y.call(this), (this.el.style.display = "none");
          }
          function oe() {
            this.el.offsetHeight;
          }
          function ae() {
            Y.call(this), e.removeData(this.el, q), (this.$el = this.el = null);
          }
          function me() {
            var Q,
              ue,
              _e = [];
            this.upstream && _e.push(this.upstream);
            for (Q in this.props)
              (ue = this.props[Q]), ue.active && _e.push(ue.string);
            (_e = _e.join(",")),
              this.style !== _e &&
                ((this.style = _e), (this.el.style[V.transition.dom] = _e));
          }
          function nt(Q, ue, _e) {
            var de,
              Me,
              ze,
              Ve,
              un = ue !== De,
              Oe = {};
            for (de in Q)
              (ze = Q[de]),
                de in fe
                  ? (Oe.transform || (Oe.transform = {}),
                    (Oe.transform[de] = ze))
                  : (w.test(de) && (de = r(de)),
                    de in B ? (Oe[de] = ze) : (Ve || (Ve = {}), (Ve[de] = ze)));
            for (de in Oe) {
              if (((ze = Oe[de]), (Me = this.props[de]), !Me)) {
                if (!un) continue;
                Me = v.call(this, de);
              }
              ue.call(this, Me, ze);
            }
            _e && Ve && _e.call(this, Ve);
          }
          function De(Q) {
            Q.stop();
          }
          function br(Q, ue) {
            Q.set(ue);
          }
          function rI(Q) {
            this.$el.css(Q);
          }
          function Ke(Q, ue) {
            l[Q] = function () {
              return this.children
                ? nI.call(this, ue, arguments)
                : (this.el && ue.apply(this, arguments), this);
            };
          }
          function nI(Q, ue) {
            var _e,
              de = this.children.length;
            for (_e = 0; de > _e; _e++) Q.apply(this.children[_e], ue);
            return this;
          }
          (l.init = function (Q) {
            if (
              ((this.$el = e(Q)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              se.keepInherited && !se.fallback)
            ) {
              var ue = U(this.el, "transition");
              ue && !K.test(ue) && (this.upstream = ue);
            }
            V.backface &&
              se.hideBackface &&
              d(this.el, V.backface.css, "hidden");
          }),
            Ke("add", v),
            Ke("start", y),
            Ke("wait", O),
            Ke("then", C),
            Ke("next", N),
            Ke("stop", Y),
            Ke("set", J),
            Ke("show", Ee),
            Ke("hide", H),
            Ke("redraw", oe),
            Ke("destroy", ae);
        }),
        P = h(p, function (l) {
          function v(y, O) {
            var C = e.data(y, q) || e.data(y, q, new p.Bare());
            return C.el || C.init(y), O ? C.start(O) : C;
          }
          l.init = function (y, O) {
            var C = e(y);
            if (!C.length) return this;
            if (C.length === 1) return v(C[0], O);
            var N = [];
            return (
              C.each(function (Y, J) {
                N.push(v(J, O));
              }),
              (this.children = N),
              this
            );
          };
        }),
        S = h(function (l) {
          function v() {
            var N = this.get();
            this.update("auto");
            var Y = this.get();
            return this.update(N), Y;
          }
          function y(N, Y, J) {
            return Y !== void 0 && (J = Y), N in E ? N : J;
          }
          function O(N) {
            var Y = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(N);
            return (Y ? o(Y[1], Y[2], Y[3]) : N).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var C = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (N, Y, J, Ee) {
            (this.$el = N), (this.el = N[0]);
            var H = Y[0];
            J[2] && (H = J[2]),
              j[H] && (H = j[H]),
              (this.name = H),
              (this.type = J[1]),
              (this.duration = c(Y[1], this.duration, C.duration)),
              (this.ease = y(Y[2], this.ease, C.ease)),
              (this.delay = c(Y[3], this.delay, C.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = te.test(this.name)),
              (this.unit = Ee.unit || this.unit || se.defaultUnit),
              (this.angle = Ee.angle || this.angle || se.defaultAngle),
              se.fallback || Ee.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    $ +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? $ + E[this.ease][0] : "") +
                    (this.delay ? $ + this.delay + "ms" : "")));
          }),
            (l.set = function (N) {
              (N = this.convert(N, this.type)), this.update(N), this.redraw();
            }),
            (l.transition = function (N) {
              (this.active = !0),
                (N = this.convert(N, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  N == "auto" && (N = v.call(this))),
                (this.nextStyle = N);
            }),
            (l.fallback = function (N) {
              var Y =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (N = this.convert(N, this.type)),
                this.auto &&
                  (Y == "auto" && (Y = this.convert(this.get(), this.type)),
                  N == "auto" && (N = v.call(this))),
                (this.tween = new Te({
                  from: Y,
                  to: N,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return U(this.el, this.name);
            }),
            (l.update = function (N) {
              d(this.el, this.name, N);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                d(this.el, this.name, this.get()));
              var N = this.tween;
              N && N.context && N.destroy();
            }),
            (l.convert = function (N, Y) {
              if (N == "auto" && this.auto) return N;
              var J,
                Ee = typeof N == "number",
                H = typeof N == "string";
              switch (Y) {
                case T:
                  if (Ee) return N;
                  if (H && N.replace(R, "") === "") return +N;
                  J = "number(unitless)";
                  break;
                case F:
                  if (H) {
                    if (N === "" && this.original) return this.original;
                    if (Y.test(N))
                      return N.charAt(0) == "#" && N.length == 7 ? N : O(N);
                  }
                  J = "hex or rgb string";
                  break;
                case G:
                  if (Ee) return N + this.unit;
                  if (H && Y.test(N)) return N;
                  J = "number(px) or string(unit)";
                  break;
                case L:
                  if (Ee) return N + this.unit;
                  if (H && Y.test(N)) return N;
                  J = "number(px) or string(unit or %)";
                  break;
                case W:
                  if (Ee) return N + this.angle;
                  if (H && Y.test(N)) return N;
                  J = "number(deg) or string(angle)";
                  break;
                case k:
                  if (Ee || (H && L.test(N))) return N;
                  J = "number(unitless) or string(unit or %)";
              }
              return a(J, N), N;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        m = h(S, function (l, v) {
          l.init = function () {
            v.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), F));
          };
        }),
        ie = h(S, function (l, v) {
          (l.init = function () {
            v.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (y) {
              this.$el[this.name](y);
            });
        }),
        le = h(S, function (l, v) {
          function y(O, C) {
            var N, Y, J, Ee, H;
            for (N in O)
              (Ee = fe[N]),
                (J = Ee[0]),
                (Y = Ee[1] || N),
                (H = this.convert(O[N], J)),
                C.call(this, Y, H, J);
          }
          (l.init = function () {
            v.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                fe.perspective &&
                  se.perspective &&
                  ((this.current.perspective = se.perspective),
                  d(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (O) {
              y.call(this, O, function (C, N) {
                this.current[C] = N;
              }),
                d(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (O) {
              var C = this.values(O);
              this.tween = new Le({
                current: this.current,
                values: C,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var N,
                Y = {};
              for (N in this.current) Y[N] = N in C ? C[N] : this.current[N];
              (this.active = !0), (this.nextStyle = this.style(Y));
            }),
            (l.fallback = function (O) {
              var C = this.values(O);
              this.tween = new Le({
                current: this.current,
                values: C,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              d(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (O) {
              var C,
                N = "";
              for (C in O) N += C + "(" + O[C] + ") ";
              return N;
            }),
            (l.values = function (O) {
              var C,
                N = {};
              return (
                y.call(this, O, function (Y, J, Ee) {
                  (N[Y] = J),
                    this.current[Y] === void 0 &&
                      ((C = 0),
                      ~Y.indexOf("scale") && (C = 1),
                      (this.current[Y] = this.convert(C, Ee)));
                }),
                N
              );
            });
        }),
        Te = h(function (l) {
          function v(H) {
            J.push(H) === 1 && ce(y);
          }
          function y() {
            var H,
              oe,
              ae,
              me = J.length;
            if (me)
              for (ce(y), oe = Se(), H = me; H--; )
                (ae = J[H]), ae && ae.render(oe);
          }
          function O(H) {
            var oe,
              ae = e.inArray(H, J);
            ae >= 0 &&
              ((oe = J.slice(ae + 1)),
              (J.length = ae),
              oe.length && (J = J.concat(oe)));
          }
          function C(H) {
            return Math.round(H * Ee) / Ee;
          }
          function N(H, oe, ae) {
            return o(
              H[0] + ae * (oe[0] - H[0]),
              H[1] + ae * (oe[1] - H[1]),
              H[2] + ae * (oe[2] - H[2])
            );
          }
          var Y = { ease: E.ease[1], from: 0, to: 1 };
          (l.init = function (H) {
            (this.duration = H.duration || 0), (this.delay = H.delay || 0);
            var oe = H.ease || Y.ease;
            E[oe] && (oe = E[oe][1]),
              typeof oe != "function" && (oe = Y.ease),
              (this.ease = oe),
              (this.update = H.update || i),
              (this.complete = H.complete || i),
              (this.context = H.context || this),
              (this.name = H.name);
            var ae = H.from,
              me = H.to;
            ae === void 0 && (ae = Y.from),
              me === void 0 && (me = Y.to),
              (this.unit = H.unit || ""),
              typeof ae == "number" && typeof me == "number"
                ? ((this.begin = ae), (this.change = me - ae))
                : this.format(me, ae),
              (this.value = this.begin + this.unit),
              (this.start = Se()),
              H.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = Se()),
                (this.active = !0),
                v(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), O(this));
            }),
            (l.render = function (H) {
              var oe,
                ae = H - this.start;
              if (this.delay) {
                if (ae <= this.delay) return;
                ae -= this.delay;
              }
              if (ae < this.duration) {
                var me = this.ease(ae, 0, 1, this.duration);
                return (
                  (oe = this.startRGB
                    ? N(this.startRGB, this.endRGB, me)
                    : C(this.begin + me * this.change)),
                  (this.value = oe + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (oe = this.endHex || this.begin + this.change),
                (this.value = oe + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (H, oe) {
              if (((oe += ""), (H += ""), H.charAt(0) == "#"))
                return (
                  (this.startRGB = n(oe)),
                  (this.endRGB = n(H)),
                  (this.endHex = H),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ae = oe.replace(R, ""),
                  me = H.replace(R, "");
                ae !== me && u("tween", oe, H), (this.unit = ae);
              }
              (oe = parseFloat(oe)),
                (H = parseFloat(H)),
                (this.begin = this.value = oe),
                (this.change = H - oe);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var J = [],
            Ee = 1e3;
        }),
        Pe = h(Te, function (l) {
          (l.init = function (v) {
            (this.duration = v.duration || 0),
              (this.complete = v.complete || i),
              (this.context = v.context),
              this.play();
          }),
            (l.render = function (v) {
              var y = v - this.start;
              y < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        Le = h(Te, function (l, v) {
          (l.init = function (y) {
            (this.context = y.context),
              (this.update = y.update),
              (this.tweens = []),
              (this.current = y.current);
            var O, C;
            for (O in y.values)
              (C = y.values[O]),
                this.current[O] !== C &&
                  this.tweens.push(
                    new Te({
                      name: O,
                      from: this.current[O],
                      to: C,
                      duration: y.duration,
                      delay: y.delay,
                      ease: y.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (y) {
              var O,
                C,
                N = this.tweens.length,
                Y = !1;
              for (O = N; O--; )
                (C = this.tweens[O]),
                  C.context &&
                    (C.render(y), (this.current[C.name] = C.value), (Y = !0));
              return Y
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((v.destroy.call(this), this.tweens)) {
                var y,
                  O = this.tweens.length;
                for (y = O; y--; ) this.tweens[y].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        se = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !V.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!V.transition) return (se.fallback = !0);
        se.agentTests.push("(" + l + ")");
        var v = new RegExp(se.agentTests.join("|"), "i");
        se.fallback = v.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new Te(l);
        }),
        (t.delay = function (l, v, y) {
          return new Pe({ complete: v, duration: l, context: y });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var d = e.style,
        U = e.css,
        j = { transform: V.transform && V.transform.css },
        B = {
          color: [m, F],
          background: [m, F, "background-color"],
          "outline-color": [m, F],
          "border-color": [m, F],
          "border-top-color": [m, F],
          "border-right-color": [m, F],
          "border-bottom-color": [m, F],
          "border-left-color": [m, F],
          "border-width": [S, G],
          "border-top-width": [S, G],
          "border-right-width": [S, G],
          "border-bottom-width": [S, G],
          "border-left-width": [S, G],
          "border-spacing": [S, G],
          "letter-spacing": [S, G],
          margin: [S, G],
          "margin-top": [S, G],
          "margin-right": [S, G],
          "margin-bottom": [S, G],
          "margin-left": [S, G],
          padding: [S, G],
          "padding-top": [S, G],
          "padding-right": [S, G],
          "padding-bottom": [S, G],
          "padding-left": [S, G],
          "outline-width": [S, G],
          opacity: [S, T],
          top: [S, L],
          right: [S, L],
          bottom: [S, L],
          left: [S, L],
          "font-size": [S, L],
          "text-indent": [S, L],
          "word-spacing": [S, L],
          width: [S, L],
          "min-width": [S, L],
          "max-width": [S, L],
          height: [S, L],
          "min-height": [S, L],
          "max-height": [S, L],
          "line-height": [S, k],
          "scroll-top": [ie, T, "scrollTop"],
          "scroll-left": [ie, T, "scrollLeft"],
        },
        fe = {};
      V.transform &&
        ((B.transform = [le]),
        (fe = {
          x: [L, "translateX"],
          y: [L, "translateY"],
          rotate: [W],
          rotateX: [W],
          rotateY: [W],
          scale: [T],
          scaleX: [T],
          scaleY: [T],
          skew: [W],
          skewX: [W],
          skewY: [W],
        })),
        V.transform &&
          V.backface &&
          ((fe.z = [L, "translateZ"]),
          (fe.rotateZ = [W]),
          (fe.scaleZ = [T]),
          (fe.perspective = [G]));
      var je = /ms/,
        Et = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var _s = s((ZU, gs) => {
    var oI = window.$,
      aI = Mi() && oI.tram;
    gs.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        o = Function.prototype,
        i = r.push,
        a = r.slice,
        u = r.concat,
        c = n.toString,
        f = n.hasOwnProperty,
        g = r.forEach,
        h = r.map,
        E = r.reduce,
        I = r.reduceRight,
        x = r.filter,
        b = r.every,
        q = r.some,
        R = r.indexOf,
        w = r.lastIndexOf,
        T = Array.isArray,
        F = Object.keys,
        G = o.bind,
        L =
          (e.each =
          e.forEach =
            function (_, D, X) {
              if (_ == null) return _;
              if (g && _.forEach === g) _.forEach(D, X);
              else if (_.length === +_.length) {
                for (var V = 0, z = _.length; V < z; V++)
                  if (D.call(X, _[V], V, _) === t) return;
              } else
                for (var Z = e.keys(_), V = 0, z = Z.length; V < z; V++)
                  if (D.call(X, _[Z[V]], Z[V], _) === t) return;
              return _;
            });
      (e.map = e.collect =
        function (_, D, X) {
          var V = [];
          return _ == null
            ? V
            : h && _.map === h
            ? _.map(D, X)
            : (L(_, function (z, Z, ce) {
                V.push(D.call(X, z, Z, ce));
              }),
              V);
        }),
        (e.find = e.detect =
          function (_, D, X) {
            var V;
            return (
              W(_, function (z, Z, ce) {
                if (D.call(X, z, Z, ce)) return (V = z), !0;
              }),
              V
            );
          }),
        (e.filter = e.select =
          function (_, D, X) {
            var V = [];
            return _ == null
              ? V
              : x && _.filter === x
              ? _.filter(D, X)
              : (L(_, function (z, Z, ce) {
                  D.call(X, z, Z, ce) && V.push(z);
                }),
                V);
          });
      var W =
        (e.some =
        e.any =
          function (_, D, X) {
            D || (D = e.identity);
            var V = !1;
            return _ == null
              ? V
              : q && _.some === q
              ? _.some(D, X)
              : (L(_, function (z, Z, ce) {
                  if (V || (V = D.call(X, z, Z, ce))) return t;
                }),
                !!V);
          });
      (e.contains = e.include =
        function (_, D) {
          return _ == null
            ? !1
            : R && _.indexOf === R
            ? _.indexOf(D) != -1
            : W(_, function (X) {
                return X === D;
              });
        }),
        (e.delay = function (_, D) {
          var X = a.call(arguments, 2);
          return setTimeout(function () {
            return _.apply(null, X);
          }, D);
        }),
        (e.defer = function (_) {
          return e.delay.apply(e, [_, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (_) {
          var D, X, V;
          return function () {
            D ||
              ((D = !0),
              (X = arguments),
              (V = this),
              aI.frame(function () {
                (D = !1), _.apply(V, X);
              }));
          };
        }),
        (e.debounce = function (_, D, X) {
          var V,
            z,
            Z,
            ce,
            Se,
            p = function () {
              var P = e.now() - ce;
              P < D
                ? (V = setTimeout(p, D - P))
                : ((V = null), X || ((Se = _.apply(Z, z)), (Z = z = null)));
            };
          return function () {
            (Z = this), (z = arguments), (ce = e.now());
            var P = X && !V;
            return (
              V || (V = setTimeout(p, D)),
              P && ((Se = _.apply(Z, z)), (Z = z = null)),
              Se
            );
          };
        }),
        (e.defaults = function (_) {
          if (!e.isObject(_)) return _;
          for (var D = 1, X = arguments.length; D < X; D++) {
            var V = arguments[D];
            for (var z in V) _[z] === void 0 && (_[z] = V[z]);
          }
          return _;
        }),
        (e.keys = function (_) {
          if (!e.isObject(_)) return [];
          if (F) return F(_);
          var D = [];
          for (var X in _) e.has(_, X) && D.push(X);
          return D;
        }),
        (e.has = function (_, D) {
          return f.call(_, D);
        }),
        (e.isObject = function (_) {
          return _ === Object(_);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var k = /(.)^/,
        K = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        te = /\\|'|\r|\n|\u2028|\u2029/g,
        $ = function (_) {
          return "\\" + K[_];
        },
        M = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (_, D, X) {
          !D && X && (D = X), (D = e.defaults({}, D, e.templateSettings));
          var V = RegExp(
              [
                (D.escape || k).source,
                (D.interpolate || k).source,
                (D.evaluate || k).source,
              ].join("|") + "|$",
              "g"
            ),
            z = 0,
            Z = "__p+='";
          _.replace(V, function (P, S, m, ie, le) {
            return (
              (Z += _.slice(z, le).replace(te, $)),
              (z = le + P.length),
              S
                ? (Z +=
                    `'+
((__t=(` +
                    S +
                    `))==null?'':_.escape(__t))+
'`)
                : m
                ? (Z +=
                    `'+
((__t=(` +
                    m +
                    `))==null?'':__t)+
'`)
                : ie &&
                  (Z +=
                    `';
` +
                    ie +
                    `
__p+='`),
              P
            );
          }),
            (Z += `';
`);
          var ce = D.variable;
          if (ce) {
            if (!M.test(ce))
              throw new Error("variable is not a bare identifier: " + ce);
          } else
            (Z =
              `with(obj||{}){
` +
              Z +
              `}
`),
              (ce = "obj");
          Z =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            Z +
            `return __p;
`;
          var Se;
          try {
            Se = new Function(D.variable || "obj", "_", Z);
          } catch (P) {
            throw ((P.source = Z), P);
          }
          var p = function (P) {
            return Se.call(this, P, e);
          };
          return (
            (p.source =
              "function(" +
              ce +
              `){
` +
              Z +
              "}"),
            p
          );
        }),
        e
      );
    })();
  });
  var ot = s((JU, Ss) => {
    var pe = {},
      Kt = {},
      zt = [],
      Gi = window.Webflow || [],
      mt = window.jQuery,
      Qe = mt(window),
      sI = mt(document),
      it = mt.isFunction,
      Ye = (pe._ = _s()),
      Is = (pe.tram = Mi() && mt.tram),
      ln = !1,
      Xi = !1;
    Is.config.hideBackface = !1;
    Is.config.keepInherited = !0;
    pe.define = function (e, t, r) {
      Kt[e] && ms(Kt[e]);
      var n = (Kt[e] = t(mt, Ye, r) || {});
      return Ts(n), n;
    };
    pe.require = function (e) {
      return Kt[e];
    };
    function Ts(e) {
      pe.env() &&
        (it(e.design) && Qe.on("__wf_design", e.design),
        it(e.preview) && Qe.on("__wf_preview", e.preview)),
        it(e.destroy) && Qe.on("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && uI(e);
    }
    function uI(e) {
      if (ln) {
        e.ready();
        return;
      }
      Ye.contains(zt, e.ready) || zt.push(e.ready);
    }
    function ms(e) {
      it(e.design) && Qe.off("__wf_design", e.design),
        it(e.preview) && Qe.off("__wf_preview", e.preview),
        it(e.destroy) && Qe.off("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && cI(e);
    }
    function cI(e) {
      zt = Ye.filter(zt, function (t) {
        return t !== e.ready;
      });
    }
    pe.push = function (e) {
      if (ln) {
        it(e) && e();
        return;
      }
      Gi.push(e);
    };
    pe.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var cn = navigator.userAgent.toLowerCase(),
      Os = (pe.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      lI = (pe.env.chrome =
        /chrome/.test(cn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(cn.match(/chrome\/(\d+)\./)[1], 10)),
      fI = (pe.env.ios = /(ipod|iphone|ipad)/.test(cn));
    pe.env.safari = /safari/.test(cn) && !lI && !fI;
    var Fi;
    Os &&
      sI.on("touchstart mousedown", function (e) {
        Fi = e.target;
      });
    pe.validClick = Os
      ? function (e) {
          return e === Fi || mt.contains(e, Fi);
        }
      : function () {
          return !0;
        };
    var bs = "resize.webflow orientationchange.webflow load.webflow",
      dI = "scroll.webflow " + bs;
    pe.resize = Vi(Qe, bs);
    pe.scroll = Vi(Qe, dI);
    pe.redraw = Vi();
    function Vi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Ye.throttle(function (o) {
          Ye.each(r, function (i) {
            i(o);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (o) {
          typeof o == "function" && (Ye.contains(r, o) || r.push(o));
        }),
        (n.off = function (o) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Ye.filter(r, function (i) {
            return i !== o;
          });
        }),
        n
      );
    }
    pe.location = function (e) {
      window.location = e;
    };
    pe.env() && (pe.location = function () {});
    pe.ready = function () {
      (ln = !0), Xi ? pI() : Ye.each(zt, ys), Ye.each(Gi, ys), pe.resize.up();
    };
    function ys(e) {
      it(e) && e();
    }
    function pI() {
      (Xi = !1), Ye.each(Kt, Ts);
    }
    var Pt;
    pe.load = function (e) {
      Pt.then(e);
    };
    function As() {
      Pt && (Pt.reject(), Qe.off("load", Pt.resolve)),
        (Pt = new mt.Deferred()),
        Qe.on("load", Pt.resolve);
    }
    pe.destroy = function (e) {
      (e = e || {}),
        (Xi = !0),
        Qe.triggerHandler("__wf_destroy"),
        e.domready != null && (ln = e.domready),
        Ye.each(Kt, ms),
        pe.resize.off(),
        pe.scroll.off(),
        pe.redraw.off(),
        (zt = []),
        (Gi = []),
        Pt.state() === "pending" && As();
    };
    mt(pe.ready);
    As();
    Ss.exports = window.Webflow = pe;
  });
  var Cs = s((eW, ws) => {
    var Rs = ot();
    Rs.define(
      "brand",
      (ws.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          o = e("body"),
          i = ".w-webflow-badge",
          a = window.location,
          u = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var I = n.attr("data-wf-status"),
            x = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(x) && a.hostname !== x && (I = !0),
            I &&
              !u &&
              ((f = f || h()),
              E(),
              setTimeout(E, 500),
              e(r).off(c, g).on(c, g));
        };
        function g() {
          var I =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", I ? "display: none !important;" : "");
        }
        function h() {
          var I = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            x = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "8px", width: "16px" }),
            b = e("<img>")
              .attr(
                "src",
                "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"
              )
              .attr("alt", "Made in Webflow");
          return I.append(x, b), I[0];
        }
        function E() {
          var I = o.children(i),
            x = I.length && I.get(0) === f,
            b = Rs.env("editor");
          if (x) {
            b && I.remove();
            return;
          }
          I.length && I.remove(), b || o.append(f);
        }
        return t;
      })
    );
  });
  var xs = s((tW, Ns) => {
    var vI = ot();
    vI.define(
      "focus-visible",
      (Ns.exports = function () {
        function e(r) {
          var n = !0,
            o = !1,
            i = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function u(T) {
            return !!(
              T &&
              T !== document &&
              T.nodeName !== "HTML" &&
              T.nodeName !== "BODY" &&
              "classList" in T &&
              "contains" in T.classList
            );
          }
          function c(T) {
            var F = T.type,
              G = T.tagName;
            return !!(
              (G === "INPUT" && a[F] && !T.readOnly) ||
              (G === "TEXTAREA" && !T.readOnly) ||
              T.isContentEditable
            );
          }
          function f(T) {
            T.getAttribute("data-wf-focus-visible") ||
              T.setAttribute("data-wf-focus-visible", "true");
          }
          function g(T) {
            T.getAttribute("data-wf-focus-visible") &&
              T.removeAttribute("data-wf-focus-visible");
          }
          function h(T) {
            T.metaKey ||
              T.altKey ||
              T.ctrlKey ||
              (u(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function E() {
            n = !1;
          }
          function I(T) {
            u(T.target) && (n || c(T.target)) && f(T.target);
          }
          function x(T) {
            u(T.target) &&
              T.target.hasAttribute("data-wf-focus-visible") &&
              ((o = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                o = !1;
              }, 100)),
              g(T.target));
          }
          function b() {
            document.visibilityState === "hidden" && (o && (n = !0), q());
          }
          function q() {
            document.addEventListener("mousemove", w),
              document.addEventListener("mousedown", w),
              document.addEventListener("mouseup", w),
              document.addEventListener("pointermove", w),
              document.addEventListener("pointerdown", w),
              document.addEventListener("pointerup", w),
              document.addEventListener("touchmove", w),
              document.addEventListener("touchstart", w),
              document.addEventListener("touchend", w);
          }
          function R() {
            document.removeEventListener("mousemove", w),
              document.removeEventListener("mousedown", w),
              document.removeEventListener("mouseup", w),
              document.removeEventListener("pointermove", w),
              document.removeEventListener("pointerdown", w),
              document.removeEventListener("pointerup", w),
              document.removeEventListener("touchmove", w),
              document.removeEventListener("touchstart", w),
              document.removeEventListener("touchend", w);
          }
          function w(T) {
            (T.target.nodeName && T.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), R());
          }
          document.addEventListener("keydown", h, !0),
            document.addEventListener("mousedown", E, !0),
            document.addEventListener("pointerdown", E, !0),
            document.addEventListener("touchstart", E, !0),
            document.addEventListener("visibilitychange", b, !0),
            q(),
            r.addEventListener("focus", I, !0),
            r.addEventListener("blur", x, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Ps = s((rW, Ls) => {
    var qs = ot();
    qs.define(
      "focus",
      (Ls.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var u = a.target,
            c = u.tagName;
          return (
            (/^a$/i.test(c) && u.href != null) ||
            (/^(button|textarea)$/i.test(c) && u.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(u.type) &&
              !u.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(u.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && u.controls === !0)
          );
        }
        function o(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var u = e.pop();
                u.target.dispatchEvent(new MouseEvent(u.type, u));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            qs.env.safari &&
            (document.addEventListener("mousedown", o, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: i };
      })
    );
  });
  var Fs = s((nW, Ms) => {
    "use strict";
    var Ui = window.jQuery,
      at = {},
      fn = [],
      Ds = ".w-ix",
      dn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Ui(t).triggerHandler(at.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Ui(t).triggerHandler(at.types.OUTRO));
        },
      };
    at.triggers = {};
    at.types = { INTRO: "w-ix-intro" + Ds, OUTRO: "w-ix-outro" + Ds };
    at.init = function () {
      for (var e = fn.length, t = 0; t < e; t++) {
        var r = fn[t];
        r[0](0, r[1]);
      }
      (fn = []), Ui.extend(at.triggers, dn);
    };
    at.async = function () {
      for (var e in dn) {
        var t = dn[e];
        dn.hasOwnProperty(e) &&
          (at.triggers[e] = function (r, n) {
            fn.push([t, n]);
          });
      }
    };
    at.async();
    Ms.exports = at;
  });
  var vn = s((iW, Vs) => {
    "use strict";
    var Wi = Fs();
    function Gs(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var hI = window.jQuery,
      pn = {},
      Xs = ".w-ix",
      EI = {
        reset: function (e, t) {
          Wi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Wi.triggers.intro(e, t), Gs(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Wi.triggers.outro(e, t), Gs(t, "COMPONENT_INACTIVE");
        },
      };
    pn.triggers = {};
    pn.types = { INTRO: "w-ix-intro" + Xs, OUTRO: "w-ix-outro" + Xs };
    hI.extend(pn.triggers, EI);
    Vs.exports = pn;
  });
  var Us = s((oW, gt) => {
    function Bi(e) {
      return (
        (gt.exports = Bi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (gt.exports.__esModule = !0),
        (gt.exports.default = gt.exports),
        Bi(e)
      );
    }
    (gt.exports = Bi),
      (gt.exports.__esModule = !0),
      (gt.exports.default = gt.exports);
  });
  var Yt = s((aW, Ar) => {
    var gI = Us().default;
    function Ws(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Ws = function (o) {
        return o ? r : t;
      })(e);
    }
    function _I(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (gI(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = Ws(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, i, a)
            : (n[i] = e[i]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Ar.exports = _I),
      (Ar.exports.__esModule = !0),
      (Ar.exports.default = Ar.exports);
  });
  var st = s((sW, Sr) => {
    function yI(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Sr.exports = yI),
      (Sr.exports.__esModule = !0),
      (Sr.exports.default = Sr.exports);
  });
  var ge = s((uW, Bs) => {
    var hn = function (e) {
      return e && e.Math == Math && e;
    };
    Bs.exports =
      hn(typeof globalThis == "object" && globalThis) ||
      hn(typeof window == "object" && window) ||
      hn(typeof self == "object" && self) ||
      hn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Qt = s((cW, Hs) => {
    Hs.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Dt = s((lW, ks) => {
    var II = Qt();
    ks.exports = !II(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var En = s((fW, js) => {
    var Rr = Function.prototype.call;
    js.exports = Rr.bind
      ? Rr.bind(Rr)
      : function () {
          return Rr.apply(Rr, arguments);
        };
  });
  var Qs = s((Ys) => {
    "use strict";
    var Ks = {}.propertyIsEnumerable,
      zs = Object.getOwnPropertyDescriptor,
      TI = zs && !Ks.call({ 1: 2 }, 1);
    Ys.f = TI
      ? function (t) {
          var r = zs(this, t);
          return !!r && r.enumerable;
        }
      : Ks;
  });
  var Hi = s((pW, $s) => {
    $s.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var $e = s((vW, Js) => {
    var Zs = Function.prototype,
      ki = Zs.bind,
      ji = Zs.call,
      mI = ki && ki.bind(ji);
    Js.exports = ki
      ? function (e) {
          return e && mI(ji, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return ji.apply(e, arguments);
            }
          );
        };
  });
  var ru = s((hW, tu) => {
    var eu = $e(),
      OI = eu({}.toString),
      bI = eu("".slice);
    tu.exports = function (e) {
      return bI(OI(e), 8, -1);
    };
  });
  var iu = s((EW, nu) => {
    var AI = ge(),
      SI = $e(),
      RI = Qt(),
      wI = ru(),
      Ki = AI.Object,
      CI = SI("".split);
    nu.exports = RI(function () {
      return !Ki("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return wI(e) == "String" ? CI(e, "") : Ki(e);
        }
      : Ki;
  });
  var zi = s((gW, ou) => {
    var NI = ge(),
      xI = NI.TypeError;
    ou.exports = function (e) {
      if (e == null) throw xI("Can't call method on " + e);
      return e;
    };
  });
  var wr = s((_W, au) => {
    var qI = iu(),
      LI = zi();
    au.exports = function (e) {
      return qI(LI(e));
    };
  });
  var ut = s((yW, su) => {
    su.exports = function (e) {
      return typeof e == "function";
    };
  });
  var $t = s((IW, uu) => {
    var PI = ut();
    uu.exports = function (e) {
      return typeof e == "object" ? e !== null : PI(e);
    };
  });
  var Cr = s((TW, cu) => {
    var Yi = ge(),
      DI = ut(),
      MI = function (e) {
        return DI(e) ? e : void 0;
      };
    cu.exports = function (e, t) {
      return arguments.length < 2 ? MI(Yi[e]) : Yi[e] && Yi[e][t];
    };
  });
  var fu = s((mW, lu) => {
    var FI = $e();
    lu.exports = FI({}.isPrototypeOf);
  });
  var pu = s((OW, du) => {
    var GI = Cr();
    du.exports = GI("navigator", "userAgent") || "";
  });
  var Iu = s((bW, yu) => {
    var _u = ge(),
      Qi = pu(),
      vu = _u.process,
      hu = _u.Deno,
      Eu = (vu && vu.versions) || (hu && hu.version),
      gu = Eu && Eu.v8,
      Ze,
      gn;
    gu &&
      ((Ze = gu.split(".")),
      (gn = Ze[0] > 0 && Ze[0] < 4 ? 1 : +(Ze[0] + Ze[1])));
    !gn &&
      Qi &&
      ((Ze = Qi.match(/Edge\/(\d+)/)),
      (!Ze || Ze[1] >= 74) &&
        ((Ze = Qi.match(/Chrome\/(\d+)/)), Ze && (gn = +Ze[1])));
    yu.exports = gn;
  });
  var $i = s((AW, mu) => {
    var Tu = Iu(),
      XI = Qt();
    mu.exports =
      !!Object.getOwnPropertySymbols &&
      !XI(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Tu && Tu < 41)
        );
      });
  });
  var Zi = s((SW, Ou) => {
    var VI = $i();
    Ou.exports = VI && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Ji = s((RW, bu) => {
    var UI = ge(),
      WI = Cr(),
      BI = ut(),
      HI = fu(),
      kI = Zi(),
      jI = UI.Object;
    bu.exports = kI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = WI("Symbol");
          return BI(t) && HI(t.prototype, jI(e));
        };
  });
  var Su = s((wW, Au) => {
    var KI = ge(),
      zI = KI.String;
    Au.exports = function (e) {
      try {
        return zI(e);
      } catch {
        return "Object";
      }
    };
  });
  var wu = s((CW, Ru) => {
    var YI = ge(),
      QI = ut(),
      $I = Su(),
      ZI = YI.TypeError;
    Ru.exports = function (e) {
      if (QI(e)) return e;
      throw ZI($I(e) + " is not a function");
    };
  });
  var Nu = s((NW, Cu) => {
    var JI = wu();
    Cu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : JI(r);
    };
  });
  var qu = s((xW, xu) => {
    var eT = ge(),
      eo = En(),
      to = ut(),
      ro = $t(),
      tT = eT.TypeError;
    xu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && to((r = e.toString)) && !ro((n = eo(r, e)))) ||
        (to((r = e.valueOf)) && !ro((n = eo(r, e)))) ||
        (t !== "string" && to((r = e.toString)) && !ro((n = eo(r, e))))
      )
        return n;
      throw tT("Can't convert object to primitive value");
    };
  });
  var Pu = s((qW, Lu) => {
    Lu.exports = !1;
  });
  var _n = s((LW, Mu) => {
    var Du = ge(),
      rT = Object.defineProperty;
    Mu.exports = function (e, t) {
      try {
        rT(Du, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Du[e] = t;
      }
      return t;
    };
  });
  var yn = s((PW, Gu) => {
    var nT = ge(),
      iT = _n(),
      Fu = "__core-js_shared__",
      oT = nT[Fu] || iT(Fu, {});
    Gu.exports = oT;
  });
  var no = s((DW, Vu) => {
    var aT = Pu(),
      Xu = yn();
    (Vu.exports = function (e, t) {
      return Xu[e] || (Xu[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: aT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var Wu = s((MW, Uu) => {
    var sT = ge(),
      uT = zi(),
      cT = sT.Object;
    Uu.exports = function (e) {
      return cT(uT(e));
    };
  });
  var Ot = s((FW, Bu) => {
    var lT = $e(),
      fT = Wu(),
      dT = lT({}.hasOwnProperty);
    Bu.exports =
      Object.hasOwn ||
      function (t, r) {
        return dT(fT(t), r);
      };
  });
  var io = s((GW, Hu) => {
    var pT = $e(),
      vT = 0,
      hT = Math.random(),
      ET = pT((1).toString);
    Hu.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + ET(++vT + hT, 36);
    };
  });
  var oo = s((XW, Yu) => {
    var gT = ge(),
      _T = no(),
      ku = Ot(),
      yT = io(),
      ju = $i(),
      zu = Zi(),
      Zt = _T("wks"),
      Mt = gT.Symbol,
      Ku = Mt && Mt.for,
      IT = zu ? Mt : (Mt && Mt.withoutSetter) || yT;
    Yu.exports = function (e) {
      if (!ku(Zt, e) || !(ju || typeof Zt[e] == "string")) {
        var t = "Symbol." + e;
        ju && ku(Mt, e)
          ? (Zt[e] = Mt[e])
          : zu && Ku
          ? (Zt[e] = Ku(t))
          : (Zt[e] = IT(t));
      }
      return Zt[e];
    };
  });
  var Ju = s((VW, Zu) => {
    var TT = ge(),
      mT = En(),
      Qu = $t(),
      $u = Ji(),
      OT = Nu(),
      bT = qu(),
      AT = oo(),
      ST = TT.TypeError,
      RT = AT("toPrimitive");
    Zu.exports = function (e, t) {
      if (!Qu(e) || $u(e)) return e;
      var r = OT(e, RT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = mT(r, e, t)), !Qu(n) || $u(n))
        )
          return n;
        throw ST("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), bT(e, t);
    };
  });
  var ao = s((UW, ec) => {
    var wT = Ju(),
      CT = Ji();
    ec.exports = function (e) {
      var t = wT(e, "string");
      return CT(t) ? t : t + "";
    };
  });
  var uo = s((WW, rc) => {
    var NT = ge(),
      tc = $t(),
      so = NT.document,
      xT = tc(so) && tc(so.createElement);
    rc.exports = function (e) {
      return xT ? so.createElement(e) : {};
    };
  });
  var co = s((BW, nc) => {
    var qT = Dt(),
      LT = Qt(),
      PT = uo();
    nc.exports =
      !qT &&
      !LT(function () {
        return (
          Object.defineProperty(PT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var lo = s((oc) => {
    var DT = Dt(),
      MT = En(),
      FT = Qs(),
      GT = Hi(),
      XT = wr(),
      VT = ao(),
      UT = Ot(),
      WT = co(),
      ic = Object.getOwnPropertyDescriptor;
    oc.f = DT
      ? ic
      : function (t, r) {
          if (((t = XT(t)), (r = VT(r)), WT))
            try {
              return ic(t, r);
            } catch {}
          if (UT(t, r)) return GT(!MT(FT.f, t, r), t[r]);
        };
  });
  var Nr = s((kW, sc) => {
    var ac = ge(),
      BT = $t(),
      HT = ac.String,
      kT = ac.TypeError;
    sc.exports = function (e) {
      if (BT(e)) return e;
      throw kT(HT(e) + " is not an object");
    };
  });
  var xr = s((lc) => {
    var jT = ge(),
      KT = Dt(),
      zT = co(),
      uc = Nr(),
      YT = ao(),
      QT = jT.TypeError,
      cc = Object.defineProperty;
    lc.f = KT
      ? cc
      : function (t, r, n) {
          if ((uc(t), (r = YT(r)), uc(n), zT))
            try {
              return cc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw QT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var In = s((KW, fc) => {
    var $T = Dt(),
      ZT = xr(),
      JT = Hi();
    fc.exports = $T
      ? function (e, t, r) {
          return ZT.f(e, t, JT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var po = s((zW, dc) => {
    var em = $e(),
      tm = ut(),
      fo = yn(),
      rm = em(Function.toString);
    tm(fo.inspectSource) ||
      (fo.inspectSource = function (e) {
        return rm(e);
      });
    dc.exports = fo.inspectSource;
  });
  var hc = s((YW, vc) => {
    var nm = ge(),
      im = ut(),
      om = po(),
      pc = nm.WeakMap;
    vc.exports = im(pc) && /native code/.test(om(pc));
  });
  var vo = s((QW, gc) => {
    var am = no(),
      sm = io(),
      Ec = am("keys");
    gc.exports = function (e) {
      return Ec[e] || (Ec[e] = sm(e));
    };
  });
  var Tn = s(($W, _c) => {
    _c.exports = {};
  });
  var bc = s((ZW, Oc) => {
    var um = hc(),
      mc = ge(),
      ho = $e(),
      cm = $t(),
      lm = In(),
      Eo = Ot(),
      go = yn(),
      fm = vo(),
      dm = Tn(),
      yc = "Object already initialized",
      yo = mc.TypeError,
      pm = mc.WeakMap,
      mn,
      qr,
      On,
      vm = function (e) {
        return On(e) ? qr(e) : mn(e, {});
      },
      hm = function (e) {
        return function (t) {
          var r;
          if (!cm(t) || (r = qr(t)).type !== e)
            throw yo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    um || go.state
      ? ((bt = go.state || (go.state = new pm())),
        (Ic = ho(bt.get)),
        (_o = ho(bt.has)),
        (Tc = ho(bt.set)),
        (mn = function (e, t) {
          if (_o(bt, e)) throw new yo(yc);
          return (t.facade = e), Tc(bt, e, t), t;
        }),
        (qr = function (e) {
          return Ic(bt, e) || {};
        }),
        (On = function (e) {
          return _o(bt, e);
        }))
      : ((Ft = fm("state")),
        (dm[Ft] = !0),
        (mn = function (e, t) {
          if (Eo(e, Ft)) throw new yo(yc);
          return (t.facade = e), lm(e, Ft, t), t;
        }),
        (qr = function (e) {
          return Eo(e, Ft) ? e[Ft] : {};
        }),
        (On = function (e) {
          return Eo(e, Ft);
        }));
    var bt, Ic, _o, Tc, Ft;
    Oc.exports = { set: mn, get: qr, has: On, enforce: vm, getterFor: hm };
  });
  var Rc = s((JW, Sc) => {
    var Io = Dt(),
      Em = Ot(),
      Ac = Function.prototype,
      gm = Io && Object.getOwnPropertyDescriptor,
      To = Em(Ac, "name"),
      _m = To && function () {}.name === "something",
      ym = To && (!Io || (Io && gm(Ac, "name").configurable));
    Sc.exports = { EXISTS: To, PROPER: _m, CONFIGURABLE: ym };
  });
  var qc = s((eB, xc) => {
    var Im = ge(),
      wc = ut(),
      Tm = Ot(),
      Cc = In(),
      mm = _n(),
      Om = po(),
      Nc = bc(),
      bm = Rc().CONFIGURABLE,
      Am = Nc.get,
      Sm = Nc.enforce,
      Rm = String(String).split("String");
    (xc.exports = function (e, t, r, n) {
      var o = n ? !!n.unsafe : !1,
        i = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        u = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (wc(r) &&
          (String(u).slice(0, 7) === "Symbol(" &&
            (u = "[" + String(u).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!Tm(r, "name") || (bm && r.name !== u)) && Cc(r, "name", u),
          (c = Sm(r)),
          c.source || (c.source = Rm.join(typeof u == "string" ? u : ""))),
        e === Im)
      ) {
        i ? (e[t] = r) : mm(t, r);
        return;
      } else o ? !a && e[t] && (i = !0) : delete e[t];
      i ? (e[t] = r) : Cc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (wc(this) && Am(this).source) || Om(this);
    });
  });
  var mo = s((tB, Lc) => {
    var wm = Math.ceil,
      Cm = Math.floor;
    Lc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? Cm : wm)(t);
    };
  });
  var Dc = s((rB, Pc) => {
    var Nm = mo(),
      xm = Math.max,
      qm = Math.min;
    Pc.exports = function (e, t) {
      var r = Nm(e);
      return r < 0 ? xm(r + t, 0) : qm(r, t);
    };
  });
  var Fc = s((nB, Mc) => {
    var Lm = mo(),
      Pm = Math.min;
    Mc.exports = function (e) {
      return e > 0 ? Pm(Lm(e), 9007199254740991) : 0;
    };
  });
  var Xc = s((iB, Gc) => {
    var Dm = Fc();
    Gc.exports = function (e) {
      return Dm(e.length);
    };
  });
  var Oo = s((oB, Uc) => {
    var Mm = wr(),
      Fm = Dc(),
      Gm = Xc(),
      Vc = function (e) {
        return function (t, r, n) {
          var o = Mm(t),
            i = Gm(o),
            a = Fm(n, i),
            u;
          if (e && r != r) {
            for (; i > a; ) if (((u = o[a++]), u != u)) return !0;
          } else
            for (; i > a; a++)
              if ((e || a in o) && o[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    Uc.exports = { includes: Vc(!0), indexOf: Vc(!1) };
  });
  var Ao = s((aB, Bc) => {
    var Xm = $e(),
      bo = Ot(),
      Vm = wr(),
      Um = Oo().indexOf,
      Wm = Tn(),
      Wc = Xm([].push);
    Bc.exports = function (e, t) {
      var r = Vm(e),
        n = 0,
        o = [],
        i;
      for (i in r) !bo(Wm, i) && bo(r, i) && Wc(o, i);
      for (; t.length > n; ) bo(r, (i = t[n++])) && (~Um(o, i) || Wc(o, i));
      return o;
    };
  });
  var bn = s((sB, Hc) => {
    Hc.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var jc = s((kc) => {
    var Bm = Ao(),
      Hm = bn(),
      km = Hm.concat("length", "prototype");
    kc.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return Bm(t, km);
      };
  });
  var zc = s((Kc) => {
    Kc.f = Object.getOwnPropertySymbols;
  });
  var Qc = s((lB, Yc) => {
    var jm = Cr(),
      Km = $e(),
      zm = jc(),
      Ym = zc(),
      Qm = Nr(),
      $m = Km([].concat);
    Yc.exports =
      jm("Reflect", "ownKeys") ||
      function (t) {
        var r = zm.f(Qm(t)),
          n = Ym.f;
        return n ? $m(r, n(t)) : r;
      };
  });
  var Zc = s((fB, $c) => {
    var Zm = Ot(),
      Jm = Qc(),
      eO = lo(),
      tO = xr();
    $c.exports = function (e, t) {
      for (var r = Jm(t), n = tO.f, o = eO.f, i = 0; i < r.length; i++) {
        var a = r[i];
        Zm(e, a) || n(e, a, o(t, a));
      }
    };
  });
  var el = s((dB, Jc) => {
    var rO = Qt(),
      nO = ut(),
      iO = /#|\.prototype\./,
      Lr = function (e, t) {
        var r = aO[oO(e)];
        return r == uO ? !0 : r == sO ? !1 : nO(t) ? rO(t) : !!t;
      },
      oO = (Lr.normalize = function (e) {
        return String(e).replace(iO, ".").toLowerCase();
      }),
      aO = (Lr.data = {}),
      sO = (Lr.NATIVE = "N"),
      uO = (Lr.POLYFILL = "P");
    Jc.exports = Lr;
  });
  var rl = s((pB, tl) => {
    var So = ge(),
      cO = lo().f,
      lO = In(),
      fO = qc(),
      dO = _n(),
      pO = Zc(),
      vO = el();
    tl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        o = e.stat,
        i,
        a,
        u,
        c,
        f,
        g;
      if (
        (n
          ? (a = So)
          : o
          ? (a = So[r] || dO(r, {}))
          : (a = (So[r] || {}).prototype),
        a)
      )
        for (u in t) {
          if (
            ((f = t[u]),
            e.noTargetGet ? ((g = cO(a, u)), (c = g && g.value)) : (c = a[u]),
            (i = vO(n ? u : r + (o ? "." : "#") + u, e.forced)),
            !i && c !== void 0)
          ) {
            if (typeof f == typeof c) continue;
            pO(f, c);
          }
          (e.sham || (c && c.sham)) && lO(f, "sham", !0), fO(a, u, f, e);
        }
    };
  });
  var il = s((vB, nl) => {
    var hO = Ao(),
      EO = bn();
    nl.exports =
      Object.keys ||
      function (t) {
        return hO(t, EO);
      };
  });
  var al = s((hB, ol) => {
    var gO = Dt(),
      _O = xr(),
      yO = Nr(),
      IO = wr(),
      TO = il();
    ol.exports = gO
      ? Object.defineProperties
      : function (t, r) {
          yO(t);
          for (var n = IO(r), o = TO(r), i = o.length, a = 0, u; i > a; )
            _O.f(t, (u = o[a++]), n[u]);
          return t;
        };
  });
  var ul = s((EB, sl) => {
    var mO = Cr();
    sl.exports = mO("document", "documentElement");
  });
  var El = s((gB, hl) => {
    var OO = Nr(),
      bO = al(),
      cl = bn(),
      AO = Tn(),
      SO = ul(),
      RO = uo(),
      wO = vo(),
      ll = ">",
      fl = "<",
      wo = "prototype",
      Co = "script",
      pl = wO("IE_PROTO"),
      Ro = function () {},
      vl = function (e) {
        return fl + Co + ll + e + fl + "/" + Co + ll;
      },
      dl = function (e) {
        e.write(vl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      CO = function () {
        var e = RO("iframe"),
          t = "java" + Co + ":",
          r;
        return (
          (e.style.display = "none"),
          SO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(vl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      An,
      Sn = function () {
        try {
          An = new ActiveXObject("htmlfile");
        } catch {}
        Sn =
          typeof document < "u"
            ? document.domain && An
              ? dl(An)
              : CO()
            : dl(An);
        for (var e = cl.length; e--; ) delete Sn[wo][cl[e]];
        return Sn();
      };
    AO[pl] = !0;
    hl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((Ro[wo] = OO(t)), (n = new Ro()), (Ro[wo] = null), (n[pl] = t))
            : (n = Sn()),
          r === void 0 ? n : bO(n, r)
        );
      };
  });
  var _l = s((_B, gl) => {
    var NO = oo(),
      xO = El(),
      qO = xr(),
      No = NO("unscopables"),
      xo = Array.prototype;
    xo[No] == null && qO.f(xo, No, { configurable: !0, value: xO(null) });
    gl.exports = function (e) {
      xo[No][e] = !0;
    };
  });
  var yl = s(() => {
    "use strict";
    var LO = rl(),
      PO = Oo().includes,
      DO = _l();
    LO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return PO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    DO("includes");
  });
  var Tl = s((TB, Il) => {
    var MO = ge(),
      FO = $e();
    Il.exports = function (e, t) {
      return FO(MO[e].prototype[t]);
    };
  });
  var Ol = s((mB, ml) => {
    yl();
    var GO = Tl();
    ml.exports = GO("Array", "includes");
  });
  var Al = s((OB, bl) => {
    var XO = Ol();
    bl.exports = XO;
  });
  var Rl = s((bB, Sl) => {
    var VO = Al();
    Sl.exports = VO;
  });
  var qo = s((AB, wl) => {
    var UO =
      typeof global == "object" && global && global.Object === Object && global;
    wl.exports = UO;
  });
  var Je = s((SB, Cl) => {
    var WO = qo(),
      BO = typeof self == "object" && self && self.Object === Object && self,
      HO = WO || BO || Function("return this")();
    Cl.exports = HO;
  });
  var Jt = s((RB, Nl) => {
    var kO = Je(),
      jO = kO.Symbol;
    Nl.exports = jO;
  });
  var Pl = s((wB, Ll) => {
    var xl = Jt(),
      ql = Object.prototype,
      KO = ql.hasOwnProperty,
      zO = ql.toString,
      Pr = xl ? xl.toStringTag : void 0;
    function YO(e) {
      var t = KO.call(e, Pr),
        r = e[Pr];
      try {
        e[Pr] = void 0;
        var n = !0;
      } catch {}
      var o = zO.call(e);
      return n && (t ? (e[Pr] = r) : delete e[Pr]), o;
    }
    Ll.exports = YO;
  });
  var Ml = s((CB, Dl) => {
    var QO = Object.prototype,
      $O = QO.toString;
    function ZO(e) {
      return $O.call(e);
    }
    Dl.exports = ZO;
  });
  var At = s((NB, Xl) => {
    var Fl = Jt(),
      JO = Pl(),
      eb = Ml(),
      tb = "[object Null]",
      rb = "[object Undefined]",
      Gl = Fl ? Fl.toStringTag : void 0;
    function nb(e) {
      return e == null
        ? e === void 0
          ? rb
          : tb
        : Gl && Gl in Object(e)
        ? JO(e)
        : eb(e);
    }
    Xl.exports = nb;
  });
  var Lo = s((xB, Vl) => {
    function ib(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Vl.exports = ib;
  });
  var Po = s((qB, Ul) => {
    var ob = Lo(),
      ab = ob(Object.getPrototypeOf, Object);
    Ul.exports = ab;
  });
  var _t = s((LB, Wl) => {
    function sb(e) {
      return e != null && typeof e == "object";
    }
    Wl.exports = sb;
  });
  var Do = s((PB, Hl) => {
    var ub = At(),
      cb = Po(),
      lb = _t(),
      fb = "[object Object]",
      db = Function.prototype,
      pb = Object.prototype,
      Bl = db.toString,
      vb = pb.hasOwnProperty,
      hb = Bl.call(Object);
    function Eb(e) {
      if (!lb(e) || ub(e) != fb) return !1;
      var t = cb(e);
      if (t === null) return !0;
      var r = vb.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && Bl.call(r) == hb;
    }
    Hl.exports = Eb;
  });
  var kl = s((Mo) => {
    "use strict";
    Object.defineProperty(Mo, "__esModule", { value: !0 });
    Mo.default = gb;
    function gb(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var jl = s((Go, Fo) => {
    "use strict";
    Object.defineProperty(Go, "__esModule", { value: !0 });
    var _b = kl(),
      yb = Ib(_b);
    function Ib(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var er;
    typeof self < "u"
      ? (er = self)
      : typeof window < "u"
      ? (er = window)
      : typeof global < "u"
      ? (er = global)
      : typeof Fo < "u"
      ? (er = Fo)
      : (er = Function("return this")());
    var Tb = (0, yb.default)(er);
    Go.default = Tb;
  });
  var Xo = s((Dr) => {
    "use strict";
    Dr.__esModule = !0;
    Dr.ActionTypes = void 0;
    Dr.default = Ql;
    var mb = Do(),
      Ob = Yl(mb),
      bb = jl(),
      Kl = Yl(bb);
    function Yl(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var zl = (Dr.ActionTypes = { INIT: "@@redux/INIT" });
    function Ql(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(Ql)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var o = e,
        i = t,
        a = [],
        u = a,
        c = !1;
      function f() {
        u === a && (u = a.slice());
      }
      function g() {
        return i;
      }
      function h(b) {
        if (typeof b != "function")
          throw new Error("Expected listener to be a function.");
        var q = !0;
        return (
          f(),
          u.push(b),
          function () {
            if (q) {
              (q = !1), f();
              var w = u.indexOf(b);
              u.splice(w, 1);
            }
          }
        );
      }
      function E(b) {
        if (!(0, Ob.default)(b))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof b.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (i = o(i, b));
        } finally {
          c = !1;
        }
        for (var q = (a = u), R = 0; R < q.length; R++) q[R]();
        return b;
      }
      function I(b) {
        if (typeof b != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (o = b), E({ type: zl.INIT });
      }
      function x() {
        var b,
          q = h;
        return (
          (b = {
            subscribe: function (w) {
              if (typeof w != "object")
                throw new TypeError("Expected the observer to be an object.");
              function T() {
                w.next && w.next(g());
              }
              T();
              var F = q(T);
              return { unsubscribe: F };
            },
          }),
          (b[Kl.default] = function () {
            return this;
          }),
          b
        );
      }
      return (
        E({ type: zl.INIT }),
        (n = { dispatch: E, subscribe: h, getState: g, replaceReducer: I }),
        (n[Kl.default] = x),
        n
      );
    }
  });
  var Uo = s((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    Vo.default = Ab;
    function Ab(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var Jl = s((Wo) => {
    "use strict";
    Wo.__esModule = !0;
    Wo.default = Nb;
    var $l = Xo(),
      Sb = Do(),
      GB = Zl(Sb),
      Rb = Uo(),
      XB = Zl(Rb);
    function Zl(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function wb(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function Cb(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: $l.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var o =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: o }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                $l.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function Nb(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        typeof e[o] == "function" && (r[o] = e[o]);
      }
      var i = Object.keys(r);
      if (!1) var a;
      var u;
      try {
        Cb(r);
      } catch (c) {
        u = c;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          g = arguments[1];
        if (u) throw u;
        if (!1) var h;
        for (var E = !1, I = {}, x = 0; x < i.length; x++) {
          var b = i[x],
            q = r[b],
            R = f[b],
            w = q(R, g);
          if (typeof w > "u") {
            var T = wb(b, g);
            throw new Error(T);
          }
          (I[b] = w), (E = E || w !== R);
        }
        return E ? I : f;
      };
    }
  });
  var tf = s((Bo) => {
    "use strict";
    Bo.__esModule = !0;
    Bo.default = xb;
    function ef(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function xb(e, t) {
      if (typeof e == "function") return ef(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
        var i = r[o],
          a = e[i];
        typeof a == "function" && (n[i] = ef(a, t));
      }
      return n;
    }
  });
  var ko = s((Ho) => {
    "use strict";
    Ho.__esModule = !0;
    Ho.default = qb;
    function qb() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        o = t.slice(0, -1);
      return function () {
        return o.reduceRight(function (i, a) {
          return a(i);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var rf = s((jo) => {
    "use strict";
    jo.__esModule = !0;
    var Lb =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    jo.default = Fb;
    var Pb = ko(),
      Db = Mb(Pb);
    function Mb(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Fb() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (o, i, a) {
          var u = n(o, i, a),
            c = u.dispatch,
            f = [],
            g = {
              getState: u.getState,
              dispatch: function (E) {
                return c(E);
              },
            };
          return (
            (f = t.map(function (h) {
              return h(g);
            })),
            (c = Db.default.apply(void 0, f)(u.dispatch)),
            Lb({}, u, { dispatch: c })
          );
        };
      };
    }
  });
  var Ko = s((He) => {
    "use strict";
    He.__esModule = !0;
    He.compose =
      He.applyMiddleware =
      He.bindActionCreators =
      He.combineReducers =
      He.createStore =
        void 0;
    var Gb = Xo(),
      Xb = tr(Gb),
      Vb = Jl(),
      Ub = tr(Vb),
      Wb = tf(),
      Bb = tr(Wb),
      Hb = rf(),
      kb = tr(Hb),
      jb = ko(),
      Kb = tr(jb),
      zb = Uo(),
      HB = tr(zb);
    function tr(e) {
      return e && e.__esModule ? e : { default: e };
    }
    He.createStore = Xb.default;
    He.combineReducers = Ub.default;
    He.bindActionCreators = Bb.default;
    He.applyMiddleware = kb.default;
    He.compose = Kb.default;
  });
  var nf = s((we) => {
    "use strict";
    Object.defineProperty(we, "__esModule", { value: !0 });
    we.QuickEffectIds =
      we.QuickEffectDirectionConsts =
      we.EventTypeConsts =
      we.EventLimitAffectedElements =
      we.EventContinuousMouseAxes =
      we.EventBasedOn =
      we.EventAppliesTo =
        void 0;
    var Yb = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    };
    we.EventTypeConsts = Yb;
    var Qb = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    we.EventAppliesTo = Qb;
    var $b = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    we.EventBasedOn = $b;
    var Zb = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    we.EventContinuousMouseAxes = Zb;
    var Jb = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
    };
    we.EventLimitAffectedElements = Jb;
    var eA = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
    };
    we.QuickEffectIds = eA;
    var tA = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
    };
    we.QuickEffectDirectionConsts = tA;
  });
  var zo = s((rr) => {
    "use strict";
    Object.defineProperty(rr, "__esModule", { value: !0 });
    rr.ActionTypeConsts = rr.ActionAppliesTo = void 0;
    var rA = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    };
    rr.ActionTypeConsts = rA;
    var nA = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
    };
    rr.ActionAppliesTo = nA;
  });
  var of = s((Rn) => {
    "use strict";
    Object.defineProperty(Rn, "__esModule", { value: !0 });
    Rn.InteractionTypeConsts = void 0;
    var iA = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
    Rn.InteractionTypeConsts = iA;
  });
  var af = s((wn) => {
    "use strict";
    Object.defineProperty(wn, "__esModule", { value: !0 });
    wn.ReducedMotionTypes = void 0;
    var oA = zo(),
      {
        TRANSFORM_MOVE: aA,
        TRANSFORM_SCALE: sA,
        TRANSFORM_ROTATE: uA,
        TRANSFORM_SKEW: cA,
        STYLE_SIZE: lA,
        STYLE_FILTER: fA,
        STYLE_FONT_VARIATION: dA,
      } = oA.ActionTypeConsts,
      pA = {
        [aA]: !0,
        [sA]: !0,
        [uA]: !0,
        [cA]: !0,
        [lA]: !0,
        [fA]: !0,
        [dA]: !0,
      };
    wn.ReducedMotionTypes = pA;
  });
  var sf = s((re) => {
    "use strict";
    Object.defineProperty(re, "__esModule", { value: !0 });
    re.IX2_VIEWPORT_WIDTH_CHANGED =
      re.IX2_TEST_FRAME_RENDERED =
      re.IX2_STOP_REQUESTED =
      re.IX2_SESSION_STOPPED =
      re.IX2_SESSION_STARTED =
      re.IX2_SESSION_INITIALIZED =
      re.IX2_RAW_DATA_IMPORTED =
      re.IX2_PREVIEW_REQUESTED =
      re.IX2_PLAYBACK_REQUESTED =
      re.IX2_PARAMETER_CHANGED =
      re.IX2_MEDIA_QUERIES_DEFINED =
      re.IX2_INSTANCE_STARTED =
      re.IX2_INSTANCE_REMOVED =
      re.IX2_INSTANCE_ADDED =
      re.IX2_EVENT_STATE_CHANGED =
      re.IX2_EVENT_LISTENER_ADDED =
      re.IX2_ELEMENT_STATE_CHANGED =
      re.IX2_CLEAR_REQUESTED =
      re.IX2_ANIMATION_FRAME_CHANGED =
      re.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        void 0;
    var vA = "IX2_RAW_DATA_IMPORTED";
    re.IX2_RAW_DATA_IMPORTED = vA;
    var hA = "IX2_SESSION_INITIALIZED";
    re.IX2_SESSION_INITIALIZED = hA;
    var EA = "IX2_SESSION_STARTED";
    re.IX2_SESSION_STARTED = EA;
    var gA = "IX2_SESSION_STOPPED";
    re.IX2_SESSION_STOPPED = gA;
    var _A = "IX2_PREVIEW_REQUESTED";
    re.IX2_PREVIEW_REQUESTED = _A;
    var yA = "IX2_PLAYBACK_REQUESTED";
    re.IX2_PLAYBACK_REQUESTED = yA;
    var IA = "IX2_STOP_REQUESTED";
    re.IX2_STOP_REQUESTED = IA;
    var TA = "IX2_CLEAR_REQUESTED";
    re.IX2_CLEAR_REQUESTED = TA;
    var mA = "IX2_EVENT_LISTENER_ADDED";
    re.IX2_EVENT_LISTENER_ADDED = mA;
    var OA = "IX2_EVENT_STATE_CHANGED";
    re.IX2_EVENT_STATE_CHANGED = OA;
    var bA = "IX2_ANIMATION_FRAME_CHANGED";
    re.IX2_ANIMATION_FRAME_CHANGED = bA;
    var AA = "IX2_PARAMETER_CHANGED";
    re.IX2_PARAMETER_CHANGED = AA;
    var SA = "IX2_INSTANCE_ADDED";
    re.IX2_INSTANCE_ADDED = SA;
    var RA = "IX2_INSTANCE_STARTED";
    re.IX2_INSTANCE_STARTED = RA;
    var wA = "IX2_INSTANCE_REMOVED";
    re.IX2_INSTANCE_REMOVED = wA;
    var CA = "IX2_ELEMENT_STATE_CHANGED";
    re.IX2_ELEMENT_STATE_CHANGED = CA;
    var NA = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    re.IX2_ACTION_LIST_PLAYBACK_CHANGED = NA;
    var xA = "IX2_VIEWPORT_WIDTH_CHANGED";
    re.IX2_VIEWPORT_WIDTH_CHANGED = xA;
    var qA = "IX2_MEDIA_QUERIES_DEFINED";
    re.IX2_MEDIA_QUERIES_DEFINED = qA;
    var LA = "IX2_TEST_FRAME_RENDERED";
    re.IX2_TEST_FRAME_RENDERED = LA;
  });
  var uf = s((A) => {
    "use strict";
    Object.defineProperty(A, "__esModule", { value: !0 });
    A.W_MOD_JS =
      A.W_MOD_IX =
      A.WILL_CHANGE =
      A.WIDTH =
      A.WF_PAGE =
      A.TRANSLATE_Z =
      A.TRANSLATE_Y =
      A.TRANSLATE_X =
      A.TRANSLATE_3D =
      A.TRANSFORM =
      A.SKEW_Y =
      A.SKEW_X =
      A.SKEW =
      A.SIBLINGS =
      A.SCALE_Z =
      A.SCALE_Y =
      A.SCALE_X =
      A.SCALE_3D =
      A.ROTATE_Z =
      A.ROTATE_Y =
      A.ROTATE_X =
      A.RENDER_TRANSFORM =
      A.RENDER_STYLE =
      A.RENDER_PLUGIN =
      A.RENDER_GENERAL =
      A.PRESERVE_3D =
      A.PLAIN_OBJECT =
      A.PARENT =
      A.OPACITY =
      A.IX2_ID_DELIMITER =
      A.IMMEDIATE_CHILDREN =
      A.HTML_ELEMENT =
      A.HEIGHT =
      A.FONT_VARIATION_SETTINGS =
      A.FLEX =
      A.FILTER =
      A.DISPLAY =
      A.CONFIG_Z_VALUE =
      A.CONFIG_Z_UNIT =
      A.CONFIG_Y_VALUE =
      A.CONFIG_Y_UNIT =
      A.CONFIG_X_VALUE =
      A.CONFIG_X_UNIT =
      A.CONFIG_VALUE =
      A.CONFIG_UNIT =
      A.COMMA_DELIMITER =
      A.COLOR =
      A.COLON_DELIMITER =
      A.CHILDREN =
      A.BOUNDARY_SELECTOR =
      A.BORDER_COLOR =
      A.BAR_DELIMITER =
      A.BACKGROUND_COLOR =
      A.BACKGROUND =
      A.AUTO =
      A.ABSTRACT_NODE =
        void 0;
    var PA = "|";
    A.IX2_ID_DELIMITER = PA;
    var DA = "data-wf-page";
    A.WF_PAGE = DA;
    var MA = "w-mod-js";
    A.W_MOD_JS = MA;
    var FA = "w-mod-ix";
    A.W_MOD_IX = FA;
    var GA = ".w-dyn-item";
    A.BOUNDARY_SELECTOR = GA;
    var XA = "xValue";
    A.CONFIG_X_VALUE = XA;
    var VA = "yValue";
    A.CONFIG_Y_VALUE = VA;
    var UA = "zValue";
    A.CONFIG_Z_VALUE = UA;
    var WA = "value";
    A.CONFIG_VALUE = WA;
    var BA = "xUnit";
    A.CONFIG_X_UNIT = BA;
    var HA = "yUnit";
    A.CONFIG_Y_UNIT = HA;
    var kA = "zUnit";
    A.CONFIG_Z_UNIT = kA;
    var jA = "unit";
    A.CONFIG_UNIT = jA;
    var KA = "transform";
    A.TRANSFORM = KA;
    var zA = "translateX";
    A.TRANSLATE_X = zA;
    var YA = "translateY";
    A.TRANSLATE_Y = YA;
    var QA = "translateZ";
    A.TRANSLATE_Z = QA;
    var $A = "translate3d";
    A.TRANSLATE_3D = $A;
    var ZA = "scaleX";
    A.SCALE_X = ZA;
    var JA = "scaleY";
    A.SCALE_Y = JA;
    var eS = "scaleZ";
    A.SCALE_Z = eS;
    var tS = "scale3d";
    A.SCALE_3D = tS;
    var rS = "rotateX";
    A.ROTATE_X = rS;
    var nS = "rotateY";
    A.ROTATE_Y = nS;
    var iS = "rotateZ";
    A.ROTATE_Z = iS;
    var oS = "skew";
    A.SKEW = oS;
    var aS = "skewX";
    A.SKEW_X = aS;
    var sS = "skewY";
    A.SKEW_Y = sS;
    var uS = "opacity";
    A.OPACITY = uS;
    var cS = "filter";
    A.FILTER = cS;
    var lS = "font-variation-settings";
    A.FONT_VARIATION_SETTINGS = lS;
    var fS = "width";
    A.WIDTH = fS;
    var dS = "height";
    A.HEIGHT = dS;
    var pS = "backgroundColor";
    A.BACKGROUND_COLOR = pS;
    var vS = "background";
    A.BACKGROUND = vS;
    var hS = "borderColor";
    A.BORDER_COLOR = hS;
    var ES = "color";
    A.COLOR = ES;
    var gS = "display";
    A.DISPLAY = gS;
    var _S = "flex";
    A.FLEX = _S;
    var yS = "willChange";
    A.WILL_CHANGE = yS;
    var IS = "AUTO";
    A.AUTO = IS;
    var TS = ",";
    A.COMMA_DELIMITER = TS;
    var mS = ":";
    A.COLON_DELIMITER = mS;
    var OS = "|";
    A.BAR_DELIMITER = OS;
    var bS = "CHILDREN";
    A.CHILDREN = bS;
    var AS = "IMMEDIATE_CHILDREN";
    A.IMMEDIATE_CHILDREN = AS;
    var SS = "SIBLINGS";
    A.SIBLINGS = SS;
    var RS = "PARENT";
    A.PARENT = RS;
    var wS = "preserve-3d";
    A.PRESERVE_3D = wS;
    var CS = "HTML_ELEMENT";
    A.HTML_ELEMENT = CS;
    var NS = "PLAIN_OBJECT";
    A.PLAIN_OBJECT = NS;
    var xS = "ABSTRACT_NODE";
    A.ABSTRACT_NODE = xS;
    var qS = "RENDER_TRANSFORM";
    A.RENDER_TRANSFORM = qS;
    var LS = "RENDER_GENERAL";
    A.RENDER_GENERAL = LS;
    var PS = "RENDER_STYLE";
    A.RENDER_STYLE = PS;
    var DS = "RENDER_PLUGIN";
    A.RENDER_PLUGIN = DS;
  });
  var Ue = s((be) => {
    "use strict";
    var cf = Yt().default;
    Object.defineProperty(be, "__esModule", { value: !0 });
    var Cn = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    be.IX2EngineConstants = be.IX2EngineActionTypes = void 0;
    var Yo = nf();
    Object.keys(Yo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Cn, e) ||
        (e in be && be[e] === Yo[e]) ||
        Object.defineProperty(be, e, {
          enumerable: !0,
          get: function () {
            return Yo[e];
          },
        });
    });
    var Qo = zo();
    Object.keys(Qo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Cn, e) ||
        (e in be && be[e] === Qo[e]) ||
        Object.defineProperty(be, e, {
          enumerable: !0,
          get: function () {
            return Qo[e];
          },
        });
    });
    var $o = of();
    Object.keys($o).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Cn, e) ||
        (e in be && be[e] === $o[e]) ||
        Object.defineProperty(be, e, {
          enumerable: !0,
          get: function () {
            return $o[e];
          },
        });
    });
    var Zo = af();
    Object.keys(Zo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Cn, e) ||
        (e in be && be[e] === Zo[e]) ||
        Object.defineProperty(be, e, {
          enumerable: !0,
          get: function () {
            return Zo[e];
          },
        });
    });
    var MS = cf(sf());
    be.IX2EngineActionTypes = MS;
    var FS = cf(uf());
    be.IX2EngineConstants = FS;
  });
  var lf = s((Nn) => {
    "use strict";
    Object.defineProperty(Nn, "__esModule", { value: !0 });
    Nn.ixData = void 0;
    var GS = Ue(),
      { IX2_RAW_DATA_IMPORTED: XS } = GS.IX2EngineActionTypes,
      VS = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case XS:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
    Nn.ixData = VS;
  });
  var Mr = s((eH, yt) => {
    function Jo() {
      return (
        (yt.exports = Jo =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
        (yt.exports.__esModule = !0),
        (yt.exports.default = yt.exports),
        Jo.apply(this, arguments)
      );
    }
    (yt.exports = Jo),
      (yt.exports.__esModule = !0),
      (yt.exports.default = yt.exports);
  });
  var nr = s((ye) => {
    "use strict";
    Object.defineProperty(ye, "__esModule", { value: !0 });
    var US =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    ye.clone = qn;
    ye.addLast = pf;
    ye.addFirst = vf;
    ye.removeLast = hf;
    ye.removeFirst = Ef;
    ye.insert = gf;
    ye.removeAt = _f;
    ye.replaceAt = yf;
    ye.getIn = Ln;
    ye.set = Pn;
    ye.setIn = Dn;
    ye.update = Tf;
    ye.updateIn = mf;
    ye.merge = Of;
    ye.mergeDeep = bf;
    ye.mergeIn = Af;
    ye.omit = Sf;
    ye.addDefaults = Rf;
    var ff = "INVALID_ARGS";
    function df(e) {
      throw new Error(e);
    }
    function ea(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var WS = {}.hasOwnProperty;
    function qn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = ea(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        r[o] = e[o];
      }
      return r;
    }
    function We(e, t, r) {
      var n = r;
      n == null && df(ff);
      for (
        var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), u = 3;
        u < i;
        u++
      )
        a[u - 3] = arguments[u];
      for (var c = 0; c < a.length; c++) {
        var f = a[c];
        if (f != null) {
          var g = ea(f);
          if (g.length)
            for (var h = 0; h <= g.length; h++) {
              var E = g[h];
              if (!(e && n[E] !== void 0)) {
                var I = f[E];
                t && xn(n[E]) && xn(I) && (I = We(e, t, n[E], I)),
                  !(I === void 0 || I === n[E]) &&
                    (o || ((o = !0), (n = qn(n))), (n[E] = I));
              }
            }
        }
      }
      return n;
    }
    function xn(e) {
      var t = typeof e > "u" ? "undefined" : US(e);
      return e != null && (t === "object" || t === "function");
    }
    function pf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function vf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function hf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Ef(e) {
      return e.length ? e.slice(1) : e;
    }
    function gf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function _f(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function yf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
      return (o[t] = r), o;
    }
    function Ln(e, t) {
      if ((!Array.isArray(t) && df(ff), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var o = t[n];
          if (((r = r?.[o]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Pn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        o = e ?? n;
      if (o[t] === r) return o;
      var i = qn(o);
      return (i[t] = r), i;
    }
    function If(e, t, r, n) {
      var o = void 0,
        i = t[n];
      if (n === t.length - 1) o = r;
      else {
        var a =
          xn(e) && xn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
        o = If(a, t, r, n + 1);
      }
      return Pn(e, i, o);
    }
    function Dn(e, t, r) {
      return t.length ? If(e, t, r, 0) : r;
    }
    function Tf(e, t, r) {
      var n = e?.[t],
        o = r(n);
      return Pn(e, t, o);
    }
    function mf(e, t, r) {
      var n = Ln(e, t),
        o = r(n);
      return Dn(e, t, o);
    }
    function Of(e, t, r, n, o, i) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        u[c - 6] = arguments[c];
      return u.length
        ? We.call.apply(We, [null, !1, !1, e, t, r, n, o, i].concat(u))
        : We(!1, !1, e, t, r, n, o, i);
    }
    function bf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        u[c - 6] = arguments[c];
      return u.length
        ? We.call.apply(We, [null, !1, !0, e, t, r, n, o, i].concat(u))
        : We(!1, !0, e, t, r, n, o, i);
    }
    function Af(e, t, r, n, o, i, a) {
      var u = Ln(e, t);
      u == null && (u = {});
      for (
        var c = void 0,
          f = arguments.length,
          g = Array(f > 7 ? f - 7 : 0),
          h = 7;
        h < f;
        h++
      )
        g[h - 7] = arguments[h];
      return (
        g.length
          ? (c = We.call.apply(We, [null, !1, !1, u, r, n, o, i, a].concat(g)))
          : (c = We(!1, !1, u, r, n, o, i, a)),
        Dn(e, t, c)
      );
    }
    function Sf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
        if (WS.call(e, r[o])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var i = {}, a = ea(e), u = 0; u < a.length; u++) {
        var c = a[u];
        r.indexOf(c) >= 0 || (i[c] = e[c]);
      }
      return i;
    }
    function Rf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        u[c - 6] = arguments[c];
      return u.length
        ? We.call.apply(We, [null, !0, !1, e, t, r, n, o, i].concat(u))
        : We(!0, !1, e, t, r, n, o, i);
    }
    var BS = {
      clone: qn,
      addLast: pf,
      addFirst: vf,
      removeLast: hf,
      removeFirst: Ef,
      insert: gf,
      removeAt: _f,
      replaceAt: yf,
      getIn: Ln,
      set: Pn,
      setIn: Dn,
      update: Tf,
      updateIn: mf,
      merge: Of,
      mergeDeep: bf,
      mergeIn: Af,
      omit: Sf,
      addDefaults: Rf,
    };
    ye.default = BS;
  });
  var Cf = s((Mn) => {
    "use strict";
    var HS = st().default;
    Object.defineProperty(Mn, "__esModule", { value: !0 });
    Mn.ixRequest = void 0;
    var kS = HS(Mr()),
      jS = Ue(),
      KS = nr(),
      {
        IX2_PREVIEW_REQUESTED: zS,
        IX2_PLAYBACK_REQUESTED: YS,
        IX2_STOP_REQUESTED: QS,
        IX2_CLEAR_REQUESTED: $S,
      } = jS.IX2EngineActionTypes,
      ZS = { preview: {}, playback: {}, stop: {}, clear: {} },
      wf = Object.create(null, {
        [zS]: { value: "preview" },
        [YS]: { value: "playback" },
        [QS]: { value: "stop" },
        [$S]: { value: "clear" },
      }),
      JS = (e = ZS, t) => {
        if (t.type in wf) {
          let r = [wf[t.type]];
          return (0, KS.setIn)(e, [r], (0, kS.default)({}, t.payload));
        }
        return e;
      };
    Mn.ixRequest = JS;
  });
  var xf = s((Fn) => {
    "use strict";
    Object.defineProperty(Fn, "__esModule", { value: !0 });
    Fn.ixSession = void 0;
    var e0 = Ue(),
      ct = nr(),
      {
        IX2_SESSION_INITIALIZED: t0,
        IX2_SESSION_STARTED: r0,
        IX2_TEST_FRAME_RENDERED: n0,
        IX2_SESSION_STOPPED: i0,
        IX2_EVENT_LISTENER_ADDED: o0,
        IX2_EVENT_STATE_CHANGED: a0,
        IX2_ANIMATION_FRAME_CHANGED: s0,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: u0,
        IX2_VIEWPORT_WIDTH_CHANGED: c0,
        IX2_MEDIA_QUERIES_DEFINED: l0,
      } = e0.IX2EngineActionTypes,
      Nf = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      f0 = 20,
      d0 = (e = Nf, t) => {
        switch (t.type) {
          case t0: {
            let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
            return (0, ct.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
          }
          case r0:
            return (0, ct.set)(e, "active", !0);
          case n0: {
            let {
              payload: { step: r = f0 },
            } = t;
            return (0, ct.set)(e, "tick", e.tick + r);
          }
          case i0:
            return Nf;
          case s0: {
            let {
              payload: { now: r },
            } = t;
            return (0, ct.set)(e, "tick", r);
          }
          case o0: {
            let r = (0, ct.addLast)(e.eventListeners, t.payload);
            return (0, ct.set)(e, "eventListeners", r);
          }
          case a0: {
            let { stateKey: r, newState: n } = t.payload;
            return (0, ct.setIn)(e, ["eventState", r], n);
          }
          case u0: {
            let { actionListId: r, isPlaying: n } = t.payload;
            return (0, ct.setIn)(e, ["playbackState", r], n);
          }
          case c0: {
            let { width: r, mediaQueries: n } = t.payload,
              o = n.length,
              i = null;
            for (let a = 0; a < o; a++) {
              let { key: u, min: c, max: f } = n[a];
              if (r >= c && r <= f) {
                i = u;
                break;
              }
            }
            return (0, ct.merge)(e, { viewportWidth: r, mediaQueryKey: i });
          }
          case l0:
            return (0, ct.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
    Fn.ixSession = d0;
  });
  var Lf = s((iH, qf) => {
    function p0() {
      (this.__data__ = []), (this.size = 0);
    }
    qf.exports = p0;
  });
  var Gn = s((oH, Pf) => {
    function v0(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Pf.exports = v0;
  });
  var Fr = s((aH, Df) => {
    var h0 = Gn();
    function E0(e, t) {
      for (var r = e.length; r--; ) if (h0(e[r][0], t)) return r;
      return -1;
    }
    Df.exports = E0;
  });
  var Ff = s((sH, Mf) => {
    var g0 = Fr(),
      _0 = Array.prototype,
      y0 = _0.splice;
    function I0(e) {
      var t = this.__data__,
        r = g0(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : y0.call(t, r, 1), --this.size, !0;
    }
    Mf.exports = I0;
  });
  var Xf = s((uH, Gf) => {
    var T0 = Fr();
    function m0(e) {
      var t = this.__data__,
        r = T0(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Gf.exports = m0;
  });
  var Uf = s((cH, Vf) => {
    var O0 = Fr();
    function b0(e) {
      return O0(this.__data__, e) > -1;
    }
    Vf.exports = b0;
  });
  var Bf = s((lH, Wf) => {
    var A0 = Fr();
    function S0(e, t) {
      var r = this.__data__,
        n = A0(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    Wf.exports = S0;
  });
  var Gr = s((fH, Hf) => {
    var R0 = Lf(),
      w0 = Ff(),
      C0 = Xf(),
      N0 = Uf(),
      x0 = Bf();
    function ir(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    ir.prototype.clear = R0;
    ir.prototype.delete = w0;
    ir.prototype.get = C0;
    ir.prototype.has = N0;
    ir.prototype.set = x0;
    Hf.exports = ir;
  });
  var jf = s((dH, kf) => {
    var q0 = Gr();
    function L0() {
      (this.__data__ = new q0()), (this.size = 0);
    }
    kf.exports = L0;
  });
  var zf = s((pH, Kf) => {
    function P0(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    Kf.exports = P0;
  });
  var Qf = s((vH, Yf) => {
    function D0(e) {
      return this.__data__.get(e);
    }
    Yf.exports = D0;
  });
  var Zf = s((hH, $f) => {
    function M0(e) {
      return this.__data__.has(e);
    }
    $f.exports = M0;
  });
  var lt = s((EH, Jf) => {
    function F0(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Jf.exports = F0;
  });
  var ta = s((gH, ed) => {
    var G0 = At(),
      X0 = lt(),
      V0 = "[object AsyncFunction]",
      U0 = "[object Function]",
      W0 = "[object GeneratorFunction]",
      B0 = "[object Proxy]";
    function H0(e) {
      if (!X0(e)) return !1;
      var t = G0(e);
      return t == U0 || t == W0 || t == V0 || t == B0;
    }
    ed.exports = H0;
  });
  var rd = s((_H, td) => {
    var k0 = Je(),
      j0 = k0["__core-js_shared__"];
    td.exports = j0;
  });
  var od = s((yH, id) => {
    var ra = rd(),
      nd = (function () {
        var e = /[^.]+$/.exec((ra && ra.keys && ra.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function K0(e) {
      return !!nd && nd in e;
    }
    id.exports = K0;
  });
  var na = s((IH, ad) => {
    var z0 = Function.prototype,
      Y0 = z0.toString;
    function Q0(e) {
      if (e != null) {
        try {
          return Y0.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    ad.exports = Q0;
  });
  var ud = s((TH, sd) => {
    var $0 = ta(),
      Z0 = od(),
      J0 = lt(),
      eR = na(),
      tR = /[\\^$.*+?()[\]{}|]/g,
      rR = /^\[object .+?Constructor\]$/,
      nR = Function.prototype,
      iR = Object.prototype,
      oR = nR.toString,
      aR = iR.hasOwnProperty,
      sR = RegExp(
        "^" +
          oR
            .call(aR)
            .replace(tR, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function uR(e) {
      if (!J0(e) || Z0(e)) return !1;
      var t = $0(e) ? sR : rR;
      return t.test(eR(e));
    }
    sd.exports = uR;
  });
  var ld = s((mH, cd) => {
    function cR(e, t) {
      return e?.[t];
    }
    cd.exports = cR;
  });
  var St = s((OH, fd) => {
    var lR = ud(),
      fR = ld();
    function dR(e, t) {
      var r = fR(e, t);
      return lR(r) ? r : void 0;
    }
    fd.exports = dR;
  });
  var Xn = s((bH, dd) => {
    var pR = St(),
      vR = Je(),
      hR = pR(vR, "Map");
    dd.exports = hR;
  });
  var Xr = s((AH, pd) => {
    var ER = St(),
      gR = ER(Object, "create");
    pd.exports = gR;
  });
  var Ed = s((SH, hd) => {
    var vd = Xr();
    function _R() {
      (this.__data__ = vd ? vd(null) : {}), (this.size = 0);
    }
    hd.exports = _R;
  });
  var _d = s((RH, gd) => {
    function yR(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    gd.exports = yR;
  });
  var Id = s((wH, yd) => {
    var IR = Xr(),
      TR = "__lodash_hash_undefined__",
      mR = Object.prototype,
      OR = mR.hasOwnProperty;
    function bR(e) {
      var t = this.__data__;
      if (IR) {
        var r = t[e];
        return r === TR ? void 0 : r;
      }
      return OR.call(t, e) ? t[e] : void 0;
    }
    yd.exports = bR;
  });
  var md = s((CH, Td) => {
    var AR = Xr(),
      SR = Object.prototype,
      RR = SR.hasOwnProperty;
    function wR(e) {
      var t = this.__data__;
      return AR ? t[e] !== void 0 : RR.call(t, e);
    }
    Td.exports = wR;
  });
  var bd = s((NH, Od) => {
    var CR = Xr(),
      NR = "__lodash_hash_undefined__";
    function xR(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = CR && t === void 0 ? NR : t),
        this
      );
    }
    Od.exports = xR;
  });
  var Sd = s((xH, Ad) => {
    var qR = Ed(),
      LR = _d(),
      PR = Id(),
      DR = md(),
      MR = bd();
    function or(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    or.prototype.clear = qR;
    or.prototype.delete = LR;
    or.prototype.get = PR;
    or.prototype.has = DR;
    or.prototype.set = MR;
    Ad.exports = or;
  });
  var Cd = s((qH, wd) => {
    var Rd = Sd(),
      FR = Gr(),
      GR = Xn();
    function XR() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Rd(),
          map: new (GR || FR)(),
          string: new Rd(),
        });
    }
    wd.exports = XR;
  });
  var xd = s((LH, Nd) => {
    function VR(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Nd.exports = VR;
  });
  var Vr = s((PH, qd) => {
    var UR = xd();
    function WR(e, t) {
      var r = e.__data__;
      return UR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    qd.exports = WR;
  });
  var Pd = s((DH, Ld) => {
    var BR = Vr();
    function HR(e) {
      var t = BR(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Ld.exports = HR;
  });
  var Md = s((MH, Dd) => {
    var kR = Vr();
    function jR(e) {
      return kR(this, e).get(e);
    }
    Dd.exports = jR;
  });
  var Gd = s((FH, Fd) => {
    var KR = Vr();
    function zR(e) {
      return KR(this, e).has(e);
    }
    Fd.exports = zR;
  });
  var Vd = s((GH, Xd) => {
    var YR = Vr();
    function QR(e, t) {
      var r = YR(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    Xd.exports = QR;
  });
  var Vn = s((XH, Ud) => {
    var $R = Cd(),
      ZR = Pd(),
      JR = Md(),
      ew = Gd(),
      tw = Vd();
    function ar(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    ar.prototype.clear = $R;
    ar.prototype.delete = ZR;
    ar.prototype.get = JR;
    ar.prototype.has = ew;
    ar.prototype.set = tw;
    Ud.exports = ar;
  });
  var Bd = s((VH, Wd) => {
    var rw = Gr(),
      nw = Xn(),
      iw = Vn(),
      ow = 200;
    function aw(e, t) {
      var r = this.__data__;
      if (r instanceof rw) {
        var n = r.__data__;
        if (!nw || n.length < ow - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new iw(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    Wd.exports = aw;
  });
  var ia = s((UH, Hd) => {
    var sw = Gr(),
      uw = jf(),
      cw = zf(),
      lw = Qf(),
      fw = Zf(),
      dw = Bd();
    function sr(e) {
      var t = (this.__data__ = new sw(e));
      this.size = t.size;
    }
    sr.prototype.clear = uw;
    sr.prototype.delete = cw;
    sr.prototype.get = lw;
    sr.prototype.has = fw;
    sr.prototype.set = dw;
    Hd.exports = sr;
  });
  var jd = s((WH, kd) => {
    var pw = "__lodash_hash_undefined__";
    function vw(e) {
      return this.__data__.set(e, pw), this;
    }
    kd.exports = vw;
  });
  var zd = s((BH, Kd) => {
    function hw(e) {
      return this.__data__.has(e);
    }
    Kd.exports = hw;
  });
  var Qd = s((HH, Yd) => {
    var Ew = Vn(),
      gw = jd(),
      _w = zd();
    function Un(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new Ew(); ++t < r; ) this.add(e[t]);
    }
    Un.prototype.add = Un.prototype.push = gw;
    Un.prototype.has = _w;
    Yd.exports = Un;
  });
  var Zd = s((kH, $d) => {
    function yw(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    $d.exports = yw;
  });
  var ep = s((jH, Jd) => {
    function Iw(e, t) {
      return e.has(t);
    }
    Jd.exports = Iw;
  });
  var oa = s((KH, tp) => {
    var Tw = Qd(),
      mw = Zd(),
      Ow = ep(),
      bw = 1,
      Aw = 2;
    function Sw(e, t, r, n, o, i) {
      var a = r & bw,
        u = e.length,
        c = t.length;
      if (u != c && !(a && c > u)) return !1;
      var f = i.get(e),
        g = i.get(t);
      if (f && g) return f == t && g == e;
      var h = -1,
        E = !0,
        I = r & Aw ? new Tw() : void 0;
      for (i.set(e, t), i.set(t, e); ++h < u; ) {
        var x = e[h],
          b = t[h];
        if (n) var q = a ? n(b, x, h, t, e, i) : n(x, b, h, e, t, i);
        if (q !== void 0) {
          if (q) continue;
          E = !1;
          break;
        }
        if (I) {
          if (
            !mw(t, function (R, w) {
              if (!Ow(I, w) && (x === R || o(x, R, r, n, i))) return I.push(w);
            })
          ) {
            E = !1;
            break;
          }
        } else if (!(x === b || o(x, b, r, n, i))) {
          E = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), E;
    }
    tp.exports = Sw;
  });
  var np = s((zH, rp) => {
    var Rw = Je(),
      ww = Rw.Uint8Array;
    rp.exports = ww;
  });
  var op = s((YH, ip) => {
    function Cw(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, o) {
          r[++t] = [o, n];
        }),
        r
      );
    }
    ip.exports = Cw;
  });
  var sp = s((QH, ap) => {
    function Nw(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    ap.exports = Nw;
  });
  var dp = s(($H, fp) => {
    var up = Jt(),
      cp = np(),
      xw = Gn(),
      qw = oa(),
      Lw = op(),
      Pw = sp(),
      Dw = 1,
      Mw = 2,
      Fw = "[object Boolean]",
      Gw = "[object Date]",
      Xw = "[object Error]",
      Vw = "[object Map]",
      Uw = "[object Number]",
      Ww = "[object RegExp]",
      Bw = "[object Set]",
      Hw = "[object String]",
      kw = "[object Symbol]",
      jw = "[object ArrayBuffer]",
      Kw = "[object DataView]",
      lp = up ? up.prototype : void 0,
      aa = lp ? lp.valueOf : void 0;
    function zw(e, t, r, n, o, i, a) {
      switch (r) {
        case Kw:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case jw:
          return !(e.byteLength != t.byteLength || !i(new cp(e), new cp(t)));
        case Fw:
        case Gw:
        case Uw:
          return xw(+e, +t);
        case Xw:
          return e.name == t.name && e.message == t.message;
        case Ww:
        case Hw:
          return e == t + "";
        case Vw:
          var u = Lw;
        case Bw:
          var c = n & Dw;
          if ((u || (u = Pw), e.size != t.size && !c)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= Mw), a.set(e, t);
          var g = qw(u(e), u(t), n, o, i, a);
          return a.delete(e), g;
        case kw:
          if (aa) return aa.call(e) == aa.call(t);
      }
      return !1;
    }
    fp.exports = zw;
  });
  var Wn = s((ZH, pp) => {
    function Yw(e, t) {
      for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
      return e;
    }
    pp.exports = Yw;
  });
  var Ce = s((JH, vp) => {
    var Qw = Array.isArray;
    vp.exports = Qw;
  });
  var sa = s((e5, hp) => {
    var $w = Wn(),
      Zw = Ce();
    function Jw(e, t, r) {
      var n = t(e);
      return Zw(e) ? n : $w(n, r(e));
    }
    hp.exports = Jw;
  });
  var gp = s((t5, Ep) => {
    function eC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (i[o++] = a);
      }
      return i;
    }
    Ep.exports = eC;
  });
  var ua = s((r5, _p) => {
    function tC() {
      return [];
    }
    _p.exports = tC;
  });
  var ca = s((n5, Ip) => {
    var rC = gp(),
      nC = ua(),
      iC = Object.prototype,
      oC = iC.propertyIsEnumerable,
      yp = Object.getOwnPropertySymbols,
      aC = yp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                rC(yp(e), function (t) {
                  return oC.call(e, t);
                }));
          }
        : nC;
    Ip.exports = aC;
  });
  var mp = s((i5, Tp) => {
    function sC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Tp.exports = sC;
  });
  var bp = s((o5, Op) => {
    var uC = At(),
      cC = _t(),
      lC = "[object Arguments]";
    function fC(e) {
      return cC(e) && uC(e) == lC;
    }
    Op.exports = fC;
  });
  var Ur = s((a5, Rp) => {
    var Ap = bp(),
      dC = _t(),
      Sp = Object.prototype,
      pC = Sp.hasOwnProperty,
      vC = Sp.propertyIsEnumerable,
      hC = Ap(
        (function () {
          return arguments;
        })()
      )
        ? Ap
        : function (e) {
            return dC(e) && pC.call(e, "callee") && !vC.call(e, "callee");
          };
    Rp.exports = hC;
  });
  var Cp = s((s5, wp) => {
    function EC() {
      return !1;
    }
    wp.exports = EC;
  });
  var Bn = s((Wr, ur) => {
    var gC = Je(),
      _C = Cp(),
      qp = typeof Wr == "object" && Wr && !Wr.nodeType && Wr,
      Np = qp && typeof ur == "object" && ur && !ur.nodeType && ur,
      yC = Np && Np.exports === qp,
      xp = yC ? gC.Buffer : void 0,
      IC = xp ? xp.isBuffer : void 0,
      TC = IC || _C;
    ur.exports = TC;
  });
  var Hn = s((u5, Lp) => {
    var mC = 9007199254740991,
      OC = /^(?:0|[1-9]\d*)$/;
    function bC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? mC),
        !!t &&
          (r == "number" || (r != "symbol" && OC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Lp.exports = bC;
  });
  var kn = s((c5, Pp) => {
    var AC = 9007199254740991;
    function SC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= AC;
    }
    Pp.exports = SC;
  });
  var Mp = s((l5, Dp) => {
    var RC = At(),
      wC = kn(),
      CC = _t(),
      NC = "[object Arguments]",
      xC = "[object Array]",
      qC = "[object Boolean]",
      LC = "[object Date]",
      PC = "[object Error]",
      DC = "[object Function]",
      MC = "[object Map]",
      FC = "[object Number]",
      GC = "[object Object]",
      XC = "[object RegExp]",
      VC = "[object Set]",
      UC = "[object String]",
      WC = "[object WeakMap]",
      BC = "[object ArrayBuffer]",
      HC = "[object DataView]",
      kC = "[object Float32Array]",
      jC = "[object Float64Array]",
      KC = "[object Int8Array]",
      zC = "[object Int16Array]",
      YC = "[object Int32Array]",
      QC = "[object Uint8Array]",
      $C = "[object Uint8ClampedArray]",
      ZC = "[object Uint16Array]",
      JC = "[object Uint32Array]",
      he = {};
    he[kC] =
      he[jC] =
      he[KC] =
      he[zC] =
      he[YC] =
      he[QC] =
      he[$C] =
      he[ZC] =
      he[JC] =
        !0;
    he[NC] =
      he[xC] =
      he[BC] =
      he[qC] =
      he[HC] =
      he[LC] =
      he[PC] =
      he[DC] =
      he[MC] =
      he[FC] =
      he[GC] =
      he[XC] =
      he[VC] =
      he[UC] =
      he[WC] =
        !1;
    function eN(e) {
      return CC(e) && wC(e.length) && !!he[RC(e)];
    }
    Dp.exports = eN;
  });
  var Gp = s((f5, Fp) => {
    function tN(e) {
      return function (t) {
        return e(t);
      };
    }
    Fp.exports = tN;
  });
  var Vp = s((Br, cr) => {
    var rN = qo(),
      Xp = typeof Br == "object" && Br && !Br.nodeType && Br,
      Hr = Xp && typeof cr == "object" && cr && !cr.nodeType && cr,
      nN = Hr && Hr.exports === Xp,
      la = nN && rN.process,
      iN = (function () {
        try {
          var e = Hr && Hr.require && Hr.require("util").types;
          return e || (la && la.binding && la.binding("util"));
        } catch {}
      })();
    cr.exports = iN;
  });
  var jn = s((d5, Bp) => {
    var oN = Mp(),
      aN = Gp(),
      Up = Vp(),
      Wp = Up && Up.isTypedArray,
      sN = Wp ? aN(Wp) : oN;
    Bp.exports = sN;
  });
  var fa = s((p5, Hp) => {
    var uN = mp(),
      cN = Ur(),
      lN = Ce(),
      fN = Bn(),
      dN = Hn(),
      pN = jn(),
      vN = Object.prototype,
      hN = vN.hasOwnProperty;
    function EN(e, t) {
      var r = lN(e),
        n = !r && cN(e),
        o = !r && !n && fN(e),
        i = !r && !n && !o && pN(e),
        a = r || n || o || i,
        u = a ? uN(e.length, String) : [],
        c = u.length;
      for (var f in e)
        (t || hN.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (o && (f == "offset" || f == "parent")) ||
              (i &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              dN(f, c))
          ) &&
          u.push(f);
      return u;
    }
    Hp.exports = EN;
  });
  var Kn = s((v5, kp) => {
    var gN = Object.prototype;
    function _N(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || gN;
      return e === r;
    }
    kp.exports = _N;
  });
  var Kp = s((h5, jp) => {
    var yN = Lo(),
      IN = yN(Object.keys, Object);
    jp.exports = IN;
  });
  var zn = s((E5, zp) => {
    var TN = Kn(),
      mN = Kp(),
      ON = Object.prototype,
      bN = ON.hasOwnProperty;
    function AN(e) {
      if (!TN(e)) return mN(e);
      var t = [];
      for (var r in Object(e)) bN.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    zp.exports = AN;
  });
  var Gt = s((g5, Yp) => {
    var SN = ta(),
      RN = kn();
    function wN(e) {
      return e != null && RN(e.length) && !SN(e);
    }
    Yp.exports = wN;
  });
  var kr = s((_5, Qp) => {
    var CN = fa(),
      NN = zn(),
      xN = Gt();
    function qN(e) {
      return xN(e) ? CN(e) : NN(e);
    }
    Qp.exports = qN;
  });
  var Zp = s((y5, $p) => {
    var LN = sa(),
      PN = ca(),
      DN = kr();
    function MN(e) {
      return LN(e, DN, PN);
    }
    $p.exports = MN;
  });
  var tv = s((I5, ev) => {
    var Jp = Zp(),
      FN = 1,
      GN = Object.prototype,
      XN = GN.hasOwnProperty;
    function VN(e, t, r, n, o, i) {
      var a = r & FN,
        u = Jp(e),
        c = u.length,
        f = Jp(t),
        g = f.length;
      if (c != g && !a) return !1;
      for (var h = c; h--; ) {
        var E = u[h];
        if (!(a ? E in t : XN.call(t, E))) return !1;
      }
      var I = i.get(e),
        x = i.get(t);
      if (I && x) return I == t && x == e;
      var b = !0;
      i.set(e, t), i.set(t, e);
      for (var q = a; ++h < c; ) {
        E = u[h];
        var R = e[E],
          w = t[E];
        if (n) var T = a ? n(w, R, E, t, e, i) : n(R, w, E, e, t, i);
        if (!(T === void 0 ? R === w || o(R, w, r, n, i) : T)) {
          b = !1;
          break;
        }
        q || (q = E == "constructor");
      }
      if (b && !q) {
        var F = e.constructor,
          G = t.constructor;
        F != G &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof F == "function" &&
            F instanceof F &&
            typeof G == "function" &&
            G instanceof G
          ) &&
          (b = !1);
      }
      return i.delete(e), i.delete(t), b;
    }
    ev.exports = VN;
  });
  var nv = s((T5, rv) => {
    var UN = St(),
      WN = Je(),
      BN = UN(WN, "DataView");
    rv.exports = BN;
  });
  var ov = s((m5, iv) => {
    var HN = St(),
      kN = Je(),
      jN = HN(kN, "Promise");
    iv.exports = jN;
  });
  var sv = s((O5, av) => {
    var KN = St(),
      zN = Je(),
      YN = KN(zN, "Set");
    av.exports = YN;
  });
  var da = s((b5, uv) => {
    var QN = St(),
      $N = Je(),
      ZN = QN($N, "WeakMap");
    uv.exports = ZN;
  });
  var Yn = s((A5, hv) => {
    var pa = nv(),
      va = Xn(),
      ha = ov(),
      Ea = sv(),
      ga = da(),
      vv = At(),
      lr = na(),
      cv = "[object Map]",
      JN = "[object Object]",
      lv = "[object Promise]",
      fv = "[object Set]",
      dv = "[object WeakMap]",
      pv = "[object DataView]",
      ex = lr(pa),
      tx = lr(va),
      rx = lr(ha),
      nx = lr(Ea),
      ix = lr(ga),
      Xt = vv;
    ((pa && Xt(new pa(new ArrayBuffer(1))) != pv) ||
      (va && Xt(new va()) != cv) ||
      (ha && Xt(ha.resolve()) != lv) ||
      (Ea && Xt(new Ea()) != fv) ||
      (ga && Xt(new ga()) != dv)) &&
      (Xt = function (e) {
        var t = vv(e),
          r = t == JN ? e.constructor : void 0,
          n = r ? lr(r) : "";
        if (n)
          switch (n) {
            case ex:
              return pv;
            case tx:
              return cv;
            case rx:
              return lv;
            case nx:
              return fv;
            case ix:
              return dv;
          }
        return t;
      });
    hv.exports = Xt;
  });
  var Ov = s((S5, mv) => {
    var _a = ia(),
      ox = oa(),
      ax = dp(),
      sx = tv(),
      Ev = Yn(),
      gv = Ce(),
      _v = Bn(),
      ux = jn(),
      cx = 1,
      yv = "[object Arguments]",
      Iv = "[object Array]",
      Qn = "[object Object]",
      lx = Object.prototype,
      Tv = lx.hasOwnProperty;
    function fx(e, t, r, n, o, i) {
      var a = gv(e),
        u = gv(t),
        c = a ? Iv : Ev(e),
        f = u ? Iv : Ev(t);
      (c = c == yv ? Qn : c), (f = f == yv ? Qn : f);
      var g = c == Qn,
        h = f == Qn,
        E = c == f;
      if (E && _v(e)) {
        if (!_v(t)) return !1;
        (a = !0), (g = !1);
      }
      if (E && !g)
        return (
          i || (i = new _a()),
          a || ux(e) ? ox(e, t, r, n, o, i) : ax(e, t, c, r, n, o, i)
        );
      if (!(r & cx)) {
        var I = g && Tv.call(e, "__wrapped__"),
          x = h && Tv.call(t, "__wrapped__");
        if (I || x) {
          var b = I ? e.value() : e,
            q = x ? t.value() : t;
          return i || (i = new _a()), o(b, q, r, n, i);
        }
      }
      return E ? (i || (i = new _a()), sx(e, t, r, n, o, i)) : !1;
    }
    mv.exports = fx;
  });
  var ya = s((R5, Sv) => {
    var dx = Ov(),
      bv = _t();
    function Av(e, t, r, n, o) {
      return e === t
        ? !0
        : e == null || t == null || (!bv(e) && !bv(t))
        ? e !== e && t !== t
        : dx(e, t, r, n, Av, o);
    }
    Sv.exports = Av;
  });
  var wv = s((w5, Rv) => {
    var px = ia(),
      vx = ya(),
      hx = 1,
      Ex = 2;
    function gx(e, t, r, n) {
      var o = r.length,
        i = o,
        a = !n;
      if (e == null) return !i;
      for (e = Object(e); o--; ) {
        var u = r[o];
        if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++o < i; ) {
        u = r[o];
        var c = u[0],
          f = e[c],
          g = u[1];
        if (a && u[2]) {
          if (f === void 0 && !(c in e)) return !1;
        } else {
          var h = new px();
          if (n) var E = n(f, g, c, e, t, h);
          if (!(E === void 0 ? vx(g, f, hx | Ex, n, h) : E)) return !1;
        }
      }
      return !0;
    }
    Rv.exports = gx;
  });
  var Ia = s((C5, Cv) => {
    var _x = lt();
    function yx(e) {
      return e === e && !_x(e);
    }
    Cv.exports = yx;
  });
  var xv = s((N5, Nv) => {
    var Ix = Ia(),
      Tx = kr();
    function mx(e) {
      for (var t = Tx(e), r = t.length; r--; ) {
        var n = t[r],
          o = e[n];
        t[r] = [n, o, Ix(o)];
      }
      return t;
    }
    Nv.exports = mx;
  });
  var Ta = s((x5, qv) => {
    function Ox(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    qv.exports = Ox;
  });
  var Pv = s((q5, Lv) => {
    var bx = wv(),
      Ax = xv(),
      Sx = Ta();
    function Rx(e) {
      var t = Ax(e);
      return t.length == 1 && t[0][2]
        ? Sx(t[0][0], t[0][1])
        : function (r) {
            return r === e || bx(r, e, t);
          };
    }
    Lv.exports = Rx;
  });
  var jr = s((L5, Dv) => {
    var wx = At(),
      Cx = _t(),
      Nx = "[object Symbol]";
    function xx(e) {
      return typeof e == "symbol" || (Cx(e) && wx(e) == Nx);
    }
    Dv.exports = xx;
  });
  var $n = s((P5, Mv) => {
    var qx = Ce(),
      Lx = jr(),
      Px = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Dx = /^\w*$/;
    function Mx(e, t) {
      if (qx(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        Lx(e)
        ? !0
        : Dx.test(e) || !Px.test(e) || (t != null && e in Object(t));
    }
    Mv.exports = Mx;
  });
  var Xv = s((D5, Gv) => {
    var Fv = Vn(),
      Fx = "Expected a function";
    function ma(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(Fx);
      var r = function () {
        var n = arguments,
          o = t ? t.apply(this, n) : n[0],
          i = r.cache;
        if (i.has(o)) return i.get(o);
        var a = e.apply(this, n);
        return (r.cache = i.set(o, a) || i), a;
      };
      return (r.cache = new (ma.Cache || Fv)()), r;
    }
    ma.Cache = Fv;
    Gv.exports = ma;
  });
  var Uv = s((M5, Vv) => {
    var Gx = Xv(),
      Xx = 500;
    function Vx(e) {
      var t = Gx(e, function (n) {
          return r.size === Xx && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    Vv.exports = Vx;
  });
  var Bv = s((F5, Wv) => {
    var Ux = Uv(),
      Wx =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Bx = /\\(\\)?/g,
      Hx = Ux(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(Wx, function (r, n, o, i) {
            t.push(o ? i.replace(Bx, "$1") : n || r);
          }),
          t
        );
      });
    Wv.exports = Hx;
  });
  var Oa = s((G5, Hv) => {
    function kx(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
        o[r] = t(e[r], r, e);
      return o;
    }
    Hv.exports = kx;
  });
  var Qv = s((X5, Yv) => {
    var kv = Jt(),
      jx = Oa(),
      Kx = Ce(),
      zx = jr(),
      Yx = 1 / 0,
      jv = kv ? kv.prototype : void 0,
      Kv = jv ? jv.toString : void 0;
    function zv(e) {
      if (typeof e == "string") return e;
      if (Kx(e)) return jx(e, zv) + "";
      if (zx(e)) return Kv ? Kv.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -Yx ? "-0" : t;
    }
    Yv.exports = zv;
  });
  var Zv = s((V5, $v) => {
    var Qx = Qv();
    function $x(e) {
      return e == null ? "" : Qx(e);
    }
    $v.exports = $x;
  });
  var Kr = s((U5, Jv) => {
    var Zx = Ce(),
      Jx = $n(),
      eq = Bv(),
      tq = Zv();
    function rq(e, t) {
      return Zx(e) ? e : Jx(e, t) ? [e] : eq(tq(e));
    }
    Jv.exports = rq;
  });
  var fr = s((W5, eh) => {
    var nq = jr(),
      iq = 1 / 0;
    function oq(e) {
      if (typeof e == "string" || nq(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -iq ? "-0" : t;
    }
    eh.exports = oq;
  });
  var Zn = s((B5, th) => {
    var aq = Kr(),
      sq = fr();
    function uq(e, t) {
      t = aq(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[sq(t[r++])];
      return r && r == n ? e : void 0;
    }
    th.exports = uq;
  });
  var Jn = s((H5, rh) => {
    var cq = Zn();
    function lq(e, t, r) {
      var n = e == null ? void 0 : cq(e, t);
      return n === void 0 ? r : n;
    }
    rh.exports = lq;
  });
  var ih = s((k5, nh) => {
    function fq(e, t) {
      return e != null && t in Object(e);
    }
    nh.exports = fq;
  });
  var ah = s((j5, oh) => {
    var dq = Kr(),
      pq = Ur(),
      vq = Ce(),
      hq = Hn(),
      Eq = kn(),
      gq = fr();
    function _q(e, t, r) {
      t = dq(t, e);
      for (var n = -1, o = t.length, i = !1; ++n < o; ) {
        var a = gq(t[n]);
        if (!(i = e != null && r(e, a))) break;
        e = e[a];
      }
      return i || ++n != o
        ? i
        : ((o = e == null ? 0 : e.length),
          !!o && Eq(o) && hq(a, o) && (vq(e) || pq(e)));
    }
    oh.exports = _q;
  });
  var uh = s((K5, sh) => {
    var yq = ih(),
      Iq = ah();
    function Tq(e, t) {
      return e != null && Iq(e, t, yq);
    }
    sh.exports = Tq;
  });
  var lh = s((z5, ch) => {
    var mq = ya(),
      Oq = Jn(),
      bq = uh(),
      Aq = $n(),
      Sq = Ia(),
      Rq = Ta(),
      wq = fr(),
      Cq = 1,
      Nq = 2;
    function xq(e, t) {
      return Aq(e) && Sq(t)
        ? Rq(wq(e), t)
        : function (r) {
            var n = Oq(r, e);
            return n === void 0 && n === t ? bq(r, e) : mq(t, n, Cq | Nq);
          };
    }
    ch.exports = xq;
  });
  var ei = s((Y5, fh) => {
    function qq(e) {
      return e;
    }
    fh.exports = qq;
  });
  var ba = s((Q5, dh) => {
    function Lq(e) {
      return function (t) {
        return t?.[e];
      };
    }
    dh.exports = Lq;
  });
  var vh = s(($5, ph) => {
    var Pq = Zn();
    function Dq(e) {
      return function (t) {
        return Pq(t, e);
      };
    }
    ph.exports = Dq;
  });
  var Eh = s((Z5, hh) => {
    var Mq = ba(),
      Fq = vh(),
      Gq = $n(),
      Xq = fr();
    function Vq(e) {
      return Gq(e) ? Mq(Xq(e)) : Fq(e);
    }
    hh.exports = Vq;
  });
  var Rt = s((J5, gh) => {
    var Uq = Pv(),
      Wq = lh(),
      Bq = ei(),
      Hq = Ce(),
      kq = Eh();
    function jq(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? Bq
        : typeof e == "object"
        ? Hq(e)
          ? Wq(e[0], e[1])
          : Uq(e)
        : kq(e);
    }
    gh.exports = jq;
  });
  var Aa = s((ek, _h) => {
    var Kq = Rt(),
      zq = Gt(),
      Yq = kr();
    function Qq(e) {
      return function (t, r, n) {
        var o = Object(t);
        if (!zq(t)) {
          var i = Kq(r, 3);
          (t = Yq(t)),
            (r = function (u) {
              return i(o[u], u, o);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? o[i ? t[a] : a] : void 0;
      };
    }
    _h.exports = Qq;
  });
  var Sa = s((tk, yh) => {
    function $q(e, t, r, n) {
      for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    yh.exports = $q;
  });
  var Th = s((rk, Ih) => {
    var Zq = /\s/;
    function Jq(e) {
      for (var t = e.length; t-- && Zq.test(e.charAt(t)); );
      return t;
    }
    Ih.exports = Jq;
  });
  var Oh = s((nk, mh) => {
    var eL = Th(),
      tL = /^\s+/;
    function rL(e) {
      return e && e.slice(0, eL(e) + 1).replace(tL, "");
    }
    mh.exports = rL;
  });
  var ti = s((ik, Sh) => {
    var nL = Oh(),
      bh = lt(),
      iL = jr(),
      Ah = 0 / 0,
      oL = /^[-+]0x[0-9a-f]+$/i,
      aL = /^0b[01]+$/i,
      sL = /^0o[0-7]+$/i,
      uL = parseInt;
    function cL(e) {
      if (typeof e == "number") return e;
      if (iL(e)) return Ah;
      if (bh(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = bh(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = nL(e);
      var r = aL.test(e);
      return r || sL.test(e) ? uL(e.slice(2), r ? 2 : 8) : oL.test(e) ? Ah : +e;
    }
    Sh.exports = cL;
  });
  var Ch = s((ok, wh) => {
    var lL = ti(),
      Rh = 1 / 0,
      fL = 17976931348623157e292;
    function dL(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = lL(e)), e === Rh || e === -Rh)) {
        var t = e < 0 ? -1 : 1;
        return t * fL;
      }
      return e === e ? e : 0;
    }
    wh.exports = dL;
  });
  var Ra = s((ak, Nh) => {
    var pL = Ch();
    function vL(e) {
      var t = pL(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Nh.exports = vL;
  });
  var qh = s((sk, xh) => {
    var hL = Sa(),
      EL = Rt(),
      gL = Ra(),
      _L = Math.max;
    function yL(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = r == null ? 0 : gL(r);
      return o < 0 && (o = _L(n + o, 0)), hL(e, EL(t, 3), o);
    }
    xh.exports = yL;
  });
  var wa = s((uk, Lh) => {
    var IL = Aa(),
      TL = qh(),
      mL = IL(TL);
    Lh.exports = mL;
  });
  var ni = s((Fe) => {
    "use strict";
    var OL = st().default;
    Object.defineProperty(Fe, "__esModule", { value: !0 });
    Fe.withBrowser =
      Fe.TRANSFORM_STYLE_PREFIXED =
      Fe.TRANSFORM_PREFIXED =
      Fe.IS_BROWSER_ENV =
      Fe.FLEX_PREFIXED =
      Fe.ELEMENT_MATCHES =
        void 0;
    var bL = OL(wa()),
      Dh = typeof window < "u";
    Fe.IS_BROWSER_ENV = Dh;
    var ri = (e, t) => (Dh ? e() : t);
    Fe.withBrowser = ri;
    var AL = ri(() =>
      (0, bL.default)(
        [
          "matches",
          "matchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
          "webkitMatchesSelector",
        ],
        (e) => e in Element.prototype
      )
    );
    Fe.ELEMENT_MATCHES = AL;
    var SL = ri(() => {
      let e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
        r = "";
      try {
        let { length: n } = t;
        for (let o = 0; o < n; o++) {
          let i = t[o];
          if (((e.style.display = i), e.style.display === i)) return i;
        }
        return r;
      } catch {
        return r;
      }
    }, "flex");
    Fe.FLEX_PREFIXED = SL;
    var Mh = ri(() => {
      let e = document.createElement("i");
      if (e.style.transform == null) {
        let t = ["Webkit", "Moz", "ms"],
          r = "Transform",
          { length: n } = t;
        for (let o = 0; o < n; o++) {
          let i = t[o] + r;
          if (e.style[i] !== void 0) return i;
        }
      }
      return "transform";
    }, "transform");
    Fe.TRANSFORM_PREFIXED = Mh;
    var Ph = Mh.split("transform")[0],
      RL = Ph ? Ph + "TransformStyle" : "transformStyle";
    Fe.TRANSFORM_STYLE_PREFIXED = RL;
  });
  var Ca = s((lk, Uh) => {
    var wL = 4,
      CL = 0.001,
      NL = 1e-7,
      xL = 10,
      zr = 11,
      ii = 1 / (zr - 1),
      qL = typeof Float32Array == "function";
    function Fh(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Gh(e, t) {
      return 3 * t - 6 * e;
    }
    function Xh(e) {
      return 3 * e;
    }
    function oi(e, t, r) {
      return ((Fh(t, r) * e + Gh(t, r)) * e + Xh(t)) * e;
    }
    function Vh(e, t, r) {
      return 3 * Fh(t, r) * e * e + 2 * Gh(t, r) * e + Xh(t);
    }
    function LL(e, t, r, n, o) {
      var i,
        a,
        u = 0;
      do
        (a = t + (r - t) / 2), (i = oi(a, n, o) - e), i > 0 ? (r = a) : (t = a);
      while (Math.abs(i) > NL && ++u < xL);
      return a;
    }
    function PL(e, t, r, n) {
      for (var o = 0; o < wL; ++o) {
        var i = Vh(t, r, n);
        if (i === 0) return t;
        var a = oi(t, r, n) - e;
        t -= a / i;
      }
      return t;
    }
    Uh.exports = function (t, r, n, o) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = qL ? new Float32Array(zr) : new Array(zr);
      if (t !== r || n !== o)
        for (var a = 0; a < zr; ++a) i[a] = oi(a * ii, t, n);
      function u(c) {
        for (var f = 0, g = 1, h = zr - 1; g !== h && i[g] <= c; ++g) f += ii;
        --g;
        var E = (c - i[g]) / (i[g + 1] - i[g]),
          I = f + E * ii,
          x = Vh(I, t, n);
        return x >= CL ? PL(c, I, t, n) : x === 0 ? I : LL(c, f, f + ii, t, n);
      }
      return function (f) {
        return t === r && n === o
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : oi(u(f), r, o);
      };
    };
  });
  var Na = s((ee) => {
    "use strict";
    var DL = st().default;
    Object.defineProperty(ee, "__esModule", { value: !0 });
    ee.bounce = gP;
    ee.bouncePast = _P;
    ee.easeOut = ee.easeInOut = ee.easeIn = ee.ease = void 0;
    ee.inBack = uP;
    ee.inCirc = iP;
    ee.inCubic = BL;
    ee.inElastic = fP;
    ee.inExpo = tP;
    ee.inOutBack = lP;
    ee.inOutCirc = aP;
    ee.inOutCubic = kL;
    ee.inOutElastic = pP;
    ee.inOutExpo = nP;
    ee.inOutQuad = WL;
    ee.inOutQuart = zL;
    ee.inOutQuint = $L;
    ee.inOutSine = eP;
    ee.inQuad = VL;
    ee.inQuart = jL;
    ee.inQuint = YL;
    ee.inSine = ZL;
    ee.outBack = cP;
    ee.outBounce = sP;
    ee.outCirc = oP;
    ee.outCubic = HL;
    ee.outElastic = dP;
    ee.outExpo = rP;
    ee.outQuad = UL;
    ee.outQuart = KL;
    ee.outQuint = QL;
    ee.outSine = JL;
    ee.swingFrom = hP;
    ee.swingFromTo = vP;
    ee.swingTo = EP;
    var ai = DL(Ca()),
      It = 1.70158,
      ML = (0, ai.default)(0.25, 0.1, 0.25, 1);
    ee.ease = ML;
    var FL = (0, ai.default)(0.42, 0, 1, 1);
    ee.easeIn = FL;
    var GL = (0, ai.default)(0, 0, 0.58, 1);
    ee.easeOut = GL;
    var XL = (0, ai.default)(0.42, 0, 0.58, 1);
    ee.easeInOut = XL;
    function VL(e) {
      return Math.pow(e, 2);
    }
    function UL(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function WL(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function BL(e) {
      return Math.pow(e, 3);
    }
    function HL(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function kL(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function jL(e) {
      return Math.pow(e, 4);
    }
    function KL(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function zL(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function YL(e) {
      return Math.pow(e, 5);
    }
    function QL(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function $L(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function ZL(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function JL(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function eP(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function tP(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function rP(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function nP(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function iP(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function oP(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function aP(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function sP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function uP(e) {
      let t = It;
      return e * e * ((t + 1) * e - t);
    }
    function cP(e) {
      let t = It;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function lP(e) {
      let t = It;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function fP(e) {
      let t = It,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
    }
    function dP(e) {
      let t = It,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) +
            1);
    }
    function pP(e) {
      let t = It,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
              (n *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) *
                0.5 +
              1);
    }
    function vP(e) {
      let t = It;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function hP(e) {
      let t = It;
      return e * e * ((t + 1) * e - t);
    }
    function EP(e) {
      let t = It;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function gP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function _P(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var qa = s((Yr) => {
    "use strict";
    var yP = st().default,
      IP = Yt().default;
    Object.defineProperty(Yr, "__esModule", { value: !0 });
    Yr.applyEasing = OP;
    Yr.createBezierEasing = mP;
    Yr.optimizeFloat = xa;
    var Wh = IP(Na()),
      TP = yP(Ca());
    function xa(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
        o = Number(Math.round(e * n) / n);
      return Math.abs(o) > 1e-4 ? o : 0;
    }
    function mP(e) {
      return (0, TP.default)(...e);
    }
    function OP(e, t, r) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : xa(r ? (t > 0 ? r(t) : t) : t > 0 && e && Wh[e] ? Wh[e](t) : t);
    }
  });
  var jh = s((dr) => {
    "use strict";
    Object.defineProperty(dr, "__esModule", { value: !0 });
    dr.createElementState = kh;
    dr.ixElements = void 0;
    dr.mergeActionState = La;
    var si = nr(),
      Hh = Ue(),
      {
        HTML_ELEMENT: pk,
        PLAIN_OBJECT: bP,
        ABSTRACT_NODE: vk,
        CONFIG_X_VALUE: AP,
        CONFIG_Y_VALUE: SP,
        CONFIG_Z_VALUE: RP,
        CONFIG_VALUE: wP,
        CONFIG_X_UNIT: CP,
        CONFIG_Y_UNIT: NP,
        CONFIG_Z_UNIT: xP,
        CONFIG_UNIT: qP,
      } = Hh.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: LP,
        IX2_INSTANCE_ADDED: PP,
        IX2_ELEMENT_STATE_CHANGED: DP,
      } = Hh.IX2EngineActionTypes,
      Bh = {},
      MP = "refState",
      FP = (e = Bh, t = {}) => {
        switch (t.type) {
          case LP:
            return Bh;
          case PP: {
            let {
                elementId: r,
                element: n,
                origin: o,
                actionItem: i,
                refType: a,
              } = t.payload,
              { actionTypeId: u } = i,
              c = e;
            return (
              (0, si.getIn)(c, [r, n]) !== n && (c = kh(c, n, a, r, i)),
              La(c, r, u, o, i)
            );
          }
          case DP: {
            let {
              elementId: r,
              actionTypeId: n,
              current: o,
              actionItem: i,
            } = t.payload;
            return La(e, r, n, o, i);
          }
          default:
            return e;
        }
      };
    dr.ixElements = FP;
    function kh(e, t, r, n, o) {
      let i =
        r === bP ? (0, si.getIn)(o, ["config", "target", "objectId"]) : null;
      return (0, si.mergeIn)(e, [n], { id: n, ref: t, refId: i, refType: r });
    }
    function La(e, t, r, n, o) {
      let i = XP(o),
        a = [t, MP, r];
      return (0, si.mergeIn)(e, a, n, i);
    }
    var GP = [
      [AP, CP],
      [SP, NP],
      [RP, xP],
      [wP, qP],
    ];
    function XP(e) {
      let { config: t } = e;
      return GP.reduce((r, n) => {
        let o = n[0],
          i = n[1],
          a = t[o],
          u = t[i];
        return a != null && u != null && (r[i] = u), r;
      }, {});
    }
  });
  var Kh = s((Ne) => {
    "use strict";
    Object.defineProperty(Ne, "__esModule", { value: !0 });
    Ne.renderPlugin =
      Ne.getPluginOrigin =
      Ne.getPluginDuration =
      Ne.getPluginDestination =
      Ne.getPluginConfig =
      Ne.createPluginInstance =
      Ne.clearPlugin =
        void 0;
    var VP = (e) => e.value;
    Ne.getPluginConfig = VP;
    var UP = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Ne.getPluginDuration = UP;
    var WP = (e) => e || { value: 0 };
    Ne.getPluginOrigin = WP;
    var BP = (e) => ({ value: e.value });
    Ne.getPluginDestination = BP;
    var HP = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Ne.createPluginInstance = HP;
    var kP = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Ne.renderPlugin = kP;
    var jP = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Ne.clearPlugin = jP;
  });
  var Pa = s((Re) => {
    "use strict";
    Object.defineProperty(Re, "__esModule", { value: !0 });
    Re.getPluginOrigin =
      Re.getPluginDuration =
      Re.getPluginDestination =
      Re.getPluginConfig =
      Re.createPluginInstance =
      Re.clearPlugin =
        void 0;
    Re.isPluginType = YP;
    Re.renderPlugin = void 0;
    var Vt = Kh(),
      zh = Ue(),
      KP = ni(),
      zP = {
        [zh.ActionTypeConsts.PLUGIN_LOTTIE]: {
          getConfig: Vt.getPluginConfig,
          getOrigin: Vt.getPluginOrigin,
          getDuration: Vt.getPluginDuration,
          getDestination: Vt.getPluginDestination,
          createInstance: Vt.createPluginInstance,
          render: Vt.renderPlugin,
          clear: Vt.clearPlugin,
        },
      };
    function YP(e) {
      return e === zh.ActionTypeConsts.PLUGIN_LOTTIE;
    }
    var Ut = (e) => (t) => {
        if (!KP.IS_BROWSER_ENV) return () => null;
        let r = zP[t];
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      },
      QP = Ut("getConfig");
    Re.getPluginConfig = QP;
    var $P = Ut("getOrigin");
    Re.getPluginOrigin = $P;
    var ZP = Ut("getDuration");
    Re.getPluginDuration = ZP;
    var JP = Ut("getDestination");
    Re.getPluginDestination = JP;
    var eD = Ut("createInstance");
    Re.createPluginInstance = eD;
    var tD = Ut("render");
    Re.renderPlugin = tD;
    var rD = Ut("clear");
    Re.clearPlugin = rD;
  });
  var Qh = s((_k, Yh) => {
    function nD(e, t) {
      return e == null || e !== e ? t : e;
    }
    Yh.exports = nD;
  });
  var Zh = s((yk, $h) => {
    function iD(e, t, r, n) {
      var o = -1,
        i = e == null ? 0 : e.length;
      for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
      return r;
    }
    $h.exports = iD;
  });
  var eE = s((Ik, Jh) => {
    function oD(e) {
      return function (t, r, n) {
        for (var o = -1, i = Object(t), a = n(t), u = a.length; u--; ) {
          var c = a[e ? u : ++o];
          if (r(i[c], c, i) === !1) break;
        }
        return t;
      };
    }
    Jh.exports = oD;
  });
  var rE = s((Tk, tE) => {
    var aD = eE(),
      sD = aD();
    tE.exports = sD;
  });
  var Da = s((mk, nE) => {
    var uD = rE(),
      cD = kr();
    function lD(e, t) {
      return e && uD(e, t, cD);
    }
    nE.exports = lD;
  });
  var oE = s((Ok, iE) => {
    var fD = Gt();
    function dD(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!fD(r)) return e(r, n);
        for (
          var o = r.length, i = t ? o : -1, a = Object(r);
          (t ? i-- : ++i < o) && n(a[i], i, a) !== !1;

        );
        return r;
      };
    }
    iE.exports = dD;
  });
  var Ma = s((bk, aE) => {
    var pD = Da(),
      vD = oE(),
      hD = vD(pD);
    aE.exports = hD;
  });
  var uE = s((Ak, sE) => {
    function ED(e, t, r, n, o) {
      return (
        o(e, function (i, a, u) {
          r = n ? ((n = !1), i) : t(r, i, a, u);
        }),
        r
      );
    }
    sE.exports = ED;
  });
  var lE = s((Sk, cE) => {
    var gD = Zh(),
      _D = Ma(),
      yD = Rt(),
      ID = uE(),
      TD = Ce();
    function mD(e, t, r) {
      var n = TD(e) ? gD : ID,
        o = arguments.length < 3;
      return n(e, yD(t, 4), r, o, _D);
    }
    cE.exports = mD;
  });
  var dE = s((Rk, fE) => {
    var OD = Sa(),
      bD = Rt(),
      AD = Ra(),
      SD = Math.max,
      RD = Math.min;
    function wD(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = n - 1;
      return (
        r !== void 0 &&
          ((o = AD(r)), (o = r < 0 ? SD(n + o, 0) : RD(o, n - 1))),
        OD(e, bD(t, 3), o, !0)
      );
    }
    fE.exports = wD;
  });
  var vE = s((wk, pE) => {
    var CD = Aa(),
      ND = dE(),
      xD = CD(ND);
    pE.exports = xD;
  });
  var EE = s((ui) => {
    "use strict";
    Object.defineProperty(ui, "__esModule", { value: !0 });
    ui.default = void 0;
    var qD = Object.prototype.hasOwnProperty;
    function hE(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function LD(e, t) {
      if (hE(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let o = 0; o < r.length; o++)
        if (!qD.call(t, r[o]) || !hE(e[r[o]], t[r[o]])) return !1;
      return !0;
    }
    var PD = LD;
    ui.default = PD;
  });
  var FE = s((ve) => {
    "use strict";
    var fi = st().default;
    Object.defineProperty(ve, "__esModule", { value: !0 });
    ve.cleanupHTMLElement = xM;
    ve.clearAllStyles = NM;
    ve.getActionListProgress = LM;
    ve.getAffectedElements = Wa;
    ve.getComputedStyle = oM;
    ve.getDestinationValues = dM;
    ve.getElementId = tM;
    ve.getInstanceId = JD;
    ve.getInstanceOrigin = uM;
    ve.getItemConfigByKey = void 0;
    ve.getMaxDurationItemIndex = ME;
    ve.getNamespacedParameterId = MM;
    ve.getRenderType = LE;
    ve.getStyleProp = pM;
    ve.mediaQueriesEqual = GM;
    ve.observeStore = iM;
    ve.reduceListToGroup = PM;
    ve.reifyState = rM;
    ve.renderHTMLElement = vM;
    Object.defineProperty(ve, "shallowEqual", {
      enumerable: !0,
      get: function () {
        return SE.default;
      },
    });
    ve.shouldAllowMediaQuery = FM;
    ve.shouldNamespaceEventParameter = DM;
    ve.stringifyTarget = XM;
    var wt = fi(Qh()),
      Ga = fi(lE()),
      Fa = fi(vE()),
      gE = nr(),
      Wt = Ue(),
      SE = fi(EE()),
      DD = qa(),
      pt = Pa(),
      Ge = ni(),
      {
        BACKGROUND: MD,
        TRANSFORM: FD,
        TRANSLATE_3D: GD,
        SCALE_3D: XD,
        ROTATE_X: VD,
        ROTATE_Y: UD,
        ROTATE_Z: WD,
        SKEW: BD,
        PRESERVE_3D: HD,
        FLEX: kD,
        OPACITY: ci,
        FILTER: Qr,
        FONT_VARIATION_SETTINGS: $r,
        WIDTH: ft,
        HEIGHT: dt,
        BACKGROUND_COLOR: RE,
        BORDER_COLOR: jD,
        COLOR: KD,
        CHILDREN: _E,
        IMMEDIATE_CHILDREN: zD,
        SIBLINGS: yE,
        PARENT: YD,
        DISPLAY: li,
        WILL_CHANGE: pr,
        AUTO: Ct,
        COMMA_DELIMITER: Zr,
        COLON_DELIMITER: QD,
        BAR_DELIMITER: IE,
        RENDER_TRANSFORM: wE,
        RENDER_GENERAL: Xa,
        RENDER_STYLE: Va,
        RENDER_PLUGIN: CE,
      } = Wt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: vr,
        TRANSFORM_SCALE: hr,
        TRANSFORM_ROTATE: Er,
        TRANSFORM_SKEW: Jr,
        STYLE_OPACITY: NE,
        STYLE_FILTER: en,
        STYLE_FONT_VARIATION: tn,
        STYLE_SIZE: gr,
        STYLE_BACKGROUND_COLOR: _r,
        STYLE_BORDER: yr,
        STYLE_TEXT_COLOR: Ir,
        GENERAL_DISPLAY: di,
      } = Wt.ActionTypeConsts,
      $D = "OBJECT_VALUE",
      xE = (e) => e.trim(),
      Ua = Object.freeze({ [_r]: RE, [yr]: jD, [Ir]: KD }),
      qE = Object.freeze({
        [Ge.TRANSFORM_PREFIXED]: FD,
        [RE]: MD,
        [ci]: ci,
        [Qr]: Qr,
        [ft]: ft,
        [dt]: dt,
        [$r]: $r,
      }),
      TE = {},
      ZD = 1;
    function JD() {
      return "i" + ZD++;
    }
    var eM = 1;
    function tM(e, t) {
      for (let r in e) {
        let n = e[r];
        if (n && n.ref === t) return n.id;
      }
      return "e" + eM++;
    }
    function rM({ events: e, actionLists: t, site: r } = {}) {
      let n = (0, Ga.default)(
          e,
          (a, u) => {
            let { eventTypeId: c } = u;
            return a[c] || (a[c] = {}), (a[c][u.id] = u), a;
          },
          {}
        ),
        o = r && r.mediaQueries,
        i = [];
      return (
        o
          ? (i = o.map((a) => a.key))
          : ((o = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: n,
            mediaQueries: o,
            mediaQueryKeys: i,
          },
        }
      );
    }
    var nM = (e, t) => e === t;
    function iM({ store: e, select: t, onChange: r, comparator: n = nM }) {
      let { getState: o, subscribe: i } = e,
        a = i(c),
        u = t(o());
      function c() {
        let f = t(o());
        if (f == null) {
          a();
          return;
        }
        n(f, u) || ((u = f), r(u, e));
      }
      return a;
    }
    function mE(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: n,
          selector: o,
          selectorGuids: i,
          appliesTo: a,
          useEventTarget: u,
        } = e;
        return {
          id: r,
          objectId: n,
          selector: o,
          selectorGuids: i,
          appliesTo: a,
          useEventTarget: u,
        };
      }
      return {};
    }
    function Wa({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: o,
    }) {
      var i, a, u;
      if (!o) throw new Error("IX2 missing elementApi");
      let { targets: c } = e;
      if (Array.isArray(c) && c.length > 0)
        return c.reduce(
          (X, V) =>
            X.concat(
              Wa({
                config: { target: V },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: o,
              })
            ),
          []
        );
      let {
          getValidDocument: f,
          getQuerySelector: g,
          queryDocument: h,
          getChildElements: E,
          getSiblingElements: I,
          matchSelector: x,
          elementContains: b,
          isSiblingNode: q,
        } = o,
        { target: R } = e;
      if (!R) return [];
      let {
        id: w,
        objectId: T,
        selector: F,
        selectorGuids: G,
        appliesTo: L,
        useEventTarget: W,
      } = mE(R);
      if (T) return [TE[T] || (TE[T] = {})];
      if (L === Wt.EventAppliesTo.PAGE) {
        let X = f(w);
        return X ? [X] : [];
      }
      let K =
          ((i =
            t == null ||
            (a = t.action) === null ||
            a === void 0 ||
            (u = a.config) === null ||
            u === void 0
              ? void 0
              : u.affectedElements) !== null && i !== void 0
            ? i
            : {})[w || F] || {},
        te = !!(K.id || K.selector),
        $,
        M,
        _,
        D = t && g(mE(t.target));
      if (
        (te
          ? (($ = K.limitAffectedElements), (M = D), (_ = g(K)))
          : (M = _ = g({ id: w, selector: F, selectorGuids: G })),
        t && W)
      ) {
        let X = r && (_ || W === !0) ? [r] : h(D);
        if (_) {
          if (W === YD) return h(_).filter((V) => X.some((z) => b(V, z)));
          if (W === _E) return h(_).filter((V) => X.some((z) => b(z, V)));
          if (W === yE) return h(_).filter((V) => X.some((z) => q(z, V)));
        }
        return X;
      }
      return M == null || _ == null
        ? []
        : Ge.IS_BROWSER_ENV && n
        ? h(_).filter((X) => n.contains(X))
        : $ === _E
        ? h(M, _)
        : $ === zD
        ? E(h(M)).filter(x(_))
        : $ === yE
        ? I(h(M)).filter(x(_))
        : h(_);
    }
    function oM({ element: e, actionItem: t }) {
      if (!Ge.IS_BROWSER_ENV) return {};
      let { actionTypeId: r } = t;
      switch (r) {
        case gr:
        case _r:
        case yr:
        case Ir:
        case di:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var OE = /px/,
      aM = (e, t) =>
        t.reduce(
          (r, n) => (r[n.type] == null && (r[n.type] = hM[n.type]), r),
          e || {}
        ),
      sM = (e, t) =>
        t.reduce(
          (r, n) => (
            r[n.type] == null &&
              (r[n.type] = EM[n.type] || n.defaultValue || 0),
            r
          ),
          e || {}
        );
    function uM(e, t = {}, r = {}, n, o) {
      let { getStyle: i } = o,
        { actionTypeId: a } = n;
      if ((0, pt.isPluginType)(a)) return (0, pt.getPluginOrigin)(a)(t[a]);
      switch (n.actionTypeId) {
        case vr:
        case hr:
        case Er:
        case Jr:
          return t[n.actionTypeId] || Ba[n.actionTypeId];
        case en:
          return aM(t[n.actionTypeId], n.config.filters);
        case tn:
          return sM(t[n.actionTypeId], n.config.fontVariations);
        case NE:
          return { value: (0, wt.default)(parseFloat(i(e, ci)), 1) };
        case gr: {
          let u = i(e, ft),
            c = i(e, dt),
            f,
            g;
          return (
            n.config.widthUnit === Ct
              ? (f = OE.test(u) ? parseFloat(u) : parseFloat(r.width))
              : (f = (0, wt.default)(parseFloat(u), parseFloat(r.width))),
            n.config.heightUnit === Ct
              ? (g = OE.test(c) ? parseFloat(c) : parseFloat(r.height))
              : (g = (0, wt.default)(parseFloat(c), parseFloat(r.height))),
            { widthValue: f, heightValue: g }
          );
        }
        case _r:
        case yr:
        case Ir:
          return RM({
            element: e,
            actionTypeId: n.actionTypeId,
            computedStyle: r,
            getStyle: i,
          });
        case di:
          return { value: (0, wt.default)(i(e, li), r.display) };
        case $D:
          return t[n.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var cM = (e, t) => (t && (e[t.type] = t.value || 0), e),
      lM = (e, t) => (t && (e[t.type] = t.value || 0), e),
      fM = (e, t, r) => {
        if ((0, pt.isPluginType)(e)) return (0, pt.getPluginConfig)(e)(r, t);
        switch (e) {
          case en: {
            let n = (0, Fa.default)(r.filters, ({ type: o }) => o === t);
            return n ? n.value : 0;
          }
          case tn: {
            let n = (0, Fa.default)(r.fontVariations, ({ type: o }) => o === t);
            return n ? n.value : 0;
          }
          default:
            return r[t];
        }
      };
    ve.getItemConfigByKey = fM;
    function dM({ element: e, actionItem: t, elementApi: r }) {
      if ((0, pt.isPluginType)(t.actionTypeId))
        return (0, pt.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case vr:
        case hr:
        case Er:
        case Jr: {
          let { xValue: n, yValue: o, zValue: i } = t.config;
          return { xValue: n, yValue: o, zValue: i };
        }
        case gr: {
          let { getStyle: n, setStyle: o, getProperty: i } = r,
            { widthUnit: a, heightUnit: u } = t.config,
            { widthValue: c, heightValue: f } = t.config;
          if (!Ge.IS_BROWSER_ENV) return { widthValue: c, heightValue: f };
          if (a === Ct) {
            let g = n(e, ft);
            o(e, ft, ""), (c = i(e, "offsetWidth")), o(e, ft, g);
          }
          if (u === Ct) {
            let g = n(e, dt);
            o(e, dt, ""), (f = i(e, "offsetHeight")), o(e, dt, g);
          }
          return { widthValue: c, heightValue: f };
        }
        case _r:
        case yr:
        case Ir: {
          let { rValue: n, gValue: o, bValue: i, aValue: a } = t.config;
          return { rValue: n, gValue: o, bValue: i, aValue: a };
        }
        case en:
          return t.config.filters.reduce(cM, {});
        case tn:
          return t.config.fontVariations.reduce(lM, {});
        default: {
          let { value: n } = t.config;
          return { value: n };
        }
      }
    }
    function LE(e) {
      if (/^TRANSFORM_/.test(e)) return wE;
      if (/^STYLE_/.test(e)) return Va;
      if (/^GENERAL_/.test(e)) return Xa;
      if (/^PLUGIN_/.test(e)) return CE;
    }
    function pM(e, t) {
      return e === Va ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function vM(element, t, color, n, o, i, a, u, c) {
      switch (u) {
        case wE:
          return yM(element, t, color, o, a);
        case Va:
          return wM(element, t, color, o, i, a);
        case Xa:
          return CM(element, o, a);
        case CE: {
          let { actionTypeId: f } = o;
          if ((0, pt.isPluginType)(f)) return (0, pt.renderPlugin)(f)(c, t, o);
        }
      }
    }
    var Ba = {
        [vr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [hr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Er]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Jr]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      hM = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      EM = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      gM = (e, t) => {
        let r = (0, Fa.default)(t.filters, ({ type: n }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      _M = Object.keys(Ba);
    function yM(e, t, r, n, o) {
      let i = _M
          .map((u) => {
            let c = Ba[u],
              {
                xValue: f = c.xValue,
                yValue: g = c.yValue,
                zValue: h = c.zValue,
                xUnit: E = "",
                yUnit: I = "",
                zUnit: x = "",
              } = t[u] || {};
            switch (u) {
              case vr:
                return `${GD}(${f}${E}, ${g}${I}, ${h}${x})`;
              case hr:
                return `${XD}(${f}${E}, ${g}${I}, ${h}${x})`;
              case Er:
                return `${VD}(${f}${E}) ${UD}(${g}${I}) ${WD}(${h}${x})`;
              case Jr:
                return `${BD}(${f}${E}, ${g}${I})`;
              default:
                return "";
            }
          })
          .join(" "),
        { setStyle: a } = o;
      Bt(e, Ge.TRANSFORM_PREFIXED, o),
        a(e, Ge.TRANSFORM_PREFIXED, i),
        mM(n, r) && a(e, Ge.TRANSFORM_STYLE_PREFIXED, HD);
    }
    function IM(e, t, r, n) {
      let o = (0, Ga.default)(t, (a, u, c) => `${a} ${c}(${u}${gM(c, r)})`, ""),
        { setStyle: i } = n;
      Bt(e, Qr, n), i(e, Qr, o);
    }
    function TM(e, t, r, n) {
      let o = (0, Ga.default)(
          t,
          (a, u, c) => (a.push(`"${c}" ${u}`), a),
          []
        ).join(", "),
        { setStyle: i } = n;
      Bt(e, $r, n), i(e, $r, o);
    }
    function mM({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
      return (
        (e === vr && n !== void 0) ||
        (e === hr && n !== void 0) ||
        (e === Er && (t !== void 0 || r !== void 0))
      );
    }
    var OM = "\\(([^)]+)\\)",
      bM = /^rgb/,
      AM = RegExp(`rgba?${OM}`);
    function SM(e, t) {
      let r = e.exec(t);
      return r ? r[1] : "";
    }
    function RM({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n,
    }) {
      let o = Ua[t],
        i = n(e, o),
        a = bM.test(i) ? i : r[o],
        u = SM(AM, a).split(Zr);
      return {
        rValue: (0, wt.default)(parseInt(u[0], 10), 255),
        gValue: (0, wt.default)(parseInt(u[1], 10), 255),
        bValue: (0, wt.default)(parseInt(u[2], 10), 255),
        aValue: (0, wt.default)(parseFloat(u[3]), 1),
      };
    }
    function wM(e, t, r, n, o, i) {
      let { setStyle: a } = i;
      switch (n.actionTypeId) {
        case gr: {
          let { widthUnit: u = "", heightUnit: c = "" } = n.config,
            { widthValue: f, heightValue: g } = r;
          f !== void 0 &&
            (u === Ct && (u = "px"), Bt(e, ft, i), a(e, ft, f + u)),
            g !== void 0 &&
              (c === Ct && (c = "px"), Bt(e, dt, i), a(e, dt, g + c));
          break;
        }
        case en: {
          IM(e, r, n.config, i);
          break;
        }
        case tn: {
          TM(e, r, n.config, i);
          break;
        }
        case _r:
        case yr:
        case Ir: {
          let u = Ua[n.actionTypeId],
            c = Math.round(r.rValue),
            f = Math.round(r.gValue),
            g = Math.round(r.bValue),
            h = r.aValue;
          Bt(e, u, i),
            a(
              e,
              u,
              h >= 1 ? `rgb(${c},${f},${g})` : `rgba(${c},${f},${g},${h})`
            );
          break;
        }
        default: {
          let { unit: u = "" } = n.config;
          Bt(e, o, i), a(e, o, r.value + u);
          break;
        }
      }
    }
    function CM(e, t, r) {
      let { setStyle: n } = r;
      switch (t.actionTypeId) {
        case di: {
          let { value: o } = t.config;
          o === kD && Ge.IS_BROWSER_ENV
            ? n(e, li, Ge.FLEX_PREFIXED)
            : n(e, li, o);
          return;
        }
      }
    }
    function Bt(e, t, r) {
      if (!Ge.IS_BROWSER_ENV) return;
      let n = qE[t];
      if (!n) return;
      let { getStyle: o, setStyle: i } = r,
        a = o(e, pr);
      if (!a) {
        i(e, pr, n);
        return;
      }
      let u = a.split(Zr).map(xE);
      u.indexOf(n) === -1 && i(e, pr, u.concat(n).join(Zr));
    }
    function PE(e, t, r) {
      if (!Ge.IS_BROWSER_ENV) return;
      let n = qE[t];
      if (!n) return;
      let { getStyle: o, setStyle: i } = r,
        a = o(e, pr);
      !a ||
        a.indexOf(n) === -1 ||
        i(
          e,
          pr,
          a
            .split(Zr)
            .map(xE)
            .filter((u) => u !== n)
            .join(Zr)
        );
    }
    function NM({ store: e, elementApi: t }) {
      let { ixData: r } = e.getState(),
        { events: n = {}, actionLists: o = {} } = r;
      Object.keys(n).forEach((i) => {
        let a = n[i],
          { config: u } = a.action,
          { actionListId: c } = u,
          f = o[c];
        f && bE({ actionList: f, event: a, elementApi: t });
      }),
        Object.keys(o).forEach((i) => {
          bE({ actionList: o[i], elementApi: t });
        });
    }
    function bE({ actionList: e = {}, event: t, elementApi: r }) {
      let { actionItemGroups: n, continuousParameterGroups: o } = e;
      n &&
        n.forEach((i) => {
          AE({ actionGroup: i, event: t, elementApi: r });
        }),
        o &&
          o.forEach((i) => {
            let { continuousActionGroups: a } = i;
            a.forEach((u) => {
              AE({ actionGroup: u, event: t, elementApi: r });
            });
          });
    }
    function AE({ actionGroup: e, event: t, elementApi: r }) {
      let { actionItems: n } = e;
      n.forEach(({ actionTypeId: o, config: i }) => {
        let a;
        (0, pt.isPluginType)(o)
          ? (a = (0, pt.clearPlugin)(o))
          : (a = DE({ effect: qM, actionTypeId: o, elementApi: r })),
          Wa({ config: i, event: t, elementApi: r }).forEach(a);
      });
    }
    function xM(e, t, r) {
      let { setStyle: n, getStyle: o } = r,
        { actionTypeId: i } = t;
      if (i === gr) {
        let { config: a } = t;
        a.widthUnit === Ct && n(e, ft, ""), a.heightUnit === Ct && n(e, dt, "");
      }
      o(e, pr) && DE({ effect: PE, actionTypeId: i, elementApi: r })(e);
    }
    var DE =
      ({ effect: e, actionTypeId: t, elementApi: r }) =>
      (n) => {
        switch (t) {
          case vr:
          case hr:
          case Er:
          case Jr:
            e(n, Ge.TRANSFORM_PREFIXED, r);
            break;
          case en:
            e(n, Qr, r);
            break;
          case tn:
            e(n, $r, r);
            break;
          case NE:
            e(n, ci, r);
            break;
          case gr:
            e(n, ft, r), e(n, dt, r);
            break;
          case _r:
          case yr:
          case Ir:
            e(n, Ua[t], r);
            break;
          case di:
            e(n, li, r);
            break;
        }
      };
    function qM(e, t, r) {
      let { setStyle: n } = r;
      PE(e, t, r),
        n(e, t, ""),
        t === Ge.TRANSFORM_PREFIXED && n(e, Ge.TRANSFORM_STYLE_PREFIXED, "");
    }
    function ME(e) {
      let t = 0,
        r = 0;
      return (
        e.forEach((n, o) => {
          let { config: i } = n,
            a = i.delay + i.duration;
          a >= t && ((t = a), (r = o));
        }),
        r
      );
    }
    function LM(e, t) {
      let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
        { actionItem: o, verboseTimeElapsed: i = 0 } = t,
        a = 0,
        u = 0;
      return (
        r.forEach((c, f) => {
          if (n && f === 0) return;
          let { actionItems: g } = c,
            h = g[ME(g)],
            { config: E, actionTypeId: I } = h;
          o.id === h.id && (u = a + i);
          let x = LE(I) === Xa ? 0 : E.duration;
          a += E.delay + x;
        }),
        a > 0 ? (0, DD.optimizeFloat)(u / a) : 0
      );
    }
    function PM({ actionList: e, actionItemId: t, rawData: r }) {
      let { actionItemGroups: n, continuousParameterGroups: o } = e,
        i = [],
        a = (u) => (
          i.push((0, gE.mergeIn)(u, ["config"], { delay: 0, duration: 0 })),
          u.id === t
        );
      return (
        n && n.some(({ actionItems: u }) => u.some(a)),
        o &&
          o.some((u) => {
            let { continuousActionGroups: c } = u;
            return c.some(({ actionItems: f }) => f.some(a));
          }),
        (0, gE.setIn)(r, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
        })
      );
    }
    function DM(e, { basedOn: t }) {
      return (
        (e === Wt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === Wt.EventBasedOn.ELEMENT || t == null)) ||
        (e === Wt.EventTypeConsts.MOUSE_MOVE && t === Wt.EventBasedOn.ELEMENT)
      );
    }
    function MM(e, t) {
      return e + QD + t;
    }
    function FM(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function GM(e, t) {
      return (0, SE.default)(e && e.sort(), t && t.sort());
    }
    function XM(e) {
      if (typeof e == "string") return e;
      let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
      return t + IE + r + IE + n;
    }
  });
  var Ht = s((Xe) => {
    "use strict";
    var Tr = Yt().default;
    Object.defineProperty(Xe, "__esModule", { value: !0 });
    Xe.IX2VanillaUtils =
      Xe.IX2VanillaPlugins =
      Xe.IX2ElementsReducer =
      Xe.IX2Easings =
      Xe.IX2EasingUtils =
      Xe.IX2BrowserSupport =
        void 0;
    var VM = Tr(ni());
    Xe.IX2BrowserSupport = VM;
    var UM = Tr(Na());
    Xe.IX2Easings = UM;
    var WM = Tr(qa());
    Xe.IX2EasingUtils = WM;
    var BM = Tr(jh());
    Xe.IX2ElementsReducer = BM;
    var HM = Tr(Pa());
    Xe.IX2VanillaPlugins = HM;
    var kM = Tr(FE());
    Xe.IX2VanillaUtils = kM;
  });
  var UE = s((vi) => {
    "use strict";
    Object.defineProperty(vi, "__esModule", { value: !0 });
    vi.ixInstances = void 0;
    var GE = Ue(),
      XE = Ht(),
      mr = nr(),
      {
        IX2_RAW_DATA_IMPORTED: jM,
        IX2_SESSION_STOPPED: KM,
        IX2_INSTANCE_ADDED: zM,
        IX2_INSTANCE_STARTED: YM,
        IX2_INSTANCE_REMOVED: QM,
        IX2_ANIMATION_FRAME_CHANGED: $M,
      } = GE.IX2EngineActionTypes,
      {
        optimizeFloat: pi,
        applyEasing: VE,
        createBezierEasing: ZM,
      } = XE.IX2EasingUtils,
      { RENDER_GENERAL: JM } = GE.IX2EngineConstants,
      {
        getItemConfigByKey: Ha,
        getRenderType: e1,
        getStyleProp: t1,
      } = XE.IX2VanillaUtils,
      r1 = (e, t) => {
        let {
            position: r,
            parameterId: n,
            actionGroups: o,
            destinationKeys: i,
            smoothing: a,
            restingValue: u,
            actionTypeId: c,
            customEasingFn: f,
            skipMotion: g,
            skipToValue: h,
          } = e,
          { parameters: E } = t.payload,
          I = Math.max(1 - a, 0.01),
          x = E[n];
        x == null && ((I = 1), (x = u));
        let b = Math.max(x, 0) || 0,
          q = pi(b - r),
          R = g ? h : pi(r + q * I),
          w = R * 100;
        if (R === r && e.current) return e;
        let T, F, G, L;
        for (let k = 0, { length: K } = o; k < K; k++) {
          let { keyframe: te, actionItems: $ } = o[k];
          if ((k === 0 && (T = $[0]), w >= te)) {
            T = $[0];
            let M = o[k + 1],
              _ = M && w !== te;
            (F = _ ? M.actionItems[0] : null),
              _ && ((G = te / 100), (L = (M.keyframe - te) / 100));
          }
        }
        let W = {};
        if (T && !F)
          for (let k = 0, { length: K } = i; k < K; k++) {
            let te = i[k];
            W[te] = Ha(c, te, T.config);
          }
        else if (T && F && G !== void 0 && L !== void 0) {
          let k = (R - G) / L,
            K = T.config.easing,
            te = VE(K, k, f);
          for (let $ = 0, { length: M } = i; $ < M; $++) {
            let _ = i[$],
              D = Ha(c, _, T.config),
              z = (Ha(c, _, F.config) - D) * te + D;
            W[_] = z;
          }
        }
        return (0, mr.merge)(e, { position: R, current: W });
      },
      n1 = (e, t) => {
        let {
            active: r,
            origin: n,
            start: o,
            immediate: i,
            renderType: a,
            verbose: u,
            actionItem: c,
            destination: f,
            destinationKeys: g,
            pluginDuration: h,
            instanceDelay: E,
            customEasingFn: I,
            skipMotion: x,
          } = e,
          b = c.config.easing,
          { duration: q, delay: R } = c.config;
        h != null && (q = h),
          (R = E ?? R),
          a === JM ? (q = 0) : (i || x) && (q = R = 0);
        let { now: w } = t.payload;
        if (r && n) {
          let T = w - (o + R);
          if (u) {
            let k = w - o,
              K = q + R,
              te = pi(Math.min(Math.max(0, k / K), 1));
            e = (0, mr.set)(e, "verboseTimeElapsed", K * te);
          }
          if (T < 0) return e;
          let F = pi(Math.min(Math.max(0, T / q), 1)),
            G = VE(b, F, I),
            L = {},
            W = null;
          return (
            g.length &&
              (W = g.reduce((k, K) => {
                let te = f[K],
                  $ = parseFloat(n[K]) || 0,
                  _ = (parseFloat(te) - $) * G + $;
                return (k[K] = _), k;
              }, {})),
            (L.current = W),
            (L.position = F),
            F === 1 && ((L.active = !1), (L.complete = !0)),
            (0, mr.merge)(e, L)
          );
        }
        return e;
      },
      i1 = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case jM:
            return t.payload.ixInstances || Object.freeze({});
          case KM:
            return Object.freeze({});
          case zM: {
            let {
                instanceId: r,
                elementId: n,
                actionItem: o,
                eventId: i,
                eventTarget: a,
                eventStateKey: u,
                actionListId: c,
                groupIndex: f,
                isCarrier: g,
                origin: h,
                destination: E,
                immediate: I,
                verbose: x,
                continuous: b,
                parameterId: q,
                actionGroups: R,
                smoothing: w,
                restingValue: T,
                pluginInstance: F,
                pluginDuration: G,
                instanceDelay: L,
                skipMotion: W,
                skipToValue: k,
              } = t.payload,
              { actionTypeId: K } = o,
              te = e1(K),
              $ = t1(te, K),
              M = Object.keys(E).filter((D) => E[D] != null),
              { easing: _ } = o.config;
            return (0, mr.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: h,
              destination: E,
              destinationKeys: M,
              immediate: I,
              verbose: x,
              current: null,
              actionItem: o,
              actionTypeId: K,
              eventId: i,
              eventTarget: a,
              eventStateKey: u,
              actionListId: c,
              groupIndex: f,
              renderType: te,
              isCarrier: g,
              styleProp: $,
              continuous: b,
              parameterId: q,
              actionGroups: R,
              smoothing: w,
              restingValue: T,
              pluginInstance: F,
              pluginDuration: G,
              instanceDelay: L,
              skipMotion: W,
              skipToValue: k,
              customEasingFn:
                Array.isArray(_) && _.length === 4 ? ZM(_) : void 0,
            });
          }
          case YM: {
            let { instanceId: r, time: n } = t.payload;
            return (0, mr.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n,
            });
          }
          case QM: {
            let { instanceId: r } = t.payload;
            if (!e[r]) return e;
            let n = {},
              o = Object.keys(e),
              { length: i } = o;
            for (let a = 0; a < i; a++) {
              let u = o[a];
              u !== r && (n[u] = e[u]);
            }
            return n;
          }
          case $M: {
            let r = e,
              n = Object.keys(e),
              { length: o } = n;
            for (let i = 0; i < o; i++) {
              let a = n[i],
                u = e[a],
                c = u.continuous ? r1 : n1;
              r = (0, mr.set)(r, a, c(u, t));
            }
            return r;
          }
          default:
            return e;
        }
      };
    vi.ixInstances = i1;
  });
  var WE = s((hi) => {
    "use strict";
    Object.defineProperty(hi, "__esModule", { value: !0 });
    hi.ixParameters = void 0;
    var o1 = Ue(),
      {
        IX2_RAW_DATA_IMPORTED: a1,
        IX2_SESSION_STOPPED: s1,
        IX2_PARAMETER_CHANGED: u1,
      } = o1.IX2EngineActionTypes,
      c1 = (e = {}, t) => {
        switch (t.type) {
          case a1:
            return t.payload.ixParameters || {};
          case s1:
            return {};
          case u1: {
            let { key: r, value: n } = t.payload;
            return (e[r] = n), e;
          }
          default:
            return e;
        }
      };
    hi.ixParameters = c1;
  });
  var BE = s((Ei) => {
    "use strict";
    Object.defineProperty(Ei, "__esModule", { value: !0 });
    Ei.default = void 0;
    var l1 = Ko(),
      f1 = lf(),
      d1 = Cf(),
      p1 = xf(),
      v1 = Ht(),
      h1 = UE(),
      E1 = WE(),
      { ixElements: g1 } = v1.IX2ElementsReducer,
      _1 = (0, l1.combineReducers)({
        ixData: f1.ixData,
        ixRequest: d1.ixRequest,
        ixSession: p1.ixSession,
        ixElements: g1,
        ixInstances: h1.ixInstances,
        ixParameters: E1.ixParameters,
      });
    Ei.default = _1;
  });
  var HE = s((Dk, rn) => {
    function y1(e, t) {
      if (e == null) return {};
      var r = {},
        n = Object.keys(e),
        o,
        i;
      for (i = 0; i < n.length; i++)
        (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
      return r;
    }
    (rn.exports = y1),
      (rn.exports.__esModule = !0),
      (rn.exports.default = rn.exports);
  });
  var jE = s((Mk, kE) => {
    var I1 = At(),
      T1 = Ce(),
      m1 = _t(),
      O1 = "[object String]";
    function b1(e) {
      return typeof e == "string" || (!T1(e) && m1(e) && I1(e) == O1);
    }
    kE.exports = b1;
  });
  var zE = s((Fk, KE) => {
    var A1 = ba(),
      S1 = A1("length");
    KE.exports = S1;
  });
  var QE = s((Gk, YE) => {
    var R1 = "\\ud800-\\udfff",
      w1 = "\\u0300-\\u036f",
      C1 = "\\ufe20-\\ufe2f",
      N1 = "\\u20d0-\\u20ff",
      x1 = w1 + C1 + N1,
      q1 = "\\ufe0e\\ufe0f",
      L1 = "\\u200d",
      P1 = RegExp("[" + L1 + R1 + x1 + q1 + "]");
    function D1(e) {
      return P1.test(e);
    }
    YE.exports = D1;
  });
  var og = s((Xk, ig) => {
    var ZE = "\\ud800-\\udfff",
      M1 = "\\u0300-\\u036f",
      F1 = "\\ufe20-\\ufe2f",
      G1 = "\\u20d0-\\u20ff",
      X1 = M1 + F1 + G1,
      V1 = "\\ufe0e\\ufe0f",
      U1 = "[" + ZE + "]",
      ka = "[" + X1 + "]",
      ja = "\\ud83c[\\udffb-\\udfff]",
      W1 = "(?:" + ka + "|" + ja + ")",
      JE = "[^" + ZE + "]",
      eg = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      tg = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      B1 = "\\u200d",
      rg = W1 + "?",
      ng = "[" + V1 + "]?",
      H1 = "(?:" + B1 + "(?:" + [JE, eg, tg].join("|") + ")" + ng + rg + ")*",
      k1 = ng + rg + H1,
      j1 = "(?:" + [JE + ka + "?", ka, eg, tg, U1].join("|") + ")",
      $E = RegExp(ja + "(?=" + ja + ")|" + j1 + k1, "g");
    function K1(e) {
      for (var t = ($E.lastIndex = 0); $E.test(e); ) ++t;
      return t;
    }
    ig.exports = K1;
  });
  var sg = s((Vk, ag) => {
    var z1 = zE(),
      Y1 = QE(),
      Q1 = og();
    function $1(e) {
      return Y1(e) ? Q1(e) : z1(e);
    }
    ag.exports = $1;
  });
  var cg = s((Uk, ug) => {
    var Z1 = zn(),
      J1 = Yn(),
      e2 = Gt(),
      t2 = jE(),
      r2 = sg(),
      n2 = "[object Map]",
      i2 = "[object Set]";
    function o2(e) {
      if (e == null) return 0;
      if (e2(e)) return t2(e) ? r2(e) : e.length;
      var t = J1(e);
      return t == n2 || t == i2 ? e.size : Z1(e).length;
    }
    ug.exports = o2;
  });
  var fg = s((Wk, lg) => {
    var a2 = "Expected a function";
    function s2(e) {
      if (typeof e != "function") throw new TypeError(a2);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    lg.exports = s2;
  });
  var Ka = s((Bk, dg) => {
    var u2 = St(),
      c2 = (function () {
        try {
          var e = u2(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    dg.exports = c2;
  });
  var za = s((Hk, vg) => {
    var pg = Ka();
    function l2(e, t, r) {
      t == "__proto__" && pg
        ? pg(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    vg.exports = l2;
  });
  var Eg = s((kk, hg) => {
    var f2 = za(),
      d2 = Gn(),
      p2 = Object.prototype,
      v2 = p2.hasOwnProperty;
    function h2(e, t, r) {
      var n = e[t];
      (!(v2.call(e, t) && d2(n, r)) || (r === void 0 && !(t in e))) &&
        f2(e, t, r);
    }
    hg.exports = h2;
  });
  var yg = s((jk, _g) => {
    var E2 = Eg(),
      g2 = Kr(),
      _2 = Hn(),
      gg = lt(),
      y2 = fr();
    function I2(e, t, r, n) {
      if (!gg(e)) return e;
      t = g2(t, e);
      for (var o = -1, i = t.length, a = i - 1, u = e; u != null && ++o < i; ) {
        var c = y2(t[o]),
          f = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (o != a) {
          var g = u[c];
          (f = n ? n(g, c, u) : void 0),
            f === void 0 && (f = gg(g) ? g : _2(t[o + 1]) ? [] : {});
        }
        E2(u, c, f), (u = u[c]);
      }
      return e;
    }
    _g.exports = I2;
  });
  var Tg = s((Kk, Ig) => {
    var T2 = Zn(),
      m2 = yg(),
      O2 = Kr();
    function b2(e, t, r) {
      for (var n = -1, o = t.length, i = {}; ++n < o; ) {
        var a = t[n],
          u = T2(e, a);
        r(u, a) && m2(i, O2(a, e), u);
      }
      return i;
    }
    Ig.exports = b2;
  });
  var Og = s((zk, mg) => {
    var A2 = Wn(),
      S2 = Po(),
      R2 = ca(),
      w2 = ua(),
      C2 = Object.getOwnPropertySymbols,
      N2 = C2
        ? function (e) {
            for (var t = []; e; ) A2(t, R2(e)), (e = S2(e));
            return t;
          }
        : w2;
    mg.exports = N2;
  });
  var Ag = s((Yk, bg) => {
    function x2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    bg.exports = x2;
  });
  var Rg = s((Qk, Sg) => {
    var q2 = lt(),
      L2 = Kn(),
      P2 = Ag(),
      D2 = Object.prototype,
      M2 = D2.hasOwnProperty;
    function F2(e) {
      if (!q2(e)) return P2(e);
      var t = L2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !M2.call(e, n))) || r.push(n);
      return r;
    }
    Sg.exports = F2;
  });
  var Cg = s(($k, wg) => {
    var G2 = fa(),
      X2 = Rg(),
      V2 = Gt();
    function U2(e) {
      return V2(e) ? G2(e, !0) : X2(e);
    }
    wg.exports = U2;
  });
  var xg = s((Zk, Ng) => {
    var W2 = sa(),
      B2 = Og(),
      H2 = Cg();
    function k2(e) {
      return W2(e, H2, B2);
    }
    Ng.exports = k2;
  });
  var Lg = s((Jk, qg) => {
    var j2 = Oa(),
      K2 = Rt(),
      z2 = Tg(),
      Y2 = xg();
    function Q2(e, t) {
      if (e == null) return {};
      var r = j2(Y2(e), function (n) {
        return [n];
      });
      return (
        (t = K2(t)),
        z2(e, r, function (n, o) {
          return t(n, o[0]);
        })
      );
    }
    qg.exports = Q2;
  });
  var Dg = s((ej, Pg) => {
    var $2 = Rt(),
      Z2 = fg(),
      J2 = Lg();
    function eF(e, t) {
      return J2(e, Z2($2(t)));
    }
    Pg.exports = eF;
  });
  var Fg = s((tj, Mg) => {
    var tF = zn(),
      rF = Yn(),
      nF = Ur(),
      iF = Ce(),
      oF = Gt(),
      aF = Bn(),
      sF = Kn(),
      uF = jn(),
      cF = "[object Map]",
      lF = "[object Set]",
      fF = Object.prototype,
      dF = fF.hasOwnProperty;
    function pF(e) {
      if (e == null) return !0;
      if (
        oF(e) &&
        (iF(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          aF(e) ||
          uF(e) ||
          nF(e))
      )
        return !e.length;
      var t = rF(e);
      if (t == cF || t == lF) return !e.size;
      if (sF(e)) return !tF(e).length;
      for (var r in e) if (dF.call(e, r)) return !1;
      return !0;
    }
    Mg.exports = pF;
  });
  var Xg = s((rj, Gg) => {
    var vF = za(),
      hF = Da(),
      EF = Rt();
    function gF(e, t) {
      var r = {};
      return (
        (t = EF(t, 3)),
        hF(e, function (n, o, i) {
          vF(r, o, t(n, o, i));
        }),
        r
      );
    }
    Gg.exports = gF;
  });
  var Ug = s((nj, Vg) => {
    function _F(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    Vg.exports = _F;
  });
  var Bg = s((ij, Wg) => {
    var yF = ei();
    function IF(e) {
      return typeof e == "function" ? e : yF;
    }
    Wg.exports = IF;
  });
  var kg = s((oj, Hg) => {
    var TF = Ug(),
      mF = Ma(),
      OF = Bg(),
      bF = Ce();
    function AF(e, t) {
      var r = bF(e) ? TF : mF;
      return r(e, OF(t));
    }
    Hg.exports = AF;
  });
  var Kg = s((aj, jg) => {
    var SF = Je(),
      RF = function () {
        return SF.Date.now();
      };
    jg.exports = RF;
  });
  var Qg = s((sj, Yg) => {
    var wF = lt(),
      Ya = Kg(),
      zg = ti(),
      CF = "Expected a function",
      NF = Math.max,
      xF = Math.min;
    function qF(e, t, r) {
      var n,
        o,
        i,
        a,
        u,
        c,
        f = 0,
        g = !1,
        h = !1,
        E = !0;
      if (typeof e != "function") throw new TypeError(CF);
      (t = zg(t) || 0),
        wF(r) &&
          ((g = !!r.leading),
          (h = "maxWait" in r),
          (i = h ? NF(zg(r.maxWait) || 0, t) : i),
          (E = "trailing" in r ? !!r.trailing : E));
      function I(L) {
        var W = n,
          k = o;
        return (n = o = void 0), (f = L), (a = e.apply(k, W)), a;
      }
      function x(L) {
        return (f = L), (u = setTimeout(R, t)), g ? I(L) : a;
      }
      function b(L) {
        var W = L - c,
          k = L - f,
          K = t - W;
        return h ? xF(K, i - k) : K;
      }
      function q(L) {
        var W = L - c,
          k = L - f;
        return c === void 0 || W >= t || W < 0 || (h && k >= i);
      }
      function R() {
        var L = Ya();
        if (q(L)) return w(L);
        u = setTimeout(R, b(L));
      }
      function w(L) {
        return (u = void 0), E && n ? I(L) : ((n = o = void 0), a);
      }
      function T() {
        u !== void 0 && clearTimeout(u), (f = 0), (n = c = o = u = void 0);
      }
      function F() {
        return u === void 0 ? a : w(Ya());
      }
      function G() {
        var L = Ya(),
          W = q(L);
        if (((n = arguments), (o = this), (c = L), W)) {
          if (u === void 0) return x(c);
          if (h) return clearTimeout(u), (u = setTimeout(R, t)), I(c);
        }
        return u === void 0 && (u = setTimeout(R, t)), a;
      }
      return (G.cancel = T), (G.flush = F), G;
    }
    Yg.exports = qF;
  });
  var Zg = s((uj, $g) => {
    var LF = Qg(),
      PF = lt(),
      DF = "Expected a function";
    function MF(e, t, r) {
      var n = !0,
        o = !0;
      if (typeof e != "function") throw new TypeError(DF);
      return (
        PF(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (o = "trailing" in r ? !!r.trailing : o)),
        LF(e, t, { leading: n, maxWait: t, trailing: o })
      );
    }
    $g.exports = MF;
  });
  var gi = s((ne) => {
    "use strict";
    var FF = st().default;
    Object.defineProperty(ne, "__esModule", { value: !0 });
    ne.viewportWidthChanged =
      ne.testFrameRendered =
      ne.stopRequested =
      ne.sessionStopped =
      ne.sessionStarted =
      ne.sessionInitialized =
      ne.rawDataImported =
      ne.previewRequested =
      ne.playbackRequested =
      ne.parameterChanged =
      ne.mediaQueriesDefined =
      ne.instanceStarted =
      ne.instanceRemoved =
      ne.instanceAdded =
      ne.eventStateChanged =
      ne.eventListenerAdded =
      ne.elementStateChanged =
      ne.clearRequested =
      ne.animationFrameChanged =
      ne.actionListPlaybackChanged =
        void 0;
    var Jg = FF(Mr()),
      e_ = Ue(),
      GF = Ht(),
      {
        IX2_RAW_DATA_IMPORTED: XF,
        IX2_SESSION_INITIALIZED: VF,
        IX2_SESSION_STARTED: UF,
        IX2_SESSION_STOPPED: WF,
        IX2_PREVIEW_REQUESTED: BF,
        IX2_PLAYBACK_REQUESTED: HF,
        IX2_STOP_REQUESTED: kF,
        IX2_CLEAR_REQUESTED: jF,
        IX2_EVENT_LISTENER_ADDED: KF,
        IX2_TEST_FRAME_RENDERED: zF,
        IX2_EVENT_STATE_CHANGED: YF,
        IX2_ANIMATION_FRAME_CHANGED: QF,
        IX2_PARAMETER_CHANGED: $F,
        IX2_INSTANCE_ADDED: ZF,
        IX2_INSTANCE_STARTED: JF,
        IX2_INSTANCE_REMOVED: eG,
        IX2_ELEMENT_STATE_CHANGED: tG,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: rG,
        IX2_VIEWPORT_WIDTH_CHANGED: nG,
        IX2_MEDIA_QUERIES_DEFINED: iG,
      } = e_.IX2EngineActionTypes,
      { reifyState: oG } = GF.IX2VanillaUtils,
      aG = (e) => ({ type: XF, payload: (0, Jg.default)({}, oG(e)) });
    ne.rawDataImported = aG;
    var sG = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
      type: VF,
      payload: { hasBoundaryNodes: e, reducedMotion: t },
    });
    ne.sessionInitialized = sG;
    var uG = () => ({ type: UF });
    ne.sessionStarted = uG;
    var cG = () => ({ type: WF });
    ne.sessionStopped = cG;
    var lG = ({ rawData: e, defer: t }) => ({
      type: BF,
      payload: { defer: t, rawData: e },
    });
    ne.previewRequested = lG;
    var fG = ({
      actionTypeId: e = e_.ActionTypeConsts.GENERAL_START_ACTION,
      actionListId: t,
      actionItemId: r,
      eventId: n,
      allowEvents: o,
      immediate: i,
      testManual: a,
      verbose: u,
      rawData: c,
    }) => ({
      type: HF,
      payload: {
        actionTypeId: e,
        actionListId: t,
        actionItemId: r,
        testManual: a,
        eventId: n,
        allowEvents: o,
        immediate: i,
        verbose: u,
        rawData: c,
      },
    });
    ne.playbackRequested = fG;
    var dG = (e) => ({ type: kF, payload: { actionListId: e } });
    ne.stopRequested = dG;
    var pG = () => ({ type: jF });
    ne.clearRequested = pG;
    var vG = (e, t) => ({
      type: KF,
      payload: { target: e, listenerParams: t },
    });
    ne.eventListenerAdded = vG;
    var hG = (e = 1) => ({ type: zF, payload: { step: e } });
    ne.testFrameRendered = hG;
    var EG = (e, t) => ({ type: YF, payload: { stateKey: e, newState: t } });
    ne.eventStateChanged = EG;
    var gG = (e, t) => ({ type: QF, payload: { now: e, parameters: t } });
    ne.animationFrameChanged = gG;
    var _G = (e, t) => ({ type: $F, payload: { key: e, value: t } });
    ne.parameterChanged = _G;
    var yG = (e) => ({ type: ZF, payload: (0, Jg.default)({}, e) });
    ne.instanceAdded = yG;
    var IG = (e, t) => ({ type: JF, payload: { instanceId: e, time: t } });
    ne.instanceStarted = IG;
    var TG = (e) => ({ type: eG, payload: { instanceId: e } });
    ne.instanceRemoved = TG;
    var mG = (e, t, r, n) => ({
      type: tG,
      payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
    });
    ne.elementStateChanged = mG;
    var OG = ({ actionListId: e, isPlaying: t }) => ({
      type: rG,
      payload: { actionListId: e, isPlaying: t },
    });
    ne.actionListPlaybackChanged = OG;
    var bG = ({ width: e, mediaQueries: t }) => ({
      type: nG,
      payload: { width: e, mediaQueries: t },
    });
    ne.viewportWidthChanged = bG;
    var AG = () => ({ type: iG });
    ne.mediaQueriesDefined = AG;
  });
  var n_ = s((xe) => {
    "use strict";
    Object.defineProperty(xe, "__esModule", { value: !0 });
    xe.elementContains = FG;
    xe.getChildElements = XG;
    xe.getClosestElement = void 0;
    xe.getProperty = qG;
    xe.getQuerySelector = PG;
    xe.getRefType = WG;
    xe.getSiblingElements = VG;
    xe.getStyle = xG;
    xe.getValidDocument = DG;
    xe.isSiblingNode = GG;
    xe.matchSelector = LG;
    xe.queryDocument = MG;
    xe.setStyle = NG;
    var SG = Ht(),
      RG = Ue(),
      { ELEMENT_MATCHES: Qa } = SG.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: t_,
        HTML_ELEMENT: wG,
        PLAIN_OBJECT: CG,
        WF_PAGE: r_,
      } = RG.IX2EngineConstants;
    function NG(e, t, r) {
      e.style[t] = r;
    }
    function xG(e, t) {
      return e.style[t];
    }
    function qG(e, t) {
      return e[t];
    }
    function LG(e) {
      return (t) => t[Qa](e);
    }
    function PG({ id: e, selector: t }) {
      if (e) {
        let r = e;
        if (e.indexOf(t_) !== -1) {
          let n = e.split(t_),
            o = n[0];
          if (((r = n[1]), o !== document.documentElement.getAttribute(r_)))
            return null;
        }
        return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
      }
      return t;
    }
    function DG(e) {
      return e == null || e === document.documentElement.getAttribute(r_)
        ? document
        : null;
    }
    function MG(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function FG(e, t) {
      return e.contains(t);
    }
    function GG(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function XG(e) {
      let t = [];
      for (let r = 0, { length: n } = e || []; r < n; r++) {
        let { children: o } = e[r],
          { length: i } = o;
        if (i) for (let a = 0; a < i; a++) t.push(o[a]);
      }
      return t;
    }
    function VG(e = []) {
      let t = [],
        r = [];
      for (let n = 0, { length: o } = e; n < o; n++) {
        let { parentNode: i } = e[n];
        if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
          continue;
        r.push(i);
        let a = i.firstElementChild;
        for (; a != null; )
          e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
      }
      return t;
    }
    var UG = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[Qa] && r[Qa](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    xe.getClosestElement = UG;
    function WG(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? wG
          : CG
        : null;
    }
  });
  var $a = s((fj, o_) => {
    var BG = lt(),
      i_ = Object.create,
      HG = (function () {
        function e() {}
        return function (t) {
          if (!BG(t)) return {};
          if (i_) return i_(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    o_.exports = HG;
  });
  var _i = s((dj, a_) => {
    function kG() {}
    a_.exports = kG;
  });
  var Ii = s((pj, s_) => {
    var jG = $a(),
      KG = _i();
    function yi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    yi.prototype = jG(KG.prototype);
    yi.prototype.constructor = yi;
    s_.exports = yi;
  });
  var f_ = s((vj, l_) => {
    var u_ = Jt(),
      zG = Ur(),
      YG = Ce(),
      c_ = u_ ? u_.isConcatSpreadable : void 0;
    function QG(e) {
      return YG(e) || zG(e) || !!(c_ && e && e[c_]);
    }
    l_.exports = QG;
  });
  var v_ = s((hj, p_) => {
    var $G = Wn(),
      ZG = f_();
    function d_(e, t, r, n, o) {
      var i = -1,
        a = e.length;
      for (r || (r = ZG), o || (o = []); ++i < a; ) {
        var u = e[i];
        t > 0 && r(u)
          ? t > 1
            ? d_(u, t - 1, r, n, o)
            : $G(o, u)
          : n || (o[o.length] = u);
      }
      return o;
    }
    p_.exports = d_;
  });
  var E_ = s((Ej, h_) => {
    var JG = v_();
    function eX(e) {
      var t = e == null ? 0 : e.length;
      return t ? JG(e, 1) : [];
    }
    h_.exports = eX;
  });
  var __ = s((gj, g_) => {
    function tX(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    g_.exports = tX;
  });
  var T_ = s((_j, I_) => {
    var rX = __(),
      y_ = Math.max;
    function nX(e, t, r) {
      return (
        (t = y_(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, o = -1, i = y_(n.length - t, 0), a = Array(i);
            ++o < i;

          )
            a[o] = n[t + o];
          o = -1;
          for (var u = Array(t + 1); ++o < t; ) u[o] = n[o];
          return (u[t] = r(a)), rX(e, this, u);
        }
      );
    }
    I_.exports = nX;
  });
  var O_ = s((yj, m_) => {
    function iX(e) {
      return function () {
        return e;
      };
    }
    m_.exports = iX;
  });
  var S_ = s((Ij, A_) => {
    var oX = O_(),
      b_ = Ka(),
      aX = ei(),
      sX = b_
        ? function (e, t) {
            return b_(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: oX(t),
              writable: !0,
            });
          }
        : aX;
    A_.exports = sX;
  });
  var w_ = s((Tj, R_) => {
    var uX = 800,
      cX = 16,
      lX = Date.now;
    function fX(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = lX(),
          o = cX - (n - r);
        if (((r = n), o > 0)) {
          if (++t >= uX) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    R_.exports = fX;
  });
  var N_ = s((mj, C_) => {
    var dX = S_(),
      pX = w_(),
      vX = pX(dX);
    C_.exports = vX;
  });
  var q_ = s((Oj, x_) => {
    var hX = E_(),
      EX = T_(),
      gX = N_();
    function _X(e) {
      return gX(EX(e, void 0, hX), e + "");
    }
    x_.exports = _X;
  });
  var D_ = s((bj, P_) => {
    var L_ = da(),
      yX = L_ && new L_();
    P_.exports = yX;
  });
  var F_ = s((Aj, M_) => {
    function IX() {}
    M_.exports = IX;
  });
  var Za = s((Sj, X_) => {
    var G_ = D_(),
      TX = F_(),
      mX = G_
        ? function (e) {
            return G_.get(e);
          }
        : TX;
    X_.exports = mX;
  });
  var U_ = s((Rj, V_) => {
    var OX = {};
    V_.exports = OX;
  });
  var Ja = s((wj, B_) => {
    var W_ = U_(),
      bX = Object.prototype,
      AX = bX.hasOwnProperty;
    function SX(e) {
      for (
        var t = e.name + "", r = W_[t], n = AX.call(W_, t) ? r.length : 0;
        n--;

      ) {
        var o = r[n],
          i = o.func;
        if (i == null || i == e) return o.name;
      }
      return t;
    }
    B_.exports = SX;
  });
  var mi = s((Cj, H_) => {
    var RX = $a(),
      wX = _i(),
      CX = 4294967295;
    function Ti(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = CX),
        (this.__views__ = []);
    }
    Ti.prototype = RX(wX.prototype);
    Ti.prototype.constructor = Ti;
    H_.exports = Ti;
  });
  var j_ = s((Nj, k_) => {
    function NX(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    k_.exports = NX;
  });
  var z_ = s((xj, K_) => {
    var xX = mi(),
      qX = Ii(),
      LX = j_();
    function PX(e) {
      if (e instanceof xX) return e.clone();
      var t = new qX(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = LX(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    K_.exports = PX;
  });
  var $_ = s((qj, Q_) => {
    var DX = mi(),
      Y_ = Ii(),
      MX = _i(),
      FX = Ce(),
      GX = _t(),
      XX = z_(),
      VX = Object.prototype,
      UX = VX.hasOwnProperty;
    function Oi(e) {
      if (GX(e) && !FX(e) && !(e instanceof DX)) {
        if (e instanceof Y_) return e;
        if (UX.call(e, "__wrapped__")) return XX(e);
      }
      return new Y_(e);
    }
    Oi.prototype = MX.prototype;
    Oi.prototype.constructor = Oi;
    Q_.exports = Oi;
  });
  var J_ = s((Lj, Z_) => {
    var WX = mi(),
      BX = Za(),
      HX = Ja(),
      kX = $_();
    function jX(e) {
      var t = HX(e),
        r = kX[t];
      if (typeof r != "function" || !(t in WX.prototype)) return !1;
      if (e === r) return !0;
      var n = BX(r);
      return !!n && e === n[0];
    }
    Z_.exports = jX;
  });
  var ny = s((Pj, ry) => {
    var ey = Ii(),
      KX = q_(),
      zX = Za(),
      es = Ja(),
      YX = Ce(),
      ty = J_(),
      QX = "Expected a function",
      $X = 8,
      ZX = 32,
      JX = 128,
      eV = 256;
    function tV(e) {
      return KX(function (t) {
        var r = t.length,
          n = r,
          o = ey.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var i = t[n];
          if (typeof i != "function") throw new TypeError(QX);
          if (o && !a && es(i) == "wrapper") var a = new ey([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          i = t[n];
          var u = es(i),
            c = u == "wrapper" ? zX(i) : void 0;
          c &&
          ty(c[0]) &&
          c[1] == (JX | $X | ZX | eV) &&
          !c[4].length &&
          c[9] == 1
            ? (a = a[es(c[0])].apply(a, c[3]))
            : (a = i.length == 1 && ty(i) ? a[u]() : a.thru(i));
        }
        return function () {
          var f = arguments,
            g = f[0];
          if (a && f.length == 1 && YX(g)) return a.plant(g).value();
          for (var h = 0, E = r ? t[h].apply(this, f) : g; ++h < r; )
            E = t[h].call(this, E);
          return E;
        };
      });
    }
    ry.exports = tV;
  });
  var oy = s((Dj, iy) => {
    var rV = ny(),
      nV = rV();
    iy.exports = nV;
  });
  var sy = s((Mj, ay) => {
    function iV(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    ay.exports = iV;
  });
  var cy = s((Fj, uy) => {
    var oV = sy(),
      ts = ti();
    function aV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ts(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ts(t)), (t = t === t ? t : 0)),
        oV(ts(e), t, r)
      );
    }
    uy.exports = aV;
  });
  var Ry = s((wi) => {
    "use strict";
    var Ri = st().default;
    Object.defineProperty(wi, "__esModule", { value: !0 });
    wi.default = void 0;
    var ke = Ri(Mr()),
      sV = Ri(oy()),
      uV = Ri(Jn()),
      cV = Ri(cy()),
      kt = Ue(),
      rs = as(),
      bi = gi(),
      lV = Ht(),
      {
        MOUSE_CLICK: fV,
        MOUSE_SECOND_CLICK: dV,
        MOUSE_DOWN: pV,
        MOUSE_UP: vV,
        MOUSE_OVER: hV,
        MOUSE_OUT: EV,
        DROPDOWN_CLOSE: gV,
        DROPDOWN_OPEN: _V,
        SLIDER_ACTIVE: yV,
        SLIDER_INACTIVE: IV,
        TAB_ACTIVE: TV,
        TAB_INACTIVE: mV,
        NAVBAR_CLOSE: OV,
        NAVBAR_OPEN: bV,
        MOUSE_MOVE: AV,
        PAGE_SCROLL_DOWN: _y,
        SCROLL_INTO_VIEW: yy,
        SCROLL_OUT_OF_VIEW: SV,
        PAGE_SCROLL_UP: RV,
        SCROLLING_IN_VIEW: wV,
        PAGE_FINISH: Iy,
        ECOMMERCE_CART_CLOSE: CV,
        ECOMMERCE_CART_OPEN: NV,
        PAGE_START: Ty,
        PAGE_SCROLL: xV,
      } = kt.EventTypeConsts,
      ns = "COMPONENT_ACTIVE",
      my = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: ly } = kt.IX2EngineConstants,
      { getNamespacedParameterId: fy } = lV.IX2VanillaUtils,
      Oy = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      on = Oy(({ element: e, nativeEvent: t }) => e === t.target),
      qV = Oy(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      vt = (0, sV.default)([on, qV]),
      by = (e, t) => {
        if (t) {
          let { ixData: r } = e.getState(),
            { events: n } = r,
            o = n[t];
          if (o && !PV[o.eventTypeId]) return o;
        }
        return null;
      },
      LV = ({ store: e, event: t }) => {
        let { action: r } = t,
          { autoStopEventId: n } = r.config;
        return !!by(e, n);
      },
      Be = ({ store: e, event: t, element: r, eventStateKey: n }, o) => {
        let { action: i, id: a } = t,
          { actionListId: u, autoStopEventId: c } = i.config,
          f = by(e, c);
        return (
          f &&
            (0, rs.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: r,
              eventStateKey: c + ly + n.split(ly)[1],
              actionListId: (0, uV.default)(f, "action.config.actionListId"),
            }),
          (0, rs.stopActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: u,
          }),
          (0, rs.startActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: u,
          }),
          o
        );
      },
      et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      an = { handler: et(vt, Be) },
      Ay = (0, ke.default)({}, an, { types: [ns, my].join(" ") }),
      is = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      dy = "mouseover mouseout",
      os = { types: is },
      PV = { PAGE_START: Ty, PAGE_FINISH: Iy },
      nn = (() => {
        let e = window.pageXOffset !== void 0,
          r =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, cV.default)(
            e ? window.pageYOffset : r.scrollTop,
            0,
            r.scrollHeight - window.innerHeight
          ),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      DV = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      MV = ({ element: e, nativeEvent: t }) => {
        let { type: r, target: n, relatedTarget: o } = t,
          i = e.contains(n);
        if (r === "mouseover" && i) return !0;
        let a = e.contains(o);
        return !!(r === "mouseout" && i && a);
      },
      FV = (e) => {
        let {
            element: t,
            event: { config: r },
          } = e,
          { clientWidth: n, clientHeight: o } = nn(),
          i = r.scrollOffsetValue,
          c = r.scrollOffsetUnit === "PX" ? i : (o * (i || 0)) / 100;
        return DV(t.getBoundingClientRect(), {
          left: 0,
          top: c,
          right: n,
          bottom: o - c,
        });
      },
      Sy = (e) => (t, r) => {
        let { type: n } = t.nativeEvent,
          o = [ns, my].indexOf(n) !== -1 ? n === ns : r.isActive,
          i = (0, ke.default)({}, r, { isActive: o });
        return ((!r || i.isActive !== r.isActive) && e(t, i)) || i;
      },
      py = (e) => (t, r) => {
        let n = { elementHovered: MV(t) };
        return (
          ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
            e(t, n)) ||
          n
        );
      },
      GV = (e) => (t, r) => {
        let n = (0, ke.default)({}, r, { elementVisible: FV(t) });
        return (
          ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
            e(t, n)) ||
          n
        );
      },
      vy =
        (e) =>
        (t, r = {}) => {
          let { stiffScrollTop: n, scrollHeight: o, innerHeight: i } = nn(),
            {
              event: { config: a, eventTypeId: u },
            } = t,
            { scrollOffsetValue: c, scrollOffsetUnit: f } = a,
            g = f === "PX",
            h = o - i,
            E = Number((n / h).toFixed(2));
          if (r && r.percentTop === E) return r;
          let I = (g ? c : (i * (c || 0)) / 100) / h,
            x,
            b,
            q = 0;
          r &&
            ((x = E > r.percentTop),
            (b = r.scrollingDown !== x),
            (q = b ? E : r.anchorTop));
          let R = u === _y ? E >= q + I : E <= q - I,
            w = (0, ke.default)({}, r, {
              percentTop: E,
              inBounds: R,
              anchorTop: q,
              scrollingDown: x,
            });
          return (r && R && (b || w.inBounds !== r.inBounds) && e(t, w)) || w;
        },
      XV = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      VV = (e) => (t, r) => {
        let n = { finished: document.readyState === "complete" };
        return n.finished && !(r && r.finshed) && e(t), n;
      },
      UV = (e) => (t, r) => {
        let n = { started: !0 };
        return r || e(t), n;
      },
      hy =
        (e) =>
        (t, r = { clickCount: 0 }) => {
          let n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && e(t, n)) || n;
        },
      Ai = (e = !0) =>
        (0, ke.default)({}, Ay, {
          handler: et(
            e ? vt : on,
            Sy((t, r) => (r.isActive ? an.handler(t, r) : r))
          ),
        }),
      Si = (e = !0) =>
        (0, ke.default)({}, Ay, {
          handler: et(
            e ? vt : on,
            Sy((t, r) => (r.isActive ? r : an.handler(t, r)))
          ),
        }),
      Ey = (0, ke.default)({}, os, {
        handler: GV((e, t) => {
          let { elementVisible: r } = t,
            { event: n, store: o } = e,
            { ixData: i } = o.getState(),
            { events: a } = i;
          return !a[n.action.config.autoStopEventId] && t.triggered
            ? t
            : (n.eventTypeId === yy) === r
            ? (Be(e), (0, ke.default)({}, t, { triggered: !0 }))
            : t;
        }),
      }),
      gy = 0.05,
      WV = {
        [yV]: Ai(),
        [IV]: Si(),
        [_V]: Ai(),
        [gV]: Si(),
        [bV]: Ai(!1),
        [OV]: Si(!1),
        [TV]: Ai(),
        [mV]: Si(),
        [NV]: { types: "ecommerce-cart-open", handler: et(vt, Be) },
        [CV]: { types: "ecommerce-cart-close", handler: et(vt, Be) },
        [fV]: {
          types: "click",
          handler: et(
            vt,
            hy((e, { clickCount: t }) => {
              LV(e) ? t === 1 && Be(e) : Be(e);
            })
          ),
        },
        [dV]: {
          types: "click",
          handler: et(
            vt,
            hy((e, { clickCount: t }) => {
              t === 2 && Be(e);
            })
          ),
        },
        [pV]: (0, ke.default)({}, an, { types: "mousedown" }),
        [vV]: (0, ke.default)({}, an, { types: "mouseup" }),
        [hV]: {
          types: dy,
          handler: et(
            vt,
            py((e, t) => {
              t.elementHovered && Be(e);
            })
          ),
        },
        [EV]: {
          types: dy,
          handler: et(
            vt,
            py((e, t) => {
              t.elementHovered || Be(e);
            })
          ),
        },
        [AV]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: r,
              nativeEvent: n,
              eventStateKey: o,
            },
            i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: a,
                selectedAxis: u,
                continuousParameterGroupId: c,
                reverse: f,
                restingState: g = 0,
              } = r,
              {
                clientX: h = i.clientX,
                clientY: E = i.clientY,
                pageX: I = i.pageX,
                pageY: x = i.pageY,
              } = n,
              b = u === "X_AXIS",
              q = n.type === "mouseout",
              R = g / 100,
              w = c,
              T = !1;
            switch (a) {
              case kt.EventBasedOn.VIEWPORT: {
                R = b
                  ? Math.min(h, window.innerWidth) / window.innerWidth
                  : Math.min(E, window.innerHeight) / window.innerHeight;
                break;
              }
              case kt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: F,
                  scrollTop: G,
                  scrollWidth: L,
                  scrollHeight: W,
                } = nn();
                R = b ? Math.min(F + I, L) / L : Math.min(G + x, W) / W;
                break;
              }
              case kt.EventBasedOn.ELEMENT:
              default: {
                w = fy(o, c);
                let F = n.type.indexOf("mouse") === 0;
                if (F && vt({ element: t, nativeEvent: n }) !== !0) break;
                let G = t.getBoundingClientRect(),
                  { left: L, top: W, width: k, height: K } = G;
                if (!F && !XV({ left: h, top: E }, G)) break;
                (T = !0), (R = b ? (h - L) / k : (E - W) / K);
                break;
              }
            }
            return (
              q && (R > 1 - gy || R < gy) && (R = Math.round(R)),
              (a !== kt.EventBasedOn.ELEMENT || T || T !== i.elementHovered) &&
                ((R = f ? 1 - R : R),
                e.dispatch((0, bi.parameterChanged)(w, R))),
              { elementHovered: T, clientX: h, clientY: E, pageX: I, pageY: x }
            );
          },
        },
        [xV]: {
          types: is,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: r, reverse: n } = t,
              { scrollTop: o, scrollHeight: i, clientHeight: a } = nn(),
              u = o / (i - a);
            (u = n ? 1 - u : u), e.dispatch((0, bi.parameterChanged)(r, u));
          },
        },
        [wV]: {
          types: is,
          handler: (
            { element: e, store: t, eventConfig: r, eventStateKey: n },
            o = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: i,
                scrollTop: a,
                scrollWidth: u,
                scrollHeight: c,
                clientHeight: f,
              } = nn(),
              {
                basedOn: g,
                selectedAxis: h,
                continuousParameterGroupId: E,
                startsEntering: I,
                startsExiting: x,
                addEndOffset: b,
                addStartOffset: q,
                addOffsetValue: R = 0,
                endOffsetValue: w = 0,
              } = r,
              T = h === "X_AXIS";
            if (g === kt.EventBasedOn.VIEWPORT) {
              let F = T ? i / u : a / c;
              return (
                F !== o.scrollPercent &&
                  t.dispatch((0, bi.parameterChanged)(E, F)),
                { scrollPercent: F }
              );
            } else {
              let F = fy(n, E),
                G = e.getBoundingClientRect(),
                L = (q ? R : 0) / 100,
                W = (b ? w : 0) / 100;
              (L = I ? L : 1 - L), (W = x ? W : 1 - W);
              let k = G.top + Math.min(G.height * L, f),
                te = G.top + G.height * W - k,
                $ = Math.min(f + te, c),
                _ = Math.min(Math.max(0, f - k), $) / $;
              return (
                _ !== o.scrollPercent &&
                  t.dispatch((0, bi.parameterChanged)(F, _)),
                { scrollPercent: _ }
              );
            }
          },
        },
        [yy]: Ey,
        [SV]: Ey,
        [_y]: (0, ke.default)({}, os, {
          handler: vy((e, t) => {
            t.scrollingDown && Be(e);
          }),
        }),
        [RV]: (0, ke.default)({}, os, {
          handler: vy((e, t) => {
            t.scrollingDown || Be(e);
          }),
        }),
        [Iy]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: et(on, VV(Be)),
        },
        [Ty]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: et(on, UV(Be)),
        },
      };
    wi.default = WV;
  });
  var as = s((xt) => {
    "use strict";
    var rt = st().default,
      BV = Yt().default;
    Object.defineProperty(xt, "__esModule", { value: !0 });
    xt.observeRequests = _U;
    xt.startActionGroup = ps;
    xt.startEngine = qi;
    xt.stopActionGroup = ds;
    xt.stopAllActionGroups = My;
    xt.stopEngine = Li;
    var HV = rt(Mr()),
      kV = rt(HE()),
      jV = rt(wa()),
      Nt = rt(Jn()),
      KV = rt(cg()),
      zV = rt(Dg()),
      YV = rt(Fg()),
      QV = rt(Xg()),
      sn = rt(kg()),
      $V = rt(Zg()),
      tt = Ue(),
      Ny = Ht(),
      Ie = gi(),
      Ae = BV(n_()),
      ZV = rt(Ry()),
      JV = ["store", "computedStyle"],
      eU = Object.keys(tt.QuickEffectIds),
      ss = (e) => eU.includes(e),
      {
        COLON_DELIMITER: us,
        BOUNDARY_SELECTOR: Ci,
        HTML_ELEMENT: xy,
        RENDER_GENERAL: tU,
        W_MOD_IX: wy,
      } = tt.IX2EngineConstants,
      {
        getAffectedElements: Ni,
        getElementId: rU,
        getDestinationValues: cs,
        observeStore: jt,
        getInstanceId: nU,
        renderHTMLElement: iU,
        clearAllStyles: qy,
        getMaxDurationItemIndex: oU,
        getComputedStyle: aU,
        getInstanceOrigin: sU,
        reduceListToGroup: uU,
        shouldNamespaceEventParameter: cU,
        getNamespacedParameterId: lU,
        shouldAllowMediaQuery: xi,
        cleanupHTMLElement: fU,
        stringifyTarget: dU,
        mediaQueriesEqual: pU,
        shallowEqual: vU,
      } = Ny.IX2VanillaUtils,
      {
        isPluginType: ls,
        createPluginInstance: fs,
        getPluginDuration: hU,
      } = Ny.IX2VanillaPlugins,
      Cy = navigator.userAgent,
      EU = Cy.match(/iPad/i) || Cy.match(/iPhone/),
      gU = 12;
    function _U(e) {
      jt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: TU }),
        jt({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: mU,
        }),
        jt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: OU }),
        jt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: bU });
    }
    function yU(e) {
      jt({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          Li(e),
            qy({ store: e, elementApi: Ae }),
            qi({ store: e, allowEvents: !0 }),
            Ly();
        },
      });
    }
    function IU(e, t) {
      let r = jt({
        store: e,
        select: ({ ixSession: n }) => n.tick,
        onChange: (n) => {
          t(n), r();
        },
      });
    }
    function TU({ rawData: e, defer: t }, r) {
      let n = () => {
        qi({ store: r, rawData: e, allowEvents: !0 }), Ly();
      };
      t ? setTimeout(n, 0) : n();
    }
    function Ly() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function mU(e, t) {
      let {
          actionTypeId: r,
          actionListId: n,
          actionItemId: o,
          eventId: i,
          allowEvents: a,
          immediate: u,
          testManual: c,
          verbose: f = !0,
        } = e,
        { rawData: g } = e;
      if (n && o && g && u) {
        let h = g.actionLists[n];
        h && (g = uU({ actionList: h, actionItemId: o, rawData: g }));
      }
      if (
        (qi({ store: t, rawData: g, allowEvents: a, testManual: c }),
        (n && r === tt.ActionTypeConsts.GENERAL_START_ACTION) || ss(r))
      ) {
        ds({ store: t, actionListId: n }),
          Dy({ store: t, actionListId: n, eventId: i });
        let h = ps({
          store: t,
          eventId: i,
          actionListId: n,
          immediate: u,
          verbose: f,
        });
        f &&
          h &&
          t.dispatch(
            (0, Ie.actionListPlaybackChanged)({
              actionListId: n,
              isPlaying: !u,
            })
          );
      }
    }
    function OU({ actionListId: e }, t) {
      e ? ds({ store: t, actionListId: e }) : My({ store: t }), Li(t);
    }
    function bU(e, t) {
      Li(t), qy({ store: t, elementApi: Ae });
    }
    function qi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
      let { ixSession: o } = e.getState();
      t && e.dispatch((0, Ie.rawDataImported)(t)),
        o.active ||
          (e.dispatch(
            (0, Ie.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(Ci),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          r &&
            (NU(e),
            AU(),
            e.getState().ixSession.hasDefinedMediaQueries && yU(e)),
          e.dispatch((0, Ie.sessionStarted)()),
          SU(e, n));
    }
    function AU() {
      let { documentElement: e } = document;
      e.className.indexOf(wy) === -1 && (e.className += ` ${wy}`);
    }
    function SU(e, t) {
      let r = (n) => {
        let { ixSession: o, ixParameters: i } = e.getState();
        o.active &&
          (e.dispatch((0, Ie.animationFrameChanged)(n, i)),
          t ? IU(e, r) : requestAnimationFrame(r));
      };
      r(window.performance.now());
    }
    function Li(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: r } = t;
        r.forEach(RU), e.dispatch((0, Ie.sessionStopped)());
      }
    }
    function RU({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function wU({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: o,
      actionListId: i,
      parameterGroup: a,
      smoothing: u,
      restingValue: c,
    }) {
      let { ixData: f, ixSession: g } = e.getState(),
        { events: h } = f,
        E = h[n],
        { eventTypeId: I } = E,
        x = {},
        b = {},
        q = [],
        { continuousActionGroups: R } = a,
        { id: w } = a;
      cU(I, o) && (w = lU(t, w));
      let T = g.hasBoundaryNodes && r ? Ae.getClosestElement(r, Ci) : null;
      R.forEach((F) => {
        let { keyframe: G, actionItems: L } = F;
        L.forEach((W) => {
          let { actionTypeId: k } = W,
            { target: K } = W.config;
          if (!K) return;
          let te = K.boundaryMode ? T : null,
            $ = dU(K) + us + k;
          if (((b[$] = CU(b[$], G, W)), !x[$])) {
            x[$] = !0;
            let { config: M } = W;
            Ni({
              config: M,
              event: E,
              eventTarget: r,
              elementRoot: te,
              elementApi: Ae,
            }).forEach((_) => {
              q.push({ element: _, key: $ });
            });
          }
        });
      }),
        q.forEach(({ element: F, key: G }) => {
          let L = b[G],
            W = (0, Nt.default)(L, "[0].actionItems[0]", {}),
            { actionTypeId: k } = W,
            K = ls(k) ? fs(k)(F, W) : null,
            te = cs({ element: F, actionItem: W, elementApi: Ae }, K);
          vs({
            store: e,
            element: F,
            eventId: n,
            actionListId: i,
            actionItem: W,
            destination: te,
            continuous: !0,
            parameterId: w,
            actionGroups: L,
            smoothing: u,
            restingValue: c,
            pluginInstance: K,
          });
        });
    }
    function CU(e = [], t, r) {
      let n = [...e],
        o;
      return (
        n.some((i, a) => (i.keyframe === t ? ((o = a), !0) : !1)),
        o == null && ((o = n.length), n.push({ keyframe: t, actionItems: [] })),
        n[o].actionItems.push(r),
        n
      );
    }
    function NU(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: r } = t;
      Py(e),
        (0, sn.default)(r, (o, i) => {
          let a = ZV.default[i];
          if (!a) {
            console.warn(`IX2 event type not configured: ${i}`);
            return;
          }
          MU({ logic: a, store: e, events: o });
        });
      let { ixSession: n } = e.getState();
      n.eventListeners.length && qU(e);
    }
    var xU = ["resize", "orientationchange"];
    function qU(e) {
      let t = () => {
        Py(e);
      };
      xU.forEach((r) => {
        window.addEventListener(r, t),
          e.dispatch((0, Ie.eventListenerAdded)(window, [r, t]));
      }),
        t();
    }
    function Py(e) {
      let { ixSession: t, ixData: r } = e.getState(),
        n = window.innerWidth;
      if (n !== t.viewportWidth) {
        let { mediaQueries: o } = r;
        e.dispatch((0, Ie.viewportWidthChanged)({ width: n, mediaQueries: o }));
      }
    }
    var LU = (e, t) => (0, zV.default)((0, QV.default)(e, t), YV.default),
      PU = (e, t) => {
        (0, sn.default)(e, (r, n) => {
          r.forEach((o, i) => {
            let a = n + us + i;
            t(o, n, a);
          });
        });
      },
      DU = (e) => {
        let t = { target: e.target, targets: e.targets };
        return Ni({ config: t, elementApi: Ae });
      };
    function MU({ logic: e, store: t, events: r }) {
      FU(r);
      let { types: n, handler: o } = e,
        { ixData: i } = t.getState(),
        { actionLists: a } = i,
        u = LU(r, DU);
      if (!(0, KV.default)(u)) return;
      (0, sn.default)(u, (h, E) => {
        let I = r[E],
          { action: x, id: b, mediaQueries: q = i.mediaQueryKeys } = I,
          { actionListId: R } = x.config;
        pU(q, i.mediaQueryKeys) || t.dispatch((0, Ie.mediaQueriesDefined)()),
          x.actionTypeId === tt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(I.config) ? I.config : [I.config]).forEach((T) => {
              let { continuousParameterGroupId: F } = T,
                G = (0, Nt.default)(a, `${R}.continuousParameterGroups`, []),
                L = (0, jV.default)(G, ({ id: K }) => K === F),
                W = (T.smoothing || 0) / 100,
                k = (T.restingState || 0) / 100;
              L &&
                h.forEach((K, te) => {
                  let $ = b + us + te;
                  wU({
                    store: t,
                    eventStateKey: $,
                    eventTarget: K,
                    eventId: b,
                    eventConfig: T,
                    actionListId: R,
                    parameterGroup: L,
                    smoothing: W,
                    restingValue: k,
                  });
                });
            }),
          (x.actionTypeId === tt.ActionTypeConsts.GENERAL_START_ACTION ||
            ss(x.actionTypeId)) &&
            Dy({ store: t, actionListId: R, eventId: b });
      });
      let c = (h) => {
          let { ixSession: E } = t.getState();
          PU(u, (I, x, b) => {
            let q = r[x],
              R = E.eventState[b],
              { action: w, mediaQueries: T = i.mediaQueryKeys } = q;
            if (!xi(T, E.mediaQueryKey)) return;
            let F = (G = {}) => {
              let L = o(
                {
                  store: t,
                  element: I,
                  event: q,
                  eventConfig: G,
                  nativeEvent: h,
                  eventStateKey: b,
                },
                R
              );
              vU(L, R) || t.dispatch((0, Ie.eventStateChanged)(b, L));
            };
            w.actionTypeId === tt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(q.config) ? q.config : [q.config]).forEach(F)
              : F();
          });
        },
        f = (0, $V.default)(c, gU),
        g = ({ target: h = document, types: E, throttle: I }) => {
          E.split(" ")
            .filter(Boolean)
            .forEach((x) => {
              let b = I ? f : c;
              h.addEventListener(x, b),
                t.dispatch((0, Ie.eventListenerAdded)(h, [x, b]));
            });
        };
      Array.isArray(n) ? n.forEach(g) : typeof n == "string" && g(e);
    }
    function FU(e) {
      if (!EU) return;
      let t = {},
        r = "";
      for (let n in e) {
        let { eventTypeId: o, target: i } = e[n],
          a = Ae.getQuerySelector(i);
        t[a] ||
          ((o === tt.EventTypeConsts.MOUSE_CLICK ||
            o === tt.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[a] = !0),
            (r += a + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (r) {
        let n = document.createElement("style");
        (n.textContent = r), document.body.appendChild(n);
      }
    }
    function Dy({ store: e, actionListId: t, eventId: r }) {
      let { ixData: n, ixSession: o } = e.getState(),
        { actionLists: i, events: a } = n,
        u = a[r],
        c = i[t];
      if (c && c.useFirstGroupAsInitialState) {
        let f = (0, Nt.default)(c, "actionItemGroups[0].actionItems", []),
          g = (0, Nt.default)(u, "mediaQueries", n.mediaQueryKeys);
        if (!xi(g, o.mediaQueryKey)) return;
        f.forEach((h) => {
          var E;
          let { config: I, actionTypeId: x } = h,
            b =
              (I == null || (E = I.target) === null || E === void 0
                ? void 0
                : E.useEventTarget) === !0
                ? { target: u.target, targets: u.targets }
                : I,
            q = Ni({ config: b, event: u, elementApi: Ae }),
            R = ls(x);
          q.forEach((w) => {
            let T = R ? fs(x)(w, h) : null;
            vs({
              destination: cs({ element: w, actionItem: h, elementApi: Ae }, T),
              immediate: !0,
              store: e,
              element: w,
              eventId: r,
              actionItem: h,
              actionListId: t,
              pluginInstance: T,
            });
          });
        });
      }
    }
    function My({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, sn.default)(t, (r) => {
        if (!r.continuous) {
          let { actionListId: n, verbose: o } = r;
          hs(r, e),
            o &&
              e.dispatch(
                (0, Ie.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function ds({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: o,
    }) {
      let { ixInstances: i, ixSession: a } = e.getState(),
        u = a.hasBoundaryNodes && r ? Ae.getClosestElement(r, Ci) : null;
      (0, sn.default)(i, (c) => {
        let f = (0, Nt.default)(c, "actionItem.config.target.boundaryMode"),
          g = n ? c.eventStateKey === n : !0;
        if (c.actionListId === o && c.eventId === t && g) {
          if (u && f && !Ae.elementContains(u, c.element)) return;
          hs(c, e),
            c.verbose &&
              e.dispatch(
                (0, Ie.actionListPlaybackChanged)({
                  actionListId: o,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function ps({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: o,
      groupIndex: i = 0,
      immediate: a,
      verbose: u,
    }) {
      var c;
      let { ixData: f, ixSession: g } = e.getState(),
        { events: h } = f,
        E = h[t] || {},
        { mediaQueries: I = f.mediaQueryKeys } = E,
        x = (0, Nt.default)(f, `actionLists.${o}`, {}),
        { actionItemGroups: b, useFirstGroupAsInitialState: q } = x;
      if (!b || !b.length) return !1;
      i >= b.length && (0, Nt.default)(E, "config.loop") && (i = 0),
        i === 0 && q && i++;
      let w =
          (i === 0 || (i === 1 && q)) &&
          ss((c = E.action) === null || c === void 0 ? void 0 : c.actionTypeId)
            ? E.config.delay
            : void 0,
        T = (0, Nt.default)(b, [i, "actionItems"], []);
      if (!T.length || !xi(I, g.mediaQueryKey)) return !1;
      let F = g.hasBoundaryNodes && r ? Ae.getClosestElement(r, Ci) : null,
        G = oU(T),
        L = !1;
      return (
        T.forEach((W, k) => {
          let { config: K, actionTypeId: te } = W,
            $ = ls(te),
            { target: M } = K;
          if (!M) return;
          let _ = M.boundaryMode ? F : null;
          Ni({
            config: K,
            event: E,
            eventTarget: r,
            elementRoot: _,
            elementApi: Ae,
          }).forEach((X, V) => {
            let z = $ ? fs(te)(X, W) : null,
              Z = $ ? hU(te)(X, W) : null;
            L = !0;
            let ce = G === k && V === 0,
              Se = aU({ element: X, actionItem: W }),
              p = cs({ element: X, actionItem: W, elementApi: Ae }, z);
            vs({
              store: e,
              element: X,
              actionItem: W,
              eventId: t,
              eventTarget: r,
              eventStateKey: n,
              actionListId: o,
              groupIndex: i,
              isCarrier: ce,
              computedStyle: Se,
              destination: p,
              immediate: a,
              verbose: u,
              pluginInstance: z,
              pluginDuration: Z,
              instanceDelay: w,
            });
          });
        }),
        L
      );
    }
    function vs(e) {
      var t;
      let { store: r, computedStyle: n } = e,
        o = (0, kV.default)(e, JV),
        {
          element: i,
          actionItem: a,
          immediate: u,
          pluginInstance: c,
          continuous: f,
          restingValue: g,
          eventId: h,
        } = o,
        E = !f,
        I = nU(),
        { ixElements: x, ixSession: b, ixData: q } = r.getState(),
        R = rU(x, i),
        { refState: w } = x[R] || {},
        T = Ae.getRefType(i),
        F = b.reducedMotion && tt.ReducedMotionTypes[a.actionTypeId],
        G;
      if (F && f)
        switch (
          (t = q.events[h]) === null || t === void 0 ? void 0 : t.eventTypeId
        ) {
          case tt.EventTypeConsts.MOUSE_MOVE:
          case tt.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            G = g;
            break;
          default:
            G = 0.5;
            break;
        }
      let L = sU(i, w, n, a, Ae, c);
      if (
        (r.dispatch(
          (0, Ie.instanceAdded)(
            (0, HV.default)(
              {
                instanceId: I,
                elementId: R,
                origin: L,
                refType: T,
                skipMotion: F,
                skipToValue: G,
              },
              o
            )
          )
        ),
        Fy(document.body, "ix2-animation-started", I),
        u)
      ) {
        GU(r, I);
        return;
      }
      jt({ store: r, select: ({ ixInstances: W }) => W[I], onChange: Gy }),
        E && r.dispatch((0, Ie.instanceStarted)(I, b.tick));
    }
    function hs(e, t) {
      Fy(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: r, actionItem: n } = e,
        { ixElements: o } = t.getState(),
        { ref: i, refType: a } = o[r] || {};
      a === xy && fU(i, n, Ae), t.dispatch((0, Ie.instanceRemoved)(e.id));
    }
    function Fy(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    }
    function GU(e, t) {
      let { ixParameters: r } = e.getState();
      e.dispatch((0, Ie.instanceStarted)(t, 0)),
        e.dispatch((0, Ie.animationFrameChanged)(performance.now(), r));
      let { ixInstances: n } = e.getState();
      Gy(n[t], e);
    }
    function Gy(e, t) {
      let {
          active: r,
          continuous: n,
          complete: o,
          elementId: i,
          actionItem: a,
          actionTypeId: u,
          renderType: c,
          current: f,
          groupIndex: g,
          eventId: h,
          eventTarget: E,
          eventStateKey: I,
          actionListId: x,
          isCarrier: b,
          styleProp: q,
          verbose: R,
          pluginInstance: w,
        } = e,
        { ixData: T, ixSession: F } = t.getState(),
        { events: G } = T,
        L = G[h] || {},
        { mediaQueries: W = T.mediaQueryKeys } = L;
      if (xi(W, F.mediaQueryKey) && (n || r || o)) {
        if (f || (c === tU && o)) {
          t.dispatch((0, Ie.elementStateChanged)(i, u, f, a));
          let { ixElements: k } = t.getState(),
            { ref: K, refType: te, refState: $ } = k[i] || {},
            M = $ && $[u];
          switch (te) {
            case xy: {
              iU(K, $, M, h, a, q, Ae, c, w);
              break;
            }
          }
        }
        if (o) {
          if (b) {
            let k = ps({
              store: t,
              eventId: h,
              eventTarget: E,
              eventStateKey: I,
              actionListId: x,
              groupIndex: g + 1,
              verbose: R,
            });
            R &&
              !k &&
              t.dispatch(
                (0, Ie.actionListPlaybackChanged)({
                  actionListId: x,
                  isPlaying: !1,
                })
              );
          }
          hs(e, t);
        }
      }
    }
  });
  var Vy = s((Tt) => {
    "use strict";
    var XU = Yt().default,
      VU = st().default;
    Object.defineProperty(Tt, "__esModule", { value: !0 });
    Tt.actions = void 0;
    Tt.destroy = Xy;
    Tt.init = kU;
    Tt.setEnv = HU;
    Tt.store = void 0;
    Rl();
    var UU = Ko(),
      WU = VU(BE()),
      Es = as(),
      BU = XU(gi());
    Tt.actions = BU;
    var Pi = (0, UU.createStore)(WU.default);
    Tt.store = Pi;
    function HU(e) {
      e() && (0, Es.observeRequests)(Pi);
    }
    function kU(e) {
      Xy(), (0, Es.startEngine)({ store: Pi, rawData: e, allowEvents: !0 });
    }
    function Xy() {
      (0, Es.stopEngine)(Pi);
    }
  });
  var Hy = s((Uj, By) => {
    var Uy = ot(),
      Wy = Vy();
    Wy.setEnv(Uy.env);
    Uy.define(
      "ix2",
      (By.exports = function () {
        return Wy;
      })
    );
  });
  var jy = s((Wj, ky) => {
    var Or = ot();
    Or.define(
      "links",
      (ky.exports = function (e, t) {
        var r = {},
          n = e(window),
          o,
          i = Or.env(),
          a = window.location,
          u = document.createElement("a"),
          c = "w--current",
          f = /index\.(html|php)$/,
          g = /\/$/,
          h,
          E;
        r.ready = r.design = r.preview = I;
        function I() {
          (o = i && Or.env("design")),
            (E = Or.env("slug") || a.pathname || ""),
            Or.scroll.off(b),
            (h = []);
          for (var R = document.links, w = 0; w < R.length; ++w) x(R[w]);
          h.length && (Or.scroll.on(b), b());
        }
        function x(R) {
          var w =
            (o && R.getAttribute("href-disabled")) || R.getAttribute("href");
          if (((u.href = w), !(w.indexOf(":") >= 0))) {
            var T = e(R);
            if (
              u.hash.length > 1 &&
              u.host + u.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
              var F = e(u.hash);
              F.length && h.push({ link: T, sec: F, active: !1 });
              return;
            }
            if (!(w === "#" || w === "")) {
              var G = u.href === a.href || w === E || (f.test(w) && g.test(E));
              q(T, c, G);
            }
          }
        }
        function b() {
          var R = n.scrollTop(),
            w = n.height();
          t.each(h, function (T) {
            var F = T.link,
              G = T.sec,
              L = G.offset().top,
              W = G.outerHeight(),
              k = w * 0.5,
              K = G.is(":visible") && L + W - k >= R && L + k <= R + w;
            T.active !== K && ((T.active = K), q(F, c, K));
          });
        }
        function q(R, w, T) {
          var F = R.hasClass(w);
          (T && F) || (!T && !F) || (T ? R.addClass(w) : R.removeClass(w));
        }
        return r;
      })
    );
  });
  var zy = s((Bj, Ky) => {
    var Di = ot();
    Di.define(
      "scroll",
      (Ky.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = x() ? null : window.history,
          o = e(window),
          i = e(document),
          a = e(document.body),
          u =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (M) {
              window.setTimeout(M, 15);
            },
          c = Di.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          g = 'a[href="#"]',
          h = 'a[href*="#"]:not(.w-tab-link):not(' + g + ")",
          E = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          I = document.createElement("style");
        I.appendChild(document.createTextNode(E));
        function x() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var b = /^#[a-zA-Z0-9][\w:.-]*$/;
        function q(M) {
          return b.test(M.hash) && M.host + M.pathname === r.host + r.pathname;
        }
        let R =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function w() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            R.matches
          );
        }
        function T(M, _) {
          var D;
          switch (_) {
            case "add":
              (D = M.attr("tabindex")),
                D
                  ? M.attr("data-wf-tabindex-swap", D)
                  : M.attr("tabindex", "-1");
              break;
            case "remove":
              (D = M.attr("data-wf-tabindex-swap")),
                D
                  ? (M.attr("tabindex", D),
                    M.removeAttr("data-wf-tabindex-swap"))
                  : M.removeAttr("tabindex");
              break;
          }
          M.toggleClass("wf-force-outline-none", _ === "add");
        }
        function F(M) {
          var _ = M.currentTarget;
          if (
            !(
              Di.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(_.className))
            )
          ) {
            var D = q(_) ? _.hash : "";
            if (D !== "") {
              var X = e(D);
              X.length &&
                (M && (M.preventDefault(), M.stopPropagation()),
                G(D, M),
                window.setTimeout(
                  function () {
                    L(X, function () {
                      T(X, "add"),
                        X.get(0).focus({ preventScroll: !0 }),
                        T(X, "remove");
                    });
                  },
                  M ? 0 : 300
                ));
            }
          }
        }
        function G(M) {
          if (
            r.hash !== M &&
            n &&
            n.pushState &&
            !(Di.env.chrome && r.protocol === "file:")
          ) {
            var _ = n.state && n.state.hash;
            _ !== M && n.pushState({ hash: M }, "", M);
          }
        }
        function L(M, _) {
          var D = o.scrollTop(),
            X = W(M);
          if (D !== X) {
            var V = k(M, D, X),
              z = Date.now(),
              Z = function () {
                var ce = Date.now() - z;
                window.scroll(0, K(D, X, ce, V)),
                  ce <= V ? u(Z) : typeof _ == "function" && _();
              };
            u(Z);
          }
        }
        function W(M) {
          var _ = e(f),
            D = _.css("position") === "fixed" ? _.outerHeight() : 0,
            X = M.offset().top - D;
          if (M.data("scroll") === "mid") {
            var V = o.height() - D,
              z = M.outerHeight();
            z < V && (X -= Math.round((V - z) / 2));
          }
          return X;
        }
        function k(M, _, D) {
          if (w()) return 0;
          var X = 1;
          return (
            a.add(M).each(function (V, z) {
              var Z = parseFloat(z.getAttribute("data-scroll-time"));
              !isNaN(Z) && Z >= 0 && (X = Z);
            }),
            (472.143 * Math.log(Math.abs(_ - D) + 125) - 2e3) * X
          );
        }
        function K(M, _, D, X) {
          return D > X ? _ : M + (_ - M) * te(D / X);
        }
        function te(M) {
          return M < 0.5
            ? 4 * M * M * M
            : (M - 1) * (2 * M - 2) * (2 * M - 2) + 1;
        }
        function $() {
          var { WF_CLICK_EMPTY: M, WF_CLICK_SCROLL: _ } = t;
          i.on(_, h, F),
            i.on(M, g, function (D) {
              D.preventDefault();
            }),
            document.head.insertBefore(I, document.head.firstChild);
        }
        return { ready: $ };
      })
    );
  });
  var Qy = s((Hj, Yy) => {
    var jU = ot();
    jU.define(
      "touch",
      (Yy.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new n(i) : null
            );
          });
        function n(i) {
          var a = !1,
            u = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            g;
          i.addEventListener("touchstart", h, !1),
            i.addEventListener("touchmove", E, !1),
            i.addEventListener("touchend", I, !1),
            i.addEventListener("touchcancel", x, !1),
            i.addEventListener("mousedown", h, !1),
            i.addEventListener("mousemove", E, !1),
            i.addEventListener("mouseup", I, !1),
            i.addEventListener("mouseout", x, !1);
          function h(q) {
            var R = q.touches;
            (R && R.length > 1) ||
              ((a = !0),
              R ? ((u = !0), (f = R[0].clientX)) : (f = q.clientX),
              (g = f));
          }
          function E(q) {
            if (a) {
              if (u && q.type === "mousemove") {
                q.preventDefault(), q.stopPropagation();
                return;
              }
              var R = q.touches,
                w = R ? R[0].clientX : q.clientX,
                T = w - g;
              (g = w),
                Math.abs(T) > c &&
                  r &&
                  String(r()) === "" &&
                  (o("swipe", q, { direction: T > 0 ? "right" : "left" }), x());
            }
          }
          function I(q) {
            if (a && ((a = !1), u && q.type === "mouseup")) {
              q.preventDefault(), q.stopPropagation(), (u = !1);
              return;
            }
          }
          function x() {
            a = !1;
          }
          function b() {
            i.removeEventListener("touchstart", h, !1),
              i.removeEventListener("touchmove", E, !1),
              i.removeEventListener("touchend", I, !1),
              i.removeEventListener("touchcancel", x, !1),
              i.removeEventListener("mousedown", h, !1),
              i.removeEventListener("mousemove", E, !1),
              i.removeEventListener("mouseup", I, !1),
              i.removeEventListener("mouseout", x, !1),
              (i = null);
          }
          this.destroy = b;
        }
        function o(i, a, u) {
          var c = e.Event(i, { originalEvent: a });
          e(a.target).trigger(c, u);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var Zy = s((kj, $y) => {
    var qt = ot(),
      KU = vn(),
      qe = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    qt.define(
      "navbar",
      ($y.exports = function (e, t) {
        var r = {},
          n = e.tram,
          o = e(window),
          i = e(document),
          a = t.debounce,
          u,
          c,
          f,
          g,
          h = qt.env(),
          E = '<div class="w-nav-overlay" data-wf-ignore />',
          I = ".w-nav",
          x = "w--open",
          b = "w--nav-dropdown-open",
          q = "w--nav-dropdown-toggle-open",
          R = "w--nav-dropdown-list-open",
          w = "w--nav-link-open",
          T = KU.triggers,
          F = e();
        (r.ready = r.design = r.preview = G),
          (r.destroy = function () {
            (F = e()), L(), c && c.length && c.each(te);
          });
        function G() {
          (f = h && qt.env("design")),
            (g = qt.env("editor")),
            (u = e(document.body)),
            (c = i.find(I)),
            c.length && (c.each(K), L(), W());
        }
        function L() {
          qt.resize.off(k);
        }
        function W() {
          qt.resize.on(k);
        }
        function k() {
          c.each(S);
        }
        function K(d, U) {
          var j = e(U),
            B = e.data(U, I);
          B ||
            (B = e.data(U, I, {
              open: !1,
              el: j,
              config: {},
              selectedIdx: -1,
            })),
            (B.menu = j.find(".w-nav-menu")),
            (B.links = B.menu.find(".w-nav-link")),
            (B.dropdowns = B.menu.find(".w-dropdown")),
            (B.dropdownToggle = B.menu.find(".w-dropdown-toggle")),
            (B.dropdownList = B.menu.find(".w-dropdown-list")),
            (B.button = j.find(".w-nav-button")),
            (B.container = j.find(".w-container")),
            (B.overlayContainerId = "w-nav-overlay-" + d),
            (B.outside = p(B));
          var fe = j.find(".w-nav-brand");
          fe &&
            fe.attr("href") === "/" &&
            fe.attr("aria-label") == null &&
            fe.attr("aria-label", "home"),
            B.button.attr("style", "-webkit-user-select: text;"),
            B.button.attr("aria-label") == null &&
              B.button.attr("aria-label", "menu"),
            B.button.attr("role", "button"),
            B.button.attr("tabindex", "0"),
            B.button.attr("aria-controls", B.overlayContainerId),
            B.button.attr("aria-haspopup", "menu"),
            B.button.attr("aria-expanded", "false"),
            B.el.off(I),
            B.button.off(I),
            B.menu.off(I),
            _(B),
            f
              ? ($(B), B.el.on("setting" + I, D(B)))
              : (M(B),
                B.button.on("click" + I, ce(B)),
                B.menu.on("click" + I, "a", Se(B)),
                B.button.on("keydown" + I, X(B)),
                B.el.on("keydown" + I, V(B))),
            S(d, U);
        }
        function te(d, U) {
          var j = e.data(U, I);
          j && ($(j), e.removeData(U, I));
        }
        function $(d) {
          d.overlay && (se(d, !0), d.overlay.remove(), (d.overlay = null));
        }
        function M(d) {
          d.overlay ||
            ((d.overlay = e(E).appendTo(d.el)),
            d.overlay.attr("id", d.overlayContainerId),
            (d.parent = d.menu.parent()),
            se(d, !0));
        }
        function _(d) {
          var U = {},
            j = d.config || {},
            B = (U.animation = d.el.attr("data-animation") || "default");
          (U.animOver = /^over/.test(B)),
            (U.animDirect = /left$/.test(B) ? -1 : 1),
            j.animation !== B && d.open && t.defer(Z, d),
            (U.easing = d.el.attr("data-easing") || "ease"),
            (U.easing2 = d.el.attr("data-easing2") || "ease");
          var fe = d.el.attr("data-duration");
          (U.duration = fe != null ? Number(fe) : 400),
            (U.docHeight = d.el.attr("data-doc-height")),
            (d.config = U);
        }
        function D(d) {
          return function (U, j) {
            j = j || {};
            var B = o.width();
            _(d),
              j.open === !0 && Pe(d, !0),
              j.open === !1 && se(d, !0),
              d.open &&
                t.defer(function () {
                  B !== o.width() && Z(d);
                });
          };
        }
        function X(d) {
          return function (U) {
            switch (U.keyCode) {
              case qe.SPACE:
              case qe.ENTER:
                return ce(d)(), U.preventDefault(), U.stopPropagation();
              case qe.ESCAPE:
                return se(d), U.preventDefault(), U.stopPropagation();
              case qe.ARROW_RIGHT:
              case qe.ARROW_DOWN:
              case qe.HOME:
              case qe.END:
                return d.open
                  ? (U.keyCode === qe.END
                      ? (d.selectedIdx = d.links.length - 1)
                      : (d.selectedIdx = 0),
                    z(d),
                    U.preventDefault(),
                    U.stopPropagation())
                  : (U.preventDefault(), U.stopPropagation());
            }
          };
        }
        function V(d) {
          return function (U) {
            if (d.open)
              switch (
                ((d.selectedIdx = d.links.index(document.activeElement)),
                U.keyCode)
              ) {
                case qe.HOME:
                case qe.END:
                  return (
                    U.keyCode === qe.END
                      ? (d.selectedIdx = d.links.length - 1)
                      : (d.selectedIdx = 0),
                    z(d),
                    U.preventDefault(),
                    U.stopPropagation()
                  );
                case qe.ESCAPE:
                  return (
                    se(d),
                    d.button.focus(),
                    U.preventDefault(),
                    U.stopPropagation()
                  );
                case qe.ARROW_LEFT:
                case qe.ARROW_UP:
                  return (
                    (d.selectedIdx = Math.max(-1, d.selectedIdx - 1)),
                    z(d),
                    U.preventDefault(),
                    U.stopPropagation()
                  );
                case qe.ARROW_RIGHT:
                case qe.ARROW_DOWN:
                  return (
                    (d.selectedIdx = Math.min(
                      d.links.length - 1,
                      d.selectedIdx + 1
                    )),
                    z(d),
                    U.preventDefault(),
                    U.stopPropagation()
                  );
              }
          };
        }
        function z(d) {
          if (d.links[d.selectedIdx]) {
            var U = d.links[d.selectedIdx];
            U.focus(), Se(U);
          }
        }
        function Z(d) {
          d.open && (se(d, !0), Pe(d, !0));
        }
        function ce(d) {
          return a(function () {
            d.open ? se(d) : Pe(d);
          });
        }
        function Se(d) {
          return function (U) {
            var j = e(this),
              B = j.attr("href");
            if (!qt.validClick(U.currentTarget)) {
              U.preventDefault();
              return;
            }
            B && B.indexOf("#") === 0 && d.open && se(d);
          };
        }
        function p(d) {
          return (
            d.outside && i.off("click" + I, d.outside),
            function (U) {
              var j = e(U.target);
              (g && j.closest(".w-editor-bem-EditorOverlay").length) || P(d, j);
            }
          );
        }
        var P = a(function (d, U) {
          if (d.open) {
            var j = U.closest(".w-nav-menu");
            d.menu.is(j) || se(d);
          }
        });
        function S(d, U) {
          var j = e.data(U, I),
            B = (j.collapsed = j.button.css("display") !== "none");
          if ((j.open && !B && !f && se(j, !0), j.container.length)) {
            var fe = ie(j);
            j.links.each(fe), j.dropdowns.each(fe);
          }
          j.open && Le(j);
        }
        var m = "max-width";
        function ie(d) {
          var U = d.container.css(m);
          return (
            U === "none" && (U = ""),
            function (j, B) {
              (B = e(B)), B.css(m, ""), B.css(m) === "none" && B.css(m, U);
            }
          );
        }
        function le(d, U) {
          U.setAttribute("data-nav-menu-open", "");
        }
        function Te(d, U) {
          U.removeAttribute("data-nav-menu-open");
        }
        function Pe(d, U) {
          if (d.open) return;
          (d.open = !0),
            d.menu.each(le),
            d.links.addClass(w),
            d.dropdowns.addClass(b),
            d.dropdownToggle.addClass(q),
            d.dropdownList.addClass(R),
            d.button.addClass(x);
          var j = d.config,
            B = j.animation;
          (B === "none" || !n.support.transform || j.duration <= 0) && (U = !0);
          var fe = Le(d),
            je = d.menu.outerHeight(!0),
            Et = d.menu.outerWidth(!0),
            l = d.el.height(),
            v = d.el[0];
          if (
            (S(0, v),
            T.intro(0, v),
            qt.redraw.up(),
            f || i.on("click" + I, d.outside),
            U)
          ) {
            C();
            return;
          }
          var y = "transform " + j.duration + "ms " + j.easing;
          if (
            (d.overlay &&
              ((F = d.menu.prev()), d.overlay.show().append(d.menu)),
            j.animOver)
          ) {
            n(d.menu)
              .add(y)
              .set({ x: j.animDirect * Et, height: fe })
              .start({ x: 0 })
              .then(C),
              d.overlay && d.overlay.width(Et);
            return;
          }
          var O = l + je;
          n(d.menu).add(y).set({ y: -O }).start({ y: 0 }).then(C);
          function C() {
            d.button.attr("aria-expanded", "true");
          }
        }
        function Le(d) {
          var U = d.config,
            j = U.docHeight ? i.height() : u.height();
          return (
            U.animOver
              ? d.menu.height(j)
              : d.el.css("position") !== "fixed" && (j -= d.el.outerHeight(!0)),
            d.overlay && d.overlay.height(j),
            j
          );
        }
        function se(d, U) {
          if (!d.open) return;
          (d.open = !1), d.button.removeClass(x);
          var j = d.config;
          if (
            ((j.animation === "none" ||
              !n.support.transform ||
              j.duration <= 0) &&
              (U = !0),
            T.outro(0, d.el[0]),
            i.off("click" + I, d.outside),
            U)
          ) {
            n(d.menu).stop(), v();
            return;
          }
          var B = "transform " + j.duration + "ms " + j.easing2,
            fe = d.menu.outerHeight(!0),
            je = d.menu.outerWidth(!0),
            Et = d.el.height();
          if (j.animOver) {
            n(d.menu)
              .add(B)
              .start({ x: je * j.animDirect })
              .then(v);
            return;
          }
          var l = Et + fe;
          n(d.menu).add(B).start({ y: -l }).then(v);
          function v() {
            d.menu.height(""),
              n(d.menu).set({ x: 0, y: 0 }),
              d.menu.each(Te),
              d.links.removeClass(w),
              d.dropdowns.removeClass(b),
              d.dropdownToggle.removeClass(q),
              d.dropdownList.removeClass(R),
              d.overlay &&
                d.overlay.children().length &&
                (F.length ? d.menu.insertAfter(F) : d.menu.prependTo(d.parent),
                d.overlay.attr("style", "").hide()),
              d.el.triggerHandler("w-close"),
              d.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var tI = s((jj, eI) => {
    var Lt = ot(),
      zU = vn(),
      ht = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      Jy =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Lt.define(
      "slider",
      (eI.exports = function (e, t) {
        var r = {},
          n = e.tram,
          o = e(document),
          i,
          a,
          u = Lt.env(),
          c = ".w-slider",
          f = '<div class="w-slider-dot" data-wf-ignore />',
          g =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          h = "w-slider-force-show",
          E = zU.triggers,
          I,
          x = !1;
        (r.ready = function () {
          (a = Lt.env("design")), b();
        }),
          (r.design = function () {
            (a = !0), setTimeout(b, 1e3);
          }),
          (r.preview = function () {
            (a = !1), b();
          }),
          (r.redraw = function () {
            (x = !0), b(), (x = !1);
          }),
          (r.destroy = q);
        function b() {
          (i = o.find(c)), i.length && (i.each(T), !I && (q(), R()));
        }
        function q() {
          Lt.resize.off(w), Lt.redraw.off(r.redraw);
        }
        function R() {
          Lt.resize.on(w), Lt.redraw.on(r.redraw);
        }
        function w() {
          i.filter(":visible").each(V);
        }
        function T(p, P) {
          var S = e(P),
            m = e.data(P, c);
          m ||
            (m = e.data(P, c, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: S,
              config: {},
            })),
            (m.mask = S.children(".w-slider-mask")),
            (m.left = S.children(".w-slider-arrow-left")),
            (m.right = S.children(".w-slider-arrow-right")),
            (m.nav = S.children(".w-slider-nav")),
            (m.slides = m.mask.children(".w-slide")),
            m.slides.each(E.reset),
            x && (m.maskWidth = 0),
            S.attr("role") === void 0 && S.attr("role", "region"),
            S.attr("aria-label") === void 0 && S.attr("aria-label", "carousel");
          var ie = m.mask.attr("id");
          if (
            (ie || ((ie = "w-slider-mask-" + p), m.mask.attr("id", ie)),
            !a && !m.ariaLiveLabel && (m.ariaLiveLabel = e(g).appendTo(m.mask)),
            m.left.attr("role", "button"),
            m.left.attr("tabindex", "0"),
            m.left.attr("aria-controls", ie),
            m.left.attr("aria-label") === void 0 &&
              m.left.attr("aria-label", "previous slide"),
            m.right.attr("role", "button"),
            m.right.attr("tabindex", "0"),
            m.right.attr("aria-controls", ie),
            m.right.attr("aria-label") === void 0 &&
              m.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            m.left.hide(), m.right.hide(), m.nav.hide(), (I = !0);
            return;
          }
          m.el.off(c),
            m.left.off(c),
            m.right.off(c),
            m.nav.off(c),
            F(m),
            a
              ? (m.el.on("setting" + c, _(m)), M(m), (m.hasTimer = !1))
              : (m.el.on("swipe" + c, _(m)),
                m.left.on("click" + c, k(m)),
                m.right.on("click" + c, K(m)),
                m.left.on("keydown" + c, W(m, k)),
                m.right.on("keydown" + c, W(m, K)),
                m.nav.on("keydown" + c, "> div", _(m)),
                m.config.autoplay &&
                  !m.hasTimer &&
                  ((m.hasTimer = !0), (m.timerCount = 1), $(m)),
                m.el.on("mouseenter" + c, L(m, !0, "mouse")),
                m.el.on("focusin" + c, L(m, !0, "keyboard")),
                m.el.on("mouseleave" + c, L(m, !1, "mouse")),
                m.el.on("focusout" + c, L(m, !1, "keyboard"))),
            m.nav.on("click" + c, "> div", _(m)),
            u ||
              m.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var le = S.filter(":hidden");
          le.addClass(h);
          var Te = S.parents(":hidden");
          Te.addClass(h), x || V(p, P), le.removeClass(h), Te.removeClass(h);
        }
        function F(p) {
          var P = {};
          (P.crossOver = 0),
            (P.animation = p.el.attr("data-animation") || "slide"),
            P.animation === "outin" &&
              ((P.animation = "cross"), (P.crossOver = 0.5)),
            (P.easing = p.el.attr("data-easing") || "ease");
          var S = p.el.attr("data-duration");
          if (
            ((P.duration = S != null ? parseInt(S, 10) : 500),
            G(p.el.attr("data-infinite")) && (P.infinite = !0),
            G(p.el.attr("data-disable-swipe")) && (P.disableSwipe = !0),
            G(p.el.attr("data-hide-arrows"))
              ? (P.hideArrows = !0)
              : p.config.hideArrows && (p.left.show(), p.right.show()),
            G(p.el.attr("data-autoplay")))
          ) {
            (P.autoplay = !0),
              (P.delay = parseInt(p.el.attr("data-delay"), 10) || 2e3),
              (P.timerMax = parseInt(p.el.attr("data-autoplay-limit"), 10));
            var m = "mousedown" + c + " touchstart" + c;
            a ||
              p.el.off(m).one(m, function () {
                M(p);
              });
          }
          var ie = p.right.width();
          (P.edge = ie ? ie + 40 : 100), (p.config = P);
        }
        function G(p) {
          return p === "1" || p === "true";
        }
        function L(p, P, S) {
          return function (m) {
            if (P) p.hasFocus[S] = P;
            else if (
              e.contains(p.el.get(0), m.relatedTarget) ||
              ((p.hasFocus[S] = P),
              (p.hasFocus.mouse && S === "keyboard") ||
                (p.hasFocus.keyboard && S === "mouse"))
            )
              return;
            P
              ? (p.ariaLiveLabel.attr("aria-live", "polite"),
                p.hasTimer && M(p))
              : (p.ariaLiveLabel.attr("aria-live", "off"), p.hasTimer && $(p));
          };
        }
        function W(p, P) {
          return function (S) {
            switch (S.keyCode) {
              case ht.SPACE:
              case ht.ENTER:
                return P(p)(), S.preventDefault(), S.stopPropagation();
            }
          };
        }
        function k(p) {
          return function () {
            X(p, { index: p.index - 1, vector: -1 });
          };
        }
        function K(p) {
          return function () {
            X(p, { index: p.index + 1, vector: 1 });
          };
        }
        function te(p, P) {
          var S = null;
          P === p.slides.length && (b(), z(p)),
            t.each(p.anchors, function (m, ie) {
              e(m.els).each(function (le, Te) {
                e(Te).index() === P && (S = ie);
              });
            }),
            S != null && X(p, { index: S, immediate: !0 });
        }
        function $(p) {
          M(p);
          var P = p.config,
            S = P.timerMax;
          (S && p.timerCount++ > S) ||
            (p.timerId = window.setTimeout(function () {
              p.timerId == null || a || (K(p)(), $(p));
            }, P.delay));
        }
        function M(p) {
          window.clearTimeout(p.timerId), (p.timerId = null);
        }
        function _(p) {
          return function (P, S) {
            S = S || {};
            var m = p.config;
            if (a && P.type === "setting") {
              if (S.select === "prev") return k(p)();
              if (S.select === "next") return K(p)();
              if ((F(p), z(p), S.select == null)) return;
              te(p, S.select);
              return;
            }
            if (P.type === "swipe")
              return m.disableSwipe || Lt.env("editor")
                ? void 0
                : S.direction === "left"
                ? K(p)()
                : S.direction === "right"
                ? k(p)()
                : void 0;
            if (p.nav.has(P.target).length) {
              var ie = e(P.target).index();
              if (
                (P.type === "click" && X(p, { index: ie }),
                P.type === "keydown")
              )
                switch (P.keyCode) {
                  case ht.ENTER:
                  case ht.SPACE: {
                    X(p, { index: ie }), P.preventDefault();
                    break;
                  }
                  case ht.ARROW_LEFT:
                  case ht.ARROW_UP: {
                    D(p.nav, Math.max(ie - 1, 0)), P.preventDefault();
                    break;
                  }
                  case ht.ARROW_RIGHT:
                  case ht.ARROW_DOWN: {
                    D(p.nav, Math.min(ie + 1, p.pages)), P.preventDefault();
                    break;
                  }
                  case ht.HOME: {
                    D(p.nav, 0), P.preventDefault();
                    break;
                  }
                  case ht.END: {
                    D(p.nav, p.pages), P.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function D(p, P) {
          var S = p.children().eq(P).focus();
          p.children().not(S);
        }
        function X(p, P) {
          P = P || {};
          var S = p.config,
            m = p.anchors;
          p.previous = p.index;
          var ie = P.index,
            le = {};
          ie < 0
            ? ((ie = m.length - 1),
              S.infinite &&
                ((le.x = -p.endX), (le.from = 0), (le.to = m[0].width)))
            : ie >= m.length &&
              ((ie = 0),
              S.infinite &&
                ((le.x = m[m.length - 1].width),
                (le.from = -m[m.length - 1].x),
                (le.to = le.from - le.x))),
            (p.index = ie);
          var Te = p.nav
            .children()
            .eq(ie)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          p.nav
            .children()
            .not(Te)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            S.hideArrows &&
              (p.index === m.length - 1 ? p.right.hide() : p.right.show(),
              p.index === 0 ? p.left.hide() : p.left.show());
          var Pe = p.offsetX || 0,
            Le = (p.offsetX = -m[p.index].x),
            se = { x: Le, opacity: 1, visibility: "" },
            d = e(m[p.index].els),
            U = e(m[p.previous] && m[p.previous].els),
            j = p.slides.not(d),
            B = S.animation,
            fe = S.easing,
            je = Math.round(S.duration),
            Et = P.vector || (p.index > p.previous ? 1 : -1),
            l = "opacity " + je + "ms " + fe,
            v = "transform " + je + "ms " + fe;
          if (
            (d.find(Jy).removeAttr("tabindex"),
            d.removeAttr("aria-hidden"),
            d.find("*").removeAttr("aria-hidden"),
            j.find(Jy).attr("tabindex", "-1"),
            j.attr("aria-hidden", "true"),
            j.find("*").attr("aria-hidden", "true"),
            a || (d.each(E.intro), j.each(E.outro)),
            P.immediate && !x)
          ) {
            n(d).set(se), C();
            return;
          }
          if (p.index === p.previous) return;
          if (
            (a || p.ariaLiveLabel.text(`Slide ${ie + 1} of ${m.length}.`),
            B === "cross")
          ) {
            var y = Math.round(je - je * S.crossOver),
              O = Math.round(je - y);
            (l = "opacity " + y + "ms " + fe),
              n(U).set({ visibility: "" }).add(l).start({ opacity: 0 }),
              n(d)
                .set({ visibility: "", x: Le, opacity: 0, zIndex: p.depth++ })
                .add(l)
                .wait(O)
                .then({ opacity: 1 })
                .then(C);
            return;
          }
          if (B === "fade") {
            n(U).set({ visibility: "" }).stop(),
              n(d)
                .set({ visibility: "", x: Le, opacity: 0, zIndex: p.depth++ })
                .add(l)
                .start({ opacity: 1 })
                .then(C);
            return;
          }
          if (B === "over") {
            (se = { x: p.endX }),
              n(U).set({ visibility: "" }).stop(),
              n(d)
                .set({
                  visibility: "",
                  zIndex: p.depth++,
                  x: Le + m[p.index].width * Et,
                })
                .add(v)
                .start({ x: Le })
                .then(C);
            return;
          }
          S.infinite && le.x
            ? (n(p.slides.not(U))
                .set({ visibility: "", x: le.x })
                .add(v)
                .start({ x: Le }),
              n(U)
                .set({ visibility: "", x: le.from })
                .add(v)
                .start({ x: le.to }),
              (p.shifted = U))
            : (S.infinite &&
                p.shifted &&
                (n(p.shifted).set({ visibility: "", x: Pe }),
                (p.shifted = null)),
              n(p.slides).set({ visibility: "" }).add(v).start({ x: Le }));
          function C() {
            (d = e(m[p.index].els)),
              (j = p.slides.not(d)),
              B !== "slide" && (se.visibility = "hidden"),
              n(j).set(se);
          }
        }
        function V(p, P) {
          var S = e.data(P, c);
          if (S) {
            if (ce(S)) return z(S);
            a && Se(S) && z(S);
          }
        }
        function z(p) {
          var P = 1,
            S = 0,
            m = 0,
            ie = 0,
            le = p.maskWidth,
            Te = le - p.config.edge;
          Te < 0 && (Te = 0),
            (p.anchors = [{ els: [], x: 0, width: 0 }]),
            p.slides.each(function (Le, se) {
              m - S > Te &&
                (P++,
                (S += le),
                (p.anchors[P - 1] = { els: [], x: m, width: 0 })),
                (ie = e(se).outerWidth(!0)),
                (m += ie),
                (p.anchors[P - 1].width += ie),
                p.anchors[P - 1].els.push(se);
              var d = Le + 1 + " of " + p.slides.length;
              e(se).attr("aria-label", d), e(se).attr("role", "group");
            }),
            (p.endX = m),
            a && (p.pages = null),
            p.nav.length && p.pages !== P && ((p.pages = P), Z(p));
          var Pe = p.index;
          Pe >= P && (Pe = P - 1), X(p, { immediate: !0, index: Pe });
        }
        function Z(p) {
          var P = [],
            S,
            m = p.el.attr("data-nav-spacing");
          m && (m = parseFloat(m) + "px");
          for (var ie = 0, le = p.pages; ie < le; ie++)
            (S = e(f)),
              S.attr("aria-label", "Show slide " + (ie + 1) + " of " + le)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              p.nav.hasClass("w-num") && S.text(ie + 1),
              m != null && S.css({ "margin-left": m, "margin-right": m }),
              P.push(S);
          p.nav.empty().append(P);
        }
        function ce(p) {
          var P = p.mask.width();
          return p.maskWidth !== P ? ((p.maskWidth = P), !0) : !1;
        }
        function Se(p) {
          var P = 0;
          return (
            p.slides.each(function (S, m) {
              P += e(m).outerWidth(!0);
            }),
            p.slidesWidth !== P ? ((p.slidesWidth = P), !0) : !1
          );
        }
        return r;
      })
    );
  });
  Cs();
  xs();
  Ps();
  vn();
  Hy();
  jy();
  zy();
  Qy();
  Zy();
  tI();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108a45e43aeb0|acf86b23-c5a0-da5f-012c-9e7bb5c3ba5a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108a45e43aeb0|acf86b23-c5a0-da5f-012c-9e7bb5c3ba5a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1653764870283,
    },
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108a45e43aeb0|acf86b23-c5a0-da5f-012c-9e7bb5c3ba5a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108a45e43aeb0|acf86b23-c5a0-da5f-012c-9e7bb5c3ba5a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1653764870284,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108a45e43aeb0|0c253594-46cd-f9b9-f39d-f146e4d16d69",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108a45e43aeb0|0c253594-46cd-f9b9-f39d-f146e4d16d69",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1656959669448,
    },
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108a45e43aeb0|0c253594-46cd-f9b9-f39d-f146e4d16d69",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108a45e43aeb0|0c253594-46cd-f9b9-f39d-f146e4d16d69",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1656959669448,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-96",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".navbar-sections",
        originalId:
          "62f133b92f2108a45e43aeb0|f440398d-147f-e1c1-ad8c-414791a9526d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".navbar-sections",
          originalId:
            "62f133b92f2108a45e43aeb0|f440398d-147f-e1c1-ad8c-414791a9526d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1657054539886,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-95",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".navbar-sections",
        originalId:
          "62f133b92f2108a45e43aeb0|f440398d-147f-e1c1-ad8c-414791a9526d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".navbar-sections",
          originalId:
            "62f133b92f2108a45e43aeb0|f440398d-147f-e1c1-ad8c-414791a9526d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1657054539886,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".contain-social",
        originalId:
          "62f133b92f2108a45e43aeb0|91237215-9f7a-8444-fb80-393e3a7385ce",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".contain-social",
          originalId:
            "62f133b92f2108a45e43aeb0|91237215-9f7a-8444-fb80-393e3a7385ce",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1657058575991,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".contain-social",
        originalId:
          "62f133b92f2108a45e43aeb0|91237215-9f7a-8444-fb80-393e3a7385ce",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".contain-social",
          originalId:
            "62f133b92f2108a45e43aeb0|91237215-9f7a-8444-fb80-393e3a7385ce",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1657058575992,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108f00443aec1|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108f00443aec1|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1657228442229,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108f00443aec1|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108f00443aec1|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1657228442229,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108f00443aec1|2f3a47f4-6f8e-6c43-eada-dc60b254ae49",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108f00443aec1|2f3a47f4-6f8e-6c43-eada-dc60b254ae49",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1657228535939,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108f00443aec1|2f3a47f4-6f8e-6c43-eada-dc60b254ae49",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108f00443aec1|2f3a47f4-6f8e-6c43-eada-dc60b254ae49",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1657228535939,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108a45e43aeb0|c015265b-331e-fe0b-3afc-a12b554c8f4c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108a45e43aeb0|c015265b-331e-fe0b-3afc-a12b554c8f4c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1657926324335,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108a45e43aeb0|c015265b-331e-fe0b-3afc-a12b554c8f4c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108a45e43aeb0|c015265b-331e-fe0b-3afc-a12b554c8f4c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1657926324335,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-26",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108000d43aec4|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108000d43aec4|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658075067474,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-25",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108000d43aec4|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108000d43aec4|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658075067474,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".contain-social",
        originalId:
          "62d49dca727756211b8add04|91237215-9f7a-8444-fb80-393e3a7385ce",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".contain-social",
          originalId:
            "62d49dca727756211b8add04|91237215-9f7a-8444-fb80-393e3a7385ce",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1657058575991,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".contain-social",
        originalId:
          "62d49dca727756211b8add04|91237215-9f7a-8444-fb80-393e3a7385ce",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".contain-social",
          originalId:
            "62d49dca727756211b8add04|91237215-9f7a-8444-fb80-393e3a7385ce",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1657058575992,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "4cc9afc5-3582-0ce1-c106-95b8d122a13b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "4cc9afc5-3582-0ce1-c106-95b8d122a13b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658165443615,
    },
    "e-40": {
      id: "e-40",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "4cc9afc5-3582-0ce1-c106-95b8d122a13b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "4cc9afc5-3582-0ce1-c106-95b8d122a13b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658165443616,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-42",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108f00443aec1|02162136-4ee5-3d67-8801-8a86c6521624",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108f00443aec1|02162136-4ee5-3d67-8801-8a86c6521624",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658168410234,
    },
    "e-42": {
      id: "e-42",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-41",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108f00443aec1|02162136-4ee5-3d67-8801-8a86c6521624",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108f00443aec1|02162136-4ee5-3d67-8801-8a86c6521624",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658168410234,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108dfe843aec6|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108dfe843aec6|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658180940847,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-45",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108dfe843aec6|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108dfe843aec6|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658180940847,
    },
    "e-49": {
      id: "e-49",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-50",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108dfe843aec6|f9f6d829-ffb0-5806-76e9-321f8b196e3b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108dfe843aec6|f9f6d829-ffb0-5806-76e9-321f8b196e3b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658188594273,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108dfe843aec6|f9f6d829-ffb0-5806-76e9-321f8b196e3b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108dfe843aec6|f9f6d829-ffb0-5806-76e9-321f8b196e3b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658188594273,
    },
    "e-51": {
      id: "e-51",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-52",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108000d43aec4|f711a5f0-0e81-a9a5-6811-26607d587047",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108000d43aec4|f711a5f0-0e81-a9a5-6811-26607d587047",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658188629687,
    },
    "e-52": {
      id: "e-52",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-51",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108000d43aec4|f711a5f0-0e81-a9a5-6811-26607d587047",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108000d43aec4|f711a5f0-0e81-a9a5-6811-26607d587047",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658188629687,
    },
    "e-53": {
      id: "e-53",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-54",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108a45e43aeb0|177b1fec-2954-8ef1-cec4-39092bdd57a5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108a45e43aeb0|177b1fec-2954-8ef1-cec4-39092bdd57a5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658191409207,
    },
    "e-54": {
      id: "e-54",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-53",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108a45e43aeb0|177b1fec-2954-8ef1-cec4-39092bdd57a5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108a45e43aeb0|177b1fec-2954-8ef1-cec4-39092bdd57a5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658191409207,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-56",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f210822dd43aec5|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f210822dd43aec5|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658690120996,
    },
    "e-56": {
      id: "e-56",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-55",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f210822dd43aec5|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f210822dd43aec5|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658690120996,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f210822dd43aec5|f9f6d829-ffb0-5806-76e9-321f8b196e3b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f210822dd43aec5|f9f6d829-ffb0-5806-76e9-321f8b196e3b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658690120996,
    },
    "e-58": {
      id: "e-58",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-57",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f210822dd43aec5|f9f6d829-ffb0-5806-76e9-321f8b196e3b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f210822dd43aec5|f9f6d829-ffb0-5806-76e9-321f8b196e3b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658690120996,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108dfe843aec6",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108dfe843aec6",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658783731048,
    },
    "e-64": {
      id: "e-64",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-63",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108000d43aec4",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108000d43aec4",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658783962614,
    },
    "e-70": {
      id: "e-70",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-69",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f210822dd43aec5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f210822dd43aec5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658803919929,
    },
    "e-74": {
      id: "e-74",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-73",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108f00443aec1",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108f00443aec1",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658806204556,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-76",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".problem-sort",
        originalId:
          "62f133b92f2108f00443aec1|eb94825d-dea9-da5f-9bc6-c3d9c92044fa",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".problem-sort",
          originalId:
            "62f133b92f2108f00443aec1|eb94825d-dea9-da5f-9bc6-c3d9c92044fa",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658806780951,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".challenge-details",
        originalId:
          "62f133b92f2108f00443aec1|5addcd7a-a64a-adfe-b2a8-c54ae2a8710c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".challenge-details",
          originalId:
            "62f133b92f2108f00443aec1|5addcd7a-a64a-adfe-b2a8-c54ae2a8710c",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658807941217,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-80" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".project_content",
        originalId:
          "62f133b92f2108f00443aec1|03279dda-ee50-b56f-fae2-583c68e3d054",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".project_content",
          originalId:
            "62f133b92f2108f00443aec1|03279dda-ee50-b56f-fae2-583c68e3d054",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 12,
        scrollOffsetUnit: "%",
        delay: 2,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1658865864754,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-82",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108a45e43aeb0|7cfd5b02-98c8-ebd2-eb68-a792585cac6a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108a45e43aeb0|7cfd5b02-98c8-ebd2-eb68-a792585cac6a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658867472766,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-84",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108a45e43aeb0|02c44134-27b3-45b3-83f1-e85342708a05",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108a45e43aeb0|02c44134-27b3-45b3-83f1-e85342708a05",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1658868744995,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-86" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".work-block",
        originalId:
          "62f133b92f2108a45e43aeb0|41090a37-f077-b4b2-a320-ce5ce75e3cdf",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".work-block",
          originalId:
            "62f133b92f2108a45e43aeb0|41090a37-f077-b4b2-a320-ce5ce75e3cdf",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 12,
        scrollOffsetUnit: "%",
        delay: 2,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1658869390629,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-90",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "eb5e0479-35f2-662f-6afe-05d9f3f189a3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "eb5e0479-35f2-662f-6afe-05d9f3f189a3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1659641886947,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-92",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "a0698cb4-6d7b-f45e-9df8-60142be50a18",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "a0698cb4-6d7b-f45e-9df8-60142be50a18",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1659642242742,
    },
    "e-93": {
      id: "e-93",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-94",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c0bfa2a-07a7-807c-b3ea-e48846fe7eef",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c0bfa2a-07a7-807c-b3ea-e48846fe7eef",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1659749106583,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-96",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".navbar-sections-2",
        originalId:
          "62f29413cbc47f1b90073de2|f440398d-147f-e1c1-ad8c-414791a9526d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".navbar-sections-2",
          originalId:
            "62f29413cbc47f1b90073de2|f440398d-147f-e1c1-ad8c-414791a9526d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1657054539886,
    },
    "e-96": {
      id: "e-96",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-95",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".navbar-sections-2",
        originalId:
          "62f29413cbc47f1b90073de2|f440398d-147f-e1c1-ad8c-414791a9526d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".navbar-sections-2",
          originalId:
            "62f29413cbc47f1b90073de2|f440398d-147f-e1c1-ad8c-414791a9526d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1657054539886,
    },
    "e-97": {
      id: "e-97",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-98",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108a45e43aeb0|ceb8c6b5-9382-38ff-36de-f4a171e390f8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108a45e43aeb0|ceb8c6b5-9382-38ff-36de-f4a171e390f8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1660064948974,
    },
    "e-99": {
      id: "e-99",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-100",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108a45e43aeb0|ceb8c6b5-9382-38ff-36de-f4a171e390f9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108a45e43aeb0|ceb8c6b5-9382-38ff-36de-f4a171e390f9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1660064948974,
    },
    "e-101": {
      id: "e-101",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-102",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "62f133b92f2108a45e43aeb0|ceb8c6b5-9382-38ff-36de-f4a171e390fe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108a45e43aeb0|ceb8c6b5-9382-38ff-36de-f4a171e390fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1660064948974,
    },
    "e-103": {
      id: "e-103",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-104",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f2966a03388acbb8856958|845b032b-dd17-a0b7-04e4-a4b0b4a5fafa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f2966a03388acbb8856958|845b032b-dd17-a0b7-04e4-a4b0b4a5fafa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1660065946350,
    },
    "e-104": {
      id: "e-104",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-103",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f2966a03388acbb8856958|845b032b-dd17-a0b7-04e4-a4b0b4a5fafa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f2966a03388acbb8856958|845b032b-dd17-a0b7-04e4-a4b0b4a5fafa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1660065946350,
    },
    "e-105": {
      id: "e-105",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-106",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108f00443aec1",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108f00443aec1",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1660076076060,
    },
    "e-106": {
      id: "e-106",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-105",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108f00443aec1",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108f00443aec1",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1660076076085,
    },
    "e-107": {
      id: "e-107",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-108",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108dfe843aec6",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108dfe843aec6",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1660076503833,
    },
    "e-108": {
      id: "e-108",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-107",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108dfe843aec6",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108dfe843aec6",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1660076503833,
    },
    "e-109": {
      id: "e-109",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-110",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108000d43aec4",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108000d43aec4",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1660076540802,
    },
    "e-110": {
      id: "e-110",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-109",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108000d43aec4",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108000d43aec4",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1660076540803,
    },
    "e-111": {
      id: "e-111",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-112",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f210822dd43aec5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f210822dd43aec5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1660076567394,
    },
    "e-112": {
      id: "e-112",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-111",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f210822dd43aec5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f210822dd43aec5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1660076567395,
    },
    "e-113": {
      id: "e-113",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-114",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108a45e43aeb0",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108a45e43aeb0",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1660076609056,
    },
    "e-114": {
      id: "e-114",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-113",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f133b92f2108a45e43aeb0",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f133b92f2108a45e43aeb0",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1660076609082,
    },
    "e-115": {
      id: "e-115",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-116",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f2966a03388acbb8856958",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f2966a03388acbb8856958",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1660076644864,
    },
    "e-116": {
      id: "e-116",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-115",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "62f2966a03388acbb8856958",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "62f2966a03388acbb8856958",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1660076644865,
    },
    "e-117": {
      id: "e-117",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-118",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6393623b5b8327a24e15ff8a|177b1fec-2954-8ef1-cec4-39092bdd57a4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6393623b5b8327a24e15ff8a|177b1fec-2954-8ef1-cec4-39092bdd57a4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: null,
        effectIn: null,
      },
      createdOn: 1670608212771,
    },
    "e-118": {
      id: "e-118",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-117",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6393623b5b8327a24e15ff8a|177b1fec-2954-8ef1-cec4-39092bdd57a4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6393623b5b8327a24e15ff8a|177b1fec-2954-8ef1-cec4-39092bdd57a4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1670608212772,
    },
    "e-119": {
      id: "e-119",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-120",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "639377db420c81ca1d849c90|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "639377db420c81ca1d849c90|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1670608860007,
    },
    "e-120": {
      id: "e-120",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-119",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "639377db420c81ca1d849c90|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "639377db420c81ca1d849c90|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1670608860007,
    },
    "e-123": {
      id: "e-123",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-124",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "639377db420c81ca1d849c90|02162136-4ee5-3d67-8801-8a86c6521624",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "639377db420c81ca1d849c90|02162136-4ee5-3d67-8801-8a86c6521624",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1670608860007,
    },
    "e-124": {
      id: "e-124",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-123",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "639377db420c81ca1d849c90|02162136-4ee5-3d67-8801-8a86c6521624",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "639377db420c81ca1d849c90|02162136-4ee5-3d67-8801-8a86c6521624",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1670608860007,
    },
    "e-126": {
      id: "e-126",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-125",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "639377db420c81ca1d849c90",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "639377db420c81ca1d849c90",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1670608860007,
    },
    "e-127": {
      id: "e-127",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-128",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "639377db420c81ca1d849c90",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "639377db420c81ca1d849c90",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1670608860007,
    },
    "e-128": {
      id: "e-128",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-127",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "639377db420c81ca1d849c90",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "639377db420c81ca1d849c90",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1670608860007,
    },
    "e-129": {
      id: "e-129",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-130",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6393623b5b8327a24e15ff8a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6393623b5b8327a24e15ff8a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1670718986887,
    },
    "e-130": {
      id: "e-130",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-129",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6393623b5b8327a24e15ff8a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6393623b5b8327a24e15ff8a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1670718986914,
    },
    "e-133": {
      id: "e-133",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-134",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "639a1c92bfdfd9562cbe88d5|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "639a1c92bfdfd9562cbe88d5|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671044241849,
    },
    "e-134": {
      id: "e-134",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-133",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "639a1c92bfdfd9562cbe88d5|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "639a1c92bfdfd9562cbe88d5|360d8a22-0a65-c9b9-d6b3-8228448c7af2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671044241849,
    },
    "e-135": {
      id: "e-135",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-136",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "639a1c92bfdfd9562cbe88d5|02162136-4ee5-3d67-8801-8a86c6521624",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "639a1c92bfdfd9562cbe88d5|02162136-4ee5-3d67-8801-8a86c6521624",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671044241849,
    },
    "e-136": {
      id: "e-136",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-135",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "639a1c92bfdfd9562cbe88d5|02162136-4ee5-3d67-8801-8a86c6521624",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "639a1c92bfdfd9562cbe88d5|02162136-4ee5-3d67-8801-8a86c6521624",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671044241849,
    },
    "e-138": {
      id: "e-138",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-137",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "639a1c92bfdfd9562cbe88d5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "639a1c92bfdfd9562cbe88d5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671044241849,
    },
    "e-139": {
      id: "e-139",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-140",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "639a1c92bfdfd9562cbe88d5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "639a1c92bfdfd9562cbe88d5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671044241849,
    },
    "e-140": {
      id: "e-140",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-139",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "639a1c92bfdfd9562cbe88d5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "639a1c92bfdfd9562cbe88d5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671044241849,
    },
    "e-141": {
      id: "e-141",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-39",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-142",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6393623b5b8327a24e15ff8a|967aaf60-b7af-cc0a-261d-687d6531096a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6393623b5b8327a24e15ff8a|967aaf60-b7af-cc0a-261d-687d6531096a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671045004285,
    },
    "e-142": {
      id: "e-142",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-141",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6393623b5b8327a24e15ff8a|967aaf60-b7af-cc0a-261d-687d6531096a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6393623b5b8327a24e15ff8a|967aaf60-b7af-cc0a-261d-687d6531096a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1671045004286,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "Show/Sprout",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "62f133b92f2108a45e43aeb0|a59a610e-eb06-9ff9-04a9-202f5d35d8f7",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|13cf5102-26bf-0efb-3db4-b726c472d785",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|13cf5102-26bf-0efb-3db4-b726c472d785",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-n-8",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|52afa86a-129e-2d2e-d7f9-a2d7a347301b",
                },
                value: "none",
              },
            },
            {
              id: "a-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-2",
                  selectorGuids: ["654beb2b-4ec8-647e-3e77-e82d78a387e0"],
                },
                globalSwatchId: "369a2f90",
                rValue: 226,
                bValue: 106,
                gValue: 106,
                aValue: 1,
              },
            },
            {
              id: "a-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-2",
                  selectorGuids: ["654beb2b-4ec8-647e-3e77-e82d78a387e0"],
                },
                yValue: -48,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-14",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".working-img",
                  selectorGuids: ["1b8eb7b3-a6e8-88bd-8165-e325fb97c12b"],
                },
                xValue: 1.1,
                yValue: 1.1,
                zValue: 1,
                locked: true,
              },
            },
            {
              id: "a-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "62f133b92f2108a45e43aeb0|a59a610e-eb06-9ff9-04a9-202f5d35d8f7",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 500,
                target: {
                  id: "62f133b92f2108a45e43aeb0|a59a610e-eb06-9ff9-04a9-202f5d35d8f7",
                },
                yValue: -55,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1653763653642,
    },
    "a-2": {
      id: "a-2",
      title: "hide/Sprout",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-background",
                  selectorGuids: ["038a57a7-ce65-e19b-06fb-7f65915c8e0d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".working-img",
                  selectorGuids: ["1b8eb7b3-a6e8-88bd-8165-e325fb97c12b"],
                },
                xValue: 1,
                yValue: 1,
                zValue: 1,
                locked: true,
              },
            },
            {
              id: "a-2-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-2",
                  selectorGuids: ["654beb2b-4ec8-647e-3e77-e82d78a387e0"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-2",
                  selectorGuids: ["654beb2b-4ec8-647e-3e77-e82d78a387e0"],
                },
                globalSwatchId: "35a538aa",
                rValue: 32,
                bValue: 34,
                gValue: 32,
                aValue: 1,
              },
            },
            {
              id: "a-2-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-5",
                  selectorGuids: ["d55e77bb-a3f3-99da-77a7-833f346721f1"],
                },
                value: "block",
              },
            },
            {
              id: "a-2-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 200,
                target: {
                  selector: ".prj-desc",
                  selectorGuids: ["06537d59-1dbc-8bd8-7772-57044838cef7"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".prj-desc",
                  selectorGuids: ["06537d59-1dbc-8bd8-7772-57044838cef7"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1653763653642,
    },
    "a-4": {
      id: "a-4",
      title: "Show/Orvos",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|0c253594-46cd-f9b9-f39d-f146e4d16d74",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|0c253594-46cd-f9b9-f39d-f146e4d16d6d",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|0c253594-46cd-f9b9-f39d-f146e4d16d6d",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|0c253594-46cd-f9b9-f39d-f146e4d16d72",
                },
                value: "none",
              },
            },
            {
              id: "a-4-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-2",
                  selectorGuids: ["654beb2b-4ec8-647e-3e77-e82d78a387e0"],
                },
                globalSwatchId: "112daabc",
                rValue: 72,
                bValue: 148,
                gValue: 80,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-2",
                  selectorGuids: ["654beb2b-4ec8-647e-3e77-e82d78a387e0"],
                },
                yValue: -48,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".working-img",
                  selectorGuids: ["1b8eb7b3-a6e8-88bd-8165-e325fb97c12b"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-4-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|0c253594-46cd-f9b9-f39d-f146e4d16d74",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|0c253594-46cd-f9b9-f39d-f146e4d16d74",
                },
                yValue: -55,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1656964650968,
    },
    "a-5": {
      id: "a-5",
      title: "Nav Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "62f133b92f2108a45e43aeb0|153f70e3-8a4c-fdb8-7684-3191f282256c",
                },
                xValue: 0,
                yValue: -6,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1657054350042,
    },
    "a-6": {
      id: "a-6",
      title: "Nav Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "62f133b92f2108a45e43aeb0|153f70e3-8a4c-fdb8-7684-3191f282256c",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "62f133b92f2108a45e43aeb0|153f70e3-8a4c-fdb8-7684-3191f282256c",
                },
                globalSwatchId: "35a538aa",
                rValue: 32,
                bValue: 34,
                gValue: 32,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1657054350042,
    },
    "a-10": {
      id: "a-10",
      title: "Social-arrow-hov",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-hover",
                  selectorGuids: ["f8491cab-c22e-7f23-3363-46e0e0a5d479"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-10-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-hover",
                  selectorGuids: ["f8491cab-c22e-7f23-3363-46e0e0a5d479"],
                },
                xValue: -24,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-hover",
                  selectorGuids: ["f8491cab-c22e-7f23-3363-46e0e0a5d479"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-10-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-hover",
                  selectorGuids: ["f8491cab-c22e-7f23-3363-46e0e0a5d479"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1657058580558,
    },
    "a-11": {
      id: "a-11",
      title: "Social-arrow-hov out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-hover",
                  selectorGuids: ["f8491cab-c22e-7f23-3363-46e0e0a5d479"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-11-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-hover",
                  selectorGuids: ["f8491cab-c22e-7f23-3363-46e0e0a5d479"],
                },
                xValue: -24,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1657058580558,
    },
    "a-16": {
      id: "a-16",
      title: "Show/SDG",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|c015265b-331e-fe0b-3afc-a12b554c8f55",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|c015265b-331e-fe0b-3afc-a12b554c8f4f",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|c015265b-331e-fe0b-3afc-a12b554c8f4f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|c015265b-331e-fe0b-3afc-a12b554c8f53",
                },
                value: "none",
              },
            },
            {
              id: "a-16-n-5",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-2.sdg",
                  selectorGuids: [
                    "654beb2b-4ec8-647e-3e77-e82d78a387e0",
                    "10dbde70-7776-98b8-815c-d7f6bb841d88",
                  ],
                },
                globalSwatchId: "21d1d0b9",
                rValue: 0,
                bValue: 217,
                gValue: 174,
                aValue: 1,
              },
            },
            {
              id: "a-16-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-2.sdg",
                  selectorGuids: [
                    "654beb2b-4ec8-647e-3e77-e82d78a387e0",
                    "10dbde70-7776-98b8-815c-d7f6bb841d88",
                  ],
                },
                yValue: -48,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".working-img.sdg",
                  selectorGuids: [
                    "1b8eb7b3-a6e8-88bd-8165-e325fb97c12b",
                    "675a0cc5-10a1-9ae2-d059-e78276ef1b60",
                  ],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-16-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|c015265b-331e-fe0b-3afc-a12b554c8f55",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|c015265b-331e-fe0b-3afc-a12b554c8f55",
                },
                yValue: -48,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1657926721206,
    },
    "a-17": {
      id: "a-17",
      title: "Social-arrow-hov 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-hover-2",
                  selectorGuids: ["ebc7d430-b098-a955-1be7-4d018e118c06"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-17-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-hover-2",
                  selectorGuids: ["ebc7d430-b098-a955-1be7-4d018e118c06"],
                },
                xValue: -24,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-17-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-hover-2",
                  selectorGuids: ["ebc7d430-b098-a955-1be7-4d018e118c06"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-17-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-hover-2",
                  selectorGuids: ["ebc7d430-b098-a955-1be7-4d018e118c06"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1657058580558,
    },
    "a-18": {
      id: "a-18",
      title: "Social-arrow-hov out 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-hover-2",
                  selectorGuids: ["ebc7d430-b098-a955-1be7-4d018e118c06"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-18-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow-hover-2",
                  selectorGuids: ["ebc7d430-b098-a955-1be7-4d018e118c06"],
                },
                xValue: -24,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1657058580558,
    },
    "a-19": {
      id: "a-19",
      title: "Prototype Link",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".text-block-18",
                  selectorGuids: ["8423a207-16d5-416c-29c4-3d52e4e03b20"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-19-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".text-block-18",
                  selectorGuids: ["8423a207-16d5-416c-29c4-3d52e4e03b20"],
                },
                xValue: -32,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".text-block-18",
                  selectorGuids: ["8423a207-16d5-416c-29c4-3d52e4e03b20"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-19-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".text-block-18",
                  selectorGuids: ["8423a207-16d5-416c-29c4-3d52e4e03b20"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-19-n-5",
              actionTypeId: "TRANSFORM_SKEW",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  selector: ".button-label",
                  selectorGuids: ["2688b48d-2fdb-7782-aa16-ba1087e21ee0"],
                },
                xValue: -6,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1658165601584,
    },
    "a-20": {
      id: "a-20",
      title: "Prototype Link Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".text-block-18",
                  selectorGuids: ["8423a207-16d5-416c-29c4-3d52e4e03b20"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".text-block-18",
                  selectorGuids: ["8423a207-16d5-416c-29c4-3d52e4e03b20"],
                },
                xValue: -32,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-3",
              actionTypeId: "TRANSFORM_SKEW",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  selector: ".button-label",
                  selectorGuids: ["2688b48d-2fdb-7782-aa16-ba1087e21ee0"],
                },
                xValue: 0,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1658165601584,
    },
    "a-21": {
      id: "a-21",
      title: "Other Work",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".check-other-work-arrow",
                  selectorGuids: ["bfd672bd-2634-d928-1e74-1919c4cf17bf"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".check-other-work-arrow",
                  selectorGuids: ["bfd672bd-2634-d928-1e74-1919c4cf17bf"],
                },
                xValue: -32,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-21-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".check-other-work-arrow",
                  selectorGuids: ["bfd672bd-2634-d928-1e74-1919c4cf17bf"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-21-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".check-other-work-arrow",
                  selectorGuids: ["bfd672bd-2634-d928-1e74-1919c4cf17bf"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-5",
              actionTypeId: "TRANSFORM_SKEW",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".check-other-work.orvos",
                  selectorGuids: [
                    "8b169b7e-46e2-50d4-7d22-daecd9165db0",
                    "6e15f7fb-e1f3-4269-b578-5e9959109813",
                  ],
                },
                xValue: -4,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1658168421138,
    },
    "a-22": {
      id: "a-22",
      title: "Other Work Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-22-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".check-other-work-arrow",
                  selectorGuids: ["bfd672bd-2634-d928-1e74-1919c4cf17bf"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-22-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".check-other-work-arrow",
                  selectorGuids: ["bfd672bd-2634-d928-1e74-1919c4cf17bf"],
                },
                xValue: -32,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-3",
              actionTypeId: "TRANSFORM_SKEW",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".check-other-work.orvos",
                  selectorGuids: [
                    "8b169b7e-46e2-50d4-7d22-daecd9165db0",
                    "6e15f7fb-e1f3-4269-b578-5e9959109813",
                  ],
                },
                xValue: 0,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1658168421138,
    },
    "a-23": {
      id: "a-23",
      title: "Show/Simplifi",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-23-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|177b1fec-2954-8ef1-cec4-39092bdd57ae",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-23-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|177b1fec-2954-8ef1-cec4-39092bdd57a8",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-23-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|177b1fec-2954-8ef1-cec4-39092bdd57a8",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-23-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|177b1fec-2954-8ef1-cec4-39092bdd57ac",
                },
                value: "none",
              },
            },
            {
              id: "a-23-n-5",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-2.projectL",
                  selectorGuids: [
                    "654beb2b-4ec8-647e-3e77-e82d78a387e0",
                    "e7cad44c-dbd5-745b-c3c9-a2962cf70dfe",
                  ],
                },
                globalSwatchId: "ffd5b525",
                rValue: 169,
                bValue: 75,
                gValue: 205,
                aValue: 1,
              },
            },
            {
              id: "a-23-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-2.projectL",
                  selectorGuids: [
                    "654beb2b-4ec8-647e-3e77-e82d78a387e0",
                    "e7cad44c-dbd5-745b-c3c9-a2962cf70dfe",
                  ],
                },
                yValue: -48,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".working-img.projectL",
                  selectorGuids: [
                    "1b8eb7b3-a6e8-88bd-8165-e325fb97c12b",
                    "b04ff69a-f319-9cdb-239d-862f81fbba05",
                  ],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-23-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|177b1fec-2954-8ef1-cec4-39092bdd57ae",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-23-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|177b1fec-2954-8ef1-cec4-39092bdd57ae",
                },
                yValue: -48,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1658689057060,
    },
    "a-24": {
      id: "a-24",
      title: "Intro Load",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-24-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".heading-2",
                  selectorGuids: ["654beb2b-4ec8-647e-3e77-e82d78a387e0"],
                },
                xValue: null,
                yValue: 28,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".heading-2",
                  selectorGuids: ["654beb2b-4ec8-647e-3e77-e82d78a387e0"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-24-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".heading-5",
                  selectorGuids: ["d55e77bb-a3f3-99da-77a7-833f346721f1"],
                },
                xValue: null,
                yValue: 32,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".heading-5",
                  selectorGuids: ["d55e77bb-a3f3-99da-77a7-833f346721f1"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-24-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".body-sml-text.project-intro-desc",
                  selectorGuids: [
                    "9f7832ad-30a4-7f85-286c-f7cfeefd1e72",
                    "e84ac5ce-426e-8f25-6830-2c00f7b64e16",
                  ],
                },
                xValue: null,
                yValue: 42,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".body-sml-text.project-intro-desc",
                  selectorGuids: [
                    "9f7832ad-30a4-7f85-286c-f7cfeefd1e72",
                    "e84ac5ce-426e-8f25-6830-2c00f7b64e16",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-24-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".image-4",
                  selectorGuids: ["55e640f8-c5cb-3a67-feb8-85ef6d85bd48"],
                },
                xValue: 64,
                yValue: null,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".image-4",
                  selectorGuids: ["55e640f8-c5cb-3a67-feb8-85ef6d85bd48"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-24-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inQuart",
                duration: 500,
                target: {
                  selector: ".body-sml-text.project-intro-desc",
                  selectorGuids: [
                    "9f7832ad-30a4-7f85-286c-f7cfeefd1e72",
                    "e84ac5ce-426e-8f25-6830-2c00f7b64e16",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-24-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 1000,
                target: {
                  selector: ".body-sml-text.project-intro-desc",
                  selectorGuids: [
                    "9f7832ad-30a4-7f85-286c-f7cfeefd1e72",
                    "e84ac5ce-426e-8f25-6830-2c00f7b64e16",
                  ],
                },
                xValue: null,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inQuart",
                duration: 500,
                target: {
                  selector: ".heading-5",
                  selectorGuids: ["d55e77bb-a3f3-99da-77a7-833f346721f1"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-24-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 1000,
                target: {
                  selector: ".heading-5",
                  selectorGuids: ["d55e77bb-a3f3-99da-77a7-833f346721f1"],
                },
                xValue: null,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inQuart",
                duration: 500,
                target: {
                  selector: ".heading-2",
                  selectorGuids: ["654beb2b-4ec8-647e-3e77-e82d78a387e0"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-24-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 1000,
                target: {
                  selector: ".heading-2",
                  selectorGuids: ["654beb2b-4ec8-647e-3e77-e82d78a387e0"],
                },
                xValue: null,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inQuart",
                duration: 500,
                target: {
                  selector: ".image-4",
                  selectorGuids: ["55e640f8-c5cb-3a67-feb8-85ef6d85bd48"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-24-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outBack",
                duration: 1000,
                target: {
                  selector: ".image-4",
                  selectorGuids: ["55e640f8-c5cb-3a67-feb8-85ef6d85bd48"],
                },
                xValue: 0,
                yValue: null,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1658783439668,
    },
    "a-25": {
      id: "a-25",
      title: "Problems/Roles",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".orvos-problem",
                  selectorGuids: ["c2a2bde9-7e08-7bff-c2d7-02914588be09"],
                },
                yValue: 24,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".orvos-problem",
                  selectorGuids: ["c2a2bde9-7e08-7bff-c2d7-02914588be09"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-25-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".role-team-tools.role",
                  selectorGuids: [
                    "f1b3ef46-beb0-a5d7-45f7-b139c39565ff",
                    "7efdda7b-a73a-ed4e-64eb-e97eb0155fb0",
                  ],
                },
                yValue: 28,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".role-team-tools.role",
                  selectorGuids: [
                    "f1b3ef46-beb0-a5d7-45f7-b139c39565ff",
                    "7efdda7b-a73a-ed4e-64eb-e97eb0155fb0",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-25-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".role-team-tools.team",
                  selectorGuids: [
                    "f1b3ef46-beb0-a5d7-45f7-b139c39565ff",
                    "f750e5e2-4123-9fdb-a302-651b83c04622",
                  ],
                },
                yValue: 48,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".role-team-tools.team",
                  selectorGuids: [
                    "f1b3ef46-beb0-a5d7-45f7-b139c39565ff",
                    "f750e5e2-4123-9fdb-a302-651b83c04622",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-25-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".role-team-tools.tools",
                  selectorGuids: [
                    "f1b3ef46-beb0-a5d7-45f7-b139c39565ff",
                    "c6d6314f-648f-e95e-0361-7c0e9c5e820c",
                  ],
                },
                yValue: 64,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".role-team-tools.tools",
                  selectorGuids: [
                    "f1b3ef46-beb0-a5d7-45f7-b139c39565ff",
                    "c6d6314f-648f-e95e-0361-7c0e9c5e820c",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-25-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-links",
                  selectorGuids: ["351cefd9-0423-b4b6-f7f5-a339956d0ce2"],
                },
                yValue: 84,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-links",
                  selectorGuids: ["351cefd9-0423-b4b6-f7f5-a339956d0ce2"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-25-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outBack",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-links",
                  selectorGuids: ["351cefd9-0423-b4b6-f7f5-a339956d0ce2"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".project-links",
                  selectorGuids: ["351cefd9-0423-b4b6-f7f5-a339956d0ce2"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-25-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".orvos-problem",
                  selectorGuids: ["c2a2bde9-7e08-7bff-c2d7-02914588be09"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-25-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outBack",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".orvos-problem",
                  selectorGuids: ["c2a2bde9-7e08-7bff-c2d7-02914588be09"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outBack",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".role-team-tools.role",
                  selectorGuids: [
                    "f1b3ef46-beb0-a5d7-45f7-b139c39565ff",
                    "7efdda7b-a73a-ed4e-64eb-e97eb0155fb0",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".role-team-tools.role",
                  selectorGuids: [
                    "f1b3ef46-beb0-a5d7-45f7-b139c39565ff",
                    "7efdda7b-a73a-ed4e-64eb-e97eb0155fb0",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-25-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outBack",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".role-team-tools.team",
                  selectorGuids: [
                    "f1b3ef46-beb0-a5d7-45f7-b139c39565ff",
                    "f750e5e2-4123-9fdb-a302-651b83c04622",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".role-team-tools.team",
                  selectorGuids: [
                    "f1b3ef46-beb0-a5d7-45f7-b139c39565ff",
                    "f750e5e2-4123-9fdb-a302-651b83c04622",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-25-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outBack",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".role-team-tools.tools",
                  selectorGuids: [
                    "f1b3ef46-beb0-a5d7-45f7-b139c39565ff",
                    "c6d6314f-648f-e95e-0361-7c0e9c5e820c",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".role-team-tools.tools",
                  selectorGuids: [
                    "f1b3ef46-beb0-a5d7-45f7-b139c39565ff",
                    "c6d6314f-648f-e95e-0361-7c0e9c5e820c",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1658805187556,
    },
    "a-27": {
      id: "a-27",
      title: "Challenge",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".challenge-details",
                  selectorGuids: ["165aecec-203a-9af7-67db-cf84f1a4a3af"],
                },
                yValue: 28,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".challenge-details",
                  selectorGuids: ["165aecec-203a-9af7-67db-cf84f1a4a3af"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outBack",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".challenge-details",
                  selectorGuids: ["165aecec-203a-9af7-67db-cf84f1a4a3af"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".challenge-details",
                  selectorGuids: ["165aecec-203a-9af7-67db-cf84f1a4a3af"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1658807783371,
    },
    "a-28": {
      id: "a-28",
      title: "About Intro",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".header-line",
                  selectorGuids: ["20ca84c5-b10c-3562-85bc-53204d4b2c58"],
                },
                xValue: -18,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".header-line",
                  selectorGuids: ["20ca84c5-b10c-3562-85bc-53204d4b2c58"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-28-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".paragraph",
                  selectorGuids: ["1dfa05f6-268a-ad3d-4e85-dec555ee961a"],
                },
                xValue: -28,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".paragraph",
                  selectorGuids: ["1dfa05f6-268a-ad3d-4e85-dec555ee961a"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-28-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-4",
                  selectorGuids: ["b4cf789b-6231-3a13-f5d6-074d1d2cbf3a"],
                },
                xValue: -14,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-4",
                  selectorGuids: ["b4cf789b-6231-3a13-f5d6-074d1d2cbf3a"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-28-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outQuint",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".header-line",
                  selectorGuids: ["20ca84c5-b10c-3562-85bc-53204d4b2c58"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-28-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outQuart",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".header-line",
                  selectorGuids: ["20ca84c5-b10c-3562-85bc-53204d4b2c58"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outQuint",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-4",
                  selectorGuids: ["b4cf789b-6231-3a13-f5d6-074d1d2cbf3a"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-28-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outQuart",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-4",
                  selectorGuids: ["b4cf789b-6231-3a13-f5d6-074d1d2cbf3a"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outQuint",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".paragraph",
                  selectorGuids: ["1dfa05f6-268a-ad3d-4e85-dec555ee961a"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-28-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outQuart",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".paragraph",
                  selectorGuids: ["1dfa05f6-268a-ad3d-4e85-dec555ee961a"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1658868347910,
    },
    "a-29": {
      id: "a-29",
      title: "About/Contact",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-4",
                  selectorGuids: ["b4cf789b-6231-3a13-f5d6-074d1d2cbf3a"],
                },
                xValue: -14,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-4",
                  selectorGuids: ["b4cf789b-6231-3a13-f5d6-074d1d2cbf3a"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-29-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".header-line",
                  selectorGuids: ["20ca84c5-b10c-3562-85bc-53204d4b2c58"],
                },
                xValue: -18,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".header-line",
                  selectorGuids: ["20ca84c5-b10c-3562-85bc-53204d4b2c58"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-29-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|91237215-9f7a-8444-fb80-393e3a7385ce",
                },
                xValue: -28,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|91237215-9f7a-8444-fb80-393e3a7385ce",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-29-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|e75db303-2c35-a109-859a-abb118f08660",
                },
                xValue: -28,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|e75db303-2c35-a109-859a-abb118f08660",
                },
                xValue: -28,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|e75db303-2c35-a109-859a-abb118f08660",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-29-n-26",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|17cc2e93-0429-da05-bbb3-7936cd3ce9b0",
                },
                xValue: -32,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-28",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|17cc2e93-0429-da05-bbb3-7936cd3ce9b0",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-29-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|95692761-73d2-c6b4-660a-b036be629a35",
                },
                xValue: -48,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-29",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|95692761-73d2-c6b4-660a-b036be629a35",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-29-n-34",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|7e216492-8630-434c-0876-838fcc77c66e",
                },
                xValue: -32,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-35",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|7e216492-8630-434c-0876-838fcc77c66e",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-4",
                  selectorGuids: ["b4cf789b-6231-3a13-f5d6-074d1d2cbf3a"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|e75db303-2c35-a109-859a-abb118f08660",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-29-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|e75db303-2c35-a109-859a-abb118f08660",
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|91237215-9f7a-8444-fb80-393e3a7385ce",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-29-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|91237215-9f7a-8444-fb80-393e3a7385ce",
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".header-line",
                  selectorGuids: ["20ca84c5-b10c-3562-85bc-53204d4b2c58"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-29-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".header-line",
                  selectorGuids: ["20ca84c5-b10c-3562-85bc-53204d4b2c58"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".heading-4",
                  selectorGuids: ["b4cf789b-6231-3a13-f5d6-074d1d2cbf3a"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-29-n-30",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|17cc2e93-0429-da05-bbb3-7936cd3ce9b0",
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-33",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|95692761-73d2-c6b4-660a-b036be629a35",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-29-n-32",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|95692761-73d2-c6b4-660a-b036be629a35",
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-31",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|17cc2e93-0429-da05-bbb3-7936cd3ce9b0",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-29-n-36",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|7e216492-8630-434c-0876-838fcc77c66e",
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-37",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "62f133b92f2108a45e43aeb0|7e216492-8630-434c-0876-838fcc77c66e",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1658868753459,
    },
    "a-30": {
      id: "a-30",
      title: "About Toggle",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-30-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".about-popup",
                  selectorGuids: ["8238828c-94d2-07ce-0e3a-9b510f05729b"],
                },
                value: "none",
              },
            },
            {
              id: "a-30-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".about-popup",
                  selectorGuids: ["8238828c-94d2-07ce-0e3a-9b510f05729b"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-30-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".about-popup",
                  selectorGuids: ["8238828c-94d2-07ce-0e3a-9b510f05729b"],
                },
                yValue: -500,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".paragraph.about-popuptext",
                  selectorGuids: [
                    "1dfa05f6-268a-ad3d-4e85-dec555ee961a",
                    "a2a23a5c-22f3-808d-2a1c-b8c2dead0d2b",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".paragraph.about-popuptext",
                  selectorGuids: [
                    "1dfa05f6-268a-ad3d-4e85-dec555ee961a",
                    "a2a23a5c-22f3-808d-2a1c-b8c2dead0d2b",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-30-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".about-links",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc877"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-30-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".about-links",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc877"],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-30-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".about-popup",
                  selectorGuids: ["8238828c-94d2-07ce-0e3a-9b510f05729b"],
                },
                value: "block",
              },
            },
            {
              id: "a-30-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 500,
                target: {
                  selector: ".about-popup",
                  selectorGuids: ["8238828c-94d2-07ce-0e3a-9b510f05729b"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-30-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 1000,
                target: {
                  selector: ".about-popup",
                  selectorGuids: ["8238828c-94d2-07ce-0e3a-9b510f05729b"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "outSine",
                duration: 500,
                target: {
                  selector: ".paragraph.about-popuptext",
                  selectorGuids: [
                    "1dfa05f6-268a-ad3d-4e85-dec555ee961a",
                    "a2a23a5c-22f3-808d-2a1c-b8c2dead0d2b",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-30-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outBack",
                duration: 500,
                target: {
                  selector: ".paragraph.about-popuptext",
                  selectorGuids: [
                    "1dfa05f6-268a-ad3d-4e85-dec555ee961a",
                    "a2a23a5c-22f3-808d-2a1c-b8c2dead0d2b",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "outBack",
                duration: 500,
                target: {
                  selector: ".about-links",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc877"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-30-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "outBack",
                duration: 500,
                target: {
                  selector: ".about-links",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc877"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1659641894778,
    },
    "a-32": {
      id: "a-32",
      title: "About Toggle 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-32-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 500,
                target: {
                  selector: ".about-popup",
                  selectorGuids: ["8238828c-94d2-07ce-0e3a-9b510f05729b"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-32-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 1000,
                target: {
                  selector: ".about-popup",
                  selectorGuids: ["8238828c-94d2-07ce-0e3a-9b510f05729b"],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-32-n-8",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 200,
                easing: "",
                duration: 0,
                target: {
                  selector: ".about-popup",
                  selectorGuids: ["8238828c-94d2-07ce-0e3a-9b510f05729b"],
                },
                value: "none",
              },
            },
            {
              id: "a-32-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "outSine",
                duration: 500,
                target: {
                  selector: ".paragraph.about-popuptext",
                  selectorGuids: [
                    "1dfa05f6-268a-ad3d-4e85-dec555ee961a",
                    "a2a23a5c-22f3-808d-2a1c-b8c2dead0d2b",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-32-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outBack",
                duration: 500,
                target: {
                  selector: ".paragraph.about-popuptext",
                  selectorGuids: [
                    "1dfa05f6-268a-ad3d-4e85-dec555ee961a",
                    "a2a23a5c-22f3-808d-2a1c-b8c2dead0d2b",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-32-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "outSine",
                duration: 500,
                target: {
                  selector: ".about-links",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc877"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-32-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outBack",
                duration: 500,
                target: {
                  selector: ".about-links",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc877"],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1659641894778,
    },
    "a-33": {
      id: "a-33",
      title: "About Toggle 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-33-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".about-popup-2",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc879"],
                },
                value: "none",
              },
            },
            {
              id: "a-33-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".about-popup-2",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc879"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-33-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".about-popup-2",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc879"],
                },
                yValue: -500,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-33-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".paragraph-2.about-popuptext",
                  selectorGuids: [
                    "cd021d1c-7d9c-580e-bfe0-105515dcc876",
                    "cd021d1c-7d9c-580e-bfe0-105515dcc87c",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-33-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".paragraph-2.about-popuptext",
                  selectorGuids: [
                    "cd021d1c-7d9c-580e-bfe0-105515dcc876",
                    "cd021d1c-7d9c-580e-bfe0-105515dcc87c",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-33-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".about-links",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc877"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-33-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".about-links",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc877"],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-33-n-8",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".about-popup-2",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc879"],
                },
                value: "block",
              },
            },
            {
              id: "a-33-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 500,
                target: {
                  selector: ".about-popup-2",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc879"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-33-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 1000,
                target: {
                  selector: ".about-popup-2",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc879"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-33-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "outSine",
                duration: 500,
                target: {
                  selector: ".paragraph-2.about-popuptext",
                  selectorGuids: [
                    "cd021d1c-7d9c-580e-bfe0-105515dcc876",
                    "cd021d1c-7d9c-580e-bfe0-105515dcc87c",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-33-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outBack",
                duration: 500,
                target: {
                  selector: ".paragraph-2.about-popuptext",
                  selectorGuids: [
                    "cd021d1c-7d9c-580e-bfe0-105515dcc876",
                    "cd021d1c-7d9c-580e-bfe0-105515dcc87c",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-33-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "outBack",
                duration: 500,
                target: {
                  selector: ".about-links",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc877"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-33-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "outBack",
                duration: 500,
                target: {
                  selector: ".about-links",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc877"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1659641894778,
    },
    "a-34": {
      id: "a-34",
      title: "About Toggle 4",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 500,
                target: {
                  selector: ".about-popup-2",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc879"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-34-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 1000,
                target: {
                  selector: ".about-popup-2",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc879"],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 200,
                easing: "",
                duration: 0,
                target: {
                  selector: ".about-popup-2",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc879"],
                },
                value: "none",
              },
            },
            {
              id: "a-34-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "outSine",
                duration: 500,
                target: {
                  selector: ".paragraph-2.about-popuptext",
                  selectorGuids: [
                    "cd021d1c-7d9c-580e-bfe0-105515dcc876",
                    "cd021d1c-7d9c-580e-bfe0-105515dcc87c",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-34-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outBack",
                duration: 500,
                target: {
                  selector: ".paragraph-2.about-popuptext",
                  selectorGuids: [
                    "cd021d1c-7d9c-580e-bfe0-105515dcc876",
                    "cd021d1c-7d9c-580e-bfe0-105515dcc87c",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "outSine",
                duration: 500,
                target: {
                  selector: ".about-links",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc877"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-34-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outBack",
                duration: 500,
                target: {
                  selector: ".about-links",
                  selectorGuids: ["cd021d1c-7d9c-580e-bfe0-105515dcc877"],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1659641894778,
    },
    "a-36": {
      id: "a-36",
      title: "Nav Enter",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-36-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 300,
                target: {
                  selector: ".nav-backdrop",
                  selectorGuids: ["2833556c-81ec-a446-29ca-039cbd58ab40"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-36-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 300,
                target: {
                  selector: ".nav-content",
                  selectorGuids: ["ce4647aa-c4da-f423-14ef-c857febade39"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1660076245775,
    },
    "a-35": {
      id: "a-35",
      title: "Nav Leave",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 500,
                target: {
                  selector: ".nav-backdrop",
                  selectorGuids: ["2833556c-81ec-a446-29ca-039cbd58ab40"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-35-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 500,
                target: {
                  selector: ".nav-content",
                  selectorGuids: ["ce4647aa-c4da-f423-14ef-c857febade39"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1660076081257,
    },
    "a-37": {
      id: "a-37",
      title: "Project Extra Hov",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-37-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  id: "6393623b5b8327a24e15ff8a|177b1fec-2954-8ef1-cec4-39092bdd57a4",
                },
                xValue: -5,
                yValue: -5,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1670608261911,
    },
    "a-38": {
      id: "a-38",
      title: "Project Extra Hov out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-38-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  id: "6393623b5b8327a24e15ff8a|177b1fec-2954-8ef1-cec4-39092bdd57a4",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1670608261911,
    },
    "a-39": {
      id: "a-39",
      title: "Project Extra Hov Icheon",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-39-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  selector: ".projects-extra.icheon",
                  selectorGuids: [
                    "392dbeda-b096-8f56-0089-92273e815c7b",
                    "26acccea-a04a-4e06-9c85-e4863b9682ff",
                  ],
                },
                xValue: -5,
                yValue: -5,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1670608261911,
    },
    "a-40": {
      id: "a-40",
      title: "Project Extra Hov out Icheon",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-40-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  selector: ".projects-extra.icheon",
                  selectorGuids: [
                    "392dbeda-b096-8f56-0089-92273e815c7b",
                    "26acccea-a04a-4e06-9c85-e4863b9682ff",
                  ],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1670608261911,
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
