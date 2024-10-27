const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/supporthubplus', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Ticket schema
const ticketSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId: String // Assuming you have user authentication
});

const Ticket = mongoose.model('Ticket', ticketSchema);

// Create a new ticket
app.post('/api/tickets', async (req, res) => {
    const { title, description, userId } = req.body;
    const ticket = new Ticket({ title, description, userId });
    await ticket.save();
    res.status(201).send(ticket);
});

// Get all tickets for a user
app.get('/api/tickets', async (req, res) => {
    const { userId } = req.query;
    const tickets = await Ticket.find({ userId });
    res.send(tickets);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'no.reply.shp@gmail.com',
        pass: 'choiz21!C'
    }
});

app.post('/api/send-code', (req, res) => {
    const { email } = req.body;
    const code = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit code

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Your Verification Code',
        text: `Your verification code is: ${code}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, message: 'Failed to send email' });
        }
        res.json({ success: true, message: 'Code sent successfully' });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
