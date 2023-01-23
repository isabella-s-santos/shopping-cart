import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';

import config from '../config/index.js';

export const login = (req, res) => {
    User.findOne({
        email: req.body.email
    })
    .exec((err, user) => {
        if (err) {
            res.status(500).send({ message: '' }); // Erro 500? Que tipo de erro "cairia" aqui?
            return;
        };

        if (!user) {
            res.status(404).send({ message: 'The e-mail address is not assigned to a registered user.' });
            return;
        }

        let passwordIsValid = bcrypt.compareSync(
            req.body.password, user.password
        );

        if (!passwordIsValid) return res.status(401).send({ message: 'Invalid password.' });

        let token = jwt.sign({ id: user.id }, config.SECRET, {
            expiresIn: 86400
        });

        res.status(200).send({
            accessToken: token,
            userId: user._id
        });
    });
};

export const validate = (req, res, next) => {
    let token = req.get('X-token');

    if (!token) return res.status(403).send({ message: 'Can\'t find a token.' });

    jwt.verify(token, config.SECRET, (err, _) => {
        if (err) return res.status(401).send({ messade: 'Invalid token.' });
    });

    next();
};