import bcrypt from 'bcryptjs';
import { ObjectId } from 'bson';

import User from '../models/User.js';

export const getUsers = (_, res) => {
    User.find({}, '_id name email').exec((err, users) => {
        if (err) {
            res.status(404).send({ message: '' }); // Erro 404?
            return;
        };

        res.status(200).send(users);
    });
}; 

export const getUserById = (req, res) => {
    User.findOne(
        { _id: ObjectId(req.params.id) }, 
        '_id name email password'
    ).exec((err, user) => {
        if (err) {
            res.status(404).send({ message: 'User not find.' });
            return;
        };

        res.status(200).send(user);
    });
};

export const signup = (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    })

    user.save((err, _) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        };

        res.status(201).send({ message: 'User registered successfully!' })
    });
};

export const updateUser = (req, res) => {
    User.findByIdAndUpdate(
        { _id: ObjectId(req.params.id) },
        req.body
    )
    .exec((err, user) => {
        if (err) {
            res.status(404).send({ message: 'User not find.' });
            return;
        };

        res.status(200).send(user);
    });
};

export const deleteUser = (req, res) => {
    User.remove( 
        { _id: ObjectId(req.params.id) } 
    )
    .exec((err, user) => {
        if (err) {
            res.status(404).send({ message: 'User not find.' });
            return;
        };

        res.status(200).send(user);
    });
};

export const searchUserByName = (req, res) => {
    User.find({ 
        name: {$regex: req.query.name } 
    }, '_id name email').exec((err, users) => {
        if (err) {
            res.status(404).send({ message: '' }); // Erro 404?
            return;
        };

        res.status(200).send(users);
    });
};