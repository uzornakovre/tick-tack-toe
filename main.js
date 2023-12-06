(()=>{"use strict";var n={705:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},742:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},738:n=>{n.exports=function(n){return n[1]}},545:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(738),o=t.n(r),i=t(705),a=t.n(i),l=t(570),s=t(976),c=a()(o());c.i(l.Z),c.i(s.Z),c.push([n.id,'.page{position:relative;margin:0;padding:0;width:100%;font-family:"Europa Brush",Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-style:normal;font-size:40px;background-color:#f5f5f5;color:#000;text-align:center}@media screen and (max-width: 767px){.page{font-size:30px}}.game{width:620px;margin:0 auto;user-select:none}@media screen and (max-width: 767px){.game{width:100%}}.game__title{margin:15px 0;font-size:60px;font-weight:400}@media screen and (max-width: 767px){.game__title{font-size:40px}}.game__message{margin:10px 0}.game__playfield{position:relative;display:grid;width:600px;height:600px;margin:15px auto;grid-template-columns:repeat(3, 1fr);grid-template-rows:repeat(3, 1fr);border:3px solid #000;pointer-events:auto}@media screen and (max-width: 767px){.game__playfield{width:300px;height:auto;grid-template-columns:repeat(3, 100px);grid-template-rows:repeat(3, 100px)}}.game__playfield_blocked{pointer-events:none}.game__cell{display:flex;align-items:center;justify-content:center;border:1px solid #000;cursor:pointer;transition:all .2s linear;font-size:120px;text-transform:uppercase}.game__cell:hover{background-color:#d3d3d3}@media screen and (max-width: 767px){.game__cell{font-size:60px}}.game__setup{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:594px;height:594px;display:flex;flex-direction:column;align-items:center;gap:20px;justify-content:center;background-color:#f5f5f5}@media screen and (max-width: 767px){.game__setup{width:300px;height:300px}}.game__opponent{min-width:300px;background-color:#f5f5f5;border:none;border-radius:8px;background-color:#d3d3d3;padding:4px;cursor:pointer;text-align:center}@media screen and (max-width: 767px){.game__opponent{min-width:100px;width:90%}}.game__button{border:none;border-radius:8px;background-color:#000;color:#f5f5f5;padding:8px;cursor:pointer;transition:all .2s linear;text-transform:uppercase}.game__button:hover{opacity:.7}.game__button:active{opacity:.5}.inactive{display:none}',""]);const d=c},976:(n,e,t)=>{t.d(e,{Z:()=>f});var r=t(738),o=t.n(r),i=t(705),a=t.n(i),l=t(742),s=t.n(l),c=new URL(t(68),t.b),d=a()(o()),u=s()(c);d.push([n.id,`@font-face {\n  font-family: "Europa Brush";\n  font-style: normal;\n  font-weight: 400;\n  src:\n  url(${u}) format("woff");\n}`,""]);const f=d},570:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(738),o=t.n(r),i=t(705),a=t.n(i)()(o());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const l=a},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],l=0;l<n.length;l++){var s=n[l],c=r.base?s[0]+r.base:s[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var f=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var m=o(p,r);r.byIndex=l,e.splice(l,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=t(i[a]);e[l].references--}for(var s=r(n,o),c=0;c<i.length;c++){var d=t(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},68:(n,e,t)=>{n.exports=t.p+"190d89634e7f1d5af08e.woff"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="",t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),l=t(565),s=t.n(l),c=t(216),d=t.n(c),u=t(589),f=t.n(u),p=t(545),m={};m.styleTagTransform=f(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var h="X",g="player",b=[[0,4,8],[2,4,6],[3,4,5],[1,4,7],[0,1,2],[0,3,6],[6,7,8],[2,5,8]];function y(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=v(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){l=!0,i=n},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw i}}}}function v(n,e){if(n){if("string"==typeof n)return x(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?x(n,e):void 0}}function x(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var w=document.querySelector(".game__playfield"),_=document.querySelectorAll(".game__cell"),C=document.querySelector(".game__setup"),S=document.querySelector(".game__message"),k=document.querySelector("#play_again"),E=null,z=!1,I=null,A=null,T=!1,L=function(n){n.preventDefault(),I=n.target.opponent.value,j()},O=function(n){R("".concat(E=n,", it's your turn!"))},R=function(n){n?S.classList.remove("inactive"):S.classList.add("inactive"),S.textContent=n},M=function(){z=!0,C.classList.add("inactive")},j=function(){T=!T,M(),A=Array(9).fill(""),_.forEach((function(n){return n.textContent=""})),O(h),I===g||T||D(I)},F=function(n){var e=n.target;z&&!e.textContent&&(e.textContent=E,A[e.dataset.cellIndex]=E,P()?q():(O(E===h?"O":h),localStorage.setItem("game",JSON.stringify({playfield:A,currentPlayer:E,playMode:I,firstTurn:T})),I!==g&&(!T&&E===h||T&&"O"===E)&&(w.classList.add("game__playfield_blocked"),setTimeout((function(){D(I),z&&w.classList.remove("game__playfield_blocked")}),500))))},Z=function(n){var e,t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all",o=(t=3,function(n){if(Array.isArray(n))return n}(e=n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i,a,l=[],s=!0,c=!1;try{if(i=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=i.call(t)).done)&&(l.push(r.value),l.length!==e);s=!0);}catch(n){c=!0,o=n}finally{try{if(!s&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(e,t)||v(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1],l=o[2],s="opponent"===r?E===h?"O":h:E,c=A[i],d=A[a],u=A[l];if("all"===r)return![c,d,u].includes("")&&c===d&&d===u;if("opponent"===r||"current"===r){if(c===s&&d===s&&""===u)return l;if(c===s&&u===s&&""===d)return a;if(d===s&&u===s&&""===c)return i}if("mixed"===r){if(c.length&&d.length&&""===u)return l;if(c.length&&u.length&&""===d)return a;if(d.length&&u.length&&""===c)return i}},P=function(){var n,e=y(b);try{for(e.s();!(n=e.n()).done;){var t=n.value;if(Z(t,"all"))return R("The winner is ".concat(E," !")),!0}}catch(n){e.e(n)}finally{e.f()}if(!A.includes(""))return R("Draw!"),!0},q=function(){z=!1,w.classList.add("game__playfield_blocked"),k.classList.remove("inactive"),localStorage.removeItem("game")},N=function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Math.floor(Math.random()*_.length);""===_[t].textContent&&t!==e?_[t].click():n()},U=function(n){var e,t,r=y(b);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(e=Z(o,n))break}}catch(n){r.e(n)}finally{r.f()}return{targetCell:e,clickTargetCell:function(){_[e].click()}}},D=function(n){var e=U("opponent").clickTargetCell,t=U("current").clickTargetCell,r=U("mixed").targetCell;"easy"===n&&N(),"medium"===n&&(U("opponent").targetCell?e():N()),"hard"===n&&(""===_[4].textContent?_[4].click():U("current").targetCell?t():U("opponent").targetCell?e():r&&A.join("").length>7?N(r):N())};window.addEventListener("load",(function(){(function(){var n=JSON.parse(localStorage.getItem("game"));if(localStorage&&n){M(),I=n.playMode,A=n.playfield,T=n.firstTurn;for(var e=0;e<_.length;e++)_[e].textContent=A[e];O(n.currentPlayer)}})(),_.forEach((function(n){n.addEventListener("click",F)})),C.addEventListener("submit",L)})),k.addEventListener("click",(function(){R(""),C.classList.remove("inactive"),w.classList.remove("game__playfield_blocked"),k.classList.add("inactive")}))})()})();