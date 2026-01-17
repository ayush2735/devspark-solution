const express = require('express');
const router = express.Router();
const {
    submitContact,
    getMessages,
} = require('../controllers/contactController');

// Contact form submission
router.post('/contact', submitContact);

// Get all messages (admin)
router.get('/messages', getMessages);

module.exports = router;
