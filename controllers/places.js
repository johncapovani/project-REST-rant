const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places, You have arrived')
})

module.exports = router
