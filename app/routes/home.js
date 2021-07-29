const router = require('express').Router();
const {getVar, updateVar} =  require('../controllers/home.controller');

router.get('/', getVar);


router.post('/', updateVar);


module.exports = router;

