"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=a(function(y,t){
var c=require('@stdlib/array-base-assert-is-accessor-array/dist'),o=require('@stdlib/array-base-getter/dist'),i=require('@stdlib/array-base-setter/dist'),u=require('@stdlib/array-base-accessor-getter/dist'),v=require('@stdlib/array-base-accessor-setter/dist'),q=require('@stdlib/array-dtype/dist');function d(e){var r=q(e);return c(e)?{data:e,dtype:r,accessorProtocol:!0,accessors:[u(r),v(r)]}:{data:e,dtype:r,accessorProtocol:!1,accessors:[o(r),i(r)]}}t.exports=d
});var n=s();module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
