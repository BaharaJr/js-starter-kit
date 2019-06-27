import express from 'express';
import { join } from 'path';
import open from 'open';

const port = 5000;
const app = express();


app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(error)
  } else{
    open('http://localhost:' +port);
  }
});
