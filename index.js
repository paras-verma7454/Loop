const axios = require('axios');
const express = require('express');
const app = express();
const PORT = 3000;
// List of API endpoints
const apiEndpoints = [
    'https://faqs-zdpc.onrender.com/api/faqs',
    'https://free-translate-go-api.onrender.com/translate'
];

// Function to fetch data from all endpoints
async function fetchData() {
    try {
        const responses = await Promise.all(apiEndpoints.map(url => axios.get(url)));
        const data = responses.map(res => res.data);
        
        console.log('Fetched Data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Run fetchData every 1 minute
setInterval(fetchData, 60 * 1000);

app.get('/', (req, res) => {
    res.send('Fetching data from APIs every 1 minute...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

