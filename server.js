// server.js (updated)
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://127.0.0.1:27017/chatgpt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error(err);
});

app.use(express.json());

app.use('/api', require('./routes/init'));
app.use('/api', require('./routes/transactions'));
app.use('/api', require('./routes/statistics'));
app.use('/api', require('./routes/barChart'));
app.use('/api', require('./routes/pieChart'));
app.use('/api', require('./routes/combined'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
