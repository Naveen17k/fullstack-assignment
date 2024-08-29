const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const cardRoutes = require('./routes/cardRoutes');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', cardRoutes);

app.use(errorHandler);

app.get('/ping', (req, res) => res.send('Server is running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));