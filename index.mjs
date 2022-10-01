// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/boolean-ctor@v0.0.1-esm/index.mjs";function e(t,e){return t[e]}function n(t,e){return t.get(e)}function r(t,e,n){t[e]=n}function s(t,e,n){t.set(n,e)}function o(o){var c=t(o.get&&o.set);return{data:o,accessors:c,getter:c?n:e,setter:c?s:r}}export{o as default};
//# sourceMappingURL=index.mjs.map
