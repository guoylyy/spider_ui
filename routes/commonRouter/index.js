import express from 'express';
import serverData from '../../config/server.config';
import getReactResource from '../getReactResource';
const router = express.Router();

const renderPage = (req, res)=>{
    const id = req.query.id
    const pageType = req.params.pageType || 'gameHome';
    let promiseApi = [ ];
    let apiData = {
        id,
        pageType,
        nodeenv:process.env.NODE_ENV || 'development'
    }
    Promise.all([...promiseApi]).then((result) => {
        [
            apiData.userInfo={},
        ] = result
        const resource = getReactResource('gameHome', serverData, apiData)
        return res.render('index', resource)
    }).catch((e) => {
        return res.send(JSON.stringify(e))
    })
};

router.get('/:pageType',renderPage)

module.exports = router
