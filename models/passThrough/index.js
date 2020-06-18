import { CommonModel } from '../common/CommonModel'
import config from '../../config/server.config'
import querystring from 'querystring';
const {
    apiUrl
} = config

export class passThroughModel extends CommonModel {
    //透传
    passThrough(url,method,param={},query={}) {
        const passUrl = `${apiUrl}/${url}?${querystring.stringify(query)}`;
        return this.fetch(passUrl,param,method)
    }
}