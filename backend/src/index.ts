import express from 'express';
import routes from './Routes';
import cors from 'cors';
import mongoose from 'mongoose';
import { runDumbData } from './DumbData';

const app = express();

app.listen(3333);
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/tshirt-store',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
},(err) => {
    if(!err){
        runDumbData();
    }
});

app.use(routes);
