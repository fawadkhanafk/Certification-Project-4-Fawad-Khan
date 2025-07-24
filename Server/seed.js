const { sequelize, Product } = require('./models');

async function seed() {
  await sequelize.sync({ force: true }); 

  await Product.bulkCreate([
    {
      title: 'T-Shirt',
      image: 'https://via.placeholder.com/150',
      price: 19.99,
      quantity: 50,
      category: 'Clothing',
      description: 'Comfortable cotton T-shirt.'
    },
    {
      title: 'Jeans',
      image: 'https://via.placeholder.com/150',
      price: 49.99,
      quantity: 30,
      category: 'Clothing',
      description: 'Slim-fit blue denim jeans.'
    },
    {
      title: 'Sneakers',
      image: 'https://via.placeholder.com/150',
      price: 89.99,
      quantity: 20,
      category: 'Footwear',
      description: 'Running shoes with great grip.'
    }
  ]);

  console.log('✅ Products added with full details!');
  process.exit();
}

seed();
