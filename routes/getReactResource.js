const React = require("react")
const ReactDOMServer = require("react-dom/server")
const { renderToString } = ReactDOMServer

/*
* name:webpack入口[name]
* data:ssr接口数据
* */
export default function getReactResource(name, serverData = {}, apiData = {}) {
    const IndexBundle = require(`../dist_server/${name}.server.js`)
    apiData.pageType = name
    const instance = React.createElement(IndexBundle.default, apiData)
    const html = renderToString(instance)
    return {
        html,
        apiData,
        ...serverData
    }
}
