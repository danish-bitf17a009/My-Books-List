const Book = require('../models/book.js');
const Joi = require('joi');
const {ValidationError} = require('joi');
const bookController = {
    async addBook(req, res, next){
        const createBookSchema= Joi.object({
            tittle: Joi.string().required,
            author: Joi.string().required,
            category: Joi.string().required,
            link: Joi.string().required
        });
        const {error} = createBookSchema.validate(req.body);
        if (error)
        {
            return next(error);
        }
        const {tittle, author, category, link} =req.body;
        
    },
    async getBooks(req, res, next) {
        let books;
        try {
            books = await Book.find({});

        } catch (error) {
            return next(error);
        }
        return res.status(200).json(books);
    },

};

    

