const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name'],
            trim: true,
            maxlength: [50, 'Name cannot be more than 50 characters'],
        },
        email: {
            type: String,
            required: [true, 'Please provide an email'],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please provide a valid email',
            ],
            lowercase: true,
        },
        phone: {
            type: String,
            trim: true,
            maxlength: [20, 'Phone cannot be more than 20 characters'],
        },
        service: {
            type: String,
            trim: true,
            default: 'General Inquiry',
            enum: ['Web Design', 'Web Development', 'Mobile Apps', 'SEO Optimization', 'Maintenance & Support', 'Digital Marketing', 'General Inquiry'],
        },
        message: {
            type: String,
            required: [true, 'Please provide a message'],
            maxlength: [2000, 'Message cannot be more than 2000 characters'],
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
