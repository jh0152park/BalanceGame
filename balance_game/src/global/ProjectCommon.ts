import { atom } from "recoil";

export const IsUserLoggedIn = atom<boolean>({
    default: false,
    key: "IsUserLoggedIn",
});
