parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"YGik":[function(require,module,exports) {
"use strict";function e(e){return a(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var n=0>t?0:t,r=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,r)).toFixed(n))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.upload=l;var c=function(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,i=document.createElement(t);r.length&&(n=i.classList).add.apply(n,e(r));return a&&(i.textContent=a),i};function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[],r=c("div",["preview__grid"]),a=document.querySelector(e),i=c("button",["btn"],"Open images"),l=c("button",["btn","primary"],"Download");l.style.display="none",t.multi&&a.setAttribute("multiple",!0),t.accept&&Array.isArray(t.accept)&&a.setAttribute("accept",t.accept.join(",")),a.insertAdjacentElement("afterend",r),a.insertAdjacentElement("afterend",l),a.insertAdjacentElement("afterend",i);i.addEventListener("click",function(){return a.click()}),a.addEventListener("change",function(e){e.target.files.length&&(n=Array.from(e.target.files),r.innerHTML="",l.style.display="inline-block",n.forEach(function(e){if(e.type.match("image")){var t=new FileReader;t.onload=function(t){var n=t.target.result;r.insertAdjacentHTML("afterbegin",'<div class="preview__img">\n                        <div class="preview__remove" data-name="'.concat(e.name,'">&times;</div>\n                        <img src="').concat(n,'" alt="').concat(e.name,'">\n                        <div class="preview__panel">\n                            <div class="name">').concat(e.name,'</div>\n                            <div class="size">Size: ').concat(o(e.size,0),"</div>\n                        </div>\n                    </div>\n                    "))},t.readAsDataURL(e)}}))}),r.addEventListener("click",function(e){if(e.target.dataset.name){var t=e.target.dataset.name;(n=n.filter(function(e){return e.name!==t})).length||(l.style.display="none");var a=r.querySelector('[data-name="'.concat(t,'"]')).closest(".preview__img");a.classList.add("removing-animation"),setTimeout(function(){return a.remove()},200)}})}
},{}],"A2T1":[function(require,module,exports) {
"use strict";var e=require("./upload.js");(0,e.upload)("#file",{multi:!0,accept:[".png",".jpg",".jpeg",".webp"]});
},{"./upload.js":"YGik"}]},{},["A2T1"], null)
//# sourceMappingURL=/app.0157a8d7.js.map