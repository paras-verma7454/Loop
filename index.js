const axios = require('axios');
const express = require('express');
const app = express();
const PORT = 3000;
// List of API endpoints
const apiEndpoints = [
    'https://faqs-eaqk.onrender.com/api/faqs',
    'https://free-translate-go-api.onrender.com/translate',
    "https://paytm-ym3c.onrender.com",
    "https://loop-1.onrender.com"
    
];

// Function to fetch data from all endpoints
async function fetchData() {
    try {
        const responses = await Promise.all(apiEndpoints.map(url => axios.get(url)));
        // const data = responses.map(res => res.data);
        
        // console.log('Fetched Data:', data);
    } catch (error) {
        // console.error('Error fetching data:', error);
    }
}

// Run fetchData every 5 minute
setInterval(fetchData, 5 * 60 * 1000);

app.get('/', (req, res) => {
    res.send('Fetching data from APIs every 5 minute...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

