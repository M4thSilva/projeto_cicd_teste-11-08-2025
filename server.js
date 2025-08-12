import express from 'express'; // Importing the express module

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>aqui é curintia caralho !!!'</h1>);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

export default app;
