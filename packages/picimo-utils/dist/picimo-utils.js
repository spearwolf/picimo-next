/*!
@file @picimo/utils - part of the hottest webgl library on earth ::( picture-in-motion ):: make sprites & shaders fun again ;-)
@author Wolfger Schramm <wolfger@spearwolf.de>
@version 0.0.1

Copyright 2016-2018 Wolfger Schramm

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.PicimoUtils={})}(this,function(t){"use strict";var n=function(t){return"object"==typeof t?null!==t:"function"==typeof t},r=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t},e=function(t){try{return!!t()}catch(t){return!0}},o=!e(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});function i(t,n){return t(n={exports:{}},n.exports),n.exports}var u,c,a,f,s,l,p,h=i(function(t){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)}),y=h.document,v=n(y)&&n(y.createElement),g=function(t){return v?y.createElement(t):{}},d=!o&&!e(function(){return 7!=Object.defineProperty(g("div"),"a",{get:function(){return 7}}).a}),b=function(t,r){if(!n(t))return t;var e,o;if(r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if(!r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")},m=Object.defineProperty,S={f:o?Object.defineProperty:function(t,n,e){if(r(t),n=b(n,!0),r(e),d)try{return m(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},O=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},_=o?function(t,n,r){return S.f(t,n,O(1,r))}:function(t,n,r){return t[n]=r,t},x={}.hasOwnProperty,w=function(t,n){return x.call(t,n)},P=0,j=Math.random(),E=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++P+j).toString(36))},L=i(function(t){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)}),M=(L.version,i(function(t){var n=E("src"),r=Function.toString,e=(""+r).split("toString");L.inspectSource=function(t){return r.call(t)},(t.exports=function(t,r,o,i){var u="function"==typeof o;u&&(w(o,"name")||_(o,"name",r)),t[r]!==o&&(u&&(w(o,n)||_(o,n,t[r]?""+t[r]:e.join(String(r)))),t===h?t[r]=o:i?t[r]?t[r]=o:_(t,r,o):(delete t[r],_(t,r,o)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[n]||r.call(this)})})),T=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},k=i(function(t){var n=h["__core-js_shared__"]||(h["__core-js_shared__"]={});(t.exports=function(t,r){return n[t]||(n[t]=void 0!==r?r:{})})("versions",[]).push({version:L.version,mode:"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),A=i(function(t){var n=k("wks"),r=h.Symbol,e="function"==typeof r;(t.exports=function(t){return n[t]||(n[t]=e&&r[t]||(e?r:E)("Symbol."+t))}).store=n}),I={}.toString,C=function(t){return I.call(t).slice(8,-1)},F=A("match"),R=function(t){var r;return n(t)&&(void 0!==(r=t[F])?!!r:"RegExp"==C(t))};c=2,a=function(t,n,r){var e=R,o=r,i=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var u=void 0===/()??/.exec("")[1];r=function(t,n){var r=String(this);if(void 0===t&&0===n)return[];if(!e(t))return o.call(r,t,n);var c,a,f,s,l,p=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),y=0,v=void 0===n?4294967295:n>>>0,g=new RegExp(t.source,h+"g");for(u||(c=new RegExp("^"+g.source+"$(?!\\s)",h));(a=g.exec(r))&&!((f=a.index+a[0].length)>y&&(p.push(r.slice(y,a.index)),!u&&a.length>1&&a[0].replace(c,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a.length>1&&a.index<r.length&&i.apply(p,a.slice(1)),s=a[0].length,y=f,p.length>=v));)g.lastIndex===a.index&&g.lastIndex++;return y===r.length?!s&&g.test("")||p.push(""):p.push(r.slice(y)),p.length>v?p.slice(0,v):p}}else"0".split(void 0,0).length&&(r=function(t,n){return void 0===t&&0===n?[]:o.call(this,t,n)});return[function(e,o){var i=t(this),u=null==e?void 0:e[n];return void 0!==u?u.call(e,i,o):r.call(String(i),e,o)},r]},f=A(u="split"),s=a(T,f,""[u]),l=s[0],p=s[1],e(function(){var t={};return t[f]=function(){return 7},7!=""[u](t)})&&(M(String.prototype,u,l),_(RegExp.prototype,f,2==c?function(t,n){return p.call(t,this,n)}:function(t){return p.call(t,this)}));var G,N=function(t,n,r){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}},W={f:{}.propertyIsEnumerable},D=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==C(t)?t.split(""):Object(t)},V=function(t){return D(T(t))},H=Object.getOwnPropertyDescriptor,B={f:o?H:function(t,n){if(t=V(t),n=b(n,!0),d)try{return H(t,n)}catch(t){}if(w(t,n))return O(!W.f.call(t,n),t[n])}},U=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")},z={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=N(Function.call,B.f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return U(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:U}.set,$=Math.ceil,q=Math.floor,J=function(t){return isNaN(t=+t)?0:(t>0?q:$)(t)},K=Math.min,Q=function(t){return t>0?K(J(t),9007199254740991):0},X=Math.max,Y=Math.min,Z=k("keys"),tt=function(t){return Z[t]||(Z[t]=E(t))},nt=(G=!1,function(t,n,r){var e,o=V(t),i=Q(o.length),u=function(t,n){return(t=J(t))<0?X(t+n,0):Y(t,n)}(r,i);if(G&&n!=n){for(;i>u;)if((e=o[u++])!=e)return!0}else for(;i>u;u++)if((G||u in o)&&o[u]===n)return G||u||0;return!G&&-1}),rt=tt("IE_PROTO"),et=function(t,n){var r,e=V(t),o=0,i=[];for(r in e)r!=rt&&w(e,r)&&i.push(r);for(;n.length>o;)w(e,r=n[o++])&&(~nt(i,r)||i.push(r));return i},ot="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),it=ot.concat("length","prototype"),ut={f:Object.getOwnPropertyNames||function(t){return et(t,it)}},ct=A("species"),at=S.f,ft=ut.f,st=h.RegExp,lt=st,pt=st.prototype,ht=/a/g,yt=/a/g,vt=new st(ht)!==ht;if(o&&(!vt||e(function(){return yt[A("match")]=!1,st(ht)!=ht||st(yt)==yt||"/a/i"!=st(ht,"i")}))){st=function(t,e){var o,i,u,c,a=this instanceof st,f=R(t),s=void 0===e;return!a&&f&&t.constructor===st&&s?t:(o=vt?new lt(f&&!s?t.source:t,e):lt((f=t instanceof st)?t.source:t,f&&s?function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}.call(t):e),i=st,(c=(a?this:pt).constructor)!==i&&"function"==typeof c&&(u=c.prototype)!==i.prototype&&n(u)&&z&&z(o,u),o)};for(var gt=function(t){t in st||at(st,t,{configurable:!0,get:function(){return lt[t]},set:function(n){lt[t]=n}})},dt=ft(lt),bt=0;dt.length>bt;)gt(dt[bt++]);pt.constructor=st,st.prototype=pt,M(h,"RegExp",st)}!function(t){var n=h[t];o&&n&&!n[ct]&&S.f(n,ct,{configurable:!0,get:function(){return this}})}("RegExp");var mt=new RegExp(/(.+)\[(\d+)\]$/),St=function(t,n,r){var e,o,i,u,c=t&St.F,a=t&St.G,f=t&St.S,s=t&St.P,l=t&St.B,p=a?h:f?h[n]||(h[n]={}):(h[n]||{}).prototype,y=a?L:L[n]||(L[n]={}),v=y.prototype||(y.prototype={});for(e in a&&(r=n),r)i=((o=!c&&p&&void 0!==p[e])?p:r)[e],u=l&&o?N(i,h):s&&"function"==typeof i?N(Function.call,i):i,p&&M(p,e,i,t&St.U),y[e]!=i&&_(y,e,u),s&&v[e]!=i&&(v[e]=i)};h.core=L,St.F=1,St.G=2,St.S=4,St.P=8,St.B=16,St.W=32,St.U=64,St.R=128;var Ot=St,_t=A("match"),xt="".startsWith;Ot(Ot.P+Ot.F*function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[_t]=!1,!"/./"[t](n)}catch(t){}}return!0}("startsWith"),"String",{startsWith:function(t){var n=function(t,n,r){if(R(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(T(t))}(this,t,"startsWith"),r=Q(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),e=String(t);return xt?xt.call(n,e,r):n.slice(r,r+e.length)===e}});var wt=Math.PI/180,Pt=A("unscopables"),jt=Array.prototype;null==jt[Pt]&&_(jt,Pt,{});var Et=function(t){jt[Pt][t]=!0},Lt=function(t,n){return{value:n,done:!!t}},Mt={},Tt=Object.keys||function(t){return et(t,ot)},kt=o?Object.defineProperties:function(t,n){r(t);for(var e,o=Tt(n),i=o.length,u=0;i>u;)S.f(t,e=o[u++],n[e]);return t},At=h.document,It=At&&At.documentElement,Ct=tt("IE_PROTO"),Ft=function(){},Rt=function(){var t,n=g("iframe"),r=ot.length;for(n.style.display="none",It.appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),Rt=t.F;r--;)delete Rt.prototype[ot[r]];return Rt()},Gt=Object.create||function(t,n){var e;return null!==t?(Ft.prototype=r(t),e=new Ft,Ft.prototype=null,e[Ct]=t):e=Rt(),void 0===n?e:kt(e,n)},Nt=S.f,Wt=A("toStringTag"),Dt=function(t,n,r){t&&!w(t=r?t:t.prototype,Wt)&&Nt(t,Wt,{configurable:!0,value:n})},Vt={};_(Vt,A("iterator"),function(){return this});var Ht=function(t,n,r){t.prototype=Gt(Vt,{next:O(1,r)}),Dt(t,n+" Iterator")},Bt=function(t){return Object(T(t))},Ut=tt("IE_PROTO"),zt=Object.prototype,$t=Object.getPrototypeOf||function(t){return t=Bt(t),w(t,Ut)?t[Ut]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?zt:null},qt=A("iterator"),Jt=!([].keys&&"next"in[].keys()),Kt=function(){return this},Qt=function(t,n,r,e,o,i,u){Ht(r,n,e);var c,a,f,s=function(t){if(!Jt&&t in y)return y[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},l=n+" Iterator",p="values"==o,h=!1,y=t.prototype,v=y[qt]||y["@@iterator"]||o&&y[o],g=v||s(o),d=o?p?s("entries"):g:void 0,b="Array"==n&&y.entries||v;if(b&&(f=$t(b.call(new t)))!==Object.prototype&&f.next&&(Dt(f,l,!0),"function"!=typeof f[qt]&&_(f,qt,Kt)),p&&v&&"values"!==v.name&&(h=!0,g=function(){return v.call(this)}),(Jt||h||!y[qt])&&_(y,qt,g),Mt[n]=g,Mt[l]=Kt,o)if(c={values:p?g:s("values"),keys:i?g:s("keys"),entries:d},u)for(a in c)a in y||M(y,a,c[a]);else Ot(Ot.P+Ot.F*(Jt||h),n,c);return c}(Array,"Array",function(t,n){this._t=V(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,Lt(1)):Lt(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values");Mt.Arguments=Mt.Array,Et("keys"),Et("values"),Et("entries");for(var Xt=A("iterator"),Yt=A("toStringTag"),Zt=Mt.Array,tn={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},nn=Tt(tn),rn=0;rn<nn.length;rn++){var en,on=nn[rn],un=tn[on],cn=h[on],an=cn&&cn.prototype;if(an&&(an[Xt]||_(an,Xt,Zt),an[Yt]||_(an,Yt,on),Mt[on]=Zt,un))for(en in Qt)an[en]||M(an,en,Qt[en],!0)}var fn=Array.isArray||function(t){return"Array"==C(t)},sn=A("species"),ln=function(t,r){return new(function(t){var r;return fn(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!fn(r.prototype)||(r=void 0),n(r)&&null===(r=r[sn])&&(r=void 0)),void 0===r?Array:r}(t))(r)},pn=function(t,n){var r=1==t,e=2==t,o=3==t,i=4==t,u=6==t,c=5==t||u,a=n||ln;return function(n,f,s){for(var l,p,h=Bt(n),y=D(h),v=N(f,s,3),g=Q(y.length),d=0,b=r?a(n,g):e?a(n,0):void 0;g>d;d++)if((c||d in y)&&(p=v(l=y[d],d,h),t))if(r)b[d]=p;else if(p)switch(t){case 3:return!0;case 5:return l;case 6:return d;case 2:b.push(l)}else if(i)return!1;return u?-1:o||i?i:b}},hn=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})},yn=pn(0),vn=hn([].forEach,!0);Ot(Ot.P+Ot.F*!vn,"Array",{forEach:function(t){return yn(this,t,arguments[1])}});var gn=pn(1);Ot(Ot.P+Ot.F*!hn([].map,!0),"Array",{map:function(t){return gn(this,t,arguments[1])}});t.findNextPowerOf2=function(t){for(var n=1;t>n;)n<<=1;return n},t.get=function t(n,r){if(null!=n){if(r in n)return n[r];var e=r.split(/[.]/),o=function(t,n){var r=mt.exec(n);if(r){var e=t[r[1]];return null!=e?e[parseInt(r[2],10)]:void 0}return t[n]}(n,e.shift());return null!=o&&e.length?t(o,e.join(".")):o}},t.hexCol2rgb=function(t){var n=t.startsWith("#")?1:0;return[parseInt(t.substring(n,n+2),16),parseInt(t.substring(n+2,n+4),16),parseInt(t.substring(n+4,n+6),16)]},t.hexCol2rgba=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:255,r=t.startsWith("#")?1:0;return[parseInt(t.substring(r,r+2),16),parseInt(t.substring(r+2,r+4),16),parseInt(t.substring(r+4,r+6),16),n]},t.isPowerOf2=function(t){return 0!==t&&0==(t&t-1)},t.makeCircleCoords=function(t){for(var n=.5*(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1),r=360/t,e=[],o=0,i=0;o<t;o++)e.push([n*Math.sin(i*wt),n*Math.cos(i*wt)]),i+=r;return e},t.maxOf=function(t,n){return t>n?t:n},t.pick=function(t){return function(n){var r={};return n&&t.forEach(function(t){var e=n[t];void 0!==e&&(r[t]=e)}),r}},t.readOption=function(t,n,r,e){if(t){var o=t[n];if(void 0!==o)return o}return"function"==typeof r?r.call(null,e):r},t.sample=function(t){return t[Math.random()*t.length|0]},t.toFloatColors=function(t){return t.map(function(t){return t/255})},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=picimo-utils.js.map
