const express = require('express');
const bookController = require('../controllers/bookController');
const router =express.Router();

router.get('/books',bookController.getBooks);
router.post('/users',);
router.post('/addbook',bookController.addBook);
router.delete('/removebook',bookController.removeBook);
router.put('/updatebook',bookController.updateBook);


module.exports = router;

