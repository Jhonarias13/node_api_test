const router = require('express').Router();
const { getLed, updateLed, createLed } = require('../controllers/led.controller');

router.get('', getLed);

router.post(':id', createLed);

router.post('', updateLed);


module.exports = router;

