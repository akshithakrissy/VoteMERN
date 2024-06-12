const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/voterouter');

app.use(cors());
app.use(express.json());

const PORT = 3000;
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://akshithakrissy:akmr1307@voteapp.10admud.mongodb.net/voterdata?retryWrites=true&w=majority&appName=VoteApp');
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectDB();
app.use('/api', router);
