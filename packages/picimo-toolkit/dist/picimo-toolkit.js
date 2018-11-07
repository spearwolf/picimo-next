import{getLogger}from"loglevel";import{get,pick}from"@picimo/utils";import{VODescriptor,IndexedPrimitive,ElementIndexArray,SpriteGroup}from"@picimo/core";var _isObject=function(e){return"object"==typeof e?null!==e:"function"==typeof e},_anObject=function(e){if(!_isObject(e))throw TypeError(e+" is not an object!");return e},_fails=function(e){try{return!!e()}catch(e){return!0}},_descriptors=!_fails(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var _global=createCommonjsModule(function(e){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)}),document=_global.document,is=_isObject(document)&&_isObject(document.createElement),_domCreate=function(e){return is?document.createElement(e):{}},_ie8DomDefine=!_descriptors&&!_fails(function(){return 7!=Object.defineProperty(_domCreate("div"),"a",{get:function(){return 7}}).a}),_toPrimitive=function(e,t){if(!_isObject(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!_isObject(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!_isObject(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!_isObject(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")},dP=Object.defineProperty,f=_descriptors?Object.defineProperty:function(e,t,r){if(_anObject(e),t=_toPrimitive(t,!0),_anObject(r),_ie8DomDefine)try{return dP(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e},_objectDp={f:f},dP$1=_objectDp.f,FProto=Function.prototype,nameRE=/^\s*function ([^ (]*)/,NAME="name";NAME in FProto||_descriptors&&dP$1(FProto,NAME,{configurable:!0,get:function(){try{return(""+this).match(nameRE)[1]}catch(e){return""}}});var _core=createCommonjsModule(function(e){var t=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=t)}),_core_1=_core.version,_library=!1,_shared=createCommonjsModule(function(e){var t=_global["__core-js_shared__"]||(_global["__core-js_shared__"]={});(e.exports=function(e,r){return t[e]||(t[e]=void 0!==r?r:{})})("versions",[]).push({version:_core.version,mode:_library?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),id=0,px=Math.random(),_uid=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++id+px).toString(36))},_wks=createCommonjsModule(function(e){var t=_shared("wks"),r=_global.Symbol,n="function"==typeof r;(e.exports=function(e){return t[e]||(t[e]=n&&r[e]||(n?r:_uid)("Symbol."+e))}).store=t}),_propertyDesc=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},_hide=_descriptors?function(e,t,r){return _objectDp.f(e,t,_propertyDesc(1,r))}:function(e,t,r){return e[t]=r,e},UNSCOPABLES=_wks("unscopables"),ArrayProto=Array.prototype;null==ArrayProto[UNSCOPABLES]&&_hide(ArrayProto,UNSCOPABLES,{});var _addToUnscopables=function(e){ArrayProto[UNSCOPABLES][e]=!0},_iterStep=function(e,t){return{value:t,done:!!e}},_iterators={},toString={}.toString,_cof=function(e){return toString.call(e).slice(8,-1)},_iobject=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==_cof(e)?e.split(""):Object(e)},_defined=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},_toIobject=function(e){return _iobject(_defined(e))},hasOwnProperty={}.hasOwnProperty,_has=function(e,t){return hasOwnProperty.call(e,t)},_redefine=createCommonjsModule(function(e){var t=_uid("src"),r=Function.toString,n=(""+r).split("toString");_core.inspectSource=function(e){return r.call(e)},(e.exports=function(e,r,o,a){var i="function"==typeof o;i&&(_has(o,"name")||_hide(o,"name",r)),e[r]!==o&&(i&&(_has(o,t)||_hide(o,t,e[r]?""+e[r]:n.join(String(r)))),e===_global?e[r]=o:a?e[r]?e[r]=o:_hide(e,r,o):(delete e[r],_hide(e,r,o)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[t]||r.call(this)})}),_aFunction=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e},_ctx=function(e,t,r){if(_aFunction(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}},PROTOTYPE="prototype",$export=function(e,t,r){var n,o,a,i,c=e&$export.F,s=e&$export.G,u=e&$export.S,l=e&$export.P,_=e&$export.B,p=s?_global:u?_global[t]||(_global[t]={}):(_global[t]||{})[PROTOTYPE],f=s?_core:_core[t]||(_core[t]={}),y=f[PROTOTYPE]||(f[PROTOTYPE]={});for(n in s&&(r=t),r)a=((o=!c&&p&&void 0!==p[n])?p:r)[n],i=_&&o?_ctx(a,_global):l&&"function"==typeof a?_ctx(Function.call,a):a,p&&_redefine(p,n,a,e&$export.U),f[n]!=a&&_hide(f,n,i),l&&y[n]!=a&&(y[n]=a)};_global.core=_core,$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128;var _export=$export,ceil=Math.ceil,floor=Math.floor,_toInteger=function(e){return isNaN(e=+e)?0:(e>0?floor:ceil)(e)},min=Math.min,_toLength=function(e){return e>0?min(_toInteger(e),9007199254740991):0},max=Math.max,min$1=Math.min,_toAbsoluteIndex=function(e,t){return(e=_toInteger(e))<0?max(e+t,0):min$1(e,t)},_arrayIncludes=function(e){return function(t,r,n){var o,a=_toIobject(t),i=_toLength(a.length),c=_toAbsoluteIndex(n,i);if(e&&r!=r){for(;i>c;)if((o=a[c++])!=o)return!0}else for(;i>c;c++)if((e||c in a)&&a[c]===r)return e||c||0;return!e&&-1}},shared=_shared("keys"),_sharedKey=function(e){return shared[e]||(shared[e]=_uid(e))},arrayIndexOf=_arrayIncludes(!1),IE_PROTO=_sharedKey("IE_PROTO"),_objectKeysInternal=function(e,t){var r,n=_toIobject(e),o=0,a=[];for(r in n)r!=IE_PROTO&&_has(n,r)&&a.push(r);for(;t.length>o;)_has(n,r=t[o++])&&(~arrayIndexOf(a,r)||a.push(r));return a},_enumBugKeys="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),_objectKeys=Object.keys||function(e){return _objectKeysInternal(e,_enumBugKeys)},_objectDps=_descriptors?Object.defineProperties:function(e,t){_anObject(e);for(var r,n=_objectKeys(t),o=n.length,a=0;o>a;)_objectDp.f(e,r=n[a++],t[r]);return e},document$1=_global.document,_html=document$1&&document$1.documentElement,IE_PROTO$1=_sharedKey("IE_PROTO"),Empty=function(){},PROTOTYPE$1="prototype",createDict=function(){var e,t=_domCreate("iframe"),r=_enumBugKeys.length;for(t.style.display="none",_html.appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),createDict=e.F;r--;)delete createDict[PROTOTYPE$1][_enumBugKeys[r]];return createDict()},_objectCreate=Object.create||function(e,t){var r;return null!==e?(Empty[PROTOTYPE$1]=_anObject(e),r=new Empty,Empty[PROTOTYPE$1]=null,r[IE_PROTO$1]=e):r=createDict(),void 0===t?r:_objectDps(r,t)},def=_objectDp.f,TAG=_wks("toStringTag"),_setToStringTag=function(e,t,r){e&&!_has(e=r?e:e.prototype,TAG)&&def(e,TAG,{configurable:!0,value:t})},IteratorPrototype={};_hide(IteratorPrototype,_wks("iterator"),function(){return this});var _iterCreate=function(e,t,r){e.prototype=_objectCreate(IteratorPrototype,{next:_propertyDesc(1,r)}),_setToStringTag(e,t+" Iterator")},_toObject=function(e){return Object(_defined(e))},IE_PROTO$2=_sharedKey("IE_PROTO"),ObjectProto=Object.prototype,_objectGpo=Object.getPrototypeOf||function(e){return e=_toObject(e),_has(e,IE_PROTO$2)?e[IE_PROTO$2]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?ObjectProto:null},ITERATOR=_wks("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this},_iterDefine=function(e,t,r,n,o,a,i){_iterCreate(r,t,n);var c,s,u,l=function(e){if(!BUGGY&&e in y)return y[e];switch(e){case KEYS:case VALUES:return function(){return new r(this,e)}}return function(){return new r(this,e)}},_=t+" Iterator",p=o==VALUES,f=!1,y=e.prototype,h=y[ITERATOR]||y[FF_ITERATOR]||o&&y[o],d=h||l(o),g=o?p?l("entries"):d:void 0,b="Array"==t&&y.entries||h;if(b&&(u=_objectGpo(b.call(new e)))!==Object.prototype&&u.next&&(_setToStringTag(u,_,!0),_library||"function"==typeof u[ITERATOR]||_hide(u,ITERATOR,returnThis)),p&&h&&h.name!==VALUES&&(f=!0,d=function(){return h.call(this)}),_library&&!i||!BUGGY&&!f&&y[ITERATOR]||_hide(y,ITERATOR,d),_iterators[t]=d,_iterators[_]=returnThis,o)if(c={values:p?d:l(VALUES),keys:a?d:l(KEYS),entries:g},i)for(s in c)s in y||_redefine(y,s,c[s]);else _export(_export.P+_export.F*(BUGGY||f),t,c);return c},es6_array_iterator=_iterDefine(Array,"Array",function(e,t){this._t=_toIobject(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,_iterStep(1)):_iterStep(0,"keys"==t?r:"values"==t?e[r]:[r,e[r]])},"values");_iterators.Arguments=_iterators.Array,_addToUnscopables("keys"),_addToUnscopables("values"),_addToUnscopables("entries");for(var ITERATOR$1=_wks("iterator"),TO_STRING_TAG=_wks("toStringTag"),ArrayValues=_iterators.Array,DOMIterables={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},collections=_objectKeys(DOMIterables),i=0;i<collections.length;i++){var key,NAME$1=collections[i],explicit=DOMIterables[NAME$1],Collection=_global[NAME$1],proto=Collection&&Collection.prototype;if(proto&&(proto[ITERATOR$1]||_hide(proto,ITERATOR$1,ArrayValues),proto[TO_STRING_TAG]||_hide(proto,TO_STRING_TAG,NAME$1),_iterators[NAME$1]=ArrayValues,explicit))for(key in es6_array_iterator)proto[key]||_redefine(proto,key,es6_array_iterator[key],!0)}var _isArray=Array.isArray||function(e){return"Array"==_cof(e)},SPECIES=_wks("species"),_arraySpeciesConstructor=function(e){var t;return _isArray(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!_isArray(t.prototype)||(t=void 0),_isObject(t)&&null===(t=t[SPECIES])&&(t=void 0)),void 0===t?Array:t},_arraySpeciesCreate=function(e,t){return new(_arraySpeciesConstructor(e))(t)},_arrayMethods=function(e,t){var r=1==e,n=2==e,o=3==e,a=4==e,i=6==e,c=5==e||i,s=t||_arraySpeciesCreate;return function(t,u,l){for(var _,p,f=_toObject(t),y=_iobject(f),h=_ctx(u,l,3),d=_toLength(y.length),g=0,b=r?s(t,d):n?s(t,0):void 0;d>g;g++)if((c||g in y)&&(p=h(_=y[g],g,f),e))if(r)b[g]=p;else if(p)switch(e){case 3:return!0;case 5:return _;case 6:return g;case 2:b.push(_)}else if(a)return!1;return i?-1:o||a?a:b}},_strictMethod=function(e,t){return!!e&&_fails(function(){t?e.call(null,function(){},1):e.call(null)})},$forEach=_arrayMethods(0),STRICT=_strictMethod([].forEach,!0);_export(_export.P+_export.F*!STRICT,"Array",{forEach:function(e){return $forEach(this,e,arguments[1])}});var f$1=Object.getOwnPropertySymbols,_objectGops={f:f$1},f$2={}.propertyIsEnumerable,_objectPie={f:f$2},$assign=Object.assign,_objectAssign=!$assign||_fails(function(){var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(e){t[e]=e}),7!=$assign({},e)[r]||Object.keys($assign({},t)).join("")!=n})?function(e,t){for(var r=_toObject(e),n=arguments.length,o=1,a=_objectGops.f,i=_objectPie.f;n>o;)for(var c,s=_iobject(arguments[o++]),u=a?_objectKeys(s).concat(a(s)):_objectKeys(s),l=u.length,_=0;l>_;)i.call(s,c=u[_++])&&(r[c]=s[c]);return r}:$assign;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){_defineProperty(e,t,r[t])})}return e}_export(_export.S+_export.F,"Object",{assign:_objectAssign});var objectProto=Object.prototype,hasOwnProperty$1=objectProto.hasOwnProperty;function baseHas(e,t){return null!=e&&hasOwnProperty$1.call(e,t)}var _baseHas=baseHas,isArray=Array.isArray,isArray_1=isArray,freeGlobal="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,_freeGlobal=freeGlobal,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=_freeGlobal||freeSelf||Function("return this")(),_root=root,Symbol$1=_root.Symbol,_Symbol=Symbol$1,objectProto$1=Object.prototype,hasOwnProperty$2=objectProto$1.hasOwnProperty,nativeObjectToString=objectProto$1.toString,symToStringTag=_Symbol?_Symbol.toStringTag:void 0;function getRawTag(e){var t=hasOwnProperty$2.call(e,symToStringTag),r=e[symToStringTag];try{e[symToStringTag]=void 0}catch(e){}var n=nativeObjectToString.call(e);return t?e[symToStringTag]=r:delete e[symToStringTag],n}var _getRawTag=getRawTag,objectProto$2=Object.prototype,nativeObjectToString$1=objectProto$2.toString;function objectToString(e){return nativeObjectToString$1.call(e)}var _objectToString=objectToString,nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag$1=_Symbol?_Symbol.toStringTag:void 0;function baseGetTag(e){return null==e?void 0===e?undefinedTag:nullTag:symToStringTag$1&&symToStringTag$1 in Object(e)?_getRawTag(e):_objectToString(e)}var _baseGetTag=baseGetTag;function isObjectLike(e){return null!=e&&"object"==typeof e}var isObjectLike_1=isObjectLike,symbolTag="[object Symbol]";function isSymbol(e){return"symbol"==typeof e||isObjectLike_1(e)&&_baseGetTag(e)==symbolTag}var isSymbol_1=isSymbol,reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;function isKey(e,t){if(isArray_1(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!isSymbol_1(e))||(reIsPlainProp.test(e)||!reIsDeepProp.test(e)||null!=t&&e in Object(t))}var _isKey=isKey;function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var isObject_1=isObject,asyncTag="[object AsyncFunction]",funcTag="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]";function isFunction(e){if(!isObject_1(e))return!1;var t=_baseGetTag(e);return t==funcTag||t==genTag||t==asyncTag||t==proxyTag}var isFunction_1=isFunction,coreJsData=_root["__core-js_shared__"],_coreJsData=coreJsData,maskSrcKey=function(){var e=/[^.]+$/.exec(_coreJsData&&_coreJsData.keys&&_coreJsData.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}var _isMasked=isMasked,funcProto=Function.prototype,funcToString=funcProto.toString;function toSource(e){if(null!=e){try{return funcToString.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var _toSource=toSource,reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto$1=Function.prototype,objectProto$3=Object.prototype,funcToString$1=funcProto$1.toString,hasOwnProperty$3=objectProto$3.hasOwnProperty,reIsNative=RegExp("^"+funcToString$1.call(hasOwnProperty$3).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function baseIsNative(e){return!(!isObject_1(e)||_isMasked(e))&&(isFunction_1(e)?reIsNative:reIsHostCtor).test(_toSource(e))}var _baseIsNative=baseIsNative;function getValue(e,t){return null==e?void 0:e[t]}var _getValue=getValue;function getNative(e,t){var r=_getValue(e,t);return _baseIsNative(r)?r:void 0}var _getNative=getNative,nativeCreate=_getNative(Object,"create"),_nativeCreate=nativeCreate;function hashClear(){this.__data__=_nativeCreate?_nativeCreate(null):{},this.size=0}var _hashClear=hashClear;function hashDelete(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var _hashDelete=hashDelete,HASH_UNDEFINED="__lodash_hash_undefined__",objectProto$4=Object.prototype,hasOwnProperty$4=objectProto$4.hasOwnProperty;function hashGet(e){var t=this.__data__;if(_nativeCreate){var r=t[e];return r===HASH_UNDEFINED?void 0:r}return hasOwnProperty$4.call(t,e)?t[e]:void 0}var _hashGet=hashGet,objectProto$5=Object.prototype,hasOwnProperty$5=objectProto$5.hasOwnProperty;function hashHas(e){var t=this.__data__;return _nativeCreate?void 0!==t[e]:hasOwnProperty$5.call(t,e)}var _hashHas=hashHas,HASH_UNDEFINED$1="__lodash_hash_undefined__";function hashSet(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=_nativeCreate&&void 0===t?HASH_UNDEFINED$1:t,this}var _hashSet=hashSet;function Hash(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Hash.prototype.clear=_hashClear,Hash.prototype.delete=_hashDelete,Hash.prototype.get=_hashGet,Hash.prototype.has=_hashHas,Hash.prototype.set=_hashSet;var _Hash=Hash;function listCacheClear(){this.__data__=[],this.size=0}var _listCacheClear=listCacheClear;function eq(e,t){return e===t||e!=e&&t!=t}var eq_1=eq;function assocIndexOf(e,t){for(var r=e.length;r--;)if(eq_1(e[r][0],t))return r;return-1}var _assocIndexOf=assocIndexOf,arrayProto=Array.prototype,splice=arrayProto.splice;function listCacheDelete(e){var t=this.__data__,r=_assocIndexOf(t,e);return!(r<0)&&(r==t.length-1?t.pop():splice.call(t,r,1),--this.size,!0)}var _listCacheDelete=listCacheDelete;function listCacheGet(e){var t=this.__data__,r=_assocIndexOf(t,e);return r<0?void 0:t[r][1]}var _listCacheGet=listCacheGet;function listCacheHas(e){return _assocIndexOf(this.__data__,e)>-1}var _listCacheHas=listCacheHas;function listCacheSet(e,t){var r=this.__data__,n=_assocIndexOf(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}var _listCacheSet=listCacheSet;function ListCache(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ListCache.prototype.clear=_listCacheClear,ListCache.prototype.delete=_listCacheDelete,ListCache.prototype.get=_listCacheGet,ListCache.prototype.has=_listCacheHas,ListCache.prototype.set=_listCacheSet;var _ListCache=ListCache,Map$1=_getNative(_root,"Map"),_Map=Map$1;function mapCacheClear(){this.size=0,this.__data__={hash:new _Hash,map:new(_Map||_ListCache),string:new _Hash}}var _mapCacheClear=mapCacheClear;function isKeyable(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}var _isKeyable=isKeyable;function getMapData(e,t){var r=e.__data__;return _isKeyable(t)?r["string"==typeof t?"string":"hash"]:r.map}var _getMapData=getMapData;function mapCacheDelete(e){var t=_getMapData(this,e).delete(e);return this.size-=t?1:0,t}var _mapCacheDelete=mapCacheDelete;function mapCacheGet(e){return _getMapData(this,e).get(e)}var _mapCacheGet=mapCacheGet;function mapCacheHas(e){return _getMapData(this,e).has(e)}var _mapCacheHas=mapCacheHas;function mapCacheSet(e,t){var r=_getMapData(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}var _mapCacheSet=mapCacheSet;function MapCache(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}MapCache.prototype.clear=_mapCacheClear,MapCache.prototype.delete=_mapCacheDelete,MapCache.prototype.get=_mapCacheGet,MapCache.prototype.has=_mapCacheHas,MapCache.prototype.set=_mapCacheSet;var _MapCache=MapCache,FUNC_ERROR_TEXT="Expected a function";function memoize(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=e.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(memoize.Cache||_MapCache),r}memoize.Cache=_MapCache;var memoize_1=memoize,MAX_MEMOIZE_SIZE=500;function memoizeCapped(e){var t=memoize_1(e,function(e){return r.size===MAX_MEMOIZE_SIZE&&r.clear(),e}),r=t.cache;return t}var _memoizeCapped=memoizeCapped,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reEscapeChar=/\\(\\)?/g,stringToPath=_memoizeCapped(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rePropName,function(e,r,n,o){t.push(n?o.replace(reEscapeChar,"$1"):r||e)}),t}),_stringToPath=stringToPath;function arrayMap(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}var _arrayMap=arrayMap,INFINITY=1/0,symbolProto=_Symbol?_Symbol.prototype:void 0,symbolToString=symbolProto?symbolProto.toString:void 0;function baseToString(e){if("string"==typeof e)return e;if(isArray_1(e))return _arrayMap(e,baseToString)+"";if(isSymbol_1(e))return symbolToString?symbolToString.call(e):"";var t=e+"";return"0"==t&&1/e==-INFINITY?"-0":t}var _baseToString=baseToString;function toString$1(e){return null==e?"":_baseToString(e)}var toString_1=toString$1;function castPath(e,t){return isArray_1(e)?e:_isKey(e,t)?[e]:_stringToPath(toString_1(e))}var _castPath=castPath,argsTag="[object Arguments]";function baseIsArguments(e){return isObjectLike_1(e)&&_baseGetTag(e)==argsTag}var _baseIsArguments=baseIsArguments,objectProto$6=Object.prototype,hasOwnProperty$6=objectProto$6.hasOwnProperty,propertyIsEnumerable=objectProto$6.propertyIsEnumerable,isArguments=_baseIsArguments(function(){return arguments}())?_baseIsArguments:function(e){return isObjectLike_1(e)&&hasOwnProperty$6.call(e,"callee")&&!propertyIsEnumerable.call(e,"callee")},isArguments_1=isArguments,MAX_SAFE_INTEGER=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;function isIndex(e,t){var r=typeof e;return!!(t=null==t?MAX_SAFE_INTEGER:t)&&("number"==r||"symbol"!=r&&reIsUint.test(e))&&e>-1&&e%1==0&&e<t}var _isIndex=isIndex,MAX_SAFE_INTEGER$1=9007199254740991;function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER$1}var isLength_1=isLength,INFINITY$1=1/0;function toKey(e){if("string"==typeof e||isSymbol_1(e))return e;var t=e+"";return"0"==t&&1/e==-INFINITY$1?"-0":t}var _toKey=toKey;function hasPath(e,t,r){for(var n=-1,o=(t=_castPath(t,e)).length,a=!1;++n<o;){var i=_toKey(t[n]);if(!(a=null!=e&&r(e,i)))break;e=e[i]}return a||++n!=o?a:!!(o=null==e?0:e.length)&&isLength_1(o)&&_isIndex(i,o)&&(isArray_1(e)||isArguments_1(e))}var _hasPath=hasPath;function has(e,t){return null!=e&&_hasPath(e,t,_baseHas)}var has_1=has,defineProperty=function(){try{var e=_getNative(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),_defineProperty$1=defineProperty;function baseAssignValue(e,t,r){"__proto__"==t&&_defineProperty$1?_defineProperty$1(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var _baseAssignValue=baseAssignValue,objectProto$7=Object.prototype,hasOwnProperty$7=objectProto$7.hasOwnProperty;function assignValue(e,t,r){var n=e[t];hasOwnProperty$7.call(e,t)&&eq_1(n,r)&&(void 0!==r||t in e)||_baseAssignValue(e,t,r)}var _assignValue=assignValue;function baseSet(e,t,r,n){if(!isObject_1(e))return e;for(var o=-1,a=(t=_castPath(t,e)).length,i=a-1,c=e;null!=c&&++o<a;){var s=_toKey(t[o]),u=r;if(o!=i){var l=c[s];void 0===(u=n?n(l,s,c):void 0)&&(u=isObject_1(l)?l:_isIndex(t[o+1])?[]:{})}_assignValue(c,s,u),c=c[s]}return e}var _baseSet=baseSet;function set$1(e,t,r){return null==e?e:_baseSet(e,t,r)}var set_1=set$1,_objectSap=function(e,t){var r=(_core.Object||{})[e]||Object[e],n={};n[e]=t(r),_export(_export.S+_export.F*_fails(function(){r(1)}),"Object",n)};_objectSap("keys",function(){return function(e){return _objectKeys(_toObject(e))}});var $filter=_arrayMethods(2);_export(_export.P+_export.F*!_strictMethod([].filter,!0),"Array",{filter:function(e){return $filter(this,e,arguments[1])}});var $map=_arrayMethods(1);function compact(e){for(var t=-1,r=null==e?0:e.length,n=0,o=[];++t<r;){var a=e[t];a&&(o[n++]=a)}return o}_export(_export.P+_export.F*!_strictMethod([].map,!0),"Array",{map:function(e){return $map(this,e,arguments[1])}});var compact_1=compact,_arrayReduce=function(e,t,r,n,o){_aFunction(t);var a=_toObject(e),i=_iobject(a),c=_toLength(a.length),s=o?c-1:0,u=o?-1:1;if(r<2)for(;;){if(s in i){n=i[s],s+=u;break}if(s+=u,o?s<0:c<=s)throw TypeError("Reduce of empty array with no initial value")}for(;o?s>=0:c>s;s+=u)s in i&&(n=t(n,i[s],s,a));return n};_export(_export.P+_export.F*!_strictMethod([].reduce,!0),"Array",{reduce:function(e){return _arrayReduce(this,e,arguments.length,arguments[1],!1)}}),_export(_export.S,"Array",{isArray:_isArray});var _invoke=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)},arraySlice=[].slice,factories={},construct=function(e,t,r){if(!(t in factories)){for(var n=[],o=0;o<t;o++)n[o]="a["+o+"]";factories[t]=Function("F,a","return new F("+n.join(",")+")")}return factories[t](e,r)},_bind=Function.bind||function(e){var t=_aFunction(this),r=arraySlice.call(arguments,1),n=function(){var o=r.concat(arraySlice.call(arguments));return this instanceof n?construct(t,o.length,o):_invoke(t,o,e)};return _isObject(t.prototype)&&(n.prototype=t.prototype),n};_export(_export.P,"Function",{bind:_bind});var $find=_arrayMethods(5),KEY="find",forced=!0;KEY in[]&&Array(1)[KEY](function(){forced=!1}),_export(_export.P+_export.F*forced,"Array",{find:function(e){return $find(this,e,arguments.length>1?arguments[1]:void 0)}}),_addToUnscopables(KEY);var _FACTORIES,DATA="data",DATA_BLOCK="dataBlock",DECLARATION="declaration",PROPERTY_CALL="propertyCall",findPropertyCall=function(e,t,r){if(e){var n=e.find(function(e){var r=e.type,n=e.name;return r===PROPERTY_CALL&&n===t});return void 0!==n&&r&&r(n),n}},hasPropertyCall=function(e,t){return Boolean(findPropertyCall(e,t))},firstPropertyCallArg=function(e,t){return get(findPropertyCall(e,t),"args[0]")},setByFirstPropertyCallArg=function(e,t,r,n){return findPropertyCall(r,n||t,function(r){e[t]=get(r,"args[0]")})},readFlag=function(e,t){return null==e?t:!e.args||1!==e.args.length||Boolean(e.args[0])},setFlagByPropertyCall=function(e,t,r){var n=findPropertyCall(t,r);void 0!==n&&(e[r]=readFlag(n))},findNamedArgument=function(e,t,r){return e&&e.find(function(e){var n=e.name,o=e.value,a=n===t;return a&&r&&r(o),a})},setByNamedArgument=function(e,t,r){return findNamedArgument(e,r,function(e){t[r]=e})},findData=function(e,t,r){return e&&e.find(function(e){var n=e.name===t;return n&&r&&r(e),n})},attachDataValue=function(e,t,r){return findData(t,r,function(t){var n=t.value;return Object.assign(e,_defineProperty({},r,n))})},attachDataValues=function(e,t,r){return r.forEach(attachDataValue.bind(null,e,t))},parseVoDefaultValues=function(e){return function(t,r){void 0!==r&&(Array.isArray(r)?r.forEach(function(r,n){e["".concat(t).concat(n)]=r}):e[t]=r)}},readOption=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return t.reduce(function(t,r){if("function"==typeof r){var n=r(e);return void 0!==n?n:t}return r&&e in r?r[e]:t},r)}},assignOptions=function(e,t,r,n){return t.forEach(function(t){var o=r(t);n&&"string"==typeof o&&(o=n(o)),void 0!==o&&(e[t]=o)}),e},DEFAULT_ATTR_TYPE="float32",create=function(e){var t=e.declaration,r=e.ctx,n=e.options,o="instantiates"===t.verb?r.create(t.subject):void 0,a=t.voDescriptor,i=n||a.proto;return new VODescriptor(_objectSpread({},a,{instanceOf:o,proto:"string"==typeof i?r.readOption(i):i}))},transform=function(e){var t={},r={},n=parseVoDefaultValues(t),o={voDescriptor:{vertexCount:firstPropertyCallArg(e.data,"vertexCount"),attributes:compact_1(e.data.filter(function(e){var t=e.type;return t===DATA||t===DATA_BLOCK}).map(function(e){var t=findPropertyCall(e.annotations,"alias");if(t&&t.args&&"string"==typeof t.args[0])return r[e.name]=t.args[0],null;var o={name:e.name};return e.type===DATA?(o.type=e.valueType||DEFAULT_ATTR_TYPE,findNamedArgument(e.args,"size",function(e){o.size=e})):e.type===DATA_BLOCK&&(o.type=e.dataType||DEFAULT_ATTR_TYPE,o.scalars=e.data.filter(function(e){return e.type===DATA}).map(function(e){var t=e.name,r=e.value;return n(t,r),t}),o.size=o.scalars.length),hasPropertyCall(e.annotations,"uniform")&&(o.uniform=!0),n(e.name,e.value),t?(findNamedArgument(e.args,"offset",function(e){o.offset=e}),r[e.name]=o,null):o}))}};return Object.keys(r).length&&(o.voDescriptor.aliases=r),Object.keys(t).length&&(o.voNew=t),findPropertyCall(e.data,"prototype",function(e){var t=e.args;o.voDescriptor.proto=t[0]}),o},VertexObject=Object.freeze({create:create,transform:transform}),create$1=function(e){var t=e.declaration,r=e.options;if(t.generate)return new IndexedPrimitive(t.primitiveType,ElementIndexArray.Generate(r.capacity,t.indices,t.stride,t.offset));console.warn("TODO implementation: Primitive with(out) @generate(no)")},transform$1=function(e){var t=e.data,r={primitiveType:firstPropertyCallArg(t,"type")};return hasPropertyCall(t,"generate")&&(r.generate=!0),attachDataValues(r,t,["stride","offset","indices"]),r},Primitive=Object.freeze({create:create$1,transform:transform$1}),createPrimitive=function(e,t,r){switch(_typeof(t)){case"string":return e.create(t,{capacity:r});default:return t}},create$2=function(e){var t=e.ctx,r=e.declaration,n=e.options,o=void 0===n?{}:n,a=r.voDescriptor,i=o[a],c=r[a],s=t.readOption.bind(t),u=assignOptions({},["autotouch","capacity","doubleBuffer","maxAllocVOSize","usage"],readOption(r,c,o,i));assignOptions(u,["setSize","setTexCoordsByTexture"],readOption(r,c,o,i),readOption(s,o,i)),u.primitive=createPrimitive(t,r.primitive,u.capacity),assignOptions(u,["vertexShader","fragmentShader","shaderProgram"],readOption(r,o),readOption(s));var l=assignOptions({},["prototype"],readOption(c,i),readOption(s,o)).prototype,_=t.create(a,l);return new SpriteGroup(_,u)},readVoPoolOptions=function(e){var t={};return findPropertyCall(e,"dynamic",function(e){t.usage=readFlag(e,!0)?"dynamic":"static"}),setFlagByPropertyCall(t,e,"doubleBuffer"),setFlagByPropertyCall(t,e,"autotouch"),setFlagByPropertyCall(t,e,"textured"),setByFirstPropertyCallArg(t,"setSize",e),setByFirstPropertyCallArg(t,"setTexCoordsByTexture",e),setByFirstPropertyCallArg(t,"prototype",e),attachDataValue(t,e,"capacity"),attachDataValue(t,e,"maxAllocVOSize"),findData(e,"textures",function(e){if(e&&e.type===DATA_BLOCK){var r={};t.textureMap=r,e.data.forEach(function(e){var t=e.name,n=e.value,o=e.annotations,a=e.args,i={};r[t]={hints:i,src:n,type:hasPropertyCall(o,"atlas")?"atlas":"texture"},setByNamedArgument(a,i,"flipY"),setByNamedArgument(a,i,"repeatable"),setByNamedArgument(a,i,"premultiplyAlpha"),setByNamedArgument(a,i,"nearest")})}}),t},transform$2=function(e){var t=e.data,r=firstPropertyCallArg(t,"vertexObject"),n={voDescriptor:r,primitive:firstPropertyCallArg(t,"primitive")};return setByFirstPropertyCallArg(n,"vertexShader",t),setByFirstPropertyCallArg(n,"fragmentShader",t),setByFirstPropertyCallArg(n,"shaderProgram",t),Object.assign(n,readVoPoolOptions(t)),r&&findData(t,r,function(e){Object.assign(n,_defineProperty({},r,readVoPoolOptions(e.data,{})))}),n},SpriteGroup$1=Object.freeze({create:create$2,transform:transform$2}),parser=require("./picimoParser"),VERTEX_OBJECT="vertexobject",PRIMITIVE="primitive",SPRITE_GROUP="spritegroup",FACTORIES=(_defineProperty(_FACTORIES={},VERTEX_OBJECT,VertexObject),_defineProperty(_FACTORIES,PRIMITIVE,Primitive),_defineProperty(_FACTORIES,SPRITE_GROUP,SpriteGroup$1),_FACTORIES),log=getLogger("picimo.toolkit.Context"),getFactory=function(e){var t=FACTORIES[e];return e||log.error("Context: unknown declaration type:",e),t},transformDeclaration=function(e){var t=getFactory(e.declarationType);return t?t.transform(e):e},createInstanceFromDeclaration=function(e,t,r){var n=get(e.declaration,t);if(n){var o=getFactory(n.declarationType);return o?o.create({ctx:e,name:t,declaration:n,options:r}):null}},pickDeclaration=pick(["declarationType","verb","subject"]),Context=function(){function e(t){_classCallCheck(this,e),this.config=Object.assign({},t),this.declaration={}}return _createClass(e,[{key:"hasOption",value:function(e){return has_1(this.config,e)}},{key:"readOption",value:function(e){return get(this.config,e)}},{key:"writeOption",value:function(e,t){set_1(this.config,e,t)}},{key:"configure",value:function(e){return Object.assign(this.config,e),this}},{key:"compile",value:function(e,t){var r=this;return t&&this.configure(t),parser.parse(e,{ctx:this}).forEach(function(e){e.type===DECLARATION&&set_1(r.declaration,e.name,Object.assign(transformDeclaration(e),pickDeclaration(e)))}),this}},{key:"create",value:function(e,t){return createInstanceFromDeclaration(this,e,t)}}]),e}(),configure=function(e){return new Context(e)},compile=function(e,t){return new Context(t).compile(e)};export{compile,configure,Context};
//# sourceMappingURL=picimo-toolkit.js.map