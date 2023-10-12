const { response } = require('express');
const Book = require('../models/book.js');
const Joi = require('joi');
const {ValidationError} = require('joi');

//
const mongodbIdPattern = /^[0-9a-fA-F]{24}$/;


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
        let newBook;
        try {
            newBook = new Book({
                tittle,
                author,
                category,
                link
            });
            await newBook.save(); 
        } catch (error) {
            return next(error);
        }
        return res.status(201).json(newBook);
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
    async removeBook(req, res, next)
    {
        const deleteBookSchema = Joi.object({
            id: Joi.string().regex(mongodbIdPattern).required(),
          });
        
          const { error } = deleteBookSchema.validate(req.params);
          if (error){
                return next(error);        
          }
          const { id } = req.params;

          try {
            await Book.deleteOne({ _id: id });
          } catch (error) {
            return next(error);
          }
      
          return res.status(200).json({ message: "blog deleted" });
    },
    async updateBook(req, res, next ){
        const createBookSchema = Joi.object({
            tittle: Joi.string().required(),
            author: Joi.string().required,
            category: Joi.string().required,
            link: Joi.string().required
        });
        const { id } = req.params;

    const {error} = createBookSchema.validate(req.body);
    if (error){
        return next(error);
    }
    let updBook;
    try {
        updBook = await Book.findOne({_id:id});

    } catch (error) {
        return next(error);
    }
    const {tittle,author,category,link} = req.body;
    let response;
    try {
        response = await Book.updateOne({_id:id},{tittle,author,category,link}) ;
    } catch (error) {
        return next(error);
    }
    return res.status(200).json({message: 'Book Updated'});
    }

};

module.exports = bookController;

    

