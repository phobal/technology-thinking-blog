/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-a3934fd4707e1982fb96.js"
  },
  {
    "url": "app-e7860e738958d6947bfb.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-6343b08ae213af306e85.js"
  },
  {
    "url": "index.html",
    "revision": "2b8bf8f9307d9401a102f9b2387d98e9"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ea02560e09f2eed8e17d8bff5b3fcfec"
  },
  {
    "url": "component---src-pages-index-tsx.0e4338761429b4eb16ac.css"
  },
  {
    "url": "component---src-pages-index-tsx-f1037b88298721df2c32.js"
  },
  {
    "url": "0-2d0cb1e440759cfe9af4.js"
  },
  {
    "url": "static/d/615/path---index-6a9-9BXHHRY2wDNKZb5y14MAV7nTY.json",
    "revision": "7ccf16eefe7672a87e2d306329a84193"
  },
  {
    "url": "component---src-pages-404-tsx.0e4338761429b4eb16ac.css"
  },
  {
    "url": "component---src-pages-404-tsx-209b3683fe53a3b73433.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "253982a93ba57829957c523b8fec144d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});