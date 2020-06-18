import { Router } from 'express'
const router = Router()
import { passThroughModel } from '../../models/passThrough/index'
import app from '../../app'

router.all('/pass/:action/:url(\\S+)', (req, res) => {
    const action = req.params.action;
    const url = req.params.url;
    return new passThroughModel(app).passThrough(url,action,req.body,req.query).then((data)=> { return res.send(data) } ).catch((err)=>{return res.send(err)})
})

module.exports = router
