var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var defaultOption = {
    storageName: 'ga_cookie_opt_in',
    debuglog: false,
    hideCancelBtn: false,
    acceptBoxText: 'このサイトでは Google アナリティクスの Cookie（クッキー）を使用して、ユーザーのWebサイト閲覧データを記録しています。',
    acceptBtnLabel: '同意して Cookie を受け入れる',
    cancelBtnLabel: '同意しない',
    detailBtnLink: '',
    detailBtnLabel: '詳細を見る'
};
export default (function (trackingCode, /*UA-XXXX-Y*/ option) {
    var _a = __assign({}, defaultOption, option), debuglog = _a.debuglog, storageName = _a.storageName, acceptBtnLabel = _a.acceptBtnLabel, cancelBtnLabel = _a.cancelBtnLabel, acceptBoxText = _a.acceptBoxText, hideCancelBtn = _a.hideCancelBtn, detailBtnLink = _a.detailBtnLink, detailBtnLabel = _a.detailBtnLabel;
    var cookieOptin = localStorage.getItem(storageName);
    if (cookieOptin === 'no') {
        if (debuglog) {
            console.log('ga_cookie_opt_in = no / ga-disable = true');
        }
        window["ga-disable-" + trackingCode] = true;
    }
    else if (cookieOptin === 'yes') {
        window["ga-disable-" + trackingCode] = false;
    }
    else {
        if (debuglog) {
            console.log('ga_cookie_opt_in = null');
        }
        window['ga-disable-UA-XXXX-Y'] = true;
        var accept = document.createElement('div');
        accept.setAttribute('class', 'module-ga-cookie-accept-bar');
        accept.setAttribute('id', 'name-ga-cookie-accept-bar');
        accept.innerHTML = "\n      <p>\n        " + acceptBoxText + "\n      </p>\n      <p>\n        " + (detailBtnLink ? "<a href=\"" + detailBtnLink + "\" class=\"module-ga-cookie-accept-btn\">" + detailBtnLabel + "</a>" : '') + "\n        <button id=\"name-ga-cookie-accept-btn\" class=\"module-ga-cookie-accept-btn\">" + acceptBtnLabel + "</button> \n        " + (!hideCancelBtn ? "<button id=\"name-ga-cookie-deny-btn\" class=\"module-ga-cookie-accept-btn module-ga-cookie-deny-btn\">" + cancelBtnLabel + "</button>" : '') + "\n      </p>\n    ";
        document.body.appendChild(accept);
        //各ボタンの取得
        var acceptBtn = document.getElementById('name-ga-cookie-accept-btn');
        var denyBtn = document.getElementById('name-ga-cookie-deny-btn');
        var resetBtn = document.getElementById('name-ga-cookie-reset-btn');
        //「同意する」ボタンのクリックでオプトイン（ga_cookie_opt_in = yes）
        if (acceptBtn) {
            acceptBtn.onclick = function () {
                localStorage.setItem('ga_cookie_opt_in', 'yes');
                var acceptBar = document.getElementById('name-ga-cookie-accept-bar');
                if (acceptBar) {
                    acceptBar.classList.add('state-remove');
                }
                //CSS Animation が完了するまで待機するための力技……
                window.setTimeout('window.location.reload(false)', 500);
            };
        }
        //「同意しない」ボタンのクリックでオプトアウト（ga_cookie_opt_in = no）
        if (denyBtn) {
            denyBtn.onclick = function () {
                localStorage.setItem('ga_cookie_opt_in', 'no');
                var acceptBar = document.getElementById('name-ga-cookie-accept-bar');
                if (acceptBar) {
                    acceptBar.classList.add('state-remove');
                }
                window.setTimeout('window.location.reload(false)', 500);
            };
        }
        //「設定をリセット」ボタンのクリックで ga_cookie_opt_in の値を削除
        if (resetBtn) {
            resetBtn.onclick = function () {
                localStorage.removeItem('ga_cookie_opt_in');
                location.reload(false);
            };
        }
    }
});
//# sourceMappingURL=index.js.map