// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t,e){return t[e]}function e(t,e){return t.get(e)}function n(t,e,n){t[e]=n}function r(t,e,n){t.set(n,e)}function o(o){var u=Boolean(o.get&&o.set);return{data:o,accessors:u,getter:u?e:t,setter:u?r:n}}export{o as default};
//# sourceMappingURL=mod.js.map
