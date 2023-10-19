
const { response } = require('express');
const User = require('../models/user.js');
const Joi = require('joi');
const {ValidationError} = require('joi');

const userController = {
    async getUsers(req ,res ,next){
        let users;
        try {
            users = await User.find({});

        } catch (error) {
            return next(error);
        }
        
        return res.status(200).json(users);
    }
};

module.exports = userController;