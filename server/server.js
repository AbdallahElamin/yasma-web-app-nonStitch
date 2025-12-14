import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3300;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log('Received Contact Form Submission:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    // Simulate email sending delay
    setTimeout(() => {
        res.status(200).json({ status: 'success', message: 'Email sent successfully!' });
    }, 1000);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
