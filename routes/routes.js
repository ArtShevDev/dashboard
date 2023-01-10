const { Router } = require('express');
const postcontrollers = require('../controllers/postController');

const router = Router();

router.get('/', postcontrollers.getHome);

module.exports = router;