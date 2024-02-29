const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

app.get('/maps/api/place/autocomplete/json', async (req, res) => {
  try {
    const response = await axios.get(`https://maps.googleapis.com${req.url}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
