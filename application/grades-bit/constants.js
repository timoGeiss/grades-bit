import {atom} from "jotai";

export const colors = {
    primary: "#206487",
    secondary: "#D2E5F4",
    onPrimary: "#FFF",
    text: "#000",
    background: "#FFF",
    outline: "#808080"
};
// export const reloadAtom = atom({board: false, state: false, category: false})
export const reload = {};
export const searchStringAtom = atom("");
// export const lastBoardIdKey = "reactive-kanban-id:";
export const database = {connection: {}, id: null};