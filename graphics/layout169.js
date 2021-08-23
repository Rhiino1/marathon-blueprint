(()=>{"use strict";var t={199:(t,e,n)=>{n.d(e,{Z:()=>f});var r=n(645),o=n.n(r),a=n(667),i=n.n(a),c=new URL(n(545),n.b),s=new URL(n(825),n.b),u=o()((function(t){return t[1]})),l=i()(c),p=i()(s);u.push([t.id,"@font-face {\r\n\tfont-family: windows;\r\n\tsrc: url("+l+");\r\n}\r\n\r\n* {\r\n\tfont-family: windows;\r\n\tfont-size: 100%;\r\n\tmargin: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.bg {\r\n\tposition: absolute;\r\n\twidth: 1920px;\r\n\theight: 1080px;\r\n\tbackground: url("+p+")\r\n}\r\n\r\n.info-container {\r\n\twidth: 1711px;\r\n\theight: 35px;\r\n\tposition: absolute;\r\n\tleft: 104px;\r\n\ttop: 1039px;\r\n\tdisplay: flex;\r\n\t\r\n\r\n}\r\n\r\n.info {\r\n\tposition: relative;\r\n\tmargin-top: 6px;\r\n\twidth: 250px;\r\n\theight: 21px;\r\n\ttext-overflow: ellipsis;\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\tfont-size: 18px;\r\n}\r\n\r\n.game {\r\n\tpadding-left: 36px;\r\n}\r\n\r\n.runner, .category, .platform, .year, .estimate {\r\n\twidth: 292px;\r\n\tpadding-left: 53px;\r\n}\r\n",""]);const f=u},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var f=n(p),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(e[f].references++,e[f].updater(d)):e.push({identifier:p,updater:o(d,r),references:1}),i.push(p)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),u=0;u<a.length;u++){var l=n(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r=n.css,o=n.media,a=n.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},545:(t,e,n)=>{t.exports=n.p+"images/1418bf0ef20f202d5c85.TTF"},825:(t,e,n)=>{t.exports=n.p+"images/3c7cecebe0ccd05a2528.png"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),u=n(216),l=n.n(u),p=n(589),f=n.n(p),d=n(199),h={};h.styleTagTransform=f(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(d.Z,h),d.Z&&d.Z.locals&&d.Z.locals;const m=document.querySelectorAll(".info"),g=nodecg.Replicant("generalRunInfo"),v=nodecg.Replicant("players");NodeCG.waitForReplicants(g,v).then((()=>{v.on("change",(t=>{m[1].textContent=`Runner: ${t.twitch[0]}`})),g.on("change",(t=>{m[0].textContent=t.game,m[2].textContent=`Categoría: ${t.category}`,m[3].textContent=`Plataforma: ${t.platform}`,m[4].textContent=`Estimado: ${t.estimate}`}))}))})()})();