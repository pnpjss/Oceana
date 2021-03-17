// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
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
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

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
})({"2FmRy":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "147c3be9838f78fc816d5dfc1397955d";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
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
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
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
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
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
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
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
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
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
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
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
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"6fOLN":[function(require,module,exports) {
const { doc } = require('prettier');

document.addEventListener('DOMContentLoaded', () => {
  const page3btns = document.querySelectorAll(
    '.grid-container-section2 .grid-section2 button'
  );

  const btnsUnderscores = document.querySelectorAll(
    '.grid-container-section2 .grid-section2 .hover-line'
  );
  page3btns.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
      btnsUnderscores.forEach((underscore) => {
        if (underscore.id === btn.id) {
          underscore.style.width = '6rem';
        }
      });
    });
    btn.addEventListener('mouseout', () => {
      btnsUnderscores.forEach((underscore) => {
        if (underscore.id === btn.id) {
          underscore.style.width = '0rem';
        }
      });
    });
  });

  const data = require('./invites.json');

  function sortUser() {
    const urlParams = new URLSearchParams(window.location.search);
    let userId = parseInt(urlParams.get('id'));

    if (isNaN(userId)) {
      userId = 0;
      const name = document.querySelector('.user-name');
      name.textContent = 'Grattis ' + 'Jane' + ' ' + 'Doe!';
      return userId;
    } else if (userId !== null) {
      userId--;
      const name = document.querySelector('.user-name');
      const subscribeInput = document.querySelector('.input-email');
      name.textContent =
        'Grattis ' +
        data[userId]['1Fornamn'] +
        ' ' +
        data[userId]['2Efternamn'] +
        '!';

      subscribeInput.placeholder = data[userId]['8Epost'];

      return userId;
    }
  }

  const headerBtns = document.querySelectorAll(
    '.btn-calendar, .btn-cart, .btn-search'
  );
  headerBtns.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.style.transform = `scale(1.4)`;
    });
  });
  headerBtns.forEach((item) => {
    item.addEventListener('mouseout', () => {
      item.style.transform = `scale(1)`;
    });
  });

  let userId = sortUser();

  // fetch the form background and form
  const formBg = document.querySelector('.form-bg');
  const form = document.querySelector('.confirm-form');

  let formContent = document.querySelectorAll(
    '.form-bg, .form-bg h2, .form-bg p, .form-bg .confirm-form'
  );
  console.log(formContent);
  formContent.forEach((item) => {
    console.log(item);
    item.style.opacity = `0`;
    item.style.zIndex = `-1`;
  });

  // create button for confirming ticket
  const confirmBtn = document.querySelector('.confirm-btn');
  confirmBtn.addEventListener('click', () => {
    // add functions
    console.log('button clicked');
    formContent.forEach((item) => {
      console.log(item);
      item.style.opacity = `1`;
      item.style.zIndex = `10`;
    });

    // display form and formbg
    formBg.style.height = `92vh`;
  });

  // the exit button
  const exitBtn = document.querySelector('.exit-btn');
  console.log(exitBtn);
  // the form background

  console.log(exitBtn);
  exitBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    formBg.style.height = `0vh`;
    console.log('exit button click');
    formContent.forEach((item) => {
      console.log(item);
      item.style.opacity = `0`;
      item.style.zIndex = `-1`;
    });
  });
});

// const confirmBtn = document.querySelector('.confirm-btn');
// confirmBtn.addEventListener('click', () => {
//   let page2 = document.querySelector('.grid-container-section1 .item2');
//   // create form and form items
//   let form = document.createElement('form');
//   // exit button
//   let exitBtn = document.createElement('button');
//   exitBtn.setAttribute('class', 'exit-btn');
//   exitBtn.setAttribute('type', 'submit');

//   exitBtn.addEventListener('click', (ev) => {
//     ev.preventDefault();
//     form.remove();
//   });

//   page2.append(form);
//   function formStyles() {
//     form.classList.add('confirm-form');
//     form.style.transition = `200ms ease-out`;
//     form.style.height = `100vh`;
//     form.style.opacity = `1`;
//     form.style.zIndex = `5`;
//   }
//   setTimeout(formStyles, 1);
// // exit button animation
// let exitBtnObject = document.createElement('object');

// exitBtnObject.setAttribute('id', 'exit-object');
// exitBtnObject.setAttribute('type', 'image/svg+xml');
// exitBtnObject.setAttribute('data', '/images/exit_btn.svg');

// // firstname input and label
// let firstNameInput = document.createElement('input');
// let firstNameLabel = document.createElement('label');
// firstNameInput.setAttribute('class', 'input-firstname');
// firstNameInput.placeholder = data[userId]['1Fornamn'];
// firstNameInput.setAttribute('type', 'text');
// firstNameLabel.setAttribute('for', 'input-firstname');
// firstNameLabel.textContent = `first name`;

// //lastname input and label
// let lastNameInput = document.createElement('input');
// let lastNameLabel = document.createElement('label');
// lastNameInput.placeholder = data[userId]['2Efternamn'];
// lastNameInput.setAttribute('class', 'input-lastname');
// lastNameInput.setAttribute('type', 'text');
// lastNameLabel.setAttribute('for', 'input-lastname');
// lastNameLabel.textContent = `last name`;

// //email input and label
// let emailInput = document.createElement('input');
// let emailLabel = document.createElement('label');
// emailInput.setAttribute('class', 'input-email');
// emailInput.setAttribute('type', 'text');
// emailLabel.setAttribute('for', 'input-email');
// emailLabel.textContent = `email`;

// // submit button
// let submitBtn = document.createElement('button');
// submitBtn.textContent = `Submit`;
// submitBtn.setAttribute('type', 'submit');
// submitBtn.setAttribute('class', 'submit-btn');

// // append all items
// form.append(exitBtn);
// form.append(exitBtnObject);
// form.append(firstNameLabel);
// form.append(firstNameInput);
// form.append(lastNameLabel);
// form.append(lastNameInput);
// form.append(emailLabel);
// form.append(emailInput);
// form.append(submitBtn);

// // append the svg object
// // needs to run by timeout or else content document is not yet loaded
// function appendStuff() {
//   let object = document.querySelector('.confirm-form');
//   console.log(object);
//   console.log('exit-objectet efter att det appendats'); // nej
//   let contentDocument = object.contentDocument;
//   console.log(contentDocument);
//   let objectSvg = contentDocument.getElementById('evzbzzngym61');
//   console.log(objectSvg);
//   // let exitBtnSvg = contentDocument.querySelector('#evzbzzngym61');
// }
// setTimeout(appendStuff, 1000);

// });

},{"./invites.json":"3biW1","prettier":"2wsV2"}],"3biW1":[function(require,module,exports) {
module.exports = JSON.parse("[{\"1Fornamn\":\"Linn\",\"2Efternamn\":\"Ahlbom\",\"3Adress1\":\"Box 19086\",\"4Postnr\":\"400 12\",\"5Ort\":\"Göteborg\",\"6Lopnr\":1,\"8Epost\":\"@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=1\"},{\"1Fornamn\":\"Ellen\",\"2Efternamn\":\"Adalberth\",\"3Adress1\":\"Eldargatan 4B\",\"4Postnr\":\"413 15\",\"5Ort\":\"Göteborg\",\"6Lopnr\":2,\"8Epost\":\"ellada0224@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=2\"},{\"1Fornamn\":\"Fanny\",\"2Efternamn\":\"Alvermalm\",\"3Adress1\":\"Kullegatan 3A\",\"4Postnr\":\"412 62\",\"5Ort\":\"Göteborg\",\"6Lopnr\":3,\"8Epost\":\"fanalv2001@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=3\"},{\"1Fornamn\":\"Sarah\",\"2Efternamn\":\"Malm\",\"3Adress1\":\"Karl Johansgatan 49D\",\"4Postnr\":\"414 55\",\"5Ort\":\"Göteborg\",\"6Lopnr\":4,\"8Epost\":\"sarnal2003@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/4\"},{\"1Fornamn\":\"Evelina\",\"2Efternamn\":\"Bakos\",\"3Adress1\":\"Lådspikaregatan 2\",\"4Postnr\":\"416 80\",\"5Ort\":\"Göteborg\",\"6Lopnr\":5,\"8Epost\":\"evebak0709@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/5\"},{\"1Fornamn\":\"Josefin\",\"2Efternamn\":\"Bech\",\"3Adress1\":\"Vadlagsgatan 3\",\"4Postnr\":\"421 66\",\"5Ort\":\"Västra Frölunda\",\"6Lopnr\":6,\"8Epost\":\"josbec0922@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=6\"},{\"1Fornamn\":\"Frida\",\"2Efternamn\":\"Borbély\",\"3Adress1\":\"Fanjunkaregatan 7F\",\"4Postnr\":41504,\"5Ort\":\"Göteborg\",\"6Lopnr\":7,\"8Epost\":\"fribor0412@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=7\"},{\"1Fornamn\":\"Lisa\",\"2Efternamn\":\"Schneiderman\",\"3Adress1\":\"Eklanda Skog 34\",\"4Postnr\":43149,\"5Ort\":\"Mölndal\",\"6Lopnr\":8,\"8Epost\":\"lissch0301@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=8\"},{\"1Fornamn\":\"Matilda\",\"2Efternamn\":\"Carlsdotter\",\"3Adress1\":\"Gustavsplatsen 1B\",\"4Postnr\":\"416 69\",\"5Ort\":\"Göteborg\",\"6Lopnr\":9,\"8Epost\":\"matcar2005@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=9\"},{\"1Fornamn\":\"Teresa\",\"2Efternamn\":\"Eriksson\",\"3Adress1\":\"Hårsåsen Skogshöjden 1\",\"4Postnr\":50765,\"5Ort\":\"Borås\",\"6Lopnr\":10,\"8Epost\":\"tereri1123@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=10\"},{\"1Fornamn\":\"Adam\",\"2Efternamn\":\"Augustsson\",\"3Adress1\":\"Balladgatan 12\",\"4Postnr\":50471,\"5Ort\":\"Borås\",\"6Lopnr\":11,\"8Epost\":\"adaagu2001@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=11\"},{\"1Fornamn\":\"Philip\",\"2Efternamn\":\"Holmsten\",\"3Adress1\":\"Solvarvsgatan 30\",\"4Postnr\":\"415 31\",\"5Ort\":\"Göteborg\",\"6Lopnr\":12,\"8Epost\":\"phihol0717@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=12\"},{\"1Fornamn\":\"Lisa\",\"2Efternamn\":\"Löfström\",\"3Adress1\":\"Karl Johansgatan 15A\",\"4Postnr\":\"414 59\",\"5Ort\":\"Göteborg\",\"6Lopnr\":13,\"8Epost\":\"lislof2002@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=13\"},{\"1Fornamn\":\"Johanna\",\"2Efternamn\":\"Hellquist\",\"3Adress1\":\"Streteredsvägen 1B\",\"4Postnr\":\"428 32\",\"5Ort\":\"Kållered\",\"6Lopnr\":14,\"8Epost\":\"johhel2011@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/14\"},{\"1Fornamn\":\"Alda\",\"2Efternamn\":\"Cripljanin\",\"3Adress1\":\"Munkebäcksgatan 26 C\",\"4Postnr\":\"416 53\",\"5Ort\":\"Göteborg\",\"6Lopnr\":15,\"8Epost\":\"aldcri0514@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/15\"},{\"1Fornamn\":\"Josefin\",\"2Efternamn\":\"Eldh\",\"3Adress1\":\"Skiftesgatan 2C\",\"4Postnr\":\"417 39\",\"5Ort\":\"Göteborg\",\"6Lopnr\":16,\"8Epost\":\"joseld0508@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/16\"},{\"1Fornamn\":\"Ava\",\"2Efternamn\":\"Nikpay\",\"3Adress1\":\"Norra Ågatan 5F\",\"4Postnr\":\"416 49\",\"5Ort\":\"Göteborg\",\"6Lopnr\":17,\"8Epost\":\"negnik0325@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/17\"},{\"1Fornamn\":\"Cornelia\",\"2Efternamn\":\"Nordlund\",\"3Adress1\":\"Schéelegatan 4A\",\"4Postnr\":\"416 60\",\"5Ort\":\"Göteborg\",\"6Lopnr\":18,\"8Epost\":\"cornor2001@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/18\"},{\"1Fornamn\":\"Edvin\",\"2Efternamn\":\"Oldin\",\"3Adress1\":\"Sägengatan 66\",\"4Postnr\":42258,\"5Ort\":\"Hisings Backa\",\"6Lopnr\":19,\"8Epost\":\"edvold0504@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/19\"},{\"1Fornamn\":\"Lisa\",\"2Efternamn\":\"Persson\",\"3Adress1\":\"Smörbollsgatan 1A\",\"4Postnr\":41718,\"5Ort\":\"Göteborg\",\"6Lopnr\":20,\"8Epost\":\"lisper2004@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/20\"},{\"1Fornamn\":\"Hanna\",\"2Efternamn\":\"Pålsson\",\"3Adress1\":\"Zachrissonsgatan 7E\",\"4Postnr\":\"416 74\",\"5Ort\":\"Göteborg\",\"6Lopnr\":21,\"8Epost\":\"hansta1207@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/21\"},{\"1Fornamn\":\"Tova\",\"2Efternamn\":\"Rane\",\"3Adress1\":\"Annebergsvägen 53\",\"4Postnr\":\"437 93\",\"5Ort\":\"Lindome\",\"6Lopnr\":22,\"8Epost\":\"tovran2001@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=22\"},{\"1Fornamn\":\"Anton\",\"2Efternamn\":\"Schmidt\",\"3Adress1\":\"Ponnybacken 1\",\"4Postnr\":\"425 42\",\"5Ort\":\"Göteborg\",\"6Lopnr\":23,\"8Epost\":\"antsch0929@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=23\"},{\"1Fornamn\":\"Julia\",\"2Efternamn\":\"Sikström\",\"3Adress1\":\"Väderlekstorget 2\",\"4Postnr\":41832,\"5Ort\":\"Göteborg\",\"6Lopnr\":24,\"8Epost\":\"julsik2001@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=24\"},{\"1Fornamn\":\"Annie\",\"2Efternamn\":\"Simlund\",\"3Adress1\":\"Asperögatan 3B\",\"4Postnr\":\"414 74\",\"5Ort\":\"Göteborg\",\"6Lopnr\":25,\"8Epost\":\"annsim1102@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=25\"},{\"1Fornamn\":\"Dara\",\"2Efternamn\":\"Torabpour\",\"3Adress1\":\"Folkungagatan 6B\",\"4Postnr\":\"411 02\",\"5Ort\":\"Göteborg\",\"6Lopnr\":26,\"8Epost\":\"dartor0405@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=26\"},{\"1Fornamn\":\"Rebecca\",\"2Efternamn\":\"Wahl\",\"3Adress1\":\"Sparvgatan 3D\",\"4Postnr\":\"41 667\",\"5Ort\":\"Göteborg\",\"6Lopnr\":27,\"8Epost\":\"rebwah2001@skola.goteborg.se\",\"7Hemsida\":\"https://oceana-git-master-pnpjss.vercel.app/\",\"#Uniklandningssida\":\"https://oceana-git-master-pnpjss.vercel.app/id=27\"}]");
},{}],"2wsV2":[function(require,module,exports) {
var define;
var global = arguments[3];
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).prettier = t();
})(this, function () {
  "use strict";
  function e(e, t) {
    if (null == e) return {};
    var n, r, o = {}, u = Object.keys(e);
    for (r = 0; r < u.length; r++) (n = u[r], t.indexOf(n) >= 0 || (o[n] = e[n]));
    return o;
  }
  function t(e, t) {
    return (t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
      raw: {
        value: Object.freeze(t)
      }
    })));
  }
  var n = {
    name: "prettier",
    version: "2.2.1",
    description: "Prettier is an opinionated code formatter",
    bin: "./bin/prettier.js",
    repository: "prettier/prettier",
    homepage: "https://prettier.io",
    author: "James Long",
    license: "MIT",
    main: "./index.js",
    browser: "./standalone.js",
    unpkg: "./standalone.js",
    engines: {
      node: ">=10.13.0"
    },
    files: ["index.js", "standalone.js", "src", "bin"],
    dependencies: {
      "@angular/compiler": "10.2.3",
      "@babel/code-frame": "7.10.4",
      "@babel/parser": "7.12.5",
      "@glimmer/syntax": "0.66.0",
      "@iarna/toml": "2.2.5",
      "@typescript-eslint/typescript-estree": "4.8.1",
      "angular-estree-parser": "2.2.1",
      "angular-html-parser": "1.7.1",
      camelcase: "6.2.0",
      chalk: "4.1.0",
      "ci-info": "watson/ci-info#f43f6a1cefff47fb361c88cf4b943fdbcaafe540",
      "cjk-regex": "2.0.0",
      cosmiconfig: "7.0.0",
      dashify: "2.0.0",
      diff: "5.0.0",
      editorconfig: "0.15.3",
      "editorconfig-to-prettier": "0.2.0",
      "escape-string-regexp": "4.0.0",
      espree: "7.3.0",
      esutils: "2.0.3",
      "fast-glob": "3.2.4",
      "fast-json-stable-stringify": "2.1.0",
      "find-parent-dir": "0.3.0",
      "flow-parser": "0.138.0",
      "get-stdin": "8.0.0",
      globby: "11.0.1",
      graphql: "15.4.0",
      "html-element-attributes": "2.3.0",
      "html-styles": "1.0.0",
      "html-tag-names": "1.1.5",
      "html-void-elements": "1.0.5",
      ignore: "4.0.6",
      "jest-docblock": "26.0.0",
      json5: "2.1.3",
      leven: "3.1.0",
      "lines-and-columns": "1.1.6",
      "linguist-languages": "7.12.1",
      lodash: "4.17.20",
      mem: "8.0.0",
      meriyah: "3.1.6",
      minimatch: "3.0.4",
      minimist: "1.2.5",
      "n-readlines": "1.0.1",
      outdent: "0.7.1",
      "parse-srcset": "ikatyang/parse-srcset#54eb9c1cb21db5c62b4d0e275d7249516df6f0ee",
      "please-upgrade-node": "3.2.0",
      "postcss-less": "3.1.4",
      "postcss-media-query-parser": "0.2.3",
      "postcss-scss": "2.1.1",
      "postcss-selector-parser": "2.2.3",
      "postcss-values-parser": "2.0.1",
      "regexp-util": "1.2.2",
      "remark-footnotes": "2.0.0",
      "remark-math": "3.0.1",
      "remark-parse": "8.0.3",
      resolve: "1.19.0",
      semver: "7.3.2",
      "string-width": "4.2.0",
      typescript: "4.1.2",
      "unicode-regex": "3.0.0",
      unified: "9.2.0",
      vnopts: "1.0.2",
      "yaml-unist-parser": "1.3.1"
    },
    devDependencies: {
      "@babel/core": "7.12.3",
      "@babel/preset-env": "7.12.1",
      "@babel/types": "7.12.6",
      "@glimmer/reference": "0.66.0",
      "@rollup/plugin-alias": "3.1.1",
      "@rollup/plugin-babel": "5.2.1",
      "@rollup/plugin-commonjs": "16.0.0",
      "@rollup/plugin-json": "4.1.0",
      "@rollup/plugin-node-resolve": "10.0.0",
      "@rollup/plugin-replace": "2.3.4",
      "@types/estree": "0.0.45",
      "@types/node": "14.14.0",
      "@typescript-eslint/types": "4.8.1",
      "babel-jest": "26.6.3",
      "babel-loader": "8.2.1",
      benchmark: "2.1.4",
      "builtin-modules": "3.1.0",
      "cross-env": "7.0.2",
      cspell: "4.2.2",
      eslint: "7.13.0",
      "eslint-config-prettier": "6.15.0",
      "eslint-formatter-friendly": "7.0.0",
      "eslint-plugin-import": "2.22.1",
      "eslint-plugin-jest": "24.1.3",
      "eslint-plugin-prettier-internal-rules": "file:scripts/tools/eslint-plugin-prettier-internal-rules",
      "eslint-plugin-react": "7.21.5",
      "eslint-plugin-unicorn": "23.0.0",
      execa: "4.1.0",
      jest: "26.6.3",
      "jest-snapshot-serializer-ansi": "1.0.0",
      "jest-snapshot-serializer-raw": "1.1.0",
      "jest-watch-typeahead": "0.6.1",
      "npm-run-all": "4.1.5",
      "path-browserify": "1.0.1",
      prettier: "2.2.0",
      rimraf: "3.0.2",
      rollup: "2.33.3",
      "rollup-plugin-node-globals": "1.4.0",
      "rollup-plugin-terser": "7.0.2",
      shelljs: "0.8.4",
      "snapshot-diff": "0.8.1",
      "strip-ansi": "6.0.0",
      "synchronous-promise": "2.0.15",
      tempy: "1.0.0",
      "terser-webpack-plugin": "5.0.3",
      webpack: "5.5.1"
    },
    scripts: {
      prepublishOnly: 'echo "Error: must publish from dist/" && exit 1',
      "prepare-release": "yarn && yarn build && yarn test:dist",
      test: "jest",
      "test:dev-package": "cross-env INSTALL_PACKAGE=1 jest",
      "test:dist": "cross-env NODE_ENV=production jest",
      "test:dist-standalone": "cross-env NODE_ENV=production TEST_STANDALONE=1 jest",
      "test:integration": "jest tests_integration",
      "perf:repeat": "yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null",
      "perf:repeat-inspect": "yarn && yarn build && cross-env NODE_ENV=production node --inspect-brk ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null",
      "perf:benchmark": "yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-benchmark --loglevel debug ${PERF_FILE:-./index.js} > /dev/null",
      lint: "run-p lint:*",
      "lint:typecheck": "tsc",
      "lint:eslint": "cross-env EFF_NO_LINK_RULES=true eslint . --format friendly",
      "lint:changelog": "node ./scripts/lint-changelog.js",
      "lint:prettier": 'prettier . "!test*" --check',
      "lint:dist": 'eslint --no-eslintrc --no-ignore --env=es6,browser --parser-options=ecmaVersion:2018 "dist/!(bin-prettier|index|third-party).js"',
      "lint:spellcheck": 'cspell "**/*" ".github/**/*"',
      "lint:deps": "node ./scripts/check-deps.js",
      fix: "run-s fix:eslint fix:prettier",
      "fix:eslint": "yarn lint:eslint --fix",
      "fix:prettier": "yarn lint:prettier --write",
      build: "node --max-old-space-size=3072 ./scripts/build/build.js",
      "build-docs": "node ./scripts/build-docs.js"
    }
  };
  function r() {}
  function o(e, t, n, r, o) {
    for (var u = 0, i = t.length, a = 0, s = 0; u < i; u++) {
      var c = t[u];
      if (c.removed) {
        if ((c.value = e.join(r.slice(s, s + c.count)), s += c.count, u && t[u - 1].added)) {
          var l = t[u - 1];
          (t[u - 1] = t[u], t[u] = l);
        }
      } else {
        if (!c.added && o) {
          var p = n.slice(a, a + c.count);
          (p = p.map(function (e, t) {
            var n = r[s + t];
            return n.length > e.length ? n : e;
          }), c.value = e.join(p));
        } else c.value = e.join(n.slice(a, a + c.count));
        (a += c.count, c.added || (s += c.count));
      }
    }
    var d = t[i - 1];
    return (i > 1 && "string" == typeof d.value && (d.added || d.removed) && e.equals("", d.value) && (t[i - 2].value += d.value, t.pop()), t);
  }
  function u(e) {
    return {
      newPos: e.newPos,
      components: e.components.slice(0)
    };
  }
  r.prototype = {
    diff: function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.callback;
      ("function" == typeof n && (r = n, n = {}), this.options = n);
      var i = this;
      function a(e) {
        return r ? (setTimeout(function () {
          r(void 0, e);
        }, 0), !0) : e;
      }
      (e = this.castInput(e), t = this.castInput(t), e = this.removeEmpty(this.tokenize(e)));
      var s = (t = this.removeEmpty(this.tokenize(t))).length, c = e.length, l = 1, p = s + c, d = [{
        newPos: -1,
        components: []
      }], f = this.extractCommon(d[0], t, e, 0);
      if (d[0].newPos + 1 >= s && f + 1 >= c) return a([{
        value: this.join(t),
        count: t.length
      }]);
      function h() {
        for (var n = -1 * l; n <= l; n += 2) {
          var r = void 0, p = d[n - 1], f = d[n + 1], h = (f ? f.newPos : 0) - n;
          p && (d[n - 1] = void 0);
          var m = p && p.newPos + 1 < s, g = f && 0 <= h && h < c;
          if (m || g) {
            if ((!m || g && p.newPos < f.newPos ? (r = u(f), i.pushComponent(r.components, void 0, !0)) : ((r = p).newPos++, i.pushComponent(r.components, !0, void 0)), h = i.extractCommon(r, t, e, n), r.newPos + 1 >= s && h + 1 >= c)) return a(o(i, r.components, t, e, i.useLongestToken));
            d[n] = r;
          } else d[n] = void 0;
        }
        l++;
      }
      if (r) !(function e() {
        setTimeout(function () {
          if (l > p) return r();
          h() || e();
        }, 0);
      })(); else for (; l <= p; ) {
        var m = h();
        if (m) return m;
      }
    },
    pushComponent: function (e, t, n) {
      var r = e[e.length - 1];
      r && r.added === t && r.removed === n ? e[e.length - 1] = {
        count: r.count + 1,
        added: t,
        removed: n
      } : e.push({
        count: 1,
        added: t,
        removed: n
      });
    },
    extractCommon: function (e, t, n, r) {
      for (var o = t.length, u = n.length, i = e.newPos, a = i - r, s = 0; i + 1 < o && a + 1 < u && this.equals(t[i + 1], n[a + 1]); ) (i++, a++, s++);
      return (s && e.components.push({
        count: s
      }), e.newPos = i, a);
    },
    equals: function (e, t) {
      return this.options.comparator ? this.options.comparator(e, t) : e === t || this.options.ignoreCase && e.toLowerCase() === t.toLowerCase();
    },
    removeEmpty: function (e) {
      for (var t = [], n = 0; n < e.length; n++) e[n] && t.push(e[n]);
      return t;
    },
    castInput: function (e) {
      return e;
    },
    tokenize: function (e) {
      return e.split("");
    },
    join: function (e) {
      return e.join("");
    }
  };
  var i = new r();
  function a(e, t) {
    if ("function" == typeof e) t.callback = e; else if (e) for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t;
  }
  var s = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/, c = /\S/, l = new r();
  (l.equals = function (e, t) {
    return (this.options.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e === t || this.options.ignoreWhitespace && !c.test(e) && !c.test(t));
  }, l.tokenize = function (e) {
    for (var t = e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), n = 0; n < t.length - 1; n++) !t[n + 1] && t[n + 2] && s.test(t[n]) && s.test(t[n + 2]) && (t[n] += t[n + 2], t.splice(n + 1, 2), n--);
    return t;
  });
  var p = new r();
  function d(e, t, n) {
    return p.diff(e, t, n);
  }
  p.tokenize = function (e) {
    var t = [], n = e.split(/(\n|\r\n)/);
    n[n.length - 1] || n.pop();
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      r % 2 && !this.options.newlineIsToken ? t[t.length - 1] += o : (this.options.ignoreWhitespace && (o = o.trim()), t.push(o));
    }
    return t;
  };
  var f = new r();
  f.tokenize = function (e) {
    return e.split(/(\S.+?[.!?])(?=\s+|$)/);
  };
  var h = new r();
  function m(e) {
    return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
  }
  function g(e) {
    return (function (e) {
      if (Array.isArray(e)) return D(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && (Symbol.iterator in Object(e))) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return D(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return D(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function D(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  h.tokenize = function (e) {
    return e.split(/([{}:;,]|\s+)/);
  };
  var y = Object.prototype.toString, E = new r();
  function C(e, t, n, r, o) {
    var u, i;
    for ((t = t || [], n = n || [], r && (e = r(o, e)), u = 0); u < t.length; u += 1) if (t[u] === e) return n[u];
    if ("[object Array]" === y.call(e)) {
      for ((t.push(e), i = new Array(e.length), n.push(i), u = 0); u < e.length; u += 1) i[u] = C(e[u], t, n, r, o);
      return (t.pop(), n.pop(), i);
    }
    if ((e && e.toJSON && (e = e.toJSON()), "object" === m(e) && null !== e)) {
      (t.push(e), i = {}, n.push(i));
      var a, s = [];
      for (a in e) e.hasOwnProperty(a) && s.push(a);
      for ((s.sort(), u = 0); u < s.length; u += 1) i[a = s[u]] = C(e[a], t, n, r, a);
      (t.pop(), n.pop());
    } else i = e;
    return i;
  }
  (E.useLongestToken = !0, E.tokenize = p.tokenize, E.castInput = function (e) {
    var t = this.options, n = t.undefinedReplacement, r = t.stringifyReplacer, o = void 0 === r ? function (e, t) {
      return void 0 === t ? n : t;
    } : r;
    return "string" == typeof e ? e : JSON.stringify(C(e, null, null, o), o, "  ");
  }, E.equals = function (e, t) {
    return r.prototype.equals.call(E, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"));
  });
  var b = new r();
  function v(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.split(/\r\n|[\n\v\f\r\x85]/), r = e.match(/\r\n|[\n\v\f\r\x85]/g) || [], o = [], u = 0;
    function i() {
      var e = {};
      for (o.push(e); u < n.length; ) {
        var r = n[u];
        if ((/^(\-\-\-|\+\+\+|@@)\s/).test(r)) break;
        var i = (/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/).exec(r);
        (i && (e.index = i[1]), u++);
      }
      for ((a(e), a(e), e.hunks = []); u < n.length; ) {
        var c = n[u];
        if ((/^(Index:|diff|\-\-\-|\+\+\+)\s/).test(c)) break;
        if ((/^@@/).test(c)) e.hunks.push(s()); else {
          if (c && t.strict) throw new Error("Unknown line " + (u + 1) + " " + JSON.stringify(c));
          u++;
        }
      }
    }
    function a(e) {
      var t = (/^(---|\+\+\+)\s+(.*)$/).exec(n[u]);
      if (t) {
        var r = "---" === t[1] ? "old" : "new", o = t[2].split("\t", 2), i = o[0].replace(/\\\\/g, "\\");
        ((/^".*"$/).test(i) && (i = i.substr(1, i.length - 2)), e[r + "FileName"] = i, e[r + "Header"] = (o[1] || "").trim(), u++);
      }
    }
    function s() {
      var e = u, o = n[u++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/), i = {
        oldStart: +o[1],
        oldLines: void 0 === o[2] ? 1 : +o[2],
        newStart: +o[3],
        newLines: void 0 === o[4] ? 1 : +o[4],
        lines: [],
        linedelimiters: []
      };
      (0 === i.oldLines && (i.oldStart += 1), 0 === i.newLines && (i.newStart += 1));
      for (var a = 0, s = 0; u < n.length && !(0 === n[u].indexOf("--- ") && u + 2 < n.length && 0 === n[u + 1].indexOf("+++ ") && 0 === n[u + 2].indexOf("@@")); u++) {
        var c = 0 == n[u].length && u != n.length - 1 ? " " : n[u][0];
        if ("+" !== c && "-" !== c && " " !== c && "\\" !== c) break;
        (i.lines.push(n[u]), i.linedelimiters.push(r[u] || "\n"), "+" === c ? a++ : "-" === c ? s++ : " " === c && (a++, s++));
      }
      if ((a || 1 !== i.newLines || (i.newLines = 0), s || 1 !== i.oldLines || (i.oldLines = 0), t.strict)) {
        if (a !== i.newLines) throw new Error("Added line count did not match for hunk at line " + (e + 1));
        if (s !== i.oldLines) throw new Error("Removed line count did not match for hunk at line " + (e + 1));
      }
      return i;
    }
    for (; u < n.length; ) i();
    return o;
  }
  function A(e, t, n) {
    var r = !0, o = !1, u = !1, i = 1;
    return function a() {
      if (r && !u) {
        if ((o ? i++ : r = !1, e + i <= n)) return i;
        u = !0;
      }
      if (!o) return (u || (r = !0), t <= e - i ? -i++ : (o = !0, a()));
    };
  }
  function F(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (("string" == typeof t && (t = v(t)), Array.isArray(t))) {
      if (t.length > 1) throw new Error("applyPatch only works with a single input.");
      t = t[0];
    }
    var r, o, u = e.split(/\r\n|[\n\v\f\r\x85]/), i = e.match(/\r\n|[\n\v\f\r\x85]/g) || [], a = t.hunks, s = n.compareLine || (function (e, t, n, r) {
      return t === r;
    }), c = 0, l = n.fuzzFactor || 0, p = 0, d = 0;
    function f(e, t) {
      for (var n = 0; n < e.lines.length; n++) {
        var r = e.lines[n], o = r.length > 0 ? r[0] : " ", i = r.length > 0 ? r.substr(1) : r;
        if (" " === o || "-" === o) {
          if (!s(t + 1, u[t], o, i) && ++c > l) return !1;
          t++;
        }
      }
      return !0;
    }
    for (var h = 0; h < a.length; h++) {
      for (var m = a[h], g = u.length - m.oldLines, D = 0, y = d + m.oldStart - 1, E = A(y, p, g); void 0 !== D; D = E()) if (f(m, y + D)) {
        m.offset = d += D;
        break;
      }
      if (void 0 === D) return !1;
      p = m.offset + m.oldStart + m.oldLines;
    }
    for (var C = 0, b = 0; b < a.length; b++) {
      var F = a[b], x = F.oldStart + F.offset + C - 1;
      C += F.newLines - F.oldLines;
      for (var S = 0; S < F.lines.length; S++) {
        var w = F.lines[S], T = w.length > 0 ? w[0] : " ", B = w.length > 0 ? w.substr(1) : w, N = F.linedelimiters[S];
        if (" " === T) x++; else if ("-" === T) (u.splice(x, 1), i.splice(x, 1)); else if ("+" === T) (u.splice(x, 0, B), i.splice(x, 0, N), x++); else if ("\\" === T) {
          var k = F.lines[S - 1] ? F.lines[S - 1][0] : null;
          "+" === k ? r = !0 : "-" === k && (o = !0);
        }
      }
    }
    if (r) for (; !u[u.length - 1]; ) (u.pop(), i.pop()); else o && (u.push(""), i.push("\n"));
    for (var P = 0; P < u.length - 1; P++) u[P] = u[P] + i[P];
    return u.join("");
  }
  function x(e, t, n, r, o, u, i) {
    (i || (i = {}), void 0 === i.context && (i.context = 4));
    var a = d(n, r, i);
    function s(e) {
      return e.map(function (e) {
        return " " + e;
      });
    }
    a.push({
      value: "",
      lines: []
    });
    for (var c = [], l = 0, p = 0, f = [], h = 1, m = 1, D = function (e) {
      var t = a[e], o = t.lines || t.value.replace(/\n$/, "").split("\n");
      if ((t.lines = o, t.added || t.removed)) {
        var u;
        if (!l) {
          var d = a[e - 1];
          (l = h, p = m, d && (f = i.context > 0 ? s(d.lines.slice(-i.context)) : [], l -= f.length, p -= f.length));
        }
        ((u = f).push.apply(u, g(o.map(function (e) {
          return (t.added ? "+" : "-") + e;
        }))), t.added ? m += o.length : h += o.length);
      } else {
        if (l) if (o.length <= 2 * i.context && e < a.length - 2) {
          var D;
          (D = f).push.apply(D, g(s(o)));
        } else {
          var y, E = Math.min(o.length, i.context);
          (y = f).push.apply(y, g(s(o.slice(0, E))));
          var C = {
            oldStart: l,
            oldLines: h - l + E,
            newStart: p,
            newLines: m - p + E,
            lines: f
          };
          if (e >= a.length - 2 && o.length <= i.context) {
            var b = (/\n$/).test(n), v = (/\n$/).test(r), A = 0 == o.length && f.length > C.oldLines;
            (!b && A && n.length > 0 && f.splice(C.oldLines, 0, "\\ No newline at end of file"), (b || A) && v || f.push("\\ No newline at end of file"));
          }
          (c.push(C), l = 0, p = 0, f = []);
        }
        (h += o.length, m += o.length);
      }
    }, y = 0; y < a.length; y++) D(y);
    return {
      oldFileName: e,
      newFileName: t,
      oldHeader: o,
      newHeader: u,
      hunks: c
    };
  }
  function S(e, t, n, r, o, u, i) {
    return (function (e) {
      var t = [];
      (e.oldFileName == e.newFileName && t.push("Index: " + e.oldFileName), t.push("==================================================================="), t.push("--- " + e.oldFileName + (void 0 === e.oldHeader ? "" : "\t" + e.oldHeader)), t.push("+++ " + e.newFileName + (void 0 === e.newHeader ? "" : "\t" + e.newHeader)));
      for (var n = 0; n < e.hunks.length; n++) {
        var r = e.hunks[n];
        (0 === r.oldLines && (r.oldStart -= 1), 0 === r.newLines && (r.newStart -= 1), t.push("@@ -" + r.oldStart + "," + r.oldLines + " +" + r.newStart + "," + r.newLines + " @@"), t.push.apply(t, r.lines));
      }
      return t.join("\n") + "\n";
    })(x(e, t, n, r, o, u, i));
  }
  function w(e, t) {
    if (t.length > e.length) return !1;
    for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
    return !0;
  }
  function T(e) {
    var t = W(e.lines), n = t.oldLines, r = t.newLines;
    (void 0 !== n ? e.oldLines = n : delete e.oldLines, void 0 !== r ? e.newLines = r : delete e.newLines);
  }
  function B(e, t) {
    if ("string" == typeof e) {
      if ((/^@@/m).test(e) || (/^Index:/m).test(e)) return v(e)[0];
      if (!t) throw new Error("Must provide a base reference or pass in a patch");
      return x(void 0, void 0, t, e);
    }
    return e;
  }
  function N(e) {
    return e.newFileName && e.newFileName !== e.oldFileName;
  }
  function k(e, t, n) {
    return t === n ? t : (e.conflict = !0, {
      mine: t,
      theirs: n
    });
  }
  function P(e, t) {
    return e.oldStart < t.oldStart && e.oldStart + e.oldLines < t.oldStart;
  }
  function O(e, t) {
    return {
      oldStart: e.oldStart,
      oldLines: e.oldLines,
      newStart: e.newStart + t,
      newLines: e.newLines,
      lines: e.lines
    };
  }
  function I(e, t, n, r, o) {
    var u = {
      offset: t,
      lines: n,
      index: 0
    }, i = {
      offset: r,
      lines: o,
      index: 0
    };
    for ((_(e, u, i), _(e, i, u)); u.index < u.lines.length && i.index < i.lines.length; ) {
      var a = u.lines[u.index], s = i.lines[i.index];
      if ("-" !== a[0] && "+" !== a[0] || "-" !== s[0] && "+" !== s[0]) if ("+" === a[0] && " " === s[0]) {
        var c;
        (c = e.lines).push.apply(c, g(V(u)));
      } else if ("+" === s[0] && " " === a[0]) {
        var l;
        (l = e.lines).push.apply(l, g(V(i)));
      } else "-" === a[0] && " " === s[0] ? M(e, u, i) : "-" === s[0] && " " === a[0] ? M(e, i, u, !0) : a === s ? (e.lines.push(a), u.index++, i.index++) : j(e, V(u), V(i)); else L(e, u, i);
    }
    (R(e, u), R(e, i), T(e));
  }
  function L(e, t, n) {
    var r = V(t), o = V(n);
    if ($(r) && $(o)) {
      var u, i;
      if (w(r, o) && q(n, r, r.length - o.length)) return void (u = e.lines).push.apply(u, g(r));
      if (w(o, r) && q(t, o, o.length - r.length)) return void (i = e.lines).push.apply(i, g(o));
    } else if ((function (e, t) {
      return e.length === t.length && w(e, t);
    })(r, o)) {
      var a;
      return void (a = e.lines).push.apply(a, g(r));
    }
    j(e, r, o);
  }
  function M(e, t, n, r) {
    var o, u = V(t), i = (function (e, t) {
      var n = [], r = [], o = 0, u = !1, i = !1;
      for (; o < t.length && e.index < e.lines.length; ) {
        var a = e.lines[e.index], s = t[o];
        if ("+" === s[0]) break;
        if ((u = u || " " !== a[0], r.push(s), o++, "+" === a[0])) for (i = !0; "+" === a[0]; ) (n.push(a), a = e.lines[++e.index]);
        s.substr(1) === a.substr(1) ? (n.push(a), e.index++) : i = !0;
      }
      "+" === (t[o] || "")[0] && u && (i = !0);
      if (i) return n;
      for (; o < t.length; ) r.push(t[o++]);
      return {
        merged: r,
        changes: n
      };
    })(n, u);
    i.merged ? (o = e.lines).push.apply(o, g(i.merged)) : j(e, r ? i : u, r ? u : i);
  }
  function j(e, t, n) {
    (e.conflict = !0, e.lines.push({
      conflict: !0,
      mine: t,
      theirs: n
    }));
  }
  function _(e, t, n) {
    for (; t.offset < n.offset && t.index < t.lines.length; ) {
      var r = t.lines[t.index++];
      (e.lines.push(r), t.offset++);
    }
  }
  function R(e, t) {
    for (; t.index < t.lines.length; ) {
      var n = t.lines[t.index++];
      e.lines.push(n);
    }
  }
  function V(e) {
    for (var t = [], n = e.lines[e.index][0]; e.index < e.lines.length; ) {
      var r = e.lines[e.index];
      if (("-" === n && "+" === r[0] && (n = "+"), n !== r[0])) break;
      (t.push(r), e.index++);
    }
    return t;
  }
  function $(e) {
    return e.reduce(function (e, t) {
      return e && "-" === t[0];
    }, !0);
  }
  function q(e, t, n) {
    for (var r = 0; r < n; r++) {
      var o = t[t.length - n + r].substr(1);
      if (e.lines[e.index + r] !== " " + o) return !1;
    }
    return (e.index += n, !0);
  }
  function W(e) {
    var t = 0, n = 0;
    return (e.forEach(function (e) {
      if ("string" != typeof e) {
        var r = W(e.mine), o = W(e.theirs);
        (void 0 !== t && (r.oldLines === o.oldLines ? t += r.oldLines : t = void 0), void 0 !== n && (r.newLines === o.newLines ? n += r.newLines : n = void 0));
      } else (void 0 === n || "+" !== e[0] && " " !== e[0] || n++, void 0 === t || "-" !== e[0] && " " !== e[0] || t++);
    }), {
      oldLines: t,
      newLines: n
    });
  }
  function U(e) {
    var t = e;
    return t = (t = (t = (t = t.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;")).replace(/"/g, "&quot;");
  }
  (b.tokenize = function (e) {
    return e.slice();
  }, b.join = b.removeEmpty = function (e) {
    return e;
  });
  var J = Object.freeze({
    __proto__: null,
    Diff: r,
    applyPatch: F,
    applyPatches: function (e, t) {
      "string" == typeof e && (e = v(e));
      var n = 0;
      !(function r() {
        var o = e[n++];
        if (!o) return t.complete();
        t.loadFile(o, function (e, n) {
          if (e) return t.complete(e);
          var u = F(n, o, t);
          t.patched(o, u, function (e) {
            if (e) return t.complete(e);
            r();
          });
        });
      })();
    },
    canonicalize: C,
    convertChangesToDMP: function (e) {
      for (var t, n, r = [], o = 0; o < e.length; o++) (n = (t = e[o]).added ? 1 : t.removed ? -1 : 0, r.push([n, t.value]));
      return r;
    },
    convertChangesToXML: function (e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = e[n];
        (r.added ? t.push("<ins>") : r.removed && t.push("<del>"), t.push(U(r.value)), r.added ? t.push("</ins>") : r.removed && t.push("</del>"));
      }
      return t.join("");
    },
    createPatch: function (e, t, n, r, o, u) {
      return S(e, e, t, n, r, o, u);
    },
    createTwoFilesPatch: S,
    diffArrays: function (e, t, n) {
      return b.diff(e, t, n);
    },
    diffChars: function (e, t, n) {
      return i.diff(e, t, n);
    },
    diffCss: function (e, t, n) {
      return h.diff(e, t, n);
    },
    diffJson: function (e, t, n) {
      return E.diff(e, t, n);
    },
    diffLines: d,
    diffSentences: function (e, t, n) {
      return f.diff(e, t, n);
    },
    diffTrimmedLines: function (e, t, n) {
      var r = a(n, {
        ignoreWhitespace: !0
      });
      return p.diff(e, t, r);
    },
    diffWords: function (e, t, n) {
      return (n = a(n, {
        ignoreWhitespace: !0
      }), l.diff(e, t, n));
    },
    diffWordsWithSpace: function (e, t, n) {
      return l.diff(e, t, n);
    },
    merge: function (e, t, n) {
      (e = B(e, n), t = B(t, n));
      var r = {};
      ((e.index || t.index) && (r.index = e.index || t.index), (e.newFileName || t.newFileName) && (N(e) ? N(t) ? (r.oldFileName = k(r, e.oldFileName, t.oldFileName), r.newFileName = k(r, e.newFileName, t.newFileName), r.oldHeader = k(r, e.oldHeader, t.oldHeader), r.newHeader = k(r, e.newHeader, t.newHeader)) : (r.oldFileName = e.oldFileName, r.newFileName = e.newFileName, r.oldHeader = e.oldHeader, r.newHeader = e.newHeader) : (r.oldFileName = t.oldFileName || e.oldFileName, r.newFileName = t.newFileName || e.newFileName, r.oldHeader = t.oldHeader || e.oldHeader, r.newHeader = t.newHeader || e.newHeader)), r.hunks = []);
      for (var o = 0, u = 0, i = 0, a = 0; o < e.hunks.length || u < t.hunks.length; ) {
        var s = e.hunks[o] || ({
          oldStart: 1 / 0
        }), c = t.hunks[u] || ({
          oldStart: 1 / 0
        });
        if (P(s, c)) (r.hunks.push(O(s, i)), o++, a += s.newLines - s.oldLines); else if (P(c, s)) (r.hunks.push(O(c, a)), u++, i += c.newLines - c.oldLines); else {
          var l = {
            oldStart: Math.min(s.oldStart, c.oldStart),
            oldLines: 0,
            newStart: Math.min(s.newStart + i, c.oldStart + a),
            newLines: 0,
            lines: []
          };
          (I(l, s.oldStart, s.lines, c.oldStart, c.lines), u++, o++, r.hunks.push(l));
        }
      }
      return r;
    },
    parsePatch: v,
    structuredPatch: x
  });
  function z(e) {
    return {
      type: "concat",
      parts: e
    };
  }
  function H(e) {
    return {
      type: "indent",
      contents: e
    };
  }
  function G(e, t) {
    return {
      type: "align",
      contents: t,
      n: e
    };
  }
  function X(e, t) {
    return {
      type: "group",
      id: (t = t || ({})).id,
      contents: e,
      break: !!t.shouldBreak,
      expandedStates: t.expandedStates
    };
  }
  const Y = {
    type: "break-parent"
  }, K = z([{
    type: "line",
    hard: !0
  }, Y]), Q = z([{
    type: "line",
    hard: !0,
    literal: !0
  }, Y]);
  var Z = {
    concat: z,
    join: function (e, t) {
      const n = [];
      for (let r = 0; r < t.length; r++) (0 !== r && n.push(e), n.push(t[r]));
      return z(n);
    },
    line: {
      type: "line"
    },
    softline: {
      type: "line",
      soft: !0
    },
    hardline: K,
    literalline: Q,
    group: X,
    conditionalGroup: function (e, t) {
      return X(e[0], Object.assign({}, t, {
        expandedStates: e
      }));
    },
    fill: function (e) {
      return {
        type: "fill",
        parts: e
      };
    },
    lineSuffix: function (e) {
      return {
        type: "line-suffix",
        contents: e
      };
    },
    lineSuffixBoundary: {
      type: "line-suffix-boundary"
    },
    cursor: {
      type: "cursor",
      placeholder: Symbol("cursor")
    },
    breakParent: Y,
    ifBreak: function (e, t, n) {
      return {
        type: "if-break",
        breakContents: e,
        flatContents: t,
        groupId: (n = n || ({})).groupId
      };
    },
    trim: {
      type: "trim"
    },
    indent: H,
    align: G,
    addAlignmentToDoc: function (e, t, n) {
      let r = e;
      if (t > 0) {
        for (let e = 0; e < Math.floor(t / n); ++e) r = H(r);
        (r = G(t % n, r), r = G(-1 / 0, r));
      }
      return r;
    },
    markAsRoot: function (e) {
      return G({
        type: "root"
      }, e);
    },
    dedentToRoot: function (e) {
      return G(-1 / 0, e);
    },
    dedent: function (e) {
      return G(-1, e);
    }
  }, ee = e => "string" == typeof e ? e.replace((({onlyFirst: e = !1} = {}) => {
    const t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
    return new RegExp(t, e ? void 0 : "g");
  })(), "") : e;
  const te = e => !Number.isNaN(e) && (e >= 4352 && (e <= 4447 || 9001 === e || 9002 === e || 11904 <= e && e <= 12871 && 12351 !== e || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141));
  var ne = te, re = te;
  ne.default = re;
  const oe = e => {
    if ("string" != typeof (e = e.replace(/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g, "  ")) || 0 === e.length) return 0;
    e = ee(e);
    let t = 0;
    for (let n = 0; n < e.length; n++) {
      const r = e.codePointAt(n);
      r <= 31 || r >= 127 && r <= 159 || (r >= 768 && r <= 879 || (r > 65535 && n++, t += ne(r) ? 2 : 1));
    }
    return t;
  };
  var ue = oe, ie = oe;
  ue.default = ie;
  var ae = e => {
    if ("string" != typeof e) throw new TypeError("Expected a string");
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }, se = e => e[e.length - 1], ce = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
  function le() {
    throw new Error("setTimeout has not been defined");
  }
  function pe() {
    throw new Error("clearTimeout has not been defined");
  }
  var de = le, fe = pe;
  function he(e) {
    if (de === setTimeout) return setTimeout(e, 0);
    if ((de === le || !de) && setTimeout) return (de = setTimeout, setTimeout(e, 0));
    try {
      return de(e, 0);
    } catch (t) {
      try {
        return de.call(null, e, 0);
      } catch (t) {
        return de.call(this, e, 0);
      }
    }
  }
  ("function" == typeof ce.setTimeout && (de = setTimeout), "function" == typeof ce.clearTimeout && (fe = clearTimeout));
  var me, ge = [], De = !1, ye = -1;
  function Ee() {
    De && me && (De = !1, me.length ? ge = me.concat(ge) : ye = -1, ge.length && Ce());
  }
  function Ce() {
    if (!De) {
      var e = he(Ee);
      De = !0;
      for (var t = ge.length; t; ) {
        for ((me = ge, ge = []); ++ye < t; ) me && me[ye].run();
        (ye = -1, t = ge.length);
      }
      (me = null, De = !1, (function (e) {
        if (fe === clearTimeout) return clearTimeout(e);
        if ((fe === pe || !fe) && clearTimeout) return (fe = clearTimeout, clearTimeout(e));
        try {
          fe(e);
        } catch (t) {
          try {
            return fe.call(null, e);
          } catch (t) {
            return fe.call(this, e);
          }
        }
      })(e));
    }
  }
  function be(e, t) {
    (this.fun = e, this.array = t);
  }
  be.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  function ve() {}
  var Ae = ve, Fe = ve, xe = ve, Se = ve, we = ve, Te = ve, Be = ve;
  var Ne = ce.performance || ({}), ke = Ne.now || Ne.mozNow || Ne.msNow || Ne.oNow || Ne.webkitNow || (function () {
    return new Date().getTime();
  });
  var Pe = new Date();
  var Oe = {
    nextTick: function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      (ge.push(new be(e, t)), 1 !== ge.length || De || he(Ce));
    },
    title: "browser",
    browser: !0,
    env: {},
    argv: [],
    version: "",
    versions: {},
    on: Ae,
    addListener: Fe,
    once: xe,
    off: Se,
    removeListener: we,
    removeAllListeners: Te,
    emit: Be,
    binding: function (e) {
      throw new Error("process.binding is not supported");
    },
    cwd: function () {
      return "/";
    },
    chdir: function (e) {
      throw new Error("process.chdir is not supported");
    },
    umask: function () {
      return 0;
    },
    hrtime: function (e) {
      var t = .001 * ke.call(Ne), n = Math.floor(t), r = Math.floor(t % 1 * 1e9);
      return (e && (n -= e[0], (r -= e[1]) < 0 && (n--, r += 1e9)), [n, r]);
    },
    platform: "browser",
    release: {},
    config: {},
    uptime: function () {
      return (new Date() - Pe) / 1e3;
    }
  };
  var Ie = "object" == typeof Oe && Oe.env && Oe.env.NODE_DEBUG && (/\bsemver\b/i).test(Oe.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
  var Le = {
    SEMVER_SPEC_VERSION: "2.0.0",
    MAX_LENGTH: 256,
    MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991,
    MAX_SAFE_COMPONENT_LENGTH: 16
  }, Me = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function je(e, t, n) {
    return (e(n = {
      path: t,
      exports: {},
      require: function (e, t) {
        return (function () {
          throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
        })(null == t && n.path);
      }
    }, n.exports), n.exports);
  }
  function _e(e) {
    return e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var Re = je(function (e, t) {
    const {MAX_SAFE_COMPONENT_LENGTH: n} = Le, r = (t = e.exports = {}).re = [], o = t.src = [], u = t.t = {};
    let i = 0;
    const a = (e, t, n) => {
      const a = i++;
      (Ie(a, t), u[e] = a, o[a] = t, r[a] = new RegExp(t, n ? "g" : void 0));
    };
    (a("NUMERICIDENTIFIER", "0|[1-9]\\d*"), a("NUMERICIDENTIFIERLOOSE", "[0-9]+"), a("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), a("MAINVERSION", ("(").concat(o[u.NUMERICIDENTIFIER], ")\\.") + ("(").concat(o[u.NUMERICIDENTIFIER], ")\\.") + ("(").concat(o[u.NUMERICIDENTIFIER], ")")), a("MAINVERSIONLOOSE", ("(").concat(o[u.NUMERICIDENTIFIERLOOSE], ")\\.") + ("(").concat(o[u.NUMERICIDENTIFIERLOOSE], ")\\.") + ("(").concat(o[u.NUMERICIDENTIFIERLOOSE], ")")), a("PRERELEASEIDENTIFIER", ("(?:").concat(o[u.NUMERICIDENTIFIER], "|").concat(o[u.NONNUMERICIDENTIFIER], ")")), a("PRERELEASEIDENTIFIERLOOSE", ("(?:").concat(o[u.NUMERICIDENTIFIERLOOSE], "|").concat(o[u.NONNUMERICIDENTIFIER], ")")), a("PRERELEASE", ("(?:-(").concat(o[u.PRERELEASEIDENTIFIER], "(?:\\.").concat(o[u.PRERELEASEIDENTIFIER], ")*))")), a("PRERELEASELOOSE", ("(?:-?(").concat(o[u.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(o[u.PRERELEASEIDENTIFIERLOOSE], ")*))")), a("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), a("BUILD", ("(?:\\+(").concat(o[u.BUILDIDENTIFIER], "(?:\\.").concat(o[u.BUILDIDENTIFIER], ")*))")), a("FULLPLAIN", ("v?").concat(o[u.MAINVERSION]).concat(o[u.PRERELEASE], "?").concat(o[u.BUILD], "?")), a("FULL", ("^").concat(o[u.FULLPLAIN], "$")), a("LOOSEPLAIN", ("[v=\\s]*").concat(o[u.MAINVERSIONLOOSE]).concat(o[u.PRERELEASELOOSE], "?").concat(o[u.BUILD], "?")), a("LOOSE", ("^").concat(o[u.LOOSEPLAIN], "$")), a("GTLT", "((?:<|>)?=?)"), a("XRANGEIDENTIFIERLOOSE", ("").concat(o[u.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), a("XRANGEIDENTIFIER", ("").concat(o[u.NUMERICIDENTIFIER], "|x|X|\\*")), a("XRANGEPLAIN", ("[v=\\s]*(").concat(o[u.XRANGEIDENTIFIER], ")") + ("(?:\\.(").concat(o[u.XRANGEIDENTIFIER], ")") + ("(?:\\.(").concat(o[u.XRANGEIDENTIFIER], ")") + ("(?:").concat(o[u.PRERELEASE], ")?").concat(o[u.BUILD], "?") + ")?)?"), a("XRANGEPLAINLOOSE", ("[v=\\s]*(").concat(o[u.XRANGEIDENTIFIERLOOSE], ")") + ("(?:\\.(").concat(o[u.XRANGEIDENTIFIERLOOSE], ")") + ("(?:\\.(").concat(o[u.XRANGEIDENTIFIERLOOSE], ")") + ("(?:").concat(o[u.PRERELEASELOOSE], ")?").concat(o[u.BUILD], "?") + ")?)?"), a("XRANGE", ("^").concat(o[u.GTLT], "\\s*").concat(o[u.XRANGEPLAIN], "$")), a("XRANGELOOSE", ("^").concat(o[u.GTLT], "\\s*").concat(o[u.XRANGEPLAINLOOSE], "$")), a("COERCE", ("").concat("(^|[^\\d])(\\d{1,").concat(n, "})") + ("(?:\\.(\\d{1,").concat(n, "}))?") + ("(?:\\.(\\d{1,").concat(n, "}))?") + "(?:$|[^\\d])"), a("COERCERTL", o[u.COERCE], !0), a("LONETILDE", "(?:~>?)"), a("TILDETRIM", ("(\\s*)").concat(o[u.LONETILDE], "\\s+"), !0), t.tildeTrimReplace = "$1~", a("TILDE", ("^").concat(o[u.LONETILDE]).concat(o[u.XRANGEPLAIN], "$")), a("TILDELOOSE", ("^").concat(o[u.LONETILDE]).concat(o[u.XRANGEPLAINLOOSE], "$")), a("LONECARET", "(?:\\^)"), a("CARETTRIM", ("(\\s*)").concat(o[u.LONECARET], "\\s+"), !0), t.caretTrimReplace = "$1^", a("CARET", ("^").concat(o[u.LONECARET]).concat(o[u.XRANGEPLAIN], "$")), a("CARETLOOSE", ("^").concat(o[u.LONECARET]).concat(o[u.XRANGEPLAINLOOSE], "$")), a("COMPARATORLOOSE", ("^").concat(o[u.GTLT], "\\s*(").concat(o[u.LOOSEPLAIN], ")$|^$")), a("COMPARATOR", ("^").concat(o[u.GTLT], "\\s*(").concat(o[u.FULLPLAIN], ")$|^$")), a("COMPARATORTRIM", ("(\\s*)").concat(o[u.GTLT], "\\s*(").concat(o[u.LOOSEPLAIN], "|").concat(o[u.XRANGEPLAIN], ")"), !0), t.comparatorTrimReplace = "$1$2$3", a("HYPHENRANGE", ("^\\s*(").concat(o[u.XRANGEPLAIN], ")") + "\\s+-\\s+" + ("(").concat(o[u.XRANGEPLAIN], ")") + "\\s*$"), a("HYPHENRANGELOOSE", ("^\\s*(").concat(o[u.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + ("(").concat(o[u.XRANGEPLAINLOOSE], ")") + "\\s*$"), a("STAR", "(<|>)?=?\\s*\\*"), a("GTE0", "^\\s*>=\\s*0.0.0\\s*$"), a("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$"));
  });
  const Ve = /^[0-9]+$/, $e = (e, t) => {
    const n = Ve.test(e), r = Ve.test(t);
    return (n && r && (e = +e, t = +t), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1);
  };
  var qe = {
    compareIdentifiers: $e,
    rcompareIdentifiers: (e, t) => $e(t, e)
  };
  const {MAX_LENGTH: We, MAX_SAFE_INTEGER: Ue} = Le, {re: Je, t: ze} = Re, {compareIdentifiers: He} = qe;
  class Ge {
    constructor(e, t) {
      if ((t && "object" == typeof t || (t = {
        loose: !!t,
        includePrerelease: !1
      }), e instanceof Ge)) {
        if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
        e = e.version;
      } else if ("string" != typeof e) throw new TypeError(("Invalid Version: ").concat(e));
      if (e.length > We) throw new TypeError(("version is longer than ").concat(We, " characters"));
      (Ie("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease);
      const n = e.trim().match(t.loose ? Je[ze.LOOSE] : Je[ze.FULL]);
      if (!n) throw new TypeError(("Invalid Version: ").concat(e));
      if ((this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > Ue || this.major < 0)) throw new TypeError("Invalid major version");
      if (this.minor > Ue || this.minor < 0) throw new TypeError("Invalid minor version");
      if (this.patch > Ue || this.patch < 0) throw new TypeError("Invalid patch version");
      (n[4] ? this.prerelease = n[4].split(".").map(e => {
        if ((/^[0-9]+$/).test(e)) {
          const t = +e;
          if (t >= 0 && t < Ue) return t;
        }
        return e;
      }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format());
    }
    format() {
      return (this.version = ("").concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += ("-").concat(this.prerelease.join("."))), this.version);
    }
    toString() {
      return this.version;
    }
    compare(e) {
      if ((Ie("SemVer.compare", this.version, this.options, e), !(e instanceof Ge))) {
        if ("string" == typeof e && e === this.version) return 0;
        e = new Ge(e, this.options);
      }
      return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
    }
    compareMain(e) {
      return (e instanceof Ge || (e = new Ge(e, this.options)), He(this.major, e.major) || He(this.minor, e.minor) || He(this.patch, e.patch));
    }
    comparePre(e) {
      if ((e instanceof Ge || (e = new Ge(e, this.options)), this.prerelease.length && !e.prerelease.length)) return -1;
      if (!this.prerelease.length && e.prerelease.length) return 1;
      if (!this.prerelease.length && !e.prerelease.length) return 0;
      let t = 0;
      do {
        const n = this.prerelease[t], r = e.prerelease[t];
        if ((Ie("prerelease compare", t, n, r), void 0 === n && void 0 === r)) return 0;
        if (void 0 === r) return 1;
        if (void 0 === n) return -1;
        if (n !== r) return He(n, r);
      } while (++t);
    }
    compareBuild(e) {
      e instanceof Ge || (e = new Ge(e, this.options));
      let t = 0;
      do {
        const n = this.build[t], r = e.build[t];
        if ((Ie("prerelease compare", t, n, r), void 0 === n && void 0 === r)) return 0;
        if (void 0 === r) return 1;
        if (void 0 === n) return -1;
        if (n !== r) return He(n, r);
      } while (++t);
    }
    inc(e, t) {
      switch (e) {
        case "premajor":
          (this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t));
          break;
        case "preminor":
          (this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t));
          break;
        case "prepatch":
          (this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t));
          break;
        case "prerelease":
          (0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t));
          break;
        case "major":
          (0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = []);
          break;
        case "minor":
          (0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = []);
          break;
        case "patch":
          (0 === this.prerelease.length && this.patch++, this.prerelease = []);
          break;
        case "pre":
          if (0 === this.prerelease.length) this.prerelease = [0]; else {
            let e = this.prerelease.length;
            for (; --e >= 0; ) "number" == typeof this.prerelease[e] && (this.prerelease[e]++, e = -2);
            -1 === e && this.prerelease.push(0);
          }
          t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
          break;
        default:
          throw new Error(("invalid increment argument: ").concat(e));
      }
      return (this.format(), this.raw = this.version, this);
    }
  }
  var Xe = Ge;
  var Ye = (e, t, n) => new Xe(e, n).compare(new Xe(t, n));
  var Ke = (e, t, n) => Ye(e, t, n) < 0;
  var Qe = (e, t, n) => Ye(e, t, n) >= 0, Ze = je(function (e, t) {
    function n() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    }
    function r() {
      return "undefined" != typeof WeakMap ? new WeakMap() : {
        add: n,
        delete: n,
        get: n,
        set: n,
        has: function (e) {
          return !1;
        }
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = Object.prototype.hasOwnProperty, u = function (e, t) {
      return o.call(e, t);
    };
    function i(e, t) {
      for (var n in t) u(t, n) && (e[n] = t[n]);
      return e;
    }
    var a = /^[ \t]*(?:\r\n|\r|\n)/, s = /(?:\r\n|\r|\n)[ \t]*$/, c = /^(?:[\r\n]|$)/, l = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, p = /^[ \t]*[\r\n][ \t\r\n]*$/;
    function d(e, t, n) {
      var r = 0, o = e[0].match(l);
      o && (r = o[1].length);
      var u = new RegExp("(\\r\\n|\\r|\\n).{0," + r + "}", "g");
      t && (e = e.slice(1));
      var i = n.newline, c = n.trimLeadingNewline, p = n.trimTrailingNewline, d = "string" == typeof i, f = e.length;
      return e.map(function (e, t) {
        return (e = e.replace(u, "$1"), 0 === t && c && (e = e.replace(a, "")), t === f - 1 && p && (e = e.replace(s, "")), d && (e = e.replace(/\r\n|\n|\r/g, function (e) {
          return i;
        })), e);
      });
    }
    function f(e, t) {
      for (var n = "", r = 0, o = e.length; r < o; r++) (n += e[r], r < o - 1 && (n += t[r]));
      return n;
    }
    function h(e) {
      return u(e, "raw") && u(e, "length");
    }
    var m = (function e(t) {
      var n = r(), o = r();
      return i(function r(u) {
        for (var a = [], s = 1; s < arguments.length; s++) a[s - 1] = arguments[s];
        if (h(u)) {
          var l = u, g = (a[0] === r || a[0] === m) && p.test(l[0]) && c.test(l[1]), D = g ? o : n, y = D.get(l);
          if ((y || (y = d(l, g, t), D.set(l, y)), 0 === a.length)) return y[0];
          var E = f(y, g ? a.slice(1) : a);
          return E;
        }
        return e(i(i({}, t), u || ({})));
      }, {
        string: function (e) {
          return d([e], !1, t)[0];
        }
      });
    })({
      trimLeadingNewline: !0,
      trimTrailingNewline: !0
    });
    (t.outdent = m, t.default = m);
    try {
      (e.exports = m, Object.defineProperty(m, "__esModule", {
        value: !0
      }), m.default = m, m.outdent = m);
    } catch (e) {}
  });
  function et() {
    const e = t(["\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    "]);
    return (et = function () {
      return e;
    }, e);
  }
  function tt() {
    const e = t(["\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]);
    return (tt = function () {
      return e;
    }, e);
  }
  function nt() {
    const e = t(["\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]);
    return (nt = function () {
      return e;
    }, e);
  }
  function rt() {
    const e = t(["\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    "]);
    return (rt = function () {
      return e;
    }, e);
  }
  function ot() {
    const e = t(["\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        "]);
    return (ot = function () {
      return e;
    }, e);
  }
  function ut() {
    const e = t(["\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    "]);
    return (ut = function () {
      return e;
    }, e);
  }
  const {outdent: it} = Ze, at = "Config", st = "Editor", ct = "Other", lt = "Global", pt = "Special", dt = {
    cursorOffset: {
      since: "1.4.0",
      category: pt,
      type: "int",
      default: -1,
      range: {
        start: -1,
        end: 1 / 0,
        step: 1
      },
      description: it(ut()),
      cliCategory: st
    },
    endOfLine: {
      since: "1.15.0",
      category: lt,
      type: "choice",
      default: [{
        since: "1.15.0",
        value: "auto"
      }, {
        since: "2.0.0",
        value: "lf"
      }],
      description: "Which end of line characters to apply.",
      choices: [{
        value: "lf",
        description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos"
      }, {
        value: "crlf",
        description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows"
      }, {
        value: "cr",
        description: "Carriage Return character only (\\r), used very rarely"
      }, {
        value: "auto",
        description: it(ot())
      }]
    },
    filepath: {
      since: "1.4.0",
      category: pt,
      type: "path",
      description: "Specify the input filepath. This will be used to do parser inference.",
      cliName: "stdin-filepath",
      cliCategory: ct,
      cliDescription: "Path to the file to pretend that stdin comes from."
    },
    insertPragma: {
      since: "1.8.0",
      category: pt,
      type: "boolean",
      default: !1,
      description: "Insert @format pragma into file's first docblock comment.",
      cliCategory: ct
    },
    parser: {
      since: "0.0.10",
      category: lt,
      type: "choice",
      default: [{
        since: "0.0.10",
        value: "babylon"
      }, {
        since: "1.13.0",
        value: void 0
      }],
      description: "Which parser to use.",
      exception: e => "string" == typeof e || "function" == typeof e,
      choices: [{
        value: "flow",
        description: "Flow"
      }, {
        value: "babel",
        since: "1.16.0",
        description: "JavaScript"
      }, {
        value: "babel-flow",
        since: "1.16.0",
        description: "Flow"
      }, {
        value: "babel-ts",
        since: "2.0.0",
        description: "TypeScript"
      }, {
        value: "typescript",
        since: "1.4.0",
        description: "TypeScript"
      }, {
        value: "espree",
        since: "2.2.0",
        description: "JavaScript"
      }, {
        value: "meriyah",
        since: "2.2.0",
        description: "JavaScript"
      }, {
        value: "css",
        since: "1.7.1",
        description: "CSS"
      }, {
        value: "less",
        since: "1.7.1",
        description: "Less"
      }, {
        value: "scss",
        since: "1.7.1",
        description: "SCSS"
      }, {
        value: "json",
        since: "1.5.0",
        description: "JSON"
      }, {
        value: "json5",
        since: "1.13.0",
        description: "JSON5"
      }, {
        value: "json-stringify",
        since: "1.13.0",
        description: "JSON.stringify"
      }, {
        value: "graphql",
        since: "1.5.0",
        description: "GraphQL"
      }, {
        value: "markdown",
        since: "1.8.0",
        description: "Markdown"
      }, {
        value: "mdx",
        since: "1.15.0",
        description: "MDX"
      }, {
        value: "vue",
        since: "1.10.0",
        description: "Vue"
      }, {
        value: "yaml",
        since: "1.14.0",
        description: "YAML"
      }, {
        value: "glimmer",
        since: null,
        description: "Handlebars"
      }, {
        value: "html",
        since: "1.15.0",
        description: "HTML"
      }, {
        value: "angular",
        since: "1.15.0",
        description: "Angular"
      }, {
        value: "lwc",
        since: "1.17.0",
        description: "Lightning Web Components"
      }]
    },
    plugins: {
      since: "1.10.0",
      type: "path",
      array: !0,
      default: [{
        value: []
      }],
      category: lt,
      description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
      exception: e => "string" == typeof e || "object" == typeof e,
      cliName: "plugin",
      cliCategory: at
    },
    pluginSearchDirs: {
      since: "1.13.0",
      type: "path",
      array: !0,
      default: [{
        value: []
      }],
      category: lt,
      description: it(rt()),
      exception: e => "string" == typeof e || "object" == typeof e,
      cliName: "plugin-search-dir",
      cliCategory: at
    },
    printWidth: {
      since: "0.0.0",
      category: lt,
      type: "int",
      default: 80,
      description: "The line length where Prettier will try wrap.",
      range: {
        start: 0,
        end: 1 / 0,
        step: 1
      }
    },
    rangeEnd: {
      since: "1.4.0",
      category: pt,
      type: "int",
      default: 1 / 0,
      range: {
        start: 0,
        end: 1 / 0,
        step: 1
      },
      description: it(nt()),
      cliCategory: st
    },
    rangeStart: {
      since: "1.4.0",
      category: pt,
      type: "int",
      default: 0,
      range: {
        start: 0,
        end: 1 / 0,
        step: 1
      },
      description: it(tt()),
      cliCategory: st
    },
    requirePragma: {
      since: "1.7.0",
      category: pt,
      type: "boolean",
      default: !1,
      description: it(et()),
      cliCategory: ct
    },
    tabWidth: {
      type: "int",
      category: lt,
      default: 2,
      description: "Number of spaces per indentation level.",
      range: {
        start: 0,
        end: 1 / 0,
        step: 1
      }
    },
    useTabs: {
      since: "1.0.0",
      category: lt,
      type: "boolean",
      default: !1,
      description: "Indent with tabs instead of spaces."
    },
    embeddedLanguageFormatting: {
      since: "2.1.0",
      category: lt,
      type: "choice",
      default: [{
        since: "2.1.0",
        value: "auto"
      }],
      description: "Control how Prettier formats quoted code embedded in the file.",
      choices: [{
        value: "auto",
        description: "Format embedded code if Prettier can automatically identify it."
      }, {
        value: "off",
        description: "Never automatically format embedded code."
      }]
    }
  };
  const ft = {
    compare: Ye,
    lt: Ke,
    gte: Qe
  }, ht = n.version, mt = ({
    CATEGORY_CONFIG: at,
    CATEGORY_EDITOR: st,
    CATEGORY_FORMAT: "Format",
    CATEGORY_OTHER: ct,
    CATEGORY_OUTPUT: "Output",
    CATEGORY_GLOBAL: lt,
    CATEGORY_SPECIAL: pt,
    options: dt
  }).options;
  var gt = {
    getSupportInfo: function ({plugins: t = [], showUnreleased: n = !1, showDeprecated: r = !1, showInternal: o = !1} = {}) {
      const u = ht.split("-", 1)[0], i = t.reduce((e, t) => e.concat(t.languages || []), []).filter(s), a = ((e, t) => Object.entries(e).map(([e, n]) => Object.assign({
        [t]: e
      }, n)))(Object.assign({}, ...t.map(({options: e}) => e), mt), "name").filter(e => s(e) && c(e)).sort((e, t) => e.name === t.name ? 0 : e.name < t.name ? -1 : 1).map(function (t) {
        if (o) return t;
        return e(t, ["cliName", "cliCategory", "cliDescription"]);
      }).map(e => {
        (e = Object.assign({}, e), Array.isArray(e.default) && (e.default = 1 === e.default.length ? e.default[0].value : e.default.filter(s).sort((e, t) => ft.compare(t.since, e.since))[0].value), Array.isArray(e.choices) && (e.choices = e.choices.filter(e => s(e) && c(e)), "parser" === e.name && (function (e, t, n) {
          const r = new Set(e.choices.map(e => e.value));
          for (const o of t) if (o.parsers) for (const t of o.parsers) if (!r.has(t)) {
            r.add(t);
            const u = n.find(e => e.parsers && e.parsers[t]);
            let i = o.name;
            (u && u.name && (i += (" (plugin: ").concat(u.name, ")")), e.choices.push({
              value: t,
              description: i
            }));
          }
        })(e, i, t)));
        const n = t.filter(t => t.defaultOptions && void 0 !== t.defaultOptions[e.name]).reduce((t, n) => (t[n.name] = n.defaultOptions[e.name], t), {});
        return Object.assign({}, e, {
          pluginDefaults: n
        });
      });
      return {
        languages: i,
        options: a
      };
      function s(e) {
        return n || !(("since" in e)) || e.since && ft.gte(u, e.since);
      }
      function c(e) {
        return r || !(("deprecated" in e)) || e.deprecated && ft.lt(u, e.deprecated);
      }
    }
  };
  const {getSupportInfo: Dt} = gt, yt = /[^\x20-\x7F]/;
  function Et(e) {
    return (t, n, r) => {
      const o = r && r.backwards;
      if (!1 === n) return !1;
      const {length: u} = t;
      let i = n;
      for (; i >= 0 && i < u; ) {
        const n = t.charAt(i);
        if (e instanceof RegExp) {
          if (!e.test(n)) return i;
        } else if (!e.includes(n)) return i;
        o ? i-- : i++;
      }
      return (-1 === i || i === u) && i;
    };
  }
  const Ct = Et(/\s/), bt = Et(" \t"), vt = Et(",; \t"), At = Et(/[^\n\r]/);
  function Ft(e, t) {
    if (!1 === t) return !1;
    if ("/" === e.charAt(t) && "*" === e.charAt(t + 1)) for (let n = t + 2; n < e.length; ++n) if ("*" === e.charAt(n) && "/" === e.charAt(n + 1)) return n + 2;
    return t;
  }
  function xt(e, t) {
    return !1 !== t && ("/" === e.charAt(t) && "/" === e.charAt(t + 1) ? At(e, t) : t);
  }
  function St(e, t, n) {
    const r = n && n.backwards;
    if (!1 === t) return !1;
    const o = e.charAt(t);
    if (r) {
      if ("\r" === e.charAt(t - 1) && "\n" === o) return t - 2;
      if ("\n" === o || "\r" === o || "\u2028" === o || "\u2029" === o) return t - 1;
    } else {
      if ("\r" === o && "\n" === e.charAt(t + 1)) return t + 2;
      if ("\n" === o || "\r" === o || "\u2028" === o || "\u2029" === o) return t + 1;
    }
    return t;
  }
  function wt(e, t, n) {
    const r = bt(e, (n = n || ({})).backwards ? t - 1 : t, n);
    return r !== St(e, r, n);
  }
  function Tt(e, t) {
    let n = null, r = t;
    for (; r !== n; ) (n = r, r = vt(e, r), r = Ft(e, r), r = bt(e, r));
    return (r = xt(e, r), r = St(e, r), !1 !== r && wt(e, r));
  }
  function Bt(e, t) {
    let n = null, r = t;
    for (; r !== n; ) (n = r, r = bt(e, r), r = Ft(e, r), r = xt(e, r), r = St(e, r));
    return r;
  }
  function Nt(e, t, n) {
    return Bt(e, n(t));
  }
  function kt(e, t, n) {
    let r = 0;
    for (let o = n = n || 0; o < e.length; ++o) "\t" === e[o] ? r = r + t - r % t : r++;
    return r;
  }
  function Pt(e, t) {
    const n = e.slice(1, -1), r = {
      quote: '"',
      regex: /"/g
    }, o = {
      quote: "'",
      regex: /'/g
    }, u = "'" === t ? o : r, i = u === o ? r : o;
    let a = u.quote;
    if (n.includes(u.quote) || n.includes(i.quote)) {
      a = (n.match(u.regex) || []).length > (n.match(i.regex) || []).length ? i.quote : u.quote;
    }
    return a;
  }
  function Ot(e, t, n) {
    const r = '"' === t ? "'" : '"', o = e.replace(/\\([\S\s])|(["'])/g, (e, o, u) => o === r ? o : u === t ? "\\" + u : u || (n && (/^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/).test(o) ? o : "\\" + o));
    return t + o + t;
  }
  function It(e, t) {
    ((e.comments || (e.comments = [])).push(t), t.printed = !1, "JSXText" === e.type && (t.printed = !0));
  }
  var Lt = {
    inferParserByLanguage: function (e, t) {
      const {languages: n} = Dt({
        plugins: t.plugins
      }), r = n.find(({name: t}) => t.toLowerCase() === e) || n.find(({aliases: t}) => Array.isArray(t) && t.includes(e)) || n.find(({extensions: t}) => Array.isArray(t) && t.includes((".").concat(e)));
      return r && r.parsers[0];
    },
    replaceEndOfLineWith: function (e, t) {
      const n = [];
      for (const r of e.split("\n")) (0 !== n.length && n.push(t), n.push(r));
      return n;
    },
    getStringWidth: function (e) {
      return e ? yt.test(e) ? ue(e) : e.length : 0;
    },
    getMaxContinuousCount: function (e, t) {
      const n = e.match(new RegExp(("(").concat(ae(t), ")+"), "g"));
      return null === n ? 0 : n.reduce((e, n) => Math.max(e, n.length / t.length), 0);
    },
    getMinNotPresentContinuousCount: function (e, t) {
      const n = e.match(new RegExp(("(").concat(ae(t), ")+"), "g"));
      if (null === n) return 0;
      const r = new Map();
      let o = 0;
      for (const e of n) {
        const n = e.length / t.length;
        (r.set(n, !0), n > o && (o = n));
      }
      for (let e = 1; e < o; e++) if (!r.get(e)) return e;
      return o + 1;
    },
    getPenultimate: e => e[e.length - 2],
    getLast: se,
    getNextNonSpaceNonCommentCharacterIndexWithStartIndex: Bt,
    getNextNonSpaceNonCommentCharacterIndex: Nt,
    getNextNonSpaceNonCommentCharacter: function (e, t, n) {
      return e.charAt(Nt(e, t, n));
    },
    skip: Et,
    skipWhitespace: Ct,
    skipSpaces: bt,
    skipToLineEnd: vt,
    skipEverythingButNewLine: At,
    skipInlineComment: Ft,
    skipTrailingComment: xt,
    skipNewline: St,
    isNextLineEmptyAfterIndex: Tt,
    isNextLineEmpty: function (e, t, n) {
      return Tt(e, n(t));
    },
    isPreviousLineEmpty: function (e, t, n) {
      let r = n(t) - 1;
      return (r = bt(e, r, {
        backwards: !0
      }), r = St(e, r, {
        backwards: !0
      }), r = bt(e, r, {
        backwards: !0
      }), r !== St(e, r, {
        backwards: !0
      }));
    },
    hasNewline: wt,
    hasNewlineInRange: function (e, t, n) {
      for (let r = t; r < n; ++r) if ("\n" === e.charAt(r)) return !0;
      return !1;
    },
    hasSpaces: function (e, t, n) {
      return bt(e, (n = n || ({})).backwards ? t - 1 : t, n) !== t;
    },
    getAlignmentSize: kt,
    getIndentSize: function (e, t) {
      const n = e.lastIndexOf("\n");
      return -1 === n ? 0 : kt(e.slice(n + 1).match(/^[\t ]*/)[0], t);
    },
    getPreferredQuote: Pt,
    printString: function (e, t, n) {
      const r = e.slice(1, -1), o = !r.includes('"') && !r.includes("'"), u = "json" === t.parser ? '"' : t.__isInHtmlAttribute ? "'" : Pt(e, t.singleQuote ? "'" : '"');
      return n ? o ? u + r + u : e : Ot(r, u, !("css" === t.parser || "less" === t.parser || "scss" === t.parser || t.embeddedInHtml));
    },
    printNumber: function (e) {
      return e.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
    },
    isNodeIgnoreComment: function (e) {
      return "prettier-ignore" === e.value.trim();
    },
    makeString: Ot,
    addLeadingComment: function (e, t) {
      (t.leading = !0, t.trailing = !1, It(e, t));
    },
    addDanglingComment: function (e, t, n) {
      (t.leading = !1, t.trailing = !1, n && (t.marker = n), It(e, t));
    },
    addTrailingComment: function (e, t) {
      (t.leading = !1, t.trailing = !0, It(e, t));
    },
    isFrontMatterNode: function (e) {
      return e && "front-matter" === e.type;
    },
    getShebang: function (e) {
      if (!e.startsWith("#!")) return "";
      const t = e.indexOf("\n");
      return -1 === t ? e : e.slice(0, t);
    }
  };
  var Mt = {
    guessEndOfLine: function (e) {
      const t = e.indexOf("\r");
      return t >= 0 ? "\n" === e.charAt(t + 1) ? "crlf" : "cr" : "lf";
    },
    convertEndOfLineToChars: function (e) {
      switch (e) {
        case "cr":
          return "\r";
        case "crlf":
          return "\r\n";
        default:
          return "\n";
      }
    },
    countEndOfLineChars: function (e, t) {
      let n;
      if ("\n" === t) n = /\n/g; else if ("\r" === t) n = /\r/g; else {
        if ("\r\n" !== t) throw new Error(('Unexpected "eol" ').concat(JSON.stringify(t), "."));
        n = /\r\n/g;
      }
      const r = e.match(n);
      return r ? r.length : 0;
    },
    normalizeEndOfLine: function (e) {
      return e.replace(/\r\n?/g, "\n");
    }
  };
  const {getStringWidth: jt} = Lt, {convertEndOfLineToChars: _t} = Mt, {concat: Rt, fill: Vt, cursor: $t} = Z;
  let qt;
  function Wt(e, t) {
    return Jt(e, {
      type: "indent"
    }, t);
  }
  function Ut(e, t, n) {
    if (t === -1 / 0) return e.root || ({
      value: "",
      length: 0,
      queue: []
    });
    if (t < 0) return Jt(e, {
      type: "dedent"
    }, n);
    if (!t) return e;
    if ("root" === t.type) return Object.assign({}, e, {
      root: e
    });
    return Jt(e, {
      type: "string" == typeof t ? "stringAlign" : "numberAlign",
      n: t
    }, n);
  }
  function Jt(e, t, n) {
    const r = "dedent" === t.type ? e.queue.slice(0, -1) : e.queue.concat(t);
    let o = "", u = 0, i = 0, a = 0;
    for (const e of r) switch (e.type) {
      case "indent":
        (l(), n.useTabs ? s(1) : c(n.tabWidth));
        break;
      case "stringAlign":
        (l(), o += e.n, u += e.n.length);
        break;
      case "numberAlign":
        (i += 1, a += e.n);
        break;
      default:
        throw new Error(("Unexpected type '").concat(e.type, "'"));
    }
    return (p(), Object.assign({}, e, {
      value: o,
      length: u,
      queue: r
    }));
    function s(e) {
      (o += ("\t").repeat(e), u += n.tabWidth * e);
    }
    function c(e) {
      (o += (" ").repeat(e), u += e);
    }
    function l() {
      n.useTabs ? (function () {
        i > 0 && s(i);
        d();
      })() : p();
    }
    function p() {
      (a > 0 && c(a), d());
    }
    function d() {
      (i = 0, a = 0);
    }
  }
  function zt(e) {
    if (0 === e.length) return 0;
    let t = 0;
    for (; e.length > 0 && "string" == typeof e[e.length - 1] && e[e.length - 1].match(/^[\t ]*$/); ) t += e.pop().length;
    if (e.length && "string" == typeof e[e.length - 1]) {
      const n = e[e.length - 1].replace(/[\t ]*$/, "");
      (t += e[e.length - 1].length - n.length, e[e.length - 1] = n);
    }
    return t;
  }
  function Ht(e, t, n, r, o) {
    let u = t.length;
    const i = [e], a = [];
    for (; n >= 0; ) {
      if (0 === i.length) {
        if (0 === u) return !0;
        (i.push(t[u - 1]), u--);
        continue;
      }
      const [e, s, c] = i.pop();
      if ("string" == typeof c) (a.push(c), n -= jt(c)); else switch (c.type) {
        case "concat":
          for (let t = c.parts.length - 1; t >= 0; t--) i.push([e, s, c.parts[t]]);
          break;
        case "indent":
          i.push([Wt(e, r), s, c.contents]);
          break;
        case "align":
          i.push([Ut(e, c.n, r), s, c.contents]);
          break;
        case "trim":
          n += zt(a);
          break;
        case "group":
          if (o && c.break) return !1;
          (i.push([e, c.break ? 1 : s, c.contents]), c.id && (qt[c.id] = i[i.length - 1][1]));
          break;
        case "fill":
          for (let t = c.parts.length - 1; t >= 0; t--) i.push([e, s, c.parts[t]]);
          break;
        case "if-break":
          {
            const t = c.groupId ? qt[c.groupId] : s;
            (1 === t && c.breakContents && i.push([e, s, c.breakContents]), 2 === t && c.flatContents && i.push([e, s, c.flatContents]));
            break;
          }
        case "line":
          switch (s) {
            case 2:
              if (!c.hard) {
                c.soft || (a.push(" "), n -= 1);
                break;
              }
              return !0;
            case 1:
              return !0;
          }
      }
    }
    return !1;
  }
  var Gt = {
    printDocToString: function (e, t) {
      qt = {};
      const n = t.printWidth, r = _t(t.endOfLine);
      let o = 0;
      const u = [[{
        value: "",
        length: 0,
        queue: []
      }, 1, e]], i = [];
      let a = !1, s = [];
      for (; 0 !== u.length; ) {
        const [e, c, l] = u.pop();
        if ("string" == typeof l) {
          const e = "\n" !== r && l.includes("\n") ? l.replace(/\n/g, r) : l;
          (i.push(e), o += jt(e));
        } else switch (l.type) {
          case "cursor":
            i.push($t.placeholder);
            break;
          case "concat":
            for (let t = l.parts.length - 1; t >= 0; t--) u.push([e, c, l.parts[t]]);
            break;
          case "indent":
            u.push([Wt(e, t), c, l.contents]);
            break;
          case "align":
            u.push([Ut(e, l.n, t), c, l.contents]);
            break;
          case "trim":
            o -= zt(i);
            break;
          case "group":
            switch (c) {
              case 2:
                if (!a) {
                  u.push([e, l.break ? 1 : 2, l.contents]);
                  break;
                }
              case 1:
                {
                  a = !1;
                  const r = [e, 2, l.contents], i = n - o;
                  if (!l.break && Ht(r, u, i, t)) u.push(r); else if (l.expandedStates) {
                    const n = l.expandedStates[l.expandedStates.length - 1];
                    if (l.break) {
                      u.push([e, 1, n]);
                      break;
                    }
                    for (let r = 1; r < l.expandedStates.length + 1; r++) {
                      if (r >= l.expandedStates.length) {
                        u.push([e, 1, n]);
                        break;
                      }
                      {
                        const n = [e, 2, l.expandedStates[r]];
                        if (Ht(n, u, i, t)) {
                          u.push(n);
                          break;
                        }
                      }
                    }
                  } else u.push([e, 1, l.contents]);
                  break;
                }
            }
            l.id && (qt[l.id] = u[u.length - 1][1]);
            break;
          case "fill":
            {
              const r = n - o, {parts: i} = l;
              if (0 === i.length) break;
              const [a, s] = i, p = [e, 2, a], d = [e, 1, a], f = Ht(p, [], r, t, !0);
              if (1 === i.length) {
                f ? u.push(p) : u.push(d);
                break;
              }
              const h = [e, 2, s], m = [e, 1, s];
              if (2 === i.length) {
                f ? (u.push(h), u.push(p)) : (u.push(m), u.push(d));
                break;
              }
              i.splice(0, 2);
              const g = [e, c, Vt(i)], D = i[0];
              Ht([e, 2, Rt([a, s, D])], [], r, t, !0) ? (u.push(g), u.push(h), u.push(p)) : f ? (u.push(g), u.push(m), u.push(p)) : (u.push(g), u.push(m), u.push(d));
              break;
            }
          case "if-break":
            {
              const t = l.groupId ? qt[l.groupId] : c;
              (1 === t && l.breakContents && u.push([e, c, l.breakContents]), 2 === t && l.flatContents && u.push([e, c, l.flatContents]));
              break;
            }
          case "line-suffix":
            s.push([e, c, l.contents]);
            break;
          case "line-suffix-boundary":
            s.length > 0 && u.push([e, c, {
              type: "line",
              hard: !0
            }]);
            break;
          case "line":
            switch (c) {
              case 2:
                if (!l.hard) {
                  l.soft || (i.push(" "), o += 1);
                  break;
                }
                a = !0;
              case 1:
                if (s.length) {
                  (u.push([e, c, l]), u.push(...s.reverse()), s = []);
                  break;
                }
                l.literal ? e.root ? (i.push(r, e.root.value), o = e.root.length) : (i.push(r), o = 0) : (o -= zt(i), i.push(r + e.value), o = e.length);
            }
        }
        0 === u.length && s.length && (u.push(...s.reverse()), s = []);
      }
      const c = i.indexOf($t.placeholder);
      if (-1 !== c) {
        const e = i.indexOf($t.placeholder, c + 1), t = i.slice(0, c).join(""), n = i.slice(c + 1, e).join("");
        return {
          formatted: t + n + i.slice(e + 1).join(""),
          cursorNodeStart: t.length,
          cursorNodeText: n
        };
      }
      return {
        formatted: i.join("")
      };
    }
  };
  const {literalline: Xt, concat: Yt} = Z, Kt = {};
  function Qt(e, t, n, r) {
    const o = [e];
    for (; 0 !== o.length; ) {
      const e = o.pop();
      if (e !== Kt) {
        if ((n && o.push(e, Kt), !t || !1 !== t(e))) if ("concat" === e.type || "fill" === e.type) for (let t = e.parts.length - 1; t >= 0; --t) o.push(e.parts[t]); else if ("if-break" === e.type) (e.flatContents && o.push(e.flatContents), e.breakContents && o.push(e.breakContents)); else if ("group" === e.type && e.expandedStates) if (r) for (let t = e.expandedStates.length - 1; t >= 0; --t) o.push(e.expandedStates[t]); else o.push(e.contents); else e.contents && o.push(e.contents);
      } else n(o.pop());
    }
  }
  function Zt(e, t) {
    if ("concat" === e.type || "fill" === e.type) {
      const n = e.parts.map(e => Zt(e, t));
      return t(Object.assign({}, e, {
        parts: n
      }));
    }
    if ("if-break" === e.type) {
      const n = e.breakContents && Zt(e.breakContents, t), r = e.flatContents && Zt(e.flatContents, t);
      return t(Object.assign({}, e, {
        breakContents: n,
        flatContents: r
      }));
    }
    if (e.contents) {
      const n = Zt(e.contents, t);
      return t(Object.assign({}, e, {
        contents: n
      }));
    }
    return t(e);
  }
  function en(e, t, n) {
    let r = n, o = !1;
    return (Qt(e, function (e) {
      const n = t(e);
      if ((void 0 !== n && (o = !0, r = n), o)) return !1;
    }), r);
  }
  function tn(e) {
    return "string" != typeof e && ("line" === e.type || void 0);
  }
  function nn(e) {
    return !("group" !== e.type || !e.break) || (!("line" !== e.type || !e.hard) || ("break-parent" === e.type || void 0));
  }
  function rn(e) {
    if (e.length > 0) {
      const t = e[e.length - 1];
      t.expandedStates || (t.break = !0);
    }
    return null;
  }
  function on(e) {
    return "line" !== e.type || e.hard ? "if-break" === e.type ? e.flatContents || "" : e : e.soft ? "" : " ";
  }
  function un(e) {
    const t = [], n = e.filter(Boolean);
    for (; 0 !== n.length; ) {
      const e = n.shift();
      e && ("concat" !== e.type ? 0 === t.length || "string" != typeof t[t.length - 1] || "string" != typeof e ? t.push(e) : t[t.length - 1] += e : n.unshift(...e.parts));
    }
    return t;
  }
  function an(e) {
    if ("concat" === e.type) {
      const t = [];
      for (let n = 0; n < e.parts.length; ++n) {
        const r = e.parts[n];
        if ("string" != typeof r && "concat" === r.type) t.push(...an(r).parts); else {
          const e = an(r);
          "" !== e && t.push(e);
        }
      }
      return Object.assign({}, e, {
        parts: t
      });
    }
    return "if-break" === e.type ? Object.assign({}, e, {
      breakContents: null != e.breakContents ? an(e.breakContents) : null,
      flatContents: null != e.flatContents ? an(e.flatContents) : null
    }) : "group" === e.type ? Object.assign({}, e, {
      contents: an(e.contents),
      expandedStates: e.expandedStates ? e.expandedStates.map(an) : e.expandedStates
    }) : e.contents ? Object.assign({}, e, {
      contents: an(e.contents)
    }) : e;
  }
  function sn(e) {
    if ("string" == typeof e) return JSON.stringify(e);
    if ("line" === e.type) return e.literal ? "literalline" : e.hard ? "hardline" : e.soft ? "softline" : "line";
    if ("break-parent" === e.type) return "breakParent";
    if ("trim" === e.type) return "trim";
    if ("concat" === e.type) return "[" + e.parts.map(sn).join(", ") + "]";
    if ("indent" === e.type) return "indent(" + sn(e.contents) + ")";
    if ("align" === e.type) return e.n === -1 / 0 ? "dedentToRoot(" + sn(e.contents) + ")" : e.n < 0 ? "dedent(" + sn(e.contents) + ")" : "root" === e.n.type ? "markAsRoot(" + sn(e.contents) + ")" : "align(" + JSON.stringify(e.n) + ", " + sn(e.contents) + ")";
    if ("if-break" === e.type) return "ifBreak(" + sn(e.breakContents) + (e.flatContents ? ", " + sn(e.flatContents) : "") + ")";
    if ("group" === e.type) return e.expandedStates ? "conditionalGroup([" + e.expandedStates.map(sn).join(",") + "])" : (e.break ? "wrappedGroup" : "group") + "(" + sn(e.contents) + ")";
    if ("fill" === e.type) return "fill(" + e.parts.map(sn).join(", ") + ")";
    if ("line-suffix" === e.type) return "lineSuffix(" + sn(e.contents) + ")";
    if ("line-suffix-boundary" === e.type) return "lineSuffixBoundary";
    throw new Error("Unknown doc type " + e.type);
  }
  var cn = {
    builders: Z,
    printer: Gt,
    utils: {
      isEmpty: function (e) {
        return "string" == typeof e && 0 === e.length;
      },
      willBreak: function (e) {
        return en(e, nn, !1);
      },
      isLineNext: function (e) {
        return en(e, tn, !1);
      },
      traverseDoc: Qt,
      findInDoc: en,
      mapDoc: Zt,
      propagateBreaks: function (e) {
        const t = new Set(), n = [];
        Qt(e, function (e) {
          if (("break-parent" === e.type && rn(n), "group" === e.type)) {
            if ((n.push(e), t.has(e))) return !1;
            t.add(e);
          }
        }, function (e) {
          if ("group" === e.type) {
            n.pop().break && rn(n);
          }
        }, !0);
      },
      removeLines: function (e) {
        return Zt(e, on);
      },
      stripTrailingHardline: function e(t, n = !1) {
        if ("concat" === t.type && 0 !== t.parts.length) {
          const r = n ? (function (e) {
            let t, {parts: n} = e;
            for (let r = e.parts.length; r > 0 && !t; r--) t = n[r - 1];
            return ("group" === t.type && (n = t.contents.parts), n);
          })(t) : t.parts, o = r[r.length - 1];
          if ("concat" === o.type) return 2 === o.parts.length && o.parts[0].hard && "break-parent" === o.parts[1].type ? {
            type: "concat",
            parts: r.slice(0, -1)
          } : {
            type: "concat",
            parts: t.parts.slice(0, -1).concat(e(o))
          };
        }
        return t;
      },
      normalizeParts: un,
      normalizeDoc: function (e) {
        return Zt(e, e => e.parts ? Object.assign({}, e, {
          parts: un(e.parts)
        }) : e);
      },
      replaceNewlinesWithLiterallines: function (e) {
        return Zt(e, e => "string" == typeof e && e.includes("\n") ? Yt(e.split(/(\n)/g).map((e, t) => t % 2 == 0 ? e : Xt)) : e);
      }
    },
    debug: {
      printDocToDebug: e => sn(an(e))
    }
  };
  const ln = () => !1, pn = () => "";
  var dn = {
    existsSync: ln,
    readFileSync: pn
  }, fn = Object.freeze({
    __proto__: null,
    existsSync: ln,
    readFileSync: pn,
    default: dn
  });
  function hn(e) {
    if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
  }
  function mn(e, t) {
    for (var n, r = "", o = 0, u = -1, i = 0, a = 0; a <= e.length; ++a) {
      if (a < e.length) n = e.charCodeAt(a); else {
        if (47 === n) break;
        n = 47;
      }
      if (47 === n) {
        if (u === a - 1 || 1 === i) ; else if (u !== a - 1 && 2 === i) {
          if (r.length < 2 || 2 !== o || 46 !== r.charCodeAt(r.length - 1) || 46 !== r.charCodeAt(r.length - 2)) if (r.length > 2) {
            var s = r.lastIndexOf("/");
            if (s !== r.length - 1) {
              (-1 === s ? (r = "", o = 0) : o = (r = r.slice(0, s)).length - 1 - r.lastIndexOf("/"), u = a, i = 0);
              continue;
            }
          } else if (2 === r.length || 1 === r.length) {
            (r = "", o = 0, u = a, i = 0);
            continue;
          }
          t && (r.length > 0 ? r += "/.." : r = "..", o = 2);
        } else (r.length > 0 ? r += "/" + e.slice(u + 1, a) : r = e.slice(u + 1, a), o = a - u - 1);
        (u = a, i = 0);
      } else 46 === n && -1 !== i ? ++i : i = -1;
    }
    return r;
  }
  var gn = {
    resolve: function () {
      for (var e, t = "", n = !1, r = arguments.length - 1; r >= -1 && !n; r--) {
        var o;
        (r >= 0 ? o = arguments[r] : (void 0 === e && (e = Oe.cwd()), o = e), hn(o), 0 !== o.length && (t = o + "/" + t, n = 47 === o.charCodeAt(0)));
      }
      return (t = mn(t, !n), n ? t.length > 0 ? "/" + t : "/" : t.length > 0 ? t : ".");
    },
    normalize: function (e) {
      if ((hn(e), 0 === e.length)) return ".";
      var t = 47 === e.charCodeAt(0), n = 47 === e.charCodeAt(e.length - 1);
      return (0 !== (e = mn(e, !t)).length || t || (e = "."), e.length > 0 && n && (e += "/"), t ? "/" + e : e);
    },
    isAbsolute: function (e) {
      return (hn(e), e.length > 0 && 47 === e.charCodeAt(0));
    },
    join: function () {
      if (0 === arguments.length) return ".";
      for (var e, t = 0; t < arguments.length; ++t) {
        var n = arguments[t];
        (hn(n), n.length > 0 && (void 0 === e ? e = n : e += "/" + n));
      }
      return void 0 === e ? "." : gn.normalize(e);
    },
    relative: function (e, t) {
      if ((hn(e), hn(t), e === t)) return "";
      if ((e = gn.resolve(e)) === (t = gn.resolve(t))) return "";
      for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n) ;
      for (var r = e.length, o = r - n, u = 1; u < t.length && 47 === t.charCodeAt(u); ++u) ;
      for (var i = t.length - u, a = o < i ? o : i, s = -1, c = 0; c <= a; ++c) {
        if (c === a) {
          if (i > a) {
            if (47 === t.charCodeAt(u + c)) return t.slice(u + c + 1);
            if (0 === c) return t.slice(u + c);
          } else o > a && (47 === e.charCodeAt(n + c) ? s = c : 0 === c && (s = 0));
          break;
        }
        var l = e.charCodeAt(n + c);
        if (l !== t.charCodeAt(u + c)) break;
        47 === l && (s = c);
      }
      var p = "";
      for (c = n + s + 1; c <= r; ++c) c !== r && 47 !== e.charCodeAt(c) || (0 === p.length ? p += ".." : p += "/..");
      return p.length > 0 ? p + t.slice(u + s) : (u += s, 47 === t.charCodeAt(u) && ++u, t.slice(u));
    },
    _makeLong: function (e) {
      return e;
    },
    dirname: function (e) {
      if ((hn(e), 0 === e.length)) return ".";
      for (var t = e.charCodeAt(0), n = 47 === t, r = -1, o = !0, u = e.length - 1; u >= 1; --u) if (47 === (t = e.charCodeAt(u))) {
        if (!o) {
          r = u;
          break;
        }
      } else o = !1;
      return -1 === r ? n ? "/" : "." : n && 1 === r ? "//" : e.slice(0, r);
    },
    basename: function (e, t) {
      if (void 0 !== t && "string" != typeof t) throw new TypeError('"ext" argument must be a string');
      hn(e);
      var n, r = 0, o = -1, u = !0;
      if (void 0 !== t && t.length > 0 && t.length <= e.length) {
        if (t.length === e.length && t === e) return "";
        var i = t.length - 1, a = -1;
        for (n = e.length - 1; n >= 0; --n) {
          var s = e.charCodeAt(n);
          if (47 === s) {
            if (!u) {
              r = n + 1;
              break;
            }
          } else (-1 === a && (u = !1, a = n + 1), i >= 0 && (s === t.charCodeAt(i) ? -1 == --i && (o = n) : (i = -1, o = a)));
        }
        return (r === o ? o = a : -1 === o && (o = e.length), e.slice(r, o));
      }
      for (n = e.length - 1; n >= 0; --n) if (47 === e.charCodeAt(n)) {
        if (!u) {
          r = n + 1;
          break;
        }
      } else -1 === o && (u = !1, o = n + 1);
      return -1 === o ? "" : e.slice(r, o);
    },
    extname: function (e) {
      hn(e);
      for (var t = -1, n = 0, r = -1, o = !0, u = 0, i = e.length - 1; i >= 0; --i) {
        var a = e.charCodeAt(i);
        if (47 !== a) (-1 === r && (o = !1, r = i + 1), 46 === a ? -1 === t ? t = i : 1 !== u && (u = 1) : -1 !== t && (u = -1)); else if (!o) {
          n = i + 1;
          break;
        }
      }
      return -1 === t || -1 === r || 0 === u || 1 === u && t === r - 1 && t === n + 1 ? "" : e.slice(t, r);
    },
    format: function (e) {
      if (null === e || "object" != typeof e) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
      return (function (e, t) {
        var n = t.dir || t.root, r = t.base || (t.name || "") + (t.ext || "");
        return n ? n === t.root ? n + r : n + e + r : r;
      })("/", e);
    },
    parse: function (e) {
      hn(e);
      var t = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
      };
      if (0 === e.length) return t;
      var n, r = e.charCodeAt(0), o = 47 === r;
      o ? (t.root = "/", n = 1) : n = 0;
      for (var u = -1, i = 0, a = -1, s = !0, c = e.length - 1, l = 0; c >= n; --c) if (47 !== (r = e.charCodeAt(c))) (-1 === a && (s = !1, a = c + 1), 46 === r ? -1 === u ? u = c : 1 !== l && (l = 1) : -1 !== u && (l = -1)); else if (!s) {
        i = c + 1;
        break;
      }
      return (-1 === u || -1 === a || 0 === l || 1 === l && u === a - 1 && u === i + 1 ? -1 !== a && (t.base = t.name = 0 === i && o ? e.slice(1, a) : e.slice(i, a)) : (0 === i && o ? (t.name = e.slice(1, u), t.base = e.slice(1, a)) : (t.name = e.slice(i, u), t.base = e.slice(i, a)), t.ext = e.slice(u, a)), i > 0 ? t.dir = e.slice(0, i - 1) : o && (t.dir = "/"), t);
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
  };
  gn.posix = gn;
  var Dn = gn, yn = Object.freeze(Object.assign(Object.create(null), Dn, {
    default: Dn,
    __moduleExports: Dn
  })), En = [], Cn = [], bn = "undefined" != typeof Uint8Array ? Uint8Array : Array, vn = !1;
  function An() {
    vn = !0;
    for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0, n = e.length; t < n; ++t) (En[t] = e[t], Cn[e.charCodeAt(t)] = t);
    (Cn[("-").charCodeAt(0)] = 62, Cn[("_").charCodeAt(0)] = 63);
  }
  function Fn(e, t, n) {
    for (var r, o, u = [], i = t; i < n; i += 3) (r = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2], u.push(En[(o = r) >> 18 & 63] + En[o >> 12 & 63] + En[o >> 6 & 63] + En[63 & o]));
    return u.join("");
  }
  function xn(e) {
    var t;
    vn || An();
    for (var n = e.length, r = n % 3, o = "", u = [], i = 16383, a = 0, s = n - r; a < s; a += i) u.push(Fn(e, a, a + i > s ? s : a + i));
    return (1 === r ? (t = e[n - 1], o += En[t >> 2], o += En[t << 4 & 63], o += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], o += En[t >> 10], o += En[t >> 4 & 63], o += En[t << 2 & 63], o += "="), u.push(o), u.join(""));
  }
  function Sn(e, t, n, r, o) {
    var u, i, a = 8 * o - r - 1, s = (1 << a) - 1, c = s >> 1, l = -7, p = n ? o - 1 : 0, d = n ? -1 : 1, f = e[t + p];
    for ((p += d, u = f & (1 << -l) - 1, f >>= -l, l += a); l > 0; (u = 256 * u + e[t + p], p += d, l -= 8)) ;
    for ((i = u & (1 << -l) - 1, u >>= -l, l += r); l > 0; (i = 256 * i + e[t + p], p += d, l -= 8)) ;
    if (0 === u) u = 1 - c; else {
      if (u === s) return i ? NaN : 1 / 0 * (f ? -1 : 1);
      (i += Math.pow(2, r), u -= c);
    }
    return (f ? -1 : 1) * i * Math.pow(2, u - r);
  }
  function wn(e, t, n, r, o, u) {
    var i, a, s, c = 8 * u - o - 1, l = (1 << c) - 1, p = l >> 1, d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = r ? 0 : u - 1, h = r ? 1 : -1, m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
    for ((t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, i = l) : (i = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -i)) < 1 && (i--, s *= 2), (t += i + p >= 1 ? d / s : d * Math.pow(2, 1 - p)) * s >= 2 && (i++, s /= 2), i + p >= l ? (a = 0, i = l) : i + p >= 1 ? (a = (t * s - 1) * Math.pow(2, o), i += p) : (a = t * Math.pow(2, p - 1) * Math.pow(2, o), i = 0))); o >= 8; (e[n + f] = 255 & a, f += h, a /= 256, o -= 8)) ;
    for ((i = i << o | a, c += o); c > 0; (e[n + f] = 255 & i, f += h, i /= 256, c -= 8)) ;
    e[n + f - h] |= 128 * m;
  }
  var Tn = ({}).toString, Bn = Array.isArray || (function (e) {
    return "[object Array]" == Tn.call(e);
  });
  function Nn() {
    return Pn.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
  }
  function kn(e, t) {
    if (Nn() < t) throw new RangeError("Invalid typed array length");
    return (Pn.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = Pn.prototype : (null === e && (e = new Pn(t)), e.length = t), e);
  }
  function Pn(e, t, n) {
    if (!(Pn.TYPED_ARRAY_SUPPORT || this instanceof Pn)) return new Pn(e, t, n);
    if ("number" == typeof e) {
      if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
      return Ln(this, e);
    }
    return On(this, e, t, n);
  }
  function On(e, t, n, r) {
    if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
    return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? (function (e, t, n, r) {
      if ((t.byteLength, n < 0 || t.byteLength < n)) throw new RangeError("'offset' is out of bounds");
      if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
      t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
      Pn.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = Pn.prototype : e = Mn(e, t);
      return e;
    })(e, t, n, r) : "string" == typeof t ? (function (e, t, n) {
      "string" == typeof n && "" !== n || (n = "utf8");
      if (!Pn.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
      var r = 0 | Rn(t, n), o = (e = kn(e, r)).write(t, n);
      o !== r && (e = e.slice(0, o));
      return e;
    })(e, t, n) : (function (e, t) {
      if (_n(t)) {
        var n = 0 | jn(t.length);
        return (0 === (e = kn(e, n)).length || t.copy(e, 0, 0, n), e);
      }
      if (t) {
        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || ("length" in t)) return "number" != typeof t.length || (r = t.length) != r ? kn(e, 0) : Mn(e, t);
        if ("Buffer" === t.type && Bn(t.data)) return Mn(e, t.data);
      }
      var r;
      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    })(e, t);
  }
  function In(e) {
    if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
    if (e < 0) throw new RangeError('"size" argument must not be negative');
  }
  function Ln(e, t) {
    if ((In(t), e = kn(e, t < 0 ? 0 : 0 | jn(t)), !Pn.TYPED_ARRAY_SUPPORT)) for (var n = 0; n < t; ++n) e[n] = 0;
    return e;
  }
  function Mn(e, t) {
    var n = t.length < 0 ? 0 : 0 | jn(t.length);
    e = kn(e, n);
    for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
    return e;
  }
  function jn(e) {
    if (e >= Nn()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Nn().toString(16) + " bytes");
    return 0 | e;
  }
  function _n(e) {
    return !(null == e || !e._isBuffer);
  }
  function Rn(e, t) {
    if (_n(e)) return e.length;
    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
    "string" != typeof e && (e = "" + e);
    var n = e.length;
    if (0 === n) return 0;
    for (var r = !1; ; ) switch (t) {
      case "ascii":
      case "latin1":
      case "binary":
        return n;
      case "utf8":
      case "utf-8":
      case void 0:
        return dr(e).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * n;
      case "hex":
        return n >>> 1;
      case "base64":
        return fr(e).length;
      default:
        if (r) return dr(e).length;
        (t = ("" + t).toLowerCase(), r = !0);
    }
  }
  function Vn(e, t, n) {
    var r = !1;
    if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
    if (((void 0 === n || n > this.length) && (n = this.length), n <= 0)) return "";
    if ((n >>>= 0) <= (t >>>= 0)) return "";
    for (e || (e = "utf8"); ; ) switch (e) {
      case "hex":
        return tr(this, t, n);
      case "utf8":
      case "utf-8":
        return Kn(this, t, n);
      case "ascii":
        return Zn(this, t, n);
      case "latin1":
      case "binary":
        return er(this, t, n);
      case "base64":
        return Yn(this, t, n);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return nr(this, t, n);
      default:
        if (r) throw new TypeError("Unknown encoding: " + e);
        (e = (e + "").toLowerCase(), r = !0);
    }
  }
  function $n(e, t, n) {
    var r = e[t];
    (e[t] = e[n], e[n] = r);
  }
  function qn(e, t, n, r, o) {
    if (0 === e.length) return -1;
    if (("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length)) {
      if (o) return -1;
      n = e.length - 1;
    } else if (n < 0) {
      if (!o) return -1;
      n = 0;
    }
    if (("string" == typeof t && (t = Pn.from(t, r)), _n(t))) return 0 === t.length ? -1 : Wn(e, t, n, r, o);
    if ("number" == typeof t) return (t &= 255, Pn.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : Wn(e, [t], n, r, o));
    throw new TypeError("val must be string, number or Buffer");
  }
  function Wn(e, t, n, r, o) {
    var u, i = 1, a = e.length, s = t.length;
    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
      if (e.length < 2 || t.length < 2) return -1;
      (i = 2, a /= 2, s /= 2, n /= 2);
    }
    function c(e, t) {
      return 1 === i ? e[t] : e.readUInt16BE(t * i);
    }
    if (o) {
      var l = -1;
      for (u = n; u < a; u++) if (c(e, u) === c(t, -1 === l ? 0 : u - l)) {
        if ((-1 === l && (l = u), u - l + 1 === s)) return l * i;
      } else (-1 !== l && (u -= u - l), l = -1);
    } else for ((n + s > a && (n = a - s), u = n); u >= 0; u--) {
      for (var p = !0, d = 0; d < s; d++) if (c(e, u + d) !== c(t, d)) {
        p = !1;
        break;
      }
      if (p) return u;
    }
    return -1;
  }
  function Un(e, t, n, r) {
    n = Number(n) || 0;
    var o = e.length - n;
    r ? (r = Number(r)) > o && (r = o) : r = o;
    var u = t.length;
    if (u % 2 != 0) throw new TypeError("Invalid hex string");
    r > u / 2 && (r = u / 2);
    for (var i = 0; i < r; ++i) {
      var a = parseInt(t.substr(2 * i, 2), 16);
      if (isNaN(a)) return i;
      e[n + i] = a;
    }
    return i;
  }
  function Jn(e, t, n, r) {
    return hr(dr(t, e.length - n), e, n, r);
  }
  function zn(e, t, n, r) {
    return hr((function (e) {
      for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
      return t;
    })(t), e, n, r);
  }
  function Hn(e, t, n, r) {
    return zn(e, t, n, r);
  }
  function Gn(e, t, n, r) {
    return hr(fr(t), e, n, r);
  }
  function Xn(e, t, n, r) {
    return hr((function (e, t) {
      for (var n, r, o, u = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) (r = (n = e.charCodeAt(i)) >> 8, o = n % 256, u.push(o), u.push(r));
      return u;
    })(t, e.length - n), e, n, r);
  }
  function Yn(e, t, n) {
    return 0 === t && n === e.length ? xn(e) : xn(e.slice(t, n));
  }
  function Kn(e, t, n) {
    n = Math.min(e.length, n);
    for (var r = [], o = t; o < n; ) {
      var u, i, a, s, c = e[o], l = null, p = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
      if (o + p <= n) switch (p) {
        case 1:
          c < 128 && (l = c);
          break;
        case 2:
          128 == (192 & (u = e[o + 1])) && (s = (31 & c) << 6 | 63 & u) > 127 && (l = s);
          break;
        case 3:
          (u = e[o + 1], i = e[o + 2], 128 == (192 & u) && 128 == (192 & i) && (s = (15 & c) << 12 | (63 & u) << 6 | 63 & i) > 2047 && (s < 55296 || s > 57343) && (l = s));
          break;
        case 4:
          (u = e[o + 1], i = e[o + 2], a = e[o + 3], 128 == (192 & u) && 128 == (192 & i) && 128 == (192 & a) && (s = (15 & c) << 18 | (63 & u) << 12 | (63 & i) << 6 | 63 & a) > 65535 && s < 1114112 && (l = s));
      }
      (null === l ? (l = 65533, p = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), o += p);
    }
    return (function (e) {
      var t = e.length;
      if (t <= Qn) return String.fromCharCode.apply(String, e);
      var n = "", r = 0;
      for (; r < t; ) n += String.fromCharCode.apply(String, e.slice(r, r += Qn));
      return n;
    })(r);
  }
  (Pn.TYPED_ARRAY_SUPPORT = void 0 === ce.TYPED_ARRAY_SUPPORT || ce.TYPED_ARRAY_SUPPORT, Pn.poolSize = 8192, Pn._augment = function (e) {
    return (e.__proto__ = Pn.prototype, e);
  }, Pn.from = function (e, t, n) {
    return On(null, e, t, n);
  }, Pn.TYPED_ARRAY_SUPPORT && (Pn.prototype.__proto__ = Uint8Array.prototype, Pn.__proto__ = Uint8Array), Pn.alloc = function (e, t, n) {
    return (function (e, t, n, r) {
      return (In(t), t <= 0 ? kn(e, t) : void 0 !== n ? "string" == typeof r ? kn(e, t).fill(n, r) : kn(e, t).fill(n) : kn(e, t));
    })(null, e, t, n);
  }, Pn.allocUnsafe = function (e) {
    return Ln(null, e);
  }, Pn.allocUnsafeSlow = function (e) {
    return Ln(null, e);
  }, Pn.isBuffer = function (e) {
    return null != e && (!!e._isBuffer || mr(e) || (function (e) {
      return "function" == typeof e.readFloatLE && "function" == typeof e.slice && mr(e.slice(0, 0));
    })(e));
  }, Pn.compare = function (e, t) {
    if (!_n(e) || !_n(t)) throw new TypeError("Arguments must be Buffers");
    if (e === t) return 0;
    for (var n = e.length, r = t.length, o = 0, u = Math.min(n, r); o < u; ++o) if (e[o] !== t[o]) {
      (n = e[o], r = t[o]);
      break;
    }
    return n < r ? -1 : r < n ? 1 : 0;
  }, Pn.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, Pn.concat = function (e, t) {
    if (!Bn(e)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === e.length) return Pn.alloc(0);
    var n;
    if (void 0 === t) for ((t = 0, n = 0); n < e.length; ++n) t += e[n].length;
    var r = Pn.allocUnsafe(t), o = 0;
    for (n = 0; n < e.length; ++n) {
      var u = e[n];
      if (!_n(u)) throw new TypeError('"list" argument must be an Array of Buffers');
      (u.copy(r, o), o += u.length);
    }
    return r;
  }, Pn.byteLength = Rn, Pn.prototype._isBuffer = !0, Pn.prototype.swap16 = function () {
    var e = this.length;
    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var t = 0; t < e; t += 2) $n(this, t, t + 1);
    return this;
  }, Pn.prototype.swap32 = function () {
    var e = this.length;
    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var t = 0; t < e; t += 4) ($n(this, t, t + 3), $n(this, t + 1, t + 2));
    return this;
  }, Pn.prototype.swap64 = function () {
    var e = this.length;
    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var t = 0; t < e; t += 8) ($n(this, t, t + 7), $n(this, t + 1, t + 6), $n(this, t + 2, t + 5), $n(this, t + 3, t + 4));
    return this;
  }, Pn.prototype.toString = function () {
    var e = 0 | this.length;
    return 0 === e ? "" : 0 === arguments.length ? Kn(this, 0, e) : Vn.apply(this, arguments);
  }, Pn.prototype.equals = function (e) {
    if (!_n(e)) throw new TypeError("Argument must be a Buffer");
    return this === e || 0 === Pn.compare(this, e);
  }, Pn.prototype.inspect = function () {
    var e = "";
    return (this.length > 0 && (e = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e += " ... ")), "<Buffer " + e + ">");
  }, Pn.prototype.compare = function (e, t, n, r, o) {
    if (!_n(e)) throw new TypeError("Argument must be a Buffer");
    if ((void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length)) throw new RangeError("out of range index");
    if (r >= o && t >= n) return 0;
    if (r >= o) return -1;
    if (t >= n) return 1;
    if (this === e) return 0;
    for (var u = (o >>>= 0) - (r >>>= 0), i = (n >>>= 0) - (t >>>= 0), a = Math.min(u, i), s = this.slice(r, o), c = e.slice(t, n), l = 0; l < a; ++l) if (s[l] !== c[l]) {
      (u = s[l], i = c[l]);
      break;
    }
    return u < i ? -1 : i < u ? 1 : 0;
  }, Pn.prototype.includes = function (e, t, n) {
    return -1 !== this.indexOf(e, t, n);
  }, Pn.prototype.indexOf = function (e, t, n) {
    return qn(this, e, t, n, !0);
  }, Pn.prototype.lastIndexOf = function (e, t, n) {
    return qn(this, e, t, n, !1);
  }, Pn.prototype.write = function (e, t, n, r) {
    if (void 0 === t) (r = "utf8", n = this.length, t = 0); else if (void 0 === n && "string" == typeof t) (r = t, n = this.length, t = 0); else {
      if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      (t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0));
    }
    var o = this.length - t;
    if (((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length)) throw new RangeError("Attempt to write outside buffer bounds");
    r || (r = "utf8");
    for (var u = !1; ; ) switch (r) {
      case "hex":
        return Un(this, e, t, n);
      case "utf8":
      case "utf-8":
        return Jn(this, e, t, n);
      case "ascii":
        return zn(this, e, t, n);
      case "latin1":
      case "binary":
        return Hn(this, e, t, n);
      case "base64":
        return Gn(this, e, t, n);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Xn(this, e, t, n);
      default:
        if (u) throw new TypeError("Unknown encoding: " + r);
        (r = ("" + r).toLowerCase(), u = !0);
    }
  }, Pn.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  });
  var Qn = 4096;
  function Zn(e, t, n) {
    var r = "";
    n = Math.min(e.length, n);
    for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
    return r;
  }
  function er(e, t, n) {
    var r = "";
    n = Math.min(e.length, n);
    for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
    return r;
  }
  function tr(e, t, n) {
    var r = e.length;
    ((!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r));
    for (var o = "", u = t; u < n; ++u) o += pr(e[u]);
    return o;
  }
  function nr(e, t, n) {
    for (var r = e.slice(t, n), o = "", u = 0; u < r.length; u += 2) o += String.fromCharCode(r[u] + 256 * r[u + 1]);
    return o;
  }
  function rr(e, t, n) {
    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
  }
  function or(e, t, n, r, o, u) {
    if (!_n(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > o || t < u) throw new RangeError('"value" argument is out of bounds');
    if (n + r > e.length) throw new RangeError("Index out of range");
  }
  function ur(e, t, n, r) {
    t < 0 && (t = 65535 + t + 1);
    for (var o = 0, u = Math.min(e.length - n, 2); o < u; ++o) e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o);
  }
  function ir(e, t, n, r) {
    t < 0 && (t = 4294967295 + t + 1);
    for (var o = 0, u = Math.min(e.length - n, 4); o < u; ++o) e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255;
  }
  function ar(e, t, n, r, o, u) {
    if (n + r > e.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("Index out of range");
  }
  function sr(e, t, n, r, o) {
    return (o || ar(e, 0, n, 4), wn(e, t, n, r, 23, 4), n + 4);
  }
  function cr(e, t, n, r, o) {
    return (o || ar(e, 0, n, 8), wn(e, t, n, r, 52, 8), n + 8);
  }
  (Pn.prototype.slice = function (e, t) {
    var n, r = this.length;
    if (((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), Pn.TYPED_ARRAY_SUPPORT)) (n = this.subarray(e, t)).__proto__ = Pn.prototype; else {
      var o = t - e;
      n = new Pn(o, void 0);
      for (var u = 0; u < o; ++u) n[u] = this[u + e];
    }
    return n;
  }, Pn.prototype.readUIntLE = function (e, t, n) {
    (e |= 0, t |= 0, n || rr(e, t, this.length));
    for (var r = this[e], o = 1, u = 0; ++u < t && (o *= 256); ) r += this[e + u] * o;
    return r;
  }, Pn.prototype.readUIntBE = function (e, t, n) {
    (e |= 0, t |= 0, n || rr(e, t, this.length));
    for (var r = this[e + --t], o = 1; t > 0 && (o *= 256); ) r += this[e + --t] * o;
    return r;
  }, Pn.prototype.readUInt8 = function (e, t) {
    return (t || rr(e, 1, this.length), this[e]);
  }, Pn.prototype.readUInt16LE = function (e, t) {
    return (t || rr(e, 2, this.length), this[e] | this[e + 1] << 8);
  }, Pn.prototype.readUInt16BE = function (e, t) {
    return (t || rr(e, 2, this.length), this[e] << 8 | this[e + 1]);
  }, Pn.prototype.readUInt32LE = function (e, t) {
    return (t || rr(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]);
  }, Pn.prototype.readUInt32BE = function (e, t) {
    return (t || rr(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]));
  }, Pn.prototype.readIntLE = function (e, t, n) {
    (e |= 0, t |= 0, n || rr(e, t, this.length));
    for (var r = this[e], o = 1, u = 0; ++u < t && (o *= 256); ) r += this[e + u] * o;
    return (r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r);
  }, Pn.prototype.readIntBE = function (e, t, n) {
    (e |= 0, t |= 0, n || rr(e, t, this.length));
    for (var r = t, o = 1, u = this[e + --r]; r > 0 && (o *= 256); ) u += this[e + --r] * o;
    return (u >= (o *= 128) && (u -= Math.pow(2, 8 * t)), u);
  }, Pn.prototype.readInt8 = function (e, t) {
    return (t || rr(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]);
  }, Pn.prototype.readInt16LE = function (e, t) {
    t || rr(e, 2, this.length);
    var n = this[e] | this[e + 1] << 8;
    return 32768 & n ? 4294901760 | n : n;
  }, Pn.prototype.readInt16BE = function (e, t) {
    t || rr(e, 2, this.length);
    var n = this[e + 1] | this[e] << 8;
    return 32768 & n ? 4294901760 | n : n;
  }, Pn.prototype.readInt32LE = function (e, t) {
    return (t || rr(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24);
  }, Pn.prototype.readInt32BE = function (e, t) {
    return (t || rr(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
  }, Pn.prototype.readFloatLE = function (e, t) {
    return (t || rr(e, 4, this.length), Sn(this, e, !0, 23, 4));
  }, Pn.prototype.readFloatBE = function (e, t) {
    return (t || rr(e, 4, this.length), Sn(this, e, !1, 23, 4));
  }, Pn.prototype.readDoubleLE = function (e, t) {
    return (t || rr(e, 8, this.length), Sn(this, e, !0, 52, 8));
  }, Pn.prototype.readDoubleBE = function (e, t) {
    return (t || rr(e, 8, this.length), Sn(this, e, !1, 52, 8));
  }, Pn.prototype.writeUIntLE = function (e, t, n, r) {
    (e = +e, t |= 0, n |= 0, r) || or(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
    var o = 1, u = 0;
    for (this[t] = 255 & e; ++u < n && (o *= 256); ) this[t + u] = e / o & 255;
    return t + n;
  }, Pn.prototype.writeUIntBE = function (e, t, n, r) {
    (e = +e, t |= 0, n |= 0, r) || or(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
    var o = n - 1, u = 1;
    for (this[t + o] = 255 & e; --o >= 0 && (u *= 256); ) this[t + o] = e / u & 255;
    return t + n;
  }, Pn.prototype.writeUInt8 = function (e, t, n) {
    return (e = +e, t |= 0, n || or(this, e, t, 1, 255, 0), Pn.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1);
  }, Pn.prototype.writeUInt16LE = function (e, t, n) {
    return (e = +e, t |= 0, n || or(this, e, t, 2, 65535, 0), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : ur(this, e, t, !0), t + 2);
  }, Pn.prototype.writeUInt16BE = function (e, t, n) {
    return (e = +e, t |= 0, n || or(this, e, t, 2, 65535, 0), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : ur(this, e, t, !1), t + 2);
  }, Pn.prototype.writeUInt32LE = function (e, t, n) {
    return (e = +e, t |= 0, n || or(this, e, t, 4, 4294967295, 0), Pn.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : ir(this, e, t, !0), t + 4);
  }, Pn.prototype.writeUInt32BE = function (e, t, n) {
    return (e = +e, t |= 0, n || or(this, e, t, 4, 4294967295, 0), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : ir(this, e, t, !1), t + 4);
  }, Pn.prototype.writeIntLE = function (e, t, n, r) {
    if ((e = +e, t |= 0, !r)) {
      var o = Math.pow(2, 8 * n - 1);
      or(this, e, t, n, o - 1, -o);
    }
    var u = 0, i = 1, a = 0;
    for (this[t] = 255 & e; ++u < n && (i *= 256); ) (e < 0 && 0 === a && 0 !== this[t + u - 1] && (a = 1), this[t + u] = (e / i >> 0) - a & 255);
    return t + n;
  }, Pn.prototype.writeIntBE = function (e, t, n, r) {
    if ((e = +e, t |= 0, !r)) {
      var o = Math.pow(2, 8 * n - 1);
      or(this, e, t, n, o - 1, -o);
    }
    var u = n - 1, i = 1, a = 0;
    for (this[t + u] = 255 & e; --u >= 0 && (i *= 256); ) (e < 0 && 0 === a && 0 !== this[t + u + 1] && (a = 1), this[t + u] = (e / i >> 0) - a & 255);
    return t + n;
  }, Pn.prototype.writeInt8 = function (e, t, n) {
    return (e = +e, t |= 0, n || or(this, e, t, 1, 127, -128), Pn.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1);
  }, Pn.prototype.writeInt16LE = function (e, t, n) {
    return (e = +e, t |= 0, n || or(this, e, t, 2, 32767, -32768), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : ur(this, e, t, !0), t + 2);
  }, Pn.prototype.writeInt16BE = function (e, t, n) {
    return (e = +e, t |= 0, n || or(this, e, t, 2, 32767, -32768), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : ur(this, e, t, !1), t + 2);
  }, Pn.prototype.writeInt32LE = function (e, t, n) {
    return (e = +e, t |= 0, n || or(this, e, t, 4, 2147483647, -2147483648), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : ir(this, e, t, !0), t + 4);
  }, Pn.prototype.writeInt32BE = function (e, t, n) {
    return (e = +e, t |= 0, n || or(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : ir(this, e, t, !1), t + 4);
  }, Pn.prototype.writeFloatLE = function (e, t, n) {
    return sr(this, e, t, !0, n);
  }, Pn.prototype.writeFloatBE = function (e, t, n) {
    return sr(this, e, t, !1, n);
  }, Pn.prototype.writeDoubleLE = function (e, t, n) {
    return cr(this, e, t, !0, n);
  }, Pn.prototype.writeDoubleBE = function (e, t, n) {
    return cr(this, e, t, !1, n);
  }, Pn.prototype.copy = function (e, t, n, r) {
    if ((n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n)) return 0;
    if (0 === e.length || 0 === this.length) return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
    if (r < 0) throw new RangeError("sourceEnd out of bounds");
    (r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n));
    var o, u = r - n;
    if (this === e && n < t && t < r) for (o = u - 1; o >= 0; --o) e[o + t] = this[o + n]; else if (u < 1e3 || !Pn.TYPED_ARRAY_SUPPORT) for (o = 0; o < u; ++o) e[o + t] = this[o + n]; else Uint8Array.prototype.set.call(e, this.subarray(n, n + u), t);
    return u;
  }, Pn.prototype.fill = function (e, t, n, r) {
    if ("string" == typeof e) {
      if (("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length)) {
        var o = e.charCodeAt(0);
        o < 256 && (e = o);
      }
      if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
      if ("string" == typeof r && !Pn.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
    } else "number" == typeof e && (e &= 255);
    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
    if (n <= t) return this;
    var u;
    if ((t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)) for (u = t; u < n; ++u) this[u] = e; else {
      var i = _n(e) ? e : dr(new Pn(e, r).toString()), a = i.length;
      for (u = 0; u < n - t; ++u) this[u + t] = i[u % a];
    }
    return this;
  });
  var lr = /[^+\/0-9A-Za-z-_]/g;
  function pr(e) {
    return e < 16 ? "0" + e.toString(16) : e.toString(16);
  }
  function dr(e, t) {
    var n;
    t = t || 1 / 0;
    for (var r = e.length, o = null, u = [], i = 0; i < r; ++i) {
      if ((n = e.charCodeAt(i)) > 55295 && n < 57344) {
        if (!o) {
          if (n > 56319) {
            (t -= 3) > -1 && u.push(239, 191, 189);
            continue;
          }
          if (i + 1 === r) {
            (t -= 3) > -1 && u.push(239, 191, 189);
            continue;
          }
          o = n;
          continue;
        }
        if (n < 56320) {
          ((t -= 3) > -1 && u.push(239, 191, 189), o = n);
          continue;
        }
        n = 65536 + (o - 55296 << 10 | n - 56320);
      } else o && (t -= 3) > -1 && u.push(239, 191, 189);
      if ((o = null, n < 128)) {
        if ((t -= 1) < 0) break;
        u.push(n);
      } else if (n < 2048) {
        if ((t -= 2) < 0) break;
        u.push(n >> 6 | 192, 63 & n | 128);
      } else if (n < 65536) {
        if ((t -= 3) < 0) break;
        u.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
      } else {
        if (!(n < 1114112)) throw new Error("Invalid code point");
        if ((t -= 4) < 0) break;
        u.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
      }
    }
    return u;
  }
  function fr(e) {
    return (function (e) {
      var t, n, r, o, u, i;
      vn || An();
      var a = e.length;
      if (a % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      (u = "=" === e[a - 2] ? 2 : "=" === e[a - 1] ? 1 : 0, i = new bn(3 * a / 4 - u), r = u > 0 ? a - 4 : a);
      var s = 0;
      for ((t = 0, n = 0); t < r; (t += 4, n += 3)) (o = Cn[e.charCodeAt(t)] << 18 | Cn[e.charCodeAt(t + 1)] << 12 | Cn[e.charCodeAt(t + 2)] << 6 | Cn[e.charCodeAt(t + 3)], i[s++] = o >> 16 & 255, i[s++] = o >> 8 & 255, i[s++] = 255 & o);
      return (2 === u ? (o = Cn[e.charCodeAt(t)] << 2 | Cn[e.charCodeAt(t + 1)] >> 4, i[s++] = 255 & o) : 1 === u && (o = Cn[e.charCodeAt(t)] << 10 | Cn[e.charCodeAt(t + 1)] << 4 | Cn[e.charCodeAt(t + 2)] >> 2, i[s++] = o >> 8 & 255, i[s++] = 255 & o), i);
    })((function (e) {
      if ((e = (function (e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
      })(e).replace(lr, "")).length < 2) return "";
      for (; e.length % 4 != 0; ) e += "=";
      return e;
    })(e));
  }
  function hr(e, t, n, r) {
    for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
    return o;
  }
  function mr(e) {
    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
  }
  var gr = _e(fn);
  var Dr = class {
    constructor(e, t) {
      ((t = t || ({})).readChunk || (t.readChunk = 1024), t.newLineCharacter ? t.newLineCharacter = t.newLineCharacter.charCodeAt(0) : t.newLineCharacter = 10, this.fd = "number" == typeof e ? e : gr.openSync(e, "r"), this.options = t, this.newLineCharacter = t.newLineCharacter, this.reset());
    }
    _searchInBuffer(e, t) {
      let n = -1;
      for (let r = 0; r <= e.length; r++) {
        if (e[r] === t) {
          n = r;
          break;
        }
      }
      return n;
    }
    reset() {
      (this.eofReached = !1, this.linesCache = [], this.fdPosition = 0);
    }
    close() {
      (gr.closeSync(this.fd), this.fd = null);
    }
    _extractLines(e) {
      let t;
      const n = [];
      let r = 0, o = 0;
      for (; ; ) {
        let u = e[r++];
        if (u === this.newLineCharacter) (t = e.slice(o, r), n.push(t), o = r); else if (void 0 === u) break;
      }
      let u = e.slice(o, r);
      return (u.length && n.push(u), n);
    }
    _readChunk(e) {
      let t, n = 0;
      const r = [];
      do {
        const e = new Pn(this.options.readChunk);
        (t = gr.readSync(this.fd, e, 0, this.options.readChunk, this.fdPosition), n += t, this.fdPosition = this.fdPosition + t, r.push(e));
      } while (t && -1 === this._searchInBuffer(r[r.length - 1], this.options.newLineCharacter));
      let o = Pn.concat(r);
      return (t < this.options.readChunk && (this.eofReached = !0, o = o.slice(0, n)), n && (this.linesCache = this._extractLines(o), e && (this.linesCache[0] = Pn.concat([e, this.linesCache[0]]))), n);
    }
    next() {
      if (!this.fd) return !1;
      let e, t = !1;
      if (this.eofReached && 0 === this.linesCache.length) return t;
      if ((this.linesCache.length || (e = this._readChunk()), this.linesCache.length)) {
        t = this.linesCache.shift();
        t[t.length - 1] !== this.newLineCharacter && (e = this._readChunk(t), e && (t = this.linesCache.shift()));
      }
      return (this.eofReached && 0 === this.linesCache.length && this.close(), t && t[t.length - 1] === this.newLineCharacter && (t = t.slice(0, t.length - 1)), t);
    }
  };
  var yr = function (e) {
    for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n; ) {
      var o = e[t];
      r[o[0]] = o[1];
    }
    return r;
  };
  class Er extends Error {}
  class Cr extends Error {}
  class br extends Error {}
  var vr = {
    ConfigError: Er,
    DebugError: Cr,
    UndefinedParserError: br
  }, Ar = function (e, t) {
    return (Ar = Object.setPrototypeOf || ({
      __proto__: []
    }) instanceof Array && (function (e, t) {
      e.__proto__ = t;
    }) || (function (e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    }))(e, t);
  };
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ******************************************************************************/
  var Fr = function () {
    return (Fr = Object.assign || (function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      return e;
    })).apply(this, arguments);
  };
  function xr(e) {
    var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], r = 0;
    if (n) return n.call(e);
    if (e && "number" == typeof e.length) return {
      next: function () {
        return (e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        });
      }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function Sr(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r, o, u = n.call(e), i = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(r = u.next()).done; ) i.push(r.value);
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (n = u.return) && n.call(u);
      } finally {
        if (o) throw o.error;
      }
    }
    return i;
  }
  function wr(e) {
    return this instanceof wr ? (this.v = e, this) : new wr(e);
  }
  var Tr = Object.freeze({
    __proto__: null,
    __extends: function (e, t) {
      function n() {
        this.constructor = e;
      }
      (Ar(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n()));
    },
    get __assign() {
      return Fr;
    },
    __rest: function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      }
      return n;
    },
    __decorate: function (e, t, n, r) {
      var o, u = arguments.length, i = u < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, r); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (u < 3 ? o(i) : u > 3 ? o(t, n, i) : o(t, n)) || i);
      return (u > 3 && i && Object.defineProperty(t, n, i), i);
    },
    __param: function (e, t) {
      return function (n, r) {
        t(n, r, e);
      };
    },
    __metadata: function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
    __awaiter: function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, u) {
        function i(e) {
          try {
            s(r.next(e));
          } catch (e) {
            u(e);
          }
        }
        function a(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            u(e);
          }
        }
        function s(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(i, a);
        }
        s((r = r.apply(e, t || [])).next());
      });
    },
    __generator: function (e, t) {
      var n, r, o, u, i = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
      return (u = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (u[Symbol.iterator] = function () {
        return this;
      }), u);
      function a(u) {
        return function (a) {
          return (function (u) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; i; ) try {
              if ((n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done)) return o;
              switch ((r = 0, o && (u = [2 & u[0], o.value]), u[0])) {
                case 0:
                case 1:
                  o = u;
                  break;
                case 4:
                  return (i.label++, {
                    value: u[1],
                    done: !1
                  });
                case 5:
                  (i.label++, r = u[1], u = [0]);
                  continue;
                case 7:
                  (u = i.ops.pop(), i.trys.pop());
                  continue;
                default:
                  if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                    i = 0;
                    continue;
                  }
                  if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                    i.label = u[1];
                    break;
                  }
                  if (6 === u[0] && i.label < o[1]) {
                    (i.label = o[1], o = u);
                    break;
                  }
                  if (o && i.label < o[2]) {
                    (i.label = o[2], i.ops.push(u));
                    break;
                  }
                  (o[2] && i.ops.pop(), i.trys.pop());
                  continue;
              }
              u = t.call(e, i);
            } catch (e) {
              (u = [6, e], r = 0);
            } finally {
              n = o = 0;
            }
            if (5 & u[0]) throw u[1];
            return {
              value: u[0] ? u[1] : void 0,
              done: !0
            };
          })([u, a]);
        };
      }
    },
    __createBinding: function (e, t, n, r) {
      (void 0 === r && (r = n), e[r] = t[n]);
    },
    __exportStar: function (e, t) {
      for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n]);
    },
    __values: xr,
    __read: Sr,
    __spread: function () {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Sr(arguments[t]));
      return e;
    },
    __spreadArrays: function () {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
      var r = Array(e), o = 0;
      for (t = 0; t < n; t++) for (var u = arguments[t], i = 0, a = u.length; i < a; (i++, o++)) r[o] = u[i];
      return r;
    },
    __await: wr,
    __asyncGenerator: function (e, t, n) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var r, o = n.apply(e, t || []), u = [];
      return (r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function () {
        return this;
      }, r);
      function i(e) {
        o[e] && (r[e] = function (t) {
          return new Promise(function (n, r) {
            u.push([e, t, n, r]) > 1 || a(e, t);
          });
        });
      }
      function a(e, t) {
        try {
          (n = o[e](t)).value instanceof wr ? Promise.resolve(n.value.v).then(s, c) : l(u[0][2], n);
        } catch (e) {
          l(u[0][3], e);
        }
        var n;
      }
      function s(e) {
        a("next", e);
      }
      function c(e) {
        a("throw", e);
      }
      function l(e, t) {
        (e(t), u.shift(), u.length && a(u[0][0], u[0][1]));
      }
    },
    __asyncDelegator: function (e) {
      var t, n;
      return (t = {}, r("next"), r("throw", function (e) {
        throw e;
      }), r("return"), t[Symbol.iterator] = function () {
        return this;
      }, t);
      function r(r, o) {
        t[r] = e[r] ? function (t) {
          return (n = !n) ? {
            value: wr(e[r](t)),
            done: "return" === r
          } : o ? o(t) : t;
        } : o;
      }
    },
    __asyncValues: function (e) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t, n = e[Symbol.asyncIterator];
      return n ? n.call(e) : (e = xr(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function () {
        return this;
      }, t);
      function r(n) {
        t[n] = e[n] && (function (t) {
          return new Promise(function (r, o) {
            (function (e, t, n, r) {
              Promise.resolve(r).then(function (t) {
                e({
                  value: t,
                  done: n
                });
              }, t);
            })(r, o, (t = e[n](t)).done, t.value);
          });
        });
      }
    },
    __makeTemplateObject: function (e, t) {
      return (Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
      }) : e.raw = t, e);
    },
    __importStar: function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e, t);
    },
    __importDefault: function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    },
    __classPrivateFieldGet: function (e, t) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return t.get(e);
    },
    __classPrivateFieldSet: function (e, t, n) {
      if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
      return (t.set(e, n), n);
    }
  }), Br = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.apiDescriptor = {
      key: e => (/^[$_a-zA-Z][$_a-zA-Z0-9]*$/).test(e) ? e : JSON.stringify(e),
      value(e) {
        if (null === e || "object" != typeof e) return JSON.stringify(e);
        if (Array.isArray(e)) return ("[").concat(e.map(e => t.apiDescriptor.value(e)).join(", "), "]");
        const n = Object.keys(e);
        return 0 === n.length ? "{}" : ("{ ").concat(n.map(n => ("").concat(t.apiDescriptor.key(n), ": ").concat(t.apiDescriptor.value(e[n]))).join(", "), " }");
      },
      pair: ({key: e, value: n}) => t.apiDescriptor.value({
        [e]: n
      })
    });
  }), Nr = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), Tr.__exportStar(Br, t));
  }), kr = /[|\\{}()[\]^$+*?.]/g, Pr = function (e) {
    if ("string" != typeof e) throw new TypeError("Expected a string");
    return e.replace(kr, "\\$&");
  }, Or = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  }, Ir = je(function (e) {
    var t = {};
    for (var n in Or) Or.hasOwnProperty(n) && (t[Or[n]] = n);
    var r = e.exports = {
      rgb: {
        channels: 3,
        labels: "rgb"
      },
      hsl: {
        channels: 3,
        labels: "hsl"
      },
      hsv: {
        channels: 3,
        labels: "hsv"
      },
      hwb: {
        channels: 3,
        labels: "hwb"
      },
      cmyk: {
        channels: 4,
        labels: "cmyk"
      },
      xyz: {
        channels: 3,
        labels: "xyz"
      },
      lab: {
        channels: 3,
        labels: "lab"
      },
      lch: {
        channels: 3,
        labels: "lch"
      },
      hex: {
        channels: 1,
        labels: ["hex"]
      },
      keyword: {
        channels: 1,
        labels: ["keyword"]
      },
      ansi16: {
        channels: 1,
        labels: ["ansi16"]
      },
      ansi256: {
        channels: 1,
        labels: ["ansi256"]
      },
      hcg: {
        channels: 3,
        labels: ["h", "c", "g"]
      },
      apple: {
        channels: 3,
        labels: ["r16", "g16", "b16"]
      },
      gray: {
        channels: 1,
        labels: ["gray"]
      }
    };
    for (var o in r) if (r.hasOwnProperty(o)) {
      if (!(("channels" in r[o]))) throw new Error("missing channels property: " + o);
      if (!(("labels" in r[o]))) throw new Error("missing channel labels property: " + o);
      if (r[o].labels.length !== r[o].channels) throw new Error("channel and label counts mismatch: " + o);
      var u = r[o].channels, i = r[o].labels;
      (delete r[o].channels, delete r[o].labels, Object.defineProperty(r[o], "channels", {
        value: u
      }), Object.defineProperty(r[o], "labels", {
        value: i
      }));
    }
    (r.rgb.hsl = function (e) {
      var t, n, r = e[0] / 255, o = e[1] / 255, u = e[2] / 255, i = Math.min(r, o, u), a = Math.max(r, o, u), s = a - i;
      return (a === i ? t = 0 : r === a ? t = (o - u) / s : o === a ? t = 2 + (u - r) / s : u === a && (t = 4 + (r - o) / s), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (i + a) / 2, [t, 100 * (a === i ? 0 : n <= .5 ? s / (a + i) : s / (2 - a - i)), 100 * n]);
    }, r.rgb.hsv = function (e) {
      var t, n, r, o, u, i = e[0] / 255, a = e[1] / 255, s = e[2] / 255, c = Math.max(i, a, s), l = c - Math.min(i, a, s), p = function (e) {
        return (c - e) / 6 / l + .5;
      };
      return (0 === l ? o = u = 0 : (u = l / c, t = p(i), n = p(a), r = p(s), i === c ? o = r - n : a === c ? o = 1 / 3 + t - r : s === c && (o = 2 / 3 + n - t), o < 0 ? o += 1 : o > 1 && (o -= 1)), [360 * o, 100 * u, 100 * c]);
    }, r.rgb.hwb = function (e) {
      var t = e[0], n = e[1], o = e[2];
      return [r.rgb.hsl(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, o))), 100 * (o = 1 - 1 / 255 * Math.max(t, Math.max(n, o)))];
    }, r.rgb.cmyk = function (e) {
      var t, n = e[0] / 255, r = e[1] / 255, o = e[2] / 255;
      return [100 * ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - o))) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - o - t) / (1 - t) || 0), 100 * t];
    }, r.rgb.keyword = function (e) {
      var n = t[e];
      if (n) return n;
      var r, o, u, i = 1 / 0;
      for (var a in Or) if (Or.hasOwnProperty(a)) {
        var s = Or[a], c = (o = e, u = s, Math.pow(o[0] - u[0], 2) + Math.pow(o[1] - u[1], 2) + Math.pow(o[2] - u[2], 2));
        c < i && (i = c, r = a);
      }
      return r;
    }, r.keyword.rgb = function (e) {
      return Or[e];
    }, r.rgb.xyz = function (e) {
      var t = e[0] / 255, n = e[1] / 255, r = e[2] / 255;
      return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)];
    }, r.rgb.lab = function (e) {
      var t = r.rgb.xyz(e), n = t[0], o = t[1], u = t[2];
      return (o /= 100, u /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116) - 16, 500 * (n - o), 200 * (o - (u = u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116))]);
    }, r.hsl.rgb = function (e) {
      var t, n, r, o, u, i = e[0] / 360, a = e[1] / 100, s = e[2] / 100;
      if (0 === a) return [u = 255 * s, u, u];
      (t = 2 * s - (n = s < .5 ? s * (1 + a) : s + a - s * a), o = [0, 0, 0]);
      for (var c = 0; c < 3; c++) ((r = i + 1 / 3 * -(c - 1)) < 0 && r++, r > 1 && r--, u = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, o[c] = 255 * u);
      return o;
    }, r.hsl.hsv = function (e) {
      var t = e[0], n = e[1] / 100, r = e[2] / 100, o = n, u = Math.max(r, .01);
      return (n *= (r *= 2) <= 1 ? r : 2 - r, o *= u <= 1 ? u : 2 - u, [t, 100 * (0 === r ? 2 * o / (u + o) : 2 * n / (r + n)), 100 * ((r + n) / 2)]);
    }, r.hsv.rgb = function (e) {
      var t = e[0] / 60, n = e[1] / 100, r = e[2] / 100, o = Math.floor(t) % 6, u = t - Math.floor(t), i = 255 * r * (1 - n), a = 255 * r * (1 - n * u), s = 255 * r * (1 - n * (1 - u));
      switch ((r *= 255, o)) {
        case 0:
          return [r, s, i];
        case 1:
          return [a, r, i];
        case 2:
          return [i, r, s];
        case 3:
          return [i, a, r];
        case 4:
          return [s, i, r];
        case 5:
          return [r, i, a];
      }
    }, r.hsv.hsl = function (e) {
      var t, n, r, o = e[0], u = e[1] / 100, i = e[2] / 100, a = Math.max(i, .01);
      return (r = (2 - u) * i, n = u * a, [o, 100 * (n = (n /= (t = (2 - u) * a) <= 1 ? t : 2 - t) || 0), 100 * (r /= 2)]);
    }, r.hwb.rgb = function (e) {
      var t, n, r, o, u, i, a, s = e[0] / 360, c = e[1] / 100, l = e[2] / 100, p = c + l;
      switch ((p > 1 && (c /= p, l /= p), r = 6 * s - (t = Math.floor(6 * s)), 0 != (1 & t) && (r = 1 - r), o = c + r * ((n = 1 - l) - c), t)) {
        default:
        case 6:
        case 0:
          (u = n, i = o, a = c);
          break;
        case 1:
          (u = o, i = n, a = c);
          break;
        case 2:
          (u = c, i = n, a = o);
          break;
        case 3:
          (u = c, i = o, a = n);
          break;
        case 4:
          (u = o, i = c, a = n);
          break;
        case 5:
          (u = n, i = c, a = o);
      }
      return [255 * u, 255 * i, 255 * a];
    }, r.cmyk.rgb = function (e) {
      var t = e[0] / 100, n = e[1] / 100, r = e[2] / 100, o = e[3] / 100;
      return [255 * (1 - Math.min(1, t * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o)), 255 * (1 - Math.min(1, r * (1 - o) + o))];
    }, r.xyz.rgb = function (e) {
      var t, n, r, o = e[0] / 100, u = e[1] / 100, i = e[2] / 100;
      return (n = -.9689 * o + 1.8758 * u + .0415 * i, r = .0557 * o + -.204 * u + 1.057 * i, t = (t = 3.2406 * o + -1.5372 * u + -.4986 * i) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))]);
    }, r.xyz.lab = function (e) {
      var t = e[0], n = e[1], r = e[2];
      return (n /= 100, r /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]);
    }, r.lab.xyz = function (e) {
      var t, n, r, o = e[0];
      (t = e[1] / 500 + (n = (o + 16) / 116), r = n - e[2] / 200);
      var u = Math.pow(n, 3), i = Math.pow(t, 3), a = Math.pow(r, 3);
      return (n = u > .008856 ? u : (n - 16 / 116) / 7.787, t = i > .008856 ? i : (t - 16 / 116) / 7.787, r = a > .008856 ? a : (r - 16 / 116) / 7.787, [t *= 95.047, n *= 100, r *= 108.883]);
    }, r.lab.lch = function (e) {
      var t, n = e[0], r = e[1], o = e[2];
      return ((t = 360 * Math.atan2(o, r) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(r * r + o * o), t]);
    }, r.lch.lab = function (e) {
      var t, n = e[0], r = e[1];
      return (t = e[2] / 360 * 2 * Math.PI, [n, r * Math.cos(t), r * Math.sin(t)]);
    }, r.rgb.ansi16 = function (e) {
      var t = e[0], n = e[1], o = e[2], u = (1 in arguments) ? arguments[1] : r.rgb.hsv(e)[2];
      if (0 === (u = Math.round(u / 50))) return 30;
      var i = 30 + (Math.round(o / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));
      return (2 === u && (i += 60), i);
    }, r.hsv.ansi16 = function (e) {
      return r.rgb.ansi16(r.hsv.rgb(e), e[2]);
    }, r.rgb.ansi256 = function (e) {
      var t = e[0], n = e[1], r = e[2];
      return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
    }, r.ansi16.rgb = function (e) {
      var t = e % 10;
      if (0 === t || 7 === t) return (e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t]);
      var n = .5 * (1 + ~~(e > 50));
      return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255];
    }, r.ansi256.rgb = function (e) {
      if (e >= 232) {
        var t = 10 * (e - 232) + 8;
        return [t, t, t];
      }
      var n;
      return (e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255]);
    }, r.rgb.hex = function (e) {
      var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
      return ("000000").substring(t.length) + t;
    }, r.hex.rgb = function (e) {
      var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!t) return [0, 0, 0];
      var n = t[0];
      3 === t[0].length && (n = n.split("").map(function (e) {
        return e + e;
      }).join(""));
      var r = parseInt(n, 16);
      return [r >> 16 & 255, r >> 8 & 255, 255 & r];
    }, r.rgb.hcg = function (e) {
      var t, n = e[0] / 255, r = e[1] / 255, o = e[2] / 255, u = Math.max(Math.max(n, r), o), i = Math.min(Math.min(n, r), o), a = u - i;
      return (t = a <= 0 ? 0 : u === n ? (r - o) / a % 6 : u === r ? 2 + (o - n) / a : 4 + (n - r) / a + 4, t /= 6, [360 * (t %= 1), 100 * a, 100 * (a < 1 ? i / (1 - a) : 0)]);
    }, r.hsl.hcg = function (e) {
      var t = e[1] / 100, n = e[2] / 100, r = 1, o = 0;
      return ((r = n < .5 ? 2 * t * n : 2 * t * (1 - n)) < 1 && (o = (n - .5 * r) / (1 - r)), [e[0], 100 * r, 100 * o]);
    }, r.hsv.hcg = function (e) {
      var t = e[1] / 100, n = e[2] / 100, r = t * n, o = 0;
      return (r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o]);
    }, r.hcg.rgb = function (e) {
      var t = e[0] / 360, n = e[1] / 100, r = e[2] / 100;
      if (0 === n) return [255 * r, 255 * r, 255 * r];
      var o, u = [0, 0, 0], i = t % 1 * 6, a = i % 1, s = 1 - a;
      switch (Math.floor(i)) {
        case 0:
          (u[0] = 1, u[1] = a, u[2] = 0);
          break;
        case 1:
          (u[0] = s, u[1] = 1, u[2] = 0);
          break;
        case 2:
          (u[0] = 0, u[1] = 1, u[2] = a);
          break;
        case 3:
          (u[0] = 0, u[1] = s, u[2] = 1);
          break;
        case 4:
          (u[0] = a, u[1] = 0, u[2] = 1);
          break;
        default:
          (u[0] = 1, u[1] = 0, u[2] = s);
      }
      return (o = (1 - n) * r, [255 * (n * u[0] + o), 255 * (n * u[1] + o), 255 * (n * u[2] + o)]);
    }, r.hcg.hsv = function (e) {
      var t = e[1] / 100, n = t + e[2] / 100 * (1 - t), r = 0;
      return (n > 0 && (r = t / n), [e[0], 100 * r, 100 * n]);
    }, r.hcg.hsl = function (e) {
      var t = e[1] / 100, n = e[2] / 100 * (1 - t) + .5 * t, r = 0;
      return (n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n]);
    }, r.hcg.hwb = function (e) {
      var t = e[1] / 100, n = t + e[2] / 100 * (1 - t);
      return [e[0], 100 * (n - t), 100 * (1 - n)];
    }, r.hwb.hcg = function (e) {
      var t = e[1] / 100, n = 1 - e[2] / 100, r = n - t, o = 0;
      return (r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o]);
    }, r.apple.rgb = function (e) {
      return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
    }, r.rgb.apple = function (e) {
      return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
    }, r.gray.rgb = function (e) {
      return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
    }, r.gray.hsl = r.gray.hsv = function (e) {
      return [0, 0, e[0]];
    }, r.gray.hwb = function (e) {
      return [0, 100, e[0]];
    }, r.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]];
    }, r.gray.lab = function (e) {
      return [e[0], 0, 0];
    }, r.gray.hex = function (e) {
      var t = 255 & Math.round(e[0] / 100 * 255), n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
      return ("000000").substring(n.length) + n;
    }, r.rgb.gray = function (e) {
      return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
    });
  });
  function Lr(e) {
    var t = (function () {
      for (var e = {}, t = Object.keys(Ir), n = t.length, r = 0; r < n; r++) e[t[r]] = {
        distance: -1,
        parent: null
      };
      return e;
    })(), n = [e];
    for (t[e].distance = 0; n.length; ) for (var r = n.pop(), o = Object.keys(Ir[r]), u = o.length, i = 0; i < u; i++) {
      var a = o[i], s = t[a];
      -1 === s.distance && (s.distance = t[r].distance + 1, s.parent = r, n.unshift(a));
    }
    return t;
  }
  function Mr(e, t) {
    return function (n) {
      return t(e(n));
    };
  }
  function jr(e, t) {
    for (var n = [t[e].parent, e], r = Ir[t[e].parent][e], o = t[e].parent; t[o].parent; ) (n.unshift(t[o].parent), r = Mr(Ir[t[o].parent][o], r), o = t[o].parent);
    return (r.conversion = n, r);
  }
  var _r = {};
  Object.keys(Ir).forEach(function (e) {
    (_r[e] = {}, Object.defineProperty(_r[e], "channels", {
      value: Ir[e].channels
    }), Object.defineProperty(_r[e], "labels", {
      value: Ir[e].labels
    }));
    var t = (function (e) {
      for (var t = Lr(e), n = {}, r = Object.keys(t), o = r.length, u = 0; u < o; u++) {
        var i = r[u];
        null !== t[i].parent && (n[i] = jr(i, t));
      }
      return n;
    })(e);
    Object.keys(t).forEach(function (n) {
      var r = t[n];
      (_r[e][n] = (function (e) {
        var t = function (t) {
          if (null == t) return t;
          arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
          var n = e(t);
          if ("object" == typeof n) for (var r = n.length, o = 0; o < r; o++) n[o] = Math.round(n[o]);
          return n;
        };
        return (("conversion" in e) && (t.conversion = e.conversion), t);
      })(r), _r[e][n].raw = (function (e) {
        var t = function (t) {
          return null == t ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)), e(t));
        };
        return (("conversion" in e) && (t.conversion = e.conversion), t);
      })(r));
    });
  });
  var Rr = _r, Vr = je(function (e) {
    const t = (e, t) => function () {
      const n = e.apply(Rr, arguments);
      return ("\x1b[").concat(n + t, "m");
    }, n = (e, t) => function () {
      const n = e.apply(Rr, arguments);
      return ("\x1b[").concat(38 + t, ";5;").concat(n, "m");
    }, r = (e, t) => function () {
      const n = e.apply(Rr, arguments);
      return ("\x1b[").concat(38 + t, ";2;").concat(n[0], ";").concat(n[1], ";").concat(n[2], "m");
    };
    Object.defineProperty(e, "exports", {
      enumerable: !0,
      get: function () {
        const e = new Map(), o = {
          modifier: {
            reset: [0, 0],
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
          },
          color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            gray: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
          },
          bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            bgBlackBright: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
          }
        };
        o.color.grey = o.color.gray;
        for (const t of Object.keys(o)) {
          const n = o[t];
          for (const t of Object.keys(n)) {
            const r = n[t];
            (o[t] = {
              open: ("\x1b[").concat(r[0], "m"),
              close: ("\x1b[").concat(r[1], "m")
            }, n[t] = o[t], e.set(r[0], r[1]));
          }
          (Object.defineProperty(o, t, {
            value: n,
            enumerable: !1
          }), Object.defineProperty(o, "codes", {
            value: e,
            enumerable: !1
          }));
        }
        const u = e => e, i = (e, t, n) => [e, t, n];
        (o.color.close = "\x1b[39m", o.bgColor.close = "\x1b[49m", o.color.ansi = {
          ansi: t(u, 0)
        }, o.color.ansi256 = {
          ansi256: n(u, 0)
        }, o.color.ansi16m = {
          rgb: r(i, 0)
        }, o.bgColor.ansi = {
          ansi: t(u, 10)
        }, o.bgColor.ansi256 = {
          ansi256: n(u, 10)
        }, o.bgColor.ansi16m = {
          rgb: r(i, 10)
        });
        for (let e of Object.keys(Rr)) {
          if ("object" != typeof Rr[e]) continue;
          const u = Rr[e];
          ("ansi16" === e && (e = "ansi"), ("ansi16" in u) && (o.color.ansi[e] = t(u.ansi16, 0), o.bgColor.ansi[e] = t(u.ansi16, 10)), ("ansi256" in u) && (o.color.ansi256[e] = n(u.ansi256, 0), o.bgColor.ansi256[e] = n(u.ansi256, 10)), ("rgb" in u) && (o.color.ansi16m[e] = r(u.rgb, 0), o.bgColor.ansi16m[e] = r(u.rgb, 10)));
        }
        return o;
      }
    });
  }), $r = (e, t) => {
    t = t || Oe.argv;
    const n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--", r = t.indexOf(n + e), o = t.indexOf("--");
    return -1 !== r && (-1 === o || r < o);
  }, qr = _e(Object.freeze({
    __proto__: null,
    default: {
      EOL: "\n",
      platform: () => "browser",
      cpus: () => [{
        model: "Prettier"
      }]
    }
  }));
  const Wr = Oe.env;
  let Ur;
  function Jr(e) {
    return (function (e) {
      return 0 !== e && ({
        level: e,
        hasBasic: !0,
        has256: e >= 2,
        has16m: e >= 3
      });
    })((function (e) {
      if (!1 === Ur) return 0;
      if ($r("color=16m") || $r("color=full") || $r("color=truecolor")) return 3;
      if ($r("color=256")) return 2;
      if (e && !e.isTTY && !0 !== Ur) return 0;
      const t = Ur ? 1 : 0;
      if ("win32" === Oe.platform) {
        const e = qr.release().split(".");
        return Number(Oe.versions.node.split(".")[0]) >= 8 && Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1;
      }
      if (("CI" in Wr)) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(e => (e in Wr)) || "codeship" === Wr.CI_NAME ? 1 : t;
      if (("TEAMCITY_VERSION" in Wr)) return (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/).test(Wr.TEAMCITY_VERSION) ? 1 : 0;
      if ("truecolor" === Wr.COLORTERM) return 3;
      if (("TERM_PROGRAM" in Wr)) {
        const e = parseInt((Wr.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (Wr.TERM_PROGRAM) {
          case "iTerm.app":
            return e >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      return (/-256(color)?$/i).test(Wr.TERM) ? 2 : (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i).test(Wr.TERM) || ("COLORTERM" in Wr) ? 1 : (Wr.TERM, t);
    })(e));
  }
  ($r("no-color") || $r("no-colors") || $r("color=false") ? Ur = !1 : ($r("color") || $r("colors") || $r("color=true") || $r("color=always")) && (Ur = !0), ("FORCE_COLOR" in Wr) && (Ur = 0 === Wr.FORCE_COLOR.length || 0 !== parseInt(Wr.FORCE_COLOR, 10)));
  var zr = {
    supportsColor: Jr,
    stdout: Jr(Oe.stdout),
    stderr: Jr(Oe.stderr)
  };
  const Hr = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, Gr = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, Xr = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, Yr = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi, Kr = new Map([["n", "\n"], ["r", "\r"], ["t", "\t"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1b"], ["a", "\x07"]]);
  function Qr(e) {
    return "u" === e[0] && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : Kr.get(e) || e;
  }
  function Zr(e, t) {
    const n = [], r = t.trim().split(/\s*,\s*/g);
    let o;
    for (const t of r) if (isNaN(t)) {
      if (!(o = t.match(Xr))) throw new Error(("Invalid Chalk template style argument: ").concat(t, " (in style '").concat(e, "')"));
      n.push(o[2].replace(Yr, (e, t, n) => t ? Qr(t) : n));
    } else n.push(Number(t));
    return n;
  }
  function eo(e) {
    Gr.lastIndex = 0;
    const t = [];
    let n;
    for (; null !== (n = Gr.exec(e)); ) {
      const e = n[1];
      if (n[2]) {
        const r = Zr(e, n[2]);
        t.push([e].concat(r));
      } else t.push([e]);
    }
    return t;
  }
  function to(e, t) {
    const n = {};
    for (const e of t) for (const t of e.styles) n[t[0]] = e.inverse ? null : t.slice(1);
    let r = e;
    for (const e of Object.keys(n)) if (Array.isArray(n[e])) {
      if (!((e in r))) throw new Error(("Unknown Chalk style: ").concat(e));
      r = n[e].length > 0 ? r[e].apply(r, n[e]) : r[e];
    }
    return r;
  }
  var no = (e, t) => {
    const n = [], r = [];
    let o = [];
    if ((t.replace(Hr, (t, u, i, a, s, c) => {
      if (u) o.push(Qr(u)); else if (a) {
        const t = o.join("");
        (o = [], r.push(0 === n.length ? t : to(e, n)(t)), n.push({
          inverse: i,
          styles: eo(a)
        }));
      } else if (s) {
        if (0 === n.length) throw new Error("Found extraneous } in Chalk template literal");
        (r.push(to(e, n)(o.join(""))), o = [], n.pop());
      } else o.push(c);
    }), r.push(o.join("")), n.length > 0)) {
      const e = ("Chalk template literal is missing ").concat(n.length, " closing bracket").concat(1 === n.length ? "" : "s", " (`}`)");
      throw new Error(e);
    }
    return r.join("");
  }, ro = je(function (e) {
    const t = zr.stdout, n = "win32" === Oe.platform && !(Oe.env.TERM || "").toLowerCase().startsWith("xterm"), r = ["ansi", "ansi", "ansi256", "ansi16m"], o = new Set(["gray"]), u = Object.create(null);
    function i(e, n) {
      n = n || ({});
      const r = t ? t.level : 0;
      (e.level = void 0 === n.level ? r : n.level, e.enabled = ("enabled" in n) ? n.enabled : e.level > 0);
    }
    function a(e) {
      if (!this || !(this instanceof a) || this.template) {
        const t = {};
        return (i(t, e), t.template = function () {
          const e = [].slice.call(arguments);
          return p.apply(null, [t.template].concat(e));
        }, Object.setPrototypeOf(t, a.prototype), Object.setPrototypeOf(t.template, t), t.template.constructor = a, t.template);
      }
      i(this, e);
    }
    n && (Vr.blue.open = "\x1b[94m");
    for (const e of Object.keys(Vr)) (Vr[e].closeRe = new RegExp(Pr(Vr[e].close), "g"), u[e] = {
      get() {
        const t = Vr[e];
        return c.call(this, this._styles ? this._styles.concat(t) : [t], this._empty, e);
      }
    });
    (u.visible = {
      get() {
        return c.call(this, this._styles || [], !0, "visible");
      }
    }, Vr.color.closeRe = new RegExp(Pr(Vr.color.close), "g"));
    for (const e of Object.keys(Vr.color.ansi)) o.has(e) || (u[e] = {
      get() {
        const t = this.level;
        return function () {
          const n = Vr.color[r[t]][e].apply(null, arguments), o = {
            open: n,
            close: Vr.color.close,
            closeRe: Vr.color.closeRe
          };
          return c.call(this, this._styles ? this._styles.concat(o) : [o], this._empty, e);
        };
      }
    });
    Vr.bgColor.closeRe = new RegExp(Pr(Vr.bgColor.close), "g");
    for (const e of Object.keys(Vr.bgColor.ansi)) {
      if (o.has(e)) continue;
      u["bg" + e[0].toUpperCase() + e.slice(1)] = {
        get() {
          const t = this.level;
          return function () {
            const n = Vr.bgColor[r[t]][e].apply(null, arguments), o = {
              open: n,
              close: Vr.bgColor.close,
              closeRe: Vr.bgColor.closeRe
            };
            return c.call(this, this._styles ? this._styles.concat(o) : [o], this._empty, e);
          };
        }
      };
    }
    const s = Object.defineProperties(() => {}, u);
    function c(e, t, n) {
      const r = function () {
        return l.apply(r, arguments);
      };
      (r._styles = e, r._empty = t);
      const o = this;
      return (Object.defineProperty(r, "level", {
        enumerable: !0,
        get: () => o.level,
        set(e) {
          o.level = e;
        }
      }), Object.defineProperty(r, "enabled", {
        enumerable: !0,
        get: () => o.enabled,
        set(e) {
          o.enabled = e;
        }
      }), r.hasGrey = this.hasGrey || "gray" === n || "grey" === n, r.__proto__ = s, r);
    }
    function l() {
      const e = arguments, t = e.length;
      let r = String(arguments[0]);
      if (0 === t) return "";
      if (t > 1) for (let n = 1; n < t; n++) r += " " + e[n];
      if (!this.enabled || this.level <= 0 || !r) return this._empty ? "" : r;
      const o = Vr.dim.open;
      n && this.hasGrey && (Vr.dim.open = "");
      for (const e of this._styles.slice().reverse()) (r = e.open + r.replace(e.closeRe, e.open) + e.close, r = r.replace(/\r?\n/g, ("").concat(e.close, "$&").concat(e.open)));
      return (Vr.dim.open = o, r);
    }
    function p(e, t) {
      if (!Array.isArray(t)) return [].slice.call(arguments, 1).join(" ");
      const n = [].slice.call(arguments, 2), r = [t.raw[0]];
      for (let e = 1; e < t.length; e++) (r.push(String(n[e - 1]).replace(/[{}\\]/g, "\\$&")), r.push(String(t.raw[e])));
      return no(e, r.join(""));
    }
    (Object.defineProperties(a.prototype, u), e.exports = a(), e.exports.supportsColor = t, e.exports.default = e.exports);
  }), oo = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.commonDeprecatedHandler = (e, t, {descriptor: n}) => {
      const r = [("").concat(ro.default.yellow("string" == typeof e ? n.key(e) : n.pair(e)), " is deprecated")];
      return (t && r.push(("we now treat it as ").concat(ro.default.blue("string" == typeof t ? n.key(t) : n.pair(t)))), r.join("; ") + ".");
    });
  }), uo = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), Tr.__exportStar(oo, t));
  }), io = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.commonInvalidHandler = (e, t, n) => [("Invalid ").concat(ro.default.red(n.descriptor.key(e)), " value."), ("Expected ").concat(ro.default.blue(n.schemas[e].expected(n)), ","), ("but received ").concat(ro.default.red(n.descriptor.value(t)), ".")].join(" "));
  }), ao = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), Tr.__exportStar(io, t));
  }), so = [], co = [], lo = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.levenUnknownHandler = (e, t, {descriptor: n, logger: r, schemas: o}) => {
      const u = [("Ignored unknown option ").concat(ro.default.yellow(n.pair({
        key: e,
        value: t
      })), ".")], i = Object.keys(o).sort().find(t => (function (e, t) {
        if (e === t) return 0;
        var n = e;
        e.length > t.length && (e = t, t = n);
        var r = e.length, o = t.length;
        if (0 === r) return o;
        if (0 === o) return r;
        for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-o); ) (r--, o--);
        if (0 === r) return o;
        for (var u, i, a, s, c = 0; c < r && e.charCodeAt(c) === t.charCodeAt(c); ) c++;
        if ((o -= c, 0 == (r -= c))) return o;
        for (var l = 0, p = 0; l < r; ) (co[c + l] = e.charCodeAt(c + l), so[l] = ++l);
        for (; p < o; ) for ((u = t.charCodeAt(c + p), a = p++, i = p, l = 0); l < r; l++) (s = u === co[c + l] ? a : a + 1, a = so[l], i = so[l] = a > i ? s > i ? i + 1 : s : s > a ? a + 1 : s);
        return i;
      })(e, t) < 3);
      (i && u.push(("Did you mean ").concat(ro.default.blue(n.key(i)), "?")), r.warn(u.join(" ")));
    });
  }), po = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), Tr.__exportStar(lo, t));
  }), fo = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), Tr.__exportStar(uo, t), Tr.__exportStar(ao, t), Tr.__exportStar(po, t));
  }), ho = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
    function r(e, t) {
      const r = new e(t), i = Object.create(r);
      for (const e of n) (e in t) && (i[e] = u(t[e], r, o.prototype[e].length));
      return i;
    }
    t.createSchema = r;
    class o {
      constructor(e) {
        this.name = e.name;
      }
      static create(e) {
        return r(this, e);
      }
      default(e) {}
      expected(e) {
        return "nothing";
      }
      validate(e, t) {
        return !1;
      }
      deprecated(e, t) {
        return !1;
      }
      forward(e, t) {}
      redirect(e, t) {}
      overlap(e, t, n) {
        return e;
      }
      preprocess(e, t) {
        return e;
      }
      postprocess(e, t) {
        return e;
      }
    }
    function u(e, t, n) {
      return "function" == typeof e ? (...r) => e(...r.slice(0, n - 1), t, ...r.slice(n - 1)) : () => e;
    }
    t.Schema = o;
  }), mo = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    class n extends ho.Schema {
      constructor(e) {
        (super(e), this._sourceName = e.sourceName);
      }
      expected(e) {
        return e.schemas[this._sourceName].expected(e);
      }
      validate(e, t) {
        return t.schemas[this._sourceName].validate(e, t);
      }
      redirect(e, t) {
        return this._sourceName;
      }
    }
    t.AliasSchema = n;
  }), go = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    class n extends ho.Schema {
      expected() {
        return "anything";
      }
      validate() {
        return !0;
      }
    }
    t.AnySchema = n;
  }), Do = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    class n extends ho.Schema {
      constructor(e) {
        var {valueSchema: t, name: n = t.name} = e, r = Tr.__rest(e, ["valueSchema", "name"]);
        (super(Object.assign({}, r, {
          name: n
        })), this._valueSchema = t);
      }
      expected(e) {
        return ("an array of ").concat(this._valueSchema.expected(e));
      }
      validate(e, t) {
        if (!Array.isArray(e)) return !1;
        const n = [];
        for (const r of e) {
          const e = t.normalizeValidateResult(this._valueSchema.validate(r, t), r);
          !0 !== e && n.push(e.value);
        }
        return 0 === n.length || ({
          value: n
        });
      }
      deprecated(e, t) {
        const n = [];
        for (const r of e) {
          const e = t.normalizeDeprecatedResult(this._valueSchema.deprecated(r, t), r);
          !1 !== e && n.push(...e.map(({value: e}) => ({
            value: [e]
          })));
        }
        return n;
      }
      forward(e, t) {
        const n = [];
        for (const o of e) {
          const e = t.normalizeForwardResult(this._valueSchema.forward(o, t), o);
          n.push(...e.map(r));
        }
        return n;
      }
      redirect(e, t) {
        const n = [], o = [];
        for (const u of e) {
          const e = t.normalizeRedirectResult(this._valueSchema.redirect(u, t), u);
          (("remain" in e) && n.push(e.remain), o.push(...e.redirect.map(r)));
        }
        return 0 === n.length ? {
          redirect: o
        } : {
          redirect: o,
          remain: n
        };
      }
      overlap(e, t) {
        return e.concat(t);
      }
    }
    function r({from: e, to: t}) {
      return {
        from: [e],
        to: t
      };
    }
    t.ArraySchema = n;
  }), yo = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    class n extends ho.Schema {
      expected() {
        return "true or false";
      }
      validate(e) {
        return "boolean" == typeof e;
      }
    }
    t.BooleanSchema = n;
  }), Eo = je(function (e, t) {
    function n(e, t) {
      return "string" == typeof e || ("key" in e) ? {
        from: t,
        to: e
      } : ("from" in e) ? {
        from: e.from,
        to: e.to
      } : {
        from: t,
        to: e.to
      };
    }
    function r(e, t) {
      return void 0 === e ? [] : Array.isArray(e) ? e.map(e => n(e, t)) : [n(e, t)];
    }
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.recordFromArray = function (e, t) {
      const n = Object.create(null);
      for (const r of e) {
        const e = r[t];
        if (n[e]) throw new Error(("Duplicate ").concat(t, " ").concat(JSON.stringify(e)));
        n[e] = r;
      }
      return n;
    }, t.mapFromArray = function (e, t) {
      const n = new Map();
      for (const r of e) {
        const e = r[t];
        if (n.has(e)) throw new Error(("Duplicate ").concat(t, " ").concat(JSON.stringify(e)));
        n.set(e, r);
      }
      return n;
    }, t.createAutoChecklist = function () {
      const e = Object.create(null);
      return t => {
        const n = JSON.stringify(t);
        return !!e[n] || (e[n] = !0, !1);
      };
    }, t.partition = function (e, t) {
      const n = [], r = [];
      for (const o of e) t(o) ? n.push(o) : r.push(o);
      return [n, r];
    }, t.isInt = function (e) {
      return e === Math.floor(e);
    }, t.comparePrimitive = function (e, t) {
      if (e === t) return 0;
      const n = typeof e, r = typeof t, o = ["undefined", "object", "boolean", "number", "string"];
      return n !== r ? o.indexOf(n) - o.indexOf(r) : "string" !== n ? Number(e) - Number(t) : e.localeCompare(t);
    }, t.normalizeDefaultResult = function (e) {
      return void 0 === e ? {} : e;
    }, t.normalizeValidateResult = function (e, t) {
      return !0 === e || (!1 === e ? {
        value: t
      } : e);
    }, t.normalizeDeprecatedResult = function (e, t, n = !1) {
      return !1 !== e && (!0 === e ? !!n || [{
        value: t
      }] : ("value" in e) ? [e] : 0 !== e.length && e);
    }, t.normalizeTransferResult = n, t.normalizeForwardResult = r, t.normalizeRedirectResult = function (e, t) {
      const n = r("object" == typeof e && ("redirect" in e) ? e.redirect : e, t);
      return 0 === n.length ? {
        remain: t,
        redirect: n
      } : "object" == typeof e && ("remain" in e) ? {
        remain: e.remain,
        redirect: n
      } : {
        redirect: n
      };
    });
  }), Co = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    class n extends ho.Schema {
      constructor(e) {
        (super(e), this._choices = Eo.mapFromArray(e.choices.map(e => e && "object" == typeof e ? e : {
          value: e
        }), "value"));
      }
      expected({descriptor: e}) {
        const t = Array.from(this._choices.keys()).map(e => this._choices.get(e)).filter(e => !e.deprecated).map(e => e.value).sort(Eo.comparePrimitive).map(e.value), n = t.slice(0, -2), r = t.slice(-2);
        return n.concat(r.join(" or ")).join(", ");
      }
      validate(e) {
        return this._choices.has(e);
      }
      deprecated(e) {
        const t = this._choices.get(e);
        return !(!t || !t.deprecated) && ({
          value: e
        });
      }
      forward(e) {
        const t = this._choices.get(e);
        return t ? t.forward : void 0;
      }
      redirect(e) {
        const t = this._choices.get(e);
        return t ? t.redirect : void 0;
      }
    }
    t.ChoiceSchema = n;
  }), bo = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    class n extends ho.Schema {
      expected() {
        return "a number";
      }
      validate(e, t) {
        return "number" == typeof e;
      }
    }
    t.NumberSchema = n;
  }), vo = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    class n extends bo.NumberSchema {
      expected() {
        return "an integer";
      }
      validate(e, t) {
        return !0 === t.normalizeValidateResult(super.validate(e, t), e) && Eo.isInt(e);
      }
    }
    t.IntegerSchema = n;
  }), Ao = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    class n extends ho.Schema {
      expected() {
        return "a string";
      }
      validate(e) {
        return "string" == typeof e;
      }
    }
    t.StringSchema = n;
  }), Fo = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), Tr.__exportStar(mo, t), Tr.__exportStar(go, t), Tr.__exportStar(Do, t), Tr.__exportStar(yo, t), Tr.__exportStar(Co, t), Tr.__exportStar(vo, t), Tr.__exportStar(bo, t), Tr.__exportStar(Ao, t));
  }), xo = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.defaultDescriptor = Br.apiDescriptor, t.defaultUnknownHandler = lo.levenUnknownHandler, t.defaultInvalidHandler = ao.commonInvalidHandler, t.defaultDeprecatedHandler = oo.commonDeprecatedHandler);
  }), So = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.normalize = (e, t, r) => new n(t, r).normalize(e));
    class n {
      constructor(e, t) {
        const {logger: n = console, descriptor: r = xo.defaultDescriptor, unknown: o = xo.defaultUnknownHandler, invalid: u = xo.defaultInvalidHandler, deprecated: i = xo.defaultDeprecatedHandler} = t || ({});
        (this._utils = {
          descriptor: r,
          logger: n || ({
            warn: () => {}
          }),
          schemas: Eo.recordFromArray(e, "name"),
          normalizeDefaultResult: Eo.normalizeDefaultResult,
          normalizeDeprecatedResult: Eo.normalizeDeprecatedResult,
          normalizeForwardResult: Eo.normalizeForwardResult,
          normalizeRedirectResult: Eo.normalizeRedirectResult,
          normalizeValidateResult: Eo.normalizeValidateResult
        }, this._unknownHandler = o, this._invalidHandler = u, this._deprecatedHandler = i, this.cleanHistory());
      }
      cleanHistory() {
        this._hasDeprecationWarned = Eo.createAutoChecklist();
      }
      normalize(e) {
        const t = {}, n = [e], r = () => {
          for (; 0 !== n.length; ) {
            const e = n.shift(), r = this._applyNormalization(e, t);
            n.push(...r);
          }
        };
        r();
        for (const e of Object.keys(this._utils.schemas)) {
          const r = this._utils.schemas[e];
          if (!((e in t))) {
            const t = Eo.normalizeDefaultResult(r.default(this._utils));
            ("value" in t) && n.push({
              [e]: t.value
            });
          }
        }
        r();
        for (const e of Object.keys(this._utils.schemas)) {
          const n = this._utils.schemas[e];
          (e in t) && (t[e] = n.postprocess(t[e], this._utils));
        }
        return t;
      }
      _applyNormalization(e, t) {
        const n = [], [r, o] = Eo.partition(Object.keys(e), e => (e in this._utils.schemas));
        for (const o of r) {
          const r = this._utils.schemas[o], u = r.preprocess(e[o], this._utils), i = Eo.normalizeValidateResult(r.validate(u, this._utils), u);
          if (!0 !== i) {
            const {value: e} = i, t = this._invalidHandler(o, e, this._utils);
            throw "string" == typeof t ? new Error(t) : t;
          }
          const a = ({from: e, to: t}) => {
            n.push("string" == typeof t ? {
              [t]: e
            } : {
              [t.key]: t.value
            });
          }, s = ({value: e, redirectTo: t}) => {
            const n = Eo.normalizeDeprecatedResult(r.deprecated(e, this._utils), u, !0);
            if (!1 !== n) if (!0 === n) this._hasDeprecationWarned(o) || this._utils.logger.warn(this._deprecatedHandler(o, t, this._utils)); else for (const {value: e} of n) {
              const n = {
                key: o,
                value: e
              };
              if (!this._hasDeprecationWarned(n)) {
                const r = "string" == typeof t ? {
                  key: t,
                  value: e
                } : t;
                this._utils.logger.warn(this._deprecatedHandler(n, r, this._utils));
              }
            }
          };
          Eo.normalizeForwardResult(r.forward(u, this._utils), u).forEach(a);
          const c = Eo.normalizeRedirectResult(r.redirect(u, this._utils), u);
          if ((c.redirect.forEach(a), ("remain" in c))) {
            const e = c.remain;
            (t[o] = (o in t) ? r.overlap(t[o], e, this._utils) : e, s({
              value: e
            }));
          }
          for (const {from: e, to: t} of c.redirect) s({
            value: e,
            redirectTo: t
          });
        }
        for (const r of o) {
          const o = e[r], u = this._unknownHandler(r, o, this._utils);
          if (u) for (const e of Object.keys(u)) {
            const r = {
              [e]: u[e]
            };
            (e in this._utils.schemas) ? n.push(r) : Object.assign(t, r);
          }
        }
        return n;
      }
    }
    t.Normalizer = n;
  }), wo = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), Tr.__exportStar(Nr, t), Tr.__exportStar(fo, t), Tr.__exportStar(Fo, t), Tr.__exportStar(So, t), Tr.__exportStar(ho, t));
  });
  const To = [], Bo = [], No = (e, t) => {
    if (e === t) return 0;
    const n = e;
    e.length > t.length && (e = t, t = n);
    let r = e.length, o = t.length;
    for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-o); ) (r--, o--);
    let u, i, a, s, c = 0;
    for (; c < r && e.charCodeAt(c) === t.charCodeAt(c); ) c++;
    if ((r -= c, o -= c, 0 === r)) return o;
    let l = 0, p = 0;
    for (; l < r; ) (Bo[l] = e.charCodeAt(c + l), To[l] = ++l);
    for (; p < o; ) for ((u = t.charCodeAt(c + p), a = p++, i = p, l = 0); l < r; l++) (s = u === Bo[l] ? a : a + 1, a = To[l], i = To[l] = a > i ? s > i ? i + 1 : s : s > a ? a + 1 : s);
    return i;
  };
  var ko = No, Po = No;
  ko.default = Po;
  var Oo = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  };
  const Io = {};
  for (const e of Object.keys(Oo)) Io[Oo[e]] = e;
  const Lo = {
    rgb: {
      channels: 3,
      labels: "rgb"
    },
    hsl: {
      channels: 3,
      labels: "hsl"
    },
    hsv: {
      channels: 3,
      labels: "hsv"
    },
    hwb: {
      channels: 3,
      labels: "hwb"
    },
    cmyk: {
      channels: 4,
      labels: "cmyk"
    },
    xyz: {
      channels: 3,
      labels: "xyz"
    },
    lab: {
      channels: 3,
      labels: "lab"
    },
    lch: {
      channels: 3,
      labels: "lch"
    },
    hex: {
      channels: 1,
      labels: ["hex"]
    },
    keyword: {
      channels: 1,
      labels: ["keyword"]
    },
    ansi16: {
      channels: 1,
      labels: ["ansi16"]
    },
    ansi256: {
      channels: 1,
      labels: ["ansi256"]
    },
    hcg: {
      channels: 3,
      labels: ["h", "c", "g"]
    },
    apple: {
      channels: 3,
      labels: ["r16", "g16", "b16"]
    },
    gray: {
      channels: 1,
      labels: ["gray"]
    }
  };
  var Mo = Lo;
  for (const e of Object.keys(Lo)) {
    if (!(("channels" in Lo[e]))) throw new Error("missing channels property: " + e);
    if (!(("labels" in Lo[e]))) throw new Error("missing channel labels property: " + e);
    if (Lo[e].labels.length !== Lo[e].channels) throw new Error("channel and label counts mismatch: " + e);
    const {channels: t, labels: n} = Lo[e];
    (delete Lo[e].channels, delete Lo[e].labels, Object.defineProperty(Lo[e], "channels", {
      value: t
    }), Object.defineProperty(Lo[e], "labels", {
      value: n
    }));
  }
  function jo(e) {
    const t = (function () {
      const e = {}, t = Object.keys(Mo);
      for (let n = t.length, r = 0; r < n; r++) e[t[r]] = {
        distance: -1,
        parent: null
      };
      return e;
    })(), n = [e];
    for (t[e].distance = 0; n.length; ) {
      const e = n.pop(), r = Object.keys(Mo[e]);
      for (let o = r.length, u = 0; u < o; u++) {
        const o = r[u], i = t[o];
        -1 === i.distance && (i.distance = t[e].distance + 1, i.parent = e, n.unshift(o));
      }
    }
    return t;
  }
  function _o(e, t) {
    return function (n) {
      return t(e(n));
    };
  }
  function Ro(e, t) {
    const n = [t[e].parent, e];
    let r = Mo[t[e].parent][e], o = t[e].parent;
    for (; t[o].parent; ) (n.unshift(t[o].parent), r = _o(Mo[t[o].parent][o], r), o = t[o].parent);
    return (r.conversion = n, r);
  }
  (Lo.rgb.hsl = function (e) {
    const t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, o = Math.min(t, n, r), u = Math.max(t, n, r), i = u - o;
    let a, s;
    (u === o ? a = 0 : t === u ? a = (n - r) / i : n === u ? a = 2 + (r - t) / i : r === u && (a = 4 + (t - n) / i), a = Math.min(60 * a, 360), a < 0 && (a += 360));
    const c = (o + u) / 2;
    return (s = u === o ? 0 : c <= .5 ? i / (u + o) : i / (2 - u - o), [a, 100 * s, 100 * c]);
  }, Lo.rgb.hsv = function (e) {
    let t, n, r, o, u;
    const i = e[0] / 255, a = e[1] / 255, s = e[2] / 255, c = Math.max(i, a, s), l = c - Math.min(i, a, s), p = function (e) {
      return (c - e) / 6 / l + .5;
    };
    return (0 === l ? (o = 0, u = 0) : (u = l / c, t = p(i), n = p(a), r = p(s), i === c ? o = r - n : a === c ? o = 1 / 3 + t - r : s === c && (o = 2 / 3 + n - t), o < 0 ? o += 1 : o > 1 && (o -= 1)), [360 * o, 100 * u, 100 * c]);
  }, Lo.rgb.hwb = function (e) {
    const t = e[0], n = e[1];
    let r = e[2];
    const o = Lo.rgb.hsl(e)[0], u = 1 / 255 * Math.min(t, Math.min(n, r));
    return (r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)), [o, 100 * u, 100 * r]);
  }, Lo.rgb.cmyk = function (e) {
    const t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, o = Math.min(1 - t, 1 - n, 1 - r);
    return [100 * ((1 - t - o) / (1 - o) || 0), 100 * ((1 - n - o) / (1 - o) || 0), 100 * ((1 - r - o) / (1 - o) || 0), 100 * o];
  }, Lo.rgb.keyword = function (e) {
    const t = Io[e];
    if (t) return t;
    let n, r = 1 / 0;
    for (const t of Object.keys(Oo)) {
      const i = (u = Oo[t], ((o = e)[0] - u[0]) ** 2 + (o[1] - u[1]) ** 2 + (o[2] - u[2]) ** 2);
      i < r && (r = i, n = t);
    }
    var o, u;
    return n;
  }, Lo.keyword.rgb = function (e) {
    return Oo[e];
  }, Lo.rgb.xyz = function (e) {
    let t = e[0] / 255, n = e[1] / 255, r = e[2] / 255;
    (t = t > .04045 ? ((t + .055) / 1.055) ** 2.4 : t / 12.92, n = n > .04045 ? ((n + .055) / 1.055) ** 2.4 : n / 12.92, r = r > .04045 ? ((r + .055) / 1.055) ** 2.4 : r / 12.92);
    return [100 * (.4124 * t + .3576 * n + .1805 * r), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)];
  }, Lo.rgb.lab = function (e) {
    const t = Lo.rgb.xyz(e);
    let n = t[0], r = t[1], o = t[2];
    (n /= 95.047, r /= 100, o /= 108.883, n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116, o = o > .008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116);
    return [116 * r - 16, 500 * (n - r), 200 * (r - o)];
  }, Lo.hsl.rgb = function (e) {
    const t = e[0] / 360, n = e[1] / 100, r = e[2] / 100;
    let o, u, i;
    if (0 === n) return (i = 255 * r, [i, i, i]);
    o = r < .5 ? r * (1 + n) : r + n - r * n;
    const a = 2 * r - o, s = [0, 0, 0];
    for (let e = 0; e < 3; e++) (u = t + 1 / 3 * -(e - 1), u < 0 && u++, u > 1 && u--, i = 6 * u < 1 ? a + 6 * (o - a) * u : 2 * u < 1 ? o : 3 * u < 2 ? a + (o - a) * (2 / 3 - u) * 6 : a, s[e] = 255 * i);
    return s;
  }, Lo.hsl.hsv = function (e) {
    const t = e[0];
    let n = e[1] / 100, r = e[2] / 100, o = n;
    const u = Math.max(r, .01);
    (r *= 2, n *= r <= 1 ? r : 2 - r, o *= u <= 1 ? u : 2 - u);
    return [t, 100 * (0 === r ? 2 * o / (u + o) : 2 * n / (r + n)), 100 * ((r + n) / 2)];
  }, Lo.hsv.rgb = function (e) {
    const t = e[0] / 60, n = e[1] / 100;
    let r = e[2] / 100;
    const o = Math.floor(t) % 6, u = t - Math.floor(t), i = 255 * r * (1 - n), a = 255 * r * (1 - n * u), s = 255 * r * (1 - n * (1 - u));
    switch ((r *= 255, o)) {
      case 0:
        return [r, s, i];
      case 1:
        return [a, r, i];
      case 2:
        return [i, r, s];
      case 3:
        return [i, a, r];
      case 4:
        return [s, i, r];
      case 5:
        return [r, i, a];
    }
  }, Lo.hsv.hsl = function (e) {
    const t = e[0], n = e[1] / 100, r = e[2] / 100, o = Math.max(r, .01);
    let u, i;
    i = (2 - n) * r;
    const a = (2 - n) * o;
    return (u = n * o, u /= a <= 1 ? a : 2 - a, u = u || 0, i /= 2, [t, 100 * u, 100 * i]);
  }, Lo.hwb.rgb = function (e) {
    const t = e[0] / 360;
    let n = e[1] / 100, r = e[2] / 100;
    const o = n + r;
    let u;
    o > 1 && (n /= o, r /= o);
    const i = Math.floor(6 * t), a = 1 - r;
    (u = 6 * t - i, 0 != (1 & i) && (u = 1 - u));
    const s = n + u * (a - n);
    let c, l, p;
    switch (i) {
      default:
      case 6:
      case 0:
        (c = a, l = s, p = n);
        break;
      case 1:
        (c = s, l = a, p = n);
        break;
      case 2:
        (c = n, l = a, p = s);
        break;
      case 3:
        (c = n, l = s, p = a);
        break;
      case 4:
        (c = s, l = n, p = a);
        break;
      case 5:
        (c = a, l = n, p = s);
    }
    return [255 * c, 255 * l, 255 * p];
  }, Lo.cmyk.rgb = function (e) {
    const t = e[0] / 100, n = e[1] / 100, r = e[2] / 100, o = e[3] / 100;
    return [255 * (1 - Math.min(1, t * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o)), 255 * (1 - Math.min(1, r * (1 - o) + o))];
  }, Lo.xyz.rgb = function (e) {
    const t = e[0] / 100, n = e[1] / 100, r = e[2] / 100;
    let o, u, i;
    return (o = 3.2406 * t + -1.5372 * n + -.4986 * r, u = -.9689 * t + 1.8758 * n + .0415 * r, i = .0557 * t + -.204 * n + 1.057 * r, o = o > .0031308 ? 1.055 * o ** (1 / 2.4) - .055 : 12.92 * o, u = u > .0031308 ? 1.055 * u ** (1 / 2.4) - .055 : 12.92 * u, i = i > .0031308 ? 1.055 * i ** (1 / 2.4) - .055 : 12.92 * i, o = Math.min(Math.max(0, o), 1), u = Math.min(Math.max(0, u), 1), i = Math.min(Math.max(0, i), 1), [255 * o, 255 * u, 255 * i]);
  }, Lo.xyz.lab = function (e) {
    let t = e[0], n = e[1], r = e[2];
    (t /= 95.047, n /= 100, r /= 108.883, t = t > .008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116, n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116);
    return [116 * n - 16, 500 * (t - n), 200 * (n - r)];
  }, Lo.lab.xyz = function (e) {
    let t, n, r;
    (n = (e[0] + 16) / 116, t = e[1] / 500 + n, r = n - e[2] / 200);
    const o = n ** 3, u = t ** 3, i = r ** 3;
    return (n = o > .008856 ? o : (n - 16 / 116) / 7.787, t = u > .008856 ? u : (t - 16 / 116) / 7.787, r = i > .008856 ? i : (r - 16 / 116) / 7.787, t *= 95.047, n *= 100, r *= 108.883, [t, n, r]);
  }, Lo.lab.lch = function (e) {
    const t = e[0], n = e[1], r = e[2];
    let o;
    (o = 360 * Math.atan2(r, n) / 2 / Math.PI, o < 0 && (o += 360));
    return [t, Math.sqrt(n * n + r * r), o];
  }, Lo.lch.lab = function (e) {
    const t = e[0], n = e[1], r = e[2] / 360 * 2 * Math.PI;
    return [t, n * Math.cos(r), n * Math.sin(r)];
  }, Lo.rgb.ansi16 = function (e, t = null) {
    const [n, r, o] = e;
    let u = null === t ? Lo.rgb.hsv(e)[2] : t;
    if ((u = Math.round(u / 50), 0 === u)) return 30;
    let i = 30 + (Math.round(o / 255) << 2 | Math.round(r / 255) << 1 | Math.round(n / 255));
    return (2 === u && (i += 60), i);
  }, Lo.hsv.ansi16 = function (e) {
    return Lo.rgb.ansi16(Lo.hsv.rgb(e), e[2]);
  }, Lo.rgb.ansi256 = function (e) {
    const t = e[0], n = e[1], r = e[2];
    if (t === n && n === r) return t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232;
    return 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
  }, Lo.ansi16.rgb = function (e) {
    let t = e % 10;
    if (0 === t || 7 === t) return (e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t]);
    const n = .5 * (1 + ~~(e > 50));
    return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255];
  }, Lo.ansi256.rgb = function (e) {
    if (e >= 232) {
      const t = 10 * (e - 232) + 8;
      return [t, t, t];
    }
    let t;
    e -= 16;
    return [Math.floor(e / 36) / 5 * 255, Math.floor((t = e % 36) / 6) / 5 * 255, t % 6 / 5 * 255];
  }, Lo.rgb.hex = function (e) {
    const t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
    return ("000000").substring(t.length) + t;
  }, Lo.hex.rgb = function (e) {
    const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!t) return [0, 0, 0];
    let n = t[0];
    3 === t[0].length && (n = n.split("").map(e => e + e).join(""));
    const r = parseInt(n, 16);
    return [r >> 16 & 255, r >> 8 & 255, 255 & r];
  }, Lo.rgb.hcg = function (e) {
    const t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, o = Math.max(Math.max(t, n), r), u = Math.min(Math.min(t, n), r), i = o - u;
    let a, s;
    return (a = i < 1 ? u / (1 - i) : 0, s = i <= 0 ? 0 : o === t ? (n - r) / i % 6 : o === n ? 2 + (r - t) / i : 4 + (t - n) / i, s /= 6, s %= 1, [360 * s, 100 * i, 100 * a]);
  }, Lo.hsl.hcg = function (e) {
    const t = e[1] / 100, n = e[2] / 100, r = n < .5 ? 2 * t * n : 2 * t * (1 - n);
    let o = 0;
    return (r < 1 && (o = (n - .5 * r) / (1 - r)), [e[0], 100 * r, 100 * o]);
  }, Lo.hsv.hcg = function (e) {
    const t = e[1] / 100, n = e[2] / 100, r = t * n;
    let o = 0;
    return (r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o]);
  }, Lo.hcg.rgb = function (e) {
    const t = e[0] / 360, n = e[1] / 100, r = e[2] / 100;
    if (0 === n) return [255 * r, 255 * r, 255 * r];
    const o = [0, 0, 0], u = t % 1 * 6, i = u % 1, a = 1 - i;
    let s = 0;
    switch (Math.floor(u)) {
      case 0:
        (o[0] = 1, o[1] = i, o[2] = 0);
        break;
      case 1:
        (o[0] = a, o[1] = 1, o[2] = 0);
        break;
      case 2:
        (o[0] = 0, o[1] = 1, o[2] = i);
        break;
      case 3:
        (o[0] = 0, o[1] = a, o[2] = 1);
        break;
      case 4:
        (o[0] = i, o[1] = 0, o[2] = 1);
        break;
      default:
        (o[0] = 1, o[1] = 0, o[2] = a);
    }
    return (s = (1 - n) * r, [255 * (n * o[0] + s), 255 * (n * o[1] + s), 255 * (n * o[2] + s)]);
  }, Lo.hcg.hsv = function (e) {
    const t = e[1] / 100, n = t + e[2] / 100 * (1 - t);
    let r = 0;
    return (n > 0 && (r = t / n), [e[0], 100 * r, 100 * n]);
  }, Lo.hcg.hsl = function (e) {
    const t = e[1] / 100, n = e[2] / 100 * (1 - t) + .5 * t;
    let r = 0;
    return (n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n]);
  }, Lo.hcg.hwb = function (e) {
    const t = e[1] / 100, n = t + e[2] / 100 * (1 - t);
    return [e[0], 100 * (n - t), 100 * (1 - n)];
  }, Lo.hwb.hcg = function (e) {
    const t = e[1] / 100, n = 1 - e[2] / 100, r = n - t;
    let o = 0;
    return (r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o]);
  }, Lo.apple.rgb = function (e) {
    return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
  }, Lo.rgb.apple = function (e) {
    return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
  }, Lo.gray.rgb = function (e) {
    return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
  }, Lo.gray.hsl = function (e) {
    return [0, 0, e[0]];
  }, Lo.gray.hsv = Lo.gray.hsl, Lo.gray.hwb = function (e) {
    return [0, 100, e[0]];
  }, Lo.gray.cmyk = function (e) {
    return [0, 0, 0, e[0]];
  }, Lo.gray.lab = function (e) {
    return [e[0], 0, 0];
  }, Lo.gray.hex = function (e) {
    const t = 255 & Math.round(e[0] / 100 * 255), n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
    return ("000000").substring(n.length) + n;
  }, Lo.rgb.gray = function (e) {
    return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
  });
  const Vo = {};
  Object.keys(Mo).forEach(e => {
    (Vo[e] = {}, Object.defineProperty(Vo[e], "channels", {
      value: Mo[e].channels
    }), Object.defineProperty(Vo[e], "labels", {
      value: Mo[e].labels
    }));
    const t = (function (e) {
      const t = jo(e), n = {}, r = Object.keys(t);
      for (let e = r.length, o = 0; o < e; o++) {
        const e = r[o];
        null !== t[e].parent && (n[e] = Ro(e, t));
      }
      return n;
    })(e);
    Object.keys(t).forEach(n => {
      const r = t[n];
      (Vo[e][n] = (function (e) {
        const t = function (...t) {
          const n = t[0];
          if (null == n) return n;
          n.length > 1 && (t = n);
          const r = e(t);
          if ("object" == typeof r) for (let e = r.length, t = 0; t < e; t++) r[t] = Math.round(r[t]);
          return r;
        };
        return (("conversion" in e) && (t.conversion = e.conversion), t);
      })(r), Vo[e][n].raw = (function (e) {
        const t = function (...t) {
          const n = t[0];
          return null == n ? n : (n.length > 1 && (t = n), e(t));
        };
        return (("conversion" in e) && (t.conversion = e.conversion), t);
      })(r));
    });
  });
  var $o = Vo, qo = je(function (e) {
    const t = (e, t) => (...n) => {
      const r = e(...n);
      return ("\x1b[").concat(r + t, "m");
    }, n = (e, t) => (...n) => {
      const r = e(...n);
      return ("\x1b[").concat(38 + t, ";5;").concat(r, "m");
    }, r = (e, t) => (...n) => {
      const r = e(...n);
      return ("\x1b[").concat(38 + t, ";2;").concat(r[0], ";").concat(r[1], ";").concat(r[2], "m");
    }, o = e => e, u = (e, t, n) => [e, t, n], i = (e, t, n) => {
      Object.defineProperty(e, t, {
        get: () => {
          const r = n();
          return (Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0
          }), r);
        },
        enumerable: !0,
        configurable: !0
      });
    };
    let a;
    const s = (e, t, n, r) => {
      void 0 === a && (a = $o);
      const o = r ? 10 : 0, u = {};
      for (const [r, i] of Object.entries(a)) {
        const a = "ansi16" === r ? "ansi" : r;
        r === t ? u[a] = e(n, o) : "object" == typeof i && (u[a] = e(i[t], o));
      }
      return u;
    };
    Object.defineProperty(e, "exports", {
      enumerable: !0,
      get: function () {
        const e = new Map(), a = {
          modifier: {
            reset: [0, 0],
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
          },
          color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            blackBright: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
          },
          bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            bgBlackBright: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
          }
        };
        (a.color.gray = a.color.blackBright, a.bgColor.bgGray = a.bgColor.bgBlackBright, a.color.grey = a.color.blackBright, a.bgColor.bgGrey = a.bgColor.bgBlackBright);
        for (const [t, n] of Object.entries(a)) {
          for (const [t, r] of Object.entries(n)) (a[t] = {
            open: ("\x1b[").concat(r[0], "m"),
            close: ("\x1b[").concat(r[1], "m")
          }, n[t] = a[t], e.set(r[0], r[1]));
          Object.defineProperty(a, t, {
            value: n,
            enumerable: !1
          });
        }
        return (Object.defineProperty(a, "codes", {
          value: e,
          enumerable: !1
        }), a.color.close = "\x1b[39m", a.bgColor.close = "\x1b[49m", i(a.color, "ansi", () => s(t, "ansi16", o, !1)), i(a.color, "ansi256", () => s(n, "ansi256", o, !1)), i(a.color, "ansi16m", () => s(r, "rgb", u, !1)), i(a.bgColor, "ansi", () => s(t, "ansi16", o, !0)), i(a.bgColor, "ansi256", () => s(n, "ansi256", o, !0)), i(a.bgColor, "ansi16m", () => s(r, "rgb", u, !0)), a);
      }
    });
  }), Wo = {
    isatty: () => !1
  }, Uo = (e, t = Oe.argv) => {
    const n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--", r = t.indexOf(n + e), o = t.indexOf("--");
    return -1 !== r && (-1 === o || r < o);
  }, Jo = _e(Object.freeze({
    __proto__: null,
    default: Wo
  }));
  const {env: zo} = Oe;
  let Ho;
  function Go(e) {
    return 0 !== e && ({
      level: e,
      hasBasic: !0,
      has256: e >= 2,
      has16m: e >= 3
    });
  }
  function Xo(e, t) {
    if (0 === Ho) return 0;
    if (Uo("color=16m") || Uo("color=full") || Uo("color=truecolor")) return 3;
    if (Uo("color=256")) return 2;
    if (e && !t && void 0 === Ho) return 0;
    const n = Ho || 0;
    if ("dumb" === zo.TERM) return n;
    if ("win32" === Oe.platform) {
      const e = qr.release().split(".");
      return Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1;
    }
    if (("CI" in zo)) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(e => (e in zo)) || "codeship" === zo.CI_NAME ? 1 : n;
    if (("TEAMCITY_VERSION" in zo)) return (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/).test(zo.TEAMCITY_VERSION) ? 1 : 0;
    if (("GITHUB_ACTIONS" in zo)) return 1;
    if ("truecolor" === zo.COLORTERM) return 3;
    if (("TERM_PROGRAM" in zo)) {
      const e = parseInt((zo.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (zo.TERM_PROGRAM) {
        case "iTerm.app":
          return e >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return (/-256(color)?$/i).test(zo.TERM) ? 2 : (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i).test(zo.TERM) || ("COLORTERM" in zo) ? 1 : n;
  }
  (Uo("no-color") || Uo("no-colors") || Uo("color=false") || Uo("color=never") ? Ho = 0 : (Uo("color") || Uo("colors") || Uo("color=true") || Uo("color=always")) && (Ho = 1), ("FORCE_COLOR" in zo) && (Ho = "true" === zo.FORCE_COLOR ? 1 : "false" === zo.FORCE_COLOR ? 0 : 0 === zo.FORCE_COLOR.length ? 1 : Math.min(parseInt(zo.FORCE_COLOR, 10), 3)));
  var Yo = {
    supportsColor: function (e) {
      return Go(Xo(e, e && e.isTTY));
    },
    stdout: Go(Xo(!0, Jo.isatty(1))),
    stderr: Go(Xo(!0, Jo.isatty(2)))
  };
  var Ko = {
    stringReplaceAll: (e, t, n) => {
      let r = e.indexOf(t);
      if (-1 === r) return e;
      const o = t.length;
      let u = 0, i = "";
      do {
        (i += e.substr(u, r - u) + t + n, u = r + o, r = e.indexOf(t, u));
      } while (-1 !== r);
      return (i += e.substr(u), i);
    },
    stringEncaseCRLFWithFirstIndex: (e, t, n, r) => {
      let o = 0, u = "";
      do {
        const i = "\r" === e[r - 1];
        (u += e.substr(o, (i ? r - 1 : r) - o) + t + (i ? "\r\n" : "\n") + n, o = r + 1, r = e.indexOf("\n", o));
      } while (-1 !== r);
      return (u += e.substr(o), u);
    }
  };
  const Qo = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, Zo = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, eu = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, tu = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi, nu = new Map([["n", "\n"], ["r", "\r"], ["t", "\t"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1b"], ["a", "\x07"]]);
  function ru(e) {
    const t = "u" === e[0], n = "{" === e[1];
    return t && !n && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : t && n ? String.fromCodePoint(parseInt(e.slice(2, -1), 16)) : nu.get(e) || e;
  }
  function ou(e, t) {
    const n = [], r = t.trim().split(/\s*,\s*/g);
    let o;
    for (const t of r) {
      const r = Number(t);
      if (Number.isNaN(r)) {
        if (!(o = t.match(eu))) throw new Error(("Invalid Chalk template style argument: ").concat(t, " (in style '").concat(e, "')"));
        n.push(o[2].replace(tu, (e, t, n) => t ? ru(t) : n));
      } else n.push(r);
    }
    return n;
  }
  function uu(e) {
    Zo.lastIndex = 0;
    const t = [];
    let n;
    for (; null !== (n = Zo.exec(e)); ) {
      const e = n[1];
      if (n[2]) {
        const r = ou(e, n[2]);
        t.push([e].concat(r));
      } else t.push([e]);
    }
    return t;
  }
  function iu(e, t) {
    const n = {};
    for (const e of t) for (const t of e.styles) n[t[0]] = e.inverse ? null : t.slice(1);
    let r = e;
    for (const [e, t] of Object.entries(n)) if (Array.isArray(t)) {
      if (!((e in r))) throw new Error(("Unknown Chalk style: ").concat(e));
      r = t.length > 0 ? r[e](...t) : r[e];
    }
    return r;
  }
  var au = (e, t) => {
    const n = [], r = [];
    let o = [];
    if ((t.replace(Qo, (t, u, i, a, s, c) => {
      if (u) o.push(ru(u)); else if (a) {
        const t = o.join("");
        (o = [], r.push(0 === n.length ? t : iu(e, n)(t)), n.push({
          inverse: i,
          styles: uu(a)
        }));
      } else if (s) {
        if (0 === n.length) throw new Error("Found extraneous } in Chalk template literal");
        (r.push(iu(e, n)(o.join(""))), o = [], n.pop());
      } else o.push(c);
    }), r.push(o.join("")), n.length > 0)) {
      const e = ("Chalk template literal is missing ").concat(n.length, " closing bracket").concat(1 === n.length ? "" : "s", " (`}`)");
      throw new Error(e);
    }
    return r.join("");
  };
  const {stdout: su, stderr: cu} = Yo, {stringReplaceAll: lu, stringEncaseCRLFWithFirstIndex: pu} = Ko, {isArray: du} = Array, fu = ["ansi", "ansi", "ansi256", "ansi16m"], hu = Object.create(null);
  class mu {
    constructor(e) {
      return gu(e);
    }
  }
  const gu = e => {
    const t = {};
    return (((e, t = {}) => {
      if (t.level && !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3)) throw new Error("The `level` option should be an integer from 0 to 3");
      const n = su ? su.level : 0;
      e.level = void 0 === t.level ? n : t.level;
    })(t, e), t.template = (...e) => Fu(t.template, ...e), Object.setPrototypeOf(t, Du.prototype), Object.setPrototypeOf(t.template, t), t.template.constructor = () => {
      throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
    }, t.template.Instance = mu, t.template);
  };
  function Du(e) {
    return gu(e);
  }
  for (const [e, t] of Object.entries(qo)) hu[e] = {
    get() {
      const n = bu(this, Cu(t.open, t.close, this._styler), this._isEmpty);
      return (Object.defineProperty(this, e, {
        value: n
      }), n);
    }
  };
  hu.visible = {
    get() {
      const e = bu(this, this._styler, !0);
      return (Object.defineProperty(this, "visible", {
        value: e
      }), e);
    }
  };
  const yu = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
  for (const e of yu) hu[e] = {
    get() {
      const {level: t} = this;
      return function (...n) {
        const r = Cu(qo.color[fu[t]][e](...n), qo.color.close, this._styler);
        return bu(this, r, this._isEmpty);
      };
    }
  };
  for (const e of yu) {
    hu["bg" + e[0].toUpperCase() + e.slice(1)] = {
      get() {
        const {level: t} = this;
        return function (...n) {
          const r = Cu(qo.bgColor[fu[t]][e](...n), qo.bgColor.close, this._styler);
          return bu(this, r, this._isEmpty);
        };
      }
    };
  }
  const Eu = Object.defineProperties(() => {}, Object.assign({}, hu, {
    level: {
      enumerable: !0,
      get() {
        return this._generator.level;
      },
      set(e) {
        this._generator.level = e;
      }
    }
  })), Cu = (e, t, n) => {
    let r, o;
    return (void 0 === n ? (r = e, o = t) : (r = n.openAll + e, o = t + n.closeAll), {
      open: e,
      close: t,
      openAll: r,
      closeAll: o,
      parent: n
    });
  }, bu = (e, t, n) => {
    const r = (...e) => du(e[0]) && du(e[0].raw) ? vu(r, Fu(r, ...e)) : vu(r, 1 === e.length ? "" + e[0] : e.join(" "));
    return (Object.setPrototypeOf(r, Eu), r._generator = e, r._styler = t, r._isEmpty = n, r);
  }, vu = (e, t) => {
    if (e.level <= 0 || !t) return e._isEmpty ? "" : t;
    let n = e._styler;
    if (void 0 === n) return t;
    const {openAll: r, closeAll: o} = n;
    if (-1 !== t.indexOf("\x1b")) for (; void 0 !== n; ) (t = lu(t, n.close, n.open), n = n.parent);
    const u = t.indexOf("\n");
    return (-1 !== u && (t = pu(t, o, r, u)), r + t + o);
  };
  let Au;
  const Fu = (e, ...t) => {
    const [n] = t;
    if (!du(n) || !du(n.raw)) return t.join(" ");
    const r = t.slice(1), o = [n.raw[0]];
    for (let e = 1; e < n.length; e++) o.push(String(r[e - 1]).replace(/[{}\\]/g, "\\$&"), String(n.raw[e]));
    return (void 0 === Au && (Au = au), Au(e, o.join("")));
  };
  Object.defineProperties(Du.prototype, hu);
  const xu = Du();
  (xu.supportsColor = su, xu.stderr = Du({
    level: cu ? cu.level : 0
  }), xu.stderr.supportsColor = cu);
  var Su = xu;
  var wu = function (e, t) {
    for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
    return e;
  }, Tu = "object" == typeof Me && Me && Me.Object === Object && Me, Bu = "object" == typeof self && self && self.Object === Object && self, Nu = (Tu || Bu || Function("return this")()).Symbol, ku = Object.prototype, Pu = ku.hasOwnProperty, Ou = ku.toString, Iu = Nu ? Nu.toStringTag : void 0;
  var Lu = function (e) {
    var t = Pu.call(e, Iu), n = e[Iu];
    try {
      e[Iu] = void 0;
      var r = !0;
    } catch (e) {}
    var o = Ou.call(e);
    return (r && (t ? e[Iu] = n : delete e[Iu]), o);
  }, Mu = Object.prototype.toString;
  var ju = function (e) {
    return Mu.call(e);
  }, _u = Nu ? Nu.toStringTag : void 0;
  var Ru = function (e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : _u && (_u in Object(e)) ? Lu(e) : ju(e);
  };
  var Vu = function (e) {
    return null != e && "object" == typeof e;
  };
  var $u = function (e) {
    return Vu(e) && "[object Arguments]" == Ru(e);
  }, qu = Object.prototype, Wu = qu.hasOwnProperty, Uu = qu.propertyIsEnumerable, Ju = $u((function () {
    return arguments;
  })()) ? $u : function (e) {
    return Vu(e) && Wu.call(e, "callee") && !Uu.call(e, "callee");
  }, zu = Array.isArray, Hu = Nu ? Nu.isConcatSpreadable : void 0;
  var Gu = function (e) {
    return zu(e) || Ju(e) || !!(Hu && e && e[Hu]);
  };
  var Xu = function e(t, n, r, o, u) {
    var i = -1, a = t.length;
    for ((r || (r = Gu), u || (u = [])); ++i < a; ) {
      var s = t[i];
      n > 0 && r(s) ? n > 1 ? e(s, n - 1, r, o, u) : wu(u, s) : o || (u[u.length] = s);
    }
    return u;
  };
  var Yu = function (e) {
    return (null == e ? 0 : e.length) ? Xu(e, 1) : [];
  };
  const Ku = {
    key: e => 1 === e.length ? ("-").concat(e) : ("--").concat(e),
    value: e => wo.apiDescriptor.value(e),
    pair: ({key: e, value: t}) => !1 === t ? ("--no-").concat(e) : !0 === t ? Ku.key(e) : "" === t ? ("").concat(Ku.key(e), " without an argument") : ("").concat(Ku.key(e), "=").concat(t)
  };
  class Qu extends wo.ChoiceSchema {
    constructor({name: e, flags: t}) {
      (super({
        name: e,
        choices: t
      }), this._flags = t.slice().sort());
    }
    preprocess(e, t) {
      if ("string" == typeof e && 0 !== e.length && !this._flags.includes(e)) {
        const n = this._flags.find(t => ko(t, e) < 3);
        if (n) return (t.logger.warn([("Unknown flag ").concat(Su.yellow(t.descriptor.value(e)), ","), ("did you mean ").concat(Su.blue(t.descriptor.value(n)), "?")].join(" ")), n);
      }
      return e;
    }
    expected() {
      return "a flag";
    }
  }
  let Zu;
  function ei(t, n, {logger: r, isCLI: o = !1, passThrough: u = !1} = {}) {
    const i = u ? Array.isArray(u) ? (e, t) => u.includes(e) ? {
      [e]: t
    } : void 0 : (e, t) => ({
      [e]: t
    }) : (t, n, r) => {
      const o = e(r.schemas, ["_"]);
      return wo.levenUnknownHandler(t, n, Object.assign({}, r, {
        schemas: o
      }));
    }, a = o ? Ku : wo.apiDescriptor, s = (function (e, {isCLI: t}) {
      const n = [];
      t && n.push(wo.AnySchema.create({
        name: "_"
      }));
      for (const r of e) (n.push(ti(r, {
        isCLI: t,
        optionInfos: e
      })), r.alias && t && n.push(wo.AliasSchema.create({
        name: r.alias,
        sourceName: r.name
      })));
      return n;
    })(n, {
      isCLI: o
    }), c = new wo.Normalizer(s, {
      logger: r,
      unknown: i,
      descriptor: a
    }), l = !1 !== r;
    l && Zu && (c._hasDeprecationWarned = Zu);
    const p = c.normalize(t);
    return (l && (Zu = c._hasDeprecationWarned), p);
  }
  function ti(e, {isCLI: t, optionInfos: n}) {
    let r;
    const o = {
      name: e.name
    }, u = {};
    switch (e.type) {
      case "int":
        (r = wo.IntegerSchema, t && (o.preprocess = e => Number(e)));
        break;
      case "string":
        r = wo.StringSchema;
        break;
      case "choice":
        (r = wo.ChoiceSchema, o.choices = e.choices.map(t => "object" == typeof t && t.redirect ? Object.assign({}, t, {
          redirect: {
            to: {
              key: e.name,
              value: t.redirect
            }
          }
        }) : t));
        break;
      case "boolean":
        r = wo.BooleanSchema;
        break;
      case "flag":
        (r = Qu, o.flags = Yu(n.map(e => [e.alias, e.description && e.name, e.oppositeDescription && ("no-").concat(e.name)].filter(Boolean))));
        break;
      case "path":
        r = wo.StringSchema;
        break;
      default:
        throw new Error(("Unexpected type ").concat(e.type));
    }
    if ((e.exception ? o.validate = (t, n, r) => e.exception(t) || n.validate(t, r) : o.validate = (e, t, n) => void 0 === e || t.validate(e, n), e.redirect && (u.redirect = t => t ? {
      to: {
        key: e.redirect.option,
        value: e.redirect.value
      }
    } : void 0), e.deprecated && (u.deprecated = !0), t && !e.array)) {
      const e = o.preprocess || (e => e);
      o.preprocess = (t, n, r) => n.preprocess(e(Array.isArray(t) ? t[t.length - 1] : t), r);
    }
    return e.array ? wo.ArraySchema.create(Object.assign({}, t ? {
      preprocess: e => [].concat(e)
    } : {}, u, {
      valueSchema: r.create(o)
    })) : r.create(Object.assign({}, o, u));
  }
  var ni = {
    normalizeApiOptions: function (e, t, n) {
      return ei(e, t, n);
    },
    normalizeCliOptions: function (e, t, n) {
      return ei(e, t, Object.assign({
        isCLI: !0
      }, n));
    }
  };
  function ri(e, t) {
    const {ignoreDecorators: n} = t || ({});
    if (!n) {
      const t = e.declaration && e.declaration.decorators || e.decorators;
      if (t && t.length > 0) return ri(t[0]);
    }
    return e.range ? e.range[0] : e.start;
  }
  function oi(e) {
    const t = e.range ? e.range[1] : e.end;
    return e.typeAnnotation ? Math.max(t, oi(e.typeAnnotation)) : t;
  }
  function ui(e, t) {
    return ri(e) === ri(t);
  }
  var ii = {
    locStart: ri,
    locEnd: oi,
    composeLoc: function (e, t = e) {
      const n = ri(e);
      return [n, "number" == typeof t ? n + t : oi(t)];
    },
    hasSameLocStart: ui,
    hasSameLoc: function (e, t) {
      return ui(e, t) && (function (e, t) {
        return oi(e) === oi(t);
      })(e, t);
    }
  }, ai = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g, t.matchToToken = function (e) {
      var t = {
        type: "invalid",
        value: e[0],
        closed: void 0
      };
      return (e[1] ? (t.type = "string", t.closed = !(!e[3] && !e[4])) : e[5] ? t.type = "comment" : e[6] ? (t.type = "comment", t.closed = !!e[7]) : e[8] ? t.type = "regex" : e[9] ? t.type = "number" : e[10] ? t.type = "name" : e[11] ? t.type = "punctuator" : e[12] && (t.type = "whitespace"), t);
    });
  }), si = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.isIdentifierStart = c, t.isIdentifierChar = l, t.isIdentifierName = function (e) {
      let t = !0;
      for (let n = 0, r = Array.from(e); n < r.length; n++) {
        const e = r[n].codePointAt(0);
        if (t) {
          if (!c(e)) return !1;
          t = !1;
        } else if (!l(e)) return !1;
      }
      return !t;
    });
    let n = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08c7\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9ffc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7ca\ua7f5-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc", r = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf\u1ac0\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
    const o = new RegExp("[" + n + "]"), u = new RegExp("[" + n + r + "]");
    n = r = null;
    const i = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938], a = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
    function s(e, t) {
      let n = 65536;
      for (let r = 0, o = t.length; r < o; r += 2) {
        if ((n += t[r], n > e)) return !1;
        if ((n += t[r + 1], n >= e)) return !0;
      }
      return !1;
    }
    function c(e) {
      return e < 65 ? 36 === e : e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && o.test(String.fromCharCode(e)) : s(e, i)));
    }
    function l(e) {
      return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && u.test(String.fromCharCode(e)) : s(e, i) || s(e, a))));
    }
  }), ci = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.isReservedWord = a, t.isStrictReservedWord = s, t.isStrictBindOnlyReservedWord = c, t.isStrictBindReservedWord = function (e, t) {
      return s(e, t) || c(e);
    }, t.isKeyword = function (e) {
      return o.has(e);
    });
    const n = ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"], r = ["eval", "arguments"], o = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"]), u = new Set(n), i = new Set(r);
    function a(e, t) {
      return t && "await" === e || "enum" === e;
    }
    function s(e, t) {
      return a(e, t) || u.has(e);
    }
    function c(e) {
      return i.has(e);
    }
  }), li = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "isIdentifierName", {
      enumerable: !0,
      get: function () {
        return si.isIdentifierName;
      }
    }), Object.defineProperty(t, "isIdentifierChar", {
      enumerable: !0,
      get: function () {
        return si.isIdentifierChar;
      }
    }), Object.defineProperty(t, "isIdentifierStart", {
      enumerable: !0,
      get: function () {
        return si.isIdentifierStart;
      }
    }), Object.defineProperty(t, "isReservedWord", {
      enumerable: !0,
      get: function () {
        return ci.isReservedWord;
      }
    }), Object.defineProperty(t, "isStrictBindOnlyReservedWord", {
      enumerable: !0,
      get: function () {
        return ci.isStrictBindOnlyReservedWord;
      }
    }), Object.defineProperty(t, "isStrictBindReservedWord", {
      enumerable: !0,
      get: function () {
        return ci.isStrictBindReservedWord;
      }
    }), Object.defineProperty(t, "isStrictReservedWord", {
      enumerable: !0,
      get: function () {
        return ci.isStrictReservedWord;
      }
    }), Object.defineProperty(t, "isKeyword", {
      enumerable: !0,
      get: function () {
        return ci.isKeyword;
      }
    }));
  }), pi = /[|\\{}()[\]^$+*?.]/g, di = function (e) {
    if ("string" != typeof e) throw new TypeError("Expected a string");
    return e.replace(pi, "\\$&");
  }, fi = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  }, hi = je(function (e) {
    var t = {};
    for (var n in fi) fi.hasOwnProperty(n) && (t[fi[n]] = n);
    var r = e.exports = {
      rgb: {
        channels: 3,
        labels: "rgb"
      },
      hsl: {
        channels: 3,
        labels: "hsl"
      },
      hsv: {
        channels: 3,
        labels: "hsv"
      },
      hwb: {
        channels: 3,
        labels: "hwb"
      },
      cmyk: {
        channels: 4,
        labels: "cmyk"
      },
      xyz: {
        channels: 3,
        labels: "xyz"
      },
      lab: {
        channels: 3,
        labels: "lab"
      },
      lch: {
        channels: 3,
        labels: "lch"
      },
      hex: {
        channels: 1,
        labels: ["hex"]
      },
      keyword: {
        channels: 1,
        labels: ["keyword"]
      },
      ansi16: {
        channels: 1,
        labels: ["ansi16"]
      },
      ansi256: {
        channels: 1,
        labels: ["ansi256"]
      },
      hcg: {
        channels: 3,
        labels: ["h", "c", "g"]
      },
      apple: {
        channels: 3,
        labels: ["r16", "g16", "b16"]
      },
      gray: {
        channels: 1,
        labels: ["gray"]
      }
    };
    for (var o in r) if (r.hasOwnProperty(o)) {
      if (!(("channels" in r[o]))) throw new Error("missing channels property: " + o);
      if (!(("labels" in r[o]))) throw new Error("missing channel labels property: " + o);
      if (r[o].labels.length !== r[o].channels) throw new Error("channel and label counts mismatch: " + o);
      var u = r[o].channels, i = r[o].labels;
      (delete r[o].channels, delete r[o].labels, Object.defineProperty(r[o], "channels", {
        value: u
      }), Object.defineProperty(r[o], "labels", {
        value: i
      }));
    }
    (r.rgb.hsl = function (e) {
      var t, n, r = e[0] / 255, o = e[1] / 255, u = e[2] / 255, i = Math.min(r, o, u), a = Math.max(r, o, u), s = a - i;
      return (a === i ? t = 0 : r === a ? t = (o - u) / s : o === a ? t = 2 + (u - r) / s : u === a && (t = 4 + (r - o) / s), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (i + a) / 2, [t, 100 * (a === i ? 0 : n <= .5 ? s / (a + i) : s / (2 - a - i)), 100 * n]);
    }, r.rgb.hsv = function (e) {
      var t, n, r, o, u, i = e[0] / 255, a = e[1] / 255, s = e[2] / 255, c = Math.max(i, a, s), l = c - Math.min(i, a, s), p = function (e) {
        return (c - e) / 6 / l + .5;
      };
      return (0 === l ? o = u = 0 : (u = l / c, t = p(i), n = p(a), r = p(s), i === c ? o = r - n : a === c ? o = 1 / 3 + t - r : s === c && (o = 2 / 3 + n - t), o < 0 ? o += 1 : o > 1 && (o -= 1)), [360 * o, 100 * u, 100 * c]);
    }, r.rgb.hwb = function (e) {
      var t = e[0], n = e[1], o = e[2];
      return [r.rgb.hsl(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, o))), 100 * (o = 1 - 1 / 255 * Math.max(t, Math.max(n, o)))];
    }, r.rgb.cmyk = function (e) {
      var t, n = e[0] / 255, r = e[1] / 255, o = e[2] / 255;
      return [100 * ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - o))) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - o - t) / (1 - t) || 0), 100 * t];
    }, r.rgb.keyword = function (e) {
      var n = t[e];
      if (n) return n;
      var r, o, u, i = 1 / 0;
      for (var a in fi) if (fi.hasOwnProperty(a)) {
        var s = fi[a], c = (o = e, u = s, Math.pow(o[0] - u[0], 2) + Math.pow(o[1] - u[1], 2) + Math.pow(o[2] - u[2], 2));
        c < i && (i = c, r = a);
      }
      return r;
    }, r.keyword.rgb = function (e) {
      return fi[e];
    }, r.rgb.xyz = function (e) {
      var t = e[0] / 255, n = e[1] / 255, r = e[2] / 255;
      return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)];
    }, r.rgb.lab = function (e) {
      var t = r.rgb.xyz(e), n = t[0], o = t[1], u = t[2];
      return (o /= 100, u /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116) - 16, 500 * (n - o), 200 * (o - (u = u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116))]);
    }, r.hsl.rgb = function (e) {
      var t, n, r, o, u, i = e[0] / 360, a = e[1] / 100, s = e[2] / 100;
      if (0 === a) return [u = 255 * s, u, u];
      (t = 2 * s - (n = s < .5 ? s * (1 + a) : s + a - s * a), o = [0, 0, 0]);
      for (var c = 0; c < 3; c++) ((r = i + 1 / 3 * -(c - 1)) < 0 && r++, r > 1 && r--, u = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, o[c] = 255 * u);
      return o;
    }, r.hsl.hsv = function (e) {
      var t = e[0], n = e[1] / 100, r = e[2] / 100, o = n, u = Math.max(r, .01);
      return (n *= (r *= 2) <= 1 ? r : 2 - r, o *= u <= 1 ? u : 2 - u, [t, 100 * (0 === r ? 2 * o / (u + o) : 2 * n / (r + n)), 100 * ((r + n) / 2)]);
    }, r.hsv.rgb = function (e) {
      var t = e[0] / 60, n = e[1] / 100, r = e[2] / 100, o = Math.floor(t) % 6, u = t - Math.floor(t), i = 255 * r * (1 - n), a = 255 * r * (1 - n * u), s = 255 * r * (1 - n * (1 - u));
      switch ((r *= 255, o)) {
        case 0:
          return [r, s, i];
        case 1:
          return [a, r, i];
        case 2:
          return [i, r, s];
        case 3:
          return [i, a, r];
        case 4:
          return [s, i, r];
        case 5:
          return [r, i, a];
      }
    }, r.hsv.hsl = function (e) {
      var t, n, r, o = e[0], u = e[1] / 100, i = e[2] / 100, a = Math.max(i, .01);
      return (r = (2 - u) * i, n = u * a, [o, 100 * (n = (n /= (t = (2 - u) * a) <= 1 ? t : 2 - t) || 0), 100 * (r /= 2)]);
    }, r.hwb.rgb = function (e) {
      var t, n, r, o, u, i, a, s = e[0] / 360, c = e[1] / 100, l = e[2] / 100, p = c + l;
      switch ((p > 1 && (c /= p, l /= p), r = 6 * s - (t = Math.floor(6 * s)), 0 != (1 & t) && (r = 1 - r), o = c + r * ((n = 1 - l) - c), t)) {
        default:
        case 6:
        case 0:
          (u = n, i = o, a = c);
          break;
        case 1:
          (u = o, i = n, a = c);
          break;
        case 2:
          (u = c, i = n, a = o);
          break;
        case 3:
          (u = c, i = o, a = n);
          break;
        case 4:
          (u = o, i = c, a = n);
          break;
        case 5:
          (u = n, i = c, a = o);
      }
      return [255 * u, 255 * i, 255 * a];
    }, r.cmyk.rgb = function (e) {
      var t = e[0] / 100, n = e[1] / 100, r = e[2] / 100, o = e[3] / 100;
      return [255 * (1 - Math.min(1, t * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o)), 255 * (1 - Math.min(1, r * (1 - o) + o))];
    }, r.xyz.rgb = function (e) {
      var t, n, r, o = e[0] / 100, u = e[1] / 100, i = e[2] / 100;
      return (n = -.9689 * o + 1.8758 * u + .0415 * i, r = .0557 * o + -.204 * u + 1.057 * i, t = (t = 3.2406 * o + -1.5372 * u + -.4986 * i) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))]);
    }, r.xyz.lab = function (e) {
      var t = e[0], n = e[1], r = e[2];
      return (n /= 100, r /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]);
    }, r.lab.xyz = function (e) {
      var t, n, r, o = e[0];
      (t = e[1] / 500 + (n = (o + 16) / 116), r = n - e[2] / 200);
      var u = Math.pow(n, 3), i = Math.pow(t, 3), a = Math.pow(r, 3);
      return (n = u > .008856 ? u : (n - 16 / 116) / 7.787, t = i > .008856 ? i : (t - 16 / 116) / 7.787, r = a > .008856 ? a : (r - 16 / 116) / 7.787, [t *= 95.047, n *= 100, r *= 108.883]);
    }, r.lab.lch = function (e) {
      var t, n = e[0], r = e[1], o = e[2];
      return ((t = 360 * Math.atan2(o, r) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(r * r + o * o), t]);
    }, r.lch.lab = function (e) {
      var t, n = e[0], r = e[1];
      return (t = e[2] / 360 * 2 * Math.PI, [n, r * Math.cos(t), r * Math.sin(t)]);
    }, r.rgb.ansi16 = function (e) {
      var t = e[0], n = e[1], o = e[2], u = (1 in arguments) ? arguments[1] : r.rgb.hsv(e)[2];
      if (0 === (u = Math.round(u / 50))) return 30;
      var i = 30 + (Math.round(o / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));
      return (2 === u && (i += 60), i);
    }, r.hsv.ansi16 = function (e) {
      return r.rgb.ansi16(r.hsv.rgb(e), e[2]);
    }, r.rgb.ansi256 = function (e) {
      var t = e[0], n = e[1], r = e[2];
      return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
    }, r.ansi16.rgb = function (e) {
      var t = e % 10;
      if (0 === t || 7 === t) return (e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t]);
      var n = .5 * (1 + ~~(e > 50));
      return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255];
    }, r.ansi256.rgb = function (e) {
      if (e >= 232) {
        var t = 10 * (e - 232) + 8;
        return [t, t, t];
      }
      var n;
      return (e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255]);
    }, r.rgb.hex = function (e) {
      var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
      return ("000000").substring(t.length) + t;
    }, r.hex.rgb = function (e) {
      var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!t) return [0, 0, 0];
      var n = t[0];
      3 === t[0].length && (n = n.split("").map(function (e) {
        return e + e;
      }).join(""));
      var r = parseInt(n, 16);
      return [r >> 16 & 255, r >> 8 & 255, 255 & r];
    }, r.rgb.hcg = function (e) {
      var t, n = e[0] / 255, r = e[1] / 255, o = e[2] / 255, u = Math.max(Math.max(n, r), o), i = Math.min(Math.min(n, r), o), a = u - i;
      return (t = a <= 0 ? 0 : u === n ? (r - o) / a % 6 : u === r ? 2 + (o - n) / a : 4 + (n - r) / a + 4, t /= 6, [360 * (t %= 1), 100 * a, 100 * (a < 1 ? i / (1 - a) : 0)]);
    }, r.hsl.hcg = function (e) {
      var t = e[1] / 100, n = e[2] / 100, r = 1, o = 0;
      return ((r = n < .5 ? 2 * t * n : 2 * t * (1 - n)) < 1 && (o = (n - .5 * r) / (1 - r)), [e[0], 100 * r, 100 * o]);
    }, r.hsv.hcg = function (e) {
      var t = e[1] / 100, n = e[2] / 100, r = t * n, o = 0;
      return (r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o]);
    }, r.hcg.rgb = function (e) {
      var t = e[0] / 360, n = e[1] / 100, r = e[2] / 100;
      if (0 === n) return [255 * r, 255 * r, 255 * r];
      var o, u = [0, 0, 0], i = t % 1 * 6, a = i % 1, s = 1 - a;
      switch (Math.floor(i)) {
        case 0:
          (u[0] = 1, u[1] = a, u[2] = 0);
          break;
        case 1:
          (u[0] = s, u[1] = 1, u[2] = 0);
          break;
        case 2:
          (u[0] = 0, u[1] = 1, u[2] = a);
          break;
        case 3:
          (u[0] = 0, u[1] = s, u[2] = 1);
          break;
        case 4:
          (u[0] = a, u[1] = 0, u[2] = 1);
          break;
        default:
          (u[0] = 1, u[1] = 0, u[2] = s);
      }
      return (o = (1 - n) * r, [255 * (n * u[0] + o), 255 * (n * u[1] + o), 255 * (n * u[2] + o)]);
    }, r.hcg.hsv = function (e) {
      var t = e[1] / 100, n = t + e[2] / 100 * (1 - t), r = 0;
      return (n > 0 && (r = t / n), [e[0], 100 * r, 100 * n]);
    }, r.hcg.hsl = function (e) {
      var t = e[1] / 100, n = e[2] / 100 * (1 - t) + .5 * t, r = 0;
      return (n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n]);
    }, r.hcg.hwb = function (e) {
      var t = e[1] / 100, n = t + e[2] / 100 * (1 - t);
      return [e[0], 100 * (n - t), 100 * (1 - n)];
    }, r.hwb.hcg = function (e) {
      var t = e[1] / 100, n = 1 - e[2] / 100, r = n - t, o = 0;
      return (r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o]);
    }, r.apple.rgb = function (e) {
      return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
    }, r.rgb.apple = function (e) {
      return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
    }, r.gray.rgb = function (e) {
      return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
    }, r.gray.hsl = r.gray.hsv = function (e) {
      return [0, 0, e[0]];
    }, r.gray.hwb = function (e) {
      return [0, 100, e[0]];
    }, r.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]];
    }, r.gray.lab = function (e) {
      return [e[0], 0, 0];
    }, r.gray.hex = function (e) {
      var t = 255 & Math.round(e[0] / 100 * 255), n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
      return ("000000").substring(n.length) + n;
    }, r.rgb.gray = function (e) {
      return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
    });
  });
  function mi(e) {
    var t = (function () {
      for (var e = {}, t = Object.keys(hi), n = t.length, r = 0; r < n; r++) e[t[r]] = {
        distance: -1,
        parent: null
      };
      return e;
    })(), n = [e];
    for (t[e].distance = 0; n.length; ) for (var r = n.pop(), o = Object.keys(hi[r]), u = o.length, i = 0; i < u; i++) {
      var a = o[i], s = t[a];
      -1 === s.distance && (s.distance = t[r].distance + 1, s.parent = r, n.unshift(a));
    }
    return t;
  }
  function gi(e, t) {
    return function (n) {
      return t(e(n));
    };
  }
  function Di(e, t) {
    for (var n = [t[e].parent, e], r = hi[t[e].parent][e], o = t[e].parent; t[o].parent; ) (n.unshift(t[o].parent), r = gi(hi[t[o].parent][o], r), o = t[o].parent);
    return (r.conversion = n, r);
  }
  var yi = {};
  Object.keys(hi).forEach(function (e) {
    (yi[e] = {}, Object.defineProperty(yi[e], "channels", {
      value: hi[e].channels
    }), Object.defineProperty(yi[e], "labels", {
      value: hi[e].labels
    }));
    var t = (function (e) {
      for (var t = mi(e), n = {}, r = Object.keys(t), o = r.length, u = 0; u < o; u++) {
        var i = r[u];
        null !== t[i].parent && (n[i] = Di(i, t));
      }
      return n;
    })(e);
    Object.keys(t).forEach(function (n) {
      var r = t[n];
      (yi[e][n] = (function (e) {
        var t = function (t) {
          if (null == t) return t;
          arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
          var n = e(t);
          if ("object" == typeof n) for (var r = n.length, o = 0; o < r; o++) n[o] = Math.round(n[o]);
          return n;
        };
        return (("conversion" in e) && (t.conversion = e.conversion), t);
      })(r), yi[e][n].raw = (function (e) {
        var t = function (t) {
          return null == t ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)), e(t));
        };
        return (("conversion" in e) && (t.conversion = e.conversion), t);
      })(r));
    });
  });
  var Ei = yi, Ci = je(function (e) {
    const t = (e, t) => function () {
      const n = e.apply(Ei, arguments);
      return ("\x1b[").concat(n + t, "m");
    }, n = (e, t) => function () {
      const n = e.apply(Ei, arguments);
      return ("\x1b[").concat(38 + t, ";5;").concat(n, "m");
    }, r = (e, t) => function () {
      const n = e.apply(Ei, arguments);
      return ("\x1b[").concat(38 + t, ";2;").concat(n[0], ";").concat(n[1], ";").concat(n[2], "m");
    };
    Object.defineProperty(e, "exports", {
      enumerable: !0,
      get: function () {
        const e = new Map(), o = {
          modifier: {
            reset: [0, 0],
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
          },
          color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            gray: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
          },
          bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            bgBlackBright: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
          }
        };
        o.color.grey = o.color.gray;
        for (const t of Object.keys(o)) {
          const n = o[t];
          for (const t of Object.keys(n)) {
            const r = n[t];
            (o[t] = {
              open: ("\x1b[").concat(r[0], "m"),
              close: ("\x1b[").concat(r[1], "m")
            }, n[t] = o[t], e.set(r[0], r[1]));
          }
          (Object.defineProperty(o, t, {
            value: n,
            enumerable: !1
          }), Object.defineProperty(o, "codes", {
            value: e,
            enumerable: !1
          }));
        }
        const u = e => e, i = (e, t, n) => [e, t, n];
        (o.color.close = "\x1b[39m", o.bgColor.close = "\x1b[49m", o.color.ansi = {
          ansi: t(u, 0)
        }, o.color.ansi256 = {
          ansi256: n(u, 0)
        }, o.color.ansi16m = {
          rgb: r(i, 0)
        }, o.bgColor.ansi = {
          ansi: t(u, 10)
        }, o.bgColor.ansi256 = {
          ansi256: n(u, 10)
        }, o.bgColor.ansi16m = {
          rgb: r(i, 10)
        });
        for (let e of Object.keys(Ei)) {
          if ("object" != typeof Ei[e]) continue;
          const u = Ei[e];
          ("ansi16" === e && (e = "ansi"), ("ansi16" in u) && (o.color.ansi[e] = t(u.ansi16, 0), o.bgColor.ansi[e] = t(u.ansi16, 10)), ("ansi256" in u) && (o.color.ansi256[e] = n(u.ansi256, 0), o.bgColor.ansi256[e] = n(u.ansi256, 10)), ("rgb" in u) && (o.color.ansi16m[e] = r(u.rgb, 0), o.bgColor.ansi16m[e] = r(u.rgb, 10)));
        }
        return o;
      }
    });
  });
  const bi = Oe.env;
  let vi;
  function Ai(e) {
    return (function (e) {
      return 0 !== e && ({
        level: e,
        hasBasic: !0,
        has256: e >= 2,
        has16m: e >= 3
      });
    })((function (e) {
      if (!1 === vi) return 0;
      if ($r("color=16m") || $r("color=full") || $r("color=truecolor")) return 3;
      if ($r("color=256")) return 2;
      if (e && !e.isTTY && !0 !== vi) return 0;
      const t = vi ? 1 : 0;
      if ("win32" === Oe.platform) {
        const e = qr.release().split(".");
        return Number(Oe.versions.node.split(".")[0]) >= 8 && Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1;
      }
      if (("CI" in bi)) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(e => (e in bi)) || "codeship" === bi.CI_NAME ? 1 : t;
      if (("TEAMCITY_VERSION" in bi)) return (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/).test(bi.TEAMCITY_VERSION) ? 1 : 0;
      if ("truecolor" === bi.COLORTERM) return 3;
      if (("TERM_PROGRAM" in bi)) {
        const e = parseInt((bi.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (bi.TERM_PROGRAM) {
          case "iTerm.app":
            return e >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      return (/-256(color)?$/i).test(bi.TERM) ? 2 : (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i).test(bi.TERM) || ("COLORTERM" in bi) ? 1 : (bi.TERM, t);
    })(e));
  }
  ($r("no-color") || $r("no-colors") || $r("color=false") ? vi = !1 : ($r("color") || $r("colors") || $r("color=true") || $r("color=always")) && (vi = !0), ("FORCE_COLOR" in bi) && (vi = 0 === bi.FORCE_COLOR.length || 0 !== parseInt(bi.FORCE_COLOR, 10)));
  var Fi = {
    supportsColor: Ai,
    stdout: Ai(Oe.stdout),
    stderr: Ai(Oe.stderr)
  };
  const xi = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, Si = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, wi = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, Ti = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi, Bi = new Map([["n", "\n"], ["r", "\r"], ["t", "\t"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1b"], ["a", "\x07"]]);
  function Ni(e) {
    return "u" === e[0] && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : Bi.get(e) || e;
  }
  function ki(e, t) {
    const n = [], r = t.trim().split(/\s*,\s*/g);
    let o;
    for (const t of r) if (isNaN(t)) {
      if (!(o = t.match(wi))) throw new Error(("Invalid Chalk template style argument: ").concat(t, " (in style '").concat(e, "')"));
      n.push(o[2].replace(Ti, (e, t, n) => t ? Ni(t) : n));
    } else n.push(Number(t));
    return n;
  }
  function Pi(e) {
    Si.lastIndex = 0;
    const t = [];
    let n;
    for (; null !== (n = Si.exec(e)); ) {
      const e = n[1];
      if (n[2]) {
        const r = ki(e, n[2]);
        t.push([e].concat(r));
      } else t.push([e]);
    }
    return t;
  }
  function Oi(e, t) {
    const n = {};
    for (const e of t) for (const t of e.styles) n[t[0]] = e.inverse ? null : t.slice(1);
    let r = e;
    for (const e of Object.keys(n)) if (Array.isArray(n[e])) {
      if (!((e in r))) throw new Error(("Unknown Chalk style: ").concat(e));
      r = n[e].length > 0 ? r[e].apply(r, n[e]) : r[e];
    }
    return r;
  }
  var Ii = (e, t) => {
    const n = [], r = [];
    let o = [];
    if ((t.replace(xi, (t, u, i, a, s, c) => {
      if (u) o.push(Ni(u)); else if (a) {
        const t = o.join("");
        (o = [], r.push(0 === n.length ? t : Oi(e, n)(t)), n.push({
          inverse: i,
          styles: Pi(a)
        }));
      } else if (s) {
        if (0 === n.length) throw new Error("Found extraneous } in Chalk template literal");
        (r.push(Oi(e, n)(o.join(""))), o = [], n.pop());
      } else o.push(c);
    }), r.push(o.join("")), n.length > 0)) {
      const e = ("Chalk template literal is missing ").concat(n.length, " closing bracket").concat(1 === n.length ? "" : "s", " (`}`)");
      throw new Error(e);
    }
    return r.join("");
  }, Li = je(function (e) {
    const t = Fi.stdout, n = "win32" === Oe.platform && !(Oe.env.TERM || "").toLowerCase().startsWith("xterm"), r = ["ansi", "ansi", "ansi256", "ansi16m"], o = new Set(["gray"]), u = Object.create(null);
    function i(e, n) {
      n = n || ({});
      const r = t ? t.level : 0;
      (e.level = void 0 === n.level ? r : n.level, e.enabled = ("enabled" in n) ? n.enabled : e.level > 0);
    }
    function a(e) {
      if (!this || !(this instanceof a) || this.template) {
        const t = {};
        return (i(t, e), t.template = function () {
          const e = [].slice.call(arguments);
          return p.apply(null, [t.template].concat(e));
        }, Object.setPrototypeOf(t, a.prototype), Object.setPrototypeOf(t.template, t), t.template.constructor = a, t.template);
      }
      i(this, e);
    }
    n && (Ci.blue.open = "\x1b[94m");
    for (const e of Object.keys(Ci)) (Ci[e].closeRe = new RegExp(di(Ci[e].close), "g"), u[e] = {
      get() {
        const t = Ci[e];
        return c.call(this, this._styles ? this._styles.concat(t) : [t], this._empty, e);
      }
    });
    (u.visible = {
      get() {
        return c.call(this, this._styles || [], !0, "visible");
      }
    }, Ci.color.closeRe = new RegExp(di(Ci.color.close), "g"));
    for (const e of Object.keys(Ci.color.ansi)) o.has(e) || (u[e] = {
      get() {
        const t = this.level;
        return function () {
          const n = Ci.color[r[t]][e].apply(null, arguments), o = {
            open: n,
            close: Ci.color.close,
            closeRe: Ci.color.closeRe
          };
          return c.call(this, this._styles ? this._styles.concat(o) : [o], this._empty, e);
        };
      }
    });
    Ci.bgColor.closeRe = new RegExp(di(Ci.bgColor.close), "g");
    for (const e of Object.keys(Ci.bgColor.ansi)) {
      if (o.has(e)) continue;
      u["bg" + e[0].toUpperCase() + e.slice(1)] = {
        get() {
          const t = this.level;
          return function () {
            const n = Ci.bgColor[r[t]][e].apply(null, arguments), o = {
              open: n,
              close: Ci.bgColor.close,
              closeRe: Ci.bgColor.closeRe
            };
            return c.call(this, this._styles ? this._styles.concat(o) : [o], this._empty, e);
          };
        }
      };
    }
    const s = Object.defineProperties(() => {}, u);
    function c(e, t, n) {
      const r = function () {
        return l.apply(r, arguments);
      };
      (r._styles = e, r._empty = t);
      const o = this;
      return (Object.defineProperty(r, "level", {
        enumerable: !0,
        get: () => o.level,
        set(e) {
          o.level = e;
        }
      }), Object.defineProperty(r, "enabled", {
        enumerable: !0,
        get: () => o.enabled,
        set(e) {
          o.enabled = e;
        }
      }), r.hasGrey = this.hasGrey || "gray" === n || "grey" === n, r.__proto__ = s, r);
    }
    function l() {
      const e = arguments, t = e.length;
      let r = String(arguments[0]);
      if (0 === t) return "";
      if (t > 1) for (let n = 1; n < t; n++) r += " " + e[n];
      if (!this.enabled || this.level <= 0 || !r) return this._empty ? "" : r;
      const o = Ci.dim.open;
      n && this.hasGrey && (Ci.dim.open = "");
      for (const e of this._styles.slice().reverse()) (r = e.open + r.replace(e.closeRe, e.open) + e.close, r = r.replace(/\r?\n/g, ("").concat(e.close, "$&").concat(e.open)));
      return (Ci.dim.open = o, r);
    }
    function p(e, t) {
      if (!Array.isArray(t)) return [].slice.call(arguments, 1).join(" ");
      const n = [].slice.call(arguments, 2), r = [t.raw[0]];
      for (let e = 1; e < t.length; e++) (r.push(String(n[e - 1]).replace(/[{}\\]/g, "\\$&")), r.push(String(t.raw[e])));
      return Ii(e, r.join(""));
    }
    (Object.defineProperties(a.prototype, u), e.exports = a(), e.exports.supportsColor = t, e.exports.default = e.exports);
  }), Mi = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.shouldHighlight = c, t.getChalk = l, t.default = function (e, t = {}) {
      if (c(t)) {
        const n = l(t);
        return (function (e, t) {
          return t.replace(r.default, function (...t) {
            const n = (function (e) {
              const [t, n] = e.slice(-2), o = (0, r.matchToToken)(e);
              if ("name" === o.type) {
                if ((0, li.isKeyword)(o.value) || (0, li.isReservedWord)(o.value)) return "keyword";
                if (a.test(o.value) && ("<" === n[t - 1] || "</" == n.substr(t - 2, 2))) return "jsx_tag";
                if (o.value[0] !== o.value[0].toLowerCase()) return "capitalized";
              }
              if ("punctuator" === o.type && s.test(o.value)) return "bracket";
              if ("invalid" === o.type && ("@" === o.value || "#" === o.value)) return "punctuator";
              return o.type;
            })(t), o = e[n];
            return o ? t[0].split(i).map(e => o(e)).join("\n") : t[0];
          });
        })((function (e) {
          return {
            keyword: e.cyan,
            capitalized: e.yellow,
            jsx_tag: e.yellow,
            punctuator: e.yellow,
            number: e.magenta,
            string: e.green,
            regex: e.magenta,
            comment: e.grey,
            invalid: e.white.bgRed.bold
          };
        })(n), e);
      }
      return e;
    });
    var n, r = (function (e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != typeof e && "function" != typeof e) return {
        default: e
      };
      var t = u();
      if (t && t.has(e)) return t.get(e);
      var n = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o];
      }
      (n.default = e, t && t.set(e, n));
      return n;
    })(ai), o = (n = Li) && n.__esModule ? n : {
      default: n
    };
    function u() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return (u = function () {
        return e;
      }, e);
    }
    const i = /\r\n|[\n\r\u2028\u2029]/, a = /^[a-z][\w-]*$/i, s = /^[()[\]{}]$/;
    function c(e) {
      return o.default.supportsColor || e.forceColor;
    }
    function l(e) {
      let t = o.default;
      return (e.forceColor && (t = new o.default.constructor({
        enabled: !0,
        level: 1
      })), t);
    }
  }), ji = je(function (e, t) {
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.codeFrameColumns = i, t.default = function (e, t, n, r = {}) {
      if (!o) {
        o = !0;
        const e = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
        if (Oe.emitWarning) Oe.emitWarning(e, "DeprecationWarning"); else {
          (new Error(e).name = "DeprecationWarning", console.warn(new Error(e)));
        }
      }
      n = Math.max(n, 0);
      return i(e, {
        start: {
          column: n,
          line: t
        }
      }, r);
    });
    var n = (function (e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != typeof e && "function" != typeof e) return {
        default: e
      };
      var t = r();
      if (t && t.has(e)) return t.get(e);
      var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e) if (Object.prototype.hasOwnProperty.call(e, u)) {
        var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
      }
      (n.default = e, t && t.set(e, n));
      return n;
    })(Mi);
    function r() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return (r = function () {
        return e;
      }, e);
    }
    let o = !1;
    const u = /\r\n|[\n\r\u2028\u2029]/;
    function i(e, t, r = {}) {
      const o = (r.highlightCode || r.forceColor) && (0, n.shouldHighlight)(r), i = (0, n.getChalk)(r), a = (function (e) {
        return {
          gutter: e.grey,
          marker: e.red.bold,
          message: e.red.bold
        };
      })(i), s = (e, t) => o ? e(t) : t, c = e.split(u), {start: l, end: p, markerLines: d} = (function (e, t, n) {
        const r = Object.assign({
          column: 0,
          line: -1
        }, e.start), o = Object.assign({}, r, e.end), {linesAbove: u = 2, linesBelow: i = 3} = n || ({}), a = r.line, s = r.column, c = o.line, l = o.column;
        let p = Math.max(a - (u + 1), 0), d = Math.min(t.length, c + i);
        (-1 === a && (p = 0), -1 === c && (d = t.length));
        const f = c - a, h = {};
        if (f) for (let e = 0; e <= f; e++) {
          const n = e + a;
          if (s) if (0 === e) {
            const e = t[n - 1].length;
            h[n] = [s, e - s + 1];
          } else if (e === f) h[n] = [0, l]; else {
            const r = t[n - e].length;
            h[n] = [0, r];
          } else h[n] = !0;
        } else h[a] = s === l ? !s || [s, 0] : [s, l - s];
        return {
          start: p,
          end: d,
          markerLines: h
        };
      })(t, c, r), f = t.start && "number" == typeof t.start.column, h = String(p).length;
      let m = (o ? (0, n.default)(e, r) : e).split(u).slice(l, p).map((e, t) => {
        const n = l + 1 + t, o = (" ").concat(n).slice(-h), u = (" ").concat(o, " | "), i = d[n], c = !d[n + 1];
        if (i) {
          let t = "";
          if (Array.isArray(i)) {
            const n = e.slice(0, Math.max(i[0] - 1, 0)).replace(/[^\t]/g, " "), o = i[1] || 1;
            (t = ["\n ", s(a.gutter, u.replace(/\d/g, " ")), n, s(a.marker, "^").repeat(o)].join(""), c && r.message && (t += " " + s(a.message, r.message)));
          }
          return [s(a.marker, ">"), s(a.gutter, u), e, t].join("");
        }
        return (" ").concat(s(a.gutter, u)).concat(e);
      }).join("\n");
      return (r.message && !f && (m = ("").concat((" ").repeat(h + 1)).concat(r.message, "\n").concat(m)), o ? i.reset(m) : m);
    }
  }), _i = _e(yn);
  const {ConfigError: Ri} = vr, {locStart: Vi, locEnd: $i} = ii, qi = Object.getOwnPropertyNames, Wi = Object.getOwnPropertyDescriptor;
  function Ui(e) {
    const t = {};
    for (const n of e.plugins) if (n.parsers) for (const e of qi(n.parsers)) Object.defineProperty(t, e, Wi(n.parsers, e));
    return t;
  }
  function Ji(e, t) {
    if ((t = t || Ui(e), "function" == typeof e.parser)) return {
      parse: e.parser,
      astFormat: "estree",
      locStart: Vi,
      locEnd: $i
    };
    if ("string" == typeof e.parser) {
      if (Object.prototype.hasOwnProperty.call(t, e.parser)) return t[e.parser];
      throw new Ri(("Couldn't resolve parser \"").concat(e.parser, '". Parsers must be explicitly added to the standalone bundle.'));
    }
  }
  var zi = {
    parse: function (e, t) {
      const n = Ui(t), r = Object.keys(n).reduce((e, t) => Object.defineProperty(e, t, {
        enumerable: !0,
        get: () => n[t].parse
      }), {}), o = Ji(t, n);
      try {
        return (o.preprocess && (e = o.preprocess(e, t)), {
          text: e,
          ast: o.parse(e, r, t)
        });
      } catch (t) {
        const {loc: n} = t;
        if (n) {
          const {codeFrameColumns: r} = ji;
          throw (t.codeFrame = r(e, n, {
            highlightCode: !0
          }), t.message += "\n" + t.codeFrame, t);
        }
        throw t.stack;
      }
    },
    resolveParser: Ji
  };
  const {UndefinedParserError: Hi} = vr, {getSupportInfo: Gi} = gt, {resolveParser: Xi} = zi, Yi = {
    astFormat: "estree",
    printer: {},
    originalText: void 0,
    locStart: null,
    locEnd: null
  };
  function Ki(e, t) {
    const n = _i.basename(e).toLowerCase(), r = Gi({
      plugins: t
    }).languages.filter(e => null !== e.since);
    let o = r.find(e => e.extensions && e.extensions.some(e => n.endsWith(e)) || e.filenames && e.filenames.some(e => e.toLowerCase() === n));
    if (!o && !n.includes(".")) {
      const t = (function (e) {
        if ("string" != typeof e) return "";
        let t;
        try {
          t = gr.openSync(e, "r");
        } catch (e) {
          return "";
        }
        try {
          const e = new Dr(t).next().toString("utf8"), n = e.match(/^#!\/(?:usr\/)?bin\/env\s+(\S+)/);
          if (n) return n[1];
          const r = e.match(/^#!\/(?:usr\/(?:local\/)?)?bin\/(\S+)/);
          return r ? r[1] : "";
        } catch (e) {
          return "";
        } finally {
          try {
            gr.closeSync(t);
          } catch (e) {}
        }
      })(e);
      o = r.find(e => e.interpreters && e.interpreters.includes(t));
    }
    return o && o.parsers[0];
  }
  var Qi = {
    normalize: function (e, t) {
      t = t || ({});
      const n = Object.assign({}, e), r = Gi({
        plugins: e.plugins,
        showUnreleased: !0,
        showDeprecated: !0
      }).options, o = Object.assign({}, Yi, yr(r.filter(e => void 0 !== e.default).map(e => [e.name, e.default])));
      if (!n.parser) if (n.filepath) {
        if ((n.parser = Ki(n.filepath, n.plugins), !n.parser)) throw new Hi(("No parser could be inferred for file: ").concat(n.filepath));
      } else {
        ((t.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), n.parser = "babel");
      }
      const u = Xi(ni.normalizeApiOptions(n, [r.find(e => "parser" === e.name)], {
        passThrough: !0,
        logger: !1
      }));
      (n.astFormat = u.astFormat, n.locEnd = u.locEnd, n.locStart = u.locStart);
      const i = (function (e) {
        const {astFormat: t} = e;
        if (!t) throw new Error("getPlugin() requires astFormat to be set");
        const n = e.plugins.find(e => e.printers && e.printers[t]);
        if (!n) throw new Error(("Couldn't find plugin for AST format \"").concat(t, '"'));
        return n;
      })(n);
      n.printer = i.printers[n.astFormat];
      const a = r.filter(e => e.pluginDefaults && void 0 !== e.pluginDefaults[i.name]).reduce((e, t) => Object.assign(e, {
        [t.name]: t.pluginDefaults[i.name]
      }), {}), s = Object.assign({}, o, a);
      return (Object.keys(s).forEach(e => {
        null == n[e] && (n[e] = s[e]);
      }), "json" === n.parser && (n.trailingComma = "none"), ni.normalizeApiOptions(n, r, Object.assign({
        passThrough: Object.keys(Yi)
      }, t)));
    },
    hiddenDefaults: Yi,
    inferParser: Ki
  };
  var Zi = function e(t, n, r) {
    if (Array.isArray(t)) return t.map(t => e(t, n, r)).filter(Boolean);
    if (!t || "object" != typeof t) return t;
    const o = n.printer.massageAstNode;
    let u;
    u = o && o.ignoredProperties ? o.ignoredProperties : new Set();
    const i = {};
    for (const r of Object.keys(t)) u.has(r) || "function" == typeof t[r] || (i[r] = e(t[r], n, t));
    if (o) {
      const e = o(t, i, r);
      if (null === e) return;
      if (e) return e;
    }
    return i;
  };
  function ea() {}
  (ea.ok = function () {}, ea.strictEqual = function () {});
  var ta = _e(Object.freeze({
    __proto__: null,
    default: ea
  }));
  const {builders: {concat: na, line: ra, hardline: oa, breakParent: ua, indent: ia, lineSuffix: aa, join: sa, cursor: ca}} = cn, {hasNewline: la, skipNewline: pa, skipSpaces: da, isPreviousLineEmpty: fa, addLeadingComment: ha, addDanglingComment: ma, addTrailingComment: ga} = Lt, Da = Symbol("child-nodes");
  function ya(e, t, n) {
    if (!e) return;
    const {printer: r, locStart: o, locEnd: u} = t;
    if (n) {
      if (r.canAttachComment && r.canAttachComment(e)) {
        let t;
        for (t = n.length - 1; t >= 0 && !(o(n[t]) <= o(e) && u(n[t]) <= u(e)); --t) ;
        return void n.splice(t + 1, 0, e);
      }
    } else if (e[Da]) return e[Da];
    const i = r.getCommentChildNodes && r.getCommentChildNodes(e, t) || "object" == typeof e && Object.keys(e).filter(e => "enclosingNode" !== e && "precedingNode" !== e && "followingNode" !== e && "tokens" !== e && "comments" !== e).map(t => e[t]);
    return i ? (n || Object.defineProperty(e, Da, {
      value: n = [],
      enumerable: !1
    }), i.forEach(e => {
      ya(e, t, n);
    }), n) : void 0;
  }
  function Ea(e, t, n) {
    const {locStart: r, locEnd: o} = n, u = r(t), i = o(t), a = ya(e, n);
    let s, c, l = 0, p = a.length;
    for (; l < p; ) {
      const e = l + p >> 1, d = a[e], f = r(d), h = o(d);
      if (f <= u && i <= h) return (t.enclosingNode = d, void Ea(d, t, n));
      if (f <= u) (s = d, l = e + 1); else {
        if (!(i <= f)) throw new Error("Comment location overlaps with node location");
        (c = d, p = e);
      }
    }
    if (t.enclosingNode && "TemplateLiteral" === t.enclosingNode.type) {
      const {quasis: e} = t.enclosingNode, r = va(e, t, n);
      (s && va(e, s, n) !== r && (s = null), c && va(e, c, n) !== r && (c = null));
    }
    (s && (t.precedingNode = s), c && (t.followingNode = c));
  }
  function Ca(e, t, n) {
    const r = e.length;
    if (0 === r) return;
    const {precedingNode: o, followingNode: u, enclosingNode: i} = e[0], a = n.printer.getGapRegex && n.printer.getGapRegex(i) || /^[\s(]*$/;
    let s, c = n.locStart(u);
    for (s = r; s > 0; --s) {
      const r = e[s - 1];
      (ta.strictEqual(r.precedingNode, o), ta.strictEqual(r.followingNode, u));
      const i = t.slice(n.locEnd(r), c);
      if (!a.test(i)) break;
      c = n.locStart(r);
    }
    e.forEach((e, t) => {
      t < s ? ga(o, e) : ha(u, e);
    });
    for (const e of [o, u]) e.comments && e.comments.length > 1 && e.comments.sort((e, t) => n.locStart(e) - n.locStart(t));
    e.length = 0;
  }
  function ba(e, t) {
    return (e.getValue().printed = !0, t.printer.printComment(e, t));
  }
  function va(e, t, n) {
    const r = n.locStart(t) - 1;
    for (let t = 1; t < e.length; ++t) if (r < n.locStart(e[t])) return t - 1;
    return 0;
  }
  function Aa(e, t, n) {
    return e.getNode() === t.cursorNode && e.getValue() ? na([ca, n, ca]) : n;
  }
  var Fa = {
    attach: function (e, t, n, r) {
      if (!Array.isArray(e)) return;
      const o = [], {locStart: u, locEnd: i} = r;
      (e.forEach((a, s) => {
        if ("json" === r.parser || "json5" === r.parser || "__js_expression" === r.parser || "__vue_expression" === r.parser) {
          if (u(a) - u(t) <= 0) return void ha(t, a);
          if (i(a) - i(t) >= 0) return void ga(t, a);
        }
        Ea(t, a, r);
        const {precedingNode: c, enclosingNode: l, followingNode: p} = a, d = r.printer.handleComments && r.printer.handleComments.ownLine ? r.printer.handleComments.ownLine : () => !1, f = r.printer.handleComments && r.printer.handleComments.endOfLine ? r.printer.handleComments.endOfLine : () => !1, h = r.printer.handleComments && r.printer.handleComments.remaining ? r.printer.handleComments.remaining : () => !1, m = e.length - 1 === s;
        if (la(n, u(a), {
          backwards: !0
        })) d(a, n, r, t, m) || (p ? ha(p, a) : c ? ga(c, a) : ma(l || t, a)); else if (la(n, i(a))) f(a, n, r, t, m) || (c ? ga(c, a) : p ? ha(p, a) : ma(l || t, a)); else if (h(a, n, r, t, m)) ; else if (c && p) {
          const e = o.length;
          if (e > 0) {
            o[e - 1].followingNode !== a.followingNode && Ca(o, n, r);
          }
          o.push(a);
        } else c ? ga(c, a) : p ? ha(p, a) : ma(l || t, a);
      }), Ca(o, n, r), e.forEach(e => {
        (delete e.precedingNode, delete e.enclosingNode, delete e.followingNode);
      }));
    },
    printComments: function (e, t, n, r) {
      const o = e.getValue(), u = t(e), i = o && o.comments;
      if (!i || 0 === i.length) return Aa(e, n, u);
      const a = [], s = [r ? ";" : "", u];
      return (e.each(e => {
        const t = e.getValue(), {leading: r, trailing: o} = t;
        if (r) {
          const r = (function (e, t) {
            const n = e.getValue(), r = ba(e, t);
            if (!r) return "";
            if (t.printer.isBlockComment && t.printer.isBlockComment(n)) {
              const e = la(t.originalText, t.locEnd(n)) ? la(t.originalText, t.locStart(n), {
                backwards: !0
              }) ? oa : ra : " ";
              return na([r, e]);
            }
            return na([r, oa]);
          })(e, n);
          if (!r) return;
          a.push(r);
          const o = n.originalText, u = pa(o, da(o, n.locEnd(t)));
          !1 !== u && la(o, u) && a.push(oa);
        } else o && s.push((function (e, t) {
          const n = e.getValue(), r = ba(e, t);
          if (!r) return "";
          const {printer: o, originalText: u, locStart: i} = t, a = o.isBlockComment && o.isBlockComment(n);
          if (la(u, i(n), {
            backwards: !0
          })) {
            const e = fa(u, n, i);
            return aa(na([oa, e ? oa : "", r]));
          }
          let s = na([" ", r]);
          return (a || (s = na([aa(s), ua])), s);
        })(e, n));
      }, "comments"), Aa(e, n, na(a.concat(s))));
    },
    printDanglingComments: function (e, t, n, r) {
      const o = [], u = e.getValue();
      return u && u.comments ? (e.each(e => {
        const n = e.getValue();
        !n || n.leading || n.trailing || r && !r(n) || o.push(ba(e, t));
      }, "comments"), 0 === o.length ? "" : n ? sa(oa, o) : ia(na([oa, sa(oa, o)]))) : "";
    },
    getSortedChildNodes: ya,
    ensureAllCommentsPrinted: function (e) {
      e && e.forEach(e => {
        if (!e.printed) throw new Error('Comment "' + e.value.trim() + '" was not printed. Please report this error!');
        delete e.printed;
      });
    }
  };
  function xa(e, t) {
    const n = Sa(e.stack, t);
    return -1 === n ? null : e.stack[n];
  }
  function Sa(e, t) {
    for (let n = e.length - 1; n >= 0; n -= 2) {
      const r = e[n];
      if (r && !Array.isArray(r) && --t < 0) return n;
    }
    return -1;
  }
  var wa = class {
    constructor(e) {
      this.stack = [e];
    }
    getName() {
      const {stack: e} = this, {length: t} = e;
      return t > 1 ? e[t - 2] : null;
    }
    getValue() {
      return se(this.stack);
    }
    getNode(e = 0) {
      return xa(this, e);
    }
    getParentNode(e = 0) {
      return xa(this, e + 1);
    }
    call(e, ...t) {
      const {stack: n} = this, {length: r} = n;
      let o = se(n);
      for (const e of t) (o = o[e], n.push(e, o));
      const u = e(this);
      return (n.length = r, u);
    }
    callParent(e, t = 0) {
      const n = Sa(this.stack, t + 1), r = this.stack.splice(n + 1), o = e(this);
      return (this.stack.push(...r), o);
    }
    each(e, ...t) {
      const {stack: n} = this, {length: r} = n;
      let o = se(n);
      for (const e of t) (o = o[e], n.push(e, o));
      for (let t = 0; t < o.length; ++t) (n.push(t, o[t]), e(this, t), n.length -= 2);
      n.length = r;
    }
    map(e, ...t) {
      const n = [];
      return (this.each((t, r) => {
        n[r] = e(t, r);
      }, ...t), n);
    }
    match(...e) {
      let t = this.stack.length - 1, n = null, r = this.stack[t--];
      for (const o of e) {
        if (void 0 === r) return !1;
        let e = null;
        if (("number" == typeof n && (e = n, n = this.stack[t--], r = this.stack[t--]), o && !o(r, n, e))) return !1;
        (n = this.stack[t--], r = this.stack[t--]);
      }
      return !0;
    }
  };
  const {utils: {stripTrailingHardline: Ta}} = cn, {normalize: Ba} = Qi;
  var Na = {
    printSubtree: function (e, t, n, r) {
      if (n.printer.embed && "auto" === n.embeddedLanguageFormatting) return n.printer.embed(e, t, (e, t, o) => (function (e, t, n, r, {stripTrailingHardline: o = !1} = {}) {
        const u = Ba(Object.assign({}, n, t, {
          parentParser: n.parser,
          embeddedInHtml: !(!n.embeddedInHtml && "html" !== n.parser && "vue" !== n.parser && "angular" !== n.parser && "lwc" !== n.parser),
          originalText: e
        }), {
          passThrough: !0
        }), i = zi.parse(e, u), {ast: a} = i;
        e = i.text;
        const s = a.comments;
        (delete a.comments, Fa.attach(s, a, e, u), u[Symbol.for("comments")] = s || [], u[Symbol.for("tokens")] = a.tokens || []);
        const c = r(a, u);
        if ((Fa.ensureAllCommentsPrinted(s), o)) return "string" == typeof c ? c.replace(/(?:\r?\n)*$/, "") : Ta(c, !0);
        return c;
      })(e, t, n, r, o), n);
    }
  };
  const ka = cn, Pa = ka.builders, {concat: Oa, hardline: Ia, addAlignmentToDoc: La} = Pa, Ma = ka.utils;
  function ja(e, t, n = 0) {
    const {printer: r} = t;
    r.preprocess && (e = r.preprocess(e, t));
    const o = new Map();
    let u = (function e(n, u) {
      const i = n.getValue(), a = i && "object" == typeof i && void 0 === u;
      if (a && o.has(i)) return o.get(i);
      let s;
      return (s = r.willPrintOwnComments && r.willPrintOwnComments(n, t) ? _a(n, t, e, u) : Fa.printComments(n, n => _a(n, t, e, u), t, u && u.needsSemi), a && o.set(i, s), s);
    })(new wa(e));
    return (n > 0 && (u = La(Oa([Ia, u]), n, t.tabWidth)), Ma.propagateBreaks(u), u);
  }
  function _a(e, t, n, r) {
    ta.ok(e instanceof wa);
    const o = e.getValue(), {printer: u} = t;
    if (u.hasPrettierIgnore && u.hasPrettierIgnore(e)) return (function (e, t) {
      const {originalText: n, [Symbol.for("comments")]: r, locStart: o, locEnd: u} = t, i = o(e), a = u(e);
      for (const e of r) o(e) >= i && u(e) <= a && (e.printed = !0);
      return n.slice(i, a);
    })(o, t);
    if (o) try {
      const r = Na.printSubtree(e, n, t, ja);
      if (r) return r;
    } catch (e) {
      if (Me.PRETTIER_DEBUG) throw e;
    }
    return u.print(e, t, n, r);
  }
  var Ra = ja;
  function Va(e, t, n, r, o = []) {
    if (!(t < n.locStart(e) || t > n.locEnd(e))) {
      for (const u of Fa.getSortedChildNodes(e, n)) {
        const i = Va(u, t, n, r, [e, ...o]);
        if (i) return i;
      }
      return !r || r(e) ? {
        node: e,
        parentNodes: o
      } : void 0;
    }
  }
  const $a = new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral"]), qa = new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
  function Wa(e, t) {
    if (null == t) return !1;
    switch (e.parser) {
      case "flow":
      case "babel":
      case "babel-flow":
      case "babel-ts":
      case "typescript":
      case "espree":
      case "meriyah":
        return (function (e) {
          return "Directive" === e || "TypeAlias" === e || "TSExportAssignment" === e || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration");
        })(t.type);
      case "json":
        return $a.has(t.type);
      case "graphql":
        return qa.has(t.kind);
      case "vue":
        return "root" !== t.tag;
    }
    return !1;
  }
  var Ua = {
    calculateRange: function (e, t, n) {
      const r = e.slice(t.rangeStart, t.rangeEnd), o = Math.max(t.rangeStart + r.search(/\S/), t.rangeStart);
      let u;
      for (u = t.rangeEnd; u > t.rangeStart && !(/\S/).test(e[u - 1]); --u) ;
      const i = Va(n, o, t, e => Wa(t, e)), a = Va(n, u, t, e => Wa(t, e));
      if (!i || !a) return {
        rangeStart: 0,
        rangeEnd: 0
      };
      const {startNode: s, endNode: c} = (function (e, t, n) {
        let r = e.node, o = t.node;
        if (r === o) return {
          startNode: r,
          endNode: o
        };
        for (const r of t.parentNodes) {
          if (!("Program" !== r.type && "File" !== r.type && n.locStart(r) >= n.locStart(e.node))) break;
          o = r;
        }
        for (const o of e.parentNodes) {
          if (!("Program" !== o.type && "File" !== o.type && n.locEnd(o) <= n.locEnd(t.node))) break;
          r = o;
        }
        return {
          startNode: r,
          endNode: o
        };
      })(i, a, t);
      return {
        rangeStart: Math.min(t.locStart(s), t.locStart(c)),
        rangeEnd: Math.max(t.locEnd(s), t.locEnd(c))
      };
    },
    findNodeAtOffset: Va
  };
  const {printer: {printDocToString: Ja}, debug: {printDocToDebug: za}} = cn, {getAlignmentSize: Ha} = Lt, {guessEndOfLine: Ga, convertEndOfLineToChars: Xa, countEndOfLineChars: Ya, normalizeEndOfLine: Ka} = Mt, Qa = Qi.normalize, Za = Symbol("cursor");
  function es(e, t, n) {
    const r = t.comments;
    return (r && (delete t.comments, Fa.attach(r, t, e, n)), n[Symbol.for("comments")] = r || [], n[Symbol.for("tokens")] = t.tokens || [], n.originalText = e, r);
  }
  function ts(e, t, n) {
    if (!e || !e.trim().length) return {
      formatted: "",
      cursorOffset: -1
    };
    n = n || 0;
    const {ast: r, text: o} = zi.parse(e, t);
    if (t.cursorOffset >= 0) {
      const e = Ua.findNodeAtOffset(r, t.cursorOffset, t);
      e && e.node && (t.cursorNode = e.node);
    }
    const u = es(o, r, t), i = Ra(r, t, n), a = Ja(i, t);
    if ((Fa.ensureAllCommentsPrinted(u), n > 0)) {
      const e = a.formatted.trim();
      (void 0 !== a.cursorNodeStart && (a.cursorNodeStart -= a.formatted.indexOf(e)), a.formatted = e + Xa(t.endOfLine));
    }
    if (t.cursorOffset >= 0) {
      let e, n, r, u, i;
      if ((t.cursorNode && a.cursorNodeText ? (e = t.locStart(t.cursorNode), n = o.slice(e, t.locEnd(t.cursorNode)), r = t.cursorOffset - e, u = a.cursorNodeStart, i = a.cursorNodeText) : (e = 0, n = o, r = t.cursorOffset, u = 0, i = a.formatted), n === i)) return {
        formatted: a.formatted,
        cursorOffset: u + r
      };
      const s = n.split("");
      s.splice(r, 0, Za);
      const c = i.split(""), l = J.diffArrays(s, c);
      let p = u;
      for (const e of l) if (e.removed) {
        if (e.value.includes(Za)) break;
      } else p += e.count;
      return {
        formatted: a.formatted,
        cursorOffset: p
      };
    }
    return {
      formatted: a.formatted,
      cursorOffset: -1
    };
  }
  function ns(e, t, n) {
    return "number" != typeof t || isNaN(t) || t < 0 || t > e.length ? n : t;
  }
  function rs(e, t) {
    let {cursorOffset: n, rangeStart: r, rangeEnd: o} = t;
    return (n = ns(e, n, -1), r = ns(e, r, 0), o = ns(e, o, e.length), Object.assign({}, t, {
      cursorOffset: n,
      rangeStart: r,
      rangeEnd: o
    }));
  }
  function os(e, t) {
    let {cursorOffset: n, rangeStart: r, rangeEnd: o, endOfLine: u} = rs(e, t);
    const i = "\ufeff" === e.charAt(0);
    if ((i && (e = e.slice(1), n--, r--, o--), "auto" === u && (u = Ga(e)), e.includes("\r"))) {
      const t = t => Ya(e.slice(0, Math.max(t, 0)), "\r\n");
      (n -= t(n), r -= t(r), o -= t(o), e = Ka(e));
    }
    return {
      hasBOM: i,
      text: e,
      options: rs(e, Object.assign({}, t, {
        cursorOffset: n,
        rangeStart: r,
        rangeEnd: o,
        endOfLine: u
      }))
    };
  }
  function us(e, t) {
    let {hasBOM: n, text: r, options: o} = os(e, Qa(t));
    const u = zi.resolveParser(o), i = !u.hasPragma || u.hasPragma(r);
    if (o.requirePragma && !i) return {
      formatted: e,
      cursorOffset: t.cursorOffset
    };
    let a;
    return (o.rangeStart > 0 || o.rangeEnd < r.length ? a = (function (e, t) {
      const {ast: n, text: r} = zi.parse(e, t), {rangeStart: o, rangeEnd: u} = Ua.calculateRange(r, t, n), i = r.slice(o, u), a = Math.min(o, r.lastIndexOf("\n", o) + 1), s = r.slice(a, o).match(/^\s*/)[0], c = Ha(s, t.tabWidth), l = ts(i, Object.assign({}, t, {
        rangeStart: 0,
        rangeEnd: 1 / 0,
        cursorOffset: t.cursorOffset > o && t.cursorOffset < u ? t.cursorOffset - o : -1,
        endOfLine: "lf"
      }), c), p = l.formatted.trimEnd();
      let {cursorOffset: d} = t;
      d >= u ? d = t.cursorOffset + (p.length - i.length) : l.cursorOffset >= 0 && (d = l.cursorOffset + o);
      let f = r.slice(0, o) + p + r.slice(u);
      if ("lf" !== t.endOfLine) {
        const e = Xa(t.endOfLine);
        (d >= 0 && "\r\n" === e && (d += Ya(f.slice(0, d), "\n")), f = f.replace(/\n/g, e));
      }
      return {
        formatted: f,
        cursorOffset: d
      };
    })(r, o) : (!i && o.insertPragma && o.printer.insertPragma && (r = o.printer.insertPragma(r)), a = ts(r, o)), n && (a.formatted = "\ufeff" + a.formatted, a.cursorOffset >= 0 && a.cursorOffset++), a);
  }
  var is = {
    formatWithCursor: us,
    parse(e, t, n) {
      const {text: r, options: o} = os(e, Qa(t)), u = zi.parse(r, o);
      return (n && (u.ast = Zi(u.ast, o)), u);
    },
    formatAST(e, t) {
      t = Qa(t);
      const n = Ra(e, t);
      return Ja(n, t);
    },
    formatDoc: (e, t) => us(za(e), Object.assign({}, t, {
      parser: "babel"
    })).formatted,
    printToDoc(e, t) {
      t = Qa(t);
      const {ast: n, text: r} = zi.parse(e, t);
      return (es(r, n, t), Ra(n, t));
    },
    printDocToString: (e, t) => Ja(e, Qa(t))
  };
  const {getMaxContinuousCount: as, getStringWidth: ss, getAlignmentSize: cs, getIndentSize: ls, skip: ps, skipWhitespace: ds, skipSpaces: fs, skipNewline: hs, skipToLineEnd: ms, skipEverythingButNewLine: gs, skipInlineComment: Ds, skipTrailingComment: ys, hasNewline: Es, hasNewlineInRange: Cs, hasSpaces: bs, isNextLineEmpty: vs, isNextLineEmptyAfterIndex: As, isPreviousLineEmpty: Fs, getNextNonSpaceNonCommentCharacterIndex: xs, makeString: Ss, addLeadingComment: ws, addDanglingComment: Ts, addTrailingComment: Bs} = Lt;
  var Ns = {
    getMaxContinuousCount: as,
    getStringWidth: ss,
    getAlignmentSize: cs,
    getIndentSize: ls,
    skip: ps,
    skipWhitespace: ds,
    skipSpaces: fs,
    skipNewline: hs,
    skipToLineEnd: ms,
    skipEverythingButNewLine: gs,
    skipInlineComment: Ds,
    skipTrailingComment: ys,
    hasNewline: Es,
    hasNewlineInRange: Cs,
    hasSpaces: bs,
    isNextLineEmpty: vs,
    isNextLineEmptyAfterIndex: As,
    isPreviousLineEmpty: Fs,
    getNextNonSpaceNonCommentCharacterIndex: xs,
    makeString: Ss,
    addLeadingComment: ws,
    addDanglingComment: Ts,
    addTrailingComment: Bs
  }, ks = function (t, n) {
    const {languageId: r} = t, o = e(t, ["languageId"]);
    return Object.assign({
      linguistLanguageId: r
    }, o, n(t));
  }, Ps = je(function (e) {
    !(function () {
      function t(e) {
        if (null == e) return !1;
        switch (e.type) {
          case "BlockStatement":
          case "BreakStatement":
          case "ContinueStatement":
          case "DebuggerStatement":
          case "DoWhileStatement":
          case "EmptyStatement":
          case "ExpressionStatement":
          case "ForInStatement":
          case "ForStatement":
          case "IfStatement":
          case "LabeledStatement":
          case "ReturnStatement":
          case "SwitchStatement":
          case "ThrowStatement":
          case "TryStatement":
          case "VariableDeclaration":
          case "WhileStatement":
          case "WithStatement":
            return !0;
        }
        return !1;
      }
      function n(e) {
        switch (e.type) {
          case "IfStatement":
            return null != e.alternate ? e.alternate : e.consequent;
          case "LabeledStatement":
          case "ForStatement":
          case "ForInStatement":
          case "WhileStatement":
          case "WithStatement":
            return e.body;
        }
        return null;
      }
      e.exports = {
        isExpression: function (e) {
          if (null == e) return !1;
          switch (e.type) {
            case "ArrayExpression":
            case "AssignmentExpression":
            case "BinaryExpression":
            case "CallExpression":
            case "ConditionalExpression":
            case "FunctionExpression":
            case "Identifier":
            case "Literal":
            case "LogicalExpression":
            case "MemberExpression":
            case "NewExpression":
            case "ObjectExpression":
            case "SequenceExpression":
            case "ThisExpression":
            case "UnaryExpression":
            case "UpdateExpression":
              return !0;
          }
          return !1;
        },
        isStatement: t,
        isIterationStatement: function (e) {
          if (null == e) return !1;
          switch (e.type) {
            case "DoWhileStatement":
            case "ForInStatement":
            case "ForStatement":
            case "WhileStatement":
              return !0;
          }
          return !1;
        },
        isSourceElement: function (e) {
          return t(e) || null != e && "FunctionDeclaration" === e.type;
        },
        isProblematicIfStatement: function (e) {
          var t;
          if ("IfStatement" !== e.type) return !1;
          if (null == e.alternate) return !1;
          t = e.consequent;
          do {
            if ("IfStatement" === t.type && null == t.alternate) return !0;
            t = n(t);
          } while (t);
          return !1;
        },
        trailingStatement: n
      };
    })();
  }), Os = je(function (e) {
    !(function () {
      var t, n, r, o, u, i;
      function a(e) {
        return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296) + String.fromCharCode((e - 65536) % 1024 + 56320);
      }
      for ((n = {
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
      }, t = {
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
        NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
      }, r = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279], o = new Array(128), i = 0); i < 128; ++i) o[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || 36 === i || 95 === i;
      for ((u = new Array(128), i = 0); i < 128; ++i) u[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || i >= 48 && i <= 57 || 36 === i || 95 === i;
      e.exports = {
        isDecimalDigit: function (e) {
          return 48 <= e && e <= 57;
        },
        isHexDigit: function (e) {
          return 48 <= e && e <= 57 || 97 <= e && e <= 102 || 65 <= e && e <= 70;
        },
        isOctalDigit: function (e) {
          return e >= 48 && e <= 55;
        },
        isWhiteSpace: function (e) {
          return 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || e >= 5760 && r.indexOf(e) >= 0;
        },
        isLineTerminator: function (e) {
          return 10 === e || 13 === e || 8232 === e || 8233 === e;
        },
        isIdentifierStartES5: function (e) {
          return e < 128 ? o[e] : n.NonAsciiIdentifierStart.test(a(e));
        },
        isIdentifierPartES5: function (e) {
          return e < 128 ? u[e] : n.NonAsciiIdentifierPart.test(a(e));
        },
        isIdentifierStartES6: function (e) {
          return e < 128 ? o[e] : t.NonAsciiIdentifierStart.test(a(e));
        },
        isIdentifierPartES6: function (e) {
          return e < 128 ? u[e] : t.NonAsciiIdentifierPart.test(a(e));
        }
      };
    })();
  }), Is = je(function (e) {
    !(function () {
      var t = Os;
      function n(e, t) {
        return !(!t && "yield" === e) && r(e, t);
      }
      function r(e, t) {
        if (t && (function (e) {
          switch (e) {
            case "implements":
            case "interface":
            case "package":
            case "private":
            case "protected":
            case "public":
            case "static":
            case "let":
              return !0;
            default:
              return !1;
          }
        })(e)) return !0;
        switch (e.length) {
          case 2:
            return "if" === e || "in" === e || "do" === e;
          case 3:
            return "var" === e || "for" === e || "new" === e || "try" === e;
          case 4:
            return "this" === e || "else" === e || "case" === e || "void" === e || "with" === e || "enum" === e;
          case 5:
            return "while" === e || "break" === e || "catch" === e || "throw" === e || "const" === e || "yield" === e || "class" === e || "super" === e;
          case 6:
            return "return" === e || "typeof" === e || "delete" === e || "switch" === e || "export" === e || "import" === e;
          case 7:
            return "default" === e || "finally" === e || "extends" === e;
          case 8:
            return "function" === e || "continue" === e || "debugger" === e;
          case 10:
            return "instanceof" === e;
          default:
            return !1;
        }
      }
      function o(e, t) {
        return "null" === e || "true" === e || "false" === e || n(e, t);
      }
      function u(e, t) {
        return "null" === e || "true" === e || "false" === e || r(e, t);
      }
      function i(e) {
        var n, r, o;
        if (0 === e.length) return !1;
        if ((o = e.charCodeAt(0), !t.isIdentifierStartES5(o))) return !1;
        for ((n = 1, r = e.length); n < r; ++n) if ((o = e.charCodeAt(n), !t.isIdentifierPartES5(o))) return !1;
        return !0;
      }
      function a(e) {
        var n, r, o, u, i;
        if (0 === e.length) return !1;
        for ((i = t.isIdentifierStartES6, n = 0, r = e.length); n < r; ++n) {
          if (55296 <= (o = e.charCodeAt(n)) && o <= 56319) {
            if (++n >= r) return !1;
            if (!(56320 <= (u = e.charCodeAt(n)) && u <= 57343)) return !1;
            o = 1024 * (o - 55296) + (u - 56320) + 65536;
          }
          if (!i(o)) return !1;
          i = t.isIdentifierPartES6;
        }
        return !0;
      }
      e.exports = {
        isKeywordES5: n,
        isKeywordES6: r,
        isReservedWordES5: o,
        isReservedWordES6: u,
        isRestrictedWord: function (e) {
          return "eval" === e || "arguments" === e;
        },
        isIdentifierNameES5: i,
        isIdentifierNameES6: a,
        isIdentifierES5: function (e, t) {
          return i(e) && !o(e, t);
        },
        isIdentifierES6: function (e, t) {
          return a(e) && !u(e, t);
        }
      };
    })();
  });
  const Ls = je(function (e, t) {
    (t.ast = Ps, t.code = Os, t.keyword = Is);
  }).keyword.isIdentifierNameES5, {getLast: Ms, hasNewline: js, hasNewlineInRange: _s, skipWhitespace: Rs} = Lt, {locStart: Vs, locEnd: $s, hasSameLocStart: qs} = ii, Ws = "(?:(?=.)\\s)", Us = new RegExp(("^").concat(Ws, "*:")), Js = new RegExp(("^").concat(Ws, "*::"));
  function zs(e, t) {
    if (!e || "object" != typeof e) return !1;
    if (Array.isArray(e)) return e.some(e => zs(e, t));
    const n = t(e);
    return "boolean" == typeof n ? n : Object.keys(e).some(n => zs(e[n], t));
  }
  function Hs(e) {
    return "AssignmentExpression" === e.type || "BinaryExpression" === e.type || "LogicalExpression" === e.type || "NGPipeExpression" === e.type || "ConditionalExpression" === e.type || "CallExpression" === e.type || "OptionalCallExpression" === e.type || "MemberExpression" === e.type || "OptionalMemberExpression" === e.type || "SequenceExpression" === e.type || "TaggedTemplateExpression" === e.type || "BindExpression" === e.type || "UpdateExpression" === e.type && !e.prefix || "TSAsExpression" === e.type || "TSNonNullExpression" === e.type;
  }
  function Gs(e) {
    return "Block" === e.type || "CommentBlock" === e.type || "MultiLine" === e.type;
  }
  const Xs = new Set(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);
  function Ys(e) {
    return e && Xs.has(e.type);
  }
  function Ks(e) {
    return "BooleanLiteral" === e.type || "DirectiveLiteral" === e.type || "Literal" === e.type || "NullLiteral" === e.type || "NumericLiteral" === e.type || "BigIntLiteral" === e.type || "DecimalLiteral" === e.type || "RegExpLiteral" === e.type || "StringLiteral" === e.type || "TemplateLiteral" === e.type || "TSTypeLiteral" === e.type || "JSXText" === e.type;
  }
  function Qs(e) {
    return "NumericLiteral" === e.type || "Literal" === e.type && "number" == typeof e.value;
  }
  function Zs(e) {
    return "StringLiteral" === e.type || "Literal" === e.type && "string" == typeof e.value;
  }
  function ec(e) {
    return "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type;
  }
  function tc(e) {
    return !("CallExpression" !== e.type && "OptionalCallExpression" !== e.type || "Identifier" !== e.callee.type || "async" !== e.callee.name && "inject" !== e.callee.name && "fakeAsync" !== e.callee.name);
  }
  function nc(e) {
    return "JSXElement" === e.type || "JSXFragment" === e.type;
  }
  function rc(e) {
    return "get" === e.kind || "set" === e.kind;
  }
  function oc(e) {
    return rc(e) || qs(e, e.value);
  }
  const uc = new Set(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
  const ic = new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"]);
  const ac = /^(skip|[fx]?(it|describe|test))$/;
  function sc(e) {
    return "CallExpression" === e.type || "OptionalCallExpression" === e.type;
  }
  const cc = new RegExp("([ \n\r\t]+)"), lc = new RegExp("[^ \n\r\t]");
  function pc(e) {
    return Ks(e) && (lc.test(mc(e)) || !(/\n/).test(mc(e)));
  }
  function dc(e, t) {
    if (nc(t)) return xc(t);
    return t.comments && t.comments.some(t => t.leading && js(e, $s(t)));
  }
  function fc(e) {
    return (/^(\d+|\d+\.\d+)$/).test(e);
  }
  function hc(e) {
    return e.quasis.some(e => e.value.raw.includes("\n"));
  }
  function mc(e) {
    return e.extra ? e.extra.raw : e.raw;
  }
  const gc = {
    "==": !0,
    "!=": !0,
    "===": !0,
    "!==": !0
  }, Dc = {
    "*": !0,
    "/": !0,
    "%": !0
  }, yc = {
    ">>": !0,
    ">>>": !0,
    "<<": !0
  };
  const Ec = {};
  function Cc(e) {
    return Ec[e];
  }
  [["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].forEach((e, t) => {
    e.forEach(e => {
      Ec[e] = t;
    });
  });
  const bc = new WeakMap();
  function vc(e) {
    if (bc.has(e)) return bc.get(e);
    const t = [];
    return (e.this && t.push(e.this), Array.isArray(e.parameters) ? t.push(...e.parameters) : Array.isArray(e.params) && t.push(...e.params), e.rest && t.push(e.rest), bc.set(e, t), t);
  }
  const Ac = new WeakMap();
  function Fc(e) {
    return "prettier-ignore" === e.value.trim();
  }
  function xc(e) {
    return e && (e.comments && e.comments.length > 0 && e.comments.some(e => Fc(e) && !e.unignore) || e.prettierIgnore);
  }
  function Sc(e) {
    return xc(e.getValue());
  }
  var wc = {
    classChildNeedsASIProtection: function (e) {
      if (e) {
        if (e.static || e.accessibility) return !1;
        if (!e.computed) {
          const t = e.key && e.key.name;
          if ("in" === t || "instanceof" === t) return !0;
        }
        switch (e.type) {
          case "ClassProperty":
          case "FieldDefinition":
          case "TSAbstractClassProperty":
            return e.computed;
          case "MethodDefinition":
          case "TSAbstractMethodDefinition":
          case "ClassMethod":
          case "ClassPrivateMethod":
            {
              const t = e.value ? e.value.async : e.async, n = e.value ? e.value.generator : e.generator;
              return !t && "get" !== e.kind && "set" !== e.kind && !(!e.computed && !n);
            }
          case "TSIndexSignature":
            return !0;
          default:
            return !1;
        }
      }
    },
    classPropMayCauseASIProblems: function (e) {
      const t = e.getNode();
      if ("ClassProperty" !== t.type && "FieldDefinition" !== t.type) return !1;
      const n = t.key && t.key.name;
      return !("static" !== n && "get" !== n && "set" !== n || t.value || t.typeAnnotation) || void 0;
    },
    getFunctionParameters: vc,
    iterateFunctionParametersPath: function (e, t) {
      const n = e.getValue();
      let r = 0;
      const o = e => t(e, r++);
      (n.this && e.call(o, "this"), Array.isArray(n.parameters) ? e.each(o, "parameters") : Array.isArray(n.params) && e.each(o, "params"), n.rest && e.call(o, "rest"));
    },
    getCallArguments: function (e) {
      if (Ac.has(e)) return Ac.get(e);
      const t = "ImportExpression" === e.type ? [e.source] : e.arguments;
      return (Ac.set(e, t), t);
    },
    iterateCallArgumentsPath: function (e, t) {
      "ImportExpression" === e.getValue().type ? e.call(e => t(e, 0), "source") : e.each(t, "arguments");
    },
    hasRestParameter: function (e) {
      if (e.rest) return !0;
      const t = vc(e);
      return t.length > 0 && "RestElement" === Ms(t).type;
    },
    getLeftSidePathName: function (e, t) {
      if (t.expressions) return ["expressions", 0];
      if (t.left) return ["left"];
      if (t.test) return ["test"];
      if (t.object) return ["object"];
      if (t.callee) return ["callee"];
      if (t.tag) return ["tag"];
      if (t.argument) return ["argument"];
      if (t.expression) return ["expression"];
      throw new Error("Unexpected node has no left side.");
    },
    getParentExportDeclaration: function (e) {
      const t = e.getParentNode();
      return "declaration" === e.getName() && Ys(t) ? t : null;
    },
    getTypeScriptMappedTypeModifier: function (e, t) {
      return "+" === e ? "+" + t : "-" === e ? "-" + t : t;
    },
    hasDanglingComments: function (e) {
      return e.comments && e.comments.some(e => !e.leading && !e.trailing);
    },
    hasFlowAnnotationComment: function (e) {
      return e && Gs(e[0]) && Js.test(e[0].value);
    },
    hasFlowShorthandAnnotationComment: function (e) {
      return e.extra && e.extra.parenthesized && e.trailingComments && Gs(e.trailingComments[0]) && Us.test(e.trailingComments[0].value);
    },
    hasLeadingComment: function (e) {
      return e.comments && e.comments.some(e => e.leading);
    },
    hasLeadingOwnLineComment: dc,
    hasNakedLeftSide: Hs,
    hasNewlineBetweenOrAfterDecorators: function (e, t) {
      return _s(t.originalText, Vs(e.decorators[0]), $s(Ms(e.decorators))) || js(t.originalText, $s(Ms(e.decorators)));
    },
    hasNgSideEffect: function (e) {
      return zs(e.getValue(), e => {
        switch (e.type) {
          case void 0:
            return !1;
          case "CallExpression":
          case "OptionalCallExpression":
          case "AssignmentExpression":
            return !0;
        }
      });
    },
    hasNode: zs,
    hasPrettierIgnore: function (e) {
      return Sc(e) || (function (e) {
        const t = e.getValue(), n = e.getParentNode();
        if (!(n && t && nc(t) && nc(n))) return !1;
        let r = null;
        for (let e = n.children.indexOf(t); e > 0; e--) {
          const t = n.children[e - 1];
          if ("JSXText" !== t.type || pc(t)) {
            r = t;
            break;
          }
        }
        return r && "JSXExpressionContainer" === r.type && "JSXEmptyExpression" === r.expression.type && r.expression.comments && r.expression.comments.some(e => Fc(e));
      })(e);
    },
    hasTrailingComment: function (e) {
      return e.comments && e.comments.some(e => e.trailing);
    },
    hasTrailingLineComment: function (e) {
      return e.comments && e.comments.some(e => e.trailing && !Gs(e));
    },
    hasIgnoreComment: Sc,
    hasNodeIgnoreComment: xc,
    identity: function (e) {
      return e;
    },
    isBinaryish: function (e) {
      return uc.has(e.type);
    },
    isBlockComment: Gs,
    isLineComment: function (e) {
      return "Line" === e.type || "CommentLine" === e.type || "SingleLine" === e.type || "HashbangComment" === e.type || "HTMLOpen" === e.type || "HTMLClose" === e.type;
    },
    isPrettierIgnoreComment: Fc,
    isCallOrOptionalCallExpression: sc,
    isEmptyJSXElement: function (e) {
      if (0 === e.children.length) return !0;
      if (e.children.length > 1) return !1;
      const t = e.children[0];
      return Ks(t) && !pc(t);
    },
    isExportDeclaration: Ys,
    isFlowAnnotationComment: function (e, t) {
      const n = Vs(t), r = Rs(e, $s(t));
      return !1 !== r && "/*" === e.slice(n, n + 2) && "*/" === e.slice(r, r + 2);
    },
    isFunctionCompositionArgs: function (e) {
      if (e.length <= 1) return !1;
      let t = 0;
      for (const n of e) if (ec(n)) {
        if ((t += 1, t > 1)) return !0;
      } else if (sc(n)) for (const e of n.arguments) if (ec(e)) return !0;
      return !1;
    },
    isFunctionNotation: oc,
    isFunctionOrArrowExpression: ec,
    isGetterOrSetter: rc,
    isJestEachTemplateLiteral: function (e, t) {
      const n = /^[fx]?(describe|it|test)$/;
      return "TaggedTemplateExpression" === t.type && t.quasi === e && "MemberExpression" === t.tag.type && "Identifier" === t.tag.property.type && "each" === t.tag.property.name && ("Identifier" === t.tag.object.type && n.test(t.tag.object.name) || "MemberExpression" === t.tag.object.type && "Identifier" === t.tag.object.property.type && ("only" === t.tag.object.property.name || "skip" === t.tag.object.property.name) && "Identifier" === t.tag.object.object.type && n.test(t.tag.object.object.name));
    },
    isJSXNode: nc,
    isJSXWhitespaceExpression: function (e) {
      return "JSXExpressionContainer" === e.type && Ks(e.expression) && " " === e.expression.value && !e.expression.comments;
    },
    isLastStatement: function (e) {
      const t = e.getParentNode();
      if (!t) return !0;
      const n = e.getValue(), r = (t.body || t.consequent).filter(e => "EmptyStatement" !== e.type);
      return r[r.length - 1] === n;
    },
    isLiteral: Ks,
    isLongCurriedCallExpression: function (e) {
      const t = e.getValue(), n = e.getParentNode();
      return sc(t) && sc(n) && n.callee === t && t.arguments.length > n.arguments.length && n.arguments.length > 0;
    },
    isSimpleCallArgument: function e(t, n) {
      if (n >= 2) return !1;
      const r = t => e(t, n + 1), o = "Literal" === t.type && ("regex" in t) && t.regex.pattern || "RegExpLiteral" === t.type && t.pattern;
      return !(o && o.length > 5) && ("Literal" === t.type || "BigIntLiteral" === t.type || "DecimalLiteral" === t.type || "BooleanLiteral" === t.type || "NullLiteral" === t.type || "NumericLiteral" === t.type || "RegExpLiteral" === t.type || "StringLiteral" === t.type || "Identifier" === t.type || "ThisExpression" === t.type || "Super" === t.type || "PrivateName" === t.type || "ArgumentPlaceholder" === t.type || "Import" === t.type || ("TemplateLiteral" === t.type ? t.expressions.every(r) : "ObjectExpression" === t.type ? t.properties.every(e => !e.computed && (e.shorthand || e.value && r(e.value))) : "ArrayExpression" === t.type ? t.elements.every(e => null === e || r(e)) : "ImportExpression" === t.type ? r(t.source) : "CallExpression" === t.type || "OptionalCallExpression" === t.type || "NewExpression" === t.type ? e(t.callee, n) && t.arguments.every(r) : "MemberExpression" === t.type || "OptionalMemberExpression" === t.type ? e(t.object, n) && e(t.property, n) : "UnaryExpression" !== t.type || "!" !== t.operator && "-" !== t.operator ? "TSNonNullExpression" === t.type && e(t.expression, n) : e(t.argument, n)));
    },
    isMeaningfulJSXText: pc,
    isMemberExpressionChain: function e(t) {
      return ("MemberExpression" === t.type || "OptionalMemberExpression" === t.type) && ("Identifier" === t.object.type || e(t.object));
    },
    isMemberish: function (e) {
      return "MemberExpression" === e.type || "OptionalMemberExpression" === e.type || "BindExpression" === e.type && Boolean(e.object);
    },
    isNgForOf: function (e, t, n) {
      return "NGMicrosyntaxKeyedExpression" === e.type && "of" === e.key.name && 1 === t && "NGMicrosyntaxLet" === n.body[0].type && null === n.body[0].value;
    },
    isNumericLiteral: Qs,
    isObjectType: function (e) {
      return "ObjectTypeAnnotation" === e.type || "TSTypeLiteral" === e.type;
    },
    isObjectTypePropertyAFunction: function (e) {
      return !("ObjectTypeProperty" !== e.type && "ObjectTypeInternalSlot" !== e.type || "FunctionTypeAnnotation" !== e.value.type || e.static || oc(e));
    },
    isSimpleType: function (e) {
      return !!e && (!("GenericTypeAnnotation" !== e.type && "TSTypeReference" !== e.type || e.typeParameters) || !!ic.has(e.type));
    },
    isSimpleNumber: fc,
    isSimpleTemplateLiteral: function (e) {
      let t = "expressions";
      "TSTemplateLiteralType" === e.type && (t = "types");
      const n = e[t];
      return 0 !== n.length && n.every(e => {
        if (e.comments) return !1;
        if ("Identifier" === e.type || "ThisExpression" === e.type) return !0;
        if ("MemberExpression" === e.type || "OptionalMemberExpression" === e.type) {
          let t = e;
          for (; "MemberExpression" === t.type || "OptionalMemberExpression" === t.type; ) {
            if ("Identifier" !== t.property.type && "Literal" !== t.property.type && "StringLiteral" !== t.property.type && "NumericLiteral" !== t.property.type) return !1;
            if ((t = t.object, t.comments)) return !1;
          }
          return "Identifier" === t.type || "ThisExpression" === t.type;
        }
        return !1;
      });
    },
    isStringLiteral: Zs,
    isStringPropSafeToUnquote: function (e, t) {
      return "json" !== t.parser && Zs(e.key) && mc(e.key).slice(1, -1) === e.key.value && (Ls(e.key.value) && !(("typescript" === t.parser || "babel-ts" === t.parser) && "ClassProperty" === e.type) || fc(e.key.value) && String(Number(e.key.value)) === e.key.value && ("babel" === t.parser || "espree" === t.parser || "meriyah" === t.parser));
    },
    isTemplateOnItsOwnLine: function (e, t) {
      return ("TemplateLiteral" === e.type && hc(e) || "TaggedTemplateExpression" === e.type && hc(e.quasi)) && !js(t, Vs(e), {
        backwards: !0
      });
    },
    isTestCall: function e(t, n) {
      if ("CallExpression" !== t.type) return !1;
      if (1 === t.arguments.length) {
        if (tc(t) && n && e(n)) return ec(t.arguments[0]);
        if ("Identifier" === (r = t).callee.type && (/^(before|after)(Each|All)$/).test(r.callee.name) && 1 === r.arguments.length) return tc(t.arguments[0]);
      } else if ((2 === t.arguments.length || 3 === t.arguments.length) && ("Identifier" === t.callee.type && ac.test(t.callee.name) || (function (e) {
        return ("MemberExpression" === e.callee.type || "OptionalMemberExpression" === e.callee.type) && "Identifier" === e.callee.object.type && "Identifier" === e.callee.property.type && ac.test(e.callee.object.name) && ("only" === e.callee.property.name || "skip" === e.callee.property.name);
      })(t)) && ((function (e) {
        return "TemplateLiteral" === e.type;
      })(t.arguments[0]) || Zs(t.arguments[0]))) return !(t.arguments[2] && !Qs(t.arguments[2])) && ((2 === t.arguments.length ? ec(t.arguments[1]) : (function (e) {
        return "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type && "BlockStatement" === e.body.type;
      })(t.arguments[1]) && vc(t.arguments[1]).length <= 1) || tc(t.arguments[1]));
      var r;
      return !1;
    },
    isTheOnlyJSXElementInMarkdown: function (e, t) {
      if ("markdown" !== e.parentParser && "mdx" !== e.parentParser) return !1;
      const n = t.getNode();
      if (!n.expression || !nc(n.expression)) return !1;
      const r = t.getParentNode();
      return "Program" === r.type && 1 === r.body.length;
    },
    isTSXFile: function (e) {
      return e.filepath && (/\.tsx$/i).test(e.filepath);
    },
    isTypeAnnotationAFunction: function (e) {
      return !("TypeAnnotation" !== e.type && "TSTypeAnnotation" !== e.type || "FunctionTypeAnnotation" !== e.typeAnnotation.type || e.static || qs(e, e.typeAnnotation));
    },
    matchJsxWhitespaceRegex: cc,
    needsHardlineAfterDanglingComment: function (e) {
      if (!e.comments) return !1;
      const t = Ms(e.comments.filter(e => !e.leading && !e.trailing));
      return t && !Gs(t);
    },
    rawText: mc,
    returnArgumentHasLeadingComment: function (e, t) {
      if (dc(e.originalText, t)) return !0;
      if (Hs(t)) {
        let r, o = t;
        for (; r = (n = o).expressions ? n.expressions[0] : n.left || n.test || n.callee || n.object || n.tag || n.argument || n.expression; ) if ((o = r, dc(e.originalText, o))) return !0;
      }
      var n;
      return !1;
    },
    shouldPrintComma: function (e, t = "es5") {
      return "es5" === e.trailingComma && "es5" === t || "all" === e.trailingComma && ("all" === t || "es5" === t);
    },
    isBitwiseOperator: function (e) {
      return !!yc[e] || "|" === e || "^" === e || "&" === e;
    },
    shouldFlatten: function (e, t) {
      return Cc(t) === Cc(e) && ("**" !== e && ((!gc[e] || !gc[t]) && (!("%" === t && Dc[e] || "%" === e && Dc[t]) && ((t === e || !Dc[t] || !Dc[e]) && (!yc[e] || !yc[t])))));
    },
    startsWithNoLookaheadToken: function e(t, n) {
      switch ((t = (function (e) {
            for (; e.left; ) e = e.left;
            return e;
          })(t)).type) {
        case "FunctionExpression":
        case "ClassExpression":
        case "DoExpression":
          return n;
        case "ObjectExpression":
          return !0;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return e(t.object, n);
        case "TaggedTemplateExpression":
          return "FunctionExpression" !== t.tag.type && e(t.tag, n);
        case "CallExpression":
        case "OptionalCallExpression":
          return "FunctionExpression" !== t.callee.type && e(t.callee, n);
        case "ConditionalExpression":
          return e(t.test, n);
        case "UpdateExpression":
          return !t.prefix && e(t.argument, n);
        case "BindExpression":
          return t.object && e(t.object, n);
        case "SequenceExpression":
          return e(t.expressions[0], n);
        case "TSAsExpression":
          return e(t.expression, n);
        default:
          return !1;
      }
    },
    getPrecedence: Cc
  };
  const {getLast: Tc, hasNewline: Bc, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: Nc, getNextNonSpaceNonCommentCharacter: kc, hasNewlineInRange: Pc, addLeadingComment: Oc, addTrailingComment: Ic, addDanglingComment: Lc, getNextNonSpaceNonCommentCharacterIndex: Mc} = Lt, {isBlockComment: jc, getFunctionParameters: _c, isPrettierIgnoreComment: Rc, isJSXNode: Vc, hasFlowShorthandAnnotationComment: $c, hasFlowAnnotationComment: qc, hasIgnoreComment: Wc} = wc, {locStart: Uc, locEnd: Jc} = ii;
  function zc(e, t) {
    const n = (e.body || e.properties).find(({type: e}) => "EmptyStatement" !== e);
    n ? Oc(n, t) : Lc(e, t);
  }
  function Hc(e, t) {
    "BlockStatement" === e.type ? zc(e, t) : Oc(e, t);
  }
  function Gc(e, t) {
    const {precedingNode: n, enclosingNode: r, followingNode: o} = e;
    if (!r || "IfStatement" !== r.type || !o) return !1;
    return ")" === kc(t, e, Jc) ? (Ic(n, e), !0) : n === r.consequent && o === r.alternate ? ("BlockStatement" === n.type ? Ic(n, e) : Lc(r, e), !0) : "BlockStatement" === o.type ? (zc(o, e), !0) : "IfStatement" === o.type ? (Hc(o.consequent, e), !0) : r.consequent === o && (Oc(o, e), !0);
  }
  function Xc(e, t) {
    const {precedingNode: n, enclosingNode: r, followingNode: o} = e;
    if (!r || "WhileStatement" !== r.type || !o) return !1;
    return ")" === kc(t, e, Jc) ? (Ic(n, e), !0) : "BlockStatement" === o.type ? (zc(o, e), !0) : r.body === o && (Oc(o, e), !0);
  }
  function Yc(e) {
    const {precedingNode: t, enclosingNode: n, followingNode: r} = e;
    return !(!n || "TryStatement" !== n.type && "CatchClause" !== n.type || !r) && ("CatchClause" === n.type && t ? (Ic(t, e), !0) : "BlockStatement" === r.type ? (zc(r, e), !0) : "TryStatement" === r.type ? (Hc(r.finalizer, e), !0) : "CatchClause" === r.type && (Hc(r.body, e), !0));
  }
  function Kc(e) {
    const {precedingNode: t, enclosingNode: n, followingNode: r} = e;
    if (n && ("ClassDeclaration" === n.type || "ClassExpression" === n.type || "DeclareClass" === n.type || "DeclareInterface" === n.type || "InterfaceDeclaration" === n.type || "TSInterfaceDeclaration" === n.type)) {
      if (n.decorators && n.decorators.length > 0 && (!r || "Decorator" !== r.type)) return (Ic(n.decorators[n.decorators.length - 1], e), !0);
      if (n.body && r === n.body) return (zc(n.body, e), !0);
      if (r) for (const o of ["implements", "extends", "mixins"]) if (n[o] && r === n[o][0]) return (!t || t !== n.id && t !== n.typeParameters && t !== n.superClass ? Lc(n, e, o) : Ic(t, e), !0);
    }
    return !1;
  }
  function Qc(e, t) {
    const {precedingNode: n, enclosingNode: r} = e;
    return (r && n && ("Property" === r.type || "TSDeclareMethod" === r.type || "TSAbstractMethodDefinition" === r.type) && "Identifier" === n.type && r.key === n && ":" !== kc(t, n, Jc) || !(!n || !r || "Decorator" !== n.type || "ClassMethod" !== r.type && "ClassProperty" !== r.type && "FieldDefinition" !== r.type && "TSAbstractClassProperty" !== r.type && "TSAbstractMethodDefinition" !== r.type && "TSDeclareMethod" !== r.type && "MethodDefinition" !== r.type)) && (Ic(n, e), !0);
  }
  function Zc(e, t) {
    const {precedingNode: n, enclosingNode: r, followingNode: o} = e;
    if (n && "FunctionTypeParam" === n.type && r && "FunctionTypeAnnotation" === r.type && o && "FunctionTypeParam" !== o.type) return (Ic(n, e), !0);
    if (n && ("Identifier" === n.type || "AssignmentPattern" === n.type) && r && ol(r) && ")" === kc(t, e, Jc)) return (Ic(n, e), !0);
    if (r && "FunctionDeclaration" === r.type && o && "BlockStatement" === o.type) {
      const n = (() => {
        const e = _c(r);
        if (0 !== e.length) return Nc(t, Jc(Tc(e)));
        const n = Nc(t, Jc(r.id));
        return !1 !== n && Nc(t, n + 1);
      })();
      if (Uc(e) > n) return (zc(o, e), !0);
    }
    return !1;
  }
  function el(e) {
    const {enclosingNode: t} = e;
    return !(!t || "ImportSpecifier" !== t.type) && (Oc(t, e), !0);
  }
  function tl(e) {
    const {enclosingNode: t} = e;
    return !(!t || "LabeledStatement" !== t.type) && (Oc(t, e), !0);
  }
  function nl(e, t, n) {
    const {enclosingNode: r} = e;
    return t && t.body && 0 === t.body.length ? (n ? Lc(t, e) : Oc(t, e), !0) : !(!r || "Program" !== r.type || 0 !== r.body.length || !r.directives || 0 !== r.directives.length) && (n ? Lc(r, e) : Oc(r, e), !0);
  }
  function rl(e) {
    const {enclosingNode: t, followingNode: n} = e;
    if (Rc(e) && t && "TSMappedType" === t.type && n && "TSTypeParameter" === n.type && n.constraint) return (t.prettierIgnore = !0, e.unignore = !0, !0);
  }
  function ol(e) {
    return "ArrowFunctionExpression" === e.type || "FunctionExpression" === e.type || "FunctionDeclaration" === e.type || "ObjectMethod" === e.type || "ClassMethod" === e.type || "TSDeclareFunction" === e.type || "TSCallSignatureDeclaration" === e.type || "TSConstructSignatureDeclaration" === e.type || "TSMethodSignature" === e.type || "TSConstructorType" === e.type || "TSFunctionType" === e.type || "TSDeclareMethod" === e.type;
  }
  function ul(e) {
    return jc(e) && "*" === e.value[0] && (/@type\b/).test(e.value);
  }
  var il = {
    handleOwnLineComment: function (e, t, n, r, o) {
      return rl(e) || Zc(e, t) || (function (e) {
        const {enclosingNode: t, followingNode: n} = e;
        if (t && ("MemberExpression" === t.type || "OptionalMemberExpression" === t.type) && n && "Identifier" === n.type) return (Oc(t, e), !0);
        return !1;
      })(e) || Gc(e, t) || Xc(e, t) || Yc(e) || Kc(e) || el(e) || (function (e) {
        const {enclosingNode: t} = e;
        if (t && ("ForInStatement" === t.type || "ForOfStatement" === t.type)) return (Oc(t, e), !0);
        return !1;
      })(e) || (function (e) {
        const {precedingNode: t, enclosingNode: n, followingNode: r} = e;
        if (n && ("UnionTypeAnnotation" === n.type || "TSUnionType" === n.type)) return (Rc(e) && (r.prettierIgnore = !0, e.unignore = !0), !!t && (Ic(t, e), !0));
        r && ("UnionTypeAnnotation" === r.type || "TSUnionType" === r.type) && Rc(e) && (r.types[0].prettierIgnore = !0, e.unignore = !0);
        return !1;
      })(e) || nl(e, r, o) || (function (e, t) {
        const {precedingNode: n, enclosingNode: r} = e;
        if (n && "ImportSpecifier" === n.type && r && "ImportDeclaration" === r.type && Bc(t, Jc(e))) return (Ic(n, e), !0);
        return !1;
      })(e, t) || (function (e) {
        const {enclosingNode: t} = e;
        if (t && "AssignmentPattern" === t.type) return (Oc(t, e), !0);
        return !1;
      })(e) || Qc(e, t) || tl(e);
    },
    handleEndOfLineComment: function (e, t, n, r, o) {
      return (function (e) {
        const {followingNode: t} = e;
        if (t && ul(e)) return (Oc(t, e), !0);
        return !1;
      })(e) || Zc(e, t) || (function (e, t) {
        const {precedingNode: n, enclosingNode: r, followingNode: o} = e, u = n && !Pc(t, Jc(n), Uc(e));
        if ((!n || !u) && r && ("ConditionalExpression" === r.type || "TSConditionalType" === r.type) && o) return (Oc(o, e), !0);
        return !1;
      })(e, t) || el(e) || Gc(e, t) || Xc(e, t) || Yc(e) || Kc(e) || tl(e) || (function (e) {
        const {precedingNode: t, enclosingNode: n} = e;
        if (n && ("CallExpression" === n.type || "OptionalCallExpression" === n.type) && t && n.callee === t && n.arguments.length > 0) return (Oc(n.arguments[0], e), !0);
        return !1;
      })(e) || (function (e) {
        const {enclosingNode: t} = e;
        if (t && ("Property" === t.type || "ObjectProperty" === t.type)) return (Oc(t, e), !0);
        return !1;
      })(e) || nl(e, r, o) || (function (e) {
        const {enclosingNode: t} = e;
        if (t && "TypeAlias" === t.type) return (Oc(t, e), !0);
        return !1;
      })(e) || (function (e) {
        const {enclosingNode: t, followingNode: n} = e;
        if (t && ("VariableDeclarator" === t.type || "AssignmentExpression" === t.type) && n && ("ObjectExpression" === n.type || "ArrayExpression" === n.type || "TemplateLiteral" === n.type || "TaggedTemplateExpression" === n.type || jc(e))) return (Oc(n, e), !0);
        return !1;
      })(e);
    },
    handleRemainingComment: function (e, t, n, r, o) {
      return !!(rl(e) || Gc(e, t) || Xc(e, t) || (function (e) {
        const {precedingNode: t, enclosingNode: n} = e;
        if (n && ("ObjectProperty" === n.type || "Property" === n.type) && n.shorthand && n.key === t && "AssignmentPattern" === n.value.type) return (Ic(n.value.left, e), !0);
        return !1;
      })(e) || (function (e, t) {
        if (")" !== kc(t, e, Jc)) return !1;
        const {enclosingNode: n} = e;
        if (n && (ol(n) && 0 === _c(n).length || ("CallExpression" === n.type || "OptionalCallExpression" === n.type || "NewExpression" === n.type) && 0 === n.arguments.length)) return (Lc(n, e), !0);
        if (n && "MethodDefinition" === n.type && 0 === _c(n.value).length) return (Lc(n.value, e), !0);
        return !1;
      })(e, t) || Qc(e, t) || nl(e, r, o) || (function (e, t) {
        const {enclosingNode: n} = e;
        if (!n || "ArrowFunctionExpression" !== n.type) return !1;
        const r = Mc(t, e, Jc);
        if (!1 !== r && "=>" === t.slice(r, r + 2)) return (Lc(n, e), !0);
        return !1;
      })(e, t) || (function (e, t) {
        if ("(" !== kc(t, e, Jc)) return !1;
        const {precedingNode: n, enclosingNode: r} = e;
        if (n && r && ("FunctionDeclaration" === r.type || "FunctionExpression" === r.type || "ClassMethod" === r.type || "MethodDefinition" === r.type || "ObjectMethod" === r.type)) return (Ic(n, e), !0);
        return !1;
      })(e, t) || (function (e) {
        const {precedingNode: t, enclosingNode: n, followingNode: r} = e;
        if (!n || "TSMappedType" !== n.type) return !1;
        if (r && "TSTypeParameter" === r.type && r.name) return (Oc(r.name, e), !0);
        if (t && "TSTypeParameter" === t.type && t.constraint) return (Ic(t.constraint, e), !0);
        return !1;
      })(e) || (function (e) {
        const {enclosingNode: t} = e;
        if (t && ("ContinueStatement" === t.type || "BreakStatement" === t.type) && !t.label) return (Ic(t, e), !0);
        return !1;
      })(e) || (function (e, t) {
        const {enclosingNode: n, followingNode: r} = e;
        if (!r && n && ("TSMethodSignature" === n.type || "TSDeclareFunction" === n.type || "TSAbstractMethodDefinition" === n.type) && ";" === kc(t, e, Jc)) return (Ic(n, e), !0);
        return !1;
      })(e, t));
    },
    hasLeadingComment: function (e, t = () => !0) {
      return e.leadingComments ? e.leadingComments.some(t) : !!e.comments && e.comments.some(e => e.leading && t(e));
    },
    isTypeCastComment: ul,
    getGapRegex: function (e) {
      if (e && "BinaryExpression" !== e.type && "LogicalExpression" !== e.type) return /^[\s&(|]*$/;
    },
    getCommentChildNodes: function (e, t) {
      if (("typescript" === t.parser || "flow" === t.parser || "espree" === t.parser || "meriyah" === t.parser) && "MethodDefinition" === e.type && e.value && "FunctionExpression" === e.value.type && 0 === _c(e.value).length && !e.value.returnType && (!e.value.typeParameters || 0 === e.value.typeParameters.length) && e.value.body) return [...e.decorators || [], e.key, e.value.body];
    },
    willPrintOwnComments: function (e) {
      const t = e.getValue(), n = e.getParentNode();
      return (t && (Vc(t) || $c(t) || n && ("CallExpression" === n.type || "OptionalCallExpression" === n.type) && (qc(t.leadingComments) || qc(t.trailingComments))) || n && ("JSXSpreadAttribute" === n.type || "JSXSpreadChild" === n.type || "UnionTypeAnnotation" === n.type || "TSUnionType" === n.type || ("ClassDeclaration" === n.type || "ClassExpression" === n.type) && n.superClass === t)) && (!Wc(e) || "UnionTypeAnnotation" === n.type || "TSUnionType" === n.type);
    }
  };
  const {getStringWidth: al, getIndentSize: sl} = Lt, {builders: {concat: cl, join: ll, hardline: pl, softline: dl, group: fl, indent: hl, align: ml, lineSuffixBoundary: gl, addAlignmentToDoc: Dl}, printer: {printDocToString: yl}, utils: {mapDoc: El}} = cn, {isBinaryish: Cl, isJestEachTemplateLiteral: bl, isSimpleTemplateLiteral: vl} = wc;
  function Al(e) {
    return e.replace(/([\\`]|\${)/g, "\\$1");
  }
  var Fl = {
    printTemplateLiteral: function (e, t, n) {
      const r = e.getValue();
      if ("TemplateLiteral" === r.type && bl(r, e.getParentNode())) {
        const r = (function (e, t, n) {
          const r = e.getNode(), o = r.quasis[0].value.raw.trim().split(/\s*\|\s*/);
          if (o.length > 1 || o.some(e => 0 !== e.length)) {
            t.__inJestEach = !0;
            const u = e.map(n, "expressions");
            t.__inJestEach = !1;
            const i = [], a = u.map(e => "${" + yl(e, Object.assign({}, t, {
              printWidth: 1 / 0,
              endOfLine: "lf"
            })).formatted + "}"), s = [{
              hasLineBreak: !1,
              cells: []
            }];
            for (let e = 1; e < r.quasis.length; e++) {
              const t = s[s.length - 1], n = a[e - 1];
              (t.cells.push(n), n.includes("\n") && (t.hasLineBreak = !0), r.quasis[e].value.raw.includes("\n") && s.push({
                hasLineBreak: !1,
                cells: []
              }));
            }
            const c = Math.max(o.length, ...s.map(e => e.cells.length)), l = Array.from({
              length: c
            }).fill(0), p = [{
              cells: o
            }, ...s.filter(e => 0 !== e.cells.length)];
            for (const {cells: e} of p.filter(e => !e.hasLineBreak)) e.forEach((e, t) => {
              l[t] = Math.max(l[t], al(e));
            });
            return (i.push(gl, "`", hl(cl([pl, ll(pl, p.map(e => ll(" | ", e.cells.map((t, n) => e.hasLineBreak ? t : t + (" ").repeat(l[n] - al(t))))))])), pl, "`"), cl(i));
          }
        })(e, n, t);
        if (r) return r;
      }
      let o = "expressions";
      "TSTemplateLiteralType" === r.type && (o = "types");
      const u = [];
      let i = e.map(t, o);
      const a = vl(r);
      return (a && (i = i.map(e => yl(e, Object.assign({}, n, {
        printWidth: 1 / 0
      })).formatted)), u.push(gl, "`"), e.each(e => {
        const s = e.getName();
        if ((u.push(t(e)), s < i.length)) {
          const {tabWidth: t} = n, c = e.getValue(), l = sl(c.value.raw, t);
          let p = i[s];
          if (!a) {
            const e = r[o][s];
            (e.comments && e.comments.length || "MemberExpression" === e.type || "OptionalMemberExpression" === e.type || "ConditionalExpression" === e.type || "SequenceExpression" === e.type || "TSAsExpression" === e.type || Cl(e)) && (p = cl([hl(cl([dl, p])), dl]));
          }
          const d = 0 === l && c.value.raw.endsWith("\n") ? ml(-1 / 0, p) : Dl(p, l, t);
          u.push(fl(cl(["${", d, gl, "}"])));
        }
      }, "quasis"), u.push("`"), cl(u));
    },
    printTemplateExpressions: function (e, t) {
      return e.map(e => (function (e, t) {
        const n = e.getValue();
        let r = t(e);
        return (n.comments && n.comments.length && (r = fl(cl([hl(cl([dl, r])), dl]))), cl(["${", r, gl, "}"]));
      })(e, t), "expressions");
    },
    escapeTemplateCharacters: function (e, t) {
      return El(e, e => {
        if (!e.parts) return e;
        const n = e.parts.map(e => "string" == typeof e ? t ? e.replace(/(\\*)`/g, "$1$1\\`") : Al(e) : e);
        return Object.assign({}, e, {
          parts: n
        });
      });
    },
    uncookTemplateElementValue: Al
  };
  const {builders: {indent: xl, softline: Sl, literalline: wl, concat: Tl, dedentToRoot: Bl}} = cn, {escapeTemplateCharacters: Nl} = Fl;
  var kl = function (e, t, n) {
    let r = e.getValue().quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, (e, t) => ("\\").repeat(t.length / 2) + "`");
    const o = (function (e) {
      const t = e.match(/^([^\S\n]*)\S/m);
      return null === t ? "" : t[1];
    })(r), u = "" !== o;
    u && (r = r.replace(new RegExp(("^").concat(o), "gm"), ""));
    const i = Nl(n(r, {
      parser: "markdown",
      __inJsTemplate: !0
    }, {
      stripTrailingHardline: !0
    }), !0);
    return Tl(["`", u ? xl(Tl([Sl, i])) : Tl([wl, Bl(i)]), Sl, "`"]);
  };
  const {builders: {indent: Pl, hardline: Ol, softline: Il, concat: Ll}, utils: {mapDoc: Ml, replaceNewlinesWithLiterallines: jl}} = cn, {printTemplateExpressions: _l} = Fl;
  var Rl = function (e, t, n) {
    const r = e.getValue(), o = r.quasis.map(e => e.value.raw);
    let u = 0;
    return (function (e, t, n) {
      if (1 === t.quasis.length && !t.quasis[0].value.raw.trim()) return "``";
      const r = (function (e, t) {
        if (!t || !t.length) return e;
        let n = 0;
        const r = Ml(e, e => {
          if (!e || !e.parts || !e.parts.length) return e;
          let {parts: r} = e;
          const o = r.indexOf("@"), u = o + 1;
          if (o > -1 && "string" == typeof r[u] && r[u].startsWith("prettier-placeholder")) {
            const e = r[o], t = r[u], n = r.slice(u + 1);
            r = r.slice(0, o).concat([e + t]).concat(n);
          }
          const i = [];
          return (r.forEach(e => {
            "string" == typeof e && e.includes("@prettier-placeholder") ? e.split(/@prettier-placeholder-(\d+)-id/).forEach((e, r) => {
              r % 2 != 0 ? (i.push(t[e]), n++) : i.push(jl(e));
            }) : i.push(e);
          }), Object.assign({}, e, {
            parts: i
          }));
        });
        return t.length === n ? r : null;
      })(e, n);
      if (!r) throw new Error("Couldn't insert all the expressions");
      return Ll(["`", Pl(Ll([Ol, r])), Il, "`"]);
    })(n(o.reduce((e, t, n) => 0 === n ? t : e + "@prettier-placeholder-" + u++ + "-id" + t, ""), {
      parser: "scss"
    }, {
      stripTrailingHardline: !0
    }), r, _l(e, t));
  };
  const {builders: {indent: Vl, join: $l, hardline: ql, concat: Wl}} = cn, {escapeTemplateCharacters: Ul, printTemplateExpressions: Jl} = Fl;
  function zl(e) {
    const t = [];
    let n = !1;
    return (e.map(e => e.trim()).forEach((e, r, o) => {
      "" !== e && ("" === o[r - 1] && n ? t.push(Wl([ql, e])) : t.push(e), n = !0);
    }), 0 === t.length ? null : $l(ql, t));
  }
  var Hl = function (e, t, n) {
    const r = e.getValue(), o = r.quasis.length;
    if (1 === o && "" === r.quasis[0].value.raw.trim()) return "``";
    const u = Jl(e, t), i = [];
    for (let e = 0; e < o; e++) {
      const t = 0 === e, a = e === o - 1, s = r.quasis[e].value.cooked, c = s.split("\n"), l = c.length, p = u[e], d = l > 2 && "" === c[0].trim() && "" === c[1].trim(), f = l > 2 && "" === c[l - 1].trim() && "" === c[l - 2].trim(), h = c.every(e => (/^\s*(?:#[^\n\r]*)?$/).test(e));
      if (!a && (/#[^\n\r]*$/).test(c[l - 1])) return null;
      let m = null;
      (m = h ? zl(c) : n(s, {
        parser: "graphql"
      }, {
        stripTrailingHardline: !0
      }), m ? (m = Ul(m, !1), !t && d && i.push(""), i.push(m), !a && f && i.push("")) : t || a || !d || i.push(""), p && i.push(p));
    }
    return Wl(["`", Vl(Wl([ql, $l(ql, i)])), ql, "`"]);
  };
  const {builders: {indent: Gl, line: Xl, hardline: Yl, concat: Kl, group: Ql}, utils: {mapDoc: Zl}} = cn, {printTemplateExpressions: ep, uncookTemplateElementValue: tp} = Fl;
  let np = 0;
  var rp = function (e, t, n, r, {parser: o}) {
    const u = e.getValue(), i = np;
    np = np + 1 >>> 0;
    const a = e => ("PRETTIER_HTML_PLACEHOLDER_").concat(e, "_").concat(i, "_IN_JS"), s = u.quasis.map((e, t, n) => t === n.length - 1 ? e.value.cooked : e.value.cooked + a(t)).join(""), c = ep(e, t);
    if (0 === c.length && 0 === s.trim().length) return "``";
    const l = new RegExp(a("(\\d+)"), "g");
    let p = 0;
    const d = n(s, {
      parser: o,
      __onHtmlRoot(e) {
        p = e.children.length;
      }
    }, {
      stripTrailingHardline: !0
    }), f = Zl(d, e => {
      if ("string" != typeof e) return e;
      const t = [], n = e.split(l);
      for (let e = 0; e < n.length; e++) {
        let o = n[e];
        if (e % 2 == 0) {
          o && (o = tp(o), r.embeddedInHtml && (o = o.replace(/<\/(script)\b/gi, "<\\/$1")), t.push(o));
          continue;
        }
        const u = +o;
        t.push(c[u]);
      }
      return Kl(t);
    }), h = (/^\s/).test(s) ? " " : "", m = (/\s$/).test(s) ? " " : "", g = "ignore" === r.htmlWhitespaceSensitivity ? Yl : h && m ? Xl : null;
    return Ql(Kl(g ? ["`", Gl(Kl([g, Ql(f)])), g, "`"] : ["`", h, p > 1 ? Gl(Ql(f)) : Ql(f), m, "`"]));
  };
  const {isBlockComment: op} = wc, {hasLeadingComment: up} = il;
  function ip(e) {
    return (function (e) {
      const t = e.getValue(), n = e.getParentNode(), r = e.getParentNode(1);
      return r && t.quasis && "JSXExpressionContainer" === n.type && "JSXElement" === r.type && "style" === r.openingElement.name.name && r.openingElement.attributes.some(e => "jsx" === e.name.name) || n && "TaggedTemplateExpression" === n.type && "Identifier" === n.tag.type && "css" === n.tag.name || n && "TaggedTemplateExpression" === n.type && "MemberExpression" === n.tag.type && "css" === n.tag.object.name && ("global" === n.tag.property.name || "resolve" === n.tag.property.name);
    })(e) || (function (e) {
      const t = e.getParentNode();
      if (!t || "TaggedTemplateExpression" !== t.type) return !1;
      const {tag: n} = t;
      switch (n.type) {
        case "MemberExpression":
          return sp(n.object) || cp(n);
        case "CallExpression":
          return sp(n.callee) || "MemberExpression" === n.callee.type && ("MemberExpression" === n.callee.object.type && (sp(n.callee.object.object) || cp(n.callee.object)) || "CallExpression" === n.callee.object.type && sp(n.callee.object.callee));
        case "Identifier":
          return "css" === n.name;
        default:
          return !1;
      }
    })(e) || (function (e) {
      const t = e.getParentNode(), n = e.getParentNode(1);
      return n && "JSXExpressionContainer" === t.type && "JSXAttribute" === n.type && "JSXIdentifier" === n.name.type && "css" === n.name.name;
    })(e) || (function (e) {
      return e.match(e => "TemplateLiteral" === e.type, (e, t) => "ArrayExpression" === e.type && "elements" === t, (e, t) => ("Property" === e.type || "ObjectProperty" === e.type) && "Identifier" === e.key.type && "styles" === e.key.name && "value" === t, ...ap);
    })(e) ? "css" : (function (e) {
      const t = e.getValue(), n = e.getParentNode();
      return lp(t, "GraphQL") || n && ("TaggedTemplateExpression" === n.type && ("MemberExpression" === n.tag.type && "graphql" === n.tag.object.name && "experimental" === n.tag.property.name || "Identifier" === n.tag.type && ("gql" === n.tag.name || "graphql" === n.tag.name)) || "CallExpression" === n.type && "Identifier" === n.callee.type && "graphql" === n.callee.name);
    })(e) ? "graphql" : (function (e) {
      return lp(e.getValue(), "HTML") || e.match(e => "TemplateLiteral" === e.type, (e, t) => "TaggedTemplateExpression" === e.type && "Identifier" === e.tag.type && "html" === e.tag.name && "quasi" === t);
    })(e) ? "html" : (function (e) {
      return e.match(e => "TemplateLiteral" === e.type, (e, t) => ("Property" === e.type || "ObjectProperty" === e.type) && "Identifier" === e.key.type && "template" === e.key.name && "value" === t, ...ap);
    })(e) ? "angular" : (function (e) {
      const t = e.getValue(), n = e.getParentNode();
      return n && "TaggedTemplateExpression" === n.type && 1 === t.quasis.length && "Identifier" === n.tag.type && ("md" === n.tag.name || "markdown" === n.tag.name);
    })(e) ? "markdown" : void 0;
  }
  const ap = [(e, t) => "ObjectExpression" === e.type && "properties" === t, (e, t) => "CallExpression" === e.type && "Identifier" === e.callee.type && "Component" === e.callee.name && "arguments" === t, (e, t) => "Decorator" === e.type && "expression" === t];
  function sp(e) {
    return "Identifier" === e.type && "styled" === e.name;
  }
  function cp(e) {
    return (/^[A-Z]/).test(e.object.name) && "extend" === e.property.name;
  }
  function lp(e, t) {
    return up(e, e => op(e) && e.value === (" ").concat(t, " "));
  }
  var pp = function (e, t, n, r) {
    const o = e.getValue();
    if ("TemplateLiteral" !== o.type || (function ({quasis: e}) {
      return e.some(({value: {cooked: e}}) => null === e);
    })(o)) return;
    const u = ip(e);
    return u ? "markdown" === u ? kl(e, t, n) : "css" === u ? Rl(e, t, n) : "graphql" === u ? Hl(e, t, n) : "html" === u || "angular" === u ? rp(e, t, n, r, {
      parser: u
    }) : void 0 : void 0;
  };
  const {isBlockComment: dp} = wc, fp = new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]);
  function hp(e, t, n) {
    if (("Program" === e.type && delete t.sourceType, "BigIntLiteral" !== e.type && "BigIntLiteralTypeAnnotation" !== e.type || t.value && (t.value = t.value.toLowerCase()), "BigIntLiteral" !== e.type && "Literal" !== e.type || t.bigint && (t.bigint = t.bigint.toLowerCase()), "DecimalLiteral" === e.type && (t.value = Number(t.value)), "EmptyStatement" === e.type)) return null;
    if ("JSXText" === e.type) return null;
    if ("JSXExpressionContainer" === e.type && ("Literal" === e.expression.type || "StringLiteral" === e.expression.type) && " " === e.expression.value) return null;
    if (("Property" !== e.type && "ObjectProperty" !== e.type && "MethodDefinition" !== e.type && "ClassProperty" !== e.type && "ClassMethod" !== e.type && "FieldDefinition" !== e.type && "TSDeclareMethod" !== e.type && "TSPropertySignature" !== e.type && "ObjectTypeProperty" !== e.type || "object" != typeof e.key || !e.key || "Literal" !== e.key.type && "NumericLiteral" !== e.key.type && "StringLiteral" !== e.key.type && "Identifier" !== e.key.type || delete t.key, "OptionalMemberExpression" === e.type && !1 === e.optional && (t.type = "MemberExpression", delete t.optional), "JSXElement" === e.type && "style" === e.openingElement.name.name && e.openingElement.attributes.some(e => "jsx" === e.name.name))) {
      t.children.filter(e => "JSXExpressionContainer" === e.type && "TemplateLiteral" === e.expression.type).map(e => e.expression).reduce((e, t) => e.concat(t.quasis), []).forEach(e => delete e.value);
    }
    ("JSXAttribute" === e.type && "css" === e.name.name && "JSXExpressionContainer" === e.value.type && "TemplateLiteral" === e.value.expression.type && t.value.expression.quasis.forEach(e => delete e.value), "JSXAttribute" === e.type && e.value && "Literal" === e.value.type && (/["']|&quot;|&apos;/).test(e.value.value) && (t.value.value = t.value.value.replace(/["']|&quot;|&apos;/g, '"')));
    const r = e.expression || e.callee;
    if ("Decorator" === e.type && "CallExpression" === r.type && "Component" === r.callee.name && 1 === r.arguments.length) {
      const n = e.expression.arguments[0].properties;
      t.expression.arguments[0].properties.forEach((e, t) => {
        let r = null;
        switch (n[t].key.name) {
          case "styles":
            "ArrayExpression" === e.value.type && (r = e.value.elements[0]);
            break;
          case "template":
            "TemplateLiteral" === e.value.type && (r = e.value);
        }
        r && r.quasis.forEach(e => delete e.value);
      });
    }
    if (("TaggedTemplateExpression" !== e.type || "MemberExpression" !== e.tag.type && ("Identifier" !== e.tag.type || "gql" !== e.tag.name && "graphql" !== e.tag.name && "css" !== e.tag.name && "md" !== e.tag.name && "markdown" !== e.tag.name && "html" !== e.tag.name) && "CallExpression" !== e.tag.type || t.quasi.quasis.forEach(e => delete e.value), "TemplateLiteral" === e.type)) {
      ((e.leadingComments && e.leadingComments.some(e => dp(e) && ["GraphQL", "HTML"].some(t => e.value === (" ").concat(t, " "))) || "CallExpression" === n.type && "graphql" === n.callee.name) && t.quasis.forEach(e => delete e.value), e.leadingComments || t.quasis.forEach(e => {
        e.value && delete e.value.cooked;
      }));
    }
    "InterpreterDirective" === e.type && (t.value = t.value.trimEnd());
  }
  hp.ignoredProperties = fp;
  var mp = hp;
  const gp = e => {
    if ("string" != typeof e) throw new TypeError("Expected a string");
    const t = e.match(/(?:\r?\n)/g) || [];
    if (0 === t.length) return;
    const n = t.filter(e => "\r\n" === e).length;
    return n > t.length - n ? "\r\n" : "\n";
  };
  var Dp = gp;
  Dp.graceful = e => "string" == typeof e && gp(e) || "\n";
  var yp = je(function (e, t) {
    function n() {
      const e = qr;
      return (n = function () {
        return e;
      }, e);
    }
    function r() {
      const e = (t = Dp) && t.__esModule ? t : {
        default: t
      };
      var t;
      return (r = function () {
        return e;
      }, e);
    }
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.extract = function (e) {
      const t = e.match(i);
      return t ? t[0].trimLeft() : "";
    }, t.strip = function (e) {
      const t = e.match(i);
      return t && t[0] ? e.substring(t[0].length) : e;
    }, t.parse = function (e) {
      return f(e).pragmas;
    }, t.parseWithComments = f, t.print = function ({comments: e = "", pragmas: t = {}}) {
      const o = (0, r().default)(e) || n().EOL, u = " *", i = Object.keys(t), a = i.map(e => h(e, t[e])).reduce((e, t) => e.concat(t), []).map(e => " * " + e + o).join("");
      if (!e) {
        if (0 === i.length) return "";
        if (1 === i.length && !Array.isArray(t[i[0]])) {
          const e = t[i[0]];
          return ("").concat("/**", " ").concat(h(i[0], e)[0]).concat(" */");
        }
      }
      const s = e.split(o).map(e => ("").concat(u, " ").concat(e)).join(o) + o;
      return "/**" + o + (e ? s : "") + (e && i.length ? u + o : "") + a + " */";
    });
    const o = /\*\/$/, u = /^\/\*\*/, i = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, a = /(^|\s+)\/\/([^\r\n]*)/g, s = /^(\r?\n)+/, c = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, l = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, p = /(\r?\n|^) *\* ?/g, d = [];
    function f(e) {
      const t = (0, r().default)(e) || n().EOL;
      e = e.replace(u, "").replace(o, "").replace(p, "$1");
      let i = "";
      for (; i !== e; ) (i = e, e = e.replace(c, ("").concat(t, "$1 $2").concat(t)));
      e = e.replace(s, "").trimRight();
      const f = Object.create(null), h = e.replace(l, "").replace(s, "").trimRight();
      let m;
      for (; m = l.exec(e); ) {
        const e = m[2].replace(a, "");
        "string" == typeof f[m[1]] || Array.isArray(f[m[1]]) ? f[m[1]] = d.concat(f[m[1]], e) : f[m[1]] = e;
      }
      return {
        comments: h,
        pragmas: f
      };
    }
    function h(e, t) {
      return d.concat(t).map(t => ("@").concat(e, " ").concat(t).trim());
    }
  });
  const {parseWithComments: Ep, strip: Cp, extract: bp, print: vp} = yp, {getShebang: Ap} = Lt, {normalizeEndOfLine: Fp} = Mt;
  function xp(e) {
    const t = Ap(e);
    t && (e = e.slice(t.length + 1));
    const n = bp(e), {pragmas: r, comments: o} = Ep(n);
    return {
      shebang: t,
      text: e,
      pragmas: r,
      comments: o
    };
  }
  var Sp = {
    hasPragma: function (e) {
      const t = Object.keys(xp(e).pragmas);
      return t.includes("prettier") || t.includes("format");
    },
    insertPragma: function (e) {
      const {shebang: t, text: n, pragmas: r, comments: o} = xp(e), u = Cp(n), i = vp({
        pragmas: Object.assign({
          format: ""
        }, r),
        comments: o.trimStart()
      });
      return (t ? ("").concat(t, "\n") : "") + Fp(i) + (u.startsWith("\n") ? "\n" : "\n\n") + u;
    }
  };
  const {getFunctionParameters: wp, getLeftSidePathName: Tp, hasFlowShorthandAnnotationComment: Bp, hasNakedLeftSide: Np, hasNode: kp, isBitwiseOperator: Pp, startsWithNoLookaheadToken: Op, shouldFlatten: Ip, getPrecedence: Lp} = wc;
  function Mp(e, t) {
    const n = e.getParentNode();
    if (!n) return !1;
    const r = e.getName(), o = e.getNode();
    if (t.__isInHtmlInterpolation && !t.bracketSpacing && (function (e) {
      switch (e.type) {
        case "ObjectExpression":
          return !0;
        default:
          return !1;
      }
    })(o) && jp(e)) return !0;
    if ((function (e) {
      return "BlockStatement" === e.type || "BreakStatement" === e.type || "ClassBody" === e.type || "ClassDeclaration" === e.type || "ClassMethod" === e.type || "ClassProperty" === e.type || "FieldDefinition" === e.type || "ClassPrivateProperty" === e.type || "ContinueStatement" === e.type || "DebuggerStatement" === e.type || "DeclareClass" === e.type || "DeclareExportAllDeclaration" === e.type || "DeclareExportDeclaration" === e.type || "DeclareFunction" === e.type || "DeclareInterface" === e.type || "DeclareModule" === e.type || "DeclareModuleExports" === e.type || "DeclareVariable" === e.type || "DoWhileStatement" === e.type || "EnumDeclaration" === e.type || "ExportAllDeclaration" === e.type || "ExportDefaultDeclaration" === e.type || "ExportNamedDeclaration" === e.type || "ExpressionStatement" === e.type || "ForInStatement" === e.type || "ForOfStatement" === e.type || "ForStatement" === e.type || "FunctionDeclaration" === e.type || "IfStatement" === e.type || "ImportDeclaration" === e.type || "InterfaceDeclaration" === e.type || "LabeledStatement" === e.type || "MethodDefinition" === e.type || "ReturnStatement" === e.type || "SwitchStatement" === e.type || "ThrowStatement" === e.type || "TryStatement" === e.type || "TSDeclareFunction" === e.type || "TSEnumDeclaration" === e.type || "TSImportEqualsDeclaration" === e.type || "TSInterfaceDeclaration" === e.type || "TSModuleDeclaration" === e.type || "TSNamespaceExportDeclaration" === e.type || "TypeAlias" === e.type || "VariableDeclaration" === e.type || "WhileStatement" === e.type || "WithStatement" === e.type;
    })(o)) return !1;
    if ("flow" !== t.parser && Bp(e.getValue())) return !0;
    if ("Identifier" === o.type) return !!(o.extra && o.extra.parenthesized && (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/).test(o.name));
    switch (n.type) {
      case "ParenthesizedExpression":
        return !1;
      case "ClassDeclaration":
      case "ClassExpression":
        if ("superClass" === r && ("ArrowFunctionExpression" === o.type || "AssignmentExpression" === o.type || "AwaitExpression" === o.type || "BinaryExpression" === o.type || "ConditionalExpression" === o.type || "LogicalExpression" === o.type || "NewExpression" === o.type || "ObjectExpression" === o.type || "ParenthesizedExpression" === o.type || "SequenceExpression" === o.type || "TaggedTemplateExpression" === o.type || "UnaryExpression" === o.type || "UpdateExpression" === o.type || "YieldExpression" === o.type)) return !0;
        break;
      case "ExportDefaultDeclaration":
        return _p(e, t) || "SequenceExpression" === o.type;
      case "Decorator":
        if ("expression" === r) {
          let e = !1, t = !1, n = o;
          for (; n; ) switch (n.type) {
            case "MemberExpression":
              (t = !0, n = n.object);
              break;
            case "CallExpression":
              if (t || e) return !0;
              (e = !0, n = n.callee);
              break;
            case "Identifier":
              return !1;
            default:
              return !0;
          }
          return !0;
        }
        break;
      case "ExpressionStatement":
        if (Op(o, !0)) return !0;
        break;
      case "ArrowFunctionExpression":
        if ("body" === r && "SequenceExpression" !== o.type && Op(o, !1)) return !0;
    }
    switch (o.type) {
      case "SpreadElement":
      case "SpreadProperty":
        return "object" === r && "MemberExpression" === n.type;
      case "UpdateExpression":
        if ("UnaryExpression" === n.type) return o.prefix && ("++" === o.operator && "+" === n.operator || "--" === o.operator && "-" === n.operator);
      case "UnaryExpression":
        switch (n.type) {
          case "UnaryExpression":
            return o.operator === n.operator && ("+" === o.operator || "-" === o.operator);
          case "BindExpression":
            return !0;
          case "MemberExpression":
          case "OptionalMemberExpression":
            return "object" === r;
          case "TaggedTemplateExpression":
            return !0;
          case "NewExpression":
          case "CallExpression":
          case "OptionalCallExpression":
            return "callee" === r;
          case "BinaryExpression":
            return "left" === r && "**" === n.operator;
          case "TSNonNullExpression":
            return !0;
          default:
            return !1;
        }
      case "BinaryExpression":
        if ("UpdateExpression" === n.type || "PipelineTopicExpression" === n.type && "|>" === o.operator) return !0;
        if ("in" === o.operator && (function (e) {
          let t = 0, n = e.getValue();
          for (; n; ) {
            const r = e.getParentNode(t++);
            if (r && "ForStatement" === r.type && r.init === n) return !0;
            n = r;
          }
          return !1;
        })(e)) return !0;
        if ("|>" === o.operator && o.extra && o.extra.parenthesized) {
          const t = e.getParentNode(1);
          if ("BinaryExpression" === t.type && "|>" === t.operator) return !0;
        }
      case "TSTypeAssertion":
      case "TSAsExpression":
      case "LogicalExpression":
        switch (n.type) {
          case "ConditionalExpression":
            return "TSAsExpression" === o.type;
          case "CallExpression":
          case "NewExpression":
          case "OptionalCallExpression":
            return "callee" === r;
          case "ClassExpression":
          case "ClassDeclaration":
            return "superClass" === r;
          case "TSTypeAssertion":
          case "TaggedTemplateExpression":
          case "UnaryExpression":
          case "JSXSpreadAttribute":
          case "SpreadElement":
          case "SpreadProperty":
          case "BindExpression":
          case "AwaitExpression":
          case "TSAsExpression":
          case "TSNonNullExpression":
          case "UpdateExpression":
            return !0;
          case "MemberExpression":
          case "OptionalMemberExpression":
            return "object" === r;
          case "AssignmentExpression":
            return "left" === r && ("TSTypeAssertion" === o.type || "TSAsExpression" === o.type);
          case "LogicalExpression":
            if ("LogicalExpression" === o.type) return n.operator !== o.operator;
          case "BinaryExpression":
            {
              const {operator: e, type: t} = o;
              if (!e && "TSTypeAssertion" !== t) return !0;
              const u = Lp(e), i = n.operator, a = Lp(i);
              return a > u || ("right" === r && a === u || (a === u && !Ip(i, e) || (a < u && "%" === e ? "+" === i || "-" === i : !!Pp(i))));
            }
          default:
            return !1;
        }
      case "SequenceExpression":
        switch (n.type) {
          case "ReturnStatement":
          case "ForStatement":
            return !1;
          case "ExpressionStatement":
            return "expression" !== r;
          case "ArrowFunctionExpression":
            return "body" !== r;
          default:
            return !0;
        }
      case "YieldExpression":
        if ("UnaryExpression" === n.type || "AwaitExpression" === n.type || "TSAsExpression" === n.type || "TSNonNullExpression" === n.type) return !0;
      case "AwaitExpression":
        switch (n.type) {
          case "TaggedTemplateExpression":
          case "UnaryExpression":
          case "LogicalExpression":
          case "SpreadElement":
          case "SpreadProperty":
          case "TSAsExpression":
          case "TSNonNullExpression":
          case "BindExpression":
            return !0;
          case "MemberExpression":
          case "OptionalMemberExpression":
            return "object" === r;
          case "NewExpression":
          case "CallExpression":
          case "OptionalCallExpression":
            return "callee" === r;
          case "ConditionalExpression":
            return "test" === r;
          case "BinaryExpression":
            return !(!o.argument && "|>" === n.operator);
          default:
            return !1;
        }
      case "TSJSDocFunctionType":
      case "TSConditionalType":
        if ("extendsType" === r && "TSConditionalType" === n.type) return !0;
      case "TSFunctionType":
      case "TSConstructorType":
        if ("checkType" === r && "TSConditionalType" === n.type) return !0;
      case "TSUnionType":
      case "TSIntersectionType":
        if ("TSUnionType" === n.type || "TSIntersectionType" === n.type) return !0;
      case "TSInferType":
        if ("TSInferType" === o.type && "TSRestType" === n.type) return !1;
      case "TSTypeOperator":
        return "TSArrayType" === n.type || "TSOptionalType" === n.type || "TSRestType" === n.type || "objectType" === r && "TSIndexedAccessType" === n.type || "TSTypeOperator" === n.type || "TSTypeAnnotation" === n.type && (/^TSJSDoc/).test(e.getParentNode(1).type);
      case "ArrayTypeAnnotation":
        return "NullableTypeAnnotation" === n.type;
      case "IntersectionTypeAnnotation":
      case "UnionTypeAnnotation":
        return "ArrayTypeAnnotation" === n.type || "NullableTypeAnnotation" === n.type || "IntersectionTypeAnnotation" === n.type || "UnionTypeAnnotation" === n.type;
      case "NullableTypeAnnotation":
        return "ArrayTypeAnnotation" === n.type;
      case "FunctionTypeAnnotation":
        {
          const t = "NullableTypeAnnotation" === n.type ? e.getParentNode(1) : n;
          return "UnionTypeAnnotation" === t.type || "IntersectionTypeAnnotation" === t.type || "ArrayTypeAnnotation" === t.type || "NullableTypeAnnotation" === t.type || "FunctionTypeParam" === n.type && null === n.name && wp(o).some(e => e.typeAnnotation && "NullableTypeAnnotation" === e.typeAnnotation.type);
        }
      case "StringLiteral":
      case "NumericLiteral":
      case "Literal":
        if ("string" == typeof o.value && "ExpressionStatement" === n.type && !n.directive) {
          const t = e.getParentNode(1);
          return "Program" === t.type || "BlockStatement" === t.type;
        }
        return "object" === r && "MemberExpression" === n.type && "number" == typeof o.value;
      case "AssignmentExpression":
        {
          const t = e.getParentNode(1);
          return "body" === r && "ArrowFunctionExpression" === n.type || ("key" !== r || "ClassProperty" !== n.type && "FieldDefinition" !== n.type || !n.computed) && (("init" !== r && "update" !== r || "ForStatement" !== n.type) && ("ExpressionStatement" === n.type ? "ObjectPattern" === o.left.type : ("key" !== r || "TSPropertySignature" !== n.type) && ("AssignmentExpression" !== n.type && (("SequenceExpression" !== n.type || !t || "ForStatement" !== t.type || t.init !== n && t.update !== n) && (("value" !== r || "Property" !== n.type || !t || "ObjectPattern" !== t.type || !t.properties.includes(n)) && "NGChainedExpression" !== n.type)))));
        }
      case "ConditionalExpression":
        switch (n.type) {
          case "TaggedTemplateExpression":
          case "UnaryExpression":
          case "SpreadElement":
          case "SpreadProperty":
          case "BinaryExpression":
          case "LogicalExpression":
          case "NGPipeExpression":
          case "ExportDefaultDeclaration":
          case "AwaitExpression":
          case "JSXSpreadAttribute":
          case "TSTypeAssertion":
          case "TypeCastExpression":
          case "TSAsExpression":
          case "TSNonNullExpression":
            return !0;
          case "NewExpression":
          case "CallExpression":
          case "OptionalCallExpression":
            return "callee" === r;
          case "ConditionalExpression":
            return "test" === r;
          case "MemberExpression":
          case "OptionalMemberExpression":
            return "object" === r;
          default:
            return !1;
        }
      case "FunctionExpression":
        switch (n.type) {
          case "NewExpression":
          case "CallExpression":
          case "OptionalCallExpression":
            return "callee" === r;
          case "TaggedTemplateExpression":
            return !0;
          default:
            return !1;
        }
      case "ArrowFunctionExpression":
        switch (n.type) {
          case "PipelineTopicExpression":
            return !(!o.extra || !o.extra.parenthesized);
          case "BinaryExpression":
            return "|>" !== n.operator || o.extra && o.extra.parenthesized;
          case "NewExpression":
          case "CallExpression":
          case "OptionalCallExpression":
            return "callee" === r;
          case "MemberExpression":
          case "OptionalMemberExpression":
            return "object" === r;
          case "TSAsExpression":
          case "BindExpression":
          case "TaggedTemplateExpression":
          case "UnaryExpression":
          case "LogicalExpression":
          case "AwaitExpression":
          case "TSTypeAssertion":
            return !0;
          case "ConditionalExpression":
            return "test" === r;
          default:
            return !1;
        }
      case "ClassExpression":
        switch (n.type) {
          case "NewExpression":
            return "callee" === r;
          default:
            return !1;
        }
      case "OptionalMemberExpression":
      case "OptionalCallExpression":
        {
          const t = e.getParentNode(1);
          if ("object" === r && "MemberExpression" === n.type || "callee" === r && ("CallExpression" === n.type || "NewExpression" === n.type) || "TSNonNullExpression" === n.type && "MemberExpression" === t.type && t.object === n) return !0;
        }
      case "CallExpression":
      case "MemberExpression":
      case "TaggedTemplateExpression":
      case "TSNonNullExpression":
        if ("callee" === r && ("BindExpression" === n.type || "NewExpression" === n.type)) {
          let e = o;
          for (; e; ) switch (e.type) {
            case "CallExpression":
            case "OptionalCallExpression":
              return !0;
            case "MemberExpression":
            case "OptionalMemberExpression":
            case "BindExpression":
              e = e.object;
              break;
            case "TaggedTemplateExpression":
              e = e.tag;
              break;
            case "TSNonNullExpression":
              e = e.expression;
              break;
            default:
              return !1;
          }
        }
        return !1;
      case "BindExpression":
        return "callee" === r && ("BindExpression" === n.type || "NewExpression" === n.type) || "object" === r && ("MemberExpression" === n.type || "OptionalMemberExpression" === n.type);
      case "NGPipeExpression":
        return !("NGRoot" === n.type || "NGMicrosyntaxExpression" === n.type || !("ObjectProperty" !== n.type || o.extra && o.extra.parenthesized) || "ArrayExpression" === n.type || ("CallExpression" === n.type || "OptionalCallExpression" === n.type) && n.arguments[r] === o || "right" === r && "NGPipeExpression" === n.type || "property" === r && "MemberExpression" === n.type || "AssignmentExpression" === n.type);
      case "JSXFragment":
      case "JSXElement":
        return "callee" === r || "left" === r && "BinaryExpression" === n.type && "<" === n.operator || "ArrayExpression" !== n.type && "ArrowFunctionExpression" !== n.type && "AssignmentExpression" !== n.type && "AssignmentPattern" !== n.type && "BinaryExpression" !== n.type && "CallExpression" !== n.type && "NewExpression" !== n.type && "ConditionalExpression" !== n.type && "ExpressionStatement" !== n.type && "JsExpressionRoot" !== n.type && "JSXAttribute" !== n.type && "JSXElement" !== n.type && "JSXExpressionContainer" !== n.type && "JSXFragment" !== n.type && "LogicalExpression" !== n.type && "ObjectProperty" !== n.type && "OptionalCallExpression" !== n.type && "Property" !== n.type && "ReturnStatement" !== n.type && "ThrowStatement" !== n.type && "TypeCastExpression" !== n.type && "VariableDeclarator" !== n.type && "YieldExpression" !== n.type;
      case "TypeAnnotation":
        return "returnType" === r && "ArrowFunctionExpression" === n.type && (function (e) {
          return kp(e, e => "ObjectTypeAnnotation" === e.type && kp(e, e => "FunctionTypeAnnotation" === e.type || void 0) || void 0);
        })(o);
    }
    return !1;
  }
  function jp(e) {
    const t = e.getValue(), n = e.getParentNode(), r = e.getName();
    switch (n.type) {
      case "NGPipeExpression":
        if ("number" == typeof r && n.arguments[r] === t && n.arguments.length - 1 === r) return e.callParent(jp);
        break;
      case "ObjectProperty":
        if ("value" === r) {
          const t = e.getParentNode(1);
          return t.properties[t.properties.length - 1] === n;
        }
        break;
      case "BinaryExpression":
      case "LogicalExpression":
        if ("right" === r) return e.callParent(jp);
        break;
      case "ConditionalExpression":
        if ("alternate" === r) return e.callParent(jp);
        break;
      case "UnaryExpression":
        if (n.prefix) return e.callParent(jp);
    }
    return !1;
  }
  function _p(e, t) {
    const n = e.getValue(), r = e.getParentNode();
    return "FunctionExpression" === n.type || "ClassExpression" === n.type ? "ExportDefaultDeclaration" === r.type || !Mp(e, t) : !(!Np(n) || "ExportDefaultDeclaration" !== r.type && Mp(e, t)) && e.call(e => _p(e, t), ...Tp(e, n));
  }
  var Rp = Mp;
  const {builders: {concat: Vp, join: $p, line: qp, group: Wp, softline: Up, indent: Jp}} = cn;
  var zp = {
    isVueEventBindingExpression: function e(t) {
      switch (t.type) {
        case "MemberExpression":
          switch (t.property.type) {
            case "Identifier":
            case "NumericLiteral":
            case "StringLiteral":
              return e(t.object);
          }
          return !1;
        case "Identifier":
          return !0;
        default:
          return !1;
      }
    },
    printHtmlBinding: function (e, t, n) {
      const r = e.getValue();
      if ((t.__onHtmlBindingRoot && null === e.getName() && t.__onHtmlBindingRoot(r, t), "File" === r.type)) return t.__isVueForBindingLeft ? e.call(e => {
        const t = $p(Vp([",", qp]), e.map(n, "params")), {params: r} = e.getValue();
        return 1 === r.length ? t : Vp(["(", Jp(Vp([Up, Wp(t)])), Up, ")"]);
      }, "program", "body", 0) : t.__isVueBindings ? e.call(e => $p(Vp([",", qp]), e.map(n, "params")), "program", "body", 0) : void 0;
    }
  };
  var Hp = function (e, t) {
    switch (t.parser) {
      case "json":
      case "json5":
      case "json-stringify":
      case "__js_expression":
      case "__vue_expression":
        return Object.assign({}, e, {
          type: t.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot",
          node: e,
          comments: [],
          rootMarker: t.rootMarker
        });
      default:
        return e;
    }
  };
  const {builders: {concat: Gp, group: Xp, indent: Yp, join: Kp, line: Qp, hardline: Zp}} = cn, {hasNewlineBetweenOrAfterDecorators: ed, getParentExportDeclaration: td} = wc;
  var nd = {
    printOptionalToken: function (e) {
      const t = e.getValue();
      return !t.optional || "Identifier" === t.type && t === e.getParentNode().key ? "" : "OptionalCallExpression" === t.type || "OptionalMemberExpression" === t.type && t.computed ? "?." : "?";
    },
    printFunctionTypeParameters: function (e, t, n) {
      const r = e.getValue();
      return r.typeArguments ? e.call(n, "typeArguments") : r.typeParameters ? e.call(n, "typeParameters") : "";
    },
    printBindExpressionCallee: function (e, t, n) {
      return Gp(["::", e.call(n, "callee")]);
    },
    printTypeScriptModifiers: function (e, t, n) {
      const r = e.getValue();
      return r.modifiers && r.modifiers.length ? Gp([Kp(" ", e.map(n, "modifiers")), " "]) : "";
    },
    printDecorators: function (e, t, n) {
      const r = e.getValue();
      return Xp(Gp([Kp(Qp, e.map(n, "decorators")), ed(r, t) ? Zp : Qp]));
    },
    printFlowDeclaration: function (e, t) {
      const n = td(e);
      return n ? (ta.strictEqual(n.type, "DeclareExportDeclaration"), t) : Gp(["declare ", t]);
    },
    adjustClause: function (e, t, n) {
      return "EmptyStatement" === e.type ? ";" : "BlockStatement" === e.type || n ? Gp([" ", t]) : Yp(Gp([Qp, t]));
    }
  };
  const {builders: {concat: rd, softline: od, group: ud, indent: id, join: ad, line: sd, ifBreak: cd, hardline: ld}} = cn, {printDanglingComments: pd} = Fa, {hasDanglingComments: dd, shouldPrintComma: fd, needsHardlineAfterDanglingComment: hd} = wc, {locStart: md, hasSameLoc: gd} = ii;
  function Dd(e, t, n) {
    const r = e.getValue();
    if (!r.source) return "";
    const o = [];
    return (Ed(r, t) || o.push(" from"), o.push(" ", e.call(n, "source")), rd(o));
  }
  function yd(e, t, n) {
    const r = e.getValue();
    if (Ed(r, t)) return "";
    const o = [" "];
    if (r.specifiers && r.specifiers.length > 0) {
      const u = [], i = [];
      if ((e.each(t => {
        const r = e.getValue().type;
        if ("ExportNamespaceSpecifier" === r || "ExportDefaultSpecifier" === r || "ImportNamespaceSpecifier" === r || "ImportDefaultSpecifier" === r) u.push(n(t)); else {
          if ("ExportSpecifier" !== r && "ImportSpecifier" !== r) throw new Error(("Unknown specifier type ").concat(JSON.stringify(r)));
          i.push(n(t));
        }
      }, "specifiers"), o.push(ad(", ", u)), 0 !== i.length)) {
        0 !== u.length && o.push(", ");
        i.length > 1 || u.length > 0 || r.specifiers.some(e => e.comments) ? o.push(ud(rd(["{", id(rd([t.bracketSpacing ? sd : od, ad(rd([",", sd]), i)])), cd(fd(t) ? "," : ""), t.bracketSpacing ? sd : od, "}"]))) : o.push(rd(["{", t.bracketSpacing ? " " : "", rd(i), t.bracketSpacing ? " " : "", "}"]));
      }
    } else o.push("{}");
    return rd(o);
  }
  function Ed(e, t) {
    const {type: n, importKind: r, source: o, specifiers: u} = e;
    return !("ImportDeclaration" !== n || Array.isArray(u) && u.length > 0 || "type" === r) && !(/{\s*}/).test(t.originalText.slice(md(e), md(o)));
  }
  function Cd(e, t, n) {
    const r = e.getNode();
    return Array.isArray(r.assertions) && 0 !== r.assertions.length ? rd([" assert {", t.bracketSpacing ? " " : "", ad(", ", e.map(n, "assertions")), t.bracketSpacing ? " " : "", "}"]) : "";
  }
  var bd = {
    printImportDeclaration: function (e, t, n) {
      const r = e.getValue(), o = t.semi ? ";" : "", u = [], {importKind: i} = r;
      return (u.push("import"), i && "value" !== i && u.push(" ", i), u.push(yd(e, t, n), Dd(e, t, n), Cd(e, t, n)), u.push(o), rd(u));
    },
    printExportDeclaration: function (e, t, n) {
      const r = e.getValue(), o = [], {type: u, exportKind: i, declaration: a} = r;
      return ("DeclareExportDeclaration" === u && o.push("declare "), o.push("export"), (r.default || "ExportDefaultDeclaration" === u) && o.push(" default"), dd(r) && (o.push(" ", pd(e, t, !0)), hd(r) && o.push(ld)), a ? o.push(" ", e.call(n, "declaration")) : o.push("type" === i ? " type" : "", yd(e, t, n), Dd(e, t, n), Cd(e, t, n)), (function (e, t) {
        if (!t.semi) return !1;
        const {type: n, declaration: r} = e, o = e.default || "ExportDefaultDeclaration" === n;
        if (!r) return !0;
        const {type: u} = r;
        if (o && "ClassDeclaration" !== u && "FunctionDeclaration" !== u && "TSInterfaceDeclaration" !== u && "DeclareClass" !== u && "DeclareFunction" !== u && "TSDeclareFunction" !== u && "EnumDeclaration" !== u) return !0;
        return !1;
      })(r, t) && o.push(";"), rd(o));
    },
    printExportAllDeclaration: function (e, t, n) {
      const r = e.getValue();
      let o = t.semi ? ";" : "";
      const u = [], {type: i, exportKind: a, exported: s} = r;
      return ("DeclareExportAllDeclaration" === i && (u.push("declare "), o = ""), u.push("export"), "type" === a && u.push(" type"), u.push(" *"), s && u.push(" as ", e.call(n, "exported")), u.push(Dd(e, t, n), Cd(e, t, n), o), rd(u));
    },
    printModuleSpecifier: function (e, t, n) {
      const r = e.getNode(), {type: o, importKind: u} = r, i = [];
      "ImportSpecifier" === o && u && i.push(u, " ");
      const a = o.startsWith("Import"), s = a ? "imported" : "local", c = a ? "local" : "exported";
      let l = "", p = "";
      return ("ExportNamespaceSpecifier" === o || "ImportNamespaceSpecifier" === o ? l = "*" : r[s] && (l = e.call(n, s)), !r[c] || r[s] && gd(r[s], r[c]) || (p = e.call(n, c)), i.push(l, l && p ? " as " : "", p), rd(i));
    }
  };
  const {hasNewlineInRange: vd} = Lt, {isJSXNode: Ad, isBlockComment: Fd} = wc, {locStart: xd, locEnd: Sd} = ii, {builders: {concat: wd, line: Td, softline: Bd, group: Nd, indent: kd, align: Pd, ifBreak: Od, dedent: Id, breakParent: Ld}} = cn;
  var Md = function (e, t, n, r) {
    const o = e.getValue(), u = o[r.consequentNodePropertyName], i = o[r.alternateNodePropertyName], a = [];
    let s = !1;
    const c = e.getParentNode(), l = c.type === r.conditionalNodeType && r.testNodePropertyNames.some(e => c[e] === o);
    let p, d, f = c.type === r.conditionalNodeType && !l, h = 0;
    do {
      (d = p || o, p = e.getParentNode(h), h++);
    } while (p && p.type === r.conditionalNodeType && r.testNodePropertyNames.every(e => p[e] !== d));
    const m = p || c, g = d;
    if (r.shouldCheckJsx && (Ad(o[r.testNodePropertyNames[0]]) || Ad(u) || Ad(i) || (function (e) {
      return (function (e) {
        const t = [];
        return ((function e(n) {
          "ConditionalExpression" === n.type ? (e(n.test), e(n.consequent), e(n.alternate)) : t.push(n);
        })(e), t);
      })(e).some(Ad);
    })(g))) {
      (s = !0, f = !0);
      const t = e => wd([Od("(", ""), kd(wd([Bd, e])), Bd, Od(")", "")]), o = e => "NullLiteral" === e.type || "Literal" === e.type && null === e.value || "Identifier" === e.type && "undefined" === e.name;
      a.push(" ? ", o(u) ? e.call(n, r.consequentNodePropertyName) : t(e.call(n, r.consequentNodePropertyName)), " : ", i.type === r.conditionalNodeType || o(i) ? e.call(n, r.alternateNodePropertyName) : t(e.call(n, r.alternateNodePropertyName)));
    } else {
      const s = wd([Td, "? ", u.type === r.conditionalNodeType ? Od("", "(") : "", Pd(2, e.call(n, r.consequentNodePropertyName)), u.type === r.conditionalNodeType ? Od("", ")") : "", Td, ": ", i.type === r.conditionalNodeType ? e.call(n, r.alternateNodePropertyName) : Pd(2, e.call(n, r.alternateNodePropertyName))]);
      a.push(c.type !== r.conditionalNodeType || c[r.alternateNodePropertyName] === o || l ? s : t.useTabs ? Id(kd(s)) : Pd(Math.max(0, t.tabWidth - 2), s));
    }
    const D = Yu([...r.testNodePropertyNames.map(e => o[e].comments), u.comments, i.comments]).filter(Boolean).some(e => Fd(e) && vd(t.originalText, xd(e), Sd(e))), y = !s && ("MemberExpression" === c.type || "OptionalMemberExpression" === c.type || "NGPipeExpression" === c.type && c.left === o) && !c.computed, E = (e => c === m ? Nd(e, {
      shouldBreak: D
    }) : D ? wd([e, Ld]) : e)(wd([].concat((C = wd(r.beforeParts()), c.type === r.conditionalNodeType && c[r.alternateNodePropertyName] === o ? Pd(2, C) : C), f ? wd(a) : kd(wd(a)), r.afterParts(y))));
    var C;
    return l ? Nd(wd([kd(wd([Bd, E])), Bd])) : E;
  };
  const {getNextNonSpaceNonCommentCharacter: jd, isNextLineEmpty: _d} = Lt, {printDanglingComments: Rd} = Fa, {builders: {concat: Vd, line: $d, hardline: qd, softline: Wd, group: Ud, indent: Jd, ifBreak: zd}, utils: {removeLines: Hd}} = cn, {getFunctionParameters: Gd, iterateFunctionParametersPath: Xd, isSimpleType: Yd, isTestCall: Kd, isTypeAnnotationAFunction: Qd, isObjectType: Zd, isObjectTypePropertyAFunction: ef, hasRestParameter: tf, shouldPrintComma: nf} = wc, {locEnd: rf} = ii, {printFunctionTypeParameters: of} = nd;
  function uf(e) {
    if (!e) return !1;
    const t = Gd(e);
    if (1 !== t.length) return !1;
    const [n] = t;
    return !n.comments && ("ObjectPattern" === n.type || "ArrayPattern" === n.type || "Identifier" === n.type && n.typeAnnotation && ("TypeAnnotation" === n.typeAnnotation.type || "TSTypeAnnotation" === n.typeAnnotation.type) && Zd(n.typeAnnotation.typeAnnotation) || "FunctionTypeParam" === n.type && Zd(n.typeAnnotation) || "AssignmentPattern" === n.type && ("ObjectPattern" === n.left.type || "ArrayPattern" === n.left.type) && ("Identifier" === n.right.type || "ObjectExpression" === n.right.type && 0 === n.right.properties.length || "ArrayExpression" === n.right.type && 0 === n.right.elements.length));
  }
  var af = {
    printFunctionParameters: function (e, t, n, r, o) {
      const u = e.getValue(), i = Gd(u), a = o ? of(e, n, t) : "";
      if (0 === i.length) return Vd([a, "(", Rd(e, n, !0, e => ")" === jd(n.originalText, e, rf)), ")"]);
      const s = e.getParentNode(), c = Kd(s), l = uf(u), p = r && !i.some(e => e.comments), d = [];
      if ((Xd(e, (e, r) => {
        const o = r === i.length - 1;
        (o && u.rest && d.push("..."), d.push(e.call(t)), o || (d.push(","), c || l || p ? d.push(" ") : _d(n.originalText, i[r], rf) ? d.push(qd, qd) : d.push($d)));
      }), p)) return Ud(Vd([Hd(a), "(", Vd(d.map(Hd)), ")"]));
      const f = i.every(e => !e.decorators);
      return l && f || c ? Vd([a, "(", Vd(d), ")"]) : (ef(s) || Qd(s) || "TypeAlias" === s.type || "UnionTypeAnnotation" === s.type || "TSUnionType" === s.type || "IntersectionTypeAnnotation" === s.type || "FunctionTypeAnnotation" === s.type && s.returnType === u) && 1 === i.length && null === i[0].name && u.this !== i[0] && i[0].typeAnnotation && null === u.typeParameters && Yd(i[0].typeAnnotation) && !u.rest ? "always" === n.arrowParens ? Vd(["(", Vd(d), ")"]) : Vd(d) : Vd([a, "(", Jd(Vd([Wd, Vd(d)])), zd(!tf(u) && nf(n, "all") ? "," : ""), Wd, ")"]);
    },
    shouldHugFunctionParameters: uf
  };
  const {builders: {concat: sf}} = cn, {isFlowAnnotationComment: cf, isSimpleType: lf, isObjectType: pf} = wc;
  var df = {
    printTypeAnnotation: function (e, t, n) {
      const r = e.getValue();
      if (!r.typeAnnotation) return "";
      const o = e.getParentNode(), u = r.definite || o && "VariableDeclarator" === o.type && o.definite, i = "DeclareFunction" === o.type && o.id === r;
      return cf(t.originalText, r.typeAnnotation) ? sf([" /*: ", e.call(n, "typeAnnotation"), " */"]) : sf([i ? "" : u ? "!: " : ": ", e.call(n, "typeAnnotation")]);
    },
    shouldHugType: function (e) {
      if (lf(e) || pf(e)) return !0;
      if ("UnionTypeAnnotation" === e.type || "TSUnionType" === e.type) {
        const t = e.types.filter(e => "VoidTypeAnnotation" === e.type || "TSVoidKeyword" === e.type || "NullLiteralTypeAnnotation" === e.type || "TSNullKeyword" === e.type).length, n = e.types.some(e => "ObjectTypeAnnotation" === e.type || "TSTypeLiteral" === e.type || "GenericTypeAnnotation" === e.type || "TSTypeReference" === e.type);
        if (e.types.length - 1 === t && n) return !0;
      }
      return !1;
    }
  };
  const {printDanglingComments: ff} = Fa, {builders: {concat: hf, line: mf, softline: gf, group: Df, indent: yf, ifBreak: Ef}} = cn, {getLast: Cf, isNextLineEmpty: bf} = Lt, {hasDanglingComments: vf, shouldPrintComma: Af} = wc, {locEnd: Ff} = ii, {printOptionalToken: xf} = nd, {printTypeAnnotation: Sf} = df;
  function wf(e, t, n, r) {
    const o = [];
    let u = [];
    return (e.each(e => {
      (o.push(hf(u)), o.push(Df(r(e))), u = [",", mf], e.getValue() && bf(t.originalText, e.getValue(), Ff) && u.push(gf));
    }, n), hf(o));
  }
  var Tf = {
    printArray: function (e, t, n) {
      const r = e.getValue(), o = [], u = "TupleExpression" === r.type ? "#[" : "[";
      if (0 === r.elements.length) vf(r) ? o.push(Df(hf([u, ff(e, t), gf, "]"]))) : o.push(u, "]"); else {
        const i = Cf(r.elements), a = !(i && "RestElement" === i.type), s = a && null === i, c = !t.__inJestEach && r.elements.length > 1 && r.elements.every((e, t, n) => {
          const r = e && e.type;
          if ("ArrayExpression" !== r && "ObjectExpression" !== r) return !1;
          const o = n[t + 1];
          if (o && r !== o.type) return !1;
          const u = "ArrayExpression" === r ? "elements" : "properties";
          return e[u] && e[u].length > 1;
        });
        o.push(Df(hf([u, yf(hf([gf, wf(e, t, "elements", n)])), s ? "," : "", Ef(a && !s && Af(t) ? "," : ""), ff(e, t, !0), gf, "]"]), {
          shouldBreak: c
        }));
      }
      return (o.push(xf(e), Sf(e, t, n)), hf(o));
    },
    printArrayItems: wf
  };
  const {printDanglingComments: Bf} = Fa, {builders: {concat: Nf, line: kf, softline: Pf, group: Of, indent: If, ifBreak: Lf, hardline: Mf}} = cn, {getLast: jf, isNextLineEmpty: _f, hasNewlineInRange: Rf, hasNewline: Vf} = Lt, {hasDanglingComments: $f, shouldPrintComma: qf, hasNodeIgnoreComment: Wf, isBlockComment: Uf} = wc, {locStart: Jf, locEnd: zf} = ii, {printOptionalToken: Hf} = nd, {shouldHugFunctionParameters: Gf} = af, {printTypeAnnotation: Xf, shouldHugType: Yf} = df;
  var Kf = {
    printObject: function (e, t, n) {
      const r = t.semi ? ";" : "", o = e.getValue();
      let u;
      u = "TSTypeLiteral" === o.type ? "members" : "TSInterfaceBody" === o.type ? "body" : "properties";
      const i = "ObjectTypeAnnotation" === o.type, a = [];
      (i && a.push("indexers", "callProperties", "internalSlots"), a.push(u));
      const s = a.map(e => o[e][0]).sort((e, t) => Jf(e) - Jf(t))[0], c = e.getParentNode(0), l = i && c && ("InterfaceDeclaration" === c.type || "DeclareInterface" === c.type || "DeclareClass" === c.type) && "body" === e.getName(), p = "TSInterfaceBody" === o.type || l || "ObjectPattern" === o.type && "FunctionDeclaration" !== c.type && "FunctionExpression" !== c.type && "ArrowFunctionExpression" !== c.type && "ObjectMethod" !== c.type && "ClassMethod" !== c.type && "ClassPrivateMethod" !== c.type && "AssignmentPattern" !== c.type && "CatchClause" !== c.type && o.properties.some(e => e.value && ("ObjectPattern" === e.value.type || "ArrayPattern" === e.value.type)) || "ObjectPattern" !== o.type && s && Rf(t.originalText, Jf(o), Jf(s)), d = l ? ";" : "TSInterfaceBody" === o.type || "TSTypeLiteral" === o.type ? Lf(r, ";") : ",", f = "RecordExpression" === o.type ? "#{" : o.exact ? "{|" : "{", h = o.exact ? "|}" : "}", m = [];
      a.forEach(t => {
        e.each(e => {
          const t = e.getValue();
          m.push({
            node: t,
            printed: n(e),
            loc: Jf(t)
          });
        }, t);
      });
      let g = [];
      const D = m.sort((e, t) => e.loc - t.loc).map(e => {
        const n = Nf(g.concat(Of(e.printed)));
        return (g = [d, kf], "TSPropertySignature" !== e.node.type && "TSMethodSignature" !== e.node.type && "TSConstructSignatureDeclaration" !== e.node.type || !Wf(e.node) || g.shift(), _f(t.originalText, e.node, zf) && g.push(Mf), n);
      });
      if (o.inexact) {
        let n;
        if ($f(o)) {
          const r = !o.comments.every(e => Uf(e)), u = Bf(e, t, !0);
          n = Nf([u, r || Vf(t.originalText, zf(o.comments[o.comments.length - 1])) ? Mf : kf, "..."]);
        } else n = "...";
        D.push(Nf(g.concat(n)));
      }
      const y = jf(o[u]), E = !(o.inexact || y && "RestElement" === y.type || y && ("TSPropertySignature" === y.type || "TSCallSignatureDeclaration" === y.type || "TSMethodSignature" === y.type || "TSConstructSignatureDeclaration" === y.type) && Wf(y));
      let C;
      if (0 === D.length) {
        if (!$f(o)) return Nf([f, h, Xf(e, t, n)]);
        C = Of(Nf([f, Bf(e, t), Pf, h, Hf(e), Xf(e, t, n)]));
      } else C = Nf([f, If(Nf([t.bracketSpacing ? kf : Pf, Nf(D)])), Lf(E && ("," !== d || qf(t)) ? d : ""), Nf([t.bracketSpacing ? kf : Pf, h]), Hf(e), Xf(e, t, n)]);
      return e.match(e => "ObjectPattern" === e.type && !e.decorators, (e, t, n) => Gf(e) && ("params" === t || "parameters" === t || "this" === t || "rest" === t) && 0 === n) || e.match(Yf, (e, t) => "typeAnnotation" === t, (e, t) => "typeAnnotation" === t, (e, t, n) => Gf(e) && ("params" === t || "parameters" === t || "this" === t || "rest" === t) && 0 === n) ? C : Of(C, {
        shouldBreak: p
      });
    }
  };
  const {printComments: Qf, printDanglingComments: Zf} = Fa, {builders: {concat: eh, line: th, hardline: nh, softline: rh, group: oh, indent: uh, conditionalGroup: ih, fill: ah, ifBreak: sh, lineSuffixBoundary: ch}, utils: {willBreak: lh, isLineNext: ph, isEmpty: dh}} = cn, {getLast: fh, getPreferredQuote: hh} = Lt, {hasTrailingComment: mh, isEmptyJSXElement: gh, isJSXWhitespaceExpression: Dh, isJSXNode: yh, isMeaningfulJSXText: Eh, matchJsxWhitespaceRegex: Ch, rawText: bh, isLiteral: vh, isCallOrOptionalCallExpression: Ah, isStringLiteral: Fh, isBinaryish: xh, isBlockComment: Sh} = wc, {willPrintOwnComments: wh} = il;
  function Th(e, t, n) {
    const r = e.getValue();
    if ("JSXElement" === r.type && gh(r)) return eh([e.call(n, "openingElement"), e.call(n, "closingElement")]);
    const o = "JSXElement" === r.type ? e.call(n, "openingElement") : e.call(n, "openingFragment"), u = "JSXElement" === r.type ? e.call(n, "closingElement") : e.call(n, "closingFragment");
    if (1 === r.children.length && "JSXExpressionContainer" === r.children[0].type && ("TemplateLiteral" === r.children[0].expression.type || "TaggedTemplateExpression" === r.children[0].expression.type)) return eh([o, eh(e.map(n, "children")), u]);
    r.children = r.children.map(e => Dh(e) ? {
      type: "JSXText",
      value: " ",
      raw: " "
    } : e);
    const i = r.children.filter(yh).length > 0, a = r.children.filter(e => "JSXExpressionContainer" === e.type).length > 1, s = "JSXElement" === r.type && r.openingElement.attributes.length > 1;
    let c = lh(o) || i || s || a;
    const l = "mdx" === e.getParentNode().rootMarker, p = t.singleQuote ? "{' '}" : '{" "}', d = l ? eh([" "]) : sh(eh([p, rh]), " "), f = r.openingElement && r.openingElement.name && "fbt" === r.openingElement.name.name, h = (function (e, t, n, r, o) {
      const u = e.getValue(), i = [];
      return (e.each((e, t) => {
        const a = e.getValue();
        if (vh(a)) {
          const e = bh(a);
          if (Eh(a)) {
            const n = e.split(Ch);
            if ("" === n[0]) {
              if ((i.push(""), n.shift(), (/\n/).test(n[0]))) {
                const e = u.children[t + 1];
                i.push(Nh(o, n[1], a, e));
              } else i.push(r);
              n.shift();
            }
            let s;
            if (("" === fh(n) && (n.pop(), s = n.pop()), 0 === n.length)) return;
            if ((n.forEach((e, t) => {
              t % 2 == 1 ? i.push(th) : i.push(e);
            }), void 0 !== s)) if ((/\n/).test(s)) {
              const e = u.children[t + 1];
              i.push(Nh(o, fh(i), a, e));
            } else i.push(r); else {
              const e = u.children[t + 1];
              i.push(Bh(o, fh(i), a, e));
            }
          } else (/\n/).test(e) ? e.match(/\n/g).length > 1 && (i.push(""), i.push(nh)) : (i.push(""), i.push(r));
        } else {
          const r = n(e);
          i.push(r);
          const s = u.children[t + 1];
          if (s && Eh(s)) {
            const e = bh(s).trim().split(Ch)[0];
            i.push(Bh(o, e, a, s));
          } else i.push(nh);
        }
      }, "children"), i);
    })(e, 0, n, d, f), m = r.children.some(e => Eh(e));
    for (let e = h.length - 2; e >= 0; e--) {
      const t = "" === h[e] && "" === h[e + 1], n = h[e] === nh && "" === h[e + 1] && h[e + 2] === nh, r = (h[e] === rh || h[e] === nh) && "" === h[e + 1] && h[e + 2] === d, o = h[e] === d && "" === h[e + 1] && (h[e + 2] === rh || h[e + 2] === nh), u = h[e] === d && "" === h[e + 1] && h[e + 2] === d, i = h[e] === rh && "" === h[e + 1] && h[e + 2] === nh || h[e] === nh && "" === h[e + 1] && h[e + 2] === rh;
      n && m || t || r || u || i ? h.splice(e, 2) : o && h.splice(e + 1, 2);
    }
    for (; h.length && (ph(fh(h)) || dh(fh(h))); ) h.pop();
    for (; h.length && (ph(h[0]) || dh(h[0])) && (ph(h[1]) || dh(h[1])); ) (h.shift(), h.shift());
    const g = [];
    h.forEach((e, t) => {
      if (e === d) {
        if (1 === t && "" === h[t - 1]) return 2 === h.length ? void g.push(p) : void g.push(eh([p, nh]));
        if (t === h.length - 1) return void g.push(p);
        if ("" === h[t - 1] && h[t - 2] === nh) return void g.push(p);
      }
      (g.push(e), lh(e) && (c = !0));
    });
    const D = m ? ah(g) : oh(eh(g), {
      shouldBreak: !0
    });
    if (l) return D;
    const y = oh(eh([o, uh(eh([nh, D])), nh, u]));
    return c ? y : ih([oh(eh([o, eh(h), u])), y]);
  }
  function Bh(e, t, n, r) {
    return e ? "" : "JSXElement" === n.type && !n.closingElement || r && "JSXElement" === r.type && !r.closingElement ? 1 === t.length ? rh : nh : rh;
  }
  function Nh(e, t, n, r) {
    return e ? nh : 1 === t.length ? "JSXElement" === n.type && !n.closingElement || r && "JSXElement" === r.type && !r.closingElement ? nh : rh : nh;
  }
  function kh(e, t, n) {
    const r = e.getValue();
    return eh(["{", e.call(e => {
      const r = eh(["...", n(e)]), o = e.getValue();
      return o.comments && o.comments.length && wh(e) ? eh([uh(eh([rh, Qf(e, () => r, t)])), rh]) : r;
    }, "JSXSpreadAttribute" === r.type ? "argument" : "expression"), "}"]);
  }
  var Ph = {
    printJsxElement: function (e, t, n) {
      const r = Qf(e, () => Th(e, t, n), t);
      return (function (e, t, n) {
        const r = e.getParentNode();
        if (!r) return t;
        if (({
          ArrayExpression: !0,
          JSXAttribute: !0,
          JSXElement: !0,
          JSXExpressionContainer: !0,
          JSXFragment: !0,
          ExpressionStatement: !0,
          CallExpression: !0,
          OptionalCallExpression: !0,
          ConditionalExpression: !0,
          JsExpressionRoot: !0
        })[r.type]) return t;
        const o = e.match(void 0, e => "ArrowFunctionExpression" === e.type, Ah, e => "JSXExpressionContainer" === e.type), u = Rp(e, n);
        return oh(eh([u ? "" : sh("("), uh(eh([rh, t])), rh, u ? "" : sh(")")]), {
          shouldBreak: o
        });
      })(e, r, t);
    },
    printJsxAttribute: function (e, t, n) {
      const r = e.getValue(), o = [];
      if ((o.push(e.call(n, "name")), r.value)) {
        let u;
        if (Fh(r.value)) {
          let e = bh(r.value).replace(/&apos;/g, "'").replace(/&quot;/g, '"');
          const n = hh(e, t.jsxSingleQuote ? "'" : '"'), o = "'" === n ? "&apos;" : "&quot;";
          (e = e.slice(1, -1).replace(new RegExp(n, "g"), o), u = eh([n, e, n]));
        } else u = e.call(n, "value");
        o.push("=", u);
      }
      return eh(o);
    },
    printJsxOpeningElement: function (e, t, n) {
      const r = e.getValue(), o = r.name && r.name.comments && r.name.comments.length > 0 || r.typeParameters && r.typeParameters.comments && r.typeParameters.comments.length > 0;
      if (r.selfClosing && !r.attributes.length && !o) return eh(["<", e.call(n, "name"), e.call(n, "typeParameters"), " />"]);
      if (r.attributes && 1 === r.attributes.length && r.attributes[0].value && Fh(r.attributes[0].value) && !r.attributes[0].value.value.includes("\n") && !o && (!r.attributes[0].comments || !r.attributes[0].comments.length)) return oh(eh(["<", e.call(n, "name"), e.call(n, "typeParameters"), " ", eh(e.map(n, "attributes")), r.selfClosing ? " />" : ">"]));
      const u = r.attributes.length && mh(fh(r.attributes)), i = !r.attributes.length && !o || t.jsxBracketSameLine && (!o || r.attributes.length) && !u, a = r.attributes && r.attributes.some(e => e.value && Fh(e.value) && e.value.value.includes("\n"));
      return oh(eh(["<", e.call(n, "name"), e.call(n, "typeParameters"), eh([uh(eh(e.map(e => eh([th, n(e)]), "attributes"))), r.selfClosing ? th : i ? ">" : rh]), r.selfClosing ? "/>" : i ? "" : ">"]), {
        shouldBreak: a
      });
    },
    printJsxClosingElement: function (e, t, n) {
      return eh(["</", e.call(n, "name"), ">"]);
    },
    printJsxOpeningClosingFragment: function (e, t) {
      const n = e.getValue(), r = n.comments && n.comments.length, o = r && !n.comments.every(e => Sh(e)), u = "JSXOpeningFragment" === n.type;
      return eh([u ? "<" : "</", uh(eh([o ? nh : r && !u ? " " : "", Zf(e, t, !0)])), o ? nh : "", ">"]);
    },
    printJsxExpressionContainer: function (e, t, n) {
      const r = e.getValue(), o = e.getParentNode(0), u = r.expression.comments && r.expression.comments.length > 0, i = "JSXEmptyExpression" === r.expression.type || !u && ("ArrayExpression" === r.expression.type || "ObjectExpression" === r.expression.type || "ArrowFunctionExpression" === r.expression.type || "CallExpression" === r.expression.type || "OptionalCallExpression" === r.expression.type || "FunctionExpression" === r.expression.type || "TemplateLiteral" === r.expression.type || "TaggedTemplateExpression" === r.expression.type || "DoExpression" === r.expression.type || yh(o) && ("ConditionalExpression" === r.expression.type || xh(r.expression)));
      return oh(eh(i ? ["{", e.call(n, "expression"), ch, "}"] : ["{", uh(eh([rh, e.call(n, "expression")])), rh, ch, "}"]));
    },
    printJsxEmptyExpression: function (e, t) {
      const n = e.getValue(), r = n.comments && !n.comments.every(e => Sh(e));
      return eh([Zf(e, t, !r), r ? nh : ""]);
    },
    printJsxSpreadAttribute: kh,
    printJsxSpreadChild: kh
  };
  const {printDanglingComments: Oh} = Fa, {builders: {concat: Ih, join: Lh, line: Mh, hardline: jh, softline: _h, group: Rh, indent: Vh, ifBreak: $h}} = cn, {hasDanglingComments: qh, isTestCall: Wh, isBlockComment: Uh, shouldPrintComma: Jh} = wc, {shouldHugType: zh} = df, Hh = new WeakMap();
  function Gh(e) {
    return (Hh.has(e) || Hh.set(e, Symbol("typeParameters")), Hh.get(e));
  }
  function Xh(e, t) {
    const n = e.getValue();
    if (!qh(n)) return "";
    const r = n.comments.every(e => Uh(e)), o = Oh(e, t, r);
    return r ? o : Ih([o, jh]);
  }
  var Yh = {
    printTypeParameters: function (e, t, n, r) {
      const o = e.getValue();
      if (!o[r]) return "";
      if (!Array.isArray(o[r])) return e.call(n, r);
      const u = e.getNode(2);
      return null != u && Wh(u) || 0 === o[r].length || 1 === o[r].length && (zh(o[r][0]) || "GenericTypeAnnotation" === o[r][0].type && zh(o[r][0].id) || "TSTypeReference" === o[r][0].type && zh(o[r][0].typeName) || "NullableTypeAnnotation" === o[r][0].type) ? Ih(["<", Lh(", ", e.map(n, r)), Xh(e, t), ">"]) : Rh(Ih(["<", Vh(Ih([_h, Lh(Ih([",", Mh]), e.map(n, r))])), $h("typescript" !== t.parser && "babel-ts" !== t.parser && Jh(t, "all") ? "," : ""), _h, ">"]), {
        id: Gh(o)
      });
    },
    getTypeParametersGroupId: Gh
  };
  const {printComments: Kh} = Fa, {printString: Qh, printNumber: Zh} = Lt, {builders: {concat: em}} = cn, {isNumericLiteral: tm, isSimpleNumber: nm, isStringLiteral: rm, isStringPropSafeToUnquote: om, rawText: um} = wc, im = new WeakMap();
  var am = {
    printPropertyKey: function (e, t, n) {
      const r = e.getNode();
      if (r.computed) return em(["[", e.call(n, "key"), "]"]);
      const o = e.getParentNode(), {key: u} = r;
      if ("ClassPrivateProperty" === r.type && "Identifier" === u.type) return em(["#", e.call(n, "key")]);
      if ("consistent" === t.quoteProps && !im.has(o)) {
        const e = (o.properties || o.body || o.members).some(e => !e.computed && e.key && rm(e.key) && !om(e, t));
        im.set(o, e);
      }
      if (("Identifier" === u.type || tm(u) && nm(Zh(um(u))) && String(u.value) === Zh(um(u)) && "typescript" !== t.parser && "babel-ts" !== t.parser) && ("json" === t.parser || "consistent" === t.quoteProps && im.get(o))) {
        const n = Qh(JSON.stringify("Identifier" === u.type ? u.name : u.value.toString()), t);
        return e.call(e => Kh(e, () => n, t), "key");
      }
      return om(r, t) && ("as-needed" === t.quoteProps || "consistent" === t.quoteProps && !im.get(o)) ? e.call(e => Kh(e, () => (/^\d/).test(u.value) ? Zh(u.value) : u.value, t), "key") : e.call(n, "key");
    }
  };
  const {printDanglingComments: sm} = Fa, {getNextNonSpaceNonCommentCharacterIndex: cm} = Lt, {builders: {concat: lm, line: pm, softline: dm, group: fm, indent: hm, ifBreak: mm, hardline: gm}} = cn, {getFunctionParameters: Dm, hasDanglingComments: ym, hasLeadingOwnLineComment: Em, isFlowAnnotationComment: Cm, isJSXNode: bm, isTemplateOnItsOwnLine: vm, shouldPrintComma: Am, startsWithNoLookaheadToken: Fm, returnArgumentHasLeadingComment: xm, isBinaryish: Sm, isLineComment: wm} = wc, {locEnd: Tm} = ii, {printFunctionParameters: Bm} = af, {printPropertyKey: Nm} = am, {printFunctionTypeParameters: km} = nd;
  function Pm(e, t, n) {
    const r = [km(e, t, n), fm(lm([Bm(e, n, t), Im(e, n, t)]))];
    return (e.getNode().body ? r.push(" ", e.call(n, "body")) : r.push(t.semi ? ";" : ""), lm(r));
  }
  function Om(e, t) {
    if ("always" === t.arrowParens) return !1;
    if ("avoid" === t.arrowParens) {
      return (function (e) {
        const t = Dm(e);
        return !(1 !== t.length || e.typeParameters || ym(e) || "Identifier" !== t[0].type || t[0].typeAnnotation || t[0].comments || t[0].optional || e.predicate || e.returnType);
      })(e.getValue());
    }
    return !1;
  }
  function Im(e, t, n) {
    const r = e.getValue(), o = e.call(t, "returnType");
    if (r.returnType && Cm(n.originalText, r.returnType)) return lm([" /*: ", o, " */"]);
    const u = [o];
    return (r.returnType && r.returnType.typeAnnotation && u.unshift(": "), r.predicate && u.push(r.returnType ? " " : ": ", e.call(t, "predicate")), lm(u));
  }
  var Lm = {
    printFunctionDeclaration: function (e, t, n, r) {
      const o = e.getValue(), u = [];
      return (o.async && u.push("async "), o.generator ? u.push("function* ") : u.push("function "), o.id && u.push(e.call(t, "id")), u.push(km(e, n, t), fm(lm([Bm(e, t, n, r), Im(e, t, n)])), o.body ? " " : "", e.call(t, "body")), lm(u));
    },
    printArrowFunctionExpression: function (e, t, n, r) {
      const o = e.getValue(), u = [];
      (o.async && u.push("async "), Om(e, t) ? u.push(e.call(n, "params", 0)) : u.push(fm(lm([Bm(e, n, t, r && (r.expandLastArg || r.expandFirstArg), !0), Im(e, n, t)]))));
      const i = sm(e, t, !0, e => {
        const n = cm(t.originalText, e, Tm);
        return !1 !== n && "=>" === t.originalText.slice(n, n + 2);
      });
      (i && u.push(" ", i), u.push(" =>"));
      const a = e.call(e => n(e, r), "body");
      if (!Em(t.originalText, o.body) && ("ArrayExpression" === o.body.type || "ObjectExpression" === o.body.type || "BlockStatement" === o.body.type || bm(o.body) || vm(o.body, t.originalText) || "ArrowFunctionExpression" === o.body.type || "DoExpression" === o.body.type)) return fm(lm([lm(u), " ", a]));
      if ("SequenceExpression" === o.body.type) return fm(lm([lm(u), fm(lm([" (", hm(lm([dm, a])), dm, ")"]))]));
      const s = (r && r.expandLastArg || "JSXExpressionContainer" === e.getParentNode().type) && !(o.comments && o.comments.length), c = r && r.expandLastArg && Am(t, "all"), l = "ConditionalExpression" === o.body.type && !Fm(o.body, !1);
      return fm(lm([lm(u), fm(lm([hm(lm([pm, l ? mm("", "(") : "", a, l ? mm("", ")") : ""])), s ? lm([mm(c ? "," : ""), dm]) : ""]))]));
    },
    printMethod: function (e, t, n) {
      const r = e.getNode(), {kind: o} = r, u = r.value || r, i = [];
      return (o && "init" !== o && "method" !== o && "constructor" !== o ? (ta.ok("get" === o || "set" === o), i.push(o, " ")) : u.async && i.push("async "), u.generator && i.push("*"), i.push(Nm(e, t, n), r.optional || r.key.optional ? "?" : "", r === u ? Pm(e, t, n) : e.call(e => Pm(e, t, n), "value")), lm(i));
    },
    printReturnAndThrowArgument: function (e, t, n) {
      const r = e.getValue(), o = t.semi ? ";" : "", u = [];
      r.argument && (xm(t, r.argument) ? u.push(lm([" (", hm(lm([gm, e.call(n, "argument")])), gm, ")"])) : Sm(r.argument) || "SequenceExpression" === r.argument.type ? u.push(fm(lm([mm(" (", " "), hm(lm([dm, e.call(n, "argument")])), dm, mm(")")]))) : u.push(" ", e.call(n, "argument")));
      const i = Array.isArray(r.comments) && r.comments[r.comments.length - 1], a = i && wm(i);
      return (a && u.push(o), ym(r) && u.push(" ", sm(e, t, !0)), a || u.push(o), lm(u));
    },
    shouldPrintParamsWithoutParens: Om
  };
  const {printComments: Mm, printDanglingComments: jm} = Fa, {builders: {concat: _m, join: Rm, line: Vm, hardline: $m, softline: qm, group: Wm, indent: Um, ifBreak: Jm}} = cn, {hasTrailingComment: zm, hasTrailingLineComment: Hm} = wc, {getTypeParametersGroupId: Gm} = Yh, {printMethod: Xm} = Lm, {printDecorators: Ym} = nd;
  function Km(e) {
    return e.typeParameters && !Hm(e.typeParameters) && !(function (e) {
      return ["superClass", "extends", "mixins", "implements"].filter(t => !!e[t]).length > 1;
    })(e);
  }
  function Qm(e, t, n, r) {
    const o = e.getValue();
    if (!o[r] || 0 === o[r].length) return "";
    const u = jm(e, t, !0, ({marker: e}) => e === r);
    return _m([Km(o) ? Jm(" ", Vm, {
      groupId: Gm(o.typeParameters)
    }) : Vm, u, u && $m, r, Wm(Um(_m([Vm, Rm(_m([",", Vm]), e.map(n, r))])))]);
  }
  function Zm(e, t, n) {
    const r = e.call(n, "superClass");
    return "AssignmentExpression" === e.getParentNode().type ? Wm(Jm(_m(["(", Um(_m([qm, r])), qm, ")"]), r)) : r;
  }
  var eg = {
    printClass: function (e, t, n) {
      const r = e.getValue(), o = [];
      (r.abstract && o.push("abstract "), o.push("class"));
      const u = r.id && zm(r.id) || r.superClass && r.superClass.comments && 0 !== r.superClass.comments.length || r.extends && 0 !== r.extends.length || r.mixins && 0 !== r.mixins.length || r.implements && 0 !== r.implements.length, i = [], a = [];
      if ((r.id && i.push(" ", e.call(n, "id")), i.push(e.call(n, "typeParameters")), r.superClass)) {
        const r = _m(["extends ", Zm(e, t, n), e.call(n, "superTypeParameters")]), o = e.call(e => Mm(e, () => r, t), "superClass");
        u ? a.push(Vm, Wm(o)) : a.push(" ", o);
      } else a.push(Qm(e, t, n, "extends"));
      if ((a.push(Qm(e, t, n, "mixins")), a.push(Qm(e, t, n, "implements")), u)) {
        const e = _m(a);
        Km(r) ? o.push(Wm(_m(i.concat(Jm(Um(e), e))))) : o.push(Wm(Um(_m(i.concat(e)))));
      } else o.push(...i, ...a);
      return (o.push(" ", e.call(n, "body")), _m(o));
    },
    printClassMethod: function (e, t, n) {
      const r = e.getValue(), o = [];
      return (r.decorators && 0 !== r.decorators.length && o.push(Ym(e, t, n)), r.accessibility && o.push(r.accessibility + " "), r.static && o.push("static "), ("TSAbstractMethodDefinition" === r.type || r.abstract) && o.push("abstract "), o.push(Xm(e, t, n)), _m(o));
    }
  };
  const {getLast: tg, getPenultimate: ng, isNextLineEmpty: rg} = Lt, {getFunctionParameters: og, iterateFunctionParametersPath: ug, hasLeadingComment: ig, hasTrailingComment: ag, isFunctionCompositionArgs: sg, isJSXNode: cg, isLongCurriedCallExpression: lg, shouldPrintComma: pg, getCallArguments: dg, iterateCallArgumentsPath: fg} = wc, {locEnd: hg} = ii, {builders: {concat: mg, line: gg, hardline: Dg, softline: yg, group: Eg, indent: Cg, conditionalGroup: bg, ifBreak: vg, breakParent: Ag}, utils: {willBreak: Fg}} = cn;
  function xg(e) {
    return "ObjectExpression" === e.type && (e.properties.length > 0 || e.comments) || "ArrayExpression" === e.type && (e.elements.length > 0 || e.comments) || "TSTypeAssertion" === e.type && xg(e.expression) || "TSAsExpression" === e.type && xg(e.expression) || "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type && (!e.returnType || !e.returnType.typeAnnotation || "TSTypeReference" !== e.returnType.typeAnnotation.type) && ("BlockStatement" === e.body.type || "ArrowFunctionExpression" === e.body.type || "ObjectExpression" === e.body.type || "ArrayExpression" === e.body.type || "CallExpression" === e.body.type || "OptionalCallExpression" === e.body.type || "ConditionalExpression" === e.body.type || cg(e.body));
  }
  var Sg = function (e, t, n) {
    const r = e.getValue(), o = "ImportExpression" === r.type, u = dg(r);
    if (0 === u.length) return mg(["(", Fa.printDanglingComments(e, t, !0), ")"]);
    if (2 === u.length && "ArrowFunctionExpression" === u[0].type && 0 === og(u[0]).length && "BlockStatement" === u[0].body.type && "ArrayExpression" === u[1].type && !u.some(e => e.comments)) return mg(["(", e.call(n, "arguments", 0), ", ", e.call(n, "arguments", 1), ")"]);
    let i = !1, a = !1, s = !1;
    const c = u.length - 1, l = [];
    fg(e, (e, r) => {
      const o = e.getNode(), u = [n(e)];
      (r === c || (rg(t.originalText, o, hg) ? (0 === r && (s = !0), i = !0, u.push(",", Dg, Dg)) : u.push(",", gg)), a = (function (e, t) {
        if (!e || "ArrowFunctionExpression" !== e.type || !e.body || "BlockStatement" !== e.body.type || 0 === og(e).length) return !1;
        let r = !1;
        return (ug(t, e => {
          r = r || Fg(mg([n(e)]));
        }), r);
      })(o, e), l.push(mg(u)));
    });
    const p = o || r.callee && "Import" === r.callee.type || !pg(t, "all") ? "" : ",";
    function d() {
      return Eg(mg(["(", Cg(mg([gg, mg(l)])), p, gg, ")"]), {
        shouldBreak: !0
      });
    }
    if ("Decorator" !== e.getParentNode().type && sg(u)) return d();
    const f = (function (e) {
      if (2 !== e.length) return !1;
      const [t, n] = e;
      return !(t.comments && t.comments.length || "FunctionExpression" !== t.type && ("ArrowFunctionExpression" !== t.type || "BlockStatement" !== t.body.type) || "FunctionExpression" === n.type || "ArrowFunctionExpression" === n.type || "ConditionalExpression" === n.type || xg(n));
    })(u), h = (function (e) {
      const t = tg(e), n = ng(e);
      return !ig(t) && !ag(t) && xg(t) && (!n || n.type !== t.type);
    })(u);
    if (f || h) {
      const t = (f ? l.slice(1).some(Fg) : l.slice(0, -1).some(Fg)) || i || a;
      let o = [];
      fg(e, (e, t) => {
        (f && 0 === t && (o = [mg([e.call(e => n(e, {
          expandFirstArg: !0
        })), l.length > 1 ? "," : "", s ? Dg : gg, s ? Dg : ""])].concat(l.slice(1))), h && t === u.length - 1 && (o = l.slice(0, -1).concat(e.call(e => n(e, {
          expandLastArg: !0
        })))));
      });
      const c = l.some(Fg), p = mg(["(", mg(o), ")"]);
      return mg([c ? Ag : "", bg([c || r.typeArguments || r.typeParameters ? vg(d(), p) : p, mg(f ? ["(", Eg(o[0], {
        shouldBreak: !0
      }), mg(o.slice(1)), ")"] : ["(", mg(l.slice(0, -1)), Eg(tg(o), {
        shouldBreak: !0
      }), ")"]), d()], {
        shouldBreak: t
      })]);
    }
    const m = mg(["(", Cg(mg([yg, mg(l)])), vg(p), yg, ")"]);
    return lg(e) ? m : Eg(m, {
      shouldBreak: l.some(Fg) || i
    });
  };
  const {builders: {concat: wg, softline: Tg, group: Bg, indent: Ng}} = cn, {isNumericLiteral: kg} = wc, {printOptionalToken: Pg} = nd;
  function Og(e, t, n) {
    const r = e.call(n, "property"), o = e.getValue(), u = Pg(e);
    return o.computed ? !o.property || kg(o.property) ? wg([u, "[", r, "]"]) : Bg(wg([u, "[", Ng(wg([Tg, r])), Tg, "]"])) : wg([u, ".", r]);
  }
  var Ig = {
    printMemberExpression: function (e, t, n) {
      const r = e.getValue(), o = e.getParentNode();
      let u, i = 0;
      do {
        (u = e.getParentNode(i), i++);
      } while (u && ("MemberExpression" === u.type || "OptionalMemberExpression" === u.type || "TSNonNullExpression" === u.type));
      const a = u && ("NewExpression" === u.type || "BindExpression" === u.type || "VariableDeclarator" === u.type && "Identifier" !== u.id.type || "AssignmentExpression" === u.type && "Identifier" !== u.left.type) || r.computed || "Identifier" === r.object.type && "Identifier" === r.property.type && "MemberExpression" !== o.type && "OptionalMemberExpression" !== o.type;
      return wg([e.call(n, "object"), a ? Og(e, t, n) : Bg(Ng(wg([Tg, Og(e, t, n)])))]);
    },
    printMemberLookup: Og
  };
  const {getLast: Lg, isNextLineEmpty: Mg, isNextLineEmptyAfterIndex: jg, getNextNonSpaceNonCommentCharacterIndex: _g} = Lt, {hasLeadingComment: Rg, hasTrailingComment: Vg, isCallOrOptionalCallExpression: $g, isFunctionOrArrowExpression: qg, isLongCurriedCallExpression: Wg, isMemberish: Ug, isNumericLiteral: Jg, isSimpleCallArgument: zg} = wc, {locEnd: Hg} = ii, {builders: {concat: Gg, join: Xg, hardline: Yg, group: Kg, indent: Qg, conditionalGroup: Zg, breakParent: eD}, utils: {willBreak: tD}} = cn, {printMemberLookup: nD} = Ig, {printOptionalToken: rD, printFunctionTypeParameters: oD, printBindExpressionCallee: uD} = nd;
  var iD = function (e, t, n) {
    const r = e.getParentNode(), o = !r || "ExpressionStatement" === r.type, u = [];
    function i(e) {
      const {originalText: n} = t, r = _g(n, e, Hg);
      return ")" === n.charAt(r) ? !1 !== r && jg(n, r + 1) : Mg(n, e, Hg);
    }
    function a(e) {
      const r = e.getValue();
      $g(r) && (Ug(r.callee) || $g(r.callee)) ? (u.unshift({
        node: r,
        printed: Gg([Fa.printComments(e, () => Gg([rD(e), oD(e, t, n), Sg(e, t, n)]), t), i(r) ? Yg : ""])
      }), e.call(e => a(e), "callee")) : Ug(r) ? (u.unshift({
        node: r,
        needsParens: Rp(e, t),
        printed: Fa.printComments(e, () => "OptionalMemberExpression" === r.type || "MemberExpression" === r.type ? nD(e, t, n) : uD(e, t, n), t)
      }), e.call(e => a(e), "object")) : "TSNonNullExpression" === r.type ? (u.unshift({
        node: r,
        printed: Fa.printComments(e, () => "!", t)
      }), e.call(e => a(e), "expression")) : u.unshift({
        node: r,
        printed: e.call(n)
      });
    }
    const s = e.getValue();
    (u.unshift({
      node: s,
      printed: Gg([rD(e), oD(e, t, n), Sg(e, t, n)])
    }), s.callee && e.call(e => a(e), "callee"));
    const c = [];
    let l = [u[0]], p = 1;
    for (; p < u.length && ("TSNonNullExpression" === u[p].node.type || $g(u[p].node) || ("MemberExpression" === u[p].node.type || "OptionalMemberExpression" === u[p].node.type) && u[p].node.computed && Jg(u[p].node.property)); ++p) l.push(u[p]);
    if (!$g(u[0].node)) for (; p + 1 < u.length && (Ug(u[p].node) && Ug(u[p + 1].node)); ++p) l.push(u[p]);
    (c.push(l), l = []);
    let d = !1;
    for (; p < u.length; ++p) {
      if (d && Ug(u[p].node)) {
        if (u[p].node.computed && Jg(u[p].node.property)) {
          l.push(u[p]);
          continue;
        }
        (c.push(l), l = [], d = !1);
      }
      (($g(u[p].node) || "ImportExpression" === u[p].node.type) && (d = !0), l.push(u[p]), u[p].node.comments && u[p].node.comments.some(e => e.trailing) && (c.push(l), l = [], d = !1));
    }
    function f(e) {
      return (/^[A-Z]|^[$_]+$/).test(e);
    }
    l.length > 0 && c.push(l);
    const h = c.length >= 2 && !c[1][0].node.comments && (function (e) {
      const n = e[1].length && e[1][0].node.computed;
      if (1 === e[0].length) {
        const r = e[0][0].node;
        return "ThisExpression" === r.type || "Identifier" === r.type && (f(r.name) || o && (function (e) {
          return e.length <= t.tabWidth;
        })(r.name) || n);
      }
      const r = Lg(e[0]).node;
      return ("MemberExpression" === r.type || "OptionalMemberExpression" === r.type) && "Identifier" === r.property.type && (f(r.property.name) || n);
    })(c);
    function m(e) {
      const t = e.map(e => e.printed);
      return e.length > 0 && e[e.length - 1].needsParens ? Gg(["(", ...t, ")"]) : Gg(t);
    }
    const g = c.map(m), D = Gg(g), y = h ? 3 : 2, E = Yu(c), C = E.slice(1, -1).some(e => Rg(e.node)) || E.slice(0, -1).some(e => Vg(e.node)) || c[y] && Rg(c[y][0].node);
    if (c.length <= y && !C) return Wg(e) ? D : Kg(D);
    const b = Lg(c[h ? 1 : 0]).node, v = !$g(b) && i(b), A = Gg([m(c[0]), h ? Gg(c.slice(1, 2).map(m)) : "", v ? Yg : "", (function (e) {
      return 0 === e.length ? "" : Qg(Kg(Gg([Yg, Xg(Yg, e.map(m))])));
    })(c.slice(h ? 2 : 1))]), F = u.map(({node: e}) => e).filter($g);
    return C || F.length > 2 && F.some(e => !e.arguments.every(e => zg(e, 0))) || g.slice(0, -1).some(tD) || (function () {
      const e = Lg(Lg(c)).node, t = Lg(g);
      return $g(e) && tD(t) && F.slice(0, -1).some(e => e.arguments.some(qg));
    })() ? Kg(A) : Gg([tD(D) || v ? eD : "", Zg([D, A])]);
  };
  const {builders: {concat: aD, join: sD, group: cD}} = cn, {getCallArguments: lD, hasFlowAnnotationComment: pD, isCallOrOptionalCallExpression: dD, isMemberish: fD, isTemplateOnItsOwnLine: hD, isTestCall: mD, iterateCallArgumentsPath: gD} = wc, {printOptionalToken: DD, printFunctionTypeParameters: yD} = nd;
  var ED = {
    printCallExpression: function (e, t, n) {
      const r = e.getValue(), o = "NewExpression" === r.type, u = "ImportExpression" === r.type, i = DD(e), a = lD(r);
      if (a.length > 0 && (!u && !o && "Identifier" === r.callee.type && ("require" === r.callee.name || "define" === r.callee.name) || 1 === a.length && hD(a[0], t.originalText) || !o && mD(r, e.getParentNode()))) {
        const r = [];
        return (gD(e, e => {
          r.push(n(e));
        }), aD([o ? "new " : "", e.call(n, "callee"), i, yD(e, t, n), aD(["(", sD(", ", r), ")"])]));
      }
      const s = ("babel" === t.parser || "babel-flow" === t.parser) && r.callee && "Identifier" === r.callee.type && pD(r.callee.trailingComments);
      if ((s && (r.callee.trailingComments[0].printed = !0), !u && !o && fD(r.callee) && !e.call(e => Rp(e, t), "callee"))) return iD(e, t, n);
      const c = aD([o ? "new " : "", u ? "import" : e.call(n, "callee"), i, s ? ("/*:: ").concat(r.callee.trailingComments[0].value.slice(2).trim(), " */") : "", yD(e, t, n), Sg(e, t, n)]);
      return u || dD(r.callee) ? cD(c) : c;
    }
  };
  const {builders: {concat: CD, join: bD, line: vD, group: AD, indent: FD, ifBreak: xD}} = cn, {hasTrailingComment: SD, hasTrailingLineComment: wD, identity: TD} = wc, {getTypeParametersGroupId: BD} = Yh, {printTypeScriptModifiers: ND} = nd;
  var kD = {
    printInterface: function (e, t, n) {
      const r = e.getValue(), o = [];
      (("DeclareInterface" === r.type || r.declare) && o.push("declare "), "TSInterfaceDeclaration" === r.type && o.push(r.abstract ? "abstract " : "", ND(e, t, n)), o.push("interface"));
      const u = [], i = [];
      "InterfaceTypeAnnotation" !== r.type && u.push(" ", e.call(n, "id"), e.call(n, "typeParameters"));
      const a = r.typeParameters && !wD(r.typeParameters);
      if ((r.extends && 0 !== r.extends.length && i.push(a ? xD(" ", vD, {
        groupId: BD(r.typeParameters)
      }) : vD, "extends ", (1 === r.extends.length ? TD : FD)(bD(CD([",", vD]), e.map(n, "extends")))), r.id && SD(r.id) || r.extends && 0 !== r.extends.length)) {
        const e = CD(i);
        a ? o.push(AD(CD(u.concat(xD(FD(e), e))))) : o.push(AD(FD(CD(u.concat(e)))));
      } else o.push(...u, ...i);
      return (o.push(" ", e.call(n, "body")), AD(CD(o)));
    }
  };
  const {printComments: PD} = Fa, {getLast: OD} = Lt, {builders: {concat: ID, join: LD, line: MD, softline: jD, group: _D, indent: RD, align: VD, ifBreak: $D}, utils: {normalizeParts: qD}} = cn, {hasLeadingOwnLineComment: WD, hasTrailingLineComment: UD, isBinaryish: JD, isJSXNode: zD, shouldFlatten: HD} = wc;
  let GD = 0;
  function XD(e, t, n, r, o) {
    let u = [];
    const i = e.getValue();
    if (JD(i)) {
      HD(i.operator, i.left.operator) ? u = u.concat(e.call(e => XD(e, t, n, !0, o), "left")) : u.push(_D(e.call(t, "left")));
      const a = YD(i), s = ("|>" === i.operator || "NGPipeExpression" === i.type || "|" === i.operator && "__vue_expression" === n.parser) && !WD(n.originalText, i.right), c = "NGPipeExpression" === i.type ? "|" : i.operator, l = "NGPipeExpression" === i.type && 0 !== i.arguments.length ? _D(RD(ID([jD, ": ", LD(ID([jD, ":", $D(" ")]), e.map(t, "arguments").map(e => VD(2, _D(e))))]))) : "", p = ID(a ? [c, " ", e.call(t, "right"), l] : [s ? MD : "", c, s ? " " : MD, e.call(t, "right"), l]), d = e.getParentNode(), f = UD(i.left), h = f || !(o && "LogicalExpression" === i.type) && d.type !== i.type && i.left.type !== i.type && i.right.type !== i.type;
      (u.push(s ? "" : " ", h ? _D(p, {
        shouldBreak: f
      }) : p), r && i.comments && (u = qD(PD(e, () => ID(u), n).parts)));
    } else u.push(_D(e.call(t)));
    return u;
  }
  function YD(e) {
    return "LogicalExpression" === e.type && ("ObjectExpression" === e.right.type && 0 !== e.right.properties.length || ("ArrayExpression" === e.right.type && 0 !== e.right.elements.length || !!zD(e.right)));
  }
  var KD = {
    printBinaryishExpression: function (e, t, n) {
      const r = e.getValue(), o = e.getParentNode(), u = e.getParentNode(1), i = r !== o.body && ("IfStatement" === o.type || "WhileStatement" === o.type || "SwitchStatement" === o.type || "DoWhileStatement" === o.type), a = XD(e, n, t, !1, i);
      if (i) return ID(a);
      if (("CallExpression" === o.type || "OptionalCallExpression" === o.type) && o.callee === r || "UnaryExpression" === o.type || ("MemberExpression" === o.type || "OptionalMemberExpression" === o.type) && !o.computed) return _D(ID([RD(ID([jD, ID(a)])), jD]));
      const s = "ReturnStatement" === o.type || "ThrowStatement" === o.type || "JSXExpressionContainer" === o.type && "JSXAttribute" === u.type || "|" !== r.operator && "JsExpressionRoot" === o.type || "NGPipeExpression" !== r.type && ("NGRoot" === o.type && "__ng_binding" === t.parser || "NGMicrosyntaxExpression" === o.type && "NGMicrosyntax" === u.type && 1 === u.body.length) || r === o.body && "ArrowFunctionExpression" === o.type || r !== o.body && "ForStatement" === o.type || "ConditionalExpression" === o.type && "ReturnStatement" !== u.type && "ThrowStatement" !== u.type && "CallExpression" !== u.type && "OptionalCallExpression" !== u.type || "TemplateLiteral" === o.type, c = "AssignmentExpression" === o.type || "VariableDeclarator" === o.type || "ClassProperty" === o.type || "FieldDefinition" === o.type || "TSAbstractClassProperty" === o.type || "ClassPrivateProperty" === o.type || "ObjectProperty" === o.type || "Property" === o.type, l = JD(r.left) && HD(r.operator, r.left.operator);
      if (s || YD(r) && !l || !YD(r) && c) return _D(ID(a));
      if (0 === a.length) return "";
      const p = zD(r.right), d = a.findIndex(e => "string" != typeof e && "group" === e.type), f = a.slice(0, -1 === d ? 1 : d + 1), h = ID(a.slice(f.length, p ? -1 : void 0)), m = Symbol("logicalChain-" + ++GD), g = _D(ID([...f, RD(h)]), {
        id: m
      });
      if (!p) return g;
      const D = OD(a);
      return _D(ID([g, $D(RD(D), D, {
        groupId: m
      })]));
    },
    shouldInlineLogicalExpression: YD
  };
  const {builders: {concat: QD, line: ZD, group: ey, indent: ty}} = cn, {hasLeadingOwnLineComment: ny, isBinaryish: ry, isMemberExpressionChain: oy, isStringLiteral: uy} = wc, {shouldInlineLogicalExpression: iy} = KD;
  function ay(e, t, n, r, o, u) {
    if (!r) return t;
    const i = sy(e, r, o, u);
    return ey(QD([t, n, i]));
  }
  function sy(e, t, n, r) {
    if (ny(r.originalText, t)) return ty(QD([ZD, n]));
    return ry(t) && !iy(t) || "ConditionalExpression" === t.type && ry(t.test) && !iy(t.test) || "StringLiteralTypeAnnotation" === t.type || "ClassExpression" === t.type && t.decorators && t.decorators.length || ("Identifier" === e.type || uy(e) || "MemberExpression" === e.type) && (uy(t) || oy(t)) && "json" !== r.parser && "json5" !== r.parser || "SequenceExpression" === t.type ? ey(ty(QD([ZD, n]))) : QD([" ", n]);
  }
  var cy = {
    printVariableDeclarator: function (e, t, n) {
      const r = e.getValue();
      return ay(r.id, e.call(n, "id"), " =", r.init, r.init && e.call(n, "init"), t);
    },
    printAssignmentExpression: function (e, t, n) {
      const r = e.getValue();
      return ay(r.left, e.call(n, "left"), QD([" ", r.operator]), r.right, e.call(n, "right"), t);
    },
    printAssignment: ay,
    printAssignmentRight: sy
  };
  const {isNextLineEmpty: ly} = Lt, {builders: {concat: py, join: dy, hardline: fy}} = cn, {classChildNeedsASIProtection: hy, classPropMayCauseASIProblems: my, getLeftSidePathName: gy, hasNakedLeftSide: Dy, isJSXNode: yy, isLastStatement: Ey, isTheOnlyJSXElementInMarkdown: Cy} = wc, {locEnd: by} = ii, {shouldPrintParamsWithoutParens: vy} = Lm;
  function Ay({path: e, index: t, bodyNode: n, isClass: r}, o, u) {
    const i = e.getValue();
    if (!i) return;
    if ("EmptyStatement" === i.type) return;
    const a = u(e), s = o.originalText, c = [];
    if ((o.semi || r || Cy(o, e) || !(function (e, t) {
      if ("ExpressionStatement" !== e.getNode().type) return !1;
      return e.call(e => Fy(e, t), "expression");
    })(e, o) ? c.push(a) : i.comments && i.comments.some(e => e.leading) ? c.push(u(e, {
      needsSemi: !0
    })) : c.push(";", a), !o.semi && r)) if (my(e)) c.push(";"); else if ("ClassProperty" === i.type || "FieldDefinition" === i.type) {
      const e = n.body[t + 1];
      hy(e) && c.push(";");
    }
    return (ly(s, i, by) && !Ey(e) && c.push(fy), py(c));
  }
  function Fy(e, t) {
    const n = e.getValue();
    return !!(Rp(e, t) || "ParenthesizedExpression" === n.type || "TypeCastExpression" === n.type || "ArrowFunctionExpression" === n.type && !vy(e, t) || "ArrayExpression" === n.type || "ArrayPattern" === n.type || "UnaryExpression" === n.type && n.prefix && ("+" === n.operator || "-" === n.operator) || "TemplateLiteral" === n.type || "TemplateElement" === n.type || yy(n) || "BindExpression" === n.type && !n.object || "RegExpLiteral" === n.type || "Literal" === n.type && n.pattern || "Literal" === n.type && n.regex) || !!Dy(n) && e.call(e => Fy(e, t), ...gy(e, n));
  }
  var xy = {
    printStatementSequence: function (e, t, n) {
      const r = e.getNode(), o = "ClassBody" === r.type, u = e.map((u, i) => Ay({
        path: e,
        index: i,
        bodyNode: r,
        isClass: o
      }, t, n)).filter(Boolean);
      return dy(fy, u);
    }
  };
  const {printDanglingComments: Sy} = Fa, {isNextLineEmpty: wy} = Lt, {builders: {concat: Ty, hardline: By, indent: Ny}} = cn, {hasDanglingComments: ky} = wc, {locEnd: Py} = ii, {printStatementSequence: Oy} = xy;
  var Iy = {
    printBlock: function (e, t, n) {
      const r = e.getValue(), o = [], u = t.semi ? ";" : "", i = e.call(e => Oy(e, t, n), "body");
      "StaticBlock" === r.type && o.push("static ");
      const a = r.body.some(e => "EmptyStatement" !== e.type), s = r.directives && r.directives.length > 0, c = e.getParentNode(), l = e.getParentNode(1);
      return a || s || ky(r) || "ArrowFunctionExpression" !== c.type && "FunctionExpression" !== c.type && "FunctionDeclaration" !== c.type && "ObjectMethod" !== c.type && "ClassMethod" !== c.type && "ClassPrivateMethod" !== c.type && "ForStatement" !== c.type && "WhileStatement" !== c.type && "DoWhileStatement" !== c.type && "DoExpression" !== c.type && ("CatchClause" !== c.type || l.finalizer) && "TSModuleDeclaration" !== c.type && "TSDeclareFunction" !== c.type && "StaticBlock" !== r.type ? (o.push("{"), s && e.each(e => {
        (o.push(Ny(Ty([By, n(e), u]))), wy(t.originalText, e.getValue(), Py) && o.push(By));
      }, "directives"), a && o.push(Ny(Ty([By, i]))), o.push(Sy(e, t)), o.push(By, "}"), Ty(o)) : Ty([...o, "{}"]);
    }
  };
  const {hasNewline: Ly} = Lt, {builders: {concat: My, join: jy, hardline: _y}} = cn, {isLineComment: Ry, isBlockComment: Vy} = wc, {locStart: $y, locEnd: qy} = ii;
  var Wy = {
    printComment: function (e, t) {
      const n = e.getValue();
      if (Ry(n)) return t.originalText.slice($y(n), qy(n)).trimEnd();
      if (Vy(n)) {
        if ((function (e) {
          const t = ("*").concat(e.value, "*").split("\n");
          return t.length > 1 && t.every(e => "*" === e.trim()[0]);
        })(n)) {
          const e = (function (e) {
            const t = e.value.split("\n");
            return My(["/*", jy(_y, t.map((e, n) => 0 === n ? e.trimEnd() : " " + (n < t.length - 1 ? e.trim() : e.trimStart()))), "*/"]);
          })(n);
          return n.trailing && !Ly(t.originalText, $y(n), {
            backwards: !0
          }) ? My([_y, e]) : e;
        }
        const e = qy(n), r = "*-/" === t.originalText.slice(e - 3, e);
        return "/*" + n.value + (r ? "*-/" : "*/");
      }
      throw new Error("Not a comment: " + JSON.stringify(n));
    }
  };
  const {hasNewline: Uy, hasNewlineInRange: Jy, getLast: zy, printString: Hy, printNumber: Gy, isNextLineEmpty: Xy} = Lt, {builders: {concat: Yy, join: Ky, line: Qy, hardline: Zy, softline: eE, literalline: tE, group: nE, indent: rE, align: oE, conditionalGroup: uE, ifBreak: iE}, utils: {isEmpty: aE}} = cn, {insertPragma: sE} = Sp, {printHtmlBinding: cE, isVueEventBindingExpression: lE} = zp, {getFunctionParameters: pE, getCallArguments: dE, getParentExportDeclaration: fE, getTypeScriptMappedTypeModifier: hE, hasDanglingComments: mE, hasFlowShorthandAnnotationComment: gE, hasLeadingOwnLineComment: DE, hasNewlineBetweenOrAfterDecorators: yE, hasNgSideEffect: EE, hasPrettierIgnore: CE, hasTrailingComment: bE, isExportDeclaration: vE, isFunctionNotation: AE, isGetterOrSetter: FE, isLiteral: xE, isNgForOf: SE, isObjectType: wE, isObjectTypePropertyAFunction: TE, isTheOnlyJSXElementInMarkdown: BE, isTSXFile: NE, isBlockComment: kE, needsHardlineAfterDanglingComment: PE, rawText: OE, shouldPrintComma: IE} = wc, {locStart: LE, locEnd: ME} = ii, {printOptionalToken: jE, printBindExpressionCallee: _E, printTypeScriptModifiers: RE, printDecorators: VE, printFlowDeclaration: $E, adjustClause: qE} = nd, {printImportDeclaration: WE, printExportDeclaration: UE, printExportAllDeclaration: JE, printModuleSpecifier: zE} = bd, {printFunctionParameters: HE} = af, {printTemplateLiteral: GE} = Fl, {printArray: XE, printArrayItems: YE} = Tf, {printObject: KE} = Kf, {printTypeAnnotation: QE, shouldHugType: ZE} = df, {printJsxElement: eC, printJsxAttribute: tC, printJsxOpeningElement: nC, printJsxClosingElement: rC, printJsxOpeningClosingFragment: oC, printJsxExpressionContainer: uC, printJsxEmptyExpression: iC, printJsxSpreadAttribute: aC, printJsxSpreadChild: sC} = Ph, {printClass: cC, printClassMethod: lC} = eg, {printTypeParameters: pC} = Yh, {printPropertyKey: dC} = am, {printFunctionDeclaration: fC, printArrowFunctionExpression: hC, printMethod: mC, printReturnAndThrowArgument: gC} = Lm, {printCallExpression: DC} = ED, {printInterface: yC} = kD, {printVariableDeclarator: EC, printAssignmentExpression: CC, printAssignment: bC, printAssignmentRight: vC} = cy, {printBinaryishExpression: AC} = KD, {printStatementSequence: FC} = xy, {printMemberExpression: xC} = Ig, {printBlock: SC} = Iy, {printComment: wC} = Wy;
  function TC(e, t, n) {
    const r = OE(e), o = n || "DirectiveLiteral" === e.type;
    return Hy(r, t, o);
  }
  function BC(e) {
    const t = e.flags.split("").sort().join("");
    return ("/").concat(e.pattern, "/").concat(t);
  }
  var NC = {
    preprocess: Hp,
    print: function (e, t, n, r) {
      const o = e.getValue();
      let u = !1;
      const i = (function (e, t, n, r) {
        const o = e.getValue(), u = t.semi ? ";" : "";
        if (!o) return "";
        if ("string" == typeof o) return o;
        const i = cE(e, t, n);
        if (i) return i;
        let a = [];
        switch (o.type) {
          case "JsExpressionRoot":
            return e.call(n, "node");
          case "JsonRoot":
            return Yy([e.call(n, "node"), Zy]);
          case "File":
            return (o.program && o.program.interpreter && a.push(e.call(e => e.call(n, "interpreter"), "program")), a.push(e.call(n, "program")), Yy(a));
          case "Program":
            {
              const r = !o.body.every(({type: e}) => "EmptyStatement" === e) || o.comments;
              if (o.directives) {
                const i = o.directives.length;
                e.each((e, o) => {
                  (a.push(n(e), u, Zy), (o < i - 1 || r) && Xy(t.originalText, e.getValue(), ME) && a.push(Zy));
                }, "directives");
              }
              return (a.push(e.call(e => FC(e, t, n), "body")), a.push(Fa.printDanglingComments(e, t, !0)), r && a.push(Zy), Yy(a));
            }
          case "EmptyStatement":
            return "";
          case "ExpressionStatement":
            if (o.directive) return Yy([TC(o.expression, t, !0), u]);
            if ("__vue_event_binding" === t.parser) {
              const t = e.getParentNode();
              if ("Program" === t.type && 1 === t.body.length && t.body[0] === o) return Yy([e.call(n, "expression"), lE(o.expression) ? ";" : ""]);
            }
            return Yy([e.call(n, "expression"), BE(t, e) ? "" : u]);
          case "ParenthesizedExpression":
            return !o.expression.comments ? Yy(["(", e.call(n, "expression"), ")"]) : nE(Yy(["(", rE(Yy([eE, e.call(n, "expression")])), eE, ")"]));
          case "AssignmentExpression":
            return CC(e, t, n);
          case "VariableDeclarator":
            return EC(e, t, n);
          case "BinaryExpression":
          case "LogicalExpression":
          case "NGPipeExpression":
            return AC(e, t, n);
          case "AssignmentPattern":
            return Yy([e.call(n, "left"), " = ", e.call(n, "right")]);
          case "TSTypeAssertion":
            {
              const t = !("ArrayExpression" === o.expression.type || "ObjectExpression" === o.expression.type), r = nE(Yy(["<", rE(Yy([eE, e.call(n, "typeAnnotation")])), eE, ">"])), u = Yy([iE("("), rE(Yy([eE, e.call(n, "expression")])), eE, iE(")")]);
              return t ? uE([Yy([r, e.call(n, "expression")]), Yy([r, nE(u, {
                shouldBreak: !0
              })]), Yy([r, e.call(n, "expression")])]) : nE(Yy([r, e.call(n, "expression")]));
            }
          case "OptionalMemberExpression":
          case "MemberExpression":
            return xC(e, t, n);
          case "MetaProperty":
            return Yy([e.call(n, "meta"), ".", e.call(n, "property")]);
          case "BindExpression":
            return (o.object && a.push(e.call(n, "object")), a.push(nE(rE(Yy([eE, _E(e, t, n)])))), Yy(a));
          case "Identifier":
            return Yy([o.name, jE(e), QE(e, t, n)]);
          case "V8IntrinsicIdentifier":
            return Yy(["%", o.name]);
          case "SpreadElement":
          case "SpreadElementPattern":
          case "SpreadProperty":
          case "SpreadPropertyPattern":
          case "RestElement":
          case "ObjectTypeSpreadProperty":
            return Yy(["...", e.call(n, "argument"), QE(e, t, n)]);
          case "FunctionDeclaration":
          case "FunctionExpression":
            return (a.push(fC(e, n, t, r && r.expandLastArg && dE(e.getParentNode()).length > 1)), o.body || a.push(u), Yy(a));
          case "ArrowFunctionExpression":
            return hC(e, t, n, r);
          case "YieldExpression":
            return (a.push("yield"), o.delegate && a.push("*"), o.argument && a.push(" ", e.call(n, "argument")), Yy(a));
          case "AwaitExpression":
            {
              (a.push("await"), o.argument && a.push(" ", e.call(n, "argument")));
              const t = e.getParentNode();
              return ("CallExpression" === t.type || "OptionalCallExpression" === t.type) && t.callee === o || ("MemberExpression" === t.type || "OptionalMemberExpression" === t.type) && t.object === o ? nE(Yy([rE(Yy([eE, Yy(a)])), eE])) : Yy(a);
            }
          case "TSExportAssignment":
            return Yy(["export = ", e.call(n, "expression"), u]);
          case "ExportDefaultDeclaration":
          case "ExportNamedDeclaration":
          case "DeclareExportDeclaration":
            return UE(e, t, n);
          case "ExportAllDeclaration":
          case "DeclareExportAllDeclaration":
            return JE(e, t, n);
          case "ImportDeclaration":
            return WE(e, t, n);
          case "ImportSpecifier":
          case "ExportSpecifier":
          case "ImportNamespaceSpecifier":
          case "ExportNamespaceSpecifier":
          case "ImportDefaultSpecifier":
          case "ExportDefaultSpecifier":
            return zE(e, t, n);
          case "ImportAttribute":
            return Yy([e.call(n, "key"), ": ", e.call(n, "value")]);
          case "Import":
            return "import";
          case "TSModuleBlock":
          case "BlockStatement":
          case "StaticBlock":
            return SC(e, t, n);
          case "ThrowStatement":
          case "ReturnStatement":
            return Yy(["ReturnStatement" === o.type ? "return" : "throw", gC(e, t, n)]);
          case "NewExpression":
          case "ImportExpression":
          case "OptionalCallExpression":
          case "CallExpression":
            return DC(e, t, n);
          case "ObjectTypeInternalSlot":
            return Yy([o.static ? "static " : "", "[[", e.call(n, "id"), "]]", jE(e), o.method ? "" : ": ", e.call(n, "value")]);
          case "ObjectExpression":
          case "ObjectPattern":
          case "ObjectTypeAnnotation":
          case "TSInterfaceBody":
          case "TSTypeLiteral":
          case "RecordExpression":
            return KE(e, t, n);
          case "ObjectProperty":
          case "Property":
            return o.method || "get" === o.kind || "set" === o.kind ? mC(e, t, n) : (o.shorthand ? a.push(e.call(n, "value")) : a.push(bC(o.key, dC(e, t, n), ":", o.value, e.call(n, "value"), t)), Yy(a));
          case "ClassMethod":
          case "ClassPrivateMethod":
          case "MethodDefinition":
          case "TSAbstractMethodDefinition":
          case "TSDeclareMethod":
            return lC(e, t, n);
          case "ObjectMethod":
            return mC(e, t, n);
          case "Decorator":
            return Yy(["@", e.call(n, "expression"), e.call(n, "callee")]);
          case "ArrayExpression":
          case "ArrayPattern":
          case "TupleExpression":
            return XE(e, t, n);
          case "SequenceExpression":
            {
              const t = e.getParentNode(0);
              if ("ExpressionStatement" === t.type || "ForStatement" === t.type) {
                const t = [];
                return (e.each(e => {
                  0 === e.getName() ? t.push(n(e)) : t.push(",", rE(Yy([Qy, n(e)])));
                }, "expressions"), nE(Yy(t)));
              }
              return nE(Yy([Ky(Yy([",", Qy]), e.map(n, "expressions"))]));
            }
          case "ThisExpression":
            return "this";
          case "Super":
            return "super";
          case "NullLiteral":
            return "null";
          case "RegExpLiteral":
            return BC(o);
          case "NumericLiteral":
            return Gy(o.extra.raw);
          case "DecimalLiteral":
            return Gy(o.value) + "m";
          case "BigIntLiteral":
            return (o.bigint || o.extra.raw).toLowerCase();
          case "BooleanLiteral":
          case "StringLiteral":
          case "Literal":
            return o.regex ? BC(o.regex) : o.bigint ? o.raw.toLowerCase() : "number" == typeof o.value ? Gy(o.raw) : "string" != typeof o.value ? "" + o.value : TC(o, t);
          case "Directive":
            return e.call(n, "value");
          case "DirectiveLiteral":
            return TC(o, t);
          case "UnaryExpression":
            return (a.push(o.operator), (/[a-z]$/).test(o.operator) && a.push(" "), o.argument.comments && o.argument.comments.length > 0 ? a.push(nE(Yy(["(", rE(Yy([eE, e.call(n, "argument")])), eE, ")"]))) : a.push(e.call(n, "argument")), Yy(a));
          case "UpdateExpression":
            return (a.push(e.call(n, "argument"), o.operator), o.prefix && a.reverse(), Yy(a));
          case "ConditionalExpression":
            return Md(e, t, n, {
              beforeParts: () => [e.call(n, "test")],
              afterParts: e => [e ? eE : ""],
              shouldCheckJsx: !0,
              conditionalNodeType: "ConditionalExpression",
              consequentNodePropertyName: "consequent",
              alternateNodePropertyName: "alternate",
              testNodePropertyNames: ["test"]
            });
          case "VariableDeclaration":
            {
              const t = e.map(e => n(e), "declarations"), r = e.getParentNode(), i = "ForStatement" === r.type || "ForInStatement" === r.type || "ForOfStatement" === r.type, s = o.declarations.some(e => e.init);
              let c;
              return (1 !== t.length || o.declarations[0].comments ? t.length > 0 && (c = rE(t[0])) : c = t[0], a = [o.declare ? "declare " : "", o.kind, c ? Yy([" ", c]) : "", rE(Yy(t.slice(1).map(e => Yy([",", s && !i ? Zy : Qy, e]))))], i && r.body !== o || a.push(u), nE(Yy(a)));
            }
          case "TSTypeAliasDeclaration":
            {
              o.declare && a.push("declare ");
              const r = vC(o.id, o.typeAnnotation, o.typeAnnotation && e.call(n, "typeAnnotation"), t);
              return (a.push("type ", e.call(n, "id"), e.call(n, "typeParameters"), " =", r, u), nE(Yy(a)));
            }
          case "WithStatement":
            return nE(Yy(["with (", e.call(n, "object"), ")", qE(o.body, e.call(n, "body"))]));
          case "IfStatement":
            {
              const r = qE(o.consequent, e.call(n, "consequent")), u = nE(Yy(["if (", nE(Yy([rE(Yy([eE, e.call(n, "test")])), eE])), ")", r]));
              if ((a.push(u), o.alternate)) {
                const r = bE(o.consequent) && o.consequent.comments.some(e => e.trailing && !kE(e)) || PE(o), u = "BlockStatement" === o.consequent.type && !r;
                (a.push(u ? " " : Zy), mE(o) && a.push(Fa.printDanglingComments(e, t, !0), r ? Zy : " "), a.push("else", nE(qE(o.alternate, e.call(n, "alternate"), "IfStatement" === o.alternate.type))));
              }
              return Yy(a);
            }
          case "ForStatement":
            {
              const r = qE(o.body, e.call(n, "body")), u = Fa.printDanglingComments(e, t, !0), i = u ? Yy([u, eE]) : "";
              return o.init || o.test || o.update ? Yy([i, nE(Yy(["for (", nE(Yy([rE(Yy([eE, e.call(n, "init"), ";", Qy, e.call(n, "test"), ";", Qy, e.call(n, "update")])), eE])), ")", r]))]) : Yy([i, nE(Yy(["for (;;)", r]))]);
            }
          case "WhileStatement":
            return nE(Yy(["while (", nE(Yy([rE(Yy([eE, e.call(n, "test")])), eE])), ")", qE(o.body, e.call(n, "body"))]));
          case "ForInStatement":
            return nE(Yy(["for (", e.call(n, "left"), " in ", e.call(n, "right"), ")", qE(o.body, e.call(n, "body"))]));
          case "ForOfStatement":
            return nE(Yy(["for", o.await ? " await" : "", " (", e.call(n, "left"), " of ", e.call(n, "right"), ")", qE(o.body, e.call(n, "body"))]));
          case "DoWhileStatement":
            {
              const t = qE(o.body, e.call(n, "body")), r = nE(Yy(["do", t]));
              return (a = [r], "BlockStatement" === o.body.type ? a.push(" ") : a.push(Zy), a.push("while ("), a.push(nE(Yy([rE(Yy([eE, e.call(n, "test")])), eE])), ")", u), Yy(a));
            }
          case "DoExpression":
            return Yy(["do ", e.call(n, "body")]);
          case "BreakStatement":
            return (a.push("break"), o.label && a.push(" ", e.call(n, "label")), a.push(u), Yy(a));
          case "ContinueStatement":
            return (a.push("continue"), o.label && a.push(" ", e.call(n, "label")), a.push(u), Yy(a));
          case "LabeledStatement":
            return "EmptyStatement" === o.body.type ? Yy([e.call(n, "label"), ":;"]) : Yy([e.call(n, "label"), ": ", e.call(n, "body")]);
          case "TryStatement":
            return Yy(["try ", e.call(n, "block"), o.handler ? Yy([" ", e.call(n, "handler")]) : "", o.finalizer ? Yy([" finally ", e.call(n, "finalizer")]) : ""]);
          case "CatchClause":
            if (o.param) {
              const r = o.param.comments && o.param.comments.some(e => !kE(e) || e.leading && Uy(t.originalText, ME(e)) || e.trailing && Uy(t.originalText, LE(e), {
                backwards: !0
              })), u = e.call(n, "param");
              return Yy(["catch ", Yy(r ? ["(", rE(Yy([eE, u])), eE, ") "] : ["(", u, ") "]), e.call(n, "body")]);
            }
            return Yy(["catch ", e.call(n, "body")]);
          case "SwitchStatement":
            return Yy([nE(Yy(["switch (", rE(Yy([eE, e.call(n, "discriminant")])), eE, ")"])), " {", o.cases.length > 0 ? rE(Yy([Zy, Ky(Zy, e.map(e => {
              const r = e.getValue();
              return Yy([e.call(n), o.cases.indexOf(r) !== o.cases.length - 1 && Xy(t.originalText, r, ME) ? Zy : ""]);
            }, "cases"))])) : "", Zy, "}"]);
          case "SwitchCase":
            {
              o.test ? a.push("case ", e.call(n, "test"), ":") : a.push("default:");
              const r = o.consequent.filter(e => "EmptyStatement" !== e.type);
              if (r.length > 0) {
                const o = e.call(e => FC(e, t, n), "consequent");
                a.push(1 === r.length && "BlockStatement" === r[0].type ? Yy([" ", o]) : rE(Yy([Zy, o])));
              }
              return Yy(a);
            }
          case "DebuggerStatement":
            return Yy(["debugger", u]);
          case "JSXAttribute":
            return tC(e, t, n);
          case "JSXIdentifier":
            return "" + o.name;
          case "JSXNamespacedName":
            return Ky(":", [e.call(n, "namespace"), e.call(n, "name")]);
          case "JSXMemberExpression":
            return Ky(".", [e.call(n, "object"), e.call(n, "property")]);
          case "TSQualifiedName":
            return Ky(".", [e.call(n, "left"), e.call(n, "right")]);
          case "JSXSpreadAttribute":
            return aC(e, t, n);
          case "JSXSpreadChild":
            return sC(e, t, n);
          case "JSXExpressionContainer":
            return uC(e, t, n);
          case "JSXFragment":
          case "JSXElement":
            return eC(e, t, n);
          case "JSXOpeningElement":
            return nC(e, t, n);
          case "JSXClosingElement":
            return rC(e, t, n);
          case "JSXOpeningFragment":
          case "JSXClosingFragment":
            return oC(e, t);
          case "JSXText":
            throw new Error("JSXTest should be handled by JSXElement");
          case "JSXEmptyExpression":
            return iC(e, t);
          case "ClassBody":
            return o.comments || 0 !== o.body.length ? Yy(["{", o.body.length > 0 ? rE(Yy([Zy, e.call(e => FC(e, t, n), "body")])) : Fa.printDanglingComments(e, t), Zy, "}"]) : "{}";
          case "ClassProperty":
          case "FieldDefinition":
          case "TSAbstractClassProperty":
          case "ClassPrivateProperty":
            return (o.decorators && 0 !== o.decorators.length && a.push(VE(e, t, n)), o.accessibility && a.push(o.accessibility + " "), o.declare && a.push("declare "), o.static && a.push("static "), ("TSAbstractClassProperty" === o.type || o.abstract) && a.push("abstract "), o.readonly && a.push("readonly "), o.variance && a.push(e.call(n, "variance")), a.push(dC(e, t, n), jE(e), QE(e, t, n)), o.value && a.push(" =", vC(o.key, o.value, e.call(n, "value"), t)), a.push(u), nE(Yy(a)));
          case "ClassDeclaration":
          case "ClassExpression":
            return (o.declare && a.push("declare "), a.push(cC(e, t, n)), Yy(a));
          case "TSInterfaceHeritage":
          case "TSExpressionWithTypeArguments":
            return (a.push(e.call(n, "expression")), o.typeParameters && a.push(e.call(n, "typeParameters")), Yy(a));
          case "TemplateElement":
            return Ky(tE, o.value.raw.split(/\r?\n/g));
          case "TSTemplateLiteralType":
          case "TemplateLiteral":
            return GE(e, n, t);
          case "TaggedTemplateExpression":
            return Yy([e.call(n, "tag"), e.call(n, "typeParameters"), e.call(n, "quasi")]);
          case "Node":
          case "Printable":
          case "SourceLocation":
          case "Position":
          case "Statement":
          case "Function":
          case "Pattern":
          case "Expression":
          case "Declaration":
          case "Specifier":
          case "NamedSpecifier":
          case "Comment":
          case "MemberTypeAnnotation":
          case "Type":
            throw new Error("unprintable type: " + JSON.stringify(o.type));
          case "TypeAnnotation":
          case "TSTypeAnnotation":
            return o.typeAnnotation ? e.call(n, "typeAnnotation") : "";
          case "TSNamedTupleMember":
            return Yy([e.call(n, "label"), o.optional ? "?" : "", ": ", e.call(n, "elementType")]);
          case "TSTupleType":
          case "TupleTypeAnnotation":
            {
              const r = "TSTupleType" === o.type ? "elementTypes" : "types", u = o[r].length > 0 && "TSRestType" === zy(o[r]).type;
              return nE(Yy(["[", rE(Yy([eE, YE(e, t, r, n)])), iE(IE(t, "all") && !u ? "," : ""), Fa.printDanglingComments(e, t, !0), eE, "]"]));
            }
          case "ExistsTypeAnnotation":
            return "*";
          case "EmptyTypeAnnotation":
            return "empty";
          case "MixedTypeAnnotation":
            return "mixed";
          case "ArrayTypeAnnotation":
            return Yy([e.call(n, "elementType"), "[]"]);
          case "BooleanLiteralTypeAnnotation":
            return "" + o.value;
          case "DeclareClass":
            return $E(e, cC(e, t, n));
          case "TSDeclareFunction":
            return Yy([o.declare ? "declare " : "", fC(e, n, t), u]);
          case "DeclareFunction":
            return $E(e, Yy(["function ", e.call(n, "id"), o.predicate ? " " : "", e.call(n, "predicate"), u]));
          case "DeclareModule":
            return $E(e, Yy(["module ", e.call(n, "id"), " ", e.call(n, "body")]));
          case "DeclareModuleExports":
            return $E(e, Yy(["module.exports", ": ", e.call(n, "typeAnnotation"), u]));
          case "DeclareVariable":
            return $E(e, Yy(["var ", e.call(n, "id"), u]));
          case "DeclareOpaqueType":
          case "OpaqueType":
            return (a.push("opaque type ", e.call(n, "id"), e.call(n, "typeParameters")), o.supertype && a.push(": ", e.call(n, "supertype")), o.impltype && a.push(" = ", e.call(n, "impltype")), a.push(u), "DeclareOpaqueType" === o.type ? $E(e, Yy(a)) : Yy(a));
          case "EnumDeclaration":
            return Yy(["enum ", e.call(n, "id"), " ", e.call(n, "body")]);
          case "EnumBooleanBody":
          case "EnumNumberBody":
          case "EnumStringBody":
          case "EnumSymbolBody":
            if ("EnumSymbolBody" === o.type || o.explicitType) {
              let e = null;
              switch (o.type) {
                case "EnumBooleanBody":
                  e = "boolean";
                  break;
                case "EnumNumberBody":
                  e = "number";
                  break;
                case "EnumStringBody":
                  e = "string";
                  break;
                case "EnumSymbolBody":
                  e = "symbol";
              }
              a.push("of ", e, " ");
            }
            if (0 !== o.members.length || o.hasUnknownMembers) {
              const r = o.members.length ? [Zy, YE(e, t, "members", n), o.hasUnknownMembers || IE(t) ? "," : ""] : [];
              a.push(nE(Yy(["{", rE(Yy([...r, ...o.hasUnknownMembers ? [Zy, "..."] : []])), Fa.printDanglingComments(e, t, !0), Zy, "}"])));
            } else a.push(nE(Yy(["{", Fa.printDanglingComments(e, t), eE, "}"])));
            return Yy(a);
          case "EnumBooleanMember":
          case "EnumNumberMember":
          case "EnumStringMember":
            return Yy([e.call(n, "id"), " = ", "object" == typeof o.init ? e.call(n, "init") : String(o.init)]);
          case "EnumDefaultedMember":
            return e.call(n, "id");
          case "FunctionTypeAnnotation":
          case "TSFunctionType":
            {
              const r = e.getParentNode(0), u = e.getParentNode(1), i = e.getParentNode(2);
              let s = "TSFunctionType" === o.type || !(("ObjectTypeProperty" === r.type || "ObjectTypeInternalSlot" === r.type) && !r.variance && !r.optional && LE(r) === LE(o) || "ObjectTypeCallProperty" === r.type || i && "DeclareFunction" === i.type), c = s && ("TypeAnnotation" === r.type || "TSTypeAnnotation" === r.type);
              const l = c && s && ("TypeAnnotation" === r.type || "TSTypeAnnotation" === r.type) && "ArrowFunctionExpression" === u.type;
              return (TE(r) && (s = !0, c = !0), l && a.push("("), a.push(HE(e, n, t, !1, !0)), (o.returnType || o.predicate || o.typeAnnotation) && a.push(s ? " => " : ": ", e.call(n, "returnType"), e.call(n, "predicate"), e.call(n, "typeAnnotation")), l && a.push(")"), nE(Yy(a)));
            }
          case "TSRestType":
            return Yy(["...", e.call(n, "typeAnnotation")]);
          case "TSOptionalType":
            return Yy([e.call(n, "typeAnnotation"), "?"]);
          case "FunctionTypeParam":
            {
              const t = o.name ? e.call(n, "name") : e.getParentNode().this === o ? "this" : "";
              return Yy([t, jE(e), t ? ": " : "", e.call(n, "typeAnnotation")]);
            }
          case "DeclareInterface":
          case "InterfaceDeclaration":
          case "InterfaceTypeAnnotation":
          case "TSInterfaceDeclaration":
            return yC(e, t, n);
          case "ClassImplements":
          case "InterfaceExtends":
            return Yy([e.call(n, "id"), e.call(n, "typeParameters")]);
          case "TSClassImplements":
            return Yy([e.call(n, "expression"), e.call(n, "typeParameters")]);
          case "TSIntersectionType":
          case "IntersectionTypeAnnotation":
            {
              const t = e.map(n, "types"), r = [];
              let u = !1;
              for (let e = 0; e < t.length; ++e) 0 === e ? r.push(t[e]) : wE(o.types[e - 1]) && wE(o.types[e]) ? r.push(Yy([" & ", u ? rE(t[e]) : t[e]])) : wE(o.types[e - 1]) || wE(o.types[e]) ? (e > 1 && (u = !0), r.push(" & ", e > 1 ? rE(t[e]) : t[e])) : r.push(rE(Yy([" &", Qy, t[e]])));
              return nE(Yy(r));
            }
          case "TSUnionType":
          case "UnionTypeAnnotation":
            {
              const r = e.getParentNode(), u = !("TypeParameterInstantiation" === r.type || "TSTypeParameterInstantiation" === r.type || "GenericTypeAnnotation" === r.type || "TSTypeReference" === r.type || "TSTypeAssertion" === r.type || "TupleTypeAnnotation" === r.type || "TSTupleType" === r.type || "FunctionTypeParam" === r.type && !r.name && e.getParentNode(1).this !== r || ("TypeAlias" === r.type || "VariableDeclarator" === r.type || "TSTypeAliasDeclaration" === r.type) && DE(t.originalText, o)), i = ZE(o), a = e.map(e => {
                let r = e.call(n);
                return (i || (r = oE(2, r)), Fa.printComments(e, () => r, t));
              }, "types");
              if (i) return Ky(" | ", a);
              const s = u && !DE(t.originalText, o), c = Yy([iE(Yy([s ? Qy : "", "| "])), Ky(Yy([Qy, "| "]), a)]);
              return Rp(e, t) ? nE(Yy([rE(c), eE])) : "TupleTypeAnnotation" === r.type && r.types.length > 1 || "TSTupleType" === r.type && r.elementTypes.length > 1 ? nE(Yy([rE(Yy([iE(Yy(["(", eE])), c])), eE, iE(")")])) : nE(u ? rE(c) : c);
            }
          case "NullableTypeAnnotation":
            return Yy(["?", e.call(n, "typeAnnotation")]);
          case "Variance":
            {
              const {kind: e} = o;
              return (ta.ok("plus" === e || "minus" === e), "plus" === e ? "+" : "-");
            }
          case "ObjectTypeCallProperty":
            return (o.static && a.push("static "), a.push(e.call(n, "value")), Yy(a));
          case "ObjectTypeIndexer":
            return Yy([o.variance ? e.call(n, "variance") : "", "[", e.call(n, "id"), o.id ? ": " : "", e.call(n, "key"), "]: ", e.call(n, "value")]);
          case "ObjectTypeProperty":
            {
              let r = "";
              return (o.proto ? r = "proto " : o.static && (r = "static "), Yy([r, FE(o) ? o.kind + " " : "", o.variance ? e.call(n, "variance") : "", dC(e, t, n), jE(e), AE(o) ? "" : ": ", e.call(n, "value")]));
            }
          case "QualifiedTypeIdentifier":
            return Yy([e.call(n, "qualification"), ".", e.call(n, "id")]);
          case "StringLiteralTypeAnnotation":
            return TC(o, t);
          case "NumberLiteralTypeAnnotation":
            ta.strictEqual(typeof o.value, "number");
          case "BigIntLiteralTypeAnnotation":
            return null != o.extra ? Gy(o.extra.raw) : Gy(o.raw);
          case "DeclareTypeAlias":
          case "TypeAlias":
            {
              ("DeclareTypeAlias" === o.type || o.declare) && a.push("declare ");
              const r = vC(o.id, o.right, e.call(n, "right"), t);
              return (a.push("type ", e.call(n, "id"), e.call(n, "typeParameters"), " =", r, u), nE(Yy(a)));
            }
          case "TypeCastExpression":
            return Yy(["(", e.call(n, "expression"), QE(e, t, n), ")"]);
          case "TypeParameterDeclaration":
          case "TypeParameterInstantiation":
            {
              const r = pC(e, t, n, "params");
              if ("flow" === t.parser) {
                const e = LE(o), n = ME(o), u = t.originalText.lastIndexOf("/*", e), i = t.originalText.indexOf("*/", n);
                if (-1 !== u && -1 !== i) {
                  const e = t.originalText.slice(u + 2, i).trim();
                  if (e.startsWith("::") && !e.includes("/*") && !e.includes("*/")) return Yy(["/*:: ", r, " */"]);
                }
              }
              return r;
            }
          case "TSTypeParameterDeclaration":
          case "TSTypeParameterInstantiation":
            return pC(e, t, n, "params");
          case "TSTypeParameter":
          case "TypeParameter":
            {
              const r = e.getParentNode();
              if ("TSMappedType" === r.type) return (a.push("[", e.call(n, "name")), o.constraint && a.push(" in ", e.call(n, "constraint")), r.nameType && a.push(" as ", e.callParent(e => e.call(n, "nameType"))), a.push("]"), Yy(a));
              (o.variance && a.push(e.call(n, "variance")), a.push(e.call(n, "name")), o.bound && (a.push(": "), a.push(e.call(n, "bound"))), o.constraint && a.push(" extends ", e.call(n, "constraint")), o.default && a.push(" = ", e.call(n, "default")));
              const u = e.getNode(2);
              return (1 === pE(r).length && NE(t) && !o.constraint && "ArrowFunctionExpression" === u.type && a.push(","), Yy(a));
            }
          case "TypeofTypeAnnotation":
            return Yy(["typeof ", e.call(n, "argument")]);
          case "InferredPredicate":
            return "%checks";
          case "DeclaredPredicate":
            return Yy(["%checks(", e.call(n, "value"), ")"]);
          case "TSAbstractKeyword":
            return "abstract";
          case "AnyTypeAnnotation":
          case "TSAnyKeyword":
            return "any";
          case "TSAsyncKeyword":
            return "async";
          case "BooleanTypeAnnotation":
          case "TSBooleanKeyword":
            return "boolean";
          case "BigIntTypeAnnotation":
          case "TSBigIntKeyword":
            return "bigint";
          case "TSConstKeyword":
            return "const";
          case "TSDeclareKeyword":
            return "declare";
          case "TSExportKeyword":
            return "export";
          case "NullLiteralTypeAnnotation":
          case "TSNullKeyword":
            return "null";
          case "TSNeverKeyword":
            return "never";
          case "NumberTypeAnnotation":
          case "TSNumberKeyword":
            return "number";
          case "TSObjectKeyword":
            return "object";
          case "TSProtectedKeyword":
            return "protected";
          case "TSPrivateKeyword":
            return "private";
          case "TSPublicKeyword":
            return "public";
          case "TSReadonlyKeyword":
            return "readonly";
          case "SymbolTypeAnnotation":
          case "TSSymbolKeyword":
            return "symbol";
          case "TSStaticKeyword":
            return "static";
          case "StringTypeAnnotation":
          case "TSStringKeyword":
            return "string";
          case "TSUndefinedKeyword":
            return "undefined";
          case "TSUnknownKeyword":
            return "unknown";
          case "VoidTypeAnnotation":
          case "TSVoidKeyword":
            return "void";
          case "TSAsExpression":
            return Yy([e.call(n, "expression"), " as ", e.call(n, "typeAnnotation")]);
          case "TSArrayType":
            return Yy([e.call(n, "elementType"), "[]"]);
          case "TSPropertySignature":
            return (o.export && a.push("export "), o.accessibility && a.push(o.accessibility + " "), o.static && a.push("static "), o.readonly && a.push("readonly "), a.push(dC(e, t, n), jE(e)), o.typeAnnotation && (a.push(": "), a.push(e.call(n, "typeAnnotation"))), o.initializer && a.push(" = ", e.call(n, "initializer")), Yy(a));
          case "TSParameterProperty":
            return (o.accessibility && a.push(o.accessibility + " "), o.export && a.push("export "), o.static && a.push("static "), o.readonly && a.push("readonly "), a.push(e.call(n, "parameter")), Yy(a));
          case "GenericTypeAnnotation":
          case "TSTypeReference":
            return Yy([e.call(n, "TSTypeReference" === o.type ? "typeName" : "id"), pC(e, t, n, "typeParameters")]);
          case "TSTypeQuery":
            return Yy(["typeof ", e.call(n, "exprName")]);
          case "TSIndexSignature":
            {
              const r = e.getParentNode(), i = o.parameters.length > 1 ? iE(IE(t) ? "," : "") : "", a = nE(Yy([rE(Yy([eE, Ky(Yy([", ", eE]), e.map(n, "parameters"))])), i, eE]));
              return Yy([o.export ? "export " : "", o.accessibility ? Yy([o.accessibility, " "]) : "", o.static ? "static " : "", o.readonly ? "readonly " : "", o.declare ? "declare " : "", "[", o.parameters ? a : "", o.typeAnnotation ? "]: " : "]", o.typeAnnotation ? e.call(n, "typeAnnotation") : "", "ClassBody" === r.type ? u : ""]);
            }
          case "TSTypePredicate":
            return Yy([o.asserts ? "asserts " : "", e.call(n, "parameterName"), o.typeAnnotation ? Yy([" is ", e.call(n, "typeAnnotation")]) : ""]);
          case "TSNonNullExpression":
            return Yy([e.call(n, "expression"), "!"]);
          case "ThisTypeAnnotation":
          case "TSThisType":
            return "this";
          case "TSImportType":
            return Yy([o.isTypeOf ? "typeof " : "", "import(", e.call(n, o.parameter ? "parameter" : "argument"), ")", o.qualifier ? Yy([".", e.call(n, "qualifier")]) : "", pC(e, t, n, "typeParameters")]);
          case "TSLiteralType":
            return e.call(n, "literal");
          case "TSIndexedAccessType":
            return Yy([e.call(n, "objectType"), "[", e.call(n, "indexType"), "]"]);
          case "TSConstructSignatureDeclaration":
          case "TSCallSignatureDeclaration":
          case "TSConstructorType":
            if (("TSCallSignatureDeclaration" !== o.type && a.push("new "), a.push(nE(HE(e, n, t, !1, !0))), o.returnType || o.typeAnnotation)) {
              const t = "TSConstructorType" === o.type;
              a.push(t ? " => " : ": ", e.call(n, "returnType"), e.call(n, "typeAnnotation"));
            }
            return Yy(a);
          case "TSTypeOperator":
            return Yy([o.operator, " ", e.call(n, "typeAnnotation")]);
          case "TSMappedType":
            {
              const r = Jy(t.originalText, LE(o), ME(o));
              return nE(Yy(["{", rE(Yy([t.bracketSpacing ? Qy : eE, o.readonly ? Yy([hE(o.readonly, "readonly"), " "]) : "", RE(e, t, n), e.call(n, "typeParameter"), o.optional ? hE(o.optional, "?") : "", o.typeAnnotation ? ": " : "", e.call(n, "typeAnnotation"), iE(u, "")])), Fa.printDanglingComments(e, t, !0), t.bracketSpacing ? Qy : eE, "}"]), {
                shouldBreak: r
              });
            }
          case "TSMethodSignature":
            return (a.push(o.accessibility ? Yy([o.accessibility, " "]) : "", o.export ? "export " : "", o.static ? "static " : "", o.readonly ? "readonly " : "", o.computed ? "[" : "", e.call(n, "key"), o.computed ? "]" : "", jE(e), HE(e, n, t, !1, !0)), (o.returnType || o.typeAnnotation) && a.push(": ", e.call(n, "returnType"), e.call(n, "typeAnnotation")), nE(Yy(a)));
          case "TSNamespaceExportDeclaration":
            return (a.push("export as namespace ", e.call(n, "id")), t.semi && a.push(";"), nE(Yy(a)));
          case "TSEnumDeclaration":
            return (o.declare && a.push("declare "), o.modifiers && a.push(RE(e, t, n)), o.const && a.push("const "), a.push("enum ", e.call(n, "id"), " "), 0 === o.members.length ? a.push(nE(Yy(["{", Fa.printDanglingComments(e, t), eE, "}"]))) : a.push(nE(Yy(["{", rE(Yy([Zy, YE(e, t, "members", n), IE(t, "es5") ? "," : ""])), Fa.printDanglingComments(e, t, !0), Zy, "}"]))), Yy(a));
          case "TSEnumMember":
            return (a.push(e.call(n, "id")), o.initializer && a.push(" = ", e.call(n, "initializer")), Yy(a));
          case "TSImportEqualsDeclaration":
            return (o.isExport && a.push("export "), a.push("import ", e.call(n, "id"), " = ", e.call(n, "moduleReference")), t.semi && a.push(";"), nE(Yy(a)));
          case "TSExternalModuleReference":
            return Yy(["require(", e.call(n, "expression"), ")"]);
          case "TSModuleDeclaration":
            {
              const r = e.getParentNode(), i = xE(o.id), s = "TSModuleDeclaration" === r.type, c = o.body && "TSModuleDeclaration" === o.body.type;
              if (s) a.push("."); else {
                (o.declare && a.push("declare "), a.push(RE(e, t, n)));
                const r = t.originalText.slice(LE(o), LE(o.id));
                "Identifier" === o.id.type && "global" === o.id.name && !(/namespace|module/).test(r) || a.push(i || (/(^|\s)module(\s|$)/).test(r) ? "module " : "namespace ");
              }
              return (a.push(e.call(n, "id")), c ? a.push(e.call(n, "body")) : o.body ? a.push(" ", nE(e.call(n, "body"))) : a.push(u), Yy(a));
            }
          case "PrivateName":
            return Yy(["#", e.call(n, o.id ? "id" : "name")]);
          case "TSPrivateIdentifier":
            return o.escapedText;
          case "TSConditionalType":
            return Md(e, t, n, {
              beforeParts: () => [e.call(n, "checkType"), " ", "extends", " ", e.call(n, "extendsType")],
              afterParts: () => [],
              shouldCheckJsx: !1,
              conditionalNodeType: "TSConditionalType",
              consequentNodePropertyName: "trueType",
              alternateNodePropertyName: "falseType",
              testNodePropertyNames: ["checkType", "extendsType"]
            });
          case "TSInferType":
            return Yy(["infer", " ", e.call(n, "typeParameter")]);
          case "InterpreterDirective":
            return (a.push("#!", o.value, Zy), Xy(t.originalText, o, ME) && a.push(Zy), Yy(a));
          case "NGRoot":
            return Yy([].concat(e.call(n, "node"), o.node.comments && 0 !== o.node.comments.length ? Yy([" //", o.node.comments[0].value.trimEnd()]) : []));
          case "NGChainedExpression":
            return nE(Ky(Yy([";", Qy]), e.map(e => EE(e) ? n(e) : Yy(["(", n(e), ")"]), "expressions")));
          case "NGEmptyExpression":
            return "";
          case "NGQuotedExpression":
            return Yy([o.prefix, ": ", o.value.trim()]);
          case "NGMicrosyntax":
            return Yy(e.map((e, t) => Yy([0 === t ? "" : SE(e.getValue(), t, o) ? " " : Yy([";", Qy]), n(e)]), "body"));
          case "NGMicrosyntaxKey":
            return (/^[$_a-z][\w$]*(-[$_a-z][\w$])*$/i).test(o.name) ? o.name : JSON.stringify(o.name);
          case "NGMicrosyntaxExpression":
            return Yy([e.call(n, "expression"), null === o.alias ? "" : Yy([" as ", e.call(n, "alias")])]);
          case "NGMicrosyntaxKeyedExpression":
            {
              const t = e.getName(), r = e.getParentNode(), u = SE(o, t, r) || (1 === t && ("then" === o.key.name || "else" === o.key.name) || 2 === t && "else" === o.key.name && "NGMicrosyntaxKeyedExpression" === r.body[t - 1].type && "then" === r.body[t - 1].key.name) && "NGMicrosyntaxExpression" === r.body[0].type;
              return Yy([e.call(n, "key"), u ? " " : ": ", e.call(n, "expression")]);
            }
          case "NGMicrosyntaxLet":
            return Yy(["let ", e.call(n, "key"), null === o.value ? "" : Yy([" = ", e.call(n, "value")])]);
          case "NGMicrosyntaxAs":
            return Yy([e.call(n, "key"), " as ", e.call(n, "alias")]);
          case "PipelineBareFunction":
            return e.call(n, "callee");
          case "PipelineTopicExpression":
            return e.call(n, "expression");
          case "PipelinePrimaryTopicReference":
            return (a.push("#"), Yy(a));
          case "ArgumentPlaceholder":
            return "?";
          case "TSJSDocAllType":
            return "*";
          case "TSJSDocUnknownType":
            return "?";
          case "TSJSDocNullableType":
            return Yy(["?", e.call(n, "typeAnnotation")]);
          case "TSJSDocNonNullableType":
            return Yy(["!", e.call(n, "typeAnnotation")]);
          case "TSJSDocFunctionType":
            return Yy(["function(", "): ", e.call(n, "typeAnnotation")]);
          default:
            throw new Error("unknown type: " + JSON.stringify(o.type));
        }
      })(e, t, n, r);
      if (!o || aE(i)) return i;
      const a = fE(e), s = [];
      if ("ClassMethod" === o.type || "ClassPrivateMethod" === o.type || "ClassProperty" === o.type || "FieldDefinition" === o.type || "TSAbstractClassProperty" === o.type || "ClassPrivateProperty" === o.type || "MethodDefinition" === o.type || "TSAbstractMethodDefinition" === o.type || "TSDeclareMethod" === o.type) ; else if (o.decorators && o.decorators.length > 0 && !(a && LE(a, {
        ignoreDecorators: !0
      }) > LE(o.decorators[0]))) {
        const r = "ClassExpression" === o.type || "ClassDeclaration" === o.type || yE(o, t) ? Zy : Qy;
        (e.each(e => {
          let t = e.getValue();
          (t = t.expression ? t.expression : t.callee, s.push(n(e), r));
        }, "decorators"), a && s.unshift(Zy));
      } else vE(o) && o.declaration && o.declaration.decorators && o.declaration.decorators.length > 0 && LE(o, {
        ignoreDecorators: !0
      }) > LE(o.declaration.decorators[0]) ? e.each(e => {
        const t = "Decorator" === e.getValue().type ? "" : "@";
        s.push(t, n(e), Zy);
      }, "declaration", "decorators") : u = Rp(e, t);
      const c = [];
      if ((u && c.unshift("("), c.push(i), u)) {
        const t = e.getValue();
        (gE(t) && (c.push(" /*"), c.push(t.trailingComments[0].value.trimStart()), c.push("*/"), t.trailingComments[0].printed = !0), c.push(")"));
      }
      return s.length > 0 ? nE(Yy(s.concat(c))) : Yy(c);
    },
    embed: pp,
    insertPragma: sE,
    massageAstNode: mp,
    hasPrettierIgnore: CE,
    willPrintOwnComments: il.willPrintOwnComments,
    canAttachComment: function (e) {
      return e.type && "CommentBlock" !== e.type && "CommentLine" !== e.type && "Line" !== e.type && "Block" !== e.type && "EmptyStatement" !== e.type && "TemplateElement" !== e.type && "Import" !== e.type;
    },
    printComment: wC,
    isBlockComment: kE,
    handleComments: {
      ownLine: il.handleOwnLineComment,
      endOfLine: il.handleEndOfLineComment,
      remaining: il.handleRemainingComment
    },
    getGapRegex: il.getGapRegex,
    getCommentChildNodes: il.getCommentChildNodes
  };
  const {builders: {concat: kC, hardline: PC, indent: OC, join: IC}} = cn;
  const LC = new Set(["start", "end", "extra", "loc", "comments", "errors", "range"]);
  function MC(e, t) {
    const {type: n} = e;
    return "Identifier" === n ? {
      type: "StringLiteral",
      value: e.name
    } : "UnaryExpression" === n && "+" === e.operator ? t.argument : void 0;
  }
  MC.ignoredProperties = LC;
  var jC = {
    preprocess: Hp,
    print: function (e, t, n) {
      const r = e.getValue();
      switch (r.type) {
        case "JsonRoot":
          return kC([e.call(n, "node"), PC]);
        case "ArrayExpression":
          return 0 === r.elements.length ? "[]" : kC(["[", OC(kC([PC, IC(kC([",", PC]), e.map(n, "elements"))])), PC, "]"]);
        case "ObjectExpression":
          return 0 === r.properties.length ? "{}" : kC(["{", OC(kC([PC, IC(kC([",", PC]), e.map(n, "properties"))])), PC, "}"]);
        case "ObjectProperty":
          return kC([e.call(n, "key"), ": ", e.call(n, "value")]);
        case "UnaryExpression":
          return kC(["+" === r.operator ? "" : r.operator, e.call(n, "argument")]);
        case "NullLiteral":
          return "null";
        case "BooleanLiteral":
          return r.value ? "true" : "false";
        case "StringLiteral":
        case "NumericLiteral":
          return JSON.stringify(r.value);
        case "Identifier":
          return JSON.stringify(r.name);
        default:
          throw new Error("unknown type: " + JSON.stringify(r.type));
      }
    },
    massageAstNode: MC
  };
  const _C = "Common";
  var RC = {
    bracketSpacing: {
      since: "0.0.0",
      category: _C,
      type: "boolean",
      default: !0,
      description: "Print spaces between brackets.",
      oppositeDescription: "Do not print spaces between brackets."
    },
    singleQuote: {
      since: "0.0.0",
      category: _C,
      type: "boolean",
      default: !1,
      description: "Use single quotes instead of double quotes."
    },
    proseWrap: {
      since: "1.8.2",
      category: _C,
      type: "choice",
      default: [{
        since: "1.8.2",
        value: !0
      }, {
        since: "1.9.0",
        value: "preserve"
      }],
      description: "How to wrap prose.",
      choices: [{
        since: "1.9.0",
        value: "always",
        description: "Wrap prose if it exceeds the print width."
      }, {
        since: "1.9.0",
        value: "never",
        description: "Do not wrap prose."
      }, {
        since: "1.9.0",
        value: "preserve",
        description: "Wrap prose as-is."
      }]
    }
  };
  const VC = "JavaScript";
  var $C = {
    arrowParens: {
      since: "1.9.0",
      category: VC,
      type: "choice",
      default: [{
        since: "1.9.0",
        value: "avoid"
      }, {
        since: "2.0.0",
        value: "always"
      }],
      description: "Include parentheses around a sole arrow function parameter.",
      choices: [{
        value: "always",
        description: "Always include parens. Example: `(x) => x`"
      }, {
        value: "avoid",
        description: "Omit parens when possible. Example: `x => x`"
      }]
    },
    bracketSpacing: RC.bracketSpacing,
    jsxBracketSameLine: {
      since: "0.17.0",
      category: VC,
      type: "boolean",
      default: !1,
      description: "Put > on the last line instead of at a new line."
    },
    semi: {
      since: "1.0.0",
      category: VC,
      type: "boolean",
      default: !0,
      description: "Print semicolons.",
      oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them."
    },
    singleQuote: RC.singleQuote,
    jsxSingleQuote: {
      since: "1.15.0",
      category: VC,
      type: "boolean",
      default: !1,
      description: "Use single quotes in JSX."
    },
    quoteProps: {
      since: "1.17.0",
      category: VC,
      type: "choice",
      default: "as-needed",
      description: "Change when properties in objects are quoted.",
      choices: [{
        value: "as-needed",
        description: "Only add quotes around object properties where required."
      }, {
        value: "consistent",
        description: "If at least one property in an object requires quotes, quote all properties."
      }, {
        value: "preserve",
        description: "Respect the input use of quotes in object properties."
      }]
    },
    trailingComma: {
      since: "0.0.0",
      category: VC,
      type: "choice",
      default: [{
        since: "0.0.0",
        value: !1
      }, {
        since: "0.19.0",
        value: "none"
      }, {
        since: "2.0.0",
        value: "es5"
      }],
      description: "Print trailing commas wherever possible when multi-line.",
      choices: [{
        value: "es5",
        description: "Trailing commas where valid in ES5 (objects, arrays, etc.)"
      }, {
        value: "none",
        description: "No trailing commas."
      }, {
        value: "all",
        description: "Trailing commas wherever possible (including function arguments)."
      }]
    }
  }, qC = {
    name: "JavaScript",
    type: "programming",
    tmScope: "source.js",
    aceMode: "javascript",
    codemirrorMode: "javascript",
    codemirrorMimeType: "text/javascript",
    color: "#f1e05a",
    aliases: ["js", "node"],
    extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".jsb", ".jscad", ".jsfl", ".jsm", ".jss", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"],
    filenames: ["Jakefile"],
    interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"],
    languageId: 183
  }, WC = {
    name: "JSX",
    type: "programming",
    group: "JavaScript",
    extensions: [".jsx"],
    tmScope: "source.js.jsx",
    aceMode: "javascript",
    codemirrorMode: "jsx",
    codemirrorMimeType: "text/jsx",
    languageId: 178
  }, UC = {
    name: "TypeScript",
    type: "programming",
    color: "#2b7489",
    aliases: ["ts"],
    interpreters: ["deno", "ts-node"],
    extensions: [".ts"],
    tmScope: "source.ts",
    aceMode: "typescript",
    codemirrorMode: "javascript",
    codemirrorMimeType: "application/typescript",
    languageId: 378
  }, JC = {
    name: "TSX",
    type: "programming",
    group: "TypeScript",
    extensions: [".tsx"],
    tmScope: "source.tsx",
    aceMode: "javascript",
    codemirrorMode: "jsx",
    codemirrorMimeType: "text/jsx",
    languageId: 94901924
  }, zC = {
    name: "JSON",
    type: "data",
    tmScope: "source.json",
    aceMode: "json",
    codemirrorMode: "javascript",
    codemirrorMimeType: "application/json",
    searchable: !1,
    extensions: [".json", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"],
    filenames: [".arcconfig", ".htmlhintrc", ".tern-config", ".tern-project", ".watchmanconfig", "composer.lock", "mcmod.info"],
    languageId: 174
  }, HC = {
    name: "JSON with Comments",
    type: "data",
    group: "JSON",
    tmScope: "source.js",
    aceMode: "javascript",
    codemirrorMode: "javascript",
    codemirrorMimeType: "text/javascript",
    aliases: ["jsonc"],
    extensions: [".jsonc", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"],
    filenames: [".babelrc", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "devcontainer.json", "jsconfig.json", "language-configuration.json", "tsconfig.json", "tslint.json"],
    languageId: 423
  }, GC = {
    name: "JSON5",
    type: "data",
    extensions: [".json5"],
    tmScope: "source.js",
    aceMode: "javascript",
    codemirrorMode: "javascript",
    codemirrorMimeType: "application/json",
    languageId: 175
  };
  var XC = {
    languages: [ks(qC, e => ({
      since: "0.0.0",
      parsers: ["babel", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"],
      vscodeLanguageIds: ["javascript", "mongo"],
      extensions: [...e.extensions, ".wxs"]
    })), ks(qC, () => ({
      name: "Flow",
      since: "0.0.0",
      parsers: ["flow", "babel-flow"],
      vscodeLanguageIds: ["javascript"],
      aliases: [],
      filenames: [],
      extensions: [".js.flow"]
    })), ks(WC, () => ({
      since: "0.0.0",
      parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"],
      vscodeLanguageIds: ["javascriptreact"]
    })), ks(UC, () => ({
      since: "1.4.0",
      parsers: ["typescript", "babel-ts"],
      vscodeLanguageIds: ["typescript"]
    })), ks(JC, () => ({
      since: "1.4.0",
      parsers: ["typescript", "babel-ts"],
      vscodeLanguageIds: ["typescriptreact"]
    })), ks(zC, () => ({
      name: "JSON.stringify",
      since: "1.13.0",
      parsers: ["json-stringify"],
      vscodeLanguageIds: ["json"],
      extensions: [],
      filenames: ["package.json", "package-lock.json", "composer.json"]
    })), ks(zC, e => ({
      since: "1.5.0",
      parsers: ["json"],
      vscodeLanguageIds: ["json"],
      filenames: [...e.filenames, ".prettierrc"],
      extensions: e.extensions.filter(e => ".jsonl" !== e)
    })), ks(HC, e => ({
      since: "1.5.0",
      parsers: ["json"],
      vscodeLanguageIds: ["jsonc"],
      filenames: [...e.filenames, ".eslintrc"]
    })), ks(GC, () => ({
      since: "1.13.0",
      parsers: ["json5"],
      vscodeLanguageIds: ["json5"]
    }))],
    options: $C,
    printers: {
      estree: NC,
      "estree-json": jC
    },
    parsers: {
      get babel() {
        return ({}).parsers.babel;
      },
      get "babel-flow"() {
        return ({}).parsers["babel-flow"];
      },
      get "babel-ts"() {
        return ({}).parsers["babel-ts"];
      },
      get json() {
        return ({}).parsers.json;
      },
      get json5() {
        return ({}).parsers.json5;
      },
      get "json-stringify"() {
        return ({}).parsers["json-stringify"];
      },
      get __js_expression() {
        return ({}).parsers.__js_expression;
      },
      get __vue_expression() {
        return ({}).parsers.__vue_expression;
      },
      get __vue_event_binding() {
        return ({}).parsers.__vue_event_binding;
      },
      get flow() {
        return ({}).parsers.flow;
      },
      get typescript() {
        return ({}).parsers.typescript;
      },
      get __ng_action() {
        return ({}).parsers.__ng_action;
      },
      get __ng_binding() {
        return ({}).parsers.__ng_binding;
      },
      get __ng_interpolation() {
        return ({}).parsers.__ng_interpolation;
      },
      get __ng_directive() {
        return ({}).parsers.__ng_directive;
      },
      get espree() {
        return ({}).parsers.espree;
      },
      get meriyah() {
        return ({}).parsers.meriyah;
      }
    }
  };
  const {isFrontMatterNode: YC} = Lt, KC = new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"]);
  function QC(e, t, n) {
    if ((YC(e) && "yaml" === e.lang && delete t.value, "css-comment" === e.type && "css-root" === n.type && 0 !== n.nodes.length)) {
      if ((n.nodes[0] === e || YC(n.nodes[0]) && n.nodes[1] === e) && (delete t.text, (/^\*\s*@(format|prettier)\s*$/).test(e.text))) return null;
      if ("css-root" === n.type && se(n.nodes) === e) return null;
    }
    if (("value-root" === e.type && delete t.text, "media-query" !== e.type && "media-query-list" !== e.type && "media-feature-expression" !== e.type || delete t.value, "css-rule" === e.type && delete t.params, "selector-combinator" === e.type && (t.value = t.value.replace(/\s+/g, " ")), "media-feature" === e.type && (t.value = t.value.replace(/ /g, "")), ("value-word" === e.type && (e.isColor && e.isHex || ["initial", "inherit", "unset", "revert"].includes(t.value.replace().toLowerCase())) || "media-feature" === e.type || "selector-root-invalid" === e.type || "selector-pseudo" === e.type) && (t.value = t.value.toLowerCase()), "css-decl" === e.type && (t.prop = t.prop.toLowerCase()), "css-atrule" !== e.type && "css-import" !== e.type || (t.name = t.name.toLowerCase()), "value-number" === e.type && (t.unit = t.unit.toLowerCase()), "media-feature" !== e.type && "media-keyword" !== e.type && "media-type" !== e.type && "media-unknown" !== e.type && "media-url" !== e.type && "media-value" !== e.type && "selector-attribute" !== e.type && "selector-string" !== e.type && "selector-class" !== e.type && "selector-combinator" !== e.type && "value-string" !== e.type || !t.value || (t.value = t.value.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1")), "selector-attribute" === e.type && (t.attribute = t.attribute.trim(), t.namespace && "string" == typeof t.namespace && (t.namespace = t.namespace.trim(), 0 === t.namespace.length && (t.namespace = !0)), t.value && (t.value = t.value.trim().replace(/^["']|["']$/g, ""), delete t.quoted)), "media-value" !== e.type && "media-type" !== e.type && "value-number" !== e.type && "selector-root-invalid" !== e.type && "selector-class" !== e.type && "selector-combinator" !== e.type && "selector-tag" !== e.type || !t.value || (t.value = t.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, (e, t, n) => {
      const r = Number(t);
      return isNaN(r) ? e : r + n.toLowerCase();
    })), "selector-tag" === e.type)) {
      const n = e.value.toLowerCase();
      ["from", "to"].includes(n) && (t.value = n);
    }
    ("css-atrule" === e.type && "supports" === e.name.toLowerCase() && delete t.value, "selector-unknown" === e.type && delete t.value);
  }
  QC.ignoredProperties = KC;
  var ZC = QC;
  const {builders: {hardline: eb, concat: tb, markAsRoot: nb}} = cn, rb = {
    "---": "yaml",
    "+++": "toml"
  };
  var ob = {
    parse: function (e) {
      const t = Object.keys(rb).map(ae).join("|"), n = e.match(new RegExp(("^(").concat(t, ")([^\\n]*)\\n(?:([\\s\\S]*?)\\n)?\\1[^\\n\\S]*(\\n|$)")));
      if (null === n) return {
        frontMatter: null,
        content: e
      };
      const [r, o, u, i] = n;
      let a = rb[o];
      return ("toml" !== a && u && u.trim() && (a = u.trim()), {
        frontMatter: {
          type: "front-matter",
          lang: a,
          value: i,
          raw: r.replace(/\n$/, "")
        },
        content: r.replace(/[^\n]/g, " ") + e.slice(r.length)
      });
    },
    print: function (e, t) {
      if ("yaml" === e.lang) {
        const n = e.value.trim(), r = n ? t(n, {
          parser: "yaml"
        }, {
          stripTrailingHardline: !0
        }) : "";
        return nb(tb(["---", eb, r, r ? eb : "", "---"]));
      }
    }
  };
  const {builders: {hardline: ub, concat: ib}} = cn, {print: ab} = ob;
  var sb = function (e, t, n) {
    const r = e.getValue();
    if ("front-matter" === r.type) {
      const e = ab(r, n);
      return e ? ib([e, ub]) : "";
    }
  };
  const {parse: cb} = ob;
  var lb = {
    hasPragma: function (e) {
      return Sp.hasPragma(cb(e).content);
    },
    insertPragma: function (e) {
      const {frontMatter: t, content: n} = cb(e);
      return (t ? t.raw + "\n\n" : "") + Sp.insertPragma(n);
    }
  };
  const pb = new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);
  function db(e, t) {
    const n = [].concat(t);
    let r, o = -1;
    for (; r = e.getParentNode(++o); ) if (n.includes(r.type)) return o;
    return -1;
  }
  function fb(e, t) {
    const n = db(e, t);
    return -1 === n ? null : e.getParentNode(n);
  }
  function hb(e) {
    return "value-operator" === e.type && "*" === e.value;
  }
  function mb(e) {
    return "value-operator" === e.type && "/" === e.value;
  }
  function gb(e) {
    return "value-operator" === e.type && "+" === e.value;
  }
  function Db(e) {
    return "value-operator" === e.type && "-" === e.value;
  }
  function yb(e) {
    return "value-operator" === e.type && "%" === e.value;
  }
  function Eb(e) {
    return "value-comma_group" === e.type && e.groups && e.groups[1] && "value-colon" === e.groups[1].type;
  }
  function Cb(e) {
    return "value-paren_group" === e.type && e.groups && e.groups[0] && Eb(e.groups[0]);
  }
  var bb = {
    getAncestorCounter: db,
    getAncestorNode: fb,
    getPropOfDeclNode: function (e) {
      const t = fb(e, "css-decl");
      return t && t.prop && t.prop.toLowerCase();
    },
    hasSCSSInterpolation: function (e) {
      if (e && e.length) for (let t = e.length - 1; t > 0; t--) if ("word" === e[t].type && "{" === e[t].value && "word" === e[t - 1].type && e[t - 1].value.endsWith("#")) return !0;
      return !1;
    },
    hasStringOrFunction: function (e) {
      if (e && e.length) for (let t = 0; t < e.length; t++) if ("string" === e[t].type || "func" === e[t].type) return !0;
      return !1;
    },
    maybeToLowerCase: function (e) {
      return e.includes("$") || e.includes("@") || e.includes("#") || e.startsWith("%") || e.startsWith("--") || e.startsWith(":--") || e.includes("(") && e.includes(")") ? e : e.toLowerCase();
    },
    insideValueFunctionNode: function (e, t) {
      const n = fb(e, "value-func");
      return n && n.value && n.value.toLowerCase() === t;
    },
    insideICSSRuleNode: function (e) {
      const t = fb(e, "css-rule");
      return t && t.raws && t.raws.selector && (t.raws.selector.startsWith(":import") || t.raws.selector.startsWith(":export"));
    },
    insideAtRuleNode: function (e, t) {
      const n = [].concat(t), r = fb(e, "css-atrule");
      return r && n.includes(r.name.toLowerCase());
    },
    insideURLFunctionInImportAtRuleNode: function (e) {
      const t = e.getValue(), n = fb(e, "css-atrule");
      return n && "import" === n.name && "url" === t.groups[0].value && 2 === t.groups.length;
    },
    isKeyframeAtRuleKeywords: function (e, t) {
      const n = fb(e, "css-atrule");
      return n && n.name && n.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(t.toLowerCase());
    },
    isWideKeywords: function (e) {
      return ["initial", "inherit", "unset", "revert"].includes(e.toLowerCase());
    },
    isSCSS: function (e, t) {
      return "less" === e || "scss" === e ? "scss" === e : (/(\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/).test(t);
    },
    isSCSSVariable: function (e) {
      return !(!e || "word" !== e.type || !e.value.startsWith("$"));
    },
    isLastNode: function (e, t) {
      const n = e.getParentNode();
      if (!n) return !1;
      const {nodes: r} = n;
      return r && r.indexOf(t) === r.length - 1;
    },
    isLessParser: function (e) {
      return "css" === e.parser || "less" === e.parser;
    },
    isSCSSControlDirectiveNode: function (e) {
      return "css-atrule" === e.type && ["if", "else", "for", "each", "while"].includes(e.name);
    },
    isDetachedRulesetDeclarationNode: function (e) {
      return !!e.selector && ("string" == typeof e.selector && (/^@.+:.*$/).test(e.selector) || e.selector.value && (/^@.+:.*$/).test(e.selector.value));
    },
    isRelationalOperatorNode: function (e) {
      return "value-word" === e.type && ["<", ">", "<=", ">="].includes(e.value);
    },
    isEqualityOperatorNode: function (e) {
      return "value-word" === e.type && ["==", "!="].includes(e.value);
    },
    isMultiplicationNode: hb,
    isDivisionNode: mb,
    isAdditionNode: gb,
    isSubtractionNode: Db,
    isModuloNode: yb,
    isMathOperatorNode: function (e) {
      return hb(e) || mb(e) || gb(e) || Db(e) || yb(e);
    },
    isEachKeywordNode: function (e) {
      return "value-word" === e.type && "in" === e.value;
    },
    isForKeywordNode: function (e) {
      return "value-word" === e.type && ["from", "through", "end"].includes(e.value);
    },
    isURLFunctionNode: function (e) {
      return "value-func" === e.type && "url" === e.value.toLowerCase();
    },
    isIfElseKeywordNode: function (e) {
      return "value-word" === e.type && ["and", "or", "not"].includes(e.value);
    },
    hasComposesNode: function (e) {
      return e.value && "value-root" === e.value.type && e.value.group && "value-value" === e.value.group.type && "composes" === e.prop.toLowerCase();
    },
    hasParensAroundNode: function (e) {
      return e.value && e.value.group && e.value.group.group && "value-paren_group" === e.value.group.group.type && null !== e.value.group.group.open && null !== e.value.group.group.close;
    },
    hasEmptyRawBefore: function (e) {
      return e.raws && "" === e.raws.before;
    },
    isSCSSNestedPropertyNode: function (e) {
      return !!e.selector && e.selector.replace(/\/\*.*?\*\//, "").replace(/\/\/.*?\n/, "").trim().endsWith(":");
    },
    isDetachedRulesetCallNode: function (e) {
      return e.raws && e.raws.params && (/^\(\s*\)$/).test(e.raws.params);
    },
    isTemplatePlaceholderNode: function (e) {
      return e.name.startsWith("prettier-placeholder");
    },
    isTemplatePropNode: function (e) {
      return e.prop.startsWith("@prettier-placeholder");
    },
    isPostcssSimpleVarNode: function (e, t) {
      return "$$" === e.value && "value-func" === e.type && t && "value-word" === t.type && !t.raws.before;
    },
    isKeyValuePairNode: Eb,
    isKeyValuePairInParenGroupNode: Cb,
    isSCSSMapItemNode: function (e) {
      const t = e.getValue();
      if (0 === t.groups.length) return !1;
      const n = e.getParentNode(1);
      if (!(Cb(t) || n && Cb(n))) return !1;
      const r = fb(e, "css-decl");
      return !!(r && r.prop && r.prop.startsWith("$")) || (!!Cb(n) || "value-func" === n.type);
    },
    isInlineValueCommentNode: function (e) {
      return "value-comment" === e.type && e.inline;
    },
    isHashNode: function (e) {
      return "value-word" === e.type && "#" === e.value;
    },
    isLeftCurlyBraceNode: function (e) {
      return "value-word" === e.type && "{" === e.value;
    },
    isRightCurlyBraceNode: function (e) {
      return "value-word" === e.type && "}" === e.value;
    },
    isWordNode: function (e) {
      return ["value-word", "value-atword"].includes(e.type);
    },
    isColonNode: function (e) {
      return "value-colon" === e.type;
    },
    isMediaAndSupportsKeywords: function (e) {
      return e.value && ["not", "and", "or"].includes(e.value.toLowerCase());
    },
    isColorAdjusterFuncNode: function (e) {
      return "value-func" === e.type && pb.has(e.value.toLowerCase());
    },
    lastLineHasInlineComment: function (e) {
      return (/\/\//).test(e.split(/[\n\r]/).pop());
    },
    stringifyNode: function e(t) {
      if (t.groups) {
        return (t.open && t.open.value ? t.open.value : "") + t.groups.reduce((n, r, o) => n + e(r) + ("comma_group" === t.groups[0].type && o !== t.groups.length - 1 ? "," : ""), "") + (t.close && t.close.value ? t.close.value : "");
      }
      const n = t.raws && t.raws.before ? t.raws.before : "", r = t.raws && t.raws.quote ? t.raws.quote : "";
      return n + r + ("atword" === t.type ? "@" : "") + (t.value ? t.value : "") + r + (t.unit ? t.unit : "") + (t.group ? e(t.group) : "") + (t.raws && t.raws.after ? t.raws.after : "");
    },
    isAtWordPlaceholderNode: function (e) {
      return e && "value-atword" === e.type && e.value.startsWith("prettier-placeholder-");
    }
  }, vb = function (e, t) {
    let n = 0;
    for (let r = 0; r < e.line - 1; ++r) n = t.indexOf("\n", n) + 1;
    return n + e.column;
  };
  const {getLast: Ab, skipEverythingButNewLine: Fb} = Lt;
  function xb(e, t) {
    return "number" == typeof e.sourceIndex ? e.sourceIndex : e.source ? vb(e.source.start, t) - 1 : null;
  }
  function Sb(e, t) {
    if ("css-comment" === e.type && e.inline) return Fb(t, e.source.startOffset);
    const n = e.nodes && Ab(e.nodes);
    return (n && e.source && !e.source.end && (e = n), e.source && e.source.end ? vb(e.source.end, t) : null);
  }
  function wb(e, t, n) {
    e.source && (e.source.startOffset = xb(e, n) + t, e.source.endOffset = Sb(e, n) + t);
    for (const r in e) {
      const o = e[r];
      "source" !== r && o && "object" == typeof o && wb(o, t, n);
    }
  }
  function Tb(e) {
    let t = e.source.startOffset;
    return ("string" == typeof e.prop && (t += e.prop.length), "css-atrule" === e.type && "string" == typeof e.name && (t += 1 + e.name.length + e.raws.afterName.match(/^\s*:?\s*/)[0].length), "css-atrule" !== e.type && e.raws && "string" == typeof e.raws.between && (t += e.raws.between.length), t);
  }
  var Bb = {
    locStart: function (e) {
      return e.source.startOffset;
    },
    locEnd: function (e) {
      return e.source.endOffset;
    },
    calculateLoc: function e(t, n) {
      t.source && (t.source.startOffset = xb(t, n), t.source.endOffset = Sb(t, n));
      for (const r in t) {
        const o = t[r];
        "source" !== r && o && "object" == typeof o && ("value-root" === o.type || "value-unknown" === o.type ? wb(o, Tb(t), o.text || o.value) : e(o, n));
      }
    },
    replaceQuotesInInlineComments: function (e) {
      let t, n = "initial", r = "initial", o = !1;
      const u = [];
      for (let i = 0; i < e.length; i++) {
        const a = e[i];
        switch (n) {
          case "initial":
            if ("'" === a) {
              n = "single-quotes";
              continue;
            }
            if ('"' === a) {
              n = "double-quotes";
              continue;
            }
            if (("u" === a || "U" === a) && "url(" === e.slice(i, i + 4).toLowerCase()) {
              (n = "url", i += 3);
              continue;
            }
            if ("*" === a && "/" === e[i - 1]) {
              n = "comment-block";
              continue;
            }
            if ("/" === a && "/" === e[i - 1]) {
              (n = "comment-inline", t = i - 1);
              continue;
            }
            continue;
          case "single-quotes":
            if (("'" === a && "\\" !== e[i - 1] && (n = r, r = "initial"), "\n" === a || "\r" === a)) return e;
            continue;
          case "double-quotes":
            if (('"' === a && "\\" !== e[i - 1] && (n = r, r = "initial"), "\n" === a || "\r" === a)) return e;
            continue;
          case "url":
            if ((")" === a && (n = "initial"), "\n" === a || "\r" === a)) return e;
            if ("'" === a) {
              (n = "single-quotes", r = "url");
              continue;
            }
            if ('"' === a) {
              (n = "double-quotes", r = "url");
              continue;
            }
            continue;
          case "comment-block":
            "/" === a && "*" === e[i - 1] && (n = "initial");
            continue;
          case "comment-inline":
            ('"' !== a && "'" !== a && "*" !== a || (o = !0), "\n" !== a && "\r" !== a || (o && u.push([t, i]), n = "initial", o = !1));
            continue;
        }
      }
      for (const [t, n] of u) e = e.slice(0, t) + e.slice(t, n).replace(/["'*]/g, " ") + e.slice(n);
      return e;
    }
  };
  const {printNumber: Nb, printString: kb, hasNewline: Pb, isFrontMatterNode: Ob, isNextLineEmpty: Ib} = Lt, {builders: {concat: Lb, join: Mb, line: jb, hardline: _b, softline: Rb, group: Vb, fill: $b, indent: qb, dedent: Wb, ifBreak: Ub, breakParent: Jb}, utils: {removeLines: zb}} = cn, {insertPragma: Hb} = lb, {getAncestorNode: Gb, getPropOfDeclNode: Xb, maybeToLowerCase: Yb, insideValueFunctionNode: Kb, insideICSSRuleNode: Qb, insideAtRuleNode: Zb, insideURLFunctionInImportAtRuleNode: ev, isKeyframeAtRuleKeywords: tv, isWideKeywords: nv, isSCSS: rv, isLastNode: ov, isLessParser: uv, isSCSSControlDirectiveNode: iv, isDetachedRulesetDeclarationNode: av, isRelationalOperatorNode: sv, isEqualityOperatorNode: cv, isMultiplicationNode: lv, isDivisionNode: pv, isAdditionNode: dv, isSubtractionNode: fv, isMathOperatorNode: hv, isEachKeywordNode: mv, isForKeywordNode: gv, isURLFunctionNode: Dv, isIfElseKeywordNode: yv, hasComposesNode: Ev, hasParensAroundNode: Cv, hasEmptyRawBefore: bv, isKeyValuePairNode: vv, isDetachedRulesetCallNode: Av, isTemplatePlaceholderNode: Fv, isTemplatePropNode: xv, isPostcssSimpleVarNode: Sv, isSCSSMapItemNode: wv, isInlineValueCommentNode: Tv, isHashNode: Bv, isLeftCurlyBraceNode: Nv, isRightCurlyBraceNode: kv, isWordNode: Pv, isColonNode: Ov, isMediaAndSupportsKeywords: Iv, isColorAdjusterFuncNode: Lv, lastLineHasInlineComment: Mv, isAtWordPlaceholderNode: jv} = bb, {locStart: _v, locEnd: Rv} = Bb;
  function Vv(e) {
    return "es5" === e.trailingComma || "all" === e.trailingComma;
  }
  function $v(e, t, n) {
    const r = e.getValue(), o = [];
    return (e.each((e, u) => {
      const i = r.nodes[u - 1];
      if (i && "css-comment" === i.type && "prettier-ignore" === i.text.trim()) {
        const n = e.getValue();
        o.push(t.originalText.slice(_v(n), Rv(n)));
      } else o.push(e.call(n));
      u !== r.nodes.length - 1 && ("css-comment" === r.nodes[u + 1].type && !Pb(t.originalText, _v(r.nodes[u + 1]), {
        backwards: !0
      }) && !Ob(r.nodes[u]) || "css-atrule" === r.nodes[u + 1].type && "else" === r.nodes[u + 1].name && "css-comment" !== r.nodes[u].type ? o.push(" ") : (o.push(t.__isHTMLStyleAttribute ? jb : _b), Ib(t.originalText, e.getValue(), Rv) && !Ob(r.nodes[u]) && o.push(_b)));
    }, "nodes"), Lb(o));
  }
  const qv = /(["'])(?:(?!\1)[^\\]|\\[\S\s])*\1/g, Wv = new RegExp(qv.source + "|" + ("(").concat((/[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g).source, ")?") + ("(").concat((/(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g).source, ")") + ("(").concat((/[A-Za-z]+/g).source, ")?"), "g");
  function Uv(e, t) {
    return e.replace(qv, e => kb(e, t));
  }
  function Jv(e, t) {
    const n = t.singleQuote ? "'" : '"';
    return e.includes('"') || e.includes("'") ? e : n + e + n;
  }
  function zv(e) {
    return e.replace(Wv, (e, t, n, r, o) => !n && r ? Hv(r) + Yb(o || "") : e);
  }
  function Hv(e) {
    return Nb(e).replace(/\.0(?=$|e)/, "");
  }
  var Gv = {
    print: function (e, t, n) {
      const r = e.getValue();
      if (!r) return "";
      if ("string" == typeof r) return r;
      switch (r.type) {
        case "front-matter":
          return Lb([r.raw, _b]);
        case "css-root":
          {
            const o = $v(e, t, n), u = r.raws.after.trim();
            return Lb([o, u ? (" ").concat(u) : "", o.parts.length ? _b : ""]);
          }
        case "css-comment":
          {
            const e = r.inline || r.raws.inline, n = t.originalText.slice(_v(r), Rv(r));
            return e ? n.trimEnd() : n;
          }
        case "css-rule":
          return Lb([e.call(n, "selector"), r.important ? " !important" : "", r.nodes ? Lb([r.selector && "selector-unknown" === r.selector.type && Mv(r.selector.value) ? jb : " ", "{", r.nodes.length > 0 ? qb(Lb([_b, $v(e, t, n)])) : "", _b, "}", av(r) ? ";" : ""]) : ";"]);
        case "css-decl":
          {
            const o = e.getParentNode(), {between: u} = r.raws, i = u.trim(), a = ":" === i;
            let s = Ev(r) ? zb(e.call(n, "value")) : e.call(n, "value");
            return (!a && Mv(i) && (s = qb(Lb([_b, Wb(s)]))), Lb([r.raws.before.replace(/[\s;]/g, ""), Qb(e) ? r.prop : Yb(r.prop), i.startsWith("//") ? " " : "", i, r.extend ? "" : " ", uv(t) && r.extend && r.selector ? Lb(["extend(", e.call(n, "selector"), ")"]) : "", s, r.raws.important ? r.raws.important.replace(/\s*!\s*important/i, " !important") : r.important ? " !important" : "", r.raws.scssDefault ? r.raws.scssDefault.replace(/\s*!default/i, " !default") : r.scssDefault ? " !default" : "", r.raws.scssGlobal ? r.raws.scssGlobal.replace(/\s*!global/i, " !global") : r.scssGlobal ? " !global" : "", r.nodes ? Lb([" {", qb(Lb([Rb, $v(e, t, n)])), Rb, "}"]) : xv(r) && !o.raws.semicolon && ";" !== t.originalText[Rv(r) - 1] ? "" : t.__isHTMLStyleAttribute && ov(e, r) ? Ub(";", "") : ";"]));
          }
        case "css-atrule":
          {
            const o = e.getParentNode(), u = Fv(r) && !o.raws.semicolon && ";" !== t.originalText[Rv(r) - 1];
            if (uv(t)) {
              if (r.mixin) return Lb([e.call(n, "selector"), r.important ? " !important" : "", u ? "" : ";"]);
              if (r.function) return Lb([r.name, Lb([e.call(n, "params")]), u ? "" : ";"]);
              if (r.variable) return Lb(["@", r.name, ": ", r.value ? Lb([e.call(n, "value")]) : "", r.raws.between.trim() ? r.raws.between.trim() + " " : "", r.nodes ? Lb(["{", qb(Lb([r.nodes.length > 0 ? Rb : "", $v(e, t, n)])), Rb, "}"]) : "", u ? "" : ";"]);
            }
            return Lb(["@", Av(r) || r.name.endsWith(":") ? r.name : Yb(r.name), r.params ? Lb([Av(r) ? "" : Fv(r) ? "" === r.raws.afterName ? "" : r.name.endsWith(":") ? " " : (/^\s*\n\s*\n/).test(r.raws.afterName) ? Lb([_b, _b]) : (/^\s*\n/).test(r.raws.afterName) ? _b : " " : " ", e.call(n, "params")]) : "", r.selector ? qb(Lb([" ", e.call(n, "selector")])) : "", r.value ? Vb(Lb([" ", e.call(n, "value"), iv(r) ? Cv(r) ? " " : jb : ""])) : "else" === r.name ? " " : "", r.nodes ? Lb([iv(r) ? "" : r.selector && !r.selector.nodes && "string" == typeof r.selector.value && Mv(r.selector.value) || !r.selector && "string" == typeof r.params && Mv(r.params) ? jb : " ", "{", qb(Lb([r.nodes.length > 0 ? Rb : "", $v(e, t, n)])), Rb, "}"]) : u ? "" : ";"]);
          }
        case "media-query-list":
          {
            const t = [];
            return (e.each(e => {
              const r = e.getValue();
              "media-query" === r.type && "" === r.value || t.push(e.call(n));
            }, "nodes"), Vb(qb(Mb(jb, t))));
          }
        case "media-query":
          return Lb([Mb(" ", e.map(n, "nodes")), ov(e, r) ? "" : ","]);
        case "media-type":
          return zv(Uv(r.value, t));
        case "media-feature-expression":
          return r.nodes ? Lb(["(", Lb(e.map(n, "nodes")), ")"]) : r.value;
        case "media-feature":
          return Yb(Uv(r.value.replace(/ +/g, " "), t));
        case "media-colon":
          return Lb([r.value, " "]);
        case "media-value":
          return zv(Uv(r.value, t));
        case "media-keyword":
          return Uv(r.value, t);
        case "media-url":
          return Uv(r.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/gi, ")"), t);
        case "media-unknown":
          return r.value;
        case "selector-root":
          return Vb(Lb([Zb(e, "custom-selector") ? Lb([Gb(e, "css-atrule").customSelector, jb]) : "", Mb(Lb([",", Zb(e, ["extend", "custom-selector", "nest"]) ? jb : _b]), e.map(n, "nodes"))]));
        case "selector-selector":
          return Vb(qb(Lb(e.map(n, "nodes"))));
        case "selector-comment":
          return r.value;
        case "selector-string":
          return Uv(r.value, t);
        case "selector-tag":
          {
            const t = e.getParentNode(), n = t && t.nodes.indexOf(r), o = n && t.nodes[n - 1];
            return Lb([r.namespace ? Lb([!0 === r.namespace ? "" : r.namespace.trim(), "|"]) : "", "selector-nesting" === o.type ? r.value : zv(tv(e, r.value) ? r.value.toLowerCase() : r.value)]);
          }
        case "selector-id":
          return Lb(["#", r.value]);
        case "selector-class":
          return Lb([".", zv(Uv(r.value, t))]);
        case "selector-attribute":
          return Lb(["[", r.namespace ? Lb([!0 === r.namespace ? "" : r.namespace.trim(), "|"]) : "", r.attribute.trim(), r.operator ? r.operator : "", r.value ? Jv(Uv(r.value.trim(), t), t) : "", r.insensitive ? " i" : "", "]"]);
        case "selector-combinator":
          {
            if ("+" === r.value || ">" === r.value || "~" === r.value || ">>>" === r.value) {
              const t = e.getParentNode(), n = "selector-selector" === t.type && t.nodes[0] === r ? "" : jb;
              return Lb([n, r.value, ov(e, r) ? "" : " "]);
            }
            const n = r.value.trim().startsWith("(") ? jb : "", o = zv(Uv(r.value.trim(), t)) || jb;
            return Lb([n, o]);
          }
        case "selector-universal":
          return Lb([r.namespace ? Lb([!0 === r.namespace ? "" : r.namespace.trim(), "|"]) : "", r.value]);
        case "selector-pseudo":
          return Lb([Yb(r.value), r.nodes && r.nodes.length > 0 ? Lb(["(", Mb(", ", e.map(n, "nodes")), ")"]) : ""]);
        case "selector-nesting":
          return r.value;
        case "selector-unknown":
          {
            const n = Gb(e, "css-rule");
            if (n && n.isSCSSNesterProperty) return zv(Uv(Yb(r.value), t));
            const o = e.getParentNode();
            if (o.raws && o.raws.selector) {
              const e = _v(o), n = e + o.raws.selector.length;
              return t.originalText.slice(e, n).trim();
            }
            const u = e.getParentNode(1);
            if ("value-paren_group" === o.type && u && "value-func" === u.type && "selector" === u.value) {
              const e = _v(o.open) + 1, n = Rv(o.close) - 1, r = t.originalText.slice(e, n).trim();
              return Mv(r) ? Lb([Jb, r]) : r;
            }
            return r.value;
          }
        case "value-value":
        case "value-root":
          return e.call(n, "group");
        case "value-comment":
          return t.originalText.slice(_v(r), Rv(r));
        case "value-comma_group":
          {
            const t = e.getParentNode(), o = e.getParentNode(1), u = Xb(e), i = u && "value-value" === t.type && ("grid" === u || u.startsWith("grid-template")), a = Gb(e, "css-atrule"), s = a && iv(a), c = e.map(n, "groups"), l = [], p = Kb(e, "url");
            let d = !1, f = !1;
            for (let n = 0; n < r.groups.length; ++n) {
              l.push(c[n]);
              const u = r.groups[n - 1], h = r.groups[n], m = r.groups[n + 1], g = r.groups[n + 2];
              if (p) {
                (m && dv(m) || dv(h)) && l.push(" ");
                continue;
              }
              if (!m) continue;
              if ("value-word" === h.type && h.value.endsWith("-") && jv(m)) continue;
              const D = "value-string" === h.type && h.value.startsWith("#{"), y = d && "value-string" === m.type && m.value.endsWith("}");
              if (D || y) {
                d = !d;
                continue;
              }
              if (d) continue;
              if (Ov(h) || Ov(m)) continue;
              if ("value-atword" === h.type && "" === h.value) continue;
              if ("~" === h.value) continue;
              if (h.value && h.value.includes("\\") && m && "value-comment" !== m.type) continue;
              if (u && u.value && u.value.indexOf("\\") === u.value.length - 1 && "value-operator" === h.type && "/" === h.value) continue;
              if ("\\" === h.value) continue;
              if (Sv(h, m)) continue;
              if (Bv(h) || Nv(h) || kv(m) || Nv(m) && bv(m) || kv(h) && bv(m)) continue;
              if ("--" === h.value && Bv(m)) continue;
              const E = hv(h), C = hv(m);
              if ((E && Bv(m) || C && kv(h)) && bv(m)) continue;
              if (Kb(e, "calc") && (dv(h) || dv(m) || fv(h) || fv(m)) && bv(m)) continue;
              const b = (dv(h) || fv(h)) && 0 === n && ("value-number" === m.type || m.isHex) && o && Lv(o) && !bv(m), v = g && "value-func" === g.type || g && Pv(g) || "value-func" === h.type || Pv(h), A = "value-func" === m.type || Pv(m) || u && "value-func" === u.type || u && Pv(u);
              if (lv(m) || lv(h) || Kb(e, "calc") || b || !(pv(m) && !v || pv(h) && !A || dv(m) && !v || dv(h) && !A || fv(m) || fv(h)) || !(bv(m) || E && (!u || u && hv(u)))) if (Tv(h)) {
                if ("value-paren_group" === t.type) {
                  l.push(Wb(_b));
                  continue;
                }
                l.push(_b);
              } else s && (cv(m) || sv(m) || yv(m) || mv(h) || gv(h)) || a && "namespace" === a.name.toLowerCase() ? l.push(" ") : i ? h.source && m.source && h.source.start.line !== m.source.start.line ? (l.push(_b), f = !0) : l.push(" ") : C ? l.push(" ") : m && "..." === m.value || jv(h) && jv(m) && Rv(h) === _v(m) || l.push(jb);
            }
            return (f && l.unshift(_b), s ? Vb(qb(Lb(l))) : ev(e) ? Vb($b(l)) : Vb(qb($b(l))));
          }
        case "value-paren_group":
          {
            const o = e.getParentNode();
            if (o && Dv(o) && (1 === r.groups.length || r.groups.length > 0 && "value-comma_group" === r.groups[0].type && r.groups[0].groups.length > 0 && "value-word" === r.groups[0].groups[0].type && r.groups[0].groups[0].value.startsWith("data:"))) return Lb([r.open ? e.call(n, "open") : "", Mb(",", e.map(n, "groups")), r.close ? e.call(n, "close") : ""]);
            if (!r.open) {
              const t = e.map(n, "groups"), r = [];
              for (let e = 0; e < t.length; e++) (0 !== e && r.push(Lb([",", jb])), r.push(t[e]));
              return Vb(qb($b(r)));
            }
            const u = wv(e), i = r.groups[r.groups.length - 1], a = i && "value-comment" === i.type;
            return Vb(Lb([r.open ? e.call(n, "open") : "", qb(Lb([Rb, Mb(Lb([",", jb]), e.map(e => {
              const t = e.getValue(), r = n(e);
              return vv(t) && "value-comma_group" === t.type && t.groups && t.groups[2] && "value-paren_group" === t.groups[2].type ? (r.contents.contents.parts[1] = Vb(r.contents.contents.parts[1]), Vb(Wb(r))) : r;
            }, "groups"))])), Ub(!a && rv(t.parser, t.originalText) && u && Vv(t) ? "," : ""), Rb, r.close ? e.call(n, "close") : ""]), {
              shouldBreak: u
            });
          }
        case "value-func":
          return Lb([r.value, Zb(e, "supports") && Iv(r) ? " " : "", e.call(n, "group")]);
        case "value-paren":
          return r.value;
        case "value-number":
          return Lb([Hv(r.value), Yb(r.unit)]);
        case "value-operator":
          return r.value;
        case "value-word":
          return r.isColor && r.isHex || nv(r.value) ? r.value.toLowerCase() : r.value;
        case "value-colon":
          {
            const t = e.getParentNode(), n = t && t.groups.indexOf(r), o = n && t.groups[n - 1];
            return Lb([r.value, o && "\\" === o.value[o.value.length - 1] || Kb(e, "url") ? "" : jb]);
          }
        case "value-comma":
          return Lb([r.value, " "]);
        case "value-string":
          return kb(r.raws.quote + r.value + r.raws.quote, t);
        case "value-atword":
          return Lb(["@", r.value]);
        case "value-unicode-range":
        case "value-unknown":
          return r.value;
        default:
          throw new Error(("Unknown postcss type ").concat(JSON.stringify(r.type)));
      }
    },
    embed: sb,
    insertPragma: Hb,
    massageAstNode: ZC
  }, Xv = {
    singleQuote: RC.singleQuote
  }, Yv = {
    name: "PostCSS",
    type: "markup",
    tmScope: "source.postcss",
    group: "CSS",
    extensions: [".pcss", ".postcss"],
    aceMode: "text",
    languageId: 262764437
  }, Kv = {
    name: "Less",
    type: "markup",
    color: "#1d365d",
    extensions: [".less"],
    tmScope: "source.css.less",
    aceMode: "less",
    codemirrorMode: "css",
    codemirrorMimeType: "text/css",
    languageId: 198
  }, Qv = {
    name: "SCSS",
    type: "markup",
    color: "#c6538c",
    tmScope: "source.css.scss",
    aceMode: "scss",
    codemirrorMode: "css",
    codemirrorMimeType: "text/x-scss",
    extensions: [".scss"],
    languageId: 329
  };
  var Zv = {
    languages: [ks({
      name: "CSS",
      type: "markup",
      tmScope: "source.css",
      aceMode: "css",
      codemirrorMode: "css",
      codemirrorMimeType: "text/css",
      color: "#563d7c",
      extensions: [".css"],
      languageId: 50
    }, e => ({
      since: "1.4.0",
      parsers: ["css"],
      vscodeLanguageIds: ["css"],
      extensions: [...e.extensions, ".wxss"]
    })), ks(Yv, () => ({
      since: "1.4.0",
      parsers: ["css"],
      vscodeLanguageIds: ["postcss"]
    })), ks(Kv, () => ({
      since: "1.4.0",
      parsers: ["less"],
      vscodeLanguageIds: ["less"]
    })), ks(Qv, () => ({
      since: "1.4.0",
      parsers: ["scss"],
      vscodeLanguageIds: ["scss"]
    }))],
    options: Xv,
    printers: {
      postcss: Gv
    },
    parsers: {
      get css() {
        return ({}).parsers.css;
      },
      get less() {
        return ({}).parsers.less;
      },
      get scss() {
        return ({}).parsers.scss;
      }
    }
  };
  var eA = {
    locStart: function (e) {
      return e.loc.start.offset;
    },
    locEnd: function (e) {
      return e.loc.end.offset;
    }
  };
  function tA(e, t) {
    if ("TextNode" === e.type) {
      const n = e.chars.trim();
      if (!n) return null;
      t.chars = n;
    }
  }
  tA.ignoredProperties = new Set(["loc", "selfClosing"]);
  var nA = tA;
  const rA = new Set(["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"]);
  function oA(e) {
    return uA(e, ["TextNode"]) && !(/\S/).test(e.chars);
  }
  function uA(e, t) {
    return e && t.some(t => e.type === t);
  }
  function iA(e, t) {
    const n = e.getValue(), r = e.getParentNode(0) || ({}), o = r.children || r.body || r.parts || [], u = o.indexOf(n);
    return -1 !== u && o[u + t];
  }
  function aA(e, t = 1) {
    return iA(e, -t);
  }
  function sA(e) {
    return iA(e, 1);
  }
  function cA(e) {
    return uA(e, ["MustacheCommentStatement"]) && "string" == typeof e.value && "prettier-ignore" === e.value.trim();
  }
  var lA = {
    getNextNode: sA,
    getPreviousNode: aA,
    hasPrettierIgnore: function (e) {
      const t = e.getValue(), n = aA(e, 2);
      return cA(t) || cA(n);
    },
    isNextNodeOfSomeType: function (e, t) {
      return uA(sA(e), t);
    },
    isNodeOfSomeType: uA,
    isParentOfSomeType: function (e, t) {
      return uA(e.getParentNode(0), t);
    },
    isPreviousNodeOfSomeType: function (e, t) {
      return uA(aA(e), t);
    },
    isVoid: function (e) {
      return (function (e) {
        return uA(e, ["ElementNode"]) && "string" == typeof e.tag && ((function (e) {
          return e.toUpperCase() === e;
        })(e.tag[0]) || e.tag.includes("."));
      })(e) && e.children.every(e => oA(e)) || rA.has(e.tag);
    },
    isWhitespaceNode: oA
  };
  const {builders: {concat: pA, group: dA, hardline: fA, ifBreak: hA, indent: mA, join: gA, line: DA, softline: yA}} = cn, {locStart: EA, locEnd: CA} = eA, {getNextNode: bA, getPreviousNode: vA, hasPrettierIgnore: AA, isNextNodeOfSomeType: FA, isNodeOfSomeType: xA, isParentOfSomeType: SA, isPreviousNodeOfSomeType: wA, isVoid: TA, isWhitespaceNode: BA} = lA;
  function NA(e, t) {
    const n = e.getValue();
    return pA(["<", n.tag, kA(e, t), rF(n), OA(n)]);
  }
  function kA(e, t) {
    const n = e.getValue();
    return mA(pA([n.attributes.length ? DA : "", gA(DA, e.map(t, "attributes")), n.modifiers.length ? DA : "", gA(DA, e.map(t, "modifiers")), n.comments.length ? DA : "", gA(DA, e.map(t, "comments"))]));
  }
  function PA(e, t, n) {
    return pA(e.map((e, r) => 0 === r ? pA([yA, n(e, t, n)]) : n(e, t, n), "children"));
  }
  function OA(e) {
    return TA(e) ? hA(pA([yA, "/>"]), pA([" />", yA])) : hA(pA([yA, ">"]), ">");
  }
  function IA(e) {
    const t = !1 === e.escaped ? "{{{" : "{{", n = e.strip && e.strip.open ? "~" : "";
    return pA([t, n]);
  }
  function LA(e) {
    const t = !1 === e.escaped ? "}}}" : "}}", n = e.strip && e.strip.close ? "~" : "";
    return pA([n, t]);
  }
  function MA(e) {
    const t = IA(e), n = e.openStrip.open ? "~" : "";
    return pA([t, n, "#"]);
  }
  function jA(e) {
    const t = LA(e), n = e.openStrip.close ? "~" : "";
    return pA([n, t]);
  }
  function _A(e) {
    const t = IA(e), n = e.closeStrip.open ? "~" : "";
    return pA([t, n, "/"]);
  }
  function RA(e) {
    const t = LA(e), n = e.closeStrip.close ? "~" : "";
    return pA([n, t]);
  }
  function VA(e) {
    const t = IA(e), n = e.inverseStrip.open ? "~" : "";
    return pA([t, n]);
  }
  function $A(e) {
    const t = LA(e), n = e.inverseStrip.close ? "~" : "";
    return pA([n, t]);
  }
  function qA(e, t) {
    const n = e.getValue();
    return dA(pA([MA(n), eF(e, t), rF(n.program), yA, jA(n)]));
  }
  function WA(e) {
    return pA([fA, VA(e), "else", $A(e)]);
  }
  function UA(e, t) {
    const n = e.getParentNode(1);
    return pA([VA(n), "else ", eF(e, t), $A(n)]);
  }
  function JA(e, t) {
    const n = e.getValue();
    return pA([zA(n) ? yA : fA, _A(n), e.call(t, "path"), RA(n)]);
  }
  function zA(e) {
    return xA(e, ["BlockStatement"]) && e.program.body.every(e => BA(e));
  }
  function HA(e) {
    return xA(e, ["BlockStatement"]) && e.inverse;
  }
  function GA(e, t) {
    if (zA(e.getValue())) return "";
    const n = e.call(t, "program");
    return mA(pA([fA, n]));
  }
  function XA(e, t) {
    const n = e.getValue(), r = e.call(t, "inverse"), o = pA([fA, r]);
    return (function (e) {
      return HA(e) && 1 === e.inverse.body.length && xA(e.inverse.body[0], ["BlockStatement"]) && "if" === e.inverse.body[0].path.parts[0];
    })(n) ? o : HA(n) ? pA([WA(n), mA(o)]) : "";
  }
  function YA(e) {
    return (e = "string" == typeof e ? e : "").split("\n").length - 1;
  }
  function KA(e = 0, t = 0) {
    return new Array(Math.min(e, t)).fill(fA);
  }
  function QA(e, t) {
    const n = {
      quote: '"',
      regex: /"/g
    }, r = {
      quote: "'",
      regex: /'/g
    }, o = t.singleQuote ? r : n, u = o === r ? n : r;
    let i = !1;
    if (e.includes(o.quote) || e.includes(u.quote)) {
      i = (e.match(o.regex) || []).length > (e.match(u.regex) || []).length;
    }
    const a = i ? u : o, s = e.replace(a.regex, ("\\").concat(a.quote));
    return pA([a.quote, s, a.quote]);
  }
  function ZA(e, t) {
    const n = tF(e, t), r = nF(e, t);
    return r ? mA(pA([n, DA, dA(r)])) : n;
  }
  function eF(e, t) {
    const n = tF(e, t), r = nF(e, t);
    return r ? mA(dA(pA([n, DA, r]))) : n;
  }
  function tF(e, t) {
    return e.call(t, "path");
  }
  function nF(e, t) {
    const n = e.getValue(), r = [];
    if (n.params.length) {
      const n = e.map(t, "params");
      r.push(...n);
    }
    if (n.hash && n.hash.pairs.length > 0) {
      const n = e.call(t, "hash");
      r.push(n);
    }
    return r.length ? gA(DA, r) : "";
  }
  function rF(e) {
    return e && e.blockParams.length ? pA([" as |", e.blockParams.join(" "), "|"]) : "";
  }
  var oF = {
    print: function (e, t, n) {
      const r = e.getValue();
      if (!r) return "";
      if (AA(e)) return t.originalText.slice(EA(r), CA(r));
      switch (r.type) {
        case "Block":
        case "Program":
        case "Template":
          return dA(pA(e.map(n, "body")));
        case "ElementNode":
          {
            const o = FA(e, ["ElementNode"]) ? fA : "";
            if (TA(r)) return pA([dA(NA(e, n)), o]);
            const u = r.children.every(e => BA(e));
            return pA([dA(NA(e, n)), dA(pA([u ? "" : mA(PA(e, t, n)), r.children.length ? fA : "", pA(["</", r.tag, ">"])])), o]);
          }
        case "BlockStatement":
          {
            const t = e.getParentNode(1), o = t && t.inverse && 1 === t.inverse.body.length && t.inverse.body[0] === r && "if" === t.inverse.body[0].path.parts[0];
            return pA(o ? [UA(e, n), GA(e, n), XA(e, n)] : [qA(e, n), dA(pA([GA(e, n), XA(e, n), JA(e, n)]))]);
          }
        case "ElementModifierStatement":
          return dA(pA(["{{", eF(e, n), yA, "}}"]));
        case "MustacheStatement":
          {
            const t = SA(e, ["AttrNode", "ConcatStatement"]), o = SA(e, ["ElementNode"]) && 0 === r.hash.pairs.length && (function (e) {
              return 0 === e.params.length;
            })(r), u = t || o;
            return dA(pA([IA(r), u ? mA(yA) : "", eF(e, n), yA, LA(r)]));
          }
        case "SubExpression":
          return dA(pA(["(", ZA(e, n), yA, ")"]));
        case "AttrNode":
          {
            const o = "TextNode" === r.value.type;
            if (o && "" === r.value.chars && EA(r.value) === CA(r.value)) return pA([r.name]);
            const u = e.call(n, "value"), i = o ? QA(u.parts.join(), t) : u;
            return pA([r.name, "=", i]);
          }
        case "ConcatStatement":
          {
            const r = t.singleQuote ? "'" : '"';
            return pA([r, ...e.map(e => n(e), "parts"), r]);
          }
        case "Hash":
          return pA([gA(DA, e.map(n, "pairs"))]);
        case "HashPair":
          return pA([r.key, "=", e.call(n, "value")]);
        case "TextNode":
          {
            const t = 2, n = !vA(e), o = !bA(e), u = !(/\S/).test(r.chars), i = YA(r.chars);
            let a = (function (e) {
              return YA(((e = "string" == typeof e ? e : "").match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "");
            })(r.chars), s = (function (e) {
              return YA(((e = "string" == typeof e ? e : "").match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "");
            })(r.chars);
            if ((n || o) && u && SA(e, ["Block", "ElementNode", "Template"])) return "";
            u && i ? (a = Math.min(i, t), s = 0) : (FA(e, ["BlockStatement", "ElementNode"]) && (s = Math.max(s, 1)), wA(e, ["BlockStatement", "ElementNode"]) && (a = Math.max(a, 1)));
            if (e.stack.includes("attributes")) {
              if (!(function (e, t) {
                return SA(e, ["AttrNode"]) && e.getParentNode().name.toLowerCase() === t || SA(e, ["ConcatStatement"]) && e.getParentNode(1).name.toLowerCase() === t;
              })(e, "class")) return pA([r.chars]);
              let n = "", o = "";
              return (SA(e, ["ConcatStatement"]) && (wA(e, ["MustacheStatement"]) && (n = " "), FA(e, ["MustacheStatement"]) && (o = " ")), pA([...KA(a, t), r.chars.replace(/^\s+/g, n).replace(/\s+$/, o), ...KA(s, t)]));
            }
            let c = "", l = "";
            (0 === s && FA(e, ["MustacheStatement"]) && (l = " "), 0 === a && wA(e, ["MustacheStatement"]) && (c = " "), n && (a = 0, c = ""), o && (s = 0, l = ""));
            let p = r.chars;
            return (p.startsWith("{{") && p.includes("}}") && (p = "\\" + p), pA([...KA(a, t), p.replace(/^\s+/g, c).replace(/\s+$/, l), ...KA(s, t)]));
          }
        case "MustacheCommentStatement":
          {
            const e = r.value.includes("}}") ? "--" : "";
            return pA(["{{!", e, r.value, e, "}}"]);
          }
        case "PathExpression":
          return r.original;
        case "BooleanLiteral":
          return String(r.value);
        case "CommentStatement":
          return pA(["\x3c!--", r.value, "--\x3e"]);
        case "StringLiteral":
          return QA(r.value, t);
        case "NumberLiteral":
          return String(r.value);
        case "UndefinedLiteral":
          return "undefined";
        case "NullLiteral":
          return "null";
        default:
          throw new Error("unknown glimmer type: " + JSON.stringify(r.type));
      }
    },
    massageAstNode: nA
  };
  var uF = {
    languages: [ks({
      name: "Handlebars",
      type: "markup",
      color: "#f7931e",
      aliases: ["hbs", "htmlbars"],
      extensions: [".handlebars", ".hbs"],
      tmScope: "text.html.handlebars",
      aceMode: "handlebars",
      languageId: 155
    }, () => ({
      since: null,
      parsers: ["glimmer"],
      vscodeLanguageIds: ["handlebars"]
    }))],
    printers: {
      glimmer: oF
    },
    parsers: {
      get glimmer() {
        return ({}).parsers.glimmer;
      }
    }
  };
  var iF = {
    hasPragma: function (e) {
      return (/^\s*#[^\S\n]*@(format|prettier)\s*(\n|$)/).test(e);
    },
    insertPragma: function (e) {
      return "# @format\n\n" + e;
    }
  };
  var aF = {
    locStart: function (e) {
      return "number" == typeof e.start ? e.start : e.loc && e.loc.start;
    },
    locEnd: function (e) {
      return "number" == typeof e.end ? e.end : e.loc && e.loc.end;
    }
  };
  const {builders: {concat: sF, join: cF, hardline: lF, line: pF, softline: dF, group: fF, indent: hF, ifBreak: mF}} = cn, {isNextLineEmpty: gF} = Lt, {insertPragma: DF} = iF, {locStart: yF, locEnd: EF} = aF;
  function CF(e, t, n) {
    if (0 === n.directives.length) return "";
    const r = cF(pF, e.map(t, "directives"));
    return "FragmentDefinition" === n.kind || "OperationDefinition" === n.kind ? fF(sF([pF, r])) : sF([" ", fF(hF(sF([dF, r])))]);
  }
  function bF(e, t, n) {
    const r = e.getValue().length;
    return e.map((e, o) => {
      const u = n(e);
      return gF(t.originalText, e.getValue(), EF) && o < r - 1 ? sF([u, lF]) : u;
    });
  }
  function vF(e, t, n) {
    const r = e.getNode(), o = [], {interfaces: u} = r, i = e.map(e => n(e), "interfaces");
    for (let e = 0; e < u.length; e++) {
      const n = u[e];
      o.push(i[e]);
      const r = u[e + 1];
      if (r) {
        const e = t.originalText.slice(n.loc.end, r.loc.start), u = e.includes("#"), i = e.replace(/#.*/g, "").trim();
        (o.push("," === i ? "," : " &"), o.push(u ? pF : " "));
      }
    }
    return o;
  }
  function AF() {}
  AF.ignoredProperties = new Set(["loc", "comments"]);
  var FF = {
    print: function (e, t, n) {
      const r = e.getValue();
      if (!r) return "";
      if ("string" == typeof r) return r;
      switch (r.kind) {
        case "Document":
          {
            const o = [];
            return (e.each((e, u) => {
              (o.push(sF([e.call(n)])), u !== r.definitions.length - 1 && (o.push(lF), gF(t.originalText, e.getValue(), EF) && o.push(lF)));
            }, "definitions"), sF([sF(o), lF]));
          }
        case "OperationDefinition":
          {
            const o = "{" !== t.originalText[yF(r)], u = !!r.name;
            return sF([o ? r.operation : "", o && u ? sF([" ", e.call(n, "name")]) : "", r.variableDefinitions && r.variableDefinitions.length ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e.map(n, "variableDefinitions"))])), dF, ")"])) : "", CF(e, n, r), r.selectionSet && (o || u) ? " " : "", e.call(n, "selectionSet")]);
          }
        case "FragmentDefinition":
          return sF(["fragment ", e.call(n, "name"), r.variableDefinitions && r.variableDefinitions.length ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e.map(n, "variableDefinitions"))])), dF, ")"])) : "", " on ", e.call(n, "typeCondition"), CF(e, n, r), " ", e.call(n, "selectionSet")]);
        case "SelectionSet":
          return sF(["{", hF(sF([lF, cF(lF, e.call(e => bF(e, t, n), "selections"))])), lF, "}"]);
        case "Field":
          return fF(sF([r.alias ? sF([e.call(n, "alias"), ": "]) : "", e.call(n, "name"), r.arguments.length > 0 ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e.call(e => bF(e, t, n), "arguments"))])), dF, ")"])) : "", CF(e, n, r), r.selectionSet ? " " : "", e.call(n, "selectionSet")]));
        case "Name":
          return r.value;
        case "StringValue":
          return r.block ? sF(['"""', lF, cF(lF, r.value.replace(/"""/g, "\\$&").split("\n")), lF, '"""']) : sF(['"', r.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"']);
        case "IntValue":
        case "FloatValue":
        case "EnumValue":
          return r.value;
        case "BooleanValue":
          return r.value ? "true" : "false";
        case "NullValue":
          return "null";
        case "Variable":
          return sF(["$", e.call(n, "name")]);
        case "ListValue":
          return fF(sF(["[", hF(sF([dF, cF(sF([mF("", ", "), dF]), e.map(n, "values"))])), dF, "]"]));
        case "ObjectValue":
          return fF(sF(["{", t.bracketSpacing && r.fields.length > 0 ? " " : "", hF(sF([dF, cF(sF([mF("", ", "), dF]), e.map(n, "fields"))])), dF, mF("", t.bracketSpacing && r.fields.length > 0 ? " " : ""), "}"]));
        case "ObjectField":
        case "Argument":
          return sF([e.call(n, "name"), ": ", e.call(n, "value")]);
        case "Directive":
          return sF(["@", e.call(n, "name"), r.arguments.length > 0 ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e.call(e => bF(e, t, n), "arguments"))])), dF, ")"])) : ""]);
        case "NamedType":
          return e.call(n, "name");
        case "VariableDefinition":
          return sF([e.call(n, "variable"), ": ", e.call(n, "type"), r.defaultValue ? sF([" = ", e.call(n, "defaultValue")]) : "", CF(e, n, r)]);
        case "ObjectTypeExtension":
        case "ObjectTypeDefinition":
          return sF([e.call(n, "description"), r.description ? lF : "", "ObjectTypeExtension" === r.kind ? "extend " : "", "type ", e.call(n, "name"), r.interfaces.length > 0 ? sF([" implements ", sF(vF(e, t, n))]) : "", CF(e, n, r), r.fields.length > 0 ? sF([" {", hF(sF([lF, cF(lF, e.call(e => bF(e, t, n), "fields"))])), lF, "}"]) : ""]);
        case "FieldDefinition":
          return sF([e.call(n, "description"), r.description ? lF : "", e.call(n, "name"), r.arguments.length > 0 ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e.call(e => bF(e, t, n), "arguments"))])), dF, ")"])) : "", ": ", e.call(n, "type"), CF(e, n, r)]);
        case "DirectiveDefinition":
          return sF([e.call(n, "description"), r.description ? lF : "", "directive ", "@", e.call(n, "name"), r.arguments.length > 0 ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e.call(e => bF(e, t, n), "arguments"))])), dF, ")"])) : "", r.repeatable ? " repeatable" : "", sF([" on ", cF(" | ", e.map(n, "locations"))])]);
        case "EnumTypeExtension":
        case "EnumTypeDefinition":
          return sF([e.call(n, "description"), r.description ? lF : "", "EnumTypeExtension" === r.kind ? "extend " : "", "enum ", e.call(n, "name"), CF(e, n, r), r.values.length > 0 ? sF([" {", hF(sF([lF, cF(lF, e.call(e => bF(e, t, n), "values"))])), lF, "}"]) : ""]);
        case "EnumValueDefinition":
          return sF([e.call(n, "description"), r.description ? lF : "", e.call(n, "name"), CF(e, n, r)]);
        case "InputValueDefinition":
          return sF([e.call(n, "description"), r.description ? r.description.block ? lF : pF : "", e.call(n, "name"), ": ", e.call(n, "type"), r.defaultValue ? sF([" = ", e.call(n, "defaultValue")]) : "", CF(e, n, r)]);
        case "InputObjectTypeExtension":
        case "InputObjectTypeDefinition":
          return sF([e.call(n, "description"), r.description ? lF : "", "InputObjectTypeExtension" === r.kind ? "extend " : "", "input ", e.call(n, "name"), CF(e, n, r), r.fields.length > 0 ? sF([" {", hF(sF([lF, cF(lF, e.call(e => bF(e, t, n), "fields"))])), lF, "}"]) : ""]);
        case "SchemaDefinition":
          return sF(["schema", CF(e, n, r), " {", r.operationTypes.length > 0 ? hF(sF([lF, cF(lF, e.call(e => bF(e, t, n), "operationTypes"))])) : "", lF, "}"]);
        case "OperationTypeDefinition":
          return sF([e.call(n, "operation"), ": ", e.call(n, "type")]);
        case "InterfaceTypeExtension":
        case "InterfaceTypeDefinition":
          return sF([e.call(n, "description"), r.description ? lF : "", "InterfaceTypeExtension" === r.kind ? "extend " : "", "interface ", e.call(n, "name"), r.interfaces.length > 0 ? sF([" implements ", sF(vF(e, t, n))]) : "", CF(e, n, r), r.fields.length > 0 ? sF([" {", hF(sF([lF, cF(lF, e.call(e => bF(e, t, n), "fields"))])), lF, "}"]) : ""]);
        case "FragmentSpread":
          return sF(["...", e.call(n, "name"), CF(e, n, r)]);
        case "InlineFragment":
          return sF(["...", r.typeCondition ? sF([" on ", e.call(n, "typeCondition")]) : "", CF(e, n, r), " ", e.call(n, "selectionSet")]);
        case "UnionTypeExtension":
        case "UnionTypeDefinition":
          return fF(sF([e.call(n, "description"), r.description ? lF : "", fF(sF(["UnionTypeExtension" === r.kind ? "extend " : "", "union ", e.call(n, "name"), CF(e, n, r), r.types.length > 0 ? sF([" =", mF("", " "), hF(sF([mF(sF([pF, "  "])), cF(sF([pF, "| "]), e.map(n, "types"))]))]) : ""]))]));
        case "ScalarTypeExtension":
        case "ScalarTypeDefinition":
          return sF([e.call(n, "description"), r.description ? lF : "", "ScalarTypeExtension" === r.kind ? "extend " : "", "scalar ", e.call(n, "name"), CF(e, n, r)]);
        case "NonNullType":
          return sF([e.call(n, "type"), "!"]);
        case "ListType":
          return sF(["[", e.call(n, "type"), "]"]);
        default:
          throw new Error("unknown graphql type: " + JSON.stringify(r.kind));
      }
    },
    massageAstNode: AF,
    hasPrettierIgnore: function (e) {
      const t = e.getValue();
      return t && Array.isArray(t.comments) && t.comments.some(e => "prettier-ignore" === e.value.trim());
    },
    insertPragma: DF,
    printComment: function (e) {
      const t = e.getValue();
      if ("Comment" === t.kind) return "#" + t.value.trimEnd();
      throw new Error("Not a comment: " + JSON.stringify(t));
    },
    canAttachComment: function (e) {
      return e.kind && "Comment" !== e.kind;
    }
  }, xF = {
    bracketSpacing: RC.bracketSpacing
  };
  var SF = {
    languages: [ks({
      name: "GraphQL",
      type: "data",
      color: "#e10098",
      extensions: [".graphql", ".gql", ".graphqls"],
      tmScope: "source.graphql",
      aceMode: "text",
      languageId: 139
    }, () => ({
      since: "1.5.0",
      parsers: ["graphql"],
      vscodeLanguageIds: ["graphql"]
    }))],
    options: xF,
    printers: {
      graphql: FF
    },
    parsers: {
      get graphql() {
        return ({}).parsers.graphql;
      }
    }
  };
  var wF = {
    locStart: function (e) {
      return e.position.start.offset;
    },
    locEnd: function (e) {
      return e.position.end.offset;
    }
  };
  const {getLast: TF} = Lt, {locStart: BF, locEnd: NF} = wF, {cjkPattern: kF, kPattern: PF, punctuationPattern: OF} = {
    cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u3000-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?",
    kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]",
    punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]"
  }, IF = ["liquidNode", "inlineCode", "emphasis", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"], LF = IF.concat(["tableCell", "paragraph", "heading"]), MF = new RegExp(PF), jF = new RegExp(OF);
  function _F(e, t) {
    const [, n, r, o] = t.slice(e.position.start.offset, e.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/);
    return {
      numberText: n,
      marker: r,
      leadingSpaces: o
    };
  }
  var RF = {
    mapAst: function (e, t) {
      return (function e(n, r, o) {
        o = o || [];
        const u = Object.assign({}, t(n, r, o));
        return (u.children && (u.children = u.children.map((t, n) => e(t, n, [u].concat(o)))), u);
      })(e, null, null);
    },
    splitText: function (e, t) {
      const n = "non-cjk", r = "cj-letter", o = "cjk-punctuation", u = [];
      return (("preserve" === t.proseWrap ? e : e.replace(new RegExp(("(").concat(kF, ")\n(").concat(kF, ")"), "g"), "$1$2")).split(/([\t\n ]+)/).forEach((e, t, a) => {
        t % 2 != 1 ? (0 !== t && t !== a.length - 1 || "" !== e) && e.split(new RegExp(("(").concat(kF, ")"))).forEach((e, t, u) => {
          (0 !== t && t !== u.length - 1 || "" !== e) && (t % 2 != 0 ? i(jF.test(e) ? {
            type: "word",
            value: e,
            kind: o,
            hasLeadingPunctuation: !0,
            hasTrailingPunctuation: !0
          } : {
            type: "word",
            value: e,
            kind: MF.test(e) ? "k-letter" : r,
            hasLeadingPunctuation: !1,
            hasTrailingPunctuation: !1
          }) : "" !== e && i({
            type: "word",
            value: e,
            kind: n,
            hasLeadingPunctuation: jF.test(e[0]),
            hasTrailingPunctuation: jF.test(TF(e))
          }));
        }) : u.push({
          type: "whitespace",
          value: (/\n/).test(e) ? "\n" : " "
        });
      }), u);
      function i(e) {
        const t = TF(u);
        var i, a;
        (t && "word" === t.type && (t.kind === n && e.kind === r && !t.hasTrailingPunctuation || t.kind === r && e.kind === n && !e.hasLeadingPunctuation ? u.push({
          type: "whitespace",
          value: " "
        }) : (i = n, a = o, t.kind === i && e.kind === a || t.kind === a && e.kind === i || [t.value, e.value].some(e => (/\u3000/).test(e)) || u.push({
          type: "whitespace",
          value: ""
        }))), u.push(e));
      }
    },
    punctuationPattern: OF,
    getFencedCodeBlockValue: function (e, t) {
      const {value: n} = e;
      return e.position.end.offset === t.length && n.endsWith("\n") && t.endsWith("\n") ? n.slice(0, -1) : n;
    },
    getOrderedListItemInfo: _F,
    hasGitDiffFriendlyOrderedList: function (e, t) {
      if (!e.ordered) return !1;
      if (e.children.length < 2) return !1;
      const n = Number(_F(e.children[0], t.originalText).numberText), r = Number(_F(e.children[1], t.originalText).numberText);
      if (0 === n && e.children.length > 2) {
        const n = Number(_F(e.children[2], t.originalText).numberText);
        return 1 === r && 1 === n;
      }
      return 1 === r;
    },
    INLINE_NODE_TYPES: IF,
    INLINE_NODE_WRAPPER_TYPES: LF,
    isAutolink: function (e) {
      if (!e || "link" !== e.type || 1 !== e.children.length) return !1;
      const t = e.children[0];
      return t && BF(e) === BF(t) && NF(e) === NF(t);
    }
  };
  const {inferParserByLanguage: VF, getMaxContinuousCount: $F} = Lt, {builders: {hardline: qF, concat: WF, markAsRoot: UF}, utils: {replaceNewlinesWithLiterallines: JF}} = cn, {print: zF} = ob, {getFencedCodeBlockValue: HF} = RF;
  var GF = function (e, t, n, r) {
    const o = e.getValue();
    if ("code" === o.type && null !== o.lang) {
      const e = VF(o.lang, r);
      if (e) {
        const t = r.__inJsTemplate ? "~" : "`", u = t.repeat(Math.max(3, $F(o.value, t) + 1)), i = n(HF(o, r.originalText), {
          parser: e
        }, {
          stripTrailingHardline: !0
        });
        return UF(WF([u, o.lang, o.meta ? " " + o.meta : "", qF, JF(i), qF, u]));
      }
    }
    switch (o.type) {
      case "front-matter":
        return zF(o, n);
      case "importExport":
        return WF([n(o.value, {
          parser: "babel"
        }, {
          stripTrailingHardline: !0
        }), qF]);
      case "jsx":
        return n(("<$>").concat(o.value, "</$>"), {
          parser: "__js_expression",
          rootMarker: "mdx"
        }, {
          stripTrailingHardline: !0
        });
    }
    return null;
  };
  const {parse: XF} = ob, YF = ["format", "prettier"];
  function KF(e) {
    const t = ("@(").concat(YF.join("|"), ")"), n = new RegExp([("\x3c!--\\s*").concat(t, "\\s*--\x3e"), ("\x3c!--.*\r?\n[\\s\\S]*(^|\n)[^\\S\n]*").concat(t, "[^\\S\n]*($|\n)[\\s\\S]*\n.*--\x3e")].join("|"), "m"), r = e.match(n);
    return r && 0 === r.index;
  }
  var QF = {
    startWithPragma: KF,
    hasPragma: e => KF(XF(e).content.trimStart()),
    insertPragma: e => {
      const t = XF(e), n = ("\x3c!-- @").concat(YF[0], " --\x3e");
      return t.frontMatter ? ("").concat(t.frontMatter.raw, "\n\n").concat(n, "\n\n").concat(t.content) : ("").concat(n, "\n\n").concat(t.content);
    }
  };
  const {getOrderedListItemInfo: ZF, mapAst: ex, splitText: tx} = RF, nx = /^([\u0000-\uffff]|[\ud800-\udbff][\udc00-\udfff])$/;
  function rx(e, t, n) {
    return ex(e, e => {
      if (!e.children) return e;
      const r = e.children.reduce((e, r) => {
        const o = e[e.length - 1];
        return (o && t(o, r) ? e.splice(-1, 1, n(o, r)) : e.push(r), e);
      }, []);
      return Object.assign({}, e, {
        children: r
      });
    });
  }
  var ox = function (e, t) {
    return e = (function (e) {
      return rx(e, (e, t) => "importExport" === e.type && "importExport" === t.type, (e, t) => ({
        type: "importExport",
        value: e.value + "\n\n" + t.value,
        position: {
          start: e.position.start,
          end: t.position.end
        }
      }));
    })(e = (function (e) {
      return ex(e, e => "import" !== e.type && "export" !== e.type ? e : Object.assign({}, e, {
        type: "importExport"
      }));
    })(e = (function (e, t) {
      return ex(e, (e, n, [r]) => {
        if ("text" !== e.type) return e;
        let {value: o} = e;
        return ("paragraph" === r.type && (0 === n && (o = o.trimStart()), n === r.children.length - 1 && (o = o.trimEnd())), {
          type: "sentence",
          position: e.position,
          children: tx(o, t)
        });
      });
    })(e = (function (e, t) {
      return ex(e, (e, t, n) => {
        if ("list" === e.type && 0 !== e.children.length) {
          for (let t = 0; t < n.length; t++) {
            const r = n[t];
            if ("list" === r.type && !r.isAligned) return (e.isAligned = !1, e);
          }
          e.isAligned = r(e);
        }
        return e;
      });
      function n(e) {
        return 0 === e.children.length ? -1 : e.children[0].position.start.column - 1;
      }
      function r(e) {
        if (!e.ordered) return !0;
        const [r, o] = e.children;
        if (ZF(r, t.originalText).leadingSpaces.length > 1) return !0;
        const u = n(r);
        if (-1 === u) return !1;
        if (1 === e.children.length) return u % t.tabWidth == 0;
        if (u !== n(o)) return !1;
        if (u % t.tabWidth == 0) return !0;
        return ZF(o, t.originalText).leadingSpaces.length > 1;
      }
    })(e = (function (e, t) {
      return ex(e, (e, n, r) => {
        if ("code" === e.type) {
          const n = (/^\n?( {4,}|\t)/).test(t.originalText.slice(e.position.start.offset, e.position.end.offset));
          if ((e.isIndented = n, n)) for (let e = 0; e < r.length; e++) {
            const t = r[e];
            if (t.hasIndentedCodeblock) break;
            "list" === t.type && (t.hasIndentedCodeblock = !0);
          }
        }
        return e;
      });
    })(e = (function (e) {
      return ex(e, e => "inlineCode" !== e.type ? e : Object.assign({}, e, {
        value: e.value.replace(/\s+/g, " ")
      }));
    })(e = (function (e) {
      return rx(e, (e, t) => "text" === e.type && "text" === t.type, (e, t) => ({
        type: "text",
        value: e.value + t.value,
        position: {
          start: e.position.start,
          end: t.position.end
        }
      }));
    })(e = (function (e, t) {
      return ex(e, e => "text" === e.type && "*" !== e.value && "_" !== e.value && nx.test(e.value) && e.position.end.offset - e.position.start.offset !== e.value.length ? Object.assign({}, e, {
        value: t.originalText.slice(e.position.start.offset, e.position.end.offset)
      }) : e);
    })(e, t))), t), t), t)));
  };
  const {isFrontMatterNode: ux} = Lt, {startWithPragma: ix} = QF, ax = new Set(["position", "raw"]);
  function sx(e, t, n) {
    return ("front-matter" !== e.type && "code" !== e.type && "yaml" !== e.type && "import" !== e.type && "export" !== e.type && "jsx" !== e.type || delete t.value, "list" === e.type && delete t.isAligned, "list" !== e.type && "listItem" !== e.type || (delete t.spread, delete t.loose), "text" === e.type ? null : ("inlineCode" === e.type && (t.value = e.value.replace(/[\t\n ]+/g, " ")), "wikiLink" === e.type && (t.value = e.value.trim().replace(/[\t\n]+/g, " ")), "definition" !== e.type && "linkReference" !== e.type || (t.label = e.label.trim().replace(/[\t\n ]+/g, " ").toLowerCase()), "definition" !== e.type && "link" !== e.type && "image" !== e.type || !e.title || (t.title = e.title.replace(/\\(["')])/g, "$1")), n && "root" === n.type && n.children.length > 0 && (n.children[0] === e || ux(n.children[0]) && n.children[1] === e) && "html" === e.type && ix(e.value) ? null : void 0));
  }
  sx.ignoredProperties = ax;
  var cx = sx;
  const {getLast: lx, getMinNotPresentContinuousCount: px, getMaxContinuousCount: dx, getStringWidth: fx} = Lt, {builders: {breakParent: hx, concat: mx, join: gx, line: Dx, literalline: yx, markAsRoot: Ex, hardline: Cx, softline: bx, ifBreak: vx, fill: Ax, align: Fx, indent: xx, group: Sx}, utils: {normalizeDoc: wx}, printer: {printDocToString: Tx}} = cn, {replaceEndOfLineWith: Bx} = Lt, {insertPragma: Nx} = QF, {locStart: kx, locEnd: Px} = wF, {getFencedCodeBlockValue: Ox, hasGitDiffFriendlyOrderedList: Ix, splitText: Lx, punctuationPattern: Mx, INLINE_NODE_TYPES: jx, INLINE_NODE_WRAPPER_TYPES: _x, isAutolink: Rx} = RF, Vx = new Set(["importExport"]), $x = ["heading", "tableCell", "link", "wikiLink"], qx = new Set(["listItem", "definition", "footnoteDefinition"]);
  function Wx(e, t, n, r) {
    const o = e.getValue(), u = null === o.checked ? "" : o.checked ? "[x] " : "[ ] ";
    return mx([u, Xx(e, t, n, {
      processor: (e, o) => {
        if (0 === o && "list" !== e.getValue().type) return Fx((" ").repeat(u.length), e.call(n));
        const i = (" ").repeat((a = t.tabWidth - r.length, c = 3, a < (s = 0) ? s : a > c ? c : a));
        var a, s, c;
        return mx([i, Fx(i, e.call(n))]);
      }
    })]);
  }
  function Ux(e, t) {
    return (function (e, t, n) {
      n = n || (() => !0);
      let r = -1;
      for (const o of t.children) if ((o.type === e.type && n(o) ? r++ : r = -1, o === e)) return r;
    })(e, t, t => t.ordered === e.ordered);
  }
  function Jx(e, t) {
    const n = [].concat(t);
    let r, o = -1;
    for (; r = e.getParentNode(++o); ) if (n.includes(r.type)) return o;
    return -1;
  }
  function zx(e, t) {
    const n = Jx(e, t);
    return -1 === n ? null : e.getParentNode(n);
  }
  function Hx(e, t, n) {
    if ("preserve" === n.proseWrap && "\n" === t) return Cx;
    const r = "always" === n.proseWrap && !zx(e, $x);
    return "" !== t ? r ? Dx : " " : r ? bx : "";
  }
  function Gx(e, t, n) {
    const r = [];
    let o = null;
    const {children: u} = e.getValue();
    return (u.forEach((e, t) => {
      switch (Kx(e)) {
        case "start":
          null === o && (o = {
            index: t,
            offset: e.position.end.offset
          });
          break;
        case "end":
          null !== o && (r.push({
            start: o,
            end: {
              index: t,
              offset: e.position.start.offset
            }
          }), o = null);
      }
    }), Xx(e, t, n, {
      processor: (e, o) => {
        if (0 !== r.length) {
          const e = r[0];
          if (o === e.start.index) return mx([u[e.start.index].value, t.originalText.slice(e.start.offset, e.end.offset), u[e.end.index].value]);
          if (e.start.index < o && o < e.end.index) return !1;
          if (o === e.end.index) return (r.shift(), !1);
        }
        return e.call(n);
      }
    }));
  }
  function Xx(e, t, n, r) {
    const o = (r = r || ({})).postprocessor || mx, u = r.processor || (e => e.call(n)), i = e.getValue(), a = [];
    let s;
    return (e.each((e, n) => {
      const r = e.getValue(), o = u(e, n);
      if (!1 !== o) {
        const e = {
          parts: a,
          prevNode: s,
          parentNode: i,
          options: t
        };
        ((function (e, t) {
          const n = 0 === t.parts.length, r = jx.includes(e.type), o = "html" === e.type && _x.includes(t.parentNode.type);
          return n || r || o;
        })(r, e) || (a.push(Cx), s && Vx.has(s.type) || ((function (e, t) {
          const n = (t.prevNode && t.prevNode.type) === e.type && qx.has(e.type), r = "listItem" === t.parentNode.type && !t.parentNode.loose, o = t.prevNode && "listItem" === t.prevNode.type && t.prevNode.loose, u = "next" === Kx(t.prevNode), i = "html" === e.type && t.prevNode && "html" === t.prevNode.type && t.prevNode.position.end.line + 1 === e.position.start.line, a = "html" === e.type && "listItem" === t.parentNode.type && t.prevNode && "paragraph" === t.prevNode.type && t.prevNode.position.end.line + 1 === e.position.start.line;
          return o || !(n || r || u || i || a);
        })(r, e) || Qx(r, e)) && a.push(Cx), Qx(r, e) && a.push(Cx)), a.push(o), s = r);
      }
    }, "children"), o(a));
  }
  function Yx(e) {
    let t = e;
    for (; t.children && 0 !== t.children.length; ) t = t.children[t.children.length - 1];
    return t;
  }
  function Kx(e) {
    if ("html" !== e.type) return !1;
    const t = e.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
    return null !== t && (t[1] ? t[1] : "next");
  }
  function Qx(e, t) {
    const n = t.prevNode && "list" === t.prevNode.type, r = "code" === e.type && e.isIndented;
    return n && r;
  }
  function Zx(e, t) {
    const n = [" "].concat(t || []);
    return new RegExp(n.map(e => ("\\").concat(e)).join("|")).test(e) ? ("<").concat(e, ">") : e;
  }
  function eS(e, t, n) {
    if ((null == n && (n = !0), !e)) return "";
    if (n) return " " + eS(e, t, !1);
    if ((e = e.replace(/\\(["')])/g, "$1")).includes('"') && e.includes("'") && !e.includes(")")) return ("(").concat(e, ")");
    const r = e.split("'").length - 1, o = e.split('"').length - 1, u = r > o ? '"' : o > r || t.singleQuote ? "'" : '"';
    return (e = (e = e.replace(/\\/, "\\\\")).replace(new RegExp(("(").concat(u, ")"), "g"), "\\$1"), ("").concat(u).concat(e).concat(u));
  }
  var tS = {
    preprocess: ox,
    print: function (e, t, n) {
      const r = e.getValue();
      if ((function (e) {
        const t = zx(e, ["linkReference", "imageReference"]);
        return t && ("linkReference" !== t.type || "full" !== t.referenceType);
      })(e)) return mx(Lx(t.originalText.slice(r.position.start.offset, r.position.end.offset), t).map(n => "word" === n.type ? n.value : "" === n.value ? "" : Hx(e, n.value, t)));
      switch (r.type) {
        case "front-matter":
          return t.originalText.slice(r.position.start.offset, r.position.end.offset);
        case "root":
          return 0 === r.children.length ? "" : mx([wx(Gx(e, t, n)), Vx.has(Yx(r).type) ? "" : Cx]);
        case "paragraph":
          return Xx(e, t, n, {
            postprocessor: Ax
          });
        case "sentence":
          return Xx(e, t, n);
        case "word":
          {
            let t = r.value.replace(/\*/g, "\\$&").replace(new RegExp([("(^|").concat(Mx, ")(_+)"), ("(_+)(").concat(Mx, "|$)")].join("|"), "g"), (e, t, n, r, o) => (n ? ("").concat(t).concat(n) : ("").concat(r).concat(o)).replace(/_/g, "\\_"));
            const n = (e, t, n) => "sentence" === e.type && 0 === n, o = (e, t, n) => Rx(e.children[n - 1]);
            return (t !== r.value && (e.match(void 0, n, o) || e.match(void 0, n, (e, t, n) => "emphasis" === e.type && 0 === n, o)) && (t = t.replace(/^(\\?[*_])+/, e => e.replace(/\\/g, ""))), t);
          }
        case "whitespace":
          {
            const n = e.getParentNode(), o = n.children.indexOf(r), u = n.children[o + 1], i = u && (/^>|^([*+-]|#{1,6}|\d+[).])$/).test(u.value) ? "never" : t.proseWrap;
            return Hx(e, r.value, {
              proseWrap: i
            });
          }
        case "emphasis":
          {
            let o;
            if (Rx(r.children[0])) o = t.originalText[r.position.start.offset]; else {
              const t = e.getParentNode(), n = t.children.indexOf(r), u = t.children[n - 1], i = t.children[n + 1];
              o = u && "sentence" === u.type && u.children.length > 0 && "word" === lx(u.children).type && !lx(u.children).hasTrailingPunctuation || i && "sentence" === i.type && i.children.length > 0 && "word" === i.children[0].type && !i.children[0].hasLeadingPunctuation || zx(e, "emphasis") ? "*" : "_";
            }
            return mx([o, Xx(e, t, n), o]);
          }
        case "strong":
          return mx(["**", Xx(e, t, n), "**"]);
        case "delete":
          return mx(["~~", Xx(e, t, n), "~~"]);
        case "inlineCode":
          {
            const e = px(r.value, "`"), t = ("`").repeat(e || 1), n = e && !(/^\s/).test(r.value) ? " " : "";
            return mx([t, n, r.value, n, t]);
          }
        case "wikiLink":
          {
            let e = "";
            return (e = "preserve" === t.proseWrap ? r.value : r.value.replace(/[\t\n]+/g, " "), mx(["[[", e, "]]"]));
          }
        case "link":
          switch (t.originalText[r.position.start.offset]) {
            case "<":
              {
                const e = "mailto:", n = r.url.startsWith(e) && t.originalText.slice(r.position.start.offset + 1, r.position.start.offset + 1 + e.length) !== e ? r.url.slice(e.length) : r.url;
                return mx(["<", n, ">"]);
              }
            case "[":
              return mx(["[", Xx(e, t, n), "](", Zx(r.url, ")"), eS(r.title, t), ")"]);
            default:
              return t.originalText.slice(r.position.start.offset, r.position.end.offset);
          }
        case "image":
          return mx(["![", r.alt || "", "](", Zx(r.url, ")"), eS(r.title, t), ")"]);
        case "blockquote":
          return mx(["> ", Fx("> ", Xx(e, t, n))]);
        case "heading":
          return mx([("#").repeat(r.depth) + " ", Xx(e, t, n)]);
        case "code":
          {
            if (r.isIndented) {
              const e = (" ").repeat(4);
              return Fx(e, mx([e, mx(Bx(r.value, Cx))]));
            }
            const e = t.__inJsTemplate ? "~" : "`", n = e.repeat(Math.max(3, dx(r.value, e) + 1));
            return mx([n, r.lang || "", r.meta ? " " + r.meta : "", Cx, mx(Bx(Ox(r, t.originalText), Cx)), Cx, n]);
          }
        case "html":
          {
            const t = e.getParentNode(), n = "root" === t.type && lx(t.children) === r ? r.value.trimEnd() : r.value, o = (/^<!--[\S\s]*-->$/).test(n);
            return mx(Bx(n, o ? Cx : Ex(yx)));
          }
        case "list":
          {
            const o = Ux(r, e.getParentNode()), u = Ix(r, t);
            return Xx(e, t, n, {
              processor: (e, i) => {
                const a = (function () {
                  const e = r.ordered ? (0 === i ? r.start : u ? 1 : r.start + i) + (o % 2 == 0 ? ". " : ") ") : o % 2 == 0 ? "- " : "* ";
                  return r.isAligned || r.hasIndentedCodeblock ? (function (e, t) {
                    const n = r();
                    return e + (" ").repeat(n >= 4 ? 0 : n);
                    function r() {
                      const n = e.length % t.tabWidth;
                      return 0 === n ? 0 : t.tabWidth - n;
                    }
                  })(e, t) : e;
                })(), s = e.getValue();
                return 2 === s.children.length && "html" === s.children[1].type && s.children[0].position.start.column !== s.children[1].position.start.column ? mx([a, Wx(e, t, n, a)]) : mx([a, Fx((" ").repeat(a.length), Wx(e, t, n, a))]);
              }
            });
          }
        case "thematicBreak":
          {
            const t = Jx(e, "list");
            if (-1 === t) return "---";
            return Ux(e.getParentNode(t), e.getParentNode(t + 1)) % 2 == 0 ? "***" : "---";
          }
        case "linkReference":
          return mx(["[", Xx(e, t, n), "]", "full" === r.referenceType ? mx(["[", r.identifier, "]"]) : "collapsed" === r.referenceType ? "[]" : ""]);
        case "imageReference":
          switch (r.referenceType) {
            case "full":
              return mx(["![", r.alt || "", "][", r.identifier, "]"]);
            default:
              return mx(["![", r.alt, "]", "collapsed" === r.referenceType ? "[]" : ""]);
          }
        case "definition":
          {
            const e = "always" === t.proseWrap ? Dx : " ";
            return Sx(mx([mx(["[", r.identifier, "]:"]), xx(mx([e, Zx(r.url), null === r.title ? "" : mx([e, eS(r.title, t, !1)])]))]));
          }
        case "footnote":
          return mx(["[^", Xx(e, t, n), "]"]);
        case "footnoteReference":
          return mx(["[^", r.identifier, "]"]);
        case "footnoteDefinition":
          {
            const o = e.getParentNode().children[e.getName() + 1], u = 1 === r.children.length && "paragraph" === r.children[0].type && ("never" === t.proseWrap || "preserve" === t.proseWrap && r.children[0].position.start.line === r.children[0].position.end.line);
            return mx(["[^", r.identifier, "]: ", u ? Xx(e, t, n) : Sx(mx([Fx((" ").repeat(4), Xx(e, t, n, {
              processor: (e, t) => 0 === t ? Sx(mx([bx, e.call(n)])) : e.call(n)
            })), o && "footnoteDefinition" === o.type ? bx : ""]))]);
          }
        case "table":
          return (function (e, t, n) {
            const r = Cx.parts[0], o = e.getValue(), u = [], i = e.map(e => e.map((e, r) => {
              const o = Tx(e.call(n), t).formatted, i = fx(o);
              return (u[r] = Math.max(u[r] || 3, i), {
                text: o,
                width: i
              });
            }, "children"), "children"), a = c(!1);
            if ("never" !== t.proseWrap) return mx([hx, a]);
            const s = c(!0);
            return mx([hx, Sx(vx(s, a))]);
            function c(e) {
              const t = [p(i[0], e), l(e)];
              return (i.length > 1 && t.push(gx(r, i.slice(1).map(t => p(t, e)))), gx(r, t));
            }
            function l(e) {
              const t = u.map((t, n) => {
                const r = o.align[n], u = "center" === r || "left" === r ? ":" : "-", i = "center" === r || "right" === r ? ":" : "-", a = e ? "-" : ("-").repeat(t - 2);
                return ("").concat(u).concat(a).concat(i);
              });
              return ("| ").concat(t.join(" | "), " |");
            }
            function p(e, t) {
              const n = e.map(({text: e, width: n}, r) => {
                if (t) return e;
                const i = u[r] - n, a = o.align[r];
                let s = 0;
                "right" === a ? s = i : "center" === a && (s = Math.floor(i / 2));
                const c = i - s;
                return ("").concat((" ").repeat(s)).concat(e).concat((" ").repeat(c));
              });
              return ("| ").concat(n.join(" | "), " |");
            }
          })(e, t, n);
        case "tableCell":
          return Xx(e, t, n);
        case "break":
          return (/\s/).test(t.originalText[r.position.start.offset]) ? mx(["  ", Ex(yx)]) : mx(["\\", Cx]);
        case "liquidNode":
          return mx(Bx(r.value, Cx));
        case "importExport":
          return mx([r.value, Cx]);
        case "jsx":
          return r.value;
        case "math":
          return mx(["$$", Cx, r.value ? mx([mx(Bx(r.value, Cx)), Cx]) : "", "$$"]);
        case "inlineMath":
          return t.originalText.slice(kx(r), Px(r));
        case "tableRow":
        case "listItem":
        default:
          throw new Error(("Unknown markdown type ").concat(JSON.stringify(r.type)));
      }
    },
    embed: GF,
    massageAstNode: cx,
    hasPrettierIgnore: function (e) {
      const t = +e.getName();
      return 0 !== t && "next" === Kx(e.getParentNode().children[t - 1]);
    },
    insertPragma: Nx
  }, nS = {
    proseWrap: RC.proseWrap,
    singleQuote: RC.singleQuote
  }, rS = {
    name: "Markdown",
    type: "prose",
    color: "#083fa1",
    aliases: ["pandoc"],
    aceMode: "markdown",
    codemirrorMode: "gfm",
    codemirrorMimeType: "text/x-gfm",
    wrap: !0,
    extensions: [".md", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".workbook"],
    filenames: ["contents.lr"],
    tmScope: "source.gfm",
    languageId: 222
  };
  var oS = {
    languages: [ks(rS, e => ({
      since: "1.8.0",
      parsers: ["markdown"],
      vscodeLanguageIds: ["markdown"],
      filenames: e.filenames.concat(["README"]),
      extensions: e.extensions.filter(e => ".mdx" !== e)
    })), ks(rS, () => ({
      name: "MDX",
      since: "1.15.0",
      parsers: ["mdx"],
      vscodeLanguageIds: ["mdx"],
      filenames: [],
      extensions: [".mdx"]
    }))],
    options: nS,
    printers: {
      mdast: tS
    },
    parsers: {
      get remark() {
        return ({}).parsers.remark;
      },
      get markdown() {
        return ({}).parsers.remark;
      },
      get mdx() {
        return ({}).parsers.mdx;
      }
    }
  };
  const {isFrontMatterNode: uS} = Lt, iS = new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan"]);
  function aS(e, t) {
    return "text" === e.type || "comment" === e.type || uS(e) || "yaml" === e.type || "toml" === e.type ? null : ("attribute" === e.type && delete t.value, void ("docType" === e.type && delete t.value));
  }
  aS.ignoredProperties = iS;
  var sS = aS, cS = {
    "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"],
    a: ["accesskey", "charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "tabindex", "target", "type"],
    abbr: ["title"],
    applet: ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"],
    area: ["accesskey", "alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "tabindex", "target", "type"],
    audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
    base: ["href", "target"],
    basefont: ["color", "face", "size"],
    bdo: ["dir"],
    blockquote: ["cite"],
    body: ["alink", "background", "bgcolor", "link", "text", "vlink"],
    br: ["clear"],
    button: ["accesskey", "autofocus", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "tabindex", "type", "value"],
    canvas: ["height", "width"],
    caption: ["align"],
    col: ["align", "char", "charoff", "span", "valign", "width"],
    colgroup: ["align", "char", "charoff", "span", "valign", "width"],
    data: ["value"],
    del: ["cite", "datetime"],
    details: ["open"],
    dfn: ["title"],
    dialog: ["open"],
    dir: ["compact"],
    div: ["align"],
    dl: ["compact"],
    embed: ["height", "src", "type", "width"],
    fieldset: ["disabled", "form", "name"],
    font: ["color", "face", "size"],
    form: ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"],
    frame: ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"],
    frameset: ["cols", "rows"],
    h1: ["align"],
    h2: ["align"],
    h3: ["align"],
    h4: ["align"],
    h5: ["align"],
    h6: ["align"],
    head: ["profile"],
    hr: ["align", "noshade", "size", "width"],
    html: ["manifest", "version"],
    iframe: ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"],
    img: ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"],
    input: ["accept", "accesskey", "align", "alt", "autocomplete", "autofocus", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "tabindex", "title", "type", "usemap", "value", "width"],
    ins: ["cite", "datetime"],
    isindex: ["prompt"],
    label: ["accesskey", "for", "form"],
    legend: ["accesskey", "align"],
    li: ["type", "value"],
    link: ["as", "charset", "color", "crossorigin", "disabled", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "nonce", "referrerpolicy", "rel", "rev", "sizes", "target", "title", "type"],
    map: ["name"],
    menu: ["compact"],
    meta: ["charset", "content", "http-equiv", "name", "scheme"],
    meter: ["high", "low", "max", "min", "optimum", "value"],
    object: ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "tabindex", "type", "typemustmatch", "usemap", "vspace", "width"],
    ol: ["compact", "reversed", "start", "type"],
    optgroup: ["disabled", "label"],
    option: ["disabled", "label", "selected", "value"],
    output: ["for", "form", "name"],
    p: ["align"],
    param: ["name", "type", "value", "valuetype"],
    pre: ["width"],
    progress: ["max", "value"],
    q: ["cite"],
    script: ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "nonce", "referrerpolicy", "src", "type"],
    select: ["autocomplete", "autofocus", "disabled", "form", "multiple", "name", "required", "size", "tabindex"],
    slot: ["name"],
    source: ["media", "sizes", "src", "srcset", "type"],
    style: ["media", "nonce", "title", "type"],
    table: ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"],
    tbody: ["align", "char", "charoff", "valign"],
    td: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"],
    textarea: ["accesskey", "autocomplete", "autofocus", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "tabindex", "wrap"],
    tfoot: ["align", "char", "charoff", "valign"],
    th: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"],
    thead: ["align", "char", "charoff", "valign"],
    time: ["datetime"],
    tr: ["align", "bgcolor", "char", "charoff", "valign"],
    track: ["default", "kind", "label", "src", "srclang"],
    ul: ["compact", "type"],
    video: ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"]
  };
  const {inferParserByLanguage: lS, isFrontMatterNode: pS} = Lt, {CSS_DISPLAY_TAGS: dS, CSS_DISPLAY_DEFAULT: fS, CSS_WHITE_SPACE_TAGS: hS, CSS_WHITE_SPACE_DEFAULT: mS} = {
    CSS_DISPLAY_TAGS: {
      area: "none",
      base: "none",
      basefont: "none",
      datalist: "none",
      head: "none",
      link: "none",
      meta: "none",
      noembed: "none",
      noframes: "none",
      param: "block",
      rp: "none",
      script: "block",
      source: "block",
      style: "none",
      template: "inline",
      track: "block",
      title: "none",
      html: "block",
      body: "block",
      address: "block",
      blockquote: "block",
      center: "block",
      div: "block",
      figure: "block",
      figcaption: "block",
      footer: "block",
      form: "block",
      header: "block",
      hr: "block",
      legend: "block",
      listing: "block",
      main: "block",
      p: "block",
      plaintext: "block",
      pre: "block",
      xmp: "block",
      slot: "contents",
      ruby: "ruby",
      rt: "ruby-text",
      article: "block",
      aside: "block",
      h1: "block",
      h2: "block",
      h3: "block",
      h4: "block",
      h5: "block",
      h6: "block",
      hgroup: "block",
      nav: "block",
      section: "block",
      dir: "block",
      dd: "block",
      dl: "block",
      dt: "block",
      ol: "block",
      ul: "block",
      li: "list-item",
      table: "table",
      caption: "table-caption",
      colgroup: "table-column-group",
      col: "table-column",
      thead: "table-header-group",
      tbody: "table-row-group",
      tfoot: "table-footer-group",
      tr: "table-row",
      td: "table-cell",
      th: "table-cell",
      fieldset: "block",
      button: "inline-block",
      details: "block",
      summary: "block",
      dialog: "block",
      meter: "inline-block",
      progress: "inline-block",
      object: "inline-block",
      video: "inline-block",
      audio: "inline-block",
      select: "inline-block",
      option: "block",
      optgroup: "block"
    },
    CSS_DISPLAY_DEFAULT: "inline",
    CSS_WHITE_SPACE_TAGS: {
      listing: "pre",
      plaintext: "pre",
      pre: "pre",
      xmp: "pre",
      nobr: "nowrap",
      table: "initial",
      textarea: "pre-wrap"
    },
    CSS_WHITE_SPACE_DEFAULT: "normal"
  }, gS = bS(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]), DS = (function (e, t) {
    const n = Object.create(null);
    for (const r of Object.keys(e)) n[r] = t(e[r], r);
    return n;
  })(cS, bS), yS = new Set(["\t", "\n", "\f", "\r", " "]), ES = e => e.replace(/[\t\n\f\r ]+$/, ""), CS = e => e.match(/^[\t\n\f\r ]*/)[0];
  function bS(e) {
    const t = Object.create(null);
    for (const n of e) t[n] = !0;
    return t;
  }
  function vS(e, t) {
    return !("ieConditionalComment" !== e.type || !e.lastChild || e.lastChild.isSelfClosing || e.lastChild.endSourceSpan) || ("ieConditionalComment" === e.type && !e.complete || (!(!IS(e) || !e.children.some(e => "text" !== e.type && "interpolation" !== e.type)) || !(!VS(e, t) || FS(e) || "interpolation" === e.type)));
  }
  function AS(e) {
    if ("attribute" === e.type) return !1;
    if (!e.parent) return !1;
    if ("number" != typeof e.index || 0 === e.index) return !1;
    return (function (e) {
      return "comment" === e.type && "prettier-ignore" === e.value.trim();
    })(e.parent.children[e.index - 1]);
  }
  function FS(e) {
    return "element" === e.type && ("script" === e.fullName || "style" === e.fullName || "svg:style" === e.fullName || LS(e) && ("script" === e.name || "style" === e.name));
  }
  function xS(e) {
    return MS(e).startsWith("pre");
  }
  function SS(e) {
    return "element" === e.type && 0 !== e.children.length && (["html", "head", "ul", "ol", "select"].includes(e.name) || e.cssDisplay.startsWith("table") && "table-cell" !== e.cssDisplay);
  }
  function wS(e) {
    return kS(e) || "element" === e.type && "br" === e.fullName || TS(e);
  }
  function TS(e) {
    return BS(e) && NS(e);
  }
  function BS(e) {
    return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : "root" === e.parent.type || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line);
  }
  function NS(e) {
    return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : "root" === e.parent.type || e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line);
  }
  function kS(e) {
    switch (e.type) {
      case "ieConditionalComment":
      case "comment":
      case "directive":
        return !0;
      case "element":
        return ["script", "select"].includes(e.name);
    }
    return !1;
  }
  function PS(e) {
    const {type: t, lang: n} = e.attrMap;
    return "module" === t || "text/javascript" === t || "text/babel" === t || "application/javascript" === t || "jsx" === n ? "babel" : "application/x-typescript" === t || "ts" === n || "tsx" === n ? "typescript" : "text/markdown" === t ? "markdown" : "text/html" === t ? "html" : t && (t.endsWith("json") || t.endsWith("importmap")) ? "json" : "text/x-handlebars-template" === t ? "glimmer" : void 0;
  }
  function OS(e) {
    return "block" === e || "list-item" === e || e.startsWith("table");
  }
  function IS(e) {
    return MS(e).startsWith("pre");
  }
  function LS(e) {
    return "element" === e.type && !e.hasExplicitNamespace && !["html", "svg"].includes(e.namespace);
  }
  function MS(e) {
    return "element" === e.type && (!e.namespace || LS(e)) && hS[e.name] || mS;
  }
  const jS = new Set(["template", "style", "script"]);
  function _S(e, t) {
    return RS(e, t) && !jS.has(e.fullName);
  }
  function RS(e, t) {
    return "vue" === t.parser && "element" === e.type && "root" === e.parent.type && "html" !== e.fullName.toLowerCase();
  }
  function VS(e, t) {
    return RS(e, t) && (_S(e, t) || e.attrMap.lang && "html" !== e.attrMap.lang);
  }
  var $S = {
    HTML_ELEMENT_ATTRIBUTES: DS,
    HTML_TAGS: gS,
    htmlTrim: e => (e => e.replace(/^[\t\n\f\r ]+/, ""))(ES(e)),
    htmlTrimPreserveIndentation: e => (e => e.replace(/^[\t\f\r ]*?\n/g, ""))(ES(e)),
    splitByHtmlWhitespace: e => e.split(/[\t\n\f\r ]+/),
    hasHtmlWhitespace: e => (/[\t\n\f\r ]/).test(e),
    getLeadingAndTrailingHtmlWhitespace: e => {
      const [, t, n, r] = e.match(/^([\t\n\f\r ]*)([\S\s]*?)([\t\n\f\r ]*)$/);
      return {
        leadingWhitespace: t,
        trailingWhitespace: r,
        text: n
      };
    },
    canHaveInterpolation: function (e) {
      return e.children && !FS(e);
    },
    countChars: function (e, t) {
      let n = 0;
      for (let r = 0; r < e.length; r++) e[r] === t && n++;
      return n;
    },
    countParents: function (e, t) {
      let n = 0;
      for (let r = e.stack.length - 1; r >= 0; r--) {
        const o = e.stack[r];
        o && "object" == typeof o && !Array.isArray(o) && t(o) && n++;
      }
      return n;
    },
    dedentString: function (e, t = (function (e) {
      let t = 1 / 0;
      for (const n of e.split("\n")) {
        if (0 === n.length) continue;
        if (!yS.has(n[0])) return 0;
        const e = CS(n).length;
        n.length !== e && e < t && (t = e);
      }
      return t === 1 / 0 ? 0 : t;
    })(e)) {
      return 0 === t ? e : e.split("\n").map(e => e.slice(t)).join("\n");
    },
    forceBreakChildren: SS,
    forceBreakContent: function (e) {
      return SS(e) || "element" === e.type && 0 !== e.children.length && (["body", "script", "style"].includes(e.name) || e.children.some(e => (function (e) {
        return e.children && e.children.some(e => "text" !== e.type);
      })(e))) || e.firstChild && e.firstChild === e.lastChild && "text" !== e.firstChild.type && BS(e.firstChild) && (!e.lastChild.isTrailingSpaceSensitive || NS(e.lastChild));
    },
    forceNextEmptyLine: function (e) {
      return pS(e) || e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line;
    },
    getLastDescendant: function e(t) {
      return t.lastChild ? e(t.lastChild) : t;
    },
    getNodeCssStyleDisplay: function (e, t) {
      if (e.prev && "comment" === e.prev.type) {
        const t = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
        if (t) return t[1];
      }
      let n = !1;
      if ("element" === e.type && "svg" === e.namespace) {
        if (!(function (e, t) {
          let n = e;
          for (; n; ) {
            if (t(n)) return !0;
            n = n.parent;
          }
          return !1;
        })(e, e => "svg:foreignObject" === e.fullName)) return "svg" === e.name ? "inline-block" : "block";
        n = !0;
      }
      switch (t.htmlWhitespaceSensitivity) {
        case "strict":
          return "inline";
        case "ignore":
          return "block";
        default:
          return "vue" === t.parser && e.parent && "root" === e.parent.type ? "block" : "element" === e.type && (!e.namespace || n || LS(e)) && dS[e.name] || fS;
      }
    },
    getNodeCssStyleWhiteSpace: MS,
    getPrettierIgnoreAttributeCommentData: function (e) {
      const t = e.trim().match(/^prettier-ignore-attribute(?:\s+([^]+))?$/);
      return !!t && (!t[1] || t[1].split(/\s+/));
    },
    hasPrettierIgnore: AS,
    inferScriptParser: function (e, t) {
      return "script" !== e.name || e.attrMap.src ? "style" === e.name ? (function (e) {
        const {lang: t} = e.attrMap;
        return t && "postcss" !== t && "css" !== t ? "scss" === t ? "scss" : "less" === t ? "less" : void 0 : "css";
      })(e) : t && VS(e, t) ? PS(e) || !(("src" in e.attrMap)) && lS(e.attrMap.lang, t) : void 0 : e.attrMap.lang || e.attrMap.type ? PS(e) : "babel";
    },
    isVueCustomBlock: _S,
    isVueNonHtmlBlock: VS,
    isVueSlotAttribute: function (e) {
      const t = e.fullName;
      return "#" === t.charAt(0) || "slot-scope" === t || "v-slot" === t || t.startsWith("v-slot:");
    },
    isVueSfcBindingsAttribute: function (e, t) {
      const n = e.parent;
      if (!RS(n, t)) return !1;
      const r = n.fullName, o = e.fullName;
      return "script" === r && "setup" === o || "style" === r && "vars" === o;
    },
    isDanglingSpaceSensitiveNode: function (e) {
      return !(t = e.cssDisplay, OS(t) || "inline-block" === t || FS(e));
      var t;
    },
    isIndentationSensitiveNode: xS,
    isLeadingSpaceSensitiveNode: function (e, t) {
      const n = (function () {
        if (pS(e)) return !1;
        if (("text" === e.type || "interpolation" === e.type) && e.prev && ("text" === e.prev.type || "interpolation" === e.prev.type)) return !0;
        if (!e.parent || "none" === e.parent.cssDisplay) return !1;
        if (IS(e.parent)) return !0;
        if (!e.prev && ("root" === e.parent.type || IS(e) && e.parent || FS(e.parent) || _S(e.parent, t) || (n = e.parent.cssDisplay, OS(n) || "inline-block" === n))) return !1;
        var n;
        if (e.prev && !(function (e) {
          return !OS(e);
        })(e.prev.cssDisplay)) return !1;
        return !0;
      })();
      return n && !e.prev && e.parent && e.parent.tagDefinition && e.parent.tagDefinition.ignoreFirstLf ? "interpolation" === e.type : n;
    },
    isPreLikeNode: IS,
    isScriptLikeTag: FS,
    isTextLikeNode: function (e) {
      return "text" === e.type || "comment" === e.type;
    },
    isTrailingSpaceSensitiveNode: function (e, t) {
      return !pS(e) && (!("text" !== e.type && "interpolation" !== e.type || !e.next || "text" !== e.next.type && "interpolation" !== e.next.type) || !(!e.parent || "none" === e.parent.cssDisplay) && (!!IS(e.parent) || !(!e.next && ("root" === e.parent.type || IS(e) && e.parent || FS(e.parent) || _S(e.parent, t) || (n = e.parent.cssDisplay, OS(n) || "inline-block" === n))) && !(e.next && !(function (e) {
        return !OS(e);
      })(e.next.cssDisplay))));
      var n;
    },
    isWhitespaceSensitiveNode: function (e) {
      return FS(e) || "interpolation" === e.type || xS(e);
    },
    isUnknownNamespace: LS,
    preferHardlineAsLeadingSpaces: function (e) {
      return kS(e) || e.prev && wS(e.prev) || TS(e);
    },
    preferHardlineAsTrailingSpaces: wS,
    shouldNotPrintClosingTag: function (e, t) {
      return !e.isSelfClosing && !e.endSourceSpan && (AS(e) || vS(e.parent, t));
    },
    shouldPreserveContent: vS,
    unescapeQuoteEntities: function (e) {
      return e.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
    }
  }, qS = je(function (e, t) {
    function n(e) {
      return t.$0 <= e && e <= t.$9;
    }
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */
    (Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.$EOF = 0, t.$BSPACE = 8, t.$TAB = 9, t.$LF = 10, t.$VTAB = 11, t.$FF = 12, t.$CR = 13, t.$SPACE = 32, t.$BANG = 33, t.$DQ = 34, t.$HASH = 35, t.$$ = 36, t.$PERCENT = 37, t.$AMPERSAND = 38, t.$SQ = 39, t.$LPAREN = 40, t.$RPAREN = 41, t.$STAR = 42, t.$PLUS = 43, t.$COMMA = 44, t.$MINUS = 45, t.$PERIOD = 46, t.$SLASH = 47, t.$COLON = 58, t.$SEMICOLON = 59, t.$LT = 60, t.$EQ = 61, t.$GT = 62, t.$QUESTION = 63, t.$0 = 48, t.$7 = 55, t.$9 = 57, t.$A = 65, t.$E = 69, t.$F = 70, t.$X = 88, t.$Z = 90, t.$LBRACKET = 91, t.$BACKSLASH = 92, t.$RBRACKET = 93, t.$CARET = 94, t.$_ = 95, t.$a = 97, t.$b = 98, t.$e = 101, t.$f = 102, t.$n = 110, t.$r = 114, t.$t = 116, t.$u = 117, t.$v = 118, t.$x = 120, t.$z = 122, t.$LBRACE = 123, t.$BAR = 124, t.$RBRACE = 125, t.$NBSP = 160, t.$PIPE = 124, t.$TILDA = 126, t.$AT = 64, t.$BT = 96, t.isWhitespace = function (e) {
      return e >= t.$TAB && e <= t.$SPACE || e == t.$NBSP;
    }, t.isDigit = n, t.isAsciiLetter = function (e) {
      return e >= t.$a && e <= t.$z || e >= t.$A && e <= t.$Z;
    }, t.isAsciiHexDigit = function (e) {
      return e >= t.$a && e <= t.$f || e >= t.$A && e <= t.$F || n(e);
    }, t.isNewLine = function (e) {
      return e === t.$LF || e === t.$CR;
    }, t.isOctalDigit = function (e) {
      return t.$0 <= e && e <= t.$7;
    });
  }), WS = je(function (e, t) {
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    class n {
      constructor(e, t, n) {
        (this.filePath = e, this.name = t, this.members = n);
      }
      assertNoMembers() {
        if (this.members.length) throw new Error(("Illegal state: symbol without members expected, but got ").concat(JSON.stringify(this), "."));
      }
    }
    t.StaticSymbol = n;
    t.StaticSymbolCache = class {
      constructor() {
        this.cache = new Map();
      }
      get(e, t, r) {
        const o = (r = r || []).length ? (".").concat(r.join(".")) : "", u = ('"').concat(e, '".').concat(t).concat(o);
        let i = this.cache.get(u);
        return (i || (i = new n(e, t, r), this.cache.set(u, i)), i);
      }
    };
  }), US = je(function (e, t) {
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = /-+([a-z0-9])/g;
    function r(e, t, n) {
      const r = e.indexOf(t);
      return -1 == r ? n : [e.slice(0, r).trim(), e.slice(r + 1).trim()];
    }
    function o(e, t, n) {
      return Array.isArray(e) ? t.visitArray(e, n) : "object" == typeof (r = e) && null !== r && Object.getPrototypeOf(r) === a ? t.visitStringMap(e, n) : null == e || "string" == typeof e || "number" == typeof e || "boolean" == typeof e ? t.visitPrimitive(e, n) : t.visitOther(e, n);
      var r;
    }
    (t.dashCaseToCamelCase = function (e) {
      return e.replace(n, (...e) => e[1].toUpperCase());
    }, t.splitAtColon = function (e, t) {
      return r(e, ":", t);
    }, t.splitAtPeriod = function (e, t) {
      return r(e, ".", t);
    }, t.visitValue = o, t.isDefined = function (e) {
      return null != e;
    }, t.noUndefined = function (e) {
      return void 0 === e ? null : e;
    });
    (t.ValueTransformer = class {
      visitArray(e, t) {
        return e.map(e => o(e, this, t));
      }
      visitStringMap(e, t) {
        const n = {};
        return (Object.keys(e).forEach(r => {
          n[r] = o(e[r], this, t);
        }), n);
      }
      visitPrimitive(e, t) {
        return e;
      }
      visitOther(e, t) {
        return e;
      }
    }, t.SyncAsync = {
      assertSync: e => {
        if (s(e)) throw new Error("Illegal state: value cannot be a promise");
        return e;
      },
      then: (e, t) => s(e) ? e.then(t) : t(e),
      all: e => e.some(s) ? Promise.all(e) : e
    }, t.error = function (e) {
      throw new Error(("Internal Error: ").concat(e));
    }, t.syntaxError = function (e, t) {
      const n = Error(e);
      return (n[u] = !0, t && (n[i] = t), n);
    });
    const u = "ngSyntaxError", i = "ngParseErrors";
    (t.isSyntaxError = function (e) {
      return e[u];
    }, t.getParseErrors = function (e) {
      return e[i] || [];
    }, t.escapeRegExp = function (e) {
      return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    });
    const a = Object.getPrototypeOf({});
    function s(e) {
      return !!e && "function" == typeof e.then;
    }
    (t.utf8Encode = function (e) {
      let t = "";
      for (let n = 0; n < e.length; n++) {
        let r = e.charCodeAt(n);
        if (r >= 55296 && r <= 56319 && e.length > n + 1) {
          const t = e.charCodeAt(n + 1);
          t >= 56320 && t <= 57343 && (n++, r = (r - 55296 << 10) + t - 56320 + 65536);
        }
        r <= 127 ? t += String.fromCharCode(r) : r <= 2047 ? t += String.fromCharCode(r >> 6 & 31 | 192, 63 & r | 128) : r <= 65535 ? t += String.fromCharCode(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128) : r <= 2097151 && (t += String.fromCharCode(r >> 18 & 7 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128));
      }
      return t;
    }, t.stringify = function e(t) {
      if ("string" == typeof t) return t;
      if (t instanceof Array) return "[" + t.map(e).join(", ") + "]";
      if (null == t) return "" + t;
      if (t.overriddenName) return ("").concat(t.overriddenName);
      if (t.name) return ("").concat(t.name);
      if (!t.toString) return "object";
      const n = t.toString();
      if (null == n) return "" + n;
      const r = n.indexOf("\n");
      return -1 === r ? n : n.substring(0, r);
    }, t.resolveForwardRef = function (e) {
      return "function" == typeof e && e.hasOwnProperty("__forward_ref__") ? e() : e;
    }, t.isPromise = s);
    t.Version = class {
      constructor(e) {
        this.full = e;
        const t = e.split(".");
        (this.major = t[0], this.minor = t[1], this.patch = t.slice(2).join("."));
      }
    };
    const c = "undefined" != typeof window && window, l = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self, p = void 0 !== Me && Me || c || l;
    t.global = p;
  }), JS = je(function (e, t) {
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
    function r(e) {
      return e.replace(/\W/g, "_");
    }
    t.sanitizeIdentifier = r;
    let o = 0;
    function u(e) {
      if (!e || !e.reference) return null;
      const t = e.reference;
      if (t instanceof WS.StaticSymbol) return t.name;
      if (t.__anonymousType) return t.__anonymousType;
      let n = US.stringify(t);
      return (n.indexOf("(") >= 0 ? (n = ("anonymous_").concat(o++), t.__anonymousType = n) : n = r(n), n);
    }
    var i;
    (t.identifierName = u, t.identifierModuleUrl = function (e) {
      const t = e.reference;
      return t instanceof WS.StaticSymbol ? t.filePath : ("./").concat(US.stringify(t));
    }, t.viewClassName = function (e, t) {
      return ("View_").concat(u({
        reference: e
      }), "_").concat(t);
    }, t.rendererTypeName = function (e) {
      return ("RenderType_").concat(u({
        reference: e
      }));
    }, t.hostViewClassName = function (e) {
      return ("HostView_").concat(u({
        reference: e
      }));
    }, t.componentFactoryName = function (e) {
      return ("").concat(u({
        reference: e
      }), "NgFactory");
    }, (function (e) {
      (e[e.Pipe = 0] = "Pipe", e[e.Directive = 1] = "Directive", e[e.NgModule = 2] = "NgModule", e[e.Injectable = 3] = "Injectable");
    })(i = t.CompileSummaryKind || (t.CompileSummaryKind = {})), t.tokenName = function (e) {
      return null != e.value ? r(e.value) : u(e.identifier);
    }, t.tokenReference = function (e) {
      return null != e.identifier ? e.identifier.reference : e.value;
    });
    t.CompileStylesheetMetadata = class {
      constructor({moduleUrl: e, styles: t, styleUrls: n} = {}) {
        (this.moduleUrl = e || null, this.styles = s(t), this.styleUrls = s(n));
      }
    };
    t.CompileTemplateMetadata = class {
      constructor({encapsulation: e, template: t, templateUrl: n, htmlAst: r, styles: o, styleUrls: u, externalStylesheets: i, animations: a, ngContentSelectors: l, interpolation: p, isInline: d, preserveWhitespaces: f}) {
        if ((this.encapsulation = e, this.template = t, this.templateUrl = n, this.htmlAst = r, this.styles = s(o), this.styleUrls = s(u), this.externalStylesheets = s(i), this.animations = a ? c(a) : [], this.ngContentSelectors = l || [], p && 2 != p.length)) throw new Error("'interpolation' should have a start and an end symbol.");
        (this.interpolation = p, this.isInline = d, this.preserveWhitespaces = f);
      }
      toSummary() {
        return {
          ngContentSelectors: this.ngContentSelectors,
          encapsulation: this.encapsulation,
          styles: this.styles,
          animations: this.animations
        };
      }
    };
    class a {
      static create({isHost: e, type: t, isComponent: r, selector: o, exportAs: u, changeDetection: i, inputs: s, outputs: c, host: l, providers: p, viewProviders: d, queries: f, guards: h, viewQueries: m, entryComponents: g, template: D, componentViewType: y, rendererType: E, componentFactory: C}) {
        const b = {}, v = {}, A = {};
        null != l && Object.keys(l).forEach(e => {
          const t = l[e], r = e.match(n);
          null === r ? A[e] = t : null != r[1] ? v[r[1]] = t : null != r[2] && (b[r[2]] = t);
        });
        const F = {};
        null != s && s.forEach(e => {
          const t = US.splitAtColon(e, [e, e]);
          F[t[0]] = t[1];
        });
        const x = {};
        return (null != c && c.forEach(e => {
          const t = US.splitAtColon(e, [e, e]);
          x[t[0]] = t[1];
        }), new a({
          isHost: e,
          type: t,
          isComponent: !!r,
          selector: o,
          exportAs: u,
          changeDetection: i,
          inputs: F,
          outputs: x,
          hostListeners: b,
          hostProperties: v,
          hostAttributes: A,
          providers: p,
          viewProviders: d,
          queries: f,
          guards: h,
          viewQueries: m,
          entryComponents: g,
          template: D,
          componentViewType: y,
          rendererType: E,
          componentFactory: C
        }));
      }
      constructor({isHost: e, type: t, isComponent: n, selector: r, exportAs: o, changeDetection: u, inputs: i, outputs: a, hostListeners: c, hostProperties: l, hostAttributes: p, providers: d, viewProviders: f, queries: h, guards: m, viewQueries: g, entryComponents: D, template: y, componentViewType: E, rendererType: C, componentFactory: b}) {
        (this.isHost = !!e, this.type = t, this.isComponent = n, this.selector = r, this.exportAs = o, this.changeDetection = u, this.inputs = i, this.outputs = a, this.hostListeners = c, this.hostProperties = l, this.hostAttributes = p, this.providers = s(d), this.viewProviders = s(f), this.queries = s(h), this.guards = m, this.viewQueries = s(g), this.entryComponents = s(D), this.template = y, this.componentViewType = E, this.rendererType = C, this.componentFactory = b);
      }
      toSummary() {
        return {
          summaryKind: i.Directive,
          type: this.type,
          isComponent: this.isComponent,
          selector: this.selector,
          exportAs: this.exportAs,
          inputs: this.inputs,
          outputs: this.outputs,
          hostListeners: this.hostListeners,
          hostProperties: this.hostProperties,
          hostAttributes: this.hostAttributes,
          providers: this.providers,
          viewProviders: this.viewProviders,
          queries: this.queries,
          guards: this.guards,
          viewQueries: this.viewQueries,
          entryComponents: this.entryComponents,
          changeDetection: this.changeDetection,
          template: this.template && this.template.toSummary(),
          componentViewType: this.componentViewType,
          rendererType: this.rendererType,
          componentFactory: this.componentFactory
        };
      }
    }
    t.CompileDirectiveMetadata = a;
    t.CompilePipeMetadata = class {
      constructor({type: e, name: t, pure: n}) {
        (this.type = e, this.name = t, this.pure = !!n);
      }
      toSummary() {
        return {
          summaryKind: i.Pipe,
          type: this.type,
          name: this.name,
          pure: this.pure
        };
      }
    };
    t.CompileShallowModuleMetadata = class {};
    t.CompileNgModuleMetadata = class {
      constructor({type: e, providers: t, declaredDirectives: n, exportedDirectives: r, declaredPipes: o, exportedPipes: u, entryComponents: i, bootstrapComponents: a, importedModules: c, exportedModules: l, schemas: p, transitiveModule: d, id: f}) {
        (this.type = e || null, this.declaredDirectives = s(n), this.exportedDirectives = s(r), this.declaredPipes = s(o), this.exportedPipes = s(u), this.providers = s(t), this.entryComponents = s(i), this.bootstrapComponents = s(a), this.importedModules = s(c), this.exportedModules = s(l), this.schemas = s(p), this.id = f || null, this.transitiveModule = d || null);
      }
      toSummary() {
        const e = this.transitiveModule;
        return {
          summaryKind: i.NgModule,
          type: this.type,
          entryComponents: e.entryComponents,
          providers: e.providers,
          modules: e.modules,
          exportedDirectives: e.exportedDirectives,
          exportedPipes: e.exportedPipes
        };
      }
    };
    function s(e) {
      return e || [];
    }
    t.TransitiveCompileNgModuleMetadata = class {
      constructor() {
        (this.directivesSet = new Set(), this.directives = [], this.exportedDirectivesSet = new Set(), this.exportedDirectives = [], this.pipesSet = new Set(), this.pipes = [], this.exportedPipesSet = new Set(), this.exportedPipes = [], this.modulesSet = new Set(), this.modules = [], this.entryComponentsSet = new Set(), this.entryComponents = [], this.providers = []);
      }
      addProvider(e, t) {
        this.providers.push({
          provider: e,
          module: t
        });
      }
      addDirective(e) {
        this.directivesSet.has(e.reference) || (this.directivesSet.add(e.reference), this.directives.push(e));
      }
      addExportedDirective(e) {
        this.exportedDirectivesSet.has(e.reference) || (this.exportedDirectivesSet.add(e.reference), this.exportedDirectives.push(e));
      }
      addPipe(e) {
        this.pipesSet.has(e.reference) || (this.pipesSet.add(e.reference), this.pipes.push(e));
      }
      addExportedPipe(e) {
        this.exportedPipesSet.has(e.reference) || (this.exportedPipesSet.add(e.reference), this.exportedPipes.push(e));
      }
      addModule(e) {
        this.modulesSet.has(e.reference) || (this.modulesSet.add(e.reference), this.modules.push(e));
      }
      addEntryComponent(e) {
        this.entryComponentsSet.has(e.componentType) || (this.entryComponentsSet.add(e.componentType), this.entryComponents.push(e));
      }
    };
    function c(e) {
      return e.reduce((e, t) => {
        const n = Array.isArray(t) ? c(t) : t;
        return e.concat(n);
      }, []);
    }
    function l(e) {
      return e.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
    }
    (t.ProviderMeta = class {
      constructor(e, {useClass: t, useValue: n, useExisting: r, useFactory: o, deps: u, multi: i}) {
        (this.token = e, this.useClass = t || null, this.useValue = n, this.useExisting = r, this.useFactory = o || null, this.dependencies = u || null, this.multi = !!i);
      }
    }, t.flatten = c, t.templateSourceUrl = function (e, t, n) {
      let r;
      return (r = n.isInline ? t.type.reference instanceof WS.StaticSymbol ? ("").concat(t.type.reference.filePath, ".").concat(t.type.reference.name, ".html") : ("").concat(u(e), "/").concat(u(t.type), ".html") : n.templateUrl, t.type.reference instanceof WS.StaticSymbol ? r : l(r));
    }, t.sharedStylesheetJitUrl = function (e, t) {
      const n = e.moduleUrl.split(/\/\\/g), r = n[n.length - 1];
      return l(("css/").concat(t).concat(r, ".ngstyle.js"));
    }, t.ngModuleJitUrl = function (e) {
      return l(("").concat(u(e.type), "/module.ngfactory.js"));
    }, t.templateJitUrl = function (e, t) {
      return l(("").concat(u(e), "/").concat(u(t.type), ".ngfactory.js"));
    });
  }), zS = je(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */
    class n {
      constructor(e, t, n, r) {
        (this.file = e, this.offset = t, this.line = n, this.col = r);
      }
      toString() {
        return null != this.offset ? ("").concat(this.file.url, "@").concat(this.line, ":").concat(this.col) : this.file.url;
      }
      moveBy(e) {
        const t = this.file.content, r = t.length;
        let o = this.offset, u = this.line, i = this.col;
        for (; o > 0 && e < 0; ) {
          (o--, e++);
          if (t.charCodeAt(o) == qS.$LF) {
            u--;
            const e = t.substr(0, o - 1).lastIndexOf(String.fromCharCode(qS.$LF));
            i = e > 0 ? o - e : o;
          } else i--;
        }
        for (; o < r && e > 0; ) {
          const n = t.charCodeAt(o);
          (o++, e--, n == qS.$LF ? (u++, i = 0) : i++);
        }
        return new n(this.file, o, u, i);
      }
      getContext(e, t) {
        const n = this.file.content;
        let r = this.offset;
        if (null != r) {
          r > n.length - 1 && (r = n.length - 1);
          let o = r, u = 0, i = 0;
          for (; u < e && r > 0 && (r--, u++, "\n" != n[r] || ++i != t); ) ;
          for ((u = 0, i = 0); u < e && o < n.length - 1 && (o++, u++, "\n" != n[o] || ++i != t); ) ;
          return {
            before: n.substring(r, this.offset),
            after: n.substring(this.offset, o + 1)
          };
        }
        return null;
      }
    }
    t.ParseLocation = n;
    class r {
      constructor(e, t) {
        (this.content = e, this.url = t);
      }
    }
    t.ParseSourceFile = r;
    class o {
      constructor(e, t, n = null) {
        (this.start = e, this.end = t, this.details = n);
      }
      toString() {
        return this.start.file.content.substring(this.start.offset, this.end.offset);
      }
    }
    var u;
    (t.ParseSourceSpan = o, t.EMPTY_PARSE_LOCATION = new n(new r("", ""), 0, 0, 0), t.EMPTY_SOURCE_SPAN = new o(t.EMPTY_PARSE_LOCATION, t.EMPTY_PARSE_LOCATION), (function (e) {
      (e[e.WARNING = 0] = "WARNING", e[e.ERROR = 1] = "ERROR");
    })(u = t.ParseErrorLevel || (t.ParseErrorLevel = {})));
    (t.ParseError = class {
      constructor(e, t, n = u.ERROR) {
        (this.span = e, this.msg = t, this.level = n);
      }
      contextualMessage() {
        const e = this.span.start.getContext(100, 3);
        return e ? ("").concat(this.msg, ' ("').concat(e.before, "[").concat(u[this.level], " ->]").concat(e.after, '")') : this.msg;
      }
      toString() {
        const e = this.span.details ? (", ").concat(this.span.details) : "";
        return ("").concat(this.contextualMessage(), ": ").concat(this.span.start).concat(e);
      }
    }, t.typeSourceSpan = function (e, t) {
      const u = JS.identifierModuleUrl(t), i = null != u ? ("in ").concat(e, " ").concat(JS.identifierName(t), " in ").concat(u) : ("in ").concat(e, " ").concat(JS.identifierName(t)), a = new r("", i);
      return new o(new n(a, -1, -1, -1), new n(a, -1, -1, -1));
    }, t.r3JitTypeSourceSpan = function (e, t, u) {
      const i = ("in ").concat(e, " ").concat(t, " in ").concat(u), a = new r("", i);
      return new o(new n(a, -1, -1, -1), new n(a, -1, -1, -1));
    });
  });
  const {ParseSourceSpan: HS} = zS, {htmlTrim: GS, getLeadingAndTrailingHtmlWhitespace: XS, hasHtmlWhitespace: YS, canHaveInterpolation: KS, getNodeCssStyleDisplay: QS, isDanglingSpaceSensitiveNode: ZS, isIndentationSensitiveNode: ew, isLeadingSpaceSensitiveNode: tw, isTrailingSpaceSensitiveNode: nw, isWhitespaceSensitiveNode: rw} = $S, ow = [function (e) {
    return e.map(e => {
      if ("element" === e.type && e.tagDefinition.ignoreFirstLf && 0 !== e.children.length && "text" === e.children[0].type && "\n" === e.children[0].value[0]) {
        const [t, ...n] = e.children;
        return e.clone({
          children: 1 === t.value.length ? n : [t.clone({
            value: t.value.slice(1)
          }), ...n]
        });
      }
      return e;
    });
  }, function (e) {
    const t = e => "element" === e.type && e.prev && "ieConditionalStartComment" === e.prev.type && e.prev.sourceSpan.end.offset === e.startSourceSpan.start.offset && e.firstChild && "ieConditionalEndComment" === e.firstChild.type && e.firstChild.sourceSpan.start.offset === e.startSourceSpan.end.offset;
    return e.map(e => {
      if (e.children) {
        const n = e.children.map(t);
        if (n.some(Boolean)) {
          const t = [];
          for (let r = 0; r < e.children.length; r++) {
            const o = e.children[r];
            if (!n[r + 1]) if (n[r]) {
              const e = o.prev, n = o.firstChild, r = new HS(e.sourceSpan.start, n.sourceSpan.end), u = new HS(r.start, o.sourceSpan.end);
              t.push(o.clone({
                condition: e.condition,
                sourceSpan: u,
                startSourceSpan: r,
                children: o.children.slice(1)
              }));
            } else t.push(o);
          }
          return e.clone({
            children: t
          });
        }
      }
      return e;
    });
  }, function (e) {
    return (function (e, t, n) {
      return e.map(e => {
        if (e.children) {
          const r = e.children.map(t);
          if (r.some(Boolean)) {
            const t = [];
            for (let o = 0; o < e.children.length; o++) {
              const u = e.children[o];
              if ("text" !== u.type && !r[o]) {
                t.push(u);
                continue;
              }
              const i = "text" === u.type ? u : u.clone({
                type: "text",
                value: n(u)
              });
              if (0 === t.length || "text" !== t[t.length - 1].type) {
                t.push(i);
                continue;
              }
              const a = t.pop();
              t.push(a.clone({
                value: a.value + i.value,
                sourceSpan: new HS(a.sourceSpan.start, i.sourceSpan.end)
              }));
            }
            return e.clone({
              children: t
            });
          }
        }
        return e;
      });
    })(e, e => "cdata" === e.type, e => ("<![CDATA[").concat(e.value, "]]>"));
  }, function (e, t) {
    if ("html" === t.parser) return e;
    const n = /{{([\S\s]+?)}}/g;
    return e.map(e => {
      if (!KS(e)) return e;
      const t = [];
      for (const r of e.children) {
        if ("text" !== r.type) {
          t.push(r);
          continue;
        }
        let e = r.sourceSpan.start, o = null;
        const u = r.value.split(n);
        for (let n = 0; n < u.length; (n++, e = o)) {
          const r = u[n];
          n % 2 != 0 ? (o = e.moveBy(r.length + 4), t.push({
            type: "interpolation",
            sourceSpan: new HS(e, o),
            children: 0 === r.length ? [] : [{
              type: "text",
              value: r,
              sourceSpan: new HS(e.moveBy(2), o.moveBy(-2))
            }]
          })) : (o = e.moveBy(r.length), 0 !== r.length && t.push({
            type: "text",
            value: r,
            sourceSpan: new HS(e, o)
          }));
        }
      }
      return e.clone({
        children: t
      });
    });
  }, function (e) {
    const t = "whitespace";
    return e.map(e => {
      if (!e.children) return e;
      if (0 === e.children.length || 1 === e.children.length && "text" === e.children[0].type && 0 === GS(e.children[0].value).length) return e.clone({
        children: [],
        hasDanglingSpaces: 0 !== e.children.length
      });
      const n = rw(e), r = ew(e);
      return e.clone({
        isWhitespaceSensitive: n,
        isIndentationSensitive: r,
        children: e.children.reduce((e, r) => {
          if ("text" !== r.type || n) return e.concat(r);
          const o = [], {leadingWhitespace: u, text: i, trailingWhitespace: a} = XS(r.value);
          return (u && o.push({
            type: t
          }), i && o.push({
            type: "text",
            value: i,
            sourceSpan: new HS(r.sourceSpan.start.moveBy(u.length), r.sourceSpan.end.moveBy(-a.length))
          }), a && o.push({
            type: t
          }), e.concat(o));
        }, []).reduce((e, n, r, o) => {
          if (n.type === t) return e;
          const u = 0 !== r && o[r - 1].type === t, i = r !== o.length - 1 && o[r + 1].type === t;
          return e.concat(Object.assign({}, n, {
            hasLeadingSpaces: u,
            hasTrailingSpaces: i
          }));
        }, [])
      });
    });
  }, function (e, t) {
    return e.map(e => Object.assign(e, {
      cssDisplay: QS(e, t)
    }));
  }, function (e) {
    return e.map(e => Object.assign(e, {
      isSelfClosing: !e.children || "element" === e.type && (e.tagDefinition.isVoid || e.startSourceSpan === e.endSourceSpan)
    }));
  }, function (e, t) {
    return e.map(e => "element" !== e.type ? e : Object.assign(e, {
      hasHtmComponentClosingTag: e.endSourceSpan && (/^<\s*\/\s*\/\s*>$/).test(t.originalText.slice(e.endSourceSpan.start.offset, e.endSourceSpan.end.offset))
    }));
  }, function (e, t) {
    return e.map(e => e.children ? 0 === e.children.length ? e.clone({
      isDanglingSpaceSensitive: ZS(e)
    }) : e.clone({
      children: e.children.map(e => Object.assign({}, e, {
        isLeadingSpaceSensitive: tw(e, t),
        isTrailingSpaceSensitive: nw(e, t)
      })).map((e, t, n) => Object.assign({}, e, {
        isLeadingSpaceSensitive: (0 === t || n[t - 1].isTrailingSpaceSensitive) && e.isLeadingSpaceSensitive,
        isTrailingSpaceSensitive: (t === n.length - 1 || n[t + 1].isLeadingSpaceSensitive) && e.isTrailingSpaceSensitive
      }))
    }) : e);
  }, function (e) {
    const t = e => "element" === e.type && 0 === e.attrs.length && 1 === e.children.length && "text" === e.firstChild.type && !YS(e.children[0].value) && !e.firstChild.hasLeadingSpaces && !e.firstChild.hasTrailingSpaces && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces && e.prev && "text" === e.prev.type && e.next && "text" === e.next.type;
    return e.map(e => {
      if (e.children) {
        const n = e.children.map(t);
        if (n.some(Boolean)) {
          const t = [];
          for (let r = 0; r < e.children.length; r++) {
            const o = e.children[r];
            if (n[r]) {
              const n = t.pop(), u = e.children[++r], {isTrailingSpaceSensitive: i, hasTrailingSpaces: a} = u;
              t.push(n.clone({
                value: n.value + ("<").concat(o.rawName, ">") + o.firstChild.value + ("</").concat(o.rawName, ">") + u.value,
                sourceSpan: new HS(n.sourceSpan.start, u.sourceSpan.end),
                isTrailingSpaceSensitive: i,
                hasTrailingSpaces: a
              }));
            } else t.push(o);
          }
          return e.clone({
            children: t
          });
        }
      }
      return e;
    });
  }];
  var uw = function (e, t) {
    for (const n of ow) e = n(e, t);
    return e;
  };
  var iw = {
    hasPragma: function (e) {
      return (/^\s*<!--\s*@(format|prettier)\s*-->/).test(e);
    },
    insertPragma: function (e) {
      return "\x3c!-- @format --\x3e\n\n" + e.replace(/^\s*\n/, "");
    }
  };
  var aw = {
    locStart: function (e) {
      return e.sourceSpan.start.offset;
    },
    locEnd: function (e) {
      return e.sourceSpan.end.offset;
    }
  };
  const {builders: {concat: sw, group: cw}} = cn;
  var lw = {
    isVueEventBindingExpression: function (e) {
      const t = e.trim();
      return (/^([\w$]+|\([^)]*?\))\s*=>|^function\s*\(/).test(t) || (/^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/).test(t);
    },
    printVueFor: function (e, t) {
      const {left: n, operator: r, right: o} = (function (e) {
        const t = /([^]*?)\s+(in|of)\s+([^]*)/, n = /,([^,\]}]*)(?:,([^,\]}]*))?$/, r = /^\(|\)$/g, o = e.match(t);
        if (!o) return;
        const u = {};
        u.for = o[3].trim();
        const i = o[1].trim().replace(r, ""), a = i.match(n);
        a ? (u.alias = i.replace(n, ""), u.iterator1 = a[1].trim(), a[2] && (u.iterator2 = a[2].trim())) : u.alias = i;
        return {
          left: ("").concat([u.alias, u.iterator1, u.iterator2].filter(Boolean).join(",")),
          operator: o[2],
          right: u.for
        };
      })(e);
      return sw([cw(t(("function _(").concat(n, ") {}"), {
        parser: "babel",
        __isVueForBindingLeft: !0
      })), " ", r, " ", t(o, {
        parser: "__js_expression"
      }, {
        stripTrailingHardline: !0
      })]);
    },
    printVueBindings: function (e, t) {
      return t(("function _(").concat(e, ") {}"), {
        parser: "babel",
        __isVueBindings: !0
      }, {
        stripTrailingHardline: !0
      });
    }
  }, pw = je(function (e) {
    !(function (t, n) {
      e.exports ? e.exports = n() : t.parseSrcset = n();
    })(Me, function () {
      return function (e, t) {
        var n = t && t.logger || console;
        function r(e) {
          return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e;
        }
        function o(t) {
          var n, r = t.exec(e.substring(D));
          if (r) return (n = r[0], D += n.length, n);
        }
        for (var u, i, a, s, c, l = e.length, p = /^[ \t\n\r\u000c]+/, d = /^[, \t\n\r\u000c]+/, f = /^[^ \t\n\r\u000c]+/, h = /[,]+$/, m = /^\d+$/, g = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, D = 0, y = []; ; ) {
          if ((o(d), D >= l)) return y;
          (u = o(f), i = [], "," === u.slice(-1) ? (u = u.replace(h, ""), C()) : E());
        }
        function E() {
          for ((o(p), a = "", s = "in descriptor"); ; ) {
            if ((c = e.charAt(D), "in descriptor" === s)) if (r(c)) a && (i.push(a), a = "", s = "after descriptor"); else {
              if ("," === c) return (D += 1, a && i.push(a), void C());
              if ("(" === c) (a += c, s = "in parens"); else {
                if ("" === c) return (a && i.push(a), void C());
                a += c;
              }
            } else if ("in parens" === s) if (")" === c) (a += c, s = "in descriptor"); else {
              if ("" === c) return (i.push(a), void C());
              a += c;
            } else if ("after descriptor" === s) if (r(c)) ; else {
              if ("" === c) return void C();
              (s = "in descriptor", D -= 1);
            }
            D += 1;
          }
        }
        function C() {
          var t, r, o, a, s, c, l, p, d, f = !1, h = {};
          for (a = 0; a < i.length; a++) (c = (s = i[a])[s.length - 1], l = s.substring(0, s.length - 1), p = parseInt(l, 10), d = parseFloat(l), m.test(l) && "w" === c ? ((t || r) && (f = !0), 0 === p ? f = !0 : t = p) : g.test(l) && "x" === c ? ((t || r || o) && (f = !0), d < 0 ? f = !0 : r = d) : m.test(l) && "h" === c ? ((o || r) && (f = !0), 0 === p ? f = !0 : o = p) : f = !0);
          f ? n && n.error && n.error("Invalid srcset descriptor found in '" + e + "' at '" + s + "'.") : (h.url = u, t && (h.w = t), r && (h.d = r), o && (h.h = o), y.push(h));
        }
      };
    });
  });
  const {builders: {concat: dw, ifBreak: fw, join: hw, line: mw}} = cn;
  var gw = {
    printImgSrcset: function (e) {
      const t = pw(e, {
        logger: {
          error(e) {
            throw new Error(e);
          }
        }
      }), n = t.some(({w: e}) => e), r = t.some(({h: e}) => e);
      if (n + r + t.some(({d: e}) => e) > 1) throw new Error("Mixed descriptor in srcset is not supported");
      const o = n ? "w" : r ? "h" : "d", u = n ? "w" : r ? "h" : "x", i = e => Math.max(...e), a = t.map(e => e.url), s = i(a.map(e => e.length)), c = t.map(e => e[o]).map(e => e ? e.toString() : ""), l = c.map(e => {
        const t = e.indexOf(".");
        return -1 === t ? e.length : t;
      }), p = i(l);
      return hw(dw([",", mw]), a.map((e, t) => {
        const n = [e], r = c[t];
        if (r) {
          const o = s - e.length + 1, i = p - l[t], a = (" ").repeat(o + i);
          n.push(fw(a, " "), r + u);
        }
        return dw(n);
      }));
    },
    printClassNames: function (e) {
      return e.trim().split(/\s+/).join(" ");
    }
  };
  const {builders: Dw, utils: {mapDoc: yw, normalizeParts: Ew}} = cn, {replaceEndOfLineWith: Cw} = Lt, {print: bw} = ob, {breakParent: vw, dedentToRoot: Aw, fill: Fw, group: xw, hardline: Sw, ifBreak: ww, indent: Tw, join: Bw, line: Nw, literalline: kw, softline: Pw} = Dw, {htmlTrimPreserveIndentation: Ow, splitByHtmlWhitespace: Iw, countChars: Lw, countParents: Mw, dedentString: jw, forceBreakChildren: _w, forceBreakContent: Rw, forceNextEmptyLine: Vw, getLastDescendant: $w, getPrettierIgnoreAttributeCommentData: qw, hasPrettierIgnore: Ww, inferScriptParser: Uw, isVueCustomBlock: Jw, isVueNonHtmlBlock: zw, isVueSlotAttribute: Hw, isVueSfcBindingsAttribute: Gw, isScriptLikeTag: Xw, isTextLikeNode: Yw, preferHardlineAsLeadingSpaces: Kw, shouldNotPrintClosingTag: Qw, shouldPreserveContent: Zw, unescapeQuoteEntities: eT, isPreLikeNode: tT} = $S, {insertPragma: nT} = iw, {locStart: rT, locEnd: oT} = aw, {printVueFor: uT, printVueBindings: iT, isVueEventBindingExpression: aT} = lw, {printImgSrcset: sT, printClassNames: cT} = gw;
  function lT(e) {
    const t = Ew(e);
    return 0 === t.length ? "" : 1 === t.length ? t[0] : Dw.concat(t);
  }
  function pT(e, t, n) {
    const r = e.getValue();
    if (_w(r)) return lT([vw, lT(e.map(e => {
      const t = e.getValue(), n = t.prev ? i(t.prev, t) : "";
      return lT([n ? lT([n, Vw(t.prev) ? Sw : ""]) : "", u(e)]);
    }, "children"))]);
    const o = r.children.map(() => Symbol(""));
    return lT(e.map((e, t) => {
      const n = e.getValue();
      if (Yw(n)) {
        if (n.prev && Yw(n.prev)) {
          const t = i(n.prev, n);
          if (t) return Vw(n.prev) ? lT([Sw, Sw, u(e)]) : lT([t, u(e)]);
        }
        return u(e);
      }
      const r = [], a = [], s = [], c = [], l = n.prev ? i(n.prev, n) : "", p = n.next ? i(n, n.next) : "";
      return (l && (Vw(n.prev) ? r.push(Sw, Sw) : l === Sw ? r.push(Sw) : Yw(n.prev) ? a.push(l) : a.push(ww("", Pw, {
        groupId: o[t - 1]
      }))), p && (Vw(n) ? Yw(n.next) && c.push(Sw, Sw) : p === Sw ? Yw(n.next) && c.push(Sw) : s.push(p)), lT([].concat(r, xw(lT([lT(a), xw(lT([u(e), lT(s)]), {
        id: o[t]
      })])), c)));
    }, "children"));
    function u(e) {
      const r = e.getValue();
      return Ww(r) ? lT([].concat(xT(r, t), Cw(t.originalText.slice(rT(r) + (r.prev && CT(r.prev) ? TT(r).length : 0), oT(r) - (r.next && vT(r.next) ? kT(r, t).length : 0)), kw), wT(r, t))) : n(e);
    }
    function i(e, t) {
      return Yw(e) && Yw(t) ? e.isTrailingSpaceSensitive ? e.hasTrailingSpaces ? Kw(t) ? Sw : Nw : "" : Kw(t) ? Sw : Pw : CT(e) && (Ww(t) || t.firstChild || t.isSelfClosing || "element" === t.type && 0 !== t.attrs.length) || "element" === e.type && e.isSelfClosing && vT(t) ? "" : !t.isLeadingSpaceSensitive || Kw(t) || vT(t) && e.lastChild && FT(e.lastChild) && e.lastChild.lastChild && FT(e.lastChild.lastChild) ? Sw : t.hasLeadingSpaces ? Nw : Pw;
    }
  }
  function dT(e, t) {
    let n = e.startSourceSpan.end.offset;
    e.firstChild && bT(e.firstChild) && (n -= BT(e).length);
    let r = e.endSourceSpan.start.offset;
    return (e.lastChild && FT(e.lastChild) ? r += NT(e, t).length : AT(e) && (r -= kT(e.lastChild, t).length), t.originalText.slice(n, r));
  }
  function fT(e, t, n) {
    const r = e.getValue();
    if (!r.attrs || 0 === r.attrs.length) return r.isSelfClosing ? " " : "";
    const o = r.prev && "comment" === r.prev.type && qw(r.prev.value), u = "boolean" == typeof o ? () => o : Array.isArray(o) ? e => o.includes(e.rawName) : () => !1, i = e.map(e => {
      const r = e.getValue();
      return u(r) ? lT(Cw(t.originalText.slice(rT(r), oT(r)), kw)) : n(e);
    }, "attrs"), a = "element" === r.type && "script" === r.fullName && 1 === r.attrs.length && "src" === r.attrs[0].fullName && 0 === r.children.length, s = [Tw(lT([a ? " " : Nw, Bw(Nw, i)]))];
    return (r.firstChild && bT(r.firstChild) || r.isSelfClosing && AT(r.parent) || a ? s.push(r.isSelfClosing ? " " : "") : s.push(r.isSelfClosing ? Nw : Pw), lT(s));
  }
  function hT(e, t, n) {
    const r = e.getValue();
    return lT([mT(r, t), fT(e, t, n), r.isSelfClosing ? "" : gT(r)]);
  }
  function mT(e, t) {
    return e.prev && CT(e.prev) ? "" : lT([xT(e, t), TT(e)]);
  }
  function gT(e) {
    return e.firstChild && bT(e.firstChild) ? "" : BT(e);
  }
  function DT(e, t) {
    return lT([e.isSelfClosing ? "" : yT(e, t), ET(e, t)]);
  }
  function yT(e, t) {
    return e.lastChild && FT(e.lastChild) ? "" : lT([ST(e, t), NT(e, t)]);
  }
  function ET(e, t) {
    return (e.next ? vT(e.next) : AT(e.parent)) ? "" : lT([kT(e, t), wT(e, t)]);
  }
  function CT(e) {
    return e.next && !Yw(e.next) && Yw(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces;
  }
  function bT(e) {
    return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
  }
  function vT(e) {
    return e.prev && "docType" !== e.prev.type && !Yw(e.prev) && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
  }
  function AT(e) {
    return e.lastChild && e.lastChild.isTrailingSpaceSensitive && !e.lastChild.hasTrailingSpaces && !Yw($w(e.lastChild)) && !tT(e);
  }
  function FT(e) {
    return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && Yw($w(e));
  }
  function xT(e, t) {
    return bT(e) ? BT(e.parent) : vT(e) ? kT(e.prev, t) : "";
  }
  function ST(e, t) {
    return AT(e) ? kT(e.lastChild, t) : "";
  }
  function wT(e, t) {
    return FT(e) ? NT(e.parent, t) : CT(e) ? TT(e.next) : "";
  }
  function TT(e) {
    switch (e.type) {
      case "ieConditionalComment":
      case "ieConditionalStartComment":
        return ("\x3c!--[if ").concat(e.condition);
      case "ieConditionalEndComment":
        return "\x3c!--<!";
      case "interpolation":
        return "{{";
      case "docType":
        return "<!DOCTYPE";
      case "element":
        if (e.condition) return ("\x3c!--[if ").concat(e.condition, "]>\x3c!--\x3e<").concat(e.rawName);
      default:
        return ("<").concat(e.rawName);
    }
  }
  function BT(e) {
    switch ((ta(!e.isSelfClosing), e.type)) {
      case "ieConditionalComment":
        return "]>";
      case "element":
        if (e.condition) return ">\x3c!--<![endif]--\x3e";
      default:
        return ">";
    }
  }
  function NT(e, t) {
    if ((ta(!e.isSelfClosing), Qw(e, t))) return "";
    switch (e.type) {
      case "ieConditionalComment":
        return "<!";
      case "element":
        if (e.hasHtmComponentClosingTag) return "<//";
      default:
        return ("</").concat(e.rawName);
    }
  }
  function kT(e, t) {
    if (Qw(e, t)) return "";
    switch (e.type) {
      case "ieConditionalComment":
      case "ieConditionalEndComment":
        return "[endif]--\x3e";
      case "ieConditionalStartComment":
        return "]>\x3c!--\x3e";
      case "interpolation":
        return "}}";
      case "element":
        if (e.isSelfClosing) return "/>";
      default:
        return ">";
    }
  }
  function PT(e, t = e.value) {
    return e.parent.isWhitespaceSensitive ? e.parent.isIndentationSensitive ? Cw(t, kw) : Cw(jw(Ow(t)), Sw) : Bw(Nw, Iw(t)).parts;
  }
  var OT = {
    preprocess: uw,
    print: function (e, t, n) {
      const r = e.getValue();
      switch (r.type) {
        case "front-matter":
          return lT(Cw(r.raw, kw));
        case "root":
          return (t.__onHtmlRoot && t.__onHtmlRoot(r), Dw.concat([xw(pT(e, t, n)), Sw]));
        case "element":
        case "ieConditionalComment":
          {
            if (Zw(r, t)) return lT([].concat(xT(r, t), xw(hT(e, t, n)), Cw(dT(r, t), kw), DT(r, t), wT(r, t)));
            const u = 1 === r.children.length && "interpolation" === r.firstChild.type && r.firstChild.isLeadingSpaceSensitive && !r.firstChild.hasLeadingSpaces && r.lastChild.isTrailingSpaceSensitive && !r.lastChild.hasTrailingSpaces, i = Symbol("element-attr-group-id");
            return lT([xw(lT([xw(hT(e, t, n), {
              id: i
            }), 0 === r.children.length ? r.hasDanglingSpaces && r.isDanglingSpaceSensitive ? Nw : "" : lT([Rw(r) ? vw : "", (o = lT([u ? ww(Pw, "", {
              groupId: i
            }) : r.firstChild.hasLeadingSpaces && r.firstChild.isLeadingSpaceSensitive ? Nw : "text" === r.firstChild.type && r.isWhitespaceSensitive && r.isIndentationSensitive ? Aw(Pw) : Pw, pT(e, t, n)]), u ? ww(Tw(o), o, {
              groupId: i
            }) : !Xw(r) && !Jw(r, t) || "root" !== r.parent.type || "vue" !== t.parser || t.vueIndentScriptAndStyle ? Tw(o) : o), (r.next ? vT(r.next) : AT(r.parent)) ? r.lastChild.hasTrailingSpaces && r.lastChild.isTrailingSpaceSensitive ? " " : "" : u ? ww(Pw, "", {
              groupId: i
            }) : r.lastChild.hasTrailingSpaces && r.lastChild.isTrailingSpaceSensitive ? Nw : ("comment" === r.lastChild.type || "text" === r.lastChild.type && r.isWhitespaceSensitive && r.isIndentationSensitive) && new RegExp(("\\n[\\t ]{").concat(t.tabWidth * Mw(e, e => e.parent && "root" !== e.parent.type), "}$")).test(r.lastChild.value) ? "" : Pw])])), DT(r, t)]);
          }
        case "ieConditionalStartComment":
        case "ieConditionalEndComment":
          return lT([mT(r), ET(r)]);
        case "interpolation":
          return lT([mT(r, t), lT(e.map(n, "children")), ET(r, t)]);
        case "text":
          if ("interpolation" === r.parent.type) {
            const e = /\n[^\S\n]*?$/, t = e.test(r.value), n = t ? r.value.replace(e, "") : r.value;
            return lT([lT(Cw(n, kw)), t ? Sw : ""]);
          }
          return Fw(Ew([].concat(xT(r, t), PT(r), wT(r, t))));
        case "docType":
          return lT([xw(lT([mT(r, t), " ", r.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")])), ET(r, t)]);
        case "comment":
          return lT([xT(r, t), lT(Cw(t.originalText.slice(rT(r), oT(r)), kw)), wT(r, t)]);
        case "attribute":
          {
            if (null === r.value) return r.rawName;
            const e = eT(r.value), t = Lw(e, "'") < Lw(e, '"') ? "'" : '"';
            return lT([r.rawName, lT(["=", t, lT(Cw('"' === t ? e.replace(/"/g, "&quot;") : e.replace(/'/g, "&apos;"), kw)), t])]);
          }
        default:
          throw new Error(("Unexpected node type ").concat(r.type));
      }
      var o;
    },
    insertPragma: nT,
    massageAstNode: sS,
    embed: function (e, t, n, r) {
      const o = e.getValue();
      switch (o.type) {
        case "element":
          if (Xw(o) || "interpolation" === o.type) return;
          if (!o.isSelfClosing && zw(o, r)) {
            const u = Uw(o, r);
            if (!u) return;
            const i = dT(o, r);
            let a = (/^\s*$/).test(i), s = "";
            return (a || (s = n(Ow(i), {
              parser: u
            }, {
              stripTrailingHardline: !0
            }), a = "" === s), lT([xT(o, r), xw(hT(e, r, t)), a ? "" : Sw, s, a ? "" : Sw, DT(o, r), wT(o, r)]));
          }
          break;
        case "text":
          if (Xw(o.parent)) {
            const e = Uw(o.parent);
            if (e) {
              const t = "markdown" === e ? jw(o.value.replace(/^[^\S\n]*?\n/, "")) : o.value, u = {
                parser: e
              };
              if ("html" === r.parser && "babel" === e) {
                let e = "script";
                const {attrMap: t} = o.parent;
                (t && ("module" === t.type || "text/babel" === t.type && "module" === t["data-type"]) && (e = "module"), u.__babelSourceType = e);
              }
              return Dw.concat([lT([vw, xT(o, r), n(t, u, {
                stripTrailingHardline: !0
              }), wT(o, r)])]);
            }
          } else if ("interpolation" === o.parent.type) return lT([Tw(lT([Nw, n(o.value, Object.assign({
            __isInHtmlInterpolation: !0
          }, "angular" === r.parser ? {
            parser: "__ng_interpolation",
            trailingComma: "none"
          } : "vue" === r.parser ? {
            parser: "__vue_expression"
          } : {
            parser: "__js_expression"
          }), {
            stripTrailingHardline: !0
          })])), o.parent.next && vT(o.parent.next) ? " " : Nw]);
          break;
        case "attribute":
          {
            if (!o.value) break;
            if ((/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/).test(r.originalText.slice(o.valueSpan.start.offset, o.valueSpan.end.offset))) return lT([o.rawName, "=", o.value]);
            if ("lwc" === r.parser) {
              if ((/^{[\S\s]*}$/).test(r.originalText.slice(o.valueSpan.start.offset, o.valueSpan.end.offset))) return lT([o.rawName, "=", o.value]);
            }
            const e = (function (e, t, n) {
              const r = t => new RegExp(t.join("|")).test(e.fullName), o = () => eT(e.value);
              let u = !1;
              const i = (e, t) => {
                const n = "NGRoot" === e.type ? "NGMicrosyntax" === e.node.type && 1 === e.node.body.length && "NGMicrosyntaxExpression" === e.node.body[0].type ? e.node.body[0].expression : e.node : "JsExpressionRoot" === e.type ? e.node : e;
                !n || "ObjectExpression" !== n.type && "ArrayExpression" !== n.type && ("__vue_expression" !== t.parser || "TemplateLiteral" !== n.type && "StringLiteral" !== n.type) || (u = !0);
              }, a = e => xw(e), s = (e, t = !0) => xw(lT([Tw(lT([Pw, e])), t ? Pw : ""])), c = e => u ? a(e) : s(e), l = (e, n) => t(e, Object.assign({
                __onHtmlBindingRoot: i
              }, n), {
                stripTrailingHardline: !0
              });
              if ("srcset" === e.fullName && ("img" === e.parent.fullName || "source" === e.parent.fullName)) return s(sT(o()));
              if ("class" === e.fullName && !n.parentParser) {
                const e = o();
                if (!e.includes("{{")) return cT(e);
              }
              if ("style" === e.fullName && !n.parentParser) {
                const e = o();
                if (!e.includes("{{")) return s(l(e, {
                  parser: "css",
                  __isHTMLStyleAttribute: !0
                }));
              }
              if ("vue" === n.parser) {
                if ("v-for" === e.fullName) return uT(o(), l);
                if (Hw(e) || Gw(e, n)) return iT(o(), l);
                const t = ["^:", "^v-bind:"], u = ["^v-"];
                if (r(["^@", "^v-on:"])) {
                  const e = o();
                  return c(l(e, {
                    parser: aT(e) ? "__js_expression" : "__vue_event_binding"
                  }));
                }
                if (r(t)) return c(l(o(), {
                  parser: "__vue_expression"
                }));
                if (r(u)) return c(l(o(), {
                  parser: "__js_expression"
                }));
              }
              if ("angular" === n.parser) {
                const t = (e, t) => l(e, Object.assign({}, t, {
                  trailingComma: "none"
                })), n = ["^\\*"], u = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"], i = ["^i18n(-.+)?$"];
                if (r(["^\\(.+\\)$", "^on-"])) return c(t(o(), {
                  parser: "__ng_action"
                }));
                if (r(u)) return c(t(o(), {
                  parser: "__ng_binding"
                }));
                if (r(i)) {
                  const t = o().trim();
                  return s(Fw(PT(e, t)), !t.includes("@@"));
                }
                if (r(n)) return c(t(o(), {
                  parser: "__ng_directive"
                }));
                const a = /{{([\S\s]+?)}}/g, p = o();
                if (a.test(p)) {
                  const e = [];
                  return (p.split(a).forEach((n, r) => {
                    if (r % 2 == 0) e.push(lT(Cw(n, kw))); else try {
                      e.push(xw(lT(["{{", Tw(lT([Nw, t(n, {
                        parser: "__ng_interpolation",
                        __isInHtmlInterpolation: !0
                      })])), Nw, "}}"])));
                    } catch (t) {
                      e.push("{{", lT(Cw(n, kw)), "}}");
                    }
                  }), xw(lT(e)));
                }
              }
              return null;
            })(o, (e, t) => n(e, Object.assign({
              __isInHtmlAttribute: !0
            }, t), {
              stripTrailingHardline: !0
            }), r);
            if (e) return lT([o.rawName, '="', xw(yw(e, e => "string" == typeof e ? e.replace(/"/g, "&quot;") : e)), '"']);
            break;
          }
        case "front-matter":
          return bw(o, n);
      }
    }
  };
  const IT = "HTML";
  var LT = {
    htmlWhitespaceSensitivity: {
      since: "1.15.0",
      category: IT,
      type: "choice",
      default: "css",
      description: "How to handle whitespaces in HTML.",
      choices: [{
        value: "css",
        description: "Respect the default value of CSS display property."
      }, {
        value: "strict",
        description: "Whitespaces are considered sensitive."
      }, {
        value: "ignore",
        description: "Whitespaces are considered insensitive."
      }]
    },
    vueIndentScriptAndStyle: {
      since: "1.19.0",
      category: IT,
      type: "boolean",
      default: !1,
      description: "Indent script and style tags in Vue files."
    }
  }, MT = {
    name: "HTML",
    type: "markup",
    tmScope: "text.html.basic",
    aceMode: "html",
    codemirrorMode: "htmlmixed",
    codemirrorMimeType: "text/html",
    color: "#e34c26",
    aliases: ["xhtml"],
    extensions: [".html", ".htm", ".html.hl", ".inc", ".st", ".xht", ".xhtml"],
    languageId: 146
  }, jT = {
    name: "Vue",
    type: "markup",
    color: "#2c3e50",
    extensions: [".vue"],
    tmScope: "text.html.vue",
    aceMode: "html",
    languageId: 391
  };
  var _T = {
    languages: [ks(MT, () => ({
      name: "Angular",
      since: "1.15.0",
      parsers: ["angular"],
      vscodeLanguageIds: ["html"],
      extensions: [".component.html"],
      filenames: []
    })), ks(MT, e => ({
      since: "1.15.0",
      parsers: ["html"],
      vscodeLanguageIds: ["html"],
      extensions: e.extensions.concat([".mjml"])
    })), ks(MT, () => ({
      name: "Lightning Web Components",
      since: "1.17.0",
      parsers: ["lwc"],
      vscodeLanguageIds: ["html"],
      extensions: [],
      filenames: []
    })), ks(jT, () => ({
      since: "1.10.0",
      parsers: ["vue"],
      vscodeLanguageIds: ["vue"]
    }))],
    printers: {
      html: OT
    },
    options: LT,
    parsers: {
      get html() {
        return ({}).parsers.html;
      },
      get vue() {
        return ({}).parsers.vue;
      },
      get angular() {
        return ({}).parsers.angular;
      },
      get lwc() {
        return ({}).parsers.lwc;
      }
    }
  };
  var RT = {
    isPragma: function (e) {
      return (/^\s*@(prettier|format)\s*$/).test(e);
    },
    hasPragma: function (e) {
      return (/^\s*#[^\S\n]*@(prettier|format)\s*?(\n|$)/).test(e);
    },
    insertPragma: function (e) {
      return ("# @format\n\n").concat(e);
    }
  };
  var VT = {
    locStart: function (e) {
      return e.position.start.offset;
    },
    locEnd: function (e) {
      return e.position.end.offset;
    }
  };
  const {getLast: $T} = Lt;
  function qT(e, t) {
    return e && "string" == typeof e.type && (!t || t.includes(e.type));
  }
  function WT(e) {
    return "prettier-ignore" === e.value.trim();
  }
  function UT(e) {
    return e && e.leadingComments && 0 !== e.leadingComments.length;
  }
  function JT(e) {
    return e && e.middleComments && 0 !== e.middleComments.length;
  }
  function zT(e) {
    return e && e.indicatorComment;
  }
  function HT(e) {
    return e && e.trailingComment;
  }
  function GT(e) {
    return e && e.endComments && 0 !== e.endComments.length;
  }
  function XT(e) {
    const t = [];
    let n;
    for (const r of e.split(/( +)/g)) (" " !== r ? " " === n ? t.push(r) : t.push((t.pop() || "") + r) : void 0 === n && t.unshift(""), n = r);
    return (" " === n && t.push((t.pop() || "") + " "), "" === t[0] && (t.shift(), t.unshift(" " + (t.shift() || ""))), t);
  }
  var YT = {
    getLast: $T,
    getAncestorCount: function (e, t) {
      let n = 0;
      const r = e.stack.length - 1;
      for (let o = 0; o < r; o++) {
        const r = e.stack[o];
        qT(r) && t(r) && n++;
      }
      return n;
    },
    isNode: qT,
    isEmptyNode: function (e) {
      return !(e.children && 0 !== e.children.length || (function (e) {
        return UT(e) || JT(e) || zT(e) || HT(e) || GT(e);
      })(e));
    },
    mapNode: function e(t, n, r) {
      return n(("children" in t) ? Object.assign({}, t, {
        children: t.children.map(r => e(r, n, t))
      }) : t, r);
    },
    defineShortcut: function (e, t, n) {
      Object.defineProperty(e, t, {
        get: n,
        enumerable: !1
      });
    },
    isNextLineEmpty: function (e, t) {
      let n = 0;
      const r = t.length;
      for (let o = e.position.end.offset - 1; o < r; o++) {
        const e = t[o];
        if (("\n" === e && n++, 1 === n && (/\S/).test(e))) return !1;
        if (2 === n) return !0;
      }
      return !1;
    },
    isLastDescendantNode: function (e) {
      switch (e.getValue().type) {
        case "tag":
        case "anchor":
        case "comment":
          return !1;
      }
      const t = e.stack.length;
      for (let n = 1; n < t; n++) {
        const t = e.stack[n], r = e.stack[n - 1];
        if (Array.isArray(r) && "number" == typeof t && t !== r.length - 1) return !1;
      }
      return !0;
    },
    getBlockValueLineContents: function (e, {parentIndent: t, isLastDescendant: n, options: r}) {
      const o = e.position.start.line === e.position.end.line ? "" : r.originalText.slice(e.position.start.offset, e.position.end.offset).match(/^[^\n]*?\n([\S\s]*)$/)[1], u = null === e.indent ? (i = o.match(/^( *)\S/m)) ? i[1].length : 1 / 0 : e.indent - 1 + t;
      var i;
      const a = o.split("\n").map(e => e.slice(u));
      return "preserve" === r.proseWrap || "blockLiteral" === e.type ? s(a.map(e => 0 === e.length ? [] : [e])) : s(a.map(e => 0 === e.length ? [] : XT(e)).reduce((e, t, n) => 0 === n || 0 === a[n - 1].length || 0 === t.length || (/^\s/).test(t[0]) || (/^\s|\s$/).test($T(e)) ? e.concat([t]) : e.concat([e.pop().concat(t)]), []).map(e => e.reduce((e, t) => 0 !== e.length && (/\s$/).test($T(e)) ? e.concat(e.pop() + " " + t) : e.concat(t), [])).map(e => "never" === r.proseWrap ? [e.join(" ")] : e));
      function s(t) {
        if ("keep" === e.chomping) return 0 === $T(t).length ? t.slice(0, -1) : t;
        let r = 0;
        for (let e = t.length - 1; e >= 0 && 0 === t[e].length; e--) r++;
        return 0 === r ? t : r >= 2 && !n ? t.slice(0, -(r - 1)) : t.slice(0, -r);
      }
    },
    getFlowScalarLineContents: function (e, t, n) {
      const r = t.split("\n").map((e, t, n) => 0 === t && t === n.length - 1 ? e : 0 !== t && t !== n.length - 1 ? e.trim() : 0 === t ? e.trimEnd() : e.trimStart());
      return "preserve" === n.proseWrap ? r.map(e => 0 === e.length ? [] : [e]) : r.map(e => 0 === e.length ? [] : XT(e)).reduce((t, n, o) => 0 === o || 0 === r[o - 1].length || 0 === n.length || "quoteDouble" === e && $T($T(t)).endsWith("\\") ? t.concat([n]) : t.concat([t.pop().concat(n)]), []).map(e => "never" === n.proseWrap ? [e.join(" ")] : e);
    },
    getLastDescendantNode: function e(t) {
      return ("children" in t) && 0 !== t.children.length ? e($T(t.children)) : t;
    },
    hasPrettierIgnore: function (e) {
      const t = e.getValue();
      if ("documentBody" === t.type) {
        const t = e.getParentNode();
        return GT(t.head) && WT($T(t.head.endComments));
      }
      return UT(t) && WT($T(t.leadingComments));
    },
    hasLeadingComments: UT,
    hasMiddleComments: JT,
    hasIndicatorComment: zT,
    hasTrailingComment: HT,
    hasEndComments: GT
  };
  const KT = cn.builders, {conditionalGroup: QT, breakParent: ZT, concat: eB, dedent: tB, dedentToRoot: nB, fill: rB, group: oB, hardline: uB, ifBreak: iB, join: aB, line: sB, lineSuffix: cB, literalline: lB, markAsRoot: pB, softline: dB} = KT, {replaceEndOfLineWith: fB, isPreviousLineEmpty: hB} = Lt, {insertPragma: mB, isPragma: gB} = RT, {locStart: DB} = VT, {getAncestorCount: yB, getBlockValueLineContents: EB, getFlowScalarLineContents: CB, getLast: bB, getLastDescendantNode: vB, hasLeadingComments: AB, hasMiddleComments: FB, hasIndicatorComment: xB, hasTrailingComment: SB, hasEndComments: wB, hasPrettierIgnore: TB, isLastDescendantNode: BB, isNextLineEmpty: NB, isNode: kB, isEmptyNode: PB, defineShortcut: OB, mapNode: IB} = YT;
  function LB(e) {
    switch (e.type) {
      case "document":
        (OB(e, "head", () => e.children[0]), OB(e, "body", () => e.children[1]));
        break;
      case "documentBody":
      case "sequenceItem":
      case "flowSequenceItem":
      case "mappingKey":
      case "mappingValue":
        OB(e, "content", () => e.children[0]);
        break;
      case "mappingItem":
      case "flowMappingItem":
        (OB(e, "key", () => e.children[0]), OB(e, "value", () => e.children[1]));
    }
    return e;
  }
  function MB(e, t, n, r, o) {
    switch (e.type) {
      case "root":
        return eB([aB(uB, n.map((t, r) => {
          const u = e.children[r], i = e.children[r + 1];
          return eB([o(t), VB(u, i) ? eB([uB, "...", SB(u) ? eB([" ", n.call(o, "trailingComment")]) : ""]) : !i || SB(i.head) ? "" : eB([uB, "---"])]);
        }, "children")), 0 === e.children.length || (i = vB(e), kB(i, ["blockLiteral", "blockFolded"]) && "keep" === i.chomping) ? "" : uB]);
      case "document":
        {
          const u = t.children[n.getName() + 1];
          return aB(uB, ["head" === $B(e, u, t, r) ? aB(uB, [0 === e.head.children.length && 0 === e.head.endComments.length ? "" : n.call(o, "head"), eB(["---", SB(e.head) ? eB([" ", n.call(o, "head", "trailingComment")]) : ""])].filter(Boolean)) : "", RB(e) ? n.call(o, "body") : ""].filter(Boolean));
        }
      case "documentHead":
        return aB(uB, [].concat(n.map(o, "children"), n.map(o, "endComments")));
      case "documentBody":
        {
          const t = aB(uB, n.map(o, "children")).parts, r = aB(uB, n.map(o, "endComments")).parts, u = 0 === t.length || 0 === r.length ? "" : (e => kB(e, ["blockFolded", "blockLiteral"]) ? "keep" === e.chomping ? "" : eB([uB, uB]) : uB)(vB(e));
          return eB([].concat(t, u, r));
        }
      case "directive":
        return eB(["%", aB(" ", [e.name].concat(e.parameters))]);
      case "comment":
        return eB(["#", e.value]);
      case "alias":
        return eB(["*", e.value]);
      case "tag":
        return r.originalText.slice(e.position.start.offset, e.position.end.offset);
      case "anchor":
        return eB(["&", e.value]);
      case "plain":
        return HB(e.type, r.originalText.slice(e.position.start.offset, e.position.end.offset), r);
      case "quoteDouble":
      case "quoteSingle":
        {
          const t = "'", n = '"', o = r.originalText.slice(e.position.start.offset + 1, e.position.end.offset - 1);
          if ("quoteSingle" === e.type && o.includes("\\") || "quoteDouble" === e.type && (/\\[^"]/).test(o)) {
            const u = "quoteDouble" === e.type ? n : t;
            return eB([u, HB(e.type, o, r), u]);
          }
          if (o.includes(n)) return eB([t, HB(e.type, "quoteDouble" === e.type ? o.replace(/\\"/g, n).replace(/'/g, t.repeat(2)) : o, r), t]);
          if (o.includes(t)) return eB([n, HB(e.type, "quoteSingle" === e.type ? o.replace(/''/g, t) : o, r), n]);
          const u = r.singleQuote ? t : n;
          return eB([u, HB(e.type, o, r), u]);
        }
      case "blockFolded":
      case "blockLiteral":
        {
          const t = yB(n, e => kB(e, ["sequence", "mapping"])), u = BB(n);
          return eB(["blockFolded" === e.type ? ">" : "|", null === e.indent ? "" : e.indent.toString(), "clip" === e.chomping ? "" : "keep" === e.chomping ? "+" : "-", xB(e) ? eB([" ", n.call(o, "indicatorComment")]) : "", (null === e.indent ? tB : nB)(jB(null === e.indent ? r.tabWidth : e.indent - 1 + t, eB(EB(e, {
            parentIndent: t,
            isLastDescendant: u,
            options: r
          }).reduce((t, n, r, o) => t.concat(0 === r ? uB : "", rB(aB(sB, n).parts), r !== o.length - 1 ? 0 === n.length ? uB : pB(lB) : "keep" === e.chomping && u ? 0 === n.length ? nB(uB) : nB(lB) : ""), []))))]);
        }
      case "sequence":
        return aB(uB, n.map(o, "children"));
      case "sequenceItem":
        return eB(["- ", jB(2, e.content ? n.call(o, "content") : "")]);
      case "mappingKey":
      case "mappingValue":
        return e.content ? n.call(o, "content") : "";
      case "mapping":
        return aB(uB, n.map(o, "children"));
      case "mappingItem":
      case "flowMappingItem":
        {
          const u = PB(e.key), i = PB(e.value);
          if (u && i) return eB([": "]);
          const s = n.call(o, "key"), c = n.call(o, "value");
          if (i) return "flowMappingItem" === e.type && "flowMapping" === t.type ? s : "mappingItem" !== e.type || !qB(e.key.content, r) || SB(e.key.content) || t.tag && "tag:yaml.org,2002:set" === t.tag.value ? eB(["? ", jB(2, s)]) : eB([s, WB(e) ? " " : "", ":"]);
          if (u) return eB([": ", jB(2, c)]);
          const l = Symbol("mappingKey");
          return AB(e.value) || !_B(e.key.content) ? eB(["? ", jB(2, s), uB, aB("", n.map(o, "value", "leadingComments").map(e => eB([e, uB]))), ": ", jB(2, c)]) : !(function (e) {
            if (!e) return !0;
            switch (e.type) {
              case "plain":
              case "quoteDouble":
              case "quoteSingle":
                return e.position.start.line === e.position.end.line;
              case "alias":
                return !0;
              default:
                return !1;
            }
          })(e.key.content) || AB(e.key.content) || FB(e.key.content) || SB(e.key.content) || wB(e.key) || AB(e.value.content) || FB(e.value.content) || wB(e.value) || !qB(e.value.content, r) ? QT([eB([oB(eB([iB("? "), oB(jB(2, s), {
            id: l
          })])), iB(eB([uB, ": ", jB(2, c)]), a(eB([WB(e) ? " " : "", ":", AB(e.value.content) || wB(e.value) && e.value.content && !kB(e.value.content, ["mapping", "sequence"]) || "mapping" === t.type && SB(e.key.content) && _B(e.value.content) || kB(e.value.content, ["mapping", "sequence"]) && null === e.value.content.tag && null === e.value.content.anchor ? uB : e.value.content ? sB : "", c])), {
            groupId: l
          })])]) : eB([s, WB(e) ? " " : "", ": ", c]);
        }
      case "flowMapping":
      case "flowSequence":
        {
          const t = "flowMapping" === e.type ? "{" : "[", i = "flowMapping" === e.type ? "}" : "]", s = "flowMapping" === e.type && 0 !== e.children.length && r.bracketSpacing ? sB : dB, c = 0 !== e.children.length && ("flowMappingItem" === (u = bB(e.children)).type && PB(u.key) && PB(u.value)), l = "none" === r.trailingComma ? "" : iB(",", "");
          return eB([t, a(eB([s, eB(n.map((t, n) => eB([o(t), n === e.children.length - 1 ? "" : eB([",", sB, e.children[n].position.start.line !== e.children[n + 1].position.start.line ? zB(t, r.originalText) : ""])]), "children")), l, wB(e) ? eB([uB, aB(uB, n.map(o, "endComments"))]) : ""])), c ? "" : s, i]);
        }
      case "flowSequenceItem":
        return n.call(o, "content");
      default:
        throw new Error(("Unexpected node type ").concat(e.type));
    }
    var u, i;
    function a(e) {
      return KT.align((" ").repeat(r.tabWidth), e);
    }
  }
  function jB(e, t) {
    return "number" == typeof e && e > 0 ? KT.align((" ").repeat(e), t) : KT.align(e, t);
  }
  function _B(e) {
    if (!e) return !0;
    switch (e.type) {
      case "plain":
      case "quoteDouble":
      case "quoteSingle":
      case "alias":
      case "flowMapping":
      case "flowSequence":
        return !0;
      default:
        return !1;
    }
  }
  function RB(e) {
    return 0 !== e.body.children.length || wB(e.body);
  }
  function VB(e, t) {
    return SB(e) || t && (0 !== t.head.children.length || wB(t.head));
  }
  function $B(e, t, n, r) {
    return n.children[0] === e && (/---(\s|$)/).test(r.originalText.slice(DB(e), DB(e) + 4)) || 0 !== e.head.children.length || wB(e.head) || SB(e.head) ? "head" : !VB(e, t) && (!!t && "root");
  }
  function qB(e, t) {
    if (!e) return !0;
    switch (e.type) {
      case "plain":
      case "quoteSingle":
      case "quoteDouble":
        break;
      case "alias":
        return !0;
      default:
        return !1;
    }
    if ("preserve" === t.proseWrap) return e.position.start.line === e.position.end.line;
    if ((/\\$/m).test(t.originalText.slice(e.position.start.offset, e.position.end.offset))) return !1;
    switch (t.proseWrap) {
      case "never":
        return !e.value.includes("\n");
      case "always":
        return !(/[\n ]/).test(e.value);
      default:
        return !1;
    }
  }
  function WB(e) {
    return e.key.content && "alias" === e.key.content.type;
  }
  function UB(e) {
    return wB(e) && !kB(e, ["documentHead", "documentBody", "flowMapping", "flowSequence"]);
  }
  const JB = new WeakMap();
  function zB(e, t) {
    const n = e.getValue(), r = e.stack[0];
    let o;
    return (JB.has(r) ? o = JB.get(r) : (o = new Set(), JB.set(r, o)), o.has(n.position.end.line) || (o.add(n.position.end.line), !NB(n, t) || UB(e.getParentNode())) ? "" : dB);
  }
  function HB(e, t, n) {
    const r = CB(e, t, n);
    return aB(uB, r.map(e => rB(aB(sB, e).parts)));
  }
  var GB = {
    preprocess: function (e) {
      return IB(e, LB);
    },
    print: function (e, t, n) {
      const r = e.getValue(), o = e.getParentNode(), u = r.tag ? e.call(n, "tag") : "", i = r.anchor ? e.call(n, "anchor") : "", a = kB(r, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !BB(e) ? zB(e, t.originalText) : "";
      return eB(["mappingValue" !== r.type && AB(r) ? eB([aB(uB, e.map(n, "leadingComments")), uB]) : "", u, u && i ? " " : "", i, u || i ? kB(r, ["sequence", "mapping"]) && !FB(r) ? uB : " " : "", FB(r) ? eB([1 === r.middleComments.length ? "" : uB, aB(uB, e.map(n, "middleComments")), uB]) : "", TB(e) ? eB(fB(t.originalText.slice(r.position.start.offset, r.position.end.offset).trimEnd(), lB)) : oB(MB(r, o, e, t, n)), SB(r) && !kB(r, ["document", "documentHead"]) ? cB(eB(["mappingValue" !== r.type || r.content ? " " : "", "mappingKey" === o.type && "mapping" === e.getParentNode(2).type && _B(r) ? "" : ZT, e.call(n, "trailingComment")])) : "", UB(r) ? jB("sequenceItem" === r.type ? 2 : 0, eB([uB, aB(uB, e.map(e => eB([hB(t.originalText, e.getValue(), DB) ? uB : "", n(e)]), "endComments"))])) : "", a]);
    },
    massageAstNode: function (e, t) {
      if (kB(t)) switch ((delete t.position, t.type)) {
        case "comment":
          if (gB(t.value)) return null;
          break;
        case "quoteDouble":
        case "quoteSingle":
          t.type = "quote";
      }
    },
    insertPragma: mB
  }, XB = {
    bracketSpacing: RC.bracketSpacing,
    singleQuote: RC.singleQuote,
    proseWrap: RC.proseWrap
  };
  var YB = [XC, Zv, uF, SF, oS, _T, {
    languages: [ks({
      name: "YAML",
      type: "data",
      color: "#cb171e",
      tmScope: "source.yaml",
      aliases: ["yml"],
      extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"],
      filenames: [".clang-format", ".clang-tidy", ".gemrc", "glide.lock", "yarn.lock"],
      aceMode: "yaml",
      codemirrorMode: "yaml",
      codemirrorMimeType: "text/x-yaml",
      languageId: 407
    }, e => ({
      since: "1.14.0",
      parsers: ["yaml"],
      vscodeLanguageIds: ["yaml", "ansible", "home-assistant"],
      filenames: e.filenames.filter(e => "yarn.lock" !== e)
    }))],
    printers: {
      yaml: GB
    },
    options: XB,
    parsers: {
      get yaml() {
        return ({}).parsers.yaml;
      }
    }
  }];
  const {version: KB} = n, {getSupportInfo: QB} = gt, ZB = YB.map(t => e(t, ["parsers"]));
  function eN(e, t = 1) {
    return (...n) => {
      const r = n[t] || ({}), o = r.plugins || [];
      return (n[t] = Object.assign({}, r, {
        plugins: [...ZB, ...Array.isArray(o) ? o : Object.values(o)]
      }), e(...n));
    };
  }
  const tN = eN(is.formatWithCursor);
  return {
    formatWithCursor: tN,
    format: (e, t) => tN(e, t).formatted,
    check(e, t) {
      const {formatted: n} = tN(e, t);
      return n === e;
    },
    doc: cn,
    getSupportInfo: eN(QB, 0),
    version: KB,
    util: Ns,
    __debug: {
      parse: eN(is.parse),
      formatAST: eN(is.formatAST),
      formatDoc: eN(is.formatDoc),
      printToDoc: eN(is.printToDoc),
      printDocToString: eN(is.printDocToString)
    }
  };
});

},{}]},["2FmRy","6fOLN"], "6fOLN", "parcelRequire427e")

//# sourceMappingURL=index.1397955d.js.map
