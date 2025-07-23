const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await sequelize.sync();
    console.log('Database synced');
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.error('Unable to connect to DB:', err);
  }
});
