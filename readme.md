# ga-cookie-opt-in-js

Cookie 使用の同意を得てから Google Analytics のトラッキングを有効にする JavaScript のサンプル

## 詳しい解説

- [Cookie 使用の同意を得てから Google Analytics のトラッキングを有効にする - WWW Watch](https://hyper-text.org/archives/2018/05/google_analytics_cookie_opt_in.shtml)

### インストール

```
$ npm install ga-accept-cookie --save
```

### 使い方

- Google Analytics のトラッキングコードは公式のものを別途設置してください。タグマネージャーからの配信も可能です。
- 必要に応じて .js ファイルや .css ファイルをカスタマイズしてください。

```js
import gaAcceptCookie from 'ga-accept-cookie';

window.addEventListener('DOMContentLoaded', () => {
  gaAcceptCookie('UA----', {
    storageName: 'ga_cookie_opt_in',
    debuglog: false,
    acceptBoxText: 'このサイトでは Google アナリティクスの Cookie（クッキー）を使用して、ユーザーのWebサイト閲覧データを記録しています。',
    acceptBtnLabel: '同意して Cookie を受け入れる',
    cancelBtnLabel: '同意しない'
  });
});
```


## 注意事項

本スクリプトはサンプルです。本番環境で使用した際に正しく動作しないなどといった場合でも一切責任は負いませんのであらかじめご了承ください。
