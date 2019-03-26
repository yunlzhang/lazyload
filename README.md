# Lazyload

a lazyload plugin based on IntersectionObserver interface.

how to use ?

    npm i lazyload-new

```js
import Lazyload from 'lazyload-new'
let lazy = new Lazyload({
    src:'data-src',// where is the real source 
    selector:'img[data-src]'
})

//sync after append new document
lazy.update();

```