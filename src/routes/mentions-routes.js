const express = require('express');
const router = express.Router();
const { check } = require('express-validator')
const mentionsController = require('../controllers/mentions-constroller');

router.get('/', mentionsController.listmentions);
router.post('/', [
  check('friend').isLength({ min: 7 }).withMessage("O nome precisa ter no mínimo 7 caracteres."),
  check('mention').isLength({ min: 20, max: 280 }).withMessage("A menção precisa ter no mínimo 20 caracteres e no máximo 280.")
], mentionsController.creatementions);

router.put('/:id', [
  check('friend').optional().isLength({ min: 7 }).withMessage("O nome precisa ter no mínimo 7 caracteres."),
  check('mention').optional().isLength({ min: 20, max: 280 }).withMessage("A menção precisa ter no mínimo 20 caracteres e no máximo 280.")
], mentionsController.updatemention);

router.delete('/:id', mentionsController.deletemention);

module.exports = router;