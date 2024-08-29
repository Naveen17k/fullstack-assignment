
const Card = require('../models/card');

exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getCardByTitle = async (req, res) => {
  const { title } = req.params;
  try {
    const card = await Card.findOne({ title });
    if (!card) return res.status(404).json({ message: 'Card not found' });
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.createCard = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newCard = new Card({ title, description });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
