const express = require('express');

const db = require('../data/db-config.js');

const router= express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(car =>{
        res.json(car);
    })
    .catch(err => {
        res.status.json({message: 'failed to retrieve car info'})
    })
})

module.exports = router;