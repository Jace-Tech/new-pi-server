/* eslint-disable */ 
!(function (e) {
  var t = {}
  function n(r) {
    if (t[r]) return t[r].exports
    var o = (t[r] = { i: r, l: !1, exports: {} })
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
  }
  ;(n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t]
            }.bind(null, o)
          )
      return r
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = ''),
    n((n.s = 16))
})([
  function (e, t, n) {
    'use strict'
    n.d(t, 'n', function () {
      return r
    }),
      n.d(t, 'x', function () {
        return o
      }),
      n.d(t, 'A', function () {
        return i
      }),
      n.d(t, 'w', function () {
        return a
      }),
      n.d(t, 'a', function () {
        return s
      }),
      n.d(t, 'z', function () {
        return u
      }),
      n.d(t, 'k', function () {
        return c
      }),
      n.d(t, 'l', function () {
        return l
      }),
      n.d(t, 'e', function () {
        return d
      }),
      n.d(t, 't', function () {
        return f
      }),
      n.d(t, 'g', function () {
        return p
      }),
      n.d(t, 'j', function () {
        return h
      }),
      n.d(t, 'q', function () {
        return v
      }),
      n.d(t, 'p', function () {
        return y
      }),
      n.d(t, 'b', function () {
        return m
      }),
      n.d(t, 'r', function () {
        return w
      }),
      n.d(t, 's', function () {
        return g
      }),
      n.d(t, 'c', function () {
        return b
      }),
      n.d(t, 'd', function () {
        return x
      }),
      n.d(t, 'v', function () {
        return k
      }),
      n.d(t, 'h', function () {
        return E
      }),
      n.d(t, 'i', function () {
        return S
      }),
      n.d(t, 'o', function () {
        return _
      }),
      n.d(t, 'u', function () {
        return P
      }),
      n.d(t, 'f', function () {
        return T
      }),
      n.d(t, 'm', function () {
        return M
      }),
      n.d(t, 'y', function () {
        return C
      })
    var r = '@pi:app:payments:prepare_payment_flow',
      o = '@pi:app:payments:start_payment_flow',
      i = '@pi:app:payments:wait_for_transaction',
      a = '@pi:app:payments:show_pre_payment_error',
      s = '@pi:app:error:auth',
      u = '@pi:app:error:unknown',
      c = '@pi:app:conversation:open_with_id',
      l = '@pi:app:share_dialog:open',
      d = '@pi:app:sdk:communication_information_request',
      f = '@pi:app:sdk:set_third_party_app_user_id',
      p = '@pi:app:sdk:decide_callback_retrial',
      h = '@pi:app:sdk:open_consent_modal',
      v = '@pi:app:sdk:request_host_app_name',
      y = '@pi:app:sdk:request_host_app_info',
      m = '@pi:app:sdk:check_native_features',
      w = '@pi:app:sdk:request_native_permission',
      g = '@pi:app:sdk:scan_qr_code',
      b = '@pi:app:sdk:check_user_has_mining_app',
      x = '@pi:app:sdk:check_user_has_pi_browser',
      k = '@pi:app:sdk:show_download_pi_browser_modal',
      E = '@pi:app:sdk:get_safe_area_insets',
      S = '@pi:app:sdk:is_ad_ready',
      _ = '@pi:app:sdk:request_ad',
      P = '@pi:app:sdk:show_ad',
      T = '@pi:app:sdk:copy_text_from_tpa',
      M = '@pi:app:sdk:open_url_in_system_browser',
      C = '@pi:app:sdk:track_location'
  },
  function (e, t, n) {
    'use strict'
    var r = n(2),
      o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            return e
          }).apply(this, arguments)
      },
      i = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              u(r.next(e))
            } catch (e) {
              i(e)
            }
          }
          function s(e) {
            try {
              u(r.throw(e))
            } catch (e) {
              i(e)
            }
          }
          function u(e) {
            var t
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t)
                    })).then(a, s)
          }
          u((r = r.apply(e, t || [])).next())
        })
      },
      a = function (e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1]
              return o[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          'function' == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this
            }),
          i
        )
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw new TypeError('Generator is already executing.')
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i
                      break
                    case 4:
                      return a.label++, { value: i[1], done: !1 }
                    case 5:
                      a.label++, (r = i[1]), (i = [0])
                      continue
                    case 7:
                      ;(i = a.ops.pop()), a.trys.pop()
                      continue
                    default:
                      if (
                        !((o = a.trys),
                        (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                      ) {
                        a = 0
                        continue
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1]
                        break
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        ;(a.label = o[1]), (o = i)
                        break
                      }
                      if (o && a.label < o[2]) {
                        ;(a.label = o[2]), a.ops.push(i)
                        break
                      }
                      o[2] && a.ops.pop(), a.trys.pop()
                      continue
                  }
                  i = t.call(e, a)
                } catch (e) {
                  ;(i = [6, e]), (r = 0)
                } finally {
                  n = o = 0
                }
              if (5 & i[0]) throw i[1]
              return { value: i[0] ? i[1] : void 0, done: !0 }
            })([i, s])
          }
        }
      },
      s = (function () {
        function e() {
          var e = this
          ;(this.lastEmittedId = 0),
            (this.emittedPromises = {}),
            (this.sandboxMode = !1),
            (this.getHostPlatformURL = function () {
              var t = document.referrer
              return e.sandboxMode
                ? 'https://sandbox.minepi.com'
                : Object(r.a)(t) || 'https://app-cdn.minepi.com'
            }),
            (this.sendSDKMessage = function (t, n) {
              return (
                void 0 === n && (n = !1),
                i(e, void 0, void 0, function () {
                  var e,
                    i,
                    s,
                    u,
                    c = this
                  return a(this, function (a) {
                    return (
                      (e = this.lastEmittedId++),
                      (i = o({ id: e }, t)),
                      (s = JSON.stringify(i)),
                      (u = this.getHostPlatformURL()),
                      r.b &&
                        console.log(
                          'Sending message to app platform (target origin: ' + u + '):',
                          i
                        ),
                      window.parent.postMessage(s, u),
                      [
                        2,
                        new Promise(function (t, r) {
                          ;(c.emittedPromises[e] = { resolve: t, reject: r }),
                            n ||
                              setTimeout(function () {
                                return r(
                                  new Error(
                                    'Messaging promise with id ' + e + ' timed out after 120000ms.'
                                  )
                                )
                              }, 12e4)
                        }),
                      ]
                    )
                  })
                })
              )
            }),
            (this.handleIncomingMessage = function (t) {
              var n = null
              try {
                var o = e.getHostPlatformURL()
                if (!r.b && t.origin !== o)
                  return void (
                    r.b &&
                    console.log(
                      'Ignoring a message. Expected origin: ' + o + ' Actual origin: ' + t.origin
                    )
                  )
                var i = t.data
                if ('string' != typeof i)
                  return void (r.b && console.log('Received message with non-string data:', i))
                var a = JSON.parse(i)
                if (null === (n = a.id)) throw new Error('No id found in message response')
                if (
                  (r.b && console.log('Received response for message id ' + n + ': ', a),
                  !e.emittedPromises[n])
                )
                  throw new Error('No emitted promise found for native messaging response id ' + n)
                e.emittedPromises[n].resolve(a), delete e.emittedPromises[n]
              } catch (o) {
                if (null !== n)
                  return (
                    r.b &&
                      console.error(
                        'SDK messaging: error when handling response for message id ' +
                          n +
                          '. Error is logged below.'
                      ),
                    r.b && console.error(o),
                    r.b && console.error(t.data),
                    void (e.emittedPromises[n] && e.emittedPromises[n].reject(o))
                  )
                r.b &&
                  console.error(
                    'SDK messaging: error when handling incoming message (possible response?). Error is logged below.'
                  ),
                  r.b && console.error(o),
                  r.b && console.error(t.data)
              }
            }),
            window.addEventListener('message', function (t) {
              return e.handleIncomingMessage(t)
            })
          var t = 'production'
          console.log('SDKMessaging instantiated on Pi environment: ' + t)
        }
        return (
          (e.prototype.setSandboxMode = function (e) {
            this.sandboxMode = e
          }),
          e
        )
      })()
    t.a = new s()
  },
  function (e, t, n) {
    'use strict'
    n.d(t, 'd', function () {
      return r
    }),
      n.d(t, 'b', function () {
        return o
      }),
      n.d(t, 'c', function () {
        return a
      }),
      n.d(t, 'a', function () {
        return s
      })
    var r = function (e, t) {
        var n,
          r = {}
        return (
          ((n = t), Array.isArray(n) ? n : [n]).forEach(function (t) {
            return (r[t] = e[t])
          }),
          r
        )
      },
      o = !1,
      i = /https:\/\/([a-zA-Z0-9]+).pinet.com(\/?[^?#]*)\??([^#]*)#?(.*)/,
      a = function () {
        return null == i ? void 0 : i.test(document.referrer)
      },
      s = function (e) {
        var t
        if (null == i ? void 0 : i.test(e)) {
          var n = null === (t = e.match(i)) || void 0 === t ? void 0 : t[1]
          if (n) {
            var r = (function (e) {
              return 'https://' + e + '.pinet.com'
            })(n)
            if (r) return r
          }
        }
      }
  },
  function (e, t, n) {
    'use strict'
    var r = n(7),
      o = Object.prototype.toString
    function i(e) {
      return '[object Array]' === o.call(e)
    }
    function a(e) {
      return void 0 === e
    }
    function s(e) {
      return null !== e && 'object' == typeof e
    }
    function u(e) {
      return '[object Function]' === o.call(e)
    }
    function c(e, t) {
      if (null != e)
        if (('object' != typeof e && (e = [e]), i(e)))
          for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e)
        else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
    }
    e.exports = {
      isArray: i,
      isArrayBuffer: function (e) {
        return '[object ArrayBuffer]' === o.call(e)
      },
      isBuffer: function (e) {
        return (
          null !== e &&
          !a(e) &&
          null !== e.constructor &&
          !a(e.constructor) &&
          'function' == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        )
      },
      isFormData: function (e) {
        return 'undefined' != typeof FormData && e instanceof FormData
      },
      isArrayBufferView: function (e) {
        return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && e.buffer instanceof ArrayBuffer
      },
      isString: function (e) {
        return 'string' == typeof e
      },
      isNumber: function (e) {
        return 'number' == typeof e
      },
      isObject: s,
      isUndefined: a,
      isDate: function (e) {
        return '[object Date]' === o.call(e)
      },
      isFile: function (e) {
        return '[object File]' === o.call(e)
      },
      isBlob: function (e) {
        return '[object Blob]' === o.call(e)
      },
      isFunction: u,
      isStream: function (e) {
        return s(e) && u(e.pipe)
      },
      isURLSearchParams: function (e) {
        return 'undefined' != typeof URLSearchParams && e instanceof URLSearchParams
      },
      isStandardBrowserEnv: function () {
        return (
          ('undefined' == typeof navigator ||
            ('ReactNative' !== navigator.product &&
              'NativeScript' !== navigator.product &&
              'NS' !== navigator.product)) &&
          'undefined' != typeof window &&
          'undefined' != typeof document
        )
      },
      forEach: c,
      merge: function e() {
        var t = {}
        function n(n, r) {
          'object' == typeof t[r] && 'object' == typeof n ? (t[r] = e(t[r], n)) : (t[r] = n)
        }
        for (var r = 0, o = arguments.length; r < o; r++) c(arguments[r], n)
        return t
      },
      deepMerge: function e() {
        var t = {}
        function n(n, r) {
          'object' == typeof t[r] && 'object' == typeof n
            ? (t[r] = e(t[r], n))
            : (t[r] = 'object' == typeof n ? e({}, n) : n)
        }
        for (var r = 0, o = arguments.length; r < o; r++) c(arguments[r], n)
        return t
      },
      extend: function (e, t, n) {
        return (
          c(t, function (t, o) {
            e[o] = n && 'function' == typeof t ? r(t, n) : t
          }),
          e
        )
      },
      trim: function (e) {
        return e.replace(/^\s*/, '').replace(/\s*$/, '')
      },
    }
  },
  function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return l
    })
    var r = n(15),
      o = n.n(r),
      i = n(0),
      a = n(2),
      s = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              u(r.next(e))
            } catch (e) {
              i(e)
            }
          }
          function s(e) {
            try {
              u(r.throw(e))
            } catch (e) {
              i(e)
            }
          }
          function u(e) {
            var t
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t)
                    })).then(a, s)
          }
          u((r = r.apply(e, t || [])).next())
        })
      },
      u = function (e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1]
              return o[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          'function' == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this
            }),
          i
        )
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw new TypeError('Generator is already executing.')
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i
                      break
                    case 4:
                      return a.label++, { value: i[1], done: !1 }
                    case 5:
                      a.label++, (r = i[1]), (i = [0])
                      continue
                    case 7:
                      ;(i = a.ops.pop()), a.trys.pop()
                      continue
                    default:
                      if (
                        !((o = a.trys),
                        (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                      ) {
                        a = 0
                        continue
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1]
                        break
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        ;(a.label = o[1]), (o = i)
                        break
                      }
                      if (o && a.label < o[2]) {
                        ;(a.label = o[2]), a.ops.push(i)
                        break
                      }
                      o[2] && a.ops.pop(), a.trys.pop()
                      continue
                  }
                  i = t.call(e, a)
                } catch (e) {
                  ;(i = [6, e]), (r = 0)
                } finally {
                  n = o = 0
                }
              if (5 & i[0]) throw i[1]
              return { value: i[0] ? i[1] : void 0, done: !0 }
            })([i, s])
          }
        }
      },
      c = (function () {
        function e() {
          var e = this
          ;(this.accessToken = null),
            (this.backendURL = null),
            (this.frontendURL = null),
            (this.axiosClient = null),
            (this.createAxios = function () {
              e.backendURL && (e.axiosClient = o.a.create({ baseURL: e.backendURL, timeout: 2e4 }))
            }),
            (this.handleError = function (t) {
              var n = t.response && t.response.status
              401 !== n && 403 !== n
                ? e.sendMessageToPiNetwork({ type: i.z })
                : e.sendMessageToPiNetwork({ type: i.a })
            }),
            (this.getOptions = function () {
              if (e.accessToken)
                return {
                  headers: e.accessToken ? { Authorization: 'Bearer ' + e.accessToken } : {},
                }
            }),
            (this.get = function (t) {
              return s(e, void 0, void 0, function () {
                var e
                return u(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (!this.axiosClient) return [2, null]
                      n.label = 1
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]), [4, this.axiosClient.get(t, this.getOptions())]
                      )
                    case 2:
                      return [2, n.sent().data]
                    case 3:
                      throw ((e = n.sent()), a.b && console.error(e), this.handleError(e), e)
                    case 4:
                      return [2]
                  }
                })
              })
            }),
            (this.post = function (t, n) {
              return (
                void 0 === n && (n = {}),
                s(e, void 0, void 0, function () {
                  var e
                  return u(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if (!this.axiosClient) return [2, null]
                        r.label = 1
                      case 1:
                        return (
                          r.trys.push([1, 3, , 4]),
                          [4, this.axiosClient.post(t, n, this.getOptions())]
                        )
                      case 2:
                        return [2, r.sent().data]
                      case 3:
                        throw ((e = r.sent()), a.b && console.error(e), this.handleError(e), e)
                      case 4:
                        return [2]
                    }
                  })
                })
              )
            }),
            (this.sendMessageToPiNetwork = function (t) {
              if (e.frontendURL) {
                var n = JSON.stringify(t)
                window.parent.postMessage(n, e.frontendURL)
              }
            }),
            (this.waitForAction = function (t) {
              return new Promise(function (n, r) {
                a.b && console.log('Waiting for action ... ')
                var o = window.setTimeout(function () {
                  return r('timeout')
                }, 6e4)
                a.b && console.log('Timeout', o),
                  window.addEventListener('message', function (r) {
                    return e.handlePiNetworkMessage(r, t, n, o)
                  })
              })
            }),
            (this.handlePiNetworkMessage = function (e, t, n, r) {
              var o = e.data,
                i = null
              try {
                i = JSON.parse(o)
              } catch (e) {
                return void (a.b && console.warn('Error while parsing request', e, o))
              }
              a.b && console.log('Message !', i),
                i
                  ? i.type === t.type && (window.clearTimeout(r), n(i))
                  : a.b && console.warn('Unable to parse action')
            }),
            (this.dateFormatter = function () {
              var e = function (e) {
                  return e < 10 ? '0' + e : e.toString()
                },
                t = new Date(),
                n = t.getUTCMonth() + 1,
                r = t.getUTCDate(),
                o = t.getUTCHours(),
                i = t.getUTCMinutes(),
                a = t.getUTCSeconds()
              return e(n) + '-' + e(r) + ' ' + e(o) + ':' + e(i) + ':' + e(a)
            }),
            (this.reportError = function (t, n, r) {
              void 0 === r && (r = null),
                e.post('network/error', {
                  error: { time: e.dateFormatter(), call: t, message: n, data: r },
                })
            })
        }
        return (
          (e.prototype.init = function (e) {
            ;(this.accessToken = e.accessToken),
              (this.backendURL = e.backendURL),
              (this.frontendURL = e.frontendURL),
              this.createAxios()
          }),
          e
        )
      })()
    t.b = c
    var l = new ((function () {
      function e() {
        this.instance = null
      }
      return (
        (e.prototype.setInstance = function (e) {
          this.instance = e
        }),
        (e.prototype.getInstance = function () {
          if (!this.instance) throw new Error('ApiContainer: instance not initialized')
          return this.instance
        }),
        e
      )
    })())()
  },
  function (e, t, n) {
    'use strict'
    ;(function (e) {
      n.d(t, 'a', function () {
        return c
      })
      var r = n(1),
        o = n(6),
        i = n(0),
        a = n(2),
        s = function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function a(e) {
              try {
                u(r.next(e))
              } catch (e) {
                i(e)
              }
            }
            function s(e) {
              try {
                u(r.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function u(e) {
              var t
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t)
                      })).then(a, s)
            }
            u((r = r.apply(e, t || [])).next())
          })
        },
        u = function (e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1]
                return o[1]
              },
              trys: [],
              ops: [],
            }
          return (
            (i = { next: s(0), throw: s(1), return: s(2) }),
            'function' == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this
              }),
            i
          )
          function s(i) {
            return function (s) {
              return (function (i) {
                if (n) throw new TypeError('Generator is already executing.')
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i
                        break
                      case 4:
                        return a.label++, { value: i[1], done: !1 }
                      case 5:
                        a.label++, (r = i[1]), (i = [0])
                        continue
                      case 7:
                        ;(i = a.ops.pop()), a.trys.pop()
                        continue
                      default:
                        if (
                          !((o = a.trys),
                          (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                        ) {
                          a = 0
                          continue
                        }
                        if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                          a.label = i[1]
                          break
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          ;(a.label = o[1]), (o = i)
                          break
                        }
                        if (o && a.label < o[2]) {
                          ;(a.label = o[2]), a.ops.push(i)
                          break
                        }
                        o[2] && a.ops.pop(), a.trys.pop()
                        continue
                    }
                    i = t.call(e, a)
                  } catch (e) {
                    ;(i = [6, e]), (r = 0)
                  } finally {
                    n = o = 0
                  }
                if (5 & i[0]) throw i[1]
                return { value: i[0] ? i[1] : void 0, done: !0 }
              })([i, s])
            }
          }
        },
        c = (function () {
          function t(t, n, c) {
            var l = this
            ;(this.paymentData = t),
              (this.callbacks = n),
              (this.onIncompletePaymentFound = c),
              (this.retryableCallback = function (t, n) {
                return s(l, void 0, void 0, function () {
                  var o = this
                  return u(this, function (a) {
                    return (
                      t(),
                      (this.retryTimeout = e.setTimeout(function () {
                        return s(o, void 0, void 0, function () {
                          return u(this, function (e) {
                            switch (e.label) {
                              case 0:
                                return [
                                  4,
                                  r.a.sendSDKMessage({ type: i.g, payload: { targetStatus: n } }),
                                ]
                              case 1:
                                return (
                                  e.sent().payload.retry && this.retryCounter > 0
                                    ? (this.retryCounter--, this.retryableCallback(t, n))
                                    : ((this.retryTimeout = null), (this.retryCounter = 5)),
                                  [2]
                                )
                            }
                          })
                        })
                      }, 1e4)),
                      [2]
                    )
                  })
                })
              }),
              (this.runPaymentFlow = function () {
                return s(l, void 0, void 0, function () {
                  var e,
                    t,
                    n,
                    s,
                    c,
                    l,
                    d,
                    f,
                    p,
                    h,
                    v = this
                  return u(this, function (u) {
                    switch (u.label) {
                      case 0:
                        return (
                          u.trys.push([0, 13, , 14]),
                          (e = ''),
                          [4, r.a.sendSDKMessage({ type: i.n })]
                        )
                      case 1:
                        return (t = u.sent()).payload.success
                          ? [3, 3]
                          : [
                              4,
                              r.a.sendSDKMessage({
                                type: i.w,
                                payload: { paymentError: 'pending_check_failed' },
                              }),
                            ]
                      case 2:
                        return [2, u.sent()]
                      case 3:
                        if (t.payload.pending) return [3, 9]
                        u.label = 4
                      case 4:
                        return u.trys.push([4, 6, , 8]), [4, o.a(this.paymentData)]
                      case 5:
                        return (n = u.sent()), (e = n.identifier), [3, 8]
                      case 6:
                        return (
                          (s = u.sent()),
                          [
                            4,
                            r.a.sendSDKMessage({
                              type: i.w,
                              payload: { paymentError: s.response.data.error },
                            }),
                          ]
                        )
                      case 7:
                        return u.sent(), this.callbacks.onError(s), a.b && console.error(s), [2]
                      case 8:
                        return [3, 10]
                      case 9:
                        return (
                          (c = t.payload.pendingPayment),
                          (l = new Error('A pending payment needs to be handled.')),
                          this.callbacks.onError(l, c),
                          [2, this.onIncompletePaymentFound(c)]
                        )
                      case 10:
                        return [4, r.a.sendSDKMessage({ type: i.x, payload: { paymentId: e } })]
                      case 11:
                        return (
                          u.sent(),
                          this.retryableCallback(function () {
                            return v.callbacks.onReadyForServerApproval(e)
                          }, 'developerApproved'),
                          [4, r.a.sendSDKMessage({ type: i.A }, !0)]
                        )
                      case 12:
                        return (
                          (d = u.sent()).payload.cancelled
                            ? this.callbacks.onCancel(d.payload.paymentId)
                            : ((f = d.payload.paymentId),
                              (p = d.payload.txid),
                              this.retryableCallback(function () {
                                return v.callbacks.onReadyForServerCompletion(f, p)
                              }, 'developerCompleted')),
                          [3, 14]
                        )
                      case 13:
                        throw ((h = u.sent()), this.callbacks.onError(h), h)
                      case 14:
                        return [2]
                    }
                  })
                })
              }),
              this.runPaymentFlow(),
              (this.retryTimeout = null),
              (this.retryCounter = 5)
          }
          return (
            (t.checkForPendingPayment = function (e) {
              return s(void 0, void 0, void 0, function () {
                var t
                return u(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, o.b()]
                    case 1:
                      return (t = n.sent()).exists && t.payment && e(t.payment), [2]
                  }
                })
              })
            }),
            t
          )
        })()
    }).call(this, n(17))
  },
  function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return o
    }),
      n.d(t, 'b', function () {
        return i
      })
    var r = n(4),
      o = function (e) {
        return r.a.getInstance().post('/v2/payments/user_to_app', e)
      },
      i = function () {
        return r.a.getInstance().get('/v2/payments/incomplete')
      }
  },
  function (e, t, n) {
    'use strict'
    e.exports = function (e, t) {
      return function () {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r]
        return e.apply(t, n)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    var r = n(3)
    function o(e) {
      return encodeURIComponent(e)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')
    }
    e.exports = function (e, t, n) {
      if (!t) return e
      var i
      if (n) i = n(t)
      else if (r.isURLSearchParams(t)) i = t.toString()
      else {
        var a = []
        r.forEach(t, function (e, t) {
          null != e &&
            (r.isArray(e) ? (t += '[]') : (e = [e]),
            r.forEach(e, function (e) {
              r.isDate(e) ? (e = e.toISOString()) : r.isObject(e) && (e = JSON.stringify(e)),
                a.push(o(t) + '=' + o(e))
            }))
        }),
          (i = a.join('&'))
      }
      if (i) {
        var s = e.indexOf('#')
        ;-1 !== s && (e = e.slice(0, s)), (e += (-1 === e.indexOf('?') ? '?' : '&') + i)
      }
      return e
    }
  },
  function (e, t, n) {
    'use strict'
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__)
    }
  },
  function (e, t, n) {
    'use strict'
    ;(function (t) {
      var r = n(3),
        o = n(24),
        i = { 'Content-Type': 'application/x-www-form-urlencoded' }
      function a(e, t) {
        !r.isUndefined(e) && r.isUndefined(e['Content-Type']) && (e['Content-Type'] = t)
      }
      var s,
        u = {
          adapter:
            (('undefined' != typeof XMLHttpRequest ||
              (void 0 !== t && '[object process]' === Object.prototype.toString.call(t))) &&
              (s = n(11)),
            s),
          transformRequest: [
            function (e, t) {
              return (
                o(t, 'Accept'),
                o(t, 'Content-Type'),
                r.isFormData(e) ||
                r.isArrayBuffer(e) ||
                r.isBuffer(e) ||
                r.isStream(e) ||
                r.isFile(e) ||
                r.isBlob(e)
                  ? e
                  : r.isArrayBufferView(e)
                    ? e.buffer
                    : r.isURLSearchParams(e)
                      ? (a(t, 'application/x-www-form-urlencoded;charset=utf-8'), e.toString())
                      : r.isObject(e)
                        ? (a(t, 'application/json;charset=utf-8'), JSON.stringify(e))
                        : e
              )
            },
          ],
          transformResponse: [
            function (e) {
              if ('string' == typeof e)
                try {
                  e = JSON.parse(e)
                } catch (e) {}
              return e
            },
          ],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300
          },
        }
      ;(u.headers = { common: { Accept: 'application/json, text/plain, */*' } }),
        r.forEach(['delete', 'get', 'head'], function (e) {
          u.headers[e] = {}
        }),
        r.forEach(['post', 'put', 'patch'], function (e) {
          u.headers[e] = r.merge(i)
        }),
        (e.exports = u)
    }).call(this, n(23))
  },
  function (e, t, n) {
    'use strict'
    var r = n(3),
      o = n(25),
      i = n(8),
      a = n(27),
      s = n(30),
      u = n(31),
      c = n(12)
    e.exports = function (e) {
      return new Promise(function (t, l) {
        var d = e.data,
          f = e.headers
        r.isFormData(d) && delete f['Content-Type']
        var p = new XMLHttpRequest()
        if (e.auth) {
          var h = e.auth.username || '',
            v = e.auth.password || ''
          f.Authorization = 'Basic ' + btoa(h + ':' + v)
        }
        var y = a(e.baseURL, e.url)
        if (
          (p.open(e.method.toUpperCase(), i(y, e.params, e.paramsSerializer), !0),
          (p.timeout = e.timeout),
          (p.onreadystatechange = function () {
            if (
              p &&
              4 === p.readyState &&
              (0 !== p.status || (p.responseURL && 0 === p.responseURL.indexOf('file:')))
            ) {
              var n = 'getAllResponseHeaders' in p ? s(p.getAllResponseHeaders()) : null,
                r = {
                  data: e.responseType && 'text' !== e.responseType ? p.response : p.responseText,
                  status: p.status,
                  statusText: p.statusText,
                  headers: n,
                  config: e,
                  request: p,
                }
              o(t, l, r), (p = null)
            }
          }),
          (p.onabort = function () {
            p && (l(c('Request aborted', e, 'ECONNABORTED', p)), (p = null))
          }),
          (p.onerror = function () {
            l(c('Network Error', e, null, p)), (p = null)
          }),
          (p.ontimeout = function () {
            var t = 'timeout of ' + e.timeout + 'ms exceeded'
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              l(c(t, e, 'ECONNABORTED', p)),
              (p = null)
          }),
          r.isStandardBrowserEnv())
        ) {
          var m = n(32),
            w = (e.withCredentials || u(y)) && e.xsrfCookieName ? m.read(e.xsrfCookieName) : void 0
          w && (f[e.xsrfHeaderName] = w)
        }
        if (
          ('setRequestHeader' in p &&
            r.forEach(f, function (e, t) {
              void 0 === d && 'content-type' === t.toLowerCase()
                ? delete f[t]
                : p.setRequestHeader(t, e)
            }),
          r.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials),
          e.responseType)
        )
          try {
            p.responseType = e.responseType
          } catch (t) {
            if ('json' !== e.responseType) throw t
          }
        'function' == typeof e.onDownloadProgress &&
          p.addEventListener('progress', e.onDownloadProgress),
          'function' == typeof e.onUploadProgress &&
            p.upload &&
            p.upload.addEventListener('progress', e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              p && (p.abort(), l(e), (p = null))
            }),
          void 0 === d && (d = null),
          p.send(d)
      })
    }
  },
  function (e, t, n) {
    'use strict'
    var r = n(26)
    e.exports = function (e, t, n, o, i) {
      var a = new Error(e)
      return r(a, t, n, o, i)
    }
  },
  function (e, t, n) {
    'use strict'
    var r = n(3)
    e.exports = function (e, t) {
      t = t || {}
      var n = {},
        o = ['url', 'method', 'params', 'data'],
        i = ['headers', 'auth', 'proxy'],
        a = [
          'baseURL',
          'url',
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
          'socketPath',
        ]
      r.forEach(o, function (e) {
        void 0 !== t[e] && (n[e] = t[e])
      }),
        r.forEach(i, function (o) {
          r.isObject(t[o])
            ? (n[o] = r.deepMerge(e[o], t[o]))
            : void 0 !== t[o]
              ? (n[o] = t[o])
              : r.isObject(e[o])
                ? (n[o] = r.deepMerge(e[o]))
                : void 0 !== e[o] && (n[o] = e[o])
        }),
        r.forEach(a, function (r) {
          void 0 !== t[r] ? (n[r] = t[r]) : void 0 !== e[r] && (n[r] = e[r])
        })
      var s = o.concat(i).concat(a),
        u = Object.keys(t).filter(function (e) {
          return -1 === s.indexOf(e)
        })
      return (
        r.forEach(u, function (r) {
          void 0 !== t[r] ? (n[r] = t[r]) : void 0 !== e[r] && (n[r] = e[r])
        }),
        n
      )
    }
  },
  function (e, t, n) {
    'use strict'
    function r(e) {
      this.message = e
    }
    ;(r.prototype.toString = function () {
      return 'Cancel' + (this.message ? ': ' + this.message : '')
    }),
      (r.prototype.__CANCEL__ = !0),
      (e.exports = r)
  },
  function (e, t, n) {
    e.exports = n(18)
  },
  function (e, t, n) {
    var r = n(35).default
    window.Pi = new r()
  },
  function (e, t) {
    var n
    n = (function () {
      return this
    })()
    try {
      n = n || new Function('return this')()
    } catch (e) {
      'object' == typeof window && (n = window)
    }
    e.exports = n
  },
  function (e, t, n) {
    'use strict'
    var r = n(3),
      o = n(7),
      i = n(19),
      a = n(13)
    function s(e) {
      var t = new i(e),
        n = o(i.prototype.request, t)
      return r.extend(n, i.prototype, t), r.extend(n, t), n
    }
    var u = s(n(10))
    ;(u.Axios = i),
      (u.create = function (e) {
        return s(a(u.defaults, e))
      }),
      (u.Cancel = n(14)),
      (u.CancelToken = n(33)),
      (u.isCancel = n(9)),
      (u.all = function (e) {
        return Promise.all(e)
      }),
      (u.spread = n(34)),
      (e.exports = u),
      (e.exports.default = u)
  },
  function (e, t, n) {
    'use strict'
    var r = n(3),
      o = n(8),
      i = n(20),
      a = n(21),
      s = n(13)
    function u(e) {
      ;(this.defaults = e), (this.interceptors = { request: new i(), response: new i() })
    }
    ;(u.prototype.request = function (e) {
      'string' == typeof e ? ((e = arguments[1] || {}).url = arguments[0]) : (e = e || {}),
        (e = s(this.defaults, e)).method
          ? (e.method = e.method.toLowerCase())
          : this.defaults.method
            ? (e.method = this.defaults.method.toLowerCase())
            : (e.method = 'get')
      var t = [a, void 0],
        n = Promise.resolve(e)
      for (
        this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected)
        }),
          this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected)
          });
        t.length;

      )
        n = n.then(t.shift(), t.shift())
      return n
    }),
      (u.prototype.getUri = function (e) {
        return (e = s(this.defaults, e)), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, '')
      }),
      r.forEach(['delete', 'get', 'head', 'options'], function (e) {
        u.prototype[e] = function (t, n) {
          return this.request(r.merge(n || {}, { method: e, url: t }))
        }
      }),
      r.forEach(['post', 'put', 'patch'], function (e) {
        u.prototype[e] = function (t, n, o) {
          return this.request(r.merge(o || {}, { method: e, url: t, data: n }))
        }
      }),
      (e.exports = u)
  },
  function (e, t, n) {
    'use strict'
    var r = n(3)
    function o() {
      this.handlers = []
    }
    ;(o.prototype.use = function (e, t) {
      return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1
    }),
      (o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null)
      }),
      (o.prototype.forEach = function (e) {
        r.forEach(this.handlers, function (t) {
          null !== t && e(t)
        })
      }),
      (e.exports = o)
  },
  function (e, t, n) {
    'use strict'
    var r = n(3),
      o = n(22),
      i = n(9),
      a = n(10)
    function s(e) {
      e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function (e) {
      return (
        s(e),
        (e.headers = e.headers || {}),
        (e.data = o(e.data, e.headers, e.transformRequest)),
        (e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers)),
        r.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (t) {
          delete e.headers[t]
        }),
        (e.adapter || a.adapter)(e).then(
          function (t) {
            return s(e), (t.data = o(t.data, t.headers, e.transformResponse)), t
          },
          function (t) {
            return (
              i(t) ||
                (s(e),
                t &&
                  t.response &&
                  (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))),
              Promise.reject(t)
            )
          }
        )
      )
    }
  },
  function (e, t, n) {
    'use strict'
    var r = n(3)
    e.exports = function (e, t, n) {
      return (
        r.forEach(n, function (n) {
          e = n(e, t)
        }),
        e
      )
    }
  },
  function (e, t) {
    var n,
      r,
      o = (e.exports = {})
    function i() {
      throw new Error('setTimeout has not been defined')
    }
    function a() {
      throw new Error('clearTimeout has not been defined')
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0)
      if ((n === i || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0)
      try {
        return n(e, 0)
      } catch (t) {
        try {
          return n.call(null, e, 0)
        } catch (t) {
          return n.call(this, e, 0)
        }
      }
    }
    !(function () {
      try {
        n = 'function' == typeof setTimeout ? setTimeout : i
      } catch (e) {
        n = i
      }
      try {
        r = 'function' == typeof clearTimeout ? clearTimeout : a
      } catch (e) {
        r = a
      }
    })()
    var u,
      c = [],
      l = !1,
      d = -1
    function f() {
      l && u && ((l = !1), u.length ? (c = u.concat(c)) : (d = -1), c.length && p())
    }
    function p() {
      if (!l) {
        var e = s(f)
        l = !0
        for (var t = c.length; t; ) {
          for (u = c, c = []; ++d < t; ) u && u[d].run()
          ;(d = -1), (t = c.length)
        }
        ;(u = null),
          (l = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e)
            if ((r === a || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e)
            try {
              r(e)
            } catch (t) {
              try {
                return r.call(null, e)
              } catch (t) {
                return r.call(this, e)
              }
            }
          })(e)
      }
    }
    function h(e, t) {
      ;(this.fun = e), (this.array = t)
    }
    function v() {}
    ;(o.nextTick = function (e) {
      var t = new Array(arguments.length - 1)
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
      c.push(new h(e, t)), 1 !== c.length || l || s(p)
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array)
      }),
      (o.title = 'browser'),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ''),
      (o.versions = {}),
      (o.on = v),
      (o.addListener = v),
      (o.once = v),
      (o.off = v),
      (o.removeListener = v),
      (o.removeAllListeners = v),
      (o.emit = v),
      (o.prependListener = v),
      (o.prependOnceListener = v),
      (o.listeners = function (e) {
        return []
      }),
      (o.binding = function (e) {
        throw new Error('process.binding is not supported')
      }),
      (o.cwd = function () {
        return '/'
      }),
      (o.chdir = function (e) {
        throw new Error('process.chdir is not supported')
      }),
      (o.umask = function () {
        return 0
      })
  },
  function (e, t, n) {
    'use strict'
    var r = n(3)
    e.exports = function (e, t) {
      r.forEach(e, function (n, r) {
        r !== t && r.toUpperCase() === t.toUpperCase() && ((e[t] = n), delete e[r])
      })
    }
  },
  function (e, t, n) {
    'use strict'
    var r = n(12)
    e.exports = function (e, t, n) {
      var o = n.config.validateStatus
      !o || o(n.status)
        ? e(n)
        : t(r('Request failed with status code ' + n.status, n.config, null, n.request, n))
    }
  },
  function (e, t, n) {
    'use strict'
    e.exports = function (e, t, n, r, o) {
      return (
        (e.config = t),
        n && (e.code = n),
        (e.request = r),
        (e.response = o),
        (e.isAxiosError = !0),
        (e.toJSON = function () {
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
            code: this.code,
          }
        }),
        e
      )
    }
  },
  function (e, t, n) {
    'use strict'
    var r = n(28),
      o = n(29)
    e.exports = function (e, t) {
      return e && !r(t) ? o(e, t) : t
    }
  },
  function (e, t, n) {
    'use strict'
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
  },
  function (e, t, n) {
    'use strict'
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
    }
  },
  function (e, t, n) {
    'use strict'
    var r = n(3),
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
        'user-agent',
      ]
    e.exports = function (e) {
      var t,
        n,
        i,
        a = {}
      return e
        ? (r.forEach(e.split('\n'), function (e) {
            if (
              ((i = e.indexOf(':')),
              (t = r.trim(e.substr(0, i)).toLowerCase()),
              (n = r.trim(e.substr(i + 1))),
              t)
            ) {
              if (a[t] && o.indexOf(t) >= 0) return
              a[t] =
                'set-cookie' === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ', ' + n : n
            }
          }),
          a)
        : a
    }
  },
  function (e, t, n) {
    'use strict'
    var r = n(3)
    e.exports = r.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement('a')
          function o(e) {
            var r = e
            return (
              t && (n.setAttribute('href', r), (r = n.href)),
              n.setAttribute('href', r),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, '') : '',
                hash: n.hash ? n.hash.replace(/^#/, '') : '',
                hostname: n.hostname,
                port: n.port,
                pathname: '/' === n.pathname.charAt(0) ? n.pathname : '/' + n.pathname,
              }
            )
          }
          return (
            (e = o(window.location.href)),
            function (t) {
              var n = r.isString(t) ? o(t) : t
              return n.protocol === e.protocol && n.host === e.host
            }
          )
        })()
      : function () {
          return !0
        }
  },
  function (e, t, n) {
    'use strict'
    var r = n(3)
    e.exports = r.isStandardBrowserEnv()
      ? {
          write: function (e, t, n, o, i, a) {
            var s = []
            s.push(e + '=' + encodeURIComponent(t)),
              r.isNumber(n) && s.push('expires=' + new Date(n).toGMTString()),
              r.isString(o) && s.push('path=' + o),
              r.isString(i) && s.push('domain=' + i),
              !0 === a && s.push('secure'),
              (document.cookie = s.join('; '))
          },
          read: function (e) {
            var t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'))
            return t ? decodeURIComponent(t[3]) : null
          },
          remove: function (e) {
            this.write(e, '', Date.now() - 864e5)
          },
        }
      : {
          write: function () {},
          read: function () {
            return null
          },
          remove: function () {},
        }
  },
  function (e, t, n) {
    'use strict'
    var r = n(14)
    function o(e) {
      if ('function' != typeof e) throw new TypeError('executor must be a function.')
      var t
      this.promise = new Promise(function (e) {
        t = e
      })
      var n = this
      e(function (e) {
        n.reason || ((n.reason = new r(e)), t(n.reason))
      })
    }
    ;(o.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason
    }),
      (o.source = function () {
        var e
        return {
          token: new o(function (t) {
            e = t
          }),
          cancel: e,
        }
      }),
      (e.exports = o)
  },
  function (e, t, n) {
    'use strict'
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    n.r(t)
    var r = n(5),
      o = n(1),
      i = n(0),
      a = n(4),
      s = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              u(r.next(e))
            } catch (e) {
              i(e)
            }
          }
          function s(e) {
            try {
              u(r.throw(e))
            } catch (e) {
              i(e)
            }
          }
          function u(e) {
            var t
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t)
                    })).then(a, s)
          }
          u((r = r.apply(e, t || [])).next())
        })
      },
      u = function (e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1]
              return o[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          'function' == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this
            }),
          i
        )
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw new TypeError('Generator is already executing.')
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i
                      break
                    case 4:
                      return a.label++, { value: i[1], done: !1 }
                    case 5:
                      a.label++, (r = i[1]), (i = [0])
                      continue
                    case 7:
                      ;(i = a.ops.pop()), a.trys.pop()
                      continue
                    default:
                      if (
                        !((o = a.trys),
                        (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                      ) {
                        a = 0
                        continue
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1]
                        break
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        ;(a.label = o[1]), (o = i)
                        break
                      }
                      if (o && a.label < o[2]) {
                        ;(a.label = o[2]), a.ops.push(i)
                        break
                      }
                      o[2] && a.ops.pop(), a.trys.pop()
                      continue
                  }
                  i = t.call(e, a)
                } catch (e) {
                  ;(i = [6, e]), (r = 0)
                } finally {
                  n = o = 0
                }
              if (5 & i[0]) throw i[1]
              return { value: i[0] ? i[1] : void 0, done: !0 }
            })([i, s])
          }
        }
      },
      c = function (e) {
        return s(void 0, void 0, void 0, function () {
          return u(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, o.a.sendSDKMessage({ type: i.j, payload: { scopes: e } }, !0)]
              case 1:
                return [2, t.sent().payload]
            }
          })
        })
      },
      l = ['payments', 'username', 'roles', 'platform', 'wallet_address', 'preferred_language'],
      d = function () {
        return a.a.getInstance().post('/v2/usage/track')
      },
      f = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              u(r.next(e))
            } catch (e) {
              i(e)
            }
          }
          function s(e) {
            try {
              u(r.throw(e))
            } catch (e) {
              i(e)
            }
          }
          function u(e) {
            var t
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t)
                    })).then(a, s)
          }
          u((r = r.apply(e, t || [])).next())
        })
      },
      p = function (e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1]
              return o[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          'function' == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this
            }),
          i
        )
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw new TypeError('Generator is already executing.')
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i
                      break
                    case 4:
                      return a.label++, { value: i[1], done: !1 }
                    case 5:
                      a.label++, (r = i[1]), (i = [0])
                      continue
                    case 7:
                      ;(i = a.ops.pop()), a.trys.pop()
                      continue
                    default:
                      if (
                        !((o = a.trys),
                        (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                      ) {
                        a = 0
                        continue
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1]
                        break
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        ;(a.label = o[1]), (o = i)
                        break
                      }
                      if (o && a.label < o[2]) {
                        ;(a.label = o[2]), a.ops.push(i)
                        break
                      }
                      o[2] && a.ops.pop(), a.trys.pop()
                      continue
                  }
                  i = t.call(e, a)
                } catch (e) {
                  ;(i = [6, e]), (r = 0)
                } finally {
                  n = o = 0
                }
              if (5 & i[0]) throw i[1]
              return { value: i[0] ? i[1] : void 0, done: !0 }
            })([i, s])
          }
        }
      },
      h = null,
      v = function (e) {
        return 'interstitial' === e || 'rewarded' === e
      },
      y = function (e) {
        return (
          h ||
            (h = (function (e) {
              var t = function () {
                ;(null == e ? void 0 : e.preCb) &&
                  ('function' == typeof e.preCb
                    ? e.preCb()
                    : Array.isArray(e.preCb) &&
                      e.preCb.forEach(function (e) {
                        return e()
                      }))
              }
              return {
                isAdReady: function (e) {
                  return f(void 0, void 0, void 0, function () {
                    var n, r, a
                    return p(this, function (s) {
                      switch (s.label) {
                        case 0:
                          if ((t(), !v(e))) throw new Error('Invalid argument')
                          return [4, o.a.sendSDKMessage({ type: i.i, payload: { type: e } })]
                        case 1:
                          if (
                            ((n = s.sent()),
                            !(null === (r = null == n ? void 0 : n.payload) || void 0 === r
                              ? void 0
                              : r.success) &&
                              (null === (a = null == n ? void 0 : n.payload) || void 0 === a
                                ? void 0
                                : a.pinet_unsupported))
                          )
                            throw new Error('Method unsupported in PiNet')
                          return [2, n.payload]
                      }
                    })
                  })
                },
                requestAd: function (e) {
                  return f(void 0, void 0, void 0, function () {
                    var n, r, a
                    return p(this, function (s) {
                      switch (s.label) {
                        case 0:
                          if ((t(), !v(e))) throw new Error('Invalid argument')
                          return [4, o.a.sendSDKMessage({ type: i.o, payload: { type: e } })]
                        case 1:
                          if (
                            ((n = s.sent()),
                            !(null === (r = null == n ? void 0 : n.payload) || void 0 === r
                              ? void 0
                              : r.success) &&
                              (null === (a = null == n ? void 0 : n.payload) || void 0 === a
                                ? void 0
                                : a.pinet_unsupported))
                          )
                            throw new Error('Method unsupported in PiNet')
                          return [2, n.payload]
                      }
                    })
                  })
                },
                showAd: function (e) {
                  return f(void 0, void 0, void 0, function () {
                    var n, r, a
                    return p(this, function (s) {
                      switch (s.label) {
                        case 0:
                          if ((t(), !v(e))) throw new Error('Invalid argument')
                          return [4, o.a.sendSDKMessage({ type: i.u, payload: { type: e } })]
                        case 1:
                          if (
                            ((n = s.sent()),
                            !(null === (r = null == n ? void 0 : n.payload) || void 0 === r
                              ? void 0
                              : r.success) &&
                              (null === (a = null == n ? void 0 : n.payload) || void 0 === a
                                ? void 0
                                : a.pinet_unsupported))
                          )
                            throw new Error('Method unsupported in PiNet')
                          return [2, n.payload]
                      }
                    })
                  })
                },
              }
            })(e)),
          h
        )
      },
      m = n(2),
      w = void 0,
      g = function () {
        var e = function (e) {
            var t = Object(m.d)(e, [
              'hash',
              'host',
              'hostname',
              'href',
              'origin',
              'pathname',
              'port',
              'protocol',
              'search',
            ])
            o.a.sendSDKMessage({ type: i.y, payload: { location: t } })
          },
          t = document.location.href
        return (
          e(document.location),
          new MutationObserver(function (n) {
            t !== document.location.href && ((t = document.location.href), e(document.location))
          })
        )
      },
      b = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              u(r.next(e))
            } catch (e) {
              i(e)
            }
          }
          function s(e) {
            try {
              u(r.throw(e))
            } catch (e) {
              i(e)
            }
          }
          function u(e) {
            var t
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t)
                    })).then(a, s)
          }
          u((r = r.apply(e, t || [])).next())
        })
      },
      x = function (e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1]
              return o[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          'function' == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this
            }),
          i
        )
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw new TypeError('Generator is already executing.')
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i
                      break
                    case 4:
                      return a.label++, { value: i[1], done: !1 }
                    case 5:
                      a.label++, (r = i[1]), (i = [0])
                      continue
                    case 7:
                      ;(i = a.ops.pop()), a.trys.pop()
                      continue
                    default:
                      if (
                        !((o = a.trys),
                        (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))
                      ) {
                        a = 0
                        continue
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1]
                        break
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        ;(a.label = o[1]), (o = i)
                        break
                      }
                      if (o && a.label < o[2]) {
                        ;(a.label = o[2]), a.ops.push(i)
                        break
                      }
                      o[2] && a.ops.pop(), a.trys.pop()
                      continue
                  }
                  i = t.call(e, a)
                } catch (e) {
                  ;(i = [6, e]), (r = 0)
                } finally {
                  n = o = 0
                }
              if (5 & i[0]) throw i[1]
              return { value: i[0] ? i[1] : void 0, done: !0 }
            })([i, s])
          }
        }
      },
      k = function () {
        var e = this
        ;(this.initialized = !1),
          (this.api = new a.b()),
          (this.consentedScopes = null),
          (this.checkInitialized = function () {
            if (!e.initialized)
              throw new Error(
                'Pi Network SDK was not initialized. Call init() before any other method.'
              )
          }),
          (this.Ads = y({ preCb: this.checkInitialized })),
          (this.init = function (t) {
            var n = t.version,
              r = t.sandbox
            return b(e, void 0, void 0, function () {
              return x(this, function (e) {
                if ('2.0' !== n) throw new Error('Unrecognized version number passed to init()')
                r && o.a.setSandboxMode(!0)
                try {
                  !(function () {
                    if (!w) {
                      var e = g()
                      w = e
                      var t = function () {
                        e.observe(window.document.body, { childList: !0, subtree: !0 })
                      }
                      window.document.body ? t() : window.addEventListener('DOMContentLoaded', t)
                    }
                    w.disconnect
                  })()
                } catch (e) {
                  console.error(
                    'Failed to setup location tracker. Some of native functionalities may not work properly.',
                    e
                  )
                }
                return (this.initialized = !0), this.initTracking(), [2]
              })
            })
          }),
          (this.initTracking = function () {
            d()
            var e = Date.now()
            ;['click', 'scroll', 'mousemove', 'touchend', 'change'].forEach(function (t) {
              document.addEventListener(t, function (t) {
                Date.now() - e > 15e3 && (d(), (e = Date.now()))
              })
            })
          }),
          (this.authenticate = function (t, n) {
            return b(e, void 0, void 0, function () {
              var e, d, f, p, h, v, y, m, w, g, b
              return x(this, function (x) {
                switch (x.label) {
                  case 0:
                    if (
                      (this.checkInitialized(),
                      (e = performance.now()),
                      !t.every(function (e) {
                        return l.includes(e)
                      }))
                    )
                      throw new Error(
                        "Invalid scopes found. Please check the scopes you're requesting again."
                      )
                    return [4, c(t)]
                  case 1:
                    return (
                      (d = x.sent()),
                      (f = performance.now()),
                      d.cancelled
                        ? [2, Promise.reject(new Error('User consent cancelled'))]
                        : d.pinet_unsupported
                          ? [2, Promise.reject(new Error('Method unsupported in PiNet'))]
                          : [
                              4,
                              s(void 0, void 0, void 0, function () {
                                return u(this, function (e) {
                                  switch (e.label) {
                                    case 0:
                                      return [4, o.a.sendSDKMessage({ type: i.e })]
                                    case 1:
                                      return [2, e.sent().payload]
                                  }
                                })
                              }),
                            ]
                    )
                  case 2:
                    ;(p = x.sent()),
                      (h = performance.now()),
                      this.api.init(p),
                      (v = performance.now()),
                      (this.onIncompletePaymentFound = n),
                      (x.label = 3)
                  case 3:
                    return x.trys.push([3, 5, , 6]), [4, this.api.get('/v2/me')]
                  case 4:
                    return (
                      (y = x.sent()),
                      (m = performance.now()),
                      y && this.api.accessToken
                        ? ((E = y.uid),
                          s(void 0, void 0, void 0, function () {
                            return u(this, function (e) {
                              return o.a.sendSDKMessage({ type: i.t, payload: { uid: E } }), [2]
                            })
                          }),
                          t.includes('payments') && r.a.checkForPendingPayment(n),
                          (w = performance.now()),
                          (g = { user: y, accessToken: this.api.accessToken }),
                          (this.consentedScopes = y.credentials.scopes),
                          (b = performance.now()),
                          (k = {
                            after_consent_check: f - e,
                            after_request_comm_info: h - f,
                            after_api_init: v - h,
                            after_me_endpoint: m - v,
                            after_pending_payment_check: w - m,
                            total: b - e,
                          }),
                          a.a.getInstance().post('/v2/usage/auth_time', { time_data: k }),
                          [2, g])
                        : [2, Promise.reject(new Error('Authentication failed.'))]
                    )
                  case 5:
                    return x.sent(), [2, Promise.reject(new Error('Authentication failed.'))]
                  case 6:
                    return [2]
                }
                var k, E
              })
            })
          }),
          (this.createPayment = function (t, n) {
            if ((e.checkInitialized(), Object(m.c)()))
              throw new Error('Method unsupported in PiNet')
            if (!e.consentedScopes || !e.consentedScopes.includes('payments'))
              throw new Error('Cannot create a payment without "payments" scope')
            return new r.a(t, n, e.onIncompletePaymentFound)
          }),
          (this.openShareDialog = function (t, n) {
            return (
              e.checkInitialized(),
              new Promise(function (r, a) {
                return b(e, void 0, void 0, function () {
                  var e, s, u
                  return x(this, function (c) {
                    switch (c.label) {
                      case 0:
                        return [
                          4,
                          o.a.sendSDKMessage({
                            type: i.l,
                            payload: { title: t, sharingMessage: n },
                          }),
                        ]
                      case 1:
                        return (
                          (e = c.sent()),
                          !(null === (s = null == e ? void 0 : e.payload) || void 0 === s
                            ? void 0
                            : s.success) &&
                            (null === (u = null == e ? void 0 : e.payload) || void 0 === u
                              ? void 0
                              : u.pinet_unsupported) &&
                            a(new Error('Method unsupported in PiNet')),
                          r(),
                          [2]
                        )
                    }
                  })
                })
              })
            )
          }),
          (this.openConversation = function (t) {
            return (
              e.checkInitialized(),
              new Promise(function (n, r) {
                return b(e, void 0, void 0, function () {
                  var e, a, s
                  return x(this, function (u) {
                    switch (u.label) {
                      case 0:
                        return [
                          4,
                          o.a.sendSDKMessage({ type: i.k, payload: { conversationId: t } }),
                        ]
                      case 1:
                        return (
                          (e = u.sent()),
                          !(null === (a = null == e ? void 0 : e.payload) || void 0 === a
                            ? void 0
                            : a.success) &&
                            (null === (s = null == e ? void 0 : e.payload) || void 0 === s
                              ? void 0
                              : s.pinet_unsupported) &&
                            r(new Error('Method unsupported in PiNet')),
                          n(),
                          [2]
                        )
                    }
                  })
                })
              })
            )
          }),
          (this.nativeFeaturesList = function () {
            return (
              e.checkInitialized(),
              new Promise(function (t, n) {
                return b(e, void 0, void 0, function () {
                  var e, r, a
                  return x(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return [4, o.a.sendSDKMessage({ type: i.b })]
                      case 1:
                        return (
                          (e = s.sent()),
                          !(null === (r = null == e ? void 0 : e.payload) || void 0 === r
                            ? void 0
                            : r.success) &&
                            (null === (a = null == e ? void 0 : e.payload) || void 0 === a
                              ? void 0
                              : a.pinet_unsupported) &&
                            n(new Error('Method unsupported in PiNet')),
                          t(e.payload.features),
                          [2]
                        )
                    }
                  })
                })
              })
            )
          }),
          (this.requestPermission = function (t) {
            return (
              e.checkInitialized(),
              new Promise(function (n, r) {
                return b(e, void 0, void 0, function () {
                  var e, a, s
                  return x(this, function (u) {
                    switch (u.label) {
                      case 0:
                        return [4, o.a.sendSDKMessage({ type: i.r, payload: { permission: t } })]
                      case 1:
                        return (
                          (e = u.sent()),
                          !(null === (a = null == e ? void 0 : e.payload) || void 0 === a
                            ? void 0
                            : a.success) &&
                            (null === (s = null == e ? void 0 : e.payload) || void 0 === s
                              ? void 0
                              : s.pinet_unsupported) &&
                            r(new Error('Method unsupported in PiNet')),
                          n(e.payload.granted),
                          [2]
                        )
                    }
                  })
                })
              })
            )
          }),
          (this.copyText = function (t) {
            return b(e, void 0, void 0, function () {
              var e = this
              return x(this, function (n) {
                return (
                  this.checkInitialized(),
                  [
                    2,
                    new Promise(function (n, r) {
                      return b(e, void 0, void 0, function () {
                        var e, a, s
                        return x(this, function (u) {
                          switch (u.label) {
                            case 0:
                              return [4, o.a.sendSDKMessage({ type: i.f, payload: { text: t } })]
                            case 1:
                              return (
                                (e = u.sent()),
                                !(null === (a = null == e ? void 0 : e.payload) || void 0 === a
                                  ? void 0
                                  : a.success) &&
                                  (null === (s = null == e ? void 0 : e.payload) || void 0 === s
                                    ? void 0
                                    : s.pinet_unsupported) &&
                                  r(new Error('Method unsupported in PiNet')),
                                [2, n()]
                              )
                          }
                        })
                      })
                    }),
                  ]
                )
              })
            })
          }),
          (this.openUrlInSystemBrowser = function (t) {
            return b(e, void 0, void 0, function () {
              var e = this
              return x(this, function (n) {
                return (
                  this.checkInitialized(),
                  [
                    2,
                    new Promise(function (n, r) {
                      return b(e, void 0, void 0, function () {
                        var e, a, s
                        return x(this, function (u) {
                          switch (u.label) {
                            case 0:
                              return [4, o.a.sendSDKMessage({ type: i.m, payload: { url: t } })]
                            case 1:
                              return (
                                (e = u.sent()),
                                (null === (a = e.payload) || void 0 === a ? void 0 : a.success)
                                  ? [2, n()]
                                  : e.payload.pinet_unsupported
                                    ? [2, r(new Error('Method unsupported in PiNet'))]
                                    : (
                                          null === (s = e.payload) || void 0 === s
                                            ? void 0
                                            : s.message
                                        )
                                      ? [2, r(new Error(e.payload.message))]
                                      : [2, r(new Error('Unexpected error'))]
                              )
                          }
                        })
                      })
                    }),
                  ]
                )
              })
            })
          }),
          (this.getPiHostAppName = function () {
            return new Promise(function (t, n) {
              return b(e, void 0, void 0, function () {
                var e
                return x(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (Object(m.c)()) return [2, t('pi-net')]
                      r.label = 1
                    case 1:
                      return r.trys.push([1, 3, , 4]), [4, o.a.sendSDKMessage({ type: i.q })]
                    case 2:
                      return (
                        (null == (e = r.sent()) ? void 0 : e.payload) ||
                          n(new Error('Unexpected error')),
                        [2, t(e.payload.hostApp)]
                      )
                    case 3:
                      return r.sent(), n(new Error('Unexpected error')), [3, 4]
                    case 4:
                      return [2]
                  }
                })
              })
            })
          }),
          (this.getPiHostAppInfo = function () {
            return b(e, void 0, void 0, function () {
              var e = this
              return x(this, function (t) {
                return [
                  2,
                  new Promise(function (t, n) {
                    return b(e, void 0, void 0, function () {
                      var e
                      return x(this, function (r) {
                        switch (r.label) {
                          case 0:
                            return Object(m.c)()
                              ? [2, t({ hostApp: 'pi-net' })]
                              : [4, o.a.sendSDKMessage({ type: i.p })]
                          case 1:
                            return (
                              (null == (e = r.sent()) ? void 0 : e.payload) ||
                                n(new Error('Unexpected error')),
                              [2, t(e.payload)]
                            )
                        }
                      })
                    })
                  }),
                ]
              })
            })
          }),
          (this.scanQrCode = function (t) {
            return b(e, void 0, void 0, function () {
              var e = this
              return x(this, function (n) {
                return (
                  this.checkInitialized(),
                  [
                    2,
                    new Promise(function (n, r) {
                      return b(e, void 0, void 0, function () {
                        var e, a, s, u
                        return x(this, function (c) {
                          switch (c.label) {
                            case 0:
                              return [4, o.a.sendSDKMessage({ type: i.s, payload: { config: t } })]
                            case 1:
                              return (
                                (e = c.sent()),
                                'string' ==
                                  typeof (null === (a = null == e ? void 0 : e.payload) ||
                                  void 0 === a
                                    ? void 0
                                    : a.data) ||
                                null ===
                                  (null === (s = null == e ? void 0 : e.payload) || void 0 === s
                                    ? void 0
                                    : s.data)
                                  ? n(e.payload.data)
                                  : r(
                                      new Error(
                                        (null === (u = null == e ? void 0 : e.payload) ||
                                        void 0 === u
                                          ? void 0
                                          : u.error) || 'Unexpected error'
                                      )
                                    ),
                                [2]
                              )
                          }
                        })
                      })
                    }),
                  ]
                )
              })
            })
          }),
          (this.checkUserHasMiningApp = function () {
            return b(e, void 0, void 0, function () {
              var e = this
              return x(this, function (t) {
                return (
                  this.checkInitialized(),
                  [
                    2,
                    new Promise(function (t, n) {
                      return b(e, void 0, void 0, function () {
                        var e, r, a, s
                        return x(this, function (u) {
                          switch (u.label) {
                            case 0:
                              return [4, o.a.sendSDKMessage({ type: i.c })]
                            case 1:
                              return (
                                (e = u.sent()),
                                (
                                  null === (a = null == e ? void 0 : e.payload) || void 0 === a
                                    ? void 0
                                    : a.success
                                )
                                  ? t({ userHasMiningApp: e.payload.userHasMiningApp })
                                  : ((r =
                                      null === (s = null == e ? void 0 : e.payload) || void 0 === s
                                        ? void 0
                                        : s.error),
                                    n(new Error(r || 'Unexpected error'))),
                                [2]
                              )
                          }
                        })
                      })
                    }),
                  ]
                )
              })
            })
          }),
          (this.checkUserHasPiBrowser = function () {
            return b(e, void 0, void 0, function () {
              var e = this
              return x(this, function (t) {
                return (
                  this.checkInitialized(),
                  [
                    2,
                    new Promise(function (t, n) {
                      return b(e, void 0, void 0, function () {
                        var e, r, a
                        return x(this, function (s) {
                          switch (s.label) {
                            case 0:
                              return [4, o.a.sendSDKMessage({ type: i.d })]
                            case 1:
                              return (
                                (e = s.sent()),
                                (
                                  null === (r = null == e ? void 0 : e.payload) || void 0 === r
                                    ? void 0
                                    : r.success
                                )
                                  ? t({ userHasPiBrowser: e.payload.userHasPiBrowser })
                                  : n(
                                      new Error(
                                        (null === (a = null == e ? void 0 : e.payload) ||
                                        void 0 === a
                                          ? void 0
                                          : a.error) || 'Unexpected error'
                                      )
                                    ),
                                [2]
                              )
                          }
                        })
                      })
                    }),
                  ]
                )
              })
            })
          }),
          (this.showDownloadPiBrowserModal = function () {
            return b(e, void 0, void 0, function () {
              var e = this
              return x(this, function (t) {
                return (
                  this.checkInitialized(),
                  [
                    2,
                    new Promise(function (t, n) {
                      return b(e, void 0, void 0, function () {
                        var e, r, a
                        return x(this, function (s) {
                          switch (s.label) {
                            case 0:
                              return Object(m.c)()
                                ? [4, o.a.sendSDKMessage({ type: i.v })]
                                : [2, n(new Error('Method unsupported'))]
                            case 1:
                              return (
                                (e = s.sent()),
                                (
                                  null === (r = null == e ? void 0 : e.payload) || void 0 === r
                                    ? void 0
                                    : r.success
                                )
                                  ? t()
                                  : n(
                                      new Error(
                                        (null === (a = null == e ? void 0 : e.payload) ||
                                        void 0 === a
                                          ? void 0
                                          : a.error) || 'Unexpected error'
                                      )
                                    ),
                                [2]
                              )
                          }
                        })
                      })
                    }),
                  ]
                )
              })
            })
          }),
          (this.getSafeAreaInsets = function () {
            return b(e, void 0, void 0, function () {
              var e = this
              return x(this, function (t) {
                return [
                  2,
                  new Promise(function (t, n) {
                    return b(e, void 0, void 0, function () {
                      var e, r, a
                      return x(this, function (s) {
                        switch (s.label) {
                          case 0:
                            return Object(m.c)()
                              ? [2, n(new Error('Method unsupported in PiNet'))]
                              : [4, o.a.sendSDKMessage({ type: i.h })]
                          case 1:
                            return (
                              (e = s.sent()),
                              (
                                null === (r = null == e ? void 0 : e.payload) || void 0 === r
                                  ? void 0
                                  : r.success
                              )
                                ? t({ safeAreaInsets: e.payload.safeAreaInsets })
                                : n(
                                    new Error(
                                      (null === (a = null == e ? void 0 : e.payload) || void 0 === a
                                        ? void 0
                                        : a.error) || 'Unexpected'
                                    )
                                  ),
                              [2]
                            )
                        }
                      })
                    })
                  }),
                ]
              })
            })
          }),
          a.a.setInstance(this.api)
      }
    t.default = k
  },
])
