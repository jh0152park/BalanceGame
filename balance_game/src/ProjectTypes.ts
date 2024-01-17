export type CATEGORY =
    | "랜덤"
    | "상황"
    | "음식"
    | "연애"
    | "정치"
    | "오락"
    | "성인"
    | "자동차"
    | "스포츠"
    | "개쌉오바";

export const CATEGORIES: CATEGORY[] = [
    "랜덤",
    "상황",
    "음식",
    "연애",
    "정치",
    "오락",
    "성인",
    "자동차",
    "스포츠",
    "개쌉오바",
];

type ObjectType = {
    [index: string]: string;
    랜덤: string;
    상황: string;
    음식: string;
    연애: string;
    정치: string;
    오락: string;
    성인: string;
    자동차: string;
    스포츠: string;
    개쌉오바: string;
};

export const CATEGORIES_ENG: ObjectType = {
    랜덤: "random",
    상황: "situation",
    음식: "food",
    연애: "relationship",
    정치: "politics",
    오락: "entertainment",
    성인: "adult",
    자동차: "car",
    스포츠: "sport",
    개쌉오바: "nightmare",
};

interface IGame {
    title: string;
    description: string;
}

export interface ISurvey {
    category: string;
    title: string;
    game: IGame[];
}

export interface ISignUpResponse {
    uid: number;
    email: string;
    nickname: string;
    accessToken: string;
}

export interface ISignInResponse {
    uid: number;
    email: string;
    nickname: string;
    accessToken: string;
}

export interface ISignInNaverResponse {
    uid: number;
    email: string;
    nickname: string;
    accessToken: string;
}

export interface ISignInKakaoResponse {
    uid: number;
    email: string;
    nickname: string;
    accessToken: string;
}
