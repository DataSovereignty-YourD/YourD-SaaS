import { atom, selector } from "recoil";

export interface projectType {
    projectName: string,
    startProjectDate: number,
    QR?:any,
    clientId:number,
    redirectURLs:any,
    didChain: string,
    serviceChain: string,
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

export const currentProjectState = atom<projectType>({
    key:"currentProjectState",
    default: { 
        projectName: '',
        startProjectDate:0,
        clientId:0,
        redirectURLs:[],
        didChain:'',
        serviceChain:'',
    }
})

export const currentProjectVaule = selector<projectType>({
    key:"currentProjectVaule",
    get:({get})=> {
        const currentProject = get(currentProjectState);
        return currentProject;
    }
})