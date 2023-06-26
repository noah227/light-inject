import _core, {TCreatedEl, TExtraBind} from "./_core";
import {injectConfig, TInjectType} from "./_config";


/**
 * 注入
 * @param t 指明是css还是js
 * @param s css/js内容或者url地址
 * @param extraBind 额外的绑定
 */
const _inject = (t: TInjectType, s: string, extraBind?: TExtraBind) => {
    const {tagName, bind} = injectConfig[t]
    const el = document.createElement(tagName) as TCreatedEl
    _core._bindExtra(el, {...bind, ...extraBind})
    if (_core._isUrl(s)) _core._injectFromUrl(el, s)
    else _core._injectWithContent(el, s)
    _core._addToDocument(el)
    return el
}
/**
 *
 * @param s css/js内容或者url地址
 * @param extraBind 额外的绑定
 */
const injectJS = (s: string, extraBind?: TExtraBind) => {
    return _inject("js", s, extraBind)
}
/**
 * @param s css/js内容或者url地址
 * @param extraBind 额外的绑定
 */
const injectCss = (s: string, extraBind?: TExtraBind) => {
    return _inject("css", s, extraBind)
}
export default {
    inject: _inject,
    injectJS,
    injectCss
}