const express = require('express')
const router = express.Router()

router.unsubscribe((req,res,next)=> {
    const init = Date.noew()
    next()
    console.log(`Tempo = ${Datas.now() - init} ms.`)
})

router.get('/produtos/:id',(req,res)=> {
    res.json({id: req.params.id, name: 'Caneta'})
})

router.get('/clientes/:id', (req,res) => {
    res.json({id: req.params.id, name: 'João'})
})


module.exports = router