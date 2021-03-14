// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, cache, entry, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject.parcelRequire === 'function' &&
    globalObject.parcelRequire;
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  globalObject.parcelRequire = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7fd69a94d7fc04ca16c45c6815f196c3":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "d264f8d6ffb59c88148c26c84bda3ba0";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH */

var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept, acceptedAssets; // eslint-disable-next-line no-redeclare

var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
  var port = HMR_PORT || location.port;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    acceptedAssets = {};
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH); // Handle HMR Update

      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || hmrAcceptCheck(global.parcelRequire, asset.id);

        if (didAccept) {
          handled = true;
        }
      });

      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });

        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];

          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      } // Render the fancy html overlay


      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      document.body.appendChild(overlay);
    }
  };

  ws.onerror = function (e) {
    console.error(e.message);
  };

  ws.onclose = function (e) {
    console.warn('[parcel] 🚨 Connection to the HMR server was lost');
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}

function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';

  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }

  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    if (link.parentNode !== null) {
      link.parentNode.removeChild(link);
    }
  };

  newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now());
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      var absolute = /^https?:\/\//i.test(links[i].getAttribute('href'));

      if (!absolute) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    if (asset.type === 'css') {
      reloadCSS();
    } else {
      var fn = new Function('require', 'module', 'exports', asset.output);
      modules[asset.id] = [fn, asset.depsByBundle[bundle.HMR_BUNDLE_ID]];
    }
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1]);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(global.parcelRequire, id);
      });

      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }

  acceptedAssets[id] = true;
}
},{}],"4b743e59f6da7136c12b92baa9645fed":[function(require,module,exports) {
module.exports = JSON.parse("[{\"1Fornamn\":\"Linn\",\"2Efternamn\":\"Ahlbom\",\"3Adress1\":\"Box 19086\",\"4Postnr\":\"400 12\",\"5Ort\":\"Göteborg\",\"6Lopnr\":1,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=1\"},{\"1Fornamn\":\"Ellen\",\"2Efternamn\":\"Adalberth\",\"3Adress1\":\"Eldargatan 4B\",\"4Postnr\":\"413 15\",\"5Ort\":\"Göteborg\",\"6Lopnr\":2,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=2\"},{\"1Fornamn\":\"Fanny\",\"2Efternamn\":\"Alvermalm\",\"3Adress1\":\"Kullegatan 3A\",\"4Postnr\":\"412 62\",\"5Ort\":\"Göteborg\",\"6Lopnr\":3,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=3\"},{\"1Fornamn\":\"Sarah\",\"2Efternamn\":\"Malm\",\"3Adress1\":\"Karl Johansgatan 49D\",\"4Postnr\":\"414 55\",\"5Ort\":\"Göteborg\",\"6Lopnr\":4,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/4\"},{\"1Fornamn\":\"Evelina\",\"2Efternamn\":\"Bakos\",\"3Adress1\":\"Lådspikaregatan 2\",\"4Postnr\":\"416 80\",\"5Ort\":\"Göteborg\",\"6Lopnr\":5,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/5\"},{\"1Fornamn\":\"Josefin\",\"2Efternamn\":\"Bech\",\"3Adress1\":\"Vadlagsgatan 3\",\"4Postnr\":\"421 66\",\"5Ort\":\"Västra Frölunda\",\"6Lopnr\":6,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=6\"},{\"1Fornamn\":\"Frida\",\"2Efternamn\":\"Borbély\",\"3Adress1\":\"Fanjunkaregatan 7F\",\"4Postnr\":\"41504\",\"5Ort\":\"Göteborg\",\"6Lopnr\":7,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=7\"},{\"1Fornamn\":\"Lisa\",\"2Efternamn\":\"Schneiderman\",\"3Adress1\":\"Eklanda Skog 34\",\"4Postnr\":\"43149\",\"5Ort\":\"Mölndal\",\"6Lopnr\":8,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=8\"},{\"1Fornamn\":\"Matilda\",\"2Efternamn\":\"Carlsdotter\",\"3Adress1\":\"Gustavsplatsen 1B\",\"4Postnr\":\"416 69\",\"5Ort\":\"Göteborg\",\"6Lopnr\":9,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=9\"},{\"1Fornamn\":\"Teresa\",\"2Efternamn\":\"Eriksson\",\"3Adress1\":\"Hårsåsen Skogshöjden 1\",\"4Postnr\":\"50765\",\"5Ort\":\"Borås\",\"6Lopnr\":10,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=10\"},{\"1Fornamn\":\"Adam\",\"2Efternamn\":\"Augustsson\",\"3Adress1\":\"Balladgatan 12\",\"4Postnr\":\"50471\",\"5Ort\":\"Borås\",\"6Lopnr\":11,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=11\"},{\"1Fornamn\":\"Philip\",\"2Efternamn\":\"Holmsten\",\"3Adress1\":\"Solvarvsgatan 30\",\"4Postnr\":\"415 31\",\"5Ort\":\"Göteborg\",\"6Lopnr\":12,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=12\"},{\"1Fornamn\":\"Lisa\",\"2Efternamn\":\"Löfström\",\"3Adress1\":\"Karl Johansgatan 15A\",\"4Postnr\":\"414 59\",\"5Ort\":\"Göteborg\",\"6Lopnr\":13,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=13\"},{\"1Fornamn\":\"Johanna\",\"2Efternamn\":\"Hellquist\",\"3Adress1\":\"Streteredsvägen 1B\",\"4Postnr\":\"428 32\",\"5Ort\":\"Kållered\",\"6Lopnr\":14,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/14\"},{\"1Fornamn\":\"Alda\",\"2Efternamn\":\"Cripljanin\",\"3Adress1\":\"Munkebäcksgatan 26 C\",\"4Postnr\":\"416 53\",\"5Ort\":\"Göteborg\",\"6Lopnr\":15,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/15\"},{\"1Fornamn\":\"Josefin\",\"2Efternamn\":\"Eldh\",\"3Adress1\":\"Skiftesgatan 2C\",\"4Postnr\":\"417 39\",\"5Ort\":\"Göteborg\",\"6Lopnr\":16,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/16\"},{\"1Fornamn\":\"Ava\",\"2Efternamn\":\"Nikpay\",\"3Adress1\":\"Norra Ågatan 5F\",\"4Postnr\":\"416 49\",\"5Ort\":\"Göteborg \",\"6Lopnr\":17,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/17\"},{\"1Fornamn\":\"Cornelia\",\"2Efternamn\":\"Nordlund\",\"3Adress1\":\"Schéelegatan 4A\",\"4Postnr\":\"416 60\",\"5Ort\":\"Göteborg\",\"6Lopnr\":18,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/18\"},{\"1Fornamn\":\"Edvin\",\"2Efternamn\":\"Oldin\",\"3Adress1\":\"Sägengatan 66\",\"4Postnr\":\"42258\",\"5Ort\":\"Hisings Backa\",\"6Lopnr\":19,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/19\"},{\"1Fornamn\":\"Lisa\",\"2Efternamn\":\"Persson\",\"3Adress1\":\"Smörbollsgatan 1A\",\"4Postnr\":\"41718\",\"5Ort\":\"Göteborg\",\"6Lopnr\":20,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/20\"},{\"1Fornamn\":\"Hanna\",\"2Efternamn\":\"Pålsson\",\"3Adress1\":\"Zachrissonsgatan 7E\",\"4Postnr\":\"416 74\",\"5Ort\":\"Göteborg\",\"6Lopnr\":21,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/21\"},{\"1Fornamn\":\"Tova\",\"2Efternamn\":\"Rane\",\"3Adress1\":\"Annebergsvägen 53\",\"4Postnr\":\"437 93\",\"5Ort\":\"Lindome\",\"6Lopnr\":22,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=22\"},{\"1Fornamn\":\"Anton\",\"2Efternamn\":\"Schmidt\",\"3Adress1\":\"Ponnybacken 1\",\"4Postnr\":\"425 42\",\"5Ort\":\"Göteborg\",\"6Lopnr\":23,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=23\"},{\"1Fornamn\":\"Julia\",\"2Efternamn\":\"Sikström\",\"3Adress1\":\"Väderlekstorget 2\",\"4Postnr\":\"41832\",\"5Ort\":\"Göteborg\",\"6Lopnr\":24,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=24\"},{\"1Fornamn\":\"Annie\",\"2Efternamn\":\"Simlund\",\"3Adress1\":\"Asperögatan 3B\",\"4Postnr\":\"414 74\",\"5Ort\":\"Göteborg\",\"6Lopnr\":25,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=25\"},{\"1Fornamn\":\"Dara\",\"2Efternamn\":\"Torabpour\",\"3Adress1\":\"Folkungagatan 6B\",\"4Postnr\":\"411 02\",\"5Ort\":\"Göteborg\",\"6Lopnr\":26,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=26\"},{\"1Fornamn\":\"Rebecca\",\"2Efternamn\":\"Wahl\",\"3Adress1\":\"Sparvgatan 3D\",\"4Postnr\":\"41 667\",\"5Ort\":\"Göteborg\",\"6Lopnr\":27,\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=27\"}]");
},{}]},{},["7fd69a94d7fc04ca16c45c6815f196c3","4b743e59f6da7136c12b92baa9645fed"], null)

//# sourceMappingURL=invites.d264f8d6.js.map
