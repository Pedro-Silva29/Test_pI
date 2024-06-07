const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./config/database');

// Importar as rotas do usuário final
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const cartRoutes = require('./routes/cart');

// Importar as rotas do administrador
const adminUserRoutes = require('./routes/admin/user');
const adminCategoryRoutes = require('./routes/admin/category');
const adminProductRoutes = require('./routes/admin/product');
const adminOrderRoutes = require('./routes/admin/order');
const adminCartRoutes = require('./routes/admin/cart');

// Criar a aplicação Express
const app = express();

// Configurar middleware para parsing de JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Usar as rotas do usuário final
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/carts', cartRoutes);

// Usar as rotas do administrador
app.use('/api/admin/users', adminUserRoutes);
app.use('/api/admin/categories', adminCategoryRoutes);
app.use('/api/admin/products', adminProductRoutes);
app.use('/api/admin/orders', adminOrderRoutes);
app.use('/api/admin/carts', adminCartRoutes);

// Sincronizar o banco de dados e iniciar o servidor
sequelize.sync()
    .then(() => {
        console.log('Database synced');
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error syncing database', err);
    });

module.exports = app;
