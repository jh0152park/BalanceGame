import axios from "axios";
import Cookie from "js-cookie";
import { QueryFunctionContext } from "react-query";
import { IPostSurveyParams } from "./ProjectTypes";
import { useRecoilValue } from "recoil";
import { UserInformation } from "./global/ProjectCommon";

const axciosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    withCredentials: true,
});

interface ISignUpWithEmailProps {
    email: string;
    password: string;
    nickname: string;
}
export async function signUpWithEmail({
    email,
    password,
    nickname,
}: ISignUpWithEmailProps) {
    const response = await axciosInstance.post(
        "/auth/signup",
        {
            email,
            password,
            nickname,
        },
        {
            headers: {
                "X-CSRFToken": Cookie.get("csrftoken") || "",
            },
        }
    );
    return response.data;
}

interface ISignInWithEmailProps {
    email: string;
    password: string;
}
export async function signInWithEmail({
    email,
    password,
}: ISignInWithEmailProps) {
    const response = await axciosInstance.post(
        "/auth/signin",
        {
            email,
            password,
        },
        {
            headers: {
                "X-CSRFToken": Cookie.get("csrftoken") || "",
            },
        }
    );
    return response.data;
}

export async function createGame({
    category,
    title,
    game,
    accessToken,
}: IPostSurveyParams) {
    const response = await axciosInstance.post(
        "/games/create",
        {
            category,
            title,
            game,
        },
        {
            headers: {
                "X-CSRFToken": Cookie.get("csrftoken") || "",
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
    return response.data;
}

export async function getEntireGame() {
    const response = await axciosInstance.get("/games");
    return response.data;
}

export async function getGame({ queryKey }: QueryFunctionContext) {
    const [_, category] = queryKey;
    const response = await axciosInstance.get(`/games/${category}`);
    return response.data;
}

interface ICreateComment {
    gamesId: string | number;
    description: string;
    accessToken: string;
}
export async function createComment({
    gamesId,
    description,
    accessToken,
}: ICreateComment) {
    const response = await axciosInstance.post(
        `/games/${gamesId}/comment`,
        {
            description,
        },
        {
            headers: {
                "X-CSRFToken": Cookie.get("csrftoken") || "",
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
    return response.data;
}

interface ISelect {
    gamesId: string | number;
    gameId: string | number;
}
export async function selectSurvey({ gamesId, gameId }: ISelect) {
    const response = await axciosInstance.post(
        `/games/${gamesId}/select`,
        {
            gameId,
        },
        {
            headers: {
                "X-CSRFToken": Cookie.get("csrftoken") || "",
            },
        }
    );
    return response.data;
}

export async function likeSurvey({ gamesId }: { gamesId: string | number }) {
    const response = await axciosInstance.get(`/games/${gamesId}/like`);
    return response.data;
}

export async function disLikeSurvey({ gamesId }: { gamesId: string | number }) {
    const response = await axciosInstance.get(`/games/${gamesId}/dislike`);
    return response.data;
}

export async function logout() {
    const response = await axciosInstance.get("/auth/signout");
    return response.data;
}

export async function getUserInformation({ queryKey }: QueryFunctionContext) {
    const [_, accessToken] = queryKey;
    const response = await axciosInstance.get(`/auth/my`, {
        headers: {
            "X-CSRFToken": Cookie.get("csrftoken") || "",
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
}

export async function changeNickname({
    nickname,
    accessToken,
}: {
    nickname: string;
    accessToken: string;
}) {
    const response = await axciosInstance.post(
        `/auth/nickname`,
        {
            nickname,
        },
        {
            headers: {
                "X-CSRFToken": Cookie.get("csrftoken") || "",
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
    return response.data;
}
