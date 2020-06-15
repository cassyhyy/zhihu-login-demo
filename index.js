// 扫码登录
function loginByScanCode(flag){
    const login = document.getElementsByClassName('login-qrcode')[0];
    const btn_qrcode = document.getElementsByClassName('tab-qrcode')[0];
    const btn_return = document.getElementsByClassName('tab-qrcode')[1];
    const form = document.getElementsByClassName('form')[0];
    if(flag === 1){
        form.style.display = 'none';
        btn_qrcode.style.display = 'none';
        btn_return.style.display = 'block';
        login.style.display = 'block';
    }else{
        login.style.display = 'none';
        btn_return.style.display = 'none';
        btn_qrcode.style.display = 'block';
        form.style.display = 'block';
    }
}

function changeLogin(flag){
    // 选择免密码登录
    const phoneTab = document.getElementById('login-phone');
    const passwordTab = document.getElementById('login-password');
    const header = document.getElementsByClassName('form-header')[0];
    if(flag === 1){
        header.children[1].classList.remove('tab-login--bold');
        header.children[0].classList.add('tab-login--bold');
        passwordTab.style.display = 'none';
        phoneTab.style.display = 'block';
    }else{
        // 选择密码登录
        header.children[0].classList.remove('tab-login--bold');
        header.children[1].classList.add('tab-login--bold');
        phoneTab.style.display = 'none';
        passwordTab.style.display = 'block';
    }
}

// 检查输入
function checkInput(event){
    const target = event.target;
    let placeholder = target.getAttribute('placeholder');
    if(typeof target.value === 'undefined' || target.value === ''){
        if(placeholder.includes('验证码')){
            let substr = placeholder.substr(-5, 5);
            target.setAttribute('placeholder', `请输入${substr}`);
        }else{
            placeholder = placeholder.replace('请输入', '');
            target.setAttribute('placeholder', `请输入${placeholder}`);
        }
        target.classList.add('login-input--red');
    }
}

// 点击手机号输入框时，隐藏tip
function inputPhone(){
    const tip = document.getElementsByClassName('login-input-tip')[0];
    tip.style.display = 'none';
}

// 检查手机号
function checkPhone(){
    const phone = document.getElementById('phone-number').value;
    if(typeof phone !== 'undefined' && phone !== ''){
        const reg = /^1[3|4|5|8]\d{9}$/g;
        if(!reg.test(phone)){
            const tip = document.getElementsByClassName('login-input-tip')[0];
            tip.style.display = 'inline-block';
            return false;
        }else{
            let line = document.getElementsByClassName('form-captcha-line')[0];
            line.style.visibility = 'hidden';
            let captchaInput = document.getElementsByClassName('form-input-line')[1];
            captchaInput.children[1].style.display = 'none';
            captchaInput.children[2].style.display = 'inline-block';
            let seconds = 59;
            let interval = setInterval(() => {
                captchaInput.children[2].innerHTML = `${seconds}秒后可重发`
                seconds--;
                if(seconds === 0){
                    line.style.visibility = 'visible';
                    captchaInput.children[2].style.display = 'none';
                    captchaInput.children[2].innerHTML = `60秒后可重发`
                    captchaInput.children[1].style.display = 'inline-block';
                    clearInterval(interval);
                }
            }, 1000);
            return true;
        }
    }
    return false;
}

// 获取验证码
function getCaptcha(event){
    checkPhone();
    const target = event.target;
    if(target.classList.value.includes('login-captcha--gray')){
        // 点击的下面灰色的按钮，需要互换按钮
        let temp = target.innerHTML.substr(-5, 5);
        let line = document.getElementsByClassName('form-input-line')[1];
        let init = line.children[1].innerHTML;
        target.innerHTML = `接收${init.substr(-5, 5)}`;
        line.children[1].innerHTML = init.substr(0,init.length-5) + temp;
    }else{
        // 不需要互换按钮，需要在前面多加”重新“二字
        let str = target.innerHTML;
        str = str.replace('重新', '');
        target.innerHTML = `重新${str}`;
    }
}

// 忘记密码
function forgetPassword(){
    window.open('https://www.zhihu.com/account/password_reset');
}

// 海外手机号登录
function loginByPhone(event){
    const str = event.target.innerHTML;
    const email = document.getElementById('login-password').getElementsByClassName('form-input-line')[0];
    const phone = document.getElementById('login-password').getElementsByClassName('form-input-line')[1];
    if(str.includes('手机号')){
        // 切换到海外手机号登录
        email.style.display = 'none';
        phone.style.display = 'block';
        event.target.innerHTML = '邮箱账号登录';
    }else{
        // 切换到邮箱账号登录
        phone.style.display = 'none';
        email.style.display = 'block';
        event.target.innerHTML = '海外手机号登录';
    }
}

// 社交账号登录
function redirectToSocial(flag){
    if(flag === 1){
        // 微信
        window.open('https://open.weixin.qq.com/connect/qrconnect?appid=wx268fcfe924dcb171&redirect_uri=https%3A%2F%2Fwww.zhihu.com%2Foauth%2Fcallback%2Fwechat%3Faction%3Dlogin%26from%3D&response_type=code&scope=snsapi_login&state=74577131754535446351757a5878594f577244526643383655644f654c524f52#wechat');
    }else if(flag === 2){
        // QQ
        window.open('https://graph.qq.com/oauth2.0/show?which=Login&display=pc&scope=get_user_info%2Cget_info%2Cadd_t%2Cadd_pic_t%2Cget_other_info%2Cget_fanslist%2Cget_idollist%2Cadd_idol%2Cadd_share&state=74577131754535446351757a5878594f577244526643383655644f654c524f52&redirect_uri=https%3A%2F%2Fwww.zhihu.com%2Foauth%2Fcallback%2Fqqconn%3Faction%3Dlogin%26from%3D&response_type=code&client_id=100490701');
    }else{
        // 微博
        window.open('https://api.weibo.com/oauth2/authorize?scope=email&state=74577131754535446351757a5878594f577244526643383655644f654c524f52&redirect_uri=http%3A%2F%2Fwww.zhihu.com%2Foauth%2Fcallback%2Fsina&response_type=code&client_id=3063806388');
    }
}

// 开通机构号
function registerOrganization(){
    window.location.href = 'https://www.zhihu.com/org/signup';
}

// 下载知乎App，展示二维码
function downloadApp(flag){
    const footer = document.getElementsByClassName('tab-footer')[0];
    const qrcode = document.getElementsByClassName('tab-download')[0];
    
    if(flag === 1){
        // 二维码动画展示效果
        qrcode.children[0].style.display = 'block';
        qrcode.classList.add('tab-download-transition');
        footer.children[2].style.display = 'none';
        footer.children[3].style.display = 'block';
    }else{
        qrcode.classList.remove('tab-download-transition');
        // 动画效果结束后，将二维码图片设置不显示，以防阻止其他div上的button点击事件
        setTimeout(()=>{
            qrcode.children[0].style.display = 'none';
        }, 300);
        footer.children[3].style.display = 'none';
        footer.children[2].style.display = 'block';
    }
}