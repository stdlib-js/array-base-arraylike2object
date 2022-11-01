// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Boolean;function e(t,e){return t[e]}function n(t,e){return t.get(e)}function r(t,e,n){t[e]=n}function o(t,e,n){t.set(n,e)}function u(u){var a=t(u.get&&u.set);return{data:u,accessors:a,getter:a?n:e,setter:a?o:r}}export{u as default};
//# sourceMappingURL=mod.js.map
