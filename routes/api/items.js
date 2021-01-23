const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

router.get('/', itemsCtrl.index);
router.post('/', itemsCtrl.create);
//add create route here


module.exports = router;