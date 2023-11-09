parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vIDP":[function(require,module,exports) {
"use strict";function e(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function i(e,i){for(var l=0;l<i.length;l++){var n=i[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,l,n){return l&&i(e.prototype,l),n&&i(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Cell=void 0;var n=function(){function i(l,n,t){e(this,i);var r=document.createElement("div");r.classList.add("field-cell"),l.append(r),this.x=n,this.y=t}return l(i,[{key:"linkTile",value:function(e){e.setXY(this.x,this.y),this.linkedTile=e}},{key:"unlinkTile",value:function(){this.linkedTile=null}},{key:"isEmpty",value:function(){return!this.linkedTile}},{key:"linkTileForMerge",value:function(e){e.setXY(this.x,this.y),this.linkedTileForMerge=e}},{key:"unlinkTileForMerge",value:function(){this.linkedTileForMerge=null}},{key:"hasTileForMerge",value:function(){return!!this.linkedTileForMerge}},{key:"canAccept",value:function(e){return this.isEmpty()||!this.hasTileForMerge()&&this.linkedTile.value===e.value}},{key:"mergeTiles",value:function(){this.linkedTile.setValue(this.linkedTile.value+this.linkedTileForMerge.value),this.linkedTileForMerge.removeFromDom(),this.unlinkTileForMerge()}},{key:"getValue",value:function(){var e;return(null===(e=this.linkedTile)||void 0===e?void 0:e.getValue())||0}}]),i}();exports.Cell=n;
},{}],"Xoal":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Grid=void 0;var e=require("./cell");function r(e){return l(e)||o(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,r){if(e){if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,r):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function l(e){if(Array.isArray(e))return u(e)}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function i(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function s(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,r,t){return r&&s(e.prototype,r),t&&s(e,t),e}var c=4,f=c*c,y=function(){function t(n){i(this,t),this.cells=[];for(var o=0;o<f;o++)this.cells.push(new e.Cell(n,o%c,Math.floor(o/c)));this.cellsGroupedByColumn=this.groupCellsByColumn(),this.cellsGroupedByReversedColumn=this.cellsGroupedByColumn.map(function(e){return r(e).reverse()}),this.cellsGroupedByRow=this.groupCellsByRow(),this.cellsGroupedByReversedRow=this.cellsGroupedByRow.map(function(e){return r(e).reverse()})}return a(t,[{key:"getRandomEmptyCell",value:function(){var e=this.cells.filter(function(e){return e.isEmpty()});return e[Math.floor(Math.random()*e.length)]}},{key:"groupCellsByColumn",value:function(){return this.cells.reduce(function(e,r){return e[r.x]=e[r.x]||[],e[r.x][r.y]=r,e},[])}},{key:"groupCellsByRow",value:function(){return this.cells.reduce(function(e,r){return e[r.y]=e[r.y]||[],e[r.y][r.x]=r,e},[])}}]),t}();exports.Grid=y;
},{"./cell":"vIDP"}],"xXVu":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Tile=void 0;var i=function(){function t(n){e(this,t),this.tileElement=document.createElement("div"),this.tileElement.classList.add("tile"),this.setValue(Math.random()>.5?2:4),n.append(this.tileElement)}return n(t,[{key:"setXY",value:function(e,t){this.x=e,this.y=t,this.tileElement.style.setProperty("--x",e),this.tileElement.style.setProperty("--y",t)}},{key:"setValue",value:function(e){this.value=e,this.tileElement.textContent=this.value,this.tileElement.classList.add("tile--".concat(e))}},{key:"getValue",value:function(){return this.value}},{key:"removeFromDom",value:function(){this.tileElement.remove()}}]),t}();exports.Tile=i;
},{}],"KIzB":[function(require,module,exports) {
"use strict";var e,n,t,r,i=require("./grid"),o=require("./tile"),s=document.getElementById("game-field"),c=new i.Grid(s),l=0,u=document.querySelector(".button"),d=document.querySelector(".game-score");function a(){f(),document.querySelector(".message-start").classList.add("hidden"),u.classList.remove("start"),u.innerHTML="Restart",u.classList.add("restart"),u.removeEventListener("click",a),u.addEventListener("click",f)}function f(){c.cells.forEach(function(e){e.isEmpty()||(e.linkedTile.removeFromDom(),e.unlinkTile())}),c.getRandomEmptyCell().linkTile(new o.Tile(s)),c.getRandomEmptyCell().linkTile(new o.Tile(s)),b(),l=0,d.innerHTML=l,document.querySelector(".message-lose").classList.add("hidden"),document.querySelector(".message-win").classList.add("hidden")}function m(){if(t<e&&Math.abs(e-t)>Math.abs(n-r)){if(!B())return void b();p()}if(t>e&&Math.abs(e-t)>Math.abs(n-r)){if(!G())return void b();E()}if(r<n&&Math.abs(n-r)>Math.abs(e-t)){if(!M())return void b();k()}if(r>n&&Math.abs(n-r)>Math.abs(e-t)){if(!q())return void b();w()}if(r!==n&&t!==e){var i=new o.Tile(s);c.getRandomEmptyCell().linkTile(i),M()||q()||B()||G()||document.querySelector(".message-lose").classList.remove("hidden"),b()}}u.addEventListener("click",a),s.addEventListener("touchstart",function(t){e=t.changedTouches[0].screenX,n=t.changedTouches[0].screenY},!1),s.addEventListener("touchend",function(e){t=e.changedTouches[0].screenX,r=e.changedTouches[0].screenY,m()},!1);var v="ArrowUp",h="ArrowDown",y="ArrowLeft",T="ArrowRight";function g(e){switch(e.key){case v:if(!M())return void b();k();break;case h:if(!q())return void b();w();break;case y:if(!B())return void b();p();break;case T:if(!G())return void b();E();break;default:return void b()}var n=new o.Tile(s);c.getRandomEmptyCell().linkTile(n),M()||q()||B()||G()||document.querySelector(".message-lose").classList.remove("hidden"),b()}function k(){R(c.cellsGroupedByColumn)}function w(){R(c.cellsGroupedByReversedColumn)}function p(){R(c.cellsGroupedByRow)}function E(){R(c.cellsGroupedByReversedRow)}function L(e){for(var n=0;n<e.length;n++)if(!e[n].isEmpty()){for(var t=e[n],r=void 0,i=n-1;i>=0&&e[i].canAccept(t.linkedTile);)r=e[i],i--;r&&(r.isEmpty()?r.linkTile(t.linkedTile):r.linkTileForMerge(t.linkedTile),t.unlinkTile())}}function R(e){e.forEach(function(e){return L(e)}),c.cells.forEach(function(e){e.hasTileForMerge()&&(e.mergeTiles(),l+=e.getValue(),d.innerHTML=l),2048===e.getValue()&&(document.querySelector(".message-win").classList.remove("hidden"),window.removeEventListener("keydown"))})}function b(){window.addEventListener("keydown",g,{once:!0})}function M(){return C(c.cellsGroupedByColumn)}function q(){return C(c.cellsGroupedByReversedColumn)}function B(){return C(c.cellsGroupedByRow)}function G(){return C(c.cellsGroupedByReversedRow)}function C(e){return e.some(function(e){return S(e)})}function S(e){return e.some(function(n,t){return 0!==t&&!n.isEmpty()&&e[t-1].canAccept(n.linkedTile)})}
},{"./grid":"Xoal","./tile":"xXVu"}]},{},["KIzB"], null)
//# sourceMappingURL=main.84f2d80c.js.map