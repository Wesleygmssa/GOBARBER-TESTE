import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json()); // utlizando formato json sempre acima das rotas

app.use(routes);// ordem linear 



app.listen(3333, ()=>{
    console.log('🚀 Server started on port 3333');
})