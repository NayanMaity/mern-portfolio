const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/about', require('./routes/about'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/project', require('./routes/project'));

// Static images (optional)
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Root route (optional)
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
