/*!
 * 
 * @bluecoaster455/dropdownjs v0.1.7
 * https://github.com/Bluecoaster455/dropdown-js
 * 
 * Copyright (c) Bluecoaster455
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("DropdownJS",[],t):"object"==typeof exports?exports.DropdownJS=t():e.DropdownJS=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),d=[];function u(e){for(var t=-1,n=0;n<d.length;n++)if(d[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s=n[a]||0,c="".concat(a," ").concat(s);n[a]=s+1;var l=u(c),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(d[l].references++,d[l].updater(f)):d.push({identifier:c,updater:v(f,t),references:1}),o.push(c)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var d=i(e.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(t)}return t}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),d=e.childNodes;d[t]&&e.removeChild(d[t]),d.length?e.insertBefore(i,d[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,w=0;function v(e,t){var n,o,r;if(t.singleton){var i=w++;n=h||(h=s(t)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=s(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=u(n[o]);d[r].references--}for(var i=a(e,t),s=0;s<n.length;s++){var c=u(n[s]);0===d[c].references&&(d[c].updater(),d.splice(c,1))}n=i}}}},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"DropdownJS",(function(){return i}));var o=function(){function e(e){this.$dropdown=e,this.$reference=document.body,this.$container=document.body,this.id=e.id}return e.prototype.moveTo=function(e,t){this.$reference=e;var n=this.$reference.getClientRects()[0],o=this.$dropdown.getClientRects()[0],r={left:5,top:5,width:window.innerWidth-10,height:window.innerHeight-10};if(void 0!==this.$container){var i=this.$container.getClientRects()[0];r.left=i.left,r.top=i.top,r.width=i.width,r.height=i.height}var d=n.left,u=n.top+n.height;switch("right"===t.align&&(d-=o.width-n.width),t.align){case"left":var a=r.left+r.width-o.width;d>a&&(d=a);break;case"right":d<r.left&&(d=r.left)}this.$dropdown.style.top=u+"px",this.$dropdown.style.left=d+"px"},e.prototype.isOpen=function(){return this.$dropdown.classList.contains("dd-shown")},e.prototype.show=function(){this.$dropdown.classList.add("dd-shown")},e.prototype.hide=function(){this.$dropdown.classList.remove("dd-shown")},e}(),r=function(e){this.message="[DropdownJS] Dropdown Id '"+e+"' does not exist!"},i=(n(0),function(){function e(){}return e.init=function(){var e=this;document.body.addEventListener("click",(function(t){var n=t.target,o=n.getAttribute("dropdown-id"),r=e.findByElement(n);if(e.dropdownInstances.forEach((function(e){(null===r&&null===o||null!==o&&e.id!==o)&&e.hide()})),null!==o){var i=n.getAttribute("dropdown-align");null===i&&(i="left"),e.isOpen(o)?e.hide(o):e.show(o,{align:null===i?"left":i,target:n})}null!==r&&null!==n.getAttribute("href")&&"A"===n.tagName&&r.hide()})),document.querySelectorAll("[dropdown]").forEach((function(t){t.classList.add("dd-wrapper");var n=new o(t),r=t.getAttribute("dropdown-container");if(null!=r){var i=document.querySelector(r);i instanceof HTMLElement&&(n.$container=i)}e.dropdownInstances.push(n)}))},e.findByElement=function(e){return null==e.getAttribute("dropdown")?null==e.parentElement?null:this.findByElement(e.parentElement):this.find(e.id)},e.find=function(e){var t=this.dropdownInstances.find((function(t){return t.id===e}));return void 0===t?null:t},e.isOpen=function(e){var t=this.find(e);if(null===t)throw new r(e);return t.isOpen()},e.show=function(e,t){var n=this.find(e);if(null===n)throw new r(e);var o=Object.assign({},{align:"left",target:document.body},t);return n.moveTo(o.target,o),n.show(),n},e.hide=function(e){if(void 0!==e){var t=this.find(e);if(null===t)throw new r(e);return t.$dropdown.classList.remove("dd-shown"),t.hide(),t}return this.dropdownInstances.forEach((function(e){e.hide()})),null},e.dropdownInstances=[],e}());i.init()}]).DropdownJS}));
//# sourceMappingURL=DropdownJS.js.map