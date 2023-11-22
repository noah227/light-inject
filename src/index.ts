import _core, {TCreatedEl, TExtraBind} from "./_core";
import {injectConfig, TInjectTarget, TInjectType} from "./_config";


/**
 * 注入
 * @param t 指明是css还是js
 * @param s css/js内容或者url地址
 * @param extraBind 额外的绑定
 * @param injectTo 指定对象文档
 */
const _inject = (t: TInjectType, s: string, extraBind?: TExtraBind, injectTo?: TInjectTarget) => {
    const {tagName, bind} = injectConfig[t]
    const el = document.createElement(tagName) as TCreatedEl
    _core._bindExtra(el, {...bind, ...extraBind})
    if (_core._isUrl(s)) _core._injectFromUrl(el, s)
    else _core._injectWithContent(el, s)
    _core._addToDocument(el, injectTo)
    return el
}
/**
 *
 * @param s css/js内容或者url地址
 * @param extraBind 额外的绑定
 * @param injectTo 指定对象文档
 */
const injectJS = (s: string, extraBind?: TExtraBind, injectTo? : TInjectTarget) => {
    return _inject("js", s, extraBind, injectTo)
}
/**
 * @param s css/js内容或者url地址
 * @param extraBind 额外的绑定
 * @param injectTo 指定对象文档
 */
const injectCss = (s: string, extraBind?: TExtraBind, injectTo?: TInjectTarget) => {
    return _inject("css", s, extraBind, injectTo)
}
export default {
    inject: _inject,
    injectJS,
    injectCss
}
