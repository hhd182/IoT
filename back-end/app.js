import express from 'express';
import cors from 'cors';
import actionRoutes from './routes/actionRoutes.js';
import dataRoutes from './routes/dataRoutes.js';

const app = express()
const port = 3333

app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:3333',
        methods: 'GET,PUT,PATCH,POST,DELETE',
        credentials: true,
    }),
);

app.use('/api/datasensor', dataRoutes)
app.use('/api/action', actionRoutes)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

