import express from 'express';
import routes from './Routes';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.listen(3333);
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mzardo:mzardo@cluster0-lmor3.mongodb.net/tshirt-store?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

app.use(routes);
