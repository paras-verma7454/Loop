const axios = require('axios');

// List of API endpoints
const apiEndpoints = [
    'https://faqs-zdpc.onrender.com/api/faqs',
    'https://free-translate-go-api.onrender.com/translate'
];

// Function to fetch data from all endpoints
async function fetchData() {
    try {
        const responses = await Promise.all(apiEndpoints.map(url => axios.get(url)));
        // const data = responses.map(res => res.data); // Axios stores JSON in `res.data`
        
        // console.log('Fetched Data:', data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}


// Run fetchData every 1 minute
setInterval(fetchData, 60 * 1000);

console.log('Fetching data from APIs every 1 minute...');
