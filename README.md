 <div align="center">
  <h2>MPADiff</h2>
  <blockquote>Minimal Library to mimic Single page apps. behaviour in Multi page apps.</blockquote>
 </div>


## 🚀 What, Why & How

`MPADiff` is a minimal JavaScript library written in TypeScript that prevents your website to reload when the user navigates to another page. This is the default behaviour for SPAs written React, Angulat, Vue & other SPA frameworks/libraries.

The main difference here is that `MPADiff` provides this functionality to multi page applications written in PHP, Node.js, ASP, or any other language/framework.

It works by sending a `GET` request to URIs of links to fetch HTML. Once the user clicks on such link, the `head` element is updated (without reloading any CSS) & the `body` element is swaped. Both eager & lazy loading of HTML documents are supported and can be configured accoeding to your needs. 

### Before

https://user-images.githubusercontent.com/17679755/126884168-182659f5-e1b4-443f-9fbd-7e4c44efa69b.mov

### After

https://user-images.githubusercontent.com/17679755/126884171-273f4277-afa5-4b8b-b4ca-15d359d20b03.mov



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


### `init(config?: Config): void`

Initializes the MPADiff object with custom or default configuration options.
Must be called before any other method. Can be called multiple times but only the first time is where the configuration is updated.

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
