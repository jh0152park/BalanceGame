import { atom } from "recoil";

export const CurrentCategory = atom<string>({
    default: "",
    key: "CurrentCategory",
});

export const IsUserLoggedIn = atom<boolean>({
    default: false,
    key: "IsUserLoggedIn",
});
