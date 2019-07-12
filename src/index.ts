interface Option {
  debuglog: boolean,
  StorageName: string,
  acceptBtnLabel: string,
  cancelBtnLabel: string,
  acceptBoxText: string
}

const defaultOption = {
  storageName: 'ga_cookie_opt_in',
  debuglog: false,
  acceptBoxText: 'このサイトでは Google アナリティクスの Cookie（クッキー）を使用して、ユーザーのWebサイト閲覧データを記録しています。',
  acceptBtnLabel: '同意して Cookie を受け入れる',
  cancelBtnLabel: '同意しない'
}

declare global {
  interface Window {
    [name: string]: any
  }
}

export default (trackingCode: string, /*UA-XXXX-Y*/option: Partial<Option>) => {
  const { debuglog, storageName, acceptBtnLabel, cancelBtnLabel, acceptBoxText } = 
  { ...defaultOption, ...option};
  const cookieOptin = localStorage.getItem(storageName);
  if (cookieOptin === 'no') {
    if (debuglog) {
      console.log('ga_cookie_opt_in = no / ga-disable = true');
    }
    window[`ga-disable-${trackingCode}`] = true;
  } else if (cookieOptin === 'yes') {
    window[`ga-disable-${trackingCode}`] = false;
  } else {
    if (debuglog) {
      console.log('ga_cookie_opt_in = null');
    }
    window['ga-disable-UA-XXXX-Y'] = true;
    const accept = document.createElement('div');
    accept.setAttribute('class', 'module-ga-cookie-accept-bar');
    accept.setAttribute('id', 'name-ga-cookie-accept-bar');
    accept.innerHTML = `
      <p>
        ${acceptBoxText}
      </p>
      <p>
        <button id="name-ga-cookie-accept-btn" class="module-ga-cookie-accept-btn">${acceptBtnLabel}</button> 
        <button id="name-ga-cookie-deny-btn" class="module-ga-cookie-accept-btn module-ga-cookie-deny-btn">${cancelBtnLabel}</button>
      </p>
    `;
    document.body.appendChild(accept);

    //各ボタンの取得
    const acceptBtn = document.getElementById('name-ga-cookie-accept-btn');
    const denyBtn   = document.getElementById('name-ga-cookie-deny-btn');
    const resetBtn  = document.getElementById('name-ga-cookie-reset-btn');
    
    //「同意する」ボタンのクリックでオプトイン（ga_cookie_opt_in = yes）
    if (acceptBtn) {
      acceptBtn.onclick = function() {
        localStorage.setItem('ga_cookie_opt_in','yes');
        const acceptBar = document.getElementById('name-ga-cookie-accept-bar');
        if (acceptBar) {
          acceptBar.classList.add('state-remove');
        }
        //CSS Animation が完了するまで待機するための力技……
        window.setTimeout('window.location.reload(false)', 500);
      };
    }

    //「同意しない」ボタンのクリックでオプトアウト（ga_cookie_opt_in = no）
    if (denyBtn) {
      denyBtn.onclick = function() {
        localStorage.setItem('ga_cookie_opt_in','no');
        const acceptBar = document.getElementById('name-ga-cookie-accept-bar');
        if (acceptBar) {
          acceptBar.classList.add('state-remove');
        }
        window.setTimeout('window.location.reload(false)', 500);
      };
    }

    //「設定をリセット」ボタンのクリックで ga_cookie_opt_in の値を削除
    if (resetBtn) {
      resetBtn.onclick = function() {
        localStorage.removeItem('ga_cookie_opt_in');
        location.reload(false);
      };
    }
  }
}