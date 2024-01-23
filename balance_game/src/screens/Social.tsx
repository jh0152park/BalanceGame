import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { IsUserLoggedIn, UserInformation } from "../global/projectCommon";
import { useToast } from "@chakra-ui/react";

export default function Social() {
    const toast = useToast();
    const param = useParams();
    const navigate = useNavigate();
    const setIsUserLoggedIn = useSetRecoilState(IsUserLoggedIn);
    const setUserInformation = useSetRecoilState(UserInformation);

    useEffect(() => {
        if (
            param &&
            param.uid &&
            param.email &&
            param.nickname &&
            param.accessToken
        ) {
            toast({
                status: "success",
                title: "로그인 성공",
                description: `환영합니다 ${param.nickname}님`,
            });
            setUserInformation({
                uid: Number(param.uid),
                email: param.email,
                nickname: param.nickname,
                accessToken: param.accessToken,
            });
            setIsUserLoggedIn(true);
            navigate("/main");
        } else {
            toast({
                status: "error",
                title: "잠시후 재시도 해주세요",
            });
            navigate("/");
        }
    }, []);

    return <div>Social</div>;
}
