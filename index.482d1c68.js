// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8BlMY":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5cb08447482d1c68";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"j6eqU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _player = require("./player/player");
var _playerDefault = parcelHelpers.interopDefault(_player);
var _background = require("./environment/background");
var _backgroundDefault = parcelHelpers.interopDefault(_background);
var _sounds = require("./sound/sounds");
var _enemies = require("./enemies/enemies");
var _ui = require("./ui/UI");
var _input = require("./controls/input");
window.addEventListener("load", ()=>{
    const loading = document.getElementById("loading");
    loading.style.display = "none";
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    const CANVAS_WIDTH = canvas.width = 2400;
    const CANVAS_HEIGHT = canvas.height = 720;
    class Game {
        constructor(width, height){
            /**  Debug Mode  **/ this.debug = false;
            this.width = width;
            this.height = height;
            this.groundMargin = 40;
            this.maxSpeed = 8;
            this.maxPower = 22000;
            this.maxParticles = 128;
            this.splashParticles = 30;
            this.winningScore = 21;
            this.enemyInterval = 1000;
            this.fontColor = "black";
            this.gameOver = false;
            this.speed = 0;
            this.enemies = [];
            this.particles = [];
            this.collisions = [];
            this.floatingMessages = [];
            this.enemyTimer = 0;
            this.score = 0;
            this.maxTime = 40000;
            this.time = this.maxTime;
            this.lives = 5;
            this.background = new (0, _backgroundDefault.default)(this);
            this.player = new (0, _playerDefault.default)(this);
            this.input = new (0, _input.InputHandler)(this);
            this.UI = new (0, _ui.UI)(this);
            this.sounds = new (0, _sounds.Sounds)(this);
            this.player.currentState = this.player.states[0];
            this.player.currentState.enter();
        }
        update(deltaTime) {
            this.time -= deltaTime;
            if (this.time <= 0) this.gameOver = true;
            this.background.update();
            this.player.update(this.input.keys, deltaTime);
            // handle enemies
            if (this.enemyTimer > this.enemyInterval) {
                this.addEnemy();
                this.enemyTimer = 0;
            } else this.enemyTimer += deltaTime;
            this.enemies.forEach((enemy)=>{
                enemy.update(deltaTime);
            });
            // handle messages
            this.floatingMessages.forEach((msg)=>{
                msg.update();
            });
            // handle particles
            this.particles.forEach((particle)=>{
                particle.update();
            });
            if (this.particles.length > this.maxParticles) this.particles.length = this.maxParticles;
            // handle collision sprites
            this.collisions.forEach((collision)=>{
                collision.update(deltaTime);
            });
            this.enemies = this.enemies.filter((enemy)=>!enemy.markedForDeletion);
            this.particles = this.particles.filter((particle)=>!particle.markedForDeletion);
            this.collisions = this.collisions.filter((collision)=>!collision.markedForDeletion);
            this.floatingMessages = this.floatingMessages.filter((msg)=>!msg.markedForDeletion);
        }
        draw(ctx) {
            this.debug;
            this.background.draw(ctx);
            this.player.draw(ctx);
            this.enemies.forEach((enemy)=>{
                enemy.draw(ctx);
            });
            this.particles.forEach((particle)=>{
                particle.draw(ctx);
            });
            this.collisions.forEach((collision)=>{
                collision.draw(ctx);
            });
            this.floatingMessages.forEach((msg)=>{
                msg.draw(ctx);
            });
            this.UI.draw(ctx);
        }
        addEnemy() {
            if (this.speed > 0 && Math.random() < 0.5) this.enemies.push(new (0, _enemies.GroundEnemy)(this));
            else if (this.speed > 0) this.enemies.push(new (0, _enemies.ClimbingEnemy)(this));
            this.enemies.push(new (0, _enemies.FlyingEnemy)(this));
        }
        start() {
            if (this.gameOver) this.reset();
            requestAnimationFrame(animate);
        }
        /* properties that will need to be reset when starting a new game */ reset() {
            this.gameOver = false;
            this.speed = 0;
            this.enemies = [];
            this.particles = [];
            this.collisions = [];
            this.floatingMessages = [];
            this.enemyTimer = 0;
            this.score = 0;
            this.time = this.maxTime;
            this.lives = 5;
            this.background = new (0, _backgroundDefault.default)(this);
            this.player = new (0, _playerDefault.default)(this);
            this.UI = new (0, _ui.UI)(this);
            this.player.currentState = this.player.states[0];
            this.player.currentState.enter();
        }
    }
    let game = new Game(CANVAS_WIDTH, CANVAS_HEIGHT);
    let lastTime = 0;
    function animate(timestamp) {
        // Update lastTime to catch up with the current timestamp
        if (!lastTime) lastTime = timestamp;
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        game.update(deltaTime);
        game.draw(ctx);
        if (!game.gameOver) requestAnimationFrame(animate);
        else lastTime = 0;
    }
    game.start();
});

},{"./player/player":"7YyeX","./environment/background":"a0EpZ","./sound/sounds":"6l6Bs","./enemies/enemies":"fL0y1","./ui/UI":"8Ufrb","./controls/input":"m0o1h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7YyeX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _playerStates = require("./playerStates");
var _collisionAnimation = require("../fx/collisionAnimation");
var _floatingMessages = require("../ui/floatingMessages");
class Player {
    constructor(game){
        this.game = game;
        this.width = 120;
        this.height = 89;
        this.x = 0;
        this.y = this.game.height - this.height - this.game.groundMargin;
        this.vy = 0;
        this.weight = 1;
        this.image = document.getElementById("player");
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = null;
        this.fps = 20;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.speed = 0;
        this.maxSpeed = this.game.maxSpeed * 0.2;
        this.states = [
            new (0, _playerStates.Sitting)(this.game),
            new (0, _playerStates.Running)(this.game),
            new (0, _playerStates.Jumping)(this.game),
            new (0, _playerStates.Falling)(this.game),
            new (0, _playerStates.Rolling)(this.game),
            new (0, _playerStates.Diving)(this.game),
            new (0, _playerStates.Hit)(this.game), 
        ];
        this.currentState = null;
        this.power = this.game.maxPower;
        this.powerDepleted = false;
    }
    update(input, deltaTime) {
        this.checkCollision();
        this.currentState.handleInput(input);
        // horizontal movement
        this.x += this.speed;
        if (input.includes("ArrowRight") && this.currentState !== this.states[6]) this.speed = this.maxSpeed;
        else if (input.includes("ArrowLeft") && this.currentState !== this.states[6]) this.speed = -this.maxSpeed;
        else this.speed = 0;
        // horizontal boundaries
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        // vertical movement
        this.y += this.vy;
        if (!this.onGround()) this.vy += this.weight;
        else this.vy = 0;
        // vertical boundaries
        if (this.y > this.game.height - this.height - this.game.groundMargin) this.y = this.game.height - this.height - this.game.groundMargin;
        // power bar
        if (this.currentState === this.states[4] || this.currentState === this.states[5]) {
            this.power -= 10 * deltaTime;
            this.game.UI.powerBar.updateHealth(this.power);
            if (this.power <= 0) {
                this.setState(6, 0);
                this.powerDepleted = true;
            }
        } else if (this.power < this.game.maxPower) {
            this.power += 10 * deltaTime;
            this.game.UI.powerBar.updateHealth(this.power);
            if (this.power >= this.game.maxPower) this.powerDepleted = false;
        }
        // sprite animation
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else this.frameTimer += deltaTime;
    }
    draw(ctx) {
        if (this.game.debug) ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    onGround() {
        return this.y >= this.game.height - this.height - this.game.groundMargin;
    }
    setState(state, speed) {
        this.currentState = this.states[state];
        this.game.speed = this.game.maxSpeed * speed;
        this.currentState.enter();
    }
    checkCollision() {
        this.game.enemies.forEach((enemy)=>{
            if (enemy.x < this.x + this.width && enemy.x + enemy.width > this.x && enemy.y < this.y + this.height && enemy.y + enemy.height > this.y) {
                // collision detected
                enemy.markedForDeletion = true;
                this.game.collisions.push(new (0, _collisionAnimation.CollisionAnimation)(this.game, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
                if (this.currentState === this.states[4] || this.currentState === this.states[5]) {
                    this.game.score++;
                    this.game.sounds.playSound("fireKill");
                    this.game.floatingMessages.push(new (0, _floatingMessages.FloatingMessage)("+1", enemy.x, enemy.y, 150, 50));
                    if (this.game.score >= this.game.winningScore) this.game.gameOver = true;
                } else {
                    // player takes damage
                    this.setState(6, 0);
                    this.game.score -= 2;
                    this.game.lives--;
                    this.game.floatingMessages.push(new (0, _floatingMessages.FloatingMessage)("-2", this.x, this.y, 150, 50));
                    if (this.game.lives <= 0) this.game.gameOver = true;
                }
            }
        });
    }
}
exports.default = Player;

},{"./playerStates":"7BnuN","../fx/collisionAnimation":"bqlBb","../ui/floatingMessages":"5GsaM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7BnuN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "State", ()=>State);
parcelHelpers.export(exports, "Sitting", ()=>Sitting);
parcelHelpers.export(exports, "Running", ()=>Running);
parcelHelpers.export(exports, "Jumping", ()=>Jumping);
parcelHelpers.export(exports, "Falling", ()=>Falling);
parcelHelpers.export(exports, "Rolling", ()=>Rolling);
parcelHelpers.export(exports, "Diving", ()=>Diving);
parcelHelpers.export(exports, "Hit", ()=>Hit);
var _particles = require("../fx/particles");
const states = {
    SITTING: 0,
    RUNNING: 1,
    JUMPING: 2,
    FALLING: 3,
    ROLLING: 4,
    DIVING: 5,
    HIT: 6
};
class State {
    constructor(state, game){
        this.state = state // debug
        ;
        this.game = game;
    }
}
class Sitting extends State {
    constructor(game){
        super("SITTING", game);
    }
    enter() {
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 13;
        this.game.player.frameY = 8;
    }
    handleInput(input) {
        if (input.includes("ArrowLeft") || input.includes("ArrowRight")) this.game.player.setState(states.RUNNING, 1);
        else if (input.includes("c") && !this.game.player.powerDepleted) this.game.player.setState(states.ROLLING, 2);
    }
}
class Running extends State {
    constructor(game){
        super("RUNNING", game);
    }
    enter() {
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 11;
        this.game.player.frameY = 3;
    }
    handleInput(input) {
        this.game.particles.push(new (0, _particles.Dust)(this.game, this.game.player.x + this.game.player.width * 0.6, this.game.player.y + this.game.player.height));
        if (input.includes("ArrowUp")) this.game.player.setState(states.JUMPING, 1);
        else if (input.includes("ArrowDown")) this.game.player.setState(states.SITTING, 0);
        else if (input.includes("c") && !this.game.player.powerDepleted) this.game.player.setState(states.ROLLING, 2);
    }
}
class Jumping extends State {
    constructor(game){
        super("JUMPING", game);
    }
    enter() {
        if (this.game.player.onGround()) this.game.player.vy -= 24;
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 9;
        this.game.player.frameY = 1;
    }
    handleInput(input) {
        if (this.game.player.vy > this.game.player.weight) this.game.player.setState(states.FALLING, 1);
        else if (input.includes("c") && !this.game.player.powerDepleted) this.game.player.setState(states.ROLLING, 2);
        else if (input.includes("ArrowDown")) this.game.player.setState(states.DIVING, 0);
    }
}
class Falling extends State {
    constructor(game){
        super("FALLING", game);
    }
    enter() {
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 9;
        this.game.player.frameY = 2;
    }
    handleInput(input) {
        if (this.game.player.onGround()) this.game.player.setState(states.RUNNING, 1);
        else if (input.includes("ArrowDown")) this.game.player.setState(states.DIVING, 0);
    }
}
class Rolling extends State {
    constructor(game){
        super("ROLLING", game);
    }
    enter() {
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 8;
        this.game.player.frameY = 7;
    }
    handleInput(input) {
        this.game.particles.unshift(new (0, _particles.Fire)(this.game, this.game.player.x + this.game.player.width * 0.5, this.game.player.y + this.game.player.height * 0.5));
        if (!input.includes("c") && this.game.player.onGround()) this.game.player.setState(states.RUNNING, 1);
        else if (!input.includes("c") && !this.game.player.onGround()) this.game.player.setState(states.FALLING, 1);
        else if (input.includes("c") && input.includes("ArrowUp") && this.game.player.onGround()) this.game.player.vy -= 27;
        else if (input.includes("ArrowDown") && !this.game.player.onGround()) this.game.player.setState(states.DIVING, 0);
    }
}
class Diving extends State {
    constructor(game){
        super("DIVING", game);
    }
    enter() {
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 8;
        this.game.player.frameY = 7;
        this.game.player.vy = 15;
    }
    handleInput(input) {
        this.game.particles.unshift(new (0, _particles.Fire)(this.game, this.game.player.x + this.game.player.width * 0.5, this.game.player.y + this.game.player.height * 0.5));
        if (this.game.player.onGround()) {
            this.game.player.setState(states.RUNNING, 1);
            for(let i = 0; i < this.game.splashParticles; i++)this.game.particles.unshift(new (0, _particles.Splash)(this.game, this.game.player.x + this.game.player.width * 0.5, this.game.player.y + this.game.player.height));
        } else if (input.includes("c") && this.game.player.onGround() && !this.game.player.powerDepleted) this.game.player.setState(states.ROLLING, 2);
    }
}
class Hit extends State {
    constructor(game){
        super("HIT", game);
        this.maxFrame = 7;
    }
    enter() {
        this.game.player.frameX = 0;
        this.game.player.maxFrame = this.maxFrame;
        this.game.player.frameY = 4;
    }
    handleInput(input) {
        if (this.game.player.frameX >= this.maxFrame && this.game.player.onGround()) this.game.player.setState(states.RUNNING, 1);
        else if (this.game.player.frameX >= this.maxFrame && !this.game.player.onGround()) this.game.player.setState(states.FALLING, 1);
    }
}

},{"../fx/particles":"4KoAe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4KoAe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Particle", ()=>Particle);
parcelHelpers.export(exports, "Dust", ()=>Dust);
parcelHelpers.export(exports, "Splash", ()=>Splash);
parcelHelpers.export(exports, "Fire", ()=>Fire);
class Particle {
    constructor(game){
        this.game = game;
        this.markedForDeletion = false;
        this.x = null;
        this.y = null;
        this.speedX = null;
        this.speedY = null;
        this.size = null;
    }
    update() {
        this.x -= this.speedX + this.game.speed;
        this.y -= this.speedY;
        this.size *= 0.95;
        if (this.size < 0.5) this.markedForDeletion = true;
    }
}
class Dust extends Particle {
    constructor(game, x, y){
        super(game);
        this.size = Math.random() * 10 + 10;
        this.x = x;
        this.y = y;
        this.speedX = Math.random();
        this.speedY = Math.random();
        this.color = "rgba(0, 0, 0, 0.2)";
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
class Splash extends Particle {
    constructor(game, x, y){
        super(game);
        this.size = Math.random() * 100 + 100;
        this.x = x - this.size * 0.4;
        this.y = y - this.size * 0.5;
        this.speedX = Math.random() * 6 - 4;
        this.speedY = Math.random() * 2 + 1;
        this.gravity = 0;
        this.image = document.getElementById("fire");
    }
    update() {
        super.update();
        this.gravity += 0.1;
        this.y += this.gravity;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
}
class Fire extends Particle {
    constructor(game, x, y){
        super(game);
        this.image = document.getElementById("fire");
        this.size = Math.random() * 100 + 100;
        this.x = x;
        this.y = y;
        this.speedX = 1;
        this.speedY = 1;
        this.angle = 0;
        this.va = Math.random() * 0.2 - 0.1;
    }
    update() {
        super.update();
        this.angle += this.va;
        this.x += Math.sin(this.angle * 5);
    }
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.drawImage(this.image, -this.size * 0.5, -this.size * 0.5, this.size, this.size);
        ctx.restore();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bqlBb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CollisionAnimation", ()=>CollisionAnimation);
class CollisionAnimation {
    constructor(game, x, y){
        this.game = game;
        this.image = document.getElementById("collisionAnimation");
        this.spriteWidth = 100;
        this.spriteHeight = 90;
        this.sizeModifier = Math.random() + 0.5;
        this.width = this.spriteWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x = x - this.width * 0.5;
        this.y = y - this.height * 0.5;
        this.frameX = 0;
        this.maxFrame = 4;
        this.markedForDeletion = false;
        this.fps = Math.random() * 10 + 5;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
    }
    update(deltaTime) {
        this.x -= this.game.speed;
        if (this.frameTimer > this.frameInterval) {
            this.frameX++;
            this.frameTimer = 0;
        } else this.frameTimer += deltaTime;
        if (this.frameX > this.maxFrame) this.markedForDeletion = true;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5GsaM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FloatingMessage", ()=>FloatingMessage);
class FloatingMessage {
    constructor(value, x, y, targetX, targetY){
        this.value = value;
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.markedForDeletion = false;
        this.timer = 0;
    }
    update() {
        this.x += (this.targetX - this.x) * 0.03;
        this.y += (this.targetY - this.y) * 0.03;
        if (this.timer > 100) this.markedForDeletion = true;
    }
    draw(ctx) {
        ctx.font = "20px Creepster, cursive";
        ctx.fillStyle = "white";
        ctx.fillText(this.value, this.x, this.y);
        ctx.fillStyle = "black";
        ctx.fillText(this.value, this.x - 2, this.y - 2);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a0EpZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* handle logic for each state separately */ class Layer {
    constructor(game, width, height, speedModifier, image){
        this.game = game;
        this.width = width;
        this.height = height;
        this.speedModifier = speedModifier;
        this.image = image;
        this.x = 0;
        this.y = 0;
    }
    update() {
        if (this.x < -this.width) this.x = 0;
        else this.x -= this.game.speed * this.speedModifier;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}
class Background {
    constructor(game){
        this.game = game;
        this.width = 2400;
        this.height = 720;
        this.layer1Image = document.getElementById("layer1");
        this.layer2Image = document.getElementById("layer2");
        this.layer3Image = document.getElementById("layer3");
        this.layer4Image = document.getElementById("layer4");
        this.layer5Image = document.getElementById("layer5");
        this.layer6Image = document.getElementById("layer6");
        this.layer7Image = document.getElementById("layer7");
        this.layer1 = new Layer(this.game, this.width, this.height, 0, this.layer1Image);
        this.layer2 = new Layer(this.game, this.width, this.height, 0.2, this.layer2Image);
        this.layer3 = new Layer(this.game, this.width, this.height, 0.4, this.layer3Image);
        this.layer4 = new Layer(this.game, this.width, this.height, 0.6, this.layer4Image);
        this.layer5 = new Layer(this.game, this.width, this.height, 0.8, this.layer5Image);
        this.layer6 = new Layer(this.game, this.width, this.height, 0.9, this.layer6Image);
        this.layer7 = new Layer(this.game, this.width, this.height, 1, this.layer7Image);
        this.backgroundLayers = [
            this.layer1,
            this.layer2,
            this.layer3,
            this.layer4,
            this.layer5,
            this.layer6,
            this.layer7, 
        ];
    }
    update() {
        this.backgroundLayers.forEach((layer)=>{
            layer.update();
        });
    }
    draw(ctx) {
        this.backgroundLayers.forEach((layer)=>{
            layer.draw(ctx);
        });
    }
}
exports.default = Background;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6l6Bs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sounds", ()=>Sounds);
class Sounds {
    sounds = {};
    constructor(game){
        this.game = game;
        this.sounds = {
            fireKill: document.getElementById("firekill_audio"),
            music: document.getElementById("music")
        };
        this.music = this.sounds["music"];
        this.music.volume = 0.35;
    }
    playMusic() {
        this.music.loop = true;
        if (!this.game.debug) this.music.play();
    }
    toggleMusic() {
        if (this.music.paused) this.music.play();
        else this.music.pause();
    }
    playSound(name) {
        this.sounds[name].currentTime = 0;
        this.sounds[name].volume = 0.4;
        this.sounds[name].play();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fL0y1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FlyingEnemy", ()=>FlyingEnemy);
parcelHelpers.export(exports, "GroundEnemy", ()=>GroundEnemy);
parcelHelpers.export(exports, "ClimbingEnemy", ()=>ClimbingEnemy);
class Enemy {
    constructor(){
        this.frameX = 0;
        this.frameY = 0;
        this.fps = 20;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.markedForDeletion = false;
        this.x = 0;
        this.y = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.maxFrame = 0;
        this.image = null;
        this.game = null;
        this.width = 0;
        this.height = 0;
    }
    update(deltaTime) {
        // movement
        this.x -= this.speedX + this.game.speed;
        this.y += this.speedY;
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else this.frameTimer += deltaTime;
        // check if offscreen
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}
class FlyingEnemy extends Enemy {
    constructor(game){
        super();
        this.game = game;
        this.width = 53;
        this.height = 44;
        this.x = this.game.width + Math.random() * this.game.width * 0.5;
        this.y = Math.random() * this.game.height * 0.5;
        this.speedX = Math.random() + 1;
        this.speedY = 0;
        this.maxFrame = 1;
        this.image = document.getElementById("enemy_fly");
        this.angle = 0;
        this.va = Math.random() * 0.1 + 0.1;
    }
    update(deltaTime) {
        super.update(deltaTime);
        this.angle += this.va;
        this.y += Math.sin(this.angle);
    }
}
class GroundEnemy extends Enemy {
    constructor(game){
        super();
        this.game = game;
        this.width = 80;
        this.height = 87;
        this.x = this.game.width;
        this.y = this.game.height - this.height - this.game.groundMargin;
        this.image = document.getElementById("enemy_plant");
        this.speedX = 0;
        this.speedY = 0;
        this.maxFrame = 17;
    }
    update(deltaTime) {
        super.update(deltaTime);
    }
}
class ClimbingEnemy extends Enemy {
    constructor(game){
        super();
        this.game = game;
        this.width = 160;
        this.height = 133;
        this.x = this.game.width;
        this.y = Math.random() * this.game.height * 0.5;
        this.image = document.getElementById("enemy_spider_big");
        this.speedX = 0;
        this.speedY = Math.random() > 0.5 ? 1 : -1;
        this.maxFrame = 9;
    }
    update(deltaTime) {
        super.update(deltaTime);
        if (this.y > this.game.height - this.height - this.game.groundMargin) this.speedY *= -1;
        if (this.y < -this.height) this.markedForDeletion = true;
    }
    draw(ctx) {
        super.draw(ctx);
        ctx.beginPath();
        ctx.moveTo(this.x + this.width / 2, 0);
        ctx.lineTo(this.x + this.width / 2, this.y + 50);
        ctx.stroke();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Ufrb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UI", ()=>UI);
var _powerBar = require("./powerBar");
class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = "Creepster, serif";
        this.livesImage = document.getElementById("lives");
        this.power = this.game.player.power;
        this.powerBar = new (0, _powerBar.PowerBar)(this.power);
    }
    draw(ctx) {
        ctx.save();
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowColor = "white";
        ctx.shadowBlur = 0;
        ctx.font = this.fontSize + "px " + this.fontFamily;
        ctx.textAlign = "left";
        ctx.fillStyle = this.game.fontColor;
        // score
        ctx.fillText("Score: " + this.game.score, 20, 50);
        // timer
        ctx.font = this.fontSize * 0.8 + "px " + this.fontFamily;
        ctx.fillText("Time: " + (this.game.time * 0.001).toFixed(1), 20, 80);
        // lives
        for(let i = 0; i < this.game.lives; i++)ctx.drawImage(this.livesImage, 30 * i + 20, 95, 25, 25);
        // health bar
        this.powerBar.show(ctx);
        // game over messages
        if (this.game.gameOver) {
            ctx.fillStyle = "#eb6123";
            ctx.textAlign = "center";
            ctx.font = this.fontSize * 2 + "px " + this.fontFamily;
            if (this.game.score >= this.game.winningScore) {
                ctx.fillText("You Win!", this.game.width * 0.5, this.game.height * 0.5 - 20);
                ctx.font = this.fontSize * 0.7 + "px " + this.fontFamily;
                ctx.fillStyle = "#000";
                ctx.fillText("What are creatures of the night afraid of?...\nYOU!!", this.game.width * 0.5, this.game.height * 0.5 + 20);
                ctx.fillText("( Press ENTER to restart game )", this.game.width * 0.5, this.game.height * 0.5 + 40);
            } else {
                ctx.fillStyle = "#eb6123";
                ctx.fillText("Love at first fright?", this.game.width * 0.5, this.game.height * 0.5 - 20);
                ctx.font = this.fontSize * 0.7 + "px " + this.fontFamily;
                ctx.fillStyle = "#000";
                ctx.fillText("Nope. Better luck next time!", this.game.width * 0.5, this.game.height * 0.5 + 20);
                ctx.fillText("( Press ENTER to restart game )", this.game.width * 0.5, this.game.height * 0.5 + 40);
            }
        }
        ctx.restore();
    }
}

},{"./powerBar":"1E3uT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1E3uT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PowerBar", ()=>PowerBar);
class PowerBar {
    constructor(maxHealth){
        this.x = 20;
        this.y = 130;
        this.width = 200;
        this.height = 20;
        this.maxHealth = maxHealth;
        this.maxWidth = this.width;
        this.health = maxHealth;
        this.color = "green";
    }
    show(ctx) {
        ctx.strokeStyle = "#333";
        ctx.lineWidth = 5;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeRect(this.x, this.y, this.maxWidth, this.height);
    }
    updateHealth(val) {
        this.health = val;
        this.width = this.maxWidth * (this.health / this.maxHealth);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"m0o1h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InputHandler", ()=>InputHandler);
class InputHandler {
    constructor(game){
        this.game = game;
        this.keys = [];
        this.keyPressed = false;
        this.listenFor = [
            "ArrowUp",
            "ArrowRight",
            "ArrowDown",
            "ArrowLeft",
            "c"
        ];
        window.addEventListener("keydown", (e)=>{
            if (this.listenFor.includes(e.key) && this.keys.indexOf(e.key) === -1) {
                if (!this.keyPressed) this.game.sounds.playMusic();
                this.keyPressed = true;
                this.keys.push(e.key);
            } else if (e.key === "d") ;
            else if (e.key === "Enter" && this.game.gameOver) this.game.start();
            else if (e.key === "m") this.game.sounds.toggleMusic();
        });
        window.addEventListener("keyup", (e)=>{
            if (this.listenFor.includes(e.key)) this.keys.splice(this.keys.indexOf(e.key), 1);
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8BlMY","j6eqU"], "j6eqU", "parcelRequireaf9a")

//# sourceMappingURL=index.482d1c68.js.map
