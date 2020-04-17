# Chrome Extension Webpack Boilerplate for Remote Script

A basic foundation boilerplate for rich Chrome Extensions using [Webpack](https://webpack.github.io/)

This repo is forked by @ksmzn.

## Developing a new extension

1. Check if your Node.js version is >= 10.
2. Clone the repository.
3. Install [yarn](https://yarnpkg.com/lang/en/docs/install/).
4. Run `yarn`.
5. Change the package's name and description on `package.json`.
6. Change the name of your extension on `assets/manifest.json`.
7. Run `yarn start`
8. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `dist/staging/app` folder.
9. Have fun.

See detail

- [Webpack docs](https://webpack.js.org)
- [Chrome Extension](https://developer.chrome.com/extensions/getstarted)

## How to develop

```
yarn dev
```

## Packing

```
yarn build
```

Now, the content of `dist/staging/app` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.

## LICENSE

MIT

- Naoto Koshimizu ~ [@ksmzn](https://twitter.com/ksmzn)
- Kotaro Chikuba ~ [@mizchi](https://twitter.com/mizchi)
- Samuel Simões ~ [@samuelsimoes](https://twitter.com/samuelsimoes) ~ [Blog](http://blog.samuelsimoes.com/)
