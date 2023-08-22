import { atom, selector } from "recoil";

export const sideBarToggleState = atom({
    key: "sideBarToggle",
    default: true,
})

export const sideBarTogleValue = selector({
    key: "sideBarToggleValue",
    get: ({ get }) => {
        const value = get(sideBarToggleState);
        return value;
    },
});
