import { atom, selector } from "recoil";

export interface projectType {
    ProjectName: string,
    ServiceDID?: string,
    StartProjectDate: number,
    QR?:any,
    ProjectID:number,
    RedirectURLs:any,
    WebLoginURL:string,
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

export const redirectURLState = atom({
    key: 'redirectURLState',
    default: []
})
