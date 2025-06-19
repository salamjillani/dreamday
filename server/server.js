const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
const axios = require('axios');
require('dotenv').config();

const app = express();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const ZOOM_API_TOKEN = process.env.ZOOM_API_TOKEN;

app.use(cors());
app.use(express.json());

app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/create-zoom-meeting', async (req, res) => {
  try {
    const { name, email, eventType } = req.body;
    const response = await axios.post(
      'https://api.zoom.us/v2/users/me/meetings',
      {
        topic: `Consultation with ${name} for ${eventType}`,
        type: 2, // Scheduled meeting
        settings: { join_before_host: true },
      },
      {
        headers: { Authorization: `Bearer ${ZOOM_API_TOKEN}` },
      }
    );
    res.json({ join_url: response.data.join_url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));