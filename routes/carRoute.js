const express = require('express');

const db = require('../data/db-config.js');

const router= express.Router();

router.get('/', (req, res) => {
    db('car_dealer')
    .then(cars =>{
        res.status(200).json(cars);
    })
    .catch(err => {
        res.status(500).json({message: 'failed to retrieve car info'})
    })
})
router.get('/:id', (req, res)=> {
    db('car_dealer')
    .where({ id: req.params.id })
    .first()
    .then(car => {
        if(car) {
            res.status(200).json(car);
        }else{
            res.status(404).json({ message: 'car info not found'})
        }
    });
});
router.post('/', (req, res) => {
    const carData = req.body;
    //validate data
    db('car_dealer')
    .insert(carData, "id")
    .then( car => {
        res.status(200).json(car)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;