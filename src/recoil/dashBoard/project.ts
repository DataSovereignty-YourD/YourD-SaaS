import { atom, selector } from "recoil";

export interface projectType {
    projectName: string,
    startProjectDate: number,
    QR?:any,
    clientId:number,
    redirectURLs:any,
}

export const projectModalState = atom({
    key: "projectModalState",
    default: false
})

export const projectState = atom<projectType[]>({
    key: "projectState",
    default: []
})

export const projectValue = selector({
    key:"projectValue",
    get: ({get})=> {
        const projectInfo = get(projectState);
        return projectInfo;
    }
})