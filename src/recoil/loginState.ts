
import { atom, selector } from "recoil";


export const loginState = atom({
    key: "loginState",
    default: false
})

export const loginValue = selector({
    key: "loginValue",
    get: ({get})=> {
        const value = get(loginState);
        return value;
    }
})
