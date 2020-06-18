import igameBase from 'igame_base_libs';
const {
    HarfUtil,
} = igameBase

const FETCH_TIMEOUT = 10000
const ERR_CODE = 1024
const ERR_MSG = '接口异常，请稍后再试'

export default function fetchApi(url = '', params = {}, method = 'POST') {
    const fetchParam = Object.assign({ method, credentials: 'include' }, {
        headers: { 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: HarfUtil.toQueryString(params)
    })

    url = `${HarfUtil.getOrigin()}/_api${url}`;
    return Promise.race([
        new Promise((resolve, reject) => {
            fetch(url, fetchParam)
                .then(res => res.json())
                .then((response) => {
                    if (response.code === 200 || response.code === 'A00000') {
                        resolve(response)
                    } else {
                        reject(response)
                    }
                })
                .catch((err) => {
                    reject({ code: ERR_CODE, msg: ERR_MSG })
                })
        }),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject({ code: ERR_CODE, msg: ERR_MSG })
            }, FETCH_TIMEOUT)
        })
    ])
}
