(()=>{"use strict";var n={462:(n,e,r)=>{r.d(e,{Z:()=>p});var t=r(645),o=r.n(t),a=r(667),i=r.n(a),s=new URL(r(705),r.b),c=o()((function(n){return n[1]})),l=i()(s);c.push([n.id,"@font-face {\r\n    font-family: playstation;\r\n    src: url("+l+");\r\n}\r\n\r\n* {\r\n    font-family: playstation;\r\n    font-size: 100%;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.bg {\r\n    position: absolute;\r\n    width: 1920px;\r\n    height: 1080px;\r\n    /* background: url('../../../images/zelda_layout_carrerass.png') */\r\n}\r\n\r\n.runners-container {\r\n    position: absolute;\r\n    left: 30px;\r\n    top: 26px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* gap: 90px; */\r\n    color: white;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.runners-container span {\r\n    display: flex;\r\n    gap: 6px;\r\n    margin-bottom: 90px;\r\n}\r\n\r\n.runners-container span i {\r\n    margin-top: 4px;\r\n}\r\n\r\n.games-container {\r\n    position: absolute;\r\n    left: 338px;\r\n    top: 22px;\r\n    font-size: 20px;\r\n    color: white;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(2, 1fr);\r\n    width: 1582px;\r\n    height: 1010px;\r\n}\r\n\r\n\r\n/* .runner3 {\r\n\tposition: relative;\r\n\tleft: 100px;\r\n}\r\n\r\n.runner2 {\r\n\tposition: relative;\r\n\ttop: -8px;\r\n\tleft: 205px;\r\n}\r\n\r\n.runner4 {\r\n\tposition: relative;\r\n\ttop: 27px;\r\n\tleft: 77px;\r\n} */\r\n\r\n.info-container {\r\n    width: 1711px;\r\n    height: 35px;\r\n    position: absolute;\r\n    left: 104px;\r\n    top: 1039px;\r\n    display: flex;\r\n}\r\n\r\n.info {\r\n    position: relative;\r\n    margin-top: 6px;\r\n    width: 250px;\r\n    height: 21px;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    font-size: 19px;\r\n}\r\n\r\n.game {\r\n    padding-left: 36px;\r\n}\r\n\r\n.runner,\r\n.category,\r\n.platform,\r\n.year,\r\n.estimate {\r\n    width: 292px;\r\n    padding-left: 53px;\r\n}",""]);const p=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);t&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],p=a[l]||0,u="".concat(l," ").concat(p);a[l]=p+1;var f=r(u),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(e[f].references++,e[f].updater(d)):e.push({identifier:u,updater:o(d,t),references:1}),i.push(u)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var c=t(n,o),l=0;l<a.length;l++){var p=r(a[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t=r.css,o=r.media,a=r.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},705:(n,e,r)=>{n.exports=r.p+"images/a1fcdab69ff68005c916.ttf"}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),a=r(569),i=r.n(a),s=r(565),c=r.n(s),l=r(216),p=r.n(l),u=r(589),f=r.n(u),d=r(462),h={};h.styleTagTransform=f(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),e()(d.Z,h),d.Z&&d.Z.locals&&d.Z.locals;const m=document.querySelectorAll(".runner-name"),g=document.querySelectorAll(".runner-js"),x=document.querySelectorAll(".runner-name-container"),v=document.querySelectorAll(".info"),y=nodecg.Replicant("generalRunInfo"),b=nodecg.Replicant("players");NodeCG.waitForReplicants(y,b).then((()=>{b.on("change",(n=>{for(let n=0;n<m.length;n++)x[n].style.display="none",m[n].textContent="",g[n].textContent="";for(let e=0;e<n.playing;e++)x[e].style.display="flex",m[e].textContent=n.twitch[e],g[e].textContent=n.twitch[e]})),y.on("change",(n=>{v[0].textContent=n.game,v[2].textContent=`Categoría: ${n.category}`,v[3].textContent=`Plataforma: ${n.platform}`,v[4].textContent=`Año: ${n.year}`,v[5].textContent=`Estimado: ${n.estimate}`}))}))})()})();