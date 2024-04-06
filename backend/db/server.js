// const express = require('express');
// const bodyParser = require('body-parser');
// const db = require('./connection').default; // Import your MongoDB connection
// const sendEmail = require('./sendEmail'); // Import your sendEmail function

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());

// // API routes
// app.post('/api/send-email', async (req, res) => {
//   try {
//     const { username, phoneNumber, email, subject, message } = req.body;
    
//     // Save form data to MongoDB
//     const contactCollection = db.collection('contacts');
//     await contactCollection.insertOne({ username, phoneNumber, email, subject, message });
    
//     // Send email
//     await sendEmail(username, email, subject, message);
    
//     res.json({ success: true, message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ success: false, message: 'Something went wrong. Please try again later.' });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
