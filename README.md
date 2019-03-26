# Lazyload

a lazyload plugin based on IntersectionObserver interface.

how to use ?
```js
var lazy = new Lazyload({
    src:'data-src',// where is the real source 
    selector:'img[data-src]'
})

//sync after append new document
lazy.update();

```