import {TExtraBind} from "./_core";

export type TInjectType = "js" | "css"
type TInjectConfig = {
    [k in TInjectType]: {
        tagName: string
        bind?: TExtraBind
    }
}
export const injectConfig: TInjectConfig = {
    "js": {
        tagName: "script",
        bind: {
            type: "text/javascript"
        }
    },
    "css": {
        tagName: "link",
        bind: {
            rel: "stylesheet"
        }
    }
}