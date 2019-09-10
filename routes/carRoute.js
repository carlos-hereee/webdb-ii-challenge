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

router.put('/:id', (req, res) => {
    db('car_dealer')
        .where({ id: req.params.id })
        .update(req.body)
        .then(count => {
        if (count) {
            res.status(200).json({ message: `${count} car(s) updated` });
        } else {
            res.status(404).json({ message: 'Account not found status 404' });
        }
        })
        .catch(() => {
        res.status(500).json({ message: 'Could not update the car info status 500' });
        });
    });
    
router.delete('/:id', (req, res) => {
    db('car_dealer')
        .where({ id: req.params.id })
        .del()
        .then(count => {
        res.status(200).json({ message: `${count} car(s) deleted` });
        })
        .catch(() => {
        res.status(500).json({ message: 'Could not remove the account status 500' });
        });
});


module.exports = router;