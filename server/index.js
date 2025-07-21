const express = require('express');
const cors    = require('cors');
require('dotenv').config();
const projectsRouter = require('./routes/projects');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/projects', projectsRouter);
app.use((req, res) => res.status(404).json({ error: 'Endpoint not found' }));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
