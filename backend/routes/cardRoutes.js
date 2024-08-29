// routes/cardRoutes.js
const express = require('express');
const router = express.Router();
const {
  getAllCards,
  getCardByTitle,
  createCard,
} = require('../controllers/cardController');


router.post('/cards', createCard);


router.get('/cards', getAllCards);

router.get('/cards/:title', getCardByTitle);

module.exports = router;