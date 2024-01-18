import axios from "axios";
import Cookie from "js-cookie";

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

export async function signInWithEmail({
    email,
    password,
}: ISignUpWithEmailProps) {
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
