const express = require('express');
const router = express.Router();
const controller = require('../controller/pokemon');

router.get('/api', controller.get_view);
router.post('/api/', controller.get_post);
router.put('/apiput/:id', controller.get_put);
router.delete('/api/:id', controller.deletePokemon);

module.exports = router;