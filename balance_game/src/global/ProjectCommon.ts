import { atom } from "recoil";
import { ISignInResponse } from "../ProjectTypes";

export const CurrentCategory = atom<string>({
    default: "",
    key: "CurrentCategory",
    effects: [
        ({ setSelf, onSet }) => {
            const savedData = sessionStorage.getItem("CurrentCategory");
            if (savedData) {
                setSelf(JSON.parse(savedData));
            }

            onSet((newValue, _, isReset) => {
                isReset
                    ? sessionStorage.removeItem("CurrentCategory")
                    : sessionStorage.setItem(
                          "CurrentCategory",
                          JSON.stringify(newValue)
                      );
            });
        },
    ],
});

export const IsUserLoggedIn = atom<boolean>({
    default: false,
    key: "IsUserLoggedIn",
    effects: [
        ({ setSelf, onSet }) => {
            const savedData = sessionStorage.getItem("IsUserLoggedIn");
            if (savedData) {
                setSelf(JSON.parse(savedData));
            }

            onSet((newValue, _, isReset) => {
                isReset
                    ? sessionStorage.removeItem("IsUserLoggedIn")
                    : sessionStorage.setItem(
                          "IsUserLoggedIn",
                          JSON.stringify(newValue)
                      );
            });
        },
    ],
});

export const UserInformation = atom<ISignInResponse>({
    default: {
        uid: 0,
        email: "",
        nickname: "",
        accessToken: "",
    },
    key: "UserInformation",
    effects: [
        ({ setSelf, onSet }) => {
            const savedData = sessionStorage.getItem("UserInformation");
            if (savedData) {
                setSelf(JSON.parse(savedData));
            }

            onSet((newValue, _, isReset) => {
                isReset
                    ? sessionStorage.removeItem("UserInformation")
                    : sessionStorage.setItem(
                          "UserInformation",
                          JSON.stringify(newValue)
                      );
            });
        },
    ],
});
