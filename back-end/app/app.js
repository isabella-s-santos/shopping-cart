import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import init from './database/init.js';

import { login, validate } from './middlewares/auth.js';
import { getUsers, getUserById, signup, updateUser, deleteUser, searchUserByName } from './middlewares/users.js';
import { addProduct, getProducts } from './middlewares/products.js'

mongoose.Promise = global.Promise;

const app = express();

const PORT = 5000;

init();

const corsOptions = {
    origin: 'http://localhost:4200'
};

app.use((_, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept'
    );
    next();
})

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log('Subiu!'));

// Auth

app.post('/login', login);

// Users
app.get('/users', validate, getUsers);

app.get('/users/:id', validate, getUserById);

app.post('/signup', signup);

app.put('/users/:id', validate, updateUser);

app.delete('/users/:id', validate, deleteUser);

app.get('/search', validate, searchUserByName);

// Products
app.get('/products', getProducts);

app.post('/sell', addProduct);