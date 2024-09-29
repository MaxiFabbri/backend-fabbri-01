import express from 'express';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';

import config from './config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// paquete de rutas-endpoints dinamicos
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

// paquete de rutas-endpoints estatico
// app.use('/static', express.static(`${config.DIRNAME}/public`));

app.listen(config.PORT, () => {
    console.log(`Server activo en puerto ${config.PORT}`);
});
