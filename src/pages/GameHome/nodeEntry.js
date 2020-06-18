import Index from './components/index'

const Entry = (data) => {
    let initData = {};
    __IS_SSR__  ? initData = data : initData = __PRELOADED_STATE__;
    return (
        <Index {...initData}/>
    )
}
export default Entry