---
title: Using the NPM API to Get Latest Package Versions
disqusId: '2019-02-18 22:04:25-"Using the NPM API to Get Latest Package Versions"'
date: 2019-02-18 16:04:25
tags:
	- javascript
	- npm
---

<link rel="stylesheet" href="/assets/extra.css">

{% asset_img "promo.jpg" %}

For the lazy folks: [I don't want a story, just give me the code.](#A-Better-Solution)

I wanted to write a very quick article/rant because I was frustrated with what I found when trying to programmatically get the latest version of an npm pacakge.  A very popular solution is the [latest-version](https://www.npmjs.com/package/latest-version) package on npm, which has nearly [3 million weekly downloads](https://www.npmtrends.com/latest-version).  Upon initial inspection it sure looks super, but is it really?

<!-- more -->

The package sports a shiny ![build passing](https://badgen.net/badge/build/passing/green) badge (so you know it's good), and even tells you why you should choose this package over the [latest](https://www.npmjs.com/package/latest) package, which has "massive" dependencies.  The code example also looks pretty slick:

```javascript
console.log(await latestVersion('ava'));
//=> '0.18.0'
```

So at this point I've gotten the sense that the package is popular, reliable, more lightweight than the competition, and simple to use.  Sounds great to me!  Let's just [check the download size](https://bundlephobia.com/result?p=latest-version) before installing...

![Bundle Size according to bundlephobia.com](bundle-size.png)

Wait a minute... This package literally exposes _one_ function that does _one_ thing.  How on earth could it possibly require nearly 90kB, _minified?!_  Turns out the culprit is the package's only (and much more useful) dependency, [package-json](https://www.npmjs.com/package/package-json) (by the same author).  The crime here (in my opinion) is that this dependency is over-qualified and most of its useful functionality is hidden by the dependent package.  **It feels a lot like cracking an egg with a hammer.**

Without stepping too close to the "one-line modules" debate (about which the [`latest-version` author himself has quite a bit to say](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328)), this package blatantly disregards bundle size in the name of "simplicity," and we can do much better.

## A Better Solution
The official API provided by the npm registry is more than enough to retrieve the latest package version.  Using the [much lighter-weight](https://bundlephobia.com/result?p=axios@0.18.0) dependency, [axios](https://www.npmjs.com/package/axios), we can rewrite the entire `latest-version` module in a handful of lines:

```javascript
function latestVersion(packageName) {
    return axios
        .get('https://registry.npmjs.org/' + packageName + '/latest')
        .then(res => res.data.version);
}
```

Just like the original package, `latestVersion()` returns a promise, so you can use it exactly the same as the `latest-version` docs describe:

```javascript
const packageVersion = await latestVersion('some-package');
```

## Conclusion
I hope this saved you some unnecessary code bloat.  You don't have to trust the "lightweight" claims of every package!  Check for yourself at [bundlephobia.com](https://bundlephobia.com).
