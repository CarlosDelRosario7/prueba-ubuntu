const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.get('/api', (req, res) => {
  res.json({
    message: 'Hola desde el servidor',
  });
});

app.listen(port, () => {
  console.log(`El servidor está corriendo en http://localhost:${port}`);
});
