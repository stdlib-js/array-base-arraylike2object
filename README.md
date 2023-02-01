<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# arraylike2object

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert an array-like object to an object likely to have the same "shape".

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-base-arraylike2object
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
```

#### arraylike2object( x )

Converts an array-like object to an object likely to have the same "shape".

```javascript
var obj = arraylike2object( [ 1, 2, 3, 4 ] );
// returns {...}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The returned object has the following properties:

    -   **data**: reference to the input array.
    -   **accessorProtocol**: `boolean` indicating whether the input uses accessors for getting and setting elements.
    -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element (i.e., a getter) and whose second element is an accessor for setting an array element (i.e., a setter).

-   The getter accessor accepts two arguments:

    -   **data**: input array.
    -   **idx**: element index.

-   The setter accessor accepts three arguments:

    -   **data**: input array.
    -   **idx**: element index.
    -   **value**: value to set.

-   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding array meta data to ensure that internal functions operating on arrays are provided consistent argument "shapes".

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var arraylike2object = require( '@stdlib/array-base-arraylike2object' );

// Create an array:
var x = new Complex64Array( 10 );

// Convert to a standardized object:
var obj = arraylike2object( x );
// returns {...}

console.log( obj );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-arraylike2object.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-arraylike2object

[test-image]: https://github.com/stdlib-js/array-base-arraylike2object/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-base-arraylike2object/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-arraylike2object/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-arraylike2object?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-arraylike2object.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-arraylike2object/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-arraylike2object/tree/deno
[umd-url]: https://github.com/stdlib-js/array-base-arraylike2object/tree/umd
[esm-url]: https://github.com/stdlib-js/array-base-arraylike2object/tree/esm
[branches-url]: https://github.com/stdlib-js/array-base-arraylike2object/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-arraylike2object/main/LICENSE

</section>

<!-- /.links -->
