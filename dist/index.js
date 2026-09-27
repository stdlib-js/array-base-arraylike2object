"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=c(function(l,t){
var o=require('@stdlib/array-base-assert-is-accessor-array/dist'),i=require('@stdlib/array-base-getter/dist'),u=require('@stdlib/array-base-setter/dist'),v=require('@stdlib/array-base-accessor-getter/dist'),q=require('@stdlib/array-base-accessor-setter/dist'),d=require('@stdlib/array-dtype/dist');function n(e){var r=d(e);return o(e)?{data:e,dtype:r,accessorProtocol:!0,accessors:[v(r),q(r)]}:{data:e,dtype:r,accessorProtocol:!1,accessors:[i(r),u(r)]}}t.exports=n
});var p=s();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
