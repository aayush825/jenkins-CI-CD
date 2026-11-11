const express = require('express');

const app = express();

const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' }
];

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Jenkins CI/CD Demo API!');
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'Application is healthy'
  });
});

app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
