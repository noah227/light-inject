import {TInjectTarget} from "./_config";

export type TExtraBind = { [index: string]: any }
export type TCreatedEl = HTMLScriptElement | HTMLLinkElement

export const _isUrl = (s: string) => {
    let _: boolean
    try {
        new URL(s)
        _ = true
    } catch (e) {
        _ = false
    }
    return _
}

export const _injectWithContent = (el: TCreatedEl, content: string) => {
    el.innerHTML = content
}
export const _injectFromUrl = (el: TCreatedEl, url: string) => {
    if (el instanceof HTMLScriptElement) el.src = url
    else if (el instanceof HTMLLinkElement) el.href = url
}
export const _bindExtra = (el: TCreatedEl, extraBind?: TExtraBind) => {
    if (extraBind) {
        Object.entries(extraBind).forEach(([k, v]) => {
            el.setAttribute(k, v)
        })
    }
    return el
}
export const _addToDocument = (el: TCreatedEl, injectTo?: TInjectTarget) => {
    const target = injectTo ? (typeof injectTo === "string" ? document.querySelector(injectTo) : injectTo) : document.head
    if(target) target.appendChild(el)
    else throw new Error(`Inject failed, can't find target dom to inject! You may passed Incorrect params!`)
}

export default {
    _isUrl,
    _bindExtra,
    _injectFromUrl,
    _injectWithContent,
    _addToDocument
}
