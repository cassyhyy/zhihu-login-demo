// 扫码登录
function loginByScanCode(){
    
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
    if(flag === 1){
        // 二维码动画展示效果
        footer.children[2].style.display = 'none';
        footer.children[3].style.display = 'block';
    }else{
        footer.children[3].style.display = 'none';
        footer.children[2].style.display = 'block';
    }
}