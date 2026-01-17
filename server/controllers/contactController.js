const Contact = require('../models/Contact');
const sendEmail = require('../config/mail');

// @desc    Submit a contact form
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res) => {
    try {
        const { name, email, phone, service, message } = req.body;

        // Validate required input
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false,
                error: 'Please provide name, email, and message' 
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                success: false,
                error: 'Please provide a valid email address' 
            });
        }

        // Create contact record in database
        const contact = await Contact.create({
            name,
            email,
            phone: phone || '',
            service: service || 'General Inquiry',
            message,
        });

        // Send email notification to admin
        try {
            const emailHtml = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #6366f1, #ec4899); padding: 20px; border-radius: 10px; color: white; text-align: center;">
                        <h2 style="margin: 0;">New Contact Form Submission</h2>
                    </div>
                    <div style="background: #f9fafb; padding: 20px; margin-top: 20px; border-radius: 10px;">
                        <p style="margin: 10px 0;"><strong>👤 Name:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        ${phone ? `<p style="margin: 10px 0;"><strong>📱 Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
                        <p style="margin: 10px 0;"><strong>💼 Service Interested:</strong> ${service || 'General Inquiry'}</p>
                    </div>
                    <div style="background: white; padding: 20px; margin-top: 20px; border-left: 4px solid #6366f1; border-radius: 5px;">
                        <p style="margin: 0 0 10px 0;"><strong>💬 Message:</strong></p>
                        <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
                    </div>
                    <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
                        <p>This message was sent from your DevSpark website contact form</p>
                        <p>Time: ${new Date().toLocaleString()}</p>
                    </div>
                </div>
            `;

            await sendEmail({
                to: process.env.ADMIN_EMAIL,
                subject: `🎯 New Contact Submission from ${name} - ${service || 'General Inquiry'}`,
                html: emailHtml,
            });

            console.log(`✅ Email sent successfully to ${process.env.ADMIN_EMAIL}`);
        } catch (emailError) {
            console.error('⚠️ Email sending failed:', emailError.message);
            // Continue even if email fails - message is still saved in DB
        }

        // Send confirmation email to user
        try {
            const confirmationHtml = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #6366f1, #ec4899); padding: 20px; border-radius: 10px; color: white; text-align: center;">
                        <h2 style="margin: 0;">Thank You for Contacting DevSpark! ✨</h2>
                    </div>
                    <div style="background: white; padding: 20px; margin-top: 20px; border-radius: 10px;">
                        <p>Hi <strong>${name}</strong>,</p>
                        <p>We have received your message and will get back to you as soon as possible.</p>
                        <p style="margin-top: 20px;"><strong>Your Message Details:</strong></p>
                        <div style="background: #f9fafb; padding: 15px; border-radius: 5px; margin: 10px 0;">
                            <p style="margin: 5px 0;"><strong>Service:</strong> ${service || 'General Inquiry'}</p>
                            <p style="margin: 5px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
                        </div>
                        <p style="margin-top: 20px; color: #6b7280;">Thank you for your interest in DevSpark. We look forward to working with you!</p>
                    </div>
                    <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
                        <p>© 2024 DevSpark. All rights reserved.</p>
                    </div>
                </div>
            `;

            await sendEmail({
                to: email,
                subject: 'We Received Your Message - DevSpark',
                html: confirmationHtml,
            });

            console.log(`✅ Confirmation email sent to ${email}`);
        } catch (confirmError) {
            console.error('⚠️ Confirmation email failed:', confirmError.message);
        }

        res.status(201).json({
            success: true,
            message: 'Contact form submitted successfully. We will respond shortly!',
            data: contact,
        });
    } catch (error) {
        console.error('❌ Contact submission error:', error);
        res.status(500).json({ 
            success: false,
            error: 'Error submitting contact form. Please try again later.' 
        });
    }
};

// @desc    Get all contact messages
// @route   GET /api/messages
// @access  Admin
exports.getMessages = async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });

        res.status(200).json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Error fetching messages' });
    }
};
