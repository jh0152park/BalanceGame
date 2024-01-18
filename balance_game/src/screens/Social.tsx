import React from "react";
import { useParams } from "react-router-dom";

export default function Social() {
    const param = useParams();

    // param에 uid, email, nickname, accessToken 달려있음
    // 위 정보 저장 후 다시 리다이렉션 필요
    console.log(param);

    return <div>Social</div>;
}
