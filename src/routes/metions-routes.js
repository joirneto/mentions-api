const express = require('express');
const router  = express.Router();
const { check } = require('express-validator')
const metionsController = require('../controllers/metions-constroller');

router.get('/', metionsController.listMetions);
router.post('/',[
  check('friend').isLength({min: 7}).withMessage("O nome precisa ter no mínimo 7 caracteres."),
  check('metion').isLength({min: 20, max: 280}).withMessage("A menção precisa ter no mínimo 20 caracteres e no máximo 280.")
], metionsController.createMetions);

router.put('/:id',[
  check('friend').optional().isLength({min: 7}).withMessage("O nome precisa ter no mínimo 7 caracteres."),
  check('metion').optional().isLength({min: 20, max: 280}).withMessage("A menção precisa ter no mínimo 20 caracteres e no máximo 280.")
] ,metionsController.updateMetion);

router.delete('/:id',metionsController.deleteMetion);

module.exports = router;