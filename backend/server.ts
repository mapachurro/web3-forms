import express from 'express';
import cors from 'cors';
import { Feedback } from '../schema'; // Import the schema file

const app = express();
app.use(cors()); // Enable cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// POST endpoint for feedback
app.post('/feedback', async (req, res) => {
  try {
    const { name, comment, isPositive } = req.body;
    const feedback = await Feedback.create({ name, comment, isPositive });
    await feedback.publish();
    res.status(201).send({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).send({ error: 'Failed to submit feedback. Please try again.' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
