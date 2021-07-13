const express = require('express');
const router  = express.Router();
const metionsController = require('../controllers/metions-constroller');

router.get('/', metionsController.listMetions);
router.post('/', metionsController.createMetions);

module.exports = router;