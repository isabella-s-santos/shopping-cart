import Product from '../models/Product.js';

export const getProducts = (_, res) => {
    Product.find({}, '_id userId name description price').exec((err, products) => {
        if (err) {
            res.status(404).send({ message: '' }); // Erro 404?
            return;
        };

        res.status(200).send(products);
    });
}; 

export const addProduct = (req, res) => {
    const product = new Product({
        userId: req.body.userId,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    console.log(product.userId);

    product.save((err, _) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        };

        res.status(201).send({ message: 'Product registered successfully!' })
    });
};

