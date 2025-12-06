import express from 'express';
import {chats} from './data/data.js'; 
import dotenv from 'dotenv';

dotenv.config();    
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/v1/chats', (req, res) => {
  res.send(chats);
});

app.get('/api/v1/chats/:id', (req, res) => {
  //console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);

});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
}); 