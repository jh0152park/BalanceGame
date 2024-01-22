function getUniqStateValue() {
    var stat_str = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            var r = (Math.random() * 16) | 0,
                v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        }
    );
    return stat_str;
}

export function onKakaoClick() {
    const kakaoClientId = process.env.REACT_APP_KAKAO_RESTAPI_KEY;
    const redirectUri = process.env.REACT_APP_KAKAO_REDIRECT_URI;
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoClientId}&redirect_uri=${redirectUri}`;
}

export function onNaverClick() {
    const naverClientId = process.env.REACT_APP_NAVER_CLIENT_ID;
    const state = getUniqStateValue();
    const redirectUri = process.env.REACT_APP_NAVER_REDIRECT_URI;
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientId}&state=${state}&redirect_uri=${redirectUri}`;
}
