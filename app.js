import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import {connectionDB} from './models/index.js';
import userRoute from './feature/user/user.route.js';
import postRoute from "./feature/post/post.route.js";
const app = express();

app.use(express.json());    
app.use("/posts", postRoute);

await connectionDB();

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/users', userRoute);
app.listen(3980, () => {
    console.log(`Server is running on port 3980`);
});