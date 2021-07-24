 <div align="center">
  <h2>MPADiff</h2>
  <blockquote>Minimal Library to mimic Single page apps. behaviour in Multi page apps.</blockquote>
 </div>

## ⭐️ Features

- Custom loaders
- Eager & Lazy Loading
- Custom delays
- Doesn't reload CSS.
- 3kb (Gzipped)
- TypeScript
- No Iframes

## 📦 Getting Started

### Installation
```
yarn install MPADiff
```
or
```
npm i -S MPADiff
```
or
```
<script src="https://cdn.jsdelivr.net/gh/atwamahmoud/MPADiff/build/index.js"></script>
```
or self hosted
```
<script src="/build/index.js"></script>
```

### Usage

MPADiff exposes a minimal & simple API to use.
To activate the library, all you need to do is initialize it with your custom or default configuration options.
#### Example

```
<script src="https://cdn.jsdelivr.net/gh/atwamahmoud/MPADiff/build/index.js"></script>
<script>
window.MPADiff.default.init({
    loaderDelay: 500,
    eagerLoading: false,
    loaderElement: undefined,
})
</script>
```


## 💎 Customization

| Option | Type | Explanation | Default |
---------|------|-------------|----------|
| loaderDelay | number (ms) | number of milliseconds to wait before hiding the loader (in case of lazy loading) | 500 |
| eagerLoading | boolean | Whether the links should be loaded once they appear or load them only when the user clicks on them. | true |
| loaderElement | HTMLElement/Node/undefined | The element that will be used when the contents of a link is still loading and the user has clicked on it | undefined |
## API Reference

### `getInstance(): MPADiff`

getInstance() returns an MPADiff object that is currently activated.
This method is helpful since MPADiff is built based on the [Singleton Design pattern](https://en.wikipedia.org/wiki/Singleton_pattern).
### `setDefaultLoaderDelay(delay: number): void`

Sets a number representing milliseconds before removing the loader from the DOM to avoid flashing if the content was loaded too quickly.

### `setEagerLoading(eagerLoading: boolean): void`

Sets a boolean representing whether the links should be eagerly or lazy loaded.

### `setLoader(loader?: HTMLElement|Node): void`

Sets the loader element that will be used. If `undefined` is passed, No loader will appear.
### npm/yarn

```
import MPADiff from 'MPADiff';
MPADiff.init({...opts})
const MPADiffInstance = MPADiff.getInstance();
...
```

### self-host/cdn

```
<script src="build/index.js"></script>

MPADiff.init({...opts})
const MPADiffInstance = MPADiff.getInstance();
...
```
